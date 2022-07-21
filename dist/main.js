/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../graphics/logo.png */ "./src/graphics/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-color: #22254b;\n}\n\n.nav-logo {\n  width: 90px;\n  height: auto;\n  padding: 5px;\n  margin-top: 13px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 84px 27px;\n  background-repeat: no-repeat;\n}\n\nnav ul > li {\n  text-align: center;\n  padding: 16px;\n  text-decoration: none;\n}\n\n.info li {\n  width: 400px;\n  padding: 5px 5px;\n  font-size: 1.2em;\n  font-weight: normal;\n}\n\nnav ul {\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #373b69;\n}\n\nfooter p a {\n  text-decoration: none;\n  color: yellow;\n}\n\nnav ul li a {\n  color: #fff;\n  font-size: 1.5em;\n  font-weight: 900;\n  text-decoration: none;\n}\n\nnav ul ul > li:hover {\n  background-color: #111;\n}\n\nh1 {\n  margin: 0 auto;\n  width: 400px;\n  font-size: 2em;\n  padding-top: 15px;\n  color: #fff;\n}\n\n.movies {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 10% 5%;\n  justify-content: center;\n  margin: 1% 5%;\n}\n\n.card {\n  margin: 15px 10px;\n}\n\n.card h3 {\n  width: 220px;\n  overflow: hidden;\n  color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.btn {\n  padding: 5px 15px;\n  background-color: slateblue;\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 16px;\n  transition-duration: 1s;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: darkred;\n}\n\n.likes {\n  font-size: 1.1em;\n  color: deeppink;\n  margin-bottom: 10px;\n}\n\nfooter {\n  width: 100%;\n  height: 50px;\n  color: #fff;\n  font-size: 22px;\n  background: #373b69;\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n\n/* popup window */\n\n.popup-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  overflow: auto;\n  opacity: 99%;\n}\n\n.popup {\n  background-color: #fff;\n  padding: 2rem;\n  width: 80%;\n  height: auto;\n  margin: 5% 10%;\n}\n\n.details {\n  display: flex;\n  height: 60%;\n}\n\n.summary {\n  text-align: justify;\n  padding: 0 10px;\n  font-size: 1.1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.info {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.summary p {\n  margin-top: 1rem;\n}\n\n.popup img {\n  object-fit: contain;\n}\n\ninput {\n  padding: 14px;\n  border: none;\n  border-radius: 5px;\n  width: 30%;\n  margin: 8px;\n  outline: none;\n  background-color: bisque;\n}\n\n.comments {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  background-color: antiquewhite;\n}\n\n.close {\n  float: right;\n}\n\n.details .btn {\n  margin-right: 50px;\n  margin-top: 5px;\n  width: 150px;\n  height: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,qCAAqC;EACrC,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,yDAA6C;EAC7C,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,WAAW;EACX,OAAO;EACP,MAAM;EACN,cAAc;EACd,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,UAAU;EACV,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,YAAY;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-color: #22254b;\n}\n\n.nav-logo {\n  width: 90px;\n  height: auto;\n  padding: 5px;\n  margin-top: 13px;\n  background-image: url('../graphics/logo.png');\n  background-size: 84px 27px;\n  background-repeat: no-repeat;\n}\n\nnav ul > li {\n  text-align: center;\n  padding: 16px;\n  text-decoration: none;\n}\n\n.info li {\n  width: 400px;\n  padding: 5px 5px;\n  font-size: 1.2em;\n  font-weight: normal;\n}\n\nnav ul {\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #373b69;\n}\n\nfooter p a {\n  text-decoration: none;\n  color: yellow;\n}\n\nnav ul li a {\n  color: #fff;\n  font-size: 1.5em;\n  font-weight: 900;\n  text-decoration: none;\n}\n\nnav ul ul > li:hover {\n  background-color: #111;\n}\n\nh1 {\n  margin: 0 auto;\n  width: 400px;\n  font-size: 2em;\n  padding-top: 15px;\n  color: #fff;\n}\n\n.movies {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 10% 5%;\n  justify-content: center;\n  margin: 1% 5%;\n}\n\n.card {\n  margin: 15px 10px;\n}\n\n.card h3 {\n  width: 220px;\n  overflow: hidden;\n  color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.btn {\n  padding: 5px 15px;\n  background-color: slateblue;\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 16px;\n  transition-duration: 1s;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: darkred;\n}\n\n.likes {\n  font-size: 1.1em;\n  color: deeppink;\n  margin-bottom: 10px;\n}\n\nfooter {\n  width: 100%;\n  height: 50px;\n  color: #fff;\n  font-size: 22px;\n  background: #373b69;\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n\n/* popup window */\n\n.popup-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  overflow: auto;\n  opacity: 99%;\n}\n\n.popup {\n  background-color: #fff;\n  padding: 2rem;\n  width: 80%;\n  height: auto;\n  margin: 5% 10%;\n}\n\n.details {\n  display: flex;\n  height: 60%;\n}\n\n.summary {\n  text-align: justify;\n  padding: 0 10px;\n  font-size: 1.1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.info {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.summary p {\n  margin-top: 1rem;\n}\n\n.popup img {\n  object-fit: contain;\n}\n\ninput {\n  padding: 14px;\n  border: none;\n  border-radius: 5px;\n  width: 30%;\n  margin: 8px;\n  outline: none;\n  background-color: bisque;\n}\n\n.comments {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  background-color: antiquewhite;\n}\n\n.close {\n  float: right;\n}\n\n.details .btn {\n  margin-right: 50px;\n  margin-top: 5px;\n  width: 150px;\n  height: 50px;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/script/api.js":
/*!***************************!*\
  !*** ./src/script/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMovieById": () => (/* binding */ getMovieById),
