import React from 'react';
import { User, Briefcase, GraduationCap, Code } from 'lucide-react';
import './About.css';

const About = () => {
    const timeline = [
        {
            year: 'Jun 2026 - Present',
            title: 'Software Engineer Intern',
            institution: 'Pakistan International Airlines (PIA)',
            description: 'Building and maintaining scalable backend services using Node.js and Express. Designing MongoDB schemas and implementing core CRUD operations.',
            icon: <Briefcase size={20} />
        },
        {
            year: 'Feb 2025 - May 2025',
            title: 'MERN Stack Developer Intern',
            institution: 'CodeAlpha',
            description: 'Developed full-stack features using React and Node.js. Built RESTful APIs with JWT authentication and modeled MongoDB schemas.',
            icon: <Code size={20} />
        },
        {
            year: '2022 - 2026',
            title: 'BS Computer Science',
            institution: 'Riphah International University',
            description: 'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, Web Development.',
            icon: <GraduationCap size={20} />
        }
    ];

    return (
        <section id="about" className="section container">
            <h2 className="section-title animate-fade-in">
                About <span className="heading-gradient">Me</span>
            </h2>

            <div className="about-content">
                <div className="glass about-bio animate-fade-in-delay-1">
                    <div className="about-bio-header">
                        <div className="avatar-placeholder">
                            <User size={48} className="text-secondary" />
                        </div>
                        <h3>Hi, I'm M. Huzaifa Shah</h3>
                    </div>
                    <p>
                        I'm a passionate MERN Stack Developer with a strong focus on building scalable, performant, and user-centric web applications. 
                        I thrive at the intersection of design and engineering, ensuring that the applications I build not only function flawlessly under the hood 
                        but also provide an intuitive, "Pro Max" user experience.
                    </p>
                    <p>
                        With expertise in React, Node.js, and modern CSS frameworks, I specialize in architecting full-stack solutions—from 
                        AI-enhanced platforms to highly available backend services. When I'm not coding, you can find me exploring new web technologies 
                        and contributing to the open-source community.
                    </p>
                </div>

                <div className="glass about-timeline animate-fade-in-delay-2">
                    <h3 className="timeline-title">Experience & Education</h3>
                    <div className="timeline-container">
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-icon">
                                    {item.icon}
                                </div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{item.year}</span>
                                    <h4 className="timeline-role">{item.title}</h4>
                                    <h5 className="timeline-institution">{item.institution}</h5>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
