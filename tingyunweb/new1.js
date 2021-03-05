/*AGENT_VERSION=3.2.2_0302*/
"use strict";

function _defineProperty(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

function _typeof(t) { "@babel/helpers - typeof"; return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
window.TINGYUN = function(t, e) {
    if (/(MSIE [0-8].\d+)/.test(navigator.userAgent)) { return; }

    function n(t) { return JSON.parse(t) }

    function r(t) { return JSON.stringify(t) }

    function a(t) { var e = !!t && "length" in t && t.length,
            n = _typeof(t); return "function" === n ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t }

    function i(t, e, n) { var r, i = 0; if (t)
            if (a(t))
                for (r = t.length; r > i && e.call(t[i], t[i], i) !== !1; i++);
            else
                for (i in t)
                    if ((n || Object.prototype.hasOwnProperty.call(t, i)) && e.call(t[i], t[i], i) === !1) break;
        return t }

    function o(t) { return function(e) { return "Array" === t && Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object " + t + "]" } }

    function s(t) { return new Function("return " + t)() }

    function c(t) { switch (_typeof(t)) {
            case "object":
                if (!t) return null; if (t instanceof Array) { var e = la.call(t); return i(e, function(t, n) { e[n] = c(t) }), "[" + e.join(",") + "]" } if (t instanceof Date) return t.getTime().toString(); var n = ""; return i(t, function(t, e) { sa(t) || (n += c(e) + ":" + c(t) + ",") }), n && (n = n.substr(0, n.length - 1)), "{" + n + "}";
            case "string":
                return da + t.replace(pa, "\\$1").replace(ha, "\\n") + da;
            case "number":
                return isNaN(t) ? null : t;
            case "boolean":
                return t;
            case "function":
                return c(t.toString());
            case "undefined":
            default:
                return '"undefined"' } }

    function u(t) { return t && ia(t) ? ra(t) : t }

    function f(t, e, n, r) { return t.addEventListener(e, n, r) }

    function l(t, e, n) { return t.attachEvent("on" + e, n) }

    function d(t, e) { return Function.prototype.apply.apply(t, e) }

    function p(t, e) { return function() { t.apply(e, arguments) } }

    function h(t) { return ga ? ga(t) : t }

    function m(t) { var e = arguments.length; if (2 > e || !t) return t; var n = la.call(arguments, 1); return i(n, function(e) { i(e, function(e, n) { t[n] = e }) }), t }

    function v(t, e) { return t ? e ? t.replace(/\{(\w+.?\w+)\}/g, function(t, n) { return e[n] || "" }).replace(/\{(\d+)\}/g, function(t, n) { return e[n] || "" }) : t : "" }

    function g(t, e, n) { var r; if (null == t) return -1; var a = Object(t),
            i = a.length >>> 0; if (0 === i) return -1; var o = +n || 0; if (Math.abs(o) === 1 / 0 && (o = 0), o >= i) return -1; for (r = Math.max(o >= 0 ? o : i - Math.abs(o), 0); i > r;) { if (r in a && a[r] === e) return r;
            r++ } return -1 }

    function y(t, e) { var n = null == t ? 0 : t.length; if (!n) return -1; for (var r = n; r--;)
            if (t[r] === e) return r;
        return r }

    function _(t) { return setTimeout(t, 0) }

    function x(t) { return setTimeout(t, 0, { __ty_ignore: !0 }) }

    function b() {}

    function E() { var t = window && window.performance; return t && t.timing && t.timing.navigationStart && t.now ? Math.round(t.timing.navigationStart + t.now()) : +new Date }

    function S(t) { return function() { if (null !== t) { var e = t;
                t = null, e.apply(this, arguments) } } }

    function T(e) { return e ? ia(e) ? e.length : t.ArrayBuffer && e instanceof ArrayBuffer ? e.byteLength : t.Blob && e instanceof Blob ? e.size : e.length ? e.length : 0 : 0 }

    function C() { this.events = {} }

    function w(t, e) { return setTimeout(t, e || 0, { __ty_ignore: !0 }) }

    function A(t, e) { Es[t] = e }

    function R() { return 0 === Ss.cpRemain.ajax && 0 === Ss.cpRemain.iframe }

    function O(t) { D(t, Ts) }

    function P(t) { D(t, Cs) }

    function D(t, e) { var n = "ok"; return t ? void e.push(t) : n = e.length ? e.join("\n") : n }

    function N(t) {
        function e(t, e, r) { var a = r || "log",
                i = n[t] || (n[t] = {});
            i[a] = i[a] || "", i[a] += e } var n = {},
            r = O(); if (e("Status", r, "ok" !== r), e("Debug", P()), i(ws, function(t, n) { e("Timeline", n + ": " + t.toString()) }), !t && As) console.log("[TingYun Agent Diagnosis]\n"), i(n, function(t, e) { var n = console[e];
            i(n, function(t, e) { console[e](t) }) });
        else { if (t !== Da) return aa(n);
            fs.href = fs.href + "#" + aa(n) } }

    function I(t, e) { this.flags = 0, sa(t.create) && (this.create = t.create, this.flags |= Rs), sa(t.before) && (this.before = t.before, this.flags |= Os), sa(t.after) && (this.after = t.after, this.flags |= Ps), sa(t.error) && (this.error = t.error, this.flags |= Ds), this.data = e }

    function k(t, e) { if (!Is) { if (!ca(t) || !t) throw new TypeError("callbacks arguments must be an object"); return Is = new I(t, e) } }

    function j(t) { var e = Is.data; if (0 !== (Is.flags & Rs)) { var n = Is.create(Is.data);
            void 0 !== n && (e = n) } return function r() { 0 !== (Is.flags & Os) && Is.before(this, e); var n = r;
            n._ && (n._ = 1); try { var a = t.apply(this, arguments) } catch (i) { throw 0 !== (Is.flags & Ds) && Is.error(e, i), i } return 0 !== (Is.flags & Ps) && Is.after(this, e), a } }

    function q(t) { return function() { var e; try { e = t.apply(this, arguments) } finally { Ss.context = null } return e } }

    function H(t) { return !Is || Is.flags <= 0 ? t : j(t) }

    function L(t) { return q(H(t)) }

    function M(t, e, n) { if (t && n && sa(n)) { var r = t[e]; if (!r || !r._wrapped) { var a = n(r, e); return a && (a._wrapped = !0), t[e] = a, a } } }

    function B(t) {
        function e() {} return e.prototype = t, new e }

    function U() { this.id = null, this.active = null, this._set = [] }

    function F() { var t = new U; return t.id = k({ create: function() { return t.active }, before: function(e, n) { n && t.enter(n) }, after: function(e, n) { n && t.exit(n) }, error: function(e, n) { if (e) { try { var r = "moduleId";
                        n[r] = e[r] } catch (a) {}
                    t.exit(e) } } }), t }

    function z() { return Ls || (ks = F(), Ls = !0), ks }

    function Y(t) { try { return u(t) } catch (e) { O(e && e.message) } return null }

    function G() { return Gs }

    function K(t) { return ia(t) || (t = aa(t)), t }

    function W(t, e) { e = e || b; var n = new Image;
        va(n, Ca, function() {
            ("loaded" == n.readyState || 4 == n.readyState) && e(null) }, !1), va(n, ba, function() { e(null) }, !1), va(n, xa, function() { e(xa) }, !1), n.src = t }

    function J(t, e) { var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = new XDomainRequest;
        i[Na] = !0, i.open(Ws, n), i.onload = function() { a(null, i.responseText), e() }, i.onerror = function(t) { a(t), e() }, Ks(function() { i.send(K(r)) }) }

    function V(t, e) { var n = t.url,
            r = t.data,
            a = t.header,
            i = t.callback,
            o = S(i),
            s = new us;
        s[Na] = !0, s.overrideMimeType && s.overrideMimeType("text/html"), s.onreadystatechange = function() { 4 == s.readyState && 200 == s.status && (o(null, s.responseText), e()) }, s.onerror = function() { o(), e() }; try { s.open(Ws, n, !0); for (var c in a) s.setRequestHeader(c, a[c]);
            s.send(K(r)) } catch (u) { e() } }

    function X(t, e) { var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = ls.sendBeacon(n, K(r));
        i && (a && a(), e()) }

    function $(t) { this.size = t || 100, this.queue = [], this.running = !1 }

    function Q() { Js = Fs = V, Vs = !1 }

    function Z(t) { zs = new $(t) }

    function tt(t) { zs.add(t) }

    function et(t) { var e = t || new Date,
            n = e.getFullYear() + "-",
            r = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
            a = e.getDate() + " "; return n + r + a }

    function nt(t, e, n) { if (null == t[e] || oa(t[e])) oa(t[e]) ? t[e].push(n) : t[e] = n;
        else { var r = t[e];
            t[e] = [r], t[e].push(n) } }

    function rt(t) { return t.send_protocol ? t.send_protocol : Qs !== Zs && /^https/i.test(t && t.protocol || Qs) ? "https:" : Zs }

    function at(t) { if (!t || !ia(t)) return ""; var e, n = t.indexOf("?"); return n >= 0 && (e = t.substring(n + 1)), e }

    function it(t) { var e = at(t),
            n = ut(e); return { queryObj: n, queryString: e } }

    function ot(t) { var e = at(t); return ut(e) }

    function st(t) { return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? ot(t) : {} }

    function ct(t) { var e = {}; return t = t || "", ia(t) && t ? e = ut(t) : e }

    function ut(t) { var e = {}; return t && i(t.split("&"), function(t) { var n = t.split("="),
                r = ft(n[0]),
                a = ft(n[1]); if (ia(a)) { var i = Y(a);
                null != i && (a = i) }
            r && null != a && nt(e, r, a) }), e }

    function ft(t) { try { return decodeURIComponent(t) } catch (e) {} return null }

    function lt(t) { var e = []; return i(t, function(t, n) { var r = h(n) + "=" + h(t);
            e.push(r) }), e.join("&") }

    function dt(t, e) { var n = lt(e); return t += (t.indexOf("?") > 0 ? "&" : "?") + n }

    function pt(t, e, n) { var r = null; return t && e && (r = $s + "//" + t + e, n && (r += "?" + lt(n))), r }

    function ht(t) { $s = rt(t) }

    function mt() { var t = js(fo); return t ? t.split(ho) : null }

    function vt(t) { t && 3 === t.length && qs(fo, t.join(ho)) }

    function gt() { var t = yt();
        _t(t) }

    function yt() { var t = E(),
            e = [_a(), t, t]; return vt(e), e }

    function _t(t) { t[0] && (ys.sid = t[0]), t[1] && (ys.__s = +t[1]) }

    function xt() { var t = E(),
            e = mt();
        bt(e) ? gt() : (e[2] = t, vt(e)) }

    function bt(t) { return !t || 3 !== t.length || E() - +t[2] > po }

    function Et() { var t = js(lo); return t ? t : qs(lo, _a()) }

    function St() { return js(uo) }

    function Tt(t) { if (null != t) { var e = St();
            null != e && t !== e && gt(), qs(uo, t) } }

    function Ct(t) { null != t && qs(lo, t) }

    function wt() { var t = { did: Et() },
            e = St(); return e && (t.uid = e), t }

    function At(t, e) { var n; return t && (n = !0, i(t, function() { return n = !1 }, e)), !!n }

    function Rt(t) { var e = {},
            n = {},
            r = {},
            a = {},
            i = it(t),
            o = i.queryObj,
            s = i.queryString; return o && (e = Ot(o, vs.bizIdsRules[ka], vs.bizIdsRules[Ha]), n = Ot(o, vs.customParamsRules[ka], vs.customParamsRules[Ha]), r = Ot(o, vs.requestParamKeys[La], vs.requestParamKeys[Ma]), a[Ba] = It(o, vs.optCustomParamRules[Ba], !0)), { bizIdParams: e, params: n, requestParams: r, optCustomParams: Nt(a), operaAllParam: s } }

    function Ot(t, e, n) { var r = {}; return t && e && e.length && e.length > 0 && i(e, function(e) { var n = t[e];
            null != n && nt(r, e, n) }), t && n && n.length && n.length > 0 && i(n, function(e) { var n = Pt(Ka, e),
                a = n(t);
            null != a && nt(r, e, a) }), r }

    function Pt(t, e) { var n = t + "." + e; if (tc[n]) return tc[n]; var r = (e || "").split("."),
            a = "";
        e && 0 !== e.indexOf("[") && (a = "."); var o = t;
        i(r, function(t, e) { 0 === e && (o += a), o += t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? "['" + t + "']" : (e > 0 ? "." : "") + t }); var s; try { s = new Function(t, "try{return " + o + ";}catch(e){}return null;") } catch (c) { s = b } return tc[n] = s, s }

    function Dt(t) { return t += "", t && t.substr(0, 128) || "" }

    function Nt(t) { var e = {}; return i(t, function(t, n) { At(t) || (e[n] = t) }), e }

    function It(t, e, n) { var r = {}; return t && e && e.length && e.length > 0 && i(e, function(e) { var a = t[e]; if (null != a) nt(r, e, a);
            else if (n) { var i = Pt(Ka, e);
                a = i(t), null != a && nt(r, e, a) } }), r }

    function kt(t, e, n) { n || (n = e && window[e] || cs.cookie || ""); var r = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return r ? r[3] : null }

    function jt(t, e, n, r, a) { var i = t + "=" + e; if (n) { var o = new Date;
            o.setTime(o.getTime() + 1e3 * n), i += ";expires=" + o.toGMTString() }
        r && (i += ";path=" + r), (a || cs).cookie = i }

    function qt(t) { var e, n; if (t)
            if (0 === t.indexOf($a)) { var r = t.substring($a.length); try { n = nc.decode(r), e = Y(n) } catch (a) {} } else { try { n = decodeURIComponent(t), e = Y(n) } catch (a) {} if (!e) try { n = decodeURIComponent(n), e = Y(n) } catch (a) { O(a && a.message) } }
        return e }

    function Ht(t) { var e = {}; return t && ca(t) && (e.s_id = t.id, e.s_tname = t.tname, e.s_tid = t.tid, e.s_rid = t.rid, e.s_duration = t.duration, "user" in t && (e.s_user = t.user, Tt(t.user)), "bid" in t && (e.s_bid = Dt(t.bid)), "ber" in t && (e.s_ber = t.ber), "isError" in t && (e.s_isError = t.isError)), e }

    function Lt(t) { if (!t.agent) { var e = window._ty_rum; if (e && e.agent) t.agent = e.agent;
            else { var n = kt(Ja, Wa);
                n && (t.agent = qt(n), jt(Ja, "", -1e3, "/")) } } return t.agent }

    function Mt(t) { t = t || {}, this._contexts = t.contexts || null, this._name = t.name }

    function Bt() { Ss.scope || (Ss.scope = new Mt({ name: "ROOT" })) }

    function Ut() { Bt(), Ss.scope.setContext.apply(Ss.scope, arguments) }

    function Ft() { Bt(), Ss.scope.setExtraContext.apply(Ss.scope, arguments) }

    function zt(t, e, n) { if (t && e) { n || (n = "scope"); var r = e ? e.getData() : null; return r && (t[n] = r), t } }

    function Yt(t, e) { return pt(gs.beacon, t, Gt(e)) }

    function Gt(t) { var e = wt(); return m({}, ys, e, t || {}, vs.baseInfo, Bs || {}) }

    function Kt(t) { return t in gs ? gs[t] : !0 }

    function Wt(t) { var e = {}; return i(t, function(t) { t && g(e[t.type] || [], t.key) < 0 && (e[t.type] = e[t.type] || []).push(t.key) }), e }

    function Jt(t) { var e = {}; if (t) { var n = [zo, Yo, Go, Ko, Wo];
            i(t.split(""), function(t, r) { e[n[r]] = "1" === t }) } return e }

    function Vt(e) { var n = {}; if (sa(e)) { var r = {};
            e(r), n = r.server } else n = e;
        Bt(), t[Qa] || (t[Qa] = { hook: {} }), m(ms.server, hs, n || {}, t[Qa].config || {}), m(ms.appConf, { bizIdsRules: Wt(gs.bizId_rule), customParamsRules: Wt(gs.opt_param_rule), requestParamKeys: Wt(gs.request_param_keys), corsDomains: gs.cors_domains || [], optCustomParamRules: Wt(gs.opt_custom_param_rule), ignoreNoFilePropError: Kt("ignore_err"), debuggable: Kt("debug"), sessionTimeout: gs.session_timeout || po, collectAllParam: Jt(gs.collect_all_param), routerEnable: Xt(gs.router_enable), lcpEnable: Xt(gs.lcp_enable) }), i(ac, function(e) { gs[e] && (vs.baseInfo[e] = gs[e], t[Pa][e] = gs[e]) }), m(ys, wt()); var a = mt(); if (bt(a) && (a = yt()), _t(a), ms.server.event_timeout || (ms.server.event_timeout = ei), gs.appKey && Q(), gs.apm_arms) { gs.apm_headers || (gs.apm_headers = []); var o = G() ? gs.apm_headers.indexOf(Co) < 0 : g(gs.apm_headers, Co) < 0;
            o && gs.apm_headers.push(Co) }
        ht(gs); var s = Lt(ms);
        vs.pageServerData = Ht(s), Z(gs.req_capacity) }

    function Xt(t) { return null == t ? !0 : 1 == t }

    function $t(e) { try { var n; if (!e || !e.data || 0 !== e.data.indexOf("_TINGYUN")) return; if (n = e.data.replace("_TINGYUN", ""), Y(n)) { var r = Y(n); if ("gather" === r.type && "APM" === r.fromJS && !t[To]) { ps.isGather = !0; var a = e.origin,
                        i = cs.getElementsByTagName("head")[0],
                        o = cs.createElement("script");
                    o.type = "text/javascript", o.src = a + "/assets/lib/gather/path-gather.min.js?version=" + et(new Date), i.appendChild(o) } } } catch (s) {} }

    function Qt() { var t = this;
        t.xhrs = {}, t.errs = [], C.call(t) }

    function Zt(t) { sc && t() }

    function te(t) { return function() { sc && t.apply(this, arguments) } }

    function ee() { sc = !1 }

    function ne(t) { return t.loadEventEnd || t._end }

    function re(n, r) { var a = r.performance || {},
            o = a.timing,
            s = o && o.navigationStart ? o.navigationStart : e,
            c = 0; if (bs[as] && bs[as] > 0 ? (c = bs[as], n.__fp = dc) : a.getEntriesByName && o ? (c = o.domLoading, i(bs.resources, function(t) { var e = a.getEntriesByName(t); if (1 === e.length) { var n = e[0].responseEnd;
                    n > c && (c = n) } }), c -= s, n.__fp = mc) : t.TINGYUN && t.TINGYUN[Po] && (c = t.TINGYUN[Po] - s, 0 > c && (c = 0), n.__fp = vc), !c || 0 >= c) { if (r.chrome && r.chrome.loadTimes) { var u = r.chrome.loadTimes();
                u && u.firstPaintTime && (c = 1e3 * u.firstPaintTime - s, n.__fp = pc) } else o && o.msFirstPaint && (c = o.msFirstPaint - s, n.__fp = hc);
            (!c || 0 >= c) && (c = 0, n.__fp = lc) } return Math.round(c) }

    function ae(n, r) { r = r || {}; var a = r.timing || {},
            o = a.navigationStart || e,
            s = n.fp || 0; if (n.__fs = Ec, bs[is]) s = bs[is], n.__fs = yc;
        else if (bs.lcpStopTime) s = bs.lcpStopTime - o, n.__fs = _c;
        else if (ie()) { var c = bs.imageResources || [],
                u = t.innerHeight,
                f = t.innerWidth;
            u || (u = cs.documentElement.clientHeight), f || (f = cs.documentElement.clientWidth); var l = [];
            c.length > 0 ? i(c, function(t) { se(t.element, u, f) && l.push(t) }) : sa(r.getEntriesByName) && i(cs.querySelectorAll("img"), function(t) { se(t, u, f) && l.push({ element: t }) }); var d = (a.loadEventEnd || oc.loadEventEnd) - o;
            i(l, function(t) { if (t.loadTime) { var e = t.loadTime - o;
                    e > s && (s = e, n.__fs = bc) } else if (t.element && t.element.src) { var a = r.getEntriesByName(t.element.src); if (a.length) { var i = a[0],
                            c = i.responseEnd;
                        i.fetchStart <= d && c > s && (s = c, n.__fs = xc) } } }) } return 0 >= s && (s = n.fp || 0, n.__fs = Ec, 0 >= s && (s = 0, n.__fs = gc)), Math.round(s) }

    function ie(t) { var e = !0,
            n = cs.createElement("img"); return n.getBoundingClientRect || (e = !1), e }

    function oe(t) { if (!t) return !1; if (!gs.fs_resources || 0 === gs.fs_resources.length) return !0; var e = !1; return i(gs.fs_resources, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function se(t, e, n) { return t.src && oe(t.src) && ce(ue(t), e, n) && !fe(t) }

    function ce(e, n, r) { if (e) { var a = t.pageYOffset,
                i = e.top + (0 === a ? 0 : a || cs.scrollTop || 0) - (cs.clientTop || 0); if (i >= n) return !1; var o = e.left; return o >= 0 && r > o } return !1 }

    function ue(t) { if (G()) return sa(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0; var e; try { e = t.getBoundingClientRect ? t.getBoundingClientRect() : void 0 } catch (n) {} return e }

    function fe(t) { return fc.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : le(t) }

    function le(t) { for (; t && 1 === t.nodeType;) { if ("none" === de(t) || "hidden" === t.type) return !0;
            t = t.parentNode } return !1 }

    function de(t) { return t.style && t.style.display }

    function pe(t, n) { var r = n && n.timing || {},
            a = r.navigationStart || e,
            i = 0;
        r && (i = r[Ti] || r.domInteractive || r.domLoading || i), 0 >= i ? (oc.domContentLoadedEventStart ? (i = oc.domContentLoadedEventStart, t.__dr = Cc) : (i = oc._end, t.__dr = wc), 0 >= i && (t.__dr = Sc)) : t.__dr = Tc; var o = i - a; return 0 > o && (o = 0), Math.round(o) }

    function he(n, r) {
        function a(t) { return n[t] > 0 ? n[t] - s : 0 } var o = {},
            s = r ? r.globalStart : e,
            c = (r ? r.window : t, (r ? r.agent : oc) || {}); if (n) { Zt(function() { var t = cc.t = {};
                i(n, function(e, n) { sa(e) || (t[n] = e) }, !0) }), s = n.navigationStart, o = { ns: s, f: a(xi), qs: a(bi), rs: a(Ei), re: a(Si), os: a(Ti), oe: a(Ci), oi: a(wi), oc: a(Ai), ls: a(Ri), le: a(Oi), tus: a(Pi), tue: a(Di) }; var u = a(Ni),
                f = a(Ii),
                l = a(ki),
                d = a(ji),
                p = a(qi),
                h = a(Hi); if (o.cs = p, o.ce = h, o.ds = u, o.de = f, (d - l > 0 || d > 0) && (o.es = l, o.ee = d), 0 == o.le) { var m = ne(c);
                o.ue = m - s }
            c && (c._le = o.ue || o.le); var v;
            v && (o.fp = Math.round(v - s), c.fp = o.fp), n[Li] ? o.sl = a(Li) : o.sl = 0 } else o = { t: s, le: ne(c) - s }; return o.je = c && c.errs && c.errs.length || 0, o }

    function me(e, n) { var r = he(e, n),
            a = n ? n.window : t; if (!a) return {};
        r.fp = re(r, a), r.dr = pe(r, a.performance), r.fs = ae(r, a.performance); var i = {}; return r && (i = { f: r.f, fp: r.fp, fs: r.fs, dr: r.dr, le: r.le, je: r.je }), i }

    function ve() { Ss.enableLCPObserver = !1; try { i(Ss.performanceObserver, function(t) { t && t.disconnect() }) } catch (t) {} }

    function ge() { bs.lcpStopTime = E(), Ss.enableLCPObserver = !1; try { var t = Ss.performanceObserver[is];
            t && t.disconnect() } catch (e) {} }

    function ye() { return zt({ optCustomParam: Ss.opt_custom_param }, Ss.scope) }

    function _e(t) { return t || (t = ye()), "".concat(hi).concat(aa(t)) }

    function xe(t, e) { if (t) { e = e || {}; var n = be(t); if (n) try { var r = n + aa(t),
                    a = [r];
                a.unshift(e.commonActionInfoMessage ? e.commonActionInfoMessage : _e()); var i = a.join("\n"),
                    o = { ps: e.crossPage || n === pi ? 1 : 0 };
                m(o, e.query || {}), oc.emit("send", "/action", o, i, function() { t.type === oi && (oc.xhrs = oc.errs = null, ve()), e.cb && e.cb() }, e.url) } catch (s) {} } }

    function be(t) { var e = ""; return t.type === ni ? e = ui : t.type === ri ? e = fi : t.type === ii ? e = di : t.type === ai ? e = li : t.type === oi ? e = pi : t.type === ci && (e = mi), e }

    function Ee(t, e) { for (var n = E(), r = e.length - 1; r >= 0; r--) { var a = e[r];
            a.type === ni || a.end || (a.end = n), e[r - 1] && (e[r - 1].items = [a]); var i = void 0;
            i = a.start && a.end && a.end - a.start > gs.event_timeout ? _i : a.type === ni ? e[r + 1] && e[r + 1].state || yi : yi, a.state = i }
        t.data = e[0], t.end = n }

    function Se(t) { var e = Ss.cpParent; if (e) { if (t && (Ss.recordingCpActions = !1), !R()) return void(Ss.tryEndCpActionsFailed = !0); var n = e.action,
                r = e.data,
                a = e.commonActionInfo,
                o = e.url; if (n && r && 0 !== r.length) { var s = [];
                i(Ss.cpActions, function(t) { t.data && (t.data.crossPage = !0), s.push(t.data) }), r[r.length - 1].items = s, Ee(n, r), n.data && (n.data.range = Uo); var c = _e(m(a || {}, zt({ pageParam: Gt(), cpOptCustomParam: Ss.opt_custom_param }, Ss.scope, "cpScope")));
                xe(n, { commonActionInfoMessage: c, url: o, crossPage: !0 }) } } }

    function Te(t) { if (t) { var e = t.action,
                n = t.data;
            e && n && 0 !== n.length && (Ee(e, n), xe(e)) } }

    function Ce() { var t = {}; return i(Ac, function(e) { t[e] = { current: 0, children: 0 } }), t }

    function we(t, e) { i(t, function(t) { t.cid === e.id && (t.items = e.items || []) }) }

    function Ae(t, e) { i(t, function(t) { i(e, function(e) { t.cid === e.id && (t.state || (t.state = e.state), t.items = e.items || []) }) }), i(e, function(t) { Ae(t.items, t.children) }) }

    function Re(t, e, n, r, a, i) { i = i || {}, this.id = ++Ss.uniqueId, this.parent = t || null, this.children = [], this.name = e || "", this.type = n || ni, this.subType = this.type === ni ? r || "click" : r, this.items = [], this.remain = Ce(), this.s = i.s || E(), this.e = null, this.data = a, this.state = gi, this.crossPage = i.crossPage || !1; var o = this;
        null == this.parent && (this.i = w(function() { o.timeout() }, gs.event_timeout)), this.closed = !1, this.isTimeout = !1, this.cleared = !1, this.stateChanged = !1, this.actionCount = { ajax: n === ri ? 1 : 0, iframe: n === ii ? 1 : 0 }, this.sent = !1, this.speBinded = !1, this.spe = null, this.waitingSpeEnd = !1, this.waitingSpeTimer = null, null != this.parent && this.parent.children.push(this), this.eventData = null }

    function Oe(e, n) { return function(r) { if (t[Qa].hook && t[Qa].hook.eventCb && Le(r)) { var a = { originalCallback: e, eventHandlerType: n }; return t[Qa].hook.eventCb.call(this, arguments, a) } return e.apply(this, arguments) } }

    function Pe(t, e, n) { return n === Pc ? Oe(t, e) : (t.handleEvent = Oe(t.handleEvent, e), t) }

    function De(t) { return sa(t) }

    function Ne(t) { return ca(t) && sa(t.handleEvent) }

    function Ie(t) { var e; return De(t) ? e = Pc : Ne(t) && (e = Dc), { isValid: t && e, listenerType: e } }

    function ke(t) { return function() { var e = arguments[0],
                n = arguments[1],
                r = arguments[2],
                a = !0;
            r && ca(r) && r[Wi] && (a = !1); var i = Ie(n),
                o = i.isValid,
                s = i.listenerType; if (a && Oc.indexOf(e) > -1 && o) { var c; if (n[wo] && n[wo][this]) c = n[wo][this];
                else { var u = Pe(n, Qi, s);
                    s === Pc && (n[wo] || (n[wo] = {}, n[wo][Ao] = 0), n[wo][this] = { listener: u, options: arguments[2] }, n[wo][Ao]++, c = n[wo][this]) }
                c && (c.listener && (arguments[1] = c.listener), c.options && (arguments[2] = c.options)) } return t && t.apply(this, arguments) } }

    function je(t) { return function(e, n) { var r; try { r = t && t.apply(this, arguments) } finally { try { if (n && Oc.indexOf(e) > -1) { var a = n[wo];
                        a && a[this] && a[this].listener && (null != a[this].options ? this.removeEventListener(e, a[this].listener, a[this].options) : this.removeEventListener(e, a[this].listener), a[this] = null, a[Ao]--, a[Ao] <= 0 && (n[wo] = null, delete n[wo])) } } catch (i) {} } return r } }

    function qe() { t.EventTarget && (M(t.EventTarget.prototype, "addEventListener", function(t) { return ke(t) }), M(t.EventTarget.prototype, "removeEventListener", function(t) { return je(t) })) }

    function He() { Object.getOwnPropertyDescriptor && Object.defineProperty && Oc.forEach(function(e) { var n = "on" + e,
                r = Object.getOwnPropertyDescriptor(t.HTMLElement.prototype, n),
                a = r.get,
                i = r.set;
            Object.defineProperty(t.HTMLElement.prototype, n, { get: function() { return a.apply(this, arguments) }, set: function() { var t = arguments[0];
                    t && (arguments[0] = Pe(t, Zi, Pc)), i && i.apply(this, arguments) }, configurable: !0, enumerable: !0 }) }) }

    function Le(e) { return e && e.target instanceof t.HTMLElement && e.currentTarget instanceof t.HTMLElement }

    function Me(t) { return Rc.call(t) }

    function Be(t) { t = t || {}, this._capacity = t.capacity || 10, this._cache = {}, this._cacheKeys = [], this._size = 0 }

    function Ue(t) { return !!t.match(Ue.regex) }

    function Fe(t) { return t && t.substr(0, 256) || "" }

    function ze(t) { try { if (!t) return ""; for (var e = [], n = t.parentNode, r = function() { var r = t.tagName,
                        a = void 0;
                    a = n.children; var i = void 0;
                    i = a ? 1 === [].filter.call(a, function(t) { return t.tagName === r }).length ? r : "".concat(r, ":nth-child(").concat(1 + [].indexOf.call(a, t), ")") : r; var o = t.id ? "#".concat(t.id) : "",
                        s = t.className;
                    ia(s) && (s = Me(s)); var c = s ? s.split(" ").filter(function(t) { return Me(t) }).map(function(t) { return ".".concat(t) }).join("") : "";
                    e.unshift("".concat(i).concat(o).concat(c)), t = n, n = t.parentNode }; n;) r(); return "".concat(e.join(" > ")).toLowerCase() } catch (a) {} }

    function Ye(t) { return !t.isTrusted || null != t.pointerType && !t.pointerType }

    function Ge(t, e, n) { var r = t.target,
            a = r.nodeName,
            i = r.id,
            o = r.className,
            s = r.title,
            c = r.value,
            u = r.innerText,
            f = a + i,
            l = Ye(t),
            d = { type: ni, id: i, nodeName: a, className: o, title: s, value: c, text: a === ro ? "" : Fe(u), path: ze(t.target), trigger: l ? Mo : Lo, range: Bo },
            p = t[Ji]; if (p || (p = _a(), t[Ji] = p), d.eventId = p, l) { var h = t.timeStamp && E();
            Hc && Math.abs(h - Hc.timestamp) <= kc && (d.refId = Hc.eventId) } else Hc = { timestamp: t.timeStamp && E(), eventId: d.eventId }; if (eo === a) { var m = t.target.getAttribute("src");
            m && !Ue(m) && (d.src = m) } if (no === a) { var v = t.target.getAttribute("href");
            v && (d.href = v) } return d.eventHandlerType = e, Re.createEvent(null, f, ni, t.type || Vi, d, n) }

    function Ke(t, e) { Ss.context = Ge(t, e) }

    function We() { var t = Ss.context;
        t && t.canEnd() && t.end(), Ss.context = null }

    function Je(t, e) { var n = e.originalCallback,
            r = e.eventHandlerType,
            a = t[0],
            i = !(a && a.target && Nc.indexOf(a.type) > -1); if (!i) try { Ke.call(this, a, r) } catch (o) {}
        var s; try { s = n.apply(this, t) } finally { if (!i) try { Ss.context && !Ss.context.canEnd({ ignoreFields: [ai] }) && (a[Ki] = !0), We.apply(this) } catch (o) {} } return s }

    function Ve() { i(Nc, function(t) { document.addEventListener(t, function(t) { jc.length >= Bi && jc.shift(), jc.push(t) }, _defineProperty({ capture: !0 }, Wi, !0)) }) }

    function Xe(t) { try { return 13 === (t + "").split(".")[0].length } catch (e) {} return !1 }

    function $e(n) { var r = t.performance && t.performance.timing ? t.performance.timing.navigationStart : e,
            a = n.timeStamp; return a = a ? Xe(a) ? a : Math.round(n.timeStamp + r) : E() }

    function Qe(t) { var e = jc.filter(function(t) { return !t[Ki] }),
            n = e[e.length - 1]; if (n) { var r = $e(n); if (Math.abs(r - t) < Ic) { var a; return n[Ji] && (a = qc.get(n[Ji])), a || (a = Ge(n, to, { s: r }), n[Ji] && qc.put(n[Ji], a)), a } } }

    function Ze(t) { var e = []; try { e = jc.filter(function(e) { return !e[Ki] && e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName }) } catch (n) {} if (e.length > 0) { var r = e[0]; return Ge(r, to, { s: $e(r) }) } }

    function tn() { gs.inline_event_associate_threshold && (Ic = gs.inline_event_associate_threshold), gs.script_event_associate_threshold && (kc = gs.script_event_associate_threshold), t[Qa].hook && (t[Qa].hook.eventCb = Je), !t[Qa].listenerHooked && t.HTMLElement && (qe(), He()), gs.disable_hook_inline_event || Ve() }

    function en(t) { var e = t,
            n = t.xhrs;
        e.hasAjax = n && n.length > 0, delete e.xhrs; var r = { ss: 1 };
        t.type === xo && (r.rs = 1), Re.buildImmediateAction(ni, $i, { type: ni, items: n, spe: e }, { sendOptions: { query: r } }) }

    function nn(t) { if (Mc[t.key]) { var e = Mc[t.key]; if (delete Mc[t.key], e.speBinded) { var n = e.setSpe(t);
                n || (!e.isMeaningfulAction() && e.isNoRemain() ? en(t) : w(function() { e.sent || en(t) }, No)) } } else en(t) }

    function rn(t) { As && console.warn(t || "Event key required!") }

    function an(t) { t = t || {}, this.key = t.key, this.type = t.type || _o; var e = t.timeout || go;
        this.timeout = e, this.status = 1, this.remain = 0, this.xhrs = [], this.s = E(), this.e = null, this.called = this.sent = this.stored = !1, t.debugInfo && (this.debugInfo = t.debugInfo) }

    function on(t) { var e = null;
        e = Ss.context ? Re.getEventRootContext(Ss.context) : Qe(t.s), null != e && (Mc[t.key] = e, e.speBinded = !0) }

    function sn(t) { t = t || {}; var e = t.key; if (!e) return new rn; if (Lc[e]) return new rn("event " + e + " is executing");
        Lc[e] = !0; var n = Ms.createContext();
        Ms.enter(n); var r = new an(t); return r._end = function() { var t = this;
            t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n) }, r.end = function(t, e) { var r = this; return r.called ? void(As && console.warn("Event " + this.key + "has ended or failed!")) : (r.called = !0, Ms.exit(n), r.status = null != t ? t : 1, void(e || r._end())) }, r.finish = function(t) { var e = this; return e.e = E(), e.i && clearTimeout(e.i), delete Lc[e.key], e }, r.fail = function() { this.end(0) }, r.store = function() { this.end(null, !0), this.refreshEventAndStore(n), this.stored = !0 }, r.i = r.timeout ? w(p(r.fail, r), r.timeout) : null, r.type === xo && on(r), Ms.set("event", r), r }

    function cn(e) { if (t.TINGYUN && t.TINGYUN.inited) { var n = js(mo),
                r = Y(n); if (r && r.start && (e = e || {}, !e.key || r.key === e.key)) { var a = e.timeout; if (a || (a = vo), r.duration = E() - r.start, r.duration > a) return void Hs(mo); var i = t.performance && t.performance.timing; if (i && i.navigationStart && (i.loadEventEnd || i.loadEventStart) && i.navigationStart - r.start >= 0) { var o = { method: "GET", url: document.URL, status: 200, type: ri, subType: oi, startSpeOffset: i.navigationStart - r.start, start: i.navigationStart, __spe: 1, du: (i.loadEventEnd || i.loadEventStart) - i.navigationStart };
                    r.xhrs || (r.xhrs = []), r.xhrs.push(o) } var s = 1;
                e.status && (s = e.status === Eo ? 1 : 0), r.status = s, Hs(mo), nn(r) } } }

    function un(e) { if (!t.TINGYUN || !t.TINGYUN.inited) return new rn("Agent is not inited!");
        e = m({}, { type: yo }, e || {}); var n = sn(e); return e.autoEnd && w(function() { e.status && e.status === So ? n.fail() : n.end() }, e.endDelay || bo), n }

    function fn(t, e) { if (Mc[t]) { var n = Mc[t];
            n.id !== e.id && (e.speBinded = !0, Mc[t] = e) } }

    function ln(e, n) { t.TINGYUN && t.TINGYUN.inited && (ca(n) || (n = {}), e && e.beforeEach && e.afterEach && (vs.routerEnable = !1, e.afterEach(function(e) { var r = e.fullPath; if (r = r ? t.location.origin + r : e.path) { var a = { key: r, type: xo, autoEnd: !0, endDelay: Do, debugInfo: { api: Ho } };
                m(a, n), un(a) } }))) }

    function dn(t, e) { if (t) { var n = t.split("_"),
                r = n[0],
                a = n[1]; "ty" === r && a && A(a, { timestamp: E(), data: e }) } }

    function pn() { var t = cs.getElementsByTagName("img");
        i(t, function(t) { t.complete || t[Ro] || (t[Ro] = !0, va(t, ba, function() { bs.imageResources.push({ loadTime: E(), element: t }) })) }) }

    function hn(t) { var e = cs.createElement("script");
        e.type = "text/javascript"; try { e.appendChild(cs.createTextNode(t)) } catch (n) { e.text = t }
        cs.getElementsByTagName("head")[0].appendChild(e) }

    function mn() {
        function e(t) { try { var e = t.getEntries();
                e && i(e, function(t) { t.entryType === is && Ss.enableLCPObserver ? bs[is] = t.renderTime || t.loadTime : t.entryType === as && t.name === os && (bs[as] = t.startTime) }) } catch (n) {} } if (t.PerformanceObserver) { var n = [as];
            vs.lcpEnable && n.push(is); var r = [],
                a = t.PerformanceObserver.supportedEntryTypes || []; if (i(n, function(t) { a.indexOf(t) > -1 && r.push(t) }), Zt(function() { cc.et = r }), 0 != r.length) try { i(r, function(n) { Ss.performanceObserver[n] = new t.PerformanceObserver(e), Ss.performanceObserver[n].observe({ type: n, buffered: !0 }) }) } catch (o) {} } }

    function vn(e) { mn(), zc.on(ba, S(function() { n(); var t = E();
            Zt(function() { cc.load = t }), e.loadEventEnd = t, clearInterval(Fc) })), i([ba, Ea, Sa, Ta], function(e) { va(t, e, function(t) { Zt(function() {
                    (cc.e[e] || (cc.e[e] = [])).push(E()) }), zc.emit(e, t) }) }); var n = S(function() { var n = E(); if (Zt(function() { cc.end = n }), e.domContentLoadedEventStart = n, G() && t.performance && t.performance.getEntriesByName) { if (!cs.querySelectorAll) return;
                bs.resources = bs.resources || [], i(cs.querySelectorAll("head>link,head>script"), function(t) { var e; "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && bs.resources.push(e) }) } }); if (G() && va(cs, Aa, n), va(cs, Ca, function(t) { cs.readyState === wa && n() }), (!G() || t.performance && !t.performance.getEntriesByName) && (Fc = setInterval(pn, Oo)), !G()) try { hn("if(window.TINGYUN) {window.TINGYUN.".concat(Po, "=+new Date();}")) } catch (r) {} }

    function gn(t, e, n) { return n || (e === Zo ? n = ns : e === ts && (n = rs)), "".concat(t, "_").concat(e, "_").concat(n || Gc) }

    function yn(e) { if (ca(e)) { var n = e.type,
                r = e.name,
                a = e.handler,
                i = e.options; if (!(null == Yc[n] || Yc[n].indexOf(r) < 0 || !sa(a) || i && !ca(i))) { var o = gn(n, r, i && i.position);
                n === Vo ? (Kc[o] = e, r === Qo && t.TINGYUN && t.TINGYUN.inited && bn({ type: Vo, name: Qo })) : (Kc[o] || (Kc[o] = []), Kc[o].push(e)) } } }

    function _n(t, e) { yn({ type: Vo, name: t, handler: e }) }

    function xn(t, e, n) { yn({ type: Xo, name: t, handler: e, options: n }) }

    function bn(t) { var e = t.type,
            n = t.name,
            r = t.hookPostion,
            a = t.args,
            o = gn(e, n, r),
            s = {}; if (Kc[o]) { if (s.exist = !0, e === Vo) { var c, u = Kc[o],
                    f = u.handler; try { c = f.apply(null) } catch (l) {} return s.result = c, s } var d = t.scope;
            d || (d = new Mt); try { i(Kc[o], function(t) { var e = t.handler,
                        n = t.options;
                    n = n || {}; var r = m({ scope: d }, a);
                    e.call(d, r) }) } catch (l) {} } else s.exist = !1; return s }

    function En(t) { this.limit = t, this.reset() }

    function Sn(t, e, n, r, a) { return String(t) + String(e) + String(n) + String(r) + String(a) }

    function Tn(t, e, n, r) { return String(t) + String(e) + String(n) + String(r) }

    function Cn(t, e, n, r, a, i, o, s) { var c = this;
        c.id = t, c.time = E(), c.msg = e, c.lineno = r, c.colno = a, c.filename = n, c.count = 1, c.stack = i && i.stack || "", c.module = o, c.trigger = s || Xc, c.error = i, c.fix(); var u = Tn(e, r, a, o),
            f = Qc[u];
        c.ep = f ? 0 : 1, Qc[u] = !0, c.fep = 0, c.trace = {}, this.recordFileName() }

    function wn(t) { var n = function(t) { var e = []; return i(t, function(t) { e.push(t.toObject()) }), e }($c.c); if (!n || !n.length) return null; var r = { fu: Jc ? Jc : Jc++, os: parseInt((E() - (bs.pfStart || e)) / 1e3) };
        xs.ulabel && (r.ulabel = xs.ulabel), Re.buildImmediateAction(ci, null, null, { actionOptions: m(r, { items: n }) }), $c.reset() }

    function An(t, e, n, r, a, o, s) { if (e || !vs.ignoreNoFilePropError) { var c = !1; if (i(vs.domains, function(t) { return c = t.test(e), c ? !1 : void 0 }), !c) { var u = a && a.moduleId,
                    f = Sn(e, t, n, r, u),
                    l = $c.get(f);
                l ? l.increase() : (l = new Cn(f, t, e, n, r, a, u, o), $c.add(f, l), oc.errs && oc.errs.push(l)); var d = l.initTraceInstance();
                l.triggerActionHook(d); try { l.trace[d].scope.setContext(s) } catch (p) {} } } }

    function Rn() { var e = t.onerror;
        t.onerror = function(t, n, r, a, i) { return An(t, n, r, a, i), sa(e) ? e.apply(this, arguments) : void 0 }, t.onerror._ty = !0 }

    function On() { var e = t.onerror;
        e && e._ty || Rn() }

    function Pn(t, e) { if (t) { var n = t.message || "",
                r = t.stack,
                a = "",
                o = 0,
                s = 0; if (r) { var c = r.split(/\n/);
                i(c, function(t, e) { if (t && (t = t.trim()), t && 0 === t.indexOf("at ")) { var n = t.indexOf("("),
                            r = t.indexOf(")"); if (n && r) { var i = n + 1;
                            i > r && (i = r); var c = t.substring(i, r); if (c) { var u = c.split(":");
                                u && u.length > 2 && (a = (u.slice(0, u.length - 2) || []).join(":"), o = +u[u.length - 2], s = +u[u.length - 1]) } } } return a && ua(o) && o > 0 && ua(s) && s > 0 ? !1 : void 0 }) }
            An(n, a, o, s, { stack: r }, Vc, e) } }

    function Dn() { var e = ya(); return e ? Rn() : va(t, xa, function(e) { var n, r, a, i, o;
            (e instanceof t.Event || t.ErrorEvent && e instanceof t.ErrorEvent) && (n = e.message || e.error && (e.error.message || e.error.constructor.name) || "", r = e.lineno || 0, a = e.colno || 0, i = e.filename || e.error && e.error.filename || e.target && e.target.baseURI || "", o = e.error), An(n, i, r, a, o) }), zc.on([ba, Ea, Sa, Ta], function(t) { wn() }).on(ba, function() { e && Ks(On) }), setInterval(wn, Wc, !0) }

    function Nn(t) { if (t) { var e = xs.firstScreenResources = xs.firstScreenResources || [];
            oa(t) || (t = [t]), i(t, function(t) { if (ia(t)) e.push(t);
                else if (_s(t)) { var n = t.src || t.href;
                    n && e.push(n) } }) } }

    function In(t) { oa(t) || (t = [t]), i(t, function(t) { if (t) { if (!(t instanceof RegExp)) throw new ss("parameter's type requires RegExp");
                (vs.domains || (vs.domains = [])).push(t) } }) }

    function kn() { if (Object.defineProperty) { var e = t[Oa];
            e && Object.defineProperty(t, Oa, { get: function() { return eu++ > 0 && t.console && console.warn("window.%s is deprecated, use window.%s instead.", Oa, Pa), e } }) } }

    function jn(t, e) { if (qn()) { var n = { rm: {}, em: [], cpm: {} };
            e && (n.rm.res = e.res || []), t && (n.cpm = t, n.cpm.ul = cs.URL), nbsJsBridge.logJsResult(aa(n)) } }

    function qn() { return "undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult }

    function Hn() { var t = 0; try { t = window.performance.timing.loadEventEnd } catch (e) {} return t > 0 }

    function Ln(t, n) {
        var r = { tr: !1, tt: h(cs.title), charset: cs.characterSet };
        xs.resources && m(r, xs.resources), Zt(function() { r.debug = cc }), ee();
        var a = oc.errs;
        i(a, function(t, r) {
            var i = t.toObject();
            i.o = i.o - n && n.navigationStart || e, a[r] = i
        }), r.err = a;
        var o, s = "getEntriesByType";
        return t[s] ? o = t[s]("resource") : P(v(nu, [s])), o && (r.tr = !0, r.res = [], i(o, function(t) {
            function e(e) { var n = t[e]; return n > 0 ? n : 0 } var n = t.initiatorType,
                a = t.name,
                o = { o: e("startTime"), rt: n, n: a, f: e(xi), ds: e(Ni), de: e(Ii), cs: e(qi), ce: e(Hi), sl: e(Li), qs: e(bi), rs: e(Ei), re: e(Si), ts: t.transferSize || 0, es: t.encodedBodySize || 0 }; if ("xmlhttprequest" === n) { var s = Mn(a);
                i(s, function(t, e) { 0 == e.indexOf("s_") && (o[e] = t) }) }
            r.res.push(o) })), r
    }

    function Mn(t) { var e; return i(oc.xhrs, function(n, r) { return r && t.indexOf(r) > -1 ? (e = n, !1) : void 0 }), e }

    function Bn(t) { if (t) { var e = t.fetchStart; if (e) return e - t.navigationStart } }

    function Un() { var n = {},
            r = 0,
            a = t.performance;
        a && a.getEntriesByType && i(a.getEntriesByType("mark") || [], function(t) { if (t && t.name && t.startTime && 0 === t.name.indexOf(Za)) { var e = t.name.substring(Za.length);
                e && (n[e] = Math.round(t.startTime), r += 1) } }); var o = a && a.timing ? a.timing.navigationStart : e,
            s = t[Qa] && t[Qa].data,
            c = m({}, s || {}, Es || {}); return c && a && a.timing && i(c, function(t, e) { ca(t) && t.timestamp && (n[e] = t.timestamp - o, r += 1) }), r > 0 ? n : null }

    function Fn(t, e) { var n = m({}, t || {}, { type: oi }); return e && (n.body = e), n }

    function zn(t, e) { var n = aa(t),
            r = n ? n.length : 0; if (r > ti && t.res && t.res.length > 0) { t.res = t.res.slice(0, e); var a = aa(t),
                i = a ? a.length : 0; return i > ti ? zn(t, e - 10 > 0 ? e - 10 : 0) : t } return t }

    function Yn() { var e = S(function() {
            function e(t) { return t ? "1" : "0" } if (!Ss.pfSent) { var n = t.performance,
                    r = !!n,
                    a = n && n.timing;
                r || P(v(nu, ["pf"])); var o = m(he(a), vs.pageServerData, xs),
                    s = m({}, Bs);
                s.fp = re(s, t), s.dr = pe(s, n), s.fs = ae(s, n); var c = m(o, s) || {},
                    u = Un();
                u && i(u, function(t, e) { ua(t) && t >= 0 && (c[e] = t) }); var f, l = "",
                    d = a ? Bn(a) : 0;
                i(["fp", "fs", "dr", "le"], function(t) { l += e((d ? c[t] - d : c[t]) >= gs[t + "_threshold"]) }), r && l.indexOf("1") > -1 && (f = Ln(n, a), c.ressize = !(!n || !n.getEntriesByName)), u && (f || (f = {}), f.mark = u), c.trflag = l || "0000", bs.pfStart = E(), delete c.firstScreenResources, delete c.resources; var p = Rt(cs.URL); if (f || (f = { tr: !1, tt: h(cs.title), charset: cs.characterSet }), f.bizId_param = p.bizIdParams, f.opt_param = p.params, f.request_param = p.requestParams, vs.collectAllParam[zo] && p.operaAllParam && (f.opera_all_param = {}, f.opera_all_param[zo] = p.operaAllParam), Ss.opt_custom_param = p.optCustomParams, f) try { f = zn(f, 150) } catch (g) {}
                var y = Fn(c, f),
                    _ = Re.buildImmediateAction(oi, "", y, { notSend: Ss.recordingCpActions });
                Ss.recordingCpActions && (_.crossPage = !0, Ss.cpActions.push(_), w(function() { Se(!0) }, ru)); try { jn(c, f) } catch (g) {}
                Ss.pfSent = !0 } }); return G() && Hn() && !Ss.pfSent && e(), zc.on(ba, function() { var t = 0; if (gs.pfDelay && ca(gs.pfDelay)) { var n = Un();
                i(gs.pfDelay, function(e, r) {
                    (!n || null == n[r]) && ua(e) && e > t && (t = e) }) } if (G() && Ss.recordingCpActions) { var r = gs.cross_page_delay ? gs.cross_page_delay : Gi,
                    a = r - t;
                0 > a && (a = 0), ru = a }
            w(e, t) }).on([Ea, Sa, Ta], e) }

    function Gn(t) { var e = t; return au && (iu.setAttribute("href", e), e = iu.href), iu.setAttribute("href", e), { href: iu.href, protocol: iu.protocol ? iu.protocol.replace(/:$/, "") : "", host: iu.host, search: iu.search ? iu.search.replace(/^\?/, "") : "", hash: iu.hash ? iu.hash.replace(/^#/, "") : "", hostname: iu.hostname, port: iu.port, pathname: "/" === iu.pathname.charAt(0) ? iu.pathname : "/" + iu.pathname } }

    function Kn(t) { var e = !1; return vs.corsDomains && i(vs.corsDomains, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function Wn(t) { var e = Gn(t); return e.protocol === ou.protocol && e.host === ou.host || Kn(e.host) }

    function Jn(t, e, n) { var r = _a().replace(/-/g, ""),
            a = {}; return i(e, function(e) { if (e) { var i = n && n[e];
                null == i && (t.setRequestHeader(e, r), i = r), a[e] = i } }), a }

    function Vn(t) { t.pcid = t.parentContext.id, t.parentContext.updateRemain(1, ri), t.parentContext.items.push(t.contextData) }

    function Xn(t) { return function e(n, r) { var a = this,
                i = e; if (i._ && (i._ = 1), !a[Na]) { var o = a[Oa] = {};
                o.method = n, o.url = r, o.id = cu++, o.jserror = !1, o.headerRecord = {}; var s = Ms.get("event");
                s && (o.key = s.key, s.remain++), nr(o, Ss.context), o.parentContext = o.context.parent, o.contextData = { type: ri, id: o.id, cid: o.context.id, method: o.method, url: o.url, state: o.state, ignore: !1, jserror: o.jserror }, o.context && o.context.setData(o.contextData), o.parentContext && Vn(o), o.scope = new Mt, o.toJSON = function() {} } try { return t.apply(a, arguments) } catch (c) {} return G() ? void 0 : d(t, [a, arguments]) } }

    function $n(t) { return function e(n, r) { var a = this,
                i = e; if (i._ && (i._ = 1), !a[Na] && a[Oa]) { var o = a[Oa],
                    s = mr(n, vs.optCustomParamRules);
                ps.isGather && (o.wReqHeaderParam || (o.wReqHeaderParam = {}), o.wReqHeaderParam[n] = r), o && s && (o.reqHeaderParam || (o.reqHeaderParam = {}), o.reqHeaderParam[n] = r), o.headerRecord || (o.headerRecord = {}), o.headerRecord[n] = r } try { return t.apply(a, arguments) } catch (c) {} return G() ? void 0 : d(t, [a, arguments]) } }

    function Qn(t) { return function e(n) { var r = this,
                a = e; if (a._ && (a._ = 1), !r[Na]) { var i = r[Oa]; if (i && (i.start = E(), i.reqSize = T(n), i.requestData = n, i.contextData && (i.contextData.start = i.start)), G()) { if (i.context && null == i.context.parent) { var o = Qe(i.start);
                        o && (i.context.parent = o, i.parentContext = i.context.parent, Vn(i)) }!i.parentContext && Ss.recordingCpActions && (i.context.crossPage = !0, Ss.cpRemain.ajax++, Ss.cpActions.push(i.context)) } var s = Ms.get("event");
                s && s.type === xo && i.key === s.key && i.parentContext && fn(i.key, i.parentContext), or(r); var c = Wn(i.url); if (gs.x_server_switch && r.setRequestHeader && gs.key && i && c) { var u = xr(),
                        f = "c=B|" + gs.key;
                    u && (f += ";x=" + u), r.setRequestHeader(Va, f), i.xTingyunSent = !0, gs.apm_headers && (i.apms = Jn(r, gs.apm_headers, i.headerRecord)) }
                bn({ type: Xo, name: Zo, hookPostion: es, args: { target: r }, scope: i.scope }) } try { return t.apply(r, arguments) } catch (l) {} return G() ? void 0 : d(t, [r, arguments]) } }

    function Zn(t) { i(uu, function(e, n) { var r = "on" + n;
            t[r] ? M(t, r, function(r) { return function() { return er(t, e, n), sa(r) ? r.apply(this, arguments) : void 0 } }) : t[r] = function() { er(t, e, n) } }) }

    function tr(t) { i(uu, function(e, n) { va(t, n, function() { er(t, e, n), t && t[so] === su && sr(t) }) }) }

    function er(t, e, n) { t && t[Oa] && (t[Oa].errorCode = e, t[Oa].errorEvent = n) }

    function nr(t, e) { if (!t.context) { var n = "".concat(t.url, "-").concat(t.id);
            t.context = Re.createEvent(e, n, ri) } }

    function rr(t, e) { Ss.context = t.context, Ss.globalAsyncStore = t, Ss.globalAjaxContext = e }

    function ar(t) { var e = t.context && t.context.canEnd();
        e && t.context.end(), t.contextData && t.context.state === _i && gs.upload_timeout_ajax && (t.contextData.brsOnly = !0, Re.buildImmediateAction(ri, "", t.contextData, { actionOptions: { state: _i } })), Ss.globalAsyncStore = null, Ss.globalAjaxContext = null }

    function ir(t, e) { if (G()) { var n = t[su];
            n && !t[oo] && (M(t, su, e), t[oo] = !0, t[so] = su) } var r = t[fu];!r || t[oo] || r[oo] || (M(t, fu, e), t[oo] = !0, t[so] = fu) }

    function or(t) {
        function e(e) { return L(function n() { var r = n;
                r._ && (r._ = 1), sr(t); var a; if (sa(e)) { var i = t[Oa]; if (i && 4 == t.readyState) { var o = E();
                        rr(i, t) } try { a = e.apply(this, arguments) } catch (s) { throw i && (i.jserror = !0), s }
                    i && 4 == t.readyState && (i.cbTime = E() - o) } return a }) }
        ir(t, e); try { G() ? tr(t) : Zn(t) } catch (n) {} if (!t[oo]) { var r = L(function a() { var e = a;
                e._ && (e._ = 1), t[oo] || 4 === t.readyState && sr(t) }); try { G() ? va(t, Ca, r) : (t[fu] = r, t[fu][oo] = !0) } catch (n) { return } }
        Ks(function() { ir(t, e) }) }

    function sr(t) { var e = t[Oa]; if (e && (e.end = E(), e.readyState = t.readyState, 4 == t.readyState)) { if (e.callbackEnd) return;
            e.callbackEnd = !0, delete t[oo], rr(e), e.status = t.status, e.text = ur(t), e.resSize = T(e.text); var n = dr(e, t);
            bn({ type: Xo, name: Zo, hookPostion: ns, args: { target: t, actionData: cr(e) }, scope: e.scope }); var r = Ms.get("event");
            Ks(function() { lr(e, n), r && r.key == e.key && (r.xhrs.push(n), 0 === --r.remain && r._end()), oc.xhrs && (oc.xhrs[e.url] = n), ar(e) }) } }

    function cr(t) { var e = t.contextData; return { method: e.method, url: e.url, start: e.start, end: e.end, du: e.du, cb: e.cb, status: e.status, err: e.err, rec: e.rec, send: e.send, requestHeader: t.headerRecord } }

    function ur(t) { var e = ""; if ("" == t.responseType || "text" == t.responseType) e = t.responseText;
        else if (t.response) e = t.response;
        else try { e = t.responseText } catch (n) {}
        return e || "" }

    function fr(t) { return t.data && "event" === t.data.type ? { text: t.data.text, path: t.data.path, src: t.data.src, value: t.data.value, href: t.data.href, title: t.data.title, nodeName: t.data.nodeName, items: t.items } : t.parent && t.parent.data && "event" === t.parent.data.type ? { text: t.parent.data.text, path: t.parent.data.path, src: t.parent.data.src, value: t.parent.data.value, href: t.parent.data.href, title: t.parent.data.title, nodeName: t.parent.data.nodeName, items: t.parent.items } : t.parent && t.parent.parent ? fr(t.parent) : { text: "", path: "", nodeName: "", items: [] } }

    function lr(t, e) { t && e && t.jserror && (e.jserror = t.jserror), t.errorCode && !e.err && (e.err = t.errorCode), t.cbTime && !e.cb && (e.cb = t.cbTime), zt(e, t.scope) }

    function dr(e, n) { if (e && !e.composed) { var r = e.status; if (ps.isGather) { var a = fr(e.context);
                e.wCustom = { fromJS: "agent", key: gs.key, ajaxUrl: e.url, items: e.context.items, itemsTemp: a && a.items, id: e.id, url: document.URL, text: a && a.text, href: a && a.href, title: a && a.title, value: a && a.value, src: a && a.src, xpath: a && a.path, nodeName: a && a.nodeName, method: e.method, urlParams: st(document.URL), ajaxUrlParams: st(e.url), start: e.start, requestHeader: e.wReqHeaderParam, requestParams: e.requestData, responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"), responseBody: n.response, children: [] }, t.top && t.top.postMessage && t.top.postMessage(aa(e.wCustom), "*"), delete e.wCustom, delete e.wReqHeaderParam }
            m(e.contextData, { end: e.end, du: r > 0 ? e.end - e.start : 0, cb: e.cbTime || 0, status: r, err: e.errorCode ? e.errorCode : 0, rec: e.resSize, send: e.reqSize }); var i = e.contextData,
                o = {};
            o[Ua] = e.reqHeaderParam || {}; var s = Rt(e.url),
                c = s.bizIdParams,
                u = s.params,
                f = s.requestParams,
                l = s.optCustomParams,
                d = yr(e.requestData, vs.bizIdsRules[ka], vs.bizIdsRules[Ha]),
                p = yr(e.requestData, vs.customParamsRules[ka], vs.customParamsRules[Ha]),
                h = yr(e.requestData, vs.requestParamKeys[La], vs.requestParamKeys[Ma]);
            o[Fa] = It(_r(e.requestData), vs.optCustomParamRules[Fa], !0); var v = vr(n, vs.bizIdsRules),
                g = vr(n, vs.customParamsRules);
            o[za] = vr(n, vs.optCustomParamRules, za); var y = {},
                _ = {},
                x = Y(e.text);
            x && (y = gr(x, vs.bizIdsRules), _ = gr(x, vs.customParamsRules), o[Ya] = It(x, vs.optCustomParamRules[Ya], !0)), i.bizId_param = m({}, c, d, v, y), i.opt_param = m({}, u, p, g, _), i.request_param = m({}, f, h), i.opt_custom_param = Nt(pr(o, l)); var b = e.xTingyunSent ? Y(hr(n, Xa)) : null; if (b) { if (i.hasServerHeader = !0, i.s_id = b.id, i.s_tname = b.tname, i.s_tid = b.tid, i.s_rid = b.rid, i.s_duration = b.duration, "user" in b) { var E = b.user,
                        S = E; if (null != E && 0 === E.indexOf($a)) { var T = E.substring($a.length); try { S = nc.decode(T) } catch (C) {} }
                    i.s_user = S, Tt(S) } "bid" in b && (i.s_bid = Dt(b.bid)), "ber" in b && (i.s_ber = b.ber), "isError" in oc && (i.s_isError = b.isError) } else i.hasServerHeader = !1;
            e.apms && (i.apms = e.apms), e.key && (i.__spe = 1); var w = {}; return vs.collectAllParam[zo] && s.operaAllParam && (w[zo] = s.operaAllParam), vs.collectAllParam[Yo] && e.headerRecord && (w[Yo] = e.headerRecord), vs.collectAllParam[Go] && e.requestData && (w[Go] = e.requestData), vs.collectAllParam[Ko] && (w[Ko] = n.getAllResponseHeaders()), vs.collectAllParam[Wo] && e.text && (w[Wo] = e.text), At(w) || (i.opera_all_param = w), e.composed = !0, i } }

    function pr(t, e) { return i(e, function(e, n) { t[n] = m({}, t[n] || {}, e || {}) }), t }

    function hr(t, e) { if (t && t.getResponseHeader) try { return t.getResponseHeader(e) } catch (n) {} }

    function mr(t, e) { var n; return i(e[Ua], function(e) { return t === e ? (n = !0, !1) : void 0 }), n }

    function vr(t, e, n) { var r = {}; return i(e[n || ja], function(e) { var n = hr(t, e);
            null != n && nt(r, e, n) }), r }

    function gr(t, e, n) { var r = {}; return i(e[n || qa], function(e) { var n = Pt(Ga, e),
                a = n(t);
            null != a && nt(r, e, a) }), r }

    function yr(t, e, n) { return Ot(_r(t), e, n) }

    function _r(t) { var e = Y(t); return e || (e = ct(t)), e }

    function xr() { try { return _a().substring(0, 16) } catch (t) {} }

    function br() { var e = us && us.prototype;
        e ? (M(e, "open", Xn), M(e, "setRequestHeader", $n), M(e, "send", Qn)) : us && (t.XMLHttpRequest = function() { var t = new us; return M(t, "open", Xn), M(t, "setRequestHeader", $n), M(t, "send", Qn), t }) }

    function Er(t) { t && !t.composed && (m(t.contextData, { end: t.end || E() }), t.composed = !0) }

    function Sr() { gs.set_timeout_max_depth && gs.set_timeout_max_depth > 0 && (du = gs.set_timeout_max_depth), M(window, "setTimeout", Dr), M(window, "clearTimeout", Nr) }

    function Tr(t) { t.context || (t.context = Re.createEvent(Ss.context, "".concat(t.name, "-").concat(t.id), ai, t.name)) }

    function Cr(t) { Ss.context = t.context, Ss.globalAsyncStore = t }

    function wr(t) { var e = t.context && t.context.canEnd();
        e && t.context.end(), Ss.globalAsyncStore = null }

    function Ar(t) { var e = 0,
            n = t.context; if (n) { var r = n.remain[ri],
                a = n.remain[ii];
            e += r.current + r.children + a.current + a.children } return e > 0 }

    function Rr(t) { for (var e = 0; null != t && 5 > e;) e += t.type === ai ? 1 : 0, t = t.parent; return 5 > e }

    function Or(t) { return function() { return H(t).apply(this, arguments) } }

    function Pr(t, e, n, r) { var a = null,
            i = null; return ca(r) && r[io] || null == Ss.context ? i = Or(t) : Rr(Ss.context) ? (a = { id: lu++, name: e, start: E(), delay: n, parentContext: Ss.context }, Tr(a), a.contextData = { type: ai, id: a.id, cid: a.context.id, name: a.name, start: a.start, delay: a.delay }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, ai), a.parentContext.items.push(a.contextData)), i = L(function() { var e; try { Cr(a) } catch (n) {} try { t && (e = t.apply(this, arguments)) } finally { try { Ar(a) ? (a.end = E(), Er(a), wr(a)) : a && a.context.removeFromParent() } catch (n) {} } return e })) : i = Or(t), { store: a, cb: i } }

    function Dr(t, e) { return function(n) { var r = la.call(arguments, 0),
                a = null; if (!arguments[2] && sa(n)) { var i = Pr(n, e, r[1], r[2]);
                i.cb && (r[0] = i.cb), a = i.store } var o = t.apply(this, r); return a && (pu[o] = a), o } }

    function Nr(t) { return function(e) { try { var n = pu[e];
                n && n.context && (n.context.removeFromParent(), pu[e] = null) } catch (r) {} return t.apply(this, arguments) } }

    function Ir(t) { m(t.contextData, { pvid: t.pvid, end: t.end, url: t.url }, t.serverData || {}, t.pfData || {}) }

    function kr(t) { t.context || (t.context = Re.createEvent(t.parentContext, "".concat(t.src, "-").concat(t.id), ii)) }

    function jr(t, e, n) {
        function r() { if (a.end = E(), a.sameOrigin && this && this.contentDocument && this.contentWindow) { a.sameOrigin = !0, a.url = this.contentDocument.URL; var e = kt(Ja, Wa, this.contentWindow[Wa] || this.contentDocument.cookie || ""); if (e) { var n = qt(e);
                    jt(Ja, "", -1e3, "/", this.contentDocument), a.serverData = Ht(n) } var i = this.contentWindow[Pa],
                    o = this.contentWindow.performance && this.contentWindow.performance.timing,
                    s = { window: this.contentWindow, globalStart: i ? i.globalStart : o.navigationStart, agent: m({}, i && i.currentAgent ? i.currentAgent : {}) };
                i && (a.pvid = i.pvid || ""); var c; try { c = me(o, s) } catch (u) { c = {} }
                a.pfData = c, a.pfData.le && (a.end = o.navigationStart + a.pfData.le) } else a.sameOrigin = !1;
            Ir(a), qr(a), t.removeEventListener("load", r) } if (t) { n || (n = t.src ? vu : mu); var a = { id: hu++, src: e, loadType: n, start: E(), parentContext: Ss.context };
            a.sameOrigin = Wn(a.src), kr(a), a.contextData = { type: ii, loadType: a.loadType, id: a.id, cid: a.context.id, src: a.src, start: a.start, sameOrigin: a.sameOrigin }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, ii), a.parentContext.items.push(a.contextData)), !a.parentContext && Ss.recordingCpActions && (a.context.crossPage = !0, Ss.cpRemain.iframe++, Ss.cpActions.push(a.context)), t.addEventListener("load", r) } }

    function qr(t) { var e = t.context && t.context.canEnd();
        e && t.context.end(), Ss.context = null }

    function Hr() {
        function t(t) { return function(e) { return "IFRAME" === e.nodeName && e.src && jr(e, e.src, mu), t.apply(this, arguments) } }
        M(Node.prototype, "appendChild", t), M(Node.prototype, "insertBefore", t) }

    function Lr() {
        function t() { var t = arguments[0],
                e = this; return jr(e, t), r.apply(this, arguments) } if (Object.getOwnPropertyDescriptor && Object.defineProperty) { var e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src"),
                n = e.get,
                r = e.set;
            Object.defineProperty(HTMLIFrameElement.prototype, "src", { get: function() { return n.apply(this, arguments) }, set: t, enumerable: !0, configurable: !0 }) } }

    function Mr() { Hr(), Lr() }

    function Br(t) { qs(Ui, aa(t)) }

    function Ur(t) { var e = gu++,
            n = t.url || "",
            r = E(),
            a = Re.createEvent(Ss.context, "".concat(n, "-").concat(e), si, t.subType || Fi),
            i = { type: si, subType: a.subType, id: e, cid: a.id, url: n, start: r };
        a && a.setData(i); var o; return a.parent && (a.parent.type === ri ? dr(Ss.globalAsyncStore, Ss.globalAjaxContext) : a.parent.type === ai && Er(Ss.globalAsyncStore), o = a.collectCrossPageData(), yu = o, t.delayStorage || Br(o), a.clear(), a = null), { storageData: o, context: a } }

    function Fr(t) { return function() { var e = arguments[0],
                n = Ur({ url: e, delayStorage: !0 }),
                r = n.storageData,
                a = n.context; try { var i = t.apply(this, arguments); if (i) { if (!r && a) { var o = Qe(a.data.start);
                        o && (a.parent = o, r = a.collectCrossPageData(), yu = r, a.clear(), a = null) }
                    Br(r) } return i } catch (s) {} return G() ? void 0 : d(t, [this, arguments]) } }

    function zr() { M(t, "open", Fr) }

    function Yr() {
        function t(t) { return { valid: no === t.target.nodeName && !t.defaultPrevented && t.target.href, url: t.target.href, subType: zi } }

        function e(t) { return { valid: ro === t.target.nodeName && !t.defaultPrevented && t.target.action, url: t.target.action, subType: Yi } }
        i([Vi, Xi], function(n) { cs.addEventListener(n, function(r) { if (r) { var a = n === Vi ? t(r) : e(r); if (a.valid) { var i = r.timeStamp ? Ze(r) : Qe($e(r));
                        i && (Ss.context = i, Ur({ subType: a.subType, url: a.url }), Ss.context = null) } } }, _defineProperty({}, Wi, !0)) }) }

    function Gr() { Te(yu), yu = null }

    function Kr() { va(cs, Fo, function() { "hidden" === cs.visibilityState && Gr() }), va(t, Ta, function() { Gr() }) }

    function Wr() { zr(), Yr(), Kr() }

    function Jr() { gs.disable_hook_event || tn(), gs.disable_hook_timer || Sr(), gs.disable_hook_iframe || Mr(), gs.disable_hook_cross_page || Wr() }

    function Vr(t, e) { t && vs.routerEnable && un({ key: t, autoEnd: !0, endDelay: gs.router_event_delay || Do, type: xo, debugInfo: { api: e } }) }

    function Xr() { _u.forEach(function(e) { M(t.history, e, function(n) { return function(r, a, i) { var o;
                    o = n.apply(this, arguments); try { Vr(t.location.href, e) } catch (s) {} return o } }) }), va(t, ko, function() { Vr(t.location.href, ko) }) }

    function $r() { va(t, Io, function() { Vr(t.location.href, Io) }) }

    function Qr() { var e = t.history;
        e ? Xr() : $r() }

    function Zr() { vs.routerEnable && Qr() }

    function ta() { if (G()) try { va(t, "message", $t) } catch (e) {}
        if (vn(oc), G() && Jr(), Yn(), br(), Dn(), Zr(), oc._end = E(), Zt(function() { cc._end = oc._end }), kn(), G()) { var n = Y(js(Ui));
            n && n.fromUrl && cs.referrer && n.fromUrl.indexOf(cs.referrer) > -1 && (Ss.recordingCpActions = !0, Ss.cpParent = n), Hs(Ui) } }

    function ea(e) { if ((!t[Pa] || !t[Pa].inited) && e && (sa(e) || ca(e))) { var n = bn({ type: Vo, name: $o });
            (!n.exist || n.result) && (Vt(e), (gs.key || gs.appKey) && (ta(), t[Pa].inited = !0), bn({ type: Vo, name: Qo })) } }

    function na() { return window[Pa] && 3 === window[Pa].mainVersion ? window[Pa] : (tu.init = ea, tu) }
    var ra, aa, ia = o("String"),
        oa = o("Array"),
        sa = o("Function"),
        ca = o("Object"),
        ua = o("Number"),
        fa = o("Undefined"),
        la = [].slice,
        da = '"',
        pa = /([\"\\])/g,
        ha = /\n/g,
        ma = t.JSON;
    ma && ma.parse && ma.stringify ? (ra = n, aa = r) : (ra = s, aa = c);
    var va;
    va = t.addEventListener ? f : l;
    var ga = t.encodeURIComponent,
        ya = function() { return !document.addEventListener },
        _a = (t.location.protocol, function() {
            function t(t) { return 0 > t ? NaN : 30 >= t ? 0 | Math.random() * (1 << t) : 53 >= t ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN }

            function e(t, e) { for (var n = t.toString(16), r = e - n.length, a = "0"; r > 0; r >>>= 1, a += a) 1 & r && (n = a + n); return n } return function(n) { return n || (n = ""), e(t(32), 8) + n + e(t(16), 4) + n + e(16384 | t(12), 4) + n + e(32768 | t(14), 4) + n + e(t(48), 12) } }());
    C.prototype = { on: function(t, e) { var n = this; return ia(t) ? (n.events[t] || (n.events[t] = [])).push(e) : oa(t) && i(t, function(t) { n.on(t, e) }), n }, off: function(t, e) { var n = arguments.length,
                r = this; if (0 === n) return r.events = {}, r; var a = r.events[t]; if (!a) return r; if (1 === n) return r.events[t] = null, r; for (var i, o = a.length; o--;)
                if (i = a[o], i === e) { a.splice(o, 1); break }
            return r }, emit: function(t) { var e = [].slice.call(arguments, 1),
                n = this.events[t]; return n && i(n, function(t) { return t.apply(this, e) }), this }, unshift: function(t, e) { var n = this; return (n.events[t] || (n.events[t] = [])).unshift(e), n } };
    var xa = "error",
        ba = "load",
        Ea = "unload",
        Sa = "beforeunload",
        Ta = "pagehide",
        Ca = "readystatechange",
        wa = "complete",
        Aa = "DOMContentLoaded",
        Ra = "on",
        Oa = "_ty_rum",
        Pa = "TINGYUN",
        Da = 2,
        Na = "__ign",
        Ia = "__ty_asyncWrap__",
        ka = "2",
        ja = "3",
        qa = "4",
        Ha = "5",
        La = "1",
        Ma = "2",
        Ba = "1",
        Ua = "2",
        Fa = "3",
        za = "4",
        Ya = "5",
        Ga = "body",
        Ka = "reqBody",
        Wa = "TINGYUN_COOKIE_VALUE",
        Ja = "TINGYUN_DATA",
        Va = "X-Tingyun",
        Xa = "X-Tingyun-Data",
        $a = "TY_BASE64",
        Qa = "__TINGYUN",
        Za = "ty_",
        ti = 64512,
        ei = 6e4,
        ni = "event",
        ri = "ajax",
        ai = "timer",
        ii = "iframe",
        oi = "pf",
        si = "crossPage",
        ci = "jsError",
        ui = "e",
        fi = "a",
        li = "t",
        di = "i",
        pi = "p",
        hi = "c",
        mi = "j",
        vi = "finish",
        gi = "pending",
        yi = "finish",
        _i = "timeout",
        xi = "fetchStart",
        bi = "requestStart",
        Ei = "responseStart",
        Si = "responseEnd",
        Ti = "domContentLoadedEventStart",
        Ci = "domContentLoadedEventEnd",
        wi = "domInteractive",
        Ai = "domComplete",
        Ri = "loadEventStart",
        Oi = "loadEventEnd",
        Pi = "unloadEventStart",
        Di = "unloadEventEnd",
        Ni = "domainLookupStart",
        Ii = "domainLookupEnd",
        ki = "redirectStart",
        ji = "redirectEnd",
        qi = "connectStart",
        Hi = "connectEnd",
        Li = "secureConnectionStart",
        Mi = 5,
        Bi = 5,
        Ui = "__ty_crs_page_events",
        Fi = "window_open",
        zi = "a_link",
        Yi = "form_submit",
        Gi = 3e3,
        Ki = "__ty_event_patch_tag",
        Wi = "__ty_event_patch_disable",
        Ji = "__ty_event_patch_id",
        Vi = "click",
        Xi = "submit",
        $i = "spe",
        Qi = "addEventListener",
        Zi = "onProperty",
        to = "inline",
        eo = "IMG",
        no = "A",
        ro = "FORM",
        ao = 3,
        io = "__ty_ignore",
        oo = "__ty_xhr_hooked",
        so = "__ty_xhr_hooked_type",
        co = 200,
        uo = "TY_USER_ID",
        fo = "TY_SESSION_N_ID",
        lo = "TY_DEVICE_N_ID",
        po = 18e5,
        ho = "|",
        mo = "__TY_SPE_STORE",
        vo = 6e4,
        go = 6e5,
        yo = "auto",
        _o = "defined",
        xo = "route",
        bo = 500,
        Eo = "success",
        So = "fail",
        To = "TY_path_gather",
        Co = "EagleEye-TraceID",
        wo = "__TY_ELEMENT_CB",
        Ao = "__TY_CB_COUNTER",
        Ro = "__TY_IMAGE_LOAD_HOOK",
        Oo = 60,
        Po = "__tagFirstPaintTime",
        Do = 500,
        No = 1e4,
        Io = "hashchange",
        ko = "popstate",
        jo = "pushState",
        qo = "replaceState",
        Ho = "vueRouter",
        Lo = "normal",
        Mo = "script",
        Bo = "current",
        Uo = "crossPage",
        Fo = "visibilitychange",
        zo = "URL",
        Yo = "QH",
        Go = "QB",
        Ko = "RH",
        Wo = "RB",
        Jo = 200,
        Vo = "lifecycle",
        Xo = "action",
        $o = "preInit",
        Qo = "init",
        Zo = "ajax",
        ts = "error",
        es = "ajax_send",
        ns = "ajax_finish",
        rs = "error_trigger",
        as = "paint",
        is = "largest-contentful-paint",
        os = "first-contentful-paint",
        ss = t.Error,
        cs = t.document,
        us = t.XMLHttpRequest,
        fs = t.location,
        ls = t.navigator,
        ds = t.HTMLElement,
        ps = { isGather: !1 },
        hs = { fp_threshold: 2e3, fs_threshold: 4e3, dr_threshold: 4e3 },
        ms = { server: {}, appConf: { pvid: _a(), baseInfo: {} } },
        vs = ms.appConf,
        gs = ms.server,
        ys = { pvid: vs.pvid, ref: cs.URL, referrer: cs.referrer, v: "3.2.2", av: "3.2.2" },
        _s = ds ? function(t) { return t instanceof ds } : function(t) { t && "object" === _typeof(t) && 1 === t.nodeType && ia(t.nodeName) },
        xs = {},
        bs = { imageResources: [] },
        Es = {},
        Ss = { context: null, uniqueId: 0, actions: [], opt_custom_param: {}, unAssignedEvents: [], cpActions: [], recordingCpActions: !1, cpParent: null, cpRemain: { ajax: 0, iframe: 0 }, tryEndCpActionsFailed: !1, globalAsyncStore: null, globalAjaxContext: null, pfSent: !1, ajaxUniqueId: 0, scope: null, performanceObserver: {}, enableLCPObserver: !0 },
        Ts = [],
        Cs = [],
        ws = {},
        As = "undefined" != typeof t.console,
        Rs = 1,
        Os = 2,
        Ps = 4,
        Ds = 8,
        Ns = I.prototype;
    Ns.create = Ns.before = Ns.after = Ns.error = null;
    var Is;
    U.prototype = { createContext: function() { return Object.create ? Object.create(this.active) : B(this.active) }, get: function(t) { return this.active ? this.active[t] : void 0 }, set: function(t, e) { return this.active ? this.active[t] = e : void 0 }, enter: function(t) { if (!t) throw new ss("context required!");
            this._set.push(this.active), this.active = t }, exit: function(t) { if (!t) throw new ss("context required!"); if (t === this.active) return void(this.active = this._set.pop()); var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : y(this._set, t); if (0 > e) throw new ss("context not currently entered!");
            this._set.splice(e, 1) }, bind: function(t, e) { e || (e = this.active ? this.active : this.createContext()); var n = this; return function() { n.enter(e); try { return t.apply(this, arguments) } catch (r) { try { var a = "moduleId";
                        r[a] = e[a] } catch (i) {} throw r } finally { n.exit(e) } } } };
    var ks, js, qs, Hs, Ls = !1,
        Ms = z();
    js = function(e) { try { return t.localStorage.getItem(e) } catch (n) {} }, qs = function(e, n) { try { t.localStorage.setItem(e, n) } catch (r) {} return n }, Hs = function(e) { try { t.localStorage.removeItem(e) } catch (n) {} };
    var Bs = {},
        Us = t.screen;
    Us && (Bs.sh = Us.height, Bs.sw = Us.width);
    var Fs, zs, Ys = function() { var e = t.navigator.standalone,
                n = t.navigator.userAgent.toLowerCase(),
                r = /safari/.test(n),
                a = /iphone|ipod|ipad/.test(n); return a && !e && !r },
        Gs = !/(MSIE [0-8].\d+)/.test(navigator.userAgent),
        Ks = G() ? x : _,
        Ws = "POST",
        Js = W,
        Vs = !1;
    $.prototype.add = function(t) { this.queue.length >= this.size || (this.queue.push(t), this.running || (this.running = !0, this.run())) }, $.prototype.run = function() { var t = this,
            e = function() { t.queue.length > 0 ? t.run() : t.running = !1 };
        this.handler(this.queue.shift(), e) }, $.prototype.handler = function(t, e) { Fs(t, S(function() { e() })) }, Fs = t.XDomainRequest ? J : V, ls.sendBeacon && (Vs = !0);
    var Xs = Ys();
    Xs && (Js = Fs = V, Vs = !1), Fs || (Fs = function(t, e) { e() }, Vs = !1), va(t, Sa, function(t) { Vs && (Fs = X) });
    var $s, Qs = t.location.protocol,
        Zs = "http:",
        tc = {},
        ec = t,
        nc = function() { var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e = function(t) { for (var e = {}, n = 0, r = t.length; r > n; n++) e[t.charAt(n)] = n; return e }(t),
                n = String.fromCharCode,
                r = function(t) { if (t.length < 2) { var e = t.charCodeAt(0); return 128 > e ? t : 2048 > e ? n(192 | e >>> 6) + n(128 | 63 & e) : n(224 | e >>> 12 & 15) + n(128 | e >>> 6 & 63) + n(128 | 63 & e) } var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320); return n(240 | e >>> 18 & 7) + n(128 | e >>> 12 & 63) + n(128 | e >>> 6 & 63) + n(128 | 63 & e) },
                a = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                i = function(t) { return t.replace(a, r) },
                o = function(e) { var n = [0, 2, 1][e.length % 3],
                        r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
                        a = [t.charAt(r >>> 18), t.charAt(r >>> 12 & 63), n >= 2 ? "=" : t.charAt(r >>> 6 & 63), n >= 1 ? "=" : t.charAt(63 & r)]; return a.join("") },
                s = ec.btoa ? function(t) { return ec.btoa(t) } : function(t) { return t.replace(/[\s\S]{1,3}/g, o) },
                c = function(t) { var e = "[object Uint8Array]" === Object.prototype.toString.call(t); return e ? t.toString("base64") : s(i(String(t))) },
                u = function(t, e) { return e ? c(String(t)).replace(/[+\/]/g, function(t) { return "+" == t ? "-" : "_" }).replace(/=/g, "") : c(t) },
                f = function(t) { return u(t, !0) },
                l = new RegExp(["[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}"].join("|"), "g"),
                d = function(t) { switch (t.length) {
                        case 4:
                            var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
                                r = e - 65536; return n((r >>> 10) + 55296) + n((1023 & r) + 56320);
                        case 3:
                            return n((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                        default:
                            return n((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1)) } },
                p = function(t) { return t.replace(l, d) },
                h = function(t) { var r = t.length,
                        a = r % 4,
                        i = (r > 0 ? e[t.charAt(0)] << 18 : 0) | (r > 1 ? e[t.charAt(1)] << 12 : 0) | (r > 2 ? e[t.charAt(2)] << 6 : 0) | (r > 3 ? e[t.charAt(3)] : 0),
                        o = [n(i >>> 16), n(i >>> 8 & 255), n(255 & i)]; return o.length -= [0, 0, 2, 1][a], o.join("") },
                m = ec.atob ? function(t) { return ec.atob(t) } : function(t) { return t.replace(/\S{1,4}/g, h) },
                v = function(t) { return m(String(t).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                g = function(t) { return p(m(t)) },
                y = function(t) { return g(String(t).replace(/[-_]/g, function(t) { return "-" == t ? "+" : "/" }).replace(/[^A-Za-z0-9\+\/]/g, "")) }; return { atob: v, btoa: s, utob: i, encode: u, encodeURI: f, btou: p, decode: y } }(),
        rc = "extra";
    Mt.prototype.setContext = function(t, e) { var n = this;
        ca(t) ? i(t, function(t, e) { n._mergeContext(e, t) }) : this._mergeContext(t, e) }, Mt.prototype.setExtraContext = function(t) { this.setContext(rc, t) }, Mt.prototype.getContext = function(t) { return null == t ? this._contexts : null == this._contexts ? null : this._contexts[t] }, Mt.prototype.getData = function() { return null == this._contexts ? null : { contexts: this._contexts } }, Mt.prototype._mergeContext = function(t, e) { null != t && ca(e) && (this._contexts || (this._contexts = {}), this._contexts[t] = m(this._contexts[t] || {}, e)) }, Mt.prototype.toJSON = function() {};
    var ac = ["id", "key", "appKey", "token"],
        ic = Qt.prototype;
    ic.start = function() { if (!gs.key) return O("missing config, agent disabled!"), !1; var e = t[Pa]; return e ? (O("already loaded!"), !1) : this }, m(ic, C.prototype);
    var oc = new Qt;
    oc.on("send", function(t, e, n, r, a) { xt(), e = e || {}, e.__r = E(), a ? a && (a = dt(a, e)) : a = Yt(t, e), r = r || b, tt({ url: a, data: n, callback: r }) });
    var sc = vs.debuggable,
        cc = { start: e, e: {}, an: { count: 0 }, visible: [] },
        uc = function() { try { var e = _a(); return t.localStorage.setItem(e, e), t.localStorage.removeItem(e), !0 } catch (n) { return !1 } }(),
        fc = {};
    fc.localStorage = uc,
        function() {
            function e() { var e, f, l = cs.documentElement;
                l.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = o = !0, t.getComputedStyle && (f = t.getComputedStyle(u), n = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, a = "4px" === (f || { width: "4px" }).width, u.style.marginRight = "50%", r = "4px" === (f || { marginRight: "4px" }).marginRight, e = u.appendChild(cs.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", i = 0 === u.getClientRects().length, i && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === e[0].offsetHeight, i && (e[0].style.display = "", e[1].style.display = "none", i = 0 === e[0].offsetHeight)), l.removeChild(c) } var n, r, a, i, o, s, c = (cs.documentElement, cs.createElement("div")),
                u = cs.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", fc.opacity = "0.5" === u.style.opacity, fc.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", fc.clearCloneStyle = "content-box" === u.style.backgroundClip, c = cs.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), fc.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, fc.reliableHiddenOffsets = function() { return null == n && e(), i }) }();
    var lc = 0,
        dc = 1,
        pc = 2,
        hc = 3,
        mc = 4,
        vc = 5,
        gc = 0,
        yc = 1,
        _c = 2,
        xc = 3,
        bc = 4,
        Ec = 5,
        Sc = 0,
        Tc = 1,
        Cc = 2,
        wc = 3,
        Ac = [ri, ai, ii];
    Re.prototype.end = function(t) { var e = this; if (this.closed) return void(!this.cleared && gs.debug_context_closed && console.warn("Current context is already closed")); if (t && (this.actionCount.ajax += t.actionCount.ajax, this.actionCount.iframe += t.actionCount.iframe, we(this.items, t), this.updateRemain(-1, t.type)), this.isNoRemain() || this.isTimeout)
            if (this.e = E(), this.closed = !0, this.i && clearTimeout(this.i), this.e - this.s > gs.event_timeout && (this.isTimeout = !0), this.setState(this.isTimeout ? _i : yi), this.data && (this.data.state = this.state), this.parent) this.parent.end(this);
            else { var n;
                this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? n = this.composeTimeoutActionData() : this.isMeaningfulAction() && (n = this.composeActionData()), n && (this.eventData = n, !this.crossPage || n.type !== ri && n.type !== ii ? this.speBinded ? null == this.spe ? (this.waitingSpeEnd = !0, this.waitingSpeTimer = w(function() { e.waitingSpeEnd = !1, e.send() }, No)) : (this.buildEventDataWithSpe(), this.send()) : this.send() : (Ss.cpRemain[n.type]--, R() && Ss.tryEndCpActionsFailed && Se())), Ss.context = null } }, Re.prototype.isNoRemain = function(t) { t = t || {}; var e = !0; return i(this.remain, function(n, r) { if (t.ignoreFields && g(t.ignoreFields, r) > -1) return !0; var a = n.current <= 0 && (t.testCurrent ? !0 : n.children <= 0); return a ? void 0 : (e = !1, !1) }), e }, Re.prototype.clear = function() { this.closed = !0, this.cleared = !0, this.i && clearTimeout(this.i) }, Re.prototype.isMeaningfulAction = function() { return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 }, Re.prototype.isRemainMeaningfulAction = function() { return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0 }, Re.prototype.timeout = function() { this.isTimeout = !0, this.setState(_i), this.end(null, !0) }, Re.prototype.setData = function(t) { this.data = t }, Re.prototype.composeActionData = function() { return { type: this.type, subType: this.subType, start: this.s, end: this.e, duration: this.e - this.s > 0 ? this.e - this.s : 0, data: m({}, this.data || {}, { items: (this.items || []).slice() }) } }, Re.prototype.composeTimeoutActionData = function() { return this.collectActionDataFromTop(), this.composeActionData() }, Re.prototype.collectActionDataFromTop = function(t) { null == t && (t = this), Ae(t.items, t.children) }, Re.prototype.collectCrossPageData = function(t) { if (t || (t = []), this.crossPage = !0, this.data && (this.data.crossPage = !0), t.unshift(this.data), this.parent) return this.parent.collectCrossPageData(t); var e = { type: this.type, subType: this.subType, start: this.s }; return (this.isNoRemain() || 1 === this.children.length) && this.clear(), { action: e, data: t, url: Yt("/action"), commonActionInfo: ye(), fromUrl: document.URL } }, Re.prototype.canEnd = function(t) { return !this.closed && this.isNoRemain(m({ testCurrent: !0 }, t)) }, Re.prototype.updateRemain = function(t, e) {
        if (this.remain[e]) {
            e || (e = ri);
            var n = t || 0;
            this.remain[e].current = this.remain[e].current + n;
            for (var r = this.parent; r;) r.remain[e].children = r.remain[e].children + n,
                r = r.parent
        }
    }, Re.prototype.setState = function(t) { return this.stateChanged ? !1 : (this.state = t, this.stateChanged = !0, !0) }, Re.prototype.current = function() { return Ss.context }, Re.prototype.buildEventDataWithSpe = function() { if (this.spe && this.eventData && this.eventData.data) { var t = this.spe.xhrs;
            this.spe.hasAjax = t && t.length > 0, delete this.spe.xhrs, this.eventData.data.spe = this.spe } }, Re.prototype.setSpe = function(t) { return t ? (this.spe = t, this.waitingSpeEnd && (this.buildEventDataWithSpe(), this.send(), clearTimeout(this.waitingSpeTimer)), this.sent) : void 0 }, Re.prototype.send = function() { if (!this.sent) { var t = {};
            null != this.spe && this.speBinded && (t.query = { ss: 1 }, this.spe.type === xo && (t.query.rs = 1)), xe(this.eventData, t), this.sent = !0 } }, Re.prototype.removeFromParent = function() { if (this.parent) { var t = this.parent.children.indexOf(this);
            t > -1 && this.parent.children.splice(t, 1); var e = this.parent.items.indexOf(this.data);
            e > -1 && this.parent.items.splice(e, 1), this.parent.updateRemain(-1, this.type), this.parent.end() } }, Re.createEvent = function(t, e, n, r, a, i) { return new Re(t, e, n || "event", r || null, a, i) }, Re.buildImmediateAction = function(t, e, n, r) { r = r || {}; var a = m({ type: t, subType: e, state: vi, data: n }, r.actionOptions || {}); return a.data && (a.data.state = a.state), r.notSend || xe(a, r.sendOptions), a }, Re.getEventRootContext = function(t) { if (!t) return null; for (; t;) { if (t.type === ni && null == t.parent) return t;
            t = t.parent } return null }, Re.prototype.toJSON = function() {};
    var Rc, Oc = [Vi, Xi],
        Pc = 1,
        Dc = 2;
    Rc = String.prototype.trim ? String.prototype.trim : function() { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") }, Be.prototype.put = function(t, e) { if (this._size >= this._capacity) try { var n = this._cacheKeys.shift();
            this._size--, this._cache[n] = null, delete this._cache[n] } catch (r) {}
        this._cache[t] = e, this._cacheKeys.push(t), this._size++ }, Be.prototype.get = function(t) { return this._cache[t] };
    var Nc = [Vi, Xi],
        Ic = co,
        kc = Jo,
        jc = [],
        qc = new Be({ capacity: 20 }),
        Hc = null;
    Ue.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    var Lc = {},
        Mc = {},
        Bc = rn.prototype;
    Bc.fail = Bc.end = Bc.store = b;
    var Uc = an.prototype;
    Uc.end = Uc.finish = Uc.fail = null, Uc.send = function(t) { this.sent = !0; var e = this.getEventData(t),
                n = this.timeout || go;
            (gs.collect_hash_no_ajax || !(e.debugInfo && e.debugInfo.api === Io || e.type === xo && e.key.indexOf("#") > -1) || 0 !== e.xhrs.length) && (e.duration >= n || nn(e)) }, Uc.getEventData = function(t) { var e = this,
                n = t.event && t.event.xhrs || [];
            i(n, function(t) { t.startSpeOffset = t.start - e.s }); var r = { key: e.key, start: e.s, duration: e.e - e.s, status: e.status, type: e.type, xhrs: n }; return this.debugInfo && (r.debugInfo = this.debugInfo), r }, Uc.refreshEventAndStore = function(t) { this.finish(); var e = this.getEventData(t);
            qs(mo, aa(e)) },
        function() { if (vs.debuggable) { var t, e, n = "visibilitychange";
                fa(cs.hidden) ? fa(cs.msHidden) ? fa(cs.webkitHidden) || (t = "webkitHidden", e = "webkit" + n) : (t = "msHidden", e = "ms" + n) : (t = "hidden", e = n), fa(cs.addEventListener) || fa(cs[t]) || va(cs, e, te(function() { cc.visible.push([cs[t], E()]) })) } }();
    var Fc = null,
        zc = new C,
        Yc = { lifecycle: ["preInit", "init"], action: ["ajax", "error"] },
        Gc = "default",
        Kc = {},
        Wc = 1e4,
        Jc = 0,
        Vc = "report",
        Xc = "error";
    En.prototype = { add: function(t, e) { this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++) }, get: function(t) { return this.c[t] }, reset: function() { this.c = {}, this.len = 0 } };
    var $c = new En(100),
        Qc = {},
        Zc = {};
    Cn.prototype = { increase: function() { this.recordFileName(), this.count++ }, recordFileName: function() { var t = this.filename || "_";
            this.fep += Zc[t] ? 0 : 1, Zc[t] = !0 }, fix: function() { var t = this,
                e = t.stack; if (e && ia(e)) { e = e.split(/\n/); var n = [];
                i(e, function(t, e) {-1 == t.indexOf(Ia) && n.push(t) }), t.stack = n.join("\n") } }, getErrorOverview: function() { var t = this; return { o: t.time, e: t.msg, l: t.lineno, c: t.colno, r: t.filename, ec: t.count, s: t.stack, m: t.module, ep: t.ep, fep: t.fep, tr: t.trigger } }, toObject: function() { var t = this.getErrorOverview(),
                e = {}; return i(this.trace, function(t, n) { e[n] = zt({ time: t.time }, t.scope) }), t.trace = e, t }, initTraceInstance: function() { var t = _a(); return this.trace[t] = { time: E(), scope: new Mt }, t }, triggerActionHook: function(t) { var e = this.trace[t];
            e && e.scope && bn({ type: Xo, name: ts, args: { target: this.error, actionData: m({}, this.getErrorOverview(), { id: t, o: e.time }) }, scope: e.scope }) } };
    var tu = { mainVersion: ao, version: "3.2.2", key: gs.key, pvid: vs.pvid, DIAGNOSE_HREF: Da, diagnose: N, createEvent: un, logFirstScreen: Nn, addExcludedDomain: In, globalStart: e, currentAgent: oc, mark: dn, wrapVueRouter: ln, endSession: gt, setUid: Tt, createAutoEvent: un, endStoreEvent: cn, captureException: Pn, setDid: Ct, addHook: yn, addLifeCycleHook: _n, addActionHook: xn, setContext: Ut, setExtraContext: Ft, stopLCPObserver: ge },
        eu = 0,
        nu = "{0} not support",
        ru = 0,
        au = /(msie|trident)/i.test(ls.userAgent),
        iu = cs.createElement("a"),
        ou = Gn(fs.href),
        su = "onload",
        cu = 0,
        uu = { error: 990, abort: 905, timeout: 903 },
        fu = Ra + Ca,
        lu = 0,
        du = Mi,
        pu = {},
        hu = 0,
        mu = "load",
        vu = "reload",
        gu = 0,
        yu = null,
        _u = [jo, qo],
        xu = na();
    return xu
}(window, +new Date);
window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "dr_threshold": 603, "opt_custom_param_rule": [], "apm_headers": ["ceshi2", "ceshi1"], "router_enable": true, "fp_threshold": 403, "token": "8863e3cfb8654d3eaf01458f540a5b4b", "beacon": "10.128.2.95:8588", "trace_threshold": 2022, "x_server_switch": true, "beacon_config": { "http": "http://10.128.111111", "https": "https://10.128.111111" }, "cors_domains": ["192.168.5.114:8089"], "ignore_err": false, "id": "QPo-y6LCVc8", "key": "wB2nEYKuByo", "fs_threshold": 822 } }); /*TY_AGENT_END*/