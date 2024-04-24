import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../login/login.css';

const AddCoursePage = () => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [pricing, setPricing] = useState('');
  const [picture, setPicture] = useState('');
  const [teacher, setTeacher] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/courses/add', {
        courseName,
        description,
        duration,
        pricing,
        picture,
        teacher
      });
      console.log('Course added successfully:', response.data);
      // Set success message to display in alert
      setAlertMessage('Course added successfully');
      // Reset form fields after successful submission
      setCourseName('');
      setDescription('');
      setDuration('');
      setPricing('');
      setPicture('');
      setTeacher('');
    } catch (error) {
      console.error('Failed to add course:', error);
      // Set error message to display in alert
      setAlertMessage('Failed to add course');
    }
  };

  const handleAlertClose = () => {
    setAlertMessage('');
  };

  return (
    <div className="container" style={{ marginTop: "5em" }}>
      <h1>Add Course</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="courseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="duration">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="pricing">
          <Form.Label>Pricing</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pricing"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="picture">
          <Form.Label>Picture</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter picture URL"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="teacher">
          <Form.Label>Teacher</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter teacher name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Course
        </Button>
      </Form>
      {alertMessage && (
        <div className="alert-container alert-success">
          <span>{alertMessage}</span>
          <span className="close-icon" onClick={handleAlertClose}>X</span>
        </div>
      )}
    </div>
  );
};

export default AddCoursePage;
