module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./axios.js":
/*!******************!*\
  !*** ./axios.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api'
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./components/Blog.js":
/*!****************************!*\
  !*** ./components/Blog.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/christophergorman/apache/React/nextjs/components/Blog.js";



var blog = function blog(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: props.clicked,
    className: "jsx-3299505608",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3299505608",
    css: "div.jsx-3299505608{width:200px;height:200px;padding:16px;text-align:center;border:1px solid #eee;box-shadow:0 2px 3px #ccc;margin:10px;box-sizing:border-box;cursor:pointer;overflow:hidden;}div.jsx-3299505608:hover,div.jsx-3299505608:active{background-color:#CCCCCC;}div.jsx-3299505608 img.jsx-3299505608{width:150px;max-height:150px;min-height:150px;}div.jsx-3299505608 .Name.jsx-3299505608{margin:0;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmdvcm1hbi9hcGFjaGUvUmVhY3QvbmV4dGpzL2NvbXBvbmVudHMvQmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJYyxBQUdvQixBQWFhLEFBR2IsQUFLSCxTQUNFLEdBckJFLEFBZ0JJLFFBTXJCLEtBckJpQixBQVlqQixJQUlxQixTQWZDLFFBZ0J0QixVQWYwQixzQkFDSSwwQkFDZCxZQUNVLHNCQUNQLGVBQ0MsZ0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9jaHJpc3RvcGhlcmdvcm1hbi9hcGFjaGUvUmVhY3QvbmV4dGpzL2NvbXBvbmVudHMvQmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGJsb2cgPSAocHJvcHMpID0+IChcblx0PGRpdiBvbkNsaWNrPXtwcm9wcy5jbGlja2VkfT5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRkaXYge1xuXHRcdFx0ICAgIHdpZHRoOiAyMDBweDtcblx0XHRcdCAgICBoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0ICAgIHBhZGRpbmc6IDE2cHg7XG5cdFx0XHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG5cdFx0XHQgICAgYm94LXNoYWRvdzogMCAycHggM3B4ICNjY2M7XG5cdFx0XHQgICAgbWFyZ2luOiAxMHB4O1xuXHRcdFx0ICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHQgICAgY3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0ICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHR9XG5cdFx0XHRkaXY6aG92ZXIsXG5cdFx0XHRkaXY6YWN0aXZlIHtcblx0XHRcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xuXHRcdFx0fVxuXHRcdFx0ZGl2IGltZyB7XG5cdFx0XHQgICAgd2lkdGg6IDE1MHB4O1xuXHRcdFx0ICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuXHRcdFx0ICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuXHRcdFx0fVxuXHRcdFx0ZGl2IC5OYW1lIHtcblx0XHRcdCAgICBtYXJnaW46IDA7XG5cdFx0XHQgICAgY29sb3I6ICMwMDA7XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuICAgXHRcdDxpbWcgc3JjPXtwcm9wcy5pbWFnZVVybH0gYWx0PXtwcm9wcy5uYW1lfSAvPlxuICAgIFx0PHAgY2xhc3NOYW1lPVwiTmFtZVwiPntwcm9wcy5uYW1lfTwvcD5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGJsb2c7Il19 */\n/*@ sourceURL=/Users/christophergorman/apache/React/nextjs/components/Blog.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.imageUrl,
    alt: props.name,
    className: "jsx-3299505608",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3299505608" + " " + "Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.name));
};

/* harmony default export */ __webpack_exports__["default"] = (blog);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axios */ "./axios.js");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Blog */ "./components/Blog.js");
var _jsxFileName = "/Users/christophergorman/apache/React/nextjs/pages/index.js";


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







