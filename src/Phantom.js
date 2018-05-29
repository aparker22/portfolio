import React from 'react';
import logo from './images/phantom_logo.png';
import phantom from './images/phantom.mp4';
import Codepen from 'react-codepen-embed';
import JavaScript from './images/skills/javascript.svg';
import PostgreSQL from './images/skills/postgresql.svg';
import node from './images/skills/nodejs-icon.svg';
import express from './images/skills/express.svg';
import react from './images/skills/react.svg';

const CodepenEmbedded = () => {
    return (
      <Codepen
        hash="oyNpgy"
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

let Phantom = (props) => 
    <div className="project-screen">
        <div className="span"><div></div><p onClick={() => navigatePortfolio(props)}>close</p></div>
        <img src={logo} alt="impactful-logo"></img>
        <div className="gitLink" onClick={() => openInNewTab("https://codingandcaring.github.io/phantomCloset/")}>Link to Site </div>
        <div className="gitLink" onClick={() => openInNewTab("https://github.com/codingandcaring/phantomCloset")}>GitHub</div>
        <ul className="project-skills">
            <li><img src={JavaScript}/></li>
            <li><img src={PostgreSQL}/></li>
            <li><img src={node}/></li>
            <li><img src={express}/></li>
            <li><img src={react}/></li>
        </ul>
        <p>Phantom Closet is an e-commerce site that allows players of Magic: The Gathering to search, view, and rent cards based on a credit system.  This project utilizes a third-party API to gather card data.  The front-end was built using React and the back-end was built using Node.js, Express, and PostgresQL.</p>
        <CodepenEmbedded/>
        <video controls>
            <source src={phantom} type="video/mp4"></source>
            I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
        </video>
    </div>

export default Phantom;
