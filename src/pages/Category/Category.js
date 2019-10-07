import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import ProductTeaser from "../../components/ProductTeaser/ProductTeaser.js";
import "./Category.scss";
import NotFound from "../NotFound/NotFound";
import axios from "axios";

const Category = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsjson, setJson] = useState([]);

  const getCatProducts = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://us-central1-let-s-sweat.cloudfunctions.net/app/api/products"
    );
    setProducts(
      res.data.filter(product =>
        product.category
          .toLowerCase()
          .includes(match.params.categoryId.toLowerCase())
      )
    );
    setJson(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getCatProducts();
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

  if (loading) {
    return <Spinner />;
  }

  if (categExists(match.params.categoryId.toLowerCase())) {
    return (
      <Fragment>
        <div className="row category">
          {products.map(item => {
            return <ProductTeaser key={item.MPN} item={item} />;
          })}
        </div>
      </Fragment>
    );
  } else {
    return <NotFound />;
  }
};

export default withRouter(Category);
