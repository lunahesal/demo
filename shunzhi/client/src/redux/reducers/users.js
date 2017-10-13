const users = []



export default function userReducer(state=users,action){
  switch(action.type){
    
    case 'LOGIN':
      state=action.users
      return state

      default:
      return state
  }
}
