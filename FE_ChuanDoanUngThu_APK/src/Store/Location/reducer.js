import { TYPE_ACTION } from '../../Contants'


const initialState = {
   listLocation: []
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.GET_LIST_LOCATION:
         return {
            ...state,
            listLocation: action.payload.listLocation
         }

      default:
         return state
   }
}

export default reducer