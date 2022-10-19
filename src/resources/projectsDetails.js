import ReactIcon from '../static/icons/react.svg';
import JSIcon from '../static/icons/js.svg';
import ReduxIcon from '../static/icons/redux.svg';
import GatsbyIcon from '../static/icons/gatsby.svg';
import FigmaIcon from '../static/icons/figma.svg';
import NodeIcon from '../static/icons/node.svg';
import GraphqlIcon from '../static/icons/graphql.svg';
import SassIcon from '../static/icons/sass.svg';

// Gifs
import WeekdayGif from '../static/projects/weekday.gif';
import TrelloGif from '../static/projects/trello.gif';
import ClosetGif from '../static/projects/closet.gif';
import ShowcaseGif from '../static/projects/showcase.gif';
import CovidGif from '../static/projects/covid.gif';
import ShortenerGif from '../static/projects/urlshortner.gif';
import MergeVideosImg from '../static/projects/mergevideos.png';
import * as Styles from '../components/css-in-js/theme';

const projectDetails = [
  {
    id: 'project_1',
    color: Styles.twitterBlue,
    name: 'Productive Weekday',
    icons: [
      {
        icon: JSIcon,
        iconDesc: 'Javascript',
      },
      {
        icon: ReactIcon,
        iconDesc: 'React',
      },
      {
        icon: ReduxIcon,
        iconDesc: 'Redux',
      },
      {
        icon: NodeIcon,
        iconDesc: 'Node',
      },
    ],
    githubLink: 'https://github.com/jugshaurya/productive-weekday',
    liveLink: 'https://productive-weekday.netlify.com',
    gif: WeekdayGif,
    description: `
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
    }`,
  },
  {
    id: 'project_2',
    color: Styles.darkgreen,
    name: 'Trello Clone',
    icons: [
      {
        icon: JSIcon,
        iconDesc: 'Javascript',
      },
      {
        icon: ReactIcon,
        iconDesc: 'React',
      },
      {
        icon: ReduxIcon,
        iconDesc: 'Redux',
      },
      {
        icon: NodeIcon,
        iconDesc: 'Node',
      },
    ],
    githubLink: 'https://github.com/jugshaurya/trello-clone',
    liveLink: 'https://clone-trello.now.sh/',
    gif: TrelloGif,
    description: `
    {
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
  },
  {
    id: 'project_3',
    color: Styles.green,
    name: 'Shaurya Showcase',
    icons: [
      {
        icon: ReactIcon,
        iconDesc: 'React',
      },
      {
        icon: GatsbyIcon,
        iconDesc: 'Gatsby',
      },
      {
        icon: FigmaIcon,
        iconDesc: 'Figma',
      },
      {
        icon: SassIcon,
        iconDesc: 'Sass',
      },
      {
        icon: GraphqlIcon,
        iconDesc: 'Graphql',
      },
    ],
    githubLink: 'https://github.com/jugshaurya/showcase',
    liveLink: '#later',
    gif: ShowcaseGif,
    description: `
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
        "Jupyter Notebooks + 
          Medium Posts +
          Mdx"
      ],
      
      "deployed": ["--"]
    }
  `,
  },
  {
    id: 'project_4',
    color: Styles.pink,
    name: 'Closet Goodies',
    icons: [
      {
        icon: ReactIcon,
        iconDesc: 'React',
      },
      {
        icon: NodeIcon,
        iconDesc: 'Node',
      },
      {
        icon: SassIcon,
        iconDesc: 'Sass',
      },
    ],
    githubLink: 'https://github.com/jugshaurya/closetgoodies',
    liveLink: 'https://closet-goodies.firebaseapp.com/',
    gif: ClosetGif,
    description: `
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
  },
  {
    id: 'project_5',
    color: Styles.twitterBlue,
    name: 'Merge Videos',
    icons: [
      {
        icon: JSIcon,
        iconDesc: 'Javascript',
      },
      {
        icon: NodeIcon,
        iconDesc: 'Node',
      },
    ],
    githubLink: 'https://github.com/jugshaurya/merge-videos',
    liveLink: '',
    gif: MergeVideosImg,
    description: `
    {

      "project_name": "Merge Videos",
      
      "description": "😄😄 Merge Videos inside a directory into a single video :) Doesn't matter how deep are they hidden.",
      
      "why?": "Because Saves more than 50% of time wasted moving around and playing videos one by one.",
      
      "tech_used": [
        "Node", 
      ],
      "deployed": [""]
    }
  `,
  },
  {
    id: 'project_6',
    color: Styles.green,
    name: 'Mario Bros Lvl 1',
    icons: [
      {
        icon: JSIcon,
        iconDesc: 'Javascript',
      },
    ],
    githubLink: 'https://github.com/jugshaurya/mario',
    liveLink: '/#',
    gif: ShowcaseGif,
    description: `
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
  },
  {
    id: 'project_7',
    color: Styles.red,
    name: 'Covid19 Visualizer',
    icons: [
      {
        icon: ReactIcon,
        iconDesc: 'React',
      },
      {
        icon: NodeIcon,
        iconDesc: 'Node',
      },
      {
        icon: SassIcon,
        iconDesc: 'Sass',
      },
    ],
    githubLink: 'https://github.com/jugshaurya/covid19app',
    liveLink: 'https://covid19shau.now.sh/',
    gif: CovidGif,
    description: `
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
  },
  {
    id: 'project_8',
    color: Styles.purple,
    name: 'URL Shortener',
    icons: [
      {
        icon: JSIcon,
        iconDesc: 'Javascript',
      },
      {
        icon: NodeIcon,
        iconDesc: 'Node',
      },
    ],
    githubLink: 'https://github.com/jugshaurya/shortener',
    liveLink: 'https://little.now.sh/',
    gif: ShortenerGif,
    description: `
    {

      "project_name": "URL Shortener",
      
      "description": "Creates easy to use short links by giving the long URLs, a unique short name choosen by client/user.",
      
      "why?": "I made this initially because of my need of bookmarking important URLs, but since there were a lot. I decided to build something like bit.ly.",
      
      "tech_used": [
        "Node + Express", 
        "Vanilla JS",
        "handlebars", 
        "MongoDB + moongose", 
      ],

      "deployed": ["now.sh"]
    }
  `,
  },
];

export default projectDetails;
