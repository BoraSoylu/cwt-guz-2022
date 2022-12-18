import { addStudent, deleteStudentByObject, getAllStudents } from './FetchService.js';
import { handlePerPageChange, generatePerPages } from './Pagination.js';
import { studentRow } from './StudentRow.js';

export const App = () => {
  const elementClass = '.header-students';
  document.querySelector(elementClass).appendChild(studentRow('header'));

  const perPages = [5, 8, 10];
  getAllStudents().then((students) => {
    handlePerPageChange(perPages[1], students, 1);
    generatePerPages(perPages, students);
    document.querySelectorAll('.close-popup').forEach((cPopup) => {
      cPopup.addEventListener('click', () => {
        document.querySelector('#page-mask').classList.add('hidden');
        // document.querySelectorAll('input').forEach((popup) => {});
        document.querySelectorAll('.popup').forEach((popup) => {
          popup.classList.add('hidden');
        });
      });
    });
  });
};
