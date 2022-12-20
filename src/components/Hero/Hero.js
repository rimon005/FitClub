import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero">
            {/* Left hero */}
            <div className='left-h'>
                <Header />
            </div>

            {/* Right Hero */}
            <div className='right-h'>
                Right side
            </div>
        </div>
    );
};

export default Hero;