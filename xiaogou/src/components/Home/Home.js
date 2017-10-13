import React, { Component } from 'react';
import './home.css';
import DogIcon from '../DogIcon/DogIcon'
import axios from 'axios'
import addIcon from './add.svg'
import Form from '../Form/Form'
class Home extends Component {
  state={
    dogs:[],
    showForm:false
  }
  addDog = (dog) => {
    this.setState({
      dogs:[...this.state.dogs,dog]
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
  componentDidMount (){
    axios.get('http://localhost:3008/dogs').then(
      res=>{
        console.log(res.data)
        this.setState({
          dogs:res.data
        })
      }
    )
  }
  removeDog = (id) => {
    this.setState({
      dogs:this.state.dogs.filter(t => t.id !== id)
    })
  }
  render() {
    const dogList = this.state.dogs.map(t=>(
      <DogIcon removeDog={this.removeDog}
        key={t.id} dog={t} />
    ))
    return (
      <div className="home">
        <div className="form-wrap">
          {this.state.showForm && <Form
            addDog={this.addDog}
            hideForm={this.hideForm}/>}
        </div>
        <div className="dog-list">
          {dogList}
        </div>
        <div className="add-button">
          <img onClick={this.showForm}
            src={addIcon} alt=""/>
        </div>
      </div>

    );
  }
}
export default Home;
