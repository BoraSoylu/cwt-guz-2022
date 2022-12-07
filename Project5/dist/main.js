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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FetchService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchService.js */ \"./src/components/FetchService.js\");\n/* harmony import */ var _Pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.js */ \"./src/components/Pagination.js\");\n/* harmony import */ var _StudentRow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentRow.js */ \"./src/components/StudentRow.js\");\n\r\n\r\n\r\n\r\nconst elementClass = '.header-students';\r\ndocument.querySelector(elementClass).appendChild((0,_StudentRow_js__WEBPACK_IMPORTED_MODULE_2__.studentRow)('header'));\r\nconst perPages = [5, 8, 10];\r\n(0,_FetchService_js__WEBPACK_IMPORTED_MODULE_0__.getAllStudents)().then((students) => {\r\n  (0,_Pagination_js__WEBPACK_IMPORTED_MODULE_1__.handlePerPageChange)(perPages[0], students);\r\n  (0,_Pagination_js__WEBPACK_IMPORTED_MODULE_1__.generatePerPages)(perPages, students);\r\n});\r\n\n\n//# sourceURL=webpack://project5/./src/components/App.js?");

/***/ }),

/***/ "./src/components/FetchService.js":
/*!****************************************!*\
  !*** ./src/components/FetchService.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addStudent\": () => (/* binding */ addStudent),\n/* harmony export */   \"deleteStudentById\": () => (/* binding */ deleteStudentById),\n/* harmony export */   \"deleteStudentByObject\": () => (/* binding */ deleteStudentByObject),\n/* harmony export */   \"getAllStudents\": () => (/* binding */ getAllStudents),\n/* harmony export */   \"getStudent\": () => (/* binding */ getStudent),\n/* harmony export */   \"updateStudent\": () => (/* binding */ updateStudent)\n/* harmony export */ });\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ \"./src/config.json\");\n\r\n/**\r\n *\r\n * @returns - All students as a Promise.\r\n * Use .then() to resolve into an array of students. E.g: getAllStudents().then((students) => console.log(students));\r\n */\r\nconst getAllStudents = () => {\r\n  return buildFetch('GET', 'students');\r\n};\r\n\r\n/**\r\n *\r\n * @param {int} id - id of student to get.\r\n * @returns - Returns a Promise for student object with given id.\r\n * Use .then() to resolve into the student object.\r\n * E.g: getStudent('1').then((student) => console.log(student));\r\n */\r\nconst getStudent = (id) => {\r\n  return buildFetch('GET', `students/${id}`);\r\n};\r\n\r\n/**\r\n *\r\n * @param {Object} student - Student object to update.\r\n * @returns - Returns a Promise for updated student.\r\n * Use .then() to resolve into the student object.\r\n * E.g: getStudent('1').then((student) => console.log(student));\r\n */\r\nconst updateStudent = (student) => {\r\n  return buildFetch('PUT', `students/${student.id}`, student);\r\n};\r\n\r\n/**\r\n *\r\n * @param {Object} student - Student object to add.\r\n * @returns - Returns a Promise for added student.\r\n * Use .then() to resolve into the student object.\r\n * E.g: getStudent('1').then((student) => console.log(student));\r\n */\r\nconst addStudent = (student) => {\r\n  return buildFetch('POST', `students`, student);\r\n};\r\n\r\n/**\r\n *\r\n * @param {Object} id - Student id to delete student.\r\n */\r\nconst deleteStudentById = (id) => {\r\n  return buildFetch('DELETE', `students/${id}`);\r\n};\r\n\r\n/**\r\n *\r\n * @param {Object} student - Student object to delete student.\r\n */\r\nconst deleteStudentByObject = (student) => {\r\n  return buildFetch('DELETE', `students/${student.id}`);\r\n};\r\n\r\nfunction buildFetch(method, route, body) {\r\n  return fetch(`${_config_json__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/${route}`, {\r\n    method: method,\r\n    body: JSON.stringify(body),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  }).then((data) => data.json());\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project5/./src/components/FetchService.js?");

