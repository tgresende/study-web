"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectron_react_typescript"]("main_window",{

/***/ "./src/utils/api/connection.ts":
/*!*************************************!*\
  !*** ./src/utils/api/connection.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"httpGet\": () => (/* binding */ httpGet)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n //const axios = require('axios')\n\nvar header = {\n  'Content-Type': 'application/json'\n};\nfunction httpGet(_x) {\n  return _httpGet.apply(this, arguments);\n}\n\nfunction _httpGet() {\n  _httpGet = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n    var data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, header)[\"catch\"](function (error) {\n              throw new Error(error.message);\n            });\n\n          case 2:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _httpGet.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpL2Nvbm5lY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQSxJQUFNQyxNQUEyQixHQUFHO0FBQ2xDLGtCQUFnQjtBQURrQixDQUFwQztBQUlPLFNBQWVDLE9BQXRCO0FBQUE7QUFBQTs7O3NMQUFPLGlCQUF1QkMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDY0gsZ0RBQUEsQ0FBVUcsR0FBVixFQUFlRixNQUFmLFdBQTZCLFVBQUFJLEtBQUssRUFBSTtBQUN2RCxvQkFBTSxJQUFJQyxLQUFKLENBQVVELEtBQUssQ0FBQ0UsT0FBaEIsQ0FBTjtBQUNELGFBRmtCLENBRGQ7O0FBQUE7QUFDQ0MsWUFBQUEsSUFERDtBQUFBLDZDQUlFQSxJQUpGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC8uL3NyYy91dGlscy9hcGkvY29ubmVjdGlvbi50cz80OGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RIZWFkZXJzLCBBeGlvc1Jlc3BvbnNlSGVhZGVycyB9IGZyb20gJ2F4aW9zJ1xuLy9jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuY29uc3QgaGVhZGVyOiBBeGlvc1JlcXVlc3RIZWFkZXJzID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaHR0cEdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQodXJsLCBoZWFkZXIpLmNhdGNoKGVycm9yID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgfSlcbiAgcmV0dXJuIGRhdGFcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhlYWRlciIsImh0dHBHZXQiLCJ1cmwiLCJnZXQiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/api/connection.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e9bc3adb0c61989fda6b")
/******/ })();
/******/ 
/******/ }
);