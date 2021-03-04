/*AGENT_VERSION=3.1.11-nongxin.1*/
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
                if (t instanceof Array) { var e = wr.call(t); return i(e, function(t, n) { e[n] = u(t) }), "[" + e.join(",") + "]" }
                if (t instanceof Date) return t.getTime().toString();
                var n = "";
                return i(t, function(t, e) { Er(t) || (n += u(e) + ":" + u(t) + ",") }), n && (n = n.substr(0, n.length - 1)), "{" + n + "}";
            case "string":
                return Ar + t.replace(Rr, "\\$1").replace(Dr, "\\n") + Ar;
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

    function c(t) { return t && br(t) ? yr(t) : t }

    function f(t, e, n, r) { return t.addEventListener(e, n, r) }

    function l(t, e, n) { return t.removeEventListener(e, n) }

    function d(t, e, n) { return t.attachEvent("on" + e, n) }

    function p(t, e, n) { return t.detachEvent("on" + e, n) }

    function h(t, e, n, r) { var a = function i() { return Or(t, e, i), n.apply(this, arguments) }; return kr(t, e, a, r) }

    function m(t, e) { return Function.prototype.apply.apply(t, e) }

    function v(t, e) { return function() { t.apply(e, arguments) } }

    function g(t) { return Nr ? Nr(t) : t }

    function y(t) { var e = arguments.length; if (2 > e || !t) return t; var n = wr.call(arguments, 1); return i(n, function(e) { i(e, function(e, n) { t[n] = e }) }), t }

    function x(t, e) { return t ? e ? t.replace(/\{(\w+.?\w+)\}/g, function(t, n) { return e[n] || "" }).replace(/\{(\d+)\}/g, function(t, n) { return e[n] || "" }) : t : "" }

    function b(t, e, n) {
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

    function _(t, e) {
        var n = null == t ? 0 : t.length;
        if (!n) return -1;
        for (var r = n; r--;)
            if (t[r] === e) return r;
        return r
    }

    function E(t) { return setTimeout(t, 0, { __ty_ignore: !0 }) }

    function S() {}

    function C() { var t = window && window.performance; return t && t.timing && t.timing.navigationStart && t.now ? Math.round(t.timing.navigationStart + t.now()) : +new Date }

    function T(t) {
        return function() {
            if (null !== t) {
                var e = t;
                t = null, e.apply(this, arguments)
            }
        }
    }

    function w(e) { return e ? br(e) ? e.length : t.ArrayBuffer && e instanceof ArrayBuffer ? e.byteLength : t.Blob && e instanceof Blob ? e.size : e.length ? e.length : 0 : 0 }

    function A() { this.events = {} }

    function R(t, e) { return setTimeout(t, e || 0, { __ty_ignore: !0 }) }

    function D(t, e) { Qi[t] = e }

    function P() { return 0 === to.cpRemain.ajax && 0 === to.cpRemain.iframe }

    function k(t) { N(t, eo) }

    function O(t) { N(t, no) }

    function N(t, e) { var n = "ok"; return t ? void e.push(t) : n = e.length ? e.join("\n") : n }

    function I(t) {
        function e(t, e, r) {
            var a = r || "log",
                i = n[t] || (n[t] = {});
            i[a] = i[a] || "", i[a] += e
        }
        var n = {},
            r = k();
        if (e("Status", r, "ok" !== r), e("Debug", O()), i(ro, function(t, n) { e("Timeline", n + ": " + t.toString()) }), !t && ao) console.log("[TingYun Agent Diagnosis]\n"), i(n, function(t, e) {
            var n = console[e];
            i(n, function(t, e) { console[e](t) })
        });
        else {
            if (t !== Jr) return xr(n);
            Li.href = Li.href + "#" + xr(n)
        }
    }

    function j(t, e) { this.flags = 0, Er(t.create) && (this.create = t.create, this.flags |= io), Er(t.before) && (this.before = t.before, this.flags |= oo), Er(t.after) && (this.after = t.after, this.flags |= so), Er(t.error) && (this.error = t.error, this.flags |= uo), this.data = e }

    function q(t, e) { if (!fo) { if (!Sr(t) || !t) throw new TypeError("callbacks arguments must be an object"); return fo = new j(t, e) } }

    function H(t) {
        var e = fo.data;
        if (0 !== (fo.flags & io)) {
            var n = fo.create(fo.data);
            void 0 !== n && (e = n)
        }
        return function r() {
            0 !== (fo.flags & oo) && fo.before(this, e);
            var n = r;
            n._ && (n._ = 1);
            try { var a = t.apply(this, arguments) } catch (i) { throw 0 !== (fo.flags & uo) && fo.error(e, i), i }
            return 0 !== (fo.flags & so) && fo.after(this, e), a
        }
    }

    function M(t) { return function() { var e; try { e = t.apply(this, arguments) } finally { to.context = null } return e } }

    function L(t) { return !fo || fo.flags <= 0 ? t : H(t) }

    function z(t) { return M(L(t)) }

    function F(t, e, n) { if (t && n && Er(n)) { var r = t[e]; if (!r || !r._wrapped) { var a = n(r, e); return a && (a._wrapped = !0), t[e] = a, a } } }

    function B(t) {
        function e() {}
        return e.prototype = t, new e
    }

    function U() { this.id = null, this.active = null, this._set = [] }

    function Y() {
        var t = new U;
        return t.id = q({
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

    function G() { return mo || (lo = Y(), mo = !0), lo }

    function J(t) { return br(t) || (t = xr(t)), t }

    function K(t, e) {
        e = e || S;
        var n = new Image;
        kr(n, Fr, function() {
            ("loaded" == n.readyState || 4 == n.readyState) && e(null)
        }, !1), kr(n, Hr, function() { e(null) }, !1), kr(n, qr, function() { e(qr) }, !1), n.src = t
    }

    function W(t, e) {
        var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = new XDomainRequest;
        i.open(go, n), i.onload = function() { a(null, i.responseText), e() }, i.onerror = function(t) { a(t), e() }, i.send(J(r))
    }

    function V(t, e) {
        var n = t.url,
            r = t.data,
            a = t.header,
            i = t.callback,
            o = T(i),
            s = new Mi;
        s[Kr] = !0, s.overrideMimeType && s.overrideMimeType("text/html"), s.onreadystatechange = function() { 4 == s.readyState && 200 == s.status && (o(null, s.responseText), e()) }, s.onerror = function() { o(), e() };
        try {
            s.open(go, n, !0);
            for (var u in a) s.setRequestHeader(u, a[u]);
            s.send(J(r))
        } catch (c) { e() }
    }

    function X(t, e) {
        var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = zi.sendBeacon(n, J(r));
        i && (a && a(), e())
    }

    function $(t) { this.size = t || 100, this.queue = [], this.running = !1 }

    function Z() { yo = po = V, xo = !1 }

    function Q(t) { ho = new $(t) }

    function tt(t) { ho.add(t) }

    function et(t) { try { return c(t) } catch (e) { k(e && e.message) } return null }

    function nt(t) {
        var e = t || new Date,
            n = e.getFullYear() + "-",
            r = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
            a = e.getDate() + " ";
        return n + r + a
    }

    function rt(t, e, n) {
        if (null == t[e] || _r(t[e])) _r(t[e]) ? t[e].push(n) : t[e] = n;
        else {
            var r = t[e];
            t[e] = [r], t[e].push(n)
        }
    }

    function at(t) { return t.send_protocol ? t.send_protocol : Ao !== Ro && /^https/i.test(t && t.protocol || Ao) ? "https:" : Ro }

    function it(t) { var e = {}; if (t = t || Li.href, !br(t)) return e; var n = t.indexOf("?"); return n >= 0 && (t = t.substring(n + 1)), t ? e = ut(t) : e }

    function ot(t) { return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? it(t) : {} }

    function st(t) { var e = {}; return t = t || "", br(t) && t ? e = ut(t) : e }

    function ut(t) {
        var e = {};
        return t && i(t.split("&"), function(t) {
            var n = t.split("="),
                r = ct(n[0]),
                a = ct(n[1]);
            if (br(a)) {
                var i = et(a);
                null != i && (a = i)
            }
            r && null != a && rt(e, r, a)
        }), e
    }

    function ct(t) { try { return decodeURIComponent(t) } catch (e) {} return null }

    function ft(t, e, n, r) {
        var a = null;
        return t && e && (a = r ? wo + "//" + t + e : t + e, n && (a += "?", i(n, function(t, e) {
            var n = [g(e), "=", g(t), "&"];
            a += n.join("")
        }))), a
    }

    function lt(t) { wo = at(t) }

    function dt() {
        var e, n = t.location.protocol;
        if (n) {
            e = n;
            var r = n.indexOf(":");
            r > -1 && (e = n.substring(0, r))
        }
        return e
    }

    function pt(t, e) {
        var n = !0;
        if (Sr(t.beacon_config)) {
            var r = dt(),
                a = r && t.beacon_config[r];
            null != a && (t.beacon = a, n = !1)
        }
        e.releativeBeaconProtocol = n
    }

    function ht() { var t = _o(_i); return t ? t : Eo(_i, jr()) }

    function mt() { return _o(xi) }

    function vt(t) {
        if (null != t) {
            var e = mt();
            null != e && t !== e && xt(), Eo(xi, t)
        }
    }

    function gt() { var t = _o(bi); return t ? t.split(Si) : null }

    function yt(t) { t && 3 === t.length && Eo(bi, t.join(Si)) }

    function xt() {
        var t = bt();
        At(t)
    }

    function bt() {
        var t = C(),
            e = [jr(), t, t];
        return yt(e), e
    }

    function _t() {
        var t = C(),
            e = gt();
        Et(e) ? xt() : (e[2] = t, yt(e))
    }

    function Et(t) { return !t || 3 !== t.length || C() - +t[2] > Ei }

    function St(t, e) { return ft(Ji.beacon, t, Ct(e), Gi.releativeBeaconProtocol) }

    function Ct(t) { var e = Rt(); return y({}, Ki, e, t || {}, Gi.baseInfo, Co || {}) }

    function Tt(t) { return t in Ji ? Ji[t] : !0 }

    function wt(t) { var e = {}; return i(t, function(t) { t && b(e[t.type] || [], t.key) < 0 && (e[t.type] = e[t.type] || []).push(t.key) }), e }

    function At(t) { t[0] && (Ki.sid = t[0]), t[1] && (Ki.__s = +t[1]) }

    function Rt() {
        var t = { did: ht() },
            e = mt();
        return e && (t.uid = e), t
    }

    function Dt(e) {
        var n = {};
        if (Er(e)) {
            var r = {};
            e(r), n = r.server
        } else n = e;
        t[pa] || (t[pa] = { hook: {} }), y(Yi.server, Ui, n || {}, t[pa].config || {}), y(Yi.appConf, { bizIdsRules: wt(Ji.bizId_rule), customParamsRules: wt(Ji.opt_param_rule), requestParamKeys: wt(Ji.request_param_keys), corsDomains: Ji.cors_domains || [], optCustomParamRules: wt(Ji.opt_custom_param_rule), ignoreNoFilePropError: Tt("ignore_err"), debuggable: Tt("debug"), sessionTimeout: Ji.session_timeout || Ei }), i(Do, function(e) { Ji[e] && (Gi.baseInfo[e] = Ji[e], t[Gr][e] = Ji[e]) }), y(Ki, Rt());
        var a = gt();
        Et(a) && (a = bt()), At(a), Yi.server.event_timeout || (Yi.server.event_timeout = va), Ji.appKey && Z(), Ji.apm_arms && (Ji.apm_headers || (Ji.apm_headers = []), Ji.apm_headers.indexOf(Ni) < 0 && Ji.apm_headers.push(Ni)), lt(Ji), pt(Ji, Gi), Q(Ji.req_capacity)
    }

    function Pt(e) {
        try {
            var n;
            if (!e || !e.data || 0 !== e.data.indexOf("_TINGYUN")) return;
            if (n = e.data.replace("_TINGYUN", ""), et(n)) {
                var r = et(n);
                if ("gather" === r.type && "APM" === r.fromJS && !t[Oi]) {
                    Bi.isGather = !0;
                    var a = e.origin,
                        i = Hi.getElementsByTagName("head")[0],
                        o = Hi.createElement("script");
                    o.type = "text/javascript", o.src = a + "/assets/lib/gather/path-gather.min.js?version=" + nt(new Date), i.appendChild(o)
                }
            }
        } catch (s) {}
    }

    function kt() {
        var t = this;
        t.xhrs = {}, t.errs = [], A.call(t)
    }

    function Ot(t) { ao && console.warn(t || "Event key required!") }

    function Nt(t) {
        t = t || {}, this.key = t.key, this.type = t.type || Ri;
        var e = t.timeout || wi;
        this.timeout = e, this.status = 1, this.remain = 0, this.xhrs = [], this.s = C(), this.e = null, this.called = this.sent = this.stored = !1
    }

    function It(t) {
        t = t || {};
        var e = t.key;
        if (!e) return new Ot;
        if (Io[e]) return new Ot("event " + e + " is executing");
        Io[e] = !0;
        var n = lo.createContext();
        lo.enter(n);
        var r = new Nt(t);
        return r._end = function() {
            var t = this;
            t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n)
        }, r.end = function(t, e) { var r = this; return r.called ? void(ao && console.warn("Event " + this.key + "has ended or failed!")) : (r.called = !0, lo.exit(n), r.status = null != t ? t : 1, void(e || r._end())) }, r.finish = function(t) { var e = this; return e.e = C(), e.i && clearTimeout(e.i), delete Io[e.key], e }, r.fail = function() { this.end(0) }, r.store = function() { this.end(null, !0), this.refreshEventAndStore(n), this.stored = !0 }, r.i = r.timeout ? R(v(r.fail, r), r.timeout) : null, lo.set("event", r), r
    }

    function jt(e) {
        var n = _o(Ci),
            r = et(n);
        if (r && r.start && (e = e || {}, !e.key || r.key === e.key)) {
            var a = e.timeout;
            if (a || (a = Ti), r.duration = C() - r.start, r.duration > a) return void So(Ci);
            var i = t.performance.timing;
            if (i.navigationStart && (i.loadEventEnd || i.loadEventStart) && i.navigationStart - r.start >= 0) {
                var o = { req: "get " + document.URL, status: 200, type: "PF", start: i.navigationStart - r.start, du: (i.loadEventEnd || i.loadEventStart) - i.navigationStart };
                r.xhrs || (r.xhrs = []), r.xhrs.push(o)
            }
            var s = 1;
            e.status && (s = e.status === Pi ? 1 : 0), r.status = s, So(Ci), ko.emit("send", "/spe", null, r, S)
        }
    }

    function qt(t) { t = y(t || {}, { type: Ai }); var e = It(t); return t.autoEnd && R(function() { t.status && t.status === ki ? e.fail() : e.end() }, t.endDelay || Di), e }

    function Ht(t, e) {
        Sr(e) || (e = {}), t && t.beforeEach && t.afterEach && (t.beforeEach(function(t, n, r) {
            var a = t.path;
            if (!jo[a] || jo[a].e) {
                var i = { key: a };
                e && e.timeout && (i.timeout = e.timeout), jo[a] = qt(i)
            }
            r()
        }), t.afterEach(function(t, n) {
            var r = t.path;
            R(function() { var t = jo[r];!t || t.called || t.e || (e && e.status === ki ? t.fail() : t.end()) }, e.endDelay || Di)
        }))
    }

    function Mt(t) { qo && t() }

    function Lt(t) { return function() { qo && t.apply(this, arguments) } }

    function zt() { qo = !1 }

    function Ft(e) {
        Mo.on(Hr, T(function() {
            n();
            var t = C();
            Mt(function() { Ho.load = t }), e.loadEventEnd = t
        })), i([Hr, Mr, Lr, zr], function(e) {
            kr(t, e, function(t) {
                Mt(function() {
                    (Ho.e[e] || (Ho.e[e] = [])).push(C())
                }), Mo.emit(e, t)
            })
        });
        var n = T(function() {
            var t = C();
            Mt(function() { Ho.end = t }), e.domContentLoadedEventStart = t, Hi.querySelectorAll && (Zi.resources = Zi.resources || [], i(Hi.querySelectorAll("head>link,head>script"), function(t) { var e; "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && Zi.resources.push(e) }))
        });
        kr(Hi, "DOMContentLoaded", n), kr(Hi, Fr, function(t) { Hi.readyState === Br && n() });
        var r = T(function() { e.touch = C() });
        i(["scroll", "click", "keypress"], function(t) { h(Hi, t, r) });
        var a = t.requestAnimationFrame;
        !a || a.toString().indexOf("[native code]") < 0 || F(t, "requestAnimationFrame", function(n) {
            return function() {
                if (!e.firstPaint) {
                    var r = C();
                    Mt(function() { Ho.an.count++, Ho.an.t = r }), e.firstPaint = r, t.requestAnimationFrame = n
                }
                return n.apply(this, arguments)
            }
        })
    }

    function Bt(t) { this.limit = t, this.reset() }

    function Ut(t, e, n, r, a) { return String(t) + String(e) + String(n) + String(r) + String(a) }

    function Yt(t, e, n, r) { return String(t) + String(e) + String(n) + String(r) }

    function Gt(t, e, n, r, a, i, o, s, u) {
        var c = this;
        c.id = t, c.time = C(), c.msg = e, c.lineno = r, c.colno = a, c.filename = n, c.count = 1, c.stack = i && i.stack || "", c.module = o, c.trigger = s || Bo, c.metaData = u, c.fix();
        var f = Yt(e, r, a, o),
            l = Yo[f];
        c.ep = l ? 0 : 1, Yo[f] = !0, c.fep = 0, this.recordFileName()
    }

    function Jt(t) {
        var n = function(t) { var e = []; return i(t, function(t) { e.push(t.toObject()) }), e }(Uo.c);
        if (!n || !n.length) return null;
        var r = { fu: zo ? zo : zo++, os: parseInt((C() - (Zi.pfStart || e)) / 1e3) };
        $i.ulabel && (r.ulabel = $i.ulabel), ko.emit("send", "/err1", r, { datas: n }), Uo.reset()
    }

    function Kt(t, e, n, r, a, o, s) {
        if (e || !Gi.ignoreNoFilePropError) {
            var u = !1;
            if (i(Gi.domains, function(t) { return u = t.test(e), u ? !1 : void 0 }), !u) {
                var c = a && a.moduleId,
                    f = Ut(e, t, n, r, c),
                    l = Uo.get(f);
                l ? l.increase() : (l = new Gt(f, t, e, n, r, a, c, o, s), Uo.add(f, l), ko.errs && ko.errs.push(l))
            }
        }
    }

    function Wt() {
        var e = t.onerror;
        t.onerror = function(t, n, r, a, i) { return Kt(t, n, r, a, i), Er(e) ? e.apply(this, arguments) : void 0 }, t.onerror._ty = !0
    }

    function Vt() {
        var e = t.onerror;
        e && e._ty || Wt()
    }

    function Xt(t, e) {
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
                    return a && Cr(o) && o > 0 && Cr(s) && s > 0 ? !1 : void 0
                })
            }
            Kt(n, a, o, s, { stack: r }, Fo, e)
        }
    }

    function $t() {
        var e = Ir();
        return e ? Wt() : kr(t, qr, function(e) {
            var n, r, a, i, o;
            (e instanceof t.Event || t.ErrorEvent && e instanceof t.ErrorEvent) && (n = e.message || e.error && (e.error.message || e.error.constructor.name) || "", r = e.lineno || 0, a = e.colno || 0, i = e.filename || e.error && e.error.filename || e.target && e.target.baseURI || "", i == Hi.URL && (i = "#"), o = e.error), Kt(n, i, r, a, o)
        }), Mo.on([Hr, Mr, Lr, zr], function(t) { Jt() }).on(Hr, function() { e && E(Vt) }), setInterval(Jt, Lo, !0)
    }

    function Zt(t, e) {
        var n;
        if (Sr(t)) n = t;
        else {
            if (!br(t) || void 0 === e) throw new qi(Xi);
            n = {}, n[t] = e
        }
        return i(n, function(t, e) { e in Jo ? $i[Jo[e]] = t : $i[e] = t }), this
    }

    function Qt(t) {
        if (t) {
            var e = $i.firstScreenResources = $i.firstScreenResources || [];
            _r(t) || (t = [t]), i(t, function(t) {
                if (br(t)) e.push(t);
                else if (Wi(t)) {
                    var n = t.src || t.href;
                    n && e.push(n)
                }
            })
        }
    }

    function te(t) {
        _r(t) || (t = [t]), i(t, function(t) {
            if (t) {
                if (!(t instanceof RegExp)) throw new qi("parameter's type requires RegExp");
                (Gi.domains || (Gi.domains = [])).push(t)
            }
        })
    }

    function ee(t, e) {
        if (t) {
            var n = t.split("_"),
                r = n[0],
                a = n[1];
            "ty" === r && a && D(a, { timestamp: C(), data: e })
        }
    }

    function ne() {
        if (Object.defineProperty) {
            var e = t[Yr];
            e && Object.defineProperty(t, Yr, { get: function() { return Wo++ > 0 && t.console && console.warn("window.%s is deprecated, use window.%s instead.", Yr, Gr), e } })
        }
    }

    function re(t, e, n) { n || (n = e && window[e] || Hi.cookie || ""); var r = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return r ? r[3] : null }

    function ae(t, e, n, r, a) {
        var i = t + "=" + e;
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 1e3 * n), i += ";expires=" + o.toGMTString()
        }
        r && (i += ";path=" + r), (a || Hi).cookie = i
    }

    function ie(t, e) { var n; return t && (n = !0, i(t, function() { return n = !1 }, e)), !!n }

    function oe(t) {
        var e = {},
            n = {},
            r = {},
            a = {},
            i = it(t);
        return i && (e = se(i, Gi.bizIdsRules[Vr], Gi.bizIdsRules[Zr]), n = se(i, Gi.customParamsRules[Vr], Gi.customParamsRules[Zr]), r = se(i, Gi.requestParamKeys[Qr], Gi.requestParamKeys[ta]), a[ea] = le(i, Gi.optCustomParamRules[ea], !0)), { bizIdParams: e, params: n, requestParams: r, optCustomParams: fe(a) }
    }

    function se(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, function(e) {
            var n = t[e];
            null != n && rt(r, e, n)
        }), t && n && n.length && n.length > 0 && i(n, function(e) {
            var n = ue(sa, e),
                a = n(t);
            null != a && rt(r, e, a)
        }), r
    }

    function ue(t, e) {
        var n = t + "." + e;
        if (Vo[n]) return Vo[n];
        var r = (e || "").split("."),
            a = "";
        e && 0 !== e.indexOf("[") && (a = ".");
        var o = t;
        i(r, function(t, e) { 0 === e && (o += a), o += t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? "['" + t + "']" : (e > 0 ? "." : "") + t });
        var s;
        try { s = new Function(t, "try{return " + o + ";}catch(e){}return null;") } catch (u) { s = S }
        return Vo[n] = s, s
    }

    function ce(t) { return t += "", t && t.substr(0, 128) || "" }

    function fe(t) { var e = {}; return i(t, function(t, n) { ie(t) || (e[n] = t) }), e }

    function le(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, function(e) {
            var a = t[e];
            if (null != a) rt(r, e, a);
            else if (n) {
                var i = ue(sa, e),
                    a = i(t);
                null != a && rt(r, e, a)
            }
        }), r
    }

    function de(t) {
        var e, n;
        if (t)
            if (0 === t.indexOf(da)) { var r = t.substring(da.length); try { n = $o.decode(r), e = et(n) } catch (a) {} } else { try { n = decodeURIComponent(t), e = et(n) } catch (a) {} if (!e) try { n = decodeURIComponent(n), e = et(n) } catch (a) { k(a && a.message) } }
        return e
    }

    function pe(t) { var e = {}; return t && Sr(t) && (e.s_id = t.id, e.s_tname = t.tname, e.s_tid = t.tid, e.s_rid = t.rid, e.s_duration = t.duration, "user" in t && (e.s_user = t.user, vt(t.user)), "bid" in t && (e.s_bid = ce(t.bid)), "ber" in t && (e.s_ber = t.ber), "isError" in t && (e.s_isError = t.isError)), e }

    function he(t) { return t[Ha] || t._end }

    function me(t) { return t.loadEventEnd || t._end }

    function ve(t) {
        var e = 0,
            n = t.timing;
        return n ? t.getEntriesByName && (e = n.domLoading, i(Zi.resources, function(r) {
            var a = t.getEntriesByName(r);
            if (1 == a.length) {
                var i = a[0].responseEnd + n.navigationStart;
                i > e && (e = i)
            }
        }), e -= n.navigationStart) : O("fp=0"), Mt(function() { Ho._fp = e }), Math.round(e)
    }

    function ge(e, n, r, a) {
        var o = r || 0,
            s = $i.firstScreenResources;
        if (s && s.length && e.getEntriesByName) return i(s, function(t) {
            var n = e.getEntriesByName(t);
            if (n.length) {
                var r = n[0],
                    a = r.responseEnd;
                a > o && (o = a)
            }
        }), a.fs_s = 1, Math.round(o);
        var u = Hi.createElement("img");
        if (!u.getBoundingClientRect) return Mt(function() { Ho.fs = o }), o;
        if (e.getEntriesByName) {
            var c = t.innerHeight,
                f = t.innerWidth,
                l = [];
            i(Hi.querySelectorAll("img"), function(t) { t.src && ye(xe(t), c, f) && !be(t) && l.push(t.src) });
            var d = (n.loadEventEnd || ko.loadEventEnd) - n.navigationStart;
            i(l, function(t) {
                var n = e.getEntriesByName(t);
                if (n.length) {
                    var r = n[0],
                        a = r.responseEnd;
                    r.fetchStart <= d && a > o && (o = a)
                }
            })
        }
        return Math.round(o)
    }

    function ye(e, n, r) {
        if (e) {
            var a = t.pageYOffset,
                i = e.top + (0 === a ? 0 : a || Hi.scrollTop || 0) - (Hi.clientTop || 0);
            if (i >= n) return !1;
            var o = e.left;
            return o >= 0 && r > o
        }
        return !1
    }

    function xe(t) { return Er(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0 }

    function be(t) { return Qo.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : _e(t) }

    function _e(t) {
        for (; t && 1 === t.nodeType;) {
            if ("none" === Ee(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function Ee(t) { return t.style && t.style.display }

    function Se(t) {
        var n = e,
            r = 0;
        return t && (n = t.navigationStart || n, r = t[Ha] || t.domInteractive || t.domLoading || r), r = r || ko._end, r - n
    }

    function Ce(n, r) {
        function a(t) { return n[t] > 0 ? n[t] - s : 0 }
        var o = {},
            s = r ? r.globalStart : e,
            u = r ? r.window : t,
            c = (r ? r.agent : ko) || {};
        if (n) {
            Mt(function() {
                var t = Ho.t = {};
                i(n, function(e, n) { Er(e) || (t[n] = e) }, !0)
            }), s = n.navigationStart, o = { ns: s, f: a(Na), qs: a(Ia), rs: a(ja), re: a(qa), os: a(Ha), oe: a(Ma), oi: a(La), oc: a(za), ls: a(Fa), le: a(Ba), tus: a(Ua), tue: a(Ya) };
            var f = a(Ga),
                l = a(Ja),
                d = a(Ka),
                p = a(Wa),
                h = a(Va),
                m = a(Xa);
            if (o.cs = h, o.ce = m, o.ds = f, o.de = l, (p - d > 0 || p > 0) && (o.es = d, o.ee = p), 0 == o.le) {
                var v = me(c);
                o.ue = v - s
            }
            c && (c._le = o.ue || o.le);
            var g, y;
            if (n.msFirstPaint) g = n.msFirstPaint, r || Mt(function() { Ho.fp = "m_" + g });
            else if ((y = u.chrome) && u.chrome.loadTimes) {
                var x = u.chrome.loadTimes();
                x && x.firstPaintTime && (g = 1e3 * x.firstPaintTime), r || Mt(function() { Ho.fp = "c_" + x.firstPaintTime })
            } else c && c.firstPaint && (g = c.firstPaint, r || Mt(function() { Ho.fp = g }));
            g && (o.fp = Math.round(g - s), c.fp = o.fp), n[$a] ? o.sl = a($a) : o.sl = 0
        } else o = { t: s, os: he(c) - s, ls: me(c) - s };
        return o.je = c && c.errs && c.errs.length || 0, c && c.ct && (o.ct = c.ct - s), c && c.touch && (o.fi = c.touch - s), o
    }

    function Te(t, e) {
        var n = Ce(t, e);
        n.fp ? t && n.fp > n._le && (n.fp = ve(performance), n.__fp = 2) : t ? (n.fp = ve(performance), n.__fp = 1) : n.fp = n.__fp = 0, n.dr = Se(t), t ? n.fs = ge(performance, t, n.fp, ko) : n.__fs = 0;
        var r = {};
        return n && (r = { f: n.f, fp: n.fp, fs: n.fs, dr: n.dr, le: n.le, je: n.je }), r
    }

    function we() { return { optCustomParam: to.opt_custom_param } }

    function Ae(t) { return t || (t = we()), "".concat(Ra).concat(xr(t)) }

    function Re(t, e, n, r) {
        if (t) {
            var a = De(t);
            if (a) try {
                var i = a + xr(t),
                    o = [i];
                o.unshift(e ? e : Ae());
                var s = o.join("\n");
                ko.emit("send", "/action", { ps: r || a === Aa ? 1 : 0 }, s, function() { t.type === _a && (ko.xhrs = ko.errs = null) }, n)
            } catch (u) {}
        }
    }

    function De(t) { var e = ""; return t.type === ga ? e = Sa : t.type === ya ? e = Ca : t.type === ba ? e = wa : t.type === xa ? e = Ta : t.type === _a && (e = Aa), e }

    function Pe(t) { Re(t) }

    function ke(t) {
        var e = to.cpParent;
        if (e) {
            if (t && (to.recordingCpActions = !1), !P()) return void(to.tryEndCpActionsFailed = !0);
            var n = e.action,
                r = e.data,
                a = e.commonActionInfo,
                o = e.url;
            if (n && r && 0 !== r.length) {
                var s = C(),
                    u = [];
                i(to.cpActions, function(t) { t.data && (t.data.crossPage = !0), u.push(t.data) }), r[r.length - 1].items = u;
                for (var c = r.length - 1; c >= 0; c--) {
                    var f = r[c];
                    f.type === ga || f.end || (f.end = s), r[c - 1] && (r[c - 1].items = [f]);
                    var l = void 0;
                    l = f.start && f.end && f.end - f.start > Ji.event_timeout ? Oa : f.type === ga ? r[c + 1] && r[c + 1].state || ka : ka, f.state = l
                }
                n.data = r[0], n.end = s;
                var d = Ae(y(a || {}, { cpOptCustomParam: to.opt_custom_param, pageParam: Ct() }));
                Re(n, d, o)
            }
        }
    }

    function Oe() { var t = {}; return i(ts, function(e) { t[e] = { current: 0, children: 0 } }), t }

    function Ne(t, e, n) { i(t, function(t) { t.cid === e.id && (t.items = e.items || []) }) }

    function Ie(t, e) { i(t, function(t) { i(e, function(e) { t.cid === e.id && (t.state || (t.state = e.state), t.items = e.items || []) }) }), i(e, function(t) { Ie(t.items, t.children) }) }

    function je(t, e, n, r, a, i) {
        i = i || {}, this.id = ++to.uniqueId, this.parent = t || null, this.children = [], this.name = e || "", this.type = n || ga, this.subType = this.type === ga ? r || "click" : r, this.items = [], this.remain = Oe(), this.s = i.s || C(), this.e = null, this.data = a, this.state = Pa, this.crossPage = i.crossPage || !1;
        var o = this;
        null == this.parent && (this.i = R(function() { o.timeout() }, Ji.event_timeout)), this.closed = !1, this.isTimeout = !1, this.cleared = !1, this.stateChanged = !1, this.actionCount = { ajax: n === ya ? 1 : 0, iframe: n === ba ? 1 : 0 }, null != this.parent && this.parent.children.push(this)
    }

    function qe(t, e) {
        if (He()) {
            var n = { rm: {}, em: [], cpm: {} };
            e && (n.rm.res = e.res || []), t && (n.cpm = t, n.cpm.ul = Hi.URL), nbsJsBridge.logJsResult(xr(n))
        }
    }

    function He() { return "undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult }

    function Me() { var t = 0; try { t = window.performance.timing.loadEventEnd } catch (e) {} return t > 0 }

    function Le(t, n) {
        var r = { tr: !1, tt: g(Hi.title), charset: Hi.characterSet };
        $i.resources && y(r, $i.resources), Mt(function() { r.debug = Ho }), zt();
        var a = ko.errs;
        i(a, function(t, r) {
            var i = t.toObject();
            i.o = i.o - n && n.navigationStart || e, a[r] = i
        }), r.err = a;
        var o, s = "getEntriesByType";
        return t[s] ? o = t[s]("resource") : O(x(Vi, [s])), o && (r.tr = !0, r.res = [], i(o, function(t) {
            function e(e) { var n = t[e]; return n > 0 ? n : 0 }
            var n = t.initiatorType,
                a = t.name,
                o = { o: e("startTime"), rt: n, n: a, f: e(Na), ds: e(Ga), de: e(Ja), cs: e(Va), ce: e(Xa), sl: e($a), qs: e(Ia), rs: e(ja), re: e(qa), ts: t.transferSize || 0, es: t.encodedBodySize || 0 };
            if ("xmlhttprequest" === n) {
                var s = ze(a);
                i(s, function(t, e) { 0 == e.indexOf("s_") && (o[e] = t) })
            }
            r.res.push(o)
        })), r
    }

    function ze(t) { var e; return i(ko.xhrs, function(n, r) { return r && t.indexOf(r) > -1 ? (e = n, !1) : void 0 }), e }

    function Fe(e) {
        if (!e.agent) {
            var n = t._ty_rum;
            if (n && n.agent) e.agent = n.agent;
            else {
                var r = re(ca, ua);
                r && (e.agent = de(r), ae(ca, "", -1e3, "/"))
            }
        }
        return e.agent
    }

    function Be(t) { if (t) { var e = t.fetchStart; if (e) return e - t.navigationStart } }

    function Ue() {
        var e = {},
            n = 0,
            r = t.performance;
        r && r.getEntriesByType && i(r.getEntriesByType("mark") || [], function(t) {
            if (t && t.name && t.startTime && 0 === t.name.indexOf(ha)) {
                var r = t.name.substring(ha.length);
                r && (e[r] = Math.round(t.startTime), n += 1)
            }
        });
        var a = t[pa] && t[pa].data,
            o = y({}, a || {}, Qi || {});
        return o && r.timing && i(o, function(t, a) { Sr(t) && t.timestamp && (e[a] = t.timestamp - r.timing.navigationStart, n += 1) }), n > 0 ? e : null
    }

    function Ye(t, e) { var n = y({}, t || {}, { type: _a }); return e && (n.body = e), n }

    function Ge(t, e) {
        var n = xr(t),
            r = n ? n.length : 0;
        if (r > ma && t.res && t.res.length > 0) {
            t.res = t.res.slice(0, e);
            var a = xr(t),
                i = a ? a.length : 0;
            return i > ma ? Ge(t, e - 10 > 0 ? e - 10 : 0) : t
        }
        return t
    }

    function Je() {
        var n = T(function() {
            function n(t) { return t ? "1" : "0" }
            if (!to.pfSent) {
                var r = t.performance,
                    a = !!r;
                a || O(x(Vi, ["pf"]));
                var o = Fe(Yi);
                o && o.ulabel && ($i.ulabel = o.ulabel);
                var s = pe(o),
                    u = r && r.timing,
                    c = y(Ce(u), s, $i),
                    f = y({}, Co);
                f.ressize = !!u, ko.fp ? (f.fp = ko.fp, a && ko.fp > ko._le && (O("fp>le"), f.fp = ve(r), f.__fp = 2)) : a ? (f.fp = ve(r), f.__fp = 1) : f.fp = f.__fp = 0, f.dr = Se(u), a ? f.fs = ge(r, u, f.fp, f) : f.__fs = 0;
                var l = "",
                    d = Ue(),
                    p = y(c, f) || {};
                d && i(d, function(t, e) { Cr(t) && t >= 0 && (p[e] = t) });
                var h;
                if (a) {
                    var m = "trace",
                        v = Math.max(p.ls, 0);
                    v || (v = me(ko) - u.navigationStart || e), p[m] = v;
                    var b = Be(u);
                    i(["fp", "fs", "dr", m], function(t) { l += n((b ? p[t] - b : p[t]) >= Ji[t + "_threshold"]) }), delete p[m], l.indexOf("1") > -1 && (h = Le(r, u)), d && (h || (h = {}), h.mark = d)
                }
                p.trflag = l || "0000", Zi.pfStart = C(), delete p.firstScreenResources, delete p.resources;
                var _ = oe(Hi.URL);
                if (h || (h = { tr: !1, tt: g(Hi.title), charset: Hi.characterSet }), h.bizId_param = _.bizIdParams, h.opt_param = _.params, h.request_param = _.requestParams, to.opt_custom_param = _.optCustomParams, h) try { h = Ge(h, 150) } catch (E) {}
                var S = Ye(p, h),
                    T = je.buildImmediateAction(_a, "", S, to.recordingCpActions);
                to.recordingCpActions && (T.crossPage = !0, to.cpActions.push(T), R(function() { ke(!0) }, es));
                try { qe(p, h) } catch (E) {}
                to.pfSent = !0
            }
        });
        return Me() && !to.pfSent && n(), Mo.on(Hr, function() {
            var t = 0;
            if (Ji.pfDelay && Sr(Ji.pfDelay)) {
                var e = Ue();
                i(Ji.pfDelay, function(n, r) {
                    (!e || null == e[r]) && Cr(n) && n > t && (t = n)
                })
            }
            if (to.recordingCpActions) {
                var r = Ji.cross_page_delay ? Ji.cross_page_delay : ai,
                    a = r - t;
                0 > a && (a = 0), es = a
            }
            R(n, t)
        }).on([Mr, Lr, zr], n)
    }

    function Ke(t) { var e = t; return ns && (rs.setAttribute("href", e), e = rs.href), rs.setAttribute("href", e), { href: rs.href, protocol: rs.protocol ? rs.protocol.replace(/:$/, "") : "", host: rs.host, search: rs.search ? rs.search.replace(/^\?/, "") : "", hash: rs.hash ? rs.hash.replace(/^#/, "") : "", hostname: rs.hostname, port: rs.port, pathname: "/" === rs.pathname.charAt(0) ? rs.pathname : "/" + rs.pathname } }

    function We(t) { var e = !1; return Gi.corsDomains && i(Gi.corsDomains, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function Ve(t) { var e = Ke(t); return e.protocol === as.protocol && e.host === as.host || We(e.host) }

    function Xe(e, n) { return function(r) { if (t[pa].hook && t[pa].hook.eventCb && on(r)) { var a = { originalCallback: e, eventHandlerType: n }; return t[pa].hook.eventCb.call(this, arguments, a) } return e.apply(this, arguments) } }

    function $e(t, e, n) { return n === os ? Xe(t, e) : (t.handleEvent = Xe(t.handleEvent, e), t) }

    function Ze(t) { return Er(t) }

    function Qe(t) { return Sr(t) && Er(t.handleEvent) }

    function tn(t) { var e; return Ze(t) ? e = os : Qe(t) && (e = ss), { isValid: t && e, listenerType: e } }

    function en(t) {
        return function() {
            var e = arguments[0],
                n = arguments[1],
                r = arguments[2],
                a = !0;
            r && Sr(r) && r[oi] && (a = !1);
            var i = tn(n),
                o = i.isValid,
                s = i.listenerType;
            if (a && is.indexOf(e) > -1 && o) {
                var u;
                if (n[Ii] && n[Ii][this]) u = n[Ii][this];
                else {
                    var c = $e(n, ci, s);
                    s === os && (n[Ii] || (n[Ii] = {}, n[Ii][ji] = 0), n[Ii][this] = { listener: c, options: arguments[2] }, n[Ii][ji]++, u = n[Ii][this])
                }
                u && (u.listener && (arguments[1] = u.listener), u.options && (arguments[2] = u.options))
            }
            return t && t.apply(this, arguments)
        }
    }

    function nn(t) {
        return function(e, n) {
            var r;
            try { r = t && t.apply(this, arguments) } finally {
                try {
                    if (n && is.indexOf(e) > -1) {
                        var a = n[Ii];
                        a && a[this] && a[this].listener && (null != a[this].options ? this.removeEventListener(e, a[this].listener, a[this].options) : this.removeEventListener(e, a[this].listener), a[this] = null, a[ji]--, a[ji] <= 0 && (n[Ii] = null, delete n[Ii]))
                    }
                } catch (i) {}
            }
            return r
        }
    }

    function rn() { t.EventTarget && (F(t.EventTarget.prototype, "addEventListener", function(t) { return en(t) }), F(t.EventTarget.prototype, "removeEventListener", function(t) { return nn(t) })) }

    function an() {
        Object.getOwnPropertyDescriptor && Object.defineProperty && is.forEach(function(e) {
            var n = "on" + e,
                r = Object.getOwnPropertyDescriptor(t.HTMLElement.prototype, n),
                a = r.get,
                i = r.set;
            Object.defineProperty(t.HTMLElement.prototype, n, { get: function() { return a.apply(this, arguments) }, set: function() { var t = arguments[0]; return t && (arguments[0] = $e(t, fi, os)), i && i.apply(this, arguments) }, configurable: !0, enumerable: !0 })
        })
    }

    function on(e) { return e && e.target instanceof t.HTMLElement && e.currentTarget instanceof t.HTMLElement }

    function sn(t) { return !!t.match(sn.regex) }

    function un(t) { return t && t.substr(0, 256) || "" }

    function cn(t) {
        try {
            if (!t) return "";
            for (var e = [], n = t.parentNode, r = function() {
                    var r = t.tagName,
                        a = void 0;
                    a = n.children;
                    var i = void 0;
                    i = a ? 1 === [].filter.call(a, function(t) { return t.tagName === r }).length ? r : "".concat(r, ":nth-child(").concat(1 + [].indexOf.call(a, t), ")") : r;
                    var o = t.id ? "#".concat(t.id) : "",
                        s = t.className && br(t.className) ? t.className.split(" ").map(function(t) { return ".".concat(t) }).join("") : "";
                    e.unshift("".concat(i).concat(o).concat(s)), t = n, n = t.parentNode
                }; n;) r();
            return "".concat(e.join(" > ")).toLowerCase()
        } catch (a) {}
    }

    function fn(t, e, n) {
        var r = t.target,
            a = r.nodeName,
            i = r.id,
            o = r.className,
            s = r.title,
            u = r.value,
            c = r.innerText,
            f = a + i,
            l = { type: ga, id: i, nodeName: a, className: o, title: s, value: u, text: a === hi ? "" : un(c), path: cn(t.target) };
        if (di === a) {
            var d = t.target.getAttribute("src");
            d && !sn(d) && (l.src = d)
        }
        if (pi === a) {
            var p = t.target.getAttribute("href");
            p && (l.href = p)
        }
        return l.eventHandlerType = e, je.createEvent(null, f, ga, t.type || si, l, n)
    }

    function ln(t, e) { to.context = fn(t, e) }

    function dn() {
        var t = to.context;
        t && t.canEnd() && t.end(), to.context = null
    }

    function pn(t, e) {
        var n = e.originalCallback,
            r = e.eventHandlerType,
            a = t[0],
            i = !a || !a.target || a[ii] || !(us.indexOf(a.type) > -1);
        if (!i) try { ln.call(this, a, r) } catch (o) {}
        var s;
        try { s = n.apply(this, t) } finally { if (!i) try { to.context && !to.context.canEnd() && (a[ii] = !0), dn.apply(this) } catch (o) {} }
        return s
    }

    function hn() { i(us, function(t) { document.addEventListener(t, function(t) { fs.length >= Qa && fs.shift(), fs.push(t) }, _defineProperty({ capture: !0 }, oi, !0)) }) }

    function mn(t) { return t.timeStamp ? Math.round(t.timeStamp + performance.timing.navigationStart) : C() }

    function vn(t) {
        var e = fs.filter(function(t) { return !t[ii] }),
            n = e[e.length - 1];
        if (n) { var r = mn(n); if (Math.abs(r - t) < cs) return fn(n, li, { s: r }) }
    }

    function gn(t) { var e = []; try { e = fs.filter(function(e) { return !e[ii] && e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName }) } catch (n) {} if (e.length > 0) { var r = e[0]; return fn(r, li, { s: mn(r) }) } }

    function yn() { Ji.inline_event_associate_threshold && (cs = Ji.inline_event_associate_threshold), t[pa].hook && (t[pa].hook.eventCb = pn), !t[pa].listenerHooked && t.HTMLElement && (rn(), an()), Ji.disableInlineEvent || hn() }

    function xn(t, e, n) {
        var r = jr().replace(/-/g, ""),
            a = {};
        return i(e, function(e) {!e || n && n[e] || (t.setRequestHeader(e, r), a[e] = r) }), a
    }

    function bn(t) { t.pcid = t.parentContext.id, t.parentContext.updateRemain(1, ya), t.parentContext.items.push(t.contextData) }

    function _n(t) {
        return function e(n, r) {
            var a = this,
                i = e;
            if (i._ && (i._ = 1), !a[Kr]) {
                var o = a[Yr] = {};
                o.method = n, o.url = r, o.id = ds++, o.jserror = !1;
                var s = lo.get("event");
                s && (o.key = s.key, s.remain++), wn(o, to.context), o.parentContext = o.context.parent, o.contextData = { type: ya, id: o.id, cid: o.context.id, method: o.method, url: o.url, state: o.state, ignore: !1, jserror: o.jserror }, o.context && o.context.setData(o.contextData), o.parentContext && bn(o)
            }
            try { return t.apply(a, arguments) } catch (u) {}
        }
    }

    function En(t) {
        return function e(n, r) {
            var a = this,
                i = e;
            if (i._ && (i._ = 1), !a[Kr]) {
                var o = a[Yr],
                    s = Hn(n, Gi.optCustomParamRules);
                Bi.isGather && (o.wReqHeaderParam || (o.wReqHeaderParam = {}), o.wReqHeaderParam[n] = r), o && s && (o.reqHeaderParam || (o.reqHeaderParam = {}), o.reqHeaderParam[n] = r), o.headerRecord || (o.headerRecord = {}), o.headerRecord[n] = r
            }
            try { return t.apply(a, arguments) } catch (u) {}
        }
    }

    function Sn(t) {
        return function e(n) {
            var r = this,
                a = e;
            if (a._ && (a._ = 1), !r[Kr]) {
                var i = r[Yr];
                if (i && (i.start = C(), i.reqSize = w(n), i.requestData = n, i.contextData && (i.contextData.start = i.start)), i.context && null == i.context.parent) {
                    var o = vn(i.start);
                    o && (i.context.parent = o, i.parentContext = i.context.parent, bn(i))
                }!i.parentContext && to.recordingCpActions && (i.context.crossPage = !0, to.cpRemain.ajax++, to.cpActions.push(i.context)),
                    Pn(r);
                var s = Ve(i.url);
                if (Ji.x_server_switch && r.setRequestHeader && Ji.key && i && s) {
                    var u = Bn(),
                        c = "c=B|" + Ji.key;
                    if (u && (c += ";x=" + u), r.setRequestHeader(fa, c), i.xTingyunSent = !0, Ji.apm_headers) {
                        var f = xn(r, Ji.apm_headers, i.headerRecord);
                        i.apms = f
                    }
                }
            }
            try { return t.apply(r, arguments) } catch (l) {}
        }
    }

    function Cn(t) { i(ps, function(e, n) { kr(t, n, function() { Tn(t, e, n) }) }) }

    function Tn(t, e, n) { t && t[Yr] && (t[Yr].errorCode = e, t[Yr].errorEvent = n) }

    function wn(t, e) {
        if (!t.context) {
            var n = "".concat(t.url, "-").concat(t.id);
            t.context = je.createEvent(e, n, ya)
        }
    }

    function An(t, e) { to.context = t.context, to.globalAsyncStore = t, to.globalAjaxContext = e }

    function Rn(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), t.contextData && t.context.state === Oa && Ji.upload_timeout_ajax && (t.contextData.brsOnly = !0, je.buildImmediateAction(ya, "", t.contextData, !1, { state: Oa })), to.globalAsyncStore = null, to.globalAjaxContext = null
    }

    function Dn(t, e) {
        var n = t[ls];
        n && !t[gi] && (F(t, ls, e), t[gi] = !0);
        var r = t[hs];
        r && !t[gi] && (F(t, hs, e), t[gi] = !0)
    }

    function Pn(t) {
        function e(e) {
            return z(function n() {
                var r = n;
                r._ && (r._ = 1), kn(t);
                var a;
                if (Er(e)) {
                    var i = t[Yr];
                    if (i && 4 == t.readyState) {
                        var o = C();
                        An(i, t)
                    }
                    try { a = e.apply(this, arguments) } catch (s) { throw i && (i.jserror = !0), s }
                    i && 4 == t.readyState && (i.cbTime = C() - o)
                }
                return a
            })
        }
        Dn(t, e);
        try { Cn(t) } catch (n) {}
        if (!t[gi]) try {
            kr(t, Fr, z(function r() {
                var e = r;
                e._ && (e._ = 1), kn(t)
            }))
        } catch (n) { return }
        E(function() { Dn(t, e) })
    }

    function kn(t) {
        var e = t[Yr];
        if (e && (e.end = C(), e.readyState = t.readyState, 4 == t.readyState)) {
            An(e), e.status = t.status, e.text = On(t), e.resSize = w(e.text);
            var n = In(e, t),
                r = lo.get("event");
            E(function() { e.callbackEnd || (e.callbackEnd = !0, e && n && e.jserror && (n.jserror = e.jserror), r && r.key == e.key && (r.xhrs.push(n), 0 === --r.remain && r._end()), ko.xhrs && (ko.xhrs[e.url] = n), Rn(e)) })
        }
    }

    function On(t) {
        var e = "";
        if ("" == t.responseType || "text" == t.responseType) e = t.responseText;
        else if (t.response) e = t.response;
        else try { e = t.responseText } catch (n) {}
        return e || ""
    }

    function Nn(t) { return t.data && "event" === t.data.type ? { text: t.data.text, path: t.data.path, nodeName: t.data.nodeName, items: t.items } : t.parent && t.parent.data && "event" === t.parent.data.type ? { text: t.parent.data.text, path: t.parent.data.path, nodeName: t.parent.data.nodeName, items: t.parent.items } : t.parent && t.parent.parent ? Nn(t.parent) : { text: "", path: "", nodeName: "", items: [] } }

    function In(e, n) {
        if (e && !e.composed) {
            var r = e.status;
            if (Bi.isGather) {
                var a = Nn(e.context);
                e.wCustom = { fromJS: "agent", key: Ji.key, ajaxUrl: e.url, items: e.context.items, itemsTemp: a && a.items, id: e.id, url: document.URL, text: a && a.text, xpath: a && a.path, nodeName: a && a.nodeName, method: e.method, urlParams: ot(document.URL), ajaxUrlParams: ot(e.url), start: e.start, requestHeader: e.wReqHeaderParam, requestParams: e.requestData, responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"), responseBody: n.response, children: [] }, t.top && t.top.postMessage && t.top.postMessage(xr(e.wCustom), "*"), delete e.wCustom, delete e.wReqHeaderParam
            }
            y(e.contextData, { end: e.end, du: r > 0 ? e.end - e.start : 0, cb: e.cbTime || 0, status: r, err: e.errorCode ? e.errorCode : 0, rec: e.resSize, send: e.reqSize });
            var i = e.contextData,
                o = {};
            o[na] = e.reqHeaderParam || {};
            var s = oe(e.url),
                u = s.bizIdParams,
                c = s.params,
                f = s.requestParams,
                l = s.optCustomParams,
                d = zn(e.requestData, Gi.bizIdsRules[Vr], Gi.bizIdsRules[Zr]),
                p = zn(e.requestData, Gi.customParamsRules[Vr], Gi.customParamsRules[Zr]),
                h = zn(e.requestData, Gi.requestParamKeys[Qr], Gi.requestParamKeys[ta]);
            o[ra] = le(Fn(e.requestData), Gi.optCustomParamRules[ra], !0);
            var m = Mn(n, Gi.bizIdsRules),
                v = Mn(n, Gi.customParamsRules);
            o[aa] = Mn(n, Gi.optCustomParamRules, aa);
            var g = {},
                x = {},
                b = et(e.text);
            b && (g = Ln(b, Gi.bizIdsRules), x = Ln(b, Gi.customParamsRules), o[ia] = le(b, Gi.optCustomParamRules[ia], !0)), i.bizId_param = y({}, u, d, m, g), i.opt_param = y({}, c, p, v, x), i.request_param = y({}, f, h), i.opt_custom_param = fe(jn(o, l));
            var _ = e.xTingyunSent ? et(qn(n, la)) : null;
            if (_) {
                if (i.hasServerHeader = !0, i.s_id = _.id, i.s_tname = _.tname, i.s_tid = _.tid, i.s_rid = _.rid, i.s_duration = _.duration, "user" in _) {
                    var E = _.user,
                        S = E;
                    if (null != E && 0 === E.indexOf(da)) { var C = E.substring(da.length); try { S = $o.decode(C) } catch (T) {} }
                    i.s_user = S, vt(S)
                }
                "bid" in _ && (i.s_bid = ce(_.bid)), "ber" in _ && (i.s_ber = _.ber), "isError" in ko && (i.s_isError = _.isError)
            } else i.hasServerHeader = !1;
            return e.apms && (i.apms = e.apms), e.composed = !0, i
        }
    }

    function jn(t, e) { return i(e, function(e, n) { t[n] = y({}, t[n] || {}, e || {}) }), t }

    function qn(t, e) { if (t && t.getResponseHeader) try { return t.getResponseHeader(e) } catch (n) {} }

    function Hn(t, e) { var n; return i(e[na], function(e) { return t === e ? (n = !0, !1) : void 0 }), n }

    function Mn(t, e, n) {
        var r = {};
        return i(e[n || Xr], function(e) {
            var n = qn(t, e);
            null != n && rt(r, e, n)
        }), r
    }

    function Ln(t, e, n) {
        var r = {};
        return i(e[n || $r], function(e) {
            var n = ue(oa, e),
                a = n(t);
            null != a && rt(r, e, a)
        }), r
    }

    function zn(t, e, n) { return se(Fn(t), e, n) }

    function Fn(t) { var e = et(t); return e || (e = st(t)), e }

    function Bn() { try { return jr().replace(/-/g, "").substring(0, 16) } catch (t) {} }

    function Un() {
        var e = Mi && Mi.prototype;
        e ? (F(e, "open", _n), F(e, "setRequestHeader", En), F(e, "send", Sn)) : Mi && (t.XMLHttpRequest = function() { var t = new Mi; return F(t, "open", _n), F(t, "setRequestHeader", En), F(t, "send", Sn), t })
    }

    function Yn(t) { t && !t.composed && (y(t.contextData, { end: t.end || C() }), t.composed = !0) }

    function Gn() { Ji.setTimeoutMaxDepth && Ji.setTimeoutMaxDepth > 0 && (vs = Ji.setTimeoutMaxDepth), F(window, "setTimeout", Zn) }

    function Jn(t) { t.context || (t.context = je.createEvent(to.context, "".concat(t.name, "-").concat(t.id), xa, t.name)) }

    function Kn(t) { to.context = t.context, to.globalAsyncStore = t }

    function Wn(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), to.globalAsyncStore = null
    }

    function Vn(t) { for (var e = 0; null != t && 5 > e;) e += t.type === xa ? 1 : 0, t = t.parent; return 5 > e }

    function Xn(t) { return function() { return L(t).apply(this, arguments) } }

    function $n(t, e, n, r) { if (Sr(r) && r[vi] || null == to.context) return Xn(t); if (!Vn(to.context)) return Xn(t); var a = { id: ms++, name: e, start: C(), delay: n, parentContext: to.context }; return Jn(a), a.contextData = { type: xa, id: a.id, cid: a.context.id, name: a.name, start: a.start, delay: a.delay }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, xa), a.parentContext.items.push(a.contextData)), z(function() { var e; try { Kn(a) } catch (n) {} try { t && (e = t.apply(this, arguments)) } finally { try { a.end = C(), Yn(a), Wn(a) } catch (n) {} } return e }) }

    function Zn(t, e) { return function(n) { var r = wr.call(arguments, 0); return !arguments[2] && Er(n) && (r[0] = $n(n, e, r[1], r[2])), t.apply(this, r) } }

    function Qn(t) { y(t.contextData, { pvid: t.pvid, end: t.end, url: t.url }, t.serverData || {}, t.pfData || {}) }

    function tr(t) { t.context || (t.context = je.createEvent(t.parentContext, "".concat(t.src, "-").concat(t.id), ba)) }

    function er(t, e, n) {
        function r() {
            if (a.end = C(), a.sameOrigin && this && this.contentDocument && this.contentWindow) {
                a.sameOrigin = !0, a.url = this.contentDocument.URL;
                var e = re(ca, ua, this.contentWindow[ua] || this.contentDocument.cookie || "");
                if (e) {
                    var n = de(e);
                    ae(ca, "", -1e3, "/", this.contentDocument), a.serverData = pe(n)
                }
                var i = this.contentWindow[Gr],
                    o = this.contentWindow.performance && this.contentWindow.performance.timing,
                    s = { window: this.contentWindow, globalStart: i ? i.globalStart : o.navigationStart, agent: y({}, i && i.currentAgent ? i.currentAgent : {}) };
                i && (a.pvid = i.pvid || "");
                var u;
                try { u = Te(o, s) } catch (c) { u = {} }
                a.pfData = u, a.pfData.le && (a.end = o.navigationStart + a.pfData.le)
            } else a.sameOrigin = !1;
            Qn(a), nr(a), t.removeEventListener("load", r)
        }
        if (t) {
            n || (n = t.src ? xs : ys);
            var a = { id: gs++, src: e, loadType: n, start: C(), parentContext: to.context };
            a.sameOrigin = Ve(a.src), tr(a), a.contextData = { type: ba, loadType: a.loadType, id: a.id, cid: a.context.id, src: a.src, start: a.start, sameOrigin: a.sameOrigin }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, ba), a.parentContext.items.push(a.contextData)), !a.parentContext && to.recordingCpActions && (a.context.crossPage = !0, to.cpRemain.iframe++, to.cpActions.push(a.context)), t.addEventListener("load", r)
        }
    }

    function nr(t) {
        var e = t.context && t.context.canEnd();
        e && t.context.end(), to.context = null
    }

    function rr() {
        function t(t) { return function(e) { return "IFRAME" === e.nodeName && e.src && er(e, e.src, ys), t.apply(this, arguments) } }
        F(Node.prototype, "appendChild", t), F(Node.prototype, "insertBefore", t)
    }

    function ar() {
        function t() {
            var t = arguments[0],
                e = this;
            return er(e, t), r.apply(this, arguments)
        }
        if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
            var e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src"),
                n = e.get,
                r = e.set;
            Object.defineProperty(HTMLIFrameElement.prototype, "src", { get: function() { return n.apply(this, arguments) }, set: t, enumerable: !0, configurable: !0 })
        }
    }

    function ir() { rr(), ar() }

    function or(t) { Eo(ti, xr(t)) }

    function sr() { So(ti) }

    function ur(t) {
        var e = bs++,
            n = t.url || "",
            r = C(),
            a = je.createEvent(to.context, "".concat(n, "-").concat(e), Ea, t.subType || ei),
            i = { type: Ea, subType: a.subType, id: e, cid: a.id, url: n, start: r };
        a && a.setData(i);
        var o;
        return a.parent && (a.parent.type === ya ? In(to.globalAsyncStore, to.globalAjaxContext) : a.parent.type === xa && Yn(to.globalAsyncStore), o = a.collectCrossPageData(), t.delayStorage || or(o), a.clear(), a = null), { storageData: o, context: a }
    }

    function cr(t) {
        return function() {
            var e = arguments[0],
                n = ur({ url: e, delayStorage: !0 }),
                r = n.storageData,
                a = n.context;
            try {
                var i = t.apply(this, arguments);
                if (i) {
                    if (!r && a) {
                        var o = vn(a.data.start);
                        o && (a.parent = o, r = a.collectCrossPageData(), a.clear(), a = null)
                    }
                    or(r)
                }
                return i
            } catch (s) {}
            return m(t, [this, arguments])
        }
    }

    function fr() { F(t, "open", cr) }

    function lr() {
        function t(t) { return { valid: pi === t.target.nodeName && !t.defaultPrevented && t.target.href, url: t.target.href, subType: ni } }

        function e(t) { return { valid: hi === t.target.nodeName && !t.defaultPrevented && t.target.action, url: t.target.action, subType: ri } }
        i([si, ui], function(n) {
            document.addEventListener(n, function(r) {
                if (r) {
                    var a = n === si ? t(r) : e(r);
                    if (a.valid) {
                        var i = r.timeStamp ? gn(r) : vn(mn(r));
                        i && (to.context = i, ur({ subType: a.subType, url: a.url }), to.context = null)
                    }
                }
            }, _defineProperty({}, oi, !0))
        })
    }

    function dr() { kr(t, Lr, function(t) { sr() }) }

    function pr() { fr(), lr(), dr() }

    function hr() { Ji.disableHookEvent || yn(), Ji.disableHookTimer || Gn(), Ji.disableHookIframe || ir(), Ji.disableHookCrossPage || pr() }

    function mr() {
        try { kr(t, "message", Pt) } catch (e) {}
        Ft(ko), hr(), Je(), Un(), $t(), ko._end = C(), Mt(function() { Ho._end = ko._end }), ne();
        var n = _o(ti);
        n && (to.recordingCpActions = !0, to.cpParent = et(n), So(ti))
    }

    function vr(e) { t[Gr] && t[Gr].inited || e && (Er(e) || Sr(e)) && (Dt(e), (Ji.key || Ji.appKey) && (mr(), t[Gr].inited = !0)) }

    function gr() { return Ir() ? void 0 : window[Gr] && 3 === window[Gr].mainVersion ? window[Gr] : (Ko.init = vr, Ko) }
    var yr, xr, br = o("String"),
        _r = o("Array"),
        Er = o("Function"),
        Sr = o("Object"),
        Cr = o("Number"),
        Tr = o("Undefined"),
        wr = [].slice,
        Ar = '"',
        Rr = /([\"\\])/g,
        Dr = /\n/g,
        Pr = t.JSON;
    Pr && Pr.parse && Pr.stringify ? (yr = n, xr = r) : (yr = s, xr = u);
    var kr, Or;
    t.addEventListener ? (kr = f, Or = l) : (kr = d, Or = p);
    var Nr = t.encodeURIComponent,
        Ir = function() { return !document.addEventListener },
        jr = (t.location.protocol, function() {
            function t(t) { return 0 > t ? NaN : 30 >= t ? 0 | Math.random() * (1 << t) : 53 >= t ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN }

            function e(t, e) { for (var n = t.toString(16), r = e - n.length, a = "0"; r > 0; r >>>= 1, a += a) 1 & r && (n = a + n); return n }
            return function() { return e(t(32), 8) + "-" + e(t(16), 4) + "-" + e(16384 | t(12), 4) + "-" + e(32768 | t(14), 4) + "-" + e(t(48), 12) }
        }());
    A.prototype = {
        on: function(t, e) { var n = this; return br(t) ? (n.events[t] || (n.events[t] = [])).push(e) : _r(t) && i(t, function(t) { n.on(t, e) }), n },
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
    var qr = "error",
        Hr = "load",
        Mr = "unload",
        Lr = "beforeunload",
        zr = "pagehide",
        Fr = "readystatechange",
        Br = "complete",
        Ur = "on",
        Yr = "_ty_rum",
        Gr = "TINGYUN",
        Jr = 2,
        Kr = "__ign",
        Wr = "__ty_asyncWrap__",
        Vr = "2",
        Xr = "3",
        $r = "4",
        Zr = "5",
        Qr = "1",
        ta = "2",
        ea = "1",
        na = "2",
        ra = "3",
        aa = "4",
        ia = "5",
        oa = "body",
        sa = "reqBody",
        ua = "TINGYUN_COOKIE_VALUE",
        ca = "TINGYUN_DATA",
        fa = "X-Tingyun",
        la = "X-Tingyun-Data",
        da = "TY_BASE64",
        pa = "__TINGYUN",
        ha = "ty_",
        ma = 64512,
        va = 6e4,
        ga = "event",
        ya = "ajax",
        xa = "timer",
        ba = "iframe",
        _a = "pf",
        Ea = "crossPage",
        Sa = "e",
        Ca = "a",
        Ta = "t",
        wa = "i",
        Aa = "p",
        Ra = "c",
        Da = "finish",
        Pa = "pending",
        ka = "finish",
        Oa = "timeout",
        Na = "fetchStart",
        Ia = "requestStart",
        ja = "responseStart",
        qa = "responseEnd",
        Ha = "domContentLoadedEventStart",
        Ma = "domContentLoadedEventEnd",
        La = "domInteractive",
        za = "domComplete",
        Fa = "loadEventStart",
        Ba = "loadEventEnd",
        Ua = "unloadEventStart",
        Ya = "unloadEventEnd",
        Ga = "domainLookupStart",
        Ja = "domainLookupEnd",
        Ka = "redirectStart",
        Wa = "redirectEnd",
        Va = "connectStart",
        Xa = "connectEnd",
        $a = "secureConnectionStart",
        Za = 5,
        Qa = 5,
        ti = "__ty_crs_page_events",
        ei = "window_open",
        ni = "a_link",
        ri = "form_submit",
        ai = 3e3,
        ii = "__ty_event_patch_tag",
        oi = "__ty_event_patch_disable",
        si = "click",
        ui = "submit",
        ci = "addEventListener",
        fi = "onProperty",
        li = "inline",
        di = "IMG",
        pi = "A",
        hi = "FORM",
        mi = 3,
        vi = "__ty_ignore",
        gi = "__ty_xhr_hooked",
        yi = 200,
        xi = "TY_USER_ID",
        bi = "TY_SESSION_N_ID",
        _i = "TY_DEVICE_N_ID",
        Ei = 18e5,
        Si = "|",
        Ci = "__TY_SPE_STORE",
        Ti = 6e4,
        wi = 6e5,
        Ai = "auto",
        Ri = "defined",
        Di = 200,
        Pi = "success",
        ki = "fail",
        Oi = "TY_path_gather",
        Ni = "EagleEye-TraceID",
        Ii = "__TY_ELEMENT_CB",
        ji = "__TY_CB_COUNTER",
        qi = t.Error,
        Hi = t.document,
        Mi = t.XMLHttpRequest,
        Li = t.location,
        zi = t.navigator,
        Fi = t.HTMLElement,
        Bi = { isGather: !1 },
        Ui = { fp_threshold: 2e3, fs_threshold: 4e3, dr_threshold: 4e3 },
        Yi = { server: {}, appConf: { pvid: jr(), baseInfo: {} } },
        Gi = Yi.appConf,
        Ji = Yi.server,
        Ki = { pvid: Gi.pvid, ref: Hi.URL, referrer: Hi.referrer, v: "3.1.11-nongxin.1", av: "3.1.11-nongxin.1" },
        Wi = Fi ? function(t) { return t instanceof Fi } : function(t) { t && "object" === _typeof(t) && 1 === t.nodeType && br(t.nodeName) },
        Vi = "{0} not support",
        Xi = "illegal argument",
        $i = {},
        Zi = {},
        Qi = {},
        to = { context: null, uniqueId: 0, actions: [], opt_custom_param: {}, unAssignedEvents: [], cpActions: [], recordingCpActions: !1, cpParent: null, cpRemain: { ajax: 0, iframe: 0 }, tryEndCpActionsFailed: !1, globalAsyncStore: null, globalAjaxContext: null, pfSent: !1 },
        eo = [],
        no = [],
        ro = {},
        ao = "undefined" != typeof t.console,
        io = 1,
        oo = 2,
        so = 4,
        uo = 8,
        co = j.prototype;
    co.create = co.before = co.after = co.error = null;
    var fo;
    U.prototype = {
        createContext: function() { return Object.create ? Object.create(this.active) : B(this.active) },
        get: function(t) { return this.active ? this.active[t] : void 0 },
        set: function(t, e) { return this.active ? this.active[t] = e : void 0 },
        enter: function(t) {
            if (!t) throw new qi("context required!");
            this._set.push(this.active), this.active = t
        },
        exit: function(t) {
            if (!t) throw new qi("context required!");
            if (t === this.active) return void(this.active = this._set.pop());
            var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : _(this._set, t);
            if (0 > e) throw new qi("context not currently entered!");
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
    var lo, po, ho, mo = !1,
        lo = G(),
        vo = function() {
            var e = t.navigator.standalone,
                n = t.navigator.userAgent.toLowerCase(),
                r = /safari/.test(n),
                a = /iphone|ipod|ipad/.test(n);
            return a && !e && !r
        },
        go = "POST",
        yo = K,
        xo = !1;
    $.prototype.add = function(t) { this.queue.length >= this.size || (this.queue.push(t), this.running || (this.running = !0, this.run())) }, $.prototype.run = function() {
        var t = this,
            e = function() { t.queue.length > 0 ? t.run() : t.running = !1 };
        this.handler(this.queue.shift(), e)
    }, $.prototype.handler = function(t, e) { po(t, T(function() { e() })) }, po = t.XDomainRequest ? W : V, zi.sendBeacon && (xo = !0);
    var bo = vo();
    bo && (yo = po = V, xo = !1), po || (po = function(t, e) { e() }, xo = !1), kr(t, Lr, function(t) { xo && (po = X) });
    var _o, Eo, So;
    _o = function(e) { try { return t.localStorage.getItem(e) } catch (n) {} }, Eo = function(e, n) { try { t.localStorage.setItem(e, n) } catch (r) {} return n }, So = function(e) { try { t.localStorage.removeItem(e) } catch (n) {} };
    var Co = {},
        To = t.screen;
    To && (Co.sh = To.height, Co.sw = To.width);
    var wo, Ao = t.location.protocol,
        Ro = "http:",
        Do = ["id", "key", "appKey"],
        Po = kt.prototype;
    Po.start = function() { if (!Ji.key) return k("missing config, agent disabled!"), !1; var e = t[Gr]; return e ? (k("already loaded!"), !1) : this }, y(Po, A.prototype);
    var ko = new kt;
    ko.on("send", function(t, e, n, r, a) { _t(), a || (a = St(t, e)), a += "__r=" + C(), r = r || S, tt({ url: a, data: n, callback: r }) });
    var Oo = Ot.prototype;
    Oo.fail = Oo.end = S;
    var No = Nt.prototype;
    No.end = No.finish = No.fail = null, No.send = function(t) {
        this.sent = !0;
        var e = this.getEventData(t),
            n = this.timeout || wi;
        e.duration < n && ko.emit("send", "/spe", null, e, S)
    }, No.getEventData = function(t) {
        var e = this,
            n = t.event && t.event.xhrs || [];
        return i(n, function(t) { t.startSpeOffset = t.start - e.s }), { key: e.key, start: e.s, duration: e.e - e.s, status: e.status, type: e.type, xhrs: n }
    }, No.refreshEventAndStore = function(t) {
        this.finish();
        var e = this.getEventData(t);
        Eo(Ci, xr(e))
    };
    var Io = {},
        jo = {},
        qo = Gi.debuggable,
        Ho = { start: e, e: {}, an: { count: 0 }, visible: [] };
    ! function() {
        if (Gi.debuggable) {
            var t, e, n = "visibilitychange";
            Tr(Hi.hidden) ? Tr(Hi.msHidden) ? Tr(Hi.webkitHidden) || (t = "webkitHidden", e = "webkit" + n) : (t = "msHidden", e = "ms" + n) : (t = "hidden", e = n), Tr(Hi.addEventListener) || Tr(Hi[t]) || kr(Hi, e, Lt(function() { Ho.visible.push([Hi[t], C()]) }))
        }
    }();
    var Mo = new A,
        Lo = 1e4,
        zo = 0,
        Fo = "report",
        Bo = "error";
    Bt.prototype = { add: function(t, e) { this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++) }, get: function(t) { return this.c[t] }, reset: function() { this.c = {}, this.len = 0 } };
    var Uo = new Bt(100),
        Yo = {},
        Go = {};
    Gt.prototype = {
        increase: function() { this.recordFileName(), this.count++ },
        recordFileName: function() {
            var t = this.filename || "_";
            this.fep += Go[t] ? 0 : 1, Go[t] = !0
        },
        fix: function() {
            var t = this,
                e = t.stack;
            if (e && br(e)) {
                e = e.split(/\n/);
                var n = [];
                i(e, function(t, e) {-1 == t.indexOf(Wr) && n.push(t) }), t.stack = n.join("\n")
            }
        },
        toObject: function() {
            var t = this,
                e = { o: t.time, e: t.msg, l: t.lineno, c: t.colno, r: t.filename, ec: t.count, s: t.stack, m: t.module, ep: t.ep, fep: t.fep, tr: t.trigger };
            return t.metaData && (e.meta = t.metaData), e
        }
    };
    var Jo = { host: "cshst", url: "csurl" },
        Ko = { mainVersion: mi, version: "3.1.11-nongxin.1", key: Ji.key, pvid: Gi.pvid, config: Zt, DIAGNOSE_HREF: Jr, diagnose: I, createEvent: It, logFirstScreen: Qt, addExcludedDomain: te, globalStart: e, currentAgent: ko, mark: ee, wrapVueRouter: Ht, endSession: xt, setUid: vt, createAutoEvent: qt, endStoreEvent: jt, captureException: Xt },
        Wo = 0,
        Vo = {},
        Xo = t,
        $o = function() {
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
                s = Xo.btoa ? function(t) { return Xo.btoa(t) } : function(t) { return t.replace(/[\s\S]{1,3}/g, o) },
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
                m = Xo.atob ? function(t) { return Xo.atob(t) } : function(t) { return t.replace(/\S{1,4}/g, h) },
                v = function(t) { return m(String(t).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                g = function(t) { return p(m(t)) },
                y = function(t) { return g(String(t).replace(/[-_]/g, function(t) { return "-" == t ? "+" : "/" }).replace(/[^A-Za-z0-9\+\/]/g, "")) };
            return { atob: v, btoa: s, utob: i, encode: c, encodeURI: f, btou: p, decode: y }
        }(),
        Zo = function() { try { var e = jr(); return t.localStorage.setItem(e, e), t.localStorage.removeItem(e), !0 } catch (n) { return !1 } }(),
        Qo = {};
    Qo.localStorage = Zo,
        function() {
            function e() {
                var e, f, l = Hi.documentElement;
                l.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = o = !0, t.getComputedStyle && (f = t.getComputedStyle(c), n = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, a = "4px" === (f || { width: "4px" }).width, c.style.marginRight = "50%", r = "4px" === (f || { marginRight: "4px" }).marginRight, e = c.appendChild(Hi.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", i = 0 === c.getClientRects().length, i && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === e[0].offsetHeight, i && (e[0].style.display = "", e[1].style.display = "none", i = 0 === e[0].offsetHeight)), l.removeChild(u)
            }
            var n, r, a, i, o, s, u = (Hi.documentElement, Hi.createElement("div")),
                c = Hi.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", Qo.opacity = "0.5" === c.style.opacity, Qo.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", Qo.clearCloneStyle = "content-box" === c.style.backgroundClip, u = Hi.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), Qo.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, Qo.reliableHiddenOffsets = function() { return null == n && e(), i })
        }();
    var ts = [ya, xa, ba];
    je.prototype.end = function(t) {
        if (this.closed) return void(this.cleared || console.warn("Current context is already closed"));
        if (t && (this.actionCount.ajax += t.actionCount.ajax, this.actionCount.iframe += t.actionCount.iframe, Ne(this.items, t), this.updateRemain(-1, t.type)), this.isNoRemain() || this.isTimeout)
            if (this.e = C(), this.closed = !0, this.i && clearTimeout(this.i), this.e - this.s > Ji.event_timeout && (this.isTimeout = !0), this.setState(this.isTimeout ? Oa : ka), this.data && (this.data.state = this.state), this.parent) this.parent.end(this);
            else {
                var e;
                this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? e = this.composeTimeoutActionData() : this.isMeaningfulAction() && (e = this.composeActionData()), e && (!this.crossPage || e.type !== ya && e.type !== ba ? Pe(e) : (to.cpRemain[e.type]--, P() && to.tryEndCpActionsFailed && ke())), to.context = null
            }
    }, je.prototype.isNoRemain = function(t) { var e = !0; return i(this.remain, function(n) { var r = n.current <= 0 && (t ? !0 : n.children <= 0); return r ? void 0 : (e = !1, !1) }), e }, je.prototype.clear = function() { this.closed = !0, this.cleared = !0, this.i && clearTimeout(this.i) }, je.prototype.isMeaningfulAction = function() { return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 }, je.prototype.isRemainMeaningfulAction = function() { return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0 }, je.prototype.timeout = function() { this.isTimeout = !0, this.setState(Oa), this.end(null, !0) }, je.prototype.setData = function(t) { this.data = t }, je.prototype.composeActionData = function() { return { type: this.type, subType: this.subType, start: this.s, end: this.e, duration: this.e - this.s > 0 ? this.e - this.s : 0, data: y({}, this.data || {}, { items: (this.items || []).slice() }) } }, je.prototype.composeTimeoutActionData = function() { return this.collectActionDataFromTop(), this.composeActionData() }, je.prototype.collectActionDataFromTop = function(t) { null == t && (t = this), Ie(t.items, t.children) }, je.prototype.collectCrossPageData = function(t) { if (t || (t = []), this.crossPage = !0, this.data && (this.data.crossPage = !0), t.unshift(this.data), this.parent) return this.parent.collectCrossPageData(t); var e = { type: this.type, subType: this.subType, start: this.s }; return (this.isNoRemain() || 1 === this.children.length) && this.clear(), { action: e, data: t, url: St("/action"), commonActionInfo: we() } }, je.prototype.canEnd = function() { return !this.closed && this.isNoRemain(!0) }, je.prototype.updateRemain = function(t, e) {
        if (this.remain[e]) {
            e || (e = ya);
            var n = t || 0;
            this.remain[e].current = this.remain[e].current + n;
            for (var r = this.parent; r;) r.remain[e].children = r.remain[e].children + n, r = r.parent
        }
    }, je.prototype.setState = function(t) { return this.stateChanged ? !1 : (this.state = t, this.stateChanged = !0, !0) }, je.prototype.current = function() { return to.context }, je.createEvent = function(t, e, n, r, a, i) { return new je(t, e, n || "event", r || null, a, i) }, je.buildImmediateAction = function(t, e, n, r, a) { var i = y({ type: t, subType: e, state: Da, data: n }, a || {}); return i.data && (i.data.state = i.state), r || Pe(i), i };
    var es = 0,
        ns = /(msie|trident)/i.test(zi.userAgent),
        rs = Hi.createElement("a"),
        as = Ke(Li.href),
        is = [si, ui],
        os = 1,
        ss = 2,
        us = [si, ui],
        cs = yi,
        fs = [];
    sn.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    var ls = "onload",
        ds = 0,
        ps = { error: 990, abort: 905, timeout: 903 },
        hs = Ur + Fr,
        ms = 0,
        vs = Za,
        gs = 0,
        ys = "load",
        xs = "reload",
        bs = 0,
        _s = gr();
    return _s
}(window, +new Date);
window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { id: 'wMkafLj7G64', bizId_rule: [], opt_param_rule: [], x_server_switch: true, request_param_keys: [{ type: 0, key: 'bb' }, { type: 0, key: 'cc' }, { type: 0, key: 'aa' }, { type: 1, key: 'mmmm' }, { type: 1, key: 'nnnn' }, { type: 1, key: '{yy}' }], opt_custom_param_rule: [{ type: 2, key: 'po1' }, { type: 1, key: 'pi' }, { type: 1, key: 'mmmm' }, { type: 1, key: 'nnnn1' }, { type: 2, key: 'wjn_test' }, { type: 3, key: 'delay' }, { type: 4, key: 'X-Tingyun-Data' }, { type: 5, key: 'data' }, { type: 1, key: '{yy}' }, { type: 1, key: 'aaa' }, { type: 1, key: '112' }, { type: 2, key: 'dasdad' }, { type: 1, key: 'addnew' }], event_timeout: 60000, cross_page_delay: 3000, ignore_err: false, filter_robot: false, beacon: 'apm3brsdev.tingyun.com', beacon_err: 'apm3brsdev.tingyun.com', appKey: '0bc391f1a8464fbf8079b9fd3f100998', trace_threshold: 2002, fp_threshold: 400, fs_threshold: 802, dr_threshold: 602 }; }); /*TY_AGENT_END*/
// window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { id: 'wMkafLj7G64', bizId_rule: [], opt_param_rule: [], x_server_switch: true, request_param_keys: [{ type: 0, key: 'bb' }, { type: 0, key: 'cc' }, { type: 0, key: 'aa' }, { type: 1, key: 'mmmm' }, { type: 1, key: 'nnnn' }, { type: 1, key: '{yy}' }], opt_custom_param_rule: [{ type: 2, key: 'po1' }, { type: 1, key: 'pi' }, { type: 1, key: 'mmmm' }, { type: 1, key: 'nnnn1' }, { type: 2, key: 'wjn_test' }, { type: 3, key: 'delay' }, { type: 4, key: 'X-Tingyun-Data' }, { type: 5, key: 'data' }, { type: 1, key: '{yy}' }, { type: 1, key: 'aaa' }, { type: 1, key: '112' }, { type: 2, key: 'dasdad' }, { type: 1, key: 'addnew' }], event_timeout: 60000, cross_page_delay: 3000, ignore_err: false, filter_robot: false, beacon: 'apm3brsdev.tingyun.com', beacon_err: 'apm3brsdev.tingyun.com', key: 'r9SpOCCXHHs', token: '6e9e9b5cd4654f1ba4ff492b7fb38cca', trace_threshold: 2002, fp_threshold: 400, fs_threshold: 802, dr_threshold: 602 }; }); /*TY_AGENT_END*/