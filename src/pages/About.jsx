import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="about-page">
            <Helmet>
                <title>About Us | iCONNECT SUD</title>
                <meta name="description" content="Learn about the iCONNECT SUD mission, our story, and our multidisciplinary approach to substance use recovery." />
            </Helmet>
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
                                src="/assets/our_story.jpg"
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
                                src="/assets/multidisciplinary.jpg"
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

            {/* Co-Founder Section - Expandable Card Layout */}
            <section className="section co-founder-section">
                <div className="container" style={{ maxWidth: '100%' }}> {/* Allow full width of main container */}
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>Meet Our Co-Founder</h2>

                    <motion.div
                        layout
                        className="co-founder-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ layout: { duration: 0.4, type: "spring", stiffness: 100 } }}
                        style={{
                            maxWidth: isExpanded ? '1400px' : '650px', // Increased widths
                            gap: isExpanded ? '4rem' : '0', // More gap for wider layout
                        }}
                    >
                        {/* Left Side: Profile & CTA (Always Visible) */}
                        <motion.div
                            layout
                            className="co-founder-sidebar"
                            style={{
                                flex: isExpanded ? '0 0 350px' : '1',
                            }}
                        >
                            <img
                                src="/assets/rebecca.jpg"
                                alt="Rebecca Leung"
                                className="co-founder-img"
                            />
                            <div className="co-founder-info">
                                <h4 className="co-founder-name">Rebecca Leung</h4>
                                <p className="co-founder-creds">MSW, LCSW, MBA</p>
                            </div>
                            <p className="quote-text-centered">
                                "Recovery is about connections. At iCONNECT SUD, we build digital tools to bridge connections, so individuals do not have to walk that journey alone."
                            </p>

                            {/* Toggle Button - Only show if not expanded */}
                            {!isExpanded && (
                                <motion.button
                                    layout
                                    onClick={() => setIsExpanded(true)}
                                    className="btn btn-outline-primary btn-toggle-story"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Read Rebecca's Story →
                                </motion.button>
                            )}

                            {/* CTA - Always Visible */}
                            <div className="co-founder-cta-container">
                                <p className="cta-prompt">
                                    All inquiries are confidential.
                                </p>
                                <div className="co-founder-cta">
                                    <a href="https://virginiatelementalhealth.org/team/rebecca-leung/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-pill">
                                        Reach Out for Counseling
                                    </a>
                                    <a href="mailto:Rebecca@iConnectCounseling.org" className="btn btn-secondary btn-pill">
                                        Email Rebecca
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Expandable Bio */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    className="co-founder-bio"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="bio-title">The Journey Behind iCONNECT SUD</h3>
                                    <p className="bio-text">
                                        Rebecca's vision for iCONNECT SUD lives at the intersection of health IT and compassionate social work. It stems from personal experience. She spent the first part of her career innovating healthcare technology, while working on a project with biometrics and wearable devices, a colleague’s son died from overdose, alone. Had he been better connected to available support when he needed it, it could perhaps have been prevented.
                                    </p>
                                    <p className="bio-text">
                                        <span className="bio-inline-highlight">"In a digital age, no one needs to be on their recovery journey alone."</span> Rebecca decided to use her technology experience to help families and individuals suffering from substance use issues. However, technology alone cannot solve the problem. So, Rebecca went back to school and earned her master’s in social work.
                                    </p>
                                    <p className="bio-text">
                                        Now in the second part of her career, Rebecca combines technology with counseling. As a graduate student-researcher, she co-hosted focus groups with Dylan to explore the needs of those in recovery and co-founded iCONNECT SUD, to connect individuals with resources that support their recovery journey.
                                    </p>
                                    <p className="bio-text">
                                        She regularly sees clients, supporting those with depression, anxiety, life transitions, substance use challenges, and those seeking to enhance life skills and relationships. She employs a holistic and collaborative therapeutic approach, integrating mind and body while drawing upon evidence-based methods such as Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), trauma-informed care, and family systems therapy to engage, empower, and support her clients.
                                    </p>
                                    <p className="bio-text">
                                        Rebecca has an MSW from George Mason University, an MBA from Harvard and a BS from UC Berkeley.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
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
                            <img src="/assets/value1.jpg" alt="Empathy" className="value-img" />
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
                            <img src="/assets/value2.jpg" alt="Innovation" className="value-img" />
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
                            <img src="/assets/value3.jpg" alt="Community" className="value-img" />
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
