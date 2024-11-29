import React, { useState } from 'react';
import '../Assets/Styles/SideBar.css';
import { FaCaretUp, FaSignOutAlt, FaCalendar, FaUser, FaCar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const [isFooterCollapsed, setIsFooterCollapsed] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleFooterToggle = () => {
    setIsFooterCollapsed(!isFooterCollapsed);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthToken'); // Remove token from sessionStorage
    navigate('/admin/login'); // Redirect to the admin login page
  };

  return (
    <div id="sidebar-nav-bar">
      <input id="sidebar-nav-toggle" type="checkbox" />
      <div id="sidebar-nav-header">
        <a id="sidebar-nav-title" href="/homepage" target="_blank" rel="noopener noreferrer">
          AUTOGARAGE
        </a>
        <label htmlFor="sidebar-nav-toggle">
          <span id="sidebar-nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="sidebar-nav-content">
        <a href='/admin/dashboard'>
          <div className="sidebar-nav-button">
            <FaCalendar /><span>Dashboard</span>
          </div>
        </a>

        <a href='/admin/userpage'>
          <div className="sidebar-nav-button">
            <FaUser /><span>Users</span>
          </div>
        </a>
        <a href='/admin/repairs'>
          <div className="sidebar-nav-button">
            <FaCar /><span>Add Garage</span>
          </div>
        </a>
        <hr />
        <div onClick={handleLogout}>
          <div className="sidebar-nav-button">
            <FaSignOutAlt /><span>Logout</span>
          </div>
        </div>
        {/* Uncomment and update the following sections as needed
        <div className="sidebar-nav-button">
          <FaHeart /><span>Following</span>
        </div>
        <div className="sidebar-nav-button">
          <FaChartLine /><span>Trending</span>
        </div>
        <div className="sidebar-nav-button">
          <FaFire /><span>Challenges</span>
        </div>
        <div className="sidebar-nav-button">
          <FaMagic /><span>Spark</span>
        </div>
        <hr />
        <div className="sidebar-nav-button">
          <FaGem /><span>Codepen Pro</span>
        </div> */}
        <div id="sidebar-nav-content-highlight"></div>
      </div>
      <input id="sidebar-nav-footer-toggle" type="checkbox" />
      <div id="sidebar-nav-footer" className={isFooterCollapsed ? 'collapsed' : ''}>
        <div id="sidebar-nav-footer-heading">
          <div id="sidebar-nav-footer-avatar">
            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/2023/11_06_refresh/over/revuelto_over_01_m.jpg" alt="avatar" />
          </div>
          <div id="sidebar-nav-footer-titlebox">
            <a id="sidebar-nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank" rel="noopener noreferrer">Cruz</a>
            <span id="sidebar-nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="sidebar-nav-footer-toggle" onClick={handleFooterToggle}>
            <FaCaretUp />
          </label>
        </div>
        <div id="sidebar-nav-footer-content" className={isFooterCollapsed ? 'hidden-text' : ''}>
          Manager
        </div>
      </div>
    </div>
  );
}

export default SideBar;
