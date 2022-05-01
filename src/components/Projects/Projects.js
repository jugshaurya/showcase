import React from 'react';

import projectDetails from '../../resources/projectsDetails';
import CodeEditor from './CodeEditor';

import { Container, FloatingImage } from '../css-in-js/shared';
import Title from '../shared/Title';
import {
  ProjectSection,
  ProjectsShowcase,
  ProjectShowcase,
  MacDemo,
  Mac,
  Gif,
} from './Projects.styles';

import AppleIMac from '../../static/AppleiMac.png';
import RocketIcon from '../../static/icons/rocket.svg';
import Rocket3d from '../../static/icons/rocket3d.svg';
import ProjectsBG from '../../static/patterns/bg-projects.png';

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <Container>
        <Title IconComp={RocketIcon} iconDesc={'Projects'} w={'36'} h={'36'} />
        <ProjectsShowcase>
          {projectDetails.map((project, index) => (
            <ProjectShowcase key={project.id}>
              {/* Background */}
              {index !== projectDetails.length - 1 && (
                <FloatingImage
                  src={ProjectsBG}
                  alt={'Wallpaper'}
                  t={[
                    '-150px',
                    '-150px',
                    '-150px',
                    '-150px',
                    '-150px',
                    '-150px',
                    '-150px',
                  ]}
                  l={['50%', '50%', '50%', '50%', '0%', '0%', '0%']}
                  zi={'-3'}
                />
              )}
              {/* Rocket */}
              <FloatingImage
                src={Rocket3d}
                style={{ transform: 'rotate(180deg)' }}
                alt={'Wallpaper3'}
                t={['0', '0', '0', '0', '0', '0', '0']}
                l={['-44%', '-44%', '-45%', '-50%', '-82%', '-82%', '-82%']}
              />
              {/* Editor */}
              <CodeEditor
                code={project.description}
                color={project.color}
                icons={project.icons}
                projLinks={{
                  githubLink: project.githubLink,
                  liveLink: project.liveLink,
                }}
                project_name={project.name}
              />
              {/* Gif */}
              <MacDemo
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-delay="300"
              >
                <Mac src={AppleIMac} alt={project.name} />
                <Gif src={project.gif} alt={project.name} />
              </MacDemo>
            </ProjectShowcase>
          ))}
        </ProjectsShowcase>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
