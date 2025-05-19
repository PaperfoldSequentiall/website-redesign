import React, { useRef, useState } from 'react';
import './getInTouch.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import getInTouch from '../../assets/components/getInTouch.webp';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
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
    <section className='getInTouch'>
      <div className='getInTouch__container'>
        <div className='getInTouch__info'>
          <img
            src={getInTouch}
            alt='Business partners'
            className='getInTouch__image'
          />
          <h2 className='getInTouch__heading'>Get In Touch</h2>
          <p className='getInTouch__description'>
            Partner with us to explore limitless opportunities for your business
            growth and experience our dedication to your success.
          </p>
          <div className='getInTouch__contact'>
            <div className='getInTouch__contact-item'>
              <FontAwesomeIcon icon={faPhone} className='getInTouch__icon' />
              <span>+91 9420940984</span>
            </div>
            <div className='getInTouch__contact-item'>
              <FontAwesomeIcon icon={faEnvelope} className='getInTouch__icon' />
              <span>paperfoldinfotech@gmail.com</span>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className='getInTouch__form'>
          <input
            type='text'
            placeholder='Name'
            className='getInTouch__input'
            name='name'
          />
          <input
            type='text'
            placeholder='Business Name'
            className='getInTouch__input'
            name='businessName'
          />
          <input
            type='email'
            placeholder='Email'
            className='getInTouch__input'
            name='email'
          />
          <input
            type='text'
            placeholder='Phone Number'
            className='getInTouch__input'
            name='phoneNumber'
          />
          <select className='getInTouch__input' defaultValue='' name='services'>
            <option value='' disabled>
              Services
            </option>
            <option value='Web Development'>Web Development</option>
            <option value='Mobile App Development'>
              Mobile App Development
            </option>
            <option value='Social Media Marketing'>
              Social Media Marketing
            </option>
            <option value='Performance Management'>
              Performance Management
            </option>
            <option value='UI/UX Design'>UI/UX Design</option>
            <option value='Graphic Design'>Graphic Design</option>
            <option value='Logo & Branding'>Logo & Branding</option>
            <option value='Product Packaging'>Product Packaging</option>
            <option value='Video Production'>Video Production</option>
          </select>

          <textarea
            placeholder='Type Your Message here!'
            className='getInTouch__textarea'
            name='message'
          ></textarea>
          <div className='getInTouch__checkbox-container'>
            <input
              type='checkbox'
              id='privacy'
              className='getInTouch__checkbox'
            />
            <label htmlFor='privacy' className='getInTouch__label'>
              I agree to the privacy policy.
            </label>
          </div>
          <button className='getInTouch__submit' type='submit'>
            <span className='btn-background'></span>
            <span className='btn-text' data-text='Submit!'>
              Submit!
            </span>
          </button>
          {error && 'Error'}
          {success && 'Success'}
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
