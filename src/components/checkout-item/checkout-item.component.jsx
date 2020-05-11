import React from 'react'

import './checkout-item.styles.scss'

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`${name} checkout item`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckoutItem
