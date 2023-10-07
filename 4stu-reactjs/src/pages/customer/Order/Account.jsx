import React, { useContext, useState } from 'react';
import { Session } from '../../../App';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Order from './Order';

function Account() {
  const session = useContext(Session);
  const user = session.user;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  // Check if session.user is not null before destructuring
  const { email = '', password = '' } = session.user || {};

  const formik = useFormik({
    initialValues: {
      email: 'user1@gmail.com',
      password: '123456',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),

    onSubmit: (values) => {
      setIsSubmitting(true); // Set loading state
      setLoginError(null); // Reset any previous login errors

      axios
        .post('https://localhost:7088/api/CustomerManagements/Login', {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('accessToken', response.data.accessToken);

          window.location.href = '/order-shipping';
        })
        .catch((error) => {
          setLoginError('Invalid email or password. Please try again.');
          console.log(error);

          alert('Failed to login. Please try again');
        })
        .finally(() => {
          setIsSubmitting(false); // Clear loading state
        });
    },
  });

  return (
    <div className="OrderPage AccountPage">
      <Navigation />
      <div className="content">
        <div className="info-section">
          <div className="process-info">
            <section className="step-wizard">
              <ul className="step-wizard-list">
                <li className="step-wizard-item current-item">
                  <Link to="/order-account" className="progress-count">
                    1
                  </Link>
                  <Link to="/order-account" className="progress-label">
                    Account
                  </Link>
                </li>
                <li className="step-wizard-item">
                  <Link className="progress-count">2</Link>
                  <Link className="progress-label">Shipping</Link>
                </li>
                <li className="step-wizard-item">
                  <Link className="progress-count">3</Link>
                  <Link className="progress-label">Payment</Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="changeable-content">
            <div className="main-info-section">
              <h2>Account Details</h2>
              <Form class="account-form" onSubmit={formik.handleSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error-msg">{formik.errors.email}</div>
                  ) : null}
                  <Form.Control
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error-msg">{formik.errors.password}</div>
                  ) : null}
                  <Form.Control
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Form.Group>
                <div className="btn-action">
                  <a href="/login">Register</a>
                  <button type="submit" className="btn">
                    {isSubmitting ? 'Logging In...' : 'Login'}
                  </button>
                </div>
              </Form>
            </div>

            <hr />
          </div>
        </div>

        <Order />
      </div>
      <Footer />
    </div>
  );
}

export default Account;
