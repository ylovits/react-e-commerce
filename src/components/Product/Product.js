import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import "./Product.scss";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const productsjson = require("../../fakeapi/products.json");

  useEffect(() => {
    var singleproduct = productsjson.filter(product =>
      product.MPN.includes(match.params.productMPN)
    )[0];
    setProduct(singleproduct);
    // eslint-disable-next-line
  }, []);

  const productExists = productMpn => {
    let i = null;
    for (i = 0; productsjson.length > i; i += 1) {
      if (productsjson[i].MPN === productMpn) {
        return true;
      }
    }
    return false;
  };

  if (productExists(match.params.productMPN)) {
    return (
      <Fragment>
        <div className="row product mb-4">
          <div className="col-md-6">
            <img src={product.imgUrl} alt="" />
          </div>
          <div className="col-md-6">
            <h1 className="h3 mb-4 mt-2">{product.name}</h1>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <NotFound />;
  }
};

export default withRouter(Product);
