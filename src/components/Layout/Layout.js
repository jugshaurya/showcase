import React from 'react';

import Navbar from '../Navbar/Navbar';
import Seo from '../seo/seo';

import GlobalStyles from '../css-in-js/global.styles';
import './layout.scss';
import '../../styles/global.scss';
import Back from '../../static/patterns/geowal.jpg';

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
