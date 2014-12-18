(ns vijion.filter
  (:require [vijion.util :refer :all]))

;;; convert gray-scale color

(defn gray
  [image]
  (assoc image :data
         (map (fn [[r g b]]
                (let [v (max r g b)]
                  [v v v]))
              (:data image))))

;;; filters

(def laplacian-filter {:size 5
                       :matrix [-1 -3 -4 -3 -1
                                -3 0 6 0 -3
                                -4 6 20 6 -4
                                -3 0 6 0 -3
                                -1 -3 -4 -3 -1]})

(def gradient-filter {:size 5
                      :matrix [1/25 1/25 1/25 1/25 1/25
                               1/25 1/25 1/25 1/25 1/25
                               1/25 1/25 1/25 1/25 1/25
                               1/25 1/25 1/25 1/25 1/25
                               1/25 1/25 1/25 1/25 1/25]})

;;; convolve

(defn gray-convolve
  [image-filter gray-image]
  (when (odd? (:size image-filter))
    (let [w (:width gray-image)
          d (doall (:data gray-image))
          s (:size image-filter)
          mat (:matrix image-filter)
          hs (quot s 2)
          ws (* s s)
          indices (range (- hs) (inc hs))
          offsets (doall (vec (for [oy indices
                                    ox indices]
                                [(long ox) (long oy)])))
          len (count d)
          px (pick-fn d len w)]
      (assoc gray-image :data
             (loop [idx 0
                    res []]
               (if (< idx len)
                 (recur (inc idx)
                        (conj res (let [wp (map (fn [[ox oy]] (px idx ox oy)) offsets)]
                                    (if (some nil? wp)
                                      0
                                      (-> (long (reduce + (map * wp mat)))
                                          Math/abs
                                          (min 255))
                                      ))))
                 res))))))

(defn- convolve*
  [data len width mat offsets start end]
  (loop [idx start
         res []]
    (if (< idx end)
      (recur (inc idx)
             (conj res (let [wp (map (fn [[ox oy]] (pick data len width idx ox oy)) offsets)]
                         (if (some nil? wp)
                           0
                           (-> (long (reduce + (map * wp mat)))
                               Math/abs
                               (min 255))))))
      res)))

(defn parallel-gray-convolve
  [image-filter gray-image]
  (when (odd? (:size image-filter))
    (let [width (:width gray-image)
          data (doall (:data gray-image))
          s (:size image-filter)
          mat (:matrix image-filter)
          hs (quot s 2)
          ws (* s s)
          indices (range (- hs) (inc hs))
          offsets (doall (vec (for [oy indices
                                    ox indices]
                                [(long ox) (long oy)])))
          len (count data)
          blocks (range 0 len block-unit)
          window-buf-blocks (partition-all 2 (interleave blocks (conj (vec (drop 1 blocks)) len)))
          blocks-queue (ref (map-indexed vector window-buf-blocks))
          filtered-blocks (apply merge
                                 (doall (pmap (fn [_]
                                                (loop [[idx w] (pop-queue! blocks-queue)
                                                       res {}]
                                                  (if (nil? w)
                                                    res
                                                    (let [[start end] w]
                                                      (recur (pop-queue! blocks-queue)
                                                             (merge res {idx (doall (convolve* data len width mat offsets start end))}))))))
                                              (range num-processors))))]
      (assoc gray-image
        :data (vec (doall (flatten (map #(get filtered-blocks %) (range (count window-buf-blocks))))))))))

(def laplacian (partial gray-convolve laplacian-filter))
(def gradient (partial gray-convolve gradient-filter))

(def parallel-laplacian (partial parallel-gray-convolve laplacian-filter))
(def parallel-gradient (partial parallel-gray-convolve gradient-filter))

;;; simple implementation of laplacian filter

(defn simple-laplacian
  [gray-image]
  (let [mat [1 1 1
             1 -8 1
             1 1 1]
        width (:width gray-image)
        data (doall (:data gray-image))
        len (count data)]
    (assoc gray-image :data
           (loop [idx 0
                  res []]
             (if (< idx len)
               (recur (inc idx)
                      (conj res (let [p00 (pick data len width idx -1 -1)
                                      p01 (pick data len width idx 0 -1)
                                      p02 (pick data len width idx 1 -1)
                                      p10 (pick data len width idx -1 0)
                                      p11 (pick data len width idx 0 0)
                                      p12 (pick data len width idx 1 0)
                                      p20 (pick data len width idx -1 1)
                                      p21 (pick data len width idx 0 1)
                                      p22 (pick data len width idx 1 1)]
                                  (if (some nil? [p00 p01 p02 p10 p11 p12 p20 p21 p22])
                                    0
                                    (-> (int (+ (* (nth mat 0) p00)
                                                (* (nth mat 1) p01)
                                                (* (nth mat 2) p02)
                                                (* (nth mat 3) p10)
                                                (* (nth mat 4) p11)
                                                (* (nth mat 5) p12)
                                                (* (nth mat 6) p20)
                                                (* (nth mat 7) p21)
                                                (* (nth mat 8) p22)))
                                        Math/abs
                                        (min 255))))))
               res)))))
