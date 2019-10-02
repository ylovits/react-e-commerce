import React, { Fragment, Component } from "react";
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
      <Fragment>
        <div className="row">
          {this.state.categories.map(({ name, imgUrl, columns }, i) => {
            return (
              <BannerItem
                key={i}
                name={name}
                imgUrl={imgUrl}
                columns={columns}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Banners;
