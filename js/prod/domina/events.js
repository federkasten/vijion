// Compiled by ClojureScript 0.0-2496
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');

domina.events.Event = (function (){var obj16834 = {};
return obj16834;
})();

domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3616__auto__ = evt;
if(and__3616__auto__){
return evt.domina$events$Event$prevent_default$arity$1;
} else {
return and__3616__auto__;
}
})()){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__4272__auto__ = (((evt == null))?null:evt);
return (function (){var or__3628__auto__ = (domina.events.prevent_default[(function (){var G__16838 = x__4272__auto__;
return goog.typeOf(G__16838);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});

domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3616__auto__ = evt;
if(and__3616__auto__){
return evt.domina$events$Event$stop_propagation$arity$1;
} else {
return and__3616__auto__;
}
})()){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__4272__auto__ = (((evt == null))?null:evt);
return (function (){var or__3628__auto__ = (domina.events.stop_propagation[(function (){var G__16842 = x__4272__auto__;
return goog.typeOf(G__16842);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});

domina.events.target = (function target(evt){
if((function (){var and__3616__auto__ = evt;
if(and__3616__auto__){
return evt.domina$events$Event$target$arity$1;
} else {
return and__3616__auto__;
}
})()){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__4272__auto__ = (((evt == null))?null:evt);
return (function (){var or__3628__auto__ = (domina.events.target[(function (){var G__16846 = x__4272__auto__;
return goog.typeOf(G__16846);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (domina.events.target["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});

domina.events.current_target = (function current_target(evt){
if((function (){var and__3616__auto__ = evt;
if(and__3616__auto__){
return evt.domina$events$Event$current_target$arity$1;
} else {
return and__3616__auto__;
}
})()){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__4272__auto__ = (((evt == null))?null:evt);
return (function (){var or__3628__auto__ = (domina.events.current_target[(function (){var G__16850 = x__4272__auto__;
return goog.typeOf(G__16850);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (domina.events.current_target["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});

domina.events.event_type = (function event_type(evt){
if((function (){var and__3616__auto__ = evt;
if(and__3616__auto__){
return evt.domina$events$Event$event_type$arity$1;
} else {
return and__3616__auto__;
}
})()){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__4272__auto__ = (((evt == null))?null:evt);
return (function (){var or__3628__auto__ = (domina.events.event_type[(function (){var G__16854 = x__4272__auto__;
return goog.typeOf(G__16854);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (domina.events.event_type["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});

domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3616__auto__ = evt;
if(and__3616__auto__){
return evt.domina$events$Event$raw_event$arity$1;
} else {
return and__3616__auto__;
}
})()){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__4272__auto__ = (((evt == null))?null:evt);
return (function (){var or__3628__auto__ = (domina.events.raw_event[(function (){var G__16858 = x__4272__auto__;
return goog.typeOf(G__16858);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (domina.events.raw_event["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
var G__16863_16867 = (function (){
if(typeof domina.events.t16864 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.events.t16864 = (function (evt,f,create_listener_function,meta16865){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16865 = meta16865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16864.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4124__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4124__auto__)){
var val = temp__4124__auto__;
return val;
} else {
return (self__.evt[cljs.core.name(k)]);
}
});

domina.events.t16864.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__3628__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return not_found;
}
});

domina.events.t16864.prototype.domina$events$Event$ = true;

domina.events.t16864.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t16864.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t16864.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t16864.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t16864.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t16864.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t16864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16866){
var self__ = this;
var _16866__$1 = this;
return self__.meta16865;
});

domina.events.t16864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16866,meta16865__$1){
var self__ = this;
var _16866__$1 = this;
return (new domina.events.t16864(self__.evt,self__.f,self__.create_listener_function,meta16865__$1));
});

domina.events.t16864.cljs$lang$type = true;

domina.events.t16864.cljs$lang$ctorStr = "domina.events/t16864";

domina.events.t16864.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"domina.events/t16864");
});

domina.events.__GT_t16864 = (function __GT_t16864(evt__$1,f__$1,create_listener_function__$1,meta16865){
return (new domina.events.t16864(evt__$1,f__$1,create_listener_function__$1,meta16865));
});

}

return (new domina.events.t16864(evt,f,create_listener_function,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,51,cljs.core.constant$keyword$9,42,cljs.core.constant$keyword$10,8,cljs.core.constant$keyword$11,28,cljs.core.constant$keyword$12,"/Users/takashi/Desktop/vijion/html/js/prod/domina/events.cljs"], null)));
})()
;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16863_16867) : f.call(null,G__16863_16867));

return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = cljs.core.name(type);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4384__auto__ = ((function (f,t){
return (function iter__16906(s__16907){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__16907__$1 = s__16907;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16907__$1);
if(temp__4126__auto__){
var s__16907__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16907__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__16907__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__16909 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__16908 = (0);
while(true){
if((i__16908 < size__4383__auto__)){
var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__16908);
cljs.core.chunk_append(b__16909,(cljs.core.truth_(once)?(function (){var G__16928 = node;
var G__16929 = t;
var G__16930 = f;
var G__16931 = capture;
return goog.events.listenOnce(G__16928,G__16929,G__16930,G__16931);
})():(function (){var G__16932 = node;
var G__16933 = t;
var G__16934 = f;
var G__16935 = capture;
return goog.events.listen(G__16932,G__16933,G__16934,G__16935);
})()));

var G__16944 = (i__16908 + (1));
i__16908 = G__16944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16909),iter__16906(cljs.core.chunk_rest(s__16907__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16909),null);
}
} else {
var node = cljs.core.first(s__16907__$2);
return cljs.core.cons((cljs.core.truth_(once)?(function (){var G__16936 = node;
var G__16937 = t;
var G__16938 = f;
var G__16939 = capture;
return goog.events.listenOnce(G__16936,G__16937,G__16938,G__16939);
})():(function (){var G__16940 = node;
var G__16941 = t;
var G__16942 = f;
var G__16943 = capture;
return goog.events.listen(G__16940,G__16941,G__16942,G__16943);
})()),iter__16906(cljs.core.rest(s__16907__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__4384__auto__(domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.cljs$core$IFn$_invoke$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__16972 = cljs.core.seq(domina.nodes(content));
var chunk__16973 = null;
var count__16974 = (0);
var i__16975 = (0);
while(true){
if((i__16975 < count__16974)){
var node = chunk__16973.cljs$core$IIndexed$_nth$arity$2(null,i__16975);
var G__16976_16986 = node;
goog.events.removeAll(G__16976_16986);

var G__16987 = seq__16972;
var G__16988 = chunk__16973;
var G__16989 = count__16974;
var G__16990 = (i__16975 + (1));
seq__16972 = G__16987;
chunk__16973 = G__16988;
count__16974 = G__16989;
i__16975 = G__16990;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16972);
if(temp__4126__auto__){
var seq__16972__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16972__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__16972__$1);
var G__16991 = cljs.core.chunk_rest(seq__16972__$1);
var G__16992 = c__4415__auto__;
var G__16993 = cljs.core.count(c__4415__auto__);
var G__16994 = (0);
seq__16972 = G__16991;
chunk__16973 = G__16992;
count__16974 = G__16993;
i__16975 = G__16994;
continue;
} else {
var node = cljs.core.first(seq__16972__$1);
var G__16977_16995 = node;
goog.events.removeAll(G__16977_16995);

var G__16996 = cljs.core.next(seq__16972__$1);
var G__16997 = null;
var G__16998 = (0);
var G__16999 = (0);
seq__16972 = G__16996;
chunk__16973 = G__16997;
count__16974 = G__16998;
i__16975 = G__16999;
continue;
}
} else {
return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__$1 = cljs.core.name(type);
var seq__16978 = cljs.core.seq(domina.nodes(content));
var chunk__16979 = null;
var count__16980 = (0);
var i__16981 = (0);
while(true){
if((i__16981 < count__16980)){
var node = chunk__16979.cljs$core$IIndexed$_nth$arity$2(null,i__16981);
var G__16982_17000 = node;
var G__16983_17001 = type__$1;
goog.events.removeAll(G__16982_17000,G__16983_17001);

var G__17002 = seq__16978;
var G__17003 = chunk__16979;
var G__17004 = count__16980;
var G__17005 = (i__16981 + (1));
seq__16978 = G__17002;
chunk__16979 = G__17003;
count__16980 = G__17004;
i__16981 = G__17005;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16978);
if(temp__4126__auto__){
var seq__16978__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16978__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__16978__$1);
var G__17006 = cljs.core.chunk_rest(seq__16978__$1);
var G__17007 = c__4415__auto__;
var G__17008 = cljs.core.count(c__4415__auto__);
var G__17009 = (0);
seq__16978 = G__17006;
chunk__16979 = G__17007;
count__16980 = G__17008;
i__16981 = G__17009;
continue;
} else {
var node = cljs.core.first(seq__16978__$1);
var G__16984_17010 = node;
var G__16985_17011 = type__$1;
goog.events.removeAll(G__16984_17010,G__16985_17011);

var G__17012 = cljs.core.next(seq__16978__$1);
var G__17013 = null;
var G__17014 = (0);
var G__17015 = (0);
seq__16978 = G__17012;
chunk__16979 = G__17013;
count__16980 = G__17014;
i__16981 = G__17015;
continue;
}
} else {
return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4124__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4124__auto__)){
var parent = temp__4124__auto__;
var G__17018 = parent;
var G__17019 = cljs.core.cons(parent,so_far);
n = G__17018;
so_far = G__17019;
continue;
} else {
return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node(source);

var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));
var seq__17044_17068 = cljs.core.seq(ancestors);
var chunk__17045_17069 = null;
var count__17046_17070 = (0);
var i__17047_17071 = (0);
while(true){
if((i__17047_17071 < count__17046_17070)){
var n_17072 = chunk__17045_17069.cljs$core$IIndexed$_nth$arity$2(null,i__17047_17071);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_17072;

var G__17048_17073 = n_17072;
var G__17049_17074 = evt.type;
var G__17050_17075 = true;
var G__17051_17076 = evt;
goog.events.fireListeners(G__17048_17073,G__17049_17074,G__17050_17075,G__17051_17076);
}

var G__17077 = seq__17044_17068;
var G__17078 = chunk__17045_17069;
var G__17079 = count__17046_17070;
var G__17080 = (i__17047_17071 + (1));
seq__17044_17068 = G__17077;
chunk__17045_17069 = G__17078;
count__17046_17070 = G__17079;
i__17047_17071 = G__17080;
continue;
} else {
var temp__4126__auto___17081 = cljs.core.seq(seq__17044_17068);
if(temp__4126__auto___17081){
var seq__17044_17082__$1 = temp__4126__auto___17081;
if(cljs.core.chunked_seq_QMARK_(seq__17044_17082__$1)){
var c__4415__auto___17083 = cljs.core.chunk_first(seq__17044_17082__$1);
var G__17084 = cljs.core.chunk_rest(seq__17044_17082__$1);
var G__17085 = c__4415__auto___17083;
var G__17086 = cljs.core.count(c__4415__auto___17083);
var G__17087 = (0);
seq__17044_17068 = G__17084;
chunk__17045_17069 = G__17085;
count__17046_17070 = G__17086;
i__17047_17071 = G__17087;
continue;
} else {
var n_17088 = cljs.core.first(seq__17044_17082__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_17088;

var G__17052_17089 = n_17088;
var G__17053_17090 = evt.type;
var G__17054_17091 = true;
var G__17055_17092 = evt;
goog.events.fireListeners(G__17052_17089,G__17053_17090,G__17054_17091,G__17055_17092);
}

var G__17093 = cljs.core.next(seq__17044_17082__$1);
var G__17094 = null;
var G__17095 = (0);
var G__17096 = (0);
seq__17044_17068 = G__17093;
chunk__17045_17069 = G__17094;
count__17046_17070 = G__17095;
i__17047_17071 = G__17096;
continue;
}
} else {
}
}
break;
}

var seq__17056_17097 = cljs.core.seq(cljs.core.reverse(ancestors));
var chunk__17057_17098 = null;
var count__17058_17099 = (0);
var i__17059_17100 = (0);
while(true){
if((i__17059_17100 < count__17058_17099)){
var n_17101 = chunk__17057_17098.cljs$core$IIndexed$_nth$arity$2(null,i__17059_17100);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_17101;

var G__17060_17102 = n_17101;
var G__17061_17103 = evt.type;
var G__17062_17104 = false;
var G__17063_17105 = evt;
goog.events.fireListeners(G__17060_17102,G__17061_17103,G__17062_17104,G__17063_17105);
}

var G__17106 = seq__17056_17097;
var G__17107 = chunk__17057_17098;
var G__17108 = count__17058_17099;
var G__17109 = (i__17059_17100 + (1));
seq__17056_17097 = G__17106;
chunk__17057_17098 = G__17107;
count__17058_17099 = G__17108;
i__17059_17100 = G__17109;
continue;
} else {
var temp__4126__auto___17110 = cljs.core.seq(seq__17056_17097);
if(temp__4126__auto___17110){
var seq__17056_17111__$1 = temp__4126__auto___17110;
if(cljs.core.chunked_seq_QMARK_(seq__17056_17111__$1)){
var c__4415__auto___17112 = cljs.core.chunk_first(seq__17056_17111__$1);
var G__17113 = cljs.core.chunk_rest(seq__17056_17111__$1);
var G__17114 = c__4415__auto___17112;
var G__17115 = cljs.core.count(c__4415__auto___17112);
var G__17116 = (0);
seq__17056_17097 = G__17113;
chunk__17057_17098 = G__17114;
count__17058_17099 = G__17115;
i__17059_17100 = G__17116;
continue;
} else {
var n_17117 = cljs.core.first(seq__17056_17111__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_17117;

var G__17064_17118 = n_17117;
var G__17065_17119 = evt.type;
var G__17066_17120 = false;
var G__17067_17121 = evt;
goog.events.fireListeners(G__17064_17118,G__17065_17119,G__17066_17120,G__17067_17121);
}

var G__17122 = cljs.core.next(seq__17056_17111__$1);
var G__17123 = null;
var G__17124 = (0);
var G__17125 = (0);
seq__17056_17097 = G__17122;
chunk__17057_17098 = G__17123;
count__17058_17099 = G__17124;
i__17059_17100 = G__17125;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
var G__17128 = source;
var G__17129 = evt;
return goog.events.dispatchEvent(G__17128,G__17129);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3616__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3616__auto__)){
return o.dispatchEvent;
} else {
return and__3616__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name(type)));
var seq__17139_17145 = cljs.core.seq(evt_map);
var chunk__17140_17146 = null;
var count__17141_17147 = (0);
var i__17142_17148 = (0);
while(true){
if((i__17142_17148 < count__17141_17147)){
var vec__17143_17149 = chunk__17140_17146.cljs$core$IIndexed$_nth$arity$2(null,i__17142_17148);
var k_17150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17143_17149,(0),null);
var v_17151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17143_17149,(1),null);
(evt[k_17150] = v_17151);

var G__17152 = seq__17139_17145;
var G__17153 = chunk__17140_17146;
var G__17154 = count__17141_17147;
var G__17155 = (i__17142_17148 + (1));
seq__17139_17145 = G__17152;
chunk__17140_17146 = G__17153;
count__17141_17147 = G__17154;
i__17142_17148 = G__17155;
continue;
} else {
var temp__4126__auto___17156 = cljs.core.seq(seq__17139_17145);
if(temp__4126__auto___17156){
var seq__17139_17157__$1 = temp__4126__auto___17156;
if(cljs.core.chunked_seq_QMARK_(seq__17139_17157__$1)){
var c__4415__auto___17158 = cljs.core.chunk_first(seq__17139_17157__$1);
var G__17159 = cljs.core.chunk_rest(seq__17139_17157__$1);
var G__17160 = c__4415__auto___17158;
var G__17161 = cljs.core.count(c__4415__auto___17158);
var G__17162 = (0);
seq__17139_17145 = G__17159;
chunk__17140_17146 = G__17160;
count__17141_17147 = G__17161;
i__17142_17148 = G__17162;
continue;
} else {
var vec__17144_17163 = cljs.core.first(seq__17139_17157__$1);
var k_17164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144_17163,(0),null);
var v_17165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17144_17163,(1),null);
(evt[k_17164] = v_17165);

var G__17166 = cljs.core.next(seq__17139_17157__$1);
var G__17167 = null;
var G__17168 = (0);
var G__17169 = (0);
seq__17139_17145 = G__17166;
chunk__17140_17146 = G__17167;
count__17141_17147 = G__17168;
i__17142_17148 = G__17169;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source))){
return domina.events.dispatch_event_target_BANG_(source,evt);
} else {
return domina.events.dispatch_browser_BANG_(source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
var G__17171 = key;
return goog.events.unlistenByKey(G__17171);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = cljs.core.name(type);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (type__$1){
return (function (p1__17172_SHARP_){
var G__17176 = p1__17172_SHARP_;
var G__17177 = type__$1;
var G__17178 = false;
return goog.events.getListeners(G__17176,G__17177,G__17178);
});})(type__$1))
,cljs.core.array_seq([domina.nodes(content)], 0));
});
