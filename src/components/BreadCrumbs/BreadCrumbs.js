import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.scss";
import axios from "axios";

const BreadCrumbs = ({
  match: {
    params: { productMPN, categoryId },
    path
  }
}) => {
  const [productName, setProductName] = useState({});
  const [loading, setLoading] = useState(true);
  const [productsjson, setJson] = useState([]);

  const getProductName = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://us-central1-let-s-sweat.cloudfunctions.net/app/api/products"
    );
    setProductName(
      res.data.filter(product => product.MPN.includes(productMPN))[0]
    );
    setJson(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getProductName();
    // eslint-disable-next-line
  }, [productMPN]);

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
    return null;
  } else {
    return (
      <div className="bg-light pl-1 pr-1 mb-3 breadcrumbs">
        <div className="grid second-nav">
          <div className="column-xs-12">
            <nav>
              <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                {categoryId &&
                  (categExists(categoryId.toLowerCase()) ? (
                    <li className="breadcrumb-item">
                      <Link to={`/${categoryId}`}>{categoryId}</Link>
                    </li>
                  ) : (
                    <li className="breadcrumb-item active">
                      Category Not Found
                    </li>
                  ))}
                {productMPN &&
                  (productName ? (
                    <li className="breadcrumb-item active">
                      {productName.name}
                    </li>
                  ) : (
                    <li className="breadcrumb-item active">
                      Product Not Found
                    </li>
                  ))}
                {path === "/account" && (
                  <li className="breadcrumb-item active">MY ACCOUNT</li>
                )}
                {path === "/signin" && (
                  <li className="breadcrumb-item active">SIGN IN</li>
                )}
                {path === "/about" && (
                  <li className="breadcrumb-item active">ABOUT</li>
                )}
                {path === "/checkout" && (
                  <li className="breadcrumb-item active">CHECKOUT</li>
                )}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    );
  }
};

export default BreadCrumbs;
