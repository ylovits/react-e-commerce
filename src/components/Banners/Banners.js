import React, { Component } from "react";
import BannerItem from "../BannerItem/BannerItem";
import "./Banners.scss";

class Banners extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    var data = require("../../fakeapi/categories.json");
    this.setState({ categories: data });
  }

  render() {
    return (
      <div className="container banners">
        <div className="row">
          {this.state.categories.map((i, props) => {
            return <BannerItem key={i} {...props} />;
          })}
        </div>
      </div>
    );
  }
}

export default Banners;
