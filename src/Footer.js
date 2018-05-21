import React from 'react';
import envelope from './images/envelope.png';
import linkedin from './images/linkedin_black.png';
import medium from './images/medium_black.png';
import github from './images/github_black.png';
import {withRouter} from 'react-router';

let openInNewTab= (url) => {
    let win =window.open(url, '_blank');
    win.focus();
}

let Footer = () => {
    // let home = 'http://localhost:3000/#/'
    // if (window.location.href === home) {
    //     return null
    // } else {
    return(
    <div className="footer">
                <a href="mailto:ashley@codingandcaring.com"><img className="social-media-icon" src={envelope} alt="Email"/></a>
                <div onClick={(e) => openInNewTab("https://www.linkedin.com/in/codingandcaring")}><img className="social-media-icon" src={linkedin} alt="LinkedIn" /></div>
                <div onClick={(e) => openInNewTab("https://github.com/codingandcaring")}><img className="social-media-icon" src={github} alt="GitHub" /></div>
                <div onClick={(e) => openInNewTab("https://medium.com/@ashes175")}> <img className="social-media-icon" src={medium} alt="Medium" /></div>  
    </div>)
}


export default Footer;