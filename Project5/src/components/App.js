import { studentRow } from './StudentRow.js';
import { getAllStudents } from './FetchService.js';

getAllStudents().then((students) => {
  document.querySelector('body').appendChild(studentRow('header'));
  document.querySelector('body').appendChild(studentRow(students[0]));
});
