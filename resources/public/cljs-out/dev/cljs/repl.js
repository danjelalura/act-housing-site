// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15770){
var map__15771 = p__15770;
var map__15771__$1 = (((((!((map__15771 == null))))?(((((map__15771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15771):map__15771);
var m = map__15771__$1;
var n = cljs.core.get.call(null,map__15771__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15773_15805 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15774_15806 = null;
var count__15775_15807 = (0);
var i__15776_15808 = (0);
while(true){
if((i__15776_15808 < count__15775_15807)){
var f_15809 = cljs.core._nth.call(null,chunk__15774_15806,i__15776_15808);
cljs.core.println.call(null,"  ",f_15809);


var G__15810 = seq__15773_15805;
var G__15811 = chunk__15774_15806;
var G__15812 = count__15775_15807;
var G__15813 = (i__15776_15808 + (1));
seq__15773_15805 = G__15810;
chunk__15774_15806 = G__15811;
count__15775_15807 = G__15812;
i__15776_15808 = G__15813;
continue;
} else {
var temp__5720__auto___15814 = cljs.core.seq.call(null,seq__15773_15805);
if(temp__5720__auto___15814){
var seq__15773_15815__$1 = temp__5720__auto___15814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15773_15815__$1)){
var c__4556__auto___15816 = cljs.core.chunk_first.call(null,seq__15773_15815__$1);
var G__15817 = cljs.core.chunk_rest.call(null,seq__15773_15815__$1);
var G__15818 = c__4556__auto___15816;
var G__15819 = cljs.core.count.call(null,c__4556__auto___15816);
var G__15820 = (0);
seq__15773_15805 = G__15817;
chunk__15774_15806 = G__15818;
count__15775_15807 = G__15819;
i__15776_15808 = G__15820;
continue;
} else {
var f_15821 = cljs.core.first.call(null,seq__15773_15815__$1);
cljs.core.println.call(null,"  ",f_15821);


var G__15822 = cljs.core.next.call(null,seq__15773_15815__$1);
var G__15823 = null;
var G__15824 = (0);
var G__15825 = (0);
seq__15773_15805 = G__15822;
chunk__15774_15806 = G__15823;
count__15775_15807 = G__15824;
i__15776_15808 = G__15825;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15826 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15826);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15826)))?cljs.core.second.call(null,arglists_15826):arglists_15826));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15777_15827 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15778_15828 = null;
var count__15779_15829 = (0);
var i__15780_15830 = (0);
while(true){
if((i__15780_15830 < count__15779_15829)){
var vec__15791_15831 = cljs.core._nth.call(null,chunk__15778_15828,i__15780_15830);
var name_15832 = cljs.core.nth.call(null,vec__15791_15831,(0),null);
var map__15794_15833 = cljs.core.nth.call(null,vec__15791_15831,(1),null);
var map__15794_15834__$1 = (((((!((map__15794_15833 == null))))?(((((map__15794_15833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15794_15833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15794_15833):map__15794_15833);
var doc_15835 = cljs.core.get.call(null,map__15794_15834__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15836 = cljs.core.get.call(null,map__15794_15834__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15832);

cljs.core.println.call(null," ",arglists_15836);

if(cljs.core.truth_(doc_15835)){
cljs.core.println.call(null," ",doc_15835);
} else {
}


var G__15837 = seq__15777_15827;
var G__15838 = chunk__15778_15828;
var G__15839 = count__15779_15829;
var G__15840 = (i__15780_15830 + (1));
seq__15777_15827 = G__15837;
chunk__15778_15828 = G__15838;
count__15779_15829 = G__15839;
i__15780_15830 = G__15840;
continue;
} else {
var temp__5720__auto___15841 = cljs.core.seq.call(null,seq__15777_15827);
if(temp__5720__auto___15841){
var seq__15777_15842__$1 = temp__5720__auto___15841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15777_15842__$1)){
var c__4556__auto___15843 = cljs.core.chunk_first.call(null,seq__15777_15842__$1);
var G__15844 = cljs.core.chunk_rest.call(null,seq__15777_15842__$1);
var G__15845 = c__4556__auto___15843;
var G__15846 = cljs.core.count.call(null,c__4556__auto___15843);
var G__15847 = (0);
seq__15777_15827 = G__15844;
chunk__15778_15828 = G__15845;
count__15779_15829 = G__15846;
i__15780_15830 = G__15847;
continue;
} else {
var vec__15796_15848 = cljs.core.first.call(null,seq__15777_15842__$1);
var name_15849 = cljs.core.nth.call(null,vec__15796_15848,(0),null);
var map__15799_15850 = cljs.core.nth.call(null,vec__15796_15848,(1),null);
var map__15799_15851__$1 = (((((!((map__15799_15850 == null))))?(((((map__15799_15850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15799_15850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15799_15850):map__15799_15850);
var doc_15852 = cljs.core.get.call(null,map__15799_15851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15853 = cljs.core.get.call(null,map__15799_15851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15849);

cljs.core.println.call(null," ",arglists_15853);

if(cljs.core.truth_(doc_15852)){
cljs.core.println.call(null," ",doc_15852);
} else {
}


var G__15854 = cljs.core.next.call(null,seq__15777_15842__$1);
var G__15855 = null;
var G__15856 = (0);
var G__15857 = (0);
seq__15777_15827 = G__15854;
chunk__15778_15828 = G__15855;
count__15779_15829 = G__15856;
i__15780_15830 = G__15857;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__15801 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15802 = null;
var count__15803 = (0);
var i__15804 = (0);
while(true){
if((i__15804 < count__15803)){
var role = cljs.core._nth.call(null,chunk__15802,i__15804);
var temp__5720__auto___15858__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___15858__$1)){
var spec_15859 = temp__5720__auto___15858__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15859));
} else {
}


var G__15860 = seq__15801;
var G__15861 = chunk__15802;
var G__15862 = count__15803;
var G__15863 = (i__15804 + (1));
seq__15801 = G__15860;
chunk__15802 = G__15861;
count__15803 = G__15862;
i__15804 = G__15863;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__15801);
if(temp__5720__auto____$1){
var seq__15801__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15801__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__15801__$1);
var G__15864 = cljs.core.chunk_rest.call(null,seq__15801__$1);
var G__15865 = c__4556__auto__;
var G__15866 = cljs.core.count.call(null,c__4556__auto__);
var G__15867 = (0);
seq__15801 = G__15864;
chunk__15802 = G__15865;
count__15803 = G__15866;
i__15804 = G__15867;
continue;
} else {
var role = cljs.core.first.call(null,seq__15801__$1);
var temp__5720__auto___15868__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___15868__$2)){
var spec_15869 = temp__5720__auto___15868__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15869));
} else {
}


var G__15870 = cljs.core.next.call(null,seq__15801__$1);
var G__15871 = null;
var G__15872 = (0);
var G__15873 = (0);
seq__15801 = G__15870;
chunk__15802 = G__15871;
count__15803 = G__15872;
i__15804 = G__15873;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__15874 = cljs.core.conj.call(null,via,t);
var G__15875 = cljs.core.ex_cause.call(null,t);
via = G__15874;
t = G__15875;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__15878 = datafied_throwable;
var map__15878__$1 = (((((!((map__15878 == null))))?(((((map__15878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15878):map__15878);
var via = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__15878__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15879 = cljs.core.last.call(null,via);
var map__15879__$1 = (((((!((map__15879 == null))))?(((((map__15879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15879):map__15879);
var type = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__15879__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15880 = data;
var map__15880__$1 = (((((!((map__15880 == null))))?(((((map__15880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15880):map__15880);
var problems = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15881 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__15881__$1 = (((((!((map__15881 == null))))?(((((map__15881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15881):map__15881);
var top_data = map__15881__$1;
var source = cljs.core.get.call(null,map__15881__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__15886 = phase;
var G__15886__$1 = (((G__15886 instanceof cljs.core.Keyword))?G__15886.fqn:null);
switch (G__15886__$1) {
case "read-source":
var map__15887 = data;
var map__15887__$1 = (((((!((map__15887 == null))))?(((((map__15887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15887):map__15887);
var line = cljs.core.get.call(null,map__15887__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15887__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15889 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__15889__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15889,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15889);
var G__15889__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15889__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15889__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15889__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15889__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15890 = top_data;
var G__15890__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15890,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15890);
var G__15890__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15890__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15890__$1);
var G__15890__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15890__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15890__$2);
var G__15890__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15890__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15890__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15890__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15890__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15891 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15891,(0),null);
var method = cljs.core.nth.call(null,vec__15891,(1),null);
var file = cljs.core.nth.call(null,vec__15891,(2),null);
var line = cljs.core.nth.call(null,vec__15891,(3),null);
var G__15894 = top_data;
var G__15894__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__15894,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15894);
var G__15894__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__15894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15894__$1);
var G__15894__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__15894__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15894__$2);
var G__15894__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15894__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15894__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15894__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15894__$4;
}

break;
case "execution":
var vec__15895 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15895,(0),null);
var method = cljs.core.nth.call(null,vec__15895,(1),null);
var file = cljs.core.nth.call(null,vec__15895,(2),null);
var line = cljs.core.nth.call(null,vec__15895,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__15877_SHARP_){
var or__4126__auto__ = (p1__15877_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__15877_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__15898 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__15898__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__15898,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__15898);
var G__15898__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15898__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15898__$1);
var G__15898__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__15898__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15898__$2);
var G__15898__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__15898__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__15898__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15898__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15898__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15886__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15902){
var map__15903 = p__15902;
var map__15903__$1 = (((((!((map__15903 == null))))?(((((map__15903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15903):map__15903);
var triage_data = map__15903__$1;
var phase = cljs.core.get.call(null,map__15903__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__15903__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__15903__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15903__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__15903__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__15903__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__15903__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__15903__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__15905 = phase;
var G__15905__$1 = (((G__15905 instanceof cljs.core.Keyword))?G__15905.fqn:null);
switch (G__15905__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15906_15915 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15907_15916 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15908_15917 = true;
var _STAR_print_fn_STAR__temp_val__15909_15918 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15908_15917);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15909_15918);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__15900_SHARP_){
return cljs.core.dissoc.call(null,p1__15900_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15907_15916);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15906_15915);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15910_15919 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15911_15920 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15912_15921 = true;
var _STAR_print_fn_STAR__temp_val__15913_15922 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15912_15921);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15913_15922);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__15901_SHARP_){
return cljs.core.dissoc.call(null,p1__15901_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15911_15920);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15910_15919);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15905__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
