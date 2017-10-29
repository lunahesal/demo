import React, { Component } from 'react'
import './app.css'
import List from '../List/List'
import Goods from '../Goods/Goods'
class App extends Component {
  state = {
    lists:[]
  }

  addToList = (newLists) => {
    this.setState({
      lists:[ ...this.state.lists, { ...newLists, count:1 }]
    })
  }

  adddClick = (id) => {
    const { lists }=this.state
    const newLists = lists.map( t => {
      if(t.id === id){
        return {...t, count: t.count + 1}
      }
      return t
    })
    this.setState({
      lists:newLists
    })
  }
  minusClick = (id) => {
    const { lists }=this.state
    let newLists = lists.map( t => {
      if(t.id === id && t.count !== 0){
        return {...t,count:t.count - 1}
      }
      return t
    })
    this.setState({
      lists:newLists
    })
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <Goods addToList={this.addToList}/>
          <div className="list-wrap">
            <List lists={this.state.lists}
              adddClick={this.adddClick}
              minusClick={this.minusClick}
              addToWill={this.addToWill}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default App
