import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { StylesRegisterScreen } from '../Assets/Style/RegisterStyle'
import { useNavigation } from '@react-navigation/native'
import { FormRegister } from '../Components/RegisterScreen'
import Modal from 'react-native-modal'

import Icon from 'react-native-vector-icons/AntDesign'


export default function RegisterScreen() {
   const [isShowModal, setIsShowModal] = useState(false)
   const navigation = useNavigation();
   const handleBack = () => {
      navigation.goBack();
   }
   useEffect(() => {
      if (isShowModal) {
         setTimeout(() => {
            setIsShowModal(false)
         }, 1000)
      }
   }, [isShowModal])
   const handleCheckFormRegister = () => {
      setIsShowModal(true)
   }
   const handleHideModalRegister = () => {
      setIsShowModal(false)
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
               <TouchableOpacity style={StylesRegisterScreen.btnBack} onPress={handleCheckFormRegister}>
                  <Icon name="check" size={20} color="#E33B3B" />
               </TouchableOpacity>
            </View>
         </View>
         <ScrollView >
            <FormRegister />
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