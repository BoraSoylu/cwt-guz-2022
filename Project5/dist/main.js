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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _FetchService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchService.js */ \"./src/components/FetchService.js\");\n/* harmony import */ var _Pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.js */ \"./src/components/Pagination.js\");\n/* harmony import */ var _StudentRow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentRow.js */ \"./src/components/StudentRow.js\");\n/* harmony import */ var _Buttons_ViewStudentButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons/ViewStudentButton.js */ \"./src/components/Buttons/ViewStudentButton.js\");\n\r\n\r\n\r\n\r\n\r\nconst App = () => {\r\n  const elementClass = '.header-students';\r\n  document.querySelector(elementClass).appendChild((0,_StudentRow_js__WEBPACK_IMPORTED_MODULE_2__.studentRow)('header'));\r\n\r\n\r\n  const perPages = [5, 8, 10];\r\n  (0,_FetchService_js__WEBPACK_IMPORTED_MODULE_0__.getAllStudents)().then((students) => {\r\n    (0,_Pagination_js__WEBPACK_IMPORTED_MODULE_1__.handlePerPageChange)(perPages[1], students, 1);\r\n    (0,_Pagination_js__WEBPACK_IMPORTED_MODULE_1__.generatePerPages)(perPages, students);\r\n    document.querySelectorAll('.close-popup').forEach((cPopup) => {\r\n      cPopup.addEventListener('click', () => {\r\n        document.querySelector('#page-mask').classList.add('hidden');\r\n        // document.querySelectorAll('input').forEach((popup) => {});\r\n        document.querySelectorAll('.popup').forEach((popup) => {\r\n          popup.classList.add('hidden');\r\n        });\r\n      });\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/App.js?");

/***/ }),

/***/ "./src/components/Buttons/DeleteStudentButton.js":
/*!*******************************************************!*\
  !*** ./src/components/Buttons/DeleteStudentButton.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeleteStudentButton\": () => (/* binding */ DeleteStudentButton)\n/* harmony export */ });\n/* harmony import */ var _FetchService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FetchService.js */ \"./src/components/FetchService.js\");\n/* harmony import */ var _Popups_DeleteStudentPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Popups/DeleteStudentPopup.js */ \"./src/components/Popups/DeleteStudentPopup.js\");\n\r\n\r\n\r\nconst DeleteStudentButton = (student) => {\r\n  const btn = document.createElement('button');\r\n  btn.innerText = 'Sil';\r\n  const btnClassList = [\r\n    'flex',\r\n    'align-center',\r\n    'justify-center',\r\n    'bg-red-700',\r\n    'hover:bg-red-500',\r\n    'font-bold',\r\n    'text-white',\r\n    'py-1.5',\r\n    'px-5',\r\n    'border',\r\n    'border-red-700',\r\n    'rounded',\r\n    'text-sm',\r\n    'my-1',\r\n    'auth-buttons',\r\n    'delete-student-btn',\r\n  ];\r\n  btnClassList.forEach((c) => {\r\n    btn.classList.add(c);\r\n  });\r\n\r\n  btn.addEventListener('click', () => {\r\n    (0,_Popups_DeleteStudentPopup_js__WEBPACK_IMPORTED_MODULE_1__.DeleteStudentPopup)(student);\r\n  });\r\n\r\n  return btn;\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/Buttons/DeleteStudentButton.js?");

/***/ }),

