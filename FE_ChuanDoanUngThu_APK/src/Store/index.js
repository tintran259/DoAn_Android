import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import MyReducer from './root_reducer'
import Logger from 'redux-logger'

const Store = createStore(
   MyReducer,
   applyMiddleware(Thunk, Logger)
)

export default Store