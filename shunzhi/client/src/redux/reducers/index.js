import users from './users'
import comments from './comment'
import activeuser from './activeuser'
import goods from './goods'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    comments,
    users,
    activeuser,
    goods
})
export default rootReducer
