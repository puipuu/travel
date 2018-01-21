M.define("/js/Dropdown", function (c, b, d) {
    function a(e) {
        this.$nav = typeof e.nav === "string" ? $(e.nav) : e.nav;
        this.$panel = typeof e.panel === "string" ? $(e.panel) : e.panel;
        this.showCallback = e.showCallback;
        this.hideCallback = e.hideCallback;
        this.delay = e.delay || 0;
        this.event = e.event || "mouseenterleave";
        this._isShow = false;
        this.init()
    }

    a.prototype = {
        init: function () {
            if (this.event === "mouseenterleave") {
                this.$nav.on("mouseenter.dropdown", M.bind(function (e) {
                    this.show()
                }, this)).on("mouseleave.dropdown", M.bind(function (e) {
                    if ($(e.relatedTarget).closest(this.$panel).length === 0) {
                        this.hide(true)
                    }
                }, this));
                this.$panel.on("mouseenter.dropdown", M.bind(function (e) {
                    this.show()
                }, this)).on("mouseleave.dropdown", M.bind(function (e) {
                    if ($(e.relatedTarget).closest(this.$nav).length === 0) {
                        this.hide(false)
                    }
                }, this))
            }
            if (this.event === "click") {
                this.$nav.on("click.dropdown", M.bind(function (e) {
                    this.show()
                }, this));
                $(document).on("click.dropdown", M.bind(function (e) {
                    if ($(e.target).closest(this.$nav).length === 0 && $(e.target).closest(this.$panel).length === 0) {
                        this.hide(false)
                    }
                }, this))
            }
        }, show: function () {
            this.$panel.show();
            this._isShow = true;
            if (M.isFunction(this.showCallback)) {
                this.showCallback.call(this, this.$nav, this.$panel)
            }
        }, hide: function (e) {
            this._isShow = false;
            if (e && this.delay > 0) {
                setTimeout(M.bind(function () {
                    if (!this._isShow) {
                        this.$panel.hide();
                        if (M.isFunction(this.hideCallback)) {
                            this.hideCallback.call(this, this.$nav, this.$panel)
                        }
                    }
                }, this), this.delay)
            } else {
                this.$panel.hide();
                if (M.isFunction(this.hideCallback)) {
                    this.hideCallback.call(this, this.$nav, this.$panel)
                }
            }
        }, destory: function () {
            if (this.event === "mouseenterleave") {
                this.$nav.off("mouseenter.dropdown").off("mouseleave.dropdown");
                this.$panel.off("mouseenter.dropdown").off("mouseleave.dropdown")
            }
            if (this.event === "click") {
                this.$nav.off("click.dropdown")
            }
            this.$panel.hide()
        }
    };
    d.exports = a
});
M.define("/js/pageletcommon/pageHeadUserInfoWWWNormal", function (c) {
    var a = c("/js/Dropdown"), b = window.Env || {};
    return {
        events: {}, init: function () {
            var k = $("#head-btn-daka");
            $(function () {
                $(".new_daka_tips").addClass("on")
            });
            $(".ndt_close").on("click", function () {
                $(this).parent().hide()
            });
            M.Event.on("afterDaka", l);

            function l(q) {
                if (q && q.dakaFlag) {
                    k.closest(".head-daka").addClass("daka-complete")
                }
            }

            var e = i("dakaday");
            if (e !== null) {
                $(".head-btn-daka").attr("data-day", e)
            }

            function i(q) {
                var s = new RegExp("(^|&)" + q + "=([^&]*)(&|$)");
                var t = window.location.search.substr(1).match(s);
                if (t !== null) {
                    return unescape(t[2])
                }
                return null
            }

            var g = new a({
                nav: "#_j_head_user", panel: "#_j_user_panel", showCallback: function (q, r) {
                    q.find(".drop-trigger").addClass("drop-trigger-active")
                }, hideCallback: function (q, r) {
                    q.find(".drop-trigger").removeClass("drop-trigger-active")
                }, delay: 500
            });
            var d = 0, p = $("#_j_head_msg"), o = $("#_j_msg_panel"), n = p.find(".head-msg-new"),
                j = $("#_j_msg_float_panel");
            var f = new a({
                nav: p.selector, panel: o.selector, showCallback: function (q, r) {
                    q.find(".drop-trigger").addClass("drop-trigger-active")
                }, hideCallback: function (q, r) {
                    q.find(".drop-trigger").removeClass("drop-trigger-active")
                }, delay: 200
            });
            M.Event.on("get new msg", function (q) {
                if (q.msg || d > 0) {
                    o.find("ul").html(q.menu_index);
                    h()
                }
            });
            o.on("click", "a", function (q) {
                M.Event.fire("update msg")
            });
            j.on("click", "ul a", function (q) {
                M.Event.fire("update msg")
            });
            j.on("click", ".close-newmsg", function (q) {
                m()
            });

            function m() {
                n.hide();
                j.hide();
                $.ajax({
                    url: "http://" + b.WWW_HOST + "/ajax/ajax_msg.php",
                    dataType: "jsonp",
                    data: {a: "ignore", from: "1"},
                    success: function (q) {
                        M.Event.fire("update msg")
                    }
                })
            }

            window.close_msg_tips = m;

            function h() {
                var q = "";
                d = 0;
                o.find(".num").each(function (r, t) {
                    var s = $(t);
                    d += Number(s.html());
                    q += "<li>" + s.closest("li").html() + "</li>"
                });
                if (d > 0) {
                    n.html((d > 99 ? "99+" : d)).show();
                    j.find("ul").html(q).end().show()
                } else {
                    n.hide();
                    j.hide()
                }
            }

            h()
        }
    }
});
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function (i, f) {
    var t = i.fn.domManip, h = "_tmplitem", u = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, p = {}, e = {}, y,
        x = {key: 0, data: {}}, w = 0, q = 0, g = [];

    function k(B, A, D, E) {
        var C = {
            data: E || (E === 0 || E === false) ? E : (A ? A.data : {}),
            _wrap: A ? A._wrap : null,
            tmpl: null,
            parent: A || null,
            nodes: [],
            calls: c,
            nest: b,
            wrap: n,
            html: r,
            update: z
        };
        if (B) {
            i.extend(C, B, {nodes: [], parent: A})
        }
        if (D) {
            C.tmpl = D;
            C._ctnt = C._ctnt || C.tmpl(i, C);
            C.key = ++w;
            (g.length ? e : p)[w] = C
        }
        return C
    }

    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (A, B) {
        i.fn[A] = function (C) {
            var F = [], I = i(C), E, G, D, J, H = this.length === 1 && this[0].parentNode;
            y = p || {};
            if (H && H.nodeType === 11 && H.childNodes.length === 1 && I.length === 1) {
                I[B](this[0]);
                F = this
            } else {
                for (G = 0, D = I.length; G < D; G++) {
                    q = G;
                    E = (G > 0 ? this.clone(true) : this).get();
                    i(I[G])[B](E);
                    F = F.concat(E)
                }
                q = 0;
                F = this.pushStack(F, A, I.selector)
            }
            J = y;
            y = null;
            i.tmpl.complete(J);
            return F
        }
    });
    i.fn.extend({
        tmpl: function (C, B, A) {
            return i.tmpl(this[0], C, B, A)
        }, tmplItem: function () {
            return i.tmplItem(this[0])
        }, template: function (A) {
            return i.template(A, this[0])
        }, domManip: function (E, H, G, I) {
            if (E[0] && i.isArray(E[0])) {
                var B = i.makeArray(arguments), A = E[0], F = A.length, C = 0, D;
                while (C < F && !(D = i.data(A[C++], "tmplItem"))) {
                }
                if (D && q) {
                    B[2] = function (J) {
                        i.tmpl.afterManip(this, J, G)
                    }
                }
                t.apply(this, B)
            } else {
                t.apply(this, arguments)
            }
            q = 0;
            if (!y) {
                i.tmpl.complete(p)
            }
            return this
        }
    });
    i.extend({
        tmpl: function (C, F, E, B) {
            var D, A = !B;
            if (A) {
                B = x;
                C = i.template[C] || i.template(null, C);
                e = {}
            } else {
                if (!C) {
                    C = B.tmpl;
                    p[B.key] = B;
                    B.nodes = [];
                    if (B.wrapped) {
                        s(B, B.wrapped)
                    }
                    return i(m(B, null, B.tmpl(i, B)))
                }
            }
            if (!C) {
                return []
            }
            if (typeof F === "function") {
                F = F.call(B || {})
            }
            if (E && E.wrapped) {
                s(E, E.wrapped)
            }
            D = i.isArray(F) ? i.map(F, function (G) {
                return G ? k(E, B, C, G) : null
            }) : [k(E, B, C, F)];
            return A ? i(m(B, null, D)) : D
        }, tmplItem: function (B) {
            var A;
            if (B instanceof i) {
                B = B[0]
            }
            while (B && B.nodeType === 1 && !(A = i.data(B, "tmplItem")) && (B = B.parentNode)) {
            }
            return A || x
        }, template: function (B, A) {
            if (A) {
                if (typeof A === "string") {
                    A = l(A)
                } else {
                    if (A instanceof i) {
                        A = A[0] || {}
                    }
                }
                if (A.nodeType) {
                    A = i.data(A, "tmpl") || i.data(A, "tmpl", l(A.innerHTML))
                }
                return typeof B === "string" ? (i.template[B] = A) : A
            }
            return B ? (typeof B !== "string" ? i.template(null, B) : (i.template[B] || i.template(null, u.test(B) ? B : i(B)))) : null
        }, encode: function (A) {
            return ("" + A).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    i.extend(i.tmpl, {
        tag: {
            tmpl: {_default: {$2: "null"}, open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"},
            wrap: {
                _default: {$2: "null"},
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {$2: "$index, $value"},
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {open: "if(($notnull_1) && $1a){", close: "}"},
            "else": {_default: {$1: "true"}, open: "}else if(($notnull_1) && $1a){"},
            html: {open: "if($notnull_1){__.push($1a);}"},
            "=": {_default: {$1: "$data"}, open: "if($notnull_1){__.push($.encode($1a));}"},
            "!": {open: ""}
        }, complete: function (A) {
            p = {}
        }, afterManip: function v(C, A, D) {
            var B = A.nodeType === 11 ? i.makeArray(A.childNodes) : A.nodeType === 1 ? [A] : [];
            D.call(C, A);
            o(B);
            q++
        }
    });

    function m(A, E, C) {
        var D, B = C ? i.map(C, function (F) {
            return (typeof F === "string") ? (A.key ? F.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + h + '="' + A.key + '" $2') : F) : m(F, A, F._ctnt)
        }) : A;
        if (E) {
            return B
        }
        B = B.join("");
        B.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (G, H, F, I) {
            D = i(F).get();
            o(D);
            if (H) {
                D = a(H).concat(D)
            }
            if (I) {
                D = D.concat(a(I))
            }
        });
        return D ? D : a(B)
    }

    function a(B) {
        var A = document.createElement("div");
        A.innerHTML = B;
        return i.makeArray(A.childNodes)
    }

    function l(A) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + i.trim(A).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (I, C, G, D, E, J, F) {
            var L = i.tmpl.tag[G], B, H, K;
            if (!L) {
                throw"Unknown template tag: " + G
            }
            B = L._default || [];
            if (J && !/\w$/.test(E)) {
                E += J;
                J = ""
            }
            if (E) {
                E = j(E);
                F = F ? ("," + j(F) + ")") : (J ? ")" : "");
                H = J ? (E.indexOf(".") > -1 ? E + j(J) : ("(" + E + ").call($item" + F)) : E;
                K = J ? H : "(typeof(" + E + ")==='function'?(" + E + ").call($item):(" + E + "))"
            } else {
                K = H = B.$1 || "null"
            }
            D = j(D);
            return "');" + L[C ? "close" : "open"].split("$notnull_1").join(E ? "typeof(" + E + ")!=='undefined' && (" + E + ")!=null" : "true").split("$1a").join(K).split("$1").join(H).split("$2").join(D || B.$2 || "") + "__.push('"
        }) + "');}return __;")
    }

    function s(B, A) {
        B._wrap = m(B, true, i.isArray(A) ? A : [u.test(A) ? A : i(A).html()]).join("")
    }

    function j(A) {
        return A ? A.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function d(A) {
        var B = document.createElement("div");
        B.appendChild(A.cloneNode(true));
        return B.innerHTML
    }

    function o(G) {
        var I = "_" + q, B, A, E = {}, F, D, C;
        for (F = 0, D = G.length; F < D; F++) {
            if ((B = G[F]).nodeType !== 1) {
                continue
            }
            A = B.getElementsByTagName("*");
            for (C = A.length - 1; C >= 0; C--) {
                H(A[C])
            }
            H(B)
        }

        function H(P) {
            var L, O = P, N, J, K;
            if ((K = P.getAttribute(h))) {
                while (O.parentNode && (O = O.parentNode).nodeType === 1 && !(L = O.getAttribute(h))) {
                }
                if (L !== K) {
                    O = O.parentNode ? (O.nodeType === 11 ? 0 : (O.getAttribute(h) || 0)) : 0;
                    if (!(J = p[K])) {
                        J = e[K];
                        J = k(J, p[O] || e[O]);
                        J.key = ++w;
                        p[w] = J
                    }
                    if (q) {
                        Q(K)
                    }
                }
                P.removeAttribute(h)
            } else {
                if (q && (J = i.data(P, "tmplItem"))) {
                    Q(J.key);
                    p[J.key] = J;
                    O = i.data(P.parentNode, "tmplItem");
                    O = O ? O.key : 0
                }
            }
            if (J) {
                N = J;
                while (N && N.key != O) {
                    N.nodes.push(P);
                    N = N.parent
                }
                delete J._ctnt;
                delete J._wrap;
                i.data(P, "tmplItem", J)
            }

            function Q(R) {
                R = R + I;
                J = E[R] = (E[R] || k(J, p[J.parent.key + I] || J.parent))
            }
        }
    }

    function c(C, A, D, B) {
        if (!C) {
            return g.pop()
        }
        g.push({_: C, tmpl: A, item: this, data: D, options: B})
    }

    function b(A, C, B) {
        return i.tmpl(i.template(A), C, B, this)
    }

    function n(C, A) {
        var B = C.options || {};
        B.wrapped = A;
        return i.tmpl(i.template(C.tmpl), C.data, B, C.item)
    }

    function r(B, C) {
        var A = this._wrap;
        return i.map(i(i.isArray(A) ? A.join("") : A).filter(B || "*"), function (D) {
            return C ? D.innerText || D.textContent : D.outerHTML || d(D)
        })
    }

    function z() {
        var A = this.nodes;
        i.tmpl(null, null, null, this).insertBefore(A[0]);
        i(A).remove()
    }

    if (window.M && typeof M.define == "function") {
        M.define("jq-tmpl", function () {
            return i
        })
    }
})(jQuery);
M.define("InputListener", function (c, b, d) {
    var a = {
        listen: function (f, e) {
            f = $(f);
            f.each($.proxy(function (g, h) {
                h = $(h);
                if (!h.is("input") && !h.is("textarea")) {
                    throw new Error("input listener only apply to input or textarea")
                }
                this.initListen(h, e)
            }, this))
        }, unlisten: function (e) {
            e = $(e);
            e.each($.proxy(function (h, k) {
                k = $(k);
                if (!k.is("input") && !k.is("textarea")) {
                    throw new Error("input listener only apply to input or textarea")
                }
                if (arguments.length == 1) {
                    k.unbind("focus", this.getStartListenFunc());
                    k.unbind("blur", this.getStopListenFunc());
                    k.removeData("__input_listener_handlers")
                } else {
                    if (typeof arguments[1] == "function") {
                        var j = arguments[1], g = k.data("__input_listener_listeninterval");
                        for (var h = 0, f = g.length; h < f; h++) {
                            if (g[h] == j) {
                                g.splice(h, 1);
                                h--
                            }
                        }
                    }
                }
            }, this))
        }, initListen: function (f, e) {
            f.data("__input_listener_currentval", f.val());
            if (!f.data("__input_listener_handlers")) {
                this.bindListenEvent(f)
            }
            this.addListenHandler(f, e);
            if (f.is(":focus")) {
                f.blur();
                f.focus()
            }
        }, bindListenEvent: function (e) {
            e.data("__input_listener_handlers", []);
            e.focus(this.getStartListenFunc());
            e.blur(this.getStopListenFunc())
        }, getStartListenFunc: function () {
            if (!this.bindStartListenFunc) {
                this.bindStartListenFunc = $.proxy(this.startListen, this)
            }
            return this.bindStartListenFunc
        }, getStopListenFunc: function () {
            if (!this.bindStopListenFunc) {
                this.bindStopListenFunc = $.proxy(this.stopListen, this)
            }
            return this.bindStopListenFunc
        }, startListen: function (e) {
            var f = $(e.target);
            f.data("__input_listener_currentval", f.val());
            f.data("__input_listener_listeninterval", setInterval($.proxy(function () {
                var h = f.data("__input_listener_currentval"), g = f.val();
                if (h != g) {
                    f.data("__input_listener_currentval", g);
                    this.triggerListenHandler(f)
                }
            }, this), 100))
        }, stopListen: function (e) {
            var f = $(e.target);
            clearInterval(f.data("__input_listener_listeninterval"))
        }, addListenHandler: function (f, e) {
            if (typeof e == "function") {
                f.data("__input_listener_handlers").push(e)
            }
        }, triggerListenHandler: function (h) {
            var f = h.data("__input_listener_handlers");
            for (var g = 0, e = f.length; g < e; g++) {
                f[g].call(null, {target: h.get(0)})
            }
        }
    };
    return a
});
M.define("SuggestionXHR", function (b, a, c) {
    function d(e) {
        this.URL = null;
        this.delay = 200;
        this.dataType = "text";
        $.extend(this, e);
        this.delayTimer = null;
        this.xhr = null;
        this.cache = {};
        this.init()
    }

    d.prototype = {
        init: function () {
            if (!this.URL) {
                throw new Error("no url for suggestion")
            }
        }, getSuggestion: function (g, h) {
            var f = this.getQuery(g), e = this.cache[f];
            h = typeof h === "function" ? h : $.noop;
            this.stop();
            if (e) {
                h(e)
            } else {
                this.getXHRData(f, h)
            }
        }, stop: function () {
            clearTimeout(this.delayTimer);
            if (this.xhr && this.xhr.readyState !== 4) {
                this.xhr.abort()
            }
        }, getQuery: function (h) {
            var g = "";
            if (typeof h == "string") {
                g = encodeURIComponent(h)
            } else {
                if (h && typeof h == "object") {
                    var e = [];
                    for (var f in h) {
                        if (h.hasOwnProperty(f)) {
                            e.push(f + "=" + encodeURIComponent(h[f]))
                        }
                    }
                    g = e.join("&")
                }
            }
            return g
        }, getXHRData: function (e, h) {
            var f = this.xhr, g = {
                url: this.URL, data: e, dataType: this.dataType, success: M.bind(function (i) {
                    h(i);
                    this.cache[e] = i
                }, this)
            };
            this.delayTimer = setTimeout(M.bind(function () {
                this.xhr = $.ajax(g)
            }, this), this.delay)
        }
    };
    return d
});
M.define("DropList", function (c, b, d) {
    var a = M.Event;

    function e(f) {
        this.trigger = null;
        this.container = null;
        this.itemSelector = "._j_listitem";
        this.itemHoverClass = "on";
        this.firstItemHover = false;
        $.extend(this, f);
        this.trigger = $(this.trigger);
        this.container = $(this.container);
        this.mouseon = false;
        this.visible = false;
        this.init()
    }

    M.mix(e.prototype, {
        createContainer: $.noop, updateList: $.noop, init: function () {
            if (!this.trigger.length) {
                M.error("no trigger for drop list")
            }
            if (!this.container.length) {
                this.container = this.createContainer()
            }
            if (!this.container.length) {
                M.error("no container for drop list")
            }
            this.bindEvents()
        }, bindEvents: function () {
            this.trigger.on("keydown", $.proxy(function (g) {
                var h = g.keyCode;
                if (this.visible && h == 13) {
                    var f = this.getFocusItem();
                    if (f.length) {
                        this.selectItem(f);
                        g.preventDefault()
                    }
                } else {
                    if (this.visible && h == 38) {
                        this.moveFocus(-1)
                    } else {
                        if (this.visible && h == 40) {
                            this.moveFocus(1)
                        }
                    }
                }
            }, this));
            this.container.on("mouseenter", this.itemSelector, $.proxy(this.moveFocus, this)).on("click", this.itemSelector, $.proxy(this.clickItem, this)).on("mouseenter", $.proxy(this.mouseOverCnt, this)).on("mouseleave", $.proxy(this.mouseOutCnt, this))
        }, show: function (g) {
            this.updateList(g);
            this.container.show();
            if (this.firstItemHover) {
                var f = this.container.find(this.itemSelector);
                if (f.length) {
                    this.moveFocus(1)
                }
            }
            this.visible = true
        }, hide: function () {
            this.container.hide();
            this.visible = false
        }, clickItem: function (g) {
            var f = this.getFocusItem();
            this.selectItem(f);
            g.preventDefault()
        }, selectItem: function (f) {
            a(this).fire("itemselected", {item: f})
        }, moveFocus: function (i) {
            var h = this.container.find(this.itemSelector), j = this.getFocusItem(), g = j, f;
            if (i === -1) {
                if (j.length) {
                    f = h.index(j) - 1
                }
                if (!j.length || f == -1) {
                    g = h.last()
                } else {
                    g = h.eq(f)
                }
            } else {
                if (i === 1) {
                    if (j.length) {
                        f = h.index(j) + 1
                    }
                    if (!j.length || f == h.length) {
                        g = h.first()
                    } else {
                        g = h.eq(f)
                    }
                } else {
                    if (i.currentTarget) {
                        g = $(i.currentTarget)
                    }
                }
            }
            j.removeClass(this.itemHoverClass);
            g.addClass(this.itemHoverClass);
            a(this).fire("itemfocused", {prevItem: j, focusItem: g})
        }, getFocusItem: function () {
            var f = this.container.find(this.itemSelector);
            return f.filter("." + this.itemHoverClass)
        }, mouseOverCnt: function () {
            this.mouseon = true
        }, mouseOutCnt: function () {
            this.mouseon = false
        }
    });
    return e
});
M.define("Suggestion", function (c) {
    c("jq-tmpl");
    var a = c("InputListener");
    var b = '{{each(i, item) list}}<li class="${listItemClass}" data-value="${item.value}">${item.text}</li>{{/each}}';

    function d(e) {
        e.suggestionURL = e.url || $(e.input).data("suggestionurl");
        this.dropListClass = "droplist";
        this.listItemSelector = "._j_listitem";
        this.listItemHoverClass = "on";
        this.listFirstItemHover = false;
        this.keyParamName = "key";
        this.dataType = "json";
        this.suggestionParams = {};
        this.listContainer = null;
        M.mix(this, e);
        this.input = $(this.input);
        this.listTmpl = this.listTmpl || b;
        this.actOnList = false;
        this.init()
    }

    M.mix(d.prototype, {
        init: function () {
            a.listen(this.input, $.proxy(this.inputChange, this));
            this.input.blur($.proxy(function (f) {
                var e = $(f.currentTarget);
                if (e.data("droplist")) {
                    setTimeout($.proxy(function () {
                        if (!this.actOnList && e.data("droplist")) {
                            e.data("droplist").hide()
                        }
                        this.actOnList = false
                    }, this), 200)
                }
            }, this));
            this.input.keyup($.proxy(function (f) {
                var e = $(f.currentTarget);
                if (f.keyCode == 40 && (!e.data("droplist") || !e.data("droplist").visible)) {
                    this.inputChange(f)
                }
            }, this))
        }, inputChange: function (i) {
            var f = $(i.target), k = $.trim(f.val()), j = c("SuggestionXHR"), h = c("DropList");
            var g = f.data("droplist");
            if (!g) {
                f.data("droplist", g = new h({
                    trigger: f,
                    itemSelector: this.listItemSelector,
                    itemHoverClass: this.listItemHoverClass,
                    firstItemHover: this.listFirstItemHover,
                    container: this.listContainer,
                    createContainer: $.proxy(function () {
                        var l = this.createListContainer(f);
                        this.listContainer = l;
                        return l
                    }, this),
                    updateList: $.proxy(this.updateList, this)
                }));
                M.Event(g).on("itemselected", $.proxy(function (l) {
                    this.dropItemSelected(f, l.item)
                }, this));
                M.Event(g).on("itemfocused", $.proxy(function (l) {
                    M.Event(this).fire("itemfocused", l)
                }, this))
            }
            g.hide = function () {
                setTimeout($.proxy(function () {
                    if (M.windowFocused) {
                        this.container.hide();
                        this.visible = false
                    }
                }, this), 1)
            };
            var e = f.data("suggestion");
            if (!e) {
                f.data("suggestion", e = new j({URL: this.suggestionURL, dataType: this.dataType}))
            }
            if (!k.length) {
                e.stop();
                g.hide();
                M.Event(this).fire("after hide list")
            } else {
                this.suggestionParams[this.keyParamName] = k;
                M.Event(this).fire("before suggestion xhr");
                e.getSuggestion(this.suggestionParams, $.proxy(function (m) {
                    M.Event(this).fire("before show list");
                    var l = this.handleSuggest(m);
                    if (l) {
                        f.data("droplist").show(l)
                    }
                }, this))
            }
        }, handleSuggest: function (f) {
            var e = "";
            if (this.dataType == "json") {
                e = $.tmpl(this.listTmpl, f)
            }
            return e
        }, createListContainer: function (f) {
            var g = $("<ul />"), e = f.position();
            g.css({
                display: "none",
                position: "absolute",
                left: e.left,
                top: e.top + f.outerHeight()
            }).addClass(this.dropListClass);
            g.insertAfter(f);
            return g
        }, updateList: function (e) {
            this.listContainer.html(e)
        }, hideDropList: function () {
            this.input.data("droplist") && this.input.data("droplist").hide()
        }, dropItemSelected: function (e, f) {
            a.unlisten(e);
            M.Event(this).fire("itemselected", {item: f, input: e});
            a.listen(e, $.proxy(this.inputChange, this))
        }
    });
    return d
});
M.define("MesSearchEvent", function (b, a, c) {
    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    Math.uuid = function (f, j) {
        var l = e, h = [], g;
        j = j || l.length;
        if (f) {
            for (g = 0; g < f; g++) {
                h[g] = l[0 | Math.random() * j]
            }
        } else {
            var k;
            h[8] = h[13] = h[18] = h[23] = "-";
            h[14] = "4";
            for (g = 0; g < 36; g++) {
                if (!h[g]) {
                    k = 0 | Math.random() * 16;
                    h[g] = l[(g == 19) ? (k & 3) | 8 : k]
                }
            }
        }
        return h.join("")
    };
    Math.uuidFast = function () {
        var k = e, h = new Array(36), g = 0, j;
        for (var f = 0; f < 36; f++) {
            if (f == 8 || f == 13 || f == 18 || f == 23) {
                h[f] = "-"
            } else {
                if (f == 14) {
                    h[f] = "4"
                } else {
                    if (g <= 2) {
                        g = 33554432 + (Math.random() * 16777216) | 0
                    }
                    j = g & 15;
                    g = g >> 4;
                    h[f] = k[(f == 19) ? (j & 3) | 8 : j]
                }
            }
        }
        return h.join("")
    };
    Math.uuidCompact = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (h) {
            var g = Math.random() * 16 | 0, f = h == "x" ? g : (g & 3 | 8);
            return f.toString(16)
        })
    };
    var d = {
        uuid: function () {
            return Math.uuid()
        }, search: function (f) {
            var g = Math.uuid();
            f.id = g;
            !!mfwPageEvent && mfwPageEvent("se", "v2_search", f);
            return g
        }, searchCache: function (f) {
            var g = Math.uuid();
            f.id = g;
            !!mfwPageEvent && mfwPageEvent("se", "v2_search_cache", f);
            return g
        }, resultClick: function (f) {
            !!mfwPageEvent && mfwPageEvent("se", "v2_result_click", f);
            return f.id
        }
    };
    c.exports = d
});
M.define("/js/SiteSearch", function (e) {
    var d = "1.0.0", h = e("Suggestion"), f = e("MesSearchEvent"), g = M.cssSupport("transition"),
        b = M.cssSupport("transform"), c = window.Env || {};
    var a = function (C) {
        var E = $("#" + C.input + ""), T = !!C.submit ? $("#" + C.submit + "") : null,
            t = C.additionalClass ? C.additionalClass : "", K = !!C.isRelevant, s = C.maxCount || 0,
            z = C.hideOnScroll || false, n = false, J = false, i = "", y = "", l = "", p = "";
        if (C.input === "_j_index_search_input_all") {
            var H = [];
            if (E.val() === "" && H && H.length) {
                var S = Math.floor(Math.random() * H.length), I = H[S];
                E.val(I.name).data("url", I.url)
            }
            E.on("focus", function (V) {
                if (E.data("url")) {
                    E.val("").data("url", "")
                }
            })
        }
        if (c.is_async_site_search) {
            n = true
        }
        var P = new h({
            url: (c.WWW_HOST ? "http://" + c.WWW_HOST : "") + "/search/ss.php",
            suggestionParams: {isHeader: Number(K)},
            input: E,
            listItemHoverClass: "active",
            listFirstItemHover: false,
            dataType: "jsonp",
            createListContainer: function () {
                var V = $('<div class="m-search-suggest ' + t + ' hide"><ul class="mss-list"></ul></div>').appendTo("body");
                V.on("mouseenter", ".mss-place .mss-title, .mss-place .mss-nav a", function (X) {
                    var W = $(X.currentTarget), Y = W.closest(".mss-place");
                    Y.find(".mss-title").removeClass("active").removeClass("frozen").end().find(".mss-nav a").removeClass("active").end();
                    W.addClass("active")
                }).on("mouseleave", ".mss-place .mss-title, .mss-place .mss-nav a", function (X) {
                    var W = $(X.currentTarget);
                    W.removeClass("active")
                });
                return V
            },
            handleSuggest: function (aB) {
                i = aB.keyword;
                J = !!aB.is_hit;
                l = "http://" + aB.www_host;
                var aw = aB.keyword_cut, ay = aB.show_types, W = aB.hide_types;
                var aq = $("<ul>");
                var aa = aB.first_poi;
                if (!!aa) {
                    var al = aa, aj = $('<li class="mss-item _j_listitem" data-type="poi">').appendTo(aq),
                        ao = $('<div class="mss-title">').appendTo(aj);
                    aj.attr("data-url", al.url);
                    ao.append('<span class="mss-fr">' + (!!al.mddname ? al.mddname : "") + al.typename + "</span>");
                    ao.append('<span class="mss-cn">' + al.dis_name + "</span>")
                }
                var ag = aB.article_info;
                if (ag && ag.result) {
                    for (var ar = 0; ar < ag.result.length; ar++) {
                        var af = ag.result[ar],
                            aj = $('<li class="mss-item _j_listitem" data-type="article_promoted">').appendTo(aq),
                            ao = $('<div class="mss-title">').appendTo(aj);
                        aj.attr("data-url", af.link);
                        ao.html(af.name_display)
                    }
                }
                var ak = aB.mdd_info;
                if (ak && ak.result) {
                    for (var ar = 0; ar < ak.result.length; ar++) {
                        var Z = ak.result[ar], aj = $('<li class="mss-item _j_listitem" data-type="mdd">').appendTo(aq),
                            ao = $('<div class="mss-title">').appendTo(aj);
                        aj.attr("data-url", Z.url);
                        if (!!Z.parent) {
                            ao.append('<span class="mss-fr">' + Z.parent + "</span>")
                        }
                        ao.append('<span class="mss-cn">' + Z.dis_name + "</span>");
                        ao.append('<span class="mss-gl"> ' + Z.infoname + "</span>")
                    }
                }
                var an = aB.hotel_info;
                if (an && an.result && !K) {
                    for (var ar = 0; ar < an.result.length; ar++) {
                        var az = an.result[ar],
                            aj = $('<li class="mss-item _j_listitem" data-type="hotel_promoted">').appendTo(aq),
                            ao = $('<div class="mss-title">').appendTo(aj);
                        aj.attr("data-url", az.url);
                        ao.append('<span class="mss-fr">' + az.typename + "</span>");
                        ao.append('<span class="mss-cn">' + az.title + "</span>");
                        ao.append('<span class="mss-gl"> ' + az.infoname + "</span>")
                    }
                }
                var ad = aB.gl_info;
                if (ad && ad.result) {
                    for (var ar = 0; ar < ad.result.length; ar++) {
                        var ap = ad.result[ar],
                            aj = $('<li class="mss-item _j_listitem" data-type="sales_gonglve">').appendTo(aq),
                            ao = $('<div class="mss-title">').appendTo(aj);
                        aj.attr("data-url", ap.url);
                        ao.append('<span class="mss-fr">' + ap.typename + "</span>");
                        ao.append('<span class="mss-cn">' + ap.title + "</span>")
                    }
                }
                var Y = aB.sales_info;
                if (Y && Y.result && !K) {
                    for (var ar = 0; ar < Y.result.length; ar++) {
                        var V = Y.result[ar],
                            aj = $('<li class="mss-item _j_listitem" data-type="sales_promoted">').appendTo(aq),
                            ao = $('<div class="mss-title">').appendTo(aj);
                        aj.attr("data-url", V.url);
                        ao.append('<span class="mss-fr">' + V.typename + "</span>");
                        ao.append('<span class="mss-cn">' + V.title + "</span>");
                        ao.append('<span class="mss-gl"> ' + V.infoname + "</span>")
                    }
                }
                var ae = aB.route_info;
                if (ae && ae.result && !K) {
                    for (var ar = 0; ar < ae.result.length; ar++) {
                        var ax = ae.result[ar],
                            aj = $('<li class="mss-item _j_listitem" data-type="route_promoted">').appendTo(aq),
                            ao = $('<div class="mss-title">').appendTo(aj);
                        aj.attr("data-url", ax.url);
                        ao.append('<span class="mss-fr">' + ax.typename + "</span>");
                        ao.append('<span class="mss-cn">' + ax.title + "</span>");
                        ao.append('<span class="mss-gl"> ' + ax.infoname + "</span>")
                    }
                }
                var at = aB.qa_info;
                if (at && at.result) {
                    for (var ar = 0; ar < at.result.length; ar++) {
                        var ah = at.result[ar],
                            aj = $('<li class="mss-item _j_listitem" data-type="wenda">').appendTo(aq),
                            ao = $('<div class="mss-title">').appendTo(aj);
                        aj.attr("data-url", ah.url);
                        ao.append('<span class="mss-fr">' + ah.typename + "</span>");
                        ao.append('<span class="mss-cn">' + ah.title + "</span>")
                    }
                }
                var ac = aB.poi_info, av = !K;
                if (M.isArray(ay) && M.indexOf(ay, "poi") !== -1) {
                    av = true
                }
                if (ac && ac.result && av) {
                    for (var ar = 0; ar < ac.result.length; ar++) {
                        var al = ac.result[ar], X = "hotel" === al.stype ? "hotel" : "poi",
                            aj = $('<li class="mss-item _j_listitem" data-type="' + X + '">').appendTo(aq),
                            ao = $('<div class="mss-title">').appendTo(aj);
                        aj.attr("data-url", al.url);
                        ao.append('<span class="mss-fr">' + (!!al.mddname ? al.mddname : "") + al.typename + "</span>");
                        ao.append('<span class="mss-cn" style="color:#999;">' + al.dis_name + "</span>")
                    }
                }
                var ai = aB.sekey_info, au = K;
                if (M.isArray(W) && M.indexOf(W, "sekey") !== -1) {
                    au = false
                }
                if (ai && ai.result && au) {
                    for (var ar = 0; ar < ai.result.length; ar++) {
                        if (ar > 4) {
                            break
                        }
                        var aA = ai.result[ar],
                            aj = $('<li class="mss-item _j_listitem" data-type="sekey">').appendTo(aq);
                        aj.attr("data-url", aA.url);
                        aj.append('<div class="mss-title">' + aA.name + "</div>")
                    }
                }
                var ab = aB.ginfo_num;
                if (!!ab) {
                    var aj = $('<li class="mss-item _j_listitem" data-type="info">').appendTo(aq);
                    aj.append('<div class="mss-title">搜“<span class="mss-key">' + aw + '</span>”相关游记<span class="mss-num">' + ab + "篇</span></div>")
                }
                var am = aB.user_num;
                if (!!ab) {
                    var aj = $('<li class="mss-item _j_listitem" data-type="user">').appendTo(aq);
                    aj.append('<div class="mss-title">搜“<span class="mss-key">' + aw + "</span>”相关用户</div>")
                }
                if (s > 0) {
                    aq.find("._j_listitem").each(function (aC, aD) {
                        if (aC > s) {
                            $(aD).remove()
                        }
                    })
                }
                return aq.html()
            },
            updateList: function (V) {
                this.listContainer.find(".mss-list").html(V);
                if (K) {
                    this.listContainer.find(".mss-list").addClass("shrink-list")
                }
                if (J) {
                    P.input.data("droplist").moveFocus(1)
                }
            }
        });
        if (n) {
            var A = e("InputListener"), w = e("SuggestionXHR"),
                D = new w({URL: (c.WWW_HOST ? "http://" + c.WWW_HOST : "") + "/search/s.php", dataType: "json"}),
                v = $("#_j_mfw_search_main"), U = E.closest(".search-wrapper"),
                L = $('<div class="search-keyword-tip"></div>').appendTo(U),
                B = C.input === "_j_index_search_input_all", G = false, u, q, N, k, r;
            A.listen(E, function (W) {
                var V = $(W.target), X = $.trim(V.val());
                if (!G && X) {
                    G = true
                }
                L.hide()
            });
            M.Event(P).on("before suggestion xhr", function () {
                var V = P.suggestionParams[P.keyParamName];
                if (V && V !== y) {
                    D.getSuggestion({q: V, gall: 1}, $.proxy(function (X) {
                        var ab = $.trim(E.val());
                        if (!ab) {
                            return false
                        }
                        if (!X || !X.keyword || (!X.result && !X.unmatch)) {
                            return false
                        }
                        if (X.unmatch === 1) {
                            L.hide()
                        } else {
                            y = V;
                            if (U[0]) {
                                var Y = X.keyword.length, W = X.keyword.replace(/[A-Za-z0-9\s]/g, "").length,
                                    aa = Y - W;
                                setTimeout(function () {
                                    L.html(X.keyword).css("left", 32 + W * 14 + aa * 7).show()
                                }, 1)
                            }
                            v.html($(X.result).css("minHeight", 0).html());
                            if (g && b) {
                                v.find("> .wid").addClass("anim-climb");
                                setTimeout(function () {
                                    v.find("> .wid").removeClass("anim-climb")
                                }, 1)
                            }
                            var Z = c.search_type || "all";
                            c.search_seid = Q(V, Z);
                            c.search_keyword = V;
                            c.is_search_cache = true;
                            c.is_search_updated = true
                        }
                    }, P))
                }
            })
        }
        M.Event(P).on("before suggestion xhr", function () {
            R(E, P.listContainer)
        });
        M.Event(P).on("before show list", function () {
            P.listContainer.find(".mss-list").show()
        });
        M.Event(P).on("itemfocused", function (W) {
            var V = W.prevItem, X = W.focusItem, Y = P.listContainer;
            if (1 < Y.find(".mss-place").length) {
                if (X.hasClass("mss-place")) {
                    Y.find(".mss-place").removeClass("frozen")
                }
                if (!X.hasClass("mss-place") && !!V && V.hasClass("mss-place")) {
                    Y.find(".mss-place").removeClass("frozen");
                    V.addClass("frozen")
                }
            }
            if (X.hasClass("mss-place")) {
                X.find(".mss-title").addClass("frozen")
            }
        });
        M.Event(P).on("itemselected", function (X) {
            var Z = X.item;
            if (Z.length) {
                var Y = Z.data("type"), W = Z.data("url"),
                    ab = E.attr("id") === "_j_head_search_input" ? "header" : "default";
                if (Y === "flight_hotel" || Y === "flight" || Y === "local") {
                    Y = "sales"
                }
                p = m(i, "all", ab, "suggest");
                if ("info" === Y || "user" === Y) {
                    var aa = m(i, Y, ab, "suggest");
                    location.href = l + "/search/s.php?q=" + encodeURIComponent(i) + "&t=" + Y + "&seid=" + aa
                } else {
                    var W = Z.data("url"), V = P.listContainer.find(".mss-item").index(Z.closest(".mss-item")) + 1;
                    O(W, V, Y);
                    location.href = Z.data("url")
                }
            } else {
                if (i !== "") {
                    location.href = l + "/search/s.php?q=" + encodeURIComponent(i)
                }
            }
        });
        var x = E.closest(".head-search-wrapper");
        if (x[0]) {
            E.on("focus", function (V) {
                setTimeout(function () {
                    x.addClass("head-search-focus")
                }, 1)
            }).on("blur", function (V) {
                setTimeout(function () {
                    if (M.windowFocused) {
                        x.removeClass("head-search-focus")
                    }
                }, 1)
            })
        }
        if (T && T[0]) {
            T.on("click", function (X) {
                var W = $.trim(E.val());
                if (E.data("url")) {
                    if (E.data("url").indexOf("http") !== -1) {
                        location.href = E.data("url")
                    } else {
                        location.href = (c.WWW_HOST ? "http://" + c.WWW_HOST : "") + E.data("url")
                    }
                    return true
                }
                if (W !== "") {
                    if (P.listContainer) {
                        P.listContainer.hide()
                    }
                    var Z = E.attr("id") === "_j_head_search_input" ? "header" : "default", aa = c.search_type || "all",
                        Y = m(W, aa, Z, "form"), V = l + "/search/s.php?q=" + encodeURIComponent(W);
                    if (c.search_type && location.pathname === "/search/s.php") {
                        V += "&t=" + c.search_type
                    }
                    V += "&seid=" + Y;
                    location.href = V
                }
            })
        }
        if (E && E[0]) {
            E.on("keydown", function (X) {
                if (X.keyCode == 13) {
                    var aa = P.input.data("droplist");
                    if (aa && aa.getFocusItem().length) {
                        return true
                    }
                    var W = $.trim(E.val());
                    if (W !== "") {
                        if (P.listContainer) {
                            P.listContainer.hide()
                        }
                        var Z = E.attr("id") === "_j_head_search_input" ? "header" : "default",
                            ab = c.search_type || "all", Y = m(W, ab, Z, "form"),
                            V = l + "/search/s.php?q=" + encodeURIComponent(W);
                        if (c.search_type && location.pathname === "/search/s.php") {
                            V += "&t=" + c.search_type
                        }
                        V += "&seid=" + Y;
                        location.href = V
                    }
                }
            })
        }
        $(window).resize(function () {
            if (P.listContainer && P.listContainer.length && P.listContainer.is(":visible")) {
                R(E, P.listContainer)
            }
        });
        $(window).on("scroll", function (V) {
            if (z) {
                P.hideDropList()
            }
        });

        function R(V, X) {
            var W = V.offset();
            X.css({left: W.left + (C.input === "_j_index_search_input_all" ? 0 : 1), top: W.top + E.outerHeight() - 2})
        }

        function m(V, Z, Y, X) {
            var W = {
                keyword: V,
                content_category: Z,
                searchbox_category: "main_search",
                searchbox_position: Y,
                search_type: X,
                version: d
            };
            return f.search(W)
        }

        function Q(V, X) {
            var W = {keyword: V, content_category: X, version: d};
            return f.searchCache(W)
        }

        function O(Y, W, X) {
            var V = {
                id: p,
                keyword: i,
                click_url: Y,
                index: W,
                content_category: X,
                search_type: "suggest",
                version: d
            };
            return f.resultClick(V)
        }

        function F(W, aa) {
            var X = [], ac = W.split("|");
            aa = j(aa);
            for (var Z = 0; Z < ac.length; Z++) {
                var Y = $.trim(ac[Z]);
                if (Y == "search://") {
                    var V = X.length;
                    X[V] = ac[Z++];
                    X[V + 1] = ac[Z++];
                    X[V + 2] = ac[Z++];
                    X[V + 3] = ac[Z++];
                    X[V + 4] = ac[Z++];
                    X[V + 5] = ac[Z];
                    continue
                }
                if (Y) {
                    try {
                        Y = Y.replace(new RegExp(aa, "ig"), function (ad) {
                            return '<span class="highlight">' + ad + "</span>"
                        })
                    } catch (ab) {
                        Y = Y.replace(aa, function (ad) {
                            return '<span class="highlight">' + ad + "</span>"
                        })
                    }
                    X[X.length] = Y
                }
            }
            return X
        }

        var o = $("<div/>");

        function j(V) {
            return o.text(V).html()
        }
    };
    return a
});
M.closure(function (c) {
    var r = $("#header");
    if (!r.length) {
        return false
    }
    var o = c("/js/Dropdown");
    var n = c("/js/SiteSearch");
    new n({input: "_j_head_search_input", submit: "_j_head_search_link", isRelevant: true});
    $("#_j_nav_sales").find("[data-sales-nav]").on("click", function () {
        var t = $(this).data("salesNav");
        mfwPageEvent("sales", "index_sales_nav", {name: t})
    });
    if (!window.showBarFlag) {
        $("._j_sales_nav_show").off("hover")
    } else {
        var b = 0, p = 0;
        $("._j_sales_nav_show").hover(function () {
            clearTimeout(b);
            p = setTimeout(function () {
                $("._j_sales_nav_show").addClass("head-nav-hover");
                $("._j_sales_top").fadeIn(300)
            }, 200)
        }, function () {
            clearTimeout(p);
            b = setTimeout(function () {
                $("._j_sales_nav_show").removeClass("head-nav-hover");
                $("._j_sales_top").fadeOut(300)
            }, 200)
        })
    }
    var m = 0, f = 0;
    $("._j_shequ_nav_show").hover(function () {
        clearTimeout(m);
        f = setTimeout(function () {
            $("._j_shequ_nav_show").addClass("head-nav-hover");
            $("._j_shequ_top").fadeIn(300)
        }, 200)
    }, function () {
        clearTimeout(f);
        m = setTimeout(function () {
            $("._j_shequ_nav_show").removeClass("head-nav-hover");
            $("._j_shequ_top").fadeOut(300)
        }, 200)
    });
    var q = $("#_j_community_panel"), i = q.find(".panel-image").length, j = Math.floor(Math.random() * i);
    if (j === i) {
        j--
    }
    q.find(".panel-image").eq(j).show();
    $("#_j_showlogin").click(function (t) {
        if (window.location.host === Env.WWW_HOST) {
            t.preventDefault()
        }
        M.Event.fire("login:required")
    });
    var g = window.location.hostname, k = window.location.pathname + window.location.search, a = $("#_j_head_nav");
    if (g.indexOf("www") === 0) {
        if (k === "" || k === "/") {
            a.children("li:eq(0)").addClass("head-nav-active")
        }
        var h = new RegExp("^/(mdd|photo/mdd|poi|photo/poi|travel-scenic-spot|jd|cy|gw|yl|yj|xc|baike)/|sFrom=mdd.*|sFrom=smdd.*", "i");
        if (h.test(k)) {
            a.children("li:eq(1)").addClass("head-nav-active")
        }
        var e = new RegExp("^/gonglve/.*", "i");
        if (e.test(k)) {
            a.children("li:eq(2)").addClass("head-nav-active")
        }
        var d = window.Env && window.Env.sales_title_tag;
        if (d) {
            if (d === "flight_hotel") {
                a.children("li:eq(3)").find("ul>li:eq(0)>a").addClass("on")
            } else {
                if (d === "visa") {
                    a.children("li:eq(3)").find("ul>li:eq(2)>a").addClass("on")
                } else {
                    if (d === "localdeals") {
                        a.children("li:eq(3)").find("ul>li:eq(1)>a").addClass("on")
                    } else {
                        if (d === "insurance") {
                            a.children("li:eq(3)").find("ul>li:eq(4)>a").addClass("on")
                        }
                    }
                }
            }
            a.find("li:eq(3)").addClass("head-nav-active")
        }
        if (/^\/insurance\//i.test(k)) {
            a.find("li:eq(3)").addClass("head-nav-active")
        }
        var s = new RegExp("^/hotel/(?!.*sFrom=mdd).*", "ig");
        if (s.test(k)) {
            a.children("li:eq(4)").addClass("head-nav-active");
            a.children("li:eq(4)").find(".head-act616").remove()
        }
        var l = new RegExp("^/(wenda|qa|mall|together|group|i|traveller|rudder|paimai|club|postal|school|photo_pk|focus)/(?!.*sFrom=mdd|s.php*).*", "i");
        if (l.test(k)) {
            a.children("li:eq(5)").addClass("head-nav-active")
        }
    }
});
M.define("PageAdmin", function (b) {
    var e = {}, c = d();
    e.uuid = window.Env && window.Env.uPageId || a();

    function a() {
        var f = c();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (h) {
            var g = (f + Math.random() * 16) % 16 | 0;
            f = Math.floor(f / 16);
            return (h === "x" ? g : (g & 3 | 8)).toString(16)
        })
    }

    function d() {
        var f = window.performance || {},
            g = f.now || f.mozNow || f.msNow || f.oNow || f.webkitNow || Date.now || function () {
                return new Date().getTime()
            };
        return g
    }

    return e
});
M.define("Storage", function (e, g, b) {
    var n = document;
    var d = c();
    var f = {
        _element: null, _expires: null, _file: document.location.hostname, init: function () {
            if (!this._element) {
                try {
                    this._element = n.createElement("input");
                    this._element.type = "hidden";
                    this._element.addBehavior("#default#userData");
                    n.body.appendChild(this._element);
                    this.setItem("__detectUserDataStorage", 1);
                    this.removeItem("__detectUserDataStorage");
                    return {setItem: this.setItem, getItem: this.getItem, removeItem: this.removeItem}
                } catch (p) {
                    M.error(p)
                }
            }
            return true
        }, setItem: function (s, t, q) {
            var p = j(q);
            this._element.expires = p.toUTCString();
            this._element.load(this._file);
            var r = a(this._element.getAttribute(s)), u = i(t, +p);
            this._element.setAttribute(s, u);
            this._element.save(this._file);
            k({key: s, newValue: u, oldValie: r, url: window.location.href})
        }, getItem: function (p) {
            this._element.load(this._file);
            var q = a(this._element.getAttribute(p));
            return q && q.value
        }, removeItem: function (p) {
            this._element.load(this._file);
            this._element.removeAttribute(p);
            this._element.save(this._file)
        }
    };
    var l = {
        setItem: function (r, s, q) {
            if (!d) {
                return
            }
            var p = j(q);
            localStorage.setItem(r, i(s, +p))
        }, getItem: function (p) {
            if (!d) {
                return
            }
            var r = +new Date(), q = a(localStorage.getItem(p));
            if (q) {
                if (r > q.timestamp) {
                    localStorage.removeItem(p);
                    q = null
                } else {
                    q = q.value
                }
            }
            return q
        }, removeItem: function (p) {
            if (!d) {
                return
            }
            localStorage.removeItem(p)
        }
    };
    var h = {}, m = {
        on: function (q, r) {
            var p = h[q] || (h[q] = []);
            p.push(r)
        }, off: function (q, r) {
            var p = h[q];
            if (!!p) {
                if (!!r) {
                    M.forEach(p, function (t, s) {
                        if (t == r) {
                            p.splice(s, 1)
                        }
                    })
                } else {
                    p = []
                }
            }
            return this
        }
    };
    M.mix(f, m);
    M.mix(l, m);
    if (window.addEventListener) {
        window.addEventListener("storage", k, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onstorage", k)
        }
    }

    function k(u) {
        if (!u) {
            u = window.event
        }
        var p = M.mix({}, u), w = u.newValue && a(u.newValue), q = u.oldValue && a(u.oldValue), v = +new Date();
        p.newValue = w && w.value;
        if (!!q && v < q.timestamp) {
            p.oldValue = q.value
        } else {
            p.oldValue = null
        }
        var t = u.key, s = h[t], r = 0;
        if (!t || !s || 0 === s.length) {
            return
        }
        while (r < s.length) {
            s[r++].call(window, p)
        }
    }

    function j(p) {
        if (Object.prototype.toString.call(p) != "[object Date]") {
            var q = typeof p === "number" && p > 0 ? p : 86400;
            p = new Date();
            p.setTime(+p + q * 1000)
        }
        return p
    }

    function i(q, p) {
        var r = {value: q, timestamp: p};
        return JSON.stringify(r)
    }

    function a(p) {
        if (p) {
            try {
                p = JSON.parse(p);
                if (!("value" in p) || !("timestamp" in p)) {
                    p = {value: p, timestamp: +j()}
                }
            } catch (q) {
                p = {value: p, timestamp: +j()}
            }
        }
        return p
    }

    function c() {
        if (window.localStorage) {
            try {
                localStorage.setItem("__detectLocalStorage", 1);
                localStorage.removeItem("__detectLocalStorage");
                return true
            } catch (p) {
                return false
            }
        }
        return false
    }

    var o = window.localStorage ? l : f.init();
    b.exports = M.mix(o, {isAvailable: c, isSupport: window.localStorage ? d : ("setItem" in o)})
});
M.define("Cookie", function (f, h, e) {
    var g = /\+/g;
    var i = navigator.cookieEnabled;
    if (!i) {
        document.cookie = "__detectCookieEnabled=1;";
        i = document.cookie.indexOf("__detectCookieEnabled") != -1 ? true : false;
        if (i) {
            document.cookie = "__detectCookieEnabled=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        }
    }
    if (!i) {
        return {isSupport: false}
    }
    var d = {
        isSupport: true, set: function (m, n, k) {
            k = (typeof k == "object" && k !== null) ? k : {};
            if (typeof k.expires === "number") {
                var o = k.expires, l = k.expires = new Date();
                l.setTime(+l + o * 1000)
            }
            return (document.cookie = [j(m), "=", j(String(n)), k.expires ? "; expires=" + k.expires.toUTCString() : "", k.path ? "; path=" + k.path : "", k.domain ? "; domain=" + k.domain : "", k.secure ? "; secure" : ""].join(""))
        }, get: function (q) {
            var k = q ? undefined : {};
            var r = document.cookie ? document.cookie.split("; ") : [];
            for (var p = 0, m = r.length; p < m; p++) {
                var s = r[p].split("=");
                var n = a(s.shift());
                var o = s.join("=");
                if (q && q === n) {
                    k = b(o);
                    break
                }
                if (!q && (o = b(o)) !== undefined) {
                    k[n] = o
                }
            }
            return k
        }, remove: function (l, k) {
            if (this.get(l) === undefined) {
                return false
            }
            k = (typeof k == "object" && k !== null) ? k : {};
            k.expires = -1;
            this.set(l, "", k)
        }
    };

    function j(k) {
        return encodeURIComponent(k)
    }

    function a(k) {
        return decodeURIComponent(k)
    }

    function c(k) {
        if (k.indexOf('"') === 0) {
            k = k.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            k = decodeURIComponent(k.replace(g, " "));
            return k
        } catch (l) {
        }
    }

    function b(k) {
        var l = c(k);
        return l
    }

    e.exports = d
});
M.define("ResourceKeeper", function (d) {
    var m = b();
    if (!m) {
        return {isSupport: false}
    }
    var c = [];
    if (window.addEventListener) {
        window.addEventListener("onbeforeunload", l, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onbeforeunload", l)
        }
    }

    function l() {
        M.forEach(c, function (n) {
            n.release()
        })
    }

    var e = d("PageAdmin").uuid, j = "default_resource", h = "__resource_keeper", f = 1000, k = 2000;

    function a(n) {
        n = "" + n;
        n = n || j;
        this.keeping = false;
        this.resourceKeeperStorageKey = h + "_" + n;
        this.keepingRefreshInterval = 0;
        this._initStorageListener();
        c.push(this)
    }

    M.mix(a.prototype, {
        keep: function () {
            this._requestKeep();
            return this.keeping
        }, forceKeep: function (n) {
            this._startKeep(n)
        }, release: function () {
            if (this.keeping) {
                var n = +new Date(), o = g(this.resourceKeeperStorageKey);
                if (o.currentKeeperPageUUID == e && o.expire > n) {
                    m.remove(this.resourceKeeperStorageKey);
                    this._setKeeping(false)
                }
            }
        }, _initStorageListener: function () {
            M.Event(m).on("resource_keeper_change", M.bind(function (n) {
                if (this.keeping && n.key == this.resourceKeeperStorageKey && n.pageUUID && n.pageUUID != e) {
                    this._setKeeping(false)
                }
            }, this))
        }, _requestKeep: function () {
            var n = +new Date(), o = g(this.resourceKeeperStorageKey);
            if (!o.currentKeeperPageUUID || o.currentKeeperPageUUID == e || o.expire <= n) {
                this._startKeep(n)
            } else {
                this._setKeeping(false)
            }
        }, _startKeep: function (n) {
            n = n || +new Date();
            var o = n + k;
            m.set(this.resourceKeeperStorageKey, e + ":" + o);
            this._setKeeping(true)
        }, _setKeeping: function (n) {
            this.keeping = n;
            if (this.keeping) {
                this._startKeepingRefreshRequest()
            } else {
                this._stopKeepingRefreshRequest()
            }
        }, _startKeepingRefreshRequest: function () {
            clearInterval(this.keepingRefreshInterval);
            this.keepingRefreshInterval = setInterval(M.bind(this._requestKeep, this), f)
        }, _stopKeepingRefreshRequest: function () {
            clearInterval(this.keepingRefreshInterval)
        }
    });

    function b() {
        var o = null, p = d("Storage");
        if (p && p.isSupport) {
            o = {set: M.bind(p.setItem, p), get: M.bind(p.getItem, p), remove: M.bind(p.removeItem, p)};
            if (window.addEventListener) {
                window.addEventListener("storage", function (r) {
                    var q = r.key;
                    if (q.indexOf(h) === 0) {
                        var t = "";
                        if (r.newValue) {
                            var s = r.newValue.split(":");
                            if (s.length == 2) {
                                t = s[0]
                            }
                        }
                        M.Event(o).fire("resource_keeper_change", {key: q, pageUUID: t})
                    }
                }, false)
            }
        } else {
            var n = d("Cookie");
            if (n && n.isSupport) {
                o = {
                    set: function (q, r) {
                        return n.set(q, r, k)
                    }, get: M.bind(n.get, n), remove: M.bind(n.remove, n)
                }
            }
        }
        return o
    }

    function g(p) {
        var o = {currentKeeperPageUUID: "", expire: 0}, n = m.get(p);
        if (n) {
            n = n.split(":");
            o.currentKeeperPageUUID = n[0];
            o.expire = +n[1]
        }
        return o
    }

    function i(o) {
        var n = new a(o);
        return {keep: M.bind(n.keep, n), forceKeep: M.bind(n.forceKeep, n), release: M.bind(n.release, n)}
    }

    i.isSupport = true;
    return i
});
(function (a) {
    a.jGrowl = function (b, c) {
        if (a("#jGrowl").size() == 0) {
            a('<div id="jGrowl"></div>').addClass((c && c.position) ? c.position : a.jGrowl.defaults.position).appendTo("body")
        }
        a("#jGrowl").jGrowl(b, c)
    };
    a.fn.jGrowl = function (b, d) {
        if (a.isFunction(this.each)) {
            var c = arguments;
            return this.each(function () {
                var e = this;
                if (a(this).data("jGrowl.instance") == undefined) {
                    a(this).data("jGrowl.instance", a.extend(new a.fn.jGrowl(), {
                        notifications: [],
                        element: null,
                        interval: null
                    }));
                    a(this).data("jGrowl.instance").startup(this)
                }
                if (a.isFunction(a(this).data("jGrowl.instance")[b])) {
                    a(this).data("jGrowl.instance")[b].apply(a(this).data("jGrowl.instance"), a.makeArray(c).slice(1))
                } else {
                    a(this).data("jGrowl.instance").create(b, d)
                }
            })
        }
    };
    a.extend(a.fn.jGrowl.prototype, {
        defaults: {
            pool: 0,
            header: "",
            group: "",
            sticky: false,
            position: "top-right",
            glue: "after",
            theme: "default",
            themeState: "highlight",
            corners: "10px",
            check: 250,
            life: 3000,
            closeDuration: "normal",
            openDuration: "normal",
            easing: "swing",
            closer: true,
            closeTemplate: "&times;",
            closerTemplate: "<div>[ 关闭 ]</div>",
            log: function (c, b, d) {
            },
            beforeOpen: function (c, b, d) {
            },
            afterOpen: function (c, b, d) {
            },
            open: function (c, b, d) {
            },
            beforeClose: function (c, b, d) {
            },
            close: function (c, b, d) {
            },
            animateOpen: {opacity: "show"},
            animateClose: {opacity: "hide"}
        }, notifications: [], element: null, interval: null, create: function (b, c) {
            var c = a.extend({}, this.defaults, c);
            if (typeof c.speed !== "undefined") {
                c.openDuration = c.speed;
                c.closeDuration = c.speed
            }
            this.notifications.push({message: b, options: c});
            c.log.apply(this.element, [this.element, b, c])
        }, render: function (d) {
            var b = this;
            var c = d.message;
            var e = d.options;
            var d = a('<div class="jGrowl-notification ' + e.themeState + " ui-corner-all" + ((e.group != undefined && e.group != "") ? " " + e.group : "") + '"><div class="jGrowl-close">' + e.closeTemplate + '</div><div class="jGrowl-header">' + e.header + '</div><div class="jGrowl-message">' + c + "</div></div>").data("jGrowl", e).addClass(e.theme).children("div.jGrowl-close").bind("click.jGrowl", function () {
                a(this).parent().trigger("jGrowl.close")
            }).parent();
            a(d).bind("mouseover.jGrowl", function () {
                a("div.jGrowl-notification", b.element).data("jGrowl.pause", true)
            }).bind("mouseout.jGrowl", function () {
                a("div.jGrowl-notification", b.element).data("jGrowl.pause", false)
            }).bind("jGrowl.beforeOpen", function () {
                if (e.beforeOpen.apply(d, [d, c, e, b.element]) != false) {
                    a(this).trigger("jGrowl.open")
                }
            }).bind("jGrowl.open", function () {
                if (e.open.apply(d, [d, c, e, b.element]) != false) {
                    if (e.glue == "after") {
                        a("div.jGrowl-notification:last", b.element).after(d)
                    } else {
                        a("div.jGrowl-notification:first", b.element).before(d)
                    }
                    a(this).animate(e.animateOpen, e.openDuration, e.easing, function () {
                        if (a.browser.msie && (parseInt(a(this).css("opacity"), 10) === 1 || parseInt(a(this).css("opacity"), 10) === 0)) {
                            this.style.removeAttribute("filter")
                        }
                        a(this).data("jGrowl").created = new Date();
                        a(this).trigger("jGrowl.afterOpen")
                    })
                }
            }).bind("jGrowl.afterOpen", function () {
                e.afterOpen.apply(d, [d, c, e, b.element])
            }).bind("jGrowl.beforeClose", function () {
                if (e.beforeClose.apply(d, [d, c, e, b.element]) != false) {
                    a(this).trigger("jGrowl.close")
                }
            }).bind("jGrowl.close", function () {
                a(this).data("jGrowl.pause", true);
                a(this).animate(e.animateClose, e.closeDuration, e.easing, function () {
                    a(this).remove();
                    var f = e.close.apply(d, [d, c, e, b.element]);
                    if (a.isFunction(f)) {
                        f.apply(d, [d, c, e, b.element])
                    }
                })
            }).trigger("jGrowl.beforeOpen");
            if (e.corners != "" && a.fn.corner != undefined) {
                a(d).corner(e.corners)
            }
            if (a("div.jGrowl-notification:parent", b.element).size() > 1 && a("div.jGrowl-closer", b.element).size() == 0 && this.defaults.closer != false) {
                a(this.defaults.closerTemplate).addClass("jGrowl-closer ui-state-highlight ui-corner-all").addClass(this.defaults.theme).appendTo(b.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing).bind("click.jGrowl", function () {
                    a(this).siblings().trigger("jGrowl.beforeClose");
                    if (a.isFunction(b.defaults.closer)) {
                        b.defaults.closer.apply(a(this).parent()[0], [a(this).parent()[0]])
                    }
                })
            }
        }, update: function () {
            a(this.element).find("div.jGrowl-notification:parent").each(function () {
                if (a(this).data("jGrowl") != undefined && a(this).data("jGrowl").created != undefined && (a(this).data("jGrowl").created.getTime() + parseInt(a(this).data("jGrowl").life)) < (new Date()).getTime() && a(this).data("jGrowl").sticky != true && (a(this).data("jGrowl.pause") == undefined || a(this).data("jGrowl.pause") != true)) {
                    a(this).trigger("jGrowl.beforeClose")
                }
            });
            if (this.notifications.length > 0 && (this.defaults.pool == 0 || a(this.element).find("div.jGrowl-notification:parent").size() < this.defaults.pool)) {
                this.render(this.notifications.shift())
            }
            if (a(this.element).find("div.jGrowl-notification:parent").size() < 2) {
                a(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function () {
                    a(this).remove()
                })
            }
        }, startup: function (b) {
            this.element = a(b).addClass("jGrowl").append('<div class="jGrowl-notification"></div>');
            this.interval = setInterval(function () {
                a(b).data("jGrowl.instance").update()
            }, parseInt(this.defaults.check));
            if (a.browser.msie && parseInt(a.browser.version) < 7 && !window.XMLHttpRequest) {
                a(this.element).addClass("ie6")
            }
        }, shutdown: function () {
            a(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove();
            clearInterval(this.interval)
        }, close: function () {
            a(this.element).find("div.jGrowl-notification").each(function () {
                a(this).trigger("jGrowl.beforeClose")
            })
        }
    });
    a.jGrowl.defaults = a.fn.jGrowl.prototype.defaults
})(jQuery);
if (window.M && typeof window.M.define == "function") {
    window.M.define("jq-jgrowl", function () {
        return jQuery
    })
}
M.closure(function (e) {
    var j = e("ResourceKeeper"), t = j.isSupport ? new j("new_msg_loop") : null, s = e("Storage"), b = 1000, r = 10000,
        u = 40000, d = 120000;
    var v = (function () {
        if (j.isSupport) {
            return $.proxy(t.keep, t)
        } else {
            return function () {
                return M.windowFocused
            }
        }
    }());
    var k = function () {
        if (j.isSupport) {
            t.forceKeep()
        }
    };
    if ("addEventListener" in window) {
        window.addEventListener("focus", k, false)
    } else {
        if ("attachEvent" in document) {
            document.attachEvent("onfocusin", k)
        }
    }
    $(function () {
        if (window.Env && window.Env.UID > 0 || window.__mfw_uid > 0) {
            setTimeout(n, b)
        } else {
            setTimeout(l, r)
        }
        $("body").delegate(".jGrowl-closer", "click", function (x) {
            $.getJSON("/ajax/ajax_msg.php", {a: "closetip"});
            s.setItem("jgrowl_close_time", +new Date())
        });
        M.Event.on("update msg", function () {
            setTimeout(function () {
                w();
                s.setItem("update_msg", +new Date())
            }, 1)
        });
        s.on("update_msg", function (x) {
            w()
        });

        function w() {
            if (window.Env && window.Env.UID > 0 || window.__mfw_uid > 0) {
                p("msgdisplay")
            } else {
                p("nologinfeed")
            }
        }
    });

    function n() {
        setInterval(function () {
            v() && p("msgdisplay")
        }, u)
    }

    function l() {
        var x, w = 1;
        v() && p("nologinfeed");
        x = setInterval(function () {
            v() && p("nologinfeed");
            w++;
            if (w == 3) {
                clearInterval(x)
            }
        }, d)
    }

    function p(w) {
        $.get("/ajax/ajax_msg.php?a=" + w, function (x) {
            if (x) {
                o(x)
            }
        }, "json")
    }

    function o(w) {
        g();
        M.Event.fire("get new msg", w);
        if (w.msg) {
            m()
        }
        if (w.tips && !i()) {
            a(w)
        }
    }

    e("jq-jgrowl");

    function a(w) {
        var x = w.tips.split(w.split_char);
        M.forEach(x, function (z, y) {
            if (z) {
                setTimeout(function () {
                    $.jGrowl(z, {header: "新鲜事：", closer: false, life: 20000})
                }, 2000 * y + 10)
            }
        })
    }

    function i() {
        var x = s.getItem("jgrowl_close_time"), w = +new Date();
        if (x && w - x < 24 * 60 * 60 * 1000) {
            return true
        }
        return false
    }

    var c, f = 0, h = 1000, q = document.title;

    function m() {
        g();
        c = setInterval(function () {
            if (v()) {
                f++;
                document.title = f % 2 === 0 ? "【　　　】 - " + q : "【新消息】 - " + q
            } else {
                document.title = q
            }
        }, h)
    }

    function g() {
        clearInterval(c);
        document.title = q
    }
});
M.define("dialog/Layer", function (a) {
    var g = 0, f = 550, d = (function () {
        return $.browser && $.browser.msie && parseInt($.browser.version, 10) == 7
    }()), c = (function () {
        return $.browser && $.browser.msie && parseInt($.browser.version, 10) < 7
    }());

    function b() {
        return g++
    }

    function e(h) {
        this.opacity = 0.8;
        this.background = "#fff";
        this.impl = "Dialog";
        this.fixed = true;
        M.mix(this, h);
        this.id = "_j_layer_" + b();
        this.stacks = [];
        this.activeStackId = null;
        this.overflow = false;
        this.changeFixed = false;
        e.instances[this.id] = this;
        if (!e[this.impl]) {
            e[this.impl] = []
        }
        e[this.impl].push(this.id);
        this.init()
    }

    e.prototype = {
        init: function () {
            this._createPanel()
        }, _createPanel: function () {
            f++;
            var h = {
                position: (!c && this.fixed) ? "fixed" : "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0
            }, j = M.mix({}, h, {"z-index": f, display: "none"}), k = M.mix({}, h, {
                position: !c ? "fixed" : "absolute",
                background: this.background,
                opacity: this.opacity,
                "z-index": -1
            }), i = M.mix({}, h, {"z-index": 0}, (!c && this.fixed) ? {
                "overflow-x": "hidden",
                "overflow-y": "hidden"
            } : {overflow: "visible"});
            this._panel = $('<div id="' + this.id + '" class="layer _j_layer">                                <div class="layer_mask _j_mask"></div>                                <div class="layer_content _j_content"></div>                            </div>').css(j).appendTo("body");
            this._mask = this._panel.children("._j_mask").css(k);
            this._content = this._panel.children("._j_content").css(i)
        }, setZIndex: function (h) {
            f = h;
            this._panel.css("z-index", f)
        }, getZIndex: function () {
            return +this._panel.css("z-index")
        }, toFront: function () {
            this.setZIndex(f + 1)
        }, setFixed: function (h) {
            h = !!h;
            if (this.fixed != h) {
                this.changeFixed = true;
                this.fixed = h;
                if (!c && this.fixed) {
                    this._panel.css("position", "fixed");
                    this._content.css({position: "fixed", "overflow-x": "hidden", "overflow-y": "hidden"})
                } else {
                    this._panel.css("position", "absolute");
                    this._content.css({position: "absolute", "overflow-x": "", "overflow-y": "", overflow: "visible"})
                }
            } else {
                this.changeFixed = false
            }
        }, newStack: function (i) {
            var h = $(i).appendTo(this._content);
            this.stacks.push(h);
            return this.stacks.length - 1
        }, getStack: function (h) {
            return this.stacks[h]
        }, getActiveStack: function () {
            return this.stacks[this.activeStackId]
        }, setActiveStack: function (h) {
            this.activeStackId = h
        }, getPanel: function () {
            return this._panel
        }, getMask: function () {
            return this._mask
        }, getContent: function () {
            return this._content
        }, show: function (j) {
            var i = this;
            if (this.visible) {
                typeof j === "function" && j();
                return
            }
            e.activeId = this.id;
            this.visible = true;
            if (c) {
                var h = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;
                this._panel.css("height", h);
                this._mask.css("height", h)
            }
            this._panel.fadeIn(200, function () {
                typeof j === "function" && j()
            })
        }, hide: function (i) {
            var h = this;
            if (!this.visible) {
                typeof i === "function" && i();
                return
            }
            this.visible = false;
            if (c) {
                this._panel.css("height", "");
                this._mask.css("height", "")
            }
            this._panel.fadeOut(200, function () {
                typeof i === "function" && i();
                h._recoverTopScroller()
            })
        }, setOverFlow: function (h) {
            this.overflow = h;
            if (h) {
                if (!c && this.fixed) {
                    this._hideTopScroller();
                    this._content.css("overflow-y", "auto")
                }
            } else {
                if (!c && this.fixed) {
                    this._content.css("overflow-y", "hidden")
                }
            }
        }, _hideTopScroller: function () {
            if (d) {
                $("html").css("overflow", "hidden")
            } else {
                if (!c) {
                    $("body").css("overflow", "hidden")
                } else {
                    $("body").css("overflow-x", "hidden");
                    this._panel.height($(document).height() + 20)
                }
            }
        }, _recoverTopScroller: function () {
            if (d) {
                $("html").css("overflow", "")
            } else {
                if (!c) {
                    $("body").css("overflow", "")
                } else {
                    $("body").css("overflow-x", "")
                }
            }
        }, destroy: function () {
            this.hide($.proxy(function () {
                this._panel && this._panel.remove();
                this._panel = null;
                if (M.indexOf(e[this.impl], this.id) != -1) {
                    e[this.impl].splice(M.indexOf(e[this.impl], this.id), 1)
                }
                delete e.instances[this.id]
            }, this))
        }, clear: function () {
            this._content.empty();
            this.stacks = [];
            this.activeStackId = null
        }
    };
    e.instances = {};
    e.activeId = null;
    e.getInstance = function (h) {
        return e.instances[h]
    };
    e.getActive = function (h) {
        var i = e.getInstance(e.activeId);
        if (h && i) {
            i = i.impl === h ? i : null
        }
        return i
    };
    e.getImplInstance = function (i) {
        var h = e.getActive(i);
        if (!h && M.is(e[i], "Array") && e[i].length) {
            h = e.getInstance(e[i][e[i].length - 1])
        }
        return h
    };
    e.closeActive = function () {
        var h = e.getActive();
        if (h && h.getActiveStack()) {
            h.getActiveStack().trigger("close")
        }
    };
    $(document).keyup(function (h) {
        if (h.keyCode == 27) {
            e.closeActive()
        }
    });
    $(document).unload(function () {
        M.forEach(e.instances, function () {
            e.destroy()
        })
    });
    return e
});
M.define("dialog/DialogBase", function (b) {
    var e = b("dialog/Layer"), a = M.Event, d = (function () {
        return $.browser && $.browser.msie && parseInt($.browser.version, 10) < 7
    }());

    function c(f) {
        this.newLayer = false;
        this.width = "";
        this.height = "";
        this.background = "#000";
        this.panelBackground = "#fff";
        this.bgOpacity = 0.7;
        this.stackable = true;
        this.fixed = true;
        this.reposition = false;
        this.autoPosition = true;
        this.minTopOffset = 20;
        this.layerZIndex = -1;
        this.impl = "Dialog";
        M.mix(this, f);
        this.visible = false;
        this.destroyed = false;
        this.positioned = false;
        this.resizeTimer = 0;
        this.init()
    }

    c.prototype = {
        tpl: "<div />", init: function () {
            this._createDialog();
            this._bindEvents()
        }, _createDialog: function () {
            this._panel = $(this.tpl).css({
                position: "absolute",
                opacity: 0,
                display: "none",
                background: this.panelBackground,
                "z-index": 0
            });
            this.setRect({width: this.width, height: this.height});
            this._layer = !this.newLayer && e.getImplInstance(this.impl) || new e({impl: this.impl});
            if (this.layerZIndex >= 0) {
                this._layer.setZIndex(this.layerZIndex)
            }
            this._layer.setFixed(this.fixed);
            this._layer.getMask().css({background: this.background, opacity: this.bgOpacity});
            this._stackId = this._layer.newStack(this._panel);
            this.setPanelContent()
        }, _bindEvents: function () {
            var f = this;
            $(window).resize($.proxy(this.resizePosition, this));
            M.Event(this).on("resize", $.proxy(this.resizePosition, this));
            this._panel.delegate("._j_close, a[data-dialog-button]", "click", function (g) {
                var h = $(g.currentTarget).attr("data-dialog-button");
                if (h == "hide") {
                    f.hide()
                } else {
                    f.close()
                }
                g.preventDefault()
            });
            this._panel.bind("close", function (g, h) {
                f.close(h)
            })
        }, resizePosition: function () {
            var f = this;
            clearTimeout(this.resizeTimer);
            if (f.visible && f.autoPosition) {
                this.resizeTimer = setTimeout(function () {
                    f.setPosition()
                }, 100)
            }
        }, addClass: function (f) {
            this._panel.addClass(f)
        }, removeClass: function (f) {
            this._panel.removeClass(f)
        }, setRect: function (f) {
            if (f.width) {
                this._panel.css("width", f.width);
                this.width = f.width
            }
            if (f.height) {
                this._panel.css("height", f.height);
                this.height = f.height
            }
        }, getPanel: function () {
            return this._panel
        }, getLayer: function () {
            return this._layer
        }, getMask: function () {
            return this._layer && this._layer.getMask()
        }, setPanelContent: function () {
        }, _getPanelRect: function () {
            var f = this.getPanel(), g = f.outerHeight(), h = f.outerWidth();
            if (!f.is(":visible")) {
                f.css({visibility: "hidden", display: "block"});
                var g = f.outerHeight(), h = f.outerWidth();
                f.css({visibility: "", display: ""})
            }
            return {height: g, width: h}
        }, _getNumric: function (f) {
            f = parseInt(f, 10);
            return isNaN(f) ? 0 : f
        }, setPosition: function (f) {
            var g = this._getPanelRect(), h = {width: $(window).width(), height: $(window).height()};
            var k = (h.width - (this._getNumric(this.width) > 0 ? this._getNumric(this.width) : g.width)) / 2,
                j = (h.height - (this._getNumric(this.height) > 0 ? this._getNumric(this.height) : g.height)) * 4 / 9;
            j = j < this.minTopOffset ? this.minTopOffset : j;
            if (d || !this.fixed) {
                var i = $(window).scrollTop();
                if (i > 0) {
                    j += i
                }
            }
            f = {left: (f && f.left) || k, top: (f && f.top) || j};
            if (!d && this.fixed) {
                if (h.height - g.height <= f.top) {
                    this.getPanel().addClass("dialog_overflow");
                    this._layer.setOverFlow(true)
                } else {
                    this.getPanel().removeClass("dialog_overflow");
                    this._layer.setOverFlow(false)
                }
            }
            var l = this.positioned ? "animate" : "css";
            $.fn[l].call(this.getPanel(), f, 200);
            this.positioned = true;
            this.position = f
        }, setFixed: function (f) {
            this.fixed = !!f;
            this._layer.setFixed(this.fixed)
        }, getPosition: function () {
            return this.position
        }, show: function (f) {
            if (this.visible) {
                return
            }
            var h = this;
            a(this).fire("beforeshow");
            var g;
            if (this._layer.getActiveStack()) {
                g = this._layer.getActiveStack();
                if (!this.reposition && !f && !this._layer.changeFixed) {
                    f = this._layer.getActiveStack().position()
                }
            }
            this._layer.show();
            this.getPanel().css({display: "", "z-index": 1});
            this.setPosition(f);
            g && g.trigger("close", [true]);
            this.visible = true;
            this._layer.setActiveStack(this._stackId);
            this.getPanel().animate({opacity: 1}, {
                queue: false, duration: 200, complete: function () {
                    a(h).fire("aftershow")
                }
            })
        }, close: function () {
            var f = this.stackable ? "hide" : "destroy";
            this[f].apply(this, Array.prototype.slice.call(arguments))
        }, hide: function (g, f) {
            if (typeof g == "function") {
                f = g;
                g = undefined
            }
            if (!this.visible) {
                typeof f == "function" && f();
                return
            }
            a(this).fire("beforeclose");
            a(this).fire("beforehide");
            this._layer.setActiveStack(null);
            this.visible = false;
            if (!g) {
                this._layer.hide()
            }
            this.getPanel().animate({opacity: 0}, {
                queue: false, duration: 200, complete: $.proxy(function () {
                    this.getPanel().css({display: "none", "z-index": 0});
                    a(this).fire("afterhide");
                    a(this).fire("afterclose");
                    typeof f == "function" && f()
                }, this)
            })
        }, destroy: function (g, f) {
            if (typeof g == "function") {
                f = g;
                g = undefined
            }
            if (this.destroyed) {
                M.error("Dialog already destroyed!");
                typeof f == "function" && f();
                return
            }
            a(this).fire("beforeclose");
            a(this).fire("beforedestroy");
            this.destroyed = true;
            this.hide(g, $.proxy(function () {
                if (this._panel.length) {
                    this._panel.undelegate();
                    this._panel.unbind();
                    this._panel.remove();
                    this._panel = null
                }
                this._layer = null;
                a(this).fire("afterdestroy");
                a(this).fire("afterclose");
                typeof f == "function" && f()
            }, this))
        }
    };
    return c
});
M.define("dialog/Dialog", function (c) {
    var d = c("dialog/DialogBase"),
        a = '<div class="popup-box layer_dialog _j_dialog pop_no_margin">                    <div class="dialog_title" style="display:none"><div class="_j_title title"></div></div>                    <div class="dialog_body _j_content"></div>                    <a id="popup_close" class="close-btn _j_close"><i></i></a>                </div>';
    var b = M.extend(function (e) {
        this.content = "";
        this.title = "";
        this.PANEL_CLASS = "";
        this.MASK_CLASS = "";
        b.$parent.call(this, e)
    }, d);
    M.mix(b.prototype, {
        tpl: a, setPanelContent: function () {
            this._dialogTitle = this._panel.find("._j_title");
            this._dialogContent = this._panel.find("._j_content");
            this.setTitle(this.title);
            this.setContent(this.content);
            this.addClass(this.PANEL_CLASS);
            this.getMask().addClass(this.MASK_CLASS)
        }, setTitle: function (e) {
            if (e) {
                this._dialogTitle.html(e).parent().css("display", "")
            } else {
                this._dialogTitle.parent().css("display", "none")
            }
            this.title = e
        }, getTitle: function () {
            return this.title
        }, setContent: function (e) {
            this._dialogContent.empty().append(e)
        }
    });
    return b
});
M.define("FrequencyVerifyControl", function (c, b, d) {
    function a(e) {
        this.container = e.container;
        this.app = e.app;
        this.successHandler = $.noop;
        M.mix(this, e);
        this.init()
    }

    a.prototype = {
        init: function () {
            this.initData();
            this.refreshImg();
            this.verifyCon.delegate("img,._j_change_img", "click", $.proxy(function (e) {
                this.refreshImg()
            }, this));
            this.verifyCon.delegate("._j_fre_confirm", "click", $.proxy(function (h) {
                var g = this.verifyText.val();
                var f = g.length;
                if (f == 0) {
                    this.showErro("您还没有输入验证码!");
                    return false
                } else {
                    if (f !== 6) {
                        this.showErro("请输入正确的验证码!");
                        return false
                    }
                }
                var e = $(h.currentTarget);
                if (e.hasClass("waiting")) {
                    return false
                }
                e.addClass("waiting");
                $.post("/user/captcha/verify", {sCode: g, iApp: this.app}, $.proxy(function (i) {
                    if (i) {
                        if (i.ret === 1) {
                            this.successHandler(this.target);
                            this.verifyCon.hide();
                            this.hideErro()
                        } else {
                            if (i.ret === 0) {
                                this.verifyText.val("");
                                this.verifyText.focus();
                                this.refreshImg();
                                this.showErro("输入的验证码不正确!")
                            } else {
                                if (i.ret === -1) {
                                    this.showErro("错误次数过多，请稍候尝试")
                                }
                            }
                        }
                    }
                    e.removeClass("waiting")
                }, this), "json")
            }, this));
            this.verifyCon.delegate("._j_fre_text", "keyup", $.proxy(function (e) {
                if (e.keyCode == 13) {
                    this.verifyCon.find("._j_fre_confirm").trigger("click")
                }
            }, this))
        }, showErro: function (e) {
            this.errorCon.html(e);
            this.errorCon.show()
        }, hideErro: function () {
            this.errorCon.hide()
        }, initData: function () {
            this.verifyCon = this.container;
            this.verifyPo = this.verifyCon.find(".protectedYZM");
            this.verifyImg = this.verifyCon.find("img");
            this.verifyText = this.verifyCon.find("._j_fre_text");
            this.errorCon = this.verifyPo.find(".n-error")
        }, refreshImg: function () {
            var e = "/user/captcha/code?iApp=" + this.app + "&s=" + new Date().getTime();
            this.verifyImg.attr("src", e)
        }
    };
    d.exports = a
});
M.define("FrequencySystemVerify", function (f, e, g) {
    var b = f("dialog/Dialog"), h = f("dialog/Layer"), d = f("FrequencyVerifyControl");
    var a = '<div class="popYzm" style="z-index:inherit;position: relative;width:350px;height: 250px"><div class="protectedYZM" style="border: none;box-shadow: none;padding:25px 15px;"><p>亲爱的蜂蜂，你操作的速度有点像机器人<br>来证明下自己吧~</p><div class="YZMInput"><input class="_j_fre_text" type="text" placeHolder="验证码"></div><div class="YZMInput"><img src="http://images.mafengwo.net/images/home_new2015/verify.gif" width="150px" height="40px"><label><a href="javascript:void(0);" class="_j_change_img">看不清，换一张</a></label></div><div class="YZMSubmit"><a href="javascript:void(0);" class="_j_fre_confirm" title="确定">确定</a><span class="n-error">错误次数过多，请稍候尝试</span></div></div></div>';

    function c(i) {
        this.app = i.app;
        this.init()
    }

    c.prototype = {
        init: function () {
            var i = new b({content: a});
            if (h.getActive()) {
                i.getLayer().setZIndex(h.getActive().getZIndex() + 1)
            }
            i.show();
            var j = i.getPanel().find(".popYzm");
            new d({
                container: j, app: this.app, successHandler: $.proxy(function () {
                    M.Event.fire("frequency:system:verify:success");
                    i.close()
                }, this)
            })
        }
    };
    g.exports = c
});
M.closure(function (d) {
    var b = d("dialog/Dialog"), c = d("FrequencySystemVerify");
    window.show_login = a;
    $.ajaxSetup({
        dataFilter: function (h, g) {
            try {
                var j = $.parseJSON(h);
                if (j && j.unsafe == 1) {
                    window.location.href = "http://www.mafengwo.cn";
                    return "{}"
                }
                if (j && j.error && j.error.msg == "login:required") {
                    M.Event.fire("login:required");
                    return "{}"
                }
                if (j && j.resource && j.resource.onload && j.resource.onload.length) {
                    if (j.resource.onload[0] == 'K.fire("login:required");') {
                        M.Event.fire("login:required");
                        return "{}"
                    }
                }
                if (j && j.error) {
                    var f = 0;
                    var k = 0;
                    if (typeof(j.error.errno) !== "undefined") {
                        f = j.error.errno;
                        k = j.error.error
                    } else {
                        if (typeof(j.error.code) !== "undefined") {
                            f = j.error.code;
                            k = j.error.msg
                        }
                    }
                    if (f === 10000) {
                        M.Event.fire("frequency:verify", k);
                        return "{}"
                    }
                }
            } catch (i) {
            }
            return h
        }
    });
    var e = null;

    function a() {
        if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
            document.location.href = (window.Env && window.Env.P_HTTP) || "https://passport.mafengwo.cn";
            return
        }
        if (!e) {
            e = new b({
                PANEL_CLASS: "login_pop",
                content: '<iframe frameborder="no" border="0" scrolling="no" width="580" height="292" allowtransparency="true"></iframe>',
                background: "#aaa",
                bgOpacity: 0.6,
                reposition: true,
                impl: "logindialog"
            })
        }
        e.show();
        if (!e.getPanel().find("iframe").attr("src")) {
            M.Event(e).once("aftershow", function () {
                var f = window.Env.P_HTTP || "https://passport.mafengwo.cn";
                e.getPanel().find("iframe").attr("src", f + "/login-popup.html")
            })
        }
    }

    M.Event.on("login:required", a);
    M.Event.on("frequency:verify", function (f) {
        new c({app: f})
    });
    if (M.Event.isFired("login:required")) {
        a()
    }
});
M.define("ScrollObserver", function (e, g, c) {
    var h = 0, f = {}, a = false, b, d = true;
    g.addObserver = function (k) {
        var j = "ScrollObserver_" + h;
        h++;
        f[j] = k;
        d = false;
        return j
    };
    g.removeObserver = function (j) {
        delete f[j];
        if (M.isEmpty(f)) {
            d = true
        }
    };

    function i() {
        for (var j in f) {
            if (f.hasOwnProperty(j)) {
                f[j]()
            }
        }
    }

    $(window).scroll(function () {
        if (d) {
            return
        }
        if (!a) {
            b = setInterval(function () {
                if (a) {
                    a = false;
                    clearTimeout(b);
                    i()
                }
            }, 50)
        }
        a = true
    });
    return g
});
M.define("QRCode", function (b, a, c) {
    c.exports = {
        gen: function (e, d) {
            var d = {
                text: e,
                size: d.size || 200,
                eclevel: d.evlevel || "H",
                logo: d.logo || "",
                __stk__: window.Env.CSTK
            };
            return "http://" + window.Env.WWW_HOST + "/qrcode.php?" + $.param(d)
        }
    }
});
M.closure(function (b) {
    var l = b("ScrollObserver"), m = b("Storage"), d = window.Env || {}, f = $("#_j_mfwtoolbar"), h = f.height(),
        a = $(window).height(), k = $(document).height(), g = $("#footer"), e = g.outerHeight();
    $("body").css("position", "relative");
    $(window).resize(function () {
        a = $(window).height();
        k = $(document).height()
    });
    setInterval(function () {
        var n = $(document).height();
        if (n != k) {
            k = n;
            $(window).trigger("scroll")
        }
    }, 2000);
    if (!d.hideToolbar) {
        if (!d.showToolbarDownArrow) {
            f.children(".toolbar-item-down").remove()
        } else {
            f.children(".toolbar-item-down").show()
        }
        f.show();
        c();
        l.addObserver(c);
        f.on("click", "._j_gotop", i);
        f.on("click", "._j_gobottom", j);
        f.children(".toolbar-item-code").mouseenter(function () {
            $(this).addClass("hover")
        });
        f.children(".toolbar-item-code").mouseleave(function () {
            $(this).removeClass("hover")
        })
    }

    function c() {
        var n = $(window).scrollTop();
        if (n > 500) {
            f.children(".toolbar-item-top").show()
        } else {
            f.children(".toolbar-item-top").hide()
        }
        if (g.length) {
            if (n + a > g.offset().top) {
                f.css({position: "absolute", bottom: e + 20})
            } else {
                f.css({position: "", bottom: ""})
            }
        }
    }

    function i() {
        $("html, body").animate({scrollTop: 0}, 500, function () {
            M.Event.fire("scroll to top")
        })
    }

    function j() {
        $("html, body").animate({scrollTop: k - a}, 500, function () {
            M.Event.fire("scroll to bottom")
        })
    }
});
(function () {
    var a = document.createElement("script"), b = window.Env && window.Env.CNZZID || 30065558;
    a.type = "text/javascript";
    a.async = true;
    a.charset = "utf-8";
    a.src = document.location.protocol + "//w.cnzz.com/c.php?id=" + b + "&async=1";
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(a, c)
})();
M.closure(function (a) {
    M.log("只要你有梦想，就加入我们\n你即将见证互联网最新趋势的快速成长\n蚂蜂窝的一切资源都会成为你成长路上的最大助力\n你可以和蚂蜂窝一起书写互联网的风云奇迹\n在这里有一群和你一样，疯狂地热爱互联网和旅行的人们\n蚂蜂窝能为你实现梦想提供最广阔的平台");
    M.log("请将简历发送至 %csuperhr@mafengwo.com%c（ 邮件标题请以“_console”结尾）", "color:#4ae;", "color:inherit;");
    M.log("职位介绍：http://www.mafengwo.cn/s/hr.html")
});
M.closure(function (a) {
    $.get("/ajax/ajax_page_onload.php", {href: document.location.href, _t: +new Date()}, function (b) {
        if (b.payload && b.payload.apps) {
            var c = b.payload.apps;
            if (!M.isEmpty(c)) {
                var d = {css_list: c.css || []};
                M.loadCssJsListSeq(d, function () {
                    if (c.html) {
                        $("body").append(c.html)
                    }
                    if (c.js && c.js.length) {
                        M.loadResource(c.js)
                    }
                })
            }
        }
    }, "json")
});
(function () {
    var t, e, k, s, R, N, y, Z, f, i, o, J, w, E, ad, h, v, j, ab, Y, p, H, B, K, d, W, z, U, ac, n, A, ag, a, X, C, L,
        I, u, g, V, c, D, r, Q, F, q, O, P, T, G, m, S, aa, b, af, ae, x, l = function (ah, ai) {
            return function () {
                return ah.apply(ai, arguments)
            }
        };
    n = function () {
        return document.visibilityState === "visible" || (z.tests != null)
    };
    C = (function () {
        var ah;
        ah = [];
        if (typeof document !== "undefined" && document !== null) {
            document.addEventListener("visibilitychange", function () {
                var ak, al, aj, ai;
                ai = [];
                for (al = 0, aj = ah.length; al < aj; al++) {
                    ak = ah[al];
                    ai.push(ak(n()))
                }
                return ai
            })
        }
        return function (ai) {
            return ah.push(ai)
        }
    })();
    B = function (ak) {
        var ai, aj, ah;
        aj = {};
        for (ai in ak) {
            ah = ak[ai];
            aj[ai] = ah
        }
        return aj
    };
    p = function (ah) {
        var ai;
        ai = {};
        return function () {
            var al, am, aj, an, ak;
            am = "";
            for (an = 0, ak = arguments.length; an < ak; an++) {
                al = arguments[an];
                am += al.toString() + ","
            }
            aj = ai[am];
            if (!aj) {
                ai[am] = aj = ah.apply(this, arguments)
            }
            return aj
        }
    };
    X = function (ah) {
        return function (al) {
            var ai, ak, aj;
            if (al instanceof Array || al instanceof NodeList || al instanceof HTMLCollection) {
                aj = (function () {
                    var ao, an, am;
                    am = [];
                    for (ak = ao = 0, an = al.length; 0 <= an ? ao < an : ao > an; ak = 0 <= an ? ++ao : --ao) {
                        ai = Array.prototype.slice.call(arguments, 1);
                        ai.splice(0, 0, al[ak]);
                        am.push(ah.apply(this, ai))
                    }
                    return am
                }).apply(this, arguments);
                return aj
            }
            return ah.apply(this, arguments)
        }
    };
    v = function (ak, al) {
        var aj, ai, ah;
        ah = [];
        for (aj in al) {
            ai = al[aj];
            ah.push(ak[aj] != null ? ak[aj] : ak[aj] = ai)
        }
        return ah
    };
    j = function (al, ak) {
        var aj, ai, ah;
        if ((al.style != null)) {
            return ab(al, ak)
        } else {
            ah = [];
            for (aj in ak) {
                ai = ak[aj];
                ah.push(al[aj] = ai.format())
            }
            return ah
        }
    };
    ab = function (am, ak) {
        var an, aj, ai, al, ah;
        ak = L(ak);
        al = [];
        an = A(am);
        for (aj in ak) {
            ah = ak[aj];
            if (af.contains(aj)) {
                al.push([aj, ah])
            } else {
                if (ah.format != null) {
                    ah = ah.format()
                }
                if (typeof ah === "number") {
                    ah = "" + ah + (x(aj, ah))
                }
                if (an && G.contains(aj)) {
                    am.setAttribute(aj, ah)
                } else {
                    am.style[u(aj)] = ah
                }
            }
        }
        if (al.length > 0) {
            if (an) {
                ai = new i();
                ai.applyProperties(al);
                return am.setAttribute("transform", ai.decompose().format())
            } else {
                ah = (al.map(function (ao) {
                    return ae(ao[0], ao[1])
                })).join(" ");
                return am.style[u("transform")] = ah
            }
        }
    };
    A = function (ai) {
        var aj, ah;
        if ((typeof SVGElement !== "undefined" && SVGElement !== null) && (typeof SVGSVGElement !== "undefined" && SVGSVGElement !== null)) {
            return ai instanceof SVGElement && !(ai instanceof SVGSVGElement)
        } else {
            return (aj = (ah = z.tests) != null ? typeof ah.isSVG === "function" ? ah.isSVG(ai) : void 0 : void 0) != null ? aj : false
        }
    };
    c = function (ai, ah) {
        var aj;
        aj = Math.pow(10, ah);
        return Math.round(ai * aj) / aj
    };
    o = (function () {
        function ah(al) {
            var aj, ak, ai;
            this.obj = {};
            for (ak = 0, ai = al.length; ak < ai; ak++) {
                aj = al[ak];
                this.obj[aj] = 1
            }
        }

        ah.prototype.contains = function (ai) {
            return this.obj[ai] === 1
        };
        return ah
    })();
    b = function (ah) {
        return ah.replace(/([A-Z])/g, function (ai) {
            return "-" + ai.toLowerCase()
        })
    };
    g = new o("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(","));
    W = new o("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(","));
    af = new o("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(","));
    G = new o("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(","));
    x = function (ai, ah) {
        if (typeof ah !== "number") {
            return ""
        }
        if (g.contains(ai)) {
            return "px"
        } else {
            if (W.contains(ai)) {
                return "deg"
            }
        }
        return ""
    };
    ae = function (ai, ah) {
        var aj, ak;
        aj = ("" + ah).match(/^([0-9.-]*)([^0-9]*)$/);
        if (aj != null) {
            ah = aj[1];
            ak = aj[2]
        } else {
            ah = parseFloat(ah)
        }
        ah = c(parseFloat(ah), 10);
        if ((ak == null) || ak === "") {
            ak = x(ai, ah)
        }
        return "" + ai + "(" + ah + ak + ")"
    };
    L = function (al) {
        var ah, ak, am, ap, ao, ai, an, aj;
        am = {};
        for (ap in al) {
            ao = al[ap];
            if (af.contains(ap)) {
                ak = ap.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/);
                if (ak && ak[2].length > 0) {
                    am[ap] = ao
                } else {
                    aj = ["X", "Y", "Z"];
                    for (ai = 0, an = aj.length; ai < an; ai++) {
                        ah = aj[ai];
                        am[ak[1] + ah] = ao
                    }
                }
            } else {
                am[ap] = ao
            }
        }
        return am
    };
    d = function (ai) {
        var ah;
        ah = ai === "opacity" ? 1 : 0;
        return "" + ah + (x(ai, ah))
    };
    U = function (aj, au) {
        var at, aq, ap, an, ah, ar, al, ak, ao, ai, am;
        an = {};
        at = A(aj);
        if (aj.style != null) {
            ah = window.getComputedStyle(aj, null);
            for (al = 0, ao = au.length; al < ao; al++) {
                aq = au[al];
                if (af.contains(aq)) {
                    if (an.transform == null) {
                        if (at) {
                            ap = new i((am = aj.transform.baseVal.consolidate()) != null ? am.matrix : void 0)
                        } else {
                            ap = f.fromTransform(ah[u("transform")])
                        }
                        an.transform = ap.decompose()
                    }
                } else {
                    ar = ah[aq];
                    if ((ar == null) && G.contains(aq)) {
                        ar = aj.getAttribute(aq)
                    }
                    if (ar === "" || (ar == null)) {
                        ar = d(aq)
                    }
                    an[aq] = K(ar)
                }
            }
        } else {
            for (ak = 0, ai = au.length; ak < ai; ak++) {
                aq = au[ak];
                an[aq] = K(aj[aq])
            }
        }
        return an
    };
    K = function (am) {
        var ai, ah, ak, al, aj;
        ak = [s, y, N, Z];
        for (al = 0, aj = ak.length; al < aj; al++) {
            ah = ak[al];
            ai = ah.create(am);
            if (ai != null) {
                return ai
            }
        }
        return null
    };
    Z = (function () {
        function ah(ai) {
            this.parts = ai;
            this.format = l(this.format, this);
            this.interpolate = l(this.interpolate, this)
        }

        ah.prototype.interpolate = function (al, ak) {
            var ai, aj, ao, ap, an, am;
            ap = this.parts;
            ai = al.parts;
            ao = [];
            for (aj = an = 0, am = Math.min(ap.length, ai.length); 0 <= am ? an < am : an > am; aj = 0 <= am ? ++an : --an) {
                if (ap[aj].interpolate != null) {
                    ao.push(ap[aj].interpolate(ai[aj], ak))
                } else {
                    ao.push(ap[aj])
                }
            }
            return new ah(ao)
        };
        ah.prototype.format = function () {
            var ai;
            ai = this.parts.map(function (aj) {
                if (aj.format != null) {
                    return aj.format()
                } else {
                    return aj
                }
            });
            return ai.join("")
        };
        ah.create = function (at) {
            var ap, an, am, al, au, aq, ao, ak, aj, ar, ai;
            at = "" + at;
            am = [];
            ao = [{
                re: /(#[a-f\d]{3,6})/ig, klass: R, parse: function (av) {
                    return av
                }
            }, {
                re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/ig, klass: R, parse: function (av) {
                    return av
                }
            }, {re: /([-+]?[\d.]+)/ig, klass: N, parse: parseFloat}];
            for (ak = 0, ar = ao.length; ak < ar; ak++) {
                aq = ao[ak];
                au = aq.re;
                while (an = au.exec(at)) {
                    am.push({index: an.index, length: an[1].length, interpolable: aq.klass.create(aq.parse(an[1]))})
                }
            }
            am = am.sort(function (aw, av) {
                if (aw.index > av.index) {
                    return 1
                } else {
                    return -1
                }
            });
            al = [];
            ap = 0;
            for (aj = 0, ai = am.length; aj < ai; aj++) {
                an = am[aj];
                if (an.index < ap) {
                    continue
                }
                if (an.index > ap) {
                    al.push(at.substring(ap, an.index))
                }
                al.push(an.interpolable);
                ap = an.index + an.length
            }
            if (ap < at.length) {
                al.push(at.substring(ap))
            }
            return new ah(al)
        };
        return ah
    })();
    y = (function () {
        function ah(ai) {
            this.format = l(this.format, this);
            this.interpolate = l(this.interpolate, this);
            this.obj = ai
        }

        ah.prototype.interpolate = function (an, am) {
            var ai, al, ak, ao, aj;
            ao = this.obj;
            ai = an.obj;
            ak = {};
            for (al in ao) {
                aj = ao[al];
                if (aj.interpolate != null) {
                    ak[al] = aj.interpolate(ai[al], am)
                } else {
                    ak[al] = aj
                }
            }
            return new ah(ak)
        };
        ah.prototype.format = function () {
            return this.obj
        };
        ah.create = function (ak) {
            var aj, al, ai;
            if (ak instanceof Object) {
                al = {};
                for (aj in ak) {
                    ai = ak[aj];
                    al[aj] = K(ai)
                }
                return new ah(al)
            }
            return null
        };
        return ah
    })();
    N = (function () {
        function ah(ai) {
            this.format = l(this.format, this);
            this.interpolate = l(this.interpolate, this);
            this.value = parseFloat(ai)
        }

        ah.prototype.interpolate = function (ak, aj) {
            var ai, al;
            al = this.value;
            ai = ak.value;
            return new ah((ai - al) * aj + al)
        };
        ah.prototype.format = function () {
            return c(this.value, 5)
        };
        ah.create = function (ai) {
            if (typeof ai === "number") {
                return new ah(ai)
            }
            return null
        };
        return ah
    })();
    s = (function () {
        function ah(ai) {
            this.values = ai;
            this.format = l(this.format, this);
            this.interpolate = l(this.interpolate, this)
        }

        ah.prototype.interpolate = function (am, al) {
            var ai, ak, aj, ap, ao, an;
            ap = this.values;
            ai = am.values;
            aj = [];
            for (ak = ao = 0, an = Math.min(ap.length, ai.length); 0 <= an ? ao < an : ao > an; ak = 0 <= an ? ++ao : --ao) {
                if (ap[ak].interpolate != null) {
                    aj.push(ap[ak].interpolate(ai[ak], al))
                } else {
                    aj.push(ap[ak])
                }
            }
            return new ah(aj)
        };
        ah.prototype.format = function () {
            return this.values.map(function (ai) {
                if (ai.format != null) {
                    return ai.format()
                } else {
                    return ai
                }
            })
        };
        ah.createFromArray = function (ai) {
            var aj;
            aj = ai.map(function (ak) {
                return K(ak) || ak
            });
            aj = aj.filter(function (ak) {
                return ak != null
            });
            return new ah(aj)
        };
        ah.create = function (ai) {
            if (ai instanceof Array) {
                return ah.createFromArray(ai)
            }
            return null
        };
        return ah
    })();
    t = (function () {
        function ah(ai, aj) {
            this.rgb = ai != null ? ai : {};
            this.format = aj;
            this.toRgba = l(this.toRgba, this);
            this.toRgb = l(this.toRgb, this);
            this.toHex = l(this.toHex, this)
        }

        ah.fromHex = function (ak) {
            var aj, ai;
            aj = ak.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i);
            if (aj != null) {
                ak = "#" + aj[1] + aj[1] + aj[2] + aj[2] + aj[3] + aj[3]
            }
            ai = ak.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
            if (ai != null) {
                return new ah({r: parseInt(ai[1], 16), g: parseInt(ai[2], 16), b: parseInt(ai[3], 16), a: 1}, "hex")
            }
            return null
        };
        ah.fromRgb = function (aj) {
            var ai, ak;
            ai = aj.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/);
            if (ai != null) {
                return new ah({
                    r: parseFloat(ai[1]),
                    g: parseFloat(ai[2]),
                    b: parseFloat(ai[3]),
                    a: parseFloat((ak = ai[4]) != null ? ak : 1)
                }, ai[4] != null ? "rgba" : "rgb")
            }
            return null
        };
        ah.componentToHex = function (aj) {
            var ai;
            ai = aj.toString(16);
            if (ai.length === 1) {
                return "0" + ai
            } else {
                return ai
            }
        };
        ah.prototype.toHex = function () {
            return "#" + ah.componentToHex(this.rgb.r) + ah.componentToHex(this.rgb.g) + ah.componentToHex(this.rgb.b)
        };
        ah.prototype.toRgb = function () {
            return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")"
        };
        ah.prototype.toRgba = function () {
            return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")"
        };
        return ah
    })();
    R = (function () {
        function ah(ai) {
            this.color = ai;
            this.format = l(this.format, this);
            this.interpolate = l(this.interpolate, this)
        }

        ah.prototype.interpolate = function (ap, ar) {
            var ak, aj, an, ai, aq, al, ao, am;
            ai = this.color;
            ak = ap.color;
            an = {};
            am = ["r", "g", "b"];
            for (al = 0, ao = am.length; al < ao; al++) {
                aj = am[al];
                aq = Math.round((ak.rgb[aj] - ai.rgb[aj]) * ar + ai.rgb[aj]);
                an[aj] = Math.min(255, Math.max(0, aq))
            }
            aj = "a";
            aq = c((ak.rgb[aj] - ai.rgb[aj]) * ar + ai.rgb[aj], 5);
            an[aj] = Math.min(1, Math.max(0, aq));
            return new ah(new t(an, ak.format))
        };
        ah.prototype.format = function () {
            if (this.color.format === "hex") {
                return this.color.toHex()
            } else {
                if (this.color.format === "rgb") {
                    return this.color.toRgb()
                } else {
                    if (this.color.format === "rgba") {
                        return this.color.toRgba()
                    }
                }
            }
        };
        ah.create = function (aj) {
            var ai;
            if (typeof aj !== "string") {
                return
            }
            ai = t.fromHex(aj) || t.fromRgb(aj);
            if (ai != null) {
                return new ah(ai)
            }
            return null
        };
        return ah
    })();
    k = (function () {
        function ah(ai) {
            this.props = ai;
            this.applyRotateCenter = l(this.applyRotateCenter, this);
            this.format = l(this.format, this);
            this.interpolate = l(this.interpolate, this)
        }

        ah.prototype.interpolate = function (ai, av) {
            var at, ap, aw, aq, ao, am, ak, au, aj, ar, an, al;
            aw = {};
            ar = ["translate", "scale", "rotate"];
            for (aq = 0, au = ar.length; aq < au; aq++) {
                ap = ar[aq];
                aw[ap] = [];
                for (at = ao = 0, an = this.props[ap].length; 0 <= an ? ao < an : ao > an; at = 0 <= an ? ++ao : --ao) {
                    aw[ap][at] = (ai.props[ap][at] - this.props[ap][at]) * av + this.props[ap][at]
                }
            }
            for (at = am = 1; am <= 2; at = ++am) {
                aw.rotate[at] = ai.props.rotate[at]
            }
            al = ["skew"];
            for (ak = 0, aj = al.length; ak < aj; ak++) {
                ap = al[ak];
                aw[ap] = (ai.props[ap] - this.props[ap]) * av + this.props[ap]
            }
            return new ah(aw)
        };
        ah.prototype.format = function () {
            return "translate(" + (this.props.translate.join(",")) + ") rotate(" + (this.props.rotate.join(",")) + ") skewX(" + this.props.skew + ") scale(" + (this.props.scale.join(",")) + ")"
        };
        ah.prototype.applyRotateCenter = function (ak) {
            var am, ai, al, an, ao, aj;
            ai = Y.createSVGMatrix();
            ai = ai.translate(ak[0], ak[1]);
            ai = ai.rotate(this.props.rotate[0]);
            ai = ai.translate(-ak[0], -ak[1]);
            al = new i(ai);
            an = al.decompose().props.translate;
            aj = [];
            for (am = ao = 0; ao <= 1; am = ++ao) {
                aj.push(this.props.translate[am] -= an[am])
            }
            return aj
        };
        return ah
    })();
    Y = typeof document !== "undefined" && document !== null ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0;
    i = (function () {
        function ah(ai) {
            this.m = ai;
            this.applyProperties = l(this.applyProperties, this);
            this.decompose = l(this.decompose, this);
            if (!this.m) {
                this.m = Y.createSVGMatrix()
            }
        }

        ah.prototype.decompose = function () {
            var am, al, ak, aj, ai;
            aj = new J([this.m.a, this.m.b]);
            ai = new J([this.m.c, this.m.d]);
            am = aj.length();
            ak = aj.dot(ai);
            aj = aj.normalize();
            al = ai.combine(aj, 1, -ak).length();
            return new k({
                translate: [this.m.e, this.m.f],
                rotate: [Math.atan2(this.m.b, this.m.a) * 180 / Math.PI, this.rotateCX, this.rotateCY],
                scale: [am, al],
                skew: ak / al * 180 / Math.PI
            })
        };
        ah.prototype.applyProperties = function (an) {
            var al, aj, ao, aq, ak, ap, am, ai;
            al = {};
            for (ak = 0, ap = an.length; ak < ap; ak++) {
                ao = an[ak];
                al[ao[0]] = ao[1]
            }
            for (aj in al) {
                aq = al[aj];
                if (aj === "translateX") {
                    this.m = this.m.translate(aq, 0)
                } else {
                    if (aj === "translateY") {
                        this.m = this.m.translate(0, aq)
                    } else {
                        if (aj === "scaleX") {
                            this.m = this.m.scaleNonUniform(aq, 1)
                        } else {
                            if (aj === "scaleY") {
                                this.m = this.m.scaleNonUniform(1, aq)
                            } else {
                                if (aj === "rotateZ") {
                                    this.m = this.m.rotate(aq)
                                } else {
                                    if (aj === "skewX") {
                                        this.m = this.m.skewX(aq)
                                    } else {
                                        if (aj === "skewY") {
                                            this.m = this.m.skewY(aq)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.rotateCX = (am = al.rotateCX) != null ? am : 0;
            return this.rotateCY = (ai = al.rotateCY) != null ? ai : 0
        };
        return ah
    })();
    J = (function () {
        function ah(ai) {
            this.els = ai;
            this.combine = l(this.combine, this);
            this.normalize = l(this.normalize, this);
            this.length = l(this.length, this);
            this.cross = l(this.cross, this);
            this.dot = l(this.dot, this);
            this.e = l(this.e, this)
        }

        ah.prototype.e = function (ai) {
            if (ai < 1 || ai > this.els.length) {
                return null
            } else {
                return this.els[ai - 1]
            }
        };
        ah.prototype.dot = function (aj) {
            var ai, al, ak;
            ai = aj.els || aj;
            ak = 0;
            al = this.els.length;
            if (al !== ai.length) {
                return null
            }
            al += 1;
            while (--al) {
                ak += this.els[al - 1] * ai[al - 1]
            }
            return ak
        };
        ah.prototype.cross = function (aj) {
            var ai, ak;
            ak = aj.els || aj;
            if (this.els.length !== 3 || ak.length !== 3) {
                return null
            }
            ai = this.els;
            return new ah([(ai[1] * ak[2]) - (ai[2] * ak[1]), (ai[2] * ak[0]) - (ai[0] * ak[2]), (ai[0] * ak[1]) - (ai[1] * ak[0])])
        };
        ah.prototype.length = function () {
            var aj, am, al, ai, ak;
            aj = 0;
            ak = this.els;
            for (al = 0, ai = ak.length; al < ai; al++) {
                am = ak[al];
                aj += Math.pow(am, 2)
            }
            return Math.sqrt(aj)
        };
        ah.prototype.normalize = function () {
            var am, aj, ak, ai, al;
            ak = this.length();
            ai = [];
            al = this.els;
            for (aj in al) {
                am = al[aj];
                ai[aj] = am / ak
            }
            return new ah(ai)
        };
        ah.prototype.combine = function (aj, ao, al) {
            var ak, ai, an, am;
            ai = [];
            for (ak = an = 0, am = this.els.length; 0 <= am ? an < am : an > am; ak = 0 <= am ? ++an : --an) {
                ai[ak] = (ao * this.els[ak]) + (al * aj.els[ak])
            }
            return new ah(ai)
        };
        return ah
    })();
    e = (function () {
        function ah() {
            this.toMatrix = l(this.toMatrix, this);
            this.format = l(this.format, this);
            this.interpolate = l(this.interpolate, this)
        }

        ah.prototype.interpolate = function (aB, ar, at) {
            var az, au, aD, ax, ay, av, aw, ap, ao, aC, an, al, ak, aj, ai, aA, aq, am;
            if (at == null) {
                at = null
            }
            aD = this;
            au = new ah;
            aq = ["translate", "scale", "skew", "perspective"];
            for (al = 0, aA = aq.length; al < aA; al++) {
                aw = aq[al];
                au[aw] = [];
                for (ax = ak = 0, am = aD[aw].length - 1; 0 <= am ? ak <= am : ak >= am; ax = 0 <= am ? ++ak : --ak) {
                    if ((at == null) || at.indexOf(aw) > -1 || at.indexOf("" + aw + ["x", "y", "z"][ax]) > -1) {
                        au[aw][ax] = (aB[aw][ax] - aD[aw][ax]) * ar + aD[aw][ax]
                    } else {
                        au[aw][ax] = aD[aw][ax]
                    }
                }
            }
            if ((at == null) || at.indexOf("rotate") !== -1) {
                ap = aD.quaternion;
                ao = aB.quaternion;
                az = ap[0] * ao[0] + ap[1] * ao[1] + ap[2] * ao[2] + ap[3] * ao[3];
                if (az < 0) {
                    for (ax = aj = 0; aj <= 3; ax = ++aj) {
                        ap[ax] = -ap[ax]
                    }
                    az = -az
                }
                if (az + 1 > 0.05) {
                    if (1 - az >= 0.05) {
                        an = Math.acos(az);
                        av = 1 / Math.sin(an);
                        aC = Math.sin(an * (1 - ar)) * av;
                        ay = Math.sin(an * ar) * av
                    } else {
                        aC = 1 - ar;
                        ay = ar
                    }
                } else {
                    ao[0] = -ap[1];
                    ao[1] = ap[0];
                    ao[2] = -ap[3];
                    ao[3] = ap[2];
                    aC = Math.sin(piDouble * (0.5 - ar));
                    ay = Math.sin(piDouble * ar)
                }
                au.quaternion = [];
                for (ax = ai = 0; ai <= 3; ax = ++ai) {
                    au.quaternion[ax] = ap[ax] * aC + ao[ax] * ay
                }
            } else {
                au.quaternion = aD.quaternion
            }
            return au
        };
        ah.prototype.format = function () {
            return this.toMatrix().toString()
        };
        ah.prototype.toMatrix = function () {
            var aw, ao, am, ap, au, an, ay, ax, av, at, ar, aq, al, ak, aj, ai;
            aw = this;
            au = f.I(4);
            for (ao = al = 0; al <= 3; ao = ++al) {
                au.els[ao][3] = aw.perspective[ao]
            }
            an = aw.quaternion;
            at = an[0];
            ar = an[1];
            aq = an[2];
            av = an[3];
            ay = aw.skew;
            ap = [[1, 0], [2, 0], [2, 1]];
            for (ao = ak = 2; ak >= 0; ao = --ak) {
                if (ay[ao]) {
                    ax = f.I(4);
                    ax.els[ap[ao][0]][ap[ao][1]] = ay[ao];
                    au = au.multiply(ax)
                }
            }
            au = au.multiply(new f([[1 - 2 * (ar * ar + aq * aq), 2 * (at * ar - aq * av), 2 * (at * aq + ar * av), 0], [2 * (at * ar + aq * av), 1 - 2 * (at * at + aq * aq), 2 * (ar * aq - at * av), 0], [2 * (at * aq - ar * av), 2 * (ar * aq + at * av), 1 - 2 * (at * at + ar * ar), 0], [0, 0, 0, 1]]));
            for (ao = aj = 0; aj <= 2; ao = ++aj) {
                for (am = ai = 0; ai <= 2; am = ++ai) {
                    au.els[ao][am] *= aw.scale[ao]
                }
                au.els[3][ao] = aw.translate[ao]
            }
            return au
        };
        return ah
    })();
    f = (function () {
        function ah(ai) {
            this.els = ai;
            this.toString = l(this.toString, this);
            this.decompose = l(this.decompose, this);
            this.inverse = l(this.inverse, this);
            this.augment = l(this.augment, this);
            this.toRightTriangular = l(this.toRightTriangular, this);
            this.transpose = l(this.transpose, this);
            this.multiply = l(this.multiply, this);
            this.dup = l(this.dup, this);
            this.e = l(this.e, this)
        }

        ah.prototype.e = function (aj, ai) {
            if (aj < 1 || aj > this.els.length || ai < 1 || ai > this.els[0].length) {
                return null
            }
            return this.els[aj - 1][ai - 1]
        };
        ah.prototype.dup = function () {
            return new ah(this.els)
        };
        ah.prototype.multiply = function (aw) {
            var at, au, av, ai, aq, ao, am, al, ap, ak, aj, an, ar;
            an = aw.modulus ? true : false;
            at = aw.els || aw;
            if (typeof at[0][0] === "undefined") {
                at = new ah(at).els
            }
            ak = this.els.length;
            am = ak;
            al = at[0].length;
            av = this.els[0].length;
            ai = [];
            ak += 1;
            while (--ak) {
                aq = am - ak;
                ai[aq] = [];
                aj = al;
                aj += 1;
                while (--aj) {
                    ao = al - aj;
                    ar = 0;
                    ap = av;
                    ap += 1;
                    while (--ap) {
                        au = av - ap;
                        ar += this.els[aq][au] * at[au][ao]
                    }
                    ai[aq][ao] = ar
                }
            }
            at = new ah(ai);
            if (an) {
                return at.col(1)
            } else {
                return at
            }
        };
        ah.prototype.transpose = function () {
            var ao, an, al, aj, ak, ai, am;
            am = this.els.length;
            ao = this.els[0].length;
            an = [];
            ak = ao;
            ak += 1;
            while (--ak) {
                al = ao - ak;
                an[al] = [];
                ai = am;
                ai += 1;
                while (--ai) {
                    aj = am - ai;
                    an[al][aj] = this.els[aj][al]
                }
            }
            return new ah(an)
        };
        ah.prototype.toRightTriangular = function () {
            var at, ao, ar, ap, am, av, aw, aj, au, ai, an, al, aq, ak;
            at = this.dup();
            aj = this.els.length;
            am = aj;
            av = this.els[0].length;
            while (--aj) {
                ar = am - aj;
                if (at.els[ar][ar] === 0) {
                    for (ap = an = aq = ar + 1; aq <= am ? an < am : an > am; ap = aq <= am ? ++an : --an) {
                        if (at.els[ap][ar] !== 0) {
                            ao = [];
                            au = av;
                            au += 1;
                            while (--au) {
                                ai = av - au;
                                ao.push(at.els[ar][ai] + at.els[ap][ai])
                            }
                            at.els[ar] = ao;
                            break
                        }
                    }
                }
                if (at.els[ar][ar] !== 0) {
                    for (ap = al = ak = ar + 1; ak <= am ? al < am : al > am; ap = ak <= am ? ++al : --al) {
                        aw = at.els[ap][ar] / at.els[ar][ar];
                        ao = [];
                        au = av;
                        au += 1;
                        while (--au) {
                            ai = av - au;
                            ao.push(ai <= ar ? 0 : at.els[ap][ai] - at.els[ar][ai] * aw)
                        }
                        at.els[ap] = ao
                    }
                }
            }
            return at
        };
        ah.prototype.augment = function (ar) {
            var ap, am, aq, ao, an, al, ak, aj, ai;
            ap = ar.els || ar;
            if (typeof ap[0][0] === "undefined") {
                ap = new ah(ap).els
            }
            am = this.dup();
            aq = am.els[0].length;
            aj = am.els.length;
            al = aj;
            ak = ap[0].length;
            if (aj !== ap.length) {
                return null
            }
            aj += 1;
            while (--aj) {
                ao = al - aj;
                ai = ak;
                ai += 1;
                while (--ai) {
                    an = ak - ai;
                    am.els[ao][aq + an] = ap[ao][an]
                }
            }
            return am
        };
        ah.prototype.inverse = function () {
            var ar, ak, ao, aq, av, ap, al, au, an, aj, at, ai, am;
            aj = this.els.length;
            al = aj;
            ar = this.augment(ah.I(aj)).toRightTriangular();
            au = ar.els[0].length;
            av = [];
            aj += 1;
            while (--aj) {
                aq = aj - 1;
                ao = [];
                at = au;
                av[aq] = [];
                ak = ar.els[aq][aq];
                at += 1;
                while (--at) {
                    ai = au - at;
                    an = ar.els[aq][ai] / ak;
                    ao.push(an);
                    if (ai >= al) {
                        av[aq].push(an)
                    }
                }
                ar.els[aq] = ao;
                for (ap = am = 0; 0 <= aq ? am < aq : am > aq; ap = 0 <= aq ? ++am : --am) {
                    ao = [];
                    at = au;
                    at += 1;
                    while (--at) {
                        ai = au - at;
                        ao.push(ar.els[ap][ai] - ar.els[aq][ai] * ar.els[ap][aq])
                    }
                    ar.els[ap] = ao
                }
            }
            return new ah(av)
        };
        ah.I = function (an) {
            var am, al, ak, ai, aj;
            am = [];
            ai = an;
            an += 1;
            while (--an) {
                al = ai - an;
                am[al] = [];
                aj = ai;
                aj += 1;
                while (--aj) {
                    ak = ai - aj;
                    am[al][ak] = al === ak ? 1 : 0
                }
            }
            return new ah(am)
        };
        ah.prototype.decompose = function () {
            var aJ, aQ, an, aO, aM, ao, ay, au, am, aA, ak, aT, aS, aj, al, aD, aq, ap, aC, ai, at, aU, ar, aB, az, ax,
                aw, av, aR, aP, aN, aL, aK, aI, aH, aG, aF, aE;
            ao = this;
            ai = [];
            aq = [];
            ap = [];
            aA = [];
            au = [];
            aJ = [];
            for (aQ = aR = 0; aR <= 3; aQ = ++aR) {
                aJ[aQ] = [];
                for (aO = aP = 0; aP <= 3; aO = ++aP) {
                    aJ[aQ][aO] = ao.els[aQ][aO]
                }
            }
            if (aJ[3][3] === 0) {
                return false
            }
            for (aQ = aN = 0; aN <= 3; aQ = ++aN) {
                for (aO = aL = 0; aL <= 3; aO = ++aL) {
                    aJ[aQ][aO] /= aJ[3][3]
                }
            }
            am = ao.dup();
            for (aQ = aK = 0; aK <= 2; aQ = ++aK) {
                am.els[aQ][3] = 0
            }
            am.els[3][3] = 1;
            if (aJ[0][3] !== 0 || aJ[1][3] !== 0 || aJ[2][3] !== 0) {
                aT = new J(aJ.slice(0, 4)[3]);
                an = am.inverse();
                at = an.transpose();
                au = at.multiply(aT).els;
                for (aQ = aI = 0; aI <= 2; aQ = ++aI) {
                    aJ[aQ][3] = 0
                }
                aJ[3][3] = 1
            } else {
                au = [0, 0, 0, 1]
            }
            for (aQ = aH = 0; aH <= 2; aQ = ++aH) {
                ai[aQ] = aJ[3][aQ];
                aJ[3][aQ] = 0
            }
            aj = [];
            for (aQ = aG = 0; aG <= 2; aQ = ++aG) {
                aj[aQ] = new J(aJ[aQ].slice(0, 3))
            }
            aq[0] = aj[0].length();
            aj[0] = aj[0].normalize();
            ap[0] = aj[0].dot(aj[1]);
            aj[1] = aj[1].combine(aj[0], 1, -ap[0]);
            aq[1] = aj[1].length();
            aj[1] = aj[1].normalize();
            ap[0] /= aq[1];
            ap[1] = aj[0].dot(aj[2]);
            aj[2] = aj[2].combine(aj[0], 1, -ap[1]);
            ap[2] = aj[1].dot(aj[2]);
            aj[2] = aj[2].combine(aj[1], 1, -ap[2]);
            aq[2] = aj[2].length();
            aj[2] = aj[2].normalize();
            ap[1] /= aq[2];
            ap[2] /= aq[2];
            ay = aj[1].cross(aj[2]);
            if (aj[0].dot(ay) < 0) {
                for (aQ = aF = 0; aF <= 2; aQ = ++aF) {
                    aq[aQ] *= -1;
                    for (aO = aE = 0; aE <= 2; aO = ++aE) {
                        aj[aQ].els[aO] *= -1
                    }
                }
            }
            al = function (aV, aW) {
                return aj[aV].els[aW]
            };
            aS = [];
            aS[1] = Math.asin(-al(0, 2));
            if (Math.cos(aS[1]) !== 0) {
                aS[0] = Math.atan2(al(1, 2), al(2, 2));
                aS[2] = Math.atan2(al(0, 1), al(0, 0))
            } else {
                aS[0] = Math.atan2(-al(2, 0), al(1, 1));
                aS[1] = 0
            }
            aC = al(0, 0) + al(1, 1) + al(2, 2) + 1;
            if (aC > 0.0001) {
                aD = 0.5 / Math.sqrt(aC);
                az = 0.25 / aD;
                ax = (al(2, 1) - al(1, 2)) * aD;
                aw = (al(0, 2) - al(2, 0)) * aD;
                av = (al(1, 0) - al(0, 1)) * aD
            } else {
                if ((al(0, 0) > al(1, 1)) && (al(0, 0) > al(2, 2))) {
                    aD = Math.sqrt(1 + al(0, 0) - al(1, 1) - al(2, 2)) * 2;
                    ax = 0.25 * aD;
                    aw = (al(0, 1) + al(1, 0)) / aD;
                    av = (al(0, 2) + al(2, 0)) / aD;
                    az = (al(2, 1) - al(1, 2)) / aD
                } else {
                    if (al(1, 1) > al(2, 2)) {
                        aD = Math.sqrt(1 + al(1, 1) - al(0, 0) - al(2, 2)) * 2;
                        ax = (al(0, 1) + al(1, 0)) / aD;
                        aw = 0.25 * aD;
                        av = (al(1, 2) + al(2, 1)) / aD;
                        az = (al(0, 2) - al(2, 0)) / aD
                    } else {
                        aD = Math.sqrt(1 + al(2, 2) - al(0, 0) - al(1, 1)) * 2;
                        ax = (al(0, 2) + al(2, 0)) / aD;
                        aw = (al(1, 2) + al(2, 1)) / aD;
                        av = 0.25 * aD;
                        az = (al(1, 0) - al(0, 1)) / aD
                    }
                }
            }
            aA = [ax, aw, av, az];
            ak = new e;
            ak.translate = ai;
            ak.scale = aq;
            ak.skew = ap;
            ak.quaternion = aA;
            ak.perspective = au;
            ak.rotate = aS;
            for (ar in ak) {
                aU = ak[ar];
                for (aM in aU) {
                    aB = aU[aM];
                    if (isNaN(aB)) {
                        aU[aM] = 0
                    }
                }
            }
            return ak
        };
        ah.prototype.toString = function () {
            var aj, ai, am, al, ak;
            am = "matrix3d(";
            for (aj = al = 0; al <= 3; aj = ++al) {
                for (ai = ak = 0; ak <= 3; ai = ++ak) {
                    am += c(this.els[aj][ai], 10);
                    if (!(aj === 3 && ai === 3)) {
                        am += ","
                    }
                }
            }
            am += ")";
            return am
        };
        ah.matrixForTransform = p(function (ak) {
            var am, aj, al, an, ai, ao;
            am = document.createElement("div");
            am.style.position = "absolute";
            am.style.visibility = "hidden";
            am.style[u("transform")] = ak;
            document.body.appendChild(am);
            al = window.getComputedStyle(am, null);
            aj = (an = (ai = al.transform) != null ? ai : al[u("transform")]) != null ? an : (ao = z.tests) != null ? ao.matrixForTransform(ak) : void 0;
            document.body.removeChild(am);
            return aj
        });
        ah.fromTransform = function (aj) {
            var an, am, ak, ai, ao, al;
            ai = aj != null ? aj.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0;
            if (ai) {
                an = ai[1].split(",");
                an = an.map(parseFloat);
                if (an.length === 6) {
                    am = [an[0], an[1], 0, 0, an[2], an[3], 0, 0, 0, 0, 1, 0, an[4], an[5], 0, 1]
                } else {
                    am = an
                }
            } else {
                am = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }
            ao = [];
            for (ak = al = 0; al <= 3; ak = ++al) {
                ao.push(am.slice(ak * 4, ak * 4 + 4))
            }
            return new ah(ao)
        };
        return ah
    })();
    I = p(function (aq) {
        var ak, an, ah, ar, ao, al, aj, ap, ai, am;
        if (document.body.style[aq] !== void 0) {
            return ""
        }
        ar = aq.split("-");
        ao = "";
        for (al = 0, ap = ar.length; al < ap; al++) {
            ah = ar[al];
            ao += ah.substring(0, 1).toUpperCase() + ah.substring(1)
        }
        am = ["Webkit", "Moz", "ms"];
        for (aj = 0, ai = am.length; aj < ai; aj++) {
            an = am[aj];
            ak = an + ao;
            if (document.body.style[ak] !== void 0) {
                return an
            }
        }
        return ""
    });
    u = p(function (ai) {
        var ah;
        ah = I(ai);
        if (ah === "Moz") {
            return "" + ah + (ai.substring(0, 1).toUpperCase() + ai.substring(1))
        }
        if (ah !== "") {
            return "-" + (ah.toLowerCase()) + "-" + (b(ai))
        }
        return b(ai)
    });
    V = typeof window !== "undefined" && window !== null ? window.requestAnimationFrame : void 0;
    ad = [];
    h = [];
    q = false;
    O = 1;
    if (typeof window !== "undefined" && window !== null) {
        window.addEventListener("keyup", function (ah) {
            if (ah.keyCode === 68 && ah.shiftKey && ah.ctrlKey) {
                return z.toggleSlow()
            }
        })
    }
    if (V == null) {
        ag = 0;
        V = function (ak) {
            var ah, aj, ai;
            ah = Date.now();
            ai = Math.max(0, 16 - (ah - ag));
            aj = window.setTimeout(function () {
                return ak(ah + ai)
            }, ai);
            ag = ah + ai;
            return aj
        }
    }
    r = false;
    D = false;
    T = function () {
        if (!r) {
            r = true;
            return V(Q)
        }
    };
    Q = function (aj) {
        var al, ai, ak, ah;
        if (D) {
            V(Q);
            return
        }
        ai = [];
        for (ak = 0, ah = ad.length; ak < ah; ak++) {
            al = ad[ak];
            if (!E(aj, al)) {
                ai.push(al)
            }
        }
        ad = ad.filter(function (am) {
            return ai.indexOf(am) === -1
        });
        if (ad.length === 0) {
            return r = false
        } else {
            return V(Q)
        }
    };
    E = function (aq, ai) {
        var ap, al, an, ak, am, ao, ah, aj;
        if (ai.tStart == null) {
            ai.tStart = aq
        }
        ak = (aq - ai.tStart) / ai.options.duration;
        am = ai.curve(ak);
        al = {};
        if (ak >= 1) {
            if (ai.curve.returnsToSelf) {
                al = ai.properties.start
            } else {
                al = ai.properties.end
            }
        } else {
            aj = ai.properties.start;
            for (ap in aj) {
                an = aj[ap];
                al[ap] = ac(an, ai.properties.end[ap], am)
            }
        }
        j(ai.el, al);
        if (typeof(ao = ai.options).change === "function") {
            ao.change(ai.el, Math.min(1, ak))
        }
        if (ak >= 1) {
            if (typeof(ah = ai.options).complete === "function") {
                ah.complete(ai.el)
            }
        }
        return ak < 1
    };
    ac = function (aj, ah, ai) {
        if ((aj != null) && (aj.interpolate != null)) {
            return aj.interpolate(ah, ai)
        }
        return null
    };
    P = function (ah, am, at, aq) {
        var aj, ak, ar, ai, ao, an, al, ap;
        if (aq != null) {
            h = h.filter(function (au) {
                return au.id !== aq
            })
        }
        z.stop(ah, {timeout: false});
        if (!at.animated) {
            z.css(ah, am);
            if (typeof at.complete === "function") {
                at.complete(this)
            }
            return
        }
        am = L(am);
        an = U(ah, Object.keys(am));
        aj = {};
        al = [];
        for (ai in am) {
            ap = am[ai];
            if ((ah.style != null) && af.contains(ai)) {
                al.push([ai, ap])
            } else {
                ak = K(ap);
                if (ak instanceof N && (ah.style != null)) {
                    ak = new Z([ak, x(ai, 0)])
                }
                aj[ai] = ak
            }
        }
        if (al.length > 0) {
            ar = A(ah);
            if (ar) {
                ao = new i();
                ao.applyProperties(al)
            } else {
                ap = (al.map(function (au) {
                    return ae(au[0], au[1])
                })).join(" ");
                ao = f.fromTransform(f.matrixForTransform(ap))
            }
            aj.transform = ao.decompose();
            if (ar) {
                an.transform.applyRotateCenter([aj.transform.props.rotate[1], aj.transform.props.rotate[2]])
            }
        }
        ad.push({el: ah, properties: {start: an, end: aj}, options: at, curve: at.type.call(at.type, at)});
        return T()
    };
    aa = [];
    S = 0;
    F = function (ah) {
        if (!n()) {
            return
        }
        return ah.realTimeoutId = setTimeout(function () {
            ah.fn();
            return H(ah.id)
        }, ah.delay)
    };
    w = function (ai, ah) {
        var aj;
        S += 1;
        aj = {id: S, tStart: Date.now(), fn: ai, delay: ah, originalDelay: ah};
        F(aj);
        aa.push(aj);
        return S
    };
    H = function (ah) {
        return aa = aa.filter(function (ai) {
            if (ai.id === ah) {
                clearTimeout(ai.realTimeoutId)
            }
            return ai.id !== ah
        })
    };
    a = function (aj, ah) {
        var ai;
        if (aj != null) {
            ai = aj - ah.tStart;
            return ah.originalDelay - ai
        } else {
            return ah.originalDelay
        }
    };
    if (typeof window !== "undefined" && window !== null) {
        window.addEventListener("unload", function () {
        })
    }
    m = null;
    C(function (ak) {
        var an, aj, aq, ap, ao, al, ar, ai, ah, am;
        D = !ak;
        if (!ak) {
            m = Date.now();
            am = [];
            for (ap = 0, ar = aa.length; ap < ar; ap++) {
                aq = aa[ap];
                am.push(clearTimeout(aq.realTimeoutId))
            }
            return am
        } else {
            if (r) {
                aj = Date.now() - m;
                for (ao = 0, ai = ad.length; ao < ai; ao++) {
                    an = ad[ao];
                    if (an.tStart != null) {
                        an.tStart += aj
                    }
                }
            }
            for (al = 0, ah = aa.length; al < ah; al++) {
                aq = aa[al];
                aq.delay = a(m, aq);
                F(aq)
            }
            return m = null
        }
    });
    z = {};
    z.linear = function () {
        return function (ah) {
            return ah
        }
    };
    z.spring = function (aj) {
        var ai, ah, an, am, al, ak;
        if (aj == null) {
            aj = {}
        }
        v(aj, z.spring.defaults);
        am = Math.max(1, aj.frequency / 20);
        al = Math.pow(20, aj.friction / 100);
        ak = aj.anticipationSize / 1000;
        an = Math.max(0, ak);
        ai = function (at) {
            var au, ap, ao, ar, aq;
            au = 0.8;
            ar = ak / (1 - ak);
            aq = 0;
            ao = (ar - (au * aq)) / (ar - aq);
            ap = (au - ao) / ar;
            return (ap * at * aj.anticipationStrength / 100) + ao
        };
        ah = function (ao) {
            return Math.pow(al / 10, -ao) * (1 - ao)
        };
        return function (ax) {
            var ao, ar, av, aq, au, at, aw, ap;
            at = (ax / (1 - ak)) - (ak / (1 - ak));
            if (ax < ak) {
                ap = (ak / (1 - ak)) - (ak / (1 - ak));
                aw = (0 / (1 - ak)) - (ak / (1 - ak));
                au = Math.acos(1 / ai(ap));
                av = (Math.acos(1 / ai(aw)) - au) / (am * (-ak));
                ao = ai
            } else {
                ao = ah;
                au = 0;
                av = 1
            }
            ar = ao(at);
            aq = am * (ax - ak) * av + au;
            return 1 - (ar * Math.cos(aq))
        }
    };
    z.bounce = function (ai) {
        var ah, aj, al, ak;
        if (ai == null) {
            ai = {}
        }
        v(ai, z.bounce.defaults);
        al = Math.max(1, ai.frequency / 20);
        ak = Math.pow(20, ai.friction / 100);
        ah = function (am) {
            return Math.pow(ak / 10, -am) * (1 - am)
        };
        aj = function (ap) {
            var ao, an, aq, am;
            am = -3.14 / 2;
            an = 1;
            ao = ah(ap);
            aq = al * ap * an + am;
            return ao * Math.cos(aq)
        };
        aj.returnsToSelf = true;
        return aj
    };
    z.gravity = function (ai) {
        var ah, al, an, ak, aj, am, ao;
        if (ai == null) {
            ai = {}
        }
        v(ai, z.gravity.defaults);
        al = Math.min(ai.bounciness / 1250, 0.8);
        ak = ai.elasticity / 1000;
        ao = 100;
        an = [];
        ah = (function () {
            var ap, aq;
            ap = Math.sqrt(2 / ao);
            aq = {a: -ap, b: ap, H: 1};
            if (ai.returnsToSelf) {
                aq.a = 0;
                aq.b = aq.b * 2
            }
            while (aq.H > 0.001) {
                ah = aq.b - aq.a;
                aq = {a: aq.b, b: aq.b + ah * al, H: aq.H * al * al}
            }
            return aq.b
        })();
        am = function (aq, ap, at, ar) {
            var av, au;
            ah = ap - aq;
            au = (2 / ah) * ar - 1 - (aq * 2 / ah);
            av = au * au * at - at + 1;
            if (ai.returnsToSelf) {
                av = 1 - av
            }
            return av
        };
        (function () {
            var ar, ap, at, aq;
            ap = Math.sqrt(2 / (ao * ah * ah));
            at = {a: -ap, b: ap, H: 1};
            if (ai.returnsToSelf) {
                at.a = 0;
                at.b = at.b * 2
            }
            an.push(at);
            ar = ah;
            aq = [];
            while (at.b < 1 && at.H > 0.001) {
                ar = at.b - at.a;
                at = {a: at.b, b: at.b + ar * al, H: at.H * ak};
                aq.push(an.push(at))
            }
            return aq
        })();
        aj = function (ar) {
            var at, aq, ap;
            aq = 0;
            at = an[aq];
            while (!(ar >= at.a && ar <= at.b)) {
                aq += 1;
                at = an[aq];
                if (!at) {
                    break
                }
            }
            if (!at) {
                ap = ai.returnsToSelf ? 0 : 1
            } else {
                ap = am(at.a, at.b, at.H, ar)
            }
            return ap
        };
        aj.returnsToSelf = ai.returnsToSelf;
        return aj
    };
    z.forceWithGravity = function (ah) {
        if (ah == null) {
            ah = {}
        }
        v(ah, z.forceWithGravity.defaults);
        ah.returnsToSelf = true;
        return z.gravity(ah)
    };
    z.bezier = (function () {
        var aj, ah, ai;
        ah = function (ak, ao, an, am, al) {
            return (Math.pow(1 - ak, 3) * ao) + (3 * Math.pow(1 - ak, 2) * ak * an) + (3 * (1 - ak) * Math.pow(ak, 2) * am) + Math.pow(ak, 3) * al
        };
        aj = function (ak, ao, an, am, al) {
            return {x: ah(ak, ao.x, an.x, am.x, al.x), y: ah(ak, ao.y, an.y, am.y, al.y)}
        };
        ai = function (av, ak, ax) {
            var al, ao, ap, aq, ar, aw, au, am, an, at;
            al = null;
            for (an = 0, at = ak.length; an < at; an++) {
                ao = ak[an];
                if (av >= ao(0).x && av <= ao(1).x) {
                    al = ao
                }
                if (al !== null) {
                    break
                }
            }
            if (!al) {
                if (ax) {
                    return 0
                } else {
                    return 1
                }
            }
            am = 0.0001;
            aq = 0;
            aw = 1;
            ar = (aw + aq) / 2;
            au = al(ar).x;
            ap = 0;
            while (Math.abs(av - au) > am && ap < 100) {
                if (av > au) {
                    aq = ar
                } else {
                    aw = ar
                }
                ar = (aw + aq) / 2;
                au = al(ar).x;
                ap += 1
            }
            return al(ar).y
        };
        return function (ak) {
            var an, am, al;
            if (ak == null) {
                ak = {}
            }
            al = ak.points;
            an = (function () {
                var ap, ao, aq;
                an = [];
                aq = function (ar, au) {
                    var at;
                    at = function (av) {
                        return aj(av, ar, ar.cp[ar.cp.length - 1], au.cp[0], au)
                    };
                    return an.push(at)
                };
                for (ap in al) {
                    ao = parseInt(ap);
                    if (ao >= al.length - 1) {
                        break
                    }
                    aq(al[ao], al[ao + 1])
                }
                return an
            })();
            am = function (ao) {
                if (ao === 0) {
                    return 0
                } else {
                    if (ao === 1) {
                        return 1
                    } else {
                        return ai(ao, an, this.returnsToSelf)
                    }
                }
            };
            am.returnsToSelf = al[al.length - 1].y === 0;
            return am
        }
    })();
    z.easeInOut = function (ah) {
        var aj, ai;
        if (ah == null) {
            ah = {}
        }
        aj = (ai = ah.friction) != null ? ai : z.easeInOut.defaults.friction;
        return z.bezier({
            points: [{x: 0, y: 0, cp: [{x: 0.92 - (aj / 1000), y: 0}]}, {
                x: 1,
                y: 1,
                cp: [{x: 0.08 + (aj / 1000), y: 1}]
            }]
        })
    };
    z.easeIn = function (ah) {
        var aj, ai;
        if (ah == null) {
            ah = {}
        }
        aj = (ai = ah.friction) != null ? ai : z.easeIn.defaults.friction;
        return z.bezier({points: [{x: 0, y: 0, cp: [{x: 0.92 - (aj / 1000), y: 0}]}, {x: 1, y: 1, cp: [{x: 1, y: 1}]}]})
    };
    z.easeOut = function (ah) {
        var aj, ai;
        if (ah == null) {
            ah = {}
        }
        aj = (ai = ah.friction) != null ? ai : z.easeOut.defaults.friction;
        return z.bezier({points: [{x: 0, y: 0, cp: [{x: 0, y: 0}]}, {x: 1, y: 1, cp: [{x: 0.08 + (aj / 1000), y: 1}]}]})
    };
    z.spring.defaults = {frequency: 300, friction: 200, anticipationSize: 0, anticipationStrength: 0};
    z.bounce.defaults = {frequency: 300, friction: 200};
    z.forceWithGravity.defaults = z.gravity.defaults = {bounciness: 400, elasticity: 200};
    z.easeInOut.defaults = z.easeIn.defaults = z.easeOut.defaults = {friction: 500};
    z.css = X(function (ai, ah) {
        return ab(ai, ah, true)
    });
    z.animate = X(function (aj, ai, ah) {
        var ak;
        if (ah == null) {
            ah = {}
        }
        ah = B(ah);
        v(ah, {type: z.easeInOut, duration: 1000, delay: 0, animated: true});
        ah.duration = Math.max(0, ah.duration * O);
        ah.delay = Math.max(0, ah.delay);
        if (ah.delay === 0) {
            return P(aj, ai, ah)
        } else {
            ak = z.setTimeout(function () {
                return P(aj, ai, ah, ak)
            }, ah.delay);
            return h.push({id: ak, el: aj})
        }
    });
    z.stop = X(function (ai, ah) {
        if (ah == null) {
            ah = {}
        }
        if (ah.timeout == null) {
            ah.timeout = true
        }
        if (ah.timeout) {
            h = h.filter(function (aj) {
                if (aj.el === ai && ((ah.filter == null) || ah.filter(aj))) {
                    z.clearTimeout(aj.id);
                    return false
                }
                return true
            })
        }
        return ad = ad.filter(function (aj) {
            return aj.el !== ai
        })
    });
    z.setTimeout = function (ai, ah) {
        return w(ai, ah * O)
    };
    z.clearTimeout = function (ah) {
        return H(ah)
    };
    z.toggleSlow = function () {
        q = !q;
        if (q) {
            O = 3
        } else {
            O = 1
        }
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log("dynamics.js: slow animations " + (q ? "enabled" : "disabled")) : void 0 : void 0
    };
    if (window.M && typeof window.M.define === "function") {
        M.define("/js/plugins/dynamics", function () {
            return z
        })
    } else {
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = z
        } else {
            if (typeof define === "function") {
                define("dynamics", function () {
                    return z
                })
            } else {
                window.dynamics = z
            }
        }
    }
}).call(this);
M.define("/js/hotel/module/Log", function (c, b, d) {
    var a = {
        getType: function (e) {
            switch (e) {
                case"date":
                    return "日期";
                case"guests":
                    return "人数";
                case"hasBookingRooms":
                    return "全部/空房";
                case"price":
                    return "价格";
                case"area":
                    return "区域";
                case"areaId":
                    return "区域";
                case"poi":
                    return "景点";
                case"poiId":
                    return "景点";
                case"distance":
                    return "距离";
                case"subway":
                    return "地铁";
                case"hasSubway":
                    return "地铁";
                case"feature":
                    return "特色类型";
                case"type":
                    return "住宿类型";
                case"star":
                    return "星级";
                case"brand":
                    return "品牌";
                case"facility":
                    return "设施";
                case"airbnbRoom":
                    return "airbnb整套/合住";
                case"airbnbBedroom":
                    return "airbnb卧室数量";
                case"airbnbFacility":
                    return "airbnb设施";
                case"airbnbPropertyType":
                    return "airbnb住宿类型";
                case"addedTags":
                    return "其他tag";
                case"keyword":
                    return "关键字";
                case"hasFaved":
                    return "收藏";
                case"nonResult":
                    return "无结果-重置条件";
                case"sort":
                    return "排序";
                default:
                    return e
            }
        }, searchLog: function (e) {
            !!mfwPageEvent && mfwPageEvent("hotel", "search", {keyword: e.keyword, search_type: e.search_type})
        }, searchResultLog: function (e) {
            !!mfwPageEvent && mfwPageEvent("hotel", "search_result", {
                keyword: e.keyword,
                search_type: e.search_type,
                index: e.index,
                content_type: e.content_type
            })
        }, favLog: function (e) {
            !!mfwPageEvent && mfwPageEvent("hotel", "fav", {
                opt_type: e.opt_type,
                page_type: e.page_type,
                poi_id: e.poi_id
            })
        }, listFilterLog: function (e) {
            !!mfwPageEvent && mfwPageEvent("hotel", "list_filter", {
                type: this.getType(e.type),
                value: e.type === "nonResult" ? this.getType(e.value) : e.value,
                mddid: e.mddid,
                entrance_type: e.entrance_type
            })
        }, listDataLog: function (e) {
            !!mfwPageEvent && mfwPageEvent("hotel", "list_data", {
                type: e.type,
                value: e.value,
                load_time: e.load_time,
                hour_period: e.hour_period,
                resend_count: e.resend_count,
                failed_type: e.failed_type
            })
        }
    };
    d.exports = a
});
M.define("/js/hotel/module/Search_v2", function (d, b, e) {
    var f = d("Suggestion"), a = d("/js/hotel/module/Log");
    var c = function (g) {
        g = $.extend({}, c.DEFAULT, g);
        var h = this;
        this.isAutoForward = M.is(g.isAutoForward, "Boolean") ? g.isAutoForward : true;
        this._defaultSearch = g.defaultSearch;
        this.$input = $("#" + g.input);
        this.$listContainer = $("#" + g.listContainer);
        this.suggestion = new f({
            url: "/hotel/ajax.php?sAction=getSuggestListV2",
            keyParamName: "keyword",
            input: this.$input,
            listContainer: this.$listContainer,
            listItemHoverClass: "active",
            handleSuggest: M.bind(function (j) {
                var n = this.generateListHtml(j.place, "place"), p = this.generateListHtml(j.airport, "airport"),
                    o = this.generateListHtml(j.railway_station, "railway_station"),
                    m = this.generateListHtml(j.station, "station"), i = this.generateListHtml(j.scenic, "scenic"),
                    l = this.generateListHtml(j.hotel, "hotel"), k = n + p + o + m + i + l;
                if (j.first_type === "detail") {
                    k = l + n + p + o + m + i
                }
                if (k) {
                    k += '<a class="ssp-more _j_listitem _j_listitem_default" href="javascript:;">显示全部搜索结果</a></div>'
                }
                return k
            }, this),
            updateList: function (i) {
                this.listContainer.html(i)
            }
        });
        M.Event(this.suggestion).on("itemselected", M.bind(function (l) {
            var n = l.item;
            if (n.length) {
                var k = n.data("url"), m = n.data("type"), j = this.$listContainer.find("._j_listitem").index(n) + 1,
                    i = $.trim(this.$input.val());
                if (i && !n.hasClass("_j_listitem_default")) {
                    a.searchResultLog({keyword: i, search_type: "suggest", index: j, content_type: m})
                }
                i && a.searchLog({keyword: i, search_type: "suggest"});
                M.Event(this).fire("itemselected", {item: n});
                if (n.hasClass("_j_listitem_default")) {
                    this.defaultSearch(true)
                }
                if (this.isAutoForward && k) {
                    window.location.href = k
                }
            }
        }, this));
        this.$input.on("keydown", M.bind(function (i) {
            if (i.keyCode === 13) {
                this.defaultSearch()
            }
        }, this));
        setTimeout(M.bind(function () {
            if (g.isAutoFocus) {
                var i = $.trim(this.$input.val());
                if (i && i != this.$input.data("defaultValue")) {
                    this.$input.focus();
                    this.suggestion.inputChange({target: this.$input[0]})
                }
            }
        }, this), 1)
    };
    c.DEFAULT = {
        type: "common", isAutoFocus: true, isBlank: false, defaultSearch: function (h, g) {
            var i = "/hotel/s.php?keyword=" + h;
            if (!!g) {
                i += "&disautomatch=1"
            }
            window.location.href = i
        }
    };
    c.prototype.generateListHtml = function (p, k) {
        var z = [];
        $.each(p || [], function (i, B) {
            z.push(B)
        });
        if (z.length === 0) {
            return ""
        }
        var u = $("<div>"), t = $('<dl class="clearfix">').appendTo(u), y = {
            hotel: "sicon-hotel",
            place: "sicon-place",
            station: "sicon-metro",
            airport: "sicon-airport",
            railway_station: "sicon-train",
            scenic: "sicon-scenic"
        }, g = y[k] || "";
        t.append('<dt><i class="' + g + '"></i></dt>');
        for (var v = 0; v < z.length; v++) {
            var s = z[v]["id"], r = z[v]["type"], x = z[v]["sub_type"], A = z[v]["name"], j = z[v]["cname_for_display"],
                n = z[v]["ename_for_display"], o = z[v]["parent_str"],
                m = ("hotel" == k) ? "" : z[v]["hotel_num"] + "家酒店", l, w, h = $("<dd>"),
                q = $('<a class="_j_listitem">');
            if (k == "hotel") {
                l = "/hotel/" + s + ".html";
                w = "hotel"
            } else {
                if (r == "mdd") {
                    l = "/hotel/" + s + "/";
                    w = "mdd"
                } else {
                    if (r == "district") {
                        l = "/hotel/area_" + s + ".html";
                        w = "area"
                    } else {
                        if (r == "region") {
                            l = "/hotel/region_" + s + ".html";
                            w = "region"
                        } else {
                            if (r == "traffic") {
                                l = "/hotel/jd" + s + ".html";
                                w = x
                            } else {
                                l = "/hotel/jd" + s + ".html";
                                w = "scenic"
                            }
                        }
                    }
                }
            }
            q.attr("data-url", l).attr("data-name", A).attr("data-type", w);
            q.append('<span class="nums">' + m + "</span>");
            q.append('<h4><span class="skey">' + j + '</span><span class="en">' + n + "</span></h4>");
            q.append("<p>" + o + "</p>");
            t.append(h.append(q))
        }
        if (t.find("dd").length === 0) {
            return ""
        }
        return u.html()
    };
    c.prototype.defaultSearch = function (h) {
        var g = $.trim(this.$input.val());
        if (g.length > 0) {
            a.searchLog({keyword: g, search_type: "search"});
            this._defaultSearch.call(this, g, h)
        }
    };
    e.exports = c
});
var XDate = (function (X, D, ae, s) {
    var N = 0;
    var h = 1;
    var n = 2;
    var l = 3;
    var t = 4;
    var aa = 5;
    var d = 6;
    var ah = 7;
    var G = 8;
    var C = 9;
    var ab = 86400000;
    var T = "yyyy-MM-dd'T'HH:mm:ss(.fff)";
    var u = T + "zzz";
    var i = ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds", "Day", "Year"];
    var m = ["Years", "Months", "Days"];
    var x = [12, 31, 24, 60, 60, 1000, 1];
    var z = new RegExp("(([a-zA-Z])\\2*)|(\\((('.*?'|\\(.*?\\)|.)*?)\\))|('(.*?)')");
    var b = X.UTC;
    var B = X.prototype.toUTCString;
    var r = S.prototype;
    r.length = 1;
    r.splice = ae.prototype.splice;

    function S() {
        return ad((this instanceof S) ? this : new S(), arguments)
    }

    function ad(an, am) {
        var ak = am.length;
        var al;
        if (R(am[ak - 1])) {
            al = am[--ak];
            am = w(am, 0, ak)
        }
        if (!ak) {
            an[0] = new X()
        } else {
            if (ak == 1) {
                var aj = am[0];
                if (aj instanceof X || ag(aj)) {
                    an[0] = new X(+aj)
                } else {
                    if (aj instanceof S) {
                        an[0] = E(aj)
                    } else {
                        if (k(aj)) {
                            an[0] = new X(0);
                            an = y(aj, al || false, an)
                        }
                    }
                }
            } else {
                an[0] = new X(b.apply(X, am));
                if (!al) {
                    an[0] = e(an[0])
                }
            }
        }
        if (R(al)) {
            q(an, al)
        }
        return an
    }

    r.getUTCMode = af(W);

    function W(aj) {
        return aj[0].toString === B
    }

    r.setUTCMode = af(q);

    function q(ak, aj, al) {
        if (aj) {
            if (!W(ak)) {
                if (al) {
                    ak[0] = j(ak[0])
                }
                ak[0].toString = B
            }
        } else {
            if (W(ak)) {
                if (al) {
                    ak[0] = e(ak[0])
                } else {
                    ak[0] = new X(+ak[0])
                }
            }
        }
        return ak
    }

    r.getTimezoneOffset = function () {
        if (W(this)) {
            return 0
        } else {
            return this[0].getTimezoneOffset()
        }
    };
    ac(i, function (ak, aj) {
        r["get" + ak] = function () {
            return P(this[0], W(this), aj)
        };
        if (aj != G) {
            r["getUTC" + ak] = function () {
                return P(this[0], true, aj)
            }
        }
        if (aj != ah) {
            r["set" + ak] = function (al) {
                H(this, aj, al, arguments, W(this));
                return this
            };
            if (aj != G) {
                r["setUTC" + ak] = function (al) {
                    H(this, aj, al, arguments, true);
                    return this
                };
                r["add" + (m[aj] || ak)] = function (am, al) {
                    f(this, aj, am, al);
                    return this
                };
                r["diff" + (m[aj] || ak)] = function (al) {
                    return I(this, al, aj)
                }
            }
        }
    });

    function H(an, aq, ao, am, ap) {
        var ak = o(P, an[0], ap);
        var aj = o(J, an[0], ap);
        var ar;
        var al = false;
        if (am.length == 2 && R(am[1])) {
            al = am[1];
            am = [ao]
        }
        if (aq == h) {
            ar = (ao % 12 + 12) % 12
        } else {
            ar = ak(h)
        }
        aj(aq, am);
        if (al && ak(h) != ar) {
            aj(h, [ak(h) - 1]);
            aj(n, [O(ak(N), ak(h))])
        }
    }

    function f(al, ak, an, aj) {
        an = Number(an);
        var am = D.floor(an);
        al["set" + i[ak]](al["get" + i[ak]]() + am, aj || false);
        if (am != an && ak < d) {
            f(al, ak + 1, (an - am) * x[ak], aj)
        }
    }

    function I(aj, aq, am) {
        aj = aj.clone().setUTCMode(true, true);
        aq = S(aq).setUTCMode(true, true);
        var al = 0;
        if (am == N || am == h) {
            for (var ao = d, ak; ao >= am; ao--) {
                al /= x[ao];
                al += P(aq, false, ao) - P(aj, false, ao)
            }
            if (am == h) {
                al += (aq.getFullYear() - aj.getFullYear()) * 12
            }
        } else {
            if (am == n) {
                var ap = aj.toDate().setUTCHours(0, 0, 0, 0);
                var an = aq.toDate().setUTCHours(0, 0, 0, 0);
                al = D.round((an - ap) / ab) + ((aq - an) - (aj - ap)) / ab
            } else {
                al = (aq - aj) / [3600000, 60000, 1000, 1][am - 3]
            }
        }
        return al
    }

    r.getWeek = function () {
        return a(o(P, this, false))
    };
    r.getUTCWeek = function () {
        return a(o(P, this, true))
    };
    r.setWeek = function (ak, aj) {
        c(this, ak, aj, false);
        return this
    };
    r.setUTCWeek = function (ak, aj) {
        c(this, ak, aj, true);
        return this
    };
    r.addWeeks = function (aj) {
        return this.addDays(Number(aj) * 7)
    };
    r.diffWeeks = function (aj) {
        return I(this, aj, n) / 7
    };

    function a(aj) {
        return K(aj(N), aj(h), aj(n))
    }

    function K(ak, am, aj) {
        var an = new X(b(ak, am, aj));
        var al = U(p(ak, am, aj));
        return D.floor(D.round((an - al) / ab) / 7) + 1
    }

    function p(ak, al, aj) {
        var am = new X(b(ak, al, aj));
        if (am < U(ak)) {
            return ak - 1
        } else {
            if (am >= U(ak + 1)) {
                return ak + 1
            }
        }
        return ak
    }

    function U(aj) {
        var ak = new X(b(aj, 0, 4));
        ak.setUTCDate(ak.getUTCDate() - (ak.getUTCDay() + 6) % 7);
        return ak
    }

    function c(am, ap, ak, ao) {
        var aj = o(P, am, ao);
        var an = o(J, am, ao);
        if (ak === s) {
            ak = p(aj(N), aj(h), aj(n))
        }
        var al = U(ak);
        if (!ao) {
            al = e(al)
        }
        am.setTime(+al);
        an(n, [aj(n) + (ap - 1) * 7])
    }

    S.parsers = [F];
    S.parse = function (aj) {
        return +S("" + aj)
    };

    function y(ao, aj, an) {
        var am = S.parsers;
        var al = 0;
        var ak;
        for (; al < am.length; al++) {
            ak = am[al](ao, aj, an);
            if (ak) {
                return ak
            }
        }
        an[0] = new X(ao);
        return an
    }

    function F(an, ak, al) {
        var aj = an.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/);
        if (aj) {
            var am = new X(b(aj[1], aj[3] ? aj[3] - 1 : 0, aj[5] || 1, aj[7] || 0, aj[8] || 0, aj[10] || 0, aj[12] ? Number("0." + aj[12]) * 1000 : 0));
            if (aj[13]) {
                if (aj[14]) {
                    am.setUTCMinutes(am.getUTCMinutes() + (aj[15] == "-" ? 1 : -1) * (Number(aj[16]) * 60 + (aj[18] ? Number(aj[18]) : 0)))
                }
            } else {
                if (!ak) {
                    am = e(am)
                }
            }
            return al.setTime(+am)
        }
    }

    r.toString = function (aj, ak, al) {
        if (aj === s || !V(this)) {
            return this[0].toString()
        } else {
            return L(this, aj, ak, al, W(this))
        }
    };
    r.toUTCString = r.toGMTString = function (aj, ak, al) {
        if (aj === s || !V(this)) {
            return this[0].toUTCString()
        } else {
            return L(this, aj, ak, al, true)
        }
    };
    r.toISOString = function () {
        return this.toUTCString(u)
    };
    S.defaultLocale = "";
    S.locales = {
        "": {
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            amDesignator: "AM",
            pmDesignator: "PM"
        }
    };
    S.formatters = {i: T, u: u};

    function L(aq, am, ak, an, ar) {
        var aj = S.locales;
        var ap = aj[S.defaultLocale] || {};
        var al = o(P, aq, ar);
        ak = (k(ak) ? aj[ak] : ak) || {};

        function at(au) {
            return ak[au] || ap[au]
        }

        function ao(au) {
            if (an) {
                var av = (au == ah ? n : au) - 1;
                for (; av >= 0; av--) {
                    an.push(al(av))
                }
            }
            return al(au)
        }

        return Y(aq, am, ao, at, ar)
    }

    function Y(ap, ak, an, ao, aq) {
        var aj;
        var al;
        var am = "";
        while (aj = ak.match(z)) {
            am += ak.substr(0, aj.index);
            if (aj[1]) {
                am += Q(ap, aj[1], an, ao, aq)
            } else {
                if (aj[3]) {
                    al = Y(ap, aj[4], an, ao, aq);
                    if (parseInt(al.replace(/\D/g, ""), 10)) {
                        am += al
                    }
                } else {
                    am += aj[7] || "'"
                }
            }
            ak = ak.substr(aj.index + aj[0].length)
        }
        return am + ak
    }

    function Q(ap, an, al, ao, aq) {
        var aj = an.length;
        var am;
        var ak = "";
        while (aj > 0) {
            am = A(ap, an.substr(0, aj), al, ao, aq);
            if (am !== s) {
                ak += am;
                an = an.substr(aj);
                aj = an.length
            } else {
                aj--
            }
        }
        return ak + an
    }

    function A(an, al, aj, am, ap) {
        var ak = S.formatters[al];
        if (k(ak)) {
            return Y(an, ak, aj, am, ap)
        } else {
            if (v(ak)) {
                return ak(an, ap || false, am)
            }
        }
        switch (al) {
            case"fff":
                return Z(aj(d), 3);
            case"s":
                return aj(aa);
            case"ss":
                return Z(aj(aa));
            case"m":
                return aj(t);
            case"mm":
                return Z(aj(t));
            case"h":
                return aj(l) % 12 || 12;
            case"hh":
                return Z(aj(l) % 12 || 12);
            case"H":
                return aj(l);
            case"HH":
                return Z(aj(l));
            case"d":
                return aj(n);
            case"dd":
                return Z(aj(n));
            case"ddd":
                return am("dayNamesShort")[aj(ah)] || "";
            case"dddd":
                return am("dayNames")[aj(ah)] || "";
            case"M":
                return aj(h) + 1;
            case"MM":
                return Z(aj(h) + 1);
            case"MMM":
                return am("monthNamesShort")[aj(h)] || "";
            case"MMMM":
                return am("monthNames")[aj(h)] || "";
            case"yy":
                return (aj(N) + "").substring(2);
            case"yyyy":
                return aj(N);
            case"t":
                return ai(aj, am).substr(0, 1).toLowerCase();
            case"tt":
                return ai(aj, am).toLowerCase();
            case"T":
                return ai(aj, am).substr(0, 1);
            case"TT":
                return ai(aj, am);
            case"z":
            case"zz":
            case"zzz":
                return ap ? "Z" : g(an, al);
            case"w":
                return a(aj);
            case"ww":
                return Z(a(aj));
            case"S":
                var ao = aj(n);
                if (ao > 10 && ao < 20) {
                    return "th"
                }
                return ["st", "nd", "rd"][ao % 10 - 1] || "th"
        }
    }

    function g(ao, an) {
        var ap = ao.getTimezoneOffset();
        var ak = ap < 0 ? "+" : "-";
        var aj = D.floor(D.abs(ap) / 60);
        var am = D.abs(ap) % 60;
        var al = aj;
        if (an == "zz") {
            al = Z(aj)
        } else {
            if (an == "zzz") {
                al = Z(aj) + ":" + Z(am)
            }
        }
        return ak + al
    }

    function ai(aj, ak) {
        return aj(l) < 12 ? ak("amDesignator") : ak("pmDesignator")
    }

    ac(["getTime", "valueOf", "toDateString", "toTimeString", "toLocaleString", "toLocaleDateString", "toLocaleTimeString", "toJSON"], function (aj) {
        r[aj] = function () {
            return this[0][aj]()
        }
    });
    r.setTime = function (aj) {
        this[0].setTime(aj);
        return this
    };
    r.valid = af(V);

    function V(aj) {
        return !isNaN(+aj[0])
    }

    r.clone = function () {
        return new S(this)
    };
    r.clearTime = function () {
        return this.setHours(0, 0, 0, 0)
    };
    r.toDate = function () {
        return new X(+this[0])
    };
    S.now = function () {
        return +new X()
    };
    S.today = function () {
        return new S().clearTime()
    };
    S.UTC = b;
    S.getDaysInMonth = O;

    function E(aj) {
        var ak = new X(+aj[0]);
        if (W(aj)) {
            ak.toString = B
        }
        return ak
    }

    function P(ak, al, aj) {
        return ak["get" + (al ? "UTC" : "") + i[aj]]()
    }

    function J(al, am, ak, aj) {
        al["set" + (am ? "UTC" : "") + i[ak]].apply(al, aj)
    }

    function j(aj) {
        return new X(b(aj.getFullYear(), aj.getMonth(), aj.getDate(), aj.getHours(), aj.getMinutes(), aj.getSeconds(), aj.getMilliseconds()))
    }

    function e(aj) {
        return new X(aj.getUTCFullYear(), aj.getUTCMonth(), aj.getUTCDate(), aj.getUTCHours(), aj.getUTCMinutes(), aj.getUTCSeconds(), aj.getUTCMilliseconds())
    }

    function O(aj, ak) {
        return 32 - new X(b(aj, ak, 32)).getUTCDate()
    }

    function af(aj) {
        return function () {
            return aj.apply(s, [this].concat(w(arguments)))
        }
    }

    function o(ak) {
        var aj = w(arguments, 1);
        return function () {
            return ak.apply(s, aj.concat(w(arguments)))
        }
    }

    function w(ak, al, aj) {
        return ae.prototype.slice.call(ak, al || 0, aj === s ? ak.length : aj)
    }

    function ac(aj, al) {
        for (var ak = 0; ak < aj.length; ak++) {
            al(aj[ak], ak)
        }
    }

    function k(aj) {
        return typeof aj == "string"
    }

    function ag(aj) {
        return typeof aj == "number"
    }

    function R(aj) {
        return typeof aj == "boolean"
    }

    function v(aj) {
        return typeof aj == "function"
    }

    function Z(ak, aj) {
        aj = aj || 2;
        ak += "";
        while (ak.length < aj) {
            ak = "0" + ak
        }
        return ak
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = S
    }
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return S
        })
    } else {
        if (window.M && typeof window.M.define === "function") {
            window.M.define("xdate", function () {
                return S
            })
        }
    }
    return S
})(Date, Math, Array);
M.define("/js/hotel/module/FestivalDateConfig", function (d, c, e) {
    var a = d("xdate");
    var b = {
        specific: [{year: 2017, month: 1, day: 27, name: "除夕", shortName: "除夕"}, {
            year: 2017,
            month: 1,
            day: 28,
            name: "春节",
            shortName: "春节"
        }, {year: 2017, month: 2, day: 11, name: "元宵节", shortName: "元宵"}, {
            year: 2017,
            month: 4,
            day: 4,
            name: "清明",
            shortName: "清明"
        }, {year: 2017, month: 5, day: 30, name: "端午", shortName: "端午"}, {
            year: 2017,
            month: 10,
            day: 4,
            name: "中秋",
            shortName: "中秋"
        }],
        regular: [{month: 1, day: 1, name: "元旦", shortName: "元旦"}, {
            month: 2,
            day: 14,
            name: "情人节",
            shortName: null
        }, {month: 5, day: 1, name: "劳动节", shortName: "五一"}, {
            month: 10,
            day: 1,
            name: "国庆",
            shortName: "国庆"
        }, {month: 12, day: 25, name: "圣诞", shortName: "圣诞"}],
        getDateList: function () {
            var n = (new a()).getFullYear(), o = n + 1, p = this.specific.slice(), m = [], h = [];
            for (var l = 0; l < this.regular.length; l++) {
                var f = this.regular[l];
                for (var k = 0; k < p.length; k++) {
                    var g = p[k];
                    if (g.day === f.day && g.month === f.month && (g.year === n || g.year === o)) {
                        p.splice(k, 1)
                    }
                }
                m.push(M.mix({}, f, {year: n}));
                m.push(M.mix({}, f, {year: o}))
            }
            h = p.concat(m);
            h.sort(function (j, i) {
                if (j.year !== i.year) {
                    return j.year - i.year
                }
                if (j.month !== i.month) {
                    return j.month - i.month
                }
                return j.day - i.day
            });
            return h
        }
    };
    e.exports = b
});
/*! jQuery UI - v1.11.3 - 2015-02-15
* http://jqueryui.com
* Includes: core.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (window.M && typeof M.define === "function") {
            M.define("jqui-core", function () {
                return a(jQuery)
            })
        } else {
            a(jQuery)
        }
    }
}(function (e) {
    /*!
     * jQuery UI Core 1.11.3
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    e.ui = e.ui || {};
    e.extend(e.ui, {
        version: "1.11.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    e.fn.extend({
        scrollParent: function (k) {
            var j = this.css("position"), i = j === "absolute", l = k ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                m = this.parents().filter(function () {
                    var n = e(this);
                    if (i && n.css("position") === "static") {
                        return false
                    }
                    return l.test(n.css("overflow") + n.css("overflow-y") + n.css("overflow-x"))
                }).eq(0);
            return j === "fixed" || !m.length ? e(this[0].ownerDocument || document) : m
        }, uniqueId: (function () {
            var i = 0;
            return function () {
                return this.each(function () {
                    if (!this.id) {
                        this.id = "ui-id-" + (++i)
                    }
                })
            }
        })(), removeUniqueId: function () {
            return this.each(function () {
                if (/^ui-id-\d+$/.test(this.id)) {
                    e(this).removeAttr("id")
                }
            })
        }
    });

    function g(k, i) {
        var m, l, j, n = k.nodeName.toLowerCase();
        if ("area" === n) {
            m = k.parentNode;
            l = m.name;
            if (!k.href || !l || m.nodeName.toLowerCase() !== "map") {
                return false
            }
            j = e("img[usemap='#" + l + "']")[0];
            return !!j && f(j)
        }
        return (/^(input|select|textarea|button|object)$/.test(n) ? !k.disabled : "a" === n ? k.href || i : i) && f(k)
    }

    function f(i) {
        return e.expr.filters.visible(i) && !e(i).parents().addBack().filter(function () {
            return e.css(this, "visibility") === "hidden"
        }).length
    }

    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (i) {
            return function (j) {
                return !!e.data(j, i)
            }
        }) : function (l, k, j) {
            return !!e.data(l, j[3])
        }, focusable: function (i) {
            return g(i, !isNaN(e.attr(i, "tabindex")))
        }, tabbable: function (k) {
            var i = e.attr(k, "tabindex"), j = isNaN(i);
            return (j || i >= 0) && g(k, !j)
        }
    });
    if (!e("<a>").outerWidth(1).jquery) {
        e.each(["Width", "Height"], function (l, j) {
            var k = j === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], m = j.toLowerCase(), o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };

            function n(q, p, i, r) {
                e.each(k, function () {
                    p -= parseFloat(e.css(q, "padding" + this)) || 0;
                    if (i) {
                        p -= parseFloat(e.css(q, "border" + this + "Width")) || 0
                    }
                    if (r) {
                        p -= parseFloat(e.css(q, "margin" + this)) || 0
                    }
                });
                return p
            }

            e.fn["inner" + j] = function (i) {
                if (i === undefined) {
                    return o["inner" + j].call(this)
                }
                return this.each(function () {
                    e(this).css(m, n(this, i) + "px")
                })
            };
            e.fn["outer" + j] = function (i, p) {
                if (typeof i !== "number") {
                    return o["outer" + j].call(this, i)
                }
                return this.each(function () {
                    e(this).css(m, n(this, i, true, p) + "px")
                })
            }
        })
    }
    if (!e.fn.addBack) {
        e.fn.addBack = function (i) {
            return this.add(i == null ? this.prevObject : this.prevObject.filter(i))
        }
    }
    if (e("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        e.fn.removeData = (function (i) {
            return function (j) {
                if (arguments.length) {
                    return i.call(this, e.camelCase(j))
                } else {
                    return i.call(this)
                }
            }
        })(e.fn.removeData)
    }
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    e.fn.extend({
        focus: (function (i) {
            return function (j, k) {
                return typeof j === "number" ? this.each(function () {
                    var l = this;
                    setTimeout(function () {
                        e(l).focus();
                        if (k) {
                            k.call(l)
                        }
                    }, j)
                }) : i.apply(this, arguments)
            }
        })(e.fn.focus), disableSelection: (function () {
            var i = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(i + ".ui-disableSelection", function (j) {
                    j.preventDefault()
                })
            }
        })(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (l) {
            if (l !== undefined) {
                return this.css("zIndex", l)
            }
            if (this.length) {
                var j = e(this[0]), i, k;
                while (j.length && j[0] !== document) {
                    i = j.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        k = parseInt(j.css("zIndex"), 10);
                        if (!isNaN(k) && k !== 0) {
                            return k
                        }
                    }
                    j = j.parent()
                }
            }
            return 0
        }
    });
    e.ui.plugin = {
        add: function (k, l, n) {
            var j, m = e.ui[k].prototype;
            for (j in n) {
                m.plugins[j] = m.plugins[j] || [];
                m.plugins[j].push([l, n[j]])
            }
        }, call: function (j, m, l, k) {
            var n, o = j.plugins[m];
            if (!o) {
                return
            }
            if (!k && (!j.element[0].parentNode || j.element[0].parentNode.nodeType === 11)) {
                return
            }
            for (n = 0; n < o.length; n++) {
                if (j.options[o[n][0]]) {
                    o[n][1].apply(j.element, l)
                }
            }
        }
    };
    /*!
     * jQuery UI Widget 1.11.3
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */
    var h = 0, b = Array.prototype.slice;
    e.cleanData = (function (i) {
        return function (j) {
            var l, m, k;
            for (k = 0; (m = j[k]) != null; k++) {
                try {
                    l = e._data(m, "events");
                    if (l && l.remove) {
                        e(m).triggerHandler("remove")
                    }
                } catch (n) {
                }
            }
            i(j)
        }
    })(e.cleanData);
    e.widget = function (i, j, q) {
        var n, o, l, p, k = {}, m = i.split(".")[0];
        i = i.split(".")[1];
        n = m + "-" + i;
        if (!q) {
            q = j;
            j = e.Widget
        }
        e.expr[":"][n.toLowerCase()] = function (r) {
            return !!e.data(r, n)
        };
        e[m] = e[m] || {};
        o = e[m][i];
        l = e[m][i] = function (r, s) {
            if (!this._createWidget) {
                return new l(r, s)
            }
            if (arguments.length) {
                this._createWidget(r, s)
            }
        };
        e.extend(l, o, {version: q.version, _proto: e.extend({}, q), _childConstructors: []});
        p = new j();
        p.options = e.widget.extend({}, p.options);
        e.each(q, function (s, r) {
            if (!e.isFunction(r)) {
                k[s] = r;
                return
            }
            k[s] = (function () {
                var t = function () {
                    return j.prototype[s].apply(this, arguments)
                }, u = function (v) {
                    return j.prototype[s].apply(this, v)
                };
                return function () {
                    var x = this._super, v = this._superApply, w;
                    this._super = t;
                    this._superApply = u;
                    w = r.apply(this, arguments);
                    this._super = x;
                    this._superApply = v;
                    return w
                }
            })()
        });
        l.prototype = e.widget.extend(p, {widgetEventPrefix: o ? (p.widgetEventPrefix || i) : i}, k, {
            constructor: l,
            namespace: m,
            widgetName: i,
            widgetFullName: n
        });
        if (o) {
            e.each(o._childConstructors, function (s, t) {
                var r = t.prototype;
                e.widget(r.namespace + "." + r.widgetName, l, t._proto)
            });
            delete o._childConstructors
        } else {
            j._childConstructors.push(l)
        }
        e.widget.bridge(i, l);
        return l
    };
    e.widget.extend = function (n) {
        var j = b.call(arguments, 1), m = 0, i = j.length, k, l;
        for (; m < i; m++) {
            for (k in j[m]) {
                l = j[m][k];
                if (j[m].hasOwnProperty(k) && l !== undefined) {
                    if (e.isPlainObject(l)) {
                        n[k] = e.isPlainObject(n[k]) ? e.widget.extend({}, n[k], l) : e.widget.extend({}, l)
                    } else {
                        n[k] = l
                    }
                }
            }
        }
        return n
    };
    e.widget.bridge = function (j, i) {
        var k = i.prototype.widgetFullName || j;
        e.fn[j] = function (n) {
            var l = typeof n === "string", m = b.call(arguments, 1), o = this;
            if (l) {
                this.each(function () {
                    var q, p = e.data(this, k);
                    if (n === "instance") {
                        o = p;
                        return false
                    }
                    if (!p) {
                        return e.error("cannot call methods on " + j + " prior to initialization; attempted to call method '" + n + "'")
                    }
                    if (!e.isFunction(p[n]) || n.charAt(0) === "_") {
                        return e.error("no such method '" + n + "' for " + j + " widget instance")
                    }
                    q = p[n].apply(p, m);
                    if (q !== p && q !== undefined) {
                        o = q && q.jquery ? o.pushStack(q.get()) : q;
                        return false
                    }
                })
            } else {
                if (m.length) {
                    n = e.widget.extend.apply(null, [n].concat(m))
                }
                this.each(function () {
                    var p = e.data(this, k);
                    if (p) {
                        p.option(n || {});
                        if (p._init) {
                            p._init()
                        }
                    } else {
                        e.data(this, k, new i(n, this))
                    }
                })
            }
            return o
        }
    };
    e.Widget = function () {
    };
    e.Widget._childConstructors = [];
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: false, create: null},
        _createWidget: function (i, j) {
            j = e(j || this.defaultElement || this)[0];
            this.element = e(j);
            this.uuid = h++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = e();
            this.hoverable = e();
            this.focusable = e();
            if (j !== this) {
                e.data(j, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function (k) {
                        if (k.target === j) {
                            this.destroy()
                        }
                    }
                });
                this.document = e(j.style ? j.ownerDocument : j.document || j);
                this.window = e(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), i);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (m, n) {
            var j = m, o, l, k;
            if (arguments.length === 0) {
                return e.widget.extend({}, this.options)
            }
            if (typeof m === "string") {
                j = {};
                o = m.split(".");
                m = o.shift();
                if (o.length) {
                    l = j[m] = e.widget.extend({}, this.options[m]);
                    for (k = 0; k < o.length - 1; k++) {
                        l[o[k]] = l[o[k]] || {};
                        l = l[o[k]]
                    }
                    m = o.pop();
                    if (arguments.length === 1) {
                        return l[m] === undefined ? null : l[m]
                    }
                    l[m] = n
                } else {
                    if (arguments.length === 1) {
                        return this.options[m] === undefined ? null : this.options[m]
                    }
                    j[m] = n
                }
            }
            this._setOptions(j);
            return this
        },
        _setOptions: function (i) {
            var j;
            for (j in i) {
                this._setOption(j, i[j])
            }
            return this
        },
        _setOption: function (i, j) {
            this.options[i] = j;
            if (i === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled", !!j);
                if (j) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus")
                }
            }
            return this
        },
        enable: function () {
            return this._setOptions({disabled: false})
        },
        disable: function () {
            return this._setOptions({disabled: true})
        },
        _on: function (l, k, j) {
            var m, i = this;
            if (typeof l !== "boolean") {
                j = k;
                k = l;
                l = false
            }
            if (!j) {
                j = k;
                k = this.element;
                m = this.widget()
            } else {
                k = m = e(k);
                this.bindings = this.bindings.add(k)
            }
            e.each(j, function (s, r) {
                function p() {
                    if (!l && (i.options.disabled === true || e(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof r === "string" ? i[r] : r).apply(i, arguments)
                }

                if (typeof r !== "string") {
                    p.guid = r.guid = r.guid || p.guid || e.guid++
                }
                var q = s.match(/^([\w:-]*)\s*(.*)$/), o = q[1] + i.eventNamespace, n = q[2];
                if (n) {
                    m.delegate(n, o, p)
                } else {
                    k.bind(o, p)
                }
            })
        },
        _off: function (j, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            j.unbind(i).undelegate(i);
            this.bindings = e(this.bindings.not(j).get());
            this.focusable = e(this.focusable.not(j).get());
            this.hoverable = e(this.hoverable.not(j).get())
        },
        _delay: function (l, k) {
            function j() {
                return (typeof l === "string" ? i[l] : l).apply(i, arguments)
            }

            var i = this;
            return setTimeout(j, k || 0)
        },
        _hoverable: function (i) {
            this.hoverable = this.hoverable.add(i);
            this._on(i, {
                mouseenter: function (j) {
                    e(j.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (j) {
                    e(j.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (i) {
            this.focusable = this.focusable.add(i);
            this._on(i, {
                focusin: function (j) {
                    e(j.currentTarget).addClass("ui-state-focus")
                }, focusout: function (j) {
                    e(j.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (i, j, k) {
            var n, m, l = this.options[i];
            k = k || {};
            j = e.Event(j);
            j.type = (i === this.widgetEventPrefix ? i : this.widgetEventPrefix + i).toLowerCase();
            j.target = this.element[0];
            m = j.originalEvent;
            if (m) {
                for (n in m) {
                    if (!(n in j)) {
                        j[n] = m[n]
                    }
                }
            }
            this.element.trigger(j, k);
            return !(e.isFunction(l) && l.apply(this.element[0], [j].concat(k)) === false || j.isDefaultPrevented())
        }
    };
    e.each({show: "fadeIn", hide: "fadeOut"}, function (j, i) {
        e.Widget.prototype["_" + j] = function (m, l, o) {
            if (typeof l === "string") {
                l = {effect: l}
            }
            var n, k = !l ? j : l === true || typeof l === "number" ? i : l.effect || i;
            l = l || {};
            if (typeof l === "number") {
                l = {duration: l}
            }
            n = !e.isEmptyObject(l);
            l.complete = o;
            if (l.delay) {
                m.delay(l.delay)
            }
            if (n && e.effects && e.effects.effect[k]) {
                m[j](l)
            } else {
                if (k !== j && m[k]) {
                    m[k](l.duration, l.easing, o)
                } else {
                    m.queue(function (p) {
                        e(this)[j]();
                        if (o) {
                            o.call(m[0])
                        }
                        p()
                    })
                }
            }
        }
    });
    var d = e.widget;
    /*!
     * jQuery UI Mouse 1.11.3
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/mouse/
     */
    var a = false;
    e(document).mouseup(function () {
        a = false
    });
    var c = e.widget("ui.mouse", {
        version: "1.11.3",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var i = this;
            this.element.bind("mousedown." + this.widgetName, function (j) {
                return i._mouseDown(j)
            }).bind("click." + this.widgetName, function (j) {
                if (true === e.data(j.target, i.widgetName + ".preventClickEvent")) {
                    e.removeData(j.target, i.widgetName + ".preventClickEvent");
                    j.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function (k) {
            if (a) {
                return
            }
            this._mouseMoved = false;
            (this._mouseStarted && this._mouseUp(k));
            this._mouseDownEvent = k;
            var j = this, l = (k.which === 1),
                i = (typeof this.options.cancel === "string" && k.target.nodeName ? e(k.target).closest(this.options.cancel).length : false);
            if (!l || i || !this._mouseCapture(k)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function () {
                    j.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(k) && this._mouseDelayMet(k)) {
                this._mouseStarted = (this._mouseStart(k) !== false);
                if (!this._mouseStarted) {
                    k.preventDefault();
                    return true
                }
            }
            if (true === e.data(k.target, this.widgetName + ".preventClickEvent")) {
                e.removeData(k.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function (m) {
                return j._mouseMove(m)
            };
            this._mouseUpDelegate = function (m) {
                return j._mouseUp(m)
            };
            this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            k.preventDefault();
            a = true;
            return true
        },
        _mouseMove: function (i) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !i.button) {
                    return this._mouseUp(i)
                } else {
                    if (!i.which) {
                        return this._mouseUp(i)
                    }
                }
            }
            if (i.which || i.button) {
                this._mouseMoved = true
            }
            if (this._mouseStarted) {
                this._mouseDrag(i);
                return i.preventDefault()
            }
            if (this._mouseDistanceMet(i) && this._mouseDelayMet(i)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, i) !== false);
                (this._mouseStarted ? this._mouseDrag(i) : this._mouseUp(i))
            }
            return !this._mouseStarted
        },
        _mouseUp: function (i) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (i.target === this._mouseDownEvent.target) {
                    e.data(i.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(i)
            }
            a = false;
            return false
        },
        _mouseDistanceMet: function (i) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - i.pageX), Math.abs(this._mouseDownEvent.pageY - i.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return true
        }
    })
}));
/*!
 * jQuery UI Datepicker 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
M.define("jqui-datepicker", function (d) {
    d("jqui-core");
    $.extend($.ui, {datepicker: {version: "1.11.3"}});
    var g;

    function h(j) {
        var i, k;
        while (j.length && j[0] !== document) {
            i = j.css("position");
            if (i === "absolute" || i === "relative" || i === "fixed") {
                k = parseInt(j.css("zIndex"), 10);
                if (!isNaN(k) && k !== 0) {
                    return k
                }
            }
            j = j.parent()
        }
        return 0
    }

    function c() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            renderDay: null,
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        $.extend(this._defaults, this.regional[""]);
        this.regional.en = $.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = $.extend(true, {}, this.regional.en);
        this.dpDiv = b($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    $.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (i) {
            a(this._defaults, i || {});
            return this
        },
        _attachDatepicker: function (l, i) {
            var m, k, j;
            m = l.nodeName.toLowerCase();
            k = (m === "div" || m === "span");
            if (!l.id) {
                this.uuid += 1;
                l.id = "dp" + this.uuid
            }
            j = this._newInst($(l), k);
            j.settings = $.extend({}, i || {});
            if (m === "input") {
                this._connectDatepicker(l, j)
            } else {
                if (k) {
                    this._inlineDatepicker(l, j)
                }
            }
        },
        _newInst: function (j, i) {
            var k = j[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: k,
                input: j,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: (!i ? this.dpDiv : b($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
            }
        },
        _connectDatepicker: function (k, j) {
            var i = $(k);
            j.append = $([]);
            j.trigger = $([]);
            if (i.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(i, j);
            i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(j);
            $.data(k, "datepicker", j);
            if (j.settings.disabled) {
                this._disableDatepicker(k)
            }
        },
        _attachments: function (k, n) {
            var j, m, i, o = this._get(n, "appendText"), l = this._get(n, "isRTL");
            if (n.append) {
                n.append.remove()
            }
            if (o) {
                n.append = $("<span class='" + this._appendClass + "'>" + o + "</span>");
                k[l ? "before" : "after"](n.append)
            }
            k.unbind("focus", this._showDatepicker);
            if (n.trigger) {
                n.trigger.remove()
            }
            j = this._get(n, "showOn");
            if (j === "focus" || j === "both") {
                k.focus(this._showDatepicker)
            }
            if (j === "button" || j === "both") {
                m = this._get(n, "buttonText");
                i = this._get(n, "buttonImage");
                n.trigger = $(this._get(n, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: i,
                    alt: m,
                    title: m
                }) : $("<button type='button'></button>").addClass(this._triggerClass).html(!i ? m : $("<img/>").attr({
                    src: i,
                    alt: m,
                    title: m
                })));
                k[l ? "before" : "after"](n.trigger);
                n.trigger.click(function () {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === k[0]) {
                        $.datepicker._hideDatepicker()
                    } else {
                        if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== k[0]) {
                            $.datepicker._hideDatepicker();
                            $.datepicker._showDatepicker(k[0])
                        } else {
                            $.datepicker._showDatepicker(k[0])
                        }
                    }
                    return false
                })
            }
        },
        _autoSize: function (p) {
            if (this._get(p, "autoSize") && !p.inline) {
                var m, k, l, o, n = new Date(2009, 12 - 1, 20), j = this._get(p, "dateFormat");
                if (j.match(/[DM]/)) {
                    m = function (i) {
                        k = 0;
                        l = 0;
                        for (o = 0; o < i.length; o++) {
                            if (i[o].length > k) {
                                k = i[o].length;
                                l = o
                            }
                        }
                        return l
                    };
                    n.setMonth(m(this._get(p, (j.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    n.setDate(m(this._get(p, (j.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - n.getDay())
                }
                p.input.attr("size", this._formatDate(p, n).length)
            }
        },
        _inlineDatepicker: function (j, i) {
            var k = $(j);
            if (k.hasClass(this.markerClassName)) {
                return
            }
            k.addClass(this.markerClassName).append(i.dpDiv);
            $.data(j, "datepicker", i);
            this._setDate(i, this._getDefaultDate(i), true);
            this._updateDatepicker(i);
            this._updateAlternate(i);
            if (i.settings.disabled) {
                this._disableDatepicker(j)
            }
            i.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function (p, j, n, k, o) {
            var i, s, m, r, q, l = this._dialogInst;
            if (!l) {
                this.uuid += 1;
                i = "dp" + this.uuid;
                this._dialogInput = $("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                l = this._dialogInst = this._newInst(this._dialogInput, false);
                l.settings = {};
                $.data(this._dialogInput[0], "datepicker", l)
            }
            a(l.settings, k || {});
            j = (j && j.constructor === Date ? this._formatDate(l, j) : j);
            this._dialogInput.val(j);
            this._pos = (o ? (o.length ? o : [o.pageX, o.pageY]) : null);
            if (!this._pos) {
                s = document.documentElement.clientWidth;
                m = document.documentElement.clientHeight;
                r = document.documentElement.scrollLeft || document.body.scrollLeft;
                q = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(s / 2) - 100 + r, (m / 2) - 150 + q]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            l.settings.onSelect = n;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv)
            }
            $.data(this._dialogInput[0], "datepicker", l);
            return this
        },
        _destroyDatepicker: function (k) {
            var l, i = $(k), j = $.data(k, "datepicker");
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            l = k.nodeName.toLowerCase();
            $.removeData(k, "datepicker");
            if (l === "input") {
                j.append.remove();
                j.trigger.remove();
                i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (l === "div" || l === "span") {
                    i.removeClass(this.markerClassName).empty()
                }
            }
            if (g === j) {
                g = null
            }
        },
        _enableDatepicker: function (l) {
            var m, k, i = $(l), j = $.data(l, "datepicker");
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            m = l.nodeName.toLowerCase();
            if (m === "input") {
                l.disabled = false;
                j.trigger.filter("button").each(function () {
                    this.disabled = false
                }).end().filter("img").css({opacity: "1.0", cursor: ""})
            } else {
                if (m === "div" || m === "span") {
                    k = i.children("." + this._inlineClass);
                    k.children().removeClass("ui-state-disabled");
                    k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function (n) {
                return (n === l ? null : n)
            })
        },
        _disableDatepicker: function (l) {
            var m, k, i = $(l), j = $.data(l, "datepicker");
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            m = l.nodeName.toLowerCase();
            if (m === "input") {
                l.disabled = true;
                j.trigger.filter("button").each(function () {
                    this.disabled = true
                }).end().filter("img").css({opacity: "0.5", cursor: "default"})
            } else {
                if (m === "div" || m === "span") {
                    k = i.children("." + this._inlineClass);
                    k.children().addClass("ui-state-disabled");
                    k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function (n) {
                return (n === l ? null : n)
            });
            this._disabledInputs[this._disabledInputs.length] = l
        },
        _isDisabledDatepicker: function (k) {
            if (!k) {
                return false
            }
            for (var j = 0; j < this._disabledInputs.length; j++) {
                if (this._disabledInputs[j] === k) {
                    return true
                }
            }
            return false
        },
        _getInst: function (j) {
            try {
                return $.data(j, "datepicker")
            } catch (i) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (o, j, n) {
            var k, i, m, p, l = this._getInst(o);
            if (arguments.length === 2 && typeof j === "string") {
                return (j === "defaults" ? $.extend({}, $.datepicker._defaults) : (l ? (j === "all" ? $.extend({}, l.settings) : this._get(l, j)) : null))
            }
            k = j || {};
            if (typeof j === "string") {
                k = {};
                k[j] = n
            }
            if (l) {
                if (this._curInst === l) {
                    this._hideDatepicker()
                }
                i = this._getDateDatepicker(o, true);
                m = this._getMinMaxDate(l, "min");
                p = this._getMinMaxDate(l, "max");
                a(l.settings, k);
                if (m !== null && k.dateFormat !== undefined && k.minDate === undefined) {
                    l.settings.minDate = this._formatDate(l, m)
                }
                if (p !== null && k.dateFormat !== undefined && k.maxDate === undefined) {
                    l.settings.maxDate = this._formatDate(l, p)
                }
                if ("disabled" in k) {
                    if (k.disabled) {
                        this._disableDatepicker(o)
                    } else {
                        this._enableDatepicker(o)
                    }
                }
                this._attachments($(o), l);
                this._autoSize(l);
                this._setDate(l, i);
                this._updateAlternate(l);
                this._updateDatepicker(l)
            }
        },
        _changeDatepicker: function (k, i, j) {
            this._optionDatepicker(k, i, j)
        },
        _refreshDatepicker: function (j) {
            var i = this._getInst(j);
            if (i) {
                this._updateDatepicker(i)
            }
        },
        _setDateDatepicker: function (k, i) {
            var j = this._getInst(k);
            if (j) {
                this._setDate(j, i);
                this._updateDatepicker(j);
                this._updateAlternate(j)
            }
        },
        _getDateDatepicker: function (k, i) {
            var j = this._getInst(k);
            if (j && !j.inline) {
                this._setDateFromField(j, i)
            }
            return (j ? this._getDate(j) : null)
        },
        _doKeyDown: function (l) {
            var j, i, n, m = $.datepicker._getInst(l.target), o = true, k = m.dpDiv.is(".ui-datepicker-rtl");
            m._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (l.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker();
                        o = false;
                        break;
                    case 13:
                        n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", m.dpDiv);
                        if (n[0]) {
                            $.datepicker._selectDay(l.target, m.selectedMonth, m.selectedYear, n[0])
                        }
                        j = $.datepicker._get(m, "onSelect");
                        if (j) {
                            i = $.datepicker._formatDate(m);
                            j.apply((m.input ? m.input[0] : null), [i, m])
                        } else {
                            $.datepicker._hideDatepicker()
                        }
                        return false;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(l.target, (l.ctrlKey ? -$.datepicker._get(m, "stepBigMonths") : -$.datepicker._get(m, "stepMonths")), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(l.target, (l.ctrlKey ? +$.datepicker._get(m, "stepBigMonths") : +$.datepicker._get(m, "stepMonths")), "M");
                        break;
                    case 35:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._clearDate(l.target)
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 36:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._gotoToday(l.target)
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 37:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._adjustDate(l.target, (k ? +1 : -1), "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        if (l.originalEvent.altKey) {
                            $.datepicker._adjustDate(l.target, (l.ctrlKey ? -$.datepicker._get(m, "stepBigMonths") : -$.datepicker._get(m, "stepMonths")), "M")
                        }
                        break;
                    case 38:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._adjustDate(l.target, -7, "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 39:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._adjustDate(l.target, (k ? -1 : +1), "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        if (l.originalEvent.altKey) {
                            $.datepicker._adjustDate(l.target, (l.ctrlKey ? +$.datepicker._get(m, "stepBigMonths") : +$.datepicker._get(m, "stepMonths")), "M")
                        }
                        break;
                    case 40:
                        if (l.ctrlKey || l.metaKey) {
                            $.datepicker._adjustDate(l.target, +7, "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    default:
                        o = false
                }
            } else {
                if (l.keyCode === 36 && l.ctrlKey) {
                    $.datepicker._showDatepicker(this)
                } else {
                    o = false
                }
            }
            if (o) {
                l.preventDefault();
                l.stopPropagation()
            }
        },
        _doKeyPress: function (k) {
            var j, i, l = $.datepicker._getInst(k.target);
            if ($.datepicker._get(l, "constrainInput")) {
                j = $.datepicker._possibleChars($.datepicker._get(l, "dateFormat"));
                i = String.fromCharCode(k.charCode == null ? k.keyCode : k.charCode);
                return k.ctrlKey || k.metaKey || (i < " " || !j || j.indexOf(i) > -1)
            }
        },
        _doKeyUp: function (k) {
            var i, l = $.datepicker._getInst(k.target);
            if (l.input.val() !== l.lastVal) {
                try {
                    i = $.datepicker.parseDate($.datepicker._get(l, "dateFormat"), (l.input ? l.input.val() : null), $.datepicker._getFormatConfig(l));
                    if (i) {
                        $.datepicker._setDateFromField(l);
                        $.datepicker._updateAlternate(l);
                        $.datepicker._updateDatepicker(l)
                    }
                } catch (j) {
                }
            }
            return true
        },
        _showDatepicker: function (j) {
            j = j.target || j;
            if (j.nodeName.toLowerCase() !== "input") {
                j = $("input", j.parentNode)[0]
            }
            if ($.datepicker._isDisabledDatepicker(j) || $.datepicker._lastInput === j) {
                return
            }
            var l, p, k, n, o, i, m;
            l = $.datepicker._getInst(j);
            if ($.datepicker._curInst && $.datepicker._curInst !== l) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (l && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0])
                }
            }
            p = $.datepicker._get(l, "beforeShow");
            k = p ? p.apply(j, [j, l]) : {};
            if (k === false) {
                return
            }
            a(l.settings, k);
            l.lastVal = null;
            $.datepicker._lastInput = j;
            $.datepicker._setDateFromField(l);
            if ($.datepicker._inDialog) {
                j.value = ""
            }
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(j);
                $.datepicker._pos[1] += j.offsetHeight
            }
            n = false;
            $(j).parents().each(function () {
                n |= $(this).css("position") === "fixed";
                return !n
            });
            o = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
            $.datepicker._pos = null;
            l.dpDiv.empty();
            l.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
            $.datepicker._updateDatepicker(l);
            o = $.datepicker._checkOffset(l, o, n);
            l.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ? "static" : (n ? "fixed" : "absolute")),
                display: "none",
                left: o.left + "px",
                top: o.top + "px"
            });
            if (!l.inline) {
                i = $.datepicker._get(l, "showAnim");
                m = $.datepicker._get(l, "duration");
                l.dpDiv.css("z-index", h($(j)) + 1);
                $.datepicker._datepickerShowing = true;
                if ($.effects && $.effects.effect[i]) {
                    l.dpDiv.show(i, $.datepicker._get(l, "showOptions"), m)
                } else {
                    l.dpDiv[i || "show"](i ? m : null)
                }
                if ($.datepicker._shouldFocusInput(l)) {
                    l.input.focus()
                }
                $.datepicker._curInst = l
            }
        },
        _updateDatepicker: function (l) {
            this.maxRows = 4;
            g = l;
            l.dpDiv.empty().append(this._generateHTML(l));
            this._attachHandlers(l);
            var n, i = this._getNumberOfMonths(l), m = i[1], k = 17, j = l.dpDiv.find("." + this._dayOverClass + " a");
            if (j.length > 0) {
                f.apply(j.get(0))
            }
            l.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (m > 1) {
                l.dpDiv.addClass("ui-datepicker-multi-" + m).css("width", (k * m) + "em")
            }
            l.dpDiv[(i[0] !== 1 || i[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            l.dpDiv[(this._get(l, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (l === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(l)) {
                l.input.focus()
            }
            if (l.yearshtml) {
                n = l.yearshtml;
                setTimeout(function () {
                    if (n === l.yearshtml && l.yearshtml) {
                        l.dpDiv.find("select.ui-datepicker-year:first").replaceWith(l.yearshtml)
                    }
                    n = l.yearshtml = null
                }, 0)
            }
        },
        _shouldFocusInput: function (i) {
            return i.input && i.input.is(":visible") && !i.input.is(":disabled") && !i.input.is(":focus")
        },
        _checkOffset: function (n, l, k) {
            var m = n.dpDiv.outerWidth(), q = n.dpDiv.outerHeight(), p = n.input ? n.input.outerWidth() : 0,
                i = n.input ? n.input.outerHeight() : 0,
                o = document.documentElement.clientWidth + (k ? 0 : $(document).scrollLeft()),
                j = document.documentElement.clientHeight + (k ? 0 : $(document).scrollTop());
            l.left -= (this._get(n, "isRTL") ? (m - p) : 0);
            l.left -= (k && l.left === n.input.offset().left) ? $(document).scrollLeft() : 0;
            l.top -= (k && l.top === (n.input.offset().top + i)) ? $(document).scrollTop() : 0;
            l.left -= Math.min(l.left, (l.left + m > o && o > m) ? Math.abs(l.left + m - o) : 0);
            l.top -= Math.min(l.top, (l.top + q > j && j > q) ? Math.abs(q + i) : 0);
            return l
        },
        _findPos: function (l) {
            var i, k = this._getInst(l), j = this._get(k, "isRTL");
            while (l && (l.type === "hidden" || l.nodeType !== 1 || $.expr.filters.hidden(l))) {
                l = l[j ? "previousSibling" : "nextSibling"]
            }
            i = $(l).offset();
            return [i.left, i.top]
        },
        _hideDatepicker: function (k) {
            var j, n, m, i, l = this._curInst;
            if (!l || (k && l !== $.data(k, "datepicker"))) {
                return
            }
            if (this._datepickerShowing) {
                j = this._get(l, "showAnim");
                n = this._get(l, "duration");
                m = function () {
                    $.datepicker._tidyDialog(l)
                };
                if ($.effects && ($.effects.effect[j] || $.effects[j])) {
                    l.dpDiv.hide(j, $.datepicker._get(l, "showOptions"), n, m)
                } else {
                    l.dpDiv[(j === "slideDown" ? "slideUp" : (j === "fadeIn" ? "fadeOut" : "hide"))]((j ? n : null), m)
                }
                if (!j) {
                    m()
                }
                this._datepickerShowing = false;
                i = this._get(l, "onClose");
                if (i) {
                    i.apply((l.input ? l.input[0] : null), [(l.input ? l.input.val() : ""), l])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({position: "absolute", left: "0", top: "-100px"});
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function (i) {
            i.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (j) {
            if (!$.datepicker._curInst) {
                return
            }
            var i = $(j.target), k = $.datepicker._getInst(i[0]);
            if (((i[0].id !== $.datepicker._mainDivId && i.parents("#" + $.datepicker._mainDivId).length === 0 && !i.hasClass($.datepicker.markerClassName) && !i.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || (i.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== k)) {
                $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (m, l, k) {
            var j = $(m), i = this._getInst(j[0]);
            if (this._isDisabledDatepicker(j[0])) {
                return
            }
            this._adjustInstDate(i, l + (k === "M" ? this._get(i, "showCurrentAtPos") : 0), k);
            this._updateDatepicker(i)
        },
        _gotoToday: function (l) {
            var i, k = $(l), j = this._getInst(k[0]);
            if (this._get(j, "gotoCurrent") && j.currentDay) {
                j.selectedDay = j.currentDay;
                j.drawMonth = j.selectedMonth = j.currentMonth;
                j.drawYear = j.selectedYear = j.currentYear
            } else {
                i = new Date();
                j.selectedDay = i.getDate();
                j.drawMonth = j.selectedMonth = i.getMonth();
                j.drawYear = j.selectedYear = i.getFullYear()
            }
            this._notifyChange(j);
            this._adjustDate(k)
        },
        _selectMonthYear: function (m, i, l) {
            var k = $(m), j = this._getInst(k[0]);
            j["selected" + (l === "M" ? "Month" : "Year")] = j["draw" + (l === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(j);
            this._adjustDate(k)
        },
        _selectDay: function (n, l, i, m) {
            var j, k = $(n);
            if ($(m).hasClass(this._unselectableClass) || this._isDisabledDatepicker(k[0])) {
                return
            }
            j = this._getInst(k[0]);
            j.selectedDay = j.currentDay = $(m).data("date");
            j.selectedMonth = j.currentMonth = l;
            j.selectedYear = j.currentYear = i;
            this._selectDate(n, this._formatDate(j, j.currentDay, j.currentMonth, j.currentYear))
        },
        _clearDate: function (j) {
            var i = $(j);
            this._selectDate(i, "")
        },
        _selectDate: function (m, i) {
            var j, l = $(m), k = this._getInst(l[0]);
            i = (i != null ? i : this._formatDate(k));
            if (k.input) {
                k.input.val(i)
            }
            this._updateAlternate(k);
            j = this._get(k, "onSelect");
            if (j) {
                j.apply((k.input ? k.input[0] : null), [i, k])
            } else {
                if (k.input) {
                    k.input.trigger("change")
                }
            }
            if (k.inline) {
                this._updateDatepicker(k)
            } else {
                this._hideDatepicker();
                this._lastInput = k.input[0];
                if (typeof(k.input[0]) !== "object") {
                    k.input.focus()
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function (m) {
            var l, k, i, j = this._get(m, "altField");
            if (j) {
                l = this._get(m, "altFormat") || this._get(m, "dateFormat");
                k = this._getDate(m);
                i = this.formatDate(l, k, this._getFormatConfig(m));
                $(j).each(function () {
                    $(this).val(i)
                })
            }
        },
        noWeekends: function (j) {
            var i = j.getDay();
            return [(i > 0 && i < 6), ""]
        },
        iso8601Week: function (i) {
            var j, k = new Date(i.getTime());
            k.setDate(k.getDate() + 4 - (k.getDay() || 7));
            j = k.getTime();
            k.setMonth(0);
            k.setDate(1);
            return Math.floor(Math.round((j - k) / 86400000) / 7) + 1
        },
        parseDate: function (y, t, A) {
            if (y == null || t == null) {
                throw"Invalid arguments"
            }
            t = (typeof t === "object" ? t.toString() : t + "");
            if (t === "") {
                return null
            }
            var l, v, j, z = 0, o = (A ? A.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                k = (typeof o !== "string" ? o : new Date().getFullYear() % 100 + parseInt(o, 10)),
                r = (A ? A.dayNamesShort : null) || this._defaults.dayNamesShort,
                C = (A ? A.dayNames : null) || this._defaults.dayNames,
                i = (A ? A.monthNamesShort : null) || this._defaults.monthNamesShort,
                m = (A ? A.monthNames : null) || this._defaults.monthNames, n = -1, D = -1, x = -1, q = -1, w = false,
                B, s = function (F) {
                    var G = (l + 1 < y.length && y.charAt(l + 1) === F);
                    if (G) {
                        l++
                    }
                    return G
                }, E = function (H) {
                    var F = s(H), I = (H === "@" ? 14 : (H === "!" ? 20 : (H === "y" && F ? 4 : (H === "o" ? 3 : 2)))),
                        K = (H === "y" ? I : 1), J = new RegExp("^\\d{" + K + "," + I + "}"), G = t.substring(z).match(J);
                    if (!G) {
                        throw"Missing number at position " + z
                    }
                    z += G[0].length;
                    return parseInt(G[0], 10)
                }, p = function (G, H, J) {
                    var F = -1, I = $.map(s(G) ? J : H, function (L, K) {
                        return [[K, L]]
                    }).sort(function (L, K) {
                        return -(L[1].length - K[1].length)
                    });
                    $.each(I, function (L, N) {
                        var K = N[1];
                        if (t.substr(z, K.length).toLowerCase() === K.toLowerCase()) {
                            F = N[0];
                            z += K.length;
                            return false
                        }
                    });
                    if (F !== -1) {
                        return F + 1
                    } else {
                        throw"Unknown name at position " + z
                    }
                }, u = function () {
                    if (t.charAt(z) !== y.charAt(l)) {
                        throw"Unexpected literal at position " + z
                    }
                    z++
                };
            for (l = 0; l < y.length; l++) {
                if (w) {
                    if (y.charAt(l) === "'" && !s("'")) {
                        w = false
                    } else {
                        u()
                    }
                } else {
                    switch (y.charAt(l)) {
                        case"d":
                            x = E("d");
                            break;
                        case"D":
                            p("D", r, C);
                            break;
                        case"o":
                            q = E("o");
                            break;
                        case"m":
                            D = E("m");
                            break;
                        case"M":
                            D = p("M", i, m);
                            break;
                        case"y":
                            n = E("y");
                            break;
                        case"@":
                            B = new Date(E("@"));
                            n = B.getFullYear();
                            D = B.getMonth() + 1;
                            x = B.getDate();
                            break;
                        case"!":
                            B = new Date((E("!") - this._ticksTo1970) / 10000);
                            n = B.getFullYear();
                            D = B.getMonth() + 1;
                            x = B.getDate();
                            break;
                        case"'":
                            if (s("'")) {
                                u()
                            } else {
                                w = true
                            }
                            break;
                        default:
                            u()
                    }
                }
            }
            if (z < t.length) {
                j = t.substr(z);
                if (!/^\s+/.test(j)) {
                    throw"Extra/unparsed characters found in date: " + j
                }
            }
            if (n === -1) {
                n = new Date().getFullYear()
            } else {
                if (n < 100) {
                    n += new Date().getFullYear() - new Date().getFullYear() % 100 + (n <= k ? 0 : -100)
                }
            }
            if (q > -1) {
                D = 1;
                x = q;
                do {
                    v = this._getDaysInMonth(n, D - 1);
                    if (x <= v) {
                        break
                    }
                    D++;
                    x -= v
                } while (true)
            }
            B = this._daylightSavingAdjust(new Date(n, D - 1, x));
            if (B.getFullYear() !== n || B.getMonth() + 1 !== D || B.getDate() !== x) {
                throw"Invalid date"
            }
            return B
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function (r, l, m) {
            if (!l) {
                return ""
            }
            var t, u = (m ? m.dayNamesShort : null) || this._defaults.dayNamesShort,
                j = (m ? m.dayNames : null) || this._defaults.dayNames,
                p = (m ? m.monthNamesShort : null) || this._defaults.monthNamesShort,
                n = (m ? m.monthNames : null) || this._defaults.monthNames, s = function (v) {
                    var w = (t + 1 < r.length && r.charAt(t + 1) === v);
                    if (w) {
                        t++
                    }
                    return w
                }, i = function (x, y, v) {
                    var w = "" + y;
                    if (s(x)) {
                        while (w.length < v) {
                            w = "0" + w
                        }
                    }
                    return w
                }, o = function (v, x, w, y) {
                    return (s(v) ? y[x] : w[x])
                }, k = "", q = false;
            if (l) {
                for (t = 0; t < r.length; t++) {
                    if (q) {
                        if (r.charAt(t) === "'" && !s("'")) {
                            q = false
                        } else {
                            k += r.charAt(t)
                        }
                    } else {
                        switch (r.charAt(t)) {
                            case"d":
                                k += i("d", l.getDate(), 2);
                                break;
                            case"D":
                                k += o("D", l.getDay(), u, j);
                                break;
                            case"o":
                                k += i("o", Math.round((new Date(l.getFullYear(), l.getMonth(), l.getDate()).getTime() - new Date(l.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case"m":
                                k += i("m", l.getMonth() + 1, 2);
                                break;
                            case"M":
                                k += o("M", l.getMonth(), p, n);
                                break;
                            case"y":
                                k += (s("y") ? l.getFullYear() : (l.getYear() % 100 < 10 ? "0" : "") + l.getYear() % 100);
                                break;
                            case"@":
                                k += l.getTime();
                                break;
                            case"!":
                                k += l.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case"'":
                                if (s("'")) {
                                    k += "'"
                                } else {
                                    q = true
                                }
                                break;
                            default:
                                k += r.charAt(t)
                        }
                    }
                }
            }
            return k
        },
        _possibleChars: function (m) {
            var l, k = "", j = false, i = function (n) {
                var o = (l + 1 < m.length && m.charAt(l + 1) === n);
                if (o) {
                    l++
                }
                return o
            };
            for (l = 0; l < m.length; l++) {
                if (j) {
                    if (m.charAt(l) === "'" && !i("'")) {
                        j = false
                    } else {
                        k += m.charAt(l)
                    }
                } else {
                    switch (m.charAt(l)) {
                        case"d":
                        case"m":
                        case"y":
                        case"@":
                            k += "0123456789";
                            break;
                        case"D":
                        case"M":
                            return null;
                        case"'":
                            if (i("'")) {
                                k += "'"
                            } else {
                                j = true
                            }
                            break;
                        default:
                            k += m.charAt(l)
                    }
                }
            }
            return k
        },
        _get: function (j, i) {
            return j.settings[i] !== undefined ? j.settings[i] : this._defaults[i]
        },
        _setDateFromField: function (n, k) {
            if (n.input.val() === n.lastVal) {
                return
            }
            var i = this._get(n, "dateFormat"), p = n.lastVal = n.input ? n.input.val() : null,
                o = this._getDefaultDate(n), j = o, l = this._getFormatConfig(n);
            try {
                j = this.parseDate(i, p, l) || o
            } catch (m) {
                p = (k ? "" : p)
            }
            n.selectedDay = j.getDate();
            n.drawMonth = n.selectedMonth = j.getMonth();
            n.drawYear = n.selectedYear = j.getFullYear();
            n.currentDay = (p ? j.getDate() : 0);
            n.currentMonth = (p ? j.getMonth() : 0);
            n.currentYear = (p ? j.getFullYear() : 0);
            this._adjustInstDate(n)
        },
        _getDefaultDate: function (i) {
            return this._restrictMinMax(i, this._determineDate(i, this._get(i, "defaultDate"), new Date()))
        },
        _determineDate: function (m, j, n) {
            var l = function (p) {
                    var o = new Date();
                    o.setDate(o.getDate() + p);
                    return o
                }, k = function (v) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(m, "dateFormat"), v, $.datepicker._getFormatConfig(m))
                    } catch (u) {
                    }
                    var p = (v.toLowerCase().match(/^c/) ? $.datepicker._getDate(m) : null) || new Date(),
                        q = p.getFullYear(), t = p.getMonth(), o = p.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        r = s.exec(v);
                    while (r) {
                        switch (r[2] || "d") {
                            case"d":
                            case"D":
                                o += parseInt(r[1], 10);
                                break;
                            case"w":
                            case"W":
                                o += parseInt(r[1], 10) * 7;
                                break;
                            case"m":
                            case"M":
                                t += parseInt(r[1], 10);
                                o = Math.min(o, $.datepicker._getDaysInMonth(q, t));
                                break;
                            case"y":
                            case"Y":
                                q += parseInt(r[1], 10);
                                o = Math.min(o, $.datepicker._getDaysInMonth(q, t));
                                break
                        }
                        r = s.exec(v)
                    }
                    return new Date(q, t, o)
                },
                i = (j == null || j === "" ? n : (typeof j === "string" ? k(j) : (typeof j === "number" ? (isNaN(j) ? n : l(j)) : new Date(j.getTime()))));
            i = (i && i.toString() === "Invalid Date" ? n : i);
            if (i) {
                i.setHours(0);
                i.setMinutes(0);
                i.setSeconds(0);
                i.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(i)
        },
        _daylightSavingAdjust: function (i) {
            if (!i) {
                return null
            }
            i.setHours(i.getHours() > 12 ? i.getHours() + 2 : 0);
            return i
        },
        _setDate: function (o, l, n) {
            var i = !l, k = o.selectedMonth, m = o.selectedYear,
                j = this._restrictMinMax(o, this._determineDate(o, l, new Date()));
            o.selectedDay = o.currentDay = j.getDate();
            o.drawMonth = o.selectedMonth = o.currentMonth = j.getMonth();
            o.drawYear = o.selectedYear = o.currentYear = j.getFullYear();
            if ((k !== o.selectedMonth || m !== o.selectedYear) && !n) {
                this._notifyChange(o)
            }
            this._adjustInstDate(o);
            if (o.input) {
                o.input.val(i ? "" : this._formatDate(o))
            }
        },
        _getDate: function (j) {
            var i = (!j.currentYear || (j.input && j.input.val() === "") ? null : this._daylightSavingAdjust(new Date(j.currentYear, j.currentMonth, j.currentDay)));
            return i
        },
        _attachHandlers: function (j) {
            var i = this._get(j, "stepMonths"), k = "#" + j.id.replace(/\\\\/g, "\\");
            j.dpDiv.find("[data-handler]").map(function () {
                var l = {
                    prev: function () {
                        $.datepicker._adjustDate(k, -i, "M")
                    }, next: function () {
                        $.datepicker._adjustDate(k, +i, "M")
                    }, hide: function () {
                        $.datepicker._hideDatepicker()
                    }, today: function () {
                        $.datepicker._gotoToday(k)
                    }, selectDay: function () {
                        $.datepicker._selectDay(k, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false
                    }, selectMonth: function () {
                        $.datepicker._selectMonthYear(k, this, "M");
                        return false
                    }, selectYear: function () {
                        $.datepicker._selectMonthYear(k, this, "Y");
                        return false
                    }
                };
                $(this).bind(this.getAttribute("data-event"), l[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (Z) {
            var B, A, U, L, m, ae, X, Q, ah, J, al, t, v, u, j, ad, ac, r, E, ag, S, am, D, I, s, n, V, O, R, P, q, G,
                w, Y, ab, l, af, aj, N, x, aa = new Date(),
                C = this._daylightSavingAdjust(new Date(aa.getFullYear(), aa.getMonth(), aa.getDate())),
                ai = this._get(Z, "isRTL"), ak = this._get(Z, "showButtonPanel"), T = this._get(Z, "hideIfNoPrevNext"),
                H = this._get(Z, "navigationAsDateFormat"), y = this._getNumberOfMonths(Z),
                p = this._get(Z, "showCurrentAtPos"), K = this._get(Z, "stepMonths"), F = (y[0] !== 1 || y[1] !== 1),
                k = this._daylightSavingAdjust((!Z.currentDay ? new Date(9999, 9, 9) : new Date(Z.currentYear, Z.currentMonth, Z.currentDay))),
                o = this._getMinMaxDate(Z, "min"), z = this._getMinMaxDate(Z, "max"), i = Z.drawMonth - p,
                W = Z.drawYear;
            if (i < 0) {
                i += 12;
                W--
            }
            if (z) {
                B = this._daylightSavingAdjust(new Date(z.getFullYear(), z.getMonth() - (y[0] * y[1]) + 1, z.getDate()));
                B = (o && B < o ? o : B);
                while (this._daylightSavingAdjust(new Date(W, i, 1)) > B) {
                    i--;
                    if (i < 0) {
                        i = 11;
                        W--
                    }
                }
            }
            Z.drawMonth = i;
            Z.drawYear = W;
            A = this._get(Z, "prevText");
            A = (!H ? A : this.formatDate(A, this._daylightSavingAdjust(new Date(W, i - K, 1)), this._getFormatConfig(Z)));
            U = (this._canAdjustMonth(Z, -1, W, i) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + A + "'><span class='ui-icon ui-icon-circle-triangle-" + (ai ? "e" : "w") + "'>" + A + "</span></a>" : (T ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + A + "'><span class='ui-icon ui-icon-circle-triangle-" + (ai ? "e" : "w") + "'>" + A + "</span></a>"));
            L = this._get(Z, "nextText");
            L = (!H ? L : this.formatDate(L, this._daylightSavingAdjust(new Date(W, i + K, 1)), this._getFormatConfig(Z)));
            m = (this._canAdjustMonth(Z, +1, W, i) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (ai ? "w" : "e") + "'>" + L + "</span></a>" : (T ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (ai ? "w" : "e") + "'>" + L + "</span></a>"));
            ae = this._get(Z, "currentText");
            X = (this._get(Z, "gotoCurrent") && Z.currentDay ? k : C);
            ae = (!H ? ae : this.formatDate(ae, X, this._getFormatConfig(Z)));
            Q = (!Z.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(Z, "closeText") + "</button>" : "");
            ah = (ak) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (ai ? Q : "") + (this._isInRange(Z, X) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + ae + "</button>" : "") + (ai ? "" : Q) + "</div>" : "";
            J = parseInt(this._get(Z, "firstDay"), 10);
            J = (isNaN(J) ? 0 : J);
            al = this._get(Z, "showWeek");
            t = this._get(Z, "dayNames");
            v = this._get(Z, "dayNamesMin");
            u = this._get(Z, "monthNames");
            j = this._get(Z, "monthNamesShort");
            ad = this._get(Z, "beforeShowDay");
            ac = this._get(Z, "renderDay");
            r = this._get(Z, "showOtherMonths");
            E = this._get(Z, "selectOtherMonths");
            ag = this._getDefaultDate(Z);
            S = "";
            am;
            for (D = 0; D < y[0]; D++) {
                I = "";
                this.maxRows = 4;
                for (s = 0; s < y[1]; s++) {
                    n = this._daylightSavingAdjust(new Date(W, i, Z.selectedDay));
                    V = " ui-corner-all";
                    O = "";
                    if (F) {
                        O += "<div class='ui-datepicker-group";
                        if (y[1] > 1) {
                            switch (s) {
                                case 0:
                                    O += " ui-datepicker-group-first";
                                    V = " ui-corner-" + (ai ? "right" : "left");
                                    break;
                                case y[1] - 1:
                                    O += " ui-datepicker-group-last";
                                    V = " ui-corner-" + (ai ? "left" : "right");
                                    break;
                                default:
                                    O += " ui-datepicker-group-middle";
                                    V = "";
                                    break
                            }
                        }
                        O += "'>"
                    }
                    O += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + V + "'>" + (/all|left/.test(V) && D === 0 ? (ai ? m : U) : "") + (/all|right/.test(V) && D === 0 ? (ai ? U : m) : "") + this._generateMonthYearHeader(Z, i, W, o, z, D > 0 || s > 0, u, j) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    R = (al ? "<th class='ui-datepicker-week-col'>" + this._get(Z, "weekHeader") + "</th>" : "");
                    for (am = 0; am < 7; am++) {
                        P = (am + J) % 7;
                        R += "<th scope='col'" + ((am + J + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + t[P] + "'>" + v[P] + "</span></th>"
                    }
                    O += R + "</tr></thead><tbody>";
                    q = this._getDaysInMonth(W, i);
                    if (W === Z.selectedYear && i === Z.selectedMonth) {
                        Z.selectedDay = Math.min(Z.selectedDay, q)
                    }
                    G = (this._getFirstDayOfMonth(W, i) - J + 7) % 7;
                    w = Math.ceil((G + q) / 7);
                    Y = (F ? this.maxRows > w ? this.maxRows : w : w);
                    this.maxRows = Y;
                    ab = this._daylightSavingAdjust(new Date(W, i, 1 - G));
                    for (l = 0; l < Y; l++) {
                        O += "<tr>";
                        af = (!al ? "" : "<td class='ui-datepicker-week-col'>" + this._get(Z, "calculateWeek")(ab) + "</td>");
                        for (am = 0; am < 7; am++) {
                            aj = (ad ? ad.apply((Z.input ? Z.input[0] : null), [ab]) : [true, ""]);
                            N = (ab.getMonth() !== i);
                            x = (N && !E) || !aj[0] || (o && ab < o) || (z && ab > z);
                            af += "<td class='" + ((am + J + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + ((ab.getTime() === n.getTime() && i === Z.selectedMonth && Z._keyEvent) || (ag.getTime() === ab.getTime() && ag.getTime() === n.getTime()) ? " " + this._dayOverClass : "") + (x ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !r ? "" : " " + aj[1] + (ab.getTime() === k.getTime() ? " " + this._currentClass : "") + (ab.getTime() === C.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!N || r) && aj[2] ? " title='" + aj[2].replace(/'/g, "&#39;") + "'" : "") + (x ? " data-date='" + ab.getDate() + "'" : " data-handler='selectDay' data-event='click' data-date='" + ab.getDate() + "' data-month='" + ab.getMonth() + "' data-year='" + ab.getFullYear() + "'") + ">" + (N && !r ? "&#xa0;" : (x ? "<span class='ui-state-default'>" + ab.getDate() + "</span>" : "<a class='ui-state-default" + (ab.getTime() === C.getTime() ? " ui-state-highlight" : "") + (ab.getTime() === k.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + (ac ? ac.apply(Z, [ab.getFullYear(), ab.getMonth() + 1, ab.getDate()]) : ab.getDate()) + "</a>")) + "</td>";
                            ab.setDate(ab.getDate() + 1);
                            ab = this._daylightSavingAdjust(ab)
                        }
                        O += af + "</tr>"
                    }
                    i++;
                    if (i > 11) {
                        i = 0;
                        W++
                    }
                    O += "</tbody></table>" + (F ? "</div>" + ((y[0] > 0 && s === y[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    I += O
                }
                S += I
            }
            S += ah;
            Z._keyEvent = false;
            return S
        },
        _generateMonthYearHeader: function (m, k, u, o, s, v, q, i) {
            var z, j, A, x, n, w, t, p, l = this._get(m, "changeMonth"), B = this._get(m, "changeYear"),
                C = this._get(m, "showMonthAfterYear"), r = "<div class='ui-datepicker-title'>", y = "";
            if (v || !l) {
                y += "<span class='ui-datepicker-month'>" + q[k] + "</span>"
            } else {
                z = (o && o.getFullYear() === u);
                j = (s && s.getFullYear() === u);
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (A = 0; A < 12; A++) {
                    if ((!z || A >= o.getMonth()) && (!j || A <= s.getMonth())) {
                        y += "<option value='" + A + "'" + (A === k ? " selected='selected'" : "") + ">" + i[A] + "</option>"
                    }
                }
                y += "</select>"
            }
            if (!C) {
                r += y + (v || !(l && B) ? "&#xa0;" : "")
            }
            if (!m.yearshtml) {
                m.yearshtml = "";
                if (v || !B) {
                    r += "<span class='ui-datepicker-year'>" + u + "</span>"
                } else {
                    x = this._get(m, "yearRange").split(":");
                    n = new Date().getFullYear();
                    w = function (E) {
                        var D = (E.match(/c[+\-].*/) ? u + parseInt(E.substring(1), 10) : (E.match(/[+\-].*/) ? n + parseInt(E, 10) : parseInt(E, 10)));
                        return (isNaN(D) ? n : D)
                    };
                    t = w(x[0]);
                    p = Math.max(t, w(x[1] || ""));
                    t = (o ? Math.max(t, o.getFullYear()) : t);
                    p = (s ? Math.min(p, s.getFullYear()) : p);
                    m.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; t <= p; t++) {
                        m.yearshtml += "<option value='" + t + "'" + (t === u ? " selected='selected'" : "") + ">" + t + "</option>"
                    }
                    m.yearshtml += "</select>";
                    r += m.yearshtml;
                    m.yearshtml = null
                }
            }
            r += this._get(m, "yearSuffix");
            if (C) {
                r += (v || !(l && B) ? "&#xa0;" : "") + y
            }
            r += "</div>";
            return r
        },
        _adjustInstDate: function (l, o, n) {
            var k = l.drawYear + (n === "Y" ? o : 0), m = l.drawMonth + (n === "M" ? o : 0),
                i = Math.min(l.selectedDay, this._getDaysInMonth(k, m)) + (n === "D" ? o : 0),
                j = this._restrictMinMax(l, this._daylightSavingAdjust(new Date(k, m, i)));
            l.selectedDay = j.getDate();
            l.drawMonth = l.selectedMonth = j.getMonth();
            l.drawYear = l.selectedYear = j.getFullYear();
            if (n === "M" || n === "Y") {
                this._notifyChange(l)
            }
        },
        _restrictMinMax: function (l, j) {
            var k = this._getMinMaxDate(l, "min"), m = this._getMinMaxDate(l, "max"), i = (k && j < k ? k : j);
            return (m && i > m ? m : i)
        },
        _notifyChange: function (j) {
            var i = this._get(j, "onChangeMonthYear");
            if (i) {
                i.apply((j.input ? j.input[0] : null), [j.selectedYear, j.selectedMonth + 1, j])
            }
        },
        _getNumberOfMonths: function (j) {
            var i = this._get(j, "numberOfMonths");
            return (i == null ? [1, 1] : (typeof i === "number" ? [1, i] : i))
        },
        _getMinMaxDate: function (j, i) {
            return this._determineDate(j, this._get(j, i + "Date"), null)
        },
        _getDaysInMonth: function (i, j) {
            return 32 - this._daylightSavingAdjust(new Date(i, j, 32)).getDate()
        },
        _getFirstDayOfMonth: function (i, j) {
            return new Date(i, j, 1).getDay()
        },
        _canAdjustMonth: function (l, n, k, m) {
            var i = this._getNumberOfMonths(l),
                j = this._daylightSavingAdjust(new Date(k, m + (n < 0 ? n : i[0] * i[1]), 1));
            if (n < 0) {
                j.setDate(this._getDaysInMonth(j.getFullYear(), j.getMonth()))
            }
            return this._isInRange(l, j)
        },
        _isInRange: function (m, k) {
            var j, p, l = this._getMinMaxDate(m, "min"), i = this._getMinMaxDate(m, "max"), q = null, n = null,
                o = this._get(m, "yearRange");
            if (o) {
                j = o.split(":");
                p = new Date().getFullYear();
                q = parseInt(j[0], 10);
                n = parseInt(j[1], 10);
                if (j[0].match(/[+\-].*/)) {
                    q += p
                }
                if (j[1].match(/[+\-].*/)) {
                    n += p
                }
            }
            return ((!l || k.getTime() >= l.getTime()) && (!i || k.getTime() <= i.getTime()) && (!q || k.getFullYear() >= q) && (!n || k.getFullYear() <= n))
        },
        _getFormatConfig: function (i) {
            var j = this._get(i, "shortYearCutoff");
            j = (typeof j !== "string" ? j : new Date().getFullYear() % 100 + parseInt(j, 10));
            return {
                shortYearCutoff: j,
                dayNamesShort: this._get(i, "dayNamesShort"),
                dayNames: this._get(i, "dayNames"),
                monthNamesShort: this._get(i, "monthNamesShort"),
                monthNames: this._get(i, "monthNames")
            }
        },
        _formatDate: function (l, i, m, k) {
            if (!i) {
                l.currentDay = l.selectedDay;
                l.currentMonth = l.selectedMonth;
                l.currentYear = l.selectedYear
            }
            var j = (i ? (typeof i === "object" ? i : this._daylightSavingAdjust(new Date(k, m, i))) : this._daylightSavingAdjust(new Date(l.currentYear, l.currentMonth, l.currentDay)));
            return this.formatDate(this._get(l, "dateFormat"), j, this._getFormatConfig(l))
        }
    });

    function b(j) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return j.delegate(i, "mouseout", function () {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).removeClass("ui-datepicker-next-hover")
            }
        }).delegate(i, "mouseover", f)
    }

    function f() {
        if (!$.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0])) {
            $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).addClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).addClass("ui-datepicker-next-hover")
            }
        }
    }

    function a(k, j) {
        $.extend(k, j);
        for (var i in j) {
            if (j[i] == null) {
                k[i] = j[i]
            }
        }
        return k
    }

    $.fn.datepicker = function (j) {
        if (!this.length) {
            return this
        }
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick);
            $.datepicker.initialized = true
        }
        if ($("#" + $.datepicker._mainDivId).length === 0) {
            $("body").append($.datepicker.dpDiv)
        }
        var i = Array.prototype.slice.call(arguments, 1);
        if (typeof j === "string" && (j === "isDisabled" || j === "getDate" || j === "widget")) {
            return $.datepicker["_" + j + "Datepicker"].apply($.datepicker, [this[0]].concat(i))
        }
        if (j === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return $.datepicker["_" + j + "Datepicker"].apply($.datepicker, [this[0]].concat(i))
        }
        return this.each(function () {
            typeof j === "string" ? $.datepicker["_" + j + "Datepicker"].apply($.datepicker, [this].concat(i)) : $.datepicker._attachDatepicker(this, j)
        })
    };
    $.datepicker = new c();
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.11.3";
    var e = $.datepicker;
    return e
});
M.define("/js/hotel/module/DateRangePicker", function (f, e, g) {
    var b = f("xdate"), d = f("/js/hotel/module/FestivalDateConfig");
    f("jqui-datepicker");
    var a = {
        duration: 50,
        numberOfMonths: 2,
        firstDay: 1,
        altFormat: "yy-mm-dd",
        dateFormat: "yy-mm-dd",
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    };
    var c = function (h) {
        this.dateFormat = "yyyy-MM-dd";
        this.timer = null;
        this.customCss = "hotel_datepicker";
        this.fesDateList = d.getDateList();
        this.priceDateList = [];
        this.startInput = null;
        this.endInput = null;
        this.startDate = null;
        this.endDate = null;
        this.minDate = null;
        this.maxDate = null;
        this.rangeMinDays = 1;
        this.rangeMaxDays = null;
        this.datePickerOptions = {};
        this.startDayClass = "start_day";
        this.startDayClassUnset = "start_day_unset";
        this.endDayClass = "end_day";
        this.endDayClassUnset = "end_day_unset";
        this.isCached = false;
        this.isDoublePick = false;
        this.isAllowSameDate = false;
        M.mix(this, h);
        M.mix(this.datePickerOptions, a, false);
        if (this.isAllowSameDate) {
            this.rangeMinDays = 0
        }
        this.startInput = $(this.startInput);
        this.endInput = $(this.endInput);
        this.dateRangeSetted = true;
        this.showIns = null;
        this.preCheck();
        this.init()
    };
    c.prototype = {
        init: function () {
            this.initDatePicker()
        }, preCheck: function () {
            if (!this.startInput.length || !this.endInput.length) {
                M.error("date range picker need an start input and an end input")
            }
            if (this.maxDate && this.minDate && b.parse(this.maxDate) <= b.parse(this.minDate)) {
                M.error("max date must big than min date")
            }
            this.rangeMinDays = +this.rangeMinDays;
            if (isNaN(this.rangeMinDays) || this.rangeMinDays < 0) {
                M.error("date range days must be positive")
            }
            if (this.rangeMaxDays) {
                this.rangeMaxDays = +this.rangeMaxDays;
                if (isNaN(this.rangeMaxDays) || this.rangeMaxDays < 0) {
                    M.error("date range days must be positive")
                }
            }
            if (this.rangeMinDays && this.rangeMaxDays && this.rangeMinDays > this.rangeMaxDays) {
                M.error("date range max days must equal or more than min days")
            }
            if (this.maxDate && this.minDate && this.rangeMinDays > 0) {
                var i = new b(this.minDate);
                var k = new b(this.maxDate);
                if (i.diffDays(k) < this.rangeMinDays) {
                    M.error("date range days must equal or more than range min days")
                }
            }
            if (!this.startDate) {
                this.startDate = (new b()).toString(this.dateFormat)
            }
            if (this.minDate && b.parse(this.startDate) < b.parse(this.minDate)) {
                this.startDate = this.minDate
            }
            if (this.endDate) {
                var h = new b(this.startDate), j = new b(this.endDate);
                if (h.diffDays(j) < this.rangeMinDays) {
                    j = h.addDays(this.rangeMinDays)
                }
                if (this.maxDate && b.parse(this.maxDate) < j) {
                    j = this.maxDate
                }
                this.endDate = j.toString(this.dateFormat)
            } else {
                this.endDate = (new b(this.startDate)).addDays(1).toString(this.dateFormat)
            }
        }, initDatePicker: function () {
            var i = {
                onSelect: M.bind(this.selectDate, this),
                onClose: M.bind(this.closeDate, this),
                beforeShow: M.bind(this.beforeShow, this),
                beforeShowDay: M.bind(this.beforeShowDay, this),
                renderDay: M.bind(this.renderDay, this),
                gotoCurrent: true
            }, j = M.mix({}, i, a), h = M.mix({}, i, a);
            if (this.minDate) {
                j.minDate = (new b(this.minDate)).toString(this.dateFormat);
                h.minDate = (new b(this.minDate)).addDays(this.rangeMinDays).toString(this.dateFormat)
            }
            if (this.maxDate) {
                j.maxDate = (new b(this.maxDate)).addDays(-this.rangeMinDays).toString(this.dateFormat);
                h.maxDate = (new b(this.startDate)).addDays(this.rangeMaxDays).toString(this.dateFormat)
            }
            this.startInput.datepicker(j);
            this.endInput.datepicker(h);
            this.startInput.datepicker("setDate", this.startDate);
            this.endInput.datepicker("setDate", this.endDate);
            if (this.isDoublePick) {
                this.startInput.datepicker("widget").on("mouseenter", "td:not(.ui-state-disabled)", $.proxy(this.mouseenterEffect, this));
                this.startInput.datepicker("widget").on("mouseleave", "td:not(.ui-state-disabled)", $.proxy(this.mouseleaveEffect, this));
                this.endInput.datepicker("widget").on("mouseenter", "td:not(.ui-state-disabled)", $.proxy(this.mouseenterEffect, this));
                this.endInput.datepicker("widget").on("mouseleave", "td:not(.ui-state-disabled)", $.proxy(this.mouseleaveEffect, this))
            }
        }, mouseenterEffect: function (j) {
            var m = $(j.delegateTarget), l = $(j.target).closest("td"),
                i = new b(l.data("year"), l.data("month"), $("a", l).html());
            if (!this.showIns || !this.showIns.input) {
                return true
            }
            if (this.showIns.input.is(this.startInput)) {
                var k = new b(this.endDate);
                l.addClass("unset")
            } else {
                var h = new b(this.startDate);
                l.addClass("unset")
            }
        }, mouseleaveEffect: function (j) {
            var m = $(j.delegateTarget), l = $(j.target).closest("td"),
                i = new b(l.data("year"), (l.data("month") + 1), $("a", l).html());
            if (!this.showIns || !this.showIns.input) {
                return true
            }
            if (this.showIns.input.is(this.startInput)) {
                var k = new b(this.endDate);
                l.removeClass("unset")
            } else {
                var h = new b(this.startDate);
                l.removeClass("unset")
            }
        }
    };
    M.mix(c.prototype, {
        selectDate: function (i, o) {
            var j = "", p = {startDate: this.startDate, endDate: this.endDate}, l = false, k = false;
            if (o.input.is(this.startInput)) {
                p.startDate = i;
                j = this.endInput
            } else {
                p.endDate = i;
                j = this.startInput
            }
            if (o.input.is(this.startInput)) {
                j.datepicker("option", "maxDate", (new b(i)).addDays(this.rangeMaxDays).toString(this.dateFormat));
                if (this.rangeMaxDays && b.parse(p.endDate) - b.parse(i) > this.rangeMaxDays * 24 * 60 * 60 * 1000) {
                    p.endDate = (new b(i)).addDays(this.rangeMinDays).toString(this.dateFormat);
                    j.datepicker("setDate", p.endDate);
                    k = true;
                    setTimeout(M.bind(function () {
                        this.dateRangeSetted = false;
                        j.datepicker("show")
                    }, this), 1)
                }
            }
            if (b.parse(p.startDate) >= b.parse(p.endDate)) {
                if (this.isAllowSameDate && b.parse(p.startDate) == b.parse(p.endDate)) {
                    this.dateRangeSetted = true
                } else {
                    var m = "";
                    if (o.input.is(this.startInput)) {
                        m = (new b(p.startDate)).addDays(this.rangeMinDays).toString(this.dateFormat);
                        p.endDate = m
                    } else {
                        m = (new b(p.endDate)).addDays(-this.rangeMinDays).toString(this.dateFormat);
                        p.startDate = m
                    }
                    j.datepicker("setDate", m);
                    if (this.dateRangeSetted) {
                        if (o.input.is(this.startInput)) {
                            k = true
                        } else {
                            l = true
                        }
                        setTimeout(M.bind(function () {
                            this.dateRangeSetted = false;
                            j.datepicker("show")
                        }, this), 1)
                    } else {
                        this.dateRangeSetted = true
                    }
                }
            } else {
                this.dateRangeSetted = true
            }
            if (this.isDoublePick && o.input.is(this.startInput) && !this.isCached && !k) {
                k = true;
                setTimeout(M.bind(function () {
                    this.dateRangeSetted = false;
                    j.datepicker("show")
                }, this), 1)
            }
            if (!(p.startDate == this.startDate && p.endDate == this.endDate)) {
                this.startDate = p.startDate;
                this.endDate = p.endDate;
                M.Event(this).fire("date range picker changed", p)
            }
            if (this.isDoublePick) {
                var h = new b(this.startDate), n = new b(this.endDate);
                if (!h.valid()) {
                    this.startDate = (new b()).addDays(40).toString(this.dateFormat)
                }
                if (!n.valid()) {
                    this.endDate = (new b(this.startDate)).addDays(1).toString(this.dateFormat)
                }
                if (o.input.is(this.startInput) && b.parse(p.startDate) < b.parse(p.endDate) && this.isCached && !k) {
                    this.isCached = true;
                    M.Event(this).fire("date range picker doublepicked", {
                        startDate: this.startDate,
                        endDate: this.endDate
                    })
                }
                if (o.input.is(this.startInput) && this.isAllowSameDate && b.parse(p.startDate) <= b.parse(p.endDate) && this.isCached && !k) {
                    this.isCached = true;
                    M.Event(this).fire("date range picker doublepicked", {
                        startDate: this.startDate,
                        endDate: this.endDate
                    })
                }
                if (o.input.is(this.endInput) && !l) {
                    this.isCached = true;
                    M.Event(this).fire("date range picker doublepicked", {
                        startDate: this.startDate,
                        endDate: this.endDate
                    })
                }
            }
        }, setDate: function (h) {
            this.startDate = h.startDate;
            this.endDate = h.endDate;
            this.preCheck();
            this.startInput.datepicker("setDate", h.startDate);
            this.endInput.datepicker("setDate", h.endDate)
        }, closeDate: function (i, j) {
            var h = this;
            this.timer = setTimeout(function () {
                $("#ui-datepicker-div").removeClass(h.customCss)
            }, 1000);
            $("#ui-datepicker-div").data("removeClassTimer", this.timer);
            if (!this.dateRangeSetted) {
                this.dateRangeSetted = true
            }
            if (M.isFunction(this._onClose)) {
                this._onClose(i, j)
            }
        }, beforeShow: function (h, i) {
            this.timer = $("#ui-datepicker-div").data("removeClassTimer") || this.timer;
            clearTimeout(this.timer);
            $("#ui-datepicker-div").addClass(this.customCss);
            this.showIns = i;
            if (M.isFunction(this._beforeShow)) {
                this._beforeShow(h, i)
            }
        }, beforeShowDay: function (j) {
            var k = b.parse(this.startDate), i = b.parse(this.endDate), h = b.parse(j);
            var l = h == k ? this.startDayClass : (h > k && h < i ? "range_day" : (h == i ? this.endDayClass : ""));
            if (!this.dateRangeSetted) {
                if (this.showIns.input.is(this.startInput)) {
                    if (this.isAllowSameDate && k === i) {
                        l = l == this.startDayClass ? this.endDayClassUnset : ""
                    } else {
                        l = l == this.endDayClass ? this.endDayClassUnset : ""
                    }
                } else {
                    l = l == this.startDayClass ? this.startDayClassUnset : ""
                }
            }
            return [true, l]
        }, renderDay: function (m, n, h) {
            var k = h;
            for (var j = 0; j < this.fesDateList.length; j++) {
                var o = this.fesDateList[j];
                if (o.year === m && o.month === n && o.day === h) {
                    if (o.shortName) {
                        k = '<p class="fes">' + o.shortName + "</p>"
                    }
                }
            }
            for (var j = 0; j < this.priceDateList.length; j++) {
                var l = this.priceDateList[j];
                if (l.year === m && l.month === n && l.day === h) {
                    k += '<p class="price">' + l.name + "</p>"
                }
            }
            return k
        }
    });
    g.exports = c
});
M.define("/js/hotel/module/ModuleProvider", function (b, a, c) {
    c.exports = function (f) {
        var e = f.split(".");
        var h = window;
        for (var g = 0, d = e.length; g < d; g++) {
            if (!h[e[g]]) {
                h = h[e[g]] = {}
            } else {
                h = h[e[g]]
            }
        }
        return h
    }
});
M.define("/js/hotel/module/BookingDate", function (e, c, f) {
    var g = e("Storage"), a = e("xdate"), b = e("/js/hotel/module/ModuleProvider");
    var d = {
        defaultGuests: {numberAdults: 2, numberChildren: 0, childrenAge: []}, getGuests: function (i) {
            var l;
            try {
                l = g.getItem("hotel_booking_guests")
            } catch (k) {
            }
            if (!!l && M.is(l, "String")) {
                l = JSON.parse(l);
                if (M.isObject(l) && this.isValid(l.numberAdults, l.numberChildren, l.childrenAge)) {
                    if (!i) {
                        !!mfwPageEvent && mfwPageEvent("hotel", "booking_guests", {opt_type: 0, is_cached: 1})
                    }
                    return {
                        numberAdults: l.numberAdults,
                        numberChildren: l.numberChildren,
                        childrenAge: l.childrenAge,
                        isCached: true
                    }
                }
            }
            var j = this.defaultGuests;
            if (!i) {
                !!mfwPageEvent && mfwPageEvent("hotel", "booking_guests", {opt_type: 0, is_cached: 0})
            }
            return {
                numberAdults: j.numberAdults,
                numberChildren: j.numberChildren,
                childrenAge: j.childrenAge,
                isCached: false
            }
        }, setGuests: function (l, j, n, i) {
            try {
                if (i !== "fav") {
                    g.setItem("hotel_booking_guests", JSON.stringify({
                        numberAdults: l,
                        numberChildren: j,
                        childrenAge: n
                    }), 86400 * 7);
                    var m = h.getDate(true);
                    if (m.isCached) {
                        h.setDate(m.checkIn, m.checkOut)
                    }
                }
            } catch (k) {
            }
            !!mfwPageEvent && mfwPageEvent("hotel", "booking_guests", {
                opt_type: 1,
                number_adults: l,
                number_children: j,
                children_age: n,
                page_type: i
            })
        }, isValid: function (m, k, o) {
            var n = true;
            if (!M.is(m, "Number") || m < 1 || m > 7) {
                n = false
            }
            if (!M.is(k, "Number") || k < 0 || k > 4) {
                n = false
            }
            if (!M.isArray(o) || k !== o.length) {
                n = false
            } else {
                for (var l = 0; l < o.length; l++) {
                    var j = o[l];
                    if (!M.is(j, "Number") || j < 0 || j > 17) {
                        n = false;
                        break
                    }
                }
            }
            return n
        }
    };
    var h = {
        getDate: function (q) {
            var s = Number(!!window.localStorage);
            var p = +new Date(), n = new Date(p), j, o, k, i;
            n.setHours(0, 0, 0, 0);
            p = n.getTime();
            p -= 60 * 60 * 24 * 1000;
            try {
                j = g.getItem("hotel_check_in");
                o = g.getItem("hotel_check_out")
            } catch (m) {
            }
            if (!!j && M.is(j, "String")) {
                k = Date.parse(j);
                if (k >= p && !!o && M.is(o, "String")) {
                    i = Date.parse(o);
                    if (i > k && i - k < 30 * 24 * 60 * 60 * 1000) {
                        if (!q) {
                            !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                                opt_type: 0,
                                is_support_storage: s,
                                is_cached: 1
                            })
                        }
                        return {checkIn: j, checkOut: o, isCached: true}
                    }
                }
            }
            k = p + 40 * 24 * 60 * 60 * 1000;
            i = k + 24 * 60 * 60 * 1000;
            var l = new a(k), r = new a(i);
            j = l.toString("yyyy-MM-dd");
            o = r.toString("yyyy-MM-dd");
            if (!q) {
                !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                    opt_type: 0,
                    is_support_storage: s,
                    is_cached: 0
                })
            }
            return {checkIn: j, checkOut: o, isCached: false}
        }, setDate: function (m, i, k) {
            try {
                if (k !== "fav") {
                    g.setItem("hotel_check_in", m, 86400 * 7);
                    g.setItem("hotel_check_out", i, 86400 * 7);
                    var o = d.getDate(true);
                    if (o.isCached) {
                        d.setGuests(o.numberAdults, o.numberChildren, o.childrenAge)
                    }
                }
            } catch (l) {
            }
            var n = a.today().diffDays(new a(m)), j = (new a(m)).diffDays(new a(i));
            !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                opt_type: 1,
                ahead_days: n,
                duration_days: j,
                check_in: m,
                check_out: i,
                page_type: k
            })
        }, isValid: function (m, i) {
            var l = +new Date(), j = new Date(l), k, n;
            j.setHours(0, 0, 0, 0);
            l = j.getTime();
            l -= 60 * 60 * 24 * 1000;
            if (!!m && M.is(m, "String")) {
                k = Date.parse(m);
                if (k >= l && !!i && M.is(i, "String")) {
                    n = Date.parse(i);
                    if (n > k && n - k < 31 * 24 * 60 * 60 * 1000) {
                        return true
                    }
                }
            }
            return false
        }, hasRemind: function () {
            var i = +new Date(), j = g.getItem("hotel_date_pick_remind");
            if (!!j && M.is(j, "Number")) {
                if (i - j < 24 * 60 * 60 * 1000) {
                    return true
                }
            }
            return false
        }, setRemind: function () {
            try {
                g.setItem("hotel_date_pick_remind", +new Date(), 86400 * 7)
            } catch (i) {
            }
        }
    };
    b("__MFW_MODULE__.hotel").BookingDate = h;
    f.exports = h
});
M.define("/js/hotel/module/BookingGuests", function (e, c, f) {
    var g = e("Storage"), b = e("/js/hotel/module/ModuleProvider");
    var a = e("xdate");
    var h = {
        getDate: function (q) {
            var s = Number(!!window.localStorage);
            var p = +new Date(), n = new Date(p), j, o, k, i;
            n.setHours(0, 0, 0, 0);
            p = n.getTime();
            p -= 60 * 60 * 24 * 1000;
            try {
                j = g.getItem("hotel_check_in");
                o = g.getItem("hotel_check_out")
            } catch (m) {
            }
            if (!!j && M.is(j, "String")) {
                k = Date.parse(j);
                if (k >= p && !!o && M.is(o, "String")) {
                    i = Date.parse(o);
                    if (i > k && i - k < 30 * 24 * 60 * 60 * 1000) {
                        if (!q) {
                            !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                                opt_type: 0,
                                is_support_storage: s,
                                is_cached: 1
                            })
                        }
                        return {checkIn: j, checkOut: o, isCached: true}
                    }
                }
            }
            k = p + 40 * 24 * 60 * 60 * 1000;
            i = k + 24 * 60 * 60 * 1000;
            var l = new a(k), r = new a(i);
            j = l.toString("yyyy-MM-dd");
            o = r.toString("yyyy-MM-dd");
            if (!q) {
                !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                    opt_type: 0,
                    is_support_storage: s,
                    is_cached: 0
                })
            }
            return {checkIn: j, checkOut: o, isCached: false}
        }, setDate: function (m, i, k) {
            try {
                if (k !== "fav") {
                    g.setItem("hotel_check_in", m, 86400 * 7);
                    g.setItem("hotel_check_out", i, 86400 * 7);
                    var o = d.getDate(true);
                    if (o.isCached) {
                        d.setGuests(o.numberAdults, o.numberChildren, o.childrenAge)
                    }
                }
            } catch (l) {
            }
            var n = a.today().diffDays(new a(m)), j = (new a(m)).diffDays(new a(i));
            !!mfwPageEvent && mfwPageEvent("hotel", "booking_date", {
                opt_type: 1,
                ahead_days: n,
                duration_days: j,
                check_in: m,
                check_out: i,
                page_type: k
            })
        }, isValid: function (m, i) {
            var l = +new Date(), j = new Date(l), k, n;
            j.setHours(0, 0, 0, 0);
            l = j.getTime();
            l -= 60 * 60 * 24 * 1000;
            if (!!m && M.is(m, "String")) {
                k = Date.parse(m);
                if (k >= l && !!i && M.is(i, "String")) {
                    n = Date.parse(i);
                    if (n > k && n - k < 31 * 24 * 60 * 60 * 1000) {
                        return true
                    }
                }
            }
            return false
        }
    };
    var d = {
        defaultGuests: {numberAdults: 2, numberChildren: 0, childrenAge: []}, getGuests: function (i) {
            var l;
            try {
                l = g.getItem("hotel_booking_guests")
            } catch (k) {
            }
            if (!!l && M.is(l, "String")) {
                l = JSON.parse(l);
                if (M.isObject(l) && this.isValid(l.numberAdults, l.numberChildren, l.childrenAge)) {
                    if (!i) {
                        !!mfwPageEvent && mfwPageEvent("hotel", "booking_guests", {opt_type: 0, is_cached: 1})
                    }
                    return {
                        numberAdults: l.numberAdults,
                        numberChildren: l.numberChildren,
                        childrenAge: l.childrenAge,
                        isCached: true
                    }
                }
            }
            var j = this.defaultGuests;
            if (!i) {
                !!mfwPageEvent && mfwPageEvent("hotel", "booking_guests", {opt_type: 0, is_cached: 0})
            }
            return {
                numberAdults: j.numberAdults,
                numberChildren: j.numberChildren,
                childrenAge: j.childrenAge,
                isCached: false
            }
        }, setGuests: function (l, j, n, i) {
            try {
                if (i !== "fav") {
                    g.setItem("hotel_booking_guests", JSON.stringify({
                        numberAdults: l,
                        numberChildren: j,
                        childrenAge: n
                    }), 86400 * 7);
                    var m = h.getDate(true);
                    if (m.isCached) {
                        h.setDate(m.checkIn, m.checkOut)
                    }
                }
            } catch (k) {
            }
            !!mfwPageEvent && mfwPageEvent("hotel", "booking_guests", {
                opt_type: 1,
                number_adults: l,
                number_children: j,
                children_age: n,
                page_type: i
            })
        }, isValid: function (m, k, o) {
            var n = true;
            if (!M.is(m, "Number") || m < 1 || m > 7) {
                n = false
            }
            if (!M.is(k, "Number") || k < 0 || k > 4) {
                n = false
            }
            if (!M.isArray(o) || k !== o.length) {
                n = false
            } else {
                for (var l = 0; l < o.length; l++) {
                    var j = o[l];
                    if (!M.is(j, "Number") || j < 0 || j > 17) {
                        n = false;
                        break
                    }
                }
            }
            return n
        }, hasRemind: function () {
            var i = +new Date(), j = g.getItem("hotel_guests_pick_remind");
            if (!!j && M.is(j, "Number")) {
                if (i - j < 24 * 60 * 60 * 1000) {
                    return true
                }
            }
            return false
        }, setRemind: function () {
            try {
                g.setItem("hotel_guests_pick_remind", +new Date(), 86400 * 7)
            } catch (i) {
            }
        }
    };
    b("__MFW_MODULE__.hotel").BookingGuests = d;
    f.exports = d
});
M.define("/js/hotel/module/NumberGuestsPicker", function (f, g, c) {
    var l = f("/js/hotel/module/BookingGuests"), j = M.cssSupport("transition"), h = M.cssSupport("transform");
    var i = '<div class="ngp-dropdown _j_ngp_dropdown" style="display:none;"><div class="item _j_ngp_room_item"><div class="row-guests clearfix _j_ngp_row_guests"><span class="label">每间</span></div><div class="row-children clearfix _j_ngp_row_children" style="display:none;"><span class="label">儿童年龄</span></div></div><div class="item item-action clearfix _j_ngp_action_item"><span class="tips"></span><a class="btn-action" href="javascript:;">确 认</a></div></div>';
    var m = '<div class="ngp-select"><div class="select-trigger _j_ngp_select_trigger"><span></span><div class="caret"><i></i></div></div><ul style="display:none;"></ul></div>';
    var d = [{value: 1, text: 1}, {value: 2, text: 2}, {value: 3, text: 3}, {value: 4, text: 4}, {
        value: 5,
        text: 5
    }, {value: 6, text: 6}, {value: 7, text: 7}];
    var k = [{value: 0, text: 0}, {value: 1, text: 1}, {value: 2, text: 2}, {value: 3, text: 3}, {value: 4, text: 4}];
    var e = [{value: 0, text: "<1"}, {value: 1, text: 1}, {value: 2, text: 2}, {value: 3, text: 3}, {
        value: 4,
        text: 4
    }, {value: 5, text: 5}, {value: 6, text: 6}, {value: 7, text: 7}, {value: 8, text: 8}, {
        value: 9,
        text: 9
    }, {value: 10, text: 10}, {value: 11, text: 11}, {value: 12, text: 12}, {value: 13, text: 13}, {
        value: 14,
        text: 14
    }, {value: 15, text: 15}, {value: 16, text: 16}, {value: 17, text: 17}];
    var b = function (n) {
        var o = l.defaultGuests;
        if (l.isValid(n.numberAdults, n.numberChildren, n.childrenAge)) {
            this.numberAdults = n.numberAdults;
            this.numberChildren = n.numberChildren;
            this.childrenAge = n.childrenAge
        } else {
            this.numberAdults = o.numberAdults;
            this.numberChildren = o.numberChildren;
            this.childrenAge = o.childrenAge
        }
        this.isCached = n.isCached;
        this.isDisabled = n.isDisabled || false;
        this.isAlignRight = n.isAlignRight || false;
        this.snap = {
            numberAdults: this.numberAdults,
            numberChildren: this.numberChildren,
            childrenAge: this.childrenAge
        };
        this.isShow = false;
        this.$ele = $(n.element);
        this.$ele.addClass("number-guests-picker");
        this.$dropdown = null;
        this.numberAdultsSelect = null;
        this.numberChildrenSelect = null;
        this.childrenAgeSelects = [];
        this.createDropdown();
        this.renderSelect();
        this.renderDisabled();
        this.bindEvents()
    };
    b.prototype.createDropdown = function () {
        this.$dropdown = $(i).appendTo(this.$ele);
        if (this.isAlignRight) {
            this.$dropdown.addClass("align-right")
        }
    };
    b.prototype.renderSelect = function () {
        var n = this.$dropdown.find("._j_ngp_row_guests");
        if (!this.numberAdultsSelect) {
            this.numberAdultsSelect = new a({container: n[0], value: this.numberAdults, options: d, textSuffix: "成人"})
        } else {
            this.numberAdultsSelect.setValue(this.numberAdults)
        }
        if (!this.numberChildrenSelect) {
            this.numberChildrenSelect = new a({
                container: n[0],
                value: this.numberChildren,
                options: k,
                textSuffix: "儿童"
            })
        } else {
            this.numberChildrenSelect.setValue(this.numberChildren)
        }
        this.renderChildrenAgeSelects()
    };
    b.prototype.renderChildrenAgeSelects = function () {
        var p = this.$dropdown.find("._j_ngp_row_children");
        for (var o = 0; o < this.snap.childrenAge.length; o++) {
            var q = this.snap.childrenAge[o], n = this.childrenAgeSelects[o];
            if (!n) {
                n = new a({container: p[0], value: q, options: e, textSuffix: "岁", attrs: {index: o}});
                M.Event(n).on("value changed", M.bind(function (s, r) {
                    this.snap.childrenAge[r.index] = s
                }, this));
                this.childrenAgeSelects[o] = n
            } else {
                if (n.getValue() !== q) {
                    n.setValue(q)
                }
            }
        }
        for (var o = this.childrenAgeSelects.length - 1; o >= 0; o--) {
            if (M.isUndefined(this.snap.childrenAge[o])) {
                this.childrenAgeSelects[o].destroy();
                this.childrenAgeSelects.splice(o, 1)
            }
        }
        if (this.snap.childrenAge.length > 0) {
            p.show()
        } else {
            p.hide()
        }
    };
    b.prototype.renderDisabled = function () {
        var o = this.$dropdown.find("._j_ngp_action_item .tips"),
            n = this.$dropdown.find("._j_ngp_action_item .btn-action");
        if (this.isDisabled) {
            o.html("请优先选择日期，以便查询实时价格。");
            n.addClass("disabled")
        } else {
            o.html("");
            n.removeClass("disabled")
        }
    };
    b.prototype.bindEvents = function () {
        this.$ele.on("click", M.bind(function (n) {
            if (!$(n.target).closest(this.$dropdown)[0]) {
                if (this.isShow) {
                    this.hide()
                } else {
                    this.show()
                }
            }
        }, this));
        this.$dropdown.on("click", ".btn-action", M.bind(function (n) {
            if (!this.isDisabled) {
                this.syncData();
                this.hide()
            }
        }, this));
        $(document).on("click", M.bind(function (n) {
            if (this.isShow && !$(n.target).closest(this.$ele)[0]) {
                this.hide()
            }
        }, this));
        M.Event(this.numberAdultsSelect).on("value changed", M.bind(function (n) {
            this.snap.numberAdults = n
        }, this));
        M.Event(this.numberChildrenSelect).on("value changed", M.bind(function (o) {
            this.snap.numberChildren = o;
            var p = [];
            for (var n = 0; n < this.snap.numberChildren; n++) {
                p.push(0)
            }
            for (var n = 0; n < this.snap.childrenAge.length; n++) {
                if (this.snap.numberChildren > n) {
                    p[n] = this.snap.childrenAge[n]
                }
            }
            this.snap.childrenAge = p;
            this.renderChildrenAgeSelects()
        }, this))
    };
    b.prototype.syncData = function () {
        var o = false;
        if (this.numberAdults !== this.snap.numberAdults) {
            o = true
        }
        if (this.numberChildren !== this.snap.numberChildren) {
            o = true
        }
        if (this.childrenAge.length !== this.snap.childrenAge.length) {
            o = true
        } else {
            for (var n = 0; n < this.childrenAge.length; n++) {
                if (this.childrenAge[n] !== this.snap.childrenAge[n]) {
                    o = true
                }
            }
        }
        if (!this.isCached) {
            o = true
        }
        this.numberAdults = this.snap.numberAdults;
        this.numberChildren = this.snap.numberChildren;
        this.childrenAge = this.snap.childrenAge;
        this.isCached = true;
        if (o) {
            M.Event(this).fire("number guests picker changed", {
                numberAdults: this.numberAdults,
                numberChildren: this.numberChildren,
                childrenAge: this.childrenAge
            })
        }
    };
    b.prototype.syncSnap = function () {
        this.snap = {
            numberAdults: this.numberAdults,
            numberChildren: this.numberChildren,
            childrenAge: this.childrenAge
        }
    };
    b.prototype.setIsDisabled = function (n) {
        this.isDisabled = n;
        this.renderDisabled()
    };
    b.prototype.show = function () {
        this.syncSnap();
        this.renderSelect();
        if (j) {
            this.$dropdown.css({opacity: 0, marginTop: -16});
            setTimeout(M.bind(function () {
                this.$dropdown.css({opacity: 1, marginTop: 0})
            }, this), 1)
        }
        this.$dropdown.show();
        this.$ele.addClass("focus");
        this.isShow = true
    };
    b.prototype.hide = function () {
        this.$dropdown.css({opacity: 1, marginTop: 0});
        setTimeout(M.bind(function () {
            this.$dropdown.css({opacity: 0, marginTop: -16})
        }, this), 1);
        this.$dropdown.hide();
        this.$ele.removeClass("focus");
        this.isShow = false
    };
    var a = function (n) {
        this.textPrefix = n.textPrefix || "";
        this.textSuffix = n.textSuffix || "";
        this.value = n.value;
        this.options = n.options;
        this.attrs = n.attrs || {};
        this.isShowDropdown = false;
        this.globalClickHandler = M.bind(function (o) {
            if (this.isShowDropdown && !$(o.target).closest(this.$ele)[0]) {
                this.hideDropdown()
            }
        }, this);
        this.$container = $(n.container);
        this.$ele = null;
        this.$dropdown = null;
        this.createElement();
        this.setOptions();
        this.setValue(this.value);
        this.bindEvents()
    };
    a.prototype.createElement = function () {
        this.$ele = $(m).appendTo(this.$container);
        if (this.options.length > 7) {
            this.$ele.addClass("scroll-select")
        }
        this.$dropdown = this.$ele.find("ul")
    };
    a.prototype.bindEvents = function () {
        this.$ele.on("click", "._j_ngp_select_trigger", M.bind(function (n) {
            if (this.isShowDropdown) {
                this.hideDropdown()
            } else {
                this.showDropdown()
            }
        }, this)).on("click", "li", M.bind(function (n) {
            this.setValue($(n.currentTarget).data("value"));
            this.hideDropdown()
        }, this));
        $(document).on("click", this.globalClickHandler)
    };
    a.prototype.unbindEvents = function () {
        this.$ele.off();
        $(document).off("click", this.globalClickHandler)
    };
    a.prototype.setOptions = function () {
        var n = this.$ele.find("ul");
        n.empty();
        for (var o = 0; o < this.options.length; o++) {
            var p = this.options[o];
            n.append('<li data-value="' + p.value + '">' + p.text + "</li>")
        }
    };
    a.prototype.setValue = function (p) {
        this.value = p;
        var q;
        for (var n = 0; n < this.options.length; n++) {
            var o = this.options[n];
            if (this.value == o.value) {
                q = o.text;
                break
            }
        }
        if (this.$ele.find("span")[0]) {
            this.$ele.find("span").html((this.textPrefix ? this.textPrefix + " " : "") + q + (this.textSuffix ? " " + this.textSuffix : ""))
        } else {
            if (this.$ele.find('input[type="text"]')[0]) {
                this.$ele.find('input[type="text"]').value((this.textPrefix ? this.textPrefix + " " : "") + q + (this.textSuffix ? " " + this.textSuffix : ""))
            }
        }
        M.Event(this).fire("value changed", this.value, this.attrs)
    };
    a.prototype.getValue = function () {
        return this.value
    };
    a.prototype.showDropdown = function () {
        if (j) {
            this.$dropdown.css({opacity: 0, marginTop: -16});
            setTimeout(M.bind(function () {
                this.$dropdown.css({opacity: 1, marginTop: 0})
            }, this), 1)
        }
        this.$dropdown.show();
        this.isShowDropdown = true
    };
    a.prototype.hideDropdown = function () {
        if (j) {
            this.$dropdown.css({opacity: 1, marginTop: 0});
            setTimeout(M.bind(function () {
                this.$dropdown.css({opacity: 0, marginTop: -16})
            }, this), 1)
        }
        this.$dropdown.hide();
        this.isShowDropdown = false
    };
    a.prototype.destroy = function () {
        this.unbindEvents();
        this.$ele.remove()
    };
    c.exports = b
});
M.define("/js/hotel/module/ImageLoader", function (c, b, f) {
    var a = c("/js/hotel/module/ModuleProvider");
    var g = 100, e = 0;
    var d = {
        imageCache: {}, imageCacheQueue: [], loadStack: [], loadQueue: [], load: function (h, i, j, k) {
            M.isFunction(j) && (k = j);
            if (!M.is(j, "Number") || j === 0) {
                j = 4000
            }
            if (!this._isCached(h, k)) {
                this.loadStack.push({id: e++, url: h, callback: k, isImmediate: !!i, timeout: j, failureTimes: 0});
                this._load(i)
            }
        }, _load: function (n) {
            if (this.loadStack.length > 0 && (this.loadQueue.length <= 4 || n)) {
                if (n && this.loadQueue.length >= 4) {
                    var m = false;
                    for (var l = 0; l < this.loadQueue.length; l++) {
                        var h = this.loadQueue[l];
                        if (!h.isImmediate && h.loadDeferred.state() === "pending") {
                            h.loadDeferred.reject(h, true);
                            m = true;
                            break
                        }
                    }
                    if (!m) {
                        var h = this.loadQueue[0];
                        if (h.loadDeferred.state() === "pending") {
                            h.loadDeferred.reject(h, true)
                        }
                    }
                }
                var k = this.loadStack.pop(), j = $.Deferred(function (i) {
                    setTimeout(function () {
                        if (i.state() === "pending") {
                            i.reject(k)
                        }
                    }, k.timeout)
                });
                j.always(M.bind(function (i) {
                    i.image.onload = null;
                    i.image.onerror = null
                }, this)).done(M.bind(function (i) {
                    if (!this._isCached(i.url, i.callback)) {
                        if (this.imageCacheQueue.length > g) {
                            var p = this.imageCacheQueue.shift();
                            delete this.imageCache[p.src];
                            p = null
                        }
                        this.imageCache[i.url] = i.image;
                        this.imageCacheQueue.push(i.image);
                        if (typeof i.callback === "function") {
                            i.callback.call(null, i.image)
                        }
                    }
                }, this)).fail(M.bind(function (p, i) {
                    p.image = null;
                    if (i) {
                        this.loadStack.push(p)
                    } else {
                        if (p.failureTimes++ < 4) {
                            this.loadStack.unshift(p)
                        }
                    }
                }, this)).always(M.bind(function (p) {
                    for (var q = 0; q < this.loadQueue.length; q++) {
                        if (p.id === this.loadQueue[q].id) {
                            this.loadQueue.splice(q, 1)
                        }
                    }
                    this._load()
                }, this));
                k.loadDeferred = j;
                this.loadQueue.push(k);
                var o = new Image();
                k.image = o;
                o.onload = function () {
                    if (j.state() !== "rejected") {
                        j.resolve(k)
                    }
                };
                o.onerror = function () {
                    if (j.state() !== "rejected") {
                        j.reject(k)
                    }
                };
                o.src = k.url
            }
        }, _isCached: function (h, l) {
            if (this.imageCache[h]) {
                var k;
                for (var j = 0; j < this.imageCacheQueue.length; j++) {
                    k = this.imageCacheQueue[j];
                    if (k.src === h) {
                        this.imageCacheQueue.splice(j, 1);
                        this.imageCacheQueue.push(k);
                        break
                    }
                }
                if (typeof l === "function") {
                    l.call(null, k)
                }
                return true
            }
            return false
        }
    };
    a("__MFW_MODULE__.hotel").ImageLoader = {
        load: function (h, i, j, k) {
            d.load(h, i, j, k)
        }
    };
    b.load = function (h, i, j, k) {
        d.load(h, i, j, k)
    }
});
M.closure(function (o) {
    var G = o("/js/Dropdown"), A = o("/js/plugins/dynamics"), n = o("/js/hotel/module/Search_v2"),
        v = o("/js/hotel/module/DateRangePicker"), k = o("/js/hotel/module/BookingDate"), a = k.getDate(),
        D = o("/js/hotel/module/NumberGuestsPicker"), x = o("/js/hotel/module/BookingGuests"),
        q = o("/js/hotel/module/ImageLoader"), f = x.getGuests(), F = M.cssSupport("transition"),
        z = M.cssSupport("transform"), d = window.Env || {};
    d.hotel_booking_date = a;
    d.hotel_booking_guests = f;
    d.hotel_booking_guests.isRemind = x.hasRemind();
    var b = $("#_j_search_input"), w = $("#_j_search_shortcut_mdds"), u = new n({
        input: "_j_search_input",
        listContainer: "_j_search_suggest",
        isAutoForward: false,
        defaultSearch: function (j, i) {
            !!mfwPageEvent && mfwPageEvent("hotel", "index_distribution", {
                section: "search",
                type: "keyword",
                value: j
            });
            var I = "/hotel/s.php?keyword=" + j;
            if (!!i) {
                I += "&disautomatch=1"
            }
            window.location.href = I
        }
    });
    if (d.shortcut_mdds) {
        var t = $("<ul>");
        for (var C = 0; C < d.shortcut_mdds.length; C++) {
            var H = d.shortcut_mdds[C], s = $('<li class="clearfix"><h2>' + H.name + "</h2><p></p></li>").appendTo(t);
            for (var B = 0; B < H.mdds.length; B++) {
                var h = H.mdds[B];
                s.find("p").append('<a href="javascript:;" data-id="' + h.id + '" data-name="' + h.name + '">' + h.name + "</a>")
            }
        }
        w.append(t)
    }
    $("#_j_search_btn").on("click", M.bind(function (j) {
        var i = b.data("url");
        if (i) {
            window.location.href = i
        } else {
            u.defaultSearch()
        }
    }, this));
    b.on("focus", function (i) {
        if (!$.trim(b.val())) {
            w.show()
        } else {
            w.hide()
        }
    });
    $("body").on("click", function (j) {
        var i = $(j.target);
        if (!i.closest(w)[0] && !i.closest(b)[0]) {
            w.hide()
        }
    });
    w.on("click", "a", function (J) {
        var i = $(J.currentTarget), K = i.data("id"), I = i.data("name"), j = "/hotel/" + K + "/";
        if (!K) {
            j = ""
        }
        b.val(I);
        w.hide();
        !!mfwPageEvent && mfwPageEvent("hotel", "index_distribution", {section: "shortcut", type: "mdd", value: I});
        if (d.hotel_booking_date.isCached) {
            window.location.href = j
        } else {
            b.data("url", j);
            c.trigger("focus")
        }
    });
    M.Event(u).on("itemselected", function (J) {
        if (!J.item.hasClass("_j_listitem_default")) {
            var j = J.item.data("url"), i = J.item.data("name"), I = J.item.data("type");
            b.val(i);
            !!mfwPageEvent && mfwPageEvent("hotel", "index_distribution", {section: "suggestion", type: I, value: i});
            if (d.hotel_booking_date.isCached) {
                window.location.href = j
            } else {
                b.data("url", j);
                c.trigger("focus")
            }
        }
    });
    M.Event(u.suggestion).on("after hide list", function () {
        b.data("url", "");
        w.show()
    });
    M.Event(u.suggestion).on("before suggestion xhr", function () {
        b.data("url", "")
    });
    M.Event(u.suggestion).on("before show list", function () {
        w.hide()
    });
    var y = $("#_j_check_in_date"), E = $("#_j_check_out_date"), e = y.find("span"), r = E.find("span"),
        c = y.find("input"), m = E.find("input"), p = new v({
            startInput: c,
            endInput: m,
            startDate: d.hotel_booking_date.checkIn,
            endDate: d.hotel_booking_date.checkOut,
            minDate: (new XDate()).toString("yyyy-MM-dd"),
            maxDate: (new XDate()).addDays(365).toString("yyyy-MM-dd"),
            rangeMaxDays: 30,
            isDoublePick: true,
            isCached: a.isCached,
            _beforeShow: function (i, j) {
                $(j.input).closest("._j_booking_date_item").addClass("focus")
            },
            _onClose: function (i, j) {
                $(j.input).closest("._j_booking_date_item").removeClass("focus")
            }
        });
    if (d.hotel_booking_date.isCached) {
        e.html(d.hotel_booking_date.checkIn);
        r.html(d.hotel_booking_date.checkOut)
    } else {
        e.html("入住日期");
        r.html("离店日期")
    }
    y.on("click", function (i) {
        c.trigger("focus")
    });
    E.on("click", function (i) {
        m.trigger("focus")
    });
    M.Event(p).on("date range picker doublepicked", function (i) {
        d.hotel_booking_date.checkIn = i.startDate;
        d.hotel_booking_date.checkOut = i.endDate;
        d.hotel_booking_date.isCached = true;
        e.html(d.hotel_booking_date.checkIn);
        r.html(d.hotel_booking_date.checkOut);
        k.setDate(i.startDate, i.endDate, "index")
    });
    var g = $("#_j_booking_number_guests"), l = new D({
        element: g[0],
        numberAdults: f.numberAdults,
        numberChildren: f.numberChildren,
        childrenAge: f.childrenAge,
        isCached: f.isCached,
        isDisabled: !d.hotel_booking_date.isCached,
        isAlignRight: true
    });
    if (f.isCached) {
        g.find("> span").html(f.numberAdults + "成人 " + f.numberChildren + "儿童")
    } else {
        g.find("> span").html("人数未定")
    }
    M.Event(l).on("number guests picker changed", M.bind(function (i) {
        d.hotel_booking_guests.numberAdults = i.numberAdults;
        d.hotel_booking_guests.numberChildren = i.numberChildren;
        d.hotel_booking_guests.childrenAge = i.childrenAge;
        d.hotel_booking_guests.isCached = true;
        g.find("> span").html(i.numberAdults + "成人 " + i.numberChildren + "儿童");
        x.setGuests(i.numberAdults, i.numberChildren, i.childrenAge, "index")
    }, this));
    M.Event(p).on("date range picker doublepicked", function (i) {
        l.setIsDisabled(false);
        if (!d.hotel_booking_guests.isRemind) {
            d.hotel_booking_guests.isRemind = true;
            l.show();
            x.setRemind()
        }
    });
    (function () {
        function J(K) {
            this.$ele = $(K);
            this.$item = this.$ele.find(".fc-item");
            this.$shadow = this.$ele.find(".shadow");
            this.elWidth = this.$ele.width();
            this.elHeight = this.$ele.height();
            this.shadowValue = {width: 40, angle: 45};
            this.maxShadowWidth = 20;
            this.maxShadowAngle = 15;
            this.maxRotateX = 6;
            this.maxRotateY = 6;
            this.$item.on("mousemove", _.throttle(M.bind(this.onMouseMove, this), 16)).on("mouseleave", M.bind(this.onMouseLeave, this))
        }

        J.prototype = {
            onMouseMove: function (K) {
                var N = this.$ele.offset(), L = {x: K.pageX - N.left, y: K.pageY - N.top};
                this.move(L.x, L.y)
            }, onMouseLeave: function (K) {
                var L = this;
                setTimeout(function () {
                    A.stop(L.$item[0]);
                    A.animate(L.$item[0], {rotateX: 0, rotateY: 0}, {type: A.spring, duration: 1500});
                    A.stop(L.shadowValue);
                    A.animate(L.shadowValue, {width: 40, angle: 45}, {
                        type: A.spring, duration: 1500, change: function (N) {
                            A.css(L.$shadow[0], {backgroundImage: "linear-gradient(" + N.angle + "deg, rgba(0,0,0,0.4), transparent " + N.width + "%)"})
                        }
                    })
                }, 16)
            }, move: function (R, Q) {
                var S = this.elHeight / 2, O = this.elWidth / 2, K = -1 * (O - R), P = S - Q,
                    U = P / S * this.maxRotateY, T = K / O * this.maxRotateX, N = P / S * this.maxShadowWidth,
                    L = K / O * this.maxShadowAngle;
                A.stop(this.$item[0]);
                A.css(this.$item[0], {rotateX: U, rotateY: T});
                this.shadowValue.width = 40 - N;
                this.shadowValue.angle = 45 + L;
                A.stop(this.shadowValue);
                A.css(this.$shadow[0], {backgroundImage: "linear-gradient(" + this.shadowValue.angle + "deg, rgba(0,0,0,0.4), transparent " + this.shadowValue.width + "%)"})
            }
        };
        var j = $("#_j_features"), i = j.find("._j_tab_trigger"), I = j.find("._j_tab_content");
        i.on("click", "a", function (N) {
            var K = $(N.currentTarget), O = K.data("id");
            i.find("a").removeClass("on");
            K.addClass("on");
            var L = I.find('ul[data-id="' + O + '"]');
            I.find("ul").hide();
            L.show();
            L.find("img").each(function () {
                var Q = $(this);
                var P = Q.attr("data-src");
                if (P) {
                    q.load(P, true, function (R) {
                        Q.attr("src", R.src);
                        Q.addClass("img-show")
                    });
                    Q.removeAttr("data-src")
                }
            })
        });
        $tabTriggerOne = i.find('a[data-id="0"]');
        $tabContentOne = I.find('ul[data-id="0"]');
        $tabTriggerOne.trigger("click");
        I.find("li").each(function (K, L) {
            new J(L)
        });
        I.on("click", "a", function (O) {
            var K = $(O.currentTarget), N = K.data("type"), L = K.data("name");
            !!mfwPageEvent && mfwPageEvent("hotel", "index_distribution", {section: "feature", type: N, value: L})
        })
    }());
    (function () {
        var L = $("#_j_sales"), j = L.find("._j_tab_trigger"), K = L.find("._j_tab_content"), J = [], N = {},
            I = ["dujiake", "zizaike", "fishtrip", "ezding"];
        $.ajax({url: "/hotel/index/sales", dataType: "json"}).done(function (O) {
            if (O.ret == 1) {
                var P = O.msg.list;
                _.each(P, function (S, Q, T) {
                    j.append('<a href="javascript:;" data-id="' + Q + '">' + S.name + "</a>");
                    var R = $('<ul class="clearfix" style="display:none;" data-id="' + Q + '">').appendTo(K);
                    _.each(S.list, function (Y, U, X) {
                        if (U < 8) {
                            var V = Y.zh_name || Y.foreign_name;
                            var W = '<li data-id="' + Y.id + '" data-mddid="' + Y.mddid + '" data-youyu-id="' + Y.youyu_id + '" data-ota-id="' + Y.ota_id + '"><a href="/hotel/' + Y.id + '.html" target="_blank" data-type="hotel" data-name="' + V + '">';
                            W += '<div class="pic"><img data-src="' + Y.img_w480_h480 + '"></div><div class="bag-opa"></div>';
                            W += (Y.comment_rank_detail && Y.comment_rank_detail.hotel_score ? '<div class="fraction">' + Y.comment_rank_detail.hotel_score.score + "分</div>" : "") + '<div class="info"><div class="prize"></div><p>' + V + '</p><p class="eng">' + (Y.zh_name ? Y.foreign_name : "") + "</p></div></a></li>";
                            R.append(W)
                        }
                    })
                });
                $tabTriggerOne = j.find('a[data-id="0"]');
                $tabContentOne = K.find('ul[data-id="0"]');
                $tabTriggerOne.trigger("click");
                i()
            }
        });
        j.on("click", "a", function (Q) {
            var O = $(Q.currentTarget), R = O.data("id");
            j.find("a").removeClass("on");
            O.addClass("on");
            var P = K.find('ul[data-id="' + R + '"]');
            K.find("ul").hide();
            P.show();
            P.find("img").each(function () {
                var T = $(this);
                var S = T.attr("data-src");
                if (S) {
                    q.load(S, true, function (U) {
                        T.attr("src", U.src);
                        T.addClass("img-show")
                    });
                    T.removeAttr("data-src")
                }
            })
        });

        function i() {
            K.find("li").each(function (O, P) {
                var R = $(P), Q = R.data("id");
                J.push(Q)
            });
            $.ajax({
                url: "/rest/hotel/booking/",
                data: {
                    page: {mode: "random_next", num: J.length, no: 1},
                    filter: {poi_ids: J.join("S"), check_in: a.checkIn, check_out: a.checkOut}
                },
                dataType: "json"
            }).done(function (O) {
                if (O.errno !== 0) {
                    return
                }
                $.each(O.data.list, function (X, R) {
                    var V = K.find('li[data-id="' + R.id + '"]'), Q = V.data("mddid"), P = R.booking_info;
                    if (V[0]) {
                        var Z = 0, S = 0, W = 0;
                        V.data("otaCount", P.length);
                        for (var T = 0; T < P.length; T++) {
                            var Y = P[T];
                            if (Y.is_cache_price && !Y.is_sold_out) {
                                if (Y.price > 0) {
                                    if (Z === 0 || Y.price < Z) {
                                        Z = Y.price
                                    }
                                }
                                W++
                            } else {
                                if (Q && !_.contains(I.concat(["airbnb", "onyx"]), Y.ota)) {
                                    if (Y.price > 0) {
                                        if (Z === 0 || Y.price < S) {
                                            S = Y.price
                                        }
                                    }
                                    N[Q] || (N[Q] = {});
                                    N[Q][Y.ota] || (N[Q][Y.ota] = []);
                                    N[Q][Y.ota].push(R.id)
                                }
                            }
                            V.data("lowestPrice", Z).data("defaultPrice", S).data("realTimeCount", W);
                            if (Z > 0) {
                                var U = "<span>¥<b>" + Math.round(Z) + "</b></span><i>¥" + Math.round(Z / 0.85) + "</i>";
                                V.data("isValid", true).find(".prize").html(U)
                            }
                        }
                    }
                });
                _.each(N, function (P, Q) {
                    if (P.ctrip) {
                        var R = P.ctrip;
                        if (R.length > 10) {
                            N.ctrip = R.slice(0, 9);
                            N.ctrip2 = R.slice(10, R.length)
                        }
                    }
                    _.each(P, function (S, T) {
                        if ("ctrip2" === T) {
                            T = "ctrip"
                        }
                        $.ajax({
                            url: "/hotel/ajax_remote/price",
                            data: {
                                poi_ids: S.join(","),
                                ota: T,
                                mddid: Q,
                                check_in: a.checkIn,
                                check_out: a.checkOut,
                                platform: "www"
                            }
                        }).done(function (V) {
                            var U = V && V.data;
                            if (!V || V.error || !U) {
                                return
                            }
                            _.each(U, function (Z, ab) {
                                var aa = K.find('li[data-id="' + ab + '"]'), X = aa.data("lowestPrice"),
                                    Y = aa.data("otaCount"), W = aa.data("realTimeCount");
                                aa.data("realTimeCount", ++W);
                                _.each(Z.list, function (ad, af) {
                                    if (af == T) {
                                        if (ad > 0 && (X == 0 || ad < X)) {
                                            var ae = "<span>¥<b>" + Math.round(ad) + "</b></span><i>¥" + Math.round(ad / 0.85) + "</i>";
                                            aa.data("lowestPrice", ad).data("isValid", true).find(".prize").html(ae)
                                        } else {
                                            if (W == Y && X == 0) {
                                                var ac = aa.data("defaultPrice"),
                                                    ae = "<span>¥<b>" + Math.round(ac) + "</b></span><i>¥" + Math.round(ac / 0.85) + "</i>";
                                                aa.data("isValid", false).find(".prize").html(ae)
                                            }
                                        }
                                    }
                                })
                            })
                        })
                    })
                })
            })
        }

        K.on("click", "a", function (R) {
            var O = $(R.currentTarget), Q = O.data("type"), P = O.data("name");
            O.attr("href", O.attr("href") + "#checkin=" + a.checkIn + "&checkout=" + a.checkOut);
            !!mfwPageEvent && mfwPageEvent("hotel", "index_distribution", {section: "sales", type: Q, value: P})
        })
    }())
});