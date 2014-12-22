// Compiled by ClojureScript 0.0-2496
goog.provide('vijion.gray');
goog.require('cljs.core');
vijion.gray.rgb__GT_gray = (function rgb__GT_gray(image){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(image,cljs.core.constant$keyword$25,cljs.core.constant$keyword$30,cljs.core.array_seq([cljs.core.constant$keyword$26,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__10327){
var vec__10328 = p__10327;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10328,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10328,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10328,(2),null);
var x__3945__auto__ = (function (){var x__3945__auto__ = r;
var y__3946__auto__ = g;
return ((x__3945__auto__ > y__3946__auto__) ? x__3945__auto__ : y__3946__auto__);
})();
var y__3946__auto__ = b;
return ((x__3945__auto__ > y__3946__auto__) ? x__3945__auto__ : y__3946__auto__);
}),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(image))], 0));
});
vijion.gray.gray__GT_rgb = (function gray__GT_rgb(image){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(image,cljs.core.constant$keyword$25,cljs.core.constant$keyword$27,cljs.core.array_seq([cljs.core.constant$keyword$26,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v,v], null);
}),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(image))], 0));
});
