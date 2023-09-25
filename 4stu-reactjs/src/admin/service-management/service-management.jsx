import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/admin-navbar';
import axios from 'axios';

import './service-management.css';

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
          <span className="service-desc">{service.serviceDesc}</span>
        </td>

        <td>
          <span className="service-price">{service.price}</span>
        </td>

        <td>
          <span className="service-time">{service.time}</span>
        </td>

        <td>
          <span className="tags">
            {typeof service.tag === 'string' ? (
              <span className={`tag tag--${service.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {service.tag}
              </span>
            ) : (
              <span className="tag">No tags available</span>
            )}
          </span>
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
        <AdminNavbar />
      </div>
      <div className="table-content">
        <div className="table-widget">
          <table>
            <caption>
              All Services
              <span className="table-row-count">({allServices.length} Services)</span>
              <div>
                <a href="#">Add</a>
              </div>
            </caption>
            <thead>
              <tr>
                <th>Service ID</th>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price (VND)</th>
                <th>Time (mins)</th>
                <th>Tag</th>
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
