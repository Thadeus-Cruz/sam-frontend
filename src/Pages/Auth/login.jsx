import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      const response = await fetch('http://localhost:8080/customers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        return await response.json();  // Returning the customer details
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

    const customer = await validateForm();

    if (!customer) {
      setIsValidSubmission(false);
      return;
    }

    setIsValidSubmission(true);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <span className="spinner"></span> : 'Login'}
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
