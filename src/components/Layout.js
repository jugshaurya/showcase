import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyles from './styles-in-js/global.styles';
import '../styles/global.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="layout">
      <GlobalStyles />
      <main id="shaurya-showcase">{children}</main>
    </div>
  );
};

export default Layout;
