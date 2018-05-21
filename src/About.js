import React from 'react';
import ashleyPic from './images/profile.JPG';

let About = () => 
    <div className="about">
        <div className="about-title">
            <h2> My Story </h2>
            <img src={ashleyPic} alt="profile" />
        </div>
        <div className="about-content">
        <p>I am a full-stack software developer currently located in Atlanta, GA.  </p>
        <p>I spent the first chapter of my professional career in Social Work. I began teaching myself to code after identifying areas that I felt could be improved through utilizing technology. I quickly discovered that I have a passion for coding and decided to pursue coding full-time through DigitalCraft's Immersive 16-week bootcamp.</p> 
        <p>I am excited about my future in development. The more I learn, the more I love it.  I enjoy the constant 
        challenges, the daily learning, and the feeling of accomplishment when things work! Although 
        no longer in the social work field, I remain passionate about working with both individuals and teams 
        to pursue and meet goals.</p>
        </div>
    </div>


export default About;