import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Modal from 'react-native-modal'
import { StylesHomeScreen } from '../../Assets/Style/HomeStyle'
import Communications from 'react-native-communications';
import IconAntd from 'react-native-vector-icons/AntDesign'
import { URL_SEVER } from '../../Contants'


export default function ModalDoctorDetail({ doctorDetail, isShowModalDetailDoctor, handleHideModalDocdorDetail }) {
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
         </View>
      </Modal>
   )
}