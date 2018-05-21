import React from 'react';
import Codepen from 'react-codepen-embed';

import JavaScript from './images/skills/JavaScript.png';
import HTML from './images/skills/Html5.png';
import Css from './images/skills/CSS3.png';
import jQuery from './images/skills/JQuery.png';
import PostgreSQL from './images/skills/PostgreSQL.png';
import node from './images/skills/nodejsicon.png';
import express from './images/skills/express.svg';
import react from './images/skills/reacticon.png';
import rn from './images/skills/reacticon.png';
import python from './images/skills/Python2.png';
import AWS from './images/skills/aws.png';
import github from './images/skills/GitHub.png';
import cramIT from './images/cramit_logo.png';
import impactful from './images/impactful_logo.png';
import impactful_movie from './images/impactful.mp4';
import cramit_movie from './images/movie.mp4';


// const Loading = (props) => {
//     if (props.error) {
//       return (
//         <div>Error</div>
//       );
//     } else {
//       return (
//         <div>Loading...</div>
//       );
//     }
//   }


let Portfolio = () => 
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
        </ul>
    </div>
    <div className="projects">
        <div className="single-project single-project-one">
            <a href="https://github.com/codingandcaring/cramIT"> <img src={cramIT}></img></a>
            <p>cramIT is an interactive way for software developers to prepare for upcoming interviews.  It features
                flashcards with various relevant topics, an interactive chat feature for mock interviews, and a list of relevant 
                job searches.   
            </p>
            <ul className="technologies"> 
                <li><button>HTML/CSS</button></li>
                <li><button>Node.js</button></li>
                <li><button>Javascript</button></li>
            </ul>
            <ul className="technologies"> 
                    <li><button>Websocket</button></li>
                    <li><button>Express</button></li>
                    <li><button>PostgreSQL</button></li>
            </ul>
            <div className="single-project-movie">
                <li><video controls>
                        <source src={cramit_movie} type="video/mp4"></source>
                        I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
                        </video></li>
                <li>                            
                    <Codepen
                        hash="vjPGYv"
                        user="codingandcaring"
                        preview="false"
                        />
                </li>
            </div>
            </div>
            <div className="single-project">
                <a href="https://github.com/codingandcaring/impactful"><img src={impactful}></img></a>
                <p>Impactful connects socially conscious people looking to donate time or money in the metro Atlanta area with reputable charity organizations.  
                    It allows potential volunteers to search for charities by keyword and uses the Charity Navigator API and Google Maps API to list matching organizations and
                    view them on the map.
                </p>
                <ul className="technologies"> 
                    <li><button>HTML/CSS</button></li>
                    <li><button>JavaScript</button></li>
                </ul>
                <ul className="technologies"> 
                        <li><button>API</button></li>
                        <li><button>jQuery</button></li>
                    </ul>
                    <div className="single-project-movie">
                        <li><video controls>
                                <source src={impactful_movie} type="video/mp4"></source>
                                I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
                                </video></li>
                        <li>
                            <Codepen
                                hash="QmYogG"
                                user="codingandcaring"
                                preview="false"
                                />
                        </li> 
                    </div>

            </div>
    </div>
</div>


export default Portfolio;