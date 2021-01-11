import { TYPE_ACTION } from '../../Contants'

const intialState = {
   ResultTest: null,
   formTest: {}
}

const reducer = (state = intialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.GET_RESULT_TEST:
         return {
            ...state,
            ResultTest: action.payload.resultsTest
         }
      case TYPE_ACTION.GET_FORM_TEST:
         return {
            ...state,
            formTest: action.payload.formText
         }
      default:
         return state;
   }
}

export default reducer