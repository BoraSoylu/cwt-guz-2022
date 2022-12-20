import { studentList } from './StudentList.js';
const currentlyDisplaying = (totalStudents, currentStudents) => {
  document.querySelector('#student-count').innerText = totalStudents;
  document.querySelector('#students-shown').innerHTML = currentStudents;
};
/**
 *
 * @param {int} currentPage - Current page selected by the user
 * @param {int} itemsPerPage - Current amount of items to display per page
 * @param {Object} items - All objects
 */
const handlePageChange = (currentPage, itemsPerPage, items) => {
  // document.querySelector()
  currentlyDisplaying(
    `${Object.keys(items).length}`,
    `
  ${currentPage * itemsPerPage - itemsPerPage + 1} - ${
      currentPage * itemsPerPage > Object.keys(items).length
        ? Object.keys(items).length
        : currentPage * itemsPerPage
    }`
  );
  currentPage -= 1;
  const [itemsToDisplay, itemsToDisplayClass] = studentList(
    items.slice(itemsPerPage * currentPage, itemsPerPage * currentPage + itemsPerPage)
  );

  const oldElement = document.querySelector(`.${itemsToDisplayClass}`);

  if (oldElement) {
    oldElement.remove();
    const parentElement = document.querySelector('.students-list');
    parentElement.appendChild(itemsToDisplay);
  } else {
    const parentElement = document.querySelector('.students-list');
    parentElement.appendChild(itemsToDisplay);
  }
};

export const handlePerPageChange = (itemsPerPage, items, currentPage) => {
  // Generate initial page
  handlePageChange(currentPage, itemsPerPage, items);
  // Classes for CSS
  const wrapperClasses = ['flex', 'gap-3', 'page-buttons'];
  const pageButtonClasses = [
    'page-btn',
    'flex',
    'align-center',
    'justify-center',
    'bg-white',
    'hover:bg-blue-300',
    'font-bold',
    'py-1',
    'px-2.5',
    'border',
    'border-gray-700',
    'rounded',
    'text-sm',
  ];
  // Create wrapper element and add classes
  const wrapper = document.createElement('div');
  wrapperClasses.forEach((wrapperClass) => {
    wrapper.classList.add(wrapperClass);
  });

  // Create page buttons
  for (let index = 1; index <= Math.ceil(Object.keys(items).length / itemsPerPage); index++) {
    const pageButton = document.createElement('button');
    if (index == 1) {
      pageButton.classList.add('bg-blue-700');
      pageButton.classList.remove('hover:bg-blue-300');
      pageButton.classList.add('text-white');
    }
    //Create button element
    pageButton.innerText = index.toString();
    // Add classes to button element
    pageButtonClasses.forEach((pageButtonClass) => {
      pageButton.classList.add(pageButtonClass);
    });
    // Add event listener for page change to button
    pageButton.addEventListener('click', () => {
      handlePageChange(index, itemsPerPage, items);
      document.querySelectorAll('.page-btn').forEach((btn) => {
        btn.classList.remove('bg-blue-700');
        btn.classList.remove('text-white');
        btn.classList.add('hover:bg-blue-300');
        btn.classList.remove('current-page');
      });
      pageButton.classList.add('bg-blue-700');
      pageButton.classList.add('current-page');
      pageButton.classList.add('text-white');
      pageButton.classList.remove('hover:bg-blue-300');
    });

    //Append the buttons to wrapper
    wrapper.appendChild(pageButton);
  }
  // Remove old buttons from the provided HTMLElement than add the new buttons to it

  const oldElement = document.querySelector('.page-buttons');

  if (oldElement) {
    oldElement.remove();
    const parentElement = document.querySelector('.pages');
    parentElement.appendChild(wrapper);
  } else {
    const parentElement = document.querySelector('.pages');
    parentElement.appendChild(wrapper);
  }
  const pageBtns = document.querySelectorAll('.page-btn');
  pageBtns.forEach((btn) => {
    btn.classList.remove('bg-blue-700');
    btn.classList.remove('text-white');
    btn.classList.add('hover:bg-blue-300');
  });
  pageBtns[currentPage - 1].classList.add('bg-blue-700');
  pageBtns[currentPage - 1].classList.add('text-white');
  pageBtns[currentPage - 1].classList.add('current-page');
  pageBtns[currentPage - 1].classList.remove('hover:bg-blue-300');
};

export const generatePerPages = (perPages, items) => {
  // Classes for CSS
  const wrapperClasses = ['flex', 'per-page-buttons'];
  const perPageButtonClasses = [
    'flex',
    'align-center',
    'justify-center',
    'hover:bg-blue-300',
    'font-bold',
    'py-1',
    'px-2.5',
    'border',
    'border-blue-600',
    'text-sm',
    'text-blue-600',
    'per-page-btn',
  ];
  // Create wrapper element and add classes
  const wrapper = document.createElement('div');
  wrapperClasses.forEach((wrapperClass) => {
    wrapper.classList.add(wrapperClass);
  });

  perPages.forEach((perPage, index) => {
    const perPageButton = document.createElement('button');
    perPageButtonClasses.forEach((perPageButtonClass) => {
      perPageButton.classList.add(perPageButtonClass);
    });
    perPageButton.innerText = perPage;
    perPageButton.addEventListener('click', () => {
      let currentPage = Number(document.querySelector('.current-page').innerText);
      if (Math.ceil(Object.keys(items).length / perPage) < currentPage)
        currentPage = Math.ceil(Object.keys(items).length / perPage);
      handlePerPageChange(perPage, items, currentPage);
      document.querySelectorAll('.per-page-btn').forEach((btn) => {
        btn.classList.remove('bg-blue-700');
        btn.classList.add('text-blue-600');
        btn.classList.add('hover:bg-blue-300');
      });
      perPageButton.classList.add('bg-blue-700');
      perPageButton.classList.add('text-white');
      perPageButton.classList.remove('text-blue-600');
      perPageButton.classList.remove('hover:bg-blue-300');
    });
    if (index == 0) {
      perPageButton.classList.add('rounded-l');
    }
    if (index == 1) {
      perPageButton.classList.add('border-x-0');
      perPageButton.classList.add('bg-blue-700');
      perPageButton.classList.add('text-white');
      perPageButton.classList.remove('text-blue-600');
      perPageButton.classList.remove('hover:bg-blue-300');
    }
    if (index == 2) {
      perPageButton.classList.add('rounded-r');
    }
    wrapper.appendChild(perPageButton);
  });
  document.querySelector('.per-pages').appendChild(wrapper);
};
