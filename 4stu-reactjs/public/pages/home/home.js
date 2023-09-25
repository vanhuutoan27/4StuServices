

function Home() {
  return (
    <div>
      <div id="root">
        <header className="header">
          <div className="content">
            <nav className="navbar">
              <img src="./assets/img/Logo.svg" alt="4Stu" />
              <span>
                <a href="#">4Stu</a>
              </span>
              <ul>
                <li className="chosen">
                  <a href="home.html">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="service.html">Services</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">
                    More <i className="fa-solid fa-caret-down"></i>
                  </a>
                  <ul className="sub-nav">
                    <li>
                      <a href="#"> More 1 </a>
                    </li>
                    <li>
                      <a href="#"> More 2 </a>
                    </li>
                    <li>
                      <a href="#"> More 3 </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="actions">
                <a href="login.html" className="btn action-btn">
                  Login
                </a>
              </div>
            </nav>

            <div className="hero">
              <div className="info">
                <p className="sub-title">Welcome to 4Stu Website!</p>
                <h1 className="title">Clean, tidy and economical</h1>
                <p className="desc">
                  Here we have all the cleaning, sanitation, water delivery services you need.
                </p>
                <a href="service.html" className="btn hero-cta cta">
                  Start Booking NOW <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <img
                src="./assets/img/people-start-booking-a-service-in-website-2.svg"
                alt="Clean, tidy and economical"
                className="hero-img"
              />
            </div>
          </div>
        </header>

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
                <a href="service.html" className="btn popular-1-cta cta">
                  View Details <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <img
                src="./assets/img/complete-house-cleaning.png"
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
                <a href="service.html" className="btn popular-2-cta cta">
                  View Details <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <img
                src="./assets/img/laundry-service.png"
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
                  View Terms Of Use <i className="fa-solid fa-arrow-right"></i>
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
                  Support <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <img
                src="./assets/img/your-choice.png"
                alt="Your Choice"
                className="your-choice-img"
              />
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
                <a href="service.html" className="btn popular-1-cta cta">
                  Let's Go <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <img
                src="./assets/img/start-booking - Copy.png"
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
                </div>
              </div>

              <div className="process-step">
                <div className="process-info">
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
                </div>
              </div>

              <div className="process-step">
                <div className="process-info">
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
                  <span>100,000+</span> Customers Use 4Stu
                </h1>
                <a href="service.html" className="btn popular-1-cta cta">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="service-datas">
                <div className="service-item">
                  <h2 className="data">
                    <i className="fa-solid fa-user-group"></i>99%
                  </h2>
                  <h3 className="data-name">Customer Satisfaction</h3>
                </div>

                <div className="service-item">
                  <h2 className="data">
                    <i className="fa-solid fa-circle-check"></i>1,000,000+
                  </h2>
                  <h3 className="data-name">Work Completed</h3>
                </div>

                <div className="service-item">
                  <h2 className="data">
                    <i className="fa-solid fa-clock"></i>4,500,000+
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
                  <img src="./assets/img/quote-1.svg" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium
                    alias aliquid, autem expedita tempora pariatur, mollitia rerum maxime dolorem.
                  </p>
                  <hr />
                </div>
                <div className="feedback-info">
                  <img src="./assets/img/picrew2.jpg" alt="" className="feedback-avatar" />
                  <div className="feedback-user">
                    <h3 className="feedback-name">Van Huu Toan</h3>
                    <p className="feedback-desc">FPTU Campus HCM</p>
                  </div>
                </div>
              </div>

              <div className="feedback-box">
                <div className="feedback-msg">
                  <img src="./assets/img/quote-2.svg" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium
                    alias aliquid, autem expedita tempora pariatur, mollitia rerum maxime dolorem.
                  </p>
                  <hr />
                </div>
                <div className="feedback-info">
                  <img src="./assets/img/picrew2.jpg" alt="" className="feedback-avatar" />
                  <div className="feedback-user">
                    <h3 className="feedback-name">Van Huu Toan</h3>
                    <p className="feedback-desc">FPTU Campus HCM</p>
                  </div>
                </div>
              </div>

              <div className="feedback-box">
                <div className="feedback-msg">
                  <img src="./assets/img/quote-3.svg" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium
                    alias aliquid, autem expedita tempora pariatur, mollitia rerum maxime dolorem.
                  </p>
                  <hr />
                </div>
                <div className="feedback-info">
                  <img src="./assets/img/picrew2.jpg" alt="" className="feedback-avatar" />
                  <div className="feedback-user">
                    <h3 className="feedback-name">Van Huu Toan</h3>
                    <p className="feedback-desc">FPTU Campus HCM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="">
          <div className="content">
            <div className="footer-head">
              <h2 className="title">
                Try <span>4Stu</span> Today!
              </h2>
              <p className="sub-title">
                Get started for free. Add your whole team as your needs grow.
              </p>
              <a href="" className="btn cta">
                Try 4Stu Free <i className="fa-solid fa-arrow-right"></i>
              </a>
              <p className="os-title">Want to download 4Stu? Click below</p>
              <div className="os-icon">
                <a href="#">
                  <img src="./assets/img/apple-black-logo 2.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./assets/img/windows-logo 1.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./assets/img/android-logo 1.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="footer-info">
              <div className="col-of-footer"></div>

              <div className="col-of-footer"></div>

              <div className="col-of-footer"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;