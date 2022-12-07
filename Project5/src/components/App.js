import { studentRow } from './StudentRow.js';
import { getAllStudents } from './FetchService.js';

getAllStudents().then((students) => {
  studentRow(students[0]);
});
