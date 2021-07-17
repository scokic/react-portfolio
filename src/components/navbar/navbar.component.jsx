import React, { useState, useEffect } from "react";
import Button from "../button/button.component";
import "./navbar.styles.scss";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, toggleNavOpen] = useState(false);

  // set nav sticky on scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // toggle mobile menu open
  const toggleMobileNavOpen = () => {
    toggleNavOpen(!navOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={`section-wrapper navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className={`navbar-container section-container ${!navOpen ? "" : "nav-open"}`}>
        <span className='navbar-logo'>
          <a href='#'>Strahinja</a>
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
          <Button text='Contact' url={"#"} />
        </div>
        <div className='hamburger-wrapper' onClick={toggleMobileNavOpen}>
          <FiMenu className='hamburger-icon' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
