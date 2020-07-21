import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default function BlogPost({ data }) {
  console.log(data);
  const html = data.file.childWantedBook.html;
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
