import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import getTableContent from '../utils/javascript/getTableContent';
import TableContent from '../components/tableContent';
import { graphql } from 'gatsby';

const PythonPage = ({ data }) => {
  const contents = data.allWantedBooks.edges.map(
    (edge) => edge.node.fields.slug
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
    allWantedBooks: allFile(
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
  }
`;

export default PythonPage;
