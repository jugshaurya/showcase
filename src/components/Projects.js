import React from 'react';
import ProjectBackground from '../static/patterns/bg-projects.png';
import SwigglyBackground from '../static/patterns/bg-swiggly.svg';

import ClosetProject from '../static/projects/closet.png';
import TrelloProject from '../static/projects/trello.png';
import CovidProject from '../static/projects/covid.png';
import MarioProject from '../static/projects/mario.png';
import WeekdayProject from '../static/projects/weekday.png';

import ClosetCode from '../static/projects/closetcode.svg';
import TrelloCode from '../static/projects/trellocode.png';
import CovidCode from '../static/projects/covidcode.png';
import MarioCode from '../static/projects/mariocode.png';
import WeekdayCode from '../static/projects/weekdaycode.png';

import ClosetEditor from '../static/patterns/closeteditor.svg';
import TrelloEditor from '../static/patterns/trelloeditor.svg';
import CovidEditor from '../static/patterns/covideditor.svg';
import MarioEditor from '../static/patterns/marioeditor.svg';
import WeekdayEditor from '../static/patterns/weekdayeditor.svg';

import GithubIcon from '../static/icons/github.svg';
import GoLiveIcon from '../static/icons/live.svg';

import RocketIcon from '../static/icons/rocket.svg';
import '../styles/projects.scss';
const Projects = () => {
  return (
    <div id="projects" style={{ position: 'relative' }}>
      <div className="container">
        <div className="header">
          <img src={RocketIcon} alt="Projects icon" />
          <h2>Projects</h2>
        </div>
        <div className="project-all">
          <div className="project">
            <div className="project-left">
              <img className="editor" src={ClosetEditor} alt="closet editor" />
              <img className="code" src={ClosetCode} alt="closet code" />
              <div className="icons">
                <a
                  className="github-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithubIcon} alt="github Icon" />
                </a>
                <a
                  className="golive-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GoLiveIcon} alt="Go Live Icon" />
                </a>
              </div>
            </div>
            <div className="project-right">
              <img
                className="project-img"
                src={ClosetProject}
                alt="closet gif"
              />
            </div>
          </div>
          <div className="project">
            <div className="project-left">
              <img
                className="editor"
                src={WeekdayEditor}
                alt="weekday editor"
              />
              <img className="code" src={WeekdayCode} alt="weekday code" />
              <div className="icons">
                <a
                  className="github-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithubIcon} alt="github Icon" />
                </a>
                <a
                  className="golive-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GoLiveIcon} alt="Go Live Icon" />
                </a>
              </div>
            </div>
            <div className="project-right">
              <img
                className="project-img"
                src={WeekdayProject}
                alt="weekday gif"
              />
            </div>
          </div>
          <div className="project">
            <div className="project-left">
              <img className="editor" src={TrelloEditor} alt="trello editor" />
              <img className="code" src={TrelloCode} alt="Trello code" />
              <div className="icons">
                <a
                  className="github-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithubIcon} alt="github Icon" />
                </a>
                <a
                  className="golive-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GoLiveIcon} alt="Go Live Icon" />
                </a>
              </div>
            </div>
            <div className="project-right">
              <img
                className="project-img"
                src={TrelloProject}
                alt="Trello gif"
              />
            </div>
          </div>
          <div className="project">
            <div className="project-left">
              <img className="editor" src={CovidEditor} alt="covid editor" />
              <img className="code" src={CovidCode} alt="Covid code" />
              <div className="icons">
                <a
                  className="github-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithubIcon} alt="github Icon" />
                </a>
                <a
                  className="golive-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GoLiveIcon} alt="Go Live Icon" />
                </a>
              </div>
            </div>
            <div className="project-right">
              <img className="project-img" src={CovidProject} alt="Covid gif" />
            </div>
          </div>
          <div className="project">
            <div className="project-left">
              <img className="editor" src={MarioEditor} alt="mario editor" />
              <img className="code" src={MarioCode} alt="mario code" />
              <div className="icons">
                <a
                  className="github-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithubIcon} alt="github Icon" />
                </a>
                <a
                  className="golive-icon"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GoLiveIcon} alt="Go Live Icon" />
                </a>
              </div>
            </div>
            <div className="project-right">
              <img className="project-img" src={MarioProject} alt="Mario gif" />
            </div>
          </div>
        </div>
      </div>
      <img id="projects-bg" src={ProjectBackground} alt="projects background" />
    </div>
  );
};

export default Projects;
