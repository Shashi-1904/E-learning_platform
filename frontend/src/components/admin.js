import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { Carousel, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import 'react-calendar/dist/Calendar.css'; // Import the styles
import Calendar from 'react-calendar';
import './login/login.css';
import back from '../images/myimg.jpg';
import { Link } from 'react-router-dom';

export default function Admin() {
  const progressChartRef = useRef(null);
  const chartInstance = useRef(null);
  const [date, setDate] = useState(new Date()); // State for storing selected date
  const [showCalendar, setShowCalendar] = useState(false); // State to control Calendar visibility
  const location = useLocation(); // Get location object to access state passed from login page

  const { name } = location.state || {}; // Destructure name from state or set it to an empty string if state is undefined

  useEffect(() => {
    if (progressChartRef.current) {
      // Check if chart instance exists and destroy it
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
              data: [75, 25], // You can change these values to represent actual progress
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
      setShowCalendar(true); // Set showCalendar to true after chart initialization
    }
  }, []);

  return (
    <div className='grid-container' style={{ marginTop: '3em' }}>
      <div className="container sidebar" id="side" >
        <ul>
          <li><i className="fa-solid fa-bars"></i><span id="spa">Dashboard</span></li>
          <li><i className="fa-brands fa-youtube"></i><span id="spa"><Link to="/add-course">Add Courses</Link></span></li>
          <li><i className="fa-brands fa-youtube"></i><span id="spa"><Link to="/add-link">Add Vidio</Link></span></li>
          <li><i className="fa-solid fa-user-group"></i><span id="spa"><Link to="/students">Students</Link></span></li>
          <li><i className="fa-solid fa-note-sticky"></i><span id="spa">Reports</span></li>
          <li><i className="fa-solid fa-headset"></i><span id="spa">Chat</span></li>
          <li><i className="fa-solid fa-gear"></i><span id="spa">Settings</span></li>
        </ul>
      </div>
      <div className='greet'>
        <h3>Welcome {name || 'username'},How are you today!!!</h3>
        </div>
        <Carousel className='main-cards'>
        <Carousel.Item>
          <img className="d-block w-100" src={back} alt="First slide" />
          <Carousel.Caption>
            <h3>We offer IT courses</h3>
            <p>Explore our wide range of IT courses</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={back} alt="Second slide" />
          <Carousel.Caption>
            <h3>Register today!</h3>
            <p>Unlock access to premium features</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={back} alt="Third slide" />
          <Carousel.Caption>
            <h3>Summer Offer</h3>
            <p>Exclusive discounts available, login to see!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
       
      
    </div>
  );
}
