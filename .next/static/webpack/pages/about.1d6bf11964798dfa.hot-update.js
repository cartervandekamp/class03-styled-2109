"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/About.module.css */ \"./styles/About.module.css\");\n/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_About_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_ourTeam_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ourTeam.json */ \"./data/ourTeam.json\");\n/* harmony import */ var _components_Text_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Text/index */ \"./components/Text/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction About() {\n    _s();\n    const [information, setInformation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_ourTeam_json__WEBPACK_IMPORTED_MODULE_2__\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: \"About Our Team\"\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/cartervandekamp/Desktop/stylized/pages/about.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                children: information && information.map((info, index)=>{\n                    if (info.role() === \"Team Member\") {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Text_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            name: info.name\n                        }, index, false, {\n                            fileName: \"/Users/cartervandekamp/Desktop/stylized/pages/about.js\",\n                            lineNumber: 23,\n                            columnNumber: 22\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/cartervandekamp/Desktop/stylized/pages/about.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cartervandekamp/Desktop/stylized/pages/about.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(About, \"axublSqsaFVApoANZsutMY3Ki9o=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOztBQUFnRDtBQUNmO0FBQ087QUFDSTtBQUNmO0FBR2QsU0FBU0ssUUFBUTs7SUFDNUIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO1dBQUlDLCtDQUFJQTtLQUFDO0lBR3BELHFCQUVKLDhEQUFDTTtRQUFJQyxXQUFXVCxzRUFBVzs7MEJBQ25CLDhEQUFDUTtnQkFBSUMsV0FBV1QsdUVBQVk7MEJBQ2hDOzhCQUFFOzs7Ozs7OzBCQUVGLDhEQUFDUTtnQkFBSUMsV0FBV1Qsc0VBQVc7MEJBQzFCTSxlQUNDQSxZQUFZTyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtvQkFDL0IsSUFBSUQsS0FBS0UsSUFBSSxPQUFPLGVBQWU7d0JBQ2pDLHFCQUFPLDhEQUFDYiw4REFBSUE7NEJBQWFTLE1BQU1FLEtBQUtGLElBQUk7MkJBQXRCRzs7Ozs7b0JBQ3BCLENBQUM7Z0JBQ0g7Ozs7Ozs7Ozs7OztBQUlWLENBQUM7R0FwQnVCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC5qcz8wYzQwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Fib3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9vdXJUZWFtLmpzb25cIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL1RleHQvaW5kZXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgICBjb25zdCBbaW5mb3JtYXRpb24sIHNldEluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKFsuLi5kYXRhXSk7XG5cbiAgXG4gICAgICAgIHJldHVybiAoXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICA8PkFib3V0IE91ciBUZWFtPC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxuICAgICAgICB7aW5mb3JtYXRpb24gJiZcbiAgICAgICAgICBpbmZvcm1hdGlvbi5tYXAoKGluZm8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5mby5yb2xlKCkgPT09IFwiVGVhbSBNZW1iZXJcIikge1xuICAgICAgICAgICAgICByZXR1cm4gPFRleHQga2V5PXtpbmRleH0gbmFtZT17aW5mby5uYW1lfSAvPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsImRhdGEiLCJUZXh0IiwiTGluayIsIkFib3V0IiwiaW5mb3JtYXRpb24iLCJzZXRJbmZvcm1hdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJ0aXRsZSIsIm5hbWUiLCJtYXAiLCJpbmZvIiwiaW5kZXgiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.js\n"));

/***/ })

});