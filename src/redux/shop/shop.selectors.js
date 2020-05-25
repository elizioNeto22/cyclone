import { createSelector } from 'reselect'

const selectState = (state) => state.shop

export const selectShopData = createSelector(
  [selectState],
  (shop) => shop.shopData
)

// this is used to convert our collection objects to an array so the collection-overview
// continue doing his job as already is
export const selectShopDataArray = createSelector(
  [selectShopData],
  (shopData) => Object.keys(shopData).map((key) => shopData[key])
)

export const selectShopCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (shopData) => shopData[collectionUrlParam])
