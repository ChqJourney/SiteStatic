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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IdCut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_dist_server_image_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/image-config */ \"./node_modules/next/dist/server/image-config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layouts/layout */ \"./components/layouts/layout.js\");\n/* harmony import */ var _components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tools/sizeBox */ \"./components/tools/sizeBox.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction IdCut(param) {\n    var menus = param.menus;\n    _s();\n    var imageToCut = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var cutRope = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(\"common\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        url: \"\",\n        naturalWidth: 0,\n        naturalHeight: 0,\n        width: 0,\n        height: 0\n    }), uploadedImage = ref[0], setUploadedImage = ref[1];\n    var handStop = function(e) {\n        var info = imageToCut.current.getBoundingClientRect();\n        console.log(uploadedImage);\n    };\n    var imageOnload = function(e) {\n        setUploadedImage(_objectSpread({\n        }, uploadedImage, {\n            naturalWidth: e.target.naturalWidth,\n            naturalHeight: e.target.naturalHeight,\n            width: e.target.width,\n            height: e.target.height\n        }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n    // setUploadedImage({...uploadedImage,url:'/assets/ipbox.png'})\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        menus: menus,\n        __source: {\n            fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto mt-10 flex-col flex max-w-7xl\",\n            __source: {\n                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-2xl font-medium text-gray-600 text-center\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"choose size\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"grid grid-cols-4 max-w-7xl gap-4 p-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"max-w-7xl px-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"static lg:flex bg-gray-200 rounded-md p-2\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white rounded-md flex-col mx-auto relative overflow-auto flex lg:w-3/12 items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            className: \"top-2\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"w-full h-full border border-gray-800\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: uploadedImage.url,\n                                                onLoad: imageOnload,\n                                                ref: imageToCut,\n                                                className: \"w-full h-full \".concat(uploadedImage.url ? \"\" : \"hidden\", \" z-10\"),\n                                                alt: \"uploaded image\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_draggable__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            onStop: handStop,\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                ref: cutRope,\n                                                className: \"border-dashed border \".concat(uploadedImage.url ? \"\" : \"hidden\", \" bg-transparent border-red-600 absolute z-30 rounded-sm  w-24 h-24\"),\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n                                            className: \"absolute cursor-pointer m-auto left-0 right-0 top-1/4 text-center\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            },\n                                            __self: this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    className: \"h-24 w-24\",\n                                                    fill: \"none\",\n                                                    viewBox: \"0 0 24 24\",\n                                                    stroke: \"currentColor\",\n                                                    __source: {\n                                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                                        strokeLinecap: \"round\",\n                                                        strokeLinejoin: \"round\",\n                                                        strokeWidth: 2,\n                                                        d: \"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\",\n                                                        __source: {\n                                                            fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: this\n                                                    })\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                    __source: {\n                                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: this,\n                                                    children: \"click here to open images\"\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    type: \"file\",\n                                                    className: \" sr-only\",\n                                                    __source: {\n                                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: this\n                                                })\n                                            ]\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white relative rounded-md mx-auto flex-col flex w-full lg:w-9/12 justify-center items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"border-dashed border relative rounded-sm border-gray-600 h-96 min-h-max min-w-full\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"text-center mt-10\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"w-3/12 h-12 border border-gray-500 rounded-2xl\",\n                                __source: {\n                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Action\"\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(IdCut, \"X6GppPgaxSVZ8BPvUwdw0+wisco=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = IdCut;\nvar _c;\n$RefreshReg$(_c, \"IdCut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbWFnZXMvaWRjdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE4Qyw2Q0FDRDtBQUVxQjtBQUNmO0FBQ1o7QUFDYTtBQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxRQUFRLENBQUNRLEtBQUssQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFWQyxLQUFLLEdBQVAsS0FBUyxDQUFQQSxLQUFLOztJQUNuQyxHQUFLLENBQUNDLFVBQVUsR0FBR1AsNkNBQU07SUFDekIsR0FBSyxDQUFDUSxPQUFPLEdBQUdSLDZDQUFNO0lBQ3RCLEdBQUssQ0FBQ1MsQ0FBQyxHQUFHWiw0REFBYyxDQUFDLENBQVE7SUFDakMsR0FBSyxDQUFxQ0ksR0FNeEMsR0FOd0NBLCtDQUFRLENBQUMsQ0FBQztRQUNsRFMsR0FBRyxFQUFFLENBQUU7UUFDUEMsWUFBWSxFQUFFLENBQUM7UUFDZkMsYUFBYSxFQUFFLENBQUM7UUFDaEJDLEtBQUssRUFBRSxDQUFDO1FBQ1JDLE1BQU0sRUFBRSxDQUFDO0lBQ1gsQ0FBQyxHQU5NQyxhQUFhLEdBQXNCZCxHQU14QyxLQU5vQmUsZ0JBQWdCLEdBQUlmLEdBTXhDO0lBQ0YsR0FBSyxDQUFDZ0IsUUFBUSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDdkIsR0FBSyxDQUFDQyxJQUFJLEdBQUdaLFVBQVUsQ0FBQ2EsT0FBTyxDQUFDQyxxQkFBcUI7UUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixhQUFhO0lBQzNCLENBQUM7SUFDRCxHQUFLLENBQUNTLFdBQVcsR0FBRyxRQUFRLENBQVBOLENBQUMsRUFBSyxDQUFDO1FBQzFCRixnQkFBZ0I7V0FDWEQsYUFBYTtZQUNoQkosWUFBWSxFQUFFTyxDQUFDLENBQUNPLE1BQU0sQ0FBQ2QsWUFBWTtZQUNuQ0MsYUFBYSxFQUFFTSxDQUFDLENBQUNPLE1BQU0sQ0FBQ2IsYUFBYTtZQUNyQ0MsS0FBSyxFQUFFSyxDQUFDLENBQUNPLE1BQU0sQ0FBQ1osS0FBSztZQUNyQkMsTUFBTSxFQUFFSSxDQUFDLENBQUNPLE1BQU0sQ0FBQ1gsTUFBTTs7SUFFM0IsQ0FBQztJQUNEZixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztJQUNmLEVBQStEO0lBQ2pFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHNFQUNISSxrRUFBTTtRQUFDRyxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7d0ZBQ2pCb0IsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBaUQ7Ozs7Ozs7O3FGQUM3REQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQWdEOzs7Ozs7OzhCQUFDLENBRWhFOztzRkFDQ0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXVDOzs7Ozs7Ozs2RkFDbkR2Qiw4REFBTzs0QkFBQ3dCLEtBQUssRUFBRSxDQUFROzRCQUFFQyxXQUFXLEVBQUUsQ0FBZTs7Ozs7Ozs7NkZBQ3JEekIsOERBQU87NEJBQUN3QixLQUFLLEVBQUUsQ0FBUTs0QkFBRUMsV0FBVyxFQUFFLENBQWU7Ozs7Ozs7OzZGQUNyRHpCLDhEQUFPOzRCQUFDd0IsS0FBSyxFQUFFLENBQVE7NEJBQUVDLFdBQVcsRUFBRSxDQUFlOzs7Ozs7Ozs2RkFDckR6Qiw4REFBTzs0QkFBQ3dCLEtBQUssRUFBRSxDQUFROzRCQUFFQyxXQUFXLEVBQUUsQ0FBZTs7Ozs7Ozs7OztzRkFFdkRILENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFpQjs7Ozs7Ozs7OEZBQzdCRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBMkM7Ozs7Ozs7O3NHQUN2REQsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQWtHOzs7Ozs7Ozs2R0FDOUdHLENBQUM7NENBQUNILFNBQVMsRUFBQyxDQUFPOzs7Ozs7O3NEQUFDLENBQWdCOzs2R0FDcENELENBQUc7NENBQUNDLFNBQVMsRUFBQyxDQUFzQzs7Ozs7OzsySEFDbERJLENBQUc7Z0RBQ0ZDLEdBQUcsRUFBRWpCLGFBQWEsQ0FBQ0wsR0FBRztnREFDdEJ1QixNQUFNLEVBQUVULFdBQVc7Z0RBQ25CVSxHQUFHLEVBQUUzQixVQUFVO2dEQUNmb0IsU0FBUyxFQUFHLENBQWMsZ0JBRXpCLE1BQUssQ0FESlosYUFBYSxDQUFDTCxHQUFHLEdBQUcsQ0FBRSxJQUFHLENBQVEsU0FDbEMsQ0FBSztnREFDTnlCLEdBQUcsRUFBQyxDQUFnQjs7Ozs7Ozs7OzZHQUl2QmpDLHdEQUFTOzRDQUFDa0MsTUFBTSxFQUFFbkIsUUFBUTs7Ozs7OzsySEFDeEJTLENBQUc7Z0RBQ0ZRLEdBQUcsRUFBRTFCLE9BQU87Z0RBQ1ptQixTQUFTLEVBQUcsQ0FBcUIsdUJBRWhDLE1BQWtFLENBRGpFWixhQUFhLENBQUNMLEdBQUcsR0FBRyxDQUFFLElBQUcsQ0FBUSxTQUNsQyxDQUFrRTs7Ozs7Ozs7OzhHQUlwRTJCLENBQUs7NENBQUNWLFNBQVMsRUFBRSxDQUFtRTs7Ozs7Ozs7cUhBQ3BGVyxDQUFHO29EQUNGQyxLQUFLLEVBQUMsQ0FBNEI7b0RBQ2xDWixTQUFTLEVBQUMsQ0FBVztvREFDckJhLElBQUksRUFBQyxDQUFNO29EQUNYQyxPQUFPLEVBQUMsQ0FBVztvREFDbkJDLE1BQU0sRUFBQyxDQUFjOzs7Ozs7O21JQUVwQkMsQ0FBSTt3REFDSEMsYUFBYSxFQUFDLENBQU87d0RBQ3JCQyxjQUFjLEVBQUMsQ0FBTzt3REFDdEJDLFdBQVcsRUFBRSxDQUFDO3dEQUNkQyxDQUFDLEVBQUMsQ0FBMko7Ozs7Ozs7OztxSEFHOUpDLENBQUk7Ozs7Ozs7OERBQUMsQ0FBeUI7O3FIQUNoQ0MsQ0FBSztvREFBQ0MsSUFBSSxFQUFDLENBQU07b0RBQUN2QixTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7Ozs7O3NHQUkxQ0QsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQXlHOzs7Ozs7Ozs2R0FDckhHLENBQUM7Ozs7Ozs7c0RBQUMsQ0FBZ0I7OzZHQUNsQkosQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLENBQXFGOzs7Ozs7Ozs7Ozs7NkZBSXZHRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7MkdBQy9Cd0IsQ0FBTTtnQ0FBQ3hCLFNBQVMsRUFBQyxDQUFnRDs7Ozs7OzswQ0FBQyxDQUVuRTs7Ozs7Ozs7QUFNWixDQUFDO0dBbkd1QnRCLEtBQUs7O1FBR2pCUix3REFBYzs7O0tBSEZRLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1hZ2VzL2lkY3V0LmpzP2FiYTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XG5pbXBvcnQgeyBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zIH0gZnJvbSBcIm5leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zXCI7XG5pbXBvcnQgeyBpbWFnZUNvbmZpZ0RlZmF1bHQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBTaXplQm94IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9vbHMvc2l6ZUJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJZEN1dCh7IG1lbnVzIH0pIHtcbiAgY29uc3QgaW1hZ2VUb0N1dCA9IHVzZVJlZigpO1xuICBjb25zdCBjdXRSb3BlID0gdXNlUmVmKCk7XG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihcImNvbW1vblwiKTtcbiAgY29uc3QgW3VwbG9hZGVkSW1hZ2UsIHNldFVwbG9hZGVkSW1hZ2VdID0gdXNlU3RhdGUoe1xuICAgIHVybDogXCJcIixcbiAgICBuYXR1cmFsV2lkdGg6IDAsXG4gICAgbmF0dXJhbEhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH0pO1xuICBjb25zdCBoYW5kU3RvcCA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5mbyA9IGltYWdlVG9DdXQuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zb2xlLmxvZyh1cGxvYWRlZEltYWdlKTtcbiAgfTtcbiAgY29uc3QgaW1hZ2VPbmxvYWQgPSAoZSkgPT4ge1xuICAgIHNldFVwbG9hZGVkSW1hZ2Uoe1xuICAgICAgLi4udXBsb2FkZWRJbWFnZSxcbiAgICAgIG5hdHVyYWxXaWR0aDogZS50YXJnZXQubmF0dXJhbFdpZHRoLFxuICAgICAgbmF0dXJhbEhlaWdodDogZS50YXJnZXQubmF0dXJhbEhlaWdodCxcbiAgICAgIHdpZHRoOiBlLnRhcmdldC53aWR0aCxcbiAgICAgIGhlaWdodDogZS50YXJnZXQuaGVpZ2h0LFxuICAgIH0pO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNldFVwbG9hZGVkSW1hZ2Uoey4uLnVwbG9hZGVkSW1hZ2UsdXJsOicvYXNzZXRzL2lwYm94LnBuZyd9KVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBtZW51cz17bWVudXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC0xMCBmbGV4LWNvbCBmbGV4IG1heC13LTd4bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBjaG9vc2Ugc2l6ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IG1heC13LTd4bCBnYXAtNCBwLTEwXCI+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgICA8U2l6ZUJveCB0aXRsZT17XCIxIGluY2hcIn0gZGVzY3JpcHRpb249e1wiMjUgbW0geCAzNSBtbVwifSAvPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIHB4LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMgbGc6ZmxleCBiZy1ncmF5LTIwMCByb3VuZGVkLW1kIHAtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbS00IGJnLXdoaXRlIHJvdW5kZWQtbWQgZmxleC1jb2wgbXgtYXV0byByZWxhdGl2ZSBvdmVyZmxvdy1hdXRvIGZsZXggIGxnOnctMy8xMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9wLTJcIj51cGxvYWRlZCBwaWN0dXJlPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17dXBsb2FkZWRJbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICBvbkxvYWQ9e2ltYWdlT25sb2FkfVxuICAgICAgICAgICAgICAgICAgcmVmPXtpbWFnZVRvQ3V0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZnVsbCAke1xuICAgICAgICAgICAgICAgICAgICB1cGxvYWRlZEltYWdlLnVybCA/IFwiXCIgOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICB9IHotMTBgfVxuICAgICAgICAgICAgICAgICAgYWx0PVwidXBsb2FkZWQgaW1hZ2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxEcmFnZ2FibGUgb25TdG9wPXtoYW5kU3RvcH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgcmVmPXtjdXRSb3BlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLWRhc2hlZCBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkZWRJbWFnZS51cmwgPyBcIlwiIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgfSBiZy10cmFuc3BhcmVudCBib3JkZXItcmVkLTYwMCBhYnNvbHV0ZSB6LTMwIHJvdW5kZWQtc20gIHctMjQgaC0yNGB9XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17XCJhYnNvbHV0ZSBjdXJzb3ItcG9pbnRlciBtLWF1dG8gbGVmdC0wIHJpZ2h0LTAgdG9wLTEvNCB0ZXh0LWNlbnRlclwifT5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjQgdy0yNFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQgMTZsNC41ODYtNC41ODZhMiAyIDAgMDEyLjgyOCAwTDE2IDE2bS0yLTJsMS41ODYtMS41ODZhMiAyIDAgMDEyLjgyOCAwTDIwIDE0bS02LTZoLjAxTTYgMjBoMTJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5jbGljayBoZXJlIHRvIG9wZW4gaW1hZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cIiBzci1vbmx5XCIvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtLTQgYmctd2hpdGUgcmVsYXRpdmUgcm91bmRlZC1tZCBteC1hdXRvIGZsZXgtY29sIGZsZXggdy1mdWxsIGxnOnctOS8xMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHA+dXBsb2FkZWQgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItZGFzaGVkIGJvcmRlciByZWxhdGl2ZSByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTYwMCBoLTk2IG1pbi1oLW1heCAgbWluLXctZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMy8xMiBoLTEyIGJvcmRlciBib3JkZXItZ3JheS01MDAgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgICAgQWN0aW9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IGxvY2FsZSB9KSA9PiB7XG4gIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuICB2YXIgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlU3luYyhcIi4vVXNlcnMvc2l0ZS5qc29uXCIsIFwidXRmLThcIik7XG5cbiAgdmFyIGpzT2JqID0gSlNPTi5wYXJzZShmaWxlKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgLi4uKGF3YWl0IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMobG9jYWxlLCBbXCJjb21tb25cIiwgXCJmb290ZXJcIiwgXCJoZWFkZXJcIl0pKSxcbiAgICAgIG1lbnVzOiBqc09iaixcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbiIsImltYWdlQ29uZmlnRGVmYXVsdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRHJhZ2dhYmxlIiwiTGF5b3V0IiwiU2l6ZUJveCIsIklkQ3V0IiwibWVudXMiLCJpbWFnZVRvQ3V0IiwiY3V0Um9wZSIsInQiLCJ1cmwiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1cGxvYWRlZEltYWdlIiwic2V0VXBsb2FkZWRJbWFnZSIsImhhbmRTdG9wIiwiZSIsImluZm8iLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY29uc29sZSIsImxvZyIsImltYWdlT25sb2FkIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInAiLCJpbWciLCJzcmMiLCJvbkxvYWQiLCJyZWYiLCJhbHQiLCJvblN0b3AiLCJsYWJlbCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsImlucHV0IiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/images/idcut.js\n");

/***/ })

});