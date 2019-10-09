import { CartActionTypes } from "./cartTypes";
import cartReducer from "./cartReducer";

const initialState = {
  hidden: true,
  cartItems: []
};
const mockItem = {
  MPN: 1111,
  quantity: 3
};
const mockItem2 = {
  MPN: 2222,
  quantity: 1
};
const mockPrevState = {
  hidden: true,
  cartItems: [mockItem, mockItem2]
};

describe("cartReducer tests", () => {
  it("Initial state returned", () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it("toggleHidden action toggles hidden", () => {
    expect(
      cartReducer(initialState, { type: CartActionTypes.TOGGLE_CART_HIDDEN })
        .hidden
    ).toBe(false);
  });

  it("addToCart action increases quantity by 1", () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.ADD_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(4);
  });

  it("removeItemFromCart action decreases quantity by 1", () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it("CLEAR_ITEM_FROM_CART clears item from cart", () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem
      }).cartItems.includes(item => item.MPN === 1111)
    ).toBe(false);
  });
});
