import React, { useState } from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { StylesProfile } from '../Assets/Style/ProfileStyle'
import IconEntyno from 'react-native-vector-icons/Entypo'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { InforProfileUser } from '../Components/ProfileScreen'
import Modal from 'react-native-modal'

export default function ProfileScreen() {
   const [isShowModal, setIsShowModal] = useState(false)
   const handleShowModal = () => {
      setIsShowModal(true)
   }
   const handleHideModal = () => {
      setIsShowModal(false)
   }

   return (
      <View style={StylesProfile.container}>
         <StatusBar barStyle="light-content" translucent={true} backgroundColor="#E33B3B" />
         <View style={StylesProfile.header}>
            <Text style={StylesProfile.titleHeader}>Cá nhân</Text>
            <View style={StylesProfile.viewBtnDots}>
               <TouchableOpacity style={StylesProfile.btnDots} onPress={handleShowModal}>
                  <IconEntyno name="dots-three-vertical" size={17} color="#000" />
               </TouchableOpacity>
            </View>
         </View>
         <ScrollView style={StylesProfile.body}>
            <InforProfileUser />
         </ScrollView>
         <Modal
            backdropTransitionOutTiming={700}
            onBackdropPress={handleHideModal}
            isVisible={isShowModal}
            style={{ alignItems: "center", justifyContent: "flex-end", margin: 0 }}
         >
            <View style={StylesProfile.Modal}>
               <View style={StylesProfile.headerModal}>
                  <Text style={StylesProfile.labelHeaderModal}>Settings</Text>
               </View>
               <View style={StylesProfile.controlModal}>

                  <TouchableOpacity style={StylesProfile.btnModal}>
                     <IconAntd name="edit" style={StylesProfile.iconModal} />
                     <Text style={StylesProfile.labelBtnModal}>Edit </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={StylesProfile.btnModal}>
                     <IconAntd style={StylesProfile.iconModal} name="edit" />
                     <Text style={StylesProfile.labelBtnModal}>Change password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={StylesProfile.btnModal}>
                     <IconAntd style={StylesProfile.iconModal} name="logout" />
                     <Text style={StylesProfile.labelBtnModal}>Log out</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </View>
   )
}