import { TYPE_ACTION } from '../../Contants'


const initialState = {
   listHospital: [],
   itemHospital: {}
}

const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.GET_LIST_HOSPITAL:
         return {
            ...state,
            listHospital: action.payload.listHospital
         }
      case TYPE_ACTION.GET_LIST_HISTORY_DETAIL:
         return {
            ...state,
            itemHospital: action.payload.itemHospital
         }
      default:
         return state;
   }
}

export default Reducer