/*AGENT_VERSION=3.2.1*/
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

    function u(t) {
        switch (_typeof(t)) {
            case "object":
                if (!t) return null;
                if (t instanceof Array) { var e = Wr.call(t); return i(e, function(t, n) { e[n] = u(t) }), "[" + e.join(",") + "]" }
                if (t instanceof Date) return t.getTime().toString();
                var n = "";
                return i(t, function(t, e) { Fr(t) || (n += u(e) + ":" + u(t) + ",") }), n && (n = n.substr(0, n.length - 1)), "{" + n + "}";
            case "string":
                return Jr + t.replace(Kr, "\\$1").replace(Vr, "\\n") + Jr;
            case "number":
                return isNaN(t) ? null : t;
            case "boolean":
                return t;
            case "function":
                return u(t.toString());
            case "undefined":
            default:
                return '"undefined"'
        }
    }

    function c(t) { return t && Br(t) ? Lr(t) : t }

    function f(t, e, n, r) { return t.addEventListener(e, n, r) }

    function l(t, e, n) { return t.attachEvent("on" + e, n) }

    function d(t, e) { return Function.prototype.apply.apply(t, e) }

    function p(t, e) { return function() { t.apply(e, arguments) } }

    function h(t) { return Qr ? Qr(t) : t }

    function m(t) { var e = arguments.length; if (2 > e || !t) return t; var n = Wr.call(arguments, 1); return i(n, function(e) { i(e, function(e, n) { t[n] = e }) }), t }

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

    function S() { var t = window && window.performance; return t && t.timing && t.timing.navigationStart && t.now ? Math.round(t.timing.navigationStart + t.now()) : +new Date }

    function E(t) {
        return function() {
            if (null !== t) {
                var e = t;
                t = null, e.apply(this, arguments)
            }
        }
    }

    function T(e) { return e ? Br(e) ? e.length : t.ArrayBuffer && e instanceof ArrayBuffer ? e.byteLength : t.Blob && e instanceof Blob ? e.size : e.length ? e.length : 0 : 0 }

    function C() { this.events = {} }

    function A(t, e) { return setTimeout(t, e || 0, { __ty_ignore: !0 }) }

    function w(t, e) { Yo[t] = e }

    function R() { return 0 === Go.cpRemain.ajax && 0 === Go.cpRemain.iframe }

    function D(t) { N(t, Wo) }

    function P(t) { N(t, Jo) }

    function N(t, e) { var n = "ok"; return t ? void e.push(t) : n = e.length ? e.join("\n") : n }

    function I(t) {
        function e(t, e, r) {
            var a = r || "log",
                i = n[t] || (n[t] = {});
            i[a] = i[a] || "", i[a] += e
        }
        var n = {},
            r = D();
        if (e("Status", r, "ok" !== r), e("Debug", P()), i(Ko, function(t, n) { e("Timeline", n + ": " + t.toString()) }), !t && Vo) console.log("[TingYun Agent Diagnosis]\n"), i(n, function(t, e) {
            var n = console[e];
            i(n, function(t, e) { console[e](t) })
        });
        else {
            if (t !== da) return Mr(n);
            Io.href = Io.href + "#" + Mr(n)
        }
    }

    function O(t, e) { this.flags = 0, Fr(t.create) && (this.create = t.create, this.flags |= Xo), Fr(t.before) && (this.before = t.before, this.flags |= $o), Fr(t.after) && (this.after = t.after, this.flags |= Qo), Fr(t.error) && (this.error = t.error, this.flags |= Zo), this.data = e }

    function k(t, e) { if (!es) { if (!zr(t) || !t) throw new TypeError("callbacks arguments must be an object"); return es = new O(t, e) } }

    function j(t) {
        var e = es.data;
        if (0 !== (es.flags & Xo)) {
            var n = es.create(es.data);
            void 0 !== n && (e = n)
        }
        return function r() {
            0 !== (es.flags & $o) && es.before(this, e);
            var n = r;
            n._ && (n._ = 1);
            try { var a = t.apply(this, arguments) } catch (i) { throw 0 !== (es.flags & Zo) && es.error(e, i), i }
            return 0 !== (es.flags & Qo) && es.after(this, e), a
        }
    }

    function q(t) { return function() { var e; try { e = t.apply(this, arguments) } finally { Go.context = null } return e } }

    function H(t) { return !es || es.flags <= 0 ? t : j(t) }

    function L(t) { return q(H(t)) }

    function M(t, e, n) { if (t && n && Fr(n)) { var r = t[e]; if (!r || !r._wrapped) { var a = n(r, e); return a && (a._wrapped = !0), t[e] = a, a } } }

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

    function z() { return os || (ns = F(), os = !0), ns }

    function Y(t) { try { return c(t) } catch (e) { D(e && e.message) } return null }

    function G() { return ps }

    function W(t) { return Br(t) || (t = Mr(t)), t }

    function J(t, e) {
        e = e || b;
        var n = new Image;
        $r(n, oa, function() {
            ("loaded" == n.readyState || 4 == n.readyState) && e(null)
        }, !1), $r(n, na, function() { e(null) }, !1), $r(n, ea, function() { e(ea) }, !1), n.src = t
    }

    function K(t, e) {
        var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = new XDomainRequest;
        i[pa] = !0, i.open(ms, n), i.onload = function() { a(null, i.responseText), e() }, i.onerror = function(t) { a(t), e() }, hs(function() { i.send(W(r)) })
    }

    function V(t, e) {
        var n = t.url,
            r = t.data,
            a = t.header,
            i = t.callback,
            o = E(i),
            s = new No;
        s[pa] = !0, s.overrideMimeType && s.overrideMimeType("text/html"), s.onreadystatechange = function() { 4 == s.readyState && 200 == s.status && (o(null, s.responseText), e()) }, s.onerror = function() { o(), e() };
        try {
            s.open(ms, n, !0);
            for (var u in a) s.setRequestHeader(u, a[u]);
            s.send(W(r))
        } catch (c) { e() }
    }

    function X(t, e) {
        var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = Oo.sendBeacon(n, W(r));
        i && (a && a(), e())
    }

    function $(t) { this.size = t || 100, this.queue = [], this.running = !1 }

    function Q() { vs = fs = V, gs = !1 }

    function Z(t) { ls = new $(t) }

    function tt(t) { ls.add(t) }

    function et(t) {
        var e = t || new Date,
            n = e.getFullYear() + "-",
            r = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
            a = e.getDate() + " ";
        return n + r + a
    }

    function nt(t, e, n) {
        if (null == t[e] || Ur(t[e])) Ur(t[e]) ? t[e].push(n) : t[e] = n;
        else {
            var r = t[e];
            t[e] = [r], t[e].push(n)
        }
    }

    function rt(t) { return t.send_protocol ? t.send_protocol : xs !== bs && /^https/i.test(t && t.protocol || xs) ? "https:" : bs }

    function at(t) { if (!t || !Br(t)) return ""; var e, n = t.indexOf("?"); return n >= 0 && (e = t.substring(n + 1)), e }

    function it(t) {
        var e = at(t),
            n = ct(e);
        return { queryObj: n, queryString: e }
    }

    function ot(t) { var e = at(t); return ct(e) }

    function st(t) { return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? ot(t) : {} }

    function ut(t) { var e = {}; return t = t || "", Br(t) && t ? e = ct(t) : e }

    function ct(t) {
        var e = {};
        return t && i(t.split("&"), function(t) {
            var n = t.split("="),
                r = ft(n[0]),
                a = ft(n[1]);
            if (Br(a)) {
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

    function pt(t, e, n) { var r = null; return t && e && (r = _s + "//" + t + e, n && (r += "?" + lt(n))), r }

    function ht(t) { _s = rt(t) }

    function mt() { var t = rs(zi); return t ? t.split(Wi) : null }

    function vt(t) { t && 3 === t.length && as(zi, t.join(Wi)) }

    function gt() {
        var t = yt();
        _t(t)
    }

    function yt() {
        var t = S(),
            e = [ta(), t, t];
        return vt(e), e
    }

    function _t(t) { t[0] && (Bo.sid = t[0]), t[1] && (Bo.__s = +t[1]) }

    function xt() {
        var t = S(),
            e = mt();
        bt(e) ? gt() : (e[2] = t, vt(e))
    }

    function bt(t) { return !t || 3 !== t.length || S() - +t[2] > Gi }

    function St() { var t = rs(Yi); return t ? t : as(Yi, ta()) }

    function Et() { return rs(Fi) }

    function Tt(t) {
        if (null != t) {
            var e = Et();
            null != e && t !== e && gt(), as(Fi, t)
        }
    }

    function Ct() {
        var t = { did: St() },
            e = Et();
        return e && (t.uid = e), t
    }

    function At(t, e) { var n; return t && (n = !0, i(t, function() { return n = !1 }, e)), !!n }

    function wt(t) {
        var e = {},
            n = {},
            r = {},
            a = {},
            i = it(t),
            o = i.queryObj,
            s = i.queryString;
        return o && (e = Rt(o, Lo.bizIdsRules[ma], Lo.bizIdsRules[ya]), n = Rt(o, Lo.customParamsRules[ma], Lo.customParamsRules[ya]), r = Rt(o, Lo.requestParamKeys[_a], Lo.requestParamKeys[xa]), a[ba] = It(o, Lo.optCustomParamRules[ba], !0)), { bizIdParams: e, params: n, requestParams: r, optCustomParams: Nt(a), operaAllParam: s }
    }

    function Rt(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, function(e) {
            var n = t[e];
            null != n && nt(r, e, n)
        }), t && n && n.length && n.length > 0 && i(n, function(e) {
            var n = Dt(wa, e),
                a = n(t);
            null != a && nt(r, e, a)
        }), r
    }

    function Dt(t, e) {
        var n = t + "." + e;
        if (Ss[n]) return Ss[n];
        var r = (e || "").split("."),
            a = "";
        e && 0 !== e.indexOf("[") && (a = ".");
        var o = t;
        i(r, function(t, e) { 0 === e && (o += a), o += t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? "['" + t + "']" : (e > 0 ? "." : "") + t });
        var s;
        try { s = new Function(t, "try{return " + o + ";}catch(e){}return null;") } catch (u) { s = b }
        return Ss[n] = s, s
    }

    function Pt(t) { return t += "", t && t.substr(0, 128) || "" }

    function Nt(t) { var e = {}; return i(t, function(t, n) { At(t) || (e[n] = t) }), e }

    function It(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, function(e) {
            var a = t[e];
            if (null != a) nt(r, e, a);
            else if (n) {
                var i = Dt(wa, e);
                a = i(t), null != a && nt(r, e, a)
            }
        }), r
    }

    function Ot(t, e, n) { n || (n = e && window[e] || Po.cookie || ""); var r = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return r ? r[3] : null }

    function kt(t, e, n, r, a) {
        var i = t + "=" + e;
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 1e3 * n), i += ";expires=" + o.toGMTString()
        }
        r && (i += ";path=" + r), (a || Po).cookie = i
    }

    function jt(t) {
        var e, n;
        if (t)
            if (0 === t.indexOf(Ia)) { var r = t.substring(Ia.length); try { n = Ts.decode(r), e = Y(n) } catch (a) {} } else { try { n = decodeURIComponent(t), e = Y(n) } catch (a) {} if (!e) try { n = decodeURIComponent(n), e = Y(n) } catch (a) { D(a && a.message) } }
        return e
    }

    function qt(t) { var e = {}; return t && zr(t) && (e.s_id = t.id, e.s_tname = t.tname, e.s_tid = t.tid, e.s_rid = t.rid, e.s_duration = t.duration, "user" in t && (e.s_user = t.user, Tt(t.user)), "bid" in t && (e.s_bid = Pt(t.bid)), "ber" in t && (e.s_ber = t.ber), "isError" in t && (e.s_isError = t.isError)), e }

    function Ht(t) {
        if (!t.agent) {
            var e = window._ty_rum;
            if (e && e.agent) t.agent = e.agent;
            else {
                var n = Ot(Da, Ra);
                n && (t.agent = jt(n), kt(Da, "", -1e3, "/"))
            }
        }
        return t.agent
    }

    function Lt(t, e) { return pt(Mo.beacon, t, Mt(e)) }

    function Mt(t) { var e = Ct(); return m({}, Bo, e, t || {}, Lo.baseInfo, us || {}) }

    function Bt(t) { return t in Mo ? Mo[t] : !0 }

    function Ut(t) { var e = {}; return i(t, function(t) { t && g(e[t.type] || [], t.key) < 0 && (e[t.type] = e[t.type] || []).push(t.key) }), e }

    function Ft(t) {
        var e = {};
        if (t) {
            var n = [So, Eo, To, Co, Ao];
            i(t.split(""), function(t, r) { e[n[r]] = "1" === t })
        }
        return e
    }

    function zt(e) {
        var n = {};
        if (Fr(e)) {
            var r = {};
            e(r), n = r.server
        } else n = e;
        t[Oa] || (t[Oa] = { hook: {} }), m(Ho.server, qo, n || {}, t[Oa].config || {}), m(Ho.appConf, { bizIdsRules: Ut(Mo.bizId_rule), customParamsRules: Ut(Mo.opt_param_rule), requestParamKeys: Ut(Mo.request_param_keys), corsDomains: Mo.cors_domains || [], optCustomParamRules: Ut(Mo.opt_custom_param_rule), ignoreNoFilePropError: Bt("ignore_err"), debuggable: Bt("debug"), sessionTimeout: Mo.session_timeout || Gi, collectAllParam: Ft(Mo.collect_all_param) }), i(Cs, function(e) { Mo[e] && (Lo.baseInfo[e] = Mo[e], t[la][e] = Mo[e]) }), m(Bo, Ct());
        var a = mt();
        if (bt(a) && (a = yt()), _t(a), Ho.server.event_timeout || (Ho.server.event_timeout = qa), Mo.appKey && Q(), Mo.apm_arms) {
            Mo.apm_headers || (Mo.apm_headers = []);
            var o = G() ? Mo.apm_headers.indexOf(ro) < 0 : g(Mo.apm_headers, ro) < 0;
            o && Mo.apm_headers.push(ro)
        }
        ht(Mo);
        var s = Ht(Ho);
        Lo.pageServerData = qt(s), Z(Mo.req_capacity)
    }

    function Yt(e) {
        try {
            var n;
            if (!e || !e.data || 0 !== e.data.indexOf("_TINGYUN")) return;
            if (n = e.data.replace("_TINGYUN", ""), Y(n)) {
                var r = Y(n);
                if ("gather" === r.type && "APM" === r.fromJS && !t[no]) {
                    jo.isGather = !0;
                    var a = e.origin,
                        i = Po.getElementsByTagName("head")[0],
                        o = Po.createElement("script");
                    o.type = "text/javascript", o.src = a + "/assets/lib/gather/path-gather.min.js?version=" + et(new Date), i.appendChild(o)
                }
            }
        } catch (s) {}
    }

    function Gt() {
        var t = this;
        t.xhrs = {}, t.errs = [], C.call(t)
    }

    function Wt() { return { optCustomParam: Go.opt_custom_param } }

    function Jt(t) { return t || (t = Wt()), "".concat(Va).concat(Mr(t)) }

    function Kt(t, e) {
        if (t) {
            e = e || {};
            var n = Vt(t);
            if (n) try {
                var r = n + Mr(t),
                    a = [r];
                a.unshift(e.commonActionInfoMessage ? e.commonActionInfoMessage : Jt());
                var i = a.join("\n"),
                    o = { ps: e.crossPage || n === Ka ? 1 : 0 };
                m(o, e.query || {}), ws.emit("send", "/action", o, i, function() { t.type === Ua && (ws.xhrs = ws.errs = null), e.cb && e.cb() }, e.url)
            } catch (s) {}
        }
    }

    function Vt(t) { var e = ""; return t.type === Ha ? e = Ya : t.type === La ? e = Ga : t.type === Ba ? e = Ja : t.type === Ma ? e = Wa : t.type === Ua ? e = Ka : t.type === za && (e = Xa), e }

    function Xt(t, e) {
        for (var n = S(), r = e.length - 1; r >= 0; r--) {
            var a = e[r];
            a.type === Ha || a.end || (a.end = n), e[r - 1] && (e[r - 1].items = [a]);
            var i = void 0;
            i = a.start && a.end && a.end - a.start > Mo.event_timeout ? ti : a.type === Ha ? e[r + 1] && e[r + 1].state || Za : Za, a.state = i
        }
        t.data = e[0], t.end = n
    }

    function $t(t) {
        var e = Go.cpParent;
        if (e) {
            if (t && (Go.recordingCpActions = !1), !R()) return void(Go.tryEndCpActionsFailed = !0);
            var n = e.action,
                r = e.data,
                a = e.commonActionInfo,
                o = e.url;
            if (n && r && 0 !== r.length) {
                var s = [];
                i(Go.cpActions, function(t) { t.data && (t.data.crossPage = !0), s.push(t.data) }), r[r.length - 1].items = s, Xt(n, r), n.data && (n.data.range = xo);
                var u = Jt(m(a || {}, { cpOptCustomParam: Go.opt_custom_param, pageParam: Mt() }));
                Kt(n, { commonActionInfoMessage: u, url: o, crossPage: !0 })
            }
        }
    }

    function Qt(t) {
        if (t) {
            var e = t.action,
                n = t.data;
            e && n && 0 !== n.length && (Xt(e, n), Kt(e))
        }
    }

    function Zt() { var t = {}; return i(Rs, function(e) { t[e] = { current: 0, children: 0 } }), t }

    function te(t, e) { i(t, function(t) { t.cid === e.id && (t.items = e.items || []) }) }

    function ee(t, e) { i(t, function(t) { i(e, function(e) { t.cid === e.id && (t.state || (t.state = e.state), t.items = e.items || []) }) }), i(e, function(t) { ee(t.items, t.children) }) }

    function ne(t, e, n, r, a, i) {
        i = i || {}, this.id = ++Go.uniqueId, this.parent = t || null, this.children = [], this.name = e || "", this.type = n || Ha, this.subType = this.type === Ha ? r || "click" : r, this.items = [], this.remain = Zt(), this.s = i.s || S(), this.e = null, this.data = a, this.state = Qa, this.crossPage = i.crossPage || !1;
        var o = this;
        null == this.parent && (this.i = A(function() { o.timeout() }, Mo.event_timeout)), this.closed = !1, this.isTimeout = !1, this.cleared = !1, this.stateChanged = !1, this.actionCount = { ajax: n === La ? 1 : 0, iframe: n === Ba ? 1 : 0 }, this.sent = !1, this.speBinded = !1, this.spe = null, this.waitingSpeEnd = !1, this.waitingSpeTimer = null, null != this.parent && this.parent.children.push(this), this.eventData = null
    }

    function re(e, n) { return function(r) { if (t[Oa].hook && t[Oa].hook.eventCb && de(r)) { var a = { originalCallback: e, eventHandlerType: n }; return t[Oa].hook.eventCb.call(this, arguments, a) } return e.apply(this, arguments) } }

    function ae(t, e, n) { return n === Ns ? re(t, e) : (t.handleEvent = re(t.handleEvent, e), t) }

    function ie(t) { return Fr(t) }

    function oe(t) { return zr(t) && Fr(t.handleEvent) }

    function se(t) { var e; return ie(t) ? e = Ns : oe(t) && (e = Is), { isValid: t && e, listenerType: e } }

    function ue(t) {
        return function() {
            var e = arguments[0],
                n = arguments[1],
                r = arguments[2],
                a = !0;
            r && zr(r) && r[Ri] && (a = !1);
            var i = se(n),
                o = i.isValid,
                s = i.listenerType;
            if (a && Ps.indexOf(e) > -1 && o) {
                var u;
                if (n[ao] && n[ao][this]) u = n[ao][this];
                else {
                    var c = ae(n, Ii, s);
                    s === Ns && (n[ao] || (n[ao] = {}, n[ao][io] = 0), n[ao][this] = { listener: c, options: arguments[2] }, n[ao][io]++, u = n[ao][this])
                }
                u && (u.listener && (arguments[1] = u.listener), u.options && (arguments[2] = u.options))
            }
            return t && t.apply(this, arguments)
        }
    }

    function ce(t) {
        return function(e, n) {
            var r;
            try { r = t && t.apply(this, arguments) } finally {
                try {
                    if (n && Ps.indexOf(e) > -1) {
                        var a = n[ao];
                        a && a[this] && a[this].listener && (null != a[this].options ? this.removeEventListener(e, a[this].listener, a[this].options) : this.removeEventListener(e, a[this].listener), a[this] = null, a[io]--, a[io] <= 0 && (n[ao] = null, delete n[ao]))
                    }
                } catch (i) {}
            }
            return r
        }
    }

    function fe() { t.EventTarget && (M(t.EventTarget.prototype, "addEventListener", function(t) { return ue(t) }), M(t.EventTarget.prototype, "removeEventListener", function(t) { return ce(t) })) }

    function le() {
        Object.getOwnPropertyDescriptor && Object.defineProperty && Ps.forEach(function(e) {
            var n = "on" + e,
                r = Object.getOwnPropertyDescriptor(t.HTMLElement.prototype, n),
                a = r.get,
                i = r.set;
            Object.defineProperty(t.HTMLElement.prototype, n, {
                get: function() { return a.apply(this, arguments) },
                set: function() {
                    var t = arguments[0];
                    t && (arguments[0] = ae(t, Oi, Ns)), i && i.apply(this, arguments)
                },
                configurable: !0,
                enumerable: !0
            })
        })
    }

    function de(e) { return e && e.target instanceof t.HTMLElement && e.currentTarget instanceof t.HTMLElement }

    function pe(t) { return Ds.call(t) }

    function he(t) { return !!t.match(he.regex) }

    function me(t) { return t && t.substr(0, 256) || "" }

    function ve(t) {
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
                    Br(s) && (s = pe(s));
                    var u = s ? s.split(" ").filter(function(t) { return pe(t) }).map(function(t) { return ".".concat(t) }).join("") : "";
                    e.unshift("".concat(i).concat(o).concat(u)), t = n, n = t.parentNode
                }; n;) r();
            return "".concat(e.join(" > ")).toLowerCase()
        } catch (a) {}
    }

    function ge(t) { return !t.isTrusted || null != t.pointerType && !t.pointerType }

    function ye(t, e, n) {
        var r = t.target,
            a = r.nodeName,
            i = r.id,
            o = r.className,
            s = r.title,
            u = r.value,
            c = r.innerText,
            f = a + i,
            l = ge(t),
            d = { type: Ha, id: i, nodeName: a, className: o, title: s, value: u, text: a === Hi ? "" : me(c), path: ve(t.target), trigger: l ? yo : go, range: _o },
            p = t[Ro];
        if (p || (p = ta(), t[Ro] = p), d.eventId = p, l) {
            var h = t.timeStamp && S();
            Hs && Math.abs(h - Hs.timestamp) <= js && (d.refId = Hs.eventId)
        } else Hs = { timestamp: t.timeStamp && S(), eventId: d.eventId };
        if (ji === a) {
            var m = t.target.getAttribute("src");
            m && !he(m) && (d.src = m)
        }
        if (qi === a) {
            var v = t.target.getAttribute("href");
            v && (d.href = v)
        }
        return d.eventHandlerType = e, ne.createEvent(null, f, Ha, t.type || Di, d, n)
    }

    function _e(t, e) { Go.context = ye(t, e) }

    function xe() {
        var t = Go.context;
        t && t.canEnd() && t.end(), Go.context = null
    }

    function be(t, e) {
        var n = e.originalCallback,
            r = e.eventHandlerType,
            a = t[0],
            i = !a || !a.target || a[wi] || !(Os.indexOf(a.type) > -1);
        if (!i) try { _e.call(this, a, r) } catch (o) {}
        var s;
        try { s = n.apply(this, t) } finally { if (!i) try { Go.context && !Go.context.canEnd() && (a[wi] = !0), xe.apply(this) } catch (o) {} }
        return s
    }

    function Se() { i(Os, function(t) { document.addEventListener(t, function(t) { qs.length >= bi && qs.shift(), qs.push(t) }, _defineProperty({ capture: !0 }, Ri, !0)) }) }

    function Ee(t) { try { return 13 === (t + "").split(".")[0].length } catch (e) {} return !1 }

    function Te(n) {
        var r = t.performance && t.performance.timing ? t.performance.timing.navigationStart : e,
            a = n.timeStamp;
        return a = a ? Ee(a) ? a : Math.round(n.timeStamp + r) : S()
    }

    function Ce(t) {
        var e = qs.filter(function(t) { return !t[wi] }),
            n = e[e.length - 1];
        if (n) { var r = Te(n); if (Math.abs(r - t) < ks) return ye(n, ki, { s: r }) }
    }

    function Ae(t) { var e = []; try { e = qs.filter(function(e) { return !e[wi] && e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName }) } catch (n) {} if (e.length > 0) { var r = e[0]; return ye(r, ki, { s: Te(r) }) } }

    function we() { Mo.inline_event_associate_threshold && (ks = Mo.inline_event_associate_threshold), Mo.script_event_associate_threshold && (js = Mo.script_event_associate_threshold), t[Oa].hook && (t[Oa].hook.eventCb = be), !t[Oa].listenerHooked && t.HTMLElement && (fe(), le()), Mo.disable_hook_inline_event || Se() }

    function Re(t) {
        var e = t,
            n = t.xhrs;
        e.hasAjax = n && n.length > 0, delete e.xhrs;
        var r = { ss: 1 };
        t.type === Qi && (r.rs = 1), ne.buildImmediateAction(Ha, Ni, { type: Ha, items: n, spe: e }, { sendOptions: { query: r } })
    }

    function De(t) {
        if (Ms[t.key]) {
            var e = Ms[t.key];
            if (delete Ms[t.key], e.speBinded) {
                var n = e.setSpe(t);
                n || (!e.isMeaningfulAction() && e.isNoRemain() ? Re(t) : A(function() { e.sent || Re(t) }, fo))
            }
        } else Re(t)
    }

    function Pe(t) { Vo && console.warn(t || "Event key required!") }

    function Ne(t) {
        t = t || {}, this.key = t.key, this.type = t.type || $i;
        var e = t.timeout || Vi;
        this.timeout = e, this.status = 1, this.remain = 0, this.xhrs = [], this.s = S(), this.e = null, this.called = this.sent = this.stored = !1, t.debugInfo && (this.debugInfo = t.debugInfo)
    }

    function Ie(t) {
        var e = null;
        e = Go.context ? ne.getEventRootContext(Go.context) : Ce(t.s), null != e && (Ms[t.key] = e, e.speBinded = !0)
    }

    function Oe(t) {
        t = t || {};
        var e = t.key;
        if (!e) return new Pe;
        if (Ls[e]) return new Pe("event " + e + " is executing");
        Ls[e] = !0;
        var n = ss.createContext();
        ss.enter(n);
        var r = new Ne(t);
        return r._end = function() {
            var t = this;
            t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n)
        }, r.end = function(t, e) { var r = this; return r.called ? void(Vo && console.warn("Event " + this.key + "has ended or failed!")) : (r.called = !0, ss.exit(n), r.status = null != t ? t : 1, void(e || r._end())) }, r.finish = function(t) { var e = this; return e.e = S(), e.i && clearTimeout(e.i), delete Ls[e.key], e }, r.fail = function() { this.end(0) }, r.store = function() { this.end(null, !0), this.refreshEventAndStore(n), this.stored = !0 }, r.i = r.timeout ? A(p(r.fail, r), r.timeout) : null, r.type === Qi && Ie(r), ss.set("event", r), r
    }

    function ke(e) {
        if (t.TINGYUN && t.TINGYUN.inited) {
            var n = rs(Ji),
                r = Y(n);
            if (r && r.start && (e = e || {}, !e.key || r.key === e.key)) {
                var a = e.timeout;
                if (a || (a = Ki), r.duration = S() - r.start, r.duration > a) return void is(Ji);
                var i = t.performance && t.performance.timing;
                if (i && i.navigationStart && (i.loadEventEnd || i.loadEventStart) && i.navigationStart - r.start >= 0) {
                    var o = { method: "GET", url: document.URL, status: 200, type: La, subType: Ua, startSpeOffset: i.navigationStart - r.start, start: i.navigationStart, __spe: 1, du: (i.loadEventEnd || i.loadEventStart) - i.navigationStart };
                    r.xhrs || (r.xhrs = []), r.xhrs.push(o)
                }
                var s = 1;
                e.status && (s = e.status === to ? 1 : 0), r.status = s, is(Ji), De(r)
            }
        }
    }

    function je(e) {
        if (!t.TINGYUN || !t.TINGYUN.inited) return new Pe("Agent is not inited!");
        e = m({}, { type: Xi }, e || {});
        var n = Oe(e);
        return e.autoEnd && A(function() { e.status && e.status === eo ? n.fail() : n.end() }, e.endDelay || Zi), n
    }

    function qe(t, e) {
        if (Ms[t]) {
            var n = Ms[t];
            n.id !== e.id && (e.speBinded = !0, Ms[t] = e)
        }
    }

    function He(e, n) {
        t.TINGYUN && t.TINGYUN.inited && (zr(n) || (n = {}), e && e.beforeEach && e.afterEach && (Mo.router_enable = !1, e.afterEach(function(e) {
            var r = e.fullPath;
            if (r = r ? t.location.origin + r : e.path) {
                var a = { key: r, type: Qi, autoEnd: !0, endDelay: co, debugInfo: { api: vo } };
                m(a, n), je(a)
            }
        })))
    }

    function Le(t, e) {
        if (t) {
            var n = t.split("_"),
                r = n[0],
                a = n[1];
            "ty" === r && a && w(a, { timestamp: S(), data: e })
        }
    }

    function Me(t) { Fs && t() }

    function Be(t) { return function() { Fs && t.apply(this, arguments) } }

    function Ue() { Fs = !1 }

    function Fe() {
        var t = Po.getElementsByTagName("img");
        i(t, function(t) { t.complete || t[oo] || (t[oo] = !0, $r(t, na, function() { zo.imageResources.push({ loadTime: S(), element: t }) })) })
    }

    function ze(t) {
        var e = Po.createElement("script");
        e.type = "text/javascript";
        try { e.appendChild(Po.createTextNode(t)) } catch (n) { e.text = t }
        Po.getElementsByTagName("head")[0].appendChild(e)
    }

    function Ye(e) {
        Gs.on(na, E(function() {
            n();
            var t = S();
            Me(function() { zs.load = t }), e.loadEventEnd = t, clearInterval(Ys)
        })), i([na, ra, aa, ia], function(e) {
            $r(t, e, function(t) {
                Me(function() {
                    (zs.e[e] || (zs.e[e] = [])).push(S())
                }), Gs.emit(e, t)
            })
        });
        var n = E(function() {
            var n = S();
            if (Me(function() { zs.end = n }), e.domContentLoadedEventStart = n, G() && t.performance && t.performance.getEntriesByName) {
                if (!Po.querySelectorAll) return;
                zo.resources = zo.resources || [], i(Po.querySelectorAll("head>link,head>script"), function(t) { var e; "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && zo.resources.push(e) })
            }
        });
        if (G() && $r(Po, ua, n), $r(Po, oa, function(t) { Po.readyState === sa && n() }), (!G() || t.performance && !t.performance.getEntriesByName) && (Ys = setInterval(Fe, so)), !G()) try { ze("if(window.TINGYUN) {window.TINGYUN.".concat(uo, "=+new Date();}")) } catch (r) {}
    }

    function Ge(t) { this.limit = t, this.reset() }

    function We(t, e, n, r, a) { return String(t) + String(e) + String(n) + String(r) + String(a) }

    function Je(t, e, n, r) { return String(t) + String(e) + String(n) + String(r) }

    function Ke(t, e, n, r, a, i, o, s, u) {
        var c = this;
        c.id = t, c.time = S(), c.msg = e, c.lineno = r, c.colno = a, c.filename = n, c.count = 1, c.stack = i && i.stack || "", c.module = o, c.trigger = s || Vs, c.metaData = u, c.fix();
        var f = Je(e, r, a, o),
            l = $s[f];
        c.ep = l ? 0 : 1, $s[f] = !0, c.fep = 0, this.recordFileName()
    }

    function Ve(t) {
        var n = function(t) { var e = []; return i(t, function(t) { e.push(t.toObject()) }), e }(Xs.c);
        if (!n || !n.length) return null;
        var r = { fu: Js ? Js : Js++, os: parseInt((S() - (zo.pfStart || e)) / 1e3) };
        Fo.ulabel && (r.ulabel = Fo.ulabel), ne.buildImmediateAction(za, null, null, { actionOptions: m(r, { items: n }) }), Xs.reset()
    }

    function Xe(t, e, n, r, a, o, s) {
        if (e || !Lo.ignoreNoFilePropError) {
            var u = !1;
            if (i(Lo.domains, function(t) { return u = t.test(e), u ? !1 : void 0 }), !u) {
                var c = a && a.moduleId,
                    f = We(e, t, n, r, c),
                    l = Xs.get(f);
                l ? l.increase() : (l = new Ke(f, t, e, n, r, a, c, o, s), Xs.add(f, l), ws.errs && ws.errs.push(l))
            }
        }
    }

    function $e() {
        var e = t.onerror;
        t.onerror = function(t, n, r, a, i) { return Xe(t, n, r, a, i), Fr(e) ? e.apply(this, arguments) : void 0 }, t.onerror._ty = !0
    }

    function Qe() {
        var e = t.onerror;
        e && e._ty || $e()
    }

    function Ze(t, e) {
        if (t) {
            var n = t.message || "",
                r = t.stack,
                a = "",
                o = 0,
                s = 0;
            if (r) {
                var u = r.split(/\n/);
                i(u, function(t, e) {
                    if (t && (t = t.trim()), t && 0 === t.indexOf("at ")) {
                        var n = t.indexOf("("),
                            r = t.indexOf(")");
                        if (n && r) {
                            var i = n + 1;
                            i > r && (i = r);
                            var u = t.substring(i, r);
                            if (u) {
                                var c = u.split(":");
                                c && c.length > 2 && (a = (c.slice(0, c.length - 2) || []).join(":"), o = +c[c.length - 2], s = +c[c.length - 1])
                            }
                        }
                    }
                    return a && Yr(o) && o > 0 && Yr(s) && s > 0 ? !1 : void 0
                })
            }
            Xe(n, a, o, s, { stack: r }, Ks, e)
        }
    }

    function tn() {
        var e = Zr();
        return e ? $e() : $r(t, ea, function(e) {
            var n, r, a, i, o;
            (e instanceof t.Event || t.ErrorEvent && e instanceof t.ErrorEvent) && (n = e.message || e.error && (e.error.message || e.error.constructor.name) || "", r = e.lineno || 0, a = e.colno || 0, i = e.filename || e.error && e.error.filename || e.target && e.target.baseURI || "", i == Po.URL && (i = "#"), o = e.error), Xe(n, i, r, a, o)
        }), Gs.on([na, ra, aa, ia], function(t) { Ve() }).on(na, function() { e && hs(Qe) }), setInterval(Ve, Ws, !0)
    }

    function en(t) {
        if (t) {
            var e = Fo.firstScreenResources = Fo.firstScreenResources || [];
            Ur(t) || (t = [t]), i(t, function(t) {
                if (Br(t)) e.push(t);
                else if (Uo(t)) {
                    var n = t.src || t.href;
                    n && e.push(n)
                }
            })
        }
    }

    function nn(t) {
        Ur(t) || (t = [t]), i(t, function(t) {
            if (t) {
                if (!(t instanceof RegExp)) throw new Do("parameter's type requires RegExp");
                (Lo.domains || (Lo.domains = [])).push(t)
            }
        })
    }

    function rn() {
        if (Object.defineProperty) {
            var e = t[fa];
            e && Object.defineProperty(t, fa, { get: function() { return tu++ > 0 && t.console && console.warn("window.%s is deprecated, use window.%s instead.", fa, la), e } })
        }
    }

    function an(t) { return t.loadEventEnd || t._end }

    function on(n, r) {
        var a = 0;
        n = n || {};
        var o = n.timing;
        if (n.getEntriesByName && o) a = o.domLoading, i(zo.resources, function(t) {
            var e = n.getEntriesByName(t);
            if (1 === e.length) {
                var r = e[0].responseEnd + o.navigationStart;
                r > a && (a = r)
            }
        }), a -= o.navigationStart, r.__fp = iu;
        else if (t.TINGYUN && t.TINGYUN[uo]) {
            var s = o && o.navigationStart ? o.navigationStart : e;
            a = t.TINGYUN[uo] - s, 0 > a && (a = 0), r.__fp = ou
        } else P("fp=0"), r.__fp = su;
        return Me(function() { zs._fp = a }), Math.round(a)
    }

    function sn(n, r) {
        r = r || {};
        var a = r.timing || {},
            o = n.fp || 0;
        n.__fs = pu;
        var s = Po.createElement("img");
        if (!s.getBoundingClientRect) return n.__fs = hu, Me(function() { zs.fs = o }), o;
        var u = zo.imageResources,
            c = t.innerHeight,
            f = t.innerWidth;
        c || (c = Po.documentElement.clientHeight), f || (f = Po.documentElement.clientWidth);
        var l = [];
        u.length > 0 ? i(u, function(t) { un(t.element, c, f) && l.push(t) }) : r.getEntriesByName && i(Po.querySelectorAll("img"), function(t) { un(t, c, f) && l.push({ element: t }) });
        var d = a.navigationStart || e,
            p = (a.loadEventEnd || ws.loadEventEnd) - (a.navigationStart || e);
        return i(l, function(t) {
            if (t.loadTime) {
                var e = t.loadTime - d;
                e > o && (o = e, n.__fs = du)
            } else if (t.element && t.element.src) {
                var a = r.getEntriesByName(t.element.src);
                if (a.length) {
                    var i = a[0],
                        s = i.responseEnd;
                    i.fetchStart <= p && s > o && (o = s, n.__fs = lu)
                }
            }
        }), Math.round(o)
    }

    function un(t, e, n) { return t.src && cn(fn(t), e, n) && !ln(t) }

    function cn(e, n, r) {
        if (e) {
            var a = t.pageYOffset,
                i = e.top + (0 === a ? 0 : a || Po.scrollTop || 0) - (Po.clientTop || 0);
            if (i >= n) return !1;
            var o = e.left;
            return o >= 0 && r > o
        }
        return !1
    }

    function fn(t) { if (G()) return Fr(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0; var e; try { e = t.getBoundingClientRect ? t.getBoundingClientRect() : void 0 } catch (n) {} return e }

    function ln(t) { return ru.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : dn(t) }

    function dn(t) {
        for (; t && 1 === t.nodeType;) {
            if ("none" === pn(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function pn(t) { return t.style && t.style.display }

    function hn(t, n) {
        var r = e,
            a = 0,
            i = n && n.timing;
        return i && (r = i.navigationStart || r, a = i[ii] || i.domInteractive || i.domLoading || a), a ? t.__dr = uu : ws.domContentLoadedEventStart ? (a = ws.domContentLoadedEventStart, t.__dr = cu) : (a = ws._end, t.__dr = fu), a - r
    }

    function mn(t, e) {!t.fp || t.fp <= 0 || t.fp > t.le ? t.fp = on(e, t) : t.__fp = au }

    function vn(n, r) {
        function a(t) { return n[t] > 0 ? n[t] - s : 0 }
        var o = {},
            s = r ? r.globalStart : e,
            u = r ? r.window : t,
            c = (r ? r.agent : ws) || {};
        if (n) {
            Me(function() {
                var t = zs.t = {};
                i(n, function(e, n) { Fr(e) || (t[n] = e) }, !0)
            }), s = n.navigationStart, o = { ns: s, f: a(ei), qs: a(ni), rs: a(ri), re: a(ai), os: a(ii), oe: a(oi), oi: a(si), oc: a(ui), ls: a(ci), le: a(fi), tus: a(li), tue: a(di) };
            var f = a(pi),
                l = a(hi),
                d = a(mi),
                p = a(vi),
                h = a(gi),
                m = a(yi);
            if (o.cs = h, o.ce = m, o.ds = f, o.de = l, (p - d > 0 || p > 0) && (o.es = d, o.ee = p), 0 == o.le) {
                var v = an(c);
                o.ue = v - s
            }
            c && (c._le = o.ue || o.le);
            var g, y;
            if (n.msFirstPaint) g = n.msFirstPaint, r || Me(function() { zs.fp = "m_" + g });
            else if ((y = u.chrome) && u.chrome.loadTimes) {
                var _ = u.chrome.loadTimes();
                _ && _.firstPaintTime && (g = 1e3 * _.firstPaintTime), r || Me(function() { zs.fp = "c_" + _.firstPaintTime })
            } else c && c.firstPaint && (g = c.firstPaint, r || Me(function() { zs.fp = g }));
            g && (o.fp = Math.round(g - s), c.fp = o.fp), n[_i] ? o.sl = a(_i) : o.sl = 0
        } else o = { t: s, le: an(c) - s };
        return o.je = c && c.errs && c.errs.length || 0, o
    }

    function gn(e, n) {
        var r = vn(e, n),
            a = n ? n.window : t;
        if (!a) return {};
        mn(r, a.performance), r.dr = hn(r, a.performance), r.fs = sn(r, a.performance);
        var i = {};
        return r && (i = { f: r.f, fp: r.fp, fs: r.fs, dr: r.dr, le: r.le, je: r.je }), i
    }

    function yn(t, e) {
        if (_n()) {
            var n = { rm: {}, em: [], cpm: {} };
            e && (n.rm.res = e.res || []), t && (n.cpm = t, n.cpm.ul = Po.URL), nbsJsBridge.logJsResult(Mr(n))
        }
    }

    function _n() { return "undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult }

    function xn() { var t = 0; try { t = window.performance.timing.loadEventEnd } catch (e) {} return t > 0 }

    function bn(t, n) {
        var r = { tr: !1, tt: h(Po.title), charset: Po.characterSet };
        Fo.resources && m(r, Fo.resources), Me(function() { r.debug = zs }), Ue();
        var a = ws.errs;
        i(a, function(t, r) {
            var i = t.toObject();
            i.o = i.o - n && n.navigationStart || e, a[r] = i
        }), r.err = a;
        var o, s = "getEntriesByType";
        return t[s] ? o = t[s]("resource") : P(v(eu, [s])), o && (r.tr = !0, r.res = [], i(o, function(t) {
            function e(e) { var n = t[e]; return n > 0 ? n : 0 }
            var n = t.initiatorType,
                a = t.name,
                o = { o: e("startTime"), rt: n, n: a, f: e(ei), ds: e(pi), de: e(hi), cs: e(gi), ce: e(yi), sl: e(_i), qs: e(ni), rs: e(ri), re: e(ai), ts: t.transferSize || 0, es: t.encodedBodySize || 0 };
            if ("xmlhttprequest" === n) {
                var s = Sn(a);
                i(s, function(t, e) { 0 == e.indexOf("s_") && (o[e] = t) })
            }
            r.res.push(o)
        })), r
    }

    function Sn(t) { var e; return i(ws.xhrs, function(n, r) { return r && t.indexOf(r) > -1 ? (e = n, !1) : void 0 }), e }

    function En(t) { if (t) { var e = t.fetchStart; if (e) return e - t.navigationStart } }

    function Tn() {
        var n = {},
            r = 0,
            a = t.performance;
        a && a.getEntriesByType && i(a.getEntriesByType("mark") || [], function(t) {
            if (t && t.name && t.startTime && 0 === t.name.indexOf(ka)) {
                var e = t.name.substring(ka.length);
                e && (n[e] = Math.round(t.startTime), r += 1)
            }
        });
        var o = a && a.timing ? a.timing.navigationStart : e,
            s = t[Oa] && t[Oa].data,
            u = m({}, s || {}, Yo || {});
        return u && a && a.timing && i(u, function(t, e) { zr(t) && t.timestamp && (n[e] = t.timestamp - o, r += 1) }), r > 0 ? n : null
    }

    function Cn(t, e) { var n = m({}, t || {}, { type: Ua }); return e && (n.body = e), n }

    function An(t, e) {
        var n = Mr(t),
            r = n ? n.length : 0;
        if (r > ja && t.res && t.res.length > 0) {
            t.res = t.res.slice(0, e);
            var a = Mr(t),
                i = a ? a.length : 0;
            return i > ja ? An(t, e - 10 > 0 ? e - 10 : 0) : t
        }
        return t
    }

    function wn() {
        var e = E(function() {
            function e(t) { return t ? "1" : "0" }
            if (!Go.pfSent) {
                var n = t.performance,
                    r = !!n,
                    a = n && n.timing;
                r || P(v(eu, ["pf"]));
                var o = m(vn(a), Lo.pageServerData, Fo),
                    s = m({}, us);
                mn(s, n), s.dr = hn(s, n), s.fs = sn(s, n);
                var u = m(o, s) || {},
                    c = Tn();
                c && i(c, function(t, e) { Yr(t) && t >= 0 && (u[e] = t) });
                var f, l = "",
                    d = a ? En(a) : 0;
                i(["fp", "fs", "dr", "le"], function(t) { l += e((d ? u[t] - d : u[t]) >= Mo[t + "_threshold"]) }), r && l.indexOf("1") > -1 && (f = bn(n, a), u.ressize = !(!n || !n.getEntriesByName)), c && (f || (f = {}), f.mark = c), u.trflag = l || "0000", zo.pfStart = S(), delete u.firstScreenResources, delete u.resources;
                var p = wt(Po.URL);
                if (f || (f = { tr: !1, tt: h(Po.title), charset: Po.characterSet }), f.bizId_param = p.bizIdParams, f.opt_param = p.params, f.request_param = p.requestParams, Lo.collectAllParam[So] && p.operaAllParam && (f.opera_all_param = {}, f.opera_all_param[So] = p.operaAllParam), Go.opt_custom_param = p.optCustomParams, f) try { f = An(f, 150) } catch (g) {}
                var y = Cn(u, f),
                    _ = ne.buildImmediateAction(Ua, "", y, { notSend: Go.recordingCpActions });
                Go.recordingCpActions && (_.crossPage = !0, Go.cpActions.push(_), A(function() { $t(!0) }, mu));
                try { yn(u, f) } catch (g) {}
                Go.pfSent = !0
            }
        });
        return G() && xn() && !Go.pfSent && e(), Gs.on(na, function() {
            var t = 0;
            if (Mo.pfDelay && zr(Mo.pfDelay)) {
                var n = Tn();
                i(Mo.pfDelay, function(e, r) {
                    (!n || null == n[r]) && Yr(e) && e > t && (t = e)
                })
            }
            if (G() && Go.recordingCpActions) {
                var r = Mo.cross_page_delay ? Mo.cross_page_delay : Ai,
                    a = r - t;
                0 > a && (a = 0), mu = a
            }
            A(e, t)
        }).on([ra, aa, ia], e)
    }

    function Rn(t) { var e = t; return vu && (gu.setAttribute("href", e), e = gu.href), gu.setAttribute("href", e), { href: gu.href, protocol: gu.protocol ? gu.protocol.replace(/:$/, "") : "", host: gu.host, search: gu.search ? gu.search.replace(/^\?/, "") : "", hash: gu.hash ? gu.hash.replace(/^#/, "") : "", hostname: gu.hostname, port: gu.port, pathname: "/" === gu.pathname.charAt(0) ? gu.pathname : "/" + gu.pathname } }

    function Dn(t) { var e = !1; return Lo.corsDomains && i(Lo.corsDomains, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function Pn(t) { var e = Rn(t); return e.protocol === yu.protocol && e.host === yu.host || Dn(e.host) }

    function Nn(t, e, n) {
        var r = ta().replace(/-/g, ""),
            a = {};
        return i(e, function(e) {!e || n && n[e] || (t.setRequestHeader(e, r), a[e] = r) }), a
    }

    function In(t) { t.pcid = t.parentContext.id, t.parentContext.updateRemain(1, La), t.parentContext.items.push(t.contextData) }

    function On(t) {
        return function e(n, r) {
            var a = this,
                i = e;
            if (i._ && (i._ = 1), !a[pa]) {
                var o = a[fa] = {};
                o.method = n, o.url = r, o.id = xu++, o.jserror = !1;
                var s = ss.get("event");
                s && (o.key = s.key, s.remain++), Mn(o, Go.context), o.parentContext = o.context.parent, o.contextData = { type: La, id: o.id, cid: o.context.id, method: o.method, url: o.url, state: o.state, ignore: !1, jserror: o.jserror }, o.context && o.context.setData(o.contextData), o.parentContext && In(o), o.toJSON = function() {}
            }
            try { return t.apply(a, arguments) } catch (u) {}
            return G() ? void 0 : d(t, [a, arguments])
        }
    }

    function kn(t) {
        return function e(n, r) {
            var a = this,
                i = e;
            if (i._ && (i._ = 1), !a[pa]) {
                var o = a[fa],
                    s = $n(n, Lo.optCustomParamRules);
                jo.isGather && (o.wReqHeaderParam || (o.wReqHeaderParam = {}), o.wReqHeaderParam[n] = r), o && s && (o.reqHeaderParam || (o.reqHeaderParam = {}), o.reqHeaderParam[n] = r), o.headerRecord || (o.headerRecord = {}), o.headerRecord[n] = r
            }
            try { return t.apply(a, arguments) } catch (u) {}
            return G() ? void 0 : d(t, [a, arguments])
        }
    }

    function jn(t) {
        return function e(n) {
            var r = this,
                a = e;
            if (a._ && (a._ = 1), !r[pa]) {
                var i = r[fa];
                if (i && (i.start = S(), i.reqSize = T(n), i.requestData = n, i.contextData && (i.contextData.start = i.start)), G()) {
                    if (i.context && null == i.context.parent) {
                        var o = Ce(i.start);
                        o && (i.context.parent = o, i.parentContext = i.context.parent, In(i))
                    }!i.parentContext && Go.recordingCpActions && (i.context.crossPage = !0, Go.cpRemain.ajax++, Go.cpActions.push(i.context))
                }
                var s = ss.get("event");
                s && s.type === Qi && i.key === s.key && i.parentContext && qe(i.key, i.parentContext), zn(r);
                var u = Pn(i.url);
                if (Mo.x_server_switch && r.setRequestHeader && Mo.key && i && u) {
                    var c = nr(),
                        f = "c=B|" + Mo.key;
                    c && (f += ";x=" + c), r.setRequestHeader(Pa, f), i.xTingyunSent = !0, Mo.apm_headers && (i.apms = Nn(r, Mo.apm_headers, i.headerRecord))
                }
            }
            try { return t.apply(r, arguments) } catch (l) {}
            return G() ? void 0 : d(t, [r, arguments])
        }
    }

    function qn(t) {
        i(bu, function(e, n) {
            var r = "on" + n;
            t[r] ? M(t, r, function(r) { return function() { return Ln(t, e, n), Fr(r) ? r.apply(this, arguments) : void 0 } }) : t[r] = function() { Ln(t, e, n) }
        })
    }

    function Hn(t) { i(bu, function(e, n) { $r(t, n, function() { Ln(t, e, n) }) }) }

    function Ln(t, e, n) { t && t[fa] && (t[fa].errorCode = e, t[fa].errorEvent = n) }

    function Mn(t, e) {
        if (!t.context) {
            var n = "".concat(t.url, "-").concat(t.id);
            t.context = ne.createEvent(e, n, La)
        }
    }

    function Bn(t, e) { Go.context = t.context, Go.globalAsyncStore = t, Go.globalAjaxContext = e }

    function Un(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), t.contextData && t.context.state === ti && Mo.upload_timeout_ajax && (t.contextData.brsOnly = !0, ne.buildImmediateAction(La, "", t.contextData, { actionOptions: { state: ti } })), Go.globalAsyncStore = null, Go.globalAjaxContext = null
    }

    function Fn(t, e) {
        if (G()) {
            var n = t[_u];
            n && !t[Bi] && (M(t, _u, e), t[Bi] = !0)
        }
        var r = t[Su];
        !r || t[Bi] || r[Bi] || (M(t, Su, e), t[Bi] = !0)
    }

    function zn(t) {
        function e(e) {
            return L(function n() {
                var r = n;
                r._ && (r._ = 1), Yn(t);
                var a;
                if (Fr(e)) {
                    var i = t[fa];
                    if (i && 4 == t.readyState) {
                        var o = S();
                        Bn(i, t)
                    }
                    try { a = e.apply(this, arguments) } catch (s) { throw i && (i.jserror = !0), s }
                    i && 4 == t.readyState && (i.cbTime = S() - o)
                }
                return a
            })
        }
        Fn(t, e);
        try { G() ? Hn(t) : qn(t) } catch (n) {}
        if (!t[Bi]) {
            var r = L(function a() {
                var e = a;
                e._ && (e._ = 1), t[Bi] || 4 === t.readyState && Yn(t)
            });
            try { G() ? $r(t, oa, r) : (t[Su] = r, t[Su][Bi] = !0) } catch (n) { return }
        }
        hs(function() { Fn(t, e) })
    }

    function Yn(t) {
        var e = t[fa];
        if (e && (e.end = S(), e.readyState = t.readyState, 4 == t.readyState)) {
            delete t[Bi], Bn(e), e.status = t.status, e.text = Gn(t), e.resSize = T(e.text);
            var n = Kn(e, t),
                r = ss.get("event");
            hs(function() { e.callbackEnd || (e.callbackEnd = !0, Jn(e, n), r && r.key == e.key && (r.xhrs.push(n), 0 === --r.remain && r._end()), ws.xhrs && (ws.xhrs[e.url] = n), Un(e)) })
        }
    }

    function Gn(t) {
        var e = "";
        if ("" == t.responseType || "text" == t.responseType) e = t.responseText;
        else if (t.response) e = t.response;
        else try { e = t.responseText } catch (n) {}
        return e || ""
    }

    function Wn(t) { return t.data && "event" === t.data.type ? { text: t.data.text, path: t.data.path, src: t.data.src, value: t.data.value, href: t.data.href, title: t.data.title, nodeName: t.data.nodeName, items: t.items } : t.parent && t.parent.data && "event" === t.parent.data.type ? { text: t.parent.data.text, path: t.parent.data.path, src: t.parent.data.src, value: t.parent.data.value, href: t.parent.data.href, title: t.parent.data.title, nodeName: t.parent.data.nodeName, items: t.parent.items } : t.parent && t.parent.parent ? Wn(t.parent) : { text: "", path: "", nodeName: "", items: [] } }

    function Jn(t, e) { t && e && t.jserror && (e.jserror = t.jserror), t.errorCode && !e.err && (e.err = t.errorCode), t.cbTime && !e.cb && (e.cb = t.cbTime) }

    function Kn(e, n) {
        if (e && !e.composed) {
            var r = e.status;
            if (jo.isGather) {
                var a = Wn(e.context);
                e.wCustom = { fromJS: "agent", key: Mo.key, ajaxUrl: e.url, items: e.context.items, itemsTemp: a && a.items, id: e.id, url: document.URL, text: a && a.text, href: a && a.href, title: a && a.title, value: a && a.value, src: a && a.src, xpath: a && a.path, nodeName: a && a.nodeName, method: e.method, urlParams: st(document.URL), ajaxUrlParams: st(e.url), start: e.start, requestHeader: e.wReqHeaderParam, requestParams: e.requestData, responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"), responseBody: n.response, children: [] }, t.top && t.top.postMessage && t.top.postMessage(Mr(e.wCustom), "*"), delete e.wCustom, delete e.wReqHeaderParam
            }
            m(e.contextData, { end: e.end, du: r > 0 ? e.end - e.start : 0, cb: e.cbTime || 0, status: r, err: e.errorCode ? e.errorCode : 0, rec: e.resSize, send: e.reqSize });
            var i = e.contextData,
                o = {};
            o[Sa] = e.reqHeaderParam || {};
            var s = wt(e.url),
                u = s.bizIdParams,
                c = s.params,
                f = s.requestParams,
                l = s.optCustomParams,
                d = tr(e.requestData, Lo.bizIdsRules[ma], Lo.bizIdsRules[ya]),
                p = tr(e.requestData, Lo.customParamsRules[ma], Lo.customParamsRules[ya]),
                h = tr(e.requestData, Lo.requestParamKeys[_a], Lo.requestParamKeys[xa]);
            o[Ea] = It(er(e.requestData), Lo.optCustomParamRules[Ea], !0);
            var v = Qn(n, Lo.bizIdsRules),
                g = Qn(n, Lo.customParamsRules);
            o[Ta] = Qn(n, Lo.optCustomParamRules, Ta);
            var y = {},
                _ = {},
                x = Y(e.text);
            x && (y = Zn(x, Lo.bizIdsRules), _ = Zn(x, Lo.customParamsRules), o[Ca] = It(x, Lo.optCustomParamRules[Ca], !0)), i.bizId_param = m({}, u, d, v, y), i.opt_param = m({}, c, p, g, _), i.request_param = m({}, f, h), i.opt_custom_param = Nt(Vn(o, l));
            var b = e.xTingyunSent ? Y(Xn(n, Na)) : null;
            if (b) {
                if (i.hasServerHeader = !0, i.s_id = b.id, i.s_tname = b.tname, i.s_tid = b.tid, i.s_rid = b.rid, i.s_duration = b.duration, "user" in b) {
                    var S = b.user,
                        E = S;
                    if (null != S && 0 === S.indexOf(Ia)) { var T = S.substring(Ia.length); try { E = Ts.decode(T) } catch (C) {} }
                    i.s_user = E, Tt(E)
                }
                "bid" in b && (i.s_bid = Pt(b.bid)), "ber" in b && (i.s_ber = b.ber), "isError" in ws && (i.s_isError = b.isError)
            } else i.hasServerHeader = !1;
            e.apms && (i.apms = e.apms), e.key && (i.__spe = 1);
            var A = {};
            return Lo.collectAllParam[So] && s.operaAllParam && (A[So] = s.operaAllParam), Lo.collectAllParam[Eo] && e.headerRecord && (A[Eo] = e.headerRecord), Lo.collectAllParam[To] && e.requestData && (A[To] = e.requestData), Lo.collectAllParam[Co] && (A[Co] = n.getAllResponseHeaders()), Lo.collectAllParam[Ao] && e.text && (A[Ao] = e.text), At(A) || (i.opera_all_param = A), e.composed = !0, i
        }
    }

    function Vn(t, e) { return i(e, function(e, n) { t[n] = m({}, t[n] || {}, e || {}) }), t }

    function Xn(t, e) { if (t && t.getResponseHeader) try { return t.getResponseHeader(e) } catch (n) {} }

    function $n(t, e) { var n; return i(e[Sa], function(e) { return t === e ? (n = !0, !1) : void 0 }), n }

    function Qn(t, e, n) {
        var r = {};
        return i(e[n || va], function(e) {
            var n = Xn(t, e);
            null != n && nt(r, e, n)
        }), r
    }

    function Zn(t, e, n) {
        var r = {};
        return i(e[n || ga], function(e) {
            var n = Dt(Aa, e),
                a = n(t);
            null != a && nt(r, e, a)
        }), r
    }

    function tr(t, e, n) { return Rt(er(t), e, n) }

    function er(t) { var e = Y(t); return e || (e = ut(t)), e }

    function nr() { try { return ta().replace(/-/g, "").substring(0, 16) } catch (t) {} }

    function rr() {
        var e = No && No.prototype;
        e ? (M(e, "open", On), M(e, "setRequestHeader", kn), M(e, "send", jn)) : No && (t.XMLHttpRequest = function() { var t = new No; return M(t, "open", On), M(t, "setRequestHeader", kn), M(t, "send", jn), t })
    }

    function ar(t) { t && !t.composed && (m(t.contextData, { end: t.end || S() }), t.composed = !0) }

    function ir() { Mo.set_timeout_max_depth && Mo.set_timeout_max_depth > 0 && (Tu = Mo.set_timeout_max_depth), M(window, "setTimeout", dr), M(window, "clearTimeout", pr) }

    function or(t) { t.context || (t.context = ne.createEvent(Go.context, "".concat(t.name, "-").concat(t.id), Ma, t.name)) }

    function sr(t) { Go.context = t.context, Go.globalAsyncStore = t }

    function ur(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), Go.globalAsyncStore = null
    }

    function cr(t) { for (var e = 0; null != t && 5 > e;) e += t.type === Ma ? 1 : 0, t = t.parent; return 5 > e }

    function fr(t) { return function() { return H(t).apply(this, arguments) } }

    function lr(t, e, n, r) {
        var a = null,
            i = null;
        return zr(r) && r[Mi] || null == Go.context ? i = fr(t) : cr(Go.context) ? (a = { id: Eu++, name: e, start: S(), delay: n, parentContext: Go.context }, or(a), a.contextData = { type: Ma, id: a.id, cid: a.context.id, name: a.name, start: a.start, delay: a.delay }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, Ma), a.parentContext.items.push(a.contextData)), i = L(function() { var e; try { sr(a) } catch (n) {} try { t && (e = t.apply(this, arguments)) } finally { try { a.end = S(), ar(a), ur(a) } catch (n) {} } return e })) : i = fr(t), { store: a, cb: i }
    }

    function dr(t, e) {
        return function(n) {
            var r = Wr.call(arguments, 0),
                a = null;
            if (!arguments[2] && Fr(n)) {
                var i = lr(n, e, r[1], r[2]);
                i.cb && (r[0] = i.cb), a = i.store
            }
            var o = t.apply(this, r);
            return a && (Cu[o] = a), o
        }
    }

    function pr(t) {
        return function(e) {
            try {
                var n = Cu[e];
                n && n.context && (n.context.removeFromParent(), Cu[e] = null)
            } catch (r) {}
            return t.apply(this, arguments)
        }
    }

    function hr(t) { m(t.contextData, { pvid: t.pvid, end: t.end, url: t.url }, t.serverData || {}, t.pfData || {}) }

    function mr(t) { t.context || (t.context = ne.createEvent(t.parentContext, "".concat(t.src, "-").concat(t.id), Ba)) }

    function vr(t, e, n) {
        function r() {
            if (a.end = S(), a.sameOrigin && this && this.contentDocument && this.contentWindow) {
                a.sameOrigin = !0, a.url = this.contentDocument.URL;
                var e = Ot(Da, Ra, this.contentWindow[Ra] || this.contentDocument.cookie || "");
                if (e) {
                    var n = jt(e);
                    kt(Da, "", -1e3, "/", this.contentDocument), a.serverData = qt(n)
                }
                var i = this.contentWindow[la],
                    o = this.contentWindow.performance && this.contentWindow.performance.timing,
                    s = { window: this.contentWindow, globalStart: i ? i.globalStart : o.navigationStart, agent: m({}, i && i.currentAgent ? i.currentAgent : {}) };
                i && (a.pvid = i.pvid || "");
                var u;
                try { u = gn(o, s) } catch (c) { u = {} }
                a.pfData = u, a.pfData.le && (a.end = o.navigationStart + a.pfData.le)
            } else a.sameOrigin = !1;
            hr(a), gr(a), t.removeEventListener("load", r)
        }
        if (t) {
            n || (n = t.src ? Ru : wu);
            var a = { id: Au++, src: e, loadType: n, start: S(), parentContext: Go.context };
            a.sameOrigin = Pn(a.src), mr(a), a.contextData = { type: Ba, loadType: a.loadType, id: a.id, cid: a.context.id, src: a.src, start: a.start, sameOrigin: a.sameOrigin }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, Ba), a.parentContext.items.push(a.contextData)), !a.parentContext && Go.recordingCpActions && (a.context.crossPage = !0, Go.cpRemain.iframe++, Go.cpActions.push(a.context)), t.addEventListener("load", r)
        }
    }

    function gr(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), Go.context = null
    }

    function yr() {
        function t(t) { return function(e) { return "IFRAME" === e.nodeName && e.src && vr(e, e.src, wu), t.apply(this, arguments) } }
        M(Node.prototype, "appendChild", t), M(Node.prototype, "insertBefore", t)
    }

    function _r() {
        function t() {
            var t = arguments[0],
                e = this;
            return vr(e, t), r.apply(this, arguments)
        }
        if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
            var e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src"),
                n = e.get,
                r = e.set;
            Object.defineProperty(HTMLIFrameElement.prototype, "src", { get: function() { return n.apply(this, arguments) }, set: t, enumerable: !0, configurable: !0 })
        }
    }

    function xr() { yr(), _r() }

    function br(t) { as(Si, Mr(t)) }

    function Sr(t) {
        var e = Du++,
            n = t.url || "",
            r = S(),
            a = ne.createEvent(Go.context, "".concat(n, "-").concat(e), Fa, t.subType || Ei),
            i = { type: Fa, subType: a.subType, id: e, cid: a.id, url: n, start: r };
        a && a.setData(i);
        var o;
        return a.parent && (a.parent.type === La ? Kn(Go.globalAsyncStore, Go.globalAjaxContext) : a.parent.type === Ma && ar(Go.globalAsyncStore), o = a.collectCrossPageData(), Pu = o, t.delayStorage || br(o), a.clear(), a = null), { storageData: o, context: a }
    }

    function Er(t) {
        return function() {
            var e = arguments[0],
                n = Sr({ url: e, delayStorage: !0 }),
                r = n.storageData,
                a = n.context;
            try {
                var i = t.apply(this, arguments);
                if (i) {
                    if (!r && a) {
                        var o = Ce(a.data.start);
                        o && (a.parent = o, r = a.collectCrossPageData(), Pu = r, a.clear(), a = null)
                    }
                    br(r)
                }
                return i
            } catch (s) {}
            return G() ? void 0 : d(t, [this, arguments])
        }
    }

    function Tr() { M(t, "open", Er) }

    function Cr() {
        function t(t) { return { valid: qi === t.target.nodeName && !t.defaultPrevented && t.target.href, url: t.target.href, subType: Ti } }

        function e(t) { return { valid: Hi === t.target.nodeName && !t.defaultPrevented && t.target.action, url: t.target.action, subType: Ci } }
        i([Di, Pi], function(n) {
            Po.addEventListener(n, function(r) {
                if (r) {
                    var a = n === Di ? t(r) : e(r);
                    if (a.valid) {
                        var i = r.timeStamp ? Ae(r) : Ce(Te(r));
                        i && (Go.context = i, Sr({ subType: a.subType, url: a.url }), Go.context = null)
                    }
                }
            }, _defineProperty({}, Ri, !0))
        })
    }

    function Ar() { Qt(Pu), Pu = null }

    function wr() { $r(Po, bo, function() { "hidden" === Po.visibilityState && Ar() }), $r(t, ia, function() { Ar() }) }

    function Rr() { Tr(), Cr(), wr() }

    function Dr() { Mo.disable_hook_event || we(), Mo.disable_hook_timer || ir(), Mo.disable_hook_iframe || xr(), Mo.disable_hook_cross_page || Rr() }

    function Pr(t, e) { t && Mo.router_enable && je({ key: t, autoEnd: !0, endDelay: Mo.router_event_delay || co, type: Qi, debugInfo: { api: e } }) }

    function Nr() {
        Nu.forEach(function(e) {
            M(t.history, e, function(n) {
                return function(r, a, i) {
                    var o;
                    o = n.apply(this, arguments);
                    try { Pr(t.location.href, e) } catch (s) {}
                    return o
                }
            })
        }), $r(t, po, function() { Pr(t.location.href, po) })
    }

    function Ir() { $r(t, lo, function() { Pr(t.location.href, lo) }) }

    function Or() {
        var e = t.history;
        e ? Nr() : Ir()
    }

    function kr() { Mo.router_enable && Or() }

    function jr() {
        if (G()) try { $r(t, "message", Yt) } catch (e) {}
        if (Ye(ws), G() && Dr(), wn(), rr(), tn(), kr(), ws._end = S(), Me(function() { zs._end = ws._end }), rn(), G()) {
            var n = Y(rs(Si));
            n && n.fromUrl && Po.referrer && n.fromUrl.indexOf(Po.referrer) > -1 && (Go.recordingCpActions = !0, Go.cpParent = n), is(Si)
        }
    }

    function qr(e) { t[la] && t[la].inited || e && (Fr(e) || zr(e)) && (zt(e), (Mo.key || Mo.appKey) && (jr(), t[la].inited = !0)) }

    function Hr() { return window[la] && 3 === window[la].mainVersion ? window[la] : (Zs.init = qr, Zs) }
    var Lr, Mr, Br = o("String"),
        Ur = o("Array"),
        Fr = o("Function"),
        zr = o("Object"),
        Yr = o("Number"),
        Gr = o("Undefined"),
        Wr = [].slice,
        Jr = '"',
        Kr = /([\"\\])/g,
        Vr = /\n/g,
        Xr = t.JSON;
    Xr && Xr.parse && Xr.stringify ? (Lr = n, Mr = r) : (Lr = s, Mr = u);
    var $r;
    $r = t.addEventListener ? f : l;
    var Qr = t.encodeURIComponent,
        Zr = function() { return !document.addEventListener },
        ta = (t.location.protocol, function() {
            function t(t) { return 0 > t ? NaN : 30 >= t ? 0 | Math.random() * (1 << t) : 53 >= t ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN }

            function e(t, e) { for (var n = t.toString(16), r = e - n.length, a = "0"; r > 0; r >>>= 1, a += a) 1 & r && (n = a + n); return n }
            return function() { return e(t(32), 8) + "-" + e(t(16), 4) + "-" + e(16384 | t(12), 4) + "-" + e(32768 | t(14), 4) + "-" + e(t(48), 12) }
        }());
    C.prototype = {
        on: function(t, e) { var n = this; return Br(t) ? (n.events[t] || (n.events[t] = [])).push(e) : Ur(t) && i(t, function(t) { n.on(t, e) }), n },
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
    var ea = "error",
        na = "load",
        ra = "unload",
        aa = "beforeunload",
        ia = "pagehide",
        oa = "readystatechange",
        sa = "complete",
        ua = "DOMContentLoaded",
        ca = "on",
        fa = "_ty_rum",
        la = "TINGYUN",
        da = 2,
        pa = "__ign",
        ha = "__ty_asyncWrap__",
        ma = "2",
        va = "3",
        ga = "4",
        ya = "5",
        _a = "1",
        xa = "2",
        ba = "1",
        Sa = "2",
        Ea = "3",
        Ta = "4",
        Ca = "5",
        Aa = "body",
        wa = "reqBody",
        Ra = "TINGYUN_COOKIE_VALUE",
        Da = "TINGYUN_DATA",
        Pa = "X-Tingyun",
        Na = "X-Tingyun-Data",
        Ia = "TY_BASE64",
        Oa = "__TINGYUN",
        ka = "ty_",
        ja = 64512,
        qa = 6e4,
        Ha = "event",
        La = "ajax",
        Ma = "timer",
        Ba = "iframe",
        Ua = "pf",
        Fa = "crossPage",
        za = "jsError",
        Ya = "e",
        Ga = "a",
        Wa = "t",
        Ja = "i",
        Ka = "p",
        Va = "c",
        Xa = "j",
        $a = "finish",
        Qa = "pending",
        Za = "finish",
        ti = "timeout",
        ei = "fetchStart",
        ni = "requestStart",
        ri = "responseStart",
        ai = "responseEnd",
        ii = "domContentLoadedEventStart",
        oi = "domContentLoadedEventEnd",
        si = "domInteractive",
        ui = "domComplete",
        ci = "loadEventStart",
        fi = "loadEventEnd",
        li = "unloadEventStart",
        di = "unloadEventEnd",
        pi = "domainLookupStart",
        hi = "domainLookupEnd",
        mi = "redirectStart",
        vi = "redirectEnd",
        gi = "connectStart",
        yi = "connectEnd",
        _i = "secureConnectionStart",
        xi = 5,
        bi = 5,
        Si = "__ty_crs_page_events",
        Ei = "window_open",
        Ti = "a_link",
        Ci = "form_submit",
        Ai = 3e3,
        wi = "__ty_event_patch_tag",
        Ri = "__ty_event_patch_disable",
        Di = "click",
        Pi = "submit",
        Ni = "spe",
        Ii = "addEventListener",
        Oi = "onProperty",
        ki = "inline",
        ji = "IMG",
        qi = "A",
        Hi = "FORM",
        Li = 3,
        Mi = "__ty_ignore",
        Bi = "__ty_xhr_hooked",
        Ui = 200,
        Fi = "TY_USER_ID",
        zi = "TY_SESSION_N_ID",
        Yi = "TY_DEVICE_N_ID",
        Gi = 18e5,
        Wi = "|",
        Ji = "__TY_SPE_STORE",
        Ki = 6e4,
        Vi = 6e5,
        Xi = "auto",
        $i = "defined",
        Qi = "route",
        Zi = 500,
        to = "success",
        eo = "fail",
        no = "TY_path_gather",
        ro = "EagleEye-TraceID",
        ao = "__TY_ELEMENT_CB",
        io = "__TY_CB_COUNTER",
        oo = "__TY_IMAGE_LOAD_HOOK",
        so = 60,
        uo = "__tagFirstPaintTime",
        co = 500,
        fo = 1e4,
        lo = "hashchange",
        po = "popstate",
        ho = "pushState",
        mo = "replaceState",
        vo = "vueRouter",
        go = "normal",
        yo = "script",
        _o = "current",
        xo = "crossPage",
        bo = "visibilitychange",
        So = "URL",
        Eo = "QH",
        To = "QB",
        Co = "RH",
        Ao = "RB",
        wo = 200,
        Ro = "__TY_EVENT_ID",
        Do = t.Error,
        Po = t.document,
        No = t.XMLHttpRequest,
        Io = t.location,
        Oo = t.navigator,
        ko = t.HTMLElement,
        jo = { isGather: !1 },
        qo = { fp_threshold: 2e3, fs_threshold: 4e3, dr_threshold: 4e3 },
        Ho = { server: {}, appConf: { pvid: ta(), baseInfo: {} } },
        Lo = Ho.appConf,
        Mo = Ho.server,
        Bo = { pvid: Lo.pvid, ref: Po.URL, referrer: Po.referrer, v: "3.2.1", av: "3.2.1" },
        Uo = ko ? function(t) { return t instanceof ko } : function(t) { t && "object" === _typeof(t) && 1 === t.nodeType && Br(t.nodeName) },
        Fo = {},
        zo = { imageResources: [] },
        Yo = {},
        Go = { context: null, uniqueId: 0, actions: [], opt_custom_param: {}, unAssignedEvents: [], cpActions: [], recordingCpActions: !1, cpParent: null, cpRemain: { ajax: 0, iframe: 0 }, tryEndCpActionsFailed: !1, globalAsyncStore: null, globalAjaxContext: null, pfSent: !1, ajaxUniqueId: 0 },
        Wo = [],
        Jo = [],
        Ko = {},
        Vo = "undefined" != typeof t.console,
        Xo = 1,
        $o = 2,
        Qo = 4,
        Zo = 8,
        ts = O.prototype;
    ts.create = ts.before = ts.after = ts.error = null;
    var es;
    U.prototype = {
        createContext: function() { return Object.create ? Object.create(this.active) : B(this.active) },
        get: function(t) { return this.active ? this.active[t] : void 0 },
        set: function(t, e) { return this.active ? this.active[t] = e : void 0 },
        enter: function(t) {
            if (!t) throw new Do("context required!");
            this._set.push(this.active), this.active = t
        },
        exit: function(t) {
            if (!t) throw new Do("context required!");
            if (t === this.active) return void(this.active = this._set.pop());
            var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : y(this._set, t);
            if (0 > e) throw new Do("context not currently entered!");
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
    var ns, rs, as, is, os = !1,
        ss = z();
    rs = function(e) { try { return t.localStorage.getItem(e) } catch (n) {} }, as = function(e, n) { try { t.localStorage.setItem(e, n) } catch (r) {} return n }, is = function(e) { try { t.localStorage.removeItem(e) } catch (n) {} };
    var us = {},
        cs = t.screen;
    cs && (us.sh = cs.height, us.sw = cs.width);
    var fs, ls, ds = function() {
            var e = t.navigator.standalone,
                n = t.navigator.userAgent.toLowerCase(),
                r = /safari/.test(n),
                a = /iphone|ipod|ipad/.test(n);
            return a && !e && !r
        },
        ps = !/(MSIE [0-8].\d+)/.test(navigator.userAgent),
        hs = G() ? x : _,
        ms = "POST",
        vs = J,
        gs = !1;
    $.prototype.add = function(t) { this.queue.length >= this.size || (this.queue.push(t), this.running || (this.running = !0, this.run())) }, $.prototype.run = function() {
        var t = this,
            e = function() { t.queue.length > 0 ? t.run() : t.running = !1 };
        this.handler(this.queue.shift(), e)
    }, $.prototype.handler = function(t, e) { fs(t, E(function() { e() })) }, fs = t.XDomainRequest ? K : V, Oo.sendBeacon && (gs = !0);
    var ys = ds();
    ys && (vs = fs = V, gs = !1), fs || (fs = function(t, e) { e() }, gs = !1), $r(t, aa, function(t) { gs && (fs = X) });
    var _s, xs = t.location.protocol,
        bs = "http:",
        Ss = {},
        Es = t,
        Ts = function() {
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
                s = Es.btoa ? function(t) { return Es.btoa(t) } : function(t) { return t.replace(/[\s\S]{1,3}/g, o) },
                u = function(t) { var e = "[object Uint8Array]" === Object.prototype.toString.call(t); return e ? t.toString("base64") : s(i(String(t))) },
                c = function(t, e) { return e ? u(String(t)).replace(/[+\/]/g, function(t) { return "+" == t ? "-" : "_" }).replace(/=/g, "") : u(t) },
                f = function(t) { return c(t, !0) },
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
                m = Es.atob ? function(t) { return Es.atob(t) } : function(t) { return t.replace(/\S{1,4}/g, h) },
                v = function(t) { return m(String(t).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                g = function(t) { return p(m(t)) },
                y = function(t) { return g(String(t).replace(/[-_]/g, function(t) { return "-" == t ? "+" : "/" }).replace(/[^A-Za-z0-9\+\/]/g, "")) };
            return { atob: v, btoa: s, utob: i, encode: c, encodeURI: f, btou: p, decode: y }
        }(),
        Cs = ["id", "key", "appKey", "token"],
        As = Gt.prototype;
    As.start = function() { if (!Mo.key) return D("missing config, agent disabled!"), !1; var e = t[la]; return e ? (D("already loaded!"), !1) : this }, m(As, C.prototype);
    var ws = new Gt;
    ws.on("send", function(t, e, n, r, a) { xt(), e = e || {}, e.__r = S(), a ? a && (a = dt(a, e)) : a = Lt(t, e), r = r || b, tt({ url: a, data: n, callback: r }) });
    var Rs = [La, Ma, Ba];
    ne.prototype.end = function(t) {
        if (this.closed) return void(!this.cleared && Mo.debug_context_closed && console.warn("Current context is already closed"));
        if (t && (this.actionCount.ajax += t.actionCount.ajax, this.actionCount.iframe += t.actionCount.iframe, te(this.items, t), this.updateRemain(-1, t.type)), this.isNoRemain() || this.isTimeout)
            if (this.e = S(), this.closed = !0, this.i && clearTimeout(this.i), this.e - this.s > Mo.event_timeout && (this.isTimeout = !0), this.setState(this.isTimeout ? ti : Za), this.data && (this.data.state = this.state), this.parent) this.parent.end(this);
            else {
                var e;
                this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? e = this.composeTimeoutActionData() : this.isMeaningfulAction() && (e = this.composeActionData()), e && (this.eventData = e, !this.crossPage || e.type !== La && e.type !== Ba ? this.speBinded ? null == this.spe ? (this.waitingSpeEnd = !0, this.waitingSpeTimer = A(function() { this.waitingSpeEnd = !1, this.send() }, fo)) : (this.buildEventDataWithSpe(), this.send()) : this.send() : (Go.cpRemain[e.type]--, R() && Go.tryEndCpActionsFailed && $t())), Go.context = null
            }
    }, ne.prototype.isNoRemain = function(t) { var e = !0; return i(this.remain, function(n) { var r = n.current <= 0 && (t ? !0 : n.children <= 0); return r ? void 0 : (e = !1, !1) }), e }, ne.prototype.clear = function() { this.closed = !0, this.cleared = !0, this.i && clearTimeout(this.i) }, ne.prototype.isMeaningfulAction = function() { return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 }, ne.prototype.isRemainMeaningfulAction = function() { return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0 }, ne.prototype.timeout = function() { this.isTimeout = !0, this.setState(ti), this.end(null, !0) }, ne.prototype.setData = function(t) { this.data = t }, ne.prototype.composeActionData = function() { return { type: this.type, subType: this.subType, start: this.s, end: this.e, duration: this.e - this.s > 0 ? this.e - this.s : 0, data: m({}, this.data || {}, { items: (this.items || []).slice() }) } }, ne.prototype.composeTimeoutActionData = function() { return this.collectActionDataFromTop(), this.composeActionData() }, ne.prototype.collectActionDataFromTop = function(t) { null == t && (t = this), ee(t.items, t.children) }, ne.prototype.collectCrossPageData = function(t) { if (t || (t = []), this.crossPage = !0, this.data && (this.data.crossPage = !0), t.unshift(this.data), this.parent) return this.parent.collectCrossPageData(t); var e = { type: this.type, subType: this.subType, start: this.s }; return (this.isNoRemain() || 1 === this.children.length) && this.clear(), { action: e, data: t, url: Lt("/action"), commonActionInfo: Wt(), fromUrl: document.URL } }, ne.prototype.canEnd = function() { return !this.closed && this.isNoRemain(!0) }, ne.prototype.updateRemain = function(t, e) {
        if (this.remain[e]) {
            e || (e = La);
            var n = t || 0;
            this.remain[e].current = this.remain[e].current + n;
            for (var r = this.parent; r;) r.remain[e].children = r.remain[e].children + n, r = r.parent
        }
    }, ne.prototype.setState = function(t) { return this.stateChanged ? !1 : (this.state = t, this.stateChanged = !0, !0) }, ne.prototype.current = function() { return Go.context }, ne.prototype.buildEventDataWithSpe = function() {
        if (this.spe && this.eventData && this.eventData.data) {
            var t = this.spe.xhrs;
            this.spe.hasAjax = t && t.length > 0, delete this.spe.xhrs, this.eventData.data.spe = this.spe
        }
    }, ne.prototype.setSpe = function(t) { return t ? (this.spe = t, this.waitingSpeEnd && (this.buildEventDataWithSpe(), this.send(), clearTimeout(this.waitingSpeTimer)), this.sent) : void 0 }, ne.prototype.send = function() {
        if (!this.sent) {
            var t = {};
            null != this.spe && this.speBinded && (t.query = { ss: 1 }, this.spe.type === Qi && (t.query.rs = 1)), Kt(this.eventData, t), this.sent = !0
        }
    }, ne.prototype.removeFromParent = function() {
        if (this.parent) {
            var t = this.parent.children.indexOf(this);
            t > -1 && this.parent.children.splice(t, 1);
            var e = this.parent.items.indexOf(this.data);
            e > -1 && this.parent.items.splice(e, 1), this.parent.updateRemain(-1, this.type), this.parent.end()
        }
    }, ne.createEvent = function(t, e, n, r, a, i) { return new ne(t, e, n || "event", r || null, a, i) }, ne.buildImmediateAction = function(t, e, n, r) { r = r || {}; var a = m({ type: t, subType: e, state: $a, data: n }, r.actionOptions || {}); return a.data && (a.data.state = a.state), r.notSend || Kt(a, r.sendOptions), a }, ne.getEventRootContext = function(t) {
        if (!t) return null;
        for (; t;) {
            if (t.type === Ha && null == t.parent) return t;
            t = t.parent
        }
        return null
    }, ne.prototype.toJSON = function() {};
    var Ds, Ps = [Di, Pi],
        Ns = 1,
        Is = 2;
    Ds = String.prototype.trim ? String.prototype.trim : function() { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") };
    var Os = [Di, Pi],
        ks = Ui,
        js = wo,
        qs = [],
        Hs = null;
    he.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    var Ls = {},
        Ms = {},
        Bs = Pe.prototype;
    Bs.fail = Bs.end = Bs.store = b;
    var Us = Ne.prototype;
    Us.end = Us.finish = Us.fail = null, Us.send = function(t) {
        this.sent = !0;
        var e = this.getEventData(t),
            n = this.timeout || Vi;
        (Mo.collect_hash_no_ajax || !(e.debugInfo && e.debugInfo.api === lo || e.type === Qi && e.key.indexOf("#") > -1) || 0 !== e.xhrs.length) && (e.duration >= n || De(e))
    }, Us.getEventData = function(t) {
        var e = this,
            n = t.event && t.event.xhrs || [];
        i(n, function(t) { t.startSpeOffset = t.start - e.s });
        var r = { key: e.key, start: e.s, duration: e.e - e.s, status: e.status, type: e.type, xhrs: n };
        return this.debugInfo && (r.debugInfo = this.debugInfo), r
    }, Us.refreshEventAndStore = function(t) {
        this.finish();
        var e = this.getEventData(t);
        as(Ji, Mr(e))
    };
    var Fs = Lo.debuggable,
        zs = { start: e, e: {}, an: { count: 0 }, visible: [] };
    ! function() {
        if (Lo.debuggable) {
            var t, e, n = "visibilitychange";
            Gr(Po.hidden) ? Gr(Po.msHidden) ? Gr(Po.webkitHidden) || (t = "webkitHidden", e = "webkit" + n) : (t = "msHidden", e = "ms" + n) : (t = "hidden", e = n), Gr(Po.addEventListener) || Gr(Po[t]) || $r(Po, e, Be(function() { zs.visible.push([Po[t], S()]) }))
        }
    }();
    var Ys = null,
        Gs = new C,
        Ws = 1e4,
        Js = 0,
        Ks = "report",
        Vs = "error";
    Ge.prototype = { add: function(t, e) { this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++) }, get: function(t) { return this.c[t] }, reset: function() { this.c = {}, this.len = 0 } };
    var Xs = new Ge(100),
        $s = {},
        Qs = {};
    Ke.prototype = {
        increase: function() { this.recordFileName(), this.count++ },
        recordFileName: function() {
            var t = this.filename || "_";
            this.fep += Qs[t] ? 0 : 1, Qs[t] = !0
        },
        fix: function() {
            var t = this,
                e = t.stack;
            if (e && Br(e)) {
                e = e.split(/\n/);
                var n = [];
                i(e, function(t, e) {-1 == t.indexOf(ha) && n.push(t) }), t.stack = n.join("\n")
            }
        },
        toObject: function() {
            var t = this,
                e = { o: t.time, e: t.msg, l: t.lineno, c: t.colno, r: t.filename, ec: t.count, s: t.stack, m: t.module, ep: t.ep, fep: t.fep, tr: t.trigger };
            return t.metaData && (e.meta = t.metaData), e
        }
    };
    var Zs = { mainVersion: Li, version: "3.2.1", key: Mo.key, pvid: Lo.pvid, DIAGNOSE_HREF: da, diagnose: I, createEvent: je, logFirstScreen: en, addExcludedDomain: nn, globalStart: e, currentAgent: ws, mark: Le, wrapVueRouter: He, endSession: gt, setUid: Tt, createAutoEvent: je, endStoreEvent: ke, captureException: Ze },
        tu = 0,
        eu = "{0} not support",
        nu = function() { try { var e = ta(); return t.localStorage.setItem(e, e), t.localStorage.removeItem(e), !0 } catch (n) { return !1 } }(),
        ru = {};
    ru.localStorage = nu,
        function() {
            function e() {
                var e, f, l = Po.documentElement;
                l.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = o = !0, t.getComputedStyle && (f = t.getComputedStyle(c), n = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, a = "4px" === (f || { width: "4px" }).width, c.style.marginRight = "50%", r = "4px" === (f || { marginRight: "4px" }).marginRight, e = c.appendChild(Po.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", i = 0 === c.getClientRects().length, i && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === e[0].offsetHeight, i && (e[0].style.display = "", e[1].style.display = "none", i = 0 === e[0].offsetHeight)), l.removeChild(u)
            }
            var n, r, a, i, o, s, u = (Po.documentElement, Po.createElement("div")),
                c = Po.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", ru.opacity = "0.5" === c.style.opacity, ru.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ru.clearCloneStyle = "content-box" === c.style.backgroundClip, u = Po.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), ru.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ru.reliableHiddenOffsets = function() { return null == n && e(), i })
        }();
    var au = 0,
        iu = 1,
        ou = 2,
        su = 3,
        uu = 0,
        cu = 1,
        fu = 2,
        lu = 0,
        du = 1,
        pu = 2,
        hu = 3,
        mu = 0,
        vu = /(msie|trident)/i.test(Oo.userAgent),
        gu = Po.createElement("a"),
        yu = Rn(Io.href),
        _u = "onload",
        xu = 0,
        bu = { error: 990, abort: 905, timeout: 903 },
        Su = ca + oa,
        Eu = 0,
        Tu = xi,
        Cu = {},
        Au = 0,
        wu = "load",
        Ru = "reload",
        Du = 0,
        Pu = null,
        Nu = [ho, mo],
        Iu = Hr();
    return Iu
}(window, +new Date);
window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { id: '7lT2y3_mJ4k', bizId_rule: [], opt_param_rule: [], x_server_switch: true, request_param_keys: [], cors_domains: ['192.168.5.114:8089'], event_timeout: 60000, cross_page_delay: 3000, ignore_err: false, filter_robot: true, apm_headers: ['ceshi2', 'ceshi1'], router_enable: 1, beacon: '10.128.2.55:8588', beacon_err: '10.128.2.55:8588', key: 'Wtq8ffjNt90', token: 'bdcaa146f3da4a678d6c0bc15f524614', trace_threshold: 7000, fp_threshold: 2000, fs_threshold: 4000, dr_threshold: 4000 }; }); /*TY_AGENT_END*/