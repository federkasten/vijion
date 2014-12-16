(ns vijion.segment
  (:require [vijion.util :refer :all]
            [jordanlewis.data.union-find :as uf]))

(def ^:const sigma 0.5)
(def ^:const kappa 50)
(def ^:const min-value 20)

(defn- square
  [x]
  (* x x))

(defn- diff
  [src dst]
  (Math/sqrt (+ (square (- (nth src 0) (nth dst 0)))
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

(defn uf-count
  [dsf x len]
  (/ len (count dsf))
  ;; (-> (.elt-map dsf)
  ;;     (get x)
  ;;     :value)
  )

(def init-threashold (/ kappa 1))

(defn segment
  [sorted-edges length]
  (loop [e (first sorted-edges)
         dsf (apply uf/union-find (range length))
         threashold {}
         rest-edges (rest sorted-edges)]
    (if e
      (let [ha (dsf (:a e))
            hb (dsf (:b e))
            ta (get threashold ha init-threashold)
            tb (get threashold hb init-threashold)]
        (if (and (not= ha hb)
                 (< (:w e) ta)
                 (< (:w e) tb))
          (let [new-dsf (uf/union dsf ha hb)
                new-a (new-dsf ha)]
            (recur (first rest-edges)
                   new-dsf
                   (conj threashold {new-a (+ (:w e) (/ kappa (uf-count new-dsf ha length)))})
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
               (let [h (dsf idx)]
                 (if-let [c (get colors h nil)]
                   (recur (inc idx)
                          colors
                          (conj data c))
                   (let [new-c (random-rgb)]
                     (recur (inc idx)
                            (conj colors {h new-c})
                            (conj data new-c)))))
               data))}))
