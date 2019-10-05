import { CartActionTypes } from "./cartTypes";
import { addToCart } from "./cartUtils";

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
    default:
      return state;
  }
};

export default cartReducer;
