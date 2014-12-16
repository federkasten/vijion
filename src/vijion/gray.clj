(ns vijion.gray)

(defn rgb->gray
  [image]
  (assoc image
    :color :gray
    :data (mapv (fn [[r g b]] (max r g b)) (:data image))))

(defn gray->rgb
  [image]
  (assoc image
    :color :rgb
    :data (mapv (fn [v] [v v v]) (:data image))))
