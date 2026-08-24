import React, { useState, Suspense, useEffect } from 'react';
import { Menu, X, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import CanvasBackground from './components/CanvasBackground/CanvasBackground';
import './index.css';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <div className="app">
      <Suspense fallback={null}>
        <CanvasBackground />
      </Suspense>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <nav className="glass app-nav">
          <div className="app-logo">
            Huzaifa Shah<span className="heading-gradient">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Dropdown */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="app-footer">
          <div className="footer-content container">
            <div className="footer-socials">
              <a href="https://github.com/m-huzaifashah" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
            <p>© 2026 M. Huzaifa Shah. Built with React & Vite.</p>
          </div>
        </footer>

        <button 
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;
