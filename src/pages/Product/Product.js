import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import "./Product.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

const Product = ({ match, addItem }) => {
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

  const activeImage = document.querySelector(".product-image .active");
  const changeImage = e => {
    activeImage.src = e.target.src;
  };

  if (productExists(match.params.productMPN)) {
    return (
      <Fragment>
        <div className="row product mb-4 mt-4">
          <div className="col-sm-12 col-md-7">
            <div className="product-gallery">
              <div className="product-image">
                <img className="active" src={product.imgUrl} alt="" />
              </div>
              <ul className="image-list">
                {product.img2Url && (
                  <Fragment>
                    <li className="image-item">
                      <img onClick={changeImage} src={product.imgUrl} alt="" />
                    </li>

                    <li className="image-item">
                      <img onClick={changeImage} src={product.img2Url} alt="" />
                    </li>
                  </Fragment>
                )}
                {product.img3Url && (
                  <li className="image-item">
                    <img onClick={changeImage} src={product.img3Url} alt="" />
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <h1>{product.name}</h1>
            <span>MPN: {product.MPN}</span>
            <br />
            <span>Category: {product.category}</span>
            <h2 className="mt-3">{product.price}€</h2>
            <div className="description">{product.description}</div>
            <button onClick={() => addItem(product)} className="add-to-cart">
              Add To Cart
            </button>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <NotFound />;
  }
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Product)
);
