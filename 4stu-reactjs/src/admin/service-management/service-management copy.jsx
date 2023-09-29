import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/admin-navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './service-management.css';

function ServiceManagement() {
  const [allServices, setAllServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newService, setNewService] = useState({
    serviceName: '',
    tag: '',
    price: '',
    time: '',
    image: '',
    description: '', // Thêm trường service description vào đây
  });

  const itemsPerPage = 7;
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
          <span className="service-description">{service.description}</span>
        </td>

        <td>
          <span className="actions">
            <a href="#" className="action action--view">
              View
            </a>
            <a href="#" className="action action--edit">
              Edit
            </a>
            <a href="#" className="action action--delete">
              Delete
            </a>
          </span>
        </td>
      </tr>
    ));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewService({
      serviceName: '',
      tag: '',
      price: '',
      time: '',
      image: '',
      description: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: name === 'image' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('serviceName', newService.serviceName);
    formData.append('tag', newService.tag);
    formData.append('price', newService.price);
    formData.append('time', newService.time);
    formData.append('image', newService.image);
    formData.append('description', newService.description);

    axios
      .post('https://localhost:7088/api/ServiceManagements', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        closeModal();
        axios
          .get('https://localhost:7088/api/ServiceManagements')
          .then((response) => setAllServices(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
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
                <button className="btn" onClick={openModal}>
                  Add A Service
                </button>
              </div>
            </caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price (VND)</th>
                <th>Time (Mins)</th>
                <th>Description</th>
                <th>Actions</th>
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

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Add a New Service</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="serviceName">Service Name:</label>
                <input
                  type="text"
                  id="serviceName"
                  name="serviceName"
                  value={newService.serviceName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="tag">Tag:</label>
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  value={newService.tag}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="price">Price (VND):</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newService.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="time">Time (Mins):</label>
                <input
                  type="number"
                  id="time"
                  name="time"
                  value={newService.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={newService.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleInputChange}
                  accept="image/*"
                  required
                />
              </div>
              <button type="submit">Create Service</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceManagement;
