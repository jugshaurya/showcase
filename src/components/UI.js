import React from 'react';
import Hero from './Hero';
import Languages from './Languages';
import About from './About';
import Github from './Github';
import LatestPRs from './LatestPRs';

const UI = () => {
  return (
    <div id="shaurya-showcase">
      <Hero />
      <Languages />
      <About />
      <Github />
      <LatestPRs />
    </div>
  );
};

export default UI;
