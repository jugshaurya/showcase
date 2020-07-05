import React from 'react';
import { Link } from 'gatsby';
import PrimaryButton, { SecondaryButton } from '../components/Button';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <PrimaryButton>Welcome </PrimaryButton>
    <br />
    <br />
    <SecondaryButton>Now </SecondaryButton>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
