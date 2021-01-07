import { combineReducers } from 'redux'
import AppReducer from './App/reducer'
import UserReducer from './User/reducer'
const MyReducer = combineReducers({
   App: AppReducer,
   User: UserReducer
})

export default MyReducer