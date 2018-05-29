import React from 'react';
import logo from './images/cramit_logo.png';
import movie from './images/movie.mp4';
import Codepen from 'react-codepen-embed';
import JavaScript from './images/skills/javascript.svg';
import HTML from './images/skills/html5.svg';
import Css from './images/skills/css3.svg';
import PostgreSQL from './images/skills/postgresql.svg';
import node from './images/skills/nodejs-icon.svg';
import express from './images/skills/express.svg';
import AWS from './images/skills/aws.png';

const CodepenEmbedded = () => {
    return (
        <Codepen
        hash="vjPGYv"
        user="codingandcaring"
        preview="false"
        />
    );
  }

let navigatePortfolio = (props) => props.history.push('/portfolio');

let openInNewTab= (url) => {
    let win =window.open(url, '_blank');
    win.focus();
};

let Cramit = (props) => 
    <div className="project-screen">
        <div className="span"><div></div><p onClick={() => navigatePortfolio(props)}>close</p></div>
        <img src={logo} alt="cramit-logo"></img>
        <div className="gitLink" onClick={() => openInNewTab("http://ec2-18-218-173-235.us-east-2.compute.amazonaws.com/")}>Link to Site </div>
        <div className="gitLink" onClick={() => openInNewTab("https://github.com/codingandcaring/cramIT")}>GitHub</div>
        <ul className="project-skills">
            <li><img src={JavaScript}/></li>
            <li><img src={PostgreSQL}/></li>
            <li><img src={node}/></li>
            <li><img src={express}/></li>
            <li><img src={HTML}/></li>
            <li><img src={Css}/></li>
            <li><img src={AWS} /></li>
        </ul>
        <p>cramIT is an interactive way for software developers to prepare for upcoming interviews.  It features
        flashcards with various relevant topics, an interactive chat feature for mock interviews, and a list of relevant 
        job searches.</p>
        <CodepenEmbedded/>
        <video controls>
            <source src={movie} type="video/mp4"></source>
            I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
        </video>
    </div>

export default Cramit;