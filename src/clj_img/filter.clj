(ns clj-img.filter)

(defn gray
  [image]
  (assoc image :data
         (map (fn [[r g b]]
                (let [v (max r g b)]
                  [v v v]))
              (:data image))))

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
                                              (slide d w 1 1)))]
    (assoc image :data
           (map (fn [w]
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

(defn laplacian*
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
