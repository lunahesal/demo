import React, { Component } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Form from '../Form/Form'
import deleteIcon from './delete.svg'
import add from './add.svg'
class Home extends Component {
  state = {
    dogs:[],
    showForm:false
  }
  componentDidMount = () => {
    axios.get('http://localhost:3008/dogs').then(res => {
      console.log(res.data)
      this.setState({
        dogs:res.data
      })
    })
  }

  showForm = () => {
    this.setState({
      showForm:true
    })
  }
  hideForm = () => {
    this.setState({
      showForm:false
    })
  }
  addImgToList = (data) => {
    this.setState({
      showForm:false,
      dogs:[...this.state.dogs,data]
    })
  }
  deleteClick = (i) => {
    console.log(i)
    let dogs = this.state.dogs
    axios.delete(`http://localhost:3008/dogs/${dogs[i].id}`).then(res=>{
      console.log(res.data)
    })
    dogs.splice(i,1)
    this.setState({
      dogs:[...this.state.dogs]
    })
  }
  render () {
    const doglist = this.state.dogs.map((item, i) => (
      <div key={i} className='list-each'>
        <Link  to={`/dog/${item.id}`}>
            <img src={item.imgUrl} alt=""/>
        </Link>
        <img className='delete-icon'
            onClick={()=>this.deleteClick(i)}
              src={deleteIcon} alt=""/>
      </div>
    ))
    return (
      <div className='home'>
        <div className='lists'>
            {doglist}
        </div>
        <div onClick={this.showForm} className='addimg'>
          <img src={add} alt=""/>
        </div>
        {this.state.showForm && <Form
          addImgToList={this.addImgToList}
          hideForm={this.hideForm}/>}
      </div>
    )
  }
}
export default Home
