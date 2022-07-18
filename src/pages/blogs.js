import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import getTableContent from '../utils/getTableContent';

import styled from 'styled-components';
import * as Styles from '../components/css-in-js/theme';
import { Flex } from '../components/css-in-js/shared';

// import Blogs from '../components/Blogs/Blogs';
// Note Shaurya : children has the per-blog content

import Layout from '../components/Layout/Layout';

const BlogsPage = ({ children, blogTitle }) => {
  const { pythonBooks, mlBooks, mediumPosts } = useStaticQuery(graphql`
    {
      pythonBooks: allFile(
        filter: {
          extension: { eq: "ipynb" }
          sourceInstanceName: { eq: "learn-python" }
        }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      mlBooks: allFile(
        filter: {
          extension: { eq: "ipynb" }
          sourceInstanceName: { eq: "Machine-Learning" }
        }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Filtering Blogs-Slugs
  const pythonBookSlugs = pythonBooks.edges.map(
    (edge) => edge.node.fields.slug
  );

  const mlBookSlugs = mlBooks.edges.map((edge) => edge.node.fields.slug);

  // const mediumPostsSlugs = mediumPosts.edges.map(
  //   (edge) => `/blogs/medium/${edge.node.slug}/`
  // );

  // Generate Table of Content from All above Slugs
  const tableContent = getTableContent([
    ...pythonBookSlugs,
    ...mlBookSlugs,
    // ...mediumPostsSlugs,
  ]);

  return (
    <Layout seotitle="Blogs | Shaurya Showcase">
      Welcome to My blogs!
      {/* <Blogs>{children}</Blogs> */}
      {/* <Navbar defaultRoute="/blogs" /> */}
      <BlogSection gtc="400px auto 100px" jc="flex-start">
        <TOC>
          <TableOfContent fd="column">
            <TableHeading>Shaurya Showcase Blogs</TableHeading>
            <TableContent>{renderTableOfContent(tableContent)}</TableContent>
          </TableOfContent>
        </TOC>
        <Blog>
          <TableHeading>{makeItHeading(blogTitle)}</TableHeading>
          {children}
        </Blog>
        <AdditionalInfo></AdditionalInfo>
      </BlogSection>
    </Layout>
  );
};

export default BlogsPage;

// uuid's id length is of 36 character.
const removeUuid = (str) => str.slice(0, -37);

const capitalize = (str) => {
  if (typeof s !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Make heading ex- from(1-learn-python) to (1 Learn Python)
const makeItHeading = (str) => str && str.split('-').splice(1).join(' ');
// using recursion to render out tables
const renderTableOfContent = (tableContent) => {
  const [table, paths] = tableContent;
  const tablekeys = Object.keys(table);

  return (
    <>
      {tablekeys.map((key, index) => (
        <TableSection key={index}>
          {key !== 'files' && key !== 'blogs' && (
            <SectionHeading>&#8620; {makeItHeading(key)}</SectionHeading>
          )}
          <SectionContent>
            {Array.isArray(table[key]) ? (
              <SectionContentList>
                {table[key].map((file, index) => (
                  <SectionContentListItem key={paths[file]}>
                    <Link to={`/${removeUuid(paths[file])}/`}>
                      &nbsp; - {makeItHeading(removeUuid(file))}
                    </Link>
                  </SectionContentListItem>
                ))}
              </SectionContentList>
            ) : (
              renderTableOfContent([table[key], paths])
            )}
          </SectionContent>
        </TableSection>
      ))}
    </>
  );
};

const TableSection = styled.div``;
const TableContent = styled.div`
  scrollbar-color: ${Styles.gray} ${Styles.gray};
  margin: 20px 0 0 0;
  height: 90vh;
  overflow: scroll;
  border-top: 10px double ${Styles.gray};

  /* TODO: Set scrollbar width to very minimum */
  &::-webkit-scrollbar {
    width: 0.1rem !important;
  }
  scrollbar-width: 0;
`;

const TOC = styled.div`
  position: relative;
  width: 100%;
`;

const Blog = styled.div`
  /* border: 3px solid red; */
  min-width: 500px;
  margin-top: 40px;
`;

const AdditionalInfo = styled.div`
  /* border: 3px solid red; */
`;

// Start
const BlogSection = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  vertical-align: top;
  /* margin: 120px auto; */
  /* border: 3px solid orange; */
  /* margin-top: 15vh; */
  margin: 0;
`;

const TableOfContent = styled(Flex)`
  /* border-top: 10px double ${Styles.gray};
  border-bottom: 10px double ${Styles.gray}; */
  /* border-right: 10px double ${Styles.gray}; */
  /* border-left: 10px double ${Styles.gray}; */
  background: ${Styles.background};
  padding-top: 40px;
  position: sticky;
  top: 0;
  left: 0;
`;

const TableHeading = styled.div`
  font-family: ${Styles.font_gloriahallelujah};
  font-size: ${Styles.text};
  border: 3px dashed ${Styles.twitterBlue};
  padding: 10px;
`;

const SectionHeading = styled.div`
  font-family: ${Styles.font_gabriela};
  font-size: ${Styles.text_xxsmall};
  padding: 15px;
  text-transform: uppercase;
`;
const SectionContent = styled.div`
  margin-left: 20px;
`;

const SectionContentList = styled.ul``;
const SectionContentListItem = styled.li`
  list-style-type: '🎮';
  font-size: ${Styles.text_small};
  a {
    font-size: ${Styles.text_xxsmall};
    color: ${Styles.gray};
    text-decoration: none;
    text-transform: capitalize;
  }
`;
