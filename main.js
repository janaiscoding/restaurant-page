/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/fonts/logo-font.ttf */ "./src/fonts/logo-font.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/fonts/accent-font.ttf */ "./src/fonts/accent-font.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header-img.jpg */ "./src/img/header-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/home-img.jpg */ "./src/img/home-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/menu-img.jpg */ "./src/img/menu-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/contact-img.jpg */ "./src/img/contact-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Fonts: */\n@font-face {\n    font-family: \"logo-font\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n    style: normal;\n    weight: 400;\n    stretch: 100;\n  }\n  @font-face {\n    font-family: \"accent-font\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n    style: normal;\n    weight: 400;\n    stretch: 100;\n  }\n  \n  * {\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n    /* Variables: */\n    --accent-orange: #e76302;\n    --accent-white: #e0cbac;\n    --accent-brown: #73a735;\n    --logo-font: \"logo-font\", monospace;\n    --main-font: \"Lucidia Sans\", sans-serif;\n    --accent-font: \"accent-font\";\n  }\n  \n  header {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: flex-end;\n    width: 100vw;\n    height: 25vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0rem;\n    font-family: var(--logo-font);\n    font-size: clamp(50px, 6vw, 7vw);\n    color: var(--accent-orange);\n    font-weight: bolder;\n    font-style: italic;\n    text-shadow: 2px 5px var(--accent-green);\n  }\n  \n  nav {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: flex-end;\n    justify-content: space-evenly;\n    height: 50%;\n    width: clamp(412px, 60vw, 60vw);\n    font-family: var(--logo-font);\n  }\n  \n  h1 {\n    font-size: clamp(1rem, 4vw, 2.5rem);\n    padding: 20px;\n    font-family: var(--logo-font);\n    text-align: center;\n  }\n  \n  h2,\n  h3 {\n    text-align: left;\n    font-family: var(--accent-font);\n    font-size: clamp(2rem, 5vw, 4rem);\n  }\n  #contact-h2 {\n    display: flex;\n    flex-flow: column nowrap;\n  }\n  \n  h3 {\n    font-size: clamp(1.5rem, 4vw, 3rem);\n  }\n  \n  img {\n    border-radius: 10px;\n  }\n  \n  p {\n    width: 50vw;\n    text-align: center;\n    font-size: clamp(1rem, 2.5vw, 1.5rem);\n    font-family: var(--main-font);\n    padding: 20px 10vw;\n  }\n  #contact-about-p {\n    padding: 0;\n    text-align: left;\n    width: inherit;\n    font-size: clamp(0.5rem, 2vw, 1rem);\n  }\n  \n  ul {\n    font-family: var(--main-font);\n    font-size: clamp(0.5rem, 2vw, 1rem);\n    padding: 10px 0;\n  }\n  \n  button {\n    padding: clamp(5px, 1vw, 10vw);\n    margin-bottom: 8px;\n    border: none;\n    border-radius: 5px;\n    background-color: var(--accent-orange);\n    font-size: clamp(15px, 1.5rem, 2rem);\n    font-family: var(--logo-font);\n  }\n  \n  button:hover {\n    cursor: pointer;\n  }\n  \n  button:active {\n    background-color: var(--accent-white);\n  }\n  \n  /* ~~~~~~~~~~TABS~~~~~~~~~~ */\n  .content {\n    display: flex;\n    flex-flow: column nowrap;\n    background-color: lavender;\n    height: 100vh;\n  }\n  \n  .tab {\n    margin: 0 auto;\n  }\n  #home-tab {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .tab-img {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    width: 40vw;\n    text-align: center;\n    padding: 10px;\n    border-radius: 10px;\n    width: clamp(150px, 100%, 30vw);\n  }\n  #home-img {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    width: clamp(300px, 100%, 30vw);\n  }\n  #menu-img {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    width: clamp(250px, 100%, 30vw);\n  }\n  #contact-img {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  }\n  \n  .container-div {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: space-evenly;\n    width: clamp(412px, 60vw, 60vw);\n  }\n  #contact-container {\n    justify-content: center;\n  }\n  \n  .div-child {\n    align-self: flex-start;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    justify-content: space-between;\n    padding: 0px 20px 0px 20px;\n    box-sizing: border-box;\n  }\n  #contact-child {\n    width: 45%;\n    padding: 0 10px;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,WAAW;AACX;IACI,wBAAwB;IACxB,+DAAuD;IACvD,aAAa;IACb,WAAW;IACX,YAAY;EACd;EACA;IACE,0BAA0B;IAC1B,+DAAyD;IACzD,aAAa;IACb,WAAW;IACX,YAAY;EACd;;EAEA;IACE,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,wBAAwB;IACxB,uBAAuB;IACvB,uBAAuB;IACvB,mCAAmC;IACnC,uCAAuC;IACvC,4BAA4B;EAC9B;;EAEA;IACE,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,yDAA6C;IAC7C,qBAAqB;IACrB,4BAA4B;IAC5B,yBAAyB;IACzB,6BAA6B;IAC7B,gCAAgC;IAChC,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,wCAAwC;EAC1C;;EAEA;IACE,aAAa;IACb,qBAAqB;IACrB,qBAAqB;IACrB,6BAA6B;IAC7B,WAAW;IACX,+BAA+B;IAC/B,6BAA6B;EAC/B;;EAEA;IACE,mCAAmC;IACnC,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;EACpB;;EAEA;;IAEE,gBAAgB;IAChB,+BAA+B;IAC/B,iCAAiC;EACnC;EACA;IACE,aAAa;IACb,wBAAwB;EAC1B;;EAEA;IACE,mCAAmC;EACrC;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,qCAAqC;IACrC,6BAA6B;IAC7B,kBAAkB;EACpB;EACA;IACE,UAAU;IACV,gBAAgB;IAChB,cAAc;IACd,mCAAmC;EACrC;;EAEA;IACE,6BAA6B;IAC7B,mCAAmC;IACnC,eAAe;EACjB;;EAEA;IACE,8BAA8B;IAC9B,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,sCAAsC;IACtC,oCAAoC;IACpC,6BAA6B;EAC/B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,qCAAqC;EACvC;;EAEA,6BAA6B;EAC7B;IACE,aAAa;IACb,wBAAwB;IACxB,0BAA0B;IAC1B,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;EACA;IACE,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,+BAA+B;EACjC;EACA;IACE,gDAAkC;IAClC,+BAA+B;EACjC;EACA;IACE,gDAAkC;IAClC,+BAA+B;EACjC;EACA;IACE,gDAAqC;EACvC;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;IAC7B,+BAA+B;EACjC;EACA;IACE,uBAAuB;EACzB;;EAEA;IACE,sBAAsB;IACtB,aAAa;IACb,wBAAwB;IACxB,uBAAuB;IACvB,8BAA8B;IAC9B,0BAA0B;IAC1B,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,eAAe;EACjB","sourcesContent":["/* Fonts: */\n@font-face {\n    font-family: \"logo-font\";\n    src: url(\"/src/fonts/logo-font.ttf\") format(\"truetype\");\n    style: normal;\n    weight: 400;\n    stretch: 100;\n  }\n  @font-face {\n    font-family: \"accent-font\";\n    src: url(\"/src/fonts/accent-font.ttf\") format(\"truetype\");\n    style: normal;\n    weight: 400;\n    stretch: 100;\n  }\n  \n  * {\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n    /* Variables: */\n    --accent-orange: #e76302;\n    --accent-white: #e0cbac;\n    --accent-brown: #73a735;\n    --logo-font: \"logo-font\", monospace;\n    --main-font: \"Lucidia Sans\", sans-serif;\n    --accent-font: \"accent-font\";\n  }\n  \n  header {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: flex-end;\n    width: 100vw;\n    height: 25vh;\n    background-image: url(\"./img/header-img.jpg\");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0rem;\n    font-family: var(--logo-font);\n    font-size: clamp(50px, 6vw, 7vw);\n    color: var(--accent-orange);\n    font-weight: bolder;\n    font-style: italic;\n    text-shadow: 2px 5px var(--accent-green);\n  }\n  \n  nav {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: flex-end;\n    justify-content: space-evenly;\n    height: 50%;\n    width: clamp(412px, 60vw, 60vw);\n    font-family: var(--logo-font);\n  }\n  \n  h1 {\n    font-size: clamp(1rem, 4vw, 2.5rem);\n    padding: 20px;\n    font-family: var(--logo-font);\n    text-align: center;\n  }\n  \n  h2,\n  h3 {\n    text-align: left;\n    font-family: var(--accent-font);\n    font-size: clamp(2rem, 5vw, 4rem);\n  }\n  #contact-h2 {\n    display: flex;\n    flex-flow: column nowrap;\n  }\n  \n  h3 {\n    font-size: clamp(1.5rem, 4vw, 3rem);\n  }\n  \n  img {\n    border-radius: 10px;\n  }\n  \n  p {\n    width: 50vw;\n    text-align: center;\n    font-size: clamp(1rem, 2.5vw, 1.5rem);\n    font-family: var(--main-font);\n    padding: 20px 10vw;\n  }\n  #contact-about-p {\n    padding: 0;\n    text-align: left;\n    width: inherit;\n    font-size: clamp(0.5rem, 2vw, 1rem);\n  }\n  \n  ul {\n    font-family: var(--main-font);\n    font-size: clamp(0.5rem, 2vw, 1rem);\n    padding: 10px 0;\n  }\n  \n  button {\n    padding: clamp(5px, 1vw, 10vw);\n    margin-bottom: 8px;\n    border: none;\n    border-radius: 5px;\n    background-color: var(--accent-orange);\n    font-size: clamp(15px, 1.5rem, 2rem);\n    font-family: var(--logo-font);\n  }\n  \n  button:hover {\n    cursor: pointer;\n  }\n  \n  button:active {\n    background-color: var(--accent-white);\n  }\n  \n  /* ~~~~~~~~~~TABS~~~~~~~~~~ */\n  .content {\n    display: flex;\n    flex-flow: column nowrap;\n    background-color: lavender;\n    height: 100vh;\n  }\n  \n  .tab {\n    margin: 0 auto;\n  }\n  #home-tab {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .tab-img {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    width: 40vw;\n    text-align: center;\n    padding: 10px;\n    border-radius: 10px;\n    width: clamp(150px, 100%, 30vw);\n  }\n  #home-img {\n    content: url('./img/home-img.jpg');\n    width: clamp(300px, 100%, 30vw);\n  }\n  #menu-img {\n    content: url('./img/menu-img.jpg');\n    width: clamp(250px, 100%, 30vw);\n  }\n  #contact-img {\n    content: url('./img/contact-img.jpg');\n  }\n  \n  .container-div {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: space-evenly;\n    width: clamp(412px, 60vw, 60vw);\n  }\n  #contact-container {\n    justify-content: center;\n  }\n  \n  .div-child {\n    align-self: flex-start;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    justify-content: space-between;\n    padding: 0px 20px 0px 20px;\n    box-sizing: border-box;\n  }\n  #contact-child {\n    width: 45%;\n    padding: 0 10px;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/elementClass.js":
/*!*****************************!*\
  !*** ./src/elementClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Element)
/* harmony export */ });
class Element {
    constructor(elementType) {
      this.elementType = elementType;
      this.attributes = {};
      this.children = [];
    }
  
