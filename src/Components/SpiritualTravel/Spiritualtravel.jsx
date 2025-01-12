// import React from 'react'

// const Spiritualtravel = () => {
//   return (
//     <div className='spiritualtravel'>
//         <div className='spiritualtravel-container'>
//             <div className='spiritualtravel-container-heading'>
//                 <h1>Spiritual Destinations India</h1>
//             </div>
//             <div className='spiritualtravel-container-cards'>
            
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Spiritualtravel

import React from 'react';
import './Spiritualtravel.css';

const Spiritualtravel = () => {
  return (
    <div className="spiritualtravel">
      <div className="spiritualtravel-container">
        <div className="spiritualtravel-container-heading">
          <h1>Spiritual Destinations India</h1>
        </div>
        <div className="spiritualtravel-container-cards">
          {/* Card 1 */}
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1614164974666-057a7c713ba6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Destination 1"
              className="destination-image"
            />
            <div className="destination-info">
              <h3 className="destination-title">Varanasi - The Spiritual Heart</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="destination-card">
            <img
              src="https://cdn.pixabay.com/photo/2020/01/16/08/17/rishikesh-4769868_1280.jpg"
              alt="Destination 2"
              className="destination-image"
            />
            <div className="destination-info">
              <h3 className="destination-title">Rishikesh - The Yoga Capital</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="destination-card">
            <img
              src="https://media.istockphoto.com/id/937165544/photo/tirumala-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=6CNmojCax5KBSf53uKa4BFa0EKm5AKw1gsFdRT294wQ="
              alt="Destination 3"
              className="destination-image"
            />
            <div className="destination-info">
              <h3 className="destination-title">Tirupati - The Pilgrimage</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="destination-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww"
              alt="Destination 4"
              className="destination-image"
            />
            <div className="destination-info">
              <h3 className="destination-title">Amritsar - The Golden Temple</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="destination-card">
            <img
              src="https://thumbs.dreamstime.com/b/kedarnath-india-temple-sunrise-hindu-temple-dedicated-to-shiva-68148232.jpg"
              alt="Destination 5"
              className="destination-image"
            />
            <div className="destination-info">
              <h3 className="destination-title">Kedarnath - The Holy Shrine</h3>
            </div>
          </div>

          {/* Card 6 */}
          <div className="destination-card">
            <img
              src="https://i.pinimg.com/736x/8f/dd/13/8fdd13e20487a351fc83ac2f8f6c79c7.jpg"
              alt="Destination 6"
              className="destination-image"
            />
            <div className="destination-info">
              <h3 className="destination-title">Haridwar - Gateway to Heaven</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spiritualtravel;

