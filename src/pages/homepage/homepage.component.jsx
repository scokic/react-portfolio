import React from "react";
import "./homepage.styles.scss";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import HeroSection from "../../components/section-hero/hero.component";
import DevToolsSection from "../../components/section-dev-tools/dev-tools.component";
import ProjectsSection from "../../components/section-projects/projects.component";

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
