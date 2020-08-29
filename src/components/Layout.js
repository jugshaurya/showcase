import React from 'react';

import GlobalStyles from './css-in-js/global.styles';
import '../styles/global.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <GlobalStyles />
      <main id="shaurya-showcase">{children}</main>
    </div>
  );
};

export default Layout;
