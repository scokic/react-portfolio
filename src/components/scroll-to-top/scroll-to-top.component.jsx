import React from "react";
import "./scroll-to-top.styles.scss";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  // smooth scroll to top does not work on safari

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='scroll-to-top-button-wrapper'>
      <div className='scroll-to-top-button' onClick={scrollToTop}>
        <FiArrowUp className='icon' />
      </div>
    </div>
  );
};

export default ScrollToTop;
