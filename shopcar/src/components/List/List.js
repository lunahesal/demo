import React, { Component } from 'react'
import './list.css'

class List extends Component {

  calTotal = (lists) => {
    const total = lists.map(t => t.price*t.count ).reduce((sum,total)=>{
      return sum + total
    },0)
    return total
  }

  render() {
    const { lists }=this.props
    const total = this.calTotal(lists)
    const listEach = lists.map(t => (
      <div key={t.id} className='list-each'>
        <div className='imgbox'>
          <img src={t.url} alt=""/>
        </div>
        <div>
          <span>{t.name}</span>
          <span>$ {t.price}</span>
        </div>
        <div className='qty'>
          <span onClick={()=>this.props.minusClick(t.id)} className='minus'>-</span>
          <span>{t.count}</span>
          <span onClick={()=>this.props.adddClick(t.id)} className='add'>+</span>
        </div>
      </div>
    ))

    return (
      <div className="list">
        <div className="total">
          { total === 0 ? '请添加商品到购物车' : `$ ${total}`}
        </div>
        <div className="lists">
          {listEach}
        </div>
      </div>
    )
  }
}

export default List
