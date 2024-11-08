import React from 'react';
import './header.scss';
import logo from '../../assets/company-logo.png';


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
      <img src={logo} alt="Paperfold Logo" />
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About us</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#blog">Blog</a>
      </nav>
      <a href="/get-in-touch" className="contact-btn">
        <span className="btn-background"></span>
        <span className="btn-text" data-text="Get in Touch">Get in Touch</span>
      </a>
    </div>
  );
}

export default Header;
