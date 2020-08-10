import React from 'react';
import ExtraIcon from '../../static/icons/extra.svg';
import BackIcon from '../../static/icons/back.svg';
import '../../styles/extra.scss';

const Extra = () => {
  return (
    <div id="extra">
      <div className="container">
        <div className="header">
          <img src={ExtraIcon} alt="Extra icon" />
          <h2>
            Extra<span>/</span>
            <sub>Thank you...</sub>
          </h2>
        </div>
        <section className="section">
          <div className="back">
            <a href="#top">
              Back to Top <img src={BackIcon} alt="back button" />
            </a>
          </div>
          <div className="colors">
            <div className="color" style={{ background: '#F2F2F2' }}></div>
            <div className="color" style={{ background: '#56B8FF' }}></div>
            <div className="color" style={{ background: '#FD7162' }}></div>
            <div className="color" style={{ background: '#E9FA66' }}></div>
            <div className="color" style={{ background: '#3CC2AF' }}></div>
            <div className="color" style={{ background: '#E89090' }}></div>
            <div className="color" style={{ background: '#15171A' }}></div>
            <div className="color" style={{ background: '#3F3D56' }}></div>
            <div className="color" style={{ background: '#ADADAD' }}></div>
            <div className="color" style={{ background: '#000000' }}></div>
            <div className="color" style={{ background: '#FFD200' }}></div>
            <div className="color" style={{ background: '#E10098' }}></div>
            <div className="color" style={{ background: '#6C63FF' }}></div>
            <div className="color" style={{ background: '#3F3D56' }}></div>
            <div
              className="color"
              style={{
                background: 'linear-gradient(180deg, #00cffd 0%, #e9fa66 100%)',
              }}
            ></div>
            <div
              className="color"
              style={{
                background: 'linear-gradient(11deg, #0095ff -2%, #ff0000 100%)',
              }}
            ></div>
            <div
              className="color"
              style={{
                background: 'linear-gradient(129deg, #2aa4f4 11%, #007ad9 89%)',
              }}
            ></div>
          </div>
        </section>
        <div className="main">
          <section>
            <div className="title">Credits/Attributions</div>
            <ul className="list">
              <li>
                <a
                  href="https://designcode.io/ui-design-for-developers/"
                  rel="noopener noreferrer"
                >
                  Design+Code
                </a>
                <sub> (for Figma Guides)</sub>
              </li>
              <li>
                <a href="https://www.flaticon.com/" rel="noopener noreferrer">
                  Flaticon
                </a>
                <sub> (for Icons)</sub>
              </li>
              <li>
                <a href="https://www.manypixels.co/" rel="noopener noreferrer">
                  Manypixels
                </a>
                <sub> (for Illustrations)</sub>
              </li>
              <li>
                <a href="https://undraw.co/" rel="noopener noreferrer">
                  Undraw
                </a>
                <sub> (for Illustrations)</sub>
              </li>
              <li>
                <a href="https://coolors.co/" rel="noopener noreferrer">
                  Coolors
                </a>
                <sub> (for Color Palettes)</sub>
              </li>
              <li>
                <a href="https://github.com/" rel="noopener noreferrer">
                  Github
                </a>
                <sub> (for Version Control)</sub>
              </li>
              <li>
                <a href="https://coolors.co/" rel="noopener noreferrer">
                  Wakatime
                </a>
                <sub> (for Language Chart)</sub>
              </li>
              <li>
                <a
                  href="https://www.fontsquirrel.com/"
                  rel="noopener noreferrer"
                >
                  Font Squirrel
                </a>
                <sub> (for Font Files)</sub>
              </li>{' '}
              <li>
                <a href="https://css-tricks.com/" rel="noopener noreferrer">
                  CSS-Tricks
                </a>
                <sub> (for Css Help)</sub>
              </li>
              <li>
                <a
                  href="https://anuraghazra.github.io/"
                  rel="noopener noreferrer"
                >
                  Anurag Hazra
                </a>
                <sub> (for Motivation)</sub>
              </li>
            </ul>
          </section>
          <section>
            <div className="title">Tech Used for this Creation</div>
            <ul className="list">
              <li>
                <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer">
                  Gatsby
                </a>
              </li>
              <li>
                <a href="https://reactjs.org/" rel="noopener noreferrer">
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://styled-components.com/"
                  rel="noopener noreferrer"
                >
                  Styled Components
                </a>
              </li>
              <li>
                <a href="https://sass-lang.com/" rel="noopener noreferrer">
                  Sass
                </a>
              </li>
              <li>
                <a href="https://www.figma.com/" rel="noopener noreferrer">
                  Figma
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jsvine/notebookjs/"
                  rel="noopener noreferrer"
                >
                  Notebookjs
                </a>
                <sub> (for transforming raw notebookdata to HTML)</sub>
              </li>
            </ul>
          </section>
          <section>
            <div className="title">Site Features</div>
            <ul className="list">
              <li>SEO Friendly</li>
              <li>Fully Accessible</li>
              <li>Works Offline (PWA)</li>
              <li>Render Jupyter-notebooks as Blogs</li>
              <li>Render Medium Published Blogs</li>
            </ul>
          </section>
          <section>
            <div className="title">Wanna Contribute?</div>
            <ul className="list">
              <li>
                <a
                  href="https://github.com/jugshaurya/showcase/"
                  rel="noopener noreferrer"
                >
                  Github Code
                </a>
              </li>
              <li>
                <a href="https://github.com/jugshaurya/showcase/issues">
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jugshaurya/showcase/projects/1/"
                  rel="noopener noreferrer"
                >
                  Project
                </a>
                <sub> (Kanban Style)</sub>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Extra;
