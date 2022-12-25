import React from 'react';
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
import { useState } from 'react';
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />
            {
                menuOpen === false && mobile === true ? (
                    <div className='bars' onClick={() => setMenuOpen(true)}>
                        <img src={Bars} alt="" />
                    </div>
                ) : (
                    <ul className='header-menu' >
                        <li><Link
                        onClick={() => setMenuOpen(false)}
                        to='home'
                        span={true}
                        smooth={true}
                        >Home</Link></li>
                        <li ><Link
                        onClick={() => setMenuOpen(false)}
                        to='programs'
                        span={true}
                        smooth={true}
                        >Programs</Link></li>
                        <li><Link
                            onClick={() => setMenuOpen(false)}
                            to='reasons'
                            span={true}
                            smooth={true}
                        >Wye us</Link></li>
                        <li><Link
                            onClick={() => setMenuOpen(false)}
                            to='plans'
                            span={true}
                            smooth={true}
                        >Plans</Link></li>
                        <li ><Link
                            onClick={() => setMenuOpen(false)}
                            to='testimonials'
                            span={true}
                            smooth={true}
                        >Testimonials</Link></li>
                    </ul>
                )
            }



        </div>
    );
};

export default Header;