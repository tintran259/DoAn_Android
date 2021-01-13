import { TYPE_ACTION } from '../../Contants'


const initialState = {
   listHospital: []
}

const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.GET_LIST_HOSPITAL:
         return {
            ...state,
            listHospital: action.payload.listHospital
         }
      default:
         return state;
   }
}

export default Reducer