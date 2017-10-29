import React, { Component } from 'react'
import './user.css'
import Header from '../Header/Header'
import store from '../../redux/store'
import axios from 'axios'

class User extends Component {

  addFriend = (thisUser,id,isFriend) => {
    if(isFriend) return
    const friendId = id
    axios.put(`http://localhost:3008/users/${thisUser.id}`,{
      ...thisUser,friends:[...thisUser.friends,{friendId}] }).then(res => {
        console.log(res.data);
        axios.get(`http://localhost:3008/users/`).then(res => {
          console.log(res.data);
          store.dispatch({type:'LOGIN',users:res.data})
        })
    })
  }
  render() {
    const { id } = this.props.match.params
    const users = store.getState().users
    const activeUser = store.getState().activeuser
    console.log(activeUser.friends);

    if(users.length!==0){
      const thisUser = users.find(t => t.id == id)
      console.log(activeUser);
      // if(activeUser.friends){
      //   const isFriend = activeUser.friends.find(t => t.friendId == id)
      // }
      const isFriend = thisUser.friends.find( t =>
        t.friendId == activeUser.id
      )
      console.log(!isFriend);
      return (
        <div className='user'>
          <Header>用户</Header>
          <div className='userin' style={{ 'height': `${window.innerHeight -160}px` }}>
            <div className='user-avatar'></div>
            <div className='user-name'>{thisUser.userName}</div>
            <div className='user-info-card'>
              <div className='user-info-card-title'>个性签名</div>
              <div className='slogan'>{thisUser.slogn}</div>
            </div>
            <div className='add-friend-button'
              onClick={()=>this.addFriend(thisUser,activeUser.id,isFriend)}
              >{!isFriend ? '加为好友':'已是好友'}</div>
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}
export default User
