import React from "react";
import { Link } from "react-router-dom";
import "./ProductTeaser.scss";

const ProductTeaser = ({ product }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4 product-teaser">
      <Link to={`/${product.category.toLowerCase()}/${product.MPN}`}>
        <div className="bg-white shadow-sm pb-4 pt-4 ">
          <div className="product-teaser-inner">
            <img src={product.imgUrl} alt="" />
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
