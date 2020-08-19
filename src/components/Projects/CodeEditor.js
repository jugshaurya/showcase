import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import './editor.scss';
import GithubGradIcon from '../../static/icons/githubgrad.svg';
import GoLiveLinksIcon from '../../static/icons/live.svg';

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

class CodeEditor extends React.Component {
  state = { code: this.props.code };
  render() {
    return (
      <div
        style={{ width: '50%', perspective: '1000px' }}
        className={this.props.className}
      >
        <EditorTop jc="flex-end">
          <Dot className="dot yellow">-</Dot>
          <Dot className="dot green">?</Dot>
          <Dot className="dot red">x</Dot>
        </EditorTop>
        <EditorStyles color={this.props.color} style={{ position: 'relative' }}>
          <Editor
            // readOnly={true}
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

        <EditorBottom jc="space-between">
          <ProjectTechStack>
            {this.props.icons.map(({ IconComp, iconDesc }) => (
              <Icon
                w="24px"
                h="24px"
                m="0 10px"
                src={IconComp}
                alt={iconDesc}
                title={iconDesc}
              />
            ))}
          </ProjectTechStack>
          <ProjectLinks>
            <Button as="a" href={this.props.projLinks.githubLink}>
              <Icon
                src={GithubGradIcon}
                alt="githubIcon"
                w="16px"
                h="16px"
                m="0 5px 0 0"
              />
              Github Code
            </Button>
            <Button as="a" href={this.props.projLinks.liveLink}>
              <Icon
                src={GoLiveLinksIcon}
                alt="golive"
                w="24px"
                h="24px"
                m="0 5px 0 0"
              />
              Live Code
            </Button>
          </ProjectLinks>
        </EditorBottom>
      </div>
    );
  }
}

export default CodeEditor;

const Button = styled(Flex)`
  padding: 5px 10px;
  background: ${Styles.background};
  text-decoration: none;
  border: 1px dashed ${Styles.gray};
  border-radius: 10px;
  background: ${Styles.black20};
  color: ${Styles.white};
  font-family: ${Styles.font_robotomono};
  font-size: ${Styles.text_xxsmall};
  margin: 0 10px;
`;
const ProjectLinks = styled(Flex)`
  /* border: 3px solid red; */
`;
const ProjectTechStack = styled(Flex)`
  /* border: 3px solid green; */
`;

const EditorBottom = styled(Flex)`
  width: 100%;
  border-radius: 25px;
  padding: 5px 10px;
  margin-top: 10px;
`;

const EditorStyles = styled.div`
  * {
    font-family: ${Styles.font_robotomono};
  }
  border: 6px double ${(props) => props.color};
  border-radius: 25px;
  background: ${Styles.background};
  padding: 10px 20px;
  transform: rotateX(0deg);
  transform-style: 'preserve-3d';
  /* &:hover { */
  transform-origin: top center;
  animation: ${windmove} 3s infinite linear;
  /* } */
`;

const EditorTop = styled(Flex)`
  border: 10px double ${Styles.gray};
  width: 100%;
  border-radius: 25px;
  padding: 5px 10px;
  background: ${Styles.background};
`;

const Dot = styled(Flex)`
  font-family: ${Styles.font_normal};
  font-size: ${Styles.text_xxxsmall};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 5px;
  font-weight: bold;
  color: ${Styles.black};
  &.green {
    background: ${Styles.green};
  }
  &.yellow {
    background: ${Styles.yellow};
  }
  &.red {
    background: ${Styles.red};
  }
`;
