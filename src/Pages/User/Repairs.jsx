import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Assets/Styles/User/Repairs.css';
import NavBar from '../../Components/NavBar';
import { FaMapMarkedAlt, FaStar } from 'react-icons/fa';
import Footer from '../../Components/Footer';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        size={20}
        color={i <= rating ? 'gold' : 'gray'}
      />
    );
  }
  return stars;
};

const Repair = ({ repair }) => {
  return (
    <div className="repair-body">
      <img src={repair.image} alt={repair.garageName} className="repair-image" />
      <div className="repair-details">
        <h3>{repair.garageName}</h3>
        <p><span className='repair-p'>Contact: </span>{repair.contact}</p>
        <p><span className='repair-p'>Email: </span>{repair.email}</p>
        <p><span className='repair-p'>Address: </span>{repair.address}</p>
        <p><span className='repair-p'>Rating: </span>{renderStars(repair.rating)}</p>
        <a href={repair.mapLink} target="_blank" rel="noopener noreferrer" className="repair-map-link">
          <FaMapMarkedAlt size={30} color='red' />
        </a>
      </div>
    </div>
  );
};

const Repairs = () => {
  const [garages, setGarages] = useState([]);

  useEffect(() => {
    // Fetch garages from the backend
    axios.get('http://localhost:8080/garages')
      .then(response => {
        setGarages(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the garages!", error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className='repair-body-bg'></div>
      <div className='repair-body-img'></div>
      <div className="repairs">
        {garages.map(repair => (
          <Repair key={repair.id} repair={repair} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Repairs;
