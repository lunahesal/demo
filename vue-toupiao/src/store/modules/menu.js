
import axios from 'axios'
const state={
  all:[]
}
const mutations = {
  loadMenus(state, menus){
    state.all=menus
  },
  addMenu(state,menu){
    state.all.push(menu)
  }
}
const actions ={
  loadMenus({ commit }){
    axios.get(`http://localhost:3008/menus`).then( res => {
      const menus=res.data
      commit('loadMenus',menus)
    })
  },
  addMenu({ commit },{text}){
    axios.post(`http://localhost:3008/menus`,{text}).then( res => {
      const menu=res.data
      console.log(res.data);
      commit('addMenu',menu)
    })
  }
}
export default{
  state,mutations,actions
}
