import { changeDateFormat, changeDateFormatToOld } from '../ChangeDateFormat.js';
import { updateStudent } from '../FetchService.js';

export const EditStudentPopup = (student) => {
  document.querySelector('#page-mask').classList.toggle('hidden');
  console.log('asdasd');
  document.querySelector('#edit-student').classList.toggle('hidden');
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };
  const sDetails = [
    student.fname,
    student.lname,
    student.num,
    depts[student.dept],
    student.pob,
    student.dob,
  ];
  sDetails[5] = changeDateFormat(sDetails[5]);
  document.querySelectorAll('.edit').forEach((viewDetailElement, index) => {
    viewDetailElement.value = sDetails[index];
  });
  const old_element = document.querySelector('.final-update');
  const new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  document.querySelector('.final-update').addEventListener('click', () => {
    validateEdit();
    student.fname = document.querySelector('.fname-update').value;
    student.lname = document.querySelector('.lname-update').value;
    student.num = document.querySelector('.num-update').value;
    student.dept = document.querySelector('.dept-update').value;
    // student.dept = findNumberDept(document.querySelector('.dept-update').value);
    student.pob = document.querySelector('.pob-update').value;
    student.dob = document.querySelector('.dob-update').value;
    student.dob = changeDateFormatToOld(student.dob);
    student.dept = findNumberDept(student.dept);
    updateStudent(student);
  });
  function validateEdit() {
    console.log('placeholder validate');
  }
  function findNumberDept(data) {
    const depts = {
      1: 'Bilgisayar Müh.',
      2: 'Elektrik-Elektronik Müh.',
      3: 'Endüstri Müh.',
      4: 'İnşaat Müh.',
    };

    return Object.keys(depts).find((key) => depts[key] === data);
  }
};
