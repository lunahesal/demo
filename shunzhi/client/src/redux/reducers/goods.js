
export default function goodsReducer(state=[],action){
  switch(action.type){
    case 'LOAD_GOODS':
      return action.goods
      default:
      return state
  }
}
