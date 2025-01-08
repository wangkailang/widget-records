(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@apitable/widget-sdk"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@apitable/widget-sdk"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("@apitable/widget-sdk")) : factory(root["_React"], root["_@apitable/widget-sdk"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__apitable_widget_sdk__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../../develop/2024/widget-records/src/setting.tsx":
/*!******************************************************************************!*\
  !*** ../../../../../../../../../develop/2024/widget-records/src/setting.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Setting: () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apitable/widget-sdk */ "@apitable/widget-sdk");
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var Setting = function () {
    var _a = __read((0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__.useSettingsButton)(), 1), isSettingOpened = _a[0];
    return isSettingOpened ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            flexShrink: 0,
            width: '300px',
            borderLeft: 'solid 1px gainsboro',
            paddingLeft: '16px'
        } },
        "this is settings ",
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
        "You can see my changes by clicking the gear button in the upper right corner, or the toggle button in the setting property on the left.") : null;
};


/***/ }),

/***/ "@apitable/widget-sdk":
/*!***************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@apitable/widget-sdk","commonjs2":"@apitable/widget-sdk","amd":"@apitable/widget-sdk","root":"_@apitable/widget-sdk"} ***!
  \***************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__apitable_widget_sdk__;

/***/ }),

/***/ "react":
/*!***************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"_React"} ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************************************************!*\
  !*** ../../../../../../../../../develop/2024/widget-records/src/index.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelloWorld: () => (/* binding */ HelloWorld)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apitable/widget-sdk */ "@apitable/widget-sdk");
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting */ "../../../../../../../../../develop/2024/widget-records/src/setting.tsx");



var HelloWorld = function () {
    var viewId = (0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__.useActiveViewId)();
    var records = (0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__.useRecords)(viewId);
    console.log('records length', records.length);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            display: 'flex',
            height: '100%'
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                flexGrow: 1,
                overflow: 'auto',
                padding: '0 8px'
            } },
            "hello\uFF0Cworld ",
            records.length),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_setting__WEBPACK_IMPORTED_MODULE_2__.Setting, null));
};
(0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__.initializeWidget)(HelloWorld, 'wpklbaHM7XAsE');

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=widget_bundle.js.map