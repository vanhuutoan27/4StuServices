import React, { useEffect, useState, useContext } from 'react';
import { Session } from '../App';
import axios from 'axios';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

function Service() {
  const session = useContext(Session);
  const user = session.user;

  const [allServices, setAllServices] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7088/api/ServiceManagements')
      .then((response) => {
        setAllServices(response.data);
        setFilteredServices(response.data); // Khởi tạo filteredServices ban đầu với tất cả dịch vụ.
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearchChange = (e) => {
    const newText = e.target.value.toLowerCase();
    setSearchText(newText);
    // Lọc và cập nhật danh sách dịch vụ dựa trên từ khóa tìm kiếm
    const filtered = allServices.filter((service) =>
      service.serviceName.toLowerCase().includes(newText)
    );
    setFilteredServices(filtered);
  };

  const renderService = () => {
    if (filteredServices.length === 0) {
      return (
        <h2 style={{ color: 'red' }}>
          The service you need is not here! We will try to update more in the future!
        </h2>
      );
    }

    return filteredServices.map((service, index) => (
      <div key={index} className="box">
        <div className="img-box">
          <img className="images" src="./img/Logo.svg" alt={service.serviceName} />
        </div>
        <div className="bottom">
          <p>{service.serviceName}</p>
          <h2>{service.price} VND</h2>
          <button className="view-details">View Details</button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div id="root">
        <NavBar />

        <div className="service-container">
          <div className="sidebar">
            <div className="sidehead">
              <div className="sidehead-header">
                <img className="sidehead-logo" src="./img/Logo.svg" alt="" />
                <h2>4Stu</h2>
              </div>
              <hr />
            </div>
            <div className="sidebody">
              <div className="searchBar">
                <input
                  placeholder="Search..."
                  id="searchBar"
                  name="searchBar"
                  type="text"
                  value={searchText}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="sidefoot">
              <hr />
            </div>
          </div>
          <div className="data">
            <div className="data-top">
              {user ? (
                <>
                  <p>{user.phone}</p>
                  <p>{user.email}</p>
                </>
              ) : (
                <p>Welcome, Guest!</p>
              )}
            </div>
            <div className="data-header">
              <img src="./img/serivce-banner.png" alt="" />
              {/* <p>BOOK SERVICE ONLINE</p> */}
            </div>
            <div className="data-body">
              <div id="service-list">{renderService()}</div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Service;
