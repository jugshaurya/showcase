import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import './editor.scss';

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
      <div>
        <EditorTop>
          <Dot className="dot yellow">-</Dot>
          <Dot className="dot green">?</Dot>
          <Dot className="dot red">x</Dot>
        </EditorTop>
        <EditorStyles color={this.props.color}>
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
      </div>
    );
  }
}

export default CodeEditor;

const EditorStyles = styled.div`
  border: 6px double ${(props) => props.color};
  border-radius: 25px;
  background: ${Styles.background};
  padding: 10px 20px;
  transform: rotateX(0deg);
  /* &:hover { */
  transform-origin: top center;
  /* animation: ${windmove} 1s infinite linear; */
  /* } */

  *{
    font-family: ${Styles.font_robotomono};
  }
`;

const EditorTop = styled.div`
  border: 10px double ${Styles.gray};
  width: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: flex-end;
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
