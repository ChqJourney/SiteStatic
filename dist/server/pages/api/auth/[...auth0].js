"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...auth0]";
exports.ids = ["pages/api/auth/[...auth0]"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "./pages/api/auth/[...auth0].js":
/*!**************************************!*\
  !*** ./pages/api/auth/[...auth0].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth0 */ \"./pages/api/auth/auth0.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"].handleAuth({\n    async login (req, res) {\n        try {\n            await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleLogin)(req, res, {\n                authorizationParams: {\n                    audience: 'https://47.104.61.109/api',\n                    // Add the `offline_access` scope to also get a Refresh Token\n                    scope: 'openid profile email offline_access read:post write:post' // or AUTH0_SCOPE\n                }\n            });\n            console.log('login done');\n        } catch (error) {\n            res.status(error.status || 400).end(error.message);\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4uYXV0aDBdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEQ7QUFDakM7QUFFM0IsaUVBQWVFLHlEQUFnQixDQUFDLENBQUM7VUFDdkJDLEtBQUssRUFBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ0osZ0VBQVcsQ0FBQ0csR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztnQkFDM0JDLG1CQUFtQixFQUFFLENBQUM7b0JBQ3BCQyxRQUFRLEVBQUUsQ0FBMkI7b0JBQ3JDLEVBQTZEO29CQUM3REMsS0FBSyxFQUFFLENBQTBELHlEQUFDLENBQWlCO2dCQUNyRixDQUFDO1lBQ0gsQ0FBQztZQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFZO1FBQzFCLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1lBQ2ZOLEdBQUcsQ0FBQ08sTUFBTSxDQUFDRCxLQUFLLENBQUNDLE1BQU0sSUFBSSxHQUFHLEVBQUVDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDRyxPQUFPO1FBQ25ELENBQUM7SUFDSCxDQUFDO0FBQ1AsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b3Byby8uL3BhZ2VzL2FwaS9hdXRoL1suLi5hdXRoMF0uanM/NTQ1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBdXRoLGhhbmRsZUxvZ2luIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XG5pbXBvcnQgYXV0aDAgZnJvbSAnLi9hdXRoMCdcblxuZXhwb3J0IGRlZmF1bHQgYXV0aDAuaGFuZGxlQXV0aCh7XG4gICAgYXN5bmMgbG9naW4ocmVxLCByZXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBoYW5kbGVMb2dpbihyZXEsIHJlcywge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvblBhcmFtczoge1xuICAgICAgICAgICAgICBhdWRpZW5jZTogJ2h0dHBzOi8vNDcuMTA0LjYxLjEwOS9hcGknLCAvLyBvciBBVVRIMF9BVURJRU5DRVxuICAgICAgICAgICAgICAvLyBBZGQgdGhlIGBvZmZsaW5lX2FjY2Vzc2Agc2NvcGUgdG8gYWxzbyBnZXQgYSBSZWZyZXNoIFRva2VuXG4gICAgICAgICAgICAgIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MgcmVhZDpwb3N0IHdyaXRlOnBvc3QnIC8vIG9yIEFVVEgwX1NDT1BFXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGRvbmUnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDQwMCkuZW5kKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG59KTtcblxuIl0sIm5hbWVzIjpbImhhbmRsZUF1dGgiLCJoYW5kbGVMb2dpbiIsImF1dGgwIiwibG9naW4iLCJyZXEiLCJyZXMiLCJhdXRob3JpemF0aW9uUGFyYW1zIiwiYXVkaWVuY2UiLCJzY29wZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0YXR1cyIsImVuZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...auth0].js\n");

/***/ }),

/***/ "./pages/api/auth/auth0.js":
/*!*********************************!*\
  !*** ./pages/api/auth/auth0.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.initAuth0)({\n    secret: '3b15bf635411f7f50b24eaf26d6a636487940d4498c364d7f258c3e034e1a612',\n    issuerBaseURL: 'https://photonee.us.auth0.com',\n    baseURL: 'http://localhost:3000',\n    clientID: 'MFSnTZzpvxl31X9ZxoyXm1EloKM8CSXu',\n    clientSecret: 'ztk9E-v_Uh4eDS0dW32rztlMkwxbSGMWV24PZ58lc3bXlLCVdg_cVgRyVetbj1s7',\n    authorizationParams: {\n        response_type: 'code id_token',\n        scope: 'openid profile read:post write:post'\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9hdXRoMC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsaUVBQWVBLDhEQUFTLENBQUMsQ0FBQztJQUN4QkMsTUFBTSxFQUFFLENBQWtFO0lBQzFFQyxhQUFhLEVBQUUsQ0FBK0I7SUFDOUNDLE9BQU8sRUFBRSxDQUF1QjtJQUNoQ0MsUUFBUSxFQUFFLENBQWtDO0lBQzVDQyxZQUFZLEVBQUUsQ0FBa0U7SUFDaEZDLG1CQUFtQixFQUFDLENBQUM7UUFDakJDLGFBQWEsRUFBQyxDQUFlO1FBQzdCQyxLQUFLLEVBQUMsQ0FBcUM7SUFDL0MsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG9wcm8vLi9wYWdlcy9hcGkvYXV0aC9hdXRoMC5qcz84N2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xuICBzZWNyZXQ6ICczYjE1YmY2MzU0MTFmN2Y1MGIyNGVhZjI2ZDZhNjM2NDg3OTQwZDQ0OThjMzY0ZDdmMjU4YzNlMDM0ZTFhNjEyJyxcbiAgaXNzdWVyQmFzZVVSTDogJ2h0dHBzOi8vcGhvdG9uZWUudXMuYXV0aDAuY29tJyxcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gIGNsaWVudElEOiAnTUZTblRaenB2eGwzMVg5WnhveVhtMUVsb0tNOENTWHUnLFxuICBjbGllbnRTZWNyZXQ6ICd6dGs5RS12X1VoNGVEUzBkVzMycnp0bE1rd3hiU0dNV1YyNFBaNThsYzNiWGxMQ1ZkZ19jVmdSeVZldGJqMXM3JyxcbiAgYXV0aG9yaXphdGlvblBhcmFtczp7XG4gICAgICByZXNwb25zZV90eXBlOidjb2RlIGlkX3Rva2VuJyxcbiAgICAgIHNjb3BlOidvcGVuaWQgcHJvZmlsZSByZWFkOnBvc3Qgd3JpdGU6cG9zdCdcbiAgfVxufSk7Il0sIm5hbWVzIjpbImluaXRBdXRoMCIsInNlY3JldCIsImlzc3VlckJhc2VVUkwiLCJiYXNlVVJMIiwiY2xpZW50SUQiLCJjbGllbnRTZWNyZXQiLCJhdXRob3JpemF0aW9uUGFyYW1zIiwicmVzcG9uc2VfdHlwZSIsInNjb3BlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/auth0.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...auth0].js"));
module.exports = __webpack_exports__;

})();