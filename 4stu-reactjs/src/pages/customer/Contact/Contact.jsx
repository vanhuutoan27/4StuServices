import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

function Contact() {
  return (
    <div id="root">
      <Navigation />
      <div>
        <section className="contact-container">
          <div className="container">
            <div className="contactusInfo">
              <div>
                <h2>Contact Info</h2>
                <ul className="info">
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} class="custom-icon-contact" />
                    </span>
                    <span>
                      E2a-7 Lot, D1 Street, D1 Ward, Long Thanh My, Thu Duc City, Ho Chi Minh City
                    </span>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} class="custom-icon-contact" />
                    </span>
                    <span>vanhuutoan27@gmail.com</span>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faPhone} class="custom-icon-contact" />
                    </span>
                    <span>+84965706048</span>
                  </li>
                </ul>
              </div>
              <ul className="sci">
                <li>
                  <a href="https://github.com/vanhuutoan27/4stu-swp-project">
                    <img src="./img/github.svg" alt="" class="custom-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./img/facebook-f.svg" alt="" class="custom-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./img/linkedin-in.svg" alt="" class="custom-icon" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="contactusInForm">
              <h2>Send a Message</h2>
              <div className="formBox">
                <div className="inputBox w50">
                  <input type="text" required />
                  <span>First Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" required />
                  <span>Last Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="email" required />
                  <span>Email Address</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" required />
                  <span>Phone Number</span>
                </div>
                <div className="inputBox w100">
                  <textarea required></textarea>
                  <span>Write You Message Here...</span>
                </div>
                <div className="inputBox w100">
                  <button class="btn" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
