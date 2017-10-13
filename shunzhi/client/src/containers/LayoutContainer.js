import React, { Component } from 'react'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Dishes from '../components/Dishes/Dishes'
import DishesEach from '../components/DishesEach/DishesEach'
import Cart from '../components/Cart/Cart'
import Profile from '../components/Profile/Profile'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

class LayoutContainer extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dishes" component={Dishes} />
        <Route path="/dishes" component={Dishes} />
        <Route path ='/dish/:id' component={DishesEach} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />

      </Switch>
      </div>
    )
  }
}
export default LayoutContainer
