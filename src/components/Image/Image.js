import React, { Component } from "react";

export default class Image extends Component {
  constructor() {
    super();
    this.state = {};
    this.fallback = () => {
      if (
        "https://firebasestorage.googleapis.com/v0/b/let-s-sweat.appspot.com/o/images%2Ffallback.jpg?alt=media&token=092edb2a-994f-498c-afd4-89904332e735"
      ) {
        this.setState({ failed: true });
      }
    };
  }
  render() {
    if (this.state.failed) {
      return (
        <img
          onClick={this.props.changeImage}
          src="https://firebasestorage.googleapis.com/v0/b/let-s-sweat.appspot.com/o/images%2Ffallback.jpg?alt=media&token=092edb2a-994f-498c-afd4-89904332e735"
          alt=""
        />
      );
    } else {
      return (
        <img
          src={this.props.src}
          onClick={this.props.changeImage}
          onError={this.fallback}
          alt=""
        />
      );
    }
  }
}
