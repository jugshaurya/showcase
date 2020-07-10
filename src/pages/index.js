import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Machine Learning</h2>
      {/* mltc - machine learning table of content */}
      <Link to="/mltc/"> Go to Learn ML</Link>
      <Link to="/lptc/"> Go to Learn Python</Link>
    </Layout>
  );
};

export default IndexPage;
