/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/pure-full-page/lib/pureFullPage.min.css":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/pure-full-page/lib/pureFullPage.min.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@charset \\\"UTF-8\\\";body,html{padding:0;margin:0;overflow:hidden}#pureFullPage{position:relative;top:0;transition:all 1s ease}#pureFullPage .page{width:100%;height:100%}#pureFullPage .nav{position:fixed;top:50%;right:15px;width:18px;transform:translateY(-50%)}#pureFullPage .nav p{width:18px;height:20px;padding:14px 0;margin:0 auto;cursor:pointer}#pureFullPage .nav p span{display:block;position:relative;top:50%;transform:translateY(-50%);width:6px;height:12px;margin:0 auto;background-color:rgba(255,255,255,.6);border-radius:12px;transition:all 150ms ease-in-out}#pureFullPage .nav p:hover span{width:8px;height:16px;background-color:#fff}#pureFullPage .nav p.active span{width:10px;height:20px;background-color:#fff}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///../node_modules/pure-full-page/lib/pureFullPage.min.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./index.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./index.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody,\\n#view {\\n  width: 100%;\\n  height: 100%;\\n}\\n#view {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n#pureFullPage {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 1;\\n}\\n.page {\\n  pointer-events: none;\\n}\\n.nav {\\n  pointer-events: visible;\\n}\\n\\n.page p {\\n  font-size: 66px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./index.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/pure-full-page/lib/pureFullPage.js":
/*!**********************************************************!*\
  !*** ../node_modules/pure-full-page/lib/pureFullPage.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils */ \"../node_modules/pure-full-page/lib/utils.js\");\n/**\n * 全屏滚动逻辑\n */\n\n\nclass PureFullPage {\n  constructor(options) {\n    // 默认配置\n    const defaultOptions = {\n      isShowNav: true,\n      delay: 1000,\n      definePages: () => {}\n    };\n    utils.polyfill(); // 合并自定义配置\n\n    this.options = Object.assign(defaultOptions, options); // 将用户自定义函数绑定到实例 this\n\n    this.options.definePages = this.options.definePages.bind(this); // 获取翻页容器\n\n    this.container = document.querySelector('#pureFullPage'); // 获取总页数，创建右侧点导航时用\n\n    this.pages = document.querySelectorAll('.page');\n    this.pagesNum = this.pages.length; // 初始化右侧点导航，以备后用\n\n    this.navDots = []; // 获取当前视图高度\n\n    this.viewHeight = document.documentElement.clientHeight; // 当前位置，负值表示相对视图窗口顶部向下的偏移量\n\n    this.currentPosition = 0; // 截流/间隔函数延迟时间，毫秒\n\n    this.DELAY = this.options.delay; // 检测滑动方向，只需要检测纵坐标\n\n    this.startY = undefined;\n  } // window resize 时重新获取位置\n\n\n  getNewPosition() {\n    this.viewHeight = document.documentElement.clientHeight;\n    this.container.style.height = `${this.viewHeight}px`;\n    let activeNavIndex;\n    this.navDots.forEach((e, i) => {\n      if (e.classList.contains('active')) {\n        activeNavIndex = i;\n      }\n    });\n    this.currentPosition = -(activeNavIndex * this.viewHeight);\n    this.turnPage(this.currentPosition);\n  }\n\n  handleWindowResize(event) {\n    // 设置防抖动函数\n    utils.debounce(this.getNewPosition, this, event, this.DELAY);\n  } // 页面跳转\n\n\n  turnPage(height) {\n    this.container.style.top = `${height}px`;\n  } // 随页面滚动改变样式\n\n\n  changeNavStyle(height) {\n    if (this.options.isShowNav) {\n      this.navDots.forEach(el => {\n        utils.deleteClassName(el, 'active');\n      });\n      const i = -(height / this.viewHeight);\n      this.navDots[i].classList.add('active');\n    }\n  } // 创建右侧点式导航\n\n\n  createNav() {\n    const nav = document.createElement('div');\n    nav.className = 'nav';\n    this.container.appendChild(nav); // 有几页，显示几个点\n\n    for (let i = 0; i < this.pagesNum; i++) {\n      nav.innerHTML += '<p class=\"nav-dot\"><span></span></p>';\n    }\n\n    const navDots = document.querySelectorAll('.nav-dot');\n    this.navDots = Array.prototype.slice.call(navDots); // 添加初始样式\n\n    this.navDots[0].classList.add('active'); // 添加点式导航点击事件\n\n    this.navDots.forEach((el, i) => {\n      el.addEventListener('click', () => {\n        // 页面跳转\n        this.currentPosition = -(i * this.viewHeight); // 处理用户自定义函数\n\n        this.options.definePages();\n        this.turnPage(this.currentPosition); // 更改样式\n\n        this.navDots.forEach(el => {\n          utils.deleteClassName(el, 'active');\n        });\n        el.classList.add('active');\n      });\n    });\n  }\n\n  goUp() {\n    // 只有页面顶部还有页面时页面向上滚动\n    if (-this.container.offsetTop >= this.viewHeight) {\n      // 重新指定当前页面距视图顶部的距离 currentPosition，实现全屏滚动，currentPosition 为负值，越大表示超出顶部部分越少\n      this.currentPosition = this.currentPosition + this.viewHeight;\n      this.turnPage(this.currentPosition);\n      this.changeNavStyle(this.currentPosition); // 处理用户自定义函数\n\n      this.options.definePages();\n    }\n  }\n\n  goDown() {\n    // 只有页面底部还有页面时页面向下滚动\n    if (-this.container.offsetTop <= this.viewHeight * (this.pagesNum - 2)) {\n      // 重新指定当前页面距视图顶部的距离 currentPosition，实现全屏滚动，currentPosition 为负值，越小表示超出顶部部分越多\n      this.currentPosition = this.currentPosition - this.viewHeight;\n      this.turnPage(this.currentPosition);\n      this.changeNavStyle(this.currentPosition); // 处理用户自定义函数\n\n      this.options.definePages();\n    }\n  } // 鼠标滚动逻辑（全屏滚动关键逻辑）\n\n\n  scrollMouse(event) {\n    const delta = utils.getWheelDelta(event); // delta < 0，鼠标往前滚动，页面向下滚动\n\n    if (delta < 0) {\n      this.goDown();\n    } else {\n      this.goUp();\n    }\n  } // 触屏事件\n\n\n  touchEnd(event) {\n    const endY = event.changedTouches[0].pageY;\n\n    if (endY - this.startY < 0) {\n      // 手指向上滑动，对应页面向下滚动\n      this.goDown();\n    } else {\n      // 手指向下滑动，对应页面向上滚动\n      this.goUp();\n    }\n  } // 初始化函数\n\n\n  init() {\n    this.container.style.height = `${this.viewHeight}px`; // 创建点式导航\n\n    if (this.options.isShowNav) {\n      this.createNav();\n    } // 设置截流函数\n\n\n    const handleMouseWheel = utils.throttle(this.scrollMouse, this, this.DELAY); // 鼠标滚轮监听，火狐鼠标滚动事件不同其他\n\n    if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {\n      document.addEventListener('mousewheel', handleMouseWheel);\n    } else {\n      document.addEventListener('DOMMouseScroll', handleMouseWheel);\n    } // 手机触屏屏幕\n\n\n    document.addEventListener('touchstart', event => {\n      this.startY = event.touches[0].pageY;\n    });\n    const handleTouchEnd = utils.throttle(this.touchEnd, this, 500);\n    document.addEventListener('touchend', handleTouchEnd);\n    document.addEventListener('touchmove', event => {\n      event.preventDefault();\n    }); // 窗口尺寸变化时重置位置\n\n    window.addEventListener('resize', this.handleWindowResize.bind(this));\n  }\n\n}\n\nmodule.exports = PureFullPage;\n\n//# sourceURL=webpack:///../node_modules/pure-full-page/lib/pureFullPage.js?");

