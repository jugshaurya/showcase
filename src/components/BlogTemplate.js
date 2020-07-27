import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/seo';

import BlogLayout from '../components/BlogLayout';

import getTableContent from '../utils/javascript/getTableContent';
import '../styles/blogs.scss';

// uuid's id length is of 36 character.
const removeUUID = (str) => str.slice(0, -37);
const getTableLayout = (table, paths) => {
  return (
    <>
      {Object.keys(table).map((section, index) => {
        return (
          <div key={index}>
            {section === 'files' ? null : (
              <div>
                <h6>{section}</h6>
              </div>
            )}
            <div>
              {Array.isArray(table[section]) ? (
                <div className="ioioo" style={{ paddingLeft: '30px' }}>
                  {table[section].map((file, index) => (
                    <div key={1000 + index}>
                      <Link
                        to={`/${removeUUID(paths[file])}/`}
                        className="file"
                      >
                        {removeUUID(file)}
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                getTableLayout(table[section], paths)
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

const BlogTemplate = ({ children }) => {
  const query = graphql`
    {
      pythonBooks: allFile(
        filter: {
          extension: { eq: "ipynb" }
          sourceInstanceName: { eq: "learn-python" }
        }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const contents = data.pythonBooks.edges.map((edge) => edge.node.fields.slug);
  console.log(contents);
  const [table, paths] = getTableContent(contents);

  return (
    <BlogLayout>
      <SEO title="Shaurya Blogs | Portfolio | Showcase" />
      <div id="blogs">
        <section>
          <h5>Read outs | Shaurya Showcase</h5>
          <div className="table-of-content">{getTableLayout(table, paths)}</div>
        </section>
        <section className="blog">{children}</section>
        <aside>Follow BRO!</aside>
      </div>
      <h2>Machine Learning</h2>
      mltc - machine learning table of content
      <Link to="/mltc/"> Go to Learn ML</Link>
      <br />
      <Link to="/lptc/"> Go to Learn Python</Link>
      <br />
      <Link to="/medium-post-page/"> Go to Meduim Posts</Link>
    </BlogLayout>
  );
};

export default BlogTemplate;
