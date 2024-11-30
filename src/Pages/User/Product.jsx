import React, { useState, useEffect } from 'react';
import axiosInstance from '../../Pages/Auth/axiosInstance';
import '../../Assets/Styles/User/Products.css';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { FaStar } from 'react-icons/fa';

// Star rating generator function
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

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div>
      <div className='cus-image'></div>
      <div className="cus-body">
        <div style={{ paddingBottom: "100px" }}>
          <NavBar />
        </div>
        <div className="shell">
          <div className="container">
            <div className="row">
              {products.map((product, index) => (
                <div className="wsk-cp-product" key={index}>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <div className="wsk-cp-img">
                      <img src={product.imageURL} alt={product.title} className="img-responsive" />
                    </div>
                    <div className="wsk-cp-text">
                      <div className="title-product">
                        <h3>{product.name}</h3>
                      </div>
                      <div className="description-prod">
                        <p>{product.description}</p>
                      </div>
                      <div className="product-rating">
                        <p>Rating: {renderStars(product.rating)}</p>
                      </div>
                      <div className="wcf-left">
                        <span className="price">{`Rs.${product.price}/-`}</span>
                      </div>
                      <div className="wcf-right">
                        <a href={product.link} target="_blank" rel="noopener noreferrer" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
