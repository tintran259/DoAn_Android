import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StylesListDoctor } from '../../Assets/Style/HomeStyle'

export default function ListDoctor({ item }) {
   return (
      <View style={StylesListDoctor.listDoctor}>
         <View style={StylesListDoctor.cardDoctor}>
            <Image resizeMode="cover" style={StylesListDoctor.avatarDoctor} source={{ uri: item.image }} />
            <Text style={StylesListDoctor.naemDoctor}>Thr.s {item.name}</Text>
            <Text style={StylesListDoctor.optionDoctor}>{item.option}</Text>
            <TouchableOpacity style={StylesListDoctor.btnTuVan}>
               <Text style={StylesListDoctor.textBtnDoctor}>Tư vấn với bác sĩ</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}