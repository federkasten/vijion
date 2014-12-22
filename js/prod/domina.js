// Compiled by ClojureScript 0.0-2496
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_16135 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_16136 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_16137 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$7,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_16137,opt_wrapper_16135,table_section_wrapper_16136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_16135,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_16136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_16136,cell_wrapper_16137,table_section_wrapper_16136,table_section_wrapper_16136]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3616__auto__ = div.firstChild;
if(cljs.core.truth_(and__3616__auto__)){
return div.firstChild.childNodes;
} else {
return and__3616__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__16142 = cljs.core.seq(tbody);
var chunk__16143 = null;
var count__16144 = (0);
var i__16145 = (0);
while(true){
if((i__16145 < count__16144)){
var child = chunk__16143.cljs$core$IIndexed$_nth$arity$2(null,i__16145);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__16146 = seq__16142;
var G__16147 = chunk__16143;
var G__16148 = count__16144;
var G__16149 = (i__16145 + (1));
seq__16142 = G__16146;
chunk__16143 = G__16147;
count__16144 = G__16148;
i__16145 = G__16149;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16142);
if(temp__4126__auto__){
var seq__16142__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16142__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__16142__$1);
var G__16150 = cljs.core.chunk_rest(seq__16142__$1);
var G__16151 = c__4415__auto__;
var G__16152 = cljs.core.count(c__4415__auto__);
var G__16153 = (0);
seq__16142 = G__16150;
chunk__16143 = G__16151;
count__16144 = G__16152;
i__16145 = G__16153;
continue;
} else {
var child = cljs.core.first(seq__16142__$1);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__16154 = cljs.core.next(seq__16142__$1);
var G__16155 = null;
var G__16156 = (0);
var G__16157 = (0);
seq__16142 = G__16154;
chunk__16143 = G__16155;
count__16144 = G__16156;
i__16145 = G__16157;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__16159 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16159,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16159,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16159,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__16160 = wrapper.lastChild;
var G__16161 = (level - (1));
wrapper = G__16160;
level = G__16161;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3616__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__3616__auto__){
return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else {
return and__3616__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_(div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s))){
return domina.html_to_dom(s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj16163 = {};
return obj16163;
})();

domina.nodes = (function nodes(content){
if((function (){var and__3616__auto__ = content;
if(and__3616__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__3616__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4272__auto__ = (((content == null))?null:content);
return (function (){var or__3628__auto__ = (domina.nodes[(function (){var G__16167 = x__4272__auto__;
return goog.typeOf(G__16167);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (domina.nodes["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__3616__auto__ = nodeseq;
if(and__3616__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__3616__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4272__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3628__auto__ = (domina.single_node[(function (){var G__16171 = x__4272__auto__;
return goog.typeOf(G__16171);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (domina.single_node["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3616__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3616__auto__)){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else {
return and__3616__auto__;
}
})())){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__16172){
var mesg = cljs.core.seq(arglist__16172);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__16173){
var mesg = cljs.core.seq(arglist__16173);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
var G__16175 = cljs.core.name(id);
return goog.dom.getElement(G__16175);
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
var G__16178 = (function (){var G__16179 = cljs.core.name(class_name);
return goog.dom.getElementsByClass(G__16179);
})();
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__16178) : domina.normalize_seq.call(null,G__16178));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(goog.dom.getChildren,cljs.core.array_seq([domina.nodes(content)], 0)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__16180){
var contents = cljs.core.seq(arglist__16180);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16181_SHARP_){
return p1__16181_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
var G__16185_16188 = goog.dom.appendChild;
var G__16186_16189 = parent_content;
var G__16187_16190 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__16185_16188,G__16186_16189,G__16187_16190) : domina.apply_with_cloning.call(null,G__16185_16188,G__16186_16189,G__16187_16190));

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
var G__16199_16205 = (function (p1__16191_SHARP_,p2__16192_SHARP_){
var G__16202 = p1__16191_SHARP_;
var G__16203 = p2__16192_SHARP_;
var G__16204 = idx;
return goog.dom.insertChildAt(G__16202,G__16203,G__16204);
});
var G__16200_16206 = parent_content;
var G__16201_16207 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__16199_16205,G__16200_16206,G__16201_16207) : domina.apply_with_cloning.call(null,G__16199_16205,G__16200_16206,G__16201_16207));

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
var G__16215_16220 = (function (p1__16209_SHARP_,p2__16208_SHARP_){
var G__16218 = p2__16208_SHARP_;
var G__16219 = p1__16209_SHARP_;
return goog.dom.insertSiblingBefore(G__16218,G__16219);
});
var G__16216_16221 = content;
var G__16217_16222 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__16215_16220,G__16216_16221,G__16217_16222) : domina.apply_with_cloning.call(null,G__16215_16220,G__16216_16221,G__16217_16222));

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
var G__16230_16235 = (function (p1__16224_SHARP_,p2__16223_SHARP_){
var G__16233 = p2__16223_SHARP_;
var G__16234 = p1__16224_SHARP_;
return goog.dom.insertSiblingAfter(G__16233,G__16234);
});
var G__16231_16236 = content;
var G__16232_16237 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__16230_16235,G__16231_16236,G__16232_16237) : domina.apply_with_cloning.call(null,G__16230_16235,G__16231_16236,G__16232_16237));

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
var G__16245_16250 = (function (p1__16239_SHARP_,p2__16238_SHARP_){
var G__16248 = p2__16238_SHARP_;
var G__16249 = p1__16239_SHARP_;
return goog.dom.replaceNode(G__16248,G__16249);
});
var G__16246_16251 = old_content;
var G__16247_16252 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__16245_16250,G__16246_16251,G__16247_16252) : domina.apply_with_cloning.call(null,G__16245_16250,G__16246_16251,G__16247_16252));

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = (function (){var G__16255 = domina.single_node(content);
var G__16256 = cljs.core.name(name);
return goog.style.getStyle(G__16255,G__16256);
})();
if(cljs.core.truth_(clojure.string.blank_QMARK_(s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__16267_16277 = cljs.core.seq(domina.nodes(content));
var chunk__16268_16278 = null;
var count__16269_16279 = (0);
var i__16270_16280 = (0);
while(true){
if((i__16270_16280 < count__16269_16279)){
var n_16281 = chunk__16268_16278.cljs$core$IIndexed$_nth$arity$2(null,i__16270_16280);
var G__16271_16282 = n_16281;
var G__16272_16283 = cljs.core.name(name);
var G__16273_16284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__16271_16282,G__16272_16283,G__16273_16284);

var G__16285 = seq__16267_16277;
var G__16286 = chunk__16268_16278;
var G__16287 = count__16269_16279;
var G__16288 = (i__16270_16280 + (1));
seq__16267_16277 = G__16285;
chunk__16268_16278 = G__16286;
count__16269_16279 = G__16287;
i__16270_16280 = G__16288;
continue;
} else {
var temp__4126__auto___16289 = cljs.core.seq(seq__16267_16277);
if(temp__4126__auto___16289){
var seq__16267_16290__$1 = temp__4126__auto___16289;
if(cljs.core.chunked_seq_QMARK_(seq__16267_16290__$1)){
var c__4415__auto___16291 = cljs.core.chunk_first(seq__16267_16290__$1);
var G__16292 = cljs.core.chunk_rest(seq__16267_16290__$1);
var G__16293 = c__4415__auto___16291;
var G__16294 = cljs.core.count(c__4415__auto___16291);
var G__16295 = (0);
seq__16267_16277 = G__16292;
chunk__16268_16278 = G__16293;
count__16269_16279 = G__16294;
i__16270_16280 = G__16295;
continue;
} else {
var n_16296 = cljs.core.first(seq__16267_16290__$1);
var G__16274_16297 = n_16296;
var G__16275_16298 = cljs.core.name(name);
var G__16276_16299 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__16274_16297,G__16275_16298,G__16276_16299);

var G__16300 = cljs.core.next(seq__16267_16290__$1);
var G__16301 = null;
var G__16302 = (0);
var G__16303 = (0);
seq__16267_16277 = G__16300;
chunk__16268_16278 = G__16301;
count__16269_16279 = G__16302;
i__16270_16280 = G__16303;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16304){
var content = cljs.core.first(arglist__16304);
arglist__16304 = cljs.core.next(arglist__16304);
var name = cljs.core.first(arglist__16304);
var value = cljs.core.rest(arglist__16304);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__16309_16313 = cljs.core.seq(domina.nodes(content));
var chunk__16310_16314 = null;
var count__16311_16315 = (0);
var i__16312_16316 = (0);
while(true){
if((i__16312_16316 < count__16311_16315)){
var n_16317 = chunk__16310_16314.cljs$core$IIndexed$_nth$arity$2(null,i__16312_16316);
n_16317.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__16318 = seq__16309_16313;
var G__16319 = chunk__16310_16314;
var G__16320 = count__16311_16315;
var G__16321 = (i__16312_16316 + (1));
seq__16309_16313 = G__16318;
chunk__16310_16314 = G__16319;
count__16311_16315 = G__16320;
i__16312_16316 = G__16321;
continue;
} else {
var temp__4126__auto___16322 = cljs.core.seq(seq__16309_16313);
if(temp__4126__auto___16322){
var seq__16309_16323__$1 = temp__4126__auto___16322;
if(cljs.core.chunked_seq_QMARK_(seq__16309_16323__$1)){
var c__4415__auto___16324 = cljs.core.chunk_first(seq__16309_16323__$1);
var G__16325 = cljs.core.chunk_rest(seq__16309_16323__$1);
var G__16326 = c__4415__auto___16324;
var G__16327 = cljs.core.count(c__4415__auto___16324);
var G__16328 = (0);
seq__16309_16313 = G__16325;
chunk__16310_16314 = G__16326;
count__16311_16315 = G__16327;
i__16312_16316 = G__16328;
continue;
} else {
var n_16329 = cljs.core.first(seq__16309_16323__$1);
n_16329.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__16330 = cljs.core.next(seq__16309_16323__$1);
var G__16331 = null;
var G__16332 = (0);
var G__16333 = (0);
seq__16309_16313 = G__16330;
chunk__16310_16314 = G__16331;
count__16311_16315 = G__16332;
i__16312_16316 = G__16333;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16334){
var content = cljs.core.first(arglist__16334);
arglist__16334 = cljs.core.next(arglist__16334);
var name = cljs.core.first(arglist__16334);
var value = cljs.core.rest(arglist__16334);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__16339_16343 = cljs.core.seq(domina.nodes(content));
var chunk__16340_16344 = null;
var count__16341_16345 = (0);
var i__16342_16346 = (0);
while(true){
if((i__16342_16346 < count__16341_16345)){
var n_16347 = chunk__16340_16344.cljs$core$IIndexed$_nth$arity$2(null,i__16342_16346);
n_16347.removeAttribute(cljs.core.name(name));

var G__16348 = seq__16339_16343;
var G__16349 = chunk__16340_16344;
var G__16350 = count__16341_16345;
var G__16351 = (i__16342_16346 + (1));
seq__16339_16343 = G__16348;
chunk__16340_16344 = G__16349;
count__16341_16345 = G__16350;
i__16342_16346 = G__16351;
continue;
} else {
var temp__4126__auto___16352 = cljs.core.seq(seq__16339_16343);
if(temp__4126__auto___16352){
var seq__16339_16353__$1 = temp__4126__auto___16352;
if(cljs.core.chunked_seq_QMARK_(seq__16339_16353__$1)){
var c__4415__auto___16354 = cljs.core.chunk_first(seq__16339_16353__$1);
var G__16355 = cljs.core.chunk_rest(seq__16339_16353__$1);
var G__16356 = c__4415__auto___16354;
var G__16357 = cljs.core.count(c__4415__auto___16354);
var G__16358 = (0);
seq__16339_16343 = G__16355;
chunk__16340_16344 = G__16356;
count__16341_16345 = G__16357;
i__16342_16346 = G__16358;
continue;
} else {
var n_16359 = cljs.core.first(seq__16339_16353__$1);
n_16359.removeAttribute(cljs.core.name(name));

var G__16360 = cljs.core.next(seq__16339_16353__$1);
var G__16361 = null;
var G__16362 = (0);
var G__16363 = (0);
seq__16339_16343 = G__16360;
chunk__16340_16344 = G__16361;
count__16341_16345 = G__16362;
i__16342_16346 = G__16363;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__16365 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(1),null);
if(cljs.core.truth_((function (){var and__3616__auto__ = k;
if(cljs.core.truth_(and__3616__auto__)){
return v;
} else {
return and__3616__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr(content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes(style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes(style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node(content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__16366_SHARP_){
var attr = attrs__$1.item(p1__16366_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__16373_16379 = cljs.core.seq(styles);
var chunk__16374_16380 = null;
var count__16375_16381 = (0);
var i__16376_16382 = (0);
while(true){
if((i__16376_16382 < count__16375_16381)){
var vec__16377_16383 = chunk__16374_16380.cljs$core$IIndexed$_nth$arity$2(null,i__16376_16382);
var name_16384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377_16383,(0),null);
var value_16385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377_16383,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_16384,cljs.core.array_seq([value_16385], 0));

var G__16386 = seq__16373_16379;
var G__16387 = chunk__16374_16380;
var G__16388 = count__16375_16381;
var G__16389 = (i__16376_16382 + (1));
seq__16373_16379 = G__16386;
chunk__16374_16380 = G__16387;
count__16375_16381 = G__16388;
i__16376_16382 = G__16389;
continue;
} else {
var temp__4126__auto___16390 = cljs.core.seq(seq__16373_16379);
if(temp__4126__auto___16390){
var seq__16373_16391__$1 = temp__4126__auto___16390;
if(cljs.core.chunked_seq_QMARK_(seq__16373_16391__$1)){
var c__4415__auto___16392 = cljs.core.chunk_first(seq__16373_16391__$1);
var G__16393 = cljs.core.chunk_rest(seq__16373_16391__$1);
var G__16394 = c__4415__auto___16392;
var G__16395 = cljs.core.count(c__4415__auto___16392);
var G__16396 = (0);
seq__16373_16379 = G__16393;
chunk__16374_16380 = G__16394;
count__16375_16381 = G__16395;
i__16376_16382 = G__16396;
continue;
} else {
var vec__16378_16397 = cljs.core.first(seq__16373_16391__$1);
var name_16398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16378_16397,(0),null);
var value_16399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16378_16397,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_16398,cljs.core.array_seq([value_16399], 0));

var G__16400 = cljs.core.next(seq__16373_16391__$1);
var G__16401 = null;
var G__16402 = (0);
var G__16403 = (0);
seq__16373_16379 = G__16400;
chunk__16374_16380 = G__16401;
count__16375_16381 = G__16402;
i__16376_16382 = G__16403;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__16410_16416 = cljs.core.seq(attrs);
var chunk__16411_16417 = null;
var count__16412_16418 = (0);
var i__16413_16419 = (0);
while(true){
if((i__16413_16419 < count__16412_16418)){
var vec__16414_16420 = chunk__16411_16417.cljs$core$IIndexed$_nth$arity$2(null,i__16413_16419);
var name_16421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16414_16420,(0),null);
var value_16422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16414_16420,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_16421,cljs.core.array_seq([value_16422], 0));

var G__16423 = seq__16410_16416;
var G__16424 = chunk__16411_16417;
var G__16425 = count__16412_16418;
var G__16426 = (i__16413_16419 + (1));
seq__16410_16416 = G__16423;
chunk__16411_16417 = G__16424;
count__16412_16418 = G__16425;
i__16413_16419 = G__16426;
continue;
} else {
var temp__4126__auto___16427 = cljs.core.seq(seq__16410_16416);
if(temp__4126__auto___16427){
var seq__16410_16428__$1 = temp__4126__auto___16427;
if(cljs.core.chunked_seq_QMARK_(seq__16410_16428__$1)){
var c__4415__auto___16429 = cljs.core.chunk_first(seq__16410_16428__$1);
var G__16430 = cljs.core.chunk_rest(seq__16410_16428__$1);
var G__16431 = c__4415__auto___16429;
var G__16432 = cljs.core.count(c__4415__auto___16429);
var G__16433 = (0);
seq__16410_16416 = G__16430;
chunk__16411_16417 = G__16431;
count__16412_16418 = G__16432;
i__16413_16419 = G__16433;
continue;
} else {
var vec__16415_16434 = cljs.core.first(seq__16410_16428__$1);
var name_16435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16415_16434,(0),null);
var value_16436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16415_16434,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_16435,cljs.core.array_seq([value_16436], 0));

var G__16437 = cljs.core.next(seq__16410_16428__$1);
var G__16438 = null;
var G__16439 = (0);
var G__16440 = (0);
seq__16410_16416 = G__16437;
chunk__16411_16417 = G__16438;
count__16412_16418 = G__16439;
i__16413_16419 = G__16440;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
var G__16443 = domina.single_node(content);
var G__16444 = class$;
return goog.dom.classes.has(G__16443,G__16444);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__16453_16461 = cljs.core.seq(domina.nodes(content));
var chunk__16454_16462 = null;
var count__16455_16463 = (0);
var i__16456_16464 = (0);
while(true){
if((i__16456_16464 < count__16455_16463)){
var node_16465 = chunk__16454_16462.cljs$core$IIndexed$_nth$arity$2(null,i__16456_16464);
var G__16457_16466 = node_16465;
var G__16458_16467 = class$;
goog.dom.classes.add(G__16457_16466,G__16458_16467);

var G__16468 = seq__16453_16461;
var G__16469 = chunk__16454_16462;
var G__16470 = count__16455_16463;
var G__16471 = (i__16456_16464 + (1));
seq__16453_16461 = G__16468;
chunk__16454_16462 = G__16469;
count__16455_16463 = G__16470;
i__16456_16464 = G__16471;
continue;
} else {
var temp__4126__auto___16472 = cljs.core.seq(seq__16453_16461);
if(temp__4126__auto___16472){
var seq__16453_16473__$1 = temp__4126__auto___16472;
if(cljs.core.chunked_seq_QMARK_(seq__16453_16473__$1)){
var c__4415__auto___16474 = cljs.core.chunk_first(seq__16453_16473__$1);
var G__16475 = cljs.core.chunk_rest(seq__16453_16473__$1);
var G__16476 = c__4415__auto___16474;
var G__16477 = cljs.core.count(c__4415__auto___16474);
var G__16478 = (0);
seq__16453_16461 = G__16475;
chunk__16454_16462 = G__16476;
count__16455_16463 = G__16477;
i__16456_16464 = G__16478;
continue;
} else {
var node_16479 = cljs.core.first(seq__16453_16473__$1);
var G__16459_16480 = node_16479;
var G__16460_16481 = class$;
goog.dom.classes.add(G__16459_16480,G__16460_16481);

var G__16482 = cljs.core.next(seq__16453_16473__$1);
var G__16483 = null;
var G__16484 = (0);
var G__16485 = (0);
seq__16453_16461 = G__16482;
chunk__16454_16462 = G__16483;
count__16455_16463 = G__16484;
i__16456_16464 = G__16485;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__16494_16502 = cljs.core.seq(domina.nodes(content));
var chunk__16495_16503 = null;
var count__16496_16504 = (0);
var i__16497_16505 = (0);
while(true){
if((i__16497_16505 < count__16496_16504)){
var node_16506 = chunk__16495_16503.cljs$core$IIndexed$_nth$arity$2(null,i__16497_16505);
var G__16498_16507 = node_16506;
var G__16499_16508 = class$;
goog.dom.classes.remove(G__16498_16507,G__16499_16508);

var G__16509 = seq__16494_16502;
var G__16510 = chunk__16495_16503;
var G__16511 = count__16496_16504;
var G__16512 = (i__16497_16505 + (1));
seq__16494_16502 = G__16509;
chunk__16495_16503 = G__16510;
count__16496_16504 = G__16511;
i__16497_16505 = G__16512;
continue;
} else {
var temp__4126__auto___16513 = cljs.core.seq(seq__16494_16502);
if(temp__4126__auto___16513){
var seq__16494_16514__$1 = temp__4126__auto___16513;
if(cljs.core.chunked_seq_QMARK_(seq__16494_16514__$1)){
var c__4415__auto___16515 = cljs.core.chunk_first(seq__16494_16514__$1);
var G__16516 = cljs.core.chunk_rest(seq__16494_16514__$1);
var G__16517 = c__4415__auto___16515;
var G__16518 = cljs.core.count(c__4415__auto___16515);
var G__16519 = (0);
seq__16494_16502 = G__16516;
chunk__16495_16503 = G__16517;
count__16496_16504 = G__16518;
i__16497_16505 = G__16519;
continue;
} else {
var node_16520 = cljs.core.first(seq__16494_16514__$1);
var G__16500_16521 = node_16520;
var G__16501_16522 = class$;
goog.dom.classes.remove(G__16500_16521,G__16501_16522);

var G__16523 = cljs.core.next(seq__16494_16514__$1);
var G__16524 = null;
var G__16525 = (0);
var G__16526 = (0);
seq__16494_16502 = G__16523;
chunk__16495_16503 = G__16524;
count__16496_16504 = G__16525;
i__16497_16505 = G__16526;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){
var seq__16535_16543 = cljs.core.seq(domina.nodes(content));
var chunk__16536_16544 = null;
var count__16537_16545 = (0);
var i__16538_16546 = (0);
while(true){
if((i__16538_16546 < count__16537_16545)){
var node_16547 = chunk__16536_16544.cljs$core$IIndexed$_nth$arity$2(null,i__16538_16546);
var G__16539_16548 = node_16547;
var G__16540_16549 = class$;
goog.dom.classes.toggle(G__16539_16548,G__16540_16549);

var G__16550 = seq__16535_16543;
var G__16551 = chunk__16536_16544;
var G__16552 = count__16537_16545;
var G__16553 = (i__16538_16546 + (1));
seq__16535_16543 = G__16550;
chunk__16536_16544 = G__16551;
count__16537_16545 = G__16552;
i__16538_16546 = G__16553;
continue;
} else {
var temp__4126__auto___16554 = cljs.core.seq(seq__16535_16543);
if(temp__4126__auto___16554){
var seq__16535_16555__$1 = temp__4126__auto___16554;
if(cljs.core.chunked_seq_QMARK_(seq__16535_16555__$1)){
var c__4415__auto___16556 = cljs.core.chunk_first(seq__16535_16555__$1);
var G__16557 = cljs.core.chunk_rest(seq__16535_16555__$1);
var G__16558 = c__4415__auto___16556;
var G__16559 = cljs.core.count(c__4415__auto___16556);
var G__16560 = (0);
seq__16535_16543 = G__16557;
chunk__16536_16544 = G__16558;
count__16537_16545 = G__16559;
i__16538_16546 = G__16560;
continue;
} else {
var node_16561 = cljs.core.first(seq__16535_16555__$1);
var G__16541_16562 = node_16561;
var G__16542_16563 = class$;
goog.dom.classes.toggle(G__16541_16562,G__16542_16563);

var G__16564 = cljs.core.next(seq__16535_16555__$1);
var G__16565 = null;
var G__16566 = (0);
var G__16567 = (0);
seq__16535_16543 = G__16564;
chunk__16536_16544 = G__16565;
count__16537_16545 = G__16566;
i__16538_16546 = G__16567;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq((function (){var G__16569 = domina.single_node(content);
return goog.dom.classes.get(G__16569);
})());
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_16586__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__16578_16587 = cljs.core.seq(domina.nodes(content));
var chunk__16579_16588 = null;
var count__16580_16589 = (0);
var i__16581_16590 = (0);
while(true){
if((i__16581_16590 < count__16580_16589)){
var node_16591 = chunk__16579_16588.cljs$core$IIndexed$_nth$arity$2(null,i__16581_16590);
var G__16582_16592 = node_16591;
var G__16583_16593 = classes_16586__$1;
goog.dom.classes.set(G__16582_16592,G__16583_16593);

var G__16594 = seq__16578_16587;
var G__16595 = chunk__16579_16588;
var G__16596 = count__16580_16589;
var G__16597 = (i__16581_16590 + (1));
seq__16578_16587 = G__16594;
chunk__16579_16588 = G__16595;
count__16580_16589 = G__16596;
i__16581_16590 = G__16597;
continue;
} else {
var temp__4126__auto___16598 = cljs.core.seq(seq__16578_16587);
if(temp__4126__auto___16598){
var seq__16578_16599__$1 = temp__4126__auto___16598;
if(cljs.core.chunked_seq_QMARK_(seq__16578_16599__$1)){
var c__4415__auto___16600 = cljs.core.chunk_first(seq__16578_16599__$1);
var G__16601 = cljs.core.chunk_rest(seq__16578_16599__$1);
var G__16602 = c__4415__auto___16600;
var G__16603 = cljs.core.count(c__4415__auto___16600);
var G__16604 = (0);
seq__16578_16587 = G__16601;
chunk__16579_16588 = G__16602;
count__16580_16589 = G__16603;
i__16581_16590 = G__16604;
continue;
} else {
var node_16605 = cljs.core.first(seq__16578_16599__$1);
var G__16584_16606 = node_16605;
var G__16585_16607 = classes_16586__$1;
goog.dom.classes.set(G__16584_16606,G__16585_16607);

var G__16608 = cljs.core.next(seq__16578_16599__$1);
var G__16609 = null;
var G__16610 = (0);
var G__16611 = (0);
seq__16578_16587 = G__16608;
chunk__16579_16588 = G__16609;
count__16580_16589 = G__16610;
i__16581_16590 = G__16611;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
var G__16614 = (function (){var G__16615 = domina.single_node(content);
return goog.dom.getTextContent(G__16615);
})();
return goog.string.trim(G__16614);
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__16624_16632 = cljs.core.seq(domina.nodes(content));
var chunk__16625_16633 = null;
var count__16626_16634 = (0);
var i__16627_16635 = (0);
while(true){
if((i__16627_16635 < count__16626_16634)){
var node_16636 = chunk__16625_16633.cljs$core$IIndexed$_nth$arity$2(null,i__16627_16635);
var G__16628_16637 = node_16636;
var G__16629_16638 = value;
goog.dom.setTextContent(G__16628_16637,G__16629_16638);

var G__16639 = seq__16624_16632;
var G__16640 = chunk__16625_16633;
var G__16641 = count__16626_16634;
var G__16642 = (i__16627_16635 + (1));
seq__16624_16632 = G__16639;
chunk__16625_16633 = G__16640;
count__16626_16634 = G__16641;
i__16627_16635 = G__16642;
continue;
} else {
var temp__4126__auto___16643 = cljs.core.seq(seq__16624_16632);
if(temp__4126__auto___16643){
var seq__16624_16644__$1 = temp__4126__auto___16643;
if(cljs.core.chunked_seq_QMARK_(seq__16624_16644__$1)){
var c__4415__auto___16645 = cljs.core.chunk_first(seq__16624_16644__$1);
var G__16646 = cljs.core.chunk_rest(seq__16624_16644__$1);
var G__16647 = c__4415__auto___16645;
var G__16648 = cljs.core.count(c__4415__auto___16645);
var G__16649 = (0);
seq__16624_16632 = G__16646;
chunk__16625_16633 = G__16647;
count__16626_16634 = G__16648;
i__16627_16635 = G__16649;
continue;
} else {
var node_16650 = cljs.core.first(seq__16624_16644__$1);
var G__16630_16651 = node_16650;
var G__16631_16652 = value;
goog.dom.setTextContent(G__16630_16651,G__16631_16652);

var G__16653 = cljs.core.next(seq__16624_16644__$1);
var G__16654 = null;
var G__16655 = (0);
var G__16656 = (0);
seq__16624_16632 = G__16653;
chunk__16625_16633 = G__16654;
count__16626_16634 = G__16655;
i__16627_16635 = G__16656;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
var G__16658 = domina.single_node(content);
return goog.dom.forms.getValue(G__16658);
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__16667_16675 = cljs.core.seq(domina.nodes(content));
var chunk__16668_16676 = null;
var count__16669_16677 = (0);
var i__16670_16678 = (0);
while(true){
if((i__16670_16678 < count__16669_16677)){
var node_16679 = chunk__16668_16676.cljs$core$IIndexed$_nth$arity$2(null,i__16670_16678);
var G__16671_16680 = node_16679;
var G__16672_16681 = value;
goog.dom.forms.setValue(G__16671_16680,G__16672_16681);

var G__16682 = seq__16667_16675;
var G__16683 = chunk__16668_16676;
var G__16684 = count__16669_16677;
var G__16685 = (i__16670_16678 + (1));
seq__16667_16675 = G__16682;
chunk__16668_16676 = G__16683;
count__16669_16677 = G__16684;
i__16670_16678 = G__16685;
continue;
} else {
var temp__4126__auto___16686 = cljs.core.seq(seq__16667_16675);
if(temp__4126__auto___16686){
var seq__16667_16687__$1 = temp__4126__auto___16686;
if(cljs.core.chunked_seq_QMARK_(seq__16667_16687__$1)){
var c__4415__auto___16688 = cljs.core.chunk_first(seq__16667_16687__$1);
var G__16689 = cljs.core.chunk_rest(seq__16667_16687__$1);
var G__16690 = c__4415__auto___16688;
var G__16691 = cljs.core.count(c__4415__auto___16688);
var G__16692 = (0);
seq__16667_16675 = G__16689;
chunk__16668_16676 = G__16690;
count__16669_16677 = G__16691;
i__16670_16678 = G__16692;
continue;
} else {
var node_16693 = cljs.core.first(seq__16667_16687__$1);
var G__16673_16694 = node_16693;
var G__16674_16695 = value;
goog.dom.forms.setValue(G__16673_16694,G__16674_16695);

var G__16696 = cljs.core.next(seq__16667_16687__$1);
var G__16697 = null;
var G__16698 = (0);
var G__16699 = (0);
seq__16667_16675 = G__16696;
chunk__16668_16676 = G__16697;
count__16669_16677 = G__16698;
i__16670_16678 = G__16699;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3616__auto__ = allows_inner_html_QMARK_;
if(and__3616__auto__){
var and__3616__auto____$1 = (function (){var or__3628__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.not(leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3616__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
})())){
var value_16710 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__16706_16711 = cljs.core.seq(domina.nodes(content));
var chunk__16707_16712 = null;
var count__16708_16713 = (0);
var i__16709_16714 = (0);
while(true){
if((i__16709_16714 < count__16708_16713)){
var node_16715 = chunk__16707_16712.cljs$core$IIndexed$_nth$arity$2(null,i__16709_16714);
node_16715.innerHTML = value_16710;

var G__16716 = seq__16706_16711;
var G__16717 = chunk__16707_16712;
var G__16718 = count__16708_16713;
var G__16719 = (i__16709_16714 + (1));
seq__16706_16711 = G__16716;
chunk__16707_16712 = G__16717;
count__16708_16713 = G__16718;
i__16709_16714 = G__16719;
continue;
} else {
var temp__4126__auto___16720 = cljs.core.seq(seq__16706_16711);
if(temp__4126__auto___16720){
var seq__16706_16721__$1 = temp__4126__auto___16720;
if(cljs.core.chunked_seq_QMARK_(seq__16706_16721__$1)){
var c__4415__auto___16722 = cljs.core.chunk_first(seq__16706_16721__$1);
var G__16723 = cljs.core.chunk_rest(seq__16706_16721__$1);
var G__16724 = c__4415__auto___16722;
var G__16725 = cljs.core.count(c__4415__auto___16722);
var G__16726 = (0);
seq__16706_16711 = G__16723;
chunk__16707_16712 = G__16724;
count__16708_16713 = G__16725;
i__16709_16714 = G__16726;
continue;
} else {
var node_16727 = cljs.core.first(seq__16706_16721__$1);
node_16727.innerHTML = value_16710;

var G__16728 = cljs.core.next(seq__16706_16721__$1);
var G__16729 = null;
var G__16730 = (0);
var G__16731 = (0);
seq__16706_16711 = G__16728;
chunk__16707_16712 = G__16729;
count__16708_16713 = G__16730;
i__16709_16714 = G__16731;
continue;
}
} else {
}
}
break;
}
}catch (e16705){if((e16705 instanceof Error)){
var e_16732 = e16705;
domina.replace_children_BANG_(content,value_16710);
} else {
throw e16705;

}
}} else {
domina.replace_children_BANG_(content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_(content,inner_content);
} else {
return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);
if(cljs.core.truth_((function (){var and__3616__auto__ = bubble;
if(cljs.core.truth_(and__3616__auto__)){
return (value == null);
} else {
return and__3616__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3628__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes(parent_content);
var children = domina.nodes(child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__16749_16757 = cljs.core.seq(children);
var chunk__16750_16758 = null;
var count__16751_16759 = (0);
var i__16752_16760 = (0);
while(true){
if((i__16752_16760 < count__16751_16759)){
var child_16761 = chunk__16750_16758.cljs$core$IIndexed$_nth$arity$2(null,i__16752_16760);
frag.appendChild(child_16761);

var G__16762 = seq__16749_16757;
var G__16763 = chunk__16750_16758;
var G__16764 = count__16751_16759;
var G__16765 = (i__16752_16760 + (1));
seq__16749_16757 = G__16762;
chunk__16750_16758 = G__16763;
count__16751_16759 = G__16764;
i__16752_16760 = G__16765;
continue;
} else {
var temp__4126__auto___16766 = cljs.core.seq(seq__16749_16757);
if(temp__4126__auto___16766){
var seq__16749_16767__$1 = temp__4126__auto___16766;
if(cljs.core.chunked_seq_QMARK_(seq__16749_16767__$1)){
var c__4415__auto___16768 = cljs.core.chunk_first(seq__16749_16767__$1);
var G__16769 = cljs.core.chunk_rest(seq__16749_16767__$1);
var G__16770 = c__4415__auto___16768;
var G__16771 = cljs.core.count(c__4415__auto___16768);
var G__16772 = (0);
seq__16749_16757 = G__16769;
chunk__16750_16758 = G__16770;
count__16751_16759 = G__16771;
i__16752_16760 = G__16772;
continue;
} else {
var child_16773 = cljs.core.first(seq__16749_16767__$1);
frag.appendChild(child_16773);

var G__16774 = cljs.core.next(seq__16749_16767__$1);
var G__16775 = null;
var G__16776 = (0);
var G__16777 = (0);
seq__16749_16757 = G__16774;
chunk__16750_16758 = G__16775;
count__16751_16759 = G__16776;
i__16752_16760 = G__16777;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq(parents)){
var G__16753_16778 = cljs.core.first(parents);
var G__16754_16779 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16753_16778,G__16754_16779) : f.call(null,G__16753_16778,G__16754_16779));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__16739_SHARP_,p2__16740_SHARP_){
var G__16755 = p1__16739_SHARP_;
var G__16756 = p2__16740_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16755,G__16756) : f.call(null,G__16755,G__16756));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else {
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3616__auto__ = obj;
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = cljs.core.not(obj.nodeName);
if(and__3616__auto____$1){
return obj.length;
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__16789 = list_thing;
if(G__16789){
var bit__4309__auto__ = (G__16789.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4309__auto__) || (G__16789.cljs$core$ISeqable$)){
return true;
} else {
if((!G__16789.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__16789);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__16789);
}
})()){
return cljs.core.seq(list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(list_thing))){
return domina.lazy_nodelist(list_thing);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__16790 = content;
if(G__16790){
var bit__4309__auto__ = (G__16790.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4309__auto__) || (G__16790.cljs$core$ISeqable$)){
return true;
} else {
if((!G__16790.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__16790);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__16790);
}
})()){
return cljs.core.seq(content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(content))){
return domina.lazy_nodelist(content);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__16791 = content;
if(G__16791){
var bit__4309__auto__ = (G__16791.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4309__auto__) || (G__16791.cljs$core$ISeqable$)){
return true;
} else {
if((!G__16791.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__16791);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__16791);
}
})()){
return cljs.core.first(content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist(coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}
