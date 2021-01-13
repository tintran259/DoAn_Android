import { TYPE_ACTION } from '../../Contants'


const initialState = {
   listDoctor: []
}

const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.GET_LIST_DOCTOR:
         return {
            ...state,
            listDoctor: action.payload.listDoctor
         }
      default:
         return state;
   }
}

export default Reducer