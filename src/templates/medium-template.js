import React from 'react';
import BlogTemplate from '../components/BlogTemplate';
import { graphql } from 'gatsby';

export default function BlogPost({ data }) {
  const html = data.mediumFeed.content;
  return (
    <BlogTemplate>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      </div>
    </BlogTemplate>
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
