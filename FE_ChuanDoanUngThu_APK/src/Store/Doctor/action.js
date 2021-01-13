import { TYPE_ACTION } from '../../Contants'
import { GetListDoctor } from '../../Services/Doctor'
import { actHideLoading, actShowLoading } from '../App/action'
export const actGetListDoctor = (listDoctor) => {
   return {
      type: TYPE_ACTION.GET_LIST_DOCTOR,
      payload: {
         listDoctor
      }
   }
}


export const asyncGetListDoctor = () => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await GetListDoctor.ListDoctor()
         if (response.status === 200) {
            const listDoctor = response.data.data
            dispatch(actGetListDoctor(listDoctor))
         }
      } catch (error) {
         console.log("error", error);
      }
   }
}