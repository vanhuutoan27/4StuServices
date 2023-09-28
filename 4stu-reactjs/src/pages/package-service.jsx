import React, { useContext, useEffect, useState } from 'react';
import { Session } from '../App';
import axios from 'axios';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

function PackageService() {
  const session = useContext(Session);
  const user = session.user;

  const [allPackageServices, setAllPackageServices] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7088/api/PackageServiceManagements')
      .then((response) => {
        setAllPackageServices(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderService = () => {
    if (allPackageServices.length === 0) {
      return (
        <h2 style={{ color: 'red' }}>
          The service you need is not here! We will try to update more in the future!
        </h2>
      );
    }

    return allPackageServices.map((packageService, index) => (
      <div key={index} className="box">
        <div className="img-box">
          <img className="images" src={packageService.imageUrl} alt={packageService.serviceName} />
        </div>
        <div className="bottom">
          <p>{packageService.packageServiceName}</p>
          <h2>{packageService.price} VND</h2>
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
          {/* <div className="sidebar">
            <div className="sidehead">
              <div className="sidehead-header">
                <img className="sidehead-logo" src="./img/Logo.svg" alt="" />
                <h2>4Stu</h2>
              </div>
              <hr />
            </div>
          </div> */}
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
              <p>BOOK SERVICE ONLINE</p>
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

export default PackageService;
