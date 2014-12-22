// Compiled by ClojureScript 0.0-2496
goog.provide('vijion.test');
goog.require('cljs.core');
goog.require('vijion.filter');
goog.require('vijion.gray');
goog.require('domina');
goog.require('vijion.core');
goog.require('domina.events');
goog.require('vijion.segment');
vijion.test.body = document.body;
vijion.test.loading = domina.set_classes_BANG_(document.createElement("div"),"loading");
vijion.test.hide_BANG_ = (function hide_BANG_(e){
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(e,"display",cljs.core.array_seq(["none"], 0));
});
vijion.test.show_BANG_ = (function show_BANG_(e){
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(e,"display",cljs.core.array_seq(["inherit"], 0));
});
vijion.test.caution = (function caution(){
var G__10263 = "CAUTION: It takes some minutes to calculate the result. This may block and freeze your browser process.";
return confirm(G__10263);
});
vijion.test.bootstrap = (function bootstrap(canvas_id,url){
vijion.core.load_image_to_canvas_BANG_(canvas_id,url);

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id("gradient"),cljs.core.constant$keyword$41,(function (e){
domina.events.prevent_default(e);

if(cljs.core.truth_(vijion.test.caution())){
domina.append_BANG_(vijion.test.body,vijion.test.loading);

vijion.test.hide_BANG_(domina.by_id("control"));

var G__10272 = (function (){
var img_10280 = vijion.core.image_from_canvas(canvas_id);
vijion.core.update_canvas_image_BANG_(canvas_id,vijion.gray.gray__GT_rgb((function (){var G__10274 = vijion.gray.rgb__GT_gray(img_10280);
return (vijion.filter.gradient.cljs$core$IFn$_invoke$arity$1 ? vijion.filter.gradient.cljs$core$IFn$_invoke$arity$1(G__10274) : vijion.filter.gradient.call(null,G__10274));
})()));

domina.detach_BANG_(vijion.test.loading);

return vijion.test.show_BANG_(domina.by_id("control"));
});
var G__10273 = (100);
return setTimeout(G__10272,G__10273);
} else {
return null;
}
}));

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id("laplacian"),cljs.core.constant$keyword$41,(function (e){
domina.events.prevent_default(e);

if(cljs.core.truth_(vijion.test.caution())){
domina.append_BANG_(vijion.test.body,vijion.test.loading);

vijion.test.hide_BANG_(domina.by_id("control"));

var G__10275 = (function (){
var img_10281 = vijion.core.image_from_canvas(canvas_id);
vijion.core.update_canvas_image_BANG_(canvas_id,vijion.gray.gray__GT_rgb((function (){var G__10277 = vijion.gray.rgb__GT_gray(img_10281);
return (vijion.filter.laplacian.cljs$core$IFn$_invoke$arity$1 ? vijion.filter.laplacian.cljs$core$IFn$_invoke$arity$1(G__10277) : vijion.filter.laplacian.call(null,G__10277));
})()));

domina.detach_BANG_(vijion.test.loading);

return vijion.test.show_BANG_(domina.by_id("control"));
});
var G__10276 = (100);
return setTimeout(G__10275,G__10276);
} else {
return null;
}
}));

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id("segment"),cljs.core.constant$keyword$41,(function (e){
domina.events.prevent_default(e);

if(cljs.core.truth_(vijion.test.caution())){
domina.append_BANG_(vijion.test.body,vijion.test.loading);

vijion.test.hide_BANG_(domina.by_id("control"));

var G__10278 = (function (){
var img_10282 = vijion.core.image_from_canvas(canvas_id);
vijion.core.update_canvas_image_BANG_(canvas_id,vijion.segment.segment(img_10282));

domina.detach_BANG_(vijion.test.loading);

return vijion.test.show_BANG_(domina.by_id("control"));
});
var G__10279 = (100);
return setTimeout(G__10278,G__10279);
} else {
return null;
}
}));

return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id("reset"),cljs.core.constant$keyword$41,(function (e){
domina.events.prevent_default(e);

return vijion.core.load_image_to_canvas_BANG_(canvas_id,url);
}));
});
goog.exportSymbol('vijion.test.bootstrap', vijion.test.bootstrap);
