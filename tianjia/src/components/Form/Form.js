import React, { Component } from 'react'
import './form.css'

class Form extends Component {
  state={
    text:''
  }
  handleChange = (e) => {
    this.setState({
      text:e.target.value
    })
  }
  handleSubmit = () => {
    const {text} = this.state
    this.props.addTodo({text})
    this.setState({
      text:''
    })

  }
  render() {

    return (
      <div className="form">
        <input type="text" value={this.state.text}
          onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>+</button>
      </div>
    )
  }
}

export default Form
