const path = require('path');
const nb = require('notebookjs');
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.join(__dirname, 'src'),
        Src: path.join(__dirname, 'src'),
        Shared: path.join(__dirname, 'src/components/styles-in-js/shared'),
        Components: path.join(__dirname, 'src/components'),
        Pages: path.join(__dirname, 'src/pages'),
        Static: path.join(__dirname, 'src/static'),
        Theme: path.join(__dirname, 'src/components/styles-in-js/theme'),
      },
    },
  });
};
exports.onPreInit = () => {
  console.log('Creating node which had converted jupyter raw-content to html');
};

exports.onCreateNode = async (
  {
    node,
    getNode,
    loadNodeContent,
    actions,
    createNodeId,
    reporter,
    createContentDigest,
  },
  pluginOptions
) => {
  const { createNodeField, createNode, createParentChildLink } = actions;
  // *) look for ipynb files only
  if (
    node.extension !== `ipynb` ||
    String(node.absolutePath).includes(`.ipynb_checkpoints`)
  ) {
    return;
  }

  // START: not a part of future plugin
  // createFilePath uses: node relative and basePath to generate a slug.
  // Proof: https://github.com/gatsbyjs/gatsby/blob/1c3ebf7624329f53ee3aeee7b35388d34ac88bf6/packages/gatsby-source-filesystem/src/create-file-path.js#L39
  const slug = createFilePath({ node, getNode });
  const modifiedSlug = slug.toLowerCase().split(' ').join('-');
  createNodeField({
    node,
    name: `slug`,
    value: `/blogs${modifiedSlug}`,
  });
  // END: not a part of future plugin

  const content = await loadNodeContent(node);
  const jupyterNode = {
    id: `${node.id} >>> WantedBook`,
    children: [],
    parent: node.id,
    internal: {
      content,
      type: `WantedBook`,
    },
  };
  jupyterNode.json = JSON.parse(content);
  jupyterNode.metadata = jupyterNode.json.metadata;
  jupyterNode.html = nb.parse(jupyterNode.json).render().outerHTML;

  if (node.internal.type === `File`) {
    jupyterNode.fileAbsolutePath = node.absolutePath;
  }

  jupyterNode.internal.contentDigest = createContentDigest(jupyterNode);

  createNode(jupyterNode);
  createParentChildLink({
    parent: node,
    child: jupyterNode,
  });

  // *) adding a node field for html content
  if (node.internal.mediaType === `application/octet-stream`) {
    createNodeField({
      node,
      name: `shauJupyter`,
      value: jupyterNode.html,
    });
  }
};

// programmatically create pages from data.
// when plugin will get published allFiles will become allWantedBooks
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const notebooksResult = await graphql(`
    query {
      allFile(filter: { extension: { eq: "ipynb" } }) {
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

  notebooksResult.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/notebook-template.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const mediumFeedResult = await graphql(`
    query {
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
  `);

  mediumFeedResult.data.allMediumFeed.edges.forEach(({ node }) => {
    createPage({
      path: `/medium/${node.slug}`,
      component: path.resolve(`./src/templates/medium-template.js`),
      context: {
        slug: node.slug,
      },
    });
  });
};
