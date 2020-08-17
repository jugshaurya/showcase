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

    mediumPosts: allMediumFeed {
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

export default fetchBlogsQuery;
