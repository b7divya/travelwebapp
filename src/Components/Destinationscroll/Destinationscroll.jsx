// import React, { useRef } from "react";
// import "./Destinationscroll.css";

// const HorizontalScroll = () => {
//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     const scrollContainer = scrollContainerRef.current;
//     const scrollAmount = 300; // Adjust scroll distance
//     if (direction === "left") {
//       scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="horizontal-scroll-wrapper">
//       <div className="horizontal-scroll-section">
//         <button className="scroll-button left" onClick={() => scroll("left")}>
//           &lt;
//         </button>
//         <div className="scroll-container" ref={scrollContainerRef}>
//           {[...Array(10)].map((_, index) => (
//             <div className="scroll-item" key={index}>
//               <img
//                 src="https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823020.jpg?t=st=1734717471~exp=1734721071~hmac=d177b980424ab0f822f3abfc26e74bc6d738f1cc1af0f299f5dd3c63194fb90b&w=740"
//                 alt={`Image ${index + 1}`}
//               />
//               <p>Location {index + 1}</p>
//             </div>
//           ))}
//         </div>
//         <button className="scroll-button right" onClick={() => scroll("right")}>
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScroll;




import React, { useRef } from "react";
import "./Destinationscroll.css";
import Destinationscrolldata from "./Destinationscrolldata.json";
import Goa from '../../Images/Goa.png'
import Delhi from'../../Images/Delhi.png'
import Gujrat from'../../Images/Gujrat.png'
import Kerala from'../../Images/Kerala.png'
import Maharastra from'../../Images/Maharastra.png'
import Ladakh from'../../Images/Ladakh.png'
import Odisha from'../../Images/Odisha.png'
import Rajasthan from'../../Images/Rajasthan.png'
import Sikkim from'../../Images/Sikkim.png'
import TamilNadu from'../../Images/Tn.png'
import Uttarpradesh from'../../Images/Up.png'
import Uttrakhand from'../../Images/Uttrakhand.png'

const DestinationScroll = () => {
  const scrollContainerRef = useRef(null);

  // Mapping for local images
  const localImages = {
    "Delhi.png": Delhi,
    "Gujrat.png": Gujrat,
    "Kerala.png": Kerala,
    "Maharastra.png": Maharastra,
    "Ladakh.png": Ladakh,
    "Goa.png": Goa,
    "Odisha.png": Odisha,
    "Rajasthan.png": Rajasthan,
    "Sikkim.png": Sikkim,
    "Tn.png": TamilNadu,
    "Up.png": Uttarpradesh,
    "Uttrakhand.png": Uttrakhand,
  };

  const scroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = 300; // Adjust scroll distance
    if (direction === "left") {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="horizontal-scroll-wrapper">
      <div className="horizontal-scroll-section">
        <button className="scroll-button left" onClick={() => scroll("left")}>
          &lt;
        </button>
        <div className="scroll-container" ref={scrollContainerRef}>
          {Destinationscrolldata.map((location, index) => (
            <div className="scroll-item" key={index}>
              <img
                src={
                  localImages[location.image] || location.image // Use local or external image
                }
                alt={location.alt || `Image of ${location.name}`}
              />
              <p>{location.name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DestinationScroll;



