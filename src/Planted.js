import React from 'react';
import logo from './images/logo_planted.png';
import movie from './images/planted.mp4';
import Codepen from 'react-codepen-embed';
import JavaScript from './images/skills/javascript.svg';
import PostgreSQL from './images/skills/postgresql.svg';
import graphql from './images/skills/graphql.svg';
import node from './images/skills/nodejs-icon.svg';
import express from './images/skills/express.svg';
import react from './images/skills/react.svg';
import rn from './images/skills/reacticon.png';

const CodepenEmbedded = () => {
    return (
      <Codepen
        hash="QmYogG"
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

let Planted = (props) => 
    <div className="project-screen">
        <div className="span"><div></div><p onClick={() => navigatePortfolio(props)}>close</p></div>
        <img src={logo} alt="planted-logo"></img>
        <div className="gitLink" onClick={() => openInNewTab("https://github.com/PlantedDC/planted-front")}>GitHub</div>
        <ul className="project-skills">
            <li><img src={JavaScript}/></li>
            <li><img src={PostgreSQL}/></li>
            <li><img src={node}/></li>
            <li><img src={express}/></li>
            <li><img src={react}/></li>
            <li><img src={rn}/></li>
            <li><img src={graphql}/></li>
        </ul>
        <p>Planted allows users to monitor local environmental conditions in real-time.  Using an arduino and Raspberry Pi, sensors gather data for sunlight, temperature, 
            humidity, and soil moisture.  Data is then sent to the server.  A client-side application was built using React Native to display data.</p>
        <CodepenEmbedded/>
        <video controls>
            <source src={movie} type="video/mp4"></source>
            I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
        </video>
    </div>

export default Planted;