/***/ "./src/components/Buttons/ViewStudentButton.js":
/*!*****************************************************!*\
  !*** ./src/components/Buttons/ViewStudentButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewStudentButton\": () => (/* binding */ ViewStudentButton)\n/* harmony export */ });\n/* harmony import */ var _Popups_ViewStudentPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Popups/ViewStudentPopup.js */ \"./src/components/Popups/ViewStudentPopup.js\");\n\r\n\r\nconst ViewStudentButton = (student) => {\r\n  const btn = document.createElement('button');\r\n  btn.innerText = 'Detay';\r\n  const btnClassList = [\r\n    'flex',\r\n    'align-center',\r\n    'justify-center',\r\n    'bg-green-700',\r\n    'hover:bg-green-500',\r\n    'font-bold',\r\n    'text-white',\r\n    'py-1.5',\r\n    'px-5',\r\n    'border',\r\n    'border-green-700',\r\n    'rounded',\r\n    'text-sm',\r\n    'my-1',\r\n    'auth-buttons',\r\n  ];\r\n  btnClassList.forEach((c) => {\r\n    btn.classList.add(c);\r\n  });\r\n\r\n  btn.addEventListener('click', () => {\r\n    (0,_Popups_ViewStudentPopup_js__WEBPACK_IMPORTED_MODULE_0__.ViewStudentPopup)(student);\r\n  });\r\n\r\n  return btn;\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/Buttons/ViewStudentButton.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatePerPages\": () => (/* binding */ generatePerPages),\n/* harmony export */   \"handlePerPageChange\": () => (/* binding */ handlePerPageChange)\n/* harmony export */ });\n/* harmony import */ var _StudentList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentList.js */ \"./src/components/StudentList.js\");\n\r\nconst currentlyDisplaying = (totalStudents, currentStudents) => {\r\n  document.querySelector('#student-count').innerText = totalStudents;\r\n  document.querySelector('#students-shown').innerHTML = currentStudents;\r\n};\r\n/**\r\n *\r\n * @param {int} currentPage - Current page selected by the user\r\n * @param {int} itemsPerPage - Current amount of items to display per page\r\n * @param {Object} items - All objects\r\n */\r\nconst handlePageChange = (currentPage, itemsPerPage, items) => {\r\n  // document.querySelector()\r\n  currentlyDisplaying(\r\n    `${Object.keys(items).length}`,\r\n    `\r\n  ${currentPage * itemsPerPage - itemsPerPage + 1} - ${\r\n      currentPage * itemsPerPage > Object.keys(items).length\r\n        ? Object.keys(items).length\r\n        : currentPage * itemsPerPage\r\n    }`\r\n  );\r\n  currentPage -= 1;\r\n  const [itemsToDisplay, itemsToDisplayClass] = (0,_StudentList_js__WEBPACK_IMPORTED_MODULE_0__.studentList)(\r\n    items.slice(itemsPerPage * currentPage, itemsPerPage * currentPage + itemsPerPage)\r\n  );\r\n\r\n  const oldElement = document.querySelector(`.${itemsToDisplayClass}`);\r\n\r\n  if (oldElement) {\r\n    oldElement.remove();\r\n    const parentElement = document.querySelector('.students-list');\r\n    parentElement.appendChild(itemsToDisplay);\r\n  } else {\r\n    const parentElement = document.querySelector('.students-list');\r\n    parentElement.appendChild(itemsToDisplay);\r\n  }\r\n};\r\n\r\nconst handlePerPageChange = (itemsPerPage, items, currentPage) => {\r\n  // Generate initial page\r\n  handlePageChange(currentPage, itemsPerPage, items);\r\n  // Classes for CSS\r\n  const wrapperClasses = ['flex', 'gap-3', 'page-buttons'];\r\n  const pageButtonClasses = [\r\n    'page-btn',\r\n    'flex',\r\n    'align-center',\r\n    'justify-center',\r\n    'bg-white',\r\n    'hover:bg-blue-300',\r\n    'font-bold',\r\n    'py-1',\r\n    'px-2.5',\r\n    'border',\r\n    'border-gray-700',\r\n    'rounded',\r\n    'text-sm',\r\n  ];\r\n  // Create wrapper element and add classes\r\n  const wrapper = document.createElement('div');\r\n  wrapperClasses.forEach((wrapperClass) => {\r\n    wrapper.classList.add(wrapperClass);\r\n  });\r\n\r\n  // Create page buttons\r\n  for (let index = 1; index <= Math.ceil(Object.keys(items).length / itemsPerPage); index++) {\r\n    const pageButton = document.createElement('button');\r\n    if (index == 1) {\r\n      pageButton.classList.add('bg-blue-700');\r\n      pageButton.classList.remove('hover:bg-blue-300');\r\n      pageButton.classList.add('text-white');\r\n    }\r\n    //Create button element\r\n    pageButton.innerText = index.toString();\r\n    // Add classes to button element\r\n    pageButtonClasses.forEach((pageButtonClass) => {\r\n      pageButton.classList.add(pageButtonClass);\r\n    });\r\n    // Add event listener for page change to button\r\n    pageButton.addEventListener('click', () => {\r\n      handlePageChange(index, itemsPerPage, items);\r\n      document.querySelectorAll('.page-btn').forEach((btn) => {\r\n        btn.classList.remove('bg-blue-700');\r\n        btn.classList.remove('text-white');\r\n        btn.classList.add('hover:bg-blue-300');\r\n        btn.classList.remove('current-page');\r\n      });\r\n      pageButton.classList.add('bg-blue-700');\r\n      pageButton.classList.add('current-page');\r\n      pageButton.classList.add('text-white');\r\n      pageButton.classList.remove('hover:bg-blue-300');\r\n    });\r\n\r\n    //Append the buttons to wrapper\r\n    wrapper.appendChild(pageButton);\r\n  }\r\n  // Remove old buttons from the provided HTMLElement than add the new buttons to it\r\n\r\n  const oldElement = document.querySelector('.page-buttons');\r\n\r\n  if (oldElement) {\r\n    oldElement.remove();\r\n    const parentElement = document.querySelector('.pages');\r\n    parentElement.appendChild(wrapper);\r\n  } else {\r\n    const parentElement = document.querySelector('.pages');\r\n    parentElement.appendChild(wrapper);\r\n  }\r\n  const pageBtns = document.querySelectorAll('.page-btn');\r\n  pageBtns.forEach((btn) => {\r\n    btn.classList.remove('bg-blue-700');\r\n    btn.classList.remove('text-white');\r\n    btn.classList.add('hover:bg-blue-300');\r\n  });\r\n  pageBtns[currentPage - 1].classList.add('bg-blue-700');\r\n  pageBtns[currentPage - 1].classList.add('text-white');\r\n  pageBtns[currentPage - 1].classList.add('current-page');\r\n  pageBtns[currentPage - 1].classList.remove('hover:bg-blue-300');\r\n};\r\n\r\nconst generatePerPages = (perPages, items) => {\r\n  // Classes for CSS\r\n  const wrapperClasses = ['flex', 'per-page-buttons'];\r\n  const perPageButtonClasses = [\r\n    'flex',\r\n    'align-center',\r\n    'justify-center',\r\n    'hover:bg-blue-300',\r\n    'font-bold',\r\n    'py-1',\r\n    'px-2.5',\r\n    'border',\r\n    'border-blue-600',\r\n    'text-sm',\r\n    'text-blue-600',\r\n    'per-page-btn',\r\n  ];\r\n  // Create wrapper element and add classes\r\n  const wrapper = document.createElement('div');\r\n  wrapperClasses.forEach((wrapperClass) => {\r\n    wrapper.classList.add(wrapperClass);\r\n  });\r\n\r\n  perPages.forEach((perPage, index) => {\r\n    const perPageButton = document.createElement('button');\r\n    perPageButtonClasses.forEach((perPageButtonClass) => {\r\n      perPageButton.classList.add(perPageButtonClass);\r\n    });\r\n    perPageButton.innerText = perPage;\r\n    perPageButton.addEventListener('click', () => {\r\n      let currentPage = Number(document.querySelector('.current-page').innerText);\r\n      if (Math.ceil(Object.keys(items).length / perPage) < currentPage)\r\n        currentPage = Math.ceil(Object.keys(items).length / perPage);\r\n      console.log(currentPage);\r\n      handlePerPageChange(perPage, items, currentPage);\r\n      document.querySelectorAll('.per-page-btn').forEach((btn) => {\r\n        btn.classList.remove('bg-blue-700');\r\n        btn.classList.add('text-blue-600');\r\n        btn.classList.add('hover:bg-blue-300');\r\n      });\r\n      perPageButton.classList.add('bg-blue-700');\r\n      perPageButton.classList.add('text-white');\r\n      perPageButton.classList.remove('text-blue-600');\r\n      perPageButton.classList.remove('hover:bg-blue-300');\r\n    });\r\n    if (index == 0) {\r\n      perPageButton.classList.add('rounded-l');\r\n    }\r\n    if (index == 1) {\r\n      perPageButton.classList.add('border-x-0');\r\n      perPageButton.classList.add('bg-blue-700');\r\n      perPageButton.classList.add('text-white');\r\n      perPageButton.classList.remove('text-blue-600');\r\n      perPageButton.classList.remove('hover:bg-blue-300');\r\n    }\r\n    if (index == 2) {\r\n      perPageButton.classList.add('rounded-r');\r\n    }\r\n    wrapper.appendChild(perPageButton);\r\n  });\r\n  document.querySelector('.per-pages').appendChild(wrapper);\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/Pagination.js?");

