import React, { Component } from 'react'
import './menu.css'

class Menu extends Component {
  render() {
    return (
      <div className='menu' onClick={this.props.handleClick}>
        <svg viewBox="0 0 1024 1024" version="1.1" width="200" height="200">
          <path d="M128.064512 230.4l767.870976 0 0 89.6L128.064512 320 128.064512 230.4z"  fill="#ffffff"></path>
          <path d="M128.064512 473.601024l767.870976 0 0 89.6L128.064512 563.201024 128.064512 473.601024z" fill="#ffffff"></path>
          <path d="M128.064512 704l767.870976 0L895.935488 793.6 128.064512 793.6 128.064512 704z"  fill="#ffffff"></path>
        </svg>
      </div>
    )
  }
}
export default Menu
