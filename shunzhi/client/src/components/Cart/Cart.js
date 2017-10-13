import React, { Component } from 'react'
import './cart.css'
import Header from '../Header/Header'
class Cart extends Component {
  state = {
    lists:[{
      "id": 2,
      "url": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=952185356,2784269270&fm=27&gp=0.jpg",
      "price": 93,
      "name": "黑森林",
      "count": 0,
      "description": "好吃",
      "clicked": false
    }]
  }

  render() {
    const { lists }=this.state

    const listEach = lists.map(t => (
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
          <span  className='minus'>-</span>
          <span className='list-count'>{t.count}</span>
          <span  className='add'>+</span>
        </div>
      </div>
    ))
    return (
      <div className='cart'>
        <Header>购物车</Header>
        <div className='cartin'>
          <div className='cart-hero'>
            <h1 className='total-price'>100 元</h1>
          </div>
          <div className='cart-list-wrap'>
            <div className='cart-list-item'>
              { listEach }
            </div>
            <div className='cart-checkout-button'>结算</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Cart
