import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/company-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" />
        </NavLink>
      </div>

      
      <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
        <NavLink to="/about" activeClassName="active">About Us</NavLink>
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        
        {isMenuOpen && (
          <a href="/get-in-touch" className="get-in-touch">
              <NavLink to="/contact">Get in Touch</NavLink>

          </a>
        )}
      </nav>

      <a href="/get-in-touch" className="contact-btn">
        <span className="btn-background"></span>
        <span className="btn-text" data-text="Get in Touch">  <NavLink to="/contact">Get in Touch</NavLink>
        </span>
      </a>
    </div>
  );
};

export default Header;
