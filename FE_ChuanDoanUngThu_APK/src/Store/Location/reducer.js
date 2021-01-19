import { TYPE_ACTION } from '../../Contants'


const initialState = {
   listLocation: [],
   locationNow: {
      id: "MN",
      name: "Miền Nam"
   },
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.GET_LIST_LOCATION:
         return {
            ...state,
            listLocation: action.payload.listLocation
         }
      case TYPE_ACTION.LOCATION_NOW:
         return {
            ...state,
            locationNow: action.payload.location
         }

      default:
         return state
   }
}

export default reducer