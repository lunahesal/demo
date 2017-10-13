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

class DishesEach extends Component {

  state = {
    imgurl:'',
    name:'',
    description:'',
    price:0,
    DataLists:[],
    showForm:false
  }
  componentDidMount () {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/goods/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        imgurl:res.data.url,
        name:res.data.name,
        description:res.data.description,
        price:res.data.price
      })
    })
  }
  addToList = (obj,color) => {
    this.setState({
      DataLists:[...this.state.DataLists, {...obj, activeColor:color}]
    })
  }
  handleClick = () => {
    const allData = {
      imgurl:this.state.url,
      name:this.state.name,
      price:this.state.price,
      count:1
    }
    this.setState({
      showForm:true
    })
    axios.post(`http://localhost:3008/lists`,allData).then(res => {
      console.log(res.data);
    })
  }
  render() {
    const { imgurl, name, price, description, DataLists} = this.state
    const DataList = DataLists.map(t => (
      <div key={t.name} className="list"
        style={{backgroundColor:t.activeColor}}>
        <span>{t.name}</span>
        <span>{`${t.value} mg`}</span>
      </div>
    ))
    return (
      <div className='dishes-each'>
        <Header>新品</Header>
        <div className="dish-info">
          <div className="dish-img-wrap">
            <div className='img'
              style={{
              backgroundImage:`url(${imgurl})`
            }}></div>
          </div>
          <div className="dish-info-card">
            <h1 className='dish-info-name'>{name}</h1>
            <div className='price-tag'>{price}<span>元</span></div>
            <div className='shopping-icon-wrap'>
              <ShoppingIcon handleClick={this.handleClick}
                />
            </div>
            <div className='desc'>{description}</div>
            <h1 className='dish-sub-title'>营养成分</h1>
            <p className='dish-sub-detail'>点击各部分查看详情</p>
            <Data addToList={this.addToList}/>
            <div>
              {DataList}
            </div>
            <h1 className='dish-sub-title'>销售额</h1>
            <p className='dish-sub-detail'>单位：份</p>
            <DataTwo />
            <Comment />
          </div>
        </div>
        {this.state.showForm && <CartButton />}
      </div>
    )
  }
}
export default DishesEach
