import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import {
  selectCartItemsCount,
  selectCartItems,
  selectHidden
} from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import CartItem from "../CartItem/CartItem";
import "./Minicart.scss";

const Minicart = ({
  toggleCartHidden,
  hidden,
  cartItems,
  itemCount,
  history
}) => {
  return (
    <li
      className="nav-item cursor-pointer"
      onMouseEnter={toggleCartHidden}
      onMouseLeave={toggleCartHidden}
    >
      <div onClick={toggleCartHidden}>
        Cart (<span className="item-count">{itemCount}</span>)
      </div>
      {hidden ? null : (
        <div className="minicart bg-white">
          {cartItems.length ? (
            <div className="cart-items container">
              {cartItems.map(item => (
                <CartItem key={item.MPN} item={item} />
              ))}
              <button
                onClick={() => {
                  history.push("/checkout");
                  toggleCartHidden();
                }}
                className="styled-button p-2 text-uppercase"
              >
                Checkout
              </button>
            </div>
          ) : (
            <span className="mb-3">Your Cart Is Empty</span>
          )}
        </div>
      )}
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden,
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Minicart)
);
