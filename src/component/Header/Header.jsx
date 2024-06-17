import React from 'react';
import { useState, useEffect } from 'react';
import "../Header/Header.css";
import Logo from "/src/assets/logo_transparent.png";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenHamMenu, setIsOpenHamMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleHamMenu = () => {
        setIsOpenHamMenu(!isOpenHamMenu);
    };

    return (
        <>
            <header>
                <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                    <div className='menu-icon-container'>
                        <div className='menu-icon' onClick={toggleHamMenu}>
                            <span className={`menu-first-line ${isOpenHamMenu ? 'rotate-first-line' : ''}`} />
                            <span className={`menu-middle-line ${isOpenHamMenu ? 'rotate-middle-line' : ''}`} />
                            <span className={`menu-third-line ${isOpenHamMenu ? 'rotate-third-line' : ''}`} />
                        </div>
                    </div>
                    <div className={`media-menu ${isOpenHamMenu ? 'open-hamburger' : ''}`}>
                        <ul>
                            <li><a href="#homeSection">HOME</a></li>
                            <li><a href="#workSection">MY WORK</a></li>
                            <li><a href="#portfolioSection">PORTFOLIO</a></li>
                            <li><a href="#resumeSection">RESUME</a></li>
                            <li><a href="#aboutSection">ABOUT</a></li>
                            <li><a href="#contactSection">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className='navbar-menu'>
                        <ul>
                            <li><a href="#homeSection">HOME</a></li>
                            <li><a href="#workSection">MY WORK</a></li>
                            <li><a href="#portfolioSection">PORTFOLIO</a></li>
                            <li><a href="#resumeSection">RESUME</a></li>
                            <li><a href="#aboutSection">ABOUT</a></li>
                            <li><a href="#contactSection">CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
