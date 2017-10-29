import React, { Component } from 'react'
import './dishes.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import axios from 'axios'
import Header from '../Header/Header'
import store from '../../redux/store'
import comment from './comment.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Dishes extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay:false
    }
    if(Object.keys(this.props.goods).length !== 0){
      const allComments = store.getState().comments
      const slideList = this.props.goods.map(t => (
        <div className='slides-item' key={t.id}>
          <Link to={`/dish/${t.id}`} className='dish-card' >
            <div className="dish-card-poster" key='1'
              style={{
                backgroundImage:`url(${t.url})`
              }}>

            </div>
            <div className='dish-card-detail'>
              <h1 className='dish-name'>{t.name}</h1>
              <div className='dish-price'>{t.price}<span>元</span></div>
              <div className='dish-icon-wrap'>
                <div className='dish-icon-inner'>
                  <img src={comment} alt=""/>
                  <span className='dish-comment-no'>
                    {allComments.filter(item => item.goodsId === t.id).length}
                  </span>
                </div>
              </div>
              <div className='dish-desc'>
                {t.description}
                <div className='dish-desc-mask'></div>
              </div>
            </div>
          </Link>
        </div>
      ))

      const slider = (
        <Slider {...settings}>
          {slideList}
        </Slider>
      )
      return (
        <div className='dishes'>
          <Header>猜你喜欢</Header>
          <div className='dishes-main'>
            {slider}
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}
const mapStateToProps = (state) => ({
  goods: state.goods
})
export default connect(mapStateToProps)(Dishes)
