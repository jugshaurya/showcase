import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/seo';

import BlogLayout from '../components/BlogLayout';

import getTableContent from '../utils/javascript/getTableContent';
import '../styles/blogTemplate.scss';

// uuid's id length is of 36 character.
const removeUUID = (str) => str.slice(0, -37);
const getTableLayout = (table, paths) => {
  return (
    <>
      {Object.keys(table).map((section, index) => {
        return (
          <div className="level" key={index}>
            {section === 'files' ? null : (
              <>
                <h6>{section}</h6>
              </>
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
                        - {removeUUID(file).split('-').splice(1).join(' ')}
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

      mlBooks: allFile(
        filter: {
          extension: { eq: "ipynb" }
          sourceInstanceName: { eq: "Machine-Learning" }
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

      mediumPosts: allMediumFeed {
        totalCount
        edges {
          node {
            author
            date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
            id
            title
            link
            thumbnail
            slug
            content
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const contents = data.pythonBooks.edges.map((edge) => edge.node.fields.slug);
  const contentsML = data.mlBooks.edges.map((edge) => edge.node.fields.slug);
  const contentsMedium = data.mediumPosts.edges.map(
    (edge) => `/medium/${edge.node.slug}/`
  );

  console.log(contentsMedium);
  const [table, paths] = getTableContent([
    ...contentsMedium,
    ...contents,
    ...contentsML,
  ]);

  // console.log(table);

  return (
    <BlogLayout>
      <SEO title="Shaurya Blogs | Portfolio | Showcase" />
      <div id="blogs">
        <section className="toc">
          <h5>Shaurya Showcase</h5>
          <div className="table-of-content">{getTableLayout(table, paths)}</div>
        </section>
        <section className="blog">{children}</section>
        <aside>Follow BRO!</aside>
      </div>
    </BlogLayout>
  );
};

export default BlogTemplate;
