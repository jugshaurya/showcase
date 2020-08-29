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

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: this.props.code, showEditor: false };
  }

  toggleEditor = () => {
    console.log('sdf');
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
      <EditorLayout>
        <EditorTop>
          <EditorTitle color={color}>{project_name}</EditorTitle>
          <Dot className="dot yellow"> - </Dot>
          <Dot className="dot green" onClick={this.toggleEditor}>
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
            {icons.map(({ icon, iconDesc }) => (
              <Icon
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
            <Button as="a" href={githubLink} color={color}>
              <Icon
                src={GithubGradIcon}
                alt="githubIcon"
                w="24"
                h="24"
                m="0 10px 0 0"
              />
              Github Code
            </Button>
            <Button as="a" href={liveLink} color={color}>
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
