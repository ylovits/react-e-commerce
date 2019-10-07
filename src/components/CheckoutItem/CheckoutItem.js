import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cartActions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  return (
    <div className="row border-bottom checkout-item justify-content-md-center pb-2 mb-2">
      <div className="checkout-item-image col-md-3">
        <img src={cartItem.imgUrl} alt="product" />
      </div>
      <div className="checkout-item-quantity col-md-3">
        <div>
          <span className="cursor-pointer" onClick={() => removeItem(cartItem)}>
            &#10094;
          </span>{" "}
          {cartItem.quantity}{" "}
          <span className="cursor-pointer" onClick={() => addItem(cartItem)}>
            &#10095;
          </span>
        </div>
      </div>
      <div className="checkout-item-price col-md-3">
        <span>{cartItem.price}€</span>
      </div>
      <div className="checkout-item-remove col-md-1">
        <span
          onClick={() => clearItem(cartItem)}
          className="styled-button btn-block text-center bg-danger p-1"
        >
          &#10005;
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
