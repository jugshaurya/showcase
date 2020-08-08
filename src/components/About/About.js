import React from 'react';
import Shaurya from '../../static/shaurya.png';
import ShauryaBackground from '../../static/patterns/bg-shaurya.svg';
import Map from '../../static/map.svg';
import GraphqlIcon from '../../static/icons/graphql.svg';
import GatsbyIcon from '../../static/icons/gatsby.svg';
import FigmaIcon from '../../static/icons/figma.svg';
import Languages from './Languages';
import '../../styles/about.scss';

const About = () => {
  return (
    <div id="about">
      <Languages />
      <div className="aboutme">
        <div className="container" style={{ position: 'relative' }}>
          <img
            className="about-bg"
            src={ShauryaBackground}
            alt="shaurya background"
          />
          <div className="box"></div>
          <h3 className="hi">Hello, I'm Shaurya.</h3>
          <div className="me">
            <img src={Shaurya} alt="shaurya" title="shaurya" />
          </div>
          <p className="desc">
            I enjoy developing Web Applications, which would assist the people
            around me to see new insight into the world; Whether it is figuring
            out the data or to drive a new concept out of it or to build an
            already existing app that is changing the world. I enjoy all kinds
            of creating plus solving the problems that come along with the app.
          </p>
          <div className="credits">
            <a href="/">
              <div className="type">A Certified React Developer</div>
            </a>
            <div className="from-where">
              graduated from <span> Udacity Nanodegree Program.</span>
            </div>
          </div>
        </div>
        <div id="map">
          <img src={Map} alt="map" className="map-bg" />
          <div className="learning">
            <div className="title">Newly Learn(ed/ing)</div>
            <div className="logos">
              <div className="logo">
                <img src={GraphqlIcon} alt="" />
                <span>Graphql</span>
              </div>
              <div className="logo">
                <img src={GatsbyIcon} alt="" />
                <span>Gatsby</span>
              </div>
              <div className="logo">
                <img src={FigmaIcon} alt="" />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
