import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ProductTeaser from "../../components/ProductTeaser/ProductTeaser.js";
import NotFound from "../NotFound/NotFound";
import "./Category.scss";

const Category = ({ match }) => {
  const [products, setProducts] = useState([]);
  const productsjson = require("../../fakeapi/products.json");

  useEffect(() => {
    var categoryProds = productsjson.filter(product =>
      product.category
        .toLowerCase()
        .includes(match.params.categoryId.toLowerCase())
    );
    setProducts(categoryProds);
    // eslint-disable-next-line
  }, []);

  const categExists = categName => {
    let i = null;
    for (i = 0; productsjson.length > i; i += 1) {
      if (productsjson[i].category.toLowerCase() === categName) {
        return true;
      }
    }
    return false;
  };

  if (categExists(match.params.categoryId.toLowerCase())) {
    return (
      <Fragment>
        <h1 className="mb-4 mt-2">{match.params.categoryId.toUpperCase()}</h1>
        <div className="row category">
          {products.map(product => {
            return <ProductTeaser key={product.MPN} product={product} />;
          })}
        </div>
      </Fragment>
    );
  } else {
    return <NotFound />;
  }
};

export default withRouter(Category);
