import React from "react";
import "./ProductTeaser.scss";

const ProductTeaser = ({ product }) => {
  return (
    <div className="col-md-3 product-teaser">
      <div className="border pb-4 pt-4 ">
        <div className="product-teaser-inner">
          <img src={product.imgUrl} alt="" />
          <div className="centered">
            <span>Shop Now</span>
          </div>
        </div>
        <p className="name text-center">{product.name}</p>
      </div>
    </div>
  );
};

export default ProductTeaser;
