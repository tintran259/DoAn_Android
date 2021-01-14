import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { StylesRegisterScreen } from '../Assets/Style/RegisterStyle'
import { useNavigation } from '@react-navigation/native'
import { FormRegister } from '../Components/RegisterScreen'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'
import { asyncRegister } from '../Store/User/action'
import { getDateByTimeZoneDay } from '../Contants'

export default function RegisterScreen() {
   const dispatch = useDispatch();
   const navigation = useNavigation();
   const dateNow = getDateByTimeZoneDay(new Date())

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
      age: dateNow,
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
                  }, 2500)
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
                  <Icon name="arrowleft" size={25} color="#2d3436" />
               </TouchableOpacity>
            </View>
            <View style={StylesRegisterScreen.titleHeader}>
               <Text style={StylesRegisterScreen.labelHeader}>Đăng kí</Text>
            </View>
            <View style={StylesRegisterScreen.btnSubmit}>
               <TouchableOpacity style={StylesRegisterScreen.btnSave} onPress={handleSubmitFormRegister}>
                  <Text style={StylesRegisterScreen.labelSave}>Lưu</Text>
               </TouchableOpacity>
            </View>
         </View>
         <ScrollView >
            <FormRegister {...initialProps} />
         </ScrollView>
         <Modal
            animationOutTiming={1000}
            isVisible={isShowModal}
            style={{ alignItems: "center" }}
            onBackdropPress={handleHideModalRegister}
         >
            <View style={StylesRegisterScreen.modal}>
               <View style={StylesRegisterScreen.headerModal}>
                  <Text style={StylesRegisterScreen.labelHederModal}>
                     Thông báo
                  </Text>
               </View>
               <View style={StylesRegisterScreen.content}>
                  <Text style={StylesRegisterScreen.labelContent}>
                     Bạn đã đăng kí thành công !
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