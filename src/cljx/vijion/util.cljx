(ns vijion.util)

(def ^:const block-unit 10000)

#+clj
(def ^:const num-processors (max 1 (.. Runtime getRuntime availableProcessors)))
#+cljs
(def ^:const num-processors 1)

(defn pop-queue!
  [queue]
  #+clj
  (dosync
   (let [e (first @queue)]
     (alter queue rest)
     e))
  #+cljs
  nil)

(defn pick-fn
  [data len width]
  (fn [idx ox oy]
    (let [i (+ idx ox (* width oy))]
      (cond
       (< i 0) nil
       (< i len) (nth data i)
       :else nil))))

(defn pick
  [data len width idx ox oy]
  (let [i (+ idx ox (* width oy))]
    (cond
     (< i 0) nil
     (< i len) (nth data i)
     :else nil)))

(def abs
  #+clj #(Math/abs %)
  #+cljs #(.abs js/Math %))
