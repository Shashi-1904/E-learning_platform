import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar'; // Correct casing: Navbar
import Register from "./components/register/register";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/navbar/Sidebar";
import Login from "./components/login/login"
import Home from "./components/home"
import Admin from "./components/admin"
import Addcourse from "./components/admin/addcourese"
import Addlink from "./components/admin/addvedio"
import Students from "./components/admin/showusers"
import Allcourse from "./components/courses/allcourses"
import CourseDetails from './components/courses/CourseDetails';
function App() {
  return (
    <Router>
      
        <Navbar/>
        
        <Routes>
        <Route path="/" element={<Sidebar/>} />
		      <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/add-course' element={<Addcourse/>}/>
          <Route path='/add-link' element={<Addlink/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/allcourses' element={<Allcourse/>}/>
          <Route path="/courses/:id" component={CourseDetails} />


        </Routes>
    </Router>
  );
}

export default App;
