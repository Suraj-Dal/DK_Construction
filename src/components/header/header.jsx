import React, { useState } from 'react';
import '../header/header.css';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

function Header() {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        console.log('enter');
        setShowPopup(!showPopup);
    };

    const handleMouseLeave = (path) => {
        navigate(path);
        setShowPopup(false);
    };

    const handleHome = () => {
        navigate('/');
    }

    return (
        <div className='navigation_bar'>
            <div className='logo'>
                <img src={logo} alt="" style={{ width: '51px', height: '60px' }} />
                <span>CONSTRUCTION <br /> AND INTERIOR</span>
            </div>
            <div className='list'>
                <ul>
                    <li onClick={handleHome}>HOME</li>
                    <li style={{position: 'relative'}} onClick={handleMouseEnter}
                    >SERVICES
                        {showPopup && (
                            <div className="popup">
                                <ul>
                                    <li onClick={() => handleMouseLeave("/construction")}>Construction</li>
                                    <li onClick={() => handleMouseLeave("/interior")}>Interior</li>
                                    <li onClick={() => handleMouseLeave("/material")}>Material</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;