import { combineReducers } from 'redux'
import AppReducer from './App/reducer'
import UserReducer from './User/reducer'
import TestReducer from './Test/reducer'
const MyReducer = combineReducers({
   App: AppReducer,
   User: UserReducer,
   Result: TestReducer
})

export default MyReducer