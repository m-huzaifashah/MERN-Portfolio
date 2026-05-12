import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { vi } from 'vitest';

// Mock TextType animated component to render plain text for easy testing
vi.mock('../TextType/TextType', () => ({
    default: ({ text }) => <span>{text}</span>
}));

// Mock LightRays WebGL component
vi.mock('../LightRays', () => ({
    default: () => <div data-testid="mock-light-rays"></div>
}));

describe('Hero Component', () => {
    it('renders the hero screen reader title and description', () => {
        render(<Hero />);
        expect(screen.getByText(/Hi, I'm a MERN Stack Developer\./i)).toBeInTheDocument();
        expect(screen.getByText(/I build exceptional and accessible digital experiences/i)).toBeInTheDocument();
    });

    it('renders the primary and secondary call-to-action buttons', () => {
        render(<Hero />);
        expect(screen.getByRole('link', { name: /View My Work/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Download Resume/i })).toBeInTheDocument();
    });
});
