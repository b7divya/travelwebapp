// import React from 'react'
// import './Blog.css'
// import Header from '../Header/Header'
// import Destinationscroll from '../Destinationscroll/Destinationscroll'

// const Blog = () => {
//   return (
//     <div className='blog'>
//         <div className='blog-container'>
//             <div className='blog-container-header'>
//               <Header />
//             </div>
//             <div className='blog-container-scroll'>
//               <Destinationscroll />
//             </div>
//             <div className='blog-container-stories'>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Blog;



import React, { useRef } from 'react';
import './Blog.css';
import Header from '../Header/Header';
import DestinationScroll from '../Destinationscroll/Destinationscroll';

const Blog = () => {
  const storyCards = [
    {
      title: 'Travel in Style',
      description: 'Discover the most stylish destinations around the world.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Beach Escapes',
      description: 'Find your perfect beach destination.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Mountain Adventures',
      description: 'Explore breathtaking mountain landscapes.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'City Lights',
      description: 'The best cities to visit for a quick getaway.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Cultural Wonders',
      description: 'Experience the rich culture of historic destinations.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className='blog'>
      <div className='blog-container'>
        <div className='blog-container-header'>
          <Header />
        </div>
        <div className='blog-container-scroll'>
          <DestinationScroll />
        </div>
        <div className='blog-container-stories'>
          <div className='stories-header'>
            <h1>Our Stories</h1>
          </div>
          <div className='stories-scroll-container'>
            <button className='scroll-button left' onClick={handleScrollLeft}>
              &lt;
            </button>
            <div className='stories-scroll' ref={scrollRef}>
              {storyCards.map((card, index) => (
                <div className='story-card' key={index}>
                  <img src={card.image} alt={card.title} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
            <button className='scroll-button right' onClick={handleScrollRight}>
              &gt;
            </button>
          </div>
        </div>
        <div className='blog-container-stories-states'>
          <div className='blog-container-stories-states-one'>
              <div className='blog-container-stories-states-one-heading'>
                <h1>Rajasthan: Where History Lives</h1>
              </div>
              <div className='blog-container-stories-states-one-cards'>
                <button className='scroll-button left' onClick={handleScrollLeft}>
                  &lt;
                </button>
                <div className='stories-scroll' ref={scrollRef}>
                  {storyCards.map((card, index) => (
                  <div className='story-card' key={index}>
                    <img src={card.image} alt={card.title} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                  ))}
                </div>
                <button className='scroll-button right' onClick={handleScrollRight}>
                  &gt;
                </button>
              </div>
          </div>
          <div className='blog-container-stories-states-two'>
              <div className='blog-container-stories-states-two-heading'>
                <h1>Kashmir: Where Heaven Descends on Earth</h1>
              </div>
              <div className='blog-container-stories-states-two-cards'>
                <button className='scroll-button left' onClick={handleScrollLeft}>
                    &lt;
                  </button>
                  <div className='stories-scroll' ref={scrollRef}>
                    {storyCards.map((card, index) => (
                    <div className='story-card' key={index}>
                      <img src={card.image} alt={card.title} />
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                    ))}
                  </div>
                  <button className='scroll-button right' onClick={handleScrollRight}>
                    &gt;
                  </button>
              </div>
          </div>
          <div className='blog-container-stories-states-three'>
              <div className='blog-container-stories-states-three-heading'>
                <h1>Ladakh: Land Of High Passes </h1>
              </div>
              <div className='blog-container-stories-states-three-cards'>
                <button className='scroll-button left' onClick={handleScrollLeft}>
                    &lt;
                  </button>
                  <div className='stories-scroll' ref={scrollRef}>
                    {storyCards.map((card, index) => (
                    <div className='story-card' key={index}>
                      <img src={card.image} alt={card.title} />
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                    ))}
                  </div>
                  <button className='scroll-button right' onClick={handleScrollRight}>
                    &gt;
                  </button>
              </div>
          </div>
          <div className='blog-container-stories-states-four'>
              <div className='blog-container-stories-states-four-heading'>
                <h1>Kerala: Where Nature Meets Culture</h1>
              </div>
              <div className='blog-container-stories-states-four-cards'>
                <button className='scroll-button left' onClick={handleScrollLeft}>
                    &lt;
                  </button>
                  <div className='stories-scroll' ref={scrollRef}>
                    {storyCards.map((card, index) => (
                    <div className='story-card' key={index}>
                      <img src={card.image} alt={card.title} />
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                    ))}
                  </div>
                  <button className='scroll-button right' onClick={handleScrollRight}>
                    &gt;
                  </button>
              </div>
          </div>
          <div className='blog-container-stories-states-five'>
              <div className='blog-container-stories-states-five-heading'>
                <h1>Tamil Nadu: Temples, Traditions, and Thrills</h1>
              </div>
              <div className='blog-container-stories-states-five-cards'>
                <button className='scroll-button left' onClick={handleScrollLeft}>
                    &lt;
                  </button>
                  <div className='stories-scroll' ref={scrollRef}>
                    {storyCards.map((card, index) => (
                    <div className='story-card' key={index}>
                      <img src={card.image} alt={card.title} />
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                    ))}
                  </div>
                  <button className='scroll-button right' onClick={handleScrollRight}>
                    &gt;
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

