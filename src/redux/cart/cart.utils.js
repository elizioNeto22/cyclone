export const addItem = (itemToAdd, cartList) => {
  const existingCartItem = cartList.find(({ id }) => itemToAdd.id === id)

  if (existingCartItem) {
    return cartList.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartList, { ...itemToAdd, quantity: 1 }]
}

export const clearItemFromCart = (itemToClear, cartList) =>
  cartList.filter(({ id }) => id !== itemToClear.id)

export const removeItem = (itemToRemove, cartList) => {
  const existingCartItem = cartList.find(
    (cartItem) => itemToRemove.id === cartItem.id
  )

  if (existingCartItem.quantity === 1) {
    return cartList.filter(({ id }) => id !== itemToRemove.id)
  }

  return cartList.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
