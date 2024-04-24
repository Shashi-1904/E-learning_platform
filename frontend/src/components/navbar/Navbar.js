import React, { useState } from 'react';
import "../login/login.css";
import logo from './log.png'; // Replace './logo.png' with the path to your logo image
import profileIcon from './profile.png'; // Replace './profile.png' with the path to your profile icon image
import { Link } from 'react-router-dom';

function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginBottom: "0em", position: "fixed", zIndex: 999 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Er Academy Logo" />
          Er Academy
        </Link>
        <button className="navbar-toggler order-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse order-2" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Add additional navbar items here */}
          </ul>
          <div className="navbar-nav">
            <div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
              <img src={profileIcon} alt="Profile" className="profile-icon" />
              {showDropdown && (
                <div className="profile-dropdown">
                  <a href="#login" id="dropdown-item"><Link className="nav-link active" aria-current="page" to="/register">Register</Link></a>
                  <a href="#register" id="dropdown-item"><Link className="nav-link active" aria-current="page" to="/login">Login</Link></a>
                  {/* Add additional dropdown items here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
