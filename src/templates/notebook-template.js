import React from 'react';
import { graphql } from 'gatsby';

import Blogs from '../components/Blogs/Blogs';

import styled from 'styled-components';
import * as Styles from '../components/styles-in-js/theme';
import {
  Container,
  Icon,
  FloatingImage,
  Flex,
  Grid,
} from '../components/styles-in-js/shared';

export default function BlogPost({ data }) {
  const html = data.file.childWantedBook.html;
  return (
    <>
      <Blogs>
        <Blog
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></Blog>
      </Blogs>
    </>
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

const Blog = styled.div`
  * {
    font-family: ${Styles.font_normal};
  }
  padding: 0 20px;
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
            /* font-size: ${Styles.text_small}; */
          }

          strong,
          b {
            color: ${Styles.darkgreen};
            font-size: ${Styles.text_small};
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
          h2 {
            text-align: center;
            font-family: ${Styles.font_gloriahallelujah};
            color: ${Styles.twitterBlue};
            font-size: ${Styles.text};
          }

          h3 {
            text-align: left;
            position: relative;
            margin-top: 25px;
            &::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: -10px;
              background: ${Styles.blue};
              width: 40px;
              height: 6px;
              border-radius: 7px;
            }
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
            }
          }
          table {
            tr,
            td,
            th {
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
            scrollbar-color: ${Styles.gray} ${Styles.gray} !important;
          }
        }
        &.nb-code-cell {
          font-size: 1em;
          .nb-input {
            pre {
              width: 100%;
              padding: 0;
              code{
                width :100%;
                padding: 10px;
                height: fit-content;
                border: 1px dotted   ${Styles.gray};
                display: block;
                &::after{
                  display: none;
                }
              }
              code:empty {
                display: none;
              }
            }
          }
          .nb-output {
            background: ${Styles.codeblocks};
            pre {
              width: 100%;
              padding: 0;
              code{
                width :100%;
                padding: 10px;
                height: fit-content;
                border: 1px dotted   ${Styles.gray};
                display: block;
                &::after{
                  display: none;
                }
              }
              code:empty {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;
