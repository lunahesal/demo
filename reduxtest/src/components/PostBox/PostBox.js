import React, { Component } from 'react'
import './post-box.css'
import store from '../../store'

class PostBox extends Component {
  render() {
    const comments = store.getState()
    return (
      <div className='post-box'>
      <div className="comment-no">
        {comments.length} 评论
      </div>
      </div>
    )
  }
}
export default PostBox
