import { useContext, useState } from 'react';
import StudentsPagination from './StudentsPagination';
import StudentList from './StudentList';
import { StudentsContext } from '../StudentsContext';
function Content() {
  const { globalStudents, setGlobalStudents } = useContext(StudentsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage, setStudentsPerPage] = useState(8);
  //Get current posts
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = globalStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const perPaginate = (perPage, setActivePage) => {
    setStudentsPerPage(perPage);

    const lastPageNumber = Math.ceil(
      Object.keys(globalStudents).length / perPage
    );
    if (currentPage > lastPageNumber) {
      setCurrentPage(lastPageNumber);
      setActivePage(lastPageNumber);
    }
  };

  return (
    <div className="mt-5  t-flex t-justify-center t-flex-col">
      <StudentList students={currentStudents} setStudents={setGlobalStudents} />
      <StudentsPagination
        studentsPerPage={studentsPerPage}
        totalStudents={Object.keys(globalStudents).length}
        paginate={paginate}
        perPaginate={perPaginate}
      />
    </div>
  );
}

export default Content;
