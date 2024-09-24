import React, { useEffect, useState } from 'react';
import './ProgressBar.css'; // Import CSS for styling

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>
    );
};

export default ProgressBar;