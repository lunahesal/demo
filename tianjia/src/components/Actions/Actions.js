import React, { Component } from 'react'
import './actions.css'
import listIcon from './list.svg'
import rightIcon from './right.svg'
class Actions extends Component {
  handleClick = (str) => {
  this.props.filter(str)
  }
  render() {
    return (
      <div className="actions">
        <img
          onClick={() => this.handleClick('all')}
          src={listIcon} alt=""/>
        <img
          onClick={() => this.handleClick('completed')}
          src={rightIcon} alt=""/>
      </div>
    )
  }
}

export default Actions
