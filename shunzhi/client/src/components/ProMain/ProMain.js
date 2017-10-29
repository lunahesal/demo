import React, { Component } from 'react'
import './pro-main.css'
import editor from './editor.svg'
import store from '../../redux/store'
import axios from 'axios'
import UserList from '../UserList/UserList'


class ProMain extends Component {
  state= {
    edited:false,
    slogn:'还没填写个性签名'
  }
  editClick = () => {
    this.setState({
      edited:!this.state.edited
    })
  }
  handleChange = (e) => {
    this.setState({
      slogn:e.target.value
    })
  }
  slognSave = () => {
    const activeuser = store.getState().activeuser
    const slogn = this.state.slogn
    const newactive = {...activeuser,slogn}
    console.log(newactive);
    axios.put(`http://localhost:3008/users/${activeuser.id}`,newactive).then(res => {
      console.log(res.data);
    })
    store.dispatch({type:'UP_DATE',slogn})
    this.setState({
      edited:!this.state.edited
    })
  }

  render() {
    const activeuser = store.getState().activeuser
    const { edited, slogn } = this.state

    return (
      <div className='pro-main'>
        <div className='prefile-top'>
          <label className='login-img'
            style={{backgroundImage:`url(${activeuser.url})`}}>
            <input type="file" className='pre-login'/>
          </label>
          <div className="prefile-user">
            <span className='prefile-username'>{activeuser.userName}</span>
            <span className={`prefile-userslog ${edited && 'disappear'}`}>{activeuser.slogn}</span>
            <div className={`prefile-userslog-two ${edited && 'show'}`}>
              <input type="text"
                onChange={this.handleChange}
                value={slogn}/>
              <button className='prefile-btn'
                onClick={this.slognSave}
                >保存</button>
            </div>
          </div>
          <div className="prefile-editor"
            onClick={this.editClick}>
            <img src={editor} alt=""/>
          </div>
        </div>
        <div className="prefile-lists">
          <UserList />
        </div>
      </div>
    )
  }
}
export default ProMain
