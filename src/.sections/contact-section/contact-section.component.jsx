import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../.components/button/button.component";
import "./contact-section.styles.scss";

const ContactSection = () => {
  return (
    <div className='contact-section-wrapper section-wrapper'>
      <div className='contact-section-container section-container'>
        <div className='contact-description'>
          <h3>Get in touch</h3>
          <p>If you would like to get in touch, I would love to hear from you!</p>
          <p>Feel free to shoot me up a message on LinkedIn!</p>
        </div>
        <div className='contact-button'>
          <NavLink className='nav-link custom-button' exact activeClassName='nav-link active' to='/contact'>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
