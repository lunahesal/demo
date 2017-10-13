import React, { Component } from 'react'
import './signup.css'
import Header from '../Header/Header'
import SignupForm from '../SignupForm/SignupForm'
import {
  Link
 } from 'react-router-dom'


class Signup extends Component {
  
  render() {
    return (
      <div className='signup'>
        <Header>注册</Header>
        <div className='signup-main'>
          <div className='signup-content'>
            <div className='signup-hero'>
              <h1 className='title'>注册</h1>
              <div className='slogan'>连接小而确定的幸福</div>
            </div>
            <div className='signup-form-wrap'>
              <SignupForm />
            </div>
            <div className='signup-other-option'>
              <Link to='/login'>已有账号？直接登录</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Signup
