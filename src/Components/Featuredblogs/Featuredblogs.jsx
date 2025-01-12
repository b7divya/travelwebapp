// import React from 'react'
// import './Featuredblogs.css'

// const Featuredblogs = () => {
//   return (
//     <div className='featuredblogs'>
//         <div className='featuredblogs-container'>
//             <div className='featuredblogs-container-heading'>
//                 <h1>Featured Blogs</h1>
//             </div>
//             <div className='featuredblogs-container-blogs'>
            
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Featuredblogs


import React from 'react';
import './Featuredblogs.css';

const Featuredblogs = () => {
  return (
    <div className="featuredblogs">
      <div className="featuredblogs-container">
        <div className="featuredblogs-container-heading">
          <h1>Featured Blogs</h1>
        </div>
        <div className="featuredblogs-container-blogs">
          {/* Blog Card 1 */}
          <div className="blog-card">
            <img src="https://plus.unsplash.com/premium_photo-1661902264812-77019190be30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 1" className="blog-image" />
            <div className="blog-info">
              <h3 className="blog-title">Exploring New Horizons</h3>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="blog-card">
            <img src="https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 2" className="blog-image" />
            <div className="blog-info">
              <h3 className="blog-title">A Journey Through the Mountains</h3>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="blog-card">
            <img src="https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 3" className="blog-image" />
            <div className="blog-info">
              <h3 className="blog-title">The Art of Mindfulness</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuredblogs;
