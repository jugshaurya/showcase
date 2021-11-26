import React from 'react';

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

const IndexPage = () => {
  return (
    <Layout seotitle="Shaurya Showcase | Portfolio">
      <Hero />
      <About />
      <Github />
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
  );
};

export default IndexPage;
