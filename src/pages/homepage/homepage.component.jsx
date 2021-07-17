import React from "react";
import "./homepage.styles.scss";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import DevToolsSection from "../../components/dev-tools-section/dev-tools-section.component";
import ProjectsSection from "../../components/projects-section/projects.component";

function Homepage() {
  return (
    <div className='homepage-wrapper'>
      <Navbar />
      <ScrollToTop />
      <HeroSection />
      <DevToolsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default Homepage;
