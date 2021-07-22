import React from "react";
import "./contact.styles.scss";
import emailjs from "emailjs-com";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_m3ir59b", e.target, "user_ftr2BKAL9f4jD8hvam3AS").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  }

  return (
    <div className='contact-wrapper section-wrapper'>
      <div className='contact-container section-container'>
        <h2>Want to say hi?</h2>
        <p className='subheading'>I'd love to hear from you!</p>
        <div className='contact-subsection-wrapper'>
          <div className='contact-info-wrapper'>
            <h3>Contact Information</h3>
            <a href='https://www.linkedin.com/in/strahinjacokic/' target='_blank'>
              <FiLinkedin className='icon' /> <span>LinkedIn</span>
            </a>
            <a href='https://github.com/scokic' target='_blank'>
              <FiGithub className='icon' /> <span>GitHub</span>
            </a>
            <a
              className='email-link'
              onClick={() => {
                navigator.clipboard.writeText("strahinjacokic@gmail.com");
              }}
              target='_blank'>
              <FiMail className='icon' /> <span>Email</span>
            </a>
          </div>
          <div className='contact-form-wrapper'>
            <h3>Write to me!</h3>
            <form onSubmit={sendEmail}>
              <label>
                Name
                <input className='input-field' placeholder='Name' type='text' name='name' />
              </label>
              <label>
                Email
                <input className='input-field' placeholder='Email' type='email' name='email' />
              </label>
              <label>
                Subject
                <input className='input-field' placeholder='Subject' type='text' name='subject' />
              </label>
              <label>
                Message
                <textarea className='input-field' placeholder='Message' rows='3' type='textarea' name='message' />
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
