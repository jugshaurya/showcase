import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import './editor.scss';

const code = `
function sd(a, b){
  return a+b;
}
`;
class CodeEditor extends React.Component {
  state = { code: this.props.code };
  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={(code) => this.setState({ code })}
        highlight={(code) => highlight(code, languages.json)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    );
  }
}

export default CodeEditor;
