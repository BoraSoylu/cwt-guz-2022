const studentRow = (student) => {
  const wrapperClasses = [
    'student-row',
    'flex',
    'border',
    'w-screen',
    'justify-between',
  ];
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
  } else {
    rowContents = [
      `${student.fname} ${student.lname}`,
      `${student.num}`,
      `${depts[student.dept]}`,
      generateAuthButtons(),
    ];
  }

  const wrapper = document.createElement('div');
  wrapperClasses.forEach((element) => {
    wrapper.classList.add(element);
  });

  rowContents.forEach((content) => {
    const element = document.createElement('div');
    contentClasses.forEach((contentClass) => {
      element.classList.add(contentClass);
    });
    element.innerText = content;
    wrapper.appendChild(element);
  });

  return wrapper;
};

function generateAuthButtons() {
  return 'Auth buttons placeholder';
}

export { studentRow };
