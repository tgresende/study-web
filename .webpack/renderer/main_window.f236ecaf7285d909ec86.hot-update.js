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

/***/ "./src/reducers/subjectReducer/useSubjectReducer.ts":
/*!**********************************************************!*\
  !*** ./src/reducers/subjectReducer/useSubjectReducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useSubjectReducer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _subjectTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjectTypes */ \"./src/reducers/subjectReducer/subjectTypes.ts\");\n\n\n\nfunction useSubjectReducer(dispatch) {\n  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;\n  var subjects = selector(function (state) {\n    return state.subjectState.subjects;\n  });\n\n  var addSubject = function addSubject(subject) {\n    dispatch({\n      type: _subjectTypes__WEBPACK_IMPORTED_MODULE_2__.UPDATE_SUBJECTS,\n      subjects: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subjects), [subject])\n    });\n  };\n\n  return {\n    subjects: subjects,\n    addSubject: addSubject\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvdXNlU3ViamVjdFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0UsaUJBQVQsQ0FDYkMsUUFEYSxFQUdiO0FBQUEsTUFEQUMsUUFDQSx1RUFEV0osb0RBQ1g7QUFDQSxNQUFNSyxRQUFRLEdBQUdELFFBQVEsQ0FDdkIsVUFBQUUsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkYsUUFBdkI7QUFBQSxHQURrQixDQUF6Qjs7QUFJQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQTBCO0FBQzNDTixJQUFBQSxRQUFRLENBQUM7QUFDUE8sTUFBQUEsSUFBSSxFQUFFVCwwREFEQztBQUVQSSxNQUFBQSxRQUFRLGlHQUFNQSxRQUFOLElBQWdCSSxPQUFoQjtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7O0FBT0EsU0FBTztBQUFFSixJQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUcsSUFBQUEsVUFBVSxFQUFWQTtBQUFaLEdBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQvLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvdXNlU3ViamVjdFJlZHVjZXIudHM/NzllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIElSb290U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSdcbmltcG9ydCB7IHN1YmplY3RUeXBlLCBVUERBVEVfU1VCSkVDVFMgfSBmcm9tICcuL3N1YmplY3RUeXBlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3ViamVjdFJlZHVjZXIoXG4gIGRpc3BhdGNoOiBBcHBEaXNwYXRjaCxcbiAgc2VsZWN0b3IgPSB1c2VTZWxlY3RvclxuKSB7XG4gIGNvbnN0IHN1YmplY3RzID0gc2VsZWN0b3I8SVJvb3RTdGF0ZSwgc3ViamVjdFR5cGVbXT4oXG4gICAgc3RhdGUgPT4gc3RhdGUuc3ViamVjdFN0YXRlLnN1YmplY3RzXG4gIClcblxuICBjb25zdCBhZGRTdWJqZWN0ID0gKHN1YmplY3Q6IHN1YmplY3RUeXBlKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX1NVQkpFQ1RTLFxuICAgICAgc3ViamVjdHM6IFsuLi5zdWJqZWN0cywgc3ViamVjdF0sXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IHN1YmplY3RzLCBhZGRTdWJqZWN0IH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIlVQREFURV9TVUJKRUNUUyIsInVzZVN1YmplY3RSZWR1Y2VyIiwiZGlzcGF0Y2giLCJzZWxlY3RvciIsInN1YmplY3RzIiwic3RhdGUiLCJzdWJqZWN0U3RhdGUiLCJhZGRTdWJqZWN0Iiwic3ViamVjdCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/subjectReducer/useSubjectReducer.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bfa812937ca89921d2ee")
/******/ })();
/******/ 
/******/ }
);