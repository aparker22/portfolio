import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Resume from './Resume';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

let Router = () => 
  <div>
    <HashRouter>
        <div className="grid">
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={About} />
            <Route path = "/resume" component={Resume} />
            <Route path = "/portfolio" component={Portfolio} />
            <Route path = "/contact" component={Contact} />
            <Footer/>
        </div>
    </HashRouter>
  </div>

export default Router;