import React, { useState, useEffect } from 'react';
import axiosInstance from '../Auth/axiosInstance';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Styles/Admin/AdminProductPage.css';
import SideBar from '../../Components/SideBar';

const AdminProductPage = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    imageURL: '',
    price: 0.0,
    rating: 0.0,
    link: '' // Added the link field
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
    // Fetch products from the backend
    axiosInstance.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, [setProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post the new product to the backend
    axiosInstance.post('/products', newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setNewProduct({
          name: '',
          description: '',
          imageURL: '',
          price: 0.0,
          rating: 0.0,
          link: '' // Reset the link field
        });
      })
      .catch(error => {
        console.error("There was an error saving the new product!", error);
      });
  };

  return (
    <div>
      <SideBar />
      <div className="admin-container">
        <form onSubmit={handleSubmit} className="admin-form">
          <h2>Add New Product</h2>
          <label>
            Name:
            <input type="text" name="name" value={newProduct.name} onChange={handleChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={newProduct.description} onChange={handleChange} />
          </label>
          <label>
            Image URL:
            <input type="text" name="imageURL" value={newProduct.imageURL} onChange={handleChange} />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={newProduct.price} onChange={handleChange} step="0.01" />
          </label>
          <label>
            Rating:
            <input type="number" name="rating" value={newProduct.rating} onChange={handleChange} min="0" max="5" step="0.1" />
          </label>
          <label>
            Link: {/* Added a new label and input for the link */}
            <input type="text" name="link" value={newProduct.link} onChange={handleChange} />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AdminProductPage;
