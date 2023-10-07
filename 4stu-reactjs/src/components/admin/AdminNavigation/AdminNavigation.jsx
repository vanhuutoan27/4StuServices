import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import './AdminNavigation.css';

function AdminNavbar() {
  const [customerCount, setCustomerCount] = useState(0);
  const [packageServiceCount, setPackageServiceCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://localhost:7088/api/CustomerManagements')
      .then((response) => {
        const customers = response.data;
        setCustomerCount(customers.length);
      })
      .catch((error) => console.log(error));

    axios
      .get('https://localhost:7088/api/PackageServiceManagements')
      .then((response) => {
        const packageServices = response.data;
        setPackageServiceCount(packageServices.length);
      })
      .catch((error) => console.log(error));

    axios
      .get('https://localhost:7088/api/ServiceManagements')
      .then((response) => {
        const services = response.data;
        setServiceCount(services.length);
      })
      .catch((error) => console.log(error));
  }, []);

  const location = useLocation();
  return (
    <div className="admin-nav">
      {/* ADMIN HEADER */}
      <div className="admin-nav-header">
        <div className="admin-account">
          <a href="#">
            <img
              className="admin-avatar"
              alt="admin-avatar"
              src="../assets/images/avatar/picrew1.jpg"
            />
          </a>
          <div className="admin-info">
            <div className="admin-name">Van Huu Toan</div>
            <div className="admin-mail">huutoanvan1@gmail.com</div>
          </div>
          <div className="interface-essential-wrapper"></div>
        </div>
      </div>

      <div className="boundary" />

      {/* ADMIN BODY */}
      <div className="admin-nav-body">
        <a href="admin-dashboard">
          <div
            className={`frame-1 ${
              location.pathname === '/admin-dashboard' ? 'frame-selected' : ''
            }`}
          >
            <div className="frame-content">Dashboard</div>
          </div>
        </a>

        <a href="admin-overview">
          <div
            className={`frame-1 ${location.pathname === '/admin-overview' ? 'frame-selected' : ''}`}
          >
            <div className="frame-content">Overview</div>
          </div>
        </a>

        <a href="admin-analysis">
          <div
            className={`frame-1 ${location.pathname === '/admin-analysis' ? 'frame-selected' : ''}`}
          >
            <div className="frame-content">Analysis</div>
          </div>
        </a>

        <a href="admin-feedback">
          <div
            className={`frame-1 ${location.pathname === '/admin-feedback' ? 'frame-selected' : ''}`}
          >
            <div className="frame-content">Feedbacks</div>
          </div>
        </a>

        {/* <div className="admin-management">MANAGEMENT</div> */}
        <hr />

        <a href="admin-user-management">
          <div
            className={`frame-2 ${
              location.pathname === '/admin-user-management' ? 'frame-selected' : ''
            }`}
          >
            <div className="div">
              <div className="frame-content">User</div>
            </div>
            <div className="frame-data">
              <div className="frame-data-content">{customerCount}</div>
            </div>
          </div>
        </a>

        <a href="admin-package-service-management">
          <div
            className={`frame-2 ${
              location.pathname === '/admin-package-service-management' ? 'frame-selected' : ''
            }`}
          >
            <div className="div">
              <div className="frame-content">Package Service</div>
            </div>
            <div className="frame-data">{packageServiceCount}</div>
          </div>
        </a>

        <a href="admin-service-management">
          <div
            className={`frame-2 ${
              location.pathname === '/admin-service-management' ? 'frame-selected' : ''
            }`}
          >
            <div className="div">
              <div className="frame-content">Service</div>
            </div>
            <div className="frame-data">
              <div className="frame-data-content">{serviceCount}</div>
            </div>
          </div>
        </a>

        <div className="boundary" />

        {/* ADMIN FOOTER */}
        <a href="login">
          <div className="admin-nav-footer">
            <div className="frame-content">Logout</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default AdminNavbar;
