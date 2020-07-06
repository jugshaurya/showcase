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
      <Image ImageName="gatsby-astronaut.png" maxWidth="300" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
);

export default IndexPage;
