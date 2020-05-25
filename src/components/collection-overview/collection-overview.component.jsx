import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopDataArray } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../collection_preview/collection_preview_component'

import './collection-overview.styles.scss'

const CollectionOverview = ({ shopData }) => (
  <div className="collections-overview">
    {shopData.map(({ id, ...otherCollections }) => (
      <CollectionPreview key={id} {...otherCollections} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  shopData: selectShopDataArray,
})

export default connect(mapStateToProps)(CollectionOverview)
