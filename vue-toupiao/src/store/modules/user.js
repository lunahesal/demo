
import axios from 'axios'
const state={
  all:[],
  isVoted:false
}

const mutations = {
  loadUsers(state, users){
    state.all=users
  },
  vote(state,user){
    state.all.push(user)
    state.isVoted=true
  },
  undo(state,voteId){
    state.all= state.all.filter(t=>t.id!==voteId)
  }
}
const actions ={
  loadUsers({ commit }){
    axios.get(`http://localhost:3008/users`).then( res => {
      const users=res.data
      commit('loadUsers',users)
    })
  },
  vote({ commit },{ userName, menuId }){
    axios.post(`http://localhost:3008/users`,{userName, menuId }).then( res => {
      const user=res.data
      console.log(res.data);
      commit('vote',user)
    })
  },
  undo({ commit },{ voteId }){
    axios.delete(`http://localhost:3008/users/${voteId}`).then( res => {
      const users=res.data
      commit('undo',voteId)
    })
  }
}
export default{
  state,mutations,actions
}
