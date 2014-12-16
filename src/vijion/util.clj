(ns vijion.util)

(def ^:const block-unit 3000)

(def ^:const num-processors (max 1 (.. Runtime getRuntime availableProcessors)))

(defn pop-queue!
  [queue]
  (dosync
   (let [e (first @queue)]
     (alter queue rest)
     e)))

(defn pick
  [data len width idx ox oy]
  (let [i (+ idx ox (* width oy))]
    (cond
     (< i 0) nil
     (< i len) (nth data i)
     :else nil)))
