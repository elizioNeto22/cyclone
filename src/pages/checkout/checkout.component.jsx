import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {
  selectCartTotal,
  selectCartItems,
} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

/* 
  the reselect lib was not used because here we want to re render all application so that
  everything have an updated user cart
*/

const CheckoutPage = ({ cartTotal, cartItems }) => {
  const renderCheckoutItem = () =>
    cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {renderCheckoutItem()}

      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CheckoutPage)
