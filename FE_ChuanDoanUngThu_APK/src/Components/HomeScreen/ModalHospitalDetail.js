import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import Communications from 'react-native-communications';
import Geolocation from '@react-native-community/geolocation';
import getDirections from 'react-native-google-maps-directions'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


import { StylesModalHospital } from '../../Assets/Style/HomeStyle'
import IconFont from 'react-native-vector-icons/FontAwesome5'
import IconFeather from 'react-native-vector-icons/Feather'

export default function ModalHospitalDetail({
   isShowModalHospital,
   hospitalDetail,
   handleHideModalHospital
}) {

   const [location, setLocation] = useState({
      latitude: 37.4219974,
      longitude: -122.0839792
   })
   console.log("hospitalDetail:", hospitalDetail);

   useEffect(() => {
      Geolocation.getCurrentPosition(info => {
         const latitude = info.coords.latitude
         const longitude = info.coords.longitude
         setLocation({
            latitude,
            longitude
         })
      })
   }, [])
   const handleGetDirections = () => {
      const data = {
         source: location,
         destination: {
            latitude: parseFloat(hospitalDetail.latitude.replace(",", ".")),
            longitude: parseFloat(hospitalDetail.longitude.replace(",", ".")),
         },
         params: [
            {
               key: "travelmode",
               value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
               key: "dir_action",
               value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
         ],
         waypoints: [
            {
               latitude: parseFloat(hospitalDetail.latitude.replace(",", ".")),
               longitude: parseFloat(hospitalDetail.longitude.replace(",", "."))
            },
            {
               latitude: parseFloat(hospitalDetail.latitude.replace(",", ".")),
               longitude: parseFloat(hospitalDetail.longitude.replace(",", "."))
            },
            {
               latitude: parseFloat(hospitalDetail.latitude.replace(",", ".")),
               longitude: parseFloat(hospitalDetail.longitude.replace(",", "."))
            }
         ]
      }
      getDirections(data)
      handleHideModalHospital()
   }

   const handleCallHospital = () => {
      Communications.phonecall(hospitalDetail.hotline, true)
   }
   return (
      <Modal
         isVisible={isShowModalHospital}
         onBackdropPress={handleHideModalHospital}
         backdropOpacity={0.6}
      >
         <View style={StylesModalHospital.ModalHospital}>
            <View style={StylesModalHospital.viewMap}>
               <MapView
                  style={{ flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={{
                     latitude: hospitalDetail.latitude && parseFloat(hospitalDetail.latitude.replace(",", ".")),
                     longitude: hospitalDetail.latitude && parseFloat(hospitalDetail.longitude.replace(",", ".")),
                     latitudeDelta: 0.002,
                     longitudeDelta: 0.0032,
                  }}
               >
                  <Marker
                     coordinate={{
                        latitude: hospitalDetail.latitude && parseFloat(hospitalDetail.latitude.replace(",", ".")),
                        longitude: hospitalDetail.latitude && parseFloat(hospitalDetail.longitude.replace(",", ".")),
                     }}
                     title="Hospital"
                  />
               </MapView>
            </View>
            <View style={StylesModalHospital.BtnMap}>
               <TouchableOpacity style={StylesModalHospital.btnMaps} onPress={handleGetDirections}>
                  <IconFont name="location-arrow" size={18} color="#fff" />
               </TouchableOpacity>
            </View>
            <View style={StylesModalHospital.BtnCall}>
               <TouchableOpacity style={StylesModalHospital.btnCalls} onPress={handleCallHospital}>
                  <IconFeather name="phone-call" size={18} color="#fff" />
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