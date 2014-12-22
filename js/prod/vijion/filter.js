// Compiled by ClojureScript 0.0-2496
goog.provide('vijion.filter');
goog.require('cljs.core');
goog.require('vijion.util');
vijion.filter.gray = (function gray(image){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(image,cljs.core.constant$keyword$26,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10285){
var vec__10286 = p__10285;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10286,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10286,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10286,(2),null);
var v = (function (){var x__3945__auto__ = (function (){var x__3945__auto__ = r;
var y__3946__auto__ = g;
return ((x__3945__auto__ > y__3946__auto__) ? x__3945__auto__ : y__3946__auto__);
})();
var y__3946__auto__ = b;
return ((x__3945__auto__ > y__3946__auto__) ? x__3945__auto__ : y__3946__auto__);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v,v], null);
}),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(image)));
});
vijion.filter.laplacian_filter = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$28,(5),cljs.core.constant$keyword$29,new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-3),(-4),(-3),(-1),(-3),(0),(6),(0),(-3),(-4),(6),(20),(6),(-4),(-3),(0),(6),(0),(-3),(-1),(-3),(-4),(-3),(-1)], null)], null);
vijion.filter.gradient_filter = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$28,(5),cljs.core.constant$keyword$29,new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25)),((1) / (25))], null)], null);
vijion.filter.gray_convolve = (function gray_convolve(image_filter,gray_image){
if(cljs.core.odd_QMARK_(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(image_filter))){
var w = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(gray_image);
var d = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(gray_image));
var s = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(image_filter);
var mat = cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(image_filter);
var hs = cljs.core.quot(s,(2));
var ws = (s * s);
var indices = cljs.core.range.cljs$core$IFn$_invoke$arity$2((- hs),(hs + (1)));
var offsets = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.vec((function (){var iter__4384__auto__ = ((function (w,d,s,mat,hs,ws,indices){
return (function iter__10303(s__10304){
return (new cljs.core.LazySeq(null,((function (w,d,s,mat,hs,ws,indices){
return (function (){
var s__10304__$1 = s__10304;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__10304__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var oy = cljs.core.first(xs__4624__auto__);
var iterys__4380__auto__ = ((function (s__10304__$1,oy,xs__4624__auto__,temp__4126__auto__,w,d,s,mat,hs,ws,indices){
return (function iter__10305(s__10306){
return (new cljs.core.LazySeq(null,((function (s__10304__$1,oy,xs__4624__auto__,temp__4126__auto__,w,d,s,mat,hs,ws,indices){
return (function (){
var s__10306__$1 = s__10306;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10306__$1);
if(temp__4126__auto____$1){
var s__10306__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10306__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__10306__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__10308 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__10307 = (0);
while(true){
if((i__10307 < size__4383__auto__)){
var ox = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__10307);
cljs.core.chunk_append(b__10308,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$(ox),cljs.core.long$(oy)], null));

var G__10319 = (i__10307 + (1));
i__10307 = G__10319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10308),iter__10305(cljs.core.chunk_rest(s__10306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10308),null);
}
} else {
var ox = cljs.core.first(s__10306__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$(ox),cljs.core.long$(oy)], null),iter__10305(cljs.core.rest(s__10306__$2)));
}
} else {
return null;
}
break;
}
});})(s__10304__$1,oy,xs__4624__auto__,temp__4126__auto__,w,d,s,mat,hs,ws,indices))
,null,null));
});})(s__10304__$1,oy,xs__4624__auto__,temp__4126__auto__,w,d,s,mat,hs,ws,indices))
;
var fs__4381__auto__ = cljs.core.seq(iterys__4380__auto__(indices));
if(fs__4381__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4381__auto__,iter__10303(cljs.core.rest(s__10304__$1)));
} else {
var G__10320 = cljs.core.rest(s__10304__$1);
s__10304__$1 = G__10320;
continue;
}
} else {
return null;
}
break;
}
});})(w,d,s,mat,hs,ws,indices))
,null,null));
});})(w,d,s,mat,hs,ws,indices))
;
return iter__4384__auto__(indices);
})()));
var len = cljs.core.count(d);
var px = vijion.util.pick_fn(d,len,w);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gray_image,cljs.core.constant$keyword$26,(function (){var idx = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((idx < len)){
var G__10321 = (idx + (1));
var G__10322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,(function (){var wp = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (idx,res,w,d,s,mat,hs,ws,indices,offsets,len,px){
return (function (p__10314){
var vec__10315 = p__10314;
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10315,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10315,(1),null);
var G__10316 = idx;
var G__10317 = ox;
var G__10318 = oy;
return (px.cljs$core$IFn$_invoke$arity$3 ? px.cljs$core$IFn$_invoke$arity$3(G__10316,G__10317,G__10318) : px.call(null,G__10316,G__10317,G__10318));
});})(idx,res,w,d,s,mat,hs,ws,indices,offsets,len,px))
,offsets);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,wp))){
return (0);
} else {
var x__3952__auto__ = vijion.util.abs(cljs.core.long$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,wp,mat))));
var y__3953__auto__ = (255);
return ((x__3952__auto__ < y__3953__auto__) ? x__3952__auto__ : y__3953__auto__);
}
})());
idx = G__10321;
res = G__10322;
continue;
} else {
return res;
}
break;
}
})());
} else {
return null;
}
});
vijion.filter.laplacian = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(vijion.filter.gray_convolve,vijion.filter.laplacian_filter);
vijion.filter.gradient = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(vijion.filter.gray_convolve,vijion.filter.gradient_filter);
vijion.filter.simple_laplacian = (function simple_laplacian(gray_image){
var mat = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(-8),(1),(1),(1),(1)], null);
var width = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(gray_image);
var data = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(gray_image));
var len = cljs.core.count(data);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gray_image,cljs.core.constant$keyword$26,(function (){var idx = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((idx < len)){
var G__10323 = (idx + (1));
var G__10324 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,(function (){var p00 = vijion.util.pick(data,len,width,idx,(-1),(-1));
var p01 = vijion.util.pick(data,len,width,idx,(0),(-1));
var p02 = vijion.util.pick(data,len,width,idx,(1),(-1));
var p10 = vijion.util.pick(data,len,width,idx,(-1),(0));
var p11 = vijion.util.pick(data,len,width,idx,(0),(0));
var p12 = vijion.util.pick(data,len,width,idx,(1),(0));
var p20 = vijion.util.pick(data,len,width,idx,(-1),(1));
var p21 = vijion.util.pick(data,len,width,idx,(0),(1));
var p22 = vijion.util.pick(data,len,width,idx,(1),(1));
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [p00,p01,p02,p10,p11,p12,p20,p21,p22], null)))){
return (0);
} else {
var x__3952__auto__ = vijion.util.abs(((((((((((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(0)) * p00) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(1)) * p01)) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(2)) * p02)) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(3)) * p10)) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(4)) * p11)) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(5)) * p12)) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(6)) * p20)) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(7)) * p21)) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mat,(8)) * p22)) | (0)));
var y__3953__auto__ = (255);
return ((x__3952__auto__ < y__3953__auto__) ? x__3952__auto__ : y__3953__auto__);
}
})());
idx = G__10323;
res = G__10324;
continue;
} else {
return res;
}
break;
}
})());
});
