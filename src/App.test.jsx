import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { vi } from 'vitest';

// Mock WebGL component which lacks browser APIs in jsdom
vi.mock('./components/LightRays', () => ({
    default: () => <div data-testid="mock-light-rays"></div>
}));

describe('App Component', () => {
    it('renders the portfolio logo in the navigation', () => {
        render(<App />);
        // The logo text is "Portfolio" with a "." that has a specific class
        const logoElement = screen.getByText(/Portfolio/i);
        expect(logoElement).toBeInTheDocument();
    });

    it('renders the main sections', () => {
        const { container } = render(<App />);
        expect(container.querySelector('#hero')).toBeInTheDocument();
        expect(container.querySelector('#skills')).toBeInTheDocument();
        expect(container.querySelector('#projects')).toBeInTheDocument();
        expect(container.querySelector('#contact')).toBeInTheDocument();
    });
});
