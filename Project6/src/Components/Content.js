import { useContext, useState } from 'react';
import StudentsPagination from './StudentsPagination';
import StudentList from './StudentList';
function Content({ Students }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage, setStudentsPerPage] = useState(8);
  //Get current posts
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = Students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const perPaginate = (perPage) => {
    const lastPageNumber = Math.ceil(Object.keys(Students).length / perPage);
    if (currentPage > lastPageNumber) {
      setCurrentPage(lastPageNumber);
    }

    setStudentsPerPage(perPage);
  };
  return (
    <div className="mt-5 ">
      <StudentList students={currentStudents} />
      <StudentsPagination
        studentsPerPage={studentsPerPage}
        totalStudents={Object.keys(Students).length}
        paginate={paginate}
        perPaginate={perPaginate}
      />
    </div>
  );
}

export default Content;
