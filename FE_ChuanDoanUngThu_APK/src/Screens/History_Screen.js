import React from 'react'
import { View, Text, Image } from 'react-native'
import { StylesHisToryScreen } from '../Assets/Style/HistoryStyle/HistoryScreenStyles'
export default function HistoryScreen() {
   return (
      <View style={StylesHisToryScreen.container}>
         <Image style={StylesHisToryScreen.imageSetting} source={require('../Assets/Image/setting.png')} />
         <Text style={StylesHisToryScreen.textSetting}>Đang xây dựng ...</Text>
      </View>
   )
}