import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { formatDate } from '../../../utils/DateUtils';
import { formatPriceWithDot } from '../../../utils/PriceUtils';

function ViewTask({ task, onClose }) {
  return (
    <Modal show={!!task} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>View Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {task && (
          <Form>
            <Row>
              <Col sm={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Task ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={`O${
                      task.orderInfo.orderId < 10
                        ? '00' + task.orderInfo.orderId
                        : '0' + task.orderInfo.orderId
                    }`}
                    readOnly
                  />
                </Form.Group>
              </Col>

              <Col sm={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Date Created</Form.Label>
                  <Form.Control type="text" value={formatDate(task.dateShipping)} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" value={task.orderInfo.customerName} readOnly />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" value={task.orderInfo.phone} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3 form-name">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={task.orderInfo.email} readOnly />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Note</Form.Label>
                  <Form.Control type="text" value={task.orderInfo.note} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" value={task.orderInfo.address} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Service Name</Form.Label>
                  <Form.Control type="text" value={task.orderInfo.serviceName} readOnly />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Total</Form.Label>
                  <Form.Control
                    type="text"
                    value={`${formatPriceWithDot(task.orderInfo.price)} VND`}
                    readOnly
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control type="text" value={task.orderInfo.paymentMethod} readOnly />
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

export default ViewTask;
