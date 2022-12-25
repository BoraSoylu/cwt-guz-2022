import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { InfoCircleFill } from 'react-bootstrap-icons';

export const ViewModal = (props) => {
  const depts = {
    1: 'Bilgisayar Müh.',
    2: 'Elektrik-Elektronik Müh.',
    3: 'Endüstri Müh.',
    4: 'İnşaat Müh.',
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Form>
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
              <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                <Form.Label>İsim</Form.Label>
                <Form.Control
                  disabled
                  defaultValue={props.student.fname}
                  type="name"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                <Form.Label>Soyisim</Form.Label>
                <Form.Control
                  disabled
                  defaultValue={props.student.lname}
                  type="name"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                <Form.Label>Öğrenci Numarası</Form.Label>
                <Form.Control
                  disabled
                  defaultValue={props.student.num}
                  type="name"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                <Form.Label>Bölüm</Form.Label>
                <Form.Control
                  disabled
                  defaultValue={depts[props.student.dept]}
                  type="name"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                <Form.Label>Doğum Yeri</Form.Label>
                <Form.Control
                  disabled
                  defaultValue={props.student.pob}
                  type="name"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                <Form.Label>Doğum Tarihi</Form.Label>
                <Form.Control
                  disabled
                  defaultValue={props.student.dob.replace(
                    /(\d{4})-(\d{2})-(\d{2})/,
                    '$3/$2/$1'
                  )}
                  type="name"
                />
              </Form.Group>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Vazgeç
          </Button>
          <Button onClick={props.onHide}>Onayla</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
