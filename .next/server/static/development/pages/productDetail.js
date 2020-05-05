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

/***/ "./components/Common/Divider/index.js":
/*!********************************************!*\
  !*** ./components/Common/Divider/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/Common/Divider/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\minimal-m\\components\\Common\\Divider\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  height = 10
}) => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.divider,
  style: {
    height
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}));

/***/ }),

/***/ "./components/Common/Divider/styles.scss":
/*!***********************************************!*\
  !*** ./components/Common/Divider/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"divider": "divider___30etv"
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

/***/ "./components/Home/Banner.js":
/*!***********************************!*\
  !*** ./components/Home/Banner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/Home/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "G:\\minimal-m\\components\\Home\\Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Banner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1___default.a(".swiper-container", {
      loop: true
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: ["swiper-container", _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.swiper].join(" "),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "swiper-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, [1, 2, 3, 4].map(key => __jsx("div", {
      className: "swiper-slide",
      key: key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.img,
      src: `/static/banner/banner${key}.png`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }))))));
  }

}

/***/ }),

/***/ "./components/Home/styles.scss":
/*!*************************************!*\
  !*** ./components/Home/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"swiper": "swiper___1HRHJ",
	"img": "img___2J0eB",
	"search": "search___3Buoj",
	"searchWrapper": "searchWrapper___3ziRz",
	"text": "text___31Szr",
	"icon": "icon___AhUgR",
	"iconList": "iconList___jbhnL",
	"seckill": "seckill___1UdQ9",
	"seckillTitle": "seckillTitle___1HEPM",
	"arrow": "arrow___Pe-9z",
	"desc": "desc___2_m2o",
	"listWrapper": "listWrapper___3v1UO",
	"seckillItem": "seckillItem___1d9b9",
	"price": "price___1--hP",
	"title": "title___1d-1K",
	"btn": "btn___36Qe-"
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

/***/ "./components/ProductDetail/BasicInfo/index.js":
/*!*****************************************************!*\
  !*** ./components/ProductDetail/BasicInfo/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/ProductDetail/BasicInfo/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\minimal-m\\components\\ProductDetail\\BasicInfo\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  price
}) => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.basicInfo,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, title), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.price,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, "\uFFE5", price), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.other,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.freight,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, "\u8FD0\u8D39\uFF1A\uFFE56"), __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.salesVolume,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, "\u9500\u91CF\uFF1A123"))));

/***/ }),

/***/ "./components/ProductDetail/BasicInfo/styles.scss":
/*!********************************************************!*\
  !*** ./components/ProductDetail/BasicInfo/styles.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"basicInfo": "basicInfo___2ore0",
	"title": "title___2tzYc",
	"price": "price___2-X8b",
	"other": "other___3InEf",
	"freight": "freight___3o7po",
	"salesVolume": "salesVolume___2p7av"
};

/***/ }),

/***/ "./components/ProductDetail/Bottom/index.js":
/*!**************************************************!*\
  !*** ./components/ProductDetail/Bottom/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/ProductDetail/Bottom/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\minimal-m\\components\\ProductDetail\\Bottom\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bottom,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.left,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx("img", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img,
  src: "/static/icon/\u5BA2\u670D.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, "\u5BA2\u670D")), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, __jsx("img", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img,
  src: "/static/icon/\u8D2D\u7269\u8F66.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, "\u8D2D\u7269\u8F66"))), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.priceWrapper,
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
}, "\u52A0\u5165\u8D2D\u7269\u8F66")), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pay,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}, "\u7ACB\u5373\u8D2D\u4E70")))));

/***/ }),

/***/ "./components/ProductDetail/Bottom/styles.scss":
/*!*****************************************************!*\
  !*** ./components/ProductDetail/Bottom/styles.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"bottom": "bottom___39V9w",
	"left": "left___2CXDZ",
	"icon": "icon___10gQp",
	"img": "img___1O9YI",
	"text": "text___1POJ-",
	"right": "right___1gMv8",
	"priceWrapper": "priceWrapper___2M3IC",
	"pay": "pay___2SFrf"
};

/***/ }),

/***/ "./components/ProductDetail/Discount/index.js":
/*!****************************************************!*\
  !*** ./components/ProductDetail/Discount/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/ProductDetail/Discount/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\minimal-m\\components\\ProductDetail\\Discount\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selectSku,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.select,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "\u4F18\u60E0"), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tipsWrapper,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tips,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, "\u4F7F\u7528\u4F18\u60E0\u5238\u53EF\u51CF", __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.price,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 16
  }
}, "\uFFE510")), __jsx("img", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img,
  src: "/static/icon/arrow.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}))));

/***/ }),

/***/ "./components/ProductDetail/Discount/styles.scss":
/*!*******************************************************!*\
  !*** ./components/ProductDetail/Discount/styles.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"selectSku": "selectSku___1bzyB",
	"select": "select___ZLhQ5",
	"tipsWrapper": "tipsWrapper___1bolz",
	"tips": "tips___1o4NF",
	"img": "img___3EJ7s",
	"price": "price___Sg3Cc"
};

/***/ }),

