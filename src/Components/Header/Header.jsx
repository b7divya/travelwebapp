import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGlobe, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo on the left */}
                <div className="header-logo-container">
                    <Link to="/" state={{ tab: "signup" }} className="menu-button">
                        <img src="logo.jpg" alt="Logo" className="header-logo" />
                    </Link>   
                </div>

                {/* Search bar in the center */}
                <div className="header-search-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search Destination"
                    />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                {/* Dropdown menu on the right */}
                <div className="header-menu-container">
                    <button
                        className="menu-toggle"
                        onClick={toggleMobileMenu}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>

            {/* Dropdown menu for responsive design */}
            {showMobileMenu && (
                <div className="dropdown-menu">
                    <Link to="/auth" state={{ tab: "login" }} className="menu-button">
                        Login
                    </Link>
                    <Link to="/auth" state={{ tab: "signup" }} className="menu-button">
                        Signup
                    </Link>
                    <div className="language-dropdown">
                        <button
                            className="menu-button language-button"
                            onClick={toggleDropdown}
                        >
                            <FontAwesomeIcon icon={faGlobe} />
                            <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                        {showDropdown && (
                            <ul className="dropdown-list">
                                <li>English</li>
                                <li>Hindi</li>
                                <li>Français</li>
                                <li>Mandarin</li>
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
