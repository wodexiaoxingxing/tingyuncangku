/*AGENT_VERSION=3.2.2*/
"use strict";

function _defineProperty(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

function _typeof(t) { "@babel/helpers - typeof"; return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
window.TINGYUN = function(t, e) {
    if (/(MSIE [0-8].\d+)/.test(navigator.userAgent)) { return; }

    function n(t) { return JSON.parse(t) }

    function r(t) { return JSON.stringify(t) }

    function i(t) {
        var e = !!t && "length" in t && t.length,
            n = _typeof(t);
        return "function" === n ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function a(t, e, n) {
        var r, a = 0;
        if (t)
            if (i(t))
                for (r = t.length; r > a && e.call(t[a], t[a], a) !== !1; a++);
            else
                for (a in t)
                    if ((n || Object.prototype.hasOwnProperty.call(t, a)) && e.call(t[a], t[a], a) === !1) break;
        return t
    }

    function o(t) { return function(e) { return "Array" === t && Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object " + t + "]" } }

    function s(t) { return new Function("return " + t)() }

    function c(t) {
        switch (_typeof(t)) {
            case "object":
                if (!t) return null;
                if (t instanceof Array) { var e = fi.call(t); return a(e, function(t, n) { e[n] = c(t) }), "[" + e.join(",") + "]" }
                if (t instanceof Date) return t.getTime().toString();
                var n = "";
                return a(t, function(t, e) { oi(t) || (n += c(e) + ":" + c(t) + ",") }), n && (n = n.substr(0, n.length - 1)), "{" + n + "}";
            case "string":
                return li + t.replace(di, "\\$1").replace(pi, "\\n") + li;
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

    function u(t) { return t && ii(t) ? ni(t) : t }

    function f(t, e, n, r) { return t.addEventListener(e, n, r) }

    function l(t, e, n) { return t.attachEvent("on" + e, n) }

    function d(t, e) { return Function.prototype.apply.apply(t, e) }

    function p(t, e) { return function() { t.apply(e, arguments) } }

    function h(t) { return vi ? vi(t) : t }

    function m(t) { var e = arguments.length; if (2 > e || !t) return t; var n = fi.call(arguments, 1); return a(n, function(e) { a(e, function(e, n) { t[n] = e }) }), t }

    function v(t, e) { return t ? e ? t.replace(/\{(\w+.?\w+)\}/g, function(t, n) { return e[n] || "" }).replace(/\{(\d+)\}/g, function(t, n) { return e[n] || "" }) : t : "" }

    function g(t, e, n) {
        var r;
        if (null == t) return -1;
        var i = Object(t),
            a = i.length >>> 0;
        if (0 === a) return -1;
        var o = +n || 0;
        if (Math.abs(o) === 1 / 0 && (o = 0), o >= a) return -1;
        for (r = Math.max(o >= 0 ? o : a - Math.abs(o), 0); a > r;) {
            if (r in i && i[r] === e) return r;
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

    function T(e) { return e ? ii(e) ? e.length : t.ArrayBuffer && e instanceof ArrayBuffer ? e.byteLength : t.Blob && e instanceof Blob ? e.size : e.length ? e.length : 0 : 0 }

    function C() { this.events = {} }

    function w(t, e) { return setTimeout(t, e || 0, { __ty_ignore: !0 }) }

    function A(t, e) { xs[t] = e }

    function R() { return 0 === bs.cpRemain.ajax && 0 === bs.cpRemain.iframe }

    function O(t) { D(t, Es) }

    function P(t) { D(t, Ss) }

    function D(t, e) { var n = "ok"; return t ? void e.push(t) : n = e.length ? e.join("\n") : n }

    function N(t) {
        function e(t, e, r) {
            var i = r || "log",
                a = n[t] || (n[t] = {});
            a[i] = a[i] || "", a[i] += e
        }
        var n = {},
            r = O();
        if (e("Status", r, "ok" !== r), e("Debug", P()), a(Ts, function(t, n) { e("Timeline", n + ": " + t.toString()) }), !t && Cs) console.log("[TingYun Agent Diagnosis]\n"), a(n, function(t, e) {
            var n = console[e];
            a(n, function(t, e) { console[e](t) })
        });
        else {
            if (t !== Pi) return ri(n);
            cs.href = cs.href + "#" + ri(n)
        }
    }

    function I(t, e) { this.flags = 0, oi(t.create) && (this.create = t.create, this.flags |= ws), oi(t.before) && (this.before = t.before, this.flags |= As), oi(t.after) && (this.after = t.after, this.flags |= Rs), oi(t.error) && (this.error = t.error, this.flags |= Os), this.data = e }

    function k(t, e) { if (!Ds) { if (!si(t) || !t) throw new TypeError("callbacks arguments must be an object"); return Ds = new I(t, e) } }

    function j(t) {
        var e = Ds.data;
        if (0 !== (Ds.flags & ws)) {
            var n = Ds.create(Ds.data);
            void 0 !== n && (e = n)
        }
        return function r() {
            0 !== (Ds.flags & As) && Ds.before(this, e);
            var n = r;
            n._ && (n._ = 1);
            try { var i = t.apply(this, arguments) } catch (a) { throw 0 !== (Ds.flags & Os) && Ds.error(e, a), a }
            return 0 !== (Ds.flags & Rs) && Ds.after(this, e), i
        }
    }

    function q(t) { return function() { var e; try { e = t.apply(this, arguments) } finally { bs.context = null } return e } }

    function H(t) { return !Ds || Ds.flags <= 0 ? t : j(t) }

    function L(t) { return q(H(t)) }

    function M(t, e, n) { if (t && n && oi(n)) { var r = t[e]; if (!r || !r._wrapped) { var i = n(r, e); return i && (i._wrapped = !0), t[e] = i, i } } }

    function U(t) {
        function e() {}
        return e.prototype = t, new e
    }

    function B() { this.id = null, this.active = null, this._set = [] }

    function F() {
        var t = new B;
        return t.id = k({
            create: function() { return t.active },
            before: function(e, n) { n && t.enter(n) },
            after: function(e, n) { n && t.exit(n) },
            error: function(e, n) {
                if (e) {
                    try {
                        var r = "moduleId";
                        n[r] = e[r]
                    } catch (i) {}
                    t.exit(e)
                }
            }
        }), t
    }

    function z() { return qs || (Ns = F(), qs = !0), Ns }

    function Y(t) { try { return u(t) } catch (e) { O(e && e.message) } return null }

    function G() { return zs }

    function K(t) { return ii(t) || (t = ri(t)), t }

    function W(t, e) {
        e = e || b;
        var n = new Image;
        mi(n, Ti, function() {
            ("loaded" == n.readyState || 4 == n.readyState) && e(null)
        }, !1), mi(n, xi, function() { e(null) }, !1), mi(n, _i, function() { e(_i) }, !1), n.src = t
    }

    function J(t, e) {
        var n = t.url,
            r = t.data,
            i = (t.header, t.callback),
            a = new XDomainRequest;
        a[Di] = !0, a.open(Gs, n), a.onload = function() { i(null, a.responseText), e() }, a.onerror = function(t) { i(t), e() }, Ys(function() { a.send(K(r)) })
    }

    function V(t, e) {
        var n = t.url,
            r = t.data,
            i = t.header,
            a = t.callback,
            o = S(a),
            s = new ss;
        s[Di] = !0, s.overrideMimeType && s.overrideMimeType("text/html"), s.onreadystatechange = function() { 4 == s.readyState && 200 == s.status && (o(null, s.responseText), e()) }, s.onerror = function() { o(), e() };
        try {
            s.open(Gs, n, !0);
            for (var c in i) s.setRequestHeader(c, i[c]);
            s.send(K(r))
        } catch (u) { e() }
    }

    function X(t, e) {
        var n = t.url,
            r = t.data,
            i = (t.header, t.callback),
            a = us.sendBeacon(n, K(r));
        a && (i && i(), e())
    }

    function $(t) { this.size = t || 100, this.queue = [], this.running = !1 }

    function Q() { Ks = Us = V, Ws = !1 }

    function Z(t) { Bs = new $(t) }

    function tt(t) { Bs.add(t) }

    function et(t) {
        var e = t || new Date,
            n = e.getFullYear() + "-",
            r = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
            i = e.getDate() + " ";
        return n + r + i
    }

    function nt(t, e, n) {
        if (null == t[e] || ai(t[e])) ai(t[e]) ? t[e].push(n) : t[e] = n;
        else {
            var r = t[e];
            t[e] = [r], t[e].push(n)
        }
    }

    function rt(t) { return t.send_protocol ? t.send_protocol : Xs !== $s && /^https/i.test(t && t.protocol || Xs) ? "https:" : $s }

    function it(t) { if (!t || !ii(t)) return ""; var e, n = t.indexOf("?"); return n >= 0 && (e = t.substring(n + 1)), e }

    function at(t) {
        var e = it(t),
            n = ut(e);
        return { queryObj: n, queryString: e }
    }

    function ot(t) { var e = it(t); return ut(e) }

    function st(t) { return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? ot(t) : {} }

    function ct(t) { var e = {}; return t = t || "", ii(t) && t ? e = ut(t) : e }

    function ut(t) {
        var e = {};
        return t && a(t.split("&"), function(t) {
            var n = t.split("="),
                r = ft(n[0]),
                i = ft(n[1]);
            if (ii(i)) {
                var a = Y(i);
                null != a && (i = a)
            }
            r && null != i && nt(e, r, i)
        }), e
    }

    function ft(t) { try { return decodeURIComponent(t) } catch (e) {} return null }

    function lt(t) {
        var e = [];
        return a(t, function(t, n) {
            var r = h(n) + "=" + h(t);
            e.push(r)
        }), e.join("&")
    }

    function dt(t, e) { var n = lt(e); return t += (t.indexOf("?") > 0 ? "&" : "?") + n }

    function pt(t, e, n) { var r = null; return t && e && (r = Vs + "//" + t + e, n && (r += "?" + lt(n))), r }

    function ht(t) { Vs = rt(t) }

    function mt() { var t = Is(co); return t ? t.split(lo) : null }

    function vt(t) { t && 3 === t.length && ks(co, t.join(lo)) }

    function gt() {
        var t = yt();
        _t(t)
    }

    function yt() {
        var t = E(),
            e = [yi(), t, t];
        return vt(e), e
    }

    function _t(t) { t[0] && (vs.sid = t[0]), t[1] && (vs.__s = +t[1]) }

    function xt() {
        var t = E(),
            e = mt();
        bt(e) ? gt() : (e[2] = t, vt(e))
    }

    function bt(t) { return !t || 3 !== t.length || E() - +t[2] > fo }

    function Et() { var t = Is(uo); return t ? t : ks(uo, yi()) }

    function St() { return Is(so) }

    function Tt(t) {
        if (null != t) {
            var e = St();
            null != e && t !== e && gt(), ks(so, t)
        }
    }

    function Ct(t) { null != t && ks(uo, t) }

    function wt() {
        var t = { did: Et() },
            e = St();
        return e && (t.uid = e), t
    }

    function At(t, e) { var n; return t && (n = !0, a(t, function() { return n = !1 }, e)), !!n }

    function Rt(t) {
        var e = {},
            n = {},
            r = {},
            i = {},
            a = at(t),
            o = a.queryObj,
            s = a.queryString;
        return o && (e = Ot(o, hs.bizIdsRules[Ii], hs.bizIdsRules[qi]), n = Ot(o, hs.customParamsRules[Ii], hs.customParamsRules[qi]), r = Ot(o, hs.requestParamKeys[Hi], hs.requestParamKeys[Li]), i[Mi] = It(o, hs.optCustomParamRules[Mi], !0)), { bizIdParams: e, params: n, requestParams: r, optCustomParams: Nt(i), operaAllParam: s }
    }

    function Ot(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && a(e, function(e) {
            var n = t[e];
            null != n && nt(r, e, n)
        }), t && n && n.length && n.length > 0 && a(n, function(e) {
            var n = Pt(Gi, e),
                i = n(t);
            null != i && nt(r, e, i)
        }), r
    }

    function Pt(t, e) {
        var n = t + "." + e;
        if (Qs[n]) return Qs[n];
        var r = (e || "").split("."),
            i = "";
        e && 0 !== e.indexOf("[") && (i = ".");
        var o = t;
        a(r, function(t, e) { 0 === e && (o += i), o += t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? "['" + t + "']" : (e > 0 ? "." : "") + t });
        var s;
        try { s = new Function(t, "try{return " + o + ";}catch(e){}return null;") } catch (c) { s = b }
        return Qs[n] = s, s
    }

    function Dt(t) { return t += "", t && t.substr(0, 128) || "" }

    function Nt(t) { var e = {}; return a(t, function(t, n) { At(t) || (e[n] = t) }), e }

    function It(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && a(e, function(e) {
            var i = t[e];
            if (null != i) nt(r, e, i);
            else if (n) {
                var a = Pt(Gi, e);
                i = a(t), null != i && nt(r, e, i)
            }
        }), r
    }

    function kt(t, e, n) { n || (n = e && window[e] || os.cookie || ""); var r = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return r ? r[3] : null }

    function jt(t, e, n, r, i) {
        var a = t + "=" + e;
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 1e3 * n), a += ";expires=" + o.toGMTString()
        }
        r && (a += ";path=" + r), (i || os).cookie = a
    }

    function qt(t) {
        var e, n;
        if (t)
            if (0 === t.indexOf(Xi)) { var r = t.substring(Xi.length); try { n = tc.decode(r), e = Y(n) } catch (i) {} } else { try { n = decodeURIComponent(t), e = Y(n) } catch (i) {} if (!e) try { n = decodeURIComponent(n), e = Y(n) } catch (i) { O(i && i.message) } }
        return e
    }

    function Ht(t) { var e = {}; return t && si(t) && (e.s_id = t.id, e.s_tname = t.tname, e.s_tid = t.tid, e.s_rid = t.rid, e.s_duration = t.duration, "user" in t && (e.s_user = t.user, Tt(t.user)), "bid" in t && (e.s_bid = Dt(t.bid)), "ber" in t && (e.s_ber = t.ber), "isError" in t && (e.s_isError = t.isError)), e }

    function Lt(t) {
        if (!t.agent) {
            var e = window._ty_rum;
            if (e && e.agent) t.agent = e.agent;
            else {
                var n = kt(Wi, Ki);
                n && (t.agent = qt(n), jt(Wi, "", -1e3, "/"))
            }
        }
        return t.agent
    }

    function Mt(t) { t = t || {}, this._contexts = t.contexts || null, this._name = t.name }

    function Ut() { bs.scope || (bs.scope = new Mt({ name: "ROOT" })) }

    function Bt() { Ut(), bs.scope.setContext.apply(bs.scope, arguments) }

    function Ft() { Ut(), bs.scope.setExtraContext.apply(bs.scope, arguments) }

    function zt(t, e, n) { if (t && e) { n || (n = "scope"); var r = e ? e.getData() : null; return r && (t[n] = r), t } }

    function Yt(t, e) { return pt(ms.beacon, t, Gt(e)) }

    function Gt(t) { var e = wt(); return m({}, vs, e, t || {}, hs.baseInfo, Ls || {}) }

    function Kt(t) { return t in ms ? ms[t] : !0 }

    function Wt(t) { var e = {}; return a(t, function(t) { t && g(e[t.type] || [], t.key) < 0 && (e[t.type] = e[t.type] || []).push(t.key) }), e }

    function Jt(t) {
        var e = {};
        if (t) {
            var n = [Bo, Fo, zo, Yo, Go];
            a(t.split(""), function(t, r) { e[n[r]] = "1" === t })
        }
        return e
    }

    function Vt(e) {
        var n = {};
        if (oi(e)) {
            var r = {};
            e(r), n = r.server
        } else n = e;
        Ut(), t[$i] || (t[$i] = { hook: {} }), m(ps.server, ds, n || {}, t[$i].config || {}), m(ps.appConf, { bizIdsRules: Wt(ms.bizId_rule), customParamsRules: Wt(ms.opt_param_rule), requestParamKeys: Wt(ms.request_param_keys), corsDomains: ms.cors_domains || [], optCustomParamRules: Wt(ms.opt_custom_param_rule), ignoreNoFilePropError: Kt("ignore_err"), debuggable: Kt("debug"), sessionTimeout: ms.session_timeout || fo, collectAllParam: Jt(ms.collect_all_param), routerEnable: Xt(ms.router_enable), lcpEnable: Xt(ms.lcp_enable) }), a(nc, function(e) { ms[e] && (hs.baseInfo[e] = ms[e], t[Oi][e] = ms[e]) }), m(vs, wt());
        var i = mt();
        if (bt(i) && (i = yt()), _t(i), ps.server.event_timeout || (ps.server.event_timeout = ta), ms.appKey && Q(), ms.apm_arms) {
            ms.apm_headers || (ms.apm_headers = []);
            var o = G() ? ms.apm_headers.indexOf(So) < 0 : g(ms.apm_headers, So) < 0;
            o && ms.apm_headers.push(So)
        }
        ht(ms);
        var s = Lt(ps);
        hs.pageServerData = Ht(s), Z(ms.req_capacity)
    }

    function Xt(t) { return null == t ? !0 : 1 == t }

    function $t(e) {
        try {
            var n;
            if (!e || !e.data || 0 !== e.data.indexOf("_TINGYUN")) return;
            if (n = e.data.replace("_TINGYUN", ""), Y(n)) {
                var r = Y(n);
                if ("gather" === r.type && "APM" === r.fromJS && !t[Eo]) {
                    ls.isGather = !0;
                    var i = e.origin,
                        a = os.getElementsByTagName("head")[0],
                        o = os.createElement("script");
                    o.type = "text/javascript", o.src = i + "/assets/lib/gather/path-gather.min.js?version=" + et(new Date), a.appendChild(o)
                }
            }
        } catch (s) {}
    }

    function Qt() {
        var t = this;
        t.xhrs = {}, t.errs = [], C.call(t)
    }

    function Zt(t) { ac && t() }

    function te(t) { return function() { ac && t.apply(this, arguments) } }

    function ee() { ac = !1 }

    function ne(t) { return t.loadEventEnd || t._end }

    function re(n, r) {
        var i = r.performance || {},
            o = i.timing,
            s = o && o.navigationStart ? o.navigationStart : e,
            c = 0;
        if (_s[ns] && _s[ns] > 0 ? (c = _s[ns], n.__fp = fc) : i.getEntriesByName && o ? (c = o.domLoading, a(_s.resources, function(t) {
                var e = i.getEntriesByName(t);
                if (1 === e.length) {
                    var n = e[0].responseEnd;
                    n > c && (c = n)
                }
            }), c -= s, n.__fp = pc) : t.TINGYUN && t.TINGYUN[Ro] && (c = t.TINGYUN[Ro] - s, 0 > c && (c = 0), n.__fp = hc), !c || 0 >= c) {
            if (r.chrome && r.chrome.loadTimes) {
                var u = r.chrome.loadTimes();
                u && u.firstPaintTime && (c = 1e3 * u.firstPaintTime - s, n.__fp = lc)
            } else o && o.msFirstPaint && (c = o.msFirstPaint - s, n.__fp = dc);
            (!c || 0 >= c) && (c = 0, n.__fp = uc)
        }
        return Math.round(c)
    }

    function ie(n, r) {
        r = r || {};
        var i = r.timing || {},
            o = i.navigationStart || e,
            s = 0;
        if (_s[rs]) s = _s[rs], n.__fs = vc;
        else if (_s.lcpStopTime) s = _s.lcpStopTime - o, n.__fs = gc;
        else if (ae()) {
            var c = _s.imageResources || [],
                u = t.innerHeight,
                f = t.innerWidth;
            u || (u = os.documentElement.clientHeight), f || (f = os.documentElement.clientWidth);
            var l = [];
            c.length > 0 ? a(c, function(t) { se(t.element, u, f) && l.push(t) }) : oi(r.getEntriesByName) && a(os.querySelectorAll("img"), function(t) { se(t, u, f) && l.push({ element: t }) });
            var d = (i.loadEventEnd || ic.loadEventEnd) - o;
            a(l, function(t) {
                if (t.loadTime) {
                    var e = t.loadTime - o;
                    e > s && (s = e, n.__fs = _c)
                } else if (t.element && t.element.src) {
                    var i = r.getEntriesByName(t.element.src);
                    if (i.length) {
                        var a = i[0],
                            c = a.responseEnd;
                        a.fetchStart <= d && c > s && (s = c, n.__fs = yc)
                    }
                }
            })
        }
        return 0 >= s && (s = n.fp || 0, n.__fs = xc, 0 >= s && (s = 0, n.__fs = mc)), Math.round(s)
    }

    function ae(t) {
        var e = !0,
            n = os.createElement("img");
        return n.getBoundingClientRect || (e = !1), e
    }

    function oe(t) { if (!t) return !1; if (!ms.fs_resources || 0 === ms.fs_resources.length) return !0; var e = !1; return a(ms.fs_resources, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function se(t, e, n) { return t.src && oe(t.src) && ce(ue(t), e, n) && !fe(t) }

    function ce(e, n, r) {
        if (e) {
            var i = t.pageYOffset,
                a = e.top + (0 === i ? 0 : i || os.scrollTop || 0) - (os.clientTop || 0);
            if (a >= n) return !1;
            var o = e.left;
            return o >= 0 && r > o
        }
        return !1
    }

    function ue(t) { if (G()) return oi(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0; var e; try { e = t.getBoundingClientRect ? t.getBoundingClientRect() : void 0 } catch (n) {} return e }

    function fe(t) { return cc.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : le(t) }

    function le(t) {
        for (; t && 1 === t.nodeType;) {
            if ("none" === de(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function de(t) { return t.style && t.style.display }

    function pe(t, n) {
        var r = n && n.timing || {},
            i = r.navigationStart || e,
            a = 0;
        r && (a = r[Sa] || r.domInteractive || r.domLoading || a), 0 >= a ? (ic.domContentLoadedEventStart ? (a = ic.domContentLoadedEventStart, t.__dr = Sc) : (a = ic._end, t.__dr = Tc), 0 >= a && (t.__dr = bc)) : t.__dr = Ec;
        var o = a - i;
        return 0 > o && (o = 0), Math.round(o)
    }

    function he(n, r) {
        function i(t) { return n[t] > 0 ? n[t] - s : 0 }
        var o = {},
            s = r ? r.globalStart : e,
            c = (r ? r.window : t, (r ? r.agent : ic) || {});
        if (n) {
            Zt(function() {
                var t = oc.t = {};
                a(n, function(e, n) { oi(e) || (t[n] = e) }, !0)
            }), s = n.navigationStart, o = { ns: s, f: i(_a), qs: i(xa), rs: i(ba), re: i(Ea), os: i(Sa), oe: i(Ta), oi: i(Ca), oc: i(wa), ls: i(Aa), le: i(Ra), tus: i(Oa), tue: i(Pa) };
            var u = i(Da),
                f = i(Na),
                l = i(Ia),
                d = i(ka),
                p = i(ja),
                h = i(qa);
            if (o.cs = p, o.ce = h, o.ds = u, o.de = f, (d - l > 0 || d > 0) && (o.es = l, o.ee = d), 0 == o.le) {
                var m = ne(c);
                o.ue = m - s
            }
            c && (c._le = o.ue || o.le);
            var v;
            v && (o.fp = Math.round(v - s), c.fp = o.fp), n[Ha] ? o.sl = i(Ha) : o.sl = 0
        } else o = { t: s, le: ne(c) - s };
        return o.je = c && c.errs && c.errs.length || 0, o
    }

    function me(e, n) {
        var r = he(e, n),
            i = n ? n.window : t;
        if (!i) return {};
        r.fp = re(r, i), r.dr = pe(r, i.performance), r.fs = ie(r, i.performance);
        var a = {};
        return r && (a = { f: r.f, fp: r.fp, fs: r.fs, dr: r.dr, le: r.le, je: r.je }), a
    }

    function ve() { bs.enableLCPObserver = !1; try { a(bs.performanceObserver, function(t) { t && t.disconnect() }) } catch (t) {} }

    function ge() {
        _s.lcpStopTime = E(), bs.enableLCPObserver = !1;
        try {
            var t = bs.performanceObserver[rs];
            t && t.disconnect()
        } catch (e) {}
    }

    function ye() { return zt({ optCustomParam: bs.opt_custom_param }, bs.scope) }

    function _e(t) { return t || (t = ye()), "".concat(pa).concat(ri(t)) }

    function xe(t, e) {
        if (t) {
            e = e || {};
            var n = be(t);
            if (n) try {
                var r = n + ri(t),
                    i = [r];
                i.unshift(e.commonActionInfoMessage ? e.commonActionInfoMessage : _e());
                var a = i.join("\n"),
                    o = { ps: e.crossPage || n === da ? 1 : 0 };
                m(o, e.query || {}), ic.emit("send", "/action", o, a, function() { t.type === aa && (ic.xhrs = ic.errs = null, ve()), e.cb && e.cb() }, e.url)
            } catch (s) {}
        }
    }

    function be(t) { var e = ""; return t.type === ea ? e = ca : t.type === na ? e = ua : t.type === ia ? e = la : t.type === ra ? e = fa : t.type === aa ? e = da : t.type === sa && (e = ha), e }

    function Ee(t, e) {
        for (var n = E(), r = e.length - 1; r >= 0; r--) {
            var i = e[r];
            i.type === ea || i.end || (i.end = n), e[r - 1] && (e[r - 1].items = [i]);
            var a = void 0;
            a = i.start && i.end && i.end - i.start > ms.event_timeout ? ya : i.type === ea ? e[r + 1] && e[r + 1].state || ga : ga, i.state = a
        }
        t.data = e[0], t.end = n
    }

    function Se(t) {
        var e = bs.cpParent;
        if (e) {
            if (t && (bs.recordingCpActions = !1), !R()) return void(bs.tryEndCpActionsFailed = !0);
            var n = e.action,
                r = e.data,
                i = e.commonActionInfo,
                o = e.url;
            if (n && r && 0 !== r.length) {
                var s = [];
                a(bs.cpActions, function(t) { t.data && (t.data.crossPage = !0), s.push(t.data) }), r[r.length - 1].items = s, Ee(n, r), n.data && (n.data.range = Mo);
                var c = _e(m(i || {}, zt({ pageParam: Gt(), cpOptCustomParam: bs.opt_custom_param }, bs.scope, "cpScope")));
                xe(n, { commonActionInfoMessage: c, url: o, crossPage: !0 })
            }
        }
    }

    function Te(t) {
        if (t) {
            var e = t.action,
                n = t.data;
            e && n && 0 !== n.length && (Ee(e, n), xe(e))
        }
    }

    function Ce() { var t = {}; return a(Cc, function(e) { t[e] = { current: 0, children: 0 } }), t }

    function we(t, e) { a(t, function(t) { t.cid === e.id && (t.items = e.items || []) }) }

    function Ae(t, e) { a(t, function(t) { a(e, function(e) { t.cid === e.id && (t.state || (t.state = e.state), t.items = e.items || []) }) }), a(e, function(t) { Ae(t.items, t.children) }) }

    function Re(t, e, n, r, i, a) {
        a = a || {}, this.id = ++bs.uniqueId, this.parent = t || null, this.children = [], this.name = e || "", this.type = n || ea, this.subType = this.type === ea ? r || "click" : r, this.items = [], this.remain = Ce(), this.s = a.s || E(), this.e = null, this.data = i, this.state = va, this.crossPage = a.crossPage || !1;
        var o = this;
        null == this.parent && (this.i = w(function() { o.timeout() }, ms.event_timeout)), this.closed = !1, this.isTimeout = !1, this.cleared = !1, this.stateChanged = !1, this.actionCount = { ajax: n === na ? 1 : 0, iframe: n === ia ? 1 : 0 }, this.sent = !1, this.speBinded = !1, this.spe = null, this.waitingSpeEnd = !1, this.waitingSpeTimer = null, null != this.parent && this.parent.children.push(this), this.eventData = null
    }

    function Oe(e, n) { return function(r) { if (t[$i].hook && t[$i].hook.eventCb && Le(r)) { var i = { originalCallback: e, eventHandlerType: n }; return t[$i].hook.eventCb.call(this, arguments, i) } return e.apply(this, arguments) } }

    function Pe(t, e, n) { return n === Rc ? Oe(t, e) : (t.handleEvent = Oe(t.handleEvent, e), t) }

    function De(t) { return oi(t) }

    function Ne(t) { return si(t) && oi(t.handleEvent) }

    function Ie(t) { var e; return De(t) ? e = Rc : Ne(t) && (e = Oc), { isValid: t && e, listenerType: e } }

    function ke(t) {
        return function() {
            var e = arguments[0],
                n = arguments[1],
                r = arguments[2],
                i = !0;
            r && si(r) && r[Ka] && (i = !1);
            var a = Ie(n),
                o = a.isValid,
                s = a.listenerType;
            if (i && Ac.indexOf(e) > -1 && o) {
                var c;
                if (n[To] && n[To][this]) c = n[To][this];
                else {
                    var u = Pe(n, $a, s);
                    s === Rc && (n[To] || (n[To] = {}, n[To][Co] = 0), n[To][this] = { listener: u, options: arguments[2] }, n[To][Co]++, c = n[To][this])
                }
                c && (c.listener && (arguments[1] = c.listener), c.options && (arguments[2] = c.options))
            }
            return t && t.apply(this, arguments)
        }
    }

    function je(t) {
        return function(e, n) {
            var r;
            try { r = t && t.apply(this, arguments) } finally {
                try {
                    if (n && Ac.indexOf(e) > -1) {
                        var i = n[To];
                        i && i[this] && i[this].listener && (null != i[this].options ? this.removeEventListener(e, i[this].listener, i[this].options) : this.removeEventListener(e, i[this].listener), i[this] = null, i[Co]--, i[Co] <= 0 && (n[To] = null, delete n[To]))
                    }
                } catch (a) {}
            }
            return r
        }
    }

    function qe() { t.EventTarget && (M(t.EventTarget.prototype, "addEventListener", function(t) { return ke(t) }), M(t.EventTarget.prototype, "removeEventListener", function(t) { return je(t) })) }

    function He() {
        Object.getOwnPropertyDescriptor && Object.defineProperty && Ac.forEach(function(e) {
            var n = "on" + e,
                r = Object.getOwnPropertyDescriptor(t.HTMLElement.prototype, n),
                i = r.get,
                a = r.set;
            Object.defineProperty(t.HTMLElement.prototype, n, {
                get: function() { return i.apply(this, arguments) },
                set: function() {
                    var t = arguments[0];
                    t && (arguments[0] = Pe(t, Qa, Rc)), a && a.apply(this, arguments)
                },
                configurable: !0,
                enumerable: !0
            })
        })
    }

    function Le(e) { return e && e.target instanceof t.HTMLElement && e.currentTarget instanceof t.HTMLElement }

    function Me(t) { return wc.call(t) }

    function Ue(t) { t = t || {}, this._capacity = t.capacity || 10, this._cache = {}, this._cacheKeys = [], this._size = 0 }

    function Be(t) { return !!t.match(Be.regex) }

    function Fe(t) { return t && t.substr(0, 256) || "" }

    function ze(t) {
        try {
            if (!t) return "";
            for (var e = [], n = t.parentNode, r = function() {
                    var r = t.tagName,
                        i = void 0;
                    i = n.children;
                    var a = void 0;
                    a = i ? 1 === [].filter.call(i, function(t) { return t.tagName === r }).length ? r : "".concat(r, ":nth-child(").concat(1 + [].indexOf.call(i, t), ")") : r;
                    var o = t.id ? "#".concat(t.id) : "",
                        s = t.className;
                    ii(s) && (s = Me(s));
                    var c = s ? s.split(" ").filter(function(t) { return Me(t) }).map(function(t) { return ".".concat(t) }).join("") : "";
                    e.unshift("".concat(a).concat(o).concat(c)), t = n, n = t.parentNode
                }; n;) r();
            return "".concat(e.join(" > ")).toLowerCase()
        } catch (i) {}
    }

    function Ye(t) { return !t.isTrusted || null != t.pointerType && !t.pointerType }

    function Ge(t, e, n) {
        var r = t.target,
            i = r.nodeName,
            a = r.id,
            o = r.className,
            s = r.title,
            c = r.value,
            u = r.innerText,
            f = i + a,
            l = Ye(t),
            d = { type: ea, id: a, nodeName: i, className: o, title: s, value: c, text: i === no ? "" : Fe(u), path: ze(t.target), trigger: l ? Ho : qo, range: Lo },
            p = t[Wa];
        if (p || (p = yi(), t[Wa] = p), d.eventId = p, l) {
            var h = t.timeStamp && E();
            jc && Math.abs(h - jc.timestamp) <= Nc && (d.refId = jc.eventId)
        } else jc = { timestamp: t.timeStamp && E(), eventId: d.eventId };
        if (to === i) {
            var m = t.target.getAttribute("src");
            m && !Be(m) && (d.src = m)
        }
        if (eo === i) {
            var v = t.target.getAttribute("href");
            v && (d.href = v)
        }
        return d.eventHandlerType = e, Re.createEvent(null, f, ea, t.type || Ja, d, n)
    }

    function Ke(t, e) { bs.context = Ge(t, e) }

    function We() {
        var t = bs.context;
        t && t.canEnd() && t.end(), bs.context = null
    }

    function Je(t, e) {
        var n = e.originalCallback,
            r = e.eventHandlerType,
            i = t[0],
            a = !(i && i.target && Pc.indexOf(i.type) > -1);
        if (!a) try { Ke.call(this, i, r) } catch (o) {}
        var s;
        try { s = n.apply(this, t) } finally { if (!a) try { bs.context && !bs.context.canEnd({ ignoreFields: [ra] }) && (i[Ga] = !0), We.apply(this) } catch (o) {} }
        return s
    }

    function Ve() { a(Pc, function(t) { document.addEventListener(t, function(t) { Ic.length >= Ma && Ic.shift(), Ic.push(t) }, _defineProperty({ capture: !0 }, Ka, !0)) }) }

    function Xe(t) { try { return 13 === (t + "").split(".")[0].length } catch (e) {} return !1 }

    function $e(n) {
        var r = t.performance && t.performance.timing ? t.performance.timing.navigationStart : e,
            i = n.timeStamp;
        return i = i ? Xe(i) ? i : Math.round(n.timeStamp + r) : E()
    }

    function Qe(t) {
        var e = Ic.filter(function(t) { return !t[Ga] }),
            n = e[e.length - 1];
        if (n) { var r = $e(n); if (Math.abs(r - t) < Dc) { var i; return n[Wa] && (i = kc.get(n[Wa])), i || (i = Ge(n, Za, { s: r }), n[Wa] && kc.put(n[Wa], i)), i } }
    }

    function Ze(t) { var e = []; try { e = Ic.filter(function(e) { return !e[Ga] && e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName }) } catch (n) {} if (e.length > 0) { var r = e[0]; return Ge(r, Za, { s: $e(r) }) } }

    function tn() { ms.inline_event_associate_threshold && (Dc = ms.inline_event_associate_threshold), ms.script_event_associate_threshold && (Nc = ms.script_event_associate_threshold), t[$i].hook && (t[$i].hook.eventCb = Je), !t[$i].listenerHooked && t.HTMLElement && (qe(), He()), ms.disable_hook_inline_event || Ve() }

    function en(t) {
        var e = t,
            n = t.xhrs;
        e.hasAjax = n && n.length > 0, delete e.xhrs;
        var r = { ss: 1 };
        t.type === yo && (r.rs = 1), Re.buildImmediateAction(ea, Xa, { type: ea, items: n, spe: e }, { sendOptions: { query: r } })
    }

    function nn(t) {
        if (Hc[t.key]) {
            var e = Hc[t.key];
            if (delete Hc[t.key], e.speBinded) {
                var n = e.setSpe(t);
                n || (!e.isMeaningfulAction() && e.isNoRemain() ? en(t) : w(function() { e.sent || en(t) }, Po))
            }
        } else en(t)
    }

    function rn(t) { Cs && console.warn(t || "Event key required!") }

    function an(t) {
        t = t || {}, this.key = t.key, this.type = t.type || go;
        var e = t.timeout || mo;
        this.timeout = e, this.status = 1, this.remain = 0, this.xhrs = [], this.s = E(), this.e = null, this.called = this.sent = this.stored = !1, t.debugInfo && (this.debugInfo = t.debugInfo)
    }

    function on(t) {
        var e = null;
        e = bs.context ? Re.getEventRootContext(bs.context) : Qe(t.s), null != e && (Hc[t.key] = e, e.speBinded = !0)
    }

    function sn(t) {
        t = t || {};
        var e = t.key;
        if (!e) return new rn;
        if (qc[e]) return new rn("event " + e + " is executing");
        qc[e] = !0;
        var n = Hs.createContext();
        Hs.enter(n);
        var r = new an(t);
        return r._end = function() {
            var t = this;
            t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n)
        }, r.end = function(t, e) { var r = this; return r.called ? void(Cs && console.warn("Event " + this.key + "has ended or failed!")) : (r.called = !0, Hs.exit(n), r.status = null != t ? t : 1, void(e || r._end())) }, r.finish = function(t) { var e = this; return e.e = E(), e.i && clearTimeout(e.i), delete qc[e.key], e }, r.fail = function() { this.end(0) }, r.store = function() { this.end(null, !0), this.refreshEventAndStore(n), this.stored = !0 }, r.i = r.timeout ? w(p(r.fail, r), r.timeout) : null, r.type === yo && on(r), Hs.set("event", r), r
    }

    function cn(e) {
        if (t.TINGYUN && t.TINGYUN.inited) {
            var n = Is(po),
                r = Y(n);
            if (r && r.start && (e = e || {}, !e.key || r.key === e.key)) {
                var i = e.timeout;
                if (i || (i = ho), r.duration = E() - r.start, r.duration > i) return void js(po);
                var a = t.performance && t.performance.timing;
                if (a && a.navigationStart && (a.loadEventEnd || a.loadEventStart) && a.navigationStart - r.start >= 0) {
                    var o = { method: "GET", url: document.URL, status: 200, type: na, subType: aa, startSpeOffset: a.navigationStart - r.start, start: a.navigationStart, __spe: 1, du: (a.loadEventEnd || a.loadEventStart) - a.navigationStart };
                    r.xhrs || (r.xhrs = []), r.xhrs.push(o)
                }
                var s = 1;
                e.status && (s = e.status === xo ? 1 : 0), r.status = s, js(po), nn(r)
            }
        }
    }

    function un(e) {
        if (!t.TINGYUN || !t.TINGYUN.inited) return new rn("Agent is not inited!");
        e = m({}, { type: vo }, e || {});
        var n = sn(e);
        return e.autoEnd && w(function() { e.status && e.status === bo ? n.fail() : n.end() }, e.endDelay || _o), n
    }

    function fn(t, e) {
        if (Hc[t]) {
            var n = Hc[t];
            n.id !== e.id && (e.speBinded = !0, Hc[t] = e)
        }
    }

    function ln(e, n) {
        t.TINGYUN && t.TINGYUN.inited && (si(n) || (n = {}), e && e.beforeEach && e.afterEach && (hs.routerEnable = !1, e.afterEach(function(e) {
            var r = e.fullPath;
            if (r = r ? t.location.origin + r : e.path) {
                var i = { key: r, type: yo, autoEnd: !0, endDelay: Oo, debugInfo: { api: jo } };
                m(i, n), un(i)
            }
        })))
    }

    function dn(t, e) {
        if (t) {
            var n = t.split("_"),
                r = n[0],
                i = n[1];
            "ty" === r && i && A(i, { timestamp: E(), data: e })
        }
    }

    function pn() {
        var t = os.getElementsByTagName("img");
        a(t, function(t) { t.complete || t[wo] || (t[wo] = !0, mi(t, xi, function() { _s.imageResources.push({ loadTime: E(), element: t }) })) })
    }

    function hn(t) {
        var e = os.createElement("script");
        e.type = "text/javascript";
        try { e.appendChild(os.createTextNode(t)) } catch (n) { e.text = t }
        os.getElementsByTagName("head")[0].appendChild(e)
    }

    function mn() {
        function e(t) {
            try {
                var e = t.getEntries();
                e && a(e, function(t) { t.entryType === rs && bs.enableLCPObserver ? _s[rs] = t.renderTime || t.loadTime : t.entryType === ns && t.name === is && (_s[ns] = t.startTime) })
            } catch (n) {}
        }
        if (t.PerformanceObserver) {
            var n = [ns];
            hs.lcpEnable && n.push(rs);
            var r = [],
                i = t.PerformanceObserver.supportedEntryTypes || [];
            if (a(n, function(t) { i.indexOf(t) > -1 && r.push(t) }), Zt(function() { oc.et = r }), 0 != r.length) try { a(r, function(n) { bs.performanceObserver[n] = new t.PerformanceObserver(e), bs.performanceObserver[n].observe({ type: n, buffered: !0 }) }) } catch (o) {}
        }
    }

    function vn(e) {
        mn(), Bc.on(xi, S(function() {
            n();
            var t = E();
            Zt(function() { oc.load = t }), e.loadEventEnd = t, clearInterval(Uc)
        })), a([xi, bi, Ei, Si], function(e) {
            mi(t, e, function(t) {
                Zt(function() {
                    (oc.e[e] || (oc.e[e] = [])).push(E())
                }), Bc.emit(e, t)
            })
        });
        var n = S(function() {
            var n = E();
            if (Zt(function() { oc.end = n }), e.domContentLoadedEventStart = n, G() && t.performance && t.performance.getEntriesByName) {
                if (!os.querySelectorAll) return;
                _s.resources = _s.resources || [], a(os.querySelectorAll("head>link,head>script"), function(t) { var e; "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && _s.resources.push(e) })
            }
        });
        if (G() && mi(os, wi, n), mi(os, Ti, function(t) { os.readyState === Ci && n() }), (!G() || t.performance && !t.performance.getEntriesByName) && (Uc = setInterval(pn, Ao)), !G()) try { hn("if(window.TINGYUN) {window.TINGYUN.".concat(Ro, "=+new Date();}")) } catch (r) {}
    }

    function gn(t, e, n) { return n || (e === $o ? n = ts : e === Qo && (n = es)), "".concat(t, "_").concat(e, "_").concat(n || zc) }

    function yn(e) {
        if (si(e)) {
            var n = e.type,
                r = e.name,
                i = e.handler,
                a = e.options;
            if (!(null == Fc[n] || Fc[n].indexOf(r) < 0 || !oi(i) || a && !si(a))) {
                var o = gn(n, r, a && a.position);
                n === Wo ? (Yc[o] = e, r === Xo && t.TINGYUN && t.TINGYUN.inited && bn({ type: Wo, name: Xo })) : (Yc[o] || (Yc[o] = []), Yc[o].push(e))
            }
        }
    }

    function _n(t, e) { yn({ type: Wo, name: t, handler: e }) }

    function xn(t, e, n) { yn({ type: Jo, name: t, handler: e, options: n }) }

    function bn(t) {
        var e = t.type,
            n = t.name,
            r = t.hookPostion,
            i = t.args,
            o = gn(e, n, r),
            s = {};
        if (Yc[o]) {
            if (s.exist = !0, e === Wo) {
                var c, u = Yc[o],
                    f = u.handler;
                try { c = f.apply(null) } catch (l) {}
                return s.result = c, s
            }
            var d = t.scope;
            d || (d = new Mt);
            try {
                a(Yc[o], function(t) {
                    var e = t.handler,
                        n = t.options;
                    n = n || {};
                    var r = m({ scope: d }, i);
                    e.call(d, r)
                })
            } catch (l) {}
        } else s.exist = !1;
        return s
    }

    function En(t) { this.limit = t, this.reset() }

    function Sn(t, e, n, r, i) { return String(t) + String(e) + String(n) + String(r) + String(i) }

    function Tn(t, e, n, r) { return String(t) + String(e) + String(n) + String(r) }

    function Cn(t, e, n, r, i, a, o, s) {
        var c = this;
        c.id = t, c.time = E(), c.msg = e, c.lineno = r, c.colno = i, c.filename = n, c.count = 1, c.stack = a && a.stack || "", c.module = o, c.trigger = s || Jc, c.error = a, c.fix();
        var u = Tn(e, r, i, o),
            f = Xc[u];
        c.ep = f ? 0 : 1, Xc[u] = !0, c.fep = 0, c.trace = {}, this.recordFileName()
    }

    function wn(t) {
        var n = function(t) { var e = []; return a(t, function(t) { e.push(t.toObject()) }), e }(Vc.c);
        if (!n || !n.length) return null;
        var r = { fu: Kc ? Kc : Kc++, os: parseInt((E() - (_s.pfStart || e)) / 1e3) };
        ys.ulabel && (r.ulabel = ys.ulabel), Re.buildImmediateAction(sa, null, null, { actionOptions: m(r, { items: n }) }), Vc.reset()
    }

    function An(t, e, n, r, i, o, s) {
        if (e || !hs.ignoreNoFilePropError) {
            var c = !1;
            if (a(hs.domains, function(t) { return c = t.test(e), c ? !1 : void 0 }), !c) {
                var u = i && i.moduleId,
                    f = Sn(e, t, n, r, u),
                    l = Vc.get(f);
                l ? l.increase() : (l = new Cn(f, t, e, n, r, i, u, o), Vc.add(f, l), ic.errs && ic.errs.push(l));
                var d = l.initTraceInstance();
                l.triggerActionHook(d);
                try { l.trace[d].scope.setContext(s) } catch (p) {}
            }
        }
    }

    function Rn() {
        var e = t.onerror;
        t.onerror = function(t, n, r, i, a) { return An(t, n, r, i, a), oi(e) ? e.apply(this, arguments) : void 0 }, t.onerror._ty = !0
    }

    function On() {
        var e = t.onerror;
        e && e._ty || Rn()
    }

    function Pn(t, e) {
        if (t) {
            var n = t.message || "",
                r = t.stack,
                i = "",
                o = 0,
                s = 0;
            if (r) {
                var c = r.split(/\n/);
                a(c, function(t, e) {
                    if (t && (t = t.trim()), t && 0 === t.indexOf("at ")) {
                        var n = t.indexOf("("),
                            r = t.indexOf(")");
                        if (n && r) {
                            var a = n + 1;
                            a > r && (a = r);
                            var c = t.substring(a, r);
                            if (c) {
                                var u = c.split(":");
                                u && u.length > 2 && (i = (u.slice(0, u.length - 2) || []).join(":"), o = +u[u.length - 2], s = +u[u.length - 1])
                            }
                        }
                    }
                    return i && ci(o) && o > 0 && ci(s) && s > 0 ? !1 : void 0
                })
            }
            An(n, i, o, s, { stack: r }, Wc, e)
        }
    }

    function Dn() {
        var e = gi();
        return e ? Rn() : mi(t, _i, function(e) {
            var n, r, i, a, o;
            (e instanceof t.Event || t.ErrorEvent && e instanceof t.ErrorEvent) && (n = e.message || e.error && (e.error.message || e.error.constructor.name) || "", r = e.lineno || 0, i = e.colno || 0, a = e.filename || e.error && e.error.filename || e.target && e.target.baseURI || "", a == os.URL && (a = "#"), o = e.error), An(n, a, r, i, o)
        }), Bc.on([xi, bi, Ei, Si], function(t) { wn() }).on(xi, function() { e && Ys(On) }), setInterval(wn, Gc, !0)
    }

    function Nn(t) {
        if (t) {
            var e = ys.firstScreenResources = ys.firstScreenResources || [];
            ai(t) || (t = [t]), a(t, function(t) {
                if (ii(t)) e.push(t);
                else if (gs(t)) {
                    var n = t.src || t.href;
                    n && e.push(n)
                }
            })
        }
    }

    function In(t) {
        ai(t) || (t = [t]), a(t, function(t) {
            if (t) {
                if (!(t instanceof RegExp)) throw new as("parameter's type requires RegExp");
                (hs.domains || (hs.domains = [])).push(t)
            }
        })
    }

    function kn() {
        if (Object.defineProperty) {
            var e = t[Ri];
            e && Object.defineProperty(t, Ri, { get: function() { return Zc++ > 0 && t.console && console.warn("window.%s is deprecated, use window.%s instead.", Ri, Oi), e } })
        }
    }

    function jn(t, e) {
        if (qn()) {
            var n = { rm: {}, em: [], cpm: {} };
            e && (n.rm.res = e.res || []), t && (n.cpm = t, n.cpm.ul = os.URL), nbsJsBridge.logJsResult(ri(n))
        }
    }

    function qn() { return "undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult }

    function Hn() { var t = 0; try { t = window.performance.timing.loadEventEnd } catch (e) {} return t > 0 }

    function Ln(t, n) {
        var r = { tr: !1, tt: h(os.title), charset: os.characterSet };
        ys.resources && m(r, ys.resources), Zt(function() { r.debug = oc }), ee();
        var i = ic.errs;
        a(i, function(t, r) {
            var a = t.toObject();
            a.o = a.o - n && n.navigationStart || e, i[r] = a
        }), r.err = i;
        var o, s = "getEntriesByType";
        return t[s] ? o = t[s]("resource") : P(v(tu, [s])), o && (r.tr = !0, r.res = [], a(o, function(t) {
            function e(e) { var n = t[e]; return n > 0 ? n : 0 }
            var n = t.initiatorType,
                i = t.name,
                o = { o: e("startTime"), rt: n, n: i, f: e(_a), ds: e(Da), de: e(Na), cs: e(ja), ce: e(qa), sl: e(Ha), qs: e(xa), rs: e(ba), re: e(Ea), ts: t.transferSize || 0, es: t.encodedBodySize || 0 };
            if ("xmlhttprequest" === n) {
                var s = Mn(i);
                a(s, function(t, e) { 0 == e.indexOf("s_") && (o[e] = t) })
            }
            r.res.push(o)
        })), r
    }

    function Mn(t) { var e; return a(ic.xhrs, function(n, r) { return r && t.indexOf(r) > -1 ? (e = n, !1) : void 0 }), e }

    function Un(t) { if (t) { var e = t.fetchStart; if (e) return e - t.navigationStart } }

    function Bn() {
        var n = {},
            r = 0,
            i = t.performance;
        i && i.getEntriesByType && a(i.getEntriesByType("mark") || [], function(t) {
            if (t && t.name && t.startTime && 0 === t.name.indexOf(Qi)) {
                var e = t.name.substring(Qi.length);
                e && (n[e] = Math.round(t.startTime), r += 1)
            }
        });
        var o = i && i.timing ? i.timing.navigationStart : e,
            s = t[$i] && t[$i].data,
            c = m({}, s || {}, xs || {});
        return c && i && i.timing && a(c, function(t, e) { si(t) && t.timestamp && (n[e] = t.timestamp - o, r += 1) }), r > 0 ? n : null
    }

    function Fn(t, e) { var n = m({}, t || {}, { type: aa }); return e && (n.body = e), n }

    function zn(t, e) {
        var n = ri(t),
            r = n ? n.length : 0;
        if (r > Zi && t.res && t.res.length > 0) {
            t.res = t.res.slice(0, e);
            var i = ri(t),
                a = i ? i.length : 0;
            return a > Zi ? zn(t, e - 10 > 0 ? e - 10 : 0) : t
        }
        return t
    }

    function Yn() {
        var e = S(function() {
            function e(t) { return t ? "1" : "0" }
            if (!bs.pfSent) {
                var n = t.performance,
                    r = !!n,
                    i = n && n.timing;
                r || P(v(tu, ["pf"]));
                var o = m(he(i), hs.pageServerData, ys),
                    s = m({}, Ls);
                s.fp = re(s, t), s.dr = pe(s, n), s.fs = ie(s, n);
                var c = m(o, s) || {},
                    u = Bn();
                u && a(u, function(t, e) { ci(t) && t >= 0 && (c[e] = t) });
                var f, l = "",
                    d = i ? Un(i) : 0;
                a(["fp", "fs", "dr", "le"], function(t) { l += e((d ? c[t] - d : c[t]) >= ms[t + "_threshold"]) }), r && l.indexOf("1") > -1 && (f = Ln(n, i), c.ressize = !(!n || !n.getEntriesByName)), u && (f || (f = {}), f.mark = u), c.trflag = l || "0000", _s.pfStart = E(), delete c.firstScreenResources, delete c.resources;
                var p = Rt(os.URL);
                if (f || (f = { tr: !1, tt: h(os.title), charset: os.characterSet }), f.bizId_param = p.bizIdParams, f.opt_param = p.params, f.request_param = p.requestParams, hs.collectAllParam[Bo] && p.operaAllParam && (f.opera_all_param = {}, f.opera_all_param[Bo] = p.operaAllParam), bs.opt_custom_param = p.optCustomParams, f) try { f = zn(f, 150) } catch (g) {}
                var y = Fn(c, f),
                    _ = Re.buildImmediateAction(aa, "", y, { notSend: bs.recordingCpActions });
                bs.recordingCpActions && (_.crossPage = !0, bs.cpActions.push(_), w(function() { Se(!0) }, eu));
                try { jn(c, f) } catch (g) {}
                bs.pfSent = !0
            }
        });
        return G() && Hn() && !bs.pfSent && e(), Bc.on(xi, function() {
            var t = 0;
            if (ms.pfDelay && si(ms.pfDelay)) {
                var n = Bn();
                a(ms.pfDelay, function(e, r) {
                    (!n || null == n[r]) && ci(e) && e > t && (t = e)
                })
            }
            if (G() && bs.recordingCpActions) {
                var r = ms.cross_page_delay ? ms.cross_page_delay : Ya,
                    i = r - t;
                0 > i && (i = 0), eu = i
            }
            w(e, t)
        }).on([bi, Ei, Si], e)
    }

    function Gn(t) { var e = t; return nu && (ru.setAttribute("href", e), e = ru.href), ru.setAttribute("href", e), { href: ru.href, protocol: ru.protocol ? ru.protocol.replace(/:$/, "") : "", host: ru.host, search: ru.search ? ru.search.replace(/^\?/, "") : "", hash: ru.hash ? ru.hash.replace(/^#/, "") : "", hostname: ru.hostname, port: ru.port, pathname: "/" === ru.pathname.charAt(0) ? ru.pathname : "/" + ru.pathname } }

    function Kn(t) { var e = !1; return hs.corsDomains && a(hs.corsDomains, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function Wn(t) { var e = Gn(t); return e.protocol === iu.protocol && e.host === iu.host || Kn(e.host) }

    function Jn(t, e, n) {
        var r = yi().replace(/-/g, ""),
            i = {};
        return a(e, function(e) {
            if (e) {
                var a = n && n[e];
                null == a && (t.setRequestHeader(e, r), a = r), i[e] = a
            }
        }), i
    }

    function Vn(t) { t.pcid = t.parentContext.id, t.parentContext.updateRemain(1, na), t.parentContext.items.push(t.contextData) }

    function Xn(t) {
        return function e(n, r) {
            var i = this,
                a = e;
            if (a._ && (a._ = 1), !i[Di]) {
                var o = i[Ri] = {};
                o.method = n, o.url = r, o.id = ou++, o.jserror = !1;
                var s = Hs.get("event");
                s && (o.key = s.key, s.remain++), nr(o, bs.context), o.parentContext = o.context.parent, o.contextData = { type: na, id: o.id, cid: o.context.id, method: o.method, url: o.url, state: o.state, ignore: !1, jserror: o.jserror }, o.context && o.context.setData(o.contextData), o.parentContext && Vn(o), o.scope = new Mt, o.toJSON = function() {}
            }
            try { return t.apply(i, arguments) } catch (c) {}
            return G() ? void 0 : d(t, [i, arguments])
        }
    }

    function $n(t) {
        return function e(n, r) {
            var i = this,
                a = e;
            if (a._ && (a._ = 1), !i[Di]) {
                var o = i[Ri],
                    s = hr(n, hs.optCustomParamRules);
                ls.isGather && (o.wReqHeaderParam || (o.wReqHeaderParam = {}), o.wReqHeaderParam[n] = r), o && s && (o.reqHeaderParam || (o.reqHeaderParam = {}), o.reqHeaderParam[n] = r), o.headerRecord || (o.headerRecord = {}), o.headerRecord[n] = r
            }
            try { return t.apply(i, arguments) } catch (c) {}
            return G() ? void 0 : d(t, [i, arguments])
        }
    }

    function Qn(t) {
        return function e(n) {
            var r = this,
                i = e;
            if (i._ && (i._ = 1), !r[Di]) {
                var a = r[Ri];
                if (a && (a.start = E(), a.reqSize = T(n), a.requestData = n, a.contextData && (a.contextData.start = a.start)), G()) {
                    if (a.context && null == a.context.parent) {
                        var o = Qe(a.start);
                        o && (a.context.parent = o, a.parentContext = a.context.parent, Vn(a))
                    }!a.parentContext && bs.recordingCpActions && (a.context.crossPage = !0, bs.cpRemain.ajax++, bs.cpActions.push(a.context))
                }
                var s = Hs.get("event");
                s && s.type === yo && a.key === s.key && a.parentContext && fn(a.key, a.parentContext), or(r);
                var c = Wn(a.url);
                if (ms.x_server_switch && r.setRequestHeader && ms.key && a && c) {
                    var u = _r(),
                        f = "c=B|" + ms.key;
                    u && (f += ";x=" + u), r.setRequestHeader(Ji, f), a.xTingyunSent = !0, ms.apm_headers && (a.apms = Jn(r, ms.apm_headers, a.headerRecord))
                }
                bn({ type: Jo, name: $o, hookPostion: Zo, args: { target: r }, scope: a.scope })
            }
            try { return t.apply(r, arguments) } catch (l) {}
            return G() ? void 0 : d(t, [r, arguments])
        }
    }

    function Zn(t) {
        a(su, function(e, n) {
            var r = "on" + n;
            t[r] ? M(t, r, function(r) { return function() { return er(t, e, n), oi(r) ? r.apply(this, arguments) : void 0 } }) : t[r] = function() { er(t, e, n) }
        })
    }

    function tr(t) { a(su, function(e, n) { mi(t, n, function() { er(t, e, n) }) }) }

    function er(t, e, n) { t && t[Ri] && (t[Ri].errorCode = e, t[Ri].errorEvent = n) }

    function nr(t, e) {
        if (!t.context) {
            var n = "".concat(t.url, "-").concat(t.id);
            t.context = Re.createEvent(e, n, na)
        }
    }

    function rr(t, e) { bs.context = t.context, bs.globalAsyncStore = t, bs.globalAjaxContext = e }

    function ir(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), t.contextData && t.context.state === ya && ms.upload_timeout_ajax && (t.contextData.brsOnly = !0, Re.buildImmediateAction(na, "", t.contextData, { actionOptions: { state: ya } })), bs.globalAsyncStore = null, bs.globalAjaxContext = null
    }

    function ar(t, e) {
        if (G()) {
            var n = t[au];
            n && !t[ao] && (M(t, au, e), t[ao] = !0)
        }
        var r = t[cu];
        !r || t[ao] || r[ao] || (M(t, cu, e), t[ao] = !0)
    }

    function or(t) {
        function e(e) {
            return L(function n() {
                var r = n;
                r._ && (r._ = 1), sr(t);
                var i;
                if (oi(e)) {
                    var a = t[Ri];
                    if (a && 4 == t.readyState) {
                        var o = E();
                        rr(a, t)
                    }
                    try { i = e.apply(this, arguments) } catch (s) { throw a && (a.jserror = !0), s }
                    a && 4 == t.readyState && (a.cbTime = E() - o)
                }
                return i
            })
        }
        ar(t, e);
        try { G() ? tr(t) : Zn(t) } catch (n) {}
        if (!t[ao]) {
            var r = L(function i() {
                var e = i;
                e._ && (e._ = 1), t[ao] || 4 === t.readyState && sr(t)
            });
            try { G() ? mi(t, Ti, r) : (t[cu] = r, t[cu][ao] = !0) } catch (n) { return }
        }
        Ys(function() { ar(t, e) })
    }

    function sr(t) {
        var e = t[Ri];
        if (e && (e.end = E(), e.readyState = t.readyState, 4 == t.readyState)) {
            delete t[ao], rr(e), e.status = t.status, e.text = cr(t), e.resSize = T(e.text);
            var n = lr(e, t);
            bn({ type: Jo, name: $o, hookPostion: ts, args: { target: t, actionData: e.contextData }, scope: e.scope });
            var r = Hs.get("event");
            Ys(function() { e.callbackEnd || (e.callbackEnd = !0, fr(e, n), r && r.key == e.key && (r.xhrs.push(n), 0 === --r.remain && r._end()), ic.xhrs && (ic.xhrs[e.url] = n), ir(e)) })
        }
    }

    function cr(t) {
        var e = "";
        if ("" == t.responseType || "text" == t.responseType) e = t.responseText;
        else if (t.response) e = t.response;
        else try { e = t.responseText } catch (n) {}
        return e || ""
    }

    function ur(t) { return t.data && "event" === t.data.type ? { text: t.data.text, path: t.data.path, src: t.data.src, value: t.data.value, href: t.data.href, title: t.data.title, nodeName: t.data.nodeName, items: t.items } : t.parent && t.parent.data && "event" === t.parent.data.type ? { text: t.parent.data.text, path: t.parent.data.path, src: t.parent.data.src, value: t.parent.data.value, href: t.parent.data.href, title: t.parent.data.title, nodeName: t.parent.data.nodeName, items: t.parent.items } : t.parent && t.parent.parent ? ur(t.parent) : { text: "", path: "", nodeName: "", items: [] } }

    function fr(t, e) { t && e && t.jserror && (e.jserror = t.jserror), t.errorCode && !e.err && (e.err = t.errorCode), t.cbTime && !e.cb && (e.cb = t.cbTime), zt(e, t.scope) }

    function lr(e, n) {
        if (e && !e.composed) {
            var r = e.status;
            if (ls.isGather) {
                var i = ur(e.context);
                e.wCustom = { fromJS: "agent", key: ms.key, ajaxUrl: e.url, items: e.context.items, itemsTemp: i && i.items, id: e.id, url: document.URL, text: i && i.text, href: i && i.href, title: i && i.title, value: i && i.value, src: i && i.src, xpath: i && i.path, nodeName: i && i.nodeName, method: e.method, urlParams: st(document.URL), ajaxUrlParams: st(e.url), start: e.start, requestHeader: e.wReqHeaderParam, requestParams: e.requestData, responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"), responseBody: n.response, children: [] }, t.top && t.top.postMessage && t.top.postMessage(ri(e.wCustom), "*"), delete e.wCustom, delete e.wReqHeaderParam
            }
            m(e.contextData, { end: e.end, du: r > 0 ? e.end - e.start : 0, cb: e.cbTime || 0, status: r, err: e.errorCode ? e.errorCode : 0, rec: e.resSize, send: e.reqSize });
            var a = e.contextData,
                o = {};
            o[Ui] = e.reqHeaderParam || {};
            var s = Rt(e.url),
                c = s.bizIdParams,
                u = s.params,
                f = s.requestParams,
                l = s.optCustomParams,
                d = gr(e.requestData, hs.bizIdsRules[Ii], hs.bizIdsRules[qi]),
                p = gr(e.requestData, hs.customParamsRules[Ii], hs.customParamsRules[qi]),
                h = gr(e.requestData, hs.requestParamKeys[Hi], hs.requestParamKeys[Li]);
            o[Bi] = It(yr(e.requestData), hs.optCustomParamRules[Bi], !0);
            var v = mr(n, hs.bizIdsRules),
                g = mr(n, hs.customParamsRules);
            o[Fi] = mr(n, hs.optCustomParamRules, Fi);
            var y = {},
                _ = {},
                x = Y(e.text);
            x && (y = vr(x, hs.bizIdsRules), _ = vr(x, hs.customParamsRules), o[zi] = It(x, hs.optCustomParamRules[zi], !0)), a.bizId_param = m({}, c, d, v, y), a.opt_param = m({}, u, p, g, _), a.request_param = m({}, f, h), a.opt_custom_param = Nt(dr(o, l));
            var b = e.xTingyunSent ? Y(pr(n, Vi)) : null;
            if (b) {
                if (a.hasServerHeader = !0, a.s_id = b.id, a.s_tname = b.tname, a.s_tid = b.tid, a.s_rid = b.rid, a.s_duration = b.duration, "user" in b) {
                    var E = b.user,
                        S = E;
                    if (null != E && 0 === E.indexOf(Xi)) { var T = E.substring(Xi.length); try { S = tc.decode(T) } catch (C) {} }
                    a.s_user = S, Tt(S)
                }
                "bid" in b && (a.s_bid = Dt(b.bid)), "ber" in b && (a.s_ber = b.ber), "isError" in ic && (a.s_isError = b.isError)
            } else a.hasServerHeader = !1;
            e.apms && (a.apms = e.apms), e.key && (a.__spe = 1);
            var w = {};
            return hs.collectAllParam[Bo] && s.operaAllParam && (w[Bo] = s.operaAllParam), hs.collectAllParam[Fo] && e.headerRecord && (w[Fo] = e.headerRecord), hs.collectAllParam[zo] && e.requestData && (w[zo] = e.requestData), hs.collectAllParam[Yo] && (w[Yo] = n.getAllResponseHeaders()), hs.collectAllParam[Go] && e.text && (w[Go] = e.text), At(w) || (a.opera_all_param = w), e.composed = !0, a
        }
    }

    function dr(t, e) { return a(e, function(e, n) { t[n] = m({}, t[n] || {}, e || {}) }), t }

    function pr(t, e) { if (t && t.getResponseHeader) try { return t.getResponseHeader(e) } catch (n) {} }

    function hr(t, e) { var n; return a(e[Ui], function(e) { return t === e ? (n = !0, !1) : void 0 }), n }

    function mr(t, e, n) {
        var r = {};
        return a(e[n || ki], function(e) {
            var n = pr(t, e);
            null != n && nt(r, e, n)
        }), r
    }

    function vr(t, e, n) {
        var r = {};
        return a(e[n || ji], function(e) {
            var n = Pt(Yi, e),
                i = n(t);
            null != i && nt(r, e, i)
        }), r
    }

    function gr(t, e, n) { return Ot(yr(t), e, n) }

    function yr(t) { var e = Y(t); return e || (e = ct(t)), e }

    function _r() { try { return yi().substring(0, 16) } catch (t) {} }

    function xr() {
        var e = ss && ss.prototype;
        e ? (M(e, "open", Xn), M(e, "setRequestHeader", $n), M(e, "send", Qn)) : ss && (t.XMLHttpRequest = function() { var t = new ss; return M(t, "open", Xn), M(t, "setRequestHeader", $n), M(t, "send", Qn), t })
    }

    function br(t) { t && !t.composed && (m(t.contextData, { end: t.end || E() }), t.composed = !0) }

    function Er() { ms.set_timeout_max_depth && ms.set_timeout_max_depth > 0 && (fu = ms.set_timeout_max_depth), M(window, "setTimeout", Pr), M(window, "clearTimeout", Dr) }

    function Sr(t) { t.context || (t.context = Re.createEvent(bs.context, "".concat(t.name, "-").concat(t.id), ra, t.name)) }

    function Tr(t) { bs.context = t.context, bs.globalAsyncStore = t }

    function Cr(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), bs.globalAsyncStore = null
    }

    function wr(t) {
        var e = 0,
            n = t.context;
        if (n) {
            var r = n.remain[na],
                i = n.remain[ia];
            e += r.current + r.children + i.current + i.children
        }
        return e > 0
    }

    function Ar(t) { for (var e = 0; null != t && 5 > e;) e += t.type === ra ? 1 : 0, t = t.parent; return 5 > e }

    function Rr(t) { return function() { return H(t).apply(this, arguments) } }

    function Or(t, e, n, r) {
        var i = null,
            a = null;
        return si(r) && r[io] || null == bs.context ? a = Rr(t) : Ar(bs.context) ? (i = { id: uu++, name: e, start: E(), delay: n, parentContext: bs.context }, Sr(i), i.contextData = { type: ra, id: i.id, cid: i.context.id, name: i.name, start: i.start, delay: i.delay }, i.context && i.context.setData(i.contextData), i.parentContext && (i.pcid = i.parentContext.id, i.parentContext.updateRemain(1, ra), i.parentContext.items.push(i.contextData)), a = L(function() { var e; try { Tr(i) } catch (n) {} try { t && (e = t.apply(this, arguments)) } finally { try { wr(i) ? (i.end = E(), br(i), Cr(i)) : i && i.context.removeFromParent() } catch (n) {} } return e })) : a = Rr(t), { store: i, cb: a }
    }

    function Pr(t, e) {
        return function(n) {
            var r = fi.call(arguments, 0),
                i = null;
            if (!arguments[2] && oi(n)) {
                var a = Or(n, e, r[1], r[2]);
                a.cb && (r[0] = a.cb), i = a.store
            }
            var o = t.apply(this, r);
            return i && (lu[o] = i), o
        }
    }

    function Dr(t) {
        return function(e) {
            try {
                var n = lu[e];
                n && n.context && (n.context.removeFromParent(), lu[e] = null)
            } catch (r) {}
            return t.apply(this, arguments)
        }
    }

    function Nr(t) { m(t.contextData, { pvid: t.pvid, end: t.end, url: t.url }, t.serverData || {}, t.pfData || {}) }

    function Ir(t) { t.context || (t.context = Re.createEvent(t.parentContext, "".concat(t.src, "-").concat(t.id), ia)) }

    function kr(t, e, n) {
        function r() {
            if (i.end = E(), i.sameOrigin && this && this.contentDocument && this.contentWindow) {
                i.sameOrigin = !0, i.url = this.contentDocument.URL;
                var e = kt(Wi, Ki, this.contentWindow[Ki] || this.contentDocument.cookie || "");
                if (e) {
                    var n = qt(e);
                    jt(Wi, "", -1e3, "/", this.contentDocument), i.serverData = Ht(n)
                }
                var a = this.contentWindow[Oi],
                    o = this.contentWindow.performance && this.contentWindow.performance.timing,
                    s = { window: this.contentWindow, globalStart: a ? a.globalStart : o.navigationStart, agent: m({}, a && a.currentAgent ? a.currentAgent : {}) };
                a && (i.pvid = a.pvid || "");
                var c;
                try { c = me(o, s) } catch (u) { c = {} }
                i.pfData = c, i.pfData.le && (i.end = o.navigationStart + i.pfData.le)
            } else i.sameOrigin = !1;
            Nr(i), jr(i), t.removeEventListener("load", r)
        }
        if (t) {
            n || (n = t.src ? hu : pu);
            var i = { id: du++, src: e, loadType: n, start: E(), parentContext: bs.context };
            i.sameOrigin = Wn(i.src), Ir(i), i.contextData = { type: ia, loadType: i.loadType, id: i.id, cid: i.context.id, src: i.src, start: i.start, sameOrigin: i.sameOrigin }, i.context && i.context.setData(i.contextData), i.parentContext && (i.pcid = i.parentContext.id, i.parentContext.updateRemain(1, ia), i.parentContext.items.push(i.contextData)), !i.parentContext && bs.recordingCpActions && (i.context.crossPage = !0, bs.cpRemain.iframe++, bs.cpActions.push(i.context)), t.addEventListener("load", r)
        }
    }

    function jr(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), bs.context = null
    }

    function qr() {
        function t(t) { return function(e) { return "IFRAME" === e.nodeName && e.src && kr(e, e.src, pu), t.apply(this, arguments) } }
        M(Node.prototype, "appendChild", t), M(Node.prototype, "insertBefore", t)
    }

    function Hr() {
        function t() {
            var t = arguments[0],
                e = this;
            return kr(e, t), r.apply(this, arguments)
        }
        if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
            var e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src"),
                n = e.get,
                r = e.set;
            Object.defineProperty(HTMLIFrameElement.prototype, "src", { get: function() { return n.apply(this, arguments) }, set: t, enumerable: !0, configurable: !0 })
        }
    }

    function Lr() { qr(), Hr() }

    function Mr(t) { ks(Ua, ri(t)) }

    function Ur(t) {
        var e = mu++,
            n = t.url || "",
            r = E(),
            i = Re.createEvent(bs.context, "".concat(n, "-").concat(e), oa, t.subType || Ba),
            a = { type: oa, subType: i.subType, id: e, cid: i.id, url: n, start: r };
        i && i.setData(a);
        var o;
        return i.parent && (i.parent.type === na ? lr(bs.globalAsyncStore, bs.globalAjaxContext) : i.parent.type === ra && br(bs.globalAsyncStore), o = i.collectCrossPageData(), vu = o, t.delayStorage || Mr(o), i.clear(), i = null), { storageData: o, context: i }
    }

    function Br(t) {
        return function() {
            var e = arguments[0],
                n = Ur({ url: e, delayStorage: !0 }),
                r = n.storageData,
                i = n.context;
            try {
                var a = t.apply(this, arguments);
                if (a) {
                    if (!r && i) {
                        var o = Qe(i.data.start);
                        o && (i.parent = o, r = i.collectCrossPageData(), vu = r, i.clear(), i = null)
                    }
                    Mr(r)
                }
                return a
            } catch (s) {}
            return G() ? void 0 : d(t, [this, arguments])
        }
    }

    function Fr() { M(t, "open", Br) }

    function zr() {
        function t(t) { return { valid: eo === t.target.nodeName && !t.defaultPrevented && t.target.href, url: t.target.href, subType: Fa } }

        function e(t) { return { valid: no === t.target.nodeName && !t.defaultPrevented && t.target.action, url: t.target.action, subType: za } }
        a([Ja, Va], function(n) {
            os.addEventListener(n, function(r) {
                if (r) {
                    var i = n === Ja ? t(r) : e(r);
                    if (i.valid) {
                        var a = r.timeStamp ? Ze(r) : Qe($e(r));
                        a && (bs.context = a, Ur({ subType: i.subType, url: i.url }), bs.context = null)
                    }
                }
            }, _defineProperty({}, Ka, !0))
        })
    }

    function Yr() { Te(vu), vu = null }

    function Gr() { mi(os, Uo, function() { "hidden" === os.visibilityState && Yr() }), mi(t, Si, function() { Yr() }) }

    function Kr() { Fr(), zr(), Gr() }

    function Wr() { ms.disable_hook_event || tn(), ms.disable_hook_timer || Er(), ms.disable_hook_iframe || Lr(), ms.disable_hook_cross_page || Kr() }

    function Jr(t, e) { t && hs.routerEnable && un({ key: t, autoEnd: !0, endDelay: ms.router_event_delay || Oo, type: yo, debugInfo: { api: e } }) }

    function Vr() {
        gu.forEach(function(e) {
            M(t.history, e, function(n) {
                return function(r, i, a) {
                    var o;
                    o = n.apply(this, arguments);
                    try { Jr(t.location.href, e) } catch (s) {}
                    return o
                }
            })
        }), mi(t, No, function() { Jr(t.location.href, No) })
    }

    function Xr() { mi(t, Do, function() { Jr(t.location.href, Do) }) }

    function $r() {
        var e = t.history;
        e ? Vr() : Xr()
    }

    function Qr() { hs.routerEnable && $r() }

    function Zr() {
        if (G()) try { mi(t, "message", $t) } catch (e) {}
        if (vn(ic), G() && Wr(), Yn(), xr(), Dn(), Qr(), ic._end = E(), Zt(function() { oc._end = ic._end }), kn(), G()) {
            var n = Y(Is(Ua));
            n && n.fromUrl && os.referrer && n.fromUrl.indexOf(os.referrer) > -1 && (bs.recordingCpActions = !0, bs.cpParent = n), js(Ua)
        }
    }

    function ti(e) {
        if ((!t[Oi] || !t[Oi].inited) && e && (oi(e) || si(e))) {
            var n = bn({ type: Wo, name: Vo });
            (!n.exist || n.result) && (Vt(e), (ms.key || ms.appKey) && (Zr(), t[Oi].inited = !0), bn({ type: Wo, name: Xo }))
        }
    }

    function ei() { return window[Oi] && 3 === window[Oi].mainVersion ? window[Oi] : (Qc.init = ti, Qc) }
    var ni, ri, ii = o("String"),
        ai = o("Array"),
        oi = o("Function"),
        si = o("Object"),
        ci = o("Number"),
        ui = o("Undefined"),
        fi = [].slice,
        li = '"',
        di = /([\"\\])/g,
        pi = /\n/g,
        hi = t.JSON;
    hi && hi.parse && hi.stringify ? (ni = n, ri = r) : (ni = s, ri = c);
    var mi;
    mi = t.addEventListener ? f : l;
    var vi = t.encodeURIComponent,
        gi = function() { return !document.addEventListener },
        yi = (t.location.protocol, function() {
            function t(t) { return 0 > t ? NaN : 30 >= t ? 0 | Math.random() * (1 << t) : 53 >= t ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN }

            function e(t, e) { for (var n = t.toString(16), r = e - n.length, i = "0"; r > 0; r >>>= 1, i += i) 1 & r && (n = i + n); return n }
            return function(n) { return n || (n = ""), e(t(32), 8) + n + e(t(16), 4) + n + e(16384 | t(12), 4) + n + e(32768 | t(14), 4) + n + e(t(48), 12) }
        }());
    C.prototype = {
        on: function(t, e) { var n = this; return ii(t) ? (n.events[t] || (n.events[t] = [])).push(e) : ai(t) && a(t, function(t) { n.on(t, e) }), n },
        off: function(t, e) {
            var n = arguments.length,
                r = this;
            if (0 === n) return r.events = {}, r;
            var i = r.events[t];
            if (!i) return r;
            if (1 === n) return r.events[t] = null, r;
            for (var a, o = i.length; o--;)
                if (a = i[o], a === e) { i.splice(o, 1); break }
            return r
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1),
                n = this.events[t];
            return n && a(n, function(t) { return t.apply(this, e) }), this
        },
        unshift: function(t, e) { var n = this; return (n.events[t] || (n.events[t] = [])).unshift(e), n }
    };
    var _i = "error",
        xi = "load",
        bi = "unload",
        Ei = "beforeunload",
        Si = "pagehide",
        Ti = "readystatechange",
        Ci = "complete",
        wi = "DOMContentLoaded",
        Ai = "on",
        Ri = "_ty_rum",
        Oi = "TINGYUN",
        Pi = 2,
        Di = "__ign",
        Ni = "__ty_asyncWrap__",
        Ii = "2",
        ki = "3",
        ji = "4",
        qi = "5",
        Hi = "1",
        Li = "2",
        Mi = "1",
        Ui = "2",
        Bi = "3",
        Fi = "4",
        zi = "5",
        Yi = "body",
        Gi = "reqBody",
        Ki = "TINGYUN_COOKIE_VALUE",
        Wi = "TINGYUN_DATA",
        Ji = "X-Tingyun",
        Vi = "X-Tingyun-Data",
        Xi = "TY_BASE64",
        $i = "__TINGYUN",
        Qi = "ty_",
        Zi = 64512,
        ta = 6e4,
        ea = "event",
        na = "ajax",
        ra = "timer",
        ia = "iframe",
        aa = "pf",
        oa = "crossPage",
        sa = "jsError",
        ca = "e",
        ua = "a",
        fa = "t",
        la = "i",
        da = "p",
        pa = "c",
        ha = "j",
        ma = "finish",
        va = "pending",
        ga = "finish",
        ya = "timeout",
        _a = "fetchStart",
        xa = "requestStart",
        ba = "responseStart",
        Ea = "responseEnd",
        Sa = "domContentLoadedEventStart",
        Ta = "domContentLoadedEventEnd",
        Ca = "domInteractive",
        wa = "domComplete",
        Aa = "loadEventStart",
        Ra = "loadEventEnd",
        Oa = "unloadEventStart",
        Pa = "unloadEventEnd",
        Da = "domainLookupStart",
        Na = "domainLookupEnd",
        Ia = "redirectStart",
        ka = "redirectEnd",
        ja = "connectStart",
        qa = "connectEnd",
        Ha = "secureConnectionStart",
        La = 5,
        Ma = 5,
        Ua = "__ty_crs_page_events",
        Ba = "window_open",
        Fa = "a_link",
        za = "form_submit",
        Ya = 3e3,
        Ga = "__ty_event_patch_tag",
        Ka = "__ty_event_patch_disable",
        Wa = "__ty_event_patch_id",
        Ja = "click",
        Va = "submit",
        Xa = "spe",
        $a = "addEventListener",
        Qa = "onProperty",
        Za = "inline",
        to = "IMG",
        eo = "A",
        no = "FORM",
        ro = 3,
        io = "__ty_ignore",
        ao = "__ty_xhr_hooked",
        oo = 200,
        so = "TY_USER_ID",
        co = "TY_SESSION_N_ID",
        uo = "TY_DEVICE_N_ID",
        fo = 18e5,
        lo = "|",
        po = "__TY_SPE_STORE",
        ho = 6e4,
        mo = 6e5,
        vo = "auto",
        go = "defined",
        yo = "route",
        _o = 500,
        xo = "success",
        bo = "fail",
        Eo = "TY_path_gather",
        So = "EagleEye-TraceID",
        To = "__TY_ELEMENT_CB",
        Co = "__TY_CB_COUNTER",
        wo = "__TY_IMAGE_LOAD_HOOK",
        Ao = 60,
        Ro = "__tagFirstPaintTime",
        Oo = 500,
        Po = 1e4,
        Do = "hashchange",
        No = "popstate",
        Io = "pushState",
        ko = "replaceState",
        jo = "vueRouter",
        qo = "normal",
        Ho = "script",
        Lo = "current",
        Mo = "crossPage",
        Uo = "visibilitychange",
        Bo = "URL",
        Fo = "QH",
        zo = "QB",
        Yo = "RH",
        Go = "RB",
        Ko = 200,
        Wo = "lifecycle",
        Jo = "action",
        Vo = "preInit",
        Xo = "init",
        $o = "ajax",
        Qo = "error",
        Zo = "ajax_send",
        ts = "ajax_finish",
        es = "error_trigger",
        ns = "paint",
        rs = "largest-contentful-paint",
        is = "first-paint",
        as = t.Error,
        os = t.document,
        ss = t.XMLHttpRequest,
        cs = t.location,
        us = t.navigator,
        fs = t.HTMLElement,
        ls = { isGather: !1 },
        ds = { fp_threshold: 2e3, fs_threshold: 4e3, dr_threshold: 4e3 },
        ps = { server: {}, appConf: { pvid: yi(), baseInfo: {} } },
        hs = ps.appConf,
        ms = ps.server,
        vs = { pvid: hs.pvid, ref: os.URL, referrer: os.referrer, v: "3.2.2", av: "3.2.2" },
        gs = fs ? function(t) { return t instanceof fs } : function(t) { t && "object" === _typeof(t) && 1 === t.nodeType && ii(t.nodeName) },
        ys = {},
        _s = { imageResources: [] },
        xs = {},
        bs = { context: null, uniqueId: 0, actions: [], opt_custom_param: {}, unAssignedEvents: [], cpActions: [], recordingCpActions: !1, cpParent: null, cpRemain: { ajax: 0, iframe: 0 }, tryEndCpActionsFailed: !1, globalAsyncStore: null, globalAjaxContext: null, pfSent: !1, ajaxUniqueId: 0, scope: null, performanceObserver: {}, enableLCPObserver: !0 },
        Es = [],
        Ss = [],
        Ts = {},
        Cs = "undefined" != typeof t.console,
        ws = 1,
        As = 2,
        Rs = 4,
        Os = 8,
        Ps = I.prototype;
    Ps.create = Ps.before = Ps.after = Ps.error = null;
    var Ds;
    B.prototype = {
        createContext: function() { return Object.create ? Object.create(this.active) : U(this.active) },
        get: function(t) { return this.active ? this.active[t] : void 0 },
        set: function(t, e) { return this.active ? this.active[t] = e : void 0 },
        enter: function(t) {
            if (!t) throw new as("context required!");
            this._set.push(this.active), this.active = t
        },
        exit: function(t) {
            if (!t) throw new as("context required!");
            if (t === this.active) return void(this.active = this._set.pop());
            var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : y(this._set, t);
            if (0 > e) throw new as("context not currently entered!");
            this._set.splice(e, 1)
        },
        bind: function(t, e) {
            e || (e = this.active ? this.active : this.createContext());
            var n = this;
            return function() {
                n.enter(e);
                try { return t.apply(this, arguments) } catch (r) {
                    try {
                        var i = "moduleId";
                        r[i] = e[i]
                    } catch (a) {}
                    throw r
                } finally { n.exit(e) }
            }
        }
    };
    var Ns, Is, ks, js, qs = !1,
        Hs = z();
    Is = function(e) { try { return t.localStorage.getItem(e) } catch (n) {} }, ks = function(e, n) { try { t.localStorage.setItem(e, n) } catch (r) {} return n }, js = function(e) { try { t.localStorage.removeItem(e) } catch (n) {} };
    var Ls = {},
        Ms = t.screen;
    Ms && (Ls.sh = Ms.height, Ls.sw = Ms.width);
    var Us, Bs, Fs = function() {
            var e = t.navigator.standalone,
                n = t.navigator.userAgent.toLowerCase(),
                r = /safari/.test(n),
                i = /iphone|ipod|ipad/.test(n);
            return i && !e && !r
        },
        zs = !/(MSIE [0-8].\d+)/.test(navigator.userAgent),
        Ys = G() ? x : _,
        Gs = "POST",
        Ks = W,
        Ws = !1;
    $.prototype.add = function(t) { this.queue.length >= this.size || (this.queue.push(t), this.running || (this.running = !0, this.run())) }, $.prototype.run = function() {
        var t = this,
            e = function() { t.queue.length > 0 ? t.run() : t.running = !1 };
        this.handler(this.queue.shift(), e)
    }, $.prototype.handler = function(t, e) { Us(t, S(function() { e() })) }, Us = t.XDomainRequest ? J : V, us.sendBeacon && (Ws = !0);
    var Js = Fs();
    Js && (Ks = Us = V, Ws = !1), Us || (Us = function(t, e) { e() }, Ws = !1), mi(t, Ei, function(t) { Ws && (Us = X) });
    var Vs, Xs = t.location.protocol,
        $s = "http:",
        Qs = {},
        Zs = t,
        tc = function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e = function(t) { for (var e = {}, n = 0, r = t.length; r > n; n++) e[t.charAt(n)] = n; return e }(t),
                n = String.fromCharCode,
                r = function(t) { if (t.length < 2) { var e = t.charCodeAt(0); return 128 > e ? t : 2048 > e ? n(192 | e >>> 6) + n(128 | 63 & e) : n(224 | e >>> 12 & 15) + n(128 | e >>> 6 & 63) + n(128 | 63 & e) } var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320); return n(240 | e >>> 18 & 7) + n(128 | e >>> 12 & 63) + n(128 | e >>> 6 & 63) + n(128 | 63 & e) },
                i = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                a = function(t) { return t.replace(i, r) },
                o = function(e) {
                    var n = [0, 2, 1][e.length % 3],
                        r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
                        i = [t.charAt(r >>> 18), t.charAt(r >>> 12 & 63), n >= 2 ? "=" : t.charAt(r >>> 6 & 63), n >= 1 ? "=" : t.charAt(63 & r)];
                    return i.join("")
                },
                s = Zs.btoa ? function(t) { return Zs.btoa(t) } : function(t) { return t.replace(/[\s\S]{1,3}/g, o) },
                c = function(t) { var e = "[object Uint8Array]" === Object.prototype.toString.call(t); return e ? t.toString("base64") : s(a(String(t))) },
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
                        i = r % 4,
                        a = (r > 0 ? e[t.charAt(0)] << 18 : 0) | (r > 1 ? e[t.charAt(1)] << 12 : 0) | (r > 2 ? e[t.charAt(2)] << 6 : 0) | (r > 3 ? e[t.charAt(3)] : 0),
                        o = [n(a >>> 16), n(a >>> 8 & 255), n(255 & a)];
                    return o.length -= [0, 0, 2, 1][i], o.join("")
                },
                m = Zs.atob ? function(t) { return Zs.atob(t) } : function(t) { return t.replace(/\S{1,4}/g, h) },
                v = function(t) { return m(String(t).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                g = function(t) { return p(m(t)) },
                y = function(t) { return g(String(t).replace(/[-_]/g, function(t) { return "-" == t ? "+" : "/" }).replace(/[^A-Za-z0-9\+\/]/g, "")) };
            return { atob: v, btoa: s, utob: a, encode: u, encodeURI: f, btou: p, decode: y }
        }(),
        ec = "extra";
    Mt.prototype.setContext = function(t, e) {
        var n = this;
        si(t) ? a(t, function(t, e) { n._mergeContext(e, t) }) : this._mergeContext(t, e)
    }, Mt.prototype.setExtraContext = function(t) { this.setContext(ec, t) }, Mt.prototype.getContext = function(t) { return null == t ? this._contexts : null == this._contexts ? null : this._contexts[t] }, Mt.prototype.getData = function() { return null == this._contexts ? null : { contexts: this._contexts } }, Mt.prototype._mergeContext = function(t, e) { null != t && si(e) && (this._contexts || (this._contexts = {}), this._contexts[t] = m(this._contexts[t] || {}, e)) }, Mt.prototype.toJSON = function() {};
    var nc = ["id", "key", "appKey", "token"],
        rc = Qt.prototype;
    rc.start = function() { if (!ms.key) return O("missing config, agent disabled!"), !1; var e = t[Oi]; return e ? (O("already loaded!"), !1) : this }, m(rc, C.prototype);
    var ic = new Qt;
    ic.on("send", function(t, e, n, r, i) { xt(), e = e || {}, e.__r = E(), i ? i && (i = dt(i, e)) : i = Yt(t, e), r = r || b, tt({ url: i, data: n, callback: r }) });
    var ac = hs.debuggable,
        oc = { start: e, e: {}, an: { count: 0 }, visible: [] },
        sc = function() { try { var e = yi(); return t.localStorage.setItem(e, e), t.localStorage.removeItem(e), !0 } catch (n) { return !1 } }(),
        cc = {};
    cc.localStorage = sc,
        function() {
            function e() {
                var e, f, l = os.documentElement;
                l.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = o = !0, t.getComputedStyle && (f = t.getComputedStyle(u), n = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, i = "4px" === (f || { width: "4px" }).width, u.style.marginRight = "50%", r = "4px" === (f || { marginRight: "4px" }).marginRight, e = u.appendChild(os.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", a = 0 === u.getClientRects().length, a && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === e[0].offsetHeight, a && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), l.removeChild(c)
            }
            var n, r, i, a, o, s, c = (os.documentElement, os.createElement("div")),
                u = os.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", cc.opacity = "0.5" === u.style.opacity, cc.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", cc.clearCloneStyle = "content-box" === u.style.backgroundClip, c = os.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), cc.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, cc.reliableHiddenOffsets = function() { return null == n && e(), a })
        }();
    var uc = 0,
        fc = 1,
        lc = 2,
        dc = 3,
        pc = 4,
        hc = 5,
        mc = 0,
        vc = 1,
        gc = 2,
        yc = 3,
        _c = 4,
        xc = 5,
        bc = 0,
        Ec = 1,
        Sc = 2,
        Tc = 3,
        Cc = [na, ra, ia];
    Re.prototype.end = function(t) {
        if (this.closed) return void(!this.cleared && ms.debug_context_closed && console.warn("Current context is already closed"));
        if (t && (this.actionCount.ajax += t.actionCount.ajax, this.actionCount.iframe += t.actionCount.iframe, we(this.items, t), this.updateRemain(-1, t.type)), this.isNoRemain() || this.isTimeout)
            if (this.e = E(), this.closed = !0, this.i && clearTimeout(this.i), this.e - this.s > ms.event_timeout && (this.isTimeout = !0), this.setState(this.isTimeout ? ya : ga), this.data && (this.data.state = this.state), this.parent) this.parent.end(this);
            else {
                var e;
                this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? e = this.composeTimeoutActionData() : this.isMeaningfulAction() && (e = this.composeActionData()), e && (this.eventData = e, !this.crossPage || e.type !== na && e.type !== ia ? this.speBinded ? null == this.spe ? (this.waitingSpeEnd = !0, this.waitingSpeTimer = w(function() { this.waitingSpeEnd = !1, this.send() }, Po)) : (this.buildEventDataWithSpe(), this.send()) : this.send() : (bs.cpRemain[e.type]--, R() && bs.tryEndCpActionsFailed && Se())), bs.context = null
            }
    }, Re.prototype.isNoRemain = function(t) { t = t || {}; var e = !0; return a(this.remain, function(n, r) { if (t.ignoreFields && g(t.ignoreFields, r) > -1) return !0; var i = n.current <= 0 && (t.testCurrent ? !0 : n.children <= 0); return i ? void 0 : (e = !1, !1) }), e }, Re.prototype.clear = function() { this.closed = !0, this.cleared = !0, this.i && clearTimeout(this.i) }, Re.prototype.isMeaningfulAction = function() { return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 }, Re.prototype.isRemainMeaningfulAction = function() { return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0 }, Re.prototype.timeout = function() { this.isTimeout = !0, this.setState(ya), this.end(null, !0) }, Re.prototype.setData = function(t) { this.data = t }, Re.prototype.composeActionData = function() { return { type: this.type, subType: this.subType, start: this.s, end: this.e, duration: this.e - this.s > 0 ? this.e - this.s : 0, data: m({}, this.data || {}, { items: (this.items || []).slice() }) } }, Re.prototype.composeTimeoutActionData = function() { return this.collectActionDataFromTop(), this.composeActionData() }, Re.prototype.collectActionDataFromTop = function(t) { null == t && (t = this), Ae(t.items, t.children) }, Re.prototype.collectCrossPageData = function(t) { if (t || (t = []), this.crossPage = !0, this.data && (this.data.crossPage = !0), t.unshift(this.data), this.parent) return this.parent.collectCrossPageData(t); var e = { type: this.type, subType: this.subType, start: this.s }; return (this.isNoRemain() || 1 === this.children.length) && this.clear(), { action: e, data: t, url: Yt("/action"), commonActionInfo: ye(), fromUrl: document.URL } }, Re.prototype.canEnd = function(t) { return !this.closed && this.isNoRemain(m({ testCurrent: !0 }, t)) }, Re.prototype.updateRemain = function(t, e) {
        if (this.remain[e]) {
            e || (e = na);
            var n = t || 0;
            this.remain[e].current = this.remain[e].current + n;
            for (var r = this.parent; r;) r.remain[e].children = r.remain[e].children + n, r = r.parent
        }
    }, Re.prototype.setState = function(t) { return this.stateChanged ? !1 : (this.state = t, this.stateChanged = !0, !0) }, Re.prototype.current = function() { return bs.context }, Re.prototype.buildEventDataWithSpe = function() {
        if (this.spe && this.eventData && this.eventData.data) {
            var t = this.spe.xhrs;
            this.spe.hasAjax = t && t.length > 0, delete this.spe.xhrs, this.eventData.data.spe = this.spe
        }
    }, Re.prototype.setSpe = function(t) { return t ? (this.spe = t, this.waitingSpeEnd && (this.buildEventDataWithSpe(), this.send(), clearTimeout(this.waitingSpeTimer)), this.sent) : void 0 }, Re.prototype.send = function() {
        if (!this.sent) {
            var t = {};
            null != this.spe && this.speBinded && (t.query = { ss: 1 }, this.spe.type === yo && (t.query.rs = 1)), xe(this.eventData, t), this.sent = !0
        }
    }, Re.prototype.removeFromParent = function() {
        if (this.parent) {
            var t = this.parent.children.indexOf(this);
            t > -1 && this.parent.children.splice(t, 1);
            var e = this.parent.items.indexOf(this.data);
            e > -1 && this.parent.items.splice(e, 1), this.parent.updateRemain(-1, this.type), this.parent.end()
        }
    }, Re.createEvent = function(t, e, n, r, i, a) { return new Re(t, e, n || "event", r || null, i, a) }, Re.buildImmediateAction = function(t, e, n, r) { r = r || {}; var i = m({ type: t, subType: e, state: ma, data: n }, r.actionOptions || {}); return i.data && (i.data.state = i.state), r.notSend || xe(i, r.sendOptions), i }, Re.getEventRootContext = function(t) {
        if (!t) return null;
        for (; t;) {
            if (t.type === ea && null == t.parent) return t;
            t = t.parent
        }
        return null
    }, Re.prototype.toJSON = function() {};
    var wc, Ac = [Ja, Va],
        Rc = 1,
        Oc = 2;
    wc = String.prototype.trim ? String.prototype.trim : function() { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") }, Ue.prototype.put = function(t, e) {
        if (this._size >= this._capacity) try {
            var n = this._cacheKeys.shift();
            this._size--, this._cache[n] = null, delete this._cache[n]
        } catch (r) {}
        this._cache[t] = e, this._cacheKeys.push(t), this._size++
    }, Ue.prototype.get = function(t) { return this._cache[t] };
    var Pc = [Ja, Va],
        Dc = oo,
        Nc = Ko,
        Ic = [],
        kc = new Ue({ capacity: 20 }),
        jc = null;
    Be.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    var qc = {},
        Hc = {},
        Lc = rn.prototype;
    Lc.fail = Lc.end = Lc.store = b;
    var Mc = an.prototype;
    Mc.end = Mc.finish = Mc.fail = null, Mc.send = function(t) {
            this.sent = !0;
            var e = this.getEventData(t),
                n = this.timeout || mo;
            (ms.collect_hash_no_ajax || !(e.debugInfo && e.debugInfo.api === Do || e.type === yo && e.key.indexOf("#") > -1) || 0 !== e.xhrs.length) && (e.duration >= n || nn(e))
        }, Mc.getEventData = function(t) {
            var e = this,
                n = t.event && t.event.xhrs || [];
            a(n, function(t) { t.startSpeOffset = t.start - e.s });
            var r = { key: e.key, start: e.s, duration: e.e - e.s, status: e.status, type: e.type, xhrs: n };
            return this.debugInfo && (r.debugInfo = this.debugInfo), r
        }, Mc.refreshEventAndStore = function(t) {
            this.finish();
            var e = this.getEventData(t);
            ks(po, ri(e))
        },
        function() {
            if (hs.debuggable) {
                var t, e, n = "visibilitychange";
                ui(os.hidden) ? ui(os.msHidden) ? ui(os.webkitHidden) || (t = "webkitHidden", e = "webkit" + n) : (t = "msHidden", e = "ms" + n) : (t = "hidden", e = n), ui(os.addEventListener) || ui(os[t]) || mi(os, e, te(function() { oc.visible.push([os[t], E()]) }))
            }
        }();
    var Uc = null,
        Bc = new C,
        Fc = { lifecycle: ["preInit", "init"], action: ["ajax", "error"] },
        zc = "default",
        Yc = {},
        Gc = 1e4,
        Kc = 0,
        Wc = "report",
        Jc = "error";
    En.prototype = { add: function(t, e) { this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++) }, get: function(t) { return this.c[t] }, reset: function() { this.c = {}, this.len = 0 } };
    var Vc = new En(100),
        Xc = {},
        $c = {};
    Cn.prototype = {
        increase: function() { this.recordFileName(), this.count++ },
        recordFileName: function() {
            var t = this.filename || "_";
            this.fep += $c[t] ? 0 : 1, $c[t] = !0
        },
        fix: function() {
            var t = this,
                e = t.stack;
            if (e && ii(e)) {
                e = e.split(/\n/);
                var n = [];
                a(e, function(t, e) {-1 == t.indexOf(Ni) && n.push(t) }), t.stack = n.join("\n")
            }
        },
        getErrorOverview: function() { var t = this; return { o: t.time, e: t.msg, l: t.lineno, c: t.colno, r: t.filename, ec: t.count, s: t.stack, m: t.module, ep: t.ep, fep: t.fep, tr: t.trigger } },
        toObject: function() {
            var t = this.getErrorOverview(),
                e = {};
            return a(this.trace, function(t, n) { e[n] = zt({ time: t.time }, t.scope) }), t.trace = e, t
        },
        initTraceInstance: function() { var t = yi(); return this.trace[t] = { time: E(), scope: new Mt }, t },
        triggerActionHook: function(t) { bn({ type: Jo, name: Qo, args: { target: this.error, actionData: m(this.getErrorOverview(), { id: t }) }, scope: this.trace[t].scope }) }
    };
    var Qc = { mainVersion: ro, version: "3.2.2", key: ms.key, pvid: hs.pvid, DIAGNOSE_HREF: Pi, diagnose: N, createEvent: un, logFirstScreen: Nn, addExcludedDomain: In, globalStart: e, currentAgent: ic, mark: dn, wrapVueRouter: ln, endSession: gt, setUid: Tt, createAutoEvent: un, endStoreEvent: cn, captureException: Pn, setDid: Ct, addHook: yn, addLifeCycleHook: _n, addActionHook: xn, setContext: Bt, setExtraContext: Ft, stopLCPObserver: ge },
        Zc = 0,
        tu = "{0} not support",
        eu = 0,
        nu = /(msie|trident)/i.test(us.userAgent),
        ru = os.createElement("a"),
        iu = Gn(cs.href),
        au = "onload",
        ou = 0,
        su = { error: 990, abort: 905, timeout: 903 },
        cu = Ai + Ti,
        uu = 0,
        fu = La,
        lu = {},
        du = 0,
        pu = "load",
        hu = "reload",
        mu = 0,
        vu = null,
        gu = [Io, ko],
        yu = ei();
    return yu
}(window, +new Date);
window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { "event_timeout": 60000, "dr_threshold": 600, "opt_custom_param_rule": [], "apm_headers": ["ceshi2", "ceshi1", "wjn_test"], "cross_page_delay": 3000, "router_enable": true, "fp_threshold": 400, "token": "a45ef4f563224fc58cdcc4c71499c038", "beacon": "wkbrst1.tingyun.com", "trace_threshold": 2002, "x_server_switch": true, "ignore_err": false, "id": "fui3qc_SnwM", "key": "n123NrGYrts", "fs_threshold": 800 } }); /*TY_AGENT_END*/