/***/ "./components/ProductDetail/SelectSku/index.js":
/*!*****************************************************!*\
  !*** ./components/ProductDetail/SelectSku/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/ProductDetail/SelectSku/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\minimal-m\\components\\ProductDetail\\SelectSku\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selectSku,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.select,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "\u9009\u62E9"), __jsx("div", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tipsWrapper,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("span", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tips,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, "\u8BF7\u9009\u62E9\u89C4\u683C"), __jsx("img", {
  className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img,
  src: "/static/icon/arrow.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}))));

/***/ }),

/***/ "./components/ProductDetail/SelectSku/styles.scss":
/*!********************************************************!*\
  !*** ./components/ProductDetail/SelectSku/styles.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"selectSku": "selectSku___1lul0",
	"select": "select___3Cv1B",
	"tipsWrapper": "tipsWrapper___308z7",
	"tips": "tips___30ln1",
	"img": "img___PDecc"
};

/***/ }),

/***/ "./node_modules/swiper/dist/css/swiper.css":
/*!*************************************************!*\
  !*** ./node_modules/swiper/dist/css/swiper.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"swiper-container": "swiper-container___3T1Xz",
	"swiper-container-no-flexbox": "swiper-container-no-flexbox___prMNP",
	"swiper-slide": "swiper-slide___ueIYu",
	"swiper-container-vertical": "swiper-container-vertical___Uiymb",
	"swiper-wrapper": "swiper-wrapper___Yh7AT",
	"swiper-container-android": "swiper-container-android___wz7e8",
	"swiper-container-multirow": "swiper-container-multirow___FyS7w",
	"swiper-container-free-mode": "swiper-container-free-mode___yp4uW",
	"swiper-slide-invisible-blank": "swiper-slide-invisible-blank___1jkor",
	"swiper-container-autoheight": "swiper-container-autoheight___1L4EW",
	"swiper-container-3d": "swiper-container-3d___MJj-L",
	"swiper-slide-shadow-left": "swiper-slide-shadow-left___1EWyo",
	"swiper-slide-shadow-right": "swiper-slide-shadow-right___13SQl",
	"swiper-slide-shadow-top": "swiper-slide-shadow-top___3Yr_x",
	"swiper-slide-shadow-bottom": "swiper-slide-shadow-bottom___3aPNi",
	"swiper-cube-shadow": "swiper-cube-shadow___1KrGz",
	"swiper-container-wp8-horizontal": "swiper-container-wp8-horizontal___3bm7p",
	"swiper-container-wp8-vertical": "swiper-container-wp8-vertical___3jvQa",
	"swiper-button-prev": "swiper-button-prev___1HheR",
	"swiper-button-next": "swiper-button-next___uweZx",
	"swiper-button-disabled": "swiper-button-disabled___21BMc",
	"swiper-container-rtl": "swiper-container-rtl___3CGfM",
	"swiper-button-white": "swiper-button-white___1eqYE",
	"swiper-button-black": "swiper-button-black___BeQrp",
	"swiper-button-lock": "swiper-button-lock___1_XKO",
	"swiper-pagination": "swiper-pagination___22yGA",
	"swiper-pagination-hidden": "swiper-pagination-hidden___143Ro",
	"swiper-pagination-fraction": "swiper-pagination-fraction___aKmyQ",
	"swiper-pagination-custom": "swiper-pagination-custom___2cy1X",
	"swiper-container-horizontal": "swiper-container-horizontal___3QGVl",
	"swiper-pagination-bullets": "swiper-pagination-bullets___3Dx94",
	"swiper-pagination-bullets-dynamic": "swiper-pagination-bullets-dynamic___2tUaa",
	"swiper-pagination-bullet": "swiper-pagination-bullet___7o7Q7",
	"swiper-pagination-bullet-active": "swiper-pagination-bullet-active___22COq",
	"swiper-pagination-bullet-active-main": "swiper-pagination-bullet-active-main___3tGN6",
	"swiper-pagination-bullet-active-prev": "swiper-pagination-bullet-active-prev___20Sy_",
	"swiper-pagination-bullet-active-prev-prev": "swiper-pagination-bullet-active-prev-prev___3xFdU",
	"swiper-pagination-bullet-active-next": "swiper-pagination-bullet-active-next___GxZJz",
	"swiper-pagination-bullet-active-next-next": "swiper-pagination-bullet-active-next-next___2XnWj",
	"swiper-pagination-clickable": "swiper-pagination-clickable___19Hgf",
	"swiper-pagination-progressbar": "swiper-pagination-progressbar___2UOzt",
	"swiper-pagination-progressbar-fill": "swiper-pagination-progressbar-fill___1xu6U",
	"swiper-pagination-progressbar-opposite": "swiper-pagination-progressbar-opposite___BV1gn",
	"swiper-pagination-white": "swiper-pagination-white___2yUw_",
	"swiper-pagination-black": "swiper-pagination-black___2rJ1E",
	"swiper-pagination-lock": "swiper-pagination-lock___2op9f",
	"swiper-scrollbar": "swiper-scrollbar___1HPr_",
	"swiper-scrollbar-drag": "swiper-scrollbar-drag___20Ozp",
	"swiper-scrollbar-cursor-drag": "swiper-scrollbar-cursor-drag___CfSNH",
	"swiper-scrollbar-lock": "swiper-scrollbar-lock___2Crwc",
	"swiper-zoom-container": "swiper-zoom-container___-BpNe",
	"swiper-slide-zoomed": "swiper-slide-zoomed___2FksB",
	"swiper-lazy-preloader": "swiper-lazy-preloader___2NBg7",
	"swiper-preloader-spin": "swiper-preloader-spin___2OMSS",
	"swiper-lazy-preloader-white": "swiper-lazy-preloader-white___3q5j0",
	"swiper-notification": "swiper-notification___32MjE",
	"swiper-container-fade": "swiper-container-fade___3ylH0",
	"swiper-slide-active": "swiper-slide-active___230s3",
	"swiper-container-cube": "swiper-container-cube___W64aS",
	"swiper-slide-next": "swiper-slide-next___1LsN7",
	"swiper-slide-prev": "swiper-slide-prev____KANI",
	"swiper-container-flip": "swiper-container-flip___1DNc_",
	"swiper-container-coverflow": "swiper-container-coverflow___3QAna"
};

/***/ }),

