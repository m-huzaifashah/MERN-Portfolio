import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Oil & Gas Solutions',
            description: 'Architected and deployed a professional corporate Next.js website for an energy sector company. Implemented a fully responsive dark-themed UI, configured seamless deployment to cPanel, and built a custom Node.js backend for secure, centralized contact form routing via Nodemailer.',
            tags: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
            demo: 'https://oilandgassolutions.com',
            image: '/OilAndGas.png'
        },
        {
            title: 'AI-Enhanced Alumni Portal',
            description: 'Alumni portals stop at job listings We Went Further. Built a full-stack platform with RBAC and two AI modules: a Skill Gap Analyzer and a Resume ATS Scorer that parses CVs, scores them against job requirements, and returns ranked improvement suggestions using SBERT embeddings and XGBoost classification via a FastAPI microservice.',
            tags: ['TypeScript', 'React', 'node js', 'Express', 'MongoDb', 'Python', 'FastApi', 'ML'],
            github: 'https://github.com/m-huzaifashah/FYP-Ai-Enhanced-AlumniPortal',
            image: '/alumni.png'
        },

        {
            title: 'AI Interview Preparation Platform',
            description: 'Candidates lack realistic interview practice with actionable feedback. I built an AI-powered mock interview platform featuring real-time sessions and dynamic OpenAI-generated questions. My key achievement was architecting a scalable MERN solution that orchestrates low-latency AI evaluations and automated performance reports.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI', 'JavaScript'],
            github: 'https://github.com/m-huzaifashah/GEN-AI-Interview_preparation',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
        },

        {
            title: 'Backend Ledger API',
            description: 'Financial APIs fail silently when the same transaction gets processed twice costing real money. Engineered a double entry ledger REST API in Node.js and MongoDB that solves this with idempotency keys, ensuring every transaction is processed exactly once regardless of retries or network failures. Built on clean architecture principles with JWT authentication, strict data validation',
            tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
            github: 'https://github.com/m-huzaifashah/backend-ledger',
            demo: '#',
            image: 'https://media.istockphoto.com/id/1365692242/photo/mid-adult-man-working-on-his-personal-finance-in-his-jewellery-work-shop.jpg?s=612x612&w=0&k=20&c=HX_vCsb9amr0lGlBVqE4kvo1YB1EiRTyYlFUKK-dQr8='
        },

        {
            title: 'Mini Spotify Backend',
            description: 'Music platforms need strict role separation  a listener shouldnt have the same API access as an artist. Built a streaming backend in Node.js and Express with RBAC that enforces two distinct roles: artists get upload and streaming endpoints, listeners get playback only, with every route protected by role-aware JWT middleware. Handles user management, audio file uploads, and streaming endpoints with clean separation between authentication, authorization, and business logic layers',
            tags: ['Node.js', 'Express', 'JavaScript'],
            github: 'https://github.com/m-huzaifashah/miniSpotify_backend',
            demo: '#',
            image: 'https://media.istockphoto.com/id/1048258424/photo/spotify-podcasts-music-and-other-apps-on-iphone-screen.jpg?s=612x612&w=0&k=20&c=Ehx40bT4Sp8Y17BdjWa4Kv5C7_R_HxdPFPZ8OZZGppU='
        },

    ];
    return (
        <section id="projects" className="section container">
            <h2 className="section-title">
                Featured <span className="heading-gradient">Projects</span>
            </h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="glass project-card">
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.github && project.github !== '#' && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-link-btn">
                                        <Github size={18} /> Code
                                    </a>
                                )}
                                {project.demo && project.demo !== '#' && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-link-btn">
                                        <ExternalLink size={18} /> Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
