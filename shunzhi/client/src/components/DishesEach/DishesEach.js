import React, { Component } from 'react'
import './dishes-each.css'
import Header from '../Header/Header'
import axios from 'axios'
import shoppingcart from './shopping-cart.svg'
import Data from '../Data/Data'
import DataTwo from '../DataTwo/DataTwo'
import Comment from '../Comment/Comment'
import CartButton from '../CartButton/CartButton'
import ShoppingIcon from '../ShoppingIcon/ShoppingIcon'
import store from '../../redux/store'
import { connect } from 'react-redux'

class DishesEach extends Component {

  state = {
    DataLists:[]
  }
  addToList = (obj,color) => {
    this.setState({
      DataLists:[...this.state.DataLists, {...obj, activeColor:color}]
    })
  }

  buy = (good,cartDish) => {
    if(cartDish) return
    const newGood = {...good,count:1}
    this.props.dispatch({ type: 'ADD_CART',newGood })
    axios.post('http://localhost:3008/dishes',newGood).then(res => {
      console.log(res.data)
    })

  }
  render() {
    const { DataLists } = this.state
    const DataList = DataLists.map(t => (
      <div key={t.name} className="list"
        style={{backgroundColor:t.activeColor}}>
        <span>{t.name}</span>
        <span>{`${t.value} mg`}</span>
      </div>
    ))
    if(Object.keys(this.props.goods).length !== 0){
      const { goods, cartDishes } = this.props
      const { id } = this.props.match.params
      const good = goods.find(t => t.id == id)
      const cartDish = cartDishes.find(t =>t.id == id)
      return (
        <div className='dishes-each'>
          <Header>新品</Header>
          <div className="dish-info">
            <div className="dish-img-wrap">
              <div className='img'
                style={{
                backgroundImage:`url(${good.url})`
              }}></div>
            </div>
            <div className="dish-info-card">
              <h1 className='dish-info-name'>{good.name}</h1>
              <div className='price-tag'>{good.price}<span>元</span></div>
              <div className='shopping-icon-wrap'
                onClick={()=>this.buy(good,cartDish)}>
                <ShoppingIcon color={ cartDish ? '#F86E67' : '#DEDEDE' }/>
              </div>
              <div className='desc'>{good.description}</div>
              <h1 className='dish-sub-title'>营养成分</h1>
              <p className='dish-sub-detail'>点击各部分查看详情</p>
              <Data addToList={this.addToList}/>
              <div>
                {DataList}
              </div>
              <h1 className='dish-sub-title'>销售额</h1>
              <p className='dish-sub-detail'>单位：份</p>
              <DataTwo />
              <Comment goodId={ id }/>
            </div>
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}
const mapStateToProps = (state) => ({
  goods: state.goods,
  cartDishes: state.cart.dishes
})
export default connect(mapStateToProps)(DishesEach)
