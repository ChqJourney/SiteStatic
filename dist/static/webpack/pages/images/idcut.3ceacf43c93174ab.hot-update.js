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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IdCut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_dist_server_image_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/image-config */ \"./node_modules/next/dist/server/image-config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layouts/layout */ \"./components/layouts/layout.js\");\n/* harmony import */ var _components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tools/sizeBox */ \"./components/tools/sizeBox.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction IdCut(param) {\n    var menus = param.menus;\n    _s();\n    var imageToCut = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var cutRope = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(\"common\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        url: \"\",\n        naturalWidth: 0,\n        naturalHeight: 0,\n        width: 0,\n        height: 0\n    }), uploadedImage = ref[0], setUploadedImage = ref[1];\n    var handStop = function(e) {\n        var info = imageToCut.current.getBoundingClientRect();\n        console.log(uploadedImage);\n    };\n    var imageOnload = function(e) {\n        setUploadedImage(_objectSpread({\n        }, uploadedImage, {\n            naturalWidth: e.target.naturalWidth,\n            naturalHeight: e.target.naturalHeight,\n            width: e.target.width,\n            height: e.target.height\n        }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n    // setUploadedImage({...uploadedImage,url:'/assets/ipbox.png'})\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        menus: menus,\n        __source: {\n            fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto mt-10 flex-col flex max-w-7xl\",\n            __source: {\n                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"text-2xl font-medium text-gray-600 text-center\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"choose size\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"grid grid-cols-4 max-w-7xl gap-4 p-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_sizeBox__WEBPACK_IMPORTED_MODULE_6__.SizeBox, {\n                            title: \"1 inch\",\n                            description: \"25 mm x 35 mm\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"max-w-7xl px-10\",\n                    __source: {\n                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"static lg:flex bg-gray-200 rounded-md p-2\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white rounded-md flex-col mx-auto relative overflow-auto flex lg:w-3/12 items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            className: \"top-2\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"w-full h-full border border-gray-800\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: uploadedImage.url,\n                                                onLoad: imageOnload,\n                                                ref: imageToCut,\n                                                className: \"w-full h-full \".concat(uploadedImage.url ? \"\" : \"hidden\", \" z-10\"),\n                                                alt: \"uploaded image\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_draggable__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            onStop: handStop,\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                ref: cutRope,\n                                                className: \"border-dashed border \".concat(uploadedImage.url ? \"\" : \"hidden\", \" bg-transparent border-red-600 absolute z-30 rounded-sm  w-24 h-24\"),\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"absolute m-auto h-24 w-24 left-0 bottom-0 right-0 top-0 \".concat(uploadedImage.url ? \"hidden\" : \"\"),\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: 2,\n                                                d: \"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\",\n                                                __source: {\n                                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 19\n                                                },\n                                                __self: this\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            },\n                                            __self: this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                    __source: {\n                                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: this,\n                                                    children: \"click here to open image\"\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    type: \"file\",\n                                                    className: \"sr-only\",\n                                                    __source: {\n                                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 17\n                                                    },\n                                                    __self: this\n                                                })\n                                            ]\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"p-4 m-4 bg-white relative rounded-md mx-auto flex-col flex w-full lg:w-9/12 justify-center items-center\",\n                                    __source: {\n                                        fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"uploaded picture\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"border-dashed border relative rounded-sm border-gray-600 h-96 min-h-max min-w-full\",\n                                            __source: {\n                                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 15\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"text-center mt-10\",\n                            __source: {\n                                fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"w-3/12 h-12 border border-gray-500 rounded-2xl\",\n                                __source: {\n                                    fileName: \"/Users/chenhuanqin/Projects/photopro/pages/images/idcut.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Action\"\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(IdCut, \"X6GppPgaxSVZ8BPvUwdw0+wisco=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = IdCut;\nvar _c;\n$RefreshReg$(_c, \"IdCut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQW1COzs7Ozs7OzJHQUMvQndCLENBQU07Z0NBQUN4QixTQUFTLEVBQUMsQ0FBZ0Q7Ozs7Ozs7MENBQUMsQ0FFbkU7Ozs7Ozs7O0FBTVosQ0FBQztHQW5HdUJ0QixLQUFLOztRQUdqQlIsd0RBQWM7OztLQUhGUSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ltYWdlcy9pZGN1dC5qcz9hYmE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xuaW1wb3J0IHsgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyB9IGZyb20gXCJuZXh0LWkxOG5leHQvc2VydmVyU2lkZVRyYW5zbGF0aW9uc1wiO1xuaW1wb3J0IHsgaW1hZ2VDb25maWdEZWZhdWx0IH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2xheW91dFwiO1xuaW1wb3J0IHsgU2l6ZUJveCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rvb2xzL3NpemVCb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWRDdXQoeyBtZW51cyB9KSB7XG4gIGNvbnN0IGltYWdlVG9DdXQgPSB1c2VSZWYoKTtcbiAgY29uc3QgY3V0Um9wZSA9IHVzZVJlZigpO1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oXCJjb21tb25cIik7XG4gIGNvbnN0IFt1cGxvYWRlZEltYWdlLCBzZXRVcGxvYWRlZEltYWdlXSA9IHVzZVN0YXRlKHtcbiAgICB1cmw6IFwiXCIsXG4gICAgbmF0dXJhbFdpZHRoOiAwLFxuICAgIG5hdHVyYWxIZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9KTtcbiAgY29uc3QgaGFuZFN0b3AgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGluZm8gPSBpbWFnZVRvQ3V0LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc29sZS5sb2codXBsb2FkZWRJbWFnZSk7XG4gIH07XG4gIGNvbnN0IGltYWdlT25sb2FkID0gKGUpID0+IHtcbiAgICBzZXRVcGxvYWRlZEltYWdlKHtcbiAgICAgIC4uLnVwbG9hZGVkSW1hZ2UsXG4gICAgICBuYXR1cmFsV2lkdGg6IGUudGFyZ2V0Lm5hdHVyYWxXaWR0aCxcbiAgICAgIG5hdHVyYWxIZWlnaHQ6IGUudGFyZ2V0Lm5hdHVyYWxIZWlnaHQsXG4gICAgICB3aWR0aDogZS50YXJnZXQud2lkdGgsXG4gICAgICBoZWlnaHQ6IGUudGFyZ2V0LmhlaWdodCxcbiAgICB9KTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZXRVcGxvYWRlZEltYWdlKHsuLi51cGxvYWRlZEltYWdlLHVybDonL2Fzc2V0cy9pcGJveC5wbmcnfSlcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbWVudXM9e21lbnVzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtMTAgZmxleC1jb2wgZmxleCBtYXgtdy03eGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgY2hvb3NlIHNpemVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBtYXgtdy03eGwgZ2FwLTQgcC0xMFwiPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgICAgPFNpemVCb3ggdGl0bGU9e1wiMSBpbmNoXCJ9IGRlc2NyaXB0aW9uPXtcIjI1IG1tIHggMzUgbW1cIn0gLz5cbiAgICAgICAgICA8U2l6ZUJveCB0aXRsZT17XCIxIGluY2hcIn0gZGVzY3JpcHRpb249e1wiMjUgbW0geCAzNSBtbVwifSAvPlxuICAgICAgICAgIDxTaXplQm94IHRpdGxlPXtcIjEgaW5jaFwifSBkZXNjcmlwdGlvbj17XCIyNSBtbSB4IDM1IG1tXCJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBweC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljIGxnOmZsZXggYmctZ3JheS0yMDAgcm91bmRlZC1tZCBwLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG0tNCBiZy13aGl0ZSByb3VuZGVkLW1kIGZsZXgtY29sIG14LWF1dG8gcmVsYXRpdmUgb3ZlcmZsb3ctYXV0byBmbGV4ICBsZzp3LTMvMTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcC0yXCI+dXBsb2FkZWQgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e3VwbG9hZGVkSW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgb25Mb2FkPXtpbWFnZU9ubG9hZH1cbiAgICAgICAgICAgICAgICAgIHJlZj17aW1hZ2VUb0N1dH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLWZ1bGwgJHtcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkZWRJbWFnZS51cmwgPyBcIlwiIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgfSB6LTEwYH1cbiAgICAgICAgICAgICAgICAgIGFsdD1cInVwbG9hZGVkIGltYWdlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8RHJhZ2dhYmxlIG9uU3RvcD17aGFuZFN0b3B9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHJlZj17Y3V0Um9wZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci1kYXNoZWQgYm9yZGVyICR7XG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZGVkSW1hZ2UudXJsID8gXCJcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIH0gYmctdHJhbnNwYXJlbnQgYm9yZGVyLXJlZC02MDAgYWJzb2x1dGUgei0zMCByb3VuZGVkLXNtICB3LTI0IGgtMjRgfVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgbS1hdXRvIGgtMjQgdy0yNCBsZWZ0LTAgYm90dG9tLTAgcmlnaHQtMCB0b3AtMCAke3VwbG9hZGVkSW1hZ2UudXJsID8gXCJoaWRkZW5cIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNCAxNmw0LjU4Ni00LjU4NmEyIDIgMCAwMTIuODI4IDBMMTYgMTZtLTItMmwxLjU4Ni0xLjU4NmEyIDIgMCAwMTIuODI4IDBMMjAgMTRtLTYtNmguMDFNNiAyMGgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5jbGljayBoZXJlIHRvIG9wZW4gaW1hZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwic3Itb25seVwiLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbS00IGJnLXdoaXRlIHJlbGF0aXZlIHJvdW5kZWQtbWQgbXgtYXV0byBmbGV4LWNvbCBmbGV4IHctZnVsbCBsZzp3LTkvMTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxwPnVwbG9hZGVkIHBpY3R1cmU8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWRhc2hlZCBib3JkZXIgcmVsYXRpdmUgcm91bmRlZC1zbSBib3JkZXItZ3JheS02MDAgaC05NiBtaW4taC1tYXggIG1pbi13LWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTMvMTIgaC0xMiBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtMnhsXCI+XG4gICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBsb2NhbGUgfSkgPT4ge1xuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbiAgdmFyIGZpbGUgPSBhd2FpdCBmcy5yZWFkRmlsZVN5bmMoXCIuL1VzZXJzL3NpdGUuanNvblwiLCBcInV0Zi04XCIpO1xuXG4gIHZhciBqc09iaiA9IEpTT04ucGFyc2UoZmlsZSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIC4uLihhd2FpdCBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zKGxvY2FsZSwgW1wiY29tbW9uXCIsIFwiZm9vdGVyXCIsIFwiaGVhZGVyXCJdKSksXG4gICAgICBtZW51czoganNPYmosXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkRyYWdnYWJsZSIsIkxheW91dCIsIlNpemVCb3giLCJJZEN1dCIsIm1lbnVzIiwiaW1hZ2VUb0N1dCIsImN1dFJvcGUiLCJ0IiwidXJsIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwidXBsb2FkZWRJbWFnZSIsInNldFVwbG9hZGVkSW1hZ2UiLCJoYW5kU3RvcCIsImUiLCJpbmZvIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZU9ubG9hZCIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwIiwiaW1nIiwic3JjIiwib25Mb2FkIiwicmVmIiwiYWx0Iiwib25TdG9wIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJsYWJlbCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/images/idcut.js\n");

/***/ })

});