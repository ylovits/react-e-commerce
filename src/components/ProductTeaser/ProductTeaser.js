import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import "./ProductTeaser.scss";

const ProductTeaser = ({ item }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4 product-teaser">
      <Link to={`/${item.category.toLowerCase()}/${item.MPN}`}>
        <div className="bg-white shadow-sm pb-4 pt-4 ">
          <div className="product-teaser-inner">
            <Image src={item.imgUrl} />
            <div className="centered">
              <span>Shop Now</span>
            </div>
          </div>
          <p className="pl-3 pr-3 name text-center">{item.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductTeaser;
