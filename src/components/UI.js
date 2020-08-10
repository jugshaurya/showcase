import React from 'react';
import Toolbox from './Toolbox';
import Extra from './extra';
import Footer from './footer';
import Experience from './experience';
import Contacts from './contacts';

import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Github from './Github/Github';
import Projects from './Projects/Projects';

const UI = () => {
  return (
    <div id="shaurya-showcase">
      <Navbar />
      <Hero />
      <About />
      <Github />
      {/* <Projects /> */}
      <Toolbox />
      <Experience />
      <Contacts />
      <Extra />
      <Footer />
    </div>
  );
};

export default UI;
