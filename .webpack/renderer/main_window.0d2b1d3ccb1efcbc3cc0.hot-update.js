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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subjectReducer\": () => (/* binding */ subjectReducer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './actionTypes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar initialState = {\n  subjects: []\n};\nvar subjectReducer = function subjectReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './actionTypes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):\n      return _objectSpread(_objectSpread({}, state), {}, {\n        subjects: action.subjects\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvc3ViamVjdFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQSxJQUFNQyxZQUFpQyxHQUFHO0FBQ3hDQyxFQUFBQSxRQUFRLEVBQUU7QUFEOEIsQ0FBMUM7QUFJTyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBR0o7QUFBQSxNQUZ4QkMsS0FFd0IsdUVBRktILFlBRUw7QUFBQSxNQUR4QkksTUFDd0I7O0FBQ3hCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtOLDRJQUFMO0FBQ0UsNkNBQ0tJLEtBREw7QUFFRUYsUUFBQUEsUUFBUSxFQUFFRyxNQUFNLENBQUNIO0FBRm5COztBQUlGO0FBQ0UsYUFBT0UsS0FBUDtBQVBKO0FBU0QsQ0FiTSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQvLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvc3ViamVjdFJlZHVjZXIudHM/MTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJU3ViamVjdFJlZHVjZXJUeXBlLFxuICBTdWJqZWN0U3RvcmVBY3Rpb24sXG4gIFVQREFURV9TVUJKRUNUUyxcbn0gZnJvbSAnLi9hY3Rpb25UeXBlcydcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJU3ViamVjdFJlZHVjZXJUeXBlID0ge1xuICBzdWJqZWN0czogW10sXG59XG5cbmV4cG9ydCBjb25zdCBzdWJqZWN0UmVkdWNlciA9IChcbiAgc3RhdGU6IElTdWJqZWN0UmVkdWNlclR5cGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogU3ViamVjdFN0b3JlQWN0aW9uXG4pOiBJU3ViamVjdFJlZHVjZXJUeXBlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVVBEQVRFX1NVQkpFQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN1YmplY3RzOiBhY3Rpb24uc3ViamVjdHMsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG4iXSwibmFtZXMiOlsiVVBEQVRFX1NVQkpFQ1RTIiwiaW5pdGlhbFN0YXRlIiwic3ViamVjdHMiLCJzdWJqZWN0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/subjectReducer/subjectReducer.ts\n");

/***/ }),

/***/ "./src/reducers/subjectReducer/useSubjectReducer.ts":
/*!**********************************************************!*\
  !*** ./src/reducers/subjectReducer/useSubjectReducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useSubjectReducer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './actionTypes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nfunction useSubjectReducer(dispatch) {\n  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;\n  var subjects = selector(function (state) {\n    return state.subjectState.subjects;\n  });\n\n  var addSubject = function addSubject(subject) {\n    dispatch({\n      type: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './actionTypes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n      subjects: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subjects), [subject])\n    });\n  };\n\n  return {\n    subjects: subjects,\n    addSubject: addSubject\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvdXNlU3ViamVjdFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0UsaUJBQVQsQ0FDYkMsUUFEYSxFQUdiO0FBQUEsTUFEQUMsUUFDQSx1RUFEV0osb0RBQ1g7QUFDQSxNQUFNSyxRQUFRLEdBQUdELFFBQVEsQ0FDdkIsVUFBQUUsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkYsUUFBdkI7QUFBQSxHQURrQixDQUF6Qjs7QUFJQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQTBCO0FBQzNDTixJQUFBQSxRQUFRLENBQUM7QUFDUE8sTUFBQUEsSUFBSSxFQUFFVCw0SUFEQztBQUVQSSxNQUFBQSxRQUFRLGlHQUFNQSxRQUFOLElBQWdCSSxPQUFoQjtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7O0FBT0EsU0FBTztBQUFFSixJQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUcsSUFBQUEsVUFBVSxFQUFWQTtBQUFaLEdBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQvLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvdXNlU3ViamVjdFJlZHVjZXIudHM/NzllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIElSb290U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSdcbmltcG9ydCB7IHN1YmplY3RUeXBlLCBVUERBVEVfU1VCSkVDVFMgfSBmcm9tICcuL2FjdGlvblR5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTdWJqZWN0UmVkdWNlcihcbiAgZGlzcGF0Y2g6IEFwcERpc3BhdGNoLFxuICBzZWxlY3RvciA9IHVzZVNlbGVjdG9yXG4pIHtcbiAgY29uc3Qgc3ViamVjdHMgPSBzZWxlY3RvcjxJUm9vdFN0YXRlLCBzdWJqZWN0VHlwZVtdPihcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zdWJqZWN0U3RhdGUuc3ViamVjdHNcbiAgKVxuXG4gIGNvbnN0IGFkZFN1YmplY3QgPSAoc3ViamVjdDogc3ViamVjdFR5cGUpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVUERBVEVfU1VCSkVDVFMsXG4gICAgICBzdWJqZWN0czogWy4uLnN1YmplY3RzLCBzdWJqZWN0XSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHsgc3ViamVjdHMsIGFkZFN1YmplY3QgfVxufVxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwiVVBEQVRFX1NVQkpFQ1RTIiwidXNlU3ViamVjdFJlZHVjZXIiLCJkaXNwYXRjaCIsInNlbGVjdG9yIiwic3ViamVjdHMiLCJzdGF0ZSIsInN1YmplY3RTdGF0ZSIsImFkZFN1YmplY3QiLCJzdWJqZWN0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/subjectReducer/useSubjectReducer.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef033f7881fa5a368e80")
/******/ })();
/******/ 
/******/ }
);