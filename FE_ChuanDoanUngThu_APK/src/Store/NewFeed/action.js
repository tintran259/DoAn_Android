import { TYPE_ACTION } from '../../Contants'
import { NewFeed } from '../../Services/NewFeed'
import { actShowLoading, actHideLoading } from '../App/action'

export const actGetListNewFeed = (listNewFeed) => {
   return {
      type: TYPE_ACTION.GET_LIST_NEWFEED,
      payload: {
         listNewFeed
      }
   }
}

export const actGetListNewFeedDetail = (itemNewFeed) => {
   return {
      type: TYPE_ACTION.GET_LIST_NEWFEED_DETAIL,
      payload: {
         itemNewFeed
      }
   }
}


export const asyncGetListNewFeed = () => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await NewFeed.GetListNewFeed()
         if (response.status === 200) {
            const listNewFeed = response.data.data
            dispatch(actGetListNewFeed(listNewFeed))
            dispatch(actHideLoading())
         }
      } catch (error) {
         dispatch(actHideLoading())
         console.log("Error Newfeed:", error);
      }
   }
}