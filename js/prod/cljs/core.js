// Compiled by ClojureScript 0.0-2496
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2496";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$2,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$3,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$4,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$5,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10391__delegate = function (args){
return console.log.apply(console,(function (){var G__10390 = args;
return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__10390) : cljs.core.into_array.call(null,G__10390));
})());
};
var G__10391 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10391__delegate.call(this,args);};
G__10391.cljs$lang$maxFixedArity = 0;
G__10391.cljs$lang$applyTo = (function (arglist__10392){
var args = cljs.core.seq(arglist__10392);
return G__10391__delegate(args);
});
G__10391.cljs$core$IFn$_invoke$arity$variadic = G__10391__delegate;
return G__10391;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
cljs.core.not_native = null;

/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){
return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x)){
return false;
} else {
return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){
return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){
if(!((x == null))){
return (x.constructor === Object);
} else {
return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var G__10394 = x;
return goog.isString(G__10394);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[(function (){var G__10396 = x__$1;
return goog.typeOf(G__10396);
})()])){
return true;
} else {
if((p["_"])){
return true;
} else {
return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){
if((x == null)){
return null;
} else {
return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
var ty = cljs.core.type(obj);
var ty__$1 = (cljs.core.truth_((function (){var and__3616__auto__ = ty;
if(cljs.core.truth_(and__3616__auto__)){
return ty.cljs$lang$type;
} else {
return and__3616__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__10398 = obj;
return goog.typeOf(G__10398);
})());
return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){
var temp__4124__auto__ = ty.cljs$lang$ctorStr;
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return s;
} else {
return [cljs.core.str(ty)].join('');
}
});
if((typeof Symbol !== 'undefined') && (((function (){var G__10400 = Symbol;
return goog.typeOf(G__10400);
})() === "function"))){
cljs.core.ITER_SYMBOL = Symbol.iterator;
} else {
cljs.core.ITER_SYMBOL = "@@iterator";
}
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){
var len = arr.length;
var new_arr = (new Array(len));
var n__4515__auto___10402 = len;
var i_10403 = (0);
while(true){
if((i_10403 < n__4515__auto___10402)){
(new_arr[i_10403] = (arr[i_10403]));

var G__10404 = (i_10403 + (1));
i_10403 = G__10404;
continue;
} else {
}
break;
}

return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__10413__delegate = function (array,i,idxs){
var G__10410 = aget;
var G__10411 = aget.cljs$core$IFn$_invoke$arity$2(array,i);
var G__10412 = idxs;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__10410,G__10411,G__10412) : cljs.core.apply.call(null,G__10410,G__10411,G__10412));
};
var G__10413 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10413__delegate.call(this,array,i,idxs);};
G__10413.cljs$lang$maxFixedArity = 2;
G__10413.cljs$lang$applyTo = (function (arglist__10414){
var array = cljs.core.first(arglist__10414);
arglist__10414 = cljs.core.next(arglist__10414);
var i = cljs.core.first(arglist__10414);
var idxs = cljs.core.rest(arglist__10414);
return G__10413__delegate(array,i,idxs);
});
G__10413.cljs$core$IFn$_invoke$arity$variadic = G__10413__delegate;
return G__10413;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){
return (array[i] = val);
});
var aset__4 = (function() { 
var G__10423__delegate = function (array,idx,idx2,idxv){
var G__10419 = aset;
var G__10420 = (array[idx]);
var G__10421 = idx2;
var G__10422 = idxv;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__10419,G__10420,G__10421,G__10422) : cljs.core.apply.call(null,G__10419,G__10420,G__10421,G__10422));
};
var G__10423 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10423__delegate.call(this,array,idx,idx2,idxv);};
G__10423.cljs$lang$maxFixedArity = 3;
G__10423.cljs$lang$applyTo = (function (arglist__10424){
var array = cljs.core.first(arglist__10424);
arglist__10424 = cljs.core.next(arglist__10424);
var idx = cljs.core.first(arglist__10424);
arglist__10424 = cljs.core.next(arglist__10424);
var idx2 = cljs.core.first(arglist__10424);
var idxv = cljs.core.rest(arglist__10424);
return G__10423__delegate(array,idx,idx2,idxv);
});
G__10423.cljs$core$IFn$_invoke$arity$variadic = G__10423__delegate;
return G__10423;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
var G__10430 = (function (a,x){
a.push(x);

return a;
});
var G__10431 = [];
var G__10432 = aseq;
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__10430,G__10431,G__10432) : cljs.core.reduce.call(null,G__10430,G__10431,G__10432));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
/**
* Invoke JavaScript object method via string. Needed when the
* string is not a valid unquoted property name.
* @param {...*} var_args
*/
cljs.core.js_invoke = (function() { 
var js_invoke__delegate = function (obj,s,args){
return (obj[s]).apply(obj,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var js_invoke = function (obj,s,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return js_invoke__delegate.call(this,obj,s,args);};
js_invoke.cljs$lang$maxFixedArity = 2;
js_invoke.cljs$lang$applyTo = (function (arglist__10433){
var obj = cljs.core.first(arglist__10433);
arglist__10433 = cljs.core.next(arglist__10433);
var s = cljs.core.first(arglist__10433);
var args = cljs.core.rest(arglist__10433);
return js_invoke__delegate(obj,s,args);
});
js_invoke.cljs$core$IFn$_invoke$arity$variadic = js_invoke__delegate;
return js_invoke;
})()
;

cljs.core.Fn = (function (){var obj10435 = {};
return obj10435;
})();


cljs.core.IFn = (function (){var obj10437 = {};
return obj10437;
})();

cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10483 = x__4272__auto__;
return goog.typeOf(G__10483);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10485 = x__4272__auto__;
return goog.typeOf(G__10485);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10487 = x__4272__auto__;
return goog.typeOf(G__10487);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10489 = x__4272__auto__;
return goog.typeOf(G__10489);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10491 = x__4272__auto__;
return goog.typeOf(G__10491);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10493 = x__4272__auto__;
return goog.typeOf(G__10493);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10495 = x__4272__auto__;
return goog.typeOf(G__10495);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10497 = x__4272__auto__;
return goog.typeOf(G__10497);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10499 = x__4272__auto__;
return goog.typeOf(G__10499);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10501 = x__4272__auto__;
return goog.typeOf(G__10501);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10503 = x__4272__auto__;
return goog.typeOf(G__10503);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10505 = x__4272__auto__;
return goog.typeOf(G__10505);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10507 = x__4272__auto__;
return goog.typeOf(G__10507);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10509 = x__4272__auto__;
return goog.typeOf(G__10509);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10511 = x__4272__auto__;
return goog.typeOf(G__10511);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10513 = x__4272__auto__;
return goog.typeOf(G__10513);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10515 = x__4272__auto__;
return goog.typeOf(G__10515);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10517 = x__4272__auto__;
return goog.typeOf(G__10517);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10519 = x__4272__auto__;
return goog.typeOf(G__10519);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10521 = x__4272__auto__;
return goog.typeOf(G__10521);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10523 = x__4272__auto__;
return goog.typeOf(G__10523);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._invoke[(function (){var G__10525 = x__4272__auto__;
return goog.typeOf(G__10525);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._invoke["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;


cljs.core.ICloneable = (function (){var obj10527 = {};
return obj10527;
})();

cljs.core._clone = (function _clone(value){
if((function (){var and__3616__auto__ = value;
if(and__3616__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__3616__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__4272__auto__ = (((value == null))?null:value);
return (function (){var or__3628__auto__ = (cljs.core._clone[(function (){var G__10531 = x__4272__auto__;
return goog.typeOf(G__10531);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._clone["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj10533 = {};
return obj10533;
})();

cljs.core._count = (function _count(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._count[(function (){var G__10537 = x__4272__auto__;
return goog.typeOf(G__10537);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._count["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj10539 = {};
return obj10539;
})();

cljs.core._empty = (function _empty(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._empty[(function (){var G__10543 = x__4272__auto__;
return goog.typeOf(G__10543);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._empty["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj10545 = {};
return obj10545;
})();

cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._conj[(function (){var G__10549 = x__4272__auto__;
return goog.typeOf(G__10549);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._conj["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj10551 = {};
return obj10551;
})();

cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._nth[(function (){var G__10557 = x__4272__auto__;
return goog.typeOf(G__10557);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._nth["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._nth[(function (){var G__10559 = x__4272__auto__;
return goog.typeOf(G__10559);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._nth["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;


cljs.core.ASeq = (function (){var obj10561 = {};
return obj10561;
})();


cljs.core.ISeq = (function (){var obj10563 = {};
return obj10563;
})();

cljs.core._first = (function _first(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._first[(function (){var G__10567 = x__4272__auto__;
return goog.typeOf(G__10567);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._first["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function _rest(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._rest[(function (){var G__10571 = x__4272__auto__;
return goog.typeOf(G__10571);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._rest["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj10573 = {};
return obj10573;
})();

cljs.core._next = (function _next(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._next[(function (){var G__10577 = x__4272__auto__;
return goog.typeOf(G__10577);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._next["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj10579 = {};
return obj10579;
})();

cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._lookup[(function (){var G__10585 = x__4272__auto__;
return goog.typeOf(G__10585);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._lookup["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._lookup[(function (){var G__10587 = x__4272__auto__;
return goog.typeOf(G__10587);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._lookup["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;


cljs.core.IAssociative = (function (){var obj10589 = {};
return obj10589;
})();

cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__10593 = x__4272__auto__;
return goog.typeOf(G__10593);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._assoc[(function (){var G__10597 = x__4272__auto__;
return goog.typeOf(G__10597);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._assoc["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj10599 = {};
return obj10599;
})();

cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._dissoc[(function (){var G__10603 = x__4272__auto__;
return goog.typeOf(G__10603);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj10605 = {};
return obj10605;
})();

cljs.core._key = (function _key(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._key[(function (){var G__10609 = x__4272__auto__;
return goog.typeOf(G__10609);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._key["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function _val(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._val[(function (){var G__10613 = x__4272__auto__;
return goog.typeOf(G__10613);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._val["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj10615 = {};
return obj10615;
})();

cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._disjoin[(function (){var G__10619 = x__4272__auto__;
return goog.typeOf(G__10619);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj10621 = {};
return obj10621;
})();

cljs.core._peek = (function _peek(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._peek[(function (){var G__10625 = x__4272__auto__;
return goog.typeOf(G__10625);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._peek["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function _pop(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._pop[(function (){var G__10629 = x__4272__auto__;
return goog.typeOf(G__10629);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._pop["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj10631 = {};
return obj10631;
})();

cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._assoc_n[(function (){var G__10635 = x__4272__auto__;
return goog.typeOf(G__10635);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj10637 = {};
return obj10637;
})();

cljs.core._deref = (function _deref(o){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._deref[(function (){var G__10641 = x__4272__auto__;
return goog.typeOf(G__10641);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._deref["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj10643 = {};
return obj10643;
})();

cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._deref_with_timeout[(function (){var G__10647 = x__4272__auto__;
return goog.typeOf(G__10647);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj10649 = {};
return obj10649;
})();

cljs.core._meta = (function _meta(o){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._meta[(function (){var G__10653 = x__4272__auto__;
return goog.typeOf(G__10653);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._meta["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj10655 = {};
return obj10655;
})();

cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._with_meta[(function (){var G__10659 = x__4272__auto__;
return goog.typeOf(G__10659);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj10661 = {};
return obj10661;
})();

cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._reduce[(function (){var G__10667 = x__4272__auto__;
return goog.typeOf(G__10667);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._reduce["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._reduce[(function (){var G__10669 = x__4272__auto__;
return goog.typeOf(G__10669);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._reduce["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;


cljs.core.IKVReduce = (function (){var obj10671 = {};
return obj10671;
})();

cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._kv_reduce[(function (){var G__10675 = x__4272__auto__;
return goog.typeOf(G__10675);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj10677 = {};
return obj10677;
})();

cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._equiv[(function (){var G__10681 = x__4272__auto__;
return goog.typeOf(G__10681);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._equiv["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj10683 = {};
return obj10683;
})();

cljs.core._hash = (function _hash(o){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._hash[(function (){var G__10687 = x__4272__auto__;
return goog.typeOf(G__10687);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._hash["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj10689 = {};
return obj10689;
})();

cljs.core._seq = (function _seq(o){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._seq[(function (){var G__10693 = x__4272__auto__;
return goog.typeOf(G__10693);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._seq["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj10695 = {};
return obj10695;
})();


cljs.core.IList = (function (){var obj10697 = {};
return obj10697;
})();


cljs.core.IRecord = (function (){var obj10699 = {};
return obj10699;
})();


cljs.core.IReversible = (function (){var obj10701 = {};
return obj10701;
})();

cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._rseq[(function (){var G__10705 = x__4272__auto__;
return goog.typeOf(G__10705);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._rseq["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj10707 = {};
return obj10707;
})();

cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._sorted_seq[(function (){var G__10711 = x__4272__auto__;
return goog.typeOf(G__10711);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._sorted_seq_from[(function (){var G__10715 = x__4272__auto__;
return goog.typeOf(G__10715);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._entry_key[(function (){var G__10719 = x__4272__auto__;
return goog.typeOf(G__10719);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._comparator[(function (){var G__10723 = x__4272__auto__;
return goog.typeOf(G__10723);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._comparator["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj10725 = {};
return obj10725;
})();

cljs.core._write = (function _write(writer,s){
if((function (){var and__3616__auto__ = writer;
if(and__3616__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__3616__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__4272__auto__ = (((writer == null))?null:writer);
return (function (){var or__3628__auto__ = (cljs.core._write[(function (){var G__10729 = x__4272__auto__;
return goog.typeOf(G__10729);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._write["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function _flush(writer){
if((function (){var and__3616__auto__ = writer;
if(and__3616__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__3616__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__4272__auto__ = (((writer == null))?null:writer);
return (function (){var or__3628__auto__ = (cljs.core._flush[(function (){var G__10733 = x__4272__auto__;
return goog.typeOf(G__10733);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._flush["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj10735 = {};
return obj10735;
})();

cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._pr_writer[(function (){var G__10739 = x__4272__auto__;
return goog.typeOf(G__10739);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj10741 = {};
return obj10741;
})();

cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3616__auto__ = d;
if(and__3616__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__4272__auto__ = (((d == null))?null:d);
return (function (){var or__3628__auto__ = (cljs.core._realized_QMARK_[(function (){var G__10745 = x__4272__auto__;
return goog.typeOf(G__10745);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj10747 = {};
return obj10747;
})();

cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._notify_watches[(function (){var G__10751 = x__4272__auto__;
return goog.typeOf(G__10751);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._add_watch[(function (){var G__10755 = x__4272__auto__;
return goog.typeOf(G__10755);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (cljs.core._remove_watch[(function (){var G__10759 = x__4272__auto__;
return goog.typeOf(G__10759);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj10761 = {};
return obj10761;
})();

cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._as_transient[(function (){var G__10765 = x__4272__auto__;
return goog.typeOf(G__10765);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj10767 = {};
return obj10767;
})();

cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3616__auto__ = tcoll;
if(and__3616__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__4272__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3628__auto__ = (cljs.core._conj_BANG_[(function (){var G__10771 = x__4272__auto__;
return goog.typeOf(G__10771);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3616__auto__ = tcoll;
if(and__3616__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__4272__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3628__auto__ = (cljs.core._persistent_BANG_[(function (){var G__10775 = x__4272__auto__;
return goog.typeOf(G__10775);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj10777 = {};
return obj10777;
})();

cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3616__auto__ = tcoll;
if(and__3616__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__4272__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3628__auto__ = (cljs.core._assoc_BANG_[(function (){var G__10781 = x__4272__auto__;
return goog.typeOf(G__10781);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj10783 = {};
return obj10783;
})();

cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3616__auto__ = tcoll;
if(and__3616__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__4272__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3628__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__10787 = x__4272__auto__;
return goog.typeOf(G__10787);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj10789 = {};
return obj10789;
})();

cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3616__auto__ = tcoll;
if(and__3616__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__4272__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3628__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__10793 = x__4272__auto__;
return goog.typeOf(G__10793);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3616__auto__ = tcoll;
if(and__3616__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__4272__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3628__auto__ = (cljs.core._pop_BANG_[(function (){var G__10797 = x__4272__auto__;
return goog.typeOf(G__10797);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj10799 = {};
return obj10799;
})();

cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3616__auto__ = tcoll;
if(and__3616__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__4272__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3628__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__10803 = x__4272__auto__;
return goog.typeOf(G__10803);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj10805 = {};
return obj10805;
})();

cljs.core._compare = (function _compare(x,y){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__3616__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (cljs.core._compare[(function (){var G__10809 = x__4272__auto__;
return goog.typeOf(G__10809);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._compare["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj10811 = {};
return obj10811;
})();

cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._drop_first[(function (){var G__10815 = x__4272__auto__;
return goog.typeOf(G__10815);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj10817 = {};
return obj10817;
})();

cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._chunked_first[(function (){var G__10821 = x__4272__auto__;
return goog.typeOf(G__10821);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._chunked_rest[(function (){var G__10825 = x__4272__auto__;
return goog.typeOf(G__10825);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj10827 = {};
return obj10827;
})();

cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._chunked_next[(function (){var G__10831 = x__4272__auto__;
return goog.typeOf(G__10831);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj10833 = {};
return obj10833;
})();

cljs.core._name = (function _name(x){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__3616__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (cljs.core._name[(function (){var G__10837 = x__4272__auto__;
return goog.typeOf(G__10837);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._name["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function _namespace(x){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__3616__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (cljs.core._namespace[(function (){var G__10841 = x__4272__auto__;
return goog.typeOf(G__10841);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._namespace["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj10843 = {};
return obj10843;
})();


cljs.core.IReset = (function (){var obj10845 = {};
return obj10845;
})();

cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._reset_BANG_[(function (){var G__10849 = x__4272__auto__;
return goog.typeOf(G__10849);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj10851 = {};
return obj10851;
})();

cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._swap_BANG_[(function (){var G__10861 = x__4272__auto__;
return goog.typeOf(G__10861);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._swap_BANG_[(function (){var G__10863 = x__4272__auto__;
return goog.typeOf(G__10863);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._swap_BANG_[(function (){var G__10865 = x__4272__auto__;
return goog.typeOf(G__10865);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._swap_BANG_[(function (){var G__10867 = x__4272__auto__;
return goog.typeOf(G__10867);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;


cljs.core.IVolatile = (function (){var obj10869 = {};
return obj10869;
})();

cljs.core._vreset_BANG_ = (function _vreset_BANG_(o,new_value){
if((function (){var and__3616__auto__ = o;
if(and__3616__auto__){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2(o,new_value);
} else {
var x__4272__auto__ = (((o == null))?null:o);
return (function (){var or__3628__auto__ = (cljs.core._vreset_BANG_[(function (){var G__10873 = x__4272__auto__;
return goog.typeOf(G__10873);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._vreset_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IVolatile.-vreset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.IIterable = (function (){var obj10875 = {};
return obj10875;
})();

cljs.core._iterator = (function _iterator(coll){
if((function (){var and__3616__auto__ = coll;
if(and__3616__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__3616__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__4272__auto__ = (((coll == null))?null:coll);
return (function (){var or__3628__auto__ = (cljs.core._iterator[(function (){var G__10879 = x__4272__auto__;
return goog.typeOf(G__10879);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._iterator["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});


/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.append(s);
});

cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cljs.core.StringBufferWriter.cljs$lang$type = true;

cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/StringBufferWriter");
});

cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){
return (new cljs.core.StringBufferWriter(sb));
});

/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());

writer.cljs$core$IWriter$_flush$arity$1(null);

return [cljs.core.str(sb)].join('');
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){
return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__10882 = (4294967295);
var G__10883 = (5);
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__10882,G__10883) : Math.imul.call(null,G__10882,G__10883));
})() === (0))))){
cljs.core.imul = (function imul(a,b){
var G__10886 = a;
var G__10887 = b;
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__10886,G__10887) : Math.imul.call(null,G__10886,G__10887));
});
} else {
cljs.core.imul = (function imul(a,b){
var ah = ((a >>> (16)) & (65535));
var al = (a & (65535));
var bh = ((b >>> (16)) & (65535));
var bl = (b & (65535));
return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){
return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){
return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){
var h1__$1 = h1;
var h1__$2 = (h1__$1 ^ len);
var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));
var h1__$4 = cljs.core.imul(h1__$3,(2246822507));
var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));
var h1__$6 = cljs.core.imul(h1__$5,(3266489909));
var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));
return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){
if((in$ === (0))){
return in$;
} else {
var k1 = cljs.core.m3_mix_K1(in$);
var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);
return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){
var h1 = (function (){var i = (1);
var h1 = cljs.core.m3_seed;
while(true){
if((i < in$.length)){
var G__10888 = (i + (2));
var G__10889 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__10888;
h1 = G__10889;
continue;
} else {
return h1;
}
break;
}
})();
var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);
return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});



cljs.core.string_hash_cache = (function (){var obj10891 = {};
return obj10891;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){
if(!((s == null))){
var len = s.length;
if((len > (0))){
var i = (0);
var hash = (0);
while(true){
if((i < len)){
var G__10892 = (i + (1));
var G__10893 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__10892;
hash = G__10893;
continue;
} else {
return hash;
}
break;
}
} else {
return (0);
}
} else {
return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = cljs.core.hash_string_STAR_(k);
(cljs.core.string_hash_cache[k] = h);

cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));

return h;
});
cljs.core.hash_string = (function hash_string(k){
if((cljs.core.string_hash_cache_count > (255))){
cljs.core.string_hash_cache = (function (){var obj10897 = {};
return obj10897;
})();

cljs.core.string_hash_cache_count = (0);
} else {
}

var h = (cljs.core.string_hash_cache[k]);
if(typeof h === 'number'){
return h;
} else {
return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){
if((function (){var G__10900 = o;
if(G__10900){
var bit__4302__auto__ = (G__10900.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__4302__auto__) || (G__10900.cljs$core$IHash$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(null);
} else {
if(typeof o === 'number'){
return ((function (){var G__10901 = o;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__10901) : Math.floor.call(null,G__10901));
})() % (2147483647));
} else {
if(o === true){
return (1);
} else {
if(o === false){
return (0);
} else {
if(typeof o === 'string'){
return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else {
if((o instanceof Date)){
return o.valueOf();
} else {
if((o == null)){
return (0);
} else {
return cljs.core._hash(o);

}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){
return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){
if((a.str === b.str)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3616__auto__ = cljs.core.not(a.ns);
if(and__3616__auto__){
return b.ns;
} else {
return and__3616__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__10908 = a.ns;
var G__10909 = b.ns;
return goog.array.defaultCompare(G__10908,G__10909);
})();
if(((0) === nsc)){
var G__10910 = a.name;
var G__10911 = b.name;
return goog.array.defaultCompare(G__10910,G__10911);
} else {
return nsc;
}
}
} else {
var G__10912 = a.name;
var G__10913 = b.name;
return goog.array.defaultCompare(G__10912,G__10913);

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,self__.str);
});

cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){
var self__ = this;
var sym__$1 = this;
var h__4049__auto__ = self__._hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_symbol(sym__$1);
self__._hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});

cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Symbol.prototype.call = (function() {
var G__10915 = null;
var G__10915__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__10915__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__10915 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__10915__2.call(this,self__,coll);
case 3:
return G__10915__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10915.cljs$core$IFn$_invoke$arity$2 = G__10915__2;
G__10915.cljs$core$IFn$_invoke$arity$3 = G__10915__3;
return G__10915;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args10914){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10914)));
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});

cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Symbol)){
return (self__.str === other.str);
} else {
return false;
}
});

cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.str;
});

cljs.core.Symbol.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Symbol.cljs$lang$type = true;

cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Symbol");
});

cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){
return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});

cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if((name instanceof cljs.core.Symbol)){
return name;
} else {
return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){
var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;

/**
* @constructor
*/
cljs.core.Var = (function (val,sym,_meta){
this.val = val;
this.sym = sym;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 163840;
})
cljs.core.Var.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Var.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.Var.cljs$lang$type = true;

cljs.core.Var.cljs$lang$ctorStr = "cljs.core/Var";

cljs.core.Var.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Var");
});

cljs.core.__GT_Var = (function __GT_Var(val,sym,_meta){
return (new cljs.core.Var(val,sym,_meta));
});



cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){
var G__10919 = x;
if(G__10919){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__10919.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__10919.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__10919);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__10919);
}
});
cljs.core.clone = (function clone(value){
return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){
var G__10921 = value;
if(G__10921){
var bit__4309__auto__ = (G__10921.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4309__auto__) || (G__10921.cljs$core$ICloneable$)){
return true;
} else {
if((!G__10921.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__10921);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__10921);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__10923 = coll;
if(G__10923){
var bit__4302__auto__ = (G__10923.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4302__auto__) || (G__10923.cljs$core$ISeqable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else {
if(coll instanceof Array){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(typeof coll === 'string'){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll)){
return cljs.core._seq(coll);
} else {
throw (new Error([cljs.core.str(coll),cljs.core.str(" is not ISeqable")].join('')));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__10925 = coll;
if(G__10925){
var bit__4302__auto__ = (G__10925.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4302__auto__) || (G__10925.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if((s == null)){
return null;
} else {
return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null))){
if((function (){var G__10927 = coll;
if(G__10927){
var bit__4302__auto__ = (G__10927.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4302__auto__) || (G__10927.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if(s){
return cljs.core._rest(s);
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__10929 = coll;
if(G__10929){
var bit__4302__auto__ = (G__10929.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4302__auto__) || (G__10929.cljs$core$INext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$INext$_next$arity$1(null);
} else {
return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
if((x == null)){
return (y == null);
} else {
return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__10934__delegate = function (x,y,more){
while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__10935 = y;
var G__10936 = cljs.core.first(more);
var G__10937 = cljs.core.next(more);
x = G__10935;
y = G__10936;
more = G__10937;
continue;
} else {
return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__10934 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10934__delegate.call(this,x,y,more);};
G__10934.cljs$lang$maxFixedArity = 2;
G__10934.cljs$lang$applyTo = (function (arglist__10938){
var x = cljs.core.first(arglist__10938);
arglist__10938 = cljs.core.next(arglist__10938);
var y = cljs.core.first(arglist__10938);
var more = cljs.core.rest(arglist__10938);
return G__10934__delegate(x,y,more);
});
G__10934.cljs$core$IFn$_invoke$arity$variadic = G__10934__delegate;
return G__10934;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": x};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6Iterator.cljs$lang$type = true;

cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ES6Iterator");
});

cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){
return (new cljs.core.ES6Iterator(s));
});

cljs.core.es6_iterator = (function es6_iterator(coll){
return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6IteratorSeq = (function (value,iter,_rest){
this.value = value;
this.iter = iter;
this._rest = _rest;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388672;
})
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__._rest == null)){
self__._rest = (function (){var G__10939 = self__.iter;
return (cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1(G__10939) : cljs.core.es6_iterator_seq.call(null,G__10939));
})();
} else {
}

return self__._rest;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ES6IteratorSeq.cljs$lang$type = true;

cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ES6IteratorSeq");
});

cljs.core.__GT_ES6IteratorSeq = (function __GT_ES6IteratorSeq(value,iter,_rest){
return (new cljs.core.ES6IteratorSeq(value,iter,_rest));
});

cljs.core.es6_iterator_seq = (function es6_iterator_seq(iter){
var v = iter.next();
if(cljs.core.truth_(v.done)){
return cljs.core.List.EMPTY;
} else {
return (new cljs.core.ES6IteratorSeq(v.value,iter,null));
}
});
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){
var h1 = cljs.core.m3_seed;
var k1 = cljs.core.m3_mix_K1(hash_basis);
var h1__$1 = cljs.core.m3_mix_H1(h1,k1);
return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){
var n = (0);
var hash_code = (1);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__10940 = (n + (1));
var G__10941 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__10942 = cljs.core.next(coll__$1);
n = G__10940;
hash_code = G__10941;
coll__$1 = G__10942;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){
var n = (0);
var hash_code = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__10943 = (n + (1));
var G__10944 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__10945 = cljs.core.next(coll__$1);
n = G__10943;
hash_code = G__10944;
coll__$1 = G__10945;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});


(cljs.core.ICounted["null"] = true);

(cljs.core._count["null"] = (function (_){
return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;

Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (_){
return null;
}));

(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);

(cljs.core._hash["_"] = (function (o){
var G__10946 = o;
return goog.getUid(G__10946);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.val;
});

cljs.core.Reduced.cljs$lang$type = true;

cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Reduced");
});

cljs.core.__GT_Reduced = (function __GT_Reduced(val){
return (new cljs.core.Reduced(val));
});

/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return (r instanceof cljs.core.Reduced);
});
/**
* If x is already reduced?, returns it, else returns (reduced x)
*/
cljs.core.ensure_reduced = (function ensure_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return x;
} else {
return cljs.core.reduced(x);
}
});
/**
* If x is reduced?, returns (deref x), else returns x
*/
cljs.core.unreduced = (function unreduced(x){
if(cljs.core.reduced_QMARK_(x)){
var G__10948 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10948) : cljs.core.deref.call(null,G__10948));
} else {
return x;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count(cicoll);
if((cnt === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__10955 = val;
var G__10956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10955,G__10956) : f.call(null,G__10955,G__10956));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__10961 = nval;
var G__10962 = (n + (1));
val = G__10961;
n = G__10962;
continue;
}
} else {
return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__10957 = val__$1;
var G__10958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10957,G__10958) : f.call(null,G__10957,G__10958));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__10963 = nval;
var G__10964 = (n + (1));
val__$1 = G__10963;
n = G__10964;
continue;
}
} else {
return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__10959 = val__$1;
var G__10960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10959,G__10960) : f.call(null,G__10959,G__10960));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__10965 = nval;
var G__10966 = (n + (1));
val__$1 = G__10965;
n = G__10966;
continue;
}
} else {
return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = (arr[(0)]);
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__10973 = val;
var G__10974 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10973,G__10974) : f.call(null,G__10973,G__10974));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__10979 = nval;
var G__10980 = (n + (1));
val = G__10979;
n = G__10980;
continue;
}
} else {
return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__10975 = val__$1;
var G__10976 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10975,G__10976) : f.call(null,G__10975,G__10976));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__10981 = nval;
var G__10982 = (n + (1));
val__$1 = G__10981;
n = G__10982;
continue;
}
} else {
return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__10977 = val__$1;
var G__10978 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10977,G__10978) : f.call(null,G__10977,G__10978));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__10983 = nval;
var G__10984 = (n + (1));
val__$1 = G__10983;
n = G__10984;
continue;
}
} else {
return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;



/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__10986 = x;
if(G__10986){
var bit__4309__auto__ = (G__10986.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4309__auto__) || (G__10986.cljs$core$ICounted$)){
return true;
} else {
if((!G__10986.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__10986);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__10986);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__10988 = x;
if(G__10988){
var bit__4309__auto__ = (G__10988.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4309__auto__) || (G__10988.cljs$core$IIndexed$)){
return true;
} else {
if((!G__10988.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__10988);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__10988);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.IndexedSeqIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.IndexedSeqIterator.cljs$lang$type = true;

cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/IndexedSeqIterator");
});

cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){
return (new cljs.core.IndexedSeqIterator(arr,i));
});


/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.IndexedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return not_found;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr.length - self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var c = cljs.core._count(coll__$1);
if((c > (0))){
return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__10989 = coll__$1;
var G__10990 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__10989,G__10990) : cljs.core.equiv_sequential.call(null,G__10989,G__10990));
});

cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr[self__.i]);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__10991 = o;
var G__10992 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__10991,G__10992) : cljs.core.cons.call(null,G__10991,G__10992));
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length)){
return (new cljs.core.IndexedSeq(prim,i));
} else {
return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;


/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.RSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});

cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return null;
}
});

cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.i + (1));
});

cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__10995 = coll__$1;
var G__10996 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__10995,G__10996) : cljs.core.equiv_sequential.call(null,G__10995,G__10996));
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__10997 = cljs.core.List.EMPTY;
var G__10998 = self__.meta;
return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__10997,G__10998) : cljs.core.with_meta.call(null,G__10997,G__10998));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
var G__10999 = f;
var G__11000 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__10999,G__11000) : cljs.core.seq_reduce.call(null,G__10999,G__11000));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
var G__11001 = f;
var G__11002 = start;
var G__11003 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__11001,G__11002,G__11003) : cljs.core.seq_reduce.call(null,G__11001,G__11002,G__11003));
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});

cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__11004 = o;
var G__11005 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__11004,G__11005) : cljs.core.cons.call(null,G__11004,G__11005));
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next(s);
if(!((sn == null))){
var G__11006 = sn;
s = G__11006;
continue;
} else {
return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);

(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){
return coll;
});
var conj__2 = (function (coll,x){
if(!((coll == null))){
return cljs.core._conj(coll,x);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__11011__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__11012 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__11013 = cljs.core.first(xs);
var G__11014 = cljs.core.next(xs);
coll = G__11012;
x = G__11013;
xs = G__11014;
continue;
} else {
return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__11011 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11011__delegate.call(this,coll,x,xs);};
G__11011.cljs$lang$maxFixedArity = 2;
G__11011.cljs$lang$applyTo = (function (arglist__11015){
var coll = cljs.core.first(arglist__11015);
arglist__11015 = cljs.core.next(arglist__11015);
var x = cljs.core.first(arglist__11015);
var xs = cljs.core.rest(arglist__11015);
return G__11011__delegate(coll,x,xs);
});
G__11011.cljs$core$IFn$_invoke$arity$variadic = G__11011__delegate;
return G__11011;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
if((coll == null)){
return null;
} else {
return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq(coll);
var acc = (0);
while(true){
if(cljs.core.counted_QMARK_(s)){
return (acc + cljs.core._count(s));
} else {
var G__11016 = cljs.core.next(s);
var G__11017 = (acc + (1));
s = G__11016;
acc = G__11017;
continue;
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(!((coll == null))){
if((function (){var G__11019 = coll;
if(G__11019){
var bit__4302__auto__ = (G__11019.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4302__auto__) || (G__11019.cljs$core$ICounted$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(null);
} else {
if(coll instanceof Array){
return coll.length;
} else {
if(typeof coll === 'string'){
return coll.length;
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll)){
return cljs.core._count(coll);
} else {
return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else {
return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null)){
throw (new Error("Index out of bounds"));
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
throw (new Error("Index out of bounds"));
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if(cljs.core.seq(coll)){
var G__11020 = cljs.core.next(coll);
var G__11021 = (n - (1));
coll = G__11020;
n = G__11021;
continue;
} else {
throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null)){
return not_found;
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
return not_found;
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
if(cljs.core.seq(coll)){
var G__11022 = cljs.core.next(coll);
var G__11023 = (n - (1));
var G__11024 = not_found;
coll = G__11022;
n = G__11023;
not_found = G__11024;
continue;
} else {
return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number"));
} else {
if((coll == null)){
return coll;
} else {
if((function (){var G__11029 = coll;
if(G__11029){
var bit__4302__auto__ = (G__11029.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4302__auto__) || (G__11029.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__11030 = coll;
if(G__11030){
var bit__4309__auto__ = (G__11030.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4309__auto__) || (G__11030.cljs$core$ISeq$)){
return true;
} else {
if((!G__11030.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11030);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11030);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number."));
} else {
if((coll == null)){
return not_found;
} else {
if((function (){var G__11031 = coll;
if(G__11031){
var bit__4302__auto__ = (G__11031.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4302__auto__) || (G__11031.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__11032 = coll;
if(G__11032){
var bit__4309__auto__ = (G__11032.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4309__auto__) || (G__11032.cljs$core$ISeq$)){
return true;
} else {
if((!G__11032.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11032);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11032);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the nth rest of coll, coll when n is 0.
*/
cljs.core.nthrest = (function nthrest(coll,n){
var n__$1 = n;
var xs = coll;
while(true){
if(((n__$1 > (0))) && (cljs.core.seq(xs))){
var G__11033 = (n__$1 - (1));
var G__11034 = cljs.core.rest(xs);
n__$1 = G__11033;
xs = G__11034;
continue;
} else {
return xs;
}
break;
}
});
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
if((o == null)){
return null;
} else {
if((function (){var G__11037 = o;
if(G__11037){
var bit__4302__auto__ = (G__11037.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4302__auto__) || (G__11037.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else {
return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){
if(!((o == null))){
if((function (){var G__11038 = o;
if(G__11038){
var bit__4302__auto__ = (G__11038.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4302__auto__) || (G__11038.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else {
return not_found;

}
}
}
}
} else {
return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
if(!((coll == null))){
return cljs.core._assoc(coll,k,v);
} else {
return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__11042__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__11043 = ret;
var G__11044 = cljs.core.first(kvs);
var G__11045 = cljs.core.second(kvs);
var G__11046 = cljs.core.nnext(kvs);
coll = G__11043;
k = G__11044;
v = G__11045;
kvs = G__11046;
continue;
} else {
return ret;
}
break;
}
};
var G__11042 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11042__delegate.call(this,coll,k,v,kvs);};
G__11042.cljs$lang$maxFixedArity = 3;
G__11042.cljs$lang$applyTo = (function (arglist__11047){
var coll = cljs.core.first(arglist__11047);
arglist__11047 = cljs.core.next(arglist__11047);
var k = cljs.core.first(arglist__11047);
arglist__11047 = cljs.core.next(arglist__11047);
var v = cljs.core.first(arglist__11047);
var kvs = cljs.core.rest(arglist__11047);
return G__11042__delegate(coll,k,v,kvs);
});
G__11042.cljs$core$IFn$_invoke$arity$variadic = G__11042__delegate;
return G__11042;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__11050__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__11051 = ret;
var G__11052 = cljs.core.first(ks);
var G__11053 = cljs.core.next(ks);
coll = G__11051;
k = G__11052;
ks = G__11053;
continue;
} else {
return ret;
}
}
break;
}
};
var G__11050 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11050__delegate.call(this,coll,k,ks);};
G__11050.cljs$lang$maxFixedArity = 2;
G__11050.cljs$lang$applyTo = (function (arglist__11054){
var coll = cljs.core.first(arglist__11054);
arglist__11054 = cljs.core.next(arglist__11054);
var k = cljs.core.first(arglist__11054);
var ks = cljs.core.rest(arglist__11054);
return G__11050__delegate(coll,k,ks);
});
G__11050.cljs$core$IFn$_invoke$arity$variadic = G__11050__delegate;
return G__11050;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
var or__3628__auto__ = (function (){var G__11059 = f;
return goog.isFunction(G__11059);
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var G__11060 = f;
if(G__11060){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto____$1 = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
return G__11060.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__11060.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__11060);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__11060);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.prototype.call = (function() {
var G__11526 = null;
var G__11526__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__11526__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11062 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__11062) : self__.afn.call(null,G__11062));
});
var G__11526__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11063 = a;
var G__11064 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__11063,G__11064) : self__.afn.call(null,G__11063,G__11064));
});
var G__11526__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11065 = a;
var G__11066 = b;
var G__11067 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__11065,G__11066,G__11067) : self__.afn.call(null,G__11065,G__11066,G__11067));
});
var G__11526__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11068 = a;
var G__11069 = b;
var G__11070 = c;
var G__11071 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__11068,G__11069,G__11070,G__11071) : self__.afn.call(null,G__11068,G__11069,G__11070,G__11071));
});
var G__11526__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11072 = a;
var G__11073 = b;
var G__11074 = c;
var G__11075 = d;
var G__11076 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__11072,G__11073,G__11074,G__11075,G__11076) : self__.afn.call(null,G__11072,G__11073,G__11074,G__11075,G__11076));
});
var G__11526__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11077 = a;
var G__11078 = b;
var G__11079 = c;
var G__11080 = d;
var G__11081 = e;
var G__11082 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__11077,G__11078,G__11079,G__11080,G__11081,G__11082) : self__.afn.call(null,G__11077,G__11078,G__11079,G__11080,G__11081,G__11082));
});
var G__11526__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11083 = a;
var G__11084 = b;
var G__11085 = c;
var G__11086 = d;
var G__11087 = e;
var G__11088 = f;
var G__11089 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__11083,G__11084,G__11085,G__11086,G__11087,G__11088,G__11089) : self__.afn.call(null,G__11083,G__11084,G__11085,G__11086,G__11087,G__11088,G__11089));
});
var G__11526__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11090 = a;
var G__11091 = b;
var G__11092 = c;
var G__11093 = d;
var G__11094 = e;
var G__11095 = f;
var G__11096 = g;
var G__11097 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__11090,G__11091,G__11092,G__11093,G__11094,G__11095,G__11096,G__11097) : self__.afn.call(null,G__11090,G__11091,G__11092,G__11093,G__11094,G__11095,G__11096,G__11097));
});
var G__11526__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11098 = a;
var G__11099 = b;
var G__11100 = c;
var G__11101 = d;
var G__11102 = e;
var G__11103 = f;
var G__11104 = g;
var G__11105 = h;
var G__11106 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__11098,G__11099,G__11100,G__11101,G__11102,G__11103,G__11104,G__11105,G__11106) : self__.afn.call(null,G__11098,G__11099,G__11100,G__11101,G__11102,G__11103,G__11104,G__11105,G__11106));
});
var G__11526__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11107 = a;
var G__11108 = b;
var G__11109 = c;
var G__11110 = d;
var G__11111 = e;
var G__11112 = f;
var G__11113 = g;
var G__11114 = h;
var G__11115 = i;
var G__11116 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__11107,G__11108,G__11109,G__11110,G__11111,G__11112,G__11113,G__11114,G__11115,G__11116) : self__.afn.call(null,G__11107,G__11108,G__11109,G__11110,G__11111,G__11112,G__11113,G__11114,G__11115,G__11116));
});
var G__11526__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11117 = a;
var G__11118 = b;
var G__11119 = c;
var G__11120 = d;
var G__11121 = e;
var G__11122 = f;
var G__11123 = g;
var G__11124 = h;
var G__11125 = i;
var G__11126 = j;
var G__11127 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__11117,G__11118,G__11119,G__11120,G__11121,G__11122,G__11123,G__11124,G__11125,G__11126,G__11127) : self__.afn.call(null,G__11117,G__11118,G__11119,G__11120,G__11121,G__11122,G__11123,G__11124,G__11125,G__11126,G__11127));
});
var G__11526__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11128 = a;
var G__11129 = b;
var G__11130 = c;
var G__11131 = d;
var G__11132 = e;
var G__11133 = f;
var G__11134 = g;
var G__11135 = h;
var G__11136 = i;
var G__11137 = j;
var G__11138 = k;
var G__11139 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__11128,G__11129,G__11130,G__11131,G__11132,G__11133,G__11134,G__11135,G__11136,G__11137,G__11138,G__11139) : self__.afn.call(null,G__11128,G__11129,G__11130,G__11131,G__11132,G__11133,G__11134,G__11135,G__11136,G__11137,G__11138,G__11139));
});
var G__11526__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11140 = a;
var G__11141 = b;
var G__11142 = c;
var G__11143 = d;
var G__11144 = e;
var G__11145 = f;
var G__11146 = g;
var G__11147 = h;
var G__11148 = i;
var G__11149 = j;
var G__11150 = k;
var G__11151 = l;
var G__11152 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__11140,G__11141,G__11142,G__11143,G__11144,G__11145,G__11146,G__11147,G__11148,G__11149,G__11150,G__11151,G__11152) : self__.afn.call(null,G__11140,G__11141,G__11142,G__11143,G__11144,G__11145,G__11146,G__11147,G__11148,G__11149,G__11150,G__11151,G__11152));
});
var G__11526__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11153 = a;
var G__11154 = b;
var G__11155 = c;
var G__11156 = d;
var G__11157 = e;
var G__11158 = f;
var G__11159 = g;
var G__11160 = h;
var G__11161 = i;
var G__11162 = j;
var G__11163 = k;
var G__11164 = l;
var G__11165 = m;
var G__11166 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__11153,G__11154,G__11155,G__11156,G__11157,G__11158,G__11159,G__11160,G__11161,G__11162,G__11163,G__11164,G__11165,G__11166) : self__.afn.call(null,G__11153,G__11154,G__11155,G__11156,G__11157,G__11158,G__11159,G__11160,G__11161,G__11162,G__11163,G__11164,G__11165,G__11166));
});
var G__11526__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11167 = a;
var G__11168 = b;
var G__11169 = c;
var G__11170 = d;
var G__11171 = e;
var G__11172 = f;
var G__11173 = g;
var G__11174 = h;
var G__11175 = i;
var G__11176 = j;
var G__11177 = k;
var G__11178 = l;
var G__11179 = m;
var G__11180 = n;
var G__11181 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__11167,G__11168,G__11169,G__11170,G__11171,G__11172,G__11173,G__11174,G__11175,G__11176,G__11177,G__11178,G__11179,G__11180,G__11181) : self__.afn.call(null,G__11167,G__11168,G__11169,G__11170,G__11171,G__11172,G__11173,G__11174,G__11175,G__11176,G__11177,G__11178,G__11179,G__11180,G__11181));
});
var G__11526__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11182 = a;
var G__11183 = b;
var G__11184 = c;
var G__11185 = d;
var G__11186 = e;
var G__11187 = f;
var G__11188 = g;
var G__11189 = h;
var G__11190 = i;
var G__11191 = j;
var G__11192 = k;
var G__11193 = l;
var G__11194 = m;
var G__11195 = n;
var G__11196 = o;
var G__11197 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__11182,G__11183,G__11184,G__11185,G__11186,G__11187,G__11188,G__11189,G__11190,G__11191,G__11192,G__11193,G__11194,G__11195,G__11196,G__11197) : self__.afn.call(null,G__11182,G__11183,G__11184,G__11185,G__11186,G__11187,G__11188,G__11189,G__11190,G__11191,G__11192,G__11193,G__11194,G__11195,G__11196,G__11197));
});
var G__11526__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11198 = a;
var G__11199 = b;
var G__11200 = c;
var G__11201 = d;
var G__11202 = e;
var G__11203 = f;
var G__11204 = g;
var G__11205 = h;
var G__11206 = i;
var G__11207 = j;
var G__11208 = k;
var G__11209 = l;
var G__11210 = m;
var G__11211 = n;
var G__11212 = o;
var G__11213 = p;
var G__11214 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__11198,G__11199,G__11200,G__11201,G__11202,G__11203,G__11204,G__11205,G__11206,G__11207,G__11208,G__11209,G__11210,G__11211,G__11212,G__11213,G__11214) : self__.afn.call(null,G__11198,G__11199,G__11200,G__11201,G__11202,G__11203,G__11204,G__11205,G__11206,G__11207,G__11208,G__11209,G__11210,G__11211,G__11212,G__11213,G__11214));
});
var G__11526__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11215 = a;
var G__11216 = b;
var G__11217 = c;
var G__11218 = d;
var G__11219 = e;
var G__11220 = f;
var G__11221 = g;
var G__11222 = h;
var G__11223 = i;
var G__11224 = j;
var G__11225 = k;
var G__11226 = l;
var G__11227 = m;
var G__11228 = n;
var G__11229 = o;
var G__11230 = p;
var G__11231 = q;
var G__11232 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__11215,G__11216,G__11217,G__11218,G__11219,G__11220,G__11221,G__11222,G__11223,G__11224,G__11225,G__11226,G__11227,G__11228,G__11229,G__11230,G__11231,G__11232) : self__.afn.call(null,G__11215,G__11216,G__11217,G__11218,G__11219,G__11220,G__11221,G__11222,G__11223,G__11224,G__11225,G__11226,G__11227,G__11228,G__11229,G__11230,G__11231,G__11232));
});
var G__11526__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11233 = a;
var G__11234 = b;
var G__11235 = c;
var G__11236 = d;
var G__11237 = e;
var G__11238 = f;
var G__11239 = g;
var G__11240 = h;
var G__11241 = i;
var G__11242 = j;
var G__11243 = k;
var G__11244 = l;
var G__11245 = m;
var G__11246 = n;
var G__11247 = o;
var G__11248 = p;
var G__11249 = q;
var G__11250 = r;
var G__11251 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__11233,G__11234,G__11235,G__11236,G__11237,G__11238,G__11239,G__11240,G__11241,G__11242,G__11243,G__11244,G__11245,G__11246,G__11247,G__11248,G__11249,G__11250,G__11251) : self__.afn.call(null,G__11233,G__11234,G__11235,G__11236,G__11237,G__11238,G__11239,G__11240,G__11241,G__11242,G__11243,G__11244,G__11245,G__11246,G__11247,G__11248,G__11249,G__11250,G__11251));
});
var G__11526__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11252 = a;
var G__11253 = b;
var G__11254 = c;
var G__11255 = d;
var G__11256 = e;
var G__11257 = f;
var G__11258 = g;
var G__11259 = h;
var G__11260 = i;
var G__11261 = j;
var G__11262 = k;
var G__11263 = l;
var G__11264 = m;
var G__11265 = n;
var G__11266 = o;
var G__11267 = p;
var G__11268 = q;
var G__11269 = r;
var G__11270 = s;
var G__11271 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__11252,G__11253,G__11254,G__11255,G__11256,G__11257,G__11258,G__11259,G__11260,G__11261,G__11262,G__11263,G__11264,G__11265,G__11266,G__11267,G__11268,G__11269,G__11270,G__11271) : self__.afn.call(null,G__11252,G__11253,G__11254,G__11255,G__11256,G__11257,G__11258,G__11259,G__11260,G__11261,G__11262,G__11263,G__11264,G__11265,G__11266,G__11267,G__11268,G__11269,G__11270,G__11271));
});
var G__11526__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11272 = self__.afn;
var G__11273 = a;
var G__11274 = b;
var G__11275 = c;
var G__11276 = d;
var G__11277 = e;
var G__11278 = f;
var G__11279 = g;
var G__11280 = h;
var G__11281 = i;
var G__11282 = j;
var G__11283 = k;
var G__11284 = l;
var G__11285 = m;
var G__11286 = n;
var G__11287 = o;
var G__11288 = p;
var G__11289 = q;
var G__11290 = r;
var G__11291 = s;
var G__11292 = t;
var G__11293 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__11272,G__11273,G__11274,G__11275,G__11276,G__11277,G__11278,G__11279,G__11280,G__11281,G__11282,G__11283,G__11284,G__11285,G__11286,G__11287,G__11288,G__11289,G__11290,G__11291,G__11292,G__11293) : cljs.core.apply.call(null,G__11272,G__11273,G__11274,G__11275,G__11276,G__11277,G__11278,G__11279,G__11280,G__11281,G__11282,G__11283,G__11284,G__11285,G__11286,G__11287,G__11288,G__11289,G__11290,G__11291,G__11292,G__11293));
});
G__11526 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__11526__1.call(this,self__);
case 2:
return G__11526__2.call(this,self__,a);
case 3:
return G__11526__3.call(this,self__,a,b);
case 4:
return G__11526__4.call(this,self__,a,b,c);
case 5:
return G__11526__5.call(this,self__,a,b,c,d);
case 6:
return G__11526__6.call(this,self__,a,b,c,d,e);
case 7:
return G__11526__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__11526__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__11526__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__11526__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__11526__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__11526__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__11526__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__11526__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__11526__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__11526__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__11526__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__11526__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__11526__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__11526__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__11526__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__11526__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11526.cljs$core$IFn$_invoke$arity$1 = G__11526__1;
G__11526.cljs$core$IFn$_invoke$arity$2 = G__11526__2;
G__11526.cljs$core$IFn$_invoke$arity$3 = G__11526__3;
G__11526.cljs$core$IFn$_invoke$arity$4 = G__11526__4;
G__11526.cljs$core$IFn$_invoke$arity$5 = G__11526__5;
G__11526.cljs$core$IFn$_invoke$arity$6 = G__11526__6;
G__11526.cljs$core$IFn$_invoke$arity$7 = G__11526__7;
G__11526.cljs$core$IFn$_invoke$arity$8 = G__11526__8;
G__11526.cljs$core$IFn$_invoke$arity$9 = G__11526__9;
G__11526.cljs$core$IFn$_invoke$arity$10 = G__11526__10;
G__11526.cljs$core$IFn$_invoke$arity$11 = G__11526__11;
G__11526.cljs$core$IFn$_invoke$arity$12 = G__11526__12;
G__11526.cljs$core$IFn$_invoke$arity$13 = G__11526__13;
G__11526.cljs$core$IFn$_invoke$arity$14 = G__11526__14;
G__11526.cljs$core$IFn$_invoke$arity$15 = G__11526__15;
G__11526.cljs$core$IFn$_invoke$arity$16 = G__11526__16;
G__11526.cljs$core$IFn$_invoke$arity$17 = G__11526__17;
G__11526.cljs$core$IFn$_invoke$arity$18 = G__11526__18;
G__11526.cljs$core$IFn$_invoke$arity$19 = G__11526__19;
G__11526.cljs$core$IFn$_invoke$arity$20 = G__11526__20;
G__11526.cljs$core$IFn$_invoke$arity$21 = G__11526__21;
G__11526.cljs$core$IFn$_invoke$arity$22 = G__11526__22;
return G__11526;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args11061){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11061)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
var G__11294 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__11294) : self__.afn.call(null,G__11294));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
var G__11295 = a;
var G__11296 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__11295,G__11296) : self__.afn.call(null,G__11295,G__11296));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
var G__11297 = a;
var G__11298 = b;
var G__11299 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__11297,G__11298,G__11299) : self__.afn.call(null,G__11297,G__11298,G__11299));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
var G__11300 = a;
var G__11301 = b;
var G__11302 = c;
var G__11303 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__11300,G__11301,G__11302,G__11303) : self__.afn.call(null,G__11300,G__11301,G__11302,G__11303));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
var G__11304 = a;
var G__11305 = b;
var G__11306 = c;
var G__11307 = d;
var G__11308 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__11304,G__11305,G__11306,G__11307,G__11308) : self__.afn.call(null,G__11304,G__11305,G__11306,G__11307,G__11308));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
var G__11309 = a;
var G__11310 = b;
var G__11311 = c;
var G__11312 = d;
var G__11313 = e;
var G__11314 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__11309,G__11310,G__11311,G__11312,G__11313,G__11314) : self__.afn.call(null,G__11309,G__11310,G__11311,G__11312,G__11313,G__11314));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
var G__11315 = a;
var G__11316 = b;
var G__11317 = c;
var G__11318 = d;
var G__11319 = e;
var G__11320 = f;
var G__11321 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__11315,G__11316,G__11317,G__11318,G__11319,G__11320,G__11321) : self__.afn.call(null,G__11315,G__11316,G__11317,G__11318,G__11319,G__11320,G__11321));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
var G__11322 = a;
var G__11323 = b;
var G__11324 = c;
var G__11325 = d;
var G__11326 = e;
var G__11327 = f;
var G__11328 = g;
var G__11329 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__11322,G__11323,G__11324,G__11325,G__11326,G__11327,G__11328,G__11329) : self__.afn.call(null,G__11322,G__11323,G__11324,G__11325,G__11326,G__11327,G__11328,G__11329));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
var G__11330 = a;
var G__11331 = b;
var G__11332 = c;
var G__11333 = d;
var G__11334 = e;
var G__11335 = f;
var G__11336 = g;
var G__11337 = h;
var G__11338 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__11330,G__11331,G__11332,G__11333,G__11334,G__11335,G__11336,G__11337,G__11338) : self__.afn.call(null,G__11330,G__11331,G__11332,G__11333,G__11334,G__11335,G__11336,G__11337,G__11338));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
var G__11339 = a;
var G__11340 = b;
var G__11341 = c;
var G__11342 = d;
var G__11343 = e;
var G__11344 = f;
var G__11345 = g;
var G__11346 = h;
var G__11347 = i;
var G__11348 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__11339,G__11340,G__11341,G__11342,G__11343,G__11344,G__11345,G__11346,G__11347,G__11348) : self__.afn.call(null,G__11339,G__11340,G__11341,G__11342,G__11343,G__11344,G__11345,G__11346,G__11347,G__11348));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
var G__11349 = a;
var G__11350 = b;
var G__11351 = c;
var G__11352 = d;
var G__11353 = e;
var G__11354 = f;
var G__11355 = g;
var G__11356 = h;
var G__11357 = i;
var G__11358 = j;
var G__11359 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__11349,G__11350,G__11351,G__11352,G__11353,G__11354,G__11355,G__11356,G__11357,G__11358,G__11359) : self__.afn.call(null,G__11349,G__11350,G__11351,G__11352,G__11353,G__11354,G__11355,G__11356,G__11357,G__11358,G__11359));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
var G__11360 = a;
var G__11361 = b;
var G__11362 = c;
var G__11363 = d;
var G__11364 = e;
var G__11365 = f;
var G__11366 = g;
var G__11367 = h;
var G__11368 = i;
var G__11369 = j;
var G__11370 = k;
var G__11371 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__11360,G__11361,G__11362,G__11363,G__11364,G__11365,G__11366,G__11367,G__11368,G__11369,G__11370,G__11371) : self__.afn.call(null,G__11360,G__11361,G__11362,G__11363,G__11364,G__11365,G__11366,G__11367,G__11368,G__11369,G__11370,G__11371));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
var G__11372 = a;
var G__11373 = b;
var G__11374 = c;
var G__11375 = d;
var G__11376 = e;
var G__11377 = f;
var G__11378 = g;
var G__11379 = h;
var G__11380 = i;
var G__11381 = j;
var G__11382 = k;
var G__11383 = l;
var G__11384 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__11372,G__11373,G__11374,G__11375,G__11376,G__11377,G__11378,G__11379,G__11380,G__11381,G__11382,G__11383,G__11384) : self__.afn.call(null,G__11372,G__11373,G__11374,G__11375,G__11376,G__11377,G__11378,G__11379,G__11380,G__11381,G__11382,G__11383,G__11384));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
var G__11385 = a;
var G__11386 = b;
var G__11387 = c;
var G__11388 = d;
var G__11389 = e;
var G__11390 = f;
var G__11391 = g;
var G__11392 = h;
var G__11393 = i;
var G__11394 = j;
var G__11395 = k;
var G__11396 = l;
var G__11397 = m;
var G__11398 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__11385,G__11386,G__11387,G__11388,G__11389,G__11390,G__11391,G__11392,G__11393,G__11394,G__11395,G__11396,G__11397,G__11398) : self__.afn.call(null,G__11385,G__11386,G__11387,G__11388,G__11389,G__11390,G__11391,G__11392,G__11393,G__11394,G__11395,G__11396,G__11397,G__11398));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
var G__11399 = a;
var G__11400 = b;
var G__11401 = c;
var G__11402 = d;
var G__11403 = e;
var G__11404 = f;
var G__11405 = g;
var G__11406 = h;
var G__11407 = i;
var G__11408 = j;
var G__11409 = k;
var G__11410 = l;
var G__11411 = m;
var G__11412 = n;
var G__11413 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__11399,G__11400,G__11401,G__11402,G__11403,G__11404,G__11405,G__11406,G__11407,G__11408,G__11409,G__11410,G__11411,G__11412,G__11413) : self__.afn.call(null,G__11399,G__11400,G__11401,G__11402,G__11403,G__11404,G__11405,G__11406,G__11407,G__11408,G__11409,G__11410,G__11411,G__11412,G__11413));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
var G__11414 = a;
var G__11415 = b;
var G__11416 = c;
var G__11417 = d;
var G__11418 = e;
var G__11419 = f;
var G__11420 = g;
var G__11421 = h;
var G__11422 = i;
var G__11423 = j;
var G__11424 = k;
var G__11425 = l;
var G__11426 = m;
var G__11427 = n;
var G__11428 = o;
var G__11429 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__11414,G__11415,G__11416,G__11417,G__11418,G__11419,G__11420,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429) : self__.afn.call(null,G__11414,G__11415,G__11416,G__11417,G__11418,G__11419,G__11420,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
var G__11430 = a;
var G__11431 = b;
var G__11432 = c;
var G__11433 = d;
var G__11434 = e;
var G__11435 = f;
var G__11436 = g;
var G__11437 = h;
var G__11438 = i;
var G__11439 = j;
var G__11440 = k;
var G__11441 = l;
var G__11442 = m;
var G__11443 = n;
var G__11444 = o;
var G__11445 = p;
var G__11446 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__11430,G__11431,G__11432,G__11433,G__11434,G__11435,G__11436,G__11437,G__11438,G__11439,G__11440,G__11441,G__11442,G__11443,G__11444,G__11445,G__11446) : self__.afn.call(null,G__11430,G__11431,G__11432,G__11433,G__11434,G__11435,G__11436,G__11437,G__11438,G__11439,G__11440,G__11441,G__11442,G__11443,G__11444,G__11445,G__11446));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
var G__11447 = a;
var G__11448 = b;
var G__11449 = c;
var G__11450 = d;
var G__11451 = e;
var G__11452 = f;
var G__11453 = g;
var G__11454 = h;
var G__11455 = i;
var G__11456 = j;
var G__11457 = k;
var G__11458 = l;
var G__11459 = m;
var G__11460 = n;
var G__11461 = o;
var G__11462 = p;
var G__11463 = q;
var G__11464 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__11447,G__11448,G__11449,G__11450,G__11451,G__11452,G__11453,G__11454,G__11455,G__11456,G__11457,G__11458,G__11459,G__11460,G__11461,G__11462,G__11463,G__11464) : self__.afn.call(null,G__11447,G__11448,G__11449,G__11450,G__11451,G__11452,G__11453,G__11454,G__11455,G__11456,G__11457,G__11458,G__11459,G__11460,G__11461,G__11462,G__11463,G__11464));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
var G__11465 = a;
var G__11466 = b;
var G__11467 = c;
var G__11468 = d;
var G__11469 = e;
var G__11470 = f;
var G__11471 = g;
var G__11472 = h;
var G__11473 = i;
var G__11474 = j;
var G__11475 = k;
var G__11476 = l;
var G__11477 = m;
var G__11478 = n;
var G__11479 = o;
var G__11480 = p;
var G__11481 = q;
var G__11482 = r;
var G__11483 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__11465,G__11466,G__11467,G__11468,G__11469,G__11470,G__11471,G__11472,G__11473,G__11474,G__11475,G__11476,G__11477,G__11478,G__11479,G__11480,G__11481,G__11482,G__11483) : self__.afn.call(null,G__11465,G__11466,G__11467,G__11468,G__11469,G__11470,G__11471,G__11472,G__11473,G__11474,G__11475,G__11476,G__11477,G__11478,G__11479,G__11480,G__11481,G__11482,G__11483));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
var G__11484 = a;
var G__11485 = b;
var G__11486 = c;
var G__11487 = d;
var G__11488 = e;
var G__11489 = f;
var G__11490 = g;
var G__11491 = h;
var G__11492 = i;
var G__11493 = j;
var G__11494 = k;
var G__11495 = l;
var G__11496 = m;
var G__11497 = n;
var G__11498 = o;
var G__11499 = p;
var G__11500 = q;
var G__11501 = r;
var G__11502 = s;
var G__11503 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__11484,G__11485,G__11486,G__11487,G__11488,G__11489,G__11490,G__11491,G__11492,G__11493,G__11494,G__11495,G__11496,G__11497,G__11498,G__11499,G__11500,G__11501,G__11502,G__11503) : self__.afn.call(null,G__11484,G__11485,G__11486,G__11487,G__11488,G__11489,G__11490,G__11491,G__11492,G__11493,G__11494,G__11495,G__11496,G__11497,G__11498,G__11499,G__11500,G__11501,G__11502,G__11503));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
var G__11504 = self__.afn;
var G__11505 = a;
var G__11506 = b;
var G__11507 = c;
var G__11508 = d;
var G__11509 = e;
var G__11510 = f;
var G__11511 = g;
var G__11512 = h;
var G__11513 = i;
var G__11514 = j;
var G__11515 = k;
var G__11516 = l;
var G__11517 = m;
var G__11518 = n;
var G__11519 = o;
var G__11520 = p;
var G__11521 = q;
var G__11522 = r;
var G__11523 = s;
var G__11524 = t;
var G__11525 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__11504,G__11505,G__11506,G__11507,G__11508,G__11509,G__11510,G__11511,G__11512,G__11513,G__11514,G__11515,G__11516,G__11517,G__11518,G__11519,G__11520,G__11521,G__11522,G__11523,G__11524,G__11525) : cljs.core.apply.call(null,G__11504,G__11505,G__11506,G__11507,G__11508,G__11509,G__11510,G__11511,G__11512,G__11513,G__11514,G__11515,G__11516,G__11517,G__11518,G__11519,G__11520,G__11521,G__11522,G__11523,G__11524,G__11525));
});

cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;

cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.MetaFn(self__.afn,new_meta));
});

cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.MetaFn.cljs$lang$type = true;

cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__11530 = o;
if(G__11530){
var bit__4309__auto__ = (G__11530.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4309__auto__) || (G__11530.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__11530.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__11530);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__11530);
}
})()))){
return (new cljs.core.MetaFn(o,meta));
} else {
if((o == null)){
return null;
} else {
return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var and__3616__auto__ = !((o == null));
if(and__3616__auto__){
var G__11534 = o;
if(G__11534){
var bit__4309__auto__ = (G__11534.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4309__auto__) || (G__11534.cljs$core$IMeta$)){
return true;
} else {
if((!G__11534.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__11534);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__11534);
}
} else {
return and__3616__auto__;
}
})()){
return cljs.core._meta(o);
} else {
return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
if((coll == null)){
return null;
} else {
return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
if((coll == null)){
return null;
} else {
return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__11537__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__11538 = ret;
var G__11539 = cljs.core.first(ks);
var G__11540 = cljs.core.next(ks);
coll = G__11538;
k = G__11539;
ks = G__11540;
continue;
} else {
return ret;
}
}
break;
}
};
var G__11537 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11537__delegate.call(this,coll,k,ks);};
G__11537.cljs$lang$maxFixedArity = 2;
G__11537.cljs$lang$applyTo = (function (arglist__11541){
var coll = cljs.core.first(arglist__11541);
arglist__11541 = cljs.core.next(arglist__11541);
var k = cljs.core.first(arglist__11541);
var ks = cljs.core.rest(arglist__11541);
return G__11537__delegate(coll,k,ks);
});
G__11537.cljs$core$IFn$_invoke$arity$variadic = G__11537__delegate;
return G__11537;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null)){
return false;
} else {
var G__11543 = x;
if(G__11543){
var bit__4309__auto__ = (G__11543.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__4309__auto__) || (G__11543.cljs$core$ICollection$)){
return true;
} else {
if((!G__11543.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__11543);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__11543);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null)){
return false;
} else {
var G__11545 = x;
if(G__11545){
var bit__4309__auto__ = (G__11545.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4309__auto__) || (G__11545.cljs$core$ISet$)){
return true;
} else {
if((!G__11545.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__11545);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__11545);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__11547 = x;
if(G__11547){
var bit__4309__auto__ = (G__11547.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__4309__auto__) || (G__11547.cljs$core$IAssociative$)){
return true;
} else {
if((!G__11547.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__11547);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__11547);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__11549 = x;
if(G__11549){
var bit__4309__auto__ = (G__11549.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4309__auto__) || (G__11549.cljs$core$ISequential$)){
return true;
} else {
if((!G__11549.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__11549);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__11549);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){
var G__11551 = x;
if(G__11551){
var bit__4309__auto__ = (G__11551.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__4309__auto__) || (G__11551.cljs$core$ISorted$)){
return true;
} else {
if((!G__11551.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__11551);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__11551);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__11553 = x;
if(G__11553){
var bit__4309__auto__ = (G__11553.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4309__auto__) || (G__11553.cljs$core$IReduce$)){
return true;
} else {
if((!G__11553.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__11553);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__11553);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__11555 = x;
if(G__11555){
var bit__4309__auto__ = (G__11555.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4309__auto__) || (G__11555.cljs$core$IMap$)){
return true;
} else {
if((!G__11555.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__11555);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__11555);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__11557 = x;
if(G__11557){
var bit__4309__auto__ = (G__11557.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__4309__auto__) || (G__11557.cljs$core$IVector$)){
return true;
} else {
if((!G__11557.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__11557);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__11557);
}
});

cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__11559 = x;
if(G__11559){
var bit__4302__auto__ = (G__11559.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__4302__auto__) || (G__11559.cljs$core$IChunkedSeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
var obj11565 = {};
return obj11565;
});
var js_obj__1 = (function() { 
var G__11568__delegate = function (keyvals){
var G__11566 = goog.object.create;
var G__11567 = keyvals;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__11566,G__11567) : cljs.core.apply.call(null,G__11566,G__11567));
};
var G__11568 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11568__delegate.call(this,keyvals);};
G__11568.cljs$lang$maxFixedArity = 0;
G__11568.cljs$lang$applyTo = (function (arglist__11569){
var keyvals = cljs.core.seq(arglist__11569);
return G__11568__delegate(keyvals);
});
G__11568.cljs$core$IFn$_invoke$arity$variadic = G__11568__delegate;
return G__11568;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
var G__11572_11574 = obj;
var G__11573_11575 = ((function (G__11572_11574,keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(G__11572_11574,keys))
;
goog.object.forEach(G__11572_11574,G__11573_11575);

return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__11576 = (i__$1 + (1));
var G__11577 = (j__$1 + (1));
var G__11578 = (len__$1 - (1));
i__$1 = G__11576;
j__$1 = G__11577;
len__$1 = G__11578;
continue;
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - (1)));
var j__$1 = (j + (len - (1)));
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__11579 = (i__$1 - (1));
var G__11580 = (j__$1 - (1));
var G__11581 = (len__$1 - (1));
i__$1 = G__11579;
j__$1 = G__11580;
len__$1 = G__11581;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj11583 = {};
return obj11583;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null)){
return false;
} else {
var G__11585 = s;
if(G__11585){
var bit__4309__auto__ = (G__11585.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4309__auto__) || (G__11585.cljs$core$ISeq$)){
return true;
} else {
if((!G__11585.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11585);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11585);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__11587 = s;
if(G__11587){
var bit__4309__auto__ = (G__11587.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4309__auto__) || (G__11587.cljs$core$ISeqable$)){
return true;
} else {
if((!G__11587.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__11587);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__11587);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x)){
return true;
} else {
return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3628__auto__ = cljs.core.fn_QMARK_(f);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var G__11591 = f;
if(G__11591){
var bit__4309__auto__ = (G__11591.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__4309__auto__) || (G__11591.cljs$core$IFn$)){
return true;
} else {
if((!G__11591.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__11591);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__11591);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
return (typeof n === 'number') && (cljs.core.not((function (){var G__11604 = n;
return isNaN(G__11604);
})())) && (!((n === Infinity))) && (((function (){var G__11605 = n;
return parseFloat(G__11605);
})() === (function (){var G__11606 = n;
var G__11607 = (10);
return parseInt(G__11606,G__11607);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return false;
} else {
return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else {
return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__11608__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))){
var s = cljs.core.PersistentHashSet.fromArray([x,y], true);
var xs = more;
while(true){
var x__$1 = cljs.core.first(xs);
var etc = cljs.core.next(xs);
if(cljs.core.truth_(xs)){
if(cljs.core.contains_QMARK_(s,x__$1)){
return false;
} else {
var G__11609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__11610 = etc;
s = G__11609;
xs = G__11610;
continue;
}
} else {
return true;
}
break;
}
} else {
return false;
}
};
var G__11608 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11608__delegate.call(this,x,y,more);};
G__11608.cljs$lang$maxFixedArity = 2;
G__11608.cljs$lang$applyTo = (function (arglist__11611){
var x = cljs.core.first(arglist__11611);
arglist__11611 = cljs.core.next(arglist__11611);
var y = cljs.core.first(arglist__11611);
var more = cljs.core.rest(arglist__11611);
return G__11608__delegate(x,y,more);
});
G__11608.cljs$core$IFn$_invoke$arity$variadic = G__11608__delegate;
return G__11608;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3628__auto__ = cljs.core.seq(coll);
if(or__3628__auto__){
return or__3628__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if((cljs.core.type(x) === cljs.core.type(y))){
if((function (){var G__11615 = x;
if(G__11615){
var bit__4302__auto__ = (G__11615.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__4302__auto__) || (G__11615.cljs$core$IComparable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else {
var G__11616 = x;
var G__11617 = y;
return goog.array.defaultCompare(G__11616,G__11617);
}
} else {
throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));
if(((d === (0))) && (((n + (1)) < len))){
var G__11622 = xs;
var G__11623 = ys;
var G__11624 = len;
var G__11625 = (n + (1));
xs = G__11622;
ys = G__11623;
len = G__11624;
n = G__11625;
continue;
} else {
return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = (function (){var G__11630 = x;
var G__11631 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11630,G__11631) : f.call(null,G__11630,G__11631));
})();
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__11632 = y;
var G__11633 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11632,G__11633) : f.call(null,G__11632,G__11633));
})())){
return (1);
} else {
return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll)){
var a = (function (){var G__11639 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__11639) : cljs.core.to_array.call(null,G__11639));
})();
var G__11640_11642 = a;
var G__11641_11643 = cljs.core.fn__GT_comparator(comp);
goog.array.stableSort(G__11640_11642,G__11641_11643);

return cljs.core.seq(a);
} else {
return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__11649 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__11649) : keyfn.call(null,G__11649));
})(),(function (){var G__11650 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__11650) : keyfn.call(null,G__11650));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
var G__11656 = f;
var G__11657 = cljs.core.first(s);
var G__11658 = cljs.core.next(s);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__11656,G__11657,G__11658) : cljs.core.reduce.call(null,G__11656,G__11657,G__11658));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var nval = (function (){var G__11659 = val__$1;
var G__11660 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11659,G__11660) : f.call(null,G__11659,G__11660));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11661 = nval;
var G__11662 = cljs.core.next(coll__$1);
val__$1 = G__11661;
coll__$1 = G__11662;
continue;
}
} else {
return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = (function (){var G__11666 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__11666) : cljs.core.to_array.call(null,G__11666));
})();
var G__11667_11669 = a;
goog.array.shuffle(G__11667_11669);

var G__11668 = a;
return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__11668) : cljs.core.vec.call(null,G__11668));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__11672 = coll;
if(G__11672){
var bit__4302__auto__ = (G__11672.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4302__auto__) || (G__11672.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__11673 = coll;
if(G__11673){
var bit__4302__auto__ = (G__11673.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4302__auto__) || (G__11673.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
if(!((coll == null))){
return cljs.core._kv_reduce(coll,f,init);
} else {
return init;
}
});
cljs.core.identity = (function identity(x){
return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){
return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){
return (function() {
var G__11682 = null;
var G__11682__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__11682__1 = (function (x){
var G__11679 = x;
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__11679) : cf.call(null,G__11679));
});
var G__11682__2 = (function (x,y){
var G__11680 = x;
var G__11681 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11680,G__11681) : f.call(null,G__11680,G__11681));
});
G__11682 = function(x,y){
switch(arguments.length){
case 0:
return G__11682__0.call(this);
case 1:
return G__11682__1.call(this,x);
case 2:
return G__11682__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11682.cljs$core$IFn$_invoke$arity$0 = G__11682__0;
G__11682.cljs$core$IFn$_invoke$arity$1 = G__11682__1;
G__11682.cljs$core$IFn$_invoke$arity$2 = G__11682__2;
return G__11682;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){
return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){
var f__$1 = (function (){var G__11689 = f;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__11689) : xform.call(null,G__11689));
})();
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);
var G__11690 = ret;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11690) : f__$1.call(null,G__11690));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return (0);
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__11691__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__11691 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11691__delegate.call(this,x,y,more);};
G__11691.cljs$lang$maxFixedArity = 2;
G__11691.cljs$lang$applyTo = (function (arglist__11692){
var x = cljs.core.first(arglist__11692);
arglist__11692 = cljs.core.next(arglist__11692);
var y = cljs.core.first(arglist__11692);
var more = cljs.core.rest(arglist__11692);
return G__11691__delegate(x,y,more);
});
G__11691.cljs$core$IFn$_invoke$arity$variadic = G__11691__delegate;
return G__11691;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__11693__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__11693 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11693__delegate.call(this,x,y,more);};
G__11693.cljs$lang$maxFixedArity = 2;
G__11693.cljs$lang$applyTo = (function (arglist__11694){
var x = cljs.core.first(arglist__11694);
arglist__11694 = cljs.core.next(arglist__11694);
var y = cljs.core.first(arglist__11694);
var more = cljs.core.rest(arglist__11694);
return G__11693__delegate(x,y,more);
});
G__11693.cljs$core$IFn$_invoke$arity$variadic = G__11693__delegate;
return G__11693;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return (1);
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__11695__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__11695 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11695__delegate.call(this,x,y,more);};
G__11695.cljs$lang$maxFixedArity = 2;
G__11695.cljs$lang$applyTo = (function (arglist__11696){
var x = cljs.core.first(arglist__11696);
arglist__11696 = cljs.core.next(arglist__11696);
var y = cljs.core.first(arglist__11696);
var more = cljs.core.rest(arglist__11696);
return G__11695__delegate(x,y,more);
});
G__11695.cljs$core$IFn$_invoke$arity$variadic = G__11695__delegate;
return G__11695;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__11701__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__11701 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11701__delegate.call(this,x,y,more);};
G__11701.cljs$lang$maxFixedArity = 2;
G__11701.cljs$lang$applyTo = (function (arglist__11702){
var x = cljs.core.first(arglist__11702);
arglist__11702 = cljs.core.next(arglist__11702);
var y = cljs.core.first(arglist__11702);
var more = cljs.core.rest(arglist__11702);
return G__11701__delegate(x,y,more);
});
G__11701.cljs$core$IFn$_invoke$arity$variadic = G__11701__delegate;
return G__11701;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__11703__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next(more)){
var G__11704 = y;
var G__11705 = cljs.core.first(more);
var G__11706 = cljs.core.next(more);
x = G__11704;
y = G__11705;
more = G__11706;
continue;
} else {
return (y < cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11703 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11703__delegate.call(this,x,y,more);};
G__11703.cljs$lang$maxFixedArity = 2;
G__11703.cljs$lang$applyTo = (function (arglist__11707){
var x = cljs.core.first(arglist__11707);
arglist__11707 = cljs.core.next(arglist__11707);
var y = cljs.core.first(arglist__11707);
var more = cljs.core.rest(arglist__11707);
return G__11703__delegate(x,y,more);
});
G__11703.cljs$core$IFn$_invoke$arity$variadic = G__11703__delegate;
return G__11703;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__11708__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next(more)){
var G__11709 = y;
var G__11710 = cljs.core.first(more);
var G__11711 = cljs.core.next(more);
x = G__11709;
y = G__11710;
more = G__11711;
continue;
} else {
return (y <= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11708 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11708__delegate.call(this,x,y,more);};
G__11708.cljs$lang$maxFixedArity = 2;
G__11708.cljs$lang$applyTo = (function (arglist__11712){
var x = cljs.core.first(arglist__11712);
arglist__11712 = cljs.core.next(arglist__11712);
var y = cljs.core.first(arglist__11712);
var more = cljs.core.rest(arglist__11712);
return G__11708__delegate(x,y,more);
});
G__11708.cljs$core$IFn$_invoke$arity$variadic = G__11708__delegate;
return G__11708;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__11713__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next(more)){
var G__11714 = y;
var G__11715 = cljs.core.first(more);
var G__11716 = cljs.core.next(more);
x = G__11714;
y = G__11715;
more = G__11716;
continue;
} else {
return (y > cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11713 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11713__delegate.call(this,x,y,more);};
G__11713.cljs$lang$maxFixedArity = 2;
G__11713.cljs$lang$applyTo = (function (arglist__11717){
var x = cljs.core.first(arglist__11717);
arglist__11717 = cljs.core.next(arglist__11717);
var y = cljs.core.first(arglist__11717);
var more = cljs.core.rest(arglist__11717);
return G__11713__delegate(x,y,more);
});
G__11713.cljs$core$IFn$_invoke$arity$variadic = G__11713__delegate;
return G__11713;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__11718__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next(more)){
var G__11719 = y;
var G__11720 = cljs.core.first(more);
var G__11721 = cljs.core.next(more);
x = G__11719;
y = G__11720;
more = G__11721;
continue;
} else {
return (y >= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11718 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11718__delegate.call(this,x,y,more);};
G__11718.cljs$lang$maxFixedArity = 2;
G__11718.cljs$lang$applyTo = (function (arglist__11722){
var x = cljs.core.first(arglist__11722);
arglist__11722 = cljs.core.next(arglist__11722);
var y = cljs.core.first(arglist__11722);
var more = cljs.core.rest(arglist__11722);
return G__11718__delegate(x,y,more);
});
G__11718.cljs$core$IFn$_invoke$arity$variadic = G__11718__delegate;
return G__11718;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
var x__3945__auto__ = x;
var y__3946__auto__ = y;
return ((x__3945__auto__ > y__3946__auto__) ? x__3945__auto__ : y__3946__auto__);
});
var max__3 = (function() { 
var G__11723__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3945__auto__ = x;
var y__3946__auto__ = y;
return ((x__3945__auto__ > y__3946__auto__) ? x__3945__auto__ : y__3946__auto__);
})(),more);
};
var G__11723 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11723__delegate.call(this,x,y,more);};
G__11723.cljs$lang$maxFixedArity = 2;
G__11723.cljs$lang$applyTo = (function (arglist__11724){
var x = cljs.core.first(arglist__11724);
arglist__11724 = cljs.core.next(arglist__11724);
var y = cljs.core.first(arglist__11724);
var more = cljs.core.rest(arglist__11724);
return G__11723__delegate(x,y,more);
});
G__11723.cljs$core$IFn$_invoke$arity$variadic = G__11723__delegate;
return G__11723;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
var x__3952__auto__ = x;
var y__3953__auto__ = y;
return ((x__3952__auto__ < y__3953__auto__) ? x__3952__auto__ : y__3953__auto__);
});
var min__3 = (function() { 
var G__11725__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3952__auto__ = x;
var y__3953__auto__ = y;
return ((x__3952__auto__ < y__3953__auto__) ? x__3952__auto__ : y__3953__auto__);
})(),more);
};
var G__11725 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11725__delegate.call(this,x,y,more);};
G__11725.cljs$lang$maxFixedArity = 2;
G__11725.cljs$lang$applyTo = (function (arglist__11726){
var x = cljs.core.first(arglist__11726);
arglist__11726 = cljs.core.next(arglist__11726);
var y = cljs.core.first(arglist__11726);
var more = cljs.core.rest(arglist__11726);
return G__11725__delegate(x,y,more);
});
G__11725.cljs$core$IFn$_invoke$arity$variadic = G__11725__delegate;
return G__11725;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){
return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){
if(typeof x === 'number'){
return String.fromCharCode(x);
} else {
if((typeof x === 'string') && ((x.length === (1)))){
return x;
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){
return x;
});
cljs.core.float$ = (function float$(x){
return x;
});
cljs.core.double$ = (function double$(x){
return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){
return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){
return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){
return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){
return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){
return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){
return (0);
});
var unchecked_add__1 = (function (x){
return x;
});
var unchecked_add__2 = (function (x,y){
return (x + y);
});
var unchecked_add__3 = (function() { 
var G__11727__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__11727 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11727__delegate.call(this,x,y,more);};
G__11727.cljs$lang$maxFixedArity = 2;
G__11727.cljs$lang$applyTo = (function (arglist__11728){
var x = cljs.core.first(arglist__11728);
arglist__11728 = cljs.core.next(arglist__11728);
var y = cljs.core.first(arglist__11728);
var more = cljs.core.rest(arglist__11728);
return G__11727__delegate(x,y,more);
});
G__11727.cljs$core$IFn$_invoke$arity$variadic = G__11727__delegate;
return G__11727;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){
return (0);
});
var unchecked_add_int__1 = (function (x){
return x;
});
var unchecked_add_int__2 = (function (x,y){
return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__11729__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__11729 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11729__delegate.call(this,x,y,more);};
G__11729.cljs$lang$maxFixedArity = 2;
G__11729.cljs$lang$applyTo = (function (arglist__11730){
var x = cljs.core.first(arglist__11730);
arglist__11730 = cljs.core.next(arglist__11730);
var y = cljs.core.first(arglist__11730);
var more = cljs.core.rest(arglist__11730);
return G__11729__delegate(x,y,more);
});
G__11729.cljs$core$IFn$_invoke$arity$variadic = G__11729__delegate;
return G__11729;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){
return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){
return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){
return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){
return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__11735__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__11735 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11735__delegate.call(this,x,y,more);};
G__11735.cljs$lang$maxFixedArity = 2;
G__11735.cljs$lang$applyTo = (function (arglist__11736){
var x = cljs.core.first(arglist__11736);
arglist__11736 = cljs.core.next(arglist__11736);
var y = cljs.core.first(arglist__11736);
var more = cljs.core.rest(arglist__11736);
return G__11735__delegate(x,y,more);
});
G__11735.cljs$core$IFn$_invoke$arity$variadic = G__11735__delegate;
return G__11735;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){
return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){
return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){
return (1);
});
var unchecked_multiply__1 = (function (x){
return x;
});
var unchecked_multiply__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__11737__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__11737 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11737__delegate.call(this,x,y,more);};
G__11737.cljs$lang$maxFixedArity = 2;
G__11737.cljs$lang$applyTo = (function (arglist__11738){
var x = cljs.core.first(arglist__11738);
arglist__11738 = cljs.core.next(arglist__11738);
var y = cljs.core.first(arglist__11738);
var more = cljs.core.rest(arglist__11738);
return G__11737__delegate(x,y,more);
});
G__11737.cljs$core$IFn$_invoke$arity$variadic = G__11737__delegate;
return G__11737;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){
return (1);
});
var unchecked_multiply_int__1 = (function (x){
return x;
});
var unchecked_multiply_int__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__11739__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__11739 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11739__delegate.call(this,x,y,more);};
G__11739.cljs$lang$maxFixedArity = 2;
G__11739.cljs$lang$applyTo = (function (arglist__11740){
var x = cljs.core.first(arglist__11740);
arglist__11740 = cljs.core.next(arglist__11740);
var y = cljs.core.first(arglist__11740);
var more = cljs.core.rest(arglist__11740);
return G__11739__delegate(x,y,more);
});
G__11739.cljs$core$IFn$_invoke$arity$variadic = G__11739__delegate;
return G__11739;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){
return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){
return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){
var G__11743 = x;
var G__11744 = n;
return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__11743,G__11744) : cljs.core.mod.call(null,G__11743,G__11744));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){
return (- x);
});
var unchecked_subtract__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__11745__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__11745 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11745__delegate.call(this,x,y,more);};
G__11745.cljs$lang$maxFixedArity = 2;
G__11745.cljs$lang$applyTo = (function (arglist__11746){
var x = cljs.core.first(arglist__11746);
arglist__11746 = cljs.core.next(arglist__11746);
var y = cljs.core.first(arglist__11746);
var more = cljs.core.rest(arglist__11746);
return G__11745__delegate(x,y,more);
});
G__11745.cljs$core$IFn$_invoke$arity$variadic = G__11745__delegate;
return G__11745;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){
return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__11747__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__11747 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11747__delegate.call(this,x,y,more);};
G__11747.cljs$lang$maxFixedArity = 2;
G__11747.cljs$lang$applyTo = (function (arglist__11748){
var x = cljs.core.first(arglist__11748);
arglist__11748 = cljs.core.next(arglist__11748);
var y = cljs.core.first(arglist__11748);
var more = cljs.core.rest(arglist__11748);
return G__11747__delegate(x,y,more);
});
G__11747.cljs$core$IFn$_invoke$arity$variadic = G__11747__delegate;
return G__11747;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){
if((q >= (0))){
var G__11751 = q;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__11751) : Math.floor.call(null,G__11751));
} else {
var G__11752 = q;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__11752) : Math.ceil.call(null,G__11752));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){
return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){
return x;
});
cljs.core.bytes = (function bytes(x){
return x;
});
cljs.core.chars = (function chars(x){
return x;
});
cljs.core.shorts = (function shorts(x){
return x;
});
cljs.core.ints = (function ints(x){
return x;
});
cljs.core.floats = (function floats(x){
return x;
});
cljs.core.doubles = (function doubles(x){
return x;
});
cljs.core.longs = (function longs(x){
return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot(n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> (1)) & (1431655765)));
var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));
return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__11757__delegate = function (x,y,more){
while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__11758 = y;
var G__11759 = cljs.core.first(more);
var G__11760 = cljs.core.next(more);
x = G__11758;
y = G__11759;
more = G__11760;
continue;
} else {
return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11757 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11757__delegate.call(this,x,y,more);};
G__11757.cljs$lang$maxFixedArity = 2;
G__11757.cljs$lang$applyTo = (function (arglist__11761){
var x = cljs.core.first(arglist__11761);
arglist__11761 = cljs.core.next(arglist__11761);
var y = cljs.core.first(arglist__11761);
var more = cljs.core.rest(arglist__11761);
return G__11757__delegate(x,y,more);
});
G__11757.cljs$core$IFn$_invoke$arity$variadic = G__11757__delegate;
return G__11757;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq(coll);
while(true){
if((xs) && ((n__$1 > (0)))){
var G__11762 = (n__$1 - (1));
var G__11763 = cljs.core.next(xs);
n__$1 = G__11762;
xs = G__11763;
continue;
} else {
return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if((x == null)){
return "";
} else {
var G__11767 = x;
return goog.string.buildString(G__11767);
}
});
var str__2 = (function() { 
var G__11768__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__11769 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__11770 = cljs.core.next(more);
sb = G__11769;
more = G__11770;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__11768 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11768__delegate.call(this,x,ys);};
G__11768.cljs$lang$maxFixedArity = 1;
G__11768.cljs$lang$applyTo = (function (arglist__11771){
var x = cljs.core.first(arglist__11771);
var ys = cljs.core.rest(arglist__11771);
return G__11768__delegate(x,ys);
});
G__11768.cljs$core$IFn$_invoke$arity$variadic = G__11768__delegate;
return G__11768;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;

/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__11772 = cljs.core.next(xs);
var G__11773 = cljs.core.next(ys);
xs = G__11772;
ys = G__11773;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){
if(cljs.core.seq(coll)){
var res = cljs.core.hash(cljs.core.first(coll));
var s = cljs.core.next(coll);
while(true){
if((s == null)){
return res;
} else {
var G__11774 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__11775 = cljs.core.next(s);
res = G__11774;
s = G__11775;
continue;
}
break;
}
} else {
return (0);
}
});

cljs.core.hash_imap = (function hash_imap(m){
var h = (0);
var s = cljs.core.seq(m);
while(true){
if(s){
var e = cljs.core.first(s);
var G__11780 = ((h + (cljs.core.hash((function (){var G__11778 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__11778) : cljs.core.key.call(null,G__11778));
})()) ^ cljs.core.hash((function (){var G__11779 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__11779) : cljs.core.val.call(null,G__11779));
})()))) % (4503599627370496));
var G__11781 = cljs.core.next(s);
h = G__11780;
s = G__11781;
continue;
} else {
return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = (0);
var s__$1 = cljs.core.seq(s);
while(true){
if(s__$1){
var e = cljs.core.first(s__$1);
var G__11782 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__11783 = cljs.core.next(s__$1);
h = G__11782;
s__$1 = G__11783;
continue;
} else {
return h;
}
break;
}
});


/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var seq__11794_11804 = cljs.core.seq(fn_map);
var chunk__11795_11805 = null;
var count__11796_11806 = (0);
var i__11797_11807 = (0);
while(true){
if((i__11797_11807 < count__11796_11806)){
var vec__11798_11808 = chunk__11795_11805.cljs$core$IIndexed$_nth$arity$2(null,i__11797_11807);
var key_name_11809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798_11808,(0),null);
var f_11810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798_11808,(1),null);
var str_name_11811 = (function (){var G__11799 = key_name_11809;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__11799) : cljs.core.name.call(null,G__11799));
})();
(obj[str_name_11811] = f_11810);

var G__11812 = seq__11794_11804;
var G__11813 = chunk__11795_11805;
var G__11814 = count__11796_11806;
var G__11815 = (i__11797_11807 + (1));
seq__11794_11804 = G__11812;
chunk__11795_11805 = G__11813;
count__11796_11806 = G__11814;
i__11797_11807 = G__11815;
continue;
} else {
var temp__4126__auto___11816 = cljs.core.seq(seq__11794_11804);
if(temp__4126__auto___11816){
var seq__11794_11817__$1 = temp__4126__auto___11816;
if(cljs.core.chunked_seq_QMARK_(seq__11794_11817__$1)){
var c__4415__auto___11818 = (function (){var G__11800 = seq__11794_11817__$1;
return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__11800) : cljs.core.chunk_first.call(null,G__11800));
})();
var G__11819 = (function (){var G__11801 = seq__11794_11817__$1;
return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__11801) : cljs.core.chunk_rest.call(null,G__11801));
})();
var G__11820 = c__4415__auto___11818;
var G__11821 = cljs.core.count(c__4415__auto___11818);
var G__11822 = (0);
seq__11794_11804 = G__11819;
chunk__11795_11805 = G__11820;
count__11796_11806 = G__11821;
i__11797_11807 = G__11822;
continue;
} else {
var vec__11802_11823 = cljs.core.first(seq__11794_11817__$1);
var key_name_11824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11802_11823,(0),null);
var f_11825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11802_11823,(1),null);
var str_name_11826 = (function (){var G__11803 = key_name_11824;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__11803) : cljs.core.name.call(null,G__11803));
})();
(obj[str_name_11826] = f_11825);

var G__11827 = cljs.core.next(seq__11794_11817__$1);
var G__11828 = null;
var G__11829 = (0);
var G__11830 = (0);
seq__11794_11804 = G__11827;
chunk__11795_11805 = G__11828;
count__11796_11806 = G__11829;
i__11797_11807 = G__11830;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.List.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return null;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._rest(coll__$1);
});

cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});

cljs.core.List.cljs$lang$type = true;

cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.EmptyList.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.EmptyList(self__.meta));
});

cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
throw (new Error("Can't pop empty list"));
});

cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.EmptyList(meta__$1));
});

cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,null,(1),null));
});

cljs.core.EmptyList.cljs$lang$type = true;

cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__11832 = coll;
if(G__11832){
var bit__4309__auto__ = (G__11832.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__4309__auto__) || (G__11832.cljs$core$IReversible$)){
return true;
} else {
if((!G__11832.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__11832);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__11832);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll)){
return cljs.core.rseq(coll);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){
var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];
var xs__$1 = xs;
while(true){
if(!((xs__$1 == null))){
arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));

var G__11833 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__11833;
continue;
} else {
return arr;
}
break;
}
})());
var i = arr.length;
var r = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__11834 = (i - (1));
var G__11835 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__11834;
r = G__11835;
continue;
} else {
return r;
}
break;
}
};
var list = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__11836){
var xs = cljs.core.seq(arglist__11836);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Cons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return null;
} else {
return cljs.core.seq(self__.rest);
}
});

cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});

cljs.core.Cons.cljs$lang$type = true;

cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3628__auto__ = (coll == null);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var G__11840 = coll;
if(G__11840){
var bit__4302__auto__ = (G__11840.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4302__auto__) || (G__11840.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return (new cljs.core.Cons(null,x,coll,null));
} else {
return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__11842 = x;
if(G__11842){
var bit__4309__auto__ = (G__11842.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__4309__auto__) || (G__11842.cljs$core$IList$)){
return true;
} else {
if((!G__11842.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__11842);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__11842);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){
return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});
cljs.core.compare_keywords = (function compare_keywords(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3616__auto__ = cljs.core.not(a.ns);
if(and__3616__auto__){
return b.ns;
} else {
return and__3616__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__11849 = a.ns;
var G__11850 = b.ns;
return goog.array.defaultCompare(G__11849,G__11850);
})();
if(((0) === nsc)){
var G__11851 = a.name;
var G__11852 = b.name;
return goog.array.defaultCompare(G__11851,G__11852);
} else {
return nsc;
}
}
} else {
var G__11853 = a.name;
var G__11854 = b.name;
return goog.array.defaultCompare(G__11853,G__11854);

}
}
}
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});

cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4049__auto__ = self__._hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_keyword(this$__$1);
self__._hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__11856 = null;
var G__11856__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__11856__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__11856 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__11856__2.call(this,self__,coll);
case 3:
return G__11856__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11856.cljs$core$IFn$_invoke$arity$2 = G__11856__2;
G__11856.cljs$core$IFn$_invoke$arity$3 = G__11856__3;
return G__11856;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args11855){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11855)));
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});

cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Keyword)){
return (self__.fqn === other.fqn);
} else {
return false;
}
});

cljs.core.Keyword.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});

cljs.core.Keyword.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Keyword.cljs$lang$type = true;

cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Keyword");
});

cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){
return (new cljs.core.Keyword(ns,name,fqn,_hash));
});

cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var G__11858 = x;
if(G__11858){
var bit__4302__auto__ = (G__11858.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4302__auto__) || (G__11858.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(null);
} else {
throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if((name instanceof cljs.core.Symbol)){
return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__11860 = name;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__11860) : cljs.core.name.call(null,G__11860));
})(),name.str,null));
} else {
if(typeof name === 'string'){
var parts = name.split("/");
if((parts.length === (2))){
return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else {
return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else {
return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.LazySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.LazySeq.prototype.sval = (function (){
var self__ = this;
var coll = this;
if((self__.fn == null)){
return self__.s;
} else {
self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();

self__.fn = null;

return self__.s;
}
});

cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.next(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if(!((self__.s == null))){
return cljs.core.rest(self__.s);
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
coll__$1.sval();

if((self__.s == null)){
return null;
} else {
var ls = self__.s;
while(true){
if((ls instanceof cljs.core.LazySeq)){
var G__11861 = ls.sval();
ls = G__11861;
continue;
} else {
self__.s = ls;

return cljs.core.seq(self__.s);
}
break;
}
}
});

cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});

cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.LazySeq.cljs$lang$type = true;

cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.end;
});

cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);

return self__.end = (self__.end + (1));
});

cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));
self__.buf = null;

return ret;
});

cljs.core.ChunkBuffer.cljs$lang$type = true;

cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ChunkBuffer");
});

cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){
return (new cljs.core.ChunkBuffer(buf,end));
});

cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.arr[(self__.off + i)]);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
var coll__$1 = this;
if(((i >= (0))) && ((i < (self__.end - self__.off)))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

cljs.core.ArrayChunk.cljs$lang$type = true;

cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ArrayChunk");
});

cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});

cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){
return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedCons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
var more__$1 = cljs.core._seq(self__.more);
if((more__$1 == null)){
return null;
} else {
return more__$1;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.chunk;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});

cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,this$__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return null;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.cljs$lang$type = true;

cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === (0))){
return rest;
} else {
return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__11863 = s;
if(G__11863){
var bit__4302__auto__ = (G__11863.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__4302__auto__) || (G__11863.cljs$core$IChunkedNext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._chunked_next(s);
} else {
return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq(s__$1)){
ary.push(cljs.core.first(s__$1));

var G__11864 = cljs.core.next(s__$1);
s__$1 = G__11864;
continue;
} else {
return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = (new Array(cljs.core.count(coll)));
var i_11865 = (0);
var xs_11866 = cljs.core.seq(coll);
while(true){
if(xs_11866){
(ret[i_11865] = cljs.core.to_array(cljs.core.first(xs_11866)));

var G__11867 = (i_11865 + (1));
var G__11868 = cljs.core.next(xs_11866);
i_11865 = G__11867;
xs_11866 = G__11868;
continue;
} else {
}
break;
}

return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__11871 = (i + (1));
var G__11872 = cljs.core.next(s__$1);
i = G__11871;
s__$1 = G__11872;
continue;
} else {
return a;
}
break;
}
} else {
var n__4515__auto___11873 = size;
var i_11874 = (0);
while(true){
if((i_11874 < n__4515__auto___11873)){
(a[i_11874] = init_val_or_seq);

var G__11875 = (i_11874 + (1));
i_11874 = G__11875;
continue;
} else {
}
break;
}

return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__11878 = (i + (1));
var G__11879 = cljs.core.next(s__$1);
i = G__11878;
s__$1 = G__11879;
continue;
} else {
return a;
}
break;
}
} else {
var n__4515__auto___11880 = size;
var i_11881 = (0);
while(true){
if((i_11881 < n__4515__auto___11880)){
(a[i_11881] = init_val_or_seq);

var G__11882 = (i_11881 + (1));
i_11881 = G__11882;
continue;
} else {
}
break;
}

return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__11885 = (i + (1));
var G__11886 = cljs.core.next(s__$1);
i = G__11885;
s__$1 = G__11886;
continue;
} else {
return a;
}
break;
}
} else {
var n__4515__auto___11887 = size;
var i_11888 = (0);
while(true){
if((i_11888 < n__4515__auto___11887)){
(a[i_11888] = init_val_or_seq);

var G__11889 = (i_11888 + (1));
i_11888 = G__11889;
continue;
} else {
}
break;
}

return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__11892 = (i + (1));
var G__11893 = cljs.core.next(s__$1);
i = G__11892;
s__$1 = G__11893;
continue;
} else {
return a;
}
break;
}
} else {
var n__4515__auto___11894 = size;
var i_11895 = (0);
while(true){
if((i_11895 < n__4515__auto___11894)){
(a[i_11895] = init_val_or_seq);

var G__11896 = (i_11895 + (1));
i_11895 = G__11896;
continue;
} else {
}
break;
}

return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s)){
return cljs.core.count(s);
} else {
var s__$1 = s;
var i = n;
var sum = (0);
while(true){
if(((i > (0))) && (cljs.core.seq(s__$1))){
var G__11897 = cljs.core.next(s__$1);
var G__11898 = (i - (1));
var G__11899 = (sum + (1));
s__$1 = G__11897;
i = G__11898;
sum = G__11899;
continue;
} else {
return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null)){
return null;
} else {
if((cljs.core.next(arglist) == null)){
return cljs.core.seq(cljs.core.first(arglist));
} else {
return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,(function (){
return null;
}),null,null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return x;
}),null,null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.seq(x);
if(s){
if(cljs.core.chunked_seq_QMARK_(s)){
return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else {
return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else {
return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__11919__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,(function (){
var xys__$1 = cljs.core.seq(xys);
if(xys__$1){
if(cljs.core.chunked_seq_QMARK_(xys__$1)){
return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else {
return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else {
if(cljs.core.truth_(zs__$1)){
return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__11919 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11919__delegate.call(this,x,y,zs);};
G__11919.cljs$lang$maxFixedArity = 2;
G__11919.cljs$lang$applyTo = (function (arglist__11920){
var x = cljs.core.first(arglist__11920);
arglist__11920 = cljs.core.next(arglist__11920);
var y = cljs.core.first(arglist__11920);
var zs = cljs.core.rest(arglist__11920);
return G__11919__delegate(x,y,zs);
});
G__11919.cljs$core$IFn$_invoke$arity$variadic = G__11919__delegate;
return G__11919;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__11921__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__11921 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11921__delegate.call(this,a,b,c,d,more);};
G__11921.cljs$lang$maxFixedArity = 4;
G__11921.cljs$lang$applyTo = (function (arglist__11922){
var a = cljs.core.first(arglist__11922);
arglist__11922 = cljs.core.next(arglist__11922);
var b = cljs.core.first(arglist__11922);
arglist__11922 = cljs.core.next(arglist__11922);
var c = cljs.core.first(arglist__11922);
arglist__11922 = cljs.core.next(arglist__11922);
var d = cljs.core.first(arglist__11922);
var more = cljs.core.rest(arglist__11922);
return G__11921__delegate(a,b,c,d,more);
});
G__11921.cljs$core$IFn$_invoke$arity$variadic = G__11921__delegate;
return G__11921;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){
return coll;
});
var conj_BANG___2 = (function (tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__11923__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__11924 = ntcoll;
var G__11925 = cljs.core.first(vals);
var G__11926 = cljs.core.next(vals);
tcoll = G__11924;
val = G__11925;
vals = G__11926;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__11923 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11923__delegate.call(this,tcoll,val,vals);};
G__11923.cljs$lang$maxFixedArity = 2;
G__11923.cljs$lang$applyTo = (function (arglist__11927){
var tcoll = cljs.core.first(arglist__11927);
arglist__11927 = cljs.core.next(arglist__11927);
var val = cljs.core.first(arglist__11927);
var vals = cljs.core.rest(arglist__11927);
return G__11923__delegate(tcoll,val,vals);
});
G__11923.cljs$core$IFn$_invoke$arity$variadic = G__11923__delegate;
return G__11923;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__11928__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__11929 = ntcoll;
var G__11930 = cljs.core.first(kvs);
var G__11931 = cljs.core.second(kvs);
var G__11932 = cljs.core.nnext(kvs);
tcoll = G__11929;
key = G__11930;
val = G__11931;
kvs = G__11932;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__11928 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11928__delegate.call(this,tcoll,key,val,kvs);};
G__11928.cljs$lang$maxFixedArity = 3;
G__11928.cljs$lang$applyTo = (function (arglist__11933){
var tcoll = cljs.core.first(arglist__11933);
arglist__11933 = cljs.core.next(arglist__11933);
var key = cljs.core.first(arglist__11933);
arglist__11933 = cljs.core.next(arglist__11933);
var val = cljs.core.first(arglist__11933);
var kvs = cljs.core.rest(arglist__11933);
return G__11928__delegate(tcoll,key,val,kvs);
});
G__11928.cljs$core$IFn$_invoke$arity$variadic = G__11928__delegate;
return G__11928;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__11934__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);
if(cljs.core.truth_(ks)){
var G__11935 = ntcoll;
var G__11936 = cljs.core.first(ks);
var G__11937 = cljs.core.next(ks);
tcoll = G__11935;
key = G__11936;
ks = G__11937;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__11934 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11934__delegate.call(this,tcoll,key,ks);};
G__11934.cljs$lang$maxFixedArity = 2;
G__11934.cljs$lang$applyTo = (function (arglist__11938){
var tcoll = cljs.core.first(arglist__11938);
arglist__11938 = cljs.core.next(arglist__11938);
var key = cljs.core.first(arglist__11938);
var ks = cljs.core.rest(arglist__11938);
return G__11934__delegate(tcoll,key,ks);
});
G__11934.cljs$core$IFn$_invoke$arity$variadic = G__11934__delegate;
return G__11934;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__11939__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__11940 = ntcoll;
var G__11941 = cljs.core.first(vals);
var G__11942 = cljs.core.next(vals);
tcoll = G__11940;
val = G__11941;
vals = G__11942;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__11939 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11939__delegate.call(this,tcoll,val,vals);};
G__11939.cljs$lang$maxFixedArity = 2;
G__11939.cljs$lang$applyTo = (function (arglist__11943){
var tcoll = cljs.core.first(arglist__11943);
arglist__11943 = cljs.core.next(arglist__11943);
var val = cljs.core.first(arglist__11943);
var vals = cljs.core.rest(arglist__11943);
return G__11939__delegate(tcoll,val,vals);
});
G__11939.cljs$core$IFn$_invoke$arity$variadic = G__11939__delegate;
return G__11939;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;

cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq(args);
if((argc === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var a4559 = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a4559);
} else {
var G__12154 = a4559;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12154) : f.call(null,G__12154));
}
} else {
var b4560 = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a4559,b4560);
} else {
var G__12155 = a4559;
var G__12156 = b4560;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12155,G__12156) : f.call(null,G__12155,G__12156));
}
} else {
var c4561 = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a4559,b4560,c4561);
} else {
var G__12157 = a4559;
var G__12158 = b4560;
var G__12159 = c4561;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12157,G__12158,G__12159) : f.call(null,G__12157,G__12158,G__12159));
}
} else {
var d4562 = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a4559,b4560,c4561,d4562);
} else {
var G__12160 = a4559;
var G__12161 = b4560;
var G__12162 = c4561;
var G__12163 = d4562;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12160,G__12161,G__12162,G__12163) : f.call(null,G__12160,G__12161,G__12162,G__12163));
}
} else {
var e4563 = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a4559,b4560,c4561,d4562,e4563);
} else {
var G__12164 = a4559;
var G__12165 = b4560;
var G__12166 = c4561;
var G__12167 = d4562;
var G__12168 = e4563;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__12164,G__12165,G__12166,G__12167,G__12168) : f.call(null,G__12164,G__12165,G__12166,G__12167,G__12168));
}
} else {
var f4564 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a4559,b4560,c4561,d4562,e4563,f4564);
} else {
var G__12169 = a4559;
var G__12170 = b4560;
var G__12171 = c4561;
var G__12172 = d4562;
var G__12173 = e4563;
var G__12174 = f4564;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__12169,G__12170,G__12171,G__12172,G__12173,G__12174) : f.call(null,G__12169,G__12170,G__12171,G__12172,G__12173,G__12174));
}
} else {
var g4565 = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a4559,b4560,c4561,d4562,e4563,f4564,g4565);
} else {
var G__12175 = a4559;
var G__12176 = b4560;
var G__12177 = c4561;
var G__12178 = d4562;
var G__12179 = e4563;
var G__12180 = f4564;
var G__12181 = g4565;
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__12175,G__12176,G__12177,G__12178,G__12179,G__12180,G__12181) : f.call(null,G__12175,G__12176,G__12177,G__12178,G__12179,G__12180,G__12181));
}
} else {
var h4566 = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566);
} else {
var G__12182 = a4559;
var G__12183 = b4560;
var G__12184 = c4561;
var G__12185 = d4562;
var G__12186 = e4563;
var G__12187 = f4564;
var G__12188 = g4565;
var G__12189 = h4566;
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__12182,G__12183,G__12184,G__12185,G__12186,G__12187,G__12188,G__12189) : f.call(null,G__12182,G__12183,G__12184,G__12185,G__12186,G__12187,G__12188,G__12189));
}
} else {
var i4567 = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567);
} else {
var G__12190 = a4559;
var G__12191 = b4560;
var G__12192 = c4561;
var G__12193 = d4562;
var G__12194 = e4563;
var G__12195 = f4564;
var G__12196 = g4565;
var G__12197 = h4566;
var G__12198 = i4567;
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__12190,G__12191,G__12192,G__12193,G__12194,G__12195,G__12196,G__12197,G__12198) : f.call(null,G__12190,G__12191,G__12192,G__12193,G__12194,G__12195,G__12196,G__12197,G__12198));
}
} else {
var j4568 = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568);
} else {
var G__12199 = a4559;
var G__12200 = b4560;
var G__12201 = c4561;
var G__12202 = d4562;
var G__12203 = e4563;
var G__12204 = f4564;
var G__12205 = g4565;
var G__12206 = h4566;
var G__12207 = i4567;
var G__12208 = j4568;
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__12199,G__12200,G__12201,G__12202,G__12203,G__12204,G__12205,G__12206,G__12207,G__12208) : f.call(null,G__12199,G__12200,G__12201,G__12202,G__12203,G__12204,G__12205,G__12206,G__12207,G__12208));
}
} else {
var k4569 = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569);
} else {
var G__12209 = a4559;
var G__12210 = b4560;
var G__12211 = c4561;
var G__12212 = d4562;
var G__12213 = e4563;
var G__12214 = f4564;
var G__12215 = g4565;
var G__12216 = h4566;
var G__12217 = i4567;
var G__12218 = j4568;
var G__12219 = k4569;
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__12209,G__12210,G__12211,G__12212,G__12213,G__12214,G__12215,G__12216,G__12217,G__12218,G__12219) : f.call(null,G__12209,G__12210,G__12211,G__12212,G__12213,G__12214,G__12215,G__12216,G__12217,G__12218,G__12219));
}
} else {
var l4570 = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570);
} else {
var G__12220 = a4559;
var G__12221 = b4560;
var G__12222 = c4561;
var G__12223 = d4562;
var G__12224 = e4563;
var G__12225 = f4564;
var G__12226 = g4565;
var G__12227 = h4566;
var G__12228 = i4567;
var G__12229 = j4568;
var G__12230 = k4569;
var G__12231 = l4570;
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__12220,G__12221,G__12222,G__12223,G__12224,G__12225,G__12226,G__12227,G__12228,G__12229,G__12230,G__12231) : f.call(null,G__12220,G__12221,G__12222,G__12223,G__12224,G__12225,G__12226,G__12227,G__12228,G__12229,G__12230,G__12231));
}
} else {
var m4571 = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570,m4571);
} else {
var G__12232 = a4559;
var G__12233 = b4560;
var G__12234 = c4561;
var G__12235 = d4562;
var G__12236 = e4563;
var G__12237 = f4564;
var G__12238 = g4565;
var G__12239 = h4566;
var G__12240 = i4567;
var G__12241 = j4568;
var G__12242 = k4569;
var G__12243 = l4570;
var G__12244 = m4571;
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__12232,G__12233,G__12234,G__12235,G__12236,G__12237,G__12238,G__12239,G__12240,G__12241,G__12242,G__12243,G__12244) : f.call(null,G__12232,G__12233,G__12234,G__12235,G__12236,G__12237,G__12238,G__12239,G__12240,G__12241,G__12242,G__12243,G__12244));
}
} else {
var n4572 = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570,m4571,n4572);
} else {
var G__12245 = a4559;
var G__12246 = b4560;
var G__12247 = c4561;
var G__12248 = d4562;
var G__12249 = e4563;
var G__12250 = f4564;
var G__12251 = g4565;
var G__12252 = h4566;
var G__12253 = i4567;
var G__12254 = j4568;
var G__12255 = k4569;
var G__12256 = l4570;
var G__12257 = m4571;
var G__12258 = n4572;
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__12245,G__12246,G__12247,G__12248,G__12249,G__12250,G__12251,G__12252,G__12253,G__12254,G__12255,G__12256,G__12257,G__12258) : f.call(null,G__12245,G__12246,G__12247,G__12248,G__12249,G__12250,G__12251,G__12252,G__12253,G__12254,G__12255,G__12256,G__12257,G__12258));
}
} else {
var o4573 = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570,m4571,n4572,o4573);
} else {
var G__12259 = a4559;
var G__12260 = b4560;
var G__12261 = c4561;
var G__12262 = d4562;
var G__12263 = e4563;
var G__12264 = f4564;
var G__12265 = g4565;
var G__12266 = h4566;
var G__12267 = i4567;
var G__12268 = j4568;
var G__12269 = k4569;
var G__12270 = l4570;
var G__12271 = m4571;
var G__12272 = n4572;
var G__12273 = o4573;
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__12259,G__12260,G__12261,G__12262,G__12263,G__12264,G__12265,G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273) : f.call(null,G__12259,G__12260,G__12261,G__12262,G__12263,G__12264,G__12265,G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273));
}
} else {
var p4574 = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570,m4571,n4572,o4573,p4574);
} else {
var G__12274 = a4559;
var G__12275 = b4560;
var G__12276 = c4561;
var G__12277 = d4562;
var G__12278 = e4563;
var G__12279 = f4564;
var G__12280 = g4565;
var G__12281 = h4566;
var G__12282 = i4567;
var G__12283 = j4568;
var G__12284 = k4569;
var G__12285 = l4570;
var G__12286 = m4571;
var G__12287 = n4572;
var G__12288 = o4573;
var G__12289 = p4574;
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__12274,G__12275,G__12276,G__12277,G__12278,G__12279,G__12280,G__12281,G__12282,G__12283,G__12284,G__12285,G__12286,G__12287,G__12288,G__12289) : f.call(null,G__12274,G__12275,G__12276,G__12277,G__12278,G__12279,G__12280,G__12281,G__12282,G__12283,G__12284,G__12285,G__12286,G__12287,G__12288,G__12289));
}
} else {
var q4575 = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570,m4571,n4572,o4573,p4574,q4575);
} else {
var G__12290 = a4559;
var G__12291 = b4560;
var G__12292 = c4561;
var G__12293 = d4562;
var G__12294 = e4563;
var G__12295 = f4564;
var G__12296 = g4565;
var G__12297 = h4566;
var G__12298 = i4567;
var G__12299 = j4568;
var G__12300 = k4569;
var G__12301 = l4570;
var G__12302 = m4571;
var G__12303 = n4572;
var G__12304 = o4573;
var G__12305 = p4574;
var G__12306 = q4575;
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__12290,G__12291,G__12292,G__12293,G__12294,G__12295,G__12296,G__12297,G__12298,G__12299,G__12300,G__12301,G__12302,G__12303,G__12304,G__12305,G__12306) : f.call(null,G__12290,G__12291,G__12292,G__12293,G__12294,G__12295,G__12296,G__12297,G__12298,G__12299,G__12300,G__12301,G__12302,G__12303,G__12304,G__12305,G__12306));
}
} else {
var r4576 = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570,m4571,n4572,o4573,p4574,q4575,r4576);
} else {
var G__12307 = a4559;
var G__12308 = b4560;
var G__12309 = c4561;
var G__12310 = d4562;
var G__12311 = e4563;
var G__12312 = f4564;
var G__12313 = g4565;
var G__12314 = h4566;
var G__12315 = i4567;
var G__12316 = j4568;
var G__12317 = k4569;
var G__12318 = l4570;
var G__12319 = m4571;
var G__12320 = n4572;
var G__12321 = o4573;
var G__12322 = p4574;
var G__12323 = q4575;
var G__12324 = r4576;
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__12307,G__12308,G__12309,G__12310,G__12311,G__12312,G__12313,G__12314,G__12315,G__12316,G__12317,G__12318,G__12319,G__12320,G__12321,G__12322,G__12323,G__12324) : f.call(null,G__12307,G__12308,G__12309,G__12310,G__12311,G__12312,G__12313,G__12314,G__12315,G__12316,G__12317,G__12318,G__12319,G__12320,G__12321,G__12322,G__12323,G__12324));
}
} else {
var s4577 = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570,m4571,n4572,o4573,p4574,q4575,r4576,s4577);
} else {
var G__12325 = a4559;
var G__12326 = b4560;
var G__12327 = c4561;
var G__12328 = d4562;
var G__12329 = e4563;
var G__12330 = f4564;
var G__12331 = g4565;
var G__12332 = h4566;
var G__12333 = i4567;
var G__12334 = j4568;
var G__12335 = k4569;
var G__12336 = l4570;
var G__12337 = m4571;
var G__12338 = n4572;
var G__12339 = o4573;
var G__12340 = p4574;
var G__12341 = q4575;
var G__12342 = r4576;
var G__12343 = s4577;
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__12325,G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338,G__12339,G__12340,G__12341,G__12342,G__12343) : f.call(null,G__12325,G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338,G__12339,G__12340,G__12341,G__12342,G__12343));
}
} else {
var t4578 = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a4559,b4560,c4561,d4562,e4563,f4564,g4565,h4566,i4567,j4568,k4569,l4570,m4571,n4572,o4573,p4574,q4575,r4576,s4577,t4578);
} else {
var G__12344 = a4559;
var G__12345 = b4560;
var G__12346 = c4561;
var G__12347 = d4562;
var G__12348 = e4563;
var G__12349 = f4564;
var G__12350 = g4565;
var G__12351 = h4566;
var G__12352 = i4567;
var G__12353 = j4568;
var G__12354 = k4569;
var G__12355 = l4570;
var G__12356 = m4571;
var G__12357 = n4572;
var G__12358 = o4573;
var G__12359 = p4574;
var G__12360 = q4575;
var G__12361 = r4576;
var G__12362 = s4577;
var G__12363 = t4578;
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__12344,G__12345,G__12346,G__12347,G__12348,G__12349,G__12350,G__12351,G__12352,G__12353,G__12354,G__12355,G__12356,G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363) : f.call(null,G__12344,G__12345,G__12346,G__12347,G__12348,G__12349,G__12350,G__12351,G__12352,G__12353,G__12354,G__12355,G__12356,G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363));
}
} else {
throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,args);
} else {
return f.cljs$lang$applyTo(args);
}
} else {
return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__12364__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__12364 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12364__delegate.call(this,f,a,b,c,d,args);};
G__12364.cljs$lang$maxFixedArity = 5;
G__12364.cljs$lang$applyTo = (function (arglist__12365){
var f = cljs.core.first(arglist__12365);
arglist__12365 = cljs.core.next(arglist__12365);
var a = cljs.core.first(arglist__12365);
arglist__12365 = cljs.core.next(arglist__12365);
var b = cljs.core.first(arglist__12365);
arglist__12365 = cljs.core.next(arglist__12365);
var c = cljs.core.first(arglist__12365);
arglist__12365 = cljs.core.next(arglist__12365);
var d = cljs.core.first(arglist__12365);
var args = cljs.core.rest(arglist__12365);
return G__12364__delegate(f,a,b,c,d,args);
});
G__12364.cljs$core$IFn$_invoke$arity$variadic = G__12364__delegate;
return G__12364;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){
return cljs.core.with_meta(obj,(function (){var G__12381 = cljs.core.meta(obj);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12381) : f.call(null,G__12381));
})());
});
var vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta(obj,(function (){var G__12382 = cljs.core.meta(obj);
var G__12383 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12382,G__12383) : f.call(null,G__12382,G__12383));
})());
});
var vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta(obj,(function (){var G__12384 = cljs.core.meta(obj);
var G__12385 = a;
var G__12386 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12384,G__12385,G__12386) : f.call(null,G__12384,G__12385,G__12386));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta(obj,(function (){var G__12387 = cljs.core.meta(obj);
var G__12388 = a;
var G__12389 = b;
var G__12390 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12387,G__12388,G__12389,G__12390) : f.call(null,G__12387,G__12388,G__12389,G__12390));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta(obj,(function (){var G__12391 = cljs.core.meta(obj);
var G__12392 = a;
var G__12393 = b;
var G__12394 = c;
var G__12395 = d;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__12391,G__12392,G__12393,G__12394,G__12395) : f.call(null,G__12391,G__12392,G__12393,G__12394,G__12395));
})());
});
var vary_meta__7 = (function() { 
var G__12396__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__12396 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__12396__delegate.call(this,obj,f,a,b,c,d,args);};
G__12396.cljs$lang$maxFixedArity = 6;
G__12396.cljs$lang$applyTo = (function (arglist__12397){
var obj = cljs.core.first(arglist__12397);
arglist__12397 = cljs.core.next(arglist__12397);
var f = cljs.core.first(arglist__12397);
arglist__12397 = cljs.core.next(arglist__12397);
var a = cljs.core.first(arglist__12397);
arglist__12397 = cljs.core.next(arglist__12397);
var b = cljs.core.first(arglist__12397);
arglist__12397 = cljs.core.next(arglist__12397);
var c = cljs.core.first(arglist__12397);
arglist__12397 = cljs.core.next(arglist__12397);
var d = cljs.core.first(arglist__12397);
var args = cljs.core.rest(arglist__12397);
return G__12396__delegate(obj,f,a,b,c,d,args);
});
G__12396.cljs$core$IFn$_invoke$arity$variadic = G__12396__delegate;
return G__12396;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__12398__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__12398 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12398__delegate.call(this,x,y,more);};
G__12398.cljs$lang$maxFixedArity = 2;
G__12398.cljs$lang$applyTo = (function (arglist__12399){
var x = cljs.core.first(arglist__12399);
arglist__12399 = cljs.core.next(arglist__12399);
var y = cljs.core.first(arglist__12399);
var more = cljs.core.rest(arglist__12399);
return G__12398__delegate(x,y,more);
});
G__12398.cljs$core$IFn$_invoke$arity$variadic = G__12398__delegate;
return G__12398;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll)){
return coll;
} else {
return null;
}
});
cljs.core.nil_iter = (function nil_iter(){
if(typeof cljs.core.t12403 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t12403 = (function (nil_iter,meta12404){
this.nil_iter = nil_iter;
this.meta12404 = meta12404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t12403.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t12403.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t12403.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t12403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12405){
var self__ = this;
var _12405__$1 = this;
return self__.meta12404;
});

cljs.core.t12403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12405,meta12404__$1){
var self__ = this;
var _12405__$1 = this;
return (new cljs.core.t12403(self__.nil_iter,meta12404__$1));
});

cljs.core.t12403.cljs$lang$type = true;

cljs.core.t12403.cljs$lang$ctorStr = "cljs.core/t12403";

cljs.core.t12403.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/t12403");
});

cljs.core.__GT_t12403 = (function __GT_t12403(nil_iter__$1,meta12404){
return (new cljs.core.t12403(nil_iter__$1,meta12404));
});

}

return (new cljs.core.t12403(nil_iter,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,54,cljs.core.constant$keyword$9,3007,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,3003,cljs.core.constant$keyword$12,"/Users/takashi/Desktop/vijion/html/js/prod/cljs/core.cljs"], null)));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.s.length);
});

cljs.core.StringIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.s.charAt(self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.StringIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.StringIter.cljs$lang$type = true;

cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/StringIter");
});

cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){
return (new cljs.core.StringIter(s,i));
});

cljs.core.string_iter = (function string_iter(x){
return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.ArrayIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.ArrayIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.ArrayIter.cljs$lang$type = true;

cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ArrayIter");
});

cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){
return (new cljs.core.ArrayIter(arr,i));
});

cljs.core.array_iter = (function array_iter(x){
return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__._seq === cljs.core.INIT)){
self__._seq = cljs.core.START;

self__._next = cljs.core.seq(self__._next);
} else {
if((self__._seq === self__._next)){
self__._next = cljs.core.next(self__._seq);
} else {
}
}

return !((self__._next == null));
});

cljs.core.SeqIter.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not(this$.hasNext())){
throw (new Error("No such element"));
} else {
self__._seq = self__._next;

return cljs.core.first(self__._next);
}
});

cljs.core.SeqIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.SeqIter.cljs$lang$type = true;

cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/SeqIter");
});

cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){
return (new cljs.core.SeqIter(_seq,_next));
});

cljs.core.seq_iter = (function seq_iter(coll){
return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){
if((coll == null)){
return cljs.core.nil_iter();
} else {
if(typeof coll === 'string'){
return cljs.core.string_iter(coll);
} else {
if(coll instanceof Array){
return cljs.core.array_iter(coll);
} else {
if(cljs.core.iterable_QMARK_(coll)){
return cljs.core._iterator(coll);
} else {
if(cljs.core.seqable_QMARK_(coll)){
return cljs.core.seq_iter(coll);
} else {
throw (new Error([cljs.core.str("Cannot create iterator from "),cljs.core.str(coll)].join('')));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){
return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3616__auto__ = !((lt.stepper == null));
if(and__3616__auto__){
return self__.iter.hasNext();
} else {
return and__3616__auto__;
}
})())){
if(cljs.core.reduced_QMARK_((function (){var G__12406 = lt;
var G__12407 = self__.iter.next();
return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__12406,G__12407) : self__.xform.call(null,G__12406,G__12407));
})())){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__12408 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__12408) : self__.xform.call(null,G__12408));
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Stepper");
});

cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){
return (new cljs.core.Stepper(xform,iter));
});

cljs.core.stepper = (function stepper(xform,iter){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return result;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__12410 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__12410) : xform.call(null,G__12410));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
var iters__$1 = cljs.core.seq(self__.iters);
while(true){
if(!((iters__$1 == null))){
var iter = cljs.core.first(iters__$1);
if(cljs.core.not(iter.hasNext())){
return false;
} else {
var G__12412 = cljs.core.next(iters__$1);
iters__$1 = G__12412;
continue;
}
} else {
return true;
}
break;
}
});

cljs.core.MultiStepper.prototype.next = (function (){
var self__ = this;
var _ = this;
var n__4515__auto___12413 = self__.iters.length;
var i_12414 = (0);
while(true){
if((i_12414 < n__4515__auto___12413)){
(self__.nexts[i_12414] = (self__.iters[i_12414]).next());

var G__12415 = (i_12414 + (1));
i_12414 = G__12415;
continue;
} else {
}
break;
}

return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});

cljs.core.MultiStepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3616__auto__ = !((lt.stepper == null));
if(and__3616__auto__){
return this$.hasNext();
} else {
return and__3616__auto__;
}
})())){
if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next())))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__12411 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__12411) : self__.xform.call(null,G__12411));
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/MultiStepper");
});

cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){
return (new cljs.core.MultiStepper(xform,iters,nexts));
});

cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){
return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return lt;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__12420 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__12420) : xform.call(null,G__12420));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return cljs.core._seq(self__.rest);
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return self__.first;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
self__.stepper.step(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return this$__$1;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_ordered_coll(this$__$1);
});

cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s = cljs.core._seq(this$__$1);
if(!((s == null))){
return cljs.core.equiv_sequential(this$__$1,other);
} else {
return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,cljs.core._seq(this$__$1));
});

cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});

cljs.core.LazyTransformer.cljs$lang$type = true;

cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__12421_12425 = cljs.core.seq(colls);
var chunk__12422_12426 = null;
var count__12423_12427 = (0);
var i__12424_12428 = (0);
while(true){
if((i__12424_12428 < count__12423_12427)){
var coll_12429 = chunk__12422_12426.cljs$core$IIndexed$_nth$arity$2(null,i__12424_12428);
iters.push(cljs.core.iter(coll_12429));

var G__12430 = seq__12421_12425;
var G__12431 = chunk__12422_12426;
var G__12432 = count__12423_12427;
var G__12433 = (i__12424_12428 + (1));
seq__12421_12425 = G__12430;
chunk__12422_12426 = G__12431;
count__12423_12427 = G__12432;
i__12424_12428 = G__12433;
continue;
} else {
var temp__4126__auto___12434 = cljs.core.seq(seq__12421_12425);
if(temp__4126__auto___12434){
var seq__12421_12435__$1 = temp__4126__auto___12434;
if(cljs.core.chunked_seq_QMARK_(seq__12421_12435__$1)){
var c__4415__auto___12436 = cljs.core.chunk_first(seq__12421_12435__$1);
var G__12437 = cljs.core.chunk_rest(seq__12421_12435__$1);
var G__12438 = c__4415__auto___12436;
var G__12439 = cljs.core.count(c__4415__auto___12436);
var G__12440 = (0);
seq__12421_12425 = G__12437;
chunk__12422_12426 = G__12438;
count__12423_12427 = G__12439;
i__12424_12428 = G__12440;
continue;
} else {
var coll_12441 = cljs.core.first(seq__12421_12435__$1);
iters.push(cljs.core.iter(coll_12441));

var G__12442 = cljs.core.next(seq__12421_12435__$1);
var G__12443 = null;
var G__12444 = (0);
var G__12445 = (0);
seq__12421_12425 = G__12442;
chunk__12422_12426 = G__12443;
count__12423_12427 = G__12444;
i__12424_12428 = G__12445;
continue;
}
} else {
}
}
break;
}

return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3628__auto__ = cljs.core.seq(coll);
if(or__3628__auto__){
return or__3628__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__12446__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__12446 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12446__delegate.call(this,xform,coll,colls);};
G__12446.cljs$lang$maxFixedArity = 2;
G__12446.cljs$lang$applyTo = (function (arglist__12447){
var xform = cljs.core.first(arglist__12447);
arglist__12447 = cljs.core.next(arglist__12447);
var coll = cljs.core.first(arglist__12447);
var colls = cljs.core.rest(arglist__12447);
return G__12446__delegate(xform,coll,colls);
});
G__12446.cljs$core$IFn$_invoke$arity$variadic = G__12446__delegate;
return G__12446;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null)){
return true;
} else {
if(cljs.core.truth_((function (){var G__12449 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__12449) : pred.call(null,G__12449));
})())){
var G__12450 = pred;
var G__12451 = cljs.core.next(coll);
pred = G__12450;
coll = G__12451;
continue;
} else {
return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll)){
var or__3628__auto__ = (function (){var G__12455 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__12455) : pred.call(null,G__12455));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var G__12456 = pred;
var G__12457 = cljs.core.next(coll);
pred = G__12456;
coll = G__12457;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n)){
return ((n & (1)) === (0));
} else {
throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__12464 = null;
var G__12464__0 = (function (){
return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__12464__1 = (function (x){
return cljs.core.not((function (){var G__12461 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12461) : f.call(null,G__12461));
})());
});
var G__12464__2 = (function (x,y){
return cljs.core.not((function (){var G__12462 = x;
var G__12463 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12462,G__12463) : f.call(null,G__12462,G__12463));
})());
});
var G__12464__3 = (function() { 
var G__12465__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__12465 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12465__delegate.call(this,x,y,zs);};
G__12465.cljs$lang$maxFixedArity = 2;
G__12465.cljs$lang$applyTo = (function (arglist__12466){
var x = cljs.core.first(arglist__12466);
arglist__12466 = cljs.core.next(arglist__12466);
var y = cljs.core.first(arglist__12466);
var zs = cljs.core.rest(arglist__12466);
return G__12465__delegate(x,y,zs);
});
G__12465.cljs$core$IFn$_invoke$arity$variadic = G__12465__delegate;
return G__12465;
})()
;
G__12464 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__12464__0.call(this);
case 1:
return G__12464__1.call(this,x);
case 2:
return G__12464__2.call(this,x,y);
default:
return G__12464__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12464.cljs$lang$maxFixedArity = 2;
G__12464.cljs$lang$applyTo = G__12464__3.cljs$lang$applyTo;
G__12464.cljs$core$IFn$_invoke$arity$0 = G__12464__0;
G__12464.cljs$core$IFn$_invoke$arity$1 = G__12464__1;
G__12464.cljs$core$IFn$_invoke$arity$2 = G__12464__2;
G__12464.cljs$core$IFn$_invoke$arity$variadic = G__12464__3.cljs$core$IFn$_invoke$arity$variadic;
return G__12464;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__12467__delegate = function (args){
return x;
};
var G__12467 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12467__delegate.call(this,args);};
G__12467.cljs$lang$maxFixedArity = 0;
G__12467.cljs$lang$applyTo = (function (arglist__12468){
var args = cljs.core.seq(arglist__12468);
return G__12467__delegate(args);
});
G__12467.cljs$core$IFn$_invoke$arity$variadic = G__12467__delegate;
return G__12467;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__12523 = null;
var G__12523__0 = (function (){
var G__12496 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12496) : f.call(null,G__12496));
});
var G__12523__1 = (function (x){
var G__12497 = (function (){var G__12498 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12498) : g.call(null,G__12498));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12497) : f.call(null,G__12497));
});
var G__12523__2 = (function (x,y){
var G__12499 = (function (){var G__12500 = x;
var G__12501 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__12500,G__12501) : g.call(null,G__12500,G__12501));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12499) : f.call(null,G__12499));
});
var G__12523__3 = (function (x,y,z){
var G__12502 = (function (){var G__12503 = x;
var G__12504 = y;
var G__12505 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__12503,G__12504,G__12505) : g.call(null,G__12503,G__12504,G__12505));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12502) : f.call(null,G__12502));
});
var G__12523__4 = (function() { 
var G__12524__delegate = function (x,y,z,args){
var G__12506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12506) : f.call(null,G__12506));
};
var G__12524 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12524__delegate.call(this,x,y,z,args);};
G__12524.cljs$lang$maxFixedArity = 3;
G__12524.cljs$lang$applyTo = (function (arglist__12525){
var x = cljs.core.first(arglist__12525);
arglist__12525 = cljs.core.next(arglist__12525);
var y = cljs.core.first(arglist__12525);
arglist__12525 = cljs.core.next(arglist__12525);
var z = cljs.core.first(arglist__12525);
var args = cljs.core.rest(arglist__12525);
return G__12524__delegate(x,y,z,args);
});
G__12524.cljs$core$IFn$_invoke$arity$variadic = G__12524__delegate;
return G__12524;
})()
;
G__12523 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12523__0.call(this);
case 1:
return G__12523__1.call(this,x);
case 2:
return G__12523__2.call(this,x,y);
case 3:
return G__12523__3.call(this,x,y,z);
default:
return G__12523__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12523.cljs$lang$maxFixedArity = 3;
G__12523.cljs$lang$applyTo = G__12523__4.cljs$lang$applyTo;
G__12523.cljs$core$IFn$_invoke$arity$0 = G__12523__0;
G__12523.cljs$core$IFn$_invoke$arity$1 = G__12523__1;
G__12523.cljs$core$IFn$_invoke$arity$2 = G__12523__2;
G__12523.cljs$core$IFn$_invoke$arity$3 = G__12523__3;
G__12523.cljs$core$IFn$_invoke$arity$variadic = G__12523__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12523;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__12526 = null;
var G__12526__0 = (function (){
var G__12507 = (function (){var G__12508 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12508) : g.call(null,G__12508));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12507) : f.call(null,G__12507));
});
var G__12526__1 = (function (x){
var G__12509 = (function (){var G__12510 = (function (){var G__12511 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__12511) : h.call(null,G__12511));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12510) : g.call(null,G__12510));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12509) : f.call(null,G__12509));
});
var G__12526__2 = (function (x,y){
var G__12512 = (function (){var G__12513 = (function (){var G__12514 = x;
var G__12515 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__12514,G__12515) : h.call(null,G__12514,G__12515));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12513) : g.call(null,G__12513));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12512) : f.call(null,G__12512));
});
var G__12526__3 = (function (x,y,z){
var G__12516 = (function (){var G__12517 = (function (){var G__12518 = x;
var G__12519 = y;
var G__12520 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__12518,G__12519,G__12520) : h.call(null,G__12518,G__12519,G__12520));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12517) : g.call(null,G__12517));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12516) : f.call(null,G__12516));
});
var G__12526__4 = (function() { 
var G__12527__delegate = function (x,y,z,args){
var G__12521 = (function (){var G__12522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12522) : g.call(null,G__12522));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12521) : f.call(null,G__12521));
};
var G__12527 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12527__delegate.call(this,x,y,z,args);};
G__12527.cljs$lang$maxFixedArity = 3;
G__12527.cljs$lang$applyTo = (function (arglist__12528){
var x = cljs.core.first(arglist__12528);
arglist__12528 = cljs.core.next(arglist__12528);
var y = cljs.core.first(arglist__12528);
arglist__12528 = cljs.core.next(arglist__12528);
var z = cljs.core.first(arglist__12528);
var args = cljs.core.rest(arglist__12528);
return G__12527__delegate(x,y,z,args);
});
G__12527.cljs$core$IFn$_invoke$arity$variadic = G__12527__delegate;
return G__12527;
})()
;
G__12526 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12526__0.call(this);
case 1:
return G__12526__1.call(this,x);
case 2:
return G__12526__2.call(this,x,y);
case 3:
return G__12526__3.call(this,x,y,z);
default:
return G__12526__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12526.cljs$lang$maxFixedArity = 3;
G__12526.cljs$lang$applyTo = G__12526__4.cljs$lang$applyTo;
G__12526.cljs$core$IFn$_invoke$arity$0 = G__12526__0;
G__12526.cljs$core$IFn$_invoke$arity$1 = G__12526__1;
G__12526.cljs$core$IFn$_invoke$arity$2 = G__12526__2;
G__12526.cljs$core$IFn$_invoke$arity$3 = G__12526__3;
G__12526.cljs$core$IFn$_invoke$arity$variadic = G__12526__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12526;
})()
});
var comp__4 = (function() { 
var G__12529__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__12530__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2){
var G__12531 = cljs.core.first(fs__$2).call(null,ret);
var G__12532 = cljs.core.next(fs__$2);
ret = G__12531;
fs__$2 = G__12532;
continue;
} else {
return ret;
}
break;
}
};
var G__12530 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12530__delegate.call(this,args);};
G__12530.cljs$lang$maxFixedArity = 0;
G__12530.cljs$lang$applyTo = (function (arglist__12533){
var args = cljs.core.seq(arglist__12533);
return G__12530__delegate(args);
});
G__12530.cljs$core$IFn$_invoke$arity$variadic = G__12530__delegate;
return G__12530;
})()
;
;})(fs__$1))
};
var G__12529 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12529__delegate.call(this,f1,f2,f3,fs);};
G__12529.cljs$lang$maxFixedArity = 3;
G__12529.cljs$lang$applyTo = (function (arglist__12534){
var f1 = cljs.core.first(arglist__12534);
arglist__12534 = cljs.core.next(arglist__12534);
var f2 = cljs.core.first(arglist__12534);
arglist__12534 = cljs.core.next(arglist__12534);
var f3 = cljs.core.first(arglist__12534);
var fs = cljs.core.rest(arglist__12534);
return G__12529__delegate(f1,f2,f3,fs);
});
G__12529.cljs$core$IFn$_invoke$arity$variadic = G__12529__delegate;
return G__12529;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){
return f;
});
var partial__2 = (function (f,arg1){
return (function() {
var G__12619 = null;
var G__12619__0 = (function (){
var G__12577 = arg1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12577) : f.call(null,G__12577));
});
var G__12619__1 = (function (x){
var G__12578 = arg1;
var G__12579 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12578,G__12579) : f.call(null,G__12578,G__12579));
});
var G__12619__2 = (function (x,y){
var G__12580 = arg1;
var G__12581 = x;
var G__12582 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12580,G__12581,G__12582) : f.call(null,G__12580,G__12581,G__12582));
});
var G__12619__3 = (function (x,y,z){
var G__12583 = arg1;
var G__12584 = x;
var G__12585 = y;
var G__12586 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12583,G__12584,G__12585,G__12586) : f.call(null,G__12583,G__12584,G__12585,G__12586));
});
var G__12619__4 = (function() { 
var G__12620__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,x,y,z,cljs.core.array_seq([args], 0));
};
var G__12620 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12620__delegate.call(this,x,y,z,args);};
G__12620.cljs$lang$maxFixedArity = 3;
G__12620.cljs$lang$applyTo = (function (arglist__12621){
var x = cljs.core.first(arglist__12621);
arglist__12621 = cljs.core.next(arglist__12621);
var y = cljs.core.first(arglist__12621);
arglist__12621 = cljs.core.next(arglist__12621);
var z = cljs.core.first(arglist__12621);
var args = cljs.core.rest(arglist__12621);
return G__12620__delegate(x,y,z,args);
});
G__12620.cljs$core$IFn$_invoke$arity$variadic = G__12620__delegate;
return G__12620;
})()
;
G__12619 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12619__0.call(this);
case 1:
return G__12619__1.call(this,x);
case 2:
return G__12619__2.call(this,x,y);
case 3:
return G__12619__3.call(this,x,y,z);
default:
return G__12619__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12619.cljs$lang$maxFixedArity = 3;
G__12619.cljs$lang$applyTo = G__12619__4.cljs$lang$applyTo;
G__12619.cljs$core$IFn$_invoke$arity$0 = G__12619__0;
G__12619.cljs$core$IFn$_invoke$arity$1 = G__12619__1;
G__12619.cljs$core$IFn$_invoke$arity$2 = G__12619__2;
G__12619.cljs$core$IFn$_invoke$arity$3 = G__12619__3;
G__12619.cljs$core$IFn$_invoke$arity$variadic = G__12619__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12619;
})()
});
var partial__3 = (function (f,arg1,arg2){
return (function() {
var G__12622 = null;
var G__12622__0 = (function (){
var G__12587 = arg1;
var G__12588 = arg2;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12587,G__12588) : f.call(null,G__12587,G__12588));
});
var G__12622__1 = (function (x){
var G__12589 = arg1;
var G__12590 = arg2;
var G__12591 = x;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12589,G__12590,G__12591) : f.call(null,G__12589,G__12590,G__12591));
});
var G__12622__2 = (function (x,y){
var G__12592 = arg1;
var G__12593 = arg2;
var G__12594 = x;
var G__12595 = y;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12592,G__12593,G__12594,G__12595) : f.call(null,G__12592,G__12593,G__12594,G__12595));
});
var G__12622__3 = (function (x,y,z){
var G__12596 = arg1;
var G__12597 = arg2;
var G__12598 = x;
var G__12599 = y;
var G__12600 = z;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__12596,G__12597,G__12598,G__12599,G__12600) : f.call(null,G__12596,G__12597,G__12598,G__12599,G__12600));
});
var G__12622__4 = (function() { 
var G__12623__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,x,y,cljs.core.array_seq([z,args], 0));
};
var G__12623 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12623__delegate.call(this,x,y,z,args);};
G__12623.cljs$lang$maxFixedArity = 3;
G__12623.cljs$lang$applyTo = (function (arglist__12624){
var x = cljs.core.first(arglist__12624);
arglist__12624 = cljs.core.next(arglist__12624);
var y = cljs.core.first(arglist__12624);
arglist__12624 = cljs.core.next(arglist__12624);
var z = cljs.core.first(arglist__12624);
var args = cljs.core.rest(arglist__12624);
return G__12623__delegate(x,y,z,args);
});
G__12623.cljs$core$IFn$_invoke$arity$variadic = G__12623__delegate;
return G__12623;
})()
;
G__12622 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12622__0.call(this);
case 1:
return G__12622__1.call(this,x);
case 2:
return G__12622__2.call(this,x,y);
case 3:
return G__12622__3.call(this,x,y,z);
default:
return G__12622__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12622.cljs$lang$maxFixedArity = 3;
G__12622.cljs$lang$applyTo = G__12622__4.cljs$lang$applyTo;
G__12622.cljs$core$IFn$_invoke$arity$0 = G__12622__0;
G__12622.cljs$core$IFn$_invoke$arity$1 = G__12622__1;
G__12622.cljs$core$IFn$_invoke$arity$2 = G__12622__2;
G__12622.cljs$core$IFn$_invoke$arity$3 = G__12622__3;
G__12622.cljs$core$IFn$_invoke$arity$variadic = G__12622__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12622;
})()
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() {
var G__12625 = null;
var G__12625__0 = (function (){
var G__12601 = arg1;
var G__12602 = arg2;
var G__12603 = arg3;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12601,G__12602,G__12603) : f.call(null,G__12601,G__12602,G__12603));
});
var G__12625__1 = (function (x){
var G__12604 = arg1;
var G__12605 = arg2;
var G__12606 = arg3;
var G__12607 = x;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12604,G__12605,G__12606,G__12607) : f.call(null,G__12604,G__12605,G__12606,G__12607));
});
var G__12625__2 = (function (x,y){
var G__12608 = arg1;
var G__12609 = arg2;
var G__12610 = arg3;
var G__12611 = x;
var G__12612 = y;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__12608,G__12609,G__12610,G__12611,G__12612) : f.call(null,G__12608,G__12609,G__12610,G__12611,G__12612));
});
var G__12625__3 = (function (x,y,z){
var G__12613 = arg1;
var G__12614 = arg2;
var G__12615 = arg3;
var G__12616 = x;
var G__12617 = y;
var G__12618 = z;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__12613,G__12614,G__12615,G__12616,G__12617,G__12618) : f.call(null,G__12613,G__12614,G__12615,G__12616,G__12617,G__12618));
});
var G__12625__4 = (function() { 
var G__12626__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3,x,cljs.core.array_seq([y,z,args], 0));
};
var G__12626 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12626__delegate.call(this,x,y,z,args);};
G__12626.cljs$lang$maxFixedArity = 3;
G__12626.cljs$lang$applyTo = (function (arglist__12627){
var x = cljs.core.first(arglist__12627);
arglist__12627 = cljs.core.next(arglist__12627);
var y = cljs.core.first(arglist__12627);
arglist__12627 = cljs.core.next(arglist__12627);
var z = cljs.core.first(arglist__12627);
var args = cljs.core.rest(arglist__12627);
return G__12626__delegate(x,y,z,args);
});
G__12626.cljs$core$IFn$_invoke$arity$variadic = G__12626__delegate;
return G__12626;
})()
;
G__12625 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12625__0.call(this);
case 1:
return G__12625__1.call(this,x);
case 2:
return G__12625__2.call(this,x,y);
case 3:
return G__12625__3.call(this,x,y,z);
default:
return G__12625__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12625.cljs$lang$maxFixedArity = 3;
G__12625.cljs$lang$applyTo = G__12625__4.cljs$lang$applyTo;
G__12625.cljs$core$IFn$_invoke$arity$0 = G__12625__0;
G__12625.cljs$core$IFn$_invoke$arity$1 = G__12625__1;
G__12625.cljs$core$IFn$_invoke$arity$2 = G__12625__2;
G__12625.cljs$core$IFn$_invoke$arity$3 = G__12625__3;
G__12625.cljs$core$IFn$_invoke$arity$variadic = G__12625__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12625;
})()
});
var partial__5 = (function() { 
var G__12628__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__12629__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__12629 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12629__delegate.call(this,args);};
G__12629.cljs$lang$maxFixedArity = 0;
G__12629.cljs$lang$applyTo = (function (arglist__12630){
var args = cljs.core.seq(arglist__12630);
return G__12629__delegate(args);
});
G__12629.cljs$core$IFn$_invoke$arity$variadic = G__12629__delegate;
return G__12629;
})()
;
};
var G__12628 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12628__delegate.call(this,f,arg1,arg2,arg3,more);};
G__12628.cljs$lang$maxFixedArity = 4;
G__12628.cljs$lang$applyTo = (function (arglist__12631){
var f = cljs.core.first(arglist__12631);
arglist__12631 = cljs.core.next(arglist__12631);
var arg1 = cljs.core.first(arglist__12631);
arglist__12631 = cljs.core.next(arglist__12631);
var arg2 = cljs.core.first(arglist__12631);
arglist__12631 = cljs.core.next(arglist__12631);
var arg3 = cljs.core.first(arglist__12631);
var more = cljs.core.rest(arglist__12631);
return G__12628__delegate(f,arg1,arg2,arg3,more);
});
G__12628.cljs$core$IFn$_invoke$arity$variadic = G__12628__delegate;
return G__12628;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__12664 = null;
var G__12664__1 = (function (a){
var G__12648 = (((a == null))?x:a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12648) : f.call(null,G__12648));
});
var G__12664__2 = (function (a,b){
var G__12649 = (((a == null))?x:a);
var G__12650 = b;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12649,G__12650) : f.call(null,G__12649,G__12650));
});
var G__12664__3 = (function (a,b,c){
var G__12651 = (((a == null))?x:a);
var G__12652 = b;
var G__12653 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12651,G__12652,G__12653) : f.call(null,G__12651,G__12652,G__12653));
});
var G__12664__4 = (function() { 
var G__12665__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__12665 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12665__delegate.call(this,a,b,c,ds);};
G__12665.cljs$lang$maxFixedArity = 3;
G__12665.cljs$lang$applyTo = (function (arglist__12666){
var a = cljs.core.first(arglist__12666);
arglist__12666 = cljs.core.next(arglist__12666);
var b = cljs.core.first(arglist__12666);
arglist__12666 = cljs.core.next(arglist__12666);
var c = cljs.core.first(arglist__12666);
var ds = cljs.core.rest(arglist__12666);
return G__12665__delegate(a,b,c,ds);
});
G__12665.cljs$core$IFn$_invoke$arity$variadic = G__12665__delegate;
return G__12665;
})()
;
G__12664 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__12664__1.call(this,a);
case 2:
return G__12664__2.call(this,a,b);
case 3:
return G__12664__3.call(this,a,b,c);
default:
return G__12664__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12664.cljs$lang$maxFixedArity = 3;
G__12664.cljs$lang$applyTo = G__12664__4.cljs$lang$applyTo;
G__12664.cljs$core$IFn$_invoke$arity$1 = G__12664__1;
G__12664.cljs$core$IFn$_invoke$arity$2 = G__12664__2;
G__12664.cljs$core$IFn$_invoke$arity$3 = G__12664__3;
G__12664.cljs$core$IFn$_invoke$arity$variadic = G__12664__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12664;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__12667 = null;
var G__12667__2 = (function (a,b){
var G__12654 = (((a == null))?x:a);
var G__12655 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12654,G__12655) : f.call(null,G__12654,G__12655));
});
var G__12667__3 = (function (a,b,c){
var G__12656 = (((a == null))?x:a);
var G__12657 = (((b == null))?y:b);
var G__12658 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12656,G__12657,G__12658) : f.call(null,G__12656,G__12657,G__12658));
});
var G__12667__4 = (function() { 
var G__12668__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__12668 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12668__delegate.call(this,a,b,c,ds);};
G__12668.cljs$lang$maxFixedArity = 3;
G__12668.cljs$lang$applyTo = (function (arglist__12669){
var a = cljs.core.first(arglist__12669);
arglist__12669 = cljs.core.next(arglist__12669);
var b = cljs.core.first(arglist__12669);
arglist__12669 = cljs.core.next(arglist__12669);
var c = cljs.core.first(arglist__12669);
var ds = cljs.core.rest(arglist__12669);
return G__12668__delegate(a,b,c,ds);
});
G__12668.cljs$core$IFn$_invoke$arity$variadic = G__12668__delegate;
return G__12668;
})()
;
G__12667 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12667__2.call(this,a,b);
case 3:
return G__12667__3.call(this,a,b,c);
default:
return G__12667__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12667.cljs$lang$maxFixedArity = 3;
G__12667.cljs$lang$applyTo = G__12667__4.cljs$lang$applyTo;
G__12667.cljs$core$IFn$_invoke$arity$2 = G__12667__2;
G__12667.cljs$core$IFn$_invoke$arity$3 = G__12667__3;
G__12667.cljs$core$IFn$_invoke$arity$variadic = G__12667__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12667;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__12670 = null;
var G__12670__2 = (function (a,b){
var G__12659 = (((a == null))?x:a);
var G__12660 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12659,G__12660) : f.call(null,G__12659,G__12660));
});
var G__12670__3 = (function (a,b,c){
var G__12661 = (((a == null))?x:a);
var G__12662 = (((b == null))?y:b);
var G__12663 = (((c == null))?z:c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12661,G__12662,G__12663) : f.call(null,G__12661,G__12662,G__12663));
});
var G__12670__4 = (function() { 
var G__12671__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__12671 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12671__delegate.call(this,a,b,c,ds);};
G__12671.cljs$lang$maxFixedArity = 3;
G__12671.cljs$lang$applyTo = (function (arglist__12672){
var a = cljs.core.first(arglist__12672);
arglist__12672 = cljs.core.next(arglist__12672);
var b = cljs.core.first(arglist__12672);
arglist__12672 = cljs.core.next(arglist__12672);
var c = cljs.core.first(arglist__12672);
var ds = cljs.core.rest(arglist__12672);
return G__12671__delegate(a,b,c,ds);
});
G__12671.cljs$core$IFn$_invoke$arity$variadic = G__12671__delegate;
return G__12671;
})()
;
G__12670 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12670__2.call(this,a,b);
case 3:
return G__12670__3.call(this,a,b,c);
default:
return G__12670__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12670.cljs$lang$maxFixedArity = 3;
G__12670.cljs$lang$applyTo = G__12670__4.cljs$lang$applyTo;
G__12670.cljs$core$IFn$_invoke$arity$2 = G__12670__2;
G__12670.cljs$core$IFn$_invoke$arity$3 = G__12670__3;
G__12670.cljs$core$IFn$_invoke$arity$variadic = G__12670__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12670;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4515__auto___12721 = size;
var i_12722 = (0);
while(true){
if((i_12722 < n__4515__auto___12721)){
cljs.core.chunk_append(b,(function (){var G__12717 = (idx + i_12722);
var G__12718 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_12722);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12717,G__12718) : f.call(null,G__12717,G__12718));
})());

var G__12723 = (i_12722 + (1));
i_12722 = G__12723;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__12719 = idx;
var G__12720 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12719,G__12720) : f.call(null,G__12719,G__12720));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){
return (function (rf){
return (function() {
var G__12742 = null;
var G__12742__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__12742__1 = (function (result){
var G__12736 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__12736) : rf.call(null,G__12736));
});
var G__12742__2 = (function (result,input){
var v = (function (){var G__12737 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12737) : f.call(null,G__12737));
})();
if((v == null)){
return result;
} else {
var G__12738 = result;
var G__12739 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__12738,G__12739) : rf.call(null,G__12738,G__12739));
}
});
G__12742 = function(result,input){
switch(arguments.length){
case 0:
return G__12742__0.call(this);
case 1:
return G__12742__1.call(this,result);
case 2:
return G__12742__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12742.cljs$core$IFn$_invoke$arity$0 = G__12742__0;
G__12742.cljs$core$IFn$_invoke$arity$1 = G__12742__1;
G__12742.cljs$core$IFn$_invoke$arity$2 = G__12742__2;
return G__12742;
})()
});
});
var keep__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4515__auto___12743 = size;
var i_12744 = (0);
while(true){
if((i_12744 < n__4515__auto___12743)){
var x_12745 = (function (){var G__12740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_12744);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12740) : f.call(null,G__12740));
})();
if((x_12745 == null)){
} else {
cljs.core.chunk_append(b,x_12745);
}

var G__12746 = (i_12744 + (1));
i_12744 = G__12746;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__12741 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12741) : f.call(null,G__12741));
})();
if((x == null)){
return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else {
return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12747 = this$__$1;
return goog.getUid(G__12747);
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__12748 = cljs.core.seq(self__.watches);
var chunk__12749 = null;
var count__12750 = (0);
var i__12751 = (0);
while(true){
if((i__12751 < count__12750)){
var vec__12752 = chunk__12749.cljs$core$IIndexed$_nth$arity$2(null,i__12751);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12752,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12752,(1),null);
var G__12753_12762 = key;
var G__12754_12763 = this$__$1;
var G__12755_12764 = oldval;
var G__12756_12765 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12753_12762,G__12754_12763,G__12755_12764,G__12756_12765) : f.call(null,G__12753_12762,G__12754_12763,G__12755_12764,G__12756_12765));

var G__12766 = seq__12748;
var G__12767 = chunk__12749;
var G__12768 = count__12750;
var G__12769 = (i__12751 + (1));
seq__12748 = G__12766;
chunk__12749 = G__12767;
count__12750 = G__12768;
i__12751 = G__12769;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__12748);
if(temp__4126__auto__){
var seq__12748__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12748__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__12748__$1);
var G__12770 = cljs.core.chunk_rest(seq__12748__$1);
var G__12771 = c__4415__auto__;
var G__12772 = cljs.core.count(c__4415__auto__);
var G__12773 = (0);
seq__12748 = G__12770;
chunk__12749 = G__12771;
count__12750 = G__12772;
i__12751 = G__12773;
continue;
} else {
var vec__12757 = cljs.core.first(seq__12748__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12757,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12757,(1),null);
var G__12758_12774 = key;
var G__12759_12775 = this$__$1;
var G__12760_12776 = oldval;
var G__12761_12777 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12758_12774,G__12759_12775,G__12760_12776,G__12761_12777) : f.call(null,G__12758_12774,G__12759_12775,G__12760_12776,G__12761_12777));

var G__12778 = cljs.core.next(seq__12748__$1);
var G__12779 = null;
var G__12780 = (0);
var G__12781 = (0);
seq__12748 = G__12778;
chunk__12749 = G__12779;
count__12750 = G__12780;
i__12751 = G__12781;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);

return this$__$1;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

cljs.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Atom.cljs$lang$type = true;

cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Atom");
});

cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){
return (new cljs.core.Atom(state,meta,validator,watches));
});

/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__12785__delegate = function (x,p__12782){
var map__12784 = p__12782;
var map__12784__$1 = ((cljs.core.seq_QMARK_(map__12784))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12784):map__12784);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12784__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12784__$1,cljs.core.constant$keyword$3);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__12785 = function (x,var_args){
var p__12782 = null;
if (arguments.length > 1) {
  p__12782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12785__delegate.call(this,x,p__12782);};
G__12785.cljs$lang$maxFixedArity = 1;
G__12785.cljs$lang$applyTo = (function (arglist__12786){
var x = cljs.core.first(arglist__12786);
var p__12782 = cljs.core.rest(arglist__12786);
return G__12785__delegate(x,p__12782);
});
G__12785.cljs$core$IFn$_invoke$arity$variadic = G__12785__delegate;
return G__12785;
})()
;
atom = function(x,var_args){
var p__12782 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
if((a instanceof cljs.core.Atom)){
var validate = a.validator;
if((validate == null)){
} else {
if(cljs.core.truth_((function (){var G__12789 = new_value;
return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__12789) : validate.call(null,G__12789));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str((function (){var G__12790 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));
return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__12790) : cljs.core.pr_str.call(null,G__12790));
})())].join('')));
}
}

var old_value = a.state;
a.state = new_value;

if((a.watches == null)){
} else {
cljs.core._notify_watches(a,old_value,new_value);
}

return new_value;
} else {
return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__12797 = a.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12797) : f.call(null,G__12797));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__12798 = a.state;
var G__12799 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12798,G__12799) : f.call(null,G__12798,G__12799));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__12800 = a.state;
var G__12801 = x;
var G__12802 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12800,G__12801,G__12802) : f.call(null,G__12800,G__12801,G__12802));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__12803__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__12803 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12803__delegate.call(this,a,f,x,y,more);};
G__12803.cljs$lang$maxFixedArity = 4;
G__12803.cljs$lang$applyTo = (function (arglist__12804){
var a = cljs.core.first(arglist__12804);
arglist__12804 = cljs.core.next(arglist__12804);
var f = cljs.core.first(arglist__12804);
arglist__12804 = cljs.core.next(arglist__12804);
var x = cljs.core.first(arglist__12804);
arglist__12804 = cljs.core.next(arglist__12804);
var y = cljs.core.first(arglist__12804);
var more = cljs.core.rest(arglist__12804);
return G__12803__delegate(a,f,x,y,more);
});
G__12803.cljs$core$IFn$_invoke$arity$variadic = G__12803__delegate;
return G__12803;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval)){
cljs.core.reset_BANG_(a,newval);

return true;
} else {
return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});

/**
* @constructor
*/
cljs.core.Volatile = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Volatile.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Volatile.prototype.cljs$core$IVolatile$ = true;

cljs.core.Volatile.prototype.cljs$core$IVolatile$_vreset_BANG_$arity$2 = (function (_,new_state){
var self__ = this;
var ___$1 = this;
return self__.state = new_state;
});

cljs.core.Volatile.cljs$lang$type = true;

cljs.core.Volatile.cljs$lang$ctorStr = "cljs.core/Volatile";

cljs.core.Volatile.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Volatile");
});

cljs.core.__GT_Volatile = (function __GT_Volatile(state){
return (new cljs.core.Volatile(state));
});

/**
* Creates and returns a Volatile with an initial value of val.
*/
cljs.core.volatile_BANG_ = (function volatile_BANG_(val){
return (new cljs.core.Volatile(val));
});
/**
* Returns true if x is a volatile.
*/
cljs.core.volatile_QMARK_ = (function volatile_QMARK_(x){
return (x instanceof cljs.core.Volatile);
});
/**
* Sets the value of volatile to newval without regard for the
* current value. Returns newval.
*/
cljs.core.vreset_BANG_ = (function vreset_BANG_(vol,newval){
return cljs.core._vreset_BANG_(vol,newval);
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__12871 = null;
var G__12871__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__12871__1 = (function (result){
var G__12838 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__12838) : rf.call(null,G__12838));
});
var G__12871__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
var v = (function (){var G__12839 = i;
var G__12840 = input;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12839,G__12840) : f.call(null,G__12839,G__12840));
})();
if((v == null)){
return result;
} else {
var G__12841 = result;
var G__12842 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__12841,G__12842) : rf.call(null,G__12841,G__12842));
}
});
G__12871 = function(result,input){
switch(arguments.length){
case 0:
return G__12871__0.call(this);
case 1:
return G__12871__1.call(this,result);
case 2:
return G__12871__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12871.cljs$core$IFn$_invoke$arity$0 = G__12871__0;
G__12871.cljs$core$IFn$_invoke$arity$1 = G__12871__1;
G__12871.cljs$core$IFn$_invoke$arity$2 = G__12871__2;
return G__12871;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4515__auto___12872 = size;
var i_12873 = (0);
while(true){
if((i_12873 < n__4515__auto___12872)){
var x_12874 = (function (){var G__12867 = (idx + i_12873);
var G__12868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_12873);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12867,G__12868) : f.call(null,G__12867,G__12868));
})();
if((x_12874 == null)){
} else {
cljs.core.chunk_append(b,x_12874);
}

var G__12875 = (i_12873 + (1));
i_12873 = G__12875;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__12869 = idx;
var G__12870 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12869,G__12870) : f.call(null,G__12869,G__12870));
})();
if((x == null)){
return keepi((idx + (1)),cljs.core.rest(s));
} else {
return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((function (){var G__13089 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13089) : p.call(null,G__13089));
})());
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3616__auto__ = (function (){var G__13091 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13091) : p.call(null,G__13091));
})();
if(cljs.core.truth_(and__3616__auto__)){
var G__13092 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13092) : p.call(null,G__13092));
} else {
return and__3616__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3616__auto__ = (function (){var G__13094 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13094) : p.call(null,G__13094));
})();
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__13096 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13096) : p.call(null,G__13096));
})();
if(cljs.core.truth_(and__3616__auto____$1)){
var G__13097 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13097) : p.call(null,G__13097));
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__13266__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__13266 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13266__delegate.call(this,x,y,z,args);};
G__13266.cljs$lang$maxFixedArity = 3;
G__13266.cljs$lang$applyTo = (function (arglist__13267){
var x = cljs.core.first(arglist__13267);
arglist__13267 = cljs.core.next(arglist__13267);
var y = cljs.core.first(arglist__13267);
arglist__13267 = cljs.core.next(arglist__13267);
var z = cljs.core.first(arglist__13267);
var args = cljs.core.rest(arglist__13267);
return G__13266__delegate(x,y,z,args);
});
G__13266.cljs$core$IFn$_invoke$arity$variadic = G__13266__delegate;
return G__13266;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3616__auto__ = (function (){var G__13129 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13129) : p1.call(null,G__13129));
})();
if(cljs.core.truth_(and__3616__auto__)){
var G__13130 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13130) : p2.call(null,G__13130));
} else {
return and__3616__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3616__auto__ = (function (){var G__13132 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13132) : p1.call(null,G__13132));
})();
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__13134 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13134) : p1.call(null,G__13134));
})();
if(cljs.core.truth_(and__3616__auto____$1)){
var and__3616__auto____$2 = (function (){var G__13136 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13136) : p2.call(null,G__13136));
})();
if(cljs.core.truth_(and__3616__auto____$2)){
var G__13137 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13137) : p2.call(null,G__13137));
} else {
return and__3616__auto____$2;
}
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3616__auto__ = (function (){var G__13139 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13139) : p1.call(null,G__13139));
})();
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__13141 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13141) : p1.call(null,G__13141));
})();
if(cljs.core.truth_(and__3616__auto____$1)){
var and__3616__auto____$2 = (function (){var G__13143 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13143) : p1.call(null,G__13143));
})();
if(cljs.core.truth_(and__3616__auto____$2)){
var and__3616__auto____$3 = (function (){var G__13145 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13145) : p2.call(null,G__13145));
})();
if(cljs.core.truth_(and__3616__auto____$3)){
var and__3616__auto____$4 = (function (){var G__13147 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13147) : p2.call(null,G__13147));
})();
if(cljs.core.truth_(and__3616__auto____$4)){
var G__13148 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13148) : p2.call(null,G__13148));
} else {
return and__3616__auto____$4;
}
} else {
return and__3616__auto____$3;
}
} else {
return and__3616__auto____$2;
}
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__13268__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__12876_SHARP_){
var and__3616__auto__ = (function (){var G__13153 = p1__12876_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13153) : p1.call(null,G__13153));
})();
if(cljs.core.truth_(and__3616__auto__)){
var G__13154 = p1__12876_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13154) : p2.call(null,G__13154));
} else {
return and__3616__auto__;
}
}),args)));
};
var G__13268 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13268__delegate.call(this,x,y,z,args);};
G__13268.cljs$lang$maxFixedArity = 3;
G__13268.cljs$lang$applyTo = (function (arglist__13269){
var x = cljs.core.first(arglist__13269);
arglist__13269 = cljs.core.next(arglist__13269);
var y = cljs.core.first(arglist__13269);
arglist__13269 = cljs.core.next(arglist__13269);
var z = cljs.core.first(arglist__13269);
var args = cljs.core.rest(arglist__13269);
return G__13268__delegate(x,y,z,args);
});
G__13268.cljs$core$IFn$_invoke$arity$variadic = G__13268__delegate;
return G__13268;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3616__auto__ = (function (){var G__13200 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13200) : p1.call(null,G__13200));
})();
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__13202 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13202) : p2.call(null,G__13202));
})();
if(cljs.core.truth_(and__3616__auto____$1)){
var G__13203 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13203) : p3.call(null,G__13203));
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3616__auto__ = (function (){var G__13205 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13205) : p1.call(null,G__13205));
})();
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__13207 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13207) : p2.call(null,G__13207));
})();
if(cljs.core.truth_(and__3616__auto____$1)){
var and__3616__auto____$2 = (function (){var G__13209 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13209) : p3.call(null,G__13209));
})();
if(cljs.core.truth_(and__3616__auto____$2)){
var and__3616__auto____$3 = (function (){var G__13211 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13211) : p1.call(null,G__13211));
})();
if(cljs.core.truth_(and__3616__auto____$3)){
var and__3616__auto____$4 = (function (){var G__13213 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13213) : p2.call(null,G__13213));
})();
if(cljs.core.truth_(and__3616__auto____$4)){
var G__13214 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13214) : p3.call(null,G__13214));
} else {
return and__3616__auto____$4;
}
} else {
return and__3616__auto____$3;
}
} else {
return and__3616__auto____$2;
}
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3616__auto__ = (function (){var G__13216 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13216) : p1.call(null,G__13216));
})();
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__13218 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13218) : p2.call(null,G__13218));
})();
if(cljs.core.truth_(and__3616__auto____$1)){
var and__3616__auto____$2 = (function (){var G__13220 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13220) : p3.call(null,G__13220));
})();
if(cljs.core.truth_(and__3616__auto____$2)){
var and__3616__auto____$3 = (function (){var G__13222 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13222) : p1.call(null,G__13222));
})();
if(cljs.core.truth_(and__3616__auto____$3)){
var and__3616__auto____$4 = (function (){var G__13224 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13224) : p2.call(null,G__13224));
})();
if(cljs.core.truth_(and__3616__auto____$4)){
var and__3616__auto____$5 = (function (){var G__13226 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13226) : p3.call(null,G__13226));
})();
if(cljs.core.truth_(and__3616__auto____$5)){
var and__3616__auto____$6 = (function (){var G__13228 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13228) : p1.call(null,G__13228));
})();
if(cljs.core.truth_(and__3616__auto____$6)){
var and__3616__auto____$7 = (function (){var G__13230 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13230) : p2.call(null,G__13230));
})();
if(cljs.core.truth_(and__3616__auto____$7)){
var G__13231 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13231) : p3.call(null,G__13231));
} else {
return and__3616__auto____$7;
}
} else {
return and__3616__auto____$6;
}
} else {
return and__3616__auto____$5;
}
} else {
return and__3616__auto____$4;
}
} else {
return and__3616__auto____$3;
}
} else {
return and__3616__auto____$2;
}
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__13270__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__12877_SHARP_){
var and__3616__auto__ = (function (){var G__13238 = p1__12877_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13238) : p1.call(null,G__13238));
})();
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__13240 = p1__12877_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13240) : p2.call(null,G__13240));
})();
if(cljs.core.truth_(and__3616__auto____$1)){
var G__13241 = p1__12877_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13241) : p3.call(null,G__13241));
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
}),args)));
};
var G__13270 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13270__delegate.call(this,x,y,z,args);};
G__13270.cljs$lang$maxFixedArity = 3;
G__13270.cljs$lang$applyTo = (function (arglist__13271){
var x = cljs.core.first(arglist__13271);
arglist__13271 = cljs.core.next(arglist__13271);
var y = cljs.core.first(arglist__13271);
arglist__13271 = cljs.core.next(arglist__13271);
var z = cljs.core.first(arglist__13271);
var args = cljs.core.rest(arglist__13271);
return G__13270__delegate(x,y,z,args);
});
G__13270.cljs$core$IFn$_invoke$arity$variadic = G__13270__delegate;
return G__13270;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__13272__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__12878_SHARP_){
var G__13257 = x;
return (p1__12878_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12878_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13257) : p1__12878_SHARP_.call(null,G__13257));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__12879_SHARP_){
var and__3616__auto__ = (function (){var G__13259 = x;
return (p1__12879_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12879_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13259) : p1__12879_SHARP_.call(null,G__13259));
})();
if(cljs.core.truth_(and__3616__auto__)){
var G__13260 = y;
return (p1__12879_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12879_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13260) : p1__12879_SHARP_.call(null,G__13260));
} else {
return and__3616__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__12880_SHARP_){
var and__3616__auto__ = (function (){var G__13262 = x;
return (p1__12880_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12880_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13262) : p1__12880_SHARP_.call(null,G__13262));
})();
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__13264 = y;
return (p1__12880_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12880_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13264) : p1__12880_SHARP_.call(null,G__13264));
})();
if(cljs.core.truth_(and__3616__auto____$1)){
var G__13265 = z;
return (p1__12880_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12880_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13265) : p1__12880_SHARP_.call(null,G__13265));
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__13273__delegate = function (x,y,z,args){
return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__12881_SHARP_){
return cljs.core.every_QMARK_(p1__12881_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__13273 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13273__delegate.call(this,x,y,z,args);};
G__13273.cljs$lang$maxFixedArity = 3;
G__13273.cljs$lang$applyTo = (function (arglist__13274){
var x = cljs.core.first(arglist__13274);
arglist__13274 = cljs.core.next(arglist__13274);
var y = cljs.core.first(arglist__13274);
arglist__13274 = cljs.core.next(arglist__13274);
var z = cljs.core.first(arglist__13274);
var args = cljs.core.rest(arglist__13274);
return G__13273__delegate(x,y,z,args);
});
G__13273.cljs$core$IFn$_invoke$arity$variadic = G__13273__delegate;
return G__13273;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__13272 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13272__delegate.call(this,p1,p2,p3,ps);};
G__13272.cljs$lang$maxFixedArity = 3;
G__13272.cljs$lang$applyTo = (function (arglist__13275){
var p1 = cljs.core.first(arglist__13275);
arglist__13275 = cljs.core.next(arglist__13275);
var p2 = cljs.core.first(arglist__13275);
arglist__13275 = cljs.core.next(arglist__13275);
var p3 = cljs.core.first(arglist__13275);
var ps = cljs.core.rest(arglist__13275);
return G__13272__delegate(p1,p2,p3,ps);
});
G__13272.cljs$core$IFn$_invoke$arity$variadic = G__13272__delegate;
return G__13272;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
var G__13481 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13481) : p.call(null,G__13481));
});
var sp1__2 = (function (x,y){
var or__3628__auto__ = (function (){var G__13483 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13483) : p.call(null,G__13483));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var G__13484 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13484) : p.call(null,G__13484));
}
});
var sp1__3 = (function (x,y,z){
var or__3628__auto__ = (function (){var G__13486 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13486) : p.call(null,G__13486));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__13488 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13488) : p.call(null,G__13488));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var G__13489 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13489) : p.call(null,G__13489));
}
}
});
var sp1__4 = (function() { 
var G__13650__delegate = function (x,y,z,args){
var or__3628__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.some(p,args);
}
};
var G__13650 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13650__delegate.call(this,x,y,z,args);};
G__13650.cljs$lang$maxFixedArity = 3;
G__13650.cljs$lang$applyTo = (function (arglist__13651){
var x = cljs.core.first(arglist__13651);
arglist__13651 = cljs.core.next(arglist__13651);
var y = cljs.core.first(arglist__13651);
arglist__13651 = cljs.core.next(arglist__13651);
var z = cljs.core.first(arglist__13651);
var args = cljs.core.rest(arglist__13651);
return G__13650__delegate(x,y,z,args);
});
G__13650.cljs$core$IFn$_invoke$arity$variadic = G__13650__delegate;
return G__13650;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3628__auto__ = (function (){var G__13521 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13521) : p1.call(null,G__13521));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var G__13522 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13522) : p2.call(null,G__13522));
}
});
var sp2__2 = (function (x,y){
var or__3628__auto__ = (function (){var G__13524 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13524) : p1.call(null,G__13524));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__13526 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13526) : p1.call(null,G__13526));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var or__3628__auto____$2 = (function (){var G__13528 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13528) : p2.call(null,G__13528));
})();
if(cljs.core.truth_(or__3628__auto____$2)){
return or__3628__auto____$2;
} else {
var G__13529 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13529) : p2.call(null,G__13529));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3628__auto__ = (function (){var G__13531 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13531) : p1.call(null,G__13531));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__13533 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13533) : p1.call(null,G__13533));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var or__3628__auto____$2 = (function (){var G__13535 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13535) : p1.call(null,G__13535));
})();
if(cljs.core.truth_(or__3628__auto____$2)){
return or__3628__auto____$2;
} else {
var or__3628__auto____$3 = (function (){var G__13537 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13537) : p2.call(null,G__13537));
})();
if(cljs.core.truth_(or__3628__auto____$3)){
return or__3628__auto____$3;
} else {
var or__3628__auto____$4 = (function (){var G__13539 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13539) : p2.call(null,G__13539));
})();
if(cljs.core.truth_(or__3628__auto____$4)){
return or__3628__auto____$4;
} else {
var G__13540 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13540) : p2.call(null,G__13540));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__13652__delegate = function (x,y,z,args){
var or__3628__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.some(((function (or__3628__auto__){
return (function (p1__13276_SHARP_){
var or__3628__auto____$1 = (function (){var G__13542 = p1__13276_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13542) : p1.call(null,G__13542));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var G__13543 = p1__13276_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13543) : p2.call(null,G__13543));
}
});})(or__3628__auto__))
,args);
}
};
var G__13652 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13652__delegate.call(this,x,y,z,args);};
G__13652.cljs$lang$maxFixedArity = 3;
G__13652.cljs$lang$applyTo = (function (arglist__13653){
var x = cljs.core.first(arglist__13653);
arglist__13653 = cljs.core.next(arglist__13653);
var y = cljs.core.first(arglist__13653);
arglist__13653 = cljs.core.next(arglist__13653);
var z = cljs.core.first(arglist__13653);
var args = cljs.core.rest(arglist__13653);
return G__13652__delegate(x,y,z,args);
});
G__13652.cljs$core$IFn$_invoke$arity$variadic = G__13652__delegate;
return G__13652;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3628__auto__ = (function (){var G__13589 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13589) : p1.call(null,G__13589));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__13591 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13591) : p2.call(null,G__13591));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var G__13592 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13592) : p3.call(null,G__13592));
}
}
});
var sp3__2 = (function (x,y){
var or__3628__auto__ = (function (){var G__13594 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13594) : p1.call(null,G__13594));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__13596 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13596) : p2.call(null,G__13596));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var or__3628__auto____$2 = (function (){var G__13598 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13598) : p3.call(null,G__13598));
})();
if(cljs.core.truth_(or__3628__auto____$2)){
return or__3628__auto____$2;
} else {
var or__3628__auto____$3 = (function (){var G__13600 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13600) : p1.call(null,G__13600));
})();
if(cljs.core.truth_(or__3628__auto____$3)){
return or__3628__auto____$3;
} else {
var or__3628__auto____$4 = (function (){var G__13602 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13602) : p2.call(null,G__13602));
})();
if(cljs.core.truth_(or__3628__auto____$4)){
return or__3628__auto____$4;
} else {
var G__13603 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13603) : p3.call(null,G__13603));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3628__auto__ = (function (){var G__13605 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13605) : p1.call(null,G__13605));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__13607 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13607) : p2.call(null,G__13607));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var or__3628__auto____$2 = (function (){var G__13609 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13609) : p3.call(null,G__13609));
})();
if(cljs.core.truth_(or__3628__auto____$2)){
return or__3628__auto____$2;
} else {
var or__3628__auto____$3 = (function (){var G__13611 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13611) : p1.call(null,G__13611));
})();
if(cljs.core.truth_(or__3628__auto____$3)){
return or__3628__auto____$3;
} else {
var or__3628__auto____$4 = (function (){var G__13613 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13613) : p2.call(null,G__13613));
})();
if(cljs.core.truth_(or__3628__auto____$4)){
return or__3628__auto____$4;
} else {
var or__3628__auto____$5 = (function (){var G__13615 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13615) : p3.call(null,G__13615));
})();
if(cljs.core.truth_(or__3628__auto____$5)){
return or__3628__auto____$5;
} else {
var or__3628__auto____$6 = (function (){var G__13617 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13617) : p1.call(null,G__13617));
})();
if(cljs.core.truth_(or__3628__auto____$6)){
return or__3628__auto____$6;
} else {
var or__3628__auto____$7 = (function (){var G__13619 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13619) : p2.call(null,G__13619));
})();
if(cljs.core.truth_(or__3628__auto____$7)){
return or__3628__auto____$7;
} else {
var G__13620 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13620) : p3.call(null,G__13620));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__13654__delegate = function (x,y,z,args){
var or__3628__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.some(((function (or__3628__auto__){
return (function (p1__13277_SHARP_){
var or__3628__auto____$1 = (function (){var G__13622 = p1__13277_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13622) : p1.call(null,G__13622));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var or__3628__auto____$2 = (function (){var G__13624 = p1__13277_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13624) : p2.call(null,G__13624));
})();
if(cljs.core.truth_(or__3628__auto____$2)){
return or__3628__auto____$2;
} else {
var G__13625 = p1__13277_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13625) : p3.call(null,G__13625));
}
}
});})(or__3628__auto__))
,args);
}
};
var G__13654 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13654__delegate.call(this,x,y,z,args);};
G__13654.cljs$lang$maxFixedArity = 3;
G__13654.cljs$lang$applyTo = (function (arglist__13655){
var x = cljs.core.first(arglist__13655);
arglist__13655 = cljs.core.next(arglist__13655);
var y = cljs.core.first(arglist__13655);
arglist__13655 = cljs.core.next(arglist__13655);
var z = cljs.core.first(arglist__13655);
var args = cljs.core.rest(arglist__13655);
return G__13654__delegate(x,y,z,args);
});
G__13654.cljs$core$IFn$_invoke$arity$variadic = G__13654__delegate;
return G__13654;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__13656__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some(((function (ps__$1){
return (function (p1__13278_SHARP_){
var G__13641 = x;
return (p1__13278_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13278_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13641) : p1__13278_SHARP_.call(null,G__13641));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some(((function (ps__$1){
return (function (p1__13279_SHARP_){
var or__3628__auto__ = (function (){var G__13643 = x;
return (p1__13279_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13279_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13643) : p1__13279_SHARP_.call(null,G__13643));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var G__13644 = y;
return (p1__13279_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13279_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13644) : p1__13279_SHARP_.call(null,G__13644));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some(((function (ps__$1){
return (function (p1__13280_SHARP_){
var or__3628__auto__ = (function (){var G__13646 = x;
return (p1__13280_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13280_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13646) : p1__13280_SHARP_.call(null,G__13646));
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__13648 = y;
return (p1__13280_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13280_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13648) : p1__13280_SHARP_.call(null,G__13648));
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var G__13649 = z;
return (p1__13280_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13280_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13649) : p1__13280_SHARP_.call(null,G__13649));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__13657__delegate = function (x,y,z,args){
var or__3628__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.some(((function (or__3628__auto__,ps__$1){
return (function (p1__13281_SHARP_){
return cljs.core.some(p1__13281_SHARP_,args);
});})(or__3628__auto__,ps__$1))
,ps__$1);
}
};
var G__13657 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13657__delegate.call(this,x,y,z,args);};
G__13657.cljs$lang$maxFixedArity = 3;
G__13657.cljs$lang$applyTo = (function (arglist__13658){
var x = cljs.core.first(arglist__13658);
arglist__13658 = cljs.core.next(arglist__13658);
var y = cljs.core.first(arglist__13658);
arglist__13658 = cljs.core.next(arglist__13658);
var z = cljs.core.first(arglist__13658);
var args = cljs.core.rest(arglist__13658);
return G__13657__delegate(x,y,z,args);
});
G__13657.cljs$core$IFn$_invoke$arity$variadic = G__13657__delegate;
return G__13657;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__13656 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13656__delegate.call(this,p1,p2,p3,ps);};
G__13656.cljs$lang$maxFixedArity = 3;
G__13656.cljs$lang$applyTo = (function (arglist__13659){
var p1 = cljs.core.first(arglist__13659);
arglist__13659 = cljs.core.next(arglist__13659);
var p2 = cljs.core.first(arglist__13659);
arglist__13659 = cljs.core.next(arglist__13659);
var p3 = cljs.core.first(arglist__13659);
var ps = cljs.core.rest(arglist__13659);
return G__13656__delegate(p1,p2,p3,ps);
});
G__13656.cljs$core$IFn$_invoke$arity$variadic = G__13656__delegate;
return G__13656;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){
return (function (rf){
return (function() {
var G__13714 = null;
var G__13714__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13714__1 = (function (result){
var G__13700 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13700) : rf.call(null,G__13700));
});
var G__13714__2 = (function (result,input){
var G__13701 = result;
var G__13702 = (function (){var G__13703 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13703) : f.call(null,G__13703));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13701,G__13702) : rf.call(null,G__13701,G__13702));
});
var G__13714__3 = (function() { 
var G__13715__delegate = function (result,input,inputs){
var G__13704 = result;
var G__13705 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13704,G__13705) : rf.call(null,G__13704,G__13705));
};
var G__13715 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13715__delegate.call(this,result,input,inputs);};
G__13715.cljs$lang$maxFixedArity = 2;
G__13715.cljs$lang$applyTo = (function (arglist__13716){
var result = cljs.core.first(arglist__13716);
arglist__13716 = cljs.core.next(arglist__13716);
var input = cljs.core.first(arglist__13716);
var inputs = cljs.core.rest(arglist__13716);
return G__13715__delegate(result,input,inputs);
});
G__13715.cljs$core$IFn$_invoke$arity$variadic = G__13715__delegate;
return G__13715;
})()
;
G__13714 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__13714__0.call(this);
case 1:
return G__13714__1.call(this,result);
case 2:
return G__13714__2.call(this,result,input);
default:
return G__13714__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13714.cljs$lang$maxFixedArity = 2;
G__13714.cljs$lang$applyTo = G__13714__3.cljs$lang$applyTo;
G__13714.cljs$core$IFn$_invoke$arity$0 = G__13714__0;
G__13714.cljs$core$IFn$_invoke$arity$1 = G__13714__1;
G__13714.cljs$core$IFn$_invoke$arity$2 = G__13714__2;
G__13714.cljs$core$IFn$_invoke$arity$variadic = G__13714__3.cljs$core$IFn$_invoke$arity$variadic;
return G__13714;
})()
});
});
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4515__auto___13717 = size;
var i_13718 = (0);
while(true){
if((i_13718 < n__4515__auto___13717)){
cljs.core.chunk_append(b,(function (){var G__13706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13718);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13706) : f.call(null,G__13706));
})());

var G__13719 = (i_13718 + (1));
i_13718 = G__13719;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__13707 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13707) : f.call(null,G__13707));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons((function (){var G__13708 = cljs.core.first(s1);
var G__13709 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13708,G__13709) : f.call(null,G__13708,G__13709));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else {
return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
var s3 = cljs.core.seq(c3);
if((s1) && (s2) && (s3)){
return cljs.core.cons((function (){var G__13710 = cljs.core.first(s1);
var G__13711 = cljs.core.first(s2);
var G__13712 = cljs.core.first(s3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13710,G__13711,G__13712) : f.call(null,G__13710,G__13711,G__13712));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else {
return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__13720__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,(function (){
var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});
return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__13660_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__13660_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__13720 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13720__delegate.call(this,f,c1,c2,c3,colls);};
G__13720.cljs$lang$maxFixedArity = 4;
G__13720.cljs$lang$applyTo = (function (arglist__13721){
var f = cljs.core.first(arglist__13721);
arglist__13721 = cljs.core.next(arglist__13721);
var c1 = cljs.core.first(arglist__13721);
arglist__13721 = cljs.core.next(arglist__13721);
var c2 = cljs.core.first(arglist__13721);
arglist__13721 = cljs.core.next(arglist__13721);
var c3 = cljs.core.first(arglist__13721);
var colls = cljs.core.rest(arglist__13721);
return G__13720__delegate(f,c1,c2,c3,colls);
});
G__13720.cljs$core$IFn$_invoke$arity$variadic = G__13720__delegate;
return G__13720;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__13730 = null;
var G__13730__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13730__1 = (function (result){
var G__13727 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13727) : rf.call(null,G__13727));
});
var G__13730__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
var nn = na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));
var result__$1 = (((n__$1 > (0)))?(function (){var G__13728 = result;
var G__13729 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13728,G__13729) : rf.call(null,G__13728,G__13729));
})():result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__13730 = function(result,input){
switch(arguments.length){
case 0:
return G__13730__0.call(this);
case 1:
return G__13730__1.call(this,result);
case 2:
return G__13730__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13730.cljs$core$IFn$_invoke$arity$0 = G__13730__0;
G__13730.cljs$core$IFn$_invoke$arity$1 = G__13730__1;
G__13730.cljs$core$IFn$_invoke$arity$2 = G__13730__2;
return G__13730;
})()
;})(na))
});
});
var take__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__13737 = null;
var G__13737__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13737__1 = (function (result){
var G__13734 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13734) : rf.call(null,G__13734));
});
var G__13737__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));

if((n__$1 > (0))){
return result;
} else {
var G__13735 = result;
var G__13736 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13735,G__13736) : rf.call(null,G__13735,G__13736));
}
});
G__13737 = function(result,input){
switch(arguments.length){
case 0:
return G__13737__0.call(this);
case 1:
return G__13737__1.call(this,result);
case 2:
return G__13737__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13737.cljs$core$IFn$_invoke$arity$0 = G__13737__0;
G__13737.cljs$core$IFn$_invoke$arity$1 = G__13737__1;
G__13737.cljs$core$IFn$_invoke$arity$2 = G__13737__2;
return G__13737;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(((n__$1 > (0))) && (s)){
var G__13738 = (n__$1 - (1));
var G__13739 = cljs.core.rest(s);
n__$1 = G__13738;
coll__$1 = G__13739;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){
return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq(coll);
var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));
while(true){
if(lead){
var G__13742 = cljs.core.next(s);
var G__13743 = cljs.core.next(lead);
s = G__13742;
lead = G__13743;
continue;
} else {
return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){
return (function (rf){
var da = cljs.core.volatile_BANG_(true);
return ((function (da){
return (function() {
var G__13756 = null;
var G__13756__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13756__1 = (function (result){
var G__13750 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13750) : rf.call(null,G__13750));
});
var G__13756__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref(da);
if(cljs.core.truth_((function (){var and__3616__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__3616__auto__)){
var G__13751 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13751) : pred.call(null,G__13751));
} else {
return and__3616__auto__;
}
})())){
return result;
} else {
cljs.core.vreset_BANG_(da,null);

var G__13752 = result;
var G__13753 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13752,G__13753) : rf.call(null,G__13752,G__13753));
}
});
G__13756 = function(result,input){
switch(arguments.length){
case 0:
return G__13756__0.call(this);
case 1:
return G__13756__1.call(this,result);
case 2:
return G__13756__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13756.cljs$core$IFn$_invoke$arity$0 = G__13756__0;
G__13756.cljs$core$IFn$_invoke$arity$1 = G__13756__1;
G__13756.cljs$core$IFn$_invoke$arity$2 = G__13756__2;
return G__13756;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3616__auto__ = s;
if(and__3616__auto__){
var G__13755 = cljs.core.first(s);
return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__13755) : pred__$1.call(null,G__13755));
} else {
return and__3616__auto__;
}
})())){
var G__13757 = pred__$1;
var G__13758 = cljs.core.rest(s);
pred__$1 = G__13757;
coll__$1 = G__13758;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else {
return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){
return iterate(f,(function (){var G__13767 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13767) : f.call(null,G__13767));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__13770__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__13770 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13770__delegate.call(this,c1,c2,colls);};
G__13770.cljs$lang$maxFixedArity = 2;
G__13770.cljs$lang$applyTo = (function (arglist__13771){
var c1 = cljs.core.first(arglist__13771);
arglist__13771 = cljs.core.next(arglist__13771);
var c2 = cljs.core.first(arglist__13771);
var colls = cljs.core.rest(arglist__13771);
return G__13770__delegate(c1,c2,colls);
});
G__13770.cljs$core$IFn$_invoke$arity$variadic = G__13770__delegate;
return G__13770;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var coll__$1 = temp__4124__auto__;
return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else {
if(cljs.core.seq(colls__$1)){
return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__13780__delegate = function (f,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__13780 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13780__delegate.call(this,f,colls);};
G__13780.cljs$lang$maxFixedArity = 1;
G__13780.cljs$lang$applyTo = (function (arglist__13781){
var f = cljs.core.first(arglist__13781);
var colls = cljs.core.rest(arglist__13781);
return G__13780__delegate(f,colls);
});
G__13780.cljs$core$IFn$_invoke$arity$variadic = G__13780__delegate;
return G__13780;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){
return (function (rf){
return (function() {
var G__13800 = null;
var G__13800__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13800__1 = (function (result){
var G__13794 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13794) : rf.call(null,G__13794));
});
var G__13800__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__13795 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13795) : pred.call(null,G__13795));
})())){
var G__13796 = result;
var G__13797 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13796,G__13797) : rf.call(null,G__13796,G__13797));
} else {
return result;
}
});
G__13800 = function(result,input){
switch(arguments.length){
case 0:
return G__13800__0.call(this);
case 1:
return G__13800__1.call(this,result);
case 2:
return G__13800__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13800.cljs$core$IFn$_invoke$arity$0 = G__13800__0;
G__13800.cljs$core$IFn$_invoke$arity$1 = G__13800__1;
G__13800.cljs$core$IFn$_invoke$arity$2 = G__13800__2;
return G__13800;
})()
});
});
var filter__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4515__auto___13801 = size;
var i_13802 = (0);
while(true){
if((i_13802 < n__4515__auto___13801)){
if(cljs.core.truth_((function (){var G__13798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13802);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13798) : pred.call(null,G__13798));
})())){
cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13802));
} else {
}

var G__13803 = (i_13802 + (1));
i_13802 = G__13803;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else {
var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((function (){var G__13799 = f;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13799) : pred.call(null,G__13799));
})())){
return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else {
return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else {
return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,(cljs.core.truth_((function (){var G__13810 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13810) : branch_QMARK_.call(null,G__13810));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__13811 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__13811) : children.call(null,G__13811));
})()], 0)):null));
}),null,null));
});
return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13812_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__13812_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){
if(!((to == null))){
if((function (){var G__13815 = to;
if(G__13815){
var bit__4302__auto__ = (G__13815.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4302__auto__) || (G__13815.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){
if((function (){var G__13816 = to;
if(G__13816){
var bit__4302__auto__ = (G__13816.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4302__auto__) || (G__13816.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__13818 = o;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13818) : f.call(null,G__13818));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__13819__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__13819 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13819__delegate.call(this,f,c1,c2,c3,colls);};
G__13819.cljs$lang$maxFixedArity = 4;
G__13819.cljs$lang$applyTo = (function (arglist__13820){
var f = cljs.core.first(arglist__13820);
arglist__13820 = cljs.core.next(arglist__13820);
var c1 = cljs.core.first(arglist__13820);
arglist__13820 = cljs.core.next(arglist__13820);
var c2 = cljs.core.first(arglist__13820);
arglist__13820 = cljs.core.next(arglist__13820);
var c3 = cljs.core.first(arglist__13820);
var colls = cljs.core.rest(arglist__13820);
return G__13819__delegate(f,c1,c2,c3,colls);
});
G__13819.cljs$core$IFn$_invoke$arity$variadic = G__13819__delegate;
return G__13819;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.truth_((function (){var G__13822 = o;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13822) : pred.call(null,G__13822));
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else {
return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else {
return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
if(!((function (){var G__13837 = m__$1;
if(G__13837){
var bit__4309__auto__ = (G__13837.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4309__auto__) || (G__13837.cljs$core$ILookup$)){
return true;
} else {
if((!G__13837.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__13837);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__13837);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__13838 = sentinel;
var G__13839 = m__$2;
var G__13840 = cljs.core.next(ks__$1);
sentinel = G__13838;
m__$1 = G__13839;
ks__$1 = G__13840;
continue;
}
}
} else {
return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__13841,v){
var vec__13846 = p__13841;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13846,(0),null);
var ks = cljs.core.nthnext(vec__13846,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__13847,f){
var vec__13885 = p__13847;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13885,(0),null);
var ks = cljs.core.nthnext(vec__13885,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13886) : f.call(null,G__13886));
})());
}
});
var update_in__4 = (function (m,p__13848,f,a){
var vec__13887 = p__13848;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13887,(0),null);
var ks = cljs.core.nthnext(vec__13887,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13889 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13888,G__13889) : f.call(null,G__13888,G__13889));
})());
}
});
var update_in__5 = (function (m,p__13849,f,a,b){
var vec__13890 = p__13849;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(0),null);
var ks = cljs.core.nthnext(vec__13890,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13892 = a;
var G__13893 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13891,G__13892,G__13893) : f.call(null,G__13891,G__13892,G__13893));
})());
}
});
var update_in__6 = (function (m,p__13850,f,a,b,c){
var vec__13894 = p__13850;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13894,(0),null);
var ks = cljs.core.nthnext(vec__13894,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13896 = a;
var G__13897 = b;
var G__13898 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13895,G__13896,G__13897,G__13898) : f.call(null,G__13895,G__13896,G__13897,G__13898));
})());
}
});
var update_in__7 = (function() { 
var G__13900__delegate = function (m,p__13851,f,a,b,c,args){
var vec__13899 = p__13851;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13899,(0),null);
var ks = cljs.core.nthnext(vec__13899,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__13900 = function (m,p__13851,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__13900__delegate.call(this,m,p__13851,f,a,b,c,args);};
G__13900.cljs$lang$maxFixedArity = 6;
G__13900.cljs$lang$applyTo = (function (arglist__13901){
var m = cljs.core.first(arglist__13901);
arglist__13901 = cljs.core.next(arglist__13901);
var p__13851 = cljs.core.first(arglist__13901);
arglist__13901 = cljs.core.next(arglist__13901);
var f = cljs.core.first(arglist__13901);
arglist__13901 = cljs.core.next(arglist__13901);
var a = cljs.core.first(arglist__13901);
arglist__13901 = cljs.core.next(arglist__13901);
var b = cljs.core.first(arglist__13901);
arglist__13901 = cljs.core.next(arglist__13901);
var c = cljs.core.first(arglist__13901);
var args = cljs.core.rest(arglist__13901);
return G__13900__delegate(m,p__13851,f,a,b,c,args);
});
G__13900.cljs$core$IFn$_invoke$arity$variadic = G__13900__delegate;
return G__13900;
})()
;
update_in = function(m,p__13851,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__13851,f);
case 4:
return update_in__4.call(this,m,p__13851,f,a);
case 5:
return update_in__5.call(this,m,p__13851,f,a,b);
case 6:
return update_in__6.call(this,m,p__13851,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__13851,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;
/**
* 'Updates' a value in an associative structure, where k is a
* key and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* structure.  If the key does not exist, nil is passed as the old value.
* @param {...*} var_args
*/
cljs.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13912) : f.call(null,G__13912));
})());
});
var update__4 = (function (m,k,f,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13914 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13913,G__13914) : f.call(null,G__13913,G__13914));
})());
});
var update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13916 = x;
var G__13917 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13915,G__13916,G__13917) : f.call(null,G__13915,G__13916,G__13917));
})());
});
var update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13919 = x;
var G__13920 = y;
var G__13921 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13918,G__13919,G__13920,G__13921) : f.call(null,G__13918,G__13919,G__13920,G__13921));
})());
});
var update__7 = (function() { 
var G__13922__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__13922 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__13922__delegate.call(this,m,k,f,x,y,z,more);};
G__13922.cljs$lang$maxFixedArity = 6;
G__13922.cljs$lang$applyTo = (function (arglist__13923){
var m = cljs.core.first(arglist__13923);
arglist__13923 = cljs.core.next(arglist__13923);
var k = cljs.core.first(arglist__13923);
arglist__13923 = cljs.core.next(arglist__13923);
var f = cljs.core.first(arglist__13923);
arglist__13923 = cljs.core.next(arglist__13923);
var x = cljs.core.first(arglist__13923);
arglist__13923 = cljs.core.next(arglist__13923);
var y = cljs.core.first(arglist__13923);
arglist__13923 = cljs.core.next(arglist__13923);
var z = cljs.core.first(arglist__13923);
var more = cljs.core.rest(arglist__13923);
return G__13922__delegate(m,k,f,x,y,z,more);
});
G__13922.cljs$core$IFn$_invoke$arity$variadic = G__13922__delegate;
return G__13922;
})()
;
update = function(m,k,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x);
case 5:
return update__5.call(this,m,k,f,x,y);
case 6:
return update__6.call(this,m,k,f,x,y,z);
default:
return update__7.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x,y,z, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 6;
update.cljs$lang$applyTo = update__7.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$6 = update__6;
update.cljs$core$IFn$_invoke$arity$variadic = update__7.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})

cljs.core.VectorNode.cljs$lang$type = true;

cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/VectorNode");
});

cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){
return (new cljs.core.VectorNode(edit,arr));
});

cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < (32))){
return (0);
} else {
return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === (0))){
return ret;
} else {
var embed = ret;
var r = cljs.core.pv_fresh_node(edit);
var _ = cljs.core.pv_aset(r,(0),embed);
var G__13924 = (ll - (5));
var G__13925 = r;
ll = G__13924;
ret = G__13925;
continue;
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node(parent);
var subidx = (((pv.cnt - (1)) >>> level) & (31));
if(((5) === level)){
cljs.core.pv_aset(ret,subidx,tailnode);

return ret;
} else {
var child = cljs.core.pv_aget(parent,subidx);
if(!((child == null))){
var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
} else {
var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){
throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__13930 = cljs.core.pv_aget(node,(0));
var G__13931 = (level - (5));
node = G__13930;
level = G__13931;
continue;
} else {
return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){
if((i >= cljs.core.tail_off(pv))){
return pv.tail;
} else {
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__13932 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__13933 = (level - (5));
node = G__13932;
level = G__13933;
continue;
} else {
return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((((0) <= i)) && ((i < pv.cnt))){
return cljs.core.unchecked_array_for(pv,i);
} else {
return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node(node);
if((level === (0))){
cljs.core.pv_aset(ret,(i & (31)),val);

return ret;
} else {
var subidx = ((i >>> level) & (31));
cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));

return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,new_child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,null);

return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.prototype.hasNext = (function (){
var self__ = this;
var this$ = this;
return (self__.i < self__.end);
});

cljs.core.RangedIterator.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(((self__.i - self__.base) === (32))){
self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);

self__.base = (self__.base + (32));
} else {
}

var ret = (self__.arr[(self__.i & (31))]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.RangedIterator.cljs$lang$type = true;

cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/RangedIterator");
});

cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){
return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});

cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){
var i = start;
return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});







/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__13943 = init__$2;
var G__13944 = (j + i);
var G__13945 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13943,G__13944,G__13945) : f.call(null,G__13943,G__13944,G__13945));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__13956 = (j + (1));
var G__13957 = init__$3;
j = G__13956;
init__$2 = G__13957;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__13946 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13946) : cljs.core.deref.call(null,G__13946));
} else {
var G__13958 = (i + len);
var G__13959 = init__$2;
i = G__13958;
init__$1 = G__13959;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(coll__$1) <= n)){
var new_tail = cljs.core.aclone(self__.tail);
(new_tail[(n & (31))] = val);

return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else {
if((n === self__.cnt)){
return cljs.core._conj(coll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});

cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1)))){
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else {
var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));
var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - (1));
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((other instanceof cljs.core.PersistentVector)){
if((self__.cnt === cljs.core.count(other))){
var me_iter = cljs.core._iterator(coll__$1);
var you_iter = cljs.core._iterator(other);
while(true){
if(cljs.core.truth_(me_iter.hasNext())){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_sequential(coll__$1,other);
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__13947 = self__.root;
return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__13947) : cljs.core.tv_editable_root.call(null,G__13947));
})(),(function (){var G__13948 = self__.tail;
return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__13948) : cljs.core.tv_editable_tail.call(null,G__13948));
})()));
});

cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__13949 = init__$2;
var G__13950 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13949,G__13950) : f.call(null,G__13949,G__13950));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__13960 = (j + (1));
var G__13961 = init__$3;
j = G__13960;
init__$2 = G__13961;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__13951 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13951) : cljs.core.deref.call(null,G__13951));
} else {
var G__13962 = (i + len);
var G__13963 = init__$2;
i = G__13962;
init__$1 = G__13963;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._assoc_n(coll__$1,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});

cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((self__.cnt <= (32))){
return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else {
var G__13952 = coll__$1;
var G__13953 = cljs.core.first_array_for_longvec(coll__$1);
var G__13954 = (0);
var G__13955 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13952,G__13953,G__13954,G__13955) : cljs.core.chunked_seq.call(null,G__13952,G__13953,G__13954,G__13955));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32))){
var len = self__.tail.length;
var new_tail = (new Array((len + (1))));
var n__4515__auto___13964 = len;
var i_13965 = (0);
while(true){
if((i_13965 < n__4515__auto___13964)){
(new_tail[i_13965] = (self__.tail[i_13965]));

var G__13966 = (i_13965 + (1));
i_13965 = G__13966;
continue;
} else {
}
break;
}

(new_tail[len] = o);

return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else {
var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r,(0),self__.root);

cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));

return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});

cljs.core.PersistentVector.prototype.call = (function() {
var G__13967 = null;
var G__13967__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__13967__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__13967 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13967__2.call(this,self__,k);
case 3:
return G__13967__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13967.cljs$core$IFn$_invoke$arity$2 = G__13967__2;
G__13967.cljs$core$IFn$_invoke$arity$3 = G__13967__3;
return G__13967;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args13942){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13942)));
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.PersistentVector.cljs$lang$type = true;

cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentVector");
});

cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){
return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});

cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));
if((l < (32))){
return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else {
var node = xs__$1.slice((0),(32));
var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = (32);
var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);
while(true){
if((i < l)){
var G__13968 = (i + (1));
var G__13969 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__13968;
out = G__13969;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0)))){
return cljs.core.PersistentVector.fromArray(args.arr,true);
} else {
return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__13970){
var args = cljs.core.seq(arglist__13970);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__13971 = self__.vec;
var G__13972 = self__.node;
var G__13973 = self__.i;
var G__13974 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13971,G__13972,G__13973,G__13974) : cljs.core.chunked_seq.call(null,G__13971,G__13972,G__13973,G__13974));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__13975 = self__.vec;
var G__13976 = (self__.i + self__.off);
var G__13977 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__13975,G__13976,G__13977) : cljs.core.subvec.call(null,G__13975,G__13976,G__13977));
})(),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__13978 = self__.vec;
var G__13979 = (self__.i + self__.off);
var G__13980 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__13978,G__13979,G__13980) : cljs.core.subvec.call(null,G__13978,G__13979,G__13980));
})(),f,start);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__13981 = self__.vec;
var G__13982 = self__.node;
var G__13983 = self__.i;
var G__13984 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13981,G__13982,G__13983,G__13984) : cljs.core.chunked_seq.call(null,G__13981,G__13982,G__13983,G__13984));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__13985 = self__.vec;
var G__13986 = cljs.core.unchecked_array_for(self__.vec,end);
var G__13987 = end;
var G__13988 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13985,G__13986,G__13987,G__13988) : cljs.core.chunked_seq.call(null,G__13985,G__13986,G__13987,G__13988));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
var G__13989 = self__.vec;
var G__13990 = self__.node;
var G__13991 = self__.i;
var G__13992 = self__.off;
var G__13993 = m;
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__13989,G__13990,G__13991,G__13992,G__13993) : cljs.core.chunked_seq.call(null,G__13989,G__13990,G__13991,G__13992,G__13993));
});

cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__13994 = self__.vec;
var G__13995 = cljs.core.unchecked_array_for(self__.vec,end);
var G__13996 = end;
var G__13997 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13994,G__13995,G__13996,G__13997) : cljs.core.chunked_seq.call(null,G__13994,G__13995,G__13996,G__13997));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){
return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Subvec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return not_found;
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});

cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var v_pos = (self__.start + n);
var G__13999 = self__.meta;
var G__14000 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);
var G__14001 = self__.start;
var G__14002 = (function (){var x__3945__auto__ = self__.end;
var y__3946__auto__ = (v_pos + (1));
return ((x__3945__auto__ > y__3946__auto__) ? x__3945__auto__ : y__3946__auto__);
})();
var G__14003 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__13999,G__14000,G__14001,G__14002,G__14003) : cljs.core.build_subvec.call(null,G__13999,G__14000,G__14001,G__14002,G__14003));
});

cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.end - self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});

cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.start === self__.end)){
throw (new Error("Can't pop empty vector"));
} else {
var G__14004 = self__.meta;
var G__14005 = self__.v;
var G__14006 = self__.start;
var G__14007 = (self__.end - (1));
var G__14008 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14004,G__14005,G__14006,G__14007,G__14008) : cljs.core.build_subvec.call(null,G__14004,G__14005,G__14006,G__14007,G__14008));
}
});

cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(!((self__.start === self__.end))){
return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else {
return null;
}
});

cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});

cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var coll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n(coll__$1,key,val);
} else {
throw (new Error("Subvec's key for assoc must be a number."));
}
});

cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){
if((i === self__.end)){
return null;
} else {
return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;
return subvec_seq(self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
var G__14010 = meta__$1;
var G__14011 = self__.v;
var G__14012 = self__.start;
var G__14013 = self__.end;
var G__14014 = self__.__hash;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14010,G__14011,G__14012,G__14013,G__14014) : cljs.core.build_subvec.call(null,G__14010,G__14011,G__14012,G__14013,G__14014));
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__14015 = self__.meta;
var G__14016 = cljs.core._assoc_n(self__.v,self__.end,o);
var G__14017 = self__.start;
var G__14018 = (self__.end + (1));
var G__14019 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14015,G__14016,G__14017,G__14018,G__14019) : cljs.core.build_subvec.call(null,G__14015,G__14016,G__14017,G__14018,G__14019));
});

cljs.core.Subvec.prototype.call = (function() {
var G__14020 = null;
var G__14020__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__14020__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__14020 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14020__2.call(this,self__,k);
case 3:
return G__14020__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14020.cljs$core$IFn$_invoke$arity$2 = G__14020__2;
G__14020.cljs$core$IFn$_invoke$arity$3 = G__14020__3;
return G__14020;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args13998){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13998)));
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.Subvec.cljs$lang$type = true;

cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__14021 = meta;
var G__14022 = v.v;
var G__14023 = (v.start + start);
var G__14024 = (v.start + end);
var G__14025 = __hash;
meta = G__14021;
v = G__14022;
start = G__14023;
end = G__14024;
__hash = G__14025;
continue;
} else {
var c = cljs.core.count(v);
if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c))){
throw (new Error("Index out of bounds"));
} else {
}

return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit)){
return node;
} else {
return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode((function (){var obj14032 = {};
return obj14032;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tl,(0),ret,(0),tl.length);

return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx = (((tv.cnt - (1)) >>> level) & (31));
cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);
if(!((child == null))){
return tv_push_tail(tv,(level - (5)),child,tail_node);
} else {
return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));

return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx = (((tv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,new_child);

return node__$1;
}
} else {
if((subidx === (0))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,null);

return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){
if((i >= cljs.core.tail_off(tv))){
return tv.tail;
} else {
var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > (0))){
var G__14040 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__14041 = (level - (5));
node = G__14040;
level = G__14041;
continue;
} else {
return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.prototype.call = (function() {
var G__14045 = null;
var G__14045__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14045__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14045 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14045__2.call(this,self__,k);
case 3:
return G__14045__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14045.cljs$core$IFn$_invoke$arity$2 = G__14045__2;
G__14045.cljs$core$IFn$_invoke$arity$3 = G__14045__3;
return G__14045;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args14042){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14042)));
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(tcoll__$1) <= n)){
(self__.tail[(n & (31))] = val);

return tcoll__$1;
} else {
var new_root = ((function (tcoll__$1){
return (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);
if((level === (0))){
cljs.core.pv_aset(node__$1,(n & (31)),val);

return node__$1;
} else {
var subidx = ((n >>> level) & (31));
cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));

return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);
self__.root = new_root;

return tcoll__$1;
}
} else {
if((n === self__.cnt)){
return cljs.core._conj_BANG_(tcoll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

return tcoll__$1;
} else {
if((((self__.cnt - (1)) & (31)) > (0))){
self__.cnt = (self__.cnt - (1));

return tcoll__$1;
} else {
var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));
var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);
if(!((nr == null))){
return nr;
} else {
return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));
self__.root = new_root__$1;

self__.shift = (self__.shift - (5));

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
} else {
self__.root = new_root;

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
}

}
}
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else {
throw (new Error("TransientVector's key for assoc! must be a number."));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32))){
(self__.tail[(self__.cnt & (31))] = o);

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

if(((self__.cnt >>> (5)) > ((1) << self__.shift))){
var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_shift = (self__.shift + (5));
(new_root_array[(0)] = self__.root);

(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));

self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));

self__.shift = new_shift;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));
var trimmed_tail = (new Array(len));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);

return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientVector.cljs$lang$type = true;

cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/TransientVector");
});

cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){
return (new cljs.core.TransientVector(cnt,shift,root,tail));
});


/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else {
if((self__.rear == null)){
return cljs.core._empty(coll__$1);
} else {
return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentQueueSeq.cljs$lang$type = true;

cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueue.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else {
return coll__$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.PersistentQueue.EMPTY;
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.rest(cljs.core.seq(coll__$1));
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var rear__$1 = cljs.core.seq(self__.rear);
if(cljs.core.truth_((function (){var or__3628__auto__ = self__.front;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return rear__$1;
}
})())){
return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else {
return null;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3628__auto__ = self__.rear;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});

cljs.core.PersistentQueue.cljs$lang$type = true;

cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return false;
});

cljs.core.NeverEquiv.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NeverEquiv.cljs$lang$type = true;

cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/NeverEquiv");
});

cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){
return (new cljs.core.NeverEquiv());
});

cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = (0);
while(true){
if((i < len)){
if((k === (array[i]))){
return i;
} else {
var G__14046 = (i + incr);
i = G__14046;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash(a);
var b__$1 = cljs.core.hash(b);
if((a__$1 < b__$1)){
return (-1);
} else {
if((a__$1 > b__$1)){
return (1);
} else {
return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta(m);
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var k__$1 = (ks[i]);
var G__14047 = (i + (1));
var G__14048 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__14047;
out = G__14048;
continue;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = (function (){var obj14052 = {};
return obj14052;
})();
var l = ks.length;
var i_14053 = (0);
while(true){
if((i_14053 < l)){
var k_14054 = (ks[i_14053]);
(new_obj[k_14054] = (obj[k_14054]));

var G__14055 = (i_14053 + (1));
i_14053 = G__14055;
continue;
} else {
}
break;
}

return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ObjMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = (function (){var G__14059 = k;
return goog.isString(G__14059);
})();
if(cljs.core.truth_(and__3616__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3616__auto__;
}
})())){
return (self__.strobj[k]);
} else {
return not_found;
}
});

cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq(keys__$1)){
var k = cljs.core.first(keys__$1);
var init__$2 = (function (){var G__14060 = init__$1;
var G__14061 = k;
var G__14062 = (self__.strobj[k]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14060,G__14061,G__14062) : f.call(null,G__14060,G__14061,G__14062));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14063 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14063) : cljs.core.deref.call(null,G__14063));
} else {
var G__14069 = cljs.core.rest(keys__$1);
var G__14070 = init__$2;
keys__$1 = G__14069;
init__$1 = G__14070;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.keys.length;
});

cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});

cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});

cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = (function (){var G__14065 = k;
return goog.isString(G__14065);
})();
if(cljs.core.truth_(and__3616__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3616__auto__;
}
})())){
var new_keys = cljs.core.aclone(self__.keys);
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));

delete new_strobj[k];

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else {
return coll__$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var G__14066 = k;
return goog.isString(G__14066);
})())){
if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD))){
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else {
if(!((cljs.core.scan_array((1),k,self__.keys) == null))){
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
(new_strobj[k] = v);

return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else {
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
var new_keys = cljs.core.aclone(self__.keys);
(new_strobj[k] = v);

new_keys.push(k);

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else {
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = (function (){var G__14068 = k;
return goog.isString(G__14068);
})();
if(cljs.core.truth_(and__3616__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.keys.length > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__14056_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__14056_SHARP_,(self__.strobj[p1__14056_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else {
return null;
}
});

cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});

cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});

cljs.core.ObjMap.prototype.call = (function() {
var G__14071 = null;
var G__14071__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14071__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14071 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14071__2.call(this,self__,k);
case 3:
return G__14071__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14071.cljs$core$IFn$_invoke$arity$2 = G__14071__2;
G__14071.cljs$core$IFn$_invoke$arity$3 = G__14071__3;
return G__14071;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args14057){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14057)));
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.ObjMap.cljs$lang$type = true;

cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj14073 = {};
return obj14073;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var vec__14074 = cljs.core.first(self__.s);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(1),null);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [k,v]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ES6EntriesIterator");
});

cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){
return (new cljs.core.ES6EntriesIterator(s));
});

cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){
return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [x,x]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ES6SetEntriesIterator");
});

cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){
return (new cljs.core.ES6SetEntriesIterator(s));
});

cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){
return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(((arr[i]) == null)){
return i;
} else {
var G__14075 = (i + (2));
i = G__14075;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.fqn;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})()){
return i;
} else {
var G__14076 = (i + (2));
i = G__14076;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.str;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})()){
return i;
} else {
var G__14077 = (i + (2));
i = G__14077;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((k === (arr[i]))){
return i;
} else {
var G__14078 = (i + (2));
i = G__14078;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i]))){
return i;
} else {
var G__14079 = (i + (2));
i = G__14079;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
if((k instanceof cljs.core.Keyword)){
return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else {
if(cljs.core.truth_((function (){var or__3628__auto__ = (function (){var G__14083 = k;
return goog.isString(G__14083);
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return typeof k === 'number';
}
})())){
return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else {
if((k == null)){
return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else {
return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){
var arr = m.arr;
var l = arr.length;
var narr = (new Array((l + (2))));
var i_14084 = (0);
while(true){
if((i_14084 < l)){
(narr[i_14084] = (arr[i_14084]));

var G__14085 = (i_14084 + (1));
i_14084 = G__14085;
continue;
} else {
}
break;
}

(narr[l] = k);

(narr[(l + (1))] = v);

return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return null;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return ((self__.arr.length - self__.i) / (2));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){
if((i <= (arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else {
return null;
}
});


/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs.core.PersistentArrayMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
self__.i = (self__.i + (2));

return ret;
});

cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentArrayMapIterator");
});

cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){
return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});


/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14087 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14087) : cljs.core.keys.call(null,G__14087));
})());
});

cljs.core.PersistentArrayMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentArrayMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14088 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14088) : cljs.core.vals.call(null,G__14088));
})());
});

cljs.core.PersistentArrayMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentArrayMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14089 = cljs.core.seq(coll);
var chunk__14090 = null;
var count__14091 = (0);
var i__14092 = (0);
while(true){
if((i__14092 < count__14091)){
var vec__14093 = chunk__14090.cljs$core$IIndexed$_nth$arity$2(null,i__14092);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14093,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14093,(1),null);
var G__14094_14107 = v;
var G__14095_14108 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14094_14107,G__14095_14108) : f.call(null,G__14094_14107,G__14095_14108));

var G__14109 = seq__14089;
var G__14110 = chunk__14090;
var G__14111 = count__14091;
var G__14112 = (i__14092 + (1));
seq__14089 = G__14109;
chunk__14090 = G__14110;
count__14091 = G__14111;
i__14092 = G__14112;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14089);
if(temp__4126__auto__){
var seq__14089__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14089__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__14089__$1);
var G__14113 = cljs.core.chunk_rest(seq__14089__$1);
var G__14114 = c__4415__auto__;
var G__14115 = cljs.core.count(c__4415__auto__);
var G__14116 = (0);
seq__14089 = G__14113;
chunk__14090 = G__14114;
count__14091 = G__14115;
i__14092 = G__14116;
continue;
} else {
var vec__14096 = cljs.core.first(seq__14089__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14096,(1),null);
var G__14097_14117 = v;
var G__14098_14118 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14097_14117,G__14098_14118) : f.call(null,G__14097_14117,G__14098_14118));

var G__14119 = cljs.core.next(seq__14089__$1);
var G__14120 = null;
var G__14121 = (0);
var G__14122 = (0);
seq__14089 = G__14119;
chunk__14090 = G__14120;
count__14091 = G__14121;
i__14092 = G__14122;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var G__14099 = init__$1;
var G__14100 = (self__.arr[i]);
var G__14101 = (self__.arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14099,G__14100,G__14101) : f.call(null,G__14099,G__14100,G__14101));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14102 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14102) : cljs.core.deref.call(null,G__14102));
} else {
var G__14123 = (i + (2));
var G__14124 = init__$2;
i = G__14123;
init__$1 = G__14124;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__14103 = other;
if(G__14103){
var bit__4302__auto__ = (G__14103.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4302__auto__) || (G__14103.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
var alen = self__.arr.length;
var other__$1 = other;
if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null))){
var i = (0);
while(true){
if((i < alen)){
var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);
if(!((v === cljs.core.lookup_sentinel))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v)){
var G__14125 = (i + (2));
i = G__14125;
continue;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_map(coll__$1,other);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientArrayMap((function (){var obj14105 = {};
return obj14105;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx >= (0))){
var len = self__.arr.length;
var new_len = (len - (2));
if((new_len === (0))){
return cljs.core._empty(coll__$1);
} else {
var new_arr = (new Array(new_len));
var s = (0);
var d = (0);
while(true){
if((s >= len)){
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s]))){
var G__14126 = (s + (2));
var G__14127 = d;
s = G__14126;
d = G__14127;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__14128 = (s + (2));
var G__14129 = (d + (2));
s = G__14128;
d = G__14129;
continue;

}
}
break;
}
}
} else {
return coll__$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else {
return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else {
if((v === (self__.arr[(idx + (1))]))){
return coll__$1;
} else {
var arr__$1 = (function (){var G__14106 = cljs.core.aclone(self__.arr);
(G__14106[(idx + (1))] = v);

return G__14106;
})();
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__14130 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__14131 = cljs.core.next(es);
ret = G__14130;
es = G__14131;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__14132 = null;
var G__14132__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14132__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14132 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14132__2.call(this,self__,k);
case 3:
return G__14132__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14132.cljs$core$IFn$_invoke$arity$2 = G__14132__2;
G__14132.cljs$core$IFn$_invoke$arity$3 = G__14132__3;
return G__14132;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args14086){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14086)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentArrayMap.cljs$lang$type = true;

cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentArrayMap");
});

cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){
return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});

cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){
var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));
if(no_check){
var cnt = (arr__$1.length / (2));
return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else {
var len = arr__$1.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__14133 = (i + (2));
var G__14134 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__14133;
ret = G__14134;
continue;
} else {
return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx >= (0))){
(self__.arr[idx] = (self__.arr[(self__.len - (2))]));

(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));

var G__14135_14143 = self__.arr;
G__14135_14143.pop();

G__14135_14143.pop();


self__.len = (self__.len - (2));
} else {
}

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx === (-1))){
if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
self__.len = (self__.len + (2));

self__.arr.push(key);

self__.arr.push(val);

return tcoll__$1;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__14136 = self__.len;
var G__14137 = self__.arr;
return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__14136,G__14137) : cljs.core.array__GT_transient_hash_map.call(null,G__14136,G__14137));
})(),key,val);
}
} else {
if((val === (self__.arr[(idx + (1))]))){
return tcoll__$1;
} else {
(self__.arr[(idx + (1))] = val);

return tcoll__$1;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
if((function (){var G__14138 = o;
if(G__14138){
var bit__4309__auto__ = (G__14138.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4309__auto__) || (G__14138.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__14138.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14138);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14138);
}
})()){
return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__14139 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14139) : cljs.core.key.call(null,G__14139));
})(),(function (){var G__14140 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14140) : cljs.core.val.call(null,G__14140));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__14144 = cljs.core.next(es);
var G__14145 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__14141 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14141) : cljs.core.key.call(null,G__14141));
})(),(function (){var G__14142 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14142) : cljs.core.val.call(null,G__14142));
})());
es = G__14144;
tcoll__$2 = G__14145;
continue;
} else {
return tcoll__$2;
}
break;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
self__.editable_QMARK_ = false;

return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
return cljs.core.quot(self__.len,(2));
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientArrayMap.cljs$lang$type = true;

cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__14146 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__14147 = (i + (2));
out = G__14146;
i = G__14147;
continue;
} else {
return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})

cljs.core.Box.cljs$lang$type = true;

cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Box");
});

cljs.core.__GT_Box = (function __GT_Box(val){
return (new cljs.core.Box(val));
});






cljs.core.key_test = (function key_test(key,other){
if((key === other)){
return true;
} else {
if(cljs.core.keyword_identical_QMARK_(key,other)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__14150 = cljs.core.aclone(arr);
(G__14150[i] = a);

return G__14150;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__14151 = cljs.core.aclone(arr);
(G__14151[i] = a);

(G__14151[j] = b);

return G__14151;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = (new Array((arr.length - (2))));
cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));

cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));

return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

(editable.arr[j] = b);

return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var k = (arr[i]);
if(!((k == null))){
var G__14156 = init__$1;
var G__14157 = k;
var G__14158 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14156,G__14157,G__14158) : f.call(null,G__14156,G__14157,G__14158));
} else {
var node = (arr[(i + (1))]);
if(!((node == null))){
return node.kv_reduce(f,init__$1);
} else {
return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14159 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14159) : cljs.core.deref.call(null,G__14159));
} else {
var G__14160 = (i + (2));
var G__14161 = init__$2;
i = G__14160;
init__$1 = G__14161;
continue;
}
} else {
return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var n = cljs.core.bit_count(self__.bitmap);
var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));

return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else {
if((self__.bitmap === bit)){
return null;
} else {
return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
(removed_leaf_QMARK_[(0)] = true);

return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit)){
return null;
} else {
var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);

cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));

(earr[(len - (2))] = null);

(earr[(len - (1))] = null);

return editable;
}
});

cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__14162 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__14162) : cljs.core.create_inode_seq.call(null,G__14162));
});

cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return val_or_node;
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((((2) * n) < self__.arr.length)){
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;

cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));

(earr[((2) * idx)] = key);

(earr[(((2) * idx) + (1))] = val);

editable.bitmap = (editable.bitmap | bit);

return editable;
} else {
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_14176 = (0);
var j_14177 = (0);
while(true){
if((i_14176 < (32))){
if((((self__.bitmap >>> i_14176) & (1)) === (0))){
var G__14178 = (i_14176 + (1));
var G__14179 = j_14177;
i_14176 = G__14178;
j_14177 = G__14179;
continue;
} else {
(nodes[i_14176] = ((!(((self__.arr[j_14177]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_14177])),(self__.arr[j_14177]),(self__.arr[(j_14177 + (1))]),added_leaf_QMARK_):(self__.arr[(j_14177 + (1))])));

var G__14180 = (i_14176 + (1));
var G__14181 = (j_14177 + (2));
i_14176 = G__14180;
j_14177 = G__14181;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (4)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;

editable.bitmap = (editable.bitmap | bit);

return editable;

}
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else {
added_leaf_QMARK_.val = true;

return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__14163 = edit__$1;
var G__14164 = (shift + (5));
var G__14165 = key_or_nil;
var G__14166 = val_or_node;
var G__14167 = hash;
var G__14168 = key;
var G__14169 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__14163,G__14164,G__14165,G__14166,G__14167,G__14168,G__14169) : cljs.core.create_node.call(null,G__14163,G__14164,G__14165,G__14166,G__14167,G__14168,G__14169));
})());

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_14182 = (0);
var j_14183 = (0);
while(true){
if((i_14182 < (32))){
if((((self__.bitmap >>> i_14182) & (1)) === (0))){
var G__14184 = (i_14182 + (1));
var G__14185 = j_14183;
i_14182 = G__14184;
j_14183 = G__14185;
continue;
} else {
(nodes[i_14182] = ((!(((self__.arr[j_14183]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_14183])),(self__.arr[j_14183]),(self__.arr[(j_14183 + (1))]),added_leaf_QMARK_):(self__.arr[(j_14183 + (1))])));

var G__14186 = (i_14182 + (1));
var G__14187 = (j_14183 + (2));
i_14182 = G__14186;
j_14183 = G__14187;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else {
added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__14170 = (shift + (5));
var G__14171 = key_or_nil;
var G__14172 = val_or_node;
var G__14173 = hash;
var G__14174 = key;
var G__14175 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__14170,G__14171,G__14172,G__14173,G__14174,G__14175) : cljs.core.create_node.call(null,G__14170,G__14171,G__14172,G__14173,G__14174,G__14175));
})())));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without((shift + (5)),hash,key);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else {
if((self__.bitmap === bit)){
return null;
} else {
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.cljs$lang$type = true;

cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/BitmapIndexedNode");
});

cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){
return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});

cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = arr.length;
var new_arr = (new Array(((2) * (array_node.cnt - (1)))));
var i = (0);
var j = (1);
var bitmap = (0);
while(true){
if((i < len)){
if((!((i === idx))) && (!(((arr[i]) == null)))){
(new_arr[j] = (arr[i]));

var G__14188 = (i + (1));
var G__14189 = (j + (2));
var G__14190 = (bitmap | ((1) << i));
i = G__14188;
j = G__14189;
bitmap = G__14190;
continue;
} else {
var G__14191 = (i + (1));
var G__14192 = j;
var G__14193 = bitmap;
i = G__14191;
j = G__14192;
bitmap = G__14193;
continue;
}
} else {
return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});

cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return inode;
} else {
var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,edit__$1,idx);
} else {
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - (1));

return editable;
}
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});

cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__14194 = self__.arr;
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__14194) : cljs.core.create_array_node_seq.call(null,G__14194));
});

cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var node = (self__.arr[i]);
if(!((node == null))){
var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14195 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14195) : cljs.core.deref.call(null,G__14195));
} else {
var G__14196 = (i + (1));
var G__14197 = init__$2;
i = G__14196;
init__$1 = G__14197;
continue;
}
} else {
var G__14198 = (i + (1));
var G__14199 = init__$1;
i = G__14198;
init__$1 = G__14199;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + (1));

return editable;
} else {
var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});

cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else {
var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});

cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_find((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
var n = node.inode_without((shift + (5)),hash,key);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,null,idx);
} else {
return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else {
return inode;
}
});

cljs.core.ArrayNode.cljs$lang$type = true;

cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ArrayNode");
});

cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){
return (new cljs.core.ArrayNode(edit,cnt,arr));
});

cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = ((2) * cnt);
var i = (0);
while(true){
if((i < lim)){
if(cljs.core.key_test(key,(arr[i]))){
return i;
} else {
var G__14200 = (i + (2));
i = G__14200;
continue;
}
} else {
return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var new_arr = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));

return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});

cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_[(0)] = true);

if((self__.cnt === (1))){
return null;
} else {
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));

(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));

(earr[(((2) * self__.cnt) - (1))] = null);

(earr[(((2) * self__.cnt) - (2))] = null);

editable.cnt = (editable.cnt - (1));

return editable;
}
}
});

cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__14201 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__14201) : cljs.core.create_inode_seq.call(null,G__14201));
});

cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
if((self__.arr.length > ((2) * self__.cnt))){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);
added_leaf_QMARK_.val = true;

editable.cnt = (editable.cnt + (1));

return editable;
} else {
var len = self__.arr.length;
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else {
if(((self__.arr[(idx + (1))]) === val)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else {
return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else {
return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit)){
self__.arr = array;

self__.cnt = count;

return inode;
} else {
return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});

cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
if((self__.cnt === (1))){
return null;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});

cljs.core.HashCollisionNode.cljs$lang$type = true;

cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/HashCollisionNode");
});

cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
var G__14202 = self__.nodes;
var G__14203 = (self__.i + (2));
var G__14204 = null;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__14202,G__14203,G__14204) : cljs.core.create_inode_seq.call(null,G__14202,G__14203,G__14204));
} else {
var G__14205 = self__.nodes;
var G__14206 = self__.i;
var G__14207 = cljs.core.next(self__.s);
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__14205,G__14206,G__14207) : cljs.core.create_inode_seq.call(null,G__14205,G__14206,G__14207));
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.NodeSeq.cljs$lang$type = true;

cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
if(!(((nodes[j]) == null))){
return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else {
var temp__4124__auto__ = (nodes[(j + (1))]);
if(cljs.core.truth_(temp__4124__auto__)){
var node = temp__4124__auto__;
var temp__4124__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var node_seq = temp__4124__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else {
var G__14211 = (j + (2));
j = G__14211;
continue;
}
} else {
var G__14212 = (j + (2));
j = G__14212;
continue;
}
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.s);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__14213 = null;
var G__14214 = self__.nodes;
var G__14215 = self__.i;
var G__14216 = cljs.core.next(self__.s);
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__14213,G__14214,G__14215,G__14216) : cljs.core.create_array_node_seq.call(null,G__14213,G__14214,G__14215,G__14216));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ArrayNodeSeq.cljs$lang$type = true;

cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
var temp__4124__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4124__auto__)){
var nj = temp__4124__auto__;
var temp__4124__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var ns = temp__4124__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else {
var G__14221 = (j + (1));
j = G__14221;
continue;
}
} else {
var G__14222 = (j + (1));
j = G__14222;
continue;
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14224 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14224) : cljs.core.keys.call(null,G__14224));
})());
});

cljs.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14225 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14225) : cljs.core.vals.call(null,G__14225));
})());
});

cljs.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14226 = cljs.core.seq(coll);
var chunk__14227 = null;
var count__14228 = (0);
var i__14229 = (0);
while(true){
if((i__14229 < count__14228)){
var vec__14230 = chunk__14227.cljs$core$IIndexed$_nth$arity$2(null,i__14229);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14230,(1),null);
var G__14231_14242 = v;
var G__14232_14243 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14231_14242,G__14232_14243) : f.call(null,G__14231_14242,G__14232_14243));

var G__14244 = seq__14226;
var G__14245 = chunk__14227;
var G__14246 = count__14228;
var G__14247 = (i__14229 + (1));
seq__14226 = G__14244;
chunk__14227 = G__14245;
count__14228 = G__14246;
i__14229 = G__14247;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14226);
if(temp__4126__auto__){
var seq__14226__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14226__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__14226__$1);
var G__14248 = cljs.core.chunk_rest(seq__14226__$1);
var G__14249 = c__4415__auto__;
var G__14250 = cljs.core.count(c__4415__auto__);
var G__14251 = (0);
seq__14226 = G__14248;
chunk__14227 = G__14249;
count__14228 = G__14250;
i__14229 = G__14251;
continue;
} else {
var vec__14233 = cljs.core.first(seq__14226__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(1),null);
var G__14234_14252 = v;
var G__14235_14253 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14234_14252,G__14235_14253) : f.call(null,G__14234_14252,G__14235_14253));

var G__14254 = cljs.core.next(seq__14226__$1);
var G__14255 = null;
var G__14256 = (0);
var G__14257 = (0);
seq__14226 = G__14254;
chunk__14227 = G__14255;
count__14228 = G__14256;
i__14229 = G__14257;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__14236 = init;
var G__14237 = null;
var G__14238 = self__.nil_val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14236,G__14237,G__14238) : f.call(null,G__14236,G__14237,G__14238));
})():init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__14239 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14239) : cljs.core.deref.call(null,G__14239));
} else {
if(!((self__.root == null))){
return self__.root.kv_reduce(f,init__$1);
} else {
return init__$1;

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashMap((function (){var obj14241 = {};
return obj14241;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else {
return coll__$1;
}
} else {
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if((self__.has_nil_QMARK_) && ((v === self__.nil_val))){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
return self__.has_nil_QMARK_;
} else {
if((self__.root == null)){
return false;
} else {
return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else {
return s;
}
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__14258 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__14259 = cljs.core.next(es);
ret = G__14258;
es = G__14259;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentHashMap.prototype.call = (function() {
var G__14260 = null;
var G__14260__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14260__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14260 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14260__2.call(this,self__,k);
case 3:
return G__14260__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14260.cljs$core$IFn$_invoke$arity$2 = G__14260__2;
G__14260.cljs$core$IFn$_invoke$arity$3 = G__14260__3;
return G__14260;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args14223){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14223)));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashMap.cljs$lang$type = true;

cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentHashMap");
});

cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});

cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var G__14261 = (i + (1));
var G__14262 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__14261;
out = G__14262;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return null;
}
} else {
if((self__.root == null)){
return null;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((function (){var G__14263 = o;
if(G__14263){
var bit__4309__auto__ = (G__14263.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4309__auto__) || (G__14263.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__14263.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14263);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14263);
}
})()){
return tcoll.assoc_BANG_((function (){var G__14264 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14264) : cljs.core.key.call(null,G__14264));
})(),(function (){var G__14265 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14265) : cljs.core.val.call(null,G__14265));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__14268 = cljs.core.next(es);
var G__14269 = tcoll__$1.assoc_BANG_((function (){var G__14266 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14266) : cljs.core.key.call(null,G__14266));
})(),(function (){var G__14267 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14267) : cljs.core.val.call(null,G__14267));
})());
es = G__14268;
tcoll__$1 = G__14269;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
});

cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if((self__.nil_val === v)){
} else {
self__.nil_val = v;
}

if(self__.has_nil_QMARK_){
} else {
self__.count = (self__.count + (1));

self__.has_nil_QMARK_ = true;
}

return tcoll;
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(added_leaf_QMARK_.val){
self__.count = (self__.count + (1));
} else {
}

return tcoll;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if(self__.has_nil_QMARK_){
self__.has_nil_QMARK_ = false;

self__.nil_val = null;

self__.count = (self__.count - (1));

return tcoll;
} else {
return tcoll;
}
} else {
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(cljs.core.truth_((removed_leaf_QMARK_[(0)]))){
self__.count = (self__.count - (1));
} else {
}

return tcoll;
}
}
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
self__.edit = null;

return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientHashMap.cljs$lang$type = true;

cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__14270 = ((ascending_QMARK_)?t.left:t.right);
var G__14271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__14270;
stack__$1 = G__14271;
continue;
} else {
return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt < (0))){
return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else {
return self__.cnt;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek(self__.stack);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.first(self__.stack);
var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null))){
return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});

cljs.core.balance_left = (function balance_left(key,val,ins,right){
if((ins instanceof cljs.core.RedNode)){
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else {
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if((ins instanceof cljs.core.RedNode)){
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else {
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else {
if((right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right(key,val,del,right.redden());
} else {
if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else {
if((left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left(key,val,left.redden(),del);
} else {
if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__14284 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14284) : cljs.core.deref.call(null,G__14284));
} else {
var init__$2 = (function (){var G__14285 = init__$1;
var G__14286 = node.key;
var G__14287 = node.val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14285,G__14286,G__14287) : f.call(null,G__14285,G__14286,G__14287));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14288 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14288) : cljs.core.deref.call(null,G__14288));
} else {
var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3)){
var G__14289 = init__$3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14289) : cljs.core.deref.call(null,G__14289));
} else {
return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});

cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});

cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});

cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});

cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});

cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});

cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.BlackNode.prototype.call = (function() {
var G__14291 = null;
var G__14291__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14291__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14291 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14291__2.call(this,self__,k);
case 3:
return G__14291__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14291.cljs$core$IFn$_invoke$arity$2 = G__14291__2;
G__14291.cljs$core$IFn$_invoke$arity$3 = G__14291__3;
return G__14291;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args14290){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14290)));
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.BlackNode.cljs$lang$type = true;

cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});

cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});

cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});

cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else {
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});

cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else {
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});

cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});

cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.RedNode.prototype.call = (function() {
var G__14293 = null;
var G__14293__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14293__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14293 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14293__2.call(this,self__,k);
case 3:
return G__14293__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14293.cljs$core$IFn$_invoke$arity$2 = G__14293__2;
G__14293.cljs$core$IFn$_invoke$arity$3 = G__14293__3;
return G__14293;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args14292){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14292)));
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.RedNode.cljs$lang$type = true;

cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = (function (){var G__14306 = k;
var G__14307 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14306,G__14307) : comp.call(null,G__14306,G__14307));
})();
if((c === (0))){
(found[(0)] = tree);

return null;
} else {
if((c < (0))){
var ins = tree_map_add(comp,tree.left,k,v,found);
if(!((ins == null))){
return tree.add_left(ins);
} else {
return null;
}
} else {
var ins = tree_map_add(comp,tree.right,k,v,found);
if(!((ins == null))){
return tree.add_right(ins);
} else {
return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
if((left instanceof cljs.core.RedNode)){
if((right instanceof cljs.core.RedNode)){
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else {
if((right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else {
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null))){
var c = (function (){var G__14326 = k;
var G__14327 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14326,G__14327) : comp.call(null,G__14326,G__14327));
})();
if((c === (0))){
(found[(0)] = tree);

return cljs.core.tree_map_append(tree.left,tree.right);
} else {
if((c < (0))){
var del = tree_map_remove(comp,tree.left,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else {
return null;
}
} else {
var del = tree_map_remove(comp,tree.right,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else {
return null;
}

}
}
} else {
return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = (function (){var G__14338 = k;
var G__14339 = tk;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14338,G__14339) : comp.call(null,G__14338,G__14339));
})();
if((c === (0))){
return tree.replace(tk,v,tree.left,tree.right);
} else {
if((c < (0))){
return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else {
return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14341 = cljs.core.seq(coll);
var chunk__14342 = null;
var count__14343 = (0);
var i__14344 = (0);
while(true){
if((i__14344 < count__14343)){
var vec__14345 = chunk__14342.cljs$core$IIndexed$_nth$arity$2(null,i__14344);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14345,(1),null);
var G__14346_14358 = v;
var G__14347_14359 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14346_14358,G__14347_14359) : f.call(null,G__14346_14358,G__14347_14359));

var G__14360 = seq__14341;
var G__14361 = chunk__14342;
var G__14362 = count__14343;
var G__14363 = (i__14344 + (1));
seq__14341 = G__14360;
chunk__14342 = G__14361;
count__14343 = G__14362;
i__14344 = G__14363;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14341);
if(temp__4126__auto__){
var seq__14341__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14341__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__14341__$1);
var G__14364 = cljs.core.chunk_rest(seq__14341__$1);
var G__14365 = c__4415__auto__;
var G__14366 = cljs.core.count(c__4415__auto__);
var G__14367 = (0);
seq__14341 = G__14364;
chunk__14342 = G__14365;
count__14343 = G__14366;
i__14344 = G__14367;
continue;
} else {
var vec__14348 = cljs.core.first(seq__14341__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14348,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14348,(1),null);
var G__14349_14368 = v;
var G__14350_14369 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14349_14368,G__14350_14369) : f.call(null,G__14349_14368,G__14350_14369));

var G__14370 = cljs.core.next(seq__14341__$1);
var G__14371 = null;
var G__14372 = (0);
var G__14373 = (0);
seq__14341 = G__14370;
chunk__14342 = G__14371;
count__14343 = G__14372;
i__14344 = G__14373;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14351 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14351) : cljs.core.keys.call(null,G__14351));
})());
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14352 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14352) : cljs.core.vals.call(null,G__14352));
})());
});

cljs.core.PersistentTreeMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__14353 = k;
var G__14354 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__14353,G__14354) : self__.comp.call(null,G__14353,G__14354));
})();
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__14374 = t.left;
t = G__14374;
continue;
} else {
var G__14375 = t.right;
t = G__14375;
continue;

}
}
} else {
return null;
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var n = coll__$1.entry_at(k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(!((self__.tree == null))){
return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else {
return init;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);
if((t == null)){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);
if((t == null)){
var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((coll__$1.entry_at(k) == null));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__14376 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__14377 = cljs.core.next(es);
ret = G__14376;
es = G__14377;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__14378 = null;
var G__14378__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14378__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14378 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14378__2.call(this,self__,k);
case 3:
return G__14378__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14378.cljs$core$IFn$_invoke$arity$2 = G__14378__2;
G__14378.cljs$core$IFn$_invoke$arity$3 = G__14378__3;
return G__14378;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args14340){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14340)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__14355 = k;
var G__14356 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__14355,G__14356) : self__.comp.call(null,G__14355,G__14356));
})();
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__14379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__14380 = t.left;
stack = G__14379;
t = G__14380;
continue;
} else {
var G__14381 = stack;
var G__14382 = t.right;
stack = G__14381;
t = G__14382;
continue;
}
} else {
if((c > (0))){
var G__14383 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__14384 = t.right;
stack = G__14383;
t = G__14384;
continue;
} else {
var G__14385 = stack;
var G__14386 = t.left;
stack = G__14385;
t = G__14386;
continue;
}

}
}
} else {
if((stack == null)){
return null;
} else {
return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
var G__14357 = entry;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14357) : cljs.core.key.call(null,G__14357));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__14387 = cljs.core.nnext(in$);
var G__14388 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__14387;
out = G__14388;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__14389){
var keyvals = cljs.core.seq(arglist__14389);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),true,false);
};
var array_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__14390){
var keyvals = cljs.core.seq(arglist__14390);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = (function (){var obj14394 = {};
return obj14394;
})();
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first(kvs));

(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));

var G__14395 = cljs.core.nnext(kvs);
kvs = G__14395;
continue;
} else {
return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__14396){
var keyvals = cljs.core.seq(arglist__14396);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$){
var G__14397 = cljs.core.nnext(in$);
var G__14398 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__14397;
out = G__14398;
continue;
} else {
return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__14399){
var keyvals = cljs.core.seq(arglist__14399);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));
while(true){
if(in$){
var G__14400 = cljs.core.nnext(in$);
var G__14401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__14400;
out = G__14401;
continue;
} else {
return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__14402){
var comparator = cljs.core.first(arglist__14402);
var keyvals = cljs.core.rest(arglist__14402);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.KeySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__14403 = self__.mseq;
if(G__14403){
var bit__4309__auto__ = (G__14403.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4309__auto__) || (G__14403.cljs$core$INext$)){
return true;
} else {
if((!G__14403.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14403);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14403);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.KeySeq(nseq,self__._meta));
}
});

cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_key$arity$1(null);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__14404 = self__.mseq;
if(G__14404){
var bit__4309__auto__ = (G__14404.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4309__auto__) || (G__14404.cljs$core$INext$)){
return true;
} else {
if((!G__14404.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14404);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14404);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.KeySeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.KeySeq(self__.mseq,new_meta));
});

cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.KeySeq.cljs$lang$type = true;

cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.KeySeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ValSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__14405 = self__.mseq;
if(G__14405){
var bit__4309__auto__ = (G__14405.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4309__auto__) || (G__14405.cljs$core$INext$)){
return true;
} else {
if((!G__14405.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14405);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14405);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.ValSeq(nseq,self__._meta));
}
});

cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_val$arity$1(null);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__14406 = self__.mseq;
if(G__14406){
var bit__4309__auto__ = (G__14406.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4309__auto__) || (G__14406.cljs$core$INext$)){
return true;
} else {
if((!G__14406.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14406);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14406);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.ValSeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ValSeq(self__.mseq,new_meta));
});

cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ValSeq.cljs$lang$type = true;

cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.ValSeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14407_SHARP_,p2__14408_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3628__auto__ = p1__14407_SHARP_;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__14408_SHARP_);
}),maps);
} else {
return null;
}
};
var merge = function (var_args){
var maps = null;
if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__14409){
var maps = cljs.core.seq(arglist__14409);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first(e);
var v = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14413 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14412,G__14413) : f.call(null,G__14412,G__14413));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3628__auto__ = m1;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__14414){
var f = cljs.core.first(arglist__14414);
var maps = cljs.core.rest(arglist__14414);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var keys = cljs.core.seq(keyseq);
while(true){
if(keys){
var key = cljs.core.first(keys);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$14);
var G__14415 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$14))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__14416 = cljs.core.next(keys);
ret = G__14415;
keys = G__14416;
continue;
} else {
return cljs.core.with_meta(ret,cljs.core.meta(map));
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14419 = cljs.core.seq(coll);
var chunk__14420 = null;
var count__14421 = (0);
var i__14422 = (0);
while(true){
if((i__14422 < count__14421)){
var vec__14423 = chunk__14420.cljs$core$IIndexed$_nth$arity$2(null,i__14422);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14423,(1),null);
var G__14424_14429 = v;
var G__14425_14430 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14424_14429,G__14425_14430) : f.call(null,G__14424_14429,G__14425_14430));

var G__14431 = seq__14419;
var G__14432 = chunk__14420;
var G__14433 = count__14421;
var G__14434 = (i__14422 + (1));
seq__14419 = G__14431;
chunk__14420 = G__14432;
count__14421 = G__14433;
i__14422 = G__14434;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14419);
if(temp__4126__auto__){
var seq__14419__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14419__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__14419__$1);
var G__14435 = cljs.core.chunk_rest(seq__14419__$1);
var G__14436 = c__4415__auto__;
var G__14437 = cljs.core.count(c__4415__auto__);
var G__14438 = (0);
seq__14419 = G__14435;
chunk__14420 = G__14436;
count__14421 = G__14437;
i__14422 = G__14438;
continue;
} else {
var vec__14426 = cljs.core.first(seq__14419__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14426,(1),null);
var G__14427_14439 = v;
var G__14428_14440 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14427_14439,G__14428_14440) : f.call(null,G__14427_14439,G__14428_14440));

var G__14441 = cljs.core.next(seq__14419__$1);
var G__14442 = null;
var G__14443 = (0);
var G__14444 = (0);
seq__14419 = G__14441;
chunk__14420 = G__14442;
count__14421 = G__14443;
i__14422 = G__14444;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.hash_map,v)){
return v;
} else {
return not_found;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__14417_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__14417_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});

cljs.core.PersistentHashSet.prototype.call = (function() {
var G__14445 = null;
var G__14445__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14445__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14445 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14445__2.call(this,self__,k);
case 3:
return G__14445__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14445.cljs$core$IFn$_invoke$arity$2 = G__14445__2;
G__14445.cljs$core$IFn$_invoke$arity$3 = G__14445__3;
return G__14445;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args14418){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14418)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashSet.cljs$lang$type = true;

cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentHashSet");
});

cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){
return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});

cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){
var len = items.length;
if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = ((no_clone)?items:cljs.core.aclone(items));
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__14446 = (i + (1));
var G__14447 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__14446;
out = G__14447;
continue;
} else {
return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else {
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__14448 = (i + (1));
var G__14449 = cljs.core._conj_BANG_(out,(items[i]));
i = G__14448;
out = G__14449;
continue;
} else {
return cljs.core._persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.prototype.call = (function() {
var G__14451 = null;
var G__14451__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__14451__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__14451 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14451__2.call(this,self__,k);
case 3:
return G__14451__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14451.cljs$core$IFn$_invoke$arity$2 = G__14451__2;
G__14451.cljs$core$IFn$_invoke$arity$3 = G__14451__3;
return G__14451;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args14450){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14450)));
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
var tcoll__$1 = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return v;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return cljs.core.count(self__.transient_map);
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});

cljs.core.TransientHashSet.cljs$lang$type = true;

cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/TransientHashSet");
});

cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){
return (new cljs.core.TransientHashSet(transient_map));
});


/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14454 = cljs.core.seq(coll);
var chunk__14455 = null;
var count__14456 = (0);
var i__14457 = (0);
while(true){
if((i__14457 < count__14456)){
var vec__14458 = chunk__14455.cljs$core$IIndexed$_nth$arity$2(null,i__14457);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14458,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14458,(1),null);
var G__14459_14464 = v;
var G__14460_14465 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14459_14464,G__14460_14465) : f.call(null,G__14459_14464,G__14460_14465));

var G__14466 = seq__14454;
var G__14467 = chunk__14455;
var G__14468 = count__14456;
var G__14469 = (i__14457 + (1));
seq__14454 = G__14466;
chunk__14455 = G__14467;
count__14456 = G__14468;
i__14457 = G__14469;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14454);
if(temp__4126__auto__){
var seq__14454__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14454__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__14454__$1);
var G__14470 = cljs.core.chunk_rest(seq__14454__$1);
var G__14471 = c__4415__auto__;
var G__14472 = cljs.core.count(c__4415__auto__);
var G__14473 = (0);
seq__14454 = G__14470;
chunk__14455 = G__14471;
count__14456 = G__14472;
i__14457 = G__14473;
continue;
} else {
var vec__14461 = cljs.core.first(seq__14454__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14461,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14461,(1),null);
var G__14462_14474 = v;
var G__14463_14475 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14462_14474,G__14463_14475) : f.call(null,G__14462_14474,G__14463_14475));

var G__14476 = cljs.core.next(seq__14454__$1);
var G__14477 = null;
var G__14478 = (0);
var G__14479 = (0);
seq__14454 = G__14476;
chunk__14455 = G__14477;
count__14456 = G__14478;
i__14457 = G__14479;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core.count(self__.tree_map) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else {
return null;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__14452_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__14452_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});

cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__14480 = null;
var G__14480__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14480__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14480 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14480__2.call(this,self__,k);
case 3:
return G__14480__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14480.cljs$core$IFn$_invoke$arity$2 = G__14480__2;
G__14480.cljs$core$IFn$_invoke$arity$3 = G__14480__3;
return G__14480;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args14453){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14453)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return entry;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._comparator(self__.tree_map);
});

cljs.core.PersistentTreeSet.cljs$lang$type = true;

cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__4509__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__4509__auto__.length)){
var G__14481 = (i + (1));
var G__14482 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__14481;
res = G__14482;
continue;
} else {
return res;
}
break;
}
})();
return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$ = cljs.core.seq(coll);
if((in$ == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0)))){
return cljs.core.set_from_indexed_seq(in$);
} else {
var in$__$1 = in$;
var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(!((in$__$1 == null))){
var G__14483 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__14484 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__14483;
out = G__14484;
continue;
} else {
return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__14485__delegate = function (keys){
return cljs.core.set(keys);
};
var G__14485 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14485__delegate.call(this,keys);};
G__14485.cljs$lang$maxFixedArity = 0;
G__14485.cljs$lang$applyTo = (function (arglist__14486){
var keys = cljs.core.seq(arglist__14486);
return G__14485__delegate(keys);
});
G__14485.cljs$core$IFn$_invoke$arity$variadic = G__14485__delegate;
return G__14485;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__14487){
var keys = cljs.core.seq(arglist__14487);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__14488){
var comparator = cljs.core.first(arglist__14488);
var keys = cljs.core.rest(arglist__14488);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14489_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__14489_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.val(e);
} else {
return p1__14489_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){
if(cljs.core.vector_QMARK_(coll)){
var n = cljs.core.count(coll);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){
var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else {
return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14490_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__14490_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.second(e);
} else {
return p1__14490_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__14501,seen__$1){
while(true){
var vec__14502 = p__14501;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502,(0),null);
var xs__$1 = vec__14502;
var temp__4126__auto__ = cljs.core.seq(xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f)){
var G__14503 = cljs.core.rest(s);
var G__14504 = seen__$1;
p__14501 = G__14503;
seen__$1 = G__14504;
continue;
} else {
return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next(s__$1)){
var G__14505 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__14506 = cljs.core.next(s__$1);
ret = G__14505;
s__$1 = G__14506;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if((function (){var G__14508 = x;
if(G__14508){
var bit__4302__auto__ = (G__14508.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4302__auto__) || (G__14508.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_name$arity$1(null);
} else {
if(typeof x === 'string'){
return x;
} else {
throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if((ks) && (vs)){
var G__14509 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__14510 = cljs.core.next(ks);
var G__14511 = cljs.core.next(vs);
map = G__14509;
ks = G__14510;
vs = G__14511;
continue;
} else {
return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((function (){var G__14522 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14522) : k.call(null,G__14522));
})() > (function (){var G__14523 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14523) : k.call(null,G__14523));
})())){
return x;
} else {
return y;
}
});
var max_key__4 = (function() { 
var G__14524__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14512_SHARP_,p2__14513_SHARP_){
return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__14512_SHARP_,p2__14513_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__14524 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14524__delegate.call(this,k,x,y,more);};
G__14524.cljs$lang$maxFixedArity = 3;
G__14524.cljs$lang$applyTo = (function (arglist__14525){
var k = cljs.core.first(arglist__14525);
arglist__14525 = cljs.core.next(arglist__14525);
var x = cljs.core.first(arglist__14525);
arglist__14525 = cljs.core.next(arglist__14525);
var y = cljs.core.first(arglist__14525);
var more = cljs.core.rest(arglist__14525);
return G__14524__delegate(k,x,y,more);
});
G__14524.cljs$core$IFn$_invoke$arity$variadic = G__14524__delegate;
return G__14524;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((function (){var G__14536 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14536) : k.call(null,G__14536));
})() < (function (){var G__14537 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14537) : k.call(null,G__14537));
})())){
return x;
} else {
return y;
}
});
var min_key__4 = (function() { 
var G__14538__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14526_SHARP_,p2__14527_SHARP_){
return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__14526_SHARP_,p2__14527_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__14538 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14538__delegate.call(this,k,x,y,more);};
G__14538.cljs$lang$maxFixedArity = 3;
G__14538.cljs$lang$applyTo = (function (arglist__14539){
var k = cljs.core.first(arglist__14539);
arglist__14539 = cljs.core.next(arglist__14539);
var x = cljs.core.first(arglist__14539);
arglist__14539 = cljs.core.next(arglist__14539);
var y = cljs.core.first(arglist__14539);
var more = cljs.core.rest(arglist__14539);
return G__14538__delegate(k,x,y,more);
});
G__14538.cljs$core$IFn$_invoke$arity$variadic = G__14538__delegate;
return G__14538;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.prototype.add = (function (x){
var self__ = this;
var _ = this;
return self__.arr.push(x);
});

cljs.core.ArrayList.prototype.size = (function (){
var self__ = this;
var _ = this;
return self__.arr.length;
});

cljs.core.ArrayList.prototype.clear = (function (){
var self__ = this;
var _ = this;
return self__.arr = [];
});

cljs.core.ArrayList.prototype.isEmpty = (function (){
var self__ = this;
var _ = this;
return (self__.arr.length === (0));
});

cljs.core.ArrayList.prototype.toArray = (function (){
var self__ = this;
var _ = this;
return self__.arr;
});

cljs.core.ArrayList.cljs$lang$type = true;

cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ArrayList");
});

cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){
return (new cljs.core.ArrayList(arr));
});

cljs.core.array_list = (function array_list(){
return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){
return (function (rf){
var a = cljs.core.array_list();
return ((function (a){
return (function() {
var G__14556 = null;
var G__14556__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14556__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__14551 = result;
var G__14552 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14551,G__14552) : rf.call(null,G__14551,G__14552));
})());
})());
var G__14553 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14553) : rf.call(null,G__14553));
});
var G__14556__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec(a.toArray());
a.clear();

var G__14554 = result;
var G__14555 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14554,G__14555) : rf.call(null,G__14554,G__14555));
} else {
return result;
}
});
G__14556 = function(result,input){
switch(arguments.length){
case 0:
return G__14556__0.call(this);
case 1:
return G__14556__1.call(this,result);
case 2:
return G__14556__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14556.cljs$core$IFn$_invoke$arity$0 = G__14556__0;
G__14556.cljs$core$IFn$_invoke$arity$1 = G__14556__1;
G__14556.cljs$core$IFn$_invoke$arity$2 = G__14556__2;
return G__14556;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){
return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){
return (function (rf){
return (function() {
var G__14569 = null;
var G__14569__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14569__1 = (function (result){
var G__14564 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14564) : rf.call(null,G__14564));
});
var G__14569__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__14565 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14565) : pred.call(null,G__14565));
})())){
var G__14566 = result;
var G__14567 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14566,G__14567) : rf.call(null,G__14566,G__14567));
} else {
return cljs.core.reduced(result);
}
});
G__14569 = function(result,input){
switch(arguments.length){
case 0:
return G__14569__0.call(this);
case 1:
return G__14569__1.call(this,result);
case 2:
return G__14569__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14569.cljs$core$IFn$_invoke$arity$0 = G__14569__0;
G__14569.cljs$core$IFn$_invoke$arity$1 = G__14569__1;
G__14569.cljs$core$IFn$_invoke$arity$2 = G__14569__2;
return G__14569;
})()
});
});
var take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.truth_((function (){var G__14568 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14568) : pred.call(null,G__14568));
})())){
return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator(sc);
var G__14574 = (function (){var G__14576 = cljs.core._entry_key(sc,e);
var G__14577 = key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14576,G__14577) : comp.call(null,G__14576,G__14577));
})();
var G__14575 = (0);
return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__14574,G__14575) : test.call(null,G__14574,G__14575));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__14581 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14581,(0),null);
var s = vec__14581;
if(cljs.core.truth_((function (){var G__14582 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__14582) : include.call(null,G__14582));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__14583 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583,(0),null);
var s = vec__14583;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__14587 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14587,(0),null);
var s = vec__14587;
if(cljs.core.truth_((function (){var G__14588 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__14588) : include.call(null,G__14588));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__14589 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14589,(0),null);
var s = vec__14589;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__.step > (0))){
return (self__.i < self__.end);
} else {
return (self__.i > self__.end);
}
});

cljs.core.RangeIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.i;
self__.i = (self__.i + self__.step);

return ret;
});

cljs.core.RangeIterator.cljs$lang$type = true;

cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/RangeIterator");
});

cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){
return (new cljs.core.RangeIterator(i,end,step));
});


/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Range.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
throw (new Error("Index out of bounds"));
}
}
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
return not_found;
}
}
});

cljs.core.Range.prototype.cljs$core$IIterable$ = true;

cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});

cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return self__.meta;
});

cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if(((self__.start + self__.step) < self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
} else {
if(((self__.start + self__.step) > self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(cljs.core.not(cljs.core._seq(rng__$1))){
return (0);
} else {
var G__14590 = ((self__.end - self__.start) / self__.step);
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__14590) : Math.ceil.call(null,G__14590));
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
var rng__$1 = this;
return cljs.core.equiv_sequential(rng__$1,other);
});

cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
var rng__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){
var self__ = this;
var rng__$1 = this;
var i = self__.start;
var ret = init;
while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end))){
var ret__$1 = (function (){var G__14591 = ret;
var G__14592 = i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14591,G__14592) : f.call(null,G__14591,G__14592));
})();
if(cljs.core.reduced_QMARK_(ret__$1)){
var G__14593 = ret__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14593) : cljs.core.deref.call(null,G__14593));
} else {
var G__14594 = (i + self__.step);
var G__14595 = ret__$1;
i = G__14594;
ret = G__14595;
continue;
}
} else {
return ret;
}
break;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((cljs.core._seq(rng__$1) == null)){
return null;
} else {
return self__.start;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(!((cljs.core._seq(rng__$1) == null))){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if((self__.start < self__.end)){
return rng__$1;
} else {
return null;
}
} else {
if((self__.start > self__.end)){
return rng__$1;
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
var rng__$1 = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
var rng__$1 = this;
return cljs.core.cons(o,rng__$1);
});

cljs.core.Range.cljs$lang$type = true;

cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){
return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){
return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__14613 = null;
var G__14613__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14613__1 = (function (result){
var G__14610 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14610) : rf.call(null,G__14610));
});
var G__14613__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
if((cljs.core.rem(i,n) === (0))){
var G__14611 = result;
var G__14612 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14611,G__14612) : rf.call(null,G__14611,G__14612));
} else {
return result;
}
});
G__14613 = function(result,input){
switch(arguments.length){
case 0:
return G__14613__0.call(this);
case 1:
return G__14613__1.call(this,result);
case 2:
return G__14613__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14613.cljs$core$IFn$_invoke$arity$0 = G__14613__0;
G__14613.cljs$core$IFn$_invoke$arity$1 = G__14613__1;
G__14613.cljs$core$IFn$_invoke$arity$2 = G__14613__2;
return G__14613;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else {
return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){
return (function (rf){
var a = cljs.core.array_list();
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$15);
return ((function (a,pa){
return (function() {
var G__14635 = null;
var G__14635__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14635__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__14626 = result;
var G__14627 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14626,G__14627) : rf.call(null,G__14626,G__14627));
})());
})());
var G__14628 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14628) : rf.call(null,G__14628));
});
var G__14635__2 = (function (result,input){
var pval = (function (){var G__14629 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14629) : cljs.core.deref.call(null,G__14629));
})();
var val = (function (){var G__14630 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14630) : f.call(null,G__14630));
})();
cljs.core.vreset_BANG_(pa,val);

if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$15)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec(a.toArray());
a.clear();

var ret = (function (){var G__14631 = result;
var G__14632 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14631,G__14632) : rf.call(null,G__14631,G__14632));
})();
if(cljs.core.reduced_QMARK_(ret)){
} else {
a.add(input);
}

return ret;
}
});
G__14635 = function(result,input){
switch(arguments.length){
case 0:
return G__14635__0.call(this);
case 1:
return G__14635__1.call(this,result);
case 2:
return G__14635__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14635.cljs$core$IFn$_invoke$arity$0 = G__14635__0;
G__14635.cljs$core$IFn$_invoke$arity$1 = G__14635__1;
G__14635.cljs$core$IFn$_invoke$arity$2 = G__14635__2;
return G__14635;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var fst = cljs.core.first(s);
var fv = (function (){var G__14633 = fst;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14633) : f.call(null,G__14633));
})();
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__14614_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__14634 = p1__14614_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14634) : f.call(null,G__14634));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));
return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else {
return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__14644 = init;
var G__14645 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14644,G__14645) : f.call(null,G__14644,G__14645));
})(),cljs.core.rest(s));
} else {
return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__14740 = null;
var G__14740__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__14740__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14698 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14698) : f.call(null,G__14698));
})()],null));
});
var G__14740__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14699 = x;
var G__14700 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14699,G__14700) : f.call(null,G__14699,G__14700));
})()],null));
});
var G__14740__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14701 = x;
var G__14702 = y;
var G__14703 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14701,G__14702,G__14703) : f.call(null,G__14701,G__14702,G__14703));
})()],null));
});
var G__14740__4 = (function() { 
var G__14741__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__14741 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14741__delegate.call(this,x,y,z,args);};
G__14741.cljs$lang$maxFixedArity = 3;
G__14741.cljs$lang$applyTo = (function (arglist__14742){
var x = cljs.core.first(arglist__14742);
arglist__14742 = cljs.core.next(arglist__14742);
var y = cljs.core.first(arglist__14742);
arglist__14742 = cljs.core.next(arglist__14742);
var z = cljs.core.first(arglist__14742);
var args = cljs.core.rest(arglist__14742);
return G__14741__delegate(x,y,z,args);
});
G__14741.cljs$core$IFn$_invoke$arity$variadic = G__14741__delegate;
return G__14741;
})()
;
G__14740 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14740__0.call(this);
case 1:
return G__14740__1.call(this,x);
case 2:
return G__14740__2.call(this,x,y);
case 3:
return G__14740__3.call(this,x,y,z);
default:
return G__14740__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14740.cljs$lang$maxFixedArity = 3;
G__14740.cljs$lang$applyTo = G__14740__4.cljs$lang$applyTo;
G__14740.cljs$core$IFn$_invoke$arity$0 = G__14740__0;
G__14740.cljs$core$IFn$_invoke$arity$1 = G__14740__1;
G__14740.cljs$core$IFn$_invoke$arity$2 = G__14740__2;
G__14740.cljs$core$IFn$_invoke$arity$3 = G__14740__3;
G__14740.cljs$core$IFn$_invoke$arity$variadic = G__14740__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14740;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__14743 = null;
var G__14743__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__14743__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14704 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14704) : f.call(null,G__14704));
})(),(function (){var G__14705 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__14705) : g.call(null,G__14705));
})()],null));
});
var G__14743__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14706 = x;
var G__14707 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14706,G__14707) : f.call(null,G__14706,G__14707));
})(),(function (){var G__14708 = x;
var G__14709 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__14708,G__14709) : g.call(null,G__14708,G__14709));
})()],null));
});
var G__14743__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14710 = x;
var G__14711 = y;
var G__14712 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14710,G__14711,G__14712) : f.call(null,G__14710,G__14711,G__14712));
})(),(function (){var G__14713 = x;
var G__14714 = y;
var G__14715 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__14713,G__14714,G__14715) : g.call(null,G__14713,G__14714,G__14715));
})()],null));
});
var G__14743__4 = (function() { 
var G__14744__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__14744 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14744__delegate.call(this,x,y,z,args);};
G__14744.cljs$lang$maxFixedArity = 3;
G__14744.cljs$lang$applyTo = (function (arglist__14745){
var x = cljs.core.first(arglist__14745);
arglist__14745 = cljs.core.next(arglist__14745);
var y = cljs.core.first(arglist__14745);
arglist__14745 = cljs.core.next(arglist__14745);
var z = cljs.core.first(arglist__14745);
var args = cljs.core.rest(arglist__14745);
return G__14744__delegate(x,y,z,args);
});
G__14744.cljs$core$IFn$_invoke$arity$variadic = G__14744__delegate;
return G__14744;
})()
;
G__14743 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14743__0.call(this);
case 1:
return G__14743__1.call(this,x);
case 2:
return G__14743__2.call(this,x,y);
case 3:
return G__14743__3.call(this,x,y,z);
default:
return G__14743__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14743.cljs$lang$maxFixedArity = 3;
G__14743.cljs$lang$applyTo = G__14743__4.cljs$lang$applyTo;
G__14743.cljs$core$IFn$_invoke$arity$0 = G__14743__0;
G__14743.cljs$core$IFn$_invoke$arity$1 = G__14743__1;
G__14743.cljs$core$IFn$_invoke$arity$2 = G__14743__2;
G__14743.cljs$core$IFn$_invoke$arity$3 = G__14743__3;
G__14743.cljs$core$IFn$_invoke$arity$variadic = G__14743__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14743;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__14746 = null;
var G__14746__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__14746__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14716 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14716) : f.call(null,G__14716));
})(),(function (){var G__14717 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__14717) : g.call(null,G__14717));
})(),(function (){var G__14718 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__14718) : h.call(null,G__14718));
})()],null));
});
var G__14746__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14719 = x;
var G__14720 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14719,G__14720) : f.call(null,G__14719,G__14720));
})(),(function (){var G__14721 = x;
var G__14722 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__14721,G__14722) : g.call(null,G__14721,G__14722));
})(),(function (){var G__14723 = x;
var G__14724 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__14723,G__14724) : h.call(null,G__14723,G__14724));
})()],null));
});
var G__14746__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14725 = x;
var G__14726 = y;
var G__14727 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14725,G__14726,G__14727) : f.call(null,G__14725,G__14726,G__14727));
})(),(function (){var G__14728 = x;
var G__14729 = y;
var G__14730 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__14728,G__14729,G__14730) : g.call(null,G__14728,G__14729,G__14730));
})(),(function (){var G__14731 = x;
var G__14732 = y;
var G__14733 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__14731,G__14732,G__14733) : h.call(null,G__14731,G__14732,G__14733));
})()],null));
});
var G__14746__4 = (function() { 
var G__14747__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__14747 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14747__delegate.call(this,x,y,z,args);};
G__14747.cljs$lang$maxFixedArity = 3;
G__14747.cljs$lang$applyTo = (function (arglist__14748){
var x = cljs.core.first(arglist__14748);
arglist__14748 = cljs.core.next(arglist__14748);
var y = cljs.core.first(arglist__14748);
arglist__14748 = cljs.core.next(arglist__14748);
var z = cljs.core.first(arglist__14748);
var args = cljs.core.rest(arglist__14748);
return G__14747__delegate(x,y,z,args);
});
G__14747.cljs$core$IFn$_invoke$arity$variadic = G__14747__delegate;
return G__14747;
})()
;
G__14746 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14746__0.call(this);
case 1:
return G__14746__1.call(this,x);
case 2:
return G__14746__2.call(this,x,y);
case 3:
return G__14746__3.call(this,x,y,z);
default:
return G__14746__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14746.cljs$lang$maxFixedArity = 3;
G__14746.cljs$lang$applyTo = G__14746__4.cljs$lang$applyTo;
G__14746.cljs$core$IFn$_invoke$arity$0 = G__14746__0;
G__14746.cljs$core$IFn$_invoke$arity$1 = G__14746__1;
G__14746.cljs$core$IFn$_invoke$arity$2 = G__14746__2;
G__14746.cljs$core$IFn$_invoke$arity$3 = G__14746__3;
G__14746.cljs$core$IFn$_invoke$arity$variadic = G__14746__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14746;
})()
});
var juxt__4 = (function() { 
var G__14749__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__14750 = null;
var G__14750__0 = (function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14646_SHARP_,p2__14647_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14646_SHARP_,(function (){return (p2__14647_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__14647_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__14647_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__14750__1 = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14648_SHARP_,p2__14649_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14648_SHARP_,(function (){var G__14734 = x;
return (p2__14649_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14649_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14734) : p2__14649_SHARP_.call(null,G__14734));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__14750__2 = (function (x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14650_SHARP_,p2__14651_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14650_SHARP_,(function (){var G__14735 = x;
var G__14736 = y;
return (p2__14651_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14651_SHARP_.cljs$core$IFn$_invoke$arity$2(G__14735,G__14736) : p2__14651_SHARP_.call(null,G__14735,G__14736));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__14750__3 = (function (x,y,z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14652_SHARP_,p2__14653_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14652_SHARP_,(function (){var G__14737 = x;
var G__14738 = y;
var G__14739 = z;
return (p2__14653_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__14653_SHARP_.cljs$core$IFn$_invoke$arity$3(G__14737,G__14738,G__14739) : p2__14653_SHARP_.call(null,G__14737,G__14738,G__14739));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__14750__4 = (function() { 
var G__14751__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14654_SHARP_,p2__14655_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14654_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__14655_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__14751 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14751__delegate.call(this,x,y,z,args);};
G__14751.cljs$lang$maxFixedArity = 3;
G__14751.cljs$lang$applyTo = (function (arglist__14752){
var x = cljs.core.first(arglist__14752);
arglist__14752 = cljs.core.next(arglist__14752);
var y = cljs.core.first(arglist__14752);
arglist__14752 = cljs.core.next(arglist__14752);
var z = cljs.core.first(arglist__14752);
var args = cljs.core.rest(arglist__14752);
return G__14751__delegate(x,y,z,args);
});
G__14751.cljs$core$IFn$_invoke$arity$variadic = G__14751__delegate;
return G__14751;
})()
;
G__14750 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14750__0.call(this);
case 1:
return G__14750__1.call(this,x);
case 2:
return G__14750__2.call(this,x,y);
case 3:
return G__14750__3.call(this,x,y,z);
default:
return G__14750__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14750.cljs$lang$maxFixedArity = 3;
G__14750.cljs$lang$applyTo = G__14750__4.cljs$lang$applyTo;
G__14750.cljs$core$IFn$_invoke$arity$0 = G__14750__0;
G__14750.cljs$core$IFn$_invoke$arity$1 = G__14750__1;
G__14750.cljs$core$IFn$_invoke$arity$2 = G__14750__2;
G__14750.cljs$core$IFn$_invoke$arity$3 = G__14750__3;
G__14750.cljs$core$IFn$_invoke$arity$variadic = G__14750__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14750;
})()
;})(fs__$1))
};
var G__14749 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14749__delegate.call(this,f,g,h,fs);};
G__14749.cljs$lang$maxFixedArity = 3;
G__14749.cljs$lang$applyTo = (function (arglist__14753){
var f = cljs.core.first(arglist__14753);
arglist__14753 = cljs.core.next(arglist__14753);
var g = cljs.core.first(arglist__14753);
arglist__14753 = cljs.core.next(arglist__14753);
var h = cljs.core.first(arglist__14753);
var fs = cljs.core.rest(arglist__14753);
return G__14749__delegate(f,g,h,fs);
});
G__14749.cljs$core$IFn$_invoke$arity$variadic = G__14749__delegate;
return G__14749;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll)){
var G__14754 = cljs.core.next(coll);
coll = G__14754;
continue;
} else {
return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if((cljs.core.seq(coll)) && ((n > (0)))){
var G__14755 = (n - (1));
var G__14756 = cljs.core.next(coll);
n = G__14755;
coll = G__14756;
continue;
} else {
return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);

return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);

return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s)){
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
} else {
return null;
}
} else {
throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if((matches == null)){
return null;
} else {
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
}
} else {
throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find(re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);
var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));
if(cljs.core.truth_(match_data)){
return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){
return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else {
return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
if((s instanceof RegExp)){
return s;
} else {
var vec__14760 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14760,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14760,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14760,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_14768 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write(writer,"#");
} else {
cljs.core._write(writer,begin);

if(cljs.core.seq(coll)){
var G__14769_14775 = cljs.core.first(coll);
var G__14770_14776 = writer;
var G__14771_14777 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__14769_14775,G__14770_14776,G__14771_14777) : print_one.call(null,G__14769_14775,G__14770_14776,G__14771_14777));
} else {
}

var coll_14778__$1 = cljs.core.next(coll);
var n_14779 = (cljs.core.constant$keyword$5.cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_14778__$1) && (((n_14779 == null)) || (!((n_14779 === (0)))))){
cljs.core._write(writer,sep);

var G__14772_14780 = cljs.core.first(coll_14778__$1);
var G__14773_14781 = writer;
var G__14774_14782 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__14772_14780,G__14773_14781,G__14774_14782) : print_one.call(null,G__14772_14780,G__14773_14781,G__14774_14782));

var G__14783 = cljs.core.next(coll_14778__$1);
var G__14784 = (n_14779 - (1));
coll_14778__$1 = G__14783;
n_14779 = G__14784;
continue;
} else {
if((cljs.core.seq(coll_14778__$1)) && ((n_14779 === (0)))){
cljs.core._write(writer,sep);

cljs.core._write(writer,"...");
} else {
}
}
break;
}

return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14768;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var seq__14789 = cljs.core.seq(ss);
var chunk__14790 = null;
var count__14791 = (0);
var i__14792 = (0);
while(true){
if((i__14792 < count__14791)){
var s = chunk__14790.cljs$core$IIndexed$_nth$arity$2(null,i__14792);
cljs.core._write(writer,s);

var G__14793 = seq__14789;
var G__14794 = chunk__14790;
var G__14795 = count__14791;
var G__14796 = (i__14792 + (1));
seq__14789 = G__14793;
chunk__14790 = G__14794;
count__14791 = G__14795;
i__14792 = G__14796;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14789);
if(temp__4126__auto__){
var seq__14789__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14789__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__14789__$1);
var G__14797 = cljs.core.chunk_rest(seq__14789__$1);
var G__14798 = c__4415__auto__;
var G__14799 = cljs.core.count(c__4415__auto__);
var G__14800 = (0);
seq__14789 = G__14797;
chunk__14790 = G__14798;
count__14791 = G__14799;
i__14792 = G__14800;
continue;
} else {
var s = cljs.core.first(seq__14789__$1);
cljs.core._write(writer,s);

var G__14801 = cljs.core.next(seq__14789__$1);
var G__14802 = null;
var G__14803 = (0);
var G__14804 = (0);
seq__14789 = G__14801;
chunk__14790 = G__14802;
count__14791 = G__14803;
i__14792 = G__14804;
continue;
}
} else {
return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__14805){
var writer = cljs.core.first(arglist__14805);
var ss = cljs.core.rest(arglist__14805);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));

return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.char_escapes = (function (){var obj14807 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj14807;
})();
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace((function (){var G__14810 = "[\\\\\"\b\f\n\r\t]";
var G__14811 = "g";
return RegExp(G__14810,G__14811);
})(),(function (match){
return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if((void 0 === obj)){
return cljs.core._write(writer,"#<undefined>");
} else {
if(cljs.core.truth_((function (){var and__3616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$3);
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = (function (){var G__14825 = obj;
if(G__14825){
var bit__4309__auto__ = (G__14825.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4309__auto__) || (G__14825.cljs$core$IMeta$)){
return true;
} else {
if((!G__14825.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__14825);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__14825);
}
})();
if(and__3616__auto____$1){
return cljs.core.meta(obj);
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
})())){
cljs.core._write(writer,"^");

pr_writer(cljs.core.meta(obj),writer,opts);

cljs.core._write(writer," ");
} else {
}

if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if(obj.cljs$lang$type){
return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else {
if((function (){var G__14826 = obj;
if(G__14826){
var bit__4302__auto__ = (G__14826.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4302__auto__) || (G__14826.cljs$core$IPrintWithWriter$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else {
if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number')){
return cljs.core._write(writer,[cljs.core.str(obj)].join(''));
} else {
if(cljs.core.object_QMARK_(obj)){
cljs.core._write(writer,"#js ");

var G__14827 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));
var G__14828 = pr_writer;
var G__14829 = writer;
var G__14830 = opts;
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__14827,G__14828,G__14829,G__14830) : cljs.core.print_map.call(null,G__14827,G__14828,G__14829,G__14830));
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else {
if(cljs.core.truth_((function (){var G__14831 = obj;
return goog.isString(G__14831);
})())){
if(cljs.core.truth_(cljs.core.constant$keyword$2.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core._write(writer,cljs.core.quote_string(obj));
} else {
return cljs.core._write(writer,obj);
}
} else {
if(cljs.core.fn_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else {
if((obj instanceof Date)){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len)){
var G__14833 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__14833;
continue;
} else {
return ns;
}
break;
}
});
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else {
if(cljs.core.regexp_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else {
if((function (){var G__14832 = obj;
if(G__14832){
var bit__4309__auto__ = (G__14832.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4309__auto__) || (G__14832.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__14832.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__14832);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__14832);
}
})()){
return cljs.core._pr_writer(obj,writer,opts);
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));

}
}
}
}
}
}
}
}
}
}
}

}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer(cljs.core.first(objs),writer,opts);

var seq__14838 = cljs.core.seq(cljs.core.next(objs));
var chunk__14839 = null;
var count__14840 = (0);
var i__14841 = (0);
while(true){
if((i__14841 < count__14840)){
var obj = chunk__14839.cljs$core$IIndexed$_nth$arity$2(null,i__14841);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__14842 = seq__14838;
var G__14843 = chunk__14839;
var G__14844 = count__14840;
var G__14845 = (i__14841 + (1));
seq__14838 = G__14842;
chunk__14839 = G__14843;
count__14840 = G__14844;
i__14841 = G__14845;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14838);
if(temp__4126__auto__){
var seq__14838__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14838__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__14838__$1);
var G__14846 = cljs.core.chunk_rest(seq__14838__$1);
var G__14847 = c__4415__auto__;
var G__14848 = cljs.core.count(c__4415__auto__);
var G__14849 = (0);
seq__14838 = G__14846;
chunk__14839 = G__14847;
count__14840 = G__14848;
i__14841 = G__14849;
continue;
} else {
var obj = cljs.core.first(seq__14838__$1);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__14850 = cljs.core.next(seq__14838__$1);
var G__14851 = null;
var G__14852 = (0);
var G__14853 = (0);
seq__14838 = G__14850;
chunk__14839 = G__14851;
count__14840 = G__14852;
i__14841 = G__14853;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "\n";
} else {
var sb = cljs.core.pr_sb_with_opts(objs,opts);
sb.append("\n");

return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1))){
return cljs.core.flush();
} else {
return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__14854){
var objs = cljs.core.seq(arglist__14854);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__14855){
var objs = cljs.core.seq(arglist__14855);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__14856){
var objs = cljs.core.seq(arglist__14856);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__14857){
var objs = cljs.core.seq(arglist__14857);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var print_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__14858){
var objs = cljs.core.seq(arglist__14858);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var println = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__14859){
var objs = cljs.core.seq(arglist__14859);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var println_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__14860){
var objs = cljs.core.seq(arglist__14860);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var prn = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__14861){
var objs = cljs.core.seq(arglist__14861);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__14868_14874 = cljs.core.key(e);
var G__14869_14875 = w;
var G__14870_14876 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__14868_14874,G__14869_14875,G__14870_14876) : print_one.call(null,G__14868_14874,G__14869_14875,G__14870_14876));

cljs.core._write(w," ");

var G__14871 = cljs.core.val(e);
var G__14872 = w;
var G__14873 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__14871,G__14872,G__14873) : print_one.call(null,G__14871,G__14872,G__14873));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Volatile: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core.pr_writer(a__$1.sym,writer,opts);
});

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core._write(writer,"()");
});

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;

cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;

cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_keywords(x__$1,y);
});

cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;

cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14877){
var iref = cljs.core.first(arglist__14877);
arglist__14877 = cljs.core.next(arglist__14877);
var f = cljs.core.first(arglist__14877);
var args = cljs.core.rest(arglist__14877);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null)){
cljs.core.gensym_counter = (function (){var G__14880 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14880) : cljs.core.atom.call(null,G__14880));
})();
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return cljs.core.not(self__.f);
});

cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.f)){
self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

self__.f = null;
} else {
}

return self__.value;
});

cljs.core.Delay.cljs$lang$type = true;

cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Delay");
});

cljs.core.__GT_Delay = (function __GT_Delay(f,value){
return (new cljs.core.Delay(f,value));
});

/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x)){
var G__14882 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14882) : cljs.core.deref.call(null,G__14882));
} else {
return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){
return (function (p1__14883_SHARP_,p2__14884_SHARP_){
var ret = (function (){var G__14887 = p1__14883_SHARP_;
var G__14888 = p2__14884_SHARP_;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14887,G__14888) : rf.call(null,G__14887,G__14888));
})();
if(cljs.core.reduced_QMARK_(ret)){
return cljs.core.reduced(ret);
} else {
return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){
var rf1 = cljs.core.preserving_reduced(rf);
return ((function (rf1){
return (function() {
var G__14891 = null;
var G__14891__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14891__1 = (function (result){
var G__14890 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14890) : rf.call(null,G__14890));
});
var G__14891__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__14891 = function(result,input){
switch(arguments.length){
case 0:
return G__14891__0.call(this);
case 1:
return G__14891__1.call(this,result);
case 2:
return G__14891__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14891.cljs$core$IFn$_invoke$arity$0 = G__14891__0;
G__14891.cljs$core$IFn$_invoke$arity$1 = G__14891__1;
G__14891.cljs$core$IFn$_invoke$arity$2 = G__14891__2;
return G__14891;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){
return (function (rf){
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$15);
return ((function (pa){
return (function() {
var G__14900 = null;
var G__14900__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14900__1 = (function (result){
var G__14896 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14896) : rf.call(null,G__14896));
});
var G__14900__2 = (function (result,input){
var prior = (function (){var G__14897 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14897) : cljs.core.deref.call(null,G__14897));
})();
cljs.core.vreset_BANG_(pa,input);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input)){
return result;
} else {
var G__14898 = result;
var G__14899 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14898,G__14899) : rf.call(null,G__14898,G__14899));
}
});
G__14900 = function(result,input){
switch(arguments.length){
case 0:
return G__14900__0.call(this);
case 1:
return G__14900__1.call(this,result);
case 2:
return G__14900__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14900.cljs$core$IFn$_invoke$arity$0 = G__14900__0;
G__14900.cljs$core$IFn$_invoke$arity$1 = G__14900__1;
G__14900.cljs$core$IFn$_invoke$arity$2 = G__14900__2;
return G__14900;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){
var self__ = this;
var coll__$2 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});

cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});

cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});

cljs.core.Eduction.cljs$lang$type = true;

cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4606__auto__ = this;
return cljs.core.es6_iterator(this__4606__auto__);
}));
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14902_SHARP_,p2__14901_SHARP_){
var G__14904 = p2__14901_SHARP_;
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__14904) : proc.call(null,G__14904));
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj14906 = {};
return obj14906;
})();

cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__3616__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (cljs.core._clj__GT_js[(function (){var G__14910 = x__4272__auto__;
return goog.typeOf(G__14910);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__3616__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (cljs.core._key__GT_js[(function (){var G__14914 = x__4272__auto__;
return goog.typeOf(G__14914);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function key__GT_js(k){
if((function (){var G__14917 = k;
if(G__14917){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__14917.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__14917.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__14917);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__14917);
}
})()){
return cljs.core._clj__GT_js(k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
var G__14918 = k;
return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__14918) : cljs.core.clj__GT_js.call(null,G__14918));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){
if((x == null)){
return null;
} else {
if((function (){var G__14934 = x;
if(G__14934){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__14934.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__14934.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__14934);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__14934);
}
})()){
return cljs.core._clj__GT_js(x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
var m = (function (){var obj14936 = {};
return obj14936;
})();
var seq__14937_14947 = cljs.core.seq(x);
var chunk__14938_14948 = null;
var count__14939_14949 = (0);
var i__14940_14950 = (0);
while(true){
if((i__14940_14950 < count__14939_14949)){
var vec__14941_14951 = chunk__14938_14948.cljs$core$IIndexed$_nth$arity$2(null,i__14940_14950);
var k_14952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941_14951,(0),null);
var v_14953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941_14951,(1),null);
(m[cljs.core.key__GT_js(k_14952)] = clj__GT_js(v_14953));

var G__14954 = seq__14937_14947;
var G__14955 = chunk__14938_14948;
var G__14956 = count__14939_14949;
var G__14957 = (i__14940_14950 + (1));
seq__14937_14947 = G__14954;
chunk__14938_14948 = G__14955;
count__14939_14949 = G__14956;
i__14940_14950 = G__14957;
continue;
} else {
var temp__4126__auto___14958 = cljs.core.seq(seq__14937_14947);
if(temp__4126__auto___14958){
var seq__14937_14959__$1 = temp__4126__auto___14958;
if(cljs.core.chunked_seq_QMARK_(seq__14937_14959__$1)){
var c__4415__auto___14960 = cljs.core.chunk_first(seq__14937_14959__$1);
var G__14961 = cljs.core.chunk_rest(seq__14937_14959__$1);
var G__14962 = c__4415__auto___14960;
var G__14963 = cljs.core.count(c__4415__auto___14960);
var G__14964 = (0);
seq__14937_14947 = G__14961;
chunk__14938_14948 = G__14962;
count__14939_14949 = G__14963;
i__14940_14950 = G__14964;
continue;
} else {
var vec__14942_14965 = cljs.core.first(seq__14937_14959__$1);
var k_14966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14942_14965,(0),null);
var v_14967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14942_14965,(1),null);
(m[cljs.core.key__GT_js(k_14966)] = clj__GT_js(v_14967));

var G__14968 = cljs.core.next(seq__14937_14959__$1);
var G__14969 = null;
var G__14970 = (0);
var G__14971 = (0);
seq__14937_14947 = G__14968;
chunk__14938_14948 = G__14969;
count__14939_14949 = G__14970;
i__14940_14950 = G__14971;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_(x)){
var arr = [];
var seq__14943_14972 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));
var chunk__14944_14973 = null;
var count__14945_14974 = (0);
var i__14946_14975 = (0);
while(true){
if((i__14946_14975 < count__14945_14974)){
var x_14976__$1 = chunk__14944_14973.cljs$core$IIndexed$_nth$arity$2(null,i__14946_14975);
arr.push(x_14976__$1);

var G__14977 = seq__14943_14972;
var G__14978 = chunk__14944_14973;
var G__14979 = count__14945_14974;
var G__14980 = (i__14946_14975 + (1));
seq__14943_14972 = G__14977;
chunk__14944_14973 = G__14978;
count__14945_14974 = G__14979;
i__14946_14975 = G__14980;
continue;
} else {
var temp__4126__auto___14981 = cljs.core.seq(seq__14943_14972);
if(temp__4126__auto___14981){
var seq__14943_14982__$1 = temp__4126__auto___14981;
if(cljs.core.chunked_seq_QMARK_(seq__14943_14982__$1)){
var c__4415__auto___14983 = cljs.core.chunk_first(seq__14943_14982__$1);
var G__14984 = cljs.core.chunk_rest(seq__14943_14982__$1);
var G__14985 = c__4415__auto___14983;
var G__14986 = cljs.core.count(c__4415__auto___14983);
var G__14987 = (0);
seq__14943_14972 = G__14984;
chunk__14944_14973 = G__14985;
count__14945_14974 = G__14986;
i__14946_14975 = G__14987;
continue;
} else {
var x_14988__$1 = cljs.core.first(seq__14943_14982__$1);
arr.push(x_14988__$1);

var G__14989 = cljs.core.next(seq__14943_14982__$1);
var G__14990 = null;
var G__14991 = (0);
var G__14992 = (0);
seq__14943_14972 = G__14989;
chunk__14944_14973 = G__14990;
count__14945_14974 = G__14991;
i__14946_14975 = G__14992;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
return x;

}
}
}
}
}
}
});

cljs.core.IEncodeClojure = (function (){var obj14994 = {};
return obj14994;
})();

cljs.core._js__GT_clj = (function _js__GT_clj(x,options){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__3616__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (cljs.core._js__GT_clj[(function (){var G__14998 = x__4272__auto__;
return goog.typeOf(G__14998);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});

/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){
return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__15055__delegate = function (x,opts){
var map__15028 = opts;
var map__15028__$1 = ((cljs.core.seq_QMARK_(map__15028))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15028):map__15028);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15028__$1,cljs.core.constant$keyword$16);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__15028,map__15028__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if((function (){var G__15044 = x__$1;
if(G__15044){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__15044.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__15044.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__15044);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__15044);
}
})()){
return cljs.core._js__GT_clj(x__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else {
if(cljs.core.seq_QMARK_(x__$1)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(x__$1 instanceof Array){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = ((function (map__15028,map__15028__$1,keywordize_keys,keyfn){
return (function iter__15045(s__15046){
return (new cljs.core.LazySeq(null,((function (map__15028,map__15028__$1,keywordize_keys,keyfn){
return (function (){
var s__15046__$1 = s__15046;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__15046__$1);
if(temp__4126__auto__){
var s__15046__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15046__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__15046__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__15048 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__15047 = (0);
while(true){
if((i__15047 < size__4383__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__15047);
cljs.core.chunk_append(b__15048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15053 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__15053) : keyfn.call(null,G__15053));
})(),thisfn((x__$1[k]))], null));

var G__15056 = (i__15047 + (1));
i__15047 = G__15056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15048),iter__15045(cljs.core.chunk_rest(s__15046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15048),null);
}
} else {
var k = cljs.core.first(s__15046__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15054 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__15054) : keyfn.call(null,G__15054));
})(),thisfn((x__$1[k]))], null),iter__15045(cljs.core.rest(s__15046__$2)));
}
} else {
return null;
}
break;
}
});})(map__15028,map__15028__$1,keywordize_keys,keyfn))
,null,null));
});})(map__15028,map__15028__$1,keywordize_keys,keyfn))
;
return iter__4384__auto__(cljs.core.js_keys(x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__15028,map__15028__$1,keywordize_keys,keyfn))
;
return f(x);
};
var G__15055 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15055__delegate.call(this,x,opts);};
G__15055.cljs$lang$maxFixedArity = 1;
G__15055.cljs$lang$applyTo = (function (arglist__15057){
var x = cljs.core.first(arglist__15057);
var opts = cljs.core.rest(arglist__15057);
return G__15055__delegate(x,opts);
});
G__15055.cljs$core$IFn$_invoke$arity$variadic = G__15055__delegate;
return G__15055;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = (function (){var G__15060 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15060) : cljs.core.atom.call(null,G__15060));
})();
return ((function (mem){
return (function() { 
var G__15062__delegate = function (args){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__15061 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15061) : cljs.core.deref.call(null,G__15061));
})(),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__15062 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15062__delegate.call(this,args);};
G__15062.cljs$lang$maxFixedArity = 0;
G__15062.cljs$lang$applyTo = (function (arglist__15063){
var args = cljs.core.seq(arglist__15063);
return G__15062__delegate(args);
});
G__15062.cljs$core$IFn$_invoke$arity$variadic = G__15062__delegate;
return G__15062;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();
if(cljs.core.fn_QMARK_(ret)){
var G__15065 = ret;
f = G__15065;
continue;
} else {
return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__15066__delegate = function (f,args){
return trampoline.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__15066 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15066__delegate.call(this,f,args);};
G__15066.cljs$lang$maxFixedArity = 1;
G__15066.cljs$lang$applyTo = (function (arglist__15067){
var f = cljs.core.first(arglist__15067);
var args = cljs.core.rest(arglist__15067);
return G__15066__delegate(f,args);
});
G__15066.cljs$core$IFn$_invoke$arity$variadic = G__15066__delegate;
return G__15066;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){
return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
var G__15070 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__15070) : Math.floor.call(null,G__15070));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__15072 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15072) : f.call(null,G__15072));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$18,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$19,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){
if((cljs.core._global_hierarchy == null)){
cljs.core._global_hierarchy = (function (){var G__15074 = cljs.core.make_hierarchy();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15074) : cljs.core.atom.call(null,G__15074));
})();
} else {
}

return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__15075){
var f = cljs.core.first(arglist__15075);
var args = cljs.core.rest(arglist__15075);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__15140 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15140) : cljs.core.deref.call(null,G__15140));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3628__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
var and__3616__auto__ = cljs.core.vector_QMARK_(parent);
if(and__3616__auto__){
var and__3616__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__3616__auto____$1){
var and__3616__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3616__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count(parent)))){
return ret;
} else {
var G__15165 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__15163 = i;
return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__15163) : child.call(null,G__15163));
})(),(function (){var G__15164 = i;
return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__15164) : parent.call(null,G__15164));
})());
var G__15166 = (i + (1));
ret = G__15165;
i = G__15166;
continue;
}
break;
}
} else {
return and__3616__auto____$2;
}
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__15170 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15170) : cljs.core.deref.call(null,G__15170));
})(),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__15174 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15174) : cljs.core.deref.call(null,G__15174));
})(),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__15178 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15178) : cljs.core.deref.call(null,G__15178));
})(),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

var tp = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var td = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h);
var ta = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__15187 = target;
return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__15187) : targets.call(null,G__15187));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__15188 = source;
return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__15188) : sources.call(null,G__15188));
})()));
});})(tp,td,ta))
;
var or__3628__auto__ = ((cljs.core.contains_QMARK_((function (){var G__15192 = tag;
return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__15192) : tp.call(null,G__15192));
})(),parent))?null:(function (){
if(cljs.core.contains_QMARK_((function (){var G__15193 = tag;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__15193) : ta.call(null,G__15193));
})(),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_((function (){var G__15194 = parent;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__15194) : ta.call(null,G__15194));
})(),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$19,tf(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$18,tf(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var childsParents = (cljs.core.truth_((function (){var G__15201 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15201) : parentMap.call(null,G__15201));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__15202 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15202) : parentMap.call(null,G__15202));
})(),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__15195_SHARP_){
return cljs.core.cons(cljs.core.first(p1__15195_SHARP_),cljs.core.interpose(cljs.core.first(p1__15195_SHARP_),cljs.core.second(p1__15195_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((function (){var G__15203 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15203) : parentMap.call(null,G__15203));
})(),parent)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__15196_SHARP_,p2__15197_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__15196_SHARP_,p2__15197_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else {
return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){
var G__15206 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15206) : cljs.core.deref.call(null,G__15206));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){
var G__15207 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15207) : cljs.core.deref.call(null,G__15207));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = (function (){var G__15223 = prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15223) : cljs.core.deref.call(null,G__15223));
})().call(null,x);
var or__3628__auto__ = (cljs.core.truth_((function (){var and__3616__auto__ = xprefs;
if(cljs.core.truth_(and__3616__auto__)){
var G__15225 = y;
return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__15225) : xprefs.call(null,G__15225));
} else {
return and__3616__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table))){
} else {
}

var G__15226 = cljs.core.rest(ps);
ps = G__15226;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var or__3628__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table))){
} else {
}

var G__15227 = cljs.core.rest(ps);
ps = G__15227;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3628__auto____$2)){
return or__3628__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3628__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__15241){
var vec__15242 = p__15241;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242,(1),null);
var e = vec__15242;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__15243 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15243) : cljs.core.deref.call(null,G__15243));
})(),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__3628__auto__ = (be == null);
if(or__3628__auto__){
return or__3628__auto__;
} else {
return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table))){
} else {
throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}

return be2;
} else {
return be;
}
}),null,(function (){var G__15244 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15244) : cljs.core.deref.call(null,G__15244));
})());
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15245 = cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15245) : cljs.core.deref.call(null,G__15245));
})(),(function (){var G__15246 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15246) : cljs.core.deref.call(null,G__15246));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));

return cljs.core.second(best_entry);
} else {
cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);

return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else {
return null;
}
});

cljs.core.IMultiFn = (function (){var obj15248 = {};
return obj15248;
})();

cljs.core._reset = (function _reset(mf){
if((function (){var and__3616__auto__ = mf;
if(and__3616__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__3616__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__4272__auto__ = (((mf == null))?null:mf);
return (function (){var or__3628__auto__ = (cljs.core._reset[(function (){var G__15252 = x__4272__auto__;
return goog.typeOf(G__15252);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._reset["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3616__auto__ = mf;
if(and__3616__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__3616__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__4272__auto__ = (((mf == null))?null:mf);
return (function (){var or__3628__auto__ = (cljs.core._add_method[(function (){var G__15256 = x__4272__auto__;
return goog.typeOf(G__15256);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._add_method["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3616__auto__ = mf;
if(and__3616__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__3616__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__4272__auto__ = (((mf == null))?null:mf);
return (function (){var or__3628__auto__ = (cljs.core._remove_method[(function (){var G__15260 = x__4272__auto__;
return goog.typeOf(G__15260);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3616__auto__ = mf;
if(and__3616__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__3616__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__4272__auto__ = (((mf == null))?null:mf);
return (function (){var or__3628__auto__ = (cljs.core._prefer_method[(function (){var G__15264 = x__4272__auto__;
return goog.typeOf(G__15264);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3616__auto__ = mf;
if(and__3616__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__3616__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__4272__auto__ = (((mf == null))?null:mf);
return (function (){var or__3628__auto__ = (cljs.core._get_method[(function (){var G__15268 = x__4272__auto__;
return goog.typeOf(G__15268);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._get_method["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function _methods(mf){
if((function (){var and__3616__auto__ = mf;
if(and__3616__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__3616__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__4272__auto__ = (((mf == null))?null:mf);
return (function (){var or__3628__auto__ = (cljs.core._methods[(function (){var G__15272 = x__4272__auto__;
return goog.typeOf(G__15272);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._methods["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3616__auto__ = mf;
if(and__3616__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__3616__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__4272__auto__ = (((mf == null))?null:mf);
return (function (){var or__3628__auto__ = (cljs.core._prefers[(function (){var G__15276 = x__4272__auto__;
return goog.typeOf(G__15276);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core._prefers["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});

cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){
throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 4352;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__15278 = this$__$1;
return goog.getUid(G__15278);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._name(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._namespace(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){
return null;
});})(mf__$1))
);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15279 = self__.cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15279) : cljs.core.deref.call(null,G__15279));
})(),(function (){var G__15280 = self__.hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15280) : cljs.core.deref.call(null,G__15280));
})())){
} else {
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4124__auto__ = (function (){var G__15281 = self__.method_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15281) : cljs.core.deref.call(null,G__15281));
})().call(null,dispatch_val);
if(cljs.core.truth_(temp__4124__auto__)){
var target_fn = temp__4124__auto__;
return target_fn;
} else {
var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4124__auto____$1)){
var target_fn = temp__4124__auto____$1;
return target_fn;
} else {
return (function (){var G__15282 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15282) : cljs.core.deref.call(null,G__15282));
})().call(null,self__.default_dispatch_val);
}
}
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
var mf__$1 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table))){
throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);

return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__15283 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15283) : cljs.core.deref.call(null,G__15283));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__15284 = self__.prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15284) : cljs.core.deref.call(null,G__15284));
});

cljs.core.MultiFn.prototype.call = (function() {
var G__16125 = null;
var G__16125__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});
var G__16125__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15285 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__15285) : self__.dispatch_fn.call(null,G__15285));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15286 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__15286) : target_fn.call(null,G__15286));
});
var G__16125__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15287 = a;
var G__15288 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__15287,G__15288) : self__.dispatch_fn.call(null,G__15287,G__15288));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15289 = a;
var G__15290 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__15289,G__15290) : target_fn.call(null,G__15289,G__15290));
});
var G__16125__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15291 = a;
var G__15292 = b;
var G__15293 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__15291,G__15292,G__15293) : self__.dispatch_fn.call(null,G__15291,G__15292,G__15293));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15294 = a;
var G__15295 = b;
var G__15296 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__15294,G__15295,G__15296) : target_fn.call(null,G__15294,G__15295,G__15296));
});
var G__16125__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15297 = a;
var G__15298 = b;
var G__15299 = c;
var G__15300 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__15297,G__15298,G__15299,G__15300) : self__.dispatch_fn.call(null,G__15297,G__15298,G__15299,G__15300));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15301 = a;
var G__15302 = b;
var G__15303 = c;
var G__15304 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__15301,G__15302,G__15303,G__15304) : target_fn.call(null,G__15301,G__15302,G__15303,G__15304));
});
var G__16125__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15305 = a;
var G__15306 = b;
var G__15307 = c;
var G__15308 = d;
var G__15309 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__15305,G__15306,G__15307,G__15308,G__15309) : self__.dispatch_fn.call(null,G__15305,G__15306,G__15307,G__15308,G__15309));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15310 = a;
var G__15311 = b;
var G__15312 = c;
var G__15313 = d;
var G__15314 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__15310,G__15311,G__15312,G__15313,G__15314) : target_fn.call(null,G__15310,G__15311,G__15312,G__15313,G__15314));
});
var G__16125__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15315 = a;
var G__15316 = b;
var G__15317 = c;
var G__15318 = d;
var G__15319 = e;
var G__15320 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__15315,G__15316,G__15317,G__15318,G__15319,G__15320) : self__.dispatch_fn.call(null,G__15315,G__15316,G__15317,G__15318,G__15319,G__15320));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15321 = a;
var G__15322 = b;
var G__15323 = c;
var G__15324 = d;
var G__15325 = e;
var G__15326 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__15321,G__15322,G__15323,G__15324,G__15325,G__15326) : target_fn.call(null,G__15321,G__15322,G__15323,G__15324,G__15325,G__15326));
});
var G__16125__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15327 = a;
var G__15328 = b;
var G__15329 = c;
var G__15330 = d;
var G__15331 = e;
var G__15332 = f;
var G__15333 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__15327,G__15328,G__15329,G__15330,G__15331,G__15332,G__15333) : self__.dispatch_fn.call(null,G__15327,G__15328,G__15329,G__15330,G__15331,G__15332,G__15333));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15334 = a;
var G__15335 = b;
var G__15336 = c;
var G__15337 = d;
var G__15338 = e;
var G__15339 = f;
var G__15340 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__15334,G__15335,G__15336,G__15337,G__15338,G__15339,G__15340) : target_fn.call(null,G__15334,G__15335,G__15336,G__15337,G__15338,G__15339,G__15340));
});
var G__16125__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15341 = a;
var G__15342 = b;
var G__15343 = c;
var G__15344 = d;
var G__15345 = e;
var G__15346 = f;
var G__15347 = g;
var G__15348 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__15341,G__15342,G__15343,G__15344,G__15345,G__15346,G__15347,G__15348) : self__.dispatch_fn.call(null,G__15341,G__15342,G__15343,G__15344,G__15345,G__15346,G__15347,G__15348));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15349 = a;
var G__15350 = b;
var G__15351 = c;
var G__15352 = d;
var G__15353 = e;
var G__15354 = f;
var G__15355 = g;
var G__15356 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__15349,G__15350,G__15351,G__15352,G__15353,G__15354,G__15355,G__15356) : target_fn.call(null,G__15349,G__15350,G__15351,G__15352,G__15353,G__15354,G__15355,G__15356));
});
var G__16125__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15357 = a;
var G__15358 = b;
var G__15359 = c;
var G__15360 = d;
var G__15361 = e;
var G__15362 = f;
var G__15363 = g;
var G__15364 = h;
var G__15365 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__15357,G__15358,G__15359,G__15360,G__15361,G__15362,G__15363,G__15364,G__15365) : self__.dispatch_fn.call(null,G__15357,G__15358,G__15359,G__15360,G__15361,G__15362,G__15363,G__15364,G__15365));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15366 = a;
var G__15367 = b;
var G__15368 = c;
var G__15369 = d;
var G__15370 = e;
var G__15371 = f;
var G__15372 = g;
var G__15373 = h;
var G__15374 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__15366,G__15367,G__15368,G__15369,G__15370,G__15371,G__15372,G__15373,G__15374) : target_fn.call(null,G__15366,G__15367,G__15368,G__15369,G__15370,G__15371,G__15372,G__15373,G__15374));
});
var G__16125__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15375 = a;
var G__15376 = b;
var G__15377 = c;
var G__15378 = d;
var G__15379 = e;
var G__15380 = f;
var G__15381 = g;
var G__15382 = h;
var G__15383 = i;
var G__15384 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__15375,G__15376,G__15377,G__15378,G__15379,G__15380,G__15381,G__15382,G__15383,G__15384) : self__.dispatch_fn.call(null,G__15375,G__15376,G__15377,G__15378,G__15379,G__15380,G__15381,G__15382,G__15383,G__15384));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15385 = a;
var G__15386 = b;
var G__15387 = c;
var G__15388 = d;
var G__15389 = e;
var G__15390 = f;
var G__15391 = g;
var G__15392 = h;
var G__15393 = i;
var G__15394 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__15385,G__15386,G__15387,G__15388,G__15389,G__15390,G__15391,G__15392,G__15393,G__15394) : target_fn.call(null,G__15385,G__15386,G__15387,G__15388,G__15389,G__15390,G__15391,G__15392,G__15393,G__15394));
});
var G__16125__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15395 = a;
var G__15396 = b;
var G__15397 = c;
var G__15398 = d;
var G__15399 = e;
var G__15400 = f;
var G__15401 = g;
var G__15402 = h;
var G__15403 = i;
var G__15404 = j;
var G__15405 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__15395,G__15396,G__15397,G__15398,G__15399,G__15400,G__15401,G__15402,G__15403,G__15404,G__15405) : self__.dispatch_fn.call(null,G__15395,G__15396,G__15397,G__15398,G__15399,G__15400,G__15401,G__15402,G__15403,G__15404,G__15405));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15406 = a;
var G__15407 = b;
var G__15408 = c;
var G__15409 = d;
var G__15410 = e;
var G__15411 = f;
var G__15412 = g;
var G__15413 = h;
var G__15414 = i;
var G__15415 = j;
var G__15416 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__15406,G__15407,G__15408,G__15409,G__15410,G__15411,G__15412,G__15413,G__15414,G__15415,G__15416) : target_fn.call(null,G__15406,G__15407,G__15408,G__15409,G__15410,G__15411,G__15412,G__15413,G__15414,G__15415,G__15416));
});
var G__16125__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15417 = a;
var G__15418 = b;
var G__15419 = c;
var G__15420 = d;
var G__15421 = e;
var G__15422 = f;
var G__15423 = g;
var G__15424 = h;
var G__15425 = i;
var G__15426 = j;
var G__15427 = k;
var G__15428 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__15417,G__15418,G__15419,G__15420,G__15421,G__15422,G__15423,G__15424,G__15425,G__15426,G__15427,G__15428) : self__.dispatch_fn.call(null,G__15417,G__15418,G__15419,G__15420,G__15421,G__15422,G__15423,G__15424,G__15425,G__15426,G__15427,G__15428));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15429 = a;
var G__15430 = b;
var G__15431 = c;
var G__15432 = d;
var G__15433 = e;
var G__15434 = f;
var G__15435 = g;
var G__15436 = h;
var G__15437 = i;
var G__15438 = j;
var G__15439 = k;
var G__15440 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__15429,G__15430,G__15431,G__15432,G__15433,G__15434,G__15435,G__15436,G__15437,G__15438,G__15439,G__15440) : target_fn.call(null,G__15429,G__15430,G__15431,G__15432,G__15433,G__15434,G__15435,G__15436,G__15437,G__15438,G__15439,G__15440));
});
var G__16125__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15441 = a;
var G__15442 = b;
var G__15443 = c;
var G__15444 = d;
var G__15445 = e;
var G__15446 = f;
var G__15447 = g;
var G__15448 = h;
var G__15449 = i;
var G__15450 = j;
var G__15451 = k;
var G__15452 = l;
var G__15453 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__15441,G__15442,G__15443,G__15444,G__15445,G__15446,G__15447,G__15448,G__15449,G__15450,G__15451,G__15452,G__15453) : self__.dispatch_fn.call(null,G__15441,G__15442,G__15443,G__15444,G__15445,G__15446,G__15447,G__15448,G__15449,G__15450,G__15451,G__15452,G__15453));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15454 = a;
var G__15455 = b;
var G__15456 = c;
var G__15457 = d;
var G__15458 = e;
var G__15459 = f;
var G__15460 = g;
var G__15461 = h;
var G__15462 = i;
var G__15463 = j;
var G__15464 = k;
var G__15465 = l;
var G__15466 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__15454,G__15455,G__15456,G__15457,G__15458,G__15459,G__15460,G__15461,G__15462,G__15463,G__15464,G__15465,G__15466) : target_fn.call(null,G__15454,G__15455,G__15456,G__15457,G__15458,G__15459,G__15460,G__15461,G__15462,G__15463,G__15464,G__15465,G__15466));
});
var G__16125__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15467 = a;
var G__15468 = b;
var G__15469 = c;
var G__15470 = d;
var G__15471 = e;
var G__15472 = f;
var G__15473 = g;
var G__15474 = h;
var G__15475 = i;
var G__15476 = j;
var G__15477 = k;
var G__15478 = l;
var G__15479 = m;
var G__15480 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__15467,G__15468,G__15469,G__15470,G__15471,G__15472,G__15473,G__15474,G__15475,G__15476,G__15477,G__15478,G__15479,G__15480) : self__.dispatch_fn.call(null,G__15467,G__15468,G__15469,G__15470,G__15471,G__15472,G__15473,G__15474,G__15475,G__15476,G__15477,G__15478,G__15479,G__15480));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15481 = a;
var G__15482 = b;
var G__15483 = c;
var G__15484 = d;
var G__15485 = e;
var G__15486 = f;
var G__15487 = g;
var G__15488 = h;
var G__15489 = i;
var G__15490 = j;
var G__15491 = k;
var G__15492 = l;
var G__15493 = m;
var G__15494 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__15481,G__15482,G__15483,G__15484,G__15485,G__15486,G__15487,G__15488,G__15489,G__15490,G__15491,G__15492,G__15493,G__15494) : target_fn.call(null,G__15481,G__15482,G__15483,G__15484,G__15485,G__15486,G__15487,G__15488,G__15489,G__15490,G__15491,G__15492,G__15493,G__15494));
});
var G__16125__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15495 = a;
var G__15496 = b;
var G__15497 = c;
var G__15498 = d;
var G__15499 = e;
var G__15500 = f;
var G__15501 = g;
var G__15502 = h;
var G__15503 = i;
var G__15504 = j;
var G__15505 = k;
var G__15506 = l;
var G__15507 = m;
var G__15508 = n;
var G__15509 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__15495,G__15496,G__15497,G__15498,G__15499,G__15500,G__15501,G__15502,G__15503,G__15504,G__15505,G__15506,G__15507,G__15508,G__15509) : self__.dispatch_fn.call(null,G__15495,G__15496,G__15497,G__15498,G__15499,G__15500,G__15501,G__15502,G__15503,G__15504,G__15505,G__15506,G__15507,G__15508,G__15509));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15510 = a;
var G__15511 = b;
var G__15512 = c;
var G__15513 = d;
var G__15514 = e;
var G__15515 = f;
var G__15516 = g;
var G__15517 = h;
var G__15518 = i;
var G__15519 = j;
var G__15520 = k;
var G__15521 = l;
var G__15522 = m;
var G__15523 = n;
var G__15524 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__15510,G__15511,G__15512,G__15513,G__15514,G__15515,G__15516,G__15517,G__15518,G__15519,G__15520,G__15521,G__15522,G__15523,G__15524) : target_fn.call(null,G__15510,G__15511,G__15512,G__15513,G__15514,G__15515,G__15516,G__15517,G__15518,G__15519,G__15520,G__15521,G__15522,G__15523,G__15524));
});
var G__16125__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15525 = a;
var G__15526 = b;
var G__15527 = c;
var G__15528 = d;
var G__15529 = e;
var G__15530 = f;
var G__15531 = g;
var G__15532 = h;
var G__15533 = i;
var G__15534 = j;
var G__15535 = k;
var G__15536 = l;
var G__15537 = m;
var G__15538 = n;
var G__15539 = o;
var G__15540 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__15525,G__15526,G__15527,G__15528,G__15529,G__15530,G__15531,G__15532,G__15533,G__15534,G__15535,G__15536,G__15537,G__15538,G__15539,G__15540) : self__.dispatch_fn.call(null,G__15525,G__15526,G__15527,G__15528,G__15529,G__15530,G__15531,G__15532,G__15533,G__15534,G__15535,G__15536,G__15537,G__15538,G__15539,G__15540));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15541 = a;
var G__15542 = b;
var G__15543 = c;
var G__15544 = d;
var G__15545 = e;
var G__15546 = f;
var G__15547 = g;
var G__15548 = h;
var G__15549 = i;
var G__15550 = j;
var G__15551 = k;
var G__15552 = l;
var G__15553 = m;
var G__15554 = n;
var G__15555 = o;
var G__15556 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__15541,G__15542,G__15543,G__15544,G__15545,G__15546,G__15547,G__15548,G__15549,G__15550,G__15551,G__15552,G__15553,G__15554,G__15555,G__15556) : target_fn.call(null,G__15541,G__15542,G__15543,G__15544,G__15545,G__15546,G__15547,G__15548,G__15549,G__15550,G__15551,G__15552,G__15553,G__15554,G__15555,G__15556));
});
var G__16125__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15557 = a;
var G__15558 = b;
var G__15559 = c;
var G__15560 = d;
var G__15561 = e;
var G__15562 = f;
var G__15563 = g;
var G__15564 = h;
var G__15565 = i;
var G__15566 = j;
var G__15567 = k;
var G__15568 = l;
var G__15569 = m;
var G__15570 = n;
var G__15571 = o;
var G__15572 = p;
var G__15573 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__15557,G__15558,G__15559,G__15560,G__15561,G__15562,G__15563,G__15564,G__15565,G__15566,G__15567,G__15568,G__15569,G__15570,G__15571,G__15572,G__15573) : self__.dispatch_fn.call(null,G__15557,G__15558,G__15559,G__15560,G__15561,G__15562,G__15563,G__15564,G__15565,G__15566,G__15567,G__15568,G__15569,G__15570,G__15571,G__15572,G__15573));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15574 = a;
var G__15575 = b;
var G__15576 = c;
var G__15577 = d;
var G__15578 = e;
var G__15579 = f;
var G__15580 = g;
var G__15581 = h;
var G__15582 = i;
var G__15583 = j;
var G__15584 = k;
var G__15585 = l;
var G__15586 = m;
var G__15587 = n;
var G__15588 = o;
var G__15589 = p;
var G__15590 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__15574,G__15575,G__15576,G__15577,G__15578,G__15579,G__15580,G__15581,G__15582,G__15583,G__15584,G__15585,G__15586,G__15587,G__15588,G__15589,G__15590) : target_fn.call(null,G__15574,G__15575,G__15576,G__15577,G__15578,G__15579,G__15580,G__15581,G__15582,G__15583,G__15584,G__15585,G__15586,G__15587,G__15588,G__15589,G__15590));
});
var G__16125__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15591 = a;
var G__15592 = b;
var G__15593 = c;
var G__15594 = d;
var G__15595 = e;
var G__15596 = f;
var G__15597 = g;
var G__15598 = h;
var G__15599 = i;
var G__15600 = j;
var G__15601 = k;
var G__15602 = l;
var G__15603 = m;
var G__15604 = n;
var G__15605 = o;
var G__15606 = p;
var G__15607 = q;
var G__15608 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__15591,G__15592,G__15593,G__15594,G__15595,G__15596,G__15597,G__15598,G__15599,G__15600,G__15601,G__15602,G__15603,G__15604,G__15605,G__15606,G__15607,G__15608) : self__.dispatch_fn.call(null,G__15591,G__15592,G__15593,G__15594,G__15595,G__15596,G__15597,G__15598,G__15599,G__15600,G__15601,G__15602,G__15603,G__15604,G__15605,G__15606,G__15607,G__15608));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15609 = a;
var G__15610 = b;
var G__15611 = c;
var G__15612 = d;
var G__15613 = e;
var G__15614 = f;
var G__15615 = g;
var G__15616 = h;
var G__15617 = i;
var G__15618 = j;
var G__15619 = k;
var G__15620 = l;
var G__15621 = m;
var G__15622 = n;
var G__15623 = o;
var G__15624 = p;
var G__15625 = q;
var G__15626 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__15609,G__15610,G__15611,G__15612,G__15613,G__15614,G__15615,G__15616,G__15617,G__15618,G__15619,G__15620,G__15621,G__15622,G__15623,G__15624,G__15625,G__15626) : target_fn.call(null,G__15609,G__15610,G__15611,G__15612,G__15613,G__15614,G__15615,G__15616,G__15617,G__15618,G__15619,G__15620,G__15621,G__15622,G__15623,G__15624,G__15625,G__15626));
});
var G__16125__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15627 = a;
var G__15628 = b;
var G__15629 = c;
var G__15630 = d;
var G__15631 = e;
var G__15632 = f;
var G__15633 = g;
var G__15634 = h;
var G__15635 = i;
var G__15636 = j;
var G__15637 = k;
var G__15638 = l;
var G__15639 = m;
var G__15640 = n;
var G__15641 = o;
var G__15642 = p;
var G__15643 = q;
var G__15644 = r;
var G__15645 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__15627,G__15628,G__15629,G__15630,G__15631,G__15632,G__15633,G__15634,G__15635,G__15636,G__15637,G__15638,G__15639,G__15640,G__15641,G__15642,G__15643,G__15644,G__15645) : self__.dispatch_fn.call(null,G__15627,G__15628,G__15629,G__15630,G__15631,G__15632,G__15633,G__15634,G__15635,G__15636,G__15637,G__15638,G__15639,G__15640,G__15641,G__15642,G__15643,G__15644,G__15645));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15646 = a;
var G__15647 = b;
var G__15648 = c;
var G__15649 = d;
var G__15650 = e;
var G__15651 = f;
var G__15652 = g;
var G__15653 = h;
var G__15654 = i;
var G__15655 = j;
var G__15656 = k;
var G__15657 = l;
var G__15658 = m;
var G__15659 = n;
var G__15660 = o;
var G__15661 = p;
var G__15662 = q;
var G__15663 = r;
var G__15664 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__15646,G__15647,G__15648,G__15649,G__15650,G__15651,G__15652,G__15653,G__15654,G__15655,G__15656,G__15657,G__15658,G__15659,G__15660,G__15661,G__15662,G__15663,G__15664) : target_fn.call(null,G__15646,G__15647,G__15648,G__15649,G__15650,G__15651,G__15652,G__15653,G__15654,G__15655,G__15656,G__15657,G__15658,G__15659,G__15660,G__15661,G__15662,G__15663,G__15664));
});
var G__16125__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15665 = a;
var G__15666 = b;
var G__15667 = c;
var G__15668 = d;
var G__15669 = e;
var G__15670 = f;
var G__15671 = g;
var G__15672 = h;
var G__15673 = i;
var G__15674 = j;
var G__15675 = k;
var G__15676 = l;
var G__15677 = m;
var G__15678 = n;
var G__15679 = o;
var G__15680 = p;
var G__15681 = q;
var G__15682 = r;
var G__15683 = s;
var G__15684 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__15665,G__15666,G__15667,G__15668,G__15669,G__15670,G__15671,G__15672,G__15673,G__15674,G__15675,G__15676,G__15677,G__15678,G__15679,G__15680,G__15681,G__15682,G__15683,G__15684) : self__.dispatch_fn.call(null,G__15665,G__15666,G__15667,G__15668,G__15669,G__15670,G__15671,G__15672,G__15673,G__15674,G__15675,G__15676,G__15677,G__15678,G__15679,G__15680,G__15681,G__15682,G__15683,G__15684));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15685 = a;
var G__15686 = b;
var G__15687 = c;
var G__15688 = d;
var G__15689 = e;
var G__15690 = f;
var G__15691 = g;
var G__15692 = h;
var G__15693 = i;
var G__15694 = j;
var G__15695 = k;
var G__15696 = l;
var G__15697 = m;
var G__15698 = n;
var G__15699 = o;
var G__15700 = p;
var G__15701 = q;
var G__15702 = r;
var G__15703 = s;
var G__15704 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__15685,G__15686,G__15687,G__15688,G__15689,G__15690,G__15691,G__15692,G__15693,G__15694,G__15695,G__15696,G__15697,G__15698,G__15699,G__15700,G__15701,G__15702,G__15703,G__15704) : target_fn.call(null,G__15685,G__15686,G__15687,G__15688,G__15689,G__15690,G__15691,G__15692,G__15693,G__15694,G__15695,G__15696,G__15697,G__15698,G__15699,G__15700,G__15701,G__15702,G__15703,G__15704));
});
var G__16125__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__16125 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__16125__1.call(this,self__);
case 2:
return G__16125__2.call(this,self__,a);
case 3:
return G__16125__3.call(this,self__,a,b);
case 4:
return G__16125__4.call(this,self__,a,b,c);
case 5:
return G__16125__5.call(this,self__,a,b,c,d);
case 6:
return G__16125__6.call(this,self__,a,b,c,d,e);
case 7:
return G__16125__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__16125__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__16125__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__16125__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__16125__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__16125__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__16125__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__16125__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__16125__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__16125__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__16125__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__16125__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__16125__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__16125__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__16125__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__16125__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16125.cljs$core$IFn$_invoke$arity$1 = G__16125__1;
G__16125.cljs$core$IFn$_invoke$arity$2 = G__16125__2;
G__16125.cljs$core$IFn$_invoke$arity$3 = G__16125__3;
G__16125.cljs$core$IFn$_invoke$arity$4 = G__16125__4;
G__16125.cljs$core$IFn$_invoke$arity$5 = G__16125__5;
G__16125.cljs$core$IFn$_invoke$arity$6 = G__16125__6;
G__16125.cljs$core$IFn$_invoke$arity$7 = G__16125__7;
G__16125.cljs$core$IFn$_invoke$arity$8 = G__16125__8;
G__16125.cljs$core$IFn$_invoke$arity$9 = G__16125__9;
G__16125.cljs$core$IFn$_invoke$arity$10 = G__16125__10;
G__16125.cljs$core$IFn$_invoke$arity$11 = G__16125__11;
G__16125.cljs$core$IFn$_invoke$arity$12 = G__16125__12;
G__16125.cljs$core$IFn$_invoke$arity$13 = G__16125__13;
G__16125.cljs$core$IFn$_invoke$arity$14 = G__16125__14;
G__16125.cljs$core$IFn$_invoke$arity$15 = G__16125__15;
G__16125.cljs$core$IFn$_invoke$arity$16 = G__16125__16;
G__16125.cljs$core$IFn$_invoke$arity$17 = G__16125__17;
G__16125.cljs$core$IFn$_invoke$arity$18 = G__16125__18;
G__16125.cljs$core$IFn$_invoke$arity$19 = G__16125__19;
G__16125.cljs$core$IFn$_invoke$arity$20 = G__16125__20;
G__16125.cljs$core$IFn$_invoke$arity$21 = G__16125__21;
G__16125.cljs$core$IFn$_invoke$arity$22 = G__16125__22;
return G__16125;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args15277){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15277)));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var mf = this;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15705 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__15705) : self__.dispatch_fn.call(null,G__15705));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15706 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__15706) : target_fn.call(null,G__15706));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15707 = a;
var G__15708 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__15707,G__15708) : self__.dispatch_fn.call(null,G__15707,G__15708));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15709 = a;
var G__15710 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__15709,G__15710) : target_fn.call(null,G__15709,G__15710));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15711 = a;
var G__15712 = b;
var G__15713 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__15711,G__15712,G__15713) : self__.dispatch_fn.call(null,G__15711,G__15712,G__15713));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15714 = a;
var G__15715 = b;
var G__15716 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__15714,G__15715,G__15716) : target_fn.call(null,G__15714,G__15715,G__15716));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15717 = a;
var G__15718 = b;
var G__15719 = c;
var G__15720 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__15717,G__15718,G__15719,G__15720) : self__.dispatch_fn.call(null,G__15717,G__15718,G__15719,G__15720));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15721 = a;
var G__15722 = b;
var G__15723 = c;
var G__15724 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__15721,G__15722,G__15723,G__15724) : target_fn.call(null,G__15721,G__15722,G__15723,G__15724));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15725 = a;
var G__15726 = b;
var G__15727 = c;
var G__15728 = d;
var G__15729 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__15725,G__15726,G__15727,G__15728,G__15729) : self__.dispatch_fn.call(null,G__15725,G__15726,G__15727,G__15728,G__15729));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15730 = a;
var G__15731 = b;
var G__15732 = c;
var G__15733 = d;
var G__15734 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__15730,G__15731,G__15732,G__15733,G__15734) : target_fn.call(null,G__15730,G__15731,G__15732,G__15733,G__15734));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15735 = a;
var G__15736 = b;
var G__15737 = c;
var G__15738 = d;
var G__15739 = e;
var G__15740 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__15735,G__15736,G__15737,G__15738,G__15739,G__15740) : self__.dispatch_fn.call(null,G__15735,G__15736,G__15737,G__15738,G__15739,G__15740));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15741 = a;
var G__15742 = b;
var G__15743 = c;
var G__15744 = d;
var G__15745 = e;
var G__15746 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__15741,G__15742,G__15743,G__15744,G__15745,G__15746) : target_fn.call(null,G__15741,G__15742,G__15743,G__15744,G__15745,G__15746));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15747 = a;
var G__15748 = b;
var G__15749 = c;
var G__15750 = d;
var G__15751 = e;
var G__15752 = f;
var G__15753 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__15747,G__15748,G__15749,G__15750,G__15751,G__15752,G__15753) : self__.dispatch_fn.call(null,G__15747,G__15748,G__15749,G__15750,G__15751,G__15752,G__15753));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15754 = a;
var G__15755 = b;
var G__15756 = c;
var G__15757 = d;
var G__15758 = e;
var G__15759 = f;
var G__15760 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__15754,G__15755,G__15756,G__15757,G__15758,G__15759,G__15760) : target_fn.call(null,G__15754,G__15755,G__15756,G__15757,G__15758,G__15759,G__15760));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15761 = a;
var G__15762 = b;
var G__15763 = c;
var G__15764 = d;
var G__15765 = e;
var G__15766 = f;
var G__15767 = g;
var G__15768 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__15761,G__15762,G__15763,G__15764,G__15765,G__15766,G__15767,G__15768) : self__.dispatch_fn.call(null,G__15761,G__15762,G__15763,G__15764,G__15765,G__15766,G__15767,G__15768));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15769 = a;
var G__15770 = b;
var G__15771 = c;
var G__15772 = d;
var G__15773 = e;
var G__15774 = f;
var G__15775 = g;
var G__15776 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__15769,G__15770,G__15771,G__15772,G__15773,G__15774,G__15775,G__15776) : target_fn.call(null,G__15769,G__15770,G__15771,G__15772,G__15773,G__15774,G__15775,G__15776));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15777 = a;
var G__15778 = b;
var G__15779 = c;
var G__15780 = d;
var G__15781 = e;
var G__15782 = f;
var G__15783 = g;
var G__15784 = h;
var G__15785 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__15777,G__15778,G__15779,G__15780,G__15781,G__15782,G__15783,G__15784,G__15785) : self__.dispatch_fn.call(null,G__15777,G__15778,G__15779,G__15780,G__15781,G__15782,G__15783,G__15784,G__15785));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15786 = a;
var G__15787 = b;
var G__15788 = c;
var G__15789 = d;
var G__15790 = e;
var G__15791 = f;
var G__15792 = g;
var G__15793 = h;
var G__15794 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__15786,G__15787,G__15788,G__15789,G__15790,G__15791,G__15792,G__15793,G__15794) : target_fn.call(null,G__15786,G__15787,G__15788,G__15789,G__15790,G__15791,G__15792,G__15793,G__15794));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15795 = a;
var G__15796 = b;
var G__15797 = c;
var G__15798 = d;
var G__15799 = e;
var G__15800 = f;
var G__15801 = g;
var G__15802 = h;
var G__15803 = i;
var G__15804 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__15795,G__15796,G__15797,G__15798,G__15799,G__15800,G__15801,G__15802,G__15803,G__15804) : self__.dispatch_fn.call(null,G__15795,G__15796,G__15797,G__15798,G__15799,G__15800,G__15801,G__15802,G__15803,G__15804));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15805 = a;
var G__15806 = b;
var G__15807 = c;
var G__15808 = d;
var G__15809 = e;
var G__15810 = f;
var G__15811 = g;
var G__15812 = h;
var G__15813 = i;
var G__15814 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__15805,G__15806,G__15807,G__15808,G__15809,G__15810,G__15811,G__15812,G__15813,G__15814) : target_fn.call(null,G__15805,G__15806,G__15807,G__15808,G__15809,G__15810,G__15811,G__15812,G__15813,G__15814));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15815 = a;
var G__15816 = b;
var G__15817 = c;
var G__15818 = d;
var G__15819 = e;
var G__15820 = f;
var G__15821 = g;
var G__15822 = h;
var G__15823 = i;
var G__15824 = j;
var G__15825 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__15815,G__15816,G__15817,G__15818,G__15819,G__15820,G__15821,G__15822,G__15823,G__15824,G__15825) : self__.dispatch_fn.call(null,G__15815,G__15816,G__15817,G__15818,G__15819,G__15820,G__15821,G__15822,G__15823,G__15824,G__15825));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15826 = a;
var G__15827 = b;
var G__15828 = c;
var G__15829 = d;
var G__15830 = e;
var G__15831 = f;
var G__15832 = g;
var G__15833 = h;
var G__15834 = i;
var G__15835 = j;
var G__15836 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__15826,G__15827,G__15828,G__15829,G__15830,G__15831,G__15832,G__15833,G__15834,G__15835,G__15836) : target_fn.call(null,G__15826,G__15827,G__15828,G__15829,G__15830,G__15831,G__15832,G__15833,G__15834,G__15835,G__15836));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15837 = a;
var G__15838 = b;
var G__15839 = c;
var G__15840 = d;
var G__15841 = e;
var G__15842 = f;
var G__15843 = g;
var G__15844 = h;
var G__15845 = i;
var G__15846 = j;
var G__15847 = k;
var G__15848 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__15837,G__15838,G__15839,G__15840,G__15841,G__15842,G__15843,G__15844,G__15845,G__15846,G__15847,G__15848) : self__.dispatch_fn.call(null,G__15837,G__15838,G__15839,G__15840,G__15841,G__15842,G__15843,G__15844,G__15845,G__15846,G__15847,G__15848));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15849 = a;
var G__15850 = b;
var G__15851 = c;
var G__15852 = d;
var G__15853 = e;
var G__15854 = f;
var G__15855 = g;
var G__15856 = h;
var G__15857 = i;
var G__15858 = j;
var G__15859 = k;
var G__15860 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__15849,G__15850,G__15851,G__15852,G__15853,G__15854,G__15855,G__15856,G__15857,G__15858,G__15859,G__15860) : target_fn.call(null,G__15849,G__15850,G__15851,G__15852,G__15853,G__15854,G__15855,G__15856,G__15857,G__15858,G__15859,G__15860));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15861 = a;
var G__15862 = b;
var G__15863 = c;
var G__15864 = d;
var G__15865 = e;
var G__15866 = f;
var G__15867 = g;
var G__15868 = h;
var G__15869 = i;
var G__15870 = j;
var G__15871 = k;
var G__15872 = l;
var G__15873 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__15861,G__15862,G__15863,G__15864,G__15865,G__15866,G__15867,G__15868,G__15869,G__15870,G__15871,G__15872,G__15873) : self__.dispatch_fn.call(null,G__15861,G__15862,G__15863,G__15864,G__15865,G__15866,G__15867,G__15868,G__15869,G__15870,G__15871,G__15872,G__15873));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15874 = a;
var G__15875 = b;
var G__15876 = c;
var G__15877 = d;
var G__15878 = e;
var G__15879 = f;
var G__15880 = g;
var G__15881 = h;
var G__15882 = i;
var G__15883 = j;
var G__15884 = k;
var G__15885 = l;
var G__15886 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__15874,G__15875,G__15876,G__15877,G__15878,G__15879,G__15880,G__15881,G__15882,G__15883,G__15884,G__15885,G__15886) : target_fn.call(null,G__15874,G__15875,G__15876,G__15877,G__15878,G__15879,G__15880,G__15881,G__15882,G__15883,G__15884,G__15885,G__15886));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15887 = a;
var G__15888 = b;
var G__15889 = c;
var G__15890 = d;
var G__15891 = e;
var G__15892 = f;
var G__15893 = g;
var G__15894 = h;
var G__15895 = i;
var G__15896 = j;
var G__15897 = k;
var G__15898 = l;
var G__15899 = m;
var G__15900 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__15887,G__15888,G__15889,G__15890,G__15891,G__15892,G__15893,G__15894,G__15895,G__15896,G__15897,G__15898,G__15899,G__15900) : self__.dispatch_fn.call(null,G__15887,G__15888,G__15889,G__15890,G__15891,G__15892,G__15893,G__15894,G__15895,G__15896,G__15897,G__15898,G__15899,G__15900));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15901 = a;
var G__15902 = b;
var G__15903 = c;
var G__15904 = d;
var G__15905 = e;
var G__15906 = f;
var G__15907 = g;
var G__15908 = h;
var G__15909 = i;
var G__15910 = j;
var G__15911 = k;
var G__15912 = l;
var G__15913 = m;
var G__15914 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__15901,G__15902,G__15903,G__15904,G__15905,G__15906,G__15907,G__15908,G__15909,G__15910,G__15911,G__15912,G__15913,G__15914) : target_fn.call(null,G__15901,G__15902,G__15903,G__15904,G__15905,G__15906,G__15907,G__15908,G__15909,G__15910,G__15911,G__15912,G__15913,G__15914));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15915 = a;
var G__15916 = b;
var G__15917 = c;
var G__15918 = d;
var G__15919 = e;
var G__15920 = f;
var G__15921 = g;
var G__15922 = h;
var G__15923 = i;
var G__15924 = j;
var G__15925 = k;
var G__15926 = l;
var G__15927 = m;
var G__15928 = n;
var G__15929 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__15915,G__15916,G__15917,G__15918,G__15919,G__15920,G__15921,G__15922,G__15923,G__15924,G__15925,G__15926,G__15927,G__15928,G__15929) : self__.dispatch_fn.call(null,G__15915,G__15916,G__15917,G__15918,G__15919,G__15920,G__15921,G__15922,G__15923,G__15924,G__15925,G__15926,G__15927,G__15928,G__15929));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15930 = a;
var G__15931 = b;
var G__15932 = c;
var G__15933 = d;
var G__15934 = e;
var G__15935 = f;
var G__15936 = g;
var G__15937 = h;
var G__15938 = i;
var G__15939 = j;
var G__15940 = k;
var G__15941 = l;
var G__15942 = m;
var G__15943 = n;
var G__15944 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__15930,G__15931,G__15932,G__15933,G__15934,G__15935,G__15936,G__15937,G__15938,G__15939,G__15940,G__15941,G__15942,G__15943,G__15944) : target_fn.call(null,G__15930,G__15931,G__15932,G__15933,G__15934,G__15935,G__15936,G__15937,G__15938,G__15939,G__15940,G__15941,G__15942,G__15943,G__15944));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15945 = a;
var G__15946 = b;
var G__15947 = c;
var G__15948 = d;
var G__15949 = e;
var G__15950 = f;
var G__15951 = g;
var G__15952 = h;
var G__15953 = i;
var G__15954 = j;
var G__15955 = k;
var G__15956 = l;
var G__15957 = m;
var G__15958 = n;
var G__15959 = o;
var G__15960 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__15945,G__15946,G__15947,G__15948,G__15949,G__15950,G__15951,G__15952,G__15953,G__15954,G__15955,G__15956,G__15957,G__15958,G__15959,G__15960) : self__.dispatch_fn.call(null,G__15945,G__15946,G__15947,G__15948,G__15949,G__15950,G__15951,G__15952,G__15953,G__15954,G__15955,G__15956,G__15957,G__15958,G__15959,G__15960));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15961 = a;
var G__15962 = b;
var G__15963 = c;
var G__15964 = d;
var G__15965 = e;
var G__15966 = f;
var G__15967 = g;
var G__15968 = h;
var G__15969 = i;
var G__15970 = j;
var G__15971 = k;
var G__15972 = l;
var G__15973 = m;
var G__15974 = n;
var G__15975 = o;
var G__15976 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__15961,G__15962,G__15963,G__15964,G__15965,G__15966,G__15967,G__15968,G__15969,G__15970,G__15971,G__15972,G__15973,G__15974,G__15975,G__15976) : target_fn.call(null,G__15961,G__15962,G__15963,G__15964,G__15965,G__15966,G__15967,G__15968,G__15969,G__15970,G__15971,G__15972,G__15973,G__15974,G__15975,G__15976));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15977 = a;
var G__15978 = b;
var G__15979 = c;
var G__15980 = d;
var G__15981 = e;
var G__15982 = f;
var G__15983 = g;
var G__15984 = h;
var G__15985 = i;
var G__15986 = j;
var G__15987 = k;
var G__15988 = l;
var G__15989 = m;
var G__15990 = n;
var G__15991 = o;
var G__15992 = p;
var G__15993 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__15977,G__15978,G__15979,G__15980,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986,G__15987,G__15988,G__15989,G__15990,G__15991,G__15992,G__15993) : self__.dispatch_fn.call(null,G__15977,G__15978,G__15979,G__15980,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986,G__15987,G__15988,G__15989,G__15990,G__15991,G__15992,G__15993));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15994 = a;
var G__15995 = b;
var G__15996 = c;
var G__15997 = d;
var G__15998 = e;
var G__15999 = f;
var G__16000 = g;
var G__16001 = h;
var G__16002 = i;
var G__16003 = j;
var G__16004 = k;
var G__16005 = l;
var G__16006 = m;
var G__16007 = n;
var G__16008 = o;
var G__16009 = p;
var G__16010 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__15994,G__15995,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003,G__16004,G__16005,G__16006,G__16007,G__16008,G__16009,G__16010) : target_fn.call(null,G__15994,G__15995,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003,G__16004,G__16005,G__16006,G__16007,G__16008,G__16009,G__16010));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16011 = a;
var G__16012 = b;
var G__16013 = c;
var G__16014 = d;
var G__16015 = e;
var G__16016 = f;
var G__16017 = g;
var G__16018 = h;
var G__16019 = i;
var G__16020 = j;
var G__16021 = k;
var G__16022 = l;
var G__16023 = m;
var G__16024 = n;
var G__16025 = o;
var G__16026 = p;
var G__16027 = q;
var G__16028 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__16011,G__16012,G__16013,G__16014,G__16015,G__16016,G__16017,G__16018,G__16019,G__16020,G__16021,G__16022,G__16023,G__16024,G__16025,G__16026,G__16027,G__16028) : self__.dispatch_fn.call(null,G__16011,G__16012,G__16013,G__16014,G__16015,G__16016,G__16017,G__16018,G__16019,G__16020,G__16021,G__16022,G__16023,G__16024,G__16025,G__16026,G__16027,G__16028));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16029 = a;
var G__16030 = b;
var G__16031 = c;
var G__16032 = d;
var G__16033 = e;
var G__16034 = f;
var G__16035 = g;
var G__16036 = h;
var G__16037 = i;
var G__16038 = j;
var G__16039 = k;
var G__16040 = l;
var G__16041 = m;
var G__16042 = n;
var G__16043 = o;
var G__16044 = p;
var G__16045 = q;
var G__16046 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__16029,G__16030,G__16031,G__16032,G__16033,G__16034,G__16035,G__16036,G__16037,G__16038,G__16039,G__16040,G__16041,G__16042,G__16043,G__16044,G__16045,G__16046) : target_fn.call(null,G__16029,G__16030,G__16031,G__16032,G__16033,G__16034,G__16035,G__16036,G__16037,G__16038,G__16039,G__16040,G__16041,G__16042,G__16043,G__16044,G__16045,G__16046));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16047 = a;
var G__16048 = b;
var G__16049 = c;
var G__16050 = d;
var G__16051 = e;
var G__16052 = f;
var G__16053 = g;
var G__16054 = h;
var G__16055 = i;
var G__16056 = j;
var G__16057 = k;
var G__16058 = l;
var G__16059 = m;
var G__16060 = n;
var G__16061 = o;
var G__16062 = p;
var G__16063 = q;
var G__16064 = r;
var G__16065 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__16047,G__16048,G__16049,G__16050,G__16051,G__16052,G__16053,G__16054,G__16055,G__16056,G__16057,G__16058,G__16059,G__16060,G__16061,G__16062,G__16063,G__16064,G__16065) : self__.dispatch_fn.call(null,G__16047,G__16048,G__16049,G__16050,G__16051,G__16052,G__16053,G__16054,G__16055,G__16056,G__16057,G__16058,G__16059,G__16060,G__16061,G__16062,G__16063,G__16064,G__16065));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16066 = a;
var G__16067 = b;
var G__16068 = c;
var G__16069 = d;
var G__16070 = e;
var G__16071 = f;
var G__16072 = g;
var G__16073 = h;
var G__16074 = i;
var G__16075 = j;
var G__16076 = k;
var G__16077 = l;
var G__16078 = m;
var G__16079 = n;
var G__16080 = o;
var G__16081 = p;
var G__16082 = q;
var G__16083 = r;
var G__16084 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__16066,G__16067,G__16068,G__16069,G__16070,G__16071,G__16072,G__16073,G__16074,G__16075,G__16076,G__16077,G__16078,G__16079,G__16080,G__16081,G__16082,G__16083,G__16084) : target_fn.call(null,G__16066,G__16067,G__16068,G__16069,G__16070,G__16071,G__16072,G__16073,G__16074,G__16075,G__16076,G__16077,G__16078,G__16079,G__16080,G__16081,G__16082,G__16083,G__16084));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16085 = a;
var G__16086 = b;
var G__16087 = c;
var G__16088 = d;
var G__16089 = e;
var G__16090 = f;
var G__16091 = g;
var G__16092 = h;
var G__16093 = i;
var G__16094 = j;
var G__16095 = k;
var G__16096 = l;
var G__16097 = m;
var G__16098 = n;
var G__16099 = o;
var G__16100 = p;
var G__16101 = q;
var G__16102 = r;
var G__16103 = s;
var G__16104 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__16085,G__16086,G__16087,G__16088,G__16089,G__16090,G__16091,G__16092,G__16093,G__16094,G__16095,G__16096,G__16097,G__16098,G__16099,G__16100,G__16101,G__16102,G__16103,G__16104) : self__.dispatch_fn.call(null,G__16085,G__16086,G__16087,G__16088,G__16089,G__16090,G__16091,G__16092,G__16093,G__16094,G__16095,G__16096,G__16097,G__16098,G__16099,G__16100,G__16101,G__16102,G__16103,G__16104));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16105 = a;
var G__16106 = b;
var G__16107 = c;
var G__16108 = d;
var G__16109 = e;
var G__16110 = f;
var G__16111 = g;
var G__16112 = h;
var G__16113 = i;
var G__16114 = j;
var G__16115 = k;
var G__16116 = l;
var G__16117 = m;
var G__16118 = n;
var G__16119 = o;
var G__16120 = p;
var G__16121 = q;
var G__16122 = r;
var G__16123 = s;
var G__16124 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111,G__16112,G__16113,G__16114,G__16115,G__16116,G__16117,G__16118,G__16119,G__16120,G__16121,G__16122,G__16123,G__16124) : target_fn.call(null,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111,G__16112,G__16113,G__16114,G__16115,G__16116,G__16117,G__16118,G__16119,G__16120,G__16121,G__16122,G__16123,G__16124));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var mf = this;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

cljs.core.MultiFn.cljs$lang$type = true;

cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/MultiFn");
});

cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});

/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__16126 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));
return goog.string.hashCode(G__16126);
});

cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});

cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.uuid;
});

cljs.core.UUID.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/UUID");
});

cljs.core.__GT_UUID = (function __GT_UUID(uuid){
return (new cljs.core.UUID(uuid));
});


/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})

cljs.core.ExceptionInfo.cljs$lang$type = true;

cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core/ExceptionInfo");
});

cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){
return (new cljs.core.ExceptionInfo(message,data,cause));
});

cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.data;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){
return (function (x,y){
if(cljs.core.truth_((function (){var G__16131 = x;
var G__16132 = y;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__16131,G__16132) : pred.call(null,G__16131,G__16132));
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__16133 = y;
var G__16134 = x;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__16133,G__16134) : pred.call(null,G__16133,G__16134));
})())){
return (1);
} else {
return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
/**
* test [v] finds fn at key :test in var metadata and calls it,
* presuming failure will throw exception
*/
cljs.core.test = (function test(v){
var f = v.cljs$lang$test;
if(cljs.core.truth_(f)){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.core.constant$keyword$20;
} else {
return cljs.core.constant$keyword$21;
}
});