/* harmony export */   "getMovies": () => (/* binding */ getMovies)
/* harmony export */ });
const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  return response.json();
};

const getMovieById = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};

/***/ }),

/***/ "./src/script/interact.js":
/*!********************************!*\
  !*** ./src/script/interact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appId": () => (/* binding */ appId),
/* harmony export */   "baseURL": () => (/* binding */ baseURL),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = '5Ap1XN8WUsuZk6doKhi8';

const getLikes = async () => {
  const response = await fetch(`${baseURL}apps/${appId}/likes`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  return response.json();
};


/***/ }),

/***/ "./src/script/modal.js":
/*!*****************************!*\
  !*** ./src/script/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var _interact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact.js */ "./src/script/interact.js");


const modal = (movie) => `<div class="popup-container">
                  <div class="popup">
                      <button class="btn close">&times;</button>
                      <div class="details">
                          <div>
                              <img class="img" src="${movie.image.medium}" height="450" width="370"/>
                          </div>
                          <div class="summary">
                              <ul class="info">
                                  <li><h1> ${movie.name} </h1></li>
                                  <li> Language: ${movie.language}</li>
                                  <li> Type: ${movie.type}</li>
                                  <li> Premiered: ${movie.premiered}</li>
                                  <li> Rating: ${movie.rating.average}</li>
                                  <li> Network: ${movie.network.name}</li>
                              </ul>
                              <p> ${movie.summary} </p>
                          </div>                      
                      </div>
                    
                      <div>
                          <h2 id="count"> Comments  </h2>
                          <ul class="comments">
                          </ul>
                      </div>
                      <div>
                          <form id="comment-form" name="comment-form" class="details">
                              <input type="text" name="name" placeholder="Your name" required/>
                              <input type="text" name="comment" placeholder="Leave a comment" required/>
                              <button class="btn">Post</button>
                          </form>
                      </div>
                  </div>
              </div>`;

const displayComments = (comments) => {
  const list = document.querySelector('.comments');
  if (!comments.length) {
    list.innerHTML = '<p>No comments found</p>';
  } else {
    comments.forEach((item) => {
      list.innerHTML += `<li><span>${item.creation_date}</span> | <span>${item.username}:</span> ${item.comment}</li>`;
    });
  }
};
const getComments = async (movieID) => {
  const response = await fetch(`${_interact_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}apps/${_interact_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments?item_id=${movieID}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const comments = await response.json();
  displayComments(comments);
};

const addComment = async (comment) => {
  fetch(`${_interact_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}apps/${_interact_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
};

/***/ }),

