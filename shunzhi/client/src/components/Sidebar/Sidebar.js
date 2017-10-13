import React, { Component } from 'react'
import './sidebar.css'
import store from '../../redux/store'
import {
  Link
 } from 'react-router-dom'

class Sidebar extends Component {

  render() {
    const activeuser = store.getState().activeuser
    return (
        <div className={`sidebar ${this.props.sidebarActive && 'active'}`}>
          <div>
            <div className='insidebar'>
              <div className="sidebar-user">
                <div className='sidebar-user-avatar' style={{backgroundImage:`url(${activeuser.url})`}}></div>
                <div className='name-logout-wrap'>
                  <span className='username'>{activeuser.userName}</span>
                  <a href="#" className='logout'
                    onClick={this.props.onLogout}>退出</a>
                </div>
              </div>
              <div className="menu-list">
                <Link to='/news'>首页</Link>
                <Link to='/Profile'>个人中心</Link>
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
