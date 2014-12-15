(ns clj-img.core
  (:require [clojure.java.io :as io]
            [clj-img.gray])
  (:import [javax.imageio ImageIO]
           [java.awt.image BufferedImage]
           [java.io ByteArrayInputStream]))

(defn load-image-buffer
  [f]
  (doall
   (let [img (ImageIO/read (io/file f))]
     {:width (.. img getWidth)
      :height (.. img getHeight)
      :color :rgb
      :data (->> (.. img getRaster getDataBuffer getData)
                 (map #(bit-and % 0xff))
                 (partition-all 3)
                 (map reverse))})))

(def ^:private ubyte (memoize (fn [val]
                                (if (>= val 128)
                                  (byte (- val 256))
                                  (byte val)))))

(defn save-image-buffer
  [f image-format image]
  (when (= :rgb (:color image))
    (let [ubyte-buf (->> (map reverse (:data image))
                         flatten
                         (map ubyte))
          image-data-array (into-array Byte/TYPE ubyte-buf)
          img (BufferedImage. (:width image)
                              (:height image)
                              BufferedImage/TYPE_3BYTE_BGR)
          target (.. img getRaster getDataBuffer getData)]
      (System/arraycopy image-data-array 0 target 0 (alength target))
      (ImageIO/write img image-format (io/file f)))))
