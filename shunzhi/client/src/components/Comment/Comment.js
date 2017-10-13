import React, { Component } from 'react'
import './comment.css'
import CommentBox from '../CommentBox/CommentBox'
import PostBox from '../PostBox/PostBox'
class Comment extends Component {
  render() {
    return (
      <div className='comment'>
          <PostBox />
          <CommentBox />
      </div>
    )
  }
}
export default Comment
