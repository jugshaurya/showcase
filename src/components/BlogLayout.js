import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

import '../styles/blogLayout.scss';

const BlogLayout = ({ children }) => {
  return (
    <div id="blogs-page">
      <Navbar defaultRoute="/blogs" />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
