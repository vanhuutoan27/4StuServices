import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faUsers,
  faCircleCheck,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import './home.css';
import NavBar from '../../components/navbar';
import SlideShow from '../../components/slideShow';

function Home() {
  const [customerCount, setCustomerCount] = useState('100,000+');

  useEffect(() => {
    const randomCount = getRandomCustomerCount();
    setCustomerCount(randomCount.toLocaleString());
  }, []);

  function getRandomCustomerCount() {
    const randomNumber = Math.floor(Math.random() * (1000000 - 100000 + 1) + 100000);
    const roundedNumber = Math.round(randomNumber / 100000) * 100000;
    return roundedNumber.toLocaleString();
  }

  return (
    <div>
      <div id="root">
        <NavBar />
        <SlideShow />
        {/* <div className="hero">
          <div className="content">
            <div className="hero-content">
              <div className="info">
                <p className="sub-title">Welcome to 4Stu Website!</p>
                <h1 className="title">Clean, tidy and economical</h1>
                <p className="desc">
                  Here we have all the cleaning, sanitation, water delivery services you need.
                </p>
                <a href="service" className="btn hero-cta cta">
                  Start Booking NOW <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />
                </a>
              </div>

              <img
                src="./img/people-start-booking-a-service-in-website-2.svg"
                alt="Clean, tidy and economical"
                className="hero-img"
              />
            </div>
          </div>
        </div> */}

        <div className="popular">
          <div className="popular-header">
            <h2 className="title">
              <a href="#popular-service">Most Popular Service On 4Stu</a>
            </h2>
          </div>
          <div className="content" id="popular-service">
            <div className="popular-1">
              <div className="info">
                <h1 className="title">Complete House Cleaning</h1>
                <p className="desc">
                  Experience the power of intensive stain treatment right in your home, with the
                  expertise of two or more of our skilled housekeeping professionals.
                </p>
                <a href="service" className="btn popular-1-cta cta">
                  View Details <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />
                </a>
              </div>

              <img
                src="./img/complete-house-cleaning.png"
                alt="Complete House Cleaning"
                className="popular-1-img"
              />
            </div>

            <div className="popular-2">
              <div className="info">
                <h1 className="title">Laundry Service</h1>
                <p className="desc">
                  Easily collaborate with your colleagues by sharing notes with built-in white
                  space. Furthermore, you have the option to publish a note to the internet and
                  share the URL with anyone you choose.
                </p>
                <a href="service" className="btn popular-2-cta cta">
                  View Details <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />
                </a>
              </div>

              <img
                src="./img/laundry-service.png"
                alt="Complete House Cleaning"
                className="popular-2-img"
              />
            </div>
          </div>
        </div>

        <div className="service-package">
          <div className="content">
            <div className="service-package-content animate">
              <div className="info">
                <h1 className="title">
                  Service Packages Available <br />
                  For Student Apartments
                </h1>
                <p className="desc">
                  For student apartments that require recurring services multiple times each month,
                  our <span>"Service Packages"</span> offer great convenience. With this option, you
                  only need to schedule once for the entire month, saving you time. We ensure there
                  are always available workers, and we prioritize those who have received positive
                  feedback from customers.
                </p>
                <p className="desc">
                  Additionally, <span>4Stu</span> allows you to change your home cleaning location
                  if you move or work in other cities where <span>4Stu</span> also operates.
                </p>
                <p className="desc">
                  To get started, customers need to pay for the service in advance, and we activate
                  it once the payment is successful. You can find more details about terms and
                  payment methods on our website.
                </p>
                <a href="#" className="btn cta">
                  View Terms Of Use <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="your-choice">
          <div className="content">
            <div className="your-choice-content">
              <div className="info">
                <h1 className="title">Feel Satisfied With Your Choice</h1>
                <p className="desc">
                  Our commitment is to ensure your environment is clean, safe, and refreshed, all
                  under one roof. Experience the convenience and peace of mind with our versatile
                  services, tailored to meet your specific requirements.
                </p>
                <a href="#" className="btn cta">
                  Support <FontAwesomeIcon icon={faEnvelope} size="lg" className="custom-icon" />
                </a>
              </div>

              <img src="./img/your-choice.png" alt="Your Choice" className="your-choice-img" />
            </div>
          </div>
        </div>

        <div className="start-booking">
          <div className="content">
            <div className="booking">
              <div className="info">
                <h1 className="title">Start Booking</h1>
                <p className="desc">
                  Ready to embark on your 4Stu journey? Let's get started with your very first
                  appointment today!
                </p>
                <a href="service" className="btn popular-1-cta cta">
                  Let's Go <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />
                </a>
              </div>

              <img
                src="./img/start-booking - Copy.png"
                alt="Complete House Cleaning"
                className="booking-img"
              />
            </div>
          </div>
        </div>

        <div className="process-service">
          <div className="content">
            <div className="process-header">
              <h2 className="title">Process Of Using The Service</h2>
              <p className="sub-title">
                Comprehend the process of utilizing our services for simplified management!
              </p>
            </div>

            <div className="process-all">
              <div className="process-step">
                <div className="process-info">
                  <h3 className="process-name">Choose A Service</h3>
                  <p className="process-desc">
                    We offer over 20 convenient utility services ready to assist you whenever you
                    need. Simply use your phone to visit the 4Stu website and choose the service you
                    desire.
                  </p>
                  <img className="process-img" src="./img/process-1.svg" alt="process-1" />
                </div>
              </div>

              <div className="process-step">
                <div className="process-info">
                  <img className="process-img" src="./img/process-2.svg" alt="process-2" />
                  <h3 className="process-name">Confirm Information</h3>
                  <p className="process-desc">
                    Provide your full name, contact phone number, preferred date and time, and
                    specific location where you would like to use the service. This process can be
                    completed in less than a minute.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-info">
                  <h3 className="process-name">Proceed The Task</h3>
                  <p className="process-desc">
                    Our staffs will accept the service and come to the confirmed address on the
                    order to complete the task. Cleanliness, tidiness, and efficiency will always be
                    ensured, along with high quality.
                  </p>
                  <img className="process-img" src="./img/process-3.svg" alt="process-3" />
                </div>
              </div>

              <div className="process-step">
                <div className="process-info">
                  <img className="process-img" src="./img/process-4.svg" alt="process-4" />
                  <h3 className="process-name">Feedback And Rating</h3>
                  <p className="process-desc">
                    You can assess the quality of the services through the Feedback section for
                    4Stu. This allows us to make changes and further develop the quality of services
                    in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="one-millions">
          <div className="content">
            <div className="service-usage">
              <div className="info">
                <h1 className="title">
                  <span>{customerCount}+</span> Customers Use 4Stu
                </h1>
                <a href="service" className="btn popular-1-cta cta">
                  Read More <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />
                </a>
              </div>
              <div className="service-datas">
                <div className="service-item">
                  <h2 className="data">
                    <FontAwesomeIcon icon={faUsers} className="custom-icon data-icon" />
                    99%
                  </h2>
                  <h3 className="data-name">Customer Satisfaction</h3>
                </div>

                <div className="service-item">
                  <h2 className="data">
                    <FontAwesomeIcon icon={faCircleCheck} className="custom-icon data-icon" />
                    1,000,000+
                  </h2>
                  <h3 className="data-name">Work Completed</h3>
                </div>

                <div className="service-item">
                  <h2 className="data">
                    <FontAwesomeIcon icon={faClock} className="custom-icon data-icon" />
                    4,500,000+
                  </h2>
                  <h3 className="data-name">Work Hours</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback">
          <div className="content">
            <div className="feedback-title">
              <h2 className="title">What Our Customers Says</h2>
            </div>

            <div className="feedback-content">
              <div className="feedback-box">
                <div className="feedback-msg">
                  <img src="./img/quote-1.svg" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium
                    alias aliquid, autem expedita tempora pariatur, mollitia rerum maxime dolorem.
                  </p>
                  <hr />
                </div>
                <div className="feedback-info">
                  <img src="./img/picrew2.jpg" alt="" className="feedback-avatar" />
                  <div className="feedback-user">
                    <h3 className="feedback-name">Van Huu Toan 1</h3>
                    <p className="feedback-desc">FPTU Campus HCM</p>
                  </div>
                </div>
              </div>

              <div className="feedback-box">
                <div className="feedback-msg">
                  <img src="./img/quote-1.svg" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium
                    alias aliquid, autem expedita tempora pariatur, mollitia rerum maxime dolorem.
                  </p>
                  <hr />
                </div>
                <div className="feedback-info">
                  <img src="./img/picrew1.jpg" alt="" className="feedback-avatar" />
                  <div className="feedback-user">
                    <h3 className="feedback-name">Van Huu Toan 2</h3>
                    <p className="feedback-desc">FPTU Campus HCM</p>
                  </div>
                </div>
              </div>

              <div className="feedback-box">
                <div className="feedback-msg">
                  <img src="./img/quote-1.svg" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium
                    alias aliquid, autem expedita tempora pariatur, mollitia rerum maxime dolorem.
                  </p>
                  <hr />
                </div>
                <div className="feedback-info">
                  <img src="./img/picrew4.png" alt="" className="feedback-avatar" />
                  <div className="feedback-user">
                    <h3 className="feedback-name">Van Huu Toan 3</h3>
                    <p className="feedback-desc">FPTU Campus HCM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="content">
            <div className="footer-head">
              <h2 className="title">
                Try <span>4Stu</span> Today!
              </h2>
              <p className="sub-title">
                Get started for free. Add your whole team as your needs grow.
              </p>
              <a href="" className="btn cta">
                Try 4Stu Free <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />
              </a>
            </div>
            <div className="content">
              <div className="footer__addr">
                <img src="./img/4Stu-Logo.svg" alt="" />
                <h2>Contact</h2>
                <a className="footer__btn" href="mailto:huutoanvan1@gmail.com">
                  Email Us
                </a>
              </div>

              <ul className="footer__nav">
                <li className="nav__item">
                  <h2 className="nav__title">Contact</h2>
                  <ul className="nav__ul">
                    <li>
                      <a href="mailto:huutoanvan1@gmail.com">huutoanvan1@gmail.com</a>
                    </li>
                    <li>
                      <a href="tel:0792766979">0792766979</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </li>

                <li className="nav__item nav__item--extra">
                  <h2 className="nav__title">4Stu Website</h2>

                  <ul className="nav__ul nav__ul--extra">
                    <li>
                      <a href="">Services</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">FAQS</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Github</a>
                    </li>
                  </ul>
                </li>

                <li className="nav__item">
                  <h2 className="nav__title">Legal</h2>

                  <ul className="nav__ul">
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="legal">
                <p>&copy; 2023 4Stu. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
