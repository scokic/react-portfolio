import React from "react";
import Button from "../../.components/button/button.component";
import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className='contact-wrapper section-wrapper'>
      <div className='contact-container section-container'>
        <div className='contact-description'>
          <h3>Get in touch</h3>
          <p>If you like what you see and would like to get in touch, I would love to hear from you!</p>
          <p>Feel free to shoot me up a message on LinkedIn!</p>
        </div>
        <div className='contact-button'>
          <Button text='Contact me' blank white url='https://www.linkedin.com/in/strahinjacokic/' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
