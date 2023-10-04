import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faWallet, faThumbsUp, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

import './Detail.css';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

function Detail() {
  useEffect(() => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach((faq) => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('active');
      });
    });
  }, []);
  return (
    <div className="DetailPage">
      <Navigation />
      <div>
        <div className="hero">
          <div className="content">
            <div className="hero-content">
              <div className="info">
                <p className="sub-title">Welcome to 4Stu Website!</p>
                <h1 className="title">Clean, tidy and economical</h1>
                <p className="desc">
                  Here we have all the cleaning, sanitation, water delivery services you need.
                </p>
                <a href="service" className="btn hero-cta cta">
                  Start Booking NOW
                </a>
              </div>

              <img
                src="../assets/images/people-start-booking-a-service-in-website-2.svg"
                alt="Clean, tidy and economical"
                className="hero-img"
              />
            </div>
          </div>
        </div>
        <div class="service-detail-container">
          <div class="banner"></div>
          <div class="content">
            <div class="column-service-detail">
              <h2>Why Should You Use 4Stu's Services?</h2>
              <div class="elementor-image">
                <img src="./assets/images/free & FAst delivery service.svg" alt="" />
              </div>
              <div class="box-content">
                <div class="box">
                  <div class="img-title">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div class="detail-tile">
                    <h3>Save Time</h3>
                    <p>
                      You don't need to waste time cleaning or getting your own water when staying
                      in a student apartment. Everything has support staff to help you through 4Stu.
                    </p>
                  </div>
                </div>
                <div class="box">
                  <div class="img-title">
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </div>
                  <div class="detail-tile">
                    <h3>Suitable For All</h3>
                    <p>
                      Our services are designed to simplify your daily life, giving you more time to
                      focus on your studies and enjoy your student experience to the fullest.
                    </p>
                  </div>
                </div>
                <div class="box">
                  <div class="img-title">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                  <div class="detail-tile">
                    <h3>Quality Service</h3>
                    <p>
                      We offer top-notch service packages tailored specifically for student
                      apartments. Our commitment to quality ensures that you receive services that
                      meet and exceed your expectations.
                    </p>
                  </div>
                </div>
                <div class="box">
                  <div class="img-title">
                    <FontAwesomeIcon icon={faWallet} />
                  </div>
                  <div class="detail-tile">
                    <h3>Transparent Prices</h3>
                    <p>
                      We believe in transparency, and our pricing reflects that. You'll always know
                      what you're paying for, with no hidden fees or surprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="column-service-detail">
              <h2>Dịch vụ của bTaskee có gì khác biệt?</h2>
              <div class="box-content-2">
                <div class="box2">
                  <div class="img-title">
                    <img src="./assets/img/grocery-assistant-dat-nhanh-giao-nhanh.png" alt="" />
                  </div>
                  <div class="detail-tile2">
                    <h3>Đặt nhanh - giao nhanh</h3>
                    <p>
                      Bạn chỉ cần 60 giây đặt dịch vụ trên ứng dụng. Ngay 1 giờ sau khi đặt dịch vụ,
                      phụ tá đi chợ sẽ mua hàng và giao hàng tận nhà cho bạn.
                    </p>
                  </div>
                </div>
              </div>
              <div class="box-content-3">
                <div class="box2">
                  <div class="img-title">
                    <img src="./assets/img/grocery-assistant-phu-ta-chuyen-nghiep.png" alt="" />
                  </div>
                  <div class="detail-tile2">
                    <h3>Phụ tá chuyên nghiệp</h3>
                    <p>
                      Phụ tá đi chợ của bTaskee là các bà nội trợ lâu năm, họ không chỉ đến và lấy
                      thực phẩm rồi giao đến cho bạn mà sẽ chính tay lựa từng món hàng, đảm bảo hàng
                      hóa luôn được tươi ngon, chất lượng.
                    </p>
                  </div>
                </div>
              </div>
              <div class="box-content-2">
                <div class="box2">
                  <div class="img-title">
                    <img src="./assets/img/grocery-assistant-lua-chon-da-dang.png" alt="" />
                  </div>
                  <div class="detail-tile2">
                    <h3>Lựa chọn đa dạng</h3>
                    <p>
                      Cần món hàng nào, chỉ cần ghi tên, số lượng cùng những lưu ý và đặt dịch vụ.
                      Bạn không cần tìm từng món hàng đã được liệt kê, không bị phụ thuộc vào danh
                      sách hàng hóa có sẵn trên ứng dụng.
                    </p>
                  </div>
                </div>
              </div>
              <div class="box-content-3">
                <div class="box2">
                  <div class="img-title">
                    <img src="./assets/img/grocery-assistant-linh-hoat-thay-doi.png" alt="" />
                  </div>
                  <div class="detail-tile2">
                    <h3>Linh hoạt thay đổi</h3>
                    <p>
                      Khi có tình huống phát sinh: Nhu cầu mua hàng thay đổi, địa điểm đi chợ hết
                      hàng,... bạn có thể trao đổi trực tiếp với phụ tá đi chợ thông qua tính năng
                      gọi điện và nhắn tin miễn phí ngay trên ứng dụng bTaskee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="Register-Now">
            <div class="tilte-register">
              <h1>Đăng ký ngay hôm nay</h1>
              <p class="tilte-for-register">
                Bạn đã sẵn sàng trải nghiệm bTaskee chưa? Bắt đầu ngay với việc đặt lịch đi chợ để
                nhận ngay ưu đãi dành cho bạn
              </p>
              <div class="button-voucher">
                {/* <button>Nhận ưu đãi ngay</button> */}
                <a href="" className="btn">
                  Nhận ưu đãi
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="column-service-detail">
              <h2>Phụ tá đi chợ của bTaskee là ai?</h2>
              <div class="box-content-2">
                <div class="box2">
                  <div class="img-title">
                    <img src="./assets/img/grocery-assistant-phu-ta-la-ai.png" alt="" />
                  </div>
                  <div class="detail-tile3">
                    <div>
                      <i class="fa-solid fa-check"></i> Bà nội trợ lâu năm
                    </div>
                    <div>
                      <i class="fa-solid fa-check"></i> Cộng tác viên giúp việc theo giờ của bTaskee
                    </div>
                    <div>
                      <i class="fa-solid fa-check"></i> Nhiệt tình, không ngại nắng mưa
                    </div>
                    <div>
                      <i class="fa-solid fa-check"></i> Cẩn thận, tỉ mỉ từ khâu lựa chọn thực phẩm
                      đến khâu giao hàng
                    </div>
                    <div>
                      <i class="fa-solid fa-check"></i> Là người có kỹ năng, kinh nghiệm trong việc
                      lựa chọn thực phẩm
                    </div>
                    <div>
                      <i class="fa-solid fa-check"></i> Được đào tạo nghiệp vụ đi chợ, áp dụng tiêu
                      chuẩn lựa chọn cho từng món hàng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="background-clear">
            <div class="content">
              <div class="service-price">
                <div class="service-for-price">
                  <h2>Giá dịch vụ</h2>
                </div>
                <div class="Non-rational">
                  <h3 class="title-price">Phí đi chợ hộ</h3>
                  <h3 class="price">50,000 VND</h3>
                </div>
                <hr />
                <div class="Non-rational1">
                  <h3 class="title-price1 col-md-6">
                    Phí vận chuyển tối thiểu cho 1 đơn hàng <br />
                    (trong bán kính 5km)
                  </h3>
                  <h3 class="price1 col-md-6">15,000 VND</h3>
                </div>
                <hr />
                <div class="check-note">
                  <div class="note">
                    <div>
                      <i class="fa-solid fa-circle-exclamation"></i>Lưu ý
                    </div>
                  </div>
                  <div class="title-note">
                    <p>* Đối với Hồ Chí Minh phí đi chợ hộ là 80,000vnd/h.</p>
                    <p>* Từ 5km trở đi, khách hàng chịu phụ thu thêm 3.000 VND/km.</p>
                    <p>
                      * Khách hàng sử dụng dịch vụ lần đầu tiên phải cọc 200.000 đồng trong tài
                      khoản bPay – tài khoản thanh toán trong ứng dụng bTaskee.
                    </p>
                    <p>* Giá mang tính chất tham khảo ở thời điểm hiện tại.</p>
                    <p>
                      * Giá dịch vụ có thể tự động điều chỉnh tùy vào khu vực, cuối tuần, giờ cao
                      điểm (trước 8h và sau 17h) hay lễ tết.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="box-content-3">
              <div class="box3">
                <div class="img-title">
                  <img src="./assets/img/download-asker-btaskee-ver-3.png" alt="" />
                </div>
                <div class="detail-tile3">
                  <h3>
                    Bạn đã sẵn sàng để <br />
                    trải nghiệm?
                  </h3>
                  <p>
                    Tải, đăng ký và trải nghiệm những tính năng thú vị chỉ có trên Ứng dụng bTaskee.
                  </p>
                  <button>Nhận ưu đãi ngay</button>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <section>
              <h2 class="title-faq">FAQS</h2>
              <div class="faq">
                <div class="question">
                  <h3>What is 4stu?</h3>
                  <i class="fas fa-plus"></i>
                </div>
                <div class="answer">
                  <p>
                    4stu is a Student House Service that allows students to easily manage their
                    accounts, access services, and stay up-to-date on the latest news and events.
                  </p>
                </div>
              </div>

              <div class="faq">
                <div class="question">
                  <h3>What is the meaning of 4stu?</h3>
                  <i class="fas fa-plus"></i>
                </div>
                <div class="answer">
                  <p>
                    Basically, the services we provide are mainly for students, so the meaning of
                    the company name is for student
                  </p>
                </div>
              </div>

              <div class="faq">
                <div class="question">
                  <h3>What services can I access through 4stu?</h3>
                  <i class="fas fa-plus"></i>
                </div>
                <div class="answer">
                  <p>
                    4stu allows you to access a variety of services, including: Water delivery,
                    Cooking services, Laundry services, Housekeeping services, Medical services.
                  </p>
                </div>
              </div>

              <div class="faq">
                <div class="question">
                  <h3>How do I pay for services through 4stu?</h3>
                  <i class="fas fa-plus"></i>
                </div>
                <div class="answer">
                  <p>
                    You can pay for services through 4stu using a variety of payment methods,
                    including credit cards, debit cards, MOMO, and cash.
                  </p>
                </div>
              </div>

              <div class="faq">
                <div class="question">
                  <h3>How do I contact 4stu customer support?</h3>
                  <i class="fas fa-plus"></i>
                </div>
                <div class="answer">
                  <p>
                    If you have any questions or need assistance, you can contact 4stu customer
                    support by email: 4stuSupport@gmail.com or phone: 1900 0505 26
                  </p>
                </div>
              </div>

              <div class="faq">
                <div class="question">
                  <h3>How secure is 4stu?</h3>
                  <i class="fas fa-plus"></i>
                </div>
                <div class="answer">
                  <p>
                    4stu uses the latest security technologies to protect student data. All student
                    data is encrypted and stored on secure servers.
                  </p>
                </div>
              </div>

              <div class="faq">
                <div class="question">
                  <h3>What are the future plans for 4stu?</h3>
                  <i class="fas fa-plus"></i>
                </div>
                <div class="answer">
                  <p>
                    4stu is constantly working to improve. Some of the future plans for the company
                    include: Create a suitable app for both Android and IOS platforms Open new
                    services. Expanding the market
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <script src="./assets//js/service-detail.js"></script>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
