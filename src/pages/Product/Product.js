import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Image from "../../components/Image/Image";
import "./Product.scss";
import Spinner from "../../components/Spinner/Spinner";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import axios from "axios";

const Product = ({ match, addItem }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://us-central1-let-s-sweat.cloudfunctions.net/app/api/product/${match.params.productMPN}`
    );
    setProduct(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const productExists = productMpn => {
    if (product.MPN === productMpn) {
      return true;
    }
    return false;
  };
  const changeImage = e => {
    e.preventDefault();
    const activeImage = document.querySelector(".product-image>img");
    activeImage.src = e.target.src;
  };

  if (loading) {
    return <Spinner />;
  }

  if (productExists(match.params.productMPN)) {
    return (
      <Fragment>
        <div className="row product mb-4 mt-4">
          <div className="col-sm-12 col-md-7">
            <div className="product-gallery">
              <div className="product-image">
                <Image src={product.imgUrl} alt="" />
              </div>
              <ul className="image-list row">
                {product.img2Url && (
                  <Fragment>
                    <li className="image-item col-4 p-2 mt-2 mr-0 image-item">
                      <Image
                        changeImage={changeImage}
                        src={product.imgUrl}
                        alt=""
                      />
                    </li>

                    <li className="image-item col-4 p-2 mt-2 mr-0 image-item">
                      <Image
                        changeImage={changeImage}
                        src={product.img2Url}
                        alt=""
                      />
                    </li>
                  </Fragment>
                )}
                {product.img3Url && (
                  <li className="image-item col-4 p-2 mr-0 mt-2 image-item">
                    <Image
                      changeImage={changeImage}
                      src={product.img3Url}
                      alt=""
                    />
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
            <button onClick={() => addItem(product)} className="styled-button">
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
