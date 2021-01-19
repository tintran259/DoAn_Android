import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { StylesModalHospital } from '../../Assets/Style/HomeStyle'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import IconFont from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
// import Geolocation from '@react-native-community/geolocation';

export default function ModalHospitalDetail({
   isShowModalHospital,
   hospitalDetail,
   handleHideModalHospital
}) {
   const navigation = useNavigation()
   console.log("hospitalDetail:", hospitalDetail);
   const handleMap = () => {
      navigation.navigate('MapDetailHospital')
      handleHideModalHospital()
   }
   return (
      <Modal
         isVisible={isShowModalHospital}
         onBackdropPress={handleHideModalHospital}
      >
         <View style={StylesModalHospital.ModalHospital}>
            <View style={StylesModalHospital.viewMap}>
               <MapView
                  style={{ flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={{
                     latitude: parseInt(hospitalDetail.latitude),
                     longitude: parseInt(hospitalDetail.longitude),
                     latitudeDelta: 0.0002,
                     longitudeDelta: 0.0002,
                  }}
               >
                  <Marker
                     coordinate={{
                        latitude: parseInt(hospitalDetail.latitude),
                        longitude: parseInt(hospitalDetail.longitude),
                     }}
                     title="Hospital"

                  />
               </MapView>
            </View>
            <View style={StylesModalHospital.BtnMap}>
               <TouchableOpacity style={StylesModalHospital.btnMaps} onPress={handleMap}>
                  <IconFont name="location-arrow" size={18} color="#fff" />
               </TouchableOpacity>
            </View>
            <View style={StylesModalHospital.viewConent}>
               <Text style={StylesModalHospital.titleName}>{hospitalDetail && hospitalDetail.name}</Text>
               <Text style={StylesModalHospital.textAddress}>{hospitalDetail && hospitalDetail.address}</Text>
            </View>
         </View>
      </Modal>
   )
}