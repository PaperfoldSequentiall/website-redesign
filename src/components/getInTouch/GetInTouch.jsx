import React from "react";
import "./getInTouch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import getInTouch from "../../assets/getInTouch.webp";

const GetInTouch = () => {
  return (
    <section className="getInTouch">
      <div className="getInTouch__container">
        <div className="getInTouch__info">
          <img
            src={getInTouch}
            alt="Business partners"
            className="getInTouch__image"
          />
          <h2 className="getInTouch__heading">Get In Touch</h2>
          <p className="getInTouch__description">
            Partner with us to explore limitless opportunities for your business
            growth and experience our dedication to your success.
          </p>
          <div className="getInTouch__contact">
            <div className="getInTouch__contact-item">
              <FontAwesomeIcon icon={faPhone} className="getInTouch__icon" />
              <span>+91 9420940984</span>
            </div>
            <div className="getInTouch__contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="getInTouch__icon" />
              <span>paperfoldinfotech@gmail.com</span>
            </div>
          </div>
        </div>
        <form className="getInTouch__form">
          <input type="text" placeholder="Name" className="getInTouch__input" />
          <input
            type="text"
            placeholder="Business Name"
            className="getInTouch__input"
          />
          <input
            type="email"
            placeholder="Email"
            className="getInTouch__input"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="getInTouch__input"
          />
          <select className="getInTouch__input">
            <option disabled selected>
              Services
            </option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>Social Media Marketing</option>
            <option>Performance Management</option>
            <option>UI/UX Design</option>
            <option>Graphic Design</option>
            <option>Logo & Branding</option>
            <option>Product Packaging</option>
            <option>Video Production</option>
          </select>
          <textarea
            placeholder="Type Your Message here!"
            className="getInTouch__textarea"
          ></textarea>
          <div className="getInTouch__checkbox-container">
            <input
              type="checkbox"
              id="privacy"
              className="getInTouch__checkbox"
            />
            <label htmlFor="privacy" className="getInTouch__label">
              I agree to the privacy policy.
            </label>
          </div>
          <button className="getInTouch__submit" type="submit">
            <span className="btn-background"></span>
            <span className="btn-text" data-text="Submit!">
              Submit!
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