/***/ }),

/***/ "./src/components/Pagination.js":
/*!**************************************!*\
  !*** ./src/components/Pagination.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatePerPages\": () => (/* binding */ generatePerPages),\n/* harmony export */   \"handlePerPageChange\": () => (/* binding */ handlePerPageChange)\n/* harmony export */ });\n/* harmony import */ var _StudentList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentList.js */ \"./src/components/StudentList.js\");\n\r\n/**\r\n *\r\n * @param {int} currentPage - Current page selected by the user\r\n * @param {int} itemsPerPage - Current amount of items to display per page\r\n * @param {Object} items - All objects\r\n */\r\nconst handlePageChange = (currentPage, itemsPerPage, items) => {\r\n  currentPage -= 1;\r\n  const [itemsToDisplay, itemsToDisplayClass] = (0,_StudentList_js__WEBPACK_IMPORTED_MODULE_0__.studentList)(\r\n    items.slice(itemsPerPage * currentPage, itemsPerPage * currentPage + itemsPerPage)\r\n  );\r\n\r\n  const oldElement = document.querySelector(`.${itemsToDisplayClass}`);\r\n\r\n  if (oldElement) {\r\n    oldElement.remove();\r\n    const parentElement = document.querySelector('.students-list');\r\n    parentElement.appendChild(itemsToDisplay);\r\n  } else {\r\n    const parentElement = document.querySelector('.students-list');\r\n    parentElement.appendChild(itemsToDisplay);\r\n  }\r\n};\r\n\r\nconst handlePerPageChange = (itemsPerPage, items) => {\r\n  // Generate initial page\r\n  handlePageChange(1, itemsPerPage, items);\r\n  // Classes for CSS\r\n  const wrapperClasses = ['flex', 'gap-5', 'page-buttons'];\r\n  const pageButtonClasses = ['flex', 'align-center', 'justify-center', 'w-[20px]', 'h-[20px]'];\r\n  // Create wrapper element and add classes\r\n  const wrapper = document.createElement('div');\r\n  wrapperClasses.forEach((wrapperClass) => {\r\n    wrapper.classList.add(wrapperClass);\r\n  });\r\n\r\n  // Create page buttons\r\n  for (let index = 1; index <= Math.ceil(Object.keys(items).length / itemsPerPage); index++) {\r\n    //Create button element\r\n    const pageButton = document.createElement('button');\r\n    pageButton.innerText = index.toString();\r\n    // Add classes to button element\r\n    pageButtonClasses.forEach((pageButtonClass) => {\r\n      pageButton.classList.add(pageButtonClass);\r\n    });\r\n    // Add event listener for page change to button\r\n    pageButton.addEventListener('click', () => {\r\n      handlePageChange(index, itemsPerPage, items);\r\n    });\r\n    //Append the buttons to wrapper\r\n    wrapper.appendChild(pageButton);\r\n  }\r\n  // Remove old buttons from the provided HTMLElement than add the new buttons to it\r\n\r\n  const oldElement = document.querySelector('.page-buttons');\r\n\r\n  if (oldElement) {\r\n    oldElement.remove();\r\n    const parentElement = document.querySelector('.pages');\r\n    parentElement.appendChild(wrapper);\r\n  } else {\r\n    const parentElement = document.querySelector('.pages');\r\n    parentElement.appendChild(wrapper);\r\n  }\r\n};\r\n\r\nconst generatePerPages = (perPages, items) => {\r\n  // Classes for CSS\r\n  const wrapperClasses = ['flex', 'gap-5', 'per-page-buttons'];\r\n  const perPageButtonClasses = ['flex', 'align-center', 'justify-center', 'w-[20px]', 'h-[20px]'];\r\n  // Create wrapper element and add classes\r\n  const wrapper = document.createElement('div');\r\n  wrapperClasses.forEach((wrapperClass) => {\r\n    wrapper.classList.add(wrapperClass);\r\n  });\r\n\r\n  perPages.forEach((perPage) => {\r\n    const perPageButton = document.createElement('button');\r\n    perPageButtonClasses.forEach((perPageButtonClass) => {\r\n      perPageButton.classList.add(perPageButtonClass);\r\n    });\r\n    perPageButton.innerText = perPage;\r\n    perPageButton.addEventListener('click', () => {\r\n      handlePerPageChange(perPage, items);\r\n    });\r\n    wrapper.appendChild(perPageButton);\r\n  });\r\n  console.log('added per page buttons');\r\n  document.querySelector('.per-pages').appendChild(wrapper);\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/Pagination.js?");

