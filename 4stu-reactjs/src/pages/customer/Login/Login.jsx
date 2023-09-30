import React, { useContext, useEffect, useState } from 'react';
import { Session } from '../../../App';
import { GoogleSignIn } from '../../../components/Google';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Login.css';

function Login() {
  const navigate = useNavigate();
  const session = useContext(Session);

  // Trạng thái loading
  const [isLoading, setIsLoading] = useState(false);

  // Thông báo lỗi đăng nhập
  const [loginError, setLoginError] = useState(null);

  // Thông báo lỗi đăng ký
  const [registerError, setRegisterError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const formik = useFormik({
    //! Giá trị khởi tạo của form
    initialValues: {
      email: 'user1@gmail.com',
      password: '123456',
    },

    //! Xác định các phần Validation
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),

    //! Cái hàm sẽ xử lý nhấn Submit
    onSubmit: (values) => {
      // Hiển thị hiệu ứng loading trước khi thực hiện đăng nhập
      setIsLoading(true);

      axios
        .post('https://localhost:7088/api/CustomerManagements/Login', {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          // Đăng nhập thành công, cập nhật trạng thái user và điều hướng đến '/home'
          console.log(response.data);
          localStorage.setItem('accessToken', response.data.accessToken);
          navigate('/');
          window.location.reload();
        })
        .catch((error) => {
          // Đăng nhập thất bại, cập nhật trạng thái lỗi
          setLoginError('Invalid email or password. Please try again.');
          console.log(error);
        })
        .finally(() => {
          // Thực hiện hành động sau cả hai trường hợp thành công và thất bại
          setIsLoading(false); // Dừng hiệu ứng loading
        });
    },
  });

  const formikRegister = useFormik({
    //! Giá trị khởi tạo của form đăng ký
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },

    //! Xác định các phần Validation cho form đăng ký
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),

    //! Cái hàm sẽ xử lý nhấn Submit cho form đăng ký
    onSubmit: (values) => {
      // Hiển thị hiệu ứng loading trước khi thực hiện đăng ký
      setIsLoading(true);

      axios
        .post('https://localhost:7088/api/CustomerManagements/Register', {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
        .then((response) => {
          // Đăng ký thành công, cập nhật trạng thái và thông báo
          setIsRegistered(true);
          setRegisterError(null);
          alert('Registration successful! Welcome to 4Stu!');
        })
        .catch((error) => {
          // Đăng ký thất bại, cập nhật trạng thái lỗi
          setIsRegistered(false);
          alert('Registration failed. Please try again.');
          console.log(error);
        })
        .finally(() => {
          // Dừng hiệu ứng loading sau khi hoàn thành đăng ký
          setIsLoading(false);
        });
    },
  });

  useEffect(() => {
    const registerButton = document.getElementById('register');
    const loginButton = document.getElementById('login');
    const container = document.getElementById('container');

    if (registerButton && loginButton && container) {
      registerButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      loginButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    }
  }, []);

  return (
    <div className="body">
      <div className="bg-animation">
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="login-main-container" id="container">
        <div className="form-container login-container">
          <form action="#" onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-msg">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-msg">{formik.errors.password}</div>
            ) : null}

            <div className="login-options">
              <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" className="remember-me-btn" />
                <label htmlFor="checkbox" id="remember-label">
                  Remember me
                </label>
              </div>
              <div className="pass-link">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            {loginError && <div className="error-msg-2">{loginError}</div>}
            <button className="btn" type="submit">
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <hr />
            <span>Or Use Another Account</span>
            <GoogleSignIn />
          </form>
        </div>

        <div className="form-container register-container">
          <form action="#" onSubmit={formikRegister.handleSubmit}>
            <h1>Register</h1>
            <div className="fullname">
              <div className="firstname">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" {...formikRegister.getFieldProps('firstName')} />
                {formikRegister.touched.firstName && formikRegister.errors.firstName ? (
                  <div className="error-msg">{formikRegister.errors.firstName}</div>
                ) : null}
              </div>
              <div className="lastname">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" {...formikRegister.getFieldProps('lastName')} />
                {formikRegister.touched.lastName && formikRegister.errors.lastName ? (
                  <div className="error-msg">{formikRegister.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <label htmlFor="registerEmail">Email</label>
            <input id="registerEmail" type="email" {...formikRegister.getFieldProps('email')} />
            {formikRegister.touched.email && formikRegister.errors.email ? (
              <div className="error-msg">{formikRegister.errors.email}</div>
            ) : null}
            <label htmlFor="registerPhone">Phone</label>
            <input id="registerPhone" type="text" {...formikRegister.getFieldProps('phone')} />
            {formikRegister.touched.phone && formikRegister.errors.phone ? (
              <div className="error-msg">{formikRegister.errors.phone}</div>
            ) : null}
            <div className="fullname">
              <div className="firstname">
                <label htmlFor="registerPassword">Password</label>
                <input
                  id="registerPassword"
                  type="password"
                  {...formikRegister.getFieldProps('password')}
                />
                {formikRegister.touched.password && formikRegister.errors.password ? (
                  <div className="error-msg">{formikRegister.errors.password}</div>
                ) : null}
              </div>
              <div className="lastname">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  {...formikRegister.getFieldProps('confirmPassword')}
                />
                {formikRegister.touched.confirmPassword && formikRegister.errors.confirmPassword ? (
                  <div className="error-msg">{formikRegister.errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>
            {registerError && <div className="error-msg-2">{registerError}</div>}
            <button className="btn" type="submit">
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login-title">
                Halo <br />
                My Friend
              </h1>
              <p className="login-ques">Already Have An Account?</p>
              <div className="ghost btn" id="login">
                Login
              </div>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login-title">
                Start Booking <br />
                Service Now
              </h1>
              <p className="login-ques">Don't Have An Account Yet?</p>
              <div className="ghost btn" id="register">
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
