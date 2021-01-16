import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import { StylesTestCancerDetail } from '../../Assets/Style/TestCancerDetail'

export default function ModalHospital({ isVisible, dataHospital, handleHideModalHospital }) {
   return (
      <Modal
         isVisible={isVisible}
         onBackdropPress={handleHideModalHospital}
      >
         <View style={StylesTestCancerDetail.ModalHospital}>
            <View style={StylesTestCancerDetail.ViewMap}>

            </View>
            <View style={StylesTestCancerDetail.ViewContent}>
               <Text style={StylesTestCancerDetail.titleHospital}>{dataHospital && dataHospital.name}</Text>
            </View>
         </View>
      </Modal>
   )
}