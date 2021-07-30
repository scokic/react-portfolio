import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Button from "../../.components/button/button.component";
import "./navbar.styles.scss";
import { FiLink, FiMenu, FiSun, FiMoon } from "react-icons/fi";

function Navbar({ darkTheme, toggleDarkTheme }) {
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
          <NavLink to='/'>Strahinja</NavLink>
        </span>
        <nav>
          <li onClick={toggleMobileNavOpen}>
            <NavLink className='nav-link' exact activeClassName='nav-link active' to='/'>
              Home
            </NavLink>
          </li>
          <li onClick={toggleMobileNavOpen}>
            <NavLink className='nav-link' exact activeClassName='nav-link active' to='/portfolio'>
              Portfolio
            </NavLink>
          </li>
          <li onClick={toggleMobileNavOpen}>
            <NavLink className='nav-link' exact activeClassName='nav-link active' to='/contact'>
              Contact
            </NavLink>
          </li>
          <li onClick={toggleMobileNavOpen}>
            <NavLink className='nav-link' exact activeClassName='nav-link active' to='/blog-posts'>
              Blog
            </NavLink>
          </li>
        </nav>
        <div className='button-container' onClick={toggleMobileNavOpen}>
          <div onClick={toggleDarkTheme} className='dark-theme-button-desktop'>
            {darkTheme ? <FiSun /> : <FiMoon />}
          </div>
          <NavLink className='nav-link custom-button' exact activeClassName='nav-link active' to='/contact'>
            Contact
          </NavLink>
        </div>
        <div onClick={toggleDarkTheme} className='dark-theme-button-mobile'>
          {darkTheme ? <FiSun /> : <FiMoon />}
        </div>
        <div className='hamburger-wrapper' onClick={toggleMobileNavOpen}>
          <FiMenu className='hamburger-icon' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
