import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import getTableContent from '../utils/javascript/getTableContent';
import TableContent from '../components/tableContent';
import { graphql } from 'gatsby';

const MediumPostPage = ({ data }) => {
  const contents = data.allMediumFeed.edges.map(
    (edge) => `/${edge.node.slug}/`
  );

  const [table, paths] = getTableContent(contents);

  return (
    <Layout>
      <SEO title="Home" />
      <TableContent table={table} paths={paths} />
    </Layout>
  );
};
export const query = graphql`
  {
    allMediumFeed {
      totalCount
      edges {
        node {
          author
          date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
          id
          title
          link
          thumbnail
          slug
          content
        }
      }
    }
  }
`;

export default MediumPostPage;
