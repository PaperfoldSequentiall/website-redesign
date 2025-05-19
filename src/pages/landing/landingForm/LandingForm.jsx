import React, { useRef, useState } from 'react';
import './landingForm.scss';
import quote1 from '../../../assets/landing/quote1.png';
import quote2 from '../../../assets/landing/quote2.png';
import form from '../../../assets/landing/form.jpg';
import emailjs from '@emailjs/browser';

const LandingForm = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mdwkbfw', // Replace with your actual service ID
        'template_7ke54m8', // Replace with your actual template ID
        formRef.current,
        'sRyJiegSx4jGz7vqZ' // Replace with your actual public key
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          formRef.current.reset(); // Clear form after successful submission
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section className='LandingForm'>
      <div className='quote1'>
        <img src={quote1} alt='' />
      </div>
      <div className='content'>
        <div className='left'>
          <img src={form} alt='' />
        </div>

        <div className='right'>
          <div className='heading'>
            Unlock Growth with Experts in{' '}
            <p>Marketing, Design, Development & Production</p>
          </div>
          <div className='subHead'>
            Paperfold Sequential is your full-stack creative and performance
            agency — ready to scale your brand.
          </div>

          <form ref={formRef} onSubmit={sendEmail} className='form'>
            <input type='text' name='name' placeholder='Name' required />
            <input type='email' name='email' placeholder='Email' required />
            <input
              type='text'
              name='phoneNumber'
              placeholder='Phone Number'
              required
            />
            <select name='services' required>
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
            <textarea
              name='message'
              placeholder='Type your message here'
              required
            ></textarea>
            <div className='privacy-policy'>
              <input type='checkbox' id='privacy-policy' required />
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
            {error && (
              <p className='error-message'>
                Something went wrong. Please try again.
              </p>
            )}
            {success && (
              <p className='success-message'>Form submitted successfully!</p>
            )}
          </form>
        </div>
      </div>
      <div className='quote2'>
        <img src={quote2} alt='' />
      </div>
    </section>
  );
};

export default LandingForm;
