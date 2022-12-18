import { ViewStudentPopup } from '../Popups/ViewStudentPopup.js';

export const ViewStudentButton = (student) => {
  const btn = document.createElement('button');
  btn.innerText = 'Detay';
  const btnClassList = [
    'flex',
    'align-center',
    'justify-center',
    'bg-green-700',
    'hover:bg-green-500',
    'font-bold',
    'text-white',
    'py-1.5',
    'px-5',
    'border',
    'border-green-700',
    'rounded',
    'text-sm',
    'my-1'
  ];
  btnClassList.forEach((c) => {
    btn.classList.add(c);
  });

  btn.addEventListener('click', () => {
    ViewStudentPopup(student);
  });

  return btn;
};
