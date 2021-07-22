import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../.components/button/button.component";
import "./homepage-hero.styles.scss";

const HomepageHeroSection = () => {
  return (
    <div className='homepage-hero-wrapper section-wrapper '>
      <div className='homepage-hero-container section-container'>
        <div className='hero-text-content'>
          <span>Frontend Developer</span>
          <h1>Strahinja Cokić</h1>
          <p>I'm a project manager who wants to become a frontend developer. Besides that, I love tech and apps, graphic design and working with people. It I sound interesting to you continue reading! 😀</p>

          <NavLink className='nav-link custom-button' exact activeClassName='nav-link active' to='/contact'>
            Contact
          </NavLink>
        </div>

        <div className='img-container'>
          <img src='/images/Profile.jpeg' />
        </div>
      </div>
    </div>
  );
};

export default HomepageHeroSection;
