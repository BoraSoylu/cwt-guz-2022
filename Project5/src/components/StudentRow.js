const studentRow = (student) => {
  const wrapperClasses = ['student-row'];

  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };
  const wrapper = document.createElement('div');
  wrapperClasses.forEach((element) => {
    wrapper.classList.add(element);
  });

  const rowContents = [
    `${student.fname} ${student.lname}`,
    `${student.num}`,
    `${depts[student.dept]}`,
    'buttons',
  ];
  rowContents.forEach((content) => {
    const element = document.createElement('div');
    element.innerText = content;
    wrapper.appendChild(element);
  });

  return wrapper;
};

export { studentRow };
