import { combineReducers } from 'redux'
import AppReducer from './App/reducer'

const MyReducer = combineReducers({
   App: AppReducer
})

export default MyReducer