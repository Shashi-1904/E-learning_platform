import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Import custom CSS file for additional styling
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student' // Default role is set to 'student'
  });
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(response.data);
  
      if (response.data.message === 'Login successful') {
        setFormData({
          email: '',
          password: ''
        });
  
        // Check if the name is "Admin" and redirect accordingly
        if (response.data.name === 'Admin') {
          // Redirect to admin page (/admin)
          navigate('/admin',{ state: { name: response.data.name } });
        } else {
          // Redirect to home page (/home) for other users
          navigate('/home', { state: { name: response.data.name } });
        }
      } else {
        toast.error('Invalid credentials', { position: "top-center" }); // Display error toast
      }
    } catch (error) {
      console.error('Error:', error.response.data);
      toast.error(error.response.data.message, { position: "top-center" }); // Display error toast
    }
  };

  return (
    <div className="container" style={{ marginTop: '5em' }}>
      <ToastContainer
        position="top-center" // Set default position to top center
        autoClose={5000} // Set auto close delay to 5 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Display newest toast on top
        closeOnClick // Close on click
        rtl={false} // Left to right
        pauseOnFocusLoss // Pause on focus loss
        draggable // Make draggable
        pauseOnHover // Pause on hover
        toastClassName="custom-toast" // Custom class for toast container
      />
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Login as:</label>
            <select className="form-control" name="role" value={formData.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Login</button> {/* Removed Link wrapper */}
        </form>
      </div>
    </div>
  );
}

export default Login;