/***/ "./pages/productDetail.js":
/*!********************************!*\
  !*** ./pages/productDetail.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Common_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Common/Header */ "./components/Common/Header/index.js");
/* harmony import */ var _components_Home_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Home/Banner */ "./components/Home/Banner.js");
/* harmony import */ var _components_ProductDetail_BasicInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ProductDetail/BasicInfo */ "./components/ProductDetail/BasicInfo/index.js");
/* harmony import */ var _components_Common_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Common/Divider */ "./components/Common/Divider/index.js");
/* harmony import */ var _components_ProductDetail_Discount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ProductDetail/Discount */ "./components/ProductDetail/Discount/index.js");
/* harmony import */ var _components_ProductDetail_SelectSku__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/ProductDetail/SelectSku */ "./components/ProductDetail/SelectSku/index.js");
/* harmony import */ var _components_ProductDetail_Bottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/ProductDetail/Bottom */ "./components/ProductDetail/Bottom/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "G:\\minimal-m\\pages\\productDetail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const info = {
  title: "短裙子女2020年新款秋冬高腰百褶a字蓬蓬裙防走光显瘦学生半裙",
  price: 123
};
class ProductDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.detailWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx(_components_Common_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      back: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, "\u5546\u54C1\u8BE6\u60C5"), __jsx("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.main,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, __jsx(_components_Home_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), __jsx(_components_ProductDetail_BasicInfo__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    })), __jsx(_components_Common_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }), __jsx(_components_ProductDetail_Discount__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }), __jsx(_components_Common_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }), __jsx(_components_ProductDetail_SelectSku__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }), __jsx(_components_Common_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }))), __jsx("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.bottom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx(_components_ProductDetail_Bottom__WEBPACK_IMPORTED_MODULE_8__["default"], {
      price: 199,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ "./pages/styles.scss":
/*!***************************!*\
  !*** ./pages/styles.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"detailWrapper": "detailWrapper___1oSk1",
	"main": "main___1Ma59",
	"bottom": "bottom___3-cit",
	"more": "more___3aY9d",
	"bgWrapper": "bgWrapper___SgL5g",
	"bg": "bg___205rT",
	"orderStatus": "orderStatus___3wPPH",
	"recevierInfo": "recevierInfo___33l0x",
	"img": "img___mmi18",
	"recevier": "recevier___3DEH1",
	"info": "info___15T7N",
	"name": "name___2S6yI",
	"phone": "phone___20UiG",
	"address": "address___3cGZ-",
	"skuList": "skuList___Pt9UE",
	"skuWrapper": "skuWrapper___1feRl",
	"skuInfo": "skuInfo___2-ACy",
	"title": "title___29KT-",
	"priceInfo": "priceInfo___2n_0t",
	"orderInfo": "orderInfo___2KEib",
	"list": "list___20AbQ",
	"item": "item___3RJPd",
	"arrow": "arrow___6_4lo",
	"btns": "btns___2uMZz",
	"recevie": "recevie___1RMsX",
	"pay": "pay___3RSdT"
};

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/productDetail.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\minimal-m\pages\productDetail.js */"./pages/productDetail.js");


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

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ })

/******/ });
//# sourceMappingURL=productDetail.js.map