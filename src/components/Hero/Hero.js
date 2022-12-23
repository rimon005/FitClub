import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import heroImage from '../../assets/hero_image.png';
import heroImageBack from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className='blur hero-blur'></div>
            {/* Left hero */}
            <div className='left-h'>
                <Header />
                {/* the best ad */}
                <div className='the-best-ad'>
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* hero heading */}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* Figures */}

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Hero buttons */}

                <div className='hero-button'>
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>


            </div>

            {/* Right Hero */}
            <div className='right-h'>
                <button className='btn'>Join Now</button>
                <div className='heart-rate'>
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* Hero images */}

                <img src={heroImage} alt="" className='hero-image' />
                <img src={heroImageBack} alt="" className='hero-image-back' />


                {/* Calories */}

                <div className='Calories'>
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;