import React from 'react'
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native'
import { StylesHisToryScreen } from '../Assets/Style/HistoryStyle/HistoryScreenStyles'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export default function HistoryScreen() {
   const navigation = useNavigation()
   const hanleBack = () => {
      navigation.goBack()
   }
   return (
      <View style={StylesHisToryScreen.container}>
         <View style={StylesHisToryScreen.headerHistory}>
            <TouchableOpacity style={StylesHisToryScreen.btnBackHistory} onPress={hanleBack}>
               <IconAntd name="arrowleft" size={23} />
            </TouchableOpacity>
            <Text style={StylesHisToryScreen.titleHeaderHst}>Lịch sử trao đổi</Text>
         </View>
         <View style={StylesHisToryScreen.bodyContent}>
            <Image style={StylesHisToryScreen.imageSetting} source={require('../Assets/Image/setting.png')} />
            <Text style={StylesHisToryScreen.textSetting}>Đang xây dựng ...</Text>
         </View>
      </View>
   )
}