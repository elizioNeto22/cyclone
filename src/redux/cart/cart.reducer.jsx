import { cartActionTypes } from './cart.types'
import { addItem, clearItemFromCart, removeItem } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [
    {
      id: 3,
      name: 'Brown Cowboy',
      imageUrl: '/images/shop-img/hats/brown-cowboy.png',
      price: 35,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Blue Beanie',
      imageUrl: '/images/shop-img/hats/blue-beanie.png',
      price: 18,
      quantity: 1,
    },
    {
      id: 1,
      name: 'Brown Brim',
      imageUrl: '/images/shop-img/hats/brown-brim.png',
      price: 25,
      quantity: 1,
    },
  ],
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      }

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(action.payload, state.cartItems),
      }
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(action.payload, state.cartItems),
      }

    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(action.payload, state.cartItems),
      }

    default:
      return state
  }
}

export default cartReducer
