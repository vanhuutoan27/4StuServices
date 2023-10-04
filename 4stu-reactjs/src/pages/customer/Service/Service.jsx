import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import './Service.css';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

function Service() {
  const [allServices, setAllServices] = useState([]);
  const [allPackageServices, setAllPackageServices] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7088/api/ServiceManagements')
      .then((response) => setAllServices(response.data))
      .catch((error) => console.log(error));

    axios
      .get('https://localhost:7088/api/PackageServiceManagements')
      .then((response) => setAllPackageServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  const formatPriceWithDot = (price) => {
    if (!isNaN(price)) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return price;
  };

  const getRandomRating = () => {
    return Math.random() < 0.5 ? 4 : 5; // Generates either 4 or 5 randomly
  };

  const renderService = (services) => {
    return services.map((service, index) => (
      <div className="menu_card" key={index}>
        <div className="menu_image">
          <img src={service.image} alt={service.serviceName} />
        </div>

        <div className="menu_info">
          <h2>
            <a href="#">{service.serviceName}</a>
          </h2>
          <h3>{formatPriceWithDot(service.price)} VND</h3>
          <div className="menu_icon">
            {Array.from({ length: 5 }, (_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={i < getRandomRating() ? 'filled-star' : 'outline-star'}
              />
            ))}
          </div>
          <a href="#" className="btn">
            Order Now
          </a>
        </div>
      </div>
    ));
  };

  const renderPackageService = (packageServices) => {
    return packageServices.map((packageService, index) => (
      <div class="gallary_image" key={index}>
        <img src="../assets/images/4Stu-Logo.svg" />

        <h3>{packageService.packageServiceName}</h3>
        <p>{packageService.packageServiceDesc}</p>
        <a href="#" class="btn">
          Order Now
        </a>
      </div>
    ));
  };

  return (
    <div className="ServicePage">
      <Navigation />
      <div class="service-header">
        <div className="content">
          <div class="main">
            <div class="men_text">
              <h1>Choose Your </h1>
              <span>Service Package</span>
            </div>

            <div class="main_image">
              {/* ../assets/images/avatar/avatar-nobita.svgking - Copy.pn */}
              <img src="../assets/manypixels/hero-employee-b.svg" />
            </div>
          </div>

          <p>
            We're delighted to introduce our specialized software system designed to provide
            high-quality service packages for student apartments. Our commitment is to bring
            convenience and time-saving solutions to your student community through perfect daily
            life services.
          </p>

          <a class="btn" href="#">
            Order Now
          </a>
        </div>
      </div>

      <div class="about">
        <div className="content">
          <div class="about_main">
            <div class="image">
              <img src="../assets/manypixels/hiking-20.svg" />
            </div>

            <div class="about_text">
              <h2>
                Why Choose <span>4Stu Services</span>?
              </h2>
              <ol>
                <li>
                  <span>Exceptional Convenience</span> <br />
                  4Stu helps students save time and effort by providing convenient daily services
                  like cleaning, sanitation, and water delivery, allowing them to focus on their
                  studies and enjoy student life.
                </li>
                <li>
                  <span>High-Quality Service Packages</span> <br />
                  We offer high-quality service packages specifically designed for student
                  apartments. Our commitment ensures that you receive services that exceed your
                  expectations.
                </li>
                <li>
                  <span> Reliable and Trustworthy</span> <br />
                  With 4Stu, you can trust in our reliability and credibility. Our professional
                  staff is always ready to ensure your requests are handled promptly and
                  efficiently.
                </li>
                <li>
                  <span>Customized Solutions</span> <br /> We understand that each student community
                  is unique. That's why we provide customizable service packages, allowing you to
                  select services that best fit your specific needs.
                </li>
              </ol>
            </div>
          </div>

          <a href="#" class="btn">
            Order Now
          </a>
        </div>
      </div>

      <div className="content">
        <div class="menu">
          <h1>
            Our<span>Services</span>
          </h1>

          <div class="menu_box">{renderService(allServices)}</div>
        </div>
      </div>

      <div className="service-package-content">
        <div class="gallary">
          <h1>
            Our<span>Package Services</span>
          </h1>

          <div class="gallary_image_box">{renderPackageService(allPackageServices)}</div>
        </div>
      </div>

      <div class="review" id="Review">
        <h1>
          Process Of Using The<span>Services </span>
        </h1>

        <div class="review_box">
          <div class="review_card">
            <div class="review_profile">
              <img src="../assets/manypixels/new-message-e.png" alt="" />
            </div>

            <div class="review_text">
              <h2 class="name">Choose A Service</h2>

              <p>
                We offer over 20 convenient utility services ready to assist you whenever you need.
                Simply use your phone to visit the 4Stu website and choose the service you desire.
              </p>
            </div>
          </div>

          <div class="review_card">
            <div class="review_profile">
              <img src="../assets/manypixels/completed-task-d.svg" />
            </div>

            <div class="review_text">
              <h2 class="name">Confirm Information</h2>

              <p>
                Provide your full name, contact phone number, preferred date and time, and specific
                location where you would like to use the service. This process can be completed in
                less than a minute.
              </p>
            </div>
          </div>

          <div class="review_card">
            <div class="review_profile">
              <img src="../assets/manypixels/achievement-3.svg" />
            </div>

            <div class="review_text">
              <h2 class="name">Proceed The Task</h2>

              <p>
                Provide your full name, contact phone number, preferred date and time, and specific
                location where you would like to use the service. This process can be completed in
                less than a minute.
              </p>
            </div>
          </div>

          <div class="review_card">
            <div class="review_profile">
              <img src="../assets/manypixels/quality-check-b.svg" />
            </div>

            <div class="review_text">
              <h2 class="name">Proceed The Task</h2>

              <p>
                You can assess the quality of the services through the Feedback section for 4Stu.
                This allows us to make changes and further develop the quality of services in the
                future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="team">
        <h1>
          Our<span>Staff</span>
        </h1>

        <div class="team_box">
          <div class="profile">
            <img src="../assets/images/avatar/avatar-nobita.svg" />

            <div class="info">
              <h2 class="name">Staff</h2>
              <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div class="team_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div class="profile">
            <img src="../assets/images/avatar/avatar-nobita.svg" />

            <div class="info">
              <h2 class="name">Staff</h2>
              <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div class="team_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div class="profile">
            <img src="../assets/images/avatar/avatar-nobita.svg" />

            <div class="info">
              <h2 class="name">Staff</h2>
              <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div class="team_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div class="profile">
            <img src="../assets/images/avatar/avatar-nobita.svg" />

            <div class="info">
              <h2 class="name">Staff</h2>
              <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div class="team_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
