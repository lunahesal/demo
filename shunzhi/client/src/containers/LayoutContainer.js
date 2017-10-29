import React, { Component } from 'react'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Dishes from '../components/Dishes/Dishes'
import DishesEach from '../components/DishesEach/DishesEach'
import Profile from '../components/Profile/Profile'
import User from '../components/User/User'
import CartContainer from './CartContainer'
import {
  Switch,
  Route
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
          <Route path="/cart" component={CartContainer} />
          <Route path="/profile" component={Profile} />
          <Route path ='/user/:id' component={User} />
        </Switch>

      </div>
    )
  }
}
export default LayoutContainer
