import { studentList } from './StudentList.js';
/**
 *
 * @param {int} currentPage - Current page selected by the user
 * @param {int} itemsPerPage - Current amount of items to display per page
 * @param {Object} items - All objects
 */
const handlePageChange = (currentPage, itemsPerPage, items) => {
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

export const handlePerPageChange = (itemsPerPage, items) => {
  // Generate initial page
  handlePageChange(1, itemsPerPage, items);
  // Classes for CSS
  const wrapperClasses = ['flex', 'gap-5', 'page-buttons'];
  const pageButtonClasses = ['flex', 'align-center', 'justify-center', 'w-[20px]', 'h-[20px]'];
  // Create wrapper element and add classes
  const wrapper = document.createElement('div');
  wrapperClasses.forEach((wrapperClass) => {
    wrapper.classList.add(wrapperClass);
  });

  // Create page buttons
  for (let index = 1; index <= Math.ceil(Object.keys(items).length / itemsPerPage); index++) {
    //Create button element
    const pageButton = document.createElement('button');
    pageButton.innerText = index.toString();
    // Add classes to button element
    pageButtonClasses.forEach((pageButtonClass) => {
      pageButton.classList.add(pageButtonClass);
    });
    // Add event listener for page change to button
    pageButton.addEventListener('click', () => {
      handlePageChange(index, itemsPerPage, items);
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
};

export const generatePerPages = (perPages, items) => {
  // Classes for CSS
  const wrapperClasses = ['flex', 'gap-5', 'per-page-buttons'];
  const perPageButtonClasses = ['flex', 'align-center', 'justify-center', 'w-[20px]', 'h-[20px]'];
  // Create wrapper element and add classes
  const wrapper = document.createElement('div');
  wrapperClasses.forEach((wrapperClass) => {
    wrapper.classList.add(wrapperClass);
  });

  perPages.forEach((perPage) => {
    const perPageButton = document.createElement('button');
    perPageButtonClasses.forEach((perPageButtonClass) => {
      perPageButton.classList.add(perPageButtonClass);
    });
    perPageButton.innerText = perPage;
    perPageButton.addEventListener('click', () => {
      handlePerPageChange(perPage, items);
    });
    wrapper.appendChild(perPageButton);
  });
  console.log('added per page buttons');
  document.querySelector('.per-pages').appendChild(wrapper);
};
