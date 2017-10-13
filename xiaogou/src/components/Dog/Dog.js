import React, { Component } from 'react';
import './dog.css'
import axios from 'axios'

class Dog extends Component {
  state = {
    imgUrl:''
  }
  componentDidMount () {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/dogs/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        imgUrl:res.data.imgUrl
      })
    })
  }
  render() {
    return (
      <div className="dog">
        <img src={this.state.imgUrl} alt=""/>
      </div>

    );
  }
}
export default Dog;
