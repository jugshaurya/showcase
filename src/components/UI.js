import React from 'react';
import Hero from './Hero';
import Languages from './Languages';
import About from './About';
import Github from './Github';
import LatestPRs from './LatestPRs';
// import Toolbox from './Toolbox';
import Projects from './Projects';

const UI = () => {
  return (
    <div id="shaurya-showcase">
      <Hero />
      <Languages />
      <About />
      <Github />
      <LatestPRs />
      <Projects />
      {/* <Toolbox /> */}
    </div>
  );
};

export default UI;
