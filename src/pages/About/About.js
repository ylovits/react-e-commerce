import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const AppMarkdown = require("../../README.md");

class About extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentDidMount() {
    fetch(AppMarkdown)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }
  render() {
    const { markdown } = this.state;
    return (
      <div className="bg-dark text-light about mb-4 p-4">
        <ReactMarkdown source={markdown} />
      </div>
    );
  }
}

export default About;
