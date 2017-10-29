
const cart = {
  cartCount:0,
  total:0,
  dishes: []
}

export default function cartReducer(state=cart, action) {
  switch (action.type) {
    case 'LOAD_DISHES':
      return {...state, cartCount: action.dishes.length, dishes:action.dishes }
    case 'DELETE_DISHES':

      return {...state, cartCount: 0, dishes:[] }
    case 'ADD_CART':
      const newDishes = [...state.dishes,action.newGood]
      return {...state, cartCount: state.cartCount + 1, dishes:newDishes }
    case 'ADD_COUNT':
      const addDishes = state.dishes.map( t => {
        if(t.id ===action.id){
          return {...t,count:t.count+1}
        }
        return t
      })
      return {...state,dishes:addDishes}
    case 'SUB_COUNT':
      const subDishes = state.dishes.map( t => {
        if(t.id ===action.id && t.count !== 0){
          return {...t,count:t.count-1}
        }
        return t
      })
      return {...state,dishes:subDishes}
    default:
      return state
  }
}
