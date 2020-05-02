import React from 'react'
import {connect} from 'react-redux'

import CustomButton from '../custom_button/custom_button_component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartDisplay}) => (
  <div className='cart-dropdown' style={{visibility: cartDisplay ? 'hidden' : 'visible'}}>
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state) => ({
  cartDisplay: state.cartDisplay.hidden
})


export default connect(mapStateToProps)(CartDropdown)
