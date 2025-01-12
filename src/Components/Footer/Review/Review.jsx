import React from 'react'
import './Review.css'
import Header from '../../Header/Header'

const Review = () => {
  return (
    <div className='review'>
        <Header />
        <div className='review-container'>
            <div className='review-container-header'>
                <h1>Review Us</h1>
            </div>
            <input
                type="text"
                id="review-input"
                className="review-input"
                placeholder="Type your review here..."
                // value={review}
                // onChange={(e) => setReview(e.target.value)}
            />
            <button type="submit" className="submit-button">
                Submit
            </button>
        </div>
    </div>
  )
}

export default Review