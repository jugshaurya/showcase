const path = require('path');
const nb = require('notebookjs');
const { createFilePath } = require(`gatsby-source-filesystem`);

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
  createNodeField({
    node,
    name: `slug`,
    value: slug.toLowerCase().split(' ').join('-'),
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
  const result = await graphql(`
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

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/notebook-template.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
