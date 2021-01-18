import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StylesListDoctor } from '../../Assets/Style/HomeStyle'
import { URL_SEVER } from '../../Contants'


export default function ListDoctor({ item }) {
   const URL = `http://${URL_SEVER}:433${item.image}`
   return (
      <View style={StylesListDoctor.listDoctor}>
         <View style={StylesListDoctor.cardDoctor}>
            <Image resizeMode="cover" style={StylesListDoctor.avatarDoctor} source={{ uri: URL }} />
            <Text style={StylesListDoctor.naemDoctor}>Bs. {item.fullname}</Text>
            <Text style={StylesListDoctor.optionDoctor}>{item.department}</Text>
            <TouchableOpacity style={StylesListDoctor.btnTuVan}>
               <Text style={StylesListDoctor.textBtnDoctor}>Tư vấn với bác sĩ</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}