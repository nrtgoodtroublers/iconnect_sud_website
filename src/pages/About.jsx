import React from 'react';
import { motion } from 'framer-motion';
import ourStoryImg from '../assets/our_story.jpg';
import multidisciplinaryImg from '../assets/multidisciplinary.jpg';
import value1Img from '../assets/value1.jpg';
import value2Img from '../assets/value2.jpg';
import value3Img from '../assets/value3.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our Story</h1>
                        <p className="subtitle">Innovating for a healthier community.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section about-content-section">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p>
                                <strong>iCONNECT</strong> was developed through funding provided by the National Science Foundation (NSF) Research Traineeship (NRT) Grant (DGE 1922598) and awarded to the <a href="https://casbbi.gmu.edu/" target="_blank" rel="noopener noreferrer" className="text-link">Center for Adaptive Systems of Brain-Body Interactions (CASBBI)</a> at George Mason University in Fairfax, Virginia, USA.
                            </p>
                            <p>
                                CASBBI brings together scientists, engineers, health care professionals, and community stakeholders to research and create translational innovations aimed at challenges related to disability. It is led by Drs. Siddhartha Sikdar, Jim Thompson, and Lynn Gerber.
                            </p>
                            <p>
                                CASBBI’s NSF Research Traineeship (NRT) Program is training the next generation of leaders to take on some of the most challenging problems faced by society today. CASBBI NRT trainees are tackling the opioid use epidemic, mental and behavioral health disorders and enabling individuals with disabilities to participate fully in needed and desired life roles and activities.
                            </p>
                        </motion.div>
                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={ourStoryImg}
                                alt="Our Story - Community Connection"
                                className="about-img"
                            />
                        </motion.div>
                    </div>

                    <div className="about-grid mt-5">
                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={multidisciplinaryImg}
                                alt="Collaboration Illustration"
                                className="about-img"
                            />
                        </motion.div>
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>A Multidisciplinary Approach</h3>
                            <p>
                                These complex problems cannot be addressed by one individual or even one discipline. The next generation of leaders charged with addressing these challenges must work together across traditional academic disciplinary boundaries to integrate engineering, data science and social science knowledge, while meaningfully engaging with stakeholder communities in a mutually beneficial manner.
                            </p>
                            <p>
                                The CASBBI NRT program is designed to cross-train graduate students from engineering, data science, and social science disciplines to:
                            </p>
                            <ul className="feature-list">
                                <li>Define a problem from multiple perspectives based on disciplinary knowledge, lived experiences, and community knowledge</li>
                                <li>Utilize design thinking principles to break down open-ended problems</li>
                                <li>Develop creative solutions by adapting and applying theories and methodologies from different disciplines</li>
                                <li>Communicate effectively with stakeholders and broad audiences</li>
                                <li>Work productively on diverse multidisciplinary teams</li>
                            </ul>
                            <div className="mt-4">
                                <a href="https://casbbi.gmu.edu/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Visit CASBBI Website
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Our Values</h2>
                    <div className="values-grid">
                        <motion.div
                            className="value-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <img src={value1Img} alt="Empathy" className="value-img" />
                            <h3>Empathy</h3>
                            <p>We approach every individual with understanding and without judgment.</p>
                        </motion.div>
                        <motion.div
                            className="value-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <img src={value2Img} alt="Innovation" className="value-img" />
                            <h3>Innovation</h3>
                            <p>Leveraging technology to create new pathways for support and recovery.</p>
                        </motion.div>
                        <motion.div
                            className="value-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <img src={value3Img} alt="Community" className="value-img" />
                            <h3>Community</h3>
                            <p>Building strong networks that foster belonging and mutual aid.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default About;
