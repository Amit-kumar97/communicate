import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                Commune
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to='/HomePage' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
                </li>
                <li className='nav-item'>
                <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    Services
                </Link>
                </li>
                <li className='nav-item'>
                <Link
                    to='/contact-us'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    Contact Us
                </Link>
                </li>
            </ul>
            </div>
        </nav>
        </>
    );
}

export default Header;
