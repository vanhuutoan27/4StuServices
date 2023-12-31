import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

// ADMIN
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
import OrderManagement from './pages/admin/OrderManagement/OrderManagement';
import StaffManagement from './pages/admin/StaffManagement/StaffManagement';
import UserManagement from './pages/admin/UserManagement/UserManagement';
import PackageServiceManagement from './pages/admin/PackageServiceManagement/PackageServiceManagement';
import ServiceManagement from './pages/admin/ServiceManagement/ServiceManagement';

// STAFF
import StaffTask from './pages/staff/StaffTask/StaffTask';
import StaffProfile from './pages/staff/StaffProfile/StaffProfile';
import StaffCalendar from './pages/staff/StaffCalendar/StaffCalendar';
import StaffOrder from './pages/staff/StaffOrder/StaffOrder';

// CUSTOMER
import Profile from './pages/customer/Profile/Profile';
import MyOrder from './pages/customer/MyOrder/MyOrder';

// COMMON
import Loading from './components/Loading';
import Login from './pages/common/Login/Login';
import Home from './pages/common/Home/Home';
import About from './pages/common/About/About';
import Service from './pages/common/Service/Service';
import Contact from './pages/common/Contact/Contact';
import Order from './pages/common/Order/Order';
import Completion from './pages/common/Order/Completion';
import Error404 from './pages/common/Error/Error404';

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState('null');

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken) {
      const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      axiosInstance
        .get('https://localhost:7088/api/UserManagements/Launch')
        .then((response) => {
          setUser(response.data);
          const userRole = response.data.role;
          setRole(userRole);
          console.log('User Role:', userRole);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        });
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ user, setUser, role, setRole }}>
      <div className="App">
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            {role === 'Admin' ? (
              <>
                {/* Admin Routes */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-order-management" element={<OrderManagement />} />
                <Route path="/admin-staff-management" element={<StaffManagement />} />
                <Route path="/admin-user-management" element={<UserManagement />} />
                <Route path="/admin-service-management" element={<ServiceManagement />} />
                <Route
                  path="/admin-package-service-management"
                  element={<PackageServiceManagement />}
                />
              </>
            ) : (
              <Route path="/*" element={<Error404 />} />
            )}

            {role === 'Staff' ? (
              <>
                {/* Staff Routes */}
                <Route path="/staff-profile" element={<StaffProfile />} />
                <Route path="/staff-order" element={<StaffOrder />} />
                <Route path="/staff-task" element={<StaffTask />} />
                <Route path="/staff-calendar" element={<StaffCalendar />} />
              </>
            ) : (
              <Route path="/*" element={<Error404 />} />
            )}

            {role === 'Customer' ? (
              <>
                {/* Customer Routes */}
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/my-order/:id" element={<MyOrder />} />
              </>
            ) : (
              <Route path="/*" element={<Error404 />} />
            )}

            {/* Common Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-completion" element={<Completion />} />
            <Route path="/not-found" element={<Error404 />} />
          </Routes>
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
