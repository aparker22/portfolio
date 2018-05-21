import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png';

let Header = () => 
    <div className="header">
        <div className="header-logo">
           <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <div className="header-links">
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>


export default Header;