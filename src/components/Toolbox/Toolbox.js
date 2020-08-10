import React from 'react';
import ToolboxIcon from '../../static/icons/toolbox.svg';
import RutherfordModel from '../../static/rutherford.svg';
import RutherfordBackground from '../../static/patterns/bg-rutherford.svg';
import RutherfordBackground2 from '../../static/patterns/bg-swiggly.svg';
import '../../styles/toolbox.scss';

const Toolbox = () => {
  return (
    <div id="skills" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="header">
          <img src={ToolboxIcon} alt="PR icon" />
          <h2>
            Toolbox<span>/</span>can work with...
          </h2>
        </div>

        <div className="rutherford">
          <img src={RutherfordModel} alt="language known" />
        </div>
        <img
          id="swiggly-bg"
          src={RutherfordBackground2}
          alt="rutherford background 2"
        />
      </div>
      <img
        id="rutherford-bg"
        src={RutherfordBackground}
        alt="rutherford background"
      />
    </div>
  );
};

export default Toolbox;
