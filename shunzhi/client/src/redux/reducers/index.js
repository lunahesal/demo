import users from './users'
import comments from './comment'
import activeuser from './activeuser'
import goods from './goods'
import cart from './cart'
import alert from './alert'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    comments,
    users,
    activeuser,
    goods,
    cart,
    alert
})
export default rootReducer
