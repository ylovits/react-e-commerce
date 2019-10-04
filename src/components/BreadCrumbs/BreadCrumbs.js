import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.scss";

const BreadCrumbs = ({ match }) => {
  const productsjson = require("../../fakeapi/products.json");
  const productName = productsjson.filter(product =>
    product.MPN.includes(match.params.productMPN)
  )[0];

  return (
    <div className="bg-light pl-1 pr-1 mb-3 breadcrumbs">
      <div className="grid second-nav">
        <div className="column-xs-12">
          <nav>
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {match.params.categoryId && (
                <li className="breadcrumb-item">
                  <Link to={`/${match.params.categoryId}`}>
                    {match.params.categoryId}
                  </Link>
                </li>
              )}
              {match.path === "/account" && (
                <li className="breadcrumb-item active">MY ACCOUNT</li>
              )}
              {match.path === "/signin" && (
                <li className="breadcrumb-item active">SIGN IN</li>
              )}
              {match.path === "/about" && (
                <li className="breadcrumb-item active">ABOUT</li>
              )}
              {match.params.productMPN && (
                <li className="breadcrumb-item active">{productName.name}</li>
              )}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
