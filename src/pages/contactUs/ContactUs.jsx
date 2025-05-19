import React, { useRef, useState } from 'react';
import './contactUs.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import hero from '../../assets/components/contact-hero.webp';
import connect from '../../assets/components/connect.webp';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mdwkbfw',
        'template_7ke54m8',
        formRef.current,
        'sRyJiegSx4jGz7vqZ'
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className='contactUs'>
      {/* HERO SECTION */}
      <section className='hero-section'>
        <img src={hero} alt='Contact Hero' className='hero-image' />
        <div className='hero-text'>
          <h1>Connect With Us</h1>
          <p>
            Partner with us to explore limitless opportunities for your business
            growth and experience our dedication to your success.
          </p>
        </div>
      </section>
      {/* CONTACT FORM */}
      <section className='contact-form-section'>
        <div className='form-container'>
          <div className='form-left'>
            <h2>
              We're Here to <span className='highlight'>Assist</span> You
            </h2>
            <p>
              Fill out the form and let’s discuss your next big idea.
              <br />
              Reach us anytime at info@paperfold.in.
            </p>
            <form ref={formRef} onSubmit={sendEmail}>
              <label>
                Full Name<span className='asterisk-fullname'>*</span>
                <input type='text' placeholder='Enter your name' name='name' />
              </label>
              <label>
                Business Name
                <input
                  type='text'
                  placeholder='Enter your business name'
                  name='businessName'
                />
              </label>
              <label>
                Email<span className='asterisk-email'>*</span>
                <input
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                />
              </label>
              <label>
                Phone Number<span className='asterisk-phonenumber'>*</span>
                <input
                  type='text'
                  placeholder='Enter your phone number'
                  name='phoneNumber'
                />
              </label>
              <label>
                Services
                <select name='services'>
                  <option value=''>Select a Service</option>
                  <option value='web-development'>Web Development</option>
                  <option value='mobile-app-development'>
                    Mobile App Development
                  </option>
                  <option value='social-media-marketing'>
                    Social Media Marketing
                  </option>
                  <option value='performance-management'>
                    Performance Management
                  </option>
                  <option value='ui-ux-design'>UI/UX Design</option>
                  <option value='graphic-design'>Graphic Design</option>
                  <option value='logo-branding'>Logo & Branding</option>
                  <option value='product-packaging'>Product Packaging</option>
                  <option value='video-production'>Video Production</option>
                </select>
              </label>
              <label>
                How can we help?<span className='asterisk-help'>*</span>
                <textarea
                  placeholder='Type your message here'
                  name='message'
                ></textarea>
              </label>
              <div className='form-footer'>
                <div className='privacy-policy'>
                  <input type='checkbox' id='privacy-policy' />
                  <label htmlFor='privacy-policy'>
                    I agree to the privacy policy
                  </label>
                </div>
                <button className='getInTouch__submit' type='submit'>
                  <span className='btn-background'></span>
                  <span className='btn-text' data-text='Submit'>
                    Submit
                  </span>
                </button>
                {error && 'Error'}
                {success && 'Success'}
              </div>
            </form>
          </div>
          <div className='form-right'>
            <div className='contact-card'>
              <img src={connect} alt='Connect With Us' />
              <h3>Have Questions?</h3>
              <p>
                Feel free to reach out via email or phone.
                <br />
                We’ll respond promptly to assist you!
              </p>
              <div className='contact-info'>
                <i className='fas fa-phone'></i>
                <span>+91 9420940984</span>
              </div>
              <div className='contact-info'>
                <i className='fas fa-envelope'></i>
                <span>paperfoldinfotech@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
