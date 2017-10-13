import React, { Component } from 'react'
import './cart-button.css'
import shoppingcart from './shopping-cart.svg'
import { Link } from 'react-router-dom'

class CartButton extends Component {
  render() {
    return (
      <Link to='/cart' className='cart-button'>
        <div className='cart-no'>1</div>
        <img src={shoppingcart} alt=""/>
      </Link>
    )
  }
}
export default CartButton
