"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/images/idcut",{

/***/ "./pages/images/idcut.js":
/*!*******************************!*\
  !*** ./pages/images/idcut.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IdCut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layouts/layout */ \"./components/layouts/layout.js\");\n/* harmony import */ var _components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tools/sizeBox */ \"./components/tools/sizeBox.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction IdCut(param) {\n    var menus = param.menus;\n    _s();\n    var imageToCut = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var cutRope = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(\"common\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), uploadedImage = ref[0], setUploadedImage = ref[1];\n    var handStop = function(e) {\n        var info = cutRope.current.getBoundingClientRect();\n        console.log(info);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        menus: menus,\n        __source: {\n            fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto mt-10 flex-col flex max-w-7xl\",\n            __source: {\n                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-2xl font-medium text-gray-600 text-center\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"choose size\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"grid grid-cols-4 max-w-7xl gap-4 p-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"max-w-7xl px-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"static lg:flex bg-gray-200 rounded-md p-2\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white rounded-md flex-col mx-auto relative overflow-auto flex lg:w-3/12 items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            className: \"top-2\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: uploadedImage,\n                                            className: \"w-full h-full hidden\",\n                                            alt: \"uploaded image\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_draggable__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            onStop: handStop,\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                ref: cutRope,\n                                                className: \"border-dashed border bg-transparent border-red-600 absolute z-30 rounded-sm  w-24 h-24\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 15\n                                                },\n                                                __self: this\n                                            })\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white relative rounded-md mx-auto flex-col flex w-full lg:w-9/12 justify-center items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"border-dashed border relative rounded-sm border-gray-600 h-96 min-h-max min-w-full\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"text-center mt-10\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"w-3/12 h-12 border border-gray-500 rounded-2xl\",\n                                __source: {\n                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Action\"\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(IdCut, \"7ehN3Fsjg7dxacYF/O+bQQ09Bvs=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = IdCut;\nvar _c;\n$RefreshReg$(_c, \"IdCut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbWFnZXMvaWRjdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUVNO0FBQ1o7QUFDYTtBQUNJOzs7QUFFekMsUUFBUSxDQUFDTyxLQUFLLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBVkMsS0FBSyxHQUFQLEtBQVMsQ0FBUEEsS0FBSzs7SUFDakMsR0FBSyxDQUFDQyxVQUFVLEdBQUNQLDZDQUFNO0lBQ3ZCLEdBQUssQ0FBQ1EsT0FBTyxHQUFDUiw2Q0FBTTtJQUN0QixHQUFLLENBQUNTLENBQUMsR0FBR1gsNERBQWMsQ0FBQyxDQUFRO0lBQ2pDLEdBQUssQ0FBa0NHLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTNDUyxhQUFhLEdBQW1CVCxHQUFZLEtBQTlCVSxnQkFBZ0IsR0FBRVYsR0FBWTtJQUNuRCxHQUFLLENBQUNXLFFBQVEsR0FBQ0MsUUFDZCxDQURjQSxDQUFDLEVBQUUsQ0FBQztRQUNsQixHQUFLLENBQUNDLElBQUksR0FBRU4sT0FBTyxDQUFDTyxPQUFPLENBQUNDLHFCQUFxQjtRQUNqREMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7SUFDakIsQ0FBQztJQUNELE1BQU0sc0VBQ0hYLGtFQUFNO1FBQUNHLEtBQUssRUFBRUEsS0FBSzs7Ozs7Ozt3RkFDakJhLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWlEOzs7Ozs7OztxRkFDN0RELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFnRDs7Ozs7Ozs4QkFBQyxDQUVoRTs7c0ZBQ0NELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUF1Qzs7Ozs7Ozs7NkZBQ25EaEIsOERBQU87NEJBQUNpQixLQUFLLEVBQUUsQ0FBUTs0QkFBRUMsV0FBVyxFQUFFLENBQWU7Ozs7Ozs7OzZGQUNyRGxCLDhEQUFPOzRCQUFDaUIsS0FBSyxFQUFFLENBQVE7NEJBQUVDLFdBQVcsRUFBRSxDQUFlOzs7Ozs7Ozs2RkFDckRsQiw4REFBTzs0QkFBQ2lCLEtBQUssRUFBRSxDQUFROzRCQUFFQyxXQUFXLEVBQUUsQ0FBZTs7Ozs7Ozs7NkZBQ3JEbEIsOERBQU87NEJBQUNpQixLQUFLLEVBQUUsQ0FBUTs0QkFBRUMsV0FBVyxFQUFFLENBQWU7Ozs7Ozs7Ozs7c0ZBRXZESCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7OzhGQUM3QkQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQTJDOzs7Ozs7OztzR0FDdkRELENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUFrRzs7Ozs7Ozs7NkdBQzlHRyxDQUFDOzRDQUFDSCxTQUFTLEVBQUMsQ0FBTzs7Ozs7OztzREFBQyxDQUFnQjs7NkdBRXBDSSxDQUFHOzRDQUFDQyxHQUFHLEVBQUVmLGFBQWE7NENBQUVVLFNBQVMsRUFBQyxDQUFzQjs0Q0FBQ00sR0FBRyxFQUFDLENBQWdCOzs7Ozs7Ozs2R0FFN0V4Qix3REFBUzs0Q0FBQ3lCLE1BQU0sRUFBRWYsUUFBUTs7Ozs7OzsySEFFMUJPLENBQUc7Z0RBQUNTLEdBQUcsRUFBRXBCLE9BQU87Z0RBQ2pCWSxTQUFTLEVBQUcsQ0FBc0Y7Ozs7Ozs7Ozs7O3NHQW1CbkdELENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUF5Rzs7Ozs7Ozs7NkdBQ3JIRyxDQUFDOzs7Ozs7O3NEQUFDLENBQWdCOzs2R0FDbEJKLENBQUc7NENBQUNDLFNBQVMsRUFBQyxDQUFxRjs7Ozs7Ozs7Ozs7OzZGQU12R0QsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQW1COzs7Ozs7OzJHQUMvQlMsQ0FBTTtnQ0FBQ1QsU0FBUyxFQUFDLENBQWdEOzs7Ozs7OzBDQUFDLENBRW5FOzs7Ozs7OztBQU1aLENBQUM7R0FuRXVCZixLQUFLOztRQUdqQlAsd0RBQWM7OztLQUhGTyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ltYWdlcy9pZGN1dC5qcz9hYmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xuaW1wb3J0IHsgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyB9IGZyb20gXCJuZXh0LWkxOG5leHQvc2VydmVyU2lkZVRyYW5zbGF0aW9uc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9sYXlvdXRcIjtcbmltcG9ydCB7IFNpemVCb3ggfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b29scy9zaXplQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElkQ3V0KHsgbWVudXMgfSkge1xuICAgIGNvbnN0IGltYWdlVG9DdXQ9dXNlUmVmKClcbiAgICBjb25zdCBjdXRSb3BlPXVzZVJlZigpXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihcImNvbW1vblwiKTtcbiAgY29uc3QgW3VwbG9hZGVkSW1hZ2Usc2V0VXBsb2FkZWRJbWFnZV09dXNlU3RhdGUoXCJcIilcbiAgY29uc3QgaGFuZFN0b3A9ZT0+e1xuICAgY29uc3QgaW5mbz0gY3V0Um9wZS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICBjb25zb2xlLmxvZyhpbmZvKVxuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCBtZW51cz17bWVudXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC0xMCBmbGV4LWNvbCBmbGV4IG1heC13LTd4bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBjaG9vc2Ugc2l6ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IG1heC13LTd4bCBnYXAtNCBwLTEwXCI+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgICA8U2l6ZUJveCB0aXRsZT17XCIxIGluY2hcIn0gZGVzY3JpcHRpb249e1wiMjUgbW0geCAzNSBtbVwifSAvPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIHB4LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMgbGc6ZmxleCBiZy1ncmF5LTIwMCByb3VuZGVkLW1kIHAtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbS00IGJnLXdoaXRlIHJvdW5kZWQtbWQgZmxleC1jb2wgbXgtYXV0byByZWxhdGl2ZSBvdmVyZmxvdy1hdXRvIGZsZXggIGxnOnctMy8xMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9wLTJcIj51cGxvYWRlZCBwaWN0dXJlPC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VwbG9hZGVkSW1hZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgaGlkZGVuXCIgYWx0PVwidXBsb2FkZWQgaW1hZ2VcIi8+XG5cbiAgICAgICAgICAgICAgPERyYWdnYWJsZSBvblN0b3A9e2hhbmRTdG9wfT5cblxuICAgICAgICAgICAgICA8ZGl2IHJlZj17Y3V0Um9wZX0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci1kYXNoZWQgYm9yZGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1yZWQtNjAwIGFic29sdXRlIHotMzAgcm91bmRlZC1zbSAgdy0yNCBoLTI0YH0+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICB7LyogPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjQgdy0yNCBhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTQgMTZsNC41ODYtNC41ODZhMiAyIDAgMDEyLjgyOCAwTDE2IDE2bS0yLTJsMS41ODYtMS41ODZhMiAyIDAgMDEyLjgyOCAwTDIwIDE0bS02LTZoLjAxTTYgMjBoMTJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG0tNCBiZy13aGl0ZSByZWxhdGl2ZSByb3VuZGVkLW1kIG14LWF1dG8gZmxleC1jb2wgZmxleCB3LWZ1bGwgbGc6dy05LzEyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cD51cGxvYWRlZCBwaWN0dXJlPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1kYXNoZWQgYm9yZGVyIHJlbGF0aXZlIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktNjAwIGgtOTYgbWluLWgtbWF4ICBtaW4tdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTMvMTIgaC0xMiBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtMnhsXCI+XG4gICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBsb2NhbGUgfSkgPT4ge1xuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbiAgdmFyIGZpbGUgPSBhd2FpdCBmcy5yZWFkRmlsZVN5bmMoXCIuL1VzZXJzL3NpdGUuanNvblwiLCBcInV0Zi04XCIpO1xuXG4gIHZhciBqc09iaiA9IEpTT04ucGFyc2UoZmlsZSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIC4uLihhd2FpdCBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zKGxvY2FsZSwgW1wiY29tbW9uXCIsIFwiZm9vdGVyXCIsIFwiaGVhZGVyXCJdKSksXG4gICAgICBtZW51czoganNPYmosXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRyYWdnYWJsZSIsIkxheW91dCIsIlNpemVCb3giLCJJZEN1dCIsIm1lbnVzIiwiaW1hZ2VUb0N1dCIsImN1dFJvcGUiLCJ0IiwidXBsb2FkZWRJbWFnZSIsInNldFVwbG9hZGVkSW1hZ2UiLCJoYW5kU3RvcCIsImUiLCJpbmZvIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicCIsImltZyIsInNyYyIsImFsdCIsIm9uU3RvcCIsInJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/images/idcut.js\n");

/***/ })

});