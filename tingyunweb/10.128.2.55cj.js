/*AGENT_VERSION=3.2.1*/
"use strict";

function _defineProperty(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

function _typeof(t) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
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

    function u(t) { switch (_typeof(t)) {
            case "object":
                if (!t) return null; if (t instanceof Array) { var e = Wr.call(t); return i(e, function(t, n) { e[n] = u(t) }), "[" + e.join(",") + "]" } if (t instanceof Date) return t.getTime().toString(); var n = ""; return i(t, function(t, e) { Fr(t) || (n += u(e) + ":" + u(t) + ",") }), n && (n = n.substr(0, n.length - 1)), "{" + n + "}";
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
                return '"undefined"' } }

    function c(t) { return t && Br(t) ? Mr(t) : t }

    function f(t, e, n, r) { return t.addEventListener(e, n, r) }

    function l(t, e, n) { return t.attachEvent("on" + e, n) }

    function d(t, e) { return Function.prototype.apply.apply(t, e) }

    function p(t, e) { return function() { t.apply(e, arguments) } }

    function h(t) { return Qr ? Qr(t) : t }

    function m(t) { var e = arguments.length; if (2 > e || !t) return t; var n = Wr.call(arguments, 1); return i(n, function(e) { i(e, function(e, n) { t[n] = e }) }), t }

    function v(t, e) { return t ? e ? t.replace(/\{(\w+.?\w+)\}/g, function(t, n) { return e[n] || "" }).replace(/\{(\d+)\}/g, function(t, n) { return e[n] || "" }) : t : "" }

    function g(t, e, n) { var r; if (null == t) return -1; var a = Object(t),
            i = a.length >>> 0; if (0 === i) return -1; var o = +n || 0; if (Math.abs(o) === 1 / 0 && (o = 0), o >= i) return -1; for (r = Math.max(o >= 0 ? o : i - Math.abs(o), 0); i > r;) { if (r in a && a[r] === e) return r;
            r++ } return -1 }

    function y(t, e) { var n = null == t ? 0 : t.length; if (!n) return -1; for (var r = n; r--;)
            if (t[r] === e) return r;
        return r }

    function x(t) { return setTimeout(t, 0) }

    function b(t) { return setTimeout(t, 0, { __ty_ignore: !0 }) }

    function _() {}

    function S() { var t = window && window.performance; return t && t.timing && t.timing.navigationStart && t.now ? Math.round(t.timing.navigationStart + t.now()) : +new Date }

    function E(t) { return function() { if (null !== t) { var e = t;
                t = null, e.apply(this, arguments) } } }

    function T(e) { return e ? Br(e) ? e.length : t.ArrayBuffer && e instanceof ArrayBuffer ? e.byteLength : t.Blob && e instanceof Blob ? e.size : e.length ? e.length : 0 : 0 }

    function C() { this.events = {} }

    function A(t, e) { return setTimeout(t, e || 0, { __ty_ignore: !0 }) }

    function w(t, e) { Go[t] = e }

    function R() { return 0 === Wo.cpRemain.ajax && 0 === Wo.cpRemain.iframe }

    function P(t) { I(t, Jo) }

    function D(t) { I(t, Ko) }

    function I(t, e) { var n = "ok"; return t ? void e.push(t) : n = e.length ? e.join("\n") : n }

    function N(t) {
        function e(t, e, r) { var a = r || "log",
                i = n[t] || (n[t] = {});
            i[a] = i[a] || "", i[a] += e } var n = {},
            r = P(); if (e("Status", r, "ok" !== r), e("Debug", D()), i(Vo, function(t, n) { e("Timeline", n + ": " + t.toString()) }), !t && Xo) console.log("[TingYun Agent Diagnosis]\n"), i(n, function(t, e) { var n = console[e];
            i(n, function(t, e) { console[e](t) }) });
        else { if (t !== da) return Lr(n);
            Io.href = Io.href + "#" + Lr(n) } }

    function k(t, e) { this.flags = 0, Fr(t.create) && (this.create = t.create, this.flags |= $o), Fr(t.before) && (this.before = t.before, this.flags |= Qo), Fr(t.after) && (this.after = t.after, this.flags |= Zo), Fr(t.error) && (this.error = t.error, this.flags |= ts), this.data = e }

    function O(t, e) { if (!ns) { if (!zr(t) || !t) throw new TypeError("callbacks arguments must be an object"); return ns = new k(t, e) } }

    function j(t) { var e = ns.data; if (0 !== (ns.flags & $o)) { var n = ns.create(ns.data);
            void 0 !== n && (e = n) } return function r() { 0 !== (ns.flags & Qo) && ns.before(this, e); var n = r;
            n._ && (n._ = 1); try { var a = t.apply(this, arguments) } catch (i) { throw 0 !== (ns.flags & ts) && ns.error(e, i), i } return 0 !== (ns.flags & Zo) && ns.after(this, e), a } }

    function q(t) { return function() { var e; try { e = t.apply(this, arguments) } finally { Wo.context = null } return e } }

    function H(t) { return !ns || ns.flags <= 0 ? t : j(t) }

    function M(t) { return q(H(t)) }

    function L(t, e, n) { if (t && n && Fr(n)) { var r = t[e]; if (!r || !r._wrapped) { var a = n(r, e); return a && (a._wrapped = !0), t[e] = a, a } } }

    function B(t) {
        function e() {} return e.prototype = t, new e }

    function U() { this.id = null, this.active = null, this._set = [] }

    function F() { var t = new U; return t.id = O({ create: function() { return t.active }, before: function(e, n) { n && t.enter(n) }, after: function(e, n) { n && t.exit(n) }, error: function(e, n) { if (e) { try { var r = "moduleId";
                        n[r] = e[r] } catch (a) {}
                    t.exit(e) } } }), t }

    function z() { return ss || (rs = F(), ss = !0), rs }

    function Y(t) { try { return c(t) } catch (e) { P(e && e.message) } return null }

    function G() { return ps }

    function W(t) { return Br(t) || (t = Lr(t)), t }

    function J(t, e) { e = e || _; var n = new Image;
        $r(n, oa, function() {
            ("loaded" == n.readyState || 4 == n.readyState) && e(null) }, !1), $r(n, na, function() { e(null) }, !1), $r(n, ea, function() { e(ea) }, !1), n.src = t }

    function K(t, e) { var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = new XDomainRequest;
        i[pa] = !0, i.open(ms, n), i.onload = function() { a(null, i.responseText), e() }, i.onerror = function(t) { a(t), e() }, hs(function() { i.send(W(r)) }) }

    function V(t, e) { var n = t.url,
            r = t.data,
            a = t.header,
            i = t.callback,
            o = E(i),
            s = new Do;
        s[pa] = !0, s.overrideMimeType && s.overrideMimeType("text/html"), s.onreadystatechange = function() { 4 == s.readyState && 200 == s.status && (o(null, s.responseText), e()) }, s.onerror = function() { o(), e() }; try { s.open(ms, n, !0); for (var u in a) s.setRequestHeader(u, a[u]);
            s.send(W(r)) } catch (c) { e() } }

    function X(t, e) { var n = t.url,
            r = t.data,
            a = (t.header, t.callback),
            i = No.sendBeacon(n, W(r));
        i && (a && a(), e()) }

    function $(t) { this.size = t || 100, this.queue = [], this.running = !1 }

    function Q() { vs = fs = V, gs = !1 }

    function Z(t) { ls = new $(t) }

    function tt(t) { ls.add(t) }

    function et(t) { var e = t || new Date,
            n = e.getFullYear() + "-",
            r = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
            a = e.getDate() + " "; return n + r + a }

    function nt(t, e, n) { if (null == t[e] || Ur(t[e])) Ur(t[e]) ? t[e].push(n) : t[e] = n;
        else { var r = t[e];
            t[e] = [r], t[e].push(n) } }

    function rt(t) { return t.send_protocol ? t.send_protocol : bs !== _s && /^https/i.test(t && t.protocol || bs) ? "https:" : _s }

    function at(t) { if (!t || !Br(t)) return ""; var e, n = t.indexOf("?"); return n >= 0 && (e = t.substring(n + 1)), e }

    function it(t) { var e = at(t),
            n = ct(e); return { queryObj: n, queryString: e } }

    function ot(t) { var e = at(t); return ct(e) }

    function st(t) { return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? ot(t) : {} }

    function ut(t) { var e = {}; return t = t || "", Br(t) && t ? e = ct(t) : e }

    function ct(t) { var e = {}; return t && i(t.split("&"), function(t) { var n = t.split("="),
                r = ft(n[0]),
                a = ft(n[1]); if (Br(a)) { var i = Y(a);
                null != i && (a = i) }
            r && null != a && nt(e, r, a) }), e }

    function ft(t) { try { return decodeURIComponent(t) } catch (e) {} return null }

    function lt(t) { var e = []; return i(t, function(t, n) { var r = h(n) + "=" + h(t);
            e.push(r) }), e.join("&") }

    function dt(t, e) { var n = lt(e); return t += (t.indexOf("?") > 0 ? "&" : "?") + n }

    function pt(t, e, n) { var r = null; return t && e && (r = xs + "//" + t + e, n && (r += "?" + lt(n))), r }

    function ht(t) { xs = rt(t) }

    function mt() { var t = as(Yi); return t ? t : is(Yi, ta()) }

    function vt() { return as(Fi) }

    function gt(t) { if (null != t) { var e = vt();
            null != e && t !== e && bt(), is(Fi, t) } }

    function yt() { var t = as(zi); return t ? t.split(Wi) : null }

    function xt(t) { t && 3 === t.length && is(zi, t.join(Wi)) }

    function bt() { var t = _t();
        Pt(t) }

    function _t() { var t = S(),
            e = [ta(), t, t]; return xt(e), e }

    function St() { var t = S(),
            e = yt();
        Et(e) ? bt() : (e[2] = t, xt(e)) }

    function Et(t) { return !t || 3 !== t.length || S() - +t[2] > Gi }

    function Tt(t, e) { return pt(Mo.beacon, t, Ct(e)) }

    function Ct(t) { var e = Dt(); return m({}, Lo, e, t || {}, Ho.baseInfo, us || {}) }

    function At(t) { return t in Mo ? Mo[t] : !0 }

    function wt(t) { var e = {}; return i(t, function(t) { t && g(e[t.type] || [], t.key) < 0 && (e[t.type] = e[t.type] || []).push(t.key) }), e }

    function Rt(t) { var e = {}; if (t) { var n = [So, Eo, To, Co, Ao];
            i(t.split(""), function(t, r) { e[n[r]] = "1" === t }) } return e }

    function Pt(t) { t[0] && (Lo.sid = t[0]), t[1] && (Lo.__s = +t[1]) }

    function Dt() { var t = { did: mt() },
            e = vt(); return e && (t.uid = e), t }

    function It(e) { var n = {}; if (Fr(e)) { var r = {};
            e(r), n = r.server } else n = e;
        t[ka] || (t[ka] = { hook: {} }), m(qo.server, jo, n || {}, t[ka].config || {}), m(qo.appConf, { bizIdsRules: wt(Mo.bizId_rule), customParamsRules: wt(Mo.opt_param_rule), requestParamKeys: wt(Mo.request_param_keys), corsDomains: Mo.cors_domains || [], optCustomParamRules: wt(Mo.opt_custom_param_rule), ignoreNoFilePropError: At("ignore_err"), debuggable: At("debug"), sessionTimeout: Mo.session_timeout || Gi, collectAllParam: Rt(Mo.collect_all_param) }), i(Ss, function(e) { Mo[e] && (Ho.baseInfo[e] = Mo[e], t[la][e] = Mo[e]) }), m(Lo, Dt()); var a = yt(); if (Et(a) && (a = _t()), Pt(a), qo.server.event_timeout || (qo.server.event_timeout = qa), Mo.appKey && Q(), Mo.apm_arms) { Mo.apm_headers || (Mo.apm_headers = []); var o = G() ? Mo.apm_headers.indexOf(ro) < 0 : g(Mo.apm_headers, ro) < 0;
            o && Mo.apm_headers.push(ro) }
        ht(Mo), Z(Mo.req_capacity) }

    function Nt(e) { try { var n; if (!e || !e.data || 0 !== e.data.indexOf("_TINGYUN")) return; if (n = e.data.replace("_TINGYUN", ""), Y(n)) { var r = Y(n); if ("gather" === r.type && "APM" === r.fromJS && !t[no]) { Oo.isGather = !0; var a = e.origin,
                        i = Po.getElementsByTagName("head")[0],
                        o = Po.createElement("script");
                    o.type = "text/javascript", o.src = a + "/assets/lib/gather/path-gather.min.js?version=" + et(new Date), i.appendChild(o) } } } catch (s) {} }

    function kt() { var t = this;
        t.xhrs = {}, t.errs = [], C.call(t) }

    function Ot() { return { optCustomParam: Wo.opt_custom_param } }

    function jt(t) { return t || (t = Ot()), "".concat(Va).concat(Lr(t)) }

    function qt(t, e) { if (t) { e = e || {}; var n = Ht(t); if (n) try { var r = n + Lr(t),
                    a = [r];
                a.unshift(e.commonActionInfoMessage ? e.commonActionInfoMessage : jt()); var i = a.join("\n"),
                    o = { ps: e.crossPage || n === Ka ? 1 : 0 };
                m(o, e.query || {}), Ts.emit("send", "/action", o, i, function() { t.type === Ua && (Ts.xhrs = Ts.errs = null), e.cb && e.cb() }, e.url) } catch (s) {} } }

    function Ht(t) { var e = ""; return t.type === Ha ? e = Ya : t.type === Ma ? e = Ga : t.type === Ba ? e = Ja : t.type === La ? e = Wa : t.type === Ua ? e = Ka : t.type === za && (e = Xa), e }

    function Mt(t, e) { for (var n = S(), r = e.length - 1; r >= 0; r--) { var a = e[r];
            a.type === Ha || a.end || (a.end = n), e[r - 1] && (e[r - 1].items = [a]); var i = void 0;
            i = a.start && a.end && a.end - a.start > Mo.event_timeout ? ti : a.type === Ha ? e[r + 1] && e[r + 1].state || Za : Za, a.state = i }
        t.data = e[0], t.end = n }

    function Lt(t) { var e = Wo.cpParent; if (e) { if (t && (Wo.recordingCpActions = !1), !R()) return void(Wo.tryEndCpActionsFailed = !0); var n = e.action,
                r = e.data,
                a = e.commonActionInfo,
                o = e.url; if (n && r && 0 !== r.length) { var s = [];
                i(Wo.cpActions, function(t) { t.data && (t.data.crossPage = !0), s.push(t.data) }), r[r.length - 1].items = s, Mt(n, r), n.data && (n.data.range = bo); var u = jt(m(a || {}, { cpOptCustomParam: Wo.opt_custom_param, pageParam: Ct() }));
                qt(n, { commonActionInfoMessage: u, url: o, crossPage: !0 }) } } }

    function Bt(t) { if (t) { var e = t.action,
                n = t.data;
            e && n && 0 !== n.length && (Mt(e, n), qt(e)) } }

    function Ut() { var t = {}; return i(Cs, function(e) { t[e] = { current: 0, children: 0 } }), t }

    function Ft(t, e) { i(t, function(t) { t.cid === e.id && (t.items = e.items || []) }) }

    function zt(t, e) { i(t, function(t) { i(e, function(e) { t.cid === e.id && (t.state || (t.state = e.state), t.items = e.items || []) }) }), i(e, function(t) { zt(t.items, t.children) }) }

    function Yt(t, e, n, r, a, i) { i = i || {}, this.id = ++Wo.uniqueId, this.parent = t || null, this.children = [], this.name = e || "", this.type = n || Ha, this.subType = this.type === Ha ? r || "click" : r, this.items = [], this.remain = Ut(), this.s = i.s || S(), this.e = null, this.data = a, this.state = Qa, this.crossPage = i.crossPage || !1; var o = this;
        null == this.parent && (this.i = A(function() { o.timeout() }, Mo.event_timeout)), this.closed = !1, this.isTimeout = !1, this.cleared = !1, this.stateChanged = !1, this.actionCount = { ajax: n === Ma ? 1 : 0, iframe: n === Ba ? 1 : 0 }, this.sent = !1, this.speBinded = !1, this.spe = null, this.waitingSpeEnd = !1, this.waitingSpeTimer = null, null != this.parent && this.parent.children.push(this), this.eventData = null }

    function Gt(e, n) { return function(r) { if (t[ka].hook && t[ka].hook.eventCb && te(r)) { var a = { originalCallback: e, eventHandlerType: n }; return t[ka].hook.eventCb.call(this, arguments, a) } return e.apply(this, arguments) } }

    function Wt(t, e, n) { return n === Rs ? Gt(t, e) : (t.handleEvent = Gt(t.handleEvent, e), t) }

    function Jt(t) { return Fr(t) }

    function Kt(t) { return zr(t) && Fr(t.handleEvent) }

    function Vt(t) { var e; return Jt(t) ? e = Rs : Kt(t) && (e = Ps), { isValid: t && e, listenerType: e } }

    function Xt(t) { return function() { var e = arguments[0],
                n = arguments[1],
                r = arguments[2],
                a = !0;
            r && zr(r) && r[Ri] && (a = !1); var i = Vt(n),
                o = i.isValid,
                s = i.listenerType; if (a && ws.indexOf(e) > -1 && o) { var u; if (n[ao] && n[ao][this]) u = n[ao][this];
                else { var c = Wt(n, Ni, s);
                    s === Rs && (n[ao] || (n[ao] = {}, n[ao][io] = 0), n[ao][this] = { listener: c, options: arguments[2] }, n[ao][io]++, u = n[ao][this]) }
                u && (u.listener && (arguments[1] = u.listener), u.options && (arguments[2] = u.options)) } return t && t.apply(this, arguments) } }

    function $t(t) { return function(e, n) { var r; try { r = t && t.apply(this, arguments) } finally { try { if (n && ws.indexOf(e) > -1) { var a = n[ao];
                        a && a[this] && a[this].listener && (null != a[this].options ? this.removeEventListener(e, a[this].listener, a[this].options) : this.removeEventListener(e, a[this].listener), a[this] = null, a[io]--, a[io] <= 0 && (n[ao] = null, delete n[ao])) } } catch (i) {} } return r } }

    function Qt() { t.EventTarget && (L(t.EventTarget.prototype, "addEventListener", function(t) { return Xt(t) }), L(t.EventTarget.prototype, "removeEventListener", function(t) { return $t(t) })) }

    function Zt() { Object.getOwnPropertyDescriptor && Object.defineProperty && ws.forEach(function(e) { var n = "on" + e,
                r = Object.getOwnPropertyDescriptor(t.HTMLElement.prototype, n),
                a = r.get,
                i = r.set;
            Object.defineProperty(t.HTMLElement.prototype, n, { get: function() { return a.apply(this, arguments) }, set: function() { var t = arguments[0]; return t && (arguments[0] = Wt(t, ki, Rs)), i && i.apply(this, arguments) }, configurable: !0, enumerable: !0 }) }) }

    function te(e) { return e && e.target instanceof t.HTMLElement && e.currentTarget instanceof t.HTMLElement }

    function ee(t) { return As.call(t) }

    function ne(t) { return !!t.match(ne.regex) }

    function re(t) { return t && t.substr(0, 256) || "" }

    function ae(t) { try { if (!t) return ""; for (var e = [], n = t.parentNode, r = function() { var r = t.tagName,
                        a = void 0;
                    a = n.children; var i = void 0;
                    i = a ? 1 === [].filter.call(a, function(t) { return t.tagName === r }).length ? r : "".concat(r, ":nth-child(").concat(1 + [].indexOf.call(a, t), ")") : r; var o = t.id ? "#".concat(t.id) : "",
                        s = t.className;
                    Br(s) && (s = ee(s)); var u = s ? s.split(" ").filter(function(t) { return ee(t) }).map(function(t) { return ".".concat(t) }).join("") : "";
                    e.unshift("".concat(i).concat(o).concat(u)), t = n, n = t.parentNode }; n;) r(); return "".concat(e.join(" > ")).toLowerCase() } catch (a) {} }

    function ie(t) { return !t.isTrusted || null != t.pointerType && !t.pointerType }

    function oe(t, e, n) { var r = t.target,
            a = r.nodeName,
            i = r.id,
            o = r.className,
            s = r.title,
            u = r.value,
            c = r.innerText,
            f = a + i,
            l = ie(t),
            d = { type: Ha, id: i, nodeName: a, className: o, title: s, value: u, text: a === Hi ? "" : re(c), path: ae(t.target), trigger: l ? yo : go, range: xo, eventId: ta() }; if (l) { var p = t.timeStamp && S();
            Os && Math.abs(p - Os.timestamp) <= Ns && (d.refId = Os.eventId) } else Os = { timestamp: t.timeStamp && S(), eventId: d.eventId }; if (ji === a) { var h = t.target.getAttribute("src");
            h && !ne(h) && (d.src = h) } if (qi === a) { var m = t.target.getAttribute("href");
            m && (d.href = m) } return d.eventHandlerType = e, Yt.createEvent(null, f, Ha, t.type || Pi, d, n) }

    function se(t, e) { Wo.context = oe(t, e) }

    function ue() { var t = Wo.context;
        t && t.canEnd() && t.end(), Wo.context = null }

    function ce(t, e) { var n = e.originalCallback,
            r = e.eventHandlerType,
            a = t[0],
            i = !a || !a.target || a[wi] || !(Ds.indexOf(a.type) > -1); if (!i) try { se.call(this, a, r) } catch (o) {}
        var s; try { s = n.apply(this, t) } finally { if (!i) try { Wo.context && !Wo.context.canEnd() && (a[wi] = !0), ue.apply(this) } catch (o) {} } return s }

    function fe() { i(Ds, function(t) { document.addEventListener(t, function(t) { ks.length >= _i && ks.shift(), ks.push(t) }, _defineProperty({ capture: !0 }, Ri, !0)) }) }

    function le(t) { try { return 13 === (t + "").split(".")[0].length } catch (e) {} return !1 }

    function de(n) { var r = t.performance && t.performance.timing ? t.performance.timing.navigationStart : e,
            a = n.timeStamp; return a = a ? le(a) ? a : Math.round(n.timeStamp + r) : S() }

    function pe(t) { var e = ks.filter(function(t) { return !t[wi] }),
            n = e[e.length - 1]; if (n) { var r = de(n); if (Math.abs(r - t) < Is) return oe(n, Oi, { s: r }) } }

    function he(t) { var e = []; try { e = ks.filter(function(e) { return !e[wi] && e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName }) } catch (n) {} if (e.length > 0) { var r = e[0]; return oe(r, Oi, { s: de(r) }) } }

    function me() { Mo.inline_event_associate_threshold && (Is = Mo.inline_event_associate_threshold), Mo.script_event_associate_threshold && (Ns = Mo.script_event_associate_threshold), t[ka].hook && (t[ka].hook.eventCb = ce), !t[ka].listenerHooked && t.HTMLElement && (Qt(), Zt()), Mo.disableInlineEvent || fe() }

    function ve(t) { var e = t,
            n = t.xhrs;
        e.hasAjax = n && n.length > 0, delete e.xhrs; var r = { ss: 1 };
        t.type === Qi && (r.rs = 1), Yt.buildImmediateAction(Ha, Ii, { type: Ha, items: n, spe: e }, { sendOptions: { query: r } }) }

    function ge(t) { if (qs[t.key]) { var e = qs[t.key]; if (delete qs[t.key], e.speBinded) { var n = e.setSpe(t);
                n || (!e.isMeaningfulAction() && e.isNoRemain() ? ve(t) : A(function() { e.sent || ve(t) }, fo)) } } else ve(t) }

    function ye(t) { Xo && console.warn(t || "Event key required!") }

    function xe(t) { t = t || {}, this.key = t.key, this.type = t.type || $i; var e = t.timeout || Vi;
        this.timeout = e, this.status = 1, this.remain = 0, this.xhrs = [], this.s = S(), this.e = null, this.called = this.sent = this.stored = !1, t.debugInfo && (this.debugInfo = t.debugInfo) }

    function be(t) { var e = null;
        e = Wo.context ? Yt.getEventRootContext(Wo.context) : pe(t.s), null != e && (qs[t.key] = e, e.speBinded = !0) }

    function _e(t) { t = t || {}; var e = t.key; if (!e) return new ye; if (js[e]) return new ye("event " + e + " is executing");
        js[e] = !0; var n = rs.createContext();
        rs.enter(n); var r = new xe(t); return r._end = function() { var t = this;
            t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n) }, r.end = function(t, e) { var r = this; return r.called ? void(Xo && console.warn("Event " + this.key + "has ended or failed!")) : (r.called = !0, rs.exit(n), r.status = null != t ? t : 1, void(e || r._end())) }, r.finish = function(t) { var e = this; return e.e = S(), e.i && clearTimeout(e.i), delete js[e.key], e }, r.fail = function() { this.end(0) }, r.store = function() { this.end(null, !0), this.refreshEventAndStore(n), this.stored = !0 }, r.i = r.timeout ? A(p(r.fail, r), r.timeout) : null, r.type === Qi && be(r), rs.set("event", r), r }

    function Se(e) { if (t.TINGYUN && t.TINGYUN.inited) { var n = as(Ji),
                r = Y(n); if (r && r.start && (e = e || {}, !e.key || r.key === e.key)) { var a = e.timeout; if (a || (a = Ki), r.duration = S() - r.start, r.duration > a) return void os(Ji); var i = t.performance.timing; if (i.navigationStart && (i.loadEventEnd || i.loadEventStart) && i.navigationStart - r.start >= 0) { var o = { req: "get " + document.URL, status: 200, type: "PF", start: i.navigationStart - r.start, du: (i.loadEventEnd || i.loadEventStart) - i.navigationStart };
                    r.xhrs || (r.xhrs = []), r.xhrs.push(o) } var s = 1;
                e.status && (s = e.status === to ? 1 : 0), r.status = s, os(Ji), ge(r) } } }

    function Ee(e) { if (!t.TINGYUN || !t.TINGYUN.inited) return new ye("Agent is not inited!");
        e = m({}, { type: Xi }, e || {}); var n = _e(e); return e.autoEnd && A(function() { e.status && e.status === eo ? n.fail() : n.end() }, e.endDelay || Zi), n }

    function Te(t, e) { if (qs[t]) { var n = qs[t];
            n.id !== e.id && (e.speBinded = !0, qs[t] = e) } }

    function Ce(e, n) { t.TINGYUN && t.TINGYUN.inited && (zr(n) || (n = {}), e && e.beforeEach && e.afterEach && (Mo.router_enable = !1, e.afterEach(function(e) { var r = e.fullPath; if (r = r ? t.location.origin + r : e.path) { var a = { key: r, type: Qi, autoEnd: !0, endDelay: co, debugInfo: { api: vo } };
                m(a, n), Ee(a) } }))) }

    function Ae(t, e) { var n; if (zr(t)) n = t;
        else { if (!Br(t) || void 0 === e) throw new Ro(Fo);
            n = {}, n[t] = e } return i(n, function(t, e) { e in Ls ? zo[Ls[e]] = t : zo[e] = t }), this }

    function we(t) { if (t) { var e = zo.firstScreenResources = zo.firstScreenResources || [];
            Ur(t) || (t = [t]), i(t, function(t) { if (Br(t)) e.push(t);
                else if (Bo(t)) { var n = t.src || t.href;
                    n && e.push(n) } }) } }

    function Re(t) { Ur(t) || (t = [t]), i(t, function(t) { if (t) { if (!(t instanceof RegExp)) throw new Ro("parameter's type requires RegExp");
                (Ho.domains || (Ho.domains = [])).push(t) } }) }

    function Pe(t, e) { if (t) { var n = t.split("_"),
                r = n[0],
                a = n[1]; "ty" === r && a && w(a, { timestamp: S(), data: e }) } }

    function De(t) { Us && t() }

    function Ie(t) { return function() { Us && t.apply(this, arguments) } }

    function Ne() { Us = !1 }

    function ke() { if (Object.defineProperty) { var e = t[fa];
            e && Object.defineProperty(t, fa, { get: function() { return zs++ > 0 && t.console && console.warn("window.%s is deprecated, use window.%s instead.", fa, la), e } }) } }

    function Oe() { var t = Po.getElementsByTagName("img");
        i(t, function(t) { t.complete || t[oo] || (t[oo] = !0, $r(t, na, function() { Yo.imageResources.push({ loadTime: S(), element: t }) })) }) }

    function je(t) { var e = Po.createElement("script");
        e.type = "text/javascript"; try { e.appendChild(Po.createTextNode(t)) } catch (n) { e.text = t }
        Po.getElementsByTagName("head")[0].appendChild(e) }

    function qe(e) { Gs.on(na, E(function() { n(); var t = S();
            De(function() { Fs.load = t }), e.loadEventEnd = t, clearInterval(Ys) })), i([na, ra, aa, ia], function(e) { $r(t, e, function(t) { De(function() {
                    (Fs.e[e] || (Fs.e[e] = [])).push(S()) }), Gs.emit(e, t) }) }); var n = E(function() { var n = S(); if (De(function() { Fs.end = n }), e.domContentLoadedEventStart = n, G() && t.performance && t.performance.getEntriesByName) { if (!Po.querySelectorAll) return;
                Yo.resources = Yo.resources || [], i(Po.querySelectorAll("head>link,head>script"), function(t) { var e; "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && Yo.resources.push(e) }) } }); if (G() && $r(Po, ua, n), $r(Po, oa, function(t) { Po.readyState === sa && n() }), (!G() || t.performance && !t.performance.getEntriesByName) && (Ys = setInterval(Oe, so)), !G()) try { je("if(window.TINGYUN) {window.TINGYUN.".concat(uo, "=+new Date();}")) } catch (r) {} }

    function He(t, e, n) { n || (n = e && window[e] || Po.cookie || ""); var r = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return r ? r[3] : null }

    function Me(t, e, n, r, a) { var i = t + "=" + e; if (n) { var o = new Date;
            o.setTime(o.getTime() + 1e3 * n), i += ";expires=" + o.toGMTString() }
        r && (i += ";path=" + r), (a || Po).cookie = i }

    function Le(t, e) { var n; return t && (n = !0, i(t, function() { return n = !1 }, e)), !!n }

    function Be(t) { var e = {},
            n = {},
            r = {},
            a = {},
            i = it(t),
            o = i.queryObj,
            s = i.queryString; return o && (e = Ue(o, Ho.bizIdsRules[ma], Ho.bizIdsRules[ya]), n = Ue(o, Ho.customParamsRules[ma], Ho.customParamsRules[ya]), r = Ue(o, Ho.requestParamKeys[xa], Ho.requestParamKeys[ba]), a[_a] = Ge(o, Ho.optCustomParamRules[_a], !0)), { bizIdParams: e, params: n, requestParams: r, optCustomParams: Ye(a), operaAllParam: s } }

    function Ue(t, e, n) { var r = {}; return t && e && e.length && e.length > 0 && i(e, function(e) { var n = t[e];
            null != n && nt(r, e, n) }), t && n && n.length && n.length > 0 && i(n, function(e) { var n = Fe(wa, e),
                a = n(t);
            null != a && nt(r, e, a) }), r }

    function Fe(t, e) { var n = t + "." + e; if (Ws[n]) return Ws[n]; var r = (e || "").split("."),
            a = "";
        e && 0 !== e.indexOf("[") && (a = "."); var o = t;
        i(r, function(t, e) { 0 === e && (o += a), o += t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? "['" + t + "']" : (e > 0 ? "." : "") + t }); var s; try { s = new Function(t, "try{return " + o + ";}catch(e){}return null;") } catch (u) { s = _ } return Ws[n] = s, s }

    function ze(t) { return t += "", t && t.substr(0, 128) || "" }

    function Ye(t) { var e = {}; return i(t, function(t, n) { Le(t) || (e[n] = t) }), e }

    function Ge(t, e, n) { var r = {}; return t && e && e.length && e.length > 0 && i(e, function(e) { var a = t[e]; if (null != a) nt(r, e, a);
            else if (n) { var i = Fe(wa, e),
                    a = i(t);
                null != a && nt(r, e, a) } }), r }

    function We(t) { var e, n; if (t)
            if (0 === t.indexOf(Na)) { var r = t.substring(Na.length); try { n = Ks.decode(r), e = Y(n) } catch (a) {} } else { try { n = decodeURIComponent(t), e = Y(n) } catch (a) {} if (!e) try { n = decodeURIComponent(n), e = Y(n) } catch (a) { P(a && a.message) } }
        return e }

    function Je(t) { var e = {}; return t && zr(t) && (e.s_id = t.id, e.s_tname = t.tname, e.s_tid = t.tid, e.s_rid = t.rid, e.s_duration = t.duration, "user" in t && (e.s_user = t.user, gt(t.user)), "bid" in t && (e.s_bid = ze(t.bid)), "ber" in t && (e.s_ber = t.ber), "isError" in t && (e.s_isError = t.isError)), e }

    function Ke(t) { return t.loadEventEnd || t._end }

    function Ve(n, r) { var a = 0;
        n = n || {}; var o = n.timing; if (n.getEntriesByName && o) a = o.domLoading, i(Yo.resources, function(t) { var e = n.getEntriesByName(t); if (1 === e.length) { var r = e[0].responseEnd + o.navigationStart;
                r > a && (a = r) } }), a -= o.navigationStart, r.__fp = Qs;
        else if (t.TINGYUN && t.TINGYUN[uo]) { var s = o && o.navigationStart ? o.navigationStart : e;
            a = t.TINGYUN[uo] - s, 0 > a && (a = 0), r.__fp = Zs } else D("fp=0"), r.__fp = tu; return De(function() { Fs._fp = a }), Math.round(a) }

    function Xe(n, r) { r = r || {}; var a = r.timing || {},
            o = n.fp || 0;
        n.__fs = ou; var s = Po.createElement("img"); if (!s.getBoundingClientRect) return n.__fs = su, De(function() { Fs.fs = o }), o; var u = Yo.imageResources,
            c = t.innerHeight,
            f = t.innerWidth;
        c || (c = Po.documentElement.clientHeight), f || (f = Po.documentElement.clientWidth); var l = [];
        u.length > 0 ? i(u, function(t) { $e(t.element, c, f) && l.push(t) }) : r.getEntriesByName && i(Po.querySelectorAll("img"), function(t) { $e(t, c, f) && l.push({ element: t }) }); var d = a.navigationStart || e,
            p = (a.loadEventEnd || Ts.loadEventEnd) - (a.navigationStart || e); return i(l, function(t) { if (t.loadTime) { var e = t.loadTime - d;
                e > o && (o = e, n.__fs = iu) } else if (t.element && t.element.src) { var a = r.getEntriesByName(t.element.src); if (a.length) { var i = a[0],
                        s = i.responseEnd;
                    i.fetchStart <= p && s > o && (o = s, n.__fs = au) } } }), Math.round(o) }

    function $e(t, e, n) { return t.src && Qe(Ze(t), e, n) && !tn(t) }

    function Qe(e, n, r) { if (e) { var a = t.pageYOffset,
                i = e.top + (0 === a ? 0 : a || Po.scrollTop || 0) - (Po.clientTop || 0); if (i >= n) return !1; var o = e.left; return o >= 0 && r > o } return !1 }

    function Ze(t) { if (G()) return Fr(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0; var e; try { e = t.getBoundingClientRect ? t.getBoundingClientRect() : void 0 } catch (n) {} return e }

    function tn(t) { return Xs.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : en(t) }

    function en(t) { for (; t && 1 === t.nodeType;) { if ("none" === nn(t) || "hidden" === t.type) return !0;
            t = t.parentNode } return !1 }

    function nn(t) { return t.style && t.style.display }

    function rn(t, n) { var r = e,
            a = 0,
            i = n && n.timing; return i && (r = i.navigationStart || r, a = i[ii] || i.domInteractive || i.domLoading || a), a ? t.__dr = eu : Ts.domContentLoadedEventStart ? (a = Ts.domContentLoadedEventStart, t.__dr = nu) : (a = Ts._end, t.__dr = ru), a - r }

    function an(t, e) {!t.fp || t.fp <= 0 || t.fp > t.le ? t.fp = Ve(e, t) : t.__fp = $s }

    function on(n, r) {
        function a(t) { return n[t] > 0 ? n[t] - s : 0 } var o = {},
            s = r ? r.globalStart : e,
            u = r ? r.window : t,
            c = (r ? r.agent : Ts) || {}; if (n) { De(function() { var t = Fs.t = {};
                i(n, function(e, n) { Fr(e) || (t[n] = e) }, !0) }), s = n.navigationStart, o = { ns: s, f: a(ei), qs: a(ni), rs: a(ri), re: a(ai), os: a(ii), oe: a(oi), oi: a(si), oc: a(ui), ls: a(ci), le: a(fi), tus: a(li), tue: a(di) }; var f = a(pi),
                l = a(hi),
                d = a(mi),
                p = a(vi),
                h = a(gi),
                m = a(yi); if (o.cs = h, o.ce = m, o.ds = f, o.de = l, (p - d > 0 || p > 0) && (o.es = d, o.ee = p), 0 == o.le) { var v = Ke(c);
                o.ue = v - s }
            c && (c._le = o.ue || o.le); var g, y; if (n.msFirstPaint) g = n.msFirstPaint, r || De(function() { Fs.fp = "m_" + g });
            else if ((y = u.chrome) && u.chrome.loadTimes) { var x = u.chrome.loadTimes();
                x && x.firstPaintTime && (g = 1e3 * x.firstPaintTime), r || De(function() { Fs.fp = "c_" + x.firstPaintTime }) } else c && c.firstPaint && (g = c.firstPaint, r || De(function() { Fs.fp = g }));
            g && (o.fp = Math.round(g - s), c.fp = o.fp), n[xi] ? o.sl = a(xi) : o.sl = 0 } else o = { t: s, le: Ke(c) - s }; return o.je = c && c.errs && c.errs.length || 0, o }

    function sn(e, n) { var r = on(e, n),
            a = n ? n.window : t; if (!a) return {};
        an(r, a.performance), r.dr = rn(r, a.performance), r.fs = Xe(r, a.performance); var i = {}; return r && (i = { f: r.f, fp: r.fp, fs: r.fs, dr: r.dr, le: r.le, je: r.je }), i }

    function un(t, e) { if (cn()) { var n = { rm: {}, em: [], cpm: {} };
            e && (n.rm.res = e.res || []), t && (n.cpm = t, n.cpm.ul = Po.URL), nbsJsBridge.logJsResult(Lr(n)) } }

    function cn() { return "undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult }

    function fn() { var t = 0; try { t = window.performance.timing.loadEventEnd } catch (e) {} return t > 0 }

    function ln(t, n) { var r = { tr: !1, tt: h(Po.title), charset: Po.characterSet };
        zo.resources && m(r, zo.resources), De(function() { r.debug = Fs }), Ne(); var a = Ts.errs;
        i(a, function(t, r) { var i = t.toObject();
            i.o = i.o - n && n.navigationStart || e, a[r] = i }), r.err = a; var o, s = "getEntriesByType"; return t[s] ? o = t[s]("resource") : D(v(Uo, [s])), o && (r.tr = !0, r.res = [], i(o, function(t) {
            function e(e) { var n = t[e]; return n > 0 ? n : 0 } var n = t.initiatorType,
                a = t.name,
                o = { o: e("startTime"), rt: n, n: a, f: e(ei), ds: e(pi), de: e(hi), cs: e(gi), ce: e(yi), sl: e(xi), qs: e(ni), rs: e(ri), re: e(ai), ts: t.transferSize || 0, es: t.encodedBodySize || 0 }; if ("xmlhttprequest" === n) { var s = dn(a);
                i(s, function(t, e) { 0 == e.indexOf("s_") && (o[e] = t) }) }
            r.res.push(o) })), r }

    function dn(t) { var e; return i(Ts.xhrs, function(n, r) { return r && t.indexOf(r) > -1 ? (e = n, !1) : void 0 }), e }

    function pn(e) { if (!e.agent) { var n = t._ty_rum; if (n && n.agent) e.agent = n.agent;
            else { var r = He(Pa, Ra);
                r && (e.agent = We(r), Me(Pa, "", -1e3, "/")) } } return e.agent }

    function hn(t) { if (t) { var e = t.fetchStart; if (e) return e - t.navigationStart } }

    function mn() { var n = {},
            r = 0,
            a = t.performance;
        a && a.getEntriesByType && i(a.getEntriesByType("mark") || [], function(t) { if (t && t.name && t.startTime && 0 === t.name.indexOf(Oa)) { var e = t.name.substring(Oa.length);
                e && (n[e] = Math.round(t.startTime), r += 1) } }); var o = a && a.timing ? a.timing.navigationStart : e,
            s = t[ka] && t[ka].data,
            u = m({}, s || {}, Go || {}); return u && a && a.timing && i(u, function(t, e) { zr(t) && t.timestamp && (n[e] = t.timestamp - o, r += 1) }), r > 0 ? n : null }

    function vn(t, e) { var n = m({}, t || {}, { type: Ua }); return e && (n.body = e), n }

    function gn(t, e) { var n = Lr(t),
            r = n ? n.length : 0; if (r > ja && t.res && t.res.length > 0) { t.res = t.res.slice(0, e); var a = Lr(t),
                i = a ? a.length : 0; return i > ja ? gn(t, e - 10 > 0 ? e - 10 : 0) : t } return t }

    function yn() { var e = E(function() {
            function e(t) { return t ? "1" : "0" } if (!Wo.pfSent) { var n = t.performance,
                    r = !!n,
                    a = n && n.timing;
                r || D(v(Uo, ["pf"])); var o = pn(qo),
                    s = Je(o),
                    u = m(on(a), s, zo),
                    c = m({}, us);
                an(c, n), c.dr = rn(c, n), c.fs = Xe(c, n); var f = m(u, c) || {},
                    l = mn();
                l && i(l, function(t, e) { Yr(t) && t >= 0 && (f[e] = t) }); var d, p = "",
                    g = a ? hn(a) : 0;
                i(["fp", "fs", "dr", "le"], function(t) { p += e((g ? f[t] - g : f[t]) >= Mo[t + "_threshold"]) }), r && p.indexOf("1") > -1 && (d = ln(n, a), f.ressize = !(!n || !n.getEntriesByName)), l && (d || (d = {}), d.mark = l), f.trflag = p || "0000", Yo.pfStart = S(), delete f.firstScreenResources, delete f.resources; var y = Be(Po.URL); if (d || (d = { tr: !1, tt: h(Po.title), charset: Po.characterSet }), d.bizId_param = y.bizIdParams, d.opt_param = y.params, d.request_param = y.requestParams, Ho.collectAllParam[So] && y.operaAllParam && (d.opera_all_param = {}, d.opera_all_param[So] = y.operaAllParam), Wo.opt_custom_param = y.optCustomParams, d) try { d = gn(d, 150) } catch (x) {}
                var b = vn(f, d),
                    _ = Yt.buildImmediateAction(Ua, "", b, { notSend: Wo.recordingCpActions });
                Wo.recordingCpActions && (_.crossPage = !0, Wo.cpActions.push(_), A(function() { Lt(!0) }, uu)); try { un(f, d) } catch (x) {}
                Wo.pfSent = !0 } }); return G() && fn() && !Wo.pfSent && e(), Gs.on(na, function() { var t = 0; if (Mo.pfDelay && zr(Mo.pfDelay)) { var n = mn();
                i(Mo.pfDelay, function(e, r) {
                    (!n || null == n[r]) && Yr(e) && e > t && (t = e) }) } if (G() && Wo.recordingCpActions) { var r = Mo.cross_page_delay ? Mo.cross_page_delay : Ai,
                    a = r - t;
                0 > a && (a = 0), uu = a }
            A(e, t) }).on([ra, aa, ia], e) }

    function xn(t) { var e = t; return cu && (fu.setAttribute("href", e), e = fu.href), fu.setAttribute("href", e), { href: fu.href, protocol: fu.protocol ? fu.protocol.replace(/:$/, "") : "", host: fu.host, search: fu.search ? fu.search.replace(/^\?/, "") : "", hash: fu.hash ? fu.hash.replace(/^#/, "") : "", hostname: fu.hostname, port: fu.port, pathname: "/" === fu.pathname.charAt(0) ? fu.pathname : "/" + fu.pathname } }

    function bn(t) { var e = !1; return Ho.corsDomains && i(Ho.corsDomains, function(n) { return t.indexOf(n) > -1 ? (e = !0, !1) : void 0 }), e }

    function _n(t) { var e = xn(t); return e.protocol === lu.protocol && e.host === lu.host || bn(e.host) }

    function Sn(t, e, n) { var r = ta().replace(/-/g, ""),
            a = {}; return i(e, function(e) {!e || n && n[e] || (t.setRequestHeader(e, r), a[e] = r) }), a }

    function En(t) { t.pcid = t.parentContext.id, t.parentContext.updateRemain(1, Ma), t.parentContext.items.push(t.contextData) }

    function Tn(t) { return function e(n, r) { var a = this,
                i = e; if (i._ && (i._ = 1), !a[pa]) { var o = a[fa] = {};
                o.method = n, o.url = r, o.id = pu++, o.jserror = !1; var s = rs.get("event");
                s && (o.key = s.key, s.remain++), Dn(o, Wo.context), o.parentContext = o.context.parent, o.contextData = { type: Ma, id: o.id, cid: o.context.id, method: o.method, url: o.url, state: o.state, ignore: !1, jserror: o.jserror }, o.context && o.context.setData(o.contextData), o.parentContext && En(o), o.toJSON = function() {} } try { return t.apply(a, arguments) } catch (u) {} return G() ? void 0 : d(t, [a, arguments]) } }

    function Cn(t) { return function e(n, r) { var a = this,
                i = e; if (i._ && (i._ = 1), !a[pa]) { var o = a[fa],
                    s = Fn(n, Ho.optCustomParamRules);
                Oo.isGather && (o.wReqHeaderParam || (o.wReqHeaderParam = {}), o.wReqHeaderParam[n] = r), o && s && (o.reqHeaderParam || (o.reqHeaderParam = {}), o.reqHeaderParam[n] = r), o.headerRecord || (o.headerRecord = {}), o.headerRecord[n] = r } try { return t.apply(a, arguments) } catch (u) {} return G() ? void 0 : d(t, [a, arguments]) } }

    function An(t) {
        return function e(n) {
            var r = this,
                a = e;
            if (a._ && (a._ = 1), !r[pa]) {
                var i = r[fa];
                if (i && (i.start = S(), i.reqSize = T(n), i.requestData = n, i.contextData && (i.contextData.start = i.start)),
                    G()) { if (i.context && null == i.context.parent) { var o = pe(i.start);
                        o && (i.context.parent = o, i.parentContext = i.context.parent, En(i)) }!i.parentContext && Wo.recordingCpActions && (i.context.crossPage = !0, Wo.cpRemain.ajax++, Wo.cpActions.push(i.context)) }
                var s = rs.get("event");
                s && s.type === Qi && i.key === s.key && i.parentContext && Te(i.key, i.parentContext), On(r);
                var u = _n(i.url);
                if (Mo.x_server_switch && r.setRequestHeader && Mo.key && i && u) { var c = Jn(),
                        f = "c=B|" + Mo.key;
                    c && (f += ";x=" + c), r.setRequestHeader(Da, f), i.xTingyunSent = !0, Mo.apm_headers && (i.apms = Sn(r, Mo.apm_headers, i.headerRecord)) }
            }
            try { return t.apply(r, arguments) } catch (l) {}
            return G() ? void 0 : d(t, [r, arguments])
        }
    }

    function wn(t) { i(hu, function(e, n) { var r = "on" + n;
            t[r] ? L(t, r, function(r) { return function() { return Pn(t, e, n), Fr(r) ? r.apply(this, arguments) : void 0 } }) : t[r] = function() { Pn(t, e, n) } }) }

    function Rn(t) { i(hu, function(e, n) { $r(t, n, function() { Pn(t, e, n) }) }) }

    function Pn(t, e, n) { t && t[fa] && (t[fa].errorCode = e, t[fa].errorEvent = n) }

    function Dn(t, e) { if (!t.context) { var n = "".concat(t.url, "-").concat(t.id);
            t.context = Yt.createEvent(e, n, Ma) } }

    function In(t, e) { Wo.context = t.context, Wo.globalAsyncStore = t, Wo.globalAjaxContext = e }

    function Nn(t) { var e = t.context && t.context.canEnd();
        e && t.context.end(), t.contextData && t.context.state === ti && Mo.upload_timeout_ajax && (t.contextData.brsOnly = !0, Yt.buildImmediateAction(Ma, "", t.contextData, { actionOptions: { state: ti } })), Wo.globalAsyncStore = null, Wo.globalAjaxContext = null }

    function kn(t, e) { if (G()) { var n = t[du];
            n && !t[Bi] && (L(t, du, e), t[Bi] = !0) } var r = t[mu];!r || t[Bi] || r[Bi] || (L(t, mu, e), t[Bi] = !0) }

    function On(t) {
        function e(e) { return M(function n() { var r = n;
                r._ && (r._ = 1), jn(t); var a; if (Fr(e)) { var i = t[fa]; if (i && 4 == t.readyState) { var o = S();
                        In(i, t) } try { a = e.apply(this, arguments) } catch (s) { throw i && (i.jserror = !0), s }
                    i && 4 == t.readyState && (i.cbTime = S() - o) } return a }) }
        kn(t, e); try { G() ? Rn(t) : wn(t) } catch (n) {} if (!t[Bi]) { var r = M(function a() { var e = a;
                e._ && (e._ = 1), t[Bi] || 4 === t.readyState && jn(t) }); try { G() ? $r(t, oa, r) : (t[mu] = r, t[mu][Bi] = !0) } catch (n) { return } }
        hs(function() { kn(t, e) }) }

    function jn(t) { var e = t[fa]; if (e && (e.end = S(), e.readyState = t.readyState, 4 == t.readyState)) { delete t[Bi], In(e), e.status = t.status, e.text = qn(t), e.resSize = T(e.text); var n = Ln(e, t),
                r = rs.get("event");
            hs(function() { e.callbackEnd || (e.callbackEnd = !0, Mn(e, n), r && r.key == e.key && (r.xhrs.push(n), 0 === --r.remain && r._end()), Ts.xhrs && (Ts.xhrs[e.url] = n), Nn(e)) }) } }

    function qn(t) { var e = ""; if ("" == t.responseType || "text" == t.responseType) e = t.responseText;
        else if (t.response) e = t.response;
        else try { e = t.responseText } catch (n) {}
        return e || "" }

    function Hn(t) { return t.data && "event" === t.data.type ? { text: t.data.text, path: t.data.path, src: t.data.src, value: t.data.value, href: t.data.href, title: t.data.title, nodeName: t.data.nodeName, items: t.items } : t.parent && t.parent.data && "event" === t.parent.data.type ? { text: t.parent.data.text, path: t.parent.data.path, src: t.parent.data.src, value: t.parent.data.value, href: t.parent.data.href, title: t.parent.data.title, nodeName: t.parent.data.nodeName, items: t.parent.items } : t.parent && t.parent.parent ? Hn(t.parent) : { text: "", path: "", nodeName: "", items: [] } }

    function Mn(t, e) { t && e && t.jserror && (e.jserror = t.jserror), t.errorCode && !e.err && (e.err = t.errorCode), t.cbTime && !e.cb && (e.cb = t.cbTime) }

    function Ln(e, n) { if (e && !e.composed) { var r = e.status; if (Oo.isGather) { var a = Hn(e.context);
                e.wCustom = { fromJS: "agent", key: Mo.key, ajaxUrl: e.url, items: e.context.items, itemsTemp: a && a.items, id: e.id, url: document.URL, text: a && a.text, href: a && a.href, title: a && a.title, value: a && a.value, src: a && a.src, xpath: a && a.path, nodeName: a && a.nodeName, method: e.method, urlParams: st(document.URL), ajaxUrlParams: st(e.url), start: e.start, requestHeader: e.wReqHeaderParam, requestParams: e.requestData, responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"), responseBody: n.response, children: [] }, t.top && t.top.postMessage && t.top.postMessage(Lr(e.wCustom), "*"), delete e.wCustom, delete e.wReqHeaderParam }
            m(e.contextData, { end: e.end, du: r > 0 ? e.end - e.start : 0, cb: e.cbTime || 0, status: r, err: e.errorCode ? e.errorCode : 0, rec: e.resSize, send: e.reqSize }); var i = e.contextData,
                o = {};
            o[Sa] = e.reqHeaderParam || {}; var s = Be(e.url),
                u = s.bizIdParams,
                c = s.params,
                f = s.requestParams,
                l = s.optCustomParams,
                d = Gn(e.requestData, Ho.bizIdsRules[ma], Ho.bizIdsRules[ya]),
                p = Gn(e.requestData, Ho.customParamsRules[ma], Ho.customParamsRules[ya]),
                h = Gn(e.requestData, Ho.requestParamKeys[xa], Ho.requestParamKeys[ba]);
            o[Ea] = Ge(Wn(e.requestData), Ho.optCustomParamRules[Ea], !0); var v = zn(n, Ho.bizIdsRules),
                g = zn(n, Ho.customParamsRules);
            o[Ta] = zn(n, Ho.optCustomParamRules, Ta); var y = {},
                x = {},
                b = Y(e.text);
            b && (y = Yn(b, Ho.bizIdsRules), x = Yn(b, Ho.customParamsRules), o[Ca] = Ge(b, Ho.optCustomParamRules[Ca], !0)), i.bizId_param = m({}, u, d, v, y), i.opt_param = m({}, c, p, g, x), i.request_param = m({}, f, h), i.opt_custom_param = Ye(Bn(o, l)); var _ = e.xTingyunSent ? Y(Un(n, Ia)) : null; if (_) { if (i.hasServerHeader = !0, i.s_id = _.id, i.s_tname = _.tname, i.s_tid = _.tid, i.s_rid = _.rid, i.s_duration = _.duration, "user" in _) { var S = _.user,
                        E = S; if (null != S && 0 === S.indexOf(Na)) { var T = S.substring(Na.length); try { E = Ks.decode(T) } catch (C) {} }
                    i.s_user = E, gt(E) } "bid" in _ && (i.s_bid = ze(_.bid)), "ber" in _ && (i.s_ber = _.ber), "isError" in Ts && (i.s_isError = _.isError) } else i.hasServerHeader = !1;
            e.apms && (i.apms = e.apms), e.key && (i.__spe = 1); var A = {}; return Ho.collectAllParam[So] && s.operaAllParam && (A[So] = s.operaAllParam), Ho.collectAllParam[Eo] && e.headerRecord && (A[Eo] = e.headerRecord), Ho.collectAllParam[To] && e.requestData && (A[To] = e.requestData), Ho.collectAllParam[Co] && (A[Co] = n.getAllResponseHeaders()), Ho.collectAllParam[Ao] && e.text && (A[Ao] = e.text), Le(A) || (i.opera_all_param = A), e.composed = !0, i } }

    function Bn(t, e) { return i(e, function(e, n) { t[n] = m({}, t[n] || {}, e || {}) }), t }

    function Un(t, e) { if (t && t.getResponseHeader) try { return t.getResponseHeader(e) } catch (n) {} }

    function Fn(t, e) { var n; return i(e[Sa], function(e) { return t === e ? (n = !0, !1) : void 0 }), n }

    function zn(t, e, n) { var r = {}; return i(e[n || va], function(e) { var n = Un(t, e);
            null != n && nt(r, e, n) }), r }

    function Yn(t, e, n) { var r = {}; return i(e[n || ga], function(e) { var n = Fe(Aa, e),
                a = n(t);
            null != a && nt(r, e, a) }), r }

    function Gn(t, e, n) { return Ue(Wn(t), e, n) }

    function Wn(t) { var e = Y(t); return e || (e = ut(t)), e }

    function Jn() { try { return ta().replace(/-/g, "").substring(0, 16) } catch (t) {} }

    function Kn() { var e = Do && Do.prototype;
        e ? (L(e, "open", Tn), L(e, "setRequestHeader", Cn), L(e, "send", An)) : Do && (t.XMLHttpRequest = function() { var t = new Do; return L(t, "open", Tn), L(t, "setRequestHeader", Cn), L(t, "send", An), t }) }

    function Vn(t) { this.limit = t, this.reset() }

    function Xn(t, e, n, r, a) { return String(t) + String(e) + String(n) + String(r) + String(a) }

    function $n(t, e, n, r) { return String(t) + String(e) + String(n) + String(r) }

    function Qn(t, e, n, r, a, i, o) { var s = this;
        s.id = t, s.time = S(), s.msg = e, s.lineno = r, s.colno = a, s.filename = n, s.count = 1, s.stack = i && i.stack || "", s.module = o, s.fix(); var u = $n(e, r, a, o),
            c = xu[u];
        s.ep = c ? 0 : 1, xu[u] = !0, s.fep = 0, this.recordFileName() }

    function Zn(t) { var n = function(t) { var e = []; return i(t, function(t) { e.push(t.toObject()) }), e }(yu.c); if (!n || !n.length) return null; var r = { fu: gu ? gu : gu++, os: parseInt((S() - (Yo.pfStart || e)) / 1e3) };
        zo.ulabel && (r.ulabel = zo.ulabel), Yt.buildImmediateAction(za, null, null, { actionOptions: m(r, { items: n }) }), yu.reset() }

    function tr(t, e, n, r, a) { if (e || !Ho.ignoreNoFilePropError) { var o = !1; if (i(Ho.domains, function(t) { return o = t.test(e), o ? !1 : void 0 }), !o) { var s = a && a.moduleId,
                    u = Xn(e, t, n, r, s),
                    c = yu.get(u);
                c ? c.increase() : (c = new Qn(u, t, e, n, r, a, s), yu.add(u, c), Ts.errs && Ts.errs.push(c)) } } }

    function er() { var e = t.onerror;
        t.onerror = function(t, n, r, a, i) { return tr(t, n, r, a, i), Fr(e) ? e.apply(this, arguments) : void 0 }, t.onerror._ty = !0 }

    function nr() { var e = t.onerror;
        e && e._ty || er() }

    function rr() { var e = Zr(); return e ? er() : $r(t, ea, function(e) { var n, r, a, i, o;
            (e instanceof t.Event || t.ErrorEvent && e instanceof t.ErrorEvent) && (n = e.message || e.error && (e.error.message || e.error.constructor.name) || "", r = e.lineno || 0, a = e.colno || 0, i = e.filename || e.error && e.error.filename || e.target && e.target.baseURI || "", i == Po.URL && (i = "#"), o = e.error), tr(n, i, r, a, o) }), Gs.on([na, ra, aa, ia], function(t) { Zn() }).on(na, function() { e && hs(nr) }), setInterval(Zn, vu, !0) }

    function ar(t) { t && !t.composed && (m(t.contextData, { end: t.end || S() }), t.composed = !0) }

    function ir() { Mo.setTimeoutMaxDepth && Mo.setTimeoutMaxDepth > 0 && (Su = Mo.setTimeoutMaxDepth), L(window, "setTimeout", dr), L(window, "clearTimeout", pr) }

    function or(t) { t.context || (t.context = Yt.createEvent(Wo.context, "".concat(t.name, "-").concat(t.id), La, t.name)) }

    function sr(t) { Wo.context = t.context, Wo.globalAsyncStore = t }

    function ur(t) { var e = t.context && t.context.canEnd();
        e && t.context.end(), Wo.globalAsyncStore = null }

    function cr(t) { for (var e = 0; null != t && 5 > e;) e += t.type === La ? 1 : 0, t = t.parent; return 5 > e }

    function fr(t) { return function() { return H(t).apply(this, arguments) } }

    function lr(t, e, n, r) { var a = null,
            i = null; return zr(r) && r[Li] || null == Wo.context ? i = fr(t) : cr(Wo.context) ? (a = { id: _u++, name: e, start: S(), delay: n, parentContext: Wo.context }, or(a), a.contextData = { type: La, id: a.id, cid: a.context.id, name: a.name, start: a.start, delay: a.delay }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, La), a.parentContext.items.push(a.contextData)), i = M(function() { var e; try { sr(a) } catch (n) {} try { t && (e = t.apply(this, arguments)) } finally { try { a.end = S(), ar(a), ur(a) } catch (n) {} } return e })) : i = fr(t), { store: a, cb: i } }

    function dr(t, e) { return function(n) { var r = Wr.call(arguments, 0),
                a = null; if (!arguments[2] && Fr(n)) { var i = lr(n, e, r[1], r[2]);
                i.cb && (r[0] = i.cb), a = i.store } var o = t.apply(this, r); return a && (Eu[o] = a), o } }

    function pr(t) { return function(e) { try { var n = Eu[e];
                n && n.context && (n.context.removeFromParent(), Eu[e] = null) } catch (r) {} return t.apply(this, arguments) } }

    function hr(t) { m(t.contextData, { pvid: t.pvid, end: t.end, url: t.url }, t.serverData || {}, t.pfData || {}) }

    function mr(t) { t.context || (t.context = Yt.createEvent(t.parentContext, "".concat(t.src, "-").concat(t.id), Ba)) }

    function vr(t, e, n) {
        function r() { if (a.end = S(), a.sameOrigin) { a.sameOrigin = !0, a.url = this.contentDocument.URL; var e = He(Pa, Ra, this.contentWindow[Ra] || this.contentDocument.cookie || ""); if (e) { var n = We(e);
                    Me(Pa, "", -1e3, "/", this.contentDocument), a.serverData = Je(n) } var i = this.contentWindow[la],
                    o = this.contentWindow.performance && this.contentWindow.performance.timing,
                    s = { window: this.contentWindow, globalStart: i ? i.globalStart : o.navigationStart, agent: m({}, i && i.currentAgent ? i.currentAgent : {}) };
                i && (a.pvid = i.pvid || ""); var u; try { u = sn(o, s) } catch (c) { u = {} }
                a.pfData = u, a.pfData.le && (a.end = o.navigationStart + a.pfData.le) } else a.sameOrigin = !1;
            hr(a), gr(a), t.removeEventListener("load", r) } if (t) { n || (n = t.src ? Au : Cu); var a = { id: Tu++, src: e, loadType: n, start: S(), parentContext: Wo.context };
            a.sameOrigin = _n(a.src), mr(a), a.contextData = { type: Ba, loadType: a.loadType, id: a.id, cid: a.context.id, src: a.src, start: a.start, sameOrigin: a.sameOrigin }, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, Ba), a.parentContext.items.push(a.contextData)), !a.parentContext && Wo.recordingCpActions && (a.context.crossPage = !0, Wo.cpRemain.iframe++, Wo.cpActions.push(a.context)), t.addEventListener("load", r) } }

    function gr(t) { var e = t.context && t.context.canEnd();
        e && t.context.end(), Wo.context = null }

    function yr() {
        function t(t) { return function(e) { return "IFRAME" === e.nodeName && e.src && vr(e, e.src, Cu), t.apply(this, arguments) } }
        L(Node.prototype, "appendChild", t), L(Node.prototype, "insertBefore", t) }

    function xr() {
        function t() { var t = arguments[0],
                e = this; return vr(e, t), r.apply(this, arguments) } if (Object.getOwnPropertyDescriptor && Object.defineProperty) { var e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src"),
                n = e.get,
                r = e.set;
            Object.defineProperty(HTMLIFrameElement.prototype, "src", { get: function() { return n.apply(this, arguments) }, set: t, enumerable: !0, configurable: !0 }) } }

    function br() { yr(), xr() }

    function _r(t) { is(Si, Lr(t)) }

    function Sr(t) { var e = wu++,
            n = t.url || "",
            r = S(),
            a = Yt.createEvent(Wo.context, "".concat(n, "-").concat(e), Fa, t.subType || Ei),
            i = { type: Fa, subType: a.subType, id: e, cid: a.id, url: n, start: r };
        a && a.setData(i); var o; return a.parent && (a.parent.type === Ma ? Ln(Wo.globalAsyncStore, Wo.globalAjaxContext) : a.parent.type === La && ar(Wo.globalAsyncStore), o = a.collectCrossPageData(), Ru = o, t.delayStorage || _r(o), a.clear(), a = null), { storageData: o, context: a } }

    function Er(t) { return function() { var e = arguments[0],
                n = Sr({ url: e, delayStorage: !0 }),
                r = n.storageData,
                a = n.context; try { var i = t.apply(this, arguments); if (i) { if (!r && a) { var o = pe(a.data.start);
                        o && (a.parent = o, r = a.collectCrossPageData(), Ru = r, a.clear(), a = null) }
                    _r(r) } return i } catch (s) {} return G() ? void 0 : d(t, [this, arguments]) } }

    function Tr() { L(t, "open", Er) }

    function Cr() {
        function t(t) { return { valid: qi === t.target.nodeName && !t.defaultPrevented && t.target.href, url: t.target.href, subType: Ti } }

        function e(t) { return { valid: Hi === t.target.nodeName && !t.defaultPrevented && t.target.action, url: t.target.action, subType: Ci } }
        i([Pi, Di], function(n) { Po.addEventListener(n, function(r) { if (r) { var a = n === Pi ? t(r) : e(r); if (a.valid) { var i = r.timeStamp ? he(r) : pe(de(r));
                        i && (Wo.context = i, Sr({ subType: a.subType, url: a.url }), Wo.context = null) } } }, _defineProperty({}, Ri, !0)) }) }

    function Ar() { Bt(Ru), Ru = null }

    function wr() { $r(Po, _o, function() { "hidden" === Po.visibilityState && Ar() }), $r(t, ia, function() { Ar() }) }

    function Rr() { Tr(), Cr(), wr() }

    function Pr() { Mo.disableHookEvent || me(), Mo.disableHookTimer || ir(), Mo.disableHookIframe || br(), Mo.disableHookCrossPage || Rr() }

    function Dr(t, e) { t && Mo.router_enable && Ee({ key: t, autoEnd: !0, endDelay: Mo.router_event_delay || co, type: Qi, debugInfo: { api: e } }) }

    function Ir() { Pu.forEach(function(e) { L(t.history, e, function(n) { return function(r, a, i) { var o;
                    o = n.apply(this, arguments); try { Dr(t.location.href, e) } catch (s) {} return o } }) }), $r(t, po, function() { Dr(t.location.href, po) }) }

    function Nr() { $r(t, lo, function() { Dr(t.location.href, lo) }) }

    function kr() { var e = t.history;
        e ? Ir() : Nr() }

    function Or() { Mo.router_enable && kr() }

    function jr() { if (G()) try { $r(t, "message", Nt) } catch (e) {}
        if (qe(Ts), G() && Pr(), yn(), Kn(), rr(), Or(), Ts._end = S(), De(function() { Fs._end = Ts._end }), ke(), G()) { var n = Y(as(Si));
            n && n.fromUrl === Po.referrer && (Wo.recordingCpActions = !0, Wo.cpParent = n), os(Si) } }

    function qr(e) { t[la] && t[la].inited || e && (Fr(e) || zr(e)) && (It(e), (Mo.key || Mo.appKey) && (jr(), t[la].inited = !0)) }

    function Hr() { return window[la] && 3 === window[la].mainVersion ? window[la] : (Bs.init = qr, Bs) }
    var Mr, Lr, Br = o("String"),
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
    Xr && Xr.parse && Xr.stringify ? (Mr = n, Lr = r) : (Mr = s, Lr = u);
    var $r;
    $r = t.addEventListener ? f : l;
    var Qr = t.encodeURIComponent,
        Zr = function() { return !document.addEventListener },
        ta = (t.location.protocol, function() {
            function t(t) { return 0 > t ? NaN : 30 >= t ? 0 | Math.random() * (1 << t) : 53 >= t ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN }

            function e(t, e) { for (var n = t.toString(16), r = e - n.length, a = "0"; r > 0; r >>>= 1, a += a) 1 & r && (n = a + n); return n } return function() { return e(t(32), 8) + "-" + e(t(16), 4) + "-" + e(16384 | t(12), 4) + "-" + e(32768 | t(14), 4) + "-" + e(t(48), 12) } }());
    C.prototype = { on: function(t, e) { var n = this; return Br(t) ? (n.events[t] || (n.events[t] = [])).push(e) : Ur(t) && i(t, function(t) { n.on(t, e) }), n }, off: function(t, e) { var n = arguments.length,
                r = this; if (0 === n) return r.events = {}, r; var a = r.events[t]; if (!a) return r; if (1 === n) return r.events[t] = null, r; for (var i, o = a.length; o--;)
                if (i = a[o], i === e) { a.splice(o, 1); break }
            return r }, emit: function(t) { var e = [].slice.call(arguments, 1),
                n = this.events[t]; return n && i(n, function(t) { return t.apply(this, e) }), this }, unshift: function(t, e) { var n = this; return (n.events[t] || (n.events[t] = [])).unshift(e), n } };
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
        xa = "1",
        ba = "2",
        _a = "1",
        Sa = "2",
        Ea = "3",
        Ta = "4",
        Ca = "5",
        Aa = "body",
        wa = "reqBody",
        Ra = "TINGYUN_COOKIE_VALUE",
        Pa = "TINGYUN_DATA",
        Da = "X-Tingyun",
        Ia = "X-Tingyun-Data",
        Na = "TY_BASE64",
        ka = "__TINGYUN",
        Oa = "ty_",
        ja = 64512,
        qa = 6e4,
        Ha = "event",
        Ma = "ajax",
        La = "timer",
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
        xi = "secureConnectionStart",
        bi = 5,
        _i = 5,
        Si = "__ty_crs_page_events",
        Ei = "window_open",
        Ti = "a_link",
        Ci = "form_submit",
        Ai = 3e3,
        wi = "__ty_event_patch_tag",
        Ri = "__ty_event_patch_disable",
        Pi = "click",
        Di = "submit",
        Ii = "spe",
        Ni = "addEventListener",
        ki = "onProperty",
        Oi = "inline",
        ji = "IMG",
        qi = "A",
        Hi = "FORM",
        Mi = 3,
        Li = "__ty_ignore",
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
        xo = "current",
        bo = "crossPage",
        _o = "visibilitychange",
        So = "URL",
        Eo = "QH",
        To = "QB",
        Co = "RH",
        Ao = "RB",
        wo = 200,
        Ro = t.Error,
        Po = t.document,
        Do = t.XMLHttpRequest,
        Io = t.location,
        No = t.navigator,
        ko = t.HTMLElement,
        Oo = { isGather: !1 },
        jo = { fp_threshold: 2e3, fs_threshold: 4e3, dr_threshold: 4e3 },
        qo = { server: {}, appConf: { pvid: ta(), baseInfo: {} } },
        Ho = qo.appConf,
        Mo = qo.server,
        Lo = { pvid: Ho.pvid, ref: Po.URL, referrer: Po.referrer, v: "3.2.1", av: "3.2.1" },
        Bo = ko ? function(t) { return t instanceof ko } : function(t) { t && "object" === _typeof(t) && 1 === t.nodeType && Br(t.nodeName) },
        Uo = "{0} not support",
        Fo = "illegal argument",
        zo = {},
        Yo = { imageResources: [] },
        Go = {},
        Wo = { context: null, uniqueId: 0, actions: [], opt_custom_param: {}, unAssignedEvents: [], cpActions: [], recordingCpActions: !1, cpParent: null, cpRemain: { ajax: 0, iframe: 0 }, tryEndCpActionsFailed: !1, globalAsyncStore: null, globalAjaxContext: null, pfSent: !1, ajaxUniqueId: 0 },
        Jo = [],
        Ko = [],
        Vo = {},
        Xo = "undefined" != typeof t.console,
        $o = 1,
        Qo = 2,
        Zo = 4,
        ts = 8,
        es = k.prototype;
    es.create = es.before = es.after = es.error = null;
    var ns;
    U.prototype = { createContext: function() { return Object.create ? Object.create(this.active) : B(this.active) }, get: function(t) { return this.active ? this.active[t] : void 0 }, set: function(t, e) { return this.active ? this.active[t] = e : void 0 }, enter: function(t) { if (!t) throw new Ro("context required!");
            this._set.push(this.active), this.active = t }, exit: function(t) { if (!t) throw new Ro("context required!"); if (t === this.active) return void(this.active = this._set.pop()); var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : y(this._set, t); if (0 > e) throw new Ro("context not currently entered!");
            this._set.splice(e, 1) }, bind: function(t, e) { e || (e = this.active ? this.active : this.createContext()); var n = this; return function() { n.enter(e); try { return t.apply(this, arguments) } catch (r) { try { var a = "moduleId";
                        r[a] = e[a] } catch (i) {} throw r } finally { n.exit(e) } } } };
    var rs, as, is, os, ss = !1,
        rs = z();
    as = function(e) { try { return t.localStorage.getItem(e) } catch (n) {} }, is = function(e, n) { try { t.localStorage.setItem(e, n) } catch (r) {} return n }, os = function(e) { try { t.localStorage.removeItem(e) } catch (n) {} };
    var us = {},
        cs = t.screen;
    cs && (us.sh = cs.height, us.sw = cs.width);
    var fs, ls, ds = function() { var e = t.navigator.standalone,
                n = t.navigator.userAgent.toLowerCase(),
                r = /safari/.test(n),
                a = /iphone|ipod|ipad/.test(n); return a && !e && !r },
        ps = !/(MSIE [0-8].\d+)/.test(navigator.userAgent),
        hs = G() ? b : x,
        ms = "POST",
        vs = J,
        gs = !1;
    $.prototype.add = function(t) { this.queue.length >= this.size || (this.queue.push(t), this.running || (this.running = !0, this.run())) }, $.prototype.run = function() { var t = this,
            e = function() { t.queue.length > 0 ? t.run() : t.running = !1 };
        this.handler(this.queue.shift(), e) }, $.prototype.handler = function(t, e) { fs(t, E(function() { e() })) }, fs = t.XDomainRequest ? K : V, No.sendBeacon && (gs = !0);
    var ys = ds();
    ys && (vs = fs = V, gs = !1), fs || (fs = function(t, e) { e() }, gs = !1), $r(t, aa, function(t) { gs && (fs = X) });
    var xs, bs = t.location.protocol,
        _s = "http:",
        Ss = ["id", "key", "appKey", "token"],
        Es = kt.prototype;
    Es.start = function() { if (!Mo.key) return P("missing config, agent disabled!"), !1; var e = t[la]; return e ? (P("already loaded!"), !1) : this }, m(Es, C.prototype);
    var Ts = new kt;
    Ts.on("send", function(t, e, n, r, a) { St(), e = e || {}, e.__r = S(), a ? a && (a = dt(a, e)) : a = Tt(t, e), r = r || _, tt({ url: a, data: n, callback: r }) });
    var Cs = [Ma, La, Ba];
    Yt.prototype.end = function(t) { if (this.closed) return void(this.cleared || console.warn("Current context is already closed")); if (t && (this.actionCount.ajax += t.actionCount.ajax, this.actionCount.iframe += t.actionCount.iframe, Ft(this.items, t), this.updateRemain(-1, t.type)), this.isNoRemain() || this.isTimeout)
            if (this.e = S(), this.closed = !0, this.i && clearTimeout(this.i), this.e - this.s > Mo.event_timeout && (this.isTimeout = !0), this.setState(this.isTimeout ? ti : Za), this.data && (this.data.state = this.state), this.parent) this.parent.end(this);
            else { var e;
                this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? e = this.composeTimeoutActionData() : this.isMeaningfulAction() && (e = this.composeActionData()), e && (this.eventData = e, !this.crossPage || e.type !== Ma && e.type !== Ba ? this.speBinded ? null == this.spe ? (this.waitingSpeEnd = !0, this.waitingSpeTimer = A(function() { this.waitingSpeEnd = !1, this.send() }, fo)) : (this.buildEventDataWithSpe(), this.send()) : this.send() : (Wo.cpRemain[e.type]--, R() && Wo.tryEndCpActionsFailed && Lt())), Wo.context = null } }, Yt.prototype.isNoRemain = function(t) { var e = !0; return i(this.remain, function(n) { var r = n.current <= 0 && (t ? !0 : n.children <= 0); return r ? void 0 : (e = !1, !1) }), e }, Yt.prototype.clear = function() { this.closed = !0, this.cleared = !0, this.i && clearTimeout(this.i) }, Yt.prototype.isMeaningfulAction = function() { return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 }, Yt.prototype.isRemainMeaningfulAction = function() { return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0 }, Yt.prototype.timeout = function() { this.isTimeout = !0, this.setState(ti), this.end(null, !0) }, Yt.prototype.setData = function(t) { this.data = t }, Yt.prototype.composeActionData = function() { return { type: this.type, subType: this.subType, start: this.s, end: this.e, duration: this.e - this.s > 0 ? this.e - this.s : 0, data: m({}, this.data || {}, { items: (this.items || []).slice() }) } }, Yt.prototype.composeTimeoutActionData = function() { return this.collectActionDataFromTop(), this.composeActionData() }, Yt.prototype.collectActionDataFromTop = function(t) { null == t && (t = this), zt(t.items, t.children) }, Yt.prototype.collectCrossPageData = function(t) { if (t || (t = []), this.crossPage = !0, this.data && (this.data.crossPage = !0), t.unshift(this.data), this.parent) return this.parent.collectCrossPageData(t); var e = { type: this.type, subType: this.subType, start: this.s }; return (this.isNoRemain() || 1 === this.children.length) && this.clear(), { action: e, data: t, url: Tt("/action"), commonActionInfo: Ot(), fromUrl: document.URL } }, Yt.prototype.canEnd = function() { return !this.closed && this.isNoRemain(!0) }, Yt.prototype.updateRemain = function(t, e) { if (this.remain[e]) { e || (e = Ma); var n = t || 0;
            this.remain[e].current = this.remain[e].current + n; for (var r = this.parent; r;) r.remain[e].children = r.remain[e].children + n, r = r.parent } }, Yt.prototype.setState = function(t) { return this.stateChanged ? !1 : (this.state = t, this.stateChanged = !0, !0) }, Yt.prototype.current = function() { return Wo.context }, Yt.prototype.buildEventDataWithSpe = function() { if (this.spe && this.eventData && this.eventData.data) { var t = this.spe.xhrs;
            this.spe.hasAjax = t && t.length > 0, delete this.spe.xhrs, this.eventData.data.spe = this.spe } }, Yt.prototype.setSpe = function(t) { return t ? (this.spe = t, this.waitingSpeEnd && (this.buildEventDataWithSpe(), this.send(), clearTimeout(this.waitingSpeTimer)), this.sent) : void 0 }, Yt.prototype.send = function() { if (!this.sent) { var t = {};
            null != this.spe && this.speBinded && (t.query = { ss: 1 }, this.spe.type === Qi && (t.query.rs = 1)), qt(this.eventData, t), this.sent = !0 } }, Yt.prototype.removeFromParent = function() { if (this.parent) { var t = this.parent.children.indexOf(this);
            t > -1 && this.parent.children.splice(t, 1); var e = this.parent.items.indexOf(this.data);
            e > -1 && this.parent.items.splice(e, 1), this.parent.updateRemain(-1, this.type), this.parent.end() } }, Yt.createEvent = function(t, e, n, r, a, i) { return new Yt(t, e, n || "event", r || null, a, i) }, Yt.buildImmediateAction = function(t, e, n, r) { r = r || {}; var a = m({ type: t, subType: e, state: $a, data: n }, r.actionOptions || {}); return a.data && (a.data.state = a.state), r.notSend || qt(a, r.sendOptions), a }, Yt.getEventRootContext = function(t) { if (!t) return null; for (; t;) { if (t.type === Ha && null == t.parent) return t;
            t = t.parent } return null }, Yt.prototype.toJSON = function() {};
    var As, ws = [Pi, Di],
        Rs = 1,
        Ps = 2;
    As = String.prototype.trim ? String.prototype.trim : function() { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") };
    var Ds = [Pi, Di],
        Is = Ui,
        Ns = wo,
        ks = [],
        Os = null;
    ne.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    var js = {},
        qs = {},
        Hs = ye.prototype;
    Hs.fail = Hs.end = Hs.store = _;
    var Ms = xe.prototype;
    Ms.end = Ms.finish = Ms.fail = null, Ms.send = function(t) { this.sent = !0; var e = this.getEventData(t),
            n = this.timeout || Vi;
        (Mo.collect_hash_no_ajax || !(e.debugInfo && e.debugInfo.api === lo || e.type === Qi && e.key.indexOf("#") > -1) || 0 !== e.xhrs.length) && (e.duration >= n || ge(e)) }, Ms.getEventData = function(t) { var e = this,
            n = t.event && t.event.xhrs || [];
        i(n, function(t) { t.startSpeOffset = t.start - e.s }); var r = { key: e.key, start: e.s, duration: e.e - e.s, status: e.status, type: e.type, xhrs: n }; return this.debugInfo && (r.debugInfo = this.debugInfo), r }, Ms.refreshEventAndStore = function(t) { this.finish(); var e = this.getEventData(t);
        is(Ji, Lr(e)) };
    var Ls = { host: "cshst", url: "csurl" },
        Bs = { mainVersion: Mi, version: "3.2.1", key: Mo.key, pvid: Ho.pvid, config: Ae, DIAGNOSE_HREF: da, diagnose: N, createEvent: Ee, logFirstScreen: we, addExcludedDomain: Re, globalStart: e, currentAgent: Ts, mark: Pe, wrapVueRouter: Ce, endSession: bt, setUid: gt, createAutoEvent: Ee, endStoreEvent: Se },
        Us = Ho.debuggable,
        Fs = { start: e, e: {}, an: { count: 0 }, visible: [] },
        zs = 0;
    ! function() { if (Ho.debuggable) { var t, e, n = "visibilitychange";
            Gr(Po.hidden) ? Gr(Po.msHidden) ? Gr(Po.webkitHidden) || (t = "webkitHidden", e = "webkit" + n) : (t = "msHidden", e = "ms" + n) : (t = "hidden", e = n), Gr(Po.addEventListener) || Gr(Po[t]) || $r(Po, e, Ie(function() { Fs.visible.push([Po[t], S()]) })) } }();
    var Ys = null,
        Gs = new C,
        Ws = {},
        Js = t,
        Ks = function() { var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e = function(t) { for (var e = {}, n = 0, r = t.length; r > n; n++) e[t.charAt(n)] = n; return e }(t),
                n = String.fromCharCode,
                r = function(t) { if (t.length < 2) { var e = t.charCodeAt(0); return 128 > e ? t : 2048 > e ? n(192 | e >>> 6) + n(128 | 63 & e) : n(224 | e >>> 12 & 15) + n(128 | e >>> 6 & 63) + n(128 | 63 & e) } var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320); return n(240 | e >>> 18 & 7) + n(128 | e >>> 12 & 63) + n(128 | e >>> 6 & 63) + n(128 | 63 & e) },
                a = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                i = function(t) { return t.replace(a, r) },
                o = function(e) { var n = [0, 2, 1][e.length % 3],
                        r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
                        a = [t.charAt(r >>> 18), t.charAt(r >>> 12 & 63), n >= 2 ? "=" : t.charAt(r >>> 6 & 63), n >= 1 ? "=" : t.charAt(63 & r)]; return a.join("") },
                s = Js.btoa ? function(t) { return Js.btoa(t) } : function(t) { return t.replace(/[\s\S]{1,3}/g, o) },
                u = function(t) { var e = "[object Uint8Array]" === Object.prototype.toString.call(t); return e ? t.toString("base64") : s(i(String(t))) },
                c = function(t, e) { return e ? u(String(t)).replace(/[+\/]/g, function(t) { return "+" == t ? "-" : "_" }).replace(/=/g, "") : u(t) },
                f = function(t) { return c(t, !0) },
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
                m = Js.atob ? function(t) { return Js.atob(t) } : function(t) { return t.replace(/\S{1,4}/g, h) },
                v = function(t) { return m(String(t).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                g = function(t) { return p(m(t)) },
                y = function(t) { return g(String(t).replace(/[-_]/g, function(t) { return "-" == t ? "+" : "/" }).replace(/[^A-Za-z0-9\+\/]/g, "")) }; return { atob: v, btoa: s, utob: i, encode: c, encodeURI: f, btou: p, decode: y } }(),
        Vs = function() { try { var e = ta(); return t.localStorage.setItem(e, e), t.localStorage.removeItem(e), !0 } catch (n) { return !1 } }(),
        Xs = {};
    Xs.localStorage = Vs,
        function() {
            function e() { var e, f, l = Po.documentElement;
                l.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = o = !0, t.getComputedStyle && (f = t.getComputedStyle(c), n = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, a = "4px" === (f || { width: "4px" }).width, c.style.marginRight = "50%", r = "4px" === (f || { marginRight: "4px" }).marginRight, e = c.appendChild(Po.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", i = 0 === c.getClientRects().length, i && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === e[0].offsetHeight, i && (e[0].style.display = "", e[1].style.display = "none", i = 0 === e[0].offsetHeight)), l.removeChild(u) } var n, r, a, i, o, s, u = (Po.documentElement, Po.createElement("div")),
                c = Po.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", Xs.opacity = "0.5" === c.style.opacity, Xs.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", Xs.clearCloneStyle = "content-box" === c.style.backgroundClip, u = Po.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), Xs.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, Xs.reliableHiddenOffsets = function() { return null == n && e(), i }) }();
    var $s = 0,
        Qs = 1,
        Zs = 2,
        tu = 3,
        eu = 0,
        nu = 1,
        ru = 2,
        au = 0,
        iu = 1,
        ou = 2,
        su = 3,
        uu = 0,
        cu = /(msie|trident)/i.test(No.userAgent),
        fu = Po.createElement("a"),
        lu = xn(Io.href),
        du = "onload",
        pu = 0,
        hu = { error: 990, abort: 905, timeout: 903 },
        mu = ca + oa,
        vu = 1e4,
        gu = 0;
    Vn.prototype = { add: function(t, e) { this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++) }, get: function(t) { return this.c[t] }, reset: function() { this.c = {}, this.len = 0 } };
    var yu = new Vn(100),
        xu = {},
        bu = {};
    Qn.prototype = { increase: function() { this.recordFileName(), this.count++ }, recordFileName: function() { var t = this.filename || "_";
            this.fep += bu[t] ? 0 : 1, bu[t] = !0 }, fix: function() { var t = this,
                e = t.stack; if (e && Br(e)) { e = e.split(/\n/); var n = [];
                i(e, function(t, e) {-1 == t.indexOf(ha) && n.push(t) }), t.stack = n.join("\n") } }, toObject: function() { var t = this; return { o: t.time, e: t.msg, l: t.lineno, c: t.colno, r: t.filename, ec: t.count, s: t.stack, m: t.module, ep: t.ep, fep: t.fep } } };
    var _u = 0,
        Su = bi,
        Eu = {},
        Tu = 0,
        Cu = "load",
        Au = "reload",
        wu = 0,
        Ru = null,
        Pu = [ho, mo],
        Du = Hr();
    return Du
}(window, +new Date);
window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) { ty_rum.server = { id: '7lT2y3_mJ4k', bizId_rule: [], opt_param_rule: [], x_server_switch: true, request_param_keys: [], event_timeout: 60000, cross_page_delay: 3000, ignore_err: false, filter_robot: true, router_enable: 1, beacon: '10.128.2.55:8588', beacon_err: '10.128.2.55:8588', key: 'Wtq8ffjNt90', token: 'bdcaa146f3da4a678d6c0bc15f524614', trace_threshold: 7000, fp_threshold: 2000, fs_threshold: 4000, dr_threshold: 4000 }; }); /*TY_AGENT_END*/