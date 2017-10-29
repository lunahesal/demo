import React, { Component } from 'react'
import './app.css'
import Home from '../../components/Home/Home'
import News from '../../components/News/News'
import AlertBox from '../../components/AlertBox/AlertBox'
import LayoutContainer from '../LayoutContainer'
import CartButtonContainer from '../CartButtonContainer'
import axios from 'axios'
import store from '../../redux/store'
import { Provider } from 'react-redux'
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
      store.dispatch({type:'LOGIN',users:users})
      if(userId){
        const user = users.find(t => t.id == userId)
        store.dispatch({type:'ACTIVEUSER',user:user})
      }else{
        return null
      }
    })
    axios.get('http://localhost:3008/goods').then(res => {
      const goods = res.data
      store.dispatch({type:'LOAD_GOODS',goods})

    })
    axios.get('http://localhost:3008/dishes').then(res => {
      const dishes = res.data
      store.dispatch({type:'LOAD_DISHES',dishes})

    })
    axios.get('http://localhost:3008/comments').then(res => {
      const comments = res.data
      store.dispatch({type:'LOAD_COMMENTS',comments:comments})

    })


  }

  render() {
    return (

      <Provider store={store}>
        <div className="app">
            <AlertBox />
            <Router>
              <div>
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
                  <CartButtonContainer />
              </div>
            </Router>
        </div>
      </Provider>

    )
  }
}

export default App
