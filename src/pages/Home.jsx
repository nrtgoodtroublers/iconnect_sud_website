
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import directorImg from '../assets/siddhartha_sikdar.jpg';
import danielImg from '../assets/Daniel.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-animated-title">Bridging Human Connections</h1>

                        <div className="hero-buttons">
                            <Link to="/app" className="btn btn-primary">Download App</Link>
                            <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro / About Teaser */}
            <section className="section intro-section">
                <div className="container">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Who We Are</h2>
                        <p className="lead-text">
                            We are a non-profit organization committed to making substance use recovery accessible,
                            supportive, and community-driven.
                        </p>
                        <div className="cards-grid">
                            <div className="card">
                                <h3>Connect</h3>
                                <p>Building bridges between individuals and support systems.</p>
                            </div>
                            <div className="card">
                                <h3>Discover</h3>
                                <p>Helping you find the right path to recovery and wellness.</p>
                            </div>
                            <div className="card">
                                <h3>Support</h3>
                                <p>Providing tools and community for sustainable growth.</p>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Director's Message Section */}
            <section className="section director-message-section">
                <div className="container">
                    <div className="director-grid">
                        <motion.div
                            className="director-text"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="quote-text">
                                "Too often, academic research, especially in the STEM fields, can seem far removed from the daily realities of society. When we started the NSF-funded National Research Traineeship (NRT) program at the Center for Adaptive Systems of Brain Body Interactions(CASBBI) at Mason, our vision was to provide our outstanding graduate students with an immersive experience in community-engaged user-centered problem solving to prepare them to address the pressing issues in society today.
                                <br />
                                <br />
                                Our NRT trainees [at iCONNECT] worked closely with our wonderful community partners at the Chris Atwood Foundation and CASBBI faculty Holly Matto to <strong>#makeadifference</strong>."
                            </p>
                        </motion.div>
                        <motion.div
                            className="director-image-wrapper"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={directorImg}
                                alt="Siddhartha Sikdar, PhD"
                                className="director-img"
                            />
                            <div className="quote-author">
                                <h4>Siddhartha Sikdar, PhD</h4>
                                <p>Professor, Bioengineering</p>
                                <p>Director, Center for Adaptive Systems of Brain-Body Interactions</p>
                                <p>George Mason University</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* News & Milestones Section */}
            <section className="section news-section">
                <div className="container">
                    <h2 className="section-title">Latest News & Milestones</h2>
                    <div className="news-grid-animated">
                        {/* 1. Google Cloud Credits */}
                        <motion.div
                            className="news-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="news-image" style={{ backgroundImage: 'url(https://images.seeklogo.com/logo-png/33/1/google-cloud-logo-png_seeklogo-336116.png', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                            <div className="news-content">
                                <h3>Google Cloud Credits</h3>
                                <p>
                                    We are incredibly grateful to receive Google Cloud credits in both September 2024 ($1,000) and December 2025. These vital funds directly support the hosting and database infrastructure of the iCONNECT SUD mobile app on the Google Cloud Platform, ensuring our community resources remain accessible and secure.
                                </p>
                                <div className="news-actions">
                                    <a href="https://edu.google.com/intl/ALL_us/programs/credits/research/?modal_active=none" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Recovery Corps Partnership */}
                        <motion.div
                            className="news-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="news-image" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1530248119/photo/rear-view-of-female-nurses-walking-with-coworkers-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=MBjYj5hvB1FwcBZvymZP-WfBF6u6B_KUVDdUr1Dhm5Q=)' }}></div>
                            <div className="news-content">
                                <h3>Recovery Corps Partnership</h3>
                                <p>
                                    iCONNECT is ecstatic to announce that we have been selected as a Site Partner with the Recovery Corps division of AmeriCorps Ampact for the 2025-2026 year!
                                    In conjunction with the <a href="https://cassbi.gmu.edu/" target="_blank" rel="noopener noreferrer" className="text-link">Center for Advancing Systems Science and Bioengineering Innovation (CASBBI)</a> at George Mason University.
                                </p>
                                <div className="news-actions">
                                    <a href="https://www.recoverycorps.us/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                                        Visit Recovery Corps
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Grant Received */}
                        <motion.div
                            className="news-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="news-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className="news-content">
                                <h3>Grant Received!</h3>
                                <p>
                                    Our team, iCONNECT, was thrilled to be awarded a $5K VentureWell E-Team Grant after being accepted into their Pioneer early-stage innovator training program! Over the course of a 2-day entrepreneurship workshop in July 2023.
                                </p>
                                <div className="news-actions">
                                    <a href="https://venturewell.org/summer-2023-e-team/?utm_source=social&utm_medium=Facebook&utm_campaign=P_2023+Summer+E-Teams+Outreach+-+Registration" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                                        Read about VentureWell
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* 4. MIT Solve Submission */}
                        <motion.div
                            className="news-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <div className="news-image" style={{ backgroundImage: 'url(https://d3t35pgnsskh52.cloudfront.net/uploads/conversions/55968_SAM%20COVER%20PHOTO-responsive.jpg)' }}></div>
                            <div className="news-content">
                                <h3>MIT Solve Submission</h3>
                                <p>
                                    Check out our submission to the MIT Solve Global Challenges. We are proud to share our innovative approach to tackling substance use disorders.
                                </p>
                                <div className="news-actions">
                                    <a href="https://solve.mit.edu/solutions/72996" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                                        View Submission
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Press Section */}
                    <div className="press-section mt-5">
                        <h3 className="text-center mb-4">In The Press</h3>
                        <div className="press-grid">
                            <a
                                href="https://www.gmu.edu/news/2023-03/mason-researchers-connect-community-members-develop-app-individuals-recovering-opioid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="press-item"
                            >
                                <blockquote>
                                    "Mason researchers connect with community members to develop an app for individuals recovering from opioid use disorder"
                                </blockquote>
                                <cite>- Shayla Brown, GMU News (March 30, 2023)</cite>
                            </a>
                            <a
                                href="https://www.gmu.edu/news/2023-09/student-team-improves-substance-use-disorder-app-thanks-venture-capital-funding"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="press-item"
                            >
                                <blockquote>
                                    "Student team improves substance use disorder app thanks to venture capital funding"
                                </blockquote>
                                <cite>- Shayla Brown, GMU News (September 30, 2023)</cite>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Community Partner Quote */}
            <section className="section director-message-section" style={{ borderTop: '1px solid #eee' }}>
                <div className="container">
                    <div className="director-grid">
                        <motion.div
                            className="director-text"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="quote-text">
                                "People caught up in substance use and trying to recover have limited information about the resources available to them. As a peer recovery specialist, you always have resources at your fingertips.
                                <br />
                                <br />
                                It's been a blessing to partner with George Mason University. This app is a tremendous idea and something that I can pass on to the individuals I help and teach them how to be self-reliant in a positive way."
                            </p>
                        </motion.div>
                        <motion.div
                            className="director-image-wrapper"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={danielImg}
                                alt="Daniel Adams"
                                className="director-img"
                            />
                            <div className="quote-author">
                                <h4>Daniel Adams, RPRS, CPRS-T</h4>
                                <p>Community Outreach Coordinator</p>
                                <p>The Chris Atwood Foundation</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="section cta-section">
                <div className="container text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Ready to start your journey?
                    </motion.h2>
                    <p>Download our app today and join a community of support.</p>
                    <Link to="/app" className="btn btn-primary">Get the App</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
