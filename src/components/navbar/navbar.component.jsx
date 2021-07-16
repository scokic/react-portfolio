import React, { useState, useEffect } from "react";
import Button from "../button/button.component";
import "./navbar.styles.scss";

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={`section-wrapper navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className='navbar-container section-container'>
        <span className='navbar-logo'>
          <a>Strahinja</a>
        </span>
        <nav>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Tools</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </nav>
        <div className='button-container'>
          <Button text='Contact' link={"#"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
