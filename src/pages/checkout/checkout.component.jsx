import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const CheckoutPage = ({ cartTotal }) => {
  return (
    <div className="checkout-page">
      CHECKOUT PAGE
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
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)

/*
  ◙ import selectCartItems selector
  ◙ make selectCartTotal to reduce the total

  1• Total → selectCartTotal
  2• Header
  3• checkout items → selectCartItems 
  4• remove items new redux combo 
*/
