import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';

import Loading from './pages/loading';
// ADMIN
import AdminDashboard from './admin/admin-dashboard/admin-dashboard';

import UserManagement from './admin/user-management/user-management';

import ServiceManagement from './admin/service-management/service-management';
import CreateService from './admin/service-management/CreateService';
import ViewService from './admin/service-management/ViewService';
import UpdateService from './admin/service-management/UpdateService';
import DeleteService from './admin/service-management/DeleteService';

// STAFF

// CUSTOMER
import Login from './pages/login-page/login';
import Home from './pages/home';
import Service from './pages/service';
import PackageService from './pages/package-service';
import Contact from './pages/contact-page/contact';

export const Session = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const accessToken = localStorage.getItem('accessToken');
  console.log(accessToken);

  useEffect(() => {
    // Create a custom Axios instance with headers
    const axiosInstance = axios.create({
      // gắn token vào header để backend giải quyết
      headers: {
        Authorization: `Bearer ${accessToken}`, // Attach the access token as a Bearer token
      },
    });

    // Make the GET request using the custom Axios instance
    axiosInstance
      .get('https://localhost:7088/api/CustomerManagements/Launch')
      .then((response) => {
        // Handle the response data here
        setUser(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });

    // Simulate an API call or data loading
    setTimeout(() => {
      // Set data and loading state to false when data is ready
      setData(/* your data */);
      setIsLoading(false);
    }, 500); // Simulate a 2-second delay
  }, []);

  return (
    <Session.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoading ? <Loading /> : <Home />} />

          <Route path="/admin-dashboard" element={isLoading ? <Loading /> : <AdminDashboard />} />
          <Route path="/admin-overview" element={isLoading ? <Loading /> : <AdminDashboard />} />
          <Route path="/admin-analysis" element={isLoading ? <Loading /> : <AdminDashboard />} />
          <Route path="/admin-feedback" element={isLoading ? <Loading /> : <AdminDashboard />} />
          <Route
            path="/admin-user-management"
            element={isLoading ? <Loading /> : <UserManagement />}
          />
          <Route
            path="/admin-package-service-management"
            element={isLoading ? <Loading /> : <AdminDashboard />}
          />
          <Route
            path="/admin-service-management"
            element={isLoading ? <Loading /> : <ServiceManagement />}
          />

          {/* CRUD FOR SERVICE */}
          <Route path="/create-service" element={isLoading ? <Loading /> : <CreateService />} />
          <Route path="/view-service/:id" element={isLoading ? <Loading /> : <ViewService />} />
          <Route path="/update-service/:id" element={isLoading ? <Loading /> : <UpdateService />} />
          <Route path="/delete-service" element={isLoading ? <Loading /> : <DeleteService />} />

          {/* CUSTOMER */}
          <Route path="/home" element={isLoading ? <Loading /> : <Home />} />
          <Route path="/login" element={isLoading ? <Loading /> : <Login />} />
          <Route path="/service" element={isLoading ? <Loading /> : <Service />} />
          <Route path="/package-service" element={isLoading ? <Loading /> : <PackageService />} />
          <Route path="/contact" element={isLoading ? <Loading /> : <Contact />} />
        </Routes>

        {/* <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-overview" element={<AdminDashboard />} />
          <Route path="/admin-analysis" element={<AdminDashboard />} />
          <Route path="/admin-feedback" element={<AdminDashboard />} />
          <Route path="/admin-user-management" element={<UserManagement />} />
          <Route path="/admin-package-service-management" element={<AdminDashboard />} />
          <Route path="/admin-service-management" element={<ServiceManagement />} />

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
        </Routes> */}

        {/* {JSON.stringify(user)} */}
      </div>
    </Session.Provider>
  );
}

export default App;
