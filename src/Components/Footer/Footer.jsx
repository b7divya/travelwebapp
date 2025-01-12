import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import  { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* About Us Section */}
          <div className="footer-section">
            <h5>About Us</h5>
            <ul className="footer-links">
              <li><button>Our Story</button></li>
              <Link to='/reviews'>
                <li><button>Reviews</button></li>
              </Link>
              <li><button>Privacy Policy</button></li>
              <li><button>Support</button></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="footer-section">
            <h5>For Brands</h5>
            <ul className="footer-links">
              <li><button>Partner With Us</button></li>
              <li><button>Destination Marketing</button></li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="footer-section">
            <h5>Let's Connect</h5>
            <ul className="footer-links">
              <li><button>Submit A Guest Post</button></li>
              <li><button>Influencer's Contact</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <p>&copy; 2024 Your Future Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
