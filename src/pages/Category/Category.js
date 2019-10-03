import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import ProductTeaser from "../../components/ProductTeaser/ProductTeaser.js";
import "./Category.scss";

const Category = ({ match, history }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsjson = require("../../fakeapi/products.json");

  useEffect(() => {
    setLoading(true);
    var categoryProds = productsjson.filter(product =>
      product.category
        .toLowerCase()
        .includes(match.params.categoryId.toLowerCase())
    );
    setProducts(categoryProds);
    // should be await async when the api is real http call, not setTimeout
    setTimeout(() => setLoading(false), 1500);
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
    if (loading) {
      return <Spinner />;
    }
    return (
      <Fragment>
        <div className="row category">
          {products.map(product => {
            return <ProductTeaser key={product.MPN} product={product} />;
          })}
        </div>
      </Fragment>
    );
  } else {
    history.push("/404");
  }
};

export default withRouter(Category);
