import React, { useState } from "react";
import "./contact.styles.scss";
import emailjs from "emailjs-com";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

const Contact = () => {
  const [toastActive, setToastActive] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_m3ir59b", e.target, "user_ftr2BKAL9f4jD8hvam3AS").then(
      (result) => {},
      (error) => {
        console.error(error.text);
      }
    );

    setToastActive(true);
    setTimeout(() => {
      setToastActive(false);
    }, 3000);

    e.target.reset();
  }

  return (
    <div className="contact-wrapper section-wrapper">
      {!toastActive ? (
        ""
      ) : (
        <div className="form-submit-toast">
          <p>Thanks for reaching out! I'll get back to you shortly!</p>
        </div>
      )}
      <div className="contact-container section-container">
        <h2>Want to say hi?</h2>
        <p className="subheading">I'd love to hear from you!</p>
        <div className="contact-subsection-wrapper">
          <div className="contact-info-wrapper">
            <h3>Contact Information</h3>
            <a href="https://www.linkedin.com/in/strahinjacokic/" target="_blank">
              <FiLinkedin className="icon" /> <span>LinkedIn</span>
            </a>
            <a href="https://github.com/scokic" target="_blank">
              <FiGithub className="icon" /> <span>GitHub</span>
            </a>
            <a
              className="email-link"
              onClick={() => {
                navigator.clipboard.writeText("strahinjacokic@gmail.com");
              }}
              target="_blank"
            >
              <FiMail className="icon" /> <span>Email</span>
            </a>
          </div>
          <div className="contact-form-wrapper">
            <h3>Write to me!</h3>
            <form onSubmit={sendEmail}>
              <label>
                <input className="input-text" type="text" required name="name" />
                <span className="floating-label">Name</span>
              </label>
              <label>
                <input className="input-text" type="email" required name="email" />
                <span className="floating-label">Email</span>
              </label>
              <label>
                <input className="input-text" type="text" required name="subject" />
                <span className="floating-label">Subject</span>
              </label>
              <label>
                <textarea className="input-text" rows="5" required type="textarea" name="message" />
                <span className="floating-label">Message</span>
              </label>
              <input className="submit-button custom-button" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
