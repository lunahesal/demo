import React, { Component } from 'react';
import './main.css';
import Home from '../Home/Home'
import Dog from '../Dog/Dog'
import {Route} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/dog/:id' component={Dog} />
      </div>
    );
  }
}

export default Main;
