import { TYPE_ACTION } from '../../Contants'


const initialState = {
   isSplash: true,
   isLoading: false
}

const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.HIDE_SPLASH:
         return {
            ...state,
            isSplash: false
         }
      case TYPE_ACTION.SHOW_LOADING:
         return {
            ...state,
            isLoading: true
         }
      case TYPE_ACTION.HIDE_LOADING:
         return {
            ...state,
            isLoading: false
         }
      default:
         return state;
   }
}

export default Reducer