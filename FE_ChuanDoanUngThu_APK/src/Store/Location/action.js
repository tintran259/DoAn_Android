import { TYPE_ACTION } from '../../Contants'
import { LOCATION } from '../../Services/Location'

export const actGetListLocation = (listLocation) => {
   return {
      type: TYPE_ACTION.GET_LIST_LOCATION,
      payload: {
         listLocation
      }
   }
}

export const asyncGetListLocation = () => {
   return async (dispatch) => {
      try {
         const response = await LOCATION.GetListLocation();
         console.log("response Location:", response);
         if (response.status === 200) {
            const listLocation = response.data.data;
            dispatch(actGetListLocation(listLocation))
         }
      } catch (error) {
         console.log("Error Location:", error);
      }
   }
}