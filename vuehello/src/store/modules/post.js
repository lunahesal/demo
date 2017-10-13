
import axios from 'axios'
const state={
  all:[]
}
const mutations = {
  loadPosts(state, posts){
    state.all=posts
  }
}
const actions ={
  'loadPosts'({ commit }){
    axios.get(`http://localhost:3008/posts`).then( res => {
      const posts=res.data
      commit('loadPosts',posts)
    })
  }
}
export default{
  state,mutations,actions
}
