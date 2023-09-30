import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/admin-navbar';

import './user-management.css';

function UserManagement() {
  const [allUsers, setAllUsers] = useState([]);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Tạo danh sách người dùng (hoặc lấy từ nguồn dữ liệu khác)
    const initialUsers = [
      {
        action: ['Edit', 'Remove'],
        email: 'huutoanvan1@gmail.com',
        password: '123456',
        username: 'huutoanvan1',
        name: 'Van Huu Toan 1',
        avatar: '../../../img/picrew1.jpg',
        role: 'Admin',
      },
      {
        avatar: '../../../img/picrew1.jpg',
        name: 'Van Huu Toan 2',
        email: 'huutoanvan1@gmail.com',
        username: 'huutoanvan1',
        role: 'Staff',
        action: ['Edit', 'Remove'],
      },
      {
        avatar: '../../../img/picrew1.jpg',
        name: 'Van Huu Toan 3',
        email: 'huutoanvan1@gmail.com',
        username: 'huutoanvan1',
        role: 'Admin',
        action: ['Edit', 'Remove'],
      },
      {
        avatar: '../../../img/picrew1.jpg',
        name: 'Van Huu Toan 4',
        email: 'huutoanvan1@gmail.com',
        username: 'huutoanvan1',
        role: 'Admin',
        action: ['Edit', 'Remove'],
      },
      {
        avatar: '../../../img/picrew1.jpg',
        name: 'Van Huu Toan 5',
        email: 'huutoanvan1@gmail.com',
        username: 'huutoanvan1',
        role: 'Admin',
        action: ['Edit', 'Remove'],
      },
      {
        avatar: '../../../img/picrew1.jpg',
        name: 'Van Huu Toan 6',
        email: 'huutoanvan1@gmail.com',
        username: 'huutoanvan1',
        role: 'Admin',
        action: ['Edit', 'Remove'],
      },
      {
        avatar: '../../../img/picrew1.jpg',
        name: 'Van Huu Toan 7',
        email: 'huutoanvan1@gmail.com',
        username: 'huutoanvan1',
        role: 'Admin',
        action: ['Edit', 'Remove'],
      },
      {
        avatar: '../../../img/picrew1.jpg',
        name: 'Van Huu Toan 8',
        email: 'huutoanvan1@gmail.com',
        username: 'huutoanvan1',
        role: 'Admin',
        action: ['Edit', 'Remove'],
      },
    ];

    setAllUsers(initialUsers);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="user-management-content">
      <div className="admin-navbar">
        <AdminNavbar />
      </div>
      <div className="table-content">
        <div className="table-widget">
          <table>
            <caption>
              All Users
              <span className="table-row-count">({allUsers.length} Users)</span>
            </caption>
            <thead>
              <tr>
                <th>Role</th>
                <th>Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((user, index) => (
                <tr key={index}>
                  <td>
                    <span className={`role role--${user.role}`}>{user.role}</span>
                  </td>

                  <td className="all-user-profile">
                    <img src={user.avatar} alt={user.name} />
                    <span className="profile-info">
                      <span className="profile-info__name">{user.name}</span>
                      <span className="profile-info__email">{user.email}</span>
                    </span>
                  </td>

                  <td>{user.username}</td>

                  <td>{user.password}</td>

                  <td>
                    <span className="actions">
                      {user.action.map((action, actionIndex) => (
                        <span className={`action action--${action}`} key={actionIndex}>
                          {action}
                        </span>
                      ))}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">
                  <ul className="pagination">
                    {Array.from(
                      { length: Math.ceil(allUsers.length / itemsPerPage) },
                      (_, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'Admin' : ''}
                          >
                            {index + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
