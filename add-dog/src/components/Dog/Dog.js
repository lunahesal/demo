import React, { Component } from 'react'
import './dog.css'
import axios from 'axios'
import editor from './editor.svg'
class Dog extends Component {
  state = {
    dog:{}
  }
  componentDidMount = () => {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/dogs/${id}`).then(res => {
      this.setState({
        dog:res.data
      })
    })
  }
  render () {
    const { dog } = this.state
    return (
      <div className='dog'>
        <img src={dog.imgUrl} alt=""/>
        <div className='intrs'>
          <img src={editor} alt=""/>
          <h3>
          昵称：  {dog.name}
          </h3>
          <h3>
          狗龄：  {dog.old}
          </h3>
        </div>


      </div>
    )
  }
}
export default Dog
