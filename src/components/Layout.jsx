import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';
import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook, FaTwitter } from 'react-icons/fa';
import iconnectLogo from '../assets/iconnect_logo.png';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/team', label: 'Team' },
        { path: '/app', label: 'Our App' },
        { path: '/vision', label: 'Vision' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo-link" onClick={closeMenu}>
                        <img
                            src={iconnectLogo}
                            alt="iConnect Logo"
                            className="nav-logo-img"
                        />
                    </Link>

                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>

                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                        onClick={closeMenu}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                {children}
            </main>

            <footer className="footer">
                <div className="container footer-content-compact">
                    <div className="footer-left">
                        <Link to="/" className="footer-logo-link">
                            <img
                                src={iconnectLogo}
                                alt="iConnect Logo"
                                className="footer-logo-img"
                            />
                        </Link>
                        <p>&copy; {new Date().getFullYear()} by iCONNECT Apps</p>
                    </div>
                    <div className="footer-center">
                        <a href="https://www.instagram.com/iconnect_sud/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/iconnect-sud" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="X (Twitter)"><FaTwitter /></a>
                        <a href="https://www.tiktok.com/@iconnect_sud" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                        <a href="https://www.facebook.com/iConnectSUD/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                    </div>
                    <div className="footer-right">
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
