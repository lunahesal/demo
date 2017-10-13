import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Dishes from '../Dishes/Dishes'
import DishesEach from '../DishesEach/DishesEach'
import Cart from '../Cart/Cart'
class DishesRoute extends Component {
  render() {
    return (
      <div>
        <Route exact path ='/dishes' component={Dishes} />
        <Route exact path ='/dish/:id' component={DishesEach} />
        <Route exact path ='/cart' component={Cart} />
      </div>
    )
  }
}
export default DishesRoute
