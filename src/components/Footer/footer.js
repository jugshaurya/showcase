import React from 'react';
import '../../styles/footer.scss';
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="left">
          {' '}
          Created with{' '}
          <span role="img" aria-labelledby="emoji">
            💛
          </span>{' '}
          using Gatsby & Figma
        </div>
        <div className="middle"> - &copy; 2020 - </div>
        <div className="right">
          {' '}
          Created with{' '}
          <span role="img" aria-labelledby="emoji">
            💛
          </span>{' '}
          by Shaurya Singhal
        </div>
      </div>
    </div>
  );
};

export default Footer;
