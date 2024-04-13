import React from 'react';
import './Contact.css'

import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>
                    Send us a message
                    <img src={msg_icon} alt="" />
                </h3>
                <p>
                    Feel Free to Reach Out
                </p>
                <ul>
                    <li> <img src={mail_icon} alt="" /> Contact@pavan.com</li>
                    <li> <img src={phone_icon} alt="" />123456789</li>
                    <li><img src={location_icon} alt="" />Address</li>
                </ul>
            </div>
            <div className="contact-col">
                <form >
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="" placeholder='Enter your name' required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="" placeholder='Enter your mobile number'  required/>
                    <label htmlFor="message">Write your messages here</label>
                    <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
         
                <span></span>
            </div>
        </div>
    );
}

export default Contact;
