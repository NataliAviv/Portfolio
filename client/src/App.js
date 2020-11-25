import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link,BrowserRouter as Router, } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="main-container">
      <Header/>
      <div className="app-container">
    <About/>
    <Skills/>
    <Projects />
    <Contact />
    <Footer/>

   {false &&  <Router>

    <Layout>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="about">About Me</Link>
              <Link to="projects">Projects</Link>
              <Link to="skills">Skills</Link>
              <Link to="resume">Resume</Link>
              <Link to="contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </Router>}
</div>
</div>
    );
  }
}

export default App;