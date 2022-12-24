import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import DeleteModal from './Modals/DeleteModal';
import axios from 'axios';
import { StudentsContext } from '../StudentsContext';
const url = 'http://localhost:8000/students';

function StudentList({ students, setStudents }) {
  const { globalStudents, setGlobalStudents } = useContext(StudentsContext);
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };
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
  //handle button events
  const handleDelete = (studentToDelete) => {
    axios.delete(`${url}/${studentToDelete.id}`).then(() => {
      setGlobalStudents(
        globalStudents.filter(function (el) {
          return el.id != studentToDelete.id;
        })
      );
    });
  };
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
              <Button bsPrefix="auth-buttons btn btn-primary" variant="primary">
                Düzenle
              </Button>{' '}
              <Button bsPrefix="auth-buttons btn btn-success" variant="success">
                Detay
              </Button>{' '}
            </div>
          </div>
        ))}
      </div>
      <DeleteModal
        student={studentForBtn}
        handleDelete={handleDelete}
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
      />
    </>
  );
}

export default StudentList;
