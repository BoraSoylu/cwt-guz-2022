import { StudentsContext } from '../../StudentsContext';
import React, { useContext, useState } from 'react';
import { ExclamationTriangleFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
const url = 'http://localhost:8000/students';

const DeleteModal = (props) => {
  const { student, ...others } = props;
  const { globalStudents, setGlobalStudents } = useContext(StudentsContext);
  const handleDelete = () => {
    axios.delete(`${url}/${props.student.id}`).then(() => {
      setGlobalStudents(
        globalStudents.filter((obj) => {
          return obj.id !== student.id;
        })
      );
    });
  };
  return (
    <Modal {...others} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="t-flex t-items-center t-gap-2">
            <ExclamationTriangleFill size={20} color="red" /> Öğrenciyi Sil
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <b>{`${student.fname} ${student.lname}`}</b> isimli öğrenciyi
        siliyorsunuz. Bu işlem geri alınamaz. Devam etmek istediğinize emin
        misiniz?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={others.onHide}>
          Vazgeç
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleDelete(student);
            others.onHide();
          }}
        >
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
