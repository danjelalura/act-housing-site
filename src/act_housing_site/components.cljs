(ns act-housing-website.components)

(defn photos
  ""
  []
  [:div {:class "container"}
   [:div {:class "box"}
    [:div {:class "column is-half is-8 is-offset-2"}
     [:div {:class "columns"}
      [:div {:class "column"}
       [:h3 {:class "title is-5 has-text-centered"} "Photos"]]]]]])

(defn laundry-schedule
  "Laundry Schedule"
  []
  [:div {:class "container"}
   [:div {:class "box"}
    [:div {:class "columns"}
     [:div {:class "column"}
      [:h2 {:class "subtitle"}]
      [:figure {:class "image is-96x96 is-1by1"}
       [:img {:src "images/laundry.png"}]]]
     [:div {:class "column"}
      [:div {:class "content"}
       [:h3 "Monday"]
       [:ul
        [:li
         [:strong "Danjela"]]
        [:li
         [:strong "Kostantina"]]]]]

     [:div {:class "column"}
      [:div {:class "content"}
       [:h3 "Tuesday"]
       [:ul
        [:li
         [:strong "10:30: "]]
        [:li
         [:strong "11:00: "]]]]]

     [:div {:class "column"}
      [:div {:class "content"}
       [:h3 "Wednesday"]
       [:ul
        [:li
         [:strong "10:30: "]]
        [:li
         [:strong "11:00: "]]]]]

     [:div {:class "column"}
      [:div {:class "content"}
       [:h3 "Thursday"]
       [:ul
        [:li
         [:strong "10:30: "]]
        [:li
         [:strong "11:00: "]]]]]

     [:div {:class "column"}
      [:div {:class "content"}
       [:h3 "Friday"]
       [:ul
        [:li
         [:strong "10:30: "]]
        [:li
         [:strong "11:00: "]]]]]

     [:div {:class "column"}
      [:div {:class "content"}
       [:h3 "Saturday"]
       [:ul
        [:li
         [:strong "10:30: "]]
        [:li
         [:strong "11:00: "]]]]]

     [:div {:class "column"}
      [:div {:class "content"}
       [:h3 "Sunday"]
       [:ul
        [:li
         [:strong "10:30: "]]
        [:li
         [:strong "11:00: "]]]]]]]])


(defn level-separator
  "A separator to provide a gap between components.
  The separator takes an id so that the section
  does not get hidden by the menu when linking"
  [identifier]
  [:div {:class "level"
         :id    identifier}
   [:h5 {:class "is-size-5 is-invisible"}
    identifier]])


(defn about
  "About Us"
  []
  [:div {:class "container"}
   [:div {:class "box"}
    [:div {:class "columns"}
     [:div {:class "column"}
      [:figure {:class "image"}
       [:img {:src "images/about.png"}]]]
     [:div {:class "column"}
      [:div {:class "content"}
       [:h2 "About Us"]
       [:p ""]
       [:p ""]]]]]])


(defn navigation-bar
  ""
  []
  ;; Navigation bar (responsive)
  [:nav {:class      "navbar is-fixed-top is-dark"
         :role       "navigation"
         :aria-label "main navigation"}
   [:div {:class "container"}
    [:div {:class "navbar-brand"}
     [:a {:class "navbar-item"
          :href  "/"}
      [:img {:src "images/logo-2.png"}]]
     [:h1 {:class "navbar-item has-text-white has-text-weight-bold is-size-4"} "ACT Housing"]
     [:span {:class       "navbar-burger burger"}
      ;; Empty spans needed for navbar burger
      [:span][:span][:span]]]
    [:div {:id    "navbarActHousing"
           :class "navbar-menu"}
     [:div {:class "navbar-end"}
      [:a {:class "navbar-item"
           :href  "#about"} "About"]
      [:a {:class "navbar-item"
           :href  "#blog"} "Blog"]
      [:a {:class "navbar-item"
           :href  "#ra-on-duty"} "RA on Duty"]
      [:a {:class "navbar-item"
           :href  "#laundry-schedule"} "Laundry Schedule"]
      [:a {:class "navbar-item"
           :href  "#resources"} "Resources"]]]]])

(defn first-section
  ""
  []
   [:section {:class "section"}
    [:div {:class "container"}
     [:div {:class "columns is-centered"}
      [:div {:class "column is-2"}
       [:figure {:class "image is-128x128"}
        [:img {:src "images/logo-2.png"}]]]
      [:div {:class "column is-8"}
       [:h1 {:class "title"}
        "Housing at The American College of Thessaloniki"]
       [:p {:class "subtitle"}
        "Adapt to Change"]]]]])

(defn section
  ""
  []
  [:section {:class "section"}])
