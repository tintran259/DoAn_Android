import React from 'react'
import { View, Text, StatusBar, ScrollView, Image } from 'react-native'
import { StylesHomeScreen } from '../Assets/Style/HomeStyle'
import { ListHistory, UserInfor } from '../Components/HomeScreen'
import IconAntd from 'react-native-vector-icons/AntDesign'

export default function HomeScreen() {
   return (
      <View style={StylesHomeScreen.container}>
         <StatusBar barStyle="light-content" translucent={true} backgroundColor="#E33B3B" />
         <View style={StylesHomeScreen.header}>
            <Text style={StylesHomeScreen.titleHeader}>Home</Text>
         </View>
         <ScrollView style={StylesHomeScreen.body}>
            <View style={StylesHomeScreen.bannerHeader} >
               <Image resizeMode="cover" style={StylesHomeScreen.imageBanner} source={require("../Assets/Image/Banner.jpg")} />
            </View>
            <View style={StylesHomeScreen.labelUserinfor}>
               <Text style={StylesHomeScreen.textUserinfor}>User information</Text>
            </View>
            <UserInfor />
            <View style={StylesHomeScreen.labelUserinfor}>
               <Text style={StylesHomeScreen.textHistory}>History</Text>
            </View>
            <View style={StylesHomeScreen.listHistory}>
               <ListHistory />
               <ListHistory />
            </View>
         </ScrollView>
      </View>
   )
}