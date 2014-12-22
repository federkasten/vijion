// Compiled by ClojureScript 0.0-2496
goog.provide('vijion.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
vijion.core.load_image_to_canvas_BANG_ = (function load_image_to_canvas_BANG_(canvas_id,url){
var canvas_10167 = domina.by_id(canvas_id);
var ctx_10168 = canvas_10167.getContext("2d");
var img_10169 = (new Image());
domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(img_10169,cljs.core.constant$keyword$22,((function (canvas_10167,ctx_10168,img_10169){
return (function (e){
var w = img_10169.width;
var h = img_10169.height;
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(canvas_10167,cljs.core.constant$keyword$23,cljs.core.array_seq([w], 0));

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(canvas_10167,cljs.core.constant$keyword$24,cljs.core.array_seq([h], 0));

return ctx_10168.drawImage(img_10169,(0),(0),w,h);
});})(canvas_10167,ctx_10168,img_10169))
);

img_10169.src = url;

return null;
});
vijion.core.image_from_canvas = (function image_from_canvas(canvas_id){
var canvas = domina.by_id(canvas_id);
var ctx = canvas.getContext("2d");
var w = domina.attr(canvas,cljs.core.constant$keyword$23);
var h = domina.attr(canvas,cljs.core.constant$keyword$24);
var img_data = ctx.getImageData((0),(0),w,h);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$23,img_data.width,cljs.core.constant$keyword$24,img_data.height,cljs.core.constant$keyword$25,cljs.core.constant$keyword$27,cljs.core.constant$keyword$26,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (canvas,ctx,w,h,img_data){
return (function (p__10172){
var vec__10173 = p__10172;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
});})(canvas,ctx,w,h,img_data))
,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((4),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(img_data.data)))], null);
});
vijion.core.update_canvas_image_BANG_ = (function update_canvas_image_BANG_(canvas_id,image){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$27,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(image))){
var canvas = domina.by_id(canvas_id);
var ctx = canvas.getContext("2d");
var img_data = ctx.createImageData(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(image),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(image));
var data = img_data.data;
var pixel_array = (new Uint8ClampedArray(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (canvas,ctx,img_data,data){
return (function (p__10176){
var vec__10177 = p__10176;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10177,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10177,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10177,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,(255)], null);
});})(canvas,ctx,img_data,data))
,cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(image))))));
var n__4515__auto___10178 = pixel_array.length;
var i_10179 = (0);
while(true){
if((i_10179 < n__4515__auto___10178)){
(data[i_10179] = (pixel_array[i_10179]));

var G__10180 = (i_10179 + (1));
i_10179 = G__10180;
continue;
} else {
}
break;
}

ctx.putImageData(img_data,(0),(0));

return null;
} else {
return null;
}
});
