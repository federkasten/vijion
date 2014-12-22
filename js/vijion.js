if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

;(function(){
var h, aa = this;
function r(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
function ga(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
;function ha(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
}
function ia(a) {
  return Array.prototype.join.call(arguments, "");
}
function ka(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function la(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function ma(a) {
  var b = ba(void 0) ? ha(void 0) : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;function na(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function pa(a, b) {
  null != a && this.append.apply(this, arguments);
}
pa.prototype.Ha = "";
pa.prototype.append = function(a, b, c) {
  this.Ha += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ha += arguments[d];
    }
  }
  return this;
};
pa.prototype.clear = function() {
  this.Ha = "";
};
pa.prototype.toString = function() {
  return this.Ha;
};
var qa = Array.prototype, ta = qa.indexOf ? function(a, b, c) {
  return qa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
function ua(a, b) {
  a.sort(b || va);
}
function wa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || va;
  ua(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function va(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var xa = null;
function t(a) {
  return null != a && !1 !== a;
}
function za(a) {
  return null == a;
}
function Aa(a) {
  return t(a) ? !1 : !0;
}
function w(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Ba(a) {
  return null == a ? null : a.constructor;
}
function x(a, b) {
  var c = Ba(b), c = t(t(c) ? c.Eb : c) ? c.Db : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ca(a) {
  var b = a.Db;
  return t(b) ? b : "" + y(a);
}
var Ea = "undefined" !== typeof Symbol && "function" === r(Symbol) ? Symbol.ic : "@@iterator";
function Ga(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ia = function() {
  function a(a, b) {
    function c(a, b) {
      a.push(b);
      return a;
    }
    var g = [];
    return Ha.c ? Ha.c(c, g, b) : Ha.call(null, c, g, b);
  }
  function b(a) {
    return c.a(null, a);
  }
  var c = null, c = function(d, c) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, 0, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Ja = {}, Ka = {};
function La(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = La[r(null == a ? null : a)];
  if (!b && (b = La._, !b)) {
    throw x("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ma(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = Ma[r(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw x("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = Pa[r(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw x("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Qa = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var g;
    g = A[r(null == a ? null : a)];
    if (!g && (g = A._, !g)) {
      throw x("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.F : a) {
      return a.F(a, b);
    }
    var c;
    c = A[r(null == a ? null : a)];
    if (!c && (c = A._, !c)) {
      throw x("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ra = {};
function D(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = D[r(null == a ? null : a)];
  if (!b && (b = D._, !b)) {
    throw x("ISeq.-first", a);
  }
  return b.call(null, a);
}
function E(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = E[r(null == a ? null : a)];
  if (!b && (b = E._, !b)) {
    throw x("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Sa = {}, Ta = {}, F = function() {
  function a(a, b, c) {
    if (a ? a.t : a) {
      return a.t(a, b, c);
    }
    var g;
    g = F[r(null == a ? null : a)];
    if (!g && (g = F._, !g)) {
      throw x("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.v : a) {
      return a.v(a, b);
    }
    var c;
    c = F[r(null == a ? null : a)];
    if (!c && (c = F._, !c)) {
      throw x("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Wa(a, b) {
  if (a ? a.mb : a) {
    return a.mb(a, b);
  }
  var c;
  c = Wa[r(null == a ? null : a)];
  if (!c && (c = Wa._, !c)) {
    throw x("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Xa(a, b, c) {
  if (a ? a.Fa : a) {
    return a.Fa(a, b, c);
  }
  var d;
  d = Xa[r(null == a ? null : a)];
  if (!d && (d = Xa._, !d)) {
    throw x("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ya = {};
function Za(a, b) {
  if (a ? a.Sa : a) {
    return a.Sa(a, b);
  }
  var c;
  c = Za[r(null == a ? null : a)];
  if (!c && (c = Za._, !c)) {
    throw x("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var $a = {};
function ab(a) {
  if (a ? a.sb : a) {
    return a.sb();
  }
  var b;
  b = ab[r(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw x("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function cb(a) {
  if (a ? a.yb : a) {
    return a.yb();
  }
  var b;
  b = cb[r(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw x("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var db = {}, eb = {};
function fb(a, b, c) {
  if (a ? a.tb : a) {
    return a.tb(a, b, c);
  }
  var d;
  d = fb[r(null == a ? null : a)];
  if (!d && (d = fb._, !d)) {
    throw x("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function gb(a) {
  if (a ? a.Oa : a) {
    return a.Oa(a);
  }
  var b;
  b = gb[r(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw x("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var hb = {};
function ib(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = ib[r(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw x("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var jb = {};
function kb(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = kb[r(null == a ? null : a)];
  if (!c && (c = kb._, !c)) {
    throw x("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var mb = {}, nb = function() {
  function a(a, b, c) {
    if (a ? a.O : a) {
      return a.O(a, b, c);
    }
    var g;
    g = nb[r(null == a ? null : a)];
    if (!g && (g = nb._, !g)) {
      throw x("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = nb[r(null == a ? null : a)];
    if (!c && (c = nb._, !c)) {
      throw x("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function ob(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = ob[r(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw x("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function pb(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = pb[r(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw x("IHash.-hash", a);
  }
  return b.call(null, a);
}
var qb = {};
function rb(a) {
  if (a ? a.B : a) {
    return a.B(a);
  }
  var b;
  b = rb[r(null == a ? null : a)];
  if (!b && (b = rb._, !b)) {
    throw x("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var sb = {}, tb = {};
function ub(a) {
  if (a ? a.eb : a) {
    return a.eb(a);
  }
  var b;
  b = ub[r(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw x("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function G(a, b) {
  if (a ? a.Cb : a) {
    return a.Cb(0, b);
  }
  var c;
  c = G[r(null == a ? null : a)];
  if (!c && (c = G._, !c)) {
    throw x("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var vb = {};
function wb(a, b, c) {
  if (a ? a.A : a) {
    return a.A(a, b, c);
  }
  var d;
  d = wb[r(null == a ? null : a)];
  if (!d && (d = wb._, !d)) {
    throw x("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function xb(a) {
  if (a ? a.Pa : a) {
    return a.Pa(a);
  }
  var b;
  b = xb[r(null == a ? null : a)];
  if (!b && (b = xb._, !b)) {
    throw x("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function yb(a, b) {
  if (a ? a.Va : a) {
    return a.Va(a, b);
  }
  var c;
  c = yb[r(null == a ? null : a)];
  if (!c && (c = yb._, !c)) {
    throw x("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Ab(a) {
  if (a ? a.Wa : a) {
    return a.Wa(a);
  }
  var b;
  b = Ab[r(null == a ? null : a)];
  if (!b && (b = Ab._, !b)) {
    throw x("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Bb(a, b, c) {
  if (a ? a.Ua : a) {
    return a.Ua(a, b, c);
  }
  var d;
  d = Bb[r(null == a ? null : a)];
  if (!d && (d = Bb._, !d)) {
    throw x("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Cb(a, b, c) {
  if (a ? a.Ab : a) {
    return a.Ab(0, b, c);
  }
  var d;
  d = Cb[r(null == a ? null : a)];
  if (!d && (d = Cb._, !d)) {
    throw x("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Db(a) {
  if (a ? a.xb : a) {
    return a.xb();
  }
  var b;
  b = Db[r(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw x("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Eb(a) {
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = Eb[r(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw x("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Fb(a) {
  if (a ? a.pb : a) {
    return a.pb(a);
  }
  var b;
  b = Fb[r(null == a ? null : a)];
  if (!b && (b = Fb._, !b)) {
    throw x("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Gb(a) {
  if (a ? a.nb : a) {
    return a.nb(a);
  }
  var b;
  b = Gb[r(null == a ? null : a)];
  if (!b && (b = Gb._, !b)) {
    throw x("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Hb(a) {
  if (a ? a.Ra : a) {
    return a.Ra(a);
  }
  var b;
  b = Hb[r(null == a ? null : a)];
  if (!b && (b = Hb._, !b)) {
    throw x("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Ib(a) {
  this.Yb = a;
  this.p = 0;
  this.i = 1073741824;
}
Ib.prototype.Cb = function(a, b) {
  return this.Yb.append(b);
};
function Jb(a) {
  var b = new pa;
  a.A(null, new Ib(b), new Kb(null, 5, [Lb, !0, Mb, !0, Nb, !1, Ob, !1, Pb, null], null));
  return "" + y(b);
}
var Qb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Rb(a) {
  a = Qb(a, 3432918353);
  return Qb(a << 15 | a >>> -15, 461845907);
}
function Sb(a, b) {
  var c = a ^ b;
  return Qb(c << 13 | c >>> -13, 5) + 3864292196;
}
function Tb(a, b) {
  var c = a ^ b, c = Qb(c ^ c >>> 16, 2246822507), c = Qb(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
var Vb = {}, Wb = 0;
function Xb(a) {
  255 < Wb && (Vb = {}, Wb = 0);
  var b = Vb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Qb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
          b = void 0;
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Vb[a] = b;
    Wb += 1;
  }
  return a = b;
}
function Yb(a) {
  a && (a.i & 4194304 || a.bc) ? a = a.D(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Xb(a), 0 !== a && (a = Rb(a), a = Sb(0, a), a = Tb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : pb(a);
  return a;
}
function Zb(a) {
  var b;
  b = a.name;
  var c;
  a: {
    c = 1;
    for (var d = 0;;) {
      if (c < b.length) {
        var e = c + 2, d = Sb(d, Rb(b.charCodeAt(c - 1) | b.charCodeAt(c) << 16));
        c = e;
      } else {
        c = d;
        break a;
      }
    }
    c = void 0;
  }
  c = 1 === (b.length & 1) ? c ^ Rb(b.charCodeAt(b.length - 1)) : c;
  b = Tb(c, Qb(2, b.length));
  a = Xb(a.Ba);
  return b ^ a + 2654435769 + (b << 6) + (b >> 2);
}
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Ta)) {
    return a.B(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new $b(a, 0);
  }
  if (w(qb, a)) {
    return rb(a);
  }
  throw Error([y(a), y(" is not ISeqable")].join(""));
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.fb)) {
    return a.S(null);
  }
  a = H(a);
  return null == a ? null : D(a);
}
function J(a) {
  return null != a ? a && (a.i & 64 || a.fb) ? a.W(null) : (a = H(a)) ? E(a) : L : L;
}
function M(a) {
  return null == a ? null : a && (a.i & 128 || a.zb) ? a.Y(null) : H(J(a));
}
var O = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || ob(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (M(e)) {
            a = d, d = I(e), e = M(e);
          } else {
            return b.a(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.o = 2;
    a.h = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.h = c.h;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.f = c.f;
  return b;
}();
function ac(a) {
  this.s = a;
}
ac.prototype.next = function() {
  if (null != this.s) {
    var a = I(this.s);
    this.s = M(this.s);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function bc(a) {
  return new ac(H(a));
}
function cc(a, b) {
  var c = Rb(a), c = Sb(0, c);
  return Tb(c, b);
}
function dc(a) {
  var b = 0, c = 1;
  for (a = H(a);;) {
    if (null != a) {
      b += 1, c = Qb(31, c) + Yb(I(a)) | 0, a = M(a);
    } else {
      return cc(c, b);
    }
  }
}
function ec(a) {
  var b = 0, c = 0;
  for (a = H(a);;) {
    if (null != a) {
      b += 1, c = c + Yb(I(a)) | 0, a = M(a);
    } else {
      return cc(c, b);
    }
  }
}
Ka["null"] = !0;
La["null"] = function() {
  return 0;
};
Date.prototype.C = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
ob.number = function(a, b) {
  return a === b;
};
hb["function"] = !0;
ib["function"] = function() {
  return null;
};
Ja["function"] = !0;
pb._ = function(a) {
  return a[ea] || (a[ea] = ++fa);
};
function fc(a) {
  this.ca = a;
  this.p = 0;
  this.i = 32768;
}
fc.prototype.Oa = function() {
  return this.ca;
};
function gc(a) {
  return a instanceof fc;
}
function hc(a) {
  return gb(a);
}
var ic = function() {
  function a(a, b, c, d) {
    for (var l = La(a);;) {
      if (d < l) {
        var m = A.a(a, d);
        c = b.a ? b.a(c, m) : b.call(null, c, m);
        if (gc(c)) {
          return gb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = La(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = A.a(a, c), l = b.a ? b.a(l, m) : b.call(null, l, m);
        if (gc(l)) {
          return gb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = La(a);
    if (0 === c) {
      return b.l ? b.l() : b.call(null);
    }
    for (var d = A.a(a, 0), l = 1;;) {
      if (l < c) {
        var m = A.a(a, l), d = b.a ? b.a(d, m) : b.call(null, d, m);
        if (gc(d)) {
          return gb(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.m = a;
  return d;
}(), jc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.a ? b.a(c, m) : b.call(null, c, m);
        if (gc(c)) {
          return gb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = a.length, l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = a[c], l = b.a ? b.a(l, m) : b.call(null, l, m);
        if (gc(l)) {
          return gb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.l ? b.l() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.a ? b.a(d, m) : b.call(null, d, m);
        if (gc(d)) {
          return gb(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.m = a;
  return d;
}();
function kc(a) {
  return a ? a.i & 2 || a.bb ? !0 : a.i ? !1 : w(Ka, a) : w(Ka, a);
}
function mc(a) {
  return a ? a.i & 16 || a.Qa ? !0 : a.i ? !1 : w(Qa, a) : w(Qa, a);
}
function nc(a, b) {
  this.d = a;
  this.j = b;
}
nc.prototype.hb = function() {
  return this.j < this.d.length;
};
nc.prototype.next = function() {
  var a = this.d[this.j];
  this.j += 1;
  return a;
};
function $b(a, b) {
  this.d = a;
  this.j = b;
  this.i = 166199550;
  this.p = 8192;
}
h = $b.prototype;
h.toString = function() {
  return Jb(this);
};
h.F = function(a, b) {
  var c = b + this.j;
  return c < this.d.length ? this.d[c] : null;
};
h.Q = function(a, b, c) {
  a = b + this.j;
  return a < this.d.length ? this.d[a] : c;
};
h.Ra = function() {
  return new nc(this.d, this.j);
};
h.Y = function() {
  return this.j + 1 < this.d.length ? new $b(this.d, this.j + 1) : null;
};
h.w = function() {
  return this.d.length - this.j;
};
h.eb = function() {
  var a = La(this);
  return 0 < a ? new oc(this, a - 1, null) : null;
};
h.D = function() {
  return dc(this);
};
h.C = function(a, b) {
  return pc.a ? pc.a(this, b) : pc.call(null, this, b);
};
h.L = function() {
  return L;
};
h.N = function(a, b) {
  return jc.m(this.d, b, this.d[this.j], this.j + 1);
};
h.O = function(a, b, c) {
  return jc.m(this.d, b, c, this.j);
};
h.S = function() {
  return this.d[this.j];
};
h.W = function() {
  return this.j + 1 < this.d.length ? new $b(this.d, this.j + 1) : L;
};
h.B = function() {
  return this;
};
h.J = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
$b.prototype[Ea] = function() {
  return bc(this);
};
var qc = function() {
  function a(a, b) {
    return b < a.length ? new $b(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return qc.a(a, b);
  }
  function b(a) {
    return qc.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function oc(a, b, c) {
  this.ab = a;
  this.j = b;
  this.k = c;
  this.i = 32374990;
  this.p = 8192;
}
h = oc.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.k;
};
h.Y = function() {
  return 0 < this.j ? new oc(this.ab, this.j - 1, null) : null;
};
h.w = function() {
  return this.j + 1;
};
h.D = function() {
  return dc(this);
};
h.C = function(a, b) {
  return pc.a ? pc.a(this, b) : pc.call(null, this, b);
};
h.L = function() {
  var a = this.k;
  return rc.a ? rc.a(L, a) : rc.call(null, L, a);
};
h.N = function(a, b) {
  return R.a ? R.a(b, this) : R.call(null, b, this);
};
h.O = function(a, b, c) {
  return R.c ? R.c(b, c, this) : R.call(null, b, c, this);
};
h.S = function() {
  return A.a(this.ab, this.j);
};
h.W = function() {
  return 0 < this.j ? new oc(this.ab, this.j - 1, null) : L;
};
h.B = function() {
  return this;
};
h.H = function(a, b) {
  return new oc(this.ab, this.j, b);
};
h.J = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
oc.prototype[Ea] = function() {
  return bc(this);
};
function sc(a) {
  return I(M(a));
}
ob._ = function(a, b) {
  return a === b;
};
var uc = function() {
  function a(a, b) {
    return null != a ? Pa(a, b) : Pa(L, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (t(e)) {
          a = b.a(a, d), d = I(e), e = M(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.o = 2;
    a.h = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return tc;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.h = c.h;
  b.l = function() {
    return tc;
  };
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.f = c.f;
  return b;
}();
function S(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.bb)) {
      a = a.w(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (w(Ka, a)) {
            a = La(a);
          } else {
            a: {
              a = H(a);
              for (var b = 0;;) {
                if (kc(a)) {
                  a = b + La(a);
                  break a;
                }
                a = M(a);
                b += 1;
              }
              a = void 0;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var vc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return H(a) ? I(a) : c;
      }
      if (mc(a)) {
        return A.c(a, b, c);
      }
      if (H(a)) {
        a = M(a), b -= 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (H(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (mc(a)) {
        return A.a(a, b);
      }
      if (H(a)) {
        var c = M(a), g = b - 1;
        a = c;
        b = g;
      } else {
        throw Error("Index out of bounds");
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), T = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.i & 16 || a.Qa)) {
      return a.Q(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (w(Qa, a)) {
      return A.a(a, b);
    }
    if (a ? a.i & 64 || a.fb || (a.i ? 0 : w(Ra, a)) : w(Ra, a)) {
      return vc.c(a, b, c);
    }
    throw Error([y("nth not supported on this type "), y(Ca(Ba(a)))].join(""));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.i & 16 || a.Qa)) {
      return a.F(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (w(Qa, a)) {
      return A.a(a, b);
    }
    if (a ? a.i & 64 || a.fb || (a.i ? 0 : w(Ra, a)) : w(Ra, a)) {
      return vc.a(a, b);
    }
    throw Error([y("nth not supported on this type "), y(Ca(Ba(a)))].join(""));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), U = function() {
  function a(a, b, c) {
    return null != a ? a && (a.i & 256 || a.Mb) ? a.t(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : w(Ta, a) ? F.c(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.i & 256 || a.Mb) ? a.v(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : w(Ta, a) ? F.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), xc = function() {
  function a(a, b, c) {
    return null != a ? Xa(a, b, c) : wc([b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), t(l)) {
          d = I(l), e = sc(l), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.o = 3;
    a.h = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.f(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 3;
  b.h = c.h;
  b.c = a;
  b.f = c.f;
  return b;
}(), yc = function() {
  function a(a, b) {
    return null == a ? null : Za(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (t(e)) {
          d = I(e), e = M(e);
        } else {
          return a;
        }
      }
    }
    a.o = 2;
    a.h = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.f = c.f;
  return b;
}();
function zc(a) {
  var b = "function" == r(a);
  return t(b) ? b : a ? t(t(null) ? null : a.Jb) ? !0 : a.hc ? !1 : w(Ja, a) : w(Ja, a);
}
function Ac(a, b) {
  this.e = a;
  this.k = b;
  this.p = 0;
  this.i = 393217;
}
h = Ac.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q, C, da) {
    a = this.e;
    return V.cb ? V.cb(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q, C, da) : V.call(null, a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q, C, da);
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q, C) {
    a = this;
    return a.e.ra ? a.e.ra(b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q, C) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q, C);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q) {
    a = this;
    return a.e.qa ? a.e.qa(b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K, Q);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K) {
    a = this;
    return a.e.pa ? a.e.pa(b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B, K);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B) {
    a = this;
    return a.e.oa ? a.e.oa(b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z, B);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z) {
    a = this;
    return a.e.na ? a.e.na(b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u, z);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u) {
    a = this;
    return a.e.ma ? a.e.ma(b, c, d, e, f, g, k, l, m, n, p, s, q, v, u) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s, q, v, u);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, p, s, q, v) {
    a = this;
    return a.e.la ? a.e.la(b, c, d, e, f, g, k, l, m, n, p, s, q, v) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s, q, v);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, p, s, q) {
    a = this;
    return a.e.ka ? a.e.ka(b, c, d, e, f, g, k, l, m, n, p, s, q) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s, q);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, p, s) {
    a = this;
    return a.e.ja ? a.e.ja(b, c, d, e, f, g, k, l, m, n, p, s) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, s);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, p) {
    a = this;
    return a.e.ia ? a.e.ia(b, c, d, e, f, g, k, l, m, n, p) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    return a.e.ha ? a.e.ha(b, c, d, e, f, g, k, l, m, n) : a.e.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function q(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    return a.e.ta ? a.e.ta(b, c, d, e, f, g, k, l, m) : a.e.call(null, b, c, d, e, f, g, k, l, m);
  }
  function s(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.e.sa ? a.e.sa(b, c, d, e, f, g, k, l) : a.e.call(null, b, c, d, e, f, g, k, l);
  }
  function u(a, b, c, d, e, f, g, k) {
    a = this;
    return a.e.aa ? a.e.aa(b, c, d, e, f, g, k) : a.e.call(null, b, c, d, e, f, g, k);
  }
  function v(a, b, c, d, e, f, g) {
    a = this;
    return a.e.P ? a.e.P(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g);
  }
  function z(a, b, c, d, e, f) {
    a = this;
    return a.e.r ? a.e.r(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function B(a, b, c, d, e) {
    a = this;
    return a.e.m ? a.e.m(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    return a.e.c ? a.e.c(b, c, d) : a.e.call(null, b, c, d);
  }
  function Q(a, b, c) {
    a = this;
    return a.e.a ? a.e.a(b, c) : a.e.call(null, b, c);
  }
  function da(a, b) {
    a = this;
    return a.e.b ? a.e.b(b) : a.e.call(null, b);
  }
  function Va(a) {
    a = this;
    return a.e.l ? a.e.l() : a.e.call(null);
  }
  var C = null, C = function(C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb, Ub, lc, Ic, od, ce, qf, Og) {
    switch(arguments.length) {
      case 1:
        return Va.call(this, C);
      case 2:
        return da.call(this, C, $);
      case 3:
        return Q.call(this, C, $, ca);
      case 4:
        return K.call(this, C, $, ca, ja);
      case 5:
        return B.call(this, C, $, ca, ja, oa);
      case 6:
        return z.call(this, C, $, ca, ja, oa, ra);
      case 7:
        return v.call(this, C, $, ca, ja, oa, ra, sa);
      case 8:
        return u.call(this, C, $, ca, ja, oa, ra, sa, ya);
      case 9:
        return s.call(this, C, $, ca, ja, oa, ra, sa, ya, Da);
      case 10:
        return q.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa);
      case 11:
        return p.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na);
      case 12:
        return n.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua);
      case 13:
        return m.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb);
      case 14:
        return l.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb);
      case 15:
        return k.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb);
      case 16:
        return g.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb, Ub);
      case 17:
        return f.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb, Ub, lc);
      case 18:
        return e.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb, Ub, lc, Ic);
      case 19:
        return d.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb, Ub, lc, Ic, od);
      case 20:
        return c.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb, Ub, lc, Ic, od, ce);
      case 21:
        return b.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb, Ub, lc, Ic, od, ce, qf);
      case 22:
        return a.call(this, C, $, ca, ja, oa, ra, sa, ya, Da, Fa, Na, Ua, bb, lb, zb, Ub, lc, Ic, od, ce, qf, Og);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  C.b = Va;
  C.a = da;
  C.c = Q;
  C.m = K;
  C.r = B;
  C.P = z;
  C.aa = v;
  C.sa = u;
  C.ta = s;
  C.ha = q;
  C.ia = p;
  C.ja = n;
  C.ka = m;
  C.la = l;
  C.ma = k;
  C.na = g;
  C.oa = f;
  C.pa = e;
  C.qa = d;
  C.ra = c;
  C.Lb = b;
  C.cb = a;
  return C;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.l = function() {
  return this.e.l ? this.e.l() : this.e.call(null);
};
h.b = function(a) {
  return this.e.b ? this.e.b(a) : this.e.call(null, a);
};
h.a = function(a, b) {
  return this.e.a ? this.e.a(a, b) : this.e.call(null, a, b);
};
h.c = function(a, b, c) {
  return this.e.c ? this.e.c(a, b, c) : this.e.call(null, a, b, c);
};
h.m = function(a, b, c, d) {
  return this.e.m ? this.e.m(a, b, c, d) : this.e.call(null, a, b, c, d);
};
h.r = function(a, b, c, d, e) {
  return this.e.r ? this.e.r(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
h.P = function(a, b, c, d, e, f) {
  return this.e.P ? this.e.P(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
};
h.aa = function(a, b, c, d, e, f, g) {
  return this.e.aa ? this.e.aa(a, b, c, d, e, f, g) : this.e.call(null, a, b, c, d, e, f, g);
};
h.sa = function(a, b, c, d, e, f, g, k) {
  return this.e.sa ? this.e.sa(a, b, c, d, e, f, g, k) : this.e.call(null, a, b, c, d, e, f, g, k);
};
h.ta = function(a, b, c, d, e, f, g, k, l) {
  return this.e.ta ? this.e.ta(a, b, c, d, e, f, g, k, l) : this.e.call(null, a, b, c, d, e, f, g, k, l);
};
h.ha = function(a, b, c, d, e, f, g, k, l, m) {
  return this.e.ha ? this.e.ha(a, b, c, d, e, f, g, k, l, m) : this.e.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.ia = function(a, b, c, d, e, f, g, k, l, m, n) {
  return this.e.ia ? this.e.ia(a, b, c, d, e, f, g, k, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.ja = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  return this.e.ja ? this.e.ja(a, b, c, d, e, f, g, k, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.ka = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  return this.e.ka ? this.e.ka(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.la = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s) {
  return this.e.la ? this.e.la(a, b, c, d, e, f, g, k, l, m, n, p, q, s) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, s);
};
h.ma = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u) {
  return this.e.ma ? this.e.ma(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, s, u);
};
h.na = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v) {
  return this.e.na ? this.e.na(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v);
};
h.oa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z) {
  return this.e.oa ? this.e.oa(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z);
};
h.pa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B) {
  return this.e.pa ? this.e.pa(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B);
};
h.qa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K) {
  return this.e.qa ? this.e.qa(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K);
};
h.ra = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q) {
  return this.e.ra ? this.e.ra(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q);
};
h.Lb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da) {
  var Va = this.e;
  return V.cb ? V.cb(Va, a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da) : V.call(null, Va, a, b, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da);
};
h.Jb = !0;
h.H = function(a, b) {
  return new Ac(this.e, b);
};
h.G = function() {
  return this.k;
};
function rc(a, b) {
  return zc(a) && !(a ? a.i & 262144 || a.gc || (a.i ? 0 : w(jb, a)) : w(jb, a)) ? new Ac(a, b) : null == a ? null : kb(a, b);
}
function Bc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Pb || (a.i ? 0 : w(hb, a)) : w(hb, a) : b) ? ib(a) : null;
}
function Cc(a) {
  return null == a ? !1 : a ? a.i & 4096 || a.ec ? !0 : a.i ? !1 : w(db, a) : w(db, a);
}
function Dc(a) {
  return a ? a.i & 16777216 || a.dc ? !0 : a.i ? !1 : w(sb, a) : w(sb, a);
}
function Ec(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.Nb ? !0 : a.i ? !1 : w(Ya, a) : w(Ya, a);
}
function Fc(a) {
  return a ? a.i & 16384 || a.fc ? !0 : a.i ? !1 : w(eb, a) : w(eb, a);
}
function Gc(a) {
  return a ? a.p & 512 || a.$b ? !0 : !1 : !1;
}
function Hc(a) {
  var b = [];
  na(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Jc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function Kc(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var Lc = {};
function Mc(a) {
  return t(a) ? !0 : !1;
}
function Nc(a, b) {
  return U.c(a, b, Lc) === Lc ? !1 : !0;
}
function Oc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Ba(a) === Ba(b)) {
    return a && (a.p & 2048 || a.qb) ? a.rb(null, b) : va(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Pc = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = Oc(T.a(a, g), T.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = S(a), g = S(b);
    return f < g ? -1 : f > g ? 1 : c.m(a, b, f, 0);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.m = a;
  return c;
}();
function Qc(a) {
  return O.a(a, Oc) ? Oc : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : t(d) ? -1 : t(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var Sc = function() {
  function a(a, b) {
    if (H(b)) {
      var c = Rc.b ? Rc.b(b) : Rc.call(null, b), g = Qc(a);
      wa(c, g);
      return H(c);
    }
    return L;
  }
  function b(a) {
    return c.a(Oc, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Tc = function() {
  function a(a, b, c) {
    return Sc.a(function(c, f) {
      return Qc(b).call(null, a.b ? a.b(c) : a.call(null, c), a.b ? a.b(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.c(a, Oc, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    for (c = H(c);;) {
      if (c) {
        var g = I(c);
        b = a.a ? a.a(b, g) : a.call(null, b, g);
        if (gc(b)) {
          return gb(b);
        }
        c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    if (c) {
      var g = I(c), c = M(c);
      return Ha.c ? Ha.c(a, g, c) : Ha.call(null, a, g, c);
    }
    return a.l ? a.l() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ha = function() {
  function a(a, b, c) {
    return c && (c.i & 524288 || c.Rb) ? c.O(null, a, b) : c instanceof Array ? jc.c(c, a, b) : "string" === typeof c ? jc.c(c, a, b) : w(mb, c) ? nb.c(c, a, b) : R.c(a, b, c);
  }
  function b(a, b) {
    return b && (b.i & 524288 || b.Rb) ? b.N(null, a) : b instanceof Array ? jc.a(b, a) : "string" === typeof b ? jc.a(b, a) : w(mb, b) ? nb.a(b, a) : R.a(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Uc(a) {
  return a;
}
var Vc = function() {
  function a(a, b, c, g) {
    a = a.b ? a.b(b) : a.call(null, b);
    c = Ha.c(a, c, g);
    return a.b ? a.b(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.m(a, b, b.l ? b.l() : b.call(null), f);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.m = a;
  return c;
}(), Wc = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Ha.c(a, b + c, d);
    }
    b.o = 2;
    b.h = function(a) {
      var b = I(a);
      a = M(a);
      var c = I(a);
      a = J(a);
      return d(b, c, a);
    };
    b.f = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.f(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.o = 2;
  a.h = b.h;
  a.l = function() {
    return 0;
  };
  a.b = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a + b;
  };
  a.f = b.f;
  return a;
}(), Xc = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Ha.c(a, b * c, d);
    }
    b.o = 2;
    b.h = function(a) {
      var b = I(a);
      a = M(a);
      var c = I(a);
      a = J(a);
      return d(b, c, a);
    };
    b.f = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 1;
      case 1:
        return a;
      case 2:
        return a * d;
      default:
        return b.f(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.o = 2;
  a.h = b.h;
  a.l = function() {
    return 1;
  };
  a.b = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a * b;
  };
  a.f = b.f;
  return a;
}();
function Yc(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function Zc(a) {
  return Yc(a);
}
function $c(a) {
  return Yc((a - a % 2) / 2);
}
var ad = function() {
  function a(a) {
    return a * c.l();
  }
  function b() {
    return Math.random.l ? Math.random.l() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.b = a;
  return c;
}();
function bd(a) {
  return Yc(ad.b(a));
}
function cd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var y = function() {
  function a(a) {
    return null == a ? "" : ia(a);
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new pa(b.b(a)), l = d;;) {
        if (t(l)) {
          e = e.append(b.b(I(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.o = 1;
    a.h = function(a) {
      var b = I(a);
      a = J(a);
      return c(b, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.h = c.h;
  b.l = function() {
    return "";
  };
  b.b = a;
  b.f = c.f;
  return b;
}();
function pc(a, b) {
  var c;
  if (Dc(b)) {
    if (kc(a) && kc(b) && S(a) !== S(b)) {
      c = !1;
    } else {
      a: {
        c = H(a);
        for (var d = H(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && O.a(I(c), I(d))) {
            c = M(c), d = M(d);
          } else {
            c = !1;
            break a;
          }
        }
        c = void 0;
      }
    }
  } else {
    c = null;
  }
  return Mc(c);
}
function dd(a) {
  var b = 0;
  for (a = H(a);;) {
    if (a) {
      var c = I(a), b = (b + (Yb(function() {
        var a = c;
        return ed.b ? ed.b(a) : ed.call(null, a);
      }()) ^ Yb(function() {
        var a = c;
        return fd.b ? fd.b(a) : fd.call(null, a);
      }()))) % 4503599627370496;
      a = M(a);
    } else {
      return b;
    }
  }
}
function gd(a, b, c, d, e) {
  this.k = a;
  this.first = b;
  this.wa = c;
  this.count = d;
  this.n = e;
  this.i = 65937646;
  this.p = 8192;
}
h = gd.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.k;
};
h.Y = function() {
  return 1 === this.count ? null : this.wa;
};
h.w = function() {
  return this.count;
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return L;
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.S = function() {
  return this.first;
};
h.W = function() {
  return 1 === this.count ? L : this.wa;
};
h.B = function() {
  return this;
};
h.H = function(a, b) {
  return new gd(b, this.first, this.wa, this.count, this.n);
};
h.J = function(a, b) {
  return new gd(this.k, b, this, this.count + 1, null);
};
gd.prototype[Ea] = function() {
  return bc(this);
};
function hd(a) {
  this.k = a;
  this.i = 65937614;
  this.p = 8192;
}
h = hd.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.k;
};
h.Y = function() {
  return null;
};
h.w = function() {
  return 0;
};
h.D = function() {
  return 0;
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return this;
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.S = function() {
  return null;
};
h.W = function() {
  return L;
};
h.B = function() {
  return null;
};
h.H = function(a, b) {
  return new hd(b);
};
h.J = function(a, b) {
  return new gd(this.k, b, null, 1, null);
};
var L = new hd(null);
hd.prototype[Ea] = function() {
  return bc(this);
};
function id(a) {
  return(a ? a.i & 134217728 || a.cc || (a.i ? 0 : w(tb, a)) : w(tb, a)) ? ub(a) : Ha.c(uc, L, a);
}
function jd(a, b, c, d) {
  this.k = a;
  this.first = b;
  this.wa = c;
  this.n = d;
  this.i = 65929452;
  this.p = 8192;
}
h = jd.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.k;
};
h.Y = function() {
  return null == this.wa ? null : H(this.wa);
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(L, this.k);
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.S = function() {
  return this.first;
};
h.W = function() {
  return null == this.wa ? L : this.wa;
};
h.B = function() {
  return this;
};
h.H = function(a, b) {
  return new jd(b, this.first, this.wa, this.n);
};
h.J = function(a, b) {
  return new jd(null, b, this, this.n);
};
jd.prototype[Ea] = function() {
  return bc(this);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.fb)) ? new jd(null, a, b, null) : new jd(null, a, H(b), null);
}
function kd(a, b) {
  if (a.ba === b.ba) {
    return 0;
  }
  var c = Aa(a.Ba);
  if (t(c ? b.Ba : c)) {
    return-1;
  }
  if (t(a.Ba)) {
    if (Aa(b.Ba)) {
      return 1;
    }
    c = va(a.Ba, b.Ba);
    return 0 === c ? va(a.name, b.name) : c;
  }
  return va(a.name, b.name);
}
function W(a, b, c, d) {
  this.Ba = a;
  this.name = b;
  this.ba = c;
  this.wb = d;
  this.i = 2153775105;
  this.p = 4096;
}
h = W.prototype;
h.A = function(a, b) {
  return G(b, [y(":"), y(this.ba)].join(""));
};
h.D = function() {
  var a = this.wb;
  return null != a ? a : this.wb = a = Zb(this) + 2654435769 | 0;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return U.a(c, this);
      case 3:
        return U.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return U.a(c, this);
  };
  a.c = function(a, c, d) {
    return U.c(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return U.a(a, this);
};
h.a = function(a, b) {
  return U.c(a, this, b);
};
h.C = function(a, b) {
  return b instanceof W ? this.ba === b.ba : !1;
};
h.toString = function() {
  return[y(":"), y(this.ba)].join("");
};
function ld(a, b) {
  return a === b ? !0 : a instanceof W && b instanceof W ? a.ba === b.ba : !1;
}
var md = function() {
  function a(a, b) {
    return new W(a, b, [y(t(a) ? [y(a), y("/")].join("") : null), y(b)].join(""), null);
  }
  function b(a) {
    var b;
    return a instanceof W ? a : "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new W(b[0], b[1], a, null) : new W(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function X(a, b, c, d) {
  this.k = a;
  this.Ka = b;
  this.s = c;
  this.n = d;
  this.p = 0;
  this.i = 32374988;
}
h = X.prototype;
h.toString = function() {
  return Jb(this);
};
function nd(a) {
  null != a.Ka && (a.s = a.Ka.l ? a.Ka.l() : a.Ka.call(null), a.Ka = null);
  return a.s;
}
h.G = function() {
  return this.k;
};
h.Y = function() {
  rb(this);
  return null == this.s ? null : M(this.s);
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(L, this.k);
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.S = function() {
  rb(this);
  return null == this.s ? null : I(this.s);
};
h.W = function() {
  rb(this);
  return null != this.s ? J(this.s) : L;
};
h.B = function() {
  nd(this);
  if (null == this.s) {
    return null;
  }
  for (var a = this.s;;) {
    if (a instanceof X) {
      a = nd(a);
    } else {
      return this.s = a, H(this.s);
    }
  }
};
h.H = function(a, b) {
  return new X(b, this.Ka, this.s, this.n);
};
h.J = function(a, b) {
  return P(b, this);
};
X.prototype[Ea] = function() {
  return bc(this);
};
function pd(a, b) {
  this.jb = a;
  this.end = b;
  this.p = 0;
  this.i = 2;
}
pd.prototype.w = function() {
  return this.end;
};
pd.prototype.add = function(a) {
  this.jb[this.end] = a;
  return this.end += 1;
};
pd.prototype.X = function() {
  var a = new qd(this.jb, 0, this.end);
  this.jb = null;
  return a;
};
function qd(a, b, c) {
  this.d = a;
  this.M = b;
  this.end = c;
  this.p = 0;
  this.i = 524306;
}
h = qd.prototype;
h.N = function(a, b) {
  return jc.m(this.d, b, this.d[this.M], this.M + 1);
};
h.O = function(a, b, c) {
  return jc.m(this.d, b, c, this.M);
};
h.xb = function() {
  if (this.M === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new qd(this.d, this.M + 1, this.end);
};
h.F = function(a, b) {
  return this.d[this.M + b];
};
h.Q = function(a, b, c) {
  return 0 <= b && b < this.end - this.M ? this.d[this.M + b] : c;
};
h.w = function() {
  return this.end - this.M;
};
var rd = function() {
  function a(a, b, c) {
    return new qd(a, b, c);
  }
  function b(a, b) {
    return new qd(a, b, a.length);
  }
  function c(a) {
    return new qd(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function sd(a, b, c, d) {
  this.X = a;
  this.fa = b;
  this.k = c;
  this.n = d;
  this.i = 31850732;
  this.p = 1536;
}
h = sd.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.k;
};
h.Y = function() {
  if (1 < La(this.X)) {
    return new sd(Db(this.X), this.fa, this.k, null);
  }
  var a = rb(this.fa);
  return null == a ? null : a;
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(L, this.k);
};
h.S = function() {
  return A.a(this.X, 0);
};
h.W = function() {
  return 1 < La(this.X) ? new sd(Db(this.X), this.fa, this.k, null) : null == this.fa ? L : this.fa;
};
h.B = function() {
  return this;
};
h.ob = function() {
  return this.X;
};
h.pb = function() {
  return null == this.fa ? L : this.fa;
};
h.H = function(a, b) {
  return new sd(this.X, this.fa, b, this.n);
};
h.J = function(a, b) {
  return P(b, this);
};
h.nb = function() {
  return null == this.fa ? null : this.fa;
};
sd.prototype[Ea] = function() {
  return bc(this);
};
function td(a, b) {
  return 0 === La(a) ? b : new sd(a, b, null, null);
}
function ud(a, b) {
  a.add(b);
}
function Rc(a) {
  for (var b = [];;) {
    if (H(a)) {
      b.push(I(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function vd(a, b) {
  if (kc(a)) {
    return S(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && H(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var xd = function wd(b) {
  return null == b ? null : null == M(b) ? H(I(b)) : P(I(b), wd(M(b)));
}, yd = function() {
  function a(a, b) {
    return new X(null, function() {
      var c = H(a);
      return c ? Gc(c) ? td(Eb(c), d.a(Fb(c), b)) : P(I(c), d.a(J(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new X(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new X(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function p(a, b) {
        return new X(null, function() {
          var c = H(a);
          return c ? Gc(c) ? td(Eb(c), p(Fb(c), b)) : P(I(c), p(J(c), b)) : t(b) ? p(I(b), M(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.o = 2;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.f(d, g, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 2;
  d.h = e.h;
  d.l = c;
  d.b = b;
  d.a = a;
  d.f = e.f;
  return d;
}(), zd = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)));
  }
  function b(a, b, c) {
    return P(a, P(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      4 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, e, f) {
      return P(a, P(c, P(d, P(e, xd(f)))));
    }
    a.o = 4;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var n = I(a);
      a = J(a);
      return b(c, d, e, n, a);
    };
    a.f = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return P(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.f(c, f, g, k, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = 4;
  c.h = d.h;
  c.b = function(a) {
    return H(a);
  };
  c.a = function(a, b) {
    return P(a, b);
  };
  c.c = b;
  c.m = a;
  c.f = d.f;
  return c;
}();
function Ad(a) {
  return Ab(a);
}
var Bd = function() {
  function a() {
    return xb(tc);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = yb(a, c), t(d)) {
          c = I(d), d = M(d);
        } else {
          return a;
        }
      }
    }
    a.o = 2;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return yb(b, e);
      default:
        return c.f(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.h = c.h;
  b.l = a;
  b.b = function(a) {
    return a;
  };
  b.a = function(a, b) {
    return yb(a, b);
  };
  b.f = c.f;
  return b;
}(), Cd = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Bb(a, c, d), t(k)) {
          c = I(k), d = sc(k), k = M(M(k));
        } else {
          return a;
        }
      }
    }
    a.o = 3;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var g = I(a);
      a = M(a);
      var k = I(a);
      a = J(a);
      return b(c, g, k, a);
    };
    a.f = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Bb(a, d, e);
      default:
        return b.f(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.o = 3;
  a.h = b.h;
  a.c = function(a, b, e) {
    return Bb(a, b, e);
  };
  a.f = b.f;
  return a;
}();
function Dd(a, b, c) {
  var d = H(c);
  if (0 === b) {
    return a.l ? a.l() : a.call(null);
  }
  c = D(d);
  var e = E(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = D(e), f = E(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = D(f), g = E(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = D(g), k = E(g);
  if (4 === b) {
    return a.m ? a.m(c, d, e, f) : a.m ? a.m(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = D(k), l = E(k);
  if (5 === b) {
    return a.r ? a.r(c, d, e, f, g) : a.r ? a.r(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = D(l), m = E(l);
  if (6 === b) {
    return a.P ? a.P(c, d, e, f, g, k) : a.P ? a.P(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = D(m), n = E(m);
  if (7 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l) : a.aa ? a.aa(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = D(n), p = E(n);
  if (8 === b) {
    return a.sa ? a.sa(c, d, e, f, g, k, l, m) : a.sa ? a.sa(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = D(p), q = E(p);
  if (9 === b) {
    return a.ta ? a.ta(c, d, e, f, g, k, l, m, n) : a.ta ? a.ta(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = D(q), s = E(q);
  if (10 === b) {
    return a.ha ? a.ha(c, d, e, f, g, k, l, m, n, p) : a.ha ? a.ha(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var q = D(s), u = E(s);
  if (11 === b) {
    return a.ia ? a.ia(c, d, e, f, g, k, l, m, n, p, q) : a.ia ? a.ia(c, d, e, f, g, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q);
  }
  var s = D(u), v = E(u);
  if (12 === b) {
    return a.ja ? a.ja(c, d, e, f, g, k, l, m, n, p, q, s) : a.ja ? a.ja(c, d, e, f, g, k, l, m, n, p, q, s) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s);
  }
  var u = D(v), z = E(v);
  if (13 === b) {
    return a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p, q, s, u) : a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p, q, s, u) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s, u);
  }
  var v = D(z), B = E(z);
  if (14 === b) {
    return a.la ? a.la(c, d, e, f, g, k, l, m, n, p, q, s, u, v) : a.la ? a.la(c, d, e, f, g, k, l, m, n, p, q, s, u, v) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s, u, v);
  }
  var z = D(B), K = E(B);
  if (15 === b) {
    return a.ma ? a.ma(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z) : a.ma ? a.ma(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z);
  }
  var B = D(K), Q = E(K);
  if (16 === b) {
    return a.na ? a.na(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B) : a.na ? a.na(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B);
  }
  var K = D(Q), da = E(Q);
  if (17 === b) {
    return a.oa ? a.oa(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K) : a.oa ? a.oa(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K);
  }
  var Q = D(da), Va = E(da);
  if (18 === b) {
    return a.pa ? a.pa(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q) : a.pa ? a.pa(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q);
  }
  da = D(Va);
  Va = E(Va);
  if (19 === b) {
    return a.qa ? a.qa(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da) : a.qa ? a.qa(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da);
  }
  var C = D(Va);
  E(Va);
  if (20 === b) {
    return a.ra ? a.ra(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da, C) : a.ra ? a.ra(c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da, C) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, s, u, v, z, B, K, Q, da, C);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var V = function() {
  function a(a, b, c, d, e) {
    b = zd.m(b, c, d, e);
    c = a.o;
    return a.h ? (d = vd(b, c + 1), d <= c ? Dd(a, d, b) : a.h(b)) : a.apply(a, Rc(b));
  }
  function b(a, b, c, d) {
    b = zd.c(b, c, d);
    c = a.o;
    return a.h ? (d = vd(b, c + 1), d <= c ? Dd(a, d, b) : a.h(b)) : a.apply(a, Rc(b));
  }
  function c(a, b, c) {
    b = zd.a(b, c);
    c = a.o;
    if (a.h) {
      var d = vd(b, c + 1);
      return d <= c ? Dd(a, d, b) : a.h(b);
    }
    return a.apply(a, Rc(b));
  }
  function d(a, b) {
    var c = a.o;
    if (a.h) {
      var d = vd(b, c + 1);
      return d <= c ? Dd(a, d, b) : a.h(b);
    }
    return a.apply(a, Rc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, s) {
      var u = null;
      5 < arguments.length && (u = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, u);
    }
    function b(a, c, d, e, f, g) {
      c = P(c, P(d, P(e, P(f, xd(g)))));
      d = a.o;
      return a.h ? (e = vd(c, d + 1), e <= d ? Dd(a, e, c) : a.h(c)) : a.apply(a, Rc(c));
    }
    a.o = 5;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = M(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, f, g, a);
    };
    a.f = b;
    return a;
  }(), e = function(e, k, l, m, n, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return f.f(e, k, l, m, n, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 5;
  e.h = f.h;
  e.a = d;
  e.c = c;
  e.m = b;
  e.r = a;
  e.f = f.f;
  return e;
}(), Ed = function() {
  function a(a, b) {
    return!O.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Aa(V.m(O, a, c, d));
    }
    a.o = 2;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.h = c.h;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.f = c.f;
  return b;
}();
function Fd(a) {
  return H(a) ? a : null;
}
function Gd(a, b) {
  for (;;) {
    if (null == H(b)) {
      return!0;
    }
    var c;
    c = I(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (t(c)) {
      c = a;
      var d = M(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Hd(a) {
  for (var b = za;;) {
    if (H(a)) {
      var c;
      c = I(a);
      c = b.b ? b.b(c) : b.call(null, c);
      if (t(c)) {
        return c;
      }
      a = M(a);
    } else {
      return null;
    }
  }
}
function Id(a) {
  if ("number" !== typeof a || !Aa(isNaN(a)) || Infinity === a || parseFloat(a) !== parseInt(a, 10)) {
    throw Error([y("Argument must be an integer: "), y(a)].join(""));
  }
  return 0 !== (a & 1);
}
function Jd() {
  return function() {
    function a(a, b) {
      return Aa(za.a ? za.a(a, b) : za.call(null, a));
    }
    function b(a) {
      return Aa(za.b ? za.b(a) : za.call(null, a));
    }
    function c() {
      return Aa(za.l ? za.l() : za.call(null));
    }
    var d = null, e = function() {
      function a(c, d, e) {
        var f = null;
        2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
        return b.call(this, c, d, f);
      }
      function b(a, c, d) {
        return Aa(V.m(za, a, c, d));
      }
      a.o = 2;
      a.h = function(a) {
        var c = I(a);
        a = M(a);
        var d = I(a);
        a = J(a);
        return b(c, d, a);
      };
      a.f = b;
      return a;
    }(), d = function(d, g, k) {
      switch(arguments.length) {
        case 0:
          return c.call(this);
        case 1:
          return b.call(this, d);
        case 2:
          return a.call(this, d, g);
        default:
          return e.f(d, g, N(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.o = 2;
    d.h = e.h;
    d.l = c;
    d.b = b;
    d.a = a;
    d.f = e.f;
    return d;
  }();
}
var Kd = function() {
  function a(a, b, c) {
    return function() {
      function d(k, l, m) {
        k = c.c ? c.c(k, l, m) : c.call(null, k, l, m);
        k = b.b ? b.b(k) : b.call(null, k);
        return a.b ? a.b(k) : a.call(null, k);
      }
      function l(d, k) {
        var l;
        l = c.a ? c.a(d, k) : c.call(null, d, k);
        l = b.b ? b.b(l) : b.call(null, l);
        return a.b ? a.b(l) : a.call(null, l);
      }
      function m(d) {
        d = c.b ? c.b(d) : c.call(null, d);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      function n() {
        var d;
        d = c.l ? c.l() : c.call(null);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      var p = null, q = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, f);
        }
        function k(d, l, m, n) {
          d = V.r(c, d, l, m, n);
          d = b.b ? b.b(d) : b.call(null, d);
          return a.b ? a.b(d) : a.call(null, d);
        }
        d.o = 3;
        d.h = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var d = I(a);
          a = J(a);
          return k(b, c, d, a);
        };
        d.f = k;
        return d;
      }(), p = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return n.call(this);
          case 1:
            return m.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return q.f(a, b, c, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      p.o = 3;
      p.h = q.h;
      p.l = n;
      p.b = m;
      p.a = l;
      p.c = d;
      p.f = q.f;
      return p;
    }();
  }
  function b(a, b) {
    return function() {
      function c(d, g, k) {
        d = b.c ? b.c(d, g, k) : b.call(null, d, g, k);
        return a.b ? a.b(d) : a.call(null, d);
      }
      function d(c, g) {
        var k = b.a ? b.a(c, g) : b.call(null, c, g);
        return a.b ? a.b(k) : a.call(null, k);
      }
      function l(c) {
        c = b.b ? b.b(c) : b.call(null, c);
        return a.b ? a.b(c) : a.call(null, c);
      }
      function m() {
        var c = b.l ? b.l() : b.call(null);
        return a.b ? a.b(c) : a.call(null, c);
      }
      var n = null, p = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, k, l) {
          c = V.r(b, c, g, k, l);
          return a.b ? a.b(c) : a.call(null, c);
        }
        c.o = 3;
        c.h = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a);
        };
        c.f = d;
        return c;
      }(), n = function(a, b, e, f) {
        switch(arguments.length) {
          case 0:
            return m.call(this);
          case 1:
            return l.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, e);
          default:
            return p.f(a, b, e, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      n.o = 3;
      n.h = p.h;
      n.l = m;
      n.b = l;
      n.a = d;
      n.c = c;
      n.f = p.f;
      return n;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, n);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = V.a(I(a), b);
            for (var d = M(a);;) {
              if (d) {
                b = I(d).call(null, b), d = M(d);
              } else {
                return b;
              }
            }
          }
          b.o = 0;
          b.h = function(a) {
            a = H(a);
            return c(a);
          };
          b.f = c;
          return b;
        }();
      }(id(zd.m(a, c, d, e)));
    }
    a.o = 3;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = J(a);
      return b(c, d, e, a);
    };
    a.f = b;
    return a;
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 0:
        return Uc;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.f(c, f, g, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = 3;
  c.h = d.h;
  c.l = function() {
    return Uc;
  };
  c.b = function(a) {
    return a;
  };
  c.a = b;
  c.c = a;
  c.f = d.f;
  return c;
}(), Ld = function() {
  function a(a, b, c, d) {
    return function() {
      function e(m, n, p) {
        return a.P ? a.P(b, c, d, m, n, p) : a.call(null, b, c, d, m, n, p);
      }
      function n(e, m) {
        return a.r ? a.r(b, c, d, e, m) : a.call(null, b, c, d, e, m);
      }
      function p(e) {
        return a.m ? a.m(b, c, d, e) : a.call(null, b, c, d, e);
      }
      function q() {
        return a.c ? a.c(b, c, d) : a.call(null, b, c, d);
      }
      var s = null, u = function() {
        function e(a, b, c, d) {
          var f = null;
          3 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 3), 0));
          return m.call(this, a, b, c, f);
        }
        function m(e, n, p, q) {
          return V.f(a, b, c, d, e, N([n, p, q], 0));
        }
        e.o = 3;
        e.h = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var d = I(a);
          a = J(a);
          return m(b, c, d, a);
        };
        e.f = m;
        return e;
      }(), s = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return q.call(this);
          case 1:
            return p.call(this, a);
          case 2:
            return n.call(this, a, b);
          case 3:
            return e.call(this, a, b, c);
          default:
            return u.f(a, b, c, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      s.o = 3;
      s.h = u.h;
      s.l = q;
      s.b = p;
      s.a = n;
      s.c = e;
      s.f = u.f;
      return s;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(e, l, m) {
        return a.r ? a.r(b, c, e, l, m) : a.call(null, b, c, e, l, m);
      }
      function e(d, l) {
        return a.m ? a.m(b, c, d, l) : a.call(null, b, c, d, l);
      }
      function n(d) {
        return a.c ? a.c(b, c, d) : a.call(null, b, c, d);
      }
      function p() {
        return a.a ? a.a(b, c) : a.call(null, b, c);
      }
      var q = null, s = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, l, m, n) {
          return V.f(a, b, c, d, l, N([m, n], 0));
        }
        d.o = 3;
        d.h = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var d = I(a);
          a = J(a);
          return e(b, c, d, a);
        };
        d.f = e;
        return d;
      }(), q = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return p.call(this);
          case 1:
            return n.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return s.f(a, b, c, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      q.o = 3;
      q.h = s.h;
      q.l = p;
      q.b = n;
      q.a = e;
      q.c = d;
      q.f = s.f;
      return q;
    }();
  }
  function c(a, b) {
    return function() {
      function c(d, e, k) {
        return a.m ? a.m(b, d, e, k) : a.call(null, b, d, e, k);
      }
      function d(c, e) {
        return a.c ? a.c(b, c, e) : a.call(null, b, c, e);
      }
      function e(c) {
        return a.a ? a.a(b, c) : a.call(null, b, c);
      }
      function n() {
        return a.b ? a.b(b) : a.call(null, b);
      }
      var p = null, q = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, k, l) {
          return V.f(a, b, c, e, k, N([l], 0));
        }
        c.o = 3;
        c.h = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a);
        };
        c.f = d;
        return c;
      }(), p = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return n.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, f);
          default:
            return q.f(a, b, f, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      p.o = 3;
      p.h = q.h;
      p.l = n;
      p.b = e;
      p.a = d;
      p.c = c;
      p.f = q.f;
      return p;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var q = null;
      4 < arguments.length && (q = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, q);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = N(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return V.r(a, c, d, e, yd.a(f, b));
        }
        b.o = 0;
        b.h = function(a) {
          a = H(a);
          return g(a);
        };
        b.f = g;
        return b;
      }();
    }
    a.o = 4;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.f(d, g, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 4;
  d.h = e.h;
  d.b = function(a) {
    return a;
  };
  d.a = c;
  d.c = b;
  d.m = a;
  d.f = e.f;
  return d;
}();
function Md(a) {
  this.state = a;
  this.p = 0;
  this.i = 32768;
}
Md.prototype.Oa = function() {
  return this.state;
};
Md.prototype.Bb = function(a) {
  return this.state = a;
};
var Nd = function() {
  function a(a, b, c, d) {
    return new X(null, function() {
      var f = H(b), p = H(c), q = H(d);
      if (f && p && q) {
        var s = P, u;
        u = I(f);
        var v = I(p), z = I(q);
        u = a.c ? a.c(u, v, z) : a.call(null, u, v, z);
        f = s(u, e.m(a, J(f), J(p), J(q)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new X(null, function() {
      var d = H(b), f = H(c);
      if (d && f) {
        var p = P, q;
        q = I(d);
        var s = I(f);
        q = a.a ? a.a(q, s) : a.call(null, q, s);
        d = p(q, e.c(a, J(d), J(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new X(null, function() {
      var c = H(b);
      if (c) {
        if (Gc(c)) {
          for (var d = Eb(c), f = S(d), p = new pd(Array(f), 0), q = 0;;) {
            if (q < f) {
              ud(p, function() {
                var b = A.a(d, q);
                return a.b ? a.b(b) : a.call(null, b);
              }()), q += 1;
            } else {
              break;
            }
          }
          return td(p.X(), e.a(a, Fb(c)));
        }
        return P(function() {
          var b = I(c);
          return a.b ? a.b(b) : a.call(null, b);
        }(), e.a(a, J(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          var f = a.b ? a.b(e) : a.call(null, e);
          return b.a ? b.a(d, f) : b.call(null, d, f);
        }
        function d(a) {
          return b.b ? b.b(a) : b.call(null, a);
        }
        function e() {
          return b.l ? b.l() : b.call(null);
        }
        var f = null, q = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = V.c(a, e, f);
            return b.a ? b.a(c, e) : b.call(null, c, e);
          }
          c.o = 2;
          c.h = function(a) {
            var b = I(a);
            a = M(a);
            var c = I(a);
            a = J(a);
            return d(b, c, a);
          };
          c.f = d;
          return c;
        }(), f = function(a, b, f) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
            default:
              return q.f(a, b, N(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.o = 2;
        f.h = q.h;
        f.l = e;
        f.b = d;
        f.a = c;
        f.f = q.f;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var s = null;
      4 < arguments.length && (s = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, s);
    }
    function b(a, c, d, f, g) {
      var k = function v(a) {
        return new X(null, function() {
          var b = e.a(H, a);
          return Gd(Uc, b) ? P(e.a(I, b), v(e.a(J, b))) : null;
        }, null, null);
      };
      return e.a(function() {
        return function(b) {
          return V.a(a, b);
        };
      }(k), k(uc.f(g, f, N([d, c], 0))));
    }
    a.o = 4;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.f = b;
    return a;
  }(), e = function(e, k, l, m, n) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return b.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, m);
      default:
        return f.f(e, k, l, m, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 4;
  e.h = f.h;
  e.b = d;
  e.a = c;
  e.c = b;
  e.m = a;
  e.f = f.f;
  return e;
}(), Od = function() {
  function a(a, b) {
    return new X(null, function() {
      if (0 < a) {
        var f = H(b);
        return f ? P(I(f), c.a(a - 1, J(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var k = gb(a), l = a.Bb(a.Oa(null) - 1), k = 0 < k ? b.a ? b.a(d, g) : b.call(null, d, g) : d;
            return 0 < l ? k : gc(k) ? k : new fc(k);
          }
          function d(a) {
            return b.b ? b.b(a) : b.call(null, a);
          }
          function l() {
            return b.l ? b.l() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.l = l;
          m.b = d;
          m.a = c;
          return m;
        }();
      }(new Md(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Pd = function() {
  function a(a, b) {
    return new X(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = H(b);
        if (0 < a && c) {
          var d = a - 1, c = J(c);
          a = d;
          b = c;
        } else {
          return c;
        }
      }
    }), null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var k = gb(a);
            a.Bb(a.Oa(null) - 1);
            return 0 < k ? d : b.a ? b.a(d, g) : b.call(null, d, g);
          }
          function d(a) {
            return b.b ? b.b(a) : b.call(null, a);
          }
          function l() {
            return b.l ? b.l() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.l = l;
          m.b = d;
          m.a = c;
          return m;
        }();
      }(new Md(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Qd = function() {
  function a(a, b) {
    return Od.a(a, c.b(b));
  }
  function b(a) {
    return new X(null, function() {
      return P(a.l ? a.l() : a.call(null), c.b(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Sd = function() {
  function a(a) {
    return Kd.a(Nd.b(a), Rd);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      return V.a(yd, V.c(Nd, a, c));
    }
    a.o = 1;
    a.h = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.h = c.h;
  b.b = a;
  b.f = c.f;
  return b;
}(), Td = function() {
  function a(a, b) {
    return new X(null, function() {
      var f = H(b);
      if (f) {
        if (Gc(f)) {
          for (var g = Eb(f), k = S(g), l = new pd(Array(k), 0), m = 0;;) {
            if (m < k) {
              var n;
              n = A.a(g, m);
              n = a.b ? a.b(n) : a.call(null, n);
              t(n) && (n = A.a(g, m), l.add(n));
              m += 1;
            } else {
              break;
            }
          }
          return td(l.X(), c.a(a, Fb(f)));
        }
        g = I(f);
        f = J(f);
        return t(a.b ? a.b(g) : a.call(null, g)) ? P(g, c.a(a, f)) : c.a(a, f);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(f, g) {
          return t(a.b ? a.b(g) : a.call(null, g)) ? b.a ? b.a(f, g) : b.call(null, f, g) : f;
        }
        function g(a) {
          return b.b ? b.b(a) : b.call(null, a);
        }
        function k() {
          return b.l ? b.l() : b.call(null);
        }
        var l = null, l = function(a, b) {
          switch(arguments.length) {
            case 0:
              return k.call(this);
            case 1:
              return g.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        l.l = k;
        l.b = g;
        l.a = c;
        return l;
      }();
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Ud(a) {
  return function c(a) {
    return new X(null, function() {
      return P(a, t(Dc.b ? Dc.b(a) : Dc.call(null, a)) ? Sd.f(c, N([H.b ? H.b(a) : H.call(null, a)], 0)) : null);
    }, null, null);
  }(a);
}
function Vd(a) {
  return Td.a(function(a) {
    return!Dc(a);
  }, J(Ud(a)));
}
var Wd = function() {
  function a(a, b, c) {
    return a && (a.p & 4 || a.Kb) ? rc(Ad(Vc.m(b, Bd, xb(a), c)), Bc(a)) : Vc.m(b, uc, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.p & 4 || a.Kb) ? rc(Ad(Ha.c(yb, xb(a), b)), Bc(a)) : Ha.c(Pa, a, b) : Ha.c(uc, L, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Xd = function() {
  function a(a, b, c, d) {
    return Wd.a(tc, Nd.m(a, b, c, d));
  }
  function b(a, b, c) {
    return Wd.a(tc, Nd.c(a, b, c));
  }
  function c(a, b) {
    return Ad(Ha.c(function(b, c) {
      return Bd.a(b, a.b ? a.b(c) : a.call(null, c));
    }, xb(tc), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var q = null;
      4 < arguments.length && (q = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, q);
    }
    function b(a, c, d, e, f) {
      return Wd.a(tc, V.f(Nd, a, c, d, e, N([f], 0)));
    }
    a.o = 4;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.f(d, g, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 4;
  d.h = e.h;
  d.a = c;
  d.c = b;
  d.m = a;
  d.f = e.f;
  return d;
}(), Zd = function Yd(b, c, d) {
  var e = T.c(c, 0, null), f;
  a: {
    f = 1;
    for (c = H(c);;) {
      if (c && 0 < f) {
        f -= 1, c = M(c);
      } else {
        f = c;
        break a;
      }
    }
    f = void 0;
  }
  return f ? xc.c(b, e, Yd(U.a(b, e), f, d)) : xc.c(b, e, d);
};
function $d(a, b) {
  this.q = a;
  this.d = b;
}
function ae(a) {
  return new $d(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function be(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function de(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = ae(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var fe = function ee(b, c, d, e) {
  var f = new $d(d.q, Ga(d.d)), g = b.g - 1 >>> c & 31;
  5 === c ? f.d[g] = e : (d = d.d[g], b = null != d ? ee(b, c - 5, d, e) : de(null, c - 5, e), f.d[g] = b);
  return f;
};
function ge(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function he(a, b) {
  if (b >= be(a)) {
    return a.U;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.d[b >>> d & 31], d = e
    } else {
      return c.d;
    }
  }
}
function ie(a, b) {
  return 0 <= b && b < a.g ? he(a, b) : ge(b, a.g);
}
var ke = function je(b, c, d, e, f) {
  var g = new $d(d.q, Ga(d.d));
  if (0 === c) {
    g.d[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = je(b, c - 5, d.d[k], e, f);
    g.d[k] = b;
  }
  return g;
};
function le(a, b, c, d, e, f) {
  this.j = a;
  this.$a = b;
  this.d = c;
  this.ya = d;
  this.start = e;
  this.end = f;
}
le.prototype.hb = function() {
  return this.j < this.end;
};
le.prototype.next = function() {
  32 === this.j - this.$a && (this.d = he(this.ya, this.j), this.$a += 32);
  var a = this.d[this.j & 31];
  this.j += 1;
  return a;
};
function Y(a, b, c, d, e, f) {
  this.k = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.U = e;
  this.n = f;
  this.i = 167668511;
  this.p = 8196;
}
h = Y.prototype;
h.toString = function() {
  return Jb(this);
};
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
h.F = function(a, b) {
  return ie(this, b)[b & 31];
};
h.Q = function(a, b, c) {
  return 0 <= b && b < this.g ? he(this, b)[b & 31] : c;
};
h.tb = function(a, b, c) {
  if (0 <= b && b < this.g) {
    return be(this) <= b ? (a = Ga(this.U), a[b & 31] = c, new Y(this.k, this.g, this.shift, this.root, a, null)) : new Y(this.k, this.g, this.shift, ke(this, this.shift, this.root, b, c), this.U, null);
  }
  if (b === this.g) {
    return Pa(this, c);
  }
  throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.g), y("]")].join(""));
};
h.Ra = function() {
  var a = this.g;
  return new le(0, 0, 0 < S(this) ? he(this, 0) : null, this, 0, a);
};
h.G = function() {
  return this.k;
};
h.w = function() {
  return this.g;
};
h.sb = function() {
  return A.a(this, 0);
};
h.yb = function() {
  return A.a(this, 1);
};
h.eb = function() {
  return 0 < this.g ? new oc(this, this.g - 1, null) : null;
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  if (b instanceof Y) {
    if (this.g === S(b)) {
      for (var c = Hb(this), d = Hb(b);;) {
        if (t(c.hb())) {
          var e = c.next(), f = d.next();
          if (!O.a(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return pc(this, b);
  }
};
h.Pa = function() {
  var a = this;
  return new me(a.g, a.shift, function() {
    var b = a.root;
    return ne.b ? ne.b(b) : ne.call(null, b);
  }(), function() {
    var b = a.U;
    return oe.b ? oe.b(b) : oe.call(null, b);
  }());
};
h.L = function() {
  return rc(tc, this.k);
};
h.N = function(a, b) {
  return ic.a(this, b);
};
h.O = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.g) {
      var e = he(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.a ? b.a(d, g) : b.call(null, d, g);
            if (gc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
        e = void 0;
      }
      if (gc(e)) {
        return b = e, hc.b ? hc.b(b) : hc.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.Fa = function(a, b, c) {
  if ("number" === typeof b) {
    return fb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.B = function() {
  if (0 === this.g) {
    return null;
  }
  if (32 >= this.g) {
    return new $b(this.U, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.d[0];
      } else {
        a = a.d;
        break a;
      }
    }
    a = void 0;
  }
  return pe.m ? pe.m(this, a, 0, 0) : pe.call(null, this, a, 0, 0);
};
h.H = function(a, b) {
  return new Y(b, this.g, this.shift, this.root, this.U, this.n);
};
h.J = function(a, b) {
  if (32 > this.g - be(this)) {
    for (var c = this.U.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.U[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Y(this.k, this.g + 1, this.shift, this.root, d, null);
  }
  c = (d = this.g >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = ae(null), d.d[0] = this.root, e = de(null, this.shift, new $d(null, this.U)), d.d[1] = e) : d = fe(this, this.shift, this.root, new $d(null, this.U));
  return new Y(this.k, this.g + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.F(null, c);
  };
  a.c = function(a, c, d) {
    return this.Q(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return this.F(null, a);
};
h.a = function(a, b) {
  return this.Q(null, a, b);
};
var Z = new $d(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), tc = new Y(null, 0, 5, Z, [], 0);
Y.prototype[Ea] = function() {
  return bc(this);
};
function qe(a) {
  return Ab(Ha.c(yb, xb(tc), a));
}
function re(a, b, c, d, e, f) {
  this.$ = a;
  this.va = b;
  this.j = c;
  this.M = d;
  this.k = e;
  this.n = f;
  this.i = 32375020;
  this.p = 1536;
}
h = re.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.k;
};
h.Y = function() {
  if (this.M + 1 < this.va.length) {
    var a;
    a = this.$;
    var b = this.va, c = this.j, d = this.M + 1;
    a = pe.m ? pe.m(a, b, c, d) : pe.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Gb(this);
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(tc, this.k);
};
h.N = function(a, b) {
  var c = this;
  return ic.a(function() {
    var a = c.$, b = c.j + c.M, f = S(c.$);
    return se.c ? se.c(a, b, f) : se.call(null, a, b, f);
  }(), b);
};
h.O = function(a, b, c) {
  var d = this;
  return ic.c(function() {
    var a = d.$, b = d.j + d.M, c = S(d.$);
    return se.c ? se.c(a, b, c) : se.call(null, a, b, c);
  }(), b, c);
};
h.S = function() {
  return this.va[this.M];
};
h.W = function() {
  if (this.M + 1 < this.va.length) {
    var a;
    a = this.$;
    var b = this.va, c = this.j, d = this.M + 1;
    a = pe.m ? pe.m(a, b, c, d) : pe.call(null, a, b, c, d);
    return null == a ? L : a;
  }
  return Fb(this);
};
h.B = function() {
  return this;
};
h.ob = function() {
  return rd.a(this.va, this.M);
};
h.pb = function() {
  var a = this.j + this.va.length;
  if (a < La(this.$)) {
    var b = this.$, c = he(this.$, a);
    return pe.m ? pe.m(b, c, a, 0) : pe.call(null, b, c, a, 0);
  }
  return L;
};
h.H = function(a, b) {
  var c = this.$, d = this.va, e = this.j, f = this.M;
  return pe.r ? pe.r(c, d, e, f, b) : pe.call(null, c, d, e, f, b);
};
h.J = function(a, b) {
  return P(b, this);
};
h.nb = function() {
  var a = this.j + this.va.length;
  if (a < La(this.$)) {
    var b = this.$, c = he(this.$, a);
    return pe.m ? pe.m(b, c, a, 0) : pe.call(null, b, c, a, 0);
  }
  return null;
};
re.prototype[Ea] = function() {
  return bc(this);
};
var pe = function() {
  function a(a, b, c, d, l) {
    return new re(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new re(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new re(a, ie(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.m = b;
  d.r = a;
  return d;
}();
function te(a, b, c, d, e) {
  this.k = a;
  this.ya = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.i = 166617887;
  this.p = 8192;
}
h = te.prototype;
h.toString = function() {
  return Jb(this);
};
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
h.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ge(b, this.end - this.start) : A.a(this.ya, this.start + b);
};
h.Q = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.c(this.ya, this.start + b, c);
};
h.tb = function(a, b, c) {
  var d = this.start + b;
  a = this.k;
  c = xc.c(this.ya, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return ue.r ? ue.r(a, c, b, d, null) : ue.call(null, a, c, b, d, null);
};
h.G = function() {
  return this.k;
};
h.w = function() {
  return this.end - this.start;
};
h.eb = function() {
  return this.start !== this.end ? new oc(this, this.end - this.start - 1, null) : null;
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(tc, this.k);
};
h.N = function(a, b) {
  return ic.a(this, b);
};
h.O = function(a, b, c) {
  return ic.c(this, b, c);
};
h.Fa = function(a, b, c) {
  if ("number" === typeof b) {
    return fb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.B = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : P(A.a(a.ya, e), new X(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.H = function(a, b) {
  var c = this.ya, d = this.start, e = this.end, f = this.n;
  return ue.r ? ue.r(b, c, d, e, f) : ue.call(null, b, c, d, e, f);
};
h.J = function(a, b) {
  var c = this.k, d = fb(this.ya, this.end, b), e = this.start, f = this.end + 1;
  return ue.r ? ue.r(c, d, e, f, null) : ue.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.F(null, c);
  };
  a.c = function(a, c, d) {
    return this.Q(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return this.F(null, a);
};
h.a = function(a, b) {
  return this.Q(null, a, b);
};
te.prototype[Ea] = function() {
  return bc(this);
};
function ue(a, b, c, d, e) {
  for (;;) {
    if (b instanceof te) {
      c = b.start + c, d = b.start + d, b = b.ya;
    } else {
      var f = S(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new te(a, b, c, d, e);
    }
  }
}
var se = function() {
  function a(a, b, c) {
    return ue(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, S(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function ve(a, b) {
  return a === b.q ? b : new $d(a, Ga(b.d));
}
function ne(a) {
  return new $d({}, Ga(a.d));
}
function oe(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Jc(a, 0, b, 0, a.length);
  return b;
}
var xe = function we(b, c, d, e) {
  d = ve(b.root.q, d);
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.d[f];
    b = null != g ? we(b, c - 5, g, e) : de(b.root.q, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function me(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.U = d;
  this.i = 275;
  this.p = 88;
}
h = me.prototype;
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.v(null, c);
  };
  a.c = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return this.v(null, a);
};
h.a = function(a, b) {
  return this.t(null, a, b);
};
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
h.F = function(a, b) {
  if (this.root.q) {
    return ie(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.Q = function(a, b, c) {
  return 0 <= b && b < this.g ? A.a(this, b) : c;
};
h.w = function() {
  if (this.root.q) {
    return this.g;
  }
  throw Error("count after persistent!");
};
h.Ab = function(a, b, c) {
  var d = this;
  if (d.root.q) {
    if (0 <= b && b < d.g) {
      return be(this) <= b ? d.U[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ve(d.root.q, k);
          if (0 === a) {
            l.d[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.d[m]);
            l.d[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.g) {
      return yb(this, c);
    }
    throw Error([y("Index "), y(b), y(" out of bounds for TransientVector of length"), y(d.g)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.Ua = function(a, b, c) {
  if ("number" === typeof b) {
    return Cb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.Va = function(a, b) {
  if (this.root.q) {
    if (32 > this.g - be(this)) {
      this.U[this.g & 31] = b;
    } else {
      var c = new $d(this.root.q, this.U), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.U = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = de(this.root.q, this.shift, c);
        this.root = new $d(this.root.q, d);
        this.shift = e;
      } else {
        this.root = xe(this, this.shift, this.root, c);
      }
    }
    this.g += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Wa = function() {
  if (this.root.q) {
    this.root.q = null;
    var a = this.g - be(this), b = Array(a);
    Jc(this.U, 0, b, 0, a);
    return new Y(null, this.g, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function ye() {
  this.p = 0;
  this.i = 2097152;
}
ye.prototype.C = function() {
  return!1;
};
var ze = new ye;
function Ae(a, b) {
  return Mc(Ec(b) ? S(a) === S(b) ? Gd(Uc, Nd.a(function(a) {
    return O.a(U.c(b, I(a), ze), sc(a));
  }, a)) : null : null);
}
function Be(a, b) {
  var c = a.d;
  if (b instanceof W) {
    a: {
      for (var d = c.length, e = b.ba, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof W && e === g.ba) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = ba(b), t(t(d) ? d : "number" === typeof b)) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          e += 2;
        }
        c = void 0;
      }
    } else {
      if (null == b) {
        a: {
          d = c.length;
          for (e = 0;;) {
            if (d <= e) {
              c = -1;
              break a;
            }
            if (null == c[e]) {
              c = e;
              break a;
            }
            e += 2;
          }
          c = void 0;
        }
      } else {
        a: {
          d = c.length;
          for (e = 0;;) {
            if (d <= e) {
              c = -1;
              break a;
            }
            if (O.a(b, c[e])) {
              c = e;
              break a;
            }
            e += 2;
          }
          c = void 0;
        }
      }
    }
  }
  return c;
}
function Ce(a, b, c) {
  this.d = a;
  this.j = b;
  this.ga = c;
  this.p = 0;
  this.i = 32374990;
}
h = Ce.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.ga;
};
h.Y = function() {
  return this.j < this.d.length - 2 ? new Ce(this.d, this.j + 2, this.ga) : null;
};
h.w = function() {
  return(this.d.length - this.j) / 2;
};
h.D = function() {
  return dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(L, this.ga);
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.S = function() {
  return new Y(null, 2, 5, Z, [this.d[this.j], this.d[this.j + 1]], null);
};
h.W = function() {
  return this.j < this.d.length - 2 ? new Ce(this.d, this.j + 2, this.ga) : L;
};
h.B = function() {
  return this;
};
h.H = function(a, b) {
  return new Ce(this.d, this.j, b);
};
h.J = function(a, b) {
  return P(b, this);
};
Ce.prototype[Ea] = function() {
  return bc(this);
};
function De(a, b, c) {
  this.d = a;
  this.j = b;
  this.g = c;
}
De.prototype.hb = function() {
  return this.j < this.g;
};
De.prototype.next = function() {
  var a = new Y(null, 2, 5, Z, [this.d[this.j], this.d[this.j + 1]], null);
  this.j += 2;
  return a;
};
function Kb(a, b, c, d) {
  this.k = a;
  this.g = b;
  this.d = c;
  this.n = d;
  this.i = 16647951;
  this.p = 8196;
}
h = Kb.prototype;
h.toString = function() {
  return Jb(this);
};
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  a = Be(this, b);
  return-1 === a ? c : this.d[a + 1];
};
h.Ra = function() {
  return new De(this.d, 0, 2 * this.g);
};
h.G = function() {
  return this.k;
};
h.w = function() {
  return this.g;
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ec(this);
};
h.C = function(a, b) {
  if (b && (b.i & 1024 || b.Nb)) {
    var c = this.d.length;
    if (this.g === b.w(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.t(null, this.d[d], Lc);
          if (e !== Lc) {
            if (O.a(this.d[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return Ae(this, b);
  }
};
h.Pa = function() {
  return new Ee({}, this.d.length, Ga(this.d));
};
h.L = function() {
  return kb(Fe, this.k);
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.Sa = function(a, b) {
  if (0 <= Be(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return Ma(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new Kb(this.k, this.g - 1, d, null);
      }
      O.a(b, this.d[e]) || (d[f] = this.d[e], d[f + 1] = this.d[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Fa = function(a, b, c) {
  a = Be(this, b);
  if (-1 === a) {
    if (this.g < Ge) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Kb(this.k, this.g + 1, e, null);
    }
    return kb(Xa(Wd.a(He, this), b, c), this.k);
  }
  if (c === this.d[a + 1]) {
    return this;
  }
  b = Ga(this.d);
  b[a + 1] = c;
  return new Kb(this.k, this.g, b, null);
};
h.mb = function(a, b) {
  return-1 !== Be(this, b);
};
h.B = function() {
  var a = this.d;
  return 0 <= a.length - 2 ? new Ce(a, 0, null) : null;
};
h.H = function(a, b) {
  return new Kb(b, this.g, this.d, this.n);
};
h.J = function(a, b) {
  if (Fc(b)) {
    return Xa(this, A.a(b, 0), A.a(b, 1));
  }
  for (var c = this, d = H(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (Fc(e)) {
      c = Xa(c, A.a(e, 0), A.a(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.v(null, c);
  };
  a.c = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return this.v(null, a);
};
h.a = function(a, b) {
  return this.t(null, a, b);
};
var Fe = new Kb(null, 0, [], null), Ge = 8;
function Ie(a) {
  for (var b = a.length, c = 0, d = xb(Fe);;) {
    if (c < b) {
      var e = c + 2, d = Bb(d, a[c], a[c + 1]), c = e
    } else {
      return Ab(d);
    }
  }
}
Kb.prototype[Ea] = function() {
  return bc(this);
};
function Ee(a, b, c) {
  this.Ia = a;
  this.Ma = b;
  this.d = c;
  this.p = 56;
  this.i = 258;
}
h = Ee.prototype;
h.Ua = function(a, b, c) {
  var d = this;
  if (t(d.Ia)) {
    a = Be(this, b);
    if (-1 === a) {
      return d.Ma + 2 <= 2 * Ge ? (d.Ma += 2, d.d.push(b), d.d.push(c), this) : Cd.c(function() {
        var a = d.Ma, b = d.d;
        return Je.a ? Je.a(a, b) : Je.call(null, a, b);
      }(), b, c);
    }
    c !== d.d[a + 1] && (d.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.Va = function(a, b) {
  if (t(this.Ia)) {
    if (b ? b.i & 2048 || b.Ob || (b.i ? 0 : w($a, b)) : w($a, b)) {
      return Bb(this, ed.b ? ed.b(b) : ed.call(null, b), fd.b ? fd.b(b) : fd.call(null, b));
    }
    for (var c = H(b), d = this;;) {
      var e = I(c);
      if (t(e)) {
        var f = e, c = M(c), d = Bb(d, function() {
          var a = f;
          return ed.b ? ed.b(a) : ed.call(null, a);
        }(), function() {
          var a = f;
          return fd.b ? fd.b(a) : fd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Wa = function() {
  if (t(this.Ia)) {
    return this.Ia = !1, new Kb(null, $c(this.Ma), this.d, null);
  }
  throw Error("persistent! called twice");
};
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  if (t(this.Ia)) {
    return a = Be(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.w = function() {
  if (t(this.Ia)) {
    return $c(this.Ma);
  }
  throw Error("count after persistent!");
};
function Je(a, b) {
  for (var c = xb(He), d = 0;;) {
    if (d < a) {
      c = Cd.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ke() {
  this.ca = !1;
}
function Le(a, b) {
  return a === b ? !0 : ld(a, b) ? !0 : O.a(a, b);
}
var Me = function() {
  function a(a, b, c, g, k) {
    a = Ga(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = Ga(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.r = a;
  return c;
}();
function Ne(a, b) {
  var c = Array(a.length - 2);
  Jc(a, 0, c, 0, 2 * b);
  Jc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var Oe = function() {
  function a(a, b, c, g, k, l) {
    a = a.Ja(b);
    a.d[c] = g;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Ja(b);
    a.d[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = b;
  c.P = a;
  return c;
}();
function Pe(a, b, c) {
  this.q = a;
  this.u = b;
  this.d = c;
}
h = Pe.prototype;
h.Ja = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = cd(this.u), c = Array(0 > b ? 4 : 2 * (b + 1));
  Jc(this.d, 0, c, 0, 2 * b);
  return new Pe(a, this.u, c);
};
h.Xa = function() {
  var a = this.d;
  return Qe.b ? Qe.b(a) : Qe.call(null, a);
};
h.za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.u & e)) {
    return d;
  }
  var f = cd(this.u & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.za(a + 5, b, c, d) : Le(c, e) ? f : d;
};
h.ea = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = cd(this.u & g - 1);
  if (0 === (this.u & g)) {
    var l = cd(this.u);
    if (2 * l < this.d.length) {
      var m = this.Ja(a), n = m.d;
      f.ca = !0;
      Kc(n, 2 * k, n, 2 * (k + 1), 2 * (l - k));
      n[2 * k] = d;
      n[2 * k + 1] = e;
      m.u |= g;
      return m;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = Re.ea(a, b + 5, c, d, e, f);
      for (m = k = 0;;) {
        if (32 > k) {
          0 !== (this.u >>> k & 1) && (g[k] = null != this.d[m] ? Re.ea(a, b + 5, Yb(this.d[m]), this.d[m], this.d[m + 1], f) : this.d[m + 1], m += 2), k += 1;
        } else {
          break;
        }
      }
      return new Se(a, l + 1, g);
    }
    n = Array(2 * (l + 4));
    Jc(this.d, 0, n, 0, 2 * k);
    n[2 * k] = d;
    n[2 * k + 1] = e;
    Jc(this.d, 2 * k, n, 2 * (k + 1), 2 * (l - k));
    f.ca = !0;
    m = this.Ja(a);
    m.d = n;
    m.u |= g;
    return m;
  }
  var p = this.d[2 * k], q = this.d[2 * k + 1];
  if (null == p) {
    return l = q.ea(a, b + 5, c, d, e, f), l === q ? this : Oe.m(this, a, 2 * k + 1, l);
  }
  if (Le(d, p)) {
    return e === q ? this : Oe.m(this, a, 2 * k + 1, e);
  }
  f.ca = !0;
  return Oe.P(this, a, 2 * k, null, 2 * k + 1, function() {
    var f = b + 5;
    return Te.aa ? Te.aa(a, f, p, q, c, d, e) : Te.call(null, a, f, p, q, c, d, e);
  }());
};
h.da = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = cd(this.u & f - 1);
  if (0 === (this.u & f)) {
    var k = cd(this.u);
    if (16 <= k) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = Re.da(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.u >>> g & 1) && (f[g] = null != this.d[l] ? Re.da(a + 5, Yb(this.d[l]), this.d[l], this.d[l + 1], e) : this.d[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new Se(null, k + 1, f);
    }
    l = Array(2 * (k + 1));
    Jc(this.d, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    Jc(this.d, 2 * g, l, 2 * (g + 1), 2 * (k - g));
    e.ca = !0;
    return new Pe(null, this.u | f, l);
  }
  var m = this.d[2 * g], n = this.d[2 * g + 1];
  if (null == m) {
    return k = n.da(a + 5, b, c, d, e), k === n ? this : new Pe(null, this.u, Me.c(this.d, 2 * g + 1, k));
  }
  if (Le(c, m)) {
    return d === n ? this : new Pe(null, this.u, Me.c(this.d, 2 * g + 1, d));
  }
  e.ca = !0;
  return new Pe(null, this.u, Me.r(this.d, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return Te.P ? Te.P(e, m, n, b, c, d) : Te.call(null, e, m, n, b, c, d);
  }()));
};
h.Ya = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.u & d)) {
    return this;
  }
  var e = cd(this.u & d - 1), f = this.d[2 * e], g = this.d[2 * e + 1];
  return null == f ? (a = g.Ya(a + 5, b, c), a === g ? this : null != a ? new Pe(null, this.u, Me.c(this.d, 2 * e + 1, a)) : this.u === d ? null : new Pe(null, this.u ^ d, Ne(this.d, e))) : Le(c, f) ? new Pe(null, this.u ^ d, Ne(this.d, e)) : this;
};
var Re = new Pe(null, 0, []);
function Se(a, b, c) {
  this.q = a;
  this.g = b;
  this.d = c;
}
h = Se.prototype;
h.Ja = function(a) {
  return a === this.q ? this : new Se(a, this.g, Ga(this.d));
};
h.Xa = function() {
  var a = this.d;
  return Ue.b ? Ue.b(a) : Ue.call(null, a);
};
h.za = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.za(a + 5, b, c, d) : d;
};
h.ea = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.d[g];
  if (null == k) {
    return a = Oe.m(this, a, g, Re.ea(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = k.ea(a, b + 5, c, d, e, f);
  return b === k ? this : Oe.m(this, a, g, b);
};
h.da = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.d[f];
  if (null == g) {
    return new Se(null, this.g + 1, Me.c(this.d, f, Re.da(a + 5, b, c, d, e)));
  }
  a = g.da(a + 5, b, c, d, e);
  return a === g ? this : new Se(null, this.g, Me.c(this.d, f, a));
};
h.Ya = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.Ya(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.g) {
          a: {
            e = this.d;
            a = e.length;
            b = Array(2 * (this.g - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Pe(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Se(null, this.g - 1, Me.c(this.d, d, a));
        }
      } else {
        d = new Se(null, this.g, Me.c(this.d, d, a));
      }
    }
    return d;
  }
  return this;
};
function Ve(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Le(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function We(a, b, c, d) {
  this.q = a;
  this.ua = b;
  this.g = c;
  this.d = d;
}
h = We.prototype;
h.Ja = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  Jc(this.d, 0, b, 0, 2 * this.g);
  return new We(a, this.ua, this.g, b);
};
h.Xa = function() {
  var a = this.d;
  return Qe.b ? Qe.b(a) : Qe.call(null, a);
};
h.za = function(a, b, c, d) {
  a = Ve(this.d, this.g, c);
  return 0 > a ? d : Le(c, this.d[a]) ? this.d[a + 1] : d;
};
h.ea = function(a, b, c, d, e, f) {
  if (c === this.ua) {
    b = Ve(this.d, this.g, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.g) {
        return a = Oe.P(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.ca = !0, a.g += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      Jc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ca = !0;
      f = this.g + 1;
      a === this.q ? (this.d = b, this.g = f, a = this) : a = new We(this.q, this.ua, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : Oe.m(this, a, b + 1, e);
  }
  return(new Pe(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).ea(a, b, c, d, e, f);
};
h.da = function(a, b, c, d, e) {
  return b === this.ua ? (a = Ve(this.d, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), Jc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ca = !0, new We(null, this.ua, this.g + 1, b)) : O.a(this.d[a], d) ? this : new We(null, this.ua, this.g, Me.c(this.d, a + 1, d))) : (new Pe(null, 1 << (this.ua >>> a & 31), [null, this])).da(a, b, c, d, e);
};
h.Ya = function(a, b, c) {
  a = Ve(this.d, this.g, c);
  return-1 === a ? this : 1 === this.g ? null : new We(null, this.ua, this.g - 1, Ne(this.d, $c(a)));
};
var Te = function() {
  function a(a, b, c, g, k, l, m) {
    var n = Yb(c);
    if (n === k) {
      return new We(null, n, 2, [c, g, l, m]);
    }
    var p = new Ke;
    return Re.ea(a, b, n, c, g, p).ea(a, b, k, l, m, p);
  }
  function b(a, b, c, g, k, l) {
    var m = Yb(b);
    if (m === g) {
      return new We(null, m, 2, [b, c, k, l]);
    }
    var n = new Ke;
    return Re.da(a, m, b, c, n).da(a, g, k, l, n);
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.P = b;
  c.aa = a;
  return c;
}();
function Xe(a, b, c, d, e) {
  this.k = a;
  this.R = b;
  this.j = c;
  this.s = d;
  this.n = e;
  this.p = 0;
  this.i = 32374860;
}
h = Xe.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.k;
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(L, this.k);
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.S = function() {
  return null == this.s ? new Y(null, 2, 5, Z, [this.R[this.j], this.R[this.j + 1]], null) : I(this.s);
};
h.W = function() {
  if (null == this.s) {
    var a = this.R, b = this.j + 2;
    return Qe.c ? Qe.c(a, b, null) : Qe.call(null, a, b, null);
  }
  var a = this.R, b = this.j, c = M(this.s);
  return Qe.c ? Qe.c(a, b, c) : Qe.call(null, a, b, c);
};
h.B = function() {
  return this;
};
h.H = function(a, b) {
  return new Xe(b, this.R, this.j, this.s, this.n);
};
h.J = function(a, b) {
  return P(b, this);
};
Xe.prototype[Ea] = function() {
  return bc(this);
};
var Qe = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Xe(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (t(g) && (g = g.Xa(), t(g))) {
            return new Xe(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Xe(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Ye(a, b, c, d, e) {
  this.k = a;
  this.R = b;
  this.j = c;
  this.s = d;
  this.n = e;
  this.p = 0;
  this.i = 32374860;
}
h = Ye.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.k;
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(L, this.k);
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.S = function() {
  return I(this.s);
};
h.W = function() {
  var a = this.R, b = this.j, c = M(this.s);
  return Ue.m ? Ue.m(null, a, b, c) : Ue.call(null, null, a, b, c);
};
h.B = function() {
  return this;
};
h.H = function(a, b) {
  return new Ye(b, this.R, this.j, this.s, this.n);
};
h.J = function(a, b) {
  return P(b, this);
};
Ye.prototype[Ea] = function() {
  return bc(this);
};
var Ue = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (t(k) && (k = k.Xa(), t(k))) {
            return new Ye(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ye(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.m(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.m = a;
  return c;
}();
function Ze(a, b, c, d, e, f) {
  this.k = a;
  this.g = b;
  this.root = c;
  this.T = d;
  this.Z = e;
  this.n = f;
  this.i = 16123663;
  this.p = 8196;
}
h = Ze.prototype;
h.toString = function() {
  return Jb(this);
};
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  return null == b ? this.T ? this.Z : c : null == this.root ? c : this.root.za(0, Yb(b), b, c);
};
h.G = function() {
  return this.k;
};
h.w = function() {
  return this.g;
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ec(this);
};
h.C = function(a, b) {
  return Ae(this, b);
};
h.Pa = function() {
  return new $e({}, this.root, this.g, this.T, this.Z);
};
h.L = function() {
  return kb(He, this.k);
};
h.Sa = function(a, b) {
  if (null == b) {
    return this.T ? new Ze(this.k, this.g - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ya(0, Yb(b), b);
  return c === this.root ? this : new Ze(this.k, this.g - 1, c, this.T, this.Z, null);
};
h.Fa = function(a, b, c) {
  if (null == b) {
    return this.T && c === this.Z ? this : new Ze(this.k, this.T ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new Ke;
  b = (null == this.root ? Re : this.root).da(0, Yb(b), b, c, a);
  return b === this.root ? this : new Ze(this.k, a.ca ? this.g + 1 : this.g, b, this.T, this.Z, null);
};
h.mb = function(a, b) {
  return null == b ? this.T : null == this.root ? !1 : this.root.za(0, Yb(b), b, Lc) !== Lc;
};
h.B = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.Xa() : null;
    return this.T ? P(new Y(null, 2, 5, Z, [null, this.Z], null), a) : a;
  }
  return null;
};
h.H = function(a, b) {
  return new Ze(b, this.g, this.root, this.T, this.Z, this.n);
};
h.J = function(a, b) {
  if (Fc(b)) {
    return Xa(this, A.a(b, 0), A.a(b, 1));
  }
  for (var c = this, d = H(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (Fc(e)) {
      c = Xa(c, A.a(e, 0), A.a(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.v(null, c);
  };
  a.c = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return this.v(null, a);
};
h.a = function(a, b) {
  return this.t(null, a, b);
};
var He = new Ze(null, 0, null, !1, null, 0);
function wc(a, b) {
  for (var c = a.length, d = 0, e = xb(He);;) {
    if (d < c) {
      var f = d + 1, e = e.Ua(null, a[d], b[d]), d = f
    } else {
      return Ab(e);
    }
  }
}
Ze.prototype[Ea] = function() {
  return bc(this);
};
function $e(a, b, c, d, e) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.Z = e;
  this.p = 56;
  this.i = 258;
}
h = $e.prototype;
h.Ua = function(a, b, c) {
  return af(this, b, c);
};
h.Va = function(a, b) {
  return bf(this, b);
};
h.Wa = function() {
  var a;
  if (this.q) {
    this.q = null, a = new Ze(null, this.count, this.root, this.T, this.Z, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.v = function(a, b) {
  return null == b ? this.T ? this.Z : null : null == this.root ? null : this.root.za(0, Yb(b), b);
};
h.t = function(a, b, c) {
  return null == b ? this.T ? this.Z : c : null == this.root ? c : this.root.za(0, Yb(b), b, c);
};
h.w = function() {
  if (this.q) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function bf(a, b) {
  if (a.q) {
    if (b ? b.i & 2048 || b.Ob || (b.i ? 0 : w($a, b)) : w($a, b)) {
      return af(a, ed.b ? ed.b(b) : ed.call(null, b), fd.b ? fd.b(b) : fd.call(null, b));
    }
    for (var c = H(b), d = a;;) {
      var e = I(c);
      if (t(e)) {
        var f = e, c = M(c), d = af(d, function() {
          var a = f;
          return ed.b ? ed.b(a) : ed.call(null, a);
        }(), function() {
          var a = f;
          return fd.b ? fd.b(a) : fd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function af(a, b, c) {
  if (a.q) {
    if (null == b) {
      a.Z !== c && (a.Z = c), a.T || (a.count += 1, a.T = !0);
    } else {
      var d = new Ke;
      b = (null == a.root ? Re : a.root).ea(a.q, 0, Yb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function cf(a, b) {
  this.Aa = a;
  this.ga = b;
  this.p = 0;
  this.i = 32374988;
}
h = cf.prototype;
h.toString = function() {
  return Jb(this);
};
h.G = function() {
  return this.ga;
};
h.Y = function() {
  var a = this.Aa, a = (a ? a.i & 128 || a.zb || (a.i ? 0 : w(Sa, a)) : w(Sa, a)) ? this.Aa.Y(null) : M(this.Aa);
  return null == a ? null : new cf(a, this.ga);
};
h.D = function() {
  return dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(L, this.ga);
};
h.N = function(a, b) {
  return R.a(b, this);
};
h.O = function(a, b, c) {
  return R.c(b, c, this);
};
h.S = function() {
  return this.Aa.S(null).sb();
};
h.W = function() {
  var a = this.Aa, a = (a ? a.i & 128 || a.zb || (a.i ? 0 : w(Sa, a)) : w(Sa, a)) ? this.Aa.Y(null) : M(this.Aa);
  return null != a ? new cf(a, this.ga) : L;
};
h.B = function() {
  return this;
};
h.H = function(a, b) {
  return new cf(this.Aa, b);
};
h.J = function(a, b) {
  return P(b, this);
};
cf.prototype[Ea] = function() {
  return bc(this);
};
function ed(a) {
  return ab(a);
}
function fd(a) {
  return cb(a);
}
function df(a, b, c) {
  this.k = a;
  this.La = b;
  this.n = c;
  this.i = 15077647;
  this.p = 8196;
}
h = df.prototype;
h.toString = function() {
  return Jb(this);
};
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  return Wa(this.La, b) ? b : c;
};
h.G = function() {
  return this.k;
};
h.w = function() {
  return La(this.La);
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = ec(this);
};
h.C = function(a, b) {
  return Cc(b) && S(this) === S(b) && Gd(function(a) {
    return function(b) {
      return Nc(a, b);
    };
  }(this), b);
};
h.Pa = function() {
  return new ef(xb(this.La));
};
h.L = function() {
  return rc(ff, this.k);
};
h.B = function() {
  var a = H(this.La);
  return a ? new cf(a, null) : null;
};
h.H = function(a, b) {
  return new df(b, this.La, this.n);
};
h.J = function(a, b) {
  return new df(this.k, xc.c(this.La, b, null), null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.v(null, c);
  };
  a.c = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return this.v(null, a);
};
h.a = function(a, b) {
  return this.t(null, a, b);
};
var ff = new df(null, Fe, 0);
df.prototype[Ea] = function() {
  return bc(this);
};
function ef(a) {
  this.xa = a;
  this.i = 259;
  this.p = 136;
}
h = ef.prototype;
h.call = function() {
  function a(a, b, c) {
    return F.c(this.xa, b, Lc) === Lc ? c : b;
  }
  function b(a, b) {
    return F.c(this.xa, b, Lc) === Lc ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return F.c(this.xa, a, Lc) === Lc ? null : a;
};
h.a = function(a, b) {
  return F.c(this.xa, a, Lc) === Lc ? b : a;
};
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  return F.c(this.xa, b, Lc) === Lc ? c : b;
};
h.w = function() {
  return S(this.xa);
};
h.Va = function(a, b) {
  this.xa = Cd.c(this.xa, b, null);
  return this;
};
h.Wa = function() {
  return new df(null, Ab(this.xa), null);
};
function gf(a) {
  if (a && (a.p & 4096 || a.Qb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([y("Doesn't support name: "), y(a)].join(""));
}
function hf(a) {
  this.d = a;
}
hf.prototype.add = function(a) {
  return this.d.push(a);
};
hf.prototype.size = function() {
  return this.d.length;
};
hf.prototype.clear = function() {
  return this.d = [];
};
var jf = function() {
  function a(a, b, c) {
    return new X(null, function() {
      var k = H(c);
      return k ? P(Od.a(a, k), d.c(a, b, Pd.a(b, k))) : null;
    }, null, null);
  }
  function b(a, b) {
    return d.c(a, a, b);
  }
  function c(a) {
    return function(b) {
      return function(c) {
        return function() {
          function d(k, l) {
            c.add(l);
            if (a === c.size()) {
              var m = qe(c.d);
              c.clear();
              return b.a ? b.a(k, m) : b.call(null, k, m);
            }
            return k;
          }
          function l(a) {
            if (!t(0 === c.d.length)) {
              var d = qe(c.d);
              c.clear();
              a = b.a ? b.a(a, d) : b.call(null, a, d);
              a = gc(a) ? hc.b ? hc.b(a) : hc.call(null, a) : a;
            }
            return b.b ? b.b(a) : b.call(null, a);
          }
          function m() {
            return b.l ? b.l() : b.call(null);
          }
          var n = null, n = function(a, b) {
            switch(arguments.length) {
              case 0:
                return m.call(this);
              case 1:
                return l.call(this, a);
              case 2:
                return d.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          n.l = m;
          n.b = l;
          n.a = d;
          return n;
        }();
      }(new hf([]));
    };
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function kf(a, b, c) {
  this.j = a;
  this.end = b;
  this.step = c;
}
kf.prototype.hb = function() {
  return 0 < this.step ? this.j < this.end : this.j > this.end;
};
kf.prototype.next = function() {
  var a = this.j;
  this.j += this.step;
  return a;
};
function lf(a, b, c, d, e) {
  this.k = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.n = e;
  this.i = 32375006;
  this.p = 8192;
}
h = lf.prototype;
h.toString = function() {
  return Jb(this);
};
h.F = function(a, b) {
  if (b < La(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.Q = function(a, b, c) {
  return b < La(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Ra = function() {
  return new kf(this.start, this.end, this.step);
};
h.G = function() {
  return this.k;
};
h.Y = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new lf(this.k, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new lf(this.k, this.start + this.step, this.end, this.step, null) : null;
};
h.w = function() {
  if (Aa(rb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dc(this);
};
h.C = function(a, b) {
  return pc(this, b);
};
h.L = function() {
  return rc(L, this.k);
};
h.N = function(a, b) {
  return ic.a(this, b);
};
h.O = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      if (gc(c)) {
        return b = c, hc.b ? hc.b(b) : hc.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
h.S = function() {
  return null == rb(this) ? null : this.start;
};
h.W = function() {
  return null != rb(this) ? new lf(this.k, this.start + this.step, this.end, this.step, null) : L;
};
h.B = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.H = function(a, b) {
  return new lf(b, this.start, this.end, this.step, this.n);
};
h.J = function(a, b) {
  return P(b, this);
};
lf.prototype[Ea] = function() {
  return bc(this);
};
var mf = function() {
  function a(a, b, c) {
    return new lf(null, a, b, c, null);
  }
  function b(a, b) {
    return e.c(a, b, 1);
  }
  function c(a) {
    return e.c(0, a, 1);
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e;
}(), nf = function() {
  function a(a, b) {
    for (;;) {
      if (H(b) && 0 < a) {
        var c = a - 1, g = M(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (H(a)) {
        a = M(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), of = function() {
  function a(a, b) {
    nf.a(a, b);
    return b;
  }
  function b(a) {
    nf.b(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function pf(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return null == c ? null : 1 === S(c) ? I(c) : qe(c);
  }
  throw new TypeError("re-find must match against a string.");
}
function rf(a, b, c, d, e, f, g) {
  var k = xa;
  try {
    xa = null == xa ? null : xa - 1;
    if (null != xa && 0 > xa) {
      return G(a, "#");
    }
    G(a, c);
    if (H(g)) {
      var l = I(g);
      b.c ? b.c(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = M(g), n = Pb.b(f) - 1;;) {
      if (!m || null != n && 0 === n) {
        H(m) && 0 === n && (G(a, d), G(a, "..."));
        break;
      } else {
        G(a, d);
        var p = I(m);
        c = a;
        g = f;
        b.c ? b.c(p, c, g) : b.call(null, p, c, g);
        var q = M(m);
        c = n - 1;
        m = q;
        n = c;
      }
    }
    return G(a, e);
  } finally {
    xa = k;
  }
}
var sf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = H(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.F(null, k);
        G(a, l);
        k += 1;
      } else {
        if (e = H(e)) {
          f = e, Gc(f) ? (e = Eb(f), g = Fb(f), f = e, l = S(e), e = g, g = l) : (l = I(f), G(a, l), e = M(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.o = 1;
  a.h = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}(), tf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function uf(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return tf[a];
  })), y('"')].join("");
}
var xf = function vf(b, c, d) {
  if (null == b) {
    return G(c, "nil");
  }
  if (void 0 === b) {
    return G(c, "#\x3cundefined\x3e");
  }
  t(function() {
    var c = U.a(d, Nb);
    return t(c) ? (c = b ? b.i & 131072 || b.Pb ? !0 : b.i ? !1 : w(hb, b) : w(hb, b)) ? Bc(b) : c : c;
  }()) && (G(c, "^"), vf(Bc(b), c, d), G(c, " "));
  if (null == b) {
    return G(c, "nil");
  }
  if (b.Eb) {
    return b.Sb(c);
  }
  if (b && (b.i & 2147483648 || b.K)) {
    return b.A(null, c, d);
  }
  if (Ba(b) === Boolean || "number" === typeof b) {
    return G(c, "" + y(b));
  }
  if (null != b && b.constructor === Object) {
    G(c, "#js ");
    var e = Nd.a(function(c) {
      return new Y(null, 2, 5, Z, [md.b(c), b[c]], null);
    }, Hc(b));
    return wf.m ? wf.m(e, vf, c, d) : wf.call(null, e, vf, c, d);
  }
  return b instanceof Array ? rf(c, vf, "#js [", " ", "]", d, b) : t(ba(b)) ? t(Mb.b(d)) ? G(c, uf(b)) : G(c, b) : zc(b) ? sf.f(c, N(["#\x3c", "" + y(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + y(b);;) {
      if (S(d) < c) {
        d = [y("0"), y(d)].join("");
      } else {
        return d;
      }
    }
  }, sf.f(c, N(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? sf.f(c, N(['#"', b.source, '"'], 0)) : (b ? b.i & 2147483648 || b.K || (b.i ? 0 : w(vb, b)) : w(vb, b)) ? wb(b, c, d) : sf.f(c, N(["#\x3c", "" + y(b), "\x3e"], 0));
};
function wf(a, b, c, d) {
  return rf(c, function(a, c, d) {
    var k = ab(a);
    b.c ? b.c(k, c, d) : b.call(null, k, c, d);
    G(c, " ");
    a = cb(a);
    return b.c ? b.c(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, H(a));
}
Md.prototype.K = !0;
Md.prototype.A = function(a, b, c) {
  G(b, "#\x3cVolatile: ");
  xf(this.state, b, c);
  return G(b, "\x3e");
};
$b.prototype.K = !0;
$b.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
X.prototype.K = !0;
X.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Xe.prototype.K = !0;
Xe.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Ce.prototype.K = !0;
Ce.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
re.prototype.K = !0;
re.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
jd.prototype.K = !0;
jd.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
oc.prototype.K = !0;
oc.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Ze.prototype.K = !0;
Ze.prototype.A = function(a, b, c) {
  return wf(this, xf, b, c);
};
Ye.prototype.K = !0;
Ye.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
te.prototype.K = !0;
te.prototype.A = function(a, b, c) {
  return rf(b, xf, "[", " ", "]", c, this);
};
df.prototype.K = !0;
df.prototype.A = function(a, b, c) {
  return rf(b, xf, "#{", " ", "}", c, this);
};
sd.prototype.K = !0;
sd.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Y.prototype.K = !0;
Y.prototype.A = function(a, b, c) {
  return rf(b, xf, "[", " ", "]", c, this);
};
hd.prototype.K = !0;
hd.prototype.A = function(a, b) {
  return G(b, "()");
};
Kb.prototype.K = !0;
Kb.prototype.A = function(a, b, c) {
  return wf(this, xf, b, c);
};
lf.prototype.K = !0;
lf.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
cf.prototype.K = !0;
cf.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
gd.prototype.K = !0;
gd.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Y.prototype.qb = !0;
Y.prototype.rb = function(a, b) {
  return Pc.a(this, b);
};
te.prototype.qb = !0;
te.prototype.rb = function(a, b) {
  return Pc.a(this, b);
};
W.prototype.qb = !0;
W.prototype.rb = function(a, b) {
  return kd(this, b);
};
function yf(a) {
  return function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return gc(d) ? new fc(d) : d;
  };
}
function Rd(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return Ha.c(b, a, c);
      }
      function d(b) {
        return a.b ? a.b(b) : a.call(null, b);
      }
      function e() {
        return a.l ? a.l() : a.call(null);
      }
      var f = null, f = function(a, b) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.l = e;
      f.b = d;
      f.a = c;
      return f;
    }();
  }(yf(a));
}
ad = function() {
  function a(a) {
    return(Math.random.l ? Math.random.l() : Math.random.call(null)) * a;
  }
  function b() {
    return c.b(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.b = a;
  return c;
}();
bd = function(a) {
  a *= Math.random.l ? Math.random.l() : Math.random.call(null);
  return Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a);
};
var zf = new W(null, "load", "load", -1318641184), Af = new W(null, "num", "num", 1985240673), Bf = new W(null, "sizes", "sizes", -273528126), Nb = new W(null, "meta", "meta", 1499536964), Cf = new W(null, "gray", "gray", 1013268388), Df = new W(null, "color", "color", 1011675173), Ob = new W(null, "dup", "dup", 556298533), Ef = new W(null, "parent", "parent", -878878779), Ff = new W(null, "default", "default", -1987822328), Gf = new W(null, "w", "w", 354169001), Hf = new W(null, "value", "value", 
305978217), If = new W(null, "file", "file", -1269645878), Jf = new W(null, "end-column", "end-column", 1425389514), Kf = new W(null, "rank", "rank", -1706728502), Lf = new W(null, "rgb", "rgb", 1432123467), Mf = new W(null, "width", "width", -384071477), Lb = new W(null, "flush-on-newline", "flush-on-newline", -151457939), Nf = new W(null, "node", "node", 581201198), Of = new W(null, "size", "size", 1098693007), Pf = new W(null, "column", "column", 2078222095), Qf = new W(null, "matrix", "matrix", 
803137200), Mb = new W(null, "readably", "readably", 1129599760), Rf = new W(null, "click", "click", 1912301393), Sf = new W(null, "nodes", "nodes", -2099585805), Tf = new W(null, "line", "line", 212345235), Pb = new W(null, "print-length", "print-length", 1931866356), Uf = new W(null, "b", "b", 1482224470), Vf = new W(null, "end-line", "end-line", 1837326455), Wf = new W(null, "a", "a", -2123407586), Xf = new W(null, "height", "height", 1025178622), Yf = new W(null, "data", "data", -232669377);
function Zf(a, b, c) {
  return function(d, e, f) {
    d = d + e + c * f;
    return 0 > d ? null : d < b ? T.a(a, d) : null;
  };
}
function $f(a) {
  return Math.abs(a);
}
;var ag;
a: {
  var bg = aa.navigator;
  if (bg) {
    var cg = bg.userAgent;
    if (cg) {
      ag = cg;
      break a;
    }
  }
  ag = "";
}
function dg(a) {
  return-1 != ag.indexOf(a);
}
;var eg = dg("Opera") || dg("OPR"), fg = dg("Trident") || dg("MSIE"), gg = dg("Gecko") && -1 == ag.toLowerCase().indexOf("webkit") && !(dg("Trident") || dg("MSIE")), hg = -1 != ag.toLowerCase().indexOf("webkit");
function ig() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var jg = function() {
  var a = "", b;
  if (eg && aa.opera) {
    return a = aa.opera.version, "function" == r(a) ? a() : a;
  }
  gg ? b = /rv\:([^\);]+)(\)|;)/ : fg ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : hg && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(ag)) ? a[1] : "");
  return fg && (b = ig(), b > parseFloat(a)) ? String(b) : a;
}(), kg = {};
function lg(a) {
  var b;
  if (!(b = kg[a])) {
    b = 0;
    for (var c = String(jg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(g) || ["", "", ""], p = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = ka(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || ka(0 == n[2].length, 0 == p[2].length) || ka(n[2], p[2]);
      } while (0 == b);
    }
    b = kg[a] = 0 <= b;
  }
  return b;
}
var mg = aa.document, ng = mg && fg ? ig() || ("CSS1Compat" == mg.compatMode ? parseInt(jg, 10) : 5) : void 0;
!gg && !fg || fg && fg && 9 <= ng || gg && lg("1.9.1");
fg && lg("9");
function og(a, b) {
  a.appendChild(b);
}
function pg(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
;var qg = !fg || fg && 9 <= ng, rg = fg && !lg("9");
!hg || lg("528");
gg && lg("1.9b") || fg && lg("8") || eg && lg("9.5") || hg && lg("528");
gg && !lg("8") || fg && lg("9");
function sg(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Hb = !1;
}
sg.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function tg(a) {
  tg[" "](a);
  return a;
}
tg[" "] = function() {
};
function ug(a, b) {
  sg.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Gb = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (gg) {
        var e;
        a: {
          try {
            tg(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = hg || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = hg || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.Gb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = sg.prototype;
  ug.Zb = sg.prototype;
  ug.prototype = new a;
  ug.prototype.constructor = ug;
  ug.$a = function(a, c, d) {
    return sg.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
ug.prototype.preventDefault = function() {
  ug.Zb.preventDefault.call(this);
  var a = this.Gb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, rg) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
function vg(a, b, c, d, e, f) {
  this.value = a;
  this.Da = b;
  this.parent = c;
  this.V = d;
  this.I = e;
  this.n = f;
  this.i = 2229667594;
  this.p = 8192;
}
h = vg.prototype;
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  switch(b instanceof W ? b.ba : null) {
    case "parent":
      return this.parent;
    case "rank":
      return this.Da;
    case "value":
      return this.value;
    default:
      return U.c(this.I, b, c);
  }
};
h.A = function(a, b, c) {
  return rf(b, function() {
    return function(a) {
      return rf(b, xf, "", " ", "", c, a);
    };
  }(this), "#vijion.util.disjoint.DisjointSetForestNode{", ", ", "}", c, yd.a(new Y(null, 3, 5, Z, [new Y(null, 2, 5, Z, [Hf, this.value], null), new Y(null, 2, 5, Z, [Kf, this.Da], null), new Y(null, 2, 5, Z, [Ef, this.parent], null)], null), this.I));
};
h.G = function() {
  return this.V;
};
h.w = function() {
  return 3 + S(this.I);
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dd(this);
};
h.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Ae(this, b) : b) ? !0 : !1;
};
h.Sa = function(a, b) {
  return Nc(new df(null, new Kb(null, 3, [Ef, null, Hf, null, Kf, null], null), null), b) ? yc.a(rc(Wd.a(Fe, this), this.V), b) : new vg(this.value, this.Da, this.parent, this.V, Fd(yc.a(this.I, b)), null);
};
h.Fa = function(a, b, c) {
  return t(ld.a ? ld.a(Hf, b) : ld.call(null, Hf, b)) ? new vg(c, this.Da, this.parent, this.V, this.I, null) : t(ld.a ? ld.a(Kf, b) : ld.call(null, Kf, b)) ? new vg(this.value, c, this.parent, this.V, this.I, null) : t(ld.a ? ld.a(Ef, b) : ld.call(null, Ef, b)) ? new vg(this.value, this.Da, c, this.V, this.I, null) : new vg(this.value, this.Da, this.parent, this.V, xc.c(this.I, b, c), null);
};
h.B = function() {
  return H(yd.a(new Y(null, 3, 5, Z, [new Y(null, 2, 5, Z, [Hf, this.value], null), new Y(null, 2, 5, Z, [Kf, this.Da], null), new Y(null, 2, 5, Z, [Ef, this.parent], null)], null), this.I));
};
h.H = function(a, b) {
  return new vg(this.value, this.Da, this.parent, b, this.I, this.n);
};
h.J = function(a, b) {
  return Fc(b) ? Xa(this, A.a(b, 0), A.a(b, 1)) : Ha.c(Pa, this, b);
};
function wg(a, b, c, d, e, f) {
  this.R = a;
  this.Ca = b;
  this.Ea = c;
  this.V = d;
  this.I = e;
  this.n = f;
  this.i = 2229667594;
  this.p = 8192;
}
h = wg.prototype;
h.v = function(a, b) {
  return F.c(this, b, null);
};
h.t = function(a, b, c) {
  switch(b instanceof W ? b.ba : null) {
    case "sizes":
      return this.Ea;
    case "num":
      return this.Ca;
    case "nodes":
      return this.R;
    default:
      return U.c(this.I, b, c);
  }
};
h.A = function(a, b, c) {
  return rf(b, function() {
    return function(a) {
      return rf(b, xf, "", " ", "", c, a);
    };
  }(this), "#vijion.util.disjoint.DisjointSetForest{", ", ", "}", c, yd.a(new Y(null, 3, 5, Z, [new Y(null, 2, 5, Z, [Sf, this.R], null), new Y(null, 2, 5, Z, [Af, this.Ca], null), new Y(null, 2, 5, Z, [Bf, this.Ea], null)], null), this.I));
};
h.G = function() {
  return this.V;
};
h.w = function() {
  return 3 + S(this.I);
};
h.D = function() {
  var a = this.n;
  return null != a ? a : this.n = a = dd(this);
};
h.C = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Ae(this, b) : b) ? !0 : !1;
};
h.Sa = function(a, b) {
  return Nc(new df(null, new Kb(null, 3, [Af, null, Bf, null, Sf, null], null), null), b) ? yc.a(rc(Wd.a(Fe, this), this.V), b) : new wg(this.R, this.Ca, this.Ea, this.V, Fd(yc.a(this.I, b)), null);
};
h.Fa = function(a, b, c) {
  return t(ld.a ? ld.a(Sf, b) : ld.call(null, Sf, b)) ? new wg(c, this.Ca, this.Ea, this.V, this.I, null) : t(ld.a ? ld.a(Af, b) : ld.call(null, Af, b)) ? new wg(this.R, c, this.Ea, this.V, this.I, null) : t(ld.a ? ld.a(Bf, b) : ld.call(null, Bf, b)) ? new wg(this.R, this.Ca, c, this.V, this.I, null) : new wg(this.R, this.Ca, this.Ea, this.V, xc.c(this.I, b, c), null);
};
h.B = function() {
  return H(yd.a(new Y(null, 3, 5, Z, [new Y(null, 2, 5, Z, [Sf, this.R], null), new Y(null, 2, 5, Z, [Af, this.Ca], null), new Y(null, 2, 5, Z, [Bf, this.Ea], null)], null), this.I));
};
h.H = function(a, b) {
  return new wg(this.R, this.Ca, this.Ea, b, this.I, this.n);
};
h.J = function(a, b) {
  return Fc(b) ? Xa(this, A.a(b, 0), A.a(b, 1)) : Ha.c(Pa, this, b);
};
function yg(a, b, c) {
  return new wg(a, b, c, null, null, null);
}
function zg(a, b) {
  return t(U.a(Nf.b(a), b)) ? a : yg(xc.c(Sf.b(a), b, new vg(b, 0, null, null, null, null)), Af.b(a) + 1, uc.a(Bf.b(a), new Ie([b, 1])));
}
var Bg = function Ag(b, c) {
  var d = Sf.b(b).call(null, c), e = Ef.b(d);
  if (O.a(d, null)) {
    return new Y(null, 2, 5, Z, [b, null], null);
  }
  if (O.a(e, null)) {
    return new Y(null, 2, 5, Z, [b, c], null);
  }
  e = Ag(b, e);
  d = T.c(e, 0, null);
  e = T.c(e, 1, null);
  d = Sf.b(d);
  return new Y(null, 2, 5, Z, [yg(Zd(d, new Y(null, 2, 5, Z, [c, Ef], null), e), Af.b(b), Bf.b(b)), e], null);
}, Cg = function() {
  function a(a, b) {
    return U.a(Bf.b(a), b);
  }
  function b(a) {
    return Af.b(a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Dg(a, b) {
  for (var c = b;;) {
    var d = U.a(Sf.b(a), c);
    if (t(d)) {
      if (d = Ef.b(d), t(d)) {
        c = d;
      } else {
        return c;
      }
    } else {
      return null;
    }
  }
}
var Eg = yg(Fe, 0, Fe);
function Fg(a) {
  return a * a;
}
function Gg(a, b, c, d, e, f) {
  var g;
  g = d + 0 + 0 * c;
  g = 0 > g ? null : g < b ? T.a(a, g) : null;
  var k = d + e + c * f;
  a = 0 > k ? null : k < b ? T.a(a, k) : null;
  t(t(g) ? a : g) ? (a = Fg(T.a(g, 0) - T.a(a, 0)) + Fg(T.a(g, 1) - T.a(a, 1)) + Fg(T.a(g, 2) - T.a(a, 2)), a = Math.sqrt(a)) : a = null;
  return new Kb(null, 3, [Wf, d, Uf, d + e + c * f, Gf, a], null);
}
function Hg(a) {
  var b = Mf.b(a), c = Yf.b(a), d = S(c);
  return Td.a(function() {
    return function(a) {
      return Jd().call(null, Gf.b(a));
    };
  }(b, c, d), function() {
    for (var a = 0, f = tc;;) {
      if (a < d) {
        var g = a + 1, f = uc.f(f, Gg(c, d, b, a, 1, 0), N([Gg(c, d, b, a, 0, 1), Gg(c, d, b, a, 1, 1), Gg(c, d, b, a, 1, -1)], 0)), a = g
      } else {
        return f;
      }
    }
  }());
}
;var Ig = "closure_listenable_" + (1E6 * Math.random() | 0), Jg = 0;
function Kg(a, b, c, d, e) {
  this.Na = a;
  this.ib = null;
  this.src = b;
  this.type = c;
  this.lb = !!d;
  this.ub = e;
  this.key = ++Jg;
  this.Za = this.kb = !1;
}
function Lg(a) {
  a.Za = !0;
  a.Na = null;
  a.ib = null;
  a.src = null;
  a.ub = null;
}
;function Mg(a) {
  this.src = a;
  this.Ga = {};
  this.vb = 0;
}
Mg.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Ga[f];
  a || (a = this.Ga[f] = [], this.vb++);
  var g;
  a: {
    for (g = 0;g < a.length;++g) {
      var k = a[g];
      if (!k.Za && k.Na == b && k.lb == !!d && k.ub == e) {
        break a;
      }
    }
    g = -1;
  }
  -1 < g ? (b = a[g], c || (b.kb = !1)) : (b = new Kg(b, this.src, f, !!d, e), b.kb = c, a.push(b));
  return b;
};
function Ng(a) {
  return xc.f(a, Df, Cf, N([Yf, Xd.a(function(a) {
    var c = T.c(a, 0, null), d = T.c(a, 1, null);
    a = T.c(a, 2, null);
    c = c > d ? c : d;
    return c > a ? c : a;
  }, Yf.b(a))], 0));
}
function Pg(a) {
  return xc.f(a, Df, Lf, N([Yf, Xd.a(function(a) {
    return new Y(null, 3, 5, Z, [a, a, a], null);
  }, Yf.b(a))], 0));
}
;var Qg = "closure_lm_" + (1E6 * Math.random() | 0), Rg = {}, Sg = 0;
function Tg(a, b, c, d, e) {
  if ("array" == r(b)) {
    for (var f = 0;f < b.length;f++) {
      Tg(a, b[f], c, d, e);
    }
    return null;
  }
  c = Ug(c);
  return a && a[Ig] ? a.jc(b, c, d, e) : Vg(a, b, c, !1, d, e);
}
function Vg(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var g = !!e, k = Wg(a);
  k || (a[Qg] = k = new Mg(a));
  c = k.add(b, c, d, e, f);
  if (c.ib) {
    return c;
  }
  d = Xg();
  c.ib = d;
  d.src = a;
  d.Na = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, g) : a.attachEvent(Yg(b.toString()), d);
  Sg++;
  return c;
}
function Xg() {
  var a = Zg, b = qg ? function(c) {
    return a.call(b.src, b.Na, c);
  } : function(c) {
    c = a.call(b.src, b.Na, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function $g(a, b, c, d, e) {
  if ("array" == r(b)) {
    for (var f = 0;f < b.length;f++) {
      $g(a, b[f], c, d, e);
    }
    return null;
  }
  c = Ug(c);
  return a && a[Ig] ? a.kc(b, c, d, e) : Vg(a, b, c, !0, d, e);
}
function Yg(a) {
  return a in Rg ? Rg[a] : Rg[a] = "on" + a;
}
function ah(a, b, c, d) {
  var e = 1;
  if (a = Wg(a)) {
    if (b = a.Ga[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.lb == c && !f.Za && (e &= !1 !== bh(f, d));
      }
    }
  }
  return Boolean(e);
}
function bh(a, b) {
  var c = a.Na, d = a.ub || a.src;
  if (a.kb && "number" != typeof a && a && !a.Za) {
    var e = a.src;
    if (e && e[Ig]) {
      e.lc(a);
    } else {
      var f = a.type, g = a.ib;
      e.removeEventListener ? e.removeEventListener(f, g, a.lb) : e.detachEvent && e.detachEvent(Yg(f), g);
      Sg--;
      if (f = Wg(e)) {
        var g = a.type, k;
        if (k = g in f.Ga) {
          k = f.Ga[g];
          var l = ta(k, a), m;
          (m = 0 <= l) && qa.splice.call(k, l, 1);
          k = m;
        }
        k && (Lg(a), 0 == f.Ga[g].length && (delete f.Ga[g], f.vb--));
        0 == f.vb && (f.src = null, e[Qg] = null);
      } else {
        Lg(a);
      }
    }
  }
  return c.call(d, b);
}
function Zg(a, b) {
  if (a.Za) {
    return!0;
  }
  if (!qg) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new ug(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (g) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, k = e.length - 1;!c.Hb && 0 <= k;k--) {
        c.currentTarget = e[k], d &= ah(e[k], f, !0, c);
      }
      for (k = 0;!c.Hb && k < e.length;k++) {
        c.currentTarget = e[k], d &= ah(e[k], f, !1, c);
      }
    }
    return d;
  }
  return bh(a, new ug(b, this));
}
function Wg(a) {
  a = a[Qg];
  return a instanceof Mg ? a : null;
}
var ch = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Ug(a) {
  if ("function" == r(a)) {
    return a;
  }
  a[ch] || (a[ch] = function(b) {
    return a.handleEvent(b);
  });
  return a[ch];
}
;var dh = document.createElement("div");
dh.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
var eh = O.a(dh.firstChild.nodeType, 3), fh = O.a(dh.getElementsByTagName("tbody").length, 0);
O.a(dh.getElementsByTagName("link").length, 0);
function gh(a, b, c) {
  a: {
    if (c = la(c), void 0 === a.style[c]) {
      var d = (hg ? "Webkit" : gg ? "Moz" : fg ? "ms" : eg ? "O" : null) + ma(c);
      if (void 0 !== a.style[d]) {
        c = d;
        break a;
      }
    }
  }
  c && (a.style[c] = b);
}
;function hh(a) {
  var b = ih;
  if ("string" === typeof b) {
    return a.replace(new RegExp(ha(b), "g"), "\x3c$1\x3e\x3c/$2\x3e");
  }
  if (t(b.hasOwnProperty("source"))) {
    return a.replace(new RegExp(b.source, "g"), "\x3c$1\x3e\x3c/$2\x3e");
  }
  throw[y("Invalid match arg: "), y(b)].join("");
}
var jh = function() {
  function a(a, b) {
    for (var c = new pa, g = H(b);;) {
      if (g) {
        c.append("" + y(I(g))), g = M(g), null != g && c.append(a);
      } else {
        return c.toString();
      }
    }
  }
  function b(a) {
    var b = new pa;
    for (a = H(a);;) {
      if (a) {
        b = b.append("" + y(I(a))), a = M(a);
      } else {
        return b.toString();
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
var kh = /<|&#?\w+;/, lh = /^\s+/, ih = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, mh = /<([\w:]+)/, nh = /<tbody/i, oh = new Y(null, 3, 5, Z, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), ph = new Y(null, 3, 5, Z, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), qh = new Y(null, 3, 5, Z, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null), rh = wc(["td", "optgroup", "tfoot", "tr", "area", Ff, "option", 
"legend", "thead", "col", "caption", "th", "colgroup", "tbody"], [qh, oh, ph, new Y(null, 3, 5, Z, [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], null), new Y(null, 3, 5, Z, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), new Y(null, 3, 5, Z, [0, "", ""], null), oh, new Y(null, 3, 5, Z, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), ph, new Y(null, 3, 5, Z, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], null), ph, qh, ph, ph]);
function sh(a, b, c, d) {
  b = Aa(pf(nh, b));
  O.a(c, "table") && b ? (c = a.firstChild, a = t(c) ? a.firstChild.childNodes : c) : a = O.a(d, "\x3ctable\x3e") && b ? a.childNodes : tc;
  a = H(a);
  c = null;
  for (var e = b = 0;;) {
    if (e < b) {
      d = c.F(null, e), O.a(d.nodeName, "tbody") && O.a(d.childNodes.length, 0) && d.parentNode.removeChild(d), e += 1;
    } else {
      if (a = H(a)) {
        c = a, Gc(c) ? (a = Eb(c), b = Fb(c), c = a, d = S(a), a = b, b = d) : (d = I(c), O.a(d.nodeName, "tbody") && O.a(d.childNodes.length, 0) && d.parentNode.removeChild(d), a = M(c), c = null, b = 0), e = 0;
      } else {
        break;
      }
    }
  }
}
function th(a, b) {
  a.insertBefore(document.createTextNode(I(pf(lh, b))), a.firstChild);
}
function uh(a) {
  var b = hh(a);
  a = ("" + y(sc(pf(mh, b)))).toLowerCase();
  var c = U.c(rh, a, Ff.b(rh)), d = T.c(c, 0, null), e = T.c(c, 1, null), f = T.c(c, 2, null), c = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = [y(e), y(b), y(f)].join("");
    for (var c = d;;) {
      if (0 < c) {
        c -= 1, a = a.lastChild;
      } else {
        return a;
      }
    }
  }();
  t(fh) && sh(c, b, a, e);
  t(function() {
    var a = Aa(eh);
    return a ? pf(lh, b) : a;
  }()) && th(c, b);
  return c.childNodes;
}
function vh(a) {
  return t(pf(kh, a)) ? uh(a) : document.createTextNode(a);
}
function wh(a) {
  if (a ? a.Ub : a) {
    return a.Ub(a);
  }
  var b;
  b = wh[r(null == a ? null : a)];
  if (!b && (b = wh._, !b)) {
    throw x("DomContent.nodes", a);
  }
  return b.call(null, a);
}
function xh(a) {
  if (a ? a.Vb : a) {
    return a.Vb(a);
  }
  var b;
  b = xh[r(null == a ? null : a)];
  if (!b && (b = xh._, !b)) {
    throw x("DomContent.single-node", a);
  }
  return b.call(null, a);
}
function yh(a) {
  a = gf(a);
  var b = document;
  return ba(a) ? b.getElementById(a) : a;
}
function zh() {
  var a = Ah, b = Bh;
  Ch.c ? Ch.c(og, a, b) : Ch.call(null, og, a, b);
}
function Dh() {
  of.b(Nd.a(pg, wh(Bh)));
}
function Eh(a, b) {
  return xh(a).getAttribute(gf(b));
}
var Fh = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    for (var f = H(wh(a)), g = null, k = 0, l = 0;;) {
      if (l < k) {
        var m = g.F(null, l), n = gf(b), p = V.a(y, e);
        ba(n) ? gh(m, p, n) : na(n, ga(gh, m));
        l += 1;
      } else {
        if (f = H(f)) {
          Gc(f) ? (k = Eb(f), f = Fb(f), g = k, k = S(k)) : (l = I(f), k = gf(b), g = V.a(y, e), ba(k) ? gh(l, g, k) : na(k, ga(gh, l)), f = M(f), g = null, k = 0), l = 0;
        } else {
          break;
        }
      }
    }
    return a;
  }
  a.o = 2;
  a.h = function(a) {
    var d = I(a);
    a = M(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a);
  };
  a.f = b;
  return a;
}(), Gh = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    for (var f = H(wh(a)), g = null, k = 0, l = 0;;) {
      if (l < k) {
        g.F(null, l).setAttribute(gf(b), V.a(y, e)), l += 1;
      } else {
        if (f = H(f)) {
          g = f, Gc(g) ? (f = Eb(g), l = Fb(g), g = f, k = S(f), f = l) : (I(g).setAttribute(gf(b), V.a(y, e)), f = M(g), g = null, k = 0), l = 0;
        } else {
          break;
        }
      }
    }
    return a;
  }
  a.o = 2;
  a.h = function(a) {
    var d = I(a);
    a = M(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a);
  };
  a.f = b;
  return a;
}();
function Ch(a, b, c) {
  b = wh(b);
  var d = wh(c);
  c = function() {
    for (var a = document.createDocumentFragment(), b = H(d), c = null, e = 0, f = 0;;) {
      if (f < e) {
        var p = c.F(null, f);
        a.appendChild(p);
        f += 1;
      } else {
        if (b = H(b)) {
          c = b, Gc(c) ? (b = Eb(c), f = Fb(c), c = b, e = S(b), b = f) : (b = I(c), a.appendChild(b), b = M(c), c = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return a;
  }();
  var e = of.b(Qd.a(S(b) - 1, function(a, b, c) {
    return function() {
      return c.cloneNode(!0);
    };
  }(b, d, c)));
  if (H(b)) {
    var f = I(b);
    a.a ? a.a(f, c) : a.call(null, f, c);
    return of.b(Nd.c(function() {
      return function(b, c) {
        return a.a ? a.a(b, c) : a.call(null, b, c);
      };
    }(b, d, c, e), J(b), e));
  }
  return null;
}
var Hh = function() {
  function a(a, b) {
    return b < a.length ? new X(null, function() {
      return P(a.item(b), c.a(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Ih = function() {
  function a(a, b) {
    return b < a.length ? new X(null, function() {
      return P(a[b], c.a(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Jh(a) {
  return t(a.item) ? Hh.b(a) : Ih.b(a);
}
function Kh(a) {
  if (t(a)) {
    var b = Aa(a.nodeName);
    return b ? a.length : b;
  }
  return a;
}
wh._ = function(a) {
  return null == a ? L : (a ? a.i & 8388608 || a.Ta || (a.i ? 0 : w(qb, a)) : w(qb, a)) ? H(a) : t(Kh(a)) ? Jh(a) : H(new Y(null, 1, 5, Z, [a], null));
};
xh._ = function(a) {
  return null == a ? null : (a ? a.i & 8388608 || a.Ta || (a.i ? 0 : w(qb, a)) : w(qb, a)) ? I(a) : t(Kh(a)) ? a.item(0) : a;
};
wh.string = function(a) {
  return of.b(wh(vh(a)));
};
xh.string = function(a) {
  return xh(vh(a));
};
t("undefined" != typeof NodeList) && (h = NodeList.prototype, h.Ta = !0, h.B = function() {
  return Jh(this);
}, h.Qa = !0, h.F = function(a, b) {
  return this.item(b);
}, h.Q = function(a, b, c) {
  return this.length <= b ? c : T.a(this, b);
}, h.bb = !0, h.w = function() {
  return this.length;
});
t("undefined" != typeof StaticNodeList) && (h = StaticNodeList.prototype, h.Ta = !0, h.B = function() {
  return Jh(this);
}, h.Qa = !0, h.F = function(a, b) {
  return this.item(b);
}, h.Q = function(a, b, c) {
  return this.length <= b ? c : T.a(this, b);
}, h.bb = !0, h.w = function() {
  return this.length;
});
t("undefined" != typeof HTMLCollection) && (h = HTMLCollection.prototype, h.Ta = !0, h.B = function() {
  return Jh(this);
}, h.Qa = !0, h.F = function(a, b) {
  return this.item(b);
}, h.Q = function(a, b, c) {
  return this.length <= b ? c : T.a(this, b);
}, h.bb = !0, h.w = function() {
  return this.length;
});
var Lh;
function Mh(a) {
  if (a ? a.Fb : a) {
    return a.Fb();
  }
  var b;
  b = Mh[r(null == a ? null : a)];
  if (!b && (b = Mh._, !b)) {
    throw x("Event.prevent-default", a);
  }
  return b.call(null, a);
}
var Nh = window.document.documentElement, Ph = function Oh(b) {
  return function(c) {
    var d = function() {
      "undefined" === typeof Lh && (Lh = function(b, c, d, k) {
        this.gb = b;
        this.Wb = c;
        this.Tb = d;
        this.Xb = k;
        this.p = 0;
        this.i = 393472;
      }, Lh.prototype.v = function(b, c) {
        var d = this.gb[c];
        return t(d) ? d : this.gb[gf(c)];
      }, Lh.prototype.t = function(b, c, d) {
        b = F.a(this, c);
        return t(b) ? b : d;
      }, Lh.prototype.Fb = function() {
        return this.gb.preventDefault();
      }, Lh.prototype.G = function() {
        return this.Xb;
      }, Lh.prototype.H = function(b, c) {
        return new Lh(this.gb, this.Wb, this.Tb, c);
      }, Lh.Eb = !0, Lh.Db = "domina.events/t16864", Lh.Sb = function(b) {
        return G(b, "domina.events/t16864");
      });
      return new Lh(c, b, Oh, new Kb(null, 5, [Jf, 51, Vf, 42, Pf, 8, Tf, 28, If, "/Users/takashi/Desktop/vijion/html/js/prod/domina/events.cljs"], null));
    }();
    b.b ? b.b(d) : b.call(null, d);
    return!0;
  };
};
function Qh(a, b, c) {
  var d = Ph(c), e = gf(b);
  return of.b(function() {
    return function(a, b) {
      return function l(c) {
        return new X(null, function(a, b) {
          return function() {
            for (;;) {
              var d = H(c);
              if (d) {
                if (Gc(d)) {
                  var e = Eb(d), f = S(e), g = new pd(Array(f), 0);
                  a: {
                    for (var z = 0;;) {
                      if (z < f) {
                        var B = A.a(e, z), B = t(!1) ? $g(B, b, a, !1) : Tg(B, b, a, !1);
                        g.add(B);
                        z += 1;
                      } else {
                        e = !0;
                        break a;
                      }
                    }
                    e = void 0;
                  }
                  return e ? td(g.X(), l(Fb(d))) : td(g.X(), null);
                }
                g = I(d);
                return P(t(!1) ? $g(g, b, a, !1) : Tg(g, b, a, !1), l(J(d)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(d, e)(wh(a));
  }());
}
var Rh = function() {
  function a(a, d) {
    return b.c(Nh, a, d);
  }
  var b = null, b = function(b, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, d);
      case 3:
        return Qh(b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.c = function(a, b, e) {
    return Qh(a, b, e);
  };
  return b;
}();
function Sh(a, b) {
  var c = yh(a), d = c.getContext("2d"), e = new Image;
  Rh.c(e, zf, function(a, b, c) {
    return function() {
      var d = c.width, e = c.height;
      Gh.f(a, Mf, N([d], 0));
      Gh.f(a, Xf, N([e], 0));
      return b.drawImage(c, 0, 0, d, e);
    };
  }(c, d, e));
  e.src = b;
  return null;
}
function Th(a) {
  a = yh(a);
  var b = a.getContext("2d"), c = Eh(a, Mf), d = Eh(a, Xf), e = b.getImageData(0, 0, c, d);
  return new Kb(null, 4, [Mf, e.width, Xf, e.height, Df, Lf, Yf, Nd.a(function() {
    return function(a) {
      var b = T.c(a, 0, null), c = T.c(a, 1, null), d = T.c(a, 2, null);
      T.c(a, 3, null);
      return new Y(null, 3, 5, Z, [b, c, d], null);
    };
  }(a, b, c, d, e), jf.a(4, N.b(e.data)))], null);
}
function Uh(a, b) {
  if (O.a(Lf, Df.b(b))) {
    for (var c = yh(a), d = c.getContext("2d"), e = d.createImageData(Mf.b(b), Xf.b(b)), f = e.data, c = new Uint8ClampedArray(Ia.b(Vd(Nd.a(function() {
      return function(a) {
        var b = T.c(a, 0, null), c = T.c(a, 1, null);
        a = T.c(a, 2, null);
        return new Y(null, 4, 5, Z, [b, c, a, 255], null);
      };
    }(c, d, e, f), Yf.b(b))))), g = c.length, k = 0;;) {
      if (k < g) {
        f[k] = c[k], k += 1;
      } else {
        break;
      }
    }
    d.putImageData(e, 0, 0);
  }
}
;var Vh = new Kb(null, 2, [Of, 5, Qf, new Y(null, 25, 5, Z, [.04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04, .04], null)], null);
function Wh(a, b) {
  if (Id(Of.b(a))) {
    var c = Mf.b(b), d = of.b(Yf.b(b)), e = Of.b(a), f = Qf.b(a), g = $c(e), k = e * e, l = mf.a(-g, g + 1), m = of.b(qe(function() {
      return function(a, b, c, d, e, f, g) {
        return function da(k) {
          return new X(null, function(a, b, c, d, e, f, g) {
            return function() {
              for (var l = k;;) {
                var m = H(l);
                if (m) {
                  var n = m, p = I(n);
                  if (m = H(function(a, b, c, d, e, f, g, k, l, m, n) {
                    return function xg(p) {
                      return new X(null, function(a, b) {
                        return function() {
                          for (;;) {
                            var a = H(p);
                            if (a) {
                              if (Gc(a)) {
                                var c = Eb(a), d = S(c), e = new pd(Array(d), 0);
                                a: {
                                  for (var f = 0;;) {
                                    if (f < d) {
                                      var g = A.a(c, f), g = new Y(null, 2, 5, Z, [Yc(g), Yc(b)], null);
                                      e.add(g);
                                      f += 1;
                                    } else {
                                      c = !0;
                                      break a;
                                    }
                                  }
                                  c = void 0;
                                }
                                return c ? td(e.X(), xg(Fb(a))) : td(e.X(), null);
                              }
                              e = I(a);
                              return P(new Y(null, 2, 5, Z, [Yc(e), Yc(b)], null), xg(J(a)));
                            }
                            return null;
                          }
                        };
                      }(a, b, c, d, e, f, g, k, l, m, n), null, null);
                    };
                  }(l, p, n, m, a, b, c, d, e, f, g)(g))) {
                    return yd.a(m, da(J(l)));
                  }
                  l = J(l);
                } else {
                  return null;
                }
              }
            };
          }(a, b, c, d, e, f, g), null, null);
        };
      }(c, d, e, f, g, k, l)(l);
    }())), n = S(d), p = Zf(d, n, c);
    return xc.c(b, Yf, function() {
      for (var a = 0, b = tc;;) {
        if (a < n) {
          var u = a + 1, v = uc.a(b, function() {
            var u = Nd.a(function(a, b, c, d, e, f, g, k, l, m, n, p) {
              return function(b) {
                var c = T.c(b, 0, null);
                b = T.c(b, 1, null);
                return p.c ? p.c(a, c, b) : p.call(null, a, c, b);
              };
            }(a, b, c, d, e, f, g, k, l, m, n, p), m);
            if (t(Hd(u))) {
              return 0;
            }
            u = $f(Zc(Ha.a(Wc, Nd.c(Xc, u, f))));
            return 255 > u ? u : 255;
          }()), a = u, b = v
        } else {
          return b;
        }
      }
    }());
  }
  return null;
}
var Xh = Ld.a(Wh, new Kb(null, 2, [Of, 5, Qf, new Y(null, 25, 5, Z, [-1, -3, -4, -3, -1, -3, 0, 6, 0, -3, -4, 6, 20, 6, -4, -3, 0, 6, 0, -3, -1, -3, -4, -3, -1], null)], null)), Yh = Ld.a(Wh, Vh);
for (var Ah = document.body, Bh = document.createElement("div"), Zh = "loading".i & 8 || "loading".ac || ("loading".i ? 0 : w(Oa, "loading")) ? jh.a(" ", "loading") : "loading", $h = H(wh(Bh)), ai = null, bi = 0, ci = 0;;) {
  if (ci < bi) {
    ai.F(null, ci).className = Zh, ci += 1;
  } else {
    var di = H($h);
    if (di) {
      var ei = di;
      if (Gc(ei)) {
        var fi;
        fi = Eb(ei);
        var gi;
        gi = Fb(ei);
        var hi = fi, ii = S(fi), $h = gi, ai = hi, bi = ii;
      } else {
        I(ei).className = Zh, $h = M(ei), ai = null, bi = 0;
      }
      ci = 0;
    } else {
      break;
    }
  }
}
function ji() {
  var a = yh("control");
  Fh.f(a, "display", N(["none"], 0));
}
function ki() {
  var a = yh("control");
  return Fh.f(a, "display", N(["inherit"], 0));
}
function li() {
  return confirm("CAUTION: It takes some minutes to calculate the result. This may block and freeze your browser process.");
}
function mi(a, b) {
  Sh(a, b);
  Rh.c(yh("gradient"), Rf, function(b) {
    Mh(b);
    return t(li()) ? (zh(), ji(), setTimeout(function() {
      var b = Th(a), b = Ng(b), b = Yh.b ? Yh.b(b) : Yh.call(null, b);
      Uh(a, Pg(b));
      Dh();
      return ki();
    }, 100)) : null;
  });
  Rh.c(yh("laplacian"), Rf, function(b) {
    Mh(b);
    return t(li()) ? (zh(), ji(), setTimeout(function() {
      var b = Th(a), b = Ng(b), b = Xh.b ? Xh.b(b) : Xh.call(null, b);
      Uh(a, Pg(b));
      Dh();
      return ki();
    }, 100)) : null;
  });
  Rh.c(yh("segment"), Rf, function(b) {
    Mh(b);
    return t(li()) ? (zh(), ji(), setTimeout(function() {
      var b = Th(a), c = Mf.b(b), f = Xf.b(b), b = Hg(b);
      a: {
        var g = Tc.a(Gf, b), k = c * f, b = I(g), l, k = mf.b(k);
        l = Ha.c(zg, Eg, k);
        k = Fe;
        for (g = J(g);;) {
          if (t(b)) {
            var m = Dg(l, Wf.b(b)), n = Dg(l, Uf.b(b)), p = U.c(k, m, 500), q = U.c(k, n, 500);
            if (Ed.a(m, n) && Gf.b(b) < p && Gf.b(b) < q) {
              var p = n, n = Bg(l, m), q = T.c(n, 0, null), n = T.c(n, 1, null), q = Bg(q, p), p = T.c(q, 0, null), q = T.c(q, 1, null), s = U.a(Bf.b(l), n), u = U.a(Bf.b(l), q), v = Sf.b(p), z = Af.b(l) - 1, B = Kf.b(U.a(v, n)), K = Kf.b(U.a(v, q)), n = null == n || null == q || O.a(n, q) ? p : B < K ? yg(Zd(v, new Y(null, 2, 5, Z, [n, Ef], null), q), z, yc.a(xc.c(Bf.b(l), q, s + u), n)) : K < B ? yg(Zd(v, new Y(null, 2, 5, Z, [q, Ef], null), n), z, yc.a(xc.c(Bf.b(l), n, s + u), q)) : yg(Ad(Cd.c(Cd.c(xb(v), 
              q, xc.c(v.b ? v.b(q) : v.call(null, q), Ef, n)), n, xc.c(v.b ? v.b(n) : v.call(null, n), Kf, B + 1))), z, yc.a(xc.c(Bf.b(l), n, s + u), q)), p = Dg(n, m), m = I(g);
              l = n;
              k = uc.a(k, new Ie([p, Gf.b(b) + 500 / Cg.a(n, p)]));
              g = J(g);
              b = m;
            } else {
              b = I(g), m = l, g = J(g), l = m;
            }
          } else {
            b = l;
            break a;
          }
        }
        b = void 0;
      }
      k = c * f;
      a: {
        g = 0;
        m = Fe;
        for (l = tc;;) {
          if (g < k) {
            n = Dg(b, g), p = U.c(m, n, null), t(p) ? g += 1 : (p = new Y(null, 3, 5, Z, [bd(255), bd(255), bd(255)], null), g += 1, m = uc.a(m, new Ie([n, p]))), l = uc.a(l, p);
          } else {
            b = l;
            break a;
          }
        }
        b = void 0;
      }
      Uh(a, new Kb(null, 4, [Mf, c, Xf, f, Df, Lf, Yf, b], null));
      Dh();
      return ki();
    }, 100)) : null;
  });
  return Rh.c(yh("reset"), Rf, function(c) {
    Mh(c);
    return Sh(a, b);
  });
}
var ni = ["vijion", "test", "bootstrap"], oi = aa;
ni[0] in oi || !oi.execScript || oi.execScript("var " + ni[0]);
for (var pi;ni.length && (pi = ni.shift());) {
  ni.length || void 0 === mi ? oi = oi[pi] ? oi[pi] : oi[pi] = {} : oi[pi] = mi;
}
;
})();

//# sourceMappingURL=vijion.js.map