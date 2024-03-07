import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Project from './components/Project';
import Education from './components/Education';
import Footer from './components/Footer';
import 'animate.css';



const App = () => {
  return (
    <div>
      <Navbar />
      
      <main>
        <div id='home'>
          <Home />          
        </div>

        {/* <div id='about'>
          <Home />          
        </div> */}

        <div id='services'>
        <Skills/>
        </div>

        <div id='education'>
          <Education/>
        </div>

        <div id='portfolio'>
          <Project/>
        </div>

        <div>
          <Footer/>
        </div>

      </main>
    </div>
  );
};

export default App
