(ns clj-img.filter)

(defn make-rgb
  [gbuf]
  (map (fn [v] [v v v]) gbuf))

(defn gray
  [buf]
  (map (fn [[r g b]]
         (let [v (max r g b)]
           [v v v]))
       buf))

(defn gray-scale
  [buf]
  (map (fn [[r g b]] (max r g b)) buf))

(def laplacian-filter [1 1 1
                       1 -8 1
                       1 1 1])

(defn slide
  [buf w x y]
  (let [offset (+ (* w y) x)]
    (cond
     (pos? offset) (concat (drop offset buf) (take offset (repeat nil)))
     (neg? offset) (concat (take (- offset) (repeat nil)) (drop-last (- offset) buf))
     :else buf)))

(defn laplacian
  [buf w]
  (let [window-buf (partition-all 9
                                  (interleave (slide buf w -1 -1)
                                              (slide buf w 0 -1)
                                              (slide buf w 1 -1)
                                              (slide buf w -1 0)
                                              (slide buf w 0 0)
                                              (slide buf w 1 0)
                                              (slide buf w -1 1)
                                              (slide buf w 0 1)
                                              (slide buf w 1 1)))]
    (map (fn [w]
           (let [[p00 p01 p02
                  p10 p11 p12
                  p20 p21 p22] w]
             (if (some nil? w)
               0
               (-> (+ (* (nth laplacian-filter 0) p00)
                      (* (nth laplacian-filter 1) p01)
                      (* (nth laplacian-filter 2) p02)
                      (* (nth laplacian-filter 3) p10)
                      (* (nth laplacian-filter 4) p11)
                      (* (nth laplacian-filter 5) p12)
                      (* (nth laplacian-filter 6) p20)
                      (* (nth laplacian-filter 7) p21)
                      (* (nth laplacian-filter 8) p22))
                   Math/abs
                   (min 255)))))
     window-buf)))
