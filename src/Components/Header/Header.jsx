import React, { useState } from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-container-left'>
                    <img src="logo.jpg" alt="Logo" className='header-logo' />
                </div>
                <div className='header-container-center'>
                    <div className='header-container-center-searchbar'>
                        <input id='searchbar' type="text" placeholder='Search Destination' />
                        <button id='search'>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                <div className='header-container-right'>
                    <button id='login'>Login</button>
                    <button id='signup'>Signup</button>
                    <div className='header-container-right-language'>
                        <button id='language' onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faGlobe} />
                            <FontAwesomeIcon icon={faCaretDown} className='caret-icon' />
                        </button>
                        {showDropdown && (
                            <ul className='language-dropdown'>
                                <li>English</li>
                                <li>Hindi</li>
                                <li>Français</li>
                                <li>Mandarin</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="header-line"></div>
        </div>
    );
};

export default Header;
