export const addItemToCart = (itemToAdd, cartList) => {
  const existingCartItem = cartList.find(({id}) => itemToAdd.id === id )

  if(existingCartItem) {
    return cartList.map(cartItem => 
      cartItem.id === itemToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1} 
      : cartItem 
    )
  }

  return [...cartList, {...itemToAdd, quantity: 1}]
} 
