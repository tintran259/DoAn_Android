import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { StylesLoginScreen } from '../Assets/Style/LoginStyle'
import { FormLogin } from '../Components/LoginScreen'
import { asyncLogin } from '../Store/User/action'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import IconAntd from 'react-native-vector-icons/AntDesign'



export default function LoginScreen() {
   const dispatch = useDispatch()
   const navigation = useNavigation()
   const [isOnPressLogin, setIsOnPressLogin] = useState(false)
   const [isShowToast, setIsShowToast] = useState(false)
   const [formLogin, setFormLogin] = useState({
      username: "",
      password: "",
   })

   const validateFormLogin = ({ username, password }) => {
      if (username.trim() === "" || password.trim() === "") {
         return false
      }
      return true
   }
   const handleLoginSuccess = () => {
      setIsOnPressLogin(true)
      setTimeout(() => {
         setIsOnPressLogin(false)
      }, 3000)
      const { username, password } = formLogin
      if (validateFormLogin({ username, password })) {
         dispatch(asyncLogin({ username, password }))
            .then((res) => {
               if (res.ok === false) {
                  setIsShowToast(true)
                  setTimeout(() => {
                     setIsShowToast(false)
                  }, 3000)
               } else {
                  setIsShowToast(true)
                  setTimeout(() => {
                     setIsShowToast(false)
                  }, 3000)
               }
            })
      }
   }
   const initProps = {
      formLogin,
      setFormLogin,
      isOnPressLogin,
      setIsOnPressLogin,
      handleLoginSuccess,
   }
   return (
      <View style={StylesLoginScreen.container}>
         <ScrollView >
            <View style={StylesLoginScreen.header}>
               <Image style={StylesLoginScreen.logo} source={require("../Assets/Image/logo.png")} />
               <Text style={StylesLoginScreen.textLogo}>INTELCONS</Text>
            </View>
            {
               isShowToast ?
                  <View style={StylesLoginScreen.toastFail}>
                     <IconAntd name="frowno" style={StylesLoginScreen.iconFail} />
                     <Text style={StylesLoginScreen.textFail}>Wrong password or username</Text>
                  </View> :
                  <Text style={{ display: "none" }}></Text>
            }
            <FormLogin {...initProps} />
         </ScrollView>
      </View>
   )
}