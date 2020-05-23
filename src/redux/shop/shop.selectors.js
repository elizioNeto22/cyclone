import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}

const selectState = (state) => state.shop

export const selectShopData = createSelector(
  [selectState],
  (shop) => shop.shopData
)

export const selectShopCollection = createSelector(
  [selectShopData],
  (shopData) =>
    shopData.map((collection) => ({
      id: collection.routeName,
      items: collection.items,
    }))
)

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (shopData) =>
    shopData.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
