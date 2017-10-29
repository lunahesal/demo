import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './redux/store'
const render =()=>{
  ReactDOM.render(<App />, document.getElementById('root'));
}
render()
store.subscribe(render)
