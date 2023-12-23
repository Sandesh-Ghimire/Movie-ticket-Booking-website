// Navbar.js
import React from 'react';
import './Navbar.css';

import logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="Logo" />
    
   
      </div>
     
      <div className="links">
        <a href="/">Home</a>
        <a href="/concerts">Concerts</a>
        <a href="/Movies">Movies</a>
        <a href="/Theater">Theater Events</a>

      </div>
      <div className="buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
