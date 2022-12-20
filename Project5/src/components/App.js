import { getAllStudents } from './FetchService.js';
import { handlePerPageChange, generatePerPages } from './Pagination.js';
import { studentRow } from './StudentRow.js';
import Datepicker from 'flowbite-datepicker/Datepicker';
import tr from '../../node_modules/flowbite-datepicker/js/i18n/locales/tr.js';
import { AddStudentPopup } from './Popups/AddStudentPopup.js';

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
    document.querySelectorAll('.dept-selection').forEach((e) => {
      e.addEventListener('click', () => {
        document.querySelectorAll('.departments').forEach((a) => {
          a.classList.toggle('hidden');
        });
      });
    });
    document.querySelectorAll('.radio-btn').forEach((b) => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.dept-selection').forEach((z) => {
          z.value = b.value;
        });
      });
    });
    initDate();
    initAddStudent();
  });
  function initDate() {
    Datepicker.locales.tr = tr.tr;

    const datepickerOptions = {
      language: 'tr',
      weekStart: 1,
      format: 'dd/mm/yyyy',
      maxDate: new Date(),
      minDate: new Date(1900, 1 - 1, 1),
      constrainInput: true,
      defaultViewDate: new Date(2000, 1, 1),
    };
    document.querySelectorAll('[datepicker]').forEach((datepickerEl) => {
      const d = new Datepicker(datepickerEl);
      d.setOptions(datepickerOptions);
      console.log(d);
    });
  }
  function initAddStudent() {
    document.querySelector('#add-student-final').addEventListener('click', () => {
      AddStudentPopup();
      document.querySelector('.fname-add').value = '';
      document.querySelector('.lname-add').value = '';
      document.querySelector('.num-add').value = '';
      document.querySelector('.dept-add').value = '';
      document.querySelector('.pob-add').value = '';
      document.querySelector('.dob-add').value = '';
    });
  }
};
