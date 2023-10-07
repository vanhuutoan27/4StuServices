import React from 'react';

import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Order.css';

function Order() {
  return (
    <div className="order-section">
      <h2>Order Summary</h2>
      <img src="../assets/images/4Stu-Logo.svg" alt="Image Order" />
      <p>Nguyen Tan Loc</p>
      <h3>50.000VND</h3>
      <div className="price-content">
        <div className="discount-section">
          <Form.Control type="text" placeholder="Discount Code" />
          <a href="" className="btn">
            Apply
          </a>
        </div>

        <div className="sub-total">
          <p>Sub Total</p>
          <p>45.000 VND</p>
        </div>

        <div className="tax">
          <p>Tax</p>
          <p>5.000 VND</p>
        </div>

        <div className="shipping">
          <p>Shipping</p>
          <p>Free</p>
        </div>

        <div className="total">
          <p>Total</p>
          <p>50.000 VND</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
