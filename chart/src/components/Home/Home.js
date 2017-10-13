import React, { Component } from 'react'
import './home.css'
import Data from '../Data/Data'

class Home extends Component {
  state = {
    lists:[]
  }

  addToList = (obj,color) => {
    this.setState({
      lists:[...this.state.lists, {...obj, activeColor:color}]
    })
  }

  render() {
    const { lists } = this.state
    const list = lists.map(t => (
      <div key={t.name} className="list"
        style={{backgroundColor:t.activeColor}}>
        <span>{t.name}</span>
        <span>{`${t.value} mg`}</span>
      </div>
    ))
    return (
      <div className='home'>
        <Data addToList={this.addToList}/>
        <div>
          {list}
        </div>
      </div>
    )
  }
}
export default Home
