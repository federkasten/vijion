(ns vijion.util.disjoint)

(defrecord ^:private DisjointSetForestNode [value rank parent])

(defrecord ^:private DisjointSetForest [nodes num sizes])

(defn append
  [dsf x]
  (if (get (:node dsf) x)
    dsf
    (->DisjointSetForest (assoc (:nodes dsf) x (->DisjointSetForestNode x 0 nil))
                         (inc (:num dsf))
                         (conj (:sizes dsf) {x 1}))))

(defn- get-canonical
  [dsf x]
  (let [node ((:nodes dsf) x)
        parent (:parent node)]
    (cond
      (= node nil) [dsf nil]
      (= parent nil) [dsf x]
      :else (let [[canonical-dsf canonical] (get-canonical dsf parent)
                  nodes (:nodes canonical-dsf)]
              [(->DisjointSetForest (assoc-in nodes [x :parent] canonical)
                                    (:num dsf)
                                    (:sizes dsf))
               canonical]))))

(defn union
  [dsf x y]
  (let [[new-dsf x-root] (get-canonical dsf x)
        [new-dsf y-root] (get-canonical new-dsf y)
        x-size (get (:sizes dsf) x-root)
        y-size (get (:sizes dsf) y-root)
        nodes (:nodes new-dsf)
        new-num (dec (:num dsf))
        x-rank (:rank (get nodes x-root))
        y-rank (:rank (get nodes y-root))]
    (cond (or (nil? x-root)
              (nil? y-root)
              (= x-root y-root)) new-dsf
              (< x-rank y-rank) (->DisjointSetForest
                                 (assoc-in nodes [x-root :parent] y-root)
                                 new-num
                                 (-> (:sizes dsf)
                                     (assoc y-root (+ x-size y-size))
                                     (dissoc x-root)))
              (< y-rank x-rank) (->DisjointSetForest
                                 (assoc-in nodes [y-root :parent] x-root)
                                 new-num
                                 (-> (:sizes dsf)
                                     (assoc x-root (+ x-size y-size))
                                     (dissoc y-root)))
              :else (->DisjointSetForest
                     (-> nodes
                         (transient)
                         (assoc! y-root (assoc (nodes y-root) :parent x-root))
                         (assoc! x-root (assoc (nodes x-root) :rank (inc x-rank)))
                         (persistent!))
                     new-num
                     (-> (:sizes dsf)
                         (assoc x-root (+ x-size y-size))
                         (dissoc y-root))))))

(defn size
  ([dsf]
   (:num dsf))
  ([dsf x]
   (get (:sizes dsf) x)))

(defn head
  [dsf x]
  (loop [x x]
    (if-let [node (get (:nodes dsf) x)]
      (if-let [parent (:parent node)]
        (recur parent)
        x)
      nil)))

(def ^:private empty-union-find (->DisjointSetForest {} 0 {}))

(defn disjoint-set-forest
  [xs]
  (reduce append empty-union-find xs))
