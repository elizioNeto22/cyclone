import React from 'react'
// import {Route, Link} from 'react-router-dom'
import CollectionItem from '../../components/collection_item/collection_item_component'
import './collection_preview_styles.scss'

const CollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
      .filter((item, index)=> index < 4)
      .map(({id, ...otherItems})=> (
        <CollectionItem key={id} {...otherItems} />
        ))}
      </div>
  </div>
)

export default CollectionPreview
