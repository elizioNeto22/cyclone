import { createSelector } from 'reselect'

const selectState = (state) => state.shop

export const selectShopData = createSelector(
  [selectState],
  (shop) => shop.shopData
)
