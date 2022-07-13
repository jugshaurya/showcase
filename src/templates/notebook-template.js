import React from 'react';
import { graphql } from 'gatsby';

import Blogs from '../pages/blogs';

import styled from 'styled-components';
import * as Styles from '../components/css-in-js/theme';

import * as ipynb from 'ipynb2html';
import { Document } from 'nodom';

export default function BlogPost({ data }) {
  const renderNotebook = ipynb.createRenderer(new Document());
  const content = data.file.childWantedBook.internal.content;
  const notebook = JSON.parse(content);
  const html = renderNotebook(notebook).outerHTML;
  const html2 = data.file.childWantedBook.html;

  const title = data.file.childWantedBook.fileAbsolutePath.split('/');
  return (
    <>
      <Blogs blogTitle={title[title.length - 1]}>
        <Blog
          dangerouslySetInnerHTML={{
            __html: html2,
          }}
        ></Blog>
      </Blogs>
    </>
  );
}

// when plugin will get published files will become wantedBooks
export const query = graphql`
  query ($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      childWantedBook {
        html
        fileAbsolutePath
        internal {
          content
        }
      }
    }
  }
`;

const Blog = styled.div`
  * {
    font-family: ${Styles.font_normal};
    scrollbar-color: ${Styles.gray} ${Styles.gray};
  }
  padding: 0 40px;
  .nb-notebook {
    .nb-worksheet {
      .nb-cell {
        &.nb-markdown-cell {
          color: ${Styles.gray};
          display: flex;
          flex-direction: column;
          p {
            display: block;
            text-align: center;
            margin-bottom: 20px;
            line-height: 1.4em;
            font-size: 0.6rem;
          }

          strong,
          b {
            color: ${Styles.darkgreen};
            font-size: ${Styles.text};
            font-weight: normal;
          }

          img {
            display: block;
            border-radius: 25px;
            min-width: 200px;
            min-height: 200px;
            margin: 10px auto;
          }

          hr {
            display: none;
          }

          h1,
          h2,
          h3 {
            text-align: center;
            font-family: ${Styles.font_gabriela};
            color: ${Styles.purple};
            font-size: ${Styles.text};
          }
          h4 {
            font-size: ${Styles.text_small};
            font-weight: 400;
            font-style: italic;
          }

          ul,
          ol {
            list-style-type: circle;
            margin-top: 0;
            margin-bottom: 0;
            li {
              font-size: ${Styles.text_xxsmall};
              p {
                display: inline;
              }
              ol {
                font-size: ${Styles.text_large};
              }
              a {
                text-decoration: none;
                color: ${Styles.blue};
                text-decoration: underline;
              }
            }
          }

          table {
            font-size: ${Styles.text_xxsmall};
            tr,
            td,
            th {
              padding: 5px;
              border: 1px solid ${Styles.gray};
            }
            border: 1px solid ${Styles.gray};
          }

          code {
            font-size: ${Styles.text_xsmall};
          }

          pre {
            margin: 5px;
            margin-bottom: 20px;
            padding: 20px;
            code {
              display: block;
              font-size: ${Styles.text_xxsmall};
              &::after {
                display: none;
              }
            }
          }
        }

        &.nb-code-cell {
          .nb-input {
            pre {
              width: 100%;
              padding: 0;
              color: ${Styles.gray};
              &::before {
                content: 'Input: ';
                color: ${Styles.mapPurple};
                margin-bottom: 5px;
                font-size: ${Styles.text_xxsmall};
              }
              code {
                display: block;
                font-size: ${Styles.text_xxsmall};
                &::after {
                  display: none;
                }
              }
              code:empty {
                display: none;
              }
            }
          }
          .nb-output {
            &::before {
              content: 'Output: ';
              color: ${Styles.mapPurple};
              margin-bottom: 5px;
              font-size: ${Styles.text_xxsmall};
            }
            pre {
              padding: 5px;
              color: ${Styles.gray};
              font-size: ${Styles.text_xxxsmall};
            }
          }
        }
      }
    }
  }
`;
