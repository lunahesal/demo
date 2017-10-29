import React, { Component } from 'react'
import './comment.css'
import CommentBox from '../CommentBox/CommentBox'
import PostBox from '../PostBox/PostBox'
import store from '../../redux/store'

class Comment extends Component {
  render() {
    const allComments = store.getState().comments
    const { goodId } = this.props;
    const comments = allComments.filter(t => t.goodsId==goodId)
    return (
      <div className='comment'>
          <PostBox comments={comments}/>
          <CommentBox comments={comments} goodsId={goodId}/>
      </div>
    )
  }
}
export default Comment
