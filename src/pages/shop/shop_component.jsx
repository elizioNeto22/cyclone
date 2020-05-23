import React from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection-page.component'

/* 
!!!! The withRouter wasn't needed because the ShopPage is being nested in a Route on the App.js
So Route automatically passes those three obj(history, location, match) as props
*/
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      {/* 
        :categoryId → allows us to access this categoryId as parameter on the match object 
      */}
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
