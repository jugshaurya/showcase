import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar/Navbar';
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
    <Layout>
      <SEO title="Shaurya Showcase | Portfolio" />
      <Navbar />
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
