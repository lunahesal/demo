import React, { Component } from 'react'
import './comment-box.css'
import store from '../../redux/store'

class CommentBox extends Component {
  state = {
    comment:'',
    comments:[]
  }
  handleClick = (e) => {
    this.setState({
      comment:e.target.value
    })
  }
  handleSubmit =() => {
    const { comment } = this.state
    this.setState({
      comment:''
    })
    store.dispatch({type:'ADD_COMMENT',text:comment})
  }
  render() {
    const comments = store.getState().comments
    const commentList = comments.map(t => (
      <div className='comment-list-item' key={t.id}>
        {t.text}
      </div>
    ))
    return (
      <div className='comment-box'>
        <div className='comment-list'>
          { commentList }
        </div>
        <div className='comment-form'>
          <input type="text" value={this.state.comment}
            onChange={this.handleClick}/>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
      </div>
    )
  }
}
export default CommentBox
