(ns clj-img.core
  (:require [clojure.java.io :as io])
  (:import [javax.imageio ImageIO]
           [java.awt.image BufferedImage]
           [java.io ByteArrayInputStream]))

(defn load-image-buffer
  [f]
  (doall
   (let [img (ImageIO/read (io/file f))]
     (->> img
          .getRaster
          .getDataBuffer
          .getData
          (map #(bit-and % 0xff))
          (partition-all 3)
          (map reverse)))))

(defn- ubyte
  [val]
  (if (>= val 128)
    (byte (- val 256))
    (byte val)))

(defn save-image-buffer
  [f image-format buf w h]
  (let [bbuf (->> (map reverse buf)
                  flatten
                  (map ubyte))
        bb (into-array Byte/TYPE bbuf)
        img (BufferedImage. w h BufferedImage/TYPE_3BYTE_BGR)
        target (-> img
                   .getRaster
                   .getDataBuffer
                   .getData)]
    (System/arraycopy bb 0 target 0 (alength target))
    (ImageIO/write img image-format (io/file f))))
