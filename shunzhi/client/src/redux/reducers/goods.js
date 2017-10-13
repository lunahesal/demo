const goods = []



export default function goodsReducer(state=goods,action){
  switch(action.type){

    case 'LOAD_GOODS':
      const newState = action.goods
      return newState
      default:
      return state
  }
}
