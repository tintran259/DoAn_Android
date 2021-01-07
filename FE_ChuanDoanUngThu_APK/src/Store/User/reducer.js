import { TYPE_ACTION } from '../../Contants'

const initialState = {
   ACCESS_TOKEN: null
}


const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.LOGIN_SUCCESS:
         return {
            ...state,
            ACCESS_TOKEN: action.payload.token
         }
      default:
         return state
   }
}

export default Reducer