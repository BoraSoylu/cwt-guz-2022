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
    console.log('1');
    setStudentsPerPage(perPage);
    console.log('2');

    const lastPageNumber = Math.ceil(Object.keys(globalStudents).length / perPage);
    if (currentPage > lastPageNumber) {
      setCurrentPage(lastPageNumber);
      setActivePage(lastPageNumber);
    }
  };

  return (
    <div className="mt-5 ">
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
