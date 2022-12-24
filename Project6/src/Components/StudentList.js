function StudentList({ students }) {
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };
  return (
    <>
      <div className="">
        {students.map((student) => (
          <div
            key={student.id}
            className="student t-grid t-grid-cols-4 t-w-full border"
          >
            <div className="">{`${student.fname} ${student.lname}`} </div>
            <div className="">{student.num}</div>
            <div className="">{depts[student.dept]}</div>
            <div className="">Buttons Place Holder</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentList;
