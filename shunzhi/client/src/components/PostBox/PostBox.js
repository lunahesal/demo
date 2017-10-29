import React, { Component } from 'react'
import './post-box.css'
import store from '../../redux/store'

class PostBox extends Component {
  render() {
    const { comments } = this.props
    return (
      <div className='post-box'>
        <h1 className='dish-sub-title'>评论区</h1>
        <p className='dish-sub-detail'>评论数：{comments.length}</p>
      </div>
    )
  }
}
export default PostBox
