import React from 'react';
import logo from './images/impactful_logo.png';
import impactful_movie from './images/impactful.mp4';
import Codepen from 'react-codepen-embed';

import JavaScript from './images/skills/javascript.svg';
import HTML from './images/skills/html5.svg';
import Css from './images/skills/css3.svg';
import jQuery from './images/skills/jquery-1.svg';
import github from './images/skills/GitHub.png';

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
}

let Impactful = (props) => 
    <div className="project-screen">
        <div className="span"><div></div><p onClick={() => navigatePortfolio(props)}>close</p></div>
        <img src={logo} alt="impactful-logo"></img>
        <div className="gitLink" onClick={() => openInNewTab("https://pmattam.github.io/Impactful/")}>Link to Site </div>
        <div className="gitLink" onClick={() => openInNewTab("https://github.com/codingandcaring/Impactful")}>GitHub</div>
        <ul className="project-skills">
            <li><img src={JavaScript}/></li>
            <li><img src={HTML}/></li>
            <li><img src={Css}/></li>
            <li><img src={jQuery} /></li>
        </ul>
        <p>Impactful connects socially conscious people looking to donate time or money in the metro Atlanta area with reputable charity organizations.  
            It allows potential volunteers to search for charities by keyword and uses the Charity Navigator API and Google Maps API to list matching organizations and
            view them on the map.</p>
        <CodepenEmbedded/>
        <video controls>
            <source src={impactful_movie} type="video/mp4"></source>
            I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
        </video>
    </div>

export default Impactful;