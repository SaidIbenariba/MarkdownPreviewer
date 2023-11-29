import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import { Marked, marked } from "marked";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Editor />
    </div>
  );
}

const textareaStyle = { 
  width:'200px',
  height:'50px'
}
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <>
        <textarea
          id="editor"
          value={this.state.input}
          onChange={this.handleChange}
          style={textareaStyle}
        ></textarea>
        <Preview output={this.state.input} />
      </>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.MarkupText = this.MarkupText.bind(this);
  }
  MarkupText() {
    var markedText = marked.parse(this.props.output);
    return { __html: markedText };
  }
  render() {
    return (
      <div
        // contentEditable="true"
        id="preview"
        dangerouslySetInnerHTML={this.MarkupText()}
      >
      </div>
    );
  }
}

export default App;
