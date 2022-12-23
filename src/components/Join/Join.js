import React from 'react';
import { useRef } from 'react';
import emailjs  from '@emailjs/browser'
import './Join.css'
const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z2s6j3q', 'template_rf5yy2q', form.current, 'bs3Gc3_YopN5Dac7c')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='join'>
            {/* left join */}
        <div className='left-j'>
            <hr />
                <div>
                    <span className='stroke-text'>ready to</span>
                    <span> level up</span>
                </div>
                <div>
                   <span>your body </span>
                   <span className='stroke-text'>with us?</span>
                </div>
            </div>

            {/* right join */}
            <div className='right-j'>
                <form onSubmit={sendEmail} ref={form} className='email-container'>
                    <input type="email" name='user-email' placeholder='Enter Your Email Address' />
                    <button className='btn btn-j'>Join now</button>
                </form> 
            </div>
        </div>
    );
};

export default Join;