(() => {
  var O0 = Object.create;
  var kn = Object.defineProperty;
  var z0 = Object.getOwnPropertyDescriptor;
  var E0 = Object.getOwnPropertyNames;
  var F0 = Object.getPrototypeOf,
    H0 = Object.prototype.hasOwnProperty;
  var Oe = (a, e) => () => {
    try {
      return (e || a((e = { exports: {} }).exports, e), e.exports);
    } catch (t) {
      throw ((e = 0), t);
    }
  };
  var V0 = (a, e, t, l) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let u of E0(e))
        !H0.call(a, u) &&
          u !== t &&
          kn(a, u, { get: () => e[u], enumerable: !(l = z0(e, u)) || l.enumerable });
    return a;
  };
  var ze = (a, e, t) => (
    (t = a != null ? O0(F0(a)) : {}),
    V0(e || !a || !a.__esModule ? kn(t, "default", { value: a, enumerable: !0 }) : t, a)
  );
  var zn = Oe((_) => {
    "use strict";
    var Ri = Symbol.for("react.transitional.element"),
      G0 = Symbol.for("react.portal"),
      P0 = Symbol.for("react.fragment"),
      X0 = Symbol.for("react.strict_mode"),
      Q0 = Symbol.for("react.profiler"),
      J0 = Symbol.for("react.consumer"),
      Z0 = Symbol.for("react.context"),
      W0 = Symbol.for("react.forward_ref"),
      Y0 = Symbol.for("react.suspense"),
      K0 = Symbol.for("react.memo"),
      Dn = Symbol.for("react.lazy"),
      j0 = Symbol.for("react.activity"),
      qn = Symbol.iterator;
    function _0(a) {
      return a === null || typeof a != "object"
        ? null
        : ((a = (qn && a[qn]) || a["@@iterator"]), typeof a == "function" ? a : null);
    }
    var Bn = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Rn = Object.assign,
      Nn = {};
    function Al(a, e, t) {
      ((this.props = a), (this.context = e), (this.refs = Nn), (this.updater = t || Bn));
    }
    Al.prototype.isReactComponent = {};
    Al.prototype.setState = function (a, e) {
      if (typeof a != "object" && typeof a != "function" && a != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, a, e, "setState");
    };
    Al.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function Un() {}
    Un.prototype = Al.prototype;
    function Ni(a, e, t) {
      ((this.props = a), (this.context = e), (this.refs = Nn), (this.updater = t || Bn));
    }
    var Ui = (Ni.prototype = new Un());
    Ui.constructor = Ni;
    Rn(Ui, Al.prototype);
    Ui.isPureReactComponent = !0;
    var Mn = Array.isArray;
    function Bi() {}
    var qa = { H: null, A: null, T: null, S: null },
      On = Object.prototype.hasOwnProperty;
    function Oi(a, e, t) {
      var l = t.ref;
      return { $$typeof: Ri, type: a, key: e, ref: l !== void 0 ? l : null, props: t };
    }
    function $0(a, e) {
      return Oi(a.type, e, a.props);
    }
    function zi(a) {
      return typeof a == "object" && a !== null && a.$$typeof === Ri;
    }
    function a3(a) {
      var e = { "=": "=0", ":": "=2" };
      return (
        "$" +
        a.replace(/[=:]/g, function (t) {
          return e[t];
        })
      );
    }
    var wn = /\/+/g;
    function Di(a, e) {
      return typeof a == "object" && a !== null && a.key != null ? a3("" + a.key) : e.toString(36);
    }
    function e3(a) {
      switch (a.status) {
        case "fulfilled":
          return a.value;
        case "rejected":
          throw a.reason;
        default:
          switch (
            (typeof a.status == "string"
              ? a.then(Bi, Bi)
              : ((a.status = "pending"),
                a.then(
                  function (e) {
                    a.status === "pending" && ((a.status = "fulfilled"), (a.value = e));
                  },
                  function (e) {
                    a.status === "pending" && ((a.status = "rejected"), (a.reason = e));
                  },
                )),
            a.status)
          ) {
            case "fulfilled":
              return a.value;
            case "rejected":
              throw a.reason;
          }
      }
      throw a;
    }
    function Il(a, e, t, l, u) {
      var o = typeof a;
      (o === "undefined" || o === "boolean") && (a = null);
      var i = !1;
      if (a === null) i = !0;
      else
        switch (o) {
          case "bigint":
          case "string":
          case "number":
            i = !0;
            break;
          case "object":
            switch (a.$$typeof) {
              case Ri:
              case G0:
                i = !0;
                break;
              case Dn:
                return ((i = a._init), Il(i(a._payload), e, t, l, u));
            }
        }
      if (i)
        return (
          (u = u(a)),
          (i = l === "" ? "." + Di(a, 0) : l),
          Mn(u)
            ? ((t = ""),
              i != null && (t = i.replace(wn, "$&/") + "/"),
              Il(u, e, t, "", function (c) {
                return c;
              }))
            : u != null &&
              (zi(u) &&
                (u = $0(
                  u,
                  t +
                    (u.key == null || (a && a.key === u.key)
                      ? ""
                      : ("" + u.key).replace(wn, "$&/") + "/") +
                    i,
                )),
              e.push(u)),
          1
        );
      i = 0;
      var f = l === "" ? "." : l + ":";
      if (Mn(a))
        for (var r = 0; r < a.length; r++)
          ((l = a[r]), (o = f + Di(l, r)), (i += Il(l, e, t, o, u)));
      else if (((r = _0(a)), typeof r == "function"))
        for (a = r.call(a), r = 0; !(l = a.next()).done;)
          ((l = l.value), (o = f + Di(l, r++)), (i += Il(l, e, t, o, u)));
      else if (o === "object") {
        if (typeof a.then == "function") return Il(e3(a), e, t, l, u);
        throw (
          (e = String(a)),
          Error(
            "Objects are not valid as a React child (found: " +
              (e === "[object Object]"
                ? "object with keys {" + Object.keys(a).join(", ") + "}"
                : e) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      }
      return i;
    }
    function Qo(a, e, t) {
      if (a == null) return a;
      var l = [],
        u = 0;
      return (
        Il(a, l, "", "", function (o) {
          return e.call(t, o, u++);
        }),
        l
      );
    }
    function t3(a) {
      if (a._status === -1) {
        var e = a._result;
        ((e = e()),
          e.then(
            function (t) {
              (a._status === 0 || a._status === -1) && ((a._status = 1), (a._result = t));
            },
            function (t) {
              (a._status === 0 || a._status === -1) && ((a._status = 2), (a._result = t));
            },
          ),
          a._status === -1 && ((a._status = 0), (a._result = e)));
      }
      if (a._status === 1) return a._result.default;
      throw a._result;
    }
    var Tn =
        typeof reportError == "function"
          ? reportError
          : function (a) {
              if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var e = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof a == "object" && a !== null && typeof a.message == "string"
                      ? String(a.message)
                      : String(a),
                  error: a,
                });
                if (!window.dispatchEvent(e)) return;
              } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", a);
                return;
              }
              console.error(a);
            },
      l3 = {
        map: Qo,
        forEach: function (a, e, t) {
          Qo(
            a,
            function () {
              e.apply(this, arguments);
            },
            t,
          );
        },
        count: function (a) {
          var e = 0;
          return (
            Qo(a, function () {
              e++;
            }),
            e
          );
        },
        toArray: function (a) {
          return (
            Qo(a, function (e) {
              return e;
            }) || []
          );
        },
        only: function (a) {
          if (!zi(a))
            throw Error("React.Children.only expected to receive a single React element child.");
          return a;
        },
      };
    _.Activity = j0;
    _.Children = l3;
    _.Component = Al;
    _.Fragment = P0;
    _.Profiler = Q0;
    _.PureComponent = Ni;
    _.StrictMode = X0;
    _.Suspense = Y0;
    _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = qa;
    _.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (a) {
        return qa.H.useMemoCache(a);
      },
    };
    _.cache = function (a) {
      return function () {
        return a.apply(null, arguments);
      };
    };
    _.cacheSignal = function () {
      return null;
    };
    _.cloneElement = function (a, e, t) {
      if (a == null) throw Error("The argument must be a React element, but you passed " + a + ".");
      var l = Rn({}, a.props),
        u = a.key;
      if (e != null)
        for (o in (e.key !== void 0 && (u = "" + e.key), e))
          !On.call(e, o) ||
            o === "key" ||
            o === "__self" ||
            o === "__source" ||
            (o === "ref" && e.ref === void 0) ||
            (l[o] = e[o]);
      var o = arguments.length - 2;
      if (o === 1) l.children = t;
      else if (1 < o) {
        for (var i = Array(o), f = 0; f < o; f++) i[f] = arguments[f + 2];
        l.children = i;
      }
      return Oi(a.type, u, l);
    };
    _.createContext = function (a) {
      return (
        (a = {
          $$typeof: Z0,
          _currentValue: a,
          _currentValue2: a,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (a.Provider = a),
        (a.Consumer = { $$typeof: J0, _context: a }),
        a
      );
    };
    _.createElement = function (a, e, t) {
      var l,
        u = {},
        o = null;
      if (e != null)
        for (l in (e.key !== void 0 && (o = "" + e.key), e))
          On.call(e, l) && l !== "key" && l !== "__self" && l !== "__source" && (u[l] = e[l]);
      var i = arguments.length - 2;
      if (i === 1) u.children = t;
      else if (1 < i) {
        for (var f = Array(i), r = 0; r < i; r++) f[r] = arguments[r + 2];
        u.children = f;
      }
      if (a && a.defaultProps)
        for (l in ((i = a.defaultProps), i)) u[l] === void 0 && (u[l] = i[l]);
      return Oi(a, o, u);
    };
    _.createRef = function () {
      return { current: null };
    };
    _.forwardRef = function (a) {
      return { $$typeof: W0, render: a };
    };
    _.isValidElement = zi;
    _.lazy = function (a) {
      return { $$typeof: Dn, _payload: { _status: -1, _result: a }, _init: t3 };
    };
    _.memo = function (a, e) {
      return { $$typeof: K0, type: a, compare: e === void 0 ? null : e };
    };
    _.startTransition = function (a) {
      var e = qa.T,
        t = {};
      qa.T = t;
      try {
        var l = a(),
          u = qa.S;
        (u !== null && u(t, l),
          typeof l == "object" && l !== null && typeof l.then == "function" && l.then(Bi, Tn));
      } catch (o) {
        Tn(o);
      } finally {
        (e !== null && t.types !== null && (e.types = t.types), (qa.T = e));
      }
    };
    _.unstable_useCacheRefresh = function () {
      return qa.H.useCacheRefresh();
    };
    _.use = function (a) {
      return qa.H.use(a);
    };
    _.useActionState = function (a, e, t) {
      return qa.H.useActionState(a, e, t);
    };
    _.useCallback = function (a, e) {
      return qa.H.useCallback(a, e);
    };
    _.useContext = function (a) {
      return qa.H.useContext(a);
    };
    _.useDebugValue = function () {};
    _.useDeferredValue = function (a, e) {
      return qa.H.useDeferredValue(a, e);
    };
    _.useEffect = function (a, e) {
      return qa.H.useEffect(a, e);
    };
    _.useEffectEvent = function (a) {
      return qa.H.useEffectEvent(a);
    };
    _.useId = function () {
      return qa.H.useId();
    };
    _.useImperativeHandle = function (a, e, t) {
      return qa.H.useImperativeHandle(a, e, t);
    };
    _.useInsertionEffect = function (a, e) {
      return qa.H.useInsertionEffect(a, e);
    };
    _.useLayoutEffect = function (a, e) {
      return qa.H.useLayoutEffect(a, e);
    };
    _.useMemo = function (a, e) {
      return qa.H.useMemo(a, e);
    };
    _.useOptimistic = function (a, e) {
      return qa.H.useOptimistic(a, e);
    };
    _.useReducer = function (a, e, t) {
      return qa.H.useReducer(a, e, t);
    };
    _.useRef = function (a) {
      return qa.H.useRef(a);
    };
    _.useState = function (a) {
      return qa.H.useState(a);
    };
    _.useSyncExternalStore = function (a, e, t) {
      return qa.H.useSyncExternalStore(a, e, t);
    };
    _.useTransition = function () {
      return qa.H.useTransition();
    };
    _.version = "19.2.7";
  });
  var xt = Oe((Om, En) => {
    "use strict";
    En.exports = zn();
  });
  var Wn = Oe((Ba) => {
    "use strict";
    function Vi(a, e) {
      var t = a.length;
      a.push(e);
      a: for (; 0 < t;) {
        var l = (t - 1) >>> 1,
          u = a[l];
        if (0 < Jo(u, e)) ((a[l] = e), (a[t] = u), (t = l));
        else break a;
      }
    }
    function Ge(a) {
      return a.length === 0 ? null : a[0];
    }
    function Wo(a) {
      if (a.length === 0) return null;
      var e = a[0],
        t = a.pop();
      if (t !== e) {
        a[0] = t;
        a: for (var l = 0, u = a.length, o = u >>> 1; l < o;) {
          var i = 2 * (l + 1) - 1,
            f = a[i],
            r = i + 1,
            c = a[r];
          if (0 > Jo(f, t))
            r < u && 0 > Jo(c, f)
              ? ((a[l] = c), (a[r] = t), (l = r))
              : ((a[l] = f), (a[i] = t), (l = i));
          else if (r < u && 0 > Jo(c, t)) ((a[l] = c), (a[r] = t), (l = r));
          else break a;
        }
      }
      return e;
    }
    function Jo(a, e) {
      var t = a.sortIndex - e.sortIndex;
      return t !== 0 ? t : a.id - e.id;
    }
    Ba.unstable_now = void 0;
    typeof performance == "object" && typeof performance.now == "function"
      ? ((Fn = performance),
        (Ba.unstable_now = function () {
          return Fn.now();
        }))
      : ((Ei = Date),
        (Hn = Ei.now()),
        (Ba.unstable_now = function () {
          return Ei.now() - Hn;
        }));
    var Fn,
      Ei,
      Hn,
      je = [],
      yt = [],
      u3 = 1,
      Ie = null,
      $a = 3,
      Gi = !1,
      qu = !1,
      Mu = !1,
      Pi = !1,
      Pn = typeof setTimeout == "function" ? setTimeout : null,
      Xn = typeof clearTimeout == "function" ? clearTimeout : null,
      Vn = typeof setImmediate < "u" ? setImmediate : null;
    function Zo(a) {
      for (var e = Ge(yt); e !== null;) {
        if (e.callback === null) Wo(yt);
        else if (e.startTime <= a) (Wo(yt), (e.sortIndex = e.expirationTime), Vi(je, e));
        else break;
        e = Ge(yt);
      }
    }
    function Xi(a) {
      if (((Mu = !1), Zo(a), !qu))
        if (Ge(je) !== null) ((qu = !0), ql || ((ql = !0), kl()));
        else {
          var e = Ge(yt);
          e !== null && Qi(Xi, e.startTime - a);
        }
    }
    var ql = !1,
      wu = -1,
      Qn = 5,
      Jn = -1;
    function Zn() {
      return Pi ? !0 : !(Ba.unstable_now() - Jn < Qn);
    }
    function Fi() {
      if (((Pi = !1), ql)) {
        var a = Ba.unstable_now();
        Jn = a;
        var e = !0;
        try {
          a: {
            ((qu = !1), Mu && ((Mu = !1), Xn(wu), (wu = -1)), (Gi = !0));
            var t = $a;
            try {
              e: {
                for (Zo(a), Ie = Ge(je); Ie !== null && !(Ie.expirationTime > a && Zn());) {
                  var l = Ie.callback;
                  if (typeof l == "function") {
                    ((Ie.callback = null), ($a = Ie.priorityLevel));
                    var u = l(Ie.expirationTime <= a);
                    if (((a = Ba.unstable_now()), typeof u == "function")) {
                      ((Ie.callback = u), Zo(a), (e = !0));
                      break e;
                    }
                    (Ie === Ge(je) && Wo(je), Zo(a));
                  } else Wo(je);
                  Ie = Ge(je);
                }
                if (Ie !== null) e = !0;
                else {
                  var o = Ge(yt);
                  (o !== null && Qi(Xi, o.startTime - a), (e = !1));
                }
              }
              break a;
            } finally {
              ((Ie = null), ($a = t), (Gi = !1));
            }
            e = void 0;
          }
        } finally {
          e ? kl() : (ql = !1);
        }
      }
    }
    var kl;
    typeof Vn == "function"
      ? (kl = function () {
          Vn(Fi);
        })
      : typeof MessageChannel < "u"
        ? ((Hi = new MessageChannel()),
          (Gn = Hi.port2),
          (Hi.port1.onmessage = Fi),
          (kl = function () {
            Gn.postMessage(null);
          }))
        : (kl = function () {
            Pn(Fi, 0);
          });
    var Hi, Gn;
    function Qi(a, e) {
      wu = Pn(function () {
        a(Ba.unstable_now());
      }, e);
    }
    Ba.unstable_IdlePriority = 5;
    Ba.unstable_ImmediatePriority = 1;
    Ba.unstable_LowPriority = 4;
    Ba.unstable_NormalPriority = 3;
    Ba.unstable_Profiling = null;
    Ba.unstable_UserBlockingPriority = 2;
    Ba.unstable_cancelCallback = function (a) {
      a.callback = null;
    };
    Ba.unstable_forceFrameRate = function (a) {
      0 > a || 125 < a
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (Qn = 0 < a ? Math.floor(1e3 / a) : 5);
    };
    Ba.unstable_getCurrentPriorityLevel = function () {
      return $a;
    };
    Ba.unstable_next = function (a) {
      switch ($a) {
        case 1:
        case 2:
        case 3:
          var e = 3;
          break;
        default:
          e = $a;
      }
      var t = $a;
      $a = e;
      try {
        return a();
      } finally {
        $a = t;
      }
    };
    Ba.unstable_requestPaint = function () {
      Pi = !0;
    };
    Ba.unstable_runWithPriority = function (a, e) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var t = $a;
      $a = a;
      try {
        return e();
      } finally {
        $a = t;
      }
    };
    Ba.unstable_scheduleCallback = function (a, e, t) {
      var l = Ba.unstable_now();
      switch (
        (typeof t == "object" && t !== null
          ? ((t = t.delay), (t = typeof t == "number" && 0 < t ? l + t : l))
          : (t = l),
        a)
      ) {
        case 1:
          var u = -1;
          break;
        case 2:
          u = 250;
          break;
        case 5:
          u = 1073741823;
          break;
        case 4:
          u = 1e4;
          break;
        default:
          u = 5e3;
      }
      return (
        (u = t + u),
        (a = {
          id: u3++,
          callback: e,
          priorityLevel: a,
          startTime: t,
          expirationTime: u,
          sortIndex: -1,
        }),
        t > l
          ? ((a.sortIndex = t),
            Vi(yt, a),
            Ge(je) === null &&
              a === Ge(yt) &&
              (Mu ? (Xn(wu), (wu = -1)) : (Mu = !0), Qi(Xi, t - l)))
          : ((a.sortIndex = u), Vi(je, a), qu || Gi || ((qu = !0), ql || ((ql = !0), kl()))),
        a
      );
    };
    Ba.unstable_shouldYield = Zn;
    Ba.unstable_wrapCallback = function (a) {
      var e = $a;
      return function () {
        var t = $a;
        $a = e;
        try {
          return a.apply(this, arguments);
        } finally {
          $a = t;
        }
      };
    };
  });
  var Kn = Oe((Em, Yn) => {
    "use strict";
    Yn.exports = Wn();
  });
  var _n = Oe((te) => {
    "use strict";
    var o3 = xt();
    function jn(a) {
      var e = "https://react.dev/errors/" + a;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var t = 2; t < arguments.length; t++)
          e += "&args[]=" + encodeURIComponent(arguments[t]);
      }
      return (
        "Minified React error #" +
        a +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function bt() {}
    var ee = {
        d: {
          f: bt,
          r: function () {
            throw Error(jn(522));
          },
          D: bt,
          C: bt,
          L: bt,
          m: bt,
          X: bt,
          S: bt,
          M: bt,
        },
        p: 0,
        findDOMNode: null,
      },
      d3 = Symbol.for("react.portal");
    function i3(a, e, t) {
      var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: d3,
        key: l == null ? null : "" + l,
        children: a,
        containerInfo: e,
        implementation: t,
      };
    }
    var Tu = o3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function Yo(a, e) {
      if (a === "font") return "";
      if (typeof e == "string") return e === "use-credentials" ? e : "";
    }
    te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee;
    te.createPortal = function (a, e) {
      var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)) throw Error(jn(299));
      return i3(a, e, null, t);
    };
    te.flushSync = function (a) {
      var e = Tu.T,
        t = ee.p;
      try {
        if (((Tu.T = null), (ee.p = 2), a)) return a();
      } finally {
        ((Tu.T = e), (ee.p = t), ee.d.f());
      }
    };
    te.preconnect = function (a, e) {
      typeof a == "string" &&
        (e
          ? ((e = e.crossOrigin),
            (e = typeof e == "string" ? (e === "use-credentials" ? e : "") : void 0))
          : (e = null),
        ee.d.C(a, e));
    };
    te.prefetchDNS = function (a) {
      typeof a == "string" && ee.d.D(a);
    };
    te.preinit = function (a, e) {
      if (typeof a == "string" && e && typeof e.as == "string") {
        var t = e.as,
          l = Yo(t, e.crossOrigin),
          u = typeof e.integrity == "string" ? e.integrity : void 0,
          o = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        t === "style"
          ? ee.d.S(a, typeof e.precedence == "string" ? e.precedence : void 0, {
              crossOrigin: l,
              integrity: u,
              fetchPriority: o,
            })
          : t === "script" &&
            ee.d.X(a, {
              crossOrigin: l,
              integrity: u,
              fetchPriority: o,
              nonce: typeof e.nonce == "string" ? e.nonce : void 0,
            });
      }
    };
    te.preinitModule = function (a, e) {
      if (typeof a == "string")
        if (typeof e == "object" && e !== null) {
          if (e.as == null || e.as === "script") {
            var t = Yo(e.as, e.crossOrigin);
            ee.d.M(a, {
              crossOrigin: t,
              integrity: typeof e.integrity == "string" ? e.integrity : void 0,
              nonce: typeof e.nonce == "string" ? e.nonce : void 0,
            });
          }
        } else e == null && ee.d.M(a);
    };
    te.preload = function (a, e) {
      if (typeof a == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        var t = e.as,
          l = Yo(t, e.crossOrigin);
        ee.d.L(a, t, {
          crossOrigin: l,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0,
          type: typeof e.type == "string" ? e.type : void 0,
          fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
          referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
          imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
          imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
          media: typeof e.media == "string" ? e.media : void 0,
        });
      }
    };
    te.preloadModule = function (a, e) {
      if (typeof a == "string")
        if (e) {
          var t = Yo(e.as, e.crossOrigin);
          ee.d.m(a, {
            as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
            crossOrigin: t,
            integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          });
        } else ee.d.m(a);
    };
    te.requestFormReset = function (a) {
      ee.d.r(a);
    };
    te.unstable_batchedUpdates = function (a, e) {
      return a(e);
    };
    te.useFormState = function (a, e, t) {
      return Tu.H.useFormState(a, e, t);
    };
    te.useFormStatus = function () {
      return Tu.H.useHostTransitionStatus();
    };
    te.version = "19.2.7";
  });
  var es = Oe((Hm, as) => {
    "use strict";
    function $n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($n);
        } catch (a) {
          console.error(a);
        }
    }
    ($n(), (as.exports = _n()));
  });
  var p0 = Oe((yi) => {
    "use strict";
    var Pa = Kn(),
      qc = xt(),
      f3 = es();
    function k(a) {
      var e = "https://react.dev/errors/" + a;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var t = 2; t < arguments.length; t++)
          e += "&args[]=" + encodeURIComponent(arguments[t]);
      }
      return (
        "Minified React error #" +
        a +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function Mc(a) {
      return !(!a || (a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11));
    }
    function vo(a) {
      var e = a,
        t = a;
      if (a.alternate) for (; e.return;) e = e.return;
      else {
        a = e;
        do ((e = a), (e.flags & 4098) !== 0 && (t = e.return), (a = e.return));
        while (a);
      }
      return e.tag === 3 ? t : null;
    }
    function wc(a) {
      if (a.tag === 13) {
        var e = a.memoizedState;
        if ((e === null && ((a = a.alternate), a !== null && (e = a.memoizedState)), e !== null))
          return e.dehydrated;
      }
      return null;
    }
    function Tc(a) {
      if (a.tag === 31) {
        var e = a.memoizedState;
        if ((e === null && ((a = a.alternate), a !== null && (e = a.memoizedState)), e !== null))
          return e.dehydrated;
      }
      return null;
    }
    function ts(a) {
      if (vo(a) !== a) throw Error(k(188));
    }
    function r3(a) {
      var e = a.alternate;
      if (!e) {
        if (((e = vo(a)), e === null)) throw Error(k(188));
        return e !== a ? null : a;
      }
      for (var t = a, l = e; ;) {
        var u = t.return;
        if (u === null) break;
        var o = u.alternate;
        if (o === null) {
          if (((l = u.return), l !== null)) {
            t = l;
            continue;
          }
          break;
        }
        if (u.child === o.child) {
          for (o = u.child; o;) {
            if (o === t) return (ts(u), a);
            if (o === l) return (ts(u), e);
            o = o.sibling;
          }
          throw Error(k(188));
        }
        if (t.return !== l.return) ((t = u), (l = o));
        else {
          for (var i = !1, f = u.child; f;) {
            if (f === t) {
              ((i = !0), (t = u), (l = o));
              break;
            }
            if (f === l) {
              ((i = !0), (l = u), (t = o));
              break;
            }
            f = f.sibling;
          }
          if (!i) {
            for (f = o.child; f;) {
              if (f === t) {
                ((i = !0), (t = o), (l = u));
                break;
              }
              if (f === l) {
                ((i = !0), (l = o), (t = u));
                break;
              }
              f = f.sibling;
            }
            if (!i) throw Error(k(189));
          }
        }
        if (t.alternate !== l) throw Error(k(190));
      }
      if (t.tag !== 3) throw Error(k(188));
      return t.stateNode.current === t ? a : e;
    }
    function Dc(a) {
      var e = a.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return a;
      for (a = a.child; a !== null;) {
        if (((e = Dc(a)), e !== null)) return e;
        a = a.sibling;
      }
      return null;
    }
    var Ta = Object.assign,
      n3 = Symbol.for("react.element"),
      Ko = Symbol.for("react.transitional.element"),
      Eu = Symbol.for("react.portal"),
      Rl = Symbol.for("react.fragment"),
      Bc = Symbol.for("react.strict_mode"),
      kf = Symbol.for("react.profiler"),
      Rc = Symbol.for("react.consumer"),
      ot = Symbol.for("react.context"),
      br = Symbol.for("react.forward_ref"),
      qf = Symbol.for("react.suspense"),
      Mf = Symbol.for("react.suspense_list"),
      Sr = Symbol.for("react.memo"),
      St = Symbol.for("react.lazy"),
      wf = Symbol.for("react.activity"),
      s3 = Symbol.for("react.memo_cache_sentinel"),
      ls = Symbol.iterator;
    function Du(a) {
      return a === null || typeof a != "object"
        ? null
        : ((a = (ls && a[ls]) || a["@@iterator"]), typeof a == "function" ? a : null);
    }
    var c3 = Symbol.for("react.client.reference");
    function Tf(a) {
      if (a == null) return null;
      if (typeof a == "function") return a.$$typeof === c3 ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case Rl:
          return "Fragment";
        case kf:
          return "Profiler";
        case Bc:
          return "StrictMode";
        case qf:
          return "Suspense";
        case Mf:
          return "SuspenseList";
        case wf:
          return "Activity";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case Eu:
            return "Portal";
          case ot:
            return a.displayName || "Context";
          case Rc:
            return (a._context.displayName || "Context") + ".Consumer";
          case br:
            var e = a.render;
            return (
              (a = a.displayName),
              a ||
                ((a = e.displayName || e.name || ""),
                (a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef")),
              a
            );
          case Sr:
            return ((e = a.displayName || null), e !== null ? e : Tf(a.type) || "Memo");
          case St:
            ((e = a._payload), (a = a._init));
            try {
              return Tf(a(e));
            } catch {}
        }
      return null;
    }
    var Fu = Array.isArray,
      J = qc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      pa = f3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      ll = { pending: !1, data: null, method: null, action: null },
      Df = [],
      Nl = -1;
    function Ze(a) {
      return { current: a };
    }
    function Ja(a) {
      0 > Nl || ((a.current = Df[Nl]), (Df[Nl] = null), Nl--);
    }
    function Aa(a, e) {
      (Nl++, (Df[Nl] = a.current), (a.current = e));
    }
    var Je = Ze(null),
      to = Ze(null),
      Rt = Ze(null),
      wd = Ze(null);
    function Td(a, e) {
      switch ((Aa(Rt, e), Aa(to, a), Aa(Je, null), e.nodeType)) {
        case 9:
        case 11:
          a = (a = e.documentElement) && (a = a.namespaceURI) ? nc(a) : 0;
          break;
        default:
          if (((a = e.tagName), (e = e.namespaceURI))) ((e = nc(e)), (a = $2(e, a)));
          else
            switch (a) {
              case "svg":
                a = 1;
                break;
              case "math":
                a = 2;
                break;
              default:
                a = 0;
            }
      }
      (Ja(Je), Aa(Je, a));
    }
    function _l() {
      (Ja(Je), Ja(to), Ja(Rt));
    }
    function Bf(a) {
      a.memoizedState !== null && Aa(wd, a);
      var e = Je.current,
        t = $2(e, a.type);
      e !== t && (Aa(to, a), Aa(Je, t));
    }
    function Dd(a) {
      (to.current === a && (Ja(Je), Ja(to)), wd.current === a && (Ja(wd), (mo._currentValue = ll)));
    }
    var Ji, us;
    function $t(a) {
      if (Ji === void 0)
        try {
          throw Error();
        } catch (t) {
          var e = t.stack.trim().match(/\n( *(at )?)/);
          ((Ji = (e && e[1]) || ""),
            (us =
              -1 <
              t.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < t.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : ""));
        }
      return (
        `
` +
        Ji +
        a +
        us
      );
    }
    var Zi = !1;
    function Wi(a, e) {
      if (!a || Zi) return "";
      Zi = !0;
      var t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var l = {
          DetermineComponentFrameRoot: function () {
            try {
              if (e) {
                var v = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(v.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(v, []);
                  } catch (x) {
                    var h = x;
                  }
                  Reflect.construct(a, [], v);
                } else {
                  try {
                    v.call();
                  } catch (x) {
                    h = x;
                  }
                  a.call(v.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  h = x;
                }
                (v = a()) && typeof v.catch == "function" && v.catch(function () {});
              }
            } catch (x) {
              if (x && h && typeof x.stack == "string") return [x.stack, h.stack];
            }
            return [null, null];
          },
        };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
        u &&
          u.configurable &&
          Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var o = l.DetermineComponentFrameRoot(),
          i = o[0],
          f = o[1];
        if (i && f) {
          var r = i.split(`
`),
            c = f.split(`
`);
          for (u = l = 0; l < r.length && !r[l].includes("DetermineComponentFrameRoot");) l++;
          for (; u < c.length && !c[u].includes("DetermineComponentFrameRoot");) u++;
          if (l === r.length || u === c.length)
            for (l = r.length - 1, u = c.length - 1; 1 <= l && 0 <= u && r[l] !== c[u];) u--;
          for (; 1 <= l && 0 <= u; l--, u--)
            if (r[l] !== c[u]) {
              if (l !== 1 || u !== 1)
                do
                  if ((l--, u--, 0 > u || r[l] !== c[u])) {
                    var g =
                      `
` + r[l].replace(" at new ", " at ");
                    return (
                      a.displayName &&
                        g.includes("<anonymous>") &&
                        (g = g.replace("<anonymous>", a.displayName)),
                      g
                    );
                  }
                while (1 <= l && 0 <= u);
              break;
            }
        }
      } finally {
        ((Zi = !1), (Error.prepareStackTrace = t));
      }
      return (t = a ? a.displayName || a.name : "") ? $t(t) : "";
    }
    function p3(a, e) {
      switch (a.tag) {
        case 26:
        case 27:
        case 5:
          return $t(a.type);
        case 16:
          return $t("Lazy");
        case 13:
          return a.child !== e && e !== null ? $t("Suspense Fallback") : $t("Suspense");
        case 19:
          return $t("SuspenseList");
        case 0:
        case 15:
          return Wi(a.type, !1);
        case 11:
          return Wi(a.type.render, !1);
        case 1:
          return Wi(a.type, !0);
        case 31:
          return $t("Activity");
        default:
          return "";
      }
    }
    function os(a) {
      try {
        var e = "",
          t = null;
        do ((e += p3(a, t)), (t = a), (a = a.return));
        while (a);
        return e;
      } catch (l) {
        return (
          `
Error generating stack: ` +
          l.message +
          `
` +
          l.stack
        );
      }
    }
    var Rf = Object.prototype.hasOwnProperty,
      Cr = Pa.unstable_scheduleCallback,
      Yi = Pa.unstable_cancelCallback,
      m3 = Pa.unstable_shouldYield,
      h3 = Pa.unstable_requestPaint,
      ve = Pa.unstable_now,
      g3 = Pa.unstable_getCurrentPriorityLevel,
      Nc = Pa.unstable_ImmediatePriority,
      Uc = Pa.unstable_UserBlockingPriority,
      Bd = Pa.unstable_NormalPriority,
      v3 = Pa.unstable_LowPriority,
      Oc = Pa.unstable_IdlePriority,
      L3 = Pa.log,
      x3 = Pa.unstable_setDisableYieldValue,
      Lo = null,
      Le = null;
    function Mt(a) {
      if ((typeof L3 == "function" && x3(a), Le && typeof Le.setStrictMode == "function"))
        try {
          Le.setStrictMode(Lo, a);
        } catch {}
    }
    var xe = Math.clz32 ? Math.clz32 : S3,
      y3 = Math.log,
      b3 = Math.LN2;
    function S3(a) {
      return ((a >>>= 0), a === 0 ? 32 : (31 - ((y3(a) / b3) | 0)) | 0);
    }
    var jo = 256,
      _o = 262144,
      $o = 4194304;
    function al(a) {
      var e = a & 42;
      if (e !== 0) return e;
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return a & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return a & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return a;
      }
    }
    function ui(a, e, t) {
      var l = a.pendingLanes;
      if (l === 0) return 0;
      var u = 0,
        o = a.suspendedLanes,
        i = a.pingedLanes;
      a = a.warmLanes;
      var f = l & 134217727;
      return (
        f !== 0
          ? ((l = f & ~o),
            l !== 0
              ? (u = al(l))
              : ((i &= f), i !== 0 ? (u = al(i)) : t || ((t = f & ~a), t !== 0 && (u = al(t)))))
          : ((f = l & ~o),
            f !== 0
              ? (u = al(f))
              : i !== 0
                ? (u = al(i))
                : t || ((t = l & ~a), t !== 0 && (u = al(t)))),
        u === 0
          ? 0
          : e !== 0 &&
              e !== u &&
              (e & o) === 0 &&
              ((o = u & -u), (t = e & -e), o >= t || (o === 32 && (t & 4194048) !== 0))
            ? e
            : u
      );
    }
    function xo(a, e) {
      return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & e) === 0;
    }
    function C3(a, e) {
      switch (a) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function zc() {
      var a = $o;
      return (($o <<= 1), ($o & 62914560) === 0 && ($o = 4194304), a);
    }
    function Ki(a) {
      for (var e = [], t = 0; 31 > t; t++) e.push(a);
      return e;
    }
    function yo(a, e) {
      ((a.pendingLanes |= e),
        e !== 268435456 && ((a.suspendedLanes = 0), (a.pingedLanes = 0), (a.warmLanes = 0)));
    }
    function I3(a, e, t, l, u, o) {
      var i = a.pendingLanes;
      ((a.pendingLanes = t),
        (a.suspendedLanes = 0),
        (a.pingedLanes = 0),
        (a.warmLanes = 0),
        (a.expiredLanes &= t),
        (a.entangledLanes &= t),
        (a.errorRecoveryDisabledLanes &= t),
        (a.shellSuspendCounter = 0));
      var f = a.entanglements,
        r = a.expirationTimes,
        c = a.hiddenUpdates;
      for (t = i & ~t; 0 < t;) {
        var g = 31 - xe(t),
          v = 1 << g;
        ((f[g] = 0), (r[g] = -1));
        var h = c[g];
        if (h !== null)
          for (c[g] = null, g = 0; g < h.length; g++) {
            var x = h[g];
            x !== null && (x.lane &= -536870913);
          }
        t &= ~v;
      }
      (l !== 0 && Ec(a, l, 0),
        o !== 0 && u === 0 && a.tag !== 0 && (a.suspendedLanes |= o & ~(i & ~e)));
    }
    function Ec(a, e, t) {
      ((a.pendingLanes |= e), (a.suspendedLanes &= ~e));
      var l = 31 - xe(e);
      ((a.entangledLanes |= e),
        (a.entanglements[l] = a.entanglements[l] | 1073741824 | (t & 261930)));
    }
    function Fc(a, e) {
      var t = (a.entangledLanes |= e);
      for (a = a.entanglements; t;) {
        var l = 31 - xe(t),
          u = 1 << l;
        ((u & e) | (a[l] & e) && (a[l] |= e), (t &= ~u));
      }
    }
    function Hc(a, e) {
      var t = e & -e;
      return ((t = (t & 42) !== 0 ? 1 : Ir(t)), (t & (a.suspendedLanes | e)) !== 0 ? 0 : t);
    }
    function Ir(a) {
      switch (a) {
        case 2:
          a = 1;
          break;
        case 8:
          a = 4;
          break;
        case 32:
          a = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          a = 128;
          break;
        case 268435456:
          a = 134217728;
          break;
        default:
          a = 0;
      }
      return a;
    }
    function Ar(a) {
      return ((a &= -a), 2 < a ? (8 < a ? ((a & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
    }
    function Vc() {
      var a = pa.p;
      return a !== 0 ? a : ((a = window.event), a === void 0 ? 32 : n0(a.type));
    }
    function ds(a, e) {
      var t = pa.p;
      try {
        return ((pa.p = a), e());
      } finally {
        pa.p = t;
      }
    }
    var Jt = Math.random().toString(36).slice(2),
      Ya = "__reactFiber$" + Jt,
      ne = "__reactProps$" + Jt,
      ru = "__reactContainer$" + Jt,
      Nf = "__reactEvents$" + Jt,
      A3 = "__reactListeners$" + Jt,
      k3 = "__reactHandles$" + Jt,
      is = "__reactResources$" + Jt,
      bo = "__reactMarker$" + Jt;
    function kr(a) {
      (delete a[Ya], delete a[ne], delete a[Nf], delete a[A3], delete a[k3]);
    }
    function Ul(a) {
      var e = a[Ya];
      if (e) return e;
      for (var t = a.parentNode; t;) {
        if ((e = t[ru] || t[Ya])) {
          if (((t = e.alternate), e.child !== null || (t !== null && t.child !== null)))
            for (a = hc(a); a !== null;) {
              if ((t = a[Ya])) return t;
              a = hc(a);
            }
          return e;
        }
        ((a = t), (t = a.parentNode));
      }
      return null;
    }
    function nu(a) {
      if ((a = a[Ya] || a[ru])) {
        var e = a.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return a;
      }
      return null;
    }
    function Hu(a) {
      var e = a.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return a.stateNode;
      throw Error(k(33));
    }
    function Ql(a) {
      var e = a[is];
      return (e || (e = a[is] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
    }
    function Qa(a) {
      a[bo] = !0;
    }
    var Gc = new Set(),
      Pc = {};
    function pl(a, e) {
      ($l(a, e), $l(a + "Capture", e));
    }
    function $l(a, e) {
      for (Pc[a] = e, a = 0; a < e.length; a++) Gc.add(e[a]);
    }
    var q3 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
      ),
      fs = {},
      rs = {};
    function M3(a) {
      return Rf.call(rs, a)
        ? !0
        : Rf.call(fs, a)
          ? !1
          : q3.test(a)
            ? (rs[a] = !0)
            : ((fs[a] = !0), !1);
    }
    function md(a, e, t) {
      if (M3(e))
        if (t === null) a.removeAttribute(e);
        else {
          switch (typeof t) {
            case "undefined":
            case "function":
            case "symbol":
              a.removeAttribute(e);
              return;
            case "boolean":
              var l = e.toLowerCase().slice(0, 5);
              if (l !== "data-" && l !== "aria-") {
                a.removeAttribute(e);
                return;
              }
          }
          a.setAttribute(e, "" + t);
        }
    }
    function ad(a, e, t) {
      if (t === null) a.removeAttribute(e);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            a.removeAttribute(e);
            return;
        }
        a.setAttribute(e, "" + t);
      }
    }
    function _e(a, e, t, l) {
      if (l === null) a.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            a.removeAttribute(t);
            return;
        }
        a.setAttributeNS(e, t, "" + l);
      }
    }
    function ke(a) {
      switch (typeof a) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Xc(a) {
      var e = a.type;
      return (a = a.nodeName) && a.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function w3(a, e, t) {
      var l = Object.getOwnPropertyDescriptor(a.constructor.prototype, e);
      if (
        !a.hasOwnProperty(e) &&
        typeof l < "u" &&
        typeof l.get == "function" &&
        typeof l.set == "function"
      ) {
        var u = l.get,
          o = l.set;
        return (
          Object.defineProperty(a, e, {
            configurable: !0,
            get: function () {
              return u.call(this);
            },
            set: function (i) {
              ((t = "" + i), o.call(this, i));
            },
          }),
          Object.defineProperty(a, e, { enumerable: l.enumerable }),
          {
            getValue: function () {
              return t;
            },
            setValue: function (i) {
              t = "" + i;
            },
            stopTracking: function () {
              ((a._valueTracker = null), delete a[e]);
            },
          }
        );
      }
    }
    function Uf(a) {
      if (!a._valueTracker) {
        var e = Xc(a) ? "checked" : "value";
        a._valueTracker = w3(a, e, "" + a[e]);
      }
    }
    function Qc(a) {
      if (!a) return !1;
      var e = a._valueTracker;
      if (!e) return !0;
      var t = e.getValue(),
        l = "";
      return (
        a && (l = Xc(a) ? (a.checked ? "true" : "false") : a.value),
        (a = l),
        a !== t ? (e.setValue(a), !0) : !1
      );
    }
    function Rd(a) {
      if (((a = a || (typeof document < "u" ? document : void 0)), typeof a > "u")) return null;
      try {
        return a.activeElement || a.body;
      } catch {
        return a.body;
      }
    }
    var T3 = /[\n"\\]/g;
    function we(a) {
      return a.replace(T3, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Of(a, e, t, l, u, o, i, f) {
      ((a.name = ""),
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean"
          ? (a.type = i)
          : a.removeAttribute("type"),
        e != null
          ? i === "number"
            ? ((e === 0 && a.value === "") || a.value != e) && (a.value = "" + ke(e))
            : a.value !== "" + ke(e) && (a.value = "" + ke(e))
          : (i !== "submit" && i !== "reset") || a.removeAttribute("value"),
        e != null
          ? zf(a, i, ke(e))
          : t != null
            ? zf(a, i, ke(t))
            : l != null && a.removeAttribute("value"),
        u == null && o != null && (a.defaultChecked = !!o),
        u != null && (a.checked = u && typeof u != "function" && typeof u != "symbol"),
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean"
          ? (a.name = "" + ke(f))
          : a.removeAttribute("name"));
    }
    function Jc(a, e, t, l, u, o, i, f) {
      if (
        (o != null &&
          typeof o != "function" &&
          typeof o != "symbol" &&
          typeof o != "boolean" &&
          (a.type = o),
        e != null || t != null)
      ) {
        if (!((o !== "submit" && o !== "reset") || e != null)) {
          Uf(a);
          return;
        }
        ((t = t != null ? "" + ke(t) : ""),
          (e = e != null ? "" + ke(e) : t),
          f || e === a.value || (a.value = e),
          (a.defaultValue = e));
      }
      ((l = l ?? u),
        (l = typeof l != "function" && typeof l != "symbol" && !!l),
        (a.checked = f ? a.checked : !!l),
        (a.defaultChecked = !!l),
        i != null &&
          typeof i != "function" &&
          typeof i != "symbol" &&
          typeof i != "boolean" &&
          (a.name = i),
        Uf(a));
    }
    function zf(a, e, t) {
      (e === "number" && Rd(a.ownerDocument) === a) ||
        a.defaultValue === "" + t ||
        (a.defaultValue = "" + t);
    }
    function Jl(a, e, t, l) {
      if (((a = a.options), e)) {
        e = {};
        for (var u = 0; u < t.length; u++) e["$" + t[u]] = !0;
        for (t = 0; t < a.length; t++)
          ((u = e.hasOwnProperty("$" + a[t].value)),
            a[t].selected !== u && (a[t].selected = u),
            u && l && (a[t].defaultSelected = !0));
      } else {
        for (t = "" + ke(t), e = null, u = 0; u < a.length; u++) {
          if (a[u].value === t) {
            ((a[u].selected = !0), l && (a[u].defaultSelected = !0));
            return;
          }
          e !== null || a[u].disabled || (e = a[u]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Zc(a, e, t) {
      if (e != null && ((e = "" + ke(e)), e !== a.value && (a.value = e), t == null)) {
        a.defaultValue !== e && (a.defaultValue = e);
        return;
      }
      a.defaultValue = t != null ? "" + ke(t) : "";
    }
    function Wc(a, e, t, l) {
      if (e == null) {
        if (l != null) {
          if (t != null) throw Error(k(92));
          if (Fu(l)) {
            if (1 < l.length) throw Error(k(93));
            l = l[0];
          }
          t = l;
        }
        (t == null && (t = ""), (e = t));
      }
      ((t = ke(e)),
        (a.defaultValue = t),
        (l = a.textContent),
        l === t && l !== "" && l !== null && (a.value = l),
        Uf(a));
    }
    function au(a, e) {
      if (e) {
        var t = a.firstChild;
        if (t && t === a.lastChild && t.nodeType === 3) {
          t.nodeValue = e;
          return;
        }
      }
      a.textContent = e;
    }
    var D3 = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
      ),
    );
    function ns(a, e, t) {
      var l = e.indexOf("--") === 0;
      t == null || typeof t == "boolean" || t === ""
        ? l
          ? a.setProperty(e, "")
          : e === "float"
            ? (a.cssFloat = "")
            : (a[e] = "")
        : l
          ? a.setProperty(e, t)
          : typeof t != "number" || t === 0 || D3.has(e)
            ? e === "float"
              ? (a.cssFloat = t)
              : (a[e] = ("" + t).trim())
            : (a[e] = t + "px");
    }
    function Yc(a, e, t) {
      if (e != null && typeof e != "object") throw Error(k(62));
      if (((a = a.style), t != null)) {
        for (var l in t)
          !t.hasOwnProperty(l) ||
            (e != null && e.hasOwnProperty(l)) ||
            (l.indexOf("--") === 0
              ? a.setProperty(l, "")
              : l === "float"
                ? (a.cssFloat = "")
                : (a[l] = ""));
        for (var u in e) ((l = e[u]), e.hasOwnProperty(u) && t[u] !== l && ns(a, u, l));
      } else for (var o in e) e.hasOwnProperty(o) && ns(a, o, e[o]);
    }
    function qr(a) {
      if (a.indexOf("-") === -1) return !1;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var B3 = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      R3 =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function hd(a) {
      return R3.test("" + a)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : a;
    }
    function dt() {}
    var Ef = null;
    function Mr(a) {
      return (
        (a = a.target || a.srcElement || window),
        a.correspondingUseElement && (a = a.correspondingUseElement),
        a.nodeType === 3 ? a.parentNode : a
      );
    }
    var Ol = null,
      Zl = null;
    function ss(a) {
      var e = nu(a);
      if (e && (a = e.stateNode)) {
        var t = a[ne] || null;
        a: switch (((a = e.stateNode), e.type)) {
          case "input":
            if (
              (Of(
                a,
                t.value,
                t.defaultValue,
                t.defaultValue,
                t.checked,
                t.defaultChecked,
                t.type,
                t.name,
              ),
              (e = t.name),
              t.type === "radio" && e != null)
            ) {
              for (t = a; t.parentNode;) t = t.parentNode;
              for (
                t = t.querySelectorAll('input[name="' + we("" + e) + '"][type="radio"]'), e = 0;
                e < t.length;
                e++
              ) {
                var l = t[e];
                if (l !== a && l.form === a.form) {
                  var u = l[ne] || null;
                  if (!u) throw Error(k(90));
                  Of(
                    l,
                    u.value,
                    u.defaultValue,
                    u.defaultValue,
                    u.checked,
                    u.defaultChecked,
                    u.type,
                    u.name,
                  );
                }
              }
              for (e = 0; e < t.length; e++) ((l = t[e]), l.form === a.form && Qc(l));
            }
            break a;
          case "textarea":
            Zc(a, t.value, t.defaultValue);
            break a;
          case "select":
            ((e = t.value), e != null && Jl(a, !!t.multiple, e, !1));
        }
      }
    }
    var ji = !1;
    function Kc(a, e, t) {
      if (ji) return a(e, t);
      ji = !0;
      try {
        var l = a(e);
        return l;
      } finally {
        if (
          ((ji = !1),
          (Ol !== null || Zl !== null) &&
            (gi(), Ol && ((e = Ol), (a = Zl), (Zl = Ol = null), ss(e), a)))
        )
          for (e = 0; e < a.length; e++) ss(a[e]);
      }
    }
    function lo(a, e) {
      var t = a.stateNode;
      if (t === null) return null;
      var l = t[ne] || null;
      if (l === null) return null;
      t = l[e];
      a: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          ((l = !l.disabled) ||
            ((a = a.type),
            (l = !(a === "button" || a === "input" || a === "select" || a === "textarea"))),
            (a = !l));
          break a;
        default:
          a = !1;
      }
      if (a) return null;
      if (t && typeof t != "function") throw Error(k(231, e, typeof t));
      return t;
    }
    var st = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      Ff = !1;
    if (st)
      try {
        ((Ml = {}),
          Object.defineProperty(Ml, "passive", {
            get: function () {
              Ff = !0;
            },
          }),
          window.addEventListener("test", Ml, Ml),
          window.removeEventListener("test", Ml, Ml));
      } catch {
        Ff = !1;
      }
    var Ml,
      wt = null,
      wr = null,
      gd = null;
    function jc() {
      if (gd) return gd;
      var a,
        e = wr,
        t = e.length,
        l,
        u = "value" in wt ? wt.value : wt.textContent,
        o = u.length;
      for (a = 0; a < t && e[a] === u[a]; a++);
      var i = t - a;
      for (l = 1; l <= i && e[t - l] === u[o - l]; l++);
      return (gd = u.slice(a, 1 < l ? 1 - l : void 0));
    }
    function vd(a) {
      var e = a.keyCode;
      return (
        "charCode" in a ? ((a = a.charCode), a === 0 && e === 13 && (a = 13)) : (a = e),
        a === 10 && (a = 13),
        32 <= a || a === 13 ? a : 0
      );
    }
    function ed() {
      return !0;
    }
    function cs() {
      return !1;
    }
    function se(a) {
      function e(t, l, u, o, i) {
        ((this._reactName = t),
          (this._targetInst = u),
          (this.type = l),
          (this.nativeEvent = o),
          (this.target = i),
          (this.currentTarget = null));
        for (var f in a) a.hasOwnProperty(f) && ((t = a[f]), (this[f] = t ? t(o) : o[f]));
        return (
          (this.isDefaultPrevented = (
            o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
          )
            ? ed
            : cs),
          (this.isPropagationStopped = cs),
          this
        );
      }
      return (
        Ta(e.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t &&
              (t.preventDefault
                ? t.preventDefault()
                : typeof t.returnValue != "unknown" && (t.returnValue = !1),
              (this.isDefaultPrevented = ed));
          },
          stopPropagation: function () {
            var t = this.nativeEvent;
            t &&
              (t.stopPropagation
                ? t.stopPropagation()
                : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
              (this.isPropagationStopped = ed));
          },
          persist: function () {},
          isPersistent: ed,
        }),
        e
      );
    }
    var ml = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (a) {
          return a.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      oi = se(ml),
      So = Ta({}, ml, { view: 0, detail: 0 }),
      N3 = se(So),
      _i,
      $i,
      Bu,
      di = Ta({}, So, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Tr,
        button: 0,
        buttons: 0,
        relatedTarget: function (a) {
          return a.relatedTarget === void 0
            ? a.fromElement === a.srcElement
              ? a.toElement
              : a.fromElement
            : a.relatedTarget;
        },
        movementX: function (a) {
          return "movementX" in a
            ? a.movementX
            : (a !== Bu &&
                (Bu && a.type === "mousemove"
                  ? ((_i = a.screenX - Bu.screenX), ($i = a.screenY - Bu.screenY))
                  : ($i = _i = 0),
                (Bu = a)),
              _i);
        },
        movementY: function (a) {
          return "movementY" in a ? a.movementY : $i;
        },
      }),
      ps = se(di),
      U3 = Ta({}, di, { dataTransfer: 0 }),
      O3 = se(U3),
      z3 = Ta({}, So, { relatedTarget: 0 }),
      af = se(z3),
      E3 = Ta({}, ml, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      F3 = se(E3),
      H3 = Ta({}, ml, {
        clipboardData: function (a) {
          return "clipboardData" in a ? a.clipboardData : window.clipboardData;
        },
      }),
      V3 = se(H3),
      G3 = Ta({}, ml, { data: 0 }),
      ms = se(G3),
      P3 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      X3 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      Q3 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function J3(a) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(a) : (a = Q3[a]) ? !!e[a] : !1;
    }
    function Tr() {
      return J3;
    }
    var Z3 = Ta({}, So, {
        key: function (a) {
          if (a.key) {
            var e = P3[a.key] || a.key;
            if (e !== "Unidentified") return e;
          }
          return a.type === "keypress"
            ? ((a = vd(a)), a === 13 ? "Enter" : String.fromCharCode(a))
            : a.type === "keydown" || a.type === "keyup"
              ? X3[a.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Tr,
        charCode: function (a) {
          return a.type === "keypress" ? vd(a) : 0;
        },
        keyCode: function (a) {
          return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
        },
        which: function (a) {
          return a.type === "keypress"
            ? vd(a)
            : a.type === "keydown" || a.type === "keyup"
              ? a.keyCode
              : 0;
        },
      }),
      W3 = se(Z3),
      Y3 = Ta({}, di, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      hs = se(Y3),
      K3 = Ta({}, So, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Tr,
      }),
      j3 = se(K3),
      _3 = Ta({}, ml, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      $3 = se(_3),
      a4 = Ta({}, di, {
        deltaX: function (a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function (a) {
          return "deltaY" in a
            ? a.deltaY
            : "wheelDeltaY" in a
              ? -a.wheelDeltaY
              : "wheelDelta" in a
                ? -a.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      e4 = se(a4),
      t4 = Ta({}, ml, { newState: 0, oldState: 0 }),
      l4 = se(t4),
      u4 = [9, 13, 27, 32],
      Dr = st && "CompositionEvent" in window,
      Pu = null;
    st && "documentMode" in document && (Pu = document.documentMode);
    var o4 = st && "TextEvent" in window && !Pu,
      _c = st && (!Dr || (Pu && 8 < Pu && 11 >= Pu)),
      gs = " ",
      vs = !1;
    function $c(a, e) {
      switch (a) {
        case "keyup":
          return u4.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function a1(a) {
      return ((a = a.detail), typeof a == "object" && "data" in a ? a.data : null);
    }
    var zl = !1;
    function d4(a, e) {
      switch (a) {
        case "compositionend":
          return a1(e);
        case "keypress":
          return e.which !== 32 ? null : ((vs = !0), gs);
        case "textInput":
          return ((a = e.data), a === gs && vs ? null : a);
        default:
          return null;
      }
    }
    function i4(a, e) {
      if (zl)
        return a === "compositionend" || (!Dr && $c(a, e))
          ? ((a = jc()), (gd = wr = wt = null), (zl = !1), a)
          : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return _c && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var f4 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Ls(a) {
      var e = a && a.nodeName && a.nodeName.toLowerCase();
      return e === "input" ? !!f4[a.type] : e === "textarea";
    }
    function e1(a, e, t, l) {
      (Ol ? (Zl ? Zl.push(l) : (Zl = [l])) : (Ol = l),
        (e = jd(e, "onChange")),
        0 < e.length &&
          ((t = new oi("onChange", "change", null, t, l)), a.push({ event: t, listeners: e })));
    }
    var Xu = null,
      uo = null;
    function r4(a) {
      K2(a, 0);
    }
    function ii(a) {
      var e = Hu(a);
      if (Qc(e)) return a;
    }
    function xs(a, e) {
      if (a === "change") return e;
    }
    var t1 = !1;
    st &&
      (st
        ? ((ld = "oninput" in document),
          ld ||
            ((ef = document.createElement("div")),
            ef.setAttribute("oninput", "return;"),
            (ld = typeof ef.oninput == "function")),
          (td = ld))
        : (td = !1),
      (t1 = td && (!document.documentMode || 9 < document.documentMode)));
    var td, ld, ef;
    function ys() {
      Xu && (Xu.detachEvent("onpropertychange", l1), (uo = Xu = null));
    }
    function l1(a) {
      if (a.propertyName === "value" && ii(uo)) {
        var e = [];
        (e1(e, uo, a, Mr(a)), Kc(r4, e));
      }
    }
    function n4(a, e, t) {
      a === "focusin"
        ? (ys(), (Xu = e), (uo = t), Xu.attachEvent("onpropertychange", l1))
        : a === "focusout" && ys();
    }
    function s4(a) {
      if (a === "selectionchange" || a === "keyup" || a === "keydown") return ii(uo);
    }
    function c4(a, e) {
      if (a === "click") return ii(e);
    }
    function p4(a, e) {
      if (a === "input" || a === "change") return ii(e);
    }
    function m4(a, e) {
      return (a === e && (a !== 0 || 1 / a === 1 / e)) || (a !== a && e !== e);
    }
    var be = typeof Object.is == "function" ? Object.is : m4;
    function oo(a, e) {
      if (be(a, e)) return !0;
      if (typeof a != "object" || a === null || typeof e != "object" || e === null) return !1;
      var t = Object.keys(a),
        l = Object.keys(e);
      if (t.length !== l.length) return !1;
      for (l = 0; l < t.length; l++) {
        var u = t[l];
        if (!Rf.call(e, u) || !be(a[u], e[u])) return !1;
      }
      return !0;
    }
    function bs(a) {
      for (; a && a.firstChild;) a = a.firstChild;
      return a;
    }
    function Ss(a, e) {
      var t = bs(a);
      a = 0;
      for (var l; t;) {
        if (t.nodeType === 3) {
          if (((l = a + t.textContent.length), a <= e && l >= e)) return { node: t, offset: e - a };
          a = l;
        }
        a: {
          for (; t;) {
            if (t.nextSibling) {
              t = t.nextSibling;
              break a;
            }
            t = t.parentNode;
          }
          t = void 0;
        }
        t = bs(t);
      }
    }
    function u1(a, e) {
      return a && e
        ? a === e
          ? !0
          : a && a.nodeType === 3
            ? !1
            : e && e.nodeType === 3
              ? u1(a, e.parentNode)
              : "contains" in a
                ? a.contains(e)
                : a.compareDocumentPosition
                  ? !!(a.compareDocumentPosition(e) & 16)
                  : !1
        : !1;
    }
    function o1(a) {
      a =
        a != null && a.ownerDocument != null && a.ownerDocument.defaultView != null
          ? a.ownerDocument.defaultView
          : window;
      for (var e = Rd(a.document); e instanceof a.HTMLIFrameElement;) {
        try {
          var t = typeof e.contentWindow.location.href == "string";
        } catch {
          t = !1;
        }
        if (t) a = e.contentWindow;
        else break;
        e = Rd(a.document);
      }
      return e;
    }
    function Br(a) {
      var e = a && a.nodeName && a.nodeName.toLowerCase();
      return (
        e &&
        ((e === "input" &&
          (a.type === "text" ||
            a.type === "search" ||
            a.type === "tel" ||
            a.type === "url" ||
            a.type === "password")) ||
          e === "textarea" ||
          a.contentEditable === "true")
      );
    }
    var h4 = st && "documentMode" in document && 11 >= document.documentMode,
      El = null,
      Hf = null,
      Qu = null,
      Vf = !1;
    function Cs(a, e, t) {
      var l = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
      Vf ||
        El == null ||
        El !== Rd(l) ||
        ((l = El),
        "selectionStart" in l && Br(l)
          ? (l = { start: l.selectionStart, end: l.selectionEnd })
          : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
            (l = {
              anchorNode: l.anchorNode,
              anchorOffset: l.anchorOffset,
              focusNode: l.focusNode,
              focusOffset: l.focusOffset,
            })),
        (Qu && oo(Qu, l)) ||
          ((Qu = l),
          (l = jd(Hf, "onSelect")),
          0 < l.length &&
            ((e = new oi("onSelect", "select", null, e, t)),
            a.push({ event: e, listeners: l }),
            (e.target = El))));
    }
    function _t(a, e) {
      var t = {};
      return (
        (t[a.toLowerCase()] = e.toLowerCase()),
        (t["Webkit" + a] = "webkit" + e),
        (t["Moz" + a] = "moz" + e),
        t
      );
    }
    var Fl = {
        animationend: _t("Animation", "AnimationEnd"),
        animationiteration: _t("Animation", "AnimationIteration"),
        animationstart: _t("Animation", "AnimationStart"),
        transitionrun: _t("Transition", "TransitionRun"),
        transitionstart: _t("Transition", "TransitionStart"),
        transitioncancel: _t("Transition", "TransitionCancel"),
        transitionend: _t("Transition", "TransitionEnd"),
      },
      tf = {},
      d1 = {};
    st &&
      ((d1 = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Fl.animationend.animation,
        delete Fl.animationiteration.animation,
        delete Fl.animationstart.animation),
      "TransitionEvent" in window || delete Fl.transitionend.transition);
    function hl(a) {
      if (tf[a]) return tf[a];
      if (!Fl[a]) return a;
      var e = Fl[a],
        t;
      for (t in e) if (e.hasOwnProperty(t) && t in d1) return (tf[a] = e[t]);
      return a;
    }
    var i1 = hl("animationend"),
      f1 = hl("animationiteration"),
      r1 = hl("animationstart"),
      g4 = hl("transitionrun"),
      v4 = hl("transitionstart"),
      L4 = hl("transitioncancel"),
      n1 = hl("transitionend"),
      s1 = new Map(),
      Gf =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    Gf.push("scrollEnd");
    function He(a, e) {
      (s1.set(a, e), pl(e, [a]));
    }
    var Nd =
        typeof reportError == "function"
          ? reportError
          : function (a) {
              if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var e = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof a == "object" && a !== null && typeof a.message == "string"
                      ? String(a.message)
                      : String(a),
                  error: a,
                });
                if (!window.dispatchEvent(e)) return;
              } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", a);
                return;
              }
              console.error(a);
            },
      Ae = [],
      Hl = 0,
      Rr = 0;
    function fi() {
      for (var a = Hl, e = (Rr = Hl = 0); e < a;) {
        var t = Ae[e];
        Ae[e++] = null;
        var l = Ae[e];
        Ae[e++] = null;
        var u = Ae[e];
        Ae[e++] = null;
        var o = Ae[e];
        if (((Ae[e++] = null), l !== null && u !== null)) {
          var i = l.pending;
          (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)), (l.pending = u));
        }
        o !== 0 && c1(t, u, o);
      }
    }
    function ri(a, e, t, l) {
      ((Ae[Hl++] = a),
        (Ae[Hl++] = e),
        (Ae[Hl++] = t),
        (Ae[Hl++] = l),
        (Rr |= l),
        (a.lanes |= l),
        (a = a.alternate),
        a !== null && (a.lanes |= l));
    }
    function Nr(a, e, t, l) {
      return (ri(a, e, t, l), Ud(a));
    }
    function gl(a, e) {
      return (ri(a, null, null, e), Ud(a));
    }
    function c1(a, e, t) {
      a.lanes |= t;
      var l = a.alternate;
      l !== null && (l.lanes |= t);
      for (var u = !1, o = a.return; o !== null;)
        ((o.childLanes |= t),
          (l = o.alternate),
          l !== null && (l.childLanes |= t),
          o.tag === 22 && ((a = o.stateNode), a === null || a._visibility & 1 || (u = !0)),
          (a = o),
          (o = o.return));
      return a.tag === 3
        ? ((o = a.stateNode),
          u &&
            e !== null &&
            ((u = 31 - xe(t)),
            (a = o.hiddenUpdates),
            (l = a[u]),
            l === null ? (a[u] = [e]) : l.push(e),
            (e.lane = t | 536870912)),
          o)
        : null;
    }
    function Ud(a) {
      if (50 < ao) throw ((ao = 0), (rr = null), Error(k(185)));
      for (var e = a.return; e !== null;) ((a = e), (e = a.return));
      return a.tag === 3 ? a.stateNode : null;
    }
    var Vl = {};
    function x4(a, e, t, l) {
      ((this.tag = a),
        (this.key = t),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = e),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = l),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function he(a, e, t, l) {
      return new x4(a, e, t, l);
    }
    function Ur(a) {
      return ((a = a.prototype), !(!a || !a.isReactComponent));
    }
    function ft(a, e) {
      var t = a.alternate;
      return (
        t === null
          ? ((t = he(a.tag, e, a.key, a.mode)),
            (t.elementType = a.elementType),
            (t.type = a.type),
            (t.stateNode = a.stateNode),
            (t.alternate = a),
            (a.alternate = t))
          : ((t.pendingProps = e),
            (t.type = a.type),
            (t.flags = 0),
            (t.subtreeFlags = 0),
            (t.deletions = null)),
        (t.flags = a.flags & 65011712),
        (t.childLanes = a.childLanes),
        (t.lanes = a.lanes),
        (t.child = a.child),
        (t.memoizedProps = a.memoizedProps),
        (t.memoizedState = a.memoizedState),
        (t.updateQueue = a.updateQueue),
        (e = a.dependencies),
        (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
        (t.sibling = a.sibling),
        (t.index = a.index),
        (t.ref = a.ref),
        (t.refCleanup = a.refCleanup),
        t
      );
    }
    function p1(a, e) {
      a.flags &= 65011714;
      var t = a.alternate;
      return (
        t === null
          ? ((a.childLanes = 0),
            (a.lanes = e),
            (a.child = null),
            (a.subtreeFlags = 0),
            (a.memoizedProps = null),
            (a.memoizedState = null),
            (a.updateQueue = null),
            (a.dependencies = null),
            (a.stateNode = null))
          : ((a.childLanes = t.childLanes),
            (a.lanes = t.lanes),
            (a.child = t.child),
            (a.subtreeFlags = 0),
            (a.deletions = null),
            (a.memoizedProps = t.memoizedProps),
            (a.memoizedState = t.memoizedState),
            (a.updateQueue = t.updateQueue),
            (a.type = t.type),
            (e = t.dependencies),
            (a.dependencies =
              e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
        a
      );
    }
    function Ld(a, e, t, l, u, o) {
      var i = 0;
      if (((l = a), typeof a == "function")) Ur(a) && (i = 1);
      else if (typeof a == "string")
        i = Sp(a, t, Je.current) ? 26 : a === "html" || a === "head" || a === "body" ? 27 : 5;
      else
        a: switch (a) {
          case wf:
            return ((a = he(31, t, e, u)), (a.elementType = wf), (a.lanes = o), a);
          case Rl:
            return ul(t.children, u, o, e);
          case Bc:
            ((i = 8), (u |= 24));
            break;
          case kf:
            return ((a = he(12, t, e, u | 2)), (a.elementType = kf), (a.lanes = o), a);
          case qf:
            return ((a = he(13, t, e, u)), (a.elementType = qf), (a.lanes = o), a);
          case Mf:
            return ((a = he(19, t, e, u)), (a.elementType = Mf), (a.lanes = o), a);
          default:
            if (typeof a == "object" && a !== null)
              switch (a.$$typeof) {
                case ot:
                  i = 10;
                  break a;
                case Rc:
                  i = 9;
                  break a;
                case br:
                  i = 11;
                  break a;
                case Sr:
                  i = 14;
                  break a;
                case St:
                  ((i = 16), (l = null));
                  break a;
              }
            ((i = 29), (t = Error(k(130, a === null ? "null" : typeof a, ""))), (l = null));
        }
      return ((e = he(i, t, e, u)), (e.elementType = a), (e.type = l), (e.lanes = o), e);
    }
    function ul(a, e, t, l) {
      return ((a = he(7, a, l, e)), (a.lanes = t), a);
    }
    function lf(a, e, t) {
      return ((a = he(6, a, null, e)), (a.lanes = t), a);
    }
    function m1(a) {
      var e = he(18, null, null, 0);
      return ((e.stateNode = a), e);
    }
    function uf(a, e, t) {
      return (
        (e = he(4, a.children !== null ? a.children : [], a.key, e)),
        (e.lanes = t),
        (e.stateNode = {
          containerInfo: a.containerInfo,
          pendingChildren: null,
          implementation: a.implementation,
        }),
        e
      );
    }
    var Is = new WeakMap();
    function Te(a, e) {
      if (typeof a == "object" && a !== null) {
        var t = Is.get(a);
        return t !== void 0 ? t : ((e = { value: a, source: e, stack: os(e) }), Is.set(a, e), e);
      }
      return { value: a, source: e, stack: os(e) };
    }
    var Gl = [],
      Pl = 0,
      Od = null,
      io = 0,
      qe = [],
      Me = 0,
      Gt = null,
      Pe = 1,
      Xe = "";
    function lt(a, e) {
      ((Gl[Pl++] = io), (Gl[Pl++] = Od), (Od = a), (io = e));
    }
    function h1(a, e, t) {
      ((qe[Me++] = Pe), (qe[Me++] = Xe), (qe[Me++] = Gt), (Gt = a));
      var l = Pe;
      a = Xe;
      var u = 32 - xe(l) - 1;
      ((l &= ~(1 << u)), (t += 1));
      var o = 32 - xe(e) + u;
      if (30 < o) {
        var i = u - (u % 5);
        ((o = (l & ((1 << i) - 1)).toString(32)),
          (l >>= i),
          (u -= i),
          (Pe = (1 << (32 - xe(e) + u)) | (t << u) | l),
          (Xe = o + a));
      } else ((Pe = (1 << o) | (t << u) | l), (Xe = a));
    }
    function Or(a) {
      a.return !== null && (lt(a, 1), h1(a, 1, 0));
    }
    function zr(a) {
      for (; a === Od;) ((Od = Gl[--Pl]), (Gl[Pl] = null), (io = Gl[--Pl]), (Gl[Pl] = null));
      for (; a === Gt;)
        ((Gt = qe[--Me]),
          (qe[Me] = null),
          (Xe = qe[--Me]),
          (qe[Me] = null),
          (Pe = qe[--Me]),
          (qe[Me] = null));
    }
    function g1(a, e) {
      ((qe[Me++] = Pe), (qe[Me++] = Xe), (qe[Me++] = Gt), (Pe = e.id), (Xe = e.overflow), (Gt = a));
    }
    var Ka = null,
      wa = null,
      oa = !1,
      Nt = null,
      De = !1,
      Pf = Error(k(519));
    function Pt(a) {
      var e = Error(
        k(
          418,
          1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
          "",
        ),
      );
      throw (fo(Te(e, a)), Pf);
    }
    function As(a) {
      var e = a.stateNode,
        t = a.type,
        l = a.memoizedProps;
      switch (((e[Ya] = a), (e[ne] = l), t)) {
        case "dialog":
          (ta("cancel", e), ta("close", e));
          break;
        case "iframe":
        case "object":
        case "embed":
          ta("load", e);
          break;
        case "video":
        case "audio":
          for (t = 0; t < co.length; t++) ta(co[t], e);
          break;
        case "source":
          ta("error", e);
          break;
        case "img":
        case "image":
        case "link":
          (ta("error", e), ta("load", e));
          break;
        case "details":
          ta("toggle", e);
          break;
        case "input":
          (ta("invalid", e),
            Jc(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
          break;
        case "select":
          ta("invalid", e);
          break;
        case "textarea":
          (ta("invalid", e), Wc(e, l.value, l.defaultValue, l.children));
      }
      ((t = l.children),
        (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
        e.textContent === "" + t ||
        l.suppressHydrationWarning === !0 ||
        _2(e.textContent, t)
          ? (l.popover != null && (ta("beforetoggle", e), ta("toggle", e)),
            l.onScroll != null && ta("scroll", e),
            l.onScrollEnd != null && ta("scrollend", e),
            l.onClick != null && (e.onclick = dt),
            (e = !0))
          : (e = !1),
        e || Pt(a, !0));
    }
    function ks(a) {
      for (Ka = a.return; Ka;)
        switch (Ka.tag) {
          case 5:
          case 31:
          case 13:
            De = !1;
            return;
          case 27:
          case 3:
            De = !0;
            return;
          default:
            Ka = Ka.return;
        }
    }
    function wl(a) {
      if (a !== Ka) return !1;
      if (!oa) return (ks(a), (oa = !0), !1);
      var e = a.tag,
        t;
      if (
        ((t = e !== 3 && e !== 27) &&
          ((t = e === 5) &&
            ((t = a.type), (t = !(t !== "form" && t !== "button") || mr(a.type, a.memoizedProps))),
          (t = !t)),
        t && wa && Pt(a),
        ks(a),
        e === 13)
      ) {
        if (((a = a.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
          throw Error(k(317));
        wa = mc(a);
      } else if (e === 31) {
        if (((a = a.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
          throw Error(k(317));
        wa = mc(a);
      } else
        e === 27
          ? ((e = wa), Zt(a.type) ? ((a = Lr), (Lr = null), (wa = a)) : (wa = e))
          : (wa = Ka ? Re(a.stateNode.nextSibling) : null);
      return !0;
    }
    function fl() {
      ((wa = Ka = null), (oa = !1));
    }
    function of() {
      var a = Nt;
      return (a !== null && (fe === null ? (fe = a) : fe.push.apply(fe, a), (Nt = null)), a);
    }
    function fo(a) {
      Nt === null ? (Nt = [a]) : Nt.push(a);
    }
    var Xf = Ze(null),
      vl = null,
      it = null;
    function It(a, e, t) {
      (Aa(Xf, e._currentValue), (e._currentValue = t));
    }
    function rt(a) {
      ((a._currentValue = Xf.current), Ja(Xf));
    }
    function Qf(a, e, t) {
      for (; a !== null;) {
        var l = a.alternate;
        if (
          ((a.childLanes & e) !== e
            ? ((a.childLanes |= e), l !== null && (l.childLanes |= e))
            : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
          a === t)
        )
          break;
        a = a.return;
      }
    }
    function Jf(a, e, t, l) {
      var u = a.child;
      for (u !== null && (u.return = a); u !== null;) {
        var o = u.dependencies;
        if (o !== null) {
          var i = u.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var f = o;
            o = u;
            for (var r = 0; r < e.length; r++)
              if (f.context === e[r]) {
                ((o.lanes |= t),
                  (f = o.alternate),
                  f !== null && (f.lanes |= t),
                  Qf(o.return, t, a),
                  l || (i = null));
                break a;
              }
            o = f.next;
          }
        } else if (u.tag === 18) {
          if (((i = u.return), i === null)) throw Error(k(341));
          ((i.lanes |= t),
            (o = i.alternate),
            o !== null && (o.lanes |= t),
            Qf(i, t, a),
            (i = null));
        } else i = u.child;
        if (i !== null) i.return = u;
        else
          for (i = u; i !== null;) {
            if (i === a) {
              i = null;
              break;
            }
            if (((u = i.sibling), u !== null)) {
              ((u.return = i.return), (i = u));
              break;
            }
            i = i.return;
          }
        u = i;
      }
    }
    function su(a, e, t, l) {
      a = null;
      for (var u = e, o = !1; u !== null;) {
        if (!o) {
          if ((u.flags & 524288) !== 0) o = !0;
          else if ((u.flags & 262144) !== 0) break;
        }
        if (u.tag === 10) {
          var i = u.alternate;
          if (i === null) throw Error(k(387));
          if (((i = i.memoizedProps), i !== null)) {
            var f = u.type;
            be(u.pendingProps.value, i.value) || (a !== null ? a.push(f) : (a = [f]));
          }
        } else if (u === wd.current) {
          if (((i = u.alternate), i === null)) throw Error(k(387));
          i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
            (a !== null ? a.push(mo) : (a = [mo]));
        }
        u = u.return;
      }
      (a !== null && Jf(e, a, t, l), (e.flags |= 262144));
    }
    function zd(a) {
      for (a = a.firstContext; a !== null;) {
        if (!be(a.context._currentValue, a.memoizedValue)) return !0;
        a = a.next;
      }
      return !1;
    }
    function rl(a) {
      ((vl = a), (it = null), (a = a.dependencies), a !== null && (a.firstContext = null));
    }
    function ja(a) {
      return v1(vl, a);
    }
    function ud(a, e) {
      return (vl === null && rl(a), v1(a, e));
    }
    function v1(a, e) {
      var t = e._currentValue;
      if (((e = { context: e, memoizedValue: t, next: null }), it === null)) {
        if (a === null) throw Error(k(308));
        ((it = e), (a.dependencies = { lanes: 0, firstContext: e }), (a.flags |= 524288));
      } else it = it.next = e;
      return t;
    }
    var y4 =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var a = [],
                e = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, l) {
                    a.push(l);
                  },
                });
              this.abort = function () {
                ((e.aborted = !0),
                  a.forEach(function (t) {
                    return t();
                  }));
              };
            },
      b4 = Pa.unstable_scheduleCallback,
      S4 = Pa.unstable_NormalPriority,
      Ha = {
        $$typeof: ot,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Er() {
      return { controller: new y4(), data: new Map(), refCount: 0 };
    }
    function Co(a) {
      (a.refCount--,
        a.refCount === 0 &&
          b4(S4, function () {
            a.controller.abort();
          }));
    }
    var Ju = null,
      Zf = 0,
      eu = 0,
      Wl = null;
    function C4(a, e) {
      if (Ju === null) {
        var t = (Ju = []);
        ((Zf = 0),
          (eu = nn()),
          (Wl = {
            status: "pending",
            value: void 0,
            then: function (l) {
              t.push(l);
            },
          }));
      }
      return (Zf++, e.then(qs, qs), e);
    }
    function qs() {
      if (--Zf === 0 && Ju !== null) {
        Wl !== null && (Wl.status = "fulfilled");
        var a = Ju;
        ((Ju = null), (eu = 0), (Wl = null));
        for (var e = 0; e < a.length; e++) (0, a[e])();
      }
    }
    function I4(a, e) {
      var t = [],
        l = {
          status: "pending",
          value: null,
          reason: null,
          then: function (u) {
            t.push(u);
          },
        };
      return (
        a.then(
          function () {
            ((l.status = "fulfilled"), (l.value = e));
            for (var u = 0; u < t.length; u++) (0, t[u])(e);
          },
          function (u) {
            for (l.status = "rejected", l.reason = u, u = 0; u < t.length; u++) (0, t[u])(void 0);
          },
        ),
        l
      );
    }
    var Ms = J.S;
    J.S = function (a, e) {
      ((D2 = ve()),
        typeof e == "object" && e !== null && typeof e.then == "function" && C4(a, e),
        Ms !== null && Ms(a, e));
    };
    var ol = Ze(null);
    function Fr() {
      var a = ol.current;
      return a !== null ? a : Ca.pooledCache;
    }
    function xd(a, e) {
      e === null ? Aa(ol, ol.current) : Aa(ol, e.pool);
    }
    function L1() {
      var a = Fr();
      return a === null ? null : { parent: Ha._currentValue, pool: a };
    }
    var cu = Error(k(460)),
      Hr = Error(k(474)),
      ni = Error(k(542)),
      Ed = { then: function () {} };
    function ws(a) {
      return ((a = a.status), a === "fulfilled" || a === "rejected");
    }
    function x1(a, e, t) {
      switch (
        ((t = a[t]), t === void 0 ? a.push(e) : t !== e && (e.then(dt, dt), (e = t)), e.status)
      ) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw ((a = e.reason), Ds(a), a);
        default:
          if (typeof e.status == "string") e.then(dt, dt);
          else {
            if (((a = Ca), a !== null && 100 < a.shellSuspendCounter)) throw Error(k(482));
            ((a = e),
              (a.status = "pending"),
              a.then(
                function (l) {
                  if (e.status === "pending") {
                    var u = e;
                    ((u.status = "fulfilled"), (u.value = l));
                  }
                },
                function (l) {
                  if (e.status === "pending") {
                    var u = e;
                    ((u.status = "rejected"), (u.reason = l));
                  }
                },
              ));
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw ((a = e.reason), Ds(a), a);
          }
          throw ((dl = e), cu);
      }
    }
    function el(a) {
      try {
        var e = a._init;
        return e(a._payload);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function"
          ? ((dl = t), cu)
          : t;
      }
    }
    var dl = null;
    function Ts() {
      if (dl === null) throw Error(k(459));
      var a = dl;
      return ((dl = null), a);
    }
    function Ds(a) {
      if (a === cu || a === ni) throw Error(k(483));
    }
    var Yl = null,
      ro = 0;
    function od(a) {
      var e = ro;
      return ((ro += 1), Yl === null && (Yl = []), x1(Yl, a, e));
    }
    function Ru(a, e) {
      ((e = e.props.ref), (a.ref = e !== void 0 ? e : null));
    }
    function dd(a, e) {
      throw e.$$typeof === n3
        ? Error(k(525))
        : ((a = Object.prototype.toString.call(e)),
          Error(
            k(
              31,
              a === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : a,
            ),
          ));
    }
    function y1(a) {
      function e(s, m) {
        if (a) {
          var L = s.deletions;
          L === null ? ((s.deletions = [m]), (s.flags |= 16)) : L.push(m);
        }
      }
      function t(s, m) {
        if (!a) return null;
        for (; m !== null;) (e(s, m), (m = m.sibling));
        return null;
      }
      function l(s) {
        for (var m = new Map(); s !== null;)
          (s.key !== null ? m.set(s.key, s) : m.set(s.index, s), (s = s.sibling));
        return m;
      }
      function u(s, m) {
        return ((s = ft(s, m)), (s.index = 0), (s.sibling = null), s);
      }
      function o(s, m, L) {
        return (
          (s.index = L),
          a
            ? ((L = s.alternate),
              L !== null
                ? ((L = L.index), L < m ? ((s.flags |= 67108866), m) : L)
                : ((s.flags |= 67108866), m))
            : ((s.flags |= 1048576), m)
        );
      }
      function i(s) {
        return (a && s.alternate === null && (s.flags |= 67108866), s);
      }
      function f(s, m, L, b) {
        return m === null || m.tag !== 6
          ? ((m = lf(L, s.mode, b)), (m.return = s), m)
          : ((m = u(m, L)), (m.return = s), m);
      }
      function r(s, m, L, b) {
        var T = L.type;
        return T === Rl
          ? g(s, m, L.props.children, b, L.key)
          : m !== null &&
              (m.elementType === T ||
                (typeof T == "object" && T !== null && T.$$typeof === St && el(T) === m.type))
            ? ((m = u(m, L.props)), Ru(m, L), (m.return = s), m)
            : ((m = Ld(L.type, L.key, L.props, null, s.mode, b)), Ru(m, L), (m.return = s), m);
      }
      function c(s, m, L, b) {
        return m === null ||
          m.tag !== 4 ||
          m.stateNode.containerInfo !== L.containerInfo ||
          m.stateNode.implementation !== L.implementation
          ? ((m = uf(L, s.mode, b)), (m.return = s), m)
          : ((m = u(m, L.children || [])), (m.return = s), m);
      }
      function g(s, m, L, b, T) {
        return m === null || m.tag !== 7
          ? ((m = ul(L, s.mode, b, T)), (m.return = s), m)
          : ((m = u(m, L)), (m.return = s), m);
      }
      function v(s, m, L) {
        if ((typeof m == "string" && m !== "") || typeof m == "number" || typeof m == "bigint")
          return ((m = lf("" + m, s.mode, L)), (m.return = s), m);
        if (typeof m == "object" && m !== null) {
          switch (m.$$typeof) {
            case Ko:
              return (
                (L = Ld(m.type, m.key, m.props, null, s.mode, L)),
                Ru(L, m),
                (L.return = s),
                L
              );
            case Eu:
              return ((m = uf(m, s.mode, L)), (m.return = s), m);
            case St:
              return ((m = el(m)), v(s, m, L));
          }
          if (Fu(m) || Du(m)) return ((m = ul(m, s.mode, L, null)), (m.return = s), m);
          if (typeof m.then == "function") return v(s, od(m), L);
          if (m.$$typeof === ot) return v(s, ud(s, m), L);
          dd(s, m);
        }
        return null;
      }
      function h(s, m, L, b) {
        var T = m !== null ? m.key : null;
        if ((typeof L == "string" && L !== "") || typeof L == "number" || typeof L == "bigint")
          return T !== null ? null : f(s, m, "" + L, b);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Ko:
              return L.key === T ? r(s, m, L, b) : null;
            case Eu:
              return L.key === T ? c(s, m, L, b) : null;
            case St:
              return ((L = el(L)), h(s, m, L, b));
          }
          if (Fu(L) || Du(L)) return T !== null ? null : g(s, m, L, b, null);
          if (typeof L.then == "function") return h(s, m, od(L), b);
          if (L.$$typeof === ot) return h(s, m, ud(s, L), b);
          dd(s, L);
        }
        return null;
      }
      function x(s, m, L, b, T) {
        if ((typeof b == "string" && b !== "") || typeof b == "number" || typeof b == "bigint")
          return ((s = s.get(L) || null), f(m, s, "" + b, T));
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case Ko:
              return ((s = s.get(b.key === null ? L : b.key) || null), r(m, s, b, T));
            case Eu:
              return ((s = s.get(b.key === null ? L : b.key) || null), c(m, s, b, T));
            case St:
              return ((b = el(b)), x(s, m, L, b, T));
          }
          if (Fu(b) || Du(b)) return ((s = s.get(L) || null), g(m, s, b, T, null));
          if (typeof b.then == "function") return x(s, m, L, od(b), T);
          if (b.$$typeof === ot) return x(s, m, L, ud(m, b), T);
          dd(m, b);
        }
        return null;
      }
      function I(s, m, L, b) {
        for (
          var T = null, N = null, n = m, p = (m = 0), C = null;
          n !== null && p < L.length;
          p++
        ) {
          n.index > p ? ((C = n), (n = null)) : (C = n.sibling);
          var S = h(s, n, L[p], b);
          if (S === null) {
            n === null && (n = C);
            break;
          }
          (a && n && S.alternate === null && e(s, n),
            (m = o(S, m, p)),
            N === null ? (T = S) : (N.sibling = S),
            (N = S),
            (n = C));
        }
        if (p === L.length) return (t(s, n), oa && lt(s, p), T);
        if (n === null) {
          for (; p < L.length; p++)
            ((n = v(s, L[p], b)),
              n !== null && ((m = o(n, m, p)), N === null ? (T = n) : (N.sibling = n), (N = n)));
          return (oa && lt(s, p), T);
        }
        for (n = l(n); p < L.length; p++)
          ((C = x(n, s, p, L[p], b)),
            C !== null &&
              (a && C.alternate !== null && n.delete(C.key === null ? p : C.key),
              (m = o(C, m, p)),
              N === null ? (T = C) : (N.sibling = C),
              (N = C)));
        return (
          a &&
            n.forEach(function (A) {
              return e(s, A);
            }),
          oa && lt(s, p),
          T
        );
      }
      function q(s, m, L, b) {
        if (L == null) throw Error(k(151));
        for (
          var T = null, N = null, n = m, p = (m = 0), C = null, S = L.next();
          n !== null && !S.done;
          p++, S = L.next()
        ) {
          n.index > p ? ((C = n), (n = null)) : (C = n.sibling);
          var A = h(s, n, S.value, b);
          if (A === null) {
            n === null && (n = C);
            break;
          }
          (a && n && A.alternate === null && e(s, n),
            (m = o(A, m, p)),
            N === null ? (T = A) : (N.sibling = A),
            (N = A),
            (n = C));
        }
        if (S.done) return (t(s, n), oa && lt(s, p), T);
        if (n === null) {
          for (; !S.done; p++, S = L.next())
            ((S = v(s, S.value, b)),
              S !== null && ((m = o(S, m, p)), N === null ? (T = S) : (N.sibling = S), (N = S)));
          return (oa && lt(s, p), T);
        }
        for (n = l(n); !S.done; p++, S = L.next())
          ((S = x(n, s, p, S.value, b)),
            S !== null &&
              (a && S.alternate !== null && n.delete(S.key === null ? p : S.key),
              (m = o(S, m, p)),
              N === null ? (T = S) : (N.sibling = S),
              (N = S)));
        return (
          a &&
            n.forEach(function (B) {
              return e(s, B);
            }),
          oa && lt(s, p),
          T
        );
      }
      function M(s, m, L, b) {
        if (
          (typeof L == "object" &&
            L !== null &&
            L.type === Rl &&
            L.key === null &&
            (L = L.props.children),
          typeof L == "object" && L !== null)
        ) {
          switch (L.$$typeof) {
            case Ko:
              a: {
                for (var T = L.key; m !== null;) {
                  if (m.key === T) {
                    if (((T = L.type), T === Rl)) {
                      if (m.tag === 7) {
                        (t(s, m.sibling), (b = u(m, L.props.children)), (b.return = s), (s = b));
                        break a;
                      }
                    } else if (
                      m.elementType === T ||
                      (typeof T == "object" && T !== null && T.$$typeof === St && el(T) === m.type)
                    ) {
                      (t(s, m.sibling), (b = u(m, L.props)), Ru(b, L), (b.return = s), (s = b));
                      break a;
                    }
                    t(s, m);
                    break;
                  } else e(s, m);
                  m = m.sibling;
                }
                L.type === Rl
                  ? ((b = ul(L.props.children, s.mode, b, L.key)), (b.return = s), (s = b))
                  : ((b = Ld(L.type, L.key, L.props, null, s.mode, b)),
                    Ru(b, L),
                    (b.return = s),
                    (s = b));
              }
              return i(s);
            case Eu:
              a: {
                for (T = L.key; m !== null;) {
                  if (m.key === T)
                    if (
                      m.tag === 4 &&
                      m.stateNode.containerInfo === L.containerInfo &&
                      m.stateNode.implementation === L.implementation
                    ) {
                      (t(s, m.sibling), (b = u(m, L.children || [])), (b.return = s), (s = b));
                      break a;
                    } else {
                      t(s, m);
                      break;
                    }
                  else e(s, m);
                  m = m.sibling;
                }
                ((b = uf(L, s.mode, b)), (b.return = s), (s = b));
              }
              return i(s);
            case St:
              return ((L = el(L)), M(s, m, L, b));
          }
          if (Fu(L)) return I(s, m, L, b);
          if (Du(L)) {
            if (((T = Du(L)), typeof T != "function")) throw Error(k(150));
            return ((L = T.call(L)), q(s, m, L, b));
          }
          if (typeof L.then == "function") return M(s, m, od(L), b);
          if (L.$$typeof === ot) return M(s, m, ud(s, L), b);
          dd(s, L);
        }
        return (typeof L == "string" && L !== "") || typeof L == "number" || typeof L == "bigint"
          ? ((L = "" + L),
            m !== null && m.tag === 6
              ? (t(s, m.sibling), (b = u(m, L)), (b.return = s), (s = b))
              : (t(s, m), (b = lf(L, s.mode, b)), (b.return = s), (s = b)),
            i(s))
          : t(s, m);
      }
      return function (s, m, L, b) {
        try {
          ro = 0;
          var T = M(s, m, L, b);
          return ((Yl = null), T);
        } catch (n) {
          if (n === cu || n === ni) throw n;
          var N = he(29, n, null, s.mode);
          return ((N.lanes = b), (N.return = s), N);
        }
      };
    }
    var nl = y1(!0),
      b1 = y1(!1),
      Ct = !1;
    function Vr(a) {
      a.updateQueue = {
        baseState: a.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Wf(a, e) {
      ((a = a.updateQueue),
        e.updateQueue === a &&
          (e.updateQueue = {
            baseState: a.baseState,
            firstBaseUpdate: a.firstBaseUpdate,
            lastBaseUpdate: a.lastBaseUpdate,
            shared: a.shared,
            callbacks: null,
          }));
    }
    function Ut(a) {
      return { lane: a, tag: 0, payload: null, callback: null, next: null };
    }
    function Ot(a, e, t) {
      var l = a.updateQueue;
      if (l === null) return null;
      if (((l = l.shared), (ca & 2) !== 0)) {
        var u = l.pending;
        return (
          u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
          (l.pending = e),
          (e = Ud(a)),
          c1(a, null, t),
          e
        );
      }
      return (ri(a, l, e, t), Ud(a));
    }
    function Zu(a, e, t) {
      if (((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194048) !== 0))) {
        var l = e.lanes;
        ((l &= a.pendingLanes), (t |= l), (e.lanes = t), Fc(a, t));
      }
    }
    function df(a, e) {
      var t = a.updateQueue,
        l = a.alternate;
      if (l !== null && ((l = l.updateQueue), t === l)) {
        var u = null,
          o = null;
        if (((t = t.firstBaseUpdate), t !== null)) {
          do {
            var i = { lane: t.lane, tag: t.tag, payload: t.payload, callback: null, next: null };
            (o === null ? (u = o = i) : (o = o.next = i), (t = t.next));
          } while (t !== null);
          o === null ? (u = o = e) : (o = o.next = e);
        } else u = o = e;
        ((t = {
          baseState: l.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: o,
          shared: l.shared,
          callbacks: l.callbacks,
        }),
          (a.updateQueue = t));
        return;
      }
      ((a = t.lastBaseUpdate),
        a === null ? (t.firstBaseUpdate = e) : (a.next = e),
        (t.lastBaseUpdate = e));
    }
    var Yf = !1;
    function Wu() {
      if (Yf) {
        var a = Wl;
        if (a !== null) throw a;
      }
    }
    function Yu(a, e, t, l) {
      Yf = !1;
      var u = a.updateQueue;
      Ct = !1;
      var o = u.firstBaseUpdate,
        i = u.lastBaseUpdate,
        f = u.shared.pending;
      if (f !== null) {
        u.shared.pending = null;
        var r = f,
          c = r.next;
        ((r.next = null), i === null ? (o = c) : (i.next = c), (i = r));
        var g = a.alternate;
        g !== null &&
          ((g = g.updateQueue),
          (f = g.lastBaseUpdate),
          f !== i && (f === null ? (g.firstBaseUpdate = c) : (f.next = c), (g.lastBaseUpdate = r)));
      }
      if (o !== null) {
        var v = u.baseState;
        ((i = 0), (g = c = r = null), (f = o));
        do {
          var h = f.lane & -536870913,
            x = h !== f.lane;
          if (x ? (ua & h) === h : (l & h) === h) {
            (h !== 0 && h === eu && (Yf = !0),
              g !== null &&
                (g = g.next =
                  { lane: 0, tag: f.tag, payload: f.payload, callback: null, next: null }));
            a: {
              var I = a,
                q = f;
              h = e;
              var M = t;
              switch (q.tag) {
                case 1:
                  if (((I = q.payload), typeof I == "function")) {
                    v = I.call(M, v, h);
                    break a;
                  }
                  v = I;
                  break a;
                case 3:
                  I.flags = (I.flags & -65537) | 128;
                case 0:
                  if (
                    ((I = q.payload), (h = typeof I == "function" ? I.call(M, v, h) : I), h == null)
                  )
                    break a;
                  v = Ta({}, v, h);
                  break a;
                case 2:
                  Ct = !0;
              }
            }
            ((h = f.callback),
              h !== null &&
                ((a.flags |= 64),
                x && (a.flags |= 8192),
                (x = u.callbacks),
                x === null ? (u.callbacks = [h]) : x.push(h)));
          } else
            ((x = { lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null }),
              g === null ? ((c = g = x), (r = v)) : (g = g.next = x),
              (i |= h));
          if (((f = f.next), f === null)) {
            if (((f = u.shared.pending), f === null)) break;
            ((x = f),
              (f = x.next),
              (x.next = null),
              (u.lastBaseUpdate = x),
              (u.shared.pending = null));
          }
        } while (!0);
        (g === null && (r = v),
          (u.baseState = r),
          (u.firstBaseUpdate = c),
          (u.lastBaseUpdate = g),
          o === null && (u.shared.lanes = 0),
          (Qt |= i),
          (a.lanes = i),
          (a.memoizedState = v));
      }
    }
    function S1(a, e) {
      if (typeof a != "function") throw Error(k(191, a));
      a.call(e);
    }
    function C1(a, e) {
      var t = a.callbacks;
      if (t !== null) for (a.callbacks = null, a = 0; a < t.length; a++) S1(t[a], e);
    }
    var tu = Ze(null),
      Fd = Ze(0);
    function Bs(a, e) {
      ((a = ht), Aa(Fd, a), Aa(tu, e), (ht = a | e.baseLanes));
    }
    function Kf() {
      (Aa(Fd, ht), Aa(tu, tu.current));
    }
    function Gr() {
      ((ht = Fd.current), Ja(tu), Ja(Fd));
    }
    var Se = Ze(null),
      Be = null;
    function At(a) {
      var e = a.alternate;
      (Aa(Oa, Oa.current & 1),
        Aa(Se, a),
        Be === null && (e === null || tu.current !== null || e.memoizedState !== null) && (Be = a));
    }
    function jf(a) {
      (Aa(Oa, Oa.current), Aa(Se, a), Be === null && (Be = a));
    }
    function I1(a) {
      a.tag === 22 ? (Aa(Oa, Oa.current), Aa(Se, a), Be === null && (Be = a)) : kt(a);
    }
    function kt() {
      (Aa(Oa, Oa.current), Aa(Se, Se.current));
    }
    function me(a) {
      (Ja(Se), Be === a && (Be = null), Ja(Oa));
    }
    var Oa = Ze(0);
    function Hd(a) {
      for (var e = a; e !== null;) {
        if (e.tag === 13) {
          var t = e.memoizedState;
          if (t !== null && ((t = t.dehydrated), t === null || gr(t) || vr(t))) return e;
        } else if (
          e.tag === 19 &&
          (e.memoizedProps.revealOrder === "forwards" ||
            e.memoizedProps.revealOrder === "backwards" ||
            e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
            e.memoizedProps.revealOrder === "together")
        ) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === a) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === a) return null;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
      return null;
    }
    var ct = 0,
      $ = null,
      Sa = null,
      Ea = null,
      Vd = !1,
      Kl = !1,
      sl = !1,
      Gd = 0,
      no = 0,
      jl = null,
      A4 = 0;
    function Na() {
      throw Error(k(321));
    }
    function Pr(a, e) {
      if (e === null) return !1;
      for (var t = 0; t < e.length && t < a.length; t++) if (!be(a[t], e[t])) return !1;
      return !0;
    }
    function Xr(a, e, t, l, u, o) {
      return (
        (ct = o),
        ($ = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (J.H = a === null || a.memoizedState === null ? e2 : en),
        (sl = !1),
        (o = t(l, u)),
        (sl = !1),
        Kl && (o = k1(e, t, l, u)),
        A1(a),
        o
      );
    }
    function A1(a) {
      J.H = so;
      var e = Sa !== null && Sa.next !== null;
      if (((ct = 0), (Ea = Sa = $ = null), (Vd = !1), (no = 0), (jl = null), e))
        throw Error(k(300));
      a === null || Va || ((a = a.dependencies), a !== null && zd(a) && (Va = !0));
    }
    function k1(a, e, t, l) {
      $ = a;
      var u = 0;
      do {
        if ((Kl && (jl = null), (no = 0), (Kl = !1), 25 <= u)) throw Error(k(301));
        if (((u += 1), (Ea = Sa = null), a.updateQueue != null)) {
          var o = a.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((J.H = t2), (o = e(t, l)));
      } while (Kl);
      return o;
    }
    function k4() {
      var a = J.H,
        e = a.useState()[0];
      return (
        (e = typeof e.then == "function" ? Io(e) : e),
        (a = a.useState()[0]),
        (Sa !== null ? Sa.memoizedState : null) !== a && ($.flags |= 1024),
        e
      );
    }
    function Qr() {
      var a = Gd !== 0;
      return ((Gd = 0), a);
    }
    function Jr(a, e, t) {
      ((e.updateQueue = a.updateQueue), (e.flags &= -2053), (a.lanes &= ~t));
    }
    function Zr(a) {
      if (Vd) {
        for (a = a.memoizedState; a !== null;) {
          var e = a.queue;
          (e !== null && (e.pending = null), (a = a.next));
        }
        Vd = !1;
      }
      ((ct = 0), (Ea = Sa = $ = null), (Kl = !1), (no = Gd = 0), (jl = null));
    }
    function le() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (Ea === null ? ($.memoizedState = Ea = a) : (Ea = Ea.next = a), Ea);
    }
    function za() {
      if (Sa === null) {
        var a = $.alternate;
        a = a !== null ? a.memoizedState : null;
      } else a = Sa.next;
      var e = Ea === null ? $.memoizedState : Ea.next;
      if (e !== null) ((Ea = e), (Sa = a));
      else {
        if (a === null) throw $.alternate === null ? Error(k(467)) : Error(k(310));
        ((Sa = a),
          (a = {
            memoizedState: Sa.memoizedState,
            baseState: Sa.baseState,
            baseQueue: Sa.baseQueue,
            queue: Sa.queue,
            next: null,
          }),
          Ea === null ? ($.memoizedState = Ea = a) : (Ea = Ea.next = a));
      }
      return Ea;
    }
    function si() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Io(a) {
      var e = no;
      return (
        (no += 1),
        jl === null && (jl = []),
        (a = x1(jl, a, e)),
        (e = $),
        (Ea === null ? e.memoizedState : Ea.next) === null &&
          ((e = e.alternate), (J.H = e === null || e.memoizedState === null ? e2 : en)),
        a
      );
    }
    function ci(a) {
      if (a !== null && typeof a == "object") {
        if (typeof a.then == "function") return Io(a);
        if (a.$$typeof === ot) return ja(a);
      }
      throw Error(k(438, String(a)));
    }
    function Wr(a) {
      var e = null,
        t = $.updateQueue;
      if ((t !== null && (e = t.memoCache), e == null)) {
        var l = $.alternate;
        l !== null &&
          ((l = l.updateQueue),
          l !== null &&
            ((l = l.memoCache),
            l != null &&
              (e = {
                data: l.data.map(function (u) {
                  return u.slice();
                }),
                index: 0,
              })));
      }
      if (
        (e == null && (e = { data: [], index: 0 }),
        t === null && ((t = si()), ($.updateQueue = t)),
        (t.memoCache = e),
        (t = e.data[e.index]),
        t === void 0)
      )
        for (t = e.data[e.index] = Array(a), l = 0; l < a; l++) t[l] = s3;
      return (e.index++, t);
    }
    function pt(a, e) {
      return typeof e == "function" ? e(a) : e;
    }
    function yd(a) {
      var e = za();
      return Yr(e, Sa, a);
    }
    function Yr(a, e, t) {
      var l = a.queue;
      if (l === null) throw Error(k(311));
      l.lastRenderedReducer = t;
      var u = a.baseQueue,
        o = l.pending;
      if (o !== null) {
        if (u !== null) {
          var i = u.next;
          ((u.next = o.next), (o.next = i));
        }
        ((e.baseQueue = u = o), (l.pending = null));
      }
      if (((o = a.baseState), u === null)) a.memoizedState = o;
      else {
        e = u.next;
        var f = (i = null),
          r = null,
          c = e,
          g = !1;
        do {
          var v = c.lane & -536870913;
          if (v !== c.lane ? (ua & v) === v : (ct & v) === v) {
            var h = c.revertLane;
            if (h === 0)
              (r !== null &&
                (r = r.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                v === eu && (g = !0));
            else if ((ct & h) === h) {
              ((c = c.next), h === eu && (g = !0));
              continue;
            } else
              ((v = {
                lane: 0,
                revertLane: c.revertLane,
                gesture: null,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
                r === null ? ((f = r = v), (i = o)) : (r = r.next = v),
                ($.lanes |= h),
                (Qt |= h));
            ((v = c.action), sl && t(o, v), (o = c.hasEagerState ? c.eagerState : t(o, v)));
          } else
            ((h = {
              lane: v,
              revertLane: c.revertLane,
              gesture: c.gesture,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
              r === null ? ((f = r = h), (i = o)) : (r = r.next = h),
              ($.lanes |= v),
              (Qt |= v));
          c = c.next;
        } while (c !== null && c !== e);
        if (
          (r === null ? (i = o) : (r.next = f),
          !be(o, a.memoizedState) && ((Va = !0), g && ((t = Wl), t !== null)))
        )
          throw t;
        ((a.memoizedState = o), (a.baseState = i), (a.baseQueue = r), (l.lastRenderedState = o));
      }
      return (u === null && (l.lanes = 0), [a.memoizedState, l.dispatch]);
    }
    function ff(a) {
      var e = za(),
        t = e.queue;
      if (t === null) throw Error(k(311));
      t.lastRenderedReducer = a;
      var l = t.dispatch,
        u = t.pending,
        o = e.memoizedState;
      if (u !== null) {
        t.pending = null;
        var i = (u = u.next);
        do ((o = a(o, i.action)), (i = i.next));
        while (i !== u);
        (be(o, e.memoizedState) || (Va = !0),
          (e.memoizedState = o),
          e.baseQueue === null && (e.baseState = o),
          (t.lastRenderedState = o));
      }
      return [o, l];
    }
    function q1(a, e, t) {
      var l = $,
        u = za(),
        o = oa;
      if (o) {
        if (t === void 0) throw Error(k(407));
        t = t();
      } else t = e();
      var i = !be((Sa || u).memoizedState, t);
      if (
        (i && ((u.memoizedState = t), (Va = !0)),
        (u = u.queue),
        Kr(T1.bind(null, l, u, a), [a]),
        u.getSnapshot !== e || i || (Ea !== null && Ea.memoizedState.tag & 1))
      ) {
        if (
          ((l.flags |= 2048),
          lu(9, { destroy: void 0 }, w1.bind(null, l, u, t, e), null),
          Ca === null)
        )
          throw Error(k(349));
        o || (ct & 127) !== 0 || M1(l, e, t);
      }
      return t;
    }
    function M1(a, e, t) {
      ((a.flags |= 16384),
        (a = { getSnapshot: e, value: t }),
        (e = $.updateQueue),
        e === null
          ? ((e = si()), ($.updateQueue = e), (e.stores = [a]))
          : ((t = e.stores), t === null ? (e.stores = [a]) : t.push(a)));
    }
    function w1(a, e, t, l) {
      ((e.value = t), (e.getSnapshot = l), D1(e) && B1(a));
    }
    function T1(a, e, t) {
      return t(function () {
        D1(e) && B1(a);
      });
    }
    function D1(a) {
      var e = a.getSnapshot;
      a = a.value;
      try {
        var t = e();
        return !be(a, t);
      } catch {
        return !0;
      }
    }
    function B1(a) {
      var e = gl(a, 2);
      e !== null && re(e, a, 2);
    }
    function _f(a) {
      var e = le();
      if (typeof a == "function") {
        var t = a;
        if (((a = t()), sl)) {
          Mt(!0);
          try {
            t();
          } finally {
            Mt(!1);
          }
        }
      }
      return (
        (e.memoizedState = e.baseState = a),
        (e.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: pt,
          lastRenderedState: a,
        }),
        e
      );
    }
    function R1(a, e, t, l) {
      return ((a.baseState = t), Yr(a, Sa, typeof l == "function" ? l : pt));
    }
    function q4(a, e, t, l, u) {
      if (mi(a)) throw Error(k(485));
      if (((a = e.action), a !== null)) {
        var o = {
          payload: u,
          action: a,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (i) {
            o.listeners.push(i);
          },
        };
        (J.T !== null ? t(!0) : (o.isTransition = !1),
          l(o),
          (t = e.pending),
          t === null
            ? ((o.next = e.pending = o), N1(e, o))
            : ((o.next = t.next), (e.pending = t.next = o)));
      }
    }
    function N1(a, e) {
      var t = e.action,
        l = e.payload,
        u = a.state;
      if (e.isTransition) {
        var o = J.T,
          i = {};
        J.T = i;
        try {
          var f = t(u, l),
            r = J.S;
          (r !== null && r(i, f), Rs(a, e, f));
        } catch (c) {
          $f(a, e, c);
        } finally {
          (o !== null && i.types !== null && (o.types = i.types), (J.T = o));
        }
      } else
        try {
          ((o = t(u, l)), Rs(a, e, o));
        } catch (c) {
          $f(a, e, c);
        }
    }
    function Rs(a, e, t) {
      t !== null && typeof t == "object" && typeof t.then == "function"
        ? t.then(
            function (l) {
              Ns(a, e, l);
            },
            function (l) {
              return $f(a, e, l);
            },
          )
        : Ns(a, e, t);
    }
    function Ns(a, e, t) {
      ((e.status = "fulfilled"),
        (e.value = t),
        U1(e),
        (a.state = t),
        (e = a.pending),
        e !== null &&
          ((t = e.next), t === e ? (a.pending = null) : ((t = t.next), (e.next = t), N1(a, t))));
    }
    function $f(a, e, t) {
      var l = a.pending;
      if (((a.pending = null), l !== null)) {
        l = l.next;
        do ((e.status = "rejected"), (e.reason = t), U1(e), (e = e.next));
        while (e !== l);
      }
      a.action = null;
    }
    function U1(a) {
      a = a.listeners;
      for (var e = 0; e < a.length; e++) (0, a[e])();
    }
    function O1(a, e) {
      return e;
    }
    function Us(a, e) {
      if (oa) {
        var t = Ca.formState;
        if (t !== null) {
          a: {
            var l = $;
            if (oa) {
              if (wa) {
                e: {
                  for (var u = wa, o = De; u.nodeType !== 8;) {
                    if (!o) {
                      u = null;
                      break e;
                    }
                    if (((u = Re(u.nextSibling)), u === null)) {
                      u = null;
                      break e;
                    }
                  }
                  ((o = u.data), (u = o === "F!" || o === "F" ? u : null));
                }
                if (u) {
                  ((wa = Re(u.nextSibling)), (l = u.data === "F!"));
                  break a;
                }
              }
              Pt(l);
            }
            l = !1;
          }
          l && (e = t[0]);
        }
      }
      return (
        (t = le()),
        (t.memoizedState = t.baseState = e),
        (l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: O1,
          lastRenderedState: e,
        }),
        (t.queue = l),
        (t = _1.bind(null, $, l)),
        (l.dispatch = t),
        (l = _f(!1)),
        (o = an.bind(null, $, !1, l.queue)),
        (l = le()),
        (u = { state: e, dispatch: null, action: a, pending: null }),
        (l.queue = u),
        (t = q4.bind(null, $, u, o, t)),
        (u.dispatch = t),
        (l.memoizedState = a),
        [e, t, !1]
      );
    }
    function Os(a) {
      var e = za();
      return z1(e, Sa, a);
    }
    function z1(a, e, t) {
      if (
        ((e = Yr(a, e, O1)[0]),
        (a = yd(pt)[0]),
        typeof e == "object" && e !== null && typeof e.then == "function")
      )
        try {
          var l = Io(e);
        } catch (i) {
          throw i === cu ? ni : i;
        }
      else l = e;
      e = za();
      var u = e.queue,
        o = u.dispatch;
      return (
        t !== e.memoizedState &&
          (($.flags |= 2048), lu(9, { destroy: void 0 }, M4.bind(null, u, t), null)),
        [l, o, a]
      );
    }
    function M4(a, e) {
      a.action = e;
    }
    function zs(a) {
      var e = za(),
        t = Sa;
      if (t !== null) return z1(e, t, a);
      (za(), (e = e.memoizedState), (t = za()));
      var l = t.queue.dispatch;
      return ((t.memoizedState = a), [e, l, !1]);
    }
    function lu(a, e, t, l) {
      return (
        (a = { tag: a, create: t, deps: l, inst: e, next: null }),
        (e = $.updateQueue),
        e === null && ((e = si()), ($.updateQueue = e)),
        (t = e.lastEffect),
        t === null
          ? (e.lastEffect = a.next = a)
          : ((l = t.next), (t.next = a), (a.next = l), (e.lastEffect = a)),
        a
      );
    }
    function E1() {
      return za().memoizedState;
    }
    function bd(a, e, t, l) {
      var u = le();
      (($.flags |= a),
        (u.memoizedState = lu(1 | e, { destroy: void 0 }, t, l === void 0 ? null : l)));
    }
    function pi(a, e, t, l) {
      var u = za();
      l = l === void 0 ? null : l;
      var o = u.memoizedState.inst;
      Sa !== null && l !== null && Pr(l, Sa.memoizedState.deps)
        ? (u.memoizedState = lu(e, o, t, l))
        : (($.flags |= a), (u.memoizedState = lu(1 | e, o, t, l)));
    }
    function Es(a, e) {
      bd(8390656, 8, a, e);
    }
    function Kr(a, e) {
      pi(2048, 8, a, e);
    }
    function w4(a) {
      $.flags |= 4;
      var e = $.updateQueue;
      if (e === null) ((e = si()), ($.updateQueue = e), (e.events = [a]));
      else {
        var t = e.events;
        t === null ? (e.events = [a]) : t.push(a);
      }
    }
    function F1(a) {
      var e = za().memoizedState;
      return (
        w4({ ref: e, nextImpl: a }),
        function () {
          if ((ca & 2) !== 0) throw Error(k(440));
          return e.impl.apply(void 0, arguments);
        }
      );
    }
    function H1(a, e) {
      return pi(4, 2, a, e);
    }
    function V1(a, e) {
      return pi(4, 4, a, e);
    }
    function G1(a, e) {
      if (typeof e == "function") {
        a = a();
        var t = e(a);
        return function () {
          typeof t == "function" ? t() : e(null);
        };
      }
      if (e != null)
        return (
          (a = a()),
          (e.current = a),
          function () {
            e.current = null;
          }
        );
    }
    function P1(a, e, t) {
      ((t = t != null ? t.concat([a]) : null), pi(4, 4, G1.bind(null, e, a), t));
    }
    function jr() {}
    function X1(a, e) {
      var t = za();
      e = e === void 0 ? null : e;
      var l = t.memoizedState;
      return e !== null && Pr(e, l[1]) ? l[0] : ((t.memoizedState = [a, e]), a);
    }
    function Q1(a, e) {
      var t = za();
      e = e === void 0 ? null : e;
      var l = t.memoizedState;
      if (e !== null && Pr(e, l[1])) return l[0];
      if (((l = a()), sl)) {
        Mt(!0);
        try {
          a();
        } finally {
          Mt(!1);
        }
      }
      return ((t.memoizedState = [l, e]), l);
    }
    function _r(a, e, t) {
      return t === void 0 || ((ct & 1073741824) !== 0 && (ua & 261930) === 0)
        ? (a.memoizedState = e)
        : ((a.memoizedState = t), (a = R2()), ($.lanes |= a), (Qt |= a), t);
    }
    function J1(a, e, t, l) {
      return be(t, e)
        ? t
        : tu.current !== null
          ? ((a = _r(a, t, l)), be(a, e) || (Va = !0), a)
          : (ct & 42) === 0 || ((ct & 1073741824) !== 0 && (ua & 261930) === 0)
            ? ((Va = !0), (a.memoizedState = t))
            : ((a = R2()), ($.lanes |= a), (Qt |= a), e);
    }
    function Z1(a, e, t, l, u) {
      var o = pa.p;
      pa.p = o !== 0 && 8 > o ? o : 8;
      var i = J.T,
        f = {};
      ((J.T = f), an(a, !1, e, t));
      try {
        var r = u(),
          c = J.S;
        if (
          (c !== null && c(f, r), r !== null && typeof r == "object" && typeof r.then == "function")
        ) {
          var g = I4(r, l);
          Ku(a, e, g, ye(a));
        } else Ku(a, e, l, ye(a));
      } catch (v) {
        Ku(a, e, { then: function () {}, status: "rejected", reason: v }, ye());
      } finally {
        ((pa.p = o), i !== null && f.types !== null && (i.types = f.types), (J.T = i));
      }
    }
    function T4() {}
    function ar(a, e, t, l) {
      if (a.tag !== 5) throw Error(k(476));
      var u = W1(a).queue;
      Z1(
        a,
        u,
        e,
        ll,
        t === null
          ? T4
          : function () {
              return (Y1(a), t(l));
            },
      );
    }
    function W1(a) {
      var e = a.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: ll,
        baseState: ll,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: pt,
          lastRenderedState: ll,
        },
        next: null,
      };
      var t = {};
      return (
        (e.next = {
          memoizedState: t,
          baseState: t,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: pt,
            lastRenderedState: t,
          },
          next: null,
        }),
        (a.memoizedState = e),
        (a = a.alternate),
        a !== null && (a.memoizedState = e),
        e
      );
    }
    function Y1(a) {
      var e = W1(a);
      (e.next === null && (e = a.alternate.memoizedState), Ku(a, e.next.queue, {}, ye()));
    }
    function $r() {
      return ja(mo);
    }
    function K1() {
      return za().memoizedState;
    }
    function j1() {
      return za().memoizedState;
    }
    function D4(a) {
      for (var e = a.return; e !== null;) {
        switch (e.tag) {
          case 24:
          case 3:
            var t = ye();
            a = Ut(t);
            var l = Ot(e, a, t);
            (l !== null && (re(l, e, t), Zu(l, e, t)), (e = { cache: Er() }), (a.payload = e));
            return;
        }
        e = e.return;
      }
    }
    function B4(a, e, t) {
      var l = ye();
      ((t = {
        lane: l,
        revertLane: 0,
        gesture: null,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        mi(a) ? $1(e, t) : ((t = Nr(a, e, t, l)), t !== null && (re(t, a, l), a2(t, e, l))));
    }
    function _1(a, e, t) {
      var l = ye();
      Ku(a, e, t, l);
    }
    function Ku(a, e, t, l) {
      var u = {
        lane: l,
        revertLane: 0,
        gesture: null,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (mi(a)) $1(e, u);
      else {
        var o = a.alternate;
        if (
          a.lanes === 0 &&
          (o === null || o.lanes === 0) &&
          ((o = e.lastRenderedReducer), o !== null)
        )
          try {
            var i = e.lastRenderedState,
              f = o(i, t);
            if (((u.hasEagerState = !0), (u.eagerState = f), be(f, i)))
              return (ri(a, e, u, 0), Ca === null && fi(), !1);
          } catch {}
        if (((t = Nr(a, e, u, l)), t !== null)) return (re(t, a, l), a2(t, e, l), !0);
      }
      return !1;
    }
    function an(a, e, t, l) {
      if (
        ((l = {
          lane: 2,
          revertLane: nn(),
          gesture: null,
          action: l,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        mi(a))
      ) {
        if (e) throw Error(k(479));
      } else ((e = Nr(a, t, l, 2)), e !== null && re(e, a, 2));
    }
    function mi(a) {
      var e = a.alternate;
      return a === $ || (e !== null && e === $);
    }
    function $1(a, e) {
      Kl = Vd = !0;
      var t = a.pending;
      (t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)), (a.pending = e));
    }
    function a2(a, e, t) {
      if ((t & 4194048) !== 0) {
        var l = e.lanes;
        ((l &= a.pendingLanes), (t |= l), (e.lanes = t), Fc(a, t));
      }
    }
    var so = {
      readContext: ja,
      use: ci,
      useCallback: Na,
      useContext: Na,
      useEffect: Na,
      useImperativeHandle: Na,
      useLayoutEffect: Na,
      useInsertionEffect: Na,
      useMemo: Na,
      useReducer: Na,
      useRef: Na,
      useState: Na,
      useDebugValue: Na,
      useDeferredValue: Na,
      useTransition: Na,
      useSyncExternalStore: Na,
      useId: Na,
      useHostTransitionStatus: Na,
      useFormState: Na,
      useActionState: Na,
      useOptimistic: Na,
      useMemoCache: Na,
      useCacheRefresh: Na,
    };
    so.useEffectEvent = Na;
    var e2 = {
        readContext: ja,
        use: ci,
        useCallback: function (a, e) {
          return ((le().memoizedState = [a, e === void 0 ? null : e]), a);
        },
        useContext: ja,
        useEffect: Es,
        useImperativeHandle: function (a, e, t) {
          ((t = t != null ? t.concat([a]) : null), bd(4194308, 4, G1.bind(null, e, a), t));
        },
        useLayoutEffect: function (a, e) {
          return bd(4194308, 4, a, e);
        },
        useInsertionEffect: function (a, e) {
          bd(4, 2, a, e);
        },
        useMemo: function (a, e) {
          var t = le();
          e = e === void 0 ? null : e;
          var l = a();
          if (sl) {
            Mt(!0);
            try {
              a();
            } finally {
              Mt(!1);
            }
          }
          return ((t.memoizedState = [l, e]), l);
        },
        useReducer: function (a, e, t) {
          var l = le();
          if (t !== void 0) {
            var u = t(e);
            if (sl) {
              Mt(!0);
              try {
                t(e);
              } finally {
                Mt(!1);
              }
            }
          } else u = e;
          return (
            (l.memoizedState = l.baseState = u),
            (a = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: a,
              lastRenderedState: u,
            }),
            (l.queue = a),
            (a = a.dispatch = B4.bind(null, $, a)),
            [l.memoizedState, a]
          );
        },
        useRef: function (a) {
          var e = le();
          return ((a = { current: a }), (e.memoizedState = a));
        },
        useState: function (a) {
          a = _f(a);
          var e = a.queue,
            t = _1.bind(null, $, e);
          return ((e.dispatch = t), [a.memoizedState, t]);
        },
        useDebugValue: jr,
        useDeferredValue: function (a, e) {
          var t = le();
          return _r(t, a, e);
        },
        useTransition: function () {
          var a = _f(!1);
          return ((a = Z1.bind(null, $, a.queue, !0, !1)), (le().memoizedState = a), [!1, a]);
        },
        useSyncExternalStore: function (a, e, t) {
          var l = $,
            u = le();
          if (oa) {
            if (t === void 0) throw Error(k(407));
            t = t();
          } else {
            if (((t = e()), Ca === null)) throw Error(k(349));
            (ua & 127) !== 0 || M1(l, e, t);
          }
          u.memoizedState = t;
          var o = { value: t, getSnapshot: e };
          return (
            (u.queue = o),
            Es(T1.bind(null, l, o, a), [a]),
            (l.flags |= 2048),
            lu(9, { destroy: void 0 }, w1.bind(null, l, o, t, e), null),
            t
          );
        },
        useId: function () {
          var a = le(),
            e = Ca.identifierPrefix;
          if (oa) {
            var t = Xe,
              l = Pe;
            ((t = (l & ~(1 << (32 - xe(l) - 1))).toString(32) + t),
              (e = "_" + e + "R_" + t),
              (t = Gd++),
              0 < t && (e += "H" + t.toString(32)),
              (e += "_"));
          } else ((t = A4++), (e = "_" + e + "r_" + t.toString(32) + "_"));
          return (a.memoizedState = e);
        },
        useHostTransitionStatus: $r,
        useFormState: Us,
        useActionState: Us,
        useOptimistic: function (a) {
          var e = le();
          e.memoizedState = e.baseState = a;
          var t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((e.queue = t), (e = an.bind(null, $, !0, t)), (t.dispatch = e), [a, e]);
        },
        useMemoCache: Wr,
        useCacheRefresh: function () {
          return (le().memoizedState = D4.bind(null, $));
        },
        useEffectEvent: function (a) {
          var e = le(),
            t = { impl: a };
          return (
            (e.memoizedState = t),
            function () {
              if ((ca & 2) !== 0) throw Error(k(440));
              return t.impl.apply(void 0, arguments);
            }
          );
        },
      },
      en = {
        readContext: ja,
        use: ci,
        useCallback: X1,
        useContext: ja,
        useEffect: Kr,
        useImperativeHandle: P1,
        useInsertionEffect: H1,
        useLayoutEffect: V1,
        useMemo: Q1,
        useReducer: yd,
        useRef: E1,
        useState: function () {
          return yd(pt);
        },
        useDebugValue: jr,
        useDeferredValue: function (a, e) {
          var t = za();
          return J1(t, Sa.memoizedState, a, e);
        },
        useTransition: function () {
          var a = yd(pt)[0],
            e = za().memoizedState;
          return [typeof a == "boolean" ? a : Io(a), e];
        },
        useSyncExternalStore: q1,
        useId: K1,
        useHostTransitionStatus: $r,
        useFormState: Os,
        useActionState: Os,
        useOptimistic: function (a, e) {
          var t = za();
          return R1(t, Sa, a, e);
        },
        useMemoCache: Wr,
        useCacheRefresh: j1,
      };
    en.useEffectEvent = F1;
    var t2 = {
      readContext: ja,
      use: ci,
      useCallback: X1,
      useContext: ja,
      useEffect: Kr,
      useImperativeHandle: P1,
      useInsertionEffect: H1,
      useLayoutEffect: V1,
      useMemo: Q1,
      useReducer: ff,
      useRef: E1,
      useState: function () {
        return ff(pt);
      },
      useDebugValue: jr,
      useDeferredValue: function (a, e) {
        var t = za();
        return Sa === null ? _r(t, a, e) : J1(t, Sa.memoizedState, a, e);
      },
      useTransition: function () {
        var a = ff(pt)[0],
          e = za().memoizedState;
        return [typeof a == "boolean" ? a : Io(a), e];
      },
      useSyncExternalStore: q1,
      useId: K1,
      useHostTransitionStatus: $r,
      useFormState: zs,
      useActionState: zs,
      useOptimistic: function (a, e) {
        var t = za();
        return Sa !== null ? R1(t, Sa, a, e) : ((t.baseState = a), [a, t.queue.dispatch]);
      },
      useMemoCache: Wr,
      useCacheRefresh: j1,
    };
    t2.useEffectEvent = F1;
    function rf(a, e, t, l) {
      ((e = a.memoizedState),
        (t = t(l, e)),
        (t = t == null ? e : Ta({}, e, t)),
        (a.memoizedState = t),
        a.lanes === 0 && (a.updateQueue.baseState = t));
    }
    var er = {
      enqueueSetState: function (a, e, t) {
        a = a._reactInternals;
        var l = ye(),
          u = Ut(l);
        ((u.payload = e),
          t != null && (u.callback = t),
          (e = Ot(a, u, l)),
          e !== null && (re(e, a, l), Zu(e, a, l)));
      },
      enqueueReplaceState: function (a, e, t) {
        a = a._reactInternals;
        var l = ye(),
          u = Ut(l);
        ((u.tag = 1),
          (u.payload = e),
          t != null && (u.callback = t),
          (e = Ot(a, u, l)),
          e !== null && (re(e, a, l), Zu(e, a, l)));
      },
      enqueueForceUpdate: function (a, e) {
        a = a._reactInternals;
        var t = ye(),
          l = Ut(t);
        ((l.tag = 2),
          e != null && (l.callback = e),
          (e = Ot(a, l, t)),
          e !== null && (re(e, a, t), Zu(e, a, t)));
      },
    };
    function Fs(a, e, t, l, u, o, i) {
      return (
        (a = a.stateNode),
        typeof a.shouldComponentUpdate == "function"
          ? a.shouldComponentUpdate(l, o, i)
          : e.prototype && e.prototype.isPureReactComponent
            ? !oo(t, l) || !oo(u, o)
            : !0
      );
    }
    function Hs(a, e, t, l) {
      ((a = e.state),
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" &&
          e.UNSAFE_componentWillReceiveProps(t, l),
        e.state !== a && er.enqueueReplaceState(e, e.state, null));
    }
    function cl(a, e) {
      var t = e;
      if ("ref" in e) {
        t = {};
        for (var l in e) l !== "ref" && (t[l] = e[l]);
      }
      if ((a = a.defaultProps)) {
        t === e && (t = Ta({}, t));
        for (var u in a) t[u] === void 0 && (t[u] = a[u]);
      }
      return t;
    }
    function l2(a) {
      Nd(a);
    }
    function u2(a) {
      console.error(a);
    }
    function o2(a) {
      Nd(a);
    }
    function Pd(a, e) {
      try {
        var t = a.onUncaughtError;
        t(e.value, { componentStack: e.stack });
      } catch (l) {
        setTimeout(function () {
          throw l;
        });
      }
    }
    function Vs(a, e, t) {
      try {
        var l = a.onCaughtError;
        l(t.value, { componentStack: t.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
      } catch (u) {
        setTimeout(function () {
          throw u;
        });
      }
    }
    function tr(a, e, t) {
      return (
        (t = Ut(t)),
        (t.tag = 3),
        (t.payload = { element: null }),
        (t.callback = function () {
          Pd(a, e);
        }),
        t
      );
    }
    function d2(a) {
      return ((a = Ut(a)), (a.tag = 3), a);
    }
    function i2(a, e, t, l) {
      var u = t.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var o = l.value;
        ((a.payload = function () {
          return u(o);
        }),
          (a.callback = function () {
            Vs(e, t, l);
          }));
      }
      var i = t.stateNode;
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (a.callback = function () {
          (Vs(e, t, l),
            typeof u != "function" && (zt === null ? (zt = new Set([this])) : zt.add(this)));
          var f = l.stack;
          this.componentDidCatch(l.value, { componentStack: f !== null ? f : "" });
        });
    }
    function R4(a, e, t, l, u) {
      if (((t.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
        if (((e = t.alternate), e !== null && su(e, t, u, !0), (t = Se.current), t !== null)) {
          switch (t.tag) {
            case 31:
            case 13:
              return (
                Be === null ? Wd() : t.alternate === null && Ua === 0 && (Ua = 3),
                (t.flags &= -257),
                (t.flags |= 65536),
                (t.lanes = u),
                l === Ed
                  ? (t.flags |= 16384)
                  : ((e = t.updateQueue),
                    e === null ? (t.updateQueue = new Set([l])) : e.add(l),
                    yf(a, l, u)),
                !1
              );
            case 22:
              return (
                (t.flags |= 65536),
                l === Ed
                  ? (t.flags |= 16384)
                  : ((e = t.updateQueue),
                    e === null
                      ? ((e = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([l]),
                        }),
                        (t.updateQueue = e))
                      : ((t = e.retryQueue), t === null ? (e.retryQueue = new Set([l])) : t.add(l)),
                    yf(a, l, u)),
                !1
              );
          }
          throw Error(k(435, t.tag));
        }
        return (yf(a, l, u), Wd(), !1);
      }
      if (oa)
        return (
          (e = Se.current),
          e !== null
            ? ((e.flags & 65536) === 0 && (e.flags |= 256),
              (e.flags |= 65536),
              (e.lanes = u),
              l !== Pf && ((a = Error(k(422), { cause: l })), fo(Te(a, t))))
            : (l !== Pf && ((e = Error(k(423), { cause: l })), fo(Te(e, t))),
              (a = a.current.alternate),
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (l = Te(l, t)),
              (u = tr(a.stateNode, l, u)),
              df(a, u),
              Ua !== 4 && (Ua = 2)),
          !1
        );
      var o = Error(k(520), { cause: l });
      if (((o = Te(o, t)), $u === null ? ($u = [o]) : $u.push(o), Ua !== 4 && (Ua = 2), e === null))
        return !0;
      ((l = Te(l, t)), (t = e));
      do {
        switch (t.tag) {
          case 3:
            return (
              (t.flags |= 65536),
              (a = u & -u),
              (t.lanes |= a),
              (a = tr(t.stateNode, l, a)),
              df(t, a),
              !1
            );
          case 1:
            if (
              ((e = t.type),
              (o = t.stateNode),
              (t.flags & 128) === 0 &&
                (typeof e.getDerivedStateFromError == "function" ||
                  (o !== null &&
                    typeof o.componentDidCatch == "function" &&
                    (zt === null || !zt.has(o)))))
            )
              return (
                (t.flags |= 65536),
                (u &= -u),
                (t.lanes |= u),
                (u = d2(u)),
                i2(u, a, t, l),
                df(t, u),
                !1
              );
        }
        t = t.return;
      } while (t !== null);
      return !1;
    }
    var tn = Error(k(461)),
      Va = !1;
    function Wa(a, e, t, l) {
      e.child = a === null ? b1(e, null, t, l) : nl(e, a.child, t, l);
    }
    function Gs(a, e, t, l, u) {
      t = t.render;
      var o = e.ref;
      if ("ref" in l) {
        var i = {};
        for (var f in l) f !== "ref" && (i[f] = l[f]);
      } else i = l;
      return (
        rl(e),
        (l = Xr(a, e, t, i, o, u)),
        (f = Qr()),
        a !== null && !Va
          ? (Jr(a, e, u), mt(a, e, u))
          : (oa && f && Or(e), (e.flags |= 1), Wa(a, e, l, u), e.child)
      );
    }
    function Ps(a, e, t, l, u) {
      if (a === null) {
        var o = t.type;
        return typeof o == "function" && !Ur(o) && o.defaultProps === void 0 && t.compare === null
          ? ((e.tag = 15), (e.type = o), f2(a, e, o, l, u))
          : ((a = Ld(t.type, null, l, e, e.mode, u)),
            (a.ref = e.ref),
            (a.return = e),
            (e.child = a));
      }
      if (((o = a.child), !ln(a, u))) {
        var i = o.memoizedProps;
        if (((t = t.compare), (t = t !== null ? t : oo), t(i, l) && a.ref === e.ref))
          return mt(a, e, u);
      }
      return ((e.flags |= 1), (a = ft(o, l)), (a.ref = e.ref), (a.return = e), (e.child = a));
    }
    function f2(a, e, t, l, u) {
      if (a !== null) {
        var o = a.memoizedProps;
        if (oo(o, l) && a.ref === e.ref)
          if (((Va = !1), (e.pendingProps = l = o), ln(a, u)))
            (a.flags & 131072) !== 0 && (Va = !0);
          else return ((e.lanes = a.lanes), mt(a, e, u));
      }
      return lr(a, e, t, l, u);
    }
    function r2(a, e, t, l) {
      var u = l.children,
        o = a !== null ? a.memoizedState : null;
      if (
        (a === null &&
          e.stateNode === null &&
          (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        l.mode === "hidden")
      ) {
        if ((e.flags & 128) !== 0) {
          if (((o = o !== null ? o.baseLanes | t : t), a !== null)) {
            for (l = e.child = a.child, u = 0; l !== null;)
              ((u = u | l.lanes | l.childLanes), (l = l.sibling));
            l = u & ~o;
          } else ((l = 0), (e.child = null));
          return Xs(a, e, o, t, l);
        }
        if ((t & 536870912) !== 0)
          ((e.memoizedState = { baseLanes: 0, cachePool: null }),
            a !== null && xd(e, o !== null ? o.cachePool : null),
            o !== null ? Bs(e, o) : Kf(),
            I1(e));
        else return ((l = e.lanes = 536870912), Xs(a, e, o !== null ? o.baseLanes | t : t, t, l));
      } else
        o !== null
          ? (xd(e, o.cachePool), Bs(e, o), kt(e), (e.memoizedState = null))
          : (a !== null && xd(e, null), Kf(), kt(e));
      return (Wa(a, e, u, t), e.child);
    }
    function Vu(a, e) {
      return (
        (a !== null && a.tag === 22) ||
          e.stateNode !== null ||
          (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        e.sibling
      );
    }
    function Xs(a, e, t, l, u) {
      var o = Fr();
      return (
        (o = o === null ? null : { parent: Ha._currentValue, pool: o }),
        (e.memoizedState = { baseLanes: t, cachePool: o }),
        a !== null && xd(e, null),
        Kf(),
        I1(e),
        a !== null && su(a, e, l, !0),
        (e.childLanes = u),
        null
      );
    }
    function Sd(a, e) {
      return (
        (e = Xd({ mode: e.mode, children: e.children }, a.mode)),
        (e.ref = a.ref),
        (a.child = e),
        (e.return = a),
        e
      );
    }
    function Qs(a, e, t) {
      return (
        nl(e, a.child, null, t),
        (a = Sd(e, e.pendingProps)),
        (a.flags |= 2),
        me(e),
        (e.memoizedState = null),
        a
      );
    }
    function N4(a, e, t) {
      var l = e.pendingProps,
        u = (e.flags & 128) !== 0;
      if (((e.flags &= -129), a === null)) {
        if (oa) {
          if (l.mode === "hidden") return ((a = Sd(e, l)), (e.lanes = 536870912), Vu(null, a));
          if (
            (jf(e),
            (a = wa)
              ? ((a = e0(a, De)),
                (a = a !== null && a.data === "&" ? a : null),
                a !== null &&
                  ((e.memoizedState = {
                    dehydrated: a,
                    treeContext: Gt !== null ? { id: Pe, overflow: Xe } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (t = m1(a)),
                  (t.return = e),
                  (e.child = t),
                  (Ka = e),
                  (wa = null)))
              : (a = null),
            a === null)
          )
            throw Pt(e);
          return ((e.lanes = 536870912), null);
        }
        return Sd(e, l);
      }
      var o = a.memoizedState;
      if (o !== null) {
        var i = o.dehydrated;
        if ((jf(e), u))
          if (e.flags & 256) ((e.flags &= -257), (e = Qs(a, e, t)));
          else if (e.memoizedState !== null) ((e.child = a.child), (e.flags |= 128), (e = null));
          else throw Error(k(558));
        else if ((Va || su(a, e, t, !1), (u = (t & a.childLanes) !== 0), Va || u)) {
          if (((l = Ca), l !== null && ((i = Hc(l, t)), i !== 0 && i !== o.retryLane)))
            throw ((o.retryLane = i), gl(a, i), re(l, a, i), tn);
          (Wd(), (e = Qs(a, e, t)));
        } else
          ((a = o.treeContext),
            (wa = Re(i.nextSibling)),
            (Ka = e),
            (oa = !0),
            (Nt = null),
            (De = !1),
            a !== null && g1(e, a),
            (e = Sd(e, l)),
            (e.flags |= 4096));
        return e;
      }
      return (
        (a = ft(a.child, { mode: l.mode, children: l.children })),
        (a.ref = e.ref),
        (e.child = a),
        (a.return = e),
        a
      );
    }
    function Cd(a, e) {
      var t = e.ref;
      if (t === null) a !== null && a.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof t != "function" && typeof t != "object") throw Error(k(284));
        (a === null || a.ref !== t) && (e.flags |= 4194816);
      }
    }
    function lr(a, e, t, l, u) {
      return (
        rl(e),
        (t = Xr(a, e, t, l, void 0, u)),
        (l = Qr()),
        a !== null && !Va
          ? (Jr(a, e, u), mt(a, e, u))
          : (oa && l && Or(e), (e.flags |= 1), Wa(a, e, t, u), e.child)
      );
    }
    function Js(a, e, t, l, u, o) {
      return (
        rl(e),
        (e.updateQueue = null),
        (t = k1(e, l, t, u)),
        A1(a),
        (l = Qr()),
        a !== null && !Va
          ? (Jr(a, e, o), mt(a, e, o))
          : (oa && l && Or(e), (e.flags |= 1), Wa(a, e, t, o), e.child)
      );
    }
    function Zs(a, e, t, l, u) {
      if ((rl(e), e.stateNode === null)) {
        var o = Vl,
          i = t.contextType;
        (typeof i == "object" && i !== null && (o = ja(i)),
          (o = new t(l, o)),
          (e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
          (o.updater = er),
          (e.stateNode = o),
          (o._reactInternals = e),
          (o = e.stateNode),
          (o.props = l),
          (o.state = e.memoizedState),
          (o.refs = {}),
          Vr(e),
          (i = t.contextType),
          (o.context = typeof i == "object" && i !== null ? ja(i) : Vl),
          (o.state = e.memoizedState),
          (i = t.getDerivedStateFromProps),
          typeof i == "function" && (rf(e, t, i, l), (o.state = e.memoizedState)),
          typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" &&
              typeof o.componentWillMount != "function") ||
            ((i = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            i !== o.state && er.enqueueReplaceState(o, o.state, null),
            Yu(e, l, o, u),
            Wu(),
            (o.state = e.memoizedState)),
          typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (l = !0));
      } else if (a === null) {
        o = e.stateNode;
        var f = e.memoizedProps,
          r = cl(t, f);
        o.props = r;
        var c = o.context,
          g = t.contextType;
        ((i = Vl), typeof g == "object" && g !== null && (i = ja(g)));
        var v = t.getDerivedStateFromProps;
        ((g = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function"),
          (f = e.pendingProps !== f),
          g ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
              typeof o.componentWillReceiveProps != "function") ||
            ((f || c !== i) && Hs(e, o, l, i)),
          (Ct = !1));
        var h = e.memoizedState;
        ((o.state = h),
          Yu(e, l, o, u),
          Wu(),
          (c = e.memoizedState),
          f || h !== c || Ct
            ? (typeof v == "function" && (rf(e, t, v, l), (c = e.memoizedState)),
              (r = Ct || Fs(e, t, r, l, h, c, i))
                ? (g ||
                    (typeof o.UNSAFE_componentWillMount != "function" &&
                      typeof o.componentWillMount != "function") ||
                    (typeof o.componentWillMount == "function" && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == "function" &&
                      o.UNSAFE_componentWillMount()),
                  typeof o.componentDidMount == "function" && (e.flags |= 4194308))
                : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                  (e.memoizedProps = l),
                  (e.memoizedState = c)),
              (o.props = l),
              (o.state = c),
              (o.context = i),
              (l = r))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), (l = !1)));
      } else {
        ((o = e.stateNode),
          Wf(a, e),
          (i = e.memoizedProps),
          (g = cl(t, i)),
          (o.props = g),
          (v = e.pendingProps),
          (h = o.context),
          (c = t.contextType),
          (r = Vl),
          typeof c == "object" && c !== null && (r = ja(c)),
          (f = t.getDerivedStateFromProps),
          (c = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
              typeof o.componentWillReceiveProps != "function") ||
            ((i !== v || h !== r) && Hs(e, o, l, r)),
          (Ct = !1),
          (h = e.memoizedState),
          (o.state = h),
          Yu(e, l, o, u),
          Wu());
        var x = e.memoizedState;
        i !== v || h !== x || Ct || (a !== null && a.dependencies !== null && zd(a.dependencies))
          ? (typeof f == "function" && (rf(e, t, f, l), (x = e.memoizedState)),
            (g =
              Ct ||
              Fs(e, t, g, l, h, x, r) ||
              (a !== null && a.dependencies !== null && zd(a.dependencies)))
              ? (c ||
                  (typeof o.UNSAFE_componentWillUpdate != "function" &&
                    typeof o.componentWillUpdate != "function") ||
                  (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, x, r),
                  typeof o.UNSAFE_componentWillUpdate == "function" &&
                    o.UNSAFE_componentWillUpdate(l, x, r)),
                typeof o.componentDidUpdate == "function" && (e.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
              : (typeof o.componentDidUpdate != "function" ||
                  (i === a.memoizedProps && h === a.memoizedState) ||
                  (e.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" ||
                  (i === a.memoizedProps && h === a.memoizedState) ||
                  (e.flags |= 1024),
                (e.memoizedProps = l),
                (e.memoizedState = x)),
            (o.props = l),
            (o.state = x),
            (o.context = r),
            (l = g))
          : (typeof o.componentDidUpdate != "function" ||
              (i === a.memoizedProps && h === a.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (i === a.memoizedProps && h === a.memoizedState) ||
              (e.flags |= 1024),
            (l = !1));
      }
      return (
        (o = l),
        Cd(a, e),
        (l = (e.flags & 128) !== 0),
        o || l
          ? ((o = e.stateNode),
            (t = l && typeof t.getDerivedStateFromError != "function" ? null : o.render()),
            (e.flags |= 1),
            a !== null && l
              ? ((e.child = nl(e, a.child, null, u)), (e.child = nl(e, null, t, u)))
              : Wa(a, e, t, u),
            (e.memoizedState = o.state),
            (a = e.child))
          : (a = mt(a, e, u)),
        a
      );
    }
    function Ws(a, e, t, l) {
      return (fl(), (e.flags |= 256), Wa(a, e, t, l), e.child);
    }
    var nf = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function sf(a) {
      return { baseLanes: a, cachePool: L1() };
    }
    function cf(a, e, t) {
      return ((a = a !== null ? a.childLanes & ~t : 0), e && (a |= ge), a);
    }
    function n2(a, e, t) {
      var l = e.pendingProps,
        u = !1,
        o = (e.flags & 128) !== 0,
        i;
      if (
        ((i = o) || (i = a !== null && a.memoizedState === null ? !1 : (Oa.current & 2) !== 0),
        i && ((u = !0), (e.flags &= -129)),
        (i = (e.flags & 32) !== 0),
        (e.flags &= -33),
        a === null)
      ) {
        if (oa) {
          if (
            (u ? At(e) : kt(e),
            (a = wa)
              ? ((a = e0(a, De)),
                (a = a !== null && a.data !== "&" ? a : null),
                a !== null &&
                  ((e.memoizedState = {
                    dehydrated: a,
                    treeContext: Gt !== null ? { id: Pe, overflow: Xe } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (t = m1(a)),
                  (t.return = e),
                  (e.child = t),
                  (Ka = e),
                  (wa = null)))
              : (a = null),
            a === null)
          )
            throw Pt(e);
          return (vr(a) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        }
        var f = l.children;
        return (
          (l = l.fallback),
          u
            ? (kt(e),
              (u = e.mode),
              (f = Xd({ mode: "hidden", children: f }, u)),
              (l = ul(l, u, t, null)),
              (f.return = e),
              (l.return = e),
              (f.sibling = l),
              (e.child = f),
              (l = e.child),
              (l.memoizedState = sf(t)),
              (l.childLanes = cf(a, i, t)),
              (e.memoizedState = nf),
              Vu(null, l))
            : (At(e), ur(e, f))
        );
      }
      var r = a.memoizedState;
      if (r !== null && ((f = r.dehydrated), f !== null)) {
        if (o)
          e.flags & 256
            ? (At(e), (e.flags &= -257), (e = pf(a, e, t)))
            : e.memoizedState !== null
              ? (kt(e), (e.child = a.child), (e.flags |= 128), (e = null))
              : (kt(e),
                (f = l.fallback),
                (u = e.mode),
                (l = Xd({ mode: "visible", children: l.children }, u)),
                (f = ul(f, u, t, null)),
                (f.flags |= 2),
                (l.return = e),
                (f.return = e),
                (l.sibling = f),
                (e.child = l),
                nl(e, a.child, null, t),
                (l = e.child),
                (l.memoizedState = sf(t)),
                (l.childLanes = cf(a, i, t)),
                (e.memoizedState = nf),
                (e = Vu(null, l)));
        else if ((At(e), vr(f))) {
          if (((i = f.nextSibling && f.nextSibling.dataset), i)) var c = i.dgst;
          ((i = c),
            (l = Error(k(419))),
            (l.stack = ""),
            (l.digest = i),
            fo({ value: l, source: null, stack: null }),
            (e = pf(a, e, t)));
        } else if ((Va || su(a, e, t, !1), (i = (t & a.childLanes) !== 0), Va || i)) {
          if (((i = Ca), i !== null && ((l = Hc(i, t)), l !== 0 && l !== r.retryLane)))
            throw ((r.retryLane = l), gl(a, l), re(i, a, l), tn);
          (gr(f) || Wd(), (e = pf(a, e, t)));
        } else
          gr(f)
            ? ((e.flags |= 192), (e.child = a.child), (e = null))
            : ((a = r.treeContext),
              (wa = Re(f.nextSibling)),
              (Ka = e),
              (oa = !0),
              (Nt = null),
              (De = !1),
              a !== null && g1(e, a),
              (e = ur(e, l.children)),
              (e.flags |= 4096));
        return e;
      }
      return u
        ? (kt(e),
          (f = l.fallback),
          (u = e.mode),
          (r = a.child),
          (c = r.sibling),
          (l = ft(r, { mode: "hidden", children: l.children })),
          (l.subtreeFlags = r.subtreeFlags & 65011712),
          c !== null ? (f = ft(c, f)) : ((f = ul(f, u, t, null)), (f.flags |= 2)),
          (f.return = e),
          (l.return = e),
          (l.sibling = f),
          (e.child = l),
          Vu(null, l),
          (l = e.child),
          (f = a.child.memoizedState),
          f === null
            ? (f = sf(t))
            : ((u = f.cachePool),
              u !== null
                ? ((r = Ha._currentValue), (u = u.parent !== r ? { parent: r, pool: r } : u))
                : (u = L1()),
              (f = { baseLanes: f.baseLanes | t, cachePool: u })),
          (l.memoizedState = f),
          (l.childLanes = cf(a, i, t)),
          (e.memoizedState = nf),
          Vu(a.child, l))
        : (At(e),
          (t = a.child),
          (a = t.sibling),
          (t = ft(t, { mode: "visible", children: l.children })),
          (t.return = e),
          (t.sibling = null),
          a !== null &&
            ((i = e.deletions), i === null ? ((e.deletions = [a]), (e.flags |= 16)) : i.push(a)),
          (e.child = t),
          (e.memoizedState = null),
          t);
    }
    function ur(a, e) {
      return ((e = Xd({ mode: "visible", children: e }, a.mode)), (e.return = a), (a.child = e));
    }
    function Xd(a, e) {
      return ((a = he(22, a, null, e)), (a.lanes = 0), a);
    }
    function pf(a, e, t) {
      return (
        nl(e, a.child, null, t),
        (a = ur(e, e.pendingProps.children)),
        (a.flags |= 2),
        (e.memoizedState = null),
        a
      );
    }
    function Ys(a, e, t) {
      a.lanes |= e;
      var l = a.alternate;
      (l !== null && (l.lanes |= e), Qf(a.return, e, t));
    }
    function mf(a, e, t, l, u, o) {
      var i = a.memoizedState;
      i === null
        ? (a.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: t,
            tailMode: u,
            treeForkCount: o,
          })
        : ((i.isBackwards = e),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = l),
          (i.tail = t),
          (i.tailMode = u),
          (i.treeForkCount = o));
    }
    function s2(a, e, t) {
      var l = e.pendingProps,
        u = l.revealOrder,
        o = l.tail;
      l = l.children;
      var i = Oa.current,
        f = (i & 2) !== 0;
      if (
        (f ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
        Aa(Oa, i),
        Wa(a, e, l, t),
        (l = oa ? io : 0),
        !f && a !== null && (a.flags & 128) !== 0)
      )
        a: for (a = e.child; a !== null;) {
          if (a.tag === 13) a.memoizedState !== null && Ys(a, t, e);
          else if (a.tag === 19) Ys(a, t, e);
          else if (a.child !== null) {
            ((a.child.return = a), (a = a.child));
            continue;
          }
          if (a === e) break a;
          for (; a.sibling === null;) {
            if (a.return === null || a.return === e) break a;
            a = a.return;
          }
          ((a.sibling.return = a.return), (a = a.sibling));
        }
      switch (u) {
        case "forwards":
          for (t = e.child, u = null; t !== null;)
            ((a = t.alternate), a !== null && Hd(a) === null && (u = t), (t = t.sibling));
          ((t = u),
            t === null ? ((u = e.child), (e.child = null)) : ((u = t.sibling), (t.sibling = null)),
            mf(e, !1, u, t, o, l));
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (t = null, u = e.child, e.child = null; u !== null;) {
            if (((a = u.alternate), a !== null && Hd(a) === null)) {
              e.child = u;
              break;
            }
            ((a = u.sibling), (u.sibling = t), (t = u), (u = a));
          }
          mf(e, !0, t, null, o, l);
          break;
        case "together":
          mf(e, !1, null, null, void 0, l);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function mt(a, e, t) {
      if (
        (a !== null && (e.dependencies = a.dependencies), (Qt |= e.lanes), (t & e.childLanes) === 0)
      )
        if (a !== null) {
          if ((su(a, e, t, !1), (t & e.childLanes) === 0)) return null;
        } else return null;
      if (a !== null && e.child !== a.child) throw Error(k(153));
      if (e.child !== null) {
        for (a = e.child, t = ft(a, a.pendingProps), e.child = t, t.return = e; a.sibling !== null;)
          ((a = a.sibling), (t = t.sibling = ft(a, a.pendingProps)), (t.return = e));
        t.sibling = null;
      }
      return e.child;
    }
    function ln(a, e) {
      return (a.lanes & e) !== 0 ? !0 : ((a = a.dependencies), !!(a !== null && zd(a)));
    }
    function U4(a, e, t) {
      switch (e.tag) {
        case 3:
          (Td(e, e.stateNode.containerInfo), It(e, Ha, a.memoizedState.cache), fl());
          break;
        case 27:
        case 5:
          Bf(e);
          break;
        case 4:
          Td(e, e.stateNode.containerInfo);
          break;
        case 10:
          It(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return ((e.flags |= 128), jf(e), null);
          break;
        case 13:
          var l = e.memoizedState;
          if (l !== null)
            return l.dehydrated !== null
              ? (At(e), (e.flags |= 128), null)
              : (t & e.child.childLanes) !== 0
                ? n2(a, e, t)
                : (At(e), (a = mt(a, e, t)), a !== null ? a.sibling : null);
          At(e);
          break;
        case 19:
          var u = (a.flags & 128) !== 0;
          if (
            ((l = (t & e.childLanes) !== 0),
            l || (su(a, e, t, !1), (l = (t & e.childLanes) !== 0)),
            u)
          ) {
            if (l) return s2(a, e, t);
            e.flags |= 128;
          }
          if (
            ((u = e.memoizedState),
            u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
            Aa(Oa, Oa.current),
            l)
          )
            break;
          return null;
        case 22:
          return ((e.lanes = 0), r2(a, e, t, e.pendingProps));
        case 24:
          It(e, Ha, a.memoizedState.cache);
      }
      return mt(a, e, t);
    }
    function c2(a, e, t) {
      if (a !== null)
        if (a.memoizedProps !== e.pendingProps) Va = !0;
        else {
          if (!ln(a, t) && (e.flags & 128) === 0) return ((Va = !1), U4(a, e, t));
          Va = (a.flags & 131072) !== 0;
        }
      else ((Va = !1), oa && (e.flags & 1048576) !== 0 && h1(e, io, e.index));
      switch (((e.lanes = 0), e.tag)) {
        case 16:
          a: {
            var l = e.pendingProps;
            if (((a = el(e.elementType)), (e.type = a), typeof a == "function"))
              Ur(a)
                ? ((l = cl(a, l)), (e.tag = 1), (e = Zs(null, e, a, l, t)))
                : ((e.tag = 0), (e = lr(null, e, a, l, t)));
            else {
              if (a != null) {
                var u = a.$$typeof;
                if (u === br) {
                  ((e.tag = 11), (e = Gs(null, e, a, l, t)));
                  break a;
                } else if (u === Sr) {
                  ((e.tag = 14), (e = Ps(null, e, a, l, t)));
                  break a;
                }
              }
              throw ((e = Tf(a) || a), Error(k(306, e, "")));
            }
          }
          return e;
        case 0:
          return lr(a, e, e.type, e.pendingProps, t);
        case 1:
          return ((l = e.type), (u = cl(l, e.pendingProps)), Zs(a, e, l, u, t));
        case 3:
          a: {
            if ((Td(e, e.stateNode.containerInfo), a === null)) throw Error(k(387));
            l = e.pendingProps;
            var o = e.memoizedState;
            ((u = o.element), Wf(a, e), Yu(e, l, null, t));
            var i = e.memoizedState;
            if (
              ((l = i.cache),
              It(e, Ha, l),
              l !== o.cache && Jf(e, [Ha], t, !0),
              Wu(),
              (l = i.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: l, isDehydrated: !1, cache: i.cache }),
                (e.updateQueue.baseState = o),
                (e.memoizedState = o),
                e.flags & 256)
              ) {
                e = Ws(a, e, l, t);
                break a;
              } else if (l !== u) {
                ((u = Te(Error(k(424)), e)), fo(u), (e = Ws(a, e, l, t)));
                break a;
              } else
                for (
                  a = e.stateNode.containerInfo,
                    a.nodeType === 9
                      ? (a = a.body)
                      : (a = a.nodeName === "HTML" ? a.ownerDocument.body : a),
                    wa = Re(a.firstChild),
                    Ka = e,
                    oa = !0,
                    Nt = null,
                    De = !0,
                    t = b1(e, null, l, t),
                    e.child = t;
                  t;
                )
                  ((t.flags = (t.flags & -3) | 4096), (t = t.sibling));
            else {
              if ((fl(), l === u)) {
                e = mt(a, e, t);
                break a;
              }
              Wa(a, e, l, t);
            }
            e = e.child;
          }
          return e;
        case 26:
          return (
            Cd(a, e),
            a === null
              ? (t = vc(e.type, null, e.pendingProps, null))
                ? (e.memoizedState = t)
                : oa ||
                  ((t = e.type),
                  (a = e.pendingProps),
                  (l = _d(Rt.current).createElement(t)),
                  (l[Ya] = e),
                  (l[ne] = a),
                  _a(l, t, a),
                  Qa(l),
                  (e.stateNode = l))
              : (e.memoizedState = vc(e.type, a.memoizedProps, e.pendingProps, a.memoizedState)),
            null
          );
        case 27:
          return (
            Bf(e),
            a === null &&
              oa &&
              ((l = e.stateNode = t0(e.type, e.pendingProps, Rt.current)),
              (Ka = e),
              (De = !0),
              (u = wa),
              Zt(e.type) ? ((Lr = u), (wa = Re(l.firstChild))) : (wa = u)),
            Wa(a, e, e.pendingProps.children, t),
            Cd(a, e),
            a === null && (e.flags |= 4194304),
            e.child
          );
        case 5:
          return (
            a === null &&
              oa &&
              ((u = l = wa) &&
                ((l = rp(l, e.type, e.pendingProps, De)),
                l !== null
                  ? ((e.stateNode = l), (Ka = e), (wa = Re(l.firstChild)), (De = !1), (u = !0))
                  : (u = !1)),
              u || Pt(e)),
            Bf(e),
            (u = e.type),
            (o = e.pendingProps),
            (i = a !== null ? a.memoizedProps : null),
            (l = o.children),
            mr(u, o) ? (l = null) : i !== null && mr(u, i) && (e.flags |= 32),
            e.memoizedState !== null && ((u = Xr(a, e, k4, null, null, t)), (mo._currentValue = u)),
            Cd(a, e),
            Wa(a, e, l, t),
            e.child
          );
        case 6:
          return (
            a === null &&
              oa &&
              ((a = t = wa) &&
                ((t = np(t, e.pendingProps, De)),
                t !== null ? ((e.stateNode = t), (Ka = e), (wa = null), (a = !0)) : (a = !1)),
              a || Pt(e)),
            null
          );
        case 13:
          return n2(a, e, t);
        case 4:
          return (
            Td(e, e.stateNode.containerInfo),
            (l = e.pendingProps),
            a === null ? (e.child = nl(e, null, l, t)) : Wa(a, e, l, t),
            e.child
          );
        case 11:
          return Gs(a, e, e.type, e.pendingProps, t);
        case 7:
          return (Wa(a, e, e.pendingProps, t), e.child);
        case 8:
          return (Wa(a, e, e.pendingProps.children, t), e.child);
        case 12:
          return (Wa(a, e, e.pendingProps.children, t), e.child);
        case 10:
          return ((l = e.pendingProps), It(e, e.type, l.value), Wa(a, e, l.children, t), e.child);
        case 9:
          return (
            (u = e.type._context),
            (l = e.pendingProps.children),
            rl(e),
            (u = ja(u)),
            (l = l(u)),
            (e.flags |= 1),
            Wa(a, e, l, t),
            e.child
          );
        case 14:
          return Ps(a, e, e.type, e.pendingProps, t);
        case 15:
          return f2(a, e, e.type, e.pendingProps, t);
        case 19:
          return s2(a, e, t);
        case 31:
          return N4(a, e, t);
        case 22:
          return r2(a, e, t, e.pendingProps);
        case 24:
          return (
            rl(e),
            (l = ja(Ha)),
            a === null
              ? ((u = Fr()),
                u === null &&
                  ((u = Ca),
                  (o = Er()),
                  (u.pooledCache = o),
                  o.refCount++,
                  o !== null && (u.pooledCacheLanes |= t),
                  (u = o)),
                (e.memoizedState = { parent: l, cache: u }),
                Vr(e),
                It(e, Ha, u))
              : ((a.lanes & t) !== 0 && (Wf(a, e), Yu(e, null, null, t), Wu()),
                (u = a.memoizedState),
                (o = e.memoizedState),
                u.parent !== l
                  ? ((u = { parent: l, cache: l }),
                    (e.memoizedState = u),
                    e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u),
                    It(e, Ha, l))
                  : ((l = o.cache), It(e, Ha, l), l !== u.cache && Jf(e, [Ha], t, !0))),
            Wa(a, e, e.pendingProps.children, t),
            e.child
          );
        case 29:
          throw e.pendingProps;
      }
      throw Error(k(156, e.tag));
    }
    function $e(a) {
      a.flags |= 4;
    }
    function hf(a, e, t, l, u) {
      if (((e = (a.mode & 32) !== 0) && (e = !1), e)) {
        if (((a.flags |= 16777216), (u & 335544128) === u))
          if (a.stateNode.complete) a.flags |= 8192;
          else if (O2()) a.flags |= 8192;
          else throw ((dl = Ed), Hr);
      } else a.flags &= -16777217;
    }
    function Ks(a, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) a.flags &= -16777217;
      else if (((a.flags |= 16777216), !o0(e)))
        if (O2()) a.flags |= 8192;
        else throw ((dl = Ed), Hr);
    }
    function id(a, e) {
      (e !== null && (a.flags |= 4),
        a.flags & 16384 && ((e = a.tag !== 22 ? zc() : 536870912), (a.lanes |= e), (uu |= e)));
    }
    function Nu(a, e) {
      if (!oa)
        switch (a.tailMode) {
          case "hidden":
            e = a.tail;
            for (var t = null; e !== null;) (e.alternate !== null && (t = e), (e = e.sibling));
            t === null ? (a.tail = null) : (t.sibling = null);
            break;
          case "collapsed":
            t = a.tail;
            for (var l = null; t !== null;) (t.alternate !== null && (l = t), (t = t.sibling));
            l === null
              ? e || a.tail === null
                ? (a.tail = null)
                : (a.tail.sibling = null)
              : (l.sibling = null);
        }
    }
    function Ma(a) {
      var e = a.alternate !== null && a.alternate.child === a.child,
        t = 0,
        l = 0;
      if (e)
        for (var u = a.child; u !== null;)
          ((t |= u.lanes | u.childLanes),
            (l |= u.subtreeFlags & 65011712),
            (l |= u.flags & 65011712),
            (u.return = a),
            (u = u.sibling));
      else
        for (u = a.child; u !== null;)
          ((t |= u.lanes | u.childLanes),
            (l |= u.subtreeFlags),
            (l |= u.flags),
            (u.return = a),
            (u = u.sibling));
      return ((a.subtreeFlags |= l), (a.childLanes = t), e);
    }
    function O4(a, e, t) {
      var l = e.pendingProps;
      switch ((zr(e), e.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Ma(e), null);
        case 1:
          return (Ma(e), null);
        case 3:
          return (
            (t = e.stateNode),
            (l = null),
            a !== null && (l = a.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            rt(Ha),
            _l(),
            t.pendingContext && ((t.context = t.pendingContext), (t.pendingContext = null)),
            (a === null || a.child === null) &&
              (wl(e)
                ? $e(e)
                : a === null ||
                  (a.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                  ((e.flags |= 1024), of())),
            Ma(e),
            null
          );
        case 26:
          var u = e.type,
            o = e.memoizedState;
          return (
            a === null
              ? ($e(e), o !== null ? (Ma(e), Ks(e, o)) : (Ma(e), hf(e, u, null, l, t)))
              : o
                ? o !== a.memoizedState
                  ? ($e(e), Ma(e), Ks(e, o))
                  : (Ma(e), (e.flags &= -16777217))
                : ((a = a.memoizedProps), a !== l && $e(e), Ma(e), hf(e, u, a, l, t)),
            null
          );
        case 27:
          if ((Dd(e), (t = Rt.current), (u = e.type), a !== null && e.stateNode != null))
            a.memoizedProps !== l && $e(e);
          else {
            if (!l) {
              if (e.stateNode === null) throw Error(k(166));
              return (Ma(e), null);
            }
            ((a = Je.current), wl(e) ? As(e, a) : ((a = t0(u, l, t)), (e.stateNode = a), $e(e)));
          }
          return (Ma(e), null);
        case 5:
          if ((Dd(e), (u = e.type), a !== null && e.stateNode != null))
            a.memoizedProps !== l && $e(e);
          else {
            if (!l) {
              if (e.stateNode === null) throw Error(k(166));
              return (Ma(e), null);
            }
            if (((o = Je.current), wl(e))) As(e, o);
            else {
              var i = _d(Rt.current);
              switch (o) {
                case 1:
                  o = i.createElementNS("http://www.w3.org/2000/svg", u);
                  break;
                case 2:
                  o = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                  break;
                default:
                  switch (u) {
                    case "svg":
                      o = i.createElementNS("http://www.w3.org/2000/svg", u);
                      break;
                    case "math":
                      o = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                      break;
                    case "script":
                      ((o = i.createElement("div")),
                        (o.innerHTML = "<script><\/script>"),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case "select":
                      ((o =
                        typeof l.is == "string"
                          ? i.createElement("select", { is: l.is })
                          : i.createElement("select")),
                        l.multiple ? (o.multiple = !0) : l.size && (o.size = l.size));
                      break;
                    default:
                      o =
                        typeof l.is == "string"
                          ? i.createElement(u, { is: l.is })
                          : i.createElement(u);
                  }
              }
              ((o[Ya] = e), (o[ne] = l));
              a: for (i = e.child; i !== null;) {
                if (i.tag === 5 || i.tag === 6) o.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  ((i.child.return = i), (i = i.child));
                  continue;
                }
                if (i === e) break a;
                for (; i.sibling === null;) {
                  if (i.return === null || i.return === e) break a;
                  i = i.return;
                }
                ((i.sibling.return = i.return), (i = i.sibling));
              }
              e.stateNode = o;
              a: switch ((_a(o, u, l), u)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break a;
                case "img":
                  l = !0;
                  break a;
                default:
                  l = !1;
              }
              l && $e(e);
            }
          }
          return (
            Ma(e),
            hf(e, e.type, a === null ? null : a.memoizedProps, e.pendingProps, t),
            null
          );
        case 6:
          if (a && e.stateNode != null) a.memoizedProps !== l && $e(e);
          else {
            if (typeof l != "string" && e.stateNode === null) throw Error(k(166));
            if (((a = Rt.current), wl(e))) {
              if (((a = e.stateNode), (t = e.memoizedProps), (l = null), (u = Ka), u !== null))
                switch (u.tag) {
                  case 27:
                  case 5:
                    l = u.memoizedProps;
                }
              ((a[Ya] = e),
                (a = !!(
                  a.nodeValue === t ||
                  (l !== null && l.suppressHydrationWarning === !0) ||
                  _2(a.nodeValue, t)
                )),
                a || Pt(e, !0));
            } else ((a = _d(a).createTextNode(l)), (a[Ya] = e), (e.stateNode = a));
          }
          return (Ma(e), null);
        case 31:
          if (((t = e.memoizedState), a === null || a.memoizedState !== null)) {
            if (((l = wl(e)), t !== null)) {
              if (a === null) {
                if (!l) throw Error(k(318));
                if (((a = e.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                  throw Error(k(557));
                a[Ya] = e;
              } else (fl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
              (Ma(e), (a = !1));
            } else
              ((t = of()),
                a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = t),
                (a = !0));
            if (!a) return e.flags & 256 ? (me(e), e) : (me(e), null);
            if ((e.flags & 128) !== 0) throw Error(k(558));
          }
          return (Ma(e), null);
        case 13:
          if (
            ((l = e.memoizedState),
            a === null || (a.memoizedState !== null && a.memoizedState.dehydrated !== null))
          ) {
            if (((u = wl(e)), l !== null && l.dehydrated !== null)) {
              if (a === null) {
                if (!u) throw Error(k(318));
                if (((u = e.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                  throw Error(k(317));
                u[Ya] = e;
              } else (fl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
              (Ma(e), (u = !1));
            } else
              ((u = of()),
                a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = u),
                (u = !0));
            if (!u) return e.flags & 256 ? (me(e), e) : (me(e), null);
          }
          return (
            me(e),
            (e.flags & 128) !== 0
              ? ((e.lanes = t), e)
              : ((t = l !== null),
                (a = a !== null && a.memoizedState !== null),
                t &&
                  ((l = e.child),
                  (u = null),
                  l.alternate !== null &&
                    l.alternate.memoizedState !== null &&
                    l.alternate.memoizedState.cachePool !== null &&
                    (u = l.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  l.memoizedState !== null &&
                    l.memoizedState.cachePool !== null &&
                    (o = l.memoizedState.cachePool.pool),
                  o !== u && (l.flags |= 2048)),
                t !== a && t && (e.child.flags |= 8192),
                id(e, e.updateQueue),
                Ma(e),
                null)
          );
        case 4:
          return (_l(), a === null && sn(e.stateNode.containerInfo), Ma(e), null);
        case 10:
          return (rt(e.type), Ma(e), null);
        case 19:
          if ((Ja(Oa), (l = e.memoizedState), l === null)) return (Ma(e), null);
          if (((u = (e.flags & 128) !== 0), (o = l.rendering), o === null))
            if (u) Nu(l, !1);
            else {
              if (Ua !== 0 || (a !== null && (a.flags & 128) !== 0))
                for (a = e.child; a !== null;) {
                  if (((o = Hd(a)), o !== null)) {
                    for (
                      e.flags |= 128,
                        Nu(l, !1),
                        a = o.updateQueue,
                        e.updateQueue = a,
                        id(e, a),
                        e.subtreeFlags = 0,
                        a = t,
                        t = e.child;
                      t !== null;
                    )
                      (p1(t, a), (t = t.sibling));
                    return (Aa(Oa, (Oa.current & 1) | 2), oa && lt(e, l.treeForkCount), e.child);
                  }
                  a = a.sibling;
                }
              l.tail !== null &&
                ve() > Jd &&
                ((e.flags |= 128), (u = !0), Nu(l, !1), (e.lanes = 4194304));
            }
          else {
            if (!u)
              if (((a = Hd(o)), a !== null)) {
                if (
                  ((e.flags |= 128),
                  (u = !0),
                  (a = a.updateQueue),
                  (e.updateQueue = a),
                  id(e, a),
                  Nu(l, !0),
                  l.tail === null && l.tailMode === "hidden" && !o.alternate && !oa)
                )
                  return (Ma(e), null);
              } else
                2 * ve() - l.renderingStartTime > Jd &&
                  t !== 536870912 &&
                  ((e.flags |= 128), (u = !0), Nu(l, !1), (e.lanes = 4194304));
            l.isBackwards
              ? ((o.sibling = e.child), (e.child = o))
              : ((a = l.last), a !== null ? (a.sibling = o) : (e.child = o), (l.last = o));
          }
          return l.tail !== null
            ? ((a = l.tail),
              (l.rendering = a),
              (l.tail = a.sibling),
              (l.renderingStartTime = ve()),
              (a.sibling = null),
              (t = Oa.current),
              Aa(Oa, u ? (t & 1) | 2 : t & 1),
              oa && lt(e, l.treeForkCount),
              a)
            : (Ma(e), null);
        case 22:
        case 23:
          return (
            me(e),
            Gr(),
            (l = e.memoizedState !== null),
            a !== null
              ? (a.memoizedState !== null) !== l && (e.flags |= 8192)
              : l && (e.flags |= 8192),
            l
              ? (t & 536870912) !== 0 &&
                (e.flags & 128) === 0 &&
                (Ma(e), e.subtreeFlags & 6 && (e.flags |= 8192))
              : Ma(e),
            (t = e.updateQueue),
            t !== null && id(e, t.retryQueue),
            (t = null),
            a !== null &&
              a.memoizedState !== null &&
              a.memoizedState.cachePool !== null &&
              (t = a.memoizedState.cachePool.pool),
            (l = null),
            e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (l = e.memoizedState.cachePool.pool),
            l !== t && (e.flags |= 2048),
            a !== null && Ja(ol),
            null
          );
        case 24:
          return (
            (t = null),
            a !== null && (t = a.memoizedState.cache),
            e.memoizedState.cache !== t && (e.flags |= 2048),
            rt(Ha),
            Ma(e),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(k(156, e.tag));
    }
    function z4(a, e) {
      switch ((zr(e), e.tag)) {
        case 1:
          return ((a = e.flags), a & 65536 ? ((e.flags = (a & -65537) | 128), e) : null);
        case 3:
          return (
            rt(Ha),
            _l(),
            (a = e.flags),
            (a & 65536) !== 0 && (a & 128) === 0 ? ((e.flags = (a & -65537) | 128), e) : null
          );
        case 26:
        case 27:
        case 5:
          return (Dd(e), null);
        case 31:
          if (e.memoizedState !== null) {
            if ((me(e), e.alternate === null)) throw Error(k(340));
            fl();
          }
          return ((a = e.flags), a & 65536 ? ((e.flags = (a & -65537) | 128), e) : null);
        case 13:
          if ((me(e), (a = e.memoizedState), a !== null && a.dehydrated !== null)) {
            if (e.alternate === null) throw Error(k(340));
            fl();
          }
          return ((a = e.flags), a & 65536 ? ((e.flags = (a & -65537) | 128), e) : null);
        case 19:
          return (Ja(Oa), null);
        case 4:
          return (_l(), null);
        case 10:
          return (rt(e.type), null);
        case 22:
        case 23:
          return (
            me(e),
            Gr(),
            a !== null && Ja(ol),
            (a = e.flags),
            a & 65536 ? ((e.flags = (a & -65537) | 128), e) : null
          );
        case 24:
          return (rt(Ha), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function p2(a, e) {
      switch ((zr(e), e.tag)) {
        case 3:
          (rt(Ha), _l());
          break;
        case 26:
        case 27:
        case 5:
          Dd(e);
          break;
        case 4:
          _l();
          break;
        case 31:
          e.memoizedState !== null && me(e);
          break;
        case 13:
          me(e);
          break;
        case 19:
          Ja(Oa);
          break;
        case 10:
          rt(e.type);
          break;
        case 22:
        case 23:
          (me(e), Gr(), a !== null && Ja(ol));
          break;
        case 24:
          rt(Ha);
      }
    }
    function Ao(a, e) {
      try {
        var t = e.updateQueue,
          l = t !== null ? t.lastEffect : null;
        if (l !== null) {
          var u = l.next;
          t = u;
          do {
            if ((t.tag & a) === a) {
              l = void 0;
              var o = t.create,
                i = t.inst;
              ((l = o()), (i.destroy = l));
            }
            t = t.next;
          } while (t !== u);
        }
      } catch (f) {
        La(e, e.return, f);
      }
    }
    function Xt(a, e, t) {
      try {
        var l = e.updateQueue,
          u = l !== null ? l.lastEffect : null;
        if (u !== null) {
          var o = u.next;
          l = o;
          do {
            if ((l.tag & a) === a) {
              var i = l.inst,
                f = i.destroy;
              if (f !== void 0) {
                ((i.destroy = void 0), (u = e));
                var r = t,
                  c = f;
                try {
                  c();
                } catch (g) {
                  La(u, r, g);
                }
              }
            }
            l = l.next;
          } while (l !== o);
        }
      } catch (g) {
        La(e, e.return, g);
      }
    }
    function m2(a) {
      var e = a.updateQueue;
      if (e !== null) {
        var t = a.stateNode;
        try {
          C1(e, t);
        } catch (l) {
          La(a, a.return, l);
        }
      }
    }
    function h2(a, e, t) {
      ((t.props = cl(a.type, a.memoizedProps)), (t.state = a.memoizedState));
      try {
        t.componentWillUnmount();
      } catch (l) {
        La(a, e, l);
      }
    }
    function ju(a, e) {
      try {
        var t = a.ref;
        if (t !== null) {
          switch (a.tag) {
            case 26:
            case 27:
            case 5:
              var l = a.stateNode;
              break;
            case 30:
              l = a.stateNode;
              break;
            default:
              l = a.stateNode;
          }
          typeof t == "function" ? (a.refCleanup = t(l)) : (t.current = l);
        }
      } catch (u) {
        La(a, e, u);
      }
    }
    function Qe(a, e) {
      var t = a.ref,
        l = a.refCleanup;
      if (t !== null)
        if (typeof l == "function")
          try {
            l();
          } catch (u) {
            La(a, e, u);
          } finally {
            ((a.refCleanup = null), (a = a.alternate), a != null && (a.refCleanup = null));
          }
        else if (typeof t == "function")
          try {
            t(null);
          } catch (u) {
            La(a, e, u);
          }
        else t.current = null;
    }
    function g2(a) {
      var e = a.type,
        t = a.memoizedProps,
        l = a.stateNode;
      try {
        a: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            t.autoFocus && l.focus();
            break a;
          case "img":
            t.src ? (l.src = t.src) : t.srcSet && (l.srcset = t.srcSet);
        }
      } catch (u) {
        La(a, a.return, u);
      }
    }
    function gf(a, e, t) {
      try {
        var l = a.stateNode;
        (lp(l, a.type, t, e), (l[ne] = e));
      } catch (u) {
        La(a, a.return, u);
      }
    }
    function v2(a) {
      return (
        a.tag === 5 || a.tag === 3 || a.tag === 26 || (a.tag === 27 && Zt(a.type)) || a.tag === 4
      );
    }
    function vf(a) {
      a: for (;;) {
        for (; a.sibling === null;) {
          if (a.return === null || v2(a.return)) return null;
          a = a.return;
        }
        for (
          a.sibling.return = a.return, a = a.sibling;
          a.tag !== 5 && a.tag !== 6 && a.tag !== 18;
        ) {
          if ((a.tag === 27 && Zt(a.type)) || a.flags & 2 || a.child === null || a.tag === 4)
            continue a;
          ((a.child.return = a), (a = a.child));
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function or(a, e, t) {
      var l = a.tag;
      if (l === 5 || l === 6)
        ((a = a.stateNode),
          e
            ? (t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t
              ).insertBefore(a, e)
            : ((e = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t),
              e.appendChild(a),
              (t = t._reactRootContainer),
              t != null || e.onclick !== null || (e.onclick = dt)));
      else if (
        l !== 4 &&
        (l === 27 && Zt(a.type) && ((t = a.stateNode), (e = null)), (a = a.child), a !== null)
      )
        for (or(a, e, t), a = a.sibling; a !== null;) (or(a, e, t), (a = a.sibling));
    }
    function Qd(a, e, t) {
      var l = a.tag;
      if (l === 5 || l === 6) ((a = a.stateNode), e ? t.insertBefore(a, e) : t.appendChild(a));
      else if (l !== 4 && (l === 27 && Zt(a.type) && (t = a.stateNode), (a = a.child), a !== null))
        for (Qd(a, e, t), a = a.sibling; a !== null;) (Qd(a, e, t), (a = a.sibling));
    }
    function L2(a) {
      var e = a.stateNode,
        t = a.memoizedProps;
      try {
        for (var l = a.type, u = e.attributes; u.length;) e.removeAttributeNode(u[0]);
        (_a(e, l, t), (e[Ya] = a), (e[ne] = t));
      } catch (o) {
        La(a, a.return, o);
      }
    }
    var ut = !1,
      Fa = !1,
      Lf = !1,
      js = typeof WeakSet == "function" ? WeakSet : Set,
      Xa = null;
    function E4(a, e) {
      if (((a = a.containerInfo), (cr = ti), (a = o1(a)), Br(a))) {
        if ("selectionStart" in a) var t = { start: a.selectionStart, end: a.selectionEnd };
        else
          a: {
            t = ((t = a.ownerDocument) && t.defaultView) || window;
            var l = t.getSelection && t.getSelection();
            if (l && l.rangeCount !== 0) {
              t = l.anchorNode;
              var u = l.anchorOffset,
                o = l.focusNode;
              l = l.focusOffset;
              try {
                (t.nodeType, o.nodeType);
              } catch {
                t = null;
                break a;
              }
              var i = 0,
                f = -1,
                r = -1,
                c = 0,
                g = 0,
                v = a,
                h = null;
              e: for (;;) {
                for (
                  var x;
                  v !== t || (u !== 0 && v.nodeType !== 3) || (f = i + u),
                    v !== o || (l !== 0 && v.nodeType !== 3) || (r = i + l),
                    v.nodeType === 3 && (i += v.nodeValue.length),
                    (x = v.firstChild) !== null;
                )
                  ((h = v), (v = x));
                for (;;) {
                  if (v === a) break e;
                  if (
                    (h === t && ++c === u && (f = i),
                    h === o && ++g === l && (r = i),
                    (x = v.nextSibling) !== null)
                  )
                    break;
                  ((v = h), (h = v.parentNode));
                }
                v = x;
              }
              t = f === -1 || r === -1 ? null : { start: f, end: r };
            } else t = null;
          }
        t = t || { start: 0, end: 0 };
      } else t = null;
      for (pr = { focusedElem: a, selectionRange: t }, ti = !1, Xa = e; Xa !== null;)
        if (((e = Xa), (a = e.child), (e.subtreeFlags & 1028) !== 0 && a !== null))
          ((a.return = e), (Xa = a));
        else
          for (; Xa !== null;) {
            switch (((e = Xa), (o = e.alternate), (a = e.flags), e.tag)) {
              case 0:
                if (
                  (a & 4) !== 0 &&
                  ((a = e.updateQueue), (a = a !== null ? a.events : null), a !== null)
                )
                  for (t = 0; t < a.length; t++) ((u = a[t]), (u.ref.impl = u.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((a & 1024) !== 0 && o !== null) {
                  ((a = void 0),
                    (t = e),
                    (u = o.memoizedProps),
                    (o = o.memoizedState),
                    (l = t.stateNode));
                  try {
                    var I = cl(t.type, u);
                    ((a = l.getSnapshotBeforeUpdate(I, o)),
                      (l.__reactInternalSnapshotBeforeUpdate = a));
                  } catch (q) {
                    La(t, t.return, q);
                  }
                }
                break;
              case 3:
                if ((a & 1024) !== 0) {
                  if (((a = e.stateNode.containerInfo), (t = a.nodeType), t === 9)) hr(a);
                  else if (t === 1)
                    switch (a.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        hr(a);
                        break;
                      default:
                        a.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((a & 1024) !== 0) throw Error(k(163));
            }
            if (((a = e.sibling), a !== null)) {
              ((a.return = e.return), (Xa = a));
              break;
            }
            Xa = e.return;
          }
    }
    function x2(a, e, t) {
      var l = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (et(a, t), l & 4 && Ao(5, t));
          break;
        case 1:
          if ((et(a, t), l & 4))
            if (((a = t.stateNode), e === null))
              try {
                a.componentDidMount();
              } catch (i) {
                La(t, t.return, i);
              }
            else {
              var u = cl(t.type, e.memoizedProps);
              e = e.memoizedState;
              try {
                a.componentDidUpdate(u, e, a.__reactInternalSnapshotBeforeUpdate);
              } catch (i) {
                La(t, t.return, i);
              }
            }
          (l & 64 && m2(t), l & 512 && ju(t, t.return));
          break;
        case 3:
          if ((et(a, t), l & 64 && ((a = t.updateQueue), a !== null))) {
            if (((e = null), t.child !== null))
              switch (t.child.tag) {
                case 27:
                case 5:
                  e = t.child.stateNode;
                  break;
                case 1:
                  e = t.child.stateNode;
              }
            try {
              C1(a, e);
            } catch (i) {
              La(t, t.return, i);
            }
          }
          break;
        case 27:
          e === null && l & 4 && L2(t);
        case 26:
        case 5:
          (et(a, t), e === null && l & 4 && g2(t), l & 512 && ju(t, t.return));
          break;
        case 12:
          et(a, t);
          break;
        case 31:
          (et(a, t), l & 4 && S2(a, t));
          break;
        case 13:
          (et(a, t),
            l & 4 && C2(a, t),
            l & 64 &&
              ((a = t.memoizedState),
              a !== null &&
                ((a = a.dehydrated), a !== null && ((t = Z4.bind(null, t)), sp(a, t)))));
          break;
        case 22:
          if (((l = t.memoizedState !== null || ut), !l)) {
            ((e = (e !== null && e.memoizedState !== null) || Fa), (u = ut));
            var o = Fa;
            ((ut = l),
              (Fa = e) && !o ? tt(a, t, (t.subtreeFlags & 8772) !== 0) : et(a, t),
              (ut = u),
              (Fa = o));
          }
          break;
        case 30:
          break;
        default:
          et(a, t);
      }
    }
    function y2(a) {
      var e = a.alternate;
      (e !== null && ((a.alternate = null), y2(e)),
        (a.child = null),
        (a.deletions = null),
        (a.sibling = null),
        a.tag === 5 && ((e = a.stateNode), e !== null && kr(e)),
        (a.stateNode = null),
        (a.return = null),
        (a.dependencies = null),
        (a.memoizedProps = null),
        (a.memoizedState = null),
        (a.pendingProps = null),
        (a.stateNode = null),
        (a.updateQueue = null));
    }
    var Ra = null,
      ie = !1;
    function at(a, e, t) {
      for (t = t.child; t !== null;) (b2(a, e, t), (t = t.sibling));
    }
    function b2(a, e, t) {
      if (Le && typeof Le.onCommitFiberUnmount == "function")
        try {
          Le.onCommitFiberUnmount(Lo, t);
        } catch {}
      switch (t.tag) {
        case 26:
          (Fa || Qe(t, e),
            at(a, e, t),
            t.memoizedState
              ? t.memoizedState.count--
              : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t)));
          break;
        case 27:
          Fa || Qe(t, e);
          var l = Ra,
            u = ie;
          (Zt(t.type) && ((Ra = t.stateNode), (ie = !1)),
            at(a, e, t),
            eo(t.stateNode),
            (Ra = l),
            (ie = u));
          break;
        case 5:
          Fa || Qe(t, e);
        case 6:
          if (((l = Ra), (u = ie), (Ra = null), at(a, e, t), (Ra = l), (ie = u), Ra !== null))
            if (ie)
              try {
                (Ra.nodeType === 9
                  ? Ra.body
                  : Ra.nodeName === "HTML"
                    ? Ra.ownerDocument.body
                    : Ra
                ).removeChild(t.stateNode);
              } catch (o) {
                La(t, e, o);
              }
            else
              try {
                Ra.removeChild(t.stateNode);
              } catch (o) {
                La(t, e, o);
              }
          break;
        case 18:
          Ra !== null &&
            (ie
              ? ((a = Ra),
                cc(
                  a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
                  t.stateNode,
                ),
                fu(a))
              : cc(Ra, t.stateNode));
          break;
        case 4:
          ((l = Ra),
            (u = ie),
            (Ra = t.stateNode.containerInfo),
            (ie = !0),
            at(a, e, t),
            (Ra = l),
            (ie = u));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Xt(2, t, e), Fa || Xt(4, t, e), at(a, e, t));
          break;
        case 1:
          (Fa ||
            (Qe(t, e),
            (l = t.stateNode),
            typeof l.componentWillUnmount == "function" && h2(t, e, l)),
            at(a, e, t));
          break;
        case 21:
          at(a, e, t);
          break;
        case 22:
          ((Fa = (l = Fa) || t.memoizedState !== null), at(a, e, t), (Fa = l));
          break;
        default:
          at(a, e, t);
      }
    }
    function S2(a, e) {
      if (
        e.memoizedState === null &&
        ((a = e.alternate), a !== null && ((a = a.memoizedState), a !== null))
      ) {
        a = a.dehydrated;
        try {
          fu(a);
        } catch (t) {
          La(e, e.return, t);
        }
      }
    }
    function C2(a, e) {
      if (
        e.memoizedState === null &&
        ((a = e.alternate),
        a !== null && ((a = a.memoizedState), a !== null && ((a = a.dehydrated), a !== null)))
      )
        try {
          fu(a);
        } catch (t) {
          La(e, e.return, t);
        }
    }
    function F4(a) {
      switch (a.tag) {
        case 31:
        case 13:
        case 19:
          var e = a.stateNode;
          return (e === null && (e = a.stateNode = new js()), e);
        case 22:
          return (
            (a = a.stateNode),
            (e = a._retryCache),
            e === null && (e = a._retryCache = new js()),
            e
          );
        default:
          throw Error(k(435, a.tag));
      }
    }
    function fd(a, e) {
      var t = F4(a);
      e.forEach(function (l) {
        if (!t.has(l)) {
          t.add(l);
          var u = W4.bind(null, a, l);
          l.then(u, u);
        }
      });
    }
    function oe(a, e) {
      var t = e.deletions;
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var u = t[l],
            o = a,
            i = e,
            f = i;
          a: for (; f !== null;) {
            switch (f.tag) {
              case 27:
                if (Zt(f.type)) {
                  ((Ra = f.stateNode), (ie = !1));
                  break a;
                }
                break;
              case 5:
                ((Ra = f.stateNode), (ie = !1));
                break a;
              case 3:
              case 4:
                ((Ra = f.stateNode.containerInfo), (ie = !0));
                break a;
            }
            f = f.return;
          }
          if (Ra === null) throw Error(k(160));
          (b2(o, i, u),
            (Ra = null),
            (ie = !1),
            (o = u.alternate),
            o !== null && (o.return = null),
            (u.return = null));
        }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null;) (I2(e, a), (e = e.sibling));
    }
    var Fe = null;
    function I2(a, e) {
      var t = a.alternate,
        l = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (oe(e, a), de(a), l & 4 && (Xt(3, a, a.return), Ao(3, a), Xt(5, a, a.return)));
          break;
        case 1:
          (oe(e, a),
            de(a),
            l & 512 && (Fa || t === null || Qe(t, t.return)),
            l & 64 &&
              ut &&
              ((a = a.updateQueue),
              a !== null &&
                ((l = a.callbacks),
                l !== null &&
                  ((t = a.shared.hiddenCallbacks),
                  (a.shared.hiddenCallbacks = t === null ? l : t.concat(l))))));
          break;
        case 26:
          var u = Fe;
          if ((oe(e, a), de(a), l & 512 && (Fa || t === null || Qe(t, t.return)), l & 4)) {
            var o = t !== null ? t.memoizedState : null;
            if (((l = a.memoizedState), t === null))
              if (l === null)
                if (a.stateNode === null) {
                  a: {
                    ((l = a.type), (t = a.memoizedProps), (u = u.ownerDocument || u));
                    e: switch (l) {
                      case "title":
                        ((o = u.getElementsByTagName("title")[0]),
                          (!o ||
                            o[bo] ||
                            o[Ya] ||
                            o.namespaceURI === "http://www.w3.org/2000/svg" ||
                            o.hasAttribute("itemprop")) &&
                            ((o = u.createElement(l)),
                            u.head.insertBefore(o, u.querySelector("head > title"))),
                          _a(o, l, t),
                          (o[Ya] = a),
                          Qa(o),
                          (l = o));
                        break a;
                      case "link":
                        var i = xc("link", "href", u).get(l + (t.href || ""));
                        if (i) {
                          for (var f = 0; f < i.length; f++)
                            if (
                              ((o = i[f]),
                              o.getAttribute("href") ===
                                (t.href == null || t.href === "" ? null : t.href) &&
                                o.getAttribute("rel") === (t.rel == null ? null : t.rel) &&
                                o.getAttribute("title") === (t.title == null ? null : t.title) &&
                                o.getAttribute("crossorigin") ===
                                  (t.crossOrigin == null ? null : t.crossOrigin))
                            ) {
                              i.splice(f, 1);
                              break e;
                            }
                        }
                        ((o = u.createElement(l)), _a(o, l, t), u.head.appendChild(o));
                        break;
                      case "meta":
                        if ((i = xc("meta", "content", u).get(l + (t.content || "")))) {
                          for (f = 0; f < i.length; f++)
                            if (
                              ((o = i[f]),
                              o.getAttribute("content") ===
                                (t.content == null ? null : "" + t.content) &&
                                o.getAttribute("name") === (t.name == null ? null : t.name) &&
                                o.getAttribute("property") ===
                                  (t.property == null ? null : t.property) &&
                                o.getAttribute("http-equiv") ===
                                  (t.httpEquiv == null ? null : t.httpEquiv) &&
                                o.getAttribute("charset") ===
                                  (t.charSet == null ? null : t.charSet))
                            ) {
                              i.splice(f, 1);
                              break e;
                            }
                        }
                        ((o = u.createElement(l)), _a(o, l, t), u.head.appendChild(o));
                        break;
                      default:
                        throw Error(k(468, l));
                    }
                    ((o[Ya] = a), Qa(o), (l = o));
                  }
                  a.stateNode = l;
                } else yc(u, a.type, a.stateNode);
              else a.stateNode = Lc(u, l, a.memoizedProps);
            else
              o !== l
                ? (o === null
                    ? t.stateNode !== null && ((t = t.stateNode), t.parentNode.removeChild(t))
                    : o.count--,
                  l === null ? yc(u, a.type, a.stateNode) : Lc(u, l, a.memoizedProps))
                : l === null && a.stateNode !== null && gf(a, a.memoizedProps, t.memoizedProps);
          }
          break;
        case 27:
          (oe(e, a),
            de(a),
            l & 512 && (Fa || t === null || Qe(t, t.return)),
            t !== null && l & 4 && gf(a, a.memoizedProps, t.memoizedProps));
          break;
        case 5:
          if ((oe(e, a), de(a), l & 512 && (Fa || t === null || Qe(t, t.return)), a.flags & 32)) {
            u = a.stateNode;
            try {
              au(u, "");
            } catch (I) {
              La(a, a.return, I);
            }
          }
          (l & 4 &&
            a.stateNode != null &&
            ((u = a.memoizedProps), gf(a, u, t !== null ? t.memoizedProps : u)),
            l & 1024 && (Lf = !0));
          break;
        case 6:
          if ((oe(e, a), de(a), l & 4)) {
            if (a.stateNode === null) throw Error(k(162));
            ((l = a.memoizedProps), (t = a.stateNode));
            try {
              t.nodeValue = l;
            } catch (I) {
              La(a, a.return, I);
            }
          }
          break;
        case 3:
          if (
            ((kd = null),
            (u = Fe),
            (Fe = $d(e.containerInfo)),
            oe(e, a),
            (Fe = u),
            de(a),
            l & 4 && t !== null && t.memoizedState.isDehydrated)
          )
            try {
              fu(e.containerInfo);
            } catch (I) {
              La(a, a.return, I);
            }
          Lf && ((Lf = !1), A2(a));
          break;
        case 4:
          ((l = Fe), (Fe = $d(a.stateNode.containerInfo)), oe(e, a), de(a), (Fe = l));
          break;
        case 12:
          (oe(e, a), de(a));
          break;
        case 31:
          (oe(e, a),
            de(a),
            l & 4 && ((l = a.updateQueue), l !== null && ((a.updateQueue = null), fd(a, l))));
          break;
        case 13:
          (oe(e, a),
            de(a),
            a.child.flags & 8192 &&
              (a.memoizedState !== null) != (t !== null && t.memoizedState !== null) &&
              (hi = ve()),
            l & 4 && ((l = a.updateQueue), l !== null && ((a.updateQueue = null), fd(a, l))));
          break;
        case 22:
          u = a.memoizedState !== null;
          var r = t !== null && t.memoizedState !== null,
            c = ut,
            g = Fa;
          if (((ut = c || u), (Fa = g || r), oe(e, a), (Fa = g), (ut = c), de(a), l & 8192))
            a: for (
              e = a.stateNode,
                e._visibility = u ? e._visibility & -2 : e._visibility | 1,
                u && (t === null || r || ut || Fa || tl(a)),
                t = null,
                e = a;
              ;
            ) {
              if (e.tag === 5 || e.tag === 26) {
                if (t === null) {
                  r = t = e;
                  try {
                    if (((o = r.stateNode), u))
                      ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"));
                    else {
                      f = r.stateNode;
                      var v = r.memoizedProps.style,
                        h = v != null && v.hasOwnProperty("display") ? v.display : null;
                      f.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                    }
                  } catch (I) {
                    La(r, r.return, I);
                  }
                }
              } else if (e.tag === 6) {
                if (t === null) {
                  r = e;
                  try {
                    r.stateNode.nodeValue = u ? "" : r.memoizedProps;
                  } catch (I) {
                    La(r, r.return, I);
                  }
                }
              } else if (e.tag === 18) {
                if (t === null) {
                  r = e;
                  try {
                    var x = r.stateNode;
                    u ? pc(x, !0) : pc(r.stateNode, !1);
                  } catch (I) {
                    La(r, r.return, I);
                  }
                }
              } else if (
                ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === a) &&
                e.child !== null
              ) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === a) break a;
              for (; e.sibling === null;) {
                if (e.return === null || e.return === a) break a;
                (t === e && (t = null), (e = e.return));
              }
              (t === e && (t = null), (e.sibling.return = e.return), (e = e.sibling));
            }
          l & 4 &&
            ((l = a.updateQueue),
            l !== null && ((t = l.retryQueue), t !== null && ((l.retryQueue = null), fd(a, t))));
          break;
        case 19:
          (oe(e, a),
            de(a),
            l & 4 && ((l = a.updateQueue), l !== null && ((a.updateQueue = null), fd(a, l))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (oe(e, a), de(a));
      }
    }
    function de(a) {
      var e = a.flags;
      if (e & 2) {
        try {
          for (var t, l = a.return; l !== null;) {
            if (v2(l)) {
              t = l;
              break;
            }
            l = l.return;
          }
          if (t == null) throw Error(k(160));
          switch (t.tag) {
            case 27:
              var u = t.stateNode,
                o = vf(a);
              Qd(a, o, u);
              break;
            case 5:
              var i = t.stateNode;
              t.flags & 32 && (au(i, ""), (t.flags &= -33));
              var f = vf(a);
              Qd(a, f, i);
              break;
            case 3:
            case 4:
              var r = t.stateNode.containerInfo,
                c = vf(a);
              or(a, c, r);
              break;
            default:
              throw Error(k(161));
          }
        } catch (g) {
          La(a, a.return, g);
        }
        a.flags &= -3;
      }
      e & 4096 && (a.flags &= -4097);
    }
    function A2(a) {
      if (a.subtreeFlags & 1024)
        for (a = a.child; a !== null;) {
          var e = a;
          (A2(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (a = a.sibling));
        }
    }
    function et(a, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null;) (x2(a, e.alternate, e), (e = e.sibling));
    }
    function tl(a) {
      for (a = a.child; a !== null;) {
        var e = a;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Xt(4, e, e.return), tl(e));
            break;
          case 1:
            Qe(e, e.return);
            var t = e.stateNode;
            (typeof t.componentWillUnmount == "function" && h2(e, e.return, t), tl(e));
            break;
          case 27:
            eo(e.stateNode);
          case 26:
          case 5:
            (Qe(e, e.return), tl(e));
            break;
          case 22:
            e.memoizedState === null && tl(e);
            break;
          case 30:
            tl(e);
            break;
          default:
            tl(e);
        }
        a = a.sibling;
      }
    }
    function tt(a, e, t) {
      for (t = t && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
        var l = e.alternate,
          u = a,
          o = e,
          i = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (tt(u, o, t), Ao(4, o));
            break;
          case 1:
            if ((tt(u, o, t), (l = o), (u = l.stateNode), typeof u.componentDidMount == "function"))
              try {
                u.componentDidMount();
              } catch (c) {
                La(l, l.return, c);
              }
            if (((l = o), (u = l.updateQueue), u !== null)) {
              var f = l.stateNode;
              try {
                var r = u.shared.hiddenCallbacks;
                if (r !== null)
                  for (u.shared.hiddenCallbacks = null, u = 0; u < r.length; u++) S1(r[u], f);
              } catch (c) {
                La(l, l.return, c);
              }
            }
            (t && i & 64 && m2(o), ju(o, o.return));
            break;
          case 27:
            L2(o);
          case 26:
          case 5:
            (tt(u, o, t), t && l === null && i & 4 && g2(o), ju(o, o.return));
            break;
          case 12:
            tt(u, o, t);
            break;
          case 31:
            (tt(u, o, t), t && i & 4 && S2(u, o));
            break;
          case 13:
            (tt(u, o, t), t && i & 4 && C2(u, o));
            break;
          case 22:
            (o.memoizedState === null && tt(u, o, t), ju(o, o.return));
            break;
          case 30:
            break;
          default:
            tt(u, o, t);
        }
        e = e.sibling;
      }
    }
    function un(a, e) {
      var t = null;
      (a !== null &&
        a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (t = a.memoizedState.cachePool.pool),
        (a = null),
        e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (a = e.memoizedState.cachePool.pool),
        a !== t && (a != null && a.refCount++, t != null && Co(t)));
    }
    function on(a, e) {
      ((a = null),
        e.alternate !== null && (a = e.alternate.memoizedState.cache),
        (e = e.memoizedState.cache),
        e !== a && (e.refCount++, a != null && Co(a)));
    }
    function Ee(a, e, t, l) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (k2(a, e, t, l), (e = e.sibling));
    }
    function k2(a, e, t, l) {
      var u = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Ee(a, e, t, l), u & 2048 && Ao(9, e));
          break;
        case 1:
          Ee(a, e, t, l);
          break;
        case 3:
          (Ee(a, e, t, l),
            u & 2048 &&
              ((a = null),
              e.alternate !== null && (a = e.alternate.memoizedState.cache),
              (e = e.memoizedState.cache),
              e !== a && (e.refCount++, a != null && Co(a))));
          break;
        case 12:
          if (u & 2048) {
            (Ee(a, e, t, l), (a = e.stateNode));
            try {
              var o = e.memoizedProps,
                i = o.id,
                f = o.onPostCommit;
              typeof f == "function" &&
                f(i, e.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
            } catch (r) {
              La(e, e.return, r);
            }
          } else Ee(a, e, t, l);
          break;
        case 31:
          Ee(a, e, t, l);
          break;
        case 13:
          Ee(a, e, t, l);
          break;
        case 23:
          break;
        case 22:
          ((o = e.stateNode),
            (i = e.alternate),
            e.memoizedState !== null
              ? o._visibility & 2
                ? Ee(a, e, t, l)
                : _u(a, e)
              : o._visibility & 2
                ? Ee(a, e, t, l)
                : ((o._visibility |= 2), Dl(a, e, t, l, (e.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && un(i, e));
          break;
        case 24:
          (Ee(a, e, t, l), u & 2048 && on(e.alternate, e));
          break;
        default:
          Ee(a, e, t, l);
      }
    }
    function Dl(a, e, t, l, u) {
      for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
        var o = a,
          i = e,
          f = t,
          r = l,
          c = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            (Dl(o, i, f, r, u), Ao(8, i));
            break;
          case 23:
            break;
          case 22:
            var g = i.stateNode;
            (i.memoizedState !== null
              ? g._visibility & 2
                ? Dl(o, i, f, r, u)
                : _u(o, i)
              : ((g._visibility |= 2), Dl(o, i, f, r, u)),
              u && c & 2048 && un(i.alternate, i));
            break;
          case 24:
            (Dl(o, i, f, r, u), u && c & 2048 && on(i.alternate, i));
            break;
          default:
            Dl(o, i, f, r, u);
        }
        e = e.sibling;
      }
    }
    function _u(a, e) {
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) {
          var t = a,
            l = e,
            u = l.flags;
          switch (l.tag) {
            case 22:
              (_u(t, l), u & 2048 && un(l.alternate, l));
              break;
            case 24:
              (_u(t, l), u & 2048 && on(l.alternate, l));
              break;
            default:
              _u(t, l);
          }
          e = e.sibling;
        }
    }
    var Gu = 8192;
    function Tl(a, e, t) {
      if (a.subtreeFlags & Gu) for (a = a.child; a !== null;) (q2(a, e, t), (a = a.sibling));
    }
    function q2(a, e, t) {
      switch (a.tag) {
        case 26:
          (Tl(a, e, t),
            a.flags & Gu &&
              a.memoizedState !== null &&
              Cp(t, Fe, a.memoizedState, a.memoizedProps));
          break;
        case 5:
          Tl(a, e, t);
          break;
        case 3:
        case 4:
          var l = Fe;
          ((Fe = $d(a.stateNode.containerInfo)), Tl(a, e, t), (Fe = l));
          break;
        case 22:
          a.memoizedState === null &&
            ((l = a.alternate),
            l !== null && l.memoizedState !== null
              ? ((l = Gu), (Gu = 16777216), Tl(a, e, t), (Gu = l))
              : Tl(a, e, t));
          break;
        default:
          Tl(a, e, t);
      }
    }
    function M2(a) {
      var e = a.alternate;
      if (e !== null && ((a = e.child), a !== null)) {
        e.child = null;
        do ((e = a.sibling), (a.sibling = null), (a = e));
        while (a !== null);
      }
    }
    function Uu(a) {
      var e = a.deletions;
      if ((a.flags & 16) !== 0) {
        if (e !== null)
          for (var t = 0; t < e.length; t++) {
            var l = e[t];
            ((Xa = l), T2(l, a));
          }
        M2(a);
      }
      if (a.subtreeFlags & 10256) for (a = a.child; a !== null;) (w2(a), (a = a.sibling));
    }
    function w2(a) {
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          (Uu(a), a.flags & 2048 && Xt(9, a, a.return));
          break;
        case 3:
          Uu(a);
          break;
        case 12:
          Uu(a);
          break;
        case 22:
          var e = a.stateNode;
          a.memoizedState !== null &&
          e._visibility & 2 &&
          (a.return === null || a.return.tag !== 13)
            ? ((e._visibility &= -3), Id(a))
            : Uu(a);
          break;
        default:
          Uu(a);
      }
    }
    function Id(a) {
      var e = a.deletions;
      if ((a.flags & 16) !== 0) {
        if (e !== null)
          for (var t = 0; t < e.length; t++) {
            var l = e[t];
            ((Xa = l), T2(l, a));
          }
        M2(a);
      }
      for (a = a.child; a !== null;) {
        switch (((e = a), e.tag)) {
          case 0:
          case 11:
          case 15:
            (Xt(8, e, e.return), Id(e));
            break;
          case 22:
            ((t = e.stateNode), t._visibility & 2 && ((t._visibility &= -3), Id(e)));
            break;
          default:
            Id(e);
        }
        a = a.sibling;
      }
    }
    function T2(a, e) {
      for (; Xa !== null;) {
        var t = Xa;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Xt(8, t, e);
            break;
          case 23:
          case 22:
            if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
              var l = t.memoizedState.cachePool.pool;
              l != null && l.refCount++;
            }
            break;
          case 24:
            Co(t.memoizedState.cache);
        }
        if (((l = t.child), l !== null)) ((l.return = t), (Xa = l));
        else
          a: for (t = a; Xa !== null;) {
            l = Xa;
            var u = l.sibling,
              o = l.return;
            if ((y2(l), l === t)) {
              Xa = null;
              break a;
            }
            if (u !== null) {
              ((u.return = o), (Xa = u));
              break a;
            }
            Xa = o;
          }
      }
    }
    var H4 = {
        getCacheForType: function (a) {
          var e = ja(Ha),
            t = e.data.get(a);
          return (t === void 0 && ((t = a()), e.data.set(a, t)), t);
        },
        cacheSignal: function () {
          return ja(Ha).controller.signal;
        },
      },
      V4 = typeof WeakMap == "function" ? WeakMap : Map,
      ca = 0,
      Ca = null,
      la = null,
      ua = 0,
      va = 0,
      pe = null,
      Tt = !1,
      pu = !1,
      dn = !1,
      ht = 0,
      Ua = 0,
      Qt = 0,
      il = 0,
      fn = 0,
      ge = 0,
      uu = 0,
      $u = null,
      fe = null,
      dr = !1,
      hi = 0,
      D2 = 0,
      Jd = 1 / 0,
      Zd = null,
      zt = null,
      Ga = 0,
      Et = null,
      ou = null,
      nt = 0,
      ir = 0,
      fr = null,
      B2 = null,
      ao = 0,
      rr = null;
    function ye() {
      return (ca & 2) !== 0 && ua !== 0 ? ua & -ua : J.T !== null ? nn() : Vc();
    }
    function R2() {
      if (ge === 0)
        if ((ua & 536870912) === 0 || oa) {
          var a = _o;
          ((_o <<= 1), (_o & 3932160) === 0 && (_o = 262144), (ge = a));
        } else ge = 536870912;
      return ((a = Se.current), a !== null && (a.flags |= 32), ge);
    }
    function re(a, e, t) {
      (((a === Ca && (va === 2 || va === 9)) || a.cancelPendingCommit !== null) &&
        (du(a, 0), Dt(a, ua, ge, !1)),
        yo(a, t),
        ((ca & 2) === 0 || a !== Ca) &&
          (a === Ca && ((ca & 2) === 0 && (il |= t), Ua === 4 && Dt(a, ua, ge, !1)), We(a)));
    }
    function N2(a, e, t) {
      if ((ca & 6) !== 0) throw Error(k(327));
      var l = (!t && (e & 127) === 0 && (e & a.expiredLanes) === 0) || xo(a, e),
        u = l ? X4(a, e) : xf(a, e, !0),
        o = l;
      do {
        if (u === 0) {
          pu && !l && Dt(a, e, 0, !1);
          break;
        } else {
          if (((t = a.current.alternate), o && !G4(t))) {
            ((u = xf(a, e, !1)), (o = !1));
            continue;
          }
          if (u === 2) {
            if (((o = e), a.errorRecoveryDisabledLanes & o)) var i = 0;
            else
              ((i = a.pendingLanes & -536870913),
                (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
            if (i !== 0) {
              e = i;
              a: {
                var f = a;
                u = $u;
                var r = f.current.memoizedState.isDehydrated;
                if ((r && (du(f, i).flags |= 256), (i = xf(f, i, !1)), i !== 2)) {
                  if (dn && !r) {
                    ((f.errorRecoveryDisabledLanes |= o), (il |= o), (u = 4));
                    break a;
                  }
                  ((o = fe),
                    (fe = u),
                    o !== null && (fe === null ? (fe = o) : fe.push.apply(fe, o)));
                }
                u = i;
              }
              if (((o = !1), u !== 2)) continue;
            }
          }
          if (u === 1) {
            (du(a, 0), Dt(a, e, 0, !0));
            break;
          }
          a: {
            switch (((l = a), (o = u), o)) {
              case 0:
              case 1:
                throw Error(k(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                Dt(l, e, ge, !Tt);
                break a;
              case 2:
                fe = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(k(329));
            }
            if ((e & 62914560) === e && ((u = hi + 300 - ve()), 10 < u)) {
              if ((Dt(l, e, ge, !Tt), ui(l, 0, !0) !== 0)) break a;
              ((nt = e),
                (l.timeoutHandle = a0(
                  _s.bind(null, l, t, fe, Zd, dr, e, ge, il, uu, Tt, o, "Throttled", -0, 0),
                  u,
                )));
              break a;
            }
            _s(l, t, fe, Zd, dr, e, ge, il, uu, Tt, o, null, -0, 0);
          }
        }
        break;
      } while (!0);
      We(a);
    }
    function _s(a, e, t, l, u, o, i, f, r, c, g, v, h, x) {
      if (((a.timeoutHandle = -1), (v = e.subtreeFlags), v & 8192 || (v & 16785408) === 16785408)) {
        ((v = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: dt,
        }),
          q2(e, o, v));
        var I = (o & 62914560) === o ? hi - ve() : (o & 4194048) === o ? D2 - ve() : 0;
        if (((I = Ip(v, I)), I !== null)) {
          ((nt = o),
            (a.cancelPendingCommit = I(ac.bind(null, a, e, o, t, l, u, i, f, r, g, v, null, h, x))),
            Dt(a, o, i, !c));
          return;
        }
      }
      ac(a, e, o, t, l, u, i, f, r);
    }
    function G4(a) {
      for (var e = a; ;) {
        var t = e.tag;
        if (
          (t === 0 || t === 11 || t === 15) &&
          e.flags & 16384 &&
          ((t = e.updateQueue), t !== null && ((t = t.stores), t !== null))
        )
          for (var l = 0; l < t.length; l++) {
            var u = t[l],
              o = u.getSnapshot;
            u = u.value;
            try {
              if (!be(o(), u)) return !1;
            } catch {
              return !1;
            }
          }
        if (((t = e.child), e.subtreeFlags & 16384 && t !== null)) ((t.return = e), (e = t));
        else {
          if (e === a) break;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === a) return !0;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      }
      return !0;
    }
    function Dt(a, e, t, l) {
      ((e &= ~fn),
        (e &= ~il),
        (a.suspendedLanes |= e),
        (a.pingedLanes &= ~e),
        l && (a.warmLanes |= e),
        (l = a.expirationTimes));
      for (var u = e; 0 < u;) {
        var o = 31 - xe(u),
          i = 1 << o;
        ((l[o] = -1), (u &= ~i));
      }
      t !== 0 && Ec(a, t, e);
    }
    function gi() {
      return (ca & 6) === 0 ? (ko(0, !1), !1) : !0;
    }
    function rn() {
      if (la !== null) {
        if (va === 0) var a = la.return;
        else ((a = la), (it = vl = null), Zr(a), (Yl = null), (ro = 0), (a = la));
        for (; a !== null;) (p2(a.alternate, a), (a = a.return));
        la = null;
      }
    }
    function du(a, e) {
      var t = a.timeoutHandle;
      (t !== -1 && ((a.timeoutHandle = -1), dp(t)),
        (t = a.cancelPendingCommit),
        t !== null && ((a.cancelPendingCommit = null), t()),
        (nt = 0),
        rn(),
        (Ca = a),
        (la = t = ft(a.current, null)),
        (ua = e),
        (va = 0),
        (pe = null),
        (Tt = !1),
        (pu = xo(a, e)),
        (dn = !1),
        (uu = ge = fn = il = Qt = Ua = 0),
        (fe = $u = null),
        (dr = !1),
        (e & 8) !== 0 && (e |= e & 32));
      var l = a.entangledLanes;
      if (l !== 0)
        for (a = a.entanglements, l &= e; 0 < l;) {
          var u = 31 - xe(l),
            o = 1 << u;
          ((e |= a[u]), (l &= ~o));
        }
      return ((ht = e), fi(), t);
    }
    function U2(a, e) {
      (($ = null),
        (J.H = so),
        e === cu || e === ni
          ? ((e = Ts()), (va = 3))
          : e === Hr
            ? ((e = Ts()), (va = 4))
            : (va =
                e === tn
                  ? 8
                  : e !== null && typeof e == "object" && typeof e.then == "function"
                    ? 6
                    : 1),
        (pe = e),
        la === null && ((Ua = 1), Pd(a, Te(e, a.current))));
    }
    function O2() {
      var a = Se.current;
      return a === null
        ? !0
        : (ua & 4194048) === ua
          ? Be === null
          : (ua & 62914560) === ua || (ua & 536870912) !== 0
            ? a === Be
            : !1;
    }
    function z2() {
      var a = J.H;
      return ((J.H = so), a === null ? so : a);
    }
    function E2() {
      var a = J.A;
      return ((J.A = H4), a);
    }
    function Wd() {
      ((Ua = 4),
        Tt || ((ua & 4194048) !== ua && Se.current !== null) || (pu = !0),
        ((Qt & 134217727) === 0 && (il & 134217727) === 0) || Ca === null || Dt(Ca, ua, ge, !1));
    }
    function xf(a, e, t) {
      var l = ca;
      ca |= 2;
      var u = z2(),
        o = E2();
      ((Ca !== a || ua !== e) && ((Zd = null), du(a, e)), (e = !1));
      var i = Ua;
      a: do
        try {
          if (va !== 0 && la !== null) {
            var f = la,
              r = pe;
            switch (va) {
              case 8:
                (rn(), (i = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Se.current === null && (e = !0);
                var c = va;
                if (((va = 0), (pe = null), Xl(a, f, r, c), t && pu)) {
                  i = 0;
                  break a;
                }
                break;
              default:
                ((c = va), (va = 0), (pe = null), Xl(a, f, r, c));
            }
          }
          (P4(), (i = Ua));
          break;
        } catch (g) {
          U2(a, g);
        }
      while (!0);
      return (
        e && a.shellSuspendCounter++,
        (it = vl = null),
        (ca = l),
        (J.H = u),
        (J.A = o),
        la === null && ((Ca = null), (ua = 0), fi()),
        i
      );
    }
    function P4() {
      for (; la !== null;) F2(la);
    }
    function X4(a, e) {
      var t = ca;
      ca |= 2;
      var l = z2(),
        u = E2();
      Ca !== a || ua !== e ? ((Zd = null), (Jd = ve() + 500), du(a, e)) : (pu = xo(a, e));
      a: do
        try {
          if (va !== 0 && la !== null) {
            e = la;
            var o = pe;
            e: switch (va) {
              case 1:
                ((va = 0), (pe = null), Xl(a, e, o, 1));
                break;
              case 2:
              case 9:
                if (ws(o)) {
                  ((va = 0), (pe = null), $s(e));
                  break;
                }
                ((e = function () {
                  ((va !== 2 && va !== 9) || Ca !== a || (va = 7), We(a));
                }),
                  o.then(e, e));
                break a;
              case 3:
                va = 7;
                break a;
              case 4:
                va = 5;
                break a;
              case 7:
                ws(o) ? ((va = 0), (pe = null), $s(e)) : ((va = 0), (pe = null), Xl(a, e, o, 7));
                break;
              case 5:
                var i = null;
                switch (la.tag) {
                  case 26:
                    i = la.memoizedState;
                  case 5:
                  case 27:
                    var f = la;
                    if (i ? o0(i) : f.stateNode.complete) {
                      ((va = 0), (pe = null));
                      var r = f.sibling;
                      if (r !== null) la = r;
                      else {
                        var c = f.return;
                        c !== null ? ((la = c), vi(c)) : (la = null);
                      }
                      break e;
                    }
                }
                ((va = 0), (pe = null), Xl(a, e, o, 5));
                break;
              case 6:
                ((va = 0), (pe = null), Xl(a, e, o, 6));
                break;
              case 8:
                (rn(), (Ua = 6));
                break a;
              default:
                throw Error(k(462));
            }
          }
          Q4();
          break;
        } catch (g) {
          U2(a, g);
        }
      while (!0);
      return (
        (it = vl = null),
        (J.H = l),
        (J.A = u),
        (ca = t),
        la !== null ? 0 : ((Ca = null), (ua = 0), fi(), Ua)
      );
    }
    function Q4() {
      for (; la !== null && !m3();) F2(la);
    }
    function F2(a) {
      var e = c2(a.alternate, a, ht);
      ((a.memoizedProps = a.pendingProps), e === null ? vi(a) : (la = e));
    }
    function $s(a) {
      var e = a,
        t = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = Js(t, e, e.pendingProps, e.type, void 0, ua);
          break;
        case 11:
          e = Js(t, e, e.pendingProps, e.type.render, e.ref, ua);
          break;
        case 5:
          Zr(e);
        default:
          (p2(t, e), (e = la = p1(e, ht)), (e = c2(t, e, ht)));
      }
      ((a.memoizedProps = a.pendingProps), e === null ? vi(a) : (la = e));
    }
    function Xl(a, e, t, l) {
      ((it = vl = null), Zr(e), (Yl = null), (ro = 0));
      var u = e.return;
      try {
        if (R4(a, u, e, t, ua)) {
          ((Ua = 1), Pd(a, Te(t, a.current)), (la = null));
          return;
        }
      } catch (o) {
        if (u !== null) throw ((la = u), o);
        ((Ua = 1), Pd(a, Te(t, a.current)), (la = null));
        return;
      }
      e.flags & 32768
        ? (oa || l === 1
            ? (a = !0)
            : pu || (ua & 536870912) !== 0
              ? (a = !1)
              : ((Tt = a = !0),
                (l === 2 || l === 9 || l === 3 || l === 6) &&
                  ((l = Se.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
          H2(e, a))
        : vi(e);
    }
    function vi(a) {
      var e = a;
      do {
        if ((e.flags & 32768) !== 0) {
          H2(e, Tt);
          return;
        }
        a = e.return;
        var t = O4(e.alternate, e, ht);
        if (t !== null) {
          la = t;
          return;
        }
        if (((e = e.sibling), e !== null)) {
          la = e;
          return;
        }
        la = e = a;
      } while (e !== null);
      Ua === 0 && (Ua = 5);
    }
    function H2(a, e) {
      do {
        var t = z4(a.alternate, a);
        if (t !== null) {
          ((t.flags &= 32767), (la = t));
          return;
        }
        if (
          ((t = a.return),
          t !== null && ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
          !e && ((a = a.sibling), a !== null))
        ) {
          la = a;
          return;
        }
        la = a = t;
      } while (a !== null);
      ((Ua = 6), (la = null));
    }
    function ac(a, e, t, l, u, o, i, f, r) {
      a.cancelPendingCommit = null;
      do Li();
      while (Ga !== 0);
      if ((ca & 6) !== 0) throw Error(k(327));
      if (e !== null) {
        if (e === a.current) throw Error(k(177));
        if (
          ((o = e.lanes | e.childLanes),
          (o |= Rr),
          I3(a, t, o, i, f, r),
          a === Ca && ((la = Ca = null), (ua = 0)),
          (ou = e),
          (Et = a),
          (nt = t),
          (ir = o),
          (fr = u),
          (B2 = l),
          (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
            ? ((a.callbackNode = null),
              (a.callbackPriority = 0),
              Y4(Bd, function () {
                return (Q2(), null);
              }))
            : ((a.callbackNode = null), (a.callbackPriority = 0)),
          (l = (e.flags & 13878) !== 0),
          (e.subtreeFlags & 13878) !== 0 || l)
        ) {
          ((l = J.T), (J.T = null), (u = pa.p), (pa.p = 2), (i = ca), (ca |= 4));
          try {
            E4(a, e, t);
          } finally {
            ((ca = i), (pa.p = u), (J.T = l));
          }
        }
        ((Ga = 1), V2(), G2(), P2());
      }
    }
    function V2() {
      if (Ga === 1) {
        Ga = 0;
        var a = Et,
          e = ou,
          t = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || t) {
          ((t = J.T), (J.T = null));
          var l = pa.p;
          pa.p = 2;
          var u = ca;
          ca |= 4;
          try {
            I2(e, a);
            var o = pr,
              i = o1(a.containerInfo),
              f = o.focusedElem,
              r = o.selectionRange;
            if (i !== f && f && f.ownerDocument && u1(f.ownerDocument.documentElement, f)) {
              if (r !== null && Br(f)) {
                var c = r.start,
                  g = r.end;
                if ((g === void 0 && (g = c), "selectionStart" in f))
                  ((f.selectionStart = c), (f.selectionEnd = Math.min(g, f.value.length)));
                else {
                  var v = f.ownerDocument || document,
                    h = (v && v.defaultView) || window;
                  if (h.getSelection) {
                    var x = h.getSelection(),
                      I = f.textContent.length,
                      q = Math.min(r.start, I),
                      M = r.end === void 0 ? q : Math.min(r.end, I);
                    !x.extend && q > M && ((i = M), (M = q), (q = i));
                    var s = Ss(f, q),
                      m = Ss(f, M);
                    if (
                      s &&
                      m &&
                      (x.rangeCount !== 1 ||
                        x.anchorNode !== s.node ||
                        x.anchorOffset !== s.offset ||
                        x.focusNode !== m.node ||
                        x.focusOffset !== m.offset)
                    ) {
                      var L = v.createRange();
                      (L.setStart(s.node, s.offset),
                        x.removeAllRanges(),
                        q > M
                          ? (x.addRange(L), x.extend(m.node, m.offset))
                          : (L.setEnd(m.node, m.offset), x.addRange(L)));
                    }
                  }
                }
              }
              for (v = [], x = f; (x = x.parentNode);)
                x.nodeType === 1 && v.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
              for (typeof f.focus == "function" && f.focus(), f = 0; f < v.length; f++) {
                var b = v[f];
                ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
              }
            }
            ((ti = !!cr), (pr = cr = null));
          } finally {
            ((ca = u), (pa.p = l), (J.T = t));
          }
        }
        ((a.current = e), (Ga = 2));
      }
    }
    function G2() {
      if (Ga === 2) {
        Ga = 0;
        var a = Et,
          e = ou,
          t = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || t) {
          ((t = J.T), (J.T = null));
          var l = pa.p;
          pa.p = 2;
          var u = ca;
          ca |= 4;
          try {
            x2(a, e.alternate, e);
          } finally {
            ((ca = u), (pa.p = l), (J.T = t));
          }
        }
        Ga = 3;
      }
    }
    function P2() {
      if (Ga === 4 || Ga === 3) {
        ((Ga = 0), h3());
        var a = Et,
          e = ou,
          t = nt,
          l = B2;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? (Ga = 5)
          : ((Ga = 0), (ou = Et = null), X2(a, a.pendingLanes));
        var u = a.pendingLanes;
        if (
          (u === 0 && (zt = null),
          Ar(t),
          (e = e.stateNode),
          Le && typeof Le.onCommitFiberRoot == "function")
        )
          try {
            Le.onCommitFiberRoot(Lo, e, void 0, (e.current.flags & 128) === 128);
          } catch {}
        if (l !== null) {
          ((e = J.T), (u = pa.p), (pa.p = 2), (J.T = null));
          try {
            for (var o = a.onRecoverableError, i = 0; i < l.length; i++) {
              var f = l[i];
              o(f.value, { componentStack: f.stack });
            }
          } finally {
            ((J.T = e), (pa.p = u));
          }
        }
        ((nt & 3) !== 0 && Li(),
          We(a),
          (u = a.pendingLanes),
          (t & 261930) !== 0 && (u & 42) !== 0
            ? a === rr
              ? ao++
              : ((ao = 0), (rr = a))
            : (ao = 0),
          ko(0, !1));
      }
    }
    function X2(a, e) {
      (a.pooledCacheLanes &= e) === 0 &&
        ((e = a.pooledCache), e != null && ((a.pooledCache = null), Co(e)));
    }
    function Li() {
      return (V2(), G2(), P2(), Q2());
    }
    function Q2() {
      if (Ga !== 5) return !1;
      var a = Et,
        e = ir;
      ir = 0;
      var t = Ar(nt),
        l = J.T,
        u = pa.p;
      try {
        ((pa.p = 32 > t ? 32 : t), (J.T = null), (t = fr), (fr = null));
        var o = Et,
          i = nt;
        if (((Ga = 0), (ou = Et = null), (nt = 0), (ca & 6) !== 0)) throw Error(k(331));
        var f = ca;
        if (
          ((ca |= 4),
          w2(o.current),
          k2(o, o.current, i, t),
          (ca = f),
          ko(0, !1),
          Le && typeof Le.onPostCommitFiberRoot == "function")
        )
          try {
            Le.onPostCommitFiberRoot(Lo, o);
          } catch {}
        return !0;
      } finally {
        ((pa.p = u), (J.T = l), X2(a, e));
      }
    }
    function ec(a, e, t) {
      ((e = Te(t, e)),
        (e = tr(a.stateNode, e, 2)),
        (a = Ot(a, e, 2)),
        a !== null && (yo(a, 2), We(a)));
    }
    function La(a, e, t) {
      if (a.tag === 3) ec(a, a, t);
      else
        for (; e !== null;) {
          if (e.tag === 3) {
            ec(e, a, t);
            break;
          } else if (e.tag === 1) {
            var l = e.stateNode;
            if (
              typeof e.type.getDerivedStateFromError == "function" ||
              (typeof l.componentDidCatch == "function" && (zt === null || !zt.has(l)))
            ) {
              ((a = Te(t, a)),
                (t = d2(2)),
                (l = Ot(e, t, 2)),
                l !== null && (i2(t, l, e, a), yo(l, 2), We(l)));
              break;
            }
          }
          e = e.return;
        }
    }
    function yf(a, e, t) {
      var l = a.pingCache;
      if (l === null) {
        l = a.pingCache = new V4();
        var u = new Set();
        l.set(e, u);
      } else ((u = l.get(e)), u === void 0 && ((u = new Set()), l.set(e, u)));
      u.has(t) || ((dn = !0), u.add(t), (a = J4.bind(null, a, e, t)), e.then(a, a));
    }
    function J4(a, e, t) {
      var l = a.pingCache;
      (l !== null && l.delete(e),
        (a.pingedLanes |= a.suspendedLanes & t),
        (a.warmLanes &= ~t),
        Ca === a &&
          (ua & t) === t &&
          (Ua === 4 || (Ua === 3 && (ua & 62914560) === ua && 300 > ve() - hi)
            ? (ca & 2) === 0 && du(a, 0)
            : (fn |= t),
          uu === ua && (uu = 0)),
        We(a));
    }
    function J2(a, e) {
      (e === 0 && (e = zc()), (a = gl(a, e)), a !== null && (yo(a, e), We(a)));
    }
    function Z4(a) {
      var e = a.memoizedState,
        t = 0;
      (e !== null && (t = e.retryLane), J2(a, t));
    }
    function W4(a, e) {
      var t = 0;
      switch (a.tag) {
        case 31:
        case 13:
          var l = a.stateNode,
            u = a.memoizedState;
          u !== null && (t = u.retryLane);
          break;
        case 19:
          l = a.stateNode;
          break;
        case 22:
          l = a.stateNode._retryCache;
          break;
        default:
          throw Error(k(314));
      }
      (l !== null && l.delete(e), J2(a, t));
    }
    function Y4(a, e) {
      return Cr(a, e);
    }
    var Yd = null,
      Bl = null,
      nr = !1,
      Kd = !1,
      bf = !1,
      Bt = 0;
    function We(a) {
      (a !== Bl && a.next === null && (Bl === null ? (Yd = Bl = a) : (Bl = Bl.next = a)),
        (Kd = !0),
        nr || ((nr = !0), j4()));
    }
    function ko(a, e) {
      if (!bf && Kd) {
        bf = !0;
        do
          for (var t = !1, l = Yd; l !== null;) {
            if (!e)
              if (a !== 0) {
                var u = l.pendingLanes;
                if (u === 0) var o = 0;
                else {
                  var i = l.suspendedLanes,
                    f = l.pingedLanes;
                  ((o = (1 << (31 - xe(42 | a) + 1)) - 1),
                    (o &= u & ~(i & ~f)),
                    (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
                }
                o !== 0 && ((t = !0), tc(l, o));
              } else
                ((o = ua),
                  (o = ui(
                    l,
                    l === Ca ? o : 0,
                    l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
                  )),
                  (o & 3) === 0 || xo(l, o) || ((t = !0), tc(l, o)));
            l = l.next;
          }
        while (t);
        bf = !1;
      }
    }
    function K4() {
      Z2();
    }
    function Z2() {
      Kd = nr = !1;
      var a = 0;
      Bt !== 0 && op() && (a = Bt);
      for (var e = ve(), t = null, l = Yd; l !== null;) {
        var u = l.next,
          o = W2(l, e);
        (o === 0
          ? ((l.next = null), t === null ? (Yd = u) : (t.next = u), u === null && (Bl = t))
          : ((t = l), (a !== 0 || (o & 3) !== 0) && (Kd = !0)),
          (l = u));
      }
      ((Ga !== 0 && Ga !== 5) || ko(a, !1), Bt !== 0 && (Bt = 0));
    }
    function W2(a, e) {
      for (
        var t = a.suspendedLanes,
          l = a.pingedLanes,
          u = a.expirationTimes,
          o = a.pendingLanes & -62914561;
        0 < o;
      ) {
        var i = 31 - xe(o),
          f = 1 << i,
          r = u[i];
        (r === -1
          ? ((f & t) === 0 || (f & l) !== 0) && (u[i] = C3(f, e))
          : r <= e && (a.expiredLanes |= f),
          (o &= ~f));
      }
      if (
        ((e = Ca),
        (t = ua),
        (t = ui(a, a === e ? t : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)),
        (l = a.callbackNode),
        t === 0 || (a === e && (va === 2 || va === 9)) || a.cancelPendingCommit !== null)
      )
        return (
          l !== null && l !== null && Yi(l),
          (a.callbackNode = null),
          (a.callbackPriority = 0)
        );
      if ((t & 3) === 0 || xo(a, t)) {
        if (((e = t & -t), e === a.callbackPriority)) return e;
        switch ((l !== null && Yi(l), Ar(t))) {
          case 2:
          case 8:
            t = Uc;
            break;
          case 32:
            t = Bd;
            break;
          case 268435456:
            t = Oc;
            break;
          default:
            t = Bd;
        }
        return (
          (l = Y2.bind(null, a)),
          (t = Cr(t, l)),
          (a.callbackPriority = e),
          (a.callbackNode = t),
          e
        );
      }
      return (
        l !== null && l !== null && Yi(l),
        (a.callbackPriority = 2),
        (a.callbackNode = null),
        2
      );
    }
    function Y2(a, e) {
      if (Ga !== 0 && Ga !== 5) return ((a.callbackNode = null), (a.callbackPriority = 0), null);
      var t = a.callbackNode;
      if (Li() && a.callbackNode !== t) return null;
      var l = ua;
      return (
        (l = ui(a, a === Ca ? l : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)),
        l === 0
          ? null
          : (N2(a, l, e),
            W2(a, ve()),
            a.callbackNode != null && a.callbackNode === t ? Y2.bind(null, a) : null)
      );
    }
    function tc(a, e) {
      if (Li()) return null;
      N2(a, e, !0);
    }
    function j4() {
      ip(function () {
        (ca & 6) !== 0 ? Cr(Nc, K4) : Z2();
      });
    }
    function nn() {
      if (Bt === 0) {
        var a = eu;
        (a === 0 && ((a = jo), (jo <<= 1), (jo & 261888) === 0 && (jo = 256)), (Bt = a));
      }
      return Bt;
    }
    function lc(a) {
      return a == null || typeof a == "symbol" || typeof a == "boolean"
        ? null
        : typeof a == "function"
          ? a
          : hd("" + a);
    }
    function uc(a, e) {
      var t = e.ownerDocument.createElement("input");
      return (
        (t.name = e.name),
        (t.value = e.value),
        a.id && t.setAttribute("form", a.id),
        e.parentNode.insertBefore(t, e),
        (a = new FormData(a)),
        t.parentNode.removeChild(t),
        a
      );
    }
    function _4(a, e, t, l, u) {
      if (e === "submit" && t && t.stateNode === u) {
        var o = lc((u[ne] || null).action),
          i = l.submitter;
        i &&
          ((e = (e = i[ne] || null) ? lc(e.formAction) : i.getAttribute("formAction")),
          e !== null && ((o = e), (i = null)));
        var f = new oi("action", "action", null, l, u);
        a.push({
          event: f,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (l.defaultPrevented) {
                  if (Bt !== 0) {
                    var r = i ? uc(u, i) : new FormData(u);
                    ar(t, { pending: !0, data: r, method: u.method, action: o }, null, r);
                  }
                } else
                  typeof o == "function" &&
                    (f.preventDefault(),
                    (r = i ? uc(u, i) : new FormData(u)),
                    ar(t, { pending: !0, data: r, method: u.method, action: o }, o, r));
              },
              currentTarget: u,
            },
          ],
        });
      }
    }
    for (rd = 0; rd < Gf.length; rd++)
      ((nd = Gf[rd]),
        (oc = nd.toLowerCase()),
        (dc = nd[0].toUpperCase() + nd.slice(1)),
        He(oc, "on" + dc));
    var nd, oc, dc, rd;
    He(i1, "onAnimationEnd");
    He(f1, "onAnimationIteration");
    He(r1, "onAnimationStart");
    He("dblclick", "onDoubleClick");
    He("focusin", "onFocus");
    He("focusout", "onBlur");
    He(g4, "onTransitionRun");
    He(v4, "onTransitionStart");
    He(L4, "onTransitionCancel");
    He(n1, "onTransitionEnd");
    $l("onMouseEnter", ["mouseout", "mouseover"]);
    $l("onMouseLeave", ["mouseout", "mouseover"]);
    $l("onPointerEnter", ["pointerout", "pointerover"]);
    $l("onPointerLeave", ["pointerout", "pointerover"]);
    pl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    pl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    );
    pl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    pl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    pl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    );
    pl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
    var co =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      $4 = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co),
      );
    function K2(a, e) {
      e = (e & 4) !== 0;
      for (var t = 0; t < a.length; t++) {
        var l = a[t],
          u = l.event;
        l = l.listeners;
        a: {
          var o = void 0;
          if (e)
            for (var i = l.length - 1; 0 <= i; i--) {
              var f = l[i],
                r = f.instance,
                c = f.currentTarget;
              if (((f = f.listener), r !== o && u.isPropagationStopped())) break a;
              ((o = f), (u.currentTarget = c));
              try {
                o(u);
              } catch (g) {
                Nd(g);
              }
              ((u.currentTarget = null), (o = r));
            }
          else
            for (i = 0; i < l.length; i++) {
              if (
                ((f = l[i]),
                (r = f.instance),
                (c = f.currentTarget),
                (f = f.listener),
                r !== o && u.isPropagationStopped())
              )
                break a;
              ((o = f), (u.currentTarget = c));
              try {
                o(u);
              } catch (g) {
                Nd(g);
              }
              ((u.currentTarget = null), (o = r));
            }
        }
      }
    }
    function ta(a, e) {
      var t = e[Nf];
      t === void 0 && (t = e[Nf] = new Set());
      var l = a + "__bubble";
      t.has(l) || (j2(e, a, 2, !1), t.add(l));
    }
    function Sf(a, e, t) {
      var l = 0;
      (e && (l |= 4), j2(t, a, l, e));
    }
    var sd = "_reactListening" + Math.random().toString(36).slice(2);
    function sn(a) {
      if (!a[sd]) {
        ((a[sd] = !0),
          Gc.forEach(function (t) {
            t !== "selectionchange" && ($4.has(t) || Sf(t, !1, a), Sf(t, !0, a));
          }));
        var e = a.nodeType === 9 ? a : a.ownerDocument;
        e === null || e[sd] || ((e[sd] = !0), Sf("selectionchange", !1, e));
      }
    }
    function j2(a, e, t, l) {
      switch (n0(e)) {
        case 2:
          var u = qp;
          break;
        case 8:
          u = Mp;
          break;
        default:
          u = hn;
      }
      ((t = u.bind(null, e, t, a)),
        (u = void 0),
        !Ff || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (u = !0),
        l
          ? u !== void 0
            ? a.addEventListener(e, t, { capture: !0, passive: u })
            : a.addEventListener(e, t, !0)
          : u !== void 0
            ? a.addEventListener(e, t, { passive: u })
            : a.addEventListener(e, t, !1));
    }
    function Cf(a, e, t, l, u) {
      var o = l;
      if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
        a: for (;;) {
          if (l === null) return;
          var i = l.tag;
          if (i === 3 || i === 4) {
            var f = l.stateNode.containerInfo;
            if (f === u) break;
            if (i === 4)
              for (i = l.return; i !== null;) {
                var r = i.tag;
                if ((r === 3 || r === 4) && i.stateNode.containerInfo === u) return;
                i = i.return;
              }
            for (; f !== null;) {
              if (((i = Ul(f)), i === null)) return;
              if (((r = i.tag), r === 5 || r === 6 || r === 26 || r === 27)) {
                l = o = i;
                continue a;
              }
              f = f.parentNode;
            }
          }
          l = l.return;
        }
      Kc(function () {
        var c = o,
          g = Mr(t),
          v = [];
        a: {
          var h = s1.get(a);
          if (h !== void 0) {
            var x = oi,
              I = a;
            switch (a) {
              case "keypress":
                if (vd(t) === 0) break a;
              case "keydown":
              case "keyup":
                x = W3;
                break;
              case "focusin":
                ((I = "focus"), (x = af));
                break;
              case "focusout":
                ((I = "blur"), (x = af));
                break;
              case "beforeblur":
              case "afterblur":
                x = af;
                break;
              case "click":
                if (t.button === 2) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                x = ps;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                x = O3;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                x = j3;
                break;
              case i1:
              case f1:
              case r1:
                x = F3;
                break;
              case n1:
                x = $3;
                break;
              case "scroll":
              case "scrollend":
                x = N3;
                break;
              case "wheel":
                x = e4;
                break;
              case "copy":
              case "cut":
              case "paste":
                x = V3;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                x = hs;
                break;
              case "toggle":
              case "beforetoggle":
                x = l4;
            }
            var q = (e & 4) !== 0,
              M = !q && (a === "scroll" || a === "scrollend"),
              s = q ? (h !== null ? h + "Capture" : null) : h;
            q = [];
            for (var m = c, L; m !== null;) {
              var b = m;
              if (
                ((L = b.stateNode),
                (b = b.tag),
                (b !== 5 && b !== 26 && b !== 27) ||
                  L === null ||
                  s === null ||
                  ((b = lo(m, s)), b != null && q.push(po(m, b, L))),
                M)
              )
                break;
              m = m.return;
            }
            0 < q.length && ((h = new x(h, I, null, t, g)), v.push({ event: h, listeners: q }));
          }
        }
        if ((e & 7) === 0) {
          a: {
            if (
              ((h = a === "mouseover" || a === "pointerover"),
              (x = a === "mouseout" || a === "pointerout"),
              h && t !== Ef && (I = t.relatedTarget || t.fromElement) && (Ul(I) || I[ru]))
            )
              break a;
            if (
              (x || h) &&
              ((h =
                g.window === g
                  ? g
                  : (h = g.ownerDocument)
                    ? h.defaultView || h.parentWindow
                    : window),
              x
                ? ((I = t.relatedTarget || t.toElement),
                  (x = c),
                  (I = I ? Ul(I) : null),
                  I !== null &&
                    ((M = vo(I)), (q = I.tag), I !== M || (q !== 5 && q !== 27 && q !== 6)) &&
                    (I = null))
                : ((x = null), (I = c)),
              x !== I)
            ) {
              if (
                ((q = ps),
                (b = "onMouseLeave"),
                (s = "onMouseEnter"),
                (m = "mouse"),
                (a === "pointerout" || a === "pointerover") &&
                  ((q = hs), (b = "onPointerLeave"), (s = "onPointerEnter"), (m = "pointer")),
                (M = x == null ? h : Hu(x)),
                (L = I == null ? h : Hu(I)),
                (h = new q(b, m + "leave", x, t, g)),
                (h.target = M),
                (h.relatedTarget = L),
                (b = null),
                Ul(g) === c &&
                  ((q = new q(s, m + "enter", I, t, g)),
                  (q.target = L),
                  (q.relatedTarget = M),
                  (b = q)),
                (M = b),
                x && I)
              )
                e: {
                  for (q = ap, s = x, m = I, L = 0, b = s; b; b = q(b)) L++;
                  b = 0;
                  for (var T = m; T; T = q(T)) b++;
                  for (; 0 < L - b;) ((s = q(s)), L--);
                  for (; 0 < b - L;) ((m = q(m)), b--);
                  for (; L--;) {
                    if (s === m || (m !== null && s === m.alternate)) {
                      q = s;
                      break e;
                    }
                    ((s = q(s)), (m = q(m)));
                  }
                  q = null;
                }
              else q = null;
              (x !== null && ic(v, h, x, q, !1), I !== null && M !== null && ic(v, M, I, q, !0));
            }
          }
          a: {
            if (
              ((h = c ? Hu(c) : window),
              (x = h.nodeName && h.nodeName.toLowerCase()),
              x === "select" || (x === "input" && h.type === "file"))
            )
              var N = xs;
            else if (Ls(h))
              if (t1) N = p4;
              else {
                N = s4;
                var n = n4;
              }
            else
              ((x = h.nodeName),
                !x || x.toLowerCase() !== "input" || (h.type !== "checkbox" && h.type !== "radio")
                  ? c && qr(c.elementType) && (N = xs)
                  : (N = c4));
            if (N && (N = N(a, c))) {
              e1(v, N, t, g);
              break a;
            }
            (n && n(a, h, c),
              a === "focusout" &&
                c &&
                h.type === "number" &&
                c.memoizedProps.value != null &&
                zf(h, "number", h.value));
          }
          switch (((n = c ? Hu(c) : window), a)) {
            case "focusin":
              (Ls(n) || n.contentEditable === "true") && ((El = n), (Hf = c), (Qu = null));
              break;
            case "focusout":
              Qu = Hf = El = null;
              break;
            case "mousedown":
              Vf = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((Vf = !1), Cs(v, t, g));
              break;
            case "selectionchange":
              if (h4) break;
            case "keydown":
            case "keyup":
              Cs(v, t, g);
          }
          var p;
          if (Dr)
            a: {
              switch (a) {
                case "compositionstart":
                  var C = "onCompositionStart";
                  break a;
                case "compositionend":
                  C = "onCompositionEnd";
                  break a;
                case "compositionupdate":
                  C = "onCompositionUpdate";
                  break a;
              }
              C = void 0;
            }
          else
            zl
              ? $c(a, t) && (C = "onCompositionEnd")
              : a === "keydown" && t.keyCode === 229 && (C = "onCompositionStart");
          (C &&
            (_c &&
              t.locale !== "ko" &&
              (zl || C !== "onCompositionStart"
                ? C === "onCompositionEnd" && zl && (p = jc())
                : ((wt = g), (wr = "value" in wt ? wt.value : wt.textContent), (zl = !0))),
            (n = jd(c, C)),
            0 < n.length &&
              ((C = new ms(C, a, null, t, g)),
              v.push({ event: C, listeners: n }),
              p ? (C.data = p) : ((p = a1(t)), p !== null && (C.data = p)))),
            (p = o4 ? d4(a, t) : i4(a, t)) &&
              ((C = jd(c, "onBeforeInput")),
              0 < C.length &&
                ((n = new ms("onBeforeInput", "beforeinput", null, t, g)),
                v.push({ event: n, listeners: C }),
                (n.data = p))),
            _4(v, a, c, t, g));
        }
        K2(v, e);
      });
    }
    function po(a, e, t) {
      return { instance: a, listener: e, currentTarget: t };
    }
    function jd(a, e) {
      for (var t = e + "Capture", l = []; a !== null;) {
        var u = a,
          o = u.stateNode;
        if (
          ((u = u.tag),
          (u !== 5 && u !== 26 && u !== 27) ||
            o === null ||
            ((u = lo(a, t)),
            u != null && l.unshift(po(a, u, o)),
            (u = lo(a, e)),
            u != null && l.push(po(a, u, o))),
          a.tag === 3)
        )
          return l;
        a = a.return;
      }
      return [];
    }
    function ap(a) {
      if (a === null) return null;
      do a = a.return;
      while (a && a.tag !== 5 && a.tag !== 27);
      return a || null;
    }
    function ic(a, e, t, l, u) {
      for (var o = e._reactName, i = []; t !== null && t !== l;) {
        var f = t,
          r = f.alternate,
          c = f.stateNode;
        if (((f = f.tag), r !== null && r === l)) break;
        ((f !== 5 && f !== 26 && f !== 27) ||
          c === null ||
          ((r = c),
          u
            ? ((c = lo(t, o)), c != null && i.unshift(po(t, c, r)))
            : u || ((c = lo(t, o)), c != null && i.push(po(t, c, r)))),
          (t = t.return));
      }
      i.length !== 0 && a.push({ event: e, listeners: i });
    }
    var ep = /\r\n?/g,
      tp = /\u0000|\uFFFD/g;
    function fc(a) {
      return (typeof a == "string" ? a : "" + a)
        .replace(
          ep,
          `
`,
        )
        .replace(tp, "");
    }
    function _2(a, e) {
      return ((e = fc(e)), fc(a) === e);
    }
    function ba(a, e, t, l, u, o) {
      switch (t) {
        case "children":
          typeof l == "string"
            ? e === "body" || (e === "textarea" && l === "") || au(a, l)
            : (typeof l == "number" || typeof l == "bigint") && e !== "body" && au(a, "" + l);
          break;
        case "className":
          ad(a, "class", l);
          break;
        case "tabIndex":
          ad(a, "tabindex", l);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ad(a, t, l);
          break;
        case "style":
          Yc(a, l, o);
          break;
        case "data":
          if (e !== "object") {
            ad(a, "data", l);
            break;
          }
        case "src":
        case "href":
          if (l === "" && (e !== "a" || t !== "href")) {
            a.removeAttribute(t);
            break;
          }
          if (
            l == null ||
            typeof l == "function" ||
            typeof l == "symbol" ||
            typeof l == "boolean"
          ) {
            a.removeAttribute(t);
            break;
          }
          ((l = hd("" + l)), a.setAttribute(t, l));
          break;
        case "action":
        case "formAction":
          if (typeof l == "function") {
            a.setAttribute(
              t,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
            );
            break;
          } else
            typeof o == "function" &&
              (t === "formAction"
                ? (e !== "input" && ba(a, e, "name", u.name, u, null),
                  ba(a, e, "formEncType", u.formEncType, u, null),
                  ba(a, e, "formMethod", u.formMethod, u, null),
                  ba(a, e, "formTarget", u.formTarget, u, null))
                : (ba(a, e, "encType", u.encType, u, null),
                  ba(a, e, "method", u.method, u, null),
                  ba(a, e, "target", u.target, u, null)));
          if (l == null || typeof l == "symbol" || typeof l == "boolean") {
            a.removeAttribute(t);
            break;
          }
          ((l = hd("" + l)), a.setAttribute(t, l));
          break;
        case "onClick":
          l != null && (a.onclick = dt);
          break;
        case "onScroll":
          l != null && ta("scroll", a);
          break;
        case "onScrollEnd":
          l != null && ta("scrollend", a);
          break;
        case "dangerouslySetInnerHTML":
          if (l != null) {
            if (typeof l != "object" || !("__html" in l)) throw Error(k(61));
            if (((t = l.__html), t != null)) {
              if (u.children != null) throw Error(k(60));
              a.innerHTML = t;
            }
          }
          break;
        case "multiple":
          a.multiple = l && typeof l != "function" && typeof l != "symbol";
          break;
        case "muted":
          a.muted = l && typeof l != "function" && typeof l != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (
            l == null ||
            typeof l == "function" ||
            typeof l == "boolean" ||
            typeof l == "symbol"
          ) {
            a.removeAttribute("xlink:href");
            break;
          }
          ((t = hd("" + l)), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t));
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          l != null && typeof l != "function" && typeof l != "symbol"
            ? a.setAttribute(t, "" + l)
            : a.removeAttribute(t);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          l && typeof l != "function" && typeof l != "symbol"
            ? a.setAttribute(t, "")
            : a.removeAttribute(t);
          break;
        case "capture":
        case "download":
          l === !0
            ? a.setAttribute(t, "")
            : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol"
              ? a.setAttribute(t, l)
              : a.removeAttribute(t);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l
            ? a.setAttribute(t, l)
            : a.removeAttribute(t);
          break;
        case "rowSpan":
        case "start":
          l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
            ? a.removeAttribute(t)
            : a.setAttribute(t, l);
          break;
        case "popover":
          (ta("beforetoggle", a), ta("toggle", a), md(a, "popover", l));
          break;
        case "xlinkActuate":
          _e(a, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
          break;
        case "xlinkArcrole":
          _e(a, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
          break;
        case "xlinkRole":
          _e(a, "http://www.w3.org/1999/xlink", "xlink:role", l);
          break;
        case "xlinkShow":
          _e(a, "http://www.w3.org/1999/xlink", "xlink:show", l);
          break;
        case "xlinkTitle":
          _e(a, "http://www.w3.org/1999/xlink", "xlink:title", l);
          break;
        case "xlinkType":
          _e(a, "http://www.w3.org/1999/xlink", "xlink:type", l);
          break;
        case "xmlBase":
          _e(a, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
          break;
        case "xmlLang":
          _e(a, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
          break;
        case "xmlSpace":
          _e(a, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
          break;
        case "is":
          md(a, "is", l);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
            ((t = B3.get(t) || t), md(a, t, l));
      }
    }
    function sr(a, e, t, l, u, o) {
      switch (t) {
        case "style":
          Yc(a, l, o);
          break;
        case "dangerouslySetInnerHTML":
          if (l != null) {
            if (typeof l != "object" || !("__html" in l)) throw Error(k(61));
            if (((t = l.__html), t != null)) {
              if (u.children != null) throw Error(k(60));
              a.innerHTML = t;
            }
          }
          break;
        case "children":
          typeof l == "string"
            ? au(a, l)
            : (typeof l == "number" || typeof l == "bigint") && au(a, "" + l);
          break;
        case "onScroll":
          l != null && ta("scroll", a);
          break;
        case "onScrollEnd":
          l != null && ta("scrollend", a);
          break;
        case "onClick":
          l != null && (a.onclick = dt);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Pc.hasOwnProperty(t))
            a: {
              if (
                t[0] === "o" &&
                t[1] === "n" &&
                ((u = t.endsWith("Capture")),
                (e = t.slice(2, u ? t.length - 7 : void 0)),
                (o = a[ne] || null),
                (o = o != null ? o[t] : null),
                typeof o == "function" && a.removeEventListener(e, o, u),
                typeof l == "function")
              ) {
                (typeof o != "function" &&
                  o !== null &&
                  (t in a ? (a[t] = null) : a.hasAttribute(t) && a.removeAttribute(t)),
                  a.addEventListener(e, l, u));
                break a;
              }
              t in a ? (a[t] = l) : l === !0 ? a.setAttribute(t, "") : md(a, t, l);
            }
      }
    }
    function _a(a, e, t) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          (ta("error", a), ta("load", a));
          var l = !1,
            u = !1,
            o;
          for (o in t)
            if (t.hasOwnProperty(o)) {
              var i = t[o];
              if (i != null)
                switch (o) {
                  case "src":
                    l = !0;
                    break;
                  case "srcSet":
                    u = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(k(137, e));
                  default:
                    ba(a, e, o, i, t, null);
                }
            }
          (u && ba(a, e, "srcSet", t.srcSet, t, null), l && ba(a, e, "src", t.src, t, null));
          return;
        case "input":
          ta("invalid", a);
          var f = (o = i = u = null),
            r = null,
            c = null;
          for (l in t)
            if (t.hasOwnProperty(l)) {
              var g = t[l];
              if (g != null)
                switch (l) {
                  case "name":
                    u = g;
                    break;
                  case "type":
                    i = g;
                    break;
                  case "checked":
                    r = g;
                    break;
                  case "defaultChecked":
                    c = g;
                    break;
                  case "value":
                    o = g;
                    break;
                  case "defaultValue":
                    f = g;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (g != null) throw Error(k(137, e));
                    break;
                  default:
                    ba(a, e, l, g, t, null);
                }
            }
          Jc(a, o, f, r, c, i, u, !1);
          return;
        case "select":
          (ta("invalid", a), (l = i = o = null));
          for (u in t)
            if (t.hasOwnProperty(u) && ((f = t[u]), f != null))
              switch (u) {
                case "value":
                  o = f;
                  break;
                case "defaultValue":
                  i = f;
                  break;
                case "multiple":
                  l = f;
                default:
                  ba(a, e, u, f, t, null);
              }
          ((e = o),
            (t = i),
            (a.multiple = !!l),
            e != null ? Jl(a, !!l, e, !1) : t != null && Jl(a, !!l, t, !0));
          return;
        case "textarea":
          (ta("invalid", a), (o = u = l = null));
          for (i in t)
            if (t.hasOwnProperty(i) && ((f = t[i]), f != null))
              switch (i) {
                case "value":
                  l = f;
                  break;
                case "defaultValue":
                  u = f;
                  break;
                case "children":
                  o = f;
                  break;
                case "dangerouslySetInnerHTML":
                  if (f != null) throw Error(k(91));
                  break;
                default:
                  ba(a, e, i, f, t, null);
              }
          Wc(a, l, u, o);
          return;
        case "option":
          for (r in t)
            t.hasOwnProperty(r) &&
              ((l = t[r]), l != null) &&
              (r === "selected"
                ? (a.selected = l && typeof l != "function" && typeof l != "symbol")
                : ba(a, e, r, l, t, null));
          return;
        case "dialog":
          (ta("beforetoggle", a), ta("toggle", a), ta("cancel", a), ta("close", a));
          break;
        case "iframe":
        case "object":
          ta("load", a);
          break;
        case "video":
        case "audio":
          for (l = 0; l < co.length; l++) ta(co[l], a);
          break;
        case "image":
          (ta("error", a), ta("load", a));
          break;
        case "details":
          ta("toggle", a);
          break;
        case "embed":
        case "source":
        case "link":
          (ta("error", a), ta("load", a));
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (c in t)
            if (t.hasOwnProperty(c) && ((l = t[c]), l != null))
              switch (c) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(137, e));
                default:
                  ba(a, e, c, l, t, null);
              }
          return;
        default:
          if (qr(e)) {
            for (g in t)
              t.hasOwnProperty(g) && ((l = t[g]), l !== void 0 && sr(a, e, g, l, t, void 0));
            return;
          }
      }
      for (f in t) t.hasOwnProperty(f) && ((l = t[f]), l != null && ba(a, e, f, l, t, null));
    }
    function lp(a, e, t, l) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var u = null,
            o = null,
            i = null,
            f = null,
            r = null,
            c = null,
            g = null;
          for (x in t) {
            var v = t[x];
            if (t.hasOwnProperty(x) && v != null)
              switch (x) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  r = v;
                default:
                  l.hasOwnProperty(x) || ba(a, e, x, null, l, v);
              }
          }
          for (var h in l) {
            var x = l[h];
            if (((v = t[h]), l.hasOwnProperty(h) && (x != null || v != null)))
              switch (h) {
                case "type":
                  o = x;
                  break;
                case "name":
                  u = x;
                  break;
                case "checked":
                  c = x;
                  break;
                case "defaultChecked":
                  g = x;
                  break;
                case "value":
                  i = x;
                  break;
                case "defaultValue":
                  f = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null) throw Error(k(137, e));
                  break;
                default:
                  x !== v && ba(a, e, h, x, l, v);
              }
          }
          Of(a, i, f, r, c, g, o, u);
          return;
        case "select":
          x = i = f = h = null;
          for (o in t)
            if (((r = t[o]), t.hasOwnProperty(o) && r != null))
              switch (o) {
                case "value":
                  break;
                case "multiple":
                  x = r;
                default:
                  l.hasOwnProperty(o) || ba(a, e, o, null, l, r);
              }
          for (u in l)
            if (((o = l[u]), (r = t[u]), l.hasOwnProperty(u) && (o != null || r != null)))
              switch (u) {
                case "value":
                  h = o;
                  break;
                case "defaultValue":
                  f = o;
                  break;
                case "multiple":
                  i = o;
                default:
                  o !== r && ba(a, e, u, o, l, r);
              }
          ((e = f),
            (t = i),
            (l = x),
            h != null
              ? Jl(a, !!t, h, !1)
              : !!l != !!t && (e != null ? Jl(a, !!t, e, !0) : Jl(a, !!t, t ? [] : "", !1)));
          return;
        case "textarea":
          x = h = null;
          for (f in t)
            if (((u = t[f]), t.hasOwnProperty(f) && u != null && !l.hasOwnProperty(f)))
              switch (f) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  ba(a, e, f, null, l, u);
              }
          for (i in l)
            if (((u = l[i]), (o = t[i]), l.hasOwnProperty(i) && (u != null || o != null)))
              switch (i) {
                case "value":
                  h = u;
                  break;
                case "defaultValue":
                  x = u;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (u != null) throw Error(k(91));
                  break;
                default:
                  u !== o && ba(a, e, i, u, l, o);
              }
          Zc(a, h, x);
          return;
        case "option":
          for (var I in t)
            ((h = t[I]),
              t.hasOwnProperty(I) &&
                h != null &&
                !l.hasOwnProperty(I) &&
                (I === "selected" ? (a.selected = !1) : ba(a, e, I, null, l, h)));
          for (r in l)
            ((h = l[r]),
              (x = t[r]),
              l.hasOwnProperty(r) &&
                h !== x &&
                (h != null || x != null) &&
                (r === "selected"
                  ? (a.selected = h && typeof h != "function" && typeof h != "symbol")
                  : ba(a, e, r, h, l, x)));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var q in t)
            ((h = t[q]),
              t.hasOwnProperty(q) && h != null && !l.hasOwnProperty(q) && ba(a, e, q, null, l, h));
          for (c in l)
            if (
              ((h = l[c]), (x = t[c]), l.hasOwnProperty(c) && h !== x && (h != null || x != null))
            )
              switch (c) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (h != null) throw Error(k(137, e));
                  break;
                default:
                  ba(a, e, c, h, l, x);
              }
          return;
        default:
          if (qr(e)) {
            for (var M in t)
              ((h = t[M]),
                t.hasOwnProperty(M) &&
                  h !== void 0 &&
                  !l.hasOwnProperty(M) &&
                  sr(a, e, M, void 0, l, h));
            for (g in l)
              ((h = l[g]),
                (x = t[g]),
                !l.hasOwnProperty(g) ||
                  h === x ||
                  (h === void 0 && x === void 0) ||
                  sr(a, e, g, h, l, x));
            return;
          }
      }
      for (var s in t)
        ((h = t[s]),
          t.hasOwnProperty(s) && h != null && !l.hasOwnProperty(s) && ba(a, e, s, null, l, h));
      for (v in l)
        ((h = l[v]),
          (x = t[v]),
          !l.hasOwnProperty(v) || h === x || (h == null && x == null) || ba(a, e, v, h, l, x));
    }
    function rc(a) {
      switch (a) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function up() {
      if (typeof performance.getEntriesByType == "function") {
        for (
          var a = 0, e = 0, t = performance.getEntriesByType("resource"), l = 0;
          l < t.length;
          l++
        ) {
          var u = t[l],
            o = u.transferSize,
            i = u.initiatorType,
            f = u.duration;
          if (o && f && rc(i)) {
            for (i = 0, f = u.responseEnd, l += 1; l < t.length; l++) {
              var r = t[l],
                c = r.startTime;
              if (c > f) break;
              var g = r.transferSize,
                v = r.initiatorType;
              g && rc(v) && ((r = r.responseEnd), (i += g * (r < f ? 1 : (f - c) / (r - c))));
            }
            if ((--l, (e += (8 * (o + i)) / (u.duration / 1e3)), a++, 10 < a)) break;
          }
        }
        if (0 < a) return e / a / 1e6;
      }
      return navigator.connection && ((a = navigator.connection.downlink), typeof a == "number")
        ? a
        : 5;
    }
    var cr = null,
      pr = null;
    function _d(a) {
      return a.nodeType === 9 ? a : a.ownerDocument;
    }
    function nc(a) {
      switch (a) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function $2(a, e) {
      if (a === 0)
        switch (e) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return a === 1 && e === "foreignObject" ? 0 : a;
    }
    function mr(a, e) {
      return (
        a === "textarea" ||
        a === "noscript" ||
        typeof e.children == "string" ||
        typeof e.children == "number" ||
        typeof e.children == "bigint" ||
        (typeof e.dangerouslySetInnerHTML == "object" &&
          e.dangerouslySetInnerHTML !== null &&
          e.dangerouslySetInnerHTML.__html != null)
      );
    }
    var If = null;
    function op() {
      var a = window.event;
      return a && a.type === "popstate" ? (a === If ? !1 : ((If = a), !0)) : ((If = null), !1);
    }
    var a0 = typeof setTimeout == "function" ? setTimeout : void 0,
      dp = typeof clearTimeout == "function" ? clearTimeout : void 0,
      sc = typeof Promise == "function" ? Promise : void 0,
      ip =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof sc < "u"
            ? function (a) {
                return sc.resolve(null).then(a).catch(fp);
              }
            : a0;
    function fp(a) {
      setTimeout(function () {
        throw a;
      });
    }
    function Zt(a) {
      return a === "head";
    }
    function cc(a, e) {
      var t = e,
        l = 0;
      do {
        var u = t.nextSibling;
        if ((a.removeChild(t), u && u.nodeType === 8))
          if (((t = u.data), t === "/$" || t === "/&")) {
            if (l === 0) {
              (a.removeChild(u), fu(e));
              return;
            }
            l--;
          } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&") l++;
          else if (t === "html") eo(a.ownerDocument.documentElement);
          else if (t === "head") {
            ((t = a.ownerDocument.head), eo(t));
            for (var o = t.firstChild; o;) {
              var i = o.nextSibling,
                f = o.nodeName;
              (o[bo] ||
                f === "SCRIPT" ||
                f === "STYLE" ||
                (f === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
                t.removeChild(o),
                (o = i));
            }
          } else t === "body" && eo(a.ownerDocument.body);
        t = u;
      } while (t);
      fu(e);
    }
    function pc(a, e) {
      var t = a;
      a = 0;
      do {
        var l = t.nextSibling;
        if (
          (t.nodeType === 1
            ? e
              ? ((t._stashedDisplay = t.style.display), (t.style.display = "none"))
              : ((t.style.display = t._stashedDisplay || ""),
                t.getAttribute("style") === "" && t.removeAttribute("style"))
            : t.nodeType === 3 &&
              (e
                ? ((t._stashedText = t.nodeValue), (t.nodeValue = ""))
                : (t.nodeValue = t._stashedText || "")),
          l && l.nodeType === 8)
        )
          if (((t = l.data), t === "/$")) {
            if (a === 0) break;
            a--;
          } else (t !== "$" && t !== "$?" && t !== "$~" && t !== "$!") || a++;
        t = l;
      } while (t);
    }
    function hr(a) {
      var e = a.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
        var t = e;
        switch (((e = e.nextSibling), t.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            (hr(t), kr(t));
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (t.rel.toLowerCase() === "stylesheet") continue;
        }
        a.removeChild(t);
      }
    }
    function rp(a, e, t, l) {
      for (; a.nodeType === 1;) {
        var u = t;
        if (a.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!l && (a.nodeName !== "INPUT" || a.type !== "hidden")) break;
        } else if (l) {
          if (!a[bo])
            switch (e) {
              case "meta":
                if (!a.hasAttribute("itemprop")) break;
                return a;
              case "link":
                if (
                  ((o = a.getAttribute("rel")),
                  o === "stylesheet" && a.hasAttribute("data-precedence"))
                )
                  break;
                if (
                  o !== u.rel ||
                  a.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) ||
                  a.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin) ||
                  a.getAttribute("title") !== (u.title == null ? null : u.title)
                )
                  break;
                return a;
              case "style":
                if (a.hasAttribute("data-precedence")) break;
                return a;
              case "script":
                if (
                  ((o = a.getAttribute("src")),
                  (o !== (u.src == null ? null : u.src) ||
                    a.getAttribute("type") !== (u.type == null ? null : u.type) ||
                    a.getAttribute("crossorigin") !==
                      (u.crossOrigin == null ? null : u.crossOrigin)) &&
                    o &&
                    a.hasAttribute("async") &&
                    !a.hasAttribute("itemprop"))
                )
                  break;
                return a;
              default:
                return a;
            }
        } else if (e === "input" && a.type === "hidden") {
          var o = u.name == null ? null : "" + u.name;
          if (u.type === "hidden" && a.getAttribute("name") === o) return a;
        } else return a;
        if (((a = Re(a.nextSibling)), a === null)) break;
      }
      return null;
    }
    function np(a, e, t) {
      if (e === "") return null;
      for (; a.nodeType !== 3;)
        if (
          ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !t) ||
          ((a = Re(a.nextSibling)), a === null)
        )
          return null;
      return a;
    }
    function e0(a, e) {
      for (; a.nodeType !== 8;)
        if (
          ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !e) ||
          ((a = Re(a.nextSibling)), a === null)
        )
          return null;
      return a;
    }
    function gr(a) {
      return a.data === "$?" || a.data === "$~";
    }
    function vr(a) {
      return a.data === "$!" || (a.data === "$?" && a.ownerDocument.readyState !== "loading");
    }
    function sp(a, e) {
      var t = a.ownerDocument;
      if (a.data === "$~") a._reactRetry = e;
      else if (a.data !== "$?" || t.readyState !== "loading") e();
      else {
        var l = function () {
          (e(), t.removeEventListener("DOMContentLoaded", l));
        };
        (t.addEventListener("DOMContentLoaded", l), (a._reactRetry = l));
      }
    }
    function Re(a) {
      for (; a != null; a = a.nextSibling) {
        var e = a.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (
            ((e = a.data),
            e === "$" ||
              e === "$!" ||
              e === "$?" ||
              e === "$~" ||
              e === "&" ||
              e === "F!" ||
              e === "F")
          )
            break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return a;
    }
    var Lr = null;
    function mc(a) {
      a = a.nextSibling;
      for (var e = 0; a;) {
        if (a.nodeType === 8) {
          var t = a.data;
          if (t === "/$" || t === "/&") {
            if (e === 0) return Re(a.nextSibling);
            e--;
          } else (t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&") || e++;
        }
        a = a.nextSibling;
      }
      return null;
    }
    function hc(a) {
      a = a.previousSibling;
      for (var e = 0; a;) {
        if (a.nodeType === 8) {
          var t = a.data;
          if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
            if (e === 0) return a;
            e--;
          } else (t !== "/$" && t !== "/&") || e++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    function t0(a, e, t) {
      switch (((e = _d(t)), a)) {
        case "html":
          if (((a = e.documentElement), !a)) throw Error(k(452));
          return a;
        case "head":
          if (((a = e.head), !a)) throw Error(k(453));
          return a;
        case "body":
          if (((a = e.body), !a)) throw Error(k(454));
          return a;
        default:
          throw Error(k(451));
      }
    }
    function eo(a) {
      for (var e = a.attributes; e.length;) a.removeAttributeNode(e[0]);
      kr(a);
    }
    var Ne = new Map(),
      gc = new Set();
    function $d(a) {
      return typeof a.getRootNode == "function"
        ? a.getRootNode()
        : a.nodeType === 9
          ? a
          : a.ownerDocument;
    }
    var gt = pa.d;
    pa.d = { f: cp, r: pp, D: mp, C: hp, L: gp, m: vp, X: xp, S: Lp, M: yp };
    function cp() {
      var a = gt.f(),
        e = gi();
      return a || e;
    }
    function pp(a) {
      var e = nu(a);
      e !== null && e.tag === 5 && e.type === "form" ? Y1(e) : gt.r(a);
    }
    var mu = typeof document > "u" ? null : document;
    function l0(a, e, t) {
      var l = mu;
      if (l && typeof e == "string" && e) {
        var u = we(e);
        ((u = 'link[rel="' + a + '"][href="' + u + '"]'),
          typeof t == "string" && (u += '[crossorigin="' + t + '"]'),
          gc.has(u) ||
            (gc.add(u),
            (a = { rel: a, crossOrigin: t, href: e }),
            l.querySelector(u) === null &&
              ((e = l.createElement("link")), _a(e, "link", a), Qa(e), l.head.appendChild(e))));
      }
    }
    function mp(a) {
      (gt.D(a), l0("dns-prefetch", a, null));
    }
    function hp(a, e) {
      (gt.C(a, e), l0("preconnect", a, e));
    }
    function gp(a, e, t) {
      gt.L(a, e, t);
      var l = mu;
      if (l && a && e) {
        var u = 'link[rel="preload"][as="' + we(e) + '"]';
        e === "image" && t && t.imageSrcSet
          ? ((u += '[imagesrcset="' + we(t.imageSrcSet) + '"]'),
            typeof t.imageSizes == "string" && (u += '[imagesizes="' + we(t.imageSizes) + '"]'))
          : (u += '[href="' + we(a) + '"]');
        var o = u;
        switch (e) {
          case "style":
            o = iu(a);
            break;
          case "script":
            o = hu(a);
        }
        Ne.has(o) ||
          ((a = Ta(
            { rel: "preload", href: e === "image" && t && t.imageSrcSet ? void 0 : a, as: e },
            t,
          )),
          Ne.set(o, a),
          l.querySelector(u) !== null ||
            (e === "style" && l.querySelector(qo(o))) ||
            (e === "script" && l.querySelector(Mo(o))) ||
            ((e = l.createElement("link")), _a(e, "link", a), Qa(e), l.head.appendChild(e)));
      }
    }
    function vp(a, e) {
      gt.m(a, e);
      var t = mu;
      if (t && a) {
        var l = e && typeof e.as == "string" ? e.as : "script",
          u = 'link[rel="modulepreload"][as="' + we(l) + '"][href="' + we(a) + '"]',
          o = u;
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            o = hu(a);
        }
        if (
          !Ne.has(o) &&
          ((a = Ta({ rel: "modulepreload", href: a }, e)),
          Ne.set(o, a),
          t.querySelector(u) === null)
        ) {
          switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (t.querySelector(Mo(o))) return;
          }
          ((l = t.createElement("link")), _a(l, "link", a), Qa(l), t.head.appendChild(l));
        }
      }
    }
    function Lp(a, e, t) {
      gt.S(a, e, t);
      var l = mu;
      if (l && a) {
        var u = Ql(l).hoistableStyles,
          o = iu(a);
        e = e || "default";
        var i = u.get(o);
        if (!i) {
          var f = { loading: 0, preload: null };
          if ((i = l.querySelector(qo(o)))) f.loading = 5;
          else {
            ((a = Ta({ rel: "stylesheet", href: a, "data-precedence": e }, t)),
              (t = Ne.get(o)) && cn(a, t));
            var r = (i = l.createElement("link"));
            (Qa(r),
              _a(r, "link", a),
              (r._p = new Promise(function (c, g) {
                ((r.onload = c), (r.onerror = g));
              })),
              r.addEventListener("load", function () {
                f.loading |= 1;
              }),
              r.addEventListener("error", function () {
                f.loading |= 2;
              }),
              (f.loading |= 4),
              Ad(i, e, l));
          }
          ((i = { type: "stylesheet", instance: i, count: 1, state: f }), u.set(o, i));
        }
      }
    }
    function xp(a, e) {
      gt.X(a, e);
      var t = mu;
      if (t && a) {
        var l = Ql(t).hoistableScripts,
          u = hu(a),
          o = l.get(u);
        o ||
          ((o = t.querySelector(Mo(u))),
          o ||
            ((a = Ta({ src: a, async: !0 }, e)),
            (e = Ne.get(u)) && pn(a, e),
            (o = t.createElement("script")),
            Qa(o),
            _a(o, "link", a),
            t.head.appendChild(o)),
          (o = { type: "script", instance: o, count: 1, state: null }),
          l.set(u, o));
      }
    }
    function yp(a, e) {
      gt.M(a, e);
      var t = mu;
      if (t && a) {
        var l = Ql(t).hoistableScripts,
          u = hu(a),
          o = l.get(u);
        o ||
          ((o = t.querySelector(Mo(u))),
          o ||
            ((a = Ta({ src: a, async: !0, type: "module" }, e)),
            (e = Ne.get(u)) && pn(a, e),
            (o = t.createElement("script")),
            Qa(o),
            _a(o, "link", a),
            t.head.appendChild(o)),
          (o = { type: "script", instance: o, count: 1, state: null }),
          l.set(u, o));
      }
    }
    function vc(a, e, t, l) {
      var u = (u = Rt.current) ? $d(u) : null;
      if (!u) throw Error(k(446));
      switch (a) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof t.precedence == "string" && typeof t.href == "string"
            ? ((e = iu(t.href)),
              (t = Ql(u).hoistableStyles),
              (l = t.get(e)),
              l || ((l = { type: "style", instance: null, count: 0, state: null }), t.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            t.rel === "stylesheet" &&
            typeof t.href == "string" &&
            typeof t.precedence == "string"
          ) {
            a = iu(t.href);
            var o = Ql(u).hoistableStyles,
              i = o.get(a);
            if (
              (i ||
                ((u = u.ownerDocument || u),
                (i = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(a, i),
                (o = u.querySelector(qo(a))) && !o._p && ((i.instance = o), (i.state.loading = 5)),
                Ne.has(a) ||
                  ((t = {
                    rel: "preload",
                    as: "style",
                    href: t.href,
                    crossOrigin: t.crossOrigin,
                    integrity: t.integrity,
                    media: t.media,
                    hrefLang: t.hrefLang,
                    referrerPolicy: t.referrerPolicy,
                  }),
                  Ne.set(a, t),
                  o || bp(u, a, t, i.state))),
              e && l === null)
            )
              throw Error(k(528, ""));
            return i;
          }
          if (e && l !== null) throw Error(k(529, ""));
          return null;
        case "script":
          return (
            (e = t.async),
            (t = t.src),
            typeof t == "string" && e && typeof e != "function" && typeof e != "symbol"
              ? ((e = hu(t)),
                (t = Ql(u).hoistableScripts),
                (l = t.get(e)),
                l || ((l = { type: "script", instance: null, count: 0, state: null }), t.set(e, l)),
                l)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(k(444, a));
      }
    }
    function iu(a) {
      return 'href="' + we(a) + '"';
    }
    function qo(a) {
      return 'link[rel="stylesheet"][' + a + "]";
    }
    function u0(a) {
      return Ta({}, a, { "data-precedence": a.precedence, precedence: null });
    }
    function bp(a, e, t, l) {
      a.querySelector('link[rel="preload"][as="style"][' + e + "]")
        ? (l.loading = 1)
        : ((e = a.createElement("link")),
          (l.preload = e),
          e.addEventListener("load", function () {
            return (l.loading |= 1);
          }),
          e.addEventListener("error", function () {
            return (l.loading |= 2);
          }),
          _a(e, "link", t),
          Qa(e),
          a.head.appendChild(e));
    }
    function hu(a) {
      return '[src="' + we(a) + '"]';
    }
    function Mo(a) {
      return "script[async]" + a;
    }
    function Lc(a, e, t) {
      if ((e.count++, e.instance === null))
        switch (e.type) {
          case "style":
            var l = a.querySelector('style[data-href~="' + we(t.href) + '"]');
            if (l) return ((e.instance = l), Qa(l), l);
            var u = Ta({}, t, {
              "data-href": t.href,
              "data-precedence": t.precedence,
              href: null,
              precedence: null,
            });
            return (
              (l = (a.ownerDocument || a).createElement("style")),
              Qa(l),
              _a(l, "style", u),
              Ad(l, t.precedence, a),
              (e.instance = l)
            );
          case "stylesheet":
            u = iu(t.href);
            var o = a.querySelector(qo(u));
            if (o) return ((e.state.loading |= 4), (e.instance = o), Qa(o), o);
            ((l = u0(t)),
              (u = Ne.get(u)) && cn(l, u),
              (o = (a.ownerDocument || a).createElement("link")),
              Qa(o));
            var i = o;
            return (
              (i._p = new Promise(function (f, r) {
                ((i.onload = f), (i.onerror = r));
              })),
              _a(o, "link", l),
              (e.state.loading |= 4),
              Ad(o, t.precedence, a),
              (e.instance = o)
            );
          case "script":
            return (
              (o = hu(t.src)),
              (u = a.querySelector(Mo(o)))
                ? ((e.instance = u), Qa(u), u)
                : ((l = t),
                  (u = Ne.get(o)) && ((l = Ta({}, t)), pn(l, u)),
                  (a = a.ownerDocument || a),
                  (u = a.createElement("script")),
                  Qa(u),
                  _a(u, "link", l),
                  a.head.appendChild(u),
                  (e.instance = u))
            );
          case "void":
            return null;
          default:
            throw Error(k(443, e.type));
        }
      else
        e.type === "stylesheet" &&
          (e.state.loading & 4) === 0 &&
          ((l = e.instance), (e.state.loading |= 4), Ad(l, t.precedence, a));
      return e.instance;
    }
    function Ad(a, e, t) {
      for (
        var l = t.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]',
          ),
          u = l.length ? l[l.length - 1] : null,
          o = u,
          i = 0;
        i < l.length;
        i++
      ) {
        var f = l[i];
        if (f.dataset.precedence === e) o = f;
        else if (o !== u) break;
      }
      o
        ? o.parentNode.insertBefore(a, o.nextSibling)
        : ((e = t.nodeType === 9 ? t.head : t), e.insertBefore(a, e.firstChild));
    }
    function cn(a, e) {
      (a.crossOrigin == null && (a.crossOrigin = e.crossOrigin),
        a.referrerPolicy == null && (a.referrerPolicy = e.referrerPolicy),
        a.title == null && (a.title = e.title));
    }
    function pn(a, e) {
      (a.crossOrigin == null && (a.crossOrigin = e.crossOrigin),
        a.referrerPolicy == null && (a.referrerPolicy = e.referrerPolicy),
        a.integrity == null && (a.integrity = e.integrity));
    }
    var kd = null;
    function xc(a, e, t) {
      if (kd === null) {
        var l = new Map(),
          u = (kd = new Map());
        u.set(t, l);
      } else ((u = kd), (l = u.get(t)), l || ((l = new Map()), u.set(t, l)));
      if (l.has(a)) return l;
      for (l.set(a, null), t = t.getElementsByTagName(a), u = 0; u < t.length; u++) {
        var o = t[u];
        if (
          !(o[bo] || o[Ya] || (a === "link" && o.getAttribute("rel") === "stylesheet")) &&
          o.namespaceURI !== "http://www.w3.org/2000/svg"
        ) {
          var i = o.getAttribute(e) || "";
          i = a + i;
          var f = l.get(i);
          f ? f.push(o) : l.set(i, [o]);
        }
      }
      return l;
    }
    function yc(a, e, t) {
      ((a = a.ownerDocument || a),
        a.head.insertBefore(t, e === "title" ? a.querySelector("head > title") : null));
    }
    function Sp(a, e, t) {
      if (t === 1 || e.itemProp != null) return !1;
      switch (a) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
          return !0;
        case "link":
          if (
            typeof e.rel != "string" ||
            typeof e.href != "string" ||
            e.href === "" ||
            e.onLoad ||
            e.onError
          )
            break;
          return e.rel === "stylesheet"
            ? ((a = e.disabled), typeof e.precedence == "string" && a == null)
            : !0;
        case "script":
          if (
            e.async &&
            typeof e.async != "function" &&
            typeof e.async != "symbol" &&
            !e.onLoad &&
            !e.onError &&
            e.src &&
            typeof e.src == "string"
          )
            return !0;
      }
      return !1;
    }
    function o0(a) {
      return !(a.type === "stylesheet" && (a.state.loading & 3) === 0);
    }
    function Cp(a, e, t, l) {
      if (
        t.type === "stylesheet" &&
        (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
        (t.state.loading & 4) === 0
      ) {
        if (t.instance === null) {
          var u = iu(l.href),
            o = e.querySelector(qo(u));
          if (o) {
            ((e = o._p),
              e !== null &&
                typeof e == "object" &&
                typeof e.then == "function" &&
                (a.count++, (a = ai.bind(a)), e.then(a, a)),
              (t.state.loading |= 4),
              (t.instance = o),
              Qa(o));
            return;
          }
          ((o = e.ownerDocument || e),
            (l = u0(l)),
            (u = Ne.get(u)) && cn(l, u),
            (o = o.createElement("link")),
            Qa(o));
          var i = o;
          ((i._p = new Promise(function (f, r) {
            ((i.onload = f), (i.onerror = r));
          })),
            _a(o, "link", l),
            (t.instance = o));
        }
        (a.stylesheets === null && (a.stylesheets = new Map()),
          a.stylesheets.set(t, e),
          (e = t.state.preload) &&
            (t.state.loading & 3) === 0 &&
            (a.count++,
            (t = ai.bind(a)),
            e.addEventListener("load", t),
            e.addEventListener("error", t)));
      }
    }
    var Af = 0;
    function Ip(a, e) {
      return (
        a.stylesheets && a.count === 0 && qd(a, a.stylesheets),
        0 < a.count || 0 < a.imgCount
          ? function (t) {
              var l = setTimeout(function () {
                if ((a.stylesheets && qd(a, a.stylesheets), a.unsuspend)) {
                  var o = a.unsuspend;
                  ((a.unsuspend = null), o());
                }
              }, 6e4 + e);
              0 < a.imgBytes && Af === 0 && (Af = 62500 * up());
              var u = setTimeout(
                function () {
                  if (
                    ((a.waitingForImages = !1),
                    a.count === 0 && (a.stylesheets && qd(a, a.stylesheets), a.unsuspend))
                  ) {
                    var o = a.unsuspend;
                    ((a.unsuspend = null), o());
                  }
                },
                (a.imgBytes > Af ? 50 : 800) + e,
              );
              return (
                (a.unsuspend = t),
                function () {
                  ((a.unsuspend = null), clearTimeout(l), clearTimeout(u));
                }
              );
            }
          : null
      );
    }
    function ai() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) qd(this, this.stylesheets);
        else if (this.unsuspend) {
          var a = this.unsuspend;
          ((this.unsuspend = null), a());
        }
      }
    }
    var ei = null;
    function qd(a, e) {
      ((a.stylesheets = null),
        a.unsuspend !== null &&
          (a.count++, (ei = new Map()), e.forEach(Ap, a), (ei = null), ai.call(a)));
    }
    function Ap(a, e) {
      if (!(e.state.loading & 4)) {
        var t = ei.get(a);
        if (t) var l = t.get(null);
        else {
          ((t = new Map()), ei.set(a, t));
          for (
            var u = a.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0;
            o < u.length;
            o++
          ) {
            var i = u[o];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
              (t.set(i.dataset.precedence, i), (l = i));
          }
          l && t.set(null, l);
        }
        ((u = e.instance),
          (i = u.getAttribute("data-precedence")),
          (o = t.get(i) || l),
          o === l && t.set(null, u),
          t.set(i, u),
          this.count++,
          (l = ai.bind(this)),
          u.addEventListener("load", l),
          u.addEventListener("error", l),
          o
            ? o.parentNode.insertBefore(u, o.nextSibling)
            : ((a = a.nodeType === 9 ? a.head : a), a.insertBefore(u, a.firstChild)),
          (e.state.loading |= 4));
      }
    }
    var mo = {
      $$typeof: ot,
      Provider: null,
      Consumer: null,
      _currentValue: ll,
      _currentValue2: ll,
      _threadCount: 0,
    };
    function kp(a, e, t, l, u, o, i, f, r) {
      ((this.tag = 1),
        (this.containerInfo = a),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Ki(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Ki(0)),
        (this.hiddenUpdates = Ki(null)),
        (this.identifierPrefix = l),
        (this.onUncaughtError = u),
        (this.onCaughtError = o),
        (this.onRecoverableError = i),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = r),
        (this.incompleteTransitions = new Map()));
    }
    function d0(a, e, t, l, u, o, i, f, r, c, g, v) {
      return (
        (a = new kp(a, e, t, i, r, c, g, v, f)),
        (e = 1),
        o === !0 && (e |= 24),
        (o = he(3, null, null, e)),
        (a.current = o),
        (o.stateNode = a),
        (e = Er()),
        e.refCount++,
        (a.pooledCache = e),
        e.refCount++,
        (o.memoizedState = { element: l, isDehydrated: t, cache: e }),
        Vr(o),
        a
      );
    }
    function i0(a) {
      return a ? ((a = Vl), a) : Vl;
    }
    function f0(a, e, t, l, u, o) {
      ((u = i0(u)),
        l.context === null ? (l.context = u) : (l.pendingContext = u),
        (l = Ut(e)),
        (l.payload = { element: t }),
        (o = o === void 0 ? null : o),
        o !== null && (l.callback = o),
        (t = Ot(a, l, e)),
        t !== null && (re(t, a, e), Zu(t, a, e)));
    }
    function bc(a, e) {
      if (((a = a.memoizedState), a !== null && a.dehydrated !== null)) {
        var t = a.retryLane;
        a.retryLane = t !== 0 && t < e ? t : e;
      }
    }
    function mn(a, e) {
      (bc(a, e), (a = a.alternate) && bc(a, e));
    }
    function r0(a) {
      if (a.tag === 13 || a.tag === 31) {
        var e = gl(a, 67108864);
        (e !== null && re(e, a, 67108864), mn(a, 67108864));
      }
    }
    function Sc(a) {
      if (a.tag === 13 || a.tag === 31) {
        var e = ye();
        e = Ir(e);
        var t = gl(a, e);
        (t !== null && re(t, a, e), mn(a, e));
      }
    }
    var ti = !0;
    function qp(a, e, t, l) {
      var u = J.T;
      J.T = null;
      var o = pa.p;
      try {
        ((pa.p = 2), hn(a, e, t, l));
      } finally {
        ((pa.p = o), (J.T = u));
      }
    }
    function Mp(a, e, t, l) {
      var u = J.T;
      J.T = null;
      var o = pa.p;
      try {
        ((pa.p = 8), hn(a, e, t, l));
      } finally {
        ((pa.p = o), (J.T = u));
      }
    }
    function hn(a, e, t, l) {
      if (ti) {
        var u = xr(l);
        if (u === null) (Cf(a, e, l, li, t), Cc(a, l));
        else if (Tp(u, a, e, t, l)) l.stopPropagation();
        else if ((Cc(a, l), e & 4 && -1 < wp.indexOf(a))) {
          for (; u !== null;) {
            var o = nu(u);
            if (o !== null)
              switch (o.tag) {
                case 3:
                  if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                    var i = al(o.pendingLanes);
                    if (i !== 0) {
                      var f = o;
                      for (f.pendingLanes |= 2, f.entangledLanes |= 2; i;) {
                        var r = 1 << (31 - xe(i));
                        ((f.entanglements[1] |= r), (i &= ~r));
                      }
                      (We(o), (ca & 6) === 0 && ((Jd = ve() + 500), ko(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((f = gl(o, 2)), f !== null && re(f, o, 2), gi(), mn(o, 2));
              }
            if (((o = xr(l)), o === null && Cf(a, e, l, li, t), o === u)) break;
            u = o;
          }
          u !== null && l.stopPropagation();
        } else Cf(a, e, l, null, t);
      }
    }
    function xr(a) {
      return ((a = Mr(a)), gn(a));
    }
    var li = null;
    function gn(a) {
      if (((li = null), (a = Ul(a)), a !== null)) {
        var e = vo(a);
        if (e === null) a = null;
        else {
          var t = e.tag;
          if (t === 13) {
            if (((a = wc(e)), a !== null)) return a;
            a = null;
          } else if (t === 31) {
            if (((a = Tc(e)), a !== null)) return a;
            a = null;
          } else if (t === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            a = null;
          } else e !== a && (a = null);
        }
      }
      return ((li = a), null);
    }
    function n0(a) {
      switch (a) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (g3()) {
            case Nc:
              return 2;
            case Uc:
              return 8;
            case Bd:
            case v3:
              return 32;
            case Oc:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var yr = !1,
      Ft = null,
      Ht = null,
      Vt = null,
      ho = new Map(),
      go = new Map(),
      qt = [],
      wp =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " ",
        );
    function Cc(a, e) {
      switch (a) {
        case "focusin":
        case "focusout":
          Ft = null;
          break;
        case "dragenter":
        case "dragleave":
          Ht = null;
          break;
        case "mouseover":
        case "mouseout":
          Vt = null;
          break;
        case "pointerover":
        case "pointerout":
          ho.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          go.delete(e.pointerId);
      }
    }
    function Ou(a, e, t, l, u, o) {
      return a === null || a.nativeEvent !== o
        ? ((a = {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: l,
            nativeEvent: o,
            targetContainers: [u],
          }),
          e !== null && ((e = nu(e)), e !== null && r0(e)),
          a)
        : ((a.eventSystemFlags |= l),
          (e = a.targetContainers),
          u !== null && e.indexOf(u) === -1 && e.push(u),
          a);
    }
    function Tp(a, e, t, l, u) {
      switch (e) {
        case "focusin":
          return ((Ft = Ou(Ft, a, e, t, l, u)), !0);
        case "dragenter":
          return ((Ht = Ou(Ht, a, e, t, l, u)), !0);
        case "mouseover":
          return ((Vt = Ou(Vt, a, e, t, l, u)), !0);
        case "pointerover":
          var o = u.pointerId;
          return (ho.set(o, Ou(ho.get(o) || null, a, e, t, l, u)), !0);
        case "gotpointercapture":
          return ((o = u.pointerId), go.set(o, Ou(go.get(o) || null, a, e, t, l, u)), !0);
      }
      return !1;
    }
    function s0(a) {
      var e = Ul(a.target);
      if (e !== null) {
        var t = vo(e);
        if (t !== null) {
          if (((e = t.tag), e === 13)) {
            if (((e = wc(t)), e !== null)) {
              ((a.blockedOn = e),
                ds(a.priority, function () {
                  Sc(t);
                }));
              return;
            }
          } else if (e === 31) {
            if (((e = Tc(t)), e !== null)) {
              ((a.blockedOn = e),
                ds(a.priority, function () {
                  Sc(t);
                }));
              return;
            }
          } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Md(a) {
      if (a.blockedOn !== null) return !1;
      for (var e = a.targetContainers; 0 < e.length;) {
        var t = xr(a.nativeEvent);
        if (t === null) {
          t = a.nativeEvent;
          var l = new t.constructor(t.type, t);
          ((Ef = l), t.target.dispatchEvent(l), (Ef = null));
        } else return ((e = nu(t)), e !== null && r0(e), (a.blockedOn = t), !1);
        e.shift();
      }
      return !0;
    }
    function Ic(a, e, t) {
      Md(a) && t.delete(e);
    }
    function Dp() {
      ((yr = !1),
        Ft !== null && Md(Ft) && (Ft = null),
        Ht !== null && Md(Ht) && (Ht = null),
        Vt !== null && Md(Vt) && (Vt = null),
        ho.forEach(Ic),
        go.forEach(Ic));
    }
    function cd(a, e) {
      a.blockedOn === e &&
        ((a.blockedOn = null),
        yr || ((yr = !0), Pa.unstable_scheduleCallback(Pa.unstable_NormalPriority, Dp)));
    }
    var pd = null;
    function Ac(a) {
      pd !== a &&
        ((pd = a),
        Pa.unstable_scheduleCallback(Pa.unstable_NormalPriority, function () {
          pd === a && (pd = null);
          for (var e = 0; e < a.length; e += 3) {
            var t = a[e],
              l = a[e + 1],
              u = a[e + 2];
            if (typeof l != "function") {
              if (gn(l || t) === null) continue;
              break;
            }
            var o = nu(t);
            o !== null &&
              (a.splice(e, 3),
              (e -= 3),
              ar(o, { pending: !0, data: u, method: t.method, action: l }, l, u));
          }
        }));
    }
    function fu(a) {
      function e(r) {
        return cd(r, a);
      }
      (Ft !== null && cd(Ft, a),
        Ht !== null && cd(Ht, a),
        Vt !== null && cd(Vt, a),
        ho.forEach(e),
        go.forEach(e));
      for (var t = 0; t < qt.length; t++) {
        var l = qt[t];
        l.blockedOn === a && (l.blockedOn = null);
      }
      for (; 0 < qt.length && ((t = qt[0]), t.blockedOn === null);)
        (s0(t), t.blockedOn === null && qt.shift());
      if (((t = (a.ownerDocument || a).$$reactFormReplay), t != null))
        for (l = 0; l < t.length; l += 3) {
          var u = t[l],
            o = t[l + 1],
            i = u[ne] || null;
          if (typeof o == "function") i || Ac(t);
          else if (i) {
            var f = null;
            if (o && o.hasAttribute("formAction")) {
              if (((u = o), (i = o[ne] || null))) f = i.formAction;
              else if (gn(u) !== null) continue;
            } else f = i.action;
            (typeof f == "function" ? (t[l + 1] = f) : (t.splice(l, 3), (l -= 3)), Ac(t));
          }
        }
    }
    function c0() {
      function a(o) {
        o.canIntercept &&
          o.info === "react-transition" &&
          o.intercept({
            handler: function () {
              return new Promise(function (i) {
                return (u = i);
              });
            },
            focusReset: "manual",
            scroll: "manual",
          });
      }
      function e() {
        (u !== null && (u(), (u = null)), l || setTimeout(t, 20));
      }
      function t() {
        if (!l && !navigation.transition) {
          var o = navigation.currentEntry;
          o &&
            o.url != null &&
            navigation.navigate(o.url, {
              state: o.getState(),
              info: "react-transition",
              history: "replace",
            });
        }
      }
      if (typeof navigation == "object") {
        var l = !1,
          u = null;
        return (
          navigation.addEventListener("navigate", a),
          navigation.addEventListener("navigatesuccess", e),
          navigation.addEventListener("navigateerror", e),
          setTimeout(t, 100),
          function () {
            ((l = !0),
              navigation.removeEventListener("navigate", a),
              navigation.removeEventListener("navigatesuccess", e),
              navigation.removeEventListener("navigateerror", e),
              u !== null && (u(), (u = null)));
          }
        );
      }
    }
    function vn(a) {
      this._internalRoot = a;
    }
    xi.prototype.render = vn.prototype.render = function (a) {
      var e = this._internalRoot;
      if (e === null) throw Error(k(409));
      var t = e.current,
        l = ye();
      f0(t, l, a, e, null, null);
    };
    xi.prototype.unmount = vn.prototype.unmount = function () {
      var a = this._internalRoot;
      if (a !== null) {
        this._internalRoot = null;
        var e = a.containerInfo;
        (f0(a.current, 2, null, a, null, null), gi(), (e[ru] = null));
      }
    };
    function xi(a) {
      this._internalRoot = a;
    }
    xi.prototype.unstable_scheduleHydration = function (a) {
      if (a) {
        var e = Vc();
        a = { blockedOn: null, target: a, priority: e };
        for (var t = 0; t < qt.length && e !== 0 && e < qt[t].priority; t++);
        (qt.splice(t, 0, a), t === 0 && s0(a));
      }
    };
    var kc = qc.version;
    if (kc !== "19.2.7") throw Error(k(527, kc, "19.2.7"));
    pa.findDOMNode = function (a) {
      var e = a._reactInternals;
      if (e === void 0)
        throw typeof a.render == "function"
          ? Error(k(188))
          : ((a = Object.keys(a).join(",")), Error(k(268, a)));
      return (
        (a = r3(e)),
        (a = a !== null ? Dc(a) : null),
        (a = a === null ? null : a.stateNode),
        a
      );
    };
    var Bp = {
      bundleType: 0,
      version: "19.2.7",
      rendererPackageName: "react-dom",
      currentDispatcherRef: J,
      reconcilerVersion: "19.2.7",
    };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      ((zu = __REACT_DEVTOOLS_GLOBAL_HOOK__), !zu.isDisabled && zu.supportsFiber)
    )
      try {
        ((Lo = zu.inject(Bp)), (Le = zu));
      } catch {}
    var zu;
    yi.createRoot = function (a, e) {
      if (!Mc(a)) throw Error(k(299));
      var t = !1,
        l = "",
        u = l2,
        o = u2,
        i = o2;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (t = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = d0(a, 1, !1, null, null, t, l, null, u, o, i, c0)),
        (a[ru] = e.current),
        sn(a),
        new vn(e)
      );
    };
    yi.hydrateRoot = function (a, e, t) {
      if (!Mc(a)) throw Error(k(299));
      var l = !1,
        u = "",
        o = l2,
        i = u2,
        f = o2,
        r = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.formState !== void 0 && (r = t.formState)),
        (e = d0(a, 1, !0, e, t ?? null, l, u, r, o, i, f, c0)),
        (e.context = i0(null)),
        (t = e.current),
        (l = ye()),
        (l = Ir(l)),
        (u = Ut(l)),
        (u.callback = null),
        Ot(t, u, l),
        (t = l),
        (e.current.lanes = t),
        yo(e, t),
        We(e),
        (a[ru] = e.current),
        sn(a),
        new xi(e)
      );
    };
    yi.version = "19.2.7";
  });
  var g0 = Oe((Gm, h0) => {
    "use strict";
    function m0() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0);
        } catch (a) {
          console.error(a);
        }
    }
    (m0(), (h0.exports = p0()));
  });
  var v0 = Oe((Ln, xn) => {
    ((a, e) => {
      typeof define == "function" && define.amd
        ? define([], e)
        : typeof xn == "object" && typeof Ln < "u"
          ? (xn.exports = e())
          : (a.Papa = e());
    })(Ln, function a() {
      var e = typeof self < "u" ? self : typeof window < "u" ? window : e !== void 0 ? e : {},
        t,
        l = !e.document && !!e.postMessage,
        u = e.IS_PAPA_WORKER || !1,
        o = {},
        i = 0,
        f = {};
      function r(n) {
        return n.charCodeAt(0) === 65279 ? n.slice(1) : n;
      }
      function c(n) {
        ((this._handle = null),
          (this._finished = !1),
          (this._completed = !1),
          (this._halted = !1),
          (this._input = null),
          (this._baseIndex = 0),
          (this._partialLine = ""),
          (this._rowCount = 0),
          (this._start = 0),
          (this._nextChunk = null),
          (this.isFirstChunk = !0),
          (this._completeResults = { data: [], errors: [], meta: {} }),
          function (p) {
            var C = b(p);
            ((C.chunkSize = parseInt(C.chunkSize)),
              p.step || p.chunk || (C.chunkSize = null),
              (this._handle = new I(C)),
              ((this._handle.streamer = this)._config = C));
          }.call(this, n),
          (this.parseChunk = function (p, C) {
            var S = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && 0 < S) {
              let B = this._config.newline;
              (B ||
                ((A = this._config.quoteChar || '"'), (B = this._handle.guessLineEndings(p, A))),
                (p = [...p.split(B).slice(S)].join(B)));
            }
            (this.isFirstChunk &&
              N(this._config.beforeFirstChunk) &&
              (A = this._config.beforeFirstChunk(p)) !== void 0 &&
              (p = A),
              (this.isFirstChunk = !1),
              (this._halted = !1));
            var S = this._partialLine + p,
              A =
                ((this._partialLine = ""), this._handle.parse(S, this._baseIndex, !this._finished));
            if (!this._handle.paused() && !this._handle.aborted()) {
              if (
                ((p = A.meta.cursor),
                (S =
                  (this._finished ||
                    ((this._partialLine = S.substring(p - this._baseIndex)), (this._baseIndex = p)),
                  A && A.data && (this._rowCount += A.data.length),
                  this._finished ||
                    (this._config.preview && this._rowCount >= this._config.preview))),
                u)
              )
                e.postMessage({ results: A, workerId: f.WORKER_ID, finished: S });
              else if (N(this._config.chunk) && !C) {
                if (
                  (this._config.chunk(A, this._handle),
                  this._handle.paused() || this._handle.aborted())
                )
                  return void (this._halted = !0);
                this._completeResults = A = void 0;
              }
              return (
                this._config.step ||
                  this._config.chunk ||
                  ((this._completeResults.data = this._completeResults.data.concat(A.data)),
                  (this._completeResults.errors = this._completeResults.errors.concat(A.errors)),
                  (this._completeResults.meta = A.meta)),
                this._completed ||
                  !S ||
                  !N(this._config.complete) ||
                  (A && A.meta.aborted) ||
                  (this._config.complete(this._completeResults, this._input),
                  (this._completed = !0)),
                S || (A && A.meta.paused) || this._nextChunk(),
                A
              );
            }
            this._halted = !0;
          }),
          (this._sendError = function (p) {
            N(this._config.error)
              ? this._config.error(p)
              : u &&
                this._config.error &&
                e.postMessage({ workerId: f.WORKER_ID, error: p, finished: !1 });
          }));
      }
      function g(n) {
        var p;
        ((n = n || {}).chunkSize || (n.chunkSize = f.RemoteChunkSize),
          c.call(this, n),
          (this._nextChunk = l
            ? function () {
                (this._readChunk(), this._chunkLoaded());
              }
            : function () {
                this._readChunk();
              }),
          (this.stream = function (C) {
            ((this._input = C), this._nextChunk());
          }),
          (this._readChunk = function () {
            if (this._finished) this._chunkLoaded();
            else {
              if (
                ((p = new XMLHttpRequest()),
                this._config.withCredentials && (p.withCredentials = this._config.withCredentials),
                l ||
                  ((p.onload = T(this._chunkLoaded, this)),
                  (p.onerror = T(this._chunkError, this))),
                p.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !l),
                this._config.downloadRequestHeaders)
              ) {
                var C,
                  S = this._config.downloadRequestHeaders;
                for (C in S) p.setRequestHeader(C, S[C]);
              }
              var A;
              this._config.chunkSize &&
                ((A = this._start + this._config.chunkSize - 1),
                p.setRequestHeader("Range", "bytes=" + this._start + "-" + A));
              try {
                p.send(this._config.downloadRequestBody);
              } catch (B) {
                this._chunkError(B.message);
              }
              l && p.status === 0 && this._chunkError();
            }
          }),
          (this._chunkLoaded = function () {
            p.readyState === 4 &&
              (p.status < 200 || 400 <= p.status
                ? this._chunkError()
                : ((this._start += this._config.chunkSize || p.responseText.length),
                  (this._finished =
                    !this._config.chunkSize ||
                    this._start >=
                      ((C) =>
                        (C = C.getResponseHeader("Content-Range")) !== null
                          ? parseInt(C.substring(C.lastIndexOf("/") + 1))
                          : -1)(p)),
                  this.parseChunk(p.responseText)));
          }),
          (this._chunkError = function (C) {
            ((C = p.statusText || C), this._sendError(new Error(C)));
          }));
      }
      function v(n) {
        ((n = n || {}).chunkSize || (n.chunkSize = f.LocalChunkSize), c.call(this, n));
        var p,
          C,
          S = typeof FileReader < "u";
        ((this.stream = function (A) {
          ((this._input = A),
            (C = A.slice || A.webkitSlice || A.mozSlice),
            S
              ? (((p = new FileReader()).onload = T(this._chunkLoaded, this)),
                (p.onerror = T(this._chunkError, this)))
              : (p = new FileReaderSync()),
            this._nextChunk());
        }),
          (this._nextChunk = function () {
            this._finished ||
              (this._config.preview && !(this._rowCount < this._config.preview)) ||
              this._readChunk();
          }),
          (this._readChunk = function () {
            var A = this._input,
              B =
                (this._config.chunkSize &&
                  ((B = Math.min(this._start + this._config.chunkSize, this._input.size)),
                  (A = C.call(A, this._start, B))),
                p.readAsText(A, this._config.encoding));
            S || this._chunkLoaded({ target: { result: B } });
          }),
          (this._chunkLoaded = function (A) {
            ((this._start += this._config.chunkSize),
              (this._finished = !this._config.chunkSize || this._start >= this._input.size),
              this.parseChunk(A.target.result));
          }),
          (this._chunkError = function () {
            this._sendError(p.error);
          }));
      }
      function h(n) {
        var p;
        (c.call(this, (n = n || {})),
          (this.stream = function (C) {
            return ((p = C), this._nextChunk());
          }),
          (this._nextChunk = function () {
            var C, S;
            if (!this._finished)
              return (
                (C = this._config.chunkSize),
                (p = C ? ((S = p.substring(0, C)), p.substring(C)) : ((S = p), "")),
                (this._finished = !p),
                this.parseChunk(S)
              );
          }));
      }
      function x(n) {
        c.call(this, (n = n || {}));
        var p = [],
          C = !0,
          S = !1;
        ((this.pause = function () {
          (c.prototype.pause.apply(this, arguments), this._input.pause());
        }),
          (this.resume = function () {
            (c.prototype.resume.apply(this, arguments), this._input.resume());
          }),
          (this.stream = function (A) {
            ((this._input = A),
              this._input.on("data", this._streamData),
              this._input.on("end", this._streamEnd),
              this._input.on("error", this._streamError));
          }),
          (this._checkIsFinished = function () {
            S && p.length === 1 && (this._finished = !0);
          }),
          (this._nextChunk = function () {
            (this._checkIsFinished(), p.length ? this.parseChunk(p.shift()) : (C = !0));
          }),
          (this._streamData = T(function (A) {
            try {
              (p.push(typeof A == "string" ? A : A.toString(this._config.encoding)),
                C && ((C = !1), this._checkIsFinished(), this.parseChunk(p.shift())));
            } catch (B) {
              this._streamError(B);
            }
          }, this)),
          (this._streamError = T(function (A) {
            (this._streamCleanUp(), this._sendError(A));
          }, this)),
          (this._streamEnd = T(function () {
            (this._streamCleanUp(), (S = !0), this._streamData(""));
          }, this)),
          (this._streamCleanUp = T(function () {
            (this._input.removeListener("data", this._streamData),
              this._input.removeListener("end", this._streamEnd),
              this._input.removeListener("error", this._streamError));
          }, this)));
      }
      function I(n) {
        var p,
          C,
          S,
          A,
          B = Math.pow(2, 53),
          E = -B,
          U = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
          Z =
            /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
          H = this,
          ea = 0,
          G = 0,
          ka = !1,
          Q = !1,
          X = [],
          D = { data: [], errors: [], meta: {} };
        function ha(Y) {
          return n.skipEmptyLines === "greedy"
            ? Y.join("").trim() === ""
            : Y.length === 1 && Y[0].length === 0;
        }
        function aa() {
          if (
            (D &&
              S &&
              (P(
                "Delimiter",
                "UndetectableDelimiter",
                "Unable to auto-detect delimiting character; defaulted to '" +
                  f.DefaultDelimiter +
                  "'",
              ),
              (S = !1)),
            n.skipEmptyLines &&
              (D.data = D.data.filter(function (ga) {
                return !ha(ga);
              })),
            xa())
          ) {
            let ga = function (da, ma) {
              ((da = r(da)), N(n.transformHeader) && (da = n.transformHeader(da, ma)), X.push(da));
            };
            var K = ga;
            if (D)
              if (Array.isArray(D.data[0])) {
                for (var Y = 0; xa() && Y < D.data.length; Y++) D.data[Y].forEach(ga);
                D.data.splice(0, 1);
              } else D.data.forEach(ga);
          }
          function j(ga, da) {
            for (var ma = n.header ? {} : [], R = 0; R < ga.length; R++) {
              var V = R,
                y = ga[R],
                y = ((w, z) =>
                  ((F) => (
                    n.dynamicTypingFunction &&
                      n.dynamicTyping[F] === void 0 &&
                      (n.dynamicTyping[F] = n.dynamicTypingFunction(F)),
                    (n.dynamicTyping[F] || n.dynamicTyping) === !0
                  ))(w)
                    ? z === "true" ||
                      z === "TRUE" ||
                      (z !== "false" &&
                        z !== "FALSE" &&
                        (((F) => {
                          if (U.test(F) && ((F = parseFloat(F)), E < F && F < B)) return 1;
                        })(z)
                          ? parseFloat(z)
                          : Z.test(z)
                            ? new Date(z)
                            : z === ""
                              ? null
                              : z))
                    : z)(
                  (V = n.header ? (R >= X.length ? "__parsed_extra" : X[R]) : V),
                  (y = n.transform ? n.transform(y, V) : y),
                );
              V === "__parsed_extra" ? ((ma[V] = ma[V] || []), ma[V].push(y)) : (ma[V] = y);
            }
            return (
              n.header &&
                (R > X.length
                  ? P(
                      "FieldMismatch",
                      "TooManyFields",
                      "Too many fields: expected " + X.length + " fields but parsed " + R,
                      G + da,
                    )
                  : R < X.length &&
                    P(
                      "FieldMismatch",
                      "TooFewFields",
                      "Too few fields: expected " + X.length + " fields but parsed " + R,
                      G + da,
                    )),
              ma
            );
          }
          var ra;
          D &&
            (n.header || n.dynamicTyping || n.transform) &&
            ((ra = 1),
            !D.data.length || Array.isArray(D.data[0])
              ? ((D.data = D.data.map(j)), (ra = D.data.length))
              : (D.data = j(D.data, 0)),
            n.header && D.meta && (D.meta.fields = X),
            (G += ra));
        }
        function xa() {
          return n.header && X.length === 0;
        }
        function P(Y, j, ra, K) {
          ((Y = { type: Y, code: j, message: ra }), K !== void 0 && (Y.row = K), D.errors.push(Y));
        }
        (N(n.step) &&
          ((A = n.step),
          (n.step = function (Y) {
            ((D = Y),
              xa()
                ? aa()
                : (aa(),
                  D.data.length !== 0 &&
                    ((ea += Y.data.length),
                    n.preview && ea > n.preview ? C.abort() : ((D.data = D.data[0]), A(D, H)))));
          })),
          (this.parse = function (Y, j, ra) {
            var K = n.quoteChar || '"',
              K =
                (n.newline || (n.newline = this.guessLineEndings(Y, K)),
                (S = !1),
                n.delimiter
                  ? N(n.delimiter) &&
                    ((n.delimiter = n.delimiter(Y)), (D.meta.delimiter = n.delimiter))
                  : ((K = ((ga, da, ma, R, V) => {
                      var y, w, z, F;
                      V = V || [",", "	", "|", ";", f.RECORD_SEP, f.UNIT_SEP];
                      for (var ia = 0; ia < V.length; ia++) {
                        for (
                          var ya,
                            Ia = V[ia],
                            na = 0,
                            ce = 0,
                            sa = 0,
                            Za =
                              ((z = void 0),
                              new M({ comments: R, delimiter: Ia, newline: da, preview: 10 }).parse(
                                ga,
                              )),
                            Ke = 0;
                          Ke < Za.data.length;
                          Ke++
                        )
                          ma && ha(Za.data[Ke])
                            ? sa++
                            : ((ya = Za.data[Ke].length),
                              (ce += ya),
                              z === void 0
                                ? (z = ya)
                                : 0 < ya && ((na += Math.abs(ya - z)), (z = ya)));
                        (0 < Za.data.length && (ce /= Za.data.length - sa),
                          (w === void 0 || na <= w) &&
                            (F === void 0 || F < ce) &&
                            1.99 < ce &&
                            ((w = na), (y = Ia), (F = ce)));
                      }
                      return { successful: !!(n.delimiter = y), bestDelimiter: y };
                    })(Y, n.newline, n.skipEmptyLines, n.comments, n.delimitersToGuess)).successful
                      ? (n.delimiter = K.bestDelimiter)
                      : ((S = !0), (n.delimiter = f.DefaultDelimiter)),
                    (D.meta.delimiter = n.delimiter)),
                b(n));
            return (
              n.preview && n.header && K.preview++,
              (p = Y),
              (C = new M(K)),
              (D = C.parse(p, j, ra)),
              aa(),
              ka ? { meta: { paused: !0 } } : D || { meta: { paused: !1 } }
            );
          }),
          (this.paused = function () {
            return ka;
          }),
          (this.pause = function () {
            ((ka = !0), C.abort(), (p = N(n.chunk) ? "" : p.substring(C.getCharIndex())));
          }),
          (this.resume = function () {
            H.streamer._halted
              ? ((ka = !1), H.streamer.parseChunk(p, !0))
              : setTimeout(H.resume, 3);
          }),
          (this.aborted = function () {
            return Q;
          }),
          (this.abort = function () {
            ((Q = !0), C.abort(), (D.meta.aborted = !0), N(n.complete) && n.complete(D), (p = ""));
          }),
          (this.guessLineEndings = function (ga, K) {
            ga = ga.substring(0, 1048576);
            var K = new RegExp(q(K) + "([^]*?)" + q(K), "gm"),
              ra = (ga = ga.replace(K, "")).split("\r"),
              K = ga.split(`
`),
              ga = 1 < K.length && K[0].length < ra[0].length;
            if (ra.length === 1 || ga)
              return `
`;
            for (var da = 0, ma = 0; ma < ra.length; ma++)
              ra[ma][0] ===
                `
` && da++;
            return da >= ra.length / 2
              ? `\r
`
              : "\r";
          }));
      }
      function q(n) {
        return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function M(n) {
        var p = (n = n || {}).delimiter,
          C = n.newline,
          S = n.comments,
          A = n.step,
          B = n.preview,
          E = n.fastMode,
          U = null,
          Z = !1,
          H = n.quoteChar == null ? '"' : n.quoteChar,
          ea = H;
        if (
          (n.escapeChar !== void 0 && (ea = n.escapeChar),
          (typeof p != "string" || -1 < f.BAD_DELIMITERS.indexOf(p)) && (p = ","),
          S === p)
        )
          throw new Error("Comment character same as delimiter");
        (S === !0
          ? (S = "#")
          : (typeof S != "string" || -1 < f.BAD_DELIMITERS.indexOf(S)) && (S = !1),
          C !==
            `
` &&
            C !== "\r" &&
            C !==
              `\r
` &&
            (C = `
`));
        var G = 0,
          ka = !1;
        ((this.parse = function (Q, X, D) {
          if (typeof Q != "string") throw new Error("Input must be a string");
          var ha = Q.length,
            aa = p.length,
            xa = C.length,
            P = S.length,
            Y = N(A),
            j = [],
            ra = [],
            K = [],
            ga = (G = 0);
          if (!Q) return na();
          if (E || (E !== !1 && Q.indexOf(H) === -1)) {
            for (var da = Q.split(C), ma = 0; ma < da.length; ma++) {
              if (((K = da[ma]), (G += K.length), ma !== da.length - 1)) G += C.length;
              else if (D) return na();
              if (!S || K.substring(0, P) !== S) {
                if (Y) {
                  if (((j = []), F(K.split(p)), ce(), ka)) return na();
                } else F(K.split(p));
                if (B && B <= ma) return ((j = j.slice(0, B)), na(!0));
              }
            }
            return na();
          }
          for (
            var R = Q.indexOf(p, G),
              V = Q.indexOf(C, G),
              y = new RegExp(q(ea) + q(H), "g"),
              w = Q.indexOf(H, G);
            ;
          )
            if (Q[G] === H)
              for (w = G, G++; ;) {
                if ((w = Q.indexOf(H, w + 1)) === -1)
                  return (
                    D ||
                      ra.push({
                        type: "Quotes",
                        code: "MissingQuotes",
                        message: "Quoted field unterminated",
                        row: j.length,
                        index: G,
                      }),
                    ya()
                  );
                if (w === ha - 1) return ya(Q.substring(G, w).replace(y, H));
                if (H === ea && Q[w + 1] === ea) w++;
                else if (H === ea || w === 0 || Q[w - 1] !== ea) {
                  R !== -1 && R < w + 1 && (R = Q.indexOf(p, w + 1));
                  var z = ia(
                    (V = V !== -1 && V < w + 1 ? Q.indexOf(C, w + 1) : V) === -1
                      ? R
                      : Math.min(R, V),
                  );
                  if (Q.substr(w + 1 + z, aa) === p) {
                    (K.push(Q.substring(G, w).replace(y, H)),
                      Q[(G = w + 1 + z + aa)] !== H && (w = Q.indexOf(H, G)),
                      (R = Q.indexOf(p, G)),
                      (V = Q.indexOf(C, G)));
                    break;
                  }
                  if (((z = ia(V)), Q.substring(w + 1 + z, w + 1 + z + xa) === C)) {
                    if (
                      (K.push(Q.substring(G, w).replace(y, H)),
                      Ia(w + 1 + z + xa),
                      (R = Q.indexOf(p, G)),
                      (w = Q.indexOf(H, G)),
                      Y && (ce(), ka))
                    )
                      return na();
                    if (B && j.length >= B) return na(!0);
                    break;
                  }
                  (ra.push({
                    type: "Quotes",
                    code: "InvalidQuotes",
                    message: "Trailing quote on quoted field is malformed",
                    row: j.length,
                    index: G,
                  }),
                    w++);
                }
              }
            else if (S && K.length === 0 && Q.substring(G, G + P) === S) {
              if (V === -1) return na();
              ((G = V + xa), (V = Q.indexOf(C, G)), (R = Q.indexOf(p, G)));
            } else if (R !== -1 && (R < V || V === -1))
              (K.push(Q.substring(G, R)), (G = R + aa), (R = Q.indexOf(p, G)));
            else {
              if (V === -1) break;
              if ((K.push(Q.substring(G, V)), Ia(V + xa), Y && (ce(), ka))) return na();
              if (B && j.length >= B) return na(!0);
            }
          return ya();
          function F(sa) {
            (j.push(sa), (ga = G));
          }
          function ia(sa) {
            var Za = 0;
            return (Za =
              sa !== -1 && (sa = Q.substring(w + 1, sa)) && sa.trim() === "" ? sa.length : Za);
          }
          function ya(sa) {
            return (
              D || (sa === void 0 && (sa = Q.substring(G)), K.push(sa), (G = ha), F(K), Y && ce()),
              na()
            );
          }
          function Ia(sa) {
            ((G = sa), F(K), (K = []), (V = Q.indexOf(C, G)));
          }
          function na(sa) {
            if (n.header && !X && j.length && !Z) {
              var Za = j[0],
                Ke = Object.create(null),
                Ti = new Set(Za);
              let In = !1;
              for (let Cl = 0; Cl < Za.length; Cl++) {
                let Ve = r(Za[Cl]);
                if (Ke[(Ve = N(n.transformHeader) ? n.transformHeader(Ve, Cl) : Ve)]) {
                  let ku,
                    An = Ke[Ve];
                  for (; (ku = Ve + "_" + An), An++, Ti.has(ku););
                  (Ti.add(ku),
                    (Za[Cl] = ku),
                    Ke[Ve]++,
                    (In = !0),
                    ((U = U === null ? {} : U)[ku] = Ve));
                } else ((Ke[Ve] = 1), (Za[Cl] = Ve));
                Ti.add(Ve);
              }
              (In && console.warn("Duplicate headers found and renamed."), (Z = !0));
            }
            return {
              data: j,
              errors: ra,
              meta: {
                delimiter: p,
                linebreak: C,
                aborted: ka,
                truncated: !!sa,
                cursor: ga + (X || 0),
                renamedHeaders: U,
              },
            };
          }
          function ce() {
            (A(na()), (j = []), (ra = []));
          }
        }),
          (this.abort = function () {
            ka = !0;
          }),
          (this.getCharIndex = function () {
            return G;
          }));
      }
      function s(n) {
        var p = n.data,
          C = o[p.workerId],
          S = !1;
        if (p.error) C.userError(p.error, p.file);
        else if (p.results && p.results.data) {
          var A = {
            abort: function () {
              ((S = !0), m(p.workerId, { data: [], errors: [], meta: { aborted: !0 } }));
            },
            pause: L,
            resume: L,
          };
          if (N(C.userStep)) {
            for (
              var B = 0;
              B < p.results.data.length &&
              (C.userStep(
                { data: p.results.data[B], errors: p.results.errors, meta: p.results.meta },
                A,
              ),
              !S);
              B++
            );
            delete p.results;
          } else N(C.userChunk) && (C.userChunk(p.results, A, p.file), delete p.results);
        }
        p.finished && !S && m(p.workerId, p.results);
      }
      function m(n, p) {
        var C = o[n];
        (N(C.userComplete) && C.userComplete(p), C.terminate(), delete o[n]);
      }
      function L() {
        throw new Error("Not implemented.");
      }
      function b(n) {
        if (typeof n != "object" || n === null) return n;
        var p,
          C = Array.isArray(n) ? [] : {};
        for (p in n) C[p] = b(n[p]);
        return C;
      }
      function T(n, p) {
        return function () {
          n.apply(p, arguments);
        };
      }
      function N(n) {
        return typeof n == "function";
      }
      return (
        (f.parse = function (n, p) {
          var C = (p = p || {}).dynamicTyping || !1;
          if (
            (N(C) && ((p.dynamicTypingFunction = C), (C = {})),
            (p.dynamicTyping = C),
            (p.transform = !!N(p.transform) && p.transform),
            !p.worker || !f.WORKERS_SUPPORTED)
          )
            return (
              (C = null),
              f.NODE_STREAM_INPUT,
              typeof n == "string"
                ? ((n = r(n)), (C = new (p.download ? g : h)(p)))
                : n.readable === !0 && N(n.read) && N(n.on)
                  ? (C = new x(p))
                  : ((e.File && n instanceof File) || n instanceof Object) && (C = new v(p)),
              C.stream(n)
            );
          (((C = (() => {
            var S;
            return (
              !!f.WORKERS_SUPPORTED &&
              ((S = (() => {
                var A = e.URL || e.webkitURL || null,
                  B = a.toString();
                return (
                  f.BLOB_URL ||
                  (f.BLOB_URL = A.createObjectURL(
                    new Blob(
                      [
                        "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                        "(",
                        B,
                        ")();",
                      ],
                      { type: "text/javascript" },
                    ),
                  ))
                );
              })()),
              ((S = new e.Worker(S)).onmessage = s),
              (S.id = i++),
              (o[S.id] = S))
            );
          })()).userStep = p.step),
            (C.userChunk = p.chunk),
            (C.userComplete = p.complete),
            (C.userError = p.error),
            (p.step = N(p.step)),
            (p.chunk = N(p.chunk)),
            (p.complete = N(p.complete)),
            (p.error = N(p.error)),
            delete p.worker,
            C.postMessage({ input: n, config: p, workerId: C.id }));
        }),
        (f.unparse = function (n, p) {
          var C = !1,
            S = !0,
            A = ",",
            B = `\r
`,
            E = '"',
            U = E + E,
            Z = !1,
            H = null,
            ea = !1,
            G =
              ((() => {
                if (typeof p == "object") {
                  if (
                    (typeof p.delimiter != "string" ||
                      f.BAD_DELIMITERS.filter(function (X) {
                        return p.delimiter.indexOf(X) !== -1;
                      }).length ||
                      (A = p.delimiter),
                    (typeof p.quotes != "boolean" &&
                      typeof p.quotes != "function" &&
                      !Array.isArray(p.quotes)) ||
                      (C = p.quotes),
                    (typeof p.skipEmptyLines != "boolean" && typeof p.skipEmptyLines != "string") ||
                      (Z = p.skipEmptyLines),
                    typeof p.newline == "string" && (B = p.newline),
                    typeof p.quoteChar == "string" && ((E = p.quoteChar), (U = E + E)),
                    typeof p.header == "boolean" && (S = p.header),
                    Array.isArray(p.columns))
                  ) {
                    if (p.columns.length === 0) throw new Error("Option columns is empty");
                    H = p.columns;
                  }
                  (p.escapeChar !== void 0 && (U = p.escapeChar + E),
                    p.escapeFormulae instanceof RegExp
                      ? (ea = p.escapeFormulae)
                      : typeof p.escapeFormulae == "boolean" &&
                        p.escapeFormulae &&
                        (ea = /^[=+\-@\t\r].*$/));
                }
              })(),
              new RegExp(q(E), "g"));
          if ((typeof n == "string" && (n = JSON.parse(n)), Array.isArray(n))) {
            if (!n.length || Array.isArray(n[0])) return ka(null, n, Z);
            if (typeof n[0] == "object") return ka(H || Object.keys(n[0]), n, Z);
          } else if (typeof n == "object")
            return (
              typeof n.data == "string" && (n.data = JSON.parse(n.data)),
              Array.isArray(n.data) &&
                (n.fields || (n.fields = (n.meta && n.meta.fields) || H),
                n.fields ||
                  (n.fields = Array.isArray(n.data[0])
                    ? n.fields
                    : typeof n.data[0] == "object"
                      ? Object.keys(n.data[0])
                      : []),
                Array.isArray(n.data[0]) || typeof n.data[0] == "object" || (n.data = [n.data])),
              ka(n.fields || [], n.data || [], Z)
            );
          throw new Error("Unable to serialize unrecognized input");
          function ka(X, D, ha) {
            var aa = "",
              xa =
                (typeof X == "string" && (X = JSON.parse(X)),
                typeof D == "string" && (D = JSON.parse(D)),
                Array.isArray(X) && 0 < X.length),
              P = !Array.isArray(D[0]);
            if (xa && S) {
              for (var Y = 0; Y < X.length; Y++) (0 < Y && (aa += A), (aa += Q(X[Y], Y)));
              0 < D.length && (aa += B);
            }
            for (var j = 0; j < D.length; j++) {
              var ra = (xa ? X : D[j]).length,
                K = !1,
                ga = xa ? Object.keys(D[j]).length === 0 : D[j].length === 0;
              if (
                (ha &&
                  !xa &&
                  (K =
                    ha === "greedy"
                      ? D[j].join("").trim() === ""
                      : D[j].length === 1 && D[j][0].length === 0),
                ha === "greedy" && xa)
              ) {
                for (var da = [], ma = 0; ma < ra; ma++) {
                  var R = P ? X[ma] : ma;
                  da.push(D[j][R]);
                }
                K = da.join("").trim() === "";
              }
              if (!K) {
                for (var V = 0; V < ra; V++) {
                  0 < V && !ga && (aa += A);
                  var y = xa && P ? X[V] : V;
                  aa += Q(D[j][y], V);
                }
                j < D.length - 1 && (!ha || (0 < ra && !ga)) && (aa += B);
              }
            }
            return aa;
          }
          function Q(X, D) {
            var ha, aa, xa;
            return X == null
              ? ""
              : X.constructor === Date
                ? JSON.stringify(X).slice(1, 25)
                : ((xa = !1),
                  ea && typeof X == "string" && ea.test(X) && ((X = "'" + X), (xa = !0)),
                  (aa = (ha = X.toString()).replace(G, U)),
                  (xa =
                    xa ||
                    C === !0 ||
                    (typeof C == "function" && C(X, D)) ||
                    (Array.isArray(C) && C[D]) ||
                    ((P, Y) => {
                      for (var j = 0; j < Y.length; j++) if (-1 < P.indexOf(Y[j])) return !0;
                      return !1;
                    })(aa, f.BAD_DELIMITERS) ||
                    -1 < aa.indexOf(A) ||
                    -1 < ha.indexOf(E) ||
                    aa.charAt(0) === " " ||
                    aa.charAt(aa.length - 1) === " ")
                    ? E + aa + E
                    : aa);
          }
        }),
        (f.RECORD_SEP = ""),
        (f.UNIT_SEP = ""),
        (f.BYTE_ORDER_MARK = "\uFEFF"),
        (f.BAD_DELIMITERS = [
          "\r",
          `
`,
          '"',
          f.BYTE_ORDER_MARK,
        ]),
        (f.WORKERS_SUPPORTED = !l && !!e.Worker),
        (f.NODE_STREAM_INPUT = 1),
        (f.LocalChunkSize = 10485760),
        (f.RemoteChunkSize = 5242880),
        (f.DefaultDelimiter = ","),
        (f.Parser = M),
        (f.ParserHandle = I),
        (f.NetworkStreamer = g),
        (f.FileStreamer = v),
        (f.StringStreamer = h),
        (f.ReadableStreamStreamer = x),
        e.jQuery &&
          ((t = e.jQuery).fn.parse = function (n) {
            var p = n.config || {},
              C = [];
            return (
              this.each(function (B) {
                if (
                  !(
                    t(this).prop("tagName").toUpperCase() === "INPUT" &&
                    t(this).attr("type").toLowerCase() === "file" &&
                    e.FileReader
                  ) ||
                  !this.files ||
                  this.files.length === 0
                )
                  return !0;
                for (var E = 0; E < this.files.length; E++)
                  C.push({ file: this.files[E], inputElem: this, instanceConfig: t.extend({}, p) });
              }),
              S(),
              this
            );
            function S() {
              if (C.length === 0) N(n.complete) && n.complete();
              else {
                var B,
                  E,
                  U,
                  Z,
                  H = C[0];
                if (N(n.before)) {
                  var ea = n.before(H.file, H.inputElem);
                  if (typeof ea == "object") {
                    if (ea.action === "abort")
                      return (
                        (B = "AbortError"),
                        (E = H.file),
                        (U = H.inputElem),
                        (Z = ea.reason),
                        void (N(n.error) && n.error({ name: B }, E, U, Z))
                      );
                    if (ea.action === "skip") return void A();
                    typeof ea.config == "object" &&
                      (H.instanceConfig = t.extend(H.instanceConfig, ea.config));
                  } else if (ea === "skip") return void A();
                }
                var G = H.instanceConfig.complete;
                ((H.instanceConfig.complete = function (ka) {
                  (N(G) && G(ka, H.file, H.inputElem), A());
                }),
                  f.parse(H.file, H.instanceConfig));
              }
            }
            function A() {
              (C.splice(0, 1), S());
            }
          }),
        u &&
          (e.onmessage = function (n) {
            ((n = n.data),
              f.WORKER_ID === void 0 && n && (f.WORKER_ID = n.workerId),
              typeof n.input == "string"
                ? e.postMessage({
                    workerId: f.WORKER_ID,
                    results: f.parse(n.input, n.config),
                    finished: !0,
                  })
                : ((e.File && n.input instanceof File) || n.input instanceof Object) &&
                  (n = f.parse(n.input, n.config)) &&
                  e.postMessage({ workerId: f.WORKER_ID, results: n, finished: !0 }));
          }),
        ((g.prototype = Object.create(c.prototype)).constructor = g),
        ((v.prototype = Object.create(c.prototype)).constructor = v),
        ((h.prototype = Object.create(h.prototype)).constructor = h),
        ((x.prototype = Object.create(c.prototype)).constructor = x),
        f
      );
    });
  });
  var I0 = Oe((Ii) => {
    "use strict";
    var lm = Symbol.for("react.transitional.element"),
      um = Symbol.for("react.fragment");
    function C0(a, e, t) {
      var l = null;
      if ((t !== void 0 && (l = "" + t), e.key !== void 0 && (l = "" + e.key), "key" in e)) {
        t = {};
        for (var u in e) u !== "key" && (t[u] = e[u]);
      } else t = e;
      return (
        (e = t.ref),
        { $$typeof: lm, type: a, key: l, ref: e !== void 0 ? e : null, props: t }
      );
    }
    Ii.Fragment = um;
    Ii.jsx = C0;
    Ii.jsxs = C0;
  });
  var Fo = Oe((I6, A0) => {
    "use strict";
    A0.exports = I0();
  });
  var q6 = ze(xt()),
    N0 = ze(g0());
  var O = ze(xt()),
    T0 = ze(v0());
  var Ci = ze(xt(), 1);
  var bi = (...a) =>
    a
      .filter((e, t, l) => !!e && e.trim() !== "" && l.indexOf(e) === t)
      .join(" ")
      .trim();
  var L0 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var x0 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, l) => (l ? l.toUpperCase() : t.toLowerCase()));
  var yn = (a) => {
    let e = x0(a);
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  var wo = ze(xt(), 1);
  var Si = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  var y0 = (a) => {
    for (let e in a) if (e.startsWith("aria-") || e === "role" || e === "title") return !0;
    return !1;
  };
  var gu = ze(xt(), 1);
  var Rp = (0, gu.createContext)({});
  var b0 = () => (0, gu.useContext)(Rp);
  var S0 = (0, wo.forwardRef)(
    (
      {
        color: a,
        size: e,
        strokeWidth: t,
        absoluteStrokeWidth: l,
        className: u = "",
        children: o,
        iconNode: i,
        ...f
      },
      r,
    ) => {
      let {
          size: c = 24,
          strokeWidth: g = 2,
          absoluteStrokeWidth: v = !1,
          color: h = "currentColor",
          className: x = "",
        } = b0() ?? {},
        I = (l ?? v) ? (Number(t ?? g) * 24) / Number(e ?? c) : (t ?? g);
      return (0, wo.createElement)(
        "svg",
        {
          ref: r,
          ...Si,
          width: e ?? c ?? Si.width,
          height: e ?? c ?? Si.height,
          stroke: a ?? h,
          strokeWidth: I,
          className: bi("lucide", x, u),
          ...(!o && !y0(f) && { "aria-hidden": "true" }),
          ...f,
        },
        [...i.map(([q, M]) => (0, wo.createElement)(q, M)), ...(Array.isArray(o) ? o : [o])],
      );
    },
  );
  var W = (a, e) => {
    let t = (0, Ci.forwardRef)(({ className: l, ...u }, o) =>
      (0, Ci.createElement)(S0, {
        ref: o,
        iconNode: e,
        className: bi(`lucide-${L0(yn(a))}`, `lucide-${a}`, l),
        ...u,
      }),
    );
    return ((t.displayName = yn(a)), t);
  };
  var Np = [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
      ["path", { d: "M10 12h4", key: "a56b0p" }],
    ],
    To = W("archive", Np);
  var bellPaths = [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
          key: "11g9vi",
        },
      ],
    ],
    Nbell = W("bell", bellPaths);
  var Up = [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ],
    Ll = W("arrow-right", Up);
  var Op = [
      ["path", { d: "M7 7h10v10", key: "1tivn9" }],
      ["path", { d: "M7 17 17 7", key: "1vkiza" }],
    ],
    Do = W("arrow-up-right", Op);
  var zp = [
      ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
      ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
      ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
      ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }],
    ],
    vu = W("bike", zp);
  var Ep = [
      [
        "path",
        {
          d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
          key: "18u6gg",
        },
      ],
      ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
    ],
    Bo = W("camera", Ep);
  var Fp = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
      ["path", { d: "M18 17V9", key: "2bz60n" }],
      ["path", { d: "M13 17V5", key: "1frdt8" }],
      ["path", { d: "M8 17v-3", key: "17ska0" }],
    ],
    Wt = W("chart-column", Fp);
  var Hp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
    xl = W("check", Hp);
  var Vp = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
    Yt = W("chevron-left", Vp);
  var Gp = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
    ue = W("chevron-right", Gp);
  var Pp = [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
      ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
    ],
    Ro = W("database", Pp);
  var Xp = [
      ["path", { d: "M12 15V3", key: "m9g1x1" }],
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
      ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
    ],
    No = W("download", Xp);
  var Qp = [
      [
        "path",
        {
          d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",
          key: "4pqfef",
        },
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M8 12v-1", key: "1ej8lb" }],
      ["path", { d: "M8 18v-2", key: "qcmpov" }],
      ["path", { d: "M8 7V6", key: "1nbb54" }],
      ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }],
    ],
    Lu = W("file-archive", Qp);
  var Jp = [
      ["path", { d: "M12 2v4", key: "3427ic" }],
      ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
      ["path", { d: "M18 12h4", key: "wj9ykh" }],
      ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
      ["path", { d: "M12 18v4", key: "jadmvz" }],
      ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
      ["path", { d: "M2 12h4", key: "j09sii" }],
      ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
    ],
    xu = W("loader", Jp);
  var Zp = [
      [
        "path",
        {
          d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
          key: "1a0edw",
        },
      ],
      ["path", { d: "M12 22V12", key: "d0xqtd" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
    ],
    yu = W("package", Zp);
  var Wp = [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu",
        },
      ],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
    ],
    yl = W("pencil", Wp);
  var Yp = [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "M12 5v14", key: "s699le" }],
    ],
    Ce = W("plus", Yp);
  var Kp = [
      ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
      ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
      ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
      ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
    ],
    bu = W("repeat", Kp);
  var jp = [
      [
        "path",
        {
          d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
          key: "1i5ecw",
        },
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    ],
    Uo = W("settings", jp);
  var _p = [
      ["path", { d: "M10 11v6", key: "nco0om" }],
      ["path", { d: "M14 11v6", key: "outv1u" }],
      ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
    ],
    vt = W("trash-2", _p);
  var $p = [
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
      ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }],
    ],
    Oo = W("undo-2", $p);
  var am = [
      ["path", { d: "M12 3v12", key: "1x0j5s" }],
      ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ],
    bl = W("upload", am);
  var em = [
      [
        "path",
        {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
          key: "1ngwbx",
        },
      ],
    ],
    zo = W("wrench", em);
  var tm = [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ],
    Eo = W("x", tm);
  var d = ze(Fo()),
    k0 = `
@font-face {
  font-family: 'Lufga'; font-weight: 100; font-style: normal; font-display: swap;
  src: url(data:font/woff2;base64,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) format('woff2');
}
@font-face {
  font-family: 'Lufga'; font-weight: 300; font-style: normal; font-display: swap;
  src: url(data:font/woff2;base64,d09GMk9UVE8AAIqsAAwAAAABClQAAIpaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYKhHRpiG4GiABygcgZgAItwATYCJAOTDAQGBY0tByBbeQlxB9Wx9nwoQjTqubUlqMgb4xq8eSaVu9WQImrSvWqEDc4DkrJzlAn+////M5OJHHk5dmmTUoA3+3G5F6mimKgomYFoU85homNeqqlrrNXmhrnsFU0tfIbzI+pZDxMLivyCdBoZl12NO7t95p2qQVqnDYEaHVsMXjSeD1/btbbpY56r1s1EUInqpHIq/ku1LHPvl2l4mTIzbUUwQUzQwHf/a5/fCgVRc+bwQhxiMlIxWj1IsbJ9nHPIl2j0biO1OfPXmaNDMsIu4zJFtDPheTVkZcfk9v15j4mEsNhI41hF82Dir0b8pyEmKHHf95w5IW0pVKLaqegRcHyhu8xu3QiLsKl93G14OXSYEqWtOzbN+D5kYSf/9zBV7clyJdJW0h41IsdD3NGIbzSSS7WTMiDH20eotZvL7NaRphH9pAVtmMOZoIEaofJlQBm3LowkObKuZ32PaM5m9y6Xy0UMEiSGWTAJqgkWRLyiRsWMulMxp/0vdajjh2v/70lmJ7hZzNJjuPcTKqgmW1Wj6kR1jURUdXWVVQhDRb/f81RWnzfAYEciUvhxuLvGrCRywIrQAcG/A7TNQPo4TkVBRUrEQELFQB0GqBiV0+mc01kLXZaT4WYUBup0lcayrWDznftYtOzHx/znVlZFT309nHoUP+6pPfbkumIdl6wYO8aQESxM0GQgTgiQH2LE+BH4/35HPzRBMXDm3BeoKpkZUdhQd7b39b/nbeu/KSr8f897p35x/v3BrktPMEz0KYaEmMCQiIYI6jgBQwYDihMi5gk6imFwlNQiBlLTNAhCY2oRURpsMaE20gIyPtdp98WZX1M//3Tj+KdPQFD+RtSOMVEJUgepQmx6vPX//5+zbxZzT97at1/p4q2+ZO17Rq022lITzIcSPCWIhiRQISNK34jTwYN6IFSgEBJInY4xHUZE9s3cZKhYE/fe6BDi6mMKrfFiBuhmDZQb1NR0E9TgXv3ARr4YAINuZcWmN8eDSeAIcCThTN5Eqj537tRha7e5A/OsfaHIPpWOxWDsHKIRjwUR/8Dfy/rvnsaatjjanmkmAVHb/39epz1aj3uv/9Ov0rqsCczTI6U5Dbeu4NIxio1NcArppDWUZGa+5JKK0x0nfXBrJGCQoAvEQwLcCsWWe1r1eN/n8zQBN1xo6hvAPnStwOBBHnw7Z2erL7rs7OmpQQ9lbGnpgDpxsIV2GDBCCFYtwhTOaoEenklISj0BUBRf3Va2aSh1KMpFz4PL2/nFvJyTau29pKA/zJGc9u//U7Vs8QXyqHRhLkI6J+5FOqvoVucQQ5kyMH8oYPAxgkhAbwlA6S5TvETxki6KIncNaXPuHDp37i6kDblyiq8PlTu7cu7duuq2u6p007t0H6FaE/EvZKyKtDt7OUjuKTSFQutaVeMurvD/z6mc3N81sKe2XodYxMoVXBsoPT6WYNRjBR2TCmRF7JWpVjqzAPm70BnwLHheme4j41JJb3yWz/YsgN1ZgJydBaXFgtItF6QeBKk7YCkKhvo7ygTUOau7d3rjPECKMpAleY6ns7w33mf/obGVf334eept9kH6QZY9Bf2yn95qguW5M5IvXLRibyEP+YckDClILFkpjD0cQqMU0H8tU3p/3ta08tYBJJoBT0hUDF2emktfkkNEZs4sZTRyXEMDlAgU4MQEGv6j6f/smz20JLSJ+j9CqbBD3cvQlrpBva8oTWKERjgDD74n6dJPe8UIVngv6jm7qpxYxXSEtz/Xgz+YgIjWh+QE7TVsHTs/NvuHFZeAMElt3H7gD9nprsex1ijJjPPctvLlVbFMQDSQXhV1th3+3QmAASeSbLuIdsoX7HojI8n5bVS9/2mY+TkWphGRwhQiIlIURSNiOlfnmM0BkbdCaJKNmZCF9nf/DoWQAxSSu/L2vtTyh2MQ9/9v7+5TCA9kf0zt+buSefJXyP8A1KOTfs7+9XR877lqeMc/FwGMuRuxrYMhNCEZJVvOPPkLFU0vV4lqjfoYbJSJpptjsbW22OWgE9pdddtDb3zQ3UWIQnwkjRQ18/g5tiJp8WWUV2mVNdSnQY1ofAc7Wn1NdXSiM11uuLvlo6onZ+TWaqFLzQ8LsATyihqmzFmx7dCF5975ap/DFBq06XPBTZfccN8zb3xiC8ax+XbiM0trlVp2RVXWUJ8GN6pXe7cPW9eWqqqruXjJcpVjk+pk9S+yaN0egcaCFMUzMCpQqVqTfoYY7XWrfWqtzarUadDGklGwiyJo00XtHxaX3GMBBiiWqYkQJ4VBIZMqxzyNpQB8ma6JtS1ZBJpE4fqne2ZNaToYAAY5MqZQCWg4wmIS02TKgSwVeAz+zFZ2Q93EipSGsb0PFT0Le07ci1sT2NvkvOs2MmnW0Ogao6fOW75xhz0mDixaZb3Ndxw+ctzaM/bbnK/9GBPIzC+pEBgRn5ZbUt3UoXtcarCwomardhJSkiMBpgjlHaWfMkqZBgtgJWyA7ZAKv0EW5EEl3IKn0A5dgAKi8ScUXazjGJueH61aRPEdLKeCzB3tqbjUYGFFzQbN24VVia6VVne9EO7yPftvbNLcoZFV1t7sVra9k/1Z3w2xTxNCkd0zFIYM5pwX44j3H/tvlJfvWr7M7eV1pBXaiHcH5X4kKhmbErV1PD/3LhSv1DH0jmiRf1hAMUGUnWAOJgbSyQpDQZhBAckB5eRCi2VRzh5rhmlSHdJcOy/XS7DzItJAbDGiLaaLbSk1idAW59Q2zch2OYtcEhTt1A93dgVSUjkp+E5tb0cDQWbaQpFvbseZrla7QkNMG1iK9z8RFZk0SPa7UN8XeQ8/RGgSkUOKJB+0HmEU0QbpkZIiyghPICv5UbM5evoevu+kd0fTsM7UMN4m50fqXwsJPRXjnxKOIRg+JcR8G8LPmkRn1KbSoGrTdZLOo+Qhy0+mhDvHcmQDPy/leC5InBSIC+0RGuYRcRhd6KUuwg0kYsv04icmXfSpeyXdHAw9yvUcpfa/qo26SfuCi2anbgjppiby9bC2SZHc8vRvh/IOW8E0haQpCs0hxIm5I6jErBF4bBSCufNKoO0CM5KMxKCJTjIZYVbrQTl/erEMpFLRq57ZPKkSnKpkUm08VOOFCWWyDO6haml1NlEC48VmEjLl5ZSlBpnmkNLN2GFBtF/BTen2Nfd0Q4e+R+Stw8ywP75ITdDZqjs/3TMvZKYh9CAz3GkzD3aI4xdDCuJOv1Q3o0PBKBzxSmLdQLXUEEZ02WTIVws1aJtmsvUyO4mEoayX2nFap7CG5I3P5oxBN0nPQxCGJPZG8bRQaKqHmaSq3TJBLpphOsjxHXaXn5BmZEUR6xJvOhmyfuy1L3ZgEXAD0n1qlkyzRsOz6dBsIqkNXXqzZDK4h72r0i6fYRAFzeXEEnp7nwXMeFP+Sc7chxmYBlHAYjkYv+nGvfs+gNvXi4HDjAw8UQVOJBtPVhqjLnGWqq6QFsiFfUc+f2Lf8Iknvekzd53OjiwlTTx+RmUrKbMrBp458WVUXeGisx0xgwwiBp9yn59VNPbGZFOOaMQDGtZVB33RkbPyD6fCDlMvX042CpCHmwOtCgwW60fWAPjvybx5WC7EWkvisw5qnD/1YHtGeADnNZNIC2USSiZ++ABKCVUGwEfCd/D9yBgEssDVTCIJei5ALnbyEUAJY4Cky5NhSl1EYRz6YYqeGptjmnkEjBi1xGKXpWGSJoVFhi0xarERC40ZN7SE9pG+N3AQOthQ4z+ZzUrZw7W1WLqywSmOntcoInHjZxqSjTjBfqUhrKzGUWu3fqMW1zg42F7aKWAVakRJb2Nwna1y+bjTaI+ezTM11ELXNptVo1qU7iu11ypNda9gt0kWLKTQu4WJlnkSl5SfZJOsoAOUSclKl/AVTnZmlG/3W6NIwachNsSTwTprfOMb3FEYrIFpFP/rAU3p4AgW27pa7/JxvDN+hTcZEkZIK0MJ1R/y3rgg1SEKKtMswzKqELUhXa6p8JfgVamQ7aLYVPzUTC8CG7+VHogoRCNIoWJYBLJzsDSt0DyzuJCMqxfi8XNECtUZgqi2bgWfpM9ASBiK0/hpimLDSZiYyVkX9BhnvQfuP1f3X8A7XQUXkYF9WddfCYnq7Zq+8Stq54fAn4LFWrzeBUiaIUZqNddRF13R2VPZFpwhY/XN7XalmCaTglZt2HbpC7luJ10y5I4nPhrS3XyrHRXUqqzqZlXd/rg6rnbN4YsUJUlVplqdeTaLaNaBoQrJhXkmUoQKEpyQqDgiMV7MXSiYBKTcsueNiEHMgDVJylQxnZH1ds/YkqCUgpqWbzklVU1DUyu2nHswY1FaXs3/LbjkrizVP4yxcZNmLFi1cdtOwwZX22m5FUeNX6+89WOjedVjkkq7BMpq1O0Sn5jdn7KApvyHEqj8n2JSeilDlSkQB5/BalgHyfAt7IA9kA4nwQxnwAJlUAXXoREeQCu8ABTwZ0QTQ1ySC8JVCy26xLIr7UhPRicES6rVa9S2XIUqsUkpGRFegeIf//WP/1bBJzTQxCUeoQm9EAEQFsJfThUtWaXFfUK0YVfWQ0bCjWiETojLVXzHa8dff01LLciTgJ8MIfiHXOdzwD9ccQKewwh/BfFzyJ0MYQiPDhv+F4j7hTclW8u4ZUB4HH59FelPBaS7/6V8rLH0+rqWlso6U0VllclUX9XM2TsKV/uPNSRl8VMG4VyvK+ddY/vuqHWm4QFFhw50bjESMHziXR+2zCK8yVTCz0bgH4KFaGJqT02lAdEzfO+NvSZdeEHHUEB5JoiYGgfimX155/MkNm5J1RJi+zfZt47Efj5xqCyjz5dTL5TfsTn3JiNRrx1DSCJAt/ivUvPy/xPlyat6hAyfcWXfIQVx+idzpC9SRbl0hcaAH9FIZN83/nL5r4mOCw5H4TfPbs4PDd158G4T+0DhSMl6V2NqLNUIslp2g4YkcGCFJPOomp06LPzy2olXanXZdlN+QXl5fonphP0YX1cmrKzvsQzqLtSOnDplGE7hbD8xGCLrlPU8SVlTUy0cax54u0dXVZedlKjPCtOnN/eW8HWHhCWDp00zRnZx0OE2xbGE8vJ8aY51YYqOETjsCcCxmomplOCEUaIKYxMZNjk1d9zp91ll2dES3aqS2qYqviZNWNU2Zh3SWRydM8c5Ltk4xi+zCofxYGq6MSIt/Z3eIr7aKCwdmEmcNT5Ill5koIPDcvqa+x3a64undsQkFx4slszFwunmfvu4rnigKC2voqishDO1tzIGOMDzemjJQQKHL0X277EDgP1RO+PGILpi4aFYiwx1+GrRV6xWBpYTnpa5QUCP/IvGiTC70fCFVZDx7SqDgodqbHjLeuzU/jdjZPX/N2gmRgI/QOBWwQR8gFAwJ2l0dy1/X/Ob6Hm+6DdTtzoNnigQw/YsyO4ZYRYiQyNHIjiwRgIYdMyEEk32hnSloubCR4rf/InLX3z2xZu9sM+Yyi3sRvx02M74hN2ShRX39U1IjK5hSrYeqvO03Qy7p++4XXd9OPaKO4irdFB7aekDnPWPxidu1b3nEYggzv6ib9/JG4hIxN0j3GbhdZNTL3V+bth/9aplz6295+85wPlGoEURbNV/kWt/9e1WqUJsN1c8WaiLMdoXTZgRTCUHJ5ScVCibzsiJww4fgJMZohw5u8TY9iPWZ6p0y0pb+saGR85ncRZj0EfxApZjb+2VmErVjg5VKx02juGy48GoqRtNApeUB+MU7WhoidKw2xjF//CiWziboTQtY1cYk0uPAFsIj0XiEc+tvjMTgd+AkOz/VQh7BUHoQIxPgFB/drKpsb3d3FhSYrGUlDRa2jl7jZuksGEah2WFC81RarZ8WjxyY48vvtszJDXS5K1p79LkV4hmWEQVCzTHtXLlFfO56EZjwhe7QruRzbcWGA5qJ3pnf3L/qu0CUy/yacAIHLYUmRqsvHxz+5YyfmGH0BqqwJOKQQ5lkC0JKM0tkwS1OQmS8MNagDMZ+MACA547rXoG4W0U2s5I9I3MH+k6M3OuMCMzsyAhMat7VGKvADwIBLJfQNaPQDfIP30H/c7gKeMQ36VmeqB6wyYFZEl/NhXM162rrG9trW+w2xusZWXWynLOVKjEuc6uYelKx1D/qfrUUE49IsFkKpA+iRtm2S2mPE69YspE6mJQc8cU9klR1whHt8i2dhS9JWW+2dDRreXAnf9yEQQTzsd24rrKSnE/6ocPXRHOKhROTii7xBCl5IxXUd0WZGraK5+XWvo2zjlqe7FO6Mi6LWBX1bE3N5RajF/MqX366NMbZjfmfW6tffO5KqHPuV8CfqirtX0+t7F3Y6nAv/Svk1WGiv0bg1vIvlEEadQ9MvSxH7CDoASw03lCccdM5pKxfU/Mg6aFSr54f3TYQ4Odcwj561+tF4v42KmVBT8Z208WLVl5fK8QbdiT/bCRqdSYln2FciQfmBrO4E2p5F0PrLQhfNHIquiSGKYxrAnNrzHT9Q5c7GKDo6PXxWXW1hVI09Wbe8eOOXVs0eaLF25hvuPbGeY6l+Xs54yaI8EQoZBRoeCHIIYxypMZra+daOZbBoVp+OOLQjwDwgjiuvSDTTqPrEqWC+aVMZYIkotUGc7Im1Lh/aNCPkhlnJqRL1/9NoVgb3CdxwF7a6UB8BxWj25Arufoy+Ts/yNri/bL29CCXWRP9gNLccu3CfZ4lN68an6PUJ0UCs9seN5GoWOA8kWyZgUVV0LJWpI8FyqhY+nnCFd3wKZ6k7gPecoHCrM3Q6DlI03kiuo6ZPJpGTJVuK9T2Ku2corolNCemhZgu7EGkKvYzbzV/49MXWa0Ha7grBp8ij2Sn9TYYXuLWEh/RFWnnVTSGIRY95ZBQVX8OhbVpfBB8Y+V/luRgGXI9CTHU46MGZ8tmxq5ZEIu31n0avGbZf+ZmrFhwYNG3nLB8ejRxAvBwRP3bRjgmPWliaUvaOvLF5TjnA1RTExFcYtSzJlfDGPd1bKvwjLeQClKaAyE49cAmnKf21IwmNIgsSpSWKyAdkTFgJ4KW5ohnNLHNIZeU0Z37Js6yCP3CxbGvDFSHHsk2E/Eb9Fu8k4/nasQLFneoTeOWLAjVap/fNvk7cbg8YeijJzZwE2QW86+Amwc/hQAJaW4vdUrgKkVQtynuH97cVGLuA5/9nOEao9wfhMCW5IyrJuVgokVUmAtIetUONkYhFD3RQDk7j0BxrHeBLFKJuKvtfiJY3bgFEo35Ni4mVv1FRfq6ytid+6Ij9vOeRRtToNJH4jNbiSEziB7jZNYsPPm/xtwYwv2slH+1E+XmdwXCGRbMBN3VphKEkiKHjGSLCZP2g5pmQvnBRRYqzrkpFWNQQhzV9ORe2ISr2OvzrBSUeWgdLRMPH/E/vXV/uDCpqxfye0MFL1KeL/kgsPYWOBVPjCoavH4wsaSZVClZgTORoDuxVBPkPuXposaAwWwi0C1cnakFjfWi5YTzmcsGlaaP/rYO6Jq6e93OnP7Dx7MzYVD6M91cr7c/0nWwIP/QO9YbEHKHx0cOLj3QDc7L9Kg7kVe8xRWNkukK+04Z7FOmifd99JbJDYj9236b5WdHWCsQjbuUEYdLtZa7faSg2LGS8jqR8/WmWawT4oKs6SIkuUQI/sW/BmltieZRSoA2+2tvh0m/UuSzC6LLPdDEIYYbas0y6mJry2iamOPqJyFM4ZF1SL7h4vfOA6baW2tWKDKoDYtQ0yU3/yUahGPmX2yoIolaUCoF1UCBPtJ0UrKxU3k8nveKWJdxQ/itwD3un1ZucYeBzxJCguUuJsEhCUM8dyBBW7MWLFnmXdcJiF7bcwiGa9bkN7djF6Te7kK8FgQ4O6xmfE7eTk/19U5LDF0VVyUwL5J7E4PyLoyq16ps5IVdxfJwkdFb7acxxYqbJM+C+JU5VIuchlX+4dn78nhTLv8r058rF5GoI/bVQB7ghBkqWxqqT41Xjt7NHuO2bHefRfd7uooivMa1Lr7PJgMtI/jsTKSTBi8wQ+4pEvCLSmh6ZkziGyj4PaZ08znW+eUp8QZxNRYNSsUABBrmzvYHlvaa2v7bGt/BzpkuzaTq2bDtsMdsSN5New6msKiajvW8eqqZ29nDTXaVZPdNddiT621payDA8fa66ozVd31cOpEvfVx7qS99dvXKfs702kHOtfZzneBSxe5dolblxtosKtd6ZqptNwbargbrXareAkHeTjUHYe760j3HO1BW6VLmdZDx0znaSkv3j0rW6ZceDt8GnW8YvkqlSrzbaZqRGQ1fk5EORnjVLTTteJj4xKq8xfQUlLNGgIFOVPb2eRACl0fnUtNT8vIzMqumyNSe26e8/VcCLpYkF8DFgbvaUf6X+TjHtYVhKOYuodyutxexfYcx7truF3H83QD38dXd37569OrR78BQwUYNGykwGrcpGiMZeNUmCZocAQSsSCAXDClEBqVwaQnpy+MzeJwQV6ThTfFq2nezfBplq9YBHV0rs2lkFa79KLkpSgCy4pWbF64sopStYzqaqqaGsWmltQrib2W3AK9CdOmzJgtrnjz5ixYLKHEfpPdohwrVkuy1hvFNmxat23XjkMH9u05duLIhTPnTl26duXOczduvfTCK6+99cY7H7z3yUdfbLXdTrvsqLHCDpix3YmJBoYkspGxCeXZ7YlAYTFoHBFPINGoFDIdYLIYII/L5vAFQpFYIpPKFUoVNVX13iBBDW2t3CJ9XT0dQyODyjCvIoosaod2jRCfJYVBsBIaQ/TWFxdJJGRDG9zwbiy+1d3CwShQJFjo7iyxzW1sa9sEO6/ZJOG7uNQy+umv1gARaHUGqteAULNryw1fdtjySlVj7abK3VlpxVVGjlCmAs86Gyyn2gw15eZXs2Szis0XhjJ4T8eOXn3C+HGT1lhz4lqssPVRZZO1Flqp0Aoteu39lIHJ60yfNnXmjFnrzp0zb/aCwfnrLTwXEpgAfBEHxhhtqGHGG26iUcYaYaRxJhwkLh8gf7sAPTJBUQ3J5QVT1XRo3DasMTsGj7Oj0/3ttY0Hx7BsgV4cOzPEMGpFiip2f1yVYTZBTKAy8CGmzRnOa+xjN809qpm7ldYa99qa/efusMLaXeyTX9Uqqu9b3CNnAPyv0k8ZB0vgc8iCcngCsTGy6qTmPrJHNeUpmhenN//71v5YdbOd7dcax6tOL7jsFq/03O+S+qWX8frf57fDDytu6IN0XylosOaP2xq2oBXvmVi/ReyteHorihOgEcH0UQ/m6vP6GvZ0qBNd7sGAwtCP+ncDTnnGcpwfxz+QDFTO+aqv465LN2gNlmrVoGa1oXMdcopMjX1VpEYtqWbd4QeTHO/2SQtBjNxTsqIKVZppRA93rU87CXLslWJ2c/7VHPMU85y5ZBj2ZnafrbGjbB97it1hadbiEudwmFvkSryd1/lDfolf5UPhgXAtHAu7gireJjbElDgkzooHxGkxJ5JiR7pMcqREakvz0oCUl0ywD8pgGgyAOMCALF8qD8kFeVSeV65QgFJVisqsMquw6tvqtHpAnVFRVVFdrdIMDWklza81tBcN6I/rs/qv8YixYGwZc8aGAcwbTcWcNPfMIXPZrFsPWm3LtOrWp6XbN+wV+8JGbcG2nNqxnQUn4Yw7w85xJ+FwTuQid8odci9c1C25ptd5krfi5bwxb9A77WW9NrwejkIIq1DAClyHCAz9m/6G3/Wvfd6Pgjg4Dv5zd+SOcuu5jfCSEIc34XlIhCAM0A6iaBKV0TaaQhkkR1dEq9Eg+ojyUTO+NrbjclyNt2KQPJrsJw8Jnr81/z7/nF6dHqdz+HK8hwu4g5fwSbyBWdzGXfwfMaSDDBGLzJImWSFHyDhZIDGCkhwR6Q00pQd0QKfpabpGU7RMQXZrpmXlzJOZWSTLZSPZ79lCwVXal56lV7KPvC5vy/cVd+WXaqba6pZ6rSFNX3vWLXRNL+imPq5v12/p/xu+xpUxbKwYq0EGEkCYhFlYCJvgIFyCp9AJf6GE3JjiEbZwGufjTjyDn6EpYGa5En6+OqzCFXykm3lS+F+N3Ob4HaRHbmtnj566K/TuKW+HXT+1K/yRacfD56f9GVoUsRzxQqQc/tfIQ1GlUU9GTUT5I/4alRf9/+iR6JXo1dG7Yl6NGYnxRP8edWVMTmxx7NuxnpjvY7WxO+MOxdni7HFnYy/HfjcjeEZX/AczKxJXzzqSeDLxr2MmQRBEfBUfSEZDpBAkTC3yUoGGaYGW0VZqp3v0ir4pnilZ4Bp7OccjPJc38F4+xdf4BX9S2UfuU32Rb96X9q34Vvp8wfGbqWV/r7MaVsfVw5x9M9wXVpvvJ3vTWqOWVJvV+03NI/LRbdCQBuXXmhNQRTbmBNiE3vNGi0itd0Xo+v9KXMcM/RWo1s02nM+jIHOAgNBZ15ADZtZOJDVmj1EAJ/gN/EUJEIXvMUoBIlHdQwxqizGzjukyYfZuNbQS1C3XkP1mJoQRKoIiZJ/fQafga8L8e9TfLJIFy6zraFQLCvKPyTjLhCNCHSSpUhsgRKDpNk+Q448MrRZwnyAfuTlDTXhUvfnCfblnLgMBZv8bFiHczK62H6d3//3gOweL5qSP7XWqX1k3K8JdhL9gTiOX2l2M2LIBhaeObzSjlUINNjyNohka++VrFRxP75IvbN1e2v12HZAK3lama1A0rTvRbQcDG1j2hJKd0BvrBrMAjf2tDPZdp+AP14RnQhQwYFffWpYfJ/8+25G/BR5QbtdfocEhXX+WJgO69rbC05Tw2J5ZdHk5jmF0OS1jDtZEEQz/8QElgulO2C/FS4fbemRP83nKXlY0tGj5Z7Yht0g/dPTNwNDUJirLiJbW+1DsNXCpHHt0DcA6rYyxx9M+HK2pE3KvQ1Z2Nh1fRgU+CfHlNNzJRP+GD7LI0gx9YiLoB5W/FJtZe8vmz83UqBegLu5h2V62AI6pS/+9dUf12K/XPnEORm9FYSB+5YfRuTNMK0YB+JhIj9dEbT8TcKPCBXLn4Uz0kcHdvnK/paIOjyx6BAXeWbq/0CVpGatjwCGcoZPClcDi3aYIk9imiEwnCk4qVw8oeWX2GhXjhkAMzjvrQM0semI4FA9sSeBVz1qvePlzoYJLIW+uG3PX9Xjuv/p+EJ0EB3e5p/ny8YFXbxYtjTjM+0MZbf4yNnPXrpj4/ZyycSi2oJq/OxOSKtGDSt44H7klJDJyi4mDEyIY+kp+KDgcwFkNvhI9gOfu1Nex5lmweoVTRVTj6UDa3UhpsCUBMmAAePK7K6YZvcLIWevn3GjkS6UpvVp+mwgsNViu8VplfhPOMw7mZIOYMBd6WuF92nfPvPCs7lgb4d/99X6y5f8/6RHWmDIdAvRIryZ5ufPtP95HV0zrZutSPsmRp3wxWAjdXZnh4CG+jBw5PsfzyL35udNngdyaBpfCG9esPChjvwDgVMJ16aJd/Sh0E/JdjGjquDo9c5FKMo0oy+IfOyqQlxogt1SK3dmQprBBDO+gYpbXPNOK2ZiyDjMOyNLEw9YuEMluJvBkEnk7ufP1pBrOYXNe7cqHuzXI+adNzX4K0UwUPhrsx4/eookM/8+LHF9afEYwlNGzGBw2DcdoJ0CmFiNFpGMk0qzLDodzthQre67UfHJNB+VD9+qEB9/WGOKlEkMeQaSGrPqPVmHP/9FLNiTfPwFQqK0MbcQfbf4osO54JwBnIF9bjRBuak6nlZFXfILQTQXheSFblMZS+i2zEotBWP9WoBKJ+ScAP/RRhpj4t4FlhO+OqRkotVhPTumBChRr0kPn+NSTziXu5UXJnXDg2E1N05XAGfKUojnXbpduPF6TNK3i88XgUg5kwtyJOkjzDv4r/TrcYQuKW4mXFunGMVpck5meWGgY5qCvbLBBWTWRDyuJJ5i2aBoNglvQx+qVk72+MgjLo3SLZzVeMDhYjHuzqMzm+FiBMDP+ELhZfvPq9I7jcrLidgHXdvFJES9kfPmjV18AEPcBEvo1exvN895s6ObOs7lguTNy2N2bxLL8olHVSN0HON1Xzv9xL+8Ch0mlmcphFk0jicexO+GxY9VdGcmEC6T5ar5IJMdPHEIFMwukufT6JEaUH410y/quACKQmZfDzAhwDqTuFpkSNAzQjrKH8pm6gAEUz4JDvtY3Be9ugRrQiXR9nqLDvjAc9b4t/90Bl6rdq31qcOsrxKS+0dRr5NkVMFFEt9KREghd3yM2I88Hlw9v5AdvcKtQh/nhgiuFBBoAe3f18sCu/Mw6GMHVbtg1IYnT1Rf5YrvdDvjuACZ2usRrmZ6sa8JAbxm/q43S9SUDAPTGlXF8FTo1/1kIrtRjkUsGEJmCLvf/1915Iv1ejod8eOarfgWAYvd1kFuEQONb395Z+Cy9N58hxnO9768+5TpsSo8iGMtmZI+4309NRDmpuWlXucMnKwjI3o80XJqR4/Hjd21L4Zp2RNjH5YHfTNEexD7dx1ch+XpHX40KV5O+4IV6VCtBpUVuQFjrrXBeSFCjuQCecY0ayuGsZk7f8K9m3U9zP9Tc1KmO0c9ZuqRBPKbHLDirn/TYXJheM6dx/BtKzHMtGfGBgyp73Z35ZLOXyBc0+sX5rA3K41IiLSjDRUjJiLS49CQG8Ok1Lrd4C1gFGotxbyDG6UzzizICYRXEV4g8XzQn8cosZQwTteVKGCtifPqH2s1OjZpJxdcIFw6dxtAoPAv2mdZ0QbJwSB5vaLC3WuvLy62VZeUNVjvncO0zEGHJ+CAxU8/Ru0uxfNwQFpvP+n0gXtpc0i/uLdh2BgKgOyM4uqBCL4nCVd0gklYJCkhFQuwyfU0GxekU4b3/NwnqhKiF4WlWHUo4bMNRfnhaoCyLGQeFSHWtU6BeJbIEx9FKs/z+fOpUQLfcIp9/gNNpcEJ6X4WwkA1DLpxBS0Dz2SmGxNHfJ93qFzXMihEU8+WlxVmKNP8b8RmK5Qbw5/JRyD1vBKX+mNIjYtZPagANKU5jMixrQIZ2V+FJxMSW7mptU6NaLJTrihHx+S11BCteGS+dKYcoOEvmr0Exz2yg/RyKKe0Q/szrN27uYlO5vIUduGAELf6bPhdwRrvUngICUvCrVXEyrhBQNHYlfDS1Ct9oSuiE0xlDvFKXbW7L5LQNc+5RN5eB0izZnjQ2MbsoXIpWd91r+o3ReFzN8f+g1v8UmijLg799WJBQQobl6sy+5P04abOjld7fPZ+hSPP0zAC2pg9cXeX3T5U5nxJBBfl3D+Xc7Jw95KSdX+wuZYm4aTwq1rxp6onbBlVTQ6MObqPTZC4dO2EbZKttL1e+6U3mepNyBCTarpaXOfCAWKj/pF24H8xFu2dJd03m2wo3k8YBvUGuBYjprojgIUo8II3sIKB0s5uVOVBZACZ+BHA1CidwirqPTo7tFujJJvBA0bXo0911pYLV5JY6CBjOG9LRulDw2wrlZ47nzTTUYw57GkoyzsfeRWKi/RlKhEOB0wqtBMS04koFRNMpVotDUYwQdl2n5aGTfoX07MZ4qPNIE11x5KuC5fXr/tZkQ5wt/kKPUX55veb461J8SbEh3QjnBoY9mVw3w3vZpkMMQzIgjzuBxGQIA3j4JAkzxgA5EbJI5UfJIM3HUx9k4zm/aCaWd4Mwz9T4LfA4V39mjAeTSPst6/xkb5AwFwCWnhaA0+XKd4pRHKESciaEVy6b23YE5br7oXYskC84TBrp99rr7VDr3oTxgY4rFbyvKDLRMqbbvLSOQA/DDxtsFZREHLKmhM7AOAMkmXKX5a/vzCIRQdCFCwDYm8h84Ixwvq/JTF0Wbi4sDe2O/nMldVkf8+nCKg7w/FfAAxj2mEDziTFo0JQDD5r47mmJno+iGE/CvR6SVRtbZeiFaQEeRA8JCzBDDJ8hHxqIQ8eN02fz1uKDHKy7/ZLr97ZT0u1ca+/2P1GnvRe6NO5s+oda5EDl/fgHJyTw0X8lPvLuO34bs1Jtj+m43cqb3ZceTe7JGqw4QMYWI8QFAKRh45qeUgfytuOvasCGAvjlQ829r+4MsYQrMp0Bc+ZToIAe+YCwJrX/G4guAxncRldYA9MNSmNk8zue6Q8Pmx7xqImksS//6ZoLDsCBFfUGhgXwi+KW+oP8swqTIm6yAewdSZ5iR8sUZXNHT5Hu3wpEp6fkYGVz9az8GPepWcT/F8Kt0DbkeWTrgjJWZ8FsM/VfUhV7HUR+78LiuuKxhX6ifPloUy8lkdnsilJBRmB2qmq+hlE2eQD+spwu3a++suCzJd988z/x5rGrIAgbGdeBKcCzaWvqJJHp1+HCt/xd54eavXuBWCV9LmzWI4kKAyYpWCXBHxSBHA+nJ9sHLf3biXwr8H5Smvd6rbKpcpY/MTigmNmUeRESExtiEsn+m0k5KIr7+iYl1HASUjlbeDGg5cKEDSZhXTd+371LUupaKqQp6sSOqSPjOuh+981kKb3JTXom/zJzH7iXoSXpK+/mot7VgP6FM6AnUeqxAmEPjwLPdPL0umNgvTfuCtBm6hGiU+u6m6XmgNOTJJ5w0QKdqLyWdNDD8Vu/AXRu4cRCNeJGPougsrqKdHbOlTQ0WPrH8BqpGcxKGWyGU6fB1epZewSh2xpCDoaTOSjM0+VTnGcjB0n2qwS9mA/zXxIMsJpHl5TxUiAo+2yhLOrxKZHXjC+h0dq3iEdzhpEQmr45qqpbeLwGH3f74ktm9LZN98l7bggDyvgyTwzmB+uegqBb+pIu6d2SBEHrgewBEgAhRgTH3ieDdfxbRGUUTlJRumY7b2fCrfTBOcQdrbVG1LYkLnjkZVIeakOyl0KCzPHwTmrKjLDFl8xywBhEt4FbROSukpnEGq0FFERL50vN0xfM7SeEAIZwSqCYsInKnk75wJZ1aNa+/Sy+tCQnwwjn+ofcmRyoncsvNN7sFop6dBwBQYN+cdAvjs9XsQx3BE5xQ008aXoZoPKqDuX0JkwIdJy9nQf67fLgSR/du1r+YdUU8hSF87Nvpn6y6QxX0jJ2rTZejlyuqFiOMssfz6bO3XPOP7He2f848wNR29DnhXAOcqvm+yyKUVLzK06TltsJvfuiwUz52EoKHeRyl1PNKCGJnToEFYk7dqFsP/hirCqOhCespCLkwXX0pWRI+jH2atEw+4w1r2sW9eETuvGOjfKnXXSHduMOC/VHN72jPvrEGhj24y72013G677QcK/bVy7YsgX41JBlxYiK/EisW2GpvoAwcGLJbbMCC1VA1BGIP565kLm2sjVhjhFv/IuDly/ccf4pSrwfsrsXI/UsogpBLIq5zp+LsqtilkdQw6K5/ppJI19eelRIOAOqgtu7dFst9SZyWvAcexfgb76iHRTJbRpI1lLgObl6QMkGMqYYKWUnxNYLAApeJ/6qpnazVs3NPmhK+eJeIZBvOg1X0jUEJSh+QY2+jsAmbNWF5RG+BP9lCOvmXrZ4yjc7wQ2APGap30D4+Rm24VK0lcwLm8P+kD2ernRKLjoryrb5E6AOL7ORaqlNpGwjaZvz4mKBTY5Ys5oBe50XrqIm1xy+jCWFCNUi6lIk0QZqgwLN7SBKVsHNNTgHa/o1+7N16mLXghbhhXhBb+lVxTOBN4UD2T6xe2w27wT9w6sUm03eZkttflptjwZpcruSn9eE+WZFzK8fZ6S0OTnXaHwPymI7ZpIijpA4P4Zz8cK23PlthmbHcpLG4u4sNhyWOD2N39TLaxVxdBrR89aIojY3bvrwhUQKKxpgvn6GjHoFRc4f28AGZ+BZbRnC3jz2aaMvlBZsRykO3a5A1SAp8JmgUrO34oNhaHXN5s77mVBWsFHlUC27tm+HRpJNsrXZmF3nWltgsoDgFHi0ymBaX+EZ+ONww6RpikGesgclRs0u4uLBKNwGbpEM2VybPSMjcLlkmSbrKoiWQWBRfIJK5HCbsQZAfNzvCBFESb6pwz8ly7KTTVNIoH+/TX7lyqiT5QEF4GIZvVGHbArwjtqroWp55Tw2swVtDYhxgIkZ1JMX1NMFT1AM+UGn85Ex7V3Owqy99EQTtdtmcqz6NAlFzqf9tSI3RQR/bSIFmZ+/GLhZETOa6kGczCECbwTmuTFrRc9KftKbaPsnCPKdObrSZirfYFNwI57pZvOV5apXal5/VfuNIfLDDbh6rRpAiZ/k9wG3a58MpvlXlFX+RYkxNZIEckGstf2kjsSgBoAhrF/rASL5dT51nMw6Mf948Y854ADxpDEpBqVDI4652kh+2/ApTmh4EQqerCe/YZSO3gGdveRKJI4F8jrxXQ2u0E87p8uAeMASBoJfX7f0N5izt7FpufsyNxt58lISuZG5GrTVrLHiRXR/Kdh/aDWwPPY1m759p685cvWyN8iRSNMvnSjV7AvbEbYcsJf+1VMXAzlGB1D/kjkHuq9YBnej2u1sSXPbDJFMgCXNRAgrtaVdrtH44dCsso1jVfCdqOIn3gGfbEtZv5vNZjNSUltuf2fh65fFirMrB2y9R7ftW2vjF1tTdy3MHJz0/2V3hHbl64hNyA5x7iqgCAUebIAGHE5wGgMesc+Ynzq/JGFHtAAH3NmzwA7OCMIBHxEMC25yYE7qvyHMUzxoCLNSKmPpuufR8uuNZE2IfASCMLD+aTB2vM4UyQQ9jeirwSHRLEeUV8jMlOYgzH5h2kUGa9z+iXLFkUaUbjcu8HFtQIb4i9yvotSis47MAzFzit1WnqgAlqweUNcon5xz05+tlBhkKBAJJtztt7bS8D12EA3Ke6HZuP8JqD4SPY1W3ruiSnHkZkWspOIWWtO8yYr2YgMXQrdqvCmrmTdSnzTPLLNBdmi64mU05WKp7oqJFoxQT0BEIc0frHdMvqs1zD2L8dnhSeQ4juYqB1CmTQsP22hOJK4+m2M5yek1r8HbReCFqvZQTyMe/zasAwwQbnC+v2Kgv6RjqCmr1r+JCuxFil+xv5B/AKHQuBkkULHqBnPn9Uyo5quH6sc60VucGsSKFBxIfhGQ6llaT8ef4U9W04Qvanv8A3lM0DJaFD63LSiRDoD6JCAciwpWUwvG2lF8TkhPJenDhj4y2n5VlOzgKanNJNyST6Z+Cvlx7fH/vy0tK6gwZGpjx7Jns7veqG+SNg8IKUetT1boEkpb+x09w85+bm0c7e0cy+xb+3bVvPhirO3Rij3FXZjnEW0x1NhmMgkFbgzT+Js9HTHlsHIVKqk0yykxiNtdoFsaztluMqvp6Wp4x5epD5SWv5qrGzg3dZ1pUJ+Zv+gplkyBY4wcT/BQcWnn+lkf34JVujCkJazYzwdA3Mr4FMXtjDgQrRkzQGdTLvAJGM8eAFT1Z2BKZ/jBZ/4vnS+TSlNYuqN4wsozf8QTZrtMfaE4UeJqKFN9X/u0uyLhfb4f5w1+4HkSKOd3tni/cqtSad9PbDblAt3ZO/Li+sd+mnzFEK3+md96nEsux/lCQPLjsPLETwJs1AW6A+2ngjCUsPOj0WrNJTO2udQoNUrPpNbQs9xesDvah4ULtNzxk/OXVPcgb9rpqcMpIKcG5TY/D+DTyD2xVrnjV+6Eled+pS1Xfu53j1QeURlBVZOFZUt7cdm9H3ku1UEtB/Ulu3M4pGBHiS2EC9Z5ho2M63fUL5SnJMyLCp5iek3eV5qArZCV/Al23O6jghYpjAJMlzlxymtMU6AmrRKdL3n6dR3MlOfaqaku+73mli7cTwSAp3R1qaXWlLVb5wX6DTV7O3zYHQPAgisSQQf8eror/C+L0m6hyBdPFWw75kV4j9yc2XOdAv3rMPxAau9dsy6wS7iW7cq+5rvvTo1IzlLukNrjSIUJ42lcASzs8WKhk9uRkQe5TQ0pacgLdzWSu0G87E27yPGQhu8NINARbOOcQdA3y2NOmzN2VpKoz0BOOb57Gec6e00TVpuH0qxjQt6yTakhWg9hOln+CaIkWCBtkS3bBL9uXYFc6n6UP6xDV5ohnhYAIvc6APTNUwMHpnfAzQ5stqKyTLyuK/xy60l9D6yfstjxr6seF64UO+CrFoNAe729RxF11+uLT4Gu12d4w7jNLv5cid6284SxAXkMP+oek+JsK4iiDhAbE9TifDvwRmSvp5CAS2Q2KqltMPLQWI3dmRXpY6CWXessca8TziYWtwM3QG5ppk/dOI+p9bRIpO6y0rdBx8ZgL7SQK7KcnHajpRn9eF9XCfSstuc4puuSBpFJpczNeoNMAZ1cafZll+ut0/hZGL9Qb+wNn+J2+PANJD8McDipXXm5F2F1hmBIYdJAs/X1gV2CWOmGf8VzgXqnivTyNF4WWVceTOZcHattooZ2a0N5WaW1vLze2vrbePBj71k0TezzjZ/4+wgkDdioZpiMVV1t40JElsV2Z+hxNxYQOCsIB1SyHJci4ElA+SbyHxNi1PUnBXpq4bs4NCVwfK38O6RQ8/DMgn5YwmVLVIsMnpC5y8hvPHlgbJNxxLTciENcWD/5dEh/lCZ1fXf1UtvTmun3BtGTHN7qzUe67dPNCeAmOwnw8SMM6JRnzglccpHmLXoWJft2rNLTAtB1qRQVbf0Q4cTWNhc89aQhz4Evr1zSbeRgoFJVA+dih9tvuGPxkf7ugSVc5hjPOG1sunwukBIERB4lBVotb8bTAP4x7RVsw83PlRLicI7Hf/w5yRsxMbswXIoRHWGfAn6KZ7Dg3SynNox7KuYeth83RKHfV/a+rltS1G6dzqXLLcz9jFR1s7LiNRLnLIb3pLAUxmH5dK4mg+ivj4z8R1vx4CNO/5UYDhtTqaH7Siio7UrTy/5PyegizZvtf9Zg3WS8tZi3lSjxbtNOGHBpNevc44EMNX3LYpITJ4+8l/D0+cyegfhCnBLiXlc63JjhKggepS0ywCMsMMQ39XWZwRo/YSAprJ8kShdIcmL/ousJp4/+xWQZllCmT7fTSdUeL8rfUSgnczy8Urz8JYINVWkodqVOTIJ0MZTkj0XqRR9E53UF2OOE8fORy1AfXHmMSw+AhmI2TSjemWRlQWd73y/QzRZ97BQt6Be+qKTE4L+7HoPzW026gqNyqFajB/GMO6Dd1E3QtEZFyKrdbD4Ty7f/bkf1uPD5pBX05iwyTCLt2BPn75jyCfOTkLG29qpcleVAWOVKdBx45bK5bUdQrnlrqSQnGskDrvRAR1iR9Gs2XIB8yyCK+vAM/6drNbkzNFM0u9DLB8aLZihPnixYULykd0P40gXIPzfDyIXhkE7e1Js+8bXet+4yIXOI69fBBfKb3u9rzI/OfzeX0DmeEx85rhIF4eRxHzESbvgzXWxYezpiRbjW6GuB1hHLGt1kNiHw/NsA/BsYFNi3Ag7rR3gftyvu5STrU1IeL79dPPhbfSE/GD578yIuXAACgXALD8RKk6QuT4Z8cUJ0UaG25+H7BN6wmiaOITNOO+7JaXMhj0cPrADZtcNFBu/QmgcCTy54/ut37p0g4ap+EL+L833DWsyrBnlZF3lvABv4FTgC+DF8ZR+QvxRFVsH5MiSzmM+BMnRQn7iK/btUj66yT8tjc9tVkzzv9JMuoNPuxs469zGNzqfXzaXGbFYSomJOGcqM/wp8kAMMIm0R0dWS4nrUMolw0xbnQ55yF10qhaa2RNfMIubPjhivMQOf3ht99u1L4mbGR9wGj8Tf/w6KWxlgRCds5a+iJvXhXwEihFKQD/DZ8uoaQAlLt5e2mxDImF7KXgeRJ1zog4pH4YJyXb5zbuWCP5uCMjICsxNcMwLfUpscDIbsuOn4A8ekj5Tz6QvL3v9uqwi3V/xWc6yipQcretIyw1Ce+p6Y1g4C/WhfinMCQkQCFP/getW95jZo7twQii2qnl3/KfpPB+rjgQ0WhhJr3MIiGyhjKZIX/5xYvNWjy36AsEQYMZCQPr3Xkl3invfyw7tXYrZvj47ZK0XHefyF5bMb4fcPmLLv3uW5r75VyqPV29sHn+rTgXjqLHA/hr8/4g/OKS00K+1jLjAtDf+qO+diHkdmmyDKXn8vAImGx31Jhu/InxsPk6hiApEgPDbpGo4wD5iW29t9Z+9/6STszpUqaHZacChon11hlrNjTTh07nQu5f0sCnFkV3e6K1kS7XeEy5+EhhpbhV+YIMvhbIYHGn7buF3O2oDTQRza3rRn1v93PK94O0tVC/cm50ye8l0ol+cEVfUWFued66EYw/4HXDq/OmOTvq2J+p9waObXPY35cdzg2B9plajFR7HSGwJdPzAO5gd/rIB67hQMfXgoOBsz0OgkiFu/z84XN22BE5YTXk4c2tdl5XwJaZ3QeM0TUyAmmeAPtpASJFOqOWhcK0xfQ5RkAhtKSd67JMYoWUlBtHRaKI6bETMS0lGBgjgX+oUmB1rr5yi57K/snYOmPLtjcG6L6d7QefR3SispZvBLqs04fxiP26jh93CH84spLAqi9dY7od39bRkSOWdIdUe1ZZA5/7OavXcuIcs1R1WHd7XiIJw0/ucag5WOnF1+ItXF3/I0gx+9Onl2rzrFPBS1j2OtIacdK9ZsvoKcrPM5TShdNDCrwAdU/TwK6VMJ1SfIwcBwDKEnrFjas6ge6zNdRFmRr6NHgmCeXxzTfc6qLZpUZVEGFEiFnIUxXJInFZAXCjhiBEhOGaR4hXl2UqyFlNYy/pmSGveyg6qjcofWwswIbbfoLTA9OV8hzc+no0u96bRiZ7yJK9FX6psR/H3WBfMt4IugodrzsThtTHhmukuAtlmEpPQYNW3Giof37+AacRCQi9sxzVZj7cacFXiCWpqP0LporhKZo4EcL4au17bpeSHpQvtk4XQUWr8B2fc6cd7BmhoMIOCDV5ZWB5AIzsmD9TqBMw2Kgaw+eYumEiMfX/2z8oZvubCSUrVcDfhIyQG1SP5SsYJ3aTwFpBNba2WEC5firXgbtolYWAzGNAXuIjvLtfFTIJV6KceG03UXLtSa5rOFRmNa7/RNSLfqqt4zM2Mp6LukW7TGr09+xFKun6zObvtS8eTvwq/GL24M3cv3hijMwKNXjirJ0LP/FrDRIx1RLyspg6zCDOovMBJ21OxV2Y6hoQtqaGKXZHRIIH9OvRDjgVU3mE/augV+54aqFybJ0K3vfPjGsDXrvJ+s9X7i68Okmmpj8Soj+LMOUgpo1LMgQ5ZsvhBSiDQSL5hU3MvYD3XzlBTAk5FyIY5ysy0oEalqyFRthAzaws8olFuySdvwNlWnza2mFjwpieKoX5ahSOPNJezEmlKYhSUuZeCMdPxmyKifdaxt6qKpHz1CJf37Mc1/AkS/UvTgSnmTOO3/UhH9RkVemva6+FD7dUkEsSpMVdj4DSGfx4IliJItSHyLZqPYJEld7ve0YoRIlVKlFDNjLY3W9hgD72/Fr7nuz48hd+JYJTFakV+5umnLj+bnVqGro/n/m+xt+N/J4pHNbdF19qEL+7VIbQcvpuxiS0NPEloUzv7rlZOX4ig/gpd+D5rYLQBz7arQbs83wzO/IW7Hzbh92ea0ZesPeVAd6gip0T0RPw+HqrH3z1vxKCgJuAk88W3AjqdKR2rDDalK+vgpbsBPl23oagkIHvMUanznIvXWHrB8BnY3s+AFWn5MAmY7BOg7PCNp2DaSeAAzwfBYiCCCiKCwwVyN3u2tSC5U8us0sfEYbAAZqX4tq3wFJadsG6Ws3ocqil0TgN3eZeE5L8ZTbMRyDYpGrmiQS7dTVCBwBBNLJCyw507vfnWixh5lzyCLYtHyliJVLd2iiLKbNFF6cOylb0XzF6NvPmf81AuRdfJCuknUelvelwZtcJbyKJh/qvdUPIKcg87bMXIiH04Qu8jRCehsd4UQsAhPdoog3M8EBFnuaTkF0RJLojjp2pT9xLVq8k60Lf3LNB3Ho3lgw3I7R1XfAQ1c2FXfAiNTE/L8cSlb6DJbb32HZquU2a3TALzIDxEvXTCg1aGf+3Ni2HmvSYVH5fjbcsqy/bSZzD+RE/wr8cjC0wcrGhr0tiv5OF29tBxbvh92cTO/MLmEizeDzG1WyUOL2ldKbmmYddXDDPahfjEQYmnQDDVQPpaGuWOYjK+Q2rVBMAimymY8ReC4t/fGNy3XhQda/Idc362nr18w1pmi6YlAylP1Tha3hyx6Z8aeOhfU0JPd2VtZ7xhO8cq2Fpm1KywaWwOl13sNinDT9pPCuUh95tms1jt0IRHzHx5mn7/cuKt1yM5j60Xw1ncKsqIdMupuR5cpnF3RqMuK3h0liaLCtLRoiVMGceY63KwGDUnKVt7r7T5xYu7CmCFT5j887Mr8T8zzmdH6d/yu+ujcEY7PxvlBcr9FUBN77w3Ty3hYejAcClvUeyK1qRvtE/EDHc+ez7m/+6sOtq3NMkcvfh19LvUqs14NU6Fg2AIGyyM4DBrpnlIcRtCZS7loCIFpzyTsOEDw7twTgP4dWThBEHmDO46gchLaddZARreG0k2gkyYTfFMJCU4y/Z9u1+9/W02psdRMt0vyezVQLYn9aGHlVnXn4WwgRzQS/sZhsyfH+YoeEK5UJ3cdyWnuWbI5pixFn8Spn+6yuXKYJfjaajcutqM64ZERvfcset2KouBSdI5ubHQfzn5hd4zIY4cnFCRJp0uF0urzm/bntO0t2rkrNH6jiWBFBOPC/dPR+Q8NDZ2eO2rslo4SvvQuYYr7XNnXOWD9qgb61MKLY06afFNTOblbSv9ERVAjad1ep7qOCtlHZs1hpHEe+6REwDty74b7L1yPtaRw44LSZ7q+4MnVbsx2ItlyydJeDQ+Uj5weMBdl8eM4zDBpOSBPUH61vyicrvZsSOZ0TU6/t++IMEJMGvdlYin/YqkQvnDyga9ywL74DgYgXv2MKCafX+3GVCe6gqqMHgX1arinJHLkiJWBDH4GNBAAIrQhNPcX2lWieFAk5WWT229c8GB54T1IINzQSka+9Y6+JJz/6s8XNRn1jT8mZqz7KCQ818RHOScOlqpQrRT/QxGlUILupEF2g+O+TWYlgm+qdqO/E7UJj6V36SJe95Z4vV0/r8Tf0us5srV5/kh2F2eAjMl4aEjPsU0L3ntcEl2ixxeFPtqDEP8SgQHmhVdADC7yjs3yCQ91wV7eOtj+/fcHi7bv2BV790dh8cM+0aUZ7+TIniPtg4P9id+/9S14dERoxJUmPv/1curqxFTCld6rCL0aVHakJMsrPiASEX64CUb9J7Z21ZqfEZNwZEgxD75121ocrCERkpGXDber24jn+9oxlO+O3n/++4EDFzVDjubf/tZbC/NMnLKI8IlBhDmoGxBaCU/ruLFMpzOEbtDDggdp5EIy9hm1RdScuokQhdMuME7pwo2Nf5C8nQ76J4bCZD71PibcI7UrhomT4qVxFMZdqGrQsLjxM6RaItQZsDyqqkk/7VGvdexYwdz4Fb3Vg1qrLCYqdBq1pwX5xv2z7SDCO3rHeIVaa08A7k9QKGvlJ/iNoryyPEekUK/A5RZstTK4MigEfgUxS1Ps4d7VRPh7lUt1f5E3tFh8yX+Mi61ItSvHEHV6GytROu5VmmVMiUihvjIJ5APvYzM514h05VCSgDJ0bFmQIl4ZRw9dLkZDAWVoBxtjx+B8kdV2VFRqEs6DuqjfHZM4DzhIKJxvVwQByluhHHf0gsPQVoraWFAtd7rHFfZQp7bWHn+B6m8dWZAiK52DP58Sqq+r3DbNEa8MKjr2tcGFIjviSXuN2zOKsVVt5gWzWK/xDgyqJZtR3L4PYYppQK3K+xPdGyINrJW0fUpHCUlqk5XOI5d8SdsJw+A2oyWjuYlyKEMtACZmjTShDkMZ2kftRcvQ2l5Ut3BZqE3XgiunxvOMm1H3XahLzxoUpi5pFJZ1kcsqW7be4OR41gCh/mPgcKmI0EI9lEGV4qimhnodwd2mHbEx+OOpKRN3bXN4o6iMrrRovsL2xVOrGx6e9JZW0g8VlF+EpF+JbOUTWyrxDllPg37LIcjjGoa3tBJBOfhRpCFZnvztRvmcEJOOmjTUA4kQHAwcUp4zZB/z6gma2DpWsToF81vZIhhb0tYeNKRO9biLpthUv9KiwfYG+TCRor8dT2Qnd6ykiUGa2OKXVyP5abyXKQ1D5ockRlGXwVQrQc85Q8bWKZMnaMI6VhHJ55xrk06yhpIziGtUTYrWzyZqdYkjb3MpYUshsdRrBA2s8n7gmytJ1QEFi0tJjdtPn08QFZZSSGQNjUg4ZQBZx0Pn00avDW0r+c2RPoYmEYfhBvGCOM7FnUORaera3vbndqZxzeHwQQpbL4KD2S7GcaBm/5fofB3fxtZplgcih/IihwqVw4VEBxBJ/goI4TwixoHZx+2Ee+/qt4Y61bjGkGVhVKFHFv8YjzwA/tINL5+GbhKppDgVnuIbyiqy+9AQ58Lj3TA9ceIF8srIEfMerFXe5wwcnNIJOXzExPm9ZfxdR/LLePqxA3sudi4fW0ucJ64lFBlkC9u1lwq/ObPb6veJbYcDc5ODhO0lpUROKR2NW4lNra7I/cnx+uxIzpFJiX2gYvJPWcghtsmZ5iT7Y5hTVlIcivFF70kkQf4LoKOLpBg3qj+J1CkNXZnCGGRr1HAugp5JSfZgb+q5H57rt/+Zcf01EDY/3+Ynt8IhUNENy/blgbYijTRVVrKQXLXYewGIjQLWzYrS9YMZKVkfKYlRSmOIToE0nH4aL75bKV2v2gDw3UrpenRk4hHpOHmvwZXy/D1iqSdS4pG3eGiqlAwSCwABAqqsZCEL69ri8ohGrrzdVhth0SPhr3RZrtJWSnmCfBwMk0eUUIpkG068SrHaVAsAXiVbbVPC52Nzh5lsaykw0mOlVxspt3FNCg3rm9Mypvs+WNgmRSkHTo7eMtYV/UGRo67bzkVZRciEXQoi+EbGWtis/Ql4GGaLlF+mz/8r6HulTEZmDJ+aKRqev5qfGRsdVZLEudyoWTIyQR25XvVfKUNrTdmNUoZwjJRSD+qmtlFmpmjIoSDdIj/4K8AF+ucPQ3gF9WvGTf8y97B0/Ve+87lCa/l7DYhX9utcB8kCG1xZYGhZZPFDQLzB4TomzHGi4loHqxDUQMdmzkJOWqWp+C4iN5Qn/9nY3m5pfKrEbOl31BRsN3vpClnGH+Iyb7JbC6PvYcx0NSqy6qaKv3lb7DBRnkX+TvnvlW/Up6Dm1reTa7y138JXVvBdeMfgUUAeQtzf5ih36+5eNeGbQ8GgHASx5jNdHNtjEOGVD8UbXR6EfzvFDliPcCIDAdL+FX+hmdIDVnbHaCeh84bO86dI+fcLl3btqT2Yc6dryW5OOBLPI91s4d5KJbt1MqXoLnXjG09xzzffTrEvANgqZj/nfnS08vzJpqNNZnwNm5Z1IHOnbkRk2wFTuPcaolMjDB2Piu9cju81oFGxX+d0F9FwcTngooGD6N0Glan6IJUEVXDfpaFEjTyJ4FeWU3IrwluRHFSdte01b7wKkjbSE9VIZrEsUklmVM6rzlbZFsOMxyjhO6KbekVmZTUbFftjKnh1uV0rsXgl/DUICpdUzisk1bsHDrh+hGxkNZfsH43NliKI9fPSf5Xlcm2QdCSNO/En5C58lNKlMiMI3XVNQq7UVPqg3DKAX4Zl+3B4eKlG3JjNsGU79otWqQvTvf/Oa2NXukrT0q9QOFkh5IqQas2G9ozc8G5SQwlFVujwxXBJan8e1KA8ijxkwLVLQym+PRyixNuiDw/k8ufKIH1dt3S2g3M6RZEd9kiH5ynQBs7bQTVGOtkpxBXOA6ufsrc78w/VgpoeORDVXHQ4qnXJ6x2nl/THEtfTpIaq0lOhoxdDmtRyowZlJDRSlKMGDCkscUHh5LLnj/tjXc+xTaQvvegYsg8m7vUCUBa4jyuwb4dNlzI9jEq9Ut+DAzGXQxVqDhyQsjDmFHIuV5aLLrmRpxP7txs0DlNYLS6rkmlWYknYQ4sj45ziMNLhckA1wUckOB2kgtV7MMp56dH20bZRuJwcz0L5WtYBgwLR0kIgZUCfyitllS17qmAh6xa7S3mD16KczWb/1pYH58/JE3yEDs4ZclyGoSVbczwJ7yOpW1m7rKpYwzWVswIerVZFiJR/Q6cjZIuwr7cceClVYxLCBSpRuShx/a1hy2iHwZ9oe4bWoSOYSqSN70YJi2JctyYOe0Bd4vR5Ksw5ggbRO+qyhma1eQdDXU5VEpJGAQCtQqrFDITvuHf/Dd6rCTWRcNX0QFkXJP3iUk6IJy/33eWcOV31l8jUDRWEenfItXv2qylyObHImqKzKRqMjnNBfZPq9gig3v2hoyu1uP8v82eGLMz7dgg9xkUJITCAIFjt0ycECVZT9E9AYTb/vdK8HFcu8YGgqiqBqIgm7yJTztz8aFysYe9Tl0kX4VgZf7C36MzmtYsOTikZtm9IU+nmAGIvzyUEWWaT5UWtBvZyX0jBgHjy3tGmyNIQPQwMCfTxM9BZ7dNdBOmsHv8IqGw+hlwaoWx8ytIU1NxpRWvbmjQViw9SmCNHh57r9l3pYeLqg0NzDwjHHst5+x7dogeOmQu4SJvjfeiQd46wvvBoTrp20UcPtDwuTZkz+NC5XpbYXX1sLCe/+u2mbn5l7uCXoV6WvrV2eExLIUSRo6KsY6a42mdZx451BkKCRNqU6MDWID73hbiairvsvTBrgO1uTXYjWMKILOr9dT4cE46VnY91PtQTXbukcVbfpD1Dau/coyb8ilHh1/Qg9MXEn56VqF2M/Hn68N0nH9GvvVC4cu8XK4dMmNwnoPfeD4cvUBwuXsuricbj7/nooJhSNzm3LxthToZEnbjy0tePPNBj7KzUDd/6OBxDCeQ372tGfsIFVI8mS2yyfJp6KGrerBXl8x4032Qkb2IQipweMsP5lseERv5TuKbalr29ovp4WJp2zx/wkPUl3DXwzmk9uSPW88UZkVEPfXbLbtmEOgtimSnR/FCzoDNIX9Od8ZZ2/6o3c5J0x5b5cBCrEP/UYedwAikyoWLboUi4vlGZmkyyAWkXRAssVTBBvob4jAyKgOPRipoN2nK/8XZjhAC1qwmYf5p2fGIwaSc9fhxU9uDTmr6fc3hcDcKKZkCxUGN5oNPt3aiarlRdQuAcmBq/VCgik25hkhc4ikp5ESi4a9HUXAVfVWNB1ry3GbugY0CG8mYq3/us5uwOfUBYyZVZ+VOUZNOi5U2W4KfWmqnOArUOVMsFfDfUwGpejNolZ3Eglw27S7gc2kGxUzOWnMRu1MGXA3f+BJAfmGVcj4RMwoe7em7b/KtJag4fkknyARVqHvLlvJhHjPxUpZnqOk9FEpHTcUHiVW9QfUVO5fee2Fw1NJfvJNbU0qUFm3AsJe1Gxj0D1skt5uXIYrbjg67zDe2vbwipXC4iLenJr8YeTmxDz+/WV/nBX77x+POPSzSXwBzfuez4449ryZGEkjxP4RmfVZaQd0DHZVVoOrhX9LBuDDrWVebmhY0sL11ZmP5Bvbzye4CLlPDV323Coe14PlUKwx8vAH+PelfODx51eGZ9T3Z5546DibZnDX0+c0Q4f29412Rjn4Fzbu7d9sxnz3NRFn73xQsvhmtjFhx6NLywPZIjJdzjOFMA8kz8+2AmJeyO05qvaCqnc3FImg92lJz0SMuDnu7Fo8xskoTuIb9sbRb0lYsoiF9oeDK91aQHJTTNdyzv5v+Edsi0+Q8HUVAxwzRdZs2cRnGOPefAnjkDzOo3fnvnF/nRZiHYX3jCW61tzzYNmTn+tnZcjdA21D4dmDt0Yk4rukLb5sstNldQYMnJw03KKOjBhaR3o/piz5ATOBU6cFqj4FsAWlY5RoyIS2GTTzYlsOFzNZx8h3KaiXMYnCYiCj6elMDrmGgxgNEdiq05oJSSHXPYnJM1KJhwOTChSRPlJD+pIai7L11AD2QTRHq1oMoQGTWhO38m8PF/zJxtPjvgQsWghlbFk+mf1bU0V9U9Z6qqqjDVvdRiUjLRpGQ3O2wOjhXcH9HcEjFVbMjHU0Qb4G0uvfBX3NZLeZkQEvM/h2BJ3LeE+J7a5/1c5ZZGbQQJMbv5V1QRM2ZecqsflS6hJD5LgTOyWgKIi8ySW/wuRJZs/g2F0jaSyzBDToyfFd2Fvzo0h9omIwW6iU69wThHDY/FtCBd7OjQpJlDajKNGS5EvFrMZEFHP3PGgdbxsVVzqBYZJdBHMOojOIs6I6B5anogJT9Gau4LRytXqeUYGouM0lhVVR/g6AOM3Uc5Rm/58VfbkNG2hAI82NnurcU1RZQiD6QiIWqJRJIlJCFyO8iQtAmdTQ9lf5VPIuPOtZ3dPTl3G8Ngu9eMn0jJ+tqOQ2buXnLouiesvxiRfSU3TryTQ4mZtw3hyc+M28UcdcWL7fgk2sQR51l/kzNG5xuhvA8uDowuhTHNgQk5E59IGkOF4JRiG7ZUWDQ23PDG45taKgnCFhbLSJe2sAoujn2PkO8phHEU1OiiJNZuiKRYE6I2Wd/gSdTfGSEpgwV6faRUD01ZOgnyqFGSeUzncq5Gr2zBqhbb+HVZmZVxNDOomwaOPParI5FZjzId2SSP6RyBufPxNAq8LrEtxvVzSuHCw5gmLyuKPFIfYr0MPjlgw3THmHISsCEu49fVpj+97RmuvzsKZ/zpbs/QUK765VysEnSNBr4y0CAG3lDyWAmGOb+OkXZwgq47qlaTRHVDfl5GHOIw3bFIOXLi/Iu278/fHBH80XDJ4hZNFqkEuZNyaQDXHsihazRAOW+y2WoMrxIwLLjKUQUWQbty6bTYcRTURFlZC7Sd5DUBTfsVuVsuraYBurbKbDFHGeYYfkOwCcp9nakZjcEm2qQUjRYVRupOHYZ04jdXGz9wEC2zgwEsQD11mfTvsBb1T8jFAF1jXJZgpN11/xJbe70BHyRlIIORLB1X5IsjmeBP9dcbFUZ23+8wvPc5n/F2d4PHJRtmGouREzfdVdh/czn0OxdPoa5ePwfit4YwpCGmzqlQKa7H2nVRGCsB4RO33jgTOvu82WfW7Mnv/iKByITXINm2yiIQpF2tbQv/7L5s1mcvxZQnFab9jwqxlTlrDjX0Zztnzo0cOCGwde6mpZOLJHF+Ypw/WoFlk8EFOzBPHalKdvpEct8YP7plm8nyugdTYuOMe3J5XNvzQ1Vaa93A9Oo7Zo1/WV417MaPxzubDtSY2ExyNiclqmCPjq9V3Mvtl60u3Gr9tlWTu2yZpHpO6JGDaJjnmZFAm9ecklb75bfpl62cj76r2I5t8DRbC104iL9gvU58gkyK+uS6yMnF7DuzHblHfUMOFffHsi/Ea/vjbeX53b4/vxTO3h9pn657Z1jUqBk7Shef4sJdWJH9WIR2xLW7fy3ztbxw5tF4bVRh+iORRc07C6Q1DwhLRrufXcoB7JT9nCmcnWVjs9p8ooUyQZaVrZFLb/oeveR4OFkbVZS283nf0MOl/a1ajsrQGOANGGsAvM5VEwWySa2s16RzSCINAgjASqPSQWkUIozmSDPzM0lGpqDCrwMQlcG3j6jkBwBujq+5B3DZtLvaqjIXrWXxJclFkbr+Ew6cP7/vapFoeSK93cxfK1SVHRiauK1aDwaS3XPD8Q/WP8BY+GsTWGsPrmtuU9k2f7vh3IZDmzVssiNlz9DQnj2dk7u+9Pf9/nVS39UmWsgcOHnPmbO795w5vWf2hoGTZm8y3UGyzHm67RFpBMVtGNjMayb6ZfHpyyxnlb21R0voKnmBH/3kiMV85IiFz+C80bbY4QLwJeyqsLFKO2FbyKdU9yXVfb2D1nJ5KqsnrbwSK9l85WoV7eUvtKXsBH+hKWW0t4quCk4FStIIv0ZXZTNkzRpilUQ2JqyBvgXzk0IiC0NCqgPLpiVzds5Q2+mhodOnhnOSErNzkjlvNyhSll/yWsw4GX/ISpB745WZuJzgU66a2gb/oApF7RT1VHKdzztFiv/zXpaAn6a229R4jSKS2xQzba5xIKtopoiyvAZd06NSZZkQLxl4fwAOsy+h5HYk85CvuamNJ2S7IZzL2xU/TU5EUuxsK1J+uv906GiuhfmuDcdj3g2nLonwh+ya6f/968T+q94dObJnz8ZJfzG8507RW9p9fJnYdCpUFxri7f3B9fGF27fHxu7oY7NHjsQPaJK7Ey/xNkZvOceeFy8FiztDFhKy6wmqlxqk07hht6d1uTToolNbwJd2D9W4WJpyDW3WFkfvD/xIp0AEalMHyAWO2eBH5zHP51dmuN7I9YQ67d6Rk2WvLOI5OYlTZ+oSUkHlPcY6mYXGw34WSid+YW9iL91vOVWj60v6kcvl0+2mFtniFL4jdxlyscegmV0qM0U3bS01ZqNehJNy+aHFRcUo1qjYyTWplbw9vMrLjnBn1e6xBK7nGNiuvm6trxyTl3g22Gwe4+TWVDIOyfF6o0EHL7PSnJl38Maw5pMab+3oz+SG5aq8LYPCztLnhTa8ZM99Gn+x2kw0JGkCVh9djTgSVVE/+rUHPyIrigrOsYVukS3SkgpkQ1ECVQ26j35QHdS26iwLlylKzuZD6SOj28620wD+X3aGZrmBdTRj4yNjpKJxDoXe5KFUnM9112KkIgceklCSWKaDs77YiJBKmjfWien5wWCpARzOoMtL0HzMUgNOhZCh77GRiotAzOjRMUv1kFNQb5xK9S6HKoHQibGRimRLZd6+iFjdrh1qwZwenB97dGnMUgP0/E+S05Dyliz/kMQf1r/FKPVDddCxB/8GS13NKqFKrFz9j6rV/5Sf5NnS6+H1LkBIZpy4iVWrwThzXffEhx5OXFz5NdTSkBbWWXdzcSl7Zp6r3P7d2u7cc6FKLXaWWNxWdTU1ptfaXl3JMuE1U1xk1pojNogoiLdcVJNOSSRekyJEHYsznixBtSV6HuB62kV7G7e/24NmLmVAOHTsMpOUjpE9FxSWZMCp/mpluny6aG9Ds7KguLqtC9zVosDA1NKxR7OyinY0xgVXuW7MwMz5i1aeNfeHr9l8dfjQfqw2aeb+Gj74oaHc6nHp+SWdEksq6jdp0a5MhchApgUjkAFM+U/ln8r/KEblHeVjpb8yRAlRpsFMWARLYQVsgE2w9faae94H++Eo5IIVyuES1MGdnG0H2kwW3/s7rC8bxEaycXg2/qx2g7hF3C5+J6aWF3NA/ON6jR+M8ztuLdonsNqujn9C5WvL1LcV3pTxqA1IINuWuxjL6Qkx1wMi6XmwXgpXDcR0em12HOp+h1lDxqOlq/MISVadgRFWKZe+f6vHqEl31HAyHhY25FkqfZEjjJtaif/LFC6A/YZbTFYmgMw1gXUKU+lpUOeL6v6h3sz0u1mkm+K9Sftv7T3xfHsQbgaUh4IMz48G1V1LEL+d9LZTZeq7GlPXVVaayusr7S31tbgTTfxjJYghBd8GP+isoL5tYFR7eeHE5tkp1kMF0p/5QkbL0Ilh3YVdRZliMIdwwN1X4/8KtgwidwWEDCFU8A8VZLhjY9dnOTKVxsXAyOh1wZGuh0EYD8y+x/o7cU4QbjAEhLPec+eypMld55Z8bgQ0+AFwJuYEV4VnFoiuZCMDBfk+vDwfPdG2ufGWjrcskZqY0hjqFkw/8NRQ/3cIYpcZU/FC2bF8P30hPRH0wrFji2ROXLBPLaYMvXbi9MLlIKRwx4Qx6Ti3fyw0PR168l4jI2w+AksYtzpckzFWAIvWQASIdMmlg/53tshkxg8V9lRpl9FpfRMOR99cVZExTZ9mjOIcD745kaP7B/Jz4CfTMlxfXg8cEGP5DR0DY9pLC6YeCYlICc9oPzRmldgEmMgYxuS9XWU07V0c3s9t3UJj6gOltxqPAldLWBGx2TTG1cK+3nGHsTct3ZiXlt6XN87Z8EnAuqvlYGUqAMyUOSbkjh9KnHnrHwGmUgqfY2wfa69ta63lSX1jtgkdUz/SFiA6CboTWXz1GauZGtrINub+05Bam6wjo+s/Iv057TGOLM7ekEZrqi6qJlxHYqEKV1+Ch8ji3hwrOmu8F3MBgyQSgkOZlD0qZM+zkA/VDtlnm046vaZlE8Ki5F3lIUbyJRN02FfrkPeCE5HEIxPCU/LNzV0cNYKp0le9ZoX+2oAsEbqv85rFyW1WAEs5DIw86DZ5m4vdBwCg+1xH26iUO7OURWYaE57iDOmwgwBpbuABnhdTaoqQ6fxRihp3zthYIvrAah5DqhJG2dT/gUFAihvwmnX4ZF881TeQqcelzKWzWXDI0TK9vr7Fno/rTPXAtqHwZHQj14cW0wdIIdv02sUNhpOSznCi2Ozp5Vebe2CQhmR4WPNQMpdMFcXKErp3PNhjAQRxxKqPiHE+sssMpcuRV5qOANOtKFJWXX6qWR1HSvslOk3P2ReD5tNzPZBDuXKu/kR7LsdpPGenDE1J0VoCh/cD3FB3A1eHKiy9l6NHXEmdDJOGxS76n+0szOKkEssbijtt0spqa3GBlrrFkqLCbGlq3Mf+lycnvSb0CrOIy5yGSc/5fk/BctGi3cQqquMZ+VAq+hJWy8gblTF14X7UchKBFVBY1838ma2xqrRi9oPAVkKKRUyUc+LM+svfgtyC9cuBAnxmCJsoZxdenHFZ7peU/qlXQsFBV39IzgfFgSwrwd6X3NjpyNl3H/MF/uj7wPkOupl6mb8zE5nTOb5ikuqAaMlxUuhvjLgUTSwRK4WZsEPTkk89cLWaDwFqkdcl6gidRIPbFqK4dIpyt1OceR38+2lg6eDjxOkGGDOYJcZ6Vx7jVumZ44dnAFQNZt7CKxOMcMOCATe8KdJ9ElwoCaR/JLfb7FVdvdUovqgqvp2KOcPqyEvBnhDo9s1zYMwEAWY3nDs3sVvt9NOZeqKxsa3d0lBaYrGWlApsncOV9oeP1auBrjp7NkozsYjUSU9N8YTbXqyPiEhNjeRsPhzLqZMswFzr/dj3oE+KcnSXVSNze07s67qGZ1p1LPHwS68d5cxF4HFRf6v5AJyXzYgQiiNDTj4grr0Trj677upcHhLsd5GxL5EHPLpw9UlNxSr9sHTKIVzQ7+0PmZH1bxxDMFl3zFLggWoapCaKrbf/2oRSCbZngs/ALYxrv6F4taSzlKkjZjrU/J2V8pqqLZryFspt/SqANkHkFuZagNkRvehTlt85jVtO8d4mI30Av2Es81YvBOYBnM+QHXd3q7C9IeipWA98uE6VV7jcuxynMF1Eh+R0/YTHxPAnlthwf53pkJkkH+FzioT7aya0Xgconf1SncudE72gSyIZb/EfvQqboi4pTO6I1PUJDXn73YYJfz1s6Zzq4AwwnyLt62BjJ9saisP+5G/7/v5YqBEpLebVsctuw60nfkAX4bkdALax0lTeUCkOnJC+08CZKjzXXRKLG9rbLI26peeNVmC8kJzgKAakAYh628d08rGV4Cxk30MAt8JhqSF7HvLQYOTegWVxYxTUM490uhdjjfvYDg5Xym5xd6jPhkXfR6gO92/q2kmBDMlQDht6TmrM2GowH4Kgy6jgG2XGbWJKEbDC3wG3Dwj1QaC4ETL10zDXO/WAXKyCpjm7tnH7+GJyB3OBYLokzFd/7x9LjW3CGjdPeS8zydizrIkQYS7zOHNtrzGA2E2p7AZv+mR8sZgrtFt8yS2Mp8DNbsm50sZ2UQmLZqwBeX05sEDUNBgnRX8htTctUZj03OSej9PvOEdCuN9Zfab2D6fbMAb6vT3l7rfI5pKx64icpjGgdBPGcV6ykzhd9D1wnwVFk9sfT4wYfTFJDarYeFLGfJgwuO9u8Ui/bpb0u9rDylXY2e4rc925n+aKPpudJ12lziBWqQMCwAMAkAxjYE2QFiMho52DnNcF+dFdUIp4UNoqoYY1HJ4ACwAtdNEIGLHQSeFFLxleygwQBIDRvs/hl7xs/3wh+MwH3bBQIQFATw8BYJjwQb/wXTmA8BfzcwDJLz49B5Dzan4LoOK1R/sAWt50dABg6FtaZqTYxLfE7KXn8KxFuExjRArjkYnAJxdJwEwsQuaiiFiITcxSNAlFOIeUkurT33FY7A04ylmucIcnvKGTrum/vzlS6hOFABkq7NHiRyixBf1n254siqiiif4MZzzTmfdvlgHAANCzk79DoNUkFvgSioCClp9QsTAaKbzQtdwVioZT9+JxrR/yX+ogzb4iRR894Sdd6YmfaVTxZ/2wu+1/AHrO0ynfldCKlq5BbwMNN9ZkM83z1tlvvfPRF99+/yMPEXWjbB9wsC/7iMWLGkfOa0fclBlKXXPbQ5ieEw/uVT3AS0mtKwhS3eKM4LLPzzow91NA5Ga004J4IJ4FXWNxtsKae9iy3ATjORakK3ATAuuSloiDTdKKZeABI1uSIUxHn/Dc8v/VLnx/T58YMlJVGcTllo0Xy7SiyunlPPG6ndiAJNKhJMFPwloRhNkVLNdIg3o9CKUzXKSXi5y+EJcQkCNfuKr0Cmj+iJxUeko9olgZwDWCsVFM+4e8jeNlslB8ic00KaHft8yKrj+p+UEbe8HNVUqbF4lMkvxYpChuQy8xhXFRCgMbsf5t5DU8+dJTBxoDavwIwCOCE0PbkS/ED34COrkYqgl37eE1V6X4MfCkriy9DHRuG8K3aGl9UHvtvxRL1tuIWPIf8eCdqdLZAdjAsMo9VPOoIEP0CJZHVYVDJSMxWKqGoVFlJIfwKhaqJH8Fl57iU/BF502ni8V5TSKrCyeO2fTgqWcil6AScXK6vOHq7nCQPiFVlQ5XrmIEQuhm1nUd5Wr6ekHEoENU6MDLk4aciVAgOiKeCg2zcW2vta1gvEFZ9bQy3Upnqwuq20MOu5jquuruEKy5Cxj6YhMRACcovMZQ4pkeRgz9MAI7+8nOqdtk5ozWti4XNKzHSddXinH1LgSwUcTNdYiEvUl+BQTWWIH2AnWwj2ASE8kPKZYyA5KLKMv0Uql/IKoPpRA36O9rteklzVLUubVosVXfTqF8+ID2BShPf1lQeOK43+ej4dH/pF6IPQKpoHGZHNvlfopDqeZGodCNKdoy52Xw8Omi0lEoSefdImsQdcIbuq/DyYgJWntsTWUI6VAmTcrbaE38i8jNrq5sNbMK19qbr38Mpmcfc9+qtCyTBOmoWYrWN1XwMj7aPITIkXBnk6eVsxPeNhWpxAvHgRaRHiG2jcD43yxI2elEJvVYQWFRp9+EViOAgsQTRSrmRdQgtI+5ZfF7MMd+rMUqQ8vCsbqM1KyqQIXi4IR9kSi7MSlS4xTI26sbi51SUDwEhc9jlVcJ7ObsMaMFKZVoFnlPKlFRW6JdCHL6vEUSGFFPr5fTqPjGBDiiQyMHJNgPRJ37ekl9Wjxq4oySpxbubNQKKRV3Wh8j4rteXyMTSc6X5eCI9I/ddNl9w6ttJaRxTVAb2dMO2YfFDY+KxOedCUE+SIl6amyr9FV3x9TbTb8/1cr0kGhUmX41FOHBDzyzNHsAIATDiLIJ/9ZWj9ALdoW0fLYEYxSscnTIWBzIY0qTJUEBYhih8O3qw0lrpM/6u7PoTBhNjhTplBTLlkov9HsaeQBLI8BWnpBaw5oT7DtF9S/iG831LEYlqiqRhCLd+pA6HuSqkrqcMCP+1mU1eJ0wZQXWOO046RC5YJQG5TiJQyY/W0An0vEssYLbouzMRV1+2luYFPFdrOfVKFofuMypXVYyZiNIgzeFTTObQv3HwWMpfZAoiJqiMXLq/J2NouuXcCtuNRjceuJDlMETllQn1Rgso9SfCb2IKWd5qF57pluN/Hi+cOuOGmk3TcVajTyCnUjBGXpXrata9PMs0XXnPmwcIXviEORJvMykoZJILyu51ZOxzeeJ+pYJvoT5wxdEpL2koOvjNGnTdTYdm8wapspR1gxzZ8+TQWVUF60TphpEEUgmVw/bRprKwpo887Y95XiXqPrBSGseiM+QppTisCzbkSqLhSwQXEFal81n6P5P+v3oUhTRapU+REoUMzWRZT86GaSSDTQWsVYQ7cj1qO1KcGYoZSsa9fI40qlA62GsuGi8wwqYJGyZuSVHEmPZOc01eHk4WHT9rWOVZdp2GAfls8dsSnErT10PLVWS3hSsCu7QdkRjWsL41XCY5FalI2bXNI4RUljilqYOzcYig+008JDay0qLFiAtfIxMQJ1OT6J4tpiBD2CdctT0tcMEwlYgGy7NF2J+61AYIT1FepFFY4rcGAVec//EVJBBoiP4J5cqWBv/t45NVdBoJOGFyu/bcM4cxLGlpvFclenUFBstWh99N6iiggwejNJsI0F+gILqj5WscK0NrWOoToqLSjt/rdSsjGBHWOiNw11APU56bHNeEMwfhXJzGipGastuukVq5wffiRBovv1p7RopC5ZNu5LW7gAyYZeeCdAV26RUJ9pHMiDOSIoDQk616vQMJrf192rKs7XQGLoIkU2kjJqnkdbDUu4Lp0RNpl4WRz28djwHazw5jldVOGHlpF6guuUhlpYD8z7qRGXMqRNT9N0W9ksp9SvV6I6Z/VjytQQBJVrLQqurPBXFqGGDxsn2OpI3McNLs3mkeS0r2jAFOnWPHwH+jXztHAmFD4K36cRRhG4uaaOpRXPwASEmadZhbS+px2nSdUDUDEE9U3T4lVDMvJ6zL8/Lm5RaadbefJJW4R4mYRQmLVvQuHBxQ6DmUHREEGtKTl+IDJ2CjxXwEuvPR9Xc6+avo6rsJsMzOTdDOL6OolHo5B0in/oomvr2pk6tR8n+ZU8JjY22Taj7jakQaYrMzexozPeYWmC1sJA/yKmLPXwud6gBDC0bDH+j0mQHX7LcV5UqSiJZ3xYCdp1O8LrO05ema0u/yyRO3GUnFB2eHG5oCPjDhxkwfbZAHWuuK8vVrTNWuDpUOaPmSnz7EblC3LmGKTCmiitAqhC5bKMW9RMvm8qx97cWpFedq9l7ENvNPhS6KwrKwF3ZZLBVgbj+PZDIHCAAEqkbpLZs2fTYTMuOrVoeIdFBRAQtx+hYsXN8p1Ts84rI6Wg7VrM/G5XopOwVYO3oxM4mNZ0WLPZTK14rCabxUtbcp2sEVdiZX80x4kkU08WLhAfyJiCq9sLFanvW9Vdxsz29fEnvcshlzdnKa+t7qjcfjFUOFmpkXIwi+slk8dd3EVarkaGNFPG5TCW1+jhnk5mmtXqSS43DlSyPX1/wla/Yr7Lyov6dmPZOBuwZjkOml2ocwGwbcKSRaM1WQCTVggRP6iZ2qJRAtD03UTxpI5+Ccnzkbs8eeTP2Q6kjAOZDnWGgC5tcPX4M41yeO0FDH6Vmo2FBWH4rQTH57h6Av3j/s8SG4myYWu607E3noujANyL20hIAUITu3CLo5OHeul4wy5Amt8VxNgqX9sZi523VcVd76QF9kaim4PrzjbC9uuEMG3fDZHatYrQU5yGTmiOXll4ch0MGn4mvVyUw+cFJ8fdXpZ9HUITrl1yvgpoAdQcKk5r6/EWrt4NqLmAnf47h/oH14G5pUrfT0gOp6+0aBfZp2mFL9PT9tiLs3bGPXb3htjCy/XBnjvoa6OWlvVx34cEl2c6PO8z2wU/uOZ3C6wLC4yvwdaVBhGjplL1emcQjMZK62vOjxMz3Dboo+WOkSZAgSYPUNC0vXQmvtC0j/1LCByRKNeYek+m+xjU27FSvQ6ZG4F8mymIVpkFg6SgBXpr5/FTXQka2PjKjQecAU47go84+2YR1ktlC4UKixaWavSN3AQTogU6IV+XmGPeZ1qA2DTi9MaZXbKqWpJWuXDVXwuttQ26olX1UoIxpOTFdrgP7EHmswaPXZq1qlYJ0eTC7ECFxGrSp5wpU7BR6OKBXd01btos+kMzqAuqTtpcRwPVgkmB1R7pDp7YGq7KltVWGAaBGiSGuUd35jgY9W1prDu/Y0rmEg+ReQ0LbgMg6wVb/TEkrEQUrDKsrJpbJomCS776eDLh8z+U2VAfxIcjUyHcZ15qQkyWu4Za8O4pF4vBfL+fo7lqtiINC17AHRo+muH/DeNKJIUUPKqAOWqB/diiMhokwHeaoRanqCgDJgHSZg9klqqDrDngV3B3LodGnf+64r4WnAUbbpVCrCag6bvSfTMBjB3zUO6ayxsJTRw7fj3EQgQwUVWvk/eqgHAFa8IEgCFexqWoyEPwL4L8G3oHuRwJxv3TIgaIl7OKK+t1Pcj/j+9EBQAQ2NofZ4Sxx+SI2/AklGjqJSs/7L3ia+zuFWrQSLQ0IUAFlNQlAjdbeHn51m3QYtNJHAnANg7A9kLrcfS/Unj3Rr4F6GDaEkAfaMzDzJgen86MSfZ8+kebIivzZ6j37MXQ7NUQTxpmhcRGWP3eFfUTeHpi6H45YgF3OMOX2nBeBcmppplP9Nupg+DRYYA2w3uYt9gPo1K71yGf7uRGM/0QnwV0icd+ryClJE3qX3JCeXEKLdUKrPKWgSdxkXTnlmpC+mbo4ZC3Bj2DqOKCX6PsgdGcwIvQadL0DiH+XGHnKeADxFJBFPiWh8ijrvZWk7vuDg+MV22y1tDD63jb8vWdHR+W512357PS19fvaghyYAX9xSc8DQdQ9wGjsxwv3GJJ0ebgq0L5ruOZrGxNn4Il/DO21OEwpukzkIA2IQwGALdVqzO2uXhv2yQgwViJ8+UEzApM9GJJL7nnle/xbC/UT2GM+KsJBKpAvivZfeW9Rj6/F3Kt4LPzDYmioNKXLxjSLrKOwq+PHgaNwKNbAyrBciihXbdlMolad1r95WqNa0NqvW3qrg5Sfwq790evz7Vz9LNAH5fw/pLY2esQd1NQwMe81UzroK9b36RNujizIE3Fvsiijif5hpljL0dyPD7avIj0+1Uq5MzODdWc5nxIqqaeVbg2W47zMVkvvk9jwQeh93mE/iujcbvWsr33Xb2f5d64F0wX8ZkhJwk+Zi6HezN7P9hv93kyyex1HHtWg3YyhP9fcv4+p7ZhfiqeK4hz/COX8j7W10QPuqYmNokh5LaEp6BXdL5rgid7TMgP3E4GMQLW4HCD3u1UPeuaNEdpDbzOkJA2X434y6Q3mKx64EOWeH3iQfgm7/+v3vOavrw8V7Eh4AX8f+cDIvTnmLyhY+MSBNntYDiq0mGbxnUzWw+7pwHFpB04Od2IBk0GuiqxctX22BJrppJ9RprVga7xliwOd+jX98eN9vp+I/+ui78FNYDQQN0rJVpce1or7fSA4EUeWZVeOoIn+YaZYy/Gue30bHJNIEB9T1m6rbpbyyxIOKr0etNJNMIMaz7OlvUSN16AHfp3f4PfCn3x01f5PcDEL96DY1TcJv/NDrqoOUg/Z4YRo+3ZilQN/7RjI23lcbc0/ZdNpoDwDEsU4XXnXtWoOTH+UnfGwRt8P2jfWZY6yRrHuLYyxUJdJWuiPJRe3s/j7TWCzuISacXH+grfbjch73hTUuvrpIDHGOxaXzsu3PXQ0o0OX4gQxLd5Hk1Do0DWdv6WzBg+bmU9B1D5agJtmufbazvn0q6zdwOyxGxMLkmbU2LzcG1syNgNPQyD1CYwtB8GXUWmaiz6qKyuWooLaS0mQopRKcXC3UovizQ6in0K/sgAig2M6lqZv6+fmM6HfnLFuPGURqG/2rpTjrLEtHN7l7AjTvmfEmK0qkKfHr7WBha4rd24CeZtka1wAgAArWcXwwkvVefLy8q4rad9WXRRzF4CLiklygbR56RJUDCeAudAATm5/pTjJKYNCf0hYCvuOgFlH4Wnw9CvGyH6ojJyQtuaj4Og9461xLQHBPTAAIrb6nbKHCD/yAaK80mKkaTwyzZsxFU56WGNW9a/Fo9Z4uSqMp/RPo/U09NufiJhssKOtRLSUZlQOaVHADTuwvgWVdZnlSACYDm8NBlGSFgXjCLu0mHUqqQeDi0swHZ42mBeJkqdJZL2STIFW1/eP1qMNw21XUlyyKYNoBjbBBO84Xd0cBFG121wANRlSs6Y6xkPrVFB2m1bjWcP2BW/O4HR1s4az9RhU1tnKWxprImKKxA6tTLc1QXBkQAaHtMjZgdanxlmfRR+XAnEbaNK+XrjWnjfuduvKyrPR2041krwVqIuq1rT+9nW8A0E0r0CoySsQChoYgTvaVT/p+bSf0FSXR7V03VVYgr6eDchWApTUhm64RrnuRpDrY3Z+fAEIKg58VVcz+dVZnj8Hfiw9bclz9Zb976XjuZ6LwNcQykWsis9QcaVyGTMuCYmTctF1LSukg4ucFYALiqLo7Y2xd32/+KPAlBqFoQQIKqkoiuKdt04N7nR18xtEXnF/5zfKWLTnEjB+YWIBYpGkBEUZncvHiTIQJSVuDIkSdUAiI0gkkUQSi/t5XphYdJdUynFPEk0ZRBX8yry0DUhbC1rcvR3Qzt9s9zbc5sT6iT4hf/BYIC7B/4UKgC2SgjVH2smrJubrg+l64v7qi+eNnODq8AgFq8cSWJP1/TIYwMhr469PtVZbYMtsTW5K/d3G3FCjTSSfbs6fi6ywzhb5eaf9v232gfk1d/4Xj7zQoXMKrHzzVk4b87W7qYLAqdoAztS9K90b6d6BYA1pdwB8uGXT0M25W35gbaBPcoejW0q31d2a7kPSzva0769x7LQn3lD27fTU24XGdwVmsBCLJ4RRIzEN0MR8YCV/pDizGgtv7rMjmG5iIpig8xUA+t2quD2OIWmBDKYtGmQtGeT9bjDrzx8B897ls+h/PHAdcQY8RpoRr9HH4Dvz81L8YWSjDw/QNzsAtaOzOO1qajsQGgcwPswfQAgG+klk5C+HRSn6zYhWYrsYl1w211dfzdftpwXBEYLFAYiBJYWXaekc5mAVjK3NRQBXfKHwTZcIv7oAosOIA0lxkUFGxoZbACHH6cl3OTGEaUQjG6tWULgH5jinOcPwfQMAiQGrARCI+wgAiH2fgQ56oz5cP93xpTtSOft8vLEAQJLC0ef6KykFyaYeREzPuGKlK8KRZAAeywBilAHk2AawRjNgxoC72wNnPMyH1hHCAN5EBs7EAb4MgH2OLWTCQC24DI0Eh1ZhNcYM7MYauI0zcBpvYJpgoJpoIJtkoJtsQE15GLjzpRBdPlY552vdWVDn5WMDEO9WIkD/MgxgMSGej+P8sSrUUbEeih9y7oTB9ecRyO0AINYuJlhYvlVaRBLMpyuPCInJSBFE+CQwNt5GThfLMO9NhdMVMlj03GDaCwPT9Ydh0kgFVLePQd6EwaxJA+qewaJpa8pmqjqPYTBLbUA9M9C9sAp7VZ29qcE6arL3tW//Xx1UH3Efgj5loMZT4fQdBm5dBl7dlmI/cp2fMJD9MrD6bYH9yT+nB13GAOsbwohhjLn+uxooFGqicCO7h7nZNywYjbhjEXM+wc45b7D9lzUwMRUpM2qe/KklSiJXoplab72pDTaSxmgTIPMshi2xBGGp1UhrbMCy0XZqbY5QOOoYByc8pPDOO34hEBf8ApElRbTiH32tzhhZ9H+wjMchQQ4+x9SZhDY3x3HPv3geBWTwxYheBBZT2eL6rGopym/oYisHmJ7kKScSpkxYbncmZXFq2zFa8a3vgLe0titTOnbsT20aswOMqIgJohz7eTrmqi2OACVAgAABAgSw4chm/0psNPZ92mIPMNJi0djRNscqa4Pjeuo0HB2AiyMizMcRJpMlGzZz3GXSAcb44kg0G/s79ZqdHzA7OT5Vz3HOGCucvJY7El6IESQeEmD4F+X8K5cFS6YU1Lg0rMhZc0fw4IEUadzTbKJeJBJLoq2UZCnY9INmGJTUQUsbHOmDljEYmUPGOGg5g1K0VaZEE67mQWgZPL0SqeBTrj4G4WvhTGCUhRTxqdBEc4l1QULKhGms05WcjIyMjHzi1luT2ffnqu89DzU8+Y8ACYtKXyDJirFode5Hi15LzTBfBF8kFooDNrewhknPLByn/JV8JvUIm/gee0nolbf9vQ7krfAXnt7rUkuLL3z86iJbNM+T9I1XtGjKJ+X5xKJ3weehfwpKKmoqGhakKW8t6sMsmYDJvkMXjlUObDoS65QvuyyfJkr3DMZaZ3LlrHCmKI21VmByJlhbW1tbW2uda2WzxWzRWGmsTBorTSs9a7XaJiVreY5ummncnfzfjr3zXvT+J8qnNKzPRvT5C+eLL5vxzXeLlGgkvGA//FzGr79v/vsf49//rP99OHLNhhV8eq3eJ+URilj7q1Jti+JSSqqpeO6qu2GfaYIFaqFpdfo6iZ2F3vSpPd3xXdsrS3tDmWVNtlJjKx02KLCV9loprQONOXTk2A0rjc6Wxqyy1Ya6bNhsS1c1irJV07SuRUuCU1EputJpnJpZZ9v3rZ24tNu5imxrJW2Tfig7mHWtRyY7mNUjhmEYhsH2sJbjOV6tUCtYtUKtwBiz2EhbZZUzjdFZm6ankpPqUGyUVktrH7bW/gWmvr3RacVKyYlcXmCLki5vFkVVKaeSkFRqlV5ZlFBOJGV5NAqjof1XLe12czqapuj96+2tYbsu6+nXocV6CM1nlcXMCxZRKYgW2YZKrTFqTLKo5ko6KEm8JLWSgH5INntjXf8d0F7IAm0nhBQtvWujU0iq6ZFkK9d4qdmbplnTYDut3Tx57cqaUjttGUWDRZhNrFHb/jnLKFW4yhzURVuwp2vTENRFK9DZtG3btm3btkW9WKV5XuBvTsq8wBfULopFnRdHFvOc7kFs60cwASsGRPgIq/kVQnKy4Uirbn5HIuv85J/7Pxl6MsFk1qlSIryE04MqKbv5eGI0r6Av9v7E63gjh2uU4hXTmdX98mNwu+J1ghmSOq365XzhjKCCwd2L14kWog1GC6rlypthFYObGa+T7ChrsnpYrzcBRDUM7m28DjhxAeGMqNnuohXXMbjV8TrZTYoob8bt7iHBpIHBnY/XKV6+hAlW0u2fsp02MbgR8jMqTMu4aKf94aU4WWvH+1H7fggGP58kRZoMWXLkKbAjPznVRiKkgYACVGvUrncd/oxXmASzAg5hD9Kl+379zGIb3zH+TqLCRogcLWacv/z/R0yTouRpMmbLXaBoKWvuN7YJqNaoXa9hk2BWGv7udpsI2IN06d6r7/3305NtoQI2QuRoMePET3SVDvrPlCJNhiw58hQoUmJnvAnpVL4Sleq16jZo3Oy61CdyacN7O46cu/Xs6/j9baBPGbefYgI+UtQYseMlTDLkU/SpKm2GzNly5slfaESn2NNEaSCgANUateuN4RR/OglmBRzCHqRL9/GaEk+/j7/zGSpshMjRYsbZ/J8GbndRkKZInS5jluy5Xt5XCRQuFliGXEXK1b6t+Z7WU9VQQoSowjWcD7E/fi8vcgoROQTyKVFD/wvGJ3ieQsQooO6bY0puLFRkeoCBnOc/P32N5ZSez/7yhtqUEU/ccyPupMkZdsU5/VTaNFA4HPI0PQftttVGpQqtkik50lN2EkUL5U9KzJndsLlBFauCbTrJcpbi8xl/VAcaaaKZ9quzwgY7HXbaJbc88sr/vvnTJYiHTKJCANCGIwCgY48CgD3SCQFg+9FlyCRKzNUBSU4gIcZRwWE2KBuQ9cv42HnKg2lcm1ekFl8e8iNbJps00NkFahOyW9Q2ZNuyOzO7w33i7V3n6CHD8zAQkmYSpTz5437rgo8A/4Olfl8GSCOMj5sQ3p9nFe0XdtG/6Z16B7zgrBW8Fw1/oFNmKfZgxeyDKtoljNHZgB3nyA5Ssd1M2P4LKTc8Sbi7E53gYgDm0DZ4HQzPbtAtoCG3rIymEaIvR+t1iHjofMwcT9ZU5OLVVa1GJ9Z4y59Tb9VOS88ownAYY5uJoY1l+24xCq9hsI6+hv2B1mItQACtKqIH4/WBn37AV7+d+kB4dYyNsNEmm22x1Tbb29r3n2Rs2eWUW175FVRYUcWVVFpZ5VVUWVXV1VTrY9+O6BdUfvU11FhTzbXUq971qW/96t+ABjaowQ1p6Jsb8bc2MoM/rLB7sbyPW+LxqFaXedeMA+FGZEQ2tRO1dUwUTqsvZccLp9dfe3WFMzpZR/WFMztVZw2FszpdV42FrZ1JVVPh7M7WXXPhnM7VU8tB53a+3lrhdjcP0d0tqAvw/TARKWPi3vBnBqz/1RVvQ24l+LEMDXCDuq/HMc5SllJ7/TIh3sZhxsXJ/gfqCDr+YIFzEL2laqM7AJIdd3razVbUCziZVyuN8DaHh6wkXoxkWye+m5KTDyugTMxbJ7n88xSSU+rk1Qvm76bZZruP2HHrQRA5/7GXuK0ROD+qOL5NQZC8DoJ4hJQQow1jHONixo49E3KS2Sapog50AzRxDFbZB6zLkE0J8myT/K4MGsO7XlHENuOeMT2tLrb/qCy5iZKUjHwGJEQZe0CZaUBobdhDQtsQ4naI6f1xyV6VtOWhiYXnioXe5MUDSAp/C0DvY5sQwE/LD2L/lIyvvjpchNP8L76Y12OL9pPqnccDzAYA6M6OA9AgPIGTJkEIjLzLo8YFRqKYrd7/fIfbnSj/htfas6TkrN09h4k2uPujziUETfAIISE55sf6uJzBx/LpT+Emn3IaGcdslrGSAxzhMiKmyqv5b0exXN09vWxxkGvc4BZ3uMcDkaXySV6KUpxJmZ2FJamnSqpyW7p1/V7UA9DwEGSFvbkWWGt3atROz99LFQ68N+JcQNyVYEDMLI/TgXj0J3ORRxkNjKT1TK1gP/2hLlDHUEmNcHBW6MdH9nW16y95Y0z+BTMzDyrO/f67bdCbvLz6AC/67+eu764Sv7seneTFEE3G/jvjy4ae/2lc/ZGf/YPPP3M/v1DE5Un+IN+DX5YpbpGTuf4CePZx9phdZJ0LAOBZzO++ugzw4HsPpC+rhCwAsDtx2avaWID/ZuG5gBjBEPEAAOAXol13sk5etJhibzqZTk7+zU/BKTo1gPjEqTsNp+n0Pf3PQEB84ww9I0H2wq95/TMY6T29xQP9oVBXCirtcmw1u/4zgmpxN/Uo4mTlTWJ5d77rVakXTnjDXDVnzSNZgOBHSqaXJVuJlgN9+C9e+2nPM98SS61psUr1PdCnvavNcSecc8Ujj73Sodsvf7p4NuIXLZIR/0oIckxaVPEllNrzvd5vu28IdHWXYtHQWDyXCRcz77b0c/f3fq8sbX6j1t/Jxc+zkX3W5rb2q1iXGuglBoEiRBMQkXFhw56jGKHCRVIoVq1UuSaVM9FghkmmmGaZXrnZb4fdjtjrsKNOu+uqG2757L3/dWrvaiSNgITIIv2RMm5FTolU8u9KZcF4DiLtxHeIiZPkzjBzlqlTlM5TucDNfbaucXKb1gN2rvP1nLen/L3k54UgbwR6LUGXON+E+U+876K8E+KrJD+l+C3VX+l64BX/ZARgDENuLMiPDXlRUBgH6pIpSwA1mWjOUt80+metX1aG5GB4zoblZGiOxmVvbHbGZGtuEq15mJyzOXmZmdjsPC3M1/KCrLC2COuLsq5IlqxcZpAZghxFMcCyi49n6pOzoHGJlyfEjmnMHNseXAc4uMnVPRE+iPVFRSK1mRqQjUHZmZqLWbkbkYvxCa0qdAXLWuFKV7TchS9i0YtfwmIXNo/5LXIx1C7SeasgGgZma2Q8E3KwOD8L8rEomQ1F49jH2R3uHor2SVUS03OzshCrC6s7933Lfq335twa3TVYgE621XZnuzqbsWc563FnMatxZjoKBACBP//4LZPiLvjf6YuJDgDw8A9irgUAePPZeceAzpaRxHgABAwyZxG/fucYsJ4x0mLnvRvnrzj+cN8URgLgX2Z57D97rsfPe3vk7hPPSz/IvYunpaQQdhjeXuBNMYPm/n4dDc++vZar1GC5PuoLnTR0XT1QYVqTe+nDq0npwoA/XWqGChevQq6mCs5pL9PAIVI6MJOTqL0t32ahhR89Z7F3vHhCOz9jmXJXzGcpyG7LvX2JnD7+LYxLo3nnXxX3sR5nedMBzRds91itnfCtVnF7v44jzw/6jnPvPwvsLHxDw5JpgTlyjenPMD+8HfIf9BXQfsGqZD97WlbIoKHy9dJNuS8SGGqxpUsFCNCvMaEoWvmiKEFnYyqk35r09Koc+wsZhjiDxD4KTNZr+xuy5Xqu1tD6OHpS3F4ZQIvOWxD2XeAy9woZIAECAVOU36UXHPF5zl5yMzl98Bcr4WP1Z3IKyK+ZKwdKW3iv/eDxQZ8dl/alu8ezJeB1nFn9K2J/pY7z7vCPbfkMmyS0fGYz5TYp9wWwWbDA8SimC14L4K4eSd5Bth7hF3ZO1Z+kJLISWRdOlBdFwcRfTkf6lWy9NDo0sh6rO2PYHmzNl5JvJq8iOczqIPKT7dV1ZJv3vBPr4yi5kIZexulz8aAYuUXgpD0R7iWVDjG+UaxDuM8SjwfoBWG3aL0SlfOZGsx702mHPpMCMflHJK1xupD+JndMKD1v3m7xeeskCswKMhPSZiPjkXcpSpXpcZ0odK6kdHPFdiY847zWoC7fEdTrZd/8eOZ1pfG8sq5Kcc71LZ8uH1MfOoqZB6r/KmR52+9En89sOE7LtsXL8zz7efJcFXd3n5uP3IVISs2spB5ZFILOhTZes2siTeYQtHu28j4OfG8dQEq03DDATEilWXERdhiuvrkxWkfmT+WkCd42zpOymZ60EyWkp7zXy6IdAtKFxi/ndop6jNtkuUcvWMpqV/0L0LMVeqKp4ae0XeG/f0BXD0tWQvvZsMeGhim1Ol9ffQ70ZBT8+yvw973a3ev/fmQWAF4Ie49d6JX6AxnAb21xJ3rZKDymaltFbU+RCn8YgLqNExt4i1gsQli8HRwJEEEmRCSuDLF4KRKFa6ZoHIu9HHFJrfHyTvlO24fIxI2zqmoIhMhaECaoWwTXoYIkVSwV8xRFtlrRJOsLciAu+w15eeI3cYsSYW719ABxpt+LIADb2xZA2Q7A2ftAZN9p5Dp30U0PH73m/tgfwaOxuTBPBv7GSf/SRsCRDoowGmJiqrGuutx1nw5gyH5xJ5ja77lUbwqggASUEEbX2edwRAbZjd4PGAWusxCfN8aAqIiAYpefMySsWtRWayJqQMwgNequ2KTSxRT1ZcEKlI3iJzia/dirN1UhSxBqtiei1c6i8Ip9xwiQLMjF/mu0coILYVeb0ejGgQ8+D4URKEcDAa9lL/errImCpOyQBiw0RaWqoOQ6eEZ13y+HJHmGcupPlfYPpIRzCg+zf13sXR2KOQxL/6DLIt9qMnYAH9ZM2qSK4K+fpgMERv3PYCFFLlyqNwUIiKTFTGCtK2jVD5oPMoCIyx9MqkbQFFQU9eefkOkSLSsEh3F8UNdrJtdkGGVZfDWEaOVdVgGS1AjomCjiovf6sgacDaghwLo21PZZ60yVEPmx1ByWUZ8kVynmYDvKVUZTaVUQapWfyi3Wc0dmCAIhe/VcIqQaRg5ryWwtlwYVuWFyT99dU3PosRZZWSsx8kaQkJWr838c9nDnPuisXS4Y9VPa5DpKQwnslk19+VBOv3w451++KDe/fMTf+r3I37wOzgAAAA==) format('woff2');
}
@font-face {
  font-family: 'Lufga'; font-weight: 400; font-style: normal; font-display: swap;
  src: url(data:font/woff2;base64,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) format('woff2');
}
@font-face {
  font-family: 'Lufga'; font-weight: 500; font-style: normal; font-display: swap;
  src: url(data:font/woff2;base64,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) format('woff2');
}
@font-face {
  font-family: 'Lufga'; font-weight: 700; font-style: normal; font-display: swap;
  src: url(data:font/woff2;base64,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) format('woff2');
}

:root {
  --paper:#F2F3F1; --ink:#0F110F; --ink-soft:#1B1E1B;
  --mute:#878D87; --line:#E2E4E0; --tint:#EBEEE8;
  --accent:#EFFF3B; --accent-ink:#2E3300; --warn:#E5654E;
  --glass:rgba(15,17,15,.34);
  --font-display:'Lufga',system-ui,sans-serif;
  --font-body:'Lufga',system-ui,sans-serif;
  --r-card:24px; --r-panel:18px; --r-pill:999px; --pad:16px;
}
* { margin:0; padding:0; box-sizing:border-box; }
html, body { overflow-x:clip; }
body { background:var(--paper); font-family:var(--font-body); }
.app {
  font-family:var(--font-body); background:var(--paper); color:var(--ink);
  max-width:430px; margin:0 auto; min-height:100vh;
  padding:20px var(--pad) 120px; -webkit-font-smoothing:antialiased;
}
.app--dark { background:var(--ink); color:var(--paper); }
.app--dark .display__sub { color:#9BA19B; }
.app--dark .circle--light { background:#1E211E; color:#F2F3F1; box-shadow:none; }
.app--dark .flat { background:#191C19; }
.app--dark .flat__row + .flat__row { border-top-color:rgba(255,255,255,.08); }

.circle {
  width:48px; height:48px; border-radius:var(--r-pill); border:none;
  display:inline-flex; align-items:center; justify-content:center;
  cursor:pointer; transition:transform .15s ease; flex-shrink:0;
}
.circle svg { width:20px; height:20px; stroke-width:2; }
.circle:active { transform:scale(.94); }
.circle:focus-visible { outline:2px solid var(--accent-ink); outline-offset:2px; }
.app--dark .circle:focus-visible { outline-color:var(--accent); }
.circle--light { background:#FFFFFF; color:var(--ink); box-shadow:0 1px 2px rgba(0,0,0,.05); }
.circle--dark { background:var(--ink); color:#FFFFFF; }
.circle--tint { background:var(--tint); color:var(--ink); }
.circle--sm { width:40px; height:40px; }
.circle--sm svg { width:17px; height:17px; }
.notif-badge { position:absolute; top:-3px; right:-3px; min-width:18px; height:18px;
  padding:0 5px; border-radius:9px; background:var(--warn); color:#fff;
  font-size:11px; font-weight:600; line-height:1;
  display:flex; align-items:center; justify-content:center; box-shadow:0 0 0 2px var(--paper); }

.display { font-family:var(--font-display); font-weight:700; font-size:42px; line-height:1.04; letter-spacing:-0.02em; }
.display--md { font-size:32px; }
.display__sub { font-size:16px; font-weight:300; color:var(--mute); margin-top:10px; }

.section-head { display:flex; align-items:center; justify-content:space-between; margin:32px 0 12px; }
.section-head h2 { font-family:var(--font-display); font-size:16px; font-weight:700; letter-spacing:-0.01em; }

.hero {
  position:relative; border-radius:var(--r-card); overflow:hidden;
  background:
    radial-gradient(120% 90% at 85% -10%, rgba(239,255,59,.12), transparent 55%),
    linear-gradient(165deg, var(--ink-soft) 0%, var(--ink) 62%);
  min-height:400px; display:flex; flex-direction:column; justify-content:flex-end;
  padding:14px; margin-top:24px;
}
.hero--map { background:#171A17; min-height:340px; }
.hero--sm { min-height:280px; }
.hero__photo { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
.hero__scrim { position:absolute; inset:0; background:linear-gradient(180deg, transparent 45%, rgba(10,12,10,.45) 100%); }
.hero__route { position:absolute; inset:0; width:100%; height:100%; }
.hero__note {
  position:absolute; top:16px; left:16px;
  font-size:11px; font-weight:500; letter-spacing:.05em; text-transform:uppercase;
  color:rgba(255,255,255,.45);
}
.hero__note--action {
  background:none; border:none; cursor:pointer;
  font-family:var(--font-body); color:var(--accent);
}
.hero__note--action:focus-visible { outline:2px solid var(--accent); outline-offset:2px; }

.glass {
  position:relative; background:var(--glass);
  -webkit-backdrop-filter:blur(22px); backdrop-filter:blur(22px);
  border:1px solid rgba(255,255,255,.08); border-radius:var(--r-panel);
  padding:18px; display:grid; grid-template-columns:1fr 1fr; gap:20px 12px;
}
.stat__label { font-size:11px; font-weight:500; letter-spacing:.05em; text-transform:uppercase; color:rgba(255,255,255,.55); margin-bottom:5px; }
.stat__value { font-family:var(--font-display); font-size:22px; font-weight:700; letter-spacing:-0.02em; color:#fff; }
.stat__value small { font-size:13px; font-weight:500; color:rgba(255,255,255,.6); margin-left:2px; }
.stat__value--accent { color:var(--accent); }
.glass > .circle--light { position:absolute; right:14px; bottom:14px; }
.glass--block { margin-top:12px; background:#191C19;
  -webkit-backdrop-filter:none; backdrop-filter:none; border-color:rgba(255,255,255,.06); }

.bikecard {
  position:relative; border-radius:var(--r-card); overflow:hidden;
  min-height:240px; display:flex; flex-direction:column; justify-content:flex-end;
  padding:12px; margin-top:14px; cursor:pointer;
  border:none; width:100%; text-align:left;
  background:
    radial-gradient(120% 90% at 85% -10%, rgba(239,255,59,.12), transparent 55%),
    linear-gradient(165deg, var(--ink-soft) 0%, var(--ink) 62%);
  font-family:var(--font-body);
}
.bikecard:focus-visible { outline:2px solid var(--accent-ink); outline-offset:2px; }
.bikecard .glass { display:flex; align-items:center; gap:12px; padding:14px 16px; }
.bikecard__name { flex:1; color:#fff; font-size:16px; font-weight:700; font-family:var(--font-display); }
.bikecard__name span { display:block; font-family:var(--font-body); font-size:12px; font-weight:400; color:rgba(255,255,255,.6); margin-top:3px; }
.bikecard__alert { width:8px; height:8px; border-radius:50%; background:var(--warn); flex-shrink:0; box-shadow:0 0 0 4px rgba(229,101,78,.25); }
.bikecard .circle--light { position:static; }
.bikecard--retired { min-height:130px; }
.bikecard--retired .hero__photo { filter:grayscale(1); opacity:.75; }
.bikecard--retired .hero__route { opacity:.35; }

/* PATTERN A \u2014 nested stat-card */
.stat-card { background:#FFFFFF; border-radius:var(--r-card); padding:16px; }
.stat-card + .stat-card { margin-top:12px; }
.stat-card__head { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
.stat-card__title { font-size:15px; font-weight:500; flex:1; min-width:0; }
.stat-card__title span { display:block; font-size:12px; font-weight:400; color:var(--mute); margin-top:2px; }
.stat-card__panel { background:var(--tint); border-radius:var(--r-panel); padding:16px; }
.stat-card__panel--near { background:var(--accent); }
.stat-card__grid { display:flex; align-items:baseline; justify-content:space-between; margin-bottom:14px; }
.panel__label { font-size:12px; color:var(--mute); margin-bottom:4px; }
.stat-card__panel--near .panel__label { color:var(--accent-ink); opacity:.7; }
.panel__big { font-family:var(--font-display); font-size:28px; font-weight:700; letter-spacing:-0.02em; }
.panel__big small { font-size:14px; font-weight:500; color:var(--mute); margin-left:3px; }
.stat-card__panel--near .panel__big small { color:var(--accent-ink); opacity:.7; }
.panel__side { text-align:right; font-size:14px; font-weight:500; }
.panel__big--warn { color:var(--warn); }

.hatch { position:relative; padding-bottom:18px; }
.hatch__track { height:8px; border-radius:4px; background:rgba(15,17,15,.08); overflow:hidden; position:relative; }
.stat-card__panel--near .hatch__track { background:rgba(46,51,0,.14); }
.hatch__fill { position:absolute; inset:0 auto 0 0; border-radius:4px;
  background:repeating-linear-gradient(-55deg, var(--ink) 0px, var(--ink) 3px, transparent 3px, transparent 7px); }
.hatch__fill--warn { background:repeating-linear-gradient(-55deg, var(--warn) 0px, var(--warn) 3px, transparent 3px, transparent 7px); }
.hatch__marker { position:absolute; top:11px; width:0; height:0; transform:translateX(-50%);
  border-left:5px solid transparent; border-right:5px solid transparent; border-bottom:6px solid var(--ink); }
.hatch__minmax { position:absolute; left:0; right:0; top:12px; display:flex; justify-content:space-between;
  font-size:11px; color:var(--mute); font-variant-numeric:tabular-nums; }
.stat-card__panel--near .hatch__minmax { color:var(--accent-ink); opacity:.65; }

.chip { font-size:11px; font-weight:500; letter-spacing:.04em; text-transform:uppercase;
  padding:5px 11px; border-radius:var(--r-pill); flex-shrink:0; }
.chip--near { background:var(--accent); color:var(--accent-ink); }
.chip--over { background:var(--warn); color:#fff; }

/* PATTERN B \u2014 flat rows */
.flat { background:#FFFFFF; border-radius:var(--r-card); padding:4px 18px; }
.flat__row { display:flex; align-items:center; gap:16px; padding:16px 0;
  border:none; width:100%; background:none; text-align:left; font-family:var(--font-body); color:inherit; }
button.flat__row { cursor:pointer; }
button.flat__row:focus-visible { outline:2px solid var(--accent-ink); outline-offset:-2px; border-radius:8px; }
.flat__row + .flat__row { border-top:1px solid var(--line); }
.flat__label { font-size:12px; color:var(--mute); margin-bottom:3px; }
.flat__value { font-size:15px; font-weight:500; }
.flat__body { flex:1; min-width:0; }
.flat__end { text-align:right; flex-shrink:0; }
.flat__end .flat__value { font-family:var(--font-display); font-weight:500; font-variant-numeric:tabular-nums; }
.flat__chev { color:var(--mute); display:inline-flex; }
.flat__chev svg { width:16px; height:16px; }

.empty { text-align:center; padding:28px 20px; color:var(--mute); font-size:14px;
  background:#fff; border-radius:var(--r-card); }
.app--dark .empty { background:#191C19; }
.empty--hero {
  position:relative; overflow:hidden; border-radius:var(--r-card);
  background:
    radial-gradient(120% 90% at 85% -10%, rgba(239,255,59,.12), transparent 55%),
    linear-gradient(165deg, var(--ink-soft) 0%, var(--ink) 62%);
  color:rgba(255,255,255,.75); min-height:300px;
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px;
  margin-top:24px; padding:24px;
}
.empty--hero p { font-size:15px; max-width:240px; line-height:1.5; position:relative; text-align:center; }
.empty--hero .hero__route { opacity:.13; }

.btn {
  display:flex; align-items:center; justify-content:center; gap:8px;
  width:100%; padding:16px; border:none; border-radius:var(--r-pill);
  font-family:var(--font-display); font-size:15px; font-weight:500; letter-spacing:-0.01em;
  cursor:pointer; background:var(--ink); color:#fff;
}
.btn svg { width:18px; height:18px; }
.btn--accent { background:var(--accent); color:var(--accent-ink); }
.btn--ghost { background:transparent; color:var(--warn); }
.btn--tint { background:var(--tint); color:var(--ink); }
.btn:focus-visible { outline:2px solid var(--accent); outline-offset:2px; }
.btn + .btn { margin-top:10px; }
.btn:disabled { opacity:.45; cursor:default; }

.fab {
  position:fixed; left:50%; bottom:calc(24px + env(safe-area-inset-bottom)); transform:translateX(-50%);
  background:var(--ink); color:#fff; border:none; cursor:pointer;
  font-family:var(--font-display); font-size:15px; font-weight:500; letter-spacing:-0.01em;
  padding:16px 24px; border-radius:var(--r-pill);
  display:flex; align-items:center; gap:8px;
  box-shadow:0 8px 24px rgba(15,17,15,.25); z-index:10;
}
.fab--accent { background:var(--accent); color:var(--accent-ink); box-shadow:0 8px 24px rgba(239,255,59,.25); }
.fab svg { width:18px; height:18px; }
.fab:focus-visible { outline:2px solid var(--accent); outline-offset:2px; }

.topbar {
  display:flex; align-items:center; justify-content:space-between;
  position:sticky; top:0; z-index:30;
  margin:-20px calc(var(--pad) * -1) 10px;
  padding:calc(20px + env(safe-area-inset-top)) var(--pad) 18px;
  background:linear-gradient(180deg, var(--paper) 60%, rgba(242,243,241,0) 100%);
}
.app--dark .topbar { background:linear-gradient(180deg, var(--ink) 60%, rgba(15,17,15,0) 100%); }
.topbar__group { display:flex; gap:10px; }

.overlay { position:fixed; inset:0; background:rgba(10,12,10,.55); z-index:50;
  display:flex; align-items:flex-end; justify-content:center; }
.sheet { background:var(--paper); color:var(--ink); width:100%; max-width:430px;
  border-radius:var(--r-card) var(--r-card) 0 0; padding:22px 18px 30px;
  max-height:90vh; overflow-y:auto; }
.sheet__head { display:flex; align-items:center; gap:12px; margin-bottom:18px; }
.sheet__head h3 { flex:1; }
.sheet__head h3 { font-family:var(--font-display); font-size:22px; font-weight:700; letter-spacing:-0.02em; }
.field { margin-bottom:14px; }
.field label { display:block; font-size:12px; color:var(--mute); margin-bottom:6px; }
.field input, .field select, .field textarea {
  width:100%; padding:12px 14px; font-size:16px; font-family:var(--font-body);
  background:#fff; border:1px solid var(--line); border-radius:14px; color:var(--ink);
}
.field input:focus, .field select:focus, .field textarea:focus { outline:2px solid var(--accent-ink); }
.field input[type="date"] {
  -webkit-appearance:none; appearance:none;
  min-height:49px; display:flex; align-items:center;
  text-align:left;
}
input[type="date"]::-webkit-date-and-time-value { text-align:left; margin:0; }
.field__hint { font-size:12px; color:var(--mute); margin-top:6px; }
.field__row { display:flex; gap:10px; }
.field__row .field { flex:1; }

.seg { display:flex; background:var(--tint); border-radius:var(--r-pill); padding:4px; margin-bottom:16px; }
.seg button { flex:1; border:none; background:transparent; padding:10px; border-radius:var(--r-pill);
  font-family:var(--font-display); font-size:13px; font-weight:500; color:var(--mute); cursor:pointer; }
.seg button.on { background:var(--ink); color:#fff; }

.toggle { display:flex; align-items:center; justify-content:space-between;
  padding:13px 14px; background:#fff; border:1px solid var(--line); border-radius:14px; margin-bottom:14px; }
.toggle span { font-size:15px; font-weight:500; }
.toggle button { width:48px; height:28px; border-radius:14px; border:none; background:var(--line); position:relative; cursor:pointer; transition:background .15s; flex-shrink:0; }
.toggle button.on { background:var(--accent); }
.toggle button::after { content:''; position:absolute; top:3px; left:3px; width:22px; height:22px;
  border-radius:50%; background:#fff; transition:left .15s; }
.toggle button.on::after { left:23px; }

.photo-pick { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
.photo-pick__preview { width:72px; height:72px; border-radius:var(--r-panel); object-fit:cover;
  background:var(--ink); flex-shrink:0; }
.photo-pick input { display:none; }

/* part icons & type picker */
.picon { display:inline-flex; }
.picon svg { width:100%; height:100%; }
.circle .picon { width:24px; height:24px; }
.circle--sm .picon { width:21px; height:21px; }
.icon-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
.icon-pick {
  display:flex; flex-direction:column; align-items:center; gap:6px;
  padding:12px 4px 9px; background:#fff; border:1px solid var(--line);
  border-radius:var(--r-panel); cursor:pointer; font-family:var(--font-body);
}
.icon-pick .picon { width:34px; height:34px; color:var(--ink); }
.icon-pick .lbl { font-size:10px; color:var(--mute); text-align:center; line-height:1.15; }
.icon-pick.on { background:var(--accent); border-color:var(--accent); --tint:var(--accent); }
.icon-pick.on .lbl { color:var(--accent-ink); font-weight:500; }
.icon-pick:focus-visible { outline:2px solid var(--accent-ink); outline-offset:2px; }
.type-hero {
  display:flex; align-items:center; gap:12px;
  width:100%; padding:12px 14px; margin-bottom:16px;
  background:#fff; border:1px solid var(--line); border-radius:var(--r-panel);
  cursor:pointer; font-family:var(--font-body); text-align:left;
}
.type-hero .circle { width:48px; height:48px; cursor:pointer; }
.type-hero .circle .picon { width:26px; height:26px; }
.type-hero .lbl { flex:1; font-size:15px; font-weight:500; color:var(--ink); }
.type-hero:focus-visible { outline:2px solid var(--accent-ink); outline-offset:2px; }

.service-notes { margin-top:3px; line-height:1.4;
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
.collapse-head { width:100%; display:flex; align-items:center; justify-content:space-between;
  background:none; border:none; cursor:pointer; padding:2px 2px 14px;
  font-family:var(--font-display); font-size:14px; font-weight:500; color:var(--ink); }
.collapse-head svg { width:16px; height:16px; transition:transform .15s; color:var(--mute); }
.collapse-head.open svg { transform:rotate(90deg); }

/* bottom tab bar */
.tabbar { position:fixed; left:16px; right:16px;
  bottom:calc(12px + env(safe-area-inset-bottom)); z-index:40;
  max-width:398px; margin:0 auto;
  display:flex; justify-content:space-between; align-items:center;
  padding:8px; border-radius:999px;
  background:rgba(18,20,18,.9);
  -webkit-backdrop-filter:blur(16px); backdrop-filter:blur(16px);
  box-shadow:0 12px 32px rgba(15,17,15,.28); }
.tabbar button { width:48px; height:48px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  background:none; border:none; padding:0; cursor:pointer;
  color:#fff;
  transition:transform .12s, background .15s, color .15s; }
/* Dim inactive icons via element opacity (not a translucent color) so
   multi-stroke icons like Storage don't get denser where strokes overlap. */
.tabbar button svg { width:21px; height:21px; opacity:.55; }
.tabbar button.on { background:var(--accent); color:var(--accent-ink); }
.tabbar button.on svg { opacity:1; }
.tabbar .tab-plus { background:rgba(255,255,255,.14); color:#fff; }
.tabbar .tab-plus svg { opacity:1; }
.tabbar button:active { transform:scale(.9); }

/* part view */
.type-hero--static { cursor:default; }
.type-hero .lbl small { display:block; font-size:11px; font-weight:400; color:var(--mute); margin-top:2px; }
.action-row { display:flex; flex-wrap:wrap; gap:4px 0; justify-content:space-around; margin-bottom:16px; }
.action { background:none; border:none; cursor:pointer; padding:4px 6px;
  display:flex; flex-direction:column; align-items:center; gap:5px;
  font-family:var(--font-body); font-size:10px; color:var(--mute); }
.action .circle { cursor:pointer; }
.circle--warnbg { background:rgba(229,101,78,.14); color:var(--warn); }
.note-block { background:#fff; border:1px solid var(--line); border-radius:var(--r-panel);
  padding:12px 14px; font-size:14px; line-height:1.5; margin-bottom:14px; white-space:pre-wrap; }
.flat__chev { transition:transform .15s; }
.flat__chev.rot { transform:rotate(90deg); }
.stat-card--tap { cursor:pointer; transition:transform .12s; }
.stat-card--tap:active { transform:scale(.985); }

/* stats */
.stat-block { background:var(--tint); border-radius:var(--r-panel);
  padding:16px; margin-bottom:14px; }
.bars { display:flex; flex-direction:column; gap:10px; }
.bars__row { display:flex; align-items:center; gap:10px; }
.bars__label { width:86px; font-size:12px; color:var(--mute);
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.bars__track { flex:1; height:26px; border-radius:8px; background:rgba(15,17,15,.07); overflow:hidden; }
.bars__fill { height:100%; border-radius:8px; background:rgba(15,17,15,.28); transition:width .3s; }
.bars__row.top .bars__fill { background:var(--accent); }
.bars__val { min-width:64px; text-align:right;
  font-family:var(--font-display); font-weight:500; font-size:13px; }
.bars__row.top .bars__val { color:var(--accent-ink); }

/* header save pill */
.btn--sm { width:auto; padding:9px 16px; font-size:14px; margin:0; }
.btn--sm svg { width:15px; height:15px; }

/* motion */
.overlay { animation:fade-in .18s ease; }
.sheet { animation:sheet-in .32s cubic-bezier(.32,.72,.33,1); }
.confirm { animation:pop-in .18s ease; }
.toast { animation:toast-in .22s ease; }
.screen-in { animation:fade-in .18s ease; }
.bikecard:active { transform:scale(.985); }
@keyframes fade-in { from { opacity:0; } }
@keyframes sheet-in { from { transform:translateY(48px); opacity:.5; } }
@keyframes pop-in { from { transform:scale(.94); opacity:0; } }
@keyframes toast-in { from { transform:translate(-50%, 12px); opacity:0; } }

/* floating Continue in the type picker */
.float-cta {
  position:sticky; bottom:-30px;
  margin:0 -18px -30px; padding:16px 18px 22px;
  background:linear-gradient(180deg, rgba(242,243,241,0) 0%, var(--paper) 30%);
  animation:cta-in .22s ease;
}
@keyframes cta-in {
  from { transform:translateY(26px); opacity:0; }
  to   { transform:none; opacity:1; }
}

.toast { position:fixed; bottom:88px; left:50%; transform:translateX(-50%);
  background:var(--ink); color:#fff; padding:10px 18px; border-radius:999px; font-size:13px; z-index:60;
  display:flex; align-items:center; gap:8px; white-space:nowrap; }
.toast svg { width:14px; height:14px; color:var(--accent); }

/* confirmation dialog */
.overlay--center { align-items:center; padding:24px; z-index:70; }
.confirm {
  background:var(--paper); color:var(--ink);
  width:100%; max-width:340px;
  border-radius:var(--r-card); padding:22px 20px 18px;
}
.confirm h4 { font-family:var(--font-display); font-size:18px; font-weight:700; letter-spacing:-0.01em; margin-bottom:8px; }
.confirm p { font-size:14px; color:var(--mute); line-height:1.5; margin-bottom:18px; }
.confirm__row { display:flex; gap:10px; }
.confirm__row .btn { padding:14px; margin:0; }
.btn--warn { background:var(--warn); color:#fff; }

.loading { display:flex; align-items:center; justify-content:center; min-height:60vh; color:var(--mute); font-size:14px; }

/* import UI */
.import-drop {
  border:2px dashed var(--line); border-radius:var(--r-card);
  padding:34px 20px; text-align:center; color:var(--mute); font-size:14px;
  display:flex; flex-direction:column; align-items:center; gap:12px; margin-bottom:16px;
  background:#fff; cursor:pointer;
}
.import-drop svg { width:28px; height:28px; color:var(--ink); }
.progress { height:10px; border-radius:5px; background:var(--line); border:1px solid #D6D9D3; overflow:hidden; margin:14px 0; }
.progress > div { height:100%; background:var(--accent); border-radius:4px; transition:width .2s; }

/* dark sheet (import) */
.sheet--dark { background:var(--ink); color:#fff; }
.sheet--dark .circle--tint { background:rgba(255,255,255,.12); color:#fff; }
.sheet--dark .field label, .sheet--dark .field__hint { color:rgba(255,255,255,.55); }
.sheet--dark .field input, .sheet--dark .field select, .sheet--dark .field textarea {
  background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.16); color:#fff;
}
.sheet--dark .field input:focus, .sheet--dark .field select:focus,
.sheet--dark .field textarea:focus { outline:2px solid var(--accent); }
.sheet--dark .field select option { color:var(--ink); }
.sheet--dark .toggle span { color:#fff; }
.sheet--dark .toggle button { background:rgba(255,255,255,.22); }
.sheet--dark .toggle button.on { background:var(--accent); }
.sheet--dark .btn--tint { background:rgba(255,255,255,.12); color:#fff; }
.sheet--dark .flat { background:rgba(255,255,255,.06); }
.sheet--dark .flat__row + .flat__row { border-top-color:rgba(255,255,255,.1); }
.sheet--dark .flat__label { color:rgba(255,255,255,.5); }
.sheet--dark .flat__chev { color:rgba(255,255,255,.5); }
.sheet--dark .empty { background:rgba(255,255,255,.06); color:rgba(255,255,255,.55); }
.sheet--dark .progress { height:10px; background:rgba(255,255,255,.16); }
.spin { animation:spin 1s linear infinite; }
@keyframes spin { to { transform:rotate(360deg); } }

@media (prefers-reduced-motion:reduce) { .circle,.bikecard,.toggle button,.toggle button::after,.progress>div { transition:none; } .spin,.float-cta,.overlay,.sheet,.confirm,.toast,.screen-in { animation:none; } }
`,
    Ue = () => crypto?.randomUUID?.() || `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  async function Su(a, e) {
    try {
      let t = await window.storage.get(a);
      return t?.value != null ? JSON.parse(t.value) : e;
    } catch {
      return e;
    }
  }
  async function Lt(a, e) {
    try {
      return (await window.storage.set(a, JSON.stringify(e)), !0);
    } catch (t) {
      return (console.error("save failed", a, t), !1);
    }
  }
  async function om(a) {
    try {
      await window.storage.delete(a);
    } catch {}
  }
  var ae = () => new Date().toISOString().slice(0, 10),
    Da = (a, e = 0) =>
      (a / 1e3).toLocaleString("en-US", { minimumFractionDigits: e, maximumFractionDigits: e }),
    Sl = (a) =>
      new Date(a + "T00:00:00").toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      }),
    Kt = (a) =>
      new Date(a + "T00:00:00").toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    dm = (a) => {
      if (!a) return null;
      let e = Math.floor(a / 3600),
        t = Math.round((a % 3600) / 60);
      return e ? `${e}h ${String(t).padStart(2, "0")}m` : `${t}m`;
    },
    D0 = [
      {
        id: "chain",
        label: "Chain",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M408.3 104.6q-5.5-.8-11.2-.5a71 71 0 0 0-30.3 8.6q-5.4 2.7-13 5.7a135 135 0 0 1-111.7-5.1c-4-2.1-7.4-3.9-12.5-5.6A68 68 0 0 0 140 177c1 18.3 9.5 35.3 23.3 47.2q5.2 4.4 11 8.2 4.4 3 8.3 5.9c19.3 15 32.9 33 42.5 55.3a135 135 0 0 1-78.7-13.5 68.1 68.1 0 1 0-29.8 127.2c7.9-1 16-2.4 23.3-5.7l6.2-3 7.3-3.4c14.6-6.4 29.1-10 45.1-10.8a145 145 0 0 1 74.6 15.8c4.3 2.1 8.4 4.1 13.4 5.6a68 68 0 0 0 71.2-24.7c11.6-15 16-32.9 13.5-51.5-2.5-18-12-34.2-26.6-45.1l-7-5-8.7-6.3a136 136 0 0 1-42-54.8 143 143 0 0 1 81.7 15c5.3 2.7 10.2 5.2 17.6 6.9a68.5 68.5 0 0 0 81-76.9 68.5 68.5 0 0 0-59-58.7M301.8 292h.5c12-.8 23.6 4.2 32.5 12a47 47 0 0 1 15.8 32.4 46 46 0 0 1-11.6 34q-7.6 8.4-18.1 13a43 43 0 0 1-31.8.6q-5.5-2.1-10.9-4.8t-11-5l-14.4-4.8a157 157 0 0 0-101.3 3.2q-6.4 2.6-11.9 5.4a58 58 0 0 1-24 7.9 45 45 0 0 1-33.2-10.3 46 46 0 0 1-16.8-31.3 46.8 46.8 0 0 1 66-47.8l7.7 3.7q2.8 1.5 5.7 2.7 8.1 3.8 16.7 6.3c18.3 5.6 37.4 7.8 56.4 6.5A164 164 0 0 0 279 299c7-3.4 12.4-6.1 22.8-7m-160 45.4a29.9 29.9 0 1 0-59.5 3.8 29.9 29.9 0 0 0 59.6-3.8m191.9-.1a29.9 29.9 0 1 0-59.6 4 29.9 29.9 0 0 0 59.6-4m-63.3-103.6-1.5-3.4a81 81 0 0 0-3.6-7.7q-11 3.7-21 8.5-7 3.3-14.6 6.2c-4 1.6-9 2.4-13.3 3.2h-.1a160 160 0 0 1 30.2 48.4 167 167 0 0 0 28.8-11.7 70 70 0 0 1 20-6.1 144 144 0 0 1-25-37.4M398 125.4c10.6-.7 22 3.3 30.3 9.8a46 46 0 0 1 17.9 31.5c4.4 32.2-26.8 60.7-58.4 51.8-3-.8-6-2.3-8.8-3.7l-4.4-2.2q-6.7-3-13.8-5.8a161 161 0 0 0-127.2 5.4c-7 3.3-12.2 5.9-22.6 7h-1a45 45 0 0 1-32.6-11.1 46 46 0 0 1-16.1-31.8 46 46 0 0 1 31.2-47.9 48 48 0 0 1 35 1.6l.9.4 1 .6a186 186 0 0 0 28 11.6 162 162 0 0 0 117-10 56 56 0 0 1 23.6-7.2m31.5 44.7a29.9 29.9 0 1 0-59.5 4.7 29.9 29.9 0 0 0 59.5-4.7m-191.8-.8a29.9 29.9 0 1 0-59.4 6.4 29.9 29.9 0 0 0 59.4-6.4m-22.7-1.5a8.5 8.5 0 1 0-14 9.5 8.5 8.5 0 0 0 14-9.5m182.9-3.5a8.5 8.5 0 1 1 3.7 16.5 8.5 8.5 0 0 1-3.7-16.5m-85.6 173.9a8.6 8.6 0 1 0-17 2 8.6 8.6 0 0 0 17-2m-201.1-7.5a8.6 8.6 0 1 1 1.6 17 8.6 8.6 0 0 1-1.6-17" clip-rule="evenodd"/>',
      },
      {
        id: "tire",
        label: "Tires",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M250.6 64.1A192 192 0 1 1 261.3 448a192 192 0 0 1-10.7-383.8m17.3 22-6.8-.6-11.9 15.2-1.4 2c-2 2.7-4.9 6.4-6.6 7.6-11.2 8-23.2-6.4-13.8-16.6l2.4-3q1.5-1.9 3.2-3.6a168 168 0 0 0-93.8 44.5q.4 6.3 1.4 12.8l1 8.1.3 2.7c.4 2.9.8 6.3.5 8.6q-.3 3-2.3 5.2c-5.3 6.2-15.7 4.7-18.1-3.4a58 58 0 0 1-1.8-11.9v-1.2l-3.5 5c-2.8 4.1-5.5 8-8.3 12.7a170 170 0 0 0-23 80.6l14.5 11.4 2.3 1.7c4.4 3.3 10 7.4 10.3 12.1 1 10.2-11 15.7-18.5 8.7q-1.6-1.5-3.8-3-1.7-1.2-3-2.4a166 166 0 0 0 44.6 93.6l22.2-2.7c5.1-.8 11.2-1.8 15 1.5 4.6 4 5.4 10.8 1 15.4-3 3.3-8 3.8-12.7 4.3l-4.7.7 3.6 2.4a168 168 0 0 0 79.2 30.9l1 .1c4 .5 11.8 1.3 14.6 1l13.5-17.5c3-4.1 6.4-8.8 11.3-9.4q4.7-.6 8.3 2.3 3.4 3 3.9 7.5c.3 5.3-4.4 10.6-8 14.6l-.4.4-.2.2-.3.3c28.7-3.8 56-14.9 79-32.3q4.8-3.6 8.8-7.2l6-5-2.3-19.3-.4-2.7c-.8-5.2-1.8-11.4 1.5-15.3q3-3.5 7.5-3.8c11.4-.7 12.3 11.7 12.6 20a170 170 0 0 0 34.7-98q-4.2-3.2-8.4-6.7a241 241 0 0 0-12.3-9.7l-.1-.1c-3.2-2.4-5.5-4.2-6.2-8.6-.4-2.8.4-5.8 2.1-8.1q2.7-3.3 6.8-4c5.4-.7 10 3.1 14.2 6.7l2.3 1.9q-1.1-10.4-4-20.5a171 171 0 0 0-40.5-73q-6 .4-12 1.3l-8.4 1q-1.5 0-3.1.4c-3.2.4-6.7.9-9.4.6-5-.6-8.4-6.3-8.4-10.9 0-2.4 1.2-4.9 2.8-6.7 2.9-3.2 8-3.8 12.6-4.3l4.8-.7-2.1-1.4q-5.8-4.2-11.6-7.8A168 168 0 0 0 267.9 86m-15.5 31a139 139 0 1 1 7 277.7 139 139 0 0 1-7-277.7m1.3 21.4a117.5 117.5 0 1 1 4.4 235 117.5 117.5 0 0 1-4.4-235" clip-rule="evenodd"/>',
      },
      {
        id: "wheel",
        label: "Wheels",
        vb: "0 0 110 110",
        body: '<path fill="currentColor" d="M35.6 27a27.6 27.6 0 1 0 19.6 46.8 27.6 27.6 0 0 0 47.1-19.4 27.5 27.5 0 0 0-47.1-19.2c-5-5-12-8.2-19.6-8.2m0 4.2a23.3 23.3 0 1 1 0 46.6 23.3 23.3 0 1 1 0-46.6m38.4 0a23.4 23.4 0 1 1-16 39.4l1-1.4a21.7 21.7 0 0 0 37.6-15A21.6 21.6 0 0 0 59 39.8l-1-1.4c4.3-4.5 10.1-7 16.1-7.2m-38.4 1.7c-12 0-21.7 9.7-21.7 21.6a21.7 21.7 0 0 0 43.4 0c0-12-9.8-21.6-21.7-21.6M74.3 37l3 .2-3 11.1v.2l-2 .6-.2-.2-8.2-8.1q4.6-3.5 10.4-3.8m-40.8.2v11.7l-1.7 1-.2-.2-9.9-6c2.8-3.5 7-6 11.8-6.5m4.2 0c4.7.5 8.9 3 11.7 6.5l-9.9 6-.2.1-1.7-1V37.3m43.6 1q7 3 9.7 9.8l-11 3h-.3l-1.5-1.4.1-.2zM61 43.8l8.1 8.1.2.2-.5 2h-.3l-5.4 1.5v-1q0-5.7-2.2-10.7zm-41.4 3.6 9.9 6h.2a6 6 0 0 0 0 2.4h-.2l-9.9 6a17 17 0 0 1 0-14.4M52 48.7a17 17 0 0 1 0 11.6q-1.5-5.8 0-11.6m-4.5 1q-.8 4.7 0 9.6l-6-3.6h-.1a6 6 0 0 0 0-2.4h.2zM92.1 52a17 17 0 0 1-3.6 13.3l-8-8.1h-.1l-.2-.2.6-2h.2zm-17.4.7h.6q1.5.6 1.3 2.3-.6 1.5-2.3 1.3-1.6-.6-1.3-2.3.4-1.2 1.7-1.3m-39.1 0q1.6.2 1.8 1.8-.1 1.6-1.8 1.8-1.7-.1-1.9-1.8.1-1.6 1.9-1.8m34.3 5.2q.6.9 1.4 1.5v.2l-3 11.1Q63.9 69 61 65.2q1-2.5 1.6-5.3l7-1.9zm-30.6 1.3.2.1 9.9 6a18 18 0 0 1-11.8 6.6V60zm-7.5 0 1.7 1v11.6c-4.8-.5-9-3-11.7-6.5l9.8-6zm45.5.7.2.2 8 8.1a18 18 0 0 1-13.2 3.6l3-11v-.3q1 0 2-.6"/>',
      },
      {
        id: "inner-tube",
        label: "Inner tube",
        vb: "0 0 110 110",
        body: '<path fill="currentColor" d="M42.4 22a33.5 33.5 0 0 0 0 66.9h38.9c7.3 0 14-4 17.7-10.3a13 13 0 0 0-22.4-13L70.1 77q-.7 1-1.9 1.1H67A33.3 33.3 0 0 0 42.4 22m0 4.3a29 29 0 0 1 17.9 52.2h-.1q-7.6 5.9-17.8 6a29 29 0 1 1 0-58.2m0 2.2a27 27 0 1 0 .1 54 27 27 0 0 0 0-54m0 4.3a22.6 22.6 0 1 1 .1 45.2 22.6 22.6 0 0 1 0-45.2m0 2.1a20.5 20.5 0 1 0 .1 41.1 20.5 20.5 0 0 0 0-41m0 4.4q5.8 0 10 3.3-2.1-.2-4.2.1a14 14 0 0 0-19.8 12.5 6.5 6.5 0 0 0 13 0 8.6 8.6 0 1 1 17.2.2 16.2 16.2 0 0 1-26.8 12.2q2 .5 4.1.2a14 14 0 0 0 20.6-12.4c0-2.3-1-4.6-3.3-5.8a6.5 6.5 0 0 0-9.7 5.6 8.6 8.6 0 0 1-17.2 0 16 16 0 0 1 16.1-16m-.7 6.5a13 13 0 0 0-4.7 9.4q0 1.2-1 1.8-1.1.6-2.2 0-1-.6-1-1.8a10 10 0 0 1 8.9-9.4m8 7.2q.6 0 1 .3c.6.3 1.1 1.4 1.1 2.1a9.7 9.7 0 0 1-9.5 9.7c3.1-2.4 5.2-6 5.2-10a2 2 0 0 1 2.2-2m37.8 10.5a8.6 8.6 0 0 1 7.5 13c-3 5-8.2 8-14 8H58.8l3.4-2h19c5 0 9.7-2.8 12.2-7.1a6.5 6.5 0 0 0-5.6-9.7 7 7 0 0 0-5.6 3.2L77 78.1h-2.5l6-10.2a9 9 0 0 1 7.4-4.4m0 6.5q1.3 0 1.9 1 .6 1.2 0 2.2A10 10 0 0 1 82 78l4-6.8q.5-1 1.8-1.1"/>',
      },
      {
        id: "tire-liner",
        label: "Tire liner",
        vb: "0 0 110 110",
        body: '<path fill="currentColor" d="M42.4 22a33.5 33.5 0 0 0 0 66.9h38.9c7.3 0 14-4 17.7-10.3a13 13 0 0 0-22.4-13L70.1 77q-.7 1-1.9 1.1H67A33.3 33.3 0 0 0 42.4 22m0 4.3a29 29 0 0 1 17.9 52.2h-.1q-7.6 5.9-17.8 6a29 29 0 1 1 0-58.2m0 2.2a27 27 0 1 0 .1 54 27 27 0 0 0 0-54m0 4.3a22.6 22.6 0 1 1 .1 45.2 22.6 22.6 0 0 1 0-45.2m0 2.1a20.5 20.5 0 1 0 .1 41.1 20.5 20.5 0 0 0 0-41m0 4.4q5.8 0 10 3.3-2.1-.2-4.2.1a14 14 0 0 0-19.8 12.5 6.5 6.5 0 0 0 13 0 8.6 8.6 0 1 1 17.2.2 16.2 16.2 0 0 1-26.8 12.2q2 .5 4.1.2a14 14 0 0 0 20.6-12.4c0-2.3-1-4.6-3.3-5.8a6.5 6.5 0 0 0-9.7 5.6 8.6 8.6 0 0 1-17.2 0 16 16 0 0 1 16.1-16m-.7 6.5a13 13 0 0 0-4.7 9.4q0 1.2-1 1.8-1.1.6-2.2 0-1-.6-1-1.8a10 10 0 0 1 8.9-9.4m8 7.2q.6 0 1 .3c.6.3 1.1 1.4 1.1 2.1a9.7 9.7 0 0 1-9.5 9.7c3.1-2.4 5.2-6 5.2-10a2 2 0 0 1 2.2-2m37.8 10.5a8.6 8.6 0 0 1 7.5 13c-3 5-8.2 8-14 8H58.8l3.4-2h19c5 0 9.7-2.8 12.2-7.1a6.5 6.5 0 0 0-5.6-9.7 7 7 0 0 0-5.6 3.2L77 78.1h-2.5l6-10.2a9 9 0 0 1 7.4-4.4m0 6.5q1.3 0 1.9 1 .6 1.2 0 2.2A10 10 0 0 1 82 78l4-6.8q.5-1 1.8-1.1"/>',
      },
      {
        id: "sealant",
        label: "Sealant",
        vb: "0 0 110 110",
        body: '<path fill="currentColor" d="M42.3 9a2 2 0 0 0-2 2v16.8q0 .4-.9 2.7l-2 4.7A29 29 0 0 0 34 46.5v48c0 3.3 2.8 6.2 6.3 6.2h29.1c3.4 0 6.3-2.9 6.3-6.3V46.5c0-5.3-4.1-8.4-4.1-8.4L59 28.3s-2-1.7-2-4V11.1q-.2-2-2.2-2.1zm2.1 4.2h8.3v4.1h-8.3zm0 8.3h8.3v2.7a10 10 0 0 0 3.7 7.4L69 41.4s2.5 2 2.5 5.1v48a2 2 0 0 1-2 2H40.1a2 2 0 0 1-2-2v-48a27 27 0 0 1 3-9.5l2-5q1.1-2.1 1.2-4.2zm-2 27a2 2 0 0 0 0 4.3h12.4a2 2 0 1 0 0-4.2zm0 6.3a2 2 0 0 0 0 4.2h25a2 2 0 1 0 0-4.2zm12.4 8.4a14.6 14.6 0 0 0 0 29.1 14.6 14.6 0 0 0 0-29.1m-2 4.3v6.1l-.5.3-5.3-3q2.3-2.6 5.8-3.4m4.1 0q3.5.8 5.7 3.3l-5.2 3-.5-.2zm-12 7 5.3 3v.5L45 81a11 11 0 0 1 0-6.6m19.8 0a11 11 0 0 1 0 6.6l-5.2-3v-.6zm-12.4 7.1.5.3v6q-3.5-.7-5.8-3.2zm5 0 5.3 3A10 10 0 0 1 57 88v-6.1z"/>',
      },
      {
        id: "spokes",
        label: "Spokes",
        vb: "0 0 110 110",
        body: '<path fill="currentColor" d="M40 9a2 2 0 0 0-2 2v2.2a2 2 0 0 0 2 2 2 2 0 0 0 1.9-1 1 1 0 0 1 1.2 1.1v83.4a2 2 0 1 0 4.2 0V15.3c0-2.9-2.4-5.3-5.3-5.3h-.1A2 2 0 0 0 40 9m12.6 0a2 2 0 0 0-2.1 2v2.2a2 2 0 0 0 2 2 2 2 0 0 0 1.9-1 1 1 0 0 1 1.2 1.1v83.4a2 2 0 1 0 4.2 0V15.3c0-2.9-2.4-5.3-5.3-5.3h-.1a2 2 0 0 0-1.8-1M65 9a2 2 0 0 0-2.1 2v2.2a2 2 0 0 0 2 2 2 2 0 0 0 1.9-1 1 1 0 0 1 1.2 1.1v83.4a2 2 0 1 0 4.2 0V15.3c0-2.9-2.4-5.3-5.3-5.3h-.1A2 2 0 0 0 65 9"/>',
      },
      {
        id: "cassette",
        label: "Cassette",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="m284.6 10.4 1.7-.1q3.2 0 6.3.6l2.4.4c3.3.4 6.7.8 9.8 2.1 12.4 5.2 15.8 20.7 17.8 32.6l.3 1.9c.5 3.8 1.1 8 4 10.8 5.4 5.5 13.4-1 19.2-5.8L350 50c6.8-4.6 14.3-9 22.7-9 7.4 0 12.2 2.7 18.2 6.6l.2.1q3.7 2.3 6.9 5.2c10 10.2 6.6 25.3 3.3 37.5l-.7 2.4c-.9 2.8-1.8 5.8-1.8 8.6q0 1.7 1.2 3c1.6 1.5 4 3.3 6.3 3.7 2.7.5 9-1 15.3-2.3 4.8-1 9.5-2 12.5-2.2 8-.4 15.8 1.9 21.8 7.4q4 4 7.2 9c13.3 19.2 1 33.7-7.7 44-4 4.8-7.2 8.6-7 11.7s3.3 5.5 5.9 6.6q2.8 1 6 1.4l2 .3 3.5.6c8.6 1.5 18.2 3.2 24.8 8.9 7 6 9.8 18.5 10.4 27.5q.5 6.6-2.6 12.4c-4.3 8.1-11.7 12-19.1 15.8-5.8 3-11.6 6-15.9 11 .2 1.9.4 4.4 1.5 6 3.3 5.5 8.7 8.7 14.1 12 6 3.5 12 7 15.6 13.7 5.3 9.7 3.3 16.7.7 26.4l-.5 1.8a24 24 0 0 1-7.8 13c-6.7 5.9-15 6.3-23.5 6.6-7 .4-14 .7-20.2 4.2l-.3.2c-4.6 8 2 16.2 7.9 23.6q4 4.8 6.5 9.2a20 20 0 0 1-.4 21c-3.2 5-7.7 11.6-12.2 15.7a26 26 0 0 1-5.7 3.9A32 32 0 0 1 417 419l-8.4-2.8-4.7-1.7c-3-1-13.2-3.4-15.5-1.6-4.9 3.6-2.7 16.2-1.2 25.3q.9 4.6 1 7.4.4 5.3-1 10.5c-2 6.7-6.5 11.8-12.6 15l-2.8 1.4c-3.9 2.1-8.3 4.5-12.1 5.4-11 2.5-24.8-5.2-32-13.2q-1.5-1.6-2.8-3.3c-3.2-4-6.2-7.5-11.6-9-9.6 2.7-10.9 10.6-12.2 18.7q-.7 4.3-1.8 8.3c-3.8 12-12 20.2-24.7 21l-4 .4c-4.4.4-8.8.9-13.4-.7-9-3-15.6-10-18.8-19l-1.6-5a67 67 0 0 0-4.2-11c-2.6-4.8-6.5-9.2-12.5-6.6-5.6 2.4-8.6 7-11.6 11.7q-2 3-4.3 6a43 43 0 0 1-11.6 8.9c-10.6 5.7-27.8.1-36.3-6.7-10.5-8.5-10.2-26-9.5-38.1v-2.6c.2-2.8.4-6.3-.7-8-5.3-8.1-15.3-2-22 2.1q-2.2 1.4-4 2.3a30 30 0 0 1-25 2.8c-9-3-17.2-9.3-21.6-17.6-6.4-12.5-.6-24.1 5-35.5l1.1-2.1.6-1c2-4.3 5.3-10.6 2.8-14.9-3-5-9.9-4.2-15.8-3.5l-5.5.4h-2.2c-4.5 0-9 0-13.3-1.4A28 28 0 0 1 28 347.6c-1.6-3-4.4-8.8-5.2-12C20 323.3 27 312 35.8 304l4.1-3.5c5.4-4.4 10.8-8.9 12.9-15.9-3-6.1-10-8.4-16.4-10.5l-4-1.4q-4.4-1.5-8.3-4.1A29 29 0 0 1 10.9 251q-.9-4.6-.7-9.4v-1.4a27 27 0 0 1 6-18.5c6-7.4 15.5-10.2 24-12.7 7.6-2.2 14.3-4.1 17.4-9l.1-.2c-.5-8.1-5.1-12.3-10.2-17q-3.2-2.8-6.3-6.3c-12.8-15.3-9.4-34.3 5.5-46.7 5.9-5 14.8-6.5 22.3-5.7q3.4.4 6.7 1c4.2.7 8.5 1.4 12.7 1.2h.2c2 0 4.3 0 6-1.6 1.9-1.5 4.6-6.8 3.9-9.4a91 91 0 0 0-4-10.9C91.8 97.5 89 90.8 90 82c1-10.4 6.6-14.8 13.8-20.6l1.8-1.4c12-10 26-4 37.7 3.2l1 .7c6.4 3.9 10 6 17.8 7 5.7-5.6 6-12.3 6.3-19.3q.1-5.2 1.1-10.6c1.9-8.5 4.2-14.6 11.8-19.8 5.1-3.5 8.3-4.2 13.4-5.5l1.6-.3c16.7-4.1 27.3 8 36 20.4l1 1.3c2.3 3.3 5.1 7.4 8.3 9.3q1.4.7 3.4 1l1.2.1c6.4-2.6 9-8.6 11.7-14.6a40 40 0 0 1 6.7-11.6c6.4-6.8 10.5-10 20.1-11m12 21.5a77 77 0 0 0-12.3-1.3h-.1c-4.6 2.7-6.6 7.3-8.6 12l-1.8 3.9c-4.6 9.3-12.1 18-22.7 20.4-4.2 1-9.1 1.2-13.3.1-10.3-2.7-15.8-10.7-21-18.3-4-6-8-11.5-13.6-14h-.1c-3.7.5-9.4 1.4-11.8 4.5-2.3 3-2.6 7.8-2.9 13.5-.4 8.9-1 20-9.7 30a22 22 0 0 1-13.2 7.8c-12.3 2-20.6-2.9-29-7.9a59 59 0 0 0-17-7.8c-1.3 1-8.5 6.6-8.9 7.5-1.8 5.2 1.8 13 4.3 18.8l1 2c6.1 14 2 28.4-9.4 38.3-7 6-19.8 5.4-28.3 4.6q-1.8 0-4.5-.6c-5.2-1-11.8-2-14.5.5-6.1 6-8.1 11.4-2 18.5q2 2.1 4.3 3.8 1.7 1.3 3.3 2.8c12.8 13 19.8 33.8 3.5 47.2-7 5.9-14.8 8.2-23 10.6l-9.1 3q-3.8 1.3-5.7 4.8v2c-.2 3.7-.4 8.8 1.9 11 3 3 7.8 4.6 12.2 6l5.2 2c32 13.6 27.8 39.8 3 58.8-3 2.3-10.2 8.6-10.2 13.4Q45 343.3 58 342.3q2.8 0 5.7-.4c11-.8 22.3-1.7 30.9 6.4a28 28 0 0 1 9.4 19.8c.7 8.4-3 15.8-6.7 23a53 53 0 0 0-6.3 17.3c-.4 3.5 9.8 10.8 13.2 9.7 4.4-.3 8-2.6 11.6-5l5-3c12.9-6.4 26.7-7.2 37.8 3 9.4 8.7 9 18.5 8.4 29.3q-.4 6.2 0 12.9c.8 8.5 6.1 10.8 14.3 11.8 4.4.6 9.4-6.8 12.2-11l1.2-1.9c9.8-13.4 26.4-21.6 42.4-13.5 9.8 5.7 14.4 15.2 18 25.6l1 3.4c1.1 4.3 2.3 8.6 6.5 10.8l.3.2h2.1c4-.1 10.3-.3 12.3-2.5 2.6-2.9 3.2-7.1 3.8-11.1q.4-2.9 1-5.2c3.6-15.8 12.7-28 29.7-29.5 8.3-.7 15.7 3.5 21.7 8.9q3.8 3.5 6.3 6.6c4 4.5 7.2 8.3 15 10.4l2.9-1.3c3.8-1.8 8.5-4 10.1-6.6.3-4.7-.5-9.2-1.3-13.8l-.7-4.2c-3.2-21.2 3.7-42.2 29-40.3a66 66 0 0 1 19.7 4.6c4.1 1.4 8.3 2.9 12.5 3.4 3.5.4 10.2-7.9 11.3-11l-.1-1q-.3-1-.2-1.7 1 0 1 .4h.6c-.2-1.5-4.2-6.4-7-9.9l-2.4-3c-9.4-12.6-13-29-3-42.3 5.8-8 19.9-11 29.4-12a81 81 0 0 1 8.7-.4c2.6 0 7.8 0 8.8-1.8 1.8-3.6 3.5-10 3.4-14.2-.7-3.3-5-5.8-8.6-7.8l-2.7-1.7-.4-.3-1.2-.8c-10.5-7.2-17.8-12.2-20.6-25.6-3.7-18.1 7.6-25.1 21.5-33.6q2.1-1.3 4.8-2.5c4.1-2 8.6-4 10.7-7.5a44 44 0 0 0-3.5-14.7 56 56 0 0 0-17.4-4.7c-8.6-1.3-17-2.6-24.1-10.4a30 30 0 0 1-6.5-10.8A26 26 0 0 1 431 163a42 42 0 0 1 4.7-7l2.4-2.8c4.5-5.2 11.5-13.3 10.2-18-.7-2.5-5.9-9.7-8.2-10.9-3.3-1.6-8.8-.3-15.2 1.3-8.6 2-18.9 4.5-28 .9q-4.5-1.9-8.2-5a26 26 0 0 1-8.9-10.8c-3-8.2-.2-18.6 2.1-27.3 1.8-6.5 3.4-12 2-15.1-1.2-2.5-6.5-5.7-9-6.8q-1-.4-2.1-.6h-.4c-5.8 1.6-10.2 5-14.5 8.5l-5.2 4c-10 6.7-23.2 11.2-34.4 4.2a29 29 0 0 1-14-18.7q-.7-3.1-1.5-7.9c-1.1-7.1-2.5-15.8-6.2-19.1m-45.6 105a119 119 0 1 1 9.2 237.8 119 119 0 0 1-9.2-237.9m-2 20.4a98.7 98.7 0 1 1 13.2 197 98.7 98.7 0 0 1-13.3-197" clip-rule="evenodd"/>',
      },
      {
        id: "brake-pads",
        label: "Pads (disc)",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M251 49.6c12-1.5 25 2 33.4 10.6 5 5.1 8.7 11.9 10 18.9 1 5 1 10.4 1 15.6l-.1 3.2v115.7q0 9.7 9 13.3a59 59 0 0 0 16.6 1.1h52c8.3-.2 20.4-.3 26 1a37 37 0 0 1 16.6 9.3c11.3 11.3 11.3 21.6 11.2 35.7v142c.1 13.9.2 25-11 36.1-5 5-11.5 8.4-18.5 9.7a87 87 0 0 1-19.3.8H131.2c-5 0-11 .1-15-.5a36 36 0 0 1-30.6-31.8q-.4-5.7-.3-11.6V280c-.1-7-.2-14.3.4-20.9a35 35 0 0 1 7.8-17.6c4.7-6 12.5-10.9 20-12.5a104 104 0 0 1 23.4-1h60.3q3.4 0 6.7-.2c5-.5 10.3-3.9 12-8.8a98 98 0 0 0 1-21.5l-.1-4.8V94.6c0-12.2 0-21.9 8.5-32a37 37 0 0 1 25.7-13m120 231.7H141v127.9h230zM253.5 70.8h-1.1c-14.5 1.9-14.4 12-14.3 23V192l.1 5.1c.1 8.7.3 21-1.2 26.7a36 36 0 0 1-28 25c-5.5.6-12.8.6-19.3.5h-56.1a79 79 0 0 0-15.8.5c-11.4 2.7-11.3 13.7-11.1 23.3v138.7c0 5.2-.1 14.2.3 16.7a15 15 0 0 0 6.1 10c4.7 3.2 12.7 3 19.2 2.8h249.3c6.8.2 14.3.4 19.2-4.5q3.5-3.6 4.2-8.5c.4-3.2.4-10.2.3-15.2V266c0-3.4-.3-6-1.9-9-4.2-8-10.8-8-18.3-7.9h-77.5a36 36 0 0 1-32.7-25.7c-.7-2.7-.9-5.9-1-8.7l-.1-25.8V93.6c.2-6.7.4-14-4.8-18.8-4.4-4.1-9.8-4.3-15.5-4M130 260a61 61 0 0 1 8.7-.2h226.7l16 .1c6.4.2 10.4 4 11 10.6v141.3l-.2 9c-.2 5-4.7 9.4-9.7 9.6H129.2c-4.4-.2-9-4.3-9.4-8.7q-.2-3.8-.2-7.8V277.6c-.2-8.2-.4-16.4 10.5-17.5M264.9 92.9a11.4 11.4 0 1 0-17.7 14.4 11.4 11.4 0 0 0 17.7-14.4" clip-rule="evenodd"/>',
      },
      {
        id: "brake-pads-rim",
        label: "Pads (rim)",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M204.2 58.7c-3.3-.2-6.7-.3-9 .2a32 32 0 0 0-30 26.9c-.5 3.3-.5 9-.5 13.3v119.6h-10.4c-2.3-11.4-8.9-11-17.6-10.4l-3 .1-16.6.8-41.6 2.1-26.4 1.3-3.4.1c-5 .2-10.3.4-14.7 1.3a34 34 0 0 0-21.4 14.8C5 235.6 5 242 4.8 249.4v3c-.4 13.4 3.6 23.9 15.3 31.3a38 38 0 0 0 21.5 5.1l3.8.1 22.6 1 46.1 2 22.7 1.2c8.3.5 15.8 1 17.4-10.4h10.6V413c0 12.4 0 21.3 9.6 31 9.2 9.6 20.6 9.4 32.5 9.3h5c11.4 0 20.1-1 28.7-9.4 9.7-9.5 9.7-19.2 9.7-31.4V93.9A34 34 0 0 0 240 67.6c-8.4-8.1-19.1-9.4-30.3-8.9zM197.7 80a48 48 0 0 1 7 0h7.8c16.9-1.2 16.7 7.7 16.4 19.5l-.1 4.9v28.7h-2.9q-4.8.1-8.3 3.7a10.6 10.6 0 0 0 1.3 15.3c3.1 2.6 6.2 2.7 9.9 2.3V240c-4.4 0-8.3.4-11.4 4q-3 3.3-2.4 8a11 11 0 0 0 4.1 7.4c3 2.3 6.1 2.4 9.7 2v96c-4.1.1-7.6.3-10.8 3.4a10 10 0 0 0-3 7.3q0 4.5 3.2 7.7c3.1 3 6.6 3.1 10.6 3v37.4c0 6.3.1 14.3-8.7 15.6q-4.3.5-9.1.3-3.7-.2-7 0c-18.3 1.3-18.1-6.5-17.8-19.2v-323c.1-2 1.2-5 2.6-6.4 2.5-2.9 5.4-3.2 8.9-3.4m-32.9 160h-10.6v21.4h10.6zm-32.4-10 .3.3c.2 2.9.1 6.7 0 10.2v31l-59.5-2.8-22-1-3.3-.1c-5.2-.1-12.2-.3-15.7-1.5q-1.5-.7-2.9-2c-2.5-2.3-3-4.7-3-8.1l-.1-3.8c-.3-7.6-.5-15.7 9.1-17.5q3.5-.5 7.2-.6H45l19.3-1 11.8-.5c18.8-1 37.9-2 56.4-2.6M296.2 58.7c-1.1 0-3 0-4 .2a31.6 31.6 0 0 0-30.3 29.5 291 291 0 0 0-.1 20.7v301.5c-.1 4.7-.2 10.7.3 14.2a32 32 0 0 0 11.8 21.5c9.2 7.2 18.3 7.1 29 7h5.5q5.4.1 10.5-.4a32 32 0 0 0 27.9-26.7c.5-4 .5-9.2.5-13.7V282.8h10.4c.5 3.6 1.5 6.2 4.5 8.6 1.3 1 3.4 1.9 5 1.9q6.3-.1 12.8-.5 2.8 0 5.6-.3l41-1.8 35-1.5 4.6-.2c4.8-.1 10.3-.3 14.4-1 8-1.1 16.5-7 21-13.6 5.3-7.4 5.5-14.4 5.7-23 .2-13.3-3-24.5-14.3-32.3-8.6-6-18.4-6.2-28.3-6.5l-4.1-.1-25.7-1.3-41.3-2-16.7-.9h-1.8c-8.5-.5-15.7-.8-17.5 10.4h-10.3V100.8c0-12.4.1-23.3-10-33-9-8.6-17-9-28.8-9zM294.9 80q4.6-.3 9.4-.1h6.8c14.7-.4 14.7 6.6 14.7 17.6v306.3l-.1 17.6q0 3-1.5 5.5c-3.5 5.3-10.2 5.2-16.2 5h-5.6c-5 .2-11.4.3-15-2.3-3-2.2-3.7-4.3-4.1-7.7l-.1-29v-14.4h.5c3.7.3 7 0 10-2.7q3.1-3.2 3.4-7.7c0-4.9-3-8.9-7.6-10.4q-2.7-.8-5.5-.6h-.8v-96l1.1.1c3.5 0 6 .1 9-2.4a11 11 0 0 0 3.8-7.7q0-4.7-3-7.8c-3.2-3.3-6.7-3.4-10.9-3.5v-85.3c3.8.3 7 .1 10.1-2.4q3.4-3.1 3.8-7.6c.1-2.8-.8-6-2.8-7.9-3.5-3.4-6.6-3.5-11-3.5V91.7c.1-8.2 3.7-11.2 11.6-11.6m62.9 160h-10.6v21.4h10.6zm21.4-10 69.2 3.2 18.8.9h2c6.5.3 14.9.5 16.3 8.9a67 67 0 0 1-.2 16.8c-.3 2.6-3.2 5-5.3 6.2a53 53 0 0 1-14 1.5l-3.2.1-21.2 1-62.4 2.8z" clip-rule="evenodd"/>',
      },
      {
        id: "rotor",
        label: "Rotor",
        vb: "0 0 110 110",
        body: '<path fill="currentColor" d="M53.6 15a39.6 39.6 0 1 0 2 79.2 39.6 39.6 0 0 0-2-79.2m.1 4.2A35.4 35.4 0 1 1 55.5 90a35.4 35.4 0 0 1-1.8-70.8m.9 2a2 2 0 1 0 0 4.2 2 2 0 0 0 0-4.2m8 1.1a2 2 0 0 0-.5 4.1 2 2 0 1 0 .5-4m-23.5 3.1a2 2 0 1 0-.2 4.2 2 2 0 0 0 .2-4.2m31 0a2 2 0 0 0-1 4 2 2 0 1 0 1-4m-15.5 2.1a27 27 0 0 0-15.4 5 2 2 0 0 0-.6 2.7l5.8 10a2 2 0 0 0 3.6 0l8.4-14.6a2 2 0 0 0-1.8-3.1M65 30a2 2 0 0 0-1.7 1l-5.8 10a2 2 0 0 0 1.8 3.2h16.8A2 2 0 0 0 78 41c-2.7-4.7-7-8.5-12-10.8zm-32.8.4a2 2 0 1 0 .3 4.2 2 2 0 0 0-.3-4.2m44.2 0a2 2 0 1 0 .3 4.1 2 2 0 0 0-.3-4m-26.3 2.7-4 6.9-2.8-4.7q3.2-1.6 6.8-2.2m15.6 2.1q2.9 2 5.2 4.8h-8zM27.4 37a2 2 0 1 0 .2 4.1 2 2 0 0 0-.2-4.1m54.3 0a2 2 0 1 0-.1 4.1 2 2 0 0 0 .1-4.1M33 40a2 2 0 0 0-1.8 1 27 27 0 0 0-3.6 13.6l.2 2.3a2 2 0 0 0 2 1.9h11.7a2 2 0 0 0 1.8-3.2L34.7 41v.2a2 2 0 0 0-1.8-1.2m-8.5 4.4a2 2 0 1 0 0 4.2 2 2 0 0 0 0-4.2m60.4 0h-.6a2 2 0 1 0 .6 0m-30.2 1.8a8.4 8.4 0 0 0-8.3 8.4 8.3 8.3 0 1 0 16.6 0c0-4.6-3.7-8.4-8.3-8.4m-21 1.2 4.2 7.2h-6.1c0-2.6 1-4.8 1.9-7.2m21 3c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2a4 4 0 0 1-4.2-4.2c0-2.3 1.9-4.2 4.2-4.2m13.2 0a2 2 0 0 0-1.8 3.1l8.4 14.6a2 2 0 0 0 3.6 0q3.7-6.3 3.7-13.5v-.1l-.2-2.3a2 2 0 0 0-2-1.8zm-44.5 2.1a2 2 0 1 0 0 4.2 2 2 0 0 0 0-4.2m62.5 0a2 2 0 1 0 0 4.2 2 2 0 0 0 0-4.2m-14.4 2h6.1v.1c0 2.5-1.1 4.8-2 7.2zm-47 6-.5.2a2 2 0 1 0 .5-.1m60.3 0a2 2 0 1 0 .1 4.3 2 2 0 0 0 0-4.2M63 63a2 2 0 0 0-1.8 1l-8.4 14.6a2 2 0 0 0 1.8 3.2 27 27 0 0 0 15.4-5 2 2 0 0 0 .7-2.7l-5.9-10.2a2 2 0 0 0-1.8-1m-30 2a2 2 0 0 0-1.9 3.1 27 27 0 0 0 12 10.9 2 2 0 0 0 2.7-.8l5.8-10a2 2 0 0 0-1.8-3.2zm-5.4 3.2a2 2 0 1 0-.2 4.2 2 2 0 0 0 .2-4.2m54 0a2 2 0 0 0-1 4 2 2 0 1 0 1-4m-43.4 1h8L43.4 74q-2.9-2-5.2-4.7m24.8 0 2.8 4.9c-2.1 1.2-4.5 1.6-6.8 2.1zm-30.7 5.5q-.8 0-1.3.6a2 2 0 1 0 1.3-.6m44.2 0a2 2 0 1 0 1.6 3.6 2 2 0 0 0-1.6-3.6m-37.6 5a2 2 0 1 0 .2 4.2 2 2 0 0 0-.2-4.2m31.4 0a2 2 0 1 0-.2 4.1 2 2 0 0 0 .2-4.1m-7.6 3-.6.2a2 2 0 1 0 .6-.1M54.6 84a2 2 0 1 0 0 4.2 2 2 0 0 0 0-4.2"/>',
      },
      {
        id: "brake-caliper",
        label: "Caliper",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M308.3 90.8h16.1l12.8-.1h.4c3.6 0 7.4-.1 10.4 2.3a11 11 0 0 1 3.5 5.8c.7 2.6.7 9 .6 15l.1 9.8v.5c5.4 4.2 5.3 7.8 5.3 13.5v59.6c11.4.4 22 2.2 30.6 10.2 10.8 10 12.3 23.7 12 37.6v80.5h10.6v-14c-.1-8-.2-18 11-18h8q13.4-.3 26.7.4c2.5.2 6.4 4.3 7 6.9.9 5.7.8 11.8.7 17.8v6.9h3.4c10.8-.2 17.8-.4 17.9 14.6v28.5c0 3.9 0 10.7-.4 12.7a10 10 0 0 1-2.8 4.9c-4 3.9-10.8 3.6-16.7 3.4l-3.7-.1h-30.5l-41-.2h-5.8a121 121 0 0 0-29.2 1.8c-8 1.9-15 6.4-22 10.8l-4.7 3a109 109 0 0 1-63 16.3 107 107 0 0 1-56.6-20.5 55 55 0 0 0-20.2-9.7c-8-1.8-14.7-1.8-22.4-1.7H43q-4 0-8-.3c-3.4-.5-7.5-4-8-7.5-.4-3.7-.4-8-.4-12v-31.1c.2-13.4 8.8-13.2 18.4-13l3 .1v-14.7c-.3-9.2.6-17.2 12-17.3h21.5c3.5 0 10-.1 11.9.3q2.8.8 4.8 2.9c3.5 3.6 3.4 8.6 3.3 13.4V325a37 37 0 0 0 18.3-11.7l4.5-4.4c3.8-3.7 8-7.6 10.5-11.3 1.3-2 2.4-8.2 2.4-10.8 0-10.5-4.7-15.1-11.2-21.2l-3.4-3.4-3.2 3.3-4 4c-12.1 13.5-16.4 9.3-26.5-1l-1.3-1.2-13.9-13.8c-2.7-2.7-4.3-5-4.3-9 0-4.6 3.2-7.8 6.3-10.8l1.2-1.2 8-8-1.9-1.8c-5.4-5-6-11.7-.6-17l4.7-4.7 3-3 20-20c9.5-9.4 14.4-4.4 21.9 3.1l.3.4 9.3 9.3.8-.8c3.2-3.5 10-10.8 12.7-12.3q2.5-1.4 5.2-1.4 4.4 0 7.7 3c3 3 4 8.9 2 12.3a74 74 0 0 1-10.5 11.4l-2.9 2.7 2.7 2.7 12.3 12.2 1.1 1.1c2.4 2.5 6.6 6.6 8.3 7.5 8.9 4.7 23.1-2 30-7.5q2.7-2.2 5-4.5 2.8-2.8 6-5.2a79 79 0 0 1 18.8-10.8 72 72 0 0 1 26.4-3.7h26.1v-59.2c-.1-5.8-.2-10.4 5.4-14.3v-16.8c-.1-7.6-.2-14.7 9.6-16.4m27.7 53.3h-21.3v63.7c0 3-.7 5.4-3 7.7a11 11 0 0 1-5.6 3.2 59 59 0 0 1-11.9.3H275c-23.9 0-30.5 0-48.7 17.8-13.1 12.8-42 21.6-58.1 9.9a119 119 0 0 1-13.5-12.6l-3.5-3.6-31.7-31.7-3.9 4c-3.7 3.7-7.9 8-11.2 10.9l30.6 30.6 5 4.9c11.4 11 18.7 18.1 18.6 37.6 0 18.7-7.6 26-18.4 36.5l-6 5.9c-17.5 18-31 18-52.8 17.9H48v20.8h114.4c9.8 0 21.6-.1 30.2 2a85 85 0 0 1 29.5 14l6.9 4.3a85 85 0 0 0 87-.7l6.1-4 6-4a87 87 0 0 1 25.3-10.2c7-1.7 14.8-1.6 22.1-1.6h20.9l67.6.3v-21h-67.2c-9.9 0-18.2 0-18.1-13.1v-89.1c0-14.5 0-25-18.6-26q-2.5-.3-5.4-.1c-7.8.2-16.9.4-18.4-9q-.5-3.7-.3-7.6zM174.3 325.6a10.7 10.7 0 1 1 3.4 21.1 10.7 10.7 0 0 1-3.4-21m94.9-53.2a48 48 0 1 1 5.4 95.7 48 48 0 0 1-5.4-95.7m86.4-42.7a10.7 10.7 0 1 1 3.5 21 10.7 10.7 0 0 1-3.5-21m-86.4 64a26.7 26.7 0 1 1 5.5 53 26.7 26.7 0 0 1-5.5-53M442.7 315H432v10.4h10.7zM320.1 112h10.6v10.6H320V112M107 246.6c-1.9-1.8-6.3-6.3-7.2-6.8l-1.3 1.3-3.5 3.5.6.6c1.8 1.9 6.2 6.4 7 6.8l1.1-1.1 3.8-3.7zM69.3 315H80v10.5H69.3z" clip-rule="evenodd"/>',
      },
      {
        id: "brake",
        label: "Brakes",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M128.2 80.1h.6a515 515 0 0 1 21-.2h60.1q4.7-.1 9 .3c9 1.2 9.1 9 9.2 15.8h86.3l10.7.2c5.7.5 9.1 5.2 9.3 10.7.2 4.7-4.3 9.8-9 10.2q-4 .3-8.2.2H228v1.3c0 4 .1 8.3-2.8 11.4-3.5 3.5-7.2 3.4-11.4 3.3h-67.5c-11.5 38.6-18 81.2 5.8 116.4q4.7 6.7 8.1 11c7.1 9 10.5 13.3 10.5 32.5h10.6v-5.1c-.1-6-.2-12 6.1-15.1 2.1-1 6.5-1 9.2-1h17l2.8-.1c7-.2 15.8-.4 17.7 7.7.8 3.3.7 7.5.7 11.2v55.8c.3 7.6.7 19.2-7.5 20.7-5.3 1-11.4.9-17.4.8q-5.3-.2-10.2 0c-18.6.9-18.5-5.6-18.4-19.8v-1.5h-10.6v35.7c.1 7 .2 15.7-1.2 21.4a37 37 0 0 1-9.5 16.8 37 37 0 0 1-53.2.2 37 37 0 0 1-9.5-16.5c-1.5-5.8-1.4-15.5-1.4-22.9v-34.8H85l-2.8.1H81c-6.1.1-12.8.3-15.9-6.3-1-2-1-5.6-1-8v-20.3c-.2-7-.4-17.1 7.5-18.4 5.3-.9 13-.7 19.4-.6h5.3q.1-4.1 1-9 1.2-5.7 1-10.3a76 76 0 0 0-4.8-16.2q-1.5-3.9-2.6-7.3A167 167 0 0 1 84 215c-3.2-34.7 4-70.2 15.1-103l.7-1.9c5-15.2 9.6-28.6 28.4-30.1m4.6 26.7c1.3-3.7-2-5.6-5.2-5.3-3.1 2-4.6 6.5-5.8 10.3l-.7 2.1a314 314 0 0 0-11.7 41.2 180 180 0 0 0 1.3 87.5q1.5 5 3.3 9.7a72 72 0 0 1 5.5 22.6c.2 4.2-.4 7.8-1 11.5q-.9 4.4-1 9.3-.3 9-.2 18.2v71l.2 11c.6 12 13.2 18.2 23.5 12.8 8.8-5.5 8.6-13 8.3-21.8v-83.7l-.2-18c-.2-5-3.4-8.8-6.6-12.6l-2.3-2.8q-5-6.3-9-13.3c-18.3-31.2-20-66-12.9-100.9a299 299 0 0 1 9.6-35.2l2.7-7.5zM132 384a10.7 10.7 0 1 1 2.4 21.2A10.7 10.7 0 0 1 132 384m70.6-90.8h10.6c-.2 11.7-.2 24 0 36v17.4h-10.6v-4c.2-5.1.4-9.9-3.2-14a10 10 0 0 0-5-2.8c-5.5-.6-12.3-.5-18.5-.5h-5.3v-10.6h4.2c6.4 0 16.8.2 19.2-.4q3.2-.8 5.6-3.1c3.5-3.6 3.2-9.7 3-15zM95.9 314.8H85.3v10.4H96zm58.6-213.5q17.3.2 35.2 0h17v4.6q0 3.3-.3 5.8l-.4.3h-21l-31.2-.1c1-4 1-6.5.8-10.6M399.2 86a24 24 0 0 0-17-5.9c-13.7.8-25.4 11.2-24.9 25.8.2 4.7 2.2 9.7 4 14.6a72 72 0 0 1 3.3 9.3c7.8 24.4 13.2 49.1 10.9 74.8a98 98 0 0 1-23.3 55.4c-3.1 3.8-6 7.2-8.1 12.6-2.9 7.2-3 13-2.8 20.6h-10.6l.1-2.7c.2-5.4.4-11.7-3.2-15.4-3.3-3.3-8.2-3.2-12.6-3.2h-24.8c-3.6 0-7 .6-9.7 3.3-3.5 3.5-3.3 8.8-3.2 13.8v67.2c0 3.3.7 6.4 3.4 8.8 3.5 3.2 8.3 3.1 12.7 3h26.1c3 0 6.4-1.4 8.4-3.6 3.3-3.6 3-9.8 2.9-15v-2.6h10.5v42.8c0 5.6 0 10.7 1.8 16.2a37 37 0 0 0 62.3 14.8 37 37 0 0 0 9.4-16.5 104 104 0 0 0 1.3-22.2v-35.1h4.5c6.6.2 16.2.4 19.8-.6q2.7-1 4.7-3a9 9 0 0 0 2.4-4c.9-3.2.8-7 .7-10.7l-.1-8.6v-13c-.1-4-.4-7.6-3.5-10.6q-1.5-1.4-3.4-2.1a106 106 0 0 0-21-.8l-4.4.1-1-8.4q-.9-5.5-1-10c-.1-4 2.6-11.2 4.7-17l1.8-4.8q2.4-7.7 4.2-15.6c8.8-38 2.9-80-8.7-116.7l-.2-.5c-2.4-7.7-6.9-22-10.8-28.1a29 29 0 0 0-5.6-6.4M298.7 293.3h10.6v5.8c-.2 4.4-.3 9.2 3 12.4 3.8 3.6 8.7 3.4 13.6 3.3h15.4v10.4h-21.7c-10.9 1.5-10.6 10-10.4 18.3v3.2h-10.5q-.2-17.6 0-35.7zm89-187.8q-1.6-4.3-6-4c-2 1.3-3.5 2.7-2.6 5.4a101 101 0 0 0 3.2 8.6q4.3 12.3 7.7 24.8c11.4 43.7 12 88.4-15.8 126.2l-3.2 4c-2.8 3.5-6 7.4-7.5 10.8a161 161 0 0 0-.9 24.6v79q-.2 6.1.3 12c.5 6 4.5 10.2 9.7 12.7a16 16 0 0 0 12.5-.3c6.3-2.7 9.3-8.1 9.4-14.7l.1-12.2v-86q-.4-4.8-1.2-9.4-1-5.4-1-10.9c0-8.7 2.7-16 5.4-23.6l2-5.4q2-6 3.4-12.2c10.2-42.6-.3-89.3-15.5-129.4m-10.2 278.6a10.7 10.7 0 1 1 2.3 21.2 10.7 10.7 0 0 1-2.4-21.2m38.5-69.3h10.7v10.4H416v-10.5" clip-rule="evenodd"/>',
      },
      {
        id: "brake-lever",
        label: "Brake lever",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M478.5 105a33 33 0 0 0-16.6-6.2c-6.7 1.5-8 4.8-9.9 9.8l-1.1 3c-.9 2-2.6 4.6-4 6.8l-.8 1.1C430.4 143.6 402 158 374.7 165c-19.7 5-40.8-1.3-60.3-7q-5.2-1.7-10.5-3.1l-.4-.1a110 110 0 0 0-39.7-6.3c-8.5.7-18.5 4.3-26.6 7.2l-.3.2a27 27 0 0 0-19.6-6.2c-3.4.3-9.6 2-14 3.3l-2.3.6-26.4 7.4-30 8.3q-30.2 8.2-60 16.8c-1.4-3.1-3.2-5.5-6.6-6.8q-4.2-1.6-8.4.3c-4 2-5.5 5.5-6 9.8l-23.8-.1c-3.3 0-8.4 0-10.5.4q-2.9.5-5 2.7c-3.4 3.4-3.3 7.4-3.3 11.7v26c0 3.9.4 7 3.5 9.8 3.4 3.1 9 3 13.9 2.8h2.9l22.3-.1c.5 6.3 5.4 11.5 12 10.6q4.4-.7 7.2-4.3c1.5-2 1.8-3.7 2.3-6 24.7 1.4 59 5 78.8 21.8 26 20.7 27.5 57.1 28 87.5v26.7l-.2 16.1v2.3c-.2 5-.4 10.3 4.1 13.7 3.7 2.7 9.3 2.6 14.2 2.4h40.4c5.1 0 10.4.2 13.9-4.6 2.3-3.2 2.2-8 2-12v-23.5c0-19.1 0-38.3 1.8-57.4q1.1-12.9 7.1-24.5c2.7-5.2 1.6-9 .3-13.7a55 55 0 0 1-2.1-9.6c-2.6-13.7-5.7-30.1 1.4-42.2 6.9-9.2 23.7-9.6 34-9.8l16.1-.2 24-.4c43.6-1.1 83-16 116.2-44.7 18.5-16 40-45.1 13.4-65.7m-259 65.8c5-.6 6.8 7.5 8 12.5l.5 2.2 5 18.1 14.6 53.7 2.2 8.1a392 392 0 0 0 5.6 20c-9.8 20.5-10 39.3-10.1 61.2v5q-.4 20.1-.2 40.4h-33l.5-21.4c.5-21.8 1-42-3.2-65.5a95 95 0 0 0-24.4-49.7c-17.7-18.4-39.7-26-64.2-30.4a225 225 0 0 0-35.7-3.5L85 208q5-1.2 10.6-2.8l3.5-1 24.2-6.7 61.4-17 9.8-2.8q12.5-3.6 25-6.8m19.7 123.6a10.7 10.7 0 1 0-21 3.1 10.7 10.7 0 0 0 21-3.1m-175.5-84H42.4v10.7h21l.2-.3v-10.4m403-87c8.2 3.7-4.6 20-8 23.7a158 158 0 0 1-67.2 40.4c-19 6.3-38.7 6.1-58.4 6-16.2 0-32.5-.2-48.4 3.3a45 45 0 0 0-27 16.3l-3.3-12-3.2-11.7c-1.3-5-2.6-10.2-4-14.7q2.7-.8 5.3-1.8 4.4-1.8 9.9-2.6a93 93 0 0 1 33.6 4.7l1 .3q6.3 1.6 12.4 3.5 11.5 3.4 23.2 6.1c27 6 48.7 2.4 74.1-8.4 21.4-9.2 42.7-23.4 55.7-43.3 1.4-2.3 2.8-5.8 4-8.6q0-.6.4-1.1" clip-rule="evenodd"/>',
      },
      {
        id: "brake-lever-hydro",
        label: "Hydro lever",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M185.8 81.8c1.7-.2 6-.1 9-.1h22.7c7 0 12.5 1.2 17.7 6.4q4.6 4.8 5.8 11.4c.6 3.1.5 7 .5 10.5v78.4a974 974 0 0 0 29-11.3 60 60 0 0 1 18.2-5.4 32 32 0 0 1 31.5 24l.7 2.2 1 4c3.9 12.1 5.6 23.4 5.1 36.1q-.4 12.7-.2 25.7v15.9c-.2 4.6-.2 9.4 5.8 9.5q6 .3 12 .1c8 0 15.8 0 23.6 1.4q8.4 1.5 16.4 4.3c3.8 1.3 8.3 3.2 12.3 5l2.5 1 23.5 10 21.3 9 2.4 1c6.5 2.7 12 5 18.3 9a92 92 0 0 1 28 26.4 84 84 0 0 1 14.8 41.2c1 11.8-1.3 21.2-11.7 28.2a26 26 0 0 1-32.2-2.3c-7.6-6.5-8.3-13.2-9.1-20.2-.6-5.4-1.2-11-5.2-16.9q-4.4-6.4-11-10.5a103 103 0 0 0-12-5.5l-.6-.2-.8-.3-18-7.6-22-9.5-3.2-1.4c-5.3-2.2-9.3-4-15.7-5.2-8.3-1.8-16.7 1.5-24.7 4.6q-4.5 1.9-8.5 3.1-5 1.5-10 1.8c-15.6 1-26.4-5.4-38.6-12.6l-2.5-1.5c-20-11.7-28.5-19.4-30-43l-6.8-2.3-8.6-2.9c-2.6.4-8.4 2-12.6 3.2l-3.2.9-31.1 8.4-104.8 28-25 6.8-3.6 1a79 79 0 0 1-15.2 3.2c-17 1.5-30-9.3-33.9-25.5l-.6-2.6C3.8 306.2 1.9 298.6 8 288q5.2-9.1 14.5-14c3.8-1.9 8.5-3 12.8-4.2l2.7-.7 19.7-5.3 74-19.8.3-.7c1-3 2.3-6 4.4-8.2 8-8.2 19.4-13.9 30.3-17.3V104.2c-.4-12.3 7.4-20.2 19-22.4m115.8 126.5c-1.7-6.8-3.6-14.2-12-15.2a77 77 0 0 0-14.5 5.3q-14.7 5.6-29.3 11.5l-3 1.2c-5.6 2.5-12.6 5.6-17.5 2.2-2.7-2-4.1-4-5.2-7.2-11.7 4.5-20.2 5.4-32 .2v5.7c.1 5 .2 10.3-.3 15-.7 6.4-8.6 9.1-15.2 11.5q-3.7 1.1-6.2 2.4l-3 1.5c-3.5 1.7-6.8 3.3-9.9 5.8-3.3 2.4-4.2 5-5 7.6-1 2.6-1.9 5-5.4 6.8-3 1.5-7.3 2.6-11 3.5l-2.7.7-4.3 1.2-11.8 3q2.5 8.1 4.7 17 1.8 7.2 3.8 14l2.2-.6c2-.6 4.7-1.2 6.1-1.7l52.7-14 28.8-7.9c8.3-2.3 22.6-6.4 25.3-6.2 3.5.2 9.8 2.4 14.8 4.2l4.3 1.5 19.2 6c9.7 3.2 20.8 6.8 27.4-4 2.5-4 2.8-8.8 2.8-13.4l.2-34.8a80 80 0 0 0-3.4-20.5zm-35.8 9.8a10.7 10.7 0 1 1 3.3 21.1 10.7 10.7 0 0 1-3.3-21m16.7 34.6a10.6 10.6 0 1 1 4.2 20.8 10.6 10.6 0 0 1-4.2-20.8m-94.3-149.4H220v63.2c.2 6.4.3 12-4.8 17.6-7.1 5.7-15.7 6.1-22.5-.3-4.6-4.4-4.6-10.6-4.5-16.4zm26.5 66.2a10.7 10.7 0 1 0-21.2 2.9 10.7 10.7 0 0 0 21.2-2.9M92.5 276.7h-.7l-39 10.6-7.2 1.9-5.2 1.3c-5.3 1.4-11.1 2.9-14.1 8-2 3.2-.6 8 .4 11.5l.6 2.1c1.2 4.7 2.5 9.6 7.8 11.3a24 24 0 0 0 11.2-1.2l2-.6 23.4-6.2q14.7-4.3 29.4-7.8l-4.3-16L93 277l-.2-.1zM313.6 303l2.2 1.8a28 28 0 0 0 9.6 4.9c6.5 1.1 13.1 1 19.7 1a101 101 0 0 1 22 1.3c8.1 1.8 16 5.1 23.6 8.4l1.6.6 23.2 9.9 18.1 7.7 2.5 1c7.2 3 13.6 5.7 20.3 10.2a70 70 0 0 1 19.8 19.7 62 62 0 0 1 10.3 35.3c-.2 4.5-8.3 5.8-9.8 1.1q-.9-3.1-1-6.5a47 47 0 0 0-6.5-21.6 56 56 0 0 0-24-22.6q-5.1-2.5-10.7-4.7l-1.9-.8-21.4-9-17-7.3a79 79 0 0 0-32.7-8.6c-11 .1-20.4 3.6-30.5 7.2l-2.1.8a36 36 0 0 1-26.8-4c-7.2-4.3-14.8-8.9-21.7-13.6a18 18 0 0 1-6.6-9.6c13.6 3.6 25.6 3.4 37.6-4.5.2 0 1.2 1 2.2 1.9" clip-rule="evenodd"/>',
      },
      {
        id: "brake-adapter",
        label: "Brake adapter",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M386.2 60.2c-3-3-5-4-9.4-3.6q-3.2.4-5.6 2.5-6 5.7-11.8 11.7-5 5.2-10 10c-3.9 3.7-6.4 10.3-2.5 15q5.6 6.3 11.9 12.4l9.5 9.6c8.9 9.2 14 14.5 25 2.2l1.6 1.6 6.1 6.2-3 2.8a60 60 0 0 0-10 10.8q-1.3 2.5-1.4 5.2c0 5.3 4 9 8.4 13 5.1 4.6 10.7 9.7 10.2 18.2a61 61 0 0 1-4.3 17.1l-1.3 3.6-5.8 17c-17 5-24.3 22.7-22 39.2q-3.5 3.8-7.4 7.6l-4 4a2046 2046 0 0 1-29 29.4l-86.5 85.8a42 42 0 0 0-27.7 9.3l-10-1.8-7.5-.9c-12-1.3-27.8-3-36.5-8-.7-.4-5.7-5.4-7.8-7.5l-.7-.8-15.8-15.9-1.4-1.4c-2.3-2.3-5.1-5.2-7.4-6.5-2.7-1.4-7.7-1.2-10.1.7-4.2 3.4-9.6 9-13.3 13a82 82 0 0 0-7.1-7.4l-.3-.3.8-.7c3-2.9 6-5.9 6-10.4a11 11 0 0 0-1.5-5.7c-2.4-3.2-5.6-6.3-8.6-9.3l-2.8-2.8L83 315l-5.5-5.5a12 12 0 0 0-8.8-3.9c-1.6 0-4.5.8-5.7 1.8-2.8 2.2-5.6 5.1-8.3 7.8l-2.4 2.5-13 13.1c-2.3 2.6-3.8 5.2-3.5 8.8 0 1.4.7 3.8 1.7 5q4.8 5.5 10.3 10.8l3 3 4.1 4.1q5.4 5.6 11 10.8 4.5 3.9 10.3 2.1c3.5-1.6 5-3 7.5-5.7l.1-.1.5-.5 1.3 1.4c2 2 4.5 4.7 6.2 6.1l-1.8 1.8-5.2 5.1-1.1 1.2c-3 3-6.4 6.3-6.4 10.8s3 7.5 6 10.5l.7.8L94.3 417q8.7 8.8 17.5 17.4a38 38 0 0 0 26 11.7 69 69 0 0 0 20-4.4l1-.4c3-1 5.6-1.9 8.9-2.5a48 48 0 0 1 17.8.9l4.2.7 9.1 1.5q6.4 1.3 12.6 2l.3.3c3.9 3.3 7 6 11.7 8.2 16 7.8 42.2 1 47.6-17.4 2-6.8 3.5-8 6.7-10.6q2-1.4 4.9-4.4l30.4-30.5 95.9-95.8.7-.8.8-.8c2.9-3 8.2-8.4 9.3-9l5.8-2.4c4.7-1.8 8.4-3.3 12.7-9q5.2-7 6.9-15.8l.3-2.2c.4-2 .7-4.5 1.4-6l2.8-5.9 1-2.2 5.2-11.2a370 370 0 0 0 10.8-31.5l4.4-14c3.3-9.8 6-20.3 5-30.7-1.4-16.9-12-29.9-23.8-41.1l-4.4-4.4-5.8-5.6c-3.3-3-9-4-12.6-1-4.3 3.6-9.4 8.5-13 12.8l-7.8-7.8.7-.7c3-3 6.2-6 6.2-10.5s-3-7.5-6-10.3l-.5-.6zm51.2 66 .5.7c7.9 7.6 16.5 16.5 16.9 28.1q.1 5.1-1 10.2c-1.4 6.5-4 14.4-6.4 21.6l-2.3 6.8a453 453 0 0 1-11.7 33 83 83 0 0 1-4.2 8.3 76 76 0 0 0-3.8 7.4q-1 2.8-1 5.8a15 15 0 0 1-2.9 9.8 15 15 0 0 1-9.4 6q-1.8.4-4.2 1.3c-1.3.5-3.2 2.2-4.3 3.2l-22 22q-8.7 9-17.5 17.6L260 411.2c-4 4-4.5 6-5.5 9.7l-1 3.5c-1.4 4.2-5.4 7.2-9.4 8.7-8 3-13.9-.5-19-6.5-2.8-3-12-4.4-17.8-5.2l-10-1.7c-10.8-2-21.5-4-32.5-2.1q-6.6 1.2-12.5 3.3c-5 1.6-10 3.2-15.3 3.7-5 .3-11.4-6.4-15.3-10.4l-1.5-1.5-11.7-11.7-5.5-5.5 22.5-22.7 15.6 15.5 1.7 1.8c3.3 3.2 6.6 6.6 10.3 9.2 7 5 15.1 6 23.3 7.2l2.5.4 14 1.8q12.2 1.4 24 3.4c4.5.9 7.7-2.1 10.6-4.9l.8-.7a15 15 0 0 1 13.7-3.8c6 1.5 9.8 2.1 14.7-2.6l7.7-7.7 3-3 22-22 67-66.7 25.9-26.2 2.5-2.5c3-2.9 6.2-6 8-9 2-3.2 1.3-6.5.6-9.8q-.7-3-.7-5.7a16 16 0 0 1 12-14.5c2-.7 4-1.3 5.6-2.8 1-1 2.1-2.9 2.6-4.2l3-9 1.5-4.6 2.3-6.7q2.9-8 5-16.2c1-3.6 1.8-9 1.7-12.7-.4-14-4.7-20.9-14.1-30.3l5.1-5 2.4-2.4 15-15c.7.3 1.7 1.4 2.5 2.2m-18 121.3a10.6 10.6 0 1 0-21.1 2.4 10.6 10.6 0 0 0 21.1-2.4m-172 164.7a10.7 10.7 0 1 0-16.9 13 10.7 10.7 0 0 0 16.9-13M389.6 93.7 386 90c-3.2-3.3-7.3-7.4-7.8-7.6l-7.4 7.6 1.5 1.5c3.1 3.1 9.4 9.4 10.2 9.6zM78.1 340.3l2.3 2.2-5.3 5.2-2 2c-1 0-7.2-6.5-10.2-9.6l-1.4-1.5c1.7-1.4 5.7-5.5 7.3-7.2.6.2 6 5.6 9.3 8.9" clip-rule="evenodd"/>',
      },
      {
        id: "brake-booster",
        label: "Brake booster",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M265 48.3A181 181 0 0 0 75.6 209.2c-1 10.1-1 20.3-.8 30.5v167.5a59 59 0 0 0 61.8 56.5 58.7 58.7 0 0 0 43.6-94l-3.3-5.1c-3-5.5-5.8-11.8-7.6-17.7-9.3-29.5-9.2-61-9.2-91.7V241a134 134 0 0 1 2.4-34 95.4 95.4 0 0 1 98.7-73.5 96 96 0 0 1 90 84.8c1 9.2 1 18.9 1 28.3l-.1 7.7v1.7c0 31.7 0 64.5-10.7 94.7q-3.1 8.3-7.7 16.1l-2.6 4a58.8 58.8 0 0 0 42.9 92.8 59 59 0 0 0 63.3-56.2q.2-12.1.1-24.4V249.5c0-13 .1-25.5-1.2-38.6a180 180 0 0 0-45.8-103.1 180 180 0 0 0-125.2-59.5m-12.1 21a160 160 0 0 1 157.7 119.4c5.5 21.4 5.4 39 5.4 59.8v129.6l-.2 27.8a36 36 0 0 1-11.3 26.4 37.6 37.6 0 0 1-53.2-1.4 38 38 0 0 1-9.5-31.3 52 52 0 0 1 9-20.3q3.6-5.4 6.5-11.2c16.1-35.6 16.2-75.4 16.2-113.8v-10.7l-.1-15A118 118 0 0 0 261 112.1h-2a116 116 0 0 0-90.5 38.8 117 117 0 0 0-26.5 49.4c-4 15.4-3.8 30-3.6 45.3l.1 11c0 38.7.1 80 17.8 115.4q2.6 4.9 5.9 9.5l2.6 3.9c8.9 14 7.2 33-4 45.1a37.4 37.4 0 0 1-59.4-5.4c-4-6.6-5.3-13.3-5.4-20.9V250.5l-.1-7.9c-.1-10-.2-21 .7-30A159 159 0 0 1 252.9 69.5M381 150.6a13 13 0 0 0-7-1c-3.2 1-5.5 2.4-7.2 5.4-2.8 5.2-.6 9.4 1.9 13.9l.2.4a125 125 0 0 1 14.8 55.7c.2 8.8 2.4 16 13.2 15 3.1-1 5.6-2.5 7.2-5.6 1.7-3.5 1.4-8 1-11.9v-1.6a157 157 0 0 0-8.6-41.7c-2.3-6.6-9.6-25.7-15.5-28.6m24.2 252.8a26.6 26.6 0 1 0-53 4 26.6 26.6 0 0 0 53-4m-278-102.8c-1.2-4.9-6.6-7.4-11.4-7-9.5 2.2-9.4 9.5-9.2 17v39.9c0 3.5-.1 7.4.6 10.4 1.3 5.3 7 7.5 11.9 7.2 5.4-1.3 8.7-4.8 8.8-10.5q.3-9.3.2-18.8v-25.5c0-4.2.1-9-.8-12.7m139.6-210c.3-8-1.9-16.5-12.2-15.7-7.1 1.7-9.5 5.9-9.3 13v3q-.3 4.2.5 8 1.3 4.5 5.3 6.7 3.2 1.6 6.8 1.1c8.5-2.8 8.6-7 8.8-14.2zm-107 312.7a26.6 26.6 0 1 0-53 4.2 26.6 26.6 0 0 0 53-4.2m-23.5-254-.1.1h-.1c-7.4.6-9.5 5-12.3 10.6l-1 2.2a148 148 0 0 0-15.7 56.6c-.8 8.9-1.9 21.2 10.6 21.4a11 11 0 0 0 7.6-3.6c2.9-3.2 3-10 3.2-15.6q0-3.2.3-5.7 2.2-18 9-34.9 1.2-2.7 3.2-6.5c2.7-5.3 5.9-11.4 5.6-14.7-.3-3.1-2.2-6-4.6-8-1.5-1-3.7-2.1-5.7-1.8M404.7 301c-1.2-5.2-6.5-7.8-11.4-7.4-9.6 1.8-9.5 9.4-9.4 17v38.9c0 3.7-.1 7.8.6 11.2 1.2 5.4 6.9 7.6 11.8 7.3 9.4-2.1 9.3-9.4 9.1-16.9v-38.4c.1-4 .2-8.2-.7-11.7m-69-198c-9.2-5.9-34.8-18.9-45-18.2-6.4 1.3-10 5.6-9.3 12.2.7 6.9 7.4 8.9 13.4 10.6l3.3 1q25.4 8.8 45 27.3l.4.2.3.4.4.3c3.6 3.5 5.6 5.4 11.5 5.2 6-1.4 10.2-6.6 8.8-12.9a10 10 0 0 0-1.6-3.7 140 140 0 0 0-27.3-22.4M224.3 85.7q-3-1.3-6.1-1a150 150 0 0 0-59.6 31.3c-3.2 2.8-7.7 6.6-10 10.1-4.8 7.6 2.9 17.6 11.5 15.5 3.7-1.2 7.4-4.6 10.7-7.6a135 135 0 0 1 9.5-7.9c14-10 27.2-15.9 43.7-20.8 5.2-1.6 8-8.3 6-13.6q-1.6-4.2-5.7-6m-85.8 318.8a5.3 5.3 0 1 0-10.5 1.6 5.3 5.3 0 0 0 10.5-1.6m239.2-4.4a5.3 5.3 0 1 1 1.7 10.4 5.3 5.3 0 0 1-1.7-10.4" clip-rule="evenodd"/>',
      },
      {
        id: "crankset",
        label: "Crankset",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M254.2 30.5h1.7c4.8 0 8.7 2.9 10.2 7.5.7 2 .6 4 .6 6.2v.5a146 146 0 0 1 17.6 2.3l.4-2c1.5-6.1 6.6-11 13.3-9.2q4.5 1.2 6.7 5.2c2.2 4.1 1.3 7.4.2 11.5q8.3 3 16.3 6.7l.5-.8c2-3.4 3.6-6 8-7.4q4.1-1 7.8 1.1a11 11 0 0 1 5.1 6.9c1 4.4-.7 7.4-2.9 11 4.6 3.1 9.9 7.1 14 10.8l1.4-1.6c4.6-4.7 11.6-6 16.5-1q3 3.4 3 7.8c-.2 4.5-2.8 7-5.7 9.7 4 4.9 7.2 8.8 10.7 14l1-.5c3-1.8 5.7-3.4 9.8-2.5q4.4 1.2 6.9 5 2.3 4 1 8.3c-1.1 4.3-4.3 6.3-7.9 8.3 2.6 5.8 4.6 10.6 6.8 16.5 3.8-1.4 7.4-2 11.2 0q3.9 2.1 5.2 6.5c.8 2.8.4 5.8-1.1 8.2-2.4 3.8-5.9 4.9-9.9 5.8 1.1 3.7 2 13.7 2.2 17.6h1.1c3.7 0 7 .1 9.9 3 4.4 4 4.7 10.9.3 15-3.5 3.3-6.8 3.4-11.3 3.4q-.5 8.8-2.3 17.4c4.4 1.1 8.2 2.2 10.4 6.6q2 4 .5 8.4c-1 2.7-3.2 5-5.9 6-3.6 1.6-6.9.9-10.4-.6-2 5.8-4.1 11-6.9 16.6l1.7.9c3.2 1.8 5.6 4 6.5 7.6.8 2.7.3 5.7-1.3 8.1a11 11 0 0 1-7 4.9c-4 .8-7.3-1-10.5-3a128 128 0 0 1-10 13.2l-.2.3-.5.6.3.3.2.1.1.2c5 4.6 7.5 11.7 1.9 17a11 11 0 0 1-8 3.1c-4.3-.1-7-2.8-9.7-5.8-2.5 2.4-7.4 6.1-11.2 9l-2.8 2.1 1.1 1.7q2.9 4.2 1.7 9.1a11 11 0 0 1-13.4 7.7c-4.2-1.3-6-4.4-7.9-8-5.8 2.7-16.4 7.1-22.5 8.6v94.8c0 5.6.1 11.2-1 16.7a43 43 0 0 1-43.3 33.7c-11-.2-21.4-5.3-29-13.1a42 42 0 0 1-11-20.5c-1.2-5.2-1.1-11.6-1.1-17.2v-45.9q-.2-24.3 0-48.1c-6.8-2-16-6-22.5-9l-.7 1.4c-3.2 6-9.3 9.2-15.6 5.6a11 11 0 0 1-5-6.7c-1-4.3.7-7.4 2.8-10.9q-7.2-5-14-10.7c-2.7 2.8-5.8 5.5-10 5.5-3 0-6-1.2-8-3.4a11 11 0 0 1-1.4-12.3c1-2 2.5-3.3 4-4.8l.3-.3c-3.3-3.5-8.2-10-10.7-14-3.6 2.1-6.7 4-11 2.9a11 11 0 0 1-6.8-5.1 10 10 0 0 1-1-8.1c1.3-4.4 4.4-6.2 8-8.2a120 120 0 0 1-6.7-16.6c-4 1.7-8.2 2.3-12 0a10.6 10.6 0 0 1-3.1-15c2.3-3.5 5.7-4.5 9.6-5.3-1.1-6-2-11.3-2.3-17.5-4.2 0-7.6 0-11-3q-3.1-3-3.4-7.2 0-4.6 3-7.9c3-3.2 6.8-3.2 10.9-3.2h.5c.1-4.5 1-13.6 2.2-17.8-4.4-.5-8.5-2.5-10.4-6.7a10.6 10.6 0 0 1 5.7-14.2c3.6-1.5 6.6-.8 10 .6l2-5.1c1.5-3.8 2.8-7.2 5-11.5l-1.9-1c-3-1.8-5.3-4-6.2-7.5-.7-2.8-.2-5.8 1.3-8.2a11 11 0 0 1 6.9-4.9c4-1 6.5.6 9.6 2.5l1 .6c3.7-5.5 6.5-9 10.8-14.1l-1.1-1c-5-4.5-6.7-11.4-1.6-16.6q3.3-3.1 8-3c4.5.1 7 2.6 9.8 5.7 5.1-4.3 8.6-7 14-10.8-2.1-3.4-3.8-6.6-2.9-10.8q1-4.4 4.8-6.8c2.3-1.4 5.2-2.1 7.8-1.4 4.6 1.2 6.2 3.9 8.4 7.4l.4.8q8.1-3.6 16.2-6.6l-.6-3c-.7-3.4-.6-6.6 1.5-9.5q2.6-3.7 7.1-4.5c7.4-1.2 11.6 4.9 12.7 11.4l8.3-1.1 9.3-1.2c0-7.4 1-12 9-14.2m110.7 112c7.3-7.7 1.7-18.5-8.7-18.2-2.9.6-7.6 3.5-11.4 5.7l-3 1.8-35.8 20.5-1.7 1-1.4.8-14.8 8.5c-5.7 3.2-9.4 1.1-13.7-1.3a36 36 0 0 0-36.7 0c-3.3 1.7-6.7 3.5-10.5 2.9-3-.9-8.3-4-12-6.4l-2.4-1.3-29.2-17-13-7.5-2.8-1.6c-3.4-2.1-7.3-4.4-10.7-5.4s-9.6 1.2-11.5 4.2c-2.8 4.5-1.2 12.2 3.4 15l16.8 9.7 31.6 18.3 4 2.3q7.3 3.8 14 8.4c4.5 3.2 4.3 15.2 1.7 19.5-.8 1.3-3 2.9-4.3 3.7L195 216.5l-34.2 19.8-3.2 1.7c-4 2.1-9 4.9-11.2 7.3a10 10 0 0 0-2.7 8c.4 3 2.2 5.8 4.6 7.5q3.4 2.6 7.8 2a107 107 0 0 0 18.5-9.8l3.6-2.2 30.7-17.7 2.7-1.6q5-3.2 10.2-5.4c2.2-.8 5.8.3 7.8 1.6 5.5 3.5 5.3 10 5.1 16.1v189.8q-.3 4.7.2 8.9a21.3 21.3 0 0 0 42.1-.1c.4-4.4.4-9.5.3-14.2v-178l-.1-3.6c-.3-8.8-.6-20 10.7-20.4a16 16 0 0 1 8.3 2.9l11.4 6.6 2.5 1.5q16 9.4 32.2 18.6l2.1 1.3c3.6 2 9 5.3 11.4 5.7 9.7 1.8 17.2-11.9 8.8-18.4a96 96 0 0 0-12.5-7.6l-4.5-2.6-37.9-21.7-3.3-1.8c-3.9-2-8.3-4.4-10.9-7.2-1.3-1.4-2-4-2.2-5.9-.5-4.6-.6-10.4 2.6-14a89 89 0 0 1 17-10.7l4.2-2.4 34.9-20 3.4-2c3.5-1.8 7.5-4 9.5-6M254.5 428.3a10.7 10.7 0 1 1 3 21.1 10.7 10.7 0 0 1-3-21.1M255 167a26.6 26.6 0 1 1 1.8 53.2A26.6 26.6 0 0 1 255 167m-2-69.4a96 96 0 0 1 65.4 22.9l-37.7 21.7-3.8-1.6c-5.8-2.5-9.9-4.3-17.2-5.3a51 51 0 0 0-28.3 7.2q-8.7-4.8-17.4-10-10.2-6.2-20.4-11.7l4.2-3.2q3-2.5 7-5a95 95 0 0 1 48.2-15m2.5-32h-1.8a127 127 0 0 0-89.5 39c3.8 1.3 6.7 2.7 10.1 5 20-21.8 55.4-34.4 84.6-33.3q5.9.2 11.8.9a115 115 0 0 1 66.9 32.2v.1c4-2.2 6-3.3 10.3-5a128 128 0 0 0-92.4-39m-122.5 93a50 50 0 0 0 9.4 6.4 118 118 0 0 0 0 57.4q-2.2 1-4.2 2.3l-4.1 2.9-1.2.9a131 131 0 0 1 0-69.9m59 35-30.2-17.3a100 100 0 0 0 0 34.7l7.5-4.4a313 313 0 0 0 14-8.2zm21.1 61.7c.5.5.4 16 .3 22v2.1q-6.2-3-11.9-6.9-3-2.1-6-4.6l-1.8-1.4q6.1-3.3 12.7-7.3zm-30.3 30-2.6-2.3a38 38 0 0 0-6.1-5 58 58 0 0 1-10 4.8l10.4 9.4a123 123 0 0 0 38.9 22v-11.6c-7.6-1-24.4-12.4-30.6-17.3m155-7.4 3.8 1.9c1.8 1 3.5 2 6.3 3a127 127 0 0 1-49 31.3v-11.5c2-.2 4.8-1.6 7-2.6l1.2-.6a115 115 0 0 0 30.8-21.5m-32-18.5q-3.4-2.1-7-4v24a59 59 0 0 0 11.4-6.5l.7-.5.2-.1c2.8-2 4.8-3.5 7.4-5.7q-2.7-1.2-5.5-3l-1.7-1zm44.3-83.2.4.3a106 106 0 0 1 0 34.8 233 233 0 0 0-17.6-10.3l-3.5-2.1-9.5-5.4c2.3-1.1 5.3-2.9 7.9-4.4l2.7-1.6zm31.2-8.6-.2-.7a49 49 0 0 0-2-8.2 39 39 0 0 1-9.3 6h-.1a119 119 0 0 1 0 57.8 31 31 0 0 1 9.5 6.4l1.1-5.2 1.8-8.5q4-23.9-.8-47.6M255 188.3a5.3 5.3 0 1 1 2.2 10.4 5.3 5.3 0 0 1-2.2-10.4" clip-rule="evenodd"/>',
      },
      {
        id: "bottom-bracket",
        label: "Bottom bracket",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M323.2 62.1c3.3-.2 8.8.1 12.1.5 34.8 4.2 65.6 25.7 87 52.5 25 31.4 42.9 83.6 9.5 115.9l-7.4 7.4-7.5 7.5-6 6q-6 6.3-12.3 11.8c-14.9 11.9-33.4 13.6-51.6 11.4l-9.3 9.4q-14 13.7-27.7 27.7-17.3 17.4-34.9 34.6l.8 9.7c.7 15-3 32.4-13.4 43.6q-5.1 5.5-10.6 10.8-5 4.8-9.7 9.7c-16.3 17.4-27.6 28-52.8 29.2-4 .4-10.3.2-14.1-.4-34-4.7-65.8-27.2-86.6-53.6-17.2-22-29.8-51.8-26.1-79.9a58 58 0 0 1 13.6-30.6c3.6-4.2 8.5-9 13-13.4l8.4-8.5c5.6-5.6 12-12.1 17.3-16.3 13.7-10.6 33.3-12.5 50-10.1 2.1-2.3 4.8-5 7.2-7.3l2.5-2.5 16.6-16.6 45.7-45.5-.8-9.2c-1.5-30.9 12.7-44.5 30.5-61.5l13-12.8A58 58 0 0 1 323.1 62m-26.5 79.4-1 .1c-2.9.2-5.6.7-7.8 2.6a145 145 0 0 0-10 9.7l-19.6 19.7-70 70c6.1 1.8 15.7 7.2 21.1 10.7a153 153 0 0 1 57.8 66.1l1.3 3q8.9-9.2 18.5-18.7l7.8-7.7 47.8-47.8 17-17 1.9-1.8q3.8-3.7 7-7.4c1.7-2.2 2.2-6.1 2-9-.8-17.6-15.2-37-27.7-48.8a91 91 0 0 0-36.2-22.2c-3-.8-6.7-1.6-9.9-1.5M151 257.4c17.6-.7 38.4 8.5 52.5 18.6 23.7 17 45 43.8 50.3 73a49 49 0 0 1-4 32q-1.7 3-3.9 5.8l-.6.9v-3.2q1.1-2 2.5-3.3c1.2-1.3 2.3-2.5 2.9-4.9q1-4.4-1.5-8.2c-2-3.2-4.7-4.2-8.2-5l-2-5.3q-2-5.3-4.3-10.5l-.1-.2c6.1-6.1 7.8-14.5-1.5-19.5-3-1.6-6.5-.7-9.5.6a183 183 0 0 0-10.7-13.9c3.7-4.5 4.6-10 .6-14.8a10 10 0 0 0-7.4-3.7c-3.5-.3-6 1.1-8.5 3.4a155 155 0 0 0-13.6-10.6q1.2-2.8 1.3-5.8a10.6 10.6 0 0 0-11.3-10.3c-3.9.3-6.3 2.3-8.8 5-6.1-3-9.7-4.4-16.2-6.5-1.3-5.7-4.6-10.2-11-10-4.6.2-6.8 2.5-9.7 5.4q0 .3-.3.4h-3.3c7.6-7 16.3-8.9 26.3-9.4m-14.7 32.5c-4-1-12-2.5-15.8-2-11.4.9-20.8 2.8-28.8 12-7.4 8.4-9.1 20.3-8.1 31.2 2.5 27 21 54.2 41.2 71.3 17.4 14.8 39.6 26.6 62.8 26.3a37 37 0 0 0 26.5-10.1 39 39 0 0 0 9.9-29c-.9-25.7-16.2-51-34.2-68.6a119 119 0 0 0-53.5-31.1M124.7 306c13.4-1.4 32.7 9.8 43.1 18.3 17.2 14.2 34.7 34.9 37.9 57.6 2 15.1-6.8 27.3-22.2 28.8-34.4.7-78.6-43.6-82.1-77.7-1.6-15.4 8-26 23.3-27M316 84.1q.4.6.7 1.9c.3 1.3.7 3 2.4 4.5 8.3 7.5 14.3 1.3 20-4.6l1.1-1.2 3.5 1c3.4 1 6 1.8 10 3.4a11 11 0 0 0 1.2 14.4c2 2 5 3 7.8 2.8 4.7-.4 7.9-3.9 10.7-7.1l4 2.9 1.5 1 8.3 6.3c-2.7 2.8-5 5.6-5 9.7q0 4.2 3 7.2c5.6 5.7 12.1 3.5 17-1.5 4 4.6 7 8.8 10.5 13.7-2.8 2.7-6.3 6-6.9 10-1.3 9.6 9.6 15.5 17.1 9.7 1.8 5 2.9 8.4 4.2 13.6l-1.3 1.2c-5.6 5.4-10.9 10.6-5.3 18.9a11 11 0 0 0 7.3 4 38 38 0 0 1-8.5 17.3c-2-29.1-16-55.3-35.4-76.8-20.8-23-53.7-42.4-85.3-43.7a35 35 0 0 1 17.3-8.6m-14 30.1c-2.6-.3-6.2-.6-8.8-.3-7.4.5-12.6 1.1-19.1 5-10.4 6-14 14.2-16.5 25.4l10.6-10.7c9.5-9.5 15.8-13.7 30-13.6 42.4.5 101.6 60.5 92.8 103.6-2.6 10-5.8 13.2-12.6 20l-.8.9-9.7 9.7a33 33 0 0 0 23.6-13.7c6.9-9.4 7.7-24.2 5.5-35.3-6-30-28-57.1-53-74a95 95 0 0 0-42-17m-178 213.3c4.2-.1 8.8.8 12.8 2.6a96 96 0 0 1 45.5 46c1 2.4 3.4 9.4 2.2 12.2q-.5.7-1.3 1h-.4l-1.2.2c-15-1.8-31.3-14.9-41.2-25.8-7.5-8.2-17.5-22.6-17.6-33.8q0-1.5 1.2-2.4" clip-rule="evenodd"/>',
      },
      {
        id: "chainring-guard",
        label: "Ring guard",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M245.9 53.5a202.7 202.7 0 1 1 20 405 202.7 202.7 0 0 1-20-405m-27.6 87.2q-.4-2.2-1.3-3.7a124 124 0 0 0-80 80.3q6.4 1.4 13 3.4 5 1.6 10 2.7c10.7 2.6 10.7 7.8 10.7 16.6v30.1l-.1 7.7c-.4 8.1-8 10-14.9 11.8l-2.8.8-15.7 4.4q2.9 8.1 6.5 15.9a124 124 0 0 0 60.8 59.3c3.1 1.4 5.6 2.4 8.3 3.3l4.5 1.7q1.3-5.2 3-10.7l2.6-9.9c3.2-13 6.6-13 18.3-13H261q9.8-.1 19.2.5c1.9.2 5.5 3.2 6.1 4.8a164 164 0 0 1 5.8 18.7l2.6 9.4.6.2q10.6-4 20.6-9.2a125 125 0 0 0 59.1-71.1c-4.9-1.2-10.2-2.7-15-4.1l-3.5-1c-5.1-1.2-11.3-2.8-13.6-6.8a11 11 0 0 1-1.4-4.4c-.2-1.7-.2-4.4-.2-6.5v-20.5q-.2-10 .4-19.6c.2-2.1 3-5.5 5-6.4a93 93 0 0 1 14.2-4.4q4.2-1 8.2-2.2l5.9-1.5a126 126 0 0 0-62-72.4c-4.7-2.4-8.2-3.7-12-5.2l-6.3-2.5q-1.2 5.3-2.9 10.7l-1.2 4.1-.8 3.4c-.9 3.3-1.7 6.8-3.2 9.6a9 9 0 0 1-3.4 3.8q-2.2 1.5-4.9 1.8c-4 .5-42.8.5-45.8-.2a11 11 0 0 1-6.7-4.5 107 107 0 0 1-6-19l-1.2-5zm218.9 108a181.4 181.4 0 1 0-362.6 14.6 181.4 181.4 0 0 0 362.6-14.6m-170.8-126a10.7 10.7 0 1 0-21.1 3.4 10.7 10.7 0 0 0 21-3.4M134.9 254.4a10.6 10.6 0 1 0-21 3.4 10.6 10.6 0 0 0 21-3.4m87.5-143.6c5.7-.4 10 2.3 11.8 7.7q1.5 4.9 2.8 10l.7 2.4 5.2 18.6h26.3l5.7-20.8.8-3.1c.7-3.3 1.6-6.8 3.1-9.5 1.3-2.2 3.9-4 6.3-4.7 9-2.3 37.4 11 45.8 16a151 151 0 0 1 69.7 92.7c2.3 9.2-2.3 13.4-10.6 15.4l-12.4 3.3q-7.5 2.2-15 3.9.3 9.1.2 18.7v7.9a279 279 0 0 1 15.7 4.3l6.4 1.7q6 1.3 11.2 3.7c7.3 3.9 5 11.8 3.2 17.8v.1l-.2.6A150 150 0 0 1 290 401q-4.3.7-8-1.5c-4-2.5-5.6-9.4-7-14.9l-1-3.6c-1.6-5.7-3.5-12.2-4.8-18h-26.5q-1.5 6-3.4 12.2l-1.6 5.7-.9 3.4c-1 4.1-2.3 9.4-4 12-1.3 2.3-4 4-6.6 4.6-6.7 1.5-27.7-7.1-34.4-10.4q-6.8-3.2-13.2-7.3a149 149 0 0 1-67.2-91.7c-2.9-11.7 7.1-14.2 16-16.4l5.3-1.4c4.7-1.5 11.8-3.6 16.5-4.5v-26.6q-6-1.2-12.4-3.3-4.6-1.4-9-2.5c-15.4-3.7-20-5.7-15.1-22.3q5.2-18.1 14.8-34.4a151 151 0 0 1 64.8-59 159 159 0 0 1 30-10.4M398 254.4a10.7 10.7 0 1 0-21 2.6 10.7 10.7 0 0 0 21.2-2.6M266.6 385.6a10.7 10.7 0 1 0-21 3.6 10.7 10.7 0 0 0 21-3.6" clip-rule="evenodd"/>',
      },
      {
        id: "derailleur-front",
        label: "Front derailleur",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="m281 64-3.8.1c-5.6.5-10.2 3.7-10.5 9.8q-.3 9-.2 18v104.4l.2 18.1c.3 6 5.2 9.3 10.7 9.8q-.3 7.4-.1 14.9v32.6l-170.8 92.1-53.3 28.7-16.6 9-2.6 1.3c-5 2.5-10.7 5.4-12.1 10.4-1.9 6.5 2.4 12.4 8.9 13.6l8.7 2 8.6 1.8 33.5 7.4 26.8 6 7 1.6a41 41 0 0 0 14.1 2c3-.5 5.7-2 10.8-4.7l8.4-4.4 44-22.7a953 953 0 0 1 43.6-20.8 353 353 0 0 1 144-32.1q7.3-.2 15-.2c16.7 0 33.8 0 49.2-6.7 6.6-2.9 12-7.9 17.5-12.7l5.1-4.6c12.2-10.3 22.5-20.9 23.2-37.8q.5-12.3.3-24.7v-30.6q0-2.4-1-4.5a11 11 0 0 0-5.7-5.6c-3.2-1.2-19.8-1-29.1-.8h-49.5v-32.4l3.2-.1c9.5-.2 18.3-.3 18.1-13.2v-7.5h20.6l3 .1c5.6.2 12.3.4 16-3.4q2-2.2 2.8-5c.6-3.1.5-7.4.4-11.4q-.2-3-.1-5.7v-15.9c0-12.6-9.6-12.5-18.3-12.3h-24.4v-2.7c.3-8.7.6-18.1-11.6-18.5h-9.7V82.8c.2-5.3.4-12-3.1-15.6a9 9 0 0 0-5.4-2.9q-5.9-.5-12-.4H281m28.6 21.3H384V114c-.2 14.9 8.6 14.5 19.3 14.1h2V181l-4.6.1c-4.8 0-9.2.1-13.3 3.3-4 3.6-3.7 10-3.5 15.5v2.8H288V85.3zM384 224.1h-32v2.6q.2 7-.7 14c-2.6 16.3-16 23.6-29 30.8l-3.2 1.8-30.2 16.5-13.4 7.1-109 58.9L97.3 393l-22.4 12-3.2 1.8q-5 2.8-10 5.2c2.7.2 6.6 1 10 1.8l3.8.8q14.5-7.4 28.7-15Q118 392 132 385l15-8q16.5-8.8 33-17.2a777 777 0 0 1 70.8-31.9h.1q9.3-3.9 19-7.1A417 417 0 0 1 401 298.7c2.5-1.8 6-4.8 9-7.5l3.4-3 25.7-22 2.7-2.3c3-2.7 7-6.2 9.2-7.7-4-.3-8.7-.2-13-.2h-30.1l-4.4.1c-10 .3-20.1.7-19.7-13.4v-8zm-85.3 0h32v8c.3 8.6.3 9.1-12 16.7l-9 5.2-11 6.2c.2-9.1.2-18.9 0-28.3zm170.6 45.2-.3-.4q-11.6 9.7-23 19.8l-23.2 19.9a130 130 0 0 1-12.7 10.3 75 75 0 0 1-18.6 1.5h-2.8A389 389 0 0 0 248 352.1a1056 1056 0 0 0-86.7 41.6l-36 19.2-3.7 2c-4.7 2.5-10 5.4-14 7.2a61 61 0 0 1 9.3 1.8c3.5.8 7.3 1.6 9.8 2.4q29.4-15.6 59.2-30.5a576 576 0 0 1 100-41q26.8-7.4 54.4-10.5a506 506 0 0 1 49.5-2.9c14.6 0 33.5-.2 43-3.5a25 25 0 0 0 6.6-3.3c2.8-2 7.6-6.3 10.3-9l4.3-4c5.5-4.8 12.6-11.1 14.2-16.3a51 51 0 0 0 1.1-15.9zm-42.6-120H448v10.6h-21.3z" clip-rule="evenodd"/>',
      },
      {
        id: "derailleur-rear",
        label: "Rear derailleur",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M103.5 57.9a41 41 0 0 1 26 7c11.8 7.8 13.3 15 15.7 27.2l.5 2.4 34.5 34.7h73.7c13.7 0 22.7.2 30.9 12.8a28 28 0 0 1 18-12c3.9-.8 9.3-.8 13.7-.8h79c14.5.1 28.4 6.3 38.3 16.8 13.1 14 15.2 28 14.6 46.2-.7 24.8-4.2 46.6-25.8 62a259 259 0 0 1-37.9 21.4l-3.4 1.7a1406 1406 0 0 0-56.4 29c-17 9-31.8 17-46.3 30.7l2.6 2.8.6.7c5.3-3.5 11.7-2.6 15.3 2.9 1.5 2.3 2 5.3 1.3 8-.8 3.6-3 5.7-6 7.4a57 57 0 0 1 3 22h.2c5.9 1.5 9.8 6.6 8.5 12.8q-1 4.3-4.7 6.8c-3.5 2.1-6 1.6-9.6.9a59 59 0 0 1-13.3 17.7c3 4.9 2.3 10.6-2.2 14.3a11 11 0 0 1-8 2.4c-4.2-.5-6-2.7-8.3-5.8l-.3-.3c-1.8.8-4.3 1.5-6.3 2q-.7 2.6-1.2 5.6c-.8 4.4-1.6 9.1-3.9 12.3-4.2 4.4-10.8 4.6-16.7 4.7h-.3a77 77 0 0 1-55.7-21.5c-17.2-16.5-18.9-36-19.6-58l-13-5.3-.6-.2-7.5-3.2c-6.5-2.6-9.2-8-6.9-14.6l5.6-15.5 12-33.2c4.6-12.2 11.3-9.8 20.2-6.5l2.3.8c13 4.6 29.5 8.5 43.2 4.5 19.2-5.7 36.4-18.2 52.7-30.2l8.1-5.9q4.5-3.1 8.8-6.5l11.1-8.1q2.6-1.8 6.5-5c4.8-3.8 10.4-8.2 13.2-9.5-10.5-1.3-14.2-1.9-22-9.4-3.7 10.4-9.6 17-21 19.2q-1 .3-2 .3l-3.7.2h-79.7c-10 0-16.6-.5-24.1-8-7.7-7.7-7.6-16.6-7.5-26.3v-22.8l-34.6-34.7-9-9-1.7-1.7c-3.2-3.4-4.4-4.7-10.4-5.4-17.5-2-28.7-17-30.3-34.1a42.5 42.5 0 0 1 39.8-46.7m108 92.5q-18.5-.1-36.1.2c-3 .5-4.1 2-4.2 5.2V212q-.2 5.2.4 10.2c.3 2.2 2.9 3 4.8 3q7.4.3 14.8.1H255c2.9.1 6.1.1 8.7-.3 3.7-.6 3.6-5.7 3.5-8.5v-.4a165 165 0 0 0-18.3-1.5c-3.9.1-7.6.2-10.6-3-1-1-2.7-3.4-2.8-4.8q-.7-10.4-.5-20.7v-11c0-4.2.4-8.1 3.6-11 2.7-2.7 7-2.8 10.7-2.9h2.6q7.8-.5 15.3-2.6v-.2c0-4.5 0-7.7-5.4-7.7h-33.7zm95.5.2h77.4l2.7-.1c5.3 0 10.5 0 15.7 1a30 30 0 0 1 15 8.4 33 33 0 0 1 9.3 23.7c0 31.4-22 31.1-45.3 31l-5.2-.1h-70.9l-2.3-2.5a44 44 0 0 0-6.5-6.2c-9.4-6.2-24.8-8-36.6-9.4l-3.8-.5v-15.2c24.5-2.9 32.4-5.4 46.4-27.2q1.6-2.1 4.1-3m16.5 21.3h-1.9c-2.8 0-7 0-8.7.2-3.3.3-5.6.9-8 3.6a11 11 0 0 0-2.4 8 11 11 0 0 0 4.2 7.3c3.5 2.6 9.3 2.5 14.1 2.3h74.8c3.3-.6 7-2.2 8.6-5 4.3-8-.7-16.3-9.7-16.2l-9.3-.1h-61.7m89.9 62h-.3c-10.6 2.3-16.7 2.1-25.5 2h-.8l-6.4-.1-15.4-.3-19.5-.2c-8.4 6-17.2 12.7-25.5 19l-3.4 2.6-17.4 13.1-2.3 1.9h-.2a554 554 0 0 1-50 35.8 98 98 0 0 1-23 11.2 82 82 0 0 1-37.6 1.4 168 168 0 0 1-24-5.9l-12.8 35.3 4.1 1.7c5.1 2 10.8 4.3 15 6.9 4.4 2.8 3.6 10.5 3.1 14.8-.7 8 .5 16.4 3.5 24 10.7 25.9 28.4 33.2 54.9 33.2l10.5-52.8 1.3-6.8c1.5-7.5 3.2-16.6 4.9-22.2q2-6.6 5.5-12.6c11.9-20.1 33.2-32 53-43l1.3-.8 1.5-.8q21.8-12.2 44.1-23.4l4.4-2.2c15-7.3 55.6-27.2 57-31.8m-189.5 92.5c8-1.3 19.6 1.3 18.8 11.7a78 78 0 0 1-2.6 13.5l-4.9 24.1-6 29.7-.5 2.7c-.7 3.9-1.6 8.3-2.7 11.7-1 2.1-3 3.8-5.2 4.4-6.2 2-14-2-19.3-4.9a49 49 0 0 1-24.8-38.7 50 50 0 0 1 12.1-36.8 52 52 0 0 1 35.1-17.4m-120.2-247a20.7 20.7 0 0 1 23.5 20.7c.2 2.9.3 5.7 2 8.1q2.1 2.6 4.5 5h.1l.4.3.7.7 8.8 8.8 3.1 3.2a183 183 0 0 0 10.7 10.4c-6.8 7.2-7.9 13.2-7.8 22.7l-5.8-5.9-19-19-.1-.2-2-2v-.1c-2.7-2.7-6-6-8-7.7l-2.2-1.4a17 17 0 0 0-6.6-1.3l-1.5-.1c-25.6-2.1-26.5-39.2-.8-42.2m12.8 19a10.7 10.7 0 1 0-20.9 4 10.7 10.7 0 0 0 21-4m98.3 259.2h-.2c-15.8 2.3-22 18.2-10.4 30a14 14 0 0 0 6.1 3.3q1.5-6 2.6-12.4l1.7-8.4c.5-2.2 2.2-10.5 2.2-12.3q-1-.5-2-.2m52-2 .7.9a34.6 34.6 0 0 1-6.8 47.6l-4.5 2.8 4.2-21q3-15.4 6.3-30.2" clip-rule="evenodd"/>',
      },
      {
        id: "hanger",
        label: "Hanger",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="m217.9 35.4 1.3-.1H350q7.8-.2 15.4 0c2.6.2 4.4.9 6.3 2.6 3.6 3.4 3.6 7.4 3.6 12v70.7c0 16 0 29.4-4 45.8-5 19.4-14 35.7-23.7 52.8l-3 5.6-15 25.7-13.5 23.4-4.8 8.2c-5.8 9.8-11.9 20-14.2 30.7-1.8 7.9-1 15-.2 22.4q.6 5.3.8 10.8a81 81 0 0 1-37.5 70.1l-2.7 1.6c-3 1.6-6 3.2-8.1 5.7-3 3.3-1.8 25-1.3 34l.2 2.7v1.1c.2 4.3.5 8.8-2.7 12.2-2 2-5.3 3.3-8 3.3-1.8 0-4-.5-5.4-1.6a99 99 0 0 1-10.7-10.2l-3.6-3.7-28.6-28.5-18-18-.2-.3c-13.3-13.2-22.9-22.7-29-41.2a81 81 0 0 1-1-46.8c3-10.8 7.2-18 12.5-27.2l1.2-2 11-19.1 55.2-95.6 17.7-30.5 2-3.4c3-5.2 7-11.9 8.7-16.1a31 31 0 0 0-9.7-36 31 31 0 0 0-36.4-3c-6.6 3.5-10.1 9.5-13.6 15.5q-2.7 4.7-6 9a27 27 0 0 1-37.6 3.4 27 27 0 0 1-8-28.7 108 108 0 0 1 16.6-27A87 87 0 0 1 218 35.3m10.2 21c-3.4 0-7.6 0-10 .2A63 63 0 0 0 172 78.4a96 96 0 0 0-14 22.5c1 3.8 1.8 4.7 5.7 5.7h.1c.8-.3 2.6-.9 2.9-1.3q3.3-4.4 5.7-9c2-3.4 3.8-6.9 6.6-10a53.4 53.4 0 0 1 88.4 58.5c-1.9 3.8-4.5 8.3-7 12.4l-2.2 3.9-16.3 28.2-52.8 91.5-14 24-2.2 4c-4.2 7.1-8.3 14-10.8 22a59 59 0 0 0 .5 36.2c4.5 13.2 12.2 20.9 21.5 30l1.6 1.6 26.1 26.2 4.2 4.1 10.6 10.7c-1-10.8-.2-21.8 7-30.5a39 39 0 0 1 12-9.2l6.7-4.2a59 59 0 0 0 23.6-56.5c-1.1-10.6-2-18.4.4-30.3 2.9-14.5 9.5-25.6 16.7-37.7l3.7-6.4 29.8-51.5 3.8-6.7a186 186 0 0 0 20-42.9 139 139 0 0 0 3.6-39.4V114q.2-13 0-26.2-.2-15.8.1-31.3l-92 .3-30.7-.3zM216.4 300a48 48 0 1 1 3 95.8 48 48 0 0 1-3-95.8m95.4-230.7a26.6 26.6 0 1 1 5 52.9 26.6 26.6 0 0 1-5-53m-20 87.2a26.6 26.6 0 1 1 5.8 52.8 26.6 26.6 0 0 1-5.7-52.8m2.7 21.2a5.3 5.3 0 1 1 .5 10.6 5.3 5.3 0 0 1-.5-10.6M319 93.7c-1.2-2.4-3.5-3.3-6-3.2-1.7.9-3 1.8-3.8 3.6q-.7 2 .2 4c1 2 3.5 3 5.7 3.1 1.9-.8 3.3-1.5 4-3.6a5 5 0 0 0-.1-4M216.6 321.4a26.6 26.6 0 1 1 2.4 53.2 26.6 26.6 0 0 1-2.4-53.2" clip-rule="evenodd"/>',
      },
      {
        id: "shifter",
        label: "Shifter",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M162.6 25.6c7-.8 14.3.6 21 2.6 16 5 26.9 16.6 34.8 30.9q4.5 8.7 8.2 18.6c4.6 11.8 9.2 23.7 18 32.1 6.8 6.6 19.9 6.5 29.4 6.4h20l86 .3 13.6-.1q13.2-.2 26.3 0c3.7.2 8.9 1.8 11.7 4.3 12.4 11 3.4 22.2-4.4 31.8l-2.5 3.1-17.6 22.6a9819 9819 0 0 1-67 83.8c-5.4 6.8-10.7 13.3-20.1 14.1-5.8.5-10.6-1.3-15.6-3.2l-4.1-1.5q-14.3-4.6-28.4-9.7l-9-3-8.3-2.8a1089 1089 0 0 1-36.5-13.4l-14-5.6-4.7-2c-10.7-4.3-13.4-10.7-14-21.9l-8.2-2.8-5.6-2-.2.2c-16.2 17.2-16.2 20.9-16.1 43.3v.5q-.1 12.2.1 24.5l.2 1q.3 3.1 1.2 6.1 2.6 6.6 6.3 12.3 2.8 4.4 5.1 9.3c8.1 17.9 8.7 36.4 8.7 55.6 0 10.7-.1 20-2.2 30.4-6.3 32-26 58.5-50.7 79q-6.7 5.9-13.9 11l-2.5 1.8c-10.4 7.8-23.9.4-30.1-9.2a23 23 0 0 1-3.4-11.6c-.4-10.3 6.5-16.2 13.6-22.1q3.6-3 6.8-6.2c13-13.3 12.8-27.9 12.6-45.3v-.5L107 368a1890 1890 0 0 0-4.6-108.8c-.9-14-1.8-28.2-1.8-42.2 0-11.4 2.4-24 4.6-35.4l.6-3.6 1.6-7.6c2.1-10.1 4-18.6 2.6-30-.7-10.4-6.9-18.1-13-25.8q-3.4-4.2-6.5-8.5a26 26 0 0 1-3-18.8c2.2-10 14-17.6 22-22.6q-1-2.7-1.2-5.5c-.6-11.9 7.8-17.9 17.2-22.7a92 92 0 0 1 37.1-11m5.3 21.6c-1 0-4.4 0-5.3.2a80 80 0 0 0-32.5 11l10.7 12.8 15.1 18 5.7 6.2q6.2 6.2 11.3 13.3a16 16 0 0 1 1.8 4c2.4 6.2 3.2 12 1.8 18.6q-1.7 7.3-5.3 14l-4.5 7.6c-4 6.4-8.5 13.6-9.5 19.1a10 10 0 0 0 1 7.2c2.1 3.5 9.6 5.7 17.9 8 10.5 3 22.5 6.5 27 13.7 2.2 3.4 2.9 6.8 3.5 10.5l.7 3.3q17.6 7.7 35.6 14.1a1217 1217 0 0 0 43 15.3l10.7 3.5c7.2 2.4 14 4.6 21.6 7.6l14-17.1 5-6.4q25.6-31.5 50.6-63.3l16.1-20.7 2-2.5c2-2.7 4.5-6 6-7.7H275.5c-7.5.1-14.1.2-22-1.3-22-4.2-33.1-18.8-41.6-38.1l-4.4-11C200.1 67.9 192 47.1 168 47m7 112.4a10.7 10.7 0 1 1 3.4 21 10.7 10.7 0 0 1-3.3-21m-53-77.1c.5 0 8.5 9.6 13.5 15.6l3.9 4.6 7.3 8.1 1.7 1.8c2.5 2.5 6.4 6.5 7 8.1 2.2 6.7-3.5 15.9-8 23.2l-3.6 6q-3.2 5.5-5.7 11.4a32 32 0 0 0 3.7 31.6q3.6 4.3 8.4 7.4c-16.6 18.6-16.7 34-16.1 57.4v6.9q-.2 7.7.6 15.5.8 6 2.8 11.7c1.9 5.4 4.6 10 7.2 14.6 3.3 5.7 6.6 11.4 8.2 18.4 3.2 13.8 3 29.7 2.8 44v2c-.5 30.8-15.4 55-37.3 75.8a154 154 0 0 1-21.3 17c-.8-.2-.9-.4-1.3-1l-.2-.1c.2-1 1.7-2.2 2.8-3l.6-.5a94 94 0 0 0 15.4-15 60 60 0 0 0 11.7-22.9c3-11.7 2.8-26 2.6-39.1l-.1-7.7q-.5-45.3-3.2-90.3l-2-33a556 556 0 0 1-1.2-32.2 180 180 0 0 1 5.7-41.3c3-13.8 5.4-25.3 3.2-40.6a63 63 0 0 0-17-35.4c-2-2.6-4.8-6-6-8l-.2-.4c4-4 8.1-6.7 12.7-9.7z" clip-rule="evenodd"/>',
      },
      {
        id: "cables",
        label: "Cables",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M152 175c.3-6.4.4-15.5-8.7-15-5.3.8-7.2 4.2-7.3 9.1v153.7c-.1 5.2-.2 10.8.4 15.5.8 5.9 11.2 8 14.1 2.2a20 20 0 0 0 1.6-10.2V328H184v1.7c-.2 6-.4 14 8 14.2a8 8 0 0 0 5.7-2.3c2.6-2.5 2.4-7.8 2.4-11.9V328h79.5c4.2 0 10 0 13.6.7q6.8 1.3 11.6 6.3c7.3 7.4 7.2 15 7.2 24v58.9l-.1 3.6c-.1 4.4-.2 9.3.7 13.1 1.3 5.5 10 7.5 13.4 2.7 2.5-3.7 2.3-11.1 2.1-17V416H360l-.1 3.4c-.4 8-1 21.1 8.1 20.6 5.4-.3 7.4-3.8 8-8.7V175.6c.2-4.6.4-10.3-2.3-13.3-2.8-3-9.2-3-11.6.3-2.7 3.6-2.4 12.2-2.2 18v3.4h-31.8v-11.5c0-3.7 0-7.5-2.5-10.2a8 8 0 0 0-10.2-.9c-2.7 2-3.5 5.4-3.5 8.5v14H200.2v-11.4c0-3.7 0-7.5-2.5-10.2a8 8 0 0 0-10.2-.9c-2.7 2-3.5 5.4-3.5 8.5v14h-31.8zm0 97h32q-.2 14.8 0 29.7V312h-32a1475 1475 0 0 1 0-40m32-72h-32v40h32v-10.7q-.2-14.7 0-29.1m16 0a1338 1338 0 0 0 33.9 0h78V320a38 38 0 0 0-16.6-7.2c-4.2-.8-10.2-.8-14.7-.8h-80.5q-.2-13-.1-26.2V200m71.9 54.3a16 16 0 1 0-31.8 3.4 16 16 0 0 0 31.8-3.4m88-54.2H328v39.8h32v-10.7q-.2-14.7 0-29.1M328 272h32v128h-32z" clip-rule="evenodd"/>',
      },
      {
        id: "handlebar",
        label: "Handlebar",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M0 248v33.6q.9 3.4 1.4 7t1.2 6.9C6.8 311.6 15 327 29.8 335.8a38.5 38.5 0 0 0 50.7-10.4l3.5-4.3q5-6 9.6-12.3 1.7-2.4 3.7-4.7 3.3-3.9 5.9-8a26 26 0 0 0 2.4-20c-4.8-17.3-23-24-38.3-16.4-4.4 2.2-6.7 5-9 8q-2 2.6-4.7 5.3c-.7-7.8-.4-22.2 1.5-29.5 4.1-15.7 30.3-18 43.6-19q12-.8 24.3-.5 8 .2 15.8 0h2c6.1 0 15.7-.2 20.7.4 2.3.3 6.6 2.3 10.8 4.3a53 53 0 0 0 28 6.1h109.4l11.4-.2a48 48 0 0 0 17.9-5.7q5.4-2.7 11-4.4c3-.9 7.8-.7 12.3-.5q5 .3 8.6 0h13.6l24.1.2c13 .5 32.5 2.6 43 10.9 5.4 4.2 6.5 13 6.8 19.4q.4 9.3 0 18.6-2-2.2-3.8-4.5l-3.6-4.1a26.7 26.7 0 0 0-45.6 19c0 8.4 3.4 13.6 8.7 20l7.6 9.7c10.6 14.1 21.7 28.7 41.4 28 28.6-1 44.8-29.9 48-55.2.2-1.3.5-3.1.9-4.3V250a60 60 0 0 1-1.3-7.4l-.4-3A80 80 0 0 0 500 211c-12-19.7-30.9-30-52.7-35.3a193 193 0 0 0-49-5H132.6c-15.5-.2-30.7-.3-46.4 1.2C49 175.4 13 191.8 3.3 231.3L2 238.7l-.2 1zm121-56h261.6c15.6-.1 32.1-.2 47 1.8 15 2.3 30 6.2 41.8 16.1 17.8 15 19.3 35.7 19.3 57.1 0 16.6-1.4 31.3-12.6 44.7-7.7 9.2-18.2 11.3-27.4 2.8q-5-5-9.3-10.9-2.6-3.5-5.3-6.7a193 193 0 0 1-8.4-10.5 8 8 0 0 1-1.1-3.4c.3-4.1 5.7-7.2 8.9-3.7q5.2 5.8 10 12.3 4 5.5 8.4 10.5c4.1 4.7 11.4 6.5 15.9 1.4 8.4-9.6 10.5-23.7 10.3-36 0-16.2-.4-35-12.8-47-17.5-16.7-47.7-17.8-70.4-17.8h-36.2c-5.4 0-11.3 0-16.3.8q-3 .8-5.5 2.3l-2.7 1.4-2.7 1.2c-4.9 2.2-11 5-15.6 5H312l-18.3-.2h-87.5l-4.5.1c-3.2.1-6.6.3-9.2 0a56 56 0 0 1-16.5-6.2l-3.4-1.7a27 27 0 0 0-13.5-2.6h-2l-25.8-.2c-31.3-.5-80.2-1.2-93.9 28.1q-2.7 6-4 12.7c-1.6 8.6-2 28.1-.7 37q.8 5.6 2.7 10.9c3 8.3 8.8 19.5 19.5 13.6a25 25 0 0 0 6.6-7.1q1.8-2.6 3.6-4.5 1.5-1.7 3.8-4.8c5.2-7.1 12.5-17 16.8-5.5-1 3.2-2.8 5.5-4.8 7.9l-.8 1q-3.9 4.6-7.6 9.4l-9 11.2c-7.5 8.6-18.5 10.2-27 2-14.4-14.3-15.1-31.6-15-50.6 0-18 1.6-36.3 15-50.1 4.8-4.9 9.5-8.6 15.7-11.4a132 132 0 0 1 52.6-10.3c5-.2 10.7-.2 16.1-.1" clip-rule="evenodd"/>',
      },
      {
        id: "grips",
        label: "Grips",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M160.3 69.7c-3.2-3.2-5.7-5.7-11.3-5.4q-3 .5-5.5 2.6l-8.2 8-2.3 2.5-17.4 17.2-32.8 32.8-4 4c-4.8 4.5-9.8 9.4-13.5 14.4-2 2.8-1 9 1.4 11.3q8 8.4 16.4 16.6l7.8 7.7 1.8 1.8c3.8 3.9 8 8.2 12.5 10.5q4.5 2.2 9.7 3.8 5.8 1.8 11 4.5c2.8 2 9 8.4 13.1 12.5l2.5 2.5 25.6 25.6 4 4q4.7 5 9.5 9.4L127 309.5l-15 15-2.2 2.2a52 52 0 0 1-21 15.2q-2.5.8-5.2 1.2-2.8.5-5.7 1.5c-5 3-13.7 10.9-13.8 17 0 5.1 5.7 10.5 10 14.6l2.4 2.2 18.8 18.8 31.4 31.3 15.4 15.4c8.7 8.4 15.3 1.4 21.5-5l1.4-1.5c2.8-3 3.2-5.8 3.7-9q.3-2.3 1-5a40 40 0 0 1 8.5-14.1q6.7-7.2 13.9-14.2l4.5-4.4 39.2-39.1 5.9-5.8c5-4.8 10.4-10.2 14.1-14.3l53.3 53.1 15.4 15.4 1.1 1c7.9 7.9 15.6 15.6 17.5 26.9 1 6.6 1.4 7.6 6.4 12.3l1.2 1.3c3.5 3.5 6.9 6.8 12.5 6.1a20 20 0 0 0 9-6.2l2-2 2-2 4.9-4.9 21.3-21.3 27.8-27.6 13.2-13.3c6.7-7 4.9-12.7-1.2-18.7l-1.5-1.5c-4.9-4.9-6-6-14.2-7.3-10-1.5-18-9.6-25-16.6l-.5-.5-.6-.6-11.6-11.6-38.3-38.3-6-6c-4.4-4.6-9.1-9.4-13.2-13.2l35-34.9 11-11.1 1.3-1.3c1.7-1.7 4.3-4.4 5.4-5.2a48 48 0 0 1 13.3-6.1c4-1.4 8-2.8 11.1-4.7 3.3-2 7.2-6 10.3-9.1l.9-.9.5-.5 12-11.9 3-3q5.6-5.2 10.5-10.7a11 11 0 0 0 2-6c.4-4.4-3-7.7-6-10.7v-.1L391 89.3l-14.8-14.8-8.2-8c-2.7-2.4-9-3.3-11.6-1q-10.7 9.7-20.8 20.2-5.7 6-11.5 11.6c-6 5.8-8.2 12.4-10.7 20l-.2.8c-2.3 7.6-4.4 9.6-9.8 15l-.1.1-9.3 9.2-24.8 24.8-4 3.9-9.3 9.5a306 306 0 0 0-14.3-14.4l-25-25-3.2-3.2-9.8-9.9a39 39 0 0 1-6.1-13.4 55 55 0 0 0-4.8-11.3A72 72 0 0 0 182.6 92l-1.8-1.7-11.7-11.7-2.2-2.2-4.6-4.6zm17.2 53.5a60 60 0 0 1 3.5 9c2.6 6.4 6.3 10 10.9 14.6l1.8 1.8 14 14 20.9 20.8 3.1 3.3 9.2 9-45.3 45.3-4.5-4.5-34.2-34.3-4.1-4.1q-6.4-6.8-13.2-12.6c-4-3.4-11-5.8-16.1-7.6l-.6-.2q3.1-2.7 6.2-6l2-2 14.4-14.4 9.8-9.7a946 946 0 0 0 22.2-22.4m-11.9-18-1.3-1.3a325 325 0 0 0-14-13.7l-22 22.1a2707 2707 0 0 1-38.2 38.2l1.6 1.7c3.9 3.9 12.6 12.7 13.5 13h.2q13.3-13.5 27.1-27.2l12.4-12.2 13.3-13.3 1.3-1.4c2-2 4.6-4.7 6.1-5.9m196.8 46q13.2 13.6 26.5 26.5a52 52 0 0 0-26.4 17l-5.1 5.3-23.2 23-80.9 80.9-60.8 60.8L173 384l-2.6 2.5a163 163 0 0 0-9.6 10 64 64 0 0 0-11.3 20.3l-.3 1.4-.4 1.6-.4.1-.7-.7-38.3-38.4-11.2-11.2-1.2-1.2c-1.8-1.8-4.1-4.2-5.8-5.4 15.3-2.5 27.6-15 38.3-25.9l3.1-3.1 25.5-25.6 77.7-77.6 60.5-60.7 18.6-18.5q1.7-1.8 3.3-3.2c9-9 10.7-10.7 16-25.4q14 13.8 28 28m42.4-18a1934 1934 0 0 0-43.4-43l-15 15.1a82 82 0 0 1 6.6 6.4l10.6 10.5 34.3 34.3.3.4.4.4c2.2 2.2 7.9 8 8.4 8.1l.4-.4a494 494 0 0 1 14.5-14.5zm-78.3 148 1.6 1.7 44 44.1 13 13c10.3 10.2 20.5 20.3 35.5 23a408 408 0 0 0-13.1 13l-5.1 5-32.8 32.8q-3.4 3.3-6.4 6.7c-3.3-15.2-12.4-24.5-22.8-34.9L323 368.2 289.9 335l-5.4-5.4-13.4-13.3 45-45.1c.8.2 7.2 6.8 10.4 10" clip-rule="evenodd"/>',
      },
      {
        id: "stem",
        label: "Stem",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M149 5a85 85 0 0 0-9.1.1C104 7.4 66.7 28.6 43.3 55.4 24.6 76.9 9.3 101 9.8 130.6q5 7 10.6 13.7l3.8 4.7 25 31.9 13.2 16.7 1.2 1.6c2.1 2.7 5 6.5 7 8.1a40 40 0 0 0 28 9c5.3 0 10-.1 15.6 3.4a83 83 0 0 1 16.2 14.4l3.4 3.6q11.1 11.2 21.8 22.7l69 73.7 27.1 28.7 9.2 9.8 2 2.2q2.4 2.3 4.7 5.1c2.8 3.7 4 6.8 5.3 10.5l1.3 3.3c1.4 3.6 5 9 7.8 11.8 4.5 4.4 10 8.4 15.3 12.4l7 5.2q9 6.9 18 13.4l10.5 7.7a641 641 0 0 0 44.8 31q4.2 2.5 8.5 4.5l6.1 3.1.8.5c8.8 4.7 14.8 8 25.5 8.7 9.8-.2 19.3-5.4 26-12.3a25 25 0 0 0 7.1-18.2c-.3-12.5-9.7-21.8-18.6-30.5a156 156 0 0 1-8.6-8.7 154 154 0 0 0 12.3-17.6q2.4 2 5.2 4l2 1.4a48 48 0 0 0 29 10.4c16.2-.5 29.6-19 28.8-34.3-.6-10-6.5-18-13-25l-2.3-2.2a22 22 0 0 1-6.2-8c-1.3-4.4-4.2-7-7.4-9.8l-2-1.9q-13.6-11.7-27.6-22.7l-.9-.7-1.1-.9-32.8-26-2.6-2c-2.5-2-5.2-4-6.8-5.4l-2.5-2.4c-6.1-5.6-9.2-8.4-19.5-6-2.2.5-14-1.6-16.8-2.6a16 16 0 0 1-3.2-2.1q-14.2-14.2-28-28.8L278.5 185l-32-34.7L237 140l-1.5-1.6c-2.2-2.2-5-5.1-6.2-7a51 51 0 0 1-7.7-21.6 29 29 0 0 1 1.4-9.8l.4-1.6a36 36 0 0 0-4-27.4 53 53 0 0 0-9.3-9.8L197.3 49l-18.5-18c-9.4-9-19.3-18-29.7-25.9m-28.9 61.6a46 46 0 1 1 3.5 92 46 46 0 0 1-3.5-92m20.3-41h-.2A132 132 0 0 0 52.6 76c-9.2 11.6-22 32.7-22.2 47.7l16 20.4 2 2.5 5.1 6.7q5.1-4.3 10.2-8.3-1.8-3-3-6.4a66.5 66.5 0 0 1 99.6-80.3q4.6-4 9.4-7.8l-1-.8c-5.5-5.4-25-24.3-27.7-24.2zm44 39.6c.6 0 2 1.6 3 2.5l.5.6 6.6 6.4 1.1 1c2.3 2.2 5.9 5.6 6.9 7.3 2.5 4.2 1.1 9.8 0 14.8q-.7 2.4-1 4.6-.7 5.2-.3 10.3c.8 8.5 5.4 21.3 10.1 28.9a125 125 0 0 0 16.9 19.5l25.3 27.3 53.3 57.4 2.4 2.6a641 641 0 0 0 26 27.4c4 4.2 8.1 8.5 12.8 11.6a49 49 0 0 0 23.7 6h1.6q4 .4 8 .2l3.2 2.6 1.6 1.2q6 5 12.3 9.9a1772 1772 0 0 1 41 32.6l4.4 3.6q7.6 5.8 14.5 12.1a12 12 0 0 1 3.1 5q.5 1.3 1.4 2.7 3.3 5 8 9.3c4.1 4 8.2 7.9 10 13.1 2.1 4-4.2 13.5-8.2 14-7.5.9-15.5-5.2-22.4-10.4q-4-3-7.3-5.1c-6-3.6-13.6-4-18 1.6q-3 4-5.6 8.1l-3.4 5.3q-4.5 6.5-9.1 12.7a125 125 0 0 0-7.8 13.5c1.3 1 3.2 3.1 4.8 4.7l1 1.2 10 10.5 7.5 7.7.9.9c3.4 3.3 9.9 9.8 7.6 13.3-4.5 6.7-11.8 9.6-19 6l-6.2-3.2-9.6-4.9c-9.2-4.3-19-11.2-27.7-17.3L365 442a1565 1565 0 0 1-52.8-38.6c-5.5-4-11.1-8-15.8-12.7-2.6-2.6-3.8-6-5-9.3q-.7-2.4-1.8-4.6c-4-8.6-11.3-16-18.2-23l-5.2-5.4-35.3-37.8a7433 7433 0 0 0-85.1-90.2l-.3-.3c-12.2-12.5-24-24.5-42.9-24.3h-1.3c-5.5 0-11.8.2-16.2-3.3-2.1-1.7-4.6-5-6.6-7.6l-1.4-1.7-10.9-14 10.1-8.2a66 66 0 0 0 86 4.2 66 66 0 0 0 12.8-92.4z" clip-rule="evenodd"/>',
      },
      {
        id: "headset",
        label: "Headset",
        vb: "0 0 110 110",
        body: '<path fill="currentColor" d="M55.4 14c-6.8 0-12.9.9-17.5 2.3q-3.5 1-5.7 2.7c-1.5 1.1-2.7 2.7-2.7 4.6v.7C24.8 27 22 30.6 22 34.6v10.8c0 3.3 2 6.3 5 8.6q1.4 1.1 3.2 2a13 13 0 0 0-2.5 2.8q-1.5 2.1-1.5 4.7c0 3.6-3 4.7-3 4.7a2 2 0 0 0-1.2 2v9.5c0 3.3 2 6.3 5 8.6q4.6 3.6 12.2 5.5c10 2.6 22.2 2.6 32.3 0q7.6-2 12.2-5.5c3-2.3 5-5.3 5-8.6V70a2 2 0 0 0-1.3-1.9s-2.9-1.1-2.9-4.7q0-2.5-1.6-4.8a13 13 0 0 0-2.4-2.6l3.2-2.1c3-2.3 5-5.3 5-8.6V34.6q-.2-6.1-7.6-10.4v-.6q-.2-3-2.6-4.6-2.2-1.6-5.7-2.7A60 60 0 0 0 55.3 14m0 4.2c6.3 0 12.1.8 16.1 2a16 16 0 0 1 4.5 2.2c1 .6 1 1 1 1.2s0 .6-1 1.3q-1.5 1-4.5 2a60 60 0 0 1-32.3.1 16 16 0 0 1-4.5-2.1c-1-.7-1-1.1-1-1.3s0-.6 1-1.2q1.4-1.1 4.5-2.1c4-1.3 9.8-2.1 16.2-2.1m0 3.3c-3.8 0-6.8 1-6.8 2.1s3 2.2 6.7 2.2 6.8-1 6.8-2.2-3-2.1-6.8-2.1M79 27.8c4 2.3 5.5 4.7 5.5 6.8v.3c-.2 2.4-2.6 5.4-8.3 7.9a61 61 0 0 1-41.7 0c-5.7-2.5-8.1-5.5-8.3-7.9-.2-2.1 1.3-4.7 5.5-7l1.8 1.2-1.7 1.1q-2.3 1.8-2.3 4.6c0 1.8 1.2 3.3 2.7 4.4q2.2 1.6 6 2.8a67 67 0 0 0 34.7-.1q3.7-1.2 5.8-2.9 2.4-1.7 2.5-4.5-.2-2.7-2.6-4.4l-1.4-1zm-40 3.5q6.1 1.6 14.3 2v4a2 2 0 1 0 4.1 0v-4q8.2-.4 14.2-2a15 15 0 0 1 4.5 2q1.1 1.2 1 1.3.2.1-1 1.2a15 15 0 0 1-4.5 2.1 65 65 0 0 1-32.2 0 16 16 0 0 1-4.7-2c-1-.7-1-1.2-1-1.3s0-.5.8-1.1q2.1-1.5 4.5-2.2M26.2 42.6q2.6 2.2 6.6 4a63 63 0 0 0 45 0q4.1-1.8 6.7-4v2.8q.1 2.5-3.4 5.3-3.6 3-10.6 4.8c-9.3 2.4-21 2.4-30.3 0q-7-2-10.6-4.8t-3.4-5.3zM34.6 58l1.5.5-2 1.6c-.8.9-2 2.1-2 3.5.1 1.3 1.3 2.5 2.3 3.4q3 2.7 8.5 3.8a57 57 0 0 0 25 0 18 18 0 0 0 8.4-3.8c1-1 2.2-2.1 2.2-3.5 0-2.3-2.3-4-4-5l1.6-.5q2.4 1.5 3.4 3c1 1.4 1 2.4.8 3-.3 1.8-2.4 4.3-7.3 6.3a52 52 0 0 1-35.3 0c-4.9-2-7-4.5-7.3-6.4q-.4-1.3.8-2.9 1-1.5 3.4-3m8.5 2.3a69 69 0 0 0 24.5 0c3.1.8 5.3 2 6 2.6q.4.6-.2 1c-.8.9-3.3 2-6.5 2.8a53 53 0 0 1-23 0c-3.3-.7-5.7-1.9-6.6-2.7q-.6-.6-.2-1c.7-.8 2.8-2 6-2.7m-14.7 8.8q2.6 3 7.7 5.1a55 55 0 0 0 38.5 0q5-2.1 7.7-5.1 1.2 1.3 2.2 2 0 2.3-3.4 5-3.6 2.8-10.6 4.7c-9.3 2.4-21 2.4-30.2 0q-7.2-2-10.7-4.8-3.3-2.6-3.4-5 1-.5 2.2-2m-2.2 9.5.8.7q4.6 3.5 12.2 5.5c10 2.6 22.2 2.6 32.3 0q7.6-2 12.2-5.5l.8-.7v1q.1 2.5-3.4 5.3-3.6 3-10.6 4.8c-9.3 2.4-21 2.4-30.2 0q-7.1-2-10.7-4.8t-3.4-5.3z"/>',
      },
      {
        id: "fork",
        label: "Fork",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M239.4 10.8h-.8c-9.9 2.3-9.6 10-9.4 18v23.1l.1 54.8c-3.1.3-6 1.2-8 3.7-3.2 3.8-3 11.4-2.8 19.4.1 7 .3 14.3-1.9 19.1-2.2 5-7.2 8.8-12 12.4a89 89 0 0 0-34.2 71.4l-.1 3.8-1.1 27.7-4 97.3-2.1 51.3-.8 20-.1 2.1c-.2 2.8-.3 6.2-.1 8.3a46 46 0 0 0 2.2 8.6q1.4 4.2 2 8c.2 1.6 0 5.7-.1 8v1l-.7 15.7c-.1 2.5-.3 5.8.3 7.9q.8 3.2 3.5 5.4c3.3 2.6 11.2 2.7 18 2.8q5.2-.1 8.5.4c2.2.3 5.8.3 8 0 5.2-.5 8.8-4.1 9.4-9.3q.4-5.3.5-10.7l.3-6 1.8-44.6 6.4-155.8 1.2-28.5.1-5.5c.2-8.1.4-17.3 3.1-24 12.5-30.7 57.8-24.5 60.9 9.2q1.3 16 1.6 32l.7 18.8q1 15.5 1.4 31.7l.7 17.6 4.4 105.6q.7 22.7 1.8 45.3l.2 6.3.4 8.4c.3 3.6 3.5 8.6 7.4 9.2 5.8.8 12 .4 18.2 0q5.4-.5 10.4-.6c3.3 0 7.1-.8 9.1-3.4 3.1-3.6 3-7.3 2.8-11.6l-.1-2.4q-.1-5-.4-9.9-.4-6-.5-12c0-2.4 1-5.6 2.1-9s2.3-7.2 2.3-10.1q0-5.7-.4-11.4l-.9-22.3-3-72.1-3-74.8-.4-10.6-1-24.6A90 90 0 0 0 307 161c-6.8-5-13.2-9.9-13.5-19.6q-.3-8.9-.1-17.8c.2-8.8-.3-15.5-10.8-17V27.7c.2-4.9.3-10.3-3-13.7q-3.1-3.2-7.6-3.3c-5.2 0-10 3.8-10.6 9q-.4 4-.3 8.3v78.7h-10.5V28.1c.2-4.2.3-9.4-1.6-12.6-1.9-3-6.2-4.9-9.7-4.7M240 128h32v9.6a47 47 0 0 0 17.1 36.4l4.5 3.6q2.6 2 5.1 4.3a66 66 0 0 1 19.2 32.9c2 8.1 2.4 18.9 2.6 28.4l.3 8 3 71.3 3 75.1 1 24.8.2 4.1q.4 6.6.5 12.8c0 2.8-1.1 6.2-2.2 9.6q-1.3 3.9-1.9 7-.5 4.4-.1 8.9v1.6q.4 6.5.5 12.8l-4.1.2h-.6l-.6.1q-.1-7-.5-13.9l-.2-4.8-1-25.6-4-98.5-3-72.5-1-23.1v-3q-.2-6.4-.8-12.7a55 55 0 0 0-52.4-49.9 52 52 0 0 0-37 14.9 55 55 0 0 0-15.7 28.4 84 84 0 0 0-1.5 15.6l-.1 3.7q-.6 9.8-.8 19.4l-2.2 54.3-5 122.4-.7 16.5q-.8 14.6-1.1 28.8l-5.3-.3.5-14.9a45 45 0 0 0 0-7.7q-.7-3.7-2-7.5a35 35 0 0 1-2.2-10.5q.1-7 .5-14l.4-9.1 3-70.5 3-73.5 1-26.3.1-5c.3-11 .6-21.2 4.4-31.9a67 67 0 0 1 19-28l4-3.2q3-2.4 6.3-5.5c14.3-14.5 14.8-25 14.8-43.6" clip-rule="evenodd"/>',
      },
      {
        id: "shock",
        label: "Shock",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="m219.3 195-6.5-6.4c-6.6-6.6-15.6-15.7-16.4-16l-22.6 22.6-5.2 5.2-9.7 9.6 15.6 15.7 2 2q2.7 2.9 5.1 5a3310 3310 0 0 1 37.7-37.7m64-101.7c3.2 3.2 5.8 5.9 6.8 6.7-2.3 2-5.5 5.2-8.2 7.9l-2.6 2.6-19.6 19.5-.7-.8-5.3-5.2-3.6-3.7c-4.6-4.7-8.9-4-14.2-3l-2.8.4-16.4 2.4-19 2.6-2.7.4c-7.8 1-16.4 2-16.6 12-.1 4.7 5.2 9.6 9.1 13.1l1.6 1.5-34 34-5 4.9c-4.8 4.6-10 9.8-13.7 14L113.7 180l1.8-1.8c6.3-5.7 13-12 5.8-20.6q-2.5-3-5.4-5.6l-2-2-15-15-1.9-1.8-6.5-6.7c-8.7-9.8-3-24.3 9.6-26.6 8-1.4 13.6 4.5 18.7 9.8l1.6 1.6 11.2 11.4 1.1 1c3 3.1 6.1 6.4 10.5 6.7 5 .4 8.6-3.3 11.8-6.6l3.8-3.8q2.5-2.7 5.3-5.2c4.2-.8 9.1-1.5 13.8-2.1l5.3-.7 34.7-5.1 4-.5c6.3-.8 15.2-2 19.6-4 1.3-.5 5.7-5 8-7.4l1.3-1.2 16.4-16.4c1 .4 9.7 9.3 16.2 15.9m-169 22.4a10.6 10.6 0 1 0-21 3.4 10.6 10.6 0 0 0 21-3.4M343 153l-3-3c-9-9-34.4-34.6-35-34.8l-30.1 30 22.5 22.5 23 23c4.1 4 10.9 11 11.9 11.6h6q5.6-5.9 11.5-11.5l8.6-8.6 3.8-3.6v-6.1l-5.3-5.6-1.5-1.5zM265.8 51.6c5-.4 7.3 1.3 10.7 4.7l76 76 17.8 17.8 2 2c3.5 3.4 7.9 7.7 10 10.8a60 60 0 0 1 .2 24.6c-2.4 3.6-7.2 8.2-11 12l-3 2.8-16 16c-5.3 5.4-7.6 5.5-14.8 5.5h-8.8c-6.3 0-10.8-4.8-15-9.3l-2.5-2.6-16.2-16.2-57.2-57.2-13.3 2-12.9 1.8c4.4 5.6 3.6 9.8-.1 15.2l2.3 2.3.2.1 6 6.1q4.9 4.7 9.5 9.6l6-2.2 3.4-1.2 1-.3c5-1.8 11.2-4 15.5 0 14 13 0 31.7-8.9 43.1q5.7 5.4 11 11l1.3-.9c10.1-7 27.3-18.8 38.9-10.6 14.7 10.5-.7 33-8.2 43.6 2.2 1.8 5.8 5.6 8.8 8.7l3 3a68 68 0 0 1 29.5-14.4 15 15 0 0 1 16.7 13.7c.6 15.4-18 38.6-27.5 49.6l8 7.8a137 137 0 0 1 40.3-26c4.4-1.6 10.8-2.2 15.1.3 13.6 8 6.6 23.2.8 33.8 8.8-6.8 25.2-14.3 32-.4 4.7 9.7-4.5 21.2-10.9 29v.1l-.1.2-.7.8-.2.2v.1l-.4.4q4 3.6 8.4 8.3l5.3 5.4 8.4 8.4q5.2 5 10.2 10.3a37.5 37.5 0 0 1-2.4 54.2c-14 11.5-35.7 12.6-49.2-.5-11.9-11.5-24-23.4-35.4-35.3-9 5.5-27 16.5-37 7.7-8.5-7.3-4.7-19.5-.1-28a173 173 0 0 1 22.6-32l-5.5-5.3-2.4-2.4c-12.2 10.3-29.2 24-45.4 27.2-12 2.5-20.9-8.7-17.3-20.4 4.9-16 16.2-30 26.8-42.8v-.1l-6.5-6.4-1.2-1.3c-11.6 9.6-29.2 23.6-44.4 27.1-4.3.9-9.1.4-12.7-2.1-15-10.9 0-33 7.9-44q-4-3.8-8-7.9l-3.6-3.6c-8.5 6.8-27.3 18.3-38.2 12.8a15 15 0 0 1-7.6-9c-2.3-7.6 1.8-16.1 5.3-22.7l-2.8 2.7c-2.7 2.7-6 6-8.1 7.2a10 10 0 0 1-7.7.9c-2.9-.9-5.5-3.1-6.8-5.8-1.6-3.1-.9-6.7.2-9.9q2.3-7.2 5-14.4l-18.1-18c-3 2.6-8.7 4.4-12.2 2a74 74 0 0 1-10.6-9.7l-2.5-2.5-17.7-17.7-1.3-1.4c-3.1-3-9.3-9.2-10.3-10.8a11 11 0 0 1-1.3-5.6c.1-4.8 5-9.3 8.9-12.9l1.8-1.7q-4.5-4.1-9-8.9l-4.1-4.2-4.2-4.2c-7-6.8-13.1-12.8-15.3-23.4A37 37 0 0 1 106.2 79c13 1.3 20.5 8 29 17.1l3.2 3.1q2.8 2.7 5.3 5.7l1-1c2.5-2.8 7.4-8.2 9.6-8.8 4.2-1.3 10-2 15.4-2.8l6.2-.8q12.7-2 25.5-3.7 14.7-2 29.3-4.4c2-1.7 4.5-4.2 6.7-6.4l2-2 13.5-13.5 2.2-2.4c3.1-3.2 6.2-6.5 10.7-7.5M240.5 239l-.3-.3a72 72 0 0 0-7.5-7.4q-3.7 4.6-7.9 9.3l-5.9 6.8 5.6 5.5 1.4-1.2 3.8-3.2q5.5-4.9 11-9.3zm15.2 15.1c1 .9 3 2.8 4.4 4.4l1.4 1.5-6.5 7.4-7.4 8.2q-.5 0-1-.5l-.3-.4-6.7-6.5c3.6-2.7 8-6.7 12-10.3zm26.2 26c-2.2-2.1-5-4.8-5.4-5l-5 5.8q-4.7 5.2-8.9 10.3l5.7 5.5 1.1-1 5.8-5q4.7-4.4 9.3-8zm36.8 4 .2.5c-2.9 4.6-5.7 8.3-8.5 12l-5.2 6.9-2.8-2.8-2.8-2.8 3.5-2.7a146 146 0 0 1 9.9-7zm43.9 44.3v-.5l-.8.5q-7.8 5.2-15.2 10.8-.3 0-.4.3-1.5 1.2-3 2l3 3 2.6 2.6c4.3-5 10.3-13 13.8-18.7m27.3 52.7c.6.2 29 28.6 31.6 31.4q1.6 1.9 2.7 4c1.7 3.7 2 7.9.7 11.6a16 16 0 0 1-8.5 9.4c-4.4 2-8 2-12.4.5-4.9-2.1-16.4-14-25.8-23.7-4.6-4.8-8.7-9-11.3-11.3 9.2-7.6 14.4-13 22.6-21.5zm28.9 39.3a10.6 10.6 0 1 0-21 2.6 10.6 10.6 0 0 0 21-2.6m-47.1-58c-1.9-1.8-3.9-4-4.9-4.6l-.6.8-2.5 3.7 2.9 2.7c1.9 1.8 4 3.9 4.5 4.1h.3l3.2-3.7zM355.4 384l.4.3.1.2-3.5 3h-.2l-.1.2h-.6l-3.9-3.9-.4-.5-.4-.4 3.2-4c.7.4 3.8 3.4 5.3 5zm-44.1-44.2-5-4.6c-3.5 4.2-12 15-14.3 19.8l3.7-2.5q4-2.8 8.1-6 4.3-3.4 8.1-6l-.1-.1-.2-.3zm-61.8-31.2.6.4.2.1.2.4.1.2q-.5.9-1.8 1.6l-.4.3-.6.2c-.1-.5.7-1.7 1.3-2.6zm26.9-69-.2-.3-.6.3q-1.6.6-2.2 1.9.2.7.6 1l.3.2c.6-.3 1.3-1.7 1.8-2.6q0-.3.3-.5m-70.6 25.3c.5.3.5.4.9.8l.1.1v.6l-2 1.4-.3.2h-.1l-.5.1c.1-.7.9-1.8 1.5-2.6z" clip-rule="evenodd"/>',
      },
      {
        id: "frame",
        label: "Frame",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M436.9 132.6a27 27 0 0 0-27-15 28 28 0 0 0-18 9.8 19 19 0 0 0-3.6 13l-201 .1c-1.2-4.4-2.4-8-5.2-11.8a26.4 26.4 0 0 0-45 3.5c-5 9.4-2.8 17-.2 26.4l.3.9 4 14.4 4 14.4q4 15 8.3 29.3l-6 4.3-1.2 1-11 8.2-42.7 32.2-45.4 34.4L33.5 308l-1.8 1.3c-6.8 5.1-12.6 9.4-14.8 18.4-1.9 7-.7 14.5 3.1 20.7 6.6 10.8 17 12.5 28.2 14.4l5 .9 27.3 5 65.1 12.1 11.2 2 23.5 4.4 23 4.3 3.8.8c10.6 2 22.3 4.4 31.4-2.6a193 193 0 0 0 18.6-16.5l34.3-31.3 121.1-110.6 5.2 15.9 2.4 6.9 13.8 41.8 7.1 21.3.6 1.9c1.2 3.6 2.9 8.7 4.3 11.3a27 27 0 0 0 11 11 27 27 0 0 0 36.2-11.8c4.6-9.4 3-15.9 0-25.2l-41.8-125.8q-2.9-8.6-5.3-17.2a708 708 0 0 0-9.1-28.8M168.5 273l.3.1c.5 1 3.2 10.8 4.4 15.3l.5 1.8L186 334c-2.8-.3-7.2-1.2-11-2l-5.2-1-16.2-3-19.3-3.6q-4-.9-8.6-1.6l-5.9-1.1c-3.4-.7-9.9-2-12.9-2.2 1.7-1.1 4.2-3 6.3-4.6l2-1.6 15-11.2 12.2-9.2q13.4-9.8 26.2-19.8m206-79.3H202.2c1 3 2.1 7 3 10.6l1 3.5 7.2 25.6 24 85.7c4.9-5 11-10.5 16.8-15.6l6.2-5.6 30.6-28 6-5.4 12-11 43-39.4 6.6-6c5.4-5 11-10.3 16-14.5m37.6-55h1q2.1.1 3.6 1.6a268 268 0 0 1 10.4 32.4l1.6 5.7q3.8 12.8 8.3 25.4l3.6 10.7 22.2 66.6L470 303l.5 1.5.3 1 3.3 10q1.7 4.4-2.2 7c-3.3 2-6.6 0-7.8-3.3l-2.5-7.4-5.8-17.4-22-66.4-1.5-4.4a142 142 0 0 0-6.3-17.1c-1.5-2.2-4.1-4-6.7-4.5-4.8-.9-8.2 1.5-11.5 4.6l-8.7 8-24.8 22.6L271 331.4l-30.5 27.9-3.1 2.9a199 199 0 0 1-11.4 10c-.5.4-1.8 1.2-2.4 1.1q-4.8-.6-9.7-1.6l-2.6-.5-27.7-5.1-98.7-18.4-28.6-5.3-3.5-.6-10.6-2H42q-1.9-.3-3.1-1.5c-2.2-2.2-2.3-5.5.1-7.6q3.7-3 7.5-5.8l2-1.6 20-15 70.1-52.9 22.5-16.9 2.6-1.8c5.4-3.8 13.5-9.5 12.7-15.3-.5-3.2-1.8-7.6-2.9-11.4l-.8-3-11.9-42.3-2.5-9-2.6-9.3c-.6-2.2-.4-4.4 1.5-6q2-1.5 4.3-1.2c4 .5 5 5.3 5.7 8.6 2.7 14.2 7.9 14.2 18.8 14h214c1.5-.1 4.3-1.5 5.4-2.6 4-3.6 3.6-7.6 3.1-11.7q-.3-2.4-.2-5v-.3a7 7 0 0 1 3.8-3.4m-238 105.4c2.9-.4 8.2 2.2 9.4 4.6a86 86 0 0 1 5.3 16l1.1 4.1 8.4 30.2 8.5 30 .8 3.1 3.6 13c1.2 4.3-.8 8.5-4.3 11.1-3.9 2.9-8.1 2-12.4 1q-1 0-2.1-.4l-14.5-2.7-55.3-10.3-16.5-3-13.5-2.5c-6-1-12.8-2.1-17.4-4.2-4.4-2-6.2-11.5-2.3-15.2a131 131 0 0 1 17.6-14l32.9-24.7 30.5-23 15.7-11.7q2.1-1.3 4.5-1.4m13-71.6H397c4.6-.2 9-.3 12.4 3.3 2 2 3.1 4.9 3 7.8-.1 5-5.5 9.7-9.8 13.3l-2.2 2-18 16.4-58.8 53.7-57.6 52.6-17.8 16.3-1.8 1.7q-3.8 3.6-8 7a11 11 0 0 1-12.6 1c-3.8-2.1-5.2-7.7-6.3-12.2l-.6-2.2-3.8-13.9-12.6-45-16.2-58.2-5.4-19.4-.8-2.7c-2.6-8.7-5.7-19 7-21.5" clip-rule="evenodd"/>',
      },
      {
        id: "saddle",
        label: "Saddle",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="m49.4 179.8 3.8.7q11.1 2 22.3 3.5a517 517 0 0 0 77.3 3.2c9.7-.2 19.9-.9 29.7-1.6h1.5l1.5-.2a1771 1771 0 0 0 78.6-7.6c21.6-2.5 43.2-5 64.9-6.7 28.8-2.3 57.7-4.4 86.6-1.2 16.8 1.8 33.3 6.8 49.2 12.5 15 5.3 29.3 11.5 38.5 25.5 3.1 4.7 6 12.3 7.4 19l.4 1.8q.3 2.4.9 4v10.7l-.8 3.2-.3 1.5-.4 1.6c-1.3 5.4-2.6 11-6.6 15-5.4 5.4-10.8 4.8-17.2 4.1q-1.5 0-2.8-.3l-6.7-.6-12-1a910 910 0 0 0-65.4-2.6l-12.8 10a739 739 0 0 1-34 26.2 108 108 0 0 1-30 16.5 179 179 0 0 1-52.1 5.6q-6.2 0-12.2.2-6 0-11.9.3a1782 1782 0 0 1-53 1c-2.2.1-4.5 1.4-6.8 2.6q-1.9 1.1-3.8 1.8-10.5 4.7-22 6.5a46 46 0 0 1-18.5-.7c-6-2-13.4-5.9-19.4-9q-1-.7-2-1.1a561 561 0 0 1-101.6-68q-6.2-4.7-11.3-10.3c-4.2-4.8-4.1-11-4-17v-4.1c-.4-12.4.3-24.2 8.2-34.4 13.3-17.4 28.8-12.2 36.8-10.6m-11.7 21.8a533 533 0 0 0 108 9.4c37.4-.5 76-4.7 113.3-8.9l44-4.7q23.2-2.7 46.6-4c25.1-1.7 51.6-2.7 76.4 2.2a228 228 0 0 1 34.7 10.2c4.9 1.8 9.8 3.5 14.3 6.1q6.6 3.7 11 9.8a32 32 0 0 1 3.6 23.6c-80.6-8.5-174.6-9-251.4 22-3.3 1.2-8.3 4.8-12.5 7.8l-4.7 3.3-10.3 7c-18.5 12.9-39 27.1-61.5 26.2-2 0-10-4.3-13.7-6.3l-1.5-.8a536 536 0 0 1-102.4-68c-2-1.7-5-4.4-5.4-4.5l-.5.2-.3-.1c.4-5.3.4-10 .4-15.3-.1-7 3.2-15.8 11.6-15.2zM361 265.4h.1v.3c-11.2 9-24.5 19.5-37.3 25.8-13.8 6.9-30.5 7-46 7.2h-5.4l-24.7.7h-5.5l-11.2.3-.1-.3 5.4-3.7 5.3-3.6c3.6-2.8 9.6-5 14.4-6.7l1.5-.5c33.3-12.1 68.4-16.7 103.5-19.5" clip-rule="evenodd"/>',
      },
      {
        id: "seatpost",
        label: "Seatpost",
        vb: "0 0 110 110",
        body: '<path fill="currentColor" d="M60 5q-.6 0-1.1.3l-1 .6-.6-.2a2 2 0 0 0-2.5 2.2l-4.7 2.9a2 2 0 0 0-2.3 0 2 2 0 0 0-.9 2l-1 .6a2 2 0 0 0-.6 2.8 2 2 0 0 0 2.9.7l.9-.5.6.9-1 .7a9 9 0 0 0-2.9 2.8 7 7 0 0 0-.8 3.6v78.5c0 1.2 1 2 2 2.1h6.3a2 2 0 0 0 2.1-2V24.3q0-2.4.3-3.1c.2-.6.4-.7 1-1.1q1.6-1.2 8.2-5a2 2 0 0 0 .6-2.8l-1-1.8a2 2 0 0 0-3-.7l-.4.3-.7-1 .7-.3A2 2 0 0 0 60 5m-3 6.5.5.9-4.3 2.6-.6-.8zM51.6 21q-.4 1.4-.4 3.4v76.4h-2.1V24.4q0-1.2.2-1.5t1.6-1.5z"/>',
      },
      {
        id: "pedals",
        label: "Pedals",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M322.4 45.2c-1.1 0-3.1 0-4.1.2a63 63 0 0 0-46.2 22 91 91 0 0 0-14.3 22.9 344 344 0 0 0-11.2 33.7l-2.3 7.9-20.5 68.1H129l-3.2-.1c-8.2-.2-18.1-.5-19 10q-.4 4.5-.1 9v2.3H96.1v-3.1c.2-7.4.3-16.4-8.9-17.8q-6.2-.6-12.6-.4H43.9c-6 .1-11 3-11.7 9.5q-.4 5.7-.3 11.4v57.1l.1 17.4c0 5.3 3 9.8 8.3 11 2.3.6 5.7.6 8.5.5H85c3 0 6.8-1.8 8.6-4.1 2.8-3.6 2.6-9.7 2.5-14.7v-2.7h10.6v2c-.4 9.7-.8 19.5 12.7 19.5h97.1l5.2 52.8.6 6.4c.8 8.7 1.7 19 3.4 26.2a58 58 0 0 0 26.5 36c11.3 6.6 22.7 6.6 35.2 6.6h16.9a51 51 0 0 0 24.3 27.8c25.4 11.8 51.1-3.1 60.6-27.9h20.7a51 51 0 0 0 41.9-15c7.2-7 12.4-15.9 15.3-25.7 1.8-6.3 2.4-12.6 3-19.1l.2-1.8.1-1.1 2.2-22 4.7-47.4.8-7.4q1.1-10.1 1.8-20 .4-9.7.1-19.6v-15c.1-2.4-.2-5.9-.9-8.2l-5.6-18.8-2-6.6-14.7-49.1-11.4-37.9-.7-2.4C439 98 433.2 79.2 418.1 64.2a67 67 0 0 0-15-11.3c-14.3-7.9-26.7-7.8-41.6-7.7zm-4 21.7 5-.1h48.3c36 .2 45.3 32 53.4 59.9l1.8 6 15.7 52 10.6 35.5 1.3 4.3a196 196 0 0 1 3.8 13.3c.5 2 .4 7.5.4 11v21.9a207 207 0 0 1-2 23.1L453 330l-3.5 34.4-.4 4.6c-.5 5.3-1 11.3-1.9 15.9q-1.1 6.1-4 11.6a31 31 0 0 1-27.3 17q-6.8.2-13.7 0H389q-3.3 0-6.6.3c-7 1-8.3 5.6-9.6 10.6l-1.5 4.7a27 27 0 0 1-25.7 16.3 26 26 0 0 1-24.7-20.6c-.8-3-1.6-6.2-3.8-8.3-3.3-3.3-9.3-3.1-14.1-3h-2.3l-5.7.1h-16.6c-15.9-.2-26.7-9.4-31.3-24.4a79 79 0 0 1-2.3-15l-.3-2.5-1.7-17.4L238 308l-.3-3.3q-.4-6.6-1.8-12.7c-1.1-2.8-3.8-5.7-6.7-6.2a57 57 0 0 0-13.7-.6H128q-.3-22.1-.1-44.6v-19.3h95.2c6.2.3 15.1.5 17.5-5s4.3-11.9 6-18l1.7-5.6 14.8-49.5 6.8-22.4c7.7-25.7 17-51.6 48.4-54m-.4 181h-5.3c-4.8-.1-10.3-.2-14.3.2-6.6.4-11.2 2.2-15.7 7.2-6 6.6-5.7 15.6-5.4 24v1.8c.4 9.6 8.3 18.7 17.9 20a69 69 0 0 0 12.2.2h88.4a21 21 0 0 0 14.4-6.9c6.3-7 6.1-14.5 5.8-23.2V269a22 22 0 0 0-7.4-15.7c-6.4-5.7-14.9-5.6-23-5.4H318m-6.1 64h-2.5c-3.9 0-10.1 0-12 .2-6.5.7-11.4 3-15.6 8.1-4.6 5.8-4.7 11-4.5 18v2.5q0 3 .3 6.1c.8 5.7 3.7 10.8 8.2 14.2 5.9 4.5 11.6 4.4 18.2 4.3h47.1q23.1.2 45.7 0c6.7-1.2 11-3.5 15.2-9 4.2-5.8 4.1-11.5 4-18.3v-1q.1-3.7-.4-7.3c-1-5.5-4.1-10.5-8.7-13.7q-4.6-3-10.1-3.7a171 171 0 0 0-19.6-.3h-65.3m7-234.6h-.4c-24.6 1.8-32.2 26-38.1 45.8l-7 23-7.8 26.3-1.5 4.8q-1.8 5.6-3.2 11.1-.7 2.3-.6 4.7a10 10 0 0 0 3.6 7 683 683 0 0 0 42.4 26.2c3.5 1 12 .8 18 .6H378c3.2.1 6.7.2 9.6-.8s40.3-24.5 42.3-26.5q3.1-3.1 3.3-7.6c0-2.9-4.2-16-6.8-24l-1.5-5-10.2-34-1.3-4.6c-4-13.5-8.3-28.3-18.5-38.1-4-3.6-9.2-6.8-14.4-8.1-3.3-.9-7.7-.9-11-.9h-16.9zm38.4 340.2A10.7 10.7 0 1 0 336 420a10.7 10.7 0 0 0 21.3-2.4M67.8 221.3H53.3v64h21.4l-.1-3c-.3-8.4-.5-17.2 10.6-18.2 5-.3 11-.2 16.4-.2h5v-21.1H93.4c-10.5.3-18.7-.2-18.7-13.3l.1-8.2zM316.2 98.8h61.1c8.6 7.7 12.7 21.8 16.2 33.7l2 6.8 6.7 22.2q3.7 13 7.8 25.8-6.5 3.8-12.9 7.9-8.1 5.2-16.4 10h-68.3a579 579 0 0 1-29-18c1.3-3.5 2.9-9.2 4.3-14l1.3-4.7 10.4-34.7.6-2.1c3-10 8.3-28 16.2-33m47 170.6q-32.4.1-64.5-.1v10.6h96v-10.6zm-64.5 64.1h96V344h-96z" clip-rule="evenodd"/>',
      },
      {
        id: "hub-front",
        label: "Front hub",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M124.1 65.1A32 32 0 0 1 153.6 82q.8 1.7 1.5 3.9 1 3.2 2.3 5.2c1.2 1.6 3.2 3.5 5 5.2l1.4 1.5 11.6 11.5c6.9-1.2 11.1 3.2 15.4 7.8l2.1 2.3 15.5 15.5 1.8-2c5.4-6 10.5-11.8 19.6-7l8.7 4.4q6.7 3.2 13 6.6l2.1-2.2q3.7-4 7.7-7.7c9.9-8.7 23.5 3.6 16 14.1q-3 3.6-6.7 7-3.4 3-6 6c-2.9 3.7-2.4 9.5-1.8 13.8 1 7.6 5.3 11.8 10.4 16.7l2.1 2 13.4 13.4 42.9 42.9 35.9 35.8 1.4 1.5 1.7 1.6q5.5 5.7 11.2 11.1c6.8 6.7 15.7 7.4 24.7 5.6q3.4-3 6.5-6.4l3.2-3.2.7-.7c2.8-2.8 5.3-5.3 9.6-5.6q4.5-.1 7.9 2.9c8.6 8-.4 16.4-6.8 22.5q-1.5 1.2-2.5 2.4l3.5 7c3.9 7.3 9 17.2 9 20.9.2 4.7-3.5 8.3-6.7 11.5l-1.3 1.3-6.3 6.3c1.3 1 3 2.7 4.4 4.2l1.2 1.3 9.6 9.4v-.1l.2-.1.6-.6c2.5-2.8 5.2-5.7 9.1-6.1a11 11 0 0 1 11.3 7l.3.4.5 1q3.6 6.8 6.7 13.4l3 6q2.8 5 4.7 9.7a10 10 0 0 1-2.5 11l-14 14-12 12.1-.4.4c-5 5.1-8.7 8.8-16.5 5.5q-4.2-1.9-8.1-4l-5-2.5-1.3-.7h-.2q-7.5-3.6-14.5-7.3c-3.9-2-6.9-5.8-6.7-10.3.3-4.7 3.5-7.7 6.6-10.7l.4-.3-15.1-15-2.8 2.9c-3 3-6.3 6.3-9 8.7-6 5-12 1.9-17.9-1.3l-2.5-1.4-14.8-7.4a49 49 0 0 1-14.2 12.4 10 10 0 0 1-8-.8 11 11 0 0 1-5.4-7.2c-1.5-6.5 4-11.4 9-16q3.9-3.2 6.3-6.3c2.2-3.3 1.4-11 .7-14.8-1.2-6.2-6-10.8-10.4-15.2l-2.1-2-13-13-41.6-41.6-36.7-36.8-4.2-4.3c-4.3-4.4-8.8-9-13.2-12.6-5.4-4.4-15.6-5-22.2-3.4q-3.4 3-6.7 6.6l-5.8 5.8c-4.7 4.4-11 5-15.7.3q-3-3.1-3-7.4c0-5.2 5.8-10.6 10.3-14.9l2.5-2.3-3.7-7.2-2.6-5.2c-9.3-17.3-8.8-17.8 3.4-29.8l.8-.8q-6.3-6-12.4-12.4l-9.4-9.5c-3.7-3.5-4-6.3-3.7-11.2l-11.9-12-1-1a35 35 0 0 0-5.4-5c-1.6-1-3.5-1.6-7.3-3l-.7-.3q-3.5-1.5-6.8-4.7c-3.7-3.3-7.7-6.7-13-5.7-5.8 1-8.5 5-11.4 9.3l-1.3 2A128 128 0 0 0 58.5 184l-.2 3.8c0 5-.3 11-2.7 14.3a11 11 0 0 1-15.6 1.3 11 11 0 0 1-3.5-8.1q-.1-9 1-17.7c3.5-29.4 16-56.9 35.8-78.8A137 137 0 0 1 104 72.6h.1c7.5-4.7 11.1-7 20.1-7.5m119.5 114.7-1.4-3.6-24.5 24.6-4 4.1-.4.3-.1.2-.7.7-8 8c11.6 2.8 20.6 12.2 29 21l5.1 5.3 36 35.9 42.2 42.1 12.6 12.6 1 1.1h.2v.2l.3.2.3.3c4.6 4.6 9 8.8 12.5 14.6.6 1 1.9 4 2.9 6.4l.1.3 1.4 3 37.6-37.7c-11.2-3-16.8-8.8-24.2-16.4h-.1l-2-2.1h-.1l-4.5-4.6-.3-.4-.7-.7-2-2-34-34-42-41.9-14.2-14.2-1.4-1.3-.1-.2-.3-.2-.2-.2v-.1l-.4-.4a63 63 0 0 1-14.5-18.3zm-18.2-31.9a43 43 0 0 1 6.4 3l3.8 1.8-51.9 51.9-2.5 2.7-5-10.2c3.2-3.6 7.3-7.5 11-11.2l1.3-1.2 3.5-3.5zm-36-2a206 206 0 0 0-11.3-11l-3.8 3.9-.8.8h-.1v.1h-.1l-.4.4-.7.7-.1.2-9 8.7 3.1 3.1c4.5 4.4 11.8 11.8 12.3 11.8q7.3-7.5 14.9-14.9zm-30.8-23.4.8.8q-3 2.7-5.8 5.8l-1.7 1.7c-.6-.2-3.5-3.1-5.7-5.4l-.1-.1-2.2-2.2c2.9-2 5-4.5 7.2-7.1l.3-.3c.6.3 5.2 4.8 7.2 6.8m-25-32.2a10.6 10.6 0 1 0-16.5 13.3 10.6 10.6 0 0 0 16.6-13.3M409 326.4c.4.4 3 5.5 4.3 8.3l.8 1.6q-24.9 24.4-49.4 49.2l-2.6-1.2-7.4-3.6 32.2-32.1 1.6-1.6 1-1 3.7-3.7.2-.2v-.1l1-1 1-1zm42 75.8a56 56 0 0 0-4.5-8q-8 8.5-16.7 16.9l-.4.4-.4.4-6.5 6.4 5.9 3 .4.2.8.4 3 1.6L452 404zm-33-9.6.4-.4.3-.3.3-.3 4.4-4.3-2.3-2.3a227 227 0 0 0-13-12.6l-7.4 7.3.5.6.5.4.6.7.2.2.5.5.1.1.9 1 1 1c4.3 4.3 10.3 10.4 10.9 10.6z" clip-rule="evenodd"/>',
      },
      {
        id: "hub-rear",
        label: "Rear hub",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M124.1 65.1A32 32 0 0 1 153.6 82q.7 1.4 1.5 3.9c.8 2.1 1.6 4.4 2.3 5.1q4.8 5.3 10.1 10.4 4 3.8 7.6 7.7h.9c2.3 0 5 0 7 1.2 3 1.6 15 13.8 21.6 20.7l3.8 3.9 2.2-2.4c5-5.5 10.2-11.1 18.5-6.7l10.3 5q6.2 3 12.1 6.1l1.7-1.8c4.1-4.4 10.2-11 14.8-11 2.5-.1 5.7.7 7.5 2.5 8.6 8.7 2 14.9-4.6 21-3.8 3.6-7.6 7.1-8.2 11-2.2 13.6 4.4 20 12.8 28.3l2.2 2.1 17.7 17.7 22.3 22.3 3.4 3.5c6.1 6.5 12.7 13.5 21.6 14 2.4 0 8.2.4 10.1-.6 3.1-1.6 5.7-4.5 8.3-7.4 3.7-4.1 7.3-8.3 12.5-9 8-.7 14.5 9.2 9.8 16.2a41 41 0 0 1-5.7 6.4l-1.5 1.5-9.4 9.5.1.1 41.6 41.6 12.4 12.4 1.4 1.4c5.8 5.7 11 10.8 10.9 19.9-.1 8.3-4.3 13.3-9.9 18.9a261 261 0 0 1 15.1 15l.8-1c2.6-2.7 5.5-5.8 9.5-6 4.3-.3 8.7 2.3 10.6 6.1q7.9 15.2 15.2 30.5a10 10 0 0 1-1.8 11.5L443.2 443c-4.6 4.6-9 5.2-14.7 2.1l-12.5-6.2q-8.5-4.1-16.6-8.4l-1-.7q-1.7-1-2.6-2c-5.3-7.8.5-13.6 4.8-17.8l-15-15-.1.1c-4.8 5-6.8 7-13.4 9q-2.8.7-5.7.7-6.4 0-11.7-3.6c-2.5-1.7-5.5-4.8-8-7.3l-1.3-1.4-12-12-42-42.3-7.9 8-1.7 1.9c-5.3 5.6-11.9 12.5-20 6a11 11 0 0 1-3.7-7.7c-.3-5.8 4.7-10.3 9.3-14.3q3.1-2.6 5.3-5.1c4-5 2.2-18.4-1.8-23.4-2.4-3.1-6-6.6-9-9.7l-1.7-1.7-19.4-19.4-21.9-22-2.4-2.5c-3-3-6-6-9.3-9-6-5.4-14.7-5.7-22.4-4.8-2.8 1.3-7 6-9.1 8.2l-.2.2c-5.4 5.9-12 12-19.8 5a10 10 0 0 1-3.3-7.2c-.1-5.4 5.3-10.5 9.8-14.9l3-2.9c-2.9-4.8-5.6-10.6-8.2-16.2l-3.7-7.8c-3.3-6.6 2.8-12.3 7.7-16.9l2.1-2-5-5-2.1-2.1-13.1-13.1c-5-5.1-5.4-6-5.4-12.8-1.5-1.8-4-4.2-6.1-6.3l-3-3c-2.5-2.5-6.5-6.7-9.2-8.7q-2.2-1.2-4.7-2-1.8-.6-3.5-1.4-3.7-1.8-6.6-4.7c-3.8-3.2-7.4-6.3-13-5.6-5.8.8-9.2 6-12.2 10.8l-.8 1.2A126 126 0 0 0 58.1 192v.3c0 3.5-.1 6.8-2.5 9.7-6.8 8-18.9 3.8-19-6.7a143 143 0 0 1 37-96.7A137 137 0 0 1 104 72.4c7.4-4.6 11-6.8 20-7.3m118.6 112.4-.5-1.3-24.3 24.4-3.6 3.7q-5 5-10 9.7c10.8 2.5 18.2 10 25.6 17.6l3 3 20.9 20.9 21 21 2.9 2.8a57 57 0 0 1 15 19.5l1.1 3 1 2.6h.4l23.4-23.6 4.2-4.2 10.4-10.4c-11.4-2.9-17.2-8.8-24.8-16.4l-2.4-2.4-17.5-17.5-22.4-22.3-3.2-3.2a105 105 0 0 1-16.1-18 44 44 0 0 1-4-8.9M225.4 148a43 43 0 0 1 6.4 3l3.8 1.8-51.9 51.9-2.5 2.7-5-10.2c3.2-3.6 7.3-7.5 11-11.2l4.8-4.7zm-35-1a190 190 0 0 0-12.3-12l-6.3 6.3-.5.5-.6.6-7.6 7.4.4.4.7.8 1 .9.1.2c4.2 4.2 12.4 12.4 13 12.6h.1c3-3.2 6.7-6.8 10.2-10.3l4.7-4.6zm-39-31.2a112 112 0 0 1 8 7.6l-5.6 5.5-2 2c-.5-.2-3.3-3-5.5-5.3l-2.4-2.4c3-2 5.2-4.7 7.4-7.4m-17.8-25.4a10.6 10.6 0 1 0-16.5 13.3 10.6 10.6 0 0 0 16.5-13.3m186.4 239 1.7 1.7 32.4 32.4 4.2 4.3c4.1 4.2 9 9.3 12.2 12l-3 3-.4.4-.4.5a116 116 0 0 0-8.3-8.5l-.4-.4-.3-.3-17-17-22.2-22.1-3.2-3.3c-3-3-6-6.2-8.9-8.7l3.3-3.2.4-.4c1 .5 6.8 6.4 9.9 9.6m59.6 14.3a2415 2415 0 0 0-46.9-46.7l-2.2 2.2q-2.7 3-5.2 5.3l45.7 45.8 1.8 1.7c3.8 4 12.1 12.4 13 12.8q3.5-3.8 7.3-7.4zm-15.4-53.1 2.2 2.3 45.6 45.5-3.6 3.5c-.5 0-55.1-54.6-60.4-60.2l3.5-3.4c1.2.5 8.6 8.2 12.7 12.3m57.8 95.4c-3.8-3.8-13.1-13.2-14-13.4l-7.3 7.2 2.3 2.4 12.4 12.6h.5l2-2q2.8-3 5.5-5.4zm24.5 8.3a49 49 0 0 1 4.1 7.4l1.3 2.4q-9.8 9.7-19.3 19.5l-3-1.6-.6-.3-.8-.4-5.7-2.9 8.2-8.1q8.1-8 15.8-16" clip-rule="evenodd"/>',
      },
      {
        id: "axle",
        label: "Axle",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" d="M339.3 74.8h.3c12.6.3 11.2 12.2 10.9 21 5.4.3 16.7-.6 21 1.5a10.4 10.4 0 0 1 4.3 14.6c-2 3.6-5.4 5-9 6-.6 5-.1 15-.3 20.7 3.6 0 10.6-.2 13.8.7 10.4 2.8 9.8 18.3-.8 20.5q-3.6.5-7.1.3c-7-.3-14.9.4-21.8 0v170.5h15.1c4.5 0 9.6-.3 14 .6 11.5 2.2 10.4 19.5-1.1 20.8-3.5.3-8.5.3-12 0 .2 16.9-.2 33.8 0 50.6l-.1 13.2c3.3.5 6 1.4 8.1 4.1q3 3.6 2.4 8.1a10 10 0 0 1-4 7.1 13 13 0 0 1-5 2.2c-2.5.6-14.6.7-17.4.3-.2 5.7 1 13.2-2.8 17.4a12 12 0 0 1-8.4 3.9c-11.8-1.3-10.2-12.6-10.2-21.2-3.1.2-14.5.3-17.1-.3q-2.6-.5-4.7-1.8a10 10 0 0 1-4.7-6.8q-.7-4.5 1.9-8.3c2.4-3.3 4.8-4 8.5-4.6q.3-20.7.1-41.4v-22.3c-3.6-.1-10 .4-13.4-.4-10.8-2.2-9.8-19.7.2-20.7 8.8-.8 20.3-.6 29.1-.3l.1-7.2V194.4c0-11-.3-23.3 0-34.2h-17.8c-3 0-8.7.1-11.4-.5a10 10 0 0 1-5-2.7 11 11 0 0 1 .3-15.6c4.1-3.7 12.6-2.8 17.8-2.6q.2-10.5 0-21c-5.4-1-10.4-4.6-10.5-10.8q0-4.5 3-7.8 1.8-1.8 4-2.5c3.6-1.2 15.4-.7 19.6-.7v-4.8c-.2-8 .3-15.3 10.1-16.4m-4.9 341c2 .1 9 .4 10.8.1-.2-2.7 0-7 0-9.8v-16c0-11.8-.4-26.4 0-38-3 0-7.5.2-10.3 0-.6 1-.4 11.1-.4 13.1v33.3c0 5.2.2 12.3 0 17.4m0-277.2 10.6.1c.3-6.6.3-14.3.1-21-2.5 0-8.2.4-10.5 0l-.1 20.9M217.7 53.4c11.7-.4 21.2 2.2 27.6 12.8a27 27 0 0 1 3.1 20c-2.3 9.1-7.5 13.6-15 18.2-.3 3.2-.2 7.8-.2 11.1v279.1c19.8-1 23.5 3.3 20 22.7-.6 3-1 7.2-1.3 10.3l-1.8 14c-1 7.8-1.2 16.6-11.8 17.2-8.7.5-17.6-.3-26.2.1-4.4.2-9.1.1-12.6-2.8-3.9-3.4-3.9-8.7-4.4-13.5l-4.4-36.4a10.3 10.3 0 0 1 9.4-11.3l4-.2h7.8c.3-20.5 0-41.5 0-62v-189c0-12 .5-27.3 0-39-4.1-2.7-8-5-11-9-2.5-3.6-3.9-10.2-6.7-12.6q-2.4-1.8-5.4-1.3c-3 .3-5.8 1.9-8.3 3.2a94 94 0 0 0-28.5 23.2c-3.2 4-5.7 9.2-8.8 12.9-2.2 2.5-4.5 4-7.8 4.2q-4.6.3-8-2.8c-2-1.8-3.1-4.5-3.2-7.2-.3-7.6 12-22 17.3-27.7q3.8-4 8-7.4a112 112 0 0 1 68.2-26.8m11.4 383.9.3-2.3c.6-5.2 1.5-14 2.4-19-4.6.1-14 .4-18.2 0-.2 2.1 2 17.9 2.4 21.1l13 .2m-10.7-354a5.3 5.3 0 1 0 8.2-6.5 5.3 5.3 0 0 0-8.2 6.6"/>',
      },
      {
        id: "fender",
        label: "Fender",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M0 385.6c3-6.3 5.7-7.1 10.8-8.7l3-.9c7.5-2.4 17.5-7 20.7-14.9 1.9-4.5 1.9-10 2-15.3l.1-6.6a241 241 0 0 1 30-104.4 237.3 237.3 0 0 1 323.6-91 241 241 0 0 1 121 187q.1 3.1.8 5.5v41.9c-1.5 3.5-3 6.3-6.8 7.9-5.5 2.2-10.3-1.2-14.7-4.2l-1.5-1.1-11.7-7.9-11.6-7.7-1.7-1.1c-4.3-2.8-8.5-5.5-9-11.1q-.4-4.3-.5-8.6-.1-3.7-.5-7.6-.9-11.6-3.3-23.1a181 181 0 0 0-97-124.6 180 180 0 0 0-193.1 22l-6.5 5.2a1178 1178 0 0 1 31.2 32l49.1 50.3L266 331l10.2 10.4 1.6 1.6c3.4 3.3 7 7 7 11.7q0 4.7-3.3 7.8c-4 3.9-10 2.9-15.2 2l-2.3-.4-16.3-2.5-51-7.5-69-10.3-22.2-3.2-3.3-.5-8-1.2c-.7 7.8-.6 15.6-.6 23.4v9.9c0 4.2 0 9.3-3.7 12a34 34 0 0 1-14.2 4l-3.2.5-23.3 3.9-23.4 3.9-4 .7-6.4 1c-3.9.7-6.9 1.1-10.4-1.1A10 10 0 0 1 .9 392l-.8-1.7zM160 253a589 589 0 0 0-21-21.4 181 181 0 0 0-42.2 85.8l72 10.8 25.3 3.8 3.9.6 9.5 1.3 18 2.8 15.3 2.2 3.7.7-81.2-83.1zm110.4-118.4h1.2c109-2.7 204.8 82.7 217.3 190.2 1.2 10.6 1.6 20.6 1.8 31.3l-1-.7c-4.6-3.2-10.5-7.2-14.9-9.8l-.4-5.9-.3-4.3a203 203 0 0 0-153-180.6 201 201 0 0 0-192.3 56.4 203 203 0 0 0-55 114.3 287 287 0 0 0-1.6 41.5l-24 4 1.3-1.9c3.8-5 5.8-7.7 6.9-10.7 1.1-3.2 1.2-6.7 1.4-14v-.5a196 196 0 0 1 3-29.1 216 216 0 0 1 209.6-180.2" clip-rule="evenodd"/>',
      },
      {
        id: "mud-guard",
        label: "Mud guard",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M223 42.7c-4.3 0-10.5-.1-12.8.1-19.4 2.3-25.7 15.7-33 31.3l-1.5 3c-2.6 5.4-4.3 11.5-6 17.6-3.2 11.1-6.4 22.4-14.8 30-4.3 3.8-17 3.5-25 3.3H84.7c-15.5-.2-28.2-.2-39.5 13.7q-5.4 6.9-7.2 15.4c-.7 3.5-.7 8-.7 12v22.4c0 7.5-.1 15.5.4 22.4.6 8.7 6.6 18.4 13.6 23.8 9 7 16.7 7.4 26.6 7.8l4.7.2a48 48 0 0 1 35.1 15.8c12.2 14.3 19.7 35.4 25.5 53l22.3 67.8 1.5 4.7c6.4 19.6 12.7 38.7 25.4 55.3 15.5 20.3 36.3 27.2 60.8 27h1.3c14.5-.2 27.4-.3 41-7.1 22.9-11 35.5-34.7 43.6-57.7q7.4-21.8 14.5-43.7l9.9-29.9 3.3-10.2c5.9-18 11.7-36 22-52.3a48 48 0 0 1 43.3-22.8c12-.5 21-.9 30.8-9.9a37 37 0 0 0 11.5-23c.5-4.7.4-11.4.3-17.2V171c0-5.8.1-10.3-1.5-16.5l-.1-.4a37 37 0 0 0-28.2-25.6 139 139 0 0 0-24.7-.7h-42.4c-5 .1-14.2.2-17.4-1.2-10.2-4.7-14.5-19.7-18.1-32.2q-1.7-5.7-3.3-10.3a135 135 0 0 0-6.5-15c-5.2-10.6-11.3-21-23.2-24.9a79 79 0 0 0-22.3-1.6h-64m4 21.3h64c4.3 0 9.4 0 13 .7A71 71 0 0 1 317.9 89q1.9 5.5 3.5 11.2c3.6 11.8 7.4 24.2 14.8 33.7a40 40 0 0 0 20.3 13.9 68 68 0 0 0 19.3 1.5h61c5.3 0 10.3 1.4 13.5 5.9 3.2 4.2 3.1 9.7 3 14.9v32.4c0 8.3 0 17.6-10.1 20.6-3.4 1-8 1.1-12.4 1.3l-6.4.4a71 71 0 0 0-58 39.1c-9 16.6-13.9 31.5-19.4 48.4l-2.7 8.3-18 54.4-1.6 5.3c-6.9 21-15.1 46.3-33 59.5q-9 6.1-19.9 7.3a129 129 0 0 1-38-1.1q-6.5-1.7-12.2-5.3c-18.6-12-27.6-39.6-34.4-60.7l-1.6-5-18.4-56-1.8-5.3c-8-25-16-49.3-34.3-69.1-11.9-12.9-29.2-18.2-46.1-20q-2.8-.4-5.7-.4c-5.5-.1-11.2-.3-15.3-3.5-5.5-4.5-5.4-10.7-5.4-17v-33.9c0-3.9-.1-8.2 1.1-11.4 3.3-8 11-9.6 18.8-9.1h55.3a59 59 0 0 0 27.5-3.8c17.8-8.4 23.7-27.5 29.1-45.3q1.7-5.7 3.6-11A91 91 0 0 1 205.5 67c1.8-2.5 3.5-2.7 6.5-2.9q7.3-.2 15-.1M90.6 169.5a10.7 10.7 0 1 0-21.2 2.4 10.7 10.7 0 0 0 21.2-2.4m213.2-85.8a10.6 10.6 0 1 0-21 3.2 10.6 10.6 0 0 0 21-3.2m0 42.8a10.7 10.7 0 1 0-21 3 10.7 10.7 0 0 0 21-3m-213.2 75a10.7 10.7 0 1 0-21.3 2.4 10.7 10.7 0 0 0 21.3-2.4m352-.1a10.7 10.7 0 1 0-21.2 2.6 10.7 10.7 0 0 0 21.2-2.6M226.9 78.7A10.6 10.6 0 1 0 210.4 92a10.6 10.6 0 0 0 16.5-13.3m2.3 47.9a10.7 10.7 0 1 0-21.1 2.7 10.7 10.7 0 0 0 21.1-2.7m213.4 42.7a10.7 10.7 0 1 0-21.2 2.7 10.7 10.7 0 0 0 21.2-2.7" clip-rule="evenodd"/>',
      },
      {
        id: "bell",
        label: "Bell",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M127 69.3h-2.6A65 65 0 0 0 80 91a65 65 0 0 0-14.8 29.6c-1.4 6.7-1.3 16-1.3 23.8v88.1l.1 18.1c.1 5.1 3.2 9.6 8.4 10.6q2.9.4 6.2.2h60.2V272h-49q-9-.3-17.7.4c-3.2.3-6.9 3.9-7.6 7-.7 3.3-.6 6.9-.6 10.3v22.6c.2 3.6.3 7.2 3.2 9.9a9 9 0 0 0 5 2.7q4.7.6 10 .4h24.7v76.6c0 12.4 0 22 9.6 31.6 8.1 8 16.3 9.3 27.2 9.3h53.7c8.3 0 17.7.2 24.8-.5a84 84 0 0 0 51.7-24.7 84 84 0 0 0 25-59.4c0-10.4-3-17.1-6.4-25q-1.7-3.6-3.4-8h75.8l20.8.1h5.5c14.5.8 14.4-8 14.3-18.4v-39.6c.1-8.4.2-14.4-10.7-16.7v-21.2c7.4-7.1 10.5-12.4 10.7-23.1v-16.5q10.6-1.2 21.6-2.1l3.3-.3c7.3-.4 16.5-1 17.5-10q.4-4.5.2-9.1a102 102 0 0 1 0-10.6q.3-7.5-.2-14.9a12 12 0 0 0-4.5-7.8c-1.5-1-3.6-1.7-5.4-1.7H332.8l-4-.2c-4 0-8.4-.2-11.9.6a10 10 0 0 0-5.7 4.3 12 12 0 0 0-1.7 4c-.5 3.6-.5 44.5.2 47.3a10 10 0 0 0 4.5 6.2c4.2 2.6 10.1 1.8 15 1.2l1.5-.2v2.6c-.2 12-.3 21.9 10.8 30.2-.2 6.6-.1 14.7 0 21.4-11.4 1.7-11.1 9.4-10.9 18l.1 3.3H224.1v-10.7h59.5q3.4 0 6.4-.2c4-.6 8.1-4.5 8.5-8.5q.4-5.7.3-11.5v-88.8c.3-24.8.6-45.4-20-65.3A64 64 0 0 0 249 70.9a103 103 0 0 0-23.7-1.7zm61.9 192h13.8v16.1q-.2 3.9.3 7.5c.7 3.6 3.3 6.5 6.6 7.8q2.5 1 5.1.8H333q4 .2 8 0c11.6-.7 11.4-10 11.2-18.2V272H384v32h-97.8c-4.9-.2-10.8-.2-14.9.7-2.2.5-4.8 3-5.8 5a12 12 0 0 0-.8 8.2 18 18 0 0 0 2.6 4.7l1.7 2.6q3.5 6.5 5.7 13.4a63.6 63.6 0 0 1-42.3 80c-9.2 2.8-19.4 2.7-29.1 2.7h-56.7l-9.1-.1c-4.5-.2-7.8-3.9-9-8-.3-3-.3-8.6-.2-13v-31.9h33a53.5 53.5 0 0 0 83.4 32 53 53 0 1 0-83.3-53.4h-33.1v-29.3c.2-14-8.6-13.8-18.6-13.7H85.3v-10.4h59c4.7.1 9.3.2 12.8-3.4 3.2-3.4 3.1-8.7 3-13.3v-15.5zM130.2 90.8h-3.7a42.4 42.4 0 0 0-40.6 35.4c-.6 3.3-.6 8.4-.6 12.3V240h192.1c-.3-5.9-.2-13.2-.1-20v-62l.1-6c.1-9.8.3-22.2-1.6-29.5a42 42 0 0 0-33.2-31c-4.8-.9-11.8-.8-17.6-.8zm200.5 64h96v11.4l-9.9 1-21.4 1.8c-4.6.5-6.5 1-9.4 4.6-2.2 3.3-2.1 7.4-2 11.3V207q-.1 6-5.7 6.3-8.8.2-17.7 0h-3.4c-2.1 0-3.5-1.4-4.7-2.9-.7-4.2-.6-9.6-.5-14.8v-8.2c-.4-14-8.1-13.5-17.9-12.9l-3.4.2zm42.6 80h-10.6v16h10.6zm-161 91a31.8 31.8 0 1 1 2 63.5 31.8 31.8 0 0 1-2-63.5" clip-rule="evenodd"/>',
      },
      {
        id: "bottle-cage",
        label: "Bottle cage",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M158.2 37.6a36 36 0 0 1 6.3-.2c17 0 35.5 11.6 36.8 29.8a216 216 0 0 1 .2 23.2v313.9c-.2 6.6-.4 15.2 8 16.8 2.8.6 6.6.5 10 .4h24.3l-2-9.2-.9-3.5-5.2-22.6-16-69.6-5.4-22.9c-3.2-14-6-26.4-1.2-40.6 2.6-7.5 7.7-16 13.6-21.2a185 185 0 0 1 38.4-23.7l4.9-2.5c7-3.6 13.5-6 21-8.8 22.8-8.5 66.7-19.7 81.1 7.3 6.4 12 .6 26-4.6 38.7q-2.1 5-3.7 9.5c-3.7 11.1-3 15.2-1 26v.8l3 16.9 13.5 74.8 3.6 20.6.6 2.8c.8 4.6 1.7 9.3 1.8 13.9a33.6 33.6 0 0 1-27.4 34q-5.6.9-11.4.6h-82q0 2.8.3 5c.5 5.1.8 8.7-3.6 14.1-9.6 12.2-21.4 12.9-35.6 12.9H187c-6.1 0-12.1 0-18.1-1.3a56 56 0 0 1-22.4-10.5 49 49 0 0 1-19.5-33.5 147 147 0 0 1-.4-19.8V82.9l.1-17q.7-6.5 4.3-12c5.4-8.8 17-15.2 27-16.3m19.2 25.8c-3.3-3.5-10-5-14.6-4.5-6.9.6-14.3 2.5-14.6 10.8l-.1 15v91.2h32V78.7l-.2-9.7a8 8 0 0 0-2.5-5.5m-29.3 133.9h32V336h-32V197.2m26.5 30.4a10.6 10.6 0 1 0-21 3.3 10.6 10.6 0 0 0 21-3.3m0 75a10.6 10.6 0 1 0-21 2.6 10.6 10.6 0 0 0 21-2.7m5.5 54.6h-32V403l-.1 5.4c-.1 6.9-.2 15 .7 20.5 1.8 10.5 15.3 21.4 25.2 23.5q2.3.6 4.7.7h55.2c2.8 0 6.6-.4 8.8-2 2.4-2.8 2.5-3.6 2.2-7.3v-1.1h-25.4c-11.7.1-20 .2-29.7-9.2-10.3-10-10-22.3-9.7-35.2v-41.1m153.8-148.7c4.8-.5 14.3.4 17.9 3.5 4.6 4-.8 15-3.9 21.4l-1.3 2.8q-2.4 5.6-4.3 11.3c-4.3 13.9-2.9 21.7-.5 35l.1.7 4 22.2 12.6 70.3 3.5 19.6.5 2.9c1.3 6.2 2.9 14-1.4 18.5-4.7 4.8-10.8 4.8-16.9 4.7h-79c0-3.1-1.2-8-2.1-11.7l-.4-1.9-4.3-18.3-17.5-75.5-5.2-22.7-.6-2.3c-3-13.2-6.4-27.2 3.4-38.8a76 76 0 0 1 20.2-14.5c22.7-12.7 49-25 75.2-27.2" clip-rule="evenodd"/>',
      },
      {
        id: "bottle",
        label: "Bottle",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="m238.6 32-4.2.1c-5 .5-9.7 3.2-10.1 8.4-.7 7.1-.6 16.3-.4 23.5h-13.7c-11.6 0-21.1.4-30 9.2a32 32 0 0 0-8.7 15c-1.2 4.8-1 15.4-1 22.7l.1 4.1v31.5c0 2.4.1 6.1.8 8.5 2 7.3 6.4 13.7 10.7 20l4.1 6.3.3.4.2.5c1.6 2.5 4 6.1 4.6 8.7 1.2 5 .9 13.1-.4 18-.9 3.4-3 6.8-4.9 9.8l-1 1.7-1.5 2.3a69 69 0 0 0-12.2 26c-.8 4.7-.8 10.2-.7 15.2v176.6c0 12.4.4 21.3 9.9 30.5 4 3.8 9 6.8 14.5 8.1 7.2 1.2 16.1 1 24.2 1h81.6c11.8 0 21.2 0 30.8-9.3a33 33 0 0 0 9.2-17.5c.7-5.3.7-11.8.6-17.7V259.4c0-15.7-5-25.4-13.8-37.8-6-8.5-8.2-15-7.6-25.2V192c.1-8.7 5.4-15 10.7-21.4s10.4-12.5 10.6-21a804 804 0 0 0 .1-26.9v-19c0-4.8 0-10-1-14.5a33 33 0 0 0-9-16.2c-9.8-9.5-22.4-9.3-35.2-9H288v-3.3c0-6.4.2-17.7-.5-20.5a11 11 0 0 0-2.8-5c-3.2-3.3-7.9-3.3-12.2-3.2zM192 138.7h128v1.2c0 5.7 0 8.1-.8 10.2-.6 1.6-1.8 3-4 5.5l-3.5 4.3a51 51 0 0 0-13 38.7c.3 12 .4 15.3 6.2 26.7q2.5 4.8 5.9 9.4c4.1 6.2 8.3 12.4 9 19.4q.3 5.8.2 12V439q0 5.4-.3 10.7c-.2 2.5-1.3 4-3 6-2.8 2.4-5 2.9-8.7 3h-95.4q-5.8 0-11.5-.3a9 9 0 0 1-5.9-2.7 10 10 0 0 1-3-6.2c-.2-3.7-.2-8.1-.2-12.2V264c0-11 .1-16.2 6.7-25.4 9.6-13.3 16.1-26.3 14.8-43.1l-.2-2.7q.2-3-.7-6c-1.9-7.6-6.3-14-10.7-20.4a78 78 0 0 1-9.4-16.5c-.6-1.6-.5-6.8-.5-9.7zm17-53.6q-3.5 0-6.6.2c-10.6 1-10.5 8.7-10.4 16.8v15.1h128v-5.5c0-6.2.1-12.6-.6-18.7-.4-3.5-4.4-7.3-8-7.6a164 164 0 0 0-14-.2zm36.3-32h21.4l-.1 8.2V64h-21.3z" clip-rule="evenodd"/>',
      },
      {
        id: "other",
        label: "Other",
        vb: "0 0 512 512",
        body: '<path fill="currentColor" fill-rule="evenodd" d="M0 215v81.4l.6 1.7c1.5 4.5 2.7 8 6.6 11.7 7.2 7.1 14.9 7 23.8 7h17.7v133.5l.2 13.2c.6 10.5 12.8 14.7 20.3 8.2 4.1-3.6 4-10.2 4-15.7v-73.9c-.2-7.7 12-20.9 17.7-26.1 35.6-33 93.3-43.6 140.1-46.2q24.7-1.4 49.3-.3c49.2 1.6 132 12.8 157.5 65.7a64 64 0 0 1 1 19.3v61.4c-.1 5.4-.2 11.5 3.6 15.5a12.7 12.7 0 0 0 17 .2c4-4 4-9.4 3.9-14.7V316.8h16.1c6.5 0 13.2.1 19-2.8 8.6-4.2 10.7-9.5 13.6-17.9v-80.3l-1.3-3.8a24 24 0 0 0-6-9.8c-7.3-7.1-14.4-7-23.4-7h-18V50l-.1-12.7c-.2-2.7-1.4-5.7-3-7.7-4-4.8-14-4.7-18.2-.2a12 12 0 0 0-2.9 6.7 194 194 0 0 0-.3 23.2v60.1c0 8.5-11.3 22.2-17.5 27.9-45.7 41.4-126 45-184.7 43-37.7-1.7-75.8-7.2-110.4-23.2-20-9.4-42.4-24.8-52.4-45.5a58 58 0 0 1-.6-13.5V39.7c0-3.8-.6-7.3-3.1-10-2.6-3.1-5.1-3.3-8.5-3.5H61a11 11 0 0 0-12 10.2 139 139 0 0 0-.2 16.8v141.9h-5.4c-9.2-.2-22.5-.5-28.4 2C6 201 3.5 206.2.1 214.9m73.2-54.2a143 143 0 0 0 10.2 8.8c6.8 5.4 14.4 10 22 14.2 53.8 29.2 121.1 33.2 181.2 30.8q11.8-.5 23.6-1.8c35.7-3.6 70.3-11.2 101.8-28.8 9.2-5.1 19.6-12 26.8-19.8v171.6l-1.6-1.6-.4-.3C401 299 333 287.1 284.6 285.3c-70-2.5-157.4 3.9-211.4 53.9V297l.1-22.1zm-24.6 58.7H24.4v73h24.1v-21.7q-.2-26 0-51.3m414.9 0h24.2q-.3 3.2-.1 7v66c-4.9.2-11 .1-16.7 0h-7.4z" clip-rule="evenodd"/>',
      },
    ],
    bn = { tires: "tire", brakes: "brake-pads" },
    Cu = Object.fromEntries(D0.map((a) => [a.id, a]));
  function Iu({ type: a }) {
    let e = Cu[bn[a] || a] || Cu.other;
    return (0, d.jsx)("span", {
      className: "picon",
      "aria-hidden": "true",
      dangerouslySetInnerHTML: {
        __html: `<svg viewBox="${e.vb}" fill="none" xmlns="http://www.w3.org/2000/svg">${e.body}</svg>`,
      },
    });
  }
  var B0 = [
      { id: "road", label: "Road" },
      { id: "gravel", label: "Gravel" },
      { id: "mtb", label: "MTB" },
      { id: "other", label: "Other" },
    ],
    q0 = (a) =>
      [
        a.trainer ? "Trainer" : B0.find((t) => t.id === a.type)?.label || a.subtitle || null,
        a.primary ? "primary bike" : null,
        a.retired ? "retired" : null,
      ]
        .filter(Boolean)
        .join(" \xB7 "),
    ki = new Map(),
    Go = (a, e) => a.filter((t) => t.bike_id === e),
    Po = (a) => a.reduce((e, t) => e + t.distance, 0),
    Ho = (a, e) => (a.initial_odometer || 0) + Po(Go(e, a.id)),
    Mi = (a, e) => a.find((t) => t.part_id === e && !t.to_date),
    jt = (a, e) => Mi(a, e)?.bike_id || null,
    Au = (a, e, t) =>
      (a.base_wear_m || 0) +
      e
        .filter((l) => l.part_id === a.id)
        .reduce(
          (l, u) =>
            l +
            Po(
              t.filter(
                (o) =>
                  o.bike_id === u.bike_id &&
                  o.date >= u.from_date &&
                  (!u.to_date || o.date < u.to_date),
              ),
            ),
          0,
        ),
    Xo = (a, e, t) => a.filter((l) => !l.retired && jt(e, l.id) === t),
    im = (a, e, t) => {
      let l = Xo(e, t, a.id),
        u = l.reduce((f, r) => f + (r.weight_g || 0), 0),
        o = l.reduce((f, r) => f + ((r.type === "bottle" && r.volume_ml) || 0), 0),
        i = a.weight_g || 0;
      return { base: i, parts: u, water: o, total: i + u + o };
    },
    fm = (a, e, t) => {
      let l = t
          .filter((i) => i.bike_id === a.id)
          .map((i) => i.date)
          .sort(),
        u = l[l.length - 1],
        o = Go(e, a.id);
      return Po(u ? o.filter((i) => i.date >= u) : o);
    },
    Sn = (a, e) => (e ? (a >= e ? "over" : a / e >= 0.8 ? "near" : "ok") : "ok"),
    svcAlerts = (bikes, parts, installs, rides) =>
      parts
        .filter((p) => !p.retired && p.interval_m)
        .map((p) => {
          let bid = jt(installs, p.id),
            bk = bid ? bikes.find((b) => b.id === bid) : null;
          if (!bk || bk.retired) return null;
          let used = Au(p, installs, rides);
          return Sn(used, p.interval_m) === "over" ? { part: p, bike: bk, used } : null;
        })
        .filter(Boolean)
        .sort((x, y) => y.used / y.part.interval_m - x.used / x.part.interval_m),
    rm = (a, e, t, l) =>
      !a.retired &&
      !a.trainer &&
      Xo(e, t, a.id).some((u) => u.interval_m && Au(u, t, l) >= u.interval_m);
  function nm(a) {
    return new Promise((e, t) => {
      let l = new FileReader();
      ((l.onload = () => {
        let u = new Image();
        ((u.onload = () => {
          let o = Math.min(1, 900 / u.width),
            i = document.createElement("canvas");
          ((i.width = Math.round(u.width * o)),
            (i.height = Math.round(u.height * o)),
            i.getContext("2d").drawImage(u, 0, 0, i.width, i.height),
            e(i.toDataURL("image/jpeg", 0.78)));
        }),
          (u.onerror = t),
          (u.src = l.result));
      }),
        (l.onerror = t),
        l.readAsDataURL(a));
    });
  }
  async function sm(a) {
    let e = Math.max(0, a.size - 65578),
      t = new Uint8Array(await a.slice(e).arrayBuffer()),
      l = -1;
    for (let x = t.length - 22; x >= 0; x--)
      if (t[x] === 80 && t[x + 1] === 75 && t[x + 2] === 5 && t[x + 3] === 6) {
        l = x;
        break;
      }
    if (l < 0) throw new Error("Not a ZIP file");
    let u = new DataView(t.buffer),
      o = u.getUint16(l + 10, !0),
      i = u.getUint32(l + 12, !0),
      f = u.getUint32(l + 16, !0),
      r = new Uint8Array(await a.slice(f, f + i).arrayBuffer()),
      c = new DataView(r.buffer),
      g = new TextDecoder(),
      v = {},
      h = 0;
    for (let x = 0; x < o && c.getUint32(h, !0) === 33639248; x++) {
      let I = c.getUint16(h + 10, !0),
        q = c.getUint32(h + 20, !0),
        M = c.getUint16(h + 28, !0),
        s = c.getUint16(h + 30, !0),
        m = c.getUint16(h + 32, !0),
        L = c.getUint32(h + 42, !0),
        b = g.decode(r.subarray(h + 46, h + 46 + M));
      ((v[b] = { method: I, csize: q, off: L }), (h += 46 + M + s + m));
    }
    return v;
  }
  async function M0(a, e) {
    let t = new DataView(await a.slice(e.off, e.off + 30).arrayBuffer()),
      l = t.getUint16(26, !0),
      u = t.getUint16(28, !0),
      o = e.off + 30 + l + u,
      i = a.slice(o, o + e.csize);
    if (e.method === 0) return new Uint8Array(await i.arrayBuffer());
    let f = new DecompressionStream("deflate-raw");
    return new Uint8Array(await new Response(i.stream().pipeThrough(f)).arrayBuffer());
  }
  async function cm(a) {
    let e = new DecompressionStream("gzip");
    return new Uint8Array(await new Response(new Blob([a]).stream().pipeThrough(e)).arrayBuffer());
  }
  function w0(a) {
    let e = new DataView(a.buffer, a.byteOffset, a.byteLength),
      t = a[0],
      l = e.getUint32(4, !0),
      u = Math.min(t + l, a.length),
      o = t,
      i = {},
      f = [],
      r = 180 / 2 ** 31;
    function c(g, v) {
      let h = null,
        x = null;
      for (let I of g.fields) {
        if (g.gmsg === 20 && (I.num === 0 || I.num === 1) && I.size === 4) {
          let q = g.le ? e.getInt32(v, !0) : e.getInt32(v, !1);
          q !== 2147483647 && (I.num === 0 ? (h = q) : (x = q));
        }
        v += I.size;
      }
      for (let I of g.devFields) v += I.size;
      return (g.gmsg === 20 && h != null && x != null && f.push([h * r, x * r]), v);
    }
    try {
      for (; o < u;) {
        let g = a[o++];
        if (g & 128) {
          let v = i[(g >> 5) & 3];
          if (!v) break;
          o = c(v, o);
        } else if (g & 64) {
          let v = g & 15,
            h = !!(g & 32);
          o++;
          let x = a[o++] === 0,
            I = x ? e.getUint16(o, !0) : e.getUint16(o, !1);
          o += 2;
          let q = a[o++],
            M = [];
          for (let m = 0; m < q; m++) (M.push({ num: a[o], size: a[o + 1] }), (o += 3));
          let s = [];
          if (h) {
            let m = a[o++];
            for (let L = 0; L < m; L++) (s.push({ size: a[o + 1] }), (o += 3));
          }
          i[v] = { gmsg: I, fields: M, devFields: s, le: x };
        } else {
          let v = i[g & 15];
          if (!v) break;
          o = c(v, o);
        }
      }
    } catch {}
    return f;
  }
  function pm(a) {
    try {
      return [
        ...new DOMParser().parseFromString(a, "application/xml").getElementsByTagName("trkpt"),
      ]
        .map((t) => [+t.getAttribute("lat"), +t.getAttribute("lon")])
        .filter((t) => !isNaN(t[0]) && !isNaN(t[1]));
    } catch {
      return [];
    }
  }
  function mm(a, e = 300) {
    if (a.length <= e) return a.map(([u, o]) => [+u.toFixed(5), +o.toFixed(5)]);
    let t = a.length / e,
      l = [];
    for (let u = 0; u < e; u++) l.push(a[Math.floor(u * t)]);
    return (l.push(a[a.length - 1]), l.map(([u, o]) => [+u.toFixed(5), +o.toFixed(5)]));
  }
  var hm = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  function gm(a) {
    let e = String(a).match(/^([A-Za-z]{3})\s+(\d{1,2}),\s+(\d{4})/);
    if (!e) return null;
    let t = hm[e[1]];
    return t ? `${e[3]}-${t}-${String(e[2]).padStart(2, "0")}` : null;
  }
  function vm(a) {
    let { data: e } = T0.default.parse(a.replace(/^\uFEFF/, ""), { skipEmptyLines: !0 });
    if (!e.length) return { error: "Empty CSV" };
    let t = e[0],
      l = (f) => t.indexOf(f),
      u = (f) => t.lastIndexOf(f),
      o = {
        id: l("Activity ID"),
        date: l("Activity Date"),
        name: l("Activity Name"),
        type: l("Activity Type"),
        gear: l("Activity Gear"),
        file: l("Filename"),
        dist: u("Distance"),
        moving: l("Moving Time"),
        elev: l("Elevation Gain"),
      };
    if (o.id < 0 || o.date < 0 || o.dist < 0)
      return { error: "This doesn't look like a Strava activities.csv" };
    let i = [];
    for (let f of e.slice(1)) {
      let r = f[o.type];
      if (r !== "Ride" && r !== "Virtual Ride") continue;
      let c = gm(f[o.date]),
        g = Math.round(parseFloat(f[o.dist]));
      !c ||
        !g ||
        g <= 0 ||
        i.push({
          strava_id: String(f[o.id]),
          date: c,
          name: f[o.name] || null,
          gear: (o.gear >= 0 && f[o.gear]) || "",
          filename: (o.file >= 0 && f[o.file]) || "",
          distance: g,
          moving_time: o.moving >= 0 && f[o.moving] ? Math.round(parseFloat(f[o.moving])) : null,
          elevation: o.elev >= 0 && f[o.elev] ? Math.round(parseFloat(f[o.elev])) : null,
          virtual: r === "Virtual Ride",
        });
    }
    return { rides: i };
  }
  function Lm({ pts: a }) {
    if (!a || a.length < 2) return null;
    let e = a.reduce((T, N) => T + N[0], 0) / a.length,
      t = Math.cos((e * Math.PI) / 180),
      l = a.map((T) => T[1] * t),
      u = a.map((T) => T[0]),
      o = Math.min(...l),
      i = Math.max(...l),
      f = Math.min(...u),
      r = Math.max(...u),
      c = 400,
      g = 340,
      v = 42,
      h = Math.min((c - 2 * v) / (i - o || 1e-9), (g - 2 * v) / (r - f || 1e-9)),
      x = (c - (i - o) * h) / 2,
      I = (g - (r - f) * h) / 2,
      q = a.map((T, N) => [x + (l[N] - o) * h, g - (I + (u[N] - f) * h)]),
      M = q.map((T, N) => `${N ? "L" : "M"}${T[0].toFixed(1)} ${T[1].toFixed(1)}`).join(" "),
      [s, m] = q[0],
      [L, b] = q[q.length - 1];
    return (0, d.jsxs)("svg", {
      className: "hero__route",
      viewBox: `0 0 ${c} ${g}`,
      preserveAspectRatio: "xMidYMid meet",
      "aria-hidden": "true",
      children: [
        (0, d.jsxs)("g", {
          stroke: "#242824",
          strokeWidth: "1",
          fill: "none",
          opacity: "0.7",
          children: [
            (0, d.jsx)("path", { d: "M -20 60 C 80 20, 160 90, 260 50 S 400 70, 440 40" }),
            (0, d.jsx)("path", { d: "M -20 140 C 90 100, 170 170, 270 130 S 410 150, 440 120" }),
            (0, d.jsx)("path", { d: "M -20 230 C 100 190, 180 260, 280 220 S 420 240, 440 210" }),
            (0, d.jsx)("path", { d: "M -20 310 C 100 270, 190 340, 290 300 S 420 320, 440 290" }),
          ],
        }),
        (0, d.jsx)("path", {
          d: M,
          fill: "none",
          stroke: "var(--accent)",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        (0, d.jsx)("circle", { cx: s, cy: m, r: "5", fill: "var(--accent)" }),
        (0, d.jsx)("circle", {
          cx: L,
          cy: b,
          r: "9",
          fill: "none",
          stroke: "var(--accent)",
          strokeWidth: "2",
          opacity: "0.6",
        }),
      ],
    });
  }
  function Vo() {
    return (0, d.jsxs)("svg", {
      className: "hero__route",
      viewBox: "0 0 400 400",
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": "true",
      children: [
        (0, d.jsx)("path", {
          d: "M -20 300 C 60 260, 90 320, 150 270 S 240 150, 290 160 S 380 90, 430 40",
          fill: "none",
          stroke: "var(--accent)",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          opacity: "0.8",
          strokeDasharray: "1 7",
        }),
        (0, d.jsx)("path", {
          d: "M -20 300 C 60 260, 90 320, 150 270 S 240 150, 290 160",
          fill: "none",
          stroke: "var(--accent)",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          opacity: "0.9",
        }),
        (0, d.jsx)("circle", { cx: "290", cy: "160", r: "5", fill: "var(--accent)" }),
        (0, d.jsx)("circle", {
          cx: "290",
          cy: "160",
          r: "10",
          fill: "none",
          stroke: "var(--accent)",
          opacity: "0.35",
        }),
      ],
    });
  }
  var R0 = (0, O.createContext)(null);
  function wi(a, e, t) {
    let l = (0, O.useContext)(R0),
      u = (0, O.useRef)(t);
    ((u.current = t),
      (0, O.useEffect)(() => {
        if (l)
          return (
            l(a ? { label: a, disabled: e, onClick: () => u.current() } : null),
            () => l(null)
          );
      }, [l, a, e]));
  }
  function Ye({ title: a, onClose: e, children: t, dark: l }) {
    let [u, o] = (0, O.useState)(null);
    return (0, d.jsx)("div", {
      className: "overlay",
      onClick: (i) => i.target === i.currentTarget && e(),
      children: (0, d.jsxs)("div", {
        className: `sheet${l ? " sheet--dark" : ""}`,
        role: "dialog",
        "aria-label": a,
        children: [
          (0, d.jsxs)("div", {
            className: "sheet__head",
            children: [
              (0, d.jsx)("button", {
                className: "circle circle--tint circle--sm",
                "aria-label": "Close",
                onClick: e,
                children: (0, d.jsx)(Eo, {}),
              }),
              (0, d.jsx)("h3", { children: a }),
              u &&
                (0, d.jsxs)("button", {
                  className: "btn btn--accent btn--sm",
                  disabled: u.disabled,
                  onClick: u.onClick,
                  children: [(0, d.jsx)(xl, {}), " ", u.label],
                }),
            ],
          }),
          (0, d.jsx)(R0.Provider, { value: o, children: t }),
        ],
      }),
    });
  }
  function fa({ label: a, hint: e, children: t }) {
    return (0, d.jsxs)("div", {
      className: "field",
      children: [
        (0, d.jsx)("label", { children: a }),
        t,
        e && (0, d.jsx)("div", { className: "field__hint", children: e }),
      ],
    });
  }
  function xm({ bike: a, photo: e, onSave: t, onDelete: l }) {
    let [u, o] = (0, O.useState)(a?.name || ""),
      [i, f] = (0, O.useState)(a?.model || ""),
      [r, c] = (0, O.useState)(a?.type || "road"),
      [g, v] = (0, O.useState)(a ? String(Math.round((a.initial_odometer || 0) / 1e3)) : ""),
      [h, x] = (0, O.useState)(a?.weight_g ? String(a.weight_g / 1e3) : ""),
      [I, q] = (0, O.useState)(a?.bought_date || ""),
      [M, s] = (0, O.useState)(a?.price != null ? String(a.price) : ""),
      [m, L] = (0, O.useState)(a?.retired_date || ae()),
      [b, T] = (0, O.useState)(a?.primary || !1),
      [N, n] = (0, O.useState)(a?.retired || !1),
      [p, C] = (0, O.useState)(a?.trainer || !1);
    wi("Save", !u.trim(), () =>
      t(
        {
          name: u.trim(),
          model: i.trim(),
          type: r,
          initial_odometer: Math.max(0, Math.round(Number(g) || 0) * 1e3),
          weight_g: h !== "" ? Math.round(Number(h) * 1e3) : null,
          bought_date: I || null,
          price: M !== "" ? Number(M) : null,
          retired_date: N ? m : null,
          primary: b && !N,
          retired: N,
          trainer: p,
        },
        S,
      ),
    );
    let [S, A] = (0, O.useState)(e || null),
      B = (0, O.useRef)(),
      E = async (U) => {
        let Z = U.target.files?.[0];
        if (Z)
          try {
            A(await nm(Z));
          } catch {
            alert("Couldn't read that image.");
          }
      };
    return (0, d.jsxs)(d.Fragment, {
      children: [
        (0, d.jsx)(fa, {
          label: "Name *",
          children: (0, d.jsx)("input", {
            value: u,
            onChange: (U) => o(U.target.value),
            placeholder: "Pinarello",
          }),
        }),
        (0, d.jsx)(fa, {
          label: "Model",
          children: (0, d.jsx)("input", {
            value: i,
            onChange: (U) => f(U.target.value),
            placeholder: "Dogma F10",
          }),
        }),
        (0, d.jsx)(fa, {
          label: "Type",
          children: (0, d.jsx)("select", {
            value: r,
            onChange: (U) => c(U.target.value),
            children: B0.map((U) => (0, d.jsx)("option", { value: U.id, children: U.label }, U.id)),
          }),
        }),
        (0, d.jsxs)("div", {
          className: "field__row",
          children: [
            (0, d.jsx)(fa, {
              label: "Odometer start (km)",
              children: (0, d.jsx)("input", {
                type: "number",
                inputMode: "numeric",
                min: "0",
                value: g,
                onChange: (U) => v(U.target.value),
                placeholder: "0",
              }),
            }),
            (0, d.jsx)(fa, {
              label: "Weight (kg)",
              children: (0, d.jsx)("input", {
                type: "number",
                inputMode: "decimal",
                min: "0",
                step: "0.1",
                value: h,
                onChange: (U) => x(U.target.value),
                placeholder: "7.8",
              }),
            }),
          ],
        }),
        (0, d.jsx)("div", {
          className: "field__hint",
          style: { marginTop: -8, marginBottom: 14 },
          children:
            "Odometer start: distance already ridden before this app \u2014 counts toward lifetime. Weight: the bike without its tracked parts; parts with weight add on top.",
        }),
        (0, d.jsxs)("div", {
          className: "field__row",
          children: [
            (0, d.jsx)(fa, {
              label: "Bought on",
              children: (0, d.jsx)("input", {
                type: "date",
                value: I,
                max: ae(),
                onChange: (U) => q(U.target.value),
              }),
            }),
            (0, d.jsx)(fa, {
              label: "Price",
              children: (0, d.jsx)("input", {
                type: "number",
                inputMode: "decimal",
                min: "0",
                value: M,
                onChange: (U) => s(U.target.value),
                placeholder: "4500",
              }),
            }),
          ],
        }),
        (0, d.jsxs)("div", {
          className: "photo-pick",
          children: [
            S
              ? (0, d.jsx)("img", { className: "photo-pick__preview", src: S, alt: "Bike" })
              : (0, d.jsx)("span", { className: "photo-pick__preview", "aria-hidden": "true" }),
            (0, d.jsxs)("button", {
              className: "btn",
              style: { width: "auto", padding: "12px 20px" },
              onClick: () => B.current?.click(),
              children: [(0, d.jsx)(Bo, {}), " ", S ? "Change photo" : "Add photo"],
            }),
            (0, d.jsx)("input", { ref: B, type: "file", accept: "image/*", onChange: E }),
          ],
        }),
        (0, d.jsxs)("div", {
          className: "toggle",
          children: [
            (0, d.jsx)("span", { children: "Primary bike" }),
            (0, d.jsx)("button", {
              className: b ? "on" : "",
              "aria-pressed": b,
              onClick: () => T(!b),
              "aria-label": "Toggle primary",
            }),
          ],
        }),
        (0, d.jsxs)("div", {
          className: "toggle",
          children: [
            (0, d.jsx)("span", { children: "This is a trainer" }),
            (0, d.jsx)("button", {
              className: p ? "on" : "",
              "aria-pressed": p,
              onClick: () => C(!p),
              "aria-label": "Toggle trainer",
            }),
          ],
        }),
        p &&
          (0, d.jsx)("div", {
            className: "field__hint",
            style: { marginTop: -8, marginBottom: 14 },
            children: "Indoor kilometers live here \u2014 no components or wear tracking expected.",
          }),
        a &&
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsxs)("div", {
                className: "toggle",
                children: [
                  (0, d.jsx)("span", { children: "Retired" }),
                  (0, d.jsx)("button", {
                    className: N ? "on" : "",
                    "aria-pressed": N,
                    onClick: () => n(!N),
                    "aria-label": "Toggle retired",
                  }),
                ],
              }),
              N &&
                (0, d.jsx)(fa, {
                  label: "Retired on",
                  children: (0, d.jsx)("input", {
                    type: "date",
                    value: m,
                    max: ae(),
                    onChange: (U) => L(U.target.value),
                  }),
                }),
              (0, d.jsx)("div", {
                className: "field__hint",
                style: { marginTop: -8, marginBottom: 14 },
                children:
                  "Sold or out of use. Keeps all rides, components and service history \u2014 just moves it out of daily use.",
              }),
            ],
          }),
        a &&
          l &&
          (0, d.jsxs)("button", {
            className: "btn btn--ghost",
            onClick: l,
            children: [(0, d.jsx)(vt, {}), " Delete"],
          }),
      ],
    });
  }
  function ym({ bikes: a, rides: e, defaultBikeId: t, ride: l, onSave: u, onDelete: o }) {
    let i = a.filter((U) => !U.retired || U.id === l?.bike_id),
      [f, r] = (0, O.useState)(l?.bike_id || t || i[0]?.id),
      [c, g] = (0, O.useState)("distance"),
      [v, h] = (0, O.useState)(l?.date || ae()),
      [x, I] = (0, O.useState)(l ? String(l.distance / 1e3) : ""),
      [q, M] = (0, O.useState)(""),
      [s, m] = (0, O.useState)(l?.name || ""),
      [L, b] = (0, O.useState)(l?.moving_time ? String(Math.round(l.moving_time / 60)) : ""),
      [T, N] = (0, O.useState)(l?.elevation != null ? String(l.elevation) : ""),
      [n, p] = (0, O.useState)(!!l),
      C = i.find((U) => U.id === f),
      S = C
        ? Ho(
            C,
            e.filter((U) => U.id !== l?.id),
          )
        : 0,
      A = q !== "" ? Math.round(Number(q) * 1e3) - S : null,
      B = c === "odometer" ? A : x !== "" ? Math.round(Number(x) * 1e3) : null,
      E = f && v && B != null && B > 0;
    return (
      wi("Save", !E, () =>
        u({
          bike_id: f,
          date: v,
          distance: B,
          name: s.trim() || null,
          moving_time: L !== "" ? Math.round(Number(L) * 60) : null,
          elevation: T !== "" ? Math.round(Number(T)) : null,
        }),
      ),
      (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(fa, {
            label: "Bike",
            children: (0, d.jsx)("select", {
              value: f,
              onChange: (U) => r(U.target.value),
              children: i.map((U) =>
                (0, d.jsxs)(
                  "option",
                  { value: U.id, children: [U.name, " ", U.model, U.trainer ? " (trainer)" : ""] },
                  U.id,
                ),
              ),
            }),
          }),
          !l &&
            (0, d.jsxs)("div", {
              className: "seg",
              role: "tablist",
              children: [
                (0, d.jsx)("button", {
                  className: c === "distance" ? "on" : "",
                  onClick: () => g("distance"),
                  children: "Ride distance",
                }),
                (0, d.jsx)("button", {
                  className: c === "odometer" ? "on" : "",
                  onClick: () => g("odometer"),
                  children: "Odometer total",
                }),
              ],
            }),
          (0, d.jsxs)("div", {
            className: "field__row",
            children: [
              (0, d.jsx)(fa, {
                label: "Date",
                children: (0, d.jsx)("input", {
                  type: "date",
                  value: v,
                  max: ae(),
                  onChange: (U) => h(U.target.value),
                }),
              }),
              c === "distance"
                ? (0, d.jsx)(fa, {
                    label: "Distance (km)",
                    children: (0, d.jsx)("input", {
                      type: "number",
                      inputMode: "decimal",
                      min: "0",
                      step: "0.1",
                      value: x,
                      onChange: (U) => I(U.target.value),
                      placeholder: "42.5",
                    }),
                  })
                : (0, d.jsx)(fa, {
                    label: "Odometer now (km)",
                    children: (0, d.jsx)("input", {
                      type: "number",
                      inputMode: "decimal",
                      min: "0",
                      step: "0.1",
                      value: q,
                      onChange: (U) => M(U.target.value),
                      placeholder: Da(S),
                    }),
                  }),
            ],
          }),
          c === "odometer" &&
            (0, d.jsx)("div", {
              className: "field__hint",
              style: { marginTop: -8, marginBottom: 14 },
              children:
                A == null
                  ? `Current total: ${Da(S)} km. Enter the new reading \u2014 the difference is logged as one ride.`
                  : A > 0
                    ? `Logs a ${Da(A, 1)} km ride.`
                    : `Must be higher than the current ${Da(S)} km.`,
            }),
          !n &&
            (0, d.jsxs)("button", {
              className: "btn btn--tint",
              onClick: () => p(!0),
              children: [(0, d.jsx)(Ce, {}), " Name, duration, elevation"],
            }),
          n &&
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(fa, {
                  label: "Name",
                  children: (0, d.jsx)("input", {
                    value: s,
                    onChange: (U) => m(U.target.value),
                    placeholder: "Sunday loop",
                  }),
                }),
                (0, d.jsxs)("div", {
                  className: "field__row",
                  children: [
                    (0, d.jsx)(fa, {
                      label: "Duration (min)",
                      children: (0, d.jsx)("input", {
                        type: "number",
                        inputMode: "numeric",
                        min: "0",
                        value: L,
                        onChange: (U) => b(U.target.value),
                        placeholder: "120",
                      }),
                    }),
                    (0, d.jsx)(fa, {
                      label: "Elevation (m)",
                      children: (0, d.jsx)("input", {
                        type: "number",
                        inputMode: "numeric",
                        min: "0",
                        value: T,
                        onChange: (U) => N(U.target.value),
                        placeholder: "450",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          l &&
            o &&
            (0, d.jsxs)("button", {
              className: "btn btn--ghost",
              onClick: o,
              children: [(0, d.jsx)(vt, {}), " Delete ride"],
            }),
        ],
      })
    );
  }
  function bm({ part: a, bikes: e, installs: t, rides: l, fixedBikeId: u, onSave: o }) {
    let i = e.filter((P) => !P.retired && !P.trainer),
      f = a ? jt(t, a.id) || "shelf" : u || "shelf",
      [r, c] = (0, O.useState)(a?.name || ""),
      [g, v] = (0, O.useState)(a?.type || null),
      [h, x] = (0, O.useState)(!a),
      [I, q] = (0, O.useState)(a?.interval_m ? String(a.interval_m / 1e3) : ""),
      [M, s] = (0, O.useState)(a?.base_wear_m ? String(Math.round(a.base_wear_m / 1e3)) : ""),
      [m, L] = (0, O.useState)(a?.weight_g != null ? String(a.weight_g) : ""),
      [b, T] = (0, O.useState)(a?.volume_ml != null ? String(a.volume_ml) : ""),
      [N, n] = (0, O.useState)(a?.notes || ""),
      [p, C] = (0, O.useState)(a?.store || ""),
      [S, A] = (0, O.useState)(a?.url || ""),
      [B, E] = (0, O.useState)(a?.price != null ? String(a.price) : ""),
      [U, Z] = (0, O.useState)(a?.bought_date || ""),
      [H, ea] = (0, O.useState)(!1),
      [G, ka] = (0, O.useState)(!!(a && (a.store || a.url || a.price != null || a.bought_date))),
      Q = (P) => {
        let Y = e.find((ra) => ra.id === P);
        return Y?.bought_date
          ? Y.bought_date
          : l
              .filter((ra) => ra.bike_id === P)
              .map((ra) => ra.date)
              .sort()[0] || ae();
      };
    wi(h ? null : "Save", !r.trim(), () =>
      o({
        name: r.trim(),
        type: g,
        interval_m: I !== "" ? Math.round(Number(I) * 1e3) : null,
        base_wear_m: M !== "" ? Math.max(0, Math.round(Number(M) * 1e3)) : 0,
        weight_g: m !== "" ? Math.round(Number(m)) : null,
        volume_ml: b !== "" ? Math.round(Number(b)) : null,
        notes: N.trim() || null,
        store: p.trim() || null,
        url: S.trim() || null,
        price: B !== "" ? Number(B) : null,
        bought_date: U || null,
        loc: X,
        moved: xa,
        date: !a && X !== "shelf" && H ? Q(X) : ha,
      }),
    );
    let [X, D] = (0, O.useState)(f),
      [ha, aa] = (0, O.useState)(ae()),
      xa = !!a && X !== f;
    return h
      ? (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("div", {
              className: "icon-grid",
              role: "radiogroup",
              "aria-label": "Part type",
              children: D0.map((P) =>
                (0, d.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: `icon-pick${g === P.id ? " on" : ""}`,
                    onClick: () => v(P.id),
                    "aria-pressed": g === P.id,
                    children: [
                      (0, d.jsx)(Iu, { type: P.id }),
                      (0, d.jsx)("span", { className: "lbl", children: P.label }),
                    ],
                  },
                  P.id,
                ),
              ),
            }),
            g &&
              (0, d.jsx)("div", {
                className: "float-cta",
                children: (0, d.jsxs)("button", {
                  className: "btn btn--accent",
                  onClick: () => x(!1),
                  children: [(0, d.jsx)(Ll, {}), " Continue"],
                }),
              }),
          ],
        })
      : (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)("button", {
              type: "button",
              className: "type-hero",
              onClick: () => x(!0),
              "aria-label": "Change part type",
              children: [
                (0, d.jsx)("span", {
                  className: "circle circle--tint",
                  "aria-hidden": "true",
                  children: (0, d.jsx)(Iu, { type: g }),
                }),
                (0, d.jsx)("span", {
                  className: "lbl",
                  children: (Cu[bn[g] || g] || Cu.other).label,
                }),
                (0, d.jsx)("span", {
                  className: "circle circle--tint circle--sm",
                  "aria-hidden": "true",
                  children: (0, d.jsx)(bu, {}),
                }),
              ],
            }),
            (0, d.jsx)(fa, {
              label: "Name *",
              children: (0, d.jsx)("input", {
                value: r,
                onChange: (P) => c(P.target.value),
                placeholder: "Zipp 303 wheelset",
              }),
            }),
            (0, d.jsxs)("div", {
              className: "field__row",
              children: [
                (0, d.jsx)(fa, {
                  label: "Interval (km)",
                  children: (0, d.jsx)("input", {
                    type: "number",
                    inputMode: "numeric",
                    min: "0",
                    value: I,
                    onChange: (P) => q(P.target.value),
                    placeholder: "3000",
                  }),
                }),
                (0, d.jsx)(fa, {
                  label: "Wear so far (km)",
                  children: (0, d.jsx)("input", {
                    type: "number",
                    inputMode: "numeric",
                    min: "0",
                    value: M,
                    onChange: (P) => s(P.target.value),
                    placeholder: "0",
                  }),
                }),
              ],
            }),
            (0, d.jsx)("div", {
              className: "field__hint",
              style: { marginTop: -8, marginBottom: 14 },
              children:
                'Interval empty = no reminder. "Wear so far" covers kilometers the part did before it entered the app.',
            }),
            (0, d.jsxs)("div", {
              className: "field__row",
              children: [
                (0, d.jsx)(fa, {
                  label: "Weight (g)",
                  children: (0, d.jsx)("input", {
                    type: "number",
                    inputMode: "numeric",
                    min: "0",
                    value: m,
                    onChange: (P) => L(P.target.value),
                    placeholder: "250",
                  }),
                }),
                g === "bottle" &&
                  (0, d.jsx)(fa, {
                    label: "Volume (ml)",
                    children: (0, d.jsx)("input", {
                      type: "number",
                      inputMode: "numeric",
                      min: "0",
                      value: b,
                      onChange: (P) => T(P.target.value),
                      placeholder: "750",
                    }),
                  }),
              ],
            }),
            (0, d.jsx)(fa, {
              label: "Notes",
              children: (0, d.jsx)("textarea", {
                rows: "2",
                value: N,
                onChange: (P) => n(P.target.value),
                placeholder: "Anything worth remembering about this part\u2026",
              }),
            }),
            (0, d.jsxs)("button", {
              type: "button",
              className: `collapse-head${G ? " open" : ""}`,
              onClick: () => ka(!G),
              "aria-expanded": G,
              children: ["Purchase details ", (0, d.jsx)(ue, {})],
            }),
            G &&
              (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsxs)("div", {
                    className: "field__row",
                    children: [
                      (0, d.jsx)(fa, {
                        label: "Bought on",
                        children: (0, d.jsx)("input", {
                          type: "date",
                          value: U,
                          max: ae(),
                          onChange: (P) => Z(P.target.value),
                        }),
                      }),
                      (0, d.jsx)(fa, {
                        label: "Price",
                        children: (0, d.jsx)("input", {
                          type: "number",
                          inputMode: "decimal",
                          min: "0",
                          value: B,
                          onChange: (P) => E(P.target.value),
                          placeholder: "120",
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsx)(fa, {
                    label: "Store",
                    children: (0, d.jsx)("input", {
                      value: p,
                      onChange: (P) => C(P.target.value),
                      placeholder: "bike-components.de",
                    }),
                  }),
                  (0, d.jsx)(fa, {
                    label: "URL",
                    children: (0, d.jsx)("input", {
                      type: "url",
                      value: S,
                      onChange: (P) => A(P.target.value),
                      placeholder: "https://\u2026",
                    }),
                  }),
                ],
              }),
            !a?.retired &&
              (0, d.jsx)(fa, {
                label: "Location",
                children: (0, d.jsxs)("select", {
                  value: X,
                  onChange: (P) => D(P.target.value),
                  children: [
                    (0, d.jsx)("option", { value: "shelf", children: "On the shelf" }),
                    i.map((P) =>
                      (0, d.jsxs)(
                        "option",
                        { value: P.id, children: [P.name, " ", P.model] },
                        P.id,
                      ),
                    ),
                  ],
                }),
              }),
            !a &&
              X !== "shelf" &&
              (0, d.jsxs)("div", {
                className: "toggle",
                style: { marginBottom: 14 },
                children: [
                  (0, d.jsx)("span", { children: "On this bike from day one" }),
                  (0, d.jsx)("button", {
                    className: H ? "on" : "",
                    "aria-pressed": H,
                    onClick: () => ea(!H),
                    "aria-label": "Toggle on this bike from day one",
                  }),
                ],
              }),
            !a &&
              X !== "shelf" &&
              H &&
              (0, d.jsxs)("div", {
                className: "field__hint",
                style: { marginTop: -8, marginBottom: 14 },
                children: [
                  "Uses ",
                  Kt(Q(X)),
                  " \u2014 the bike's purchase date, or its first ride.",
                ],
              }),
            !a?.retired &&
              X !== "shelf" &&
              (!a || xa) &&
              !(!a && H) &&
              (0, d.jsx)(fa, {
                label: a ? "Move date" : "Installed on",
                children: (0, d.jsx)("input", {
                  type: "date",
                  value: ha,
                  max: ae(),
                  onChange: (P) => aa(P.target.value),
                }),
              }),
            xa &&
              (0, d.jsx)("div", {
                className: "field__hint",
                style: { marginTop: -8, marginBottom: 14 },
                children:
                  X === "shelf"
                    ? "Comes off its bike on that date and goes to the shelf. Its wear stays with it."
                    : "Moves to that bike on the chosen date. Wear from previous bikes stays with it.",
              }),
          ],
        });
  }
  function Sm({
    bikes: a,
    rides: e,
    parts: t,
    service: l,
    busy: u,
    onExport: o,
    onRestoreFile: i,
  }) {
    let f = (0, O.useRef)(null);
    return (0, d.jsxs)(d.Fragment, {
      children: [
        (0, d.jsx)("div", {
          className: "field__hint",
          style: { marginTop: -6, marginBottom: 14 },
          children:
            "Everything the app knows \u2014 bikes, rides, parts, service history, photos and ride maps \u2014 packed into one JSON file. Keep it somewhere safe, or use it to move your data to another device.",
        }),
        (0, d.jsx)("div", {
          className: "flat",
          style: { marginBottom: 16 },
          children: (0, d.jsx)("div", {
            className: "flat__row",
            children: (0, d.jsxs)("div", {
              className: "flat__body",
              children: [
                (0, d.jsx)("div", { className: "flat__label", children: "Currently in the app" }),
                (0, d.jsxs)("div", {
                  className: "flat__value",
                  children: [
                    a.length,
                    " bikes \xB7 ",
                    e.length,
                    " rides \xB7 ",
                    t.length,
                    " parts \xB7 ",
                    l.length,
                    " service entries",
                  ],
                }),
              ],
            }),
          }),
        }),
        (0, d.jsxs)("button", {
          className: "btn btn--accent",
          disabled: u,
          onClick: o,
          children: [
            u ? (0, d.jsx)(xu, { className: "spin" }) : (0, d.jsx)(No, {}),
            " Download backup",
          ],
        }),
        (0, d.jsxs)("button", {
          className: "btn btn--tint",
          onClick: () => f.current?.click(),
          children: [(0, d.jsx)(Lu, {}), " Restore from a backup file"],
        }),
        (0, d.jsx)("input", {
          ref: f,
          type: "file",
          accept: "application/json,.json",
          style: { display: "none" },
          onChange: (r) => {
            let c = r.target.files?.[0];
            (c && i(c), (r.target.value = ""));
          },
        }),
        (0, d.jsx)("div", {
          className: "field__hint",
          style: { marginTop: 10 },
          children: "Restoring replaces everything currently in the app with the file's contents.",
        }),
      ],
    });
  }
  function qi({ p: a, installs: e, rides: t, meta: l, onOpen: u }) {
    let o = Au(a, e, t),
      i = Sn(o, a.interval_m);
    return (0, d.jsxs)("button", {
      className: "flat__row",
      onClick: u,
      children: [
        (0, d.jsx)("span", {
          className: "circle circle--tint circle--sm",
          "aria-hidden": "true",
          children: (0, d.jsx)(Iu, { type: a.type }),
        }),
        (0, d.jsxs)("div", {
          className: "flat__body",
          children: [
            (0, d.jsxs)("div", {
              className: "flat__value",
              children: [
                a.name,
                i === "over" &&
                  (0, d.jsx)("span", {
                    className: "chip chip--over",
                    style: { marginLeft: 8 },
                    children: "Due",
                  }),
                i === "near" &&
                  (0, d.jsx)("span", {
                    className: "chip chip--near",
                    style: { marginLeft: 8 },
                    children: "Soon",
                  }),
              ],
            }),
            (0, d.jsxs)("div", {
              className: "flat__label",
              children: [
                Da(o),
                a.interval_m ? ` / ${Da(a.interval_m)}` : "",
                " km",
                l ? ` \xB7 ${l}` : "",
              ],
            }),
          ],
        }),
        (0, d.jsx)("span", {
          className: "flat__chev",
          "aria-hidden": "true",
          children: (0, d.jsx)(ue, {}),
        }),
      ],
    });
  }
  function Cm({
    part: a,
    bikes: e,
    installs: t,
    rides: l,
    service: u,
    onEdit: o,
    onShelf: i,
    onMount: f,
    onReplace: r,
    onRetire: c,
    onRestore: g,
    onDelete: v,
    onLogService: h,
  }) {
    let x = Cu[bn[a.type] || a.type] || Cu.other,
      I = jt(t, a.id),
      q = e.find((n) => n.id === I),
      M = Au(a, t, l),
      s = Sn(M, a.interval_m),
      m = a.interval_m ? Math.min(100, (M / a.interval_m) * 100) : 0,
      L = Mi(t, a.id)?.from_date,
      b = t
        .filter((n) => n.part_id === a.id)
        .sort((n, p) => n.from_date.localeCompare(p.from_date)),
      T = u.filter((n) => n.part_id === a.id).sort((n, p) => p.date.localeCompare(n.date)),
      N = [
        { icon: yl, label: "Edit", fn: o },
        !a.retired && I && { icon: yu, label: "To shelf", fn: i },
        (!I || a.retired) && { icon: vu, label: "Mount", fn: f },
        !a.retired && I && { icon: bu, label: "Replace", fn: r },
        a.retired && { icon: Oo, label: "Restore", fn: g },
        !a.retired && { icon: To, label: "Retire", fn: c },
        { icon: zo, label: "Service", fn: h },
        { icon: vt, label: "Delete", fn: v, warn: !0 },
      ].filter(Boolean);
    return (0, d.jsxs)(d.Fragment, {
      children: [
        (0, d.jsxs)("div", {
          className: "type-hero type-hero--static",
          children: [
            (0, d.jsx)("span", {
              className: "circle circle--tint",
              "aria-hidden": "true",
              children: (0, d.jsx)(Iu, { type: a.type }),
            }),
            (0, d.jsxs)("span", {
              className: "lbl",
              children: [
                a.name,
                (0, d.jsxs)("small", {
                  children: [x.label, a.weight_g ? ` \xB7 ${a.weight_g} g` : ""],
                }),
              ],
            }),
            s === "over" && (0, d.jsx)("span", { className: "chip chip--over", children: "Due" }),
            s === "near" && (0, d.jsx)("span", { className: "chip chip--near", children: "Soon" }),
          ],
        }),
        (0, d.jsx)("div", {
          className: "action-row",
          children: N.map((n) => {
            let p = n.icon;
            return (0, d.jsxs)(
              "button",
              {
                className: "action",
                onClick: n.fn,
                children: [
                  (0, d.jsx)("span", {
                    className: `circle ${n.warn ? "circle--warnbg" : "circle--tint"} circle--sm`,
                    "aria-hidden": "true",
                    children: (0, d.jsx)(p, {}),
                  }),
                  (0, d.jsx)("span", { children: n.label }),
                ],
              },
              n.label,
            );
          }),
        }),
        (0, d.jsxs)("div", {
          className: "stat-card__panel",
          style: { marginBottom: 14 },
          children: [
            (0, d.jsxs)("div", {
              className: "stat-card__grid",
              children: [
                (0, d.jsxs)("div", {
                  children: [
                    (0, d.jsx)("div", { className: "panel__label", children: "Distance used" }),
                    (0, d.jsxs)("div", {
                      className: `panel__big${s === "over" ? " panel__big--warn" : ""}`,
                      children: [Da(M), (0, d.jsx)("small", { children: "km" })],
                    }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  className: "panel__side",
                  children: [
                    (0, d.jsx)("div", { className: "panel__label", children: "Interval" }),
                    a.interval_m ? `${Da(a.interval_m)} km` : "\u2014",
                  ],
                }),
              ],
            }),
            a.interval_m &&
              m >= 75 &&
              (0, d.jsxs)("div", {
                className: "hatch",
                children: [
                  (0, d.jsx)("div", {
                    className: "hatch__track",
                    children: (0, d.jsx)("div", {
                      className: `hatch__fill${s === "over" ? " hatch__fill--warn" : ""}`,
                      style: { width: `${m}%` },
                    }),
                  }),
                  (0, d.jsx)("div", { className: "hatch__marker", style: { left: `${m}%` } }),
                  (0, d.jsxs)("div", {
                    className: "hatch__minmax",
                    children: [
                      (0, d.jsx)("span", { children: "0 km" }),
                      (0, d.jsxs)("span", { children: [Da(a.interval_m), " km"] }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        (0, d.jsxs)("div", {
          className: "flat",
          style: { marginBottom: 14 },
          children: [
            (0, d.jsxs)("div", {
              className: "flat__row",
              children: [
                (0, d.jsxs)("div", {
                  className: "flat__body",
                  children: [
                    (0, d.jsx)("div", { className: "flat__label", children: "Location" }),
                    (0, d.jsx)("div", {
                      className: "flat__value",
                      children: a.retired ? "Retired" : q ? `${q.name} ${q.model}` : "On the shelf",
                    }),
                  ],
                }),
                L &&
                  !a.retired &&
                  (0, d.jsx)("div", {
                    className: "flat__end",
                    children: (0, d.jsxs)("div", {
                      className: "flat__label",
                      children: ["since ", Sl(L)],
                    }),
                  }),
              ],
            }),
            (a.bought_date || a.price != null) &&
              (0, d.jsxs)("div", {
                className: "flat__row",
                children: [
                  (0, d.jsxs)("div", {
                    className: "flat__body",
                    children: [
                      (0, d.jsx)("div", { className: "flat__label", children: "Bought" }),
                      (0, d.jsx)("div", {
                        className: "flat__value",
                        children: a.bought_date ? Kt(a.bought_date) : "\u2014",
                      }),
                    ],
                  }),
                  a.price != null &&
                    (0, d.jsxs)("div", {
                      className: "flat__end",
                      children: [
                        (0, d.jsx)("div", { className: "flat__label", children: "Price" }),
                        (0, d.jsx)("div", {
                          className: "flat__value",
                          children: a.price.toLocaleString("en-US"),
                        }),
                      ],
                    }),
                ],
              }),
            a.store &&
              (0, d.jsx)("div", {
                className: "flat__row",
                children: (0, d.jsxs)("div", {
                  className: "flat__body",
                  children: [
                    (0, d.jsx)("div", { className: "flat__label", children: "Store" }),
                    (0, d.jsx)("div", { className: "flat__value", children: a.store }),
                  ],
                }),
              }),
            a.url &&
              (0, d.jsxs)("a", {
                className: "flat__row",
                href: a.url,
                target: "_blank",
                rel: "noreferrer",
                children: [
                  (0, d.jsxs)("div", {
                    className: "flat__body",
                    children: [
                      (0, d.jsx)("div", { className: "flat__label", children: "Link" }),
                      (0, d.jsx)("div", {
                        className: "flat__value",
                        style: {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        },
                        children: a.url,
                      }),
                    ],
                  }),
                  (0, d.jsx)("span", {
                    className: "flat__chev",
                    "aria-hidden": "true",
                    children: (0, d.jsx)(Do, {}),
                  }),
                ],
              }),
          ],
        }),
        a.notes &&
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("div", {
                className: "field__hint",
                style: { marginBottom: 6 },
                children: "Notes",
              }),
              (0, d.jsx)("div", { className: "note-block", children: a.notes }),
            ],
          }),
        b.length > 0 &&
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("div", {
                className: "field__hint",
                style: { marginBottom: 6 },
                children: "History",
              }),
              (0, d.jsx)("div", {
                className: "flat",
                style: { marginBottom: 14 },
                children: b.map((n) => {
                  let p = e.find((S) => S.id === n.bike_id),
                    C = Po(
                      l.filter(
                        (S) =>
                          S.bike_id === n.bike_id &&
                          S.date >= n.from_date &&
                          (!n.to_date || S.date < n.to_date),
                      ),
                    );
                  return (0, d.jsxs)(
                    "div",
                    {
                      className: "flat__row",
                      children: [
                        (0, d.jsxs)("div", {
                          className: "flat__body",
                          children: [
                            (0, d.jsxs)("div", {
                              className: "flat__label",
                              children: [
                                Sl(n.from_date),
                                " \u2013 ",
                                n.to_date ? Sl(n.to_date) : "now",
                              ],
                            }),
                            (0, d.jsx)("div", {
                              className: "flat__value",
                              children: p ? `${p.name} ${p.model}` : "(deleted bike)",
                            }),
                          ],
                        }),
                        (0, d.jsx)("div", {
                          className: "flat__end",
                          children: (0, d.jsxs)("div", {
                            className: "flat__value",
                            children: [Da(C), " km"],
                          }),
                        }),
                      ],
                    },
                    n.id,
                  );
                }),
              }),
            ],
          }),
        (0, d.jsx)("div", {
          className: "field__hint",
          style: { marginBottom: 6 },
          children: "Service history",
        }),
        T.length === 0
          ? (0, d.jsx)("div", {
              className: "field__hint",
              style: { marginBottom: 12 },
              children: "Nothing logged for this part yet.",
            })
          : (0, d.jsx)("div", {
              className: "flat",
              style: { marginBottom: 12 },
              children: T.map((n) =>
                (0, d.jsxs)(
                  "div",
                  {
                    className: "flat__row",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "flat__body",
                        children: [
                          (0, d.jsx)("div", { className: "flat__label", children: Sl(n.date) }),
                          (0, d.jsx)("div", { className: "flat__value", children: n.title }),
                          n.notes &&
                            (0, d.jsx)("div", {
                              className: "flat__label service-notes",
                              children: n.notes,
                            }),
                        ],
                      }),
                      n.cost != null &&
                        (0, d.jsx)("div", {
                          className: "flat__end",
                          children: (0, d.jsx)("div", {
                            className: "flat__value",
                            children: n.cost.toLocaleString("en-US"),
                          }),
                        }),
                    ],
                  },
                  n.id,
                ),
              ),
            }),
      ],
    });
  }
  function Im({ bikes: a, onPick: e }) {
    let t = a.filter((l) => !l.retired && !l.trainer);
    return (0, d.jsx)("div", {
      className: "flat",
      children: t.map((l) =>
        (0, d.jsxs)(
          "button",
          {
            className: "flat__row",
            onClick: () => e(l.id),
            children: [
              (0, d.jsx)("div", {
                className: "flat__body",
                children: (0, d.jsxs)("div", {
                  className: "flat__value",
                  children: [l.name, " ", l.model],
                }),
              }),
              (0, d.jsx)("span", {
                className: "flat__chev",
                "aria-hidden": "true",
                children: (0, d.jsx)(ue, {}),
              }),
            ],
          },
          l.id,
        ),
      ),
    });
  }
  function Am({ parts: a, installs: e, rides: t, onMount: l, onNew: u }) {
    let o = a.filter((i) => !i.retired && !jt(e, i.id));
    return (0, d.jsxs)(d.Fragment, {
      children: [
        o.length > 0 &&
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("div", {
                className: "field__hint",
                style: { marginBottom: 6 },
                children: "From the shelf",
              }),
              (0, d.jsx)("div", {
                className: "flat",
                style: { marginBottom: 14 },
                children: o.map((i) => {
                  let f = Au(i, e, t);
                  return (0, d.jsxs)(
                    "button",
                    {
                      className: "flat__row",
                      onClick: () => l(i),
                      children: [
                        (0, d.jsx)("span", {
                          className: "circle circle--tint circle--sm",
                          "aria-hidden": "true",
                          children: (0, d.jsx)(Iu, { type: i.type }),
                        }),
                        (0, d.jsxs)("div", {
                          className: "flat__body",
                          children: [
                            (0, d.jsx)("div", { className: "flat__value", children: i.name }),
                            (0, d.jsxs)("div", {
                              className: "flat__label",
                              children: [
                                Da(f),
                                " km used",
                                i.interval_m ? ` \xB7 ${Da(i.interval_m)} km interval` : "",
                                i.weight_g ? ` \xB7 ${i.weight_g} g` : "",
                              ],
                            }),
                          ],
                        }),
                        (0, d.jsx)("span", {
                          className: "flat__chev",
                          "aria-hidden": "true",
                          children: (0, d.jsx)(ue, {}),
                        }),
                      ],
                    },
                    i.id,
                  );
                }),
              }),
            ],
          }),
        (0, d.jsxs)("button", {
          className: "btn btn--accent",
          onClick: u,
          children: [(0, d.jsx)(Ce, {}), " New part"],
        }),
      ],
    });
  }
  function km({
    entry: a,
    parts: e,
    installs: t,
    bikeId: l,
    presetPartId: u,
    onSave: o,
    onDelete: i,
  }) {
    let [f, r] = (0, O.useState)(a?.date || ae()),
      [c, g] = (0, O.useState)(a?.title || ""),
      [v, h] = (0, O.useState)(a?.notes || ""),
      [x, I] = (0, O.useState)(a?.part_id || u || ""),
      [q, M] = (0, O.useState)(a?.cost != null ? String(a.cost) : ""),
      s = Xo(e, t, l),
      m = a?.part_id || u,
      L = m && !s.find((b) => b.id === m) ? e.find((b) => b.id === m) : null;
    return (
      wi("Save", !c.trim(), () =>
        o({
          date: f,
          title: c.trim(),
          notes: v.trim(),
          part_id: x || null,
          cost: q !== "" ? Number(q) : null,
        }),
      ),
      (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsxs)("div", {
            className: "field__row",
            children: [
              (0, d.jsx)(fa, {
                label: "Date",
                children: (0, d.jsx)("input", {
                  type: "date",
                  value: f,
                  max: ae(),
                  onChange: (b) => r(b.target.value),
                }),
              }),
              (0, d.jsx)(fa, {
                label: "Cost",
                children: (0, d.jsx)("input", {
                  type: "number",
                  inputMode: "decimal",
                  min: "0",
                  value: q,
                  onChange: (b) => M(b.target.value),
                  placeholder: "0",
                }),
              }),
            ],
          }),
          (0, d.jsx)(fa, {
            label: "What was done *",
            children: (0, d.jsx)("input", {
              value: c,
              onChange: (b) => g(b.target.value),
              placeholder: "Replaced chain",
            }),
          }),
          (0, d.jsx)(fa, {
            label: "Part serviced (optional)",
            children: (0, d.jsxs)("select", {
              value: x,
              onChange: (b) => I(b.target.value),
              children: [
                (0, d.jsx)("option", { value: "", children: "Whole bike / not specific" }),
                s.map((b) => (0, d.jsx)("option", { value: b.id, children: b.name }, b.id)),
                L &&
                  (0, d.jsxs)("option", {
                    value: L.id,
                    children: [L.name, " (no longer on this bike)"],
                  }),
              ],
            }),
          }),
          (0, d.jsx)(fa, {
            label: "Notes",
            children: (0, d.jsx)("textarea", {
              rows: "3",
              value: v,
              onChange: (b) => h(b.target.value),
              placeholder: "Waxed, quick-link\u2026",
            }),
          }),
          a &&
            i &&
            (0, d.jsxs)("button", {
              className: "btn btn--ghost",
              onClick: i,
              children: [(0, d.jsx)(vt, {}), " Delete entry"],
            }),
        ],
      })
    );
  }
  function qm({ bikes: a, rides: e, onFinish: t }) {
    let [l, u] = (0, O.useState)("pick"),
      [o, i] = (0, O.useState)(null),
      [f, r] = (0, O.useState)(null),
      [c, g] = (0, O.useState)({}),
      [v, h] = (0, O.useState)(!0),
      [x, I] = (0, O.useState)(!0),
      [q, M] = (0, O.useState)("keep"),
      [s, m] = (0, O.useState)({ done: 0, total: 0, phase: "" }),
      [L, b] = (0, O.useState)(null),
      T = (0, O.useRef)(),
      N = new Set(e.filter((S) => S.strava_id).map((S) => S.strava_id)),
      n = async (S) => {
        (i(null), u("analyzing"));
        try {
          let A = null,
            B = null,
            E = null;
          if (/\.zip$/i.test(S.name)) {
            ((B = S), (E = await sm(S)));
            let D = Object.keys(E).find((ha) => /(^|\/)activities\.csv$/.test(ha));
            if (!D) throw new Error("No activities.csv found in the ZIP");
            A = new TextDecoder().decode(await M0(S, E[D]));
          } else A = await S.text();
          let U = vm(A);
          if (U.error) throw new Error(U.error);
          let Z = U.rides.filter((D) => !N.has(D.strava_id));
          if (!U.rides.length) throw new Error("No rides found in the file");
          let H = null;
          if (E) {
            H = {};
            for (let D of Object.keys(E)) H[D.split("/").pop()] = E[D];
          }
          let ea = (D) => (D && (E?.[D] || H?.[D.split("/").pop()])) || null,
            G = /\.(fit\.gz|fit|gpx)$/i,
            ka = B
              ? U.rides
                  .filter((D) => D.filename && G.test(D.filename) && ea(D.filename))
                  .map((D) => ({
                    row: D,
                    existing: e.find((ha) => ha.strava_id === D.strava_id && !ha.track_key),
                  }))
                  .filter((D) => D.existing)
                  .map((D) => ({ rideId: D.existing.id, filename: D.row.filename }))
              : [];
          r({ all: U.rides, fresh: Z, zipFile: B, zipIndex: E, zipByBase: H, backfill: ka });
          let Q = [...new Set(Z.map((D) => D.gear))],
            X = {};
          for (let D of Q) {
            let ha = a.find(
              (aa) =>
                aa.strava_gear_name === D ||
                (D && (`${aa.name} ${aa.model}`.trim() === D || aa.name === D)),
            );
            X[D] = ha ? ha.id : D ? "new" : "skip";
          }
          (g(X), u("map"));
        } catch (A) {
          (i(String(A.message || A)), u("pick"));
        }
      },
      p = () => {
        if (!f) return [];
        let S = e.filter((A) => A.source !== "import");
        return f.fresh.filter((A) => {
          let B = c[A.gear];
          return !B || B === "skip"
            ? !1
            : S.some(
                (E) =>
                  E.date === A.date &&
                  (B === "new" || E.bike_id === B) &&
                  Math.abs(E.distance - A.distance) <= Math.max(2e3, A.distance * 0.05),
              );
        });
      },
      C = async () => {
        u("importing");
        let { fresh: S, zipFile: A, zipIndex: B, zipByBase: E, backfill: U } = f,
          Z = v ? new Set(p().map((R) => R.strava_id)) : new Set(),
          H = [],
          ea = {};
        for (let [R, V] of Object.entries(c))
          if (V !== "skip")
            if (V === "new") {
              let y = {
                id: Ue(),
                name: R,
                model: "",
                type: "other",
                initial_odometer: 0,
                primary: !1,
                retired: !1,
                strava_gear_name: R,
              };
              (H.push(y), (ea[R] = y.id));
            } else ea[R] = V;
        let G = [];
        for (let R of S) {
          let V = c[R.gear];
          if (R.virtual && q === "skip") continue;
          let y = R.virtual && q !== "keep";
          (!y && (!V || V === "skip")) ||
            Z.has(R.strava_id) ||
            G.push({
              id: Ue(),
              bike_id: y ? q : ea[R.gear],
              source: "import",
              strava_id: R.strava_id,
              date: R.date,
              name: R.name,
              distance: R.distance,
              moving_time: R.moving_time,
              elevation: R.elevation,
              virtual: R.virtual || void 0,
              _filename: R.filename,
            });
        }
        let ka = 0,
          Q = 0,
          X = !1,
          D = (R) => (R && (B?.[R] || E?.[R.split("/").pop()])) || null,
          ha = /\.(fit\.gz|fit|gpx)$/i,
          aa = [];
        if (A) {
          for (let R of G)
            R._filename &&
              ha.test(R._filename) &&
              D(R._filename) &&
              aa.push({ rideId: R.id, filename: R._filename, isNew: !0 });
          if (x) for (let R of U) aa.push({ rideId: R.rideId, filename: R.filename, isNew: !1 });
        }
        m({ done: 0, total: aa.length, phase: "Reading GPS tracks" });
        let xa = 25,
          P = Date.now().toString(36),
          Y = {},
          j = {},
          ra = 0,
          K = 0,
          ga = async () => {
            if (!K) return;
            let R = `tracks:${P}-${ra}`;
            if (await Lt(R, j)) for (let y of Object.keys(j)) Y[y] = R;
            else X = !0;
            ((j = {}), (K = 0), ra++);
          };
        for (let R of aa) {
          try {
            let V = await M0(A, D(R.filename)),
              y = [];
            (/\.fit\.gz$/i.test(R.filename)
              ? (y = w0(await cm(V)))
              : /\.fit$/i.test(R.filename)
                ? (y = w0(V))
                : /\.gpx$/i.test(R.filename) && (y = pm(new TextDecoder().decode(V))),
              y.length >= 2 &&
                ((j[R.rideId] = mm(y)), K++, R.isNew ? ka++ : Q++, K >= xa && (await ga())));
          } catch {}
          m((V) => ({ ...V, done: V.done + 1 }));
        }
        await ga();
        for (let R of G) (delete R._filename, Y[R.id] && (R.track_key = Y[R.id]));
        m({ done: 1, total: 1, phase: "Saving" });
        let da = [
            ...a.map((R) => {
              let V = Object.entries(ea).find(([, y]) => y === R.id)?.[0];
              return V && V !== R.strava_gear_name ? { ...R, strava_gear_name: V } : R;
            }),
            ...H,
          ],
          ma = [...e.map((R) => (Y[R.id] ? { ...R, track_key: Y[R.id] } : R)), ...G];
        (b({
          rides: G.length,
          bikes: H.length,
          tracks: ka,
          backfilled: Q,
          dupsSkipped: Z.size,
          alreadyImported: f.all.length - S.length,
          noZip: !A,
          noMatches: !!A && aa.length === 0,
          saveFailed: X,
        }),
          t(da, ma),
          u("done"));
      };
    if (l === "pick" || l === "analyzing")
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsxs)("div", {
            className: "import-drop",
            onClick: () => l === "pick" && T.current?.click(),
            children: [
              l === "analyzing" ? (0, d.jsx)(xu, { className: "spin" }) : (0, d.jsx)(Lu, {}),
              l === "analyzing"
                ? "Reading the archive\u2026"
                : (0, d.jsxs)(d.Fragment, {
                    children: [
                      "Tap to choose your Strava export",
                      (0, d.jsx)("br", {}),
                      "(the whole ZIP, or activities.csv alone)",
                    ],
                  }),
            ],
          }),
          (0, d.jsx)("input", {
            ref: T,
            type: "file",
            accept: ".zip,.csv",
            style: { display: "none" },
            onChange: (S) => S.target.files?.[0] && n(S.target.files[0]),
          }),
          o &&
            (0, d.jsx)("div", {
              className: "field__hint",
              style: { color: "var(--warn)" },
              children: o,
            }),
          (0, d.jsx)("div", {
            className: "field__hint",
            children:
              "With the full ZIP you also get route maps from the GPS files. The CSV alone imports distances and dates.",
          }),
        ],
      });
    if (l === "map") {
      let S = Object.keys(c),
        A = p(),
        B = f.fresh.filter((E) => c[E.gear] && c[E.gear] !== "skip").length;
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsxs)("div", {
            className: "field__hint",
            style: { marginBottom: 14 },
            children: [
              f.fresh.length,
              " new rides found",
              f.all.length - f.fresh.length > 0 &&
                ` (${f.all.length - f.fresh.length} already imported)`,
              ". Choose where each bike's rides go:",
            ],
          }),
          S.map((E) => {
            let U = f.fresh.filter((Z) => Z.gear === E).length;
            return (0, d.jsx)(
              fa,
              {
                label: `${E || "No bike assigned"} \xB7 ${U} rides`,
                children: (0, d.jsxs)("select", {
                  value: c[E],
                  onChange: (Z) => g({ ...c, [E]: Z.target.value }),
                  children: [
                    E &&
                      (0, d.jsxs)("option", { value: "new", children: ['Create bike "', E, '"'] }),
                    a.map((Z) =>
                      (0, d.jsxs)(
                        "option",
                        {
                          value: Z.id,
                          children: [
                            "\u2192 ",
                            Z.name,
                            " ",
                            Z.model,
                            Z.retired ? " (retired)" : "",
                          ],
                        },
                        Z.id,
                      ),
                    ),
                    (0, d.jsx)("option", { value: "skip", children: "Skip these rides" }),
                  ],
                }),
              },
              E || "(none)",
            );
          }),
          f.fresh.some((E) => E.virtual) &&
            (0, d.jsx)(fa, {
              label: `Virtual rides \xB7 ${f.fresh.filter((E) => E.virtual).length}`,
              children: (0, d.jsxs)("select", {
                value: q,
                onChange: (E) => M(E.target.value),
                children: [
                  (0, d.jsx)("option", { value: "keep", children: "Keep with their bike (above)" }),
                  a.map((E) =>
                    (0, d.jsxs)(
                      "option",
                      {
                        value: E.id,
                        children: ["\u2192 ", E.name, " ", E.model, E.trainer ? " (trainer)" : ""],
                      },
                      E.id,
                    ),
                  ),
                  (0, d.jsx)("option", { value: "skip", children: "Skip virtual rides" }),
                ],
              }),
            }),
          A.length > 0 &&
            (0, d.jsxs)("div", {
              className: "toggle",
              children: [
                (0, d.jsxs)("span", {
                  children: [
                    "Skip ",
                    A.length,
                    " likely duplicate",
                    A.length > 1 ? "s" : "",
                    " of manual entries",
                  ],
                }),
                (0, d.jsx)("button", {
                  className: v ? "on" : "",
                  "aria-pressed": v,
                  onClick: () => h(!v),
                  "aria-label": "Toggle duplicate skipping",
                }),
              ],
            }),
          f.backfill.length > 0 &&
            (0, d.jsxs)("div", {
              className: "toggle",
              children: [
                (0, d.jsxs)("span", {
                  children: ["Add route maps to ", f.backfill.length, " earlier rides"],
                }),
                (0, d.jsx)("button", {
                  className: x ? "on" : "",
                  "aria-pressed": x,
                  onClick: () => I(!x),
                  "aria-label": "Toggle map backfill",
                }),
              ],
            }),
          (0, d.jsxs)("button", {
            className: "btn btn--accent",
            disabled: !B && !(x && f.backfill.length),
            onClick: C,
            children: [
              (0, d.jsx)(bl, {}),
              " ",
              B ? `Import ${B} rides` : `Add maps to ${f.backfill.length} rides`,
            ],
          }),
        ],
      });
    }
    if (l === "importing") {
      let S = s.total ? Math.round((s.done / s.total) * 100) : 0;
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsxs)("div", {
            className: "field__hint",
            children: [s.phase, "\u2026 ", s.done, "/", s.total],
          }),
          (0, d.jsx)("div", {
            className: "progress",
            children: (0, d.jsx)("div", { style: { width: `${S}%` } }),
          }),
          (0, d.jsx)("div", {
            className: "field__hint",
            children: "Keep this open \u2014 big archives take a minute.",
          }),
        ],
      });
    }
    return (0, d.jsxs)(d.Fragment, {
      children: [
        (0, d.jsxs)("div", {
          className: "empty",
          style: { textAlign: "left" },
          children: [
            (0, d.jsx)("strong", { style: { color: "var(--ink)" }, children: "Import complete." }),
            (0, d.jsx)("br", {}),
            L.rides,
            " rides imported",
            L.bikes ? `, ${L.bikes} bikes created` : "",
            ".",
            (0, d.jsx)("br", {}),
            L.tracks > 0 &&
              (0, d.jsxs)(d.Fragment, {
                children: [L.tracks, " routes with maps.", (0, d.jsx)("br", {})],
              }),
            L.backfilled > 0 &&
              (0, d.jsxs)(d.Fragment, {
                children: [L.backfilled, " earlier rides got their maps.", (0, d.jsx)("br", {})],
              }),
            L.noMatches &&
              (0, d.jsxs)("span", {
                style: { color: "var(--warn)" },
                children: [
                  "No GPS files matched inside this ZIP \u2014 the archive may be incomplete.",
                  (0, d.jsx)("br", {}),
                ],
              }),
            L.saveFailed &&
              (0, d.jsxs)("span", {
                style: { color: "var(--warn)" },
                children: [
                  "Some maps couldn't be saved \u2014 try importing again.",
                  (0, d.jsx)("br", {}),
                ],
              }),
            L.dupsSkipped > 0 &&
              (0, d.jsxs)(d.Fragment, {
                children: [L.dupsSkipped, " duplicates skipped.", (0, d.jsx)("br", {})],
              }),
            L.alreadyImported > 0 &&
              (0, d.jsxs)(d.Fragment, {
                children: [L.alreadyImported, " were already in the app.", (0, d.jsx)("br", {})],
              }),
            L.noZip &&
              (0, d.jsx)(d.Fragment, {
                children:
                  "No ZIP \u2014 import again with the full archive anytime to add route maps.",
              }),
          ],
        }),
        (0, d.jsxs)("button", {
          className: "btn btn--accent",
          onClick: () => t(null, null, !0),
          children: [(0, d.jsx)(xl, {}), " Done"],
        }),
      ],
    });
  }
  function Ai({ title: a, data: e, unit: t, fmt: l }) {
    let u = Math.max(...e.map((i) => i.value), 1),
      o = l || ((i) => i);
    return (0, d.jsxs)("div", {
      className: "stat-block",
      children: [
        (0, d.jsx)("div", { className: "panel__label", style: { marginBottom: 12 }, children: a }),
        (0, d.jsx)("div", {
          className: "bars",
          children: e.map((i) =>
            (0, d.jsxs)(
              "div",
              {
                className: `bars__row${i.value === u && i.value > 0 ? " top" : ""}`,
                children: [
                  (0, d.jsx)("div", { className: "bars__label", children: i.label }),
                  (0, d.jsx)("div", {
                    className: "bars__track",
                    children: (0, d.jsx)("div", {
                      className: "bars__fill",
                      style: { width: `${(i.value / u) * 100}%` },
                    }),
                  }),
                  (0, d.jsxs)("div", {
                    className: "bars__val",
                    children: [o(i.value), t ? ` ${t}` : ""],
                  }),
                ],
              },
              i.label,
            ),
          ),
        }),
      ],
    });
  }
  function Mm({ bikes: a, rides: e, parts: t, installs: l, service: u }) {
    let o = a.filter((g) => !g.trainer),
      i = (g) => (g.initial_odometer || 0) + Po(Go(e, g.id)),
      f = (g) =>
        (g.price || 0) +
        Xo(t, l, g.id).reduce((v, h) => v + (h.price || 0), 0) +
        u.filter((v) => v.bike_id === g.id).reduce((v, h) => v + (h.cost || 0), 0),
      r = (g) => u.filter((v) => v.bike_id === g.id),
      c = (g) => g.toLocaleString("en-US");
    return (0, d.jsxs)("div", {
      className: "app",
      children: [
        (0, d.jsxs)("div", {
          className: "topbar",
          children: [(0, d.jsx)("span", {}), (0, d.jsx)("span", {})],
        }),
        (0, d.jsx)("h1", { className: "display", children: "Stats" }),
        (0, d.jsxs)("p", {
          className: "display__sub",
          children: [o.length, " bike", o.length !== 1 ? "s" : "", " compared"],
        }),
        (0, d.jsx)(Ai, {
          title: "Distance",
          unit: "km",
          fmt: (g) => Da(g),
          data: o.map((g) => ({ label: g.name, value: i(g) })),
        }),
        (0, d.jsx)(Ai, {
          title: "Money in \u2014 bike + parts on it + service",
          fmt: c,
          data: o.map((g) => ({ label: g.name, value: f(g) })),
        }),
        (0, d.jsx)(Ai, {
          title: "Service entries",
          data: o.map((g) => ({ label: g.name, value: r(g).length })),
        }),
        (0, d.jsx)(Ai, {
          title: "Service cost",
          fmt: c,
          data: o.map((g) => ({
            label: g.name,
            value: r(g).reduce((v, h) => v + (h.cost || 0), 0),
          })),
        }),
        (0, d.jsxs)("div", {
          className: "stat-block",
          children: [
            (0, d.jsx)("div", {
              className: "panel__label",
              style: { marginBottom: 12 },
              children: "Cost per kilometre",
            }),
            o.map((g) => {
              let v = i(g) / 1e3,
                h = f(g);
              return (0, d.jsxs)(
                "div",
                {
                  className: "bars__row",
                  style: { marginBottom: 8 },
                  children: [
                    (0, d.jsx)("div", {
                      className: "bars__label",
                      style: { width: "auto", flex: 1 },
                      children: g.name,
                    }),
                    (0, d.jsx)("div", {
                      className: "bars__val",
                      children: v > 0 && h > 0 ? (h / v).toFixed(2) : "\u2014",
                    }),
                  ],
                },
                g.id,
              );
            }),
          ],
        }),
        (0, d.jsx)("div", {
          className: "field__hint",
          style: { color: "var(--mute)" },
          children:
            "Part prices count toward the bike they're mounted on right now. Trainers sit this one out.",
        }),
      ],
    });
  }
  function wm({ active: a, onGarage: e, onStorage: t, onLogRide: l, onStats: u, onSettings: o }) {
    return (0, d.jsxs)("nav", {
      className: "tabbar",
      children: [
        (0, d.jsx)("button", {
          className: a === "garage" ? "on" : "",
          onClick: e,
          "aria-label": "Garage",
          children: (0, d.jsx)(vu, {}),
        }),
        (0, d.jsx)("button", {
          className: a === "storage" ? "on" : "",
          onClick: t,
          "aria-label": "Storage",
          children: (0, d.jsx)(yu, {}),
        }),
        (0, d.jsx)("button", {
          className: "tab-plus",
          onClick: l,
          "aria-label": "Log ride",
          children: (0, d.jsx)(Ce, {}),
        }),
        (0, d.jsx)("button", {
          className: a === "stats" ? "on" : "",
          onClick: u,
          "aria-label": "Stats",
          children: (0, d.jsx)(Wt, {}),
        }),
        (0, d.jsx)("button", {
          onClick: o,
          "aria-label": "Settings",
          children: (0, d.jsx)(Uo, {}),
        }),
      ],
    });
  }
  function NotifPanel({ bikes: a, parts: e, installs: t, rides: l, onOpen: u }) {
    let o = svcAlerts(a, e, t, l);
    return (0, d.jsx)("div", {
      className: "flat",
      children: o.length
        ? o.map((i) =>
            (0, d.jsxs)(
              "button",
              {
                className: "flat__row",
                onClick: () => u(i.bike.id),
                children: [
                  (0, d.jsx)("span", {
                    className: "circle circle--tint circle--sm",
                    "aria-hidden": "true",
                    children: (0, d.jsx)(Iu, { type: i.part.type }),
                  }),
                  (0, d.jsxs)("div", {
                    className: "flat__body",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "flat__value",
                        children: [
                          i.part.name,
                          (0, d.jsx)("span", {
                            className: "chip chip--over",
                            style: { marginLeft: 8 },
                            children: "Due",
                          }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className: "flat__label",
                        children: [
                          i.bike.name,
                          " \xB7 ",
                          Da(i.used),
                          " / ",
                          Da(i.part.interval_m),
                          " km",
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)("span", {
                    className: "flat__chev",
                    "aria-hidden": "true",
                    children: (0, d.jsx)(ue, {}),
                  }),
                ],
              },
              i.part.id,
            ),
          )
        : (0, d.jsx)("div", {
            className: "field__hint",
            style: { padding: "8px 0" },
            children:
              "Nothing needs service right now. Every tracked component is within its interval.",
          }),
    });
  }
  function Tm({
    bikes: a,
    rides: e,
    parts: t,
    installs: l,
    photos: u,
    onOpenBike: o,
    onAddBike: i,
    onImport: f,
    onNotifications: onNotifs,
  }) {
    let r = a.reduce((v, h) => v + Ho(h, e), 0),
      c = a.filter((v) => !v.retired).sort((v, h) => (h.primary ? 1 : 0) - (v.primary ? 1 : 0)),
      g = a.filter((v) => v.retired),
      nAlerts = svcAlerts(a, t, l, e);
    return (0, d.jsxs)("div", {
      className: "app",
      children: [
        (0, d.jsxs)("div", {
          className: "topbar",
          children: [
            (0, d.jsxs)("button", {
              className: "circle circle--light",
              "aria-label": "Notifications",
              onClick: onNotifs,
              style: { position: "relative" },
              children: [
                (0, d.jsx)(Nbell, {}),
                nAlerts.length > 0 &&
                  (0, d.jsx)("span", { className: "notif-badge", children: nAlerts.length }),
              ],
            }),
            (0, d.jsx)("div", {
              className: "topbar__group",
              children: (0, d.jsx)("button", {
                className: "circle circle--light",
                "aria-label": "Add bike",
                onClick: i,
                children: (0, d.jsx)(Ce, {}),
              }),
            }),
          ],
        }),
        (0, d.jsx)("h1", { className: "display", children: "Garage" }),
        (0, d.jsx)("p", {
          className: "display__sub",
          children:
            a.length === 0
              ? "No bikes yet"
              : `${c.length} bike${c.length !== 1 ? "s" : ""}` +
                (g.length ? ` \xB7 ${g.length} retired` : "") +
                ` \xB7 ${Da(r)} km together`,
        }),
        a.length === 0
          ? (0, d.jsxs)("div", {
              className: "empty--hero",
              children: [
                (0, d.jsx)(Vo, {}),
                (0, d.jsx)("p", {
                  children:
                    "Every kilometer, every chain, every service \u2014 tracked in one place.",
                }),
                (0, d.jsxs)("button", {
                  className: "btn btn--accent",
                  style: { width: "auto", padding: "14px 24px", position: "relative" },
                  onClick: i,
                  children: [(0, d.jsx)(Ce, {}), " Add your first bike"],
                }),
                (0, d.jsxs)("button", {
                  className: "btn",
                  style: {
                    width: "auto",
                    padding: "14px 24px",
                    position: "relative",
                    background: "rgba(255,255,255,.12)",
                    color: "#fff",
                  },
                  onClick: f,
                  children: [(0, d.jsx)(bl, {}), " Import Strava archive"],
                }),
              ],
            })
          : (0, d.jsxs)(d.Fragment, {
              children: [
                c.map((v) =>
                  (0, d.jsxs)(
                    "button",
                    {
                      className: "bikecard",
                      onClick: () => o(v.id),
                      children: [
                        u[v.id]
                          ? (0, d.jsxs)(d.Fragment, {
                              children: [
                                (0, d.jsx)("img", {
                                  className: "hero__photo",
                                  src: u[v.id],
                                  alt: "",
                                }),
                                (0, d.jsx)("div", { className: "hero__scrim" }),
                              ],
                            })
                          : (0, d.jsx)(Vo, {}),
                        (0, d.jsxs)("span", {
                          className: "glass",
                          children: [
                            (0, d.jsxs)("span", {
                              className: "bikecard__name",
                              children: [
                                v.name,
                                " ",
                                v.model,
                                (0, d.jsxs)("span", { children: [Da(Ho(v, e)), " km lifetime"] }),
                              ],
                            }),
                            rm(v, t, l, e) &&
                              (0, d.jsx)("span", {
                                className: "bikecard__alert",
                                "aria-label": "Service due",
                              }),
                            (0, d.jsx)("span", {
                              className: "circle circle--light circle--sm",
                              "aria-hidden": "true",
                              children: (0, d.jsx)(ue, {}),
                            }),
                          ],
                        }),
                      ],
                    },
                    v.id,
                  ),
                ),
                g.length > 0 &&
                  (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)("div", {
                        className: "section-head",
                        children: (0, d.jsx)("h2", { children: "Retired" }),
                      }),
                      g.map((v) =>
                        (0, d.jsxs)(
                          "button",
                          {
                            className: "bikecard bikecard--retired",
                            onClick: () => o(v.id),
                            children: [
                              u[v.id]
                                ? (0, d.jsxs)(d.Fragment, {
                                    children: [
                                      (0, d.jsx)("img", {
                                        className: "hero__photo",
                                        src: u[v.id],
                                        alt: "",
                                      }),
                                      (0, d.jsx)("div", { className: "hero__scrim" }),
                                    ],
                                  })
                                : (0, d.jsx)(Vo, {}),
                              (0, d.jsxs)("span", {
                                className: "glass",
                                children: [
                                  (0, d.jsxs)("span", {
                                    className: "bikecard__name",
                                    children: [
                                      v.name,
                                      " ",
                                      v.model,
                                      (0, d.jsxs)("span", {
                                        children: ["Retired \xB7 ", Da(Ho(v, e)), " km lifetime"],
                                      }),
                                    ],
                                  }),
                                  (0, d.jsx)("span", {
                                    className: "circle circle--light circle--sm",
                                    "aria-hidden": "true",
                                    children: (0, d.jsx)(ue, {}),
                                  }),
                                ],
                              }),
                            ],
                          },
                          v.id,
                        ),
                      ),
                    ],
                  }),
              ],
            }),
      ],
    });
  }
  function Dm({ parts: a, installs: e, rides: t, bikes: l, onAddPart: u, onEditPart: o }) {
    let [i, f] = (0, O.useState)(!1),
      r = a.filter((h) => !h.retired),
      c = r.filter((h) => !jt(e, h.id)),
      g = r.filter((h) => jt(e, h.id)),
      v = a.filter((h) => h.retired);
    return (0, d.jsxs)("div", {
      className: "app",
      children: [
        (0, d.jsxs)("div", {
          className: "topbar",
          children: [
            (0, d.jsx)("span", {}),
            (0, d.jsx)("button", {
              className: "circle circle--light",
              "aria-label": "Add part",
              onClick: u,
              children: (0, d.jsx)(Ce, {}),
            }),
          ],
        }),
        (0, d.jsx)("h1", { className: "display", children: "Storage" }),
        (0, d.jsx)("p", {
          className: "display__sub",
          children:
            r.length === 0
              ? "No parts yet"
              : `${r.length} part${r.length !== 1 ? "s" : ""} \xB7 ${c.length} on the shelf`,
        }),
        (0, d.jsx)("div", {
          className: "section-head",
          children: (0, d.jsx)("h2", { children: "On the shelf" }),
        }),
        c.length === 0
          ? (0, d.jsx)("div", {
              className: "empty",
              children: "Nothing on the shelf. Dismount a part from a bike or add one here.",
            })
          : (0, d.jsx)("div", {
              className: "flat",
              children: c.map((h) =>
                (0, d.jsx)(qi, { p: h, installs: e, rides: t, onOpen: () => o(h) }, h.id),
              ),
            }),
        (0, d.jsx)("div", {
          className: "section-head",
          children: (0, d.jsx)("h2", { children: "On bikes" }),
        }),
        g.length === 0
          ? (0, d.jsx)("div", { className: "empty", children: "No parts mounted yet." })
          : (0, d.jsx)("div", {
              className: "flat",
              children: g.map((h) => {
                let x = l.find((I) => I.id === jt(e, h.id));
                return (0, d.jsx)(
                  qi,
                  {
                    p: h,
                    installs: e,
                    rides: t,
                    meta: x ? `on ${x.name}` : "mounted",
                    onOpen: () => o(h),
                  },
                  h.id,
                );
              }),
            }),
        v.length > 0 &&
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsxs)("div", {
                className: "section-head",
                children: [
                  (0, d.jsxs)("h2", { children: ["Retired \xB7 ", v.length] }),
                  (0, d.jsx)("button", {
                    className: "circle circle--light circle--sm",
                    "aria-label": i ? "Hide retired parts" : "Show retired parts",
                    onClick: () => f(!i),
                    children: i ? (0, d.jsx)(Yt, {}) : (0, d.jsx)(Ll, {}),
                  }),
                ],
              }),
              i &&
                (0, d.jsx)("div", {
                  className: "flat",
                  children: v.map((h) =>
                    (0, d.jsx)(qi, { p: h, installs: e, rides: t, onOpen: () => o(h) }, h.id),
                  ),
                }),
            ],
          }),
      ],
    });
  }
  function Bm({
    bike: a,
    rides: e,
    parts: t,
    installs: l,
    service: u,
    photo: o,
    onBack: i,
    onEditBike: f,
    onOpenRide: r,
    onLogRide: c,
    onAddPart: g,
    onEditPart: v,
    onAddService: h,
    onEditService: x,
  }) {
    let I = Go(e, a.id).sort((S, A) => A.date.localeCompare(S.date)),
      q = Xo(t, l, a.id),
      M = u.filter((S) => S.bike_id === a.id).sort((S, A) => A.date.localeCompare(S.date)),
      [s, m] = (0, O.useState)(!1),
      [L, b] = (0, O.useState)(!1),
      T = s ? I : I.slice(0, 5),
      N = I.reduce((S, A) => S + (A.elevation || 0), 0) / 1e3,
      n = im(a, t, l),
      p = [
        n.base && `bike ${(n.base / 1e3).toFixed(1)}`,
        n.parts && `parts ${(n.parts / 1e3).toFixed(1)}`,
        n.water && `water ${(n.water / 1e3).toFixed(1)}`,
      ].filter(Boolean),
      C = n.total > 0 || a.bought_date || a.price != null || (a.retired && a.retired_date);
    return (0, d.jsxs)("div", {
      className: "app",
      children: [
        (0, d.jsxs)("div", {
          className: "topbar",
          children: [
            (0, d.jsx)("button", {
              className: "circle circle--light",
              "aria-label": "Back to garage",
              onClick: i,
              children: (0, d.jsx)(Yt, {}),
            }),
            (0, d.jsx)("div", {
              className: "topbar__group",
              children: (0, d.jsx)("button", {
                className: "circle circle--dark",
                "aria-label": "Edit bike",
                onClick: f,
                children: (0, d.jsx)(yl, {}),
              }),
            }),
          ],
        }),
        (0, d.jsxs)("h1", {
          className: "display",
          children: [
            a.name,
            a.model ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("br", {}), a.model] }) : null,
          ],
        }),
        q0(a) && (0, d.jsx)("p", { className: "display__sub", children: q0(a) }),
        (0, d.jsxs)("div", {
          className: "hero",
          children: [
            o
              ? (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)("img", {
                      className: "hero__photo",
                      src: o,
                      alt: `${a.name} ${a.model}`,
                    }),
                    (0, d.jsx)("div", { className: "hero__scrim" }),
                  ],
                })
              : (0, d.jsx)(Vo, {}),
            (0, d.jsxs)("div", {
              className: "glass",
              children: [
                (0, d.jsxs)("div", {
                  children: [
                    (0, d.jsx)("div", { className: "stat__label", children: "Lifetime" }),
                    (0, d.jsxs)("div", {
                      className: "stat__value",
                      children: [Da(Ho(a, e)), (0, d.jsx)("small", { children: "km" })],
                    }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  children: [
                    (0, d.jsx)("div", { className: "stat__label", children: "Rides" }),
                    (0, d.jsx)("div", { className: "stat__value", children: I.length }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  children: [
                    (0, d.jsx)("div", { className: "stat__label", children: "Elevation" }),
                    (0, d.jsxs)("div", {
                      className: "stat__value",
                      children: [N.toFixed(1), (0, d.jsx)("small", { children: "km" })],
                    }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  children: [
                    (0, d.jsx)("div", { className: "stat__label", children: "Since service" }),
                    (0, d.jsxs)("div", {
                      className: "stat__value stat__value--accent",
                      children: [Da(fm(a, e, u)), (0, d.jsx)("small", { children: "km" })],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        C &&
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("div", {
                className: "section-head",
                children: (0, d.jsx)("h2", { children: "About" }),
              }),
              (0, d.jsxs)("div", {
                className: "flat",
                children: [
                  n.total > 0 &&
                    (0, d.jsxs)("div", {
                      className: "flat__row",
                      children: [
                        (0, d.jsxs)("div", {
                          className: "flat__body",
                          children: [
                            (0, d.jsx)("div", {
                              className: "flat__label",
                              children: "Ride-ready weight",
                            }),
                            (0, d.jsxs)("div", {
                              className: "flat__value",
                              children: [(n.total / 1e3).toFixed(1), " kg"],
                            }),
                          ],
                        }),
                        p.length > 1 &&
                          (0, d.jsx)("div", {
                            className: "flat__end",
                            children: (0, d.jsx)("div", {
                              className: "flat__label",
                              children: p.join(" + "),
                            }),
                          }),
                      ],
                    }),
                  (a.bought_date || a.price != null) &&
                    (0, d.jsxs)("div", {
                      className: "flat__row",
                      children: [
                        (0, d.jsxs)("div", {
                          className: "flat__body",
                          children: [
                            (0, d.jsx)("div", { className: "flat__label", children: "Bought" }),
                            (0, d.jsx)("div", {
                              className: "flat__value",
                              children: a.bought_date ? Kt(a.bought_date) : "\u2014",
                            }),
                          ],
                        }),
                        a.price != null &&
                          (0, d.jsxs)("div", {
                            className: "flat__end",
                            children: [
                              (0, d.jsx)("div", { className: "flat__label", children: "Price" }),
                              (0, d.jsx)("div", {
                                className: "flat__value",
                                children: a.price.toLocaleString("en-US"),
                              }),
                            ],
                          }),
                      ],
                    }),
                  a.retired &&
                    a.retired_date &&
                    (0, d.jsx)("div", {
                      className: "flat__row",
                      children: (0, d.jsxs)("div", {
                        className: "flat__body",
                        children: [
                          (0, d.jsx)("div", { className: "flat__label", children: "Retired" }),
                          (0, d.jsx)("div", {
                            className: "flat__value",
                            children: Kt(a.retired_date),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          }),
        !a.trainer &&
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsxs)("div", {
                className: "section-head",
                children: [
                  (0, d.jsx)("h2", { children: "Components" }),
                  (0, d.jsx)("button", {
                    className: "circle circle--light circle--sm",
                    "aria-label": "Add part",
                    onClick: g,
                    children: (0, d.jsx)(Ce, {}),
                  }),
                ],
              }),
              q.length === 0
                ? (0, d.jsx)("div", {
                    className: "empty",
                    children: "Track a chain or tires to get wear reminders.",
                  })
                : (() => {
                    let S = q.filter((B) => B.interval_m && Au(B, l, e) / B.interval_m >= 0.75),
                      A = q.filter((B) => !S.includes(B));
                    return (0, d.jsxs)(d.Fragment, {
                      children: [
                        S.map((B) => {
                          let E = Au(B, l, e),
                            U = Mi(l, B.id)?.from_date,
                            Z = Sn(E, B.interval_m),
                            H = Math.min(100, (E / B.interval_m) * 100);
                          return (0, d.jsxs)(
                            "div",
                            {
                              className: "stat-card stat-card--tap",
                              role: "button",
                              tabIndex: 0,
                              onClick: () => v(B),
                              onKeyDown: (ea) => ea.key === "Enter" && v(B),
                              children: [
                                (0, d.jsxs)("div", {
                                  className: "stat-card__head",
                                  children: [
                                    (0, d.jsx)("span", {
                                      className: "circle circle--tint circle--sm",
                                      "aria-hidden": "true",
                                      children: (0, d.jsx)(Iu, { type: B.type }),
                                    }),
                                    (0, d.jsxs)("div", {
                                      className: "stat-card__title",
                                      children: [
                                        B.name,
                                        (0, d.jsxs)("span", {
                                          children: [
                                            "On this bike since ",
                                            U ? Kt(U) : "\u2014",
                                            B.weight_g ? ` \xB7 ${B.weight_g} g` : "",
                                          ],
                                        }),
                                      ],
                                    }),
                                    Z === "over" &&
                                      (0, d.jsx)("span", {
                                        className: "chip chip--over",
                                        children: "Due",
                                      }),
                                    Z === "near" &&
                                      (0, d.jsx)("span", {
                                        className: "chip chip--near",
                                        children: "Soon",
                                      }),
                                  ],
                                }),
                                (0, d.jsxs)("div", {
                                  className: `stat-card__panel${Z === "near" ? " stat-card__panel--near" : ""}`,
                                  children: [
                                    (0, d.jsxs)("div", {
                                      className: "stat-card__grid",
                                      children: [
                                        (0, d.jsxs)("div", {
                                          children: [
                                            (0, d.jsx)("div", {
                                              className: "panel__label",
                                              children: "Distance used",
                                            }),
                                            (0, d.jsxs)("div", {
                                              className: `panel__big${Z === "over" ? " panel__big--warn" : ""}`,
                                              children: [
                                                Da(E),
                                                (0, d.jsx)("small", { children: "km" }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, d.jsxs)("div", {
                                          className: "panel__side",
                                          children: [
                                            (0, d.jsx)("div", {
                                              className: "panel__label",
                                              children: "Interval",
                                            }),
                                            Da(B.interval_m),
                                            " km",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, d.jsxs)("div", {
                                      className: "hatch",
                                      children: [
                                        (0, d.jsx)("div", {
                                          className: "hatch__track",
                                          children: (0, d.jsx)("div", {
                                            className: `hatch__fill${Z === "over" ? " hatch__fill--warn" : ""}`,
                                            style: { width: `${H}%` },
                                          }),
                                        }),
                                        (0, d.jsx)("div", {
                                          className: "hatch__marker",
                                          style: { left: `${H}%` },
                                        }),
                                        (0, d.jsxs)("div", {
                                          className: "hatch__minmax",
                                          children: [
                                            (0, d.jsx)("span", { children: "0 km" }),
                                            (0, d.jsxs)("span", {
                                              children: [Da(B.interval_m), " km"],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            B.id,
                          );
                        }),
                        A.length > 0 &&
                          (0, d.jsxs)("div", {
                            className: "flat",
                            style: { marginTop: S.length ? 4 : 0 },
                            children: [
                              (0, d.jsxs)("button", {
                                className: "flat__row",
                                onClick: () => b(!L),
                                "aria-expanded": L,
                                children: [
                                  (0, d.jsxs)("div", {
                                    className: "flat__body",
                                    children: [
                                      (0, d.jsx)("div", {
                                        className: "flat__value",
                                        children: "In good shape",
                                      }),
                                      (0, d.jsxs)("div", {
                                        className: "flat__label",
                                        children: [A.length, " part", A.length !== 1 ? "s" : ""],
                                      }),
                                    ],
                                  }),
                                  (0, d.jsx)("span", {
                                    className: `flat__chev${L ? " rot" : ""}`,
                                    "aria-hidden": "true",
                                    children: (0, d.jsx)(ue, {}),
                                  }),
                                ],
                              }),
                              L &&
                                A.map((B) =>
                                  (0, d.jsx)(
                                    qi,
                                    { p: B, installs: l, rides: e, onOpen: () => v(B) },
                                    B.id,
                                  ),
                                ),
                            ],
                          }),
                      ],
                    });
                  })(),
            ],
          }),
        (0, d.jsxs)("div", {
          className: "section-head",
          children: [
            (0, d.jsx)("h2", { children: "Service log" }),
            (0, d.jsx)("button", {
              className: "circle circle--light circle--sm",
              "aria-label": "Add service entry",
              onClick: h,
              children: (0, d.jsx)(Ce, {}),
            }),
          ],
        }),
        M.length === 0
          ? (0, d.jsx)("div", {
              className: "empty",
              children:
                'Log what you do to the bike \u2014 "Since service" starts counting from the latest entry.',
            })
          : (0, d.jsx)("div", {
              className: "flat",
              children: M.map((S) => {
                let A = S.part_id ? t.find((B) => B.id === S.part_id) : null;
                return (0, d.jsxs)(
                  "button",
                  {
                    className: "flat__row",
                    onClick: () => x(S),
                    children: [
                      (0, d.jsxs)("div", {
                        className: "flat__body",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "flat__label",
                            children: [Sl(S.date), A ? ` \xB7 ${A.name}` : ""],
                          }),
                          (0, d.jsx)("div", { className: "flat__value", children: S.title }),
                          S.notes &&
                            (0, d.jsx)("div", {
                              className: "flat__label service-notes",
                              children: S.notes,
                            }),
                        ],
                      }),
                      S.cost != null &&
                        (0, d.jsx)("div", {
                          className: "flat__end",
                          children: (0, d.jsx)("div", {
                            className: "flat__value",
                            children: S.cost.toLocaleString("en-US"),
                          }),
                        }),
                      (0, d.jsx)("span", {
                        className: "flat__chev",
                        "aria-hidden": "true",
                        children: (0, d.jsx)(ue, {}),
                      }),
                    ],
                  },
                  S.id,
                );
              }),
            }),
        (0, d.jsxs)("div", {
          className: "section-head",
          children: [
            (0, d.jsx)("h2", { children: "Rides" }),
            I.length > 5 &&
              (0, d.jsx)("button", {
                className: "circle circle--light circle--sm",
                "aria-label": s ? "Show fewer" : "Show all rides",
                onClick: () => m(!s),
                children: s ? (0, d.jsx)(Yt, {}) : (0, d.jsx)(Ll, {}),
              }),
          ],
        }),
        I.length === 0
          ? (0, d.jsx)("div", {
              className: "empty",
              children: 'No rides yet \u2014 tap "Log ride" after your next one.',
            })
          : (0, d.jsx)("div", {
              className: "flat",
              children: T.map((S) =>
                (0, d.jsxs)(
                  "button",
                  {
                    className: "flat__row",
                    onClick: () => r(S.id),
                    children: [
                      (0, d.jsxs)("div", {
                        className: "flat__body",
                        children: [
                          (0, d.jsx)("div", { className: "flat__label", children: Sl(S.date) }),
                          (0, d.jsx)("div", {
                            className: "flat__value",
                            children: S.name || "Ride",
                          }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className: "flat__end",
                        children: [
                          (0, d.jsx)("div", { className: "flat__label", children: "Distance" }),
                          (0, d.jsxs)("div", {
                            className: "flat__value",
                            children: [Da(S.distance, 1), " km"],
                          }),
                        ],
                      }),
                      (0, d.jsx)("span", {
                        className: "flat__chev",
                        "aria-hidden": "true",
                        children: (0, d.jsx)(ue, {}),
                      }),
                    ],
                  },
                  S.id,
                ),
              ),
            }),
        !a.retired &&
          (0, d.jsxs)("button", {
            className: "fab fab--accent",
            onClick: c,
            children: [(0, d.jsx)(Ce, {}), " Log ride"],
          }),
      ],
    });
  }
  function Rm({ ride: a, bike: e, onBack: t, onEdit: l }) {
    let u = a.moving_time ? a.distance / 1e3 / (a.moving_time / 3600) : null,
      [o, i] = (0, O.useState)(void 0),
      [f, r] = (0, O.useState)(0);
    return (
      (0, O.useEffect)(() => {
        let c = !0;
        return (
          (async () => {
            if (!a.track_key) {
              i(null);
              return;
            }
            if (ki.has(a.track_key)) {
              i(ki.get(a.track_key)?.[a.id] || null);
              return;
            }
            i(void 0);
            try {
              let g = await window.storage.get(a.track_key),
                v = g?.value ? JSON.parse(g.value) : null;
              if (!c) return;
              v ? (ki.set(a.track_key, v), i(v[a.id] || null)) : i("error");
            } catch {
              c && i("error");
            }
          })(),
          () => {
            c = !1;
          }
        );
      }, [a.id, a.track_key, f]),
      (0, d.jsxs)("div", {
        className: "app app--dark",
        children: [
          (0, d.jsxs)("div", {
            className: "topbar",
            children: [
              (0, d.jsx)("button", {
                className: "circle circle--light",
                "aria-label": "Back to bike",
                onClick: t,
                children: (0, d.jsx)(Yt, {}),
              }),
              (0, d.jsx)("button", {
                className: "circle circle--light",
                "aria-label": "Edit ride",
                onClick: l,
                children: (0, d.jsx)(yl, {}),
              }),
            ],
          }),
          (0, d.jsx)("h1", { className: "display display--md", children: a.name || "Ride" }),
          (0, d.jsxs)("p", {
            className: "display__sub",
            children: [Kt(a.date), " \xB7 ", e.name, " ", e.model],
          }),
          (0, d.jsx)("div", {
            className: "hero hero--map hero--sm",
            children: Array.isArray(o)
              ? (0, d.jsx)(Lm, { pts: o })
              : (0, d.jsxs)(d.Fragment, {
                  children: [
                    o === "error"
                      ? (0, d.jsx)("button", {
                          className: "hero__note hero__note--action",
                          onClick: () => r((c) => c + 1),
                          children: "Route didn't load \u2014 tap to retry",
                        })
                      : (0, d.jsx)("span", {
                          className: "hero__note",
                          children: o === void 0 ? "Loading route\u2026" : "No route recorded",
                        }),
                    (0, d.jsx)(Vo, {}),
                  ],
                }),
          }),
          (0, d.jsxs)("div", {
            className: "glass glass--block",
            children: [
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("div", { className: "stat__label", children: "Distance" }),
                  (0, d.jsxs)("div", {
                    className: "stat__value stat__value--accent",
                    children: [Da(a.distance, 1), (0, d.jsx)("small", { children: "km" })],
                  }),
                ],
              }),
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("div", { className: "stat__label", children: "Moving time" }),
                  (0, d.jsx)("div", {
                    className: "stat__value",
                    children: dm(a.moving_time) || "\u2014",
                  }),
                ],
              }),
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("div", { className: "stat__label", children: "Avg speed" }),
                  (0, d.jsxs)("div", {
                    className: "stat__value",
                    children: [
                      u ? u.toFixed(1) : "\u2014",
                      u && (0, d.jsx)("small", { children: "km/h" }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("div", { className: "stat__label", children: "Elevation" }),
                  (0, d.jsxs)("div", {
                    className: "stat__value",
                    children: [
                      a.elevation != null ? a.elevation : "\u2014",
                      a.elevation != null && (0, d.jsx)("small", { children: "m" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, d.jsx)("div", {
            className: "section-head",
            children: (0, d.jsx)("h2", { children: "Details" }),
          }),
          (0, d.jsxs)("div", {
            className: "flat",
            children: [
              (0, d.jsx)("div", {
                className: "flat__row",
                children: (0, d.jsxs)("div", {
                  className: "flat__body",
                  children: [
                    (0, d.jsx)("div", { className: "flat__label", children: "Bike" }),
                    (0, d.jsxs)("div", {
                      className: "flat__value",
                      children: [e.name, " ", e.model],
                    }),
                  ],
                }),
              }),
              (0, d.jsx)("div", {
                className: "flat__row",
                children: (0, d.jsxs)("div", {
                  className: "flat__body",
                  children: [
                    (0, d.jsx)("div", { className: "flat__label", children: "Source" }),
                    (0, d.jsx)("div", {
                      className: "flat__value",
                      children:
                        a.source === "import"
                          ? a.virtual
                            ? "Strava import \xB7 virtual ride"
                            : "Strava import"
                          : "Manual entry",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })
    );
  }
  function Cn() {
    let [a, e] = (0, O.useState)(!1),
      [t, l] = (0, O.useState)([]),
      [u, o] = (0, O.useState)([]),
      [i, f] = (0, O.useState)([]),
      [r, c] = (0, O.useState)([]),
      [g, v] = (0, O.useState)([]),
      [h, x] = (0, O.useState)({}),
      [I, q] = (0, O.useState)({ screen: "garage" }),
      [M, s] = (0, O.useState)(null),
      [m, L] = (0, O.useState)(null),
      [b, T] = (0, O.useState)(null),
      [N, n] = (0, O.useState)(!1);
    (0, O.useEffect)(() => {
      (async () => {
        let [y, w, z, F, ia, ya] = await Promise.all([
            Su("bikes", []),
            Su("rides", []),
            Su("service", []),
            Su("parts", null),
            Su("installs", null),
            Su("components", []),
          ]),
          Ia = F || [],
          na = ia || [];
        if (F === null && ya.length) {
          for (let sa of ya)
            (Ia.push({
              id: sa.id,
              name: sa.name,
              type: sa.type,
              interval_m: sa.interval_m || null,
              base_wear_m: 0,
              retired: !!sa.retired_date,
            }),
              na.push({
                id: Ue(),
                part_id: sa.id,
                bike_id: sa.bike_id,
                from_date: sa.install_date,
                to_date: sa.retired_date || null,
              }));
          (await Lt("parts", Ia), await Lt("installs", na));
        }
        let ce = {};
        (await Promise.all(
          y.map(async (sa) => {
            try {
              let Za = await window.storage.get(`photo:${sa.id}`);
              Za?.value && (ce[sa.id] = Za.value);
            } catch {}
          }),
        ),
          l(y),
          o(w),
          f(Ia),
          c(na),
          v(z),
          x(ce),
          e(!0));
      })();
    }, []);
    let p = (y) => {
        (L(y), setTimeout(() => L(null), 2400));
      },
      C = (y, w, z, F) => T({ title: y, message: w, action: z, label: F });
    (0, O.useEffect)(() => {
      let y = I.screen === "ride" || I.screen === "stats";
      document.body.style.background = y ? "#0F110F" : "#F2F3F1";
      let w = document.querySelector('meta[name="theme-color"]');
      w && w.setAttribute("content", y ? "#0F110F" : "#F2F3F1");
    }, [I.screen]);
    let S = !!(M || b);
    (0, O.useEffect)(() => {
      if (!S) return;
      let y = window.scrollY,
        w = document.body.style;
      return (
        (w.position = "fixed"),
        (w.top = `-${y}px`),
        (w.left = "0"),
        (w.right = "0"),
        (w.width = "100%"),
        () => {
          ((w.position = ""),
            (w.top = ""),
            (w.left = ""),
            (w.right = ""),
            (w.width = ""),
            window.scrollTo(0, y));
        }
      );
    }, [S]);
    let A = async () => {
        n(!0);
        try {
          let y = {};
          for (let Ia of t)
            try {
              let na = await window.storage.get(`photo:${Ia.id}`);
              na?.value && (y[Ia.id] = na.value);
            } catch {}
          let w = {};
          for (let Ia of [...new Set(u.map((na) => na.track_key).filter(Boolean))])
            try {
              let na = await window.storage.get(Ia);
              na?.value && (w[Ia] = JSON.parse(na.value));
            } catch {}
          let z = {
              app: "bike-log",
              version: 1,
              exported_at: new Date().toISOString(),
              data: { bikes: t, rides: u, parts: i, installs: r, service: g, photos: y, tracks: w },
            },
            F = new Blob([JSON.stringify(z)], { type: "application/json" }),
            ia = URL.createObjectURL(F),
            ya = document.createElement("a");
          ((ya.href = ia),
            (ya.download = `bike-log-backup-${ae()}.json`),
            document.body.appendChild(ya),
            ya.click(),
            ya.remove(),
            setTimeout(() => URL.revokeObjectURL(ia), 4e3),
            p("Backup downloaded"));
        } catch {
          p("Backup failed");
        }
        n(!1);
      },
      B = (y) => {
        let w = new FileReader();
        ((w.onload = () => {
          try {
            let z = JSON.parse(w.result),
              F = z?.data;
            if (z?.app !== "bike-log" || !F || !Array.isArray(F.bikes) || !Array.isArray(F.rides))
              throw new Error("not a backup");
            let ia = z.exported_at ? Kt(z.exported_at.slice(0, 10)) : "an unknown date";
            C(
              "Restore this backup?",
              `From ${ia} \u2014 ${F.bikes.length} bikes, ${F.rides.length} rides, ${(F.parts || []).length} parts, ${(F.service || []).length} service entries. This replaces everything currently in the app.`,
              async () => {
                (E(F.bikes),
                  U(F.rides),
                  Z(F.parts || []),
                  H(F.installs || []),
                  ea(F.service || []));
                let ya = {};
                for (let [Ia, na] of Object.entries(F.photos || {}))
                  try {
                    (await window.storage.set(`photo:${Ia}`, na), (ya[Ia] = na));
                  } catch {}
                x(ya);
                for (let [Ia, na] of Object.entries(F.tracks || {})) await Lt(Ia, na);
                (ki.clear(), s(null), q({ screen: "garage" }), p("Backup restored"));
              },
              "Restore",
            );
          } catch {
            p("That file isn't a Bike Log backup");
          }
        }),
          w.readAsText(y));
      },
      E = (y) => {
        (l(y), Lt("bikes", y));
      },
      U = (y) => {
        (o(y), Lt("rides", y));
      },
      Z = (y) => {
        (f(y), Lt("parts", y));
      },
      H = (y) => {
        (c(y), Lt("installs", y));
      },
      ea = (y) => {
        (v(y), Lt("service", y));
      },
      G = async (y, w, z) => {
        let F = z?.id || Ue(),
          ia = { id: F, retired: !1, ...z, ...y };
        ia.retired && (ia.primary = !1);
        let ya = t.filter((Ia) => Ia.id !== F);
        if (
          (y.primary && (ya = ya.map((Ia) => ({ ...Ia, primary: !1 }))),
          (ya = [...ya, ia]),
          E(ya),
          w && w !== h[F])
        ) {
          try {
            await window.storage.set(`photo:${F}`, w);
          } catch {
            p("Photo too large to save");
          }
          x((Ia) => ({ ...Ia, [F]: w }));
        }
        (s(null), p(z ? "Bike updated" : "Bike added"));
      },
      ka = (y) => {
        let w = Go(u, y.id).length;
        C(
          `Delete ${y.name} ${y.model}?`,
          `This permanently removes the bike, its ${w} ride${w !== 1 ? "s" : ""} and its service history. Parts mounted on it move to the shelf, but the kilometers they did here are lost with the rides.`,
          () => {
            (E(t.filter((z) => z.id !== y.id)),
              U(u.filter((z) => z.bike_id !== y.id)),
              H(r.filter((z) => z.bike_id !== y.id)),
              ea(g.filter((z) => z.bike_id !== y.id)),
              om(`photo:${y.id}`),
              s(null),
              q({ screen: "garage" }),
              p("Bike deleted"));
          },
        );
      },
      Q = (y, w) => {
        let z = { id: w?.id || Ue(), source: w?.source || "manual", ...w, ...y };
        (U([...u.filter((F) => F.id !== z.id), z]),
          s(null),
          p(w ? "Ride updated" : `Ride saved \u2014 ${Da(y.distance, 1)} km`));
      },
      X = (y) => {
        C(
          "Delete this ride?",
          `${Kt(y.date)} \xB7 ${Da(y.distance, 1)} km. Lifetime totals and part wear recalculate without it.`,
          () => {
            (U(u.filter((w) => w.id !== y.id)),
              s(null),
              I.screen === "ride" && q({ screen: "bike", bikeId: y.bike_id }),
              p("Ride deleted"));
          },
        );
      },
      D = (y, w) => {
        let z = {
            id: w?.id || Ue(),
            retired: w?.retired || !1,
            name: y.name,
            type: y.type,
            interval_m: y.interval_m,
            base_wear_m: y.base_wear_m,
            weight_g: y.weight_g,
            volume_ml: y.volume_ml,
            notes: y.notes,
            store: y.store,
            url: y.url,
            price: y.price,
            bought_date: y.bought_date,
          },
          F = r;
        (w
          ? y.moved &&
            ((F = r.map((ia) =>
              ia.part_id === z.id && !ia.to_date ? { ...ia, to_date: y.date } : ia,
            )),
            y.loc !== "shelf" &&
              (F = [
                ...F,
                { id: Ue(), part_id: z.id, bike_id: y.loc, from_date: y.date, to_date: null },
              ]))
          : y.loc !== "shelf" &&
            (F = [
              ...r,
              { id: Ue(), part_id: z.id, bike_id: y.loc, from_date: y.date, to_date: null },
            ]),
          Z([...i.filter((ia) => ia.id !== z.id), z]),
          H(F),
          s(null),
          p(w ? (y.moved ? "Part moved" : "Part updated") : "Part added"));
      },
      ha = (y, w) => {
        let z = ae();
        (y.retired && Z(i.map((F) => (F.id === y.id ? { ...F, retired: !1 } : F))),
          H([
            ...r.map((F) => (F.part_id === y.id && !F.to_date ? { ...F, to_date: z } : F)),
            { id: Ue(), part_id: y.id, bike_id: w, from_date: z, to_date: null },
          ]),
          s(null),
          p(`${y.name} mounted`));
      },
      aa = (y) => {
        let w = ae();
        (H(r.map((z) => (z.part_id === y.id && !z.to_date ? { ...z, to_date: w } : z))),
          s(null),
          p(`${y.name} moved to the shelf`));
      },
      xa = (y) => {
        let w = Mi(r, y.id);
        if (!w) return;
        let z = ae(),
          F = {
            id: Ue(),
            name: y.name,
            type: y.type,
            interval_m: y.interval_m,
            weight_g: y.weight_g,
            volume_ml: y.volume_ml,
            base_wear_m: 0,
            retired: !1,
          };
        (Z([...i.map((ia) => (ia.id === y.id ? { ...ia, retired: !0 } : ia)), F]),
          H([
            ...r.map((ia) => (ia.id === w.id ? { ...ia, to_date: z } : ia)),
            { id: Ue(), part_id: F.id, bike_id: w.bike_id, from_date: z, to_date: null },
          ]),
          s(null),
          p(`${y.name} replaced \u2014 wear reset`));
      },
      P = (y) => {
        let w = ae();
        (Z(i.map((z) => (z.id === y.id ? { ...z, retired: !0 } : z))),
          H(r.map((z) => (z.part_id === y.id && !z.to_date ? { ...z, to_date: w } : z))),
          s(null),
          p(`${y.name} retired`));
      },
      Y = (y) => {
        (Z(i.map((w) => (w.id === y.id ? { ...w, retired: !1 } : w))),
          s(null),
          p(`${y.name} back on the shelf`));
      },
      j = (y) => {
        C(
          `Delete ${y.name}?`,
          "The part and its whole installation history disappear. If it's just worn out or sold, retire it instead \u2014 that keeps the record.",
          () => {
            (Z(i.filter((w) => w.id !== y.id)),
              H(r.filter((w) => w.part_id !== y.id)),
              s(null),
              p("Part deleted"));
          },
        );
      },
      ra = (y, w, z) => {
        let F = { id: w?.id || Ue(), bike_id: w?.bike_id ?? z ?? null, ...w, ...y };
        (ea([...g.filter((ia) => ia.id !== F.id), F]),
          s(null),
          p(w ? "Entry updated" : "Service logged"));
      },
      K = (y) => {
        C(
          "Delete this entry?",
          `"${y.title}" \xB7 ${Sl(y.date)}. "Since service" recalculates from the previous entry.`,
          () => {
            (ea(g.filter((w) => w.id !== y.id)), s(null), p("Entry deleted"));
          },
        );
      },
      ga = (y, w, z) => {
        if (z) {
          s(null);
          return;
        }
        (y && E(y), w && U(w));
      };
    if (!a)
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)("style", { children: k0 }),
          (0, d.jsx)("div", {
            className: "app",
            children: (0, d.jsx)("div", {
              className: "loading",
              children: "Opening the garage\u2026",
            }),
          }),
        ],
      });
    let da = I.bikeId ? t.find((y) => y.id === I.bikeId) : null,
      ma = I.rideId ? u.find((y) => y.id === I.rideId) : null,
      R = t.find((y) => y.primary && !y.retired) || t.find((y) => !y.retired) || t[0],
      V;
    return (
      I.screen === "bike" && da
        ? (V = (0, d.jsx)(Bm, {
            bike: da,
            rides: u,
            parts: i,
            installs: r,
            service: g,
            photo: h[da.id],
            onBack: () => q({ screen: "garage" }),
            onEditBike: () => s({ type: "bike", bike: da }),
            onOpenRide: (y) => q({ screen: "ride", bikeId: da.id, rideId: y }),
            onLogRide: () => s({ type: "ride", bikeId: da.id }),
            onAddPart: () => s({ type: "mount", bikeId: da.id }),
            onEditPart: (y) => s({ type: "part-view", part: y }),
            onAddService: () => s({ type: "service", bikeId: da.id }),
            onEditService: (y) => s({ type: "service", entry: y }),
          }))
        : I.screen === "ride" && ma && da
          ? (V = (0, d.jsx)(Rm, {
              ride: ma,
              bike: da,
              onBack: () => q({ screen: "bike", bikeId: da.id }),
              onEdit: () => s({ type: "ride", ride: ma }),
            }))
          : I.screen === "stats"
            ? (V = (0, d.jsx)(Mm, { bikes: t, rides: u, parts: i, installs: r, service: g }))
            : I.screen === "storage"
              ? (V = (0, d.jsx)(Dm, {
                  parts: i,
                  installs: r,
                  rides: u,
                  bikes: t,
                  onAddPart: () => s({ type: "part" }),
                  onEditPart: (y) => s({ type: "part-view", part: y }),
                }))
              : (V = (0, d.jsx)(Tm, {
                  bikes: t,
                  rides: u,
                  parts: i,
                  installs: r,
                  photos: h,
                  onOpenBike: (y) => q({ screen: "bike", bikeId: y }),
                  onAddBike: () => s({ type: "bike" }),
                  onImport: () => s({ type: "import" }),
                  onNotifications: () => s({ type: "notifications" }),
                })),
      (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)("style", { children: k0 }),
          (0, d.jsx)("div", { className: "screen-in", children: V }, JSON.stringify(I)),
          (0, d.jsx)(wm, {
              active: I.screen,
              onGarage: () => q({ screen: "garage" }),
              onStorage: () => q({ screen: "storage" }),
              onLogRide: () => s({ type: "ride", bikeId: R?.id }),
              onStats: () => q({ screen: "stats" }),
              onSettings: () => s({ type: "settings" }),
            }),
          M?.type === "bike" &&
            (0, d.jsx)(Ye, {
              title: M.bike ? "Edit bike" : "New bike",
              onClose: () => s(null),
              children: (0, d.jsx)(xm, {
                bike: M.bike,
                photo: M.bike ? h[M.bike.id] : null,
                onSave: (y, w) => G(y, w, M.bike),
                onDelete: M.bike ? () => ka(M.bike) : null,
              }),
            }),
          M?.type === "ride" &&
            (0, d.jsx)(Ye, {
              title: M.ride ? "Edit ride" : "Log ride",
              onClose: () => s(null),
              children: (0, d.jsx)(ym, {
                bikes: t,
                rides: u,
                defaultBikeId: M.bikeId,
                ride: M.ride,
                onSave: (y) => Q(y, M.ride),
                onDelete: M.ride ? () => X(M.ride) : null,
              }),
            }),
          M?.type === "part" &&
            (0, d.jsx)(Ye, {
              title: M.part ? "Edit part" : "New part",
              onClose: () => s(null),
              children: (0, d.jsx)(bm, {
                part: M.part,
                bikes: t,
                installs: r,
                rides: u,
                fixedBikeId: M.bikeId,
                onSave: (y) => D(y, M.part),
              }),
            }),
          M?.type === "part-view" &&
            (() => {
              let y = i.find((w) => w.id === M.part.id) || M.part;
              return (0, d.jsx)(Ye, {
                title: y.name,
                onClose: () => s(null),
                children: (0, d.jsx)(Cm, {
                  part: y,
                  bikes: t,
                  installs: r,
                  rides: u,
                  service: g,
                  onEdit: () => s({ type: "part", part: y }),
                  onShelf: () => aa(y),
                  onMount: () => s({ type: "mount-to", part: y }),
                  onReplace: () => xa(y),
                  onRetire: () => P(y),
                  onRestore: () => Y(y),
                  onDelete: () => j(y),
                  onLogService: () =>
                    s({ type: "service", bikeId: jt(r, y.id), presetPartId: y.id }),
                }),
              });
            })(),
          M?.type === "mount-to" &&
            (0, d.jsx)(Ye, {
              title: "Mount on\u2026",
              onClose: () => s(null),
              children: (0, d.jsx)(Im, { bikes: t, onPick: (y) => ha(M.part, y) }),
            }),
          M?.type === "notifications" &&
            (0, d.jsx)(Ye, {
              title: "Notifications",
              onClose: () => s(null),
              children: (0, d.jsx)(NotifPanel, {
                bikes: t,
                parts: i,
                installs: r,
                rides: u,
                onOpen: (y) => {
                  s(null);
                  q({ screen: "bike", bikeId: y });
                },
              }),
            }),
          M?.type === "settings" &&
            (0, d.jsxs)(Ye, {
              title: "Settings",
              onClose: () => s(null),
              children: [
                (0, d.jsxs)("div", {
                  className: "flat",
                  children: [
                    (0, d.jsxs)("button", {
                      className: "flat__row",
                      onClick: () => s({ type: "import" }),
                      children: [
                        (0, d.jsx)("span", {
                          className: "circle circle--tint circle--sm",
                          "aria-hidden": "true",
                          children: (0, d.jsx)(bl, {}),
                        }),
                        (0, d.jsxs)("div", {
                          className: "flat__body",
                          children: [
                            (0, d.jsx)("div", {
                              className: "flat__value",
                              children: "Import from Strava",
                            }),
                            (0, d.jsx)("div", {
                              className: "flat__label",
                              children: "Bulk-export ZIP or activities.csv",
                            }),
                          ],
                        }),
                        (0, d.jsx)("span", {
                          className: "flat__chev",
                          "aria-hidden": "true",
                          children: (0, d.jsx)(ue, {}),
                        }),
                      ],
                    }),
                    (0, d.jsxs)("button", {
                      className: "flat__row",
                      onClick: () => s({ type: "backup" }),
                      children: [
                        (0, d.jsx)("span", {
                          className: "circle circle--tint circle--sm",
                          "aria-hidden": "true",
                          children: (0, d.jsx)(Ro, {}),
                        }),
                        (0, d.jsxs)("div", {
                          className: "flat__body",
                          children: [
                            (0, d.jsx)("div", {
                              className: "flat__value",
                              children: "Backup & restore",
                            }),
                            (0, d.jsx)("div", {
                              className: "flat__label",
                              children: "Everything as one JSON file",
                            }),
                          ],
                        }),
                        (0, d.jsx)("span", {
                          className: "flat__chev",
                          "aria-hidden": "true",
                          children: (0, d.jsx)(ue, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: "field__hint",
                  style: { marginTop: 14 },
                  children: "Bike Log \xB7 v5.2",
                }),
              ],
            }),
          M?.type === "backup" &&
            (0, d.jsx)(Ye, {
              title: "Backup",
              onClose: () => s(null),
              children: (0, d.jsx)(Sm, {
                bikes: t,
                rides: u,
                parts: i,
                service: g,
                busy: N,
                onExport: A,
                onRestoreFile: B,
              }),
            }),
          M?.type === "mount" &&
            (0, d.jsx)(Ye, {
              title: "Add to this bike",
              onClose: () => s(null),
              children: (0, d.jsx)(Am, {
                parts: i,
                installs: r,
                rides: u,
                onMount: (y) => ha(y, M.bikeId),
                onNew: () => s({ type: "part", bikeId: M.bikeId }),
              }),
            }),
          M?.type === "service" &&
            (0, d.jsx)(Ye, {
              title: M.entry ? "Edit entry" : "Log service",
              onClose: () => s(null),
              children: (0, d.jsx)(km, {
                entry: M.entry,
                parts: i,
                installs: r,
                presetPartId: M.presetPartId,
                bikeId: M.entry ? M.entry.bike_id : M.bikeId,
                onSave: (y) => ra(y, M.entry, M.bikeId),
                onDelete: M.entry ? () => K(M.entry) : null,
              }),
            }),
          M?.type === "import" &&
            (0, d.jsx)(Ye, {
              title: "Import from Strava",
              onClose: () => s(null),
              children: (0, d.jsx)(qm, { bikes: t, rides: u, onFinish: ga }),
            }),
          b &&
            (0, d.jsx)("div", {
              className: "overlay overlay--center",
              onClick: (y) => y.target === y.currentTarget && T(null),
              children: (0, d.jsxs)("div", {
                className: "confirm",
                role: "alertdialog",
                "aria-label": b.title,
                children: [
                  (0, d.jsx)("h4", { children: b.title }),
                  (0, d.jsx)("p", { children: b.message }),
                  (0, d.jsxs)("div", {
                    className: "confirm__row",
                    children: [
                      (0, d.jsx)("button", {
                        className: "btn btn--tint",
                        onClick: () => T(null),
                        children: "Cancel",
                      }),
                      (0, d.jsx)("button", {
                        className: "btn btn--warn",
                        onClick: () => {
                          let y = b.action;
                          (T(null), y());
                        },
                        children: b.label
                          ? b.label
                          : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(vt, {}), " Delete"] }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          m &&
            (0, d.jsxs)("div", {
              className: "toast",
              role: "status",
              children: [(0, d.jsx)(xl, {}), " ", m],
            }),
        ],
      })
    );
  }
  var U0 = ze(Fo());
  if (!window.storage) {
    let a = "bikelog:";
    window.storage = {
      async get(e) {
        let t = localStorage.getItem(a + e);
        if (t === null) throw new Error("key not found: " + e);
        return { key: e, value: t };
      },
      async set(e, t) {
        return (localStorage.setItem(a + e, t), { key: e, value: t });
      },
      async delete(e) {
        return (localStorage.removeItem(a + e), { key: e, deleted: !0 });
      },
      async list(e = "") {
        let t = [];
        for (let l = 0; l < localStorage.length; l++) {
          let u = localStorage.key(l);
          u && u.startsWith(a + e) && t.push(u.slice(a.length));
        }
        return { keys: t, prefix: e };
      },
    };
  }
  (0, N0.createRoot)(document.getElementById("root")).render((0, U0.jsx)(Cn, {}));
})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

papaparse/papaparse.min.js:
  (* @license
  Papa Parse
  v5.5.4
  https://github.com/mholt/PapaParse
  License: MIT
  *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/archive.mjs:
lucide-react/dist/esm/icons/arrow-right.mjs:
lucide-react/dist/esm/icons/arrow-up-right.mjs:
lucide-react/dist/esm/icons/bike.mjs:
lucide-react/dist/esm/icons/camera.mjs:
lucide-react/dist/esm/icons/chart-column.mjs:
lucide-react/dist/esm/icons/check.mjs:
lucide-react/dist/esm/icons/chevron-left.mjs:
lucide-react/dist/esm/icons/chevron-right.mjs:
lucide-react/dist/esm/icons/database.mjs:
lucide-react/dist/esm/icons/download.mjs:
lucide-react/dist/esm/icons/file-archive.mjs:
lucide-react/dist/esm/icons/loader.mjs:
lucide-react/dist/esm/icons/package.mjs:
lucide-react/dist/esm/icons/pencil.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/repeat.mjs:
lucide-react/dist/esm/icons/settings.mjs:
lucide-react/dist/esm/icons/trash-2.mjs:
lucide-react/dist/esm/icons/undo-2.mjs:
lucide-react/dist/esm/icons/upload.mjs:
lucide-react/dist/esm/icons/wrench.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.23.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
