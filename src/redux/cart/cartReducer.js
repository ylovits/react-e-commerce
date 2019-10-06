import { CartActionTypes } from "./cartTypes";
import { addToCart, removeItemFromCart } from "./cartUtils";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_ITEM:
      return { ...state, cartItems: addToCart(state.cartItems, payload) };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.MPN !== payload.MPN
        )
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