/***/ }),

/***/ "../node_modules/pure-full-page/lib/pureFullPage.min.css":
/*!***************************************************************!*\
  !*** ../node_modules/pure-full-page/lib/pureFullPage.min.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_cjs_js_pureFullPage_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./pureFullPage.min.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/pure-full-page/lib/pureFullPage.min.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_pureFullPage_min_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_css_loader_dist_cjs_js_pureFullPage_min_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///../node_modules/pure-full-page/lib/pureFullPage.min.css?");

/***/ }),

/***/ "../node_modules/pure-full-page/lib/utils.js":
/*!***************************************************!*\
  !*** ../node_modules/pure-full-page/lib/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * utils 为工具函数，对原生API做兼容性处理及提取公共方法\n */\nconst utils = {\n  // 鼠标滚轮事件\n  getWheelDelta(event) {\n    if (event.wheelDelta) {\n      // 第一次调用之后惰性载入\n      this.getWheelDelta = event => event.wheelDelta; // 第一次调用使用\n\n\n      return event.wheelDelta;\n    } // 兼容火狐\n\n\n    this.getWheelDelta = event => -event.detail;\n\n    return -event.detail;\n  },\n\n  // 防抖动函数，method 回调函数，context 上下文，event 传入的时间，delay 延迟函数\n  debounce(method, context, event, delay) {\n    clearTimeout(method.tId);\n    method.tId = setTimeout(() => {\n      method.call(context, event);\n    }, delay);\n  },\n\n  // 截流函数，method 回调函数，context 上下文，delay 延迟函数，\n  throttle(method, context, delay) {\n    let wait = false;\n    return function (...args) {\n      if (!wait) {\n        method.apply(context, args);\n        wait = true;\n        setTimeout(() => {\n          wait = false;\n        }, delay);\n      }\n    };\n  },\n\n  // 删除 类名\n  deleteClassName(el, className) {\n    if (el.classList.contains(className)) {\n      el.classList.remove(className);\n    }\n  },\n\n  // polyfill Object.assign\n  polyfill() {\n    if (typeof Object.assign !== 'function') {\n      Object.defineProperty(Object, 'assign', {\n        value: function assign(target) {\n          if (target == null) {\n            throw new TypeError('Cannot convert undefined or null to object');\n          }\n\n          const to = Object(target);\n\n          for (let index = 1; index < arguments.length; index++) {\n            const nextSource = arguments[index];\n\n            if (nextSource != null) {\n              for (const nextKey in nextSource) {\n                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {\n                  to[nextKey] = nextSource[nextKey];\n                }\n              }\n            }\n          }\n\n          return to;\n        },\n        writable: true,\n        configurable: true\n      });\n    }\n  }\n\n};\nmodule.exports = utils;\n\n//# sourceURL=webpack:///../node_modules/pure-full-page/lib/utils.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./3dview/scene.js":
/*!*************************!*\
  !*** ./3dview/scene.js ***!
  \*************************/
/*! exports provided: init, changeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeModel\", function() { return changeModel; });\n// 3d视图\nlet [container, stats] = [document.createElement('div'), new Stats()];\nlet camera,\n    scene,\n    renderer,\n    particles,\n    geometry,\n    material,\n    glist = new Array(6); // glist 点阵数组\n\nlet around, aroundMaterial, aroundPoints; // 环境点组\n\ncontainer.id = 'view'; //添加状态监控面板\n\ncontainer.appendChild(stats.dom);\nfunction init() {\n  document.body.appendChild(container); // 初始化相机\n  // camera = new THREE.PerspectiveCamera(75); // isMobile ? 100 : 75\n\n  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 10000);\n  camera.position.z = 750; // 初始化场景\n\n  scene = new THREE.Scene(); //雾化\n\n  scene.fog = new THREE.FogExp2(0x05050c, 0.0005); //初始化renderer\n\n  renderer = new THREE.WebGLRenderer();\n  renderer.setPixelRatio(window.devicePixelRatio);\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  container.appendChild(renderer.domElement); // 初始化geometry\n\n  geometry = new THREE.Geometry();\n  around = new THREE.Geometry(); // 初始化贴图\n\n  const textureLoader = new THREE.TextureLoader(); //解决跨域问题\n\n  textureLoader.crossOrigin = ''; // 圆点\n\n  const mapDot = textureLoader.load('/assets/gradient.png'); //初始变换点组\n\n  for (let i = 0; i < 15000; i++) {\n    const vertex = new THREE.Vector3();\n    vertex.x = 800 * Math.random() - 400;\n    vertex.y = 800 * Math.random() - 400;\n    vertex.z = 800 * Math.random() - 400;\n    geometry.vertices.push(vertex);\n    geometry.colors.push(new THREE.Color(255, 255, 255));\n  }\n\n  material = new THREE.PointsMaterial({\n    size: 4,\n    sizeAttenuation: true,\n    color: 0xffffff,\n    transparent: true,\n    opacity: 1,\n    map: mapDot\n  });\n  material.vertexColors = THREE.VertexColors;\n  particles = new THREE.Points(geometry, material);\n  scene.add(particles);\n  aroundMaterial = new THREE.PointsMaterial({\n    size: 1,\n    sizeAttenuation: true,\n    color: 0xffffff,\n    transparent: true,\n    opacity: 1,\n    map: mapDot\n  });\n  aroundMaterial.vertexColors = THREE.VertexColors;\n  aroundPoints = new THREE.Points(around, aroundMaterial);\n  scene.add(aroundPoints); // 加载模型\n\n  loadObject();\n  window.addEventListener('resize', onWindowResize, false);\n  animate();\n}\n\nfunction loadObject() {\n  const loader = new THREE.LegacyJSONLoader();\n  loader.load('assets/1game.json', function (geo, materials) {\n    geo.center();\n    geo.normalize();\n    geo.scale(600, 600, 600);\n    geo.rotateX(Math.PI / 3); // 上下\n\n    geo.rotateY(-Math.PI / 6); // 左右\n\n    geo.rotateZ(-Math.PI / 6);\n    geo.translate(-200, 100, 0);\n    window.geo = geo;\n    glist[0] = geo;\n  });\n  loader.load('assets/2ac.json', function (geo, materials) {\n    geo.center();\n    geo.normalize();\n    geo.scale(600, 600, 600);\n    glist[1] = geo;\n  });\n  loader.load('assets/3book.json', function (geo, materials) {\n    geo.center();\n    geo.normalize();\n    geo.scale(600, 600, 600);\n    glist[2] = geo;\n  });\n  loader.load('assets/4movice.json', function (geo, materials) {\n    geo.center();\n    geo.normalize();\n    geo.scale(800, 800, 800);\n    geo.rotateX(Math.PI / 2);\n    glist[3] = geo;\n  });\n  loader.load('assets/5kv.json', function (geo, materials) {\n    geo.center();\n    geo.normalize();\n    geo.scale(800, 800, 800);\n    geo.translate(0, -300, 0);\n    glist[4] = geo;\n  });\n  loader.load('assets/qr.json', function (geo, materials) {\n    geo.center();\n    geo.normalize();\n    geo.scale(800, 800, 800);\n    glist[5] = geo;\n  });\n}\n\nfunction changeModel(index) {\n  geometry.vertices.forEach(function (vtx, i) {\n    if (!vtx.tweenvtx) {\n      vtx.tweenvtx = new TWEEN.Tween(vtx);\n    }\n\n    const length = glist[index].vertices.length;\n    const o = glist[index].vertices[i % length];\n    vtx.tweenvtx.to({\n      x: o.x,\n      y: o.y,\n      z: o.z\n    }, 1000).easing(TWEEN.Easing.Exponential.In).delay(400 * Math.random()).start();\n  });\n}\n\nfunction onWindowResize() {\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n}\n\nfunction animate(time) {\n  requestAnimationFrame(animate);\n  render();\n  stats.update();\n}\n\nfunction render() {\n  around.rotateX(Math.PI / 1000);\n  TWEEN.update();\n  camera.lookAt(scene.position);\n  geometry.verticesNeedUpdate = true;\n  geometry.colorsNeedUpdate = true;\n  renderer.render(scene, camera);\n}\n\n//# sourceURL=webpack:///./3dview/scene.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"../node_modules/css-loader/dist/cjs.js!./index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pure_full_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pure-full-page */ \"../node_modules/pure-full-page/lib/pureFullPage.js\");\n/* harmony import */ var pure_full_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pure_full_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pure_full_page_lib_pureFullPage_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-full-page/lib/pureFullPage.min.css */ \"../node_modules/pure-full-page/lib/pureFullPage.min.css\");\n/* harmony import */ var _3dview_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3dview/scene */ \"./3dview/scene.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n\n\n\n // 初始化容器\n\nObject(_3dview_scene__WEBPACK_IMPORTED_MODULE_2__[\"init\"])();\nnew pure_full_page__WEBPACK_IMPORTED_MODULE_0___default.a({\n  definePages() {\n    const index = Math.abs(this.currentPosition / this.viewHeight);\n    Object(_3dview_scene__WEBPACK_IMPORTED_MODULE_2__[\"changeModel\"])(index);\n  }\n\n}).init();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });