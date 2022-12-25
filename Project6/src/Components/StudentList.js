import { useContext, useEffect, useState, createContext } from 'react';
import Button from 'react-bootstrap/Button';
import DeleteModal from './Modals/DeleteModal';
import { EditModal } from './Modals/EditModal';
import { ViewModal } from './Modals/ViewModal';
function StudentList({ students, setStudents }) {
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };
  //Card view state
  const [cardView, setCardView] = useState(true);
  //Student State
  const [studentForBtn, setStudentForBtn] = useState({
    id: '',
    fname: '',
    lname: '',
    num: '',
    dept: '',
    pob: '',
    dob: '',
  });
  //Modal States
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [viewModalShow, setViewModalShow] = useState(false);
  if (cardView) {
    
  } else {
    return (
      <>
        <div className="">
          {students.map((student, index) => (
            <div
              key={student.id}
              className={`t-py-2 t-px-4 student t-grid t-grid-cols-4 t-w-full ${
                index % 2 === 1 ? 't-bg-[#e3eafd]' : 't-bg-white'
              }`}
            >
              <div className="t-flex t-items-center">
                {`${student.fname} ${student.lname}`}{' '}
              </div>
              <div className="t-flex t-items-center">{student.num}</div>
              <div className="t-flex t-items-center">{depts[student.dept]}</div>
              <div className="t-flex t-items-center t-gap-2">
                <Button
                  onClick={() => {
                    setStudentForBtn(student);
                    setDeleteModalShow(true);
                  }}
                  bsPrefix="auth-buttons btn btn-danger"
                  variant="danger"
                >
                  Sil
                </Button>{' '}
                <Button
                  onClick={() => {
                    setStudentForBtn(student);
                    setEditModalShow(true);
                  }}
                  bsPrefix="auth-buttons btn btn-primary"
                  variant="primary"
                >
                  Düzenle
                </Button>{' '}
                <Button
                  onClick={() => {
                    setStudentForBtn(student);
                    setViewModalShow(true);
                  }}
                  bsPrefix="auth-buttons btn btn-success"
                  variant="success"
                >
                  Detay
                </Button>{' '}
              </div>
            </div>
          ))}
        </div>
        <DeleteModal
          student={studentForBtn}
          show={deleteModalShow}
          onHide={() => setDeleteModalShow(false)}
        />
        <EditModal
          student={studentForBtn}
          show={editModalShow}
          onHide={() => setEditModalShow(false)}
        />
        <ViewModal
          student={studentForBtn}
          show={viewModalShow}
          onHide={() => setViewModalShow(false)}
        />
      </>
    );
  }
}

export default StudentList;
