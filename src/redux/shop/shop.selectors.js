import { createSelector } from 'reselect'

/*
 here we are mapping the the string value(from the match params) to the respective id
 because the shopData the collection id is a number so this is to convert params str to number 
 so is like when we get an match.params === sneakers
 selectCollection(sneakers) => find => collection.id(is an number) === COLLECTION_ID_MAP[2]
  this will return the items in the sneakers collection
 */

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

export const selectShopCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (shopData) =>
    shopData.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
