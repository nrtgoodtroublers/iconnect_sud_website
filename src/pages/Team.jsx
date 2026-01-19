import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './Team.css';

const founders = [
    {
        name: 'Rebecca Leung',
        role: 'Co-founder',
        image: "/assets/rebecca.jpg",
        link: 'https://www.linkedin.com/in/healthrebeccaleung/'
    },
    {
        name: 'Dylan Scarton',
        role: 'Co-founder',
        image: "/assets/dylan.jpg",
        link: 'https://www.linkedin.com/in/dylan-scarton/'
    }
];

const leadership = [
    {
        name: 'Siddhartha Sikdar, PhD',
        role: 'Principal Investigator',
        image: "/assets/siddhartha_sikdar.jpg",
        link: 'https://www.linkedin.com/in/siddhartha-sikdar-b2603a1/'
    },
    {
        name: 'Holly Matto, PhD, MSW',
        role: 'Co-Faculty Mentor',
        image: "/assets/holly_matto.jpg",
        link: 'https://publichealth.gmu.edu/profiles/hmatto'
    },
    {
        name: 'Padmanabhan Seshaiyer, PhD',
        role: 'Co-Faculty Mentor',
        image: "/assets/Padmanabhan.jpg",
        link: 'https://www.linkedin.com/in/padhuseshaiyer/'
    },
    {
        name: 'Jasmine A',
        role: 'Project Coordinator',
        image: "/assets/jasmine.jpeg",
        link: '#'
    }
];

const techTeam = [
    {
        name: 'Hector Chavarria',
        role: 'CTO',
        image: "/assets/hector.jpeg",
        link: 'https://www.linkedin.com/in/hectorchavarria/'
    },
    {
        name: 'Krithika Jain',
        role: 'Technical Lead',
        image: "/assets/krithika.png",
        link: 'https://www.linkedin.com/in/krithika-jain/'
    },
    {
        name: 'Gabriel Chavarria',
        role: 'Tech Associate',
        image: "/assets/gabriel.png",
        link: '#'
    }
];

const interns = [
    {
        name: 'Camila Nicole',
        role: 'Social Media Intern',
        image: "/assets/camila.jpeg",
        link: '#'
    },
    {
        name: 'Hajrah Noor ',
        role: 'Social Media Intern',
        image: "/assets/hajrah.jpeg",
        link: 'https://www.linkedin.com/in/hajrah-noor/'
    },
    {
        name: 'Lillian Cline',
        role: 'Social Media Intern',
        image: "/assets/lillian.jpg",
        link: 'https://www.linkedin.com/in/lillian-cline-636b91358/'
    },
    {
        name: 'Siri Kalidindi',
        role: 'Social Media Intern',
        image: "/assets/siri.jpeg",
        link: 'https://www.linkedin.com/in/siri-kalidindi-093798314/'
    }
];

const TeamRow = ({ members, delayOffset = 0 }) => (
    <div className="team-row">
        {members.map((member, index) => (
            <motion.div
                className="team-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.1) + delayOffset }}
            >
                {member.link && member.link !== '#' ? (
                    <a href={member.link} target="_blank" rel="noopener noreferrer" className="team-link">
                        <div className="team-img-wrapper">
                            <img src={member.image} alt={member.name} className="team-img" />
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </a>
                ) : (
                    <div className="team-link" style={{ cursor: 'default' }}>
                        <div className="team-img-wrapper">
                            <img src={member.image} alt={member.name} className="team-img" />
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                )}
            </motion.div>
        ))}
    </div>
);

const Team = () => {
    return (
        <div className="team-page">
            <Helmet>
                <title>Our Team | iConnect SUD</title>
                <meta name="description" content="Meet the dedicated iConnect SUD team. Researchers, clinicians, and community leaders working together to improve recovery outcomes." />
            </Helmet>
            <div className="page-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our Team</h1>
                        <p className="subtitle">Dedicated professionals working to make a difference.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="team-rows-container">
                        <TeamRow members={founders} delayOffset={0} />
                        <TeamRow members={leadership} delayOffset={0.2} />
                        <TeamRow members={techTeam} delayOffset={0.4} />
                        <TeamRow members={interns} delayOffset={0.6} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
