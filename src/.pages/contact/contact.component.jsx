import React from "react";
import "./contact.styles.scss";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <div className='contact-wrapper section-wrapper'>
      <div className='contact-container section-container'>
        <h2>Want to say hi?</h2>
        <p className='subheading'>I'd love to hear from you!</p>
        <div className='contact-subsection-wrapper'>
          <div className='contact-info-wrapper'>
            <h3>Contact Information</h3>
            <a href='https://www.linkedin.com/in/strahinjacokic/' target='_blank'>
              <FiLinkedin /> <span>LinkedIn</span>
            </a>
            <a href='https://github.com/scokic' target='_blank'>
              <FiGithub /> <span>GitHub</span>
            </a>
            <a
              className='email-link'
              onClick={() => {
                navigator.clipboard.writeText("strahinjacokic@gmail.com");
              }}
              target='_blank'>
              <FiMail /> <span>Email</span>
            </a>
          </div>
          <div className='contact-form-wrapper'>
            <h3>Write to us!</h3>
            <form>
              <label>
                Name
                <input className='input-field' placeholder='Name' type='text' />
              </label>
              <label>
                Email
                <input className='input-field' placeholder='Email' type='email' />
              </label>
              <label>
                Message
                <input className='input-field' placeholder='Message' type='textarea' />
              </label>
              <input className='submit-button custom-button' type='submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
