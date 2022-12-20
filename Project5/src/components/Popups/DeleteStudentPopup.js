import { deleteStudentById } from '../FetchService.js';

export const DeleteStudentPopup = (student) => {
  document.querySelector('#page-mask').classList.toggle('hidden');
  document.querySelector('#delete-student').classList.toggle('hidden');
  const s = `<b>${student.fname}</b> <b>${student.lname}</b> isimli öğrenciyi siliyorsunuz. Bu işlem geri alınamaz. Devam etmek istediğinize emin misiniz?`;
  document.querySelector('.delete-student-text').innerHTML = s;
  document.querySelector('.final-delete').id = student.id;

  const old_element = document.querySelector('.final-delete');
  const new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);

  document.querySelector('.final-delete').addEventListener('click', () => {
    deleteStudentById(Number(document.querySelector('.final-delete').id));
    document.querySelector('#page-mask').classList.toggle('hidden');
    document.querySelector('#delete-student').classList.toggle('hidden');
  });
};
