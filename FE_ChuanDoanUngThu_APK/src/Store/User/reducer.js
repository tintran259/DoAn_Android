import { TYPE_ACTION } from '../../Contants'

const initialState = {
   ACCESS_TOKEN: null,
   dataUser: null,
   isEditUser: false
}


const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.LOGIN_SUCCESS:
         return {
            ...state,
            ACCESS_TOKEN: action.payload.token,
         }
      case TYPE_ACTION.GET_USER_BY_ID:
         return {
            ...state,
            dataUser: action.payload.dataUser
         }
      case TYPE_ACTION.LOG_OUT:
         return {
            ...state,
            ACCESS_TOKEN: null,
            dataUser: null
         }
      case TYPE_ACTION.EDIT_INFOR_USER_SUCCESSED:
         return {
            ...state,
            isEditUser: true
         }
      default:
         return state
   }
}

export default Reducer