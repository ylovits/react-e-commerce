export const addToCart = (cartItems, addedItem) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.MPN === addedItem.MPN
  );
  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem.MPN === addedItem.MPN
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...addedItem, quantity: 1 }];
};