    addAttributes(attributes) {
      for (const k of Object.keys(attributes)) {
        this.attributes[k] = attributes[k];
      }
      return this;
    }
  
    addChild(childElement) {
      this.innerText = undefined;
      this.children.push(childElement);
  
      return this;
    }
  
    setInnerText(string) {
      this.childen = [];
      this.innerText = string;
  
      return this;
    }
  
    build() {
      let DOMelement = document.createElement(this.elementType);
  
      // Attributes
      for (const k of Object.keys(this.attributes)) {
        DOMelement.setAttribute(k, this.attributes[k]);
      }
  
      // Children
      if (this.innerText === undefined) {
        for (const child of this.children) {
          DOMelement.appendChild(child.build());
        }
      } else {
        let DOMinnerText = document.createTextNode(this.innerText);
        DOMelement.appendChild(DOMinnerText);
      }
      return DOMelement;
    }
  }

/***/ }),

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHTML)
/* harmony export */ });
const HTMLbody = document.querySelector("body");

function loadHTML() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  header.textContent = "Sooshi Restaurant";

  const homeButton = document.createElement("button");
  homeButton.classList.add("home-button");
  homeButton.innerText = "Home";

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-button");
  menuButton.innerText = "Menu";

  const contactButton = document.createElement("button");
  contactButton.classList.add("contact-button");
  contactButton.innerText = "Contact";

  nav.append(homeButton, menuButton, contactButton);

  HTMLbody.insertAdjacentElement("afterbegin", header);
  header.append(nav);
}

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementClass */ "./src/elementClass.js");


