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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IdCut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_dist_server_image_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/image-config */ \"./node_modules/next/dist/server/image-config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layouts/layout */ \"./components/layouts/layout.js\");\n/* harmony import */ var _components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tools/sizeBox */ \"./components/tools/sizeBox.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction IdCut(param) {\n    var menus = param.menus;\n    _s();\n    var imageToCut = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var cutRope = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(\"common\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        url: '',\n        naturalWidth: 0,\n        naturalHeight: 0\n    }), uploadedImage = ref[0], setUploadedImage = ref[1];\n    var handStop = function(e) {\n        var info = imageToCut.current.getBoundingClientRect();\n        console.log(info);\n    };\n    var imageOnload = function(e) {\n        setUploadedImage(_objectSpread({\n        }, uploadedImage, {\n            naturalWidth: e.target.naturalWidth,\n            naturalHeight: e.target.naturalHeight\n        }));\n        console.log(e);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setUploadedImage(_objectSpread({\n        }, uploadedImage, {\n            url: '/assets/ipbox.png'\n        }));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        menus: menus,\n        __source: {\n            fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto mt-10 flex-col flex max-w-7xl\",\n            __source: {\n                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-2xl font-medium text-gray-600 text-center\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"choose size\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"grid grid-cols-4 max-w-7xl gap-4 p-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"max-w-7xl px-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"static lg:flex bg-gray-200 rounded-md p-2\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white rounded-md flex-col mx-auto relative overflow-auto flex lg:w-3/12 items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            className: \"top-2\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"w-full h-full border border-gray-800\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: uploadedImage.url,\n                                                onLoad: imageOnload,\n                                                ref: imageToCut,\n                                                className: \"w-full h-full\",\n                                                alt: \"uploaded image\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 15\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_draggable__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            onStop: handStop,\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                ref: cutRope,\n                                                className: \"border-dashed border bg-transparent border-red-600 absolute z-30 rounded-sm  w-24 h-24\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 15\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"h-24 w-24 absolute m-auto left-0 bottom-0 right-0 top-0\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: 2,\n                                                d: \"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white relative rounded-md mx-auto flex-col flex w-full lg:w-9/12 justify-center items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"border-dashed border relative rounded-sm border-gray-600 h-96 min-h-max min-w-full\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"text-center mt-10\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"w-3/12 h-12 border border-gray-500 rounded-2xl\",\n                                __source: {\n                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Action\"\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(IdCut, \"iQ8t2MGElA3RPmQ4XqPLmaVzDXI=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = IdCut;\nvar _c;\n$RefreshReg$(_c, \"IdCut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0I7Ozs7Ozs7Ozs2R0FHaEgvQix3REFBUzs0Q0FBQ2dDLE1BQU0sRUFBRW5CLFFBQVE7Ozs7Ozs7MkhBRTFCUyxDQUFHO2dEQUFDUSxHQUFHLEVBQUV4QixPQUFPO2dEQUNqQmlCLFNBQVMsRUFBRyxDQUFzRjs7Ozs7Ozs7OzZHQUlqR1UsQ0FBRzs0Q0FDRkMsS0FBSyxFQUFDLENBQTRCOzRDQUNsQ1gsU0FBUyxFQUFDLENBQXlEOzRDQUNuRVksSUFBSSxFQUFDLENBQU07NENBQ1hDLE9BQU8sRUFBQyxDQUFXOzRDQUNuQkMsTUFBTSxFQUFDLENBQWM7Ozs7Ozs7MkhBRXBCQyxDQUFJO2dEQUNIQyxhQUFhLEVBQUMsQ0FBTztnREFDckJDLGNBQWMsRUFBQyxDQUFPO2dEQUN0QkMsV0FBVyxFQUFFLENBQUM7Z0RBQ2RDLENBQUMsRUFBQyxDQUEySjs7Ozs7Ozs7Ozs7c0dBSWxLcEIsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQXlHOzs7Ozs7Ozs2R0FDckhHLENBQUM7Ozs7Ozs7c0RBQUMsQ0FBZ0I7OzZHQUNsQkosQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLENBQXFGOzs7Ozs7Ozs7Ozs7NkZBTXZHRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7MkdBQy9Cb0IsQ0FBTTtnQ0FBQ3BCLFNBQVMsRUFBQyxDQUFnRDs7Ozs7OzswQ0FBQyxDQUVuRTs7Ozs7Ozs7QUFNWixDQUFDO0dBNUV1QnBCLEtBQUs7O1FBR2pCUix3REFBYzs7O0tBSEZRLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1hZ2VzL2lkY3V0LmpzP2FiYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XG5pbXBvcnQgeyBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zIH0gZnJvbSBcIm5leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zXCI7XG5pbXBvcnQgeyBpbWFnZUNvbmZpZ0RlZmF1bHQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBTaXplQm94IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9vbHMvc2l6ZUJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJZEN1dCh7IG1lbnVzIH0pIHtcbiAgICBjb25zdCBpbWFnZVRvQ3V0PXVzZVJlZigpXG4gICAgY29uc3QgY3V0Um9wZT11c2VSZWYoKVxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oXCJjb21tb25cIik7XG4gIGNvbnN0IFt1cGxvYWRlZEltYWdlLHNldFVwbG9hZGVkSW1hZ2VdPXVzZVN0YXRlKHt1cmw6JycsbmF0dXJhbFdpZHRoOjAsbmF0dXJhbEhlaWdodDowfSlcbiAgY29uc3QgaGFuZFN0b3A9ZT0+e1xuICAgY29uc3QgaW5mbz0gaW1hZ2VUb0N1dC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICBjb25zb2xlLmxvZyhpbmZvKVxuICB9XG4gIGNvbnN0IGltYWdlT25sb2FkPWU9PntcbiAgICBzZXRVcGxvYWRlZEltYWdlKHsuLi51cGxvYWRlZEltYWdlLG5hdHVyYWxXaWR0aDplLnRhcmdldC5uYXR1cmFsV2lkdGgsbmF0dXJhbEhlaWdodDplLnRhcmdldC5uYXR1cmFsSGVpZ2h0fSlcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIHNldFVwbG9hZGVkSW1hZ2Uoey4uLnVwbG9hZGVkSW1hZ2UsdXJsOicvYXNzZXRzL2lwYm94LnBuZyd9KVxuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbWVudXM9e21lbnVzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtMTAgZmxleC1jb2wgZmxleCBtYXgtdy03eGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgY2hvb3NlIHNpemVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBtYXgtdy03eGwgZ2FwLTQgcC0xMFwiPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgICA8U2l6ZUJveCB0aXRsZT17XCIxIGluY2hcIn0gZGVzY3JpcHRpb249e1wiMjUgbW0geCAzNSBtbVwifSAvPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBweC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljIGxnOmZsZXggYmctZ3JheS0yMDAgcm91bmRlZC1tZCBwLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG0tNCBiZy13aGl0ZSByb3VuZGVkLW1kIGZsZXgtY29sIG14LWF1dG8gcmVsYXRpdmUgb3ZlcmZsb3ctYXV0byBmbGV4ICBsZzp3LTMvMTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcC0yXCI+dXBsb2FkZWQgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS04MDBcIj5cblxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXBsb2FkZWRJbWFnZS51cmx9IG9uTG9hZD17aW1hZ2VPbmxvYWR9IHJlZj17aW1hZ2VUb0N1dH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIGFsdD1cInVwbG9hZGVkIGltYWdlXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8RHJhZ2dhYmxlIG9uU3RvcD17aGFuZFN0b3B9PlxuXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtjdXRSb3BlfSBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLWRhc2hlZCBib3JkZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXJlZC02MDAgYWJzb2x1dGUgei0zMCByb3VuZGVkLXNtICB3LTI0IGgtMjRgfT5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTI0IHctMjQgYWJzb2x1dGUgbS1hdXRvIGxlZnQtMCBib3R0b20tMCByaWdodC0wIHRvcC0wXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgIGQ9XCJNNCAxNmw0LjU4Ni00LjU4NmEyIDIgMCAwMTIuODI4IDBMMTYgMTZtLTItMmwxLjU4Ni0xLjU4NmEyIDIgMCAwMTIuODI4IDBMMjAgMTRtLTYtNmguMDFNNiAyMGgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtLTQgYmctd2hpdGUgcmVsYXRpdmUgcm91bmRlZC1tZCBteC1hdXRvIGZsZXgtY29sIGZsZXggdy1mdWxsIGxnOnctOS8xMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHA+dXBsb2FkZWQgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItZGFzaGVkIGJvcmRlciByZWxhdGl2ZSByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTYwMCBoLTk2IG1pbi1oLW1heCAgbWluLXctZnVsbFwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0zLzEyIGgtMTIgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgbG9jYWxlIH0pID0+IHtcbiAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG4gIHZhciBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGVTeW5jKFwiLi9Vc2Vycy9zaXRlLmpzb25cIiwgXCJ1dGYtOFwiKTtcblxuICB2YXIganNPYmogPSBKU09OLnBhcnNlKGZpbGUpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAuLi4oYXdhaXQgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyhsb2NhbGUsIFtcImNvbW1vblwiLCBcImZvb3RlclwiLCBcImhlYWRlclwiXSkpLFxuICAgICAgbWVudXM6IGpzT2JqLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0aW9uIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJEcmFnZ2FibGUiLCJMYXlvdXQiLCJTaXplQm94IiwiSWRDdXQiLCJtZW51cyIsImltYWdlVG9DdXQiLCJjdXRSb3BlIiwidCIsInVybCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJ1cGxvYWRlZEltYWdlIiwic2V0VXBsb2FkZWRJbWFnZSIsImhhbmRTdG9wIiwiZSIsImluZm8iLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY29uc29sZSIsImxvZyIsImltYWdlT25sb2FkIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInAiLCJpbWciLCJzcmMiLCJvbkxvYWQiLCJyZWYiLCJhbHQiLCJvblN0b3AiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/images/idcut.js\n");

/***/ })

});