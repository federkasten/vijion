(ns vijion.util.dsf)

(defprotocol DisjointSetForest
  "A data structure that maintains information on a number of disjoint sets."
  (union [this x y] "Union two sets. Return a new disjoint set forest with the
sets that x and y belong to unioned.")
  (size [this x])
  (get-canonical [this x] "Get the canonical element of an element. Return a
vector of two elements: a new disjoint set forest that may have been modified
due to the path compression optimization, and the canonical element of the input, or
nil if no such element exists in the forest."))

(defrecord ^:private UFNode [value rank parent])

(declare empty-union-find)

(deftype PersistentDSF [elt-map num-sets sizes _meta]
  Object
  ;; prints out a map from canonical element to elements unioned to that element.
  (toString [this] (str (group-by this (keys elt-map))))
  (hashCode [this] (.hashCode elt-map))
  (equals [this that] (or (identical? this that) (.equals elt-map (.elt-map that))))

  clojure.lang.Seqable
  ;; seq returns each of the canonical elements, not all of the elements
  (seq [this]
    (map first (filter (comp nil? :parent val) elt-map)))

  clojure.lang.IPersistentCollection
  ;; cons adds the input to a new singleton set
  (cons [this x]
    (if (elt-map x)
      this
      (PersistentDSF. (assoc elt-map x (->UFNode x 0 nil)) (inc num-sets) (conj sizes {x 1}) _meta)))
  (empty [this] empty-union-find)
  (equiv [this that] (.equals this that))

  ;; count returns the number of disjoint sets, not the number of total elements
  clojure.lang.Counted
  (count [this] num-sets)

  clojure.lang.ILookup
  ;; valAt gets the canonical element of the key without path compression
  (valAt [this k] (.valAt this k nil))
  (valAt [this k not-found]
    (loop [x k]
      (if-let [node (elt-map x)]
        (if-let [parent (:parent node)]
          (recur parent)
          x)
        not-found)))

  clojure.lang.IFn
  ;; invoking as function behaves like valAt.
  (invoke [this k] (.valAt this k))
  (invoke [this k not-found] (.valAt this k not-found))

  ;; implementing IMeta and IObj gives us meta
  clojure.lang.IMeta
  (meta [this] _meta)
  clojure.lang.IObj
  (withMeta [this meta] (PersistentDSF. elt-map num-sets sizes meta))

  DisjointSetForest
  (get-canonical [this x]
    (let [node (elt-map x)
          parent (:parent node)]
      (cond
        (= node nil) [this nil]
        (= parent nil) [this x]
        ;; path compression. set the parent of each node on the path we take
        ;; to the root that we find.
        :else (let [[set canonical] (get-canonical this parent)
                    elt-map (.elt-map set)]
                [(PersistentDSF. (assoc-in elt-map [x :parent] canonical)
                                 sizes
                                 num-sets _meta)
                 canonical]))))
  (size [this x]
    (get sizes x))
  (union [this x y]
    (let [[newset x-root] (get-canonical this x)
          [newset y-root] (get-canonical newset y)
          ;; update elt-map to be the new one after get-canonical potentially
          ;; changes it, and decrement num-sets since 2 sets are joining
          x-size (get sizes x-root)
          y-size (get sizes y-root)
          elt-map (.elt-map newset)
          num-sets (dec num-sets)
          x-rank (:rank (elt-map x-root))
          y-rank (:rank (elt-map y-root))]
      (cond (or (nil? x-root) ;; no-op - either the input doesn't exist in the
                (nil? y-root) ;; universe, or the two inputs are already unioned
                (= x-root y-root)) newset
            (< x-rank y-rank) (PersistentDSF.
                               (assoc-in elt-map [x-root :parent] y-root)
                               num-sets
                               (-> sizes
                                   (assoc y-root (+ x-size y-size))
                                   (dissoc x-root))
                               _meta)
            (< y-rank x-rank) (PersistentDSF.
                               (assoc-in elt-map [y-root :parent] x-root)
                               num-sets
                               (-> sizes
                                   (assoc x-root (+ x-size y-size))
                                   (dissoc y-root))
                               _meta)
            :else (PersistentDSF.
                   (-> elt-map
                       (transient)
                       (assoc! y-root (assoc (elt-map y-root) :parent x-root))
                       (assoc! x-root (assoc (elt-map x-root) :rank (inc x-rank)))
                       (persistent!))
                   num-sets
                   (-> sizes
                       (assoc x-root (+ x-size y-size))
                       (dissoc y-root))
                   _meta)))))

(def ^:private empty-union-find (->PersistentDSF {} 0 {} {}))

(defn make-dsf
  "Returns a new union-find data structure with provided elements as singletons."
  [& xs]
  (reduce conj empty-union-find xs))
