import React, { useEffect } from 'react';
import '../Assets/Styles/User/NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';

const NavBar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    $(".nav-link1").click(function () {
      const target = $(this.hash);
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top - 80 }, 1400);
        return false;
      }
    });

    $(".top-link").click(function () {
      const target = $("#topSection");
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top }, 2000);
        return false;
      }
    });

    $(window).scroll(function () {
      ($(window).scrollTop() >= 110) ? (
        $('.nav-bar').addClass('scrolled')
      ) : (
        $('.nav-bar').removeClass('scrolled')
      );
    });

    $(window).scroll(function () {
      const sections = [
        { id: '#contactSection', link: '#contactLink' },
        { id: '#priceSection', link: '#priceLink' },
        { id: '#servicesSection', link: '#servicesLink' },
        { id: '#teamSection', link: '#teamLink' },
        { id: '#portfolioSection', link: '#portfolioLink' },
        { id: '#aboutSection', link: '#aboutLink' },
        { id: '#topSection', link: '#topLink' },
      ];

      for (let section of sections) {
        const target = $(section.id);
        if (target.length && $(window).scrollTop() >= target.offset().top - $(window).height() / 2) {
          $('.nav-link1').removeClass('active');
          $(section.link).addClass('active');
          break;
        }
      }
    });
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken'); // Remove token from session storage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className='nav-body'>
      <div className="nav-bar">
        <div className="nav-logo">AUTOGARAGE</div>
        <div className="nav-links-container">
          <Link className="nav-link1 active" to="/homepage">Home</Link>
          <Link className="nav-link1" to="/repair">Repair</Link>
          <Link className="nav-link1" to="/products">Products</Link>
          <Link className="nav-link1" to="/services">Services</Link>
          <Link className="nav-link1" to="/tutorial">Tutorials</Link>
          <Link className="nav-link1" to="/about-us">About Us</Link>
          <Link className="nav-link1" to="/community">Community</Link>
          <Link className="nav-link1" to="/" onClick={handleLogout}>Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
