import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home'
import Dashboardd from '../Dashboardd/Dashboardd'

import {
  HashRouter as Router,
  Route,
  Redirect

 } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/dashboardd' render={() => {
                 if (!window.localStorage.getItem('userId')) {
                    return <Redirect to='/' />
                 } else {
                   return <Dashboardd />
                 }
                }} />
        </div>
      </Router>
    );
  }
}

export default App;
