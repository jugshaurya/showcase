import React from 'react';
import Blogs from '../components/Blogs/Blogs';
import Layout from '../components/Layout/Layout';

const BlogsPage = ({ children }) => {
  return (
    <Layout seotitle="Blogs | Shaurya Showcase">
      <Blogs>{children}</Blogs>
    </Layout>
  );
};

export default BlogsPage;
