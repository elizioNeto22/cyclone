import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom_button/custom_button_component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCart } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const renderDropdownItem = () =>
    cartItems.map((item) => <CartItem key={item.id} item={item} />)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          renderDropdownItem()
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCart())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

/* 
  connect passes DISPATCH into our component as a prop
  if we do not suply a second argument to connect.
  The reason is because if we need to make ONE action dispatch will just be more verbose 

  about falsy elements if:
  • it's an OBJECT we set them by default to NULL
  • it's an NUMBER we set it to zero 0
  • it's an STRING set it to an EMPTY STRING
  • 
*/
