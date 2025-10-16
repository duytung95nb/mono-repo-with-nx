import { jsx as Ge } from "react/jsx-runtime";
import xe, { useDebugValue as He, useContext as Ve, createElement as yt, useRef as vt } from "react";
function gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var we = { exports: {} }, F = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function St() {
  if (We) return F;
  We = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
  function p(o) {
    if (typeof o == "object" && o !== null) {
      var S = o.$$typeof;
      switch (S) {
        case e:
          switch (o = o.type, o) {
            case t:
            case s:
            case n:
            case v:
            case m:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case c:
                case d:
                case w:
                case E:
                  return o;
                case l:
                  return o;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  return F.ContextConsumer = l, F.ContextProvider = c, F.Element = e, F.ForwardRef = d, F.Fragment = t, F.Lazy = w, F.Memo = E, F.Portal = r, F.Profiler = s, F.StrictMode = n, F.Suspense = v, F.SuspenseList = m, F.isContextConsumer = function(o) {
    return p(o) === l;
  }, F.isContextProvider = function(o) {
    return p(o) === c;
  }, F.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === e;
  }, F.isForwardRef = function(o) {
    return p(o) === d;
  }, F.isFragment = function(o) {
    return p(o) === t;
  }, F.isLazy = function(o) {
    return p(o) === w;
  }, F.isMemo = function(o) {
    return p(o) === E;
  }, F.isPortal = function(o) {
    return p(o) === r;
  }, F.isProfiler = function(o) {
    return p(o) === s;
  }, F.isStrictMode = function(o) {
    return p(o) === n;
  }, F.isSuspense = function(o) {
    return p(o) === v;
  }, F.isSuspenseList = function(o) {
    return p(o) === m;
  }, F.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === t || o === s || o === n || o === v || o === m || o === P || typeof o == "object" && o !== null && (o.$$typeof === w || o.$$typeof === E || o.$$typeof === c || o.$$typeof === l || o.$$typeof === d || o.$$typeof === x || o.getModuleId !== void 0);
  }, F.typeOf = p, F;
}
var Y = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Et() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (typeof o == "object" && o !== null) {
        var S = o.$$typeof;
        switch (S) {
          case r:
            switch (o = o.type, o) {
              case n:
              case l:
              case s:
              case m:
              case E:
                return o;
              default:
                switch (o = o && o.$$typeof, o) {
                  case d:
                  case v:
                  case P:
                  case w:
                    return o;
                  case c:
                    return o;
                  default:
                    return S;
                }
            }
          case t:
            return S;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), p = Symbol.for("react.client.reference");
    Y.ContextConsumer = c, Y.ContextProvider = d, Y.Element = r, Y.ForwardRef = v, Y.Fragment = n, Y.Lazy = P, Y.Memo = w, Y.Portal = t, Y.Profiler = l, Y.StrictMode = s, Y.Suspense = m, Y.SuspenseList = E, Y.isContextConsumer = function(o) {
      return e(o) === c;
    }, Y.isContextProvider = function(o) {
      return e(o) === d;
    }, Y.isElement = function(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }, Y.isForwardRef = function(o) {
      return e(o) === v;
    }, Y.isFragment = function(o) {
      return e(o) === n;
    }, Y.isLazy = function(o) {
      return e(o) === P;
    }, Y.isMemo = function(o) {
      return e(o) === w;
    }, Y.isPortal = function(o) {
      return e(o) === t;
    }, Y.isProfiler = function(o) {
      return e(o) === l;
    }, Y.isStrictMode = function(o) {
      return e(o) === s;
    }, Y.isSuspense = function(o) {
      return e(o) === m;
    }, Y.isSuspenseList = function(o) {
      return e(o) === E;
    }, Y.isValidElementType = function(o) {
      return typeof o == "string" || typeof o == "function" || o === n || o === l || o === s || o === m || o === E || o === x || typeof o == "object" && o !== null && (o.$$typeof === P || o.$$typeof === w || o.$$typeof === d || o.$$typeof === c || o.$$typeof === v || o.$$typeof === p || o.getModuleId !== void 0);
    }, Y.typeOf = e;
  })()), Y;
}
var Xe;
function wt() {
  return Xe || (Xe = 1, process.env.NODE_ENV === "production" ? we.exports = /* @__PURE__ */ St() : we.exports = /* @__PURE__ */ Et()), we.exports;
}
var je = /* @__PURE__ */ wt();
function Ct(e) {
  function r(g, h, y, A, a) {
    for (var N = 0, f = 0, L = 0, I = 0, O, i, V = 0, U = 0, R, W = R = O = 0, $ = 0, B = 0, ye = 0, G = 0, Ee = y.length, ve = Ee - 1, re, _ = "", j = "", ke = "", Oe = "", ie; $ < Ee; ) {
      if (i = y.charCodeAt($), $ === ve && f + I + L + N !== 0 && (f !== 0 && (i = f === 47 ? 10 : 47), I = L = N = 0, Ee++, ve++), f + I + L + N === 0) {
        if ($ === ve && (0 < B && (_ = _.replace(P, "")), 0 < _.trim().length)) {
          switch (i) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              _ += y.charAt($);
          }
          i = 59;
        }
        switch (i) {
          case 123:
            for (_ = _.trim(), O = _.charCodeAt(0), R = 1, G = ++$; $ < Ee; ) {
              switch (i = y.charCodeAt($)) {
                case 123:
                  R++;
                  break;
                case 125:
                  R--;
                  break;
                case 47:
                  switch (i = y.charCodeAt($ + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (W = $ + 1; W < ve; ++W)
                          switch (y.charCodeAt(W)) {
                            case 47:
                              if (i === 42 && y.charCodeAt(W - 1) === 42 && $ + 2 !== W) {
                                $ = W + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (i === 47) {
                                $ = W + 1;
                                break e;
                              }
                          }
                        $ = W;
                      }
                  }
                  break;
                case 91:
                  i++;
                case 40:
                  i++;
                case 34:
                case 39:
                  for (; $++ < ve && y.charCodeAt($) !== i; )
                    ;
              }
              if (R === 0) break;
              $++;
            }
            switch (R = y.substring(G, $), O === 0 && (O = (_ = _.replace(w, "").trim()).charCodeAt(0)), O) {
              case 64:
                switch (0 < B && (_ = _.replace(P, "")), i = _.charCodeAt(1), i) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    B = h;
                    break;
                  default:
                    B = ue;
                }
                if (R = r(h, B, R, i, a + 1), G = R.length, 0 < Z && (B = t(ue, _, ye), ie = d(3, R, B, h, K, X, G, i, a, A), _ = B.join(""), ie !== void 0 && (G = (R = ie.trim()).length) === 0 && (i = 0, R = "")), 0 < G) switch (i) {
                  case 115:
                    _ = _.replace(z, c);
                  case 100:
                  case 109:
                  case 45:
                    R = _ + "{" + R + "}";
                    break;
                  case 107:
                    _ = _.replace(b, "$1 $2"), R = _ + "{" + R + "}", R = H === 1 || H === 2 && l("@" + R, 3) ? "@-webkit-" + R + "@" + R : "@" + R;
                    break;
                  default:
                    R = _ + R, A === 112 && (R = (j += R, ""));
                }
                else R = "";
                break;
              default:
                R = r(h, t(h, _, ye), R, A, a + 1);
            }
            ke += R, R = ye = B = W = O = 0, _ = "", i = y.charCodeAt(++$);
            break;
          case 125:
          case 59:
            if (_ = (0 < B ? _.replace(P, "") : _).trim(), 1 < (G = _.length)) switch (W === 0 && (O = _.charCodeAt(0), O === 45 || 96 < O && 123 > O) && (G = (_ = _.replace(" ", ":")).length), 0 < Z && (ie = d(1, _, h, g, K, X, j.length, A, a, A)) !== void 0 && (G = (_ = ie.trim()).length) === 0 && (_ = "\0\0"), O = _.charCodeAt(0), i = _.charCodeAt(1), O) {
              case 0:
                break;
              case 64:
                if (i === 105 || i === 99) {
                  Oe += _ + y.charAt($);
                  break;
                }
              default:
                _.charCodeAt(G - 1) !== 58 && (j += s(_, O, i, _.charCodeAt(2)));
            }
            ye = B = W = O = 0, _ = "", i = y.charCodeAt(++$);
        }
      }
      switch (i) {
        case 13:
        case 10:
          f === 47 ? f = 0 : 1 + O === 0 && A !== 107 && 0 < _.length && (B = 1, _ += "\0"), 0 < Z * oe && d(0, _, h, g, K, X, j.length, A, a, A), X = 1, K++;
          break;
        case 59:
        case 125:
          if (f + I + L + N === 0) {
            X++;
            break;
          }
        default:
          switch (X++, re = y.charAt($), i) {
            case 9:
            case 32:
              if (I + N + f === 0) switch (V) {
                case 44:
                case 58:
                case 9:
                case 32:
                  re = "";
                  break;
                default:
                  i !== 32 && (re = " ");
              }
              break;
            case 0:
              re = "\\0";
              break;
            case 12:
              re = "\\f";
              break;
            case 11:
              re = "\\v";
              break;
            case 38:
              I + f + N === 0 && (B = ye = 1, re = "\f" + re);
              break;
            case 108:
              if (I + f + N + te === 0 && 0 < W) switch ($ - W) {
                case 2:
                  V === 112 && y.charCodeAt($ - 3) === 58 && (te = V);
                case 8:
                  U === 111 && (te = U);
              }
              break;
            case 58:
              I + f + N === 0 && (W = $);
              break;
            case 44:
              f + L + I + N === 0 && (B = 1, re += "\r");
              break;
            case 34:
            case 39:
              f === 0 && (I = I === i ? 0 : I === 0 ? i : I);
              break;
            case 91:
              I + f + L === 0 && N++;
              break;
            case 93:
              I + f + L === 0 && N--;
              break;
            case 41:
              I + f + N === 0 && L--;
              break;
            case 40:
              if (I + f + N === 0) {
                if (O === 0) switch (2 * V + 3 * U) {
                  case 533:
                    break;
                  default:
                    O = 1;
                }
                L++;
              }
              break;
            case 64:
              f + L + I + N + W + R === 0 && (R = 1);
              break;
            case 42:
            case 47:
              if (!(0 < I + N + L)) switch (f) {
                case 0:
                  switch (2 * i + 3 * y.charCodeAt($ + 1)) {
                    case 235:
                      f = 47;
                      break;
                    case 220:
                      G = $, f = 42;
                  }
                  break;
                case 42:
                  i === 47 && V === 42 && G + 2 !== $ && (y.charCodeAt(G + 2) === 33 && (j += y.substring(G, $ + 1)), re = "", f = 0);
              }
          }
          f === 0 && (_ += re);
      }
      U = V, V = i, $++;
    }
    if (G = j.length, 0 < G) {
      if (B = h, 0 < Z && (ie = d(2, j, B, g, K, X, G, A, a, A), ie !== void 0 && (j = ie).length === 0)) return Oe + j + ke;
      if (j = B.join(",") + "{" + j + "}", H * te !== 0) {
        switch (H !== 2 || l(j, 2) || (te = 0), te) {
          case 111:
            j = j.replace(C, ":-moz-$1") + j;
            break;
          case 112:
            j = j.replace(T, "::-webkit-input-$1") + j.replace(T, "::-moz-$1") + j.replace(T, ":-ms-input-$1") + j;
        }
        te = 0;
      }
    }
    return Oe + j + ke;
  }
  function t(g, h, y) {
    var A = h.trim().split(S);
    h = A;
    var a = A.length, N = g.length;
    switch (N) {
      case 0:
      case 1:
        var f = 0;
        for (g = N === 0 ? "" : g[0] + " "; f < a; ++f)
          h[f] = n(g, h[f], y).trim();
        break;
      default:
        var L = f = 0;
        for (h = []; f < a; ++f)
          for (var I = 0; I < N; ++I)
            h[L++] = n(g[I] + " ", A[f], y).trim();
    }
    return h;
  }
  function n(g, h, y) {
    var A = h.charCodeAt(0);
    switch (33 > A && (A = (h = h.trim()).charCodeAt(0)), A) {
      case 38:
        return h.replace(k, "$1" + g.trim());
      case 58:
        return g.trim() + h.replace(k, "$1" + g.trim());
      default:
        if (0 < 1 * y && 0 < h.indexOf("\f")) return h.replace(k, (g.charCodeAt(0) === 58 ? "" : "$1") + g.trim());
    }
    return g + h;
  }
  function s(g, h, y, A) {
    var a = g + ";", N = 2 * h + 3 * y + 4 * A;
    if (N === 944) {
      g = a.indexOf(":", 9) + 1;
      var f = a.substring(g, a.length - 1).trim();
      return f = a.substring(0, g).trim() + f + ";", H === 1 || H === 2 && l(f, 1) ? "-webkit-" + f + f : f;
    }
    if (H === 0 || H === 2 && !l(a, 1)) return a;
    switch (N) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45) return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11)) return a.replace(se, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45) switch (a.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
          case 115:
            return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
          case 98:
            return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
        }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99) break;
        return f = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + f + "-webkit-" + a + "-ms-flex-pack" + f + a;
      case 1005:
        return p.test(a) ? a.replace(x, ":-webkit-") + a.replace(x, ":-moz-") + a : a;
      case 1e3:
        switch (f = a.substring(13).trim(), h = f.indexOf("-") + 1, f.charCodeAt(0) + f.charCodeAt(h)) {
          case 226:
            f = a.replace(u, "tb");
            break;
          case 232:
            f = a.replace(u, "tb-rl");
            break;
          case 220:
            f = a.replace(u, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + f + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (h = (a = g).length - 10, f = (a.charCodeAt(h) === 33 ? a.substring(0, h) : a).substring(g.indexOf(":", 7) + 1).trim(), N = f.charCodeAt(0) + (f.charCodeAt(7) | 0)) {
          case 203:
            if (111 > f.charCodeAt(8)) break;
          case 115:
            a = a.replace(f, "-webkit-" + f) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(f, "-webkit-" + (102 < N ? "inline-" : "") + "box") + ";" + a.replace(f, "-webkit-" + f) + ";" + a.replace(f, "-ms-" + f + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45) switch (a.charCodeAt(6)) {
          case 105:
            return f = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + f + "-ms-flex-" + f + a;
          case 115:
            return "-webkit-" + a + "-ms-flex-item-" + a.replace(q, "") + a;
          default:
            return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(q, "") + a;
        }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ne.test(g) === !0) return (f = g.substring(g.indexOf(":") + 1)).charCodeAt(0) === 115 ? s(g.replace("stretch", "fill-available"), h, y, A).replace(":fill-available", ":stretch") : a.replace(f, "-webkit-" + f) + a.replace(f, "-moz-" + f.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, y + A === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(o, "$1-webkit-$2") + a;
    }
    return a;
  }
  function l(g, h) {
    var y = g.indexOf(h === 1 ? ":" : "{"), A = g.substring(0, h !== 3 ? y : 10);
    return y = g.substring(y + 1, g.length - 1), le(h !== 2 ? A : A.replace(ee, "$1"), y, h);
  }
  function c(g, h) {
    var y = s(h, h.charCodeAt(0), h.charCodeAt(1), h.charCodeAt(2));
    return y !== h + ";" ? y.replace(J, " or ($1)").substring(4) : "(" + h + ")";
  }
  function d(g, h, y, A, a, N, f, L, I, O) {
    for (var i = 0, V = h, U; i < Z; ++i)
      switch (U = Q[i].call(E, g, V, y, A, a, N, f, L, I, O)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          V = U;
      }
    if (V !== h) return V;
  }
  function v(g) {
    switch (g) {
      case void 0:
      case null:
        Z = Q.length = 0;
        break;
      default:
        if (typeof g == "function") Q[Z++] = g;
        else if (typeof g == "object") for (var h = 0, y = g.length; h < y; ++h)
          v(g[h]);
        else oe = !!g | 0;
    }
    return v;
  }
  function m(g) {
    return g = g.prefix, g !== void 0 && (le = null, g ? typeof g != "function" ? H = 1 : (H = 2, le = g) : H = 0), m;
  }
  function E(g, h) {
    var y = g;
    if (33 > y.charCodeAt(0) && (y = y.trim()), fe = y, y = [fe], 0 < Z) {
      var A = d(-1, h, y, y, K, X, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (h = A);
    }
    var a = r(ue, y, h, 0, 0);
    return 0 < Z && (A = d(-2, a, y, y, K, X, a.length, 0, 0, 0), A !== void 0 && (a = A)), fe = "", te = 0, X = K = 1, a;
  }
  var w = /^\0+/g, P = /[\0\r\f]/g, x = /: */g, p = /zoo|gra/, o = /([,: ])(transform)/g, S = /,\r+?/g, k = /([\t\r\n ])*\f?&/g, b = /@(k\w+)\s*(\S*)\s*/, T = /::(place)/g, C = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, z = /\(\s*(.*)\s*\)/g, J = /([\s\S]*?);/g, q = /-self|flex-/g, ee = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ne = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, X = 1, K = 1, te = 0, H = 1, ue = [], Q = [], Z = 0, le = null, oe = 0, fe = "";
  return E.use = v, E.set = m, e !== void 0 && m(e), E;
}
var bt = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function _t(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var At = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ze = /* @__PURE__ */ _t(
  function(e) {
    return At.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ce = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Tt() {
  if (Ke) return M;
  Ke = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, v = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, o = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function T(u) {
    if (typeof u == "object" && u !== null) {
      var z = u.$$typeof;
      switch (z) {
        case r:
          switch (u = u.type, u) {
            case v:
            case m:
            case n:
            case l:
            case s:
            case w:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case d:
                case E:
                case p:
                case x:
                case c:
                  return u;
                default:
                  return z;
              }
          }
        case t:
          return z;
      }
    }
  }
  function C(u) {
    return T(u) === m;
  }
  return M.AsyncMode = v, M.ConcurrentMode = m, M.ContextConsumer = d, M.ContextProvider = c, M.Element = r, M.ForwardRef = E, M.Fragment = n, M.Lazy = p, M.Memo = x, M.Portal = t, M.Profiler = l, M.StrictMode = s, M.Suspense = w, M.isAsyncMode = function(u) {
    return C(u) || T(u) === v;
  }, M.isConcurrentMode = C, M.isContextConsumer = function(u) {
    return T(u) === d;
  }, M.isContextProvider = function(u) {
    return T(u) === c;
  }, M.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }, M.isForwardRef = function(u) {
    return T(u) === E;
  }, M.isFragment = function(u) {
    return T(u) === n;
  }, M.isLazy = function(u) {
    return T(u) === p;
  }, M.isMemo = function(u) {
    return T(u) === x;
  }, M.isPortal = function(u) {
    return T(u) === t;
  }, M.isProfiler = function(u) {
    return T(u) === l;
  }, M.isStrictMode = function(u) {
    return T(u) === s;
  }, M.isSuspense = function(u) {
    return T(u) === w;
  }, M.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === m || u === l || u === s || u === w || u === P || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === x || u.$$typeof === c || u.$$typeof === d || u.$$typeof === E || u.$$typeof === S || u.$$typeof === k || u.$$typeof === b || u.$$typeof === o);
  }, M.typeOf = T, M;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Rt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, v = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, o = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function T(i) {
      return typeof i == "string" || typeof i == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      i === n || i === m || i === l || i === s || i === w || i === P || typeof i == "object" && i !== null && (i.$$typeof === p || i.$$typeof === x || i.$$typeof === c || i.$$typeof === d || i.$$typeof === E || i.$$typeof === S || i.$$typeof === k || i.$$typeof === b || i.$$typeof === o);
    }
    function C(i) {
      if (typeof i == "object" && i !== null) {
        var V = i.$$typeof;
        switch (V) {
          case r:
            var U = i.type;
            switch (U) {
              case v:
              case m:
              case n:
              case l:
              case s:
              case w:
                return U;
              default:
                var R = U && U.$$typeof;
                switch (R) {
                  case d:
                  case E:
                  case p:
                  case x:
                  case c:
                    return R;
                  default:
                    return V;
                }
            }
          case t:
            return V;
        }
      }
    }
    var u = v, z = m, J = d, q = c, ee = r, ne = E, se = n, X = p, K = x, te = t, H = l, ue = s, Q = w, Z = !1;
    function le(i) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), oe(i) || C(i) === v;
    }
    function oe(i) {
      return C(i) === m;
    }
    function fe(i) {
      return C(i) === d;
    }
    function g(i) {
      return C(i) === c;
    }
    function h(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function y(i) {
      return C(i) === E;
    }
    function A(i) {
      return C(i) === n;
    }
    function a(i) {
      return C(i) === p;
    }
    function N(i) {
      return C(i) === x;
    }
    function f(i) {
      return C(i) === t;
    }
    function L(i) {
      return C(i) === l;
    }
    function I(i) {
      return C(i) === s;
    }
    function O(i) {
      return C(i) === w;
    }
    D.AsyncMode = u, D.ConcurrentMode = z, D.ContextConsumer = J, D.ContextProvider = q, D.Element = ee, D.ForwardRef = ne, D.Fragment = se, D.Lazy = X, D.Memo = K, D.Portal = te, D.Profiler = H, D.StrictMode = ue, D.Suspense = Q, D.isAsyncMode = le, D.isConcurrentMode = oe, D.isContextConsumer = fe, D.isContextProvider = g, D.isElement = h, D.isForwardRef = y, D.isFragment = A, D.isLazy = a, D.isMemo = N, D.isPortal = f, D.isProfiler = L, D.isStrictMode = I, D.isSuspense = O, D.isValidElementType = T, D.typeOf = C;
  })()), D;
}
var Je;
function Pt() {
  return Je || (Je = 1, process.env.NODE_ENV === "production" ? Ce.exports = Tt() : Ce.exports = Rt()), Ce.exports;
}
var Ne, et;
function xt() {
  if (et) return Ne;
  et = 1;
  var e = Pt(), r = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, t = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, l = {};
  l[e.ForwardRef] = n, l[e.Memo] = s;
  function c(p) {
    return e.isMemo(p) ? s : l[p.$$typeof] || r;
  }
  var d = Object.defineProperty, v = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, E = Object.getOwnPropertyDescriptor, w = Object.getPrototypeOf, P = Object.prototype;
  function x(p, o, S) {
    if (typeof o != "string") {
      if (P) {
        var k = w(o);
        k && k !== P && x(p, k, S);
      }
      var b = v(o);
      m && (b = b.concat(m(o)));
      for (var T = c(p), C = c(o), u = 0; u < b.length; ++u) {
        var z = b[u];
        if (!t[z] && !(S && S[z]) && !(C && C[z]) && !(T && T[z])) {
          var J = E(o, z);
          try {
            d(p, z, J);
          } catch {
          }
        }
      }
    }
    return p;
  }
  return Ne = x, Ne;
}
var kt = xt();
const Ot = /* @__PURE__ */ gt(kt);
function ae() {
  return (ae = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var tt = function(e, r) {
  for (var t = [e[0]], n = 0, s = r.length; n < s; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, Me = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !je.typeOf(e);
}, Re = Object.freeze([]), ce = Object.freeze({});
function Se(e) {
  return typeof e == "function";
}
function De(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ue(e) {
  return e && typeof e.styledComponentId == "string";
}
var pe = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Be = typeof window < "u" && "HTMLElement" in window, Nt = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), It = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function $t() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach((function(s) {
    e = e.replace(/%[a-z]/, s);
  })), e;
}
function me(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error($t.apply(void 0, [It[e]].concat(t)).trim());
}
var Mt = (function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, s = 0; s < t; s++) n += this.groupSizes[s];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var s = this.groupSizes, l = s.length, c = l; t >= c; ) (c <<= 1) < 0 && me(16, "" + t);
      this.groupSizes = new Uint32Array(c), this.groupSizes.set(s), this.length = c;
      for (var d = l; d < c; d++) this.groupSizes[d] = 0;
    }
    for (var v = this.indexOfGroup(t + 1), m = 0, E = n.length; m < E; m++) this.tag.insertRule(v, n[m]) && (this.groupSizes[t]++, v++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], s = this.indexOfGroup(t), l = s + n;
      this.groupSizes[t] = 0;
      for (var c = s; c < l; c++) this.tag.deleteRule(s);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var s = this.groupSizes[t], l = this.indexOfGroup(t), c = l + s, d = l; d < c; d++) n += this.tag.getRule(d) + `/*!sc*/
`;
    return n;
  }, e;
})(), Te = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), ge = 1, be = function(e) {
  if (Te.has(e)) return Te.get(e);
  for (; Pe.has(ge); ) ge++;
  var r = ge++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && me(16, "" + r), Te.set(e, r), Pe.set(r, e), r;
}, Dt = function(e) {
  return Pe.get(e);
}, Ft = function(e, r) {
  r >= ge && (ge = r + 1), Te.set(e, r), Pe.set(r, e);
}, Yt = "style[" + pe + '][data-styled-version="5.3.6"]', Lt = new RegExp("^" + pe + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), zt = function(e, r, t) {
  for (var n, s = t.split(","), l = 0, c = s.length; l < c; l++) (n = s[l]) && e.registerName(r, n);
}, Vt = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], s = 0, l = t.length; s < l; s++) {
    var c = t[s].trim();
    if (c) {
      var d = c.match(Lt);
      if (d) {
        var v = 0 | parseInt(d[1], 10), m = d[2];
        v !== 0 && (Ft(m, v), zt(e, m, d[3]), e.getTag().insertRules(v, n)), n.length = 0;
      } else n.push(c);
    }
  }
}, jt = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ct = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), s = (function(d) {
    for (var v = d.childNodes, m = v.length; m >= 0; m--) {
      var E = v[m];
      if (E && E.nodeType === 1 && E.hasAttribute(pe)) return E;
    }
  })(t), l = s !== void 0 ? s.nextSibling : null;
  n.setAttribute(pe, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var c = jt();
  return c && n.setAttribute("nonce", c), t.insertBefore(n, l), n;
}, Ut = (function() {
  function e(t) {
    var n = this.element = ct(t);
    n.appendChild(document.createTextNode("")), this.sheet = (function(s) {
      if (s.sheet) return s.sheet;
      for (var l = document.styleSheets, c = 0, d = l.length; c < d; c++) {
        var v = l[c];
        if (v.ownerNode === s) return v;
      }
      me(17);
    })(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
})(), Bt = (function() {
  function e(t) {
    var n = this.element = ct(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var s = document.createTextNode(n), l = this.nodes[t];
      return this.element.insertBefore(s, l || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
})(), Gt = (function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
})(), rt = Be, Ht = { isServer: !Be, useCSSOMInjection: !Nt }, ut = (function() {
  function e(t, n, s) {
    t === void 0 && (t = ce), n === void 0 && (n = {}), this.options = ae({}, Ht, {}, t), this.gs = n, this.names = new Map(s), this.server = !!t.isServer, !this.server && Be && rt && (rt = !1, (function(l) {
      for (var c = document.querySelectorAll(Yt), d = 0, v = c.length; d < v; d++) {
        var m = c[d];
        m && m.getAttribute(pe) !== "active" && (Vt(l, m), m.parentNode && m.parentNode.removeChild(m));
      }
    })(this));
  }
  e.registerId = function(t) {
    return be(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(ae({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (s = (n = this.options).isServer, l = n.useCSSOMInjection, c = n.target, t = s ? new Gt(c) : l ? new Ut(c) : new Bt(c), new Mt(t)));
    var t, n, s, l, c;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (be(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var s = /* @__PURE__ */ new Set();
      s.add(n), this.names.set(t, s);
    }
  }, r.insertRules = function(t, n, s) {
    this.registerName(t, n), this.getTag().insertRules(be(t), s);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(be(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return (function(t) {
      for (var n = t.getTag(), s = n.length, l = "", c = 0; c < s; c++) {
        var d = Dt(c);
        if (d !== void 0) {
          var v = t.names.get(d), m = n.getGroup(c);
          if (v && m && v.size) {
            var E = pe + ".g" + c + '[id="' + d + '"]', w = "";
            v !== void 0 && v.forEach((function(P) {
              P.length > 0 && (w += P + ",");
            })), l += "" + m + E + '{content:"' + w + `"}/*!sc*/
`;
          }
        }
      }
      return l;
    })(this);
  }, e;
})(), Wt = /(a)(d)/gi, nt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Fe(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = nt(r % 52) + t;
  return (nt(r % 52) + t).replace(Wt, "$1-$2");
}
var de = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, lt = function(e) {
  return de(5381, e);
};
function qt(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Se(t) && !Ue(t)) return !1;
  }
  return !0;
}
var Xt = lt("5.3.6"), Zt = (function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && qt(r), this.componentId = t, this.baseHash = de(Xt, t), this.baseStyle = n, ut.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var s = this.componentId, l = [];
    if (this.baseStyle && l.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(s, this.staticRulesId)) l.push(this.staticRulesId);
    else {
      var c = he(this.rules, r, t, n).join(""), d = Fe(de(this.baseHash, c) >>> 0);
      if (!t.hasNameForId(s, d)) {
        var v = n(c, "." + d, void 0, s);
        t.insertRules(s, d, v);
      }
      l.push(d), this.staticRulesId = d;
    }
    else {
      for (var m = this.rules.length, E = de(this.baseHash, n.hash), w = "", P = 0; P < m; P++) {
        var x = this.rules[P];
        if (typeof x == "string") w += x, process.env.NODE_ENV !== "production" && (E = de(E, x + P));
        else if (x) {
          var p = he(x, r, t, n), o = Array.isArray(p) ? p.join("") : p;
          E = de(E, o + P), w += o;
        }
      }
      if (w) {
        var S = Fe(E >>> 0);
        if (!t.hasNameForId(s, S)) {
          var k = n(w, "." + S, void 0, s);
          t.insertRules(s, S, k);
        }
        l.push(S);
      }
    }
    return l.join(" ");
  }, e;
})(), Kt = /^\s*\/\/.*$/gm, Qt = [":", "[", ".", "#"];
function Jt(e) {
  var r, t, n, s, l = ce, c = l.options, d = c === void 0 ? ce : c, v = l.plugins, m = v === void 0 ? Re : v, E = new Ct(d), w = [], P = /* @__PURE__ */ (function(o) {
    function S(k) {
      if (k) try {
        o(k + "}");
      } catch {
      }
    }
    return function(k, b, T, C, u, z, J, q, ee, ne) {
      switch (k) {
        case 1:
          if (ee === 0 && b.charCodeAt(0) === 64) return o(b + ";"), "";
          break;
        case 2:
          if (q === 0) return b + "/*|*/";
          break;
        case 3:
          switch (q) {
            case 102:
            case 112:
              return o(T[0] + b), "";
            default:
              return b + (ne === 0 ? "/*|*/" : "");
          }
        case -2:
          b.split("/*|*/}").forEach(S);
      }
    };
  })((function(o) {
    w.push(o);
  })), x = function(o, S, k) {
    return S === 0 && Qt.indexOf(k[t.length]) !== -1 || k.match(s) ? o : "." + r;
  };
  function p(o, S, k, b) {
    b === void 0 && (b = "&");
    var T = o.replace(Kt, ""), C = S && k ? k + " " + S + " { " + T + " }" : T;
    return r = b, t = S, n = new RegExp("\\" + t + "\\b", "g"), s = new RegExp("(\\" + t + "\\b){2,}"), E(k || !S ? "" : S, C);
  }
  return E.use([].concat(m, [function(o, S, k) {
    o === 2 && k.length && k[0].lastIndexOf(t) > 0 && (k[0] = k[0].replace(n, x));
  }, P, function(o) {
    if (o === -2) {
      var S = w;
      return w = [], S;
    }
  }])), p.hash = m.length ? m.reduce((function(o, S) {
    return S.name || me(15), de(o, S.name);
  }), 5381).toString() : "", p;
}
var ft = xe.createContext();
ft.Consumer;
var dt = xe.createContext(), er = (dt.Consumer, new ut()), Ye = Jt();
function tr() {
  return Ve(ft) || er;
}
function rr() {
  return Ve(dt) || Ye;
}
var nr = (function() {
  function e(r, t) {
    var n = this;
    this.inject = function(s, l) {
      l === void 0 && (l = Ye);
      var c = n.name + l.hash;
      s.hasNameForId(n.id, c) || s.insertRules(n.id, c, l(n.rules, c, "@keyframes"));
    }, this.toString = function() {
      return me(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Ye), this.name + r.hash;
  }, e;
})(), or = /([A-Z])/, ar = /([A-Z])/g, sr = /^ms-/, ir = function(e) {
  return "-" + e.toLowerCase();
};
function ot(e) {
  return or.test(e) ? e.replace(ar, ir).replace(sr, "-ms-") : e;
}
var at = function(e) {
  return e == null || e === !1 || e === "";
};
function he(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var s, l = [], c = 0, d = e.length; c < d; c += 1) (s = he(e[c], r, t, n)) !== "" && (Array.isArray(s) ? l.push.apply(l, s) : l.push(s));
    return l;
  }
  if (at(e)) return "";
  if (Ue(e)) return "." + e.styledComponentId;
  if (Se(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !r) return e;
    var v = e(r);
    return process.env.NODE_ENV !== "production" && je.isElement(v) && console.warn(De(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), he(v, r, t, n);
  }
  var m;
  return e instanceof nr ? t ? (e.inject(t, n), e.getName(n)) : e : Me(e) ? (function E(w, P) {
    var x, p, o = [];
    for (var S in w) w.hasOwnProperty(S) && !at(w[S]) && (Array.isArray(w[S]) && w[S].isCss || Se(w[S]) ? o.push(ot(S) + ":", w[S], ";") : Me(w[S]) ? o.push.apply(o, E(w[S], S)) : o.push(ot(S) + ": " + (x = S, (p = w[S]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || x in bt ? String(p).trim() : p + "px") + ";"));
    return P ? [P + " {"].concat(o, ["}"]) : o;
  })(e) : e.toString();
}
var st = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function cr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return Se(e) || Me(e) ? st(he(tt(Re, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : st(he(tt(e, t)));
}
var it = /invalid hook call/i, _e = /* @__PURE__ */ new Set(), ur = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var s = !0;
      console.error = function(l) {
        if (it.test(l)) s = !1, _e.delete(t);
        else {
          for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++) d[v - 1] = arguments[v];
          n.apply(void 0, [l].concat(d));
        }
      }, vt(), s && !_e.has(t) && (console.warn(t), _e.add(t));
    } catch (l) {
      it.test(l.message) && _e.delete(t);
    } finally {
      console.error = n;
    }
  }
}, lr = function(e, r, t) {
  return t === void 0 && (t = ce), e.theme !== t.theme && e.theme || r || t.theme;
}, fr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, dr = /(^-|-$)/g;
function Ie(e) {
  return e.replace(fr, "-").replace(dr, "");
}
var pr = function(e) {
  return Fe(lt(e) >>> 0);
};
function Ae(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Le = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, hr = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function mr(e, r, t) {
  var n = e[t];
  Le(r) && Le(n) ? pt(n, r) : e[t] = r;
}
function pt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var s = 0, l = t; s < l.length; s++) {
    var c = l[s];
    if (Le(c)) for (var d in c) hr(d) && mr(e, c[d], d);
  }
  return e;
}
var ht = xe.createContext();
ht.Consumer;
var $e = {};
function mt(e, r, t) {
  var n = Ue(e), s = !Ae(e), l = r.attrs, c = l === void 0 ? Re : l, d = r.componentId, v = d === void 0 ? (function(b, T) {
    var C = typeof b != "string" ? "sc" : Ie(b);
    $e[C] = ($e[C] || 0) + 1;
    var u = C + "-" + pr("5.3.6" + C + $e[C]);
    return T ? T + "-" + u : u;
  })(r.displayName, r.parentComponentId) : d, m = r.displayName, E = m === void 0 ? (function(b) {
    return Ae(b) ? "styled." + b : "Styled(" + De(b) + ")";
  })(e) : m, w = r.displayName && r.componentId ? Ie(r.displayName) + "-" + r.componentId : r.componentId || v, P = n && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c, x = r.shouldForwardProp;
  n && e.shouldForwardProp && (x = r.shouldForwardProp ? function(b, T, C) {
    return e.shouldForwardProp(b, T, C) && r.shouldForwardProp(b, T, C);
  } : e.shouldForwardProp);
  var p, o = new Zt(t, w, n ? e.componentStyle : void 0), S = o.isStatic && c.length === 0, k = function(b, T) {
    return (function(C, u, z, J) {
      var q = C.attrs, ee = C.componentStyle, ne = C.defaultProps, se = C.foldedComponentIds, X = C.shouldForwardProp, K = C.styledComponentId, te = C.target;
      process.env.NODE_ENV !== "production" && He(K);
      var H = (function(A, a, N) {
        A === void 0 && (A = ce);
        var f = ae({}, a, { theme: A }), L = {};
        return N.forEach((function(I) {
          var O, i, V, U = I;
          for (O in Se(U) && (U = U(f)), U) f[O] = L[O] = O === "className" ? (i = L[O], V = U[O], i && V ? i + " " + V : i || V) : U[O];
        })), [f, L];
      })(lr(u, Ve(ht), ne) || ce, u, q), ue = H[0], Q = H[1], Z = (function(A, a, N, f) {
        var L = tr(), I = rr(), O = a ? A.generateAndInjectStyles(ce, L, I) : A.generateAndInjectStyles(N, L, I);
        return process.env.NODE_ENV !== "production" && He(O), process.env.NODE_ENV !== "production" && !a && f && f(O), O;
      })(ee, J, ue, process.env.NODE_ENV !== "production" ? C.warnTooManyClasses : void 0), le = z, oe = Q.$as || u.$as || Q.as || u.as || te, fe = Ae(oe), g = Q !== u ? ae({}, u, {}, Q) : u, h = {};
      for (var y in g) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? h.as = g[y] : (X ? X(y, Ze, oe) : !fe || Ze(y)) && (h[y] = g[y]));
      return u.style && Q.style !== u.style && (h.style = ae({}, u.style, {}, Q.style)), h.className = Array.prototype.concat(se, K, Z !== K ? Z : null, u.className, Q.className).filter(Boolean).join(" "), h.ref = le, yt(oe, h);
    })(p, b, T, S);
  };
  return k.displayName = E, (p = xe.forwardRef(k)).attrs = P, p.componentStyle = o, p.displayName = E, p.shouldForwardProp = x, p.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Re, p.styledComponentId = w, p.target = n ? e.target : e, p.withComponent = function(b) {
    var T = r.componentId, C = (function(z, J) {
      if (z == null) return {};
      var q, ee, ne = {}, se = Object.keys(z);
      for (ee = 0; ee < se.length; ee++) q = se[ee], J.indexOf(q) >= 0 || (ne[q] = z[q]);
      return ne;
    })(r, ["componentId"]), u = T && T + "-" + (Ae(b) ? b : Ie(De(b)));
    return mt(b, ae({}, C, { attrs: P, componentId: u }), t);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = n ? pt({}, e.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (ur(E, w), p.warnTooManyClasses = /* @__PURE__ */ (function(b, T) {
    var C = {}, u = !1;
    return function(z) {
      if (!u && (C[z] = !0, Object.keys(C).length >= 200)) {
        var J = T ? ' with the id of "' + T + '"' : "";
        console.warn("Over 200 classes were generated for component " + b + J + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, C = {};
      }
    };
  })(E, w)), p.toString = function() {
    return "." + p.styledComponentId;
  }, s && Ot(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
}
var ze = function(e) {
  return (function r(t, n, s) {
    if (s === void 0 && (s = ce), !je.isValidElementType(n)) return me(1, String(n));
    var l = function() {
      return t(n, s, cr.apply(void 0, arguments));
    };
    return l.withConfig = function(c) {
      return r(t, n, ae({}, s, {}, c));
    }, l.attrs = function(c) {
      return r(t, n, ae({}, s, { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) }));
    }, l;
  })(mt, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
  ze[e] = ze(e);
}));
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const yr = ze.div`
  color: pink;
`;
function Sr() {
  return /* @__PURE__ */ Ge(yr, { children: /* @__PURE__ */ Ge("h1", { "data-testid": "common-ui-title", children: "Welcome to CommonUi!" }) });
}
export {
  Sr as CommonUi
};
