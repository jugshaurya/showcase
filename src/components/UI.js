import React from 'react';
import Hero from './Hero';
import Languages from './Languages';
import About from './About';
import Github from './Github';
import LatestPRs from './LatestPRs';
import Toolbox from './Toolbox';
import Projects from './Projects';
import Extra from './extra';
import Footer from './footer';
import Experience from './experience';

import Navbar from './Navbar';

const UI = () => {
  return (
    <div id="shaurya-showcase">
      <Navbar />
      <Hero />
      <Languages />
      <About />
      <LatestPRs />
      <Projects />
      <Toolbox />
      <Github />
      <Experience />
      <Extra />
      <Footer />
    </div>
  );
};

export default UI;