/***/ }),

/***/ "./src/components/StudentList.js":
/*!***************************************!*\
  !*** ./src/components/StudentList.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentList\": () => (/* binding */ studentList)\n/* harmony export */ });\n/* harmony import */ var _StudentRow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentRow.js */ \"./src/components/StudentRow.js\");\n\r\n\r\n/**\r\n *\r\n * @param {Object} students - Student array\r\n * @returns HTML element of a students comprised of student entries formatted and ready to display\r\n * @returns A unique class of the students list\r\n */\r\nconst studentList = (students) => {\r\n  const wrapper = document.createElement('div');\r\n  const uniqueClass = 'student-list';\r\n  const wrapperClasses = ['border', 'flex', 'flex-col', uniqueClass];\r\n  wrapperClasses.forEach((element) => {\r\n    wrapper.classList.add(element);\r\n  });\r\n\r\n  students.forEach((student) => {\r\n    wrapper.appendChild((0,_StudentRow_js__WEBPACK_IMPORTED_MODULE_0__.studentRow)(student));\r\n  });\r\n\r\n  return [wrapper, uniqueClass];\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/StudentList.js?");

/***/ }),

/***/ "./src/components/StudentRow.js":
/*!**************************************!*\
  !*** ./src/components/StudentRow.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentRow\": () => (/* binding */ studentRow)\n/* harmony export */ });\n/**\r\n *\r\n * @param {Object} student Student object\r\n * @returns HTML element of a student entry formatted and ready to display\r\n */\r\nconst studentRow = (student) => {\r\n  const wrapperClasses = [\r\n    'student-row',\r\n    'flex',\r\n    'border',\r\n    'w-screen',\r\n    'justify-between',\r\n  ];\r\n  const contentClasses = ['w-1/4'];\r\n  const depts = {\r\n    1: 'Bilgisayar Müh.',\r\n    2: 'Elektrik-Elektronik Müh.',\r\n    3: 'Endüstri Müh.',\r\n    4: 'İnşaat Müh.',\r\n    5: 'Bölüm',\r\n  };\r\n  let rowContents;\r\n  if (student === 'header') {\r\n    rowContents = ['İsim Soyisim', 'Öğrenci Numarası', 'Bölüm', 'Yetkiler'];\r\n  } else {\r\n    rowContents = [\r\n      `${student.fname} ${student.lname}`,\r\n      `${student.num}`,\r\n      `${depts[student.dept]}`,\r\n      generateAuthButtons(),\r\n    ];\r\n  }\r\n\r\n  const wrapper = document.createElement('div');\r\n  wrapperClasses.forEach((element) => {\r\n    wrapper.classList.add(element);\r\n  });\r\n\r\n  rowContents.forEach((content) => {\r\n    const element = document.createElement('div');\r\n    contentClasses.forEach((contentClass) => {\r\n      element.classList.add(contentClass);\r\n    });\r\n    element.innerText = content;\r\n    wrapper.appendChild(element);\r\n  });\r\n\r\n  return wrapper;\r\n};\r\n\r\nfunction generateAuthButtons() {\r\n  return 'Auth buttons placeholder';\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project5/./src/components/StudentRow.js?");

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