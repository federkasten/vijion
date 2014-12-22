// Compiled by ClojureScript 0.0-2496
goog.provide('vijion.segment');
goog.require('cljs.core');
goog.require('vijion.util.disjoint');
goog.require('vijion.util');
vijion.segment.sigma = 0.5;
vijion.segment.kappa = (500);
vijion.segment.min_value = (20);
vijion.segment.square = (function square(x){
return (x * x);
});
vijion.segment.diff = (function diff(src,dst){
return vijion.util.sqrt(((vijion.segment.square((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(src,(0)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dst,(0)))) + vijion.segment.square((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(src,(1)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dst,(1))))) + vijion.segment.square((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(src,(2)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dst,(2))))));
});
vijion.segment.weight = (function weight(data,len,width,idx,ox,oy){
var src = vijion.util.pick(data,len,width,idx,(0),(0));
var dst = vijion.util.pick(data,len,width,idx,ox,oy);
if(cljs.core.truth_((function (){var and__3616__auto__ = src;
if(cljs.core.truth_(and__3616__auto__)){
return dst;
} else {
return and__3616__auto__;
}
})())){
return vijion.segment.diff(src,dst);
} else {
return null;
}
});
vijion.segment.edge = (function edge(data,len,width,idx,ox,oy){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$38,idx,cljs.core.constant$keyword$39,((idx + ox) + (width * oy)),cljs.core.constant$keyword$40,vijion.segment.weight(data,len,width,idx,ox,oy)], null);
});
vijion.segment.make_edges = (function make_edges(image){
var width = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(image);
var data = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(image);
var len = cljs.core.count(data);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (width,data,len){
return (function (p1__10329_SHARP_){
return cljs.core.complement(cljs.core.nil_QMARK_).call(null,cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(p1__10329_SHARP_));
});})(width,data,len))
,(function (){var idx = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((idx < len)){
var G__10330 = (idx + (1));
var G__10331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res,vijion.segment.edge(data,len,width,idx,(1),(0)),cljs.core.array_seq([vijion.segment.edge(data,len,width,idx,(0),(1)),vijion.segment.edge(data,len,width,idx,(1),(1)),vijion.segment.edge(data,len,width,idx,(1),(-1))], 0));
idx = G__10330;
res = G__10331;
continue;
} else {
return res;
}
break;
}
})());
});
vijion.segment.sort_edges = (function sort_edges(edges){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$40,edges);
});
vijion.segment.init_threashold = (vijion.segment.kappa / (1));
vijion.segment.dsf_segment = (function dsf_segment(sorted_edges,length){
var e = cljs.core.first(sorted_edges);
var dsf = vijion.util.disjoint.disjoint_set_forest(cljs.core.range.cljs$core$IFn$_invoke$arity$1(length));
var threashold = cljs.core.PersistentArrayMap.EMPTY;
var rest_edges = cljs.core.rest(sorted_edges);
while(true){
if(cljs.core.truth_(e)){
var ha = vijion.util.disjoint.head(dsf,cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(e));
var hb = vijion.util.disjoint.head(dsf,cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(e));
var ta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(threashold,ha,vijion.segment.init_threashold);
var tb = cljs.core.get.cljs$core$IFn$_invoke$arity$3(threashold,hb,vijion.segment.init_threashold);
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ha,hb)) && ((cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(e) < ta)) && ((cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(e) < tb))){
var new_dsf = vijion.util.disjoint.union(dsf,ha,hb);
var new_a = vijion.util.disjoint.head(new_dsf,ha);
var G__10332 = cljs.core.first(rest_edges);
var G__10333 = new_dsf;
var G__10334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(threashold,new cljs.core.PersistentArrayMap.fromArray([new_a,(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(e) + (vijion.segment.kappa / vijion.util.disjoint.size.cljs$core$IFn$_invoke$arity$2(new_dsf,new_a)))], true, false));
var G__10335 = cljs.core.rest(rest_edges);
e = G__10332;
dsf = G__10333;
threashold = G__10334;
rest_edges = G__10335;
continue;
} else {
var G__10336 = cljs.core.first(rest_edges);
var G__10337 = dsf;
var G__10338 = threashold;
var G__10339 = cljs.core.rest(rest_edges);
e = G__10336;
dsf = G__10337;
threashold = G__10338;
rest_edges = G__10339;
continue;
}
} else {
return dsf;
}
break;
}
});
vijion.segment.random_rgb = (function random_rgb(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((255)),cljs.core.rand_int((255)),cljs.core.rand_int((255))], null);
});
vijion.segment.make_segment_image = (function make_segment_image(width,height,dsf){
var len = (width * height);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$23,width,cljs.core.constant$keyword$24,height,cljs.core.constant$keyword$25,cljs.core.constant$keyword$27,cljs.core.constant$keyword$26,(function (){var idx = (0);
var colors = cljs.core.PersistentArrayMap.EMPTY;
var data = cljs.core.PersistentVector.EMPTY;
while(true){
if((idx < len)){
var h = vijion.util.disjoint.head(dsf,idx);
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(colors,h,null);
if(cljs.core.truth_(temp__4124__auto__)){
var c = temp__4124__auto__;
var G__10340 = (idx + (1));
var G__10341 = colors;
var G__10342 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data,c);
idx = G__10340;
colors = G__10341;
data = G__10342;
continue;
} else {
var new_c = vijion.segment.random_rgb();
var G__10343 = (idx + (1));
var G__10344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(colors,new cljs.core.PersistentArrayMap.fromArray([h,new_c], true, false));
var G__10345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data,new_c);
idx = G__10343;
colors = G__10344;
data = G__10345;
continue;
}
} else {
return data;
}
break;
}
})()], null);
});
vijion.segment.segment = (function segment(color_image){
var w = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(color_image);
var h = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(color_image);
var edges = vijion.segment.sort_edges(vijion.segment.make_edges(color_image));
var dsf = vijion.segment.dsf_segment(edges,(w * h));
return vijion.segment.make_segment_image(w,h,dsf);
});
