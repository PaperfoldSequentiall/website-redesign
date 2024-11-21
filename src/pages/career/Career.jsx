import React from 'react';
import './career.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import hero from '../../assets/career-hero.png';
import avatar1 from '../../assets/avatar1.png';

const Career = () => {
  return (
    <div className="career">
      <Header />

      <section className="hero-section">
        <img src={hero} alt="Career Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Careers</h1>
          <p>Join Paperfold in transforming ideas into impactful stories. Let’s create something extraordinary together!</p>
        </div>
      </section>

      <section className="career-content">
        <div className="intro-text">
          <h2>Innovate Together, <span className="highlight">Succeed Together</span></h2>
          <p className="main-paragraph">
            We are proud to be a part of an innovative company that values collaboration, creativity, and respect.
            We believe that a positive and supportive work environment is essential for growth and are committed to 
            creating an atmosphere where every employee feels valued and appreciated.
          </p>
          <p className="sub-paragraph">Feeling inspired?</p>
          <p className="sub-paragraph">Don’t wait—join us today and become a part of our journey!</p>
        </div>

        <div className="avatars">
          <img src={avatar1} alt="Avatar 1" className="avatar" />
        </div>
      </section>

      <section className="resume-section">
        <h3>Still searching for what you need?</h3>
        <p className="dont-worry">Don't worry about it!</p>
        <p className="description">
          Feel free to send us your resume, and if your profile aligns with our needs, we’ll reach out. We’re always
          excited to discover new talent and offer opportunities to those who deserve them.
        </p>
        <button className="send-resume-btn">
  <span className="btn-background"></span>
  <span className="btn-text" data-text="Send Resume">
  <a
    href="mailto:paperfoldinfotech@gmail.com?subject=Resume Submission for Job Opening"
    target="_blank"
    rel="noopener noreferrer"
  >
    Send Resume
  </a>
</span>
</button>

      </section>

      <Footer />
    </div>
  );
}

export default Career;
