import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import BlogTemplate from '../components/BlogTemplate';

const BlogsPage = ({ children }) => {
  return <BlogTemplate>{children}</BlogTemplate>;
};

export default BlogsPage;
