import React from "react";
import { withRouter } from "react-router-dom";
import "./BannerItem.scss";

const BannerItem = ({ name, columns, imgUrl, history }) => {
  return (
    <div
      className={`col-md-${columns} banner-item mb-4`}
      onClick={() => history.push(`/${name.toLowerCase()}`)}
    >
      <div className="banner-item-inner">
        <img src={imgUrl} alt="" />
        <div className="centered">
          <h2 className="h5">{name}</h2>
          <span>Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BannerItem);
