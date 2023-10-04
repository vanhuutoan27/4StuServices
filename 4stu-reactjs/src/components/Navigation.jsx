import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Session } from '../App';

function Navigation() {
  // Lấy ra user trong session
  const session = useContext(Session);
  const user = session.user;

  // Lấy địa chỉ trang (Path)
  const location = useLocation();

  // Xử lý logout
  const handleLogout = (e) => {
    e.preventDefault();
    // Xóa session và thực hiện các thao tác khác (xóa access token, vv.)
    session.setUser(null);
    localStorage.removeItem('accessToken');
    // Chuyển hướng người dùng đến trang đăng nhập
    window.location.href = '/';
    // window.location.reload();
  };

  return (
    <header className="header fixed-header">
      <div className="content">
        <nav className="navbar">
          <img src="./assets/images/4Stu-Logo.svg" alt="4Stu" />

          <span>
            <a href="/">4Stu</a>
          </span>
          <ul>
            <li className={location.pathname === '/' ? 'chosen' : ''}>
              <a href="/">Home</a>
            </li>
            <li className={location.pathname === '/about' ? 'chosen' : ''}>
              <a href="/about">About</a>
            </li>
            <li className={location.pathname === '/service' ? 'chosen' : ''}>
              <a href="/service">Service</a>
            </li>
            <li className={location.pathname === '/contact' ? 'chosen' : ''}>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="#!">
                More <FontAwesomeIcon icon={faCaretDown} className="custom-icon-white" />
              </a>
              <ul className="sub-nav">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">FAQs</a>
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
                      <span>
                        {user.firstName}
                        {user.lastName}
                      </span>
                      <img src="../assets/images/avatar/avatar-nobita.svg" alt="" />
                    </div>
                    <ul className="sub-nav-user">
                      <li>
                        <a href="/admin-dashboard">Admin</a>
                      </li>
                      <li>
                        <a href="#">Profile</a>
                      </li>
                      <li>
                        <a href="#">Order</a>
                      </li>
                      <li>
                        <a href="#!" onClick={handleLogout}>
                          Logout
                        </a>
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

export default Navigation;
