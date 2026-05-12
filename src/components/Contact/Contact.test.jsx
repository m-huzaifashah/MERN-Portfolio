import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
    it('renders contact links', () => {
        render(<Contact />);
        expect(screen.getByText(/hello@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/github.com/i)).toBeInTheDocument();
        expect(screen.getByText(/linkedin.com/i)).toBeInTheDocument();
    });

    it('renders the contact form inputs and submit button', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });
});
