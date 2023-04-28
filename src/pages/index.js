import React, { useEffect } from 'react';

import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Github from '../components/Github/Github';
import Projects from '../components/Projects/Projects';
import Toolbox from '../components/Toolbox/Toolbox';
import Extra from '../components/Extra/extra';
import Footer from '../components/Footer/footer';
// import Experience from '../components/Experience/Experience';
import Contacts from '../components/Contacts/Contacts';
import BeautifulCursor from '../hooks/beautifulCursor';

import { Analytics } from '@vercel/analytics/react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      offset: 120, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <BeautifulCursor />
      <Layout seotitle="Shaurya Showcase | Portfolio">
        <Hero />
        <About />
        <Github data-aos="fade-in" />
        <Projects />
        <Toolbox />
        {/* <Experience /> */}
        <Contacts />
        <Extra />
        <Footer />
        {/* <h2>Machine Learning</h2> */}
        {/* mltc - machine learning table of content */}
        {/* <Link to="/mltc/"> Go to Learn ML</Link> */}
        {/* <br /> */}
        {/* <Link to="/lptc/"> Go to Learn Python</Link> */}
        {/* <br /> */}
        {/* <Link to="/medium-post-page/"> Go to Meduim Posts</Link> */}
      </Layout>
      <Analytics />
    </>
  );
};

export default IndexPage;
