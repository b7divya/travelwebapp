import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Herocarousel.css'

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={600}
        stopOnHover
        swipeable
      >
        <div className="carousel-slide">
          <img src="https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg" alt="Slide 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div className="carousel-slide">
          <img src="https://img.freepik.com/free-photo/beautiful-shot-udaipur-from-window-city-palace_181624-44764.jpg?t=st=1735207427~exp=1735211027~hmac=bd6dc904ca0c669dfe5b93a6ea9c56a5b3881a25d8ca040fd3a433c16cdebe52&w=740" alt="Slide 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div className="carousel-slide">
          <img src="https://img.freepik.com/free-photo/udaipur-city-view-from-hotel-balcony-rajasthan-india_53876-65505.jpg?t=st=1735207547~exp=1735211147~hmac=72acc0f75a489fb119641b1c273bdc590a411ffddd44dc0bbda4e270d95fec7b&w=740" alt="Slide 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
