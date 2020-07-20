import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/layout.scss';

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

  return <main>{children}</main>;
};

export default Layout;
