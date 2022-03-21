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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useSubjectReducer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _subjectTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjectTypes */ \"./src/reducers/subjectReducer/subjectTypes.ts\");\n\n\n\nfunction useSubjectReducer() {\n  var dispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch;\n  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;\n  var subjects = selector(function (state) {\n    return state.subjectState.subjects;\n  });\n\n  var addSubject = function addSubject(subject) {\n    dispatch({\n      type: _subjectTypes__WEBPACK_IMPORTED_MODULE_2__.UPDATE_SUBJECTS,\n      subjects: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subjects), [subject])\n    });\n  };\n\n  return {\n    subjects: subjects,\n    addSubject: addSubject\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvdXNlU3ViamVjdFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0csaUJBQVQsR0FHYjtBQUFBLE1BRkFDLFFBRUEsdUVBRndCSixvREFFeEI7QUFBQSxNQURBSyxRQUNBLHVFQURXSixvREFDWDtBQUNBLE1BQU1LLFFBQVEsR0FBR0QsUUFBUSxDQUN2QixVQUFBRSxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxZQUFOLENBQW1CRixRQUF2QjtBQUFBLEdBRGtCLENBQXpCOztBQUlBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBMEI7QUFDM0NOLElBQUFBLFFBQVEsQ0FBQztBQUNQTyxNQUFBQSxJQUFJLEVBQUVULDBEQURDO0FBRVBJLE1BQUFBLFFBQVEsaUdBQU1BLFFBQU4sSUFBZ0JJLE9BQWhCO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDs7QUFPQSxTQUFPO0FBQUVKLElBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZRyxJQUFBQSxVQUFVLEVBQVZBO0FBQVosR0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC8uL3NyYy9yZWR1Y2Vycy9zdWJqZWN0UmVkdWNlci91c2VTdWJqZWN0UmVkdWNlci50cz83OWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIElSb290U3RhdGUsIHN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUnXG5pbXBvcnQgeyBzdWJqZWN0VHlwZSwgVVBEQVRFX1NVQkpFQ1RTIH0gZnJvbSAnLi9zdWJqZWN0VHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN1YmplY3RSZWR1Y2VyKFxuICBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCxcbiAgc2VsZWN0b3IgPSB1c2VTZWxlY3RvclxuKSB7XG4gIGNvbnN0IHN1YmplY3RzID0gc2VsZWN0b3I8SVJvb3RTdGF0ZSwgc3ViamVjdFR5cGVbXT4oXG4gICAgc3RhdGUgPT4gc3RhdGUuc3ViamVjdFN0YXRlLnN1YmplY3RzXG4gIClcblxuICBjb25zdCBhZGRTdWJqZWN0ID0gKHN1YmplY3Q6IHN1YmplY3RUeXBlKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX1NVQkpFQ1RTLFxuICAgICAgc3ViamVjdHM6IFsuLi5zdWJqZWN0cywgc3ViamVjdF0sXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IHN1YmplY3RzLCBhZGRTdWJqZWN0IH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiVVBEQVRFX1NVQkpFQ1RTIiwidXNlU3ViamVjdFJlZHVjZXIiLCJkaXNwYXRjaCIsInNlbGVjdG9yIiwic3ViamVjdHMiLCJzdGF0ZSIsInN1YmplY3RTdGF0ZSIsImFkZFN1YmplY3QiLCJzdWJqZWN0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/subjectReducer/useSubjectReducer.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b4ecf09fc7ca4866d25")
/******/ })();
/******/ 
/******/ }
);