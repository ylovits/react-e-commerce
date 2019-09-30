import React from "react";
import BannerItem from "../BannerItem/BannerItem";

const Banners = () => {
  return (
    <div className="row">
      <BannerItem columns="6" title="Category 1" />
      <BannerItem columns="6" title="Category 2" />
      <BannerItem columns="4" title="Category 3" />
      <BannerItem columns="4" title="Category 4" />
      <BannerItem columns="4" title="Category 5" />
    </div>
  );
};

export default Banners;
