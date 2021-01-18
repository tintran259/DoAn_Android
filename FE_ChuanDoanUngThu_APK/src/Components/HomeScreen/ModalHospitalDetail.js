import React from 'react'
import { View, Text, Image } from 'react-native'
import Modal from 'react-native-modal'
import { StylesModalHospital } from '../../Assets/Style/HomeStyle'
import MapView from 'react-native-maps';


export default function ModalHospitalDetail({
   isShowModalHospital,
   hospitalDetail,
   handleHideModalHospital
}) {


   return (
      <Modal
         isVisible={isShowModalHospital}
         onBackdropPress={handleHideModalHospital}
      >
         <View style={StylesModalHospital.ModalHospital}>
            <View style={StylesModalHospital.viewMap}>
               <MapView
                  style={{ flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                  initialRegion={{
                     latitude: 37.78825,
                     longitude: -122.4324,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421,
                  }}
               />
            </View>
            <View style={StylesModalHospital.viewConent}>
               <Text style={StylesModalHospital.titleName}>{hospitalDetail && hospitalDetail.name}</Text>
               <Text style={StylesModalHospital.textAddress}>{hospitalDetail && hospitalDetail.address}</Text>
            </View>
         </View>
      </Modal>
   )
}