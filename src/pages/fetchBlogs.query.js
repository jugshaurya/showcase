import { graphql } from 'gatsby';

const fetchBlogsQuery = graphql`
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
          absolutePath
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
`;

export default fetchBlogsQuery;
