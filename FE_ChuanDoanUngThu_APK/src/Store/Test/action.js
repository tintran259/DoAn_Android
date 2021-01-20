import { actHideLoading, actShowLoading } from '../App/action'
import { TYPE_ACTION } from '../../Contants'
import { TestCanncerAI } from '../../Services/TestCancer'


export const actGetResultsTest = (resultsTest) => {
   return {
      type: TYPE_ACTION.GET_RESULT_TEST,
      payload: {
         resultsTest
      }
   }
}
export const actGetFormTest = (formText) => {
   return {
      type: TYPE_ACTION.GET_FORM_TEST,
      payload: {
         formText
      }
   }
}

export const asyncGetTestCancer = ({ baso, eos, mono, neu, lym, wbc, hct, hgb, rbc, mch, mchc, mcv, mpv, rdw, pdw, plt, tpttbm, pct, }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await TestCanncerAI.Test({ baso, eos, mono, neu, lym, wbc, hct, hgb, rbc, mch, mchc, mcv, mpv, rdw, pdw, plt, tpttbm, pct, })
         console.log("response Result:", response)
         dispatch(actHideLoading())
         if (response.status === 200) {
            const resultTest = response.data
            const [result] = resultTest
            console.log("result:", result);
            dispatch(actGetResultsTest(result))
            return {
               ok: true,
               data: result
            }
         } else {
            return {
               ok: false
            }
         }
      } catch (err) {
         console.log("err Result:", err);
         dispatch(actHideLoading())
         return {
            ok: false
         }
      }
   }
}