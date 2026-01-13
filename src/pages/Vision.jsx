import React from 'react';
import { motion } from 'framer-motion';
import communityImg from '../assets/vision_community_circle.png';
import networkImg from '../assets/vision_ecosystem_network.png';
import hollyMattoImg from '../assets/holly_matto.jpg';
import './Vision.css';

const Vision = () => {
    return (
        <div className="vision-page">
            <div className="page-header">
                <div className="container">
                    <motion.div
                        className="vision-hero-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our Vision</h1>
                        <p className="subtitle">A future where recovery is accessible, celebrated, and sustainable.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section vision-section-split">
                <div className="container">
                    <div className="vision-grid">
                        <motion.div
                            className="vision-text-block"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Making the Human Connection</h2>
                            <p>
                                The value of iCONNECT is providing available community resources in near real-time to individuals with SUD and their social network. These critical moments equate to meaningful connections that can reduce clinic readmissions, decrease overdose instances, and serve as a tool to coordinate healthcare among county, clinical, and emergency workers alike.
                            </p>
                            <p>
                                When individuals are under the influence or their families are under stress, they are just one click away from a meaningful resource and human connection.
                            </p>
                        </motion.div>
                        <motion.div
                            className="vision-image-block"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={communityImg} alt="Community Support" className="vision-img" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="impact-grid">
                        <motion.div
                            className="impact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="impact-header">
                                <span className="impact-icon-inline">🔗</span>
                                <h3>Connecting Help</h3>
                            </div>
                            <p>Connecting help to individuals on their recovery journey.</p>
                        </motion.div>
                        <motion.div
                            className="impact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="impact-header">
                                <span className="impact-icon-inline">🌐</span>
                                <h3>Coordinating Ecosystems</h3>
                            </div>
                            <p>Coordinating the ecosystem of community resources.</p>
                        </motion.div>
                        <motion.div
                            className="impact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="impact-header">
                                <span className="impact-icon-inline">📍</span>
                                <h3>Highlighting Resources</h3>
                            </div>
                            <p>Highlighting the closest available resources.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Holly Matto Quote Section (Matching Home Style) */}
            <section className="section director-message-section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="director-grid">
                        <motion.div
                            className="director-text"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="quote-text">
                                "[iCONNECT] will have immediate local impact on the ways in which peer support specialists, individuals in recovery from substance use, and their families are able to connect with the specific resources needed to sustain recovery"
                            </p>
                        </motion.div>
                        <motion.div
                            className="director-image-wrapper"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={hollyMattoImg}
                                alt="Holly Matto, PhD, MSW"
                                className="director-img"
                            />
                            <div className="quote-author">
                                <h4>Holly Matto, PhD, MSW</h4>
                                <p>Associate Professor, Social Work</p>
                                <p>Core Faculty, Center for Adaptive Systems of Brain-Body Interactions</p>
                                <p>George Mason University</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section vision-section-split">
                <div className="container">
                    <div className="vision-grid reverse-mobile">
                        <motion.div
                            className="vision-image-block"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={networkImg} alt="Network Ecosystem" className="vision-img" />
                        </motion.div>
                        <motion.div
                            className="vision-text-block"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Saving Resources, Time, and Lives</h2>
                            <p>
                                Our ultimate goal is to demonstrate that iCONNECT can be successfully deployed in Fairfax Country, the state of Virginia, and then the nation.
                            </p>
                            <p>
                                Our community partners at the <a href="https://www.fairfaxcounty.gov/community-services-board/" target="_blank" rel="noopener noreferrer" className="text-link">Fairfax Falls Church Community Service Board</a> and <a href="https://www.thecaf.org/" target="_blank" rel="noopener noreferrer" className="text-link">Chris Atwood Foundation</a> are our mentors and advisors. Together, with the guidance of our Principal Investigator and collaborating faculty members, we are confident that iCONNECT has real social good.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Video Section */}
            <section className="section">
                <div className="container">
                    <div className="video-intro">
                        <p>
                            In collaboration with our partners at the <a href="https://www.reanfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-link">REAN Foundation</a>, we put together a short video to summarize Our Vision, including some background on Our Team and an example use case for Our App:
                        </p>
                    </div>
                    <div className="video-responsive">
                        <iframe
                            width="480"
                            height="270"
                            src={`https://www.youtube.com/embed/dMdyhHDnz-s`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="iCONNECT Vision Video"
                        />
                    </div>
                </div>
            </section>

        </div >
    );
};

export default Vision;
