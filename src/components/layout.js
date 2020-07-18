import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FigmaIcon from '../assets//icons/figma.svg';
import GatsbyIcon from '../assets/icons/Gatsby.svg';
import GraphqlIcon from '../assets/icons/graphql.svg';
import JSIcon from '../assets/icons/js.svg';
import NodeIcon from '../assets/icons/node.svg';
import ReduxIcon from '../assets/icons/redux.svg';
import ReactIcon from '../assets/icons/reacticon.svg';
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

  return (
    <>
      <div id="shaurya-showcase">
        {/* <Navbar/> */}
        <div className="container">
          {/* <main>{children}</main> */}
          <div className="Homepage">
            <div className="who-am-i">
              <div className="hi">Hi, I'm</div>
              <div className="bar">bar</div>
              <div className="name">Shaurya Singhal</div>
              <div className="bar2">bar</div>
              <div className="description">Software Developer</div>
              <div className="logos">
                <JSIcon />
                <NodeIcon />
                <ReactIcon />
                <ReduxIcon />
                <GraphqlIcon />
                <GatsbyIcon />
                <FigmaIcon />
              </div>
              <div className="bar3">bar</div>
            </div>
          </div>
          {/* <main>{children}</main> */}
          {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
