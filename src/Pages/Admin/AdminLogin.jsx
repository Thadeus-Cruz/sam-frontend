import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Auth/axiosInstance.jsx';
import '../../Assets/Styles/login.css'; 
import CustomCarAnimation from '../../Components/CarAnimation.jsx';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCarAnimation, setShowCarAnimation] = useState(false); 
  const [isValidSubmission, setIsValidSubmission] = useState(true);
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = async () => {
    try {
      const response = await axiosInstance.post('/admins/login', { email, password });

      return response.status === 200;
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) {
      setIsValidSubmission(false);
      return;
    }

    setIsValidSubmission(true);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowCarAnimation(true); 
      setTimeout(() => {
        setShowCarAnimation(false);

        // Generate adminAuthToken and store in session storage
        const adminAuthToken = Math.random().toString(36).substring(2);
        sessionStorage.setItem('adminAuthToken', adminAuthToken);

        // Auto logout after 2 minutes with alert
        setTimeout(() => {
          alert('Session expired. You will be redirected to the login page.');
          sessionStorage.removeItem('adminAuthToken');
          navigate('/admin/login'); // Redirect to login page after logout
        }, 120000); // 120000 ms = 2 minutes

        navigate('/admin/userpage'); // Redirect to the user page
      }, 0); 
    }, 5000);
  };

  useEffect(() => {
    const adminAuthToken = sessionStorage.getItem('adminAuthToken');
    if (!adminAuthToken) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="login-container">
      {showCarAnimation && <CustomCarAnimation />} 
      {isSubmitting ? (
        <CustomCarAnimation />
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 style={{
            fontSize: '2.5em',
            color: '#dc3545',
            textAlign: 'center',
            marginBottom: '20px',
            animation: 'fadeInDown 1s ease-in-out'
          }}>Admin Login</h1>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <span className="spinner"></span> : 'Login'}
            </button>
          </div>
          {!isValidSubmission && (
            <p className="error-message">Invalid email or password.</p>
          )}
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
