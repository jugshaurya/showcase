import React from 'react';
import './beautifulCursor.scss';

const BeautifulCursor = () => {
  React.useEffect(() => {
    const mourseCursor = document.querySelector('.cursor');
    window.addEventListener('mousemove', (e) => {
      mourseCursor.style.top = e.pageY + 'px';
      mourseCursor.style.left = e.pageX + 'px';
    });
    window.addEventListener('wheel', (e) => {
      mourseCursor.style.top = e.pageY + 'px';
      mourseCursor.style.left = e.pageX + 'px';
    });
  });

  return (
    <>
      <div className="cursor"></div>
      {/* <div className="cursor curser-fixed-top-left"></div> */}
      {/* add bulb on top right */}
      {/* <div className="cursor curser-fixed-top-right"></div> */}
    </>
  );
};

export default BeautifulCursor;
