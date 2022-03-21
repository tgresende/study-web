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

/***/ "./src/organisms/subjectsView/SubjectsView.tsx":
/*!*****************************************************!*\
  !*** ./src/organisms/subjectsView/SubjectsView.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SubjectsView)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/Box/Box.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _functions_api_getSubjectsUseCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/api/getSubjectsUseCase */ \"./src/functions/api/getSubjectsUseCase.ts\");\n/* harmony import */ var _molecules_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/buttons */ \"./src/molecules/buttons/index.ts\");\n/* harmony import */ var _reducers_subjectReducer_useSubjectReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/subjectReducer/useSubjectReducer */ \"./src/reducers/subjectReducer/useSubjectReducer.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction SubjectsView() {\n  var projectId = 1;\n\n  var _useSubjectReducer = (0,_reducers_subjectReducer_useSubjectReducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(), react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector),\n      subjects = _useSubjectReducer.subjects,\n      addSubject = _useSubjectReducer.addSubject;\n\n  function getSubject() {\n    return _getSubject.apply(this, arguments);\n  }\n\n  function _getSubject() {\n    _getSubject = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var subjects;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_functions_api_getSubjectsUseCase__WEBPACK_IMPORTED_MODULE_4__.getSubjectsUseCase)(projectId);\n\n            case 2:\n              subjects = _context.sent;\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _getSubject.apply(this, arguments);\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {\n    getSubject();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_molecules_buttons__WEBPACK_IMPORTED_MODULE_5__.AddIconBtn, {\n      onClick: function onClick() {\n        return addSubject({\n          name: Math.random().toString(),\n          annotations: 'bc',\n          subjectId: 1,\n          weight: 10\n        });\n      }\n    }), subjects.map(function (subject) {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        children: subject.name\n      });\n    })]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3JnYW5pc21zL3N1YmplY3RzVmlldy9TdWJqZWN0c1ZpZXcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNRLFlBQVQsR0FBd0I7QUFDckMsTUFBTUMsU0FBUyxHQUFHLENBQWxCOztBQUNBLDJCQUFpQ0Ysc0ZBQWlCLENBQ2hESix3REFBVyxFQURxQyxFQUVoREMsb0RBRmdELENBQWxEO0FBQUEsTUFBUU0sUUFBUixzQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxVQUFsQixzQkFBa0JBLFVBQWxCOztBQUZxQyxXQU90QkMsVUFQc0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkxBT3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3lCUCxxRkFBa0IsQ0FBQ0ksU0FBRCxDQUQzQzs7QUFBQTtBQUNRQyxjQUFBQSxRQURSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUHFDO0FBQUE7QUFBQTs7QUFXckNSLEVBQUFBLDRDQUFBLENBQWdCLFlBQU07QUFDcEJVLElBQUFBLFVBQVU7QUFDWCxHQUZELEVBRUcsRUFGSDtBQUlBLHNCQUNFLHdEQUFDLG1EQUFEO0FBQUEsNEJBQ0UsdURBQUMsMERBQUQ7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUNQRCxVQUFVLENBQUM7QUFDVEcsVUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxFQURHO0FBRVRDLFVBQUFBLFdBQVcsRUFBRSxJQUZKO0FBR1RDLFVBQUFBLFNBQVMsRUFBRSxDQUhGO0FBSVRDLFVBQUFBLE1BQU0sRUFBRTtBQUpDLFNBQUQsQ0FESDtBQUFBO0FBRFgsTUFERixFQVdHVixRQUFRLENBQUNXLEdBQVQsQ0FBYSxVQUFBQyxPQUFPO0FBQUEsMEJBQ25CLHVEQUFDLHFEQUFEO0FBQUEsa0JBQWFBLE9BQU8sQ0FBQ1I7QUFBckIsUUFEbUI7QUFBQSxLQUFwQixDQVhIO0FBQUEsSUFERjtBQWlCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQvLi9zcmMvb3JnYW5pc21zL3N1YmplY3RzVmlldy9TdWJqZWN0c1ZpZXcudHN4PzIyYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQG11aS9iYXNlJ1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL3N5c3RlbSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0U3ViamVjdHNVc2VDYXNlIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2FwaS9nZXRTdWJqZWN0c1VzZUNhc2UnXG5pbXBvcnQgeyBBZGRJY29uQnRuIH0gZnJvbSAnLi4vLi4vbW9sZWN1bGVzL2J1dHRvbnMnXG5pbXBvcnQgdXNlU3ViamVjdFJlZHVjZXIgZnJvbSAnLi4vLi4vcmVkdWNlcnMvc3ViamVjdFJlZHVjZXIvdXNlU3ViamVjdFJlZHVjZXInXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3N0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJqZWN0c1ZpZXcoKSB7XG4gIGNvbnN0IHByb2plY3RJZCA9IDFcbiAgY29uc3QgeyBzdWJqZWN0cywgYWRkU3ViamVjdCB9ID0gdXNlU3ViamVjdFJlZHVjZXIoXG4gICAgdXNlRGlzcGF0Y2goKSBhcyBBcHBEaXNwYXRjaCxcbiAgICB1c2VTZWxlY3RvclxuICApXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3ViamVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzdWJqZWN0cyA9IGF3YWl0IGdldFN1YmplY3RzVXNlQ2FzZShwcm9qZWN0SWQpXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFN1YmplY3QoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8QWRkSWNvbkJ0blxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGFkZFN1YmplY3Qoe1xuICAgICAgICAgICAgbmFtZTogTWF0aC5yYW5kb20oKS50b1N0cmluZygpLFxuICAgICAgICAgICAgYW5ub3RhdGlvbnM6ICdiYycsXG4gICAgICAgICAgICBzdWJqZWN0SWQ6IDEsXG4gICAgICAgICAgICB3ZWlnaHQ6IDEwLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICB7c3ViamVjdHMubWFwKHN1YmplY3QgPT4gKFxuICAgICAgICA8VHlwb2dyYXBoeT57c3ViamVjdC5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICkpfVxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsiVHlwb2dyYXBoeSIsIkJveCIsIlJlYWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldFN1YmplY3RzVXNlQ2FzZSIsIkFkZEljb25CdG4iLCJ1c2VTdWJqZWN0UmVkdWNlciIsIlN1YmplY3RzVmlldyIsInByb2plY3RJZCIsInN1YmplY3RzIiwiYWRkU3ViamVjdCIsImdldFN1YmplY3QiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwiYW5ub3RhdGlvbnMiLCJzdWJqZWN0SWQiLCJ3ZWlnaHQiLCJtYXAiLCJzdWJqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/organisms/subjectsView/SubjectsView.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("02539a0ee4e024940e0c")
/******/ })();
/******/ 
/******/ }
);