/***/ "./src/graphics/logo.png":
/*!*******************************!*\
  !*** ./src/graphics/logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1a21f7dea14f3c3b440.png";

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
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _script_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/api.js */ "./src/script/api.js");
/* harmony import */ var _script_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/modal.js */ "./src/script/modal.js");
/* harmony import */ var _script_interact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/interact.js */ "./src/script/interact.js");





const displayMovie = (movie, like = null) => `<div class="card">
                    <div>
                        <img class="card-img" src="${movie.image.medium}">
                    </div>
                    <div>
                        <h3> ${movie.name} </h3>
                        <p class="likes"> <i class="fas fa-heart like" data-id="${movie.id}"> <span class="num"> ${like} </span> </i>  likes </p>
                        <button class="btn" data-id="${movie.id}"> comments </button>
                    </div>
   </div>`;

const modalHolder = document.querySelector('.modal');
const displayModal = async (movieId) => {
  const movie = await (0,_script_api_js__WEBPACK_IMPORTED_MODULE_1__.getMovieById)(movieId);
  modalHolder.innerHTML = (0,_script_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)(movie);
  const popContainer = document.querySelector('.popup-container');
  popContainer.style.display = 'block';
  popContainer.style.visibility = 'visible';
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popContainer.style.display = 'none';
    popContainer.style.visibility = 'hidden';
  });
  const currentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  };

  (0,_script_modal_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(movieId);
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [name, comment] = commentForm;
    const comme = {
      item_id: movieId,
      username: name.value,
      comment: comment.value,
    };
    (0,_script_modal_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(comme);
    if (document.querySelector('.comments').innerHTML === '<p>No comments found</p>') {
      document.querySelector('.comments').innerHTML = '';
    }
    document.querySelector('.comments').innerHTML
    += `<li><span>${currentDate()}</span> | <span>${comme.username}:</span> ${comme.comment}</li>`;
    commentForm.reset();
  });
};

const listMovie = document.querySelector('.movies');
const moviesComponent = async () => {
  const likes = await (0,_script_interact_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();
  listMovie.innerHTML = '';
  const list = await (0,_script_api_js__WEBPACK_IMPORTED_MODULE_1__.getMovies)();
  (0,_script_api_js__WEBPACK_IMPORTED_MODULE_1__.countMovies)(list);
  list.forEach((item) => {
    let count = 0;
    const num = likes.find((like) => item.id === Number(like.item_id));
    if (num !== undefined) {
      count = num.likes;
    } else {
      count = 0;
    }
    listMovie.innerHTML += displayMovie(item, count);
  });

  const like = document.querySelectorAll('.like');
  like.forEach((item) => {
    item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-id');
      if (item.style.color !== 'skyblue') {
        item.style.color = 'skyblue';
        item.firstElementChild.innerHTML = Number(item.firstElementChild.innerHTML) + 1;
        (0,_script_interact_js__WEBPACK_IMPORTED_MODULE_3__.addLike)(movieId);
      }
    });
  });

  const btn = document.querySelectorAll('.btn');
  btn.forEach((item) => {
    item.addEventListener('click', async () => {
      const movieId = item.getAttribute('data-id');
      displayModal(movieId);
    });
  });
};

