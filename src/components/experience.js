import React from 'react';
// import ExperienceBackground from '../static/patterns/bg-experience.png';
import CardPattern from '../static/patterns/cardoutline2.svg';
import CodingNinjasIcon from '../static/icons/codingninjas.png';
import NewCompanyLogo from '../static/icons/newCompany.png';
import GoLiveLinksIcon from '../static/icons/live.svg';
import ExperienceIcon from '../static/icons/exp.svg';
import SwigglyBG from '../static/patterns/bg-swiggly.svg';

import '../styles/experience.scss';

const Experience = () => {
  return (
    <div id="experience" style={{ position: 'relative' }}>
      <div className="container">
        <div className="header">
          <img src={ExperienceIcon} alt="Experience icon" />
          <h2>Experience</h2>
        </div>
        <div className="exp-list">
          <div className="exp" style={{ position: 'relative' }}>
            <div className="content">
              <div className="position">Teaching Assistant @</div>
              <img
                src={CodingNinjasIcon}
                alt="coding Ninjas Icon"
                title="Coding Ninjas"
              />
              <div className="desc">
                Data Structures & <br />
                Algorithms in Python
              </div>
              <div className="info">
                <p>
                  🌱 Solved 1500+ Doubts of more than 60 students divided over
                  two batches.
                </p>
                <p>
                  🌱 Taking one to one doubt sessions over chat and video-call.
                </p>
                <p>
                  🌱 Debugging students’ Code for various types of errors in
                  Basics and Advanced Data Structure and Algorithms in Python
                  Language.
                </p>
              </div>
              <div className="bottom">
                <div className="certificates">
                  <a
                    href="https://ninjasfiles.s3.amazonaws.com/certificate1029dfe85af75e0c254af0f313a19ec6f82d.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={GoLiveLinksIcon}
                      alt="Certificate 1"
                      title="Initial 4 Months"
                    />
                  </a>
                  <a
                    href="https://ninjasfiles.s3.amazonaws.com/certificate1030f2c42e7de4802f70ad75bb78562d91be.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={GoLiveLinksIcon}
                      alt="Certificate 2"
                      title="Later 4 Months"
                    />
                  </a>
                </div>
                <div className="date">(Jan 2019 - Sept 2019)</div>
              </div>
            </div>
            <img src={CardPattern} alt="" />
          </div>
          <div className="exp" id="sec" style={{ position: 'relative' }}>
            <div className="content">
              <div className="position">More Coming Soon...</div>
              <img
                src={NewCompanyLogo}
                alt="New Company Icon"
                title="New Company"
              />
              <div className="desc">(Position)</div>
              <div className="info">
                <p>
                  <img
                    src={NewCompanyLogo}
                    alt="New Company Icon"
                    title="New Company"
                  />
                </p>
                <p>
                  <img
                    src={NewCompanyLogo}
                    alt="New Company Icon"
                    title="New Company"
                  />
                </p>
                <p>
                  <img
                    src={NewCompanyLogo}
                    alt="New Company Icon"
                    title="New Company"
                  />
                </p>
              </div>
              <div className="bottom">
                <div className="certificates"></div>
                <div className="date">(From - To)</div>
              </div>
            </div>
            <img src={CardPattern} alt="" />
          </div>
        </div>
        <img id="swiggly-bg" src={SwigglyBG} alt="swiggly background" />
      </div>
      {/* <img
        id="experience-bg"
        src={ExperienceBackground}
        alt="experience-background"
      /> */}
    </div>
  );
};

export default Experience;
