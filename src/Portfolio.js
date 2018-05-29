import React from 'react';
import JavaScript from './images/skills/javascript.svg';
import HTML from './images/skills/html5.svg';
import Css from './images/skills/css3.svg';
import jQuery from './images/skills/jquery-1.svg';
import PostgreSQL from './images/skills/postgresql.svg';
import graphql from './images/skills/graphql.svg';
import node from './images/skills/nodejs-icon.svg';
import express from './images/skills/express.svg';
import mongo from './images/skills/mongodb.svg';
import react from './images/skills/react.svg';
import rn from './images/skills/reacticon.png';
import python from './images/skills/python-5.svg';
import AWS from './images/skills/aws.png';
import github from './images/skills/GitHub.png';

let navigateCramit =(props) => props.history.push('/cramit');
let navigateImpactful = (props) => props.history.push('/impactful');
let navigatePhantom = (props) =>props.history.push('/phantom');
let navigatePlanted = (props) => props.history.push('/planted');

let Portfolio = (props) =>
<div className="portfolio">
    <div className="skills">
        <h3>My Toolbox</h3>
        <ul className="skills-list">
        <li><img src={JavaScript}/><p>JavaScript</p></li>
        <li><img src={HTML}/><p>HTML5</p></li>
        <li><img src={Css}/><p>CSS3</p></li>
        <li><img src={jQuery}/><p>JQuery</p></li>
        <li><img src={PostgreSQL}/><p>PostgreSQL</p></li>
        <li><img src={node}/><p>Node.js</p></li>
        <li><img src={express}/><p>Express</p></li>
        <li><img src={react}/><p>React</p></li>
        <li><img src={rn}/><p>React Native</p></li>
        <li><img src={python}/><p>Python2</p></li>
        <li><img src={AWS} /><p>AWS</p></li>
        <li><img src={github}/><p>Git</p></li>
        <li><img src={graphql}/><p>GraphQL</p></li>
        <li><img src={mongo}/><p>MongoDB</p></li>
        </ul>
    </div>
    <div className="projects-list">
        <div className="projects-title">
            <h3>Featured Projects</h3>
            <h5>Click the title to learn more.</h5>
        </div>
        <ul className="projects-list-ul">
            <li className="planted" onClick={() => navigatePlanted(props)}>
                <h5>Planted</h5>
                <p>Utilizing an arduino and Raspberry Pi, Planted collects data about a local plant environment and displays that data in a React Native Application.</p>
            </li>
            <li className="pc" onClick={() => navigatePhantom(props)}>
                <h5>Phantom Closet</h5>
                <p>Full-stack e-commerce site where users can view, search, and rent cards for the game Magic: The Gathering.</p>
                </li>
            <li className="cramit" onClick={() => navigateCramit(props)}>
                <h5>cramIT</h5>
                <p>Full-stack project that assists users in preparing for the software development job search and interviews.</p>
            </li>
            <li className="impactful" onClick={() => navigateImpactful(props)}>                
                <h5>Impactful</h5>
                <p>Front-end website that connects potential volunteers with reputable local charities to maximize impact.</p>
            </li>
        </ul>
    </div>
</div>


export default Portfolio;