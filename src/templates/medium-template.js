import React from 'react';
import Blogs from '../components/Blogs/Blogs';

import { graphql } from 'gatsby';

export default function BlogPost({ data }) {
  const html = data.mediumFeed.content;
  return (
    <Blogs>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </Blogs>
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
