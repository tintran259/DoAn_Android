import { TYPE_ACTION } from '../../Contants'
import { GetListHistory } from '../../Services/HistoryUser'
import { GetListDoctor } from '../../Services/Doctor'
import { GetHostpital } from '../../Services/Hospital'
import { actHideLoading, actShowLoading } from '../App/action'



export const actGetListHistoryUser = (listHistory) => {
   return {
      type: TYPE_ACTION.GET_LIST_TEST_HISTORY,
      payload: {
         listHistory
      }
   }
}

export const actGetListHistoryDetail = (itemHistory) => {
   return {
      type: TYPE_ACTION.GET_LIST_HISTORY_DETAIL,
      payload: {
         itemHistory
      }
   }
}


export const asyncGetListHistoryUser = ({ userId }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await GetListHistory.HistoryUser({ userId })
         console.log("response getLISThISTORY:", response);
         if (response.status === 200) {
            dispatch(actHideLoading())
            const listHistory = response.data.data
            dispatch(actGetListHistoryUser(listHistory))
         } else {
            dispatch(actHideLoading())
            dispatch(actGetListHistoryUser([]))
         }
      } catch (error) {
         dispatch(actHideLoading())
         console.log("error", error);
      }
   }
}
export const asyncPostTestHistory = ({ baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, timestamp, testResult }) => {
   console.log("ASNTADSADSDASD:", { baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, timestamp, testResult });
   return async (dispatch) => {
      try {
         const response = await GetListHistory.PostHistory({ baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, timestamp, testResult })
         console.log("response getLISThISTORY:", response);
         if (response.status === 200) {
            return {
               ok: true,
               data: response.data.data[0].id
            }
         } else {
            return {
               ok: false
            }
         }
      } catch (error) {
         console.log("error", error);
         return {
            ok: false
         }
      }
   }
}

export const asyncGetListDoctorHistory = ({ predictId, doctorId }) => {
   return async (dispatch) => {
      try {
         const response = await GetListDoctor.listDoctorHistory({ predictId, doctorId })
         console.log("Response ListDoctorHistory:", response);
      } catch (error) {
         console.log("error GetListDoctorHistory:", error);
      }
   }
}
export const asyncGetListHospitalHistory = ({ predictId, hospitalId }) => {
   return async (dispatch) => {
      try {
         const response = await GetHostpital.listHospitalHistory({ predictId, hospitalId })
         console.log("Response ListHospitalHistory:", response);
      } catch (error) {
         console.log("error ListHospitalHistory:", error);
      }
   }
}

export const asyncGetListDoctorFlowPredictId = ({ predictId }) => {
   return async (dispatch) => {
      try {
         const response = await GetListDoctor.getListDoctorHistory({ predictId })
         console.log("Response ListDoctorHistory:", response);
         if (response.status === 200) {
            return {
               ok: true,
               data: response.data.data
            }
         }
      } catch (error) {
         console.log("error ListDoctorHistory:", error);
      }
   }
}

export const asyncGetListHospitalFlowPredictId = ({ predictId }) => {
   return async (dispatch) => {
      try {
         const response = await GetHostpital.getListHospitalHistory({ predictId })
         console.log("Response ListHospitalHistory:", response);
         if (response.status === 200) {
            return {
               ok: true,
               data: response.data.data
            }
         }
      } catch (error) {
         console.log("error ListHospitalHistory:", error);
      }
   }
}