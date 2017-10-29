import React, { Component } from 'react'
import './cart-button.css'
import shoppingcart from './shopping-cart.svg'
import store from '../../redux/store'
import { Link } from 'react-router-dom'

class CartButton extends Component {
  render() {
    return (
      <Link to='/cart' style={{ 'display': `${this.props.show ? 'block' : 'none' }`}}
        className='cart-button'>
        <div className='cart-no'>{this.props.cartCount}</div>
        <img src={shoppingcart} alt=""/>
      </Link>
    )
  }
}
export default CartButton
