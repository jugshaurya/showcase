import React from 'react';

import ClosetProject from '../../static/projects/closet.png';
import TrelloProject from '../../static/projects/trello.png';
import CovidProject from '../../static/projects/covid.png';
import MarioProject from '../../static/projects/mario.png';
import WeekdayProject from '../../static/projects/weekday.png';
import WeekdayGif from '../../static/projects/weekday.gif';
import ClosetGif from '../../static/projects/closet.gif';
import CovidGif from '../../static/projects/covid.gif';
import ShortenerGig from '../../static/projects/urlshortner.gif';
import ShowcaseProject from '../../static/projects/showcase.png';
import AppleIMac from '../../static/AppleiMac.png';
import AppleIMacSVG from '../../static/AppleiMac.svg';
import JSIcon from '../../static/icons/js.svg';
import NodeIcon from '../../static/icons/node.svg';
import ReactIcon from '../../static/icons/react.svg';
import ReduxIcon from '../../static/icons/redux.svg';
import GraphqlIcon from '../../static/icons/graphql.svg';
import GatsbyIcon from '../../static/icons/gatsby.svg';
import FigmaIcon from '../../static/icons/figma.svg';

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
  windmove,
} from '../styles-in-js/shared';

import RocketIcon from '../../static/icons/rocket.svg';
import '../../styles/projects.scss';

const projects = [
  `{
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
    }`,

  `{
      "project_name": "Trello Clone",
      
      "description": "A Clone of some of the basic functionalities of Trello board which can be used by the people to add kanban-style list-making to their projects, and implements various featured by listing them on board as cards and arranging them to visulaize the progress.",
      
      "why?": "Trello helped me implement CRUD operations and understand REST APIs and how they work and support various forms of data exchanges.",
      
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
      
      "description": "A Portfolio static web app to showcase shaurya and his work at one place from various places like github, medium by rendering jupyter notebooks & mdx files as blogs .Built with @gatsbyjs.",
      
      "why?": "As a Software Developer, we need to show case our work, time, efforts to the world to showcase what we are capable of making and thinking. Hence Portfolio works as an alternate to the resume to showcase skills.",
      
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
      
      "description": "An Ecommerce Fashion Web app that allows shopping by categories(Men, Women, Boys,Girls) and let's you choose from various types of clothes like T-Shirt, Shirt, Jeans, Shoes, Socks etc.",
      
      "why?": "I did this project to learn React and State Managment library like Redux, which helped me understand how the state is used to maintain a single source of truth and avoid data inconsistency across applications.",
      
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
      
      "description": "Clone of Mario Brothers LVL 1 with mario killing enemies and collecting coins in order to reach the castle and save the princess.",
      
      "why?": "why not? Everyone like games, mario was the most played game by me. It was the most exciting project of all. No Doubt.",
      
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
      
      "description": "Visualizer to show the impact of covid19 over the entire world with popups demonstrating Cases, Deaths, and Recovery.",
      
      "why?": "This Project helped me visualize the data over the world map, showing virus spread in countries along with the affected people and how people should unite together to stop this infectious disease.",
      
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
    <section id="projects" style={{ position: 'relative', marginTop: '160px' }}>
      <Container>
        <Title
          IconComp={RocketIcon}
          iconDesc={'Projects'}
          w={'36px'}
          h={'36px'}
        />
        <Grid gtc="repeat(1, 1fr)" gap="60px" rgap="100px">
          <Flex jc="space-between" style={{ position: 'relative' }}>
            <CodeEditor
              code={projects[0]}
              color={Styles.twitterBlue}
              icons={[
                {
                  IconComp: ReactIcon,
                  iconDesc: 'React',
                },
                {
                  IconComp: JSIcon,
                  iconDesc: 'JS',
                },
                {
                  IconComp: FigmaIcon,
                  iconDesc: 'Figma',
                },
              ]}
              projLinks={{ githubLink: '/', liveLink: '/' }}
            />
            <div className="project-img">
              <img className="mac" src={AppleIMac} alt={'weekday'} />
              <img className="proj" src={ShortenerGig} alt={'weekday'} />
            </div>
          </Flex>
          <Flex jc="space-between" style={{ position: 'relative' }}>
            <CodeEditor
              code={projects[0]}
              color={Styles.twitterBlue}
              icons={[
                {
                  IconComp: ReactIcon,
                  iconDesc: 'React',
                },
                {
                  IconComp: JSIcon,
                  iconDesc: 'JS',
                },
                {
                  IconComp: FigmaIcon,
                  iconDesc: 'Figma',
                },
              ]}
              projLinks={{ githubLink: '/', liveLink: '/' }}
            />
            <div className="project-img">
              <img className="mac" src={AppleIMac} alt={'weekday'} />
              <img className="proj" src={ShortenerGig} alt={'weekday'} />
            </div>
          </Flex>
          <Flex jc="space-between" style={{ position: 'relative' }}>
            <CodeEditor
              code={projects[0]}
              color={Styles.twitterBlue}
              icons={[
                {
                  IconComp: ReactIcon,
                  iconDesc: 'React',
                },
                {
                  IconComp: JSIcon,
                  iconDesc: 'JS',
                },
                {
                  IconComp: FigmaIcon,
                  iconDesc: 'Figma',
                },
              ]}
              projLinks={{ githubLink: '/', liveLink: '/' }}
            />
            <div className="project-img">
              <img className="mac" src={AppleIMac} alt={'weekday'} />
              <img className="proj" src={ShortenerGig} alt={'weekday'} />
            </div>
          </Flex>
          <Flex jc="space-between" style={{ position: 'relative' }}>
            <CodeEditor
              code={projects[0]}
              color={Styles.twitterBlue}
              icons={[
                {
                  IconComp: ReactIcon,
                  iconDesc: 'React',
                },
                {
                  IconComp: JSIcon,
                  iconDesc: 'JS',
                },
                {
                  IconComp: FigmaIcon,
                  iconDesc: 'Figma',
                },
              ]}
              projLinks={{ githubLink: '/', liveLink: '/' }}
            />
            <div className="project-img">
              <img className="mac" src={AppleIMac} alt={'weekday'} />
              <img className="proj" src={ShortenerGig} alt={'weekday'} />
            </div>
          </Flex>
          <Flex jc="space-between" style={{ position: 'relative' }}>
            <CodeEditor
              code={projects[0]}
              color={Styles.twitterBlue}
              icons={[
                {
                  IconComp: ReactIcon,
                  iconDesc: 'React',
                },
                {
                  IconComp: JSIcon,
                  iconDesc: 'JS',
                },
                {
                  IconComp: FigmaIcon,
                  iconDesc: 'Figma',
                },
              ]}
              projLinks={{ githubLink: '/', liveLink: '/' }}
            />
            <div className="project-img">
              <img className="mac" src={AppleIMac} alt={'weekday'} />
              <img className="proj" src={ShortenerGig} alt={'weekday'} />
            </div>
          </Flex>
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;
