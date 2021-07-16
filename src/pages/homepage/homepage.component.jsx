import React from "react";
import "./homepage.styles.scss";
import Navbar from "../../components/navbar/navbar.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import DevToolsSection from "../../components/dev-tools-section/dev-tools-section.component";

function Homepage() {
  return (
    <div className='homepage-wrapper'>
      <Navbar />
      <ScrollToTop />
      <HeroSection />
      <DevToolsSection />
      <HeroSection />
    </div>
  );
}

export default Homepage;
