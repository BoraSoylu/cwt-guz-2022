import { changeDateFormat, changeDateFormatToOld } from '../ChangeDateFormat.js';
import { addStudent } from '../FetchService.js';

export const AddStudentPopup = () => {
  document.querySelector('#page-mask').classList.toggle('hidden');
  document.querySelector('#add-student').classList.toggle('hidden');
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };
  const sDetails = {
    fname: '',
    lname: '',
    num: '',
    student: '',
    pob: '',
    dob: '',
  };
  const old_element = document.querySelector('.final-add');
  const new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  document.querySelector('.final-add').addEventListener('click', () => {
    sDetails.fname = document.querySelector('.fname-add').value;
    sDetails.lname = document.querySelector('.lname-add').value;
    sDetails.num = document.querySelector('.num-add').value;
    sDetails.dept = document.querySelector('.dept-add').value;
    // student.dept = findNumberDept(document.querySelector('.dept-add').value);
    sDetails.pob = document.querySelector('.pob-add').value;
    sDetails.dob = document.querySelector('.dob-add').value;
    sDetails.dob = changeDateFormatToOld(sDetails.dob);
    sDetails.dept = findNumberDept(sDetails.dept);
    const regex = new RegExp('(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}');
    let formFilled = true;
    document.querySelectorAll('.add').forEach((e) => {
      if (e.value.toString().length < 4) {
        formFilled = false;
      }
    });
    if (regex.test(document.querySelector('.dob-add').value) && formFilled) {
      addStudent(sDetails);
    }
  });
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

export const testA = () => {
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA');
};
