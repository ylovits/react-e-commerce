import React from "react";

const BannerItem = ({ name, columns, price, image }) => {
  return (
    <div className={`col-md-${columns}`}>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <span>Shop Now</span>
    </div>
  );
};

export default BannerItem;
