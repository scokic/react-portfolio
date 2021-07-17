import React from "react";
import Button from "../button/button.component";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className='section-wrapper footer-wrapper'>
      <div className='section-container footer-container'>
        <span className='navbar-logo'>
          <a href='#'>Strahinja</a>
        </span>
        <div>
          <Button text='Contact' url={"#"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
