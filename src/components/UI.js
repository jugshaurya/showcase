import React from 'react';
import Hero from './Hero/Hero';
import Languages from './Languages';
import About from './About';
import Github from './Github';
import LatestPRs from './LatestPRs';
import Toolbox from './Toolbox';
import Projects from './Projects';
import Extra from './extra';
import Footer from './footer';
import Experience from './experience';
import Contacts from './contacts';

import Navbar from './Navbar/Navbar';

const UI = () => {
  return (
    <div id="shaurya-showcase">
      <Navbar />
      <Hero />
      <Languages />
      <About />
      <Github />
      <Projects />
      <Toolbox />
      <Experience />
      <Contacts />
      <Extra />
      <Footer />
    </div>
  );
};

export default UI;
