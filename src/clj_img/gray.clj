(ns clj-img.gray)

(defn rgb->gray
  [image]
  (assoc image
    :color :gray
    :data (map (fn [[r g b]] (max r g b)) (:data image))))

(defn gray->rgb
  [image]
  (assoc image
    :color :rgb
    :data (map (fn [v] [v v v]) (:data image))))
