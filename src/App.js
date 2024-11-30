import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/Auth/registration.jsx';
import Login from './Pages/Auth/login.jsx';
import HomePage from './Pages/User/homepage.jsx';
import Tutorial from './Pages/User/tutorial.jsx';
import Community from './Pages/User/community.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Services from './Pages/User/services.jsx';
import Product from './Pages/User/Product.jsx';
import Repairs from './Pages/User/Repairs.jsx';
import AboutUs from './Pages/User/AboutUs.jsx';
import AdminUserPage from './Pages/Admin/AdminUserPage.jsx';
import AdminLogin from './Pages/Admin/AdminLogin.jsx';
import Dashboard from './Pages/Admin/Dashboard.jsx';
import AdminRepairPage from './Pages/Admin/AdminRepair.jsx';
import AdminProductPage from './Pages/Admin/AdminProductPage.jsx';

const App = () => {
  const [registrations, setRegistrations] = useState([]);
  const [garages, setGarages] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<Registration setRegistrations={setRegistrations} />} />
        <Route path="/login" element={<Login registrations={registrations} />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/repair" element={<Repairs garages={garages} />} />
        <Route path="/products" element={<Product />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/userpage" element={<AdminUserPage />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/repairs' element={<AdminRepairPage setGarages={setGarages} garages={garages} />} />
        <Route path='/admin/products' element={<AdminProductPage />} />

      </Routes>
    </Router>
  );
};

export default App;
