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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IdCut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_dist_server_image_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/image-config */ \"./node_modules/next/dist/server/image-config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layouts/layout */ \"./components/layouts/layout.js\");\n/* harmony import */ var _components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tools/sizeBox */ \"./components/tools/sizeBox.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction IdCut(param) {\n    var menus = param.menus;\n    _s();\n    var imageToCut = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var cutRope = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(\"common\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        url: '',\n        naturalWidth: 0,\n        naturalHeight: 0,\n        width: 0,\n        height: 0\n    }), uploadedImage = ref[0], setUploadedImage = ref[1];\n    var handStop = function(e) {\n        var info = imageToCut.current.getBoundingClientRect();\n        console.log(uploadedImage);\n    };\n    var imageOnload = function(e) {\n        setUploadedImage(_objectSpread({\n        }, uploadedImage, {\n            naturalWidth: e.target.naturalWidth,\n            naturalHeight: e.target.naturalHeight,\n            width: e.target.width,\n            height: e.target.height\n        }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setUploadedImage(_objectSpread({\n        }, uploadedImage, {\n            url: '/assets/ipbox.png'\n        }));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        menus: menus,\n        __source: {\n            fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto mt-10 flex-col flex max-w-7xl\",\n            __source: {\n                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-2xl font-medium text-gray-600 text-center\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"choose size\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"grid grid-cols-4 max-w-7xl gap-4 p-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"max-w-7xl px-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"static lg:flex bg-gray-200 rounded-md p-2\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white rounded-md flex-col mx-auto relative overflow-auto flex lg:w-3/12 items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            className: \"top-2\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"w-full h-full border border-gray-800\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: uploadedImage.url,\n                                                onLoad: imageOnload,\n                                                ref: imageToCut,\n                                                className: \"w-full h-full z-10\",\n                                                alt: \"uploaded image\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 15\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_draggable__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            onStop: handStop,\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: [\n                                                \"uploadedImage.url?\",\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                    ref: cutRope,\n                                                    className: \"border-dashed border bg-transparent border-red-600 absolute z-30 rounded-sm  w-24 h-24\",\n                                                    __source: {\n                                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 33\n                                                    },\n                                                    __self: this\n                                                }),\n                                                \":\\\"\\\"\"\n                                            ]\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"h-24 w-24 absolute m-auto left-0 bottom-0 right-0 top-0 \".concat(uploadedImage.url ? \"hidden\" : \"\"),\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: 2,\n                                                d: \"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white relative rounded-md mx-auto flex-col flex w-full lg:w-9/12 justify-center items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"border-dashed border relative rounded-sm border-gray-600 h-96 min-h-max min-w-full\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"text-center mt-10\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"w-3/12 h-12 border border-gray-500 rounded-2xl\",\n                                __source: {\n                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Action\"\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(IdCut, \"LfG5bKJDOLI90D3XoQBI4nxO9js=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = IdCut;\nvar _c;\n$RefreshReg$(_c, \"IdCut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxHQUFHO2dEQUFFdUIsTUFBTSxFQUFFVCxXQUFXO2dEQUFFVSxHQUFHLEVBQUUzQixVQUFVO2dEQUFFb0IsU0FBUyxFQUFDLENBQW9CO2dEQUFDUSxHQUFHLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs4R0FHckhqQyx3REFBUzs0Q0FBQ2tDLE1BQU0sRUFBRW5CLFFBQVE7Ozs7Ozs7O2dEQUFFLENBRVg7cUhBQUNTLENBQUc7b0RBQUNRLEdBQUcsRUFBRTFCLE9BQU87b0RBQ25DbUIsU0FBUyxFQUFHLENBQXNGOzs7Ozs7OztnREFFNUYsQ0FDTjs7OzZHQUNDVSxDQUFHOzRDQUNGQyxLQUFLLEVBQUMsQ0FBNEI7NENBQ2xDWCxTQUFTLEVBQUcsQ0FBd0QsMERBQWdDLE9BQTlCWixhQUFhLENBQUNMLEdBQUcsR0FBQyxDQUFRLFVBQUMsQ0FBRTs0Q0FDbkc2QixJQUFJLEVBQUMsQ0FBTTs0Q0FDWEMsT0FBTyxFQUFDLENBQVc7NENBQ25CQyxNQUFNLEVBQUMsQ0FBYzs7Ozs7OzsySEFFcEJDLENBQUk7Z0RBQ0hDLGFBQWEsRUFBQyxDQUFPO2dEQUNyQkMsY0FBYyxFQUFDLENBQU87Z0RBQ3RCQyxXQUFXLEVBQUUsQ0FBQztnREFDZEMsQ0FBQyxFQUFDLENBQTJKOzs7Ozs7Ozs7OztzR0FJbEtwQixDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBeUc7Ozs7Ozs7OzZHQUNySEcsQ0FBQzs7Ozs7OztzREFBQyxDQUFnQjs7NkdBQ2xCSixDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBcUY7Ozs7Ozs7Ozs7Ozs2RkFNdkdELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFtQjs7Ozs7OzsyR0FDL0JvQixDQUFNO2dDQUFDcEIsU0FBUyxFQUFDLENBQWdEOzs7Ozs7OzBDQUFDLENBRW5FOzs7Ozs7OztBQU1aLENBQUM7R0E1RXVCdEIsS0FBSzs7UUFHakJSLHdEQUFjOzs7S0FIRlEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbWFnZXMvaWRjdXQuanM/YWJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJuZXh0LWkxOG5leHRcIjtcbmltcG9ydCB7IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMgfSBmcm9tIFwibmV4dC1pMThuZXh0L3NlcnZlclNpZGVUcmFuc2xhdGlvbnNcIjtcbmltcG9ydCB7IGltYWdlQ29uZmlnRGVmYXVsdCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9sYXlvdXRcIjtcbmltcG9ydCB7IFNpemVCb3ggfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b29scy9zaXplQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElkQ3V0KHsgbWVudXMgfSkge1xuICAgIGNvbnN0IGltYWdlVG9DdXQ9dXNlUmVmKClcbiAgICBjb25zdCBjdXRSb3BlPXVzZVJlZigpXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihcImNvbW1vblwiKTtcbiAgY29uc3QgW3VwbG9hZGVkSW1hZ2Usc2V0VXBsb2FkZWRJbWFnZV09dXNlU3RhdGUoe3VybDonJyxuYXR1cmFsV2lkdGg6MCxuYXR1cmFsSGVpZ2h0OjAsd2lkdGg6MCxoZWlnaHQ6MH0pXG4gIGNvbnN0IGhhbmRTdG9wPWU9PntcbiAgIGNvbnN0IGluZm89IGltYWdlVG9DdXQuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgY29uc29sZS5sb2codXBsb2FkZWRJbWFnZSlcbiAgfVxuICBjb25zdCBpbWFnZU9ubG9hZD1lPT57XG4gICAgc2V0VXBsb2FkZWRJbWFnZSh7Li4udXBsb2FkZWRJbWFnZSxuYXR1cmFsV2lkdGg6ZS50YXJnZXQubmF0dXJhbFdpZHRoLG5hdHVyYWxIZWlnaHQ6ZS50YXJnZXQubmF0dXJhbEhlaWdodCx3aWR0aDplLnRhcmdldC53aWR0aCxoZWlnaHQ6ZS50YXJnZXQuaGVpZ2h0fSlcbiAgICBcbiAgfVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBzZXRVcGxvYWRlZEltYWdlKHsuLi51cGxvYWRlZEltYWdlLHVybDonL2Fzc2V0cy9pcGJveC5wbmcnfSlcbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IG1lbnVzPXttZW51c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTEwIGZsZXgtY29sIGZsZXggbWF4LXctN3hsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIGNob29zZSBzaXplXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgbWF4LXctN3hsIGdhcC00IHAtMTBcIj5cbiAgICAgICAgICA8U2l6ZUJveCB0aXRsZT17XCIxIGluY2hcIn0gZGVzY3JpcHRpb249e1wiMjUgbW0geCAzNSBtbVwifSAvPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgICA8U2l6ZUJveCB0aXRsZT17XCIxIGluY2hcIn0gZGVzY3JpcHRpb249e1wiMjUgbW0geCAzNSBtbVwifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgcHgtMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYyBsZzpmbGV4IGJnLWdyYXktMjAwIHJvdW5kZWQtbWQgcC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtLTQgYmctd2hpdGUgcm91bmRlZC1tZCBmbGV4LWNvbCBteC1hdXRvIHJlbGF0aXZlIG92ZXJmbG93LWF1dG8gZmxleCAgbGc6dy0zLzEyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3AtMlwiPnVwbG9hZGVkIHBpY3R1cmU8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktODAwXCI+XG5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VwbG9hZGVkSW1hZ2UudXJsfSBvbkxvYWQ9e2ltYWdlT25sb2FkfSByZWY9e2ltYWdlVG9DdXR9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgei0xMFwiIGFsdD1cInVwbG9hZGVkIGltYWdlXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8RHJhZ2dhYmxlIG9uU3RvcD17aGFuZFN0b3B9PlxuXG4gICAgICAgICAgICAgIHVwbG9hZGVkSW1hZ2UudXJsPzxkaXYgcmVmPXtjdXRSb3BlfSBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLWRhc2hlZCBib3JkZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXJlZC02MDAgYWJzb2x1dGUgei0zMCByb3VuZGVkLXNtICB3LTI0IGgtMjRgfT5cblxuICAgICAgICAgICAgICA8L2Rpdj46XCJcIlxuICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtMjQgdy0yNCBhYnNvbHV0ZSBtLWF1dG8gbGVmdC0wIGJvdHRvbS0wIHJpZ2h0LTAgdG9wLTAgJHt1cGxvYWRlZEltYWdlLnVybD9cImhpZGRlblwiOlwiXCJ9YH1cbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgIGQ9XCJNNCAxNmw0LjU4Ni00LjU4NmEyIDIgMCAwMTIuODI4IDBMMTYgMTZtLTItMmwxLjU4Ni0xLjU4NmEyIDIgMCAwMTIuODI4IDBMMjAgMTRtLTYtNmguMDFNNiAyMGgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtLTQgYmctd2hpdGUgcmVsYXRpdmUgcm91bmRlZC1tZCBteC1hdXRvIGZsZXgtY29sIGZsZXggdy1mdWxsIGxnOnctOS8xMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHA+dXBsb2FkZWQgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItZGFzaGVkIGJvcmRlciByZWxhdGl2ZSByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTYwMCBoLTk2IG1pbi1oLW1heCAgbWluLXctZnVsbFwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0zLzEyIGgtMTIgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgbG9jYWxlIH0pID0+IHtcbiAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG4gIHZhciBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGVTeW5jKFwiLi9Vc2Vycy9zaXRlLmpzb25cIiwgXCJ1dGYtOFwiKTtcblxuICB2YXIganNPYmogPSBKU09OLnBhcnNlKGZpbGUpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAuLi4oYXdhaXQgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyhsb2NhbGUsIFtcImNvbW1vblwiLCBcImZvb3RlclwiLCBcImhlYWRlclwiXSkpLFxuICAgICAgbWVudXM6IGpzT2JqLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0aW9uIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJEcmFnZ2FibGUiLCJMYXlvdXQiLCJTaXplQm94IiwiSWRDdXQiLCJtZW51cyIsImltYWdlVG9DdXQiLCJjdXRSb3BlIiwidCIsInVybCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInVwbG9hZGVkSW1hZ2UiLCJzZXRVcGxvYWRlZEltYWdlIiwiaGFuZFN0b3AiLCJlIiwiaW5mbyIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VPbmxvYWQiLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicCIsImltZyIsInNyYyIsIm9uTG9hZCIsInJlZiIsImFsdCIsIm9uU3RvcCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/images/idcut.js\n");

/***/ })

});