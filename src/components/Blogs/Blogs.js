import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Layout from '../Layout';
import SEO from '../seo';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer';
import getTableContent from '../../utils/javascript/getTableContent';
import fetchBlogsQuery from './fetchBlogs.query';

import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';
import {
  Container,
  Icon,
  FloatingImage,
  Flex,
  Grid,
} from '../styles-in-js/shared';

import { font_robotomono } from '../styles-in-js/theme';

// uuid's id length is of 36 character.
const removeUuid = (str) => str.slice(0, -37);

// Make heading ex- from(1-learn-python) to (1 Learn Python)
const makeItHeading = (str) => str.split('-').splice(1).join(' ');
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

// Note Shaurya : children has the per-blog content
const Blogs = ({ children }) => {
  const { pythonBooks, mlBooks, mediumPosts } = useStaticQuery(fetchBlogsQuery);

  // Filtering Blogs-Slugs
  const pythonBookSlugs = pythonBooks.edges.map(
    (edge) => edge.node.fields.slug
  );
  const mlBookSlugs = mlBooks.edges.map((edge) => edge.node.fields.slug);
  const mediumPostsSlugs = mediumPosts.edges.map(
    (edge) => `/blogs/medium/${edge.node.slug}/`
  );

  // Generate Table of Content from All above Slugs
  const tableContent = getTableContent([
    ...pythonBookSlugs,
    ...mlBookSlugs,
    ...mediumPostsSlugs,
  ]);

  return (
    <Layout>
      <SEO title="Shaurya Blogs | Portfolio | Showcase" />
      {/* <Navbar defaultRoute="/blogs" /> */}
      <BlogSection gtc="400px auto 200px" jc="flex-start">
        <TOC>
          <TableOfContent fd="column">
            <TableHeading>Shaurya Showcase Blogs</TableHeading>
            <TableContent>{renderTableOfContent(tableContent)}</TableContent>
          </TableOfContent>
        </TOC>
        <Blog>{children}</Blog>
        <AdditionalInfo>MoreWWH..</AdditionalInfo>
      </BlogSection>
      <Footer />
    </Layout>
  );
};

export default Blogs;

const TableSection = styled.div``;
const TableContent = styled.div`
  margin: 20px 0 0 0;
  height: 90vh;
  overflow: scroll;
  /* border-top: 10px double ${Styles.gray}; */
/* TODO: Set scrollbar width to very minimum */
  /* &::-webkit-scrollbar {
    width: 0.1rem !important;
  }
  scrollbar-width: 0;
 */
`;

const TOC = styled.div`
  position: relative;
  width: 100%;
`;

const Blog = styled.div`
  /* border: 3px solid red; */
  min-width: 500px;
`;

const AdditionalInfo = styled.div`
  /* border: 3px solid red; */
`;

// Start
const BlogSection = styled(Grid)`
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
  padding: 20px;
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
  padding: 10px;
  margin: 10px 0;
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
    font-size: ${Styles.text_xxxsmall};
    color: ${Styles.gray};
    text-decoration: none;
    text-transform: capitalize;
    font-family: ${font_robotomono};
  }
`;
