webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tween-one */ "./node_modules/rc-tween-one/es/index.js");
/* harmony import */ var underscore_string_underscored__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore.string/underscored */ "./node_modules/underscore.string/underscored.js");
/* harmony import */ var underscore_string_underscored__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore_string_underscored__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_text_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-text-effects */ "./node_modules/react-text-effects/dist/index.js");
/* harmony import */ var react_text_effects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_text_effects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_textfit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-textfit */ "./node_modules/react-textfit/lib/index.js");
/* harmony import */ var react_textfit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_textfit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-texty */ "./node_modules/rc-texty/es/index.js");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-headroom */ "./node_modules/react-headroom/dist/index.js");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout */ "./layout.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/icons */ "./components/icons.js");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/background */ "./components/background.js");
/* harmony import */ var _components_bubbles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/bubbles */ "./components/bubbles.js");
/* harmony import */ var _static_reset_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/reset.scss */ "./static/reset.scss");
/* harmony import */ var _static_reset_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_reset_scss__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var media_sizes = {
  tablet: 801,
  desktop: 801,
  desktopM: 1001,
  desktopL: 1201
};
var reactMediaQueries = {
  tablet: "(max-width: ".concat(media_sizes['tablet'], "px)"),
  desktop: "only screen and (min-width: ".concat(media_sizes['desktop'] / 16, "em)"),
  desktopL: "only screen and (min-width: ".concat(media_sizes['desktopL'] / 16, "em)"),
  deskShort: "only screen and (min-width: ".concat(media_sizes['desktop'] / 16, "em) and (max-height: ").concat(media_sizes['desktop'] / 16, "em)"),
  desktopSCap: "only screen and (min-width: ".concat(media_sizes['desktop'] / 16, "em) and (max-width: ").concat(media_sizes['desktopM'] / 16, "em)"),
  desktopLCap: "only screen and (min-width: ".concat(media_sizes['desktopL'] / 16, "em)")
};
var mediaQueries = {
  tablet: "@media ".concat(reactMediaQueries.tablet),
  desktop: "@media ".concat(reactMediaQueries.desktop),
  desktopL: "@media ".concat(reactMediaQueries.desktopL),
  deskShort: "@media ".concat(reactMediaQueries.deskShort),
  desktopSCap: "@media ".concat(reactMediaQueries.desktopSCap),
  desktopLCap: "@media ".concat(reactMediaQueries.desktopLCap)
};
var Anime = 'div';
var colors = {
  black: '#161616',
  text: '#252B37'
};
var fonts = {
  Champion: {
    fontFamily: 'Champion, sans-serif'
  },
  Helvetica: {
    fontFamily: 'Helvetica, sans-serif'
  }
};
var Hr = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('hr', function (props) {
  return {
    width: '100%',
    color: colors.tan,
    border: '0',
    margin: props.header ? '22px 0 0' : '22px 0',
    height: '3px'
  };
});
var H1 = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('h1', {
  padding: '0',
  lineHeight: '0.9em' // [mediaQueries.tabletSmall]: {
  //   lineHeight: '10vw',
  //   fontSize: '12.7vw',
  // },
  // [mediaQueries.tablet]: {
  //   lineHeight: '11.7vw',
  //   fontSize: '14vw',
  // },

});
var H1Title = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', _defineProperty({
  marginTop: '5px',
  marginLeft: '-0.5vw',
  width: 'calc(100% + 1vw)',
  marginRight: '-0.5vw'
}, mediaQueries.tablet, {
  color: colors.tan,
  marginBottom: '-0.5vw'
}));
var H2 = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('h2', _defineProperty({
  fontSize: '54px',
  padding: '0',
  lineHeight: '54px',
  minHeight: '54px'
}, mediaQueries.tablet, {
  fontSize: '7vw',
  lineHeight: '7vw',
  minHeight: '7vw'
}));
var H2Title = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', _defineProperty({
  marginLeft: '-0.2vw'
}, mediaQueries.tablet, {
  display: 'none',
  marginLeft: '0',
  marginBottom: '0'
}));
var Section = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', function (props) {
  return _defineProperty({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%'
  }, mediaQueries.tablet, {
    alignItems: 'flex-start',
    flexDirection: !props.nomobile ? 'column' : null,
    justifyContent: !props.nomobile ? 'flex-start' : null
  });
});
var SectionTitle = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', function (props) {
  return _defineProperty({
    minWidth: '4.5em',
    width: '20%',
    paddingRight: '1rem',
    fontSize: '48px',
    hyphens: 'auto'
  }, mediaQueries.tablet, {
    textAlign: 'left',
    fontSize: '32px',
    paddingBottom: !props.nomobile ? '22px' : null
  });
});
var SectionTitleInner = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', function (props) {
  return _defineProperty({
    lineHeight: '32px'
  }, mediaQueries.tablet, {
    lineHeight: '24px'
  });
});
var SectionContent = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', function (props) {
  return _defineProperty({
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: 'calc(12px + 0.75vw + 0.5vh)',
    width: props.nomobile ? 'calc(100% - 140px)' : 'auto',
    padding: props.nomobile ? '0 170px' : null,
    textAlign: 'right',
    flexDirection: 'row',
    margin: '0'
  }, mediaQueries.tablet, {
    margin: '0',
    padding: '0',
    width: props.nomobile ? '100%' : null,
    justifyContent: props.nomobile ? 'space-between' : 'space-around',
    textAlign: 'left',
    flexDirection: props.nomobile ? 'row' : 'column',
    lineHeight: props.nomobile ? '24px' : null
  });
});
var HoverLetter = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  display: 'inline',
  transition: 'all ease-in-out 0.15s',
  opacity: '1'
});

var animWrap = function animWrap(content) {
  var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var fullscreen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      textAlign: 'center',
      flexGrow: fullscreen ? 1 : 0
    }
  }, content);
};

var App =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loaded: false,
      pinned: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusWrap", function (content) {
      return content.split(' ').map(function (c, i) {
        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HoverLetter, {
          key: content + i + c
        }, c), i != content.split(' ').length - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HoverLetter, {
          style: {
            opacity: 0
          },
          key: content + i
        }, 'i')];
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Anime = __webpack_require__(/*! react-anime */ "./node_modules/react-anime/dist/react-anime.js").default;
      setTimeout(function () {
        _this2.setState({
          loaded: true
        });
      }, 150);
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 450);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        style: {
          position: 'relative'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bubblecontainer",
        style: {
          overflow: 'hidden',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_bubbles__WEBPACK_IMPORTED_MODULE_12__["default"], null)), animWrap(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item"
      }, "Timea Veskovic")), animWrap(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item body"
      }, "I\u2019m a multidisciplinary designer with experience in Visual Design, UX and Service Design. I identify opportunities and design meaningful products and services that find a place in people\u2019s lives. I\u2019m passionate about using design to enable positive change in behaviours and turning problems into opportunities.")), animWrap(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item body"
      }, "Check out my work or just say hi!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          zIndex: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '140px',
          margin: '0 auto'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.behance.net/timeaves"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "iconcontainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_10__["Behance"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:timea.veskovic@gmail.com"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "iconcontainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_10__["Mail"], null)))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.e7760700d16609edd8c9.hot-update.js.map