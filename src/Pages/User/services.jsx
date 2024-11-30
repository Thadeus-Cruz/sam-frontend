import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import $ from 'jquery';
import '../../Assets/Styles/User/Services.css';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Services = () => {
  const [mytext, setMytext] = useState('');
  const [response, setResponse] = useState('');
  const [redirectMessage, setRedirectMessage] = useState(''); // State for redirect message
  const [loading, setLoading] = useState(false); // State for loading
  const responseRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const API_KEY = 'YOUR_API_KEY';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the token is present when the submit button is pressed
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      alert('You are not logged in. Redirecting to login page...');

      // Redirect after a short delay to allow the user to see the alert
      setTimeout(() => {
        navigate('/login'); // Redirect to login
      }, 500);
      return;
    }

    if (mytext.trim()) {
      setLoading(true); // Start loading

      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'You are an expert in car repairs, modifications, and services of the "AUTOGARAGE" vehicle repair hub company. If you are prompted with any queries that is not related to vehicles say to contact AUTOGARAGE Customer Service',
              },
              {
                role: 'user',
                content: mytext.trim(),
              },
            ],
            temperature: 1.0,
            top_p: 0.7,
            n: 1,
            stream: false,
            presence_penalty: 0,
            frequency_penalty: 0,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          setResponse(data.choices[0].message.content);
        } else {
          setResponse('Error: Unable to process your request.');
        }
      } catch (error) {
        console.error(error);
        setResponse('Error: Unable to process your request.');
      } finally {
        // The animation is handled in the useEffect, so we will set loading to false there
      }
    }
  };

  useEffect(() => {
    if (response) {
      typeEffect(responseRef.current, 20);
    }
  }, [response]);

  const typeEffect = (element, speed) => {
    var type = $(element).text();
    $(element).html(" ");

    var i = 0;
    var timer = setInterval(() => {
      if (i < type.length) {
        $(element).append(type.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setLoading(false); // End loading when animation is complete
      }
    }, speed);
  };

  // If the redirect message is set, only show the message
  if (redirectMessage) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <h2>{redirectMessage}</h2>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='service-img'></div>
      <div className='service-outer'></div>
      <NavBar />
      <div className='service-body'>
        <h1 style={{ color: 'white', fontWeight: '400', display: 'flex', alignItems: 'center' }}>
          AI powered
          <div style={{ color: 'red', fontWeight: '600', display: 'inline', marginLeft: '5px' }}>
            AUTOGARAGE
          </div>
          diagnostic tool
        </h1>

        <form id="chat-form" onSubmit={handleSubmit} style={{ position: 'relative', width: '100%', marginTop: '15px' }}>
          <label htmlFor="mytext" style={{ fontWeight: '500' }}>Enter your Queries:</label>
          <input
            type="text"
            id="mytext"
            placeholder="Type in queries related to your vehicle here"
            style={{ position: 'relative', width: '50%', left: '10px', padding: '4px', fontSize: '16px', lineHeight: '1.5', fontFamily: 'inherit' }}
            value={mytext}
            onChange={(e) => setMytext(e.target.value)}
            required
          />
          <button type="submit" style={{ position: 'relative', left: '20px' }} disabled={loading}>
            {loading ? 'Generating...' : 'Submit'}
          </button>
        </form>

        <div style={{ position: 'relative', width: '80%' }}>
          <div
            ref={responseRef}
            className="response-anim"
            style={{
              position: 'relative',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              padding: '8px',
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              pointerEvents: 'none',
              fontWeight: '500',
              fontSize: '17px',
              lineHeight: '1.5',
              fontFamily: 'inherit',
            }}
          >
            {response}
          </div>
        </div>
      </div>
      <div className='footerclass'>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
