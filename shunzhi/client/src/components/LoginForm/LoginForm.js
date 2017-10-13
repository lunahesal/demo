import React, { Component } from 'react'
import './login-form.css'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item


class LoginForm extends Component {
  state = {
    userName:'',
    password:''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      userName:this.state.userName,
      password:this.state.password
    }
    this.props.onLogin(data)
  }
  handleUsernameChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  handlePassworChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div className='login-form'>
        <Form onSubmit={this.handleSubmit} >
          <div className='login-inputs'>
            <FormItem>
              <Input type='text' placeholder='用户名'
                onChange={this.handleUsernameChange}
                value={this.state.userName}/>
            </FormItem>
            <FormItem>
              <Input type='text' placeholder='password'
                onChange={this.handlePassworChange}
                value={this.state.password}/>
            </FormItem>
          </div>
          <div className='login-action'>
            <button>登录</button>
          </div>
        </Form>
      </div>
    )
  }
}
export default LoginForm
