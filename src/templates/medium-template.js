import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default function BlogPost({ data }) {
  console.log(data);
  const html = data.mediumFeed.content;
  return (
    <Layout>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      </div>
    </Layout>
  );
}

// when plugin will get published files will become wantedBooks
export const query = graphql`
  query($slug: String!) {
    mediumFeed(slug: { eq: $slug }) {
      author
      content
      internal {
        content
        description
      }
    }
  }
`;
