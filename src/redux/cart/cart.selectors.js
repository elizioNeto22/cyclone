import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
)

// const selectCart = state => state.cart.cartItems

// export const selectCartItems = createSelector(
//   selectCart,
//   cartItems => cartItems.reduce((acc, {quantity}) => acc + quantity, 0)
// )
