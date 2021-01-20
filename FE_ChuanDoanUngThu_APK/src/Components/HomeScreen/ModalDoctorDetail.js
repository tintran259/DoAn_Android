import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Modal from 'react-native-modal'
import Communications from 'react-native-communications';
import Geolocation from '@react-native-community/geolocation';
import getDirections from 'react-native-google-maps-directions'

import { StylesHomeScreen } from '../../Assets/Style/HomeStyle'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFont from 'react-native-vector-icons/FontAwesome5'


import { URL_SEVER } from '../../Contants'


export default function ModalDoctorDetail({ doctorDetail, isShowModalDetailDoctor, handleHideModalDocdorDetail }) {

   const [location, setLocation] = useState({
      latitude: 37.4219974,
      longitude: -122.0839792
   })

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
            latitude: parseFloat(doctorDetail.latitude.replace(",", ".")),
            longitude: parseFloat(doctorDetail.longitude.replace(",", ".")),
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
               latitude: parseFloat(doctorDetail.latitude.replace(",", ".")),
               longitude: parseFloat(doctorDetail.longitude.replace(",", "."))
            },
            {
               latitude: parseFloat(doctorDetail.latitude.replace(",", ".")),
               longitude: parseFloat(doctorDetail.longitude.replace(",", "."))
            },
            {
               latitude: parseFloat(doctorDetail.latitude.replace(",", ".")),
               longitude: parseFloat(doctorDetail.longitude.replace(",", "."))
            }
         ]
      }
      getDirections(data)
      handleHideModalDocdorDetail()
   }



   return (
      <Modal
         isVisible={isShowModalDetailDoctor}
         style={{ alignItems: "center" }}
         onBackdropPress={handleHideModalDocdorDetail}
      >
         <View style={StylesHomeScreen.ModalDoctorDetail}>
            <IconAntd name="close" style={StylesHomeScreen.iconClose} onPress={handleHideModalDocdorDetail} />
            <View style={StylesHomeScreen.bodyModal}>
               <Image style={StylesHomeScreen.imgeDoctorDetail} source={{ uri: `http://${URL_SEVER}:433/${doctorDetail.image}` }} />
               <View style={StylesHomeScreen.LeftContent}>
                  <View style={StylesHomeScreen.itemText}>
                     <Text style={StylesHomeScreen.titleText}>Họ tên:</Text>
                     <Text style={StylesHomeScreen.nameText}>{doctorDetail && doctorDetail.fullname}</Text>
                  </View>
                  <View style={StylesHomeScreen.itemText}>
                     <Text style={StylesHomeScreen.titleText}>Chuyên khoa:</Text>
                     <Text style={StylesHomeScreen.nameText}>{doctorDetail && doctorDetail.department}</Text>
                  </View>
                  <View style={StylesHomeScreen.itemText}>
                     <Text style={StylesHomeScreen.titleText}>SDT:</Text>
                     <Text style={StylesHomeScreen.nameText}>{doctorDetail && doctorDetail.phone}</Text>
                  </View>
                  <View style={StylesHomeScreen.itemText}>
                     <Text style={StylesHomeScreen.titleText}>Địa chỉ:</Text>
                     <Text style={StylesHomeScreen.nameText}>{doctorDetail && doctorDetail.address}</Text>
                  </View>
               </View>
            </View>
            <View style={StylesHomeScreen.footerModal}>
               <TouchableOpacity style={StylesHomeScreen.btnContact} onPress={() => {
                  Communications.phonecall(doctorDetail.phone, true)
               }}>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>Liên hệ</Text>
               </TouchableOpacity>
            </View>
            <TouchableOpacity style={StylesHomeScreen.btnLocationDoctor} onPress={handleGetDirections}>
               <IconFont name="location-arrow" color="#fff" size={15} />
            </TouchableOpacity>
         </View>
      </Modal>
   )
}