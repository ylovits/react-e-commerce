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

export const removeItemFromCart = (cartItems, removedItem) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.MPN === removedItem.MPN
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.MPN !== removedItem.MPN);
  }
  return cartItems.map(cartItem =>
    cartItem.MPN === removedItem.MPN
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
