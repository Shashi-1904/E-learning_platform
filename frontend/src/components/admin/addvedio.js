import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../login/login.css';

const AddVideoLinkPage = () => {
  const [courseName, setCourseName] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/link/add-video-link', {
        courseName,
        videoLink
      });
      console.log('Video link added successfully:', response.data);
      // Set success message to display in alert
      setAlertMessage('Video link added successfully');
      // Reset form fields after successful submission
      setCourseName('');
      setVideoLink('');
    } catch (error) {
      console.error('Failed to add video link:', error);
      // Set error message to display in alert
      setAlertMessage('Failed to add video link');
    }
  };

  const handleAlertClose = () => {
    setAlertMessage('');
  };

  return (
    <div className="container" style={{ marginTop: "5em" }}>
      <h1>Add Video Link</h1>
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

        <Form.Group controlId="videoLink">
          <Form.Label>Video Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter video link"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Video Link
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

export default AddVideoLinkPage;
