import React, { Component } from 'react'
import './user-list.css'
import store from '../../redux/store'
import axios from 'axios'
import Toggle from 'react-toggle'
import { Link } from 'react-router-dom'
import "react-toggle/style.css"

class UserList extends Component {
  state = {
    // eggsAreReady: false
  }
  handleEggsChange = (id,e) => {

    const users = store.getState().users
    const user = users.find(t => t.id === id)
    console.log(user);
    if(e.target.checked){
      const userFriend = {
        ...user,
        friendId:store.getState().activeuser.id
      }
      axios.put(`http://localhost:3008/users/${id}`,userFriend).then(res => {
        console.log(res.data);

        store.dispatch({type:'ADD_FRIEND',user:res.data})
      })


    }else {
      console.log('nofri');
    }

  }
  render() {
    const users = store.getState().users
    const currentId = localStorage.getItem('userId')
    const userLists = users.filter(t => t.id !== Number(currentId))
    const list = userLists.map( t => (
      <li className='list-item' key={t.id}>
        <div className='list-item-avator'
          style={{backgroundImage:`url(${t.url})`}}></div>
        <Link to={`/user/${t.id}`} className='list-item-name'>{t.userName}</Link>
        <Toggle
          defaultChecked={this.state.eggsAreReady}
          icons={false}
          className='custom-classname'
          onChange={(e) =>this.handleEggsChange(t.id,e)} />
      </li>
    ))
    return (
      <div className="user-list">
        { list }
      </div>
    )
  }
}
export default UserList
