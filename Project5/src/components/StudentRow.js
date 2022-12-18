/**
 *
 * @param {Object} student Student object
 * @returns HTML element of a student entry formatted and ready to display
 */
const studentRow = (student, index) => {
  const wrapper = document.createElement('div');
  const wrapperClasses = ['px-5', 'student-row', 'flex', 'w-screen', 'justify-between'];
  const contentClasses = ['w-1/4'];
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
    5: 'Bölüm',
  };
  let rowContents;
  if (student === 'header') {
    rowContents = ['İsim Soyisim', 'Öğrenci Numarası', 'Bölüm', 'Yetkiler'];
    wrapper.classList.add('bg-[#f2f3f8]');
  } else {
    rowContents = [
      `${student.fname} ${student.lname}`,
      `${student.num}`,
      `${depts[student.dept]}`,
      generateAuthButtons(),
    ];
  }

  wrapperClasses.forEach((element) => {
    wrapper.classList.add(element);
  });

  rowContents.forEach((content) => {
    const element = document.createElement('div');
    contentClasses.forEach((contentClass) => {
      element.classList.add(contentClass);
      element.classList.add('m-1.5');
    });
    element.innerText = content;
    if (student === 'header') {
      element.classList.add('font-bold');
    }
    wrapper.appendChild(element);
  });

  if (index) {
    wrapper.classList.add('even:bg-[#e2e9fc]');
  } else {
    wrapper.classList.add('even:bg-[#ffffff]');
  }
  return wrapper;
};

function generateAuthButtons() {
  return 'Auth buttons placeholder';
}

export { studentRow };
