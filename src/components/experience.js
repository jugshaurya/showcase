import React from 'react';
import ExperienceBackground from '../static/patterns/bg-languages.svg';
import CardPattern from '../static/patterns/cardoutline2.svg';
import CodingNinjasIcon from '../static/icons/codingNinjas.png';
import GoLiveLinksIcon from '../static/icons/live.svg';
import ExperienceIcon from '../static/icons/exp.svg';
import '../styles/experience.scss';

const Experience = () => {
  return (
    <div className="experience" style={{ position: 'relative' }}>
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
              <div className="desc">Data Structures & Algorithms in Python</div>
              <div className="info">
                <p>
                  Solved 1500+ Doubts of more than 60 students divided over two
                  batches.
                </p>

                <p> Key responsibilities during the internship were:</p>
                <ul>
                  <li>
                    Taking one to one doubt sessions over chat and video-call.
                  </li>
                  <li>
                    Debugging students’ Code for various types of errors in
                    Basics and Advanced Data Structure and Algorithms in Python
                    Language.
                  </li>
                </ul>
              </div>
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
            <img src={CardPattern} alt="" />
          </div>
        </div>
      </div>
      <img
        id="experience-bg"
        src={ExperienceBackground}
        alt="experience-background"
      />
    </div>
  );
};

export default Experience;
