import React from 'react';
import './privacyPolicy.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="privacyPolicy">
      <Header />
      <main className="privacy-content">
        <section className="intro-section">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. This policy outlines how we handle your information.</p>
        </section>

        <section className="info-cards">
          <div className="card personal-info animate-card">
            <h3>Personal Information</h3>
            <p>We collect basic personal information to enhance your experience with us.</p>
          </div>
          <div className="card usage-data animate-card">
            <h3>Usage Data</h3>
            <p>Data on how you interact with our site is used to optimize our services.</p>
          </div>
          <div className="card cookies animate-card">
            <h3>Cookies</h3>
            <p>We use cookies to personalize your experience and analyze site traffic.</p>
          </div>
          <div className="card log-data animate-card">
            <h3>Log Data</h3>
            <p>We collect Log Data such as IP address, browser version, and time spent on our site.</p>
          </div>
          <div className="card service-providers animate-card">
            <h3>Service Providers</h3>
            <p>We may employ third-party companies to assist with the service or analyze its usage.</p>
          </div>
          <div className="card security animate-card">
            <h3>Security</h3>
            <p>We strive to protect your personal information, though no transmission method is 100% secure.</p>
          </div>
        </section>

        <section className="detailed-info">
          <h2>How We Use Your Information</h2>
          <p>We use your information solely to improve our services and customize user experiences...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
