import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { StylesRegisterScreen } from '../Assets/Style/RegisterStyle'
import { useNavigation } from '@react-navigation/native'
import { FormRegister } from '../Components/RegisterScreen'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'
import { asyncRegister } from '../Store/User/action'

export default function RegisterScreen() {
   const dispatch = useDispatch();
   const navigation = useNavigation();

   const [isShowModal, setIsShowModal] = useState(false)
   const [isHandleRegister, setIsHandleRegister] = useState(false)
   const [formRegister, setFormRegister] = useState({
      fullname: "",
      address: "",
      username: "",
      password: "",
      rePassword: "",
      phone: "",
      indentify: "",
      gender: "0",
      age: "",
      fullnameGuardian: "",
      phoneGuardian: ""
   })
   const validateFormRegister = () => {
      if (
         formRegister.fullname === "" ||
         formRegister.address === "" ||
         formRegister.age === "" ||
         formRegister.fullnameGuardian === "" ||
         formRegister.indentify === "" ||
         formRegister.password === "" ||
         formRegister.rePassword === "" ||
         formRegister.phoneGuardian === "" ||
         formRegister.phone === "" ||
         formRegister.username === ""
      ) {
         return false
      } else {
         return true
      }
   }
   const handleBack = () => {
      navigation.goBack();
   }
   const handleSubmitFormRegister = () => {
      setIsHandleRegister(true)
      setTimeout(() => {
         setIsHandleRegister(false)
      }, 3000)
      const {
         fullname,
         username,
         password,
         address,
         phone,
         indentify,
         gender,
         age,
         fullnameGuardian,
         phoneGuardian } = formRegister
      if (validateFormRegister()) {
         dispatch(asyncRegister({
            fullname,
            username,
            password,
            address,
            phone,
            indentify,
            gender,
            age,
            fullnameGuardian,
            phoneGuardian
         }))
            .then((res) => {
               if (res.ok) {
                  setIsShowModal(true)
                  setTimeout(() => {
                     setIsShowModal(false)
                  }, 2000)
                  setTimeout(() => {
                     navigation.navigate('Login')
                  }, 3000)
               } else {
                  alert(res.err)
               }
            })
      }
   }
   const handleHideModalRegister = () => {
      setIsShowModal(false)
   }

   const initialProps = {
      formRegister,
      setFormRegister,
      isHandleRegister,
      setIsHandleRegister
   }

   return (
      <View style={StylesRegisterScreen.container}>
         <View style={StylesRegisterScreen.header}>
            <View style={StylesRegisterScreen.btnBackView}>
               <TouchableOpacity style={StylesRegisterScreen.btnBack} onPress={handleBack}>
                  <Icon name="left" size={20} color="#E33B3B" />
               </TouchableOpacity>
            </View>
            <View style={StylesRegisterScreen.titleHeader}>
               <Image style={StylesRegisterScreen.logo} source={require('../Assets/Image/logo.png')} />
               <Text style={StylesRegisterScreen.labelHeader}>Register</Text>
            </View>
            <View style={StylesRegisterScreen.btnSubmit}>
               <TouchableOpacity style={StylesRegisterScreen.btnBack} onPress={handleSubmitFormRegister}>
                  <Icon name="check" size={20} color="#E33B3B" />
               </TouchableOpacity>
            </View>
         </View>
         <ScrollView >
            <FormRegister {...initialProps} />
         </ScrollView>
         <Modal
            isVisible={isShowModal}
            style={{ alignItems: "center" }}
            onBackdropPress={handleHideModalRegister}
         >
            <View style={StylesRegisterScreen.modal}>
               <View style={StylesRegisterScreen.headerModal}>
                  <Text style={StylesRegisterScreen.labelHederModal}>
                     Notification
                  </Text>
               </View>
               <View style={StylesRegisterScreen.content}>
                  <Text style={StylesRegisterScreen.labelContent}>
                     You register successed !
                  </Text>
               </View>
               <View style={StylesRegisterScreen.footer}>
                  <TouchableOpacity style={StylesRegisterScreen.btnOk} onPress={handleHideModalRegister}>
                     <Text style={StylesRegisterScreen.labelBtnOk}>Ok</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </View>
   )
}