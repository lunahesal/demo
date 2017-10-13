import React, { Component } from 'react'
import './form.css'
import axios from 'axios'

class Form extends Component {
  state = {
    imgUrl:'',
    name:'',
    old:''
  }
  handleChange = (e) => {
    this.setState({
      imgUrl:e.target.value
    })
  }
  handleChange2 = (e) => {
    this.setState({
      name:e.target.value
    })
  }
  handleChange3 = (e) => {
    this.setState({
      old:e.target.value
    })
  }
  handleSubmit = () => {
    axios.post('http://localhost:3008/dogs', this.state).then(res=>{
      console.log(res.data)
      this.props.addImgToList(res.data)
    })
  }
  render() {
    const { hideForm } =this.props
    return (
      <div className="form">
        <div className="input-wrap">
          <span>图片地址</span>
          <input
            value={this.state.imgUrl}
            onChange={this.handleChange}
            type="text"/>
          <span>昵称</span>
          <input
            value={this.state.name}
            onChange={this.handleChange2}
            type="text"/>
          <span>狗龄</span>
          <input
            value={this.state.old}
            onChange={this.handleChange3}
            type="text"/>
          <div>
            <button onClick={this.handleSubmit}>添加</button>
            <button onClick={hideForm}>取消</button>
          </div>

        </div>
      </div>

    )
  }
}

export default Form;
