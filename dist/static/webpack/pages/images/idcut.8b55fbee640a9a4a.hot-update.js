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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IdCut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layouts/layout */ \"./components/layouts/layout.js\");\n/* harmony import */ var _components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tools/sizeBox */ \"./components/tools/sizeBox.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction IdCut(param) {\n    var menus = param.menus;\n    _s();\n    var imageToCut = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var cutRope = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(\"common\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), uploadedImage = ref[0], setUploadedImage = ref[1];\n    var handStop = function(e) {\n        var info = cutRope.current.getBoundingClientRect();\n        console.log(info);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        menus: menus,\n        __source: {\n            fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto mt-10 flex-col flex max-w-7xl\",\n            __source: {\n                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-2xl font-medium text-gray-600 text-center\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"choose size\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"grid grid-cols-4 max-w-7xl gap-4 p-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_5__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"max-w-7xl px-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"static lg:flex bg-gray-200 rounded-md p-2\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white rounded-md flex-col mx-auto relative overflow-auto flex lg:w-3/12 items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            className: \"top-2\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"w-full h-full border border-gray-800\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: uploadedImage,\n                                                className: \"w-full h-full hidden\",\n                                                alt: \"uploaded image\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 15\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_draggable__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            onStop: handStop,\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                ref: cutRope,\n                                                className: \"border-dashed border bg-transparent border-red-600 absolute z-30 rounded-sm  w-24 h-24\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 15\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"h-24 w-24 absolute m-auto left-0 bottom-0 right-0 top-0\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: 2,\n                                                d: \"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white relative rounded-md mx-auto flex-col flex w-full lg:w-9/12 justify-center items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"border-dashed border relative rounded-sm border-gray-600 h-96 min-h-max min-w-full\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"text-center mt-10\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"w-3/12 h-12 border border-gray-500 rounded-2xl\",\n                                __source: {\n                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Action\"\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(IdCut, \"iIkm0nAdRiCtdufCfZMAQXpTY5Y=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = IdCut;\nvar _c;\n$RefreshReg$(_c, \"IdCut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCSixDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBcUY7Ozs7Ozs7Ozs7Ozs2RkFNdkdELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFtQjs7Ozs7OzsyR0FDL0JtQixDQUFNO2dDQUFDbkIsU0FBUyxFQUFDLENBQWdEOzs7Ozs7OzBDQUFDLENBRW5FOzs7Ozs7OztBQU1aLENBQUM7R0F4RXVCZixLQUFLOztRQUdqQlAsd0RBQWM7OztLQUhGTyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ltYWdlcy9pZGN1dC5qcz9hYmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xuaW1wb3J0IHsgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyB9IGZyb20gXCJuZXh0LWkxOG5leHQvc2VydmVyU2lkZVRyYW5zbGF0aW9uc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9sYXlvdXRcIjtcbmltcG9ydCB7IFNpemVCb3ggfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b29scy9zaXplQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElkQ3V0KHsgbWVudXMgfSkge1xuICAgIGNvbnN0IGltYWdlVG9DdXQ9dXNlUmVmKClcbiAgICBjb25zdCBjdXRSb3BlPXVzZVJlZigpXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihcImNvbW1vblwiKTtcbiAgY29uc3QgW3VwbG9hZGVkSW1hZ2Usc2V0VXBsb2FkZWRJbWFnZV09dXNlU3RhdGUoXCJcIilcbiAgY29uc3QgaGFuZFN0b3A9ZT0+e1xuICAgY29uc3QgaW5mbz0gY3V0Um9wZS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICBjb25zb2xlLmxvZyhpbmZvKVxuICB9XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFxuICB9KVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbWVudXM9e21lbnVzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtMTAgZmxleC1jb2wgZmxleCBtYXgtdy03eGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgY2hvb3NlIHNpemVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBtYXgtdy03eGwgZ2FwLTQgcC0xMFwiPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgICA8U2l6ZUJveCB0aXRsZT17XCIxIGluY2hcIn0gZGVzY3JpcHRpb249e1wiMjUgbW0geCAzNSBtbVwifSAvPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBweC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljIGxnOmZsZXggYmctZ3JheS0yMDAgcm91bmRlZC1tZCBwLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG0tNCBiZy13aGl0ZSByb3VuZGVkLW1kIGZsZXgtY29sIG14LWF1dG8gcmVsYXRpdmUgb3ZlcmZsb3ctYXV0byBmbGV4ICBsZzp3LTMvMTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcC0yXCI+dXBsb2FkZWQgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS04MDBcIj5cblxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXBsb2FkZWRJbWFnZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBoaWRkZW5cIiBhbHQ9XCJ1cGxvYWRlZCBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPERyYWdnYWJsZSBvblN0b3A9e2hhbmRTdG9wfT5cblxuICAgICAgICAgICAgICA8ZGl2IHJlZj17Y3V0Um9wZX0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci1kYXNoZWQgYm9yZGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1yZWQtNjAwIGFic29sdXRlIHotMzAgcm91bmRlZC1zbSAgdy0yNCBoLTI0YH0+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yNCB3LTI0IGFic29sdXRlIG0tYXV0byBsZWZ0LTAgYm90dG9tLTAgcmlnaHQtMCB0b3AtMFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTQgMTZsNC41ODYtNC41ODZhMiAyIDAgMDEyLjgyOCAwTDE2IDE2bS0yLTJsMS41ODYtMS41ODZhMiAyIDAgMDEyLjgyOCAwTDIwIDE0bS02LTZoLjAxTTYgMjBoMTJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbS00IGJnLXdoaXRlIHJlbGF0aXZlIHJvdW5kZWQtbWQgbXgtYXV0byBmbGV4LWNvbCBmbGV4IHctZnVsbCBsZzp3LTkvMTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxwPnVwbG9hZGVkIHBpY3R1cmU8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWRhc2hlZCBib3JkZXIgcmVsYXRpdmUgcm91bmRlZC1zbSBib3JkZXItZ3JheS02MDAgaC05NiBtaW4taC1tYXggIG1pbi13LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMy8xMiBoLTEyIGJvcmRlciBib3JkZXItZ3JheS01MDAgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgICAgQWN0aW9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IGxvY2FsZSB9KSA9PiB7XG4gIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuICB2YXIgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlU3luYyhcIi4vVXNlcnMvc2l0ZS5qc29uXCIsIFwidXRmLThcIik7XG5cbiAgdmFyIGpzT2JqID0gSlNPTi5wYXJzZShmaWxlKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgLi4uKGF3YWl0IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMobG9jYWxlLCBbXCJjb21tb25cIiwgXCJmb290ZXJcIiwgXCJoZWFkZXJcIl0pKSxcbiAgICAgIG1lbnVzOiBqc09iaixcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbiIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRHJhZ2dhYmxlIiwiTGF5b3V0IiwiU2l6ZUJveCIsIklkQ3V0IiwibWVudXMiLCJpbWFnZVRvQ3V0IiwiY3V0Um9wZSIsInQiLCJ1cGxvYWRlZEltYWdlIiwic2V0VXBsb2FkZWRJbWFnZSIsImhhbmRTdG9wIiwiZSIsImluZm8iLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwib25TdG9wIiwicmVmIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/images/idcut.js\n");

/***/ })

});