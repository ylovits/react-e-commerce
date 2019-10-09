import { CartActionTypes } from "./cartTypes";
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart
} from "./cartActions";

const mockItem = {
  MPN: 1
};

describe("cartActions tests", () => {
  it("toggleHidden action created", () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });

  it("addItem action created", () => {
    const action = addItem(mockItem);
    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });

  it("removeItem action created", () => {
    const action = removeItem(mockItem);
    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });

  it("clearItemFromCart action created", () => {
    const action = clearItemFromCart(mockItem);
    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});
