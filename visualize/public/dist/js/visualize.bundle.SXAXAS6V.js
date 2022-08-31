(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ../visualize/node_modules/@editorjs/editorjs/dist/editor.js
  var require_editor = __commonJS({
    "../visualize/node_modules/@editorjs/editorjs/dist/editor.js"(exports, module) {
      !function(t, e) {
        typeof exports == "object" && typeof module == "object" ? module.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof exports == "object" ? exports.EditorJS = e() : t.EditorJS = e();
      }(window, function() {
        return function(t) {
          var e = {};
          function n(o) {
            if (e[o])
              return e[o].exports;
            var r = e[o] = { i: o, l: false, exports: {} };
            return t[o].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = t, n.c = e, n.d = function(t2, e2, o) {
            n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: o });
          }, n.r = function(t2) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, n.t = function(t2, e2) {
            if (1 & e2 && (t2 = n(t2)), 8 & e2)
              return t2;
            if (4 & e2 && typeof t2 == "object" && t2 && t2.__esModule)
              return t2;
            var o = /* @__PURE__ */ Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t2 }), 2 & e2 && typeof t2 != "string")
              for (var r in t2)
                n.d(o, r, function(e3) {
                  return t2[e3];
                }.bind(null, r));
            return o;
          }, n.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return n.d(e2, "a", e2), e2;
          }, n.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, n.p = "", n(n.s = 183);
        }([function(t, e, n) {
          var o = n(10), r = n(17), i = n(27), a = n(23), s = n(31), c = function(t2, e2, n2) {
            var l, u, f, d, p = t2 & c.F, h = t2 & c.G, v = t2 & c.S, y = t2 & c.P, g = t2 & c.B, b = h ? o : v ? o[e2] || (o[e2] = {}) : (o[e2] || {}).prototype, m = h ? r : r[e2] || (r[e2] = {}), k = m.prototype || (m.prototype = {});
            for (l in h && (n2 = e2), n2)
              f = ((u = !p && b && b[l] !== void 0) ? b : n2)[l], d = g && u ? s(f, o) : y && typeof f == "function" ? s(Function.call, f) : f, b && a(b, l, f, t2 & c.U), m[l] != f && i(m, l, d), y && k[l] != f && (k[l] = f);
          };
          o.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
        }, function(t, e) {
          t.exports = function(t2) {
            return t2 && t2.__esModule ? t2 : { default: t2 };
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            if (!(t2 instanceof e2))
              throw new TypeError("Cannot call a class as a function");
          };
        }, function(t, e) {
          function n(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var o = e2[n2];
              o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(t2, o.key, o);
            }
          }
          t.exports = function(t2, e2, o) {
            return e2 && n(t2.prototype, e2), o && n(t2, o), t2;
          };
        }, function(t, e) {
          function n(e2) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
              return t2.__proto__ || Object.getPrototypeOf(t2);
            }, n(e2);
          }
          t.exports = n;
        }, function(t, e, n) {
          var o = n(107);
          t.exports = function(t2, e2) {
            if (typeof e2 != "function" && e2 !== null)
              throw new TypeError("Super expression must either be null or a function");
            t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), e2 && o(t2, e2);
          };
        }, function(t, e, n) {
          var o = n(143), r = n(368);
          t.exports = function(t2, e2) {
            return !e2 || o(e2) !== "object" && typeof e2 != "function" ? r(t2) : e2;
          };
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(374)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            function c(t2) {
              if (typeof Symbol == "undefined" || t2[Symbol.iterator] == null) {
                if (Array.isArray(t2) || (t2 = function(t3, e3) {
                  if (t3) {
                    if (typeof t3 == "string")
                      return l(t3, e3);
                    var n3 = Object.prototype.toString.call(t3).slice(8, -1);
                    return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(n3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? l(t3, e3) : void 0;
                  }
                }(t2))) {
                  var e2 = 0, n2 = function() {
                  };
                  return { s: n2, n: function() {
                    return e2 >= t2.length ? { done: true } : { done: false, value: t2[e2++] };
                  }, e: function(t3) {
                    throw t3;
                  }, f: n2 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var o3, r3, i3 = true, a2 = false;
              return { s: function() {
                o3 = t2[Symbol.iterator]();
              }, n: function() {
                var t3 = o3.next();
                return i3 = t3.done, t3;
              }, e: function(t3) {
                a2 = true, r3 = t3;
              }, f: function() {
                try {
                  i3 || o3.return == null || o3.return();
                } finally {
                  if (a2)
                    throw r3;
                }
              } };
            }
            function l(t2, e2) {
              (e2 == null || e2 > t2.length) && (e2 = t2.length);
              for (var n2 = 0, o3 = new Array(e2); n2 < e2; n2++)
                o3[n2] = t2[n2];
              return o3;
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var u = function() {
              function t2(e2) {
                var n2 = this, o3 = e2.config, i3 = e2.eventsDispatcher;
                if ((0, r2.default)(this, t2), this.nodes = {}, this.listeners = new a.default(), this.readOnlyMutableListeners = { on: function(t3, e3, o4) {
                  var r3 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
                  n2.mutableListenerIds.push(n2.listeners.on(t3, e3, o4, r3));
                }, clearAll: function() {
                  var t3, e3 = c(n2.mutableListenerIds);
                  try {
                    for (e3.s(); !(t3 = e3.n()).done; ) {
                      var o4 = t3.value;
                      n2.listeners.offById(o4);
                    }
                  } catch (t4) {
                    e3.e(t4);
                  } finally {
                    e3.f();
                  }
                  n2.mutableListenerIds = [];
                } }, this.mutableListenerIds = [], (this instanceof t2 ? this.constructor : void 0) === t2)
                  throw new TypeError("Constructors for abstract class Module are not allowed.");
                this.config = o3, this.eventsDispatcher = i3;
              }
              return (0, i2.default)(t2, [{ key: "removeAllNodes", value: function() {
                for (var t3 in this.nodes) {
                  var e2 = this.nodes[t3];
                  e2 instanceof HTMLElement && e2.remove();
                }
              } }, { key: "state", set: function(t3) {
                this.Editor = t3;
              } }, { key: "isRtl", get: function() {
                return this.config.i18n.direction === "rtl";
              } }]), t2;
            }();
            o2.default = u, u.displayName = "Module", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(367), n(22), n(15)], (i = typeof (o = function(t2, e2, o2, r2, i2) {
            "use strict";
            var a, s = n(1);
            function c(t3, e3) {
              var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "log", o3 = arguments.length > 3 ? arguments[3] : void 0, r3 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "color: inherit";
              if ("console" in window && window.console[n2]) {
                var i3 = ["info", "log", "warn", "error"].includes(n2), s2 = [];
                switch (c.logLevel) {
                  case a.ERROR:
                    if (n2 !== "error")
                      return;
                    break;
                  case a.WARN:
                    if (!["error", "warn"].includes(n2))
                      return;
                    break;
                  case a.INFO:
                    if (!i3 || t3)
                      return;
                }
                o3 && s2.push(o3);
                var l2 = "Editor.js ".concat("2.20.0"), u2 = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                t3 && (i3 ? (s2.unshift(u2, r3), e3 = "%c".concat(l2, "%c ").concat(e3)) : e3 = "( ".concat(l2, " )").concat(e3));
                try {
                  if (i3)
                    if (o3) {
                      var f2;
                      (f2 = console)[n2].apply(f2, ["".concat(e3, " %o")].concat(s2));
                    } else {
                      var d2;
                      (d2 = console)[n2].apply(d2, [e3].concat(s2));
                    }
                  else
                    console[n2](e3);
                } catch (t4) {
                }
              }
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.setLogLevel = function(t3) {
              c.logLevel = t3;
            }, t2.typeOf = f, t2.isFunction = d, t2.isObject = p, t2.isString = function(t3) {
              return f(t3) === "string";
            }, t2.isBoolean = function(t3) {
              return f(t3) === "boolean";
            }, t2.isNumber = function(t3) {
              return f(t3) === "number";
            }, t2.isUndefined = h, t2.isClass = function(t3) {
              return d(t3) && /^\s*class\s+/.test(t3.toString());
            }, t2.isEmpty = function(t3) {
              return !t3 || Object.keys(t3).length === 0 && t3.constructor === Object;
            }, t2.isPromise = function(t3) {
              return Promise.resolve(t3) === t3;
            }, t2.isPrintableKey = function(t3) {
              return t3 > 47 && t3 < 58 || t3 === 32 || t3 === 13 || t3 === 229 || t3 > 64 && t3 < 91 || t3 > 95 && t3 < 112 || t3 > 185 && t3 < 193 || t3 > 218 && t3 < 223;
            }, t2.sequence = function(t3) {
              return v.apply(this, arguments);
            }, t2.array = function(t3) {
              return Array.prototype.slice.call(t3);
            }, t2.delay = function(t3, e3) {
              return function() {
                var n2 = this, o3 = arguments;
                window.setTimeout(function() {
                  return t3.apply(n2, o3);
                }, e3);
              };
            }, t2.getFileExtension = function(t3) {
              return t3.name.split(".").pop();
            }, t2.isValidMimeType = function(t3) {
              return /^[-\w]+\/([-+\w]+|\*)$/.test(t3);
            }, t2.debounce = function(t3, e3, n2) {
              var o3, r3 = arguments, i3 = this;
              return function() {
                var a2 = i3, s2 = r3, c2 = n2 && !o3;
                window.clearTimeout(o3), o3 = window.setTimeout(function() {
                  o3 = null, n2 || t3.apply(a2, s2);
                }, e3), c2 && t3.apply(a2, s2);
              };
            }, t2.copyTextToClipboard = function(t3) {
              var e3 = i2.default.make("div", "codex-editor-clipboard", { innerHTML: t3 });
              document.body.appendChild(e3);
              var n2 = window.getSelection(), o3 = document.createRange();
              o3.selectNode(e3), window.getSelection().removeAllRanges(), n2.addRange(o3), document.execCommand("copy"), document.body.removeChild(e3);
            }, t2.getUserOS = y, t2.capitalize = function(t3) {
              return t3[0].toUpperCase() + t3.slice(1);
            }, t2.deepMerge = function t3(e3) {
              for (var n2 = arguments.length, r3 = new Array(n2 > 1 ? n2 - 1 : 0), i3 = 1; i3 < n2; i3++)
                r3[i3 - 1] = arguments[i3];
              if (!r3.length)
                return e3;
              var a2 = r3.shift();
              if (p(e3) && p(a2))
                for (var s2 in a2)
                  p(a2[s2]) ? (e3[s2] || Object.assign(e3, (0, o2.default)({}, s2, {})), t3(e3[s2], a2[s2])) : Object.assign(e3, (0, o2.default)({}, s2, a2[s2]));
              return t3.apply(void 0, [e3].concat(r3));
            }, t2.beautifyShortcut = function(t3) {
              var e3 = y();
              return t3 = t3.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), t3 = e3.mac ? t3.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : t3.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
            }, t2.getValidUrl = function(t3) {
              try {
                return new URL(t3).href;
              } catch (t4) {
              }
              return t3.substring(0, 2) === "//" ? window.location.protocol + t3 : window.location.origin + t3;
            }, t2.openTab = function(t3) {
              window.open(t3, "_blank");
            }, t2.generateId = function() {
              var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
              return "".concat(t3).concat(Math.floor(1e8 * Math.random()).toString(16));
            }, t2.deprecationAssert = function(t3, e3, n2) {
              var o3 = "\xAB".concat(e3, "\xBB is deprecated and will be removed in the next major release. Please use the \xAB").concat(n2, "\xBB instead.");
              t3 && u(o3, "warn");
            }, t2.isTouchSupported = t2.logLabeled = t2.log = t2.mouseButtons = t2.keyCodes = t2.LogLevels = void 0, e2 = s(e2), o2 = s(o2), r2 = s(r2), i2 = s(i2), t2.LogLevels = a, function(t3) {
              t3.VERBOSE = "VERBOSE", t3.INFO = "INFO", t3.WARN = "WARN", t3.ERROR = "ERROR";
            }(a || (t2.LogLevels = a = {})), t2.keyCodes = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, DOWN: 40, RIGHT: 39, DELETE: 46, META: 91 }, t2.mouseButtons = { LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4 }, c.logLevel = a.VERBOSE;
            var l = c.bind(window, false);
            t2.log = l;
            var u = c.bind(window, true);
            function f(t3) {
              return Object.prototype.toString.call(t3).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            function d(t3) {
              return f(t3) === "function";
            }
            function p(t3) {
              return f(t3) === "object";
            }
            function h(t3) {
              return f(t3) === "undefined";
            }
            function v() {
              return (v = (0, r2.default)(e2.default.mark(function t3(n2) {
                var o3, i3, a2, s2, c2 = arguments;
                return e2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return s2 = function() {
                          return (s2 = (0, r2.default)(e2.default.mark(function t5(n3, o4, r3) {
                            return e2.default.wrap(function(t6) {
                              for (; ; )
                                switch (t6.prev = t6.next) {
                                  case 0:
                                    return t6.prev = 0, t6.next = 3, n3.function(n3.data);
                                  case 3:
                                    return t6.next = 5, o4(h(n3.data) ? {} : n3.data);
                                  case 5:
                                    t6.next = 10;
                                    break;
                                  case 7:
                                    t6.prev = 7, t6.t0 = t6.catch(0), r3(h(n3.data) ? {} : n3.data);
                                  case 10:
                                  case "end":
                                    return t6.stop();
                                }
                            }, t5, null, [[0, 7]]);
                          }))).apply(this, arguments);
                        }, a2 = function(t5, e3, n3) {
                          return s2.apply(this, arguments);
                        }, o3 = c2.length > 1 && c2[1] !== void 0 ? c2[1] : function() {
                        }, i3 = c2.length > 2 && c2[2] !== void 0 ? c2[2] : function() {
                        }, t4.abrupt("return", n2.reduce(function() {
                          var t5 = (0, r2.default)(e2.default.mark(function t6(n3, r3) {
                            return e2.default.wrap(function(t7) {
                              for (; ; )
                                switch (t7.prev = t7.next) {
                                  case 0:
                                    return t7.next = 2, n3;
                                  case 2:
                                    return t7.abrupt("return", a2(r3, o3, i3));
                                  case 3:
                                  case "end":
                                    return t7.stop();
                                }
                            }, t6);
                          }));
                          return function(e3, n3) {
                            return t5.apply(this, arguments);
                          };
                        }(), Promise.resolve()));
                      case 5:
                      case "end":
                        return t4.stop();
                    }
                }, t3);
              }))).apply(this, arguments);
            }
            function y() {
              var t3 = { win: false, mac: false, x11: false, linux: false }, e3 = Object.keys(t3).find(function(t4) {
                return navigator.appVersion.toLowerCase().indexOf(t4) !== -1;
              });
              return e3 ? (t3[e3] = true, t3) : t3;
            }
            t2.logLabeled = u;
            var g = "ontouchstart" in document.documentElement;
            t2.isTouchSupported = g;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o = n(143);
          function r() {
            if (typeof WeakMap != "function")
              return null;
            var t2 = /* @__PURE__ */ new WeakMap();
            return r = function() {
              return t2;
            }, t2;
          }
          t.exports = function(t2) {
            if (t2 && t2.__esModule)
              return t2;
            if (t2 === null || o(t2) !== "object" && typeof t2 != "function")
              return { default: t2 };
            var e2 = r();
            if (e2 && e2.has(t2))
              return e2.get(t2);
            var n2 = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in t2)
              if (Object.prototype.hasOwnProperty.call(t2, a)) {
                var s = i ? Object.getOwnPropertyDescriptor(t2, a) : null;
                s && (s.get || s.set) ? Object.defineProperty(n2, a, s) : n2[a] = t2[a];
              }
            return n2.default = t2, e2 && e2.set(t2, n2), n2;
          };
        }, function(t, e) {
          var n = t.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
          typeof __g == "number" && (__g = n);
        }, function(t, e) {
          t.exports = function(t2) {
            try {
              return !!t2();
            } catch (t3) {
              return true;
            }
          };
        }, function(t, e, n) {
          var o = n(13);
          t.exports = function(t2) {
            if (!o(t2))
              throw TypeError(t2 + " is not an object!");
            return t2;
          };
        }, function(t, e) {
          t.exports = function(t2) {
            return typeof t2 == "object" ? t2 !== null : typeof t2 == "function";
          };
        }, function(t, e, n) {
          var o = n(67)("wks"), r = n(44), i = n(10).Symbol, a = typeof i == "function";
          (t.exports = function(t2) {
            return o[t2] || (o[t2] = a && i[t2] || (a ? i : r)("Symbol." + t2));
          }).store = o;
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(42), n(2), n(3), n(8)], (i = typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var c = n(9), l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = l(a), s = c(s);
            var u = function() {
              function t2() {
                (0, i2.default)(this, t2);
              }
              return (0, a.default)(t2, null, [{ key: "isSingleTag", value: function(t3) {
                return t3.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(t3.tagName);
              } }, { key: "isLineBreakTag", value: function(t3) {
                return t3 && t3.tagName && ["BR", "WBR"].includes(t3.tagName);
              } }, { key: "make", value: function(t3) {
                var e2, n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i3 = document.createElement(t3);
                for (var a2 in Array.isArray(n2) ? (e2 = i3.classList).add.apply(e2, (0, r2.default)(n2)) : n2 && i3.classList.add(n2), o3)
                  Object.prototype.hasOwnProperty.call(o3, a2) && (i3[a2] = o3[a2]);
                return i3;
              } }, { key: "text", value: function(t3) {
                return document.createTextNode(t3);
              } }, { key: "svg", value: function(t3) {
                var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 14, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 14, o3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return o3.classList.add("icon", "icon--" + t3), o3.setAttribute("width", e2 + "px"), o3.setAttribute("height", n2 + "px"), o3.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t3, '"></use>'), o3;
              } }, { key: "append", value: function(t3, e2) {
                Array.isArray(e2) ? e2.forEach(function(e3) {
                  return t3.appendChild(e3);
                }) : t3.appendChild(e2);
              } }, { key: "prepend", value: function(t3, e2) {
                Array.isArray(e2) ? (e2 = e2.reverse()).forEach(function(e3) {
                  return t3.prepend(e3);
                }) : t3.prepend(e2);
              } }, { key: "swap", value: function(t3, e2) {
                var n2 = document.createElement("div"), o3 = t3.parentNode;
                o3.insertBefore(n2, t3), o3.insertBefore(t3, e2), o3.insertBefore(e2, n2), o3.removeChild(n2);
              } }, { key: "find", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, e2 = arguments.length > 1 ? arguments[1] : void 0;
                return t3.querySelector(e2);
              } }, { key: "get", value: function(t3) {
                return document.getElementById(t3);
              } }, { key: "findAll", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, e2 = arguments.length > 1 ? arguments[1] : void 0;
                return t3.querySelectorAll(e2);
              } }, { key: "findAllInputs", value: function(e2) {
                return s.array(e2.querySelectorAll(t2.allInputsSelector)).reduce(function(e3, n2) {
                  return t2.isNativeInput(n2) || t2.containsOnlyInlineElements(n2) ? [].concat((0, r2.default)(e3), [n2]) : [].concat((0, r2.default)(e3), (0, r2.default)(t2.getDeepestBlockElements(n2)));
                }, []);
              } }, { key: "getDeepestNode", value: function(e2) {
                var n2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], o3 = n2 ? "lastChild" : "firstChild", r3 = n2 ? "previousSibling" : "nextSibling";
                if (e2 && e2.nodeType === Node.ELEMENT_NODE && e2[o3]) {
                  var i3 = e2[o3];
                  if (t2.isSingleTag(i3) && !t2.isNativeInput(i3) && !t2.isLineBreakTag(i3))
                    if (i3[r3])
                      i3 = i3[r3];
                    else {
                      if (!i3.parentNode[r3])
                        return i3.parentNode;
                      i3 = i3.parentNode[r3];
                    }
                  return this.getDeepestNode(i3, n2);
                }
                return e2;
              } }, { key: "isElement", value: function(t3) {
                return !s.isNumber(t3) && t3 && t3.nodeType && t3.nodeType === Node.ELEMENT_NODE;
              } }, { key: "isFragment", value: function(t3) {
                return !s.isNumber(t3) && t3 && t3.nodeType && t3.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              } }, { key: "isContentEditable", value: function(t3) {
                return t3.contentEditable === "true";
              } }, { key: "isNativeInput", value: function(t3) {
                return !(!t3 || !t3.tagName) && ["INPUT", "TEXTAREA"].includes(t3.tagName);
              } }, { key: "canSetCaret", value: function(e2) {
                var n2 = true;
                if (t2.isNativeInput(e2))
                  switch (e2.type) {
                    case "file":
                    case "checkbox":
                    case "radio":
                    case "hidden":
                    case "submit":
                    case "button":
                    case "image":
                    case "reset":
                      n2 = false;
                  }
                else
                  n2 = t2.isContentEditable(e2);
                return n2;
              } }, { key: "isNodeEmpty", value: function(t3) {
                return !(this.isSingleTag(t3) && !this.isLineBreakTag(t3)) && (this.isElement(t3) && this.isNativeInput(t3) ? t3.value : t3.textContent.replace("\u200B", "")).trim().length === 0;
              } }, { key: "isLeaf", value: function(t3) {
                return !!t3 && t3.childNodes.length === 0;
              } }, { key: "isEmpty", value: function(t3) {
                t3.normalize();
                for (var e2 = [t3]; e2.length > 0; )
                  if (t3 = e2.shift()) {
                    if (this.isLeaf(t3) && !this.isNodeEmpty(t3))
                      return false;
                    t3.childNodes && e2.push.apply(e2, (0, r2.default)(Array.from(t3.childNodes)));
                  }
                return true;
              } }, { key: "isHTMLString", value: function(e2) {
                var n2 = t2.make("div");
                return n2.innerHTML = e2, n2.childElementCount > 0;
              } }, { key: "getContentLength", value: function(e2) {
                return t2.isNativeInput(e2) ? e2.value.length : e2.nodeType === Node.TEXT_NODE ? e2.length : e2.textContent.length;
              } }, { key: "containsOnlyInlineElements", value: function(e2) {
                var n2;
                return s.isString(e2) ? (n2 = document.createElement("div")).innerHTML = e2 : n2 = e2, Array.from(n2.children).every(function e3(n3) {
                  return !t2.blockElements.includes(n3.tagName.toLowerCase()) && Array.from(n3.children).every(e3);
                });
              } }, { key: "getDeepestBlockElements", value: function(e2) {
                return t2.containsOnlyInlineElements(e2) ? [e2] : Array.from(e2.children).reduce(function(e3, n2) {
                  return [].concat((0, r2.default)(e3), (0, r2.default)(t2.getDeepestBlockElements(n2)));
                }, []);
              } }, { key: "getHolder", value: function(t3) {
                return s.isString(t3) ? document.getElementById(t3) : t3;
              } }, { key: "isExtensionNode", value: function(t3) {
                return t3 && ["GRAMMARLY-EXTENSION"].includes(t3.nodeName);
              } }, { key: "isAnchor", value: function(t3) {
                return t3.tagName.toLowerCase() === "a";
              } }, { key: "allInputsSelector", get: function() {
                return "[contenteditable], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map(function(t3) {
                  return 'input[type="'.concat(t3, '"]');
                }).join(", ");
              } }, { key: "blockElements", get: function() {
                return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tr", "tfoot", "ul", "video"];
              } }]), t2;
            }();
            o2.default = u, u.displayName = "Dom", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o = n(33), r = Math.min;
          t.exports = function(t2) {
            return t2 > 0 ? r(o(t2), 9007199254740991) : 0;
          };
        }, function(t, e) {
          var n = t.exports = { version: "2.6.11" };
          typeof __e == "number" && (__e = n);
        }, function(t, e, n) {
          t.exports = !n(11)(function() {
            return Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a != 7;
          });
        }, function(t, e, n) {
          var o = n(12), r = n(109), i = n(40), a = Object.defineProperty;
          e.f = n(18) ? Object.defineProperty : function(t2, e2, n2) {
            if (o(t2), e2 = i(e2, true), o(n2), r)
              try {
                return a(t2, e2, n2);
              } catch (t3) {
              }
            if ("get" in n2 || "set" in n2)
              throw TypeError("Accessors not supported!");
            return "value" in n2 && (t2[e2] = n2.value), t2;
          };
        }, function(t, e, n) {
          var o = n(38);
          t.exports = function(t2) {
            return Object(o(t2));
          };
        }, function(t, e, n) {
          t.exports = n(140);
        }, function(t, e) {
          function n(t2, e2, n2, o, r, i, a) {
            try {
              var s = t2[i](a), c = s.value;
            } catch (t3) {
              return void n2(t3);
            }
            s.done ? e2(c) : Promise.resolve(c).then(o, r);
          }
          t.exports = function(t2) {
            return function() {
              var e2 = this, o = arguments;
              return new Promise(function(r, i) {
                var a = t2.apply(e2, o);
                function s(t3) {
                  n(a, r, i, s, c, "next", t3);
                }
                function c(t3) {
                  n(a, r, i, s, c, "throw", t3);
                }
                s(void 0);
              });
            };
          };
        }, function(t, e, n) {
          var o = n(10), r = n(27), i = n(26), a = n(44)("src"), s = n(188), c = ("" + s).split("toString");
          n(17).inspectSource = function(t2) {
            return s.call(t2);
          }, (t.exports = function(t2, e2, n2, s2) {
            var l = typeof n2 == "function";
            l && (i(n2, "name") || r(n2, "name", e2)), t2[e2] !== n2 && (l && (i(n2, a) || r(n2, a, t2[e2] ? "" + t2[e2] : c.join(String(e2)))), t2 === o ? t2[e2] = n2 : s2 ? t2[e2] ? t2[e2] = n2 : r(t2, e2, n2) : (delete t2[e2], r(t2, e2, n2)));
          })(Function.prototype, "toString", function() {
            return typeof this == "function" && this[a] || s.call(this);
          });
        }, function(t, e, n) {
          var o = n(0), r = n(11), i = n(38), a = /"/g, s = function(t2, e2, n2, o2) {
            var r2 = String(i(t2)), s2 = "<" + e2;
            return n2 !== "" && (s2 += " " + n2 + '="' + String(o2).replace(a, "&quot;") + '"'), s2 + ">" + r2 + "</" + e2 + ">";
          };
          t.exports = function(t2, e2) {
            var n2 = {};
            n2[t2] = e2(s), o(o.P + o.F * r(function() {
              var e3 = ""[t2]('"');
              return e3 !== e3.toLowerCase() || e3.split('"').length > 3;
            }), "String", n2);
          };
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(8), n(15)], (i = typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var c = n(9), l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = c(a), s = l(s);
            var u = function() {
              function t2() {
                (0, r2.default)(this, t2), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
              }
              return (0, i2.default)(t2, [{ key: "removeFakeBackground", value: function() {
                this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = false, document.execCommand(this.commandRemoveFormat));
              } }, { key: "setFakeBackground", value: function() {
                document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
              } }, { key: "save", value: function() {
                this.savedSelectionRange = t2.range;
              } }, { key: "restore", value: function() {
                if (this.savedSelectionRange) {
                  var t3 = window.getSelection();
                  t3.removeAllRanges(), t3.addRange(this.savedSelectionRange);
                }
              } }, { key: "clearSaved", value: function() {
                this.savedSelectionRange = null;
              } }, { key: "collapseToEnd", value: function() {
                var t3 = window.getSelection(), e2 = document.createRange();
                e2.selectNodeContents(t3.focusNode), e2.collapse(false), t3.removeAllRanges(), t3.addRange(e2);
              } }, { key: "findParentTag", value: function(t3, e2) {
                var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10, o3 = window.getSelection(), r3 = null;
                if (!o3 || !o3.anchorNode || !o3.focusNode)
                  return null;
                var i3 = [o3.anchorNode, o3.focusNode];
                return i3.forEach(function(o4) {
                  for (var i4 = n2; i4 > 0 && o4.parentNode && (o4.tagName !== t3 || (r3 = o4, e2 && o4.classList && !o4.classList.contains(e2) && (r3 = null), !r3)); )
                    o4 = o4.parentNode, i4--;
                }), r3;
              } }, { key: "expandToTag", value: function(t3) {
                var e2 = window.getSelection();
                e2.removeAllRanges();
                var n2 = document.createRange();
                n2.selectNodeContents(t3), e2.addRange(n2);
              } }], [{ key: "get", value: function() {
                return window.getSelection();
              } }, { key: "setCursor", value: function(t3) {
                var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n2 = document.createRange(), o3 = window.getSelection();
                if (s.default.isNativeInput(t3)) {
                  if (!s.default.canSetCaret(t3))
                    return;
                  return t3.focus(), t3.selectionStart = t3.selectionEnd = e2, t3.getBoundingClientRect();
                }
                return n2.setStart(t3, e2), n2.setEnd(t3, e2), o3.removeAllRanges(), o3.addRange(n2), n2.getBoundingClientRect();
              } }, { key: "CSS", get: function() {
                return { editorWrapper: "codex-editor", editorZone: "codex-editor__redactor" };
              } }, { key: "anchorNode", get: function() {
                var t3 = window.getSelection();
                return t3 ? t3.anchorNode : null;
              } }, { key: "anchorElement", get: function() {
                var t3 = window.getSelection();
                if (!t3)
                  return null;
                var e2 = t3.anchorNode;
                return e2 ? s.default.isElement(e2) ? e2 : e2.parentElement : null;
              } }, { key: "anchorOffset", get: function() {
                var t3 = window.getSelection();
                return t3 ? t3.anchorOffset : null;
              } }, { key: "isCollapsed", get: function() {
                var t3 = window.getSelection();
                return t3 ? t3.isCollapsed : null;
              } }, { key: "isAtEditor", get: function() {
                var e2 = t2.get(), n2 = e2.anchorNode || e2.focusNode;
                n2 && n2.nodeType === Node.TEXT_NODE && (n2 = n2.parentNode);
                var o3 = null;
                return n2 && (o3 = n2.closest(".".concat(t2.CSS.editorZone))), o3 && o3.nodeType === Node.ELEMENT_NODE;
              } }, { key: "isSelectionExists", get: function() {
                return !!t2.get().anchorNode;
              } }, { key: "range", get: function() {
                var t3 = window.getSelection();
                return t3 && t3.rangeCount ? t3.getRangeAt(0) : null;
              } }, { key: "rect", get: function() {
                var t3, e2 = document.selection, n2 = { x: 0, y: 0, width: 0, height: 0 };
                if (e2 && e2.type !== "Control")
                  return t3 = (e2 = e2).createRange(), n2.x = t3.boundingLeft, n2.y = t3.boundingTop, n2.width = t3.boundingWidth, n2.height = t3.boundingHeight, n2;
                if (!window.getSelection)
                  return a.log("Method window.getSelection is not supported", "warn"), n2;
                if ((e2 = window.getSelection()).rangeCount === null || isNaN(e2.rangeCount))
                  return a.log("Method SelectionUtils.rangeCount is not supported", "warn"), n2;
                if (e2.rangeCount === 0)
                  return n2;
                if ((t3 = e2.getRangeAt(0).cloneRange()).getBoundingClientRect && (n2 = t3.getBoundingClientRect()), n2.x === 0 && n2.y === 0) {
                  var o3 = document.createElement("span");
                  if (o3.getBoundingClientRect) {
                    o3.appendChild(document.createTextNode("\u200B")), t3.insertNode(o3), n2 = o3.getBoundingClientRect();
                    var r3 = o3.parentNode;
                    r3.removeChild(o3), r3.normalize();
                  }
                }
                return n2;
              } }, { key: "text", get: function() {
                return window.getSelection ? window.getSelection().toString() : "";
              } }]), t2;
            }();
            o2.default = u, u.displayName = "SelectionUtils", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e) {
          var n = {}.hasOwnProperty;
          t.exports = function(t2, e2) {
            return n.call(t2, e2);
          };
        }, function(t, e, n) {
          var o = n(19), r = n(43);
          t.exports = n(18) ? function(t2, e2, n2) {
            return o.f(t2, e2, r(1, n2));
          } : function(t2, e2, n2) {
            return t2[e2] = n2, t2;
          };
        }, function(t, e, n) {
          var o = n(62), r = n(38);
          t.exports = function(t2) {
            return o(r(t2));
          };
        }, function(t, e, n) {
          var o = n(357), r = n(358), i = n(141), a = n(359);
          t.exports = function(t2, e2) {
            return o(t2) || r(t2, e2) || i(t2, e2) || a();
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(11);
          t.exports = function(t2, e2) {
            return !!t2 && o(function() {
              e2 ? t2.call(null, function() {
              }, 1) : t2.call(null);
            });
          };
        }, function(t, e, n) {
          var o = n(32);
          t.exports = function(t2, e2, n2) {
            if (o(t2), e2 === void 0)
              return t2;
            switch (n2) {
              case 1:
                return function(n3) {
                  return t2.call(e2, n3);
                };
              case 2:
                return function(n3, o2) {
                  return t2.call(e2, n3, o2);
                };
              case 3:
                return function(n3, o2, r) {
                  return t2.call(e2, n3, o2, r);
                };
            }
            return function() {
              return t2.apply(e2, arguments);
            };
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if (typeof t2 != "function")
              throw TypeError(t2 + " is not a function!");
            return t2;
          };
        }, function(t, e) {
          var n = Math.ceil, o = Math.floor;
          t.exports = function(t2) {
            return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? o : n)(t2);
          };
        }, function(t, e, n) {
          var o = n(63), r = n(43), i = n(28), a = n(40), s = n(26), c = n(109), l = Object.getOwnPropertyDescriptor;
          e.f = n(18) ? l : function(t2, e2) {
            if (t2 = i(t2), e2 = a(e2, true), c)
              try {
                return l(t2, e2);
              } catch (t3) {
              }
            if (s(t2, e2))
              return r(!o.f.call(t2, e2), t2[e2]);
          };
        }, function(t, e, n) {
          var o = n(0), r = n(17), i = n(11);
          t.exports = function(t2, e2) {
            var n2 = (r.Object || {})[t2] || Object[t2], a = {};
            a[t2] = e2(n2), o(o.S + o.F * i(function() {
              n2(1);
            }), "Object", a);
          };
        }, function(t, e, n) {
          var o = n(31), r = n(62), i = n(20), a = n(16), s = n(125);
          t.exports = function(t2, e2) {
            var n2 = t2 == 1, c = t2 == 2, l = t2 == 3, u = t2 == 4, f = t2 == 6, d = t2 == 5 || f, p = e2 || s;
            return function(e3, s2, h) {
              for (var v, y, g = i(e3), b = r(g), m = o(s2, h, 3), k = a(b.length), x = 0, w = n2 ? p(e3, k) : c ? p(e3, 0) : void 0; k > x; x++)
                if ((d || x in b) && (y = m(v = b[x], x, g), t2)) {
                  if (n2)
                    w[x] = y;
                  else if (y)
                    switch (t2) {
                      case 3:
                        return true;
                      case 5:
                        return v;
                      case 6:
                        return x;
                      case 2:
                        w.push(v);
                    }
                  else if (u)
                    return false;
                }
              return f ? -1 : l || u ? u : w;
            };
          };
        }, function(t, e) {
          var n = {}.toString;
          t.exports = function(t2) {
            return n.call(t2).slice(8, -1);
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if (t2 == null)
              throw TypeError("Can't call method on  " + t2);
            return t2;
          };
        }, function(t, e, n) {
          "use strict";
          if (n(18)) {
            var o = n(45), r = n(10), i = n(11), a = n(0), s = n(78), c = n(106), l = n(31), u = n(57), f = n(43), d = n(27), p = n(58), h = n(33), v = n(16), y = n(136), g = n(47), b = n(40), m = n(26), k = n(64), x = n(13), w = n(20), S = n(98), T = n(48), E = n(50), C = n(49).f, B = n(100), _ = n(44), I = n(14), O = n(36), M = n(68), R = n(65), A = n(102), N = n(55), P = n(71), L = n(56), D = n(101), j = n(127), F = n(19), U = n(34), H = F.f, z = U.f, W = r.RangeError, Y = r.TypeError, V = r.Uint8Array, X = Array.prototype, G = c.ArrayBuffer, K = c.DataView, Z = O(0), q = O(2), J = O(3), $2 = O(4), Q = O(5), tt = O(6), et = M(true), nt = M(false), ot = A.values, rt = A.keys, it = A.entries, at = X.lastIndexOf, st = X.reduce, ct = X.reduceRight, lt = X.join, ut = X.sort, ft = X.slice, dt = X.toString, pt = X.toLocaleString, ht = I("iterator"), vt = I("toStringTag"), yt = _("typed_constructor"), gt = _("def_constructor"), bt = s.CONSTR, mt = s.TYPED, kt = s.VIEW, xt = O(1, function(t2, e2) {
              return Ct(R(t2, t2[gt]), e2);
            }), wt = i(function() {
              return new V(new Uint16Array([1]).buffer)[0] === 1;
            }), St = !!V && !!V.prototype.set && i(function() {
              new V(1).set({});
            }), Tt = function(t2, e2) {
              var n2 = h(t2);
              if (n2 < 0 || n2 % e2)
                throw W("Wrong offset!");
              return n2;
            }, Et = function(t2) {
              if (x(t2) && mt in t2)
                return t2;
              throw Y(t2 + " is not a typed array!");
            }, Ct = function(t2, e2) {
              if (!x(t2) || !(yt in t2))
                throw Y("It is not a typed array constructor!");
              return new t2(e2);
            }, Bt = function(t2, e2) {
              return _t(R(t2, t2[gt]), e2);
            }, _t = function(t2, e2) {
              for (var n2 = 0, o2 = e2.length, r2 = Ct(t2, o2); o2 > n2; )
                r2[n2] = e2[n2++];
              return r2;
            }, It = function(t2, e2, n2) {
              H(t2, e2, { get: function() {
                return this._d[n2];
              } });
            }, Ot = function(t2) {
              var e2, n2, o2, r2, i2, a2, s2 = w(t2), c2 = arguments.length, u2 = c2 > 1 ? arguments[1] : void 0, f2 = u2 !== void 0, d2 = B(s2);
              if (d2 != null && !S(d2)) {
                for (a2 = d2.call(s2), o2 = [], e2 = 0; !(i2 = a2.next()).done; e2++)
                  o2.push(i2.value);
                s2 = o2;
              }
              for (f2 && c2 > 2 && (u2 = l(u2, arguments[2], 2)), e2 = 0, n2 = v(s2.length), r2 = Ct(this, n2); n2 > e2; e2++)
                r2[e2] = f2 ? u2(s2[e2], e2) : s2[e2];
              return r2;
            }, Mt = function() {
              for (var t2 = 0, e2 = arguments.length, n2 = Ct(this, e2); e2 > t2; )
                n2[t2] = arguments[t2++];
              return n2;
            }, Rt = !!V && i(function() {
              pt.call(new V(1));
            }), At = function() {
              return pt.apply(Rt ? ft.call(Et(this)) : Et(this), arguments);
            }, Nt = { copyWithin: function(t2, e2) {
              return j.call(Et(this), t2, e2, arguments.length > 2 ? arguments[2] : void 0);
            }, every: function(t2) {
              return $2(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, fill: function(t2) {
              return D.apply(Et(this), arguments);
            }, filter: function(t2) {
              return Bt(this, q(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0));
            }, find: function(t2) {
              return Q(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, findIndex: function(t2) {
              return tt(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, forEach: function(t2) {
              Z(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, indexOf: function(t2) {
              return nt(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, includes: function(t2) {
              return et(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, join: function(t2) {
              return lt.apply(Et(this), arguments);
            }, lastIndexOf: function(t2) {
              return at.apply(Et(this), arguments);
            }, map: function(t2) {
              return xt(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, reduce: function(t2) {
              return st.apply(Et(this), arguments);
            }, reduceRight: function(t2) {
              return ct.apply(Et(this), arguments);
            }, reverse: function() {
              for (var t2, e2 = Et(this).length, n2 = Math.floor(e2 / 2), o2 = 0; o2 < n2; )
                t2 = this[o2], this[o2++] = this[--e2], this[e2] = t2;
              return this;
            }, some: function(t2) {
              return J(Et(this), t2, arguments.length > 1 ? arguments[1] : void 0);
            }, sort: function(t2) {
              return ut.call(Et(this), t2);
            }, subarray: function(t2, e2) {
              var n2 = Et(this), o2 = n2.length, r2 = g(t2, o2);
              return new (R(n2, n2[gt]))(n2.buffer, n2.byteOffset + r2 * n2.BYTES_PER_ELEMENT, v((e2 === void 0 ? o2 : g(e2, o2)) - r2));
            } }, Pt = function(t2, e2) {
              return Bt(this, ft.call(Et(this), t2, e2));
            }, Lt = function(t2) {
              Et(this);
              var e2 = Tt(arguments[1], 1), n2 = this.length, o2 = w(t2), r2 = v(o2.length), i2 = 0;
              if (r2 + e2 > n2)
                throw W("Wrong length!");
              for (; i2 < r2; )
                this[e2 + i2] = o2[i2++];
            }, Dt = { entries: function() {
              return it.call(Et(this));
            }, keys: function() {
              return rt.call(Et(this));
            }, values: function() {
              return ot.call(Et(this));
            } }, jt = function(t2, e2) {
              return x(t2) && t2[mt] && typeof e2 != "symbol" && e2 in t2 && String(+e2) == String(e2);
            }, Ft = function(t2, e2) {
              return jt(t2, e2 = b(e2, true)) ? f(2, t2[e2]) : z(t2, e2);
            }, Ut = function(t2, e2, n2) {
              return !(jt(t2, e2 = b(e2, true)) && x(n2) && m(n2, "value")) || m(n2, "get") || m(n2, "set") || n2.configurable || m(n2, "writable") && !n2.writable || m(n2, "enumerable") && !n2.enumerable ? H(t2, e2, n2) : (t2[e2] = n2.value, t2);
            };
            bt || (U.f = Ft, F.f = Ut), a(a.S + a.F * !bt, "Object", { getOwnPropertyDescriptor: Ft, defineProperty: Ut }), i(function() {
              dt.call({});
            }) && (dt = pt = function() {
              return lt.call(this);
            });
            var Ht = p({}, Nt);
            p(Ht, Dt), d(Ht, ht, Dt.values), p(Ht, { slice: Pt, set: Lt, constructor: function() {
            }, toString: dt, toLocaleString: At }), It(Ht, "buffer", "b"), It(Ht, "byteOffset", "o"), It(Ht, "byteLength", "l"), It(Ht, "length", "e"), H(Ht, vt, { get: function() {
              return this[mt];
            } }), t.exports = function(t2, e2, n2, c2) {
              var l2 = t2 + ((c2 = !!c2) ? "Clamped" : "") + "Array", f2 = "get" + t2, p2 = "set" + t2, h2 = r[l2], g2 = h2 || {}, b2 = h2 && E(h2), m2 = !h2 || !s.ABV, w2 = {}, S2 = h2 && h2.prototype, B2 = function(t3, n3) {
                H(t3, n3, { get: function() {
                  return function(t4, n4) {
                    var o2 = t4._d;
                    return o2.v[f2](n4 * e2 + o2.o, wt);
                  }(this, n3);
                }, set: function(t4) {
                  return function(t5, n4, o2) {
                    var r2 = t5._d;
                    c2 && (o2 = (o2 = Math.round(o2)) < 0 ? 0 : o2 > 255 ? 255 : 255 & o2), r2.v[p2](n4 * e2 + r2.o, o2, wt);
                  }(this, n3, t4);
                }, enumerable: true });
              };
              m2 ? (h2 = n2(function(t3, n3, o2, r2) {
                u(t3, h2, l2, "_d");
                var i2, a2, s2, c3, f3 = 0, p3 = 0;
                if (x(n3)) {
                  if (!(n3 instanceof G || (c3 = k(n3)) == "ArrayBuffer" || c3 == "SharedArrayBuffer"))
                    return mt in n3 ? _t(h2, n3) : Ot.call(h2, n3);
                  i2 = n3, p3 = Tt(o2, e2);
                  var g3 = n3.byteLength;
                  if (r2 === void 0) {
                    if (g3 % e2)
                      throw W("Wrong length!");
                    if ((a2 = g3 - p3) < 0)
                      throw W("Wrong length!");
                  } else if ((a2 = v(r2) * e2) + p3 > g3)
                    throw W("Wrong length!");
                  s2 = a2 / e2;
                } else
                  s2 = y(n3), i2 = new G(a2 = s2 * e2);
                for (d(t3, "_d", { b: i2, o: p3, l: a2, e: s2, v: new K(i2) }); f3 < s2; )
                  B2(t3, f3++);
              }), S2 = h2.prototype = T(Ht), d(S2, "constructor", h2)) : i(function() {
                h2(1);
              }) && i(function() {
                new h2(-1);
              }) && P(function(t3) {
                new h2(), new h2(null), new h2(1.5), new h2(t3);
              }, true) || (h2 = n2(function(t3, n3, o2, r2) {
                var i2;
                return u(t3, h2, l2), x(n3) ? n3 instanceof G || (i2 = k(n3)) == "ArrayBuffer" || i2 == "SharedArrayBuffer" ? r2 !== void 0 ? new g2(n3, Tt(o2, e2), r2) : o2 !== void 0 ? new g2(n3, Tt(o2, e2)) : new g2(n3) : mt in n3 ? _t(h2, n3) : Ot.call(h2, n3) : new g2(y(n3));
              }), Z(b2 !== Function.prototype ? C(g2).concat(C(b2)) : C(g2), function(t3) {
                t3 in h2 || d(h2, t3, g2[t3]);
              }), h2.prototype = S2, o || (S2.constructor = h2));
              var _2 = S2[ht], I2 = !!_2 && (_2.name == "values" || _2.name == null), O2 = Dt.values;
              d(h2, yt, true), d(S2, mt, l2), d(S2, kt, true), d(S2, gt, h2), (c2 ? new h2(1)[vt] == l2 : vt in S2) || H(S2, vt, { get: function() {
                return l2;
              } }), w2[l2] = h2, a(a.G + a.W + a.F * (h2 != g2), w2), a(a.S, l2, { BYTES_PER_ELEMENT: e2 }), a(a.S + a.F * i(function() {
                g2.of.call(h2, 1);
              }), l2, { from: Ot, of: Mt }), "BYTES_PER_ELEMENT" in S2 || d(S2, "BYTES_PER_ELEMENT", e2), a(a.P, l2, Nt), L(l2), a(a.P + a.F * St, l2, { set: Lt }), a(a.P + a.F * !I2, l2, Dt), o || S2.toString == dt || (S2.toString = dt), a(a.P + a.F * i(function() {
                new h2(1).slice();
              }), l2, { slice: Pt }), a(a.P + a.F * (i(function() {
                return [1, 2].toLocaleString() != new h2([1, 2]).toLocaleString();
              }) || !i(function() {
                S2.toLocaleString.call([1, 2]);
              })), l2, { toLocaleString: At }), N[l2] = I2 ? _2 : O2, o || I2 || d(S2, ht, O2);
            };
          } else
            t.exports = function() {
            };
        }, function(t, e, n) {
          var o = n(13);
          t.exports = function(t2, e2) {
            if (!o(t2))
              return t2;
            var n2, r;
            if (e2 && typeof (n2 = t2.toString) == "function" && !o(r = n2.call(t2)))
              return r;
            if (typeof (n2 = t2.valueOf) == "function" && !o(r = n2.call(t2)))
              return r;
            if (!e2 && typeof (n2 = t2.toString) == "function" && !o(r = n2.call(t2)))
              return r;
            throw TypeError("Can't convert object to primitive value");
          };
        }, function(t, e, n) {
          var o = n(44)("meta"), r = n(13), i = n(26), a = n(19).f, s = 0, c = Object.isExtensible || function() {
            return true;
          }, l = !n(11)(function() {
            return c(Object.preventExtensions({}));
          }), u = function(t2) {
            a(t2, o, { value: { i: "O" + ++s, w: {} } });
          }, f = t.exports = { KEY: o, NEED: false, fastKey: function(t2, e2) {
            if (!r(t2))
              return typeof t2 == "symbol" ? t2 : (typeof t2 == "string" ? "S" : "P") + t2;
            if (!i(t2, o)) {
              if (!c(t2))
                return "F";
              if (!e2)
                return "E";
              u(t2);
            }
            return t2[o].i;
          }, getWeak: function(t2, e2) {
            if (!i(t2, o)) {
              if (!c(t2))
                return true;
              if (!e2)
                return false;
              u(t2);
            }
            return t2[o].w;
          }, onFreeze: function(t2) {
            return l && f.NEED && c(t2) && !i(t2, o) && u(t2), t2;
          } };
        }, function(t, e, n) {
          var o = n(364), r = n(365), i = n(141), a = n(366);
          t.exports = function(t2) {
            return o(t2) || r(t2) || i(t2) || a();
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
          };
        }, function(t, e) {
          var n = 0, o = Math.random();
          t.exports = function(t2) {
            return "Symbol(".concat(t2 === void 0 ? "" : t2, ")_", (++n + o).toString(36));
          };
        }, function(t, e) {
          t.exports = false;
        }, function(t, e, n) {
          var o = n(111), r = n(85);
          t.exports = Object.keys || function(t2) {
            return o(t2, r);
          };
        }, function(t, e, n) {
          var o = n(33), r = Math.max, i = Math.min;
          t.exports = function(t2, e2) {
            return (t2 = o(t2)) < 0 ? r(t2 + e2, 0) : i(t2, e2);
          };
        }, function(t, e, n) {
          var o = n(12), r = n(112), i = n(85), a = n(84)("IE_PROTO"), s = function() {
          }, c = function() {
            var t2, e2 = n(82)("iframe"), o2 = i.length;
            for (e2.style.display = "none", n(86).appendChild(e2), e2.src = "javascript:", (t2 = e2.contentWindow.document).open(), t2.write("<script>document.F=Object<\/script>"), t2.close(), c = t2.F; o2--; )
              delete c.prototype[i[o2]];
            return c();
          };
          t.exports = Object.create || function(t2, e2) {
            var n2;
            return t2 !== null ? (s.prototype = o(t2), n2 = new s(), s.prototype = null, n2[a] = t2) : n2 = c(), e2 === void 0 ? n2 : r(n2, e2);
          };
        }, function(t, e, n) {
          var o = n(111), r = n(85).concat("length", "prototype");
          e.f = Object.getOwnPropertyNames || function(t2) {
            return o(t2, r);
          };
        }, function(t, e, n) {
          var o = n(26), r = n(20), i = n(84)("IE_PROTO"), a = Object.prototype;
          t.exports = Object.getPrototypeOf || function(t2) {
            return t2 = r(t2), o(t2, i) ? t2[i] : typeof t2.constructor == "function" && t2 instanceof t2.constructor ? t2.constructor.prototype : t2 instanceof Object ? a : null;
          };
        }, function(t, e, n) {
          var o = n(14)("unscopables"), r = Array.prototype;
          r[o] == null && n(27)(r, o, {}), t.exports = function(t2) {
            r[o][t2] = true;
          };
        }, function(t, e, n) {
          var o = n(13);
          t.exports = function(t2, e2) {
            if (!o(t2) || t2._t !== e2)
              throw TypeError("Incompatible receiver, " + e2 + " required!");
            return t2;
          };
        }, function(t, e, n) {
          var o = n(19).f, r = n(26), i = n(14)("toStringTag");
          t.exports = function(t2, e2, n2) {
            t2 && !r(t2 = n2 ? t2 : t2.prototype, i) && o(t2, i, { configurable: true, value: e2 });
          };
        }, function(t, e, n) {
          var o = n(0), r = n(38), i = n(11), a = n(88), s = "[" + a + "]", c = RegExp("^" + s + s + "*"), l = RegExp(s + s + "*$"), u = function(t2, e2, n2) {
            var r2 = {}, s2 = i(function() {
              return !!a[t2]() || "\u200B\x85"[t2]() != "\u200B\x85";
            }), c2 = r2[t2] = s2 ? e2(f) : a[t2];
            n2 && (r2[n2] = c2), o(o.P + o.F * s2, "String", r2);
          }, f = u.trim = function(t2, e2) {
            return t2 = String(r(t2)), 1 & e2 && (t2 = t2.replace(c, "")), 2 & e2 && (t2 = t2.replace(l, "")), t2;
          };
          t.exports = u;
        }, function(t, e) {
          t.exports = {};
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(19), i = n(18), a = n(14)("species");
          t.exports = function(t2) {
            var e2 = o[t2];
            i && e2 && !e2[a] && r.f(e2, a, { configurable: true, get: function() {
              return this;
            } });
          };
        }, function(t, e) {
          t.exports = function(t2, e2, n, o) {
            if (!(t2 instanceof e2) || o !== void 0 && o in t2)
              throw TypeError(n + ": incorrect invocation!");
            return t2;
          };
        }, function(t, e, n) {
          var o = n(23);
          t.exports = function(t2, e2, n2) {
            for (var r in e2)
              o(t2, r, e2[r], n2);
            return t2;
          };
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(144)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var c = function() {
              function t2() {
                (0, r2.default)(this, t2);
              }
              return (0, i2.default)(t2, null, [{ key: "ui", value: function(e2, n2) {
                return t2._t(e2, n2);
              } }, { key: "t", value: function(e2, n2) {
                return t2._t(e2, n2);
              } }, { key: "setDictionary", value: function(e2) {
                t2.currentDictionary = e2;
              } }, { key: "_t", value: function(e2, n2) {
                var o3 = t2.getNamespace(e2);
                return o3 && o3[n2] ? o3[n2] : n2;
              } }, { key: "getNamespace", value: function(e2) {
                return e2.split(".").reduce(function(t3, e3) {
                  return t3 && Object.keys(t3).length ? t3[e3] : {};
                }, t2.currentDictionary);
              } }]), t2;
            }();
            o2.default = c, c.displayName = "I18n", c.currentDictionary = a.default, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(375), n(8)], (i = typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var c = n(9), l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = l(a), s = c(s);
            var u = function() {
              function t2(e2) {
                var n2 = this;
                (0, r2.default)(this, t2), this.iterator = null, this.activated = false, this.allowArrows = true, this.onKeyDown = function(e3) {
                  if (n2.isEventReadyForHandling(e3))
                    switch (t2.usedKeys.includes(e3.keyCode) && e3.preventDefault(), e3.keyCode) {
                      case s.keyCodes.TAB:
                        n2.handleTabPress(e3);
                        break;
                      case s.keyCodes.LEFT:
                      case s.keyCodes.UP:
                        n2.flipLeft();
                        break;
                      case s.keyCodes.RIGHT:
                      case s.keyCodes.DOWN:
                        n2.flipRight();
                        break;
                      case s.keyCodes.ENTER:
                        n2.handleEnterPress(e3);
                    }
                }, this.allowArrows = !s.isBoolean(e2.allowArrows) || e2.allowArrows, this.iterator = new a.default(e2.items, e2.focusedItemClass), this.activateCallback = e2.activateCallback;
              }
              return (0, i2.default)(t2, [{ key: "activate", value: function(t3) {
                this.activated = true, t3 && this.iterator.setItems(t3), document.addEventListener("keydown", this.onKeyDown);
              } }, { key: "deactivate", value: function() {
                this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
              } }, { key: "focusFirst", value: function() {
                this.dropCursor(), this.flipRight();
              } }, { key: "flipLeft", value: function() {
                this.iterator.previous();
              } }, { key: "flipRight", value: function() {
                this.iterator.next();
              } }, { key: "dropCursor", value: function() {
                this.iterator.dropCursor();
              } }, { key: "isEventReadyForHandling", value: function(t3) {
                var e2 = [s.keyCodes.TAB, s.keyCodes.ENTER], n2 = this.iterator.currentItem == document.activeElement;
                return this.allowArrows && !n2 && e2.push(s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.UP, s.keyCodes.DOWN), this.activated && e2.indexOf(t3.keyCode) !== -1;
              } }, { key: "handleTabPress", value: function(t3) {
                switch (t3.shiftKey ? a.default.directions.LEFT : a.default.directions.RIGHT) {
                  case a.default.directions.RIGHT:
                    this.flipRight();
                    break;
                  case a.default.directions.LEFT:
                    this.flipLeft();
                }
              } }, { key: "handleEnterPress", value: function(t3) {
                this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), s.isFunction(this.activateCallback) && this.activateCallback(this.iterator.currentItem), t3.preventDefault(), t3.stopPropagation());
              } }, { key: "currentItem", get: function() {
                return this.iterator.currentItem;
              } }], [{ key: "usedKeys", get: function() {
                return [s.keyCodes.TAB, s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.ENTER, s.keyCodes.UP, s.keyCodes.DOWN];
              } }]), t2;
            }();
            o2.default = u, u.displayName = "Flipper", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(29), n(42), n(21), n(22), n(2), n(3), n(15), n(8), n(148), n(25)], (i = typeof (o = function(t2, e2, o2, r2, i2, a, s, c, l, u, f) {
            "use strict";
            var d, p = n(9), h = n(1);
            Object.defineProperty(t2, "__esModule", { value: true }), t2.default = t2.BlockToolAPI = void 0, e2 = h(e2), o2 = h(o2), r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), c = h(c), l = p(l), u = h(u), f = h(f), t2.BlockToolAPI = d, function(t3) {
              t3.APPEND_CALLBACK = "appendCallback", t3.RENDERED = "rendered", t3.MOVED = "moved", t3.UPDATED = "updated", t3.REMOVED = "removed", t3.ON_PASTE = "onPaste";
            }(d || (t2.BlockToolAPI = d = {}));
            var v = function() {
              function t3(e3) {
                var n3 = this, o3 = e3.data, r3 = e3.tool, i3 = e3.api, s2 = e3.readOnly, c2 = e3.tunes, f2 = e3.tunesData;
                (0, a.default)(this, t3), this.cachedInputs = [], this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.modificationDebounceTimer = 450, this.didMutated = l.debounce(function() {
                  n3.cachedInputs = [], n3.updateCurrentInput(), n3.call(d.UPDATED);
                }, this.modificationDebounceTimer), this.handleFocus = function() {
                  n3.cachedInputs = [], n3.updateCurrentInput();
                }, this.name = r3.name, this.settings = r3.settings, this.config = r3.settings.config || {}, this.api = i3, this.blockAPI = new u.default(this), this.mutationObserver = new MutationObserver(this.didMutated), this.tool = r3, this.toolInstance = r3.create(o3, this.blockAPI, s2), this.tunes = c2, this.composeTunes(f2), this.holder = this.compose();
              }
              var n2, p2, h2;
              return (0, s.default)(t3, [{ key: "call", value: function(t4, e3) {
                if (this.toolInstance[t4] && this.toolInstance[t4] instanceof Function) {
                  t4 === d.APPEND_CALLBACK && l.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
                  try {
                    this.toolInstance[t4].call(this.toolInstance, e3);
                  } catch (e4) {
                    l.log("Error during '".concat(t4, "' call: ").concat(e4.message), "error");
                  }
                }
              } }, { key: "mergeWith", value: (h2 = (0, i2.default)(r2.default.mark(function t4(e3) {
                return r2.default.wrap(function(t5) {
                  for (; ; )
                    switch (t5.prev = t5.next) {
                      case 0:
                        return t5.next = 2, this.toolInstance.merge(e3);
                      case 2:
                      case "end":
                        return t5.stop();
                    }
                }, t4, this);
              })), function(t4) {
                return h2.apply(this, arguments);
              }) }, { key: "save", value: (p2 = (0, i2.default)(r2.default.mark(function t4() {
                var n3, i3, a2, s2, c2 = this;
                return r2.default.wrap(function(t5) {
                  for (; ; )
                    switch (t5.prev = t5.next) {
                      case 0:
                        return t5.next = 2, this.toolInstance.save(this.pluginsContent);
                      case 2:
                        return n3 = t5.sent, i3 = this.unavailableTunesData, [].concat((0, o2.default)(this.tunesInstances.entries()), (0, o2.default)(this.defaultTunesInstances.entries())).forEach(function(t6) {
                          var n4 = (0, e2.default)(t6, 2), o3 = n4[0], r3 = n4[1];
                          if (l.isFunction(r3.save))
                            try {
                              i3[o3] = r3.save();
                            } catch (t7) {
                              l.log("Tune ".concat(r3.constructor.name, " save method throws an Error %o"), "warn", t7);
                            }
                        }), a2 = window.performance.now(), t5.abrupt("return", Promise.resolve(n3).then(function(t6) {
                          return s2 = window.performance.now(), { tool: c2.name, data: t6, tunes: i3, time: s2 - a2 };
                        }).catch(function(t6) {
                          l.log("Saving proccess for ".concat(c2.name, " tool failed due to the ").concat(t6), "log", "red");
                        }));
                      case 7:
                      case "end":
                        return t5.stop();
                    }
                }, t4, this);
              })), function() {
                return p2.apply(this, arguments);
              }) }, { key: "validate", value: (n2 = (0, i2.default)(r2.default.mark(function t4(e3) {
                var n3;
                return r2.default.wrap(function(t5) {
                  for (; ; )
                    switch (t5.prev = t5.next) {
                      case 0:
                        if (n3 = true, !(this.toolInstance.validate instanceof Function)) {
                          t5.next = 5;
                          break;
                        }
                        return t5.next = 4, this.toolInstance.validate(e3);
                      case 4:
                        n3 = t5.sent;
                      case 5:
                        return t5.abrupt("return", n3);
                      case 6:
                      case "end":
                        return t5.stop();
                    }
                }, t4, this);
              })), function(t4) {
                return n2.apply(this, arguments);
              }) }, { key: "renderTunes", value: function() {
                var t4 = document.createDocumentFragment(), e3 = document.createDocumentFragment();
                return this.tunesInstances.forEach(function(e4) {
                  c.default.append(t4, e4.render());
                }), this.defaultTunesInstances.forEach(function(t5) {
                  c.default.append(e3, t5.render());
                }), [t4, e3];
              } }, { key: "updateCurrentInput", value: function() {
                this.currentInput = c.default.isNativeInput(document.activeElement) || !f.default.anchorNode ? document.activeElement : f.default.anchorNode;
              } }, { key: "willSelect", value: function() {
                this.mutationObserver.observe(this.holder.firstElementChild, { childList: true, subtree: true, characterData: true, attributes: true }), this.addInputEvents();
              } }, { key: "willUnselect", value: function() {
                this.mutationObserver.disconnect(), this.removeInputEvents();
              } }, { key: "destroy", value: function() {
                l.isFunction(this.toolInstance.destroy) && this.toolInstance.destroy();
              } }, { key: "renderSettings", value: function() {
                if (l.isFunction(this.toolInstance.renderSettings))
                  return this.toolInstance.renderSettings();
              } }, { key: "compose", value: function() {
                var e3 = c.default.make("div", t3.CSS.wrapper), n3 = c.default.make("div", t3.CSS.content), r3 = this.toolInstance.render();
                n3.appendChild(r3);
                var i3 = n3;
                return [].concat((0, o2.default)(this.tunesInstances.values()), (0, o2.default)(this.defaultTunesInstances.values())).forEach(function(t4) {
                  if (l.isFunction(t4.wrap))
                    try {
                      i3 = t4.wrap(i3);
                    } catch (e4) {
                      l.log("Tune ".concat(t4.constructor.name, " wrap method throws an Error %o"), "warn", e4);
                    }
                }), e3.appendChild(i3), e3;
              } }, { key: "composeTunes", value: function(t4) {
                var n3 = this;
                Array.from(this.tunes.values()).forEach(function(e3) {
                  (e3.isInternal ? n3.defaultTunesInstances : n3.tunesInstances).set(e3.name, e3.create(t4[e3.name], n3.blockAPI));
                }), Object.entries(t4).forEach(function(t5) {
                  var o3 = (0, e2.default)(t5, 2), r3 = o3[0], i3 = o3[1];
                  n3.tunesInstances.has(r3) || (n3.unavailableTunesData[r3] = i3);
                });
              } }, { key: "addInputEvents", value: function() {
                var t4 = this;
                this.inputs.forEach(function(e3) {
                  e3.addEventListener("focus", t4.handleFocus);
                });
              } }, { key: "removeInputEvents", value: function() {
                var t4 = this;
                this.inputs.forEach(function(e3) {
                  e3.removeEventListener("focus", t4.handleFocus);
                });
              } }, { key: "inputs", get: function() {
                if (this.cachedInputs.length !== 0)
                  return this.cachedInputs;
                var t4 = c.default.findAllInputs(this.holder);
                return this.inputIndex > t4.length - 1 && (this.inputIndex = t4.length - 1), this.cachedInputs = t4, t4;
              } }, { key: "currentInput", get: function() {
                return this.inputs[this.inputIndex];
              }, set: function(t4) {
                var e3 = this.inputs.findIndex(function(e4) {
                  return e4 === t4 || e4.contains(t4);
                });
                e3 !== -1 && (this.inputIndex = e3);
              } }, { key: "firstInput", get: function() {
                return this.inputs[0];
              } }, { key: "lastInput", get: function() {
                var t4 = this.inputs;
                return t4[t4.length - 1];
              } }, { key: "nextInput", get: function() {
                return this.inputs[this.inputIndex + 1];
              } }, { key: "previousInput", get: function() {
                return this.inputs[this.inputIndex - 1];
              } }, { key: "data", get: function() {
                return this.save().then(function(t4) {
                  return t4 && !l.isEmpty(t4.data) ? t4.data : {};
                });
              } }, { key: "sanitize", get: function() {
                return this.tool.sanitizeConfig;
              } }, { key: "mergeable", get: function() {
                return l.isFunction(this.toolInstance.merge);
              } }, { key: "isEmpty", get: function() {
                var t4 = c.default.isEmpty(this.pluginsContent), e3 = !this.hasMedia;
                return t4 && e3;
              } }, { key: "hasMedia", get: function() {
                return !!this.holder.querySelector(["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"].join(","));
              } }, { key: "focused", set: function(e3) {
                this.holder.classList.toggle(t3.CSS.focused, e3);
              }, get: function() {
                return this.holder.classList.contains(t3.CSS.focused);
              } }, { key: "selected", set: function(e3) {
                e3 ? this.holder.classList.add(t3.CSS.selected) : this.holder.classList.remove(t3.CSS.selected);
              }, get: function() {
                return this.holder.classList.contains(t3.CSS.selected);
              } }, { key: "stretched", set: function(e3) {
                this.holder.classList.toggle(t3.CSS.wrapperStretched, e3);
              }, get: function() {
                return this.holder.classList.contains(t3.CSS.wrapperStretched);
              } }, { key: "dropTarget", set: function(e3) {
                this.holder.classList.toggle(t3.CSS.dropTarget, e3);
              } }, { key: "pluginsContent", get: function() {
                var e3 = this.holder.querySelector(".".concat(t3.CSS.content));
                if (e3 && e3.childNodes.length)
                  for (var n3 = e3.childNodes.length - 1; n3 >= 0; n3--) {
                    var o3 = e3.childNodes[n3];
                    if (!c.default.isExtensionNode(o3))
                      return o3;
                  }
                return null;
              } }], [{ key: "CSS", get: function() {
                return { wrapper: "ce-block", wrapperStretched: "ce-block--stretched", content: "ce-block__content", focused: "ce-block--focused", selected: "ce-block--selected", dropTarget: "ce-block--drop-target" };
              } }]), t3;
            }();
            t2.default = v, v.displayName = "Block";
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o = n(37);
          t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t2) {
            return o(t2) == "String" ? t2.split("") : Object(t2);
          };
        }, function(t, e) {
          e.f = {}.propertyIsEnumerable;
        }, function(t, e, n) {
          var o = n(37), r = n(14)("toStringTag"), i = o(function() {
            return arguments;
          }()) == "Arguments";
          t.exports = function(t2) {
            var e2, n2, a;
            return t2 === void 0 ? "Undefined" : t2 === null ? "Null" : typeof (n2 = function(t3, e3) {
              try {
                return t3[e3];
              } catch (t4) {
              }
            }(e2 = Object(t2), r)) == "string" ? n2 : i ? o(e2) : (a = o(e2)) == "Object" && typeof e2.callee == "function" ? "Arguments" : a;
          };
        }, function(t, e, n) {
          var o = n(12), r = n(32), i = n(14)("species");
          t.exports = function(t2, e2) {
            var n2, a = o(t2).constructor;
            return a === void 0 || (n2 = o(a)[i]) == null ? e2 : r(n2);
          };
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(8)], (i = typeof (o = function(t2, e2, o2, r2) {
            "use strict";
            var i2, a, s, c, l, u, f = n(9), d = n(1);
            Object.defineProperty(t2, "__esModule", { value: true }), t2.default = t2.InternalTuneSettings = t2.InternalInlineToolSettings = t2.InternalBlockToolSettings = t2.CommonInternalSettings = t2.UserSettings = t2.ToolType = void 0, e2 = d(e2), o2 = d(o2), r2 = f(r2), t2.ToolType = i2, function(t3) {
              t3[t3.Block = 0] = "Block", t3[t3.Inline = 1] = "Inline", t3[t3.Tune = 2] = "Tune";
            }(i2 || (t2.ToolType = i2 = {})), t2.UserSettings = a, function(t3) {
              t3.Shortcut = "shortcut", t3.Toolbox = "toolbox", t3.EnabledInlineTools = "inlineToolbar", t3.EnabledBlockTunes = "tunes", t3.Config = "config";
            }(a || (t2.UserSettings = a = {})), t2.CommonInternalSettings = s, function(t3) {
              t3.Shortcut = "shortcut", t3.SanitizeConfig = "sanitize";
            }(s || (t2.CommonInternalSettings = s = {})), t2.InternalBlockToolSettings = c, function(t3) {
              t3.IsEnabledLineBreaks = "enableLineBreaks", t3.Toolbox = "toolbox", t3.ConversionConfig = "conversionConfig", t3.IsReadOnlySupported = "isReadOnlySupported", t3.PasteConfig = "pasteConfig";
            }(c || (t2.InternalBlockToolSettings = c = {})), t2.InternalInlineToolSettings = l, function(t3) {
              t3.IsInline = "isInline", t3.Title = "title";
            }(l || (t2.InternalInlineToolSettings = l = {})), t2.InternalTuneSettings = u, function(t3) {
              t3.IsTune = "isTune";
            }(u || (t2.InternalTuneSettings = u = {}));
            var p = function() {
              function t3(n2) {
                var o3 = n2.name, r3 = n2.constructable, i3 = n2.config, a2 = n2.api, s2 = n2.isDefault, c2 = n2.isInternal, l2 = c2 !== void 0 && c2, u2 = n2.defaultPlaceholder;
                (0, e2.default)(this, t3), this.api = a2, this.name = o3, this.constructable = r3, this.config = i3, this.isDefault = s2, this.isInternal = l2, this.defaultPlaceholder = u2;
              }
              return (0, o2.default)(t3, [{ key: "reset", value: function() {
                if (r2.isFunction(this.constructable.reset))
                  return this.constructable.reset();
              } }, { key: "prepare", value: function() {
                if (r2.isFunction(this.constructable.prepare))
                  return this.constructable.prepare({ toolName: this.name, config: this.settings });
              } }, { key: "isInline", value: function() {
                return this.type === i2.Inline;
              } }, { key: "isBlock", value: function() {
                return this.type === i2.Block;
              } }, { key: "isTune", value: function() {
                return this.type === i2.Tune;
              } }, { key: "settings", get: function() {
                var t4 = this.config[a.Config] || {};
                return this.isDefault && !("placeholder" in t4) && this.defaultPlaceholder && (t4.placeholder = this.defaultPlaceholder), t4;
              } }, { key: "shortcut", get: function() {
                var t4 = this.constructable[s.Shortcut];
                return this.config[a.Shortcut] || t4;
              } }, { key: "sanitizeConfig", get: function() {
                return this.constructable[s.SanitizeConfig];
              } }]), t3;
            }();
            t2.default = p, p.displayName = "BaseTool";
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o = n(17), r = n(10), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
          (t.exports = function(t2, e2) {
            return i[t2] || (i[t2] = e2 !== void 0 ? e2 : {});
          })("versions", []).push({ version: o.version, mode: n(45) ? "pure" : "global", copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)" });
        }, function(t, e, n) {
          var o = n(28), r = n(16), i = n(47);
          t.exports = function(t2) {
            return function(e2, n2, a) {
              var s, c = o(e2), l = r(c.length), u = i(a, l);
              if (t2 && n2 != n2) {
                for (; l > u; )
                  if ((s = c[u++]) != s)
                    return true;
              } else
                for (; l > u; u++)
                  if ((t2 || u in c) && c[u] === n2)
                    return t2 || u || 0;
              return !t2 && -1;
            };
          };
        }, function(t, e) {
          e.f = Object.getOwnPropertySymbols;
        }, function(t, e, n) {
          var o = n(37);
          t.exports = Array.isArray || function(t2) {
            return o(t2) == "Array";
          };
        }, function(t, e, n) {
          var o = n(14)("iterator"), r = false;
          try {
            var i = [7][o]();
            i.return = function() {
              r = true;
            }, Array.from(i, function() {
              throw 2;
            });
          } catch (t2) {
          }
          t.exports = function(t2, e2) {
            if (!e2 && !r)
              return false;
            var n2 = false;
            try {
              var i2 = [7], a = i2[o]();
              a.next = function() {
                return { done: n2 = true };
              }, i2[o] = function() {
                return a;
              }, t2(i2);
            } catch (t3) {
            }
            return n2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(12);
          t.exports = function() {
            var t2 = o(this), e2 = "";
            return t2.global && (e2 += "g"), t2.ignoreCase && (e2 += "i"), t2.multiline && (e2 += "m"), t2.unicode && (e2 += "u"), t2.sticky && (e2 += "y"), e2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(64), r = RegExp.prototype.exec;
          t.exports = function(t2, e2) {
            var n2 = t2.exec;
            if (typeof n2 == "function") {
              var i = n2.call(t2, e2);
              if (typeof i != "object")
                throw new TypeError("RegExp exec method returned something other than an Object or null");
              return i;
            }
            if (o(t2) !== "RegExp")
              throw new TypeError("RegExp#exec called on incompatible receiver");
            return r.call(t2, e2);
          };
        }, function(t, e, n) {
          "use strict";
          n(129);
          var o = n(23), r = n(27), i = n(11), a = n(38), s = n(14), c = n(103), l = s("species"), u = !i(function() {
            var t2 = /./;
            return t2.exec = function() {
              var t3 = [];
              return t3.groups = { a: "7" }, t3;
            }, "".replace(t2, "$<a>") !== "7";
          }), f = function() {
            var t2 = /(?:)/, e2 = t2.exec;
            t2.exec = function() {
              return e2.apply(this, arguments);
            };
            var n2 = "ab".split(t2);
            return n2.length === 2 && n2[0] === "a" && n2[1] === "b";
          }();
          t.exports = function(t2, e2, n2) {
            var d = s(t2), p = !i(function() {
              var e3 = {};
              return e3[d] = function() {
                return 7;
              }, ""[t2](e3) != 7;
            }), h = p ? !i(function() {
              var e3 = false, n3 = /a/;
              return n3.exec = function() {
                return e3 = true, null;
              }, t2 === "split" && (n3.constructor = {}, n3.constructor[l] = function() {
                return n3;
              }), n3[d](""), !e3;
            }) : void 0;
            if (!p || !h || t2 === "replace" && !u || t2 === "split" && !f) {
              var v = /./[d], y = n2(a, d, ""[t2], function(t3, e3, n3, o2, r2) {
                return e3.exec === c ? p && !r2 ? { done: true, value: v.call(e3, n3, o2) } : { done: true, value: t3.call(n3, e3, o2) } : { done: false };
              }), g = y[0], b = y[1];
              o(String.prototype, t2, g), r(RegExp.prototype, d, e2 == 2 ? function(t3, e3) {
                return b.call(t3, this, e3);
              } : function(t3) {
                return b.call(t3, this);
              });
            }
          };
        }, function(t, e, n) {
          var o = n(31), r = n(124), i = n(98), a = n(12), s = n(16), c = n(100), l = {}, u = {};
          (e = t.exports = function(t2, e2, n2, f, d) {
            var p, h, v, y, g = d ? function() {
              return t2;
            } : c(t2), b = o(n2, f, e2 ? 2 : 1), m = 0;
            if (typeof g != "function")
              throw TypeError(t2 + " is not iterable!");
            if (i(g)) {
              for (p = s(t2.length); p > m; m++)
                if ((y = e2 ? b(a(h = t2[m])[0], h[1]) : b(t2[m])) === l || y === u)
                  return y;
            } else
              for (v = g.call(t2); !(h = v.next()).done; )
                if ((y = r(v, b, h.value, e2)) === l || y === u)
                  return y;
          }).BREAK = l, e.RETURN = u;
        }, function(t, e, n) {
          var o = n(10).navigator;
          t.exports = o && o.userAgent || "";
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(0), i = n(23), a = n(58), s = n(41), c = n(75), l = n(57), u = n(13), f = n(11), d = n(71), p = n(53), h = n(89);
          t.exports = function(t2, e2, n2, v, y, g) {
            var b = o[t2], m = b, k = y ? "set" : "add", x = m && m.prototype, w = {}, S = function(t3) {
              var e3 = x[t3];
              i(x, t3, t3 == "delete" || t3 == "has" ? function(t4) {
                return !(g && !u(t4)) && e3.call(this, t4 === 0 ? 0 : t4);
              } : t3 == "get" ? function(t4) {
                return g && !u(t4) ? void 0 : e3.call(this, t4 === 0 ? 0 : t4);
              } : t3 == "add" ? function(t4) {
                return e3.call(this, t4 === 0 ? 0 : t4), this;
              } : function(t4, n3) {
                return e3.call(this, t4 === 0 ? 0 : t4, n3), this;
              });
            };
            if (typeof m == "function" && (g || x.forEach && !f(function() {
              new m().entries().next();
            }))) {
              var T = new m(), E = T[k](g ? {} : -0, 1) != T, C = f(function() {
                T.has(1);
              }), B = d(function(t3) {
                new m(t3);
              }), _ = !g && f(function() {
                for (var t3 = new m(), e3 = 5; e3--; )
                  t3[k](e3, e3);
                return !t3.has(-0);
              });
              B || ((m = e2(function(e3, n3) {
                l(e3, m, t2);
                var o2 = h(new b(), e3, m);
                return n3 != null && c(n3, y, o2[k], o2), o2;
              })).prototype = x, x.constructor = m), (C || _) && (S("delete"), S("has"), y && S("get")), (_ || E) && S(k), g && x.clear && delete x.clear;
            } else
              m = v.getConstructor(e2, t2, y, k), a(m.prototype, n2), s.NEED = true;
            return p(m, t2), w[t2] = m, r(r.G + r.W + r.F * (m != b), w), g || v.setStrong(m, t2, y), m;
          };
        }, function(t, e, n) {
          for (var o, r = n(10), i = n(27), a = n(44), s = a("typed_array"), c = a("view"), l = !(!r.ArrayBuffer || !r.DataView), u = l, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9; )
            (o = r[d[f++]]) ? (i(o.prototype, s, true), i(o.prototype, c, true)) : u = false;
          t.exports = { ABV: l, CONSTR: u, TYPED: s, VIEW: c };
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "getMethodsForTool", value: function(t3) {
                return Object.assign(this.methods, { i18n: this.Editor.I18nAPI.getMethodsForTool(t3) });
              } }, { key: "methods", get: function() {
                return { blocks: this.Editor.BlocksAPI.methods, caret: this.Editor.CaretAPI.methods, events: this.Editor.EventsAPI.methods, listeners: this.Editor.ListenersAPI.methods, notifier: this.Editor.NotifierAPI.methods, sanitizer: this.Editor.SanitizerAPI.methods, saver: this.Editor.SaverAPI.methods, selection: this.Editor.SelectionAPI.methods, styles: this.Editor.StylesAPI.classes, toolbar: this.Editor.ToolbarAPI.methods, inlineToolbar: this.Editor.InlineToolbarAPI.methods, tooltip: this.Editor.TooltipAPI.methods, i18n: this.Editor.I18nAPI.methods, readOnly: this.Editor.ReadOnlyAPI.methods };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "API", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(15), n(8), n(59), n(81)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p) {
            "use strict";
            var h = n(9), v = n(1);
            function y() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), a = v(a), s = v(s), c = v(c), l = v(l), u = v(u), f = h(f), d = v(d);
            var g = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (y()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "toggleReadOnly", value: function(t3) {
                t3 ? (this.destroy(), this.Editor.Toolbox.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
              } }, { key: "move", value: function() {
                var t3 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
                t3 && (this.Editor.Toolbox.close(), this.Editor.BlockSettings.close());
                var e3 = this.Editor.BlockManager.currentBlock.holder;
                if (e3) {
                  var n3 = this.Editor.UI.isMobile, o4 = e3.offsetHeight, r3 = e3.offsetTop;
                  if (n3)
                    r3 += o4;
                  else {
                    var i3 = Math.floor(o4 / 2);
                    this.nodes.plusButton.style.transform = "translate3d(0, calc(".concat(i3, "px - 50%), 0)"), this.Editor.Toolbox.nodes.toolbox.style.transform = "translate3d(0, calc(".concat(i3, "px - 50%), 0)");
                  }
                  this.nodes.wrapper.style.transform = "translate3D(0, ".concat(Math.floor(r3), "px, 0)");
                }
              } }, { key: "open", value: function() {
                var t3 = this, e3 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], n3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
                f.delay(function() {
                  t3.move(n3), t3.nodes.wrapper.classList.add(t3.CSS.toolbarOpened), e3 ? t3.blockActions.show() : t3.blockActions.hide();
                }, 50)();
              } }, { key: "close", value: function() {
                this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.Editor.Toolbox.close(), this.Editor.BlockSettings.close();
              } }, { key: "make", value: function() {
                var t3 = this;
                this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), ["content", "actions"].forEach(function(e4) {
                  t3.nodes[e4] = u.default.make("div", t3.CSS[e4]);
                }), u.default.append(this.nodes.wrapper, this.nodes.content), u.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), u.default.append(this.nodes.plusButton, u.default.svg("plus", 14, 14)), u.default.append(this.nodes.content, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", function() {
                  t3.plusButtonClicked();
                }, false);
                var e3 = u.default.make("div");
                e3.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Add"))), e3.appendChild(u.default.make("div", this.CSS.plusButtonShortcut, { textContent: "\u21E5 Tab" })), this.Editor.Tooltip.onHover(this.nodes.plusButton, e3), this.nodes.blockActionsButtons = u.default.make("div", this.CSS.blockActionsButtons), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
                var n3 = u.default.svg("dots", 8, 8);
                u.default.append(this.nodes.settingsToggler, n3), u.default.append(this.nodes.blockActionsButtons, this.nodes.settingsToggler), u.default.append(this.nodes.actions, this.nodes.blockActionsButtons), this.Editor.Tooltip.onHover(this.nodes.settingsToggler, d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler, "Click to tune"), { placement: "top" }), u.default.append(this.nodes.content, this.Editor.Toolbox.nodes.toolbox), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
              } }, { key: "plusButtonClicked", value: function() {
                this.Editor.Toolbox.toggle();
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this;
                this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "click", function() {
                  t3.settingsTogglerClicked();
                });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "settingsTogglerClicked", value: function() {
                this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open();
              } }, { key: "drawUI", value: function() {
                this.Editor.BlockSettings.make(), this.Editor.Toolbox.make(), this.make();
              } }, { key: "destroy", value: function() {
                this.removeAllNodes();
              } }, { key: "CSS", get: function() {
                return { toolbar: "ce-toolbar", content: "ce-toolbar__content", actions: "ce-toolbar__actions", actionsOpened: "ce-toolbar__actions--opened", toolbarOpened: "ce-toolbar--opened", plusButton: "ce-toolbar__plus", plusButtonShortcut: "ce-toolbar__plus-shortcut", plusButtonHidden: "ce-toolbar__plus--hidden", blockActionsButtons: "ce-toolbar__actions-buttons", settingsToggler: "ce-toolbar__settings-btn" };
              } }, { key: "opened", get: function() {
                return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
              } }, { key: "plusButton", get: function() {
                var t3 = this;
                return { hide: function() {
                  return t3.nodes.plusButton.classList.add(t3.CSS.plusButtonHidden);
                }, show: function() {
                  t3.Editor.Toolbox.isEmpty || t3.nodes.plusButton.classList.remove(t3.CSS.plusButtonHidden);
                } };
              } }, { key: "blockActions", get: function() {
                var t3 = this;
                return { hide: function() {
                  t3.nodes.actions.classList.remove(t3.CSS.actionsOpened);
                }, show: function() {
                  t3.nodes.actions.classList.add(t3.CSS.actionsOpened);
                } };
              } }]), o3;
            }(l.default);
            o2.default = g, g.displayName = "Toolbar", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(29), n(144), n(8)], (i = typeof (o = function(t2, e2, o2, r2) {
            "use strict";
            var i2 = n(1);
            Object.defineProperty(t2, "__esModule", { value: true }), t2.I18nInternalNS = void 0, e2 = i2(e2);
            var a = function t3(n2, o3) {
              var i3 = {};
              return Object.entries(n2).forEach(function(n3) {
                var a2 = (0, e2.default)(n3, 2), s = a2[0], c = a2[1];
                if ((0, r2.isObject)(c)) {
                  var l = o3 ? "".concat(o3, ".").concat(s) : s, u = Object.values(c).every(function(t4) {
                    return (0, r2.isString)(t4);
                  });
                  i3[s] = u ? l : t3(c, l);
                } else
                  i3[s] = c;
              }), i3;
            }((o2 = i2(o2)).default);
            t2.I18nInternalNS = a;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o = n(13), r = n(10).document, i = o(r) && o(r.createElement);
          t.exports = function(t2) {
            return i ? r.createElement(t2) : {};
          };
        }, function(t, e, n) {
          e.f = n(14);
        }, function(t, e, n) {
          var o = n(67)("keys"), r = n(44);
          t.exports = function(t2) {
            return o[t2] || (o[t2] = r(t2));
          };
        }, function(t, e) {
          t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, function(t, e, n) {
          var o = n(10).document;
          t.exports = o && o.documentElement;
        }, function(t, e, n) {
          var o = n(13), r = n(12), i = function(t2, e2) {
            if (r(t2), !o(e2) && e2 !== null)
              throw TypeError(e2 + ": can't set as prototype!");
          };
          t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(t2, e2, o2) {
            try {
              (o2 = n(31)(Function.call, n(34).f(Object.prototype, "__proto__").set, 2))(t2, []), e2 = !(t2 instanceof Array);
            } catch (t3) {
              e2 = true;
            }
            return function(t3, n2) {
              return i(t3, n2), e2 ? t3.__proto__ = n2 : o2(t3, n2), t3;
            };
          }({}, false) : void 0), check: i };
        }, function(t, e) {
          t.exports = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        }, function(t, e, n) {
          var o = n(13), r = n(87).set;
          t.exports = function(t2, e2, n2) {
            var i, a = e2.constructor;
            return a !== n2 && typeof a == "function" && (i = a.prototype) !== n2.prototype && o(i) && r && r(t2, i), t2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(33), r = n(38);
          t.exports = function(t2) {
            var e2 = String(r(this)), n2 = "", i = o(t2);
            if (i < 0 || i == 1 / 0)
              throw RangeError("Count can't be negative");
            for (; i > 0; (i >>>= 1) && (e2 += e2))
              1 & i && (n2 += e2);
            return n2;
          };
        }, function(t, e) {
          t.exports = Math.sign || function(t2) {
            return (t2 = +t2) == 0 || t2 != t2 ? t2 : t2 < 0 ? -1 : 1;
          };
        }, function(t, e) {
          var n = Math.expm1;
          t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || n(-2e-17) != -2e-17 ? function(t2) {
            return (t2 = +t2) == 0 ? t2 : t2 > -1e-6 && t2 < 1e-6 ? t2 + t2 * t2 / 2 : Math.exp(t2) - 1;
          } : n;
        }, function(t, e, n) {
          var o = n(33), r = n(38);
          t.exports = function(t2) {
            return function(e2, n2) {
              var i, a, s = String(r(e2)), c = o(n2), l = s.length;
              return c < 0 || c >= l ? t2 ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t2 ? s.charAt(c) : i : t2 ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536;
            };
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(45), r = n(0), i = n(23), a = n(27), s = n(55), c = n(123), l = n(53), u = n(50), f = n(14)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
            return this;
          };
          t.exports = function(t2, e2, n2, h, v, y, g) {
            c(n2, e2, h);
            var b, m, k, x = function(t3) {
              if (!d && t3 in E)
                return E[t3];
              switch (t3) {
                case "keys":
                case "values":
                  return function() {
                    return new n2(this, t3);
                  };
              }
              return function() {
                return new n2(this, t3);
              };
            }, w = e2 + " Iterator", S = v == "values", T = false, E = t2.prototype, C = E[f] || E["@@iterator"] || v && E[v], B = C || x(v), _ = v ? S ? x("entries") : B : void 0, I = e2 == "Array" && E.entries || C;
            if (I && (k = u(I.call(new t2()))) !== Object.prototype && k.next && (l(k, w, true), o || typeof k[f] == "function" || a(k, f, p)), S && C && C.name !== "values" && (T = true, B = function() {
              return C.call(this);
            }), o && !g || !d && !T && E[f] || a(E, f, B), s[e2] = B, s[w] = p, v)
              if (b = { values: S ? B : x("values"), keys: y ? B : x("keys"), entries: _ }, g)
                for (m in b)
                  m in E || i(E, m, b[m]);
              else
                r(r.P + r.F * (d || T), e2, b);
            return b;
          };
        }, function(t, e, n) {
          var o = n(96), r = n(38);
          t.exports = function(t2, e2, n2) {
            if (o(e2))
              throw TypeError("String#" + n2 + " doesn't accept regex!");
            return String(r(t2));
          };
        }, function(t, e, n) {
          var o = n(13), r = n(37), i = n(14)("match");
          t.exports = function(t2) {
            var e2;
            return o(t2) && ((e2 = t2[i]) !== void 0 ? !!e2 : r(t2) == "RegExp");
          };
        }, function(t, e, n) {
          var o = n(14)("match");
          t.exports = function(t2) {
            var e2 = /./;
            try {
              "/./"[t2](e2);
            } catch (n2) {
              try {
                return e2[o] = false, !"/./"[t2](e2);
              } catch (t3) {
              }
            }
            return true;
          };
        }, function(t, e, n) {
          var o = n(55), r = n(14)("iterator"), i = Array.prototype;
          t.exports = function(t2) {
            return t2 !== void 0 && (o.Array === t2 || i[r] === t2);
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(19), r = n(43);
          t.exports = function(t2, e2, n2) {
            e2 in t2 ? o.f(t2, e2, r(0, n2)) : t2[e2] = n2;
          };
        }, function(t, e, n) {
          var o = n(64), r = n(14)("iterator"), i = n(55);
          t.exports = n(17).getIteratorMethod = function(t2) {
            if (t2 != null)
              return t2[r] || t2["@@iterator"] || i[o(t2)];
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(20), r = n(47), i = n(16);
          t.exports = function(t2) {
            for (var e2 = o(this), n2 = i(e2.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n2), c = a > 2 ? arguments[2] : void 0, l = c === void 0 ? n2 : r(c, n2); l > s; )
              e2[s++] = t2;
            return e2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(51), r = n(128), i = n(55), a = n(28);
          t.exports = n(94)(Array, "Array", function(t2, e2) {
            this._t = a(t2), this._i = 0, this._k = e2;
          }, function() {
            var t2 = this._t, e2 = this._k, n2 = this._i++;
            return !t2 || n2 >= t2.length ? (this._t = void 0, r(1)) : r(0, e2 == "keys" ? n2 : e2 == "values" ? t2[n2] : [n2, t2[n2]]);
          }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
        }, function(t, e, n) {
          "use strict";
          var o, r, i = n(72), a = RegExp.prototype.exec, s = String.prototype.replace, c = a, l = (o = /a/, r = /b*/g, a.call(o, "a"), a.call(r, "a"), o.lastIndex !== 0 || r.lastIndex !== 0), u = /()??/.exec("")[1] !== void 0;
          (l || u) && (c = function(t2) {
            var e2, n2, o2, r2, c2 = this;
            return u && (n2 = new RegExp("^" + c2.source + "$(?!\\s)", i.call(c2))), l && (e2 = c2.lastIndex), o2 = a.call(c2, t2), l && o2 && (c2.lastIndex = c2.global ? o2.index + o2[0].length : e2), u && o2 && o2.length > 1 && s.call(o2[0], n2, function() {
              for (r2 = 1; r2 < arguments.length - 2; r2++)
                arguments[r2] === void 0 && (o2[r2] = void 0);
            }), o2;
          }), t.exports = c;
        }, function(t, e, n) {
          "use strict";
          var o = n(93)(true);
          t.exports = function(t2, e2, n2) {
            return e2 + (n2 ? o(t2, e2).length : 1);
          };
        }, function(t, e, n) {
          var o, r, i, a = n(31), s = n(117), c = n(86), l = n(82), u = n(10), f = u.process, d = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, v = u.Dispatch, y = 0, g = {}, b = function() {
            var t2 = +this;
            if (g.hasOwnProperty(t2)) {
              var e2 = g[t2];
              delete g[t2], e2();
            }
          }, m = function(t2) {
            b.call(t2.data);
          };
          d && p || (d = function(t2) {
            for (var e2 = [], n2 = 1; arguments.length > n2; )
              e2.push(arguments[n2++]);
            return g[++y] = function() {
              s(typeof t2 == "function" ? t2 : Function(t2), e2);
            }, o(y), y;
          }, p = function(t2) {
            delete g[t2];
          }, n(37)(f) == "process" ? o = function(t2) {
            f.nextTick(a(b, t2, 1));
          } : v && v.now ? o = function(t2) {
            v.now(a(b, t2, 1));
          } : h ? (i = (r = new h()).port2, r.port1.onmessage = m, o = a(i.postMessage, i, 1)) : u.addEventListener && typeof postMessage == "function" && !u.importScripts ? (o = function(t2) {
            u.postMessage(t2 + "", "*");
          }, u.addEventListener("message", m, false)) : o = "onreadystatechange" in l("script") ? function(t2) {
            c.appendChild(l("script")).onreadystatechange = function() {
              c.removeChild(this), b.call(t2);
            };
          } : function(t2) {
            setTimeout(a(b, t2, 1), 0);
          }), t.exports = { set: d, clear: p };
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(18), i = n(45), a = n(78), s = n(27), c = n(58), l = n(11), u = n(57), f = n(33), d = n(16), p = n(136), h = n(49).f, v = n(19).f, y = n(101), g = n(53), b = o.ArrayBuffer, m = o.DataView, k = o.Math, x = o.RangeError, w = o.Infinity, S = b, T = k.abs, E = k.pow, C = k.floor, B = k.log, _ = k.LN2, I = r ? "_b" : "buffer", O = r ? "_l" : "byteLength", M = r ? "_o" : "byteOffset";
          function R(t2, e2, n2) {
            var o2, r2, i2, a2 = new Array(n2), s2 = 8 * n2 - e2 - 1, c2 = (1 << s2) - 1, l2 = c2 >> 1, u2 = e2 === 23 ? E(2, -24) - E(2, -77) : 0, f2 = 0, d2 = t2 < 0 || t2 === 0 && 1 / t2 < 0 ? 1 : 0;
            for ((t2 = T(t2)) != t2 || t2 === w ? (r2 = t2 != t2 ? 1 : 0, o2 = c2) : (o2 = C(B(t2) / _), t2 * (i2 = E(2, -o2)) < 1 && (o2--, i2 *= 2), (t2 += o2 + l2 >= 1 ? u2 / i2 : u2 * E(2, 1 - l2)) * i2 >= 2 && (o2++, i2 /= 2), o2 + l2 >= c2 ? (r2 = 0, o2 = c2) : o2 + l2 >= 1 ? (r2 = (t2 * i2 - 1) * E(2, e2), o2 += l2) : (r2 = t2 * E(2, l2 - 1) * E(2, e2), o2 = 0)); e2 >= 8; a2[f2++] = 255 & r2, r2 /= 256, e2 -= 8)
              ;
            for (o2 = o2 << e2 | r2, s2 += e2; s2 > 0; a2[f2++] = 255 & o2, o2 /= 256, s2 -= 8)
              ;
            return a2[--f2] |= 128 * d2, a2;
          }
          function A(t2, e2, n2) {
            var o2, r2 = 8 * n2 - e2 - 1, i2 = (1 << r2) - 1, a2 = i2 >> 1, s2 = r2 - 7, c2 = n2 - 1, l2 = t2[c2--], u2 = 127 & l2;
            for (l2 >>= 7; s2 > 0; u2 = 256 * u2 + t2[c2], c2--, s2 -= 8)
              ;
            for (o2 = u2 & (1 << -s2) - 1, u2 >>= -s2, s2 += e2; s2 > 0; o2 = 256 * o2 + t2[c2], c2--, s2 -= 8)
              ;
            if (u2 === 0)
              u2 = 1 - a2;
            else {
              if (u2 === i2)
                return o2 ? NaN : l2 ? -w : w;
              o2 += E(2, e2), u2 -= a2;
            }
            return (l2 ? -1 : 1) * o2 * E(2, u2 - e2);
          }
          function N(t2) {
            return t2[3] << 24 | t2[2] << 16 | t2[1] << 8 | t2[0];
          }
          function P(t2) {
            return [255 & t2];
          }
          function L(t2) {
            return [255 & t2, t2 >> 8 & 255];
          }
          function D(t2) {
            return [255 & t2, t2 >> 8 & 255, t2 >> 16 & 255, t2 >> 24 & 255];
          }
          function j(t2) {
            return R(t2, 52, 8);
          }
          function F(t2) {
            return R(t2, 23, 4);
          }
          function U(t2, e2, n2) {
            v(t2.prototype, e2, { get: function() {
              return this[n2];
            } });
          }
          function H(t2, e2, n2, o2) {
            var r2 = p(+n2);
            if (r2 + e2 > t2[O])
              throw x("Wrong index!");
            var i2 = t2[I]._b, a2 = r2 + t2[M], s2 = i2.slice(a2, a2 + e2);
            return o2 ? s2 : s2.reverse();
          }
          function z(t2, e2, n2, o2, r2, i2) {
            var a2 = p(+n2);
            if (a2 + e2 > t2[O])
              throw x("Wrong index!");
            for (var s2 = t2[I]._b, c2 = a2 + t2[M], l2 = o2(+r2), u2 = 0; u2 < e2; u2++)
              s2[c2 + u2] = l2[i2 ? u2 : e2 - u2 - 1];
          }
          if (a.ABV) {
            if (!l(function() {
              b(1);
            }) || !l(function() {
              new b(-1);
            }) || l(function() {
              return new b(), new b(1.5), new b(NaN), b.name != "ArrayBuffer";
            })) {
              for (var W, Y = (b = function(t2) {
                return u(this, b), new S(p(t2));
              }).prototype = S.prototype, V = h(S), X = 0; V.length > X; )
                (W = V[X++]) in b || s(b, W, S[W]);
              i || (Y.constructor = b);
            }
            var G = new m(new b(2)), K = m.prototype.setInt8;
            G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || c(m.prototype, { setInt8: function(t2, e2) {
              K.call(this, t2, e2 << 24 >> 24);
            }, setUint8: function(t2, e2) {
              K.call(this, t2, e2 << 24 >> 24);
            } }, true);
          } else
            b = function(t2) {
              u(this, b, "ArrayBuffer");
              var e2 = p(t2);
              this._b = y.call(new Array(e2), 0), this[O] = e2;
            }, m = function(t2, e2, n2) {
              u(this, m, "DataView"), u(t2, b, "DataView");
              var o2 = t2[O], r2 = f(e2);
              if (r2 < 0 || r2 > o2)
                throw x("Wrong offset!");
              if (r2 + (n2 = n2 === void 0 ? o2 - r2 : d(n2)) > o2)
                throw x("Wrong length!");
              this[I] = t2, this[M] = r2, this[O] = n2;
            }, r && (U(b, "byteLength", "_l"), U(m, "buffer", "_b"), U(m, "byteLength", "_l"), U(m, "byteOffset", "_o")), c(m.prototype, { getInt8: function(t2) {
              return H(this, 1, t2)[0] << 24 >> 24;
            }, getUint8: function(t2) {
              return H(this, 1, t2)[0];
            }, getInt16: function(t2) {
              var e2 = H(this, 2, t2, arguments[1]);
              return (e2[1] << 8 | e2[0]) << 16 >> 16;
            }, getUint16: function(t2) {
              var e2 = H(this, 2, t2, arguments[1]);
              return e2[1] << 8 | e2[0];
            }, getInt32: function(t2) {
              return N(H(this, 4, t2, arguments[1]));
            }, getUint32: function(t2) {
              return N(H(this, 4, t2, arguments[1])) >>> 0;
            }, getFloat32: function(t2) {
              return A(H(this, 4, t2, arguments[1]), 23, 4);
            }, getFloat64: function(t2) {
              return A(H(this, 8, t2, arguments[1]), 52, 8);
            }, setInt8: function(t2, e2) {
              z(this, 1, t2, P, e2);
            }, setUint8: function(t2, e2) {
              z(this, 1, t2, P, e2);
            }, setInt16: function(t2, e2) {
              z(this, 2, t2, L, e2, arguments[2]);
            }, setUint16: function(t2, e2) {
              z(this, 2, t2, L, e2, arguments[2]);
            }, setInt32: function(t2, e2) {
              z(this, 4, t2, D, e2, arguments[2]);
            }, setUint32: function(t2, e2) {
              z(this, 4, t2, D, e2, arguments[2]);
            }, setFloat32: function(t2, e2) {
              z(this, 4, t2, F, e2, arguments[2]);
            }, setFloat64: function(t2, e2) {
              z(this, 8, t2, j, e2, arguments[2]);
            } });
          g(b, "ArrayBuffer"), g(m, "DataView"), s(m.prototype, a.VIEW, true), e.ArrayBuffer = b, e.DataView = m;
        }, function(t, e) {
          function n(e2, o) {
            return t.exports = n = Object.setPrototypeOf || function(t2, e3) {
              return t2.__proto__ = e3, t2;
            }, n(e2, o);
          }
          t.exports = n;
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(42), n(2), n(3), n(377)], (i = typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var c = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), a = c(a), s = c(s);
            var l = function() {
              function t2() {
                (0, i2.default)(this, t2), this.registeredShortcuts = /* @__PURE__ */ new Map();
              }
              return (0, a.default)(t2, [{ key: "add", value: function(t3) {
                if (this.findShortcut(t3.on, t3.name))
                  throw Error("Shortcut ".concat(t3.name, " is already registered for ").concat(t3.on, ". Please remove it before add a new handler."));
                var e2 = new s.default({ name: t3.name, on: t3.on, callback: t3.handler }), n2 = this.registeredShortcuts.get(t3.on) || [];
                this.registeredShortcuts.set(t3.on, [].concat((0, r2.default)(n2), [e2]));
              } }, { key: "remove", value: function(t3, e2) {
                var n2 = this.findShortcut(t3, e2);
                if (n2) {
                  n2.remove();
                  var o3 = this.registeredShortcuts.get(t3);
                  this.registeredShortcuts.set(t3, o3.filter(function(t4) {
                    return t4 !== n2;
                  }));
                }
              } }, { key: "findShortcut", value: function(t3, e2) {
                return (this.registeredShortcuts.get(t3) || []).find(function(t4) {
                  return t4.name === e2;
                });
              } }]), t2;
            }();
            l.displayName = "Shortcuts";
            var u = new l();
            o2.default = u, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          t.exports = !n(18) && !n(11)(function() {
            return Object.defineProperty(n(82)("div"), "a", { get: function() {
              return 7;
            } }).a != 7;
          });
        }, function(t, e, n) {
          var o = n(10), r = n(17), i = n(45), a = n(83), s = n(19).f;
          t.exports = function(t2) {
            var e2 = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
            t2.charAt(0) == "_" || t2 in e2 || s(e2, t2, { value: a.f(t2) });
          };
        }, function(t, e, n) {
          var o = n(26), r = n(28), i = n(68)(false), a = n(84)("IE_PROTO");
          t.exports = function(t2, e2) {
            var n2, s = r(t2), c = 0, l = [];
            for (n2 in s)
              n2 != a && o(s, n2) && l.push(n2);
            for (; e2.length > c; )
              o(s, n2 = e2[c++]) && (~i(l, n2) || l.push(n2));
            return l;
          };
        }, function(t, e, n) {
          var o = n(19), r = n(12), i = n(46);
          t.exports = n(18) ? Object.defineProperties : function(t2, e2) {
            r(t2);
            for (var n2, a = i(e2), s = a.length, c = 0; s > c; )
              o.f(t2, n2 = a[c++], e2[n2]);
            return t2;
          };
        }, function(t, e, n) {
          var o = n(28), r = n(49).f, i = {}.toString, a = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          t.exports.f = function(t2) {
            return a && i.call(t2) == "[object Window]" ? function(t3) {
              try {
                return r(t3);
              } catch (t4) {
                return a.slice();
              }
            }(t2) : r(o(t2));
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(18), r = n(46), i = n(69), a = n(63), s = n(20), c = n(62), l = Object.assign;
          t.exports = !l || n(11)(function() {
            var t2 = {}, e2 = {}, n2 = Symbol(), o2 = "abcdefghijklmnopqrst";
            return t2[n2] = 7, o2.split("").forEach(function(t3) {
              e2[t3] = t3;
            }), l({}, t2)[n2] != 7 || Object.keys(l({}, e2)).join("") != o2;
          }) ? function(t2, e2) {
            for (var n2 = s(t2), l2 = arguments.length, u = 1, f = i.f, d = a.f; l2 > u; )
              for (var p, h = c(arguments[u++]), v = f ? r(h).concat(f(h)) : r(h), y = v.length, g = 0; y > g; )
                p = v[g++], o && !d.call(h, p) || (n2[p] = h[p]);
            return n2;
          } : l;
        }, function(t, e) {
          t.exports = Object.is || function(t2, e2) {
            return t2 === e2 ? t2 !== 0 || 1 / t2 == 1 / e2 : t2 != t2 && e2 != e2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(32), r = n(13), i = n(117), a = [].slice, s = {}, c = function(t2, e2, n2) {
            if (!(e2 in s)) {
              for (var o2 = [], r2 = 0; r2 < e2; r2++)
                o2[r2] = "a[" + r2 + "]";
              s[e2] = Function("F,a", "return new F(" + o2.join(",") + ")");
            }
            return s[e2](t2, n2);
          };
          t.exports = Function.bind || function(t2) {
            var e2 = o(this), n2 = a.call(arguments, 1), s2 = function() {
              var o2 = n2.concat(a.call(arguments));
              return this instanceof s2 ? c(e2, o2.length, o2) : i(e2, o2, t2);
            };
            return r(e2.prototype) && (s2.prototype = e2.prototype), s2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2, n) {
            var o = n === void 0;
            switch (e2.length) {
              case 0:
                return o ? t2() : t2.call(n);
              case 1:
                return o ? t2(e2[0]) : t2.call(n, e2[0]);
              case 2:
                return o ? t2(e2[0], e2[1]) : t2.call(n, e2[0], e2[1]);
              case 3:
                return o ? t2(e2[0], e2[1], e2[2]) : t2.call(n, e2[0], e2[1], e2[2]);
              case 4:
                return o ? t2(e2[0], e2[1], e2[2], e2[3]) : t2.call(n, e2[0], e2[1], e2[2], e2[3]);
            }
            return t2.apply(n, e2);
          };
        }, function(t, e, n) {
          var o = n(10).parseInt, r = n(54).trim, i = n(88), a = /^[-+]?0[xX]/;
          t.exports = o(i + "08") !== 8 || o(i + "0x16") !== 22 ? function(t2, e2) {
            var n2 = r(String(t2), 3);
            return o(n2, e2 >>> 0 || (a.test(n2) ? 16 : 10));
          } : o;
        }, function(t, e, n) {
          var o = n(10).parseFloat, r = n(54).trim;
          t.exports = 1 / o(n(88) + "-0") != -1 / 0 ? function(t2) {
            var e2 = r(String(t2), 3), n2 = o(e2);
            return n2 === 0 && e2.charAt(0) == "-" ? -0 : n2;
          } : o;
        }, function(t, e, n) {
          var o = n(37);
          t.exports = function(t2, e2) {
            if (typeof t2 != "number" && o(t2) != "Number")
              throw TypeError(e2);
            return +t2;
          };
        }, function(t, e, n) {
          var o = n(13), r = Math.floor;
          t.exports = function(t2) {
            return !o(t2) && isFinite(t2) && r(t2) === t2;
          };
        }, function(t, e) {
          t.exports = Math.log1p || function(t2) {
            return (t2 = +t2) > -1e-8 && t2 < 1e-8 ? t2 - t2 * t2 / 2 : Math.log(1 + t2);
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(48), r = n(43), i = n(53), a = {};
          n(27)(a, n(14)("iterator"), function() {
            return this;
          }), t.exports = function(t2, e2, n2) {
            t2.prototype = o(a, { next: r(1, n2) }), i(t2, e2 + " Iterator");
          };
        }, function(t, e, n) {
          var o = n(12);
          t.exports = function(t2, e2, n2, r) {
            try {
              return r ? e2(o(n2)[0], n2[1]) : e2(n2);
            } catch (e3) {
              var i = t2.return;
              throw i !== void 0 && o(i.call(t2)), e3;
            }
          };
        }, function(t, e, n) {
          var o = n(278);
          t.exports = function(t2, e2) {
            return new (o(t2))(e2);
          };
        }, function(t, e, n) {
          var o = n(32), r = n(20), i = n(62), a = n(16);
          t.exports = function(t2, e2, n2, s, c) {
            o(e2);
            var l = r(t2), u = i(l), f = a(l.length), d = c ? f - 1 : 0, p = c ? -1 : 1;
            if (n2 < 2)
              for (; ; ) {
                if (d in u) {
                  s = u[d], d += p;
                  break;
                }
                if (d += p, c ? d < 0 : f <= d)
                  throw TypeError("Reduce of empty array with no initial value");
              }
            for (; c ? d >= 0 : f > d; d += p)
              d in u && (s = e2(s, u[d], d, l));
            return s;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(20), r = n(47), i = n(16);
          t.exports = [].copyWithin || function(t2, e2) {
            var n2 = o(this), a = i(n2.length), s = r(t2, a), c = r(e2, a), l = arguments.length > 2 ? arguments[2] : void 0, u = Math.min((l === void 0 ? a : r(l, a)) - c, a - s), f = 1;
            for (c < s && s < c + u && (f = -1, c += u - 1, s += u - 1); u-- > 0; )
              c in n2 ? n2[s] = n2[c] : delete n2[s], s += f, c += f;
            return n2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            return { value: e2, done: !!t2 };
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(103);
          n(0)({ target: "RegExp", proto: true, forced: o !== /./.exec }, { exec: o });
        }, function(t, e, n) {
          n(18) && /./g.flags != "g" && n(19).f(RegExp.prototype, "flags", { configurable: true, get: n(72) });
        }, function(t, e, n) {
          "use strict";
          var o, r, i, a, s = n(45), c = n(10), l = n(31), u = n(64), f = n(0), d = n(13), p = n(32), h = n(57), v = n(75), y = n(65), g = n(105).set, b = n(298)(), m = n(132), k = n(299), x = n(76), w = n(133), S = c.TypeError, T = c.process, E = T && T.versions, C = E && E.v8 || "", B = c.Promise, _ = u(T) == "process", I = function() {
          }, O = r = m.f, M = !!function() {
            try {
              var t2 = B.resolve(1), e2 = (t2.constructor = {})[n(14)("species")] = function(t3) {
                t3(I, I);
              };
              return (_ || typeof PromiseRejectionEvent == "function") && t2.then(I) instanceof e2 && C.indexOf("6.6") !== 0 && x.indexOf("Chrome/66") === -1;
            } catch (t3) {
            }
          }(), R = function(t2) {
            var e2;
            return !(!d(t2) || typeof (e2 = t2.then) != "function") && e2;
          }, A = function(t2, e2) {
            if (!t2._n) {
              t2._n = true;
              var n2 = t2._c;
              b(function() {
                for (var o2 = t2._v, r2 = t2._s == 1, i2 = 0, a2 = function(e3) {
                  var n3, i3, a3, s2 = r2 ? e3.ok : e3.fail, c2 = e3.resolve, l2 = e3.reject, u2 = e3.domain;
                  try {
                    s2 ? (r2 || (t2._h == 2 && L(t2), t2._h = 1), s2 === true ? n3 = o2 : (u2 && u2.enter(), n3 = s2(o2), u2 && (u2.exit(), a3 = true)), n3 === e3.promise ? l2(S("Promise-chain cycle")) : (i3 = R(n3)) ? i3.call(n3, c2, l2) : c2(n3)) : l2(o2);
                  } catch (t3) {
                    u2 && !a3 && u2.exit(), l2(t3);
                  }
                }; n2.length > i2; )
                  a2(n2[i2++]);
                t2._c = [], t2._n = false, e2 && !t2._h && N(t2);
              });
            }
          }, N = function(t2) {
            g.call(c, function() {
              var e2, n2, o2, r2 = t2._v, i2 = P(t2);
              if (i2 && (e2 = k(function() {
                _ ? T.emit("unhandledRejection", r2, t2) : (n2 = c.onunhandledrejection) ? n2({ promise: t2, reason: r2 }) : (o2 = c.console) && o2.error && o2.error("Unhandled promise rejection", r2);
              }), t2._h = _ || P(t2) ? 2 : 1), t2._a = void 0, i2 && e2.e)
                throw e2.v;
            });
          }, P = function(t2) {
            return t2._h !== 1 && (t2._a || t2._c).length === 0;
          }, L = function(t2) {
            g.call(c, function() {
              var e2;
              _ ? T.emit("rejectionHandled", t2) : (e2 = c.onrejectionhandled) && e2({ promise: t2, reason: t2._v });
            });
          }, D = function(t2) {
            var e2 = this;
            e2._d || (e2._d = true, (e2 = e2._w || e2)._v = t2, e2._s = 2, e2._a || (e2._a = e2._c.slice()), A(e2, true));
          }, j = function(t2) {
            var e2, n2 = this;
            if (!n2._d) {
              n2._d = true, n2 = n2._w || n2;
              try {
                if (n2 === t2)
                  throw S("Promise can't be resolved itself");
                (e2 = R(t2)) ? b(function() {
                  var o2 = { _w: n2, _d: false };
                  try {
                    e2.call(t2, l(j, o2, 1), l(D, o2, 1));
                  } catch (t3) {
                    D.call(o2, t3);
                  }
                }) : (n2._v = t2, n2._s = 1, A(n2, false));
              } catch (t3) {
                D.call({ _w: n2, _d: false }, t3);
              }
            }
          };
          M || (B = function(t2) {
            h(this, B, "Promise", "_h"), p(t2), o.call(this);
            try {
              t2(l(j, this, 1), l(D, this, 1));
            } catch (t3) {
              D.call(this, t3);
            }
          }, (o = function(t2) {
            this._c = [], this._a = void 0, this._s = 0, this._d = false, this._v = void 0, this._h = 0, this._n = false;
          }).prototype = n(58)(B.prototype, { then: function(t2, e2) {
            var n2 = O(y(this, B));
            return n2.ok = typeof t2 != "function" || t2, n2.fail = typeof e2 == "function" && e2, n2.domain = _ ? T.domain : void 0, this._c.push(n2), this._a && this._a.push(n2), this._s && A(this, false), n2.promise;
          }, catch: function(t2) {
            return this.then(void 0, t2);
          } }), i = function() {
            var t2 = new o();
            this.promise = t2, this.resolve = l(j, t2, 1), this.reject = l(D, t2, 1);
          }, m.f = O = function(t2) {
            return t2 === B || t2 === a ? new i(t2) : r(t2);
          }), f(f.G + f.W + f.F * !M, { Promise: B }), n(53)(B, "Promise"), n(56)("Promise"), a = n(17).Promise, f(f.S + f.F * !M, "Promise", { reject: function(t2) {
            var e2 = O(this);
            return (0, e2.reject)(t2), e2.promise;
          } }), f(f.S + f.F * (s || !M), "Promise", { resolve: function(t2) {
            return w(s && this === a ? B : this, t2);
          } }), f(f.S + f.F * !(M && n(71)(function(t2) {
            B.all(t2).catch(I);
          })), "Promise", { all: function(t2) {
            var e2 = this, n2 = O(e2), o2 = n2.resolve, r2 = n2.reject, i2 = k(function() {
              var n3 = [], i3 = 0, a2 = 1;
              v(t2, false, function(t3) {
                var s2 = i3++, c2 = false;
                n3.push(void 0), a2++, e2.resolve(t3).then(function(t4) {
                  c2 || (c2 = true, n3[s2] = t4, --a2 || o2(n3));
                }, r2);
              }), --a2 || o2(n3);
            });
            return i2.e && r2(i2.v), n2.promise;
          }, race: function(t2) {
            var e2 = this, n2 = O(e2), o2 = n2.reject, r2 = k(function() {
              v(t2, false, function(t3) {
                e2.resolve(t3).then(n2.resolve, o2);
              });
            });
            return r2.e && o2(r2.v), n2.promise;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(32);
          function r(t2) {
            var e2, n2;
            this.promise = new t2(function(t3, o2) {
              if (e2 !== void 0 || n2 !== void 0)
                throw TypeError("Bad Promise constructor");
              e2 = t3, n2 = o2;
            }), this.resolve = o(e2), this.reject = o(n2);
          }
          t.exports.f = function(t2) {
            return new r(t2);
          };
        }, function(t, e, n) {
          var o = n(12), r = n(13), i = n(132);
          t.exports = function(t2, e2) {
            if (o(t2), r(e2) && e2.constructor === t2)
              return e2;
            var n2 = i.f(t2);
            return (0, n2.resolve)(e2), n2.promise;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(19).f, r = n(48), i = n(58), a = n(31), s = n(57), c = n(75), l = n(94), u = n(128), f = n(56), d = n(18), p = n(41).fastKey, h = n(52), v = d ? "_s" : "size", y = function(t2, e2) {
            var n2, o2 = p(e2);
            if (o2 !== "F")
              return t2._i[o2];
            for (n2 = t2._f; n2; n2 = n2.n)
              if (n2.k == e2)
                return n2;
          };
          t.exports = { getConstructor: function(t2, e2, n2, l2) {
            var u2 = t2(function(t3, o2) {
              s(t3, u2, e2, "_i"), t3._t = e2, t3._i = r(null), t3._f = void 0, t3._l = void 0, t3[v] = 0, o2 != null && c(o2, n2, t3[l2], t3);
            });
            return i(u2.prototype, { clear: function() {
              for (var t3 = h(this, e2), n3 = t3._i, o2 = t3._f; o2; o2 = o2.n)
                o2.r = true, o2.p && (o2.p = o2.p.n = void 0), delete n3[o2.i];
              t3._f = t3._l = void 0, t3[v] = 0;
            }, delete: function(t3) {
              var n3 = h(this, e2), o2 = y(n3, t3);
              if (o2) {
                var r2 = o2.n, i2 = o2.p;
                delete n3._i[o2.i], o2.r = true, i2 && (i2.n = r2), r2 && (r2.p = i2), n3._f == o2 && (n3._f = r2), n3._l == o2 && (n3._l = i2), n3[v]--;
              }
              return !!o2;
            }, forEach: function(t3) {
              h(this, e2);
              for (var n3, o2 = a(t3, arguments.length > 1 ? arguments[1] : void 0, 3); n3 = n3 ? n3.n : this._f; )
                for (o2(n3.v, n3.k, this); n3 && n3.r; )
                  n3 = n3.p;
            }, has: function(t3) {
              return !!y(h(this, e2), t3);
            } }), d && o(u2.prototype, "size", { get: function() {
              return h(this, e2)[v];
            } }), u2;
          }, def: function(t2, e2, n2) {
            var o2, r2, i2 = y(t2, e2);
            return i2 ? i2.v = n2 : (t2._l = i2 = { i: r2 = p(e2, true), k: e2, v: n2, p: o2 = t2._l, n: void 0, r: false }, t2._f || (t2._f = i2), o2 && (o2.n = i2), t2[v]++, r2 !== "F" && (t2._i[r2] = i2)), t2;
          }, getEntry: y, setStrong: function(t2, e2, n2) {
            l(t2, e2, function(t3, n3) {
              this._t = h(t3, e2), this._k = n3, this._l = void 0;
            }, function() {
              for (var t3 = this._k, e3 = this._l; e3 && e3.r; )
                e3 = e3.p;
              return this._t && (this._l = e3 = e3 ? e3.n : this._t._f) ? u(0, t3 == "keys" ? e3.k : t3 == "values" ? e3.v : [e3.k, e3.v]) : (this._t = void 0, u(1));
            }, n2 ? "entries" : "values", !n2, true), f(e2);
          } };
        }, function(t, e, n) {
          "use strict";
          var o = n(58), r = n(41).getWeak, i = n(12), a = n(13), s = n(57), c = n(75), l = n(36), u = n(26), f = n(52), d = l(5), p = l(6), h = 0, v = function(t2) {
            return t2._l || (t2._l = new y());
          }, y = function() {
            this.a = [];
          }, g = function(t2, e2) {
            return d(t2.a, function(t3) {
              return t3[0] === e2;
            });
          };
          y.prototype = { get: function(t2) {
            var e2 = g(this, t2);
            if (e2)
              return e2[1];
          }, has: function(t2) {
            return !!g(this, t2);
          }, set: function(t2, e2) {
            var n2 = g(this, t2);
            n2 ? n2[1] = e2 : this.a.push([t2, e2]);
          }, delete: function(t2) {
            var e2 = p(this.a, function(e3) {
              return e3[0] === t2;
            });
            return ~e2 && this.a.splice(e2, 1), !!~e2;
          } }, t.exports = { getConstructor: function(t2, e2, n2, i2) {
            var l2 = t2(function(t3, o2) {
              s(t3, l2, e2, "_i"), t3._t = e2, t3._i = h++, t3._l = void 0, o2 != null && c(o2, n2, t3[i2], t3);
            });
            return o(l2.prototype, { delete: function(t3) {
              if (!a(t3))
                return false;
              var n3 = r(t3);
              return n3 === true ? v(f(this, e2)).delete(t3) : n3 && u(n3, this._i) && delete n3[this._i];
            }, has: function(t3) {
              if (!a(t3))
                return false;
              var n3 = r(t3);
              return n3 === true ? v(f(this, e2)).has(t3) : n3 && u(n3, this._i);
            } }), l2;
          }, def: function(t2, e2, n2) {
            var o2 = r(i(e2), true);
            return o2 === true ? v(t2).set(e2, n2) : o2[t2._i] = n2, t2;
          }, ufstore: v };
        }, function(t, e, n) {
          var o = n(33), r = n(16);
          t.exports = function(t2) {
            if (t2 === void 0)
              return 0;
            var e2 = o(t2), n2 = r(e2);
            if (e2 !== n2)
              throw RangeError("Wrong length!");
            return n2;
          };
        }, function(t, e, n) {
          var o = n(49), r = n(69), i = n(12), a = n(10).Reflect;
          t.exports = a && a.ownKeys || function(t2) {
            var e2 = o.f(i(t2)), n2 = r.f;
            return n2 ? e2.concat(n2(t2)) : e2;
          };
        }, function(t, e, n) {
          var o = n(16), r = n(90), i = n(38);
          t.exports = function(t2, e2, n2, a) {
            var s = String(i(t2)), c = s.length, l = n2 === void 0 ? " " : String(n2), u = o(e2);
            if (u <= c || l == "")
              return s;
            var f = u - c, d = r.call(l, Math.ceil(f / l.length));
            return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
          };
        }, function(t, e, n) {
          var o = n(18), r = n(46), i = n(28), a = n(63).f;
          t.exports = function(t2) {
            return function(e2) {
              for (var n2, s = i(e2), c = r(s), l = c.length, u = 0, f = []; l > u; )
                n2 = c[u++], o && !a.call(s, n2) || f.push(t2 ? [n2, s[n2]] : s[n2]);
              return f;
            };
          };
        }, function(t, e, n) {
          var o = function(t2) {
            "use strict";
            var e2 = Object.prototype, n2 = e2.hasOwnProperty, o2 = typeof Symbol == "function" ? Symbol : {}, r = o2.iterator || "@@iterator", i = o2.asyncIterator || "@@asyncIterator", a = o2.toStringTag || "@@toStringTag";
            function s(t3, e3, n3, o3) {
              var r2 = e3 && e3.prototype instanceof u ? e3 : u, i2 = Object.create(r2.prototype), a2 = new w(o3 || []);
              return i2._invoke = function(t4, e4, n4) {
                var o4 = "suspendedStart";
                return function(r3, i3) {
                  if (o4 === "executing")
                    throw new Error("Generator is already running");
                  if (o4 === "completed") {
                    if (r3 === "throw")
                      throw i3;
                    return T();
                  }
                  for (n4.method = r3, n4.arg = i3; ; ) {
                    var a3 = n4.delegate;
                    if (a3) {
                      var s2 = m(a3, n4);
                      if (s2) {
                        if (s2 === l)
                          continue;
                        return s2;
                      }
                    }
                    if (n4.method === "next")
                      n4.sent = n4._sent = n4.arg;
                    else if (n4.method === "throw") {
                      if (o4 === "suspendedStart")
                        throw o4 = "completed", n4.arg;
                      n4.dispatchException(n4.arg);
                    } else
                      n4.method === "return" && n4.abrupt("return", n4.arg);
                    o4 = "executing";
                    var u2 = c(t4, e4, n4);
                    if (u2.type === "normal") {
                      if (o4 = n4.done ? "completed" : "suspendedYield", u2.arg === l)
                        continue;
                      return { value: u2.arg, done: n4.done };
                    }
                    u2.type === "throw" && (o4 = "completed", n4.method = "throw", n4.arg = u2.arg);
                  }
                };
              }(t3, n3, a2), i2;
            }
            function c(t3, e3, n3) {
              try {
                return { type: "normal", arg: t3.call(e3, n3) };
              } catch (t4) {
                return { type: "throw", arg: t4 };
              }
            }
            t2.wrap = s;
            var l = {};
            function u() {
            }
            function f() {
            }
            function d() {
            }
            var p = {};
            p[r] = function() {
              return this;
            };
            var h = Object.getPrototypeOf, v = h && h(h(S([])));
            v && v !== e2 && n2.call(v, r) && (p = v);
            var y = d.prototype = u.prototype = Object.create(p);
            function g(t3) {
              ["next", "throw", "return"].forEach(function(e3) {
                t3[e3] = function(t4) {
                  return this._invoke(e3, t4);
                };
              });
            }
            function b(t3, e3) {
              var o3;
              this._invoke = function(r2, i2) {
                function a2() {
                  return new e3(function(o4, a3) {
                    !function o5(r3, i3, a4, s2) {
                      var l2 = c(t3[r3], t3, i3);
                      if (l2.type !== "throw") {
                        var u2 = l2.arg, f2 = u2.value;
                        return f2 && typeof f2 == "object" && n2.call(f2, "__await") ? e3.resolve(f2.__await).then(function(t4) {
                          o5("next", t4, a4, s2);
                        }, function(t4) {
                          o5("throw", t4, a4, s2);
                        }) : e3.resolve(f2).then(function(t4) {
                          u2.value = t4, a4(u2);
                        }, function(t4) {
                          return o5("throw", t4, a4, s2);
                        });
                      }
                      s2(l2.arg);
                    }(r2, i2, o4, a3);
                  });
                }
                return o3 = o3 ? o3.then(a2, a2) : a2();
              };
            }
            function m(t3, e3) {
              var n3 = t3.iterator[e3.method];
              if (n3 === void 0) {
                if (e3.delegate = null, e3.method === "throw") {
                  if (t3.iterator.return && (e3.method = "return", e3.arg = void 0, m(t3, e3), e3.method === "throw"))
                    return l;
                  e3.method = "throw", e3.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return l;
              }
              var o3 = c(n3, t3.iterator, e3.arg);
              if (o3.type === "throw")
                return e3.method = "throw", e3.arg = o3.arg, e3.delegate = null, l;
              var r2 = o3.arg;
              return r2 ? r2.done ? (e3[t3.resultName] = r2.value, e3.next = t3.nextLoc, e3.method !== "return" && (e3.method = "next", e3.arg = void 0), e3.delegate = null, l) : r2 : (e3.method = "throw", e3.arg = new TypeError("iterator result is not an object"), e3.delegate = null, l);
            }
            function k(t3) {
              var e3 = { tryLoc: t3[0] };
              1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
            }
            function x(t3) {
              var e3 = t3.completion || {};
              e3.type = "normal", delete e3.arg, t3.completion = e3;
            }
            function w(t3) {
              this.tryEntries = [{ tryLoc: "root" }], t3.forEach(k, this), this.reset(true);
            }
            function S(t3) {
              if (t3) {
                var e3 = t3[r];
                if (e3)
                  return e3.call(t3);
                if (typeof t3.next == "function")
                  return t3;
                if (!isNaN(t3.length)) {
                  var o3 = -1, i2 = function e4() {
                    for (; ++o3 < t3.length; )
                      if (n2.call(t3, o3))
                        return e4.value = t3[o3], e4.done = false, e4;
                    return e4.value = void 0, e4.done = true, e4;
                  };
                  return i2.next = i2;
                }
              }
              return { next: T };
            }
            function T() {
              return { value: void 0, done: true };
            }
            return f.prototype = y.constructor = d, d.constructor = f, d[a] = f.displayName = "GeneratorFunction", t2.isGeneratorFunction = function(t3) {
              var e3 = typeof t3 == "function" && t3.constructor;
              return !!e3 && (e3 === f || (e3.displayName || e3.name) === "GeneratorFunction");
            }, t2.mark = function(t3) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t3, d) : (t3.__proto__ = d, a in t3 || (t3[a] = "GeneratorFunction")), t3.prototype = Object.create(y), t3;
            }, t2.awrap = function(t3) {
              return { __await: t3 };
            }, g(b.prototype), b.prototype[i] = function() {
              return this;
            }, t2.AsyncIterator = b, t2.async = function(e3, n3, o3, r2, i2) {
              i2 === void 0 && (i2 = Promise);
              var a2 = new b(s(e3, n3, o3, r2), i2);
              return t2.isGeneratorFunction(n3) ? a2 : a2.next().then(function(t3) {
                return t3.done ? t3.value : a2.next();
              });
            }, g(y), y[a] = "Generator", y[r] = function() {
              return this;
            }, y.toString = function() {
              return "[object Generator]";
            }, t2.keys = function(t3) {
              var e3 = [];
              for (var n3 in t3)
                e3.push(n3);
              return e3.reverse(), function n4() {
                for (; e3.length; ) {
                  var o3 = e3.pop();
                  if (o3 in t3)
                    return n4.value = o3, n4.done = false, n4;
                }
                return n4.done = true, n4;
              };
            }, t2.values = S, w.prototype = { constructor: w, reset: function(t3) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t3)
                for (var e3 in this)
                  e3.charAt(0) === "t" && n2.call(this, e3) && !isNaN(+e3.slice(1)) && (this[e3] = void 0);
            }, stop: function() {
              this.done = true;
              var t3 = this.tryEntries[0].completion;
              if (t3.type === "throw")
                throw t3.arg;
              return this.rval;
            }, dispatchException: function(t3) {
              if (this.done)
                throw t3;
              var e3 = this;
              function o3(n3, o4) {
                return a2.type = "throw", a2.arg = t3, e3.next = n3, o4 && (e3.method = "next", e3.arg = void 0), !!o4;
              }
              for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
                var i2 = this.tryEntries[r2], a2 = i2.completion;
                if (i2.tryLoc === "root")
                  return o3("end");
                if (i2.tryLoc <= this.prev) {
                  var s2 = n2.call(i2, "catchLoc"), c2 = n2.call(i2, "finallyLoc");
                  if (s2 && c2) {
                    if (this.prev < i2.catchLoc)
                      return o3(i2.catchLoc, true);
                    if (this.prev < i2.finallyLoc)
                      return o3(i2.finallyLoc);
                  } else if (s2) {
                    if (this.prev < i2.catchLoc)
                      return o3(i2.catchLoc, true);
                  } else {
                    if (!c2)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i2.finallyLoc)
                      return o3(i2.finallyLoc);
                  }
                }
              }
            }, abrupt: function(t3, e3) {
              for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
                var r2 = this.tryEntries[o3];
                if (r2.tryLoc <= this.prev && n2.call(r2, "finallyLoc") && this.prev < r2.finallyLoc) {
                  var i2 = r2;
                  break;
                }
              }
              i2 && (t3 === "break" || t3 === "continue") && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
              var a2 = i2 ? i2.completion : {};
              return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, l) : this.complete(a2);
            }, complete: function(t3, e3) {
              if (t3.type === "throw")
                throw t3.arg;
              return t3.type === "break" || t3.type === "continue" ? this.next = t3.arg : t3.type === "return" ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : t3.type === "normal" && e3 && (this.next = e3), l;
            }, finish: function(t3) {
              for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
                var n3 = this.tryEntries[e3];
                if (n3.finallyLoc === t3)
                  return this.complete(n3.completion, n3.afterLoc), x(n3), l;
              }
            }, catch: function(t3) {
              for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
                var n3 = this.tryEntries[e3];
                if (n3.tryLoc === t3) {
                  var o3 = n3.completion;
                  if (o3.type === "throw") {
                    var r2 = o3.arg;
                    x(n3);
                  }
                  return r2;
                }
              }
              throw new Error("illegal catch attempt");
            }, delegateYield: function(t3, e3, n3) {
              return this.delegate = { iterator: S(t3), resultName: e3, nextLoc: n3 }, this.method === "next" && (this.arg = void 0), l;
            } }, t2;
          }(t.exports);
          try {
            regeneratorRuntime = o;
          } catch (t2) {
            Function("r", "regeneratorRuntime = r")(o);
          }
        }, function(t, e, n) {
          var o = n(142);
          t.exports = function(t2, e2) {
            if (t2) {
              if (typeof t2 == "string")
                return o(t2, e2);
              var n2 = Object.prototype.toString.call(t2).slice(8, -1);
              return n2 === "Object" && t2.constructor && (n2 = t2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(n2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? o(t2, e2) : void 0;
            }
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            (e2 == null || e2 > t2.length) && (e2 = t2.length);
            for (var n = 0, o = new Array(e2); n < e2; n++)
              o[n] = t2[n];
            return o;
          };
        }, function(t, e) {
          function n(e2) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t.exports = n = function(t2) {
              return typeof t2;
            } : t.exports = n = function(t2) {
              return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
            }, n(e2);
          }
          t.exports = n;
        }, function(t) {
          t.exports = JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}');
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(5), n(6), n(4), n(146)], (i = typeof (o = function(t2, e2, o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            function c() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t3) {
                return false;
              }
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CriticalError = void 0, e2 = s(e2), o2 = s(o2), r2 = s(r2), i2 = s(i2);
            var l = function(t3) {
              (0, o2.default)(s2, t3);
              var n2, a2 = (n2 = s2, function() {
                var t4, e3 = (0, i2.default)(n2);
                if (c()) {
                  var o3 = (0, i2.default)(this).constructor;
                  t4 = Reflect.construct(e3, arguments, o3);
                } else
                  t4 = e3.apply(this, arguments);
                return (0, r2.default)(this, t4);
              });
              function s2() {
                return (0, e2.default)(this, s2), a2.apply(this, arguments);
              }
              return s2;
            }((0, (a = s(a)).default)(Error));
            t2.CriticalError = l, l.displayName = "CriticalError";
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o = n(4), r = n(107), i = n(369), a = n(370);
          function s(e2) {
            var n2 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
            return t.exports = s = function(t2) {
              if (t2 === null || !i(t2))
                return t2;
              if (typeof t2 != "function")
                throw new TypeError("Super expression must either be null or a function");
              if (n2 !== void 0) {
                if (n2.has(t2))
                  return n2.get(t2);
                n2.set(t2, e3);
              }
              function e3() {
                return a(t2, arguments, o(this).constructor);
              }
              return e3.prototype = Object.create(t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), r(e3, t2);
            }, s(e2);
          }
          t.exports = s;
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(8), n(148), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f) {
            "use strict";
            var d = n(9), p = n(1);
            function h() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = p(r2), i2 = p(i2), a = p(a), s = p(s), c = p(c), l = d(l), u = p(u);
            var v = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (h()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).insert = function() {
                  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t3.config.defaultBlock, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o4 = (arguments.length > 2 && arguments[2] !== void 0 && arguments[2], arguments.length > 3 ? arguments[3] : void 0), r3 = arguments.length > 4 ? arguments[4] : void 0;
                  t3.Editor.BlockManager.insert({ tool: e3, data: n3, index: o4, needToFocus: r3 });
                }, t3;
              }
              return (0, i2.default)(o3, [{ key: "getBlocksCount", value: function() {
                return this.Editor.BlockManager.blocks.length;
              } }, { key: "getCurrentBlockIndex", value: function() {
                return this.Editor.BlockManager.currentBlockIndex;
              } }, { key: "getBlockByIndex", value: function(t3) {
                var e3 = this.Editor.BlockManager.getBlockByIndex(t3);
                if (e3 !== void 0)
                  return new u.default(e3);
                l.logLabeled("There is no block at index `" + t3 + "`", "warn");
              } }, { key: "swap", value: function(t3, e3) {
                l.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(t3, e3), this.Editor.Toolbar.move(false);
              } }, { key: "move", value: function(t3, e3) {
                this.Editor.BlockManager.move(t3, e3), this.Editor.Toolbar.move(false);
              } }, { key: "delete", value: function(t3) {
                try {
                  this.Editor.BlockManager.removeBlock(t3);
                } catch (t4) {
                  return void l.logLabeled(t4, "warn");
                }
                this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
              } }, { key: "clear", value: function() {
                this.Editor.BlockManager.clear(true), this.Editor.InlineToolbar.close();
              } }, { key: "render", value: function(t3) {
                return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t3.blocks);
              } }, { key: "renderFromHTML", value: function(t3) {
                return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t3, true);
              } }, { key: "stretchBlock", value: function(t3) {
                var e3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
                l.deprecationAssert(true, "blocks.stretchBlock()", "BlockAPI");
                var n3 = this.Editor.BlockManager.getBlockByIndex(t3);
                n3 && (n3.stretched = e3);
              } }, { key: "insertNewBlock", value: function() {
                l.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { clear: function() {
                  return t3.clear();
                }, render: function(e3) {
                  return t3.render(e3);
                }, renderFromHTML: function(e3) {
                  return t3.renderFromHTML(e3);
                }, delete: function(e3) {
                  return t3.delete(e3);
                }, swap: function(e3, n3) {
                  return t3.swap(e3, n3);
                }, move: function(e3, n3) {
                  return t3.move(e3, n3);
                }, getBlockByIndex: function(e3) {
                  return t3.getBlockByIndex(e3);
                }, getCurrentBlockIndex: function() {
                  return t3.getCurrentBlockIndex();
                }, getBlocksCount: function() {
                  return t3.getBlocksCount();
                }, stretchBlock: function(e3) {
                  var n3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
                  return t3.stretchBlock(e3, n3);
                }, insertNewBlock: function() {
                  return t3.insertNewBlock();
                }, insert: this.insert };
              } }]), o3;
            }((f = p(f)).default);
            o2.default = v, v.displayName = "BlocksAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e], (i = typeof (o = function(n2) {
            "use strict";
            Object.defineProperty(n2, "__esModule", { value: true }), n2.default = void 0;
            var o2 = function(t2) {
              var e2 = { get name() {
                return t2.name;
              }, get config() {
                return t2.config;
              }, get holder() {
                return t2.holder;
              }, get isEmpty() {
                return t2.isEmpty;
              }, get selected() {
                return t2.selected;
              }, set stretched(e3) {
                t2.stretched = e3;
              }, get stretched() {
                return t2.stretched;
              }, call: function(e3, n3) {
                return t2.call(e3, n3);
              }, save: function() {
                return t2.save();
              }, validate: function(e3) {
                return t2.validate(e3);
              } };
              Object.setPrototypeOf(this, e2);
            };
            n2.default = o2, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).setToFirstBlock = function() {
                  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                  return !!t3.Editor.BlockManager.firstBlock && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.firstBlock, e3, n3), true);
                }, t3.setToLastBlock = function() {
                  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                  return !!t3.Editor.BlockManager.lastBlock && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.lastBlock, e3, n3), true);
                }, t3.setToPreviousBlock = function() {
                  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                  return !!t3.Editor.BlockManager.previousBlock && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.previousBlock, e3, n3), true);
                }, t3.setToNextBlock = function() {
                  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                  return !!t3.Editor.BlockManager.nextBlock && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.nextBlock, e3, n3), true);
                }, t3.setToBlock = function(e3) {
                  var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t3.Editor.Caret.positions.DEFAULT, o4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                  return !!t3.Editor.BlockManager.blocks[e3] && (t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.blocks[e3], n3, o4), true);
                }, t3.focus = function() {
                  var e3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                  return e3 ? t3.setToLastBlock(t3.Editor.Caret.positions.END) : t3.setToFirstBlock(t3.Editor.Caret.positions.START);
                }, t3;
              }
              return (0, i2.default)(o3, [{ key: "methods", get: function() {
                return { setToFirstBlock: this.setToFirstBlock, setToLastBlock: this.setToLastBlock, setToPreviousBlock: this.setToPreviousBlock, setToNextBlock: this.setToNextBlock, setToBlock: this.setToBlock, focus: this.focus };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "CaretAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "on", value: function(t3, e3) {
                this.eventsDispatcher.on(t3, e3);
              } }, { key: "emit", value: function(t3, e3) {
                this.eventsDispatcher.emit(t3, e3);
              } }, { key: "off", value: function(t3, e3) {
                this.eventsDispatcher.off(t3, e3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { emit: function(e3, n3) {
                  return t3.emit(e3, n3);
                }, off: function(e3, n3) {
                  return t3.off(e3, n3);
                }, on: function(e3, n3) {
                  return t3.on(e3, n3);
                } };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "EventsAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(59), n(8), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f) {
            "use strict";
            var d = n(1);
            function p() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), c = d(c), l = d(l);
            var h = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (p()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "getMethodsForTool", value: function(t3) {
                return Object.assign(this.methods, { t: function(e3) {
                  return l.default.t(o3.getNamespace(t3), e3);
                } });
              } }, { key: "methods", get: function() {
                return { t: function() {
                  (0, u.logLabeled)("I18n.t() method can be accessed only from Tools", "warn");
                } };
              } }], [{ key: "getNamespace", value: function(t3) {
                return t3.isTune ? "blockTunes.".concat(t3.name) : "tools.".concat(t3.name);
              } }]), o3;
            }((f = d(f)).default);
            o2.default = h, h.displayName = "I18nAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "open", value: function() {
                this.Editor.InlineToolbar.tryToShow();
              } }, { key: "close", value: function() {
                this.Editor.InlineToolbar.close();
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { close: function() {
                  return t3.close();
                }, open: function() {
                  return t3.open();
                } };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "InlineToolbarAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "on", value: function(t3, e3, n3, o4) {
                this.listeners.on(t3, e3, n3, o4);
              } }, { key: "off", value: function(t3, e3, n3, o4) {
                this.listeners.off(t3, e3, n3, o4);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { on: function(e3, n3, o4, r3) {
                  return t3.on(e3, n3, o4, r3);
                }, off: function(e3, n3, o4, r3) {
                  return t3.off(e3, n3, o4, r3);
                } };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "ListenersAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "show", value: function(t3) {
                return this.Editor.Notifier.show(t3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { show: function(e3) {
                  return t3.show(e3);
                } };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "NotifierAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "toggle", value: function(t3) {
                return this.Editor.ReadOnly.toggle(t3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { toggle: function(e3) {
                  return t3.toggle(e3);
                } };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "ReadOnlyAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "clean", value: function(t3, e3) {
                return this.Editor.Sanitizer.clean(t3, e3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { clean: function(e3, n3) {
                  return t3.clean(e3, n3);
                } };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "SanitizerAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(8), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u) {
            "use strict";
            var f = n(9), d = n(1);
            function p() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), c = d(c), l = f(l);
            var h = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (p()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "save", value: function() {
                var t3 = "Editor's content can not be saved in read-only mode";
                return this.Editor.ReadOnly.isEnabled ? (l.logLabeled(t3, "warn"), Promise.reject(new Error(t3))) : this.Editor.Saver.save();
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { save: function() {
                  return t3.save();
                } };
              } }]), o3;
            }((u = d(u)).default);
            o2.default = h, h.displayName = "SaverAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(25), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u) {
            "use strict";
            var f = n(1);
            function d() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), c = f(c), l = f(l);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (d()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "findParentTag", value: function(t3, e3) {
                return new l.default().findParentTag(t3, e3);
              } }, { key: "expandToTag", value: function(t3) {
                new l.default().expandToTag(t3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { findParentTag: function(e3, n3) {
                  return t3.findParentTag(e3, n3);
                }, expandToTag: function(e3) {
                  return t3.expandToTag(e3);
                } };
              } }]), o3;
            }((u = f(u)).default);
            o2.default = p, p.displayName = "SelectionAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "classes", get: function() {
                return { block: "cdx-block", inlineToolButton: "ce-inline-tool", inlineToolButtonActive: "ce-inline-tool--active", input: "cdx-input", loader: "cdx-loader", button: "cdx-button", settingsButton: "cdx-settings-button", settingsButtonActive: "cdx-settings-button--active" };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "StylesAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u) {
            "use strict";
            var f = n(9), d = n(1);
            function p() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), c = d(c), l = d(l), u = f(u);
            var h = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (p()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "open", value: function() {
                this.Editor.Toolbar.open();
              } }, { key: "close", value: function() {
                this.Editor.Toolbar.close();
              } }, { key: "toggleBlockSettings", value: function(t3) {
                if (this.Editor.BlockManager.currentBlockIndex !== -1) {
                  var e3 = t3 != null ? t3 : !this.Editor.BlockSettings.opened;
                  t3 !== this.Editor.BlockSettings.opened && (e3 ? (this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(true, false), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close());
                } else
                  u.logLabeled("Could't toggle the Toolbar because there is no block selected ", "warn");
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { close: function() {
                  return t3.close();
                }, open: function() {
                  return t3.open();
                }, toggleBlockSettings: function(e3) {
                  return t3.toggleBlockSettings(e3);
                } };
              } }]), o3;
            }(l.default);
            o2.default = h, h.displayName = "ToolbarAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            function f() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = u(c);
            var d = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (f()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "show", value: function(t3, e3, n3) {
                this.Editor.Tooltip.show(t3, e3, n3);
              } }, { key: "hide", value: function() {
                this.Editor.Tooltip.hide();
              } }, { key: "onHover", value: function(t3, e3, n3) {
                this.Editor.Tooltip.onHover(t3, e3, n3);
              } }, { key: "methods", get: function() {
                var t3 = this;
                return { show: function(e3, n3, o4) {
                  return t3.show(e3, n3, o4);
                }, hide: function() {
                  return t3.hide();
                }, onHover: function(e3, n3, o4) {
                  return t3.onHover(e3, n3, o4);
                } };
              } }]), o3;
            }((l = u(l)).default);
            o2.default = d, d.displayName = "TooltipAPI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(7), n(8), n(25), n(60)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h) {
            "use strict";
            var v = n(9), y = n(1);
            function g() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = y(r2), i2 = y(i2), a = y(a), s = y(s), c = y(c), l = y(l), u = y(u), f = y(f), d = v(d), p = y(p), h = y(h);
            var b = function(t2) {
              (0, c.default)(f2, t2);
              var e2, n2, o3 = (e2 = f2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (g()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function f2() {
                return (0, a.default)(this, f2), o3.apply(this, arguments);
              }
              return (0, s.default)(f2, [{ key: "keydown", value: function(t3) {
                switch (this.beforeKeydownProcessing(t3), t3.keyCode) {
                  case d.keyCodes.BACKSPACE:
                    this.backspace(t3);
                    break;
                  case d.keyCodes.ENTER:
                    this.enter(t3);
                    break;
                  case d.keyCodes.DOWN:
                  case d.keyCodes.RIGHT:
                    this.arrowRightAndDown(t3);
                    break;
                  case d.keyCodes.UP:
                  case d.keyCodes.LEFT:
                    this.arrowLeftAndUp(t3);
                    break;
                  case d.keyCodes.TAB:
                    this.tabPressed(t3);
                }
              } }, { key: "beforeKeydownProcessing", value: function(t3) {
                this.needToolbarClosing(t3) && d.isPrintableKey(t3.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t3)));
              } }, { key: "keyup", value: function(t3) {
                t3.shiftKey || this.Editor.UI.checkEmptiness();
              } }, { key: "tabPressed", value: function(t3) {
                this.Editor.BlockSelection.clearSelection(t3);
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.InlineToolbar, r3 = e3.ConversionToolbar, i3 = n3.currentBlock;
                if (i3) {
                  var a2 = i3.tool.isDefault && i3.isEmpty, s2 = !i3.isEmpty && r3.opened, c2 = !i3.isEmpty && !p.default.isCollapsed && o4.opened;
                  a2 ? this.activateToolbox() : s2 || c2 || this.activateBlockSettings();
                }
              } }, { key: "dragOver", value: function(t3) {
                this.Editor.BlockManager.getBlockByChildNode(t3.target).dropTarget = true;
              } }, { key: "dragLeave", value: function(t3) {
                this.Editor.BlockManager.getBlockByChildNode(t3.target).dropTarget = false;
              } }, { key: "handleCommandC", value: function(t3) {
                var e3 = this.Editor.BlockSelection;
                if (e3.anyBlockSelected)
                  return e3.copySelectedBlocks(t3);
              } }, { key: "handleCommandX", value: (n2 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4, i3, a2, s2;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = this.Editor, o4 = n3.BlockSelection, i3 = n3.BlockManager, a2 = n3.Caret, o4.anyBlockSelected) {
                          t4.next = 3;
                          break;
                        }
                        return t4.abrupt("return");
                      case 3:
                        return t4.next = 5, o4.copySelectedBlocks(e3);
                      case 5:
                        s2 = i3.removeSelectedBlocks(), a2.setToBlock(i3.insertDefaultBlockAtIndex(s2, true), a2.positions.START), o4.clearSelection(e3);
                      case 8:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "enter", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.UI;
                if (!n3.currentBlock.tool.isLineBreaksEnabled && !(o4.someToolbarOpened && o4.someFlipperButtonFocused || t3.shiftKey)) {
                  var r3 = this.Editor.BlockManager.currentBlock;
                  this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : r3 = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r3), r3.tool.isDefault && r3.isEmpty && (this.Editor.Toolbar.open(false), this.Editor.Toolbar.plusButton.show()), t3.preventDefault();
                }
              } }, { key: "backspace", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.BlockSelection, r3 = e3.Caret, i3 = n3.currentBlock, a2 = i3.tool;
                if (i3.selected || i3.isEmpty && i3.currentInput === i3.firstInput) {
                  t3.preventDefault();
                  var s2 = n3.currentBlockIndex;
                  return n3.previousBlock && n3.previousBlock.inputs.length === 0 ? n3.removeBlock(s2 - 1) : n3.removeBlock(), r3.setToBlock(n3.currentBlock, s2 ? r3.positions.END : r3.positions.START), this.Editor.Toolbar.close(), void o4.clearSelection(t3);
                }
                if (!a2.isLineBreaksEnabled || r3.isAtStart) {
                  var c2 = n3.currentBlockIndex === 0;
                  r3.isAtStart && p.default.isCollapsed && i3.currentInput === i3.firstInput && !c2 && (t3.preventDefault(), this.mergeBlocks());
                }
              } }, { key: "mergeBlocks", value: function() {
                var t3 = this.Editor, e3 = t3.BlockManager, n3 = t3.Caret, o4 = t3.Toolbar, r3 = e3.previousBlock, i3 = e3.currentBlock;
                if (i3.name !== r3.name || !r3.mergeable)
                  return r3.inputs.length === 0 || r3.isEmpty ? (e3.removeBlock(e3.currentBlockIndex - 1), n3.setToBlock(e3.currentBlock), void o4.close()) : void (n3.navigatePrevious() && o4.close());
                n3.createShadow(r3.pluginsContent), e3.mergeBlocks(r3, i3).then(function() {
                  n3.restoreCaret(r3.pluginsContent), r3.pluginsContent.normalize(), o4.close();
                });
              } }, { key: "arrowRightAndDown", value: function(t3) {
                var e3 = this, n3 = h.default.usedKeys.includes(t3.keyCode) && (!t3.shiftKey || t3.keyCode === d.keyCodes.TAB);
                if (!this.Editor.UI.someToolbarOpened || !n3) {
                  this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                  var o4 = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                  t3.shiftKey && t3.keyCode === d.keyCodes.DOWN && o4 ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : ((t3.keyCode === d.keyCodes.DOWN || t3.keyCode === d.keyCodes.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? t3.preventDefault() : d.delay(function() {
                    e3.Editor.BlockManager.currentBlock && e3.Editor.BlockManager.currentBlock.updateCurrentInput();
                  }, 20)(), this.Editor.BlockSelection.clearSelection(t3));
                }
              } }, { key: "arrowLeftAndUp", value: function(t3) {
                var e3 = this;
                if (this.Editor.UI.someToolbarOpened) {
                  if (h.default.usedKeys.includes(t3.keyCode) && (!t3.shiftKey || t3.keyCode === d.keyCodes.TAB))
                    return;
                  this.Editor.UI.closeAllToolbars();
                }
                this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                var n3 = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                t3.shiftKey && t3.keyCode === d.keyCodes.UP && n3 ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(false) : ((t3.keyCode === d.keyCodes.UP || t3.keyCode === d.keyCodes.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? t3.preventDefault() : d.delay(function() {
                  e3.Editor.BlockManager.currentBlock && e3.Editor.BlockManager.currentBlock.updateCurrentInput();
                }, 20)(), this.Editor.BlockSelection.clearSelection(t3));
              } }, { key: "needToolbarClosing", value: function(t3) {
                var e3 = t3.keyCode === d.keyCodes.ENTER && this.Editor.Toolbox.opened, n3 = t3.keyCode === d.keyCodes.ENTER && this.Editor.BlockSettings.opened, o4 = t3.keyCode === d.keyCodes.ENTER && this.Editor.InlineToolbar.opened, r3 = t3.keyCode === d.keyCodes.ENTER && this.Editor.ConversionToolbar.opened, i3 = t3.keyCode === d.keyCodes.TAB;
                return !(t3.shiftKey || i3 || e3 || n3 || o4 || r3);
              } }, { key: "activateToolbox", value: function() {
                this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(false, false), this.Editor.Toolbar.plusButton.show()), this.Editor.Toolbox.open();
              } }, { key: "activateBlockSettings", value: function() {
                this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = true, this.Editor.Toolbar.open(true, false), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
              } }]), f2;
            }(f.default);
            o2.default = b, b.displayName = "BlockEvents", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(61), n(7), n(15), n(8), n(376)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h, v) {
            "use strict";
            var y = n(9), g = n(1);
            function b() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = g(r2), i2 = g(i2), a = g(a), s = g(s), c = g(c), l = g(l), u = g(u), f = y(f), d = g(d), p = g(p), h = y(h), v = g(v);
            var m = function(t2) {
              (0, c.default)(y2, t2);
              var e2, n2, o3, d2 = (e2 = y2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (b()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function y2() {
                var t3;
                return (0, a.default)(this, y2), (t3 = d2.apply(this, arguments))._currentBlockIndex = -1, t3._blocks = null, t3;
              }
              return (0, s.default)(y2, [{ key: "prepare", value: function() {
                var t3 = this, e3 = new v.default(this.Editor.UI.nodes.redactor);
                this._blocks = new Proxy(e3, { set: v.default.set, get: v.default.get }), this.listeners.on(document, "copy", function(e4) {
                  return t3.Editor.BlockEvents.handleCommandC(e4);
                });
              } }, { key: "toggleReadOnly", value: function(t3) {
                t3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "composeBlock", value: function(t3) {
                var e3 = t3.tool, n3 = t3.data, o4 = n3 === void 0 ? {} : n3, r3 = t3.tunes, i3 = r3 === void 0 ? {} : r3, a2 = this.Editor.ReadOnly.isEnabled, s2 = this.Editor.Tools.blockTools.get(e3), c2 = this.Editor.Tools.getTunesForTool(s2), l2 = new f.default({ data: o4, tool: s2, api: this.Editor.API, readOnly: a2, tunes: c2, tunesData: i3 });
                return a2 || this.bindBlockEvents(l2), l2;
              } }, { key: "insert", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e3 = t3.tool, n3 = e3 === void 0 ? this.config.defaultBlock : e3, o4 = t3.data, r3 = o4 === void 0 ? {} : o4, i3 = t3.index, a2 = t3.needToFocus, s2 = a2 === void 0 || a2, c2 = t3.replace, l2 = c2 !== void 0 && c2, u2 = t3.tunes, f2 = u2 === void 0 ? {} : u2, d3 = i3;
                d3 === void 0 && (d3 = this.currentBlockIndex + (l2 ? 0 : 1));
                var p2 = this.composeBlock({ tool: n3, data: r3, tunes: f2 });
                return this._blocks.insert(d3, p2, l2), s2 ? this.currentBlockIndex = d3 : d3 <= this.currentBlockIndex && this.currentBlockIndex++, p2;
              } }, { key: "replace", value: function(t3) {
                var e3 = t3.tool, n3 = e3 === void 0 ? this.config.defaultBlock : e3, o4 = t3.data, r3 = o4 === void 0 ? {} : o4;
                return this.insert({ tool: n3, data: r3, index: this.currentBlockIndex, replace: true });
              } }, { key: "paste", value: function(t3, e3) {
                var n3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o4 = this.insert({ tool: t3, replace: n3 });
                try {
                  o4.call(f.BlockToolAPI.ON_PASTE, e3);
                } catch (e4) {
                  h.log("".concat(t3, ": onPaste callback call is failed"), "error", e4);
                }
                return o4;
              } }, { key: "insertDefaultBlockAtIndex", value: function(t3) {
                var e3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n3 = this.composeBlock({ tool: this.config.defaultBlock });
                return this._blocks[t3] = n3, e3 ? this.currentBlockIndex = t3 : t3 <= this.currentBlockIndex && this.currentBlockIndex++, n3;
              } }, { key: "insertAtEnd", value: function() {
                return this.currentBlockIndex = this.blocks.length - 1, this.insert();
              } }, { key: "mergeBlocks", value: (o3 = (0, i2.default)(r2.default.mark(function t3(e3, n3) {
                var o4, i3;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (o4 = this._blocks.indexOf(n3), !n3.isEmpty) {
                          t4.next = 3;
                          break;
                        }
                        return t4.abrupt("return");
                      case 3:
                        return t4.next = 5, n3.data;
                      case 5:
                        if (i3 = t4.sent, h.isEmpty(i3)) {
                          t4.next = 9;
                          break;
                        }
                        return t4.next = 9, e3.mergeWith(i3);
                      case 9:
                        this.removeBlock(o4), this.currentBlockIndex = this._blocks.indexOf(e3);
                      case 11:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3, e3) {
                return o3.apply(this, arguments);
              }) }, { key: "removeBlock", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.currentBlockIndex;
                if (!this.validateIndex(t3))
                  throw new Error("Can't find a Block to remove");
                this._blocks.remove(t3), this.currentBlockIndex >= t3 && this.currentBlockIndex--, this.blocks.length ? t3 === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
              } }, { key: "removeSelectedBlocks", value: function() {
                for (var t3, e3 = this.blocks.length - 1; e3 >= 0; e3--)
                  this.blocks[e3].selected && (this.removeBlock(e3), t3 = e3);
                return t3;
              } }, { key: "removeAllBlocks", value: function() {
                for (var t3 = this.blocks.length - 1; t3 >= 0; t3--)
                  this._blocks.remove(t3);
                this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
              } }, { key: "split", value: function() {
                var t3 = this.Editor.Caret.extractFragmentFromCaretPosition(), e3 = p.default.make("div");
                e3.appendChild(t3);
                var n3 = { text: p.default.isEmpty(e3) ? "" : e3.innerHTML };
                return this.insert({ data: n3 });
              } }, { key: "getBlockByIndex", value: function(t3) {
                return this._blocks[t3];
              } }, { key: "getBlock", value: function(t3) {
                p.default.isElement(t3) || (t3 = t3.parentNode);
                var e3 = this._blocks.nodes, n3 = t3.closest(".".concat(f.default.CSS.wrapper)), o4 = e3.indexOf(n3);
                if (o4 >= 0)
                  return this._blocks[o4];
              } }, { key: "highlightCurrentNode", value: function() {
                this.clearFocused(), this.currentBlock.focused = true;
              } }, { key: "clearFocused", value: function() {
                this.blocks.forEach(function(t3) {
                  t3.focused = false;
                });
              } }, { key: "setCurrentBlockByChildNode", value: function(t3) {
                p.default.isElement(t3) || (t3 = t3.parentNode);
                var e3 = t3.closest(".".concat(f.default.CSS.wrapper));
                if (e3) {
                  var n3 = e3.closest(".".concat(this.Editor.UI.CSS.editorWrapper));
                  if (n3 == null ? void 0 : n3.isEqualNode(this.Editor.UI.nodes.wrapper))
                    return this.currentBlockIndex = this._blocks.nodes.indexOf(e3), this.currentBlock.updateCurrentInput(), this.currentBlock;
                }
              } }, { key: "getBlockByChildNode", value: function(t3) {
                p.default.isElement(t3) || (t3 = t3.parentNode);
                var e3 = t3.closest(".".concat(f.default.CSS.wrapper));
                return this.blocks.find(function(t4) {
                  return t4.holder === e3;
                });
              } }, { key: "swap", value: function(t3, e3) {
                this._blocks.swap(t3, e3), this.currentBlockIndex = e3;
              } }, { key: "move", value: function(t3) {
                var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.currentBlockIndex;
                isNaN(t3) || isNaN(e3) ? h.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(t3) && this.validateIndex(e3) ? (this._blocks.move(t3, e3), this.currentBlockIndex = t3) : h.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
              } }, { key: "dropPointer", value: function() {
                this.currentBlockIndex = -1, this.clearFocused();
              } }, { key: "clear", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                this._blocks.removeAll(), this.dropPointer(), t3 && this.insert(), this.Editor.UI.checkEmptiness();
              } }, { key: "destroy", value: (n2 = (0, i2.default)(r2.default.mark(function t3() {
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return t4.next = 2, Promise.all(this.blocks.map(function(t5) {
                          return t5.destroy();
                        }));
                      case 2:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "bindBlockEvents", value: function(t3) {
                var e3 = this.Editor.BlockEvents;
                this.readOnlyMutableListeners.on(t3.holder, "keydown", function(t4) {
                  e3.keydown(t4);
                }), this.readOnlyMutableListeners.on(t3.holder, "keyup", function(t4) {
                  e3.keyup(t4);
                }), this.readOnlyMutableListeners.on(t3.holder, "dragover", function(t4) {
                  e3.dragOver(t4);
                }), this.readOnlyMutableListeners.on(t3.holder, "dragleave", function(t4) {
                  e3.dragLeave(t4);
                });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this;
                this.readOnlyMutableListeners.on(document, "cut", function(e3) {
                  return t3.Editor.BlockEvents.handleCommandX(e3);
                }), this.blocks.forEach(function(e3) {
                  t3.bindBlockEvents(e3);
                });
              } }, { key: "validateIndex", value: function(t3) {
                return !(t3 < 0 || t3 >= this._blocks.length);
              } }, { key: "currentBlockIndex", get: function() {
                return this._currentBlockIndex;
              }, set: function(t3) {
                this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t3] && this._blocks[t3].willSelect(), this._currentBlockIndex = t3;
              } }, { key: "firstBlock", get: function() {
                return this._blocks[0];
              } }, { key: "lastBlock", get: function() {
                return this._blocks[this._blocks.length - 1];
              } }, { key: "currentBlock", get: function() {
                return this._blocks[this.currentBlockIndex];
              } }, { key: "nextBlock", get: function() {
                return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
              } }, { key: "nextContentfulBlock", get: function() {
                return this.blocks.slice(this.currentBlockIndex + 1).find(function(t3) {
                  return !!t3.inputs.length;
                });
              } }, { key: "previousContentfulBlock", get: function() {
                return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function(t3) {
                  return !!t3.inputs.length;
                });
              } }, { key: "previousBlock", get: function() {
                return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
              } }, { key: "blocks", get: function() {
                return this._blocks.array;
              } }, { key: "isEditorEmpty", get: function() {
                return this.blocks.every(function(t3) {
                  return t3.isEmpty;
                });
              } }]), y2;
            }(d.default);
            o2.default = m, m.displayName = "BlockManager", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(7), n(8), n(15), n(108), n(25)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h, v) {
            "use strict";
            var y = n(9), g = n(1);
            function b() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = g(r2), i2 = g(i2), a = g(a), s = g(s), c = g(c), l = g(l), u = g(u), f = g(f), d = y(d), p = g(p), h = g(h), v = g(v);
            var m = function(t2) {
              (0, c.default)(f2, t2);
              var e2, n2, o3 = (e2 = f2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (b()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function f2() {
                var t3;
                return (0, a.default)(this, f2), (t3 = o3.apply(this, arguments)).anyBlockSelectedCache = null, t3.needToSelectAll = false, t3.nativeInputSelected = false, t3.readyToBlockSelection = false, t3;
              }
              return (0, s.default)(f2, [{ key: "prepare", value: function() {
                var t3 = this;
                this.selection = new v.default(), h.default.add({ name: "CMD+A", handler: function(e3) {
                  var n3 = t3.Editor, o4 = n3.BlockManager;
                  if (n3.ReadOnly.isEnabled)
                    return e3.preventDefault(), void t3.selectAllBlocks();
                  o4.currentBlock && t3.handleCommandA(e3);
                }, on: this.Editor.UI.nodes.redactor });
              } }, { key: "toggleReadOnly", value: function(t3) {
                v.default.get().removeAllRanges(), this.allBlocksSelected = false;
              } }, { key: "unSelectBlockByIndex", value: function(t3) {
                var e3 = this.Editor.BlockManager;
                (isNaN(t3) ? e3.currentBlock : e3.getBlockByIndex(t3)).selected = false, this.clearCache();
              } }, { key: "clearSelection", value: function(t3) {
                var e3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n3 = this.Editor, o4 = n3.BlockManager, r3 = n3.Caret, i3 = n3.RectangleSelection;
                this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
                var a2 = t3 && t3 instanceof KeyboardEvent, s2 = a2 && d.isPrintableKey(t3.keyCode);
                if (this.anyBlockSelected && a2 && s2 && !v.default.isSelectionExists) {
                  var c2 = o4.removeSelectedBlocks();
                  o4.insertDefaultBlockAtIndex(c2, true), r3.setToBlock(o4.currentBlock), d.delay(function() {
                    var e4 = t3.key;
                    r3.insertContentAtCaretPosition(e4.length > 1 ? "" : e4);
                  }, 20)();
                }
                this.Editor.CrossBlockSelection.clear(t3), this.anyBlockSelected && !i3.isRectActivated() ? (e3 && this.selection.restore(), this.allBlocksSelected = false) : this.Editor.RectangleSelection.clearSelection();
              } }, { key: "copySelectedBlocks", value: (n2 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4, i3, a2, s2 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return e3.preventDefault(), n3 = p.default.make("div"), this.selectedBlocks.forEach(function(t5) {
                          var e4 = s2.Editor.Sanitizer.clean(t5.holder.innerHTML, s2.sanitizerConfig), o5 = p.default.make("p");
                          o5.innerHTML = e4, n3.appendChild(o5);
                        }), t4.next = 5, Promise.all(this.selectedBlocks.map(function(t5) {
                          return t5.save();
                        }));
                      case 5:
                        o4 = t4.sent, i3 = Array.from(n3.childNodes).map(function(t5) {
                          return t5.textContent;
                        }).join("\n\n"), a2 = n3.innerHTML, e3.clipboardData.setData("text/plain", i3), e3.clipboardData.setData("text/html", a2), e3.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(o4));
                      case 11:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "selectBlockByIndex", value: function(t3) {
                var e3, n3 = this.Editor.BlockManager;
                n3.clearFocused(), e3 = isNaN(t3) ? n3.currentBlock : n3.getBlockByIndex(t3), this.selection.save(), v.default.get().removeAllRanges(), e3.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
              } }, { key: "clearCache", value: function() {
                this.anyBlockSelectedCache = null;
              } }, { key: "destroy", value: function() {
                h.default.remove(this.Editor.UI.nodes.redactor, "CMD+A");
              } }, { key: "handleCommandA", value: function(t3) {
                if (this.Editor.RectangleSelection.clearSelection(), !p.default.isNativeInput(t3.target) || this.readyToBlockSelection) {
                  var e3 = this.Editor.BlockManager.getBlock(t3.target).inputs;
                  e3.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = true : e3.length !== 1 || this.needToSelectAll ? this.needToSelectAll ? (t3.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (t3.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = true) : this.needToSelectAll = true;
                } else
                  this.readyToBlockSelection = true;
              } }, { key: "selectAllBlocks", value: function() {
                this.selection.save(), v.default.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
              } }, { key: "sanitizerConfig", get: function() {
                return { p: {}, h1: {}, h2: {}, h3: {}, h4: {}, h5: {}, h6: {}, ol: {}, ul: {}, li: {}, br: true, img: { src: true, width: true, height: true }, a: { href: true }, b: {}, i: {}, u: {} };
              } }, { key: "allBlocksSelected", get: function() {
                return this.Editor.BlockManager.blocks.every(function(t3) {
                  return t3.selected === true;
                });
              }, set: function(t3) {
                this.Editor.BlockManager.blocks.forEach(function(e3) {
                  e3.selected = t3;
                }), this.clearCache();
              } }, { key: "anyBlockSelected", get: function() {
                var t3 = this.Editor.BlockManager;
                return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = t3.blocks.some(function(t4) {
                  return t4.selected === true;
                })), this.anyBlockSelectedCache;
              } }, { key: "selectedBlocks", get: function() {
                return this.Editor.BlockManager.blocks.filter(function(t3) {
                  return t3.selected;
                });
              } }]), f2;
            }(f.default);
            o2.default = m, m.displayName = "BlockSelection", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(25), n(7), n(15), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(9), h = n(1);
            function v() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), c = h(c), l = h(l), u = h(u), f = h(f), d = p(d);
            var y = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (v()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "setToBlock", value: function(t3) {
                var e3, n3 = this, o4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.positions.DEFAULT, r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i3 = this.Editor.BlockManager;
                switch (o4) {
                  case this.positions.START:
                    e3 = t3.firstInput;
                    break;
                  case this.positions.END:
                    e3 = t3.lastInput;
                    break;
                  default:
                    e3 = t3.currentInput;
                }
                if (e3) {
                  var a2 = f.default.getDeepestNode(e3, o4 === this.positions.END), s2 = f.default.getContentLength(a2);
                  switch (true) {
                    case o4 === this.positions.START:
                      r3 = 0;
                      break;
                    case o4 === this.positions.END:
                    case r3 > s2:
                      r3 = s2;
                  }
                  d.delay(function() {
                    n3.set(a2, r3);
                  }, 20)(), i3.setCurrentBlockByChildNode(t3.holder), i3.currentBlock.currentInput = e3;
                }
              } }, { key: "setToInput", value: function(t3) {
                var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.positions.DEFAULT, n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o4 = this.Editor.BlockManager.currentBlock, r3 = f.default.getDeepestNode(t3);
                switch (e3) {
                  case this.positions.START:
                    this.set(r3, 0);
                    break;
                  case this.positions.END:
                    this.set(r3, f.default.getContentLength(r3));
                    break;
                  default:
                    n3 && this.set(r3, n3);
                }
                o4.currentInput = t3;
              } }, { key: "set", value: function(t3) {
                var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n3 = l.default.setCursor(t3, e3), o4 = n3.top, r3 = n3.bottom, i3 = window, a2 = i3.innerHeight;
                o4 < 0 && window.scrollBy(0, o4), r3 > a2 && window.scrollBy(0, r3 - a2);
              } }, { key: "setToTheLastBlock", value: function() {
                var t3 = this.Editor.BlockManager.lastBlock;
                if (t3)
                  if (t3.tool.isDefault && t3.isEmpty)
                    this.setToBlock(t3);
                  else {
                    var e3 = this.Editor.BlockManager.insertAtEnd();
                    this.setToBlock(e3);
                  }
              } }, { key: "extractFragmentFromCaretPosition", value: function() {
                var t3 = l.default.get();
                if (t3.rangeCount) {
                  var e3 = t3.getRangeAt(0), n3 = this.Editor.BlockManager.currentBlock.currentInput;
                  if (e3.deleteContents(), n3) {
                    if (f.default.isNativeInput(n3)) {
                      var o4 = n3, r3 = document.createDocumentFragment(), i3 = o4.value.substring(0, o4.selectionStart), a2 = o4.value.substring(o4.selectionStart);
                      return r3.textContent = a2, o4.value = i3, r3;
                    }
                    var s2 = e3.cloneRange();
                    return s2.selectNodeContents(n3), s2.setStart(e3.endContainer, e3.endOffset), s2.extractContents();
                  }
                }
              } }, { key: "navigateNext", value: function() {
                var t3 = this.Editor, e3 = t3.BlockManager, n3 = (t3.Tools, e3.currentBlock), o4 = e3.nextContentfulBlock, r3 = n3.nextInput, i3 = this.isAtEnd, a2 = o4;
                if (!a2 && !r3) {
                  if (n3.tool.isDefault || !i3)
                    return false;
                  a2 = e3.insertAtEnd();
                }
                return !!i3 && (r3 ? this.setToInput(r3, this.positions.START) : this.setToBlock(a2, this.positions.START), true);
              } }, { key: "navigatePrevious", value: function() {
                var t3 = this.Editor.BlockManager, e3 = t3.currentBlock, n3 = t3.previousContentfulBlock;
                if (!e3)
                  return false;
                var o4 = e3.previousInput;
                return !(!n3 && !o4 || !this.isAtStart || (o4 ? this.setToInput(o4, this.positions.END) : this.setToBlock(n3, this.positions.END), 0));
              } }, { key: "createShadow", value: function(t3) {
                var e3 = document.createElement("span");
                e3.classList.add(o3.CSS.shadowCaret), t3.insertAdjacentElement("beforeend", e3);
              } }, { key: "restoreCaret", value: function(t3) {
                var e3 = t3.querySelector(".".concat(o3.CSS.shadowCaret));
                e3 && (new l.default().expandToTag(e3), setTimeout(function() {
                  var t4 = document.createRange();
                  t4.selectNode(e3), t4.extractContents();
                }, 50));
              } }, { key: "insertContentAtCaretPosition", value: function(t3) {
                var e3 = document.createDocumentFragment(), n3 = document.createElement("div"), o4 = l.default.get(), r3 = l.default.range;
                n3.innerHTML = t3, Array.from(n3.childNodes).forEach(function(t4) {
                  return e3.appendChild(t4);
                }), e3.childNodes.length === 0 && e3.appendChild(new Text(""));
                var i3 = e3.lastChild;
                r3.deleteContents(), r3.insertNode(e3);
                var a2 = document.createRange();
                a2.setStart(i3, i3.textContent.length), o4.removeAllRanges(), o4.addRange(a2);
              } }, { key: "getHigherLevelSiblings", value: function(t3, e3) {
                for (var n3 = t3, o4 = []; n3.parentNode && n3.parentNode.contentEditable !== "true"; )
                  n3 = n3.parentNode;
                for (var r3 = e3 === "left" ? "previousSibling" : "nextSibling"; n3[r3]; )
                  n3 = n3[r3], o4.push(n3);
                return o4;
              } }, { key: "positions", get: function() {
                return { START: "start", END: "end", DEFAULT: "default" };
              } }, { key: "isAtStart", get: function() {
                var t3 = l.default.get(), e3 = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput), n3 = t3.focusNode;
                if (f.default.isNativeInput(e3))
                  return e3.selectionEnd === 0;
                if (!t3.anchorNode)
                  return false;
                var o4 = n3.textContent.search(/\S/);
                o4 === -1 && (o4 = 0);
                var r3 = t3.focusOffset;
                return n3.nodeType !== Node.TEXT_NODE && n3.childNodes.length && (n3.childNodes[r3] ? (n3 = n3.childNodes[r3], r3 = 0) : r3 = (n3 = n3.childNodes[r3 - 1]).textContent.length), !(!f.default.isLineBreakTag(e3) && !f.default.isEmpty(e3) || !this.getHigherLevelSiblings(n3, "left").every(function(t4) {
                  var e4 = f.default.isLineBreakTag(t4), n4 = t4.children.length === 1 && f.default.isLineBreakTag(t4.children[0]), o5 = e4 || n4;
                  return f.default.isEmpty(t4) && !o5;
                }) || r3 !== o4) || (e3 === null || n3 === e3 && r3 <= o4);
              } }, { key: "isAtEnd", get: function() {
                var t3 = l.default.get(), e3 = t3.focusNode, n3 = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, true);
                if (f.default.isNativeInput(n3))
                  return n3.selectionEnd === n3.value.length;
                if (!t3.focusNode)
                  return false;
                var o4 = t3.focusOffset;
                if (e3.nodeType !== Node.TEXT_NODE && e3.childNodes.length && (e3.childNodes[o4 - 1] ? o4 = (e3 = e3.childNodes[o4 - 1]).textContent.length : (e3 = e3.childNodes[0], o4 = 0)), f.default.isLineBreakTag(n3) || f.default.isEmpty(n3)) {
                  var r3 = this.getHigherLevelSiblings(e3, "right");
                  if (r3.every(function(t4, e4) {
                    return e4 === r3.length - 1 && f.default.isLineBreakTag(t4) || f.default.isEmpty(t4) && !f.default.isLineBreakTag(t4);
                  }) && o4 === e3.textContent.length)
                    return true;
                }
                var i3 = n3.textContent.replace(/\s+$/, "");
                return e3 === n3 && o4 >= i3.length;
              } }], [{ key: "CSS", get: function() {
                return { shadowCaret: "cdx-shadow-caret" };
              } }]), o3;
            }(u.default);
            o2.default = y, y.displayName = "Caret", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(7), n(25), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p) {
            "use strict";
            var h = n(9), v = n(1);
            function y() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), a = v(a), s = v(s), c = v(c), l = v(l), u = v(u), f = v(f), d = v(d), p = h(p);
            var g = function(t2) {
              (0, c.default)(f2, t2);
              var e2, n2, o3 = (e2 = f2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (y()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function f2() {
                var t3;
                return (0, a.default)(this, f2), (t3 = o3.apply(this, arguments)).onMouseUp = function() {
                  t3.listeners.off(document, "mouseover", t3.onMouseOver), t3.listeners.off(document, "mouseup", t3.onMouseUp);
                }, t3.onMouseOver = function(e3) {
                  var n3 = t3.Editor, o4 = n3.BlockManager, r3 = n3.BlockSelection, i3 = o4.getBlockByChildNode(e3.relatedTarget) || t3.lastSelectedBlock, a2 = o4.getBlockByChildNode(e3.target);
                  if (i3 && a2 && a2 !== i3) {
                    if (i3 === t3.firstSelectedBlock)
                      return d.default.get().removeAllRanges(), i3.selected = true, a2.selected = true, void r3.clearCache();
                    if (a2 === t3.firstSelectedBlock)
                      return i3.selected = false, a2.selected = false, void r3.clearCache();
                    t3.Editor.InlineToolbar.close(), t3.toggleBlocksSelectedState(i3, a2), t3.lastSelectedBlock = a2;
                  }
                }, t3;
              }
              return (0, s.default)(f2, [{ key: "prepare", value: (n2 = (0, i2.default)(r2.default.mark(function t3() {
                var e3 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        this.listeners.on(document, "mousedown", function(t5) {
                          e3.enableCrossBlockSelection(t5);
                        });
                      case 1:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "watchSelection", value: function(t3) {
                if (t3.button === p.mouseButtons.LEFT) {
                  var e3 = this.Editor.BlockManager;
                  this.firstSelectedBlock = e3.getBlock(t3.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
                }
              } }, { key: "toggleBlockSelectedState", value: function() {
                var t3 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.BlockSelection;
                this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = n3.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o4.clearCache(), d.default.get().removeAllRanges());
                var r3 = n3.blocks.indexOf(this.lastSelectedBlock) + (t3 ? 1 : -1), i3 = n3.blocks[r3];
                i3 && (this.lastSelectedBlock.selected !== i3.selected ? (i3.selected = true, o4.clearCache()) : (this.lastSelectedBlock.selected = false, o4.clearCache()), this.lastSelectedBlock = i3, this.Editor.InlineToolbar.close(), i3.holder.scrollIntoView({ block: "nearest" }));
              } }, { key: "clear", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.BlockSelection, r3 = e3.Caret, i3 = n3.blocks.indexOf(this.firstSelectedBlock), a2 = n3.blocks.indexOf(this.lastSelectedBlock);
                if (o4.anyBlockSelected && i3 > -1 && a2 > -1)
                  if (t3 && t3 instanceof KeyboardEvent)
                    switch (t3.keyCode) {
                      case p.keyCodes.DOWN:
                      case p.keyCodes.RIGHT:
                        r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                        break;
                      case p.keyCodes.UP:
                      case p.keyCodes.LEFT:
                        r3.setToBlock(n3.blocks[Math.min(i3, a2)], r3.positions.START);
                        break;
                      default:
                        r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                    }
                  else
                    r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                this.firstSelectedBlock = this.lastSelectedBlock = null;
              } }, { key: "enableCrossBlockSelection", value: function(t3) {
                var e3 = this.Editor.UI;
                d.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t3), e3.nodes.redactor.contains(t3.target) ? this.watchSelection(t3) : this.Editor.BlockSelection.clearSelection(t3);
              } }, { key: "toggleBlocksSelectedState", value: function(t3, e3) {
                for (var n3 = this.Editor, o4 = n3.BlockManager, r3 = n3.BlockSelection, i3 = o4.blocks.indexOf(t3), a2 = o4.blocks.indexOf(e3), s2 = t3.selected !== e3.selected, c2 = Math.min(i3, a2); c2 <= Math.max(i3, a2); c2++) {
                  var l2 = o4.blocks[c2];
                  l2 !== this.firstSelectedBlock && l2 !== (s2 ? t3 : e3) && (o4.blocks[c2].selected = !o4.blocks[c2].selected, r3.clearCache());
                }
              } }, { key: "isCrossBlockSelectionStarted", get: function() {
                return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
              } }]), f2;
            }(f.default);
            o2.default = g, g.displayName = "CrossBlockSelection", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(25), n(7)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(1);
            function h() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = p(r2), i2 = p(i2), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f);
            var v = function(t2) {
              (0, c.default)(d2, t2);
              var e2, n2, o3 = (e2 = d2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (h()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function d2() {
                var t3;
                return (0, a.default)(this, d2), (t3 = o3.apply(this, arguments)).isStartedAtEditor = false, t3;
              }
              return (0, s.default)(d2, [{ key: "toggleReadOnly", value: function(t3) {
                t3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this, e3 = this.Editor.UI;
                this.readOnlyMutableListeners.on(e3.nodes.holder, "drop", function() {
                  var e4 = (0, i2.default)(r2.default.mark(function e5(n3) {
                    return r2.default.wrap(function(e6) {
                      for (; ; )
                        switch (e6.prev = e6.next) {
                          case 0:
                            return e6.next = 2, t3.processDrop(n3);
                          case 2:
                          case "end":
                            return e6.stop();
                        }
                    }, e5);
                  }));
                  return function(t4) {
                    return e4.apply(this, arguments);
                  };
                }(), true), this.readOnlyMutableListeners.on(e3.nodes.holder, "dragstart", function() {
                  t3.processDragStart();
                }), this.readOnlyMutableListeners.on(e3.nodes.holder, "dragover", function(e4) {
                  t3.processDragOver(e4);
                }, true);
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "processDrop", value: (n2 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4, i3, a2, s2, c2;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return n3 = this.Editor, o4 = n3.BlockManager, i3 = n3.Caret, a2 = n3.Paste, e3.preventDefault(), o4.blocks.forEach(function(t5) {
                          t5.dropTarget = false;
                        }), f.default.isAtEditor && !f.default.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false, (s2 = o4.setCurrentBlockByChildNode(e3.target)) ? this.Editor.Caret.setToBlock(s2, i3.positions.END) : (c2 = o4.setCurrentBlockByChildNode(o4.lastBlock.holder), this.Editor.Caret.setToBlock(c2, i3.positions.END)), t4.next = 9, a2.processDataTransfer(e3.dataTransfer, true);
                      case 9:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "processDragStart", value: function() {
                f.default.isAtEditor && !f.default.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
              } }, { key: "processDragOver", value: function(t3) {
                t3.preventDefault();
              } }]), d2;
            }((d = p(d)).default);
            o2.default = v, v.displayName = "DragNDrop", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(8), n(61)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f) {
            "use strict";
            var d = n(9), p = n(1);
            function h() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = p(r2), i2 = p(i2), a = p(a), s = p(s), c = p(c), l = p(l), u = d(u), f = p(f);
            var v = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (h()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).disabled = false, t3.mutationDebouncer = u.debounce(function() {
                  t3.updateNativeInputs(), u.isFunction(t3.config.onChange) && t3.config.onChange(t3.Editor.API.methods);
                }, o3.DebounceTimer), t3.nativeInputs = [], t3;
              }
              return (0, i2.default)(o3, [{ key: "destroy", value: function() {
                var t3 = this;
                this.mutationDebouncer = null, this.observer && this.observer.disconnect(), this.observer = null, this.nativeInputs.forEach(function(e3) {
                  return t3.listeners.off(e3, "input", t3.mutationDebouncer);
                }), this.mutationDebouncer = null;
              } }, { key: "toggleReadOnly", value: function(t3) {
                t3 ? this.disableModule() : this.enableModule();
              } }, { key: "disable", value: function() {
                this.disabled = true;
              } }, { key: "enable", value: function() {
                this.disabled = false;
              } }, { key: "setObserver", value: function() {
                var t3 = this, e3 = this.Editor.UI;
                this.observer = new MutationObserver(function(e4, n3) {
                  t3.mutationHandler(e4, n3);
                }), this.observer.observe(e3.nodes.redactor, { childList: true, attributes: true, subtree: true, characterData: true, characterDataOldValue: true });
              } }, { key: "mutationHandler", value: function(t3, e3) {
                if (!this.disabled) {
                  var n3 = false;
                  t3.forEach(function(t4) {
                    switch (t4.type) {
                      case "childList":
                      case "characterData":
                        n3 = true;
                        break;
                      case "attributes":
                        t4.target.classList.contains(f.default.CSS.wrapper) || (n3 = true);
                    }
                  }), n3 && this.mutationDebouncer();
                }
              } }, { key: "updateNativeInputs", value: function() {
                var t3 = this;
                this.nativeInputs && this.nativeInputs.forEach(function(e3) {
                  t3.listeners.off(e3, "input");
                }), this.nativeInputs = Array.from(this.Editor.UI.nodes.redactor.querySelectorAll("textarea, input, select")), this.nativeInputs.forEach(function(e3) {
                  return t3.listeners.on(e3, "input", t3.mutationDebouncer);
                });
              } }, { key: "enableModule", value: function() {
                var t3 = this;
                window.setTimeout(function() {
                  t3.setObserver(), t3.updateNativeInputs(), t3.enable();
                }, 1e3);
              } }, { key: "disableModule", value: function() {
                this.disable();
              } }]), o3;
            }(l.default);
            o2.default = v, v.displayName = "ModificationsObserver", v.DebounceTimer = 450, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(378)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u) {
            "use strict";
            var f = n(1);
            function d() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), c = f(c), l = f(l), u = f(u);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (d()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                return (0, r2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, i2.default)(o3, [{ key: "show", value: function(t3) {
                u.default.show(t3);
              } }]), o3;
            }(l.default);
            o2.default = p, p.displayName = "Notifier", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(42), n(29), n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(7), n(15), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h, v) {
            "use strict";
            var y = n(9), g = n(1);
            function b() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = g(r2), i2 = g(i2), a = g(a), s = g(s), c = g(c), l = g(l), u = g(u), f = g(f), d = g(d), p = g(p), h = g(h), v = y(v);
            var m = function(t2) {
              (0, u.default)(S, t2);
              var e2, n2, o3, p2, y2, g2, m2, k, x, w = (e2 = S, function() {
                var t3, n3 = (0, d.default)(e2);
                if (b()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function S() {
                var t3;
                return (0, c.default)(this, S), (t3 = w.apply(this, arguments)).MIME_TYPE = "application/x-editor-js", t3.toolsTags = {}, t3.tagsByTool = {}, t3.toolsPatterns = [], t3.toolsFiles = {}, t3.exceptionList = [], t3.processTool = function(e3) {
                  try {
                    var n3 = e3.create({}, {}, false);
                    if (e3.pasteConfig === false)
                      return void t3.exceptionList.push(e3.name);
                    if (!v.isFunction(n3.onPaste))
                      return;
                    t3.getTagsConfig(e3), t3.getFilesConfig(e3), t3.getPatternsConfig(e3);
                  } catch (t4) {
                    v.log("Paste handling for \xAB".concat(e3.name, "\xBB Tool hasn't been set up because of the error"), "warn", t4);
                  }
                }, t3.handlePasteEvent = function() {
                  var e3 = (0, s.default)(a.default.mark(function e4(n3) {
                    var o4, r3, i3;
                    return a.default.wrap(function(e5) {
                      for (; ; )
                        switch (e5.prev = e5.next) {
                          case 0:
                            if (o4 = t3.Editor, r3 = o4.BlockManager, i3 = o4.Toolbar, r3.currentBlock && (!t3.isNativeBehaviour(n3.target) || n3.clipboardData.types.includes("Files"))) {
                              e5.next = 3;
                              break;
                            }
                            return e5.abrupt("return");
                          case 3:
                            if (!r3.currentBlock || !t3.exceptionList.includes(r3.currentBlock.name)) {
                              e5.next = 5;
                              break;
                            }
                            return e5.abrupt("return");
                          case 5:
                            n3.preventDefault(), t3.processDataTransfer(n3.clipboardData), r3.clearFocused(), i3.close();
                          case 9:
                          case "end":
                            return e5.stop();
                        }
                    }, e4);
                  }));
                  return function(t4) {
                    return e3.apply(this, arguments);
                  };
                }(), t3;
              }
              return (0, l.default)(S, [{ key: "prepare", value: (x = (0, s.default)(a.default.mark(function t3() {
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        this.processTools();
                      case 1:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return x.apply(this, arguments);
              }) }, { key: "toggleReadOnly", value: function(t3) {
                t3 ? this.unsetCallback() : this.setCallback();
              } }, { key: "processDataTransfer", value: (k = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3, s2, c2, l2, u2, f2, d2 = arguments;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = d2.length > 1 && d2[1] !== void 0 && d2[1], o4 = this.Editor.Sanitizer, !((r3 = e3.types).includes ? r3.includes("Files") : r3.contains("Files"))) {
                          t4.next = 8;
                          break;
                        }
                        return t4.next = 7, this.processFiles(e3.files);
                      case 7:
                        return t4.abrupt("return");
                      case 8:
                        if (i3 = e3.getData(this.MIME_TYPE), s2 = e3.getData("text/plain"), c2 = e3.getData("text/html"), !i3) {
                          t4.next = 19;
                          break;
                        }
                        return t4.prev = 12, this.insertEditorJSData(JSON.parse(i3)), t4.abrupt("return");
                      case 17:
                        t4.prev = 17, t4.t0 = t4.catch(12);
                      case 19:
                        if (n3 && s2.trim() && c2.trim() && (c2 = "<p>" + (c2.trim() ? c2 : s2) + "</p>"), l2 = Object.keys(this.toolsTags).reduce(function(t5, e4) {
                          return t5[e4.toLowerCase()] = true, t5;
                        }, {}), u2 = Object.assign({}, l2, o4.getAllInlineToolsConfig(), { br: {} }), (f2 = o4.clean(c2, u2)).trim() && f2.trim() !== s2 && h.default.isHTMLString(f2)) {
                          t4.next = 28;
                          break;
                        }
                        return t4.next = 26, this.processText(s2);
                      case 26:
                        t4.next = 30;
                        break;
                      case 28:
                        return t4.next = 30, this.processText(f2, true);
                      case 30:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this, [[12, 17]]);
              })), function(t3) {
                return k.apply(this, arguments);
              }) }, { key: "processText", value: (m2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3, c2, l2, u2, f2 = this, d2 = arguments;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = d2.length > 1 && d2[1] !== void 0 && d2[1], o4 = this.Editor, r3 = o4.Caret, i3 = o4.BlockManager, (c2 = n3 ? this.processHTML(e3) : this.processPlain(e3)).length) {
                          t4.next = 5;
                          break;
                        }
                        return t4.abrupt("return");
                      case 5:
                        if (c2.length !== 1) {
                          t4.next = 8;
                          break;
                        }
                        return c2[0].isBlock ? this.processSingleBlock(c2.pop()) : this.processInlinePaste(c2.pop()), t4.abrupt("return");
                      case 8:
                        l2 = i3.currentBlock && i3.currentBlock.tool.isDefault, u2 = l2 && i3.currentBlock.isEmpty, c2.map(function() {
                          var t5 = (0, s.default)(a.default.mark(function t6(e4, n4) {
                            return a.default.wrap(function(t7) {
                              for (; ; )
                                switch (t7.prev = t7.next) {
                                  case 0:
                                    return t7.abrupt("return", f2.insertBlock(e4, n4 === 0 && u2));
                                  case 1:
                                  case "end":
                                    return t7.stop();
                                }
                            }, t6);
                          }));
                          return function(e4, n4) {
                            return t5.apply(this, arguments);
                          };
                        }()), i3.currentBlock && r3.setToBlock(i3.currentBlock, r3.positions.END);
                      case 12:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return m2.apply(this, arguments);
              }) }, { key: "setCallback", value: function() {
                this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
              } }, { key: "unsetCallback", value: function() {
                this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
              } }, { key: "processTools", value: function() {
                var t3 = this.Editor.Tools.blockTools;
                Array.from(t3.values()).forEach(this.processTool);
              } }, { key: "getTagsConfig", value: function(t3) {
                var e3 = this, n3 = t3.pasteConfig.tags || [];
                n3.forEach(function(n4) {
                  Object.prototype.hasOwnProperty.call(e3.toolsTags, n4) ? v.log("Paste handler for \xAB".concat(t3.name, "\xBB Tool on \xAB").concat(n4, "\xBB tag is skipped ") + "because it is already used by \xAB".concat(e3.toolsTags[n4].tool.name, "\xBB Tool."), "warn") : e3.toolsTags[n4.toUpperCase()] = { tool: t3 };
                }), this.tagsByTool[t3.name] = n3.map(function(t4) {
                  return t4.toUpperCase();
                });
              } }, { key: "getFilesConfig", value: function(t3) {
                var e3 = t3.pasteConfig.files, n3 = e3 === void 0 ? {} : e3, o4 = n3.extensions, r3 = n3.mimeTypes;
                (o4 || r3) && (o4 && !Array.isArray(o4) && (v.log("\xABextensions\xBB property of the onDrop config for \xAB".concat(t3.name, "\xBB Tool should be an array")), o4 = []), r3 && !Array.isArray(r3) && (v.log("\xABmimeTypes\xBB property of the onDrop config for \xAB".concat(t3.name, "\xBB Tool should be an array")), r3 = []), r3 && (r3 = r3.filter(function(e4) {
                  return !!v.isValidMimeType(e4) || (v.log("MIME type value \xAB".concat(e4, "\xBB for the \xAB").concat(t3.name, "\xBB Tool is not a valid MIME type"), "warn"), false);
                })), this.toolsFiles[t3.name] = { extensions: o4 || [], mimeTypes: r3 || [] });
              } }, { key: "getPatternsConfig", value: function(t3) {
                var e3 = this;
                t3.pasteConfig.patterns && !v.isEmpty(t3.pasteConfig.patterns) && Object.entries(t3.pasteConfig.patterns).forEach(function(n3) {
                  var o4 = (0, i2.default)(n3, 2), r3 = o4[0], a2 = o4[1];
                  a2 instanceof RegExp || v.log("Pattern ".concat(a2, " for \xAB").concat(t3.name, "\xBB Tool is skipped because it should be a Regexp instance."), "warn"), e3.toolsPatterns.push({ key: r3, pattern: a2, tool: t3 });
                });
              } }, { key: "isNativeBehaviour", value: function(t3) {
                return h.default.isNativeInput(t3);
              } }, { key: "processFiles", value: (g2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3, s2 = this;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return n3 = this.Editor.BlockManager, t4.next = 3, Promise.all(Array.from(e3).map(function(t5) {
                          return s2.processFile(t5);
                        }));
                      case 3:
                        o4 = (o4 = t4.sent).filter(function(t5) {
                          return !!t5;
                        }), r3 = n3.currentBlock.tool.isDefault, i3 = r3 && n3.currentBlock.isEmpty, o4.forEach(function(t5, e4) {
                          n3.paste(t5.type, t5.event, e4 === 0 && i3);
                        });
                      case 8:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return g2.apply(this, arguments);
              }) }, { key: "processFile", value: (y2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, s2, c2;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = v.getFileExtension(e3), o4 = Object.entries(this.toolsFiles).find(function(t5) {
                          var o5 = (0, i2.default)(t5, 2), r4 = (o5[0], o5[1]), a2 = r4.mimeTypes, s3 = r4.extensions, c3 = e3.type.split("/"), l2 = (0, i2.default)(c3, 2), u2 = l2[0], f2 = l2[1], d2 = s3.find(function(t6) {
                            return t6.toLowerCase() === n3.toLowerCase();
                          }), p3 = a2.find(function(t6) {
                            var e4 = t6.split("/"), n4 = (0, i2.default)(e4, 2), o6 = n4[0], r5 = n4[1];
                            return o6 === u2 && (r5 === f2 || r5 === "*");
                          });
                          return !!d2 || !!p3;
                        })) {
                          t4.next = 4;
                          break;
                        }
                        return t4.abrupt("return");
                      case 4:
                        return r3 = (0, i2.default)(o4, 1), s2 = r3[0], c2 = this.composePasteEvent("file", { file: e3 }), t4.abrupt("return", { event: c2, type: s2 });
                      case 7:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return y2.apply(this, arguments);
              }) }, { key: "processHTML", value: function(t3) {
                var e3 = this, n3 = this.Editor, o4 = n3.Tools, r3 = n3.Sanitizer, i3 = h.default.make("DIV");
                return i3.innerHTML = t3, this.getNodes(i3).map(function(t4) {
                  var n4, i4 = o4.defaultTool, a2 = false;
                  switch (t4.nodeType) {
                    case Node.DOCUMENT_FRAGMENT_NODE:
                      (n4 = h.default.make("div")).appendChild(t4);
                      break;
                    case Node.ELEMENT_NODE:
                      n4 = t4, a2 = true, e3.toolsTags[n4.tagName] && (i4 = e3.toolsTags[n4.tagName].tool);
                  }
                  var s2 = i4.pasteConfig.tags.reduce(function(t5, e4) {
                    return t5[e4.toLowerCase()] = {}, t5;
                  }, {}), c2 = Object.assign({}, s2, r3.getInlineToolsConfig(i4));
                  n4.innerHTML = r3.clean(n4.innerHTML, c2);
                  var l2 = e3.composePasteEvent("tag", { data: n4 });
                  return { content: n4, isBlock: a2, tool: i4.name, event: l2 };
                }).filter(function(t4) {
                  return !h.default.isNodeEmpty(t4.content) || h.default.isSingleTag(t4.content);
                });
              } }, { key: "processPlain", value: function(t3) {
                var e3 = this, n3 = this.config.defaultBlock;
                if (!t3)
                  return [];
                var o4 = n3;
                return t3.split(/\r?\n/).filter(function(t4) {
                  return t4.trim();
                }).map(function(t4) {
                  var n4 = h.default.make("div");
                  n4.textContent = t4;
                  var r3 = e3.composePasteEvent("tag", { data: n4 });
                  return { content: n4, tool: o4, isBlock: false, event: r3 };
                });
              } }, { key: "processSingleBlock", value: (p2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = this.Editor, o4 = n3.Caret, r3 = n3.BlockManager, (i3 = r3.currentBlock) && e3.tool === i3.name && h.default.containsOnlyInlineElements(e3.content.innerHTML)) {
                          t4.next = 5;
                          break;
                        }
                        return this.insertBlock(e3, (i3 == null ? void 0 : i3.tool.isDefault) && i3.isEmpty), t4.abrupt("return");
                      case 5:
                        o4.insertContentAtCaretPosition(e3.content.innerHTML);
                      case 6:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return p2.apply(this, arguments);
              }) }, { key: "processInlinePaste", value: (o3 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4, r3, i3, s2, c2, l2, u2, f2;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = this.Editor, o4 = n3.BlockManager, r3 = n3.Caret, i3 = n3.Sanitizer, s2 = e3.content, !(o4.currentBlock && o4.currentBlock.tool.isDefault && s2.textContent.length < S.PATTERN_PROCESSING_MAX_LENGTH)) {
                          t4.next = 12;
                          break;
                        }
                        return t4.next = 6, this.processPattern(s2.textContent);
                      case 6:
                        if (!(c2 = t4.sent)) {
                          t4.next = 12;
                          break;
                        }
                        return l2 = o4.currentBlock && o4.currentBlock.tool.isDefault && o4.currentBlock.isEmpty, u2 = o4.paste(c2.tool, c2.event, l2), r3.setToBlock(u2, r3.positions.END), t4.abrupt("return");
                      case 12:
                        o4.currentBlock && o4.currentBlock.currentInput ? (f2 = i3.getInlineToolsConfig(o4.currentBlock.tool), document.execCommand("insertHTML", false, i3.clean(s2.innerHTML, f2))) : this.insertBlock(e3);
                      case 13:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return o3.apply(this, arguments);
              }) }, { key: "processPattern", value: (n2 = (0, s.default)(a.default.mark(function t3(e3) {
                var n3, o4;
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = this.toolsPatterns.find(function(t5) {
                          var n4 = t5.pattern.exec(e3);
                          return !!n4 && e3 === n4.shift();
                        })) {
                          t4.next = 3;
                          break;
                        }
                        return t4.abrupt("return");
                      case 3:
                        return o4 = this.composePasteEvent("pattern", { key: n3.key, data: e3 }), t4.abrupt("return", { event: o4, tool: n3.tool.name });
                      case 5:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "insertBlock", value: function(t3) {
                var e3, n3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], o4 = this.Editor, r3 = o4.BlockManager, i3 = o4.Caret, a2 = r3.currentBlock;
                if (n3 && a2 && a2.isEmpty)
                  return e3 = r3.paste(t3.tool, t3.event, true), void i3.setToBlock(e3, i3.positions.END);
                e3 = r3.paste(t3.tool, t3.event), i3.setToBlock(e3, i3.positions.END);
              } }, { key: "insertEditorJSData", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.Caret;
                e3.Sanitizer.sanitizeBlocks(t3).forEach(function(t4, e4) {
                  var r3 = t4.tool, i3 = t4.data, a2 = false;
                  e4 === 0 && (a2 = n3.currentBlock && n3.currentBlock.tool.isDefault && n3.currentBlock.isEmpty);
                  var s2 = n3.insert({ tool: r3, data: i3, replace: a2 });
                  o4.setToBlock(s2, o4.positions.END);
                });
              } }, { key: "processElementNode", value: function(t3, e3, n3) {
                var o4 = Object.keys(this.toolsTags), i3 = t3, a2 = (this.toolsTags[i3.tagName] || {}).tool, s2 = this.tagsByTool[a2 == null ? void 0 : a2.name] || [], c2 = o4.includes(i3.tagName), l2 = h.default.blockElements.includes(i3.tagName.toLowerCase()), u2 = Array.from(i3.children).some(function(t4) {
                  var e4 = t4.tagName;
                  return o4.includes(e4) && !s2.includes(e4);
                }), f2 = Array.from(i3.children).some(function(t4) {
                  var e4 = t4.tagName;
                  return h.default.blockElements.includes(e4.toLowerCase());
                });
                return l2 || c2 || u2 ? c2 && !u2 || l2 && !f2 && !u2 ? [].concat((0, r2.default)(e3), [n3, i3]) : void 0 : (n3.appendChild(i3), [].concat((0, r2.default)(e3), [n3]));
              } }, { key: "getNodes", value: function(t3) {
                var e3, n3 = this;
                return Array.from(t3.childNodes).reduce(function t4(o4, i3) {
                  if (h.default.isEmpty(i3) && !h.default.isSingleTag(i3))
                    return o4;
                  var a2 = o4[o4.length - 1], s2 = new DocumentFragment();
                  switch (a2 && h.default.isFragment(a2) && (s2 = o4.pop()), i3.nodeType) {
                    case Node.ELEMENT_NODE:
                      if (e3 = n3.processElementNode(i3, o4, s2))
                        return e3;
                      break;
                    case Node.TEXT_NODE:
                      return s2.appendChild(i3), [].concat((0, r2.default)(o4), [s2]);
                    default:
                      return [].concat((0, r2.default)(o4), [s2]);
                  }
                  return [].concat((0, r2.default)(o4), (0, r2.default)(Array.from(i3.childNodes).reduce(t4, [])));
                }, []);
              } }, { key: "composePasteEvent", value: function(t3, e3) {
                return new CustomEvent(t3, { detail: e3 });
              } }]), S;
            }(p.default);
            o2.default = m, m.displayName = "Paste", m.PATTERN_PROCESSING_MAX_LENGTH = 450, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(29), n(22), n(2), n(3), n(5), n(6), n(4), n(7), n(145)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p) {
            "use strict";
            var h = n(1);
            function v() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), c = h(c), l = h(l), u = h(u), f = h(f);
            var y = function(t2) {
              (0, l.default)(h2, t2);
              var e2, n2, o3, d2 = (e2 = h2, function() {
                var t3, n3 = (0, f.default)(e2);
                if (v()) {
                  var o4 = (0, f.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, u.default)(this, t3);
              });
              function h2() {
                var t3;
                return (0, s.default)(this, h2), (t3 = d2.apply(this, arguments)).toolsDontSupportReadOnly = [], t3.readOnlyEnabled = false, t3;
              }
              return (0, c.default)(h2, [{ key: "prepare", value: (o3 = (0, a.default)(r2.default.mark(function t3() {
                var e3, n3, o4;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        e3 = this.Editor.Tools, n3 = e3.blockTools, o4 = [], Array.from(n3.entries()).forEach(function(t5) {
                          var e4 = (0, i2.default)(t5, 2), n4 = e4[0];
                          e4[1].isReadOnlySupported || o4.push(n4);
                        }), this.toolsDontSupportReadOnly = o4, this.config.readOnly && o4.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
                      case 7:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return o3.apply(this, arguments);
              }) }, { key: "toggle", value: (n2 = (0, a.default)(r2.default.mark(function t3() {
                var e3, n3, o4, i3, a2 = arguments;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        (e3 = a2.length > 0 && a2[0] !== void 0 ? a2[0] : !this.readOnlyEnabled) && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError(), n3 = this.readOnlyEnabled, this.readOnlyEnabled = e3, t4.t0 = r2.default.keys(this.Editor);
                      case 5:
                        if ((t4.t1 = t4.t0()).done) {
                          t4.next = 12;
                          break;
                        }
                        if (o4 = t4.t1.value, this.Editor[o4].toggleReadOnly) {
                          t4.next = 9;
                          break;
                        }
                        return t4.abrupt("continue", 5);
                      case 9:
                        this.Editor[o4].toggleReadOnly(e3), t4.next = 5;
                        break;
                      case 12:
                        if (n3 !== e3) {
                          t4.next = 14;
                          break;
                        }
                        return t4.abrupt("return", this.readOnlyEnabled);
                      case 14:
                        return t4.next = 16, this.Editor.Saver.save();
                      case 16:
                        return i3 = t4.sent, t4.next = 19, this.Editor.BlockManager.clear();
                      case 19:
                        return t4.next = 21, this.Editor.Renderer.render(i3.blocks);
                      case 21:
                        return t4.abrupt("return", this.readOnlyEnabled);
                      case 22:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "throwCriticalError", value: function() {
                throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", "), " don't support read-only mode."));
              } }, { key: "isEnabled", get: function() {
                return this.readOnlyEnabled;
              } }]), h2;
            }((d = h(d)).default);
            o2.default = y, y.displayName = "ReadOnly", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(15), n(25), n(61)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(1);
            function h(t2) {
              if (typeof Symbol == "undefined" || t2[Symbol.iterator] == null) {
                if (Array.isArray(t2) || (t2 = function(t3, e3) {
                  if (t3) {
                    if (typeof t3 == "string")
                      return v(t3, e3);
                    var n3 = Object.prototype.toString.call(t3).slice(8, -1);
                    return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(n3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? v(t3, e3) : void 0;
                  }
                }(t2))) {
                  var e2 = 0, n2 = function() {
                  };
                  return { s: n2, n: function() {
                    return e2 >= t2.length ? { done: true } : { done: false, value: t2[e2++] };
                  }, e: function(t3) {
                    throw t3;
                  }, f: n2 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var o3, r3, i3 = true, a2 = false;
              return { s: function() {
                o3 = t2[Symbol.iterator]();
              }, n: function() {
                var t3 = o3.next();
                return i3 = t3.done, t3;
              }, e: function(t3) {
                a2 = true, r3 = t3;
              }, f: function() {
                try {
                  i3 || o3.return == null || o3.return();
                } finally {
                  if (a2)
                    throw r3;
                }
              } };
            }
            function v(t2, e2) {
              (e2 == null || e2 > t2.length) && (e2 = t2.length);
              for (var n2 = 0, o3 = new Array(e2); n2 < e2; n2++)
                o3[n2] = t2[n2];
              return o3;
            }
            function y() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = p(r2), i2 = p(i2), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f), d = p(d);
            var g = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (y()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).isRectSelectionActivated = false, t3.SCROLL_SPEED = 3, t3.HEIGHT_OF_SCROLL_ZONE = 40, t3.BOTTOM_SCROLL_ZONE = 1, t3.TOP_SCROLL_ZONE = 2, t3.MAIN_MOUSE_BUTTON = 0, t3.mousedown = false, t3.isScrolling = false, t3.inScrollZone = null, t3.startX = 0, t3.startY = 0, t3.mouseX = 0, t3.mouseY = 0, t3.stackOfSelected = [], t3.listenerIds = [], t3;
              }
              return (0, i2.default)(o3, [{ key: "prepare", value: function() {
                this.enableModuleBindings();
              } }, { key: "startSelection", value: function(t3, e3) {
                var n3 = document.elementFromPoint(t3 - window.pageXOffset, e3 - window.pageYOffset);
                n3.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
                var o4 = [".".concat(d.default.CSS.content), ".".concat(this.Editor.Toolbar.CSS.toolbar), ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)], r3 = n3.closest("." + this.Editor.UI.CSS.editorWrapper), i3 = o4.some(function(t4) {
                  return !!n3.closest(t4);
                });
                r3 && !i3 && (this.mousedown = true, this.startX = t3, this.startY = e3);
              } }, { key: "endSelection", value: function() {
                this.mousedown = false, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
              } }, { key: "isRectActivated", value: function() {
                return this.isRectSelectionActivated;
              } }, { key: "clearSelection", value: function() {
                this.isRectSelectionActivated = false;
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this, e3 = this.genHTML().container;
                this.listeners.on(e3, "mousedown", function(e4) {
                  t3.processMouseDown(e4);
                }, false), this.listeners.on(document.body, "mousemove", function(e4) {
                  t3.processMouseMove(e4);
                }, false), this.listeners.on(document.body, "mouseleave", function() {
                  t3.processMouseLeave();
                }), this.listeners.on(window, "scroll", function(e4) {
                  t3.processScroll(e4);
                }, false), this.listeners.on(document.body, "mouseup", function() {
                  t3.processMouseUp();
                }, false);
              } }, { key: "processMouseDown", value: function(t3) {
                t3.button === this.MAIN_MOUSE_BUTTON && this.startSelection(t3.pageX, t3.pageY);
              } }, { key: "processMouseMove", value: function(t3) {
                this.changingRectangle(t3), this.scrollByZones(t3.clientY);
              } }, { key: "processMouseLeave", value: function() {
                this.clearSelection(), this.endSelection();
              } }, { key: "processScroll", value: function(t3) {
                this.changingRectangle(t3);
              } }, { key: "processMouseUp", value: function() {
                this.endSelection();
              } }, { key: "scrollByZones", value: function(t3) {
                this.inScrollZone = null, t3 <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t3 <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = true) : this.isScrolling = false;
              } }, { key: "genHTML", value: function() {
                var t3 = this.Editor.UI, e3 = t3.nodes.holder.querySelector("." + t3.CSS.editorWrapper), n3 = u.default.make("div", o3.CSS.overlay, {}), r3 = u.default.make("div", o3.CSS.overlayContainer, {}), i3 = u.default.make("div", o3.CSS.rect, {});
                return r3.appendChild(i3), n3.appendChild(r3), e3.appendChild(n3), this.overlayRectangle = i3, { container: e3, overlay: n3 };
              } }, { key: "scrollVertical", value: function(t3) {
                var e3 = this;
                if (this.inScrollZone && this.mousedown) {
                  var n3 = window.pageYOffset;
                  window.scrollBy(0, t3), this.mouseY += window.pageYOffset - n3, setTimeout(function() {
                    e3.scrollVertical(t3);
                  }, 0);
                }
              } }, { key: "changingRectangle", value: function(t3) {
                if (this.mousedown) {
                  t3.pageY !== void 0 && (this.mouseX = t3.pageX, this.mouseY = t3.pageY);
                  var e3 = this.genInfoForMouseSelection(), n3 = e3.rightPos, o4 = e3.leftPos, r3 = e3.index, i3 = this.startX > n3 && this.mouseX > n3, a2 = this.startX < o4 && this.mouseX < o4;
                  this.rectCrossesBlocks = !(i3 || a2), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), r3 !== void 0 && (this.trySelectNextBlock(r3), this.inverseSelection(), f.default.get().removeAllRanges(), t3.preventDefault());
                }
              } }, { key: "shrinkRectangleToPoint", value: function() {
                this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
              } }, { key: "inverseSelection", value: function() {
                var t3 = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
                if (this.rectCrossesBlocks && !t3) {
                  var e3, n3 = h(this.stackOfSelected);
                  try {
                    for (n3.s(); !(e3 = n3.n()).done; ) {
                      var o4 = e3.value;
                      this.Editor.BlockSelection.selectBlockByIndex(o4);
                    }
                  } catch (t4) {
                    n3.e(t4);
                  } finally {
                    n3.f();
                  }
                }
                if (!this.rectCrossesBlocks && t3) {
                  var r3, i3 = h(this.stackOfSelected);
                  try {
                    for (i3.s(); !(r3 = i3.n()).done; ) {
                      var a2 = r3.value;
                      this.Editor.BlockSelection.unSelectBlockByIndex(a2);
                    }
                  } catch (t4) {
                    i3.e(t4);
                  } finally {
                    i3.f();
                  }
                }
              } }, { key: "updateRectangleSize", value: function() {
                this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
              } }, { key: "genInfoForMouseSelection", value: function() {
                var t3, e3 = document.body.offsetWidth / 2, n3 = this.mouseY - window.pageYOffset, o4 = document.elementFromPoint(e3, n3), r3 = this.Editor.BlockManager.getBlockByChildNode(o4);
                r3 !== void 0 && (t3 = this.Editor.BlockManager.blocks.findIndex(function(t4) {
                  return t4.holder === r3.holder;
                }));
                var i3 = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d.default.CSS.content), a2 = Number.parseInt(window.getComputedStyle(i3).width, 10) / 2;
                return { index: t3, leftPos: e3 - a2, rightPos: e3 + a2 };
              } }, { key: "addBlockInSelection", value: function(t3) {
                this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t3), this.stackOfSelected.push(t3);
              } }, { key: "trySelectNextBlock", value: function(t3) {
                var e3 = this, n3 = this.stackOfSelected[this.stackOfSelected.length - 1] === t3, o4 = this.stackOfSelected.length;
                if (!n3) {
                  var r3 = this.stackOfSelected[o4 - 1] - this.stackOfSelected[o4 - 2] > 0, i3 = 0;
                  o4 > 1 && (i3 = r3 ? 1 : -1);
                  var a2 = t3 > this.stackOfSelected[o4 - 1] && i3 === 1, s2 = t3 < this.stackOfSelected[o4 - 1] && i3 === -1, c2 = !(a2 || s2 || i3 === 0);
                  if (c2 || !(t3 > this.stackOfSelected[o4 - 1] || this.stackOfSelected[o4 - 1] === void 0)) {
                    if (!c2 && t3 < this.stackOfSelected[o4 - 1])
                      for (var l2 = this.stackOfSelected[o4 - 1] - 1; l2 >= t3; l2--)
                        this.addBlockInSelection(l2);
                    else if (c2) {
                      var u2, f2 = o4 - 1;
                      for (u2 = t3 > this.stackOfSelected[o4 - 1] ? function() {
                        return t3 > e3.stackOfSelected[f2];
                      } : function() {
                        return t3 < e3.stackOfSelected[f2];
                      }; u2(); )
                        this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f2]), this.stackOfSelected.pop(), f2--;
                    }
                  } else
                    for (var d2 = this.stackOfSelected[o4 - 1] + 1 || t3; d2 <= t3; d2++)
                      this.addBlockInSelection(d2);
                }
              } }], [{ key: "CSS", get: function() {
                return { overlay: "codex-editor-overlay", overlayContainer: "codex-editor-overlay__container", rect: "codex-editor-overlay__rectangle", topScrollZone: "codex-editor-overlay__scroll-zone--top", bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom" };
              } }]), o3;
            }(l.default);
            o2.default = g, g.displayName = "RectangleSelection", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(7), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(9), h = n(1);
            function v() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), c = h(c), l = h(l), u = h(u), f = h(f), d = p(d);
            var y = function(t2) {
              (0, c.default)(p2, t2);
              var e2, n2, o3, f2 = (e2 = p2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (v()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function p2() {
                return (0, a.default)(this, p2), f2.apply(this, arguments);
              }
              return (0, s.default)(p2, [{ key: "render", value: (o3 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4, i3 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return n3 = e3.map(function(t5) {
                          return { function: function() {
                            return i3.insertBlock(t5);
                          } };
                        }), t4.next = 3, d.sequence(n3);
                      case 3:
                        return o4 = t4.sent, this.Editor.UI.checkEmptiness(), t4.abrupt("return", o4);
                      case 6:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return o3.apply(this, arguments);
              }) }, { key: "insertBlock", value: (n2 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4, i3, a2, s2, c2, l2, u2;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (n3 = this.Editor, o4 = n3.Tools, i3 = n3.BlockManager, a2 = e3.type, s2 = e3.data, c2 = e3.tunes, !o4.available.has(a2)) {
                          t4.next = 13;
                          break;
                        }
                        t4.prev = 3, i3.insert({ tool: a2, data: s2, tunes: c2 }), t4.next = 11;
                        break;
                      case 7:
                        throw t4.prev = 7, t4.t0 = t4.catch(3), d.log("Block \xAB".concat(a2, "\xBB skipped because of plugins error"), "warn", s2), Error(t4.t0);
                      case 11:
                        t4.next = 18;
                        break;
                      case 13:
                        l2 = { savedData: { type: a2, data: s2 }, title: a2 }, o4.unavailable.has(a2) && (u2 = o4.unavailable.get(a2).toolbox, l2.title = (u2 == null ? void 0 : u2.title) || l2.title), i3.insert({ tool: o4.stubTool, data: l2 }).stretched = true, d.log("Tool \xAB".concat(a2, "\xBB is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                      case 18:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this, [[3, 7]]);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }]), p2;
            }(f.default);
            o2.default = y, y.displayName = "Renderer", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(29), n(2), n(3), n(5), n(6), n(4), n(7), n(8), n(379)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(9), h = n(1);
            function v() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), c = h(c), l = h(l), u = h(u), f = p(f), d = h(d);
            var y = function(t2) {
              (0, s.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (v()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, i2.default)(this, o3), (t3 = n2.apply(this, arguments)).configCache = {}, t3.inlineToolsConfigCache = null, t3;
              }
              return (0, a.default)(o3, [{ key: "sanitizeBlocks", value: function(t3) {
                var e3 = this;
                return t3.map(function(t4) {
                  var n3 = e3.composeToolConfig(t4.tool);
                  return f.isEmpty(n3) || (t4.data = e3.deepSanitize(t4.data, n3)), t4;
                });
              } }, { key: "deepSanitize", value: function(t3, e3) {
                return Array.isArray(t3) ? this.cleanArray(t3, e3) : f.isObject(t3) ? this.cleanObject(t3, e3) : f.isString(t3) ? this.cleanOneItem(t3, e3) : t3;
              } }, { key: "clean", value: function(t3) {
                var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n3 = { tags: e3 }, o4 = this.createHTMLJanitorInstance(n3);
                return o4.clean(t3);
              } }, { key: "composeToolConfig", value: function(t3) {
                if (this.configCache[t3])
                  return this.configCache[t3];
                var e3 = this.Editor.Tools.available.get(t3), n3 = this.getInlineToolsConfig(e3);
                if (!e3.sanitizeConfig || e3.sanitizeConfig && f.isEmpty(e3.sanitizeConfig))
                  return n3;
                var o4 = e3.sanitizeConfig, r3 = {};
                for (var i3 in o4)
                  if (Object.prototype.hasOwnProperty.call(o4, i3)) {
                    var a2 = o4[i3];
                    f.isObject(a2) ? r3[i3] = Object.assign({}, n3, a2) : r3[i3] = a2;
                  }
                return this.configCache[t3] = r3, r3;
              } }, { key: "getInlineToolsConfig", value: function(t3) {
                var e3 = this.Editor.Tools, n3 = t3.enabledInlineTools || [], o4 = {};
                return f.isBoolean(n3) && n3 ? o4 = this.getAllInlineToolsConfig() : n3.map(function(t4) {
                  o4 = Object.assign(o4, e3.inlineTools.get(t4).sanitizeConfig);
                }), o4.br = true, o4.wbr = true, o4;
              } }, { key: "getAllInlineToolsConfig", value: function() {
                var t3 = this.Editor.Tools;
                if (this.inlineToolsConfigCache)
                  return this.inlineToolsConfigCache;
                var e3 = {};
                return Object.entries(t3.inlineTools).forEach(function(t4) {
                  var n3 = (0, r2.default)(t4, 2)[1];
                  Object.assign(e3, n3.sanitizeConfig);
                }), this.inlineToolsConfigCache = e3, this.inlineToolsConfigCache;
              } }, { key: "cleanArray", value: function(t3, e3) {
                var n3 = this;
                return t3.map(function(t4) {
                  return n3.deepSanitize(t4, e3);
                });
              } }, { key: "cleanObject", value: function(t3, e3) {
                var n3 = {};
                for (var o4 in t3)
                  if (Object.prototype.hasOwnProperty.call(t3, o4)) {
                    var r3 = t3[o4], i3 = this.isRule(e3[o4]) ? e3[o4] : e3;
                    n3[o4] = this.deepSanitize(r3, i3);
                  }
                return n3;
              } }, { key: "cleanOneItem", value: function(t3, e3) {
                return f.isObject(e3) ? this.clean(t3, e3) : e3 === false ? this.clean(t3, {}) : t3;
              } }, { key: "isRule", value: function(t3) {
                return f.isObject(t3) || f.isBoolean(t3) || f.isFunction(t3);
              } }, { key: "createHTMLJanitorInstance", value: function(t3) {
                return t3 ? new d.default(t3) : null;
              } }]), o3;
            }(u.default);
            o2.default = y, y.displayName = "Sanitizer", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(7), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(9), h = n(1);
            function v() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), c = h(c), l = h(l), u = h(u), f = h(f), d = p(d);
            var y = function(t2) {
              (0, c.default)(p2, t2);
              var e2, n2, o3, f2 = (e2 = p2, function() {
                var t3, n3 = (0, u.default)(e2);
                if (v()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function p2() {
                return (0, a.default)(this, p2), f2.apply(this, arguments);
              }
              return (0, s.default)(p2, [{ key: "save", value: (o3 = (0, i2.default)(r2.default.mark(function t3() {
                var e3, n3, o4, i3, a2, s2, c2, l2, u2 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.Sanitizer, i3 = e3.ModificationsObserver, a2 = n3.blocks, s2 = [], i3.disable(), t4.prev = 3, a2.forEach(function(t5) {
                          s2.push(u2.getSavedData(t5));
                        }), t4.next = 7, Promise.all(s2);
                      case 7:
                        return c2 = t4.sent, t4.next = 10, o4.sanitizeBlocks(c2);
                      case 10:
                        return l2 = t4.sent, t4.abrupt("return", this.makeOutput(l2));
                      case 12:
                        return t4.prev = 12, i3.enable(), t4.finish(12);
                      case 15:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this, [[3, , 12, 15]]);
              })), function() {
                return o3.apply(this, arguments);
              }) }, { key: "getSavedData", value: (n2 = (0, i2.default)(r2.default.mark(function t3(e3) {
                var n3, o4;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return t4.next = 2, e3.save();
                      case 2:
                        if (n3 = t4.sent, t4.t0 = n3, !t4.t0) {
                          t4.next = 8;
                          break;
                        }
                        return t4.next = 7, e3.validate(n3.data);
                      case 7:
                        t4.t0 = t4.sent;
                      case 8:
                        return o4 = t4.t0, t4.abrupt("return", Object.assign(Object.assign({}, n3), { isValid: o4 }));
                      case 10:
                      case "end":
                        return t4.stop();
                    }
                }, t3);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "makeOutput", value: function(t3) {
                var e3 = this, n3 = 0, o4 = [];
                return d.log("[Editor.js saving]:", "groupCollapsed"), t3.forEach(function(t4) {
                  var r3 = t4.tool, i3 = t4.data, a2 = t4.tunes, s2 = t4.time, c2 = t4.isValid;
                  if (n3 += s2, d.log("".concat(r3.charAt(0).toUpperCase() + r3.slice(1)), "group"), !c2)
                    return d.log("Block \xAB".concat(r3, "\xBB skipped because saved data is invalid")), void d.log(void 0, "groupEnd");
                  if (d.log(i3), d.log(void 0, "groupEnd"), r3 !== e3.Editor.Tools.stubTool) {
                    var l2 = { type: r3, data: i3 };
                    d.isEmpty(a2) || (l2.tunes = a2), o4.push(l2);
                  } else
                    o4.push(i3);
                }), d.log("Total", "log", n3), d.log(void 0, "groupEnd"), { time: +new Date(), blocks: o4, version: "2.20.0" };
              } }]), p2;
            }(f.default);
            o2.default = y, y.displayName = "Saver", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(29), n(2), n(3), n(5), n(6), n(4), n(7), n(15), n(60), n(8), n(25)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h) {
            "use strict";
            var v = n(9), y = n(1);
            function g() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = y(r2), i2 = y(i2), a = y(a), s = y(s), c = y(c), l = y(l), u = y(u), f = y(f), d = y(d), p = v(p), h = y(h);
            var b = function(t2) {
              (0, s.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (g()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, i2.default)(this, o3), (t3 = n2.apply(this, arguments)).buttons = [], t3.flipper = null, t3.selection = new h.default(), t3;
              }
              return (0, a.default)(o3, [{ key: "make", value: function() {
                this.nodes.wrapper = f.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = f.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = f.default.make("div", this.CSS.defaultSettings), f.default.append(this.nodes.wrapper, [this.nodes.toolSettings, this.nodes.defaultSettings]), this.enableFlipper();
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
              } }, { key: "open", value: function() {
                this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.selection.save(), this.Editor.BlockManager.currentBlock.selected = true, this.Editor.BlockSelection.clearCache(), this.addToolSettings(), this.addTunes(), this.eventsDispatcher.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons);
              } }, { key: "close", value: function() {
                this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), h.default.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = false), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.eventsDispatcher.emit(this.events.closed), this.buttons = [], this.flipper.deactivate();
              } }, { key: "addToolSettings", value: function() {
                var t3 = this.Editor.BlockManager.currentBlock.renderSettings();
                t3 && f.default.append(this.nodes.toolSettings, t3);
              } }, { key: "addTunes", value: function() {
                var t3 = this.Editor.BlockManager.currentBlock.renderTunes(), e3 = (0, r2.default)(t3, 2), n3 = e3[0], o4 = e3[1];
                f.default.append(this.nodes.toolSettings, n3), f.default.append(this.nodes.defaultSettings, o4);
              } }, { key: "enableFlipper", value: function() {
                var t3 = this;
                this.flipper = new d.default({ focusedItemClass: this.CSS.focusedButton, activateCallback: function(e3) {
                  e3 && f.default.canSetCaret(e3) ? t3.close() : p.delay(function() {
                    t3.Editor.Caret.setToBlock(t3.Editor.BlockManager.currentBlock);
                  }, 50)();
                } });
              } }, { key: "events", get: function() {
                return { opened: "block-settings-opened", closed: "block-settings-closed" };
              } }, { key: "CSS", get: function() {
                return { wrapper: "ce-settings", wrapperOpened: "ce-settings--opened", toolSettings: "ce-settings__plugin-zone", defaultSettings: "ce-settings__default-zone", button: "ce-settings__button", focusedButton: "ce-settings__button--focused", focusedButtonAnimated: "ce-settings__button--focused-animated" };
              } }, { key: "opened", get: function() {
                return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened);
              } }, { key: "blockTunesButtons", get: function() {
                var t3 = this, e3 = this.Editor.StylesAPI;
                if (this.buttons.length !== 0)
                  return this.buttons;
                var n3 = this.nodes.toolSettings.querySelectorAll(".".concat(e3.classes.settingsButton, ", ").concat(f.default.allInputsSelector)), o4 = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
                return n3.forEach(function(e4) {
                  t3.buttons.push(e4);
                }), o4.forEach(function(e4) {
                  t3.buttons.push(e4);
                }), this.buttons;
              } }]), o3;
            }(u.default);
            o2.default = b, b.displayName = "BlockSettings", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(29), n(21), n(22), n(42), n(2), n(3), n(5), n(6), n(4), n(7), n(15), n(8), n(60), n(59), n(81)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h, v, y, g, b) {
            "use strict";
            var m = n(9), k = n(1);
            function x() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = k(r2), i2 = k(i2), a = k(a), s = k(s), c = k(c), l = k(l), u = k(u), f = k(f), d = k(d), p = k(p), h = k(h), v = m(v), y = k(y), g = k(g);
            var w = function(t2) {
              (0, u.default)(p2, t2);
              var e2, n2, o3 = (e2 = p2, function() {
                var t3, n3 = (0, d.default)(e2);
                if (x()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function p2() {
                var t3;
                return (0, c.default)(this, p2), (t3 = o3.apply(this, arguments)).opened = false, t3.tools = {}, t3.flipper = null, t3.togglingCallback = null, t3;
              }
              return (0, l.default)(p2, [{ key: "make", value: function() {
                this.nodes.wrapper = h.default.make("div", [p2.CSS.conversionToolbarWrapper].concat((0, s.default)(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []))), this.nodes.tools = h.default.make("div", p2.CSS.conversionToolbarTools);
                var t3 = h.default.make("div", p2.CSS.conversionToolbarLabel, { textContent: g.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter, "Convert to") });
                return this.addTools(), this.enableFlipper(), h.default.append(this.nodes.wrapper, t3), h.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
              } }, { key: "toggle", value: function(t3) {
                this.opened ? this.close() : this.open(), v.isFunction(t3) && (this.togglingCallback = t3);
              } }, { key: "open", value: function() {
                var t3 = this;
                this.filterTools(), this.opened = true, this.nodes.wrapper.classList.add(p2.CSS.conversionToolbarShowed), setTimeout(function() {
                  t3.flipper.activate(Object.values(t3.tools).filter(function(t4) {
                    return !t4.classList.contains(p2.CSS.conversionToolHidden);
                  })), t3.flipper.focusFirst(), v.isFunction(t3.togglingCallback) && t3.togglingCallback(true);
                }, 50);
              } }, { key: "close", value: function() {
                this.opened = false, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(p2.CSS.conversionToolbarShowed), v.isFunction(this.togglingCallback) && this.togglingCallback(false);
              } }, { key: "hasTools", value: function() {
                var t3 = Object.keys(this.tools);
                return !(t3.length === 1 && t3.shift() === this.config.defaultBlock);
              } }, { key: "replaceWithBlock", value: (n2 = (0, a.default)(i2.default.mark(function t3(e3) {
                var n3, o4, r3, a2, s2, c2, l2, u2, f2, d2, p3 = this;
                return i2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return n3 = this.Editor.BlockManager.currentBlock.tool, o4 = this.Editor.BlockManager.currentBlock.name, t4.next = 4, this.Editor.BlockManager.currentBlock.save();
                      case 4:
                        if (r3 = t4.sent, a2 = r3.data, o4 === e3 && (e3 = this.config.defaultBlock), s2 = this.Editor.Tools.blockTools.get(e3), c2 = "", l2 = n3.conversionConfig.export, !v.isFunction(l2)) {
                          t4.next = 14;
                          break;
                        }
                        c2 = l2(a2), t4.next = 20;
                        break;
                      case 14:
                        if (!v.isString(l2)) {
                          t4.next = 18;
                          break;
                        }
                        c2 = a2[l2], t4.next = 20;
                        break;
                      case 18:
                        return v.log("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), t4.abrupt("return");
                      case 20:
                        if (u2 = this.Editor.Sanitizer.clean(c2, s2.sanitizeConfig), f2 = {}, d2 = s2.conversionConfig.import, !v.isFunction(d2)) {
                          t4.next = 27;
                          break;
                        }
                        f2 = d2(u2), t4.next = 33;
                        break;
                      case 27:
                        if (!v.isString(d2)) {
                          t4.next = 31;
                          break;
                        }
                        f2[d2] = u2, t4.next = 33;
                        break;
                      case 31:
                        return v.log("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), t4.abrupt("return");
                      case 33:
                        this.Editor.BlockManager.replace({ tool: e3, data: f2 }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), v.delay(function() {
                          p3.Editor.Caret.setToBlock(p3.Editor.BlockManager.currentBlock);
                        }, 10)();
                      case 38:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function(t3) {
                return n2.apply(this, arguments);
              }) }, { key: "addTools", value: function() {
                var t3 = this, e3 = this.Editor.Tools.blockTools;
                Array.from(e3.entries()).forEach(function(e4) {
                  var n3 = (0, r2.default)(e4, 2), o4 = n3[0], i3 = n3[1], a2 = i3.toolbox, s2 = i3.conversionConfig;
                  !v.isEmpty(a2) && a2.icon && s2 && s2.import && t3.addTool(o4, a2.icon, a2.title);
                });
              } }, { key: "addTool", value: function(t3, e3, n3) {
                var o4 = this, r3 = h.default.make("div", [p2.CSS.conversionTool]), s2 = h.default.make("div", [p2.CSS.conversionToolIcon]);
                r3.dataset.tool = t3, s2.innerHTML = e3, h.default.append(r3, s2), h.default.append(r3, h.default.text(g.default.t(b.I18nInternalNS.toolNames, n3 || v.capitalize(t3)))), h.default.append(this.nodes.tools, r3), this.tools[t3] = r3, this.listeners.on(r3, "click", (0, a.default)(i2.default.mark(function e4() {
                  return i2.default.wrap(function(e5) {
                    for (; ; )
                      switch (e5.prev = e5.next) {
                        case 0:
                          return e5.next = 2, o4.replaceWithBlock(t3);
                        case 2:
                        case "end":
                          return e5.stop();
                      }
                  }, e4);
                })));
              } }, { key: "filterTools", value: function() {
                var t3 = this.Editor.BlockManager.currentBlock;
                Object.entries(this.tools).forEach(function(e3) {
                  var n3 = (0, r2.default)(e3, 2), o4 = n3[0], i3 = n3[1];
                  i3.hidden = false, i3.classList.toggle(p2.CSS.conversionToolHidden, o4 === t3.name);
                });
              } }, { key: "enableFlipper", value: function() {
                this.flipper = new y.default({ focusedItemClass: p2.CSS.conversionToolFocused });
              } }], [{ key: "CSS", get: function() {
                return { conversionToolbarWrapper: "ce-conversion-toolbar", conversionToolbarShowed: "ce-conversion-toolbar--showed", conversionToolbarTools: "ce-conversion-toolbar__tools", conversionToolbarLabel: "ce-conversion-toolbar__label", conversionTool: "ce-conversion-tool", conversionToolHidden: "ce-conversion-tool--hidden", conversionToolIcon: "ce-conversion-tool__icon", conversionToolFocused: "ce-conversion-tool--focused", conversionToolActive: "ce-conversion-tool--active" };
              } }]), p2;
            }(p.default);
            o2.default = w, w.displayName = "ConversionToolbar", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(42), n(29), n(2), n(3), n(5), n(6), n(4), n(7), n(15), n(25), n(8), n(60), n(59), n(81), n(108), n(66)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h, v, y, g, b, m) {
            "use strict";
            var k = n(9), x = n(1);
            function w() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = x(r2), i2 = x(i2), a = x(a), s = x(s), c = x(c), l = x(l), u = x(u), f = x(f), d = x(d), p = x(p), h = k(h), v = x(v), y = x(y), b = x(b);
            var S = function(t2) {
              (0, c.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, u.default)(e2);
                if (w()) {
                  var o4 = (0, u.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, l.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, a.default)(this, o3), (t3 = n2.apply(this, arguments)).CSS = { inlineToolbar: "ce-inline-toolbar", inlineToolbarShowed: "ce-inline-toolbar--showed", inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented", inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented", inlineToolbarShortcut: "ce-inline-toolbar__shortcut", buttonsWrapper: "ce-inline-toolbar__buttons", actionsWrapper: "ce-inline-toolbar__actions", inlineToolButton: "ce-inline-tool", inputField: "cdx-input", focusedButton: "ce-inline-tool--focused", conversionToggler: "ce-inline-toolbar__dropdown", conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden", conversionTogglerContent: "ce-inline-toolbar__dropdown-content", togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper" }, t3.opened = false, t3.toolbarVerticalMargin = 5, t3.buttonsList = null, t3.width = 0, t3.flipper = null, t3;
              }
              return (0, s.default)(o3, [{ key: "toggleReadOnly", value: function(t3) {
                t3 ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
              } }, { key: "tryToShow", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                this.allowedToShow() ? (this.move(), this.open(), this.Editor.Toolbar.close()) : t3 && this.close();
              } }, { key: "move", value: function() {
                var t3 = p.default.rect, e3 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), n3 = { x: t3.x - e3.left, y: t3.y + t3.height - e3.top + this.toolbarVerticalMargin };
                t3.width && (n3.x += Math.floor(t3.width / 2));
                var o4 = n3.x - this.width / 2, r3 = n3.x + this.width / 2;
                this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o4 < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r3 > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n3.x) + "px", this.nodes.wrapper.style.top = Math.floor(n3.y) + "px";
              } }, { key: "close", value: function() {
                var t3 = this;
                this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(function(e3) {
                  var n3 = (0, i2.default)(e3, 2), o4 = n3[0], r3 = n3[1], a2 = t3.getToolShortcut(o4);
                  a2 && b.default.remove(t3.Editor.UI.nodes.redactor, a2), h.isFunction(r3.clear) && r3.clear();
                }), this.opened = false, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
              } }, { key: "open", value: function() {
                if (!this.opened) {
                  this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = true, this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = true;
                  var t3 = Array.from(this.buttonsList);
                  t3.unshift(this.nodes.conversionToggler), t3 = t3.filter(function(t4) {
                    return !t4.hidden;
                  }), this.flipper.activate(t3);
                }
              } }, { key: "containsNode", value: function(t3) {
                return this.nodes.wrapper.contains(t3);
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
              } }, { key: "getInlineToolbarSettings", value: function(t3) {
                var e3 = t3.enabledInlineTools;
                if (e3 !== true && !Array.isArray(e3))
                  return false;
                if (Array.isArray(e3))
                  return e3;
                var n3 = this.config.inlineToolbar;
                return Array.isArray(n3) ? n3 : n3 === true && Array.from(this.Editor.Tools.inlineTools.keys());
              } }, { key: "make", value: function() {
                var t3 = this;
                this.nodes.wrapper = d.default.make("div", [this.CSS.inlineToolbar].concat((0, r2.default)(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []))), this.nodes.togglerAndButtonsWrapper = d.default.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = d.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = d.default.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", function(e3) {
                  e3.target.closest(".".concat(t3.CSS.actionsWrapper)) || e3.preventDefault();
                }), d.default.append(this.nodes.wrapper, [this.nodes.togglerAndButtonsWrapper, this.nodes.actions]), d.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), d.default.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
              } }, { key: "allowedToShow", value: function() {
                var t3 = p.default.get(), e3 = p.default.text;
                if (!t3 || !t3.anchorNode)
                  return false;
                if (t3.isCollapsed || e3.length < 1)
                  return false;
                var n3 = d.default.isElement(t3.anchorNode) ? t3.anchorNode : t3.anchorNode.parentElement;
                if (t3 && ["IMG", "INPUT"].includes(n3.tagName))
                  return false;
                if (n3.closest('[contenteditable="true"]') === null)
                  return false;
                var o4 = this.Editor.BlockManager.getBlock(t3.anchorNode);
                return !!o4 && this.getInlineToolbarSettings(o4.tool) !== false;
              } }, { key: "recalculateWidth", value: function() {
                this.width = this.nodes.wrapper.offsetWidth;
              } }, { key: "addConversionToggler", value: function() {
                var t3 = this;
                this.nodes.conversionToggler = d.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = d.default.make("div", this.CSS.conversionTogglerContent);
                var e3 = d.default.svg("toggler-down", 13, 13);
                this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e3), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", function() {
                  t3.Editor.ConversionToolbar.toggle(function(e4) {
                    !e4 && t3.opened ? t3.flipper.activate() : t3.opened && t3.flipper.deactivate();
                  });
                }), this.Editor.Tooltip.onHover(this.nodes.conversionToggler, y.default.ui(g.I18nInternalNS.ui.inlineToolbar.converter, "Convert to"), { placement: "top", hidingDelay: 100 });
              } }, { key: "setConversionTogglerContent", value: function() {
                var t3 = this.Editor.BlockManager.currentBlock, e3 = t3.name, n3 = t3.tool.conversionConfig, o4 = n3 && n3.export;
                this.nodes.conversionToggler.hidden = !o4, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !o4);
                var r3 = t3.tool.toolbox || {};
                this.nodes.conversionTogglerContent.innerHTML = r3.icon || r3.title || h.capitalize(e3);
              } }, { key: "prepareConversionToolbar", value: function() {
                var t3 = this.Editor.ConversionToolbar.make();
                d.default.append(this.nodes.wrapper, t3);
              } }, { key: "addToolsFiltered", value: function() {
                var t3 = this, e3 = p.default.get(), n3 = this.Editor.BlockManager.getBlock(e3.anchorNode);
                this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), this.getInlineToolbarSettings(n3.tool).forEach(function(e4) {
                  var n4 = t3.Editor.Tools.inlineTools.get(e4);
                  t3.addTool(n4);
                }), this.recalculateWidth();
              } }, { key: "addTool", value: function(t3) {
                var e3 = this, n3 = this.Editor.Tooltip, o4 = t3.create(), r3 = o4.render();
                if (r3) {
                  if (r3.dataset.tool = t3.name, this.nodes.buttons.appendChild(r3), this.toolsInstances.set(t3.name, o4), h.isFunction(o4.renderActions)) {
                    var i3 = o4.renderActions();
                    this.nodes.actions.appendChild(i3);
                  }
                  this.listeners.on(r3, "click", function(t4) {
                    e3.toolClicked(o4), t4.preventDefault();
                  });
                  var a2 = this.getToolShortcut(t3.name);
                  if (a2)
                    try {
                      this.enableShortcuts(o4, a2);
                    } catch (t4) {
                    }
                  var s2 = d.default.make("div"), c2 = y.default.t(g.I18nInternalNS.toolNames, t3.title || h.capitalize(t3.name));
                  s2.appendChild(d.default.text(c2)), a2 && s2.appendChild(d.default.make("div", this.CSS.inlineToolbarShortcut, { textContent: h.beautifyShortcut(a2) })), n3.onHover(r3, s2, { placement: "top", hidingDelay: 100 }), o4.checkState(p.default.get());
                } else
                  h.log("Render method must return an instance of Node", "warn", t3.name);
              } }, { key: "getToolShortcut", value: function(t3) {
                var e3 = this.Editor.Tools, n3 = e3.inlineTools.get(t3), o4 = e3.internal.inlineTools;
                return Array.from(o4.keys()).includes(t3) ? this.inlineTools[t3][m.CommonInternalSettings.Shortcut] : n3.shortcut;
              } }, { key: "enableShortcuts", value: function(t3, e3) {
                var n3 = this;
                b.default.add({ name: e3, handler: function(e4) {
                  var o4 = n3.Editor.BlockManager.currentBlock;
                  o4 && o4.tool.enabledInlineTools && (e4.preventDefault(), n3.toolClicked(t3));
                }, on: this.Editor.UI.nodes.redactor });
              } }, { key: "toolClicked", value: function(t3) {
                var e3 = p.default.range;
                t3.surround(e3), this.checkToolsState();
              } }, { key: "checkToolsState", value: function() {
                this.toolsInstances.forEach(function(t3) {
                  t3.checkState(p.default.get());
                });
              } }, { key: "enableFlipper", value: function() {
                this.flipper = new v.default({ focusedItemClass: this.CSS.focusedButton, allowArrows: false });
              } }, { key: "inlineTools", get: function() {
                var t3 = {};
                return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(function(e3) {
                  var n3 = (0, i2.default)(e3, 2), o4 = n3[0], r3 = n3[1];
                  t3[o4] = r3.create();
                }), t3;
              } }]), o3;
            }(f.default);
            o2.default = S, S.displayName = "InlineToolbar", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(15), n(8), n(60), n(61), n(59), n(81), n(108)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h, v, y) {
            "use strict";
            var g = n(9), b = n(1);
            function m() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = b(r2), i2 = b(i2), a = b(a), s = b(s), c = b(c), l = b(l), u = b(u), f = g(f), d = b(d), h = b(h), y = b(y);
            var k = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (m()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).nodes = { toolbox: null, buttons: [] }, t3.opened = false, t3.displayedToolsCount = 0, t3.flipper = null, t3;
              }
              return (0, i2.default)(o3, [{ key: "make", value: function() {
                this.nodes.toolbox = u.default.make("div", this.CSS.toolbox), this.addTools(), this.enableFlipper();
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.removeAllShortcuts();
              } }, { key: "toolButtonActivate", value: function(t3, e3) {
                this.insertNewBlock(e3);
              } }, { key: "open", value: function() {
                this.isEmpty || (this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier), this.nodes.toolbox.classList.add(this.CSS.toolboxOpened), this.opened = true, this.flipper.activate());
              } }, { key: "close", value: function() {
                this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened), this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier), this.opened = false, this.flipper.deactivate();
              } }, { key: "toggle", value: function() {
                this.opened ? this.close() : this.open();
              } }, { key: "addTools", value: function() {
                var t3 = this, e3 = this.Editor.Tools.blockTools;
                Array.from(e3.values()).forEach(function(e4) {
                  return t3.addTool(e4);
                });
              } }, { key: "addTool", value: function(t3) {
                var e3 = this, n3 = t3.toolbox;
                if (n3)
                  if (!n3 || n3.icon) {
                    var o4 = u.default.make("li", [this.CSS.toolboxButton]);
                    o4.dataset.tool = t3.name, o4.innerHTML = n3.icon, u.default.append(this.nodes.toolbox, o4), this.nodes.toolbox.appendChild(o4), this.nodes.buttons.push(o4), this.listeners.on(o4, "click", function(n4) {
                      e3.toolButtonActivate(n4, t3.name);
                    });
                    var r3 = this.drawTooltip(t3);
                    this.Editor.Tooltip.onHover(o4, r3, { placement: "bottom", hidingDelay: 200 });
                    var i3 = t3.shortcut;
                    i3 && this.enableShortcut(t3.name, i3), this.displayedToolsCount++;
                  } else
                    f.log("Toolbar icon is missed. Tool %o skipped", "warn", t3.name);
              } }, { key: "drawTooltip", value: function(t3) {
                var e3 = t3.toolbox || {}, n3 = h.default.t(v.I18nInternalNS.toolNames, e3.title || t3.name), o4 = t3.shortcut, r3 = u.default.make("div", this.CSS.buttonTooltip), i3 = document.createTextNode(f.capitalize(n3));
                return r3.appendChild(i3), o4 && (o4 = f.beautifyShortcut(o4), r3.appendChild(u.default.make("div", this.CSS.buttonShortcut, { textContent: o4 }))), r3;
              } }, { key: "enableShortcut", value: function(t3, e3) {
                var n3 = this;
                y.default.add({ name: e3, handler: function(e4) {
                  e4.preventDefault(), n3.insertNewBlock(t3);
                }, on: this.Editor.UI.nodes.redactor });
              } }, { key: "removeAllShortcuts", value: function() {
                var t3 = this, e3 = this.Editor.Tools.blockTools;
                Array.from(e3.values()).forEach(function(e4) {
                  var n3 = e4.shortcut;
                  n3 && y.default.remove(t3.Editor.UI.nodes.redactor, n3);
                });
              } }, { key: "enableFlipper", value: function() {
                var t3 = Array.from(this.nodes.toolbox.childNodes);
                this.flipper = new d.default({ items: t3, focusedItemClass: this.CSS.toolboxButtonActive });
              } }, { key: "insertNewBlock", value: function(t3) {
                var e3 = this.Editor, n3 = e3.BlockManager, o4 = e3.Caret, r3 = n3.currentBlock, i3 = n3.insert({ tool: t3, replace: r3.isEmpty });
                i3.call(p.BlockToolAPI.APPEND_CALLBACK), this.Editor.Caret.setToBlock(i3), i3.inputs.length === 0 && (i3 === n3.lastBlock ? (n3.insertAtEnd(), o4.setToBlock(n3.lastBlock)) : o4.setToBlock(n3.nextBlock)), this.Editor.Toolbar.close();
              } }, { key: "CSS", get: function() {
                return { toolbox: "ce-toolbox", toolboxButton: "ce-toolbox__button", toolboxButtonActive: "ce-toolbox__button--active", toolboxOpened: "ce-toolbox--opened", openedToolbarHolderModifier: "codex-editor--toolbox-opened", buttonTooltip: "ce-toolbox-button-tooltip", buttonShortcut: "ce-toolbox-button-tooltip__shortcut" };
              } }, { key: "isEmpty", get: function() {
                return this.displayedToolsCount === 0;
              } }]), o3;
            }(l.default);
            o2.default = k, k.displayName = "Toolbox", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(42), n(29), n(2), n(3), n(5), n(6), n(4), n(380), n(7), n(8), n(381), n(382), n(383), n(384), n(385), n(389), n(390), n(391), n(392)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h, v, y, g, b, m, k, x, w, S, T) {
            "use strict";
            var E = n(9), C = n(1);
            function B() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = C(r2), i2 = C(i2), a = C(a), s = C(s), c = C(c), l = C(l), u = C(u), f = C(f), d = C(d), p = C(p), h = C(h), v = E(v), y = C(y), g = C(g), b = C(b), m = C(m), k = C(k), x = C(x), w = C(w), S = C(S), T = C(T);
            var _ = function(t2) {
              (0, u.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, d.default)(e2);
                if (B()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, c.default)(this, o3), (t3 = n2.apply(this, arguments)).stubTool = "stub", t3.toolsAvailable = new T.default(), t3.toolsUnavailable = new T.default(), t3;
              }
              return (0, l.default)(o3, [{ key: "prepare", value: function() {
                var t3 = this;
                if (this.validateTools(), this.config.tools = v.deepMerge({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
                  throw Error("Can't start without tools");
                var e3 = this.prepareConfig();
                this.factory = new k.default(e3, this.config, this.Editor.API);
                var n3 = this.getListOfPrepareFunctions(e3);
                return n3.length === 0 ? Promise.resolve() : v.sequence(n3, function(e4) {
                  t3.toolPrepareMethodSuccess(e4);
                }, function(e4) {
                  t3.toolPrepareMethodFallback(e4);
                });
              } }, { key: "getTunesForTool", value: function(t3) {
                var e3 = t3.enabledBlockTunes;
                if (e3 === false)
                  return new T.default();
                if (Array.isArray(e3))
                  return new T.default(Array.from(this.blockTunes.entries()).filter(function(t4) {
                    var n4 = (0, s.default)(t4, 2)[1];
                    return e3.includes(n4.name);
                  }).concat((0, a.default)(this.blockTunes.internalTools.entries())));
                var n3 = this.config.tunes;
                return Array.isArray(n3) ? new T.default(Array.from(this.blockTunes.entries()).filter(function(t4) {
                  var e4 = (0, s.default)(t4, 2)[1];
                  return n3.includes(e4.name);
                }).concat((0, a.default)(this.blockTunes.internalTools.entries()))) : this.blockTunes.internalTools;
              } }, { key: "destroy", value: function() {
                Object.values(this.available).forEach(function() {
                  var t3 = (0, i2.default)(r2.default.mark(function t4(e3) {
                    return r2.default.wrap(function(t5) {
                      for (; ; )
                        switch (t5.prev = t5.next) {
                          case 0:
                            if (!v.isFunction(e3.reset)) {
                              t5.next = 3;
                              break;
                            }
                            return t5.next = 3, e3.reset();
                          case 3:
                          case "end":
                            return t5.stop();
                        }
                    }, t4);
                  }));
                  return function(e3) {
                    return t3.apply(this, arguments);
                  };
                }());
              } }, { key: "toolPrepareMethodSuccess", value: function(t3) {
                var e3 = this.factory.get(t3.toolName);
                if (e3.isInline()) {
                  var n3 = ["render", "surround", "checkState"].filter(function(t4) {
                    return !e3.create()[t4];
                  });
                  if (n3.length)
                    return v.log("Incorrect Inline Tool: ".concat(e3.name, ". Some of required methods is not implemented %o"), "warn", n3), void this.toolsUnavailable.set(e3.name, e3);
                }
                this.toolsAvailable.set(e3.name, e3);
              } }, { key: "toolPrepareMethodFallback", value: function(t3) {
                this.toolsUnavailable.set(t3.toolName, this.factory.get(t3.toolName));
              } }, { key: "getListOfPrepareFunctions", value: function(t3) {
                var e3 = [];
                return Object.entries(t3).forEach(function(t4) {
                  var n3 = (0, s.default)(t4, 2), o4 = n3[0], r3 = n3[1];
                  e3.push({ function: v.isFunction(r3.class.prepare) ? r3.class.prepare : function() {
                  }, data: { toolName: o4 } });
                }), e3;
              } }, { key: "validateTools", value: function() {
                for (var t3 in this.config.tools)
                  if (Object.prototype.hasOwnProperty.call(this.config.tools, t3)) {
                    if (t3 in this.internalTools)
                      return;
                    var e3 = this.config.tools[t3];
                    if (!v.isFunction(e3) && !v.isFunction(e3.class))
                      throw Error("Tool \xAB".concat(t3, "\xBB must be a constructor function or an object with function in the \xABclass\xBB property"));
                  }
              } }, { key: "prepareConfig", value: function() {
                var t3 = {};
                for (var e3 in this.config.tools)
                  v.isObject(this.config.tools[e3]) ? t3[e3] = this.config.tools[e3] : t3[e3] = { class: this.config.tools[e3] };
                return t3;
              } }, { key: "available", get: function() {
                return this.toolsAvailable;
              } }, { key: "unavailable", get: function() {
                return this.toolsUnavailable;
              } }, { key: "inlineTools", get: function() {
                return this.available.inlineTools;
              } }, { key: "blockTools", get: function() {
                return this.available.blockTools;
              } }, { key: "blockTunes", get: function() {
                return this.available.blockTunes;
              } }, { key: "defaultTool", get: function() {
                return this.blockTools.get(this.config.defaultBlock);
              } }, { key: "internal", get: function() {
                return this.available.internalTools;
              } }, { key: "internalTools", get: function() {
                return { bold: { class: y.default, isInternal: true }, italic: { class: g.default, isInternal: true }, link: { class: b.default, isInternal: true }, paragraph: { class: p.default, inlineToolbar: true, isInternal: true }, stub: { class: m.default, isInternal: true }, moveUpTune: { class: S.default, isInternal: true }, deleteTune: { class: w.default, isInternal: true }, moveDownTune: { class: x.default, isInternal: true } };
              } }]), o3;
            }(h.default);
            o2.default = _, _.displayName = "Tools", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(393)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u) {
            "use strict";
            var f = n(1);
            function d() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), c = f(c), l = f(l), u = f(u);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (d()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).lib = new u.default(), t3;
              }
              return (0, i2.default)(o3, [{ key: "show", value: function(t3, e3, n3) {
                this.lib.show(t3, e3, n3);
              } }, { key: "hide", value: function() {
                this.lib.hide();
              } }, { key: "onHover", value: function(t3, e3, n3) {
                this.lib.onHover(t3, e3, n3);
              } }]), o3;
            }(l.default);
            o2.default = p, p.displayName = "Tooltip", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(29), n(42), n(21), n(22), n(2), n(3), n(5), n(6), n(4), n(394), n(7), n(15), n(8), n(25), n(61), n(60)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d, p, h, v, y, g, b, m) {
            "use strict";
            var k = n(9), x = n(1);
            function w() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = x(r2), i2 = x(i2), a = x(a), s = x(s), c = x(c), l = x(l), u = x(u), f = x(f), d = x(d), p = x(p), h = x(h), v = x(v), y = k(y), g = x(g), b = x(b), m = x(m);
            var S = function(t2) {
              (0, u.default)(k2, t2);
              var e2, o3, h2 = (e2 = k2, function() {
                var t3, n2 = (0, d.default)(e2);
                if (w()) {
                  var o4 = (0, d.default)(this).constructor;
                  t3 = Reflect.construct(n2, arguments, o4);
                } else
                  t3 = n2.apply(this, arguments);
                return (0, f.default)(this, t3);
              });
              function k2() {
                var t3;
                return (0, c.default)(this, k2), (t3 = h2.apply(this, arguments)).isMobile = false, t3.contentRectCache = void 0, t3.resizeDebouncer = y.debounce(function() {
                  t3.windowResize();
                }, 200), t3;
              }
              return (0, l.default)(k2, [{ key: "addLoader", value: function() {
                this.nodes.loader = v.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
              } }, { key: "removeLoader", value: function() {
                this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
              } }, { key: "prepare", value: (o3 = (0, s.default)(a.default.mark(function t3() {
                return a.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        this.checkIsMobile(), this.make(), this.addLoader(), this.appendSVGSprite(), this.loadStyles();
                      case 5:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return o3.apply(this, arguments);
              }) }, { key: "toggleReadOnly", value: function(t3) {
                t3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "checkEmptiness", value: function() {
                var t3 = this.Editor.BlockManager;
                this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t3.isEditorEmpty);
              } }, { key: "destroy", value: function() {
                this.nodes.holder.innerHTML = "";
              } }, { key: "closeAllToolbars", value: function() {
                var t3 = this.Editor, e3 = t3.Toolbox, n2 = t3.BlockSettings, o4 = t3.InlineToolbar, r3 = t3.ConversionToolbar;
                n2.close(), o4.close(), r3.close(), e3.close();
              } }, { key: "checkIsMobile", value: function() {
                this.isMobile = window.innerWidth < 650;
              } }, { key: "make", value: function() {
                this.nodes.holder = v.default.getHolder(this.config.holder), this.nodes.wrapper = v.default.make("div", [this.CSS.editorWrapper].concat((0, i2.default)(this.isRtl ? [this.CSS.editorRtlFix] : []))), this.nodes.redactor = v.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
              } }, { key: "loadStyles", value: function() {
                var t3 = n(395);
                if (!v.default.get("editor-js-styles")) {
                  var e3 = v.default.make("style", null, { id: "editor-js-styles", textContent: t3.toString() });
                  v.default.prepend(document.head, e3);
                }
              } }, { key: "enableModuleBindings", value: function() {
                var t3 = this;
                this.readOnlyMutableListeners.on(this.nodes.redactor, "click", function(e3) {
                  t3.redactorClicked(e3);
                }, false), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", function(e3) {
                  t3.documentTouched(e3);
                }, true), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", function(e3) {
                  t3.documentTouched(e3);
                }, true), this.readOnlyMutableListeners.on(document, "keydown", function(e3) {
                  t3.documentKeydown(e3);
                }, true), this.readOnlyMutableListeners.on(document, "click", function(e3) {
                  t3.documentClicked(e3);
                }, true), this.readOnlyMutableListeners.on(document, "selectionchange", function(e3) {
                  t3.selectionChanged(e3);
                }, true), this.readOnlyMutableListeners.on(window, "resize", function() {
                  t3.resizeDebouncer();
                }, { passive: true });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "windowResize", value: function() {
                this.contentRectCache = null, this.checkIsMobile();
              } }, { key: "documentKeydown", value: function(t3) {
                switch (t3.keyCode) {
                  case y.keyCodes.ENTER:
                    this.enterPressed(t3);
                    break;
                  case y.keyCodes.BACKSPACE:
                    this.backspacePressed(t3);
                    break;
                  case y.keyCodes.ESC:
                    this.escapePressed(t3);
                    break;
                  default:
                    this.defaultBehaviour(t3);
                }
              } }, { key: "defaultBehaviour", value: function(t3) {
                var e3 = this.Editor.BlockManager.currentBlock, n2 = t3.target.closest(".".concat(this.CSS.editorWrapper)), o4 = t3.altKey || t3.ctrlKey || t3.metaKey || t3.shiftKey;
                e3 === void 0 || n2 !== null ? n2 || e3 && o4 || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close()) : this.Editor.BlockEvents.keydown(t3);
              } }, { key: "backspacePressed", value: function(t3) {
                var e3 = this.Editor, n2 = e3.BlockManager, o4 = e3.BlockSelection, r3 = e3.Caret;
                if (o4.anyBlockSelected && !g.default.isSelectionExists) {
                  var i3 = n2.removeSelectedBlocks();
                  r3.setToBlock(n2.insertDefaultBlockAtIndex(i3, true), r3.positions.START), o4.clearSelection(t3), t3.preventDefault(), t3.stopPropagation(), t3.stopImmediatePropagation();
                }
              } }, { key: "escapePressed", value: function(t3) {
                this.Editor.BlockSelection.clearSelection(t3), this.Editor.Toolbox.opened ? this.Editor.Toolbox.close() : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
              } }, { key: "enterPressed", value: function(t3) {
                var e3 = this.Editor, n2 = e3.BlockManager, o4 = e3.BlockSelection, r3 = n2.currentBlockIndex >= 0;
                if (o4.anyBlockSelected && !g.default.isSelectionExists)
                  return o4.clearSelection(t3), t3.preventDefault(), t3.stopImmediatePropagation(), void t3.stopPropagation();
                if (!this.someToolbarOpened && r3 && t3.target.tagName === "BODY") {
                  var i3 = this.Editor.BlockManager.insert();
                  this.Editor.Caret.setToBlock(i3), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.move(), this.Editor.Toolbar.plusButton.show();
                }
                this.Editor.BlockSelection.clearSelection(t3);
              } }, { key: "documentClicked", value: function(t3) {
                if (t3.isTrusted) {
                  var e3 = t3.target;
                  this.nodes.holder.contains(e3) || g.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.InlineToolbar.close(), this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close()), this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted || this.Editor.BlockSelection.clearSelection(t3);
                }
              } }, { key: "documentTouched", value: function(t3) {
                var e3 = t3.target;
                if (e3 === this.nodes.redactor) {
                  var n2 = t3 instanceof MouseEvent ? t3.clientX : t3.touches[0].clientX, o4 = t3 instanceof MouseEvent ? t3.clientY : t3.touches[0].clientY;
                  e3 = document.elementFromPoint(n2, o4);
                }
                try {
                  this.Editor.BlockManager.setCurrentBlockByChildNode(e3), this.Editor.BlockManager.highlightCurrentNode();
                } catch (t4) {
                  this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
                }
                this.Editor.Toolbar.open(), this.Editor.Toolbar.plusButton.hide();
              } }, { key: "redactorClicked", value: function(t3) {
                if (g.default.isCollapsed) {
                  var e3 = function() {
                    t3.stopImmediatePropagation(), t3.stopPropagation();
                  }, n2 = t3.target, o4 = t3.metaKey || t3.ctrlKey;
                  if (v.default.isAnchor(n2) && o4) {
                    e3();
                    var r3 = n2.getAttribute("href"), i3 = y.getValidUrl(r3);
                    y.openTab(i3);
                  } else
                    this.Editor.BlockManager.currentBlock || (e3(), this.Editor.BlockManager.insert()), this.Editor.BlockManager.currentBlock.tool.isDefault && (e3(), this.Editor.BlockManager.currentBlock.isEmpty && this.Editor.Toolbar.plusButton.show());
                }
              } }, { key: "selectionChanged", value: function(t3) {
                var e3 = this.Editor, n2 = e3.CrossBlockSelection, o4 = e3.BlockSelection, r3 = g.default.anchorElement;
                n2.isCrossBlockSelectionStarted && o4.anyBlockSelected && g.default.get().removeAllRanges(), r3 && r3.closest(".".concat(b.default.CSS.content)) ? (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(r3), this.Editor.InlineToolbar.tryToShow(true)) : this.Editor.InlineToolbar.containsNode(r3) || this.Editor.InlineToolbar.close();
              } }, { key: "appendSVGSprite", value: function() {
                var t3 = v.default.make("div");
                t3.hidden = true, t3.style.display = "none", t3.innerHTML = p.default, v.default.append(this.nodes.wrapper, t3);
              } }, { key: "CSS", get: function() {
                return { editorWrapper: "codex-editor", editorWrapperNarrow: "codex-editor--narrow", editorZone: "codex-editor__redactor", editorZoneHidden: "codex-editor__redactor--hidden", editorLoader: "codex-editor__loader", editorEmpty: "codex-editor--empty", editorRtlFix: "codex-editor--rtl" };
              } }, { key: "contentRect", get: function() {
                if (this.contentRectCache)
                  return this.contentRectCache;
                var t3 = this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));
                return t3 ? (this.contentRectCache = t3.getBoundingClientRect(), this.contentRectCache) : { width: 650, left: 0, right: 0 };
              } }, { key: "someToolbarOpened", get: function() {
                var t3 = this.Editor, e3 = t3.Toolbox, n2 = t3.BlockSettings, o4 = t3.InlineToolbar, r3 = t3.ConversionToolbar;
                return n2.opened || o4.opened || r3.opened || e3.opened;
              } }, { key: "someFlipperButtonFocused", get: function() {
                return Object.entries(this.Editor).filter(function(t3) {
                  var e3 = (0, r2.default)(t3, 2);
                  return e3[0], e3[1].flipper instanceof m.default;
                }).some(function(t3) {
                  var e3 = (0, r2.default)(t3, 2);
                  return e3[0], e3[1].flipper.currentItem;
                });
              } }]), k2;
            }(h.default);
            o2.default = S, S.displayName = "UI", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          n(184), t.exports = n(356);
        }, function(t, e, n) {
          n(185);
        }, function(t, e, n) {
          "use strict";
          n(186), n(329), n(331), n(334), n(336), n(338), n(340), n(342), n(344), n(346), n(348), n(350), n(352), n(140);
        }, function(t, e, n) {
          n(187), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(268), n(269), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(102), n(292), n(129), n(293), n(130), n(294), n(295), n(296), n(297), n(131), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), t.exports = n(17);
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(26), i = n(18), a = n(0), s = n(23), c = n(41).KEY, l = n(11), u = n(67), f = n(53), d = n(44), p = n(14), h = n(83), v = n(110), y = n(189), g = n(70), b = n(12), m = n(13), k = n(20), x = n(28), w = n(40), S = n(43), T = n(48), E = n(113), C = n(34), B = n(69), _ = n(19), I = n(46), O = C.f, M = _.f, R = E.f, A = o.Symbol, N = o.JSON, P = N && N.stringify, L = p("_hidden"), D = p("toPrimitive"), j = {}.propertyIsEnumerable, F = u("symbol-registry"), U = u("symbols"), H = u("op-symbols"), z = Object.prototype, W = typeof A == "function" && !!B.f, Y = o.QObject, V = !Y || !Y.prototype || !Y.prototype.findChild, X = i && l(function() {
            return T(M({}, "a", { get: function() {
              return M(this, "a", { value: 7 }).a;
            } })).a != 7;
          }) ? function(t2, e2, n2) {
            var o2 = O(z, e2);
            o2 && delete z[e2], M(t2, e2, n2), o2 && t2 !== z && M(z, e2, o2);
          } : M, G = function(t2) {
            var e2 = U[t2] = T(A.prototype);
            return e2._k = t2, e2;
          }, K = W && typeof A.iterator == "symbol" ? function(t2) {
            return typeof t2 == "symbol";
          } : function(t2) {
            return t2 instanceof A;
          }, Z = function(t2, e2, n2) {
            return t2 === z && Z(H, e2, n2), b(t2), e2 = w(e2, true), b(n2), r(U, e2) ? (n2.enumerable ? (r(t2, L) && t2[L][e2] && (t2[L][e2] = false), n2 = T(n2, { enumerable: S(0, false) })) : (r(t2, L) || M(t2, L, S(1, {})), t2[L][e2] = true), X(t2, e2, n2)) : M(t2, e2, n2);
          }, q = function(t2, e2) {
            b(t2);
            for (var n2, o2 = y(e2 = x(e2)), r2 = 0, i2 = o2.length; i2 > r2; )
              Z(t2, n2 = o2[r2++], e2[n2]);
            return t2;
          }, J = function(t2) {
            var e2 = j.call(this, t2 = w(t2, true));
            return !(this === z && r(U, t2) && !r(H, t2)) && (!(e2 || !r(this, t2) || !r(U, t2) || r(this, L) && this[L][t2]) || e2);
          }, $2 = function(t2, e2) {
            if (t2 = x(t2), e2 = w(e2, true), t2 !== z || !r(U, e2) || r(H, e2)) {
              var n2 = O(t2, e2);
              return !n2 || !r(U, e2) || r(t2, L) && t2[L][e2] || (n2.enumerable = true), n2;
            }
          }, Q = function(t2) {
            for (var e2, n2 = R(x(t2)), o2 = [], i2 = 0; n2.length > i2; )
              r(U, e2 = n2[i2++]) || e2 == L || e2 == c || o2.push(e2);
            return o2;
          }, tt = function(t2) {
            for (var e2, n2 = t2 === z, o2 = R(n2 ? H : x(t2)), i2 = [], a2 = 0; o2.length > a2; )
              !r(U, e2 = o2[a2++]) || n2 && !r(z, e2) || i2.push(U[e2]);
            return i2;
          };
          W || (s((A = function() {
            if (this instanceof A)
              throw TypeError("Symbol is not a constructor!");
            var t2 = d(arguments.length > 0 ? arguments[0] : void 0), e2 = function(n2) {
              this === z && e2.call(H, n2), r(this, L) && r(this[L], t2) && (this[L][t2] = false), X(this, t2, S(1, n2));
            };
            return i && V && X(z, t2, { configurable: true, set: e2 }), G(t2);
          }).prototype, "toString", function() {
            return this._k;
          }), C.f = $2, _.f = Z, n(49).f = E.f = Q, n(63).f = J, B.f = tt, i && !n(45) && s(z, "propertyIsEnumerable", J, true), h.f = function(t2) {
            return G(p(t2));
          }), a(a.G + a.W + a.F * !W, { Symbol: A });
          for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt; )
            p(et[nt++]);
          for (var ot = I(p.store), rt = 0; ot.length > rt; )
            v(ot[rt++]);
          a(a.S + a.F * !W, "Symbol", { for: function(t2) {
            return r(F, t2 += "") ? F[t2] : F[t2] = A(t2);
          }, keyFor: function(t2) {
            if (!K(t2))
              throw TypeError(t2 + " is not a symbol!");
            for (var e2 in F)
              if (F[e2] === t2)
                return e2;
          }, useSetter: function() {
            V = true;
          }, useSimple: function() {
            V = false;
          } }), a(a.S + a.F * !W, "Object", { create: function(t2, e2) {
            return e2 === void 0 ? T(t2) : q(T(t2), e2);
          }, defineProperty: Z, defineProperties: q, getOwnPropertyDescriptor: $2, getOwnPropertyNames: Q, getOwnPropertySymbols: tt });
          var it = l(function() {
            B.f(1);
          });
          a(a.S + a.F * it, "Object", { getOwnPropertySymbols: function(t2) {
            return B.f(k(t2));
          } }), N && a(a.S + a.F * (!W || l(function() {
            var t2 = A();
            return P([t2]) != "[null]" || P({ a: t2 }) != "{}" || P(Object(t2)) != "{}";
          })), "JSON", { stringify: function(t2) {
            for (var e2, n2, o2 = [t2], r2 = 1; arguments.length > r2; )
              o2.push(arguments[r2++]);
            if (n2 = e2 = o2[1], (m(e2) || t2 !== void 0) && !K(t2))
              return g(e2) || (e2 = function(t3, e3) {
                if (typeof n2 == "function" && (e3 = n2.call(this, t3, e3)), !K(e3))
                  return e3;
              }), o2[1] = e2, P.apply(N, o2);
          } }), A.prototype[D] || n(27)(A.prototype, D, A.prototype.valueOf), f(A, "Symbol"), f(Math, "Math", true), f(o.JSON, "JSON", true);
        }, function(t, e, n) {
          t.exports = n(67)("native-function-to-string", Function.toString);
        }, function(t, e, n) {
          var o = n(46), r = n(69), i = n(63);
          t.exports = function(t2) {
            var e2 = o(t2), n2 = r.f;
            if (n2)
              for (var a, s = n2(t2), c = i.f, l = 0; s.length > l; )
                c.call(t2, a = s[l++]) && e2.push(a);
            return e2;
          };
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Object", { create: n(48) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S + o.F * !n(18), "Object", { defineProperty: n(19).f });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S + o.F * !n(18), "Object", { defineProperties: n(112) });
        }, function(t, e, n) {
          var o = n(28), r = n(34).f;
          n(35)("getOwnPropertyDescriptor", function() {
            return function(t2, e2) {
              return r(o(t2), e2);
            };
          });
        }, function(t, e, n) {
          var o = n(20), r = n(50);
          n(35)("getPrototypeOf", function() {
            return function(t2) {
              return r(o(t2));
            };
          });
        }, function(t, e, n) {
          var o = n(20), r = n(46);
          n(35)("keys", function() {
            return function(t2) {
              return r(o(t2));
            };
          });
        }, function(t, e, n) {
          n(35)("getOwnPropertyNames", function() {
            return n(113).f;
          });
        }, function(t, e, n) {
          var o = n(13), r = n(41).onFreeze;
          n(35)("freeze", function(t2) {
            return function(e2) {
              return t2 && o(e2) ? t2(r(e2)) : e2;
            };
          });
        }, function(t, e, n) {
          var o = n(13), r = n(41).onFreeze;
          n(35)("seal", function(t2) {
            return function(e2) {
              return t2 && o(e2) ? t2(r(e2)) : e2;
            };
          });
        }, function(t, e, n) {
          var o = n(13), r = n(41).onFreeze;
          n(35)("preventExtensions", function(t2) {
            return function(e2) {
              return t2 && o(e2) ? t2(r(e2)) : e2;
            };
          });
        }, function(t, e, n) {
          var o = n(13);
          n(35)("isFrozen", function(t2) {
            return function(e2) {
              return !o(e2) || !!t2 && t2(e2);
            };
          });
        }, function(t, e, n) {
          var o = n(13);
          n(35)("isSealed", function(t2) {
            return function(e2) {
              return !o(e2) || !!t2 && t2(e2);
            };
          });
        }, function(t, e, n) {
          var o = n(13);
          n(35)("isExtensible", function(t2) {
            return function(e2) {
              return !!o(e2) && (!t2 || t2(e2));
            };
          });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S + o.F, "Object", { assign: n(114) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Object", { is: n(115) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Object", { setPrototypeOf: n(87).set });
        }, function(t, e, n) {
          "use strict";
          var o = n(64), r = {};
          r[n(14)("toStringTag")] = "z", r + "" != "[object z]" && n(23)(Object.prototype, "toString", function() {
            return "[object " + o(this) + "]";
          }, true);
        }, function(t, e, n) {
          var o = n(0);
          o(o.P, "Function", { bind: n(116) });
        }, function(t, e, n) {
          var o = n(19).f, r = Function.prototype, i = /^\s*function ([^ (]*)/;
          "name" in r || n(18) && o(r, "name", { configurable: true, get: function() {
            try {
              return ("" + this).match(i)[1];
            } catch (t2) {
              return "";
            }
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(13), r = n(50), i = n(14)("hasInstance"), a = Function.prototype;
          i in a || n(19).f(a, i, { value: function(t2) {
            if (typeof this != "function" || !o(t2))
              return false;
            if (!o(this.prototype))
              return t2 instanceof this;
            for (; t2 = r(t2); )
              if (this.prototype === t2)
                return true;
            return false;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(118);
          o(o.G + o.F * (parseInt != r), { parseInt: r });
        }, function(t, e, n) {
          var o = n(0), r = n(119);
          o(o.G + o.F * (parseFloat != r), { parseFloat: r });
        }, function(t, e, n) {
          "use strict";
          var o = n(10), r = n(26), i = n(37), a = n(89), s = n(40), c = n(11), l = n(49).f, u = n(34).f, f = n(19).f, d = n(54).trim, p = o.Number, h = p, v = p.prototype, y = i(n(48)(v)) == "Number", g = "trim" in String.prototype, b = function(t2) {
            var e2 = s(t2, false);
            if (typeof e2 == "string" && e2.length > 2) {
              var n2, o2, r2, i2 = (e2 = g ? e2.trim() : d(e2, 3)).charCodeAt(0);
              if (i2 === 43 || i2 === 45) {
                if ((n2 = e2.charCodeAt(2)) === 88 || n2 === 120)
                  return NaN;
              } else if (i2 === 48) {
                switch (e2.charCodeAt(1)) {
                  case 66:
                  case 98:
                    o2 = 2, r2 = 49;
                    break;
                  case 79:
                  case 111:
                    o2 = 8, r2 = 55;
                    break;
                  default:
                    return +e2;
                }
                for (var a2, c2 = e2.slice(2), l2 = 0, u2 = c2.length; l2 < u2; l2++)
                  if ((a2 = c2.charCodeAt(l2)) < 48 || a2 > r2)
                    return NaN;
                return parseInt(c2, o2);
              }
            }
            return +e2;
          };
          if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function(t2) {
              var e2 = arguments.length < 1 ? 0 : t2, n2 = this;
              return n2 instanceof p && (y ? c(function() {
                v.valueOf.call(n2);
              }) : i(n2) != "Number") ? a(new h(b(e2)), n2, p) : b(e2);
            };
            for (var m, k = n(18) ? l(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++)
              r(h, m = k[x]) && !r(p, m) && f(p, m, u(h, m));
            p.prototype = v, v.constructor = p, n(23)(o, "Number", p);
          }
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(33), i = n(120), a = n(90), s = 1 .toFixed, c = Math.floor, l = [0, 0, 0, 0, 0, 0], u = "Number.toFixed: incorrect invocation!", f = function(t2, e2) {
            for (var n2 = -1, o2 = e2; ++n2 < 6; )
              o2 += t2 * l[n2], l[n2] = o2 % 1e7, o2 = c(o2 / 1e7);
          }, d = function(t2) {
            for (var e2 = 6, n2 = 0; --e2 >= 0; )
              n2 += l[e2], l[e2] = c(n2 / t2), n2 = n2 % t2 * 1e7;
          }, p = function() {
            for (var t2 = 6, e2 = ""; --t2 >= 0; )
              if (e2 !== "" || t2 === 0 || l[t2] !== 0) {
                var n2 = String(l[t2]);
                e2 = e2 === "" ? n2 : e2 + a.call("0", 7 - n2.length) + n2;
              }
            return e2;
          }, h = function(t2, e2, n2) {
            return e2 === 0 ? n2 : e2 % 2 == 1 ? h(t2, e2 - 1, n2 * t2) : h(t2 * t2, e2 / 2, n2);
          };
          o(o.P + o.F * (!!s && (8e-5 .toFixed(3) !== "0.000" || 0.9 .toFixed(0) !== "1" || 1.255 .toFixed(2) !== "1.25" || 1000000000000000100 .toFixed(0) !== "1000000000000000128") || !n(11)(function() {
            s.call({});
          })), "Number", { toFixed: function(t2) {
            var e2, n2, o2, s2, c2 = i(this, u), l2 = r(t2), v = "", y = "0";
            if (l2 < 0 || l2 > 20)
              throw RangeError(u);
            if (c2 != c2)
              return "NaN";
            if (c2 <= -1e21 || c2 >= 1e21)
              return String(c2);
            if (c2 < 0 && (v = "-", c2 = -c2), c2 > 1e-21)
              if (n2 = (e2 = function(t3) {
                for (var e3 = 0, n3 = t3; n3 >= 4096; )
                  e3 += 12, n3 /= 4096;
                for (; n3 >= 2; )
                  e3 += 1, n3 /= 2;
                return e3;
              }(c2 * h(2, 69, 1)) - 69) < 0 ? c2 * h(2, -e2, 1) : c2 / h(2, e2, 1), n2 *= 4503599627370496, (e2 = 52 - e2) > 0) {
                for (f(0, n2), o2 = l2; o2 >= 7; )
                  f(1e7, 0), o2 -= 7;
                for (f(h(10, o2, 1), 0), o2 = e2 - 1; o2 >= 23; )
                  d(1 << 23), o2 -= 23;
                d(1 << o2), f(1, 1), d(2), y = p();
              } else
                f(0, n2), f(1 << -e2, 0), y = p() + a.call("0", l2);
            return y = l2 > 0 ? v + ((s2 = y.length) <= l2 ? "0." + a.call("0", l2 - s2) + y : y.slice(0, s2 - l2) + "." + y.slice(s2 - l2)) : v + y;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(11), i = n(120), a = 1 .toPrecision;
          o(o.P + o.F * (r(function() {
            return a.call(1, void 0) !== "1";
          }) || !r(function() {
            a.call({});
          })), "Number", { toPrecision: function(t2) {
            var e2 = i(this, "Number#toPrecision: incorrect invocation!");
            return t2 === void 0 ? a.call(e2) : a.call(e2, t2);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { EPSILON: Math.pow(2, -52) });
        }, function(t, e, n) {
          var o = n(0), r = n(10).isFinite;
          o(o.S, "Number", { isFinite: function(t2) {
            return typeof t2 == "number" && r(t2);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { isInteger: n(121) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { isNaN: function(t2) {
            return t2 != t2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(121), i = Math.abs;
          o(o.S, "Number", { isSafeInteger: function(t2) {
            return r(t2) && i(t2) <= 9007199254740991;
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
        }, function(t, e, n) {
          var o = n(0), r = n(119);
          o(o.S + o.F * (Number.parseFloat != r), "Number", { parseFloat: r });
        }, function(t, e, n) {
          var o = n(0), r = n(118);
          o(o.S + o.F * (Number.parseInt != r), "Number", { parseInt: r });
        }, function(t, e, n) {
          var o = n(0), r = n(122), i = Math.sqrt, a = Math.acosh;
          o(o.S + o.F * !(a && Math.floor(a(Number.MAX_VALUE)) == 710 && a(1 / 0) == 1 / 0), "Math", { acosh: function(t2) {
            return (t2 = +t2) < 1 ? NaN : t2 > 9490626562425156e-8 ? Math.log(t2) + Math.LN2 : r(t2 - 1 + i(t2 - 1) * i(t2 + 1));
          } });
        }, function(t, e, n) {
          var o = n(0), r = Math.asinh;
          o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", { asinh: function t2(e2) {
            return isFinite(e2 = +e2) && e2 != 0 ? e2 < 0 ? -t2(-e2) : Math.log(e2 + Math.sqrt(e2 * e2 + 1)) : e2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = Math.atanh;
          o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", { atanh: function(t2) {
            return (t2 = +t2) == 0 ? t2 : Math.log((1 + t2) / (1 - t2)) / 2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(91);
          o(o.S, "Math", { cbrt: function(t2) {
            return r(t2 = +t2) * Math.pow(Math.abs(t2), 1 / 3);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { clz32: function(t2) {
            return (t2 >>>= 0) ? 31 - Math.floor(Math.log(t2 + 0.5) * Math.LOG2E) : 32;
          } });
        }, function(t, e, n) {
          var o = n(0), r = Math.exp;
          o(o.S, "Math", { cosh: function(t2) {
            return (r(t2 = +t2) + r(-t2)) / 2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(92);
          o(o.S + o.F * (r != Math.expm1), "Math", { expm1: r });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { fround: n(232) });
        }, function(t, e, n) {
          var o = n(91), r = Math.pow, i = r(2, -52), a = r(2, -23), s = r(2, 127) * (2 - a), c = r(2, -126);
          t.exports = Math.fround || function(t2) {
            var e2, n2, r2 = Math.abs(t2), l = o(t2);
            return r2 < c ? l * (r2 / c / a + 1 / i - 1 / i) * c * a : (n2 = (e2 = (1 + a / i) * r2) - (e2 - r2)) > s || n2 != n2 ? l * (1 / 0) : l * n2;
          };
        }, function(t, e, n) {
          var o = n(0), r = Math.abs;
          o(o.S, "Math", { hypot: function(t2, e2) {
            for (var n2, o2, i = 0, a = 0, s = arguments.length, c = 0; a < s; )
              c < (n2 = r(arguments[a++])) ? (i = i * (o2 = c / n2) * o2 + 1, c = n2) : i += n2 > 0 ? (o2 = n2 / c) * o2 : n2;
            return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i);
          } });
        }, function(t, e, n) {
          var o = n(0), r = Math.imul;
          o(o.S + o.F * n(11)(function() {
            return r(4294967295, 5) != -5 || r.length != 2;
          }), "Math", { imul: function(t2, e2) {
            var n2 = +t2, o2 = +e2, r2 = 65535 & n2, i = 65535 & o2;
            return 0 | r2 * i + ((65535 & n2 >>> 16) * i + r2 * (65535 & o2 >>> 16) << 16 >>> 0);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { log10: function(t2) {
            return Math.log(t2) * Math.LOG10E;
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { log1p: n(122) });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { log2: function(t2) {
            return Math.log(t2) / Math.LN2;
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { sign: n(91) });
        }, function(t, e, n) {
          var o = n(0), r = n(92), i = Math.exp;
          o(o.S + o.F * n(11)(function() {
            return !Math.sinh(-2e-17) != -2e-17;
          }), "Math", { sinh: function(t2) {
            return Math.abs(t2 = +t2) < 1 ? (r(t2) - r(-t2)) / 2 : (i(t2 - 1) - i(-t2 - 1)) * (Math.E / 2);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(92), i = Math.exp;
          o(o.S, "Math", { tanh: function(t2) {
            var e2 = r(t2 = +t2), n2 = r(-t2);
            return e2 == 1 / 0 ? 1 : n2 == 1 / 0 ? -1 : (e2 - n2) / (i(t2) + i(-t2));
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Math", { trunc: function(t2) {
            return (t2 > 0 ? Math.floor : Math.ceil)(t2);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(47), i = String.fromCharCode, a = String.fromCodePoint;
          o(o.S + o.F * (!!a && a.length != 1), "String", { fromCodePoint: function(t2) {
            for (var e2, n2 = [], o2 = arguments.length, a2 = 0; o2 > a2; ) {
              if (e2 = +arguments[a2++], r(e2, 1114111) !== e2)
                throw RangeError(e2 + " is not a valid code point");
              n2.push(e2 < 65536 ? i(e2) : i(55296 + ((e2 -= 65536) >> 10), e2 % 1024 + 56320));
            }
            return n2.join("");
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(28), i = n(16);
          o(o.S, "String", { raw: function(t2) {
            for (var e2 = r(t2.raw), n2 = i(e2.length), o2 = arguments.length, a = [], s = 0; n2 > s; )
              a.push(String(e2[s++])), s < o2 && a.push(String(arguments[s]));
            return a.join("");
          } });
        }, function(t, e, n) {
          "use strict";
          n(54)("trim", function(t2) {
            return function() {
              return t2(this, 3);
            };
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(93)(true);
          n(94)(String, "String", function(t2) {
            this._t = String(t2), this._i = 0;
          }, function() {
            var t2, e2 = this._t, n2 = this._i;
            return n2 >= e2.length ? { value: void 0, done: true } : (t2 = o(e2, n2), this._i += t2.length, { value: t2, done: false });
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(93)(false);
          o(o.P, "String", { codePointAt: function(t2) {
            return r(this, t2);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(16), i = n(95), a = "".endsWith;
          o(o.P + o.F * n(97)("endsWith"), "String", { endsWith: function(t2) {
            var e2 = i(this, t2, "endsWith"), n2 = arguments.length > 1 ? arguments[1] : void 0, o2 = r(e2.length), s = n2 === void 0 ? o2 : Math.min(r(n2), o2), c = String(t2);
            return a ? a.call(e2, c, s) : e2.slice(s - c.length, s) === c;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(95);
          o(o.P + o.F * n(97)("includes"), "String", { includes: function(t2) {
            return !!~r(this, t2, "includes").indexOf(t2, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.P, "String", { repeat: n(90) });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(16), i = n(95), a = "".startsWith;
          o(o.P + o.F * n(97)("startsWith"), "String", { startsWith: function(t2) {
            var e2 = i(this, t2, "startsWith"), n2 = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e2.length)), o2 = String(t2);
            return a ? a.call(e2, o2, n2) : e2.slice(n2, n2 + o2.length) === o2;
          } });
        }, function(t, e, n) {
          "use strict";
          n(24)("anchor", function(t2) {
            return function(e2) {
              return t2(this, "a", "name", e2);
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("big", function(t2) {
            return function() {
              return t2(this, "big", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("blink", function(t2) {
            return function() {
              return t2(this, "blink", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("bold", function(t2) {
            return function() {
              return t2(this, "b", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("fixed", function(t2) {
            return function() {
              return t2(this, "tt", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("fontcolor", function(t2) {
            return function(e2) {
              return t2(this, "font", "color", e2);
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("fontsize", function(t2) {
            return function(e2) {
              return t2(this, "font", "size", e2);
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("italics", function(t2) {
            return function() {
              return t2(this, "i", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("link", function(t2) {
            return function(e2) {
              return t2(this, "a", "href", e2);
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("small", function(t2) {
            return function() {
              return t2(this, "small", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("strike", function(t2) {
            return function() {
              return t2(this, "strike", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("sub", function(t2) {
            return function() {
              return t2(this, "sub", "", "");
            };
          });
        }, function(t, e, n) {
          "use strict";
          n(24)("sup", function(t2) {
            return function() {
              return t2(this, "sup", "", "");
            };
          });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Date", { now: function() {
            return new Date().getTime();
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(20), i = n(40);
          o(o.P + o.F * n(11)(function() {
            return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
              return 1;
            } }) !== 1;
          }), "Date", { toJSON: function(t2) {
            var e2 = r(this), n2 = i(e2);
            return typeof n2 != "number" || isFinite(n2) ? e2.toISOString() : null;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(267);
          o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", { toISOString: r });
        }, function(t, e, n) {
          "use strict";
          var o = n(11), r = Date.prototype.getTime, i = Date.prototype.toISOString, a = function(t2) {
            return t2 > 9 ? t2 : "0" + t2;
          };
          t.exports = o(function() {
            return i.call(new Date(-50000000000001)) != "0385-07-25T07:06:39.999Z";
          }) || !o(function() {
            i.call(new Date(NaN));
          }) ? function() {
            if (!isFinite(r.call(this)))
              throw RangeError("Invalid time value");
            var t2 = this, e2 = t2.getUTCFullYear(), n2 = t2.getUTCMilliseconds(), o2 = e2 < 0 ? "-" : e2 > 9999 ? "+" : "";
            return o2 + ("00000" + Math.abs(e2)).slice(o2 ? -6 : -4) + "-" + a(t2.getUTCMonth() + 1) + "-" + a(t2.getUTCDate()) + "T" + a(t2.getUTCHours()) + ":" + a(t2.getUTCMinutes()) + ":" + a(t2.getUTCSeconds()) + "." + (n2 > 99 ? n2 : "0" + a(n2)) + "Z";
          } : i;
        }, function(t, e, n) {
          var o = Date.prototype, r = o.toString, i = o.getTime;
          new Date(NaN) + "" != "Invalid Date" && n(23)(o, "toString", function() {
            var t2 = i.call(this);
            return t2 == t2 ? r.call(this) : "Invalid Date";
          });
        }, function(t, e, n) {
          var o = n(14)("toPrimitive"), r = Date.prototype;
          o in r || n(27)(r, o, n(270));
        }, function(t, e, n) {
          "use strict";
          var o = n(12), r = n(40);
          t.exports = function(t2) {
            if (t2 !== "string" && t2 !== "number" && t2 !== "default")
              throw TypeError("Incorrect hint");
            return r(o(this), t2 != "number");
          };
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Array", { isArray: n(70) });
        }, function(t, e, n) {
          "use strict";
          var o = n(31), r = n(0), i = n(20), a = n(124), s = n(98), c = n(16), l = n(99), u = n(100);
          r(r.S + r.F * !n(71)(function(t2) {
            Array.from(t2);
          }), "Array", { from: function(t2) {
            var e2, n2, r2, f, d = i(t2), p = typeof this == "function" ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, y = v !== void 0, g = 0, b = u(d);
            if (y && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), b == null || p == Array && s(b))
              for (n2 = new p(e2 = c(d.length)); e2 > g; g++)
                l(n2, g, y ? v(d[g], g) : d[g]);
            else
              for (f = b.call(d), n2 = new p(); !(r2 = f.next()).done; g++)
                l(n2, g, y ? a(f, v, [r2.value, g], true) : r2.value);
            return n2.length = g, n2;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(99);
          o(o.S + o.F * n(11)(function() {
            function t2() {
            }
            return !(Array.of.call(t2) instanceof t2);
          }), "Array", { of: function() {
            for (var t2 = 0, e2 = arguments.length, n2 = new (typeof this == "function" ? this : Array)(e2); e2 > t2; )
              r(n2, t2, arguments[t2++]);
            return n2.length = e2, n2;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(28), i = [].join;
          o(o.P + o.F * (n(62) != Object || !n(30)(i)), "Array", { join: function(t2) {
            return i.call(r(this), t2 === void 0 ? "," : t2);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(86), i = n(37), a = n(47), s = n(16), c = [].slice;
          o(o.P + o.F * n(11)(function() {
            r && c.call(r);
          }), "Array", { slice: function(t2, e2) {
            var n2 = s(this.length), o2 = i(this);
            if (e2 = e2 === void 0 ? n2 : e2, o2 == "Array")
              return c.call(this, t2, e2);
            for (var r2 = a(t2, n2), l = a(e2, n2), u = s(l - r2), f = new Array(u), d = 0; d < u; d++)
              f[d] = o2 == "String" ? this.charAt(r2 + d) : this[r2 + d];
            return f;
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(32), i = n(20), a = n(11), s = [].sort, c = [1, 2, 3];
          o(o.P + o.F * (a(function() {
            c.sort(void 0);
          }) || !a(function() {
            c.sort(null);
          }) || !n(30)(s)), "Array", { sort: function(t2) {
            return t2 === void 0 ? s.call(i(this)) : s.call(i(this), r(t2));
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(0), i = n(30)([].forEach, true);
          o(o.P + o.F * !i, "Array", { forEach: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          var o = n(13), r = n(70), i = n(14)("species");
          t.exports = function(t2) {
            var e2;
            return r(t2) && (typeof (e2 = t2.constructor) != "function" || e2 !== Array && !r(e2.prototype) || (e2 = void 0), o(e2) && (e2 = e2[i]) === null && (e2 = void 0)), e2 === void 0 ? Array : e2;
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(1);
          o(o.P + o.F * !n(30)([].map, true), "Array", { map: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(2);
          o(o.P + o.F * !n(30)([].filter, true), "Array", { filter: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(3);
          o(o.P + o.F * !n(30)([].some, true), "Array", { some: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(4);
          o(o.P + o.F * !n(30)([].every, true), "Array", { every: function(t2) {
            return r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(126);
          o(o.P + o.F * !n(30)([].reduce, true), "Array", { reduce: function(t2) {
            return r(this, t2, arguments.length, arguments[1], false);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(126);
          o(o.P + o.F * !n(30)([].reduceRight, true), "Array", { reduceRight: function(t2) {
            return r(this, t2, arguments.length, arguments[1], true);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(68)(false), i = [].indexOf, a = !!i && 1 / [1].indexOf(1, -0) < 0;
          o(o.P + o.F * (a || !n(30)(i)), "Array", { indexOf: function(t2) {
            return a ? i.apply(this, arguments) || 0 : r(this, t2, arguments[1]);
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(28), i = n(33), a = n(16), s = [].lastIndexOf, c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
          o(o.P + o.F * (c || !n(30)(s)), "Array", { lastIndexOf: function(t2) {
            if (c)
              return s.apply(this, arguments) || 0;
            var e2 = r(this), n2 = a(e2.length), o2 = n2 - 1;
            for (arguments.length > 1 && (o2 = Math.min(o2, i(arguments[1]))), o2 < 0 && (o2 = n2 + o2); o2 >= 0; o2--)
              if (o2 in e2 && e2[o2] === t2)
                return o2 || 0;
            return -1;
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.P, "Array", { copyWithin: n(127) }), n(51)("copyWithin");
        }, function(t, e, n) {
          var o = n(0);
          o(o.P, "Array", { fill: n(101) }), n(51)("fill");
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(5), i = true;
          "find" in [] && Array(1).find(function() {
            i = false;
          }), o(o.P + o.F * i, "Array", { find: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(51)("find");
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(36)(6), i = "findIndex", a = true;
          i in [] && Array(1)[i](function() {
            a = false;
          }), o(o.P + o.F * a, "Array", { findIndex: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(51)(i);
        }, function(t, e, n) {
          n(56)("Array");
        }, function(t, e, n) {
          var o = n(10), r = n(89), i = n(19).f, a = n(49).f, s = n(96), c = n(72), l = o.RegExp, u = l, f = l.prototype, d = /a/g, p = /a/g, h = new l(d) !== d;
          if (n(18) && (!h || n(11)(function() {
            return p[n(14)("match")] = false, l(d) != d || l(p) == p || l(d, "i") != "/a/i";
          }))) {
            l = function(t2, e2) {
              var n2 = this instanceof l, o2 = s(t2), i2 = e2 === void 0;
              return !n2 && o2 && t2.constructor === l && i2 ? t2 : r(h ? new u(o2 && !i2 ? t2.source : t2, e2) : u((o2 = t2 instanceof l) ? t2.source : t2, o2 && i2 ? c.call(t2) : e2), n2 ? this : f, l);
            };
            for (var v = function(t2) {
              t2 in l || i(l, t2, { configurable: true, get: function() {
                return u[t2];
              }, set: function(e2) {
                u[t2] = e2;
              } });
            }, y = a(u), g = 0; y.length > g; )
              v(y[g++]);
            f.constructor = l, l.prototype = f, n(23)(o, "RegExp", l);
          }
          n(56)("RegExp");
        }, function(t, e, n) {
          "use strict";
          n(130);
          var o = n(12), r = n(72), i = n(18), a = /./.toString, s = function(t2) {
            n(23)(RegExp.prototype, "toString", t2, true);
          };
          n(11)(function() {
            return a.call({ source: "a", flags: "b" }) != "/a/b";
          }) ? s(function() {
            var t2 = o(this);
            return "/".concat(t2.source, "/", "flags" in t2 ? t2.flags : !i && t2 instanceof RegExp ? r.call(t2) : void 0);
          }) : a.name != "toString" && s(function() {
            return a.call(this);
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(12), r = n(16), i = n(104), a = n(73);
          n(74)("match", 1, function(t2, e2, n2, s) {
            return [function(n3) {
              var o2 = t2(this), r2 = n3 == null ? void 0 : n3[e2];
              return r2 !== void 0 ? r2.call(n3, o2) : new RegExp(n3)[e2](String(o2));
            }, function(t3) {
              var e3 = s(n2, t3, this);
              if (e3.done)
                return e3.value;
              var c = o(t3), l = String(this);
              if (!c.global)
                return a(c, l);
              var u = c.unicode;
              c.lastIndex = 0;
              for (var f, d = [], p = 0; (f = a(c, l)) !== null; ) {
                var h = String(f[0]);
                d[p] = h, h === "" && (c.lastIndex = i(l, r(c.lastIndex), u)), p++;
              }
              return p === 0 ? null : d;
            }];
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(12), r = n(20), i = n(16), a = n(33), s = n(104), c = n(73), l = Math.max, u = Math.min, f = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g;
          n(74)("replace", 2, function(t2, e2, n2, h) {
            return [function(o2, r2) {
              var i2 = t2(this), a2 = o2 == null ? void 0 : o2[e2];
              return a2 !== void 0 ? a2.call(o2, i2, r2) : n2.call(String(i2), o2, r2);
            }, function(t3, e3) {
              var r2 = h(n2, t3, this, e3);
              if (r2.done)
                return r2.value;
              var f2 = o(t3), d2 = String(this), p2 = typeof e3 == "function";
              p2 || (e3 = String(e3));
              var y = f2.global;
              if (y) {
                var g = f2.unicode;
                f2.lastIndex = 0;
              }
              for (var b = []; ; ) {
                var m = c(f2, d2);
                if (m === null)
                  break;
                if (b.push(m), !y)
                  break;
                String(m[0]) === "" && (f2.lastIndex = s(d2, i(f2.lastIndex), g));
              }
              for (var k, x = "", w = 0, S = 0; S < b.length; S++) {
                m = b[S];
                for (var T = String(m[0]), E = l(u(a(m.index), d2.length), 0), C = [], B = 1; B < m.length; B++)
                  C.push((k = m[B]) === void 0 ? k : String(k));
                var _ = m.groups;
                if (p2) {
                  var I = [T].concat(C, E, d2);
                  _ !== void 0 && I.push(_);
                  var O = String(e3.apply(void 0, I));
                } else
                  O = v(T, d2, E, C, _, e3);
                E >= w && (x += d2.slice(w, E) + O, w = E + T.length);
              }
              return x + d2.slice(w);
            }];
            function v(t3, e3, o2, i2, a2, s2) {
              var c2 = o2 + t3.length, l2 = i2.length, u2 = p;
              return a2 !== void 0 && (a2 = r(a2), u2 = d), n2.call(s2, u2, function(n3, r2) {
                var s3;
                switch (r2.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return t3;
                  case "`":
                    return e3.slice(0, o2);
                  case "'":
                    return e3.slice(c2);
                  case "<":
                    s3 = a2[r2.slice(1, -1)];
                    break;
                  default:
                    var u3 = +r2;
                    if (u3 === 0)
                      return n3;
                    if (u3 > l2) {
                      var d2 = f(u3 / 10);
                      return d2 === 0 ? n3 : d2 <= l2 ? i2[d2 - 1] === void 0 ? r2.charAt(1) : i2[d2 - 1] + r2.charAt(1) : n3;
                    }
                    s3 = i2[u3 - 1];
                }
                return s3 === void 0 ? "" : s3;
              });
            }
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(12), r = n(115), i = n(73);
          n(74)("search", 1, function(t2, e2, n2, a) {
            return [function(n3) {
              var o2 = t2(this), r2 = n3 == null ? void 0 : n3[e2];
              return r2 !== void 0 ? r2.call(n3, o2) : new RegExp(n3)[e2](String(o2));
            }, function(t3) {
              var e3 = a(n2, t3, this);
              if (e3.done)
                return e3.value;
              var s = o(t3), c = String(this), l = s.lastIndex;
              r(l, 0) || (s.lastIndex = 0);
              var u = i(s, c);
              return r(s.lastIndex, l) || (s.lastIndex = l), u === null ? -1 : u.index;
            }];
          });
        }, function(t, e, n) {
          "use strict";
          var o = n(96), r = n(12), i = n(65), a = n(104), s = n(16), c = n(73), l = n(103), u = n(11), f = Math.min, d = [].push, p = "length", h = !u(function() {
            RegExp(4294967295, "y");
          });
          n(74)("split", 2, function(t2, e2, n2, u2) {
            var v;
            return v = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1)[p] != 4 || "ab".split(/(?:ab)*/)[p] != 2 || ".".split(/(.?)(.?)/)[p] != 4 || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(t3, e3) {
              var r2 = String(this);
              if (t3 === void 0 && e3 === 0)
                return [];
              if (!o(t3))
                return n2.call(r2, t3, e3);
              for (var i2, a2, s2, c2 = [], u3 = (t3.ignoreCase ? "i" : "") + (t3.multiline ? "m" : "") + (t3.unicode ? "u" : "") + (t3.sticky ? "y" : ""), f2 = 0, h2 = e3 === void 0 ? 4294967295 : e3 >>> 0, v2 = new RegExp(t3.source, u3 + "g"); (i2 = l.call(v2, r2)) && !((a2 = v2.lastIndex) > f2 && (c2.push(r2.slice(f2, i2.index)), i2[p] > 1 && i2.index < r2[p] && d.apply(c2, i2.slice(1)), s2 = i2[0][p], f2 = a2, c2[p] >= h2)); )
                v2.lastIndex === i2.index && v2.lastIndex++;
              return f2 === r2[p] ? !s2 && v2.test("") || c2.push("") : c2.push(r2.slice(f2)), c2[p] > h2 ? c2.slice(0, h2) : c2;
            } : "0".split(void 0, 0)[p] ? function(t3, e3) {
              return t3 === void 0 && e3 === 0 ? [] : n2.call(this, t3, e3);
            } : n2, [function(n3, o2) {
              var r2 = t2(this), i2 = n3 == null ? void 0 : n3[e2];
              return i2 !== void 0 ? i2.call(n3, r2, o2) : v.call(String(r2), n3, o2);
            }, function(t3, e3) {
              var o2 = u2(v, t3, this, e3, v !== n2);
              if (o2.done)
                return o2.value;
              var l2 = r(t3), d2 = String(this), p2 = i(l2, RegExp), y = l2.unicode, g = (l2.ignoreCase ? "i" : "") + (l2.multiline ? "m" : "") + (l2.unicode ? "u" : "") + (h ? "y" : "g"), b = new p2(h ? l2 : "^(?:" + l2.source + ")", g), m = e3 === void 0 ? 4294967295 : e3 >>> 0;
              if (m === 0)
                return [];
              if (d2.length === 0)
                return c(b, d2) === null ? [d2] : [];
              for (var k = 0, x = 0, w = []; x < d2.length; ) {
                b.lastIndex = h ? x : 0;
                var S, T = c(b, h ? d2 : d2.slice(x));
                if (T === null || (S = f(s(b.lastIndex + (h ? 0 : x)), d2.length)) === k)
                  x = a(d2, x, y);
                else {
                  if (w.push(d2.slice(k, x)), w.length === m)
                    return w;
                  for (var E = 1; E <= T.length - 1; E++)
                    if (w.push(T[E]), w.length === m)
                      return w;
                  x = k = S;
                }
              }
              return w.push(d2.slice(k)), w;
            }];
          });
        }, function(t, e, n) {
          var o = n(10), r = n(105).set, i = o.MutationObserver || o.WebKitMutationObserver, a = o.process, s = o.Promise, c = n(37)(a) == "process";
          t.exports = function() {
            var t2, e2, n2, l = function() {
              var o2, r2;
              for (c && (o2 = a.domain) && o2.exit(); t2; ) {
                r2 = t2.fn, t2 = t2.next;
                try {
                  r2();
                } catch (o3) {
                  throw t2 ? n2() : e2 = void 0, o3;
                }
              }
              e2 = void 0, o2 && o2.enter();
            };
            if (c)
              n2 = function() {
                a.nextTick(l);
              };
            else if (!i || o.navigator && o.navigator.standalone)
              if (s && s.resolve) {
                var u = s.resolve(void 0);
                n2 = function() {
                  u.then(l);
                };
              } else
                n2 = function() {
                  r.call(o, l);
                };
            else {
              var f = true, d = document.createTextNode("");
              new i(l).observe(d, { characterData: true }), n2 = function() {
                d.data = f = !f;
              };
            }
            return function(o2) {
              var r2 = { fn: o2, next: void 0 };
              e2 && (e2.next = r2), t2 || (t2 = r2, n2()), e2 = r2;
            };
          };
        }, function(t, e) {
          t.exports = function(t2) {
            try {
              return { e: false, v: t2() };
            } catch (t3) {
              return { e: true, v: t3 };
            }
          };
        }, function(t, e, n) {
          "use strict";
          var o = n(134), r = n(52);
          t.exports = n(77)("Map", function(t2) {
            return function() {
              return t2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { get: function(t2) {
            var e2 = o.getEntry(r(this, "Map"), t2);
            return e2 && e2.v;
          }, set: function(t2, e2) {
            return o.def(r(this, "Map"), t2 === 0 ? 0 : t2, e2);
          } }, o, true);
        }, function(t, e, n) {
          "use strict";
          var o = n(134), r = n(52);
          t.exports = n(77)("Set", function(t2) {
            return function() {
              return t2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(t2) {
            return o.def(r(this, "Set"), t2 = t2 === 0 ? 0 : t2, t2);
          } }, o);
        }, function(t, e, n) {
          "use strict";
          var o, r = n(10), i = n(36)(0), a = n(23), s = n(41), c = n(114), l = n(135), u = n(13), f = n(52), d = n(52), p = !r.ActiveXObject && "ActiveXObject" in r, h = s.getWeak, v = Object.isExtensible, y = l.ufstore, g = function(t2) {
            return function() {
              return t2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, b = { get: function(t2) {
            if (u(t2)) {
              var e2 = h(t2);
              return e2 === true ? y(f(this, "WeakMap")).get(t2) : e2 ? e2[this._i] : void 0;
            }
          }, set: function(t2, e2) {
            return l.def(f(this, "WeakMap"), t2, e2);
          } }, m = t.exports = n(77)("WeakMap", g, b, l, true, true);
          d && p && (c((o = l.getConstructor(g, "WeakMap")).prototype, b), s.NEED = true, i(["delete", "has", "get", "set"], function(t2) {
            var e2 = m.prototype, n2 = e2[t2];
            a(e2, t2, function(e3, r2) {
              if (u(e3) && !v(e3)) {
                this._f || (this._f = new o());
                var i2 = this._f[t2](e3, r2);
                return t2 == "set" ? this : i2;
              }
              return n2.call(this, e3, r2);
            });
          }));
        }, function(t, e, n) {
          "use strict";
          var o = n(135), r = n(52);
          n(77)("WeakSet", function(t2) {
            return function() {
              return t2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(t2) {
            return o.def(r(this, "WeakSet"), t2, true);
          } }, o, false, true);
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(78), i = n(106), a = n(12), s = n(47), c = n(16), l = n(13), u = n(10).ArrayBuffer, f = n(65), d = i.ArrayBuffer, p = i.DataView, h = r.ABV && u.isView, v = d.prototype.slice, y = r.VIEW;
          o(o.G + o.W + o.F * (u !== d), { ArrayBuffer: d }), o(o.S + o.F * !r.CONSTR, "ArrayBuffer", { isView: function(t2) {
            return h && h(t2) || l(t2) && y in t2;
          } }), o(o.P + o.U + o.F * n(11)(function() {
            return !new d(2).slice(1, void 0).byteLength;
          }), "ArrayBuffer", { slice: function(t2, e2) {
            if (v !== void 0 && e2 === void 0)
              return v.call(a(this), t2);
            for (var n2 = a(this).byteLength, o2 = s(t2, n2), r2 = s(e2 === void 0 ? n2 : e2, n2), i2 = new (f(this, d))(c(r2 - o2)), l2 = new p(this), u2 = new p(i2), h2 = 0; o2 < r2; )
              u2.setUint8(h2++, l2.getUint8(o2++));
            return i2;
          } }), n(56)("ArrayBuffer");
        }, function(t, e, n) {
          var o = n(0);
          o(o.G + o.W + o.F * !n(78).ABV, { DataView: n(106).DataView });
        }, function(t, e, n) {
          n(39)("Int8", 1, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Uint8", 1, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Uint8", 1, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          }, true);
        }, function(t, e, n) {
          n(39)("Int16", 2, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Uint16", 2, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Int32", 4, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Uint32", 4, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Float32", 4, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          n(39)("Float64", 8, function(t2) {
            return function(e2, n2, o) {
              return t2(this, e2, n2, o);
            };
          });
        }, function(t, e, n) {
          var o = n(0), r = n(32), i = n(12), a = (n(10).Reflect || {}).apply, s = Function.apply;
          o(o.S + o.F * !n(11)(function() {
            a(function() {
            });
          }), "Reflect", { apply: function(t2, e2, n2) {
            var o2 = r(t2), c = i(n2);
            return a ? a(o2, e2, c) : s.call(o2, e2, c);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(48), i = n(32), a = n(12), s = n(13), c = n(11), l = n(116), u = (n(10).Reflect || {}).construct, f = c(function() {
            function t2() {
            }
            return !(u(function() {
            }, [], t2) instanceof t2);
          }), d = !c(function() {
            u(function() {
            });
          });
          o(o.S + o.F * (f || d), "Reflect", { construct: function(t2, e2) {
            i(t2), a(e2);
            var n2 = arguments.length < 3 ? t2 : i(arguments[2]);
            if (d && !f)
              return u(t2, e2, n2);
            if (t2 == n2) {
              switch (e2.length) {
                case 0:
                  return new t2();
                case 1:
                  return new t2(e2[0]);
                case 2:
                  return new t2(e2[0], e2[1]);
                case 3:
                  return new t2(e2[0], e2[1], e2[2]);
                case 4:
                  return new t2(e2[0], e2[1], e2[2], e2[3]);
              }
              var o2 = [null];
              return o2.push.apply(o2, e2), new (l.apply(t2, o2))();
            }
            var c2 = n2.prototype, p = r(s(c2) ? c2 : Object.prototype), h = Function.apply.call(t2, p, e2);
            return s(h) ? h : p;
          } });
        }, function(t, e, n) {
          var o = n(19), r = n(0), i = n(12), a = n(40);
          r(r.S + r.F * n(11)(function() {
            Reflect.defineProperty(o.f({}, 1, { value: 1 }), 1, { value: 2 });
          }), "Reflect", { defineProperty: function(t2, e2, n2) {
            i(t2), e2 = a(e2, true), i(n2);
            try {
              return o.f(t2, e2, n2), true;
            } catch (t3) {
              return false;
            }
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(34).f, i = n(12);
          o(o.S, "Reflect", { deleteProperty: function(t2, e2) {
            var n2 = r(i(t2), e2);
            return !(n2 && !n2.configurable) && delete t2[e2];
          } });
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(12), i = function(t2) {
            this._t = r(t2), this._i = 0;
            var e2, n2 = this._k = [];
            for (e2 in t2)
              n2.push(e2);
          };
          n(123)(i, "Object", function() {
            var t2, e2 = this._k;
            do {
              if (this._i >= e2.length)
                return { value: void 0, done: true };
            } while (!((t2 = e2[this._i++]) in this._t));
            return { value: t2, done: false };
          }), o(o.S, "Reflect", { enumerate: function(t2) {
            return new i(t2);
          } });
        }, function(t, e, n) {
          var o = n(34), r = n(50), i = n(26), a = n(0), s = n(13), c = n(12);
          a(a.S, "Reflect", { get: function t2(e2, n2) {
            var a2, l, u = arguments.length < 3 ? e2 : arguments[2];
            return c(e2) === u ? e2[n2] : (a2 = o.f(e2, n2)) ? i(a2, "value") ? a2.value : a2.get !== void 0 ? a2.get.call(u) : void 0 : s(l = r(e2)) ? t2(l, n2, u) : void 0;
          } });
        }, function(t, e, n) {
          var o = n(34), r = n(0), i = n(12);
          r(r.S, "Reflect", { getOwnPropertyDescriptor: function(t2, e2) {
            return o.f(i(t2), e2);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(50), i = n(12);
          o(o.S, "Reflect", { getPrototypeOf: function(t2) {
            return r(i(t2));
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Reflect", { has: function(t2, e2) {
            return e2 in t2;
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(12), i = Object.isExtensible;
          o(o.S, "Reflect", { isExtensible: function(t2) {
            return r(t2), !i || i(t2);
          } });
        }, function(t, e, n) {
          var o = n(0);
          o(o.S, "Reflect", { ownKeys: n(137) });
        }, function(t, e, n) {
          var o = n(0), r = n(12), i = Object.preventExtensions;
          o(o.S, "Reflect", { preventExtensions: function(t2) {
            r(t2);
            try {
              return i && i(t2), true;
            } catch (t3) {
              return false;
            }
          } });
        }, function(t, e, n) {
          var o = n(19), r = n(34), i = n(50), a = n(26), s = n(0), c = n(43), l = n(12), u = n(13);
          s(s.S, "Reflect", { set: function t2(e2, n2, s2) {
            var f, d, p = arguments.length < 4 ? e2 : arguments[3], h = r.f(l(e2), n2);
            if (!h) {
              if (u(d = i(e2)))
                return t2(d, n2, s2, p);
              h = c(0);
            }
            if (a(h, "value")) {
              if (h.writable === false || !u(p))
                return false;
              if (f = r.f(p, n2)) {
                if (f.get || f.set || f.writable === false)
                  return false;
                f.value = s2, o.f(p, n2, f);
              } else
                o.f(p, n2, c(0, s2));
              return true;
            }
            return h.set !== void 0 && (h.set.call(p, s2), true);
          } });
        }, function(t, e, n) {
          var o = n(0), r = n(87);
          r && o(o.S, "Reflect", { setPrototypeOf: function(t2, e2) {
            r.check(t2, e2);
            try {
              return r.set(t2, e2), true;
            } catch (t3) {
              return false;
            }
          } });
        }, function(t, e, n) {
          n(330), t.exports = n(17).Array.includes;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(68)(true);
          o(o.P, "Array", { includes: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(51)("includes");
        }, function(t, e, n) {
          n(332), t.exports = n(17).Array.flatMap;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(333), i = n(20), a = n(16), s = n(32), c = n(125);
          o(o.P, "Array", { flatMap: function(t2) {
            var e2, n2, o2 = i(this);
            return s(t2), e2 = a(o2.length), n2 = c(o2, 0), r(n2, o2, o2, e2, 0, 1, t2, arguments[1]), n2;
          } }), n(51)("flatMap");
        }, function(t, e, n) {
          "use strict";
          var o = n(70), r = n(13), i = n(16), a = n(31), s = n(14)("isConcatSpreadable");
          t.exports = function t2(e2, n2, c, l, u, f, d, p) {
            for (var h, v, y = u, g = 0, b = !!d && a(d, p, 3); g < l; ) {
              if (g in c) {
                if (h = b ? b(c[g], g, n2) : c[g], v = false, r(h) && (v = (v = h[s]) !== void 0 ? !!v : o(h)), v && f > 0)
                  y = t2(e2, n2, h, i(h.length), y, f - 1) - 1;
                else {
                  if (y >= 9007199254740991)
                    throw TypeError();
                  e2[y] = h;
                }
                y++;
              }
              g++;
            }
            return y;
          };
        }, function(t, e, n) {
          n(335), t.exports = n(17).String.padStart;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(138), i = n(76), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
          o(o.P + o.F * a, "String", { padStart: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0, true);
          } });
        }, function(t, e, n) {
          n(337), t.exports = n(17).String.padEnd;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(138), i = n(76), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
          o(o.P + o.F * a, "String", { padEnd: function(t2) {
            return r(this, t2, arguments.length > 1 ? arguments[1] : void 0, false);
          } });
        }, function(t, e, n) {
          n(339), t.exports = n(17).String.trimLeft;
        }, function(t, e, n) {
          "use strict";
          n(54)("trimLeft", function(t2) {
            return function() {
              return t2(this, 1);
            };
          }, "trimStart");
        }, function(t, e, n) {
          n(341), t.exports = n(17).String.trimRight;
        }, function(t, e, n) {
          "use strict";
          n(54)("trimRight", function(t2) {
            return function() {
              return t2(this, 2);
            };
          }, "trimEnd");
        }, function(t, e, n) {
          n(343), t.exports = n(83).f("asyncIterator");
        }, function(t, e, n) {
          n(110)("asyncIterator");
        }, function(t, e, n) {
          n(345), t.exports = n(17).Object.getOwnPropertyDescriptors;
        }, function(t, e, n) {
          var o = n(0), r = n(137), i = n(28), a = n(34), s = n(99);
          o(o.S, "Object", { getOwnPropertyDescriptors: function(t2) {
            for (var e2, n2, o2 = i(t2), c = a.f, l = r(o2), u = {}, f = 0; l.length > f; )
              (n2 = c(o2, e2 = l[f++])) !== void 0 && s(u, e2, n2);
            return u;
          } });
        }, function(t, e, n) {
          n(347), t.exports = n(17).Object.values;
        }, function(t, e, n) {
          var o = n(0), r = n(139)(false);
          o(o.S, "Object", { values: function(t2) {
            return r(t2);
          } });
        }, function(t, e, n) {
          n(349), t.exports = n(17).Object.entries;
        }, function(t, e, n) {
          var o = n(0), r = n(139)(true);
          o(o.S, "Object", { entries: function(t2) {
            return r(t2);
          } });
        }, function(t, e, n) {
          "use strict";
          n(131), n(351), t.exports = n(17).Promise.finally;
        }, function(t, e, n) {
          "use strict";
          var o = n(0), r = n(17), i = n(10), a = n(65), s = n(133);
          o(o.P + o.R, "Promise", { finally: function(t2) {
            var e2 = a(this, r.Promise || i.Promise), n2 = typeof t2 == "function";
            return this.then(n2 ? function(n3) {
              return s(e2, t2()).then(function() {
                return n3;
              });
            } : t2, n2 ? function(n3) {
              return s(e2, t2()).then(function() {
                throw n3;
              });
            } : t2);
          } });
        }, function(t, e, n) {
          n(353), n(354), n(355), t.exports = n(17);
        }, function(t, e, n) {
          var o = n(10), r = n(0), i = n(76), a = [].slice, s = /MSIE .\./.test(i), c = function(t2) {
            return function(e2, n2) {
              var o2 = arguments.length > 2, r2 = !!o2 && a.call(arguments, 2);
              return t2(o2 ? function() {
                (typeof e2 == "function" ? e2 : Function(e2)).apply(this, r2);
              } : e2, n2);
            };
          };
          r(r.G + r.B + r.F * s, { setTimeout: c(o.setTimeout), setInterval: c(o.setInterval) });
        }, function(t, e, n) {
          var o = n(0), r = n(105);
          o(o.G + o.B, { setImmediate: r.set, clearImmediate: r.clear });
        }, function(t, e, n) {
          for (var o = n(102), r = n(46), i = n(23), a = n(10), s = n(27), c = n(55), l = n(14), u = l("iterator"), f = l("toStringTag"), d = c.Array, p = { CSSRuleList: true, CSSStyleDeclaration: false, CSSValueList: false, ClientRectList: false, DOMRectList: false, DOMStringList: false, DOMTokenList: true, DataTransferItemList: false, FileList: false, HTMLAllCollection: false, HTMLCollection: false, HTMLFormElement: false, HTMLSelectElement: false, MediaList: true, MimeTypeArray: false, NamedNodeMap: false, NodeList: true, PaintRequestList: false, Plugin: false, PluginArray: false, SVGLengthList: false, SVGNumberList: false, SVGPathSegList: false, SVGPointList: false, SVGStringList: false, SVGTransformList: false, SourceBufferList: false, StyleSheetList: true, TextTrackCueList: false, TextTrackList: false, TouchList: false }, h = r(p), v = 0; v < h.length; v++) {
            var y, g = h[v], b = p[g], m = a[g], k = m && m.prototype;
            if (k && (k[u] || s(k, u, d), k[f] || s(k, f, g), c[g] = d, b))
              for (y in o)
                k[y] || i(k, y, o[y], true);
          }
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(29), n(2), n(3), n(360), n(362), n(363), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u) {
            "use strict";
            var f = n(9), d = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), l = d(l), u = f(u);
            var p = function() {
              function t2(e2) {
                var n2 = this;
                (0, i2.default)(this, t2);
                var o3 = function() {
                };
                u.isObject(e2) && u.isFunction(e2.onReady) && (o3 = e2.onReady);
                var r3 = new l.default(e2);
                this.isReady = r3.isReady.then(function() {
                  n2.exportAPI(r3), o3();
                });
              }
              return (0, a.default)(t2, [{ key: "exportAPI", value: function(t3) {
                var e2 = this;
                ["configuration"].forEach(function(n2) {
                  e2[n2] = t3[n2];
                }), this.destroy = function() {
                  for (var n2 in Object.values(t3.moduleInstances).forEach(function(t4) {
                    u.isFunction(t4.destroy) && t4.destroy(), t4.listeners.removeAll();
                  }), t3 = null, e2)
                    Object.prototype.hasOwnProperty.call(e2, n2) && delete e2[n2];
                  Object.setPrototypeOf(e2, null);
                }, Object.setPrototypeOf(this, t3.moduleInstances.API.methods), delete this.exportAPI, Object.entries({ blocks: { clear: "clear", render: "render" }, caret: { focus: "focus" }, events: { on: "on", off: "off", emit: "emit" }, saver: { save: "save" } }).forEach(function(n2) {
                  var o3 = (0, r2.default)(n2, 2), i3 = o3[0], a2 = o3[1];
                  Object.entries(a2).forEach(function(n3) {
                    var o4 = (0, r2.default)(n3, 2), a3 = o4[0], s2 = o4[1];
                    e2[s2] = t3.moduleInstances.API.methods[i3][a3];
                  });
                });
              } }], [{ key: "version", get: function() {
                return "2.20.0";
              } }]), t2;
            }();
            o2.default = p, p.displayName = "EditorJS", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e) {
          t.exports = function(t2) {
            if (Array.isArray(t2))
              return t2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(t2)) {
              var n = [], o = true, r = false, i = void 0;
              try {
                for (var a, s = t2[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e2 || n.length !== e2); o = true)
                  ;
              } catch (t3) {
                r = true, i = t3;
              } finally {
                try {
                  o || s.return == null || s.return();
                } finally {
                  if (r)
                    throw i;
                }
              }
              return n;
            }
          };
        }, function(t, e) {
          t.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          };
        }, function(t, e, n) {
          (e = t.exports = function(...t2) {
            return r(...t2);
          }).__esModule = true;
          const o = n(361), r = o.default;
          Object.assign(e, o);
        }, function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.default = function() {
          }, e.revert = function() {
          };
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [], (i = typeof (o = function() {
            "use strict";
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t2) {
              for (var e2 = (this.document || this.ownerDocument).querySelectorAll(t2), n2 = e2.length; --n2 >= 0 && e2.item(n2) !== this; )
                ;
              return n2 > -1;
            }), Element.prototype.closest || (Element.prototype.closest = function(t2) {
              var e2 = this;
              if (!document.documentElement.contains(e2))
                return null;
              do {
                if (e2.matches(t2))
                  return e2;
                e2 = e2.parentElement || e2.parentNode;
              } while (e2 !== null);
              return null;
            }), Element.prototype.prepend || (Element.prototype.prepend = function(t2) {
              var e2 = document.createDocumentFragment();
              Array.isArray(t2) || (t2 = [t2]), t2.forEach(function(t3) {
                var n2 = t3 instanceof Node;
                e2.appendChild(n2 ? t3 : document.createTextNode(t3));
              }), this.insertBefore(e2, this.firstChild);
            });
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(21), n(22), n(2), n(3), n(15), n(8), n(59), n(145), n(372)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(9), h = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), c = h(c), l = p(l), u = h(u), d = h(d);
            var v = n(373), y = [];
            v.keys().forEach(function(t2) {
              t2.match(/^\.\/[^_][\w/]*\.([tj])s$/) && y.push(v(t2));
            });
            var g = function() {
              function t2(e3) {
                var n3, o3, s2 = this;
                (0, a.default)(this, t2), this.moduleInstances = {}, this.eventsDispatcher = new d.default(), this.isReady = new Promise(function(t3, e4) {
                  n3 = t3, o3 = e4;
                }), Promise.resolve().then((0, i2.default)(r2.default.mark(function t3() {
                  return r2.default.wrap(function(t4) {
                    for (; ; )
                      switch (t4.prev = t4.next) {
                        case 0:
                          return s2.configuration = e3, t4.next = 3, s2.validate();
                        case 3:
                          return t4.next = 5, s2.init();
                        case 5:
                          return t4.next = 7, s2.start();
                        case 7:
                          l.logLabeled("I'm ready! (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727", "log", "", "color: #E24A75"), setTimeout((0, i2.default)(r2.default.mark(function t5() {
                            var e4, o4, i3;
                            return r2.default.wrap(function(t6) {
                              for (; ; )
                                switch (t6.prev = t6.next) {
                                  case 0:
                                    return t6.next = 2, s2.render();
                                  case 2:
                                    s2.configuration.autofocus && (e4 = s2.moduleInstances, o4 = e4.BlockManager, (i3 = e4.Caret).setToBlock(o4.blocks[0], i3.positions.START), o4.highlightCurrentNode()), s2.moduleInstances.UI.removeLoader(), n3();
                                  case 5:
                                  case "end":
                                    return t6.stop();
                                }
                            }, t5);
                          })), 500);
                        case 9:
                        case "end":
                          return t4.stop();
                      }
                  }, t3);
                }))).catch(function(t3) {
                  l.log("Editor.js is not ready because of ".concat(t3), "error"), o3(t3);
                });
              }
              var e2, n2;
              return (0, s.default)(t2, [{ key: "validate", value: (n2 = (0, i2.default)(r2.default.mark(function t3() {
                var e3, n3, o3;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        if (e3 = this.config, n3 = e3.holderId, o3 = e3.holder, !n3 || !o3) {
                          t4.next = 3;
                          break;
                        }
                        throw Error("\xABholderId\xBB and \xABholder\xBB param can't assign at the same time.");
                      case 3:
                        if (!l.isString(o3) || c.default.get(o3)) {
                          t4.next = 5;
                          break;
                        }
                        throw Error("element with ID \xAB".concat(o3, "\xBB is missing. Pass correct holder's ID."));
                      case 5:
                        if (!o3 || !l.isObject(o3) || c.default.isElement(o3)) {
                          t4.next = 7;
                          break;
                        }
                        throw Error("\xABholder\xBB value must be an Element node");
                      case 7:
                      case "end":
                        return t4.stop();
                    }
                }, t3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "init", value: function() {
                this.constructModules(), this.configureModules();
              } }, { key: "start", value: (e2 = (0, i2.default)(r2.default.mark(function t3() {
                var e3, n3 = this;
                return r2.default.wrap(function(t4) {
                  for (; ; )
                    switch (t4.prev = t4.next) {
                      case 0:
                        return e3 = ["Tools", "UI", "BlockManager", "Paste", "BlockSelection", "RectangleSelection", "CrossBlockSelection", "ReadOnly"], t4.next = 3, e3.reduce(function(t5, e4) {
                          return t5.then((0, i2.default)(r2.default.mark(function t6() {
                            return r2.default.wrap(function(t7) {
                              for (; ; )
                                switch (t7.prev = t7.next) {
                                  case 0:
                                    return t7.prev = 0, t7.next = 3, n3.moduleInstances[e4].prepare();
                                  case 3:
                                    t7.next = 10;
                                    break;
                                  case 5:
                                    if (t7.prev = 5, t7.t0 = t7.catch(0), !(t7.t0 instanceof f.CriticalError)) {
                                      t7.next = 9;
                                      break;
                                    }
                                    throw new Error(t7.t0.message);
                                  case 9:
                                    l.log("Module ".concat(e4, " was skipped because of %o"), "warn", t7.t0);
                                  case 10:
                                  case "end":
                                    return t7.stop();
                                }
                            }, t6, null, [[0, 5]]);
                          })));
                        }, Promise.resolve());
                      case 3:
                      case "end":
                        return t4.stop();
                    }
                }, t3);
              })), function() {
                return e2.apply(this, arguments);
              }) }, { key: "render", value: function() {
                return this.moduleInstances.Renderer.render(this.config.data.blocks);
              } }, { key: "constructModules", value: function() {
                var t3 = this;
                y.forEach(function(e3) {
                  var n3 = l.isFunction(e3) ? e3 : e3.default;
                  try {
                    t3.moduleInstances[n3.displayName] = new n3({ config: t3.configuration, eventsDispatcher: t3.eventsDispatcher });
                  } catch (t4) {
                    l.log("Module ".concat(n3.displayName, " skipped because"), "warn", t4);
                  }
                });
              } }, { key: "configureModules", value: function() {
                for (var t3 in this.moduleInstances)
                  Object.prototype.hasOwnProperty.call(this.moduleInstances, t3) && (this.moduleInstances[t3].state = this.getModulesDiff(t3));
              } }, { key: "getModulesDiff", value: function(t3) {
                var e3 = {};
                for (var n3 in this.moduleInstances)
                  n3 !== t3 && (e3[n3] = this.moduleInstances[n3]);
                return e3;
              } }, { key: "configuration", set: function(t3) {
                var e3, n3;
                l.isObject(t3) ? this.config = Object.assign({}, t3) : this.config = { holder: t3 }, l.deprecationAssert(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = l.LogLevels.VERBOSE), l.setLogLevel(this.config.logLevel), l.deprecationAssert(Boolean(this.config.initialBlock), "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
                var o3 = { type: this.config.defaultBlock, data: {} };
                this.config.placeholder = this.config.placeholder || false, this.config.sanitizer = this.config.sanitizer || { p: true, b: true, a: true }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || function() {
                }, this.config.onChange = this.config.onChange || function() {
                }, this.config.inlineToolbar = this.config.inlineToolbar === void 0 || this.config.inlineToolbar, !l.isEmpty(this.config.data) && this.config.data.blocks && this.config.data.blocks.length !== 0 || (this.config.data = { blocks: [o3] }), this.config.readOnly = this.config.readOnly || false, ((e3 = this.config.i18n) === null || e3 === void 0 ? void 0 : e3.messages) && u.default.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((n3 = this.config.i18n) === null || n3 === void 0 ? void 0 : n3.direction) || "ltr";
              }, get: function() {
                return this.config;
              } }]), t2;
            }();
            o2.default = g, g.displayName = "Core", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o = n(142);
          t.exports = function(t2) {
            if (Array.isArray(t2))
              return o(t2);
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(t2))
              return Array.from(t2);
          };
        }, function(t, e) {
          t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          };
        }, function(t, e) {
          t.exports = function(t2, e2, n) {
            return e2 in t2 ? Object.defineProperty(t2, e2, { value: n, enumerable: true, configurable: true, writable: true }) : t2[e2] = n, t2;
          };
        }, function(t, e) {
          t.exports = function(t2) {
            if (t2 === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t2;
          };
        }, function(t, e) {
          t.exports = function(t2) {
            return Function.toString.call(t2).indexOf("[native code]") !== -1;
          };
        }, function(t, e, n) {
          var o = n(107), r = n(371);
          function i(e2, n2, a) {
            return r() ? t.exports = i = Reflect.construct : t.exports = i = function(t2, e3, n3) {
              var r2 = [null];
              r2.push.apply(r2, e3);
              var i2 = new (Function.bind.apply(t2, r2))();
              return n3 && o(i2, n3.prototype), i2;
            }, i.apply(null, arguments);
          }
          t.exports = i;
        }, function(t, e) {
          t.exports = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t2) {
              return false;
            }
          };
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3)], (i = typeof (o = function(o2, r2, i2) {
            "use strict";
            var a = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = a(r2), i2 = a(i2);
            var s = function() {
              function t2() {
                (0, r2.default)(this, t2), this.subscribers = {};
              }
              return (0, i2.default)(t2, [{ key: "on", value: function(t3, e2) {
                t3 in this.subscribers || (this.subscribers[t3] = []), this.subscribers[t3].push(e2);
              } }, { key: "once", value: function(t3, e2) {
                var n2 = this;
                t3 in this.subscribers || (this.subscribers[t3] = []), this.subscribers[t3].push(function o3(r3) {
                  var i3 = e2(r3), a2 = n2.subscribers[t3].indexOf(o3);
                  return a2 !== -1 && n2.subscribers[t3].splice(a2, 1), i3;
                });
              } }, { key: "emit", value: function(t3, e2) {
                this.subscribers[t3] && this.subscribers[t3].reduce(function(t4, e3) {
                  return e3(t4) || t4;
                }, e2);
              } }, { key: "off", value: function(t3, e2) {
                for (var n2 = 0; n2 < this.subscribers[t3].length; n2++)
                  if (this.subscribers[t3][n2] === e2) {
                    delete this.subscribers[t3][n2];
                    break;
                  }
              } }, { key: "destroy", value: function() {
                this.subscribers = null;
              } }]), t2;
            }();
            o2.default = s, s.displayName = "EventsDispatcher", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o = { "./api": 79, "./api/": 79, "./api/blocks": 147, "./api/blocks.ts": 147, "./api/caret": 149, "./api/caret.ts": 149, "./api/events": 150, "./api/events.ts": 150, "./api/i18n": 151, "./api/i18n.ts": 151, "./api/index": 79, "./api/index.ts": 79, "./api/inlineToolbar": 152, "./api/inlineToolbar.ts": 152, "./api/listeners": 153, "./api/listeners.ts": 153, "./api/notifier": 154, "./api/notifier.ts": 154, "./api/readonly": 155, "./api/readonly.ts": 155, "./api/sanitizer": 156, "./api/sanitizer.ts": 156, "./api/saver": 157, "./api/saver.ts": 157, "./api/selection": 158, "./api/selection.ts": 158, "./api/styles": 159, "./api/styles.ts": 159, "./api/toolbar": 160, "./api/toolbar.ts": 160, "./api/tooltip": 161, "./api/tooltip.ts": 161, "./blockEvents": 162, "./blockEvents.ts": 162, "./blockManager": 163, "./blockManager.ts": 163, "./blockSelection": 164, "./blockSelection.ts": 164, "./caret": 165, "./caret.ts": 165, "./crossBlockSelection": 166, "./crossBlockSelection.ts": 166, "./dragNDrop": 167, "./dragNDrop.ts": 167, "./modificationsObserver": 168, "./modificationsObserver.ts": 168, "./notifier": 169, "./notifier.ts": 169, "./paste": 170, "./paste.ts": 170, "./readonly": 171, "./readonly.ts": 171, "./rectangleSelection": 172, "./rectangleSelection.ts": 172, "./renderer": 173, "./renderer.ts": 173, "./sanitizer": 174, "./sanitizer.ts": 174, "./saver": 175, "./saver.ts": 175, "./toolbar": 80, "./toolbar/": 80, "./toolbar/blockSettings": 176, "./toolbar/blockSettings.ts": 176, "./toolbar/conversion": 177, "./toolbar/conversion.ts": 177, "./toolbar/index": 80, "./toolbar/index.ts": 80, "./toolbar/inline": 178, "./toolbar/inline.ts": 178, "./toolbar/toolbox": 179, "./toolbar/toolbox.ts": 179, "./tools": 180, "./tools.ts": 180, "./tooltip": 181, "./tooltip.ts": 181, "./ui": 182, "./ui.ts": 182 };
          function r(t2) {
            var e2 = i(t2);
            return n(e2);
          }
          function i(t2) {
            if (!n.o(o, t2)) {
              var e2 = new Error("Cannot find module '" + t2 + "'");
              throw e2.code = "MODULE_NOT_FOUND", e2;
            }
            return o[t2];
          }
          r.keys = function() {
            return Object.keys(o);
          }, r.resolve = i, t.exports = r, r.id = 373;
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(8)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(9), c = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), a = s(a);
            var l = function() {
              function t2() {
                (0, r2.default)(this, t2), this.allListeners = [];
              }
              return (0, i2.default)(t2, [{ key: "on", value: function(t3, e2, n2) {
                var o3 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], r3 = a.generateId("l"), i3 = { id: r3, element: t3, eventType: e2, handler: n2, options: o3 }, s2 = this.findOne(t3, e2, n2);
                if (!s2)
                  return this.allListeners.push(i3), t3.addEventListener(e2, n2, o3), r3;
              } }, { key: "off", value: function(t3, e2, n2, o3) {
                var r3 = this, i3 = this.findAll(t3, e2, n2);
                i3.forEach(function(t4, e3) {
                  var n3 = r3.allListeners.indexOf(i3[e3]);
                  n3 > -1 && (r3.allListeners.splice(n3, 1), t4.element.removeEventListener(t4.eventType, t4.handler, t4.options));
                });
              } }, { key: "offById", value: function(t3) {
                var e2 = this.findById(t3);
                e2 && e2.element.removeEventListener(e2.eventType, e2.handler, e2.options);
              } }, { key: "findOne", value: function(t3, e2, n2) {
                var o3 = this.findAll(t3, e2, n2);
                return o3.length > 0 ? o3[0] : null;
              } }, { key: "findAll", value: function(t3, e2, n2) {
                var o3 = t3 ? this.findByEventTarget(t3) : [];
                return t3 && e2 && n2 ? o3.filter(function(t4) {
                  return t4.eventType === e2 && t4.handler === n2;
                }) : t3 && e2 ? o3.filter(function(t4) {
                  return t4.eventType === e2;
                }) : o3;
              } }, { key: "removeAll", value: function() {
                this.allListeners.map(function(t3) {
                  t3.element.removeEventListener(t3.eventType, t3.handler, t3.options);
                }), this.allListeners = [];
              } }, { key: "destroy", value: function() {
                this.removeAll();
              } }, { key: "findByEventTarget", value: function(t3) {
                return this.allListeners.filter(function(e2) {
                  if (e2.element === t3)
                    return e2;
                });
              } }, { key: "findByType", value: function(t3) {
                return this.allListeners.filter(function(e2) {
                  if (e2.eventType === t3)
                    return e2;
                });
              } }, { key: "findByHandler", value: function(t3) {
                return this.allListeners.filter(function(e2) {
                  if (e2.handler === t3)
                    return e2;
                });
              } }, { key: "findById", value: function(t3) {
                return this.allListeners.find(function(e2) {
                  return e2.id === t3;
                });
              } }]), t2;
            }();
            o2.default = l, l.displayName = "Listeners", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(15), n(8), n(25)], (i = typeof (o = function(o2, r2, i2, a, s, c) {
            "use strict";
            var l = n(9), u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = l(s), c = u(c);
            var f = function() {
              function t2(e2, n2) {
                (0, r2.default)(this, t2), this.cursor = -1, this.items = [], this.items = e2 || [], this.focusedCssClass = n2;
              }
              return (0, i2.default)(t2, [{ key: "setItems", value: function(t3) {
                this.items = t3;
              } }, { key: "next", value: function() {
                this.cursor = this.leafNodesAndReturnIndex(t2.directions.RIGHT);
              } }, { key: "previous", value: function() {
                this.cursor = this.leafNodesAndReturnIndex(t2.directions.LEFT);
              } }, { key: "dropCursor", value: function() {
                this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
              } }, { key: "leafNodesAndReturnIndex", value: function(e2) {
                var n2 = this;
                if (this.items.length === 0)
                  return this.cursor;
                var o3 = this.cursor;
                return o3 === -1 ? o3 = e2 === t2.directions.RIGHT ? -1 : 0 : this.items[o3].classList.remove(this.focusedCssClass), o3 = e2 === t2.directions.RIGHT ? (o3 + 1) % this.items.length : (this.items.length + o3 - 1) % this.items.length, a.default.canSetCaret(this.items[o3]) && s.delay(function() {
                  return c.default.setCursor(n2.items[o3]);
                }, 50)(), this.items[o3].classList.add(this.focusedCssClass), o3;
              } }, { key: "currentItem", get: function() {
                return this.cursor === -1 ? null : this.items[this.cursor];
              } }]), t2;
            }();
            o2.default = f, f.displayName = "DomIterator", f.directions = { RIGHT: "right", LEFT: "left" }, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(8), n(15), n(61)], (i = typeof (o = function(o2, r2, i2, a, s, c) {
            "use strict";
            var l = n(9), u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = l(a), s = u(s);
            var f = function() {
              function t2(e2) {
                (0, r2.default)(this, t2), this.blocks = [], this.workingArea = e2;
              }
              return (0, i2.default)(t2, [{ key: "push", value: function(t3) {
                this.blocks.push(t3), this.insertToDOM(t3);
              } }, { key: "swap", value: function(t3, e2) {
                var n2 = this.blocks[e2];
                s.default.swap(this.blocks[t3].holder, n2.holder), this.blocks[e2] = this.blocks[t3], this.blocks[t3] = n2;
              } }, { key: "move", value: function(t3, e2) {
                var n2 = this.blocks.splice(e2, 1)[0], o3 = t3 - 1, r3 = Math.max(0, o3), i3 = this.blocks[r3];
                t3 > 0 ? this.insertToDOM(n2, "afterend", i3) : this.insertToDOM(n2, "beforebegin", i3), this.blocks.splice(t3, 0, n2);
                var a2 = this.composeBlockEvent("move", { fromIndex: e2, toIndex: t3 });
                n2.call(c.BlockToolAPI.MOVED, a2);
              } }, { key: "insert", value: function(t3, e2) {
                var n2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                if (this.length) {
                  t3 > this.length && (t3 = this.length), n2 && (this.blocks[t3].holder.remove(), this.blocks[t3].call(c.BlockToolAPI.REMOVED));
                  var o3 = n2 ? 1 : 0;
                  if (this.blocks.splice(t3, o3, e2), t3 > 0) {
                    var r3 = this.blocks[t3 - 1];
                    this.insertToDOM(e2, "afterend", r3);
                  } else {
                    var i3 = this.blocks[t3 + 1];
                    i3 ? this.insertToDOM(e2, "beforebegin", i3) : this.insertToDOM(e2);
                  }
                } else
                  this.push(e2);
              } }, { key: "remove", value: function(t3) {
                isNaN(t3) && (t3 = this.length - 1), this.blocks[t3].holder.remove(), this.blocks[t3].call(c.BlockToolAPI.REMOVED), this.blocks.splice(t3, 1);
              } }, { key: "removeAll", value: function() {
                this.workingArea.innerHTML = "", this.blocks.forEach(function(t3) {
                  return t3.call(c.BlockToolAPI.REMOVED);
                }), this.blocks.length = 0;
              } }, { key: "insertAfter", value: function(t3, e2) {
                var n2 = this.blocks.indexOf(t3);
                this.insert(n2 + 1, e2);
              } }, { key: "get", value: function(t3) {
                return this.blocks[t3];
              } }, { key: "indexOf", value: function(t3) {
                return this.blocks.indexOf(t3);
              } }, { key: "insertToDOM", value: function(t3, e2, n2) {
                e2 ? n2.holder.insertAdjacentElement(e2, t3.holder) : this.workingArea.appendChild(t3.holder), t3.call(c.BlockToolAPI.RENDERED);
              } }, { key: "composeBlockEvent", value: function(t3, e2) {
                return new CustomEvent(t3, { detail: e2 });
              } }, { key: "length", get: function() {
                return this.blocks.length;
              } }, { key: "array", get: function() {
                return this.blocks;
              } }, { key: "nodes", get: function() {
                return a.array(this.workingArea.children);
              } }], [{ key: "set", value: function(t3, e2, n2) {
                return isNaN(Number(e2)) ? (Reflect.set(t3, e2, n2), true) : (t3.insert(+e2, n2), true);
              } }, { key: "get", value: function(t3, e2) {
                return isNaN(Number(e2)) ? Reflect.get(t3, e2) : t3.get(+e2);
              } }]), t2;
            }();
            o2.default = f, f.displayName = "Blocks", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && typeof t3 == "object" && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && typeof t3 != "string")
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "", n2(n2.s = 0);
          }([function(t2, e2, n2) {
            "use strict";
            function o(t3, e3) {
              for (var n3 = 0; n3 < e3.length; n3++) {
                var o2 = e3[n3];
                o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, o2.key, o2);
              }
            }
            function r(t3, e3, n3) {
              return e3 && o(t3.prototype, e3), n3 && o(t3, n3), t3;
            }
            n2.r(e2);
            var i = function() {
              function t3(e3) {
                var n3 = this;
                !function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, t3), this.commands = {}, this.keys = {}, this.name = e3.name, this.parseShortcutName(e3.name), this.element = e3.on, this.callback = e3.callback, this.executeShortcut = function(t4) {
                  n3.execute(t4);
                }, this.element.addEventListener("keydown", this.executeShortcut, false);
              }
              return r(t3, null, [{ key: "supportedCommands", get: function() {
                return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
              } }, { key: "keyCodes", get: function() {
                return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46 };
              } }]), r(t3, [{ key: "parseShortcutName", value: function(e3) {
                e3 = e3.split("+");
                for (var n3 = 0; n3 < e3.length; n3++) {
                  e3[n3] = e3[n3].toUpperCase();
                  var o2 = false;
                  for (var r2 in t3.supportedCommands)
                    if (t3.supportedCommands[r2].includes(e3[n3])) {
                      o2 = this.commands[r2] = true;
                      break;
                    }
                  o2 || (this.keys[e3[n3]] = true);
                }
                for (var i2 in t3.supportedCommands)
                  this.commands[i2] || (this.commands[i2] = false);
              } }, { key: "execute", value: function(e3) {
                var n3, o2 = { CMD: e3.ctrlKey || e3.metaKey, SHIFT: e3.shiftKey, ALT: e3.altKey }, r2 = true;
                for (n3 in this.commands)
                  this.commands[n3] !== o2[n3] && (r2 = false);
                var i2, a = true;
                for (i2 in this.keys)
                  a = a && e3.keyCode === t3.keyCodes[i2];
                r2 && a && this.callback(e3);
              } }, { key: "remove", value: function() {
                this.element.removeEventListener("keydown", this.executeShortcut);
              } }]), t3;
            }();
            e2.default = i;
          }]).default;
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && typeof t3 == "object" && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && typeof t3 != "string")
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "/", n2(n2.s = 0);
          }([function(t2, e2, n2) {
            "use strict";
            n2(1), t2.exports = function() {
              var t3 = n2(6), e3 = null;
              return { show: function(n3) {
                if (n3.message) {
                  !function() {
                    if (e3)
                      return true;
                    e3 = t3.getWrapper(), document.body.appendChild(e3);
                  }();
                  var o = null, r = n3.time || 8e3;
                  switch (n3.type) {
                    case "confirm":
                      o = t3.confirm(n3);
                      break;
                    case "prompt":
                      o = t3.prompt(n3);
                      break;
                    default:
                      o = t3.alert(n3), window.setTimeout(function() {
                        o.remove();
                      }, r);
                  }
                  e3.appendChild(o), o.classList.add("cdx-notify--bounce-in");
                }
              } };
            }();
          }, function(t2, e2, n2) {
            var o = n2(2);
            typeof o == "string" && (o = [[t2.i, o, ""]]), n2(4)(o, { hmr: true, transform: void 0, insertInto: void 0 }), o.locals && (t2.exports = o.locals);
          }, function(t2, e2, n2) {
            (t2.exports = n2(3)(false)).push([t2.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
          }, function(t2, e2) {
            t2.exports = function(t3) {
              var e3 = [];
              return e3.toString = function() {
                return this.map(function(e4) {
                  var n2 = function(t4, e5) {
                    var n3, o = t4[1] || "", r = t4[3];
                    if (!r)
                      return o;
                    if (e5 && typeof btoa == "function") {
                      var i = (n3 = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n3)))) + " */"), a = r.sources.map(function(t5) {
                        return "/*# sourceURL=" + r.sourceRoot + t5 + " */";
                      });
                      return [o].concat(a).concat([i]).join("\n");
                    }
                    return [o].join("\n");
                  }(e4, t3);
                  return e4[2] ? "@media " + e4[2] + "{" + n2 + "}" : n2;
                }).join("");
              }, e3.i = function(t4, n2) {
                typeof t4 == "string" && (t4 = [[null, t4, ""]]);
                for (var o = {}, r = 0; r < this.length; r++) {
                  var i = this[r][0];
                  typeof i == "number" && (o[i] = true);
                }
                for (r = 0; r < t4.length; r++) {
                  var a = t4[r];
                  typeof a[0] == "number" && o[a[0]] || (n2 && !a[2] ? a[2] = n2 : n2 && (a[2] = "(" + a[2] + ") and (" + n2 + ")"), e3.push(a));
                }
              }, e3;
            };
          }, function(t2, e2, n2) {
            var o, r, i = {}, a = (o = function() {
              return window && document && document.all && !window.atob;
            }, function() {
              return r === void 0 && (r = o.apply(this, arguments)), r;
            }), s = function(t3) {
              var e3 = {};
              return function(t4) {
                if (typeof t4 == "function")
                  return t4();
                if (e3[t4] === void 0) {
                  var n3 = function(t5) {
                    return document.querySelector(t5);
                  }.call(this, t4);
                  if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                    try {
                      n3 = n3.contentDocument.head;
                    } catch (t5) {
                      n3 = null;
                    }
                  e3[t4] = n3;
                }
                return e3[t4];
              };
            }(), c = null, l = 0, u = [], f = n2(5);
            function d(t3, e3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var o2 = t3[n3], r2 = i[o2.id];
                if (r2) {
                  r2.refs++;
                  for (var a2 = 0; a2 < r2.parts.length; a2++)
                    r2.parts[a2](o2.parts[a2]);
                  for (; a2 < o2.parts.length; a2++)
                    r2.parts.push(b(o2.parts[a2], e3));
                } else {
                  var s2 = [];
                  for (a2 = 0; a2 < o2.parts.length; a2++)
                    s2.push(b(o2.parts[a2], e3));
                  i[o2.id] = { id: o2.id, refs: 1, parts: s2 };
                }
              }
            }
            function p(t3, e3) {
              for (var n3 = [], o2 = {}, r2 = 0; r2 < t3.length; r2++) {
                var i2 = t3[r2], a2 = e3.base ? i2[0] + e3.base : i2[0], s2 = { css: i2[1], media: i2[2], sourceMap: i2[3] };
                o2[a2] ? o2[a2].parts.push(s2) : n3.push(o2[a2] = { id: a2, parts: [s2] });
              }
              return n3;
            }
            function h(t3, e3) {
              var n3 = s(t3.insertInto);
              if (!n3)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
              var o2 = u[u.length - 1];
              if (t3.insertAt === "top")
                o2 ? o2.nextSibling ? n3.insertBefore(e3, o2.nextSibling) : n3.appendChild(e3) : n3.insertBefore(e3, n3.firstChild), u.push(e3);
              else if (t3.insertAt === "bottom")
                n3.appendChild(e3);
              else {
                if (typeof t3.insertAt != "object" || !t3.insertAt.before)
                  throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var r2 = s(t3.insertInto + " " + t3.insertAt.before);
                n3.insertBefore(e3, r2);
              }
            }
            function v(t3) {
              if (t3.parentNode === null)
                return false;
              t3.parentNode.removeChild(t3);
              var e3 = u.indexOf(t3);
              e3 >= 0 && u.splice(e3, 1);
            }
            function y(t3) {
              var e3 = document.createElement("style");
              return t3.attrs.type === void 0 && (t3.attrs.type = "text/css"), g(e3, t3.attrs), h(t3, e3), e3;
            }
            function g(t3, e3) {
              Object.keys(e3).forEach(function(n3) {
                t3.setAttribute(n3, e3[n3]);
              });
            }
            function b(t3, e3) {
              var n3, o2, r2, i2;
              if (e3.transform && t3.css) {
                if (!(i2 = e3.transform(t3.css)))
                  return function() {
                  };
                t3.css = i2;
              }
              if (e3.singleton) {
                var a2 = l++;
                n3 = c || (c = y(e3)), o2 = x.bind(null, n3, a2, false), r2 = x.bind(null, n3, a2, true);
              } else
                t3.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (n3 = function(t4) {
                  var e4 = document.createElement("link");
                  return t4.attrs.type === void 0 && (t4.attrs.type = "text/css"), t4.attrs.rel = "stylesheet", g(e4, t4.attrs), h(t4, e4), e4;
                }(e3), o2 = function(t4, e4, n4) {
                  var o3 = n4.css, r3 = n4.sourceMap, i3 = e4.convertToAbsoluteUrls === void 0 && r3;
                  (e4.convertToAbsoluteUrls || i3) && (o3 = f(o3)), r3 && (o3 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r3)))) + " */");
                  var a3 = new Blob([o3], { type: "text/css" }), s2 = t4.href;
                  t4.href = URL.createObjectURL(a3), s2 && URL.revokeObjectURL(s2);
                }.bind(null, n3, e3), r2 = function() {
                  v(n3), n3.href && URL.revokeObjectURL(n3.href);
                }) : (n3 = y(e3), o2 = function(t4, e4) {
                  var n4 = e4.css, o3 = e4.media;
                  if (o3 && t4.setAttribute("media", o3), t4.styleSheet)
                    t4.styleSheet.cssText = n4;
                  else {
                    for (; t4.firstChild; )
                      t4.removeChild(t4.firstChild);
                    t4.appendChild(document.createTextNode(n4));
                  }
                }.bind(null, n3), r2 = function() {
                  v(n3);
                });
              return o2(t3), function(e4) {
                if (e4) {
                  if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap)
                    return;
                  o2(t3 = e4);
                } else
                  r2();
              };
            }
            t2.exports = function(t3, e3) {
              if (typeof DEBUG != "undefined" && DEBUG && typeof document != "object")
                throw new Error("The style-loader cannot be used in a non-browser environment");
              (e3 = e3 || {}).attrs = typeof e3.attrs == "object" ? e3.attrs : {}, e3.singleton || typeof e3.singleton == "boolean" || (e3.singleton = a()), e3.insertInto || (e3.insertInto = "head"), e3.insertAt || (e3.insertAt = "bottom");
              var n3 = p(t3, e3);
              return d(n3, e3), function(t4) {
                for (var o2 = [], r2 = 0; r2 < n3.length; r2++) {
                  var a2 = n3[r2];
                  (s2 = i[a2.id]).refs--, o2.push(s2);
                }
                for (t4 && d(p(t4, e3), e3), r2 = 0; r2 < o2.length; r2++) {
                  var s2;
                  if ((s2 = o2[r2]).refs === 0) {
                    for (var c2 = 0; c2 < s2.parts.length; c2++)
                      s2.parts[c2]();
                    delete i[s2.id];
                  }
                }
              };
            };
            var m, k = (m = [], function(t3, e3) {
              return m[t3] = e3, m.filter(Boolean).join("\n");
            });
            function x(t3, e3, n3, o2) {
              var r2 = n3 ? "" : o2.css;
              if (t3.styleSheet)
                t3.styleSheet.cssText = k(e3, r2);
              else {
                var i2 = document.createTextNode(r2), a2 = t3.childNodes;
                a2[e3] && t3.removeChild(a2[e3]), a2.length ? t3.insertBefore(i2, a2[e3]) : t3.appendChild(i2);
              }
            }
          }, function(t2, e2) {
            t2.exports = function(t3) {
              var e3 = typeof window != "undefined" && window.location;
              if (!e3)
                throw new Error("fixUrls requires window.location");
              if (!t3 || typeof t3 != "string")
                return t3;
              var n2 = e3.protocol + "//" + e3.host, o = n2 + e3.pathname.replace(/\/[^\/]*$/, "/");
              return t3.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t4, e4) {
                var r, i = e4.trim().replace(/^"(.*)"$/, function(t5, e5) {
                  return e5;
                }).replace(/^'(.*)'$/, function(t5, e5) {
                  return e5;
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t4 : (r = i.indexOf("//") === 0 ? i : i.indexOf("/") === 0 ? n2 + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
              });
            };
          }, function(t2, e2, n2) {
            "use strict";
            var o, r, i, a, s, c;
            t2.exports = (o = "cdx-notify", r = "cdx-notify__cross", i = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", { alert: c = function(t3) {
              var e3 = document.createElement("DIV"), n3 = document.createElement("DIV"), i2 = t3.message, a2 = t3.style;
              return e3.classList.add(o), a2 && e3.classList.add(o + "--" + a2), e3.innerHTML = i2, n3.classList.add(r), n3.addEventListener("click", e3.remove.bind(e3)), e3.appendChild(n3), e3;
            }, confirm: function(t3) {
              var e3 = c(t3), n3 = document.createElement("div"), o2 = document.createElement("button"), l = document.createElement("button"), u = e3.querySelector("." + r), f = t3.cancelHandler, d = t3.okHandler;
              return n3.classList.add(s), o2.innerHTML = t3.okText || "Confirm", l.innerHTML = t3.cancelText || "Cancel", o2.classList.add(a), l.classList.add(a), o2.classList.add(i), l.classList.add("cdx-notify__button--cancel"), f && typeof f == "function" && (l.addEventListener("click", f), u.addEventListener("click", f)), d && typeof d == "function" && o2.addEventListener("click", d), o2.addEventListener("click", e3.remove.bind(e3)), l.addEventListener("click", e3.remove.bind(e3)), n3.appendChild(o2), n3.appendChild(l), e3.appendChild(n3), e3;
            }, prompt: function(t3) {
              var e3 = c(t3), n3 = document.createElement("div"), o2 = document.createElement("button"), l = document.createElement("input"), u = e3.querySelector("." + r), f = t3.cancelHandler, d = t3.okHandler;
              return n3.classList.add(s), o2.innerHTML = t3.okText || "Ok", o2.classList.add(a), o2.classList.add(i), l.classList.add("cdx-notify__input"), t3.placeholder && l.setAttribute("placeholder", t3.placeholder), t3.default && (l.value = t3.default), t3.inputType && (l.type = t3.inputType), f && typeof f == "function" && u.addEventListener("click", f), d && typeof d == "function" && o2.addEventListener("click", function() {
                d(l.value);
              }), o2.addEventListener("click", e3.remove.bind(e3)), n3.appendChild(l), n3.appendChild(o2), e3.appendChild(n3), e3;
            }, getWrapper: function() {
              var t3 = document.createElement("DIV");
              return t3.classList.add("cdx-notifies"), t3;
            } });
          }]);
        }, function(t, e, n) {
          var o, r;
          (r = typeof (o = function() {
            function t2(t3) {
              var e3 = t3.tags;
              if (!Object.keys(e3).map(function(t4) {
                return typeof e3[t4];
              }).every(function(t4) {
                return t4 === "object" || t4 === "boolean" || t4 === "function";
              }))
                throw new Error("The configuration was invalid");
              this.config = t3;
            }
            var e2 = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
            function n2(t3) {
              return e2.indexOf(t3.nodeName) !== -1;
            }
            var o2 = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
            function r2(t3) {
              return o2.indexOf(t3.nodeName) !== -1;
            }
            function i(t3, e3, n3) {
              return typeof t3.tags[e3] == "function" ? t3.tags[e3](n3) : t3.tags[e3];
            }
            function a(t3, e3) {
              return e3 === void 0 || typeof e3 == "boolean" && !e3;
            }
            function s(t3, e3, n3) {
              var o3 = t3.name.toLowerCase();
              return e3 !== true && (typeof e3[o3] == "function" ? !e3[o3](t3.value, n3) : e3[o3] === void 0 || e3[o3] === false || typeof e3[o3] == "string" && e3[o3] !== t3.value);
            }
            return t2.prototype.clean = function(t3) {
              const e3 = document.implementation.createHTMLDocument(), n3 = e3.createElement("div");
              return n3.innerHTML = t3, this._sanitize(e3, n3), n3.innerHTML;
            }, t2.prototype._sanitize = function(t3, e3) {
              var o3 = function(t4, e4) {
                return t4.createTreeWalker(e4, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, false);
              }(t3, e3), c = o3.firstChild();
              if (c)
                do {
                  if (c.nodeType !== Node.TEXT_NODE) {
                    if (c.nodeType === Node.COMMENT_NODE) {
                      e3.removeChild(c), this._sanitize(t3, e3);
                      break;
                    }
                    var l, u = r2(c);
                    u && (l = Array.prototype.some.call(c.childNodes, n2));
                    var f = !!e3.parentNode, d = n2(e3) && n2(c) && f, p = c.nodeName.toLowerCase(), h = i(this.config, p, c);
                    if (u && l || a(0, h) || !this.config.keepNestedBlockElements && d) {
                      if (c.nodeName !== "SCRIPT" && c.nodeName !== "STYLE")
                        for (; c.childNodes.length > 0; )
                          e3.insertBefore(c.childNodes[0], c);
                      e3.removeChild(c), this._sanitize(t3, e3);
                      break;
                    }
                    for (var v = 0; v < c.attributes.length; v += 1) {
                      var y = c.attributes[v];
                      s(y, h, c) && (c.removeAttribute(y.name), v -= 1);
                    }
                    this._sanitize(t3, c);
                  } else if (c.data.trim() === "" && (c.previousElementSibling && n2(c.previousElementSibling) || c.nextElementSibling && n2(c.nextElementSibling))) {
                    e3.removeChild(c), this._sanitize(t3, e3);
                    break;
                  }
                } while (c = o3.nextSibling());
            }, t2;
          }) == "function" ? o.call(e, n, e, t) : o) === void 0 || (t.exports = r);
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && typeof t3 == "object" && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && typeof t3 != "string")
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "/", n2(n2.s = 0);
          }([function(t2, e2, n2) {
            function o(t3, e3) {
              for (var n3 = 0; n3 < e3.length; n3++) {
                var o2 = e3[n3];
                o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, o2.key, o2);
              }
            }
            function r(t3, e3, n3) {
              return e3 && o(t3.prototype, e3), n3 && o(t3, n3), t3;
            }
            n2(1).toString();
            var i = function() {
              function t3(e3) {
                var n3 = e3.data, o2 = e3.config, r2 = e3.api, i2 = e3.readOnly;
                !function(t4, e4) {
                  if (!(t4 instanceof e4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, t3), this.api = r2, this.readOnly = i2, this._CSS = { block: this.api.styles.block, wrapper: "ce-paragraph" }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o2.placeholder ? o2.placeholder : t3.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this._preserveBlank = o2.preserveBlank !== void 0 && o2.preserveBlank, this.data = n3;
              }
              return r(t3, null, [{ key: "DEFAULT_PLACEHOLDER", get: function() {
                return "";
              } }]), r(t3, [{ key: "onKeyUp", value: function(t4) {
                t4.code !== "Backspace" && t4.code !== "Delete" || this._element.textContent === "" && (this._element.innerHTML = "");
              } }, { key: "drawView", value: function() {
                var t4 = document.createElement("DIV");
                return t4.classList.add(this._CSS.wrapper, this._CSS.block), t4.contentEditable = false, t4.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (t4.contentEditable = true, t4.addEventListener("keyup", this.onKeyUp)), t4;
              } }, { key: "render", value: function() {
                return this._element;
              } }, { key: "merge", value: function(t4) {
                var e3 = { text: this.data.text + t4.text };
                this.data = e3;
              } }, { key: "validate", value: function(t4) {
                return !(t4.text.trim() === "" && !this._preserveBlank);
              } }, { key: "save", value: function(t4) {
                return { text: t4.innerHTML };
              } }, { key: "onPaste", value: function(t4) {
                var e3 = { text: t4.detail.data.innerHTML };
                this.data = e3;
              } }, { key: "data", get: function() {
                var t4 = this._element.innerHTML;
                return this._data.text = t4, this._data;
              }, set: function(t4) {
                this._data = t4 || {}, this._element.innerHTML = this._data.text || "";
              } }], [{ key: "conversionConfig", get: function() {
                return { export: "text", import: "text" };
              } }, { key: "sanitize", get: function() {
                return { text: { br: true } };
              } }, { key: "isReadOnlySupported", get: function() {
                return true;
              } }, { key: "pasteConfig", get: function() {
                return { tags: ["P"] };
              } }, { key: "toolbox", get: function() {
                return { icon: n2(5).default, title: "Text" };
              } }]), t3;
            }();
            t2.exports = i;
          }, function(t2, e2, n2) {
            var o = n2(2), r = n2(3);
            typeof (r = r.__esModule ? r.default : r) == "string" && (r = [[t2.i, r, ""]]), o(r, { insert: "head", singleton: false }), t2.exports = r.locals || {};
          }, function(t2, e2, n2) {
            "use strict";
            var o, r = function() {
              var t3 = {};
              return function(e3) {
                if (t3[e3] === void 0) {
                  var n3 = document.querySelector(e3);
                  if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                    try {
                      n3 = n3.contentDocument.head;
                    } catch (t4) {
                      n3 = null;
                    }
                  t3[e3] = n3;
                }
                return t3[e3];
              };
            }(), i = [];
            function a(t3) {
              for (var e3 = -1, n3 = 0; n3 < i.length; n3++)
                if (i[n3].identifier === t3) {
                  e3 = n3;
                  break;
                }
              return e3;
            }
            function s(t3, e3) {
              for (var n3 = {}, o2 = [], r2 = 0; r2 < t3.length; r2++) {
                var s2 = t3[r2], c2 = e3.base ? s2[0] + e3.base : s2[0], l2 = n3[c2] || 0, u2 = "".concat(c2, " ").concat(l2);
                n3[c2] = l2 + 1;
                var f2 = a(u2), d2 = { css: s2[1], media: s2[2], sourceMap: s2[3] };
                f2 !== -1 ? (i[f2].references++, i[f2].updater(d2)) : i.push({ identifier: u2, updater: v(d2, e3), references: 1 }), o2.push(u2);
              }
              return o2;
            }
            function c(t3) {
              var e3 = document.createElement("style"), o2 = t3.attributes || {};
              if (o2.nonce === void 0) {
                var i2 = n2.nc;
                i2 && (o2.nonce = i2);
              }
              if (Object.keys(o2).forEach(function(t4) {
                e3.setAttribute(t4, o2[t4]);
              }), typeof t3.insert == "function")
                t3.insert(e3);
              else {
                var a2 = r(t3.insert || "head");
                if (!a2)
                  throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a2.appendChild(e3);
              }
              return e3;
            }
            var l, u = (l = [], function(t3, e3) {
              return l[t3] = e3, l.filter(Boolean).join("\n");
            });
            function f(t3, e3, n3, o2) {
              var r2 = n3 ? "" : o2.media ? "@media ".concat(o2.media, " {").concat(o2.css, "}") : o2.css;
              if (t3.styleSheet)
                t3.styleSheet.cssText = u(e3, r2);
              else {
                var i2 = document.createTextNode(r2), a2 = t3.childNodes;
                a2[e3] && t3.removeChild(a2[e3]), a2.length ? t3.insertBefore(i2, a2[e3]) : t3.appendChild(i2);
              }
            }
            function d(t3, e3, n3) {
              var o2 = n3.css, r2 = n3.media, i2 = n3.sourceMap;
              if (r2 ? t3.setAttribute("media", r2) : t3.removeAttribute("media"), i2 && btoa && (o2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i2)))), " */")), t3.styleSheet)
                t3.styleSheet.cssText = o2;
              else {
                for (; t3.firstChild; )
                  t3.removeChild(t3.firstChild);
                t3.appendChild(document.createTextNode(o2));
              }
            }
            var p = null, h = 0;
            function v(t3, e3) {
              var n3, o2, r2;
              if (e3.singleton) {
                var i2 = h++;
                n3 = p || (p = c(e3)), o2 = f.bind(null, n3, i2, false), r2 = f.bind(null, n3, i2, true);
              } else
                n3 = c(e3), o2 = d.bind(null, n3, e3), r2 = function() {
                  !function(t4) {
                    if (t4.parentNode === null)
                      return false;
                    t4.parentNode.removeChild(t4);
                  }(n3);
                };
              return o2(t3), function(e4) {
                if (e4) {
                  if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap)
                    return;
                  o2(t3 = e4);
                } else
                  r2();
              };
            }
            t2.exports = function(t3, e3) {
              (e3 = e3 || {}).singleton || typeof e3.singleton == "boolean" || (e3.singleton = (o === void 0 && (o = Boolean(window && document && document.all && !window.atob)), o));
              var n3 = s(t3 = t3 || [], e3);
              return function(t4) {
                if (t4 = t4 || [], Object.prototype.toString.call(t4) === "[object Array]") {
                  for (var o2 = 0; o2 < n3.length; o2++) {
                    var r2 = a(n3[o2]);
                    i[r2].references--;
                  }
                  for (var c2 = s(t4, e3), l2 = 0; l2 < n3.length; l2++) {
                    var u2 = a(n3[l2]);
                    i[u2].references === 0 && (i[u2].updater(), i.splice(u2, 1));
                  }
                  n3 = c2;
                }
              };
            };
          }, function(t2, e2, n2) {
            (e2 = n2(4)(false)).push([t2.i, ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n", ""]), t2.exports = e2;
          }, function(t2, e2, n2) {
            "use strict";
            t2.exports = function(t3) {
              var e3 = [];
              return e3.toString = function() {
                return this.map(function(e4) {
                  var n3 = function(t4, e5) {
                    var n4, o, r, i = t4[1] || "", a = t4[3];
                    if (!a)
                      return i;
                    if (e5 && typeof btoa == "function") {
                      var s = (n4 = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n4)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */")), c = a.sources.map(function(t5) {
                        return "/*# sourceURL=".concat(a.sourceRoot || "").concat(t5, " */");
                      });
                      return [i].concat(c).concat([s]).join("\n");
                    }
                    return [i].join("\n");
                  }(e4, t3);
                  return e4[2] ? "@media ".concat(e4[2], " {").concat(n3, "}") : n3;
                }).join("");
              }, e3.i = function(t4, n3, o) {
                typeof t4 == "string" && (t4 = [[null, t4, ""]]);
                var r = {};
                if (o)
                  for (var i = 0; i < this.length; i++) {
                    var a = this[i][0];
                    a != null && (r[a] = true);
                  }
                for (var s = 0; s < t4.length; s++) {
                  var c = [].concat(t4[s]);
                  o && r[c[0]] || (n3 && (c[2] ? c[2] = "".concat(n3, " and ").concat(c[2]) : c[2] = n3), e3.push(c));
                }
              }, e3;
            };
          }, function(t2, e2, n2) {
            "use strict";
            n2.r(e2), e2.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n';
          }]);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(15)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var c = function() {
              function t2() {
                (0, r2.default)(this, t2), this.commandName = "bold", this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--bold" }, this.nodes = { button: void 0 };
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button;
              } }, { key: "surround", value: function(t3) {
                document.execCommand(this.commandName);
              } }, { key: "checkState", value: function(t3) {
                var e2 = document.queryCommandState(this.commandName);
                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e2), e2;
              } }, { key: "shortcut", get: function() {
                return "CMD+B";
              } }], [{ key: "sanitize", get: function() {
                return { b: {} };
              } }]), t2;
            }();
            o2.default = c, c.displayName = "BoldInlineTool", c.isInline = true, c.title = "Bold", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(15)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var c = function() {
              function t2() {
                (0, r2.default)(this, t2), this.commandName = "italic", this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--italic" }, this.nodes = { button: null };
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 4, 11)), this.nodes.button;
              } }, { key: "surround", value: function(t3) {
                document.execCommand(this.commandName);
              } }, { key: "checkState", value: function(t3) {
                var e2 = document.queryCommandState(this.commandName);
                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e2), e2;
              } }, { key: "shortcut", get: function() {
                return "CMD+I";
              } }], [{ key: "sanitize", get: function() {
                return { i: {} };
              } }]), t2;
            }();
            o2.default = c, c.displayName = "ItalicInlineTool", c.isInline = true, c.title = "Italic", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(25), n(15), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c) {
            "use strict";
            var l = n(9), u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), c = l(c);
            var f = function() {
              function t2(e2) {
                var n2 = e2.api;
                (0, r2.default)(this, t2), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--link", buttonUnlink: "ce-inline-tool--unlink", input: "ce-inline-tool-input", inputShowed: "ce-inline-tool-input--showed" }, this.nodes = { button: null, input: null }, this.inputOpened = false, this.toolbar = n2.toolbar, this.inlineToolbar = n2.inlineToolbar, this.notifier = n2.notifier, this.i18n = n2.i18n, this.selection = new a.default();
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 14, 10)), this.nodes.button.appendChild(s.default.svg("unlink", 15, 11)), this.nodes.button;
              } }, { key: "renderActions", value: function() {
                var t3 = this;
                return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function(e2) {
                  e2.keyCode === t3.ENTER_KEY && t3.enterPressed(e2);
                }), this.nodes.input;
              } }, { key: "surround", value: function(t3) {
                if (t3) {
                  this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                  var e2 = this.selection.findParentTag("A");
                  if (e2)
                    return this.selection.expandToTag(e2), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
                }
                this.toggleActions();
              } }, { key: "checkState", value: function(t3) {
                var e2 = this.selection.findParentTag("A");
                if (e2) {
                  this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                  var n2 = e2.getAttribute("href");
                  this.nodes.input.value = n2 !== "null" ? n2 : "", this.selection.save();
                } else
                  this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                return !!e2;
              } }, { key: "clear", value: function() {
                this.closeActions();
              } }, { key: "toggleActions", value: function() {
                this.inputOpened ? this.closeActions(false) : this.openActions(true);
              } }, { key: "openActions", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                this.nodes.input.classList.add(this.CSS.inputShowed), t3 && this.nodes.input.focus(), this.inputOpened = true;
              } }, { key: "closeActions", value: function() {
                var t3 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
                if (this.selection.isFakeBackgroundEnabled) {
                  var e2 = new a.default();
                  e2.save(), this.selection.restore(), this.selection.removeFakeBackground(), e2.restore();
                }
                this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t3 && this.selection.clearSaved(), this.inputOpened = false;
              } }, { key: "enterPressed", value: function(t3) {
                var e2 = this.nodes.input.value || "";
                return e2.trim() ? this.validateURL(e2) ? (e2 = this.prepareLink(e2), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e2), t3.preventDefault(), t3.stopPropagation(), t3.stopImmediatePropagation(), this.selection.collapseToEnd(), void this.inlineToolbar.close()) : (this.notifier.show({ message: "Pasted link is not valid.", style: "error" }), void c.log("Incorrect Link pasted", "warn", e2)) : (this.selection.restore(), this.unlink(), t3.preventDefault(), void this.closeActions());
              } }, { key: "validateURL", value: function(t3) {
                return !/\s/.test(t3);
              } }, { key: "prepareLink", value: function(t3) {
                return t3 = t3.trim(), t3 = this.addProtocol(t3);
              } }, { key: "addProtocol", value: function(t3) {
                if (/^(\w+):(\/\/)?/.test(t3))
                  return t3;
                var e2 = /^\/[^/\s]/.test(t3), n2 = t3.substring(0, 1) === "#", o3 = /^\/\/[^/\s]/.test(t3);
                return e2 || n2 || o3 || (t3 = "http://" + t3), t3;
              } }, { key: "insertLink", value: function(t3) {
                var e2 = this.selection.findParentTag("A");
                e2 && this.selection.expandToTag(e2), document.execCommand(this.commandLink, false, t3);
              } }, { key: "unlink", value: function() {
                document.execCommand(this.commandUnlink);
              } }, { key: "shortcut", get: function() {
                return "CMD+K";
              } }], [{ key: "sanitize", get: function() {
                return { a: { href: true, target: "_blank", rel: "nofollow" } };
              } }]), t2;
            }();
            o2.default = f, f.displayName = "LinkInlineTool", f.isInline = true, f.title = "Link", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(15)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var c = function() {
              function t2(e2) {
                var n2 = e2.data, o3 = e2.api;
                (0, r2.default)(this, t2), this.CSS = { wrapper: "ce-stub", info: "ce-stub__info", title: "ce-stub__title", subtitle: "ce-stub__subtitle" }, this.api = o3, this.title = n2.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = n2.savedData, this.wrapper = this.make();
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                return this.wrapper;
              } }, { key: "save", value: function() {
                return this.savedData;
              } }, { key: "make", value: function() {
                var t3 = a.default.make("div", this.CSS.wrapper), e2 = a.default.svg("sad-face", 52, 52), n2 = a.default.make("div", this.CSS.info), o3 = a.default.make("div", this.CSS.title, { textContent: this.title }), r3 = a.default.make("div", this.CSS.subtitle, { textContent: this.subtitle });
                return t3.appendChild(e2), n2.appendChild(o3), n2.appendChild(r3), t3.appendChild(n2), t3;
              } }]), t2;
            }();
            o2.default = c, c.displayName = "Stub", c.isReadOnlySupported = true, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(66), n(386), n(387), n(388)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), s = u(s), c = u(c), l = u(l);
            var f = function(t2, e2) {
              var n2 = {};
              for (var o3 in t2)
                Object.prototype.hasOwnProperty.call(t2, o3) && e2.indexOf(o3) < 0 && (n2[o3] = t2[o3]);
              if (t2 != null && typeof Object.getOwnPropertySymbols == "function") {
                var r3 = 0;
                for (o3 = Object.getOwnPropertySymbols(t2); r3 < o3.length; r3++)
                  e2.indexOf(o3[r3]) < 0 && Object.prototype.propertyIsEnumerable.call(t2, o3[r3]) && (n2[o3[r3]] = t2[o3[r3]]);
              }
              return n2;
            }, d = function() {
              function t2(e2, n2, o3) {
                (0, r2.default)(this, t2), this.api = o3, this.config = e2, this.editorConfig = n2;
              }
              return (0, i2.default)(t2, [{ key: "get", value: function(t3) {
                var e2 = this.config[t3], n2 = e2.class, o3 = e2.isInternal, r3 = o3 !== void 0 && o3, i3 = f(e2, ["class", "isInternal"]);
                return new (this.getConstructor(n2))({ name: t3, constructable: n2, config: i3, api: this.api, isDefault: t3 === this.editorConfig.defaultBlock, defaultPlaceholder: this.editorConfig.placeholder, isInternal: r3 });
              } }, { key: "getConstructor", value: function(t3) {
                switch (true) {
                  case t3[a.InternalInlineToolSettings.IsInline]:
                    return s.default;
                  case t3[a.InternalTuneSettings.IsTune]:
                    return c.default;
                  default:
                    return l.default;
                }
              } }]), t2;
            }();
            o2.default = d, d.displayName = "ToolsFactory", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(66)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(9), f = n(1);
            function d() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), c = f(c);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (d()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).type = l.ToolType.Inline, t3;
              }
              return (0, i2.default)(o3, [{ key: "create", value: function() {
                return new this.constructable({ api: this.api.getMethodsForTool(this), config: this.settings });
              } }, { key: "title", get: function() {
                return this.constructable[l.InternalInlineToolSettings.Title];
              } }]), o3;
            }((l = u(l)).default);
            o2.default = p, p.displayName = "InlineTool", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(66)], (i = typeof (o = function(o2, r2, i2, a, s, c, l) {
            "use strict";
            var u = n(9), f = n(1);
            function d() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), c = f(c);
            var p = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (d()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).type = l.ToolType.Tune, t3;
              }
              return (0, i2.default)(o3, [{ key: "create", value: function(t3, e3) {
                return new this.constructable({ api: this.api.getMethodsForTool(this), settings: this.settings, block: e3, data: t3 });
              } }]), o3;
            }((l = u(l)).default);
            o2.default = p, p.displayName = "BlockTune", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(66), n(8)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u) {
            "use strict";
            var f = n(9), d = n(1);
            function p() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), c = d(c), l = f(l), u = f(u);
            var h = function(t2) {
              (0, a.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, c.default)(e2);
                if (p()) {
                  var o4 = (0, c.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, s.default)(this, t3);
              });
              function o3() {
                var t3;
                return (0, r2.default)(this, o3), (t3 = n2.apply(this, arguments)).type = l.ToolType.Block, t3;
              }
              return (0, i2.default)(o3, [{ key: "create", value: function(t3, e3, n3) {
                return new this.constructable({ data: t3, block: e3, readOnly: n3, api: this.api.getMethodsForTool(this), config: this.settings });
              } }, { key: "isReadOnlySupported", get: function() {
                return this.constructable[l.InternalBlockToolSettings.IsReadOnlySupported] === true;
              } }, { key: "isLineBreaksEnabled", get: function() {
                return this.constructable[l.InternalBlockToolSettings.IsEnabledLineBreaks];
              } }, { key: "toolbox", get: function() {
                var t3 = this.constructable[l.InternalBlockToolSettings.Toolbox], e3 = this.config[l.UserSettings.Toolbox];
                if (!u.isEmpty(t3) && (e3 != null ? e3 : t3) !== false)
                  return Object.assign({}, t3, e3);
              } }, { key: "conversionConfig", get: function() {
                return this.constructable[l.InternalBlockToolSettings.ConversionConfig];
              } }, { key: "enabledInlineTools", get: function() {
                return this.config[l.UserSettings.EnabledInlineTools];
              } }, { key: "enabledBlockTunes", get: function() {
                return this.config[l.UserSettings.EnabledBlockTunes];
              } }, { key: "pasteConfig", get: function() {
                return this.constructable[l.InternalBlockToolSettings.PasteConfig] || {};
              } }]), o3;
            }(l.default);
            o2.default = h, h.displayName = "BlockTool", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(15)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var c = function() {
              function t2(e2) {
                var n2 = e2.api;
                (0, r2.default)(this, t2), this.CSS = { button: "ce-settings__button", wrapper: "ce-tune-move-down", animation: "wobble" }, this.api = n2;
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                var t3 = this, e2 = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
                return e2.appendChild(a.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e2, "click", function(n2) {
                  return t3.handleClick(n2, e2);
                }, false), this.api.tooltip.onHover(e2, this.api.i18n.t("Move down")), e2;
              } }, { key: "handleClick", value: function(t3, e2) {
                var n2 = this, o3 = this.api.blocks.getCurrentBlockIndex(), r3 = this.api.blocks.getBlockByIndex(o3 + 1);
                if (!r3)
                  return e2.classList.add(this.CSS.animation), void window.setTimeout(function() {
                    e2.classList.remove(n2.CSS.animation);
                  }, 500);
                var i3 = r3.holder, a2 = i3.getBoundingClientRect(), s2 = Math.abs(window.innerHeight - i3.offsetHeight);
                a2.top < window.innerHeight && (s2 = window.scrollY + i3.offsetHeight), window.scrollTo(0, s2), this.api.blocks.move(o3 + 1), this.api.tooltip.hide();
              } }]), t2;
            }();
            o2.default = c, c.displayName = "MoveDownTune", c.isTune = true, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(15)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var c = function() {
              function t2(e2) {
                var n2 = this, o3 = e2.api;
                (0, r2.default)(this, t2), this.CSS = { button: "ce-settings__button", buttonDelete: "ce-settings__button--delete", buttonConfirm: "ce-settings__button--confirm" }, this.nodes = { button: null }, this.api = o3, this.resetConfirmation = function() {
                  n2.setConfirmation(false);
                };
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                var t3 = this;
                return this.nodes.button = a.default.make("div", [this.CSS.button, this.CSS.buttonDelete], {}), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function(e2) {
                  return t3.handleClick(e2);
                }, false), this.api.tooltip.onHover(this.nodes.button, this.api.i18n.t("Delete")), this.nodes.button;
              } }, { key: "handleClick", value: function(t3) {
                this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), this.api.tooltip.hide(), t3.stopPropagation()) : (this.setConfirmation(true), this.api.events.on("block-settings-closed", this.resetConfirmation));
              } }, { key: "setConfirmation", value: function(t3) {
                this.needConfirmation = t3, this.nodes.button.classList.add(this.CSS.buttonConfirm);
              } }]), t2;
            }();
            o2.default = c, c.displayName = "DeleteTune", c.isTune = true, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(2), n(3), n(15)], (i = typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var c = function() {
              function t2(e2) {
                var n2 = e2.api;
                (0, r2.default)(this, t2), this.CSS = { button: "ce-settings__button", wrapper: "ce-tune-move-up", animation: "wobble" }, this.api = n2;
              }
              return (0, i2.default)(t2, [{ key: "render", value: function() {
                var t3 = this, e2 = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
                return e2.appendChild(a.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e2, "click", function(n2) {
                  return t3.handleClick(n2, e2);
                }, false), this.api.tooltip.onHover(e2, this.api.i18n.t("Move up")), e2;
              } }, { key: "handleClick", value: function(t3, e2) {
                var n2 = this, o3 = this.api.blocks.getCurrentBlockIndex(), r3 = this.api.blocks.getBlockByIndex(o3), i3 = this.api.blocks.getBlockByIndex(o3 - 1);
                if (o3 === 0 || !r3 || !i3)
                  return e2.classList.add(this.CSS.animation), void window.setTimeout(function() {
                    e2.classList.remove(n2.CSS.animation);
                  }, 500);
                var a2, s2 = r3.holder, c2 = i3.holder, l = s2.getBoundingClientRect(), u = c2.getBoundingClientRect();
                a2 = u.top > 0 ? Math.abs(l.top) - Math.abs(u.top) : window.innerHeight - Math.abs(l.top) + Math.abs(u.top), window.scrollBy(0, -1 * a2), this.api.blocks.move(o3 - 1), this.api.tooltip.hide();
              } }]), t2;
            }();
            o2.default = c, c.displayName = "MoveUpTune", c.isTune = true, t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          var o, r, i;
          typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" && self, r = [e, n(29), n(2), n(3), n(5), n(6), n(4), n(146)], (i = typeof (o = function(o2, r2, i2, a, s, c, l, u) {
            "use strict";
            var f = n(1);
            function d() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t2) {
                return false;
              }
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), c = f(c), l = f(l);
            var p = function(t2) {
              (0, s.default)(o3, t2);
              var e2, n2 = (e2 = o3, function() {
                var t3, n3 = (0, l.default)(e2);
                if (d()) {
                  var o4 = (0, l.default)(this).constructor;
                  t3 = Reflect.construct(n3, arguments, o4);
                } else
                  t3 = n3.apply(this, arguments);
                return (0, c.default)(this, t3);
              });
              function o3() {
                return (0, i2.default)(this, o3), n2.apply(this, arguments);
              }
              return (0, a.default)(o3, [{ key: "blockTools", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return (0, r2.default)(t3, 2)[1].isBlock();
                }));
              } }, { key: "inlineTools", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return (0, r2.default)(t3, 2)[1].isInline();
                }));
              } }, { key: "blockTunes", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return (0, r2.default)(t3, 2)[1].isTune();
                }));
              } }, { key: "internalTools", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return (0, r2.default)(t3, 2)[1].isInternal;
                }));
              } }, { key: "externalTools", get: function() {
                return new o3(Array.from(this.entries()).filter(function(t3) {
                  return !(0, r2.default)(t3, 2)[1].isInternal;
                }));
              } }]), o3;
            }((0, (u = f(u)).default)(Map));
            o2.default = p, p.displayName = "ToolsCollection", t.exports = e.default;
          }) == "function" ? o.apply(e, r) : o) === void 0 || (t.exports = i);
        }, function(t, e, n) {
          window, t.exports = function(t2) {
            var e2 = {};
            function n2(o) {
              if (e2[o])
                return e2[o].exports;
              var r = e2[o] = { i: o, l: false, exports: {} };
              return t2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, o) {
              n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: o });
            }, n2.r = function(t3) {
              typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
            }, n2.t = function(t3, e3) {
              if (1 & e3 && (t3 = n2(t3)), 8 & e3)
                return t3;
              if (4 & e3 && typeof t3 == "object" && t3 && t3.__esModule)
                return t3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t3 }), 2 & e3 && typeof t3 != "string")
                for (var r in t3)
                  n2.d(o, r, function(e4) {
                    return t3[e4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(t3) {
              var e3 = t3 && t3.__esModule ? function() {
                return t3.default;
              } : function() {
                return t3;
              };
              return n2.d(e3, "a", e3), e3;
            }, n2.o = function(t3, e3) {
              return Object.prototype.hasOwnProperty.call(t3, e3);
            }, n2.p = "", n2(n2.s = 0);
          }([function(t2, e2, n2) {
            t2.exports = n2(1);
          }, function(t2, e2, n2) {
            "use strict";
            n2.r(e2), n2.d(e2, "default", function() {
              return o;
            });
            class o {
              constructor() {
                this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.loadStyles(), this.prepare(), window.addEventListener("scroll", () => {
                  this.showed && this.hide(true);
                }, { passive: true });
              }
              get CSS() {
                return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
              }
              show(t3, e3, n3) {
                this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                const o2 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, n3);
                if (o2.hidingDelay && (this.hidingDelay = o2.hidingDelay), this.nodes.content.innerHTML = "", typeof e3 == "string")
                  this.nodes.content.appendChild(document.createTextNode(e3));
                else {
                  if (!(e3 instanceof Node))
                    throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof e3 + " given.");
                  this.nodes.content.appendChild(e3);
                }
                switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o2.placement) {
                  case "top":
                    this.placeTop(t3, o2);
                    break;
                  case "left":
                    this.placeLeft(t3, o2);
                    break;
                  case "right":
                    this.placeRight(t3, o2);
                    break;
                  case "bottom":
                  default:
                    this.placeBottom(t3, o2);
                }
                o2 && o2.delay ? this.showingTimeout = setTimeout(() => {
                  this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
                }, o2.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
              }
              hide(t3 = false) {
                if (this.hidingDelay && !t3)
                  return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
                    this.hide(true);
                  }, this.hidingDelay));
                this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
              }
              onHover(t3, e3, n3) {
                t3.addEventListener("mouseenter", () => {
                  this.show(t3, e3, n3);
                }), t3.addEventListener("mouseleave", () => {
                  this.hide();
                });
              }
              prepare() {
                this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
              }
              loadStyles() {
                const t3 = "codex-tooltips-style";
                if (document.getElementById(t3))
                  return;
                const e3 = n2(2), o2 = this.make("style", null, { textContent: e3.toString(), id: t3 });
                this.prepend(document.head, o2);
              }
              placeBottom(t3, e3) {
                const n3 = t3.getBoundingClientRect(), o2 = n3.left + t3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n3.bottom + window.pageYOffset + this.offsetTop + e3.marginTop;
                this.applyPlacement("bottom", o2, r);
              }
              placeTop(t3, e3) {
                const n3 = t3.getBoundingClientRect(), o2 = n3.left + t3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n3.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                this.applyPlacement("top", o2, r);
              }
              placeLeft(t3, e3) {
                const n3 = t3.getBoundingClientRect(), o2 = n3.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e3.marginLeft, r = n3.top + window.pageYOffset + t3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                this.applyPlacement("left", o2, r);
              }
              placeRight(t3, e3) {
                const n3 = t3.getBoundingClientRect(), o2 = n3.right + this.offsetRight + e3.marginRight, r = n3.top + window.pageYOffset + t3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                this.applyPlacement("right", o2, r);
              }
              applyPlacement(t3, e3, n3) {
                this.nodes.wrapper.classList.add(this.CSS.placement[t3]), this.nodes.wrapper.style.left = e3 + "px", this.nodes.wrapper.style.top = n3 + "px";
              }
              make(t3, e3 = null, n3 = {}) {
                const o2 = document.createElement(t3);
                Array.isArray(e3) ? o2.classList.add(...e3) : e3 && o2.classList.add(e3);
                for (const t4 in n3)
                  n3.hasOwnProperty(t4) && (o2[t4] = n3[t4]);
                return o2;
              }
              append(t3, e3) {
                Array.isArray(e3) ? e3.forEach((e4) => t3.appendChild(e4)) : t3.appendChild(e3);
              }
              prepend(t3, e3) {
                Array.isArray(e3) ? (e3 = e3.reverse()).forEach((e4) => t3.prepend(e4)) : t3.prepend(e3);
              }
            }
          }, function(t2, e2) {
            t2.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
          }]).default;
        }, function(t, e, n) {
          "use strict";
          n.r(e), e.default = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 8 8">\n  <circle cx="6.5" cy="1.5" r="1.5"/>\n  <circle cx="6.5" cy="6.5" r="1.5"/>\n  <circle cx="1.5" cy="1.5" r="1.5"/>\n  <circle cx="1.5" cy="6.5" r="1.5"/>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>';
        }, function(t, e) {
          t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 35px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:-30px;top:5px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:-28px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:18px;height:18px;color:#707684;cursor:pointer;background:#eff2f5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn:hover{color:#1d202b}@media (max-width:650px){.ce-toolbar__settings-btn{background:transparent}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:-11px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-34px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-34px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}';
        }]);
      });
    }
  });

  // ../visualize/node_modules/editorjs-undo/dist/bundle.js
  var require_bundle = __commonJS({
    "../visualize/node_modules/editorjs-undo/dist/bundle.js"(exports, module) {
      !function(t, e) {
        typeof exports == "object" && typeof module == "object" ? module.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof exports == "object" ? exports.Undo = e() : t.Undo = e();
      }(window, function() {
        return function(t) {
          var e = {};
          function n(i) {
            if (e[i])
              return e[i].exports;
            var o = e[i] = { i, l: false, exports: {} };
            return t[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
          }
          return n.m = t, n.c = e, n.d = function(t2, e2, i) {
            n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: i });
          }, n.r = function(t2) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, n.t = function(t2, e2) {
            if (1 & e2 && (t2 = n(t2)), 8 & e2)
              return t2;
            if (4 & e2 && typeof t2 == "object" && t2 && t2.__esModule)
              return t2;
            var i = /* @__PURE__ */ Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: t2 }), 2 & e2 && typeof t2 != "string")
              for (var o in t2)
                n.d(i, o, function(e3) {
                  return t2[e3];
                }.bind(null, o));
            return i;
          }, n.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return n.d(e2, "a", e2), e2;
          }, n.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, n.p = "/", n(n.s = 0);
        }([function(t, e, n) {
          "use strict";
          function i(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
            }
          }
          n.r(e), n.d(e, "default", function() {
            return s;
          });
          var o = function() {
            function t2(e3, n3) {
              !function(t3, e4) {
                if (!(t3 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2), this.holder = typeof n3 == "string" ? document.getElementById(n3) : n3, this.observer = null, this.debounceTimer = 200, this.mutationDebouncer = this.debounce(function() {
                e3();
              }, this.debounceTimer);
            }
            var e2, n2, o2;
            return e2 = t2, (n2 = [{ key: "setMutationObserver", value: function() {
              var t3 = this, e3 = this.holder;
              this.observer = new MutationObserver(function(e4) {
                t3.mutationHandler(e4);
              }), this.observer.observe(e3, { childList: true, attributes: true, subtree: true, characterData: true, characterDataOldValue: true });
            } }, { key: "mutationHandler", value: function(t3) {
              var e3 = this, n3 = false;
              t3.forEach(function(t4) {
                switch (t4.type) {
                  case "childList":
                    t4.target === e3.holder ? e3.onDestroy() : n3 = true;
                    break;
                  case "characterData":
                    n3 = true;
                    break;
                  case "attributes":
                    t4.target.classList.contains("ce-block") || (n3 = true);
                }
              }), n3 && this.mutationDebouncer();
            } }, { key: "debounce", value: function(t3, e3) {
              var n3, i2 = this;
              return function() {
                for (var o3 = arguments.length, r2 = new Array(o3), s2 = 0; s2 < o3; s2++)
                  r2[s2] = arguments[s2];
                var a = i2;
                clearTimeout(n3), n3 = setTimeout(function() {
                  return t3.apply(a, r2);
                }, e3);
              };
            } }, { key: "onDestroy", value: function() {
              var t3 = new CustomEvent("destroy");
              document.dispatchEvent(t3), this.observer.disconnect();
            } }]) && i(e2.prototype, n2), o2 && i(e2, o2), t2;
          }();
          function r(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
            }
          }
          var s = function() {
            function t2(e3) {
              var n3 = this, i3 = e3.editor, r2 = e3.onUpdate, s2 = e3.maxLength;
              !function(t3, e4) {
                if (!(t3 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var a = { maxLength: 30, onUpdate: function() {
              } }, u = i3.configuration;
              this.editor = i3, this.shouldSaveHistory = true, this.readOnly = u.readOnly, this.maxLength = s2 || a.maxLength, this.onUpdate = r2 || a.onUpdate, new o(function() {
                return n3.registerChange();
              }, u.holder).setMutationObserver(), this.setEventListeners(), this.initialItem = null, this.clear();
            }
            var e2, n2, i2;
            return e2 = t2, i2 = [{ key: "isReadOnlySupported", get: function() {
              return true;
            } }], (n2 = [{ key: "truncate", value: function(t3, e3) {
              for (; t3.length > e3; )
                t3.shift();
            } }, { key: "initialize", value: function(t3) {
              var e3 = "blocks" in t3 ? t3.blocks : t3, n3 = { index: e3.length - 1, state: e3 };
              this.stack[0] = n3, this.initialItem = n3;
            } }, { key: "clear", value: function() {
              this.stack = this.initialItem ? [this.initialItem] : [{ index: 0, state: [] }], this.position = 0, this.onUpdate();
            } }, { key: "registerChange", value: function() {
              var t3 = this;
              this.readOnly || (this.editor && this.editor.save && this.shouldSaveHistory && this.editor.save().then(function(e3) {
                t3.editorDidUpdate(e3.blocks) && t3.save(e3.blocks);
              }), this.shouldSaveHistory = true);
            } }, { key: "editorDidUpdate", value: function(t3) {
              var e3 = this.stack[this.position].state;
              return t3.length !== e3.length || JSON.stringify(e3) !== JSON.stringify(t3);
            } }, { key: "save", value: function(t3) {
              this.position >= this.maxLength && this.truncate(this.stack, this.maxLength), this.position = Math.min(this.position, this.stack.length - 1), this.stack = this.stack.slice(0, this.position + 1);
              var e3 = this.editor.blocks.getCurrentBlockIndex();
              this.stack.push({ index: e3, state: t3 }), this.position += 1, this.onUpdate();
            } }, { key: "undo", value: function() {
              var t3 = this;
              if (this.canUndo()) {
                this.shouldSaveHistory = false;
                var e3 = this.stack[this.position -= 1], n3 = e3.index, i3 = e3.state;
                this.onUpdate(), this.editor.blocks.render({ blocks: i3 }).then(function() {
                  return t3.editor.caret.setToBlock(n3, "end");
                });
              }
            } }, { key: "redo", value: function() {
              var t3 = this;
              if (this.canRedo()) {
                this.shouldSaveHistory = false;
                var e3 = this.stack[this.position += 1], n3 = e3.index, i3 = e3.state;
                this.onUpdate(), this.editor.blocks.render({ blocks: i3 }).then(function() {
                  return t3.editor.caret.setToBlock(n3, "end");
                });
              }
            } }, { key: "canUndo", value: function() {
              return !this.readOnly && this.position > 0;
            } }, { key: "canRedo", value: function() {
              return !this.readOnly && this.position < this.count();
            } }, { key: "count", value: function() {
              return this.stack.length - 1;
            } }, { key: "setEventListeners", value: function() {
              var t3 = this, e3 = /(Mac)/i.test(navigator.platform) ? "metaKey" : "ctrlKey", n3 = function(n4) {
                n4[e3] && n4.key === "z" && (n4.preventDefault(), t3.undo());
              }, i3 = function(n4) {
                n4[e3] && n4.key === "y" && (n4.preventDefault(), t3.redo());
              };
              document.addEventListener("keydown", n3), document.addEventListener("keydown", i3), document.addEventListener("destroy", function() {
                document.removeEventListener("keydown", n3), document.removeEventListener("keydown", i3);
              });
            } }]) && r(e2.prototype, n2), i2 && r(e2, i2), t2;
          }();
        }]).default;
      });
    }
  });

  // ../visualize/visualize/public/js/navbar.js
  frappe.provide("frappe.ui.toolbar");
  frappe.provide("frappe.search");
  frappe.ui.toolbar.Toolbar = class {
    constructor() {
      $("header").replaceWith(frappe.render_template("navbar", {
        avatar: frappe.avatar(frappe.session.user, "avatar-medium"),
        navbar_settings: frappe.boot.navbar_settings
      }));
      $(".dropdown-toggle").dropdown();
      this.setup_menus();
      this.setup_awesomebar();
      this.setup_notifications();
      this.setup_help();
      this.make();
    }
    async setup_menus(reload) {
      this.sidebar_pages = await this.get_menus();
      this.cached_pages = $.extend(true, {}, this.sidebar_pages);
      this.all_pages = this.sidebar_pages.pages;
      this.has_access = this.sidebar_pages.has_access;
      this.all_pages.forEach((page) => {
        page.is_editable = !page.public || this.has_access;
      });
      this.public_pages = this.all_pages.filter((page) => page.public);
      this.private_pages = this.all_pages.filter((page) => !page.public);
      if (this.all_pages) {
        frappe.workspaces = {};
        for (let page of this.all_pages) {
          frappe.workspaces[frappe.router.slug(page.name)] = { title: page.title };
        }
        this.make_menu(this.public_pages);
        reload && this.show();
      }
    }
    get_menus() {
      return frappe.xcall("frappe.desk.desktop.get_workspace_sidebar_items");
    }
    make_menu(data) {
      let custom_navbar = $('<div class="custom-navbar"></div>');
      $(".navbar-collapse").prepend(custom_navbar);
      let menu = this.build_menu(data);
      $(".custom-navbar").append(menu);
    }
    build_menu(pages) {
      let menu = $('<ul class="navbar-default navbar-nav"></ul>');
      let is_current_page = frappe.router.slug(this.get_page_to_show().name);
      pages.forEach((item) => {
        let menuList = $(`
				<li class="nav-item ${is_current_page == frappe.router.slug(item.name) ? "active" : ""}">
					<a class="nav-link" href="/app/${frappe.router.slug(item.title)}"></a>
				</li>`);
        let a = menuList.find("a");
        a.html(item.title);
        menu.append(menuList);
      });
      return menu;
    }
    show() {
      if (!this.all_pages) {
        setTimeout(() => this.show(), 100);
        return;
      }
      let page = this.get_page_to_show();
      this.page.set_title(__(page.name));
      this.update_selected_sidebar(this.current_page, false);
      this.update_selected_sidebar(page, true);
      this.show_page(page);
    }
    get_page_to_show() {
      let default_page;
      if (localStorage.current_page && this.all_pages.filter((page2) => page2.title == localStorage.current_page).length != 0) {
        default_page = {
          name: localStorage.current_page,
          public: localStorage.is_current_page_public == "true"
        };
      } else if (Object.keys(this.all_pages).length !== 0) {
        default_page = { name: this.all_pages[0].title, public: true };
      } else {
        default_page = { name: "Build", public: true };
      }
      let page = (frappe.get_route()[1] == "private" ? frappe.get_route()[2] : frappe.get_route()[1]) || default_page.name;
      let is_public = frappe.get_route()[1] ? frappe.get_route()[1] != "private" : default_page.public;
      return { name: page, public: is_public };
    }
    update_selected_sidebar(page, add) {
      let section = page.public ? "public" : "private";
      if (this.sidebar && this.sidebar_items[section] && this.sidebar_items[section][page.name]) {
        let $sidebar = this.sidebar_items[section][page.name];
        let pages = page.public ? this.public_pages : this.private_pages;
        let sidebar_page = pages.find((p) => p.title == page.name);
        if (add) {
          $sidebar[0].firstElementChild.classList.add("active");
          if (sidebar_page)
            sidebar_page.selected = true;
          $sidebar.parent().hasClass("hidden") && $sidebar.parent().removeClass("hidden");
          this.current_page = { name: page.name, public: page.public };
          localStorage.current_page = page.name;
          localStorage.is_current_page_public = page.public;
        } else {
          $sidebar[0].firstElementChild.classList.remove("selected");
          if (sidebar_page)
            sidebar_page.selected = false;
        }
      }
    }
    make() {
      this.bind_events();
      $(document).trigger("toolbar_setup");
    }
    bind_events() {
      $(document).on("page-change", function() {
        $("header .navbar .custom-menu").remove();
      });
      $("#search-modal").on("shown.bs.modal", function() {
        var search_modal = $(this);
        setTimeout(function() {
          search_modal.find("#modal-search").focus();
        }, 300);
      });
      $(".navbar-toggle-full-width").click(() => {
        frappe.ui.toolbar.toggle_full_width();
      });
    }
    setup_help() {
      if (!frappe.boot.desk_settings.notifications) {
        $(".navbar .vertical-bar").removeClass("d-sm-block");
        $(".dropdown-help").removeClass("d-lg-block");
        return;
      }
      frappe.provide("frappe.help");
      frappe.help.show_results = show_results;
      this.search = new frappe.search.SearchDialog();
      frappe.provide("frappe.searchdialog");
      frappe.searchdialog.search = this.search;
      $(".dropdown-help .dropdown-toggle").on("click", function() {
        $(".dropdown-help input").focus();
      });
      $(".dropdown-help .dropdown-menu").on("click", "input, button", function(e) {
        e.stopPropagation();
      });
      $("#input-help").on("keydown", function(e) {
        if (e.which == 13) {
          $(this).val("");
        }
      });
      $(document).on("page-change", function() {
        var $help_links = $(".dropdown-help #help-links");
        $help_links.html("");
        var route = frappe.get_route_str();
        var breadcrumbs = route.split("/");
        var links = [];
        for (var i = 0; i < breadcrumbs.length; i++) {
          var r = route.split("/", i + 1);
          var key = r.join("/");
          var help_links = frappe.help.help_links[key] || [];
          links = $.merge(links, help_links);
        }
        if (links.length === 0) {
          $help_links.next().hide();
        } else {
          $help_links.next().show();
        }
        for (var i = 0; i < links.length; i++) {
          var link = links[i];
          var url = link.url;
          $("<a>", {
            href: url,
            class: "dropdown-item",
            text: __(link.label),
            target: "_blank"
          }).appendTo($help_links);
        }
        $(".dropdown-help .dropdown-menu").on("click", "a", show_results);
      });
      var $result_modal = frappe.get_modal("", "");
      $result_modal.addClass("help-modal");
      $(document).on("click", ".help-modal a", show_results);
      function show_results(e) {
        var href = e.target.href;
        if (href.indexOf("blob") > 0) {
          window.open(href, "_blank");
        }
        var path = $(e.target).attr("data-path");
        if (path) {
          e.preventDefault();
        }
      }
    }
    setup_awesomebar() {
      if (frappe.boot.desk_settings.search_bar) {
        let awesome_bar = new frappe.search.AwesomeBar();
        awesome_bar.setup("#navbar-search");
        frappe.search.utils.make_function_searchable(function() {
          frappe.set_route("List", "Client Script");
        }, __("Custom Script List"));
      }
    }
    setup_notifications() {
      if (frappe.boot.desk_settings.notifications && frappe.session.user !== "Guest") {
        this.notifications = new frappe.ui.Notifications();
      }
    }
  };
  $.extend(frappe.ui.toolbar, {
    add_dropdown_button: function(parent, label, click, icon) {
      var menu = frappe.ui.toolbar.get_menu(parent);
      if (menu.find("li:not(.custom-menu)").length && !menu.find(".divider").length) {
        frappe.ui.toolbar.add_menu_divider(menu);
      }
      return $('<li class="custom-menu"><a><i class="fa-fw ' + icon + '"></i> ' + label + "</a></li>").insertBefore(menu.find(".divider")).find("a").click(function() {
        click.apply(this);
      });
    },
    get_menu: function(label) {
      return $("#navbar-" + label.toLowerCase());
    },
    add_menu_divider: function(menu) {
      menu = typeof menu == "string" ? frappe.ui.toolbar.get_menu(menu) : menu;
      $('<li class="divider custom-menu"></li>').prependTo(menu);
    },
    add_icon_link(route, icon, index, class_name) {
      let parent_element = $(".navbar-right").get(0);
      let new_element = $(`<li class="${class_name}">
			<a class="btn" href="${route}" title="${frappe.utils.to_title_case(class_name, true)}" aria-haspopup="true" aria-expanded="true">
				<div>
					<i class="octicon ${icon}"></i>
				</div>
			</a>
		</li>`).get(0);
      parent_element.insertBefore(new_element, parent_element.children[index]);
    },
    toggle_full_width() {
      let fullwidth = JSON.parse(localStorage.container_fullwidth || "false");
      fullwidth = !fullwidth;
      localStorage.container_fullwidth = fullwidth;
      frappe.ui.toolbar.set_fullwidth_if_enabled();
      $(document.body).trigger("toggleFullWidth");
    },
    set_fullwidth_if_enabled() {
      let fullwidth = JSON.parse(localStorage.container_fullwidth || "false");
      $(document.body).toggleClass("full-width", fullwidth);
    },
    show_shortcuts(e) {
      e.preventDefault();
      frappe.ui.keys.show_keyboard_shortcut_dialog();
      return false;
    }
  });
  frappe.ui.toolbar.clear_cache = frappe.utils.throttle(function() {
    frappe.assets.clear_local_storage();
    frappe.xcall("frappe.sessions.clear").then((message) => {
      frappe.show_alert({
        message,
        indicator: "info"
      });
      location.reload(true);
    });
  }, 1e4);
  frappe.ui.toolbar.show_about = function() {
    try {
      frappe.ui.misc.about();
    } catch (e) {
      console.log(e);
    }
    return false;
  };
  frappe.ui.toolbar.route_to_user = function() {
    frappe.set_route("Form", "User", frappe.session.user);
  };
  frappe.ui.toolbar.view_website = function() {
    let website_tab = window.open();
    website_tab.opener = null;
    website_tab.location = "/index";
  };
  frappe.ui.toolbar.setup_session_defaults = function() {
    let fields = [];
    frappe.call({
      method: "frappe.core.doctype.session_default_settings.session_default_settings.get_session_default_values",
      callback: function(data) {
        fields = JSON.parse(data.message);
        let perms = frappe.perm.get_perm("Session Default Settings");
        if (in_list(frappe.user_roles, "System Manager") || perms[0].read == 1) {
          fields[fields.length] = {
            fieldname: "settings",
            fieldtype: "Button",
            label: __("Settings"),
            click: () => {
              frappe.set_route("Form", "Session Default Settings", "Session Default Settings");
            }
          };
        }
        frappe.prompt(fields, function(values) {
          fields.forEach(function(d) {
            if (!values[d.fieldname]) {
              values[d.fieldname] = "";
            }
          });
          frappe.call({
            method: "frappe.core.doctype.session_default_settings.session_default_settings.set_session_default_values",
            args: {
              default_values: values
            },
            callback: function(data2) {
              if (data2.message == "success") {
                frappe.show_alert({
                  message: __("Session Defaults Saved"),
                  indicator: "green"
                });
                frappe.ui.toolbar.clear_cache();
              } else {
                frappe.show_alert({
                  message: __("An error occurred while setting Session Defaults"),
                  indicator: "red"
                });
              }
            }
          });
        }, __("Session Defaults"), __("Save"));
      }
    });
  };

  // ../visualize/visualize/public/js/sidebar.js
  var import_editorjs = __toESM(require_editor());
  var import_editorjs_undo = __toESM(require_bundle());
  frappe.standard_pages["Workspaces"] = function() {
    var wrapper = frappe.container.add_page("Workspaces");
    frappe.ui.make_app_page({
      parent: wrapper,
      name: "Workspaces",
      title: __("Workspace")
    });
    frappe.workspace = new frappe.views.Workspace(wrapper);
    $(wrapper).bind("show", function() {
      frappe.workspace.show();
    });
  };
  frappe.views.Workspace = class Workspace {
    constructor(wrapper) {
      this.wrapper = $(wrapper);
      this.page = wrapper.page;
      this.blocks = frappe.workspace_block.blocks;
      this.is_read_only = true;
      this.pages = {};
      this.sorted_public_items = [];
      this.sorted_private_items = [];
      this.current_page = {};
      this.sidebar_items = {
        public: {},
        private: {}
      };
      this.sidebar_categories = ["My Workspaces", "Public"];
      this.prepare_container();
      this.setup_pages();
      this.register_awesomebar_shortcut();
    }
    prepare_container() {
      let list_sidebar = $(`
			<div class="list-sidebar overlay-sidebar hidden-xs hidden-sm">
				<div class="desk-sidebar list-unstyled sidebar-menu"></div>
			</div>
		`).appendTo(this.wrapper.find(".layout-side-section"));
      this.sidebar = list_sidebar.find(".desk-sidebar");
      this.body = this.wrapper.find(".layout-main-section");
    }
    async setup_pages(reload) {
      !this.discard && this.create_page_skeleton();
      !this.discard && this.create_sidebar_skeleton();
      this.sidebar_pages = !this.discard ? await this.get_pages() : this.sidebar_pages;
      this.sidebar_pages_menu = !this.discard ? await this.get_pages_menu() : this.sidebar_pages_menu;
      this.cached_pages = $.extend(true, {}, this.sidebar_pages);
      this.all_pages_menu = this.sidebar_pages_menu.pages;
      this.all_pages = this.sidebar_pages.pages;
      this.has_access = this.sidebar_pages.has_access;
      this.all_pages.forEach((page) => {
        page.is_editable = !page.public || this.has_access;
      });
      this.public_pages = this.all_pages.filter((page) => page.public);
      this.private_pages = this.all_pages.filter((page) => !page.public);
      this.public_pages_menu = this.all_pages_menu.filter((page) => page.public);
      this.private_pages_menu = this.all_pages_menu.filter((page) => !page.public);
      if (this.all_pages) {
        frappe.workspaces = {};
        for (let page of this.all_pages) {
          frappe.workspaces[frappe.router.slug(page.name)] = { title: page.title };
        }
        reload && this.show();
      }
    }
    get_pages() {
      return frappe.xcall("frappe.desk.desktop.get_workspace_sidebar_items");
    }
    get_pages_menu(workspace) {
      return frappe.xcall("visualize.overrides.desktop.get_sidebar_items", {
        workspace_name: workspace ? workspace : "Home"
      });
    }
    sidebar_item_container(item) {
      return $(`
			<div class="sidebar-item-container" item-parent="${item.parent_menu}" item-name="${item.label}" item-public="${item.public || 0}">
				<div class="desk-sidebar-item standard-sidebar-item ${item.selected ? "selected" : ""}">
					<a
						href="/app/${item.link_type == item.link_to ? frappe.router.slug(item.link_to) : frappe.router.slug(item.link_type) + "/" + item.link_to}"
						class="item-anchor block-click"}" title="${__(item.label)}"
					>
						<span class="sidebar-item-icon" item-icon=${item.icon || "folder-normal"}>${frappe.utils.icon(item.icon || "folder-normal", "md")}</span>
						<span class="sidebar-item-label">${__(item.label)}<span>
					</a>
					<div class="sidebar-item-control"></div>
				</div>
				<div class="sidebar-child-item nested-container"></div>
			</div>
		`);
    }
    make_sidebar(all_menu) {
      if (this.sidebar.find(".standard-sidebar-section")[0]) {
        this.sidebar.find(".standard-sidebar-section").remove();
      }
      let parent_menu = all_menu.filter((page) => page.parent_menu === 0);
      parent_menu.forEach((parent) => {
        let root_pages = all_menu.filter((page) => page.parent_menu === parent.idx);
        this.build_sidebar_section(parent.label, root_pages);
      });
      this.sidebar.find(".selected").length && !frappe.dom.is_element_in_viewport(this.sidebar.find(".selected")) && this.sidebar.find(".selected")[0].scrollIntoView();
      this.remove_sidebar_skeleton();
    }
    build_sidebar_section(title, root_pages) {
      let sidebar_section = $(`<div class="standard-sidebar-section nested-container" data-title="${title}"></div>`);
      let $title = $(`<div class="standard-sidebar-label">
			<span>${frappe.utils.icon("small-down", "xs")}</span>
			<span class="section-title">${__(title)}<span>
		</div>`).appendTo(sidebar_section);
      this.prepare_sidebar(root_pages, sidebar_section, this.sidebar);
      $title.on("click", (e) => {
        let icon = $(e.target).find("span use").attr("href") === "#icon-small-down" ? "#icon-right" : "#icon-small-down";
        $(e.target).find("span use").attr("href", icon);
        $(e.target).parent().find(".sidebar-item-container").toggleClass("hidden");
      });
      if (Object.keys(root_pages).length === 0) {
        sidebar_section.addClass("hidden");
      }
    }
    prepare_sidebar(items, child_container, item_container) {
      items.forEach((item) => this.append_item(item, child_container));
      child_container.appendTo(item_container);
    }
    append_item(item, container) {
      let is_current_page = frappe.router.slug(item.label) == frappe.router.slug(this.get_page_to_show().name) && item.public == this.get_page_to_show().public;
      item.selected = is_current_page;
      if (is_current_page) {
        this.current_page = { name: item.label, public: item.public };
      }
      let $item_container = this.sidebar_item_container(item);
      let sidebar_control = $item_container.find(".sidebar-item-control");
      this.add_sidebar_actions(item, sidebar_control);
      let pages = item.public ? this.public_pages_menu : this.private_pages_menu;
      let child_items = pages.filter((page) => page.parent_menu == item.label);
      if (child_items.length > 0) {
        let child_container = $item_container.find(".sidebar-child-item");
        child_container.addClass("hidden");
        this.prepare_sidebar(child_items, child_container, $item_container);
      }
      $item_container.appendTo(container);
      this.sidebar_items[item.public ? "public" : "private"][item.label] = $item_container;
      if ($item_container.parent().hasClass("hidden") && is_current_page) {
        $item_container.parent().toggleClass("hidden");
      }
      this.add_drop_icon(item, sidebar_control, $item_container);
    }
    add_drop_icon(item, sidebar_control, item_container) {
      let drop_icon = "small-down";
      if (item_container.find(`[item-name="${this.current_page.name}"]`).length) {
        drop_icon = "small-up";
      }
      let $child_item_section = item_container.find(".sidebar-child-item");
      let $drop_icon = $(`<span class="drop-icon hidden">${frappe.utils.icon(drop_icon, "sm")}</span>`).appendTo(sidebar_control);
      let pages = item.public ? this.public_pages : this.private_pages;
      if (pages.some((e) => e.parent_page == item.title)) {
        $drop_icon.removeClass("hidden");
      }
      $drop_icon.on("click", () => {
        let icon = $drop_icon.find("use").attr("href") === "#icon-small-down" ? "#icon-small-up" : "#icon-small-down";
        $drop_icon.find("use").attr("href", icon);
        $child_item_section.toggleClass("hidden");
      });
    }
    async show() {
      if (!this.all_pages) {
        setTimeout(() => this.show(), 100);
        return;
      }
      let page = this.get_page_to_show();
      this.page.set_title(__(page.name));
      let data = await this.get_pages_menu(page.name);
      this.make_sidebar(data.pages);
      this.update_selected_sidebar(this.current_page, false);
      this.update_selected_sidebar(page, true);
      this.show_page(page);
    }
    update_selected_sidebar(page, add) {
      let section = page.public ? "public" : "private";
      if (this.sidebar && this.sidebar_items[section] && this.sidebar_items[section][page.name]) {
        let $sidebar = this.sidebar_items[section][page.name];
        let pages = page.public ? this.public_pages : this.private_pages;
        let sidebar_page = pages.find((p) => p.title == page.name);
        if (add) {
          $sidebar[0].firstElementChild.classList.add("selected");
          if (sidebar_page)
            sidebar_page.selected = true;
          $sidebar.parent().hasClass("hidden") && $sidebar.parent().removeClass("hidden");
          this.current_page = { name: page.name, public: page.public };
          localStorage.current_page = page.name;
          localStorage.is_current_page_public = page.public;
        } else {
          $sidebar[0].firstElementChild.classList.remove("selected");
          if (sidebar_page)
            sidebar_page.selected = false;
        }
      }
    }
    get_data(page) {
      return frappe.call("frappe.desk.desktop.get_desktop_page", {
        page
      }).then((data) => {
        this.page_data = data.message;
        this.pages[page.name] && delete this.pages[page.name];
        this.pages[page.name] = data.message;
        if (!this.page_data || Object.keys(this.page_data).length === 0)
          return;
        if (this.page_data.charts && this.page_data.charts.items.length === 0)
          return;
        return frappe.dashboard_utils.get_dashboard_settings().then((settings) => {
          if (settings) {
            let chart_config = settings.chart_config ? JSON.parse(settings.chart_config) : {};
            this.page_data.charts.items.map((chart) => {
              chart.chart_settings = chart_config[chart.chart_name] || {};
            });
            this.pages[page.name] = this.page_data;
          }
        });
      });
    }
    get_page_to_show() {
      let default_page;
      if (localStorage.current_page && this.all_pages.filter((page2) => page2.title == localStorage.current_page).length != 0) {
        default_page = {
          name: localStorage.current_page,
          public: localStorage.is_current_page_public == "true"
        };
      } else if (Object.keys(this.all_pages).length !== 0) {
        default_page = { name: this.all_pages[0].title, public: true };
      } else {
        default_page = { name: "Home", public: true };
      }
      let page = (frappe.get_route()[1] == "private" ? frappe.get_route()[2] : frappe.get_route()[1]) || default_page.name;
      let is_public = frappe.get_route()[1] ? frappe.get_route()[1] != "private" : default_page.public;
      return { name: page, public: is_public };
    }
    async show_page(page) {
      if (!this.body.find("#editorjs")[0]) {
        this.$page = $(`
				<div id="editorjs" class="desk-page page-main-content"></div>
			`).appendTo(this.body);
      }
      if (this.all_pages) {
        this.create_page_skeleton();
        let pages = page.public ? this.public_pages : this.private_pages;
        let current_page = pages.filter((p) => p.title == page.name)[0];
        this.content = current_page && JSON.parse(current_page.content);
        this.add_custom_cards_in_content();
        $(".item-anchor").addClass("disable-click");
        if (this.pages && this.pages[current_page.name]) {
          this.page_data = this.pages[current_page.name];
        } else {
          await frappe.after_ajax(() => this.get_data(current_page));
        }
        this.setup_actions(page);
        this.prepare_editorjs();
        $(".item-anchor").removeClass("disable-click");
        this.remove_page_skeleton();
      }
    }
    add_custom_cards_in_content() {
      let index = -1;
      this.content.find((item, i) => {
        if (item.type == "card")
          index = i;
      });
      if (index !== -1) {
        this.content.splice(index + 1, 0, {
          type: "card",
          data: { card_name: "Custom Documents", col: 4 }
        });
        this.content.splice(index + 2, 0, {
          type: "card",
          data: { card_name: "Custom Reports", col: 4 }
        });
      }
    }
    prepare_editorjs() {
      if (this.editor) {
        this.editor.isReady.then(() => {
          this.editor.configuration.tools.chart.config.page_data = this.page_data;
          this.editor.configuration.tools.shortcut.config.page_data = this.page_data;
          this.editor.configuration.tools.card.config.page_data = this.page_data;
          this.editor.configuration.tools.onboarding.config.page_data = this.page_data;
          this.editor.configuration.tools.quick_list.config.page_data = this.page_data;
          this.editor.render({ blocks: this.content || [] });
        });
      } else {
        this.initialize_editorjs(this.content);
      }
    }
    setup_actions(page) {
      let pages = page.public ? this.public_pages : this.private_pages;
      let current_page = pages.filter((p) => p.title == page.name)[0];
      if (!this.is_read_only) {
        this.setup_customization_buttons(current_page);
        return;
      }
      this.clear_page_actions();
      current_page.is_editable && this.page.set_secondary_action(__("Edit"), async () => {
        if (!this.editor || !this.editor.readOnly)
          return;
        this.is_read_only = false;
        await this.editor.readOnly.toggle();
        this.editor.isReady.then(() => {
          this.initialize_editorjs_undo();
          this.setup_customization_buttons(current_page);
          this.show_sidebar_actions();
          this.make_blocks_sortable();
        });
      });
      this.page.add_inner_button(__("Create Workspace"), () => {
        this.initialize_new_page();
      });
    }
    initialize_editorjs_undo() {
      this.undo = new import_editorjs_undo.default({ editor: this.editor });
      this.undo.initialize({ blocks: this.content || [] });
      this.undo.readOnly = false;
    }
    clear_page_actions() {
      this.page.clear_primary_action();
      this.page.clear_secondary_action();
      this.page.clear_inner_toolbar();
    }
    setup_customization_buttons(page) {
      this.clear_page_actions();
      page.is_editable && this.page.set_primary_action(__("Save"), () => {
        this.clear_page_actions();
        this.save_page(page).then((saved) => {
          if (!saved)
            return;
          this.undo.readOnly = true;
          this.editor.readOnly.toggle();
          this.is_read_only = true;
        });
      }, null, __("Saving"));
      this.page.set_secondary_action(__("Discard"), async () => {
        this.discard = true;
        this.clear_page_actions();
        await this.editor.readOnly.toggle();
        this.is_read_only = true;
        this.sidebar_pages = this.cached_pages;
        this.reload();
        frappe.show_alert({ message: __("Customizations Discarded"), indicator: "info" });
      });
      page.name && this.page.add_inner_button(__("Settings"), () => {
        frappe.set_route(`workspace/${page.name}`);
      });
    }
    show_sidebar_actions() {
      this.sidebar.find(".standard-sidebar-section").addClass("show-control");
      this.make_sidebar_sortable();
    }
    add_sidebar_actions(item, sidebar_control, is_new) {
      if (!item.is_editable) {
        sidebar_control.parent().click(() => {
          !this.is_read_only && frappe.show_alert({
            message: __("Only Workspace Manager can sort or edit this page"),
            indicator: "info"
          }, 5);
        });
        frappe.utils.add_custom_button(frappe.utils.icon("duplicate", "sm"), () => this.duplicate_page(item), "duplicate-page", __("Duplicate Workspace"), null, sidebar_control);
      } else {
        frappe.utils.add_custom_button(frappe.utils.icon("drag", "xs"), null, "drag-handle", __("Drag"), null, sidebar_control);
        !is_new && this.add_settings_button(item, sidebar_control);
      }
    }
    get_parent_pages(page) {
      this.public_parent_pages = [
        "",
        ...this.public_pages.filter((p) => !p.parent_page).map((p) => p.title)
      ];
      this.private_parent_pages = [
        "",
        ...this.private_pages.filter((p) => !p.parent_page).map((p) => p.title)
      ];
      if (page) {
        return page.public ? this.public_parent_pages : this.private_parent_pages;
      }
    }
    edit_page(item) {
      var me = this;
      let old_item = item;
      let parent_pages = this.get_parent_pages(item);
      let idx = parent_pages.findIndex((x) => x == item.title);
      if (idx !== -1)
        parent_pages.splice(idx, 1);
      const d = new frappe.ui.Dialog({
        title: __("Update Details"),
        fields: [
          {
            label: __("Title"),
            fieldtype: "Data",
            fieldname: "title",
            reqd: 1,
            default: item.title
          },
          {
            label: __("Parent"),
            fieldtype: "Select",
            fieldname: "parent",
            options: parent_pages,
            default: item.parent_page
          },
          {
            label: __("Public"),
            fieldtype: "Check",
            fieldname: "is_public",
            depends_on: `eval:${this.has_access}`,
            default: item.public,
            onchange: function() {
              d.set_df_property("parent", "options", this.get_value() ? me.public_parent_pages : me.private_parent_pages);
            }
          },
          {
            fieldtype: "Column Break"
          },
          {
            label: __("Icon"),
            fieldtype: "Icon",
            fieldname: "icon",
            default: item.icon
          }
        ],
        primary_action_label: __("Update"),
        primary_action: (values) => {
          let is_title_changed = values.title != old_item.title;
          let is_section_changed = values.is_public != old_item.public;
          if ((is_title_changed || is_section_changed) && !this.validate_page(values, old_item))
            return;
          d.hide();
          frappe.call({
            method: "frappe.desk.doctype.workspace.workspace.update_page",
            args: {
              name: old_item.name,
              title: values.title,
              icon: values.icon || "",
              parent: values.parent || "",
              public: values.is_public || 0
            },
            callback: function(res) {
              if (res.message) {
                let message = `Workspace <b>${old_item.title}</b> Edited Successfully`;
                frappe.show_alert({ message: __(message), indicator: "green" });
              }
            }
          });
          this.update_sidebar(old_item, values);
          if (this.make_page_selected) {
            let pre_url = values.is_public ? "" : "private/";
            let route = pre_url + frappe.router.slug(values.title);
            frappe.set_route(route);
            this.make_page_selected = false;
          }
          this.make_sidebar();
          this.show_sidebar_actions();
        }
      });
      d.show();
    }
    update_sidebar(old_item, new_item) {
      let is_section_changed = old_item.public != (new_item.is_public || 0);
      let is_title_changed = old_item.title != new_item.title;
      let new_updated_item = __spreadValues({}, old_item);
      let pages = old_item.public ? this.public_pages : this.private_pages;
      let child_items = pages.filter((page) => page.parent_page == old_item.title);
      this.make_page_selected = old_item.selected;
      new_updated_item.title = new_item.title;
      new_updated_item.icon = new_item.icon;
      new_updated_item.parent_page = new_item.parent || "";
      new_updated_item.public = new_item.is_public;
      if (is_title_changed || is_section_changed) {
        if (new_item.is_public) {
          new_updated_item.name = new_item.title;
          new_updated_item.label = new_item.title;
          new_updated_item.for_user = "";
        } else {
          let user = frappe.session.user;
          new_updated_item.name = `${new_item.title}-${user}`;
          new_updated_item.label = `${new_item.title}-${user}`;
          new_updated_item.for_user = user;
        }
      }
      this.update_cached_values(old_item, new_updated_item);
      if (child_items.length) {
        child_items.forEach((child) => {
          child.parent_page = new_item.title;
          is_section_changed && this.update_child_sidebar(child, new_item);
        });
      }
    }
    update_child_sidebar(child, new_item) {
      let old_child = __spreadValues({}, child);
      this.make_page_selected = child.selected;
      child.public = new_item.is_public;
      if (new_item.is_public) {
        child.name = child.title;
        child.label = child.title;
        child.for_user = "";
      } else {
        let user = frappe.session.user;
        child.name = `${child.title}-${user}`;
        child.label = `${child.title}-${user}`;
        child.for_user = user;
      }
      this.update_cached_values(old_child, child);
    }
    update_cached_values(old_item, new_item, duplicate, new_page) {
      let [from_pages, to_pages] = old_item.public ? [this.public_pages, this.private_pages] : [this.private_pages, this.public_pages];
      let old_item_index = from_pages.findIndex((page) => page.title == old_item.title);
      duplicate && old_item_index++;
      if (frappe.workspaces[frappe.router.slug(old_item.name)] || new_page) {
        !duplicate && delete frappe.workspaces[frappe.router.slug(old_item.name)];
        if (new_item) {
          frappe.workspaces[frappe.router.slug(new_item.name)] = { title: new_item.title };
        }
      }
      if (this.pages && this.pages[old_item.name] || new_page) {
        if (new_item) {
          this.pages[new_item.name] = this.pages[old_item.name] || {};
        }
        !duplicate && delete this.pages[old_item.name];
      }
      if (new_item) {
        let is_section_changed = old_item.public != (new_item.is_public || new_item.public || 0);
        if (is_section_changed) {
          !duplicate && from_pages.splice(old_item_index, 1);
          to_pages.push(new_item);
        } else if (new_page) {
          from_pages.push(new_item);
        } else {
          from_pages.splice(old_item_index, duplicate ? 0 : 1, new_item);
        }
      } else {
        from_pages.splice(old_item_index, 1);
      }
      this.sidebar_pages.pages = [...this.public_pages, ...this.private_pages];
      this.cached_pages = this.sidebar_pages;
    }
    add_settings_button(item, sidebar_control) {
      this.dropdown_list = [
        {
          label: "Edit",
          title: "Edit Workspace",
          icon: frappe.utils.icon("edit", "sm"),
          action: () => this.edit_page(item)
        },
        {
          label: "Duplicate",
          title: "Duplicate Workspace",
          icon: frappe.utils.icon("duplicate", "sm"),
          action: () => this.duplicate_page(item)
        },
        {
          label: "Delete",
          title: "Delete Workspace",
          icon: frappe.utils.icon("delete-active", "sm"),
          action: () => this.delete_page(item)
        }
      ];
      let $button = $(`
			<div class="btn btn-secondary btn-xs setting-btn dropdown-btn" title="${__("Setting")}">
				${frappe.utils.icon("dot-horizontal", "xs")}
			</div>
			<div class="dropdown-list hidden"></div>
		`);
      let dropdown_item = function(label, title, icon, action) {
        let html = $(`
				<div class="dropdown-item" title="${title}">
					<span class="dropdown-item-icon">${icon}</span>
					<span class="dropdown-item-label">${label}</span>
				</div>
			`);
        html.click((event) => {
          event.stopPropagation();
          action && action();
        });
        return html;
      };
      $button.filter(".dropdown-btn").click((event) => {
        event.stopPropagation();
        if ($button.filter(".dropdown-list.hidden").length) {
          $(".dropdown-list:not(.hidden)").addClass("hidden");
        }
        $button.filter(".dropdown-list").toggleClass("hidden");
      });
      sidebar_control.append($button);
      this.dropdown_list.forEach((i) => {
        $button.filter(".dropdown-list").append(dropdown_item(i.label, i.title, i.icon, i.action));
      });
    }
    delete_page(page) {
      frappe.confirm(__("Are you sure you want to delete page {0}?", [page.title]), () => {
        frappe.call({
          method: "frappe.desk.doctype.workspace.workspace.delete_page",
          args: { page },
          callback: function(res) {
            if (res.message) {
              let page2 = res.message;
              let message = `Workspace <b>${page2.title}</b> Deleted Successfully`;
              frappe.show_alert({ message: __(message), indicator: "green" });
            }
          }
        });
        this.page.clear_primary_action();
        this.update_cached_values(page);
        if (this.current_page.name == page.title && this.current_page.public == page.public) {
          frappe.set_route("/");
        }
        this.make_sidebar();
        this.show_sidebar_actions();
      });
    }
    duplicate_page(page) {
      var me = this;
      let parent_pages = this.get_parent_pages(page);
      const d = new frappe.ui.Dialog({
        title: __("Create Duplicate"),
        fields: [
          {
            label: __("Title"),
            fieldtype: "Data",
            fieldname: "title",
            reqd: 1
          },
          {
            label: __("Parent"),
            fieldtype: "Select",
            fieldname: "parent",
            options: parent_pages,
            default: page.parent_page
          },
          {
            label: __("Public"),
            fieldtype: "Check",
            fieldname: "is_public",
            depends_on: `eval:${this.has_access}`,
            default: page.public,
            onchange: function() {
              d.set_df_property("parent", "options", this.get_value() ? me.public_parent_pages : me.private_parent_pages);
            }
          },
          {
            fieldtype: "Column Break"
          },
          {
            label: __("Icon"),
            fieldtype: "Icon",
            fieldname: "icon",
            default: page.icon
          }
        ],
        primary_action_label: __("Duplicate"),
        primary_action: (values) => {
          if (!this.validate_page(values))
            return;
          d.hide();
          frappe.call({
            method: "frappe.desk.doctype.workspace.workspace.duplicate_page",
            args: {
              page_name: page.name,
              new_page: values
            },
            callback: function(res) {
              if (res.message) {
                let new_page2 = res.message;
                let message = `Duplicate of <b>${page.title}</b> named as <b>${new_page2.title}</b> is created successfully`;
                frappe.show_alert({ message: __(message), indicator: "green" });
              }
            }
          });
          let new_page = __spreadValues({}, page);
          new_page.title = values.title;
          new_page.public = values.is_public || 0;
          new_page.name = values.title + (new_page.public ? "" : "-" + frappe.session.user);
          new_page.label = new_page.name;
          new_page.icon = values.icon;
          new_page.parent_page = values.parent || "";
          new_page.for_user = new_page.public ? "" : frappe.session.user;
          new_page.is_editable = !new_page.public;
          new_page.selected = true;
          this.update_cached_values(page, new_page, true);
          let pre_url = values.is_public ? "" : "private/";
          let route = pre_url + frappe.router.slug(values.title);
          frappe.set_route(route);
          me.make_sidebar();
          me.show_sidebar_actions();
        }
      });
      d.show();
    }
    make_sidebar_sortable() {
      let me = this;
      $(".nested-container").each(function() {
        new Sortable(this, {
          handle: ".drag-handle",
          draggable: ".sidebar-item-container.is-draggable",
          group: "nested",
          animation: 150,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          onEnd: function(evt) {
            let is_public = $(evt.item).attr("item-public") == "1";
            me.prepare_sorted_sidebar(is_public);
            me.update_sorted_sidebar();
          }
        });
      });
    }
    prepare_sorted_sidebar(is_public) {
      let pages = is_public ? this.public_pages : this.private_pages;
      if (is_public) {
        this.sorted_public_items = this.sort_sidebar(this.sidebar.find(".standard-sidebar-section").last(), pages);
      } else {
        this.sorted_private_items = this.sort_sidebar(this.sidebar.find(".standard-sidebar-section").first(), pages);
      }
      this.sidebar_pages.pages = [...this.public_pages, ...this.private_pages];
      this.cached_pages = this.sidebar_pages;
    }
    sort_sidebar($sidebar_section, pages) {
      let sorted_items = [];
      Array.from($sidebar_section.find(".sidebar-item-container")).forEach((page, i) => {
        let parent_page = "";
        if (page.closest(".nested-container").classList.contains("sidebar-child-item")) {
          parent_page = page.parentElement.parentElement.attributes["item-name"].value;
        }
        sorted_items.push({
          title: page.attributes["item-name"].value,
          parent_page,
          public: page.attributes["item-public"].value
        });
        let $drop_icon = $(page).find(".sidebar-item-control .drop-icon").first();
        if ($(page).find(".sidebar-child-item > *").length != 0) {
          $drop_icon.removeClass("hidden");
        } else {
          $drop_icon.addClass("hidden");
        }
        let from_index = pages.findIndex((p) => p.title == page.attributes["item-name"].value);
        let element = pages[from_index];
        element.parent_page = parent_page;
        if (from_index != i) {
          pages.splice(from_index, 1);
          pages.splice(i, 0, element);
        }
      });
      return sorted_items;
    }
    update_sorted_sidebar() {
      if (this.sorted_public_items || this.sorted_private_items) {
        frappe.call({
          method: "frappe.desk.doctype.workspace.workspace.sort_pages",
          args: {
            sb_public_items: this.sorted_public_items,
            sb_private_items: this.sorted_private_items
          },
          callback: function(res) {
            if (res.message) {
              let message = `Sidebar Updated Successfully`;
              frappe.show_alert({ message: __(message), indicator: "green" });
            }
          }
        });
      }
    }
    make_blocks_sortable() {
      let me = this;
      this.page_sortable = Sortable.create(this.page.main.find(".codex-editor__redactor").get(0), {
        handle: ".drag-handle",
        draggable: ".ce-block",
        animation: 150,
        onEnd: function(evt) {
          me.editor.blocks.move(evt.newIndex, evt.oldIndex);
        },
        setData: function() {
        }
      });
    }
    initialize_new_page() {
      var me = this;
      this.get_parent_pages();
      const d = new frappe.ui.Dialog({
        title: __("New Workspace"),
        fields: [
          {
            label: __("Title"),
            fieldtype: "Data",
            fieldname: "title",
            reqd: 1
          },
          {
            label: __("Parent"),
            fieldtype: "Select",
            fieldname: "parent",
            options: this.private_parent_pages
          },
          {
            label: __("Public"),
            fieldtype: "Check",
            fieldname: "is_public",
            depends_on: `eval:${this.has_access}`,
            onchange: function() {
              d.set_df_property("parent", "options", this.get_value() ? me.public_parent_pages : me.private_parent_pages);
            }
          },
          {
            fieldtype: "Column Break"
          },
          {
            label: __("Icon"),
            fieldtype: "Icon",
            fieldname: "icon"
          }
        ],
        primary_action_label: __("Create"),
        primary_action: (values) => {
          if (!this.validate_page(values))
            return;
          d.hide();
          this.initialize_editorjs_undo();
          this.setup_customization_buttons({ is_editable: true });
          let name = values.title + (values.is_public ? "" : "-" + frappe.session.user);
          let blocks = [
            {
              type: "header",
              data: { text: values.title }
            }
          ];
          let new_page = {
            content: JSON.stringify(blocks),
            name,
            label: name,
            title: values.title,
            public: values.is_public || 0,
            for_user: values.is_public ? "" : frappe.session.user,
            icon: values.icon,
            parent_page: values.parent || "",
            is_editable: true,
            selected: true
          };
          this.editor.render({
            blocks
          }).then(async () => {
            if (this.editor.configuration.readOnly) {
              this.is_read_only = false;
              await this.editor.readOnly.toggle();
            }
            frappe.call({
              method: "frappe.desk.doctype.workspace.workspace.new_page",
              args: {
                new_page
              },
              callback: function(res) {
                if (res.message) {
                  let message = `Workspace <b>${new_page.title}</b> Created Successfully`;
                  frappe.show_alert({
                    message: __(message),
                    indicator: "green"
                  });
                }
              }
            });
            this.update_cached_values(new_page, new_page, true, true);
            let pre_url = new_page.public ? "" : "private/";
            let route = pre_url + frappe.router.slug(new_page.title);
            frappe.set_route(route);
            this.make_sidebar();
            this.show_sidebar_actions();
          });
        }
      });
      d.show();
    }
    validate_page(new_page, old_page) {
      let message = "";
      let [from_pages, to_pages] = new_page.is_public ? [this.private_pages, this.public_pages] : [this.public_pages, this.private_pages];
      let section = this.sidebar_categories[new_page.is_public];
      if (to_pages && to_pages.filter((p) => p.title == new_page.title)[0]) {
        message = `Page with title ${new_page.title} already exist.`;
      }
      if (frappe.router.doctype_route_exist(frappe.router.slug(new_page.title))) {
        message = "Doctype with same route already exist. Please choose different title.";
      }
      let child_pages = old_page && from_pages.filter((p) => p.parent_page == old_page.title);
      if (child_pages) {
        child_pages.every((child_page) => {
          if (to_pages && to_pages.find((p) => p.title == child_page.title)) {
            message = `One of the child page with name <b>${child_page.title}</b> already exist in <b>${section}</b> Section. Please update the name of the child page first before moving`;
            cur_dialog.hide();
            return false;
          }
          return true;
        });
      }
      if (message) {
        frappe.throw(__(message));
        return false;
      }
      return true;
    }
    add_page_to_sidebar(page) {
      let $sidebar = $(".standard-sidebar-section");
      let item = __spreadValues({}, page);
      item.selected = true;
      item.is_editable = true;
      let $sidebar_item = this.sidebar_item_container(item);
      this.add_sidebar_actions(item, $sidebar_item.find(".sidebar-item-control"), true);
      $sidebar_item.find(".sidebar-item-control .drag-handle").css("margin-right", "8px");
      let sidebar_section = item.is_public ? $sidebar[1] : $sidebar[0];
      if (!item.parent) {
        !item.is_public && $sidebar.first().removeClass("hidden");
        $sidebar_item.appendTo(sidebar_section);
      } else {
        let $item_container = $(sidebar_section).find(`[item-name="${item.parent}"]`);
        let $child_section = $item_container.find(".sidebar-child-item");
        let $drop_icon = $item_container.find(".drop-icon");
        if (!$child_section[0]) {
          $child_section = $(`<div class="sidebar-child-item hidden nested-container"></div>`).appendTo($item_container);
          $drop_icon.toggleClass("hidden");
        }
        $sidebar_item.appendTo($child_section);
        $child_section.removeClass("hidden");
        $item_container.find(".drop-icon.hidden").removeClass("hidden");
        $item_container.find(".drop-icon use").attr("href", "#icon-small-up");
      }
      let section = item.is_public ? "public" : "private";
      if (this.sidebar_items && this.sidebar_items[section] && !this.sidebar_items[section][item.title]) {
        this.sidebar_items[section][item.title] = $sidebar_item;
      }
    }
    initialize_editorjs(blocks) {
      this.tools = {
        header: {
          class: this.blocks["header"],
          inlineToolbar: ["HeaderSize", "bold", "italic", "link"],
          config: {
            default_size: 4
          }
        },
        paragraph: {
          class: this.blocks["paragraph"],
          inlineToolbar: ["HeaderSize", "bold", "italic", "link"],
          config: {
            placeholder: "Choose a block or continue typing"
          }
        },
        chart: {
          class: this.blocks["chart"],
          config: {
            page_data: this.page_data || []
          }
        },
        card: {
          class: this.blocks["card"],
          config: {
            page_data: this.page_data || []
          }
        },
        shortcut: {
          class: this.blocks["shortcut"],
          config: {
            page_data: this.page_data || []
          }
        },
        onboarding: {
          class: this.blocks["onboarding"],
          config: {
            page_data: this.page_data || []
          }
        },
        quick_list: {
          class: this.blocks["quick_list"],
          config: {
            page_data: this.page_data || []
          }
        },
        spacer: this.blocks["spacer"],
        HeaderSize: frappe.workspace_block.tunes["header_size"]
      };
      this.editor = new import_editorjs.default({
        data: {
          blocks: blocks || []
        },
        tools: this.tools,
        autofocus: false,
        readOnly: true,
        logLevel: "ERROR"
      });
    }
    save_page(page) {
      let me = this;
      this.current_page = { name: page.title, public: page.public };
      return this.editor.save().then((outputData) => {
        let new_widgets = {};
        outputData.blocks.forEach((item) => {
          if (item.data.new) {
            if (!new_widgets[item.type]) {
              new_widgets[item.type] = [];
            }
            new_widgets[item.type].push(item.data.new);
            delete item.data["new"];
          }
        });
        let blocks = outputData.blocks.filter((item) => item.type != "card" || item.data.card_name !== "Custom Documents" && item.data.card_name !== "Custom Reports");
        if (page.content == JSON.stringify(blocks) && Object.keys(new_widgets).length === 0) {
          this.setup_customization_buttons(page);
          frappe.show_alert({
            message: __("No changes made on the page"),
            indicator: "warning"
          });
          return false;
        }
        this.create_page_skeleton();
        page.content = JSON.stringify(blocks);
        frappe.call({
          method: "frappe.desk.doctype.workspace.workspace.save_page",
          args: {
            title: page.title,
            public: page.public || 0,
            new_widgets,
            blocks: JSON.stringify(blocks)
          },
          callback: function(res) {
            if (res.message) {
              me.discard = true;
              me.update_cached_values(page, page);
              me.reload();
              frappe.show_alert({
                message: __("Page Saved Successfully"),
                indicator: "green"
              });
            }
          }
        });
        return true;
      }).catch((error) => {
        error;
      });
    }
    reload() {
      this.sorted_public_items = [];
      this.sorted_private_items = [];
      this.setup_pages(true);
      this.discard = false;
      this.undo.readOnly = true;
    }
    create_page_skeleton() {
      if ($(".layout-main-section").find(".workspace-skeleton").length)
        return;
      $(".layout-main-section").prepend(frappe.render_template("workspace_loading_skeleton"));
      $(".layout-main-section").find(".codex-editor").addClass("hidden");
    }
    remove_page_skeleton() {
      $(".layout-main-section").find(".codex-editor").removeClass("hidden");
      $(".layout-main-section").find(".workspace-skeleton").remove();
    }
    create_sidebar_skeleton() {
      if ($(".list-sidebar").find(".workspace-sidebar-skeleton").length)
        return;
      $(".list-sidebar").prepend(frappe.render_template("workspace_sidebar_loading_skeleton"));
      $(".desk-sidebar").addClass("hidden");
    }
    remove_sidebar_skeleton() {
      $(".desk-sidebar").removeClass("hidden");
      $(".list-sidebar").find(".workspace-sidebar-skeleton").remove();
    }
    register_awesomebar_shortcut() {
      "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
        const default_shortcut = {
          action: (e) => {
            $("#navbar-search").focus();
            return false;
          },
          page: this.page
        };
        frappe.ui.keys.add_shortcut(__spreadValues({ shortcut: letter }, default_shortcut));
        frappe.ui.keys.add_shortcut(__spreadValues({ shortcut: `shift+${letter}` }, default_shortcut));
      });
    }
  };
})();
/*! For license information please see editor.js.LICENSE.txt */
//# sourceMappingURL=visualize.bundle.SXAXAS6V.js.map