var IndexPage =
/*#__PURE__*/
function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IndexPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      blogs: [],
      error: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blogSelectedHandler", function (id) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/blog/?query=' + id);
    });

    return _this;
  }

  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _axios__WEBPACK_IMPORTED_MODULE_4__["default"].get('/cakes').then(function (response) {
        _this2.setState({
          blogs: response.data
        });
      }).catch(function (error) {
        _this2.setState({
          error: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var blogs = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Something went wrong!");

      if (!this.state.error) {
        blogs = this.state.blogs.map(function (blog) {
          //just some basic validation there are a lot of bad URLs to images
          if (blog.imageUrl.endsWith("jpg")) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Blog__WEBPACK_IMPORTED_MODULE_5__["default"], {
              key: blog.id,
              name: blog.name,
              imageUrl: blog.imageUrl,
              clicked: function clicked() {
                return _this3.blogSelectedHandler(blog.id);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              },
              __self: this
            });
          }

          return null;
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2907809732",
        css: "section.jsx-2907809732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:80%;margin:auto;}nav.jsx-2907809732 ul.jsx-2907809732{list-style:none;margin:0;padding:0;width:100%;text-align:center;}nav.jsx-2907809732 li.jsx-2907809732{display:inline-block;margin:20px;}nav.jsx-2907809732 a.jsx-2907809732{-webkit-text-decoration:none;text-decoration:none;color:black;}nav.jsx-2907809732 a.jsx-2907809732:hover,nav.jsx-2907809732 a.jsx-2907809732:active,nav.jsx-2907809732 a.active.jsx-2907809732{color:#fa923f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmdvcm1hbi9hcGFjaGUvUmVhY3QvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGeUIsQUFHdUIsQUFPRyxBQU9LLEFBSUEsQUFNUCxjQUNsQixFQWpCYSxLQU9HLElBTkYsUUFPZCxFQU5lLFdBQ08sSUFRTixZQUNoQixFQVJBLFVBWHVCLHFFQUNJLG1HQUNiLFVBQ0UsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2NocmlzdG9waGVyZ29ybWFuL2FwYWNoZS9SZWFjdC9uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXhpb3MnO1xuXG5pbXBvcnQgQmxvZyBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2cnO1xuXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXHQvKlxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcblx0XHQvL2NvdWxkIGRvIGFuIGFwaSBjYWxsIHRvIGdldCBkYXRhIGZyb20gdGhlIGRhdGFiYXNlXG5cdFx0Ly91c2UgYXdhaXQga2V5d29yZCB0byBhd2FpdGUgYSBwcm9taXNlXG5cdFx0Ly9zZXQgdXAgcHJvcHMgdG8gdXNlIGluIHRoZSBhcHAgYmVmb3JlIGl0IHJlbmRlcnNcblx0XHRyZXR1cm4ge2FwcE5hbWU6ICdTdXBlciBBcHAnfTtcblx0fVxuXG5cdG9yIHlvdSBjYW4gZG8gdGhpc1xuXHRcblxuXHRzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcblx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoe2FwcE5hbWU6ICdTdXBlciBBcHAgMSd9KVxuXHRcdFx0fSwgMTAwMCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgxPlRoZSBNYWluIFBhZ2Ugb2Yge3RoaXMucHJvcHMuYXBwTmFtZX0/PC9oMT5cblx0XHRcdFx0PHA+R28gdG8gdGhpcyBsaW5rIGhlcmUgPExpbmsgaHJlZj1cIi9hdXRoXCI+PGE+QXV0aDwvYT48L0xpbms+PC9wPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvYXV0aCcpIH0+R28gdG8gQXV0aDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHQqL1xuXHRzdGF0ZSA9IHtcbiAgICAgICAgYmxvZ3M6IFtdLFxuICAgICAgICBlcnJvcjogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGF4aW9zLmdldCggJy9jYWtlcycgKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICBcdHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBcdHRoaXMuc2V0U3RhdGUoe2Jsb2dzOiByZXNwb25zZS5kYXRhfSk7XG4gICAgICAgICAgIFx0XHR9XG4gICAgICAgICAgIFx0KVxuICAgICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgXHRlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xuICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGJsb2dTZWxlY3RlZEhhbmRsZXIgPSAoIGlkICkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCggJy9ibG9nLz9xdWVyeT0nICsgaWQgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgXHRsZXQgYmxvZ3MgPSA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5Tb21ldGhpbmcgd2VudCB3cm9uZyE8L3A+O1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXJyb3IpIHtcbiAgICAgICAgXHRibG9ncyA9IHRoaXMuc3RhdGUuYmxvZ3MubWFwKGJsb2cgPT4ge1xuICAgICAgICBcdFx0Ly9qdXN0IHNvbWUgYmFzaWMgdmFsaWRhdGlvbiB0aGVyZSBhcmUgYSBsb3Qgb2YgYmFkIFVSTHMgdG8gaW1hZ2VzXG4gICAgICAgIFx0XHRpZiAoYmxvZy5pbWFnZVVybC5lbmRzV2l0aChcImpwZ1wiKSkge1xuXHQgICAgICAgIFx0XHRyZXR1cm4gPEJsb2cgXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2cuaWR9XG5cdCAgICAgICAgICAgICAgICAgICAgbmFtZT17YmxvZy5uYW1lfSBcblx0ICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17YmxvZy5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ9eygpID0+IHRoaXMuYmxvZ1NlbGVjdGVkSGFuZGxlcihibG9nLmlkKX0gLz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblx0XHRcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFx0PHN0eWxlIGpzeD57YFxuXHQgICAgICAgICAgICBcdHNlY3Rpb24ge1xuXHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdCAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXHRcdFx0XHRcdCAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHQgICAgd2lkdGg6IDgwJTtcblx0XHRcdFx0XHQgICAgbWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuYXYgdWwge1xuXHRcdFx0XHRcdCAgICBsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRcdCAgICBtYXJnaW46IDA7XG5cdFx0XHRcdFx0ICAgIHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0ICAgIHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5hdiBsaSB7XG5cdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHQgICAgbWFyZ2luOiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuYXYgYSB7XG5cdFx0XHRcdFx0ICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHQgICAgY29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuYXYgYTpob3Zlcixcblx0XHRcdFx0XHRuYXYgYTphY3RpdmUsXG5cdFx0XHRcdFx0bmF2IGEuYWN0aXZlIHtcblx0XHRcdFx0XHQgICAgY29sb3I6ICNmYTkyM2Y7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+PGE+QmxvZ3M8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvYXV0aFwiPjxhPkF1dGg8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9Jy91cGxvYWQtYmxvZyc+PGE+VXBsb2FkIEJsb2c8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICBcdFx0XHQ8c2VjdGlvbj5cbiAgICBcdFx0XHRcdHtibG9nc31cbiAgICBcdFx0XHQ8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdfQ== */\n/*@ sourceURL=/Users/christophergorman/apache/React/nextjs/pages/index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Blogs"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/auth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Auth"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/upload-blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Upload Blog")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2907809732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, blogs));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map