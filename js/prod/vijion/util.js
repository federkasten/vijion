// Compiled by ClojureScript 0.0-2496
goog.provide('vijion.util');
goog.require('cljs.core');
vijion.util.block_unit = (10000);
vijion.util.num_processors = (1);
vijion.util.pop_queue_BANG_ = (function pop_queue_BANG_(queue){
return null;
});
vijion.util.pick_fn = (function pick_fn(data,len,width){
return (function (idx,ox,oy){
var i = ((idx + ox) + (width * oy));
if((i < (0))){
return null;
} else {
if((i < len)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,i);
} else {
return null;

}
}
});
});
vijion.util.pick = (function pick(data,len,width,idx,ox,oy){
var i = ((idx + ox) + (width * oy));
if((i < (0))){
return null;
} else {
if((i < len)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,i);
} else {
return null;

}
}
});
vijion.util.abs = (function abs(p1__10387_SHARP_){
return Math.abs(p1__10387_SHARP_);
});
vijion.util.sqrt = (function sqrt(p1__10388_SHARP_){
return Math.sqrt(p1__10388_SHARP_);
});
