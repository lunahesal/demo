import { createStore } from 'redux'
 const initState = [
   {
     id:1,
     text:'hello'
   },
   {
     id:2,
     text:'hi'
   }
 ]
 const rootReducer = (state=initState,action) => {
   switch (action.type) {
     case 'ADD_COMMENT':
       return [...state,{text:action.text,id:state.length+1}]

     default:
       return state
   }
 }
 const store = createStore(rootReducer)
export default store
