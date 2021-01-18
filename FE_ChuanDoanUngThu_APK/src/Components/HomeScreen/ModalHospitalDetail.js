import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Modal from 'react-native-modal'
import { StylesModalHospital } from '../../Assets/Style/HomeStyle'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function ModalHospitalDetail({
   isShowModalHospital,
   hospitalDetail,
   handleHideModalHospital
}) {
   const [location, setLocation] = useState({
      latitude: 10.8762491,
      longitude: 106.8005161
   })
   console.log("location:", location);
   useEffect(() => {
      Geolocation.getCurrentPosition(info => {
         setLocation({
            latitude: info.coords.latitude,
            longitude: info.coords.longitude
         })
      });
   }, [])



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
                     latitude: location.latitude,
                     longitude: location.longitude,
                     latitudeDelta: 0.0012,
                     longitudeDelta: 0.00321,
                  }}
               >
                  <Marker
                     coordinate={location}
                     title="Hospital"
                  />
               </MapView>
            </View>
            <View style={StylesModalHospital.viewConent}>
               <Text style={StylesModalHospital.titleName}>{hospitalDetail && hospitalDetail.name}</Text>
               <Text style={StylesModalHospital.textAddress}>{hospitalDetail && hospitalDetail.address}</Text>
            </View>
         </View>
      </Modal>
   )
}