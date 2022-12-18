import { getAllStudents } from './FetchService.js';
import { handlePerPageChange, generatePerPages } from './Pagination.js';
import { studentRow } from './StudentRow.js';
import { ViewStudentButton } from './Buttons/ViewStudentButton.js';

export const App = () => {
  const elementClass = '.header-students';
  document.querySelector(elementClass).appendChild(studentRow('header'));

  // --------------------------------------
  const student = {
    id: 1,
    fname: 'Isim1',
    lname: 'Soyisim1',
    num: '152120171101',
    dept: '2',
    pob: 'Eskişehir',
    dob: '1999-03-23',
  };
  document.querySelector(elementClass).appendChild(ViewStudentButton(student));
  // --------------------------------------

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
