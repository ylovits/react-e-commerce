import { addToCart, removeItemFromCart } from "./cartUtils";

const mockItem = {
  MPN: 1111,
  quantity: 3
};
const mockItem2 = {
  MPN: 2222,
  quantity: 1
};
const mockItem3 = {
  MPN: 3333
};
const mockCartItems = [mockItem, mockItem2];

describe("cartUtilss tests", () => {
  it("addToCart adds new item", () => {
    expect(addToCart(mockCartItems, mockItem3)[2].quantity).toBe(1);
  });

  it("addToCart adds existing item", () => {
    expect(addToCart(mockCartItems, mockItem)[0].quantity).toBe(4);
  });

  it("removeItemFromCart removes 1 from existing item with more than 1 quantity", () => {
    expect(removeItemFromCart(mockCartItems, mockItem)[0].quantity).toBe(2);
  });

  it("removeItemFromCart removes item with more 1 quantity", () => {
    expect(
      removeItemFromCart(mockCartItems, mockItem2).includes(
        item => item.MPN === 1111
      )
    ).toBe(false);
  });
});
