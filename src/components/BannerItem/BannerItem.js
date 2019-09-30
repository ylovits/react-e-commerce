import React from "react";

const BannerItem = ({ title, columns }) => {
  return (
    <div className={`col-md-${columns}`}>
      <h1>{title}</h1>
      <span>Shop Now</span>
    </div>
  );
};

export default BannerItem;
