import { cartActionTypes } from './cart.types'

export const toggleCart = () => ({
  type: cartActionTypes.HIDDEN_CART,
})

export const addItem = (itemToAdd) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: itemToAdd,
})

export const clearItemFromCart = (itemToDelete) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: itemToDelete,
})

export const removeItem = (itemToRemove) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: itemToRemove,
})
