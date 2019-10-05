import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import {
  selectCartItemsCount,
  selectCartItems
} from "../../redux/cart/cartSelectors";
import CartItem from "../CartItem/CartItem";
import "./Minicart.scss";

const Minicart = ({ toggleCartHidden, hidden, cartItems, itemCount }) => {
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
          <div className="cart-items container">
            {cartItems.map(item => (
              <CartItem key={item.MPN} item={item} />
            ))}
          </div>
          <button className="btn btn-primary btn-block text-uppercase">
            CHECKOUT
          </button>
        </div>
      )}
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  hidden: state.cart.hidden,
  cartItems: selectCartItems(state),
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Minicart);
