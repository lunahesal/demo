const activeuser = {}



export default function activeuserReducer(state=activeuser,action){
  switch(action.type){
    case 'ACTIVEUSER':
      return action.user
    case 'UP_DATE':
      const upState = {...state,slogn:action.slogn}
      console.log(upState);
      return upState

      default:
      return state
  }
}
