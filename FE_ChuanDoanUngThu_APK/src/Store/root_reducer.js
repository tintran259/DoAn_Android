import { combineReducers } from 'redux'
import AppReducer from './App/reducer'
import UserReducer from './User/reducer'
import TestReducer from './Test/reducer'
import DoctorReducer from './Doctor/reducer'
import HospitalReducer from './Hospital/reducer'
import HistoryReducer from './History/reducer'
import LocationReducer from './Location/reducer'

const MyReducer = combineReducers({
   App: AppReducer,
   User: UserReducer,
   Result: TestReducer,
   Doctor: DoctorReducer,
   Hospital: HospitalReducer,
   History: HistoryReducer,
   Location: LocationReducer
})

export default MyReducer