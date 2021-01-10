import { TYPE_ACTION } from '../../Contants'


export const actHideSplashScreen = () => {
   return {
      type: TYPE_ACTION.HIDE_SPLASH
   }
}

export const actShowLoading = () => {
   return {
      type: TYPE_ACTION.SHOW_LOADING
   }
}
export const actHideLoading = () => {
   return {
      type: TYPE_ACTION.HIDE_LOADING
   }
}