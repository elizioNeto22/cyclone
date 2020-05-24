import React from 'react'
import { connect } from 'react-redux'

import { selectShopCollection } from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection_item/collection_item_component'

import './collection-page.styles.scss'

const CollectionPage = ({ shopCollection }) => {
  const { items, title } = shopCollection
  const renderCollectionItem = () =>
    items.map((item) => <CollectionItem key={item.id} item={item} />)

  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">{renderCollectionItem()}</div>
    </div>
  )
}

/*
Below we include mapStateToProps second argument, called ownProps which is
the props of the component that connect are wrapping (CollectionPage) 
including match object that comes from the Route(in shop_component) that is passing CollectionPage   
*/

const mapStateToProps = (state, ownProps) => ({
  shopCollection: selectShopCollection(ownProps.match.params.collectionId)(
    state
  ),
})

export default connect(mapStateToProps)(CollectionPage)
