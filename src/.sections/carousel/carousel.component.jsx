import React from "react";
import CarouselCard from "../../.components/carousel-card/carousel-card.component";
import "./carousel.styles.scss";

const Carousel = () => {
  return (
    <div className='carousel-wrapper section-wrapper'>
      <div className='carousel-container section-container'>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </div>
    </div>
  );
};

export default Carousel;
