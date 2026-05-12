import React from 'react';
import { ArrowRight, Code2, Download } from 'lucide-react';
import TextType from '../TextType/TextType';
import LightRays from '../LightRays';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="section container hero-section">
            <div className="hero-content">
                

                {/* Screen Reader Only Heading */}
                <h1 className="sr-only">Hi, I'm a MERN Stack Developer.</h1>

                {/* Animated Heading (Hidden from Screen Readers to prevent noisy readouts) */}
                <h1 className="hero-title animate-fade-in-delay-1" aria-hidden="true">
                    Hi, I'm a{' '}
                    <span className="heading-gradient">
                        <TextType text="MERN Stack" delay={100} cursorChar="" />
                    </span>{' '}
                    <TextType text="Developer." delay={100} cursorChar="|" />
                </h1>

                <p className="hero-description animate-fade-in-delay-2">
                    I build exceptional and accessible digital experiences. Passionate about creating elegant solutions to complex problems using MongoDB, Express.js, React, and Node.js.
                </p>

                <div className="hero-buttons animate-fade-in-delay-3">
                    <a href="#projects" className="btn btn-primary">
                        View My Work <ArrowRight size={18} />
                    </a>
                    <a href="/src/assets/huzaifa_shah_resume.pdf" download="M Huzaifa Shah Resume MERN stack Dev.pdf" className="btn btn-secondary">
                        <Download size={18} /> Download Resume
                    </a>
                </div>
            </div>

            <div className="hero-bg-glow-1"></div>
            <div className="hero-bg-glow-2"></div>

            <div className="hero-rays-overlay">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#8b5cf6"
                    raysSpeed={1.5}
                    lightSpread={1.2}
                    rayLength={2.5}
                    pulsating={true}
                    fadeDistance={1.0}
                    saturation={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    className="hero-light-rays"
                />
            </div>
        </section>
    );
};

export default Hero;
