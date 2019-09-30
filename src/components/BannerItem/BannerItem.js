import React from "react";
import "./BannerItem.scss";

const BannerItem = ({ name, columns, price, image }) => {
  return (
    <div className={`col-md-${columns} banner-item`}>
      <div className="banner-item-inner">
        <img src={image} alt="" />
        <div className="centered">
          <h2>{name}</h2>
          <span>Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
