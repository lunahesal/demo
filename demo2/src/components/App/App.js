import React, { Component } from 'react'
import './app.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import axios from 'axios'
import Home from '../Home/Home'
import Dog from '../Dog/Dog'

class App extends Component {
  // state ={
  //   username:'',
  //   avatar:''
  // }
  // componentDidMount = () => {
  //   axios.get('https://api.github.com/users/lunahesal').then(res => {
  //     console.log(res.data)
  //     this.setState({
  //       username:res.data.login,
  //       avatar:res.data.avatar_url
  //     })
  //   })
  // }
  render() {
    return (
      //  <div className="App">
      //   <img src={this.state.avatar} alt='avatar'/>
      //   <h1>
      //     {this.state.username}
      //   </h1>
      // </div>
      <Router>
        <div className="app">
          <div className="header">
            <Link to='/'>首页</Link>
          </div>
          <Route  exact path='/' component={Home} />
          <Route  path='/dog/:id' component={Dog} />

        </div>
      </Router>
    )
  }
}

export default App;
