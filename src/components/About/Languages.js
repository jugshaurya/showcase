import React from 'react';
import LanguagesBackground from '../../static/patterns/bg-languages.svg';
import CardPattern1 from '../../static/patterns/cardoutline1.svg';
import CardPattern2 from '../../static/patterns/cardoutline2.svg';
import CardPattern3 from '../../static/patterns/cardoutline3.svg';
import JSIcon from '../../static/icons/js.svg';
import PythonIcon from '../../static/icons/python.svg';
import CIcon from '../../static/icons/c.svg';

import '../../styles/languages.scss';

const Languages = () => {
  return (
    <div className="languages" style={{ position: 'relative' }}>
      <div className="container">
        <div className="primary">
          <div className="content">
            <div className="type">Primary Language</div>
            <div className="name">
              <img src={JSIcon} alt="javscript Icon" title="Javscript" />
              <div className="lang">Javascript</div>
            </div>
            <div className="desc">
              <p>
                Javascript gave me the power to build all my Personal Projects.
              </p>
              <p>
                I love the default Functional Programming Paradigm of
                JavaScript, which lead me to write clean code and maintain the
                purity of it.
              </p>
              <p>
                React, Redux, Graphql, Gatsby are all the instrument that I use
                to create Beautiful Harmonies with Javascript.
              </p>
            </div>
          </div>
          <img className="card-pattern" src={CardPattern1} alt="" />
        </div>
        <div className="secondary" style={{ position: 'relative' }}>
          <div className="content">
            <div className="type">Secondary Language</div>
            <div className="name">
              <img src={PythonIcon} alt="python Icon" title="Python" />
              <div className="lang">Python</div>
            </div>
            <div className="desc">
              <p>
                A Language that helped me explore the world of Machine Learning
                and Jupyter Notebooks and ultimately helped in getting my first
                Internship as a TA; helping students learn DATA STRUCTURE &
                ALGORITHMS.
              </p>

              <p>View blogs I wrote while learning ML & Python. </p>
            </div>
          </div>
          <img className="card-pattern" src={CardPattern2} alt="" />
        </div>
        <div className="tertiary" style={{ position: 'relative' }}>
          <div className="content">
            <div className="type">Tertiary Language</div>
            <div className="name">
              <img src={CIcon} alt="C++ Icon" title="C++" />
              <div className="lang">C++</div>
            </div>
            <div className="desc">
              <p>
                First Language that introduced me to the Coding World. Concepts
                of OOPS made me understand how computer mocks/maps real world
                entities.
              </p>

              <p>Made it easy to learn other languages.</p>

              <p>I use it for Competitive Programming. </p>
            </div>
          </div>
          <img className="card-pattern" src={CardPattern3} alt="" />
        </div>
      </div>
      <img
        id="languages-bg"
        src={LanguagesBackground}
        alt="languages-background"
      />
    </div>
  );
};

export default Languages;
