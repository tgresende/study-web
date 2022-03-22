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

/***/ "./src/pages/projectPage/ProjectPage.tsx":
/*!***********************************************!*\
  !*** ./src/pages/projectPage/ProjectPage.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectPage)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms */ \"./src/organisms/index.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\nfunction ProjectPage() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(true),\n      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      dialogOpen = _React$useState2[0],\n      setDialogOpen = _React$useState2[1];\n\n  function AddSubjectDialog(open) {\n    var handleClose = function handleClose() {\n      setDialogOpen(false);\n      alert(\"abc\");\n    };\n\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClose: handleClose,\n      open: open,\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_organisms__WEBPACK_IMPORTED_MODULE_2__.SubjectInsert, {})\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"h1\", {\n      children: \" view de projetos\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_organisms__WEBPACK_IMPORTED_MODULE_2__.SubjectsView, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AddSubjectDialog, {})]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UvUHJvamVjdFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFZSxTQUFTSSxXQUFULEdBQXVCO0FBQ3BDLHdCQUFvQ0gsMkNBQUEsQ0FBd0IsSUFBeEIsQ0FBcEM7QUFBQTtBQUFBLE1BQU9LLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUEsV0FBU0MsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQXlDO0FBQ3ZDLFFBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJILE1BQUFBLGFBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUksTUFBQUEsS0FBSyxPQUFMO0FBQ0QsS0FIRDs7QUFLQSx3QkFDRSx1REFBQyxxREFBRDtBQUFRLGFBQU8sRUFBRUQsV0FBakI7QUFBOEIsVUFBSSxFQUFFRCxJQUFwQztBQUFBLDZCQUNFLHVEQUFDLHFEQUFEO0FBREYsTUFERjtBQUtEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLE1BREYsZUFFRSx1REFBQyxvREFBRCxLQUZGLGVBR0UsdURBQUMsZ0JBQUQsS0FIRjtBQUFBLElBREY7QUFPRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UvUHJvamVjdFBhZ2UudHN4PzVkOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dQcm9wcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdWJqZWN0SW5zZXJ0LCBTdWJqZWN0c1ZpZXcgfSBmcm9tICcuLi8uLi9vcmdhbmlzbXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKCkge1xuICBjb25zdCBbZGlhbG9nT3Blbiwgc2V0RGlhbG9nT3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuXG4gIGZ1bmN0aW9uIEFkZFN1YmplY3REaWFsb2cob3BlbjogYm9vbGVhbikge1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgc2V0RGlhbG9nT3BlbihmYWxzZSlcbiAgICAgIGFsZXJ0KGBhYmNgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBvcGVuPXtvcGVufT5cbiAgICAgICAgPFN1YmplY3RJbnNlcnQgLz5cbiAgICAgIDwvRGlhbG9nPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT4gdmlldyBkZSBwcm9qZXRvczwvaDE+XG4gICAgICA8U3ViamVjdHNWaWV3IC8+XG4gICAgICA8QWRkU3ViamVjdERpYWxvZyAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiRGlhbG9nIiwiUmVhY3QiLCJTdWJqZWN0SW5zZXJ0IiwiU3ViamVjdHNWaWV3IiwiUHJvamVjdFBhZ2UiLCJ1c2VTdGF0ZSIsImRpYWxvZ09wZW4iLCJzZXREaWFsb2dPcGVuIiwiQWRkU3ViamVjdERpYWxvZyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projectPage/ProjectPage.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37a758b8b361a6115393")
/******/ })();
/******/ 
/******/ }
);