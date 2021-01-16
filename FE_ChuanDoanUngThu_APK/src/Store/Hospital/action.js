import { TYPE_ACTION } from '../../Contants'
import { GetHostpital } from '../../Services/Hospital'
import { actHideLoading, actShowLoading } from '../App/action'
export const actGetListHospital = (listHospital) => {
   return {
      type: TYPE_ACTION.GET_LIST_HOSPITAL,
      payload: {
         listHospital
      }
   }
}


export const asyncGetListHospital = () => {
   return async (dispatch) => {
      try {
         const response = await GetHostpital.ListHospital()
         if (response.status === 200) {
            const listHospital = response.data.data
            dispatch(actGetListHospital(listHospital))
            return {
               ok: true
            }
         }
      } catch (error) {
         return {
            ok: false
         }
      }
   }
}