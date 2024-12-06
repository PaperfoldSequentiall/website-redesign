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
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About Us
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Blog
        </NavLink>

        {isMenuOpen && (
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active get-in-touch' : 'get-in-touch')}
          >
            Get in Touch
          </NavLink>
        )}
      </nav>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'active contact-btn' : 'contact-btn')}
      >
        <span className="btn-background"></span>
        <span className="btn-text" data-text="Get in Touch">
          Get in Touch
        </span>
      </NavLink>
    </div>
  );
};

export default Header;
