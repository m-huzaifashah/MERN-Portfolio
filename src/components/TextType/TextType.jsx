import React, { useEffect, useState } from 'react';
import './TextType.css';

export default function TextType({
    text = '',
    delay = 50,
    cursorChar = '|',
    className = '',
    as: Component = 'span'
}) {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout;
        if (displayedText.length < text.length) {
            timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, delay);
        } else {
            setIsComplete(true);
        }
        return () => clearTimeout(timeout);
    }, [displayedText, text, delay]);

    return (
        <Component className={`text-type-wrapper ${className}`}>
            {displayedText}
            <span className={`text-type-cursor ${isComplete ? 'blinking' : ''}`}>
                {cursorChar}
            </span>
        </Component>
    );
}
