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
              defaultValue={formik.values.email}
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
              defaultValue={formik.values.password}
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
          <form action="#">
            <h1>Register</h1>
            <div className="fullname">
              <div className="firstname">
                <label for="">First Name</label>
                <input type="text" />
              </div>
              <div className="lastname">
                <label for="">Last Name</label>
                <input type="text" />
              </div>
            </div>
            <label for="">Email</label>
            <input type="text" />
            <label for="">Password</label>
            <input type="password" />
            <label for="">Confirm Password</label>
            <input type="password" />
            <button className="btn">Register</button>
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
