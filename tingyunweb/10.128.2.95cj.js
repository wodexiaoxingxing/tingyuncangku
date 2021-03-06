/*AGENT_VERSION=3.2.2*/
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
                if (t instanceof Array) { var e = ra.call(t); return i(e, function(t, n) { e[n] = c(t) }), "[" + e.join(",") + "]" }
                if (t instanceof Date) return t.getTime().toString();
                var n = "";
                return i(t, function(t, e) { Zr(t) || (n += c(e) + ":" + c(t) + ",") }), n && (n = n.substr(0, n.length - 1)), "{" + n + "}";
            case "string":
                return aa + t.replace(ia, "\\$1").replace(oa, "\\n") + aa;
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

    function u(t) { return t && $r(t) ? Vr(t) : t }

    function f(t, e, n, r) { return t.addEventListener(e, n, r) }

    function l(t, e, n) { return t.attachEvent("on" + e, n) }

    function d(t, e) { return Function.prototype.apply.apply(t, e) }

    function p(t, e) { return function() { t.apply(e, arguments) } }

    function h(t) { return ua ? ua(t) : t }

    function m(t) { var e = arguments.length; if (2 > e || !t) return t; var n = ra.call(arguments, 1); return i(n, function(e) { i(e, function(e, n) { t[n] = e }) }), t }

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

    function x(t) { return setTimeout(t, 0) }

    function _(t) { return setTimeout(t, 0, { __ty_ignore: !0 }) }

    function b() {}

    function S() { var t = window && window.performance; return t && t.timing && t.timing.navigationStart && t.now ? Math.round(t.timing.navigationStart + t.now()) : +new Date }

    function E(t) {
        return function() {
            if (null !== t) {
                var e = t;
                t = null, e.apply(this, arguments)
            }
        }
    }

    function T(e) { return e ? $r(e) ? e.length : t.ArrayBuffer && e instanceof ArrayBuffer ? e.byteLength : t.Blob && e instanceof Blob ? e.size : e.length ? e.length : 0 : 0 }

    function C() { this.events = {} }

    function w(t, e) { return setTimeout(t, e || 0, { __ty_ignore: !0 }) }

    function A(t, e) { fs[t] = e }

    function R() { return 0 === ls.cpRemain.ajax && 0 === ls.cpRemain.iframe }

    function D(t) { N(t, ds) }

    function P(t) { N(t, ps) }

    function N(t, e) { var n = "ok"; return t ? void e.push(t) : n = e.length ? e.join("\n") : n }

    function I(t) {
        function e(t, e, r) {
            var a = r || "log",
                i = n[t] || (n[t] = {});
            i[a] = i[a] || "", i[a] += e
        }
        var n = {},
            r = D();
        if (e("Status", r, "ok" !== r), e("Debug", P()), i(hs, function(t, n) { e("Timeline", n + ": " + t.toString()) }), !t && ms) console.log("[TingYun Agent Diagnosis]\n"), i(n, function(t, e) {
            var n = console[e];
            i(n, function(t, e) { console[e](t) })
        });
        else {
            if (t !== Ea) return Xr(n);
            Qo.href = Qo.href + "#" + Xr(n)
        }
    }

    function k(t, e) { this.flags = 0, Zr(t.create) && (this.create = t.create, this.flags |= vs), Zr(t.before) && (this.before = t.before, this.flags |= gs), Zr(t.after) && (this.after = t.after, this.flags |= ys), Zr(t.error) && (this.error = t.error, this.flags |= xs), this.data = e }

    function O(t, e) { if (!bs) { if (!ta(t) || !t) throw new TypeError("callbacks arguments must be an object"); return bs = new k(t, e) } }

    function j(t) {
        var e = bs.data;
        if (0 !== (bs.flags & vs)) {
            var n = bs.create(bs.data);
            void 0 !== n && (e = n)
        }
        return function r() {
            0 !== (bs.flags & gs) && bs.before(this, e);
            var n = r;
            n._ && (n._ = 1);
            try { var a = t.apply(this, arguments) } catch (i) { throw 0 !== (bs.flags & xs) && bs.error(e, i), i }
            return 0 !== (bs.flags & ys) && bs.after(this, e), a
        }
    }

    function q(t) { return function() { var e; try { e = t.apply(this, arguments) } finally { ls.context = null } return e } }

    function H(t) { return !bs || bs.flags <= 0 ? t : j(t) }

    function L(t) { return q(H(t)) }

    function M(t, e, n) { if (t && n && Zr(n)) { var r = t[e]; if (!r || !r._wrapped) { var a = n(r, e); return a && (a._wrapped = !0), t[e] = a, a } } }

    function B(t) {
        function e() {}
        return e.prototype = t, new e
    }

    function U() { this.id = null, this.active = null, this._set = [] }

    function F() {
        var t = new U;
        return t.id = O({
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

    function z() { return ws || (Ss = F(), ws = !0), Ss }

    function Y(t) { try { return u(t) } catch (e) { D(e && e.message) } return null }

    function G() { return ks }

    function W(t) { return $r(t) || (t = Xr(t)), t }

    function J(t, e) {
        e = e || b;
        var n = new Image;
        ca(n, ga, function() {
            ("loaded" == n.readyState || 4 == n.readyState) && e(null)
        }, !1), ca(n, pa, function() { e(null) }, !1), ca(n, da, function() { e(da) }, !1), n.src = t
    }

    function K(t, e) {
        var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = new XDomainRequest;
        i[Ta] = !0, i.open(js, n), i.onload = function() { a(null, i.responseText), e() }, i.onerror = function(t) { a(t), e() }, Os(function() { i.send(W(r)) })
    }

    function V(t, e) {
        var n = t.url,
            r = t.data,
            a = t.header,
            i = t.callback,
            o = E(i),
            s = new $o;
        s[Ta] = !0, s.overrideMimeType && s.overrideMimeType("text/html"), s.onreadystatechange = function() { 4 == s.readyState && 200 == s.status && (o(null, s.responseText), e()) }, s.onerror = function() { o(), e() };
        try {
            s.open(js, n, !0);
            for (var c in a) s.setRequestHeader(c, a[c]);
            s.send(W(r))
        } catch (u) { e() }
    }

    function X(t, e) {
        var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = Zo.sendBeacon(n, W(r));
        i && (a && a(), e())
    }

    function $(t) { this.size = t || 100, this.queue = [], this.running = !1 }

    function Q() { qs = Ps = V, Hs = !1 }

    function Z(t) { Ns = new $(t) }

    function tt(t) { Ns.add(t) }

    function et(t) {
        var e = t || new Date,
            n = e.getFullYear() + "-",
            r = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
            a = e.getDate() + " ";
        return n + r + a
    }

    function nt(t, e, n) {
        if (null == t[e] || Qr(t[e])) Qr(t[e]) ? t[e].push(n) : t[e] = n;
        else {
            var r = t[e];
            t[e] = [r], t[e].push(n)
        }
    }

    function rt(t) { return t.send_protocol ? t.send_protocol : Bs !== Us && /^https/i.test(t && t.protocol || Bs) ? "https:" : Us }

    function at(t) { if (!t || !$r(t)) return ""; var e, n = t.indexOf("?"); return n >= 0 && (e = t.substring(n + 1)), e }

    function it(t) {
        var e = at(t),
            n = ut(e);
        return { queryObj: n, queryString: e }
    }

    function ot(t) { var e = at(t); return ut(e) }

    function st(t) { return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? ot(t) : {} }

    function ct(t) { var e = {}; return t = t || "", $r(t) && t ? e = ut(t) : e }

    function ut(t) {
        var e = {};
        return t && i(t.split("&"), function(t) {
            var n = t.split("="),
                r = ft(n[0]),
                a = ft(n[1]);
            if ($r(a)) {
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

    function pt(t, e, n) { var r = null; return t && e && (r = Ms + "//" + t + e, n && (r += "?" + lt(n))), r }

    function ht(t) { Ms = rt(t) }

    function mt() { var t = Es(to); return t ? t.split(ro) : null }

    function vt(t) { t && 3 === t.length && Ts(to, t.join(ro)) }

    function gt() {
        var t = yt();
        xt(t)
    }

    function yt() {
        var t = S(),
            e = [la(), t, t];
        return vt(e), e
    }

    function xt(t) { t[0] && (os.sid = t[0]), t[1] && (os.__s = +t[1]) }

    function _t() {
        var t = S(),
            e = mt();
        bt(e) ? gt() : (e[2] = t, vt(e))
    }

    function bt(t) { return !t || 3 !== t.length || S() - +t[2] > no }

    function St() { var t = Es(eo); return t ? t : Ts(eo, la()) }

    function Et() { return Es(Zi) }

    function Tt(t) {
        if (null != t) {
            var e = Et();
            null != e && t !== e && gt(), Ts(Zi, t)
        }
    }

    function Ct(t) { null != t && Ts(eo, t) }

    function wt() {
        var t = { did: St() },
            e = Et();
        return e && (t.uid = e), t
    }

    function At(t, e) { var n; return t && (n = !0, i(t, function() { return n = !1 }, e)), !!n }

    function Rt(t) {
        var e = {},
            n = {},
            r = {},
            a = {},
            i = it(t),
            o = i.queryObj,
            s = i.queryString;
        return o && (e = Dt(o, as.bizIdsRules[wa], as.bizIdsRules[Da]), n = Dt(o, as.customParamsRules[wa], as.customParamsRules[Da]), r = Dt(o, as.requestParamKeys[Pa], as.requestParamKeys[Na]), a[Ia] = kt(o, as.optCustomParamRules[Ia], !0)), { bizIdParams: e, params: n, requestParams: r, optCustomParams: It(a), operaAllParam: s }
    }

    function Dt(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, function(e) {
            var n = t[e];
            null != n && nt(r, e, n)
        }), t && n && n.length && n.length > 0 && i(n, function(e) {
            var n = Pt(La, e),
                a = n(t);
            null != a && nt(r, e, a)
        }), r
    }

    function Pt(t, e) {
        var n = t + "." + e;
        if (Fs[n]) return Fs[n];
        var r = (e || "").split("."),
            a = "";
        e && 0 !== e.indexOf("[") && (a = ".");
        var o = t;
        i(r, function(t, e) { 0 === e && (o += a), o += t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? "['" + t + "']" : (e > 0 ? "." : "") + t });
        var s;
        try { s = new Function(t, "try{return " + o + ";}catch(e){}return null;") } catch (c) { s = b }
        return Fs[n] = s, s
    }

    function Nt(t) { return t += "", t && t.substr(0, 128) || "" }

    function It(t) { var e = {}; return i(t, function(t, n) { At(t) || (e[n] = t) }), e }

    function kt(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, function(e) {
            var a = t[e];
            if (null != a) nt(r, e, a);
            else if (n) {
                var i = Pt(La, e);
                a = i(t), null != a && nt(r, e, a)
            }
        }), r
    }

    function Ot(t, e, n) { n || (n = e && window[e] || Xo.cookie || ""); var r = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return r ? r[3] : null }

    function jt(t, e, n, r, a) {
        var i = t + "=" + e;
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 1e3 * n), i += ";expires=" + o.toGMTString()
        }
        r && (i += ";path=" + r), (a || Xo).cookie = i
    }

    function qt(t) {
        var e, n;
        if (t)
            if (0 === t.indexOf(za)) { var r = t.substring(za.length); try { n = Ys.decode(r), e = Y(n) } catch (a) {} } else { try { n = decodeURIComponent(t), e = Y(n) } catch (a) {} if (!e) try { n = decodeURIComponent(n), e = Y(n) } catch (a) { D(a && a.message) } }
        return e
    }

    function Ht(t) { var e = {}; return t && ta(t) && (e.s_id = t.id, e.s_tname = t.tname, e.s_tid = t.tid, e.s_rid = t.rid, e.s_duration = t.duration, "user" in t && (e.s_user = t.user, Tt(t.user)), "bid" in t && (e.s_bid = Nt(t.bid)), "ber" in t && (e.s_ber = t.ber), "isError" in t && (e.s_isError = t.isError)), e }

    function Lt(t) {
        if (!t.agent) {
            var e = window._ty_rum;
            if (e && e.agent) t.agent = e.agent;
            else {
                var n = Ot(Ba, Ma);
                n && (t.agent = qt(n), jt(Ba, "", -1e3, "/"))
            }
        }
        return t.agent
    }

    function Mt(t) { t = t || {}, this._contexts = t.contexts || null, this._name = t.name }

    function Bt() { ls.scope || (ls.scope = new Mt({ name: "ROOT" })) }

    function Ut() { Bt(), ls.scope.setContext.apply(ls.scope, arguments) }

    function Ft() { Bt(), ls.scope.setExtraContext.apply(ls.scope, arguments) }

    function zt(t, e, n) { if (t && e) { n || (n = "scope"); var r = e ? e.getData() : null; return r && (t[n] = r), t } }

    function Yt(t, e) { return pt(is.beacon, t, Gt(e)) }

    function Gt(t) { var e = wt(); return m({}, os, e, t || {}, as.baseInfo, Rs || {}) }

    function Wt(t) { return t in is ? is[t] : !0 }

    function Jt(t) { var e = {}; return i(t, function(t) { t && g(e[t.type] || [], t.key) < 0 && (e[t.type] = e[t.type] || []).push(t.key) }), e }

    function Kt(t) {
        var e = {};
        if (t) {
            var n = [ko, Oo, jo, qo, Ho];
            i(t.split(""), function(t, r) { e[n[r]] = "1" === t })
        }
        return e
    }

    function Vt(e) {
        var n = {};
        if (Zr(e)) {
            var r = {};
            e(r), n = r.server
        } else n = e;
        Bt(), t[Ya] || (t[Ya] = { hook: {} }), m(rs.server, ns, n || {}, t[Ya].config || {}), m(rs.appConf, { bizIdsRules: Jt(is.bizId_rule), customParamsRules: Jt(is.opt_param_rule), requestParamKeys: Jt(is.request_param_keys), corsDomains: is.cors_domains || [], optCustomParamRules: Jt(is.opt_custom_param_rule), ignoreNoFilePropError: Wt("ignore_err"), debuggable: Wt("debug"), sessionTimeout: is.session_timeout || no, collectAllParam: Kt(is.collect_all_param) }), i(Ws, function(e) { is[e] && (as.baseInfo[e] = is[e], t[Sa][e] = is[e]) }), m(os, wt());
        var a = mt();
        if (bt(a) && (a = yt()), xt(a), rs.server.event_timeout || (rs.server.event_timeout = Ja), is.appKey && Q(), is.apm_arms) {
            is.apm_headers || (is.apm_headers = []);
            var o = G() ? is.apm_headers.indexOf(mo) < 0 : g(is.apm_headers, mo) < 0;
            o && is.apm_headers.push(mo)
        }
        ht(is);
        var s = Lt(rs);
        as.pageServerData = Ht(s), Z(is.req_capacity)
    }

    function Xt(e) {
        try {
            var n;
            if (!e || !e.data || 0 !== e.data.indexOf("_TINGYUN")) return;
            if (n = e.data.replace("_TINGYUN", ""), Y(n)) {
                var r = Y(n);
                if ("gather" === r.type && "APM" === r.fromJS && !t[ho]) {
                    es.isGather = !0;
                    var a = e.origin,
                        i = Xo.getElementsByTagName("head")[0],
                        o = Xo.createElement("script");
                    o.type = "text/javascript", o.src = a + "/assets/lib/gather/path-gather.min.js?version=" + et(new Date), i.appendChild(o)
                }
            }
        } catch (s) {}
    }

    function $t() {
        var t = this;
        t.xhrs = {}, t.errs = [], C.call(t)
    }

    function Qt() { return zt({ optCustomParam: ls.opt_custom_param }, ls.scope) }

    function Zt(t) { return t || (t = Qt()), "".concat(oi).concat(Xr(t)) }

    function te(t, e) {
        if (t) {
            e = e || {};
            var n = ee(t);
            if (n) try {
                var r = n + Xr(t),
                    a = [r];
                a.unshift(e.commonActionInfoMessage ? e.commonActionInfoMessage : Zt());
                var i = a.join("\n"),
                    o = { ps: e.crossPage || n === ii ? 1 : 0 };
                m(o, e.query || {}), Ks.emit("send", "/action", o, i, function() { t.type === Qa && (Ks.xhrs = Ks.errs = null), e.cb && e.cb() }, e.url)
            } catch (s) {}
        }
    }

    function ee(t) { var e = ""; return t.type === Ka ? e = ei : t.type === Va ? e = ni : t.type === $a ? e = ai : t.type === Xa ? e = ri : t.type === Qa ? e = ii : t.type === ti && (e = si), e }

    function ne(t, e) {
        for (var n = S(), r = e.length - 1; r >= 0; r--) {
            var a = e[r];
            a.type === Ka || a.end || (a.end = n), e[r - 1] && (e[r - 1].items = [a]);
            var i = void 0;
            i = a.start && a.end && a.end - a.start > is.event_timeout ? li : a.type === Ka ? e[r + 1] && e[r + 1].state || fi : fi, a.state = i
        }
        t.data = e[0], t.end = n
    }

    function re(t) {
        var e = ls.cpParent;
        if (e) {
            if (t && (ls.recordingCpActions = !1), !R()) return void(ls.tryEndCpActionsFailed = !0);
            var n = e.action,
                r = e.data,
                a = e.commonActionInfo,
                o = e.url;
            if (n && r && 0 !== r.length) {
                var s = [];
                i(ls.cpActions, function(t) { t.data && (t.data.crossPage = !0), s.push(t.data) }), r[r.length - 1].items = s, ne(n, r), n.data && (n.data.range = No);
                var c = Zt(m(a || {}, zt({ pageParam: Gt(), cpOptCustomParam: ls.opt_custom_param }, ls.scope, "cpScope")));
                te(n, { commonActionInfoMessage: c, url: o, crossPage: !0 })
            }
        }
    }

    function ae(t) {
        if (t) {
            var e = t.action,
                n = t.data;
            e && n && 0 !== n.length && (ne(e, n), te(e))
        }
    }

    function ie() { var t = {}; return i(Vs, function(e) { t[e] = { current: 0, children: 0 } }), t }

    function oe(t, e) { i(t, function(t) { t.cid === e.id && (t.items = e.items || []) }) }

    function se(t, e) { i(t, function(t) { i(e, function(e) { t.cid === e.id && (t.state || (t.state = e.state), t.items = e.items || []) }) }), i(e, function(t) { se(t.items, t.children) }) }

    function ce(t, e, n, r, a, i) {
        i = i || {}, this.id = ++ls.uniqueId, this.parent = t || null, this.children = [], this.name = e || "", this.type = n || Ka, this.subType = this.type === Ka ? r || "click" : r, this.items = [], this.remain = ie(), this.s = i.s || S(), this.e = null, this.data = a, this.state = ui, this.crossPage = i.crossPage || !1;
        var o = this;
        null == this.parent && (this.i = w(function() { o.timeout() }, is.event_timeout)), this.closed = !1, this.isTimeout = !1, this.cleared = !1, this.stateChanged = !1, this.actionCount = { ajax: n === Va ? 1 : 0, iframe: n === $a ? 1 : 0 }, this.sent = !1, this.speBinded = !1, this.spe = null, this.waitingSpeEnd = !1, this.waitingSpeTimer = null, null != this.parent && this.parent.children.push(this), this.eventData = null
    }

    function ue(e, n) { return function(r) { if (t[Ya].hook && t[Ya].hook.eventCb && ye(r)) { var a = { originalCallback: e, eventHandlerType: n }; return t[Ya].hook.eventCb.call(this, arguments, a) } return e.apply(this, arguments) } }

    function fe(t, e, n) { return n === Qs ? ue(t, e) : (t.handleEvent = ue(t.handleEvent, e), t) }

    function le(t) { return Zr(t) }

    function de(t) { return ta(t) && Zr(t.handleEvent) }

    function pe(t) { var e; return le(t) ? e = Qs : de(t) && (e = Zs), { isValid: t && e, listenerType: e } }

    function he(t) {
        return function() {
            var e = arguments[0],
                n = arguments[1],
                r = arguments[2],
                a = !0;
            r && ta(r) && r[Mi] && (a = !1);
            var i = pe(n),
                o = i.isValid,
                s = i.listenerType;
            if (a && $s.indexOf(e) > -1 && o) {
                var c;
                if (n[vo] && n[vo][this]) c = n[vo][this];
                else {
                    var u = fe(n, zi, s);
                    s === Qs && (n[vo] || (n[vo] = {}, n[vo][go] = 0), n[vo][this] = { listener: u, options: arguments[2] }, n[vo][go]++, c = n[vo][this])
                }
                c && (c.listener && (arguments[1] = c.listener), c.options && (arguments[2] = c.options))
            }
            return t && t.apply(this, arguments)
        }
    }

    function me(t) {
        return function(e, n) {
            var r;
            try { r = t && t.apply(this, arguments) } finally {
                try {
                    if (n && $s.indexOf(e) > -1) {
                        var a = n[vo];
                        a && a[this] && a[this].listener && (null != a[this].options ? this.removeEventListener(e, a[this].listener, a[this].options) : this.removeEventListener(e, a[this].listener), a[this] = null, a[go]--, a[go] <= 0 && (n[vo] = null, delete n[vo]))
                    }
                } catch (i) {}
            }
            return r
        }
    }

    function ve() { t.EventTarget && (M(t.EventTarget.prototype, "addEventListener", function(t) { return he(t) }), M(t.EventTarget.prototype, "removeEventListener", function(t) { return me(t) })) }

    function ge() {
        Object.getOwnPropertyDescriptor && Object.defineProperty && $s.forEach(function(e) {
            var n = "on" + e,
                r = Object.getOwnPropertyDescriptor(t.HTMLElement.prototype, n),
                a = r.get,
                i = r.set;
            Object.defineProperty(t.HTMLElement.prototype, n, {
                get: function() { return a.apply(this, arguments) },
                set: function() {
                    var t = arguments[0];
                    t && (arguments[0] = fe(t, Yi, Qs)), i && i.apply(this, arguments)
                },
                configurable: !0,
                enumerable: !0
            })
        })
    }

    function ye(e) { return e && e.target instanceof t.HTMLElement && e.currentTarget instanceof t.HTMLElement }

    function xe(t) { return Xs.call(t) }

    function _e(t) { return !!t.match(_e.regex) }

    function be(t) { return t && t.substr(0, 256) || "" }

    function Se(t) {
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
                    $r(s) && (s = xe(s));
                    var c = s ? s.split(" ").filter(function(t) { return xe(t) }).map(function(t) { return ".".concat(t) }).join("") : "";
                    e.unshift("".concat(i).concat(o).concat(c)), t = n, n = t.parentNode
                }; n;) r();
            return "".concat(e.join(" > ")).toLowerCase()
        } catch (a) {}
    }

    function Ee(t) { return !t.isTrusted || null != t.pointerType && !t.pointerType }

    function Te(t, e, n) {
        var r = t.target,
            a = r.nodeName,
            i = r.id,
            o = r.className,
            s = r.title,
            c = r.value,
            u = r.innerText,
            f = a + i,
            l = Ee(t),
            d = { type: Ka, id: i, nodeName: a, className: o, title: s, value: c, text: a === Ki ? "" : be(u), path: Se(t.target), trigger: l ? Do : Ro, range: Po },
            p = t[Mo];
        if (p || (p = la(), t[Mo] = p), d.eventId = p, l) {
            var h = t.timeStamp && S();
            ac && Math.abs(h - ac.timestamp) <= nc && (d.refId = ac.eventId)
        } else ac = { timestamp: t.timeStamp && S(), eventId: d.eventId };
        if (Wi === a) {
            var m = t.target.getAttribute("src");
            m && !_e(m) && (d.src = m)
        }
        if (Ji === a) {
            var v = t.target.getAttribute("href");
            v && (d.href = v)
        }
        return d.eventHandlerType = e, ce.createEvent(null, f, Ka, t.type || Bi, d, n)
    }

    function Ce(t, e) { ls.context = Te(t, e) }

    function we() {
        var t = ls.context;
        t && t.canEnd() && t.end(), ls.context = null
    }

    function Ae(t, e) {
        var n = e.originalCallback,
            r = e.eventHandlerType,
            a = t[0],
            i = !a || !a.target || a[Li] || !(tc.indexOf(a.type) > -1);
        if (!i) try { Ce.call(this, a, r) } catch (o) {}
        var s;
        try { s = n.apply(this, t) } finally { if (!i) try { ls.context && !ls.context.canEnd() && (a[Li] = !0), we.apply(this) } catch (o) {} }
        return s
    }

    function Re() { i(tc, function(t) { document.addEventListener(t, function(t) { rc.length >= Ii && rc.shift(), rc.push(t) }, _defineProperty({ capture: !0 }, Mi, !0)) }) }

    function De(t) { try { return 13 === (t + "").split(".")[0].length } catch (e) {} return !1 }

    function Pe(n) {
        var r = t.performance && t.performance.timing ? t.performance.timing.navigationStart : e,
            a = n.timeStamp;
        return a = a ? De(a) ? a : Math.round(n.timeStamp + r) : S()
    }

    function Ne(t) {
        var e = rc.filter(function(t) { return !t[Li] }),
            n = e[e.length - 1];
        if (n) { var r = Pe(n); if (Math.abs(r - t) < ec) return Te(n, Gi, { s: r }) }
    }

    function Ie(t) { var e = []; try { e = rc.filter(function(e) { return !e[Li] && e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName }) } catch (n) {} if (e.length > 0) { var r = e[0]; return Te(r, Gi, { s: Pe(r) }) } }

    function ke() { is.inline_event_associate_threshold && (ec = is.inline_event_associate_threshold), is.script_event_associate_threshold && (nc = is.script_event_associate_threshold), t[Ya].hook && (t[Ya].hook.eventCb = Ae), !t[Ya].listenerHooked && t.HTMLElement && (ve(), ge()), is.disable_hook_inline_event || Re() }

    function Oe(t) {
        var e = t,
            n = t.xhrs;
        e.hasAjax = n && n.length > 0, delete e.xhrs;
        var r = { ss: 1 };
        t.type === uo && (r.rs = 1), ce.buildImmediateAction(Ka, Fi, { type: Ka, items: n, spe: e }, { sendOptions: { query: r } })
    }

    function je(t) {
        if (oc[t.key]) {
            var e = oc[t.key];
            if (delete oc[t.key], e.speBinded) {
                var n = e.setSpe(t);
                n || (!e.isMeaningfulAction() && e.isNoRemain() ? Oe(t) : w(function() { e.sent || Oe(t) }, So))
            }
        } else Oe(t)
    }

    function qe(t) { ms && console.warn(t || "Event key required!") }

    function He(t) {
        t = t || {}, this.key = t.key, this.type = t.type || co;
        var e = t.timeout || oo;
        this.timeout = e, this.status = 1, this.remain = 0, this.xhrs = [], this.s = S(), this.e = null, this.called = this.sent = this.stored = !1, t.debugInfo && (this.debugInfo = t.debugInfo)
    }

    function Le(t) {
        var e = null;
        e = ls.context ? ce.getEventRootContext(ls.context) : Ne(t.s), null != e && (oc[t.key] = e, e.speBinded = !0)
    }

    function Me(t) {
        t = t || {};
        var e = t.key;
        if (!e) return new qe;
        if (ic[e]) return new qe("event " + e + " is executing");
        ic[e] = !0;
        var n = As.createContext();
        As.enter(n);
        var r = new He(t);
        return r._end = function() {
            var t = this;
            t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n)
        }, r.end = function(t, e) { var r = this; return r.called ? void(ms && console.warn("Event " + this.key + "has ended or failed!")) : (r.called = !0, As.exit(n), r.status = null != t ? t : 1, void(e || r._end())) }, r.finish = function(t) { var e = this; return e.e = S(), e.i && clearTimeout(e.i), delete ic[e.key], e }, r.fail = function() { this.end(0) }, r.store = function() { this.end(null, !0), this.refreshEventAndStore(n), this.stored = !0 }, r.i = r.timeout ? w(p(r.fail, r), r.timeout) : null, r.type === uo && Le(r), As.set("event", r), r
    }

    function Be(e) {
        if (t.TINGYUN && t.TINGYUN.inited) {
            var n = Es(ao),
                r = Y(n);
            if (r && r.start && (e = e || {}, !e.key || r.key === e.key)) {
                var a = e.timeout;
                if (a || (a = io), r.duration = S() - r.start, r.duration > a) return void Cs(ao);
                var i = t.performance && t.performance.timing;
                if (i && i.navigationStart && (i.loadEventEnd || i.loadEventStart) && i.navigationStart - r.start >= 0) {
                    var o = { method: "GET", url: document.URL, status: 200, type: Va, subType: Qa, startSpeOffset: i.navigationStart - r.start, start: i.navigationStart, __spe: 1, du: (i.loadEventEnd || i.loadEventStart) - i.navigationStart };
                    r.xhrs || (r.xhrs = []), r.xhrs.push(o)
                }
                var s = 1;
                e.status && (s = e.status === lo ? 1 : 0), r.status = s, Cs(ao), je(r)
            }
        }
    }

    function Ue(e) {
        if (!t.TINGYUN || !t.TINGYUN.inited) return new qe("Agent is not inited!");
        e = m({}, { type: so }, e || {});
        var n = Me(e);
        return e.autoEnd && w(function() { e.status && e.status === po ? n.fail() : n.end() }, e.endDelay || fo), n
    }

    function Fe(t, e) {
        if (oc[t]) {
            var n = oc[t];
            n.id !== e.id && (e.speBinded = !0, oc[t] = e)
        }
    }

    function ze(e, n) {
        t.TINGYUN && t.TINGYUN.inited && (ta(n) || (n = {}), e && e.beforeEach && e.afterEach && (is.router_enable = !1, e.afterEach(function(e) {
            var r = e.fullPath;
            if (r = r ? t.location.origin + r : e.path) {
                var a = { key: r, type: uo, autoEnd: !0, endDelay: bo, debugInfo: { api: Ao } };
                m(a, n), Ue(a)
            }
        })))
    }

    function Ye(t, e) {
        if (t) {
            var n = t.split("_"),
                r = n[0],
                a = n[1];
            "ty" === r && a && A(a, { timestamp: S(), data: e })
        }
    }

    function Ge(t) { uc && t() }

    function We(t) { return function() { uc && t.apply(this, arguments) } }

    function Je() { uc = !1 }

    function Ke() {
        var t = Xo.getElementsByTagName("img");
        i(t, function(t) { t.complete || t[yo] || (t[yo] = !0, ca(t, pa, function() { us.imageResources.push({ loadTime: S(), element: t }) })) })
    }

    function Ve(t) {
        var e = Xo.createElement("script");
        e.type = "text/javascript";
        try { e.appendChild(Xo.createTextNode(t)) } catch (n) { e.text = t }
        Xo.getElementsByTagName("head")[0].appendChild(e)
    }

    function Xe(e) {
        dc.on(pa, E(function() {
            n();
            var t = S();
            Ge(function() { fc.load = t }), e.loadEventEnd = t, clearInterval(lc)
        })), i([pa, ha, ma, va], function(e) {
            ca(t, e, function(t) {
                Ge(function() {
                    (fc.e[e] || (fc.e[e] = [])).push(S())
                }), dc.emit(e, t)
            })
        });
        var n = E(function() {
            var n = S();
            if (Ge(function() { fc.end = n }), e.domContentLoadedEventStart = n, G() && t.performance && t.performance.getEntriesByName) {
                if (!Xo.querySelectorAll) return;
                us.resources = us.resources || [], i(Xo.querySelectorAll("head>link,head>script"), function(t) { var e; "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && us.resources.push(e) })
            }
        });
        if (G() && ca(Xo, xa, n), ca(Xo, ga, function(t) { Xo.readyState === ya && n() }), (!G() || t.performance && !t.performance.getEntriesByName) && (lc = setInterval(Ke, xo)), !G()) try { Ve("if(window.TINGYUN) {window.TINGYUN.".concat(_o, "=+new Date();}")) } catch (r) {}
    }

    function $e(t, e, n) { return n || (e === Yo ? n = Jo : e === Go && (n = Ko)), "".concat(t, "_").concat(e, "_").concat(n || hc) }

    function Qe(t) {
        if (ta(t)) {
            var e = t.type,
                n = t.name,
                r = t.handler,
                a = t.options;
            if (!(null == pc[e] || pc[e].indexOf(n) < 0 || !Zr(r) || a && !ta(a))) {
                var i = $e(e, n, a && a.position);
                e === Bo ? mc[i] = t : (mc[i] || (mc[i] = []), mc[i].push(t))
            }
        }
    }

    function Ze(t, e) { Qe({ type: Bo, name: t, handler: e }) }

    function tn(t, e, n) { Qe({ type: Uo, name: t, handler: e, options: n }) }

    function en(t) {
        var e = t.type,
            n = t.name,
            r = t.hookPostion,
            a = t.args,
            o = $e(e, n, r),
            s = {};
        if (mc[o]) {
            if (s.exist = !0, e === Bo) {
                var c, u = mc[o],
                    f = u.handler;
                try { c = f.apply(null) } catch (l) {}
                return s.result = c, s
            }
            var d = t.scope;
            d || (d = new Mt);
            try {
                i(mc[o], function(t) {
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

    function nn(t) { this.limit = t, this.reset() }

    function rn(t, e, n, r, a) { return String(t) + String(e) + String(n) + String(r) + String(a) }

    function an(t, e, n, r) { return String(t) + String(e) + String(n) + String(r) }

    function on(t, e, n, r, a, i, o, s, c) {
        var u = this;
        u.id = t, u.time = S(), u.msg = e, u.lineno = r, u.colno = a, u.filename = n, u.count = 1, u.stack = i && i.stack || "", u.module = o, u.trigger = s || xc, u.scope = new Mt({ contexts: c }), u.error = i, u.fix();
        var f = an(e, r, a, o),
            l = bc[f];
        u.ep = l ? 0 : 1, bc[f] = !0, u.fep = 0, u.trace = {}, this.recordFileName()
    }

    function sn(t) {
        var n = function(t) { var e = []; return i(t, function(t) { e.push(t.toObject()) }), e }(_c.c);
        if (!n || !n.length) return null;
        var r = { fu: gc ? gc : gc++, os: parseInt((S() - (us.pfStart || e)) / 1e3) };
        cs.ulabel && (r.ulabel = cs.ulabel), ce.buildImmediateAction(ti, null, null, { actionOptions: m(r, { items: n }) }), _c.reset()
    }

    function cn(t, e, n, r, a, o, s) {
        if (e || !as.ignoreNoFilePropError) {
            var c = !1;
            if (i(as.domains, function(t) { return c = t.test(e), c ? !1 : void 0 }), !c) {
                var u = a && a.moduleId,
                    f = rn(e, t, n, r, u),
                    l = _c.get(f);
                l ? l.increase() : (l = new on(f, t, e, n, r, a, u, o), _c.add(f, l), Ks.errs && Ks.errs.push(l));
                var d = l.setAndGetTrace(s);
                l.triggerActionHook(d)
            }
        }
    }

    function un() {
        var e = t.onerror;
        t.onerror = function(t, n, r, a, i) { return cn(t, n, r, a, i), Zr(e) ? e.apply(this, arguments) : void 0 }, t.onerror._ty = !0
    }

    function fn() {
        var e = t.onerror;
        e && e._ty || un()
    }

    function ln(t, e) {
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
                    return a && ea(o) && o > 0 && ea(s) && s > 0 ? !1 : void 0
                })
            }
            cn(n, a, o, s, { stack: r }, yc, e)
        }
    }

    function dn() {
        var e = fa();
        return e ? un() : ca(t, da, function(e) {
            var n, r, a, i, o;
            (e instanceof t.Event || t.ErrorEvent && e instanceof t.ErrorEvent) && (n = e.message || e.error && (e.error.message || e.error.constructor.name) || "", r = e.lineno || 0, a = e.colno || 0, i = e.filename || e.error && e.error.filename || e.target && e.target.baseURI || "", i == Xo.URL && (i = "#"), o = e.error), cn(n, i, r, a, o)
        }), dc.on([pa, ha, ma, va], function(t) { sn() }).on(pa, function() { e && Os(fn) }), setInterval(sn, vc, !0)
    }

    function pn(t) {
        if (t) {
            var e = cs.firstScreenResources = cs.firstScreenResources || [];
            Qr(t) || (t = [t]), i(t, function(t) {
                if ($r(t)) e.push(t);
                else if (ss(t)) {
                    var n = t.src || t.href;
                    n && e.push(n)
                }
            })
        }
    }

    function hn(t) {
        Qr(t) || (t = [t]), i(t, function(t) {
            if (t) {
                if (!(t instanceof RegExp)) throw new Vo("parameter's type requires RegExp");
                (as.domains || (as.domains = [])).push(t)
            }
        })
    }

    function mn() {
        if (Object.defineProperty) {
            var e = t[ba];
            e && Object.defineProperty(t, ba, { get: function() { return Tc++ > 0 && t.console && console.warn("window.%s is deprecated, use window.%s instead.", ba, Sa), e } })
        }
    }

    function vn(t) { return t.loadEventEnd || t._end }

    function gn(n, r) {
        var a = 0;
        n = n || {};
        var o = n.timing;
        if (n.getEntriesByName && o) a = o.domLoading, i(us.resources, function(t) {
            var e = n.getEntriesByName(t);
            if (1 === e.length) {
                var r = e[0].responseEnd + o.navigationStart;
                r > a && (a = r)
            }
        }), a -= o.navigationStart, r.__fp = Dc;
        else if (t.TINGYUN && t.TINGYUN[_o]) {
            var s = o && o.navigationStart ? o.navigationStart : e;
            a = t.TINGYUN[_o] - s, 0 > a && (a = 0), r.__fp = Pc
        } else P("fp=0"), r.__fp = Nc;
        return Ge(function() { fc._fp = a }), Math.round(a)
    }

    function yn(n, r) {
        r = r || {};
        var a = r.timing || {},
            o = n.fp || 0;
        n.__fs = Hc;
        var s = Xo.createElement("img");
        if (!s.getBoundingClientRect) return n.__fs = Lc, Ge(function() { fc.fs = o }), o;
        var c = us.imageResources,
            u = t.innerHeight,
            f = t.innerWidth;
        u || (u = Xo.documentElement.clientHeight), f || (f = Xo.documentElement.clientWidth);
        var l = [];
        c.length > 0 ? i(c, function(t) { xn(t.element, u, f) && l.push(t) }) : r.getEntriesByName && i(Xo.querySelectorAll("img"), function(t) { xn(t, u, f) && l.push({ element: t }) });
        var d = a.navigationStart || e,
            p = (a.loadEventEnd || Ks.loadEventEnd) - (a.navigationStart || e);
        return i(l, function(t) {
            if (t.loadTime) {
                var e = t.loadTime - d;
                e > o && (o = e, n.__fs = qc)
            } else if (t.element && t.element.src) {
                var a = r.getEntriesByName(t.element.src);
                if (a.length) {
                    var i = a[0],
                        s = i.responseEnd;
                    i.fetchStart <= p && s > o && (o = s, n.__fs = jc)
                }
            }
        }), Math.round(o)
    }

    function xn(t, e, n) { return t.src && _n(bn(t), e, n) && !Sn(t) }

    function _n(e, n, r) {
        if (e) {
            var a = t.pageYOffset,
                i = e.top + (0 === a ? 0 : a || Xo.scrollTop || 0) - (Xo.clientTop || 0);
            if (i >= n) return !1;
            var o = e.left;
            return o >= 0 && r > o
        }
        return !1
    }

    function bn(t) { if (G()) return Zr(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0; var e; try { e = t.getBoundingClientRect ? t.getBoundingClientRect() : void 0 } catch (n) {} return e }

    function Sn(t) { return Ac.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : En(t) }

    function En(t) {
        for (; t && 1 === t.nodeType;) {
            if ("none" === Tn(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function Tn(t) { return t.style && t.style.display }

    function Cn(t, n) {
        var r = e,
            a = 0,
            i = n && n.timing;
        return i && (r = i.navigationStart || r, a = i[vi] || i.domInteractive || i.domLoading || a), a ? t.__dr = Ic : Ks.domContentLoadedEventStart ? (a = Ks.domContentLoadedEventStart, t.__dr = kc) : (a = Ks._end, t.__dr = Oc), a - r
    }

    function wn(t, e) {!t.fp || t.fp <= 0 || t.fp > t.le ? t.fp = gn(e, t) : t.__fp = Rc }

    function An(n, r) {
        function a(t) { return n[t] > 0 ? n[t] - s : 0 }
        var o = {},
            s = r ? r.globalStart : e,
            c = r ? r.window : t,
            u = (r ? r.agent : Ks) || {};
        if (n) {
            Ge(function() {
                var t = fc.t = {};
                i(n, function(e, n) { Zr(e) || (t[n] = e) }, !0)
            }), s = n.navigationStart, o = { ns: s, f: a(di), qs: a(pi), rs: a(hi), re: a(mi), os: a(vi), oe: a(gi), oi: a(yi), oc: a(xi), ls: a(_i), le: a(bi), tus: a(Si), tue: a(Ei) };
            var f = a(Ti),
                l = a(Ci),
                d = a(wi),
                p = a(Ai),
                h = a(Ri),
                m = a(Di);
            if (o.cs = h, o.ce = m, o.ds = f, o.de = l, (p - d > 0 || p > 0) && (o.es = d, o.ee = p), 0 == o.le) {
                var v = vn(u);
                o.ue = v - s
            }
            u && (u._le = o.ue || o.le);
            var g, y;
            if (n.msFirstPaint) g = n.msFirstPaint, r || Ge(function() { fc.fp = "m_" + g });
            else if ((y = c.chrome) && c.chrome.loadTimes) {
                var x = c.chrome.loadTimes();
                x && x.firstPaintTime && (g = 1e3 * x.firstPaintTime), r || Ge(function() { fc.fp = "c_" + x.firstPaintTime })
            } else u && u.firstPaint && (g = u.firstPaint, r || Ge(function() { fc.fp = g }));
            g && (o.fp = Math.round(g - s), u.fp = o.fp), n[Pi] ? o.sl = a(Pi) : o.sl = 0
        } else o = { t: s, le: vn(u) - s };
        return o.je = u && u.errs && u.errs.length || 0, o
    }

    function Rn(e, n) {
        var r = An(e, n),
            a = n ? n.window : t;
        if (!a) return {};
        wn(r, a.performance), r.dr = Cn(r, a.performance), r.fs = yn(r, a.performance);
        var i = {};
        return r && (i = { f: r.f, fp: r.fp, fs: r.fs, dr: r.dr, le: r.le, je: r.je }), i
    }

    function Dn(t, e) {
        if (Pn()) {
            var n = { rm: {}, em: [], cpm: {} };
            e && (n.rm.res = e.res || []), t && (n.cpm = t, n.cpm.ul = Xo.URL), nbsJsBridge.logJsResult(Xr(n))
        }
    }

    function Pn() { return "undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult }

    function Nn() { var t = 0; try { t = window.performance.timing.loadEventEnd } catch (e) {} return t > 0 }

    function In(t, n) {
        var r = { tr: !1, tt: h(Xo.title), charset: Xo.characterSet };
        cs.resources && m(r, cs.resources), Ge(function() { r.debug = fc }), Je();
        var a = Ks.errs;
        i(a, function(t, r) {
            var i = t.toObject();
            i.o = i.o - n && n.navigationStart || e, a[r] = i
        }), r.err = a;
        var o, s = "getEntriesByType";
        return t[s] ? o = t[s]("resource") : P(v(Cc, [s])), o && (r.tr = !0, r.res = [], i(o, function(t) {
            function e(e) { var n = t[e]; return n > 0 ? n : 0 }
            var n = t.initiatorType,
                a = t.name,
                o = { o: e("startTime"), rt: n, n: a, f: e(di), ds: e(Ti), de: e(Ci), cs: e(Ri), ce: e(Di), sl: e(Pi), qs: e(pi), rs: e(hi), re: e(mi), ts: t.transferSize || 0, es: t.encodedBodySize || 0 };
            if ("xmlhttprequest" === n) {
                var s = kn(a);
                i(s, function(t, e) { 0 == e.indexOf("s_") && (o[e] = t) })
            }
            r.res.push(o)
        })), r
    }

    function kn(t) { var e; return i(Ks.xhrs, function(n, r) { return r && t.indexOf(r) > -1 ? (e = n, !1) : void 0 }), e }

    function On(t) { if (t) { var e = t.fetchStart; if (e) return e - t.navigationStart } }

    function jn() {
        var n = {},
            r = 0,
            a = t.performance;
        a && a.getEntriesByType && i(a.getEntriesByType("mark") || [], function(t) {
            if (t && t.name && t.startTime && 0 === t.name.indexOf(Ga)) {
                var e = t.name.substring(Ga.length);
                e && (n[e] = Math.round(t.startTime), r += 1)
            }
        });
        var o = a && a.timing ? a.timing.navigationStart : e,
            s = t[Ya] && t[Ya].data,
            c = m({}, s || {}, fs || {});
        return c && a && a.timing && i(c, function(t, e) { ta(t) && t.timestamp && (n[e] = t.timestamp - o, r += 1) }), r > 0 ? n : null
    }

    function qn(t, e) { var n = m({}, t || {}, { type: Qa }); return e && (n.body = e), n }

    function Hn(t, e) {
        var n = Xr(t),
            r = n ? n.length : 0;
        if (r > Wa && t.res && t.res.length > 0) {
            t.res = t.res.slice(0, e);
            var a = Xr(t),
                i = a ? a.length : 0;
            return i > Wa ? Hn(t, e - 10 > 0 ? e - 10 : 0) : t
        }
        return t
    }

    function Ln() {
        var e = E(function() {
            function e(t) { return t ? "1" : "0" }
            if (!ls.pfSent) {
                var n = t.performance,
                    r = !!n,
                    a = n && n.timing;
                r || P(v(Cc, ["pf"]));
                var o = m(An(a), as.pageServerData, cs),
                    s = m({}, Rs);
                wn(s, n), s.dr = Cn(s, n), s.fs = yn(s, n);
                var c = m(o, s) || {},
                    u = jn();
                u && i(u, function(t, e) { ea(t) && t >= 0 && (c[e] = t) });
                var f, l = "",
                    d = a ? On(a) : 0;
                i(["fp", "fs", "dr", "le"], function(t) { l += e((d ? c[t] - d : c[t]) >= is[t + "_threshold"]) }), r && l.indexOf("1") > -1 && (f = In(n, a), c.ressize = !(!n || !n.getEntriesByName)), u && (f || (f = {}), f.mark = u), c.trflag = l || "0000", us.pfStart = S(), delete c.firstScreenResources, delete c.resources;
                var p = Rt(Xo.URL);
                if (f || (f = { tr: !1, tt: h(Xo.title), charset: Xo.characterSet }), f.bizId_param = p.bizIdParams, f.opt_param = p.params, f.request_param = p.requestParams, as.collectAllParam[ko] && p.operaAllParam && (f.opera_all_param = {}, f.opera_all_param[ko] = p.operaAllParam), ls.opt_custom_param = p.optCustomParams, f) try { f = Hn(f, 150) } catch (g) {}
                var y = qn(c, f),
                    x = ce.buildImmediateAction(Qa, "", y, { notSend: ls.recordingCpActions });
                ls.recordingCpActions && (x.crossPage = !0, ls.cpActions.push(x), w(function() { re(!0) }, Mc));
                try { Dn(c, f) } catch (g) {}
                ls.pfSent = !0
            }
        });
        return G() && Nn() && !ls.pfSent && e(), dc.on(pa, function() {
            var t = 0;
            if (is.pfDelay && ta(is.pfDelay)) {
                var n = jn();
                i(is.pfDelay, function(e, r) {
                    (!n || null == n[r]) && ea(e) && e > t && (t = e)
                })
            }
            if (G() && ls.recordingCpActions) {
                var r = is.cross_page_delay ? is.cross_page_delay : Hi,
                    a = r - t;
                0 > a && (a = 0), Mc = a
            }
            w(e, t)
        }).on([ha, ma, va], e)
    }

    function Mn(t) { var e = t; return Bc && (Uc.setAttribute("href", e), e = Uc.href), Uc.setAttribute("href", e), { href: Uc.href, protocol: Uc.protocol ? Uc.protocol.replace(/:$/, "") : "", host: Uc.host, search: Uc.search ? Uc.search.replace(/^\?/, "") : "", hash: Uc.hash ? Uc.hash.replace(/^#/, "") : "", hostname: Uc.hostname, port: Uc.port, pathname: "/" === Uc.pathname.charAt(0) ? Uc.pathname : "/" + Uc.pathname } }

    function Bn(t) { var e = !1; return as.corsDomains && i(as.corsDomains, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function Un(t) { var e = Mn(t); return e.protocol === Fc.protocol && e.host === Fc.host || Bn(e.host) }

    function Fn(t, e, n) {
        var r = la().replace(/-/g, ""),
            a = {};
        return i(e, function(e) {
            if (e) {
                var i = n && n[e];
                null == i && (t.setRequestHeader(e, r), i = r), a[e] = i
            }
        }), a
    }

    function zn(t) { t.pcid = t.parentContext.id, t.parentContext.updateRemain(1, Va), t.parentContext.items.push(t.contextData) }

    function Yn(t) {
        return function e(n, r) {
            var a = this,
                i = e;
            if (i._ && (i._ = 1), !a[Ta]) {
                var o = a[ba] = {};
                o.method = n, o.url = r, o.id = Yc++, o.jserror = !1;
                var s = As.get("event");
                s && (o.key = s.key, s.remain++), Xn(o, ls.context), o.parentContext = o.context.parent, o.contextData = { type: Va, id: o.id, cid: o.context.id, method: o.method, url: o.url, state: o.state, ignore: !1, jserror: o.jserror }, o.context && o.context.setData(o.contextData), o.parentContext && zn(o), o.scope = new Mt, o.toJSON = function() {}
            }
            try { return t.apply(a, arguments) } catch (c) {}
            return G() ? void 0 : d(t, [a, arguments])
        }
    }

    function Gn(t) {
        return function e(n, r) {
            var a = this,
                i = e;
            if (i._ && (i._ = 1), !a[Ta]) {
                var o = a[ba],
                    s = cr(n, as.optCustomParamRules);
                es.isGather && (o.wReqHeaderParam || (o.wReqHeaderParam = {}), o.wReqHeaderParam[n] = r), o && s && (o.reqHeaderParam || (o.reqHeaderParam = {}), o.reqHeaderParam[n] = r), o.headerRecord || (o.headerRecord = {}), o.headerRecord[n] = r
            }
            try { return t.apply(a, arguments) } catch (c) {}
            return G() ? void 0 : d(t, [a, arguments])
        }
    }

    function Wn(t) {
        return function e(n) {
            var r = this,
                a = e;
            if (a._ && (a._ = 1), !r[Ta]) {
                var i = r[ba];
                if (i && (i.start = S(), i.reqSize = T(n), i.requestData = n, i.contextData && (i.contextData.start = i.start)), G()) {
                    if (i.context && null == i.context.parent) {
                        var o = Ne(i.start);
                        o && (i.context.parent = o, i.parentContext = i.context.parent, zn(i))
                    }!i.parentContext && ls.recordingCpActions && (i.context.crossPage = !0, ls.cpRemain.ajax++, ls.cpActions.push(i.context))
                }
                var s = As.get("event");
                s && s.type === uo && i.key === s.key && i.parentContext && Fe(i.key, i.parentContext), tr(r);
                var c = Un(i.url);
                if (is.x_server_switch && r.setRequestHeader && is.key && i && c) {
                    var u = pr(),
                        f = "c=B|" + is.key;
                    u && (f += ";x=" + u), r.setRequestHeader(Ua, f), i.xTingyunSent = !0, is.apm_headers && (i.apms = Fn(r, is.apm_headers, i.headerRecord))
                }
                en({ type: Uo, name: Yo, hookPostion: Wo, args: { target: r }, scope: i.scope })
            }
            try { return t.apply(r, arguments) } catch (l) {}
            return G() ? void 0 : d(t, [r, arguments])
        }
    }

    function Jn(t) {
        i(Gc, function(e, n) {
            var r = "on" + n;
            t[r] ? M(t, r, function(r) { return function() { return Vn(t, e, n), Zr(r) ? r.apply(this, arguments) : void 0 } }) : t[r] = function() { Vn(t, e, n) }
        })
    }

    function Kn(t) { i(Gc, function(e, n) { ca(t, n, function() { Vn(t, e, n) }) }) }

    function Vn(t, e, n) { t && t[ba] && (t[ba].errorCode = e, t[ba].errorEvent = n) }

    function Xn(t, e) {
        if (!t.context) {
            var n = "".concat(t.url, "-").concat(t.id);
            t.context = ce.createEvent(e, n, Va)
        }
    }

    function $n(t, e) { ls.context = t.context, ls.globalAsyncStore = t, ls.globalAjaxContext = e }

    function Qn(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), t.contextData && t.context.state === li && is.upload_timeout_ajax && (t.contextData.brsOnly = !0, ce.buildImmediateAction(Va, "", t.contextData, { actionOptions: { state: li } })), ls.globalAsyncStore = null, ls.globalAjaxContext = null
    }

    function Zn(t, e) {
        if (G()) {
            var n = t[zc];
            n && !t[$i] && (M(t, zc, e), t[$i] = !0)
        }
        var r = t[Wc];
        !r || t[$i] || r[$i] || (M(t, Wc, e), t[$i] = !0)
    }

    function tr(t) {
        function e(e) {
            return L(function n() {
                var r = n;
                r._ && (r._ = 1), er(t);
                var a;
                if (Zr(e)) {
                    var i = t[ba];
                    if (i && 4 == t.readyState) {
                        var o = S();
                        $n(i, t)
                    }
                    try { a = e.apply(this, arguments) } catch (s) { throw i && (i.jserror = !0), s }
                    i && 4 == t.readyState && (i.cbTime = S() - o)
                }
                return a
            })
        }
        Zn(t, e);
        try { G() ? Kn(t) : Jn(t) } catch (n) {}
        if (!t[$i]) {
            var r = L(function a() {
                var e = a;
                e._ && (e._ = 1), t[$i] || 4 === t.readyState && er(t)
            });
            try { G() ? ca(t, ga, r) : (t[Wc] = r, t[Wc][$i] = !0) } catch (n) { return }
        }
        Os(function() { Zn(t, e) })
    }

    function er(t) {
        var e = t[ba];
        if (e && (e.end = S(), e.readyState = t.readyState, 4 == t.readyState)) {
            delete t[$i], $n(e), e.status = t.status, e.text = nr(t), e.resSize = T(e.text);
            var n = ir(e, t);
            en({ type: Uo, name: Yo, hookPostion: Jo, args: { target: t, actionData: e.contextData }, scope: e.scope });
            var r = As.get("event");
            Os(function() { e.callbackEnd || (e.callbackEnd = !0, ar(e, n), r && r.key == e.key && (r.xhrs.push(n), 0 === --r.remain && r._end()), Ks.xhrs && (Ks.xhrs[e.url] = n), Qn(e)) })
        }
    }

    function nr(t) {
        var e = "";
        if ("" == t.responseType || "text" == t.responseType) e = t.responseText;
        else if (t.response) e = t.response;
        else try { e = t.responseText } catch (n) {}
        return e || ""
    }

    function rr(t) { return t.data && "event" === t.data.type ? { text: t.data.text, path: t.data.path, src: t.data.src, value: t.data.value, href: t.data.href, title: t.data.title, nodeName: t.data.nodeName, items: t.items } : t.parent && t.parent.data && "event" === t.parent.data.type ? { text: t.parent.data.text, path: t.parent.data.path, src: t.parent.data.src, value: t.parent.data.value, href: t.parent.data.href, title: t.parent.data.title, nodeName: t.parent.data.nodeName, items: t.parent.items } : t.parent && t.parent.parent ? rr(t.parent) : { text: "", path: "", nodeName: "", items: [] } }

    function ar(t, e) { t && e && t.jserror && (e.jserror = t.jserror), t.errorCode && !e.err && (e.err = t.errorCode), t.cbTime && !e.cb && (e.cb = t.cbTime), zt(e, t.scope) }

    function ir(e, n) {
        if (e && !e.composed) {
            var r = e.status;
            if (es.isGather) {
                var a = rr(e.context);
                e.wCustom = { fromJS: "agent", key: is.key, ajaxUrl: e.url, items: e.context.items, itemsTemp: a && a.items, id: e.id, url: document.URL, text: a && a.text, href: a && a.href, title: a && a.title, value: a && a.value, src: a && a.src, xpath: a && a.path, nodeName: a && a.nodeName, method: e.method, urlParams: st(document.URL), ajaxUrlParams: st(e.url), start: e.start, requestHeader: e.wReqHeaderParam, requestParams: e.requestData, responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"), responseBody: n.response, children: [] }, t.top && t.top.postMessage && t.top.postMessage(Xr(e.wCustom), "*"), delete e.wCustom, delete e.wReqHeaderParam
            }
            m(e.contextData, { end: e.end, du: r > 0 ? e.end - e.start : 0, cb: e.cbTime || 0, status: r, err: e.errorCode ? e.errorCode : 0, rec: e.resSize, send: e.reqSize });
            var i = e.contextData,
                o = {};
            o[ka] = e.reqHeaderParam || {};
            var s = Rt(e.url),
                c = s.bizIdParams,
                u = s.params,
                f = s.requestParams,
                l = s.optCustomParams,
                d = lr(e.requestData, as.bizIdsRules[wa], as.bizIdsRules[Da]),
                p = lr(e.requestData, as.customParamsRules[wa], as.customParamsRules[Da]),
                h = lr(e.requestData, as.requestParamKeys[Pa], as.requestParamKeys[Na]);
            o[Oa] = kt(dr(e.requestData), as.optCustomParamRules[Oa], !0);
            var v = ur(n, as.bizIdsRules),
                g = ur(n, as.customParamsRules);
            o[ja] = ur(n, as.optCustomParamRules, ja);
            var y = {},
                x = {},
                _ = Y(e.text);
            _ && (y = fr(_, as.bizIdsRules), x = fr(_, as.customParamsRules), o[qa] = kt(_, as.optCustomParamRules[qa], !0)), i.bizId_param = m({}, c, d, v, y), i.opt_param = m({}, u, p, g, x), i.request_param = m({}, f, h), i.opt_custom_param = It(or(o, l));
            var b = e.xTingyunSent ? Y(sr(n, Fa)) : null;
            if (b) {
                if (i.hasServerHeader = !0, i.s_id = b.id, i.s_tname = b.tname, i.s_tid = b.tid, i.s_rid = b.rid, i.s_duration = b.duration, "user" in b) {
                    var S = b.user,
                        E = S;
                    if (null != S && 0 === S.indexOf(za)) { var T = S.substring(za.length); try { E = Ys.decode(T) } catch (C) {} }
                    i.s_user = E, Tt(E)
                }
                "bid" in b && (i.s_bid = Nt(b.bid)), "ber" in b && (i.s_ber = b.ber), "isError" in Ks && (i.s_isError = b.isError)
            } else i.hasServerHeader = !1;
            e.apms && (i.apms = e.apms), e.key && (i.__spe = 1);
            var w = {};
            return as.collectAllParam[ko] && s.operaAllParam && (w[ko] = s.operaAllParam), as.collectAllParam[Oo] && e.headerRecord && (w[Oo] = e.headerRecord), as.collectAllParam[jo] && e.requestData && (w[jo] = e.requestData), as.collectAllParam[qo] && (w[qo] = n.getAllResponseHeaders()), as.collectAllParam[Ho] && e.text && (w[Ho] = e.text), At(w) || (i.opera_all_param = w), e.composed = !0, i
        }
    }

    function or(t, e) { return i(e, function(e, n) { t[n] = m({}, t[n] || {}, e || {}) }), t }

    function sr(t, e) { if (t && t.getResponseHeader) try { return t.getResponseHeader(e) } catch (n) {} }

    function cr(t, e) { var n; return i(e[ka], function(e) { return t === e ? (n = !0, !1) : void 0 }), n }

    function ur(t, e, n) {
        var r = {};
        return i(e[n || Aa], function(e) {
            var n = sr(t, e);
            null != n && nt(r, e, n)
        }), r
    }

    function fr(t, e, n) {
        var r = {};
        return i(e[n || Ra], function(e) {
            var n = Pt(Ha, e),
                a = n(t);
            null != a && nt(r, e, a)
        }), r
    }

    function lr(t, e, n) { return Dt(dr(t), e, n) }

    function dr(t) { var e = Y(t); return e || (e = ct(t)), e }

    function pr() { try { return la().substring(0, 16) } catch (t) {} }

    function hr() {
        var e = $o && $o.prototype;
        e ? (M(e, "open", Yn), M(e, "setRequestHeader", Gn), M(e, "send", Wn)) : $o && (t.XMLHttpRequest = function() { var t = new $o; return M(t, "open", Yn), M(t, "setRequestHeader", Gn), M(t, "send", Wn), t })
    }

    function mr(t) { t && !t.composed && (m(t.contextData, { end: t.end || S() }), t.composed = !0) }

    function vr() { is.set_timeout_max_depth && is.set_timeout_max_depth > 0 && (Kc = is.set_timeout_max_depth), M(window, "setTimeout", Er), M(window, "clearTimeout", Tr) }

    function gr(t) { t.context || (t.context = ce.createEvent(ls.context, "".concat(t.name, "-").concat(t.id), Xa, t.name)) }

    function yr(t) { ls.context = t.context, ls.globalAsyncStore = t }

    function xr(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), ls.globalAsyncStore = null
    }

    function _r(t) { for (var e = 0; null != t && 5 > e;) e += t.type === Xa ? 1 : 0, t = t.parent; return 5 > e }

    function br(t) { return function() { return H(t).apply(this, arguments) } }

    function Sr(t, e, n, r) {
        var a = null,
            i = null;
        return ta(r) && r[Xi] || null == ls.context ? i = br(t) : _r(ls.context) ? (a = { id: Jc++, name: e, start: S(), delay: n, parentContext: ls.context }, gr(a), a.contextData = { type: Xa, id: a.id, cid: a.context.id, name: a.name, start: a.start, delay: a.delay }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, Xa), a.parentContext.items.push(a.contextData)), i = L(function() { var e; try { yr(a) } catch (n) {} try { t && (e = t.apply(this, arguments)) } finally { try { a.end = S(), mr(a), xr(a) } catch (n) {} } return e })) : i = br(t), { store: a, cb: i }
    }

    function Er(t, e) {
        return function(n) {
            var r = ra.call(arguments, 0),
                a = null;
            if (!arguments[2] && Zr(n)) {
                var i = Sr(n, e, r[1], r[2]);
                i.cb && (r[0] = i.cb), a = i.store
            }
            var o = t.apply(this, r);
            return a && (Vc[o] = a), o
        }
    }

    function Tr(t) {
        return function(e) {
            try {
                var n = Vc[e];
                n && n.context && (n.context.removeFromParent(), Vc[e] = null)
            } catch (r) {}
            return t.apply(this, arguments)
        }
    }

    function Cr(t) { m(t.contextData, { pvid: t.pvid, end: t.end, url: t.url }, t.serverData || {}, t.pfData || {}) }

    function wr(t) { t.context || (t.context = ce.createEvent(t.parentContext, "".concat(t.src, "-").concat(t.id), $a)) }

    function Ar(t, e, n) {
        function r() {
            if (a.end = S(), a.sameOrigin && this && this.contentDocument && this.contentWindow) {
                a.sameOrigin = !0, a.url = this.contentDocument.URL;
                var e = Ot(Ba, Ma, this.contentWindow[Ma] || this.contentDocument.cookie || "");
                if (e) {
                    var n = qt(e);
                    jt(Ba, "", -1e3, "/", this.contentDocument), a.serverData = Ht(n)
                }
                var i = this.contentWindow[Sa],
                    o = this.contentWindow.performance && this.contentWindow.performance.timing,
                    s = { window: this.contentWindow, globalStart: i ? i.globalStart : o.navigationStart, agent: m({}, i && i.currentAgent ? i.currentAgent : {}) };
                i && (a.pvid = i.pvid || "");
                var c;
                try { c = Rn(o, s) } catch (u) { c = {} }
                a.pfData = c, a.pfData.le && (a.end = o.navigationStart + a.pfData.le)
            } else a.sameOrigin = !1;
            Cr(a), Rr(a), t.removeEventListener("load", r)
        }
        if (t) {
            n || (n = t.src ? Qc : $c);
            var a = { id: Xc++, src: e, loadType: n, start: S(), parentContext: ls.context };
            a.sameOrigin = Un(a.src), wr(a), a.contextData = { type: $a, loadType: a.loadType, id: a.id, cid: a.context.id, src: a.src, start: a.start, sameOrigin: a.sameOrigin }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, $a), a.parentContext.items.push(a.contextData)), !a.parentContext && ls.recordingCpActions && (a.context.crossPage = !0, ls.cpRemain.iframe++, ls.cpActions.push(a.context)), t.addEventListener("load", r)
        }
    }

    function Rr(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), ls.context = null
    }

    function Dr() {
        function t(t) { return function(e) { return "IFRAME" === e.nodeName && e.src && Ar(e, e.src, $c), t.apply(this, arguments) } }
        M(Node.prototype, "appendChild", t), M(Node.prototype, "insertBefore", t)
    }

    function Pr() {
        function t() {
            var t = arguments[0],
                e = this;
            return Ar(e, t), r.apply(this, arguments)
        }
        if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
            var e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src"),
                n = e.get,
                r = e.set;
            Object.defineProperty(HTMLIFrameElement.prototype, "src", { get: function() { return n.apply(this, arguments) }, set: t, enumerable: !0, configurable: !0 })
        }
    }

    function Nr() { Dr(), Pr() }

    function Ir(t) { Ts(ki, Xr(t)) }

    function kr(t) {
        var e = Zc++,
            n = t.url || "",
            r = S(),
            a = ce.createEvent(ls.context, "".concat(n, "-").concat(e), Za, t.subType || Oi),
            i = { type: Za, subType: a.subType, id: e, cid: a.id, url: n, start: r };
        a && a.setData(i);
        var o;
        return a.parent && (a.parent.type === Va ? ir(ls.globalAsyncStore, ls.globalAjaxContext) : a.parent.type === Xa && mr(ls.globalAsyncStore), o = a.collectCrossPageData(), tu = o, t.delayStorage || Ir(o), a.clear(), a = null), { storageData: o, context: a }
    }

    function Or(t) {
        return function() {
            var e = arguments[0],
                n = kr({ url: e, delayStorage: !0 }),
                r = n.storageData,
                a = n.context;
            try {
                var i = t.apply(this, arguments);
                if (i) {
                    if (!r && a) {
                        var o = Ne(a.data.start);
                        o && (a.parent = o, r = a.collectCrossPageData(), tu = r, a.clear(), a = null)
                    }
                    Ir(r)
                }
                return i
            } catch (s) {}
            return G() ? void 0 : d(t, [this, arguments])
        }
    }

    function jr() { M(t, "open", Or) }

    function qr() {
        function t(t) { return { valid: Ji === t.target.nodeName && !t.defaultPrevented && t.target.href, url: t.target.href, subType: ji } }

        function e(t) { return { valid: Ki === t.target.nodeName && !t.defaultPrevented && t.target.action, url: t.target.action, subType: qi } }
        i([Bi, Ui], function(n) {
            Xo.addEventListener(n, function(r) {
                if (r) {
                    var a = n === Bi ? t(r) : e(r);
                    if (a.valid) {
                        var i = r.timeStamp ? Ie(r) : Ne(Pe(r));
                        i && (ls.context = i, kr({ subType: a.subType, url: a.url }), ls.context = null)
                    }
                }
            }, _defineProperty({}, Mi, !0))
        })
    }

    function Hr() { ae(tu), tu = null }

    function Lr() { ca(Xo, Io, function() { "hidden" === Xo.visibilityState && Hr() }), ca(t, va, function() { Hr() }) }

    function Mr() { jr(), qr(), Lr() }

    function Br() { is.disable_hook_event || ke(), is.disable_hook_timer || vr(), is.disable_hook_iframe || Nr(), is.disable_hook_cross_page || Mr() }

    function Ur(t, e) { t && is.router_enable && Ue({ key: t, autoEnd: !0, endDelay: is.router_event_delay || bo, type: uo, debugInfo: { api: e } }) }

    function Fr() {
        eu.forEach(function(e) {
            M(t.history, e, function(n) {
                return function(r, a, i) {
                    var o;
                    o = n.apply(this, arguments);
                    try { Ur(t.location.href, e) } catch (s) {}
                    return o
                }
            })
        }), ca(t, To, function() { Ur(t.location.href, To) })
    }

    function zr() { ca(t, Eo, function() { Ur(t.location.href, Eo) }) }

    function Yr() {
        var e = t.history;
        e ? Fr() : zr()
    }

    function Gr() { is.router_enable && Yr() }

    function Wr() {
        if (G()) try { ca(t, "message", Xt) } catch (e) {}
        if (Xe(Ks), G() && Br(), Ln(), hr(), dn(), Gr(), Ks._end = S(), Ge(function() { fc._end = Ks._end }), mn(), G()) {
            var n = Y(Es(ki));
            n && n.fromUrl && Xo.referrer && n.fromUrl.indexOf(Xo.referrer) > -1 && (ls.recordingCpActions = !0, ls.cpParent = n), Cs(ki)
        }
    }

    function Jr(e) {
        if ((!t[Sa] || !t[Sa].inited) && e && (Zr(e) || ta(e))) {
            var n = en({ type: Bo, name: Fo });
            (!n.exist || n.result) && (Vt(e), (is.key || is.appKey) && (Wr(), t[Sa].inited = !0), en({ type: Bo, name: zo }))
        }
    }

    function Kr() { return window[Sa] && 3 === window[Sa].mainVersion ? window[Sa] : (Ec.init = Jr, Ec) }
    var Vr, Xr, $r = o("String"),
        Qr = o("Array"),
        Zr = o("Function"),
        ta = o("Object"),
        ea = o("Number"),
        na = o("Undefined"),
        ra = [].slice,
        aa = '"',
        ia = /([\"\\])/g,
        oa = /\n/g,
        sa = t.JSON;
    sa && sa.parse && sa.stringify ? (Vr = n, Xr = r) : (Vr = s, Xr = c);
    var ca;
    ca = t.addEventListener ? f : l;
    var ua = t.encodeURIComponent,
        fa = function() { return !document.addEventListener },
        la = (t.location.protocol, function() {
            function t(t) { return 0 > t ? NaN : 30 >= t ? 0 | Math.random() * (1 << t) : 53 >= t ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN }

            function e(t, e) { for (var n = t.toString(16), r = e - n.length, a = "0"; r > 0; r >>>= 1, a += a) 1 & r && (n = a + n); return n }
            return function(n) { return n || (n = ""), e(t(32), 8) + n + e(t(16), 4) + n + e(16384 | t(12), 4) + n + e(32768 | t(14), 4) + n + e(t(48), 12) }
        }());
    C.prototype = {
        on: function(t, e) { var n = this; return $r(t) ? (n.events[t] || (n.events[t] = [])).push(e) : Qr(t) && i(t, function(t) { n.on(t, e) }), n },
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
    var da = "error",
        pa = "load",
        ha = "unload",
        ma = "beforeunload",
        va = "pagehide",
        ga = "readystatechange",
        ya = "complete",
        xa = "DOMContentLoaded",
        _a = "on",
        ba = "_ty_rum",
        Sa = "TINGYUN",
        Ea = 2,
        Ta = "__ign",
        Ca = "__ty_asyncWrap__",
        wa = "2",
        Aa = "3",
        Ra = "4",
        Da = "5",
        Pa = "1",
        Na = "2",
        Ia = "1",
        ka = "2",
        Oa = "3",
        ja = "4",
        qa = "5",
        Ha = "body",
        La = "reqBody",
        Ma = "TINGYUN_COOKIE_VALUE",
        Ba = "TINGYUN_DATA",
        Ua = "X-Tingyun",
        Fa = "X-Tingyun-Data",
        za = "TY_BASE64",
        Ya = "__TINGYUN",
        Ga = "ty_",
        Wa = 64512,
        Ja = 6e4,
        Ka = "event",
        Va = "ajax",
        Xa = "timer",
        $a = "iframe",
        Qa = "pf",
        Za = "crossPage",
        ti = "jsError",
        ei = "e",
        ni = "a",
        ri = "t",
        ai = "i",
        ii = "p",
        oi = "c",
        si = "j",
        ci = "finish",
        ui = "pending",
        fi = "finish",
        li = "timeout",
        di = "fetchStart",
        pi = "requestStart",
        hi = "responseStart",
        mi = "responseEnd",
        vi = "domContentLoadedEventStart",
        gi = "domContentLoadedEventEnd",
        yi = "domInteractive",
        xi = "domComplete",
        _i = "loadEventStart",
        bi = "loadEventEnd",
        Si = "unloadEventStart",
        Ei = "unloadEventEnd",
        Ti = "domainLookupStart",
        Ci = "domainLookupEnd",
        wi = "redirectStart",
        Ai = "redirectEnd",
        Ri = "connectStart",
        Di = "connectEnd",
        Pi = "secureConnectionStart",
        Ni = 5,
        Ii = 5,
        ki = "__ty_crs_page_events",
        Oi = "window_open",
        ji = "a_link",
        qi = "form_submit",
        Hi = 3e3,
        Li = "__ty_event_patch_tag",
        Mi = "__ty_event_patch_disable",
        Bi = "click",
        Ui = "submit",
        Fi = "spe",
        zi = "addEventListener",
        Yi = "onProperty",
        Gi = "inline",
        Wi = "IMG",
        Ji = "A",
        Ki = "FORM",
        Vi = 3,
        Xi = "__ty_ignore",
        $i = "__ty_xhr_hooked",
        Qi = 200,
        Zi = "TY_USER_ID",
        to = "TY_SESSION_N_ID",
        eo = "TY_DEVICE_N_ID",
        no = 18e5,
        ro = "|",
        ao = "__TY_SPE_STORE",
        io = 6e4,
        oo = 6e5,
        so = "auto",
        co = "defined",
        uo = "route",
        fo = 500,
        lo = "success",
        po = "fail",
        ho = "TY_path_gather",
        mo = "EagleEye-TraceID",
        vo = "__TY_ELEMENT_CB",
        go = "__TY_CB_COUNTER",
        yo = "__TY_IMAGE_LOAD_HOOK",
        xo = 60,
        _o = "__tagFirstPaintTime",
        bo = 500,
        So = 1e4,
        Eo = "hashchange",
        To = "popstate",
        Co = "pushState",
        wo = "replaceState",
        Ao = "vueRouter",
        Ro = "normal",
        Do = "script",
        Po = "current",
        No = "crossPage",
        Io = "visibilitychange",
        ko = "URL",
        Oo = "QH",
        jo = "QB",
        qo = "RH",
        Ho = "RB",
        Lo = 200,
        Mo = "__TY_EVENT_ID",
        Bo = "lifecycle",
        Uo = "action",
        Fo = "preInit",
        zo = "init",
        Yo = "ajax",
        Go = "error",
        Wo = "ajax_send",
        Jo = "ajax_finish",
        Ko = "error_trigger",
        Vo = t.Error,
        Xo = t.document,
        $o = t.XMLHttpRequest,
        Qo = t.location,
        Zo = t.navigator,
        ts = t.HTMLElement,
        es = { isGather: !1 },
        ns = { fp_threshold: 2e3, fs_threshold: 4e3, dr_threshold: 4e3 },
        rs = { server: {}, appConf: { pvid: la(), baseInfo: {} } },
        as = rs.appConf,
        is = rs.server,
        os = { pvid: as.pvid, ref: Xo.URL, referrer: Xo.referrer, v: "3.2.2", av: "3.2.2" },
        ss = ts ? function(t) { return t instanceof ts } : function(t) { t && "object" === _typeof(t) && 1 === t.nodeType && $r(t.nodeName) },
        cs = {},
        us = { imageResources: [] },
        fs = {},
        ls = { context: null, uniqueId: 0, actions: [], opt_custom_param: {}, unAssignedEvents: [], cpActions: [], recordingCpActions: !1, cpParent: null, cpRemain: { ajax: 0, iframe: 0 }, tryEndCpActionsFailed: !1, globalAsyncStore: null, globalAjaxContext: null, pfSent: !1, ajaxUniqueId: 0, scope: null },
        ds = [],
        ps = [],
        hs = {},
        ms = "undefined" != typeof t.console,
        vs = 1,
        gs = 2,
        ys = 4,
        xs = 8,
        _s = k.prototype;
    _s.create = _s.before = _s.after = _s.error = null;
    var bs;
    U.prototype = {
        createContext: function() { return Object.create ? Object.create(this.active) : B(this.active) },
        get: function(t) { return this.active ? this.active[t] : void 0 },
        set: function(t, e) { return this.active ? this.active[t] = e : void 0 },
        enter: function(t) {
            if (!t) throw new Vo("context required!");
            this._set.push(this.active), this.active = t
        },
        exit: function(t) {
            if (!t) throw new Vo("context required!");
            if (t === this.active) return void(this.active = this._set.pop());
            var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : y(this._set, t);
            if (0 > e) throw new Vo("context not currently entered!");
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
    var Ss, Es, Ts, Cs, ws = !1,
        As = z();
    Es = function(e) { try { return t.localStorage.getItem(e) } catch (n) {} }, Ts = function(e, n) { try { t.localStorage.setItem(e, n) } catch (r) {} return n }, Cs = function(e) { try { t.localStorage.removeItem(e) } catch (n) {} };
    var Rs = {},
        Ds = t.screen;
    Ds && (Rs.sh = Ds.height, Rs.sw = Ds.width);
    var Ps, Ns, Is = function() {
            var e = t.navigator.standalone,
                n = t.navigator.userAgent.toLowerCase(),
                r = /safari/.test(n),
                a = /iphone|ipod|ipad/.test(n);
            return a && !e && !r
        },
        ks = !/(MSIE [0-8].\d+)/.test(navigator.userAgent),
        Os = G() ? _ : x,
        js = "POST",
        qs = J,
        Hs = !1;
    $.prototype.add = function(t) { this.queue.length >= this.size || (this.queue.push(t), this.running || (this.running = !0, this.run())) }, $.prototype.run = function() {
        var t = this,
            e = function() { t.queue.length > 0 ? t.run() : t.running = !1 };
        this.handler(this.queue.shift(), e)
    }, $.prototype.handler = function(t, e) { Ps(t, E(function() { e() })) }, Ps = t.XDomainRequest ? K : V, Zo.sendBeacon && (Hs = !0);
    var Ls = Is();
    Ls && (qs = Ps = V, Hs = !1), Ps || (Ps = function(t, e) { e() }, Hs = !1), ca(t, ma, function(t) { Hs && (Ps = X) });
    var Ms, Bs = t.location.protocol,
        Us = "http:",
        Fs = {},
        zs = t,
        Ys = function() {
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
                s = zs.btoa ? function(t) { return zs.btoa(t) } : function(t) { return t.replace(/[\s\S]{1,3}/g, o) },
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
                m = zs.atob ? function(t) { return zs.atob(t) } : function(t) { return t.replace(/\S{1,4}/g, h) },
                v = function(t) { return m(String(t).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                g = function(t) { return p(m(t)) },
                y = function(t) { return g(String(t).replace(/[-_]/g, function(t) { return "-" == t ? "+" : "/" }).replace(/[^A-Za-z0-9\+\/]/g, "")) };
            return { atob: v, btoa: s, utob: i, encode: u, encodeURI: f, btou: p, decode: y }
        }(),
        Gs = "extra";
    Mt.prototype.setContext = function(t, e) {
        var n = this;
        ta(t) ? i(t, function(t, e) { n._mergeContext(e, t) }) : this._mergeContext(t, e)
    }, Mt.prototype.setExtraContext = function(t) { this.setContext(Gs, t) }, Mt.prototype.getContext = function(t) { return null == t ? this._contexts : null == this._contexts ? null : this._contexts[t] }, Mt.prototype.getData = function() { return null == this._contexts ? null : { contexts: this._contexts } }, Mt.prototype._mergeContext = function(t, e) { null != t && ta(e) && (this._contexts || (this._contexts = {}), this._contexts[t] = m(this._contexts[t] || {}, e)) }, Mt.prototype.toJSON = function() {};
    var Ws = ["id", "key", "appKey", "token"],
        Js = $t.prototype;
    Js.start = function() { if (!is.key) return D("missing config, agent disabled!"), !1; var e = t[Sa]; return e ? (D("already loaded!"), !1) : this }, m(Js, C.prototype);
    var Ks = new $t;
    Ks.on("send", function(t, e, n, r, a) { _t(), e = e || {}, e.__r = S(), a ? a && (a = dt(a, e)) : a = Yt(t, e), r = r || b, tt({ url: a, data: n, callback: r }) });
    var Vs = [Va, Xa, $a];
    ce.prototype.end = function(t) {
        if (this.closed) return void(!this.cleared && is.debug_context_closed && console.warn("Current context is already closed"));
        if (t && (this.actionCount.ajax += t.actionCount.ajax, this.actionCount.iframe += t.actionCount.iframe, oe(this.items, t), this.updateRemain(-1, t.type)), this.isNoRemain() || this.isTimeout)
            if (this.e = S(), this.closed = !0, this.i && clearTimeout(this.i), this.e - this.s > is.event_timeout && (this.isTimeout = !0), this.setState(this.isTimeout ? li : fi), this.data && (this.data.state = this.state), this.parent) this.parent.end(this);
            else {
                var e;
                this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? e = this.composeTimeoutActionData() : this.isMeaningfulAction() && (e = this.composeActionData()), e && (this.eventData = e, !this.crossPage || e.type !== Va && e.type !== $a ? this.speBinded ? null == this.spe ? (this.waitingSpeEnd = !0, this.waitingSpeTimer = w(function() { this.waitingSpeEnd = !1, this.send() }, So)) : (this.buildEventDataWithSpe(), this.send()) : this.send() : (ls.cpRemain[e.type]--, R() && ls.tryEndCpActionsFailed && re())), ls.context = null
            }
    }, ce.prototype.isNoRemain = function(t) { var e = !0; return i(this.remain, function(n) { var r = n.current <= 0 && (t ? !0 : n.children <= 0); return r ? void 0 : (e = !1, !1) }), e }, ce.prototype.clear = function() { this.closed = !0, this.cleared = !0, this.i && clearTimeout(this.i) }, ce.prototype.isMeaningfulAction = function() { return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 }, ce.prototype.isRemainMeaningfulAction = function() { return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0 }, ce.prototype.timeout = function() { this.isTimeout = !0, this.setState(li), this.end(null, !0) }, ce.prototype.setData = function(t) { this.data = t }, ce.prototype.composeActionData = function() { return { type: this.type, subType: this.subType, start: this.s, end: this.e, duration: this.e - this.s > 0 ? this.e - this.s : 0, data: m({}, this.data || {}, { items: (this.items || []).slice() }) } }, ce.prototype.composeTimeoutActionData = function() { return this.collectActionDataFromTop(), this.composeActionData() }, ce.prototype.collectActionDataFromTop = function(t) { null == t && (t = this), se(t.items, t.children) }, ce.prototype.collectCrossPageData = function(t) { if (t || (t = []), this.crossPage = !0, this.data && (this.data.crossPage = !0), t.unshift(this.data), this.parent) return this.parent.collectCrossPageData(t); var e = { type: this.type, subType: this.subType, start: this.s }; return (this.isNoRemain() || 1 === this.children.length) && this.clear(), { action: e, data: t, url: Yt("/action"), commonActionInfo: Qt(), fromUrl: document.URL } }, ce.prototype.canEnd = function() { return !this.closed && this.isNoRemain(!0) }, ce.prototype.updateRemain = function(t, e) {
        if (this.remain[e]) {
            e || (e = Va);
            var n = t || 0;
            this.remain[e].current = this.remain[e].current + n;
            for (var r = this.parent; r;) r.remain[e].children = r.remain[e].children + n, r = r.parent
        }
    }, ce.prototype.setState = function(t) { return this.stateChanged ? !1 : (this.state = t, this.stateChanged = !0, !0) }, ce.prototype.current = function() { return ls.context }, ce.prototype.buildEventDataWithSpe = function() {
        if (this.spe && this.eventData && this.eventData.data) {
            var t = this.spe.xhrs;
            this.spe.hasAjax = t && t.length > 0, delete this.spe.xhrs, this.eventData.data.spe = this.spe
        }
    }, ce.prototype.setSpe = function(t) { return t ? (this.spe = t, this.waitingSpeEnd && (this.buildEventDataWithSpe(), this.send(), clearTimeout(this.waitingSpeTimer)), this.sent) : void 0 }, ce.prototype.send = function() {
        if (!this.sent) {
            var t = {};
            null != this.spe && this.speBinded && (t.query = { ss: 1 }, this.spe.type === uo && (t.query.rs = 1)), te(this.eventData, t), this.sent = !0
        }
    }, ce.prototype.removeFromParent = function() {
        if (this.parent) {
            var t = this.parent.children.indexOf(this);
            t > -1 && this.parent.children.splice(t, 1);
            var e = this.parent.items.indexOf(this.data);
            e > -1 && this.parent.items.splice(e, 1), this.parent.updateRemain(-1, this.type), this.parent.end()
        }
    }, ce.createEvent = function(t, e, n, r, a, i) { return new ce(t, e, n || "event", r || null, a, i) }, ce.buildImmediateAction = function(t, e, n, r) { r = r || {}; var a = m({ type: t, subType: e, state: ci, data: n }, r.actionOptions || {}); return a.data && (a.data.state = a.state), r.notSend || te(a, r.sendOptions), a }, ce.getEventRootContext = function(t) {
        if (!t) return null;
        for (; t;) {
            if (t.type === Ka && null == t.parent) return t;
            t = t.parent
        }
        return null
    }, ce.prototype.toJSON = function() {};
    var Xs, $s = [Bi, Ui],
        Qs = 1,
        Zs = 2;
    Xs = String.prototype.trim ? String.prototype.trim : function() { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") };
    var tc = [Bi, Ui],
        ec = Qi,
        nc = Lo,
        rc = [],
        ac = null;
    _e.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    var ic = {},
        oc = {},
        sc = qe.prototype;
    sc.fail = sc.end = sc.store = b;
    var cc = He.prototype;
    cc.end = cc.finish = cc.fail = null, cc.send = function(t) {
        this.sent = !0;
        var e = this.getEventData(t),
            n = this.timeout || oo;
        (is.collect_hash_no_ajax || !(e.debugInfo && e.debugInfo.api === Eo || e.type === uo && e.key.indexOf("#") > -1) || 0 !== e.xhrs.length) && (e.duration >= n || je(e))
    }, cc.getEventData = function(t) {
        var e = this,
            n = t.event && t.event.xhrs || [];
        i(n, function(t) { t.startSpeOffset = t.start - e.s });
        var r = { key: e.key, start: e.s, duration: e.e - e.s, status: e.status, type: e.type, xhrs: n };
        return this.debugInfo && (r.debugInfo = this.debugInfo), r
    }, cc.refreshEventAndStore = function(t) {
        this.finish();
        var e = this.getEventData(t);
        Ts(ao, Xr(e))
    };
    var uc = as.debuggable,
        fc = { start: e, e: {}, an: { count: 0 }, visible: [] };
    ! function() {
        if (as.debuggable) {
            var t, e, n = "visibilitychange";
            na(Xo.hidden) ? na(Xo.msHidden) ? na(Xo.webkitHidden) || (t = "webkitHidden", e = "webkit" + n) : (t = "msHidden", e = "ms" + n) : (t = "hidden", e = n), na(Xo.addEventListener) || na(Xo[t]) || ca(Xo, e, We(function() { fc.visible.push([Xo[t], S()]) }))
        }
    }();
    var lc = null,
        dc = new C,
        pc = { lifecycle: ["preInit", "init"], action: ["ajax", "error"] },
        hc = "default",
        mc = {},
        vc = 1e4,
        gc = 0,
        yc = "report",
        xc = "error";
    nn.prototype = { add: function(t, e) { this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++) }, get: function(t) { return this.c[t] }, reset: function() { this.c = {}, this.len = 0 } };
    var _c = new nn(100),
        bc = {},
        Sc = {};
    on.prototype = {
        increase: function() { this.recordFileName(), this.count++ },
        recordFileName: function() {
            var t = this.filename || "_";
            this.fep += Sc[t] ? 0 : 1, Sc[t] = !0
        },
        fix: function() {
            var t = this,
                e = t.stack;
            if (e && $r(e)) {
                e = e.split(/\n/);
                var n = [];
                i(e, function(t, e) {-1 == t.indexOf(Ca) && n.push(t) }), t.stack = n.join("\n")
            }
        },
        getErrorOverview: function() { var t = this; return { id: t.id, o: t.time, e: t.msg, l: t.lineno, c: t.colno, r: t.filename, ec: t.count, s: t.stack, m: t.module, ep: t.ep, fep: t.fep, tr: t.trigger } },
        toObject: function() {
            var t = this.getErrorOverview(),
                e = {};
            return i(this.trace, function(t, n) { e[n] = zt({ time: t.time }, t.scope) }), t.trace = e, t
        },
        setAndGetTrace: function(t) { var e = la(); return this.trace[e] = { time: S(), scope: new Mt({ contexts: t }) }, e },
        triggerActionHook: function(t) { en({ type: Uo, name: Go, args: { target: this.error, actionData: m(this.getErrorOverview(), { id: t }) }, scope: this.trace[t].scope }) }
    };
    var Ec = {
            mainVersion: Vi,
            version: "3.2.2",
            key: is.key,
            pvid: as.pvid,
            DIAGNOSE_HREF: Ea,
            diagnose: I,
            createEvent: Ue,
            logFirstScreen: pn,
            addExcludedDomain: hn,
            globalStart: e,
            currentAgent: Ks,
            mark: Ye,
            wrapVueRouter: ze,
            endSession: gt,
            setUid: Tt,
            createAutoEvent: Ue,
            endStoreEvent: Be,
            captureException: ln,
            setDid: Ct,
            addHook: Qe,
            addLifeCycleHook: Ze,
            addActionHook: tn,
            setContext: Ut,
            setExtraContext: Ft
        },
        Tc = 0,
        Cc = "{0} not support",
        wc = function() { try { var e = la(); return t.localStorage.setItem(e, e), t.localStorage.removeItem(e), !0 } catch (n) { return !1 } }(),
        Ac = {};
    Ac.localStorage = wc,
        function() {
            function e() {
                var e, f, l = Xo.documentElement;
                l.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = o = !0, t.getComputedStyle && (f = t.getComputedStyle(u), n = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, a = "4px" === (f || { width: "4px" }).width, u.style.marginRight = "50%", r = "4px" === (f || { marginRight: "4px" }).marginRight, e = u.appendChild(Xo.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", i = 0 === u.getClientRects().length, i && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === e[0].offsetHeight, i && (e[0].style.display = "", e[1].style.display = "none", i = 0 === e[0].offsetHeight)), l.removeChild(c)
            }
            var n, r, a, i, o, s, c = (Xo.documentElement, Xo.createElement("div")),
                u = Xo.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", Ac.opacity = "0.5" === u.style.opacity, Ac.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", Ac.clearCloneStyle = "content-box" === u.style.backgroundClip, c = Xo.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), Ac.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, Ac.reliableHiddenOffsets = function() { return null == n && e(), i })
        }();
    var Rc = 0,
        Dc = 1,
        Pc = 2,
        Nc = 3,
        Ic = 0,
        kc = 1,
        Oc = 2,
        jc = 0,
        qc = 1,
        Hc = 2,
        Lc = 3,
        Mc = 0,
        Bc = /(msie|trident)/i.test(Zo.userAgent),
        Uc = Xo.createElement("a"),
        Fc = Mn(Qo.href),
        zc = "onload",
        Yc = 0,
        Gc = { error: 990, abort: 905, timeout: 903 },
        Wc = _a + ga,
        Jc = 0,
        Kc = Ni,
        Vc = {},
        Xc = 0,
        $c = "load",
        Qc = "reload",
        Zc = 0,
        tu = null,
        eu = [Co, wo],
        nu = Kr();
    return nu
}(window, +new Date);
window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { id: 'QPo-y6LCVc8', bizId_rule: [], opt_param_rule: [], x_server_switch: true, request_param_keys: [], ignore_err: false, filter_robot: true,apm_headers: ['ceshi2', 'ceshi1'], router_enable: 1, beacon: '10.128.2.95:8588', beacon_err: '10.128.2.95:8588', key: 'Unxw86mCg9g', token: '4359216d7bcf44f4b5bba397dcb4bee7', trace_threshold: 2022, fp_threshold: 403, fs_threshold: 822, dr_threshold: 603 }; }); /*TY_AGENT_END*/