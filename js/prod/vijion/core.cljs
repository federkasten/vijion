(ns vijion.core
  (:require [domina :refer [by-id set-attr! attr]]
            [domina.events :refer [listen!]]))

(defn load-image-to-canvas!
  [canvas-id url]
  (let [canvas (by-id canvas-id)
        ctx (.getContext canvas "2d")
        img (new js/Image)]
    (listen! img :load
             (fn [e]
               (let [w (.-width img)
                     h (.-height img)]
                 (set-attr! canvas :width w)
                 (set-attr! canvas :height h)
                 (.drawImage ctx img 0 0 w h))))
    (set! (.-src img) url))
  nil)

(defn image-from-canvas
  [canvas-id]
  (let [canvas (by-id canvas-id)
        ctx (.getContext canvas "2d")
        w (attr canvas :width)
        h (attr canvas :height)
        img-data (.getImageData ctx 0 0 w h)]
    {:width (.-width img-data)
     :height (.-height img-data)
     :color :rgb
     :data (map
            (fn [[r g b a]] [r g b])
            (partition-all 4 (array-seq (.-data img-data))))}))

(defn update-canvas-image!
  [canvas-id image]
  (when (= :rgb (:color image))
    (let [canvas (by-id canvas-id)
          ctx (.getContext canvas "2d")
          img-data (.createImageData ctx (:width image) (:height image))
          data (.-data img-data)
          pixel-array (js/Uint8ClampedArray. (into-array (flatten (map (fn [[r g b]] [r g b 255]) (:data image)))))]
      (dotimes [i (alength pixel-array)]
        (aset data i (aget pixel-array i)))
      (.putImageData ctx img-data 0 0)
      nil)))
