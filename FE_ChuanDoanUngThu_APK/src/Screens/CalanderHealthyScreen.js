import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StylesCalanderHealthy } from '../Assets/Style/CalanderHealthyStyle'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


export default function CalanderHealthy() {
   const navigation = useNavigation()
   const handleBack = () => {
      navigation.goBack()
   }
   return (
      <View style={StylesCalanderHealthy.container}>
         <View style={StylesCalanderHealthy.header}>
            <TouchableOpacity style={StylesCalanderHealthy.btnBackHistory} onPress={handleBack}>
               <IconAntd name="arrowleft" size={23} />
            </TouchableOpacity>
            <Text style={StylesCalanderHealthy.titleHeaderHst}>Lịch nhắc sức khỏe</Text>
         </View>
         <View style={StylesCalanderHealthy.bodyContent}>
            <Image style={StylesCalanderHealthy.imageSetting} source={require('../Assets/Image/setting.png')} />
            <Text style={StylesCalanderHealthy.textSetting}>Đang xây dựng ...</Text>
         </View>
      </View>
   )
}