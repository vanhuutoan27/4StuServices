import React from 'react';
import { Modal, Form } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ViewUser({ selectedUser, onClose }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Modal show={!!selectedUser} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>View User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedUser && (
          <Form>
            <Row>
              <Form.Group className="mb-3 service-image-container">
                <div className="service-image-virtual"></div>
                <img src={selectedUser.avatar} alt="User Image" className="user-avatar" />
              </Form.Group>
              <Col sm={4}></Col>
              <Col sm={4}>
                <Form.Group className="mb-3 form-id">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={`C${
                      selectedUser.customerId < 10
                        ? '00' + selectedUser.customerId
                        : '0' + selectedUser.customerId
                    }`}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className="mb-3 form-date-created">
                  <Form.Label>Date Created</Form.Label>
                  <Form.Control type="text" value={formatDate(selectedUser.dateCreated)} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={4}></Col>
              <Col sm={8}>
                <Form.Group className="mb-3 form-name">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={selectedUser.email} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={4}></Col>
              <Col sm={4}>
                <Form.Group className="mb-3 form-firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" value={selectedUser.firstName} readOnly />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className="mb-3 form-lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" value={selectedUser.lastName} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" value={selectedUser.password} readOnly />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="text" value={formatDate(selectedUser.dob)} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" value={selectedUser.phone} readOnly />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" value={selectedUser.status} readOnly />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="button-modal" onClick={onClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewUser;
