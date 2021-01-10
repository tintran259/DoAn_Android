import React from 'react'
import { View, Text } from 'react-native'
import { StylesHisToryScreen } from '../Assets/Style/HistoryStyle/HistoryScreenStyles'
export default function HistoryScreen() {
   return (
      <View style={StylesHisToryScreen.container}>
         <View style={StylesHisToryScreen.header}>
            <Text>Lịch sử đã</Text>
         </View>
      </View>
   )
}