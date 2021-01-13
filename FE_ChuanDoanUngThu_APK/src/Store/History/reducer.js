import { TYPE_ACTION } from '../../Contants'


const initialState = {
   listHistory: [],
   itemHistory: {}
}

const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.GET_LIST_TEST_HISTORY:
         return {
            ...state,
            listHistory: action.payload.listHistory
         }
      case TYPE_ACTION.GET_LIST_HISTORY_DETAIL:
         return {
            ...state,
            itemHistory: action.payload.itemHistory
         }
      default:
         return state;
   }
}

export default Reducer