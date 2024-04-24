import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { Carousel, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './login/login.css';
import back from '../images/myimg.jpg';
import axios from 'axios'; // Import Axios for making HTTP requests
import { Link } from 'react-router-dom';

export default function Home() {
  const progressChartRef = useRef(null);
  const chartInstance = useRef(null);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [name, setName] = useState('');
  const [courses, setCourses] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (progressChartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = progressChartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'Remaining'],
          datasets: [
            {
              label: 'Progress',
              data: [75, 25],
              backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
              borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Progress Chart',
            },
          },
        },
      });
      setShowCalendar(true);
    }

    // Fetch user name from location state
    if (location.state && location.state.name) {
      setName(location.state.name);
    }

    // Fetch courses from backend
    axios.get('http://localhost:5000/api/courses/showcourses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className='grid-container' style={{ marginTop: '3em' }}>
      <div className="container sidebar" id="side" >
        <ul>
          <li><i className="fa-solid fa-bars"></i><span id="spa">Dashboard</span></li>
          <li><i className="fa-brands fa-youtube"></i><span id="spa">Classes</span></li>
          <li><i className="fa-solid fa-chalkboard-user"></i><span id="spa">Learning Plan</span></li>
          <li><i className="fa-solid fa-user-group"></i><span id="spa">Groups</span></li>
          <li><i className="fa-solid fa-note-sticky"></i><span id="spa">Grades</span></li>
          <li><i className="fa-solid fa-headset"></i><span id="spa">Chat</span></li>
          <li><i className="fa-solid fa-gear"></i><span id="spa">Settings</span></li>
        </ul>
      </div>
      <div className='greet'>
        <h3>Welcome {name || 'username'},How are you today!!!</h3>
      </div>
      <Carousel className='main-cards'>
        {courses.map(course => (
          <Carousel.Item key={course._id}>
            <img className="d-block w-100" src={back} alt="Course background" />
            <Carousel.Caption>
              <h3>{course.courseName}</h3>
              <p>{course.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="container charts" style={{ marginLeft: "3em" }} >
        <canvas ref={progressChartRef}></canvas>
        <h3>Web Development</h3>
      </div>
      <div className='cards'>
        <div className='cards'>
          {courses.slice(0, 3).map(course => (
            <div className="card" key={course._id} style={{ width: "18rem", margin: "1rem" }}>
              <img src={course.picture || back} className="card-img-top" alt="Course background" />
              <div className="card-body">
                <h5 className="card-title">{course.courseName}</h5>
                <p className="card-text">{course.description}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          ))}
        </div>
        <div>
            <button className="btn btn-primary"><Link to="/allcourses">Add Courses</Link></button>
        </div>


        
      </div>


      
      

      
    </div>

  );
}
