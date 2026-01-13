import React from 'react';
import { motion } from 'framer-motion';
import siddharthaImg from '../assets/siddhartha_sikdar.jpg';
import hollyImg from '../assets/holly_matto.jpg';
import rebeccaImg from '../assets/rebecca.jpg';
import dylanImg from '../assets/dylan.jpg';
import padmanabhanImg from '../assets/Padmanabhan.jpg';
import krithikaImg from '../assets/krithika.png';
import lillianImg from '../assets/lillian.jpg';
import siriImg from '../assets/siri.jpeg';
import hectorImg from '../assets/hector.jpeg';
import hajrahImg from '../assets/hajrah.jpeg';
import camilaImg from '../assets/camila.jpeg';
import gabrielImg from '../assets/gabriel.png';
import jasmineImg from '../assets/jasmine.jpeg';
import './Team.css';

const founders = [
    {
        name: 'Rebecca Leung',
        role: 'Co-founder',
        image: rebeccaImg,
        link: 'https://www.linkedin.com/in/healthrebeccaleung/'
    },
    {
        name: 'Dylan Scarton',
        role: 'Co-founder',
        image: dylanImg,
        link: 'https://www.linkedin.com/in/dylan-scarton/'
    }
];

const leadership = [
    {
        name: 'Siddhartha Sikdar, PhD',
        role: 'Principal Investigator',
        image: siddharthaImg,
        link: 'https://www.linkedin.com/in/siddhartha-sikdar-b2603a1/'
    },
    {
        name: 'Holly Matto, PhD, MSW',
        role: 'Co-Faculty Mentor',
        image: hollyImg,
        link: 'https://publichealth.gmu.edu/profiles/hmatto'
    },
    {
        name: 'Padmanabhan Seshaiyer, PhD',
        role: 'Co-Faculty Mentor',
        image: padmanabhanImg,
        link: 'https://www.linkedin.com/in/padhuseshaiyer/'
    },
    {
        name: 'Jasmine A',
        role: 'Project Coordinator',
        image: jasmineImg,
        link: '#'
    }
];

const techTeam = [
    {
        name: 'Hector Chavarria',
        role: 'CTO',
        image: hectorImg,
        link: 'https://www.linkedin.com/in/hectorchavarria/'
    },
    {
        name: 'Krithika Jain',
        role: 'Technical Lead',
        image: krithikaImg,
        link: 'https://www.linkedin.com/in/krithika-jain/'
    },
    {
        name: 'Gabriel Chavarria',
        role: 'Tech Associate',
        image: gabrielImg,
        link: '#'
    }
];

const interns = [
    {
        name: 'Camila Nicole',
        role: 'Social Media Intern',
        image: camilaImg,
        link: '#'
    },
    {
        name: 'Hajrah Noor ',
        role: 'Social Media Intern',
        image: hajrahImg,
        link: 'https://www.linkedin.com/in/hajrah-noor/'
    },
    {
        name: 'Lillian Cline',
        role: 'Social Media Intern',
        image: lillianImg,
        link: 'https://www.linkedin.com/in/lillian-cline-636b91358/'
    },
    {
        name: 'Siri Kalidindi',
        role: 'Social Media Intern',
        image: siriImg,
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
