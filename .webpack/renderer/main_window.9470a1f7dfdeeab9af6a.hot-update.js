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

/***/ "./src/reducers/subjectReducer/subjectReducer.ts":
/*!*******************************************************!*\
  !*** ./src/reducers/subjectReducer/subjectReducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subjectReducer\": () => (/* binding */ subjectReducer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _subjectTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjectTypes */ \"./src/reducers/subjectReducer/subjectTypes.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar initialState = {\n  subjects: []\n};\nvar subjectReducer = function subjectReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _subjectTypes__WEBPACK_IMPORTED_MODULE_1__.UPDATE_SUBJECTS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        subjects: action.subjects\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvc3ViamVjdFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQSxJQUFNQyxZQUFpQyxHQUFHO0FBQ3hDQyxFQUFBQSxRQUFRLEVBQUU7QUFEOEIsQ0FBMUM7QUFJTyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBR0o7QUFBQSxNQUZ4QkMsS0FFd0IsdUVBRktILFlBRUw7QUFBQSxNQUR4QkksTUFDd0I7O0FBQ3hCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtOLDBEQUFMO0FBQ0UsNkNBQ0tJLEtBREw7QUFFRUYsUUFBQUEsUUFBUSxFQUFFRyxNQUFNLENBQUNIO0FBRm5COztBQUlGO0FBQ0UsYUFBT0UsS0FBUDtBQVBKO0FBU0QsQ0FiTSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQvLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvc3ViamVjdFJlZHVjZXIudHM/MTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJU3ViamVjdFJlZHVjZXJUeXBlLFxuICBTdWJqZWN0U3RvcmVBY3Rpb24sXG4gIFVQREFURV9TVUJKRUNUUyxcbn0gZnJvbSAnLi9zdWJqZWN0VHlwZXMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVN1YmplY3RSZWR1Y2VyVHlwZSA9IHtcbiAgc3ViamVjdHM6IFtdLFxufVxuXG5leHBvcnQgY29uc3Qgc3ViamVjdFJlZHVjZXIgPSAoXG4gIHN0YXRlOiBJU3ViamVjdFJlZHVjZXJUeXBlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFN1YmplY3RTdG9yZUFjdGlvblxuKTogSVN1YmplY3RSZWR1Y2VyVHlwZSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVQREFURV9TVUJKRUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWJqZWN0czogYWN0aW9uLnN1YmplY3RzLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlVQREFURV9TVUJKRUNUUyIsImluaXRpYWxTdGF0ZSIsInN1YmplY3RzIiwic3ViamVjdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/subjectReducer/subjectReducer.ts\n");

/***/ }),

/***/ "./src/reducers/subjectReducer/subjectTypes.ts":
/*!*****************************************************!*\
  !*** ./src/reducers/subjectReducer/subjectTypes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UPDATE_SUBJECTS\": () => (/* binding */ UPDATE_SUBJECTS)\n/* harmony export */ });\nvar UPDATE_SUBJECTS = \"UPDATE_SUBJECTS\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvc3ViamVjdFR5cGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxJQUFNQSxlQUFlLG9CQUFyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQvLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvc3ViamVjdFR5cGVzLnRzPzI1YmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVQREFURV9TVUJKRUNUUyA9IGBVUERBVEVfU1VCSkVDVFNgXG5cbmV4cG9ydCB0eXBlIFN1YmplY3RTdG9yZUFjdGlvbiA9IHtcbiAgdHlwZTogc3RyaW5nXG4gIHN1YmplY3RzOiBzdWJqZWN0VHlwZVtdXG59XG5cbmV4cG9ydCB0eXBlIHN1YmplY3RUeXBlID0ge1xuICBzdWJqZWN0SWQ6IG51bWJlclxuICBuYW1lOiBzdHJpbmdcbiAgd2VpZ2h0OiBudW1iZXJcbiAgYW5ub3RhdGlvbnM6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWJqZWN0UmVkdWNlclR5cGUge1xuICBzdWJqZWN0czogc3ViamVjdFR5cGVbXVxufVxuIl0sIm5hbWVzIjpbIlVQREFURV9TVUJKRUNUUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/subjectReducer/subjectTypes.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f236ecaf7285d909ec86")
/******/ })();
/******/ 
/******/ }
);