import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/company-logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>Have an Idea? <br />We can help.</h2>
          <div className="contact-section">
          <button className="start-project-btn">
  <span className="btn-background"></span>
  <span className="btn-text" data-text="Start Your Project">
  <NavLink to="/contact">Start Your Project</NavLink>

  </span>
</button>
  <a href="mailto:paperfoldinfotech@gmail.com" className="email-link">paperfoldinfotech@gmail.com</a>
</div>

        </div>
        <div className="footer-section">
          <h4>SERVICES</h4>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>PPC Management</li>
            <li>Video Production</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>TECHNOLOGIES</h4>
          <ul>
            <li>Backend Technologies</li>
            <li>Frontend Technologies</li>
            <li>Trending Technologies</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>Portfolio</li>
            <li>Clients</li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li>Blog</li>
            <li><NavLink to="/career">Careers</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
        <img src={logo} alt="Paperfold Logo" />
        <p>
            At Paperfold, we specialize in innovative content solutions, using technology and data insights to create impactful digital experiences that drive brand growth across industries.
          </p>
        </div>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="newsletter">
  <h4>SIGN UP FOR OUR NEWSLETTER</h4>
  <p>Stay updated with the latest from Paperfold!</p>
  <div className="input-container">
    <input type="email" placeholder="Your Email Address" />
    <span className="icon">›</span>
  </div>
</div>

      </div>
      <div className="footer-legal">
        <ul>
        <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
        <li><NavLink to="/terms">Terms & Condition</NavLink></li>
          <li>Sitemap</li>
        </ul>
        <p>Copyright © 2024 PaperfoldSequential All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
