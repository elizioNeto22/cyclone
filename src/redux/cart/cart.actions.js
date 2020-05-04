import {cartActionTypes} from './cart.types'

export const toggleCart = () => ({
  type: cartActionTypes.HIDDEN_CART,
})

export const addCartItem = (itemToAdd) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: itemToAdd
})
