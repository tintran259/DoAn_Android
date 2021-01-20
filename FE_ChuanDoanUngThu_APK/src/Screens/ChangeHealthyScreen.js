import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import IconAntd from 'react-native-vector-icons/AntDesign'

//Style + Icon
import { StylesChangeHealthy } from '../Assets/Style/ChangeHealthyStyle'
import { useNavigation } from '@react-navigation/native'



export default function CalanderHealthy() {
   const navigation = useNavigation()
   const handleBack = () => {
      navigation.goBack()
   }
   return (
      <View style={StylesChangeHealthy.container}>
         <View style={StylesChangeHealthy.header}>
            <TouchableOpacity style={StylesChangeHealthy.btnBackHistory} onPress={handleBack}>
               <IconAntd name="arrowleft" size={23} />
            </TouchableOpacity>
            <Text style={StylesChangeHealthy.titleHeaderHst}>Theo dõi sức khỏe</Text>
         </View>
         <View style={StylesChangeHealthy.bodyContent}>
            <Image style={StylesChangeHealthy.imageSetting} source={require('../Assets/Image/setting.png')} />
            <Text style={StylesChangeHealthy.textSetting}>Đang xây dựng ...</Text>
         </View>
      </View>
   )
}