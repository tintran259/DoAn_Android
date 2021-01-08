import { PostLoginandRegister } from '../../Services/Auth'
import { UserChangeInfor } from '../../Services/User'
import { TYPE_ACTION } from '../../Contants'



export const loginSuccess = (token, dataUser) => {
   return {
      type: TYPE_ACTION.LOGIN_SUCCESS,
      payload: {
         token,
         dataUser
      }
   }
}
export const logout = () => {
   return {
      type: TYPE_ACTION.LOG_OUT,
   }
}
export const asyncRegister = ({ fullname, username, password, address, phone, indentify, gender, age, fullnameGuardian, phoneGuardian }) => {
   return async (dispatch) => {
      try {
         const response = await PostLoginandRegister.Register({ fullname, username, password, address, phone, indentify, gender, age, fullnameGuardian, phoneGuardian })
         if (response.data.status === 200) {
            console.log("response:", response);
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
            const dataUser = response.data.data[0];
            console.log('====================================');
            console.log("dataUser:", dataUser);
            console.log('====================================');
            dispatch(loginSuccess(token, dataUser))
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

export const asyncChangePassword = ({ idUser, old_password, new_password }) => {
   return async (dispatch) => {
      try {
         const response = await PostLoginandRegister.ChangePassword({ idUser, old_password, new_password })
         console.log("response", response.data);
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
         return {
            ok: false
         }
      }
   }
}

export const asyncEditInforUser = ({ userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian }) => {
   return async (dispatch) => {
      try {
         const response = await UserChangeInfor.EditInforUser({ userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian })
         console.log("response", response.data);
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
         return {
            ok: false
         }
      }
   }
}