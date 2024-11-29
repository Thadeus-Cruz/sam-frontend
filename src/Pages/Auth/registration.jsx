import React, { useState } from "react";
import "../../Assets/Styles/registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = ({ setRegistrations }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newCustomer = {
      name,
      email,
      password,
      address,
      contact,
    };

    try {
      // Send registration data to the server using axios
      const response = await axios.post("http://localhost:8080/customers", newCustomer);
      console.log("Customer registered successfully:", response.data);

      // Update registrations in localStorage
      const storedRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];
      const updatedRegistrations = [response.data, ...storedRegistrations];
      localStorage.setItem("registrations", JSON.stringify(updatedRegistrations));

      // Update state with the new registration
      setRegistrations(updatedRegistrations);

      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("There was an error registering the customer:", error);
    }
  };

  return (
    <div className="registration-html">
      <div className="registration-body">
        <form id="msform" onSubmit={handleSubmit}>
          <h1 className="fs-title" style={{ padding: "20px" }}>
            REGISTRATION FORM FOR AUTOGARAGE
          </h1>
          <fieldset>
            <h2 className="fs-title">Create your account</h2>
            <div className="form-grid">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                name="cpass"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
          </fieldset>
          <button type="submit" className="submit action-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
