import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { StylesHomeScreen } from '../../Assets/Style/HomeStyle'
import IconAntd from 'react-native-vector-icons/AntDesign'
export default function ListHistory() {
   return (
      <View style={StylesHomeScreen.cardHistory} >
         <View style={StylesHomeScreen.dateTime}>
            <View style={StylesHomeScreen.date}>
               <IconAntd name="clockcircleo" style={StylesHomeScreen.textdate} />
               <Text style={StylesHomeScreen.dateLabel}>12/12/2020</Text>
            </View>
            <View style={StylesHomeScreen.date}>
               <IconAntd name="clockcircle" style={StylesHomeScreen.textdate} />
               <Text style={StylesHomeScreen.dateLabel}>12/12/2020</Text>
            </View>
         </View>
      </View>
   )
}