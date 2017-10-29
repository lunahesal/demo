
import axios from 'axios'
const state={
  currentUser:'',
  isAuthenticated:false

}
const mutations = {
  login(state,{text}){
    state.isAuthenticated=true
    state.currentUser=text
  }
}
const actions ={
}
export default{
  state,mutations,actions
}
