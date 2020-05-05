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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart/Bottom/index.js":
/*!*****************************************!*\
  !*** ./components/Cart/Bottom/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/Cart/Bottom/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\minimal-m\\components\\Cart\\Bottom\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const getImgSrc = isAll => `/static/icon/${isAll ? "勾选" : "未勾选"}.png`;

/* harmony default export */ __webpack_exports__["default"] = (({
  price,
  isAll
}) => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bottom,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.left,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("img", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img,
  src: getImgSrc(isAll),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.all,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, "\u5168\u9009")), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.priceWrapper,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.total,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, "\u5408\u8BA1\uFF1A"), __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.price,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, "\uFFE5", price)), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pay,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, "\u7ED3\u7B97")))));

/***/ }),

/***/ "./components/Cart/Bottom/styles.scss":
/*!********************************************!*\
  !*** ./components/Cart/Bottom/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"bottom": "bottom___11LXE",
	"left": "left___32pE7",
	"img": "img___3MXjt",
	"all": "all___2ulD3",
	"right": "right___j1f8-",
	"priceWrapper": "priceWrapper___3-HMC",
	"total": "total___HblCb",
	"price": "price___kbe9s",
	"pay": "pay___2T3Gq"
};

/***/ }),

/***/ "./components/Common/Header/index.js":
/*!*******************************************!*\
  !*** ./components/Common/Header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/Common/Header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\minimal-m\\components\\Common\\Header\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  back,
  children,
  right
}) => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.left,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, back && __jsx("img", {
  src: "/static/icon/\u8FD4\u56DE.png",
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.back,
  onClick: () => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.back();
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
})), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, children), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, right)));

/***/ }),

/***/ "./components/Common/Header/styles.scss":
/*!**********************************************!*\
  !*** ./components/Common/Header/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "header___R3-1f",
	"left": "left___3g1hf",
	"back": "back___1sD3O",
	"text": "text___1L6hm",
	"right": "right___2Imo5"
};

/***/ }),

/***/ "./components/Common/ProductItem/index.js":
/*!************************************************!*\
  !*** ./components/Common/ProductItem/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/Common/ProductItem/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\minimal-m\\components\\Common\\ProductItem\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  src,
  title,
  desc,
  price
}) => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.productItem,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("img", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img,
  src: src,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.baseInfo,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, title), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desc,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, desc), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.price,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, "\uFFE5", price))));

/***/ }),

/***/ "./components/Common/ProductItem/styles.scss":
/*!***************************************************!*\
  !*** ./components/Common/ProductItem/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"productItem": "productItem___kAhh8",
	"img": "img___8lhQB",
	"baseInfo": "baseInfo___2EXSw",
	"title": "title___2zppf",
	"desc": "desc___3zC3k",
	"price": "price___3IR8k"
};

/***/ }),

/***/ "./components/Layout/Home/Main.js":
/*!****************************************!*\
  !*** ./components/Layout/Home/Main.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/Layout/Home/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\minimal-m\\components\\Layout\\Home\\Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 34
  }
}, children));

/***/ }),

/***/ "./components/Layout/Home/TabBar/Icon.js":
/*!***********************************************!*\
  !*** ./components/Layout/Home/TabBar/Icon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/Layout/Home/TabBar/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\minimal-m\\components\\Layout\\Home\\TabBar\\Icon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Icon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "activePath", () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(this.props.path);
    });
  }

  getPath() {
    const {
      name,
      isActived
    } = this.props;
    return `/static/icon/${name}_${isActived ? "s" : "d"}.png`;
  }

  getActiveTextClass() {
    return this.props.isActived ? _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.actived : "";
  }

  render() {
    return __jsx("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      onClick: this.activePath,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img,
      src: this.getPath(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), __jsx("span", {
      className: [_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text, this.getActiveTextClass()].join(" "),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, this.props.name)));
  }

}

/***/ }),

/***/ "./components/Layout/Home/TabBar/index.js":
/*!************************************************!*\
  !*** ./components/Layout/Home/TabBar/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/Layout/Home/TabBar/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./components/Layout/Home/TabBar/Icon.js");
var _jsxFileName = "G:\\minimal-m\\components\\Layout\\Home\\TabBar\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const iconNames = ["首页", "分类", "购物车", "我的"];
const pathMap = {
  "/home": "首页",
  "/category": "分类",
  "/cart": "购物车",
  "/user": "我的"
};

const findPath = name => Object.keys(pathMap).find(key => pathMap[key] === name);

/* harmony default export */ __webpack_exports__["default"] = (({
  path
}) => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bottom,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, iconNames.map(name => __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: name,
  name: name,
  path: findPath(name),
  isActived: pathMap[path] === name,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}))));

/***/ }),

/***/ "./components/Layout/Home/TabBar/styles.scss":
/*!***************************************************!*\
  !*** ./components/Layout/Home/TabBar/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"bottom": "bottom___1PvAe",
	"icon": "icon___wpXj4",
	"img": "img___37i36",
	"text": "text___1QFy7",
	"actived": "actived___R1SRB"
};

/***/ }),

/***/ "./components/Layout/Home/styles.scss":
/*!********************************************!*\
  !*** ./components/Layout/Home/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "header___23f9L",
	"main": "main___3DckA"
};

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home/Main */ "./components/Layout/Home/Main.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/Layout/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Home_TabBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home/TabBar */ "./components/Layout/Home/TabBar/index.js");
var _jsxFileName = "G:\\minimal-m\\components\\Layout\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      path,
      tab
    } = this.props;
    return __jsx("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx(_Home_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, this.props.children), tab && __jsx(_Home_TabBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      path: path,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }));
  }

}

/***/ }),

/***/ "./components/Layout/styles.scss":
/*!***************************************!*\
  !*** ./components/Layout/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___VJnal"
};

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Common_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Common/Header */ "./components/Common/Header/index.js");
/* harmony import */ var _components_Cart_Bottom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Cart/Bottom */ "./components/Cart/Bottom/index.js");
/* harmony import */ var _components_Common_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Common/ProductItem */ "./components/Common/ProductItem/index.js");
var _jsxFileName = "G:\\minimal-m\\pages\\cart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const info = {
  src: "/static/img/img1.png",
  title: "111",
  desc: "222",
  price: "333"
};
class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps({
    pathname
  }) {
    return {
      pathname
    };
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      path: this.props.pathname,
      tab: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(_components_Common_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      right: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 24
        }
      }, "\u7F16\u8F91"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, "\u8D2D\u7269\u8F66"), __jsx(_components_Common_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    })), __jsx(_components_Common_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    })), __jsx(_components_Common_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    })), __jsx(_components_Common_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    })), __jsx(_components_Common_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    })), __jsx(_components_Common_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    })), __jsx(_components_Common_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    })), __jsx(_components_Cart_Bottom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      price: 199,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ 6:
/*!*****************************!*\
  !*** multi ./pages/cart.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\minimal-m\pages\cart.js */"./pages/cart.js");


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

/***/ })

/******/ });
//# sourceMappingURL=cart.js.map