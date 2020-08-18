import React from 'react';
import ProjectBackground from '../../static/patterns/bg-projects.png';
import SwigglyBackground from '../../static/patterns/bg-swiggly.svg';

import ClosetProject from '../../static/projects/closet.png';
import TrelloProject from '../../static/projects/trello.png';
import CovidProject from '../../static/projects/covid.png';
import MarioProject from '../../static/projects/mario.png';
import WeekdayProject from '../../static/projects/weekday.png';

import ClosetCode from '../../static/projects/closetcode.svg';
import TrelloCode from '../../static/projects/trellocode.png';
import CovidCode from '../../static/projects/covidcode.png';
import MarioCode from '../../static/projects/mariocode.png';
import WeekdayCode from '../../static/projects/weekdaycode.png';

import ClosetEditor from '../../static/patterns/closeteditor.svg';
import TrelloEditor from '../../static/patterns/trelloeditor.svg';
import CovidEditor from '../../static/patterns/covideditor.svg';
import MarioEditor from '../../static/patterns/marioeditor.svg';
import WeekdayEditor from '../../static/patterns/weekdayeditor.svg';
import CodeEditor from './CodeEditor';
import GithubIcon from '../../static/icons/github.svg';
import GoLiveIcon from '../../static/icons/live.svg';

import Title from '../styles-in-js/Title';
import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';
import {
  Container,
  Icon,
  FloatingImage,
  Flex,
  Grid,
} from '../styles-in-js/shared';

import RocketIcon from '../../static/icons/rocket.svg';

const projects = [
  `
    {
      "project_name": "Productive Weekday",
      "description": "A Personal Project which counts down the total number of contributions anyone made over his/her Github journey and visualize the data in the form of racebar graph using d3.js to interactively find out their most productive weekday.",
      "why?": "I wanted to know people the most productive day @work as it outputs the day which a person feels most dedicated to code.",
      "tech_used": [
          "React.js + Redux",
          "MongoDB + moongose",
          "Node + Express",
          "d3.js (for racecar barchart)",
          "Cherrio (for WebScrapping)"
      ],
      "deployed": [
          "netlify"
      ]
  }
 `,
  `
    {
      "project_name": "Trello Clone",
      "description":
        "A Clone of some of the basic functionalities of Trello board which can be used by the people to add kanban-style list-making to their projects, and implements various featured by listing them on board as cards and arranging them to visulaize the progress.",
      "why?":
        "Trelo helped me implement CRUD operations and understand REST APIs and how they work and support various forms of data exchanges.",
      "tech_used": [
        "React.js + Redux",
        "MongoDB + moongose",
        "Node + Express",
        "Passport + bcrypt + jwt",
        "MDN Drag & Drop",
        "multer"
      ],
      "deployed": ["now.sh"]
    }
  `,
  `
    {
      "project_name": "Shaurya Showcase",
      "description":
        "A Portfolio static web app to showcase shaurya and his work at one place from various places like github, medium by rendering jupyter notebooks & mdx files as blogs .Built with @gatsbyjs.",
      "why?":
        "As a Software Developer, we need to show case our work, time, efforts to the world to showcase what we are capable of making and thinking. Hence Portfolio works as an alternate to the resume to showcase skills.",
      "tech_used": [
        "React.js + ContextAPI + Hooks",
        "Gatsbyjs",
        "Styled-components",
        "Sass",
        "Figma",
        "Jupyter Notebooks + Medium Posts + Mdx"
      ],
      "deployed": ["--"]
    }
  `,
  `
    {
      "project_name": "Closet Goodies",
      "description":
        "An Ecommerce Fashion Web app that allows shopping by categories(Men, Women, Boys,Girls) and let's you choose from various types of clothes like T-Shirt, Shirt, Jeans, Shoes, Socks etc.",
      "why?":
        "I did this project to learn React and State Managment library like Redux, which helped me understand how the state is used to maintain a single source of truth and avoid data inconsistency across applications.",
      "tech_used": [
        "React.js + Redux",
        "MongoDB + moongose",
        "Node + Express",
        "Firebase",
        "Sass"
      ],
      "deployed": ["firebase"]
    }
  `,
  `
    {
      "project_name": "Mario Bros Lvl 1",
      "description":
        "Clone of Mario Brothers LVL 1 with mario killing enemies and collecting coins in order to reach the castle and save the princess.",
      "why?":
        "why not? Everyone like games, mario was the most played game by me. It was the most exciting project of all. No Doubt.",
      "tech_used": [
        "ES6 Javascript",
        "Phaser V3",
        "Babel + Webpack"
      ],
      "deployed": ["netlify"]
    }
  `,
  `
    {
      "project_name": "Covid19 Visualizer",
      "description":
        "Visualizer to show the impact of covid19 over the entire world with popups demonstrating Cases, Deaths, and Recovery.",
      "why?":
        "This Project helped me visualize the data over the world map, showing virus spread in countries along with the affected people and how people should unite together to stop this infectious disease.",
      "tech_used": [
        "React.js",
        "Node + Express", 
        "geojson", 
        "mapbox-gl", 
        "Sass"
      ],
      "deployed": ["now.sh"]
    }
  `,
];

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative' }}>
      <Container>
        <Title
          IconComp={RocketIcon}
          iconDesc={'Projects'}
          w={'36px'}
          h={'36px'}
        />
        {projects.map((project) => (
          <CodeEditor code={project} />
        ))}
      </Container>
      <div className="container">
        <div className="header">
          <img src={RocketIcon} alt="Projects icon" />
          <h2>Projects</h2>
        </div>
        <div className="project-all">
          <iframe
            width="380px"
            scrolling="no"
            title="bGpejRO"
            src="https://codepen.io/jugshaurya/embed/preview/bGpejRO?height=276&theme-id=dark&default-tab=js"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{' '}
            <a href="https://codepen.io/jugshaurya/pen/bGpejRO">bGpejRO</a> by
            Shaurya Singhal (
            <a href="https://codepen.io/jugshaurya">@jugshaurya</a>) on{' '}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <iframe
            // style="width: 100%;"
            scrolling="no"
            title="bGpejRO"
            src="https://codepen.io/jugshaurya/embed/bGpejRO?height=380&theme-id=dark&default-tab=js"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{' '}
            <a href="https://codepen.io/jugshaurya/pen/bGpejRO">bGpejRO</a> by
            Shaurya Singhal (
            <a href="https://codepen.io/jugshaurya">@jugshaurya</a>) on{' '}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p
            class="codepen"
            data-theme-id="dark"
            data-default-tab="js"
            data-user="jugshaurya"
            data-slug-hash="bGpejRO"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid',
              margin: '1em 0',
              padding: '1em',
            }}
            data-pen-title="bGpejRO"
          >
            <span>
              See the Pen{' '}
              <a href="https://codepen.io/jugshaurya/pen/bGpejRO">bGpejRO</a> by
              Shaurya Singhal (
              <a href="https://codepen.io/jugshaurya">@jugshaurya</a>) on{' '}
              <a href="https://codepen.io">CodePen</a>.
            </span>
          </p>
          <script
            async
            src="https://static.codepen.io/assets/embed/ei.js"
          ></script>
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
    </section>
  );
};

export default Projects;