moviesComponent();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLG9IQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGlJQUFpSTtBQUNqSSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLDBDQUEwQyxjQUFjLGVBQWUsMkJBQTJCLDhCQUE4QixHQUFHLGVBQWUsZ0JBQWdCLGlCQUFpQixpQkFBaUIscUJBQXFCLHNFQUFzRSwrQkFBK0IsaUNBQWlDLEdBQUcsaUJBQWlCLHVCQUF1QixrQkFBa0IsMEJBQTBCLEdBQUcsY0FBYyxpQkFBaUIscUJBQXFCLHFCQUFxQix3QkFBd0IsR0FBRyxZQUFZLGtCQUFrQixrQ0FBa0MsMEJBQTBCLGNBQWMsZUFBZSxxQkFBcUIsOEJBQThCLEdBQUcsZ0JBQWdCLDBCQUEwQixrQkFBa0IsR0FBRyxpQkFBaUIsZ0JBQWdCLHFCQUFxQixxQkFBcUIsMEJBQTBCLEdBQUcsMEJBQTBCLDJCQUEyQixHQUFHLFFBQVEsbUJBQW1CLGlCQUFpQixtQkFBbUIsc0JBQXNCLGdCQUFnQixHQUFHLGFBQWEsa0JBQWtCLHdCQUF3QixnQkFBZ0IsNEJBQTRCLGtCQUFrQixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsY0FBYyxpQkFBaUIscUJBQXFCLGdCQUFnQixxQkFBcUIsd0JBQXdCLEdBQUcsVUFBVSxzQkFBc0IsZ0NBQWdDLGlCQUFpQix1QkFBdUIsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsb0JBQW9CLEdBQUcsZ0JBQWdCLDhCQUE4QixHQUFHLFlBQVkscUJBQXFCLG9CQUFvQix3QkFBd0IsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsZ0JBQWdCLG9CQUFvQix3QkFBd0IsdUJBQXVCLGtCQUFrQixxQkFBcUIsR0FBRyw0Q0FBNEMsb0JBQW9CLGdCQUFnQixpQkFBaUIsZ0JBQWdCLFlBQVksV0FBVyxtQkFBbUIsaUJBQWlCLEdBQUcsWUFBWSwyQkFBMkIsa0JBQWtCLGVBQWUsaUJBQWlCLG1CQUFtQixHQUFHLGNBQWMsa0JBQWtCLGdCQUFnQixHQUFHLGNBQWMsd0JBQXdCLG9CQUFvQixxQkFBcUIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxXQUFXLHFCQUFxQixrQkFBa0IsMkJBQTJCLDJCQUEyQixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsV0FBVyxrQkFBa0IsaUJBQWlCLHVCQUF1QixlQUFlLGdCQUFnQixrQkFBa0IsNkJBQTZCLEdBQUcsZUFBZSxxQkFBcUIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxZQUFZLGlCQUFpQixHQUFHLG1CQUFtQix1QkFBdUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsR0FBRyxTQUFTLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsa0hBQWtILE9BQU8sY0FBYyxlQUFlLDJCQUEyQixHQUFHLFVBQVUsMENBQTBDLGNBQWMsZUFBZSwyQkFBMkIsOEJBQThCLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLGlCQUFpQixxQkFBcUIsa0RBQWtELCtCQUErQixpQ0FBaUMsR0FBRyxpQkFBaUIsdUJBQXVCLGtCQUFrQiwwQkFBMEIsR0FBRyxjQUFjLGlCQUFpQixxQkFBcUIscUJBQXFCLHdCQUF3QixHQUFHLFlBQVksa0JBQWtCLGtDQUFrQywwQkFBMEIsY0FBYyxlQUFlLHFCQUFxQiw4QkFBOEIsR0FBRyxnQkFBZ0IsMEJBQTBCLGtCQUFrQixHQUFHLGlCQUFpQixnQkFBZ0IscUJBQXFCLHFCQUFxQiwwQkFBMEIsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsUUFBUSxtQkFBbUIsaUJBQWlCLG1CQUFtQixzQkFBc0IsZ0JBQWdCLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLGdCQUFnQiw0QkFBNEIsa0JBQWtCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyxjQUFjLGlCQUFpQixxQkFBcUIsZ0JBQWdCLHFCQUFxQix3QkFBd0IsR0FBRyxVQUFVLHNCQUFzQixnQ0FBZ0MsaUJBQWlCLHVCQUF1QixnQkFBZ0Isb0JBQW9CLDRCQUE0QixvQkFBb0IsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsWUFBWSxxQkFBcUIsb0JBQW9CLHdCQUF3QixHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLHdCQUF3Qix1QkFBdUIsa0JBQWtCLHFCQUFxQixHQUFHLDRDQUE0QyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsWUFBWSxXQUFXLG1CQUFtQixpQkFBaUIsR0FBRyxZQUFZLDJCQUEyQixrQkFBa0IsZUFBZSxpQkFBaUIsbUJBQW1CLEdBQUcsY0FBYyxrQkFBa0IsZ0JBQWdCLEdBQUcsY0FBYyx3QkFBd0Isb0JBQW9CLHFCQUFxQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxHQUFHLFdBQVcscUJBQXFCLGtCQUFrQiwyQkFBMkIsMkJBQTJCLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQixpQkFBaUIsdUJBQXVCLGVBQWUsZ0JBQWdCLGtCQUFrQiw2QkFBNkIsR0FBRyxlQUFlLHFCQUFxQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxHQUFHLFlBQVksaUJBQWlCLEdBQUcsbUJBQW1CLHVCQUF1QixvQkFBb0IsaUJBQWlCLGlCQUFpQixHQUFHLHFCQUFxQjtBQUNsb1A7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNYMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1AsK0RBQStELEdBQUc7QUFDbEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ0E7O0FBRUE7QUFDUCxrQ0FBa0MsUUFBUSxPQUFPLE1BQU07QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdUI7O0FBRWhCO0FBQ1A7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLHNEQUFzRCxtQkFBbUI7QUFDekU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQsbURBQW1ELGVBQWU7QUFDbEUsK0NBQStDLFdBQVc7QUFDMUQsb0RBQW9ELGdCQUFnQjtBQUNwRSxpREFBaUQscUJBQXFCO0FBQ3RFLGtEQUFrRCxtQkFBbUI7QUFDckU7QUFDQSxvQ0FBb0MsZUFBZTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EscUNBQXFDLG1CQUFtQixrQkFBa0IsY0FBYyxXQUFXLGFBQWE7QUFDaEgsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQLGtDQUFrQyxpREFBTyxDQUFDLE9BQU8sK0NBQUssQ0FBQyxvQkFBb0IsUUFBUTtBQUNuRjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRU87QUFDUCxXQUFXLGlEQUFPLENBQUMsT0FBTywrQ0FBSyxDQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztVQ3BFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUM4QztBQUNKO0FBQ1Y7O0FBRXpEO0FBQ0E7QUFDQSxxREFBcUQsbUJBQW1CO0FBQ3hFO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQyxrRkFBa0YsU0FBUyx3QkFBd0IsTUFBTTtBQUN6SCx1REFBdUQsU0FBUztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNERBQVk7QUFDbEMsMEJBQTBCLHVEQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsNkRBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYyxrQkFBa0IsZUFBZSxXQUFXLGNBQWM7QUFDNUY7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw2REFBUTtBQUM5QjtBQUNBLHFCQUFxQix5REFBUztBQUM5QixFQUFFLDJEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBTztBQUNmO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS13ZWJhcHAvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXdlYmFwcC8uL3NyYy9zY3JpcHQvYXBpLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXdlYmFwcC8uL3NyYy9zY3JpcHQvaW50ZXJhY3QuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwLy4vc3JjL3NjcmlwdC9tb2RhbC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS13ZWJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLWNhcHN0b25lLXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtd2ViYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzLWNhcHN0b25lLXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS13ZWJhcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLWNhcHN0b25lLXdlYmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZ3JhcGhpY3MvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjU0YjtcXG59XFxuXFxuLm5hdi1sb2dvIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTNweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDg0cHggMjdweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbm5hdiB1bCA+IGxpIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5pbmZvIGxpIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2I2OTtcXG59XFxuXFxuZm9vdGVyIHAgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG5uYXYgdWwgbGkgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5uYXYgdWwgdWwgPiBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vdmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGdhcDogMTAlIDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDElIDUlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBtYXJnaW46IDE1cHggMTBweDtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5saWtlcyB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IGRlZXBwaW5rO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBiYWNrZ3JvdW5kOiAjMzczYjY5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi8qIHBvcHVwIHdpbmRvdyAqL1xcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG9wYWNpdHk6IDk5JTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogNSUgMTAlO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi5zdW1tYXJ5IHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5pbmZvIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5zdW1tYXJ5IHAge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnBvcHVwIGltZyB7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuLmNvbW1lbnRzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmRldGFpbHMgLmJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlEQUE2QztFQUM3QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjU0YjtcXG59XFxuXFxuLm5hdi1sb2dvIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTNweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vZ3JhcGhpY3MvbG9nby5wbmcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogODRweCAyN3B4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxubmF2IHVsID4gbGkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmluZm8gbGkge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYjY5O1xcbn1cXG5cXG5mb290ZXIgcCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbm5hdiB1bCBsaSBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbm5hdiB1bCB1bCA+IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW92aWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgZ2FwOiAxMCUgNSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMSUgNSU7XFxufVxcblxcbi5jYXJkIHtcXG4gIG1hcmdpbjogMTVweCAxMHB4O1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBjb2xvcjogZGVlcHBpbms7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJhY2tncm91bmQ6ICMzNzNiNjk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLyogcG9wdXAgd2luZG93ICovXFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3BhY2l0eTogOTklO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiA1JSAxMCU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDYwJTtcXG59XFxuXFxuLnN1bW1hcnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmluZm8ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLnN1bW1hcnkgcCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAgaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbmlucHV0IHtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbn1cXG5cXG4uY29tbWVudHMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uZGV0YWlscyAuYnRuIHtcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBnZXRNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTsiLCJleHBvcnQgY29uc3QgYmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJztcbmV4cG9ydCBjb25zdCBhcHBJZCA9ICc1QXAxWE44V1VzdVprNmRvS2hpOCc7XG5cbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfWFwcHMvJHthcHBJZH0vbGlrZXNgLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuIiwiaW1wb3J0IHtcbiAgYXBwSWQsXG4gIGJhc2VVUkwsXG59IGZyb20gJy4vaW50ZXJhY3QuanMnO1xuXG5leHBvcnQgY29uc3QgbW9kYWwgPSAobW92aWUpID0+IGA8ZGl2IGNsYXNzPVwicG9wdXAtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nXCIgc3JjPVwiJHttb3ZpZS5pbWFnZS5tZWRpdW19XCIgaGVpZ2h0PVwiNDUwXCIgd2lkdGg9XCIzNzBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aDE+ICR7bW92aWUubmFtZX0gPC9oMT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gTGFuZ3VhZ2U6ICR7bW92aWUubGFuZ3VhZ2V9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IFR5cGU6ICR7bW92aWUudHlwZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gUHJlbWllcmVkOiAke21vdmllLnByZW1pZXJlZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gUmF0aW5nOiAke21vdmllLnJhdGluZy5hdmVyYWdlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiBOZXR3b3JrOiAke21vdmllLm5ldHdvcmsubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAke21vdmllLnN1bW1hcnl9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb3VudFwiPiBDb21tZW50cyAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImNvbW1lbnQtZm9ybVwiIG5hbWU9XCJjb21tZW50LWZvcm1cIiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiTGVhdmUgYSBjb21tZW50XCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPlBvc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChjb21tZW50cykgPT4ge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJyk7XG4gIGlmICghY29tbWVudHMubGVuZ3RoKSB7XG4gICAgbGlzdC5pbm5lckhUTUwgPSAnPHA+Tm8gY29tbWVudHMgZm91bmQ8L3A+JztcbiAgfSBlbHNlIHtcbiAgICBjb21tZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBsaXN0LmlubmVySFRNTCArPSBgPGxpPjxzcGFuPiR7aXRlbS5jcmVhdGlvbl9kYXRlfTwvc3Bhbj4gfCA8c3Bhbj4ke2l0ZW0udXNlcm5hbWV9Ojwvc3Bhbj4gJHtpdGVtLmNvbW1lbnR9PC9saT5gO1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKG1vdmllSUQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfWFwcHMvJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke21vdmllSUR9YCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBkaXNwbGF5Q29tbWVudHMoY29tbWVudHMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoY29tbWVudCkgPT4ge1xuICBmZXRjaChgJHtiYXNlVVJMfWFwcHMvJHthcHBJZH0vY29tbWVudHNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLFxuICB9KTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCB7IGdldE1vdmllcywgZ2V0TW92aWVCeUlkLCBjb3VudE1vdmllcyB9IGZyb20gJy4vc2NyaXB0L2FwaS5qcyc7XG5pbXBvcnQgeyBtb2RhbCwgZ2V0Q29tbWVudHMsIGFkZENvbW1lbnQgfSBmcm9tICcuL3NjcmlwdC9tb2RhbC5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlcywgYWRkTGlrZSB9IGZyb20gJy4vc2NyaXB0L2ludGVyYWN0LmpzJztcblxuY29uc3QgZGlzcGxheU1vdmllID0gKG1vdmllLCBsaWtlID0gbnVsbCkgPT4gYDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWdcIiBzcmM9XCIke21vdmllLmltYWdlLm1lZGl1bX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+ICR7bW92aWUubmFtZX0gPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIj4gPGkgY2xhc3M9XCJmYXMgZmEtaGVhcnQgbGlrZVwiIGRhdGEtaWQ9XCIke21vdmllLmlkfVwiPiA8c3BhbiBjbGFzcz1cIm51bVwiPiAke2xpa2V9IDwvc3Bhbj4gPC9pPiAgbGlrZXMgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGRhdGEtaWQ9XCIke21vdmllLmlkfVwiPiBjb21tZW50cyA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICA8L2Rpdj5gO1xuXG5jb25zdCBtb2RhbEhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgZGlzcGxheU1vZGFsID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgbW92aWUgPSBhd2FpdCBnZXRNb3ZpZUJ5SWQobW92aWVJZCk7XG4gIG1vZGFsSG9sZGVyLmlubmVySFRNTCA9IG1vZGFsKG1vdmllKTtcbiAgY29uc3QgcG9wQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICBwb3BDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHBvcENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3BDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwb3BDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9KTtcbiAgY29uc3QgY3VycmVudERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICB9O1xuXG4gIGdldENvbW1lbnRzKG1vdmllSWQpO1xuICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWZvcm0nKTtcbiAgY29tbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgW25hbWUsIGNvbW1lbnRdID0gY29tbWVudEZvcm07XG4gICAgY29uc3QgY29tbWUgPSB7XG4gICAgICBpdGVtX2lkOiBtb3ZpZUlkLFxuICAgICAgdXNlcm5hbWU6IG5hbWUudmFsdWUsXG4gICAgICBjb21tZW50OiBjb21tZW50LnZhbHVlLFxuICAgIH07XG4gICAgYWRkQ29tbWVudChjb21tZSk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpLmlubmVySFRNTCA9PT0gJzxwPk5vIGNvbW1lbnRzIGZvdW5kPC9wPicpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKS5pbm5lckhUTUxcbiAgICArPSBgPGxpPjxzcGFuPiR7Y3VycmVudERhdGUoKX08L3NwYW4+IHwgPHNwYW4+JHtjb21tZS51c2VybmFtZX06PC9zcGFuPiAke2NvbW1lLmNvbW1lbnR9PC9saT5gO1xuICAgIGNvbW1lbnRGb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgbGlzdE1vdmllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcycpO1xuY29uc3QgbW92aWVzQ29tcG9uZW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGxpc3RNb3ZpZS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbGlzdCA9IGF3YWl0IGdldE1vdmllcygpO1xuICBjb3VudE1vdmllcyhsaXN0KTtcbiAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCBudW0gPSBsaWtlcy5maW5kKChsaWtlKSA9PiBpdGVtLmlkID09PSBOdW1iZXIobGlrZS5pdGVtX2lkKSk7XG4gICAgaWYgKG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb3VudCA9IG51bS5saWtlcztcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICBsaXN0TW92aWUuaW5uZXJIVE1MICs9IGRpc3BsYXlNb3ZpZShpdGVtLCBjb3VudCk7XG4gIH0pO1xuXG4gIGNvbnN0IGxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuICBsaWtlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbW92aWVJZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICBpZiAoaXRlbS5zdHlsZS5jb2xvciAhPT0gJ3NreWJsdWUnKSB7XG4gICAgICAgIGl0ZW0uc3R5bGUuY29sb3IgPSAnc2t5Ymx1ZSc7XG4gICAgICAgIGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gTnVtYmVyKGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MKSArIDE7XG4gICAgICAgIGFkZExpa2UobW92aWVJZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKTtcbiAgYnRuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW92aWVJZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICBkaXNwbGF5TW9kYWwobW92aWVJZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxubW92aWVzQ29tcG9uZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9