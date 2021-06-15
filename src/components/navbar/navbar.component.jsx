import React from "react";
import "./navbar.styles.scss";

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-container'>
        <span className='navbar-logo'>SC</span>
        <nav>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Wordpress</a>
          </li>
        </nav>
        <div className='button-container'>
          <button className='navbar-button'>Contact</button>
          <button className='navbar-button'>Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
