import React, { useState, useEffect } from "react";
import ProductTeaser from "../../components/ProductTeaser/ProductTeaser.js";
import NotFound from "../NotFound/NotFound";

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
      <div className="container banners mt-4 mb-4">
        <div className="row">
          {products.map(product => {
            console.log(product);
            return <ProductTeaser key={product.MPN} product={product} />;
          })}
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Category;
