import React, { Fragment, Component } from "react";
import BannerItem from "../BannerItem/BannerItem";
import Spinner from "../Spinner/Spinner";
import "./Banners.scss";

class Banners extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      "https://us-central1-let-s-sweat.cloudfunctions.net/app/api/categories"
    )
      .then(response => response.json())
      .then(data => this.setState({ categories: data, loading: false }));
    // should be await async when the api is real http call, not setTimeout
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
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
