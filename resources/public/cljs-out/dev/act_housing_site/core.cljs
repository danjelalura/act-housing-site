(ns ^:figwheel-hooks act-housing-site.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [act-housing-website.components :as components]))

(defonce app-state (atom {:resident-assistants
                          {:ra-1 "Danjela"
                           :ra-2 "Kutu"
                           :ra-3 "Daniel"}}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn main-page []
  [:div
   [components/navigation-bar]
   [components/level-separator]
   [components/first-section]
   [components/photos]
   (components/level-separator "about")
   [components/about]
   (components/level-separator "laundry-schedule")
   [components/laundry-schedule]
   [components/section]])


(defn mount [el]
  (rdom/render [main-page] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element))
