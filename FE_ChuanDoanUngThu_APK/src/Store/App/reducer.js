import { TYPE_ACTION } from '../../Contants'


const initialState = {
   isSplash: true
}

const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE_ACTION.HIDE_SPLASH:
         return {
            ...state,
            isSplash: false
         }

      default:
         return state;
   }
}

export default Reducer