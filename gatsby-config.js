require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Shaurya Showcase`,
    description: `Shaurya Personal Portfolio to showcase shaurya and his work at one place from various places.`,
    author: `@jugshaurya`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shaurya-showcase-manifest`,
        short_name: `showcase`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/shaurya.png`, // This path is relative to the root of the site.
      },
    },
    // plugin to access github
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `Machine-Learning`,
        remote: `https://github.com/jugshaurya/Machine-Learning`,
        branch: `master`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `learn-python`,
        remote: `https://github.com/jugshaurya/learn-python`,
        branch: `master`,
      },
    },
    {
      resolve: 'gatsby-source-medium-feed',
      options: {
        userName: '@shauryasinghal84', // Medium user name
        name: 'MediumFeed', // GraphQL query AllMediumFeed
      },
    },
  ],
};
