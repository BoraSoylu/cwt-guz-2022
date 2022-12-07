import config from '../config.json';
/**
 *
 * @returns - All students as a Promise.
 * Use .then() to resolve into an array of students. E.g: getAllStudents().then((students) => console.log(students));
 */
const getAllStudents = () => {
  return buildFetch('GET', 'students');
};

/**
 *
 * @param {int} id - id of student to get.
 * @returns - Returns a Promise for student object with given id.
 * Use .then() to resolve into the student object.
 * E.g: getStudent('1').then((student) => console.log(student));
 */
const getStudent = (id) => {
  return buildFetch('GET', `students/${id}`);
};

/**
 *
 * @param {Object} student - Student object to update.
 * @returns - Returns a Promise for updated student.
 * Use .then() to resolve into the student object.
 * E.g: getStudent('1').then((student) => console.log(student));
 */
const updateStudent = (student) => {
  return buildFetch('PUT', `students/${student.id}`, student);
};

/**
 *
 * @param {Object} student - Student object to add.
 * @returns - Returns a Promise for added student.
 * Use .then() to resolve into the student object.
 * E.g: getStudent('1').then((student) => console.log(student));
 */
const addStudent = (student) => {
  return buildFetch('POST', `students`, student);
};

/**
 *
 * @param {Object} id - Student id to delete student.
 */
const deleteStudentById = (id) => {
  return buildFetch('DELETE', `students/${id}`);
};

/**
 *
 * @param {Object} student - Student object to delete student.
 */
const deleteStudentByObject = (student) => {
  return buildFetch('DELETE', `students/${student.id}`);
};

function buildFetch(method, route, body) {
  return fetch(`${config.BASE_URL}/${route}`, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json());
}

export {
  getAllStudents,
  getStudent,
  updateStudent,
  addStudent,
  deleteStudentById,
  deleteStudentByObject,
};
