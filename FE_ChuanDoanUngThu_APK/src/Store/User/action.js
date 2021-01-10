import { PostLoginandRegister } from '../../Services/Auth'
import { UserChangeInfor } from '../../Services/User'
import { TYPE_ACTION } from '../../Contants'
import { actShowLoading, actHideLoading } from '../App/action'


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
export const getUserById = (dataUser) => {
   return {
      type: TYPE_ACTION.GET_USER_BY_ID,
      payload: {
         dataUser
      }
   }
}

export const EditInforSuccessed = () => {
   return {
      type: TYPE_ACTION.EDIT_INFOR_USER_SUCCESSED
   }
}



export const asyncRegister = ({ fullname, username, password, address, phone, indentify, gender, age, fullnameGuardian, phoneGuardian }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await PostLoginandRegister.Register({ fullname, username, password, address, phone, indentify, gender, age, fullnameGuardian, phoneGuardian })
         if (response.data.status === 200) {
            console.log("response:", response);
            dispatch(actHideLoading())
            return {
               ok: true
            }
         } else {
            dispatch(actHideLoading())
            return {
               ok: false,
               err: response.data.message
            }
         }
      }
      catch (error) {
         dispatch(actHideLoading())
         console.log("Err:", error);
      }
   }
}

export const asyncLogin = ({ username, password }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await PostLoginandRegister.Login({ username, password })
         console.log("response", response.data);
         if (response.data.status === 200) {
            const token = response.data.data[0].id;
            const dataUser = response.data.data[0];
            dispatch(loginSuccess(token, dataUser))
            dispatch(actHideLoading())
            return {
               ok: true
            }
         } else {
            dispatch(actHideLoading())
            return {
               ok: false
            }
         }
      } catch (error) {
         dispatch(actHideLoading())
         return {
            ok: false
         }
      }
   }
}

export const asyncChangePassword = ({ idUser, old_password, new_password }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await PostLoginandRegister.ChangePassword({ idUser, old_password, new_password })
         console.log("response", response.data);
         if (response.status === 200) {
            dispatch(actHideLoading())
            return {
               ok: true
            }
         } else {
            dispatch(actHideLoading())
            return {
               ok: false
            }
         }
      } catch (error) {
         dispatch(actHideLoading())
         return {
            ok: false
         }
      }
   }
}

export const asyncEditInforUser = ({ userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await UserChangeInfor.EditInforUser({ userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian })
         console.log("response", response.data);
         if (response.status === 200) {
            dispatch(actHideLoading())
            return {
               ok: true
            }
         } else {
            dispatch(actHideLoading())
            return {
               ok: false
            }
         }
      } catch (error) {
         dispatch(actHideLoading())
         return {
            ok: false
         }
      }
   }
}

export const asyncGetUserById = ({ userId }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await UserChangeInfor.GetuserByID({ userId })
         if (response.data.status === 200) {
            const dataUser = response.data.data[0];
            dispatch(getUserById(dataUser))
            dispatch(actHideLoading())
         }
      } catch (err) {
         dispatch(actHideLoading())
         console.log("Errr loi roi ne", err);
      }
   }
}