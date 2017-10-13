import React, { Component } from 'react'
import './header.css'
import Menu from '../Menu/Menu'
import Sidebar from '../Sidebar/Sidebar'
import store from '../../redux/store'
import {
  withRouter
} from 'react-router-dom'

class Header extends Component {
  state = {
    sidebarActive:false
  }
  handleClick = () => {
    this.setState({
      sidebarActive:!this.state.sidebarActive
    })
  }
  hideClick = () => {
    this.setState({
      sidebarActive:!this.state.sidebarActive
    })
  }
  logout = () => {
    window.localStorage.removeItem('userId')
    this.props.history.push('/')
  }
  render() {
    const { sidebarActive } = this.state
    return (
      <div className='header'>
        <div className="sidebar-wrap">
          <div className={`sidebar-bg ${sidebarActive && 'sidebar-bg-active'}`}
            onClick={this.hideClick}>
          </div>
          <Sidebar sidebarActive = {sidebarActive}
            onLogout={this.logout}
            handleClick={this.handleClick}/>
        </div>
        <Menu handleClick={this.handleClick}/>
        <div className="header-title">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default withRouter(Header)
