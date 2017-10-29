import React, { Component } from 'react'
import './goods.css'
import axios from 'axios'
class Goods extends Component {
  state = {
    goods:[]
  }
  componentDidMount = () => {
    axios.get('http://localhost:3008/goods').then(res => {
      console.log(res.data)
      this.setState({
        goods:res.data
      })
    })
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
