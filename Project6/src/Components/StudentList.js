import { useContext, useEffect, useState, createContext } from 'react';
import Button from 'react-bootstrap/Button';
import DeleteModal from './Modals/DeleteModal';
import { EditModal } from './Modals/EditModal';
import { ViewModal } from './Modals/ViewModal';
import Card from 'react-bootstrap/Card';
import { InfoCircle, Pen, Trash } from 'react-bootstrap-icons';

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

  // const returnElement = cardView ? 

  if (cardView) {
    return (
      <div className="row gx-5 gy-3 t-px-8 t-mb-4">
        {students.map((student) => (
          <div key={student.id} className="col-12 col-md-6 col-lg-4 col-xl-3 ">
            <Card className="student-card " color="" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  {student.fname} {student.lname}
                </Card.Title>
                <Card.Text>
                  {student.num}
                  <br />
                  {depts[student.dept]}
                </Card.Text>
                <div className="t-flex t-gap-4">
                  <Button
                    onClick={() => {
                      setStudentForBtn(student);
                      setDeleteModalShow(true);
                    }}
                    bsPrefix="auth-buttons-icon"
                    variant="danger"
                  >
                    <Trash size={18} color="red"></Trash>
                  </Button>
                  <Button
                    onClick={() => {
                      setStudentForBtn(student);
                      setEditModalShow(true);
                    }}
                    bsPrefix="auth-buttons-icon"
                    variant="primary"
                  >
                    <Pen size={18} color="blue"></Pen>
                  </Button>{' '}
                  <Button
                    onClick={() => {
                      setStudentForBtn(student);
                      setViewModalShow(true);
                    }}
                    bsPrefix="auth-buttons-icon"
                    variant="success"
                  >
                    <InfoCircle size={18} color="green"></InfoCircle>
                  </Button>{' '}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
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
      </div>
    );
  } else {
    return (
      <>
        <div>
          <div
            className={`t-py-2 t-px-8 student t-grid t-grid-cols-4 t-w-full t-bg-[#f0f2fa]`}
          >
            <div className="t-flex t-items-center">
              <b>İsim Soyisim</b>
            </div>
            <div className="t-items-center d-none d-md-flex">
              <b>Öğrenci Numarası</b>
            </div>
            <div className="d-none t-items-center t-gap-2 d-lg-flex">
              <b>Bölüm</b>
            </div>
            <div className="t-flex t-items-center t-gap-2">
              <b>Yetkiler</b>
            </div>
          </div>
        </div>
        <div className="">
          {students.map((student, index) => (
            <div
              key={student.id}
              className={`t-py-2 t-px-8 student t-grid t-grid-cols-4 t-w-full ${
                index % 2 === 1 ? 't-bg-[#e3eafd]' : 't-bg-white'
              }`}
            >
              <div className="t-flex t-items-center">
                {`${student.fname} ${student.lname}`}{' '}
              </div>
              <div className="t-items-center d-none d-md-flex">
                {student.num}
              </div>
              <div className="d-none t-items-center t-gap-2 d-lg-flex">
                {depts[student.dept]}
              </div>
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
