import { useContext, useState } from 'react';
import StudentsPagination from './StudentsPagination';
import StudentList from './StudentList';
import { StudentsContext } from '../StudentsContext';
import esoguLogo from './esogu-logo.png';
import Button from 'react-bootstrap/Button';

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
    <div className="t-flex t-justify-center t-flex-col">
      <div className="header t-px-8 t-mb-5 t-flex t-justify-between">
        <div className="t-flex t-items-center t-gap-5 mt-5 ">
          <img src={esoguLogo} className="t-w-[110px]" alt="Logo of Esogu" />
          <div>
            <p className="t-text-4xl  t-m-1">
              <b>Eskişehir Osmangazi Üniversitesi</b>
            </p>
            <p className="t-text-2xl">Öğrenci Yönetim Sistemi</p>
          </div>
        </div>
        <div className="header-left mt-2 t-flex t-flex-col t-items-end">
          <p className="t-text-xl">
            <b>Merhaba, John Doe</b>
          </p>
          <Button bsPrefix="log-out-btn btn btn-secondary" variant="secondary">
            Çıkış Yap
          </Button>
        </div>
      </div>
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
