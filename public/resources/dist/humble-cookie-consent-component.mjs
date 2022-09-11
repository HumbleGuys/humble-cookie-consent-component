/*!
 * CookieConsent v2.8.6
 * https://www.github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */
(function() {
  var ce = "initCookieConsent";
  typeof window < "u" && typeof window[ce] != "function" && (window[ce] = function(Te) {
    var s, x, E, G, _, L, T, se, Oe, De, Le, le, Ee, P, de, y, R, ke, B, U, z, Y, S, H, ue, Q, X, A, ee, te, ne, oe, c = { mode: "opt-in", current_lang: "en", auto_language: null, autorun: !0, page_scripts: !0, hide_from_bots: !0, cookie_name: "cc_cookie", cookie_expiration: 182, cookie_domain: window.location.hostname, cookie_path: "/", cookie_same_site: "Lax", use_rfc_cookie: !1, autoclear_cookies: !0, revision: 0, script_selector: "data-cookiecategory" }, p = {}, h = {}, N = null, F = !0, J = !1, pe = !1, He = !1, fe = !1, Me = !1, ye = !0, V = [], we = !1, Ie = [], Ye = [], Je = [], Qe = !1, qe = [], ae = [], q = [], O = [], Ce = [], ge = document.documentElement, ft = function(e) {
      typeof (s = e).cookie_expiration == "number" && (c.cookie_expiration = s.cookie_expiration), typeof s.cookie_necessary_only_expiration == "number" && (c.cookie_necessary_only_expiration = s.cookie_necessary_only_expiration), typeof s.autorun == "boolean" && (c.autorun = s.autorun), typeof s.cookie_domain == "string" && (c.cookie_domain = s.cookie_domain), typeof s.cookie_same_site == "string" && (c.cookie_same_site = s.cookie_same_site), typeof s.cookie_path == "string" && (c.cookie_path = s.cookie_path), typeof s.cookie_name == "string" && (c.cookie_name = s.cookie_name), typeof s.onAccept == "function" && (se = s.onAccept), typeof s.onFirstAction == "function" && (De = s.onFirstAction), typeof s.onChange == "function" && (Oe = s.onChange), s.mode === "opt-out" && (c.mode = "opt-out"), typeof s.revision == "number" && (s.revision > -1 && (c.revision = s.revision), Me = !0), typeof s.autoclear_cookies == "boolean" && (c.autoclear_cookies = s.autoclear_cookies), s.use_rfc_cookie === !0 && (c.use_rfc_cookie = !0), typeof s.hide_from_bots == "boolean" && (c.hide_from_bots = s.hide_from_bots), c.hide_from_bots && (Qe = navigator && (navigator.userAgent && /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent) || navigator.webdriver)), c.page_scripts = s.page_scripts === !0, s.auto_language === "browser" || s.auto_language === !0 ? c.auto_language = "browser" : s.auto_language === "document" && (c.auto_language = "document"), c.current_lang = gt(s.languages, s.current_lang);
    }, Xe = function(e) {
      for (var n = "accept-", r = f("c-settings"), o = f(n + "all"), a = f(n + "necessary"), t = f(n + "custom"), i = 0; i < r.length; i++)
        r[i].setAttribute("aria-haspopup", "dialog"), C(r[i], "click", function(u) {
          u.preventDefault(), p.showSettings(0);
        });
      for (i = 0; i < o.length; i++)
        C(o[i], "click", function(u) {
          l(u, "all");
        });
      for (i = 0; i < t.length; i++)
        C(t[i], "click", function(u) {
          l(u);
        });
      for (i = 0; i < a.length; i++)
        C(a[i], "click", function(u) {
          l(u, []);
        });
      function f(u) {
        return (e || document).querySelectorAll('a[data-cc="' + u + '"], button[data-cc="' + u + '"]');
      }
      function l(u, g) {
        u.preventDefault(), p.accept(g), p.hideSettings(), p.hide();
      }
    }, Ae = function(e, n) {
      return Object.prototype.hasOwnProperty.call(n, e) ? e : ve(n).length > 0 ? Object.prototype.hasOwnProperty.call(n, c.current_lang) ? c.current_lang : ve(n)[0] : void 0;
    }, Pe = function(e) {
      if (s.force_consent === !0 && D(ge, "force--consent"), !y) {
        y = d("div");
        var n = d("div"), r = d("div");
        y.id = "cm", n.id = "c-inr-i", r.id = "cm-ov", y.setAttribute("role", "dialog"), y.setAttribute("aria-modal", "true"), y.setAttribute("aria-hidden", "false"), y.setAttribute("aria-labelledby", "c-ttl"), y.setAttribute("aria-describedby", "c-txt"), de.appendChild(y), de.appendChild(r), y.style.visibility = r.style.visibility = "hidden", r.style.opacity = 0;
      }
      var o = s.languages[e].consent_modal.title;
      o && (R || ((R = d("div")).id = "c-ttl", R.setAttribute("role", "heading"), R.setAttribute("aria-level", "2"), n.appendChild(R)), R.innerHTML = o);
      var a = s.languages[e].consent_modal.description;
      Me && (a = ye ? a.replace("{{revision_message}}", "") : a.replace("{{revision_message}}", s.languages[e].consent_modal.revision_message || "")), ke || ((ke = d("div")).id = "c-txt", n.appendChild(ke)), ke.innerHTML = a;
      var t, i = s.languages[e].consent_modal.primary_btn, f = s.languages[e].consent_modal.secondary_btn;
      i && (B || ((B = d("button")).id = "c-p-bn", B.className = "c-bn", i.role === "accept_all" && (t = "all"), C(B, "click", function() {
        p.hide(), p.accept(t);
      })), B.innerHTML = s.languages[e].consent_modal.primary_btn.text), f && (U || ((U = d("button")).id = "c-s-bn", U.className = "c-bn c_link", f.role === "accept_necessary" ? C(U, "click", function() {
        p.hide(), p.accept([]);
      }) : C(U, "click", function() {
        p.showSettings(0);
      })), U.innerHTML = s.languages[e].consent_modal.secondary_btn.text);
      var l = s.gui_options;
      Y || ((Y = d("div")).id = "c-inr", Y.appendChild(n)), z || ((z = d("div")).id = "c-bns", l && l.consent_modal && l.consent_modal.swap_buttons === !0 ? (f && z.appendChild(U), i && z.appendChild(B), z.className = "swap") : (i && z.appendChild(B), f && z.appendChild(U)), (i || f) && Y.appendChild(z), y.appendChild(Y)), J = !0;
    }, et = function(e) {
      if (S)
        (A = d("div")).id = "s-bl";
      else {
        S = d("div");
        var n = d("div"), r = d("div"), o = d("div");
        H = d("div"), ue = d("div");
        var a = d("div");
        Q = d("button");
        var t = d("div");
        X = d("div");
        var i = d("div");
        S.id = "s-cnt", n.id = "c-vln", o.id = "c-s-in", r.id = "cs", ue.id = "s-ttl", H.id = "s-inr", a.id = "s-hdr", X.id = "s-bl", Q.id = "s-c-bn", i.id = "cs-ov", t.id = "s-c-bnc", Q.className = "c-bn", S.setAttribute("role", "dialog"), S.setAttribute("aria-modal", "true"), S.setAttribute("aria-hidden", "true"), S.setAttribute("aria-labelledby", "s-ttl"), ue.setAttribute("role", "heading"), S.style.visibility = i.style.visibility = "hidden", i.style.opacity = 0, t.appendChild(Q), C(n, "keydown", function(be) {
          (be = be || window.event).keyCode === 27 && p.hideSettings(0);
        }, !0), C(Q, "click", function() {
          p.hideSettings(0);
        });
      }
      Q.setAttribute("aria-label", s.languages[e].settings_modal.close_btn_label || "Close"), T = s.languages[e].settings_modal.blocks, L = s.languages[e].settings_modal.cookie_table_headers;
      var f = T.length;
      ue.innerHTML = s.languages[e].settings_modal.title;
      for (var l = 0; l < f; ++l) {
        var u = T[l].title, g = T[l].description, k = T[l].toggle, v = T[l].cookie_table, m = s.remove_cookie_tables === !0, w = (g || !m && v) && "truthy", b = d("div"), M = d("div");
        if (g) {
          var K = d("div");
          K.className = "p", K.insertAdjacentHTML("beforeend", g);
        }
        var $ = d("div");
        if ($.className = "title", b.className = "c-bl", M.className = "desc", k !== void 0) {
          var W = "c-ac-" + l, I = d(w ? "button" : "div"), _e = d("label"), Z = d("input"), ie = d("span"), $e = d("span"), ot = d("span"), at = d("span");
          I.className = w ? "b-tl exp" : "b-tl", _e.className = "b-tg", Z.className = "c-tgl", ot.className = "on-i", at.className = "off-i", ie.className = "c-tg", $e.className = "t-lb", w && (I.setAttribute("aria-expanded", "false"), I.setAttribute("aria-controls", W)), Z.type = "checkbox", ie.setAttribute("aria-hidden", "true");
          var Se = k.value;
          Z.value = Se, $e.textContent = u, I.insertAdjacentHTML("beforeend", u), $.appendChild(I), ie.appendChild(ot), ie.appendChild(at), F ? k.enabled ? (Z.checked = !0, !A && q.push(!0), k.enabled && !A && Je.push(Se)) : !A && q.push(!1) : j(h.categories, Se) > -1 ? (Z.checked = !0, !A && q.push(!0)) : !A && q.push(!1), !A && O.push(Se), k.readonly ? (Z.disabled = !0, D(ie, "c-ro"), !A && Ce.push(!0)) : !A && Ce.push(!1), D(M, "b-acc"), D($, "b-bn"), D(b, "b-ex"), M.id = W, M.setAttribute("aria-hidden", "true"), _e.appendChild(Z), _e.appendChild(ie), _e.appendChild($e), $.appendChild(_e), w && function(be, Re, pt) {
            C(I, "click", function() {
              vt(Re, "act") ? (Ve(Re, "act"), pt.setAttribute("aria-expanded", "false"), be.setAttribute("aria-hidden", "true")) : (D(Re, "act"), pt.setAttribute("aria-expanded", "true"), be.setAttribute("aria-hidden", "false"));
            }, !1);
          }(M, b, I);
        } else if (u) {
          var me = d("div");
          me.className = "b-tl", me.setAttribute("role", "heading"), me.setAttribute("aria-level", "3"), me.insertAdjacentHTML("beforeend", u), $.appendChild(me);
        }
        if (u && b.appendChild($), g && M.appendChild(K), !m && v !== void 0) {
          for (var it = document.createDocumentFragment(), Ne = 0; Ne < L.length; ++Ne) {
            var Be = d("th"), re = L[Ne];
            if (Be.setAttribute("scope", "col"), re) {
              var je = re && ve(re)[0];
              Be.textContent = L[Ne][je], it.appendChild(Be);
            }
          }
          var rt = d("tr");
          rt.appendChild(it);
          var ct = d("thead");
          ct.appendChild(rt);
          var Ke = d("table");
          Ke.appendChild(ct);
          for (var st = document.createDocumentFragment(), We = 0; We < v.length; We++) {
            for (var lt = d("tr"), Ze = 0; Ze < L.length; ++Ze)
              if (re = L[Ze]) {
                je = ve(re)[0];
                var Ge = d("td");
                Ge.insertAdjacentHTML("beforeend", v[We][je]), Ge.setAttribute("data-column", re[je]), lt.appendChild(Ge);
              }
            st.appendChild(lt);
          }
          var dt = d("tbody");
          dt.appendChild(st), Ke.appendChild(dt), M.appendChild(Ke);
        }
        (k && u || !k && (u || g)) && (b.appendChild(M), A ? A.appendChild(b) : X.appendChild(b));
      }
      ee || ((ee = d("div")).id = "s-bns"), ne || ((ne = d("button")).id = "s-all-bn", ne.className = "c-bn", ee.appendChild(ne), C(ne, "click", function() {
        p.hideSettings(), p.hide(), p.accept("all");
      })), ne.innerHTML = s.languages[e].settings_modal.accept_all_btn;
      var ut = s.languages[e].settings_modal.reject_all_btn;
      if (ut && (oe || ((oe = d("button")).id = "s-rall-bn", oe.className = "c-bn", C(oe, "click", function() {
        p.hideSettings(), p.hide(), p.accept([]);
      }), H.className = "bns-t", ee.appendChild(oe)), oe.innerHTML = ut), te || ((te = d("button")).id = "s-sv-bn", te.className = "c-bn", ee.appendChild(te), C(te, "click", function() {
        p.hideSettings(), p.hide(), p.accept();
      })), te.innerHTML = s.languages[e].settings_modal.save_settings_btn, A)
        return H.replaceChild(A, X), void (X = A);
      a.appendChild(ue), a.appendChild(t), H.appendChild(a), H.appendChild(X), H.appendChild(ee), o.appendChild(H), r.appendChild(o), n.appendChild(r), S.appendChild(n), de.appendChild(S), de.appendChild(i);
    };
    p.updateLanguage = function(e, n) {
      if (typeof e == "string") {
        var r = Ae(e, s.languages);
        return (r !== c.current_lang || n === !0) && (c.current_lang = r, J && (Pe(r), Xe(Y)), et(r), !0);
      }
    };
    var tt = function(e) {
      var n = T.length, r = -1;
      we = !1;
      var o = he("", "all"), a = [c.cookie_domain, "." + c.cookie_domain];
      if (c.cookie_domain.slice(0, 4) === "www.") {
        var t = c.cookie_domain.substr(4);
        a.push(t), a.push("." + t);
      }
      for (var i = 0; i < n; i++) {
        var f = T[i];
        if (Object.prototype.hasOwnProperty.call(f, "toggle")) {
          var l = j(V, f.toggle.value) > -1;
          if (!q[++r] && Object.prototype.hasOwnProperty.call(f, "cookie_table") && (e || l)) {
            var u = f.cookie_table, g = ve(L[0])[0], k = u.length;
            f.toggle.reload === "on_disable" && l && (we = !0);
            for (var v = 0; v < k; v++) {
              var m = u[v], w = [], b = m[g], M = m.is_regex || !1, K = m.domain || null, $ = m.path || !1;
              if (K && (a = [K, "." + K]), M)
                for (var W = 0; W < o.length; W++)
                  o[W].match(b) && w.push(o[W]);
              else {
                var I = j(o, b);
                I > -1 && w.push(o[I]);
              }
              w.length > 0 && (nt(w, $, a), f.toggle.reload === "on_clear" && (we = !0));
            }
          }
        }
      }
    }, j = function(e, n) {
      return e.indexOf(n);
    }, d = function(e) {
      var n = document.createElement(e);
      return e === "button" && n.setAttribute("type", e), n;
    }, gt = function(e, n) {
      return c.auto_language === "browser" ? Ae(ht(), e) : c.auto_language === "document" ? Ae(document.documentElement.lang, e) : typeof n == "string" ? c.current_lang = Ae(n, e) : c.current_lang;
    }, ht = function() {
      var e = navigator.language || navigator.browserLanguage;
      return e.length > 2 && (e = e[0] + e[1]), e.toLowerCase();
    };
    p.allowedCategory = function(e) {
      if (F && c.mode !== "opt-in")
        n = Je;
      else
        var n = JSON.parse(he(c.cookie_name, "one", !0) || "{}").categories || [];
      return j(n, e) > -1;
    }, p.run = function(e) {
      if (!document.getElementById("cc_div")) {
        if (ft(e), Qe)
          return;
        h = JSON.parse(he(c.cookie_name, "one", !0) || "{}");
        var n = (G = h.consent_uuid) !== void 0;
        if ((x = h.consent_date) && (x = new Date(x)), (E = h.last_consent_update) && (E = new Date(E)), N = h.data !== void 0 ? h.data : null, Me && h.revision !== c.revision && (ye = !1), J = F = !(n && ye && x && E && G), function() {
          (P = d("div")).id = "cc--main", P.style.position = "fixed", P.style.zIndex = "1000000", P.innerHTML = '<!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--><!--[if (gt IE 8)|!(IE)]><!--><div id="cc_div" class="cc_div"></div><!--<![endif]-->', de = P.children[0];
          var o = c.current_lang;
          J && Pe(o), et(o), (Te || document.body).appendChild(P);
        }(), function() {
          var o = ["[href]", "button", "input", "details", '[tabindex="0"]'];
          function a(t, i) {
            var f = !1, l = !1;
            try {
              for (var u, g = t.querySelectorAll(o.join(':not([tabindex="-1"]), ')), k = g.length, v = 0; v < k; )
                u = g[v].getAttribute("data-focus"), l || u !== "1" ? u === "0" && (f = g[v], l || g[v + 1].getAttribute("data-focus") === "0" || (l = g[v + 1])) : l = g[v], v++;
            } catch {
              return t.querySelectorAll(o.join(", "));
            }
            i[0] = g[0], i[1] = g[g.length - 1], i[2] = f, i[3] = l;
          }
          a(H, ae), J && a(y, qe);
        }(), function(o, a) {
          if (typeof o == "object") {
            var t = o.consent_modal, i = o.settings_modal;
            J && t && f(y, ["box", "bar", "cloud"], ["top", "middle", "bottom"], ["zoom", "slide"], t.layout, t.position, t.transition), i && f(S, ["bar"], ["left", "right"], ["zoom", "slide"], i.layout, i.position, i.transition);
          }
          function f(l, u, g, k, v, m, w) {
            if (m = m && m.split(" ") || [], j(u, v) > -1 && (D(l, v), (v !== "bar" || m[0] !== "middle") && j(g, m[0]) > -1))
              for (var b = 0; b < m.length; b++)
                D(l, m[b]);
            j(k, w) > -1 && D(l, w);
          }
        }(e.gui_options), Xe(), c.autorun && J && p.show(e.delay || 0), setTimeout(function() {
          D(P, "c--anim");
        }, 30), setTimeout(function() {
          var o, a;
          o = !1, a = !1, C(document, "keydown", function(t) {
            (t = t || window.event).key === "Tab" && (_ && (t.shiftKey ? document.activeElement === _[0] && (_[1].focus(), t.preventDefault()) : document.activeElement === _[1] && (_[0].focus(), t.preventDefault()), a || fe || (a = !0, !o && t.preventDefault(), t.shiftKey ? _[3] ? _[2] ? _[2].focus() : _[0].focus() : _[1].focus() : _[3] ? _[3].focus() : _[0].focus())), !a && (o = !0));
          }), document.contains && C(P, "click", function(t) {
            t = t || window.event, He ? H.contains(t.target) ? fe = !0 : (p.hideSettings(0), fe = !1) : pe && y.contains(t.target) && (fe = !0);
          }, !0);
        }, 100), F)
          c.mode === "opt-out" && xe(Je);
        else {
          var r = typeof h.rfc_cookie == "boolean";
          (!r || r && h.rfc_cookie !== c.use_rfc_cookie) && (h.rfc_cookie = c.use_rfc_cookie, Fe(c.cookie_name, JSON.stringify(h))), Le = ze(Ue()), xe(), typeof se == "function" && se(h);
        }
      }
    }, p.showSettings = function(e) {
      setTimeout(function() {
        D(ge, "show--settings"), S.setAttribute("aria-hidden", "false"), He = !0, setTimeout(function() {
          pe ? Ee = document.activeElement : le = document.activeElement, ae.length !== 0 && (ae[3] ? ae[3].focus() : ae[0].focus(), _ = ae);
        }, 200);
      }, e > 0 ? e : 0);
    };
    var xe = function(e) {
      if (c.page_scripts) {
        var n = document.querySelectorAll("script[" + c.script_selector + "]"), r = e || h.categories || [], o = function(a, t) {
          if (t < a.length) {
            var i = a[t], f = i.getAttribute(c.script_selector);
            if (j(r, f) > -1) {
              i.type = "text/javascript", i.removeAttribute(c.script_selector);
              var l = i.getAttribute("data-src");
              l && i.removeAttribute("data-src");
              var u = d("script");
              if (u.textContent = i.innerHTML, function(g, k) {
                for (var v = k.attributes, m = v.length, w = 0; w < m; w++) {
                  var b = v[w].nodeName;
                  g.setAttribute(b, k[b] || k.getAttribute(b));
                }
              }(u, i), l ? u.src = l : l = i.src, l && (u.readyState ? u.onreadystatechange = function() {
                u.readyState !== "loaded" && u.readyState !== "complete" || (u.onreadystatechange = null, o(a, ++t));
              } : u.onload = function() {
                u.onload = null, o(a, ++t);
              }), i.parentNode.replaceChild(u, i), l)
                return;
            }
            o(a, ++t);
          }
        };
        o(n, 0);
      }
    };
    p.set = function(e, n) {
      return e === "data" && function(r, o) {
        var a = !1;
        if (o === "update") {
          var t = typeof (N = p.get("data")) == typeof r;
          if (t && typeof N == "object")
            for (var i in !N && (N = {}), r)
              N[i] !== r[i] && (N[i] = r[i], a = !0);
          else
            !t && N || N === r || (N = r, a = !0);
        } else
          N = r, a = !0;
        return a && (h.data = N, Fe(c.cookie_name, JSON.stringify(h))), a;
      }(n.value, n.mode);
    }, p.get = function(e, n) {
      return JSON.parse(he(n || c.cookie_name, "one", !0) || "{}")[e];
    }, p.getConfig = function(e) {
      return c[e] || s[e];
    };
    var Ue = function() {
      return Ie = h.categories || [], Ye = O.filter(function(e) {
        return j(Ie, e) === -1;
      }), { accepted: Ie, rejected: Ye };
    }, ze = function(e) {
      var n = "custom", r = Ce.filter(function(o) {
        return o === !0;
      }).length;
      return e.accepted.length === O.length ? n = "all" : e.accepted.length === r && (n = "necessary"), n;
    };
    p.getUserPreferences = function() {
      var e = Ue();
      return { accept_type: ze(e), accepted_categories: e.accepted, rejected_categories: e.rejected };
    }, p.loadScript = function(e, n, r) {
      var o = typeof n == "function";
      if (document.querySelector('script[src="' + e + '"]'))
        o && n();
      else {
        var a = d("script");
        if (r && r.length > 0)
          for (var t = 0; t < r.length; ++t)
            r[t] && a.setAttribute(r[t].name, r[t].value);
        o && (a.onload = n), a.src = e, document.head.appendChild(a);
      }
    }, p.updateScripts = function() {
      xe();
    }, p.show = function(e, n) {
      n === !0 && Pe(c.current_lang), J && setTimeout(function() {
        D(ge, "show--consent"), y.setAttribute("aria-hidden", "false"), pe = !0, setTimeout(function() {
          le = document.activeElement, _ = qe;
        }, 200);
      }, e > 0 ? e : n ? 30 : 0);
    }, p.hide = function() {
      J && (Ve(ge, "show--consent"), y.setAttribute("aria-hidden", "true"), pe = !1, setTimeout(function() {
        le.focus(), _ = null;
      }, 200));
    }, p.hideSettings = function() {
      Ve(ge, "show--settings"), He = !1, S.setAttribute("aria-hidden", "true"), setTimeout(function() {
        pe ? (Ee && Ee.focus(), _ = qe) : (le && le.focus(), _ = null), fe = !1;
      }, 200);
    }, p.accept = function(e, n) {
      var r = e || void 0, o = n || [], a = [];
      if (r)
        if (typeof r == "object" && typeof r.length == "number")
          for (var t = 0; t < r.length; t++)
            j(O, r[t]) !== -1 && a.push(r[t]);
        else
          typeof r == "string" && (r === "all" ? a = O.slice() : j(O, r) !== -1 && a.push(r));
      else
        a = function() {
          for (var i = document.querySelectorAll(".c-tgl") || [], f = [], l = 0; l < i.length; l++)
            i[l].checked && f.push(i[l].value);
          return f;
        }();
      if (o.length >= 1)
        for (t = 0; t < o.length; t++)
          a = a.filter(function(i) {
            return i !== o[t];
          });
      for (t = 0; t < O.length; t++)
        Ce[t] === !0 && j(a, O[t]) === -1 && a.push(O[t]);
      (function(i) {
        V = [];
        var f = document.querySelectorAll(".c-tgl") || [];
        if (f.length > 0)
          for (var l = 0; l < f.length; l++)
            j(i, O[l]) !== -1 ? (f[l].checked = !0, q[l] || (V.push(O[l]), q[l] = !0)) : (f[l].checked = !1, q[l] && (V.push(O[l]), q[l] = !1));
        !F && c.autoclear_cookies && V.length > 0 && tt(), x || (x = new Date()), G || (G = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(u) {
          try {
            return (u ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> u / 4).toString(16);
          } catch {
            return "";
          }
        })), h = { categories: i, level: i, revision: c.revision, data: N, rfc_cookie: c.use_rfc_cookie, consent_date: x.toISOString(), consent_uuid: G }, (F || V.length > 0) && (ye = !0, E = E ? new Date() : x, h.last_consent_update = E.toISOString(), Le = ze(Ue()), Fe(c.cookie_name, JSON.stringify(h)), xe()), F && (c.autoclear_cookies && tt(!0), typeof De == "function" && De(p.getUserPreferences(), h), typeof se == "function" && se(h), F = !1, c.mode === "opt-in") || (typeof Oe == "function" && V.length > 0 && Oe(h, V), we && window.location.reload());
      })(a);
    }, p.eraseCookies = function(e, n, r) {
      var o = [], a = r ? [r, "." + r] : [c.cookie_domain, "." + c.cookie_domain];
      if (typeof e == "object" && e.length > 0)
        for (var t = 0; t < e.length; t++)
          this.validCookie(e[t]) && o.push(e[t]);
      else
        this.validCookie(e) && o.push(e);
      nt(o, n, a);
    };
    var Fe = function(e, n) {
      var r = c.cookie_expiration;
      typeof c.cookie_necessary_only_expiration == "number" && Le === "necessary" && (r = c.cookie_necessary_only_expiration), n = c.use_rfc_cookie ? encodeURIComponent(n) : n;
      var o = new Date();
      o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3);
      var a = e + "=" + (n || "") + "; expires=" + o.toUTCString() + "; Path=" + c.cookie_path + ";";
      a += " SameSite=" + c.cookie_same_site + ";", window.location.hostname.indexOf(".") > -1 && (a += " Domain=" + c.cookie_domain + ";"), window.location.protocol === "https:" && (a += " Secure;"), document.cookie = a;
    }, he = function(e, n, r) {
      var o;
      if (n === "one") {
        if ((o = (o = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)")) ? r ? o.pop() : e : "") && e === c.cookie_name) {
          try {
            o = JSON.parse(o);
          } catch {
            try {
              o = JSON.parse(decodeURIComponent(o));
            } catch {
              o = {};
            }
          }
          o = JSON.stringify(o);
        }
      } else if (n === "all") {
        var a = document.cookie.split(/;\s*/);
        o = [];
        for (var t = 0; t < a.length; t++)
          o.push(a[t].split("=")[0]);
      }
      return o;
    }, nt = function(e, n, r) {
      for (var o = n || "/", a = 0; a < e.length; a++) {
        for (var t = 0; t < r.length; t++)
          document.cookie = e[a] + "=; path=" + o + (r[t].indexOf(".") == 0 ? "; domain=" + r[t] : "") + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        e[a];
      }
    };
    p.validCookie = function(e) {
      return he(e, "one", !0) !== "";
    };
    var C = function(e, n, r, o) {
      e.addEventListener(n, r, o === !0 && { passive: !0 });
    }, ve = function(e) {
      if (typeof e == "object")
        return Object.keys(e);
    }, D = function(e, n) {
      e.classList.add(n);
    }, Ve = function(e, n) {
      e.classList.remove(n);
    }, vt = function(e, n) {
      return e.classList.contains(n);
    };
    return p;
  });
})();
const _t = ({ policyUrl: ce, language: Te }) => ({
  init() {
    const s = initCookieConsent(), x = window.location.hostname, E = {
      analytics: [
        {
          name: "_gid",
          domain: x,
          path: "/"
        },
        {
          name: "_ga",
          domain: x,
          path: "/"
        },
        {
          name: "_fbp",
          domain: x,
          path: "/"
        },
        {
          name: "_scid",
          domain: x,
          path: "/"
        }
      ]
    };
    s.run({
      current_lang: Te,
      autoclear_cookies: !0,
      page_scripts: !0,
      delay: 500,
      remove_cookie_tables: !0,
      gui_options: {
        consent_modal: {
          layout: "cloud",
          position: "bottom center",
          transition: "slide",
          swap_buttons: !1
        },
        settings_modal: {
          layout: "box",
          transition: "slide"
        }
      },
      onChange: function(G, _) {
        _.forEach(function(L) {
          !s.allowedCategory(L) && Array.isArray(E[L]) && E[L].forEach(function(T) {
            s.eraseCookies(
              T.name,
              T.path,
              T.domain
            );
          });
        });
      },
      languages: {
        sv: {
          consent_modal: {
            title: "Vi anv\xE4nder cookies",
            description: 'Den h\xE4r webbplatsen anv\xE4nder n\xF6dv\xE4ndiga cookies f\xF6r s\xE4kerst\xE4lla webbplatsens funktion och cookies fr\xE5n tredje part f\xF6r att sp\xE5ra och analysera anv\xE4ndningen av webbplatsen. De senare s\xE4tts bara efter ditt medgivande. <button type="button" data-cc="c-settings" class="cc-link">L\xE5t mig v\xE4lja</button>',
            primary_btn: {
              text: "Acceptera alla",
              role: "accept_all"
            },
            secondary_btn: {
              text: "Acceptera n\xF6dv\xE4ndiga",
              role: "accept_necessary"
            }
          },
          settings_modal: {
            title: "Inst\xE4llningar f\xF6r cookies",
            save_settings_btn: "Spara inst\xE4llningar",
            accept_all_btn: "Acceptera alla",
            reject_all_btn: "Neka alla",
            close_btn_label: "St\xE4ng",
            cookie_table_headers: [
              { col1: "Namn" },
              { col2: "Dom\xE4n" },
              { col3: "Giltighet" },
              { col4: "Beskrivning" }
            ],
            blocks: [
              {
                title: "Anv\xE4ndning av cookies \u{1F4E2}",
                description: `Vi anv\xE4nder cookies f\xF6r att s\xE4kerst\xE4lla webbplatsens grundl\xE4ggande funktionalitet och f\xF6r att f\xF6rb\xE4ttra din upplevelse n\xE4r du navigerar genom webbplatsen. Du kan v\xE4lja att acceptera eller neka varje kategori n\xE4r du vill. F\xF6r mer detaljer kring cookies och v\xE5r datapolicy, var god se v\xE5r <a href="${ce}" class="cc-link">integritetspolicy</a>.`
              },
              {
                title: "N\xF6dv\xE4ndiga cookies",
                description: "N\xF6dv\xE4ndiga cookies \xE4r absolut n\xF6dv\xE4ndiga f\xF6r att webbplatsen ska fungera korrekt. Dessa cookies s\xE4kerst\xE4ller grundl\xE4ggande funktioner och s\xE4kerhetsfunktioner p\xE5 webbplatsen. N\xF6dv\xE4ndiga cookies placeras automatiskt och kr\xE4ver inte ditt samtycke.",
                toggle: {
                  value: "necessary",
                  enabled: !0,
                  readonly: !0
                }
              },
              {
                title: "Analytiska cookies",
                description: "Analytiska cookies anv\xE4nds f\xF6r att f\xF6rst\xE5 hur bes\xF6kare interagerar med webbplatsen. Dessa cookies hj\xE4lper till att ge information om m\xE4tv\xE4rden, antal bes\xF6kare, avvisningsfrekvens, trafikk\xE4lla etc.",
                toggle: {
                  value: "analytics",
                  enabled: !1,
                  readonly: !1
                }
              },
              {
                title: "Cookies f\xF6r marknadsf\xF6ring",
                description: "Cookies f\xF6r marknadsf\xF6ring anv\xE4nds f\xF6r att sp\xE5ra bes\xF6kare p\xE5 webbplatser. Avsikten \xE4r att visa annonser som \xE4r relevanta och engagerande f\xF6r enskilda anv\xE4ndare, och d\xE4rmed mer v\xE4rdefull f\xF6r utgivare och tredjepartsannons\xF6rer.",
                toggle: {
                  value: "targeting",
                  enabled: !1,
                  readonly: !1
                }
              },
              {
                title: "Ej strikt n\xF6dv\xE4ndig funtionalitet",
                description: "Dessa cookies \xE4r n\xF6dv\xE4ndigaa f\xF6r extra funktioner som exempelvis Google Maps och andra ej strikt n\xF6dv\xE4ndiga externa tj\xE4nster och funktioner.",
                toggle: {
                  value: "nonessential",
                  enabled: !1,
                  readonly: !1
                }
              }
            ]
          }
        },
        en: {
          consent_modal: {
            title: "We use cookies",
            description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
            primary_btn: {
              text: "Accept all",
              role: "accept_all"
            },
            secondary_btn: {
              text: "Reject all",
              role: "accept_necessary"
            }
          },
          settings_modal: {
            title: "Settings for cookies",
            save_settings_btn: "Save settings",
            accept_all_btn: "Accept all",
            reject_all_btn: "Reject all",
            close_btn_label: "Close",
            cookie_table_headers: [
              { col1: "Name" },
              { col2: "Domain" },
              { col3: "Expiration" },
              { col4: "Description" }
            ],
            blocks: [
              {
                title: "Cookie usage \u{1F4E2}",
                description: `We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="${ce}" class="cc-link">privacy policy</a>.`
              },
              {
                title: "Strictly necessary cookies",
                description: "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
                toggle: {
                  value: "necessary",
                  enabled: !0,
                  readonly: !0
                }
              },
              {
                title: "Performance and Analytics cookies",
                description: "These cookies allow the website to remember the choices you have made in the past",
                toggle: {
                  value: "analytics",
                  enabled: !1,
                  readonly: !1
                },
                cookie_table: [
                  {
                    col1: "^_ga",
                    col2: "google.com",
                    col3: "2 years",
                    col4: "description ...",
                    is_regex: !0
                  },
                  {
                    col1: "_gid",
                    col2: "google.com",
                    col3: "1 day",
                    col4: "description ..."
                  }
                ]
              },
              {
                title: "Advertisement and Targeting cookies",
                description: "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
                toggle: {
                  value: "targeting",
                  enabled: !1,
                  readonly: !1
                }
              }
            ]
          }
        }
      }
    });
  }
});
document.addEventListener("alpine:init", () => {
  window.Alpine.data("cookieConsent", _t);
});
