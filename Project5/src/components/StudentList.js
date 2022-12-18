import { studentRow } from './StudentRow.js';

/**
 *
 * @param {Object} students - Student array
 * @returns HTML element of a students comprised of student entries formatted and ready to display
 * @returns A unique class of the students list
 */
export const studentList = (students) => {
  const wrapper = document.createElement('div');
  const uniqueClass = 'student-list';
  const wrapperClasses = ['flex', 'flex-col', uniqueClass];
  wrapperClasses.forEach((element) => {
    wrapper.classList.add(element);
  });

  students.forEach((student, index) => {
    wrapper.appendChild(studentRow(student, index % 2 == 1 ? true : false));
  });

  return [wrapper, uniqueClass];
};
