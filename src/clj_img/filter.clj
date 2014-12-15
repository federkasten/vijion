(ns clj-img.filter)

(defn gray
  [image]
  (assoc image :data
         (map (fn [[r g b]]
                (let [v (max r g b)]
                  [v v v]))
              (:data image))))

(defn slide
  [buf w x y]
  (let [offset (+ (* w y) x)]
    (cond
     (pos? offset) (concat (drop offset buf) (take offset (repeat nil)))
     (neg? offset) (concat (take (- offset) (repeat nil)) (drop-last (- offset) buf))
     :else buf)))

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

(defn gray-convolve
  [image-filter gray-image]
  (when (odd? (:size image-filter))
    (let [w (:width gray-image)
          d (:data gray-image)
          s (:size image-filter)
          mat (:matrix image-filter)
          hs (quot s 2)
          ws (* s s)
          indices (range (- hs) (inc hs))
          offsets (apply concat (map (fn [y] (map (fn [x] [x y]) indices)) indices))
          window-buf (partition-all ws (apply interleave (map (fn [[ox oy]] (slide d w ox oy)) offsets)))]
      (assoc gray-image :data
             (doall (map (fn [wp]
                           (if (some nil? wp)
                             0
                             (-> (int (reduce + (map (fn [[p m]] (* p m)) (partition 2 (interleave wp mat)))))
                                 Math/abs
                                 (min 255))))
                         window-buf))))))

(def laplacian (partial gray-convolve laplacian-filter))
(def gradient (partial gray-convolve gradient-filter))

;;; simple implementation of laplacian filter

(defn simple-laplacian
  [image]
  (let [mat [1 1 1
             1 -8 1
             1 1 1]
        w (:width image)
        d (:data image)
        window-buf (partition-all 9
                                  (interleave (slide d w -1 -1)
                                              (slide d w 0 -1)
                                              (slide d w 1 -1)
                                              (slide d w -1 0)
                                              (slide d w 0 0)
                                              (slide d w 1 0)
                                              (slide d w -1 1)
                                              (slide d w 0 1)
                                              (slide d w 1 1)))]
    (assoc image :data
           (map (fn [w]
                  (let [[p00 p01 p02
                         p10 p11 p12
                         p20 p21 p22] w]
                    (if (some nil? w)
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
                          (min 255)))))
                window-buf))))

;;; parallel implementation of laplacian filter, but slow...

(def ^:private ^:const block-unit 100000)

(def ^:private ^:const num-processors (max 1 (.. Runtime getRuntime availableProcessors)))

(defn- pop-queue!
  [queue]
  (dosync
   (let [e (first @queue)]
     (alter queue rest)
     e)))

(defn parallel-laplacian
  [image]
  (let [w (:width image)
        d (:data image)
        window-buf (partition-all 9
                                  (interleave (slide d w -1 -1)
                                              (slide d w 0 -1)
                                              (slide d w 1 -1)
                                              (slide d w -1 0)
                                              (slide d w 0 0)
                                              (slide d w 1 0)
                                              (slide d w -1 1)
                                              (slide d w 0 1)
                                              (slide d w 1 1)))
        window-buf-blocks (partition-all block-unit window-buf)
        blocks-queue (ref (map-indexed vector window-buf-blocks))
        filtered-blocks (time (apply merge
                                     (doall (pmap (fn [_]
                                                    (loop [[idx buf] (pop-queue! blocks-queue)
                                                           res {}]
                                                      (if (nil? buf)
                                                        res
                                                        (recur (pop-queue! blocks-queue)
                                                               (merge res {idx (map
                                                                                (fn [w]
                                                                                  (let [[p00 p01 p02
                                                                                         p10 p11 p12
                                                                                         p20 p21 p22] w]
                                                                                    (if (some nil? w)
                                                                                      0
                                                                                      (-> (int (+ (* (nth laplacian-filter 0) p00)
                                                                                                  (* (nth laplacian-filter 1) p01)
                                                                                                  (* (nth laplacian-filter 2) p02)
                                                                                                  (* (nth laplacian-filter 3) p10)
                                                                                                  (* (nth laplacian-filter 4) p11)
                                                                                                  (* (nth laplacian-filter 5) p12)
                                                                                                  (* (nth laplacian-filter 6) p20)
                                                                                                  (* (nth laplacian-filter 7) p21)
                                                                                                  (* (nth laplacian-filter 8) p22)))
                                                                                          Math/abs
                                                                                          (min 255)))))
                                                                                buf)})))))
                                                  (range num-processors)))))]
    (assoc image
      :data (time (flatten (map #(get filtered-blocks %) (range (count window-buf-blocks))))))))
