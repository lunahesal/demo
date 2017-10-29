import React, { Component } from 'react'
import './comment-box.css'
import store from '../../redux/store'
import axios from 'axios'

class CommentBox extends Component {
  state = {
    comment:''
  }
  handleClick = (e) => {
    this.setState({
      comment:e.target.value
    })
  }
  handleSubmit =() => {
    const text = this.state.comment
    const { goodsId } = this.props
    const currentUser = store.getState().activeuser
    if(!currentUser.userName) return
    const { url, userName } = currentUser
    axios.post('http://localhost:3008/comments',{ text,url,userName,goodsId }).then(res => {
      const { text, url, userName, goodsId, id } = res.data
      store.dispatch({ type:'ADD_COMMENT',
        text:text,url:url,
        userName:userName,
        goodsId:goodsId,
        id:id
      })
    })
    this.setState({
      comment:''
    })
  }
  render() {
    const { comments } = this.props
    const commentList = comments.map(t => (
      <div className='comment-list-item' key={t.id}>
        <div className='comment-avatar'
          style={{backgroundImage:`url(${t.url})`}}>
        </div>
        <div className='comment-detail'>
          <div className='username-time'>
            <div className='comment-username'>{t.userName}</div>
            <div className='comment-time'>1-10</div>
          </div>
          <div className='comment-content'>{t.text}</div>
        </div>
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
