import React from 'react';
import Github from './Github';
import LatestPRs from './LatestPRs';
import Toolbox from './Toolbox';
import Projects from './Projects';
import Extra from './extra';
import Footer from './footer';
import Experience from './experience';
import Contacts from './contacts';

import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';

const UI = () => {
  return (
    <div id="shaurya-showcase">
      <Navbar />
      <Hero />
      <About />
      {/* <Github />
      <Projects />
      <Toolbox />
      <Experience />
      <Contacts />
      <Extra />
      <Footer /> */}
    </div>
  );
};

export default UI;
