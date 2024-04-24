import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../login/login.css";

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    gender: '',
    degree: '',
    college: '',
    password: ''
  });

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
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      console.log(response.data);
      const message = response.data.message || "Registered successfully, please login";
      toast.success(message); // Display success toast
      setFormData({
        name: '',
        email: '',
        dob: '',
        gender: '',
        degree: '',
        college: '',
        password: ''
      });
    } catch (error) {
      console.error('Error:', error.response);
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again later.";
      toast.error(errorMessage); // Display error toast
    }
  };

  return (
    <div className="form-container" style={{marginTop:'5em' }}>
      <h2>Registration Form</h2>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select className="form-control" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Degree:</label>
          <input type="text" className="form-control" name="degree" value={formData.degree} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>College Name:</label>
          <input type="text" className="form-control" name="college" value={formData.college} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Register;
