import React, { Component } from 'react'
import './cart.css'
import Header from '../Header/Header'
import store from '../../redux/store'

class Cart extends Component {
  calTotal = (dishes) => {
    const total = dishes.map(t => t.price*t.count ).reduce((sum,total)=>{
      return sum + total
    },0)
    return total
  }
  addCount = (id) => {
    store.dispatch({type:'ADD_COUNT',id})
  }
  subCount = (id) => {
    store.dispatch({type:'SUB_COUNT',id})
  }
  render() {
    const{ dishes } = this.props
    const total = this.calTotal(dishes)
    const listEach = dishes.map(t => (
      <div key={t.id} className='list-each'>
        <div className='list-each-info'>
          <div className='imgbox'>
            <img src={t.url} alt=""/>
          </div>
          <div className='name-price-wrap'>
            <span className='list-each-name'>{t.name}</span>
            <span className='list-each-price'>{t.price}</span>
          </div>
        </div>
        <div className='qty'>
          <span  className='minus' onClick={()=>this.subCount(t.id)}>-</span>
          <span className='list-count'>{t.count}</span>
          <span  className='add' onClick={()=>this.addCount(t.id)}>+</span>
        </div>
      </div>
    ))
    return (
      <div className='cart'>
        <Header>购物车</Header>
        <div className='cartin' style={{ 'height': `${window.innerHeight -80}px` }}>
          <div className='cart-hero'>
            <h1 className='total-price'>{total} 元</h1>
          </div>
          <div className='cart-list-wrap'>
            <div className='cart-list-item'>
              { listEach }
            </div>
            <div className='cart-checkout-button'
              onClick={this.props.onCheckout}>结算</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Cart
