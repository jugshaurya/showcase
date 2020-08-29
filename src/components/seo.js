/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
            twitterUsername
            githubUsername
          }
        }
      }
    `
  );

  const { url, image, twitterUsername, githubUsername } = site.siteMetadata;
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta name="og:type" content={'website'} />
      <meta name="twitter:card" content="summary_large_image" />

      {url && <meta property="og:url" content={url} />}

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {githubUsername && (
        <meta name="github:creator" content={githubUsername} />
      )}

      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {metaTitle && <meta name="twitter:title" content={metaTitle} />}

      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}

      {image && <meta name="twitter:image" content={image} />}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
