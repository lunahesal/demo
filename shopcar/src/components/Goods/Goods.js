import React, { Component } from 'react'
import './goods.css'

class Goods extends Component {
  state ={
    goods:[
      {
        id:1,
        url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=952185356,2784269270&fm=27&gp=0.jpg',
        price:43.00,
        name:'cake',
        count:0,
        clicked:false
      },
      {
        id:2,
        url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=952185356,2784269270&fm=27&gp=0.jpg',
        price:93.00,
        name:'blackcake',
        count:0,
        clicked:false
      },
      {
        id:3,
        url:'http://f12.baidu.com/it/u=881166037,2952098823&fm=72',
        price:63.00,
        name:'抹茶蛋糕',
        count:0,
        clicked:false
      }
    ]
  }
  addClick = (id) => {
    const {goods} = this.state
    const newGoods = goods.map(t => {
      if(t.id === id){
        return {...t,clicked:true}
      }
      return t
    })
    this.setState({
      goods:newGoods
    })
    const newLists = goods.find(t => t.id === id)
    this.props.addToList(newLists)
  }
  render() {
    const goodsList = this.state.goods.map(t => (
      <div key={t.id}>
        <img src={t.url} alt=""/>
        <button onClick={() => this.addClick(t.id)}
          disabled={ t.clicked }
          className={ t.clicked && 'active' }>
          { t.clicked ? '已购':'购买' }
        </button>
      </div>
    ))
    return (
      <div className='goods'>
        {goodsList}
      </div>
    )
  }
}
export default Goods
