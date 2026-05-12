import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './Contact.css';

// ─── EmailJS credentials ───────────────────────────────────────────────────
// Replace these three values with your own from https://www.emailjs.com/
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';
// ──────────────────────────────────────────────────────────────────────────

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData]   = useState({ name: '', email: '', message: '' });
    const [status, setStatus]       = useState(null); // 'loading' | 'success' | 'error'
    const [errorMsg, setErrorMsg]   = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            // Auto-clear success banner after 5 s
            setTimeout(() => setStatus(null), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setErrorMsg(err?.text || 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section container contact-section">
            <h2 className="section-title">
                Get in <span className="heading-gradient">Touch</span>
            </h2>

            <div className="contact-grid">
                {/* Contact Info */}
                <div className="contact-info">
                    <div>
                        <h3 className="contact-info-title">
                            Let's talk about your project
                        </h3>
                        <p className="contact-info-description">
                            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="contact-links">
                        <a href="mailto:mhuzaifahabibshah@gmail.com" className="contact-link">
                            <Mail className="heading-gradient" /> mhuzaifahabibshah@gmail.com
                        </a>

                        <a href="https://github.com/m-huzaifashah" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <Github /> github.com/m-huzaifashah
                        </a>

                        <a href="https://linkedin.com/in/m-huzaifa-habib-shah" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <Linkedin /> linkedin.com/in/m-huzaifa-habib-shah
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="glass contact-form">

                    {/* Status banners */}
                    {status === 'success' && (
                        <div className="form-banner form-banner--success">
                            <CheckCircle size={18} />
                            Message sent! I'll get back to you soon.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="form-banner form-banner--error">
                            <AlertCircle size={18} />
                            {errorMsg}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="form-input"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="reply_to"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="form-input"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="5"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="form-input"
                            placeholder="Tell me about your project or idea…"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? (
                            <><Loader size={18} className="spin" /> Sending…</>
                        ) : (
                            <>Send Message <Send size={18} /></>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
