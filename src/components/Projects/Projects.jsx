import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
   const projects = [
    {
        title: 'FYP-Ai-Enhanced-AlumniPortal',
        description: 'An AI‑enhanced alumni portal designed for the final year project, featuring modern UI and enhanced user workflows.',
        tags: ['TypeScript', 'React','node js','Express','MongoDb', 'Python','FastApi','ML'],
        github: 'https://github.com/m-huzaifashah/FYP-Ai-Enhanced-AlumniPortal',
        image:'https://media.istockphoto.com/id/2158976017/vector/ai-powered-e-government-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=RvoCiIKf6EnIGmgsoiuHEQ9vW5uQHINexhZpD7hBvac='},
   
{
    title: 'GEN-AI-Interview-Preparation',
    description: 'AI-powered mock interview platform with real-time interview sessions, AI-generated questions, candidate evaluation, and detailed feedback reports.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI', 'JavaScript'],
    github: 'https://github.com/m-huzaifashah/GEN-AI-Interview_preparation',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
},

        {
        title: 'backend-ledger',
        description: 'A scalable backend ledger API built with Node.js, Express.js, and MongoDB implementing secure JWT authentication.',
        tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        github: 'https://github.com/m-huzaifashah/backend-ledger',
        demo: '#',
        image: 'https://media.istockphoto.com/id/1365692242/photo/mid-adult-man-working-on-his-personal-finance-in-his-jewellery-work-shop.jpg?s=612x612&w=0&k=20&c=HX_vCsb9amr0lGlBVqE4kvo1YB1EiRTyYlFUKK-dQr8='
    },

    {
        title: 'miniSpotify_backend',
        description: 'Backend service for a mini Spotify clone, handling user data and music streaming endpoints.',
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
                                <a href={project.github} className="btn btn-secondary project-link-btn">
                                    <Github size={18} /> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
