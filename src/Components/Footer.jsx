import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import '../Assets/Styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&copy; 2024 AutoGarage. All rights reserved.</p>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:727822tuad057@skct.edu.in">727822tuad057@skct.edu.in</a></p>
          <p>Phone: +91 9344392757</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p className="social-icons">
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
          </p>
          <p>Twitter: @AutoGarage</p>
          <p>Facebook: facebook.com/AutoGarage</p>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <p>15(3), Indira Nagar,</p>
          <p>Podanur, Coimbatore - 641 023</p>
        </div>
        <div className="footer-section">
          <h4>Important Pages</h4>
          <p><a href="/terms">Terms and Conditions</a></p>
          <p><a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
