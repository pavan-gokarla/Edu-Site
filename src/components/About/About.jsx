import React from 'react';
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
            <img src={about_img} className='about-img' alt="" />
            <img src={ play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>
                    ABOUT UNIVERSITY
                </h3>
                <h2>Nurturing Tommorrow's Leaders Today</h2>
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, aand experiences needed to excel in teh dynamic field of education</p>
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, aand experiences needed to excel in teh dynamic field of education</p>
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, aand experiences needed to excel in teh dynamic field of education</p>
            </div>
        </div>
    );
}

export default About;
