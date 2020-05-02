import React from 'react'
import {connect} from 'react-redux'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg'
import {toggleCart} from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCart}) => (
  <div className="cart-icon" onClick={(e) => toggleCart()}>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = {
  toggleCart,
}

export default connect(null, mapDispatchToProps)(CartIcon)
