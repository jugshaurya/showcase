import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';

import { Icon } from '../css-in-js/shared';

import {
  EditorLayout,
  Button,
  ProjectLinks,
  ProjectTechStack,
  EditorBottom,
  EditorStyles,
  EditorTop,
  EditorTitle,
  Dot,
} from './CodeEditor.styles';

import GithubGradIcon from '../../static/icons/githubgrad.svg';
import GoLiveLinksIcon from '../../static/icons/live.svg';

import './codeHighlighting.scss';
import { motion } from 'framer-motion';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: this.props.code, showEditor: false };
  }

  toggleEditor = () => {
    this.setState((prevState) => ({
      showEditor: !prevState.showEditor,
    }));
  };

  render() {
    const {
      color,
      icons,
      project_name,
      projLinks: { githubLink, liveLink },
    } = this.props;

    return (
      <EditorLayout
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <EditorTop>
          <EditorTitle color={color}>{project_name}</EditorTitle>
          <Dot className="dot yellow"> - </Dot>
          <Dot
            className="dot green"
            onClick={this.toggleEditor}
            as={motion.div}
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{
              type: 'spring',
              damping: 10,
              stiffness: 100,
              duration: 2,
              repeat: Infinity,
            }}
          >
            {' '}
            ~{' '}
          </Dot>
          <Dot className="dot red"> x </Dot>
        </EditorTop>

        <EditorStyles
          color={color}
          className={this.state.showEditor ? 'show-editor' : 'hide-editor'}
        >
          <Editor
            value={this.state.code}
            onValueChange={(code) => this.setState({ code })}
            highlight={(code) => highlight(code, languages.json)}
            padding={10}
            style={{
              fontSize: 16,
              width: '100%',
            }}
          />
        </EditorStyles>

        <EditorBottom>
          <ProjectTechStack>
            {icons.map(({ icon, iconDesc }, index) => (
              <Icon
                key={index}
                w="32"
                h="32"
                m="0 10px"
                src={icon}
                alt={iconDesc}
                title={iconDesc}
              />
            ))}
          </ProjectTechStack>
          <ProjectLinks>
            <Button
              as="a"
              href={githubLink}
              color={color}
              target="_blank"
              onClick={() => window.open(githubLink)}
            >
              <Icon
                src={GithubGradIcon}
                alt="githubIcon"
                w="24"
                h="24"
                m="0 10px 0 0"
              />
              Github Code
            </Button>
            <Button
              as="a"
              href={liveLink}
              color={color}
              target="_blank"
              onClick={() => window.open(liveLink)}
            >
              <Icon
                src={GoLiveLinksIcon}
                alt="golive"
                w="24"
                h="24"
                m="0 10px 0 0"
              />
              Go Live
            </Button>
          </ProjectLinks>
        </EditorBottom>
      </EditorLayout>
    );
  }
}

export default CodeEditor;
