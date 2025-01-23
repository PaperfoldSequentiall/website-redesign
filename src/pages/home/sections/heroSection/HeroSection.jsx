import "./heroSection.scss"
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import heroVideo from "../../../../assets/hero-section.mp4";
import vector127 from "../../../../assets/vector127.png";
import vector126 from "../../../../assets/vector126.png";
import vector128 from "../../../../assets/vector128.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        className="hero-content"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          Innovating the Future, One Solution at a Time
        </h1>
        <p className="hero-subtitle">
          Empowering businesses with tailored IT services in design,
          development, and digital marketing.
        </p>
        <div className="hero-buttons">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active contact-btn" : "contact-btn"
            }
          >
            <span className="btn-background"></span>
            <span className="btn-text" data-text="Get in Touch">
              Get in Touch
            </span>
          </NavLink>
          <a href="/portfolio" className="portfolio-link">
            Portfolio
          </a>
        </div>
      </motion.div>
      <div className="hero-animation">
        <motion.img
          className="vector vector-126"
          src={vector126}
          alt="Vector 126"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img
          className="vector vector-127"
          src={vector127}
          alt="Vector 127"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          className="vector vector-128"
          src={vector128}
          alt="Vector 128"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <div className="services">
          <motion.span
            className="service service-design"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Design
          </motion.span>
          <motion.span
            className="service service-development"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            Development
          </motion.span>
          <motion.span
            className="service service-digital-marketing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            Digital Marketing
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
