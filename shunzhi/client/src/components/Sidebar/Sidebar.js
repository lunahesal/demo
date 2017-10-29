import React, { Component } from 'react'
import './sidebar.css'
import store from '../../redux/store'
import {
  Link
 } from 'react-router-dom'

class Sidebar extends Component {

  render() {
    const activeuser = store.getState().activeuser
    const userId = localStorage.getItem('userId')
    let logoutLink = (
      <div className="sidebar-user">
        <div className='sidebar-user-avatar' style={{backgroundImage:`url(${activeuser.url})`}}></div>
        <div className='name-logout-wrap'>
          <span className='username'>{activeuser.userName}</span>
          <a href="#" className='logout'
            onClick={this.props.onLogout}>退出</a>
        </div>
      </div>
    )
    let none = (
      <div className="sidebar-user">
        <div className='sidebar-user-avatar'
          style={{backgroundImage:`url("http://media.haoduoshipin.com/yummy/default-avatar.png")`}}>

        </div>
      </div>
    )
    let profileLink = (<Link to='/profile'>个人中心</Link>)
    let loginLink = (<Link to='/login'>登录</Link>)
    return (
        <div className={`sidebar ${this.props.sidebarActive && 'active'}`}>
          <div>
            <div className='insidebar'>
              {userId ? logoutLink : none}
              <div className="menu-list">
                <Link to='/news'>首页</Link>
                {userId ? profileLink : loginLink}
                <Link to='/dishes'>猜你喜欢</Link>
              </div>
              <div className="bottom-btn">
                <button className='bottom-btn-close'
                  onClick={this.props.handleClick}>
                  关闭
                </button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Sidebar
