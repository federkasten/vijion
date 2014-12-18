(defproject vijion "0.1.0-SNAPSHOT"
  :description "Experimental implementation of Computer Vision examples with pure Clojure"
  :url "https://github.com/federkasten/vijion"
  :license {:name "Apache License, Version 2.0"
            :url "http://www.apache.org/licenses/LICENSE-2.0.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [com.keminglabs/cljx "0.5.0" :exclusions [org.clojure/clojure]]]
  :source-paths ["src/clj" "src/cljs" "target/gen-src/clj" "target/gen-src/cljs"]
  :profiles {:dev {:dependencies [[org.clojure/clojurescript "0.0-2496"]]}}
  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/gen-src/clj"
                   :rules :clj}
                  {:source-paths ["src/cljx"]
                   :output-path "target/gen-src/cljs"
                   :rules :cljs}]}
  :cljsbuild {:builds
              {:dev
               {:id "dev"
                :source-paths ["src/cljs" "target/gen-src/cljs"]
                :jar true
                :compiler {:output-dir "www/js/dev"
                           :output-to "www/js/vijion_dev.js"
                           :source-map "www/js/vijion_dev.js.map"
                           :optimizations :none
                           :pretty-print true}}
               :prod
               {:id "prod"
                :source-paths ["src/cljs" "target/gen-src/cljs"]
                :jar true
                :compiler {:output-dir "www/js/prod"
                           :output-to "www/js/vijion.js"
                           :source-map "www/js/vijion.js.map"
                           :optimizations :advanced
                           :pretty-print true}}}})
