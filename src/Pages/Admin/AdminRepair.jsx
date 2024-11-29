import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Styles/Admin/AdminRepairPage.css';
import SideBar from '../../Components/SideBar';

const AdminRepairPage = ({ setGarages, garages }) => {
  const [newGarage, setNewGarage] = useState({
    image: '',
    garageName: '',
    contact: '',
    email: '',
    address: '',
    rating: 0,
    mapLink: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Check for adminAuthToken after 2 seconds
    const timer = setTimeout(() => {
      const adminAuthToken = sessionStorage.getItem('adminAuthToken');
      if (!adminAuthToken) {
        alert("You're not logged in. Redirecting to the admin login page.");
        navigate('/admin/login');
      }
    }, 2000); // 2000 ms = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  useEffect(() => {
    // Fetch garages from the backend
    axios.get('http://localhost:8080/garages')
      .then(response => {
        setGarages(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the garages!", error);
      });
  }, [setGarages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGarage({ ...newGarage, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post the new garage to the backend
    axios.post('http://localhost:8080/garages', newGarage)
      .then(response => {
        setGarages([...garages, response.data]);
        setNewGarage({
          image: '',
          garageName: '',
          contact: '',
          email: '',
          address: '',
          rating: 0,
          mapLink: ''
        });
      })
      .catch(error => {
        console.error("There was an error saving the new garage!", error);
      });
  };

  const handleDelete = (garageId) => {
    // Delete garage by ID from the backend
    axios.delete(`http://localhost:8080/garages/${garageId}`)
      .then(() => {
        setGarages(garages.filter(garage => garage.id !== garageId));
      })
      .catch(error => {
        console.error("There was an error deleting the garage!", error);
      });
  };

  return (
    <div>
      <SideBar />
      <div className="admin-container">
        <form onSubmit={handleSubmit} className="admin-form">
          <h2>Add New Garage</h2>
          <label>
            Image URL:
            <input type="text" name="image" value={newGarage.image} onChange={handleChange} />
          </label>
          <label>
            Garage Name:
            <input type="text" name="garageName" value={newGarage.garageName} onChange={handleChange} />
          </label>
          <label>
            Contact:
            <input type="text" name="contact" value={newGarage.contact} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={newGarage.email} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={newGarage.address} onChange={handleChange} />
          </label>
          <label>
            Rating:
            <input type="number" name="rating" value={newGarage.rating} onChange={handleChange} min="0" max="5" />
          </label>
          <label>
            Location URL:
            <input type="text" name="mapLink" value={newGarage.mapLink} onChange={handleChange} />
          </label>
          <button type="submit">Add Garage</button>
        </form>

        <div className="garage-list">
          <h2>Garage Details</h2>
          <ul>
            {garages.map(garage => (
              <li key={garage.id} className="garage-item">
                <img src={garage.image} alt={garage.garageName} style={{ width: '100px', height: 'auto' }} />
                <p>Garage Name: {garage.garageName}</p>
                <p>Contact: {garage.contact}</p>
                <p>Email: {garage.email}</p>
                <p>Address: {garage.address}</p>
                <p>Rating: {garage.rating}</p>
                <p><a href={garage.mapLink} target="_blank" rel="noopener noreferrer">Location</a></p>
                <button onClick={() => handleDelete(garage.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminRepairPage;
