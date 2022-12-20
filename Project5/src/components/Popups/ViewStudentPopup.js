import { changeDateFormat, changeDateFormatToOld } from '../ChangeDateFormat.js';

export const ViewStudentPopup = (student) => {
  document.querySelector('#page-mask').classList.toggle('hidden');
  document.querySelector('#view-student').classList.toggle('hidden');
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

  document.querySelectorAll('.view-detail').forEach((viewDetailElement, index) => {
    viewDetailElement.value = sDetails[index];
  });
};
