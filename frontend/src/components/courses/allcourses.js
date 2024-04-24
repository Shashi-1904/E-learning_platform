import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend
    axios.get('http://localhost:5000/api/courses/showcourses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>All Courses</h1>
      <div className="row">
        {courses.map(course => (
          <div key={course._id} className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={course.picture} />
              <Card.Body>
                <Card.Title>{course.courseName}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
