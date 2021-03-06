import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


//Style + Icon
import { StylesEditProfile } from '../Assets/Style/EditProfileStyle'
import IconAntd from 'react-native-vector-icons/AntDesign'

//Action
import { asyncChangePassword, logout } from '../Store/User/action'

export default function HistoryScreen() {
   const dispatch = useDispatch()
   const navigation = useNavigation()
   const dataUser = useSelector(state => state.User.dataUser)
   const idUser = dataUser && dataUser.id
   const [isConfirm, setIsConfirm] = useState(false)
   const [checkRePassword, setCheckRePassword] = useState(false)
   const [ShowTrueOrFalse, setShowTrueOrFalse] = useState(false)
   const [isShowFail, setIsShowFail] = useState(false)
   const [isShowSuccess, setIsShowSuccess] = useState(false)
   const [changePass, setChangePass] = useState({
      old_password: "",
      new_password: "",
      re_password: ""
   })
   //Navigation
   const handleBack = () => {
      navigation.goBack()
   }


   //Logic
   const validate = () => {
      if (changePass.old_password == "" ||
         changePass.new_password == "" ||
         changePass.re_password == "") {
         return false
      }
      return true
   }

   //When Click Btn ChangePassword
   const handleConFirm = () => {
      setIsConfirm(true)
      if (validate()) {
         const { old_password, new_password } = changePass;
         dispatch(asyncChangePassword({ idUser, old_password, new_password }))
            .then((res) => {
               console.log("res:", res);
               if (res.ok) {
                  setIsShowSuccess(true)
               } else {
                  setIsShowFail(true)
                  setChangePass({
                     old_password: "",
                     new_password: "",
                     re_password: ""
                  })
                  setIsConfirm(false)
               }
            })
      }
   }


   //Check Re_Password
   const onChangeRePassword = (text) => {
      setChangePass(
         {
            ...changePass,
            re_password: text
         }
      )
      if (text !== changePass.new_password) {
         setCheckRePassword(true)
         setShowTrueOrFalse(false)
      } else if (text === " ") {
         setCheckRePassword(false)
      } else {
         setCheckRePassword(true)
         setShowTrueOrFalse(true)
      }
   }

   //Check Re_Password When OnBlur
   const onBlurRe_passord = (e) => {
      const repassword = e.nativeEvent.text
      if (repassword !== changePass.new_password) {
         setCheckRePassword(true)
         setShowTrueOrFalse(false)
      } else if (repassword === "") {
         setCheckRePassword(false)
      } else {
         setCheckRePassword(true)
         setShowTrueOrFalse(true)
      }
   }


   //Modal
   const handleCanCelModalFail = () => {
      setIsShowFail(false)
   }
   const handleOkModalSuccess = () => {
      setIsShowSuccess(false)
      dispatch(logout())
   }

   return (
      <View style={StylesEditProfile.ViewChangePass}>
         <View style={StylesEditProfile.header}>
            <TouchableOpacity style={StylesEditProfile.btnBack} onPress={handleBack}>
               <IconAntd name="arrowleft" style={StylesEditProfile.iconBACK} />
            </TouchableOpacity>
            <Text style={StylesEditProfile.titleHeader}>Thay đổi mật khẩu</Text>
            <TouchableOpacity style={StylesEditProfile.btnSave} onPress={handleConFirm} >
               <Text style={StylesEditProfile.textbtnSave}>Lưu</Text>
            </TouchableOpacity>
         </View>
         <View style={StylesEditProfile.formEdit}>
            <View style={StylesEditProfile.formInputItem}>
               <View style={StylesEditProfile.itemForm}>
                  <Text style={StylesEditProfile.titleItem}>Mật khẩu</Text>
                  <TextInput
                     value={changePass.old_password}
                     onChangeText={text => setChangePass({ ...changePass, old_password: text })}
                     placeholder="Mật khẩu ..."
                     style={[
                        StylesEditProfile.inputEdit,
                        isConfirm && changePass.old_password === "" ? { borderBottomColor: "#e74c3c" } : ""
                     ]}
                  />
                  {
                     isConfirm && changePass.old_password === "" &&
                     <Text style={StylesEditProfile.checkRePassword}>Mời bạn nhập mật khẩu cũ</Text>
                  }
               </View>
               <View style={StylesEditProfile.itemForm}>
                  <Text style={StylesEditProfile.titleItem}>Mất khẩu mới</Text>
                  <TextInput
                     value={changePass.new_password}
                     onChangeText={text => setChangePass({ ...changePass, new_password: text })}
                     placeholder="Mất khẩu mới ..."
                     style={[
                        StylesEditProfile.inputEdit,
                        isConfirm && changePass.new_password === "" ? { borderBottomColor: "#e74c3c" } : ""
                     ]}
                     secureTextEntry={true}

                  />
                  {
                     isConfirm && changePass.new_password === "" &&
                     <Text style={StylesEditProfile.checkRePassword}>Mời bạn nhập mật khẩu mới</Text>
                  }
               </View>
               <View style={StylesEditProfile.itemForm}>
                  <Text style={StylesEditProfile.titleItem}>Nhập lại mật khẩu mới</Text>
                  <TextInput
                     value={changePass.re_password}
                     onChangeText={text => onChangeRePassword(text)}
                     placeholder="Nhập lại mất khẩu mới ..."
                     style={[
                        StylesEditProfile.inputEdit,
                        isConfirm && changePass.re_password === "" ? { borderBottomColor: "#e74c3c" } : ""
                     ]}
                     secureTextEntry={true}
                     onEndEditing={onBlurRe_passord}
                  />
                  {
                     isConfirm && changePass.re_password === "" &&
                     <Text style={StylesEditProfile.checkRePassword}>Mời bạn nhập lại mật khẩu</Text>
                  }
                  {
                     checkRePassword
                        ?
                        ShowTrueOrFalse
                           ?
                           <IconAntd style={[StylesEditProfile.checkRePassword, { color: "#2ecc71" }]} name="checkcircleo" size={19} />
                           :
                           <IconAntd style={[StylesEditProfile.checkRePassword, { color: "#e74c3c" }]} name="closecircleo" size={19} />
                        :
                        <Text style={{ display: "none" }}></Text>
                  }
               </View>
            </View>
         </View>
         <Modal
            onBackdropPress={handleCanCelModalFail}
            isVisible={isShowFail}
            style={{ margin: 0, alignItems: "center" }}
         >
            <View style={StylesEditProfile.modalFail}>
               <Text style={StylesEditProfile.titleModal}>Thông báo</Text>
               <Text style={StylesEditProfile.contentModal}>Mật khẩu củ không chính sác</Text>
               <TouchableOpacity style={StylesEditProfile.btnCancel} onPress={handleCanCelModalFail}>
                  <Text style={StylesEditProfile.textbtnCancle}>Thoát</Text>
               </TouchableOpacity>
            </View>
         </Modal>
         <Modal
            isVisible={isShowSuccess}
            style={{ margin: 0, alignItems: "center" }}
         >
            <View style={StylesEditProfile.modalFail}>
               <Text style={StylesEditProfile.titleModal}>Thông báo</Text>
               <Text style={[StylesEditProfile.contentModal, { width: 200 }]}>Mật khẩu thay đổi thành công, ấn OK để đăng nhập lại</Text>
               <TouchableOpacity style={[StylesEditProfile.btnCancel, { marginTop: 10 }]} onPress={handleOkModalSuccess}>
                  <Text style={[StylesEditProfile.textbtnCancle]}>OK</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </View>
   )
}