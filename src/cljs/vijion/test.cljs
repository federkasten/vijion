(ns vijion.test
  (:require [domina :refer [by-id set-attr! set-classes! set-style! append! detach!]]
            [domina.events :refer [listen! prevent-default]]
            [vijion.core :as core]
            [vijion.filter :as filter]
            [vijion.gray :as gray]
            [vijion.segment :as segment]))

(def body (.-body js/document))

(def loading (-> (.createElement js/document "div")
                 (set-classes! "loading")))

(defn hide!
  [e]
  (set-style! e "display" "none"))

(defn show!
  [e]
  (set-style! e "display" "inherit"))

(defn caution
  []
  (js/confirm "CAUTION: It takes some minutes to calculate the result. This may block and freeze your browser process."))

(defn ^:export bootstrap
  [canvas-id url]
  (core/load-image-to-canvas! canvas-id url)
  (listen! (by-id "gradient") :click
           (fn [e]
             (prevent-default e)
             (when (caution)
               (append! body loading)
               (hide! (by-id "control"))
               (js/setTimeout
                (fn []
                  (let [img (core/image-from-canvas canvas-id)]
                    (core/update-canvas-image! canvas-id
                                               (-> img
                                                   gray/rgb->gray
                                                   filter/gradient
                                                   gray/gray->rgb)))
                  (detach! loading)
                  (show! (by-id "control")))
                100))))
  (listen! (by-id "laplacian") :click
           (fn [e]
             (prevent-default e)
             (when (caution)
               (append! body loading)
               (hide! (by-id "control"))
               (js/setTimeout
                (fn []
                  (let [img (core/image-from-canvas canvas-id)]
                    (core/update-canvas-image! canvas-id
                                               (-> img
                                                   gray/rgb->gray
                                                   filter/laplacian
                                                   gray/gray->rgb)))
                  (detach! loading)
                  (show! (by-id "control")))
                100))))
  (listen! (by-id "segment") :click
           (fn [e]
             (prevent-default e)
             (when (caution)
               (append! body loading)
               (hide! (by-id "control"))
               (js/setTimeout
                (fn []
                  (let [img (core/image-from-canvas canvas-id)]
                    (core/update-canvas-image! canvas-id
                                               (-> img
                                                   segment/segment)))
                  (detach! loading)
                  (show! (by-id "control")))
                100))))
  (listen! (by-id "reset") :click
           (fn [e]
             (prevent-default e)
             (core/load-image-to-canvas! canvas-id url))))
