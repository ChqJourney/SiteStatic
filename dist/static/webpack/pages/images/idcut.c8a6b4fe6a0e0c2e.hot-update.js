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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IdCut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_dist_server_image_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/image-config */ \"./node_modules/next/dist/server/image-config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layouts/layout */ \"./components/layouts/layout.js\");\n/* harmony import */ var _components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tools/sizeBox */ \"./components/tools/sizeBox.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction IdCut(param) {\n    var menus = param.menus;\n    _s();\n    var imageToCut = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var cutRope = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(\"common\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        url: '',\n        naturalWidth: 0,\n        naturalHeight: 0,\n        width: 0,\n        height: 0\n    }), uploadedImage = ref[0], setUploadedImage = ref[1];\n    var handStop = function(e) {\n        var info = imageToCut.current.getBoundingClientRect();\n        console.log(uploadedImage);\n    };\n    var imageOnload = function(e) {\n        setUploadedImage(_objectSpread({\n        }, uploadedImage, {\n            naturalWidth: e.target.naturalWidth,\n            naturalHeight: e.target.naturalHeight,\n            width: e.target.width,\n            height: e.target.height\n        }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setUploadedImage(_objectSpread({\n        }, uploadedImage, {\n            url: '/assets/ipbox.png'\n        }));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        menus: menus,\n        __source: {\n            fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto mt-10 flex-col flex max-w-7xl\",\n            __source: {\n                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-2xl font-medium text-gray-600 text-center\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"choose size\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"grid grid-cols-4 max-w-7xl gap-4 p-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"max-w-7xl px-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"static lg:flex bg-gray-200 rounded-md p-2\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white rounded-md flex-col mx-auto relative overflow-auto flex lg:w-3/12 items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            className: \"top-2\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"w-full h-full border border-gray-800\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: uploadedImage.url,\n                                                onLoad: imageOnload,\n                                                ref: imageToCut,\n                                                className: \"w-full h-full z-10\",\n                                                alt: \"uploaded image\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 15\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_draggable__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            onStop: handStop,\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                ref: cutRope,\n                                                className: \"border-dashed border bg-transparent border-red-600 absolute z-30 rounded-sm  w-24 h-24\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 15\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"h-24 w-24 absolute m-auto left-0 bottom-0 right-0 top-0\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: 2,\n                                                d: \"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white relative rounded-md mx-auto flex-col flex w-full lg:w-9/12 justify-center items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"border-dashed border relative rounded-sm border-gray-600 h-96 min-h-max min-w-full\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"text-center mt-10\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"w-3/12 h-12 border border-gray-500 rounded-2xl\",\n                                __source: {\n                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Action\"\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(IdCut, \"LfG5bKJDOLI90D3XoQBI4nxO9js=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = IdCut;\nvar _c;\n$RefreshReg$(_c, \"IdCut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxHQUFHO2dEQUFFdUIsTUFBTSxFQUFFVCxXQUFXO2dEQUFFVSxHQUFHLEVBQUUzQixVQUFVO2dEQUFFb0IsU0FBUyxFQUFDLENBQW9CO2dEQUFDUSxHQUFHLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs2R0FHckhqQyx3REFBUzs0Q0FBQ2tDLE1BQU0sRUFBRW5CLFFBQVE7Ozs7Ozs7MkhBRTFCUyxDQUFHO2dEQUFDUSxHQUFHLEVBQUUxQixPQUFPO2dEQUNqQm1CLFNBQVMsRUFBRyxDQUFzRjs7Ozs7Ozs7OzZHQUlqR1UsQ0FBRzs0Q0FDRkMsS0FBSyxFQUFDLENBQTRCOzRDQUNsQ1gsU0FBUyxFQUFDLENBQTBEOzRDQUNwRVksSUFBSSxFQUFDLENBQU07NENBQ1hDLE9BQU8sRUFBQyxDQUFXOzRDQUNuQkMsTUFBTSxFQUFDLENBQWM7Ozs7Ozs7MkhBRXBCQyxDQUFJO2dEQUNIQyxhQUFhLEVBQUMsQ0FBTztnREFDckJDLGNBQWMsRUFBQyxDQUFPO2dEQUN0QkMsV0FBVyxFQUFFLENBQUM7Z0RBQ2RDLENBQUMsRUFBQyxDQUEySjs7Ozs7Ozs7Ozs7c0dBSWxLcEIsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQXlHOzs7Ozs7Ozs2R0FDckhHLENBQUM7Ozs7Ozs7c0RBQUMsQ0FBZ0I7OzZHQUNsQkosQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLENBQXFGOzs7Ozs7Ozs7Ozs7NkZBTXZHRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7MkdBQy9Cb0IsQ0FBTTtnQ0FBQ3BCLFNBQVMsRUFBQyxDQUFnRDs7Ozs7OzswQ0FBQyxDQUVuRTs7Ozs7Ozs7QUFNWixDQUFDO0dBNUV1QnRCLEtBQUs7O1FBR2pCUix3REFBYzs7O0tBSEZRLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1hZ2VzL2lkY3V0LmpzP2FiYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XG5pbXBvcnQgeyBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zIH0gZnJvbSBcIm5leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zXCI7XG5pbXBvcnQgeyBpbWFnZUNvbmZpZ0RlZmF1bHQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBTaXplQm94IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9vbHMvc2l6ZUJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJZEN1dCh7IG1lbnVzIH0pIHtcbiAgICBjb25zdCBpbWFnZVRvQ3V0PXVzZVJlZigpXG4gICAgY29uc3QgY3V0Um9wZT11c2VSZWYoKVxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oXCJjb21tb25cIik7XG4gIGNvbnN0IFt1cGxvYWRlZEltYWdlLHNldFVwbG9hZGVkSW1hZ2VdPXVzZVN0YXRlKHt1cmw6JycsbmF0dXJhbFdpZHRoOjAsbmF0dXJhbEhlaWdodDowLHdpZHRoOjAsaGVpZ2h0OjB9KVxuICBjb25zdCBoYW5kU3RvcD1lPT57XG4gICBjb25zdCBpbmZvPSBpbWFnZVRvQ3V0LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgIGNvbnNvbGUubG9nKHVwbG9hZGVkSW1hZ2UpXG4gIH1cbiAgY29uc3QgaW1hZ2VPbmxvYWQ9ZT0+e1xuICAgIHNldFVwbG9hZGVkSW1hZ2Uoey4uLnVwbG9hZGVkSW1hZ2UsbmF0dXJhbFdpZHRoOmUudGFyZ2V0Lm5hdHVyYWxXaWR0aCxuYXR1cmFsSGVpZ2h0OmUudGFyZ2V0Lm5hdHVyYWxIZWlnaHQsd2lkdGg6ZS50YXJnZXQud2lkdGgsaGVpZ2h0OmUudGFyZ2V0LmhlaWdodH0pXG4gICAgXG4gIH1cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgc2V0VXBsb2FkZWRJbWFnZSh7Li4udXBsb2FkZWRJbWFnZSx1cmw6Jy9hc3NldHMvaXBib3gucG5nJ30pXG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPExheW91dCBtZW51cz17bWVudXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC0xMCBmbGV4LWNvbCBmbGV4IG1heC13LTd4bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBjaG9vc2Ugc2l6ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IG1heC13LTd4bCBnYXAtNCBwLTEwXCI+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgICA8U2l6ZUJveCB0aXRsZT17XCIxIGluY2hcIn0gZGVzY3JpcHRpb249e1wiMjUgbW0geCAzNSBtbVwifSAvPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIHB4LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMgbGc6ZmxleCBiZy1ncmF5LTIwMCByb3VuZGVkLW1kIHAtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbS00IGJnLXdoaXRlIHJvdW5kZWQtbWQgZmxleC1jb2wgbXgtYXV0byByZWxhdGl2ZSBvdmVyZmxvdy1hdXRvIGZsZXggIGxnOnctMy8xMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9wLTJcIj51cGxvYWRlZCBwaWN0dXJlPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTgwMFwiPlxuXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt1cGxvYWRlZEltYWdlLnVybH0gb25Mb2FkPXtpbWFnZU9ubG9hZH0gcmVmPXtpbWFnZVRvQ3V0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHotMTBcIiBhbHQ9XCJ1cGxvYWRlZCBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPERyYWdnYWJsZSBvblN0b3A9e2hhbmRTdG9wfT5cblxuICAgICAgICAgICAgICA8ZGl2IHJlZj17Y3V0Um9wZX0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci1kYXNoZWQgYm9yZGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1yZWQtNjAwIGFic29sdXRlIHotMzAgcm91bmRlZC1zbSAgdy0yNCBoLTI0YH0+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yNCB3LTI0IGFic29sdXRlIG0tYXV0byBsZWZ0LTAgYm90dG9tLTAgIHJpZ2h0LTAgdG9wLTBcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgZD1cIk00IDE2bDQuNTg2LTQuNTg2YTIgMiAwIDAxMi44MjggMEwxNiAxNm0tMi0ybDEuNTg2LTEuNTg2YTIgMiAwIDAxMi44MjggMEwyMCAxNG0tNi02aC4wMU02IDIwaDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG0tNCBiZy13aGl0ZSByZWxhdGl2ZSByb3VuZGVkLW1kIG14LWF1dG8gZmxleC1jb2wgZmxleCB3LWZ1bGwgbGc6dy05LzEyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cD51cGxvYWRlZCBwaWN0dXJlPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1kYXNoZWQgYm9yZGVyIHJlbGF0aXZlIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktNjAwIGgtOTYgbWluLWgtbWF4ICBtaW4tdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTMvMTIgaC0xMiBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtMnhsXCI+XG4gICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBsb2NhbGUgfSkgPT4ge1xuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbiAgdmFyIGZpbGUgPSBhd2FpdCBmcy5yZWFkRmlsZVN5bmMoXCIuL1VzZXJzL3NpdGUuanNvblwiLCBcInV0Zi04XCIpO1xuXG4gIHZhciBqc09iaiA9IEpTT04ucGFyc2UoZmlsZSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIC4uLihhd2FpdCBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zKGxvY2FsZSwgW1wiY29tbW9uXCIsIFwiZm9vdGVyXCIsIFwiaGVhZGVyXCJdKSksXG4gICAgICBtZW51czoganNPYmosXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRyYWdnYWJsZSIsIkxheW91dCIsIlNpemVCb3giLCJJZEN1dCIsIm1lbnVzIiwiaW1hZ2VUb0N1dCIsImN1dFJvcGUiLCJ0IiwidXJsIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwidXBsb2FkZWRJbWFnZSIsInNldFVwbG9hZGVkSW1hZ2UiLCJoYW5kU3RvcCIsImUiLCJpbmZvIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZU9ubG9hZCIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwIiwiaW1nIiwic3JjIiwib25Mb2FkIiwicmVmIiwiYWx0Iiwib25TdG9wIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/images/idcut.js\n");

/***/ })

});