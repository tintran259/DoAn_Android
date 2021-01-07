import { PostLoginandRegister } from '../../Services/Auth'
import { TYPE_ACTION } from '../../Contants'



export const loginSuccess = (token) => {
   return {
      type: TYPE_ACTION.LOGIN_SUCCESS,
      payload: {
         token
      }
   }
}
export const asyncRegister = ({ fullname, username, password, address, phone, indentify, gender, age, fullnameGuardian, phoneGuardian }) => {
   return async (dispatch) => {
      try {
         const response = await PostLoginandRegister.Register({ fullname, username, password, address, phone, indentify, gender, age, fullnameGuardian, phoneGuardian })
         if (response.data.status === 200) {
            return {
               ok: true
            }
         } else {
            return {
               ok: false,
               err: response.data.message
            }
         }
      }
      catch (error) {
         console.log("Err:", error);
      }
   }
}

export const asyncLogin = ({ username, password }) => {
   return async (dispatch) => {
      try {
         const response = await PostLoginandRegister.Login({ username, password })
         console.log("response", response.data);
         if (response.data.status === 200) {
            const token = response.data.data[0].id;
            dispatch(loginSuccess(token))
            return {
               ok: true
            }
         } else {
            return {
               ok: false
            }
         }
      } catch (error) {
         return {
            ok: false
         }
      }
   }
}