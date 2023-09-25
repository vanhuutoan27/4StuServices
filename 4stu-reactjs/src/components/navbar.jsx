import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Session } from '../App';

function NavBar() {
  //Lấy ra user trong session
  const session = useContext(Session);
  const user = session.user;

  // Cuộn lên trên đầu trang
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Lấy địa chỉ trang (Path)
  const location = useLocation();

  return (
    <header className="header fixed-header">
      <div className="content">
        <nav className="navbar">
          <img src="./img/4Stu-Logo.svg" alt="4Stu" />
          <span>
            <Link to="">4Stu</Link>
          </span>
          <ul>
            <li onClick={scrollToTop} className={location.pathname === '/' ? 'chosen' : ''}>
              <a href="/">Home</a>
            </li>
            <li onClick={scrollToTop} className={location.pathname === '/service' ? 'chosen' : ''}>
              <a href="/service">Service</a>
            </li>
            <li
              onClick={scrollToTop}
              className={location.pathname === '/package-service' ? 'chosen' : ''}
            >
              <a href="/package-service">Package Service</a>
            </li>
            <li onClick={scrollToTop} className={location.pathname === '/contact' ? 'chosen' : ''}>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="#!">
                More <FontAwesomeIcon icon={faCaretDown} className="custom-icon" />
              </a>
              <ul className="sub-nav">
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">News</Link>
                </li>
                <li>
                  <Link to="">FAQs</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="actions">
            {user ? (
              <div className="user-actions">
                <ul className="user-profile">
                  <li className="user-list">
                    <div>
                      <span>{user.username}</span>
                      <img src="./img/avatar-default.jpg" alt="" />
                    </div>
                    <ul className="sub-nav-user">
                      <li>
                        <a href="#"> Profile </a>
                      </li>
                      <li>
                        <a href="#"> Order </a>
                      </li>
                      <li>
                        <a href="login"> Logout </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            ) : (
              // Nếu không có người dùng đăng nhập, hiển thị nút đăng nhập
              <a href="/login" className="btn action-btn">
                Login
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
