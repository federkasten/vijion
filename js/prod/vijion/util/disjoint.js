// Compiled by ClojureScript 0.0-2496
goog.provide('vijion.util.disjoint');
goog.require('cljs.core');

/**
* @constructor
* @param {*} value
* @param {*} rank
* @param {*} parent
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
vijion.util.disjoint.DisjointSetForestNode = (function (value,rank,parent,__meta,__extmap,__hash){
this.value = value;
this.rank = rank;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k10347,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__10349 = (((k10347 instanceof cljs.core.Keyword))?k10347.fqn:null);
switch (G__10349) {
case "parent":
return self__.parent;

break;
case "rank":
return self__.rank;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10347,else__4234__auto__);

}
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#vijion.util.disjoint.DisjointSetForestNode{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$31,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.rank],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.parent],null))], null),self__.__extmap));
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new vijion.util.disjoint.DisjointSetForestNode(self__.value,self__.rank,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,null,cljs.core.constant$keyword$31,null,cljs.core.constant$keyword$32,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new vijion.util.disjoint.DisjointSetForestNode(self__.value,self__.rank,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__10346){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__10350 = cljs.core.keyword_identical_QMARK_;
var expr__10351 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__10353 = cljs.core.constant$keyword$31;
var G__10354 = expr__10351;
return (pred__10350.cljs$core$IFn$_invoke$arity$2 ? pred__10350.cljs$core$IFn$_invoke$arity$2(G__10353,G__10354) : pred__10350.call(null,G__10353,G__10354));
})())){
return (new vijion.util.disjoint.DisjointSetForestNode(G__10346,self__.rank,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10355 = cljs.core.constant$keyword$32;
var G__10356 = expr__10351;
return (pred__10350.cljs$core$IFn$_invoke$arity$2 ? pred__10350.cljs$core$IFn$_invoke$arity$2(G__10355,G__10356) : pred__10350.call(null,G__10355,G__10356));
})())){
return (new vijion.util.disjoint.DisjointSetForestNode(self__.value,G__10346,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10357 = cljs.core.constant$keyword$33;
var G__10358 = expr__10351;
return (pred__10350.cljs$core$IFn$_invoke$arity$2 ? pred__10350.cljs$core$IFn$_invoke$arity$2(G__10357,G__10358) : pred__10350.call(null,G__10357,G__10358));
})())){
return (new vijion.util.disjoint.DisjointSetForestNode(self__.value,self__.rank,G__10346,self__.__meta,self__.__extmap,null));
} else {
return (new vijion.util.disjoint.DisjointSetForestNode(self__.value,self__.rank,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__10346),null));
}
}
}
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$31,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.rank],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.parent],null))], null),self__.__extmap));
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__10346){
var self__ = this;
var this__4230__auto____$1 = this;
return (new vijion.util.disjoint.DisjointSetForestNode(self__.value,self__.rank,self__.parent,G__10346,self__.__extmap,self__.__hash));
});

vijion.util.disjoint.DisjointSetForestNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

vijion.util.disjoint.DisjointSetForestNode.cljs$lang$type = true;

vijion.util.disjoint.DisjointSetForestNode.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"vijion.util.disjoint/DisjointSetForestNode");
});

vijion.util.disjoint.DisjointSetForestNode.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"vijion.util.disjoint/DisjointSetForestNode");
});

vijion.util.disjoint.__GT_DisjointSetForestNode = (function __GT_DisjointSetForestNode(value,rank,parent){
return (new vijion.util.disjoint.DisjointSetForestNode(value,rank,parent,null,null,null));
});

vijion.util.disjoint.map__GT_DisjointSetForestNode = (function map__GT_DisjointSetForestNode(G__10348){
return (new vijion.util.disjoint.DisjointSetForestNode(cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(G__10348),cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(G__10348),cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(G__10348),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10348,cljs.core.constant$keyword$31,cljs.core.array_seq([cljs.core.constant$keyword$32,cljs.core.constant$keyword$33], 0)),null));
});


/**
* @constructor
* @param {*} nodes
* @param {*} num
* @param {*} sizes
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
vijion.util.disjoint.DisjointSetForest = (function (nodes,num,sizes,__meta,__extmap,__hash){
this.nodes = nodes;
this.num = num;
this.sizes = sizes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k10361,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__10363 = (((k10361 instanceof cljs.core.Keyword))?k10361.fqn:null);
switch (G__10363) {
case "sizes":
return self__.sizes;

break;
case "num":
return self__.num;

break;
case "nodes":
return self__.nodes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10361,else__4234__auto__);

}
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#vijion.util.disjoint.DisjointSetForest{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.sizes],null))], null),self__.__extmap));
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new vijion.util.disjoint.DisjointSetForest(self__.nodes,self__.num,self__.sizes,self__.__meta,self__.__extmap,self__.__hash));
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$35,null,cljs.core.constant$keyword$36,null,cljs.core.constant$keyword$34,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new vijion.util.disjoint.DisjointSetForest(self__.nodes,self__.num,self__.sizes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__10360){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__10364 = cljs.core.keyword_identical_QMARK_;
var expr__10365 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__10367 = cljs.core.constant$keyword$34;
var G__10368 = expr__10365;
return (pred__10364.cljs$core$IFn$_invoke$arity$2 ? pred__10364.cljs$core$IFn$_invoke$arity$2(G__10367,G__10368) : pred__10364.call(null,G__10367,G__10368));
})())){
return (new vijion.util.disjoint.DisjointSetForest(G__10360,self__.num,self__.sizes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10369 = cljs.core.constant$keyword$35;
var G__10370 = expr__10365;
return (pred__10364.cljs$core$IFn$_invoke$arity$2 ? pred__10364.cljs$core$IFn$_invoke$arity$2(G__10369,G__10370) : pred__10364.call(null,G__10369,G__10370));
})())){
return (new vijion.util.disjoint.DisjointSetForest(self__.nodes,G__10360,self__.sizes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10371 = cljs.core.constant$keyword$36;
var G__10372 = expr__10365;
return (pred__10364.cljs$core$IFn$_invoke$arity$2 ? pred__10364.cljs$core$IFn$_invoke$arity$2(G__10371,G__10372) : pred__10364.call(null,G__10371,G__10372));
})())){
return (new vijion.util.disjoint.DisjointSetForest(self__.nodes,self__.num,G__10360,self__.__meta,self__.__extmap,null));
} else {
return (new vijion.util.disjoint.DisjointSetForest(self__.nodes,self__.num,self__.sizes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__10360),null));
}
}
}
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.sizes],null))], null),self__.__extmap));
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__10360){
var self__ = this;
var this__4230__auto____$1 = this;
return (new vijion.util.disjoint.DisjointSetForest(self__.nodes,self__.num,self__.sizes,G__10360,self__.__extmap,self__.__hash));
});

vijion.util.disjoint.DisjointSetForest.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

vijion.util.disjoint.DisjointSetForest.cljs$lang$type = true;

vijion.util.disjoint.DisjointSetForest.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"vijion.util.disjoint/DisjointSetForest");
});

vijion.util.disjoint.DisjointSetForest.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"vijion.util.disjoint/DisjointSetForest");
});

vijion.util.disjoint.__GT_DisjointSetForest = (function __GT_DisjointSetForest(nodes,num,sizes){
return (new vijion.util.disjoint.DisjointSetForest(nodes,num,sizes,null,null,null));
});

vijion.util.disjoint.map__GT_DisjointSetForest = (function map__GT_DisjointSetForest(G__10362){
return (new vijion.util.disjoint.DisjointSetForest(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(G__10362),cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(G__10362),cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(G__10362),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10362,cljs.core.constant$keyword$34,cljs.core.array_seq([cljs.core.constant$keyword$35,cljs.core.constant$keyword$36], 0)),null));
});

vijion.util.disjoint.append = (function append(dsf,x){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(dsf),x))){
return dsf;
} else {
return vijion.util.disjoint.__GT_DisjointSetForest(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(dsf),x,vijion.util.disjoint.__GT_DisjointSetForestNode(x,(0),null)),(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(dsf) + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(dsf),new cljs.core.PersistentArrayMap.fromArray([x,(1)], true, false)));
}
});
vijion.util.disjoint.get_canonical = (function get_canonical(dsf,x){
var node = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(dsf).call(null,x);
var parent = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dsf,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dsf,x], null);
} else {
var vec__10377 = get_canonical(dsf,parent);
var canonical_dsf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10377,(0),null);
var canonical = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10377,(1),null);
var nodes = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(canonical_dsf);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vijion.util.disjoint.__GT_DisjointSetForest(cljs.core.assoc_in(nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.constant$keyword$33], null),canonical),cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(dsf),cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(dsf)),canonical], null);

}
}
});
vijion.util.disjoint.union = (function union(dsf,x,y){
var vec__10382 = vijion.util.disjoint.get_canonical(dsf,x);
var new_dsf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10382,(0),null);
var x_root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10382,(1),null);
var vec__10383 = vijion.util.disjoint.get_canonical(new_dsf,y);
var new_dsf__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10383,(0),null);
var y_root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10383,(1),null);
var x_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(dsf),x_root);
var y_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(dsf),y_root);
var nodes = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(new_dsf__$1);
var new_num = (cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(dsf) - (1));
var x_rank = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,x_root));
var y_rank = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,y_root));
if(((x_root == null)) || ((y_root == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_root,y_root))){
return new_dsf__$1;
} else {
if((x_rank < y_rank)){
return vijion.util.disjoint.__GT_DisjointSetForest(cljs.core.assoc_in(nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_root,cljs.core.constant$keyword$33], null),y_root),new_num,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(dsf),y_root,(x_size + y_size)),x_root));
} else {
if((y_rank < x_rank)){
return vijion.util.disjoint.__GT_DisjointSetForest(cljs.core.assoc_in(nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_root,cljs.core.constant$keyword$33], null),x_root),new_num,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(dsf),x_root,(x_size + y_size)),y_root));
} else {
return vijion.util.disjoint.__GT_DisjointSetForest(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.transient$(nodes),y_root,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__10384 = y_root;
return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__10384) : nodes.call(null,G__10384));
})(),cljs.core.constant$keyword$33,x_root)),x_root,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__10385 = x_root;
return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__10385) : nodes.call(null,G__10385));
})(),cljs.core.constant$keyword$32,(x_rank + (1))))),new_num,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(dsf),x_root,(x_size + y_size)),y_root));

}
}
}
});
vijion.util.disjoint.size = (function() {
var size = null;
var size__1 = (function (dsf){
return cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(dsf);
});
var size__2 = (function (dsf,x){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(dsf),x);
});
size = function(dsf,x){
switch(arguments.length){
case 1:
return size__1.call(this,dsf);
case 2:
return size__2.call(this,dsf,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
size.cljs$core$IFn$_invoke$arity$1 = size__1;
size.cljs$core$IFn$_invoke$arity$2 = size__2;
return size;
})()
;
vijion.util.disjoint.head = (function head(dsf,x){
var x__$1 = x;
while(true){
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(dsf),x__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var node = temp__4124__auto__;
var temp__4124__auto____$1 = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__4124__auto____$1)){
var parent = temp__4124__auto____$1;
var G__10386 = parent;
x__$1 = G__10386;
continue;
} else {
return x__$1;
}
} else {
return null;
}
break;
}
});
vijion.util.disjoint.empty_union_find = vijion.util.disjoint.__GT_DisjointSetForest(cljs.core.PersistentArrayMap.EMPTY,(0),cljs.core.PersistentArrayMap.EMPTY);
vijion.util.disjoint.disjoint_set_forest = (function disjoint_set_forest(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(vijion.util.disjoint.append,vijion.util.disjoint.empty_union_find,xs);
});