const content = document.querySelector("#content");

function loadContact() {
    const contactElement = new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
      .addAttributes({ id: "contact-tab", class: "tab" })

      .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setInnerText("Contact Us"))

      .addChild(
        new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
          .addAttributes({
            class: "container-div",
            id: "contact-container",
          })

          .addChild(
            new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
              .addAttributes({
                class: "div-child",
                id: "contact-child",
              })
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Order delicious sooshi from us")
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("ul").addChild(
                  new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("p")
                    .addAttributes({ id: "contact-about-p" })
                    .setInnerText(
                      "In only a few minutes, one of our riders will deliver you sushi to enjoy wherever you are."
                    )
                )
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Our Hours")
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText("We are open 24 hours!")
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Phone")
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText("123-456-789")
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Email")
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText("sooshi@sooshi.com")
              )
          )
          .addChild(
            new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
              .addAttributes({
                class: "div-child",
                id: "contact-child",
              })
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("img").addAttributes({
                  class: "tab-img",
                  id: "contact-img",
                })
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h3")
                  .addAttributes({ id: "contact-h2" })
                  .setInnerText("Location")
              )
              .addChild(
                new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText("We are.... nearby.")
              )
          )
      );
    content.appendChild(contactElement.build());
  }

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementClass */ "./src/elementClass.js");


const content = document.querySelector(".content");

function loadHome() {
    const homeElement = new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
      .addAttributes({ id: "home-tab", class: "tab" })

      .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setInnerText("Enjoy the best Sushi in Town!"))

      .addChild(
        new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("img").addAttributes({ class: "tab-img", id: "home-img" })
      )

      .addChild(
        new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("p")
          .addAttributes({ class: "blurb" })
          .setInnerText(
            "Did you know? Sushi is not originally Japanese, but it is a Japanese dish that has become popular around the world."
          )
      )

      .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h2").setInnerText("Authentic Wasabi Is Expensive"))

      .addChild(
        new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("p").setInnerText(
          "Yes, authentic wasabi can be expensive. The root of the wasabi plant is grated to create the paste, and because the plant is difficult to cultivate, the price of the real stuff can be high and it is hard to find.  You may be served fake wasabi without knowing."
        )
      );
  
    content.appendChild(homeElement.build());
  }
  

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementClass */ "./src/elementClass.js");


