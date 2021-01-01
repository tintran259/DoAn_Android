import { createStore } from 'redux'
import MyReducer from './root_reducer'


const Store = createStore(MyReducer)

export default Store