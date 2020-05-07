import {cartActionTypes} from './cart.types'
import {addItemToCart} from './cart.utils'


const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}
const cartReducer = (state = INITIAL_STATE, action) => {

  switch(action.type){
    case cartActionTypes.HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    case cartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(action.payload, state.cartItems),
      }
    default:
      return state
  }
}

export default cartReducer