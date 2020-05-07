import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg'
import { toggleCart } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCart, cartIconCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartIconCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartIconCount: selectCartItemsCount,
})

const mapDispatchToProps = {
  toggleCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
