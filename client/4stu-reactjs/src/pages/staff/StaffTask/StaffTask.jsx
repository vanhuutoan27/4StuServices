import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from 'antd';

import StaffNavigation from '../../../components/StaffNavigation';
import ViewTask from './ViewTask';

import { Session } from '../../../App';
import axios from '../../../config/axios';
import { formatDate } from '../../../utils/DateUtils';
import '../../../components/Management.css';

function StaffTask() {
  const session = useContext(Session);
  const user = session.user;
  const [allTasks, setAllTasks] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [isTaskDetailModalVisible, setTaskDetailModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    axios
      .get('/StaffOrderManagements')
      .then((response) => {
        const staffOrderManagements = response.data;

        staffOrderManagements.forEach((staffOrder) => {
          const orderId = staffOrder.orderId;
          const userId = staffOrder.staffId;
          const dateShipping = staffOrder.dateShipping;

          axios
            .get(`/UserManagements/${userId}`)
            .then((staffResponse) => {
              const staff = staffResponse.data;
              const staffEmail = staff.email;

              if (staffEmail === user.email) {
                axios
                  .get(`/OrderManagements/${orderId}`)
                  .then((orderResponse) => {
                    const order = orderResponse.data;

                    const combinedInfo = {
                      orderInfo: order,
                      staffInfo: staff,
                      dateShipping: dateShipping,
                    };

                    setAllTasks((prevTasks) => [...prevTasks, combinedInfo]);
                  })
                  .catch((error) => console.log(error));
              }
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.log(error));
  }, [user.email]);

  const handleViewTaskDetailClick = (task) => {
    setSelectedTask(task);
    setTaskDetailModalVisible(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateCurrentItems();
  };

  const updateCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = allTasks.slice(startIndex, endIndex);
    setCurrentItems(itemsToDisplay);
  };

  useEffect(() => {
    updateCurrentItems();
  }, [currentPage]);

  return (
    <div className="StaffTaskPage">
      <div className="staff-nav">
        <StaffNavigation />
      </div>

      <div className="table-content">
        <div className="table-widget">
          <caption>
            <h2>
              <span>
                {`${session.user.firstName.charAt(0).toUpperCase()}${session.user.firstName
                  .slice(1)
                  .toLowerCase()} ${session.user.lastName
                  .charAt(0)
                  .toUpperCase()}${session.user.lastName.slice(1).toLowerCase()}`}
              </span>
              's Tasks
            </h2>
          </caption>
          <table>
            <thead>
              <tr>
                <th>Date Shipping</th>
                <th>Service</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((task, index) => (
                <tr key={index}>
                  <td>
                    <span className="service-name">{formatDate(task.dateShipping)}</span>
                  </td>

                  <td>
                    <span className="service-name">{task.orderInfo.serviceName}</span>
                  </td>

                  <td>
                    <span className="service-name">{task.orderInfo.address}</span>
                  </td>

                  <td>
                    <span className="service-name">{task.orderInfo.phone}</span>
                  </td>

                  <td>
                    <span className="statuss">
                      <span className={`status status--${task.orderInfo.status}`}>
                        {task.orderInfo.status}
                      </span>
                    </span>
                  </td>
                  <td>
                    <button
                      className="admin-btn-action view btn"
                      onClick={() => handleViewTaskDetailClick(task)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6">
                  <div className="pagination">
                    <Pagination
                      total={allTasks.length}
                      current={currentPage}
                      pageSize={itemsPerPage}
                      onChange={handlePageChange}
                    />
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {isTaskDetailModalVisible && (
        <ViewTask task={selectedTask} onClose={() => setTaskDetailModalVisible(false)} />
      )}
    </div>
  );
}

export default StaffTask;
