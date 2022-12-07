/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StudentRow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentRow.js */ \"./src/components/StudentRow.js\");\n/* harmony import */ var _FetchService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchService.js */ \"./src/components/FetchService.js\");\n\r\n\r\n\r\n(0,_FetchService_js__WEBPACK_IMPORTED_MODULE_1__.getAllStudents)().then((students) => {\r\n  (0,_StudentRow_js__WEBPACK_IMPORTED_MODULE_0__.studentRow)(students[0]);\r\n});\r\n\n\n//# sourceURL=webpack://project5/./src/components/App.js?");

/***/ }),

/***/ "./src/components/FetchService.js":
/*!****************************************!*\
  !*** ./src/components/FetchService.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addStudent\": () => (/* binding */ addStudent),\n/* harmony export */   \"deleteStudentById\": () => (/* binding */ deleteStudentById),\n/* harmony export */   \"deleteStudentByObject\": () => (/* binding */ deleteStudentByObject),\n/* harmony export */   \"getAllStudents\": () => (/* binding */ getAllStudents),\n/* harmony export */   \"getStudent\": () => (/* binding */ getStudent),\n/* harmony export */   \"updateStudent\": () => (/* binding */ updateStudent)\n/* harmony export */ });\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ \"./src/config.json\");\n\r\n/**\r\n *\r\n * @returns - All students as a Promise.\r\n * Use .then() to resolve into an array of students. E.g: getAllStudents().then((students) => console.log(students));\r\n */\r\nconst getAllStudents = () => {\r\n  return buildFetch('GET', 'students');\r\n};\r\n\r\n/**\r\n *\r\n * @param {int} id - id of student to get.\r\n * @returns - Returns a Promise for student object with given id.\r\n * Use .then() to resolve into the student object.\r\n * E.g: getStudent('1').then((student) => console.log(student));\r\n */\r\nconst getStudent = (id) => {\r\n  return buildFetch('GET', `students/${id}`);\r\n};\r\n\r\n/**\r\n *\r\n * @param {Object} student - Student object to update.\r\n * @returns - Returns a Promise for updated student.\r\n * Use .then() to resolve into the student object.\r\n * E.g: getStudent('1').then((student) => console.log(student));\r\n */\r\nconst updateStudent = (student) => {\r\n  return buildFetch('PUT', `students/${student.id}`, student);\r\n};\r\n\r\n/**\r\n *\r\n * @param {Object} student - Student object to add.\r\n * @returns - Returns a Promise for added student.\r\n * Use .then() to resolve into the student object.\r\n * E.g: getStudent('1').then((student) => console.log(student));\r\n */\r\nconst addStudent = (student) => {\r\n  return buildFetch('POST', `students`, student);\r\n};\r\n\r\n/**\r\n *\r\n * @param {Object} id - Student id to delete student.\r\n */\r\nconst deleteStudentById = (id) => {\r\n  return buildFetch('DELETE', `students/${id}`);\r\n};\r\n\r\n/**\r\n *\r\n * @param {Object} student - Student object to delete student.\r\n */\r\nconst deleteStudentByObject = (student) => {\r\n  return buildFetch('DELETE', `students/${student.id}`);\r\n};\r\n\r\nfunction buildFetch(method, route, body) {\r\n  return fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/${route}`, {\r\n    method: method,\r\n    body: JSON.stringify(body),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  }).then((data) => data.json());\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project5/./src/components/FetchService.js?");

/***/ }),

/***/ "./src/components/StudentRow.js":
/*!**************************************!*\
  !*** ./src/components/StudentRow.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentRow\": () => (/* binding */ studentRow)\n/* harmony export */ });\nconst studentRow = (student) => {\r\n  const wrapperClasses = ['student-row'];\r\n\r\n  const depts = {\r\n    1: 'Bilgisayar Müh.',\r\n    2: 'Elektrik-Elektronik Müh.',\r\n    3: 'Endüstri Müh.',\r\n    4: 'İnşaat Müh.',\r\n  };\r\n  const wrapper = document.createElement('div');\r\n  wrapperClasses.forEach((element) => {\r\n    wrapper.classList.add(element);\r\n  });\r\n\r\n  const rowContents = [\r\n    `${student.fname} ${student.lname}`,\r\n    `${student.num}`,\r\n    `${depts[student.dept]}`,\r\n    'buttons',\r\n  ];\r\n  rowContents.forEach((content) => {\r\n    const element = document.createElement('div');\r\n    element.innerText = content;\r\n    wrapper.appendChild(element);\r\n  });\r\n\r\n  return wrapper;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://project5/./src/components/StudentRow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.js */ \"./src/components/App.js\");\n\r\n\n\n//# sourceURL=webpack://project5/./src/index.js?");

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"BASE_URL\":\"http://localhost:3000\"}');\n\n//# sourceURL=webpack://project5/./src/config.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;