const content = document.querySelector(".content");

function loadMenu() {
  const menuElement = new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
    .addAttributes({ id: "menu-tab", class: "tab" })

    .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setInnerText("Our Daily Menu"))

    .addChild(
      new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
        .addAttributes({ class: "container-div", id: "menu-container" })

        .addChild(
          new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("img").addAttributes({
            class: "div-child",
            id: "menu-img",
          })
        )

        .addChild(
          new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
            .addAttributes({ class: "div-child", id: "menu-child" })
            
            .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h2").setInnerText("Fancy Sooshi"))
            .addChild(
              new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("ul")
                .addAttributes({ class: "menu-list", id: "sushi-list" })
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Philadelphia classic"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Fusion"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Tempura"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Golden Dragon Roll"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Maguro Dragon Roll"))
                .addChild(
                  new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Green Dragon Roll")
                )
            )

            .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h2").setInnerText("Drinks"))
            .addChild(
              new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("ul")
                .addAttributes({ class: "menu-list", id: "drinks-list" })
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Mugi Shochu"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Lemon Sour"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Oolong Hai"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Whiskey Highball"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Umeshu"))
                .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("li").setInnerText("Atsukan"))
            )
        )
    );

  content.appendChild(menuElement.build());
}

/***/ }),

/***/ "./src/fonts/accent-font.ttf":
/*!***********************************!*\
  !*** ./src/fonts/accent-font.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48aaef083d682d8f28e1.ttf";

/***/ }),

/***/ "./src/fonts/logo-font.ttf":
/*!*********************************!*\
  !*** ./src/fonts/logo-font.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e499645cd70dd9f19c67.ttf";

/***/ }),

/***/ "./src/img/contact-img.jpg":
/*!*********************************!*\
  !*** ./src/img/contact-img.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "623fbbf026d9360738e1.jpg";

/***/ }),

/***/ "./src/img/header-img.jpg":
/*!********************************!*\
  !*** ./src/img/header-img.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "218cfdedaeeb89b7bc44.jpg";

/***/ }),

/***/ "./src/img/home-img.jpg":
/*!******************************!*\
  !*** ./src/img/home-img.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99795e34140657f0d948.jpg";

/***/ }),

/***/ "./src/img/menu-img.jpg":
/*!******************************!*\
  !*** ./src/img/menu-img.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef58213db1e8801a8247.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage */ "./src/loadpage.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_loadpage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

// home tab
const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", () => {
  clearContentBox();
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

// menu tab
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  clearContentBox();
  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

// contact tab
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", () => {
  clearContentBox();
  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