/***/ }),

/***/ "./src/components/Popups/DeleteStudentPopup.js":
/*!*****************************************************!*\
  !*** ./src/components/Popups/DeleteStudentPopup.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeleteStudentPopup\": () => (/* binding */ DeleteStudentPopup)\n/* harmony export */ });\nconst DeleteStudentPopup = (student) => {\r\n  document.querySelector('#page-mask').classList.toggle('hidden');\r\n  document.querySelector('#delete-student').classList.toggle('hidden');\r\n  const s = `<b>${student.fname}</b> <b>${student.lname}</b> isimli öğrenciyi siliyorsunuz. Bu işlem geri alınamaz. Devam etmek istediğinize emin misiniz?`;\r\n  document.querySelector('.delete-student-text').innerHTML = s;\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/Popups/DeleteStudentPopup.js?");

/***/ }),

/***/ "./src/components/Popups/ViewStudentPopup.js":
/*!***************************************************!*\
  !*** ./src/components/Popups/ViewStudentPopup.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewStudentPopup\": () => (/* binding */ ViewStudentPopup)\n/* harmony export */ });\nconst ViewStudentPopup = (student) => {\r\n  document.querySelector('#page-mask').classList.toggle('hidden');\r\n  document.querySelector('#view-student').classList.toggle('hidden');\r\n  const depts = {\r\n    1: 'Bilgisayar Müh.',\r\n    2: 'Elektrik-Elektronik Müh.',\r\n    3: 'Endüstri Müh.',\r\n    4: 'İnşaat Müh.',\r\n  };\r\n  const sDetails = [\r\n    student.fname,\r\n    student.lname,\r\n    student.num,\r\n    depts[student.dept],\r\n    student.pob,\r\n    student.dob,\r\n  ];\r\n  document.querySelectorAll('.view-detail').forEach((viewDetailElement, index) => {\r\n    viewDetailElement.innerText = sDetails[index];\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/Popups/ViewStudentPopup.js?");

/***/ }),

/***/ "./src/components/StudentList.js":
/*!***************************************!*\
  !*** ./src/components/StudentList.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentList\": () => (/* binding */ studentList)\n/* harmony export */ });\n/* harmony import */ var _StudentRow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentRow.js */ \"./src/components/StudentRow.js\");\n\r\n\r\n/**\r\n *\r\n * @param {Object} students - Student array\r\n * @returns HTML element of a students comprised of student entries formatted and ready to display\r\n * @returns A unique class of the students list\r\n */\r\nconst studentList = (students) => {\r\n  const wrapper = document.createElement('div');\r\n  const uniqueClass = 'student-list';\r\n  const wrapperClasses = ['flex', 'flex-col', uniqueClass];\r\n  wrapperClasses.forEach((element) => {\r\n    wrapper.classList.add(element);\r\n  });\r\n\r\n  students.forEach((student, index) => {\r\n    wrapper.appendChild((0,_StudentRow_js__WEBPACK_IMPORTED_MODULE_0__.studentRow)(student, index % 2 == 1 ? true : false));\r\n  });\r\n\r\n  return [wrapper, uniqueClass];\r\n};\r\n\n\n//# sourceURL=webpack://project5/./src/components/StudentList.js?");

