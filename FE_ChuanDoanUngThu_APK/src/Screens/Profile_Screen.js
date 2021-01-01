import React from 'react'
import { View, Text, StatusBar, Image, ScrollView } from 'react-native'
import { StylesProfile } from '../Assets/Style/ProfileStyle'

export default function ProfileScreen() {
   return (
      <View style={StylesProfile.container}>
         <StatusBar barStyle="light-content" translucent={true} backgroundColor="#E33B3B" />
         <View style={StylesProfile.header}>
            <Text style={StylesProfile.titleHeader}>Profile</Text>
         </View>
         <ScrollView style={StylesProfile.body}>
            <View style={StylesProfile.ViewAvatar}>
               <Image style={StylesProfile.avatarUser} resizeMode="cover" source={require("../Assets/Image/avatar.jpg")} />
            </View>
            <View style={StylesProfile.bodyProfile}>
               <View style={StylesProfile.textInfor}>
                  <Text style={StylesProfile.title}>Fullname :</Text>
                  <Text style={StylesProfile.labeText}>Nguyen Thanh Hao</Text>
               </View>
               <View style={StylesProfile.textInfor}>
                  <Text style={StylesProfile.title}>Gender :</Text>
                  <Text style={StylesProfile.labeText}>Male</Text>
               </View>
               <View style={StylesProfile.textInfor}>
                  <Text style={StylesProfile.title}>Date :</Text>
                  <Text style={StylesProfile.labeText}>08/03/2020</Text>
               </View>
               <View style={StylesProfile.textInfor}>
                  <Text style={StylesProfile.title}>Address :</Text>
                  <Text style={StylesProfile.labeText}>Nguyen Thanh Hao</Text>
               </View>
               <View style={StylesProfile.textInfor}>
                  <Text style={StylesProfile.title}>Phone number :</Text>
                  <Text style={StylesProfile.labeText}>0123123123</Text>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}