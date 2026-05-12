import React from 'react';
import { Database, Server, Smartphone, Layout, Blocks, Code } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'MongoDB', icon: <Database size={32} />, color: '#10b981' },
        { name: 'Express.js', icon: <Server size={32} />, color: '#6b7280' },
        { name: 'React', icon: <Layout size={32} />, color: '#0ea5e9' },
        { name: 'Node.js', icon: <Blocks size={32} />, color: '#22c55e' },
        { name: 'JavaScript / TypeScript', icon: <Code size={32} />, color: '#eab308' },
        { name: 'Responsive Design', icon: <Smartphone size={32} />, color: '#8b5cf6' }
    ];

    return (
        <section id="skills" className="section container">
            <h2 className="section-title">
                Technical <span className="heading-gradient">Arsenal</span>
            </h2>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="glass skill-card"
                        onMouseOver={(e) => {
                            e.currentTarget.style.boxShadow = `0 10px 30px ${skill.color}33`; // 33 is 20% opacity
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div
                            className="skill-icon-wrapper"
                            style={{
                                color: skill.color,
                                backgroundColor: `${skill.color}1a` // 1a is 10% opacity
                            }}>
                            {skill.icon}
                        </div>
                        <h3 className="skill-name">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
