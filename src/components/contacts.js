import React from 'react';
import ContactIcon from '../static/icons/extra.svg';
import GmailIcon from '../static/icons/gmail.svg';
import LinkedInIcon from '../static/icons/linkedin.svg';
import GithubIcon from '../static/icons/github.svg';
import TwitterIcon from '../static/icons/twitter.svg';
import Shaurya from '../static/shaurya.png';
import PolygonRed from '../static/patterns/polygonred.svg';
import PolygonGreen from '../static/patterns/polygongreen.svg';

import '../styles/contacts.scss';

const Contacts = () => {
  return (
    <div id="contacts" style={{ position: 'relative' }}>
      <img className="polygon green" src={PolygonGreen} alt="green poly" />
      <img className="polygon red" src={PolygonRed} alt="red ploy" />
      <div className="container">
        <div className="header">
          <img src={ContactIcon} alt="Contact icon" />
          <h2>Contact me</h2>
        </div>
        <div className="main">
          <div className="left">
            <div className="gmail">
              <a href="mailto: shauryasinghal84@gmail.com">
                <img src={GmailIcon} alt="gmail icon" />
              </a>
            </div>
            <div className="photo">
              <img src={Shaurya} alt="Shaurya icon" />
            </div>
            <div className="social-links">
              <a
                href="/https://www.linkedin.com/in/jugshaurya/"
                rel="noopener noreferrer"
              >
                <img src={LinkedInIcon} alt="linkedin Icon" />
              </a>
              <a
                href="/https://github.com/jugshaurya/"
                rel="noopener noreferrer"
              >
                <img src={GithubIcon} alt="Github Icon" />
              </a>
              <a
                href="/https://twitter.com/jugshaurya/"
                rel="noopener noreferrer"
              >
                <img src={TwitterIcon} alt="Twitter Icon" />
              </a>
            </div>
          </div>
          <div className="right">
            <div className="internal">
              Feel Free to reach out; whether you want my help or want to
              collaborate on some project. <br />
              <span>🌱 Looking for Opportunities. 🌱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
