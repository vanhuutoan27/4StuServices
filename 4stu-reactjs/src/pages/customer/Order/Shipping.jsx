import React, { useContext, useState, useEffect } from 'react';
import { Session } from '../../../App';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Order from './Order';

function Shipping() {
  // Get the user from the session
  const session = useContext(Session);
  const user = session.user;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentButtonLabel, setPaymentButtonLabel] = useState('Payment'); // Default label
  const [isMomoPaymentSelected, setIsMomoPaymentSelected] = useState(false); // State to track Momo payment

  // Check if the user has completed order-shipping and navigate back to order-account
  useEffect(() => {
    // Perform the check here, for example:
    if (user.shippingInfoCompleted) {
      // If completed, clear the shipping information values in the session
      session.updateUser({ shippingInfoCompleted: false });
    }
  }, [user, session]);

  // Handle change in payment method
  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setSelectedPaymentMethod(selectedMethod);

    // Check if "Payment via Momo" is selected
    if (selectedMethod === 'momo') {
      // Change the button label to "Payment" and set Momo payment flag
      setPaymentButtonLabel('Payment');
      setIsMomoPaymentSelected(true);
    } else {
      // Reset the button label and Momo payment flag
      setPaymentButtonLabel('Done');
      setIsMomoPaymentSelected(false);
    }
  };

  // Handle click on the "Payment" button
  const handlePaymentClick = () => {
    console.log('handlePaymentClick called');
    if (isMomoPaymentSelected) {
      // If Momo payment is selected, navigate to the "/order-payment" page
      window.location.href = '/order-payment';
    } else if (selectedPaymentMethod === 'payOnCompletion') {
      // You can perform any other actions needed here for "Payment on Completion"
      // For example, display an alert or navigate to another page
      window.location.href = '/service';
    }
  };

  return (
    <div className="OrderPage ShippingPage">
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
                <li className="step-wizard-item current-item">
                  <Link to="/order-shipping" className="progress-count">
                    2
                  </Link>
                  <Link to="/order-shipping" className="progress-label">
                    Shipping
                  </Link>
                </li>
                <li className="step-wizard-item">
                  <Link className="progress-count">3</Link>
                  <Link className="progress-label">Payment</Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="changeable-content current-item">
            <div className="main-info-section">
              <h2>Shipping Details</h2>
              <Row>
                <Col sm={7}>
                  <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={`${user.firstName} ${user.lastName}`} />
                  </Form.Group>
                </Col>
                <Col sm={5}>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={user.phone} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Payment Methods</Form.Label>
                    <Form.Control
                      as="select"
                      className="custom-select"
                      value={selectedPaymentMethod}
                      onChange={handlePaymentMethodChange} // Handle change in payment method
                    >
                      <option value="momo">Payment via Momo</option>
                      <option value="payOnCompletion">Payment on Completion</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <hr />
            <div className="btn-next-action">
              <Link to="/order-account">Back</Link>
              <Link className="btn" onClick={handlePaymentClick}>
                {paymentButtonLabel}
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

export default Shipping;
