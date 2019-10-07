import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeBtn from "../../components/StripeBtn/StripeBtn";
import "./Checkout.scss";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cartSelectors";
import "./Checkout.scss";

const Checkout = ({ cartItems, cartTotal }) => {
  return (

      <div className="checkout container">
        <div className="checkout-header pb-2 border-bottom justify-content-md-center row">
          <div className="checkout-header-item col-md-3">
            <span>Product</span>
          </div>
          <div className="checkout-header-item col-md-3">
            <span>Quantity</span>
          </div>
          <div className="checkout-header-item col-md-3">
            <span>Price</span>
          </div>
          <div className="checkout-header-item col-md-1">
            <span>Remove</span>
          </div>
        </div>
        <div className="checkout-body pt-2">
          {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.MPN} cartItem={cartItem} />
          ))}
        </div>
        <div className="checkout-footer pb-2 justify-content-md-center row">
          <span className="text-right col-md-12">TOTAL: {cartTotal}€</span>
        </div>
        <div className="text-center">
          <h5 className="text-danger">Warning! Test Site. Don't use a real card for payment</h5>
          <p className="text-danger">If you wanna test the payment please use the following test card:</p>
          <p className="text-danger">4242 4242 4242 4242 - Exp: 01-/20 - CW: 123</p>
        </div>
        <div className="text-center">
          <StripeBtn price={cartTotal} data-toggle="modal" data-target="#paymentModal"/>
        </div>
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
