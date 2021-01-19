import { TYPE_ACTION } from '../../Contants'


const initialState = {
   listNewFeed: [],
   itemNewFeed: {}
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.GET_LIST_NEWFEED:
         return {
            ...state,
            listNewFeed: action.payload.listNewFeed
         }
      case TYPE_ACTION.GET_LIST_NEWFEED_DETAIL:
         return {
            ...state,
            itemNewFeed: action.payload.itemNewFeed
         }
      default:
         return state;
   }
}

export default reducer