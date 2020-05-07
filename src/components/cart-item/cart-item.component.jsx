import React from 'react'
// import {connect} from 'react-redux'

import './cart-item.styles.scss'

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span className="item-name">{name}</span>
      <span className="item-price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
)

// const mapStateToProps = ({cart: {cartItems}}) => ({
//   cartItems,
// })

// export default connect(mapStateToProps)(CartItem)
export default CartItem
