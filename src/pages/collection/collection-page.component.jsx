import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  selectShopCollection,
  selectShopData,
} from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection_item/collection_item_component'

import './collection-page.styles.scss'

const CollectionPage = ({ match, shopCollection }) => {
  const renderItem = () => {
    const collection = shopCollection.find(
      (collection) => collection.id === match.params.collectionId
    )
    return collection.items.map((item) => (
      <CollectionItem key={item.id} item={item} />
    ))
  }
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
      {renderItem()}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
  shopCollection: selectShopCollection,
})

export default connect(mapStateToProps)(CollectionPage)
// export default CollectionPage
