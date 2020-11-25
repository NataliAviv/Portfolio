import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Resume from './Resume';



const Main = () => (
  <Switch>
    <Route path="/" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/skills" component={Skills} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />

  </Switch>
)

export default Main;