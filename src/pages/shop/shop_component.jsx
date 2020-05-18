/* eslint-disable no-sequences */

// import from ''
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopData } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection_preview/collection_preview_component'
// import './shop_styles.scss'

const ShopPage = ({ shopData }) => {
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherCollections }) => (
        <CollectionPreview key={id} {...otherCollections} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
})

export default connect(mapStateToProps)(ShopPage)
