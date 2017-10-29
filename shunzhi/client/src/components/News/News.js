import React, { Component } from 'react'
import './news.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
class News extends Component {
  render() {
    return (
      <div className='news'>
        <Header>News</Header>
        <div className='news-update-wrap' style={{ 'height': `${window.innerHeight -80}px` }}>
          <div className='news-no-update'>
            暂无好友更新，可以直接去
            <Link to='/dishes'> 购物区 </Link>
            转转。
          </div>
        </div>
      </div>
    )
  }
}
export default News
