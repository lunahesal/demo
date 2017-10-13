import React, { Component } from 'react'
import './login.css'
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'
import { message } from 'antd'
import store from '../../redux/store'
import {
  Link
 } from 'react-router-dom'

class Login extends Component {


  login =(data) => {
    const users = store.getState().users
    const user = users.find(t => t.userName === data.userName)
    if(data.userName === '' || data.password ===''){
        return message.error('用户名密码不能为空')
      }
    if(!user){
      return message.error('用户名不存在')
    }else{
      if(user.password !== data.password){
        return message.error('密码错误')
      }
    }
    window.localStorage.setItem('userId', user.id)
    this.props.history.push('/news')
    store.dispatch({type:'ACTIVEUSER', user})

  }
  render() {
    return (
      <div className='login'>
        <Header>登录</Header>
        <div className='login-main'>
          <div className='login-content'>
            <div className='login-hero'>
              <h1 className='title'>登录</h1>
              <div className='slogan'>连接小而确定的幸福</div>
            </div>
            <div className='login-form-wrap'>
              <LoginForm onLogin={this.login}/>
            </div>
            <div className='login-other-option'>
              <Link to='/signup'>没有账号？请先注册</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
