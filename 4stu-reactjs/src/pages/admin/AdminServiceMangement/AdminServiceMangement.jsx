import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faEye } from '@fortawesome/free-solid-svg-icons';

import AdminNavigation from '../../../components/admin/AdminNavigation/AdminNavigation';
import AdminCreateServiceButton from './AdminCreateService';
import './AdminServiceMangement.css';
import { Link } from 'react-router-dom';

function ServiceManagement() {
  const [allServices, setAllServices] = useState([]);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get('https://localhost:7088/api/ServiceManagements')
      .then((response) => setAllServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  const renderService = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedServices = allServices.slice(startIndex, endIndex);

    return displayedServices.map((service, index) => (
      <tr key={index}>
        <td>
          <span className={`serviceID`}>
            S{service.serviceId < 10 ? '00' + service.serviceId : '0' + service.serviceId}
          </span>
        </td>

        <td>
          <span className="service-name">{service.serviceName}</span>
        </td>

        <td>
          <span className="service-name">{service.tag}</span>
        </td>

        <td>
          <span className="service-price">{service.price}</span>
        </td>

        <td>
          <span className="service-time">{service.time}</span>
        </td>

        <td>
          <span className="statuss">
            <span className={`status status--${service.status}`}>{service.status}</span>
          </span>
        </td>
        <td>
          <a href="#" className="admin-btn-action view">
            <FontAwesomeIcon icon={faEye} />
          </a>
          <a href="#" className="admin-btn-action edit">
            <FontAwesomeIcon icon={faPen} />
          </a>
        </td>
      </tr>
    ));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="user-management-content">
      <div className="admin-navbar">
        <AdminNavigation />
      </div>
      <div className="table-content">
        <div className="table-widget">
          <caption>
            <h2>All Services</h2>
            <span className="table-row-count">({allServices.length} Services)</span>
            <AdminCreateServiceButton />
          </caption>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price (VND)</th>
                <th>Time (Mins)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{renderService()}</tbody>
            <tfoot>
              <tr>
                <td colSpan="10">
                  <ul className="pagination">
                    {Array.from(
                      { length: Math.ceil(allServices.length / itemsPerPage) },
                      (_, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'Admin' : ''}
                          >
                            {index + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ServiceManagement;
