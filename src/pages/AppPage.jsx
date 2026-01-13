import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import appScreen1 from '../assets/app_screen_1.png';
import appScreen2 from '../assets/app_screen_2.png';
import appScreen3 from '../assets/app_screen_3.png';
import './AppPage.css';

const AppPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [appScreen1, appScreen2, appScreen3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="app-page">
            <div className="page-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>The iCONNECT SUD App</h1>
                        <p>Support, connection, and resources right in your pocket.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="app-showcase">
                        <motion.div
                            className="app-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Features Designed for You</h2>
                            <ul className="feature-list">
                                <li>
                                    <span className="icon">🤝</span>
                                    <div>
                                        <strong>Peer Support</strong>
                                        <p>Connect with others who understand your journey.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="icon">📍</span>
                                    <div>
                                        <strong>Resource Finder</strong>
                                        <p>Locate nearby meetings, clinics, and support groups.</p>
                                    </div>
                                </li>
                                {/* 3rd point removed as requested */}
                                <li>
                                    <span className="icon">🔒</span>
                                    <div>
                                        <strong>Private & Secure</strong>
                                        <p>Your data is protected and your anonymity respected.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="download-buttons">
                                <a href="https://apps.apple.com/us/app/iconnect-sud-resources/id6451077975" target="_blank" rel="noopener noreferrer" className="store-btn">
                                    <span className="store-icon"></span>
                                    <div>
                                        <small>Download on the</small>
                                        <span>App Store</span>
                                    </div>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=edu.gmu.casbbi.iconnect" target="_blank" rel="noopener noreferrer" className="store-btn">
                                    <span className="store-icon">▶</span>
                                    <div>
                                        <small>GET IT ON</small>
                                        <span>Google Play</span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="app-visuals"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="phone-frame">
                                <div className="phone-screen">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={images[currentImageIndex]}
                                            alt={`App Screen ${currentImageIndex + 1}`}
                                            className="app-slider-img"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </AnimatePresence>
                                </div>
                                <div className="phone-notch"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppPage;
