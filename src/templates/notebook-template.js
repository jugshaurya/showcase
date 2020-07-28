import React from 'react';
import { graphql } from 'gatsby';
import BlogTemplate from '../components/BlogTemplate';
import '../styles/notebook-template.scss';

export default function BlogPost({ data }) {
  const html = data.file.childWantedBook.html;
  return (
    <BlogTemplate>
      <div
        className="code-start"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </BlogTemplate>
  );
}

// when plugin will get published files will become wantedBooks
export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        shauJupyter
      }
      childWantedBook {
        html
        metadata {
          kernelspec {
            display_name
            language
            name
          }
          language_info {
            codemirror_mode {
              name
              version
            }
            mimetype
            file_extension
            name
            nbconvert_exporter
            pygments_lexer
            version
          }
        }
      }
    }
  }
`;
