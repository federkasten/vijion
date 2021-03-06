(ns vijion.segment
  (:require [vijion.util :refer [pick sqrt]]
            [vijion.util.disjoint :as dj]))

(def ^:const sigma 0.5)
(def ^:const kappa 500)
(def ^:const min-value 20)

(defn- square
  [x]
  (* x x))

(defn- diff
  [src dst]
  (sqrt (+ (square (- (nth src 0) (nth dst 0)))
           (square (- (nth src 1) (nth dst 1)))
           (square (- (nth src 2) (nth dst 2))))))

(defn- weight
  [data len width idx ox oy]
  (let [src (pick data len width idx 0 0)
        dst (pick data len width idx ox oy)]
    (if (and src dst)
      (diff src dst)
      nil)))

(defn- edge
  [data len width idx ox oy]
  {:a idx
   :b (+ idx ox (* width oy))
   :w (weight data len width idx ox oy)})

(defn make-edges
  [image]
  (let [width (:width image)
        data (:data image)
        len (count data)]
    (->> (loop [idx 0
                res []]
           (if (< idx len)
             (recur (inc idx)
                    (conj res
                          (edge data len width idx 1 0)
                          (edge data len width idx 0 1)
                          (edge data len width idx 1 1)
                          (edge data len width idx 1 -1)))
             res))
         (filter #((complement nil?) (:w %))))))

(defn sort-edges
  [edges]
  (sort-by :w edges))

(def init-threashold (/ kappa 1))

(defn dsf-segment
  [sorted-edges length]
  (loop [e (first sorted-edges)
         dsf (dj/disjoint-set-forest (range length))
         threashold {}
         rest-edges (rest sorted-edges)]
    (if e
      (let [ha (dj/head dsf (:a e))
            hb (dj/head dsf (:b e))
            ta (get threashold ha init-threashold)
            tb (get threashold hb init-threashold)]
        (if (and (not= ha hb)
                 (< (:w e) ta)
                 (< (:w e) tb))
          (let [new-dsf (dj/union dsf ha hb)
                new-a (dj/head new-dsf ha)]
            (recur (first rest-edges)
                   new-dsf
                   (conj threashold {new-a (+ (:w e) (/ kappa (dj/size new-dsf new-a)))})
                   (rest rest-edges)))
          (recur (first rest-edges)
                 dsf
                 threashold
                 (rest rest-edges))))
      dsf)))

(defn random-rgb
  []
  [(rand-int 255)
   (rand-int 255)
   (rand-int 255)])

(defn make-segment-image
  [width height dsf]
  (let [len (* width height)]
    {:width width
     :height height
     :color :rgb
     :data (loop [idx 0
                  colors {}
                  data []]
             (if (< idx len)
               (let [h (dj/head dsf idx)]
                 (if-let [c (get colors h nil)]
                   (recur (inc idx)
                          colors
                          (conj data c))
                   (let [new-c (random-rgb)]
                     (recur (inc idx)
                            (conj colors {h new-c})
                            (conj data new-c)))))
               data))}))

(defn segment
  [color-image]
  (let [w (:width color-image)
        h (:height color-image)
        edges (-> (make-edges color-image)
                  sort-edges)
        dsf (dsf-segment edges (* w h))]
    (make-segment-image w h dsf)))
