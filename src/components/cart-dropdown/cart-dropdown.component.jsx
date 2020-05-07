import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom_button/custom_button_component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => {
  const renderDropdownItem = () => cartItems.map((item) => <CartItem id={item.id} item={item} />)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderDropdownItem()}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)
