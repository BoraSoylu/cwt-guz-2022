function StudentRow({ Student }) {
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };

  return (
    <div className="">
      <div className="">
        <div className="">{Student.fname}</div>
        <div className="">{Student.lname}</div>
      </div>
      <div className="">{Student.num}</div>
      <div className="">{depts[Student.dept]}</div>
    </div>
  );
}

export default StudentRow;
