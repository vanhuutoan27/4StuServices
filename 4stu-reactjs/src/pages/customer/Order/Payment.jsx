import React from 'react';

import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Order from './Order';

function Payment() {
  return (
    <div className="OrderPage">
      <Navigation />
      <div className="content">
        <div className="info-section">
          <div className="process-info">
            <section className="step-wizard">
              <ul className="step-wizard-list">
                <li className="step-wizard-item">
                  <Link to="/order-account" className="progress-count">
                    1
                  </Link>
                  <Link to="/order-account" className="progress-label">
                    Account
                  </Link>
                </li>
                <li className="step-wizard-item">
                  <Link to="/order-shipping" className="progress-count">
                    2
                  </Link>
                  <Link to="/order-shipping" className="progress-label">
                    Shipping
                  </Link>
                </li>
                <li className="step-wizard-item current-item">
                  <Link to="/order-payment" className="progress-count">
                    3
                  </Link>
                  <Link to="/order-payment" className="progress-label">
                    Payment
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="changeable-content current-item">
            <div className="main-info-section">
              <h2>Payment Details</h2>
              <Row>
                <Col sm={4}>
                  <div className="qr-payment">
                    <img src="../assets/images/QRPayment.jpg" alt="QR Payment" />
                  </div>
                </Col>

                <Col sm={8}>
                  <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type="text" value={'Van Huu Toan'} readOnly />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type="text" value={'0792766979'} readOnly />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Label>Payment Content</Form.Label>
                <Form.Control type="text" placeholder="YourFullName - YourPhoneNumber - Code" />
              </Form.Group>
            </div>
            <hr />
            <div className="btn-next-action">
              <Link to="/order-shipping">Back</Link>
              <Link to="/" className="btn">
                Done
              </Link>
            </div>
          </div>
        </div>
        <Order />
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
