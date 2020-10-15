// Compiled by ClojureScript 1.10.773 {}
goog.provide('act_housing_site.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('act_housing_website.components');
if((typeof act_housing_site !== 'undefined') && (typeof act_housing_site.core !== 'undefined') && (typeof act_housing_site.core.app_state !== 'undefined')){
} else {
act_housing_site.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resident-assistants","resident-assistants",-196845433),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ra-1","ra-1",-888463465),"Danjela",new cljs.core.Keyword(null,"ra-2","ra-2",-1405808780),"Kutu",new cljs.core.Keyword(null,"ra-3","ra-3",-147638094),"Daniel"], null)], null));
}
act_housing_site.core.get_app_element = (function act_housing_site$core$get_app_element(){
return goog.dom.getElement("app");
});
act_housing_site.core.main_page = (function act_housing_site$core$main_page(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [act_housing_website.components.navigation_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [act_housing_website.components.level_separator], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [act_housing_website.components.first_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [act_housing_website.components.photos], null),act_housing_website.components.level_separator.call(null,"about"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [act_housing_website.components.about], null),act_housing_website.components.level_separator.call(null,"laundry-schedule"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [act_housing_website.components.laundry_schedule], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [act_housing_website.components.section], null)], null);
});
act_housing_site.core.mount = (function act_housing_site$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [act_housing_site.core.main_page], null),el);
});
act_housing_site.core.mount_app_element = (function act_housing_site$core$mount_app_element(){
var temp__5720__auto__ = act_housing_site.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return act_housing_site.core.mount.call(null,el);
} else {
return null;
}
});
act_housing_site.core.mount_app_element.call(null);
act_housing_site.core.on_reload = (function act_housing_site$core$on_reload(){
return act_housing_site.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
