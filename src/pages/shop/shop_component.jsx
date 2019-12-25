/* eslint-disable no-sequences */

// import from ''
import React from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection_preview/collection_preview_component'
// import './shop_styles.scss'

class ShopPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      collection: SHOP_DATA
    }
  }

  render(){  
    return(
      <div className="shop-page">
        {this.state.collection.map(({id, ...otherCollections})=> (
      <CollectionPreview key={id} {...otherCollections} />
    ))}
      </div>
    )
  }
}

export default ShopPage

