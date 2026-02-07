import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Keys from environment variables
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setIsSubmitting(false);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | iCONNECT SUD</title>
                <meta name="description" content="Get in touch with the iConnect team. We are here to help answering your questions or feedback." />
            </Helmet>
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Contact Information</h2>
                            <p>We're here to help. Reach out with any questions or feedback.</p>

                            <div className="info-item">
                                <span className="icon">📧</span>
                                <div>
                                    <strong>Email</strong>
                                    <p>goodtroublers@iconnectcounseling.org</p>
                                </div>
                            </div>

                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.665787878787!2d-77.3078!3d38.8315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e60c9170001%3A0x2600000000000000!2sCenter%20for%20Adaptive%20Systems%20of%20Brain-Body%20Interactions!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="CASBBI Location"
                                ></iframe>
                                <div className="map-overlay">
                                    <h4>George Mason University</h4>
                                    <p>Center for Adaptive Systems of Brain-Body Interactions (CASBBI)</p>
                                    <a
                                        href="https://www.google.com/maps/dir/?api=1&destination=4400%20University%20Dr,%20Fairfax,%20VA%2022030,%20USA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Directions
                                    </a>
                                    <div className="map-pin-shadow"></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="user_name">Name *</label>
                                    <input type="text" id="user_name" name="user_name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_email">Email *</label>
                                    <input type="email" id="user_email" name="user_email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" placeholder="How can we help?" required></textarea>
                                </div>
                                {status.message && (
                                    <p className={`status-message ${status.type}`}>{status.message}</p>
                                )}
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
