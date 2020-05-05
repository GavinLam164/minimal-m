webpackHotUpdate("static\\development\\pages\\orderDetail.js",{

/***/ "./pages/orderDetail.js":
/*!******************************!*\
  !*** ./pages/orderDetail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetail; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Common_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Common/Header */ "./components/Common/Header/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "G:\\minimal-m\\pages\\orderDetail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ProductDetail = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductDetail, _Component);

  var _super = _createSuper(ProductDetail);

  function ProductDetail() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProductDetail);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductDetail, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        path: this.props.pathname,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 7
        }
      }, __jsx(_components_Common_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        back: true,
        right: __jsx("img", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.more,
          src: "/static/icon/\u66F4\u591A.png",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 18
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, "\u8BA2\u5355\u8BE6\u60C5"), __jsx("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.bgWrapper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }, __jsx("img", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.bg,
        src: "/static/img/bg.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }), __jsx("span", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.orderStatus,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, "\u4E70\u5BB6\u5DF2\u4ED8\u6B3E")), __jsx("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.recevierInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/static/icon/\u4F4D\u7F6E.png",
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.img,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.recevier,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.info,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      }, "\u59D3\u540D\uFF1A"), __jsx("span", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.phone,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }
      }, "\u7535\u8BDD\uFF1A")), __jsx("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.address,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }, "\u6536\u8D27\u5177\u4F53\u5730\u5740\u6536\u8D27\u5177\u4F53\u5730\u5740\u6536\u8D27\u5177\u4F53\u4F4D\u7F6E\u3002\u6536\u8D27\u5177\u4F53 \u5177\u4F53\u5730\u5740\u6536\u8D27\u5177\u4F53\u4F4D\u7F6E\u6536\u8D27\u5177\u4F53\u5730\u5740"))), __jsx("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.skuList,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, __jsx("img", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.spec,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var pathname;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pathname = _ref.pathname;
              return _context.abrupt("return", {
                pathname: pathname
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return ProductDetail;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=orderDetail.js.9ea62a6f518250dbc35a.hot-update.js.map