(ns clj-img.core
  (:require [clojure.java.io :as io])
  (:import [javax.imageio ImageIO]
           [java.awt.image BufferedImage]
           [java.io ByteArrayInputStream]))

(defn load-image-buffer
  [f]
  (->> (ImageIO/read (io/file f))
       .getRaster
       .getDataBuffer
       .getData
       (map #(+ % 128))
       (partition-all 3)))

(defn save-image-buffer
  [f image-format buf w h]
  (let [bbuf (->> (flatten buf)
                  (map #(- % 128)))
        bb (into-array Byte/TYPE bbuf)
        img (BufferedImage. w h BufferedImage/TYPE_3BYTE_BGR)
        target (-> img
                   .getRaster
                   .getDataBuffer
                   .getData)]
    (System/arraycopy bb 0 target 0 (alength target))
    (ImageIO/write img image-format (io/file f))))
