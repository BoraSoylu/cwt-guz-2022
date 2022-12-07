import config from '../config.json';

const getAllStudents = () => {
  return buildFetch('GET', 'students');
};

const getStudent = (id) => {
  return buildFetch('GET', `students/${id}`);
};

const updateStudent = (student) => {
  return buildFetch('PUT', `students/${student.id}`, student);
};

const addStudent = (student) => {
  return buildFetch('POST', `students`, student);
};

const deleteStudentById = (id) => {
  return buildFetch('DELETE', `students/${id}`);
};

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
