import { getAllStudents } from './FetchService.js';
import { handlePerPageChange, generatePerPages } from './Pagination.js';
import { studentRow } from './StudentRow.js';

const elementClass = '.header-students';
document.querySelector(elementClass).appendChild(studentRow('header'));
const perPages = [5, 8, 10];
getAllStudents().then((students) => {
  handlePerPageChange(perPages[1], students,1);
  generatePerPages(perPages, students);
});
