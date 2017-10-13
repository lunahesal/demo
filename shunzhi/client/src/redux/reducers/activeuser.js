const activeuser = {}



export default function activeuserReducer(state=activeuser,action){
  switch(action.type){
    case 'ACTIVEUSER':
      const newState = action.user
      console.log(newState);
      return newState
    case 'UP_DATE':
      const upState = {...state,slogn:action.slogn}
      console.log(upState);
      return upState

      default:
      return state
  }
}