/***/ }),

/***/ "./src/components/StudentRow.js":
/*!**************************************!*\
  !*** ./src/components/StudentRow.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentRow\": () => (/* binding */ studentRow)\n/* harmony export */ });\n/* harmony import */ var _Buttons_DeleteStudentButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons/DeleteStudentButton.js */ \"./src/components/Buttons/DeleteStudentButton.js\");\n/* harmony import */ var _Buttons_ViewStudentButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons/ViewStudentButton.js */ \"./src/components/Buttons/ViewStudentButton.js\");\n\r\n\r\n\r\n/**\r\n *\r\n * @param {Object} student Student object\r\n * @returns HTML element of a student entry formatted and ready to display\r\n */\r\nconst studentRow = (student, index) => {\r\n  const wrapper = document.createElement('div');\r\n  const wrapperClasses = ['px-5', 'student-row', 'flex', 'w-screen', 'justify-between'];\r\n  const contentClasses = ['w-1/4'];\r\n  const depts = {\r\n    1: 'Bilgisayar Müh.',\r\n    2: 'Elektrik-Elektronik Müh.',\r\n    3: 'Endüstri Müh.',\r\n    4: 'İnşaat Müh.',\r\n    5: 'Bölüm',\r\n  };\r\n  let rowContents;\r\n  if (student === 'header') {\r\n    rowContents = ['İsim Soyisim', 'Öğrenci Numarası', 'Bölüm', 'Yetkiler'];\r\n    wrapper.classList.add('bg-[#f2f3f8]');\r\n  } else {\r\n    rowContents = [`${student.fname} ${student.lname}`, `${student.num}`, `${depts[student.dept]}`];\r\n  }\r\n\r\n  wrapperClasses.forEach((element) => {\r\n    wrapper.classList.add(element);\r\n  });\r\n\r\n  rowContents.forEach((content) => {\r\n    const element = document.createElement('div');\r\n    contentClasses.forEach((contentClass) => {\r\n      element.classList.add(contentClass);\r\n      element.classList.add('m-1.5');\r\n    });\r\n    element.innerText = content;\r\n    if (student === 'header') {\r\n      element.classList.add('font-bold');\r\n    }\r\n    wrapper.appendChild(element);\r\n  });\r\n  if (student !== 'header') wrapper.appendChild(generateAuthButtons(student));\r\n  if (index) {\r\n    wrapper.classList.add('even:bg-[#e2e9fc]');\r\n  } else {\r\n    wrapper.classList.add('even:bg-[#ffffff]');\r\n  }\r\n  return wrapper;\r\n};\r\n\r\nfunction generateAuthButtons(student) {\r\n  const wrapper = document.createElement('div');\r\n  wrapper.appendChild((0,_Buttons_DeleteStudentButton_js__WEBPACK_IMPORTED_MODULE_0__.DeleteStudentButton)(student));\r\n  wrapper.appendChild((0,_Buttons_ViewStudentButton_js__WEBPACK_IMPORTED_MODULE_1__.ViewStudentButton)(student));\r\n  wrapper.classList.add('auth-buttons-wrapper');\r\n  return wrapper;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project5/./src/components/StudentRow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.js */ \"./src/components/App.js\");\n\r\n\r\n(0,_components_App_js__WEBPACK_IMPORTED_MODULE_0__.App)();\r\n\n\n//# sourceURL=webpack://project5/./src/index.js?");

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