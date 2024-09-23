import React from 'react';
import '../header/header.css';
import logo from '../../assets/logo.png'

function Header() {
    return (
                <div className='navigation_bar'>
                    <div className='logo'>
                        <img src={logo} alt="" style={{ width: '81px', height: '90px' }}/>
                        <span>CONSTRUCTION <br /> AND INTERIOR</span>
                    </div>
                    <div className='list'>
                        <ul>
                            <li>HOME</li>
                            <li>SERVICES</li>
                            <li>ABOUT US</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div>
    )
}
export default Header;