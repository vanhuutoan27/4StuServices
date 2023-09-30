import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import './Service.css';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

function Service2() {
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

  const getRandomRating = () => {
    return Math.random() < 0.5 ? 4 : 5; // Generates either 4 or 5 randomly
  };

  const renderService = (services) => {
    return services.map((service, index) => (
      <div className="menu_card" key={index}>
        <div className="menu_image">
          <img src="../assets/images/4Stu-Logo.svg" alt={service.serviceName} />
        </div>

        <div className="small_card">
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </div>

        <div className="menu_info">
          <h2>{service.serviceName}</h2>
          <h3>{service.price} VND</h3>
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
      <div className="content">
        <div id="#" class="service-header">
          <div class="main">
            <div class="men_text">
              <h1>Choose Your </h1>
              <span>Service Package</span>
            </div>

            <div class="main_image">
              {/* ../assets/service-image/start-booking - Copy.pn */}
              <img src="../assets/service-image/main_img.png" />
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

      <div className="content">
        <div class="about">
          <div class="about_main">
            <div class="image">
              <img src="../assets/service-image/Food-Plate.png" />
            </div>

            <div class="about_text">
              <h2>
                Why Choose <span>4Stu Services</span>?
              </h2>
              <ol>
                <li>
                  <span>Exceptional Convenience</span> <br />
                  4Stu is designed to help you save time and effort. We ensure that daily services
                  like cleaning, sanitation, and water delivery are provided conveniently, allowing
                  you to focus on your studies and enjoy student life.
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

      <div class="gallary">
        <h1>
          Our<span>Package Services</span>
        </h1>

        <div class="gallary_image_box">{renderPackageService(allPackageServices)}</div>
      </div>

      <div class="review" id="Review">
        <h1>
          Customer<span>Review</span>
        </h1>

        <div class="review_box">
          <div class="review_card">
            <div class="review_profile">
              <img src="../assets/service-image/review_1.png" />
            </div>

            <div class="review_text">
              <h2 class="name">John Deo</h2>

              <div class="review_icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>

              <div class="review_social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere
                blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti
                asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates
                repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
                pariatur. Fuga aperiam impedit illo atque repellendus!
              </p>
            </div>
          </div>

          <div class="review_card">
            <div class="review_profile">
              <img src="../assets/service-image/review_2.png" />
            </div>

            <div class="review_text">
              <h2 class="name">John Deo</h2>

              <div class="review_icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>

              <div class="review_social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere
                blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti
                asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates
                repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
                pariatur. Fuga aperiam impedit illo atque repellendus!
              </p>
            </div>
          </div>

          <div class="review_card">
            <div class="review_profile">
              <img src="../assets/service-image/review_3.png" />
            </div>

            <div class="review_text">
              <h2 class="name">John Deo</h2>

              <div class="review_icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>

              <div class="review_social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere
                blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti
                asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates
                repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
                pariatur. Fuga aperiam impedit illo atque repellendus!
              </p>
            </div>
          </div>

          <div class="review_card">
            <div class="review_profile">
              <img src="../assets/service-image/review_4.png" />
            </div>

            <div class="review_text">
              <h2 class="name">John Deo</h2>

              <div class="review_icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>

              <div class="review_social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere
                blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti
                asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates
                repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
                pariatur. Fuga aperiam impedit illo atque repellendus!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="order" id="Order">
        <h1>
          <span>Order</span>Now
        </h1>

        <div class="order_main">
          <div class="order_image">
            <img src="../assets/service-image/order_image.png" />
          </div>

          <form action="#">
            <div class="input">
              <p>Name</p>
              <input type="text" placeholder="you name" />
            </div>

            <div class="input">
              <p>Email</p>
              <input type="email" placeholder="you email" />
            </div>

            <div class="input">
              <p>Number</p>
              <input placeholder="you number" />
            </div>

            <div class="input">
              <p>How Much</p>
              <input type="number" placeholder="how many order" />
            </div>

            <div class="input">
              <p>You Order</p>
              <input placeholder="food name" />
            </div>

            <div class="input">
              <p>Address</p>
              <input placeholder="you Address" />
            </div>

            <a href="#" class="order_btn">
              Order Now
            </a>
          </form>
        </div>
      </div>

      <div class="team">
        <h1>
          Our<span>Team</span>
        </h1>

        <div class="team_box">
          <div class="profile">
            <img src="../assets/service-image/chef1.png" />

            <div class="info">
              <h2 class="name">Chef</h2>
              <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div class="team_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div class="profile">
            <img src="../assets/service-image/chef2.png" />

            <div class="info">
              <h2 class="name">Chef</h2>
              <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div class="team_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div class="profile">
            <img src="../assets/service-image/chef3.jpg" />

            <div class="info">
              <h2 class="name">Chef</h2>
              <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div class="team_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div class="profile">
            <img src="../assets/service-image/chef4.jpg" />

            <div class="info">
              <h2 class="name">Chef</h2>
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

export default Service2;
