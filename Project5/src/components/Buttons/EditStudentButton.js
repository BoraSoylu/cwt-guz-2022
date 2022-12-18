import { EditStudentPopup } from '../Popups/EditStudentPopup.js';

export const EditStudentButton = (student) => {
  const btn = document.createElement('button');
  btn.innerText = 'Düzenle';
  const btnClassList = [
    'flex',
    'align-center',
    'justify-center',
    'bg-blue-700',
    'hover:bg-blue-500',
    'font-bold',
    'text-white',
    'py-1.5',
    'px-5',
    'border',
    'border-blue-700',
    'rounded',
    'text-sm',
    'my-1',
  ];
  btnClassList.forEach((c) => {
    btn.classList.add(c);
  });

  btn.addEventListener('click', () => {
    EditStudentPopup(student);
  });

  return btn;
};
