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
    const name = e.target.name
    this.setState({
      [name]:e.target.value
    })
  }
  handleSubmit = () => {
    console.log(this.state);
    axios.post('http://localhost:3008/dogs', this.state).then(res=>{
      console.log(res.data)
      this.props.addImgToList(res.data)
    })
  }
  render() {
    const { toggleForm } =this.props
    return (
      <div className="form">
        <div className="input-wrap">
          <span>图片地址</span>
          <input
            value={this.state.imgUrl}
            name='imgUrl'
            onChange={this.handleChange}
            type="text"/>
          <span>昵称</span>
          <input
            value={this.state.name}
            name='name'
            onChange={this.handleChange}
            type="text"/>
          <span>狗龄</span>
          <input
            value={this.state.old}
            name='old'
            onChange={this.handleChange}
            type="text"/>
          <div>
            <button onClick={this.handleSubmit}>添加</button>
            <button onClick={toggleForm}>取消</button>
          </div>

        </div>
      </div>

    )
  }
}

export default Form;
