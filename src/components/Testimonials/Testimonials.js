import React from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react';
import {motion} from 'framer-motion'
const Testimonials = () => {
    const [selected , setSelected] = useState(0)
    const tLength = testimonialsData.length;
    const transition = { duration: 3, type: 'spring' }
    return (
        <div className='testimonials'>
            {/* left testimonials */}
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>what they</span>
                <span>say about us</span>
                <motion.span
                initial={{opacity : 0 , x : -100}}
                animate={{opacity : 1 , x : 0}}
                exit={{opacity : 0 , x : 100}}
                transition={transition}
                >
                    {
                        testimonialsData[selected].review
                    }
                </motion.span>
                <span>
                    <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span>
                    <span> - {testimonialsData[0].status}</span>
                </span>
            </div>

            {/* right testimonials */}

            <div className='right-t'>
                <motion.div
                initial={{opacity :0 , x: -100}}
                transition={{type : 'spring' , duration: 2}}
                whileInView={{opacity : 1 , x:0}}
                ></motion.div>
                <motion.div
                initial={{opacity: 0 , x:100}}
                transition={{type : 'spring' , duration: 2}}
                whileInView={{opacity : 1 , x:0}}
                ></motion.div>
                <motion.img
                initial={{opacity: 0 , x: 100}}
                animate={{opacity :1 , x : 0}}
                exit={{opacity: 0 , x : -100}}
                transition={transition}
                src={testimonialsData[selected].image} alt="" />
                <div className='arrows'>
                    <img
                    onClick={() => {
                        selected === 0 ? 
                        setSelected(tLength -1)
                        : setSelected((prev) => prev-1)
                    }}
                    src={leftArrow} alt="" />
                    <img
                    onClick={() => {
                        selected === tLength -1 ?
                        setSelected(0)
                        : setSelected((prev) => prev+1)
                    }}
                    src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;