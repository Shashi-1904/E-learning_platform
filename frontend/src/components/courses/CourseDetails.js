import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { courseName } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${courseName}`)
      .then(response => {
        setCourseDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  }, [courseName]);

  return (
    <div>
      {courseDetails ? (
        <div>
          <h2>{courseDetails.courseName}</h2>
          <p>Description: {courseDetails.description}</p>
          <p>Duration: {courseDetails.duration}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseDetails;
