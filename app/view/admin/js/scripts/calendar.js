/**
 * @license RequireJS domReady 2.0.0 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

/**
 * jQuery Masonry v2.1.05
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */

/*
 * smartresize: debounced resize event for jQuery
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery.smartresize.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 */

/*!
 * jQuery imagesLoaded plugin v1.1.0
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */

/* ===========================================================
 * bootstrap-tooltip.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/* ===========================================================
 * bootstrap-popover.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */

/**
 * History.js jQuery Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * History.js HTML4 Support
 * Depends on the HTML5 Support
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * History.getInternetExplorerMajorVersion()
 * Get's the major version of Internet Explorer
 * @return {integer}
 * @license Public Domain
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @author James Padolsey <https://gist.github.com/527683>
 */

/**
 * History.isInternetExplorer()
 * Are we using Internet Explorer?
 * @return {boolean}
 * @license Public Domain
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 */

/*

 Copyright (c) 2009 Dimas Begunoff, http://www.farinspace.com

 Licensed under the MIT license
 http://en.wikipedia.org/wiki/MIT_License

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.

 */

/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 06/05/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 *		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number, Function} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @desc Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @desc Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */

/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */

timely.define("domReady", [], function () {
    function u(e) {
        var t;
        for(t = 0; t < e.length; t++)e[t](n)
    }

    function a() {
        var e = r;
        t && e.length && (r = [], u(e))
    }

    function f() {
        t || (t = !0, o && clearInterval(o), a())
    }

    function c(e) {
        return t ? e(n) : r.push(e), c
    }

    var e = typeof window != "undefined" && window.document, t = !e, n = e ? document : null, r = [], i, s, o;
    if(e) {
        if(document.addEventListener) {
            document.addEventListener("DOMContentLoaded", f, !1), window.addEventListener("load", f, !1);
        } else if(window.attachEvent) {
            window.attachEvent("onload", f), s = document.createElement("div");
            try {
                i = window.frameElement === null
            } catch(l) {
            }
            s.doScroll && i && window.external && (o = setInterval(function () {
                try {
                    s.doScroll(), f()
                } catch(e) {
                }
            }, 30))
        }
        (document.readyState === "complete" || document.readyState === "interactive") && f()
    }
    return c.version = "2.0.0", c.load = function (e, t, n, r) {
        r.isBuild ? n(null) : c(n)
    }, c
}), timely.define("scripts/calendar/print", ["jquery"], function (e) {
    var t = function (t) {
        t.preventDefault();
        var n = e("body"), r = e("html"), i = e("#ai1ec-container").html(), s = n.html();
        s = s.replace(/<script.*?>([\s\S]*?)<\/script>/gmi, ""), n.empty(), n.addClass("timely"), r.addClass("ai1ec-print"), n.html(i), e("span").click(function () {
            return!1
        }), window.print(), n.removeClass("timely"), r.removeClass("ai1ec-print"), n.html(s)
    };
    return{handle_click_on_print_button:t}
}), timely.define("external_libs/jquery.masonry", ["jquery"], function (e) {
    (function (e, t, n) {
        var r = t.event, i;
        r.special.smartresize = {setup:function () {
            t(this).bind("resize", r.special.smartresize.handler)
        }, teardown:function () {
            t(this).unbind("resize", r.special.smartresize.handler)
        }, handler:function (e, n) {
            var r = this, s = arguments;
            e.type = "smartresize", i && clearTimeout(i), i = setTimeout(function () {
                t.event.handle.apply(r, s)
            }, n === "execAsap" ? 0 : 100)
        }}, t.fn.smartresize = function (e) {
            return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
        }, t.Mason = function (e, n) {
            this.element = t(n), this._create(e), this._init()
        }, t.Mason.settings = {isResizable:!0, isAnimated:!1, animationOptions:{queue:!1, duration:500}, gutterWidth:0, isRTL:!1, isFitWidth:!1, containerStyle:{position:"relative"}}, t.Mason.prototype = {_filterFindBricks:function (e) {
            var t = this.options.itemSelector;
            return t ? e.filter(t).add(e.find(t)) : e
        }, _getBricks:function (e) {
            var t = this._filterFindBricks(e).css({position:"absolute"}).addClass("masonry-brick");
            return t
        }, _create:function (n) {
            this.options = t.extend(!0, {}, t.Mason.settings, n), this.styleQueue = [];
            var r = this.element[0].style;
            this.originalStyle = {height:r.height || ""};
            var i = this.options.containerStyle;
            for(var s in i)this.originalStyle[s] = r[s] || "";
            this.element.css(i), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {x:parseInt(this.element.css("padding-" + this.horizontalDirection), 10), y:parseInt(this.element.css("padding-top"), 10)}, this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
            var o = this;
            setTimeout(function () {
                o.element.addClass("masonry")
            }, 0), this.options.isResizable && t(e).bind("smartresize.masonry", function () {
                o.resize()
            }), this.reloadItems()
        }, _init:function (e) {
            this._getColumns(), this._reLayout(e)
        }, option:function (e, n) {
            t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
        }, layout:function (e, t) {
            for(var n = 0, r = e.length; n < r; n++)this._placeBrick(e[n]);
            var i = {};
            i.height = Math.max.apply(Math, this.colYs);
            if(this.options.isFitWidth) {
                var s = 0;
                n = this.cols;
                while(--n) {
                    if(this.colYs[n] !== 0) {
                        break;
                    }
                    s++
                }
                i.width = (this.cols - s) * this.columnWidth - this.options.gutterWidth
            }
            this.styleQueue.push({$el:this.element, style:i});
            var o = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css", u = this.options.animationOptions, a;
            for(n = 0, r = this.styleQueue.length; n < r; n++)a = this.styleQueue[n], a.$el[o](a.style, u);
            this.styleQueue = [], t && t.call(e), this.isLaidOut = !0
        }, _getColumns:function () {
            var e = this.options.isFitWidth ? this.element.parent() : this.element, t = e.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(t) : this.options.columnWidth || this.$bricks.outerWidth(!0) || t, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((t + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, _placeBrick:function (e) {
            var n = t(e), r, i, s, o, u;
            r = Math.ceil(n.outerWidth(!0) / this.columnWidth), r = Math.min(r, this.cols);
            if(r === 1) {
                s = this.colYs;
            } else {
                i = this.cols + 1 - r, s = [];
                for(u = 0; u < i; u++)o = this.colYs.slice(u, u + r), s[u] = Math.max.apply(Math, o)
            }
            var a = Math.min.apply(Math, s), f = 0;
            for(var l = 0, c = s.length; l < c; l++)if(s[l] === a) {
                f = l;
                break
            }
            var h = {top:a + this.offset.y};
            h[this.horizontalDirection] = this.columnWidth * f + this.offset.x, this.styleQueue.push({$el:n, style:h});
            var p = a + n.outerHeight(!0), d = this.cols + 1 - c;
            for(l = 0; l < d; l++)this.colYs[f + l] = p
        }, resize:function () {
            var e = this.cols;
            this._getColumns(), (this.isFluid || this.cols !== e) && this._reLayout()
        }, _reLayout:function (e) {
            var t = this.cols;
            this.colYs = [];
            while(t--)this.colYs.push(0);
            this.layout(this.$bricks, e)
        }, reloadItems:function () {
            this.$bricks = this._getBricks(this.element.children())
        }, reload:function (e) {
            this.reloadItems(), this._init(e)
        }, appended:function (e, t, n) {
            if(t) {
                this._filterFindBricks(e).css({top:this.element.height()});
                var r = this;
                setTimeout(function () {
                    r._appended(e, n)
                }, 1)
            } else {
                this._appended(e, n)
            }
        }, _appended:function (e, t) {
            var n = this._getBricks(e);
            this.$bricks = this.$bricks.add(n), this.layout(n, t)
        }, remove:function (e) {
            this.$bricks = this.$bricks.not(e), e.remove()
        }, destroy:function () {
            this.$bricks.removeClass("masonry-brick").each(function () {
                this.style.position = "", this.style.top = "", this.style.left = ""
            });
            var n = this.element[0].style;
            for(var r in this.originalStyle)n[r] = this.originalStyle[r];
            this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), t(e).unbind(".masonry")
        }}, t.fn.imagesLoaded = function (e) {
            function u() {
                e.call(n, r)
            }

            function a(e) {
                var n = e.target;
                n.src !== s && t.inArray(n, o) === -1 && (o.push(n), --i <= 0 && (setTimeout(u), r.unbind(".imagesLoaded", a)))
            }

            var n = this, r = n.find("img").add(n.filter("img")), i = r.length, s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", o = [];
            return i || u(), r.bind("load.imagesLoaded error.imagesLoaded", a).each(function () {
                var e = this.src;
                this.src = s, this.src = e
            }), n
        };
        var s = function (t) {
            e.console && e.console.error(t)
        };
        t.fn.masonry = function (e) {
            if(typeof e == "string") {
                var n = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var r = t.data(this, "masonry");
                    if(!r) {
                        s("cannot call methods on masonry prior to initialization; attempted to call method '" + e + "'");
                        return
                    }
                    if(!t.isFunction(r[e]) || e.charAt(0) === "_") {
                        s("no such method '" + e + "' for masonry instance");
                        return
                    }
                    r[e].apply(r, n)
                })
            } else {
                this.each(function () {
                    var n = t.data(this, "masonry");
                    n ? (n.option(e || {}), n._init()) : t.data(this, "masonry", new t.Mason(e, this))
                });
            }
            return this
        }
    })(window, e)
}), timely.define("scripts/calendar/posterboard_view", ["jquery", "external_libs/jquery.masonry"], function (e, t) {
    var n = function () {
        var t = e(".ai1ec-posterboard-view"), n = e("> .ai1ec-event", t), r, i, s;
        if(t.length === 0) {
            return;
        }
        r = t.parent().width(), i = t.data("ai1ecTileMinWidth"), s = Math.floor(r / i), s = Math.min(s, n.length), i = Math.floor(r / s), t.css("width", "auto"), n.width(i), t.imagesLoaded(function () {
            var n = e("#ai1ec-calendar-view-loading");
            t.masonry({itemSelector:".ai1ec-event", isFitWidth:!0, isResizable:!1, isAnimated:!0, columnWidth:i, animationOptions:{easing:"swing"}})
        }), t.imagesLoaded(function () {
            t.masonry("reload")
        })
    }, r = function () {
        e(".ai1ec-posterboard-view").masonry("reload")
    };
    return{resize_masonry:n, reload_masonry:r}
}), timely.define("scripts/calendar/agenda_view", ["jquery"], function (e) {
    var t = function () {
        e(this).closest(".ai1ec-event").toggleClass("ai1ec-expanded").find(".ai1ec-event-summary").slideToggle(300)
    }, n = function () {
        e(".ai1ec-expanded .ai1ec-event-toggle").click()
    }, r = function () {
        e(".ai1ec-event:not(.ai1ec-expanded) .ai1ec-event-toggle").click()
    };
    return{toggle_event:t, collapse_all:n, expand_all:r}
}), timely.define("external_libs/modernizr", [], function () {
    var e = function (e, t, n) {
        function S(e) {
            f.cssText = e
        }

        function x(e, t) {
            return S(h.join(e + ";") + (t || ""))
        }

        function T(e, t) {
            return typeof e === t
        }

        function N(e, t) {
            return!!~("" + e).indexOf(t)
        }

        function C(e, t, r) {
            for(var i in e) {
                var s = t[e[i]];
                if(s !== n) {
                    return r === !1 ? e[i] : T(s, "function") ? s.bind(r || t) : s
                }
            }
            return!1
        }

        var r = "2.5.3", i = {}, s = !0, o = t.documentElement, u = "modernizr", a = t.createElement(u), f = a.style, l, c = {}.toString, h = " -webkit- -moz- -o- -ms- ".split(" "), p = {}, d = {}, v = {}, m = [], g = m.slice, y, b = function (e, n, r, i) {
            var s, a, f, l = t.createElement("div"), c = t.body, h = c ? c : t.createElement("body");
            if(parseInt(r, 10)) {
                while(r--)f = t.createElement("div"), f.id = i ? i[r] : u + (r + 1), l.appendChild(f);
            }
            return s = ["&#173;", "<style>", e, "</style>"].join(""), l.id = u, (c ? l : h).innerHTML += s, h.appendChild(l), c || (h.style.background = "", o.appendChild(h)), a = n(l, e), c ? l.parentNode.removeChild(l) : h.parentNode.removeChild(h), !!a
        }, w = {}.hasOwnProperty, E;
        !T(w, "undefined") && !T(w.call, "undefined") ? E = function (e, t) {
            return w.call(e, t)
        } : E = function (e, t) {
            return t in e && T(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var n = this;
            if(typeof n != "function") {
                throw new TypeError;
            }
            var r = g.call(arguments, 1), i = function () {
                if(this instanceof i) {
                    var e = function () {
                    };
                    e.prototype = n.prototype;
                    var s = new e, o = n.apply(s, r.concat(g.call(arguments)));
                    return Object(o) === o ? o : s
                }
                return n.apply(t, r.concat(g.call(arguments)))
            };
            return i
        });
        var k = function (n, r) {
            var s = n.join(""), o = r.length;
            b(s, function (n, r) {
                var s = t.styleSheets[t.styleSheets.length - 1], u = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "", a = n.childNodes, f = {};
                while(o--)f[a[o].id] = a[o];
                i.touch = "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch || (f.touch && f.touch.offsetTop) === 9
            }, o, r)
        }([, ["@media (", h.join("touch-enabled),("), u, ")", "{#touch{top:9px;position:absolute}}"].join("")], [, "touch"]);
        p.touch = function () {
            return i.touch
        };
        for(var L in p)E(p, L) && (y = L.toLowerCase(), i[y] = p[L](), m.push((i[y] ? "" : "no-") + y));
        return S(""), a = l = null, i._version = r, i._prefixes = h, i.testStyles = b, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + m.join(" ") : ""), i
    }(window, window.document);
    return e
}), timely.define("scripts/calendar/month_view", ["jquery", "external_libs/modernizr"], function (e, t) {
    var n = function () {
        var t = e(".ai1ec-day"), n = e(".ai1ec-week:first .ai1ec-day").length;
        e(".ai1ec-month-view .ai1ec-multiday").each(function () {
            var n = this.parentNode, s = e(this).outerHeight(!0), o = parseInt(e(this).data("endDay"), 10), u = e(".ai1ec-date", n), a = parseInt(u.text(), 10), f = e(this).data("endTruncated");
            f && (o = parseInt(e(t[t.length - 1]).text(), 10));
            var l = e(this), c = e(".ai1ec-event", l)[0].style.backgroundColor, h = 0, p = o - a + 1, d = p, v, m = 0;
            t.each(function (t) {
                var n = e(".ai1ec-date", this), s = e(this.parentNode), u = s.index(), f = parseInt(n.text(), 10);
                if(f >= a && f <= o) {
                    f === a && (v = parseInt(n.css("marginBottom"), 10) + 16), h === 0 && m++;
                    if(u === 0 && f > a && d !== 0) {
                        var p = l.next(".ai1ec-popup").andSelf().clone(!1);
                        n.parent().append(p);
                        var g = p.first();
                        g.addClass("ai1ec-multiday-bar ai1ec-multiday-clone"), g.css({position:"absolute", left:"1px", top:parseInt(n.css("marginBottom"), 10) + 13, backgroundColor:c});
                        var y = d > 7 ? 7 : d;
                        g.css("width", r(y)), d > 7 && g.append(i(1, c)), g.append(i(2, c))
                    }
                    h === 0 ? n.css({marginBottom:v + "px"}) : n.css({marginBottom:"+=16px"}), d--, d > 0 && u == 6 && h++
                }
            });
            if(f) {
                var g = e("." + l[0].className.replace(/\s+/igm, ".")).last();
                g.append(i(1, c))
            }
            e(this).css({position:"absolute", top:u.outerHeight(!0) - s - 1 + "px", left:"1px", width:r(m)}), h > 0 && e(this).append(i(1, c)), e(this).data("startTruncated") && e(this).append(i(2, c)).addClass("ai1ec-multiday-bar")
        })
    }, r = function (t) {
        var n;
        switch(t) {
            case 1:
                n = 97.5;
                break;
            case 2:
                n = 198.7;
                break;
            case 3:
                n = 300;
                break;
            case 4:
                n = 401;
                break;
            case 5:
                e.browser.webkit || e.browser.opera ? n = 507 : n = 503.4;
                break;
            case 6:
                e.browser.webkit || e.browser.opera ? n = 608 : n = 603.5;
                break;
            case 7:
                e.browser.webkit || e.browser.opera ? n = 709 : n = 705
        }
        return n + "%"
    }, i = function (t, n) {
        var r = e('<div class="ai1ec-multiday-arrow' + t + '"></div>');
        return t === 1 ? r.css({borderLeftColor:n}) : r.css({borderTopColor:n, borderRightColor:n, borderBottomColor:n}), r
    };
    return{extend_multiday_events:n}
}), timely.define("libs/frontend_utils", [], function () {
    var e = function (e) {
        var t, n;
        t = function (e) {
            if(/&[^;]+;/.test(e)) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.firstChild ? t.firstChild.nodeValue : e
            }
            return e
        };
        if(typeof e == "string") {
            return t(e);
        }
        if(typeof e == "object") {
            for(n in e)typeof e[n] == "string" && (e[n] = t(e[n]));
        }
        return e
    }, t = function (e, t, n) {
        var r, i, s, o, u;
        if("#" === e.charAt(0) || "?" === e.charAt(0)) {
            e = e.substring(1);
        }
        r = {}, e = e.split(t);
        for(i = 0; i < e.length; i++)o = e[i].trim(), -1 !== (u = o.indexOf(n)) ? (s = o.substring(0, u).trim(), o = o.substring(u + 1).trim()) : (s = o, o = !0), r[s] = o;
        return r
    }, n = function (e) {
        var n, r, i, s, o;
        e = t(e, "&", "="), i = Object.keys(e), n = {ai1ec:{}, action:"posterboard"};
        for(r = 0; r < i.length; r++)if("ai1ec" === i[r]) {
            var u = t(e[i[r]], "|", ":");
            for(s in u)if("" !== u[s]) {
                if("action" === s || "view" === s) {
                    n.action = u[s];
                }
                n.ai1ec[s] = u[s]
            }
        } else {
            "ai1ec_" === i[r].substring(0, 6) ? n.ai1ec[i[r].substring(6)] = e[i[r]] : n[i[r]] = e[i[r]];
        }
        "ai1ec_" !== n.action.substring(0, 6) && (n.action = "ai1ec_" + n.action), o = "action=" + n.action + "&ai1ec=";
        for(s in n.ai1ec)n.ai1ec.hasOwnProperty(s) && (o += escape(s) + ":" + escape(n.ai1ec[s]) + "|");
        o = o.substring(0, o.length - 1);
        for(s in n)"ai1ec" !== s && "action" !== s && (o += "&" + s + "=" + escape(n[s]));
        return o
    };
    return{ai1ec_convert_entities:e, ai1ec_map_internal_query:n, ai1ec_tokenize_uri:t}
}), timely.define("scripts/common_scripts/frontend/common_event_handlers", ["jquery", "scripts/calendar/posterboard_view"], function (e, t) {
    var n = function (t) {
        var n = e(this), r = n.next(".ai1ec-popup"), i, s, o;
        if(r.length == 0) {
            return;
        }
        i = r.html(), s = r.attr("class");
        var u = n.closest("#ai1ec-calendar-view");
        u.length === 0 && (u = e("body")), n.offset().left - u.offset().left > 182 ? o = "left" : o = "right", n.constrained_popover({content:i, title:"", placement:o, trigger:"manual", html:!0, template:'<div class="timely popover ' + s + '"><div class="arrow"></div><div class="popover-inner">' + '<div class="popover-content"><div></div></div></div></div></div>', container:".ai1ec-popover-boundary"}).constrained_popover("show")
    }, r = function (t) {
        var n = e(t.toElement || t.relatedTarget);
        n.closest(".ai1ec-popup").length == 0 && e(this).constrained_popover("hide")
    }, i = function (t) {
        var n = e(t.toElement || t.relatedTarget);
        n.closest(".tooltip").length == 0 && (e(this).remove(), e("body > .tooltip").remove())
    }, s = function (t) {
        var n = e(this), r = {template:'<div class="timely tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}, i = n.closest(".ai1ec-popup").length;
        i && (r.trigger = "manual"), n.tooltip(r), i && n.tooltip("show")
    }, o = function (t) {
        var n = e(t.toElement || t.relatedTarget);
        n.closest(".tooltip").length == 0 && e(this).tooltip("hide")
    }, u = function (t) {
        var n = e(t.toElement || t.relatedTarget);
        n.closest(".ai1ec-tooltip-trigger").length == 0 && e(this).remove(), n.closest(".ai1ec-popup").length == 0 && e("body > .ai1ec-popup").remove()
    }, a = function (n) {
        t.resize_masonry(), e("html").is("#ie8")
    };
    return{handle_popover_over:n, handle_popover_out:r, handle_popover_self_out:i, handle_tooltip_over:s, handle_tooltip_out:o, handle_tooltip_self_out:u, handle_fonts_loaded:a}
}), timely.define("external_libs/bootstrap_tooltip", ["jquery"], function (e) {
    if(!e.fn.tooltip) {
        var t = function (e, t) {
            this.init("tooltip", e, t)
        };
        t.prototype = {constructor:t, init:function (t, n, r) {
            var i, s;
            this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, this.options.trigger != "manual" && (i = this.options.trigger == "hover" ? "mouseenter" : "focus", s = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(i, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {trigger:"manual", selector:""}) : this.fixTitle()
        }, getOptions:function (t) {
            return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()), t.delay && typeof t.delay == "number" && (t.delay = {show:t.delay, hide:t.delay}), t
        }, enter:function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            if(!n.options.delay || !n.options.delay.show) {
                return n.show();
            }
            clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function () {
                n.hoverState == "in" && n.show()
            }, n.options.delay.show)
        }, leave:function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            this.timeout && clearTimeout(this.timeout);
            if(!n.options.delay || !n.options.delay.hide) {
                return n.hide();
            }
            n.hoverState = "out", this.timeout = setTimeout(function () {
                n.hoverState == "out" && n.hide()
            }, n.options.delay.hide)
        }, show:function () {
            var e, t, n, r, i, s, o;
            if(this.hasContent() && this.enabled) {
                e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(s), e.remove().css({top:0, left:0, display:"block"}).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, i = e[0].offsetHeight;
                switch(t ? s.split(" ")[1] : s) {
                    case"bottom":
                        o = {top:n.top + n.height, left:n.left + n.width / 2 - r / 2};
                        break;
                    case"top":
                        o = {top:n.top - i, left:n.left + n.width / 2 - r / 2};
                        break;
                    case"left":
                        o = {top:n.top + n.height / 2 - i / 2, left:n.left - r};
                        break;
                    case"right":
                        o = {top:n.top + n.height / 2 - i / 2, left:n.left + n.width}
                }
                e.css(o).addClass(s).addClass("in")
            }
        }, isHTML:function (e) {
            return typeof e != "string" || e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(e)
        }, setContent:function () {
            var e = this.tip(), t = this.getTitle();
            e.find(".tooltip-inner")[this.isHTML(t) ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, hide:function () {
            function r() {
                var t = setTimeout(function () {
                    n.off(e.support.transition.end).remove()
                }, 500);
                n.one(e.support.transition.end, function () {
                    clearTimeout(t), n.remove()
                })
            }

            var t = this, n = this.tip();
            n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r() : n.remove()
        }, fixTitle:function () {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
        }, hasContent:function () {
            return this.getTitle()
        }, getPosition:function (t) {
            return e.extend({}, t ? {top:0, left:0} : this.$element.offset(), {width:this.$element[0].offsetWidth, height:this.$element[0].offsetHeight})
        }, getTitle:function () {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
        }, tip:function () {
            return this.$tip = this.$tip || e(this.options.template)
        }, validate:function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, enable:function () {
            this.enabled = !0
        }, disable:function () {
            this.enabled = !1
        }, toggleEnabled:function () {
            this.enabled = !this.enabled
        }, toggle:function () {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        }}, e.fn.tooltip = function (n) {
            return this.each(function () {
                var r = e(this), i = r.data("tooltip"), s = typeof n == "object" && n;
                i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
            })
        }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {animation:!0, placement:"top", selector:!1, template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger:"hover", title:"", delay:0}
    }
}), timely.define("external_libs/bootstrap_popover", ["jquery", "external_libs/bootstrap_tooltip"], function (e, t) {
    if(!e.fn.popover) {
        var n = function (e, t) {
            this.init("popover", e, t)
        };
        n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {constructor:n, setContent:function () {
            var e = this.tip(), t = this.getTitle(), n = this.getContent();
            e.find(".popover-title")[this.isHTML(t) ? "html" : "text"](t), e.find(".popover-content > *")[this.isHTML(n) ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
        }, hasContent:function () {
            return this.getTitle() || this.getContent()
        }, getContent:function () {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content), e
        }, tip:function () {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        }}), e.fn.popover = function (t) {
            return this.each(function () {
                var r = e(this), i = r.data("popover"), s = typeof t == "object" && t;
                i || r.data("popover", i = new n(this, s)), typeof t == "string" && i[t]()
            })
        }, e.fn.popover.Constructor = n, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {placement:"right", content:"", template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})
    }
    if(!e.fn.constrained_popover) {
        var r = function (e, t) {
            this.init("constrained_popover", e, t)
        };
        r.prototype = e.extend({}, e.fn.popover.Constructor.prototype, {constructor:r, show:function () {
            var e, t, n, r, i, s, o, u, a = {};
            if(this.hasContent() && this.enabled) {
                e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(o), e.remove().css({top:0, left:0, display:"block"}).appendTo(t ? this.$element : document.body), n = this.getPosition(t), i = e[0].offsetWidth, s = e[0].offsetHeight;
                switch(t ? o.split(" ")[1] : o) {
                    case"left":
                        r = this.defineBounds(n), typeof r.top == "undefined" ? a.top = n.top + n.height / 2 - s / 2 : a.top = r.top - s / 2, typeof r.left == "undefined" ? a.left = n.left - i : a.left = r.left - i, u = {top:a.top, left:a.left};
                        break;
                    case"right":
                        r = this.defineBounds(n), typeof r.top == "undefined" ? a.top = n.top + n.height / 2 - s / 2 : a.top = r.top - s / 2, typeof r.left == "undefined" ? a.left = n.left + n.width : a.left = r.left + n.width, u = {top:a.top, left:a.left}
                }
                e.css(u).addClass(o).addClass("in")
            }
        }, defineBounds:function (t) {
            var n, r, i, s, o, u, a = {};
            return e(this.options.container).length !== 0 ? (n = this.checkMultiContainer(), r = n.offset(), i = r.top, s = r.left, o = i + n.height(), u = s + n.width(), t.top + t.height / 2 < i && (a.top = i), t.top + t.height / 2 > o && (a.top = o), t.left - t.width / 2 < s && (a.left = s), t.left - t.width / 2 > u && (a.left = u), a) : !1
        }, checkMultiContainer:function () {
            var t, n;
            t = e(this.options.container);
            if(t.length) {
                return t.length > 1 && (t = this.$element.closest(t)), t;
            }
            return
        }}), e.fn.constrained_popover = function (t) {
            return this.each(function () {
                var n = e(this), i = n.data("constrained_popover"), s = typeof t == "object" && t;
                i || n.data("constrained_popover", i = new r(this, s)), typeof t == "string" && i[t]()
            })
        }, e.fn.constrained_popover.Constructor = r, e.fn.constrained_popover.defaults = e.extend({}, e.fn.popover.defaults, {container:"", content:this.options})
    }
}), timely.define("scripts/common_scripts/frontend/common_frontend", ["jquery", "domReady", "scripts/common_scripts/frontend/common_event_handlers", "ai1ec_calendar", "external_libs/modernizr", "external_libs/bootstrap_tooltip", "external_libs/bootstrap_popover"], function (e, t, n, r, i) {
    var s = !1, o = function () {
        s = !0, e(document).on("mouseenter", ".ai1ec-popup-trigger", n.handle_popover_over), e(document).on("mouseleave", ".ai1ec-popup-trigger", n.handle_popover_out), e(document).on("mouseleave", ".ai1ec-popup", n.handle_popover_self_out), e(document).on("mouseenter", ".ai1ec-tooltip-trigger", n.handle_tooltip_over), e(document).on("mouseleave", ".ai1ec-popup .ai1ec-tooltip-trigger", n.handle_tooltip_out), e(document).on("mouseleave", ".tooltip", n.handle_tooltip_self_out)
    }, u = function () {
        var t = [], i = [];
        e.each(r.fonts, function () {
            t.push(this.name), i.push(this.url)
        });
        var s = {active:n.handle_fonts_loaded, custom:{families:t, urls:i}};
        timely.require(["external_libs/webfont"], function () {
            WebFont.load(s)
        })
    }, a = function () {
        u(), t(function () {
            o()
        })
    }, f = function () {
        return s
    };
    return{start:a, are_event_listeners_attached:f}
}), timely.define("external_libs/jquery_history", ["jquery"], function (e) {
    (function (t, n) {
        var r = t.History = t.History || {};
        if(typeof r.Adapter != "undefined") {
            throw new Error("History.js Adapter has already been loaded...");
        }
        r.Adapter = {bind:function (t, n, r) {
            e(t).bind(n, r)
        }, trigger:function (t, n, r) {
            e(t).trigger(n, r)
        }, extractEventData:function (e, t, r) {
            var i = t && t.originalEvent && t.originalEvent[e] || r && r[e] || n;
            return i
        }, onDomLoad:function (t) {
            e(t)
        }}, typeof r.init != "undefined" && r.init()
    })(window), function (e, t) {
        var n = e.document, r = e.setTimeout || r, i = e.clearTimeout || i, s = e.setInterval || s, o = e.History = e.History || {};
        if(typeof o.initHtml4 != "undefined") {
            throw new Error("History.js HTML4 Support has already been loaded...");
        }
        o.initHtml4 = function () {
            if(typeof o.initHtml4.initialized != "undefined") {
                return!1;
            }
            o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function (e) {
                var t = o.getHashByIndex(), n;
                return n = e === t, n
            }, o.saveHash = function (e) {
                return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
            }, o.getHashByIndex = function (e) {
                var t = null;
                return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
            }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function (e, t, n) {
                var r = o.getHashByState(e), i;
                return i = {discardedState:e, backState:n, forwardState:t}, o.discardedStates[r] = i, !0
            }, o.discardHash = function (e, t, n) {
                var r = {discardedHash:e, backState:n, forwardState:t};
                return o.discardedHashes[e] = r, !0
            }, o.discardedState = function (e) {
                var t = o.getHashByState(e), n;
                return n = o.discardedStates[t] || !1, n
            }, o.discardedHash = function (e) {
                var t = o.discardedHashes[e] || !1;
                return t
            }, o.recycleState = function (e) {
                var t = o.getHashByState(e);
                return o.discardedState(e) && delete o.discardedStates[t], !0
            }, o.emulated.hashChange && (o.hashChangeInit = function () {
                o.checkerFunction = null;
                var t = "", r, i, u, a;
                return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function () {
                    if(a) {
                        return!1;
                    }
                    a = !0;
                    var n = o.getHash() || "", r = o.unescapeHash(i.contentWindow.document.location.hash) || "";
                    return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, o.setHash(r, !1)), a = !1, !0
                }) : o.checkerFunction = function () {
                    var n = o.getHash();
                    return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
                }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
            }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function (t) {
                var r = t && t.newURL || n.location.href, i = o.getHashByUrl(r), s = null, u = null, a = null, f;
                return o.isLastHash(i) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(i), i && o.isTraditionalAnchor(i) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (s = o.extractState(o.getFullUrl(i || n.location.href, !1), !0), o.isLastSavedState(s) ? (o.busy(!1), !1) : (u = o.getHashByState(s), f = o.discardedState(s), f ? (o.getHashByIndex(-2) === o.getHashByState(f.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(s.data, s.title, s.url, !1), !0))))
            }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function (t, r, i, s) {
                if(o.getHashByUrl(i)) {
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                }
                if(s !== !1 && o.busy()) {
                    return o.pushQueue({scope:o, callback:o.pushState, args:arguments, queue:s}), !1;
                }
                o.busy(!0);
                var u = o.createStateObject(t, r, i), a = o.getHashByState(u), f = o.getState(!1), l = o.getHashByState(f), c = o.getHash();
                return o.storeState(u), o.expectedStateId = u.id, o.recycleState(u), o.setTitle(u), a === l ? (o.busy(!1), !1) : a !== c && a !== o.getShortUrl(n.location.href) ? (o.setHash(a, !1), !1) : (o.saveState(u), o.Adapter.trigger(e, "statechange"), o.busy(!1), !0)
            }, o.replaceState = function (e, t, n, r) {
                if(o.getHashByUrl(n)) {
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                }
                if(r !== !1 && o.busy()) {
                    return o.pushQueue({scope:o, callback:o.replaceState, args:arguments, queue:r}), !1;
                }
                o.busy(!0);
                var i = o.createStateObject(e, t, n), s = o.getState(!1), u = o.getStateByIndex(-2);
                return o.discardState(s, i, u), o.pushState(i.data, i.title, i.url, !1), !0
            }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function () {
                o.Adapter.trigger(e, "hashchange")
            })
        }, typeof o.init != "undefined" && o.init()
    }(window), function (e, t) {
        var n = e.console || t, r = e.document, i = e.navigator, s = e.sessionStorage || !1, o = e.setTimeout, u = e.clearTimeout, a = e.setInterval, f = e.clearInterval, l = e.JSON, c = e.alert, h = e.History = e.History || {}, p = e.history;
        l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
        if(typeof h.init != "undefined") {
            throw new Error("History.js Core has already been loaded...");
        }
        h.init = function () {
            return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
        }, h.initCore = function () {
            if(typeof h.initCore.initialized != "undefined") {
                return!1;
            }
            h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.intervalList = [], h.clearAllIntervals = function () {
                var e, t = h.intervalList;
                if(typeof t != "undefined" && t !== null) {
                    for(e = 0; e < t.length; e++)f(t[e]);
                    h.intervalList = null
                }
            }, h.debug = function () {
                (h.options.debug || !1) && h.log.apply(h, arguments)
            }, h.log = function () {
                var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined", t = r.getElementById("log"), i, s, o, u, a;
                e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
                for(s = 1, o = arguments.length; s < o; ++s) {
                    a = arguments[s];
                    if(typeof a == "object" && typeof l != "undefined") {
                        try {
                            a = l.stringify(a)
                        } catch(f) {
                        }
                    }
                    i += "\n" + a + "\n"
                }
                return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
            }, h.getInternetExplorerMajorVersion = function () {
                var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
                    var e = 3, t = r.createElement("div"), n = t.getElementsByTagName("i");
                    while((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                    return e > 4 ? e : !1
                }();
                return e
            }, h.isInternetExplorer = function () {
                var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
                return e
            }, h.emulated = {pushState:!Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)), hashChange:Boolean(!("onhashchange"in e || "onhashchange"in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)}, h.enabled = !h.emulated.pushState, h.bugs = {setHash:Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)), safariPoll:Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)), ieDoubleCheck:Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8), hashEscape:Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)}, h.isEmptyObject = function (e) {
                for(var t in e)return!1;
                return!0
            }, h.cloneObject = function (e) {
                var t, n;
                return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
            }, h.getRootUrl = function () {
                var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                if(r.location.port || !1) {
                    e += ":" + r.location.port;
                }
                return e += "/", e
            }, h.getBaseHref = function () {
                var e = r.getElementsByTagName("base"), t = null, n = "";
                return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
            }, h.getBaseUrl = function () {
                var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                return e
            }, h.getPageUrl = function () {
                var e = h.getState(!1, !1), t = (e || {}).url || r.location.href, n;
                return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
                    return/\./.test(e) ? e : e + "/"
                }), n
            }, h.getBasePageUrl = function () {
                var e = r.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/,function (e, t, n) {
                    return/[^\/]$/.test(e) ? "" : e
                }).replace(/\/+$/, "") + "/";
                return e
            }, h.getFullUrl = function (e, t) {
                var n = e, r = e.substring(0, 1);
                return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
            }, h.getShortUrl = function (e) {
                var t = e, n = h.getBaseUrl(), r = h.getRootUrl();
                return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
            }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
                h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
            }, h.getState = function (e, t) {
                typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
                var n = h.getLastSavedState();
                return!n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
            }, h.getIdByState = function (e) {
                var t = h.extractId(e.url), n;
                if(!t) {
                    n = h.getStateString(e);
                    if(typeof h.stateToId[n] != "undefined") {
                        t = h.stateToId[n];
                    } else if(typeof h.store.stateToId[n] != "undefined") {
                        t = h.store.stateToId[n];
                    } else {
                        for(; ;) {
                            t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                            if(typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") {
                                break
                            }
                        }
                        h.stateToId[n] = t, h.idToState[t] = e
                    }
                }
                return t
            }, h.normalizeState = function (e) {
                var t, n;
                if(!e || typeof e != "object") {
                    e = {};
                }
                if(typeof e.normalized != "undefined") {
                    return e;
                }
                if(!e.data || typeof e.data != "object") {
                    e.data = {};
                }
                t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(h.unescapeString(e.url || r.location.href)), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data);
                if(t.title || n) {
                    t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id;
                }
                return t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
            }, h.createStateObject = function (e, t, n) {
                var r = {data:e, title:t, url:n};
                return r = h.normalizeState(r), r
            }, h.getStateById = function (e) {
                e = String(e);
                var n = h.idToState[e] || h.store.idToState[e] || t;
                return n
            }, h.getStateString = function (e) {
                var t, n, r;
                return t = h.normalizeState(e), n = {data:t.data, title:e.title, url:e.url}, r = l.stringify(n), r
            }, h.getStateId = function (e) {
                var t, n;
                return t = h.normalizeState(e), n = t.id, n
            }, h.getHashByState = function (e) {
                var t, n;
                return t = h.normalizeState(e), n = t.hash, n
            }, h.extractId = function (e) {
                var t, n, r;
                return n = /(.*)\&_suid=([0-9]+)$/.exec(e), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
            }, h.isTraditionalAnchor = function (e) {
                var t = !/[\/\?\.]/.test(e);
                return t
            }, h.extractState = function (e, t) {
                var n = null, r, i;
                return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
            }, h.getIdByUrl = function (e) {
                var n = h.urlToId[e] || h.store.urlToId[e] || t;
                return n
            }, h.getLastSavedState = function () {
                return h.savedStates[h.savedStates.length - 1] || t
            }, h.getLastStoredState = function () {
                return h.storedStates[h.storedStates.length - 1] || t
            }, h.hasUrlDuplicate = function (e) {
                var t = !1, n;
                return n = h.extractState(e.url), t = n && n.id !== e.id, t
            }, h.storeState = function (e) {
                return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
            }, h.isLastSavedState = function (e) {
                var t = !1, n, r, i;
                return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
            }, h.saveState = function (e) {
                return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
            }, h.getStateByIndex = function (e) {
                var t = null;
                return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
            }, h.getHash = function () {
                var e = h.unescapeHash(r.location.hash);
                return e
            }, h.unescapeString = function (t) {
                var n = t, r;
                for(; ;) {
                    r = e.unescape(n);
                    if(r === n) {
                        break;
                    }
                    n = r
                }
                return n
            }, h.unescapeHash = function (e) {
                var t = h.normalizeHash(e);
                return t = h.unescapeString(t), t
            }, h.normalizeHash = function (e) {
                var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                return t
            }, h.setHash = function (e, t) {
                var n, i, s;
                return t !== !1 && h.busy() ? (h.pushQueue({scope:h, callback:h.setHash, args:arguments, queue:t}), !1) : (n = h.escapeHash(e), h.busy(!0), i = h.extractState(e, !0), i && !h.emulated.pushState ? h.pushState(i.data, i.title, i.url, !1) : r.location.hash !== n && (h.bugs.setHash ? (s = h.getPageUrl(), h.pushState(null, null, s + "#" + n, !1)) : r.location.hash = n), h)
            }, h.escapeHash = function (t) {
                var n = h.normalizeHash(t);
                return n = e.escape(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
            }, h.getHashByUrl = function (e) {
                var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return t = h.unescapeHash(t), t
            }, h.setTitle = function (e) {
                var t = e.title, n;
                t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
                try {
                    r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch(i) {
                }
                return r.title = t, h
            }, h.queues = [], h.busy = function (e) {
                typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
                if(!h.busy.flag) {
                    u(h.busy.timeout);
                    var t = function () {
                        var e, n, r;
                        if(h.busy.flag) {
                            return;
                        }
                        for(e = h.queues.length - 1; e >= 0; --e) {
                            n = h.queues[e];
                            if(n.length === 0) {
                                continue;
                            }
                            r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                        }
                    };
                    h.busy.timeout = o(t, h.options.busyDelay)
                }
                return h.busy.flag
            }, h.busy.flag = !1, h.fireQueueItem = function (e) {
                return e.callback.apply(e.scope || h, e.args || [])
            }, h.pushQueue = function (e) {
                return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
            }, h.queue = function (e, t) {
                return typeof e == "function" && (e = {callback:e}), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
            }, h.clearQueue = function () {
                return h.busy.flag = !1, h.queues = [], h
            }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
                return h.stateChanged = !0, h.doubleCheckClear(), h
            }, h.doubleCheckClear = function () {
                return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
            }, h.doubleCheck = function (e) {
                return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
                    return h.doubleCheckClear(), h.stateChanged || e(), !0
                }, h.options.doubleCheckInterval)), h
            }, h.safariStatePoll = function () {
                var t = h.extractState(r.location.href), n;
                if(!h.isLastSavedState(t)) {
                    return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
                }
                return
            }, h.back = function (e) {
                return e !== !1 && h.busy() ? (h.pushQueue({scope:h, callback:h.back, args:arguments, queue:e}), !1) : (h.busy(!0), h.doubleCheck(function () {
                    h.back(!1)
                }), p.go(-1), !0)
            }, h.forward = function (e) {
                return e !== !1 && h.busy() ? (h.pushQueue({scope:h, callback:h.forward, args:arguments, queue:e}), !1) : (h.busy(!0), h.doubleCheck(function () {
                    h.forward(!1)
                }), p.go(1), !0)
            }, h.go = function (e, t) {
                var n;
                if(e > 0) {
                    for(n = 1; n <= e; ++n)h.forward(t);
                } else {
                    if(!(e < 0)) {
                        throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    }
                    for(n = -1; n >= e; --n)h.back(t)
                }
                return h
            };
            if(h.emulated.pushState) {
                var d = function () {
                };
                h.pushState = h.pushState || d, h.replaceState = h.replaceState || d
            } else {
                h.onPopState = function (t, n) {
                    var i = !1, s = !1, o, u;
                    return h.doubleCheckComplete(), o = h.getHash(), o ? (u = h.extractState(o || r.location.href, !0), u ? h.replaceState(u.data, u.title, u.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (i = h.Adapter.extractEventData("state", t, n) || !1, i ? s = h.getStateById(i) : h.expectedStateId ? s = h.getStateById(h.expectedStateId) : s = h.extractState(r.location.href), s || (s = h.createStateObject(null, null, r.location.href)), h.expectedStateId = !1, h.isLastSavedState(s) ? (h.busy(!1), !1) : (h.storeState(s), h.saveState(s), h.setTitle(s), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
                }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
                    if(h.getHashByUrl(r) && h.emulated.pushState) {
                        throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    }
                    if(i !== !1 && h.busy()) {
                        return h.pushQueue({scope:h, callback:h.pushState, args:arguments, queue:i}), !1;
                    }
                    h.busy(!0);
                    var s = h.createStateObject(t, n, r);
                    return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
                }, h.replaceState = function (t, n, r, i) {
                    if(h.getHashByUrl(r) && h.emulated.pushState) {
                        throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    }
                    if(i !== !1 && h.busy()) {
                        return h.pushQueue({scope:h, callback:h.replaceState, args:arguments, queue:i}), !1;
                    }
                    h.busy(!0);
                    var s = h.createStateObject(t, n, r);
                    return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
                };
            }
            if(s) {
                try {
                    h.store = l.parse(s.getItem("History.store")) || {}
                } catch(v) {
                    h.store = {}
                }
                h.normalizeStore()
            } else {
                h.store = {}, h.normalizeStore();
            }
            h.Adapter.bind(e, "beforeunload", h.clearAllIntervals), h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(r.location.href, !0))), s && (h.onUnload = function () {
                var e, t;
                try {
                    e = l.parse(s.getItem("History.store")) || {}
                } catch(n) {
                    e = {}
                }
                e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                for(t in h.idToState) {
                    if(!h.idToState.hasOwnProperty(t)) {
                        continue;
                    }
                    e.idToState[t] = h.idToState[t]
                }
                for(t in h.urlToId) {
                    if(!h.urlToId.hasOwnProperty(t)) {
                        continue;
                    }
                    e.urlToId[t] = h.urlToId[t]
                }
                for(t in h.stateToId) {
                    if(!h.stateToId.hasOwnProperty(t)) {
                        continue;
                    }
                    e.stateToId[t] = h.stateToId[t]
                }
                h.store = e, h.normalizeStore(), s.setItem("History.store", l.stringify(e))
            }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
            if(!h.emulated.pushState) {
                h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
                if(i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") {
                    h.Adapter.bind(e, "hashchange", function () {
                        h.Adapter.trigger(e, "popstate")
                    }), h.getHash() && h.Adapter.onDomLoad(function () {
                        h.Adapter.trigger(e, "hashchange")
                    })
                }
            }
        }, h.init()
    }(window)
}), timely.define("external_libs/jquery.tablescroller", ["jquery"], function (e) {
    function n() {
        if(t) {
            return t;
        }
        var n = e('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div></div>');
        e("body").append(n);
        var r = e("div", n).innerWidth();
        n.css("overflow-y", "auto");
        var i = e("div", n).innerWidth();
        return e(n).remove(), t = r - i, t
    }

    var t = 0;
    e.fn.tableScroll = function (t) {
        if(t == "undo") {
            var r = e(this).parent().parent();
            r.hasClass("tablescroll_wrapper") && (r.find(".tablescroll_head thead").prependTo(this), r.find(".tablescroll_foot tfoot").appendTo(this), r.before(this), r.empty());
            return
        }
        var i = e.extend({}, e.fn.tableScroll.defaults, t);
        return i.scrollbarWidth = n(), this.each(function () {
            var t = i.flush, n = e(this).addClass("tablescroll_body"), r = e('<div class="tablescroll_wrapper ai1ec-popover-boundary"></div>').insertBefore(n).append(n);
            r.parent("div").hasClass(i.containerClass) || e("<div></div>").addClass(i.containerClass).insertBefore(r).append(r);
            var s = i.width ? i.width : n.outerWidth();
            r.css({width:s + "px", height:i.height + "px", overflow:"auto"}), n.css("width", s + "px");
            var o = r.outerWidth(), u = o - s;
            r.css({width:s - u - 2 + "px"}), n.css("width", s - u - i.scrollbarWidth + "px"), n.outerHeight() <= i.height && (r.css({height:"auto", width:s - u + "px"}), t = !1);
            var a = e("thead", n).length ? !0 : !1, f = e("tfoot", n).length ? !0 : !1, l = e("thead tr:first", n), c = e("tbody tr:first", n), h = e("tfoot tr:first", n), p = 0;
            e("th, td", l).each(function (t) {
                p = e(this).width(), e("th:eq(" + t + "), td:eq(" + t + ")", l).css("width", p + "px"), e("th:eq(" + t + "), td:eq(" + t + ")", c).css("width", p + "px"), f && e("th:eq(" + t + "), td:eq(" + t + ")", h).css("width", p + "px")
            });
            if(a) {
                var d = e('<table class="tablescroll_head" cellspacing="0"></table>').insertBefore(r).prepend(e("thead", n));
            }
            if(f) {
                var v = e('<table class="tablescroll_foot" cellspacing="0"></table>').insertAfter(r).prepend(e("tfoot", n));
            }
            d != undefined && (d.css("width", s + "px"), t && (e("tr:first th:last, tr:first td:last", d).css("width", p + i.scrollbarWidth + "px"), d.css("width", r.outerWidth() + "px"))), v != undefined && (v.css("width", s + "px"), t && (e("tr:first th:last, tr:first td:last", v).css("width", p + i.scrollbarWidth + "px"), v.css("width", r.outerWidth() + "px")))
        }), this
    }, e.fn.tableScroll.defaults = {flush:!0, width:null, height:100, containerClass:"tablescroll"}
}), timely.define("external_libs/jquery.scrollTo", ["jquery"], function (e) {
    function n(e) {
        return typeof e == "object" ? e : {top:e, left:e}
    }

    var t = e.scrollTo = function (t, n, r) {
        e(window).scrollTo(t, n, r)
    };
    t.defaults = {axis:"xy", duration:parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1, limit:!0}, t.window = function (t) {
        return e(window)._scrollable()
    }, e.fn._scrollable = function () {
        return this.map(function () {
            var t = this, n = !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if(!n) {
                return t;
            }
            var r = (t.contentWindow || t).document || t.ownerDocument || t;
            return e.browser.safari || r.compatMode == "BackCompat" ? r.body : r.documentElement
        })
    }, e.fn.scrollTo = function (r, i, s) {
        return typeof i == "object" && (s = i, i = 0), typeof s == "function" && (s = {onAfter:s}), r == "max" && (r = 9e9), s = e.extend({}, t.defaults, s), i = i || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (i /= 2), s.offset = n(s.offset), s.over = n(s.over), this._scrollable().each(function () {
            function h(e) {
                u.animate(l, i, s.easing, e && function () {
                    e.call(this, r, s)
                })
            }

            var o = this, u = e(o), a = r, f, l = {}, c = u.is("html,body");
            switch(typeof a) {
                case"number":
                case"string":
                    if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(a)) {
                        a = n(a);
                        break
                    }
                    a = e(a, this);
                case"object":
                    if(a.is || a.style) {
                        f = (a = e(a)).offset()
                    }
            }
            e.each(s.axis.split(""), function (e, n) {
                var r = n == "x" ? "Left" : "Top", i = r.toLowerCase(), p = "scroll" + r, d = o[p], v = t.max(o, n);
                if(f) {
                    l[p] = f[i] + (c ? 0 : d - u.offset()[i]), s.margin && (l[p] -= parseInt(a.css("margin" + r)) || 0, l[p] -= parseInt(a.css("border" + r + "Width")) || 0), l[p] += s.offset[i] || 0, s.over[i] && (l[p] += a[n == "x" ? "width" : "height"]() * s.over[i]);
                } else {
                    var m = a[i];
                    l[p] = m.slice && m.slice(-1) == "%" ? parseFloat(m) / 100 * v : m
                }
                s.limit && /^\d+$/.test(l[p]) && (l[p] = l[p] <= 0 ? 0 : Math.min(l[p], v)), !e && s.queue && (d != l[p] && h(s.onAfterFirst), delete l[p])
            }), h(s.onAfter)
        }).end()
    }, t.max = function (t, n) {
        var r = n == "x" ? "Width" : "Height", i = "scroll" + r;
        if(!e(t).is("html,body")) {
            return t[i] - e(t)[r.toLowerCase()]();
        }
        var s = "client" + r, o = t.ownerDocument.documentElement, u = t.ownerDocument.body;
        return Math.max(o[i], u[i]) - Math.min(o[s], u[s])
    }
}), timely.define("external_libs/locales/bootstrap-datepicker.bg", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.bg = {days:["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота", "Неделя"], daysShort:["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб", "Нед"], daysMin:["Н", "П", "В", "С", "Ч", "П", "С", "Н"], months:["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"], monthsShort:["Ян", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"], today:"днес"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.br", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.br = {days:["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"], daysShort:["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"], daysMin:["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"], months:["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthsShort:["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.cs", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.cs = {days:["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"], daysShort:["Ne", "Po", "Út", "St", "Čt", "Pá", "So", "Ne"], daysMin:["N", "P", "Ú", "St", "Č", "P", "So", "N"], months:["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"], monthsShort:["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čnc", "Srp", "Zář", "Říj", "Lis", "Pro"], today:"Dnes"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.da", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.da = {days:["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"], daysShort:["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"], daysMin:["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"], months:["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], monthsShort:["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], today:"I Dag"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.de", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.de = {days:["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"], daysShort:["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"], daysMin:["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"], months:["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], monthsShort:["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], today:"Heute"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.es", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.es = {days:["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], daysShort:["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"], daysMin:["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"], months:["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], monthsShort:["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], today:"Hoy"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.fi", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.fi = {days:["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai", "sunnuntai"], daysShort:["sun", "maa", "tii", "kes", "tor", "per", "lau", "sun"], daysMin:["su", "ma", "ti", "ke", "to", "pe", "la", "su"], months:["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"], monthsShort:["tam", "hel", "maa", "huh", "tou", "kes", "hei", "elo", "syy", "lok", "mar", "jou"], today:"tänään"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.fr", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.fr = {days:["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"], daysShort:["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], daysMin:["D", "L", "Ma", "Me", "J", "V", "S", "D"], months:["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], monthsShort:["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"], today:"Aujourd'hui"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.id", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.id = {days:["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"], daysShort:["Mgu", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Mgu"], daysMin:["Mg", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa", "Mg"], months:["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], monthsShort:["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"]}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.is", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.is = {days:["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur", "Sunnudagur"], daysShort:["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau", "Sun"], daysMin:["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La", "Su"], months:["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"], monthsShort:["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"], today:"Í Dag"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.it", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.it = {days:["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"], daysShort:["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"], daysMin:["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"], months:["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], monthsShort:["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], today:"Oggi"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.ja", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.ja = {days:["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜", "日曜"], daysShort:["日", "月", "火", "水", "木", "金", "土", "日"], daysMin:["日", "月", "火", "水", "木", "金", "土", "日"], months:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], monthsShort:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.kr", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.kr = {days:["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"], daysShort:["일", "월", "화", "수", "목", "금", "토", "일"], daysMin:["일", "월", "화", "수", "목", "금", "토", "일"], months:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], monthsShort:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.lt", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.lt = {days:["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"], daysShort:["S", "Pr", "A", "T", "K", "Pn", "Š", "S"], daysMin:["Sk", "Pr", "An", "Tr", "Ke", "Pn", "Št", "Sk"], months:["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"], monthsShort:["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"], weekStart:1}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.lv", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.lv = {days:["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena", "Svētdiena"], daysShort:["Sv", "P", "O", "T", "C", "Pk", "S", "Sv"], daysMin:["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "St", "Sv"], months:["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"], monthsShort:["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec."], today:"Šodien", weekStart:1}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.ms", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.ms = {days:["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu", "Ahad"], daysShort:["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab", "Aha"], daysMin:["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa", "Ah"], months:["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], monthsShort:["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], today:"Hari Ini"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.nb", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.nb = {days:["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"], daysShort:["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"], daysMin:["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"], months:["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], monthsShort:["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], today:"I Dag"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.nl", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.nl = {days:["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"], daysShort:["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"], daysMin:["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"], months:["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], monthsShort:["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], today:"Vandaag"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.pl", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.pl = {days:["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"], daysShort:["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So", "Nie"], daysMin:["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So", "N"], months:["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"], monthsShort:["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"], today:"Dzisiaj"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.pt-BR", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates["pt-BR"] = {days:["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"], daysShort:["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"], daysMin:["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"], months:["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthsShort:["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], today:"Hoje"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.pt", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.pt = {days:["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"], daysShort:["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"], daysMin:["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"], months:["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthsShort:["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.ru", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.ru = {days:["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"], daysShort:["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"], daysMin:["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], months:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], monthsShort:["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], today:"Сегодня"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.sl", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.sl = {days:["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota", "Nedelja"], daysShort:["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob", "Ned"], daysMin:["Ne", "Po", "To", "Sr", "Če", "Pe", "So", "Ne"], months:["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"], monthsShort:["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today:"Danes"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.sv", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.sv = {days:["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"], daysShort:["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"], daysMin:["Sö", "Må", "Ti", "On", "To", "Fr", "Lö", "Sö"], months:["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], monthsShort:["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], today:"I Dag"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.th", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.th = {days:["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"], daysShort:["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"], daysMin:["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"], months:["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], monthsShort:["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], today:"วันนี้"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.tr", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates.tr = {days:["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"], daysShort:["Pz", "Pzt", "Sal", "Çrş", "Prş", "Cu", "Cts", "Pz"], daysMin:["Pz", "Pzt", "Sa", "Çr", "Pr", "Cu", "Ct", "Pz"], months:["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], monthsShort:["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], today:"Bugün"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.zh-CN", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates["zh-CN"] = {days:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"], daysShort:["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"], daysMin:["日", "一", "二", "三", "四", "五", "六", "日"], months:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], monthsShort:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today:"今日"}
    }}
}), timely.define("external_libs/locales/bootstrap-datepicker.zh-TW", ["jquery"], function (e) {
    return{localize:function () {
        e.fn.datepicker.dates["zh-TW"] = {days:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"], daysShort:["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"], daysMin:["日", "一", "二", "三", "四", "五", "六", "日"], months:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], monthsShort:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]}
    }}
}), timely.define("external_libs/bootstrap_datepicker", ["jquery", "ai1ec_config", "external_libs/locales/bootstrap-datepicker.bg", "external_libs/locales/bootstrap-datepicker.br", "external_libs/locales/bootstrap-datepicker.cs", "external_libs/locales/bootstrap-datepicker.da", "external_libs/locales/bootstrap-datepicker.de", "external_libs/locales/bootstrap-datepicker.es", "external_libs/locales/bootstrap-datepicker.fi", "external_libs/locales/bootstrap-datepicker.fr", "external_libs/locales/bootstrap-datepicker.id", "external_libs/locales/bootstrap-datepicker.is", "external_libs/locales/bootstrap-datepicker.it", "external_libs/locales/bootstrap-datepicker.ja", "external_libs/locales/bootstrap-datepicker.kr", "external_libs/locales/bootstrap-datepicker.lt", "external_libs/locales/bootstrap-datepicker.lv", "external_libs/locales/bootstrap-datepicker.ms", "external_libs/locales/bootstrap-datepicker.nb", "external_libs/locales/bootstrap-datepicker.nl", "external_libs/locales/bootstrap-datepicker.pl", "external_libs/locales/bootstrap-datepicker.pt-BR", "external_libs/locales/bootstrap-datepicker.pt", "external_libs/locales/bootstrap-datepicker.ru", "external_libs/locales/bootstrap-datepicker.sl", "external_libs/locales/bootstrap-datepicker.sv", "external_libs/locales/bootstrap-datepicker.th", "external_libs/locales/bootstrap-datepicker.tr", "external_libs/locales/bootstrap-datepicker.zh-CN", "external_libs/locales/bootstrap-datepicker.zh-TW"], function (e, t) {
    function n() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function r() {
        var e = new Date;
        return n(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
    }

    var i = function (n, r) {
        var i = this;
        this.element = e(n), this.language = r.language || this.element.data("date-language") || t.language || "en", this.language = this.language in s ? this.language : "en", this.format = o.parseFormat(r.format || this.element.data("date-format") || "mm/dd/yyyy"), this.picker = e(o.template).appendTo("body").on({click:e.proxy(this.click, this)}), this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && this.component.length === 0 && (this.component = !1), this.isInput ? this.element.on({focus:e.proxy(this.show, this), keyup:e.proxy(this.update, this), keydown:e.proxy(this.keydown, this)}) : this.component && this.hasInput ? (this.element.find("input").on({focus:e.proxy(this.show, this), keyup:e.proxy(this.update, this), keydown:e.proxy(this.keydown, this)}), this.component.on("click", e.proxy(this.show, this))) : this.element.on("click", e.proxy(this.show, this)), e(document).on("mousedown", function (t) {
            e(t.target).closest(".datepicker").length == 0 && i.hide()
        }), this.autoclose = !1, "autoclose"in r ? this.autoclose = r.autoclose : "dateAutoclose"in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation"in r ? this.keyboardNavigation = r.keyboardNavigation : "dateKeyboardNavigation"in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation"));
        switch(r.startView || this.element.data("date-start-view")) {
            case 2:
            case"decade":
                this.viewMode = this.startViewMode = 2;
                break;
            case 1:
            case"year":
                this.viewMode = this.startViewMode = 1;
                break;
            case 0:
            case"month":
            default:
                this.viewMode = this.startViewMode = 0
        }
        this.todayBtn = r.todayBtn || this.element.data("date-today-btn") || !1, this.todayHighlight = r.todayHighlight || this.element.data("date-today-highlight") || !1, this.weekStart = (r.weekStart || this.element.data("date-weekstart") || s[this.language].weekStart || 0) % 7, this.weekEnd = (this.weekStart + 6) % 7, this.startDate = -Infinity, this.endDate = Infinity, this.setStartDate(r.startDate || this.element.data("date-startdate")), this.setEndDate(r.endDate || this.element.data("date-enddate")), this.fillDow(), this.fillMonths(), this.update(), this.showMode()
    };
    i.prototype = {constructor:i, show:function (t) {
        this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.update(), this.place(), e(window).on("resize", e.proxy(this.place, this)), t && (t.stopPropagation(), t.preventDefault()), this.element.trigger({type:"show", date:this.date})
    }, hide:function (t) {
        this.picker.hide(), e(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || e(document).off("mousedown", this.hide), t && t.currentTarget.value && this.setValue(), this.element.trigger({type:"hide", date:this.date})
    }, getDate:function () {
        var e = this.getUTCDate();
        return new Date(e.getTime() + e.getTimezoneOffset() * 6e4)
    }, getUTCDate:function () {
        return this.date
    }, setDate:function (e) {
        this.setUTCDate(new Date(e.getTime() - e.getTimezoneOffset() * 6e4))
    }, setUTCDate:function (e) {
        this.date = e, this.setValue()
    }, setValue:function () {
        var e = o.formatDate(this.date, this.format, this.language);
        this.isInput ? this.element.prop("value", e) : (this.component && this.element.find("input").prop("value", e), this.element.data("date", e))
    }, setStartDate:function (e) {
        this.startDate = e || -Infinity, this.startDate !== -Infinity && (this.startDate = o.parseDate(this.startDate, this.format, this.language)), this.update(), this.updateNavArrows()
    }, setEndDate:function (e) {
        this.endDate = e || Infinity, this.endDate !== Infinity && (this.endDate = o.parseDate(this.endDate, this.format, this.language)), this.update(), this.updateNavArrows()
    }, place:function () {
        var t = parseInt(this.element.parents().filter(function () {
            return e(this).css("z-index") != "auto"
        }).first().css("z-index")) + 10, n = this.component ? this.component.offset() : this.element.offset();
        this.picker.css({top:n.top + this.height, left:n.left, zIndex:t})
    }, update:function () {
        this.date = o.parseDate(this.isInput ? this.element.prop("value") : this.element.data("date") || this.element.find("input").prop("value"), this.format, this.language), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
    }, fillDow:function () {
        var e = this.weekStart, t = "<tr>";
        while(e < this.weekStart + 7)t += '<th class="dow">' + s[this.language].daysMin[e++ % 7] + "</th>";
        t += "</tr>", this.picker.find(".datepicker-days thead").append(t)
    }, fillMonths:function () {
        var e = "", t = 0;
        while(t < 12)e += '<span class="month">' + s[this.language].monthsShort[t++] + "</span>";
        this.picker.find(".datepicker-months td").html(e)
    }, fill:function () {
        var e = new Date(this.viewDate), t = e.getUTCFullYear(), r = e.getUTCMonth(), i = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity, u = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity, a = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity, f = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity, l = this.date.valueOf(), c = new Date;
        this.picker.find(".datepicker-days thead th:eq(1)").text(s[this.language].months[r] + " " + t), this.picker.find("tfoot th.today").text(s[this.language].today).toggle(this.todayBtn), this.updateNavArrows(), this.fillMonths();
        var h = n(t, r - 1, 28, 0, 0, 0, 0), p = o.getDaysInMonth(h.getUTCFullYear(), h.getUTCMonth());
        h.setUTCDate(p), h.setUTCDate(p - (h.getUTCDay() - this.weekStart + 7) % 7);
        var d = new Date(h);
        d.setUTCDate(d.getUTCDate() + 42), d = d.valueOf();
        var v = [], m;
        while(h.valueOf() < d) {
            h.getUTCDay() == this.weekStart && v.push("<tr>"), m = "";
            if(h.getUTCFullYear() < t || h.getUTCFullYear() == t && h.getUTCMonth() < r) {
                m += " old";
            } else if(h.getUTCFullYear() > t || h.getUTCFullYear() == t && h.getUTCMonth() > r) {
                m += " new";
            }
            this.todayHighlight && h.getUTCFullYear() == c.getFullYear() && h.getUTCMonth() == c.getMonth() && h.getUTCDate() == c.getDate() && (m += " today"), h.valueOf() == l && (m += " active");
            if(h.valueOf() < this.startDate || h.valueOf() > this.endDate) {
                m += " disabled";
            }
            v.push('<td class="day' + m + '">' + h.getUTCDate() + "</td>"), h.getUTCDay() == this.weekEnd && v.push("</tr>"), h.setUTCDate(h.getUTCDate() + 1)
        }
        this.picker.find(".datepicker-days tbody").empty().append(v.join(""));
        var g = this.date.getUTCFullYear(), y = this.picker.find(".datepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active");
        g == t && y.eq(this.date.getUTCMonth()).addClass("active"), (t < i || t > a) && y.addClass("disabled"), t == i && y.slice(0, u).addClass("disabled"), t == a && y.slice(f + 1).addClass("disabled"), v = "", t = parseInt(t / 10, 10) * 10;
        var b = this.picker.find(".datepicker-years").find("th:eq(1)").text(t + "-" + (t + 9)).end().find("td");
        t -= 1;
        for(var w = -1; w < 11; w++)v += '<span class="year' + (w == -1 || w == 10 ? " old" : "") + (g == t ? " active" : "") + (t < i || t > a ? " disabled" : "") + '">' + t + "</span>", t += 1;
        b.html(v)
    }, updateNavArrows:function () {
        var e = new Date(this.viewDate), t = e.getUTCFullYear(), n = e.getUTCMonth();
        switch(this.viewMode) {
            case 0:
                this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility:"hidden"}) : this.picker.find(".prev").css({visibility:"visible"}), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility:"hidden"}) : this.picker.find(".next").css({visibility:"visible"});
                break;
            case 1:
            case 2:
                this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({visibility:"hidden"}) : this.picker.find(".prev").css({visibility:"visible"}), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({visibility:"hidden"}) : this.picker.find(".next").css({visibility:"visible"})
        }
    }, click:function (t) {
        t.stopPropagation(), t.preventDefault();
        var r = e(t.target).closest("span, td, th");
        if(r.length == 1) {
            switch(r[0].nodeName.toLowerCase()) {
                case"th":
                    switch(r[0].className) {
                        case"switch":
                            this.showMode(1);
                            break;
                        case"prev":
                        case"next":
                            var i = o.modes[this.viewMode].navStep * (r[0].className == "prev" ? -1 : 1);
                            switch(this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, i);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, i)
                            }
                            this.fill();
                            break;
                        case"today":
                            var s = new Date;
                            s.setUTCHours(0), s.setUTCMinutes(0), s.setUTCSeconds(0), s.setUTCMilliseconds(0), this.showMode(-2);
                            var u = this.todayBtn == "linked" ? null : "view";
                            this._setDate(s, u)
                    }
                    break;
                case"span":
                    if(!r.is(".disabled")) {
                        this.viewDate.setUTCDate(1);
                        if(r.is(".month")) {
                            var a = r.parent().find("span").index(r);
                            this.viewDate.setUTCMonth(a), this.element.trigger({type:"changeMonth", date:this.viewDate})
                        } else {
                            var f = parseInt(r.text(), 10) || 0;
                            this.viewDate.setUTCFullYear(f), this.element.trigger({type:"changeYear", date:this.viewDate})
                        }
                        this.showMode(-1), this.fill()
                    }
                    break;
                case"td":
                    if(r.is(".day") && !r.is(".disabled")) {
                        var l = parseInt(r.text(), 10) || 1, f = this.viewDate.getUTCFullYear(), a = this.viewDate.getUTCMonth();
                        r.is(".old") ? a == 0 ? (a = 11, f -= 1) : a -= 1 : r.is(".new") && (a == 11 ? (a = 0, f += 1) : a += 1), this._setDate(n(f, a, l, 0, 0, 0, 0))
                    }
            }
        }
    }, _setDate:function (e, t) {
        if(!t || t == "date") {
            this.date = e;
        }
        if(!t || t == "view") {
            this.viewDate = e;
        }
        this.fill(), this.setValue(), this.element.trigger({type:"changeDate", date:this.date});
        var n;
        this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && (n.change(), this.autoclose && this.hide())
    }, moveMonth:function (e, t) {
        if(!t) {
            return e;
        }
        var n = new Date(e.valueOf()), r = n.getUTCDate(), i = n.getUTCMonth(), s = Math.abs(t), o, u;
        t = t > 0 ? 1 : -1;
        if(s == 1) {
            u = t == -1 ? function () {
                return n.getUTCMonth() == i
            } : function () {
                return n.getUTCMonth() != o
            }, o = i + t, n.setUTCMonth(o);
            if(o < 0 || o > 11) {
                o = (o + 12) % 12
            }
        } else {
            for(var a = 0; a < s; a++)n = this.moveMonth(n, t);
            o = n.getUTCMonth(), n.setUTCDate(r), u = function () {
                return o != n.getUTCMonth()
            }
        }
        while(u())n.setUTCDate(--r), n.setUTCMonth(o);
        return n
    }, moveYear:function (e, t) {
        return this.moveMonth(e, t * 12)
    }, dateWithinRange:function (e) {
        return e >= this.startDate && e <= this.endDate
    }, keydown:function (e) {
        if(this.picker.is(":not(:visible)")) {
            e.keyCode == 27 && this.show();
            return
        }
        var t = !1, n, r, i, s, o;
        switch(e.keyCode) {
            case 27:
                this.hide(), e.preventDefault();
                break;
            case 37:
            case 39:
                if(!this.keyboardNavigation) {
                    break;
                }
                n = e.keyCode == 37 ? -1 : 1, e.ctrlKey ? (s = this.moveYear(this.date, n), o = this.moveYear(this.viewDate, n)) : e.shiftKey ? (s = this.moveMonth(this.date, n), o = this.moveMonth(this.viewDate, n)) : (s = new Date(this.date), s.setUTCDate(this.date.getUTCDate() + n), o = new Date(this.viewDate), o.setUTCDate(this.viewDate.getUTCDate() + n)), this.dateWithinRange(s) && (this.date = s, this.viewDate = o, this.setValue(), this.update(), e.preventDefault(), t = !0);
                break;
            case 38:
            case 40:
                if(!this.keyboardNavigation) {
                    break;
                }
                n = e.keyCode == 38 ? -1 : 1, e.ctrlKey ? (s = this.moveYear(this.date, n), o = this.moveYear(this.viewDate, n)) : e.shiftKey ? (s = this.moveMonth(this.date, n), o = this.moveMonth(this.viewDate, n)) : (s = new Date(this.date), s.setUTCDate(this.date.getUTCDate() + n * 7), o = new Date(this.viewDate), o.setUTCDate(this.viewDate.getUTCDate() + n * 7)), this.dateWithinRange(s) && (this.date = s, this.viewDate = o, this.setValue(), this.update(), e.preventDefault(), t = !0);
                break;
            case 13:
                this.hide(), e.preventDefault();
                break;
            case 9:
                this.hide()
        }
        if(t) {
            this.element.trigger({type:"changeDate", date:this.date});
            var u;
            this.isInput ? u = this.element : this.component && (u = this.element.find("input")), u && u.change()
        }
    }, showMode:function (e) {
        e && (this.viewMode = Math.max(0, Math.min(2, this.viewMode + e))), this.picker.find(">div").hide().filter(".datepicker-" + o.modes[this.viewMode].clsName).show(), this.updateNavArrows()
    }}, e.fn.datepicker = function (t) {
        var n = Array.apply(null, arguments);
        return n.shift(), this.each(function () {
            var r = e(this), s = r.data("datepicker"), o = typeof t == "object" && t;
            s || r.data("datepicker", s = new i(this, e.extend({}, e.fn.datepicker.defaults, o))), typeof t == "string" && typeof s[t] == "function" && s[t].apply(s, n)
        })
    }, e.fn.datepicker.defaults = {}, e.fn.datepicker.Constructor = i;
    var s = e.fn.datepicker.dates = {en:{days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin:["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today:"Today"}}, o = {modes:[
        {clsName:"days", navFnc:"Month", navStep:1},
        {clsName:"months", navFnc:"FullYear", navStep:1},
        {clsName:"years", navFnc:"FullYear", navStep:10}
    ], isLeapYear:function (e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }, getDaysInMonth:function (e, t) {
        return[31, o.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
    }, validParts:/dd?|mm?|MM?|yy(?:yy)?/g, nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\r]+/g, parseFormat:function (e) {
        var t = e.replace(this.validParts, "\0").split("\0"), n = e.match(this.validParts);
        if(!t || !t.length || !n || n.length == 0) {
            throw new Error("Invalid date format.");
        }
        return{separators:t, parts:n}
    }, parseDate:function (t, r, o) {
        if(t instanceof Date) {
            return t;
        }
        if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(t)) {
            var u = /([-+]\d+)([dmwy])/, a = t.match(/([-+]\d+)([dmwy])/g), f, l;
            t = new Date;
            for(var c = 0; c < a.length; c++) {
                f = u.exec(a[c]), l = parseInt(f[1]);
                switch(f[2]) {
                    case"d":
                        t.setUTCDate(t.getUTCDate() + l);
                        break;
                    case"m":
                        t = i.prototype.moveMonth.call(i.prototype, t, l);
                        break;
                    case"w":
                        t.setUTCDate(t.getUTCDate() + l * 7);
                        break;
                    case"y":
                        t = i.prototype.moveYear.call(i.prototype, t, l)
                }
            }
            return n(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 0, 0, 0)
        }
        var a = t && t.match(this.nonpunctuation) || [], t = new Date, h = {}, p = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], d = {yyyy:function (e, t) {
            return e.setUTCFullYear(t)
        }, yy:function (e, t) {
            return e.setUTCFullYear(2e3 + t)
        }, m:function (e, t) {
            t -= 1;
            while(t < 0)t += 12;
            t %= 12, e.setUTCMonth(t);
            while(e.getUTCMonth() != t)e.setUTCDate(e.getUTCDate() - 1);
            return e
        }, d:function (e, t) {
            return e.setUTCDate(t)
        }}, v, m, f;
        d.M = d.MM = d.mm = d.m, d.dd = d.d, t = n(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 0, 0, 0);
        if(a.length == r.parts.length) {
            for(var c = 0, g = r.parts.length; c < g; c++) {
                v = parseInt(a[c], 10), f = r.parts[c];
                if(isNaN(v)) {
                    switch(f) {
                        case"MM":
                            m = e(s[o].months).filter(function () {
                                var e = this.slice(0, a[c].length), t = a[c].slice(0, e.length);
                                return e == t
                            }), v = e.inArray(m[0], s[o].months) + 1;
                            break;
                        case"M":
                            m = e(s[o].monthsShort).filter(function () {
                                var e = this.slice(0, a[c].length), t = a[c].slice(0, e.length);
                                return e == t
                            }), v = e.inArray(m[0], s[o].monthsShort) + 1
                    }
                }
                h[f] = v
            }
            for(var c = 0, y; c < p.length; c++)y = p[c], y in h && d[y](t, h[y])
        }
        return t
    }, formatDate:function (t, n, r) {
        var i = {d:t.getUTCDate(), m:t.getUTCMonth() + 1, M:s[r].monthsShort[t.getUTCMonth()], MM:s[r].months[t.getUTCMonth()], yy:t.getUTCFullYear().toString().substring(2), yyyy:t.getUTCFullYear()};
        i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m;
        var t = [], o = e.extend([], n.separators);
        for(var u = 0, a = n.parts.length; u < a; u++)o.length && t.push(o.shift()), t.push(i[n.parts[u]]);
        return t.join("")
    }, headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>', contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};
    o.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + o.headTemplate + "<tbody></tbody>" + o.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + o.headTemplate + o.contTemplate + o.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + o.headTemplate + o.contTemplate + o.footTemplate + "</table>" + "</div>" + "</div>";
    for(var u = 2, a = arguments.length; u < a; u++)arguments[u].localize()
}), timely.define("scripts/calendar/load_views", ["jquery", "scripts/calendar/print", "scripts/calendar/posterboard_view", "scripts/calendar/agenda_view", "scripts/calendar/month_view", "libs/frontend_utils", "ai1ec_calendar", "ai1ec_config", "scripts/common_scripts/frontend/common_frontend", "external_libs/jquery_history", "external_libs/jquery.tablescroller", "external_libs/jquery.scrollTo", "external_libs/bootstrap_datepicker"], function (e, t, n, r, i, s, o, u, a) {
    var f = function () {
        var t = e("#ai1ec-view-dropdown .dropdown-menu .active a");
        e("table.ai1ec-week-view-original").tableScroll({height:400, containerClass:"ai1ec-week-view ai1ec-popover-boundary"}), e("table.ai1ec-oneday-view-original").tableScroll({height:400, containerClass:"ai1ec-oneday-view ai1ec-popover-boundary"}), (e(".ai1ec-week-view").length || e(".ai1ec-oneday-view").length) && e(".ai1ec-oneday-view .tablescroll_wrapper, .ai1ec-week-view .tablescroll_wrapper").scrollTo(".ai1ec-hour-marker:eq(6)"), e(".ai1ec-month-view .ai1ec-multiday").length && i.extend_multiday_events(), e(".ai1ec-posterboard-view").length && n.resize_masonry()
    }, l = function () {
        var t = e(".ai1ec-minical-trigger").data("datepicker");
        typeof t != "undefined" && t.picker.parent(".timely").remove(), e(".tooltip.in, .ai1ec-popup").remove()
    }, c = function (t, n) {
        e("#ai1ec-calendar-view-loading").fadeIn("fast"), e("#ai1ec-calendar-view").fadeTo("fast", .3, function () {
            var r = {request_type:n, ai1ec_doing_ajax:!0};
            e.ajax({url:t, dataType:n, data:r, method:"get", success:function (t) {
                l(), typeof t.views_dropdown == "string" && e(".ai1ec-views-dropdown").replaceWith(t.views_dropdown), typeof t.categories == "string" && e(".ai1ec-category-filter").replaceWith(t.categories), typeof t.tags == "string" && e(".ai1ec-tag-filter").replaceWith(t.tags), typeof t.subscribe_buttons == "string" && e(".ai1ec-subscribe-container").replaceWith(t.subscribe_buttons);
                var n = e("#ai1ec-calendar-view-container");
                n.height(n.height());
                var r = e("#ai1ec-calendar-view").html(t.html).height();
                n.animate({height:r}, {complete:function () {
                    n.height("auto")
                }}), e("#ai1ec-calendar-view-loading").fadeOut("fast"), e("#ai1ec-calendar-view").fadeTo("fast", 1), f()
            }})
        })
    }, h = function (e) {
        var t = History.getState();
        c(t.url, "json")
    }, p = function (t) {
        var n = e(this);
        t.preventDefault(), n.data("type") === "json" ? History.pushState(null, null, n.attr("href")) : c(n.attr("href"), "jsonp")
    }, d = function (t) {
        var n = e(this);
        t.preventDefault();
        if(typeof n.data("datepicker") == "undefined") {
            n.datepicker({todayBtn:"linked", todayHighlight:!0, templateOverrides:"headTemplate contTemplate", headTemplate:'<thead><tr class="datepicker-btn-group"><th class="prev"><div class="dp-btn"><i class="icon-arrow-left"/></div></th><th colspan="5" class="switch"><div class="dp-btn"></div></th><th class="next"><div class="dp-btn"><i class="icon-arrow-right"/></div></th></tr></thead>', contTemplate:'<tbody><tr><td colspan="7" class="grid-picker"></td></tr></tbody>'});
            var r = n.data("datepicker");
            r.picker.wrapAll('<div class="timely" />').addClass("ai1ec-right-aligned");
            var i = r.place;
            r.place = function () {
                i.call(this);
                var t = this.component ? this.component : this.element, n = t.offset();
                this.picker.css({left:"auto", right:e(document).width() - n.left - t.outerWidth()})
            }
        }
        n.datepicker("show")
    }, v = function (t) {
        var n, r = e(this);
        r.datepicker("hide"), n = r.data("href"), date = r.data("date").replace(/\//g, "-"), n = n.replace("__DATE__", date), r.data("type") === "json" ? History.pushState(null, null, n) : c(n, "jsonp")
    }, m = function () {
        History.pushState(null, null, e(this).data("href"))
    };
    return{initialize_view:f, handle_click_on_link_to_load_view:p, handle_minical_trigger:d, handle_minical_change_date:v, clear_filters:m, handle_state_change:h}
}), timely.define("libs/utils", ["jquery"], function (e) {
    var t = function () {
        return{is_float:function (e) {
            return!isNaN(parseFloat(e))
        }, is_valid_coordinate:function (e, t) {
            var n = t ? 90 : 180;
            return this.is_float(e) && Math.abs(e) < n
        }, convert_comma_to_dot:function (e) {
            return e.replace(",", ".")
        }, field_has_value:function (t) {
            var n = "#" + t, r = e(n), i = !1;
            return r.length === 1 && (i = e.trim(r.val()) !== ""), i
        }, make_alert:function (t, n, r) {
            var i = "";
            switch(n) {
                case"error":
                    i = "alert alert-error";
                    break;
                case"success":
                    i = "alert alert-success";
                    break;
                default:
                    i = "alert"
            }
            var s = e("<div />", {"class":i, html:t});
            if(!r) {
                var o = e("<a />", {"class":"close", "data-dismiss":"alert", href:"#", text:"x"});
                s.prepend(o)
            }
            return s
        }, get_ajax_url:function () {
            return typeof window.ajaxurl == "undefined" ? "http://localhost/wordpress/wp-admin/admin-ajax.php" : window.ajaxurl
        }, isUrl:function (e) {
            var t = /(http|https|webcal):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return t.test(e)
        }, isValidEmail:function (e) {
            var t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return t.test(e)
        }}
    }();
    return t
}), timely.define("external_libs/jquery.debouncedresize", ["jquery"], function (e) {
    var t = e.event, n, r;
    n = t.special.debouncedresize = {setup:function () {
        e(this).on("resize", n.handler)
    }, teardown:function () {
        e(this).off("resize", n.handler)
    }, handler:function (e, i) {
        var s = this, o = arguments, u = function () {
            e.type = "debouncedresize", t.dispatch.apply(s, o)
        };
        r && clearTimeout(r), i ? u() : r = setTimeout(u, n.threshold)
    }, threshold:150}
}), timely.define("external_libs/bootstrap_transition", ["jquery"], function (e) {
    e.support.transition = function () {
        var e = function () {
            var e = document.createElement("bootstrap"), t = {WebkitTransition:"webkitTransitionEnd", MozTransition:"transitionend", OTransition:"oTransitionEnd", msTransition:"MSTransitionEnd", transition:"transitionend"}, n;
            for(n in t)if(e.style[n] !== undefined) {
                return t[n]
            }
        }();
        return e && {end:e}
    }()
}), timely.define("external_libs/bootstrap_modal", ["jquery"], function (e) {
    function n() {
        var t = this, n = setTimeout(function () {
            t.$element.off(e.support.transition.end), r.call(t)
        }, 500);
        this.$element.one(e.support.transition.end, function () {
            clearTimeout(n), r.call(t)
        })
    }

    function r(e) {
        this.$element.hide().trigger("hidden"), i.call(this)
    }

    function i(t) {
        var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
        if(this.isShown && this.options.backdrop) {
            var i = e.support.transition && r;
            this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.options.backdrop != "static" && this.$backdrop.click(e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), i ? this.$backdrop.one(e.support.transition.end, t) : t()
        } else {
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(s, this)) : s.call(this)) : t && t()
        }
    }

    function s() {
        this.$backdrop.remove(), this.$backdrop = null
    }

    function o() {
        var t = this;
        this.isShown && this.options.keyboard ? e(document).on("keyup.dismiss.modal", function (e) {
            e.which == 27 && t.hide()
        }) : this.isShown || e(document).off("keyup.dismiss.modal")
    }

    var t = function (t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this))
    };
    t.prototype = {constructor:t, toggle:function () {
        return this[this.isShown ? "hide" : "show"]()
    }, show:function () {
        var t = this, n = e.Event("show");
        this.$element.trigger(n);
        if(this.isShown || n.isDefaultPrevented()) {
            return;
        }
        e("body").addClass("modal-open"), this.isShown = !0, o.call(this), i.call(this, function () {
            var n = e.support.transition && t.$element.hasClass("fade");
            t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in"), n ? t.$element.one(e.support.transition.end, function () {
                t.$element.trigger("shown")
            }) : t.$element.trigger("shown")
        })
    }, hide:function (t) {
        t && t.preventDefault();
        var i = this;
        t = e.Event("hide"), this.$element.trigger(t);
        if(!this.isShown || t.isDefaultPrevented()) {
            return;
        }
        this.isShown = !1, e("body").removeClass("modal-open"), o.call(this), this.$element.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? n.call(this) : r.call(this)
    }}, e.fn.modal = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("modal"), s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
            i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
        })
    }, e.fn.modal.defaults = {backdrop:!0, keyboard:!0, show:!0}, e.fn.modal.Constructor = t, e(function () {
        e("body").on("click.modal.data-api", '[data-toggle="modal"]', function (t) {
            var n = e(this), r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")), s = i.data("modal") ? "toggle" : e.extend({}, i.data(), n.data());
            t.preventDefault(), i.modal(s)
        })
    })
}), timely.define("scripts/calendar", ["jquery", "domReady", "scripts/calendar/load_views", "scripts/calendar/print", "scripts/calendar/agenda_view", "scripts/calendar/posterboard_view", "scripts/calendar/month_view", "ai1ec_calendar", "ai1ec_config", "scripts/common_scripts/frontend/common_frontend", "libs/utils", "external_libs/jquery.debouncedresize", "external_libs/bootstrap_transition", "external_libs/bootstrap_modal"], function (e, t, n, r, i, s, o, u, a, f, l) {
    var c = function () {
        if(u.selector !== undefined && u.selector !== "" && e(u.selector).length === 1) {
            var t = e(":header:contains(" + u.title + "):first");
            t.length || (t = e('<h1 class="page-title"></h1>'), t.text(u.title));
            var n = e("#ai1ec-container").detach().before(t);
            e(u.selector).empty().append(n).hide().css("visibility", "visible").fadeIn("fast")
        }
    }, h = function () {
        var t = e(this).data("instanceId");
        e(".ai1ec-event-instance-id-" + t).addClass("ai1ec-hover")
    }, p = function () {
        var t = e(this).data("instanceId");
        e(".ai1ec-event-instance-id-" + t).removeClass("ai1ec-hover")
    }, d = function () {
        var t = e(this), n = t.data("instanceId");
        t.delay(500).queue(function () {
            e(".ai1ec-event-instance-id-" + n).addClass("ai1ec-raised")
        })
    }, v = function (t) {
        var n = e(this), r = n.data("instanceId"), i = e(t.toElement || t.relatedTarget);
        if(i.is(".ai1ec-event-instance-id-" + r) || i.parent().is(".ai1ec-event-instance-id-" + r)) {
            return;
        }
        e(".ai1ec-event-instance-id-" + r).clearQueue().removeClass("ai1ec-raised")
    }, m = function () {
        c()
    }, g = function () {
        e(document).on({mouseenter:h, mouseleave:p}, ".ai1ec-event-container.ai1ec-multiday"), e(document).on({mouseenter:d, mouseleave:v}, ".ai1ec-oneday-view .ai1ec-oneday .ai1ec-event-container, .ai1ec-week-view .ai1ec-week .ai1ec-event-container"), e(document).on("click", ".ai1ec-agenda-view .ai1ec-event-header", i.toggle_event), e(document).on("click", "#ai1ec-agenda-expand-all", i.expand_all), e(document).on("click", "#ai1ec-agenda-collapse-all", i.collapse_all), e.event.special.debouncedresize.threshold = 400, e(window).on("debouncedresize", s.resize_masonry), e(document).on("click", "a.ai1ec-load-view", n.handle_click_on_link_to_load_view), e(document).on("click", ".ai1ec-minical-trigger", n.handle_minical_trigger), e(document).on("changeDate", ".ai1ec-minical-trigger", n.handle_minical_change_date), e(document).on("click", ".ai1ec-clear-filter", n.clear_filters), e(document).on("click", "#ai1ec-print-button", r.handle_click_on_print_button), e(window).bind("statechange", n.handle_state_change)
    }, y = function () {
        t(function () {
            m(), g(), n.initialize_view()
        })
    };
    return{start:y}
});