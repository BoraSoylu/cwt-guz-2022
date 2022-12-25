import { StudentsContext } from '../../StudentsContext';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { InfoCircleFill } from 'react-bootstrap-icons';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import tr from 'date-fns/locale/tr';
import axios from 'axios';
const url = 'http://localhost:8000/students';

export const EditModal = (props) => {
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };
  const [startDate, setStartDate] = useState(null);
  registerLocale('tr', tr);

  const [validated, setValidated] = useState(false);
  const { globalStudents, setGlobalStudents } = useContext(StudentsContext);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const updatedStudent = {
      id: props.student.id,
      fname: event.target[1].value,
      lname: event.target[2].value,
      num: event.target[3].value,
      dept: Object.keys(depts).find((k) => depts[k] === event.target[4].value),
      pob: event.target[5].value,
      dob: event.target[6].value.replace(
        /(\d{2})\/(\d{2})\/(\d{4})/,
        '$3-$2-$1'
      ),
    };
    axios.put(`${url}/${props.student.id}`, updatedStudent).then(() => {
      setGlobalStudents(
        globalStudents.map((obj) => {
          if (obj.id === updatedStudent.id) {
            return updatedStudent;
          }
          return obj;
        })
      );
    });
    props.onHide();
    setValidated(true);
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="t-flex t-items-center t-gap-2">
              <InfoCircleFill size={20} color="blue" /> Öğrenciyi Düzenle
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row className="mb-3 gy-3">
              <Form.Group as={Col} xs={12} md={6} controlId="formFname">
                <Form.Label>İsim</Form.Label>
                <Form.Control
                  type="text"
                  pattern={/^[a-zA-ZÇĞİÖŞÜçğıöşü\d]{3,}$/.source}
                  defaultValue={props.student.fname}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  İsim en az 3 harf içermelidir.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formLname">
                <Form.Label>Soyisim</Form.Label>
                <Form.Control
                  defaultValue={props.student.lname}
                  type="text"
                  pattern={/^[a-zA-ZÇĞİÖŞÜçğıöşü\d]{3,}$/.source}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Soyisim en az 3 harf içermelidir.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formNum">
                <Form.Label>Öğrenci Numarası</Form.Label>
                <Form.Control
                  defaultValue={props.student.num}
                  type="text"
                  pattern={/^\d{12}$/.source}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Öğrenci numarası 12 rakam içermelidir.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formDept">
                <Form.Label>Bölüm</Form.Label>
                <Form.Select defaultValue={depts[props.student.dept]}>
                  <option>Bilgisayar Müh.</option>
                  <option>Elektrik-Elektronik Müh.</option>
                  <option>Endüstri Müh.</option>
                  <option>İnşaat Müh.</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formPob">
                <Form.Label>Doğum Yeri</Form.Label>
                <Form.Control
                  defaultValue={props.student.lname}
                  type="text"
                  pattern={/^[a-zA-ZÇĞİÖŞÜçğıöşü\d]{3,}$/.source}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Doğum yeri en az 3 hard içermelidir.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formDob">
                <Form.Label>Doğum Tarihi</Form.Label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                  selected={startDate ? startDate : new Date(props.student.dob)}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  onChange={(date) => setStartDate(date)}
                  locale="tr"
                  required
                />
              </Form.Group>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Vazgeç
          </Button>
          <Button type="submit">Onayla</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
