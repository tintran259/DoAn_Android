import { TYPE_ACTION } from '../../Contants'
import { GetListHistory } from '../../Services/HistoryUser'
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
            console.log("listHistory:", listHistory);
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
export const asyncPostTestHistory = ({ baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, doctorId, hospitalId, timestamp, testResult }) => {
   console.log("ASNTADSADSDASD:", baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, doctorId, hospitalId, timestamp, testResult);


   return async (dispatch) => {
      try {
         const response = await GetListHistory.PostHistory({ baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, doctorId, hospitalId, timestamp, testResult })
         console.log("response getLISThISTORY:", response);
         if (response.status === 200) {
            return {
               ok: true
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