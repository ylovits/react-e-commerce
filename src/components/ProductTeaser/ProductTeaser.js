import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductTeaser.scss";

class Image extends Component {
  constructor() {
    super();
    this.state = {};
    this.fallback = () => {
      if (this.props.fallbackSrc) {
        this.setState({ failed: true });
      }
    };
  }

  render() {
    if (this.state.failed) {
      return <img src={this.props.fallbackSrc} alt="" />;
    } else {
      return <img src={this.props.src} onError={this.fallback} alt="" />;
    }
  }
}

const ProductTeaser = ({ product }) => {
  const fallbackUrl = "./images/fallback.jpg";
  return (
    <div className="col-md-3 col-sm-6 mb-4 product-teaser">
      <Link to={`/${product.category.toLowerCase()}/${product.MPN}`}>
        <div className="bg-white shadow-sm pb-4 pt-4 ">
          <div className="product-teaser-inner">
            <Image src={product.imgUrl} fallbackSrc={fallbackUrl} />
            <div className="centered">
              <span>Shop Now</span>
            </div>
          </div>
          <p className="name text-center">{product.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductTeaser;
