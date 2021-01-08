import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { StylesEditProfile } from '../Assets/Style/EditProfileStyle'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { FormEditProfile } from '../Components/EditProfileScreen'
import { useSelector } from 'react-redux'
import Modal from 'react-native-modal'


export default function HistoryScreen() {
   const dataUser = useSelector(state => state.User.dataUser)
   console.log("dataUser EditProfile:", dataUser);
   const navigation = useNavigation()
   const [isShowModalGender, setIsShowGender] = useState(false)
   const [userProfile, setUseProfile] = useState({
      userId: dataUser.id,
      fullname: dataUser.fullname,
      address: dataUser.address,
      gender: dataUser.gender,
      phone: dataUser.phone,
      birthday: "",
      nameGuardian: dataUser.gaurdian,
      phoneGuardian: dataUser.gaurdian_phone
   })
   const handleOpenGender = () => {
      setIsShowGender(true)
   }
   const handleCloseGender = () => {
      setIsShowGender(false)
   }

   const handleBackProfile = () => {
      navigation.goBack()
   }
   const handleSaveEdit = () => {
      console.log('====================================');
      console.log("Luu:", userProfile);
      console.log('====================================');
   }
   const handleChooseMale = () => {
      setUseProfile({
         ...userProfile,
         gender: "1"
      })
      setIsShowGender(false)
   }
   const handleChooseFeMale = () => {
      setUseProfile({
         ...userProfile,
         gender: "0"
      })
      setIsShowGender(false)
   }
   const initialProps = {
      handleOpenGender,
      userProfile,
      setUseProfile
   }
   return (
      <View style={StylesEditProfile.container}>
         <View style={StylesEditProfile.header}>
            <TouchableOpacity style={StylesEditProfile.btnBack} onPress={handleBackProfile}>
               <IconAntd name="arrowleft" style={StylesEditProfile.iconBACK} />
            </TouchableOpacity>
            <Text style={StylesEditProfile.titleHeader}>Thông tin tài khoản</Text>
            <TouchableOpacity style={StylesEditProfile.btnSave} onPress={handleSaveEdit}>
               <Text style={StylesEditProfile.textbtnSave}>Lưu</Text>
            </TouchableOpacity>
         </View>
         <ScrollView>
            <FormEditProfile {...initialProps} />
         </ScrollView>
         <Modal style={{ justifyContent: "flex-end", margin: 0 }}
            isVisible={isShowModalGender}
            onBackdropPress={handleCloseGender}
         >
            <View style={StylesEditProfile.modalGender}>
               <Text style={StylesEditProfile.titleModal}>Giới tính</Text>
               <TouchableOpacity style={StylesEditProfile.itemGender} onPress={handleChooseMale}>
                  <Text>Nam</Text>
               </TouchableOpacity>
               <TouchableOpacity style={StylesEditProfile.itemGender} onPress={handleChooseFeMale}>
                  <Text>Nữ</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </View>
   )
}