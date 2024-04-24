import React, { useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cr from './crouel1.jpg';
import Cr2 from './crousel2.jpg';
import Cr3 from './crousel3.jpg';

function HomePage() {
  useEffect(() => {
    // Load Google Charts library
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.async = true;
    script.onload = () => {
      // Initialize Google Charts
      window.google.charts.load('current', { 'packages': ['corechart'] });
      window.google.charts.setOnLoadCallback(drawCharts);
    };
    document.body.appendChild(script);
  }, []);

  const drawCharts = () => {
    drawEnrolledStudentsChart();
    drawPlacedStudentsChart();
  };

  const drawEnrolledStudentsChart = () => {
    const data = window.google.visualization.arrayToDataTable([
      ['Month', 'Enrolled Students'],
      ['Jan', 65],
      ['Feb', 59],
      ['Mar', 80],
      ['Apr', 81],
      ['May', 56],
      ['Jun', 55]
    ]);

    const options = {
      title: 'Enrolled Students',
      legend: { position: 'none' }
    };

    const chart = new window.google.visualization.BarChart(document.getElementById('enrolled-chart'));
    chart.draw(data, options);
  };

  const drawPlacedStudentsChart = () => {
    const data = window.google.visualization.arrayToDataTable([
      ['Month', 'Placed Students'],
      ['Jan', 35],
      ['Feb', 29],
      ['Mar', 40],
      ['Apr', 51],
      ['May', 36],
      ['Jun', 25]
    ]);

    const options = {
      title: 'Placed Students',
      legend: { position: 'none' }
    };

    const chart = new window.google.visualization.BarChart(document.getElementById('placed-chart'));
    chart.draw(data, options);
  };

  const engineeringCourses = [
    { id: 1, name: 'Software Engineering', description: 'Learn software development principles and practices.' },
    { id: 2, name: 'Electrical Engineering', description: 'Explore the world of electrical systems and circuits.' },
    { id: 3, name: 'Civil Engineering', description: 'Study the design, construction, and maintenance of infrastructure projects.' }
  ];

  return (
    <div className="container mt-5" style={{marginTop:'5em' }}>
      <h2 className="text-center mb-4">Welcome to Er Academy!</h2>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Cr} alt="First slide" />
          <Carousel.Caption>
            <h3>We offer IT courses</h3>
            <p>Explore our wide range of IT courses</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cr2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Register today!</h3>
            <p>Unlock access to premium features</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cr3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Summer Offer</h3>
            <p>Exclusive discounts available, login to see!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2 className="text-center mb-3">Enrolled Students</h2>
          <div id="enrolled-chart"></div>
        </div>
        <div className="col-md-6">
          <h2 className="text-center mb-3">Placed Students</h2>
          <div id="placed-chart"></div>
        </div>
      </div>

      <h2 className="text-center mt-5">Engineering Courses</h2>
      <div className="row mt-3">
        {engineeringCourses.map(course => (
          <div key={course.id} className="col-md-4 mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
