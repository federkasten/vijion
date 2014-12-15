(ns clj-img.core
  (:require [clojure.java.io :as io]
            [clj-img.gray])
  (:import [javax.imageio ImageIO]
           [java.awt.image BufferedImage]
           [java.io ByteArrayInputStream]
           [java.nio ByteBuffer]))

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
                 (mapv reverse))})))

(def ubyte (fn [^long val]
             (if (>= val 128)
               (byte (- val 256))
               (byte val))))

(defn- rgb-bytes
  [size data]
  (let [bb (ByteBuffer/allocate size)]
    (doseq [[r g b] data]
      (.put bb ^byte (ubyte b))
      (.put bb ^byte (ubyte g))
      (.put bb ^byte (ubyte r)))
    (.array bb)))

(defn save-image-buffer
  [f image-format image]
  (when (= :rgb (:color image))
    (let [data-size (* 3 (:width image) (:height image))
          data-array (rgb-bytes data-size (:data image))
          img (BufferedImage. (:width image)
                              (:height image)
                              BufferedImage/TYPE_3BYTE_BGR)
          target (.. img getRaster getDataBuffer getData)]
      (System/arraycopy data-array 0 target 0 (alength target))
      (ImageIO/write img image-format (io/file f))
      nil)))
