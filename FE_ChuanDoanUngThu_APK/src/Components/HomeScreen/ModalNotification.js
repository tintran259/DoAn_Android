import React from 'react'
import { View, Text, Image } from 'react-native'
import Modal from 'react-native-modal'

import { StylesHomeScreen } from '../../Assets/Style/HomeStyle'


export default function ModalNotification({
   handleHideNotification,
   isShowNotification
}) {
   return (
      <Modal
         animationOut="fadeOut"
         animationIn="fadeIn"
         animationOutTiming={600}
         backdropOpacity={0.6}
         backdropTransitionOutTiming={600}
         onBackdropPress={handleHideNotification}
         isVisible={isShowNotification}
         style={StylesHomeScreen.ModalNotification}
      >
         <Image style={StylesHomeScreen.iconPo} source={require("../../Assets/Image/blech2.png")} />
         <View style={StylesHomeScreen.ModalNofi}>
            <Text style={StylesHomeScreen.titleNotification}>Thông báo</Text>
            <View style={StylesHomeScreen.contentNotification}>
               <Image source={require("../../Assets/Image/paper.png")} />
               <Text style={StylesHomeScreen.textLabel}>Bạn chưa có thông báo nào</Text>
            </View>
         </View>
      </Modal>
   )
}