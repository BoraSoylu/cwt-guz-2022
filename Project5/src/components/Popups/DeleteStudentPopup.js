export const DeleteStudentPopup = (student) => {
  document.querySelector('#page-mask').classList.toggle('hidden');
  document.querySelector('#delete-student').classList.toggle('hidden');
  const s = `<b>${student.fname}</b> <b>${student.lname}</b> isimli öğrenciyi siliyorsunuz. Bu işlem geri alınamaz. Devam etmek istediğinize emin misiniz?`;
  document.querySelector('.delete-student-text').innerHTML = s;
};