function clearContentBox() {
  const contentBox = document.querySelector(".content");
  contentBox.replaceChildren();
  return;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ0U7QUFDQTtBQUNNO0FBQ3JCOztBQUVyQixxREFBUTtBQUNSLHVEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbGVtZW50Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2xvZ28tZm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2FjY2VudC1mb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2hlYWRlci1pbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvaG9tZS1pbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS1pbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWcvY29udGFjdC1pbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb250czogKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJsb2dvLWZvbnRcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBzdHlsZTogbm9ybWFsO1xcbiAgICB3ZWlnaHQ6IDQwMDtcXG4gICAgc3RyZXRjaDogMTAwO1xcbiAgfVxcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYWNjZW50LWZvbnRcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBzdHlsZTogbm9ybWFsO1xcbiAgICB3ZWlnaHQ6IDQwMDtcXG4gICAgc3RyZXRjaDogMTAwO1xcbiAgfVxcbiAgXFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICBib2R5IHtcXG4gICAgLyogVmFyaWFibGVzOiAqL1xcbiAgICAtLWFjY2VudC1vcmFuZ2U6ICNlNzYzMDI7XFxuICAgIC0tYWNjZW50LXdoaXRlOiAjZTBjYmFjO1xcbiAgICAtLWFjY2VudC1icm93bjogIzczYTczNTtcXG4gICAgLS1sb2dvLWZvbnQ6IFxcXCJsb2dvLWZvbnRcXFwiLCBtb25vc3BhY2U7XFxuICAgIC0tbWFpbi1mb250OiBcXFwiTHVjaWRpYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1hY2NlbnQtZm9udDogXFxcImFjY2VudC1mb250XFxcIjtcXG4gIH1cXG4gIFxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMjV2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg1MHB4LCA2dncsIDd2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtb3JhbmdlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDVweCB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbiAgfVxcbiAgXFxuICBuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogY2xhbXAoNDEycHgsIDYwdncsIDYwdncpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcXG4gIH1cXG4gIFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMi41cmVtKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgaDIsXFxuICBoMyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1hY2NlbnQtZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCA0cmVtKTtcXG4gIH1cXG4gICNjb250YWN0LWgyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgfVxcbiAgXFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCA0dncsIDNyZW0pO1xcbiAgfVxcbiAgXFxuICBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcbiAgXFxuICBwIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgMS41cmVtKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIHBhZGRpbmc6IDIwcHggMTB2dztcXG4gIH1cXG4gICNjb250YWN0LWFib3V0LXAge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDJ2dywgMXJlbSk7XFxuICB9XFxuICBcXG4gIHVsIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC41cmVtLCAydncsIDFyZW0pO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICB9XFxuICBcXG4gIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IGNsYW1wKDVweCwgMXZ3LCAxMHZ3KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LW9yYW5nZSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTVweCwgMS41cmVtLCAycmVtKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxuICB9XFxuICBcXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC13aGl0ZSk7XFxuICB9XFxuICBcXG4gIC8qIH5+fn5+fn5+fn5UQUJTfn5+fn5+fn5+fiAqL1xcbiAgLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbiAgXFxuICAudGFiIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICAjaG9tZS10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAudGFiLWltZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwgMTAwJSwgMzB2dyk7XFxuICB9XFxuICAjaG9tZS1pbWcge1xcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDEwMCUsIDMwdncpO1xcbiAgfVxcbiAgI21lbnUtaW1nIHtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgd2lkdGg6IGNsYW1wKDI1MHB4LCAxMDAlLCAzMHZ3KTtcXG4gIH1cXG4gICNjb250YWN0LWltZyB7XFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICB9XFxuICBcXG4gIC5jb250YWluZXItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiBjbGFtcCg0MTJweCwgNjB2dywgNjB2dyk7XFxuICB9XFxuICAjY29udGFjdC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmRpdi1jaGlsZCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAjY29udGFjdC1jaGlsZCB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDtJQUNJLHdCQUF3QjtJQUN4QiwrREFBdUQ7SUFDdkQsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiwrREFBeUQ7SUFDekQsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1oseURBQTZDO0lBQzdDLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQSw2QkFBNkI7RUFDN0I7SUFDRSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsZ0RBQWtDO0lBQ2xDLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsZ0RBQWtDO0lBQ2xDLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsZ0RBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGb250czogKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJsb2dvLWZvbnRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9sb2dvLWZvbnQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBzdHlsZTogbm9ybWFsO1xcbiAgICB3ZWlnaHQ6IDQwMDtcXG4gICAgc3RyZXRjaDogMTAwO1xcbiAgfVxcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYWNjZW50LWZvbnRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9hY2NlbnQtZm9udC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIHN0eWxlOiBub3JtYWw7XFxuICAgIHdlaWdodDogNDAwO1xcbiAgICBzdHJldGNoOiAxMDA7XFxuICB9XFxuICBcXG4gICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICAvKiBWYXJpYWJsZXM6ICovXFxuICAgIC0tYWNjZW50LW9yYW5nZTogI2U3NjMwMjtcXG4gICAgLS1hY2NlbnQtd2hpdGU6ICNlMGNiYWM7XFxuICAgIC0tYWNjZW50LWJyb3duOiAjNzNhNzM1O1xcbiAgICAtLWxvZ28tZm9udDogXFxcImxvZ28tZm9udFxcXCIsIG1vbm9zcGFjZTtcXG4gICAgLS1tYWluLWZvbnQ6IFxcXCJMdWNpZGlhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWFjY2VudC1mb250OiBcXFwiYWNjZW50LWZvbnRcXFwiO1xcbiAgfVxcbiAgXFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAyNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1nL2hlYWRlci1pbWcuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgNnZ3LCA3dncpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LW9yYW5nZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgdGV4dC1zaGFkb3c6IDJweCA1cHggdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gIH1cXG4gIFxcbiAgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IGNsYW1wKDQxMnB4LCA2MHZ3LCA2MHZ3KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxuICB9XFxuICBcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA0dncsIDIuNXJlbSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1sb2dvLWZvbnQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIGgyLFxcbiAgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tYWNjZW50LWZvbnQpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgNHJlbSk7XFxuICB9XFxuICAjY29udGFjdC1oMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIH1cXG4gIFxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgNHZ3LCAzcmVtKTtcXG4gIH1cXG4gIFxcbiAgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gIFxcbiAgcCB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi41dncsIDEuNXJlbSk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwdnc7XFxuICB9XFxuICAjY29udGFjdC1hYm91dC1wIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC41cmVtLCAydncsIDFyZW0pO1xcbiAgfVxcbiAgXFxuICB1bCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgMnZ3LCAxcmVtKTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgfVxcbiAgXFxuICBidXR0b24ge1xcbiAgICBwYWRkaW5nOiBjbGFtcCg1cHgsIDF2dywgMTB2dyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1vcmFuZ2UpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDE1cHgsIDEuNXJlbSwgMnJlbSk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1sb2dvLWZvbnQpO1xcbiAgfVxcbiAgXFxuICBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtd2hpdGUpO1xcbiAgfVxcbiAgXFxuICAvKiB+fn5+fn5+fn5+VEFCU35+fn5+fn5+fn4gKi9cXG4gIC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG4gIFxcbiAgLnRhYiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbiAgI2hvbWUtdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnRhYi1pbWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogY2xhbXAoMTUwcHgsIDEwMCUsIDMwdncpO1xcbiAgfVxcbiAgI2hvbWUtaW1nIHtcXG4gICAgY29udGVudDogdXJsKCcuL2ltZy9ob21lLWltZy5qcGcnKTtcXG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCAxMDAlLCAzMHZ3KTtcXG4gIH1cXG4gICNtZW51LWltZyB7XFxuICAgIGNvbnRlbnQ6IHVybCgnLi9pbWcvbWVudS1pbWcuanBnJyk7XFxuICAgIHdpZHRoOiBjbGFtcCgyNTBweCwgMTAwJSwgMzB2dyk7XFxuICB9XFxuICAjY29udGFjdC1pbWcge1xcbiAgICBjb250ZW50OiB1cmwoJy4vaW1nL2NvbnRhY3QtaW1nLmpwZycpO1xcbiAgfVxcbiAgXFxuICAuY29udGFpbmVyLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogY2xhbXAoNDEycHgsIDYwdncsIDYwdncpO1xcbiAgfVxcbiAgI2NvbnRhY3QtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5kaXYtY2hpbGQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgI2NvbnRhY3QtY2hpbGQge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRUeXBlKSB7XG4gICAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGU7XG4gICAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG4gIFxuICAgIGFkZEF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1trXSA9IGF0dHJpYnV0ZXNba107XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIFxuICAgIGFkZENoaWxkKGNoaWxkRWxlbWVudCkge1xuICAgICAgdGhpcy5pbm5lclRleHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGRFbGVtZW50KTtcbiAgXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIFxuICAgIHNldElubmVyVGV4dChzdHJpbmcpIHtcbiAgICAgIHRoaXMuY2hpbGRlbiA9IFtdO1xuICAgICAgdGhpcy5pbm5lclRleHQgPSBzdHJpbmc7XG4gIFxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICBcbiAgICBidWlsZCgpIHtcbiAgICAgIGxldCBET01lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRUeXBlKTtcbiAgXG4gICAgICAvLyBBdHRyaWJ1dGVzXG4gICAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy5hdHRyaWJ1dGVzKSkge1xuICAgICAgICBET01lbGVtZW50LnNldEF0dHJpYnV0ZShrLCB0aGlzLmF0dHJpYnV0ZXNba10pO1xuICAgICAgfVxuICBcbiAgICAgIC8vIENoaWxkcmVuXG4gICAgICBpZiAodGhpcy5pbm5lclRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICBET01lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLmJ1aWxkKCkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgRE9NaW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5pbm5lclRleHQpO1xuICAgICAgICBET01lbGVtZW50LmFwcGVuZENoaWxkKERPTWlubmVyVGV4dCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gRE9NZWxlbWVudDtcbiAgICB9XG4gIH0iLCJjb25zdCBIVE1MYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSFRNTCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTb29zaGkgUmVzdGF1cmFudFwiO1xuXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJob21lLWJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi5pbm5lclRleHQgPSBcIkhvbWVcIjtcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIik7XG4gIG1lbnVCdXR0b24uaW5uZXJUZXh0ID0gXCJNZW51XCI7XG5cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuXG4gIG5hdi5hcHBlbmQoaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgY29udGFjdEJ1dHRvbik7XG5cbiAgSFRNTGJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kKG5hdik7XG59IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRDbGFzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0RWxlbWVudCA9IG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gICAgICAuYWRkQXR0cmlidXRlcyh7IGlkOiBcImNvbnRhY3QtdGFiXCIsIGNsYXNzOiBcInRhYlwiIH0pXG5cbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgxXCIpLnNldElubmVyVGV4dChcIkNvbnRhY3QgVXNcIikpXG5cbiAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgbmV3IEVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAuYWRkQXR0cmlidXRlcyh7XG4gICAgICAgICAgICBjbGFzczogXCJjb250YWluZXItZGl2XCIsXG4gICAgICAgICAgICBpZDogXCJjb250YWN0LWNvbnRhaW5lclwiLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICBuZXcgRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAuYWRkQXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiZGl2LWNoaWxkXCIsXG4gICAgICAgICAgICAgICAgaWQ6IFwiY29udGFjdC1jaGlsZFwiLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoXCJoM1wiKVxuICAgICAgICAgICAgICAgICAgLmFkZEF0dHJpYnV0ZXMoeyBpZDogXCJjb250YWN0LWgyXCIgfSlcbiAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoXCJPcmRlciBkZWxpY2lvdXMgc29vc2hpIGZyb20gdXNcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoXCJ1bFwiKS5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQXR0cmlidXRlcyh7IGlkOiBcImNvbnRhY3QtYWJvdXQtcFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbiBvbmx5IGEgZmV3IG1pbnV0ZXMsIG9uZSBvZiBvdXIgcmlkZXJzIHdpbGwgZGVsaXZlciB5b3Ugc3VzaGkgdG8gZW5qb3kgd2hlcmV2ZXIgeW91IGFyZS5cIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICAgICAgICAuYWRkQXR0cmlidXRlcyh7IGlkOiBcImNvbnRhY3QtaDJcIiB9KVxuICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dChcIk91ciBIb3Vyc1wiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudChcInBcIilcbiAgICAgICAgICAgICAgICAgIC5hZGRBdHRyaWJ1dGVzKHsgaWQ6IFwiY29udGFjdC1hYm91dC1wXCIgfSlcbiAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoXCJXZSBhcmUgb3BlbiAyNCBob3VycyFcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoXCJoM1wiKVxuICAgICAgICAgICAgICAgICAgLmFkZEF0dHJpYnV0ZXMoeyBpZDogXCJjb250YWN0LWgyXCIgfSlcbiAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoXCJQaG9uZVwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudChcInBcIilcbiAgICAgICAgICAgICAgICAgIC5hZGRBdHRyaWJ1dGVzKHsgaWQ6IFwiY29udGFjdC1hYm91dC1wXCIgfSlcbiAgICAgICAgICAgICAgICAgIC5zZXRJbm5lclRleHQoXCIxMjMtNDU2LTc4OVwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICAgICAgICAuYWRkQXR0cmlidXRlcyh7IGlkOiBcImNvbnRhY3QtaDJcIiB9KVxuICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dChcIkVtYWlsXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgICAgICAgLmFkZEF0dHJpYnV0ZXMoeyBpZDogXCJjb250YWN0LWFib3V0LXBcIiB9KVxuICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dChcInNvb3NoaUBzb29zaGkuY29tXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgbmV3IEVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcImRpdi1jaGlsZFwiLFxuICAgICAgICAgICAgICAgIGlkOiBcImNvbnRhY3QtY2hpbGRcIixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KFwiaW1nXCIpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidGFiLWltZ1wiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwiY29udGFjdC1pbWdcIixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICAgICAgICAuYWRkQXR0cmlidXRlcyh7IGlkOiBcImNvbnRhY3QtaDJcIiB9KVxuICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dChcIkxvY2F0aW9uXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgICAgICAgLmFkZEF0dHJpYnV0ZXMoeyBpZDogXCJjb250YWN0LWFib3V0LXBcIiB9KVxuICAgICAgICAgICAgICAgICAgLnNldElubmVyVGV4dChcIldlIGFyZS4uLi4gbmVhcmJ5LlwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RFbGVtZW50LmJ1aWxkKCkpO1xuICB9IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRDbGFzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBob21lRWxlbWVudCA9IG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gICAgICAuYWRkQXR0cmlidXRlcyh7IGlkOiBcImhvbWUtdGFiXCIsIGNsYXNzOiBcInRhYlwiIH0pXG5cbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgxXCIpLnNldElubmVyVGV4dChcIkVuam95IHRoZSBiZXN0IFN1c2hpIGluIFRvd24hXCIpKVxuXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIG5ldyBFbGVtZW50KFwiaW1nXCIpLmFkZEF0dHJpYnV0ZXMoeyBjbGFzczogXCJ0YWItaW1nXCIsIGlkOiBcImhvbWUtaW1nXCIgfSlcbiAgICAgIClcblxuICAgICAgLmFkZENoaWxkKFxuICAgICAgICBuZXcgRWxlbWVudChcInBcIilcbiAgICAgICAgICAuYWRkQXR0cmlidXRlcyh7IGNsYXNzOiBcImJsdXJiXCIgfSlcbiAgICAgICAgICAuc2V0SW5uZXJUZXh0KFxuICAgICAgICAgICAgXCJEaWQgeW91IGtub3c/IFN1c2hpIGlzIG5vdCBvcmlnaW5hbGx5IEphcGFuZXNlLCBidXQgaXQgaXMgYSBKYXBhbmVzZSBkaXNoIHRoYXQgaGFzIGJlY29tZSBwb3B1bGFyIGFyb3VuZCB0aGUgd29ybGQuXCJcbiAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgyXCIpLnNldElubmVyVGV4dChcIkF1dGhlbnRpYyBXYXNhYmkgSXMgRXhwZW5zaXZlXCIpKVxuXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIG5ldyBFbGVtZW50KFwicFwiKS5zZXRJbm5lclRleHQoXG4gICAgICAgICAgXCJZZXMsIGF1dGhlbnRpYyB3YXNhYmkgY2FuIGJlIGV4cGVuc2l2ZS4gVGhlIHJvb3Qgb2YgdGhlIHdhc2FiaSBwbGFudCBpcyBncmF0ZWQgdG8gY3JlYXRlIHRoZSBwYXN0ZSwgYW5kIGJlY2F1c2UgdGhlIHBsYW50IGlzIGRpZmZpY3VsdCB0byBjdWx0aXZhdGUsIHRoZSBwcmljZSBvZiB0aGUgcmVhbCBzdHVmZiBjYW4gYmUgaGlnaCBhbmQgaXQgaXMgaGFyZCB0byBmaW5kLiAgWW91IG1heSBiZSBzZXJ2ZWQgZmFrZSB3YXNhYmkgd2l0aG91dCBrbm93aW5nLlwiXG4gICAgICAgIClcbiAgICAgICk7XG4gIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUVsZW1lbnQuYnVpbGQoKSk7XG4gIH1cbiAgIiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRDbGFzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgbWVudUVsZW1lbnQgPSBuZXcgRWxlbWVudChcImRpdlwiKVxuICAgIC5hZGRBdHRyaWJ1dGVzKHsgaWQ6IFwibWVudS10YWJcIiwgY2xhc3M6IFwidGFiXCIgfSlcblxuICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgxXCIpLnNldElubmVyVGV4dChcIk91ciBEYWlseSBNZW51XCIpKVxuXG4gICAgLmFkZENoaWxkKFxuICAgICAgbmV3IEVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgLmFkZEF0dHJpYnV0ZXMoeyBjbGFzczogXCJjb250YWluZXItZGl2XCIsIGlkOiBcIm1lbnUtY29udGFpbmVyXCIgfSlcblxuICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgbmV3IEVsZW1lbnQoXCJpbWdcIikuYWRkQXR0cmlidXRlcyh7XG4gICAgICAgICAgICBjbGFzczogXCJkaXYtY2hpbGRcIixcbiAgICAgICAgICAgIGlkOiBcIm1lbnUtaW1nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuXG4gICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICBuZXcgRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgLmFkZEF0dHJpYnV0ZXMoeyBjbGFzczogXCJkaXYtY2hpbGRcIiwgaWQ6IFwibWVudS1jaGlsZFwiIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgyXCIpLnNldElubmVyVGV4dChcIkZhbmN5IFNvb3NoaVwiKSlcbiAgICAgICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICAgICAgICAgIC5hZGRBdHRyaWJ1dGVzKHsgY2xhc3M6IFwibWVudS1saXN0XCIsIGlkOiBcInN1c2hpLWxpc3RcIiB9KVxuICAgICAgICAgICAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImxpXCIpLnNldElubmVyVGV4dChcIlBoaWxhZGVscGhpYSBjbGFzc2ljXCIpKVxuICAgICAgICAgICAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImxpXCIpLnNldElubmVyVGV4dChcIkZ1c2lvblwiKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJsaVwiKS5zZXRJbm5lclRleHQoXCJUZW1wdXJhXCIpKVxuICAgICAgICAgICAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImxpXCIpLnNldElubmVyVGV4dChcIkdvbGRlbiBEcmFnb24gUm9sbFwiKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJsaVwiKS5zZXRJbm5lclRleHQoXCJNYWd1cm8gRHJhZ29uIFJvbGxcIikpXG4gICAgICAgICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoXCJsaVwiKS5zZXRJbm5lclRleHQoXCJHcmVlbiBEcmFnb24gUm9sbFwiKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDJcIikuc2V0SW5uZXJUZXh0KFwiRHJpbmtzXCIpKVxuICAgICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgICBuZXcgRWxlbWVudChcInVsXCIpXG4gICAgICAgICAgICAgICAgLmFkZEF0dHJpYnV0ZXMoeyBjbGFzczogXCJtZW51LWxpc3RcIiwgaWQ6IFwiZHJpbmtzLWxpc3RcIiB9KVxuICAgICAgICAgICAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImxpXCIpLnNldElubmVyVGV4dChcIk11Z2kgU2hvY2h1XCIpKVxuICAgICAgICAgICAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImxpXCIpLnNldElubmVyVGV4dChcIkxlbW9uIFNvdXJcIikpXG4gICAgICAgICAgICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwibGlcIikuc2V0SW5uZXJUZXh0KFwiT29sb25nIEhhaVwiKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJsaVwiKS5zZXRJbm5lclRleHQoXCJXaGlza2V5IEhpZ2hiYWxsXCIpKVxuICAgICAgICAgICAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImxpXCIpLnNldElubmVyVGV4dChcIlVtZXNodVwiKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJsaVwiKS5zZXRJbm5lclRleHQoXCJBdHN1a2FuXCIpKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVFbGVtZW50LmJ1aWxkKCkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZEhUTUwgZnJvbSBcIi4vbG9hZHBhZ2VcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL3BhZ2VzL2NvbnRhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxvYWRIVE1MKCk7XG5sb2FkSG9tZSgpO1xuXG4vLyBob21lIHRhYlxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idXR0b25cIik7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyQ29udGVudEJveCgpO1xuICBsb2FkSG9tZSgpO1xufSk7XG5cbi8vIG1lbnUgdGFiXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1dHRvblwiKTtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJDb250ZW50Qm94KCk7XG4gIGxvYWRNZW51KCk7XG59KTtcblxuLy8gY29udGFjdCB0YWJcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtYnV0dG9uXCIpO1xuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGVhckNvbnRlbnRCb3goKTtcbiAgbG9hZENvbnRhY3QoKTtcbn0pO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnRCb3goKSB7XG4gIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnRCb3gucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHJldHVybjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=