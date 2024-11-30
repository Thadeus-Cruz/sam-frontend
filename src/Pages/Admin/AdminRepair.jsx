import React, { useState, useEffect } from 'react';
import axiosInstance from '../Auth/axiosInstance';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Styles/Admin/AdminRepairPage.css';
import SideBar from '../../Components/SideBar';

const AdminRepairPage = ({ setGarages, garages }) => {
  const [newGarage, setNewGarage] = useState({
    imgURL: '',
    garageName: '',
    contact: '',
    email: '',
    address: '',
    rating: 0,
    locationURL: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const adminAuthToken = sessionStorage.getItem('adminAuthToken');
      if (!adminAuthToken) {
        alert("You're not logged in. Redirecting to the admin login page.");
        navigate('/admin/login');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    // Fetch garages from the backend
    axiosInstance.get('/garages')
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
    axiosInstance.post('/garages', newGarage)
      .then(response => {
        setGarages([...garages, response.data]);
        setNewGarage({
          imgURL: '',
          garageName: '',
          contact: '',
          email: '',
          address: '',
          rating: 0,
          locationURL: ''
        });
      })
      .catch(error => {
        console.error("There was an error saving the new garage!", error);
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
            <input type="text" name="imgURL" value={newGarage.imgURL} onChange={handleChange} />
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
            <input type="number" name="rating" value={newGarage.rating} onChange={handleChange} min="0" max="5" step="0.1" />
          </label>
          <label>
            Location URL:
            <input type="text" name="locationURL" value={newGarage.locationURL} onChange={handleChange} />
          </label>
          <button type="submit">Add Garage</button>
        </form>
      </div>
    </div>
  );
};

export default AdminRepairPage;
