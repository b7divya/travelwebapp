import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Travelheader.css';
import { Link } from "react-router-dom";

const Travelheader = () => {
  return (
    <div className='travel-header__container'>
      {/* Transparent Header Section */}
      <div className="travel-header__header">
        <Link to="/" className="travel-header__logo-link">
          <img src="logo.jpg" alt="Logo" className="travel-header__logo" />
        </Link>
      </div>

      {/* Fullscreen Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={600}
        stopOnHover
        swipeable
        className="travel-header__carousel"
      >
        <div className="travel-header__carousel-slide">
          <img
            src="https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg"
            alt="Slide 1"
          />
        </div>
        <div className="travel-header__carousel-slide">
          <img
            src="https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg"
            alt="Slide 2"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Travelheader;
