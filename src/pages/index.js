import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/Layout';
import UI from '../components/UI';

import '../styles/global.scss';
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Shaurya Showcase | Portfolio" />
      <UI />
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
