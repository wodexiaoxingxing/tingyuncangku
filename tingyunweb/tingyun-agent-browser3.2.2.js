/*AGENT_VERSION=3.2.3*/
"use strict";

function _defineProperty(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

function _typeof(t) { "@babel/helpers - typeof"; return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
window.TINGYUN = function(t, e) {
    if (/(MSIE [0-8].\d+)/.test(navigator.userAgent)) { return; }

    function n(t) { return JSON.parse(t) }

    function r(t) { return JSON.stringify(t) }

    function a(t) {
        var e = !!t && "length" in t && t.length,
            n = _typeof(t);
        return "function" === n ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        var r, i = 0;
        if (t)
            if (a(t))
                for (r = t.length; r > i && e.call(t[i], t[i], i) !== !1; i++);
            else
                for (i in t)
                    if ((n || Object.prototype.hasOwnProperty.call(t, i)) && e.call(t[i], t[i], i) === !1) break;
        return t
    }

    function o(t) { return function(e) { return "Array" === t && Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object " + t + "]" } }

    function s(t) { return new Function("return " + t)() }

    function c(t) {
        switch (_typeof(t)) {
            case "object":
                if (!t) return null;
                if (t instanceof Array) { var e = pa.call(t); return i(e, function(t, n) { e[n] = c(t) }), "[" + e.join(",") + "]" }
                if (t instanceof Date) return t.getTime().toString();
                var n = "";
                return i(t, function(t, e) { ua(t) || (n += c(e) + ":" + c(t) + ",") }), n && (n = n.substr(0, n.length - 1)), "{" + n + "}";
            case "string":
                return ha + t.replace(ma, "\\$1").replace(va, "\\n") + ha;
            case "number":
                return isNaN(t) ? null : t;
            case "boolean":
                return t;
            case "function":
                return c(t.toString());
            case "undefined":
            default:
                return '"undefined"'
        }
    }

    function u(t) { return t && sa(t) ? ia(t) : t }

    function f(t, e, n, r) { return t.addEventListener(e, n, r) }

    function l(t, e, n) { return t.attachEvent("on" + e, n) }

    function d(t, e) { return Function.prototype.apply.apply(t, e) }

    function p(t, e) { return function() { t.apply(e, arguments) } }

    function h(t) { return _a ? _a(t) : t }

    function m(t) { var e = arguments.length; if (2 > e || !t) return t; var n = pa.call(arguments, 1); return i(n, function(e) { i(e, function(e, n) { t[n] = e }) }), t }

    function v(t, e) { return t ? e ? t.replace(/\{(\w+.?\w+)\}/g, function(t, n) { return e[n] || "" }).replace(/\{(\d+)\}/g, function(t, n) { return e[n] || "" }) : t : "" }

    function g(t, e, n) {
        var r;
        if (null == t) return -1;
        var a = Object(t),
            i = a.length >>> 0;
        if (0 === i) return -1;
        var o = +n || 0;
        if (Math.abs(o) === 1 / 0 && (o = 0), o >= i) return -1;
        for (r = Math.max(o >= 0 ? o : i - Math.abs(o), 0); i > r;) {
            if (r in a && a[r] === e) return r;
            r++
        }
        return -1
    }

    function y(t, e) {
        var n = null == t ? 0 : t.length;
        if (!n) return -1;
        for (var r = n; r--;)
            if (t[r] === e) return r;
        return r
    }

    function _(t) { return setTimeout(t, 0) }

    function x(t) { return setTimeout(t, 0, { __ty_ignore: !0 }) }

    function b() {}

    function E() { var t = window && window.performance; return t && t.timing && t.timing.navigationStart && t.now ? Math.round(t.timing.navigationStart + t.now()) : +new Date }

    function S(t) {
        return function() {
            if (null !== t) {
                var e = t;
                t = null, e.apply(this, arguments)
            }
        }
    }

    function T(e) { return e ? sa(e) ? e.length : t.ArrayBuffer && e instanceof ArrayBuffer ? e.byteLength : t.Blob && e instanceof Blob ? e.size : e.length ? e.length : 0 : 0 }

    function C() { this.events = {} }

    function w(t, e) { return setTimeout(t, e || 0, { __ty_ignore: !0 }) }

    function A(t, e) { Ts[t] = e }

    function P() { return 0 === Cs.cpRemain.ajax && 0 === Cs.cpRemain.iframe }

    function R(t) { D(t, ws) }

    function O(t) { D(t, As) }

    function D(t, e) { var n = "ok"; return t ? void e.push(t) : n = e.length ? e.join("\n") : n }

    function N(t) {
        function e(t, e, r) {
            var a = r || "log",
                i = n[t] || (n[t] = {});
            i[a] = i[a] || "", i[a] += e
        }
        var n = {},
            r = R();
        if (e("Status", r, "ok" !== r), e("Debug", O()), i(Ps, function(t, n) { e("Timeline", n + ": " + t.toString()) }), !t && Rs) console.log("[TingYun Agent Diagnosis]\n"), i(n, function(t, e) {
            var n = console[e];
            i(n, function(t, e) { console[e](t) })
        });
        else {
            if (t !== Ia) return oa(n);
            ds.href = ds.href + "#" + oa(n)
        }
    }

    function I(t, e) { this.flags = 0, ua(t.create) && (this.create = t.create, this.flags |= Os), ua(t.before) && (this.before = t.before, this.flags |= Ds), ua(t.after) && (this.after = t.after, this.flags |= Ns), ua(t.error) && (this.error = t.error, this.flags |= Is), this.data = e }

    function k(t, e) { if (!js) { if (!fa(t) || !t) throw new TypeError("callbacks arguments must be an object"); return js = new I(t, e) } }

    function j(t) {
        var e = js.data;
        if (0 !== (js.flags & Os)) {
            var n = js.create(js.data);
            void 0 !== n && (e = n)
        }
        return function r() {
            0 !== (js.flags & Ds) && js.before(this, e);
            var n = r;
            n._ && (n._ = 1);
            try { var a = t.apply(this, arguments) } catch (i) { throw 0 !== (js.flags & Is) && js.error(e, i), i }
            return 0 !== (js.flags & Ns) && js.after(this, e), a
        }
    }

    function q(t) { return function() { var e; try { e = t.apply(this, arguments) } finally { Cs.context = null } return e } }

    function H(t) { return !js || js.flags <= 0 ? t : j(t) }

    function L(t) { return q(H(t)) }

    function M(t, e, n) { if (t && n && ua(n)) { var r = t[e]; if (!r || !r._wrapped) { var a = n(r, e); return a && (a._wrapped = !0), t[e] = a, a } } }

    function B(t) {
        function e() {}
        return e.prototype = t, new e
    }

    function U() { this.id = null, this.active = null, this._set = [] }

    function F() {
        var t = new U;
        return t.id = k({
            create: function() { return t.active },
            before: function(e, n) { n && t.enter(n) },
            after: function(e, n) { n && t.exit(n) },
            error: function(e, n) {
                if (e) {
                    try {
                        var r = "moduleId";
                        n[r] = e[r]
                    } catch (a) {}
                    t.exit(e)
                }
            }
        }), t
    }

    function z() { return Bs || (qs = F(), Bs = !0), qs }

    function Y(t) { try { return u(t) } catch (e) { R(e && e.message) } return null }

    function G() { return Ws }

    function K(t) { return sa(t) || (t = oa(t)), t }

    function W(t, e) {
        e = e || b;
        var n = new Image;
        ya(n, Aa, function() {
            ("loaded" == n.readyState || 4 == n.readyState) && e(null)
        }, !1), ya(n, Sa, function() { e(null) }, !1), ya(n, Ea, function() { e(Ea) }, !1), n.src = t
    }

    function J(t, e) {
        var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = new XDomainRequest;
        i[ka] = !0, i.open(Vs, n), i.onload = function() { a(null, i.responseText), e() }, i.onerror = function(t) { a(t), e() }, Js(function() { i.send(K(r)) })
    }

    function V(t, e) {
        var n = t.url,
            r = t.data,
            a = t.header,
            i = t.callback,
            o = S(i),
            s = new ls;
        s[ka] = !0, s.overrideMimeType && s.overrideMimeType("text/html"), s.onreadystatechange = function() { 4 == s.readyState && 200 == s.status && (o(null, s.responseText), e()) }, s.onerror = function() { o(), e() };
        try {
            s.open(Vs, n, !0);
            for (var c in a) s.setRequestHeader(c, a[c]);
            s.send(K(r))
        } catch (u) { e() }
    }

    function X(t, e) {
        var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = ps.sendBeacon(n, K(r));
        i && (a && a(), e())
    }

    function $(t) { this.size = t || 100, this.queue = [], this.running = !1 }

    function Q() { Xs = Ys = V, $s = !1 }

    function Z(t) { Gs = new $(t) }

    function tt(t) { Gs.add(t) }

    function et(t) {
        var e = t || new Date,
            n = e.getFullYear() + "-",
            r = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
            a = e.getDate() + " ";
        return n + r + a
    }

    function nt(t, e, n) {
        if (null == t[e] || ca(t[e])) ca(t[e]) ? t[e].push(n) : t[e] = n;
        else {
            var r = t[e];
            t[e] = [r], t[e].push(n)
        }
    }

    function rt(t) { return t.send_protocol ? t.send_protocol : tc !== ec && /^https/i.test(t && t.protocol || tc) ? "https:" : ec }

    function at(t) { if (!t || !sa(t)) return ""; var e, n = t.indexOf("?"); return n >= 0 && (e = t.substring(n + 1)), e }

    function it(t) {
        var e = at(t),
            n = ut(e);
        return { queryObj: n, queryString: e }
    }

    function ot(t) { var e = at(t); return ut(e) }

    function st(t) { return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? ot(t) : {} }

    function ct(t) { var e = {}; return t = t || "", sa(t) && t ? e = ut(t) : e }

    function ut(t) {
        var e = {};
        return t && i(t.split("&"), function(t) {
            var n = t.split("="),
                r = ft(n[0]),
                a = ft(n[1]);
            if (sa(a)) {
                var i = Y(a);
                null != i && (a = i)
            }
            r && null != a && nt(e, r, a)
        }), e
    }

    function ft(t) { try { return decodeURIComponent(t) } catch (e) {} return null }

    function lt(t) {
        var e = [];
        return i(t, function(t, n) {
            var r = h(n) + "=" + h(t);
            e.push(r)
        }), e.join("&")
    }

    function dt(t, e) { var n = lt(e); return t += (t.indexOf("?") > 0 ? "&" : "?") + n }

    function pt(t, e, n, r) { var a = null; return t && e && (a = r ? Zs + "//" + t + e : t + e, n && (a += "?" + lt(n))), a }

    function ht(t) { Zs = rt(t) }

    function mt() { var t = Hs(po); return t ? t.split(vo) : null }

    function vt(t) { t && 3 === t.length && Ls(po, t.join(vo)) }

    function gt() {
        var t = yt();
        _t(t)
    }

    function yt() {
        var t = E(),
            e = [ba(), t, t];
        return vt(e), e
    }

    function _t(t) { t[0] && (xs.sid = t[0]), t[1] && (xs.__s = +t[1]) }

    function xt() {
        var t = E(),
            e = mt();
        bt(e) ? gt() : (e[2] = t, vt(e))
    }

    function bt(t) { return !t || 3 !== t.length || E() - +t[2] > mo }

    function Et() { var t = Hs(ho); return t ? t : Ls(ho, ba()) }

    function St() { return Hs(lo) }

    function Tt(t) {
        if (null != t) {
            var e = St();
            null != e && t !== e && gt(), Ls(lo, t)
        }
    }

    function Ct(t) { null != t && Ls(ho, t) }

    function wt() {
        var t = { did: Et() },
            e = St();
        return e && (t.uid = e), t
    }

    function At(t, e) { var n; return t && (n = !0, i(t, function() { return n = !1 }, e)), !!n }

    function Pt(t) {
        var e = {},
            n = {},
            r = {},
            a = {},
            i = it(t),
            o = i.queryObj,
            s = i.queryString;
        return o && (e = Rt(o, ys.bizIdsRules[qa], ys.bizIdsRules[Ma]), n = Rt(o, ys.customParamsRules[qa], ys.customParamsRules[Ma]), r = Rt(o, ys.requestParamKeys[Ba], ys.requestParamKeys[Ua]), a[Fa] = It(o, ys.optCustomParamRules[Fa], !0)), { bizIdParams: e, params: n, requestParams: r, optCustomParams: Nt(a), operaAllParam: s }
    }

    function Rt(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, function(e) {
            var n = t[e];
            null != n && nt(r, e, n)
        }), t && n && n.length && n.length > 0 && i(n, function(e) {
            var n = Ot(Ja, e),
                a = n(t);
            null != a && nt(r, e, a)
        }), r
    }

    function Ot(t, e) {
        var n = t + "." + e;
        if (nc[n]) return nc[n];
        var r = (e || "").split("."),
            a = "";
        e && 0 !== e.indexOf("[") && (a = ".");
        var o = t;
        i(r, function(t, e) { 0 === e && (o += a), o += t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? "['" + t + "']" : (e > 0 ? "." : "") + t });
        var s;
        try { s = new Function(t, "try{return " + o + ";}catch(e){}return null;") } catch (c) { s = b }
        return nc[n] = s, s
    }

    function Dt(t) { return t += "", t && t.substr(0, 128) || "" }

    function Nt(t) { var e = {}; return i(t, function(t, n) { At(t) || (e[n] = t) }), e }

    function It(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, function(e) {
            var a = t[e];
            if (null != a) nt(r, e, a);
            else if (n) {
                var i = Ot(Ja, e);
                a = i(t), null != a && nt(r, e, a)
            }
        }), r
    }

    function kt(t, e, n) { n || (n = e && window[e] || fs.cookie || ""); var r = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return r ? r[3] : null }

    function jt(t, e, n, r, a) {
        var i = t + "=" + e;
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 1e3 * n), i += ";expires=" + o.toGMTString()
        }
        r && (i += ";path=" + r), (a || fs).cookie = i
    }

    function qt(t) {
        var e, n;
        if (t)
            if (0 === t.indexOf(Za)) { var r = t.substring(Za.length); try { n = ac.decode(r), e = Y(n) } catch (a) {} } else { try { n = decodeURIComponent(t), e = Y(n) } catch (a) {} if (!e) try { n = decodeURIComponent(n), e = Y(n) } catch (a) { R(a && a.message) } }
        return e
    }

    function Ht(t) { var e = {}; return t && fa(t) && (e.s_id = t.id, e.s_tname = t.tname, e.s_tid = t.tid, e.s_rid = t.rid, e.s_duration = t.duration, "user" in t && (e.s_user = t.user, Tt(t.user)), "bid" in t && (e.s_bid = Dt(t.bid)), "ber" in t && (e.s_ber = t.ber), "isError" in t && (e.s_isError = t.isError)), e }

    function Lt(t) {
        if (!t.agent) {
            var e = window._ty_rum;
            if (e && e.agent) t.agent = e.agent;
            else {
                var n = kt(Xa, Va);
                n && (t.agent = qt(n), jt(Xa, "", -1e3, "/"))
            }
        }
        return t.agent
    }

    function Mt(t) { t = t || {}, this._contexts = t.contexts || null, this._name = t.name }

    function Bt() { Cs.scope || (Cs.scope = new Mt({ name: "ROOT" })) }

    function Ut() { Bt(), Cs.scope.setContext.apply(Cs.scope, arguments) }

    function Ft() { Bt(), Cs.scope.setExtraContext.apply(Cs.scope, arguments) }

    function zt(t, e, n) { if (t && e) { n || (n = "scope"); var r = e ? e.getData() : null; return r && (t[n] = r), t } }

    function Yt() {
        var e, n = t.location.protocol;
        if (n) {
            e = n;
            var r = n.indexOf(":");
            r > -1 && (e = n.substring(0, r))
        }
        return e
    }

    function Gt(t, e) {
        var n = !0;
        if (fa(t.beacon_config)) {
            var r = Yt(),
                a = r && t.beacon_config[r];
            a && (t.beacon = a, n = !1)
        }
        e.relativeBeaconProtocol = n
    }

    function Kt(t, e) { return pt(_s.beacon, t, Wt(e), ys.relativeBeaconProtocol) }

    function Wt(t) { var e = wt(); return m({}, xs, e, t || {}, ys.baseInfo, Fs || {}) }

    function Jt(t) { return t in _s ? _s[t] : !0 }

    function Vt(t) { var e = {}; return i(t, function(t) { t && g(e[t.type] || [], t.key) < 0 && (e[t.type] = e[t.type] || []).push(t.key) }), e }

    function Xt(t) {
        var e = {};
        if (t) {
            var n = [Go, Ko, Wo, Jo, Vo];
            i(t.split(""), function(t, r) { e[n[r]] = "1" === t })
        }
        return e
    }

    function $t(e) {
        var n = {};
        if (ua(e)) {
            var r = {};
            e(r), n = r.server
        } else n = e;
        Bt(), t[ti] || (t[ti] = { hook: {} }), m(gs.server, vs, n || {}, t[ti].config || {}), m(gs.appConf, { bizIdsRules: Vt(_s.bizId_rule), customParamsRules: Vt(_s.opt_param_rule), requestParamKeys: Vt(_s.request_param_keys), corsDomains: _s.cors_domains || [], optCustomParamRules: Vt(_s.opt_custom_param_rule), ignoreNoFilePropError: Jt("ignore_err"), debuggable: Jt("debug"), sessionTimeout: _s.session_timeout || mo, collectAllParam: Xt(_s.collect_all_param), routerEnable: Qt(_s.router_enable), lcpEnable: Qt(_s.lcp_enable) }), i(oc, function(e) { _s[e] && (ys.baseInfo[e] = _s[e], t[Na][e] = _s[e]) }), m(xs, wt());
        var a = mt();
        if (bt(a) && (a = yt()), _t(a), gs.server.event_timeout || (gs.server.event_timeout = ri), _s.appKey && Q(), _s.apm_arms) {
            _s.apm_headers || (_s.apm_headers = []);
            var o = G() ? _s.apm_headers.indexOf(Ao) < 0 : g(_s.apm_headers, Ao) < 0;
            o && _s.apm_headers.push(Ao)
        }
        ht(_s);
        var s = Lt(gs);
        ys.pageServerData = Ht(s), Gt(_s, ys), Z(_s.req_capacity), ys.baseHref = (fs.getElementsByTagName("base")[0] || {}).href
    }

    function Qt(t) { return null == t ? !0 : 1 == t }

    function Zt(e) {
        try {
            var n;
            if (!e || !e.data || 0 !== e.data.indexOf("_TINGYUN")) return;
            if (n = e.data.replace("_TINGYUN", ""), Y(n)) {
                var r = Y(n);
                if ("gather" === r.type && "APM" === r.fromJS && !t[wo]) {
                    ms.isGather = !0;
                    var a = e.origin,
                        i = fs.getElementsByTagName("head")[0],
                        o = fs.createElement("script");
                    o.type = "text/javascript", o.src = a + "/assets/lib/gather/path-gather.min.js?version=" + et(new Date), i.appendChild(o)
                }
            }
        } catch (s) {}
    }

    function te() {
        var t = this;
        t.xhrs = {}, t.errs = [], C.call(t)
    }

    function ee(t) { uc && t() }

    function ne(t) { return function() { uc && t.apply(this, arguments) } }

    function re() { uc = !1 }

    function ae(t) { return t.loadEventEnd || t._end }

    function ie(n, r) {
        var a = r.performance || {},
            o = a.timing,
            s = o && o.navigationStart ? o.navigationStart : e,
            c = 0;
        if (Ss[os] && Ss[os] > 0 ? (c = Ss[os], n.__fp = hc) : a.getEntriesByName && o ? (c = o.domLoading, i(Ss.resources, function(t) {
                var e = a.getEntriesByName(t);
                if (1 === e.length) {
                    var n = e[0].responseEnd;
                    n > c && (c = n)
                }
            }), c -= s, n.__fp = gc) : t.TINGYUN && t.TINGYUN[No] && (c = t.TINGYUN[No] - s, 0 > c && (c = 0), n.__fp = yc), !c || 0 >= c) {
            if (r.chrome && r.chrome.loadTimes) {
                var u = r.chrome.loadTimes();
                u && u.firstPaintTime && (c = 1e3 * u.firstPaintTime - s, n.__fp = mc)
            } else o && o.msFirstPaint && (c = o.msFirstPaint - s, n.__fp = vc);
            (!c || 0 >= c) && (c = 0, n.__fp = pc)
        }
        return Math.round(c)
    }

    function oe(n, r) {
        r = r || {};
        var a = r.timing || {},
            o = a.navigationStart || e,
            s = n.fp || 0;
        if (n.__fs = Tc, Ss[ss]) s = Ss[ss], n.__fs = xc;
        else if (Ss.lcpStopTime) s = Ss.lcpStopTime - o, n.__fs = bc;
        else if (se()) {
            var c = Ss.imageResources || [],
                u = t.innerHeight,
                f = t.innerWidth;
            u || (u = fs.documentElement.clientHeight), f || (f = fs.documentElement.clientWidth);
            var l = [];
            c.length > 0 ? i(c, function(t) { ue(t.element, u, f) && l.push(t) }) : ua(r.getEntriesByName) && i(fs.querySelectorAll("img"), function(t) { ue(t, u, f) && l.push({ element: t }) });
            var d = (a.loadEventEnd || cc.loadEventEnd) - o;
            i(l, function(t) {
                if (t.loadTime) {
                    var e = t.loadTime - o;
                    e > s && (s = e, n.__fs = Sc)
                } else if (t.element && t.element.src) {
                    var a = r.getEntriesByName(t.element.src);
                    if (a.length) {
                        var i = a[0],
                            c = i.responseEnd;
                        i.fetchStart <= d && c > s && (s = c, n.__fs = Ec)
                    }
                }
            })
        }
        return 0 >= s && (s = n.fp || 0, n.__fs = Tc, 0 >= s && (s = 0, n.__fs = _c)), Math.round(s)
    }

    function se(t) {
        var e = !0,
            n = fs.createElement("img");
        return n.getBoundingClientRect || (e = !1), e
    }

    function ce(t) { if (!t) return !1; if (!_s.fs_resources || 0 === _s.fs_resources.length) return !0; var e = !1; return i(_s.fs_resources, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function ue(t, e, n) { return t.src && ce(t.src) && fe(le(t), e, n) && !de(t) }

    function fe(e, n, r) {
        if (e) {
            var a = t.pageYOffset,
                i = e.top + (0 === a ? 0 : a || fs.scrollTop || 0) - (fs.clientTop || 0);
            if (i >= n) return !1;
            var o = e.left;
            return o >= 0 && r > o
        }
        return !1
    }

    function le(t) { if (G()) return ua(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0; var e; try { e = t.getBoundingClientRect ? t.getBoundingClientRect() : void 0 } catch (n) {} return e }

    function de(t) { return dc.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : pe(t) }

    function pe(t) {
        for (; t && 1 === t.nodeType;) {
            if ("none" === he(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function he(t) { return t.style && t.style.display }

    function me(t, n) {
        var r = n && n.timing || {},
            a = r.navigationStart || e,
            i = 0;
        r && (i = r[wi] || r.domInteractive || r.domLoading || i), 0 >= i ? (cc.domContentLoadedEventStart ? (i = cc.domContentLoadedEventStart, t.__dr = Ac) : (i = cc._end, t.__dr = Pc), 0 >= i && (t.__dr = Cc)) : t.__dr = wc;
        var o = i - a;
        return 0 > o && (o = 0), Math.round(o)
    }

    function ve(n, r) {
        function a(t) { return n[t] > 0 ? n[t] - s : 0 }
        var o = {},
            s = r ? r.globalStart : e,
            c = (r ? r.window : t, (r ? r.agent : cc) || {});
        if (n) {
            ee(function() {
                var t = fc.t = {};
                i(n, function(e, n) { ua(e) || (t[n] = e) }, !0)
            }), s = n.navigationStart, o = { ns: s, f: a(Ei), qs: a(Si), rs: a(Ti), re: a(Ci), os: a(wi), oe: a(Ai), oi: a(Pi), oc: a(Ri), ls: a(Oi), le: a(Di), tus: a(Ni), tue: a(Ii) };
            var u = a(ki),
                f = a(ji),
                l = a(qi),
                d = a(Hi),
                p = a(Li),
                h = a(Mi);
            if (o.cs = p, o.ce = h, o.ds = u, o.de = f, (d - l > 0 || d > 0) && (o.es = l, o.ee = d), 0 == o.le) {
                var m = ae(c);
                o.ue = m - s
            }
            c && (c._le = o.ue || o.le);
            var v;
            v && (o.fp = Math.round(v - s), c.fp = o.fp), n[Bi] ? o.sl = a(Bi) : o.sl = 0
        } else o = { t: s, le: ae(c) - s };
        return o.je = c && c.errs && c.errs.length || 0, o
    }

    function ge(e, n) {
        var r = ve(e, n),
            a = n ? n.window : t;
        if (!a) return {};
        r.fp = ie(r, a), r.dr = me(r, a.performance), r.fs = oe(r, a.performance);
        var i = {};
        return r && (i = { f: r.f, fp: r.fp, fs: r.fs, dr: r.dr, le: r.le, je: r.je }), i
    }

    function ye() { Cs.enableLCPObserver = !1; try { i(Cs.performanceObserver, function(t) { t && t.disconnect() }) } catch (t) {} }

    function _e() {
        Ss.lcpStopTime = E(), Cs.enableLCPObserver = !1;
        try {
            var t = Cs.performanceObserver[ss];
            t && t.disconnect()
        } catch (e) {}
    }

    function xe() { return zt({ optCustomParam: Cs.opt_custom_param }, Cs.scope) }

    function be(t) { return t || (t = xe()), "".concat(vi).concat(oa(t)) }

    function Ee(e, n) {
        if (e) {
            n = n || {};
            var r = Se(e);
            if (r) try {
                var a = r + oa(e),
                    i = [a];
                i.unshift(n.commonActionInfoMessage ? n.commonActionInfoMessage : be());
                var o = i.join("\n"),
                    s = { ps: n.crossPage || r === mi ? 1 : 0, url: t.location.href };
                m(s, n.query || {}), cc.emit("send", "/action", s, o, function() { e.type === ci && (cc.xhrs = cc.errs = null, ye()), n.cb && n.cb() }, n.url)
            } catch (c) {}
        }
    }

    function Se(t) { var e = ""; return t.type === ai ? e = li : t.type === ii ? e = di : t.type === si ? e = hi : t.type === oi ? e = pi : t.type === ci ? e = mi : t.type === fi && (e = gi), e }

    function Te(t, e) {
        for (var n = E(), r = e.length - 1; r >= 0; r--) {
            var a = e[r];
            a.type === ai || a.end || (a.end = n), e[r - 1] && (e[r - 1].items = [a]);
            var i = void 0;
            i = a.start && a.end && a.end - a.start > _s.event_timeout ? bi : a.type === ai ? e[r + 1] && e[r + 1].state || xi : xi, a.state = i
        }
        t.data = e[0], t.end = n
    }

    function Ce(t) {
        var e = Cs.cpParent;
        if (e) {
            if (t && (Cs.recordingCpActions = !1), !P()) return void(Cs.tryEndCpActionsFailed = !0);
            var n = e.action,
                r = e.data,
                a = e.commonActionInfo,
                o = e.url;
            if (n && r && 0 !== r.length) {
                var s = [];
                i(Cs.cpActions, function(t) { t.data && (t.data.crossPage = !0), s.push(t.data) }), r[r.length - 1].items = s, Te(n, r), n.data && (n.data.range = zo);
                var c = be(m(a || {}, zt({ pageParam: Wt(), cpOptCustomParam: Cs.opt_custom_param }, Cs.scope, "cpScope")));
                Ee(n, { commonActionInfoMessage: c, url: o, crossPage: !0 })
            }
        }
    }

    function we(t) {
        if (t) {
            var e = t.action,
                n = t.data;
            e && n && 0 !== n.length && (Te(e, n), Ee(e))
        }
    }

    function Ae() { var t = {}; return i(Rc, function(e) { t[e] = { current: 0, children: 0 } }), t }

    function Pe(t, e) { i(t, function(t) { t.cid === e.id && (t.items = e.items || []) }) }

    function Re(t, e) { i(t, function(t) { i(e, function(e) { t.cid === e.id && (t.state || (t.state = e.state), t.items = e.items || []) }) }), i(e, function(t) { Re(t.items, t.children) }) }

    function Oe(t, e, n, r, a, i) {
        i = i || {}, this.id = ++Cs.uniqueId, this.parent = t || null, this.children = [], this.name = e || "", this.type = n || ai, this.subType = this.type === ai ? r || "click" : r, this.items = [], this.remain = Ae(), this.s = i.s || E(), this.e = null, this.data = a, this.state = _i, this.crossPage = i.crossPage || !1;
        var o = this;
        null == this.parent && (this.i = w(function() { o.timeout() }, _s.event_timeout)), this.closed = !1, this.isTimeout = !1, this.cleared = !1, this.stateChanged = !1, this.actionCount = { ajax: n === ii ? 1 : 0, iframe: n === si ? 1 : 0 }, this.sent = !1, this.speBinded = !1, this.spe = null, this.waitingSpeEnd = !1, this.waitingSpeTimer = null, null != this.parent && this.parent.children.push(this), this.eventData = null
    }

    function De(e, n) { return function(r) { if (t[ti].hook && t[ti].hook.eventCb && Be(r)) { var a = { originalCallback: e, eventHandlerType: n }; return t[ti].hook.eventCb.call(this, arguments, a) } return e.apply(this, arguments) } }

    function Ne(t, e, n) { return n === Nc ? De(t, e) : (t.handleEvent = De(t.handleEvent, e), t) }

    function Ie(t) { return ua(t) }

    function ke(t) { return fa(t) && ua(t.handleEvent) }

    function je(t) { var e; return Ie(t) ? e = Nc : ke(t) && (e = Ic), { isValid: t && e, listenerType: e } }

    function qe(t) {
        return function() {
            var e = arguments[0],
                n = arguments[1],
                r = arguments[2],
                a = !0;
            r && fa(r) && r[Vi] && (a = !1);
            var i = je(n),
                o = i.isValid,
                s = i.listenerType;
            if (a && Dc.indexOf(e) > -1 && o) {
                var c;
                if (n[Po] && n[Po][this]) c = n[Po][this];
                else {
                    var u = Ne(n, to, s);
                    s === Nc && (n[Po] || (n[Po] = {}, n[Po][Ro] = 0), n[Po][this] = { listener: u, options: arguments[2] }, n[Po][Ro]++, c = n[Po][this])
                }
                c && (c.listener && (arguments[1] = c.listener), c.options && (arguments[2] = c.options))
            }
            return t && t.apply(this, arguments)
        }
    }

    function He(t) {
        return function(e, n) {
            var r;
            try { r = t && t.apply(this, arguments) } finally {
                try {
                    if (n && Dc.indexOf(e) > -1) {
                        var a = n[Po];
                        a && a[this] && a[this].listener && (null != a[this].options ? this.removeEventListener(e, a[this].listener, a[this].options) : this.removeEventListener(e, a[this].listener), a[this] = null, a[Ro]--, a[Ro] <= 0 && (n[Po] = null, delete n[Po]))
                    }
                } catch (i) {}
            }
            return r
        }
    }

    function Le() { t.EventTarget && (M(t.EventTarget.prototype, "addEventListener", function(t) { return qe(t) }), M(t.EventTarget.prototype, "removeEventListener", function(t) { return He(t) })) }

    function Me() {
        Object.getOwnPropertyDescriptor && Object.defineProperty && Dc.forEach(function(e) {
            var n = "on" + e,
                r = Object.getOwnPropertyDescriptor(t.HTMLElement.prototype, n),
                a = r.get,
                i = r.set;
            Object.defineProperty(t.HTMLElement.prototype, n, {
                get: function() { return a.apply(this, arguments) },
                set: function() {
                    var t = arguments[0];
                    t && (arguments[0] = Ne(t, eo, Nc)), i && i.apply(this, arguments)
                },
                configurable: !0,
                enumerable: !0
            })
        })
    }

    function Be(e) { return e && e.target instanceof t.HTMLElement && e.currentTarget instanceof t.HTMLElement }

    function Ue(t) { return Oc.call(t) }

    function Fe(t) { t = t || {}, this._capacity = t.capacity || 10, this._cache = {}, this._cacheKeys = [], this._size = 0 }

    function ze(t) { return !!t.match(ze.regex) }

    function Ye(t) { return t && t.substr(0, 256) || "" }

    function Ge(t) {
        try {
            if (!t) return "";
            for (var e = [], n = t.parentNode, r = function() {
                    var r = t.tagName,
                        a = void 0;
                    a = n.children;
                    var i = void 0;
                    i = a ? 1 === [].filter.call(a, function(t) { return t.tagName === r }).length ? r : "".concat(r, ":nth-child(").concat(1 + [].indexOf.call(a, t), ")") : r;
                    var o = t.id ? "#".concat(t.id) : "",
                        s = t.className;
                    sa(s) && (s = Ue(s));
                    var c = s ? s.split(" ").filter(function(t) { return Ue(t) }).map(function(t) { return ".".concat(t) }).join("") : "";
                    e.unshift("".concat(i).concat(o).concat(c)), t = n, n = t.parentNode
                }; n;) r();
            return "".concat(e.join(" > ")).toLowerCase()
        } catch (a) {}
    }

    function Ke(t) { return !t.isTrusted || null != t.pointerType && !t.pointerType }

    function We(t, e, n) {
        var r = t.target,
            a = r.nodeName,
            i = r.id,
            o = r.className,
            s = r.title,
            c = r.value,
            u = r.innerText,
            f = a + i,
            l = Ke(t),
            d = { type: ai, id: i, nodeName: a, className: o, title: s, value: c, text: a === io ? "" : Ye(u), path: Ge(t.target), trigger: l ? Uo : Bo, range: Fo },
            p = t[Xi];
        if (p || (p = ba(), t[Xi] = p), d.eventId = p, l) {
            var h = t.timeStamp && E();
            Mc && Math.abs(h - Mc.timestamp) <= qc && (d.refId = Mc.eventId)
        } else Mc = { timestamp: t.timeStamp && E(), eventId: d.eventId };
        if (ro === a) {
            var m = t.target.getAttribute("src");
            m && !ze(m) && (d.src = m)
        }
        if (ao === a) {
            var v = t.target.getAttribute("href");
            v && (d.href = v)
        }
        return d.eventHandlerType = e, Oe.createEvent(null, f, ai, t.type || $i, d, n)
    }

    function Je(t, e) { Cs.context = We(t, e) }

    function Ve() {
        var t = Cs.context;
        t && t.canEnd() && t.end(), Cs.context = null
    }

    function Xe(t, e) {
        var n = e.originalCallback,
            r = e.eventHandlerType,
            a = t[0],
            i = !(a && a.target && kc.indexOf(a.type) > -1);
        if (!i) try { Je.call(this, a, r) } catch (o) {}
        var s;
        try { s = n.apply(this, t) } finally { if (!i) try { Cs.context && !Cs.context.canEnd({ ignoreFields: [oi] }) && (a[Ji] = !0), Ve.apply(this) } catch (o) {} }
        return s
    }

    function $e() { i(kc, function(t) { document.addEventListener(t, function(t) { Hc.length >= Fi && Hc.shift(), Hc.push(t) }, _defineProperty({ capture: !0 }, Vi, !0)) }) }

    function Qe(t) { try { return 13 === (t + "").split(".")[0].length } catch (e) {} return !1 }

    function Ze(n) {
        var r = t.performance && t.performance.timing ? t.performance.timing.navigationStart : e,
            a = n.timeStamp;
        return a = a ? Qe(a) ? a : Math.round(n.timeStamp + r) : E()
    }

    function tn(t) {
        var e = Hc.filter(function(t) { return !t[Ji] }),
            n = e[e.length - 1];
        if (n) { var r = Ze(n); if (Math.abs(r - t) < jc) { var a; return n[Xi] && (a = Lc.get(n[Xi])), a || (a = We(n, no, { s: r }), n[Xi] && Lc.put(n[Xi], a)), a } }
    }

    function en(t) { var e = []; try { e = Hc.filter(function(e) { return !e[Ji] && e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName }) } catch (n) {} if (e.length > 0) { var r = e[0]; return We(r, no, { s: Ze(r) }) } }

    function nn() { _s.inline_event_associate_threshold && (jc = _s.inline_event_associate_threshold), _s.script_event_associate_threshold && (qc = _s.script_event_associate_threshold), t[ti].hook && (t[ti].hook.eventCb = Xe), !t[ti].listenerHooked && t.HTMLElement && (Le(), Me()), _s.disable_hook_inline_event || $e() }

    function rn(t) {
        var e = t,
            n = t.xhrs;
        e.hasAjax = n && n.length > 0, delete e.xhrs;
        var r = { ss: 1 };
        t.type === Eo && (r.rs = 1), Oe.buildImmediateAction(ai, Zi, { type: ai, items: n, spe: e }, { sendOptions: { query: r } })
    }

    function an(t) {
        if (Uc[t.key]) {
            var e = Uc[t.key];
            if (delete Uc[t.key], e.speBinded) {
                var n = e.setSpe(t);
                n || (!e.isMeaningfulAction() && e.isNoRemain() ? rn(t) : w(function() { e.sent || rn(t) }, ko))
            }
        } else rn(t)
    }

    function on(t) { Rs && console.warn(t || "Event key required!") }

    function sn(t) {
        t = t || {}, this.key = t.key, this.type = t.type || bo;
        var e = t.timeout || _o;
        this.timeout = e, this.status = 1, this.remain = 0, this.xhrs = [], this.s = E(), this.e = null, this.called = this.sent = this.stored = !1, t.debugInfo && (this.debugInfo = t.debugInfo)
    }

    function cn(t) {
        var e = null;
        e = Cs.context ? Oe.getEventRootContext(Cs.context) : tn(t.s), null != e && (Uc[t.key] = e, e.speBinded = !0)
    }

    function un(t) {
        t = t || {};
        var e = t.key;
        if (!e) return new on;
        if (Bc[e]) return new on("event " + e + " is executing");
        Bc[e] = !0;
        var n = Us.createContext();
        Us.enter(n);
        var r = new sn(t);
        return r._end = function() {
            var t = this;
            t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n)
        }, r.end = function(t, e) { var r = this; return r.called ? void(Rs && console.warn("Event " + this.key + "has ended or failed!")) : (r.called = !0, Us.exit(n), r.status = null != t ? t : 1, void(e || r._end())) }, r.finish = function(t) { var e = this; return e.e = E(), e.i && clearTimeout(e.i), delete Bc[e.key], e }, r.fail = function() { this.end(0) }, r.store = function() { this.end(null, !0), this.refreshEventAndStore(n), this.stored = !0 }, r.i = r.timeout ? w(p(r.fail, r), r.timeout) : null, r.type === Eo && cn(r), Us.set("event", r), r
    }

    function fn(e) {
        if (t.TINGYUN && t.TINGYUN.inited) {
            var n = Hs(go),
                r = Y(n);
            if (r && r.start && (e = e || {}, !e.key || r.key === e.key)) {
                var a = e.timeout;
                if (a || (a = yo), r.duration = E() - r.start, r.duration > a) return void Ms(go);
                var i = t.performance && t.performance.timing;
                if (i && i.navigationStart && (i.loadEventEnd || i.loadEventStart) && i.navigationStart - r.start >= 0) {
                    var o = { method: "GET", url: document.URL, status: 200, type: ii, subType: ci, startSpeOffset: i.navigationStart - r.start, start: i.navigationStart, __spe: 1, du: (i.loadEventEnd || i.loadEventStart) - i.navigationStart };
                    r.xhrs || (r.xhrs = []), r.xhrs.push(o)
                }
                var s = 1;
                e.status && (s = e.status === To ? 1 : 0), r.status = s, Ms(go), an(r)
            }
        }
    }

    function ln(e) {
        if (!t.TINGYUN || !t.TINGYUN.inited) return new on("Agent is not inited!");
        e = m({}, { type: xo }, e || {});
        var n = un(e);
        return e.autoEnd && w(function() { e.status && e.status === Co ? n.fail() : n.end() }, e.endDelay || So), n
    }

    function dn(t, e) {
        if (Uc[t]) {
            var n = Uc[t];
            n.id !== e.id && (e.speBinded = !0, Uc[t] = e)
        }
    }

    function pn(e, n) {
        t.TINGYUN && t.TINGYUN.inited && (fa(n) || (n = {}), e && e.beforeEach && e.afterEach && (ys.routerEnable = !1, e.afterEach(function(e) {
            var r = e.fullPath;
            if (r = r ? t.location.origin + r : e.path) {
                var a = { key: r, type: Eo, autoEnd: !0, endDelay: Io, debugInfo: { api: Mo } };
                m(a, n), ln(a)
            }
        })))
    }

    function hn(t, e) {
        if (t) {
            var n = t.split("_"),
                r = n[0],
                a = n[1];
            "ty" === r && a && A(a, { timestamp: E(), data: e })
        }
    }

    function mn() {
        var t = fs.getElementsByTagName("img");
        i(t, function(t) { t.complete || t[Oo] || (t[Oo] = !0, ya(t, Sa, function() { Ss.imageResources.push({ loadTime: E(), element: t }) })) })
    }

    function vn(t) {
        var e = fs.createElement("script");
        e.type = "text/javascript";
        try { e.appendChild(fs.createTextNode(t)) } catch (n) { e.text = t }
        fs.getElementsByTagName("head")[0].appendChild(e)
    }

    function gn() {
        function e(t) {
            try {
                var e = t.getEntries();
                e && i(e, function(t) { t.entryType === ss && Cs.enableLCPObserver ? Ss[ss] = t.renderTime || t.loadTime : t.entryType === os && t.name === cs && (Ss[os] = t.startTime) })
            } catch (n) {}
        }
        if (t.PerformanceObserver) {
            var n = [os];
            ys.lcpEnable && n.push(ss);
            var r = [],
                a = t.PerformanceObserver.supportedEntryTypes || [];
            if (i(n, function(t) { a.indexOf(t) > -1 && r.push(t) }), ee(function() { fc.et = r }), 0 != r.length) try { i(r, function(n) { Cs.performanceObserver[n] = new t.PerformanceObserver(e), Cs.performanceObserver[n].observe({ type: n, buffered: !0 }) }) } catch (o) {}
        }
    }

    function yn(e) {
        gn(), Gc.on(Sa, S(function() {
            n();
            var t = E();
            ee(function() { fc.load = t }), e.loadEventEnd = t, clearInterval(Yc)
        })), i([Sa, Ta, Ca, wa], function(e) {
            ya(t, e, function(t) {
                ee(function() {
                    (fc.e[e] || (fc.e[e] = [])).push(E())
                }), Gc.emit(e, t)
            })
        });
        var n = S(function() {
            var n = E();
            if (ee(function() { fc.end = n }), e.domContentLoadedEventStart = n, G() && t.performance && t.performance.getEntriesByName) {
                if (!fs.querySelectorAll) return;
                Ss.resources = Ss.resources || [], i(fs.querySelectorAll("head>link,head>script"), function(t) { var e; "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && Ss.resources.push(e) })
            }
        });
        if (G() && ya(fs, Ra, n), ya(fs, Aa, function(t) { fs.readyState === Pa && n() }), (!G() || t.performance && !t.performance.getEntriesByName) && (Yc = setInterval(mn, Do)), !G()) try { vn("if(window.TINGYUN) {window.TINGYUN.".concat(No, "=+new Date();}")) } catch (r) {}
    }

    function _n(t, e, n) { return n || (e === es ? n = as : e === ns && (n = is)), "".concat(t, "_").concat(e, "_").concat(n || Wc) }

    function xn(e) {
        if (fa(e)) {
            var n = e.type,
                r = e.name,
                a = e.handler,
                i = e.options;
            if (!(null == Kc[n] || Kc[n].indexOf(r) < 0 || !ua(a) || i && !fa(i))) {
                var o = _n(n, r, i && i.position);
                n === $o ? (Jc[o] = e, r === ts && t.TINGYUN && t.TINGYUN.inited && Sn({ type: $o, name: ts })) : (Jc[o] || (Jc[o] = []), Jc[o].push(e))
            }
        }
    }

    function bn(t, e) { xn({ type: $o, name: t, handler: e }) }

    function En(t, e, n) { xn({ type: Qo, name: t, handler: e, options: n }) }

    function Sn(t) {
        var e = t.type,
            n = t.name,
            r = t.hookPostion,
            a = t.args,
            o = _n(e, n, r),
            s = {};
        if (Jc[o]) {
            if (s.exist = !0, e === $o) {
                var c, u = Jc[o],
                    f = u.handler;
                try { c = f.apply(null) } catch (l) {}
                return s.result = c, s
            }
            var d = t.scope;
            d || (d = new Mt);
            try {
                i(Jc[o], function(t) {
                    var e = t.handler,
                        n = t.options;
                    n = n || {};
                    var r = m({ scope: d }, a);
                    e.call(d, r)
                })
            } catch (l) {}
        } else s.exist = !1;
        return s
    }

    function Tn(t) { this.limit = t, this.reset() }

    function Cn(t, e, n, r, a) { return String(t) + String(e) + String(n) + String(r) + String(a) }

    function wn(t, e, n, r) { return String(t) + String(e) + String(n) + String(r) }

    function An(t, e, n, r, a, i, o, s) {
        var c = this;
        c.id = t, c.time = E(), c.msg = e, c.lineno = r, c.colno = a, c.filename = n, c.count = 1, c.stack = i && i.stack || "", c.module = o, c.trigger = s || Qc, c.error = i, c.fix();
        var u = wn(e, r, a, o),
            f = tu[u];
        c.ep = f ? 0 : 1, tu[u] = !0, c.fep = 0, c.trace = {}, this.recordFileName()
    }

    function Pn(t) {
        var n = function(t) { var e = []; return i(t, function(t) { e.push(t.toObject()) }), e }(Zc.c);
        if (!n || !n.length) return null;
        var r = { fu: Xc ? Xc : Xc++, os: parseInt((E() - (Ss.pfStart || e)) / 1e3) };
        Es.ulabel && (r.ulabel = Es.ulabel), Oe.buildImmediateAction(fi, null, null, { actionOptions: m(r, { items: n }) }), Zc.reset()
    }

    function Rn(t, e, n, r, a, o, s) {
        if (e || !ys.ignoreNoFilePropError) {
            var c = !1;
            if (i(ys.domains, function(t) { return c = t.test(e), c ? !1 : void 0 }), !c) {
                var u = a && a.moduleId,
                    f = Cn(e, t, n, r, u),
                    l = Zc.get(f);
                l ? l.increase() : (l = new An(f, t, e, n, r, a, u, o), Zc.add(f, l), cc.errs && cc.errs.push(l));
                var d = l.initTraceInstance();
                l.triggerActionHook(d);
                try { l.trace[d].scope.setContext(s) } catch (p) {}
            }
        }
    }

    function On() {
        var e = t.onerror;
        t.onerror = function(t, n, r, a, i) { return Rn(t, n, r, a, i), ua(e) ? e.apply(this, arguments) : void 0 }, t.onerror._ty = !0
    }

    function Dn() {
        var e = t.onerror;
        e && e._ty || On()
    }

    function Nn(t, e) {
        if (t) {
            var n = t.message || "",
                r = t.stack,
                a = "",
                o = 0,
                s = 0;
            if (r) {
                var c = r.split(/\n/);
                i(c, function(t, e) {
                    if (t && (t = t.trim()), t && 0 === t.indexOf("at ")) {
                        var n = t.indexOf("("),
                            r = t.indexOf(")");
                        if (n && r) {
                            var i = n + 1;
                            i > r && (i = r);
                            var c = t.substring(i, r);
                            if (c) {
                                var u = c.split(":");
                                u && u.length > 2 && (a = (u.slice(0, u.length - 2) || []).join(":"), o = +u[u.length - 2], s = +u[u.length - 1])
                            }
                        }
                    }
                    return a && la(o) && o > 0 && la(s) && s > 0 ? !1 : void 0
                })
            }
            Rn(n, a, o, s, { stack: r }, $c, e)
        }
    }

    function In() {
        var e = xa();
        return e ? On() : ya(t, Ea, function(e) {
            var n, r, a, i, o;
            (e instanceof t.Event || t.ErrorEvent && e instanceof t.ErrorEvent) && (n = e.message || e.error && (e.error.message || e.error.constructor.name) || "", r = e.lineno || 0, a = e.colno || 0, i = e.filename || e.error && e.error.filename || e.target && e.target.baseURI || "", o = e.error), Rn(n, i, r, a, o)
        }), Gc.on([Sa, Ta, Ca, wa], function(t) { Pn() }).on(Sa, function() { e && Js(Dn) }), setInterval(Pn, Vc, !0)
    }

    function kn(t) {
        if (t) {
            var e = Es.firstScreenResources = Es.firstScreenResources || [];
            ca(t) || (t = [t]), i(t, function(t) {
                if (sa(t)) e.push(t);
                else if (bs(t)) {
                    var n = t.src || t.href;
                    n && e.push(n)
                }
            })
        }
    }

    function jn(t) {
        ca(t) || (t = [t]), i(t, function(t) {
            if (t) {
                if (!(t instanceof RegExp)) throw new us("parameter's type requires RegExp");
                (ys.domains || (ys.domains = [])).push(t)
            }
        })
    }

    function qn() {
        if (Object.defineProperty) {
            var e = t[Da];
            e && Object.defineProperty(t, Da, { get: function() { return ru++ > 0 && t.console && console.warn("window.%s is deprecated, use window.%s instead.", Da, Na), e } })
        }
    }

    function Hn(t, e) {
        if (Ln()) {
            var n = { rm: {}, em: [], cpm: {} };
            e && (n.rm.res = e.res || []), t && (n.cpm = t, n.cpm.ul = fs.URL),
                nbsJsBridge.logJsResult(oa(n))
        }
    }

    function Ln() { return "undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult }

    function Mn() { var t = 0; try { t = window.performance.timing.loadEventEnd } catch (e) {} return t > 0 }

    function Bn(t, n) {
        var r = { tr: !1, tt: h(fs.title), charset: fs.characterSet };
        Es.resources && m(r, Es.resources), ee(function() { r.debug = fc }), re();
        var a = cc.errs;
        i(a, function(t, r) {
            var i = t.toObject();
            i.o = i.o - n && n.navigationStart || e, a[r] = i
        }), r.err = a;
        var o, s = "getEntriesByType";
        return t[s] ? o = t[s]("resource") : O(v(au, [s])), o && (r.tr = !0, r.res = [], i(o, function(t) {
            function e(e) { var n = t[e]; return n > 0 ? n : 0 }
            var n = t.initiatorType,
                a = t.name,
                o = { o: e("startTime"), rt: n, n: a, f: e(Ei), ds: e(ki), de: e(ji), cs: e(Li), ce: e(Mi), sl: e(Bi), qs: e(Si), rs: e(Ti), re: e(Ci), ts: t.transferSize || 0, es: t.encodedBodySize || 0 };
            if ("xmlhttprequest" === n) {
                var s = Un(a);
                i(s, function(t, e) { 0 == e.indexOf("s_") && (o[e] = t) })
            }
            r.res.push(o)
        })), r
    }

    function Un(t) { var e; return i(cc.xhrs, function(n, r) { return r && t.indexOf(r) > -1 ? (e = n, !1) : void 0 }), e }

    function Fn(t) { if (t) { var e = t.fetchStart; if (e) return e - t.navigationStart } }

    function zn() {
        var n = {},
            r = 0,
            a = t.performance;
        a && a.getEntriesByType && i(a.getEntriesByType("mark") || [], function(t) {
            if (t && t.name && t.startTime && 0 === t.name.indexOf(ei)) {
                var e = t.name.substring(ei.length);
                e && (n[e] = Math.round(t.startTime), r += 1)
            }
        });
        var o = a && a.timing ? a.timing.navigationStart : e,
            s = t[ti] && t[ti].data,
            c = m({}, s || {}, Ts || {});
        return c && a && a.timing && i(c, function(t, e) { fa(t) && t.timestamp && (n[e] = t.timestamp - o, r += 1) }), r > 0 ? n : null
    }

    function Yn(t, e) { var n = m({}, t || {}, { type: ci }); return e && (n.body = e), n }

    function Gn(t, e) {
        var n = oa(t),
            r = n ? n.length : 0;
        if (r > ni && t.res && t.res.length > 0) {
            t.res = t.res.slice(0, e);
            var a = oa(t),
                i = a ? a.length : 0;
            return i > ni ? Gn(t, e - 10 > 0 ? e - 10 : 0) : t
        }
        return t
    }

    function Kn() {
        var e = S(function() {
            function e(t) { return t ? "1" : "0" }
            if (!Cs.pfSent) {
                var n = t.performance,
                    r = !!n,
                    a = n && n.timing;
                r || O(v(au, ["pf"]));
                var o = m(ve(a), ys.pageServerData, Es),
                    s = m({}, Fs);
                s.fp = ie(s, t), s.dr = me(s, n), s.fs = oe(s, n);
                var c = m(o, s) || {},
                    u = zn();
                u && i(u, function(t, e) { la(t) && t >= 0 && (c[e] = t) });
                var f, l = "",
                    d = a ? Fn(a) : 0;
                i(["fp", "fs", "dr", "le"], function(t) { l += e((d ? c[t] - d : c[t]) >= _s[t + "_threshold"]) }), r && l.indexOf("1") > -1 && (f = Bn(n, a), c.ressize = !(!n || !n.getEntriesByName)), u && (f || (f = {}), f.mark = u), c.trflag = l || "0000", Ss.pfStart = E(), delete c.firstScreenResources, delete c.resources;
                var p = Pt(fs.URL);
                if (f || (f = { tr: !1, tt: h(fs.title), charset: fs.characterSet }), f.bizId_param = p.bizIdParams, f.opt_param = p.params, f.request_param = p.requestParams, ys.collectAllParam[Go] && p.operaAllParam && (f.opera_all_param = {}, f.opera_all_param[Go] = p.operaAllParam), Cs.opt_custom_param = p.optCustomParams, f) try { f = Gn(f, 150) } catch (g) {}
                var y = Yn(c, f),
                    _ = Oe.buildImmediateAction(ci, "", y, { notSend: Cs.recordingCpActions });
                Cs.recordingCpActions && (_.crossPage = !0, Cs.cpActions.push(_), w(function() { Ce(!0) }, iu));
                try { Hn(c, f) } catch (g) {}
                Cs.pfSent = !0
            }
        });
        return G() && Mn() && !Cs.pfSent && e(), Gc.on(Sa, function() {
            var t = 0;
            if (_s.pfDelay && fa(_s.pfDelay)) {
                var n = zn();
                i(_s.pfDelay, function(e, r) {
                    (!n || null == n[r]) && la(e) && e > t && (t = e)
                })
            }
            if (G() && Cs.recordingCpActions) {
                var r = _s.cross_page_delay ? _s.cross_page_delay : Wi,
                    a = r - t;
                0 > a && (a = 0), iu = a
            }
            w(e, t)
        }).on([Ta, Ca, wa], e)
    }

    function Wn(t) { var e = t; return ou && (su.setAttribute("href", e), e = su.href), su.setAttribute("href", e), { href: su.href, protocol: su.protocol ? su.protocol.replace(/:$/, "") : "", host: su.host, search: su.search ? su.search.replace(/^\?/, "") : "", hash: su.hash ? su.hash.replace(/^#/, "") : "", hostname: su.hostname, port: su.port, pathname: "/" === su.pathname.charAt(0) ? su.pathname : "/" + su.pathname } }

    function Jn(t) { var e = !1; return ys.corsDomains && i(ys.corsDomains, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function Vn(t) { var e = Wn(t); return e.protocol === cu.protocol && e.host === cu.host || Jn(e.host) }

    function Xn(t, e, n) {
        var r = ba().replace(/-/g, ""),
            a = {};
        return i(e, function(e) {
            if (e) {
                var i = n && n[e];
                null == i && (t.setRequestHeader(e, r), i = r), a[e] = i
            }
        }), a
    }

    function $n(t) { t.pcid = t.parentContext.id, t.parentContext.updateRemain(1, ii), t.parentContext.items.push(t.contextData) }

    function Qn(t) {
        return function e(n, r) {
            var a = this,
                i = e;
            if (i._ && (i._ = 1), !a[ka]) {
                var o = a[Da] = {};
                o.method = n, o.url = r, o.id = fu++, o.jserror = !1, o.headerRecord = {};
                var s = Us.get("event");
                s && (o.key = s.key, s.remain++), ar(o, Cs.context), o.parentContext = o.context.parent, o.contextData = { type: ii, id: o.id, cid: o.context.id, method: o.method, url: o.url, state: o.state, ignore: !1, jserror: o.jserror }, o.context && o.context.setData(o.contextData), o.parentContext && $n(o), o.scope = new Mt, o.toJSON = function() {}
            }
            try { return t.apply(a, arguments) } catch (c) {}
            return G() ? void 0 : d(t, [a, arguments])
        }
    }

    function Zn(t) {
        return function e(n, r) {
            var a = this,
                i = e;
            if (i._ && (i._ = 1), !a[ka] && a[Da]) {
                var o = a[Da],
                    s = gr(n, ys.optCustomParamRules);
                ms.isGather && (o.wReqHeaderParam || (o.wReqHeaderParam = {}), o.wReqHeaderParam[n] = r), o && s && (o.reqHeaderParam || (o.reqHeaderParam = {}), o.reqHeaderParam[n] = r), o.headerRecord || (o.headerRecord = {}), o.headerRecord[n] = r
            }
            try { return t.apply(a, arguments) } catch (c) {}
            return G() ? void 0 : d(t, [a, arguments])
        }
    }

    function tr(t) {
        return function e(n) {
            var r = this,
                a = e;
            if (a._ && (a._ = 1), !r[ka]) {
                var i = r[Da];
                if (i && (i.start = E(), i.reqSize = T(n), i.requestData = n, i.contextData && (i.contextData.start = i.start)), G()) {
                    if (i.context && null == i.context.parent) {
                        var o = tn(i.start);
                        o && (i.context.parent = o, i.parentContext = i.context.parent, $n(i))
                    }!i.parentContext && Cs.recordingCpActions && (i.context.crossPage = !0, Cs.cpRemain.ajax++, Cs.cpActions.push(i.context))
                }
                var s = Us.get("event");
                s && s.type === Eo && i.key === s.key && i.parentContext && dn(i.key, i.parentContext), cr(r);
                var c = Vn(i.url);
                if (_s.x_server_switch && r.setRequestHeader && _s.key && i && c) {
                    var u = Er(),
                        f = "c=B|" + _s.key;
                    u && (f += ";x=" + u), r.setRequestHeader($a, f), i.xTingyunSent = !0, _s.apm_headers && (i.apms = Xn(r, _s.apm_headers, i.headerRecord))
                }
                Sn({ type: Qo, name: es, hookPostion: rs, args: { target: r }, scope: i.scope })
            }
            try { return t.apply(r, arguments) } catch (l) {}
            return G() ? void 0 : d(t, [r, arguments])
        }
    }

    function er(t) {
        i(lu, function(e, n) {
            var r = "on" + n;
            t[r] ? M(t, r, function(r) { return function() { return rr(t, e, n), ua(r) ? r.apply(this, arguments) : void 0 } }) : t[r] = function() { rr(t, e, n) }
        })
    }

    function nr(t) { i(lu, function(e, n) { ya(t, n, function() { rr(t, e, n), t && t[uo] === uu && ur(t) }) }) }

    function rr(t, e, n) { t && t[Da] && (t[Da].errorCode = e, t[Da].errorEvent = n) }

    function ar(t, e) {
        if (!t.context) {
            var n = "".concat(t.url, "-").concat(t.id);
            t.context = Oe.createEvent(e, n, ii)
        }
    }

    function ir(t, e) { Cs.context = t.context, Cs.globalAsyncStore = t, Cs.globalAjaxContext = e }

    function or(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), t.contextData && t.context.state === bi && _s.upload_timeout_ajax && (t.contextData.brsOnly = !0, Oe.buildImmediateAction(ii, "", t.contextData, { actionOptions: { state: bi } })), Cs.globalAsyncStore = null, Cs.globalAjaxContext = null
    }

    function sr(t, e) {
        if (G()) {
            var n = t[uu];
            n && !t[co] && (M(t, uu, e), t[co] = !0, t[uo] = uu)
        }
        var r = t[du];
        !r || t[co] || r[co] || (M(t, du, e), t[co] = !0, t[uo] = du)
    }

    function cr(t) {
        function e(e) {
            return L(function n() {
                var r = n;
                r._ && (r._ = 1), ur(t);
                var a;
                if (ua(e)) {
                    var i = t[Da];
                    if (i && 4 == t.readyState) {
                        var o = E();
                        ir(i, t)
                    }
                    try { a = e.apply(this, arguments) } catch (s) { throw i && (i.jserror = !0), s }
                    i && 4 == t.readyState && (i.cbTime = E() - o)
                }
                return a
            })
        }
        sr(t, e);
        try { G() ? nr(t) : er(t) } catch (n) {}
        if (!t[co]) {
            var r = L(function a() {
                var e = a;
                e._ && (e._ = 1), t[co] || 4 === t.readyState && ur(t)
            });
            try { G() ? ya(t, Aa, r) : (t[du] = r, t[du][co] = !0) } catch (n) { return }
        }
        Js(function() { sr(t, e) })
    }

    function ur(t) {
        var e = t[Da];
        if (e && (e.end = E(), e.readyState = t.readyState, 4 == t.readyState)) {
            if (e.callbackEnd) return;
            e.callbackEnd = !0, delete t[co], ir(e), e.status = t.status, e.text = lr(t), e.resSize = T(e.text);
            var n = hr(e, t);
            Sn({ type: Qo, name: es, hookPostion: as, args: { target: t, actionData: fr(e) }, scope: e.scope });
            var r = Us.get("event");
            Js(function() { pr(e, n), r && r.key == e.key && (r.xhrs.push(n), 0 === --r.remain && r._end()), cc.xhrs && (cc.xhrs[e.url] = n), or(e) })
        }
    }

    function fr(t) { var e = t.contextData; return { method: e.method, url: e.url, start: e.start, end: e.end, du: e.du, status: e.status, err: e.err, rec: e.rec, send: e.send, requestHeader: t.headerRecord } }

    function lr(t) {
        var e = "";
        if ("" == t.responseType || "text" == t.responseType) e = t.responseText;
        else if (t.response) e = t.response;
        else try { e = t.responseText } catch (n) {}
        return e || ""
    }

    function dr(t) { return t.data && "event" === t.data.type ? { text: t.data.text, path: t.data.path, src: t.data.src, value: t.data.value, href: t.data.href, title: t.data.title, nodeName: t.data.nodeName, items: t.items } : t.parent && t.parent.data && "event" === t.parent.data.type ? { text: t.parent.data.text, path: t.parent.data.path, src: t.parent.data.src, value: t.parent.data.value, href: t.parent.data.href, title: t.parent.data.title, nodeName: t.parent.data.nodeName, items: t.parent.items } : t.parent && t.parent.parent ? dr(t.parent) : { text: "", path: "", nodeName: "", items: [] } }

    function pr(t, e) { t && e && t.jserror && (e.jserror = t.jserror), t.errorCode && !e.err && (e.err = t.errorCode), t.cbTime && !e.cb && (e.cb = t.cbTime), zt(e, t.scope) }

    function hr(e, n) {
        if (e && !e.composed) {
            var r = e.status;
            if (ms.isGather) {
                var a = dr(e.context);
                e.wCustom = { fromJS: "agent", key: _s.key, ajaxUrl: e.url, items: e.context.items, itemsTemp: a && a.items, id: e.id, url: document.URL, text: a && a.text, href: a && a.href, title: a && a.title, value: a && a.value, src: a && a.src, xpath: a && a.path, nodeName: a && a.nodeName, method: e.method, urlParams: st(document.URL), ajaxUrlParams: st(e.url), start: e.start, requestHeader: e.wReqHeaderParam, requestParams: e.requestData, responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"), responseBody: n.response, children: [] }, t.top && t.top.postMessage && t.top.postMessage(oa(e.wCustom), "*"), delete e.wCustom, delete e.wReqHeaderParam
            }
            m(e.contextData, { end: e.end, du: r > 0 ? e.end - e.start : 0, cb: e.cbTime || 0, status: r, err: e.errorCode ? e.errorCode : 0, rec: e.resSize, send: e.reqSize });
            var i = e.contextData,
                o = {};
            o[za] = e.reqHeaderParam || {};
            var s = Pt(e.url),
                c = s.bizIdParams,
                u = s.params,
                f = s.requestParams,
                l = s.optCustomParams,
                d = xr(e.requestData, ys.bizIdsRules[qa], ys.bizIdsRules[Ma]),
                p = xr(e.requestData, ys.customParamsRules[qa], ys.customParamsRules[Ma]),
                h = xr(e.requestData, ys.requestParamKeys[Ba], ys.requestParamKeys[Ua]);
            o[Ya] = It(br(e.requestData), ys.optCustomParamRules[Ya], !0);
            var v = yr(n, ys.bizIdsRules),
                g = yr(n, ys.customParamsRules);
            o[Ga] = yr(n, ys.optCustomParamRules, Ga);
            var y = {},
                _ = {},
                x = Y(e.text);
            x && (y = _r(x, ys.bizIdsRules), _ = _r(x, ys.customParamsRules), o[Ka] = It(x, ys.optCustomParamRules[Ka], !0)), i.bizId_param = m({}, c, d, v, y), i.opt_param = m({}, u, p, g, _), i.request_param = m({}, f, h), i.opt_custom_param = Nt(mr(o, l));
            var b = e.xTingyunSent ? Y(vr(n, Qa)) : null;
            if (b) {
                if (i.hasServerHeader = !0, i.s_id = b.id, i.s_tname = b.tname, i.s_tid = b.tid, i.s_rid = b.rid, i.s_duration = b.duration, "user" in b) {
                    var E = b.user,
                        S = E;
                    if (null != E && 0 === E.indexOf(Za)) { var T = E.substring(Za.length); try { S = ac.decode(T) } catch (C) {} }
                    i.s_user = S, Tt(S)
                }
                "bid" in b && (i.s_bid = Dt(b.bid)), "ber" in b && (i.s_ber = b.ber), "isError" in cc && (i.s_isError = b.isError)
            } else i.hasServerHeader = !1;
            e.apms && (i.apms = e.apms), e.key && (i.__spe = 1);
            var w = {};
            return ys.collectAllParam[Go] && s.operaAllParam && (w[Go] = s.operaAllParam), ys.collectAllParam[Ko] && e.headerRecord && (w[Ko] = e.headerRecord), ys.collectAllParam[Wo] && e.requestData && (w[Wo] = e.requestData), ys.collectAllParam[Jo] && (w[Jo] = n.getAllResponseHeaders()), ys.collectAllParam[Vo] && e.text && (w[Vo] = e.text), At(w) || (i.opera_all_param = w), e.composed = !0, i
        }
    }

    function mr(t, e) { return i(e, function(e, n) { t[n] = m({}, t[n] || {}, e || {}) }), t }

    function vr(t, e) { if (t && t.getResponseHeader) try { return t.getResponseHeader(e) } catch (n) {} }

    function gr(t, e) { var n; return i(e[za], function(e) { return t === e ? (n = !0, !1) : void 0 }), n }

    function yr(t, e, n) {
        var r = {};
        return i(e[n || Ha], function(e) {
            var n = vr(t, e);
            null != n && nt(r, e, n)
        }), r
    }

    function _r(t, e, n) {
        var r = {};
        return i(e[n || La], function(e) {
            var n = Ot(Wa, e),
                a = n(t);
            null != a && nt(r, e, a)
        }), r
    }

    function xr(t, e, n) { return Rt(br(t), e, n) }

    function br(t) { var e = Y(t); return e || (e = ct(t)), e }

    function Er() { try { return ba().substring(0, 16) } catch (t) {} }

    function Sr() {
        var e = ls && ls.prototype;
        e ? (M(e, "open", Qn), M(e, "setRequestHeader", Zn), M(e, "send", tr)) : ls && (t.XMLHttpRequest = function() { var t = new ls; return M(t, "open", Qn), M(t, "setRequestHeader", Zn), M(t, "send", tr), t })
    }

    function Tr(t) { t && !t.composed && (m(t.contextData, { end: t.end || E() }), t.composed = !0) }

    function Cr() { _s.set_timeout_max_depth && _s.set_timeout_max_depth > 0 && (hu = _s.set_timeout_max_depth), M(window, "setTimeout", Ir), M(window, "clearTimeout", kr) }

    function wr(t) { t.context || (t.context = Oe.createEvent(Cs.context, "".concat(t.name, "-").concat(t.id), oi, t.name)) }

    function Ar(t) { Cs.context = t.context, Cs.globalAsyncStore = t }

    function Pr(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), Cs.globalAsyncStore = null
    }

    function Rr(t) {
        var e = 0,
            n = t.context;
        if (n) {
            var r = n.remain[ii],
                a = n.remain[si];
            e += r.current + r.children + a.current + a.children
        }
        return e > 0
    }

    function Or(t) { for (var e = 0; null != t && 5 > e;) e += t.type === oi ? 1 : 0, t = t.parent; return 5 > e }

    function Dr(t) { return function() { return H(t).apply(this, arguments) } }

    function Nr(t, e, n, r) {
        var a = null,
            i = null;
        return fa(r) && r[so] || null == Cs.context ? i = Dr(t) : Or(Cs.context) ? (a = { id: pu++, name: e, start: E(), delay: n, parentContext: Cs.context }, wr(a), a.contextData = { type: oi, id: a.id, cid: a.context.id, name: a.name, start: a.start, delay: a.delay }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, oi), a.parentContext.items.push(a.contextData)), i = L(function() { var e; try { Ar(a) } catch (n) {} try { t && (e = t.apply(this, arguments)) } finally { try { Rr(a) ? (a.end = E(), Tr(a), Pr(a)) : a && a.context.removeFromParent() } catch (n) {} } return e })) : i = Dr(t), { store: a, cb: i }
    }

    function Ir(t, e) {
        return function(n) {
            var r = pa.call(arguments, 0),
                a = null;
            if (!arguments[2] && ua(n)) {
                var i = Nr(n, e, r[1], r[2]);
                i.cb && (r[0] = i.cb), a = i.store
            }
            var o = t.apply(this, r);
            return a && (mu[o] = a), o
        }
    }

    function kr(t) {
        return function(e) {
            try {
                var n = mu[e];
                n && n.context && (n.context.removeFromParent(), mu[e] = null)
            } catch (r) {}
            return t.apply(this, arguments)
        }
    }

    function jr(t) { m(t.contextData, { pvid: t.pvid, end: t.end, url: t.url }, t.serverData || {}, t.pfData || {}) }

    function qr(t) { t.context || (t.context = Oe.createEvent(t.parentContext, "".concat(t.src, "-").concat(t.id), si)) }

    function Hr(t, e, n) {
        function r() {
            if (a.end = E(), a.sameOrigin && this && this.contentDocument && this.contentWindow) {
                a.sameOrigin = !0, a.url = this.contentDocument.URL;
                var e = kt(Xa, Va, this.contentWindow[Va] || this.contentDocument.cookie || "");
                if (e) {
                    var n = qt(e);
                    jt(Xa, "", -1e3, "/", this.contentDocument), a.serverData = Ht(n)
                }
                var i = this.contentWindow[Na],
                    o = this.contentWindow.performance && this.contentWindow.performance.timing,
                    s = { window: this.contentWindow, globalStart: i ? i.globalStart : o.navigationStart, agent: m({}, i && i.currentAgent ? i.currentAgent : {}) };
                i && (a.pvid = i.pvid || "");
                var c;
                try { c = ge(o, s) } catch (u) { c = {} }
                a.pfData = c, a.pfData.le && (a.end = o.navigationStart + a.pfData.le)
            } else a.sameOrigin = !1;
            jr(a), Lr(a), t.removeEventListener("load", r)
        }
        if (t) {
            n || (n = t.src ? yu : gu);
            var a = { id: vu++, src: e, loadType: n, start: E(), parentContext: Cs.context };
            a.sameOrigin = Vn(a.src), qr(a), a.contextData = { type: si, loadType: a.loadType, id: a.id, cid: a.context.id, src: a.src, start: a.start, sameOrigin: a.sameOrigin }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, si), a.parentContext.items.push(a.contextData)), !a.parentContext && Cs.recordingCpActions && (a.context.crossPage = !0, Cs.cpRemain.iframe++, Cs.cpActions.push(a.context)), t.addEventListener("load", r)
        }
    }

    function Lr(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), Cs.context = null
    }

    function Mr() {
        function t(t) { return function(e) { return "IFRAME" === e.nodeName && e.src && Hr(e, e.src, gu), t.apply(this, arguments) } }
        M(Node.prototype, "appendChild", t), M(Node.prototype, "insertBefore", t)
    }

    function Br() {
        function t() {
            var t = arguments[0],
                e = this;
            return Hr(e, t), r.apply(this, arguments)
        }
        if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
            var e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src"),
                n = e.get,
                r = e.set;
            Object.defineProperty(HTMLIFrameElement.prototype, "src", { get: function() { return n.apply(this, arguments) }, set: t, enumerable: !0, configurable: !0 })
        }
    }

    function Ur() { Mr(), Br() }

    function Fr(t) { Ls(zi, oa(t)) }

    function zr(t) {
        var e = _u++,
            n = t.url || "",
            r = E(),
            a = Oe.createEvent(Cs.context, "".concat(n, "-").concat(e), ui, t.subType || Yi),
            i = { type: ui, subType: a.subType, id: e, cid: a.id, url: n, start: r };
        a && a.setData(i);
        var o;
        return a.parent && (a.parent.type === ii ? hr(Cs.globalAsyncStore, Cs.globalAjaxContext) : a.parent.type === oi && Tr(Cs.globalAsyncStore), o = a.collectCrossPageData(), xu = o, t.delayStorage || Fr(o), a.clear(), a = null), { storageData: o, context: a }
    }

    function Yr(t) {
        return function() {
            var e = arguments[0],
                n = zr({ url: e, delayStorage: !0 }),
                r = n.storageData,
                a = n.context;
            try {
                var i = t.apply(this, arguments);
                if (i) {
                    if (!r && a) {
                        var o = tn(a.data.start);
                        o && (a.parent = o, r = a.collectCrossPageData(), xu = r, a.clear(), a = null)
                    }
                    Fr(r)
                }
                return i
            } catch (s) {}
            return G() ? void 0 : d(t, [this, arguments])
        }
    }

    function Gr() { M(t, "open", Yr) }

    function Kr() {
        function t(t) { return { valid: ao === t.target.nodeName && !t.defaultPrevented && t.target.href, url: t.target.href, subType: Gi } }

        function e(t) { return { valid: io === t.target.nodeName && !t.defaultPrevented && t.target.action, url: t.target.action, subType: Ki } }
        i([$i, Qi], function(n) {
            fs.addEventListener(n, function(r) {
                if (r) {
                    var a = n === $i ? t(r) : e(r);
                    if (a.valid) {
                        var i = r.timeStamp ? en(r) : tn(Ze(r));
                        i && (Cs.context = i, zr({ subType: a.subType, url: a.url }), Cs.context = null)
                    }
                }
            }, _defineProperty({}, Vi, !0))
        })
    }

    function Wr() { we(xu), xu = null }

    function Jr() { ya(fs, Yo, function() { "hidden" === fs.visibilityState && Wr() }), ya(t, wa, function() { Wr() }) }

    function Vr() { Gr(), Kr(), Jr() }

    function Xr() { _s.disable_hook_event || nn(), _s.disable_hook_timer || Cr(), _s.disable_hook_iframe || Ur(), _s.disable_hook_cross_page || Vr() }

    function $r(t, e) { t && ys.routerEnable && ln({ key: t, autoEnd: !0, endDelay: _s.router_event_delay || Io, type: Eo, debugInfo: { api: e } }) }

    function Qr() {
        bu.forEach(function(e) {
            M(t.history, e, function(n) {
                return function(r, a, i) {
                    var o;
                    o = n.apply(this, arguments);
                    try { $r(t.location.href, e) } catch (s) {}
                    return o
                }
            })
        }), ya(t, qo, function() { $r(t.location.href, qo) })
    }

    function Zr() { ya(t, jo, function() { $r(t.location.href, jo) }) }

    function ta() {
        var e = t.history;
        e ? Qr() : Zr()
    }

    function ea() { ys.routerEnable && ta() }

    function na() {
        if (G()) try { ya(t, "message", Zt) } catch (e) {}
        if (yn(cc), G() && Xr(), Kn(), Sr(), In(), ea(), cc._end = E(), ee(function() { fc._end = cc._end }), qn(), G()) {
            var n = Y(Hs(zi));
            n && n.fromUrl && fs.referrer && n.fromUrl.indexOf(fs.referrer) > -1 && (Cs.recordingCpActions = !0, Cs.cpParent = n), Ms(zi)
        }
    }

    function ra(e) {
        if ((!t[Na] || !t[Na].inited) && e && (ua(e) || fa(e))) {
            var n = Sn({ type: $o, name: Zo });
            (!n.exist || n.result) && ($t(e), (_s.key || _s.appKey) && (na(), t[Na].inited = !0), Sn({ type: $o, name: ts }))
        }
    }

    function aa() { return window[Na] && 3 === window[Na].mainVersion ? window[Na] : (nu.init = ra, nu) }
    var ia, oa, sa = o("String"),
        ca = o("Array"),
        ua = o("Function"),
        fa = o("Object"),
        la = o("Number"),
        da = o("Undefined"),
        pa = [].slice,
        ha = '"',
        ma = /([\"\\])/g,
        va = /\n/g,
        ga = t.JSON;
    ga && ga.parse && ga.stringify ? (ia = n, oa = r) : (ia = s, oa = c);
    var ya;
    ya = t.addEventListener ? f : l;
    var _a = t.encodeURIComponent,
        xa = function() { return !document.addEventListener },
        ba = (t.location.protocol, function() {
            function t(t) { return 0 > t ? NaN : 30 >= t ? 0 | Math.random() * (1 << t) : 53 >= t ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN }

            function e(t, e) { for (var n = t.toString(16), r = e - n.length, a = "0"; r > 0; r >>>= 1, a += a) 1 & r && (n = a + n); return n }
            return function(n) { return n || (n = ""), e(t(32), 8) + n + e(t(16), 4) + n + e(16384 | t(12), 4) + n + e(32768 | t(14), 4) + n + e(t(48), 12) }
        }());
    C.prototype = {
        on: function(t, e) { var n = this; return sa(t) ? (n.events[t] || (n.events[t] = [])).push(e) : ca(t) && i(t, function(t) { n.on(t, e) }), n },
        off: function(t, e) {
            var n = arguments.length,
                r = this;
            if (0 === n) return r.events = {}, r;
            var a = r.events[t];
            if (!a) return r;
            if (1 === n) return r.events[t] = null, r;
            for (var i, o = a.length; o--;)
                if (i = a[o], i === e) { a.splice(o, 1); break }
            return r
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1),
                n = this.events[t];
            return n && i(n, function(t) { return t.apply(this, e) }), this
        },
        unshift: function(t, e) { var n = this; return (n.events[t] || (n.events[t] = [])).unshift(e), n }
    };
    var Ea = "error",
        Sa = "load",
        Ta = "unload",
        Ca = "beforeunload",
        wa = "pagehide",
        Aa = "readystatechange",
        Pa = "complete",
        Ra = "DOMContentLoaded",
        Oa = "on",
        Da = "_ty_rum",
        Na = "TINGYUN",
        Ia = 2,
        ka = "__ign",
        ja = "__ty_asyncWrap__",
        qa = "2",
        Ha = "3",
        La = "4",
        Ma = "5",
        Ba = "1",
        Ua = "2",
        Fa = "1",
        za = "2",
        Ya = "3",
        Ga = "4",
        Ka = "5",
        Wa = "body",
        Ja = "reqBody",
        Va = "TINGYUN_COOKIE_VALUE",
        Xa = "TINGYUN_DATA",
        $a = "X-Tingyun",
        Qa = "X-Tingyun-Data",
        Za = "TY_BASE64",
        ti = "__TINGYUN",
        ei = "ty_",
        ni = 64512,
        ri = 6e4,
        ai = "event",
        ii = "ajax",
        oi = "timer",
        si = "iframe",
        ci = "pf",
        ui = "crossPage",
        fi = "jsError",
        li = "e",
        di = "a",
        pi = "t",
        hi = "i",
        mi = "p",
        vi = "c",
        gi = "j",
        yi = "finish",
        _i = "pending",
        xi = "finish",
        bi = "timeout",
        Ei = "fetchStart",
        Si = "requestStart",
        Ti = "responseStart",
        Ci = "responseEnd",
        wi = "domContentLoadedEventStart",
        Ai = "domContentLoadedEventEnd",
        Pi = "domInteractive",
        Ri = "domComplete",
        Oi = "loadEventStart",
        Di = "loadEventEnd",
        Ni = "unloadEventStart",
        Ii = "unloadEventEnd",
        ki = "domainLookupStart",
        ji = "domainLookupEnd",
        qi = "redirectStart",
        Hi = "redirectEnd",
        Li = "connectStart",
        Mi = "connectEnd",
        Bi = "secureConnectionStart",
        Ui = 5,
        Fi = 5,
        zi = "__ty_crs_page_events",
        Yi = "window_open",
        Gi = "a_link",
        Ki = "form_submit",
        Wi = 3e3,
        Ji = "__ty_event_patch_tag",
        Vi = "__ty_event_patch_disable",
        Xi = "__ty_event_patch_id",
        $i = "click",
        Qi = "submit",
        Zi = "spe",
        to = "addEventListener",
        eo = "onProperty",
        no = "inline",
        ro = "IMG",
        ao = "A",
        io = "FORM",
        oo = 3,
        so = "__ty_ignore",
        co = "__ty_xhr_hooked",
        uo = "__ty_xhr_hooked_type",
        fo = 200,
        lo = "TY_USER_ID",
        po = "TY_SESSION_N_ID",
        ho = "TY_DEVICE_N_ID",
        mo = 18e5,
        vo = "|",
        go = "__TY_SPE_STORE",
        yo = 6e4,
        _o = 6e5,
        xo = "auto",
        bo = "defined",
        Eo = "route",
        So = 500,
        To = "success",
        Co = "fail",
        wo = "TY_path_gather",
        Ao = "EagleEye-TraceID",
        Po = "__TY_ELEMENT_CB",
        Ro = "__TY_CB_COUNTER",
        Oo = "__TY_IMAGE_LOAD_HOOK",
        Do = 60,
        No = "__tagFirstPaintTime",
        Io = 500,
        ko = 1e4,
        jo = "hashchange",
        qo = "popstate",
        Ho = "pushState",
        Lo = "replaceState",
        Mo = "vueRouter",
        Bo = "normal",
        Uo = "script",
        Fo = "current",
        zo = "crossPage",
        Yo = "visibilitychange",
        Go = "URL",
        Ko = "QH",
        Wo = "QB",
        Jo = "RH",
        Vo = "RB",
        Xo = 200,
        $o = "lifecycle",
        Qo = "action",
        Zo = "preInit",
        ts = "init",
        es = "ajax",
        ns = "error",
        rs = "ajax_send",
        as = "ajax_finish",
        is = "error_trigger",
        os = "paint",
        ss = "largest-contentful-paint",
        cs = "first-contentful-paint",
        us = t.Error,
        fs = t.document,
        ls = t.XMLHttpRequest,
        ds = t.location,
        ps = t.navigator,
        hs = t.HTMLElement,
        ms = { isGather: !1 },
        vs = { fp_threshold: 2e3, fs_threshold: 4e3, dr_threshold: 4e3 },
        gs = { server: {}, appConf: { pvid: ba(), baseInfo: {} } },
        ys = gs.appConf,
        _s = gs.server,
        xs = { pvid: ys.pvid, ref: fs.URL, referrer: fs.referrer, v: "3.2.3", av: "3.2.3" },
        bs = hs ? function(t) { return t instanceof hs } : function(t) { t && "object" === _typeof(t) && 1 === t.nodeType && sa(t.nodeName) },
        Es = {},
        Ss = { imageResources: [] },
        Ts = {},
        Cs = { context: null, uniqueId: 0, actions: [], opt_custom_param: {}, unAssignedEvents: [], cpActions: [], recordingCpActions: !1, cpParent: null, cpRemain: { ajax: 0, iframe: 0 }, tryEndCpActionsFailed: !1, globalAsyncStore: null, globalAjaxContext: null, pfSent: !1, ajaxUniqueId: 0, scope: null, performanceObserver: {}, enableLCPObserver: !0 },
        ws = [],
        As = [],
        Ps = {},
        Rs = "undefined" != typeof t.console,
        Os = 1,
        Ds = 2,
        Ns = 4,
        Is = 8,
        ks = I.prototype;
    ks.create = ks.before = ks.after = ks.error = null;
    var js;
    U.prototype = {
        createContext: function() { return Object.create ? Object.create(this.active) : B(this.active) },
        get: function(t) { return this.active ? this.active[t] : void 0 },
        set: function(t, e) { return this.active ? this.active[t] = e : void 0 },
        enter: function(t) {
            if (!t) throw new us("context required!");
            this._set.push(this.active), this.active = t
        },
        exit: function(t) {
            if (!t) throw new us("context required!");
            if (t === this.active) return void(this.active = this._set.pop());
            var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : y(this._set, t);
            if (0 > e) throw new us("context not currently entered!");
            this._set.splice(e, 1)
        },
        bind: function(t, e) {
            e || (e = this.active ? this.active : this.createContext());
            var n = this;
            return function() {
                n.enter(e);
                try { return t.apply(this, arguments) } catch (r) {
                    try {
                        var a = "moduleId";
                        r[a] = e[a]
                    } catch (i) {}
                    throw r
                } finally { n.exit(e) }
            }
        }
    };
    var qs, Hs, Ls, Ms, Bs = !1,
        Us = z();
    Hs = function(e) { try { return t.localStorage.getItem(e) } catch (n) {} }, Ls = function(e, n) { try { t.localStorage.setItem(e, n) } catch (r) {} return n }, Ms = function(e) { try { t.localStorage.removeItem(e) } catch (n) {} };
    var Fs = {},
        zs = t.screen;
    zs && (Fs.sh = zs.height, Fs.sw = zs.width);
    var Ys, Gs, Ks = function() {
            var e = t.navigator.standalone,
                n = t.navigator.userAgent.toLowerCase(),
                r = /safari/.test(n),
                a = /iphone|ipod|ipad/.test(n);
            return a && !e && !r
        },
        Ws = !/(MSIE [0-8].\d+)/.test(navigator.userAgent),
        Js = G() ? x : _,
        Vs = "POST",
        Xs = W,
        $s = !1;
    $.prototype.add = function(t) { this.queue.length >= this.size || (this.queue.push(t), this.running || (this.running = !0, this.run())) }, $.prototype.run = function() {
        var t = this,
            e = function() { t.queue.length > 0 ? t.run() : t.running = !1 };
        this.handler(this.queue.shift(), e)
    }, $.prototype.handler = function(t, e) { Ys(t, S(function() { e() })) }, Ys = t.XDomainRequest ? J : V, ps.sendBeacon && ($s = !0);
    var Qs = Ks();
    Qs && (Xs = Ys = V, $s = !1), Ys || (Ys = function(t, e) { e() }, $s = !1), ya(t, Ca, function(t) { $s && (Ys = X) });
    var Zs, tc = t.location.protocol,
        ec = "http:",
        nc = {},
        rc = t,
        ac = function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e = function(t) { for (var e = {}, n = 0, r = t.length; r > n; n++) e[t.charAt(n)] = n; return e }(t),
                n = String.fromCharCode,
                r = function(t) { if (t.length < 2) { var e = t.charCodeAt(0); return 128 > e ? t : 2048 > e ? n(192 | e >>> 6) + n(128 | 63 & e) : n(224 | e >>> 12 & 15) + n(128 | e >>> 6 & 63) + n(128 | 63 & e) } var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320); return n(240 | e >>> 18 & 7) + n(128 | e >>> 12 & 63) + n(128 | e >>> 6 & 63) + n(128 | 63 & e) },
                a = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                i = function(t) { return t.replace(a, r) },
                o = function(e) {
                    var n = [0, 2, 1][e.length % 3],
                        r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
                        a = [t.charAt(r >>> 18), t.charAt(r >>> 12 & 63), n >= 2 ? "=" : t.charAt(r >>> 6 & 63), n >= 1 ? "=" : t.charAt(63 & r)];
                    return a.join("")
                },
                s = rc.btoa ? function(t) { return rc.btoa(t) } : function(t) { return t.replace(/[\s\S]{1,3}/g, o) },
                c = function(t) { var e = "[object Uint8Array]" === Object.prototype.toString.call(t); return e ? t.toString("base64") : s(i(String(t))) },
                u = function(t, e) { return e ? c(String(t)).replace(/[+\/]/g, function(t) { return "+" == t ? "-" : "_" }).replace(/=/g, "") : c(t) },
                f = function(t) { return u(t, !0) },
                l = new RegExp(["[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}"].join("|"), "g"),
                d = function(t) {
                    switch (t.length) {
                        case 4:
                            var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
                                r = e - 65536;
                            return n((r >>> 10) + 55296) + n((1023 & r) + 56320);
                        case 3:
                            return n((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                        default:
                            return n((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                    }
                },
                p = function(t) { return t.replace(l, d) },
                h = function(t) {
                    var r = t.length,
                        a = r % 4,
                        i = (r > 0 ? e[t.charAt(0)] << 18 : 0) | (r > 1 ? e[t.charAt(1)] << 12 : 0) | (r > 2 ? e[t.charAt(2)] << 6 : 0) | (r > 3 ? e[t.charAt(3)] : 0),
                        o = [n(i >>> 16), n(i >>> 8 & 255), n(255 & i)];
                    return o.length -= [0, 0, 2, 1][a], o.join("")
                },
                m = rc.atob ? function(t) { return rc.atob(t) } : function(t) { return t.replace(/\S{1,4}/g, h) },
                v = function(t) { return m(String(t).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                g = function(t) { return p(m(t)) },
                y = function(t) { return g(String(t).replace(/[-_]/g, function(t) { return "-" == t ? "+" : "/" }).replace(/[^A-Za-z0-9\+\/]/g, "")) };
            return { atob: v, btoa: s, utob: i, encode: u, encodeURI: f, btou: p, decode: y }
        }(),
        ic = "extra";
    Mt.prototype.setContext = function(t, e) {
        var n = this;
        fa(t) ? i(t, function(t, e) { n._mergeContext(e, t) }) : this._mergeContext(t, e)
    }, Mt.prototype.setExtraContext = function(t) { this.setContext(ic, t) }, Mt.prototype.getContext = function(t) { return null == t ? this._contexts : null == this._contexts ? null : this._contexts[t] }, Mt.prototype.getData = function() { return null == this._contexts ? null : { contexts: this._contexts } }, Mt.prototype._mergeContext = function(t, e) { null != t && fa(e) && (this._contexts || (this._contexts = {}), this._contexts[t] = m(this._contexts[t] || {}, e)) }, Mt.prototype.toJSON = function() {};
    var oc = ["id", "key", "appKey", "token"],
        sc = te.prototype;
    sc.start = function() { if (!_s.key) return R("missing config, agent disabled!"), !1; var e = t[Na]; return e ? (R("already loaded!"), !1) : this }, m(sc, C.prototype);
    var cc = new te;
    cc.on("send", function(t, e, n, r, a) { xt(), e = e || {}, e.__r = E(), a ? a && (a = dt(a, e)) : a = Kt(t, e), r = r || b, tt({ url: a, data: n, callback: r }) });
    var uc = ys.debuggable,
        fc = { start: e, e: {}, an: { count: 0 }, visible: [] },
        lc = function() { try { var e = ba(); return t.localStorage.setItem(e, e), t.localStorage.removeItem(e), !0 } catch (n) { return !1 } }(),
        dc = {};
    dc.localStorage = lc,
        function() {
            function e() {
                var e, f, l = fs.documentElement;
                l.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = o = !0, t.getComputedStyle && (f = t.getComputedStyle(u), n = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, a = "4px" === (f || { width: "4px" }).width, u.style.marginRight = "50%", r = "4px" === (f || { marginRight: "4px" }).marginRight, e = u.appendChild(fs.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", i = 0 === u.getClientRects().length, i && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === e[0].offsetHeight, i && (e[0].style.display = "", e[1].style.display = "none", i = 0 === e[0].offsetHeight)), l.removeChild(c)
            }
            var n, r, a, i, o, s, c = (fs.documentElement, fs.createElement("div")),
                u = fs.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", dc.opacity = "0.5" === u.style.opacity, dc.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", dc.clearCloneStyle = "content-box" === u.style.backgroundClip, c = fs.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), dc.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, dc.reliableHiddenOffsets = function() { return null == n && e(), i })
        }();
    var pc = 0,
        hc = 1,
        mc = 2,
        vc = 3,
        gc = 4,
        yc = 5,
        _c = 0,
        xc = 1,
        bc = 2,
        Ec = 3,
        Sc = 4,
        Tc = 5,
        Cc = 0,
        wc = 1,
        Ac = 2,
        Pc = 3,
        Rc = [ii, oi, si];
    Oe.prototype.end = function(t) {
        var e = this;
        if (this.closed) return void(!this.cleared && _s.debug_context_closed && console.warn("Current context is already closed"));
        if (t && (this.actionCount.ajax += t.actionCount.ajax, this.actionCount.iframe += t.actionCount.iframe, Pe(this.items, t), this.updateRemain(-1, t.type)), this.isNoRemain() || this.isTimeout)
            if (this.e = E(), this.closed = !0, this.i && clearTimeout(this.i), this.e - this.s > _s.event_timeout && (this.isTimeout = !0), this.setState(this.isTimeout ? bi : xi), this.data && (this.data.state = this.state), this.parent) this.parent.end(this);
            else {
                var n;
                this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? n = this.composeTimeoutActionData() : this.isMeaningfulAction() && (n = this.composeActionData()), n && (this.eventData = n, !this.crossPage || n.type !== ii && n.type !== si ? this.speBinded ? null == this.spe ? (this.waitingSpeEnd = !0, this.waitingSpeTimer = w(function() { e.waitingSpeEnd = !1, e.send() }, ko)) : (this.buildEventDataWithSpe(), this.send()) : this.send() : (Cs.cpRemain[n.type]--, P() && Cs.tryEndCpActionsFailed && Ce())), Cs.context = null
            }
    }, Oe.prototype.isNoRemain = function(t) { t = t || {}; var e = !0; return i(this.remain, function(n, r) { if (t.ignoreFields && g(t.ignoreFields, r) > -1) return !0; var a = n.current <= 0 && (t.testCurrent ? !0 : n.children <= 0); return a ? void 0 : (e = !1, !1) }), e }, Oe.prototype.clear = function() { this.closed = !0, this.cleared = !0, this.i && clearTimeout(this.i) }, Oe.prototype.isMeaningfulAction = function() { return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 }, Oe.prototype.isRemainMeaningfulAction = function() { return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0 }, Oe.prototype.timeout = function() { this.isTimeout = !0, this.setState(bi), this.end(null, !0) }, Oe.prototype.setData = function(t) { this.data = t }, Oe.prototype.composeActionData = function() { return { type: this.type, subType: this.subType, start: this.s, end: this.e, duration: this.e - this.s > 0 ? this.e - this.s : 0, data: m({}, this.data || {}, { items: (this.items || []).slice() }) } }, Oe.prototype.composeTimeoutActionData = function() { return this.collectActionDataFromTop(), this.composeActionData() }, Oe.prototype.collectActionDataFromTop = function(t) { null == t && (t = this), Re(t.items, t.children) }, Oe.prototype.collectCrossPageData = function(t) {
        if (t || (t = []), this.crossPage = !0, this.data && (this.data.crossPage = !0), t.unshift(this.data), this.parent) return this.parent.collectCrossPageData(t);
        var e = { type: this.type, subType: this.subType, start: this.s };
        return (this.isNoRemain() || 1 === this.children.length) && this.clear(), { action: e, data: t, url: Kt("/action"), commonActionInfo: xe(), fromUrl: document.URL }
    }, Oe.prototype.canEnd = function(t) { return !this.closed && this.isNoRemain(m({ testCurrent: !0 }, t)) }, Oe.prototype.updateRemain = function(t, e) {
        if (this.remain[e]) {
            e || (e = ii);
            var n = t || 0;
            this.remain[e].current = this.remain[e].current + n;
            for (var r = this.parent; r;) r.remain[e].children = r.remain[e].children + n, r = r.parent
        }
    }, Oe.prototype.setState = function(t) { return this.stateChanged ? !1 : (this.state = t, this.stateChanged = !0, !0) }, Oe.prototype.current = function() { return Cs.context }, Oe.prototype.buildEventDataWithSpe = function() {
        if (this.spe && this.eventData && this.eventData.data) {
            var t = this.spe.xhrs;
            this.spe.hasAjax = t && t.length > 0, delete this.spe.xhrs, this.eventData.data.spe = this.spe
        }
    }, Oe.prototype.setSpe = function(t) { return t ? (this.spe = t, this.waitingSpeEnd && (this.buildEventDataWithSpe(), this.send(), clearTimeout(this.waitingSpeTimer)), this.sent) : void 0 }, Oe.prototype.send = function() {
        if (!this.sent) {
            var t = {};
            null != this.spe && this.speBinded && (t.query = { ss: 1 }, this.spe.type === Eo && (t.query.rs = 1)), Ee(this.eventData, t), this.sent = !0
        }
    }, Oe.prototype.removeFromParent = function() {
        if (this.parent) {
            var t = this.parent.children.indexOf(this);
            t > -1 && this.parent.children.splice(t, 1);
            var e = this.parent.items.indexOf(this.data);
            e > -1 && this.parent.items.splice(e, 1), this.parent.updateRemain(-1, this.type), this.parent.end()
        }
    }, Oe.createEvent = function(t, e, n, r, a, i) { return new Oe(t, e, n || "event", r || null, a, i) }, Oe.buildImmediateAction = function(t, e, n, r) { r = r || {}; var a = m({ type: t, subType: e, state: yi, data: n }, r.actionOptions || {}); return a.data && (a.data.state = a.state), r.notSend || Ee(a, r.sendOptions), a }, Oe.getEventRootContext = function(t) {
        if (!t) return null;
        for (; t;) {
            if (t.type === ai && null == t.parent) return t;
            t = t.parent
        }
        return null
    }, Oe.prototype.toJSON = function() {};
    var Oc, Dc = [$i, Qi],
        Nc = 1,
        Ic = 2;
    Oc = String.prototype.trim ? String.prototype.trim : function() { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") }, Fe.prototype.put = function(t, e) {
        if (this._size >= this._capacity) try {
            var n = this._cacheKeys.shift();
            this._size--, this._cache[n] = null, delete this._cache[n]
        } catch (r) {}
        this._cache[t] = e, this._cacheKeys.push(t), this._size++
    }, Fe.prototype.get = function(t) { return this._cache[t] };
    var kc = [$i, Qi],
        jc = fo,
        qc = Xo,
        Hc = [],
        Lc = new Fe({ capacity: 20 }),
        Mc = null;
    ze.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    var Bc = {},
        Uc = {},
        Fc = on.prototype;
    Fc.fail = Fc.end = Fc.store = b;
    var zc = sn.prototype;
    zc.end = zc.finish = zc.fail = null, zc.send = function(t) {
            this.sent = !0;
            var e = this.getEventData(t),
                n = this.timeout || _o;
            (_s.collect_hash_no_ajax || !(e.debugInfo && e.debugInfo.api === jo || e.type === Eo && e.key.indexOf("#") > -1) || 0 !== e.xhrs.length) && (e.duration >= n || an(e))
        }, zc.getEventData = function(t) {
            var e = this,
                n = t.event && t.event.xhrs || [];
            i(n, function(t) { t.startSpeOffset = t.start - e.s });
            var r = { key: e.key, start: e.s, duration: e.e - e.s, status: e.status, type: e.type, xhrs: n };
            return e.type === Eo && ys.baseHref && (r.baseHref = ys.baseHref), this.debugInfo && (r.debugInfo = this.debugInfo), r
        }, zc.refreshEventAndStore = function(t) {
            this.finish();
            var e = this.getEventData(t);
            Ls(go, oa(e))
        },
        function() {
            if (ys.debuggable) {
                var t, e, n = "visibilitychange";
                da(fs.hidden) ? da(fs.msHidden) ? da(fs.webkitHidden) || (t = "webkitHidden", e = "webkit" + n) : (t = "msHidden", e = "ms" + n) : (t = "hidden", e = n), da(fs.addEventListener) || da(fs[t]) || ya(fs, e, ne(function() { fc.visible.push([fs[t], E()]) }))
            }
        }();
    var Yc = null,
        Gc = new C,
        Kc = { lifecycle: ["preInit", "init"], action: ["ajax", "error"] },
        Wc = "default",
        Jc = {},
        Vc = 1e4,
        Xc = 0,
        $c = "report",
        Qc = "error";
    Tn.prototype = { add: function(t, e) { this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++) }, get: function(t) { return this.c[t] }, reset: function() { this.c = {}, this.len = 0 } };
    var Zc = new Tn(100),
        tu = {},
        eu = {};
    An.prototype = {
        increase: function() { this.recordFileName(), this.count++ },
        recordFileName: function() {
            var t = this.filename || "_";
            this.fep += eu[t] ? 0 : 1, eu[t] = !0
        },
        fix: function() {
            var t = this,
                e = t.stack;
            if (e && sa(e)) {
                e = e.split(/\n/);
                var n = [];
                i(e, function(t, e) {-1 == t.indexOf(ja) && n.push(t) }), t.stack = n.join("\n")
            }
        },
        getErrorOverview: function() { var t = this; return { o: t.time, e: t.msg, l: t.lineno, c: t.colno, r: t.filename, ec: t.count, s: t.stack, m: t.module, ep: t.ep, fep: t.fep, tr: t.trigger } },
        toObject: function() {
            var t = this.getErrorOverview(),
                e = {};
            return i(this.trace, function(t, n) { e[n] = zt({ time: t.time }, t.scope) }), t.trace = e, t
        },
        initTraceInstance: function() { var t = ba(); return this.trace[t] = { time: E(), scope: new Mt }, t },
        triggerActionHook: function(t) {
            var e = this.trace[t];
            e && e.scope && Sn({ type: Qo, name: ns, args: { target: this.error, actionData: m({}, this.getErrorOverview(), { id: t, o: e.time }) }, scope: e.scope })
        }
    };
    var nu = { mainVersion: oo, version: "3.2.3", key: _s.key, pvid: ys.pvid, DIAGNOSE_HREF: Ia, diagnose: N, createEvent: ln, logFirstScreen: kn, addExcludedDomain: jn, globalStart: e, currentAgent: cc, mark: hn, wrapVueRouter: pn, endSession: gt, setUid: Tt, createAutoEvent: ln, endStoreEvent: fn, captureException: Nn, setDid: Ct, addHook: xn, addLifeCycleHook: bn, addActionHook: En, setContext: Ut, setExtraContext: Ft, stopLCPObserver: _e },
        ru = 0,
        au = "{0} not support",
        iu = 0,
        ou = /(msie|trident)/i.test(ps.userAgent),
        su = fs.createElement("a"),
        cu = Wn(ds.href),
        uu = "onload",
        fu = 0,
        lu = { error: 990, abort: 905, timeout: 903 },
        du = Oa + Aa,
        pu = 0,
        hu = Ui,
        mu = {},
        vu = 0,
        gu = "load",
        yu = "reload",
        _u = 0,
        xu = null,
        bu = [Ho, Lo],
        Eu = aa();
    return Eu
}(window, +new Date);
//window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "dr_threshold": 603, "opt_custom_param_rule": [], "router_enable": true, "fp_threshold": 403, "token": "47361258cc5a4d48b340f3f105b2ac4d", "beacon": "10.128.2.95:8588", "trace_threshold": 2022, "x_server_switch": true, "ignore_err": false, "id": "QPo-y6LCVc8", "key": "sqEglzHYig8", "fs_threshold": 822 } }); /*TY_AGENT_END*/
// window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "event_timeout": 60000, "dr_threshold": 600, "opt_custom_param_rule": [], "cross_page_delay": 3000, "router_enable": true, "fp_threshold": 400, "token": "45964a8f1c004c898ff12f8499a1721e", "beacon": "wkbrst1.tingyun.com", "trace_threshold": 2002, "x_server_switch": true, "ignore_err": false, "id": "fui3qc_SnwM", "key": "9uG-Zi_vtEM", "fs_threshold": 800 } }); /*TY_AGENT_END*/
// window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "beacon": "wkbrst2.tingyun.com", "trace_threshold": 2000, "x_server_switch": true, "dr_threshold": 600, "opt_custom_param_rule": [], "ignore_err": false, "id": "uazOcuIoeLI", "key": "0y765twXVVo", "router_enable": true, "fp_threshold": 400, "fs_threshold": 800, "token": "cd946333ce9d447daa93b987faaabed7" } }); /*TY_AGENT_END*/
// window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "event_timeout": 60000, "dr_threshold": 600, "opt_custom_param_rule": [], "cross_page_delay": 3000, "router_enable": true, "fp_threshold": 400, "token": "45964a8f1c004c898ff12f8499a1721e", "beacon": "wkbrs1.tingyun.com", "trace_threshold": 2002, "x_server_switch": true, "ignore_err": false, "id": "fui3qc_SnwM", "key": "9uG-Zi_vtEM", "fs_threshold": 800 } }); /*TY_AGENT_END*/
// window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "beacon": "wkbrs2.tingyun.com", "trace_threshold": 2000, "x_server_switch": true, "dr_threshold": 600, "opt_custom_param_rule": [], "ignore_err": false, "id": "uazOcuIoeLI", "key": "0y765twXVVo", "router_enable": true, "fp_threshold": 400, "fs_threshold": 800, "token": "cd946333ce9d447daa93b987faaabed7" } }); /*TY_AGENT_END*/
// window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "event_timeout": 60000, "dr_threshold": 4000, "opt_custom_param_rule": [], "cross_page_delay": 3000, "router_enable": true, "fp_threshold": 2000, "token": "6403e9eeff9e4c3f97c253b53fb7d572", "beacon": "10.128.5.247:8588", "trace_threshold": 7000, "x_server_switch": true, "ignore_err": false, "id": "lNXvexXCq6I", "key": "p35OnrDoP8k", "fs_threshold": 4000 } }); /*TY_AGENT_END*/
// window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "event_timeout": 60000, "dr_threshold": 4000, "opt_custom_param_rule": [], "cross_page_delay": 3000, "router_enable": true, "fp_threshold": 2000, "token": "bc29a2ccb3dc44c9aebf8babd63a7df8", "beacon": "10.128.2.24:8588", "trace_threshold": 7000, "x_server_switch": true, "ignore_err": false, "id": "P54-bRBPcGU", "key": "p35OnrDoP8k", "fs_threshold": 4000 } }); /*TY_AGENT_END*/