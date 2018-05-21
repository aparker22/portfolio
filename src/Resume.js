import React from 'react';
import resume from './files/ap_resume.pdf';
import hand from './images/hand-cutout.png';

let Resume = () => 
    <div className="resume">
    <div className="resume-top">
        <h3> Download my resume</h3>
    </div>
    <div className="resume-button">
        <a href={resume} download="ap_resume"><button >HERE</button></a>   
    </div>
    <div className="resume-hand">
        <img src={hand}></img>
    </div>
    {/* <div className="resume-bottom"></div> */}
    </div>


export default Resume;