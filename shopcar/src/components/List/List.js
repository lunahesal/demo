import React, { Component } from 'react'
import './list.css'
import axios from 'axios'
class List extends Component {



  calTotal = (lists) => {
    const total = lists.map(t => t.price*t.count ).reduce((sum,total)=>{
      return sum + total
    },0)
    return total
  }

  handleSubmit = () => {
    const { lists }=this.props
    console.log(lists)
    lists.map(t => (
      axios.post('http://localhost:3008/willdos',t).then(res => {
        console.log(res.data)
      })

    ))
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
          { total !== 0 && <button onClick={this.handleSubmit}>提交订单</button>}

        </div>

      </div>
    )
  }
}

export default List
