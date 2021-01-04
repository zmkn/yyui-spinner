function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

var spinnerStyle = "/*\r\n  spinner.component\r\n*/\r\n:host {\r\n  top: 50%;\r\n  left: 50%;\r\n  position: fixed;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 9999;\r\n}\r\n\r\n/*!\r\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\r\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\r\n * Licensed under MIT\r\n */\r\n.la-ball-clip-rotate,\r\n.la-ball-clip-rotate > div {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.la-ball-clip-rotate {\r\n  display: block;\r\n  font-size: 0;\r\n  color: #fff;\r\n}\r\n\r\n.la-ball-clip-rotate.la-dark {\r\n  color: #333;\r\n}\r\n\r\n.la-ball-clip-rotate > div {\r\n  display: inline-block;\r\n  float: none;\r\n  background-color: currentColor;\r\n  border: 0 solid currentColor;\r\n}\r\n\r\n.la-ball-clip-rotate {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.la-ball-clip-rotate > div {\r\n  width: 32px;\r\n  height: 32px;\r\n  background: transparent;\r\n  border-width: 2px;\r\n  border-bottom-color: transparent;\r\n  border-radius: 100%;\r\n  -webkit-animation: ball-clip-rotate 0.75s linear infinite;\r\n  -moz-animation: ball-clip-rotate 0.75s linear infinite;\r\n  -o-animation: ball-clip-rotate 0.75s linear infinite;\r\n  animation: ball-clip-rotate 0.75s linear infinite;\r\n}\r\n\r\n.la-ball-clip-rotate.la-sm {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.la-ball-clip-rotate.la-sm > div {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-width: 1px;\r\n}\r\n\r\n.la-ball-clip-rotate.la-2x {\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n.la-ball-clip-rotate.la-2x > div {\r\n  width: 64px;\r\n  height: 64px;\r\n  border-width: 4px;\r\n}\r\n\r\n.la-ball-clip-rotate.la-3x {\r\n  width: 96px;\r\n  height: 96px;\r\n}\r\n\r\n.la-ball-clip-rotate.la-3x > div {\r\n  width: 96px;\r\n  height: 96px;\r\n  border-width: 6px;\r\n}\r\n\r\n/*\r\n * Animation\r\n */\r\n@-webkit-keyframes ball-clip-rotate {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-moz-keyframes ball-clip-rotate {\r\n  0% {\r\n    -moz-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  50% {\r\n    -moz-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-o-keyframes ball-clip-rotate {\r\n  0% {\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  50% {\r\n    -o-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  100% {\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes ball-clip-rotate {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(180deg);\r\n    -moz-transform: rotate(180deg);\r\n    -o-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n";

var spinnerTemplate = "<div class=\"la-ball-clip-rotate la-dark\">\r\n  <div></div>\r\n</div>";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _window = new WeakMap();

var _document = new WeakMap();

var _createStyles = new WeakMap();

var _createElements = new WeakMap();

var SpinnerComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SpinnerComponent, _HTMLElement);

  var _super = _createSuper(SpinnerComponent);

  function SpinnerComponent() {
    var _this;

    _classCallCheck(this, SpinnerComponent);

    _this = _super.call(this);

    _window.set(_assertThisInitialized(_this), {
      writable: true,
      value: window
    });

    _document.set(_assertThisInitialized(_this), {
      writable: true,
      value: _classPrivateFieldGet(_assertThisInitialized(_this), _window).document
    });

    _createStyles.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(css) {
        var style = _classPrivateFieldGet(_assertThisInitialized(_this), _document).createElement("style");

        style.textContent = css;
        return style;
      }
    });

    _createElements.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(html) {
        var wrapper = _classPrivateFieldGet(_assertThisInitialized(_this), _document).createElement("template");

        wrapper.innerHTML = html;
        return wrapper.content.cloneNode(true);
      }
    });

    var shadow = _this.attachShadow({
      mode: "open"
    });

    var styles = _classPrivateFieldGet(_assertThisInitialized(_this), _createStyles).call(_assertThisInitialized(_this), spinnerStyle);

    var elements = _classPrivateFieldGet(_assertThisInitialized(_this), _createElements).call(_assertThisInitialized(_this), spinnerTemplate);

    shadow.appendChild(styles);
    shadow.appendChild(elements);
    return _this;
  }

  _createClass(SpinnerComponent, [{
    key: "self",
    value: function self() {
      return this;
    }
  }, {
    key: "parent",
    value: function parent() {
      return this.parentNode;
    }
  }]);

  return SpinnerComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

if (!window.customElements.get("yyui-spinner-component")) {
  customElements.define("yyui-spinner-component", SpinnerComponent);
}

var spinnerOverlayStyle = "/*\r\n    spinner.overlay.component\r\n*/\r\n:host {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  position: fixed;\r\n  z-index: 9999;\r\n}\r\n\r\n:host(.spinner-overlay-default) {\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n}\r\n";

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _window$1 = new WeakMap();

var _document$1 = new WeakMap();

var _createStyles$1 = new WeakMap();

var SpinnerOverlayComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SpinnerOverlayComponent, _HTMLElement);

  var _super = _createSuper$1(SpinnerOverlayComponent);

  function SpinnerOverlayComponent() {
    var _this;

    _classCallCheck(this, SpinnerOverlayComponent);

    _this = _super.call(this);

    _window$1.set(_assertThisInitialized(_this), {
      writable: true,
      value: window
    });

    _document$1.set(_assertThisInitialized(_this), {
      writable: true,
      value: _classPrivateFieldGet(_assertThisInitialized(_this), _window$1).document
    });

    _createStyles$1.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(css) {
        var style = _classPrivateFieldGet(_assertThisInitialized(_this), _document$1).createElement("style");

        style.textContent = css;
        return style;
      }
    });

    var shadow = _this.attachShadow({
      mode: "open"
    });

    var styles = _classPrivateFieldGet(_assertThisInitialized(_this), _createStyles$1).call(_assertThisInitialized(_this), spinnerOverlayStyle);

    var slotElement = _classPrivateFieldGet(_assertThisInitialized(_this), _document$1).createElement("slot");

    shadow.appendChild(styles);
    shadow.appendChild(slotElement);
    return _this;
  }

  _createClass(SpinnerOverlayComponent, [{
    key: "self",
    value: function self() {
      return this;
    }
  }, {
    key: "parent",
    value: function parent() {
      return this.parentNode;
    }
  }]);

  return SpinnerOverlayComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

if (!window.customElements.get("yyui-spinner-overlay-component")) {
  window.customElements.define("yyui-spinner-overlay-component", SpinnerOverlayComponent);
}

var _window$2 = new WeakMap();

var _document$2 = new WeakMap();

var _spinnerElement = new WeakMap();

var _mount = new WeakMap();

var _options = new WeakMap();

var _create = new WeakMap();

var _connect = new WeakMap();

var Spinner = /*#__PURE__*/function () {
  function Spinner() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Spinner);

    _window$2.set(this, {
      writable: true,
      value: window
    });

    _document$2.set(this, {
      writable: true,
      value: _classPrivateFieldGet(this, _window$2).document
    });

    _spinnerElement.set(this, {
      writable: true,
      value: void 0
    });

    _mount.set(this, {
      writable: true,
      value: {
        status: false,
        mountTimestamp: 0,
        unmountTimestamp: 0
      }
    });

    _options.set(this, {
      writable: true,
      value: {
        overlay: true
      }
    });

    _create.set(this, {
      writable: true,
      value: function value() {
        var spinnerElement = new SpinnerComponent();

        if (_classPrivateFieldGet(_this, _options).overlay) {
          var overlayName = _classPrivateFieldGet(_this, _options).overlay;

          var spinnerOverlayElement = new SpinnerOverlayComponent();

          if ({}.toString.call(overlayName) !== "[object String]") {
            overlayName = "default";
          }

          spinnerOverlayElement.setAttribute("class", "spinner-overlay-".concat(overlayName));
          spinnerOverlayElement.appendChild(spinnerElement);
          return spinnerOverlayElement;
        } else {
          return spinnerElement;
        }
      }
    });

    _connect.set(this, {
      writable: true,
      value: function value(spinnerElement) {
        _classPrivateFieldSet(_this, _spinnerElement, spinnerElement);

        return spinnerElement;
      }
    });

    _classPrivateFieldSet(this, _options, Object.assign(_classPrivateFieldGet(this, _options), Spinner.options, options));

    _classPrivateFieldGet(this, _connect).call(this, _classPrivateFieldGet(this, _create).call(this));

    Spinner.instanceAll.push(this);
  }

  _createClass(Spinner, [{
    key: "mount",
    value: function mount() {
      var _this2 = this;

      var millisecond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!_classPrivateFieldGet(this, _mount).status) {
        var mount = function mount() {
          if (!_classPrivateFieldGet(_this2, _spinnerElement).parent()) {
            _classPrivateFieldGet(_this2, _document$2).body.appendChild(_classPrivateFieldGet(_this2, _spinnerElement));
          }
        };

        _classPrivateFieldGet(this, _mount).status = true;
        clearTimeout(_classPrivateFieldGet(this, _mount).mountTimestamp);
        clearTimeout(_classPrivateFieldGet(this, _mount).unmountTimestamp);

        if (millisecond > 0) {
          _classPrivateFieldGet(this, _mount).mountTimestamp = setTimeout(function () {
            mount();
            clearTimeout(_classPrivateFieldGet(_this2, _mount).mountTimestamp);
          }, millisecond);
        } else {
          mount();
        }
      }
    }
  }, {
    key: "unmount",
    value: function unmount() {
      var _this3 = this;

      var millisecond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (_classPrivateFieldGet(this, _mount).status) {
        var unmount = function unmount() {
          if (_classPrivateFieldGet(_this3, _spinnerElement).parent()) {
            _classPrivateFieldGet(_this3, _spinnerElement).parent().removeChild(_classPrivateFieldGet(_this3, _spinnerElement));
          }
        };

        _classPrivateFieldGet(this, _mount).status = false;
        clearTimeout(_classPrivateFieldGet(this, _mount).mountTimestamp);
        clearTimeout(_classPrivateFieldGet(this, _mount).unmountTimestamp);

        if (millisecond > 0) {
          _classPrivateFieldGet(this, _mount).unmountTimestamp = setTimeout(function () {
            unmount();
            clearTimeout(_classPrivateFieldGet(_this3, _mount).unmountTimestamp);
          }, millisecond);
        } else {
          unmount();
        }
      }
    }
  }, {
    key: "isMount",
    value: function isMount() {
      return _classPrivateFieldGet(this, _mount).status;
    }
  }, {
    key: "isMountDocument",
    value: function isMountDocument() {
      return !!_classPrivateFieldGet(this, _spinnerElement).parent();
    }
  }]);

  return Spinner;
}();

_defineProperty(Spinner, "options", {
  overlay: true
});

_defineProperty(Spinner, "clear", function () {
  var instanceAll = Spinner.instanceAll;

  while (instanceAll.length > 0) {
    instanceAll[0].unmount();
    instanceAll.splice(0, 1);
  }
});

_defineProperty(Spinner, "instanceAll", []);

export { Spinner };
