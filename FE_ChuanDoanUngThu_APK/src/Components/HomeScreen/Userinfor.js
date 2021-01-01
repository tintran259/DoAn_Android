import React from 'react'
import { View, Text } from 'react-native'
import { StylesHomeScreen } from '../../Assets/Style/HomeStyle'

export default function UserInfor() {
   return (
      <View style={StylesHomeScreen.inforUserView}>
         <View style={StylesHomeScreen.textInfor}>
            <Text style={StylesHomeScreen.title}>Fullname :</Text>
            <Text style={StylesHomeScreen.labeText}>Nguyen Thanh Hao</Text>
         </View>
         <View style={StylesHomeScreen.textInfor}>
            <Text style={StylesHomeScreen.title}>Age :</Text>
            <Text style={StylesHomeScreen.labeText}>2 years</Text>
         </View>
         <View style={StylesHomeScreen.textInfor}>
            <View style={StylesHomeScreen.textInforLeft}>
               <Text style={StylesHomeScreen.title}>Gender :</Text>
               <Text style={StylesHomeScreen.labeText}>Male</Text>
            </View>
            <View style={StylesHomeScreen.textInforRight}>
               <Text style={StylesHomeScreen.title}>Birthday :</Text>
               <Text style={StylesHomeScreen.labeText}>20/10/2020</Text>
            </View>
         </View>
         <View style={StylesHomeScreen.textInfor}>
            <Text style={StylesHomeScreen.title}>Address :</Text>
            <Text style={StylesHomeScreen.labeText}>Bien hoa</Text>
         </View>
         <View style={StylesHomeScreen.textInfor}>
            <Text style={StylesHomeScreen.title}>Phone number :</Text>
            <Text style={StylesHomeScreen.labeText}>03763617632</Text>
         </View>
      </View>
   )
}