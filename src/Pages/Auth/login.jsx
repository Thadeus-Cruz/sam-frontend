import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Auth/axiosInstance.jsx';
import '../../Assets/Styles/login.css'; 
import CustomCarAnimation from '../../Components/CarAnimation.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCarAnimation, setShowCarAnimation] = useState(false); 
  const [isValidSubmission, setIsValidSubmission] = useState(true);
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const validateForm = async () => {
    try {
      const response = await axiosInstance.post('/customers/login', { email, password });

      if (response.status === 200) {
        return response.data;  // Returning the customer details
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error during login:', error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set loading state

    const customer = await validateForm();

    if (!customer) {
      setIsValidSubmission(false);
      setIsSubmitting(false); // Reset loading state
      return;
    }

    setIsValidSubmission(true);
    setTimeout(() => {
      const token = Math.random().toString(36).substring(2);
      
      if (rememberMe) {
        localStorage.setItem('authToken', token);
        
        setTimeout(() => {
          localStorage.removeItem('authToken');
          alert('Your session has ended. Please log in again.');
          navigate('/login');
        }, 300000);
      } else {
        sessionStorage.setItem('authToken', token);

        setTimeout(() => {
          sessionStorage.removeItem('authToken');
          alert('Session expired. Please log in again.');
          navigate('/login');
        }, 300000);
      }

      setShowCarAnimation(true); 
      setTimeout(() => {
        setShowCarAnimation(false);
        navigate('/homepage'); 
      }, 0); 
    }, 5000);
  };

  return (
    <div className="login-container">
      {showCarAnimation && <CustomCarAnimation />} 
      {isSubmitting ? (
        <CustomCarAnimation />
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 style={{
            fontSize: '2.5em',
            color: '#007bff',
            textAlign: 'center',
            marginBottom: '20px',
            animation: 'fadeInDown 1s ease-in-out'
          }}>Ride In</h1>
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
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember me
            </label>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}> {/* Disable button when loading */}
              {isSubmitting ? "Logging in..." : "Login"} {/* Show loading text */}
            </button>
          </div>
          {!isValidSubmission && (
            <p className="error-message">Invalid email or password.</p>
          )}
          <p style={{ textAlign: 'center', marginTop: '10px' }}>Don't have an account? <a href="/registration">Sign up</a></p>
        </form>
      )}
    </div>
  );
};

export default Login;
