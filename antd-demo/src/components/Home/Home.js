import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import Settings from '../../settings.js'
import styled from 'styled-components'
import { message } from 'antd'


const HomeWrap = styled.div`
  height:100vh;
  padding-top:80px;
`;
const FormWrap =styled.div`
  border:1px solid #ddd;
  padding:40px 10px 10px;
  max-width:350px;
  margin:0 auto;
`
class Home extends Component {
  login =(data) => {
    if (data.password !== Settings.user.password
      || data.username !== Settings.user.username)
      {
        return message.error('用户名密码错误')
      }
    window.localStorage.setItem('userId', Settings.user.userId)
    // this.props.history.push('/dashboard/allpro/newform')
    this.props.history.push('/dashboardd/allpro/newform')
  }
  render() {
    return (
      <HomeWrap>
        <FormWrap>
          <LoginForm onLogin={this.login}/>
        </FormWrap>
      </HomeWrap>
    )
  }
}
export default Home
