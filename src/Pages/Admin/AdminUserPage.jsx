import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../../Assets/Styles/Admin/AdminUserPage.css";
import Sidebar from "../../Components/SideBar";

const AdminUserPage = () => {
  const [customers, setCustomers] = useState([]);
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
    // Fetch customer data from API
    fetch('http://localhost:8080/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customer data:', error));
  }, []);

  const deleteRecord = (index) => {
    const customerId = customers[index].id;
    fetch(`http://localhost:8080/customers/${customerId}`, {
      method: 'DELETE',
    })
    .then(() => {
      const updatedCustomers = customers.filter((_, i) => i !== index);
      setCustomers(updatedCustomers);
    })
    .catch(error => console.error('Error deleting customer:', error));
  };

  const editRecord = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index].editable = true;
    setCustomers(updatedCustomers);
  };

  const exitRecord = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index].editable = false;
    setCustomers(updatedCustomers);
  };

  const handleChange = (index, field, value) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index][field] = value;
    setCustomers(updatedCustomers);
  };

  const saveChanges = (index) => {
    const customer = customers[index];
    fetch(`http://localhost:8080/customers/${customer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
    .then(response => response.json())
    .then(updatedCustomer => {
      const updatedCustomers = [...customers];
      updatedCustomers[index] = updatedCustomer;
      updatedCustomers[index].editable = false;
      setCustomers(updatedCustomers);
    })
    .catch(error => console.error('Error updating customer:', error));
  };

  return (
    <div>
      <Sidebar />
      <div className="admin-page-container">
        <h1 className="admin-page-title">Customer Information</h1>
        <hr />
        <br />
        <form className="admin-page-form">
          <table className="admin-page-form-table">
            <tbody>
              <tr>
                <td valign="top" width="100%">
                  <fieldset className="admin-page-fieldset">
                    <table
                      id="customer_table"
                      className="admin-page-customer-table"
                      border="1"
                      cellPadding="5px"
                    >
                      <thead>
                        <tr>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>Address</th>
                          <th>Contact</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((customer, index) => (
                          <tr key={customer.id}>
                            <td
                              contentEditable={customer.editable || false}
                              className={
                                customer.editable ? "admin-page-editable" : ""
                              }
                              onBlur={(e) => handleChange(index, 'name', e.target.innerText)}
                            >
                              {customer.name}
                            </td>

                            <td
                              contentEditable={customer.editable || false}
                              className={
                                customer.editable ? "admin-page-editable" : ""
                              }
                              onBlur={(e) => handleChange(index, 'email', e.target.innerText)}
                            >
                              {customer.email}
                            </td>

                            <td
                              contentEditable={customer.editable || false}
                              className={
                                customer.editable ? "admin-page-editable" : ""
                              }
                              onBlur={(e) => handleChange(index, 'password', e.target.innerText)}
                            >
                              {customer.password}
                            </td>

                            <td
                              contentEditable={customer.editable || false}
                              className={
                                customer.editable ? "admin-page-editable" : ""
                              }
                              onBlur={(e) => handleChange(index, 'address', e.target.innerText)}
                            >
                              {customer.address}
                            </td>

                            <td
                              contentEditable={customer.editable || false}
                              className={
                                customer.editable ? "admin-page-editable" : ""
                              }
                              onBlur={(e) => handleChange(index, 'contact', e.target.innerText)}
                            >
                              {customer.contact}
                            </td>

                            <td>
                              {customer.editable ? (
                                <input
                                  type="button"
                                  className="admin-page-edit-btn"
                                  value="Save Changes"
                                  onClick={() => saveChanges(index)}
                                />
                              ) : (
                                <input
                                  type="button"
                                  className="admin-page-edit-btn"
                                  value="Edit User"
                                  onClick={() => editRecord(index)}
                                />
                              )}
                            </td>
                            <td>
                              <input
                                type="button"
                                className="admin-page-delete-btn"
                                value="Delete User"
                                onClick={() => deleteRecord(index)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </fieldset>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default AdminUserPage;
