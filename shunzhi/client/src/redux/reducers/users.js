
export default function userReducer(state=[],action){
  switch(action.type){

    case 'LOGIN':
      return action.users
      default:
      return state
  }
}
