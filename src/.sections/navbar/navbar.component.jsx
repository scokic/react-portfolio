import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../.components/button/button.component";
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
          <Link to='/'>Strahinja</Link>
        </span>
        <nav>
          <li>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/portfolio'>
              Portfolio
            </Link>
          </li>
        </nav>
        <div className='button-container'>
          <Button blank fullwidth text='Contact me' url='https://www.linkedin.com/in/strahinjacokic/' />
        </div>
        <div className='hamburger-wrapper' onClick={toggleMobileNavOpen}>
          <FiMenu className='hamburger-icon' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
