import React from 'react';

import Navbar from '../Navbar/Navbar';
import Seo from '../seo/seo';

import GlobalStyles from '../css-in-js/global.styles';
import '../../styles/global.scss';

const Layout = ({ seotitle, children }) => {
  return (
    <div className="layout">
      <GlobalStyles />
      <Seo title={seotitle} />
      <main id="shaurya-showcase">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
