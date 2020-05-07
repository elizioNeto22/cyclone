/* 
  Two types of selectors we can write
  1• Input Selector → fcuntion tht gets the whole state and just return a slice of it
  2• Output Selector → that does use input selectors and createSelector to build themselves 

  Use selectors when want to do something with the a part of the state and don't want to rerender whenever the state change
  even if have nothing todo with the component.

  createSelector (1º array of input selectors, 2º function that will return the value we want out of the selecetor)
  o arg do 2º will be each output of the 1º array
*/

import { createSelector } from 'reselect'

// 1• Input Selector
const selectCart = (state) => state.cart

// 2• Output Selector
export const selectHiddenCart = createSelector([selectCart], (cart) => cart.hidden)

// 2• Output Selector
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

//2• Output Selector
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
)
// const selectCart = state => state.cart.cartItems

// export const selectCartItems = createSelector(
//   selectCart,
//   cartItems => cartItems.reduce((acc, {quantity}) => acc + quantity, 0)
