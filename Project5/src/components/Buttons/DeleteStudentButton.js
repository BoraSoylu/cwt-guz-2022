import { deleteStudentByObject } from '../FetchService.js';
import { DeleteStudentPopup } from '../Popups/DeleteStudentPopup.js';

export const DeleteStudentButton = (student) => {
  const btn = document.createElement('button');
  btn.innerText = 'Sil';
  const btnClassList = [
    'flex',
    'align-center',
    'justify-center',
    'bg-red-700',
    'hover:bg-red-500',
    'font-bold',
    'text-white',
    'py-1.5',
    'px-5',
    'border',
    'border-red-700',
    'rounded',
    'text-sm',
    'my-1',
    'auth-buttons',
    'delete-student-btn',
  ];
  btnClassList.forEach((c) => {
    btn.classList.add(c);
  });

  btn.addEventListener('click', () => {
    DeleteStudentPopup(student);
  });

  return btn;
};
