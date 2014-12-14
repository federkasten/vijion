(ns clj-img.filter)

(defn gray
  [buf]
  (map (fn [[r g b]]
         (let [v (max r g b)]
           [v v v]))
       buf))
