import React, { Component } from 'react'
import './profile.css'
import Header from '../Header/Header'
import ProMain from '../ProMain/ProMain'

class Profile extends Component {
  render() {
    return (
      <div className='profile'>
        <Header>个人中心</Header>
        <ProMain />
      </div>
    )
  }
}
export default Profile
