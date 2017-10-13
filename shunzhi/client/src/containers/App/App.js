import React, { Component } from 'react'
import './app.css'
import Profile from '../../components/Profile/Profile'
import Home from '../../components/Home/Home'
import News from '../../components/News/News'
import Dishes from '../../components/Dishes/Dishes'
import DishesRoute from '../../components/DishesRoute/DishesRoute'
import Cart from '../../components/Cart/Cart'
import LayoutContainer from '../LayoutContainer'
import axios from 'axios'
import store from '../../redux/store'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
 } from 'react-router-dom'

class App extends Component {
  componentDidMount = () => {
    axios.get('http://localhost:3008/users').then(res => {
      const userId = localStorage.getItem('userId')
      const users = res.data
      store.dispatch({type:'LOGIN',users})
      if(userId){
        const user = users.find(t => t.id == userId)
        store.dispatch({type:'ACTIVEUSER',user})

      }
    })
    axios.get('http://localhost:3008/goods').then(res => {
      const goods = res.data
      store.dispatch({type:'LOAD_GOODS',goods})

    })


  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/news' render={() => {
               if (!localStorage.getItem('userId')) {
                  return <Redirect to='/' />
               } else {
                 return <News />
               }
              }} />
            <Route component={LayoutContainer} />
          </Switch>

        </div>
      </Router>

    )
  }
}

export default App
