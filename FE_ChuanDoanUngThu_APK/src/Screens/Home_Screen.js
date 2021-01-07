import React from 'react'
import { View, Text, StatusBar, ScrollView, Image, FlatList, StyleSheet } from 'react-native'
import { StylesHomeScreen } from '../Assets/Style/HomeStyle'
import { ListHistory, UserInfor } from '../Components/HomeScreen'
import { useNavigation } from '@react-navigation/native'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from "react-native-web-swiper";

export default function HomeScreen() {

   const navigation = useNavigation()

   const moveProfileScreen = () => {
      navigation.navigate('Profile')
   }
   const moveHistoryScreen = () => {
      navigation.navigate('History')
   }
   return (
      <View style={StylesHomeScreen.container}>
         <StatusBar barStyle="light-content" translucent={true} backgroundColor="#E33B3B" />
         <ScrollView style={StylesHomeScreen.body}>
            <View style={StylesHomeScreen.notification}>
               <TouchableOpacity style={StylesHomeScreen.btnIcon}>
                  <IconFontisto name="bell" style={StylesHomeScreen.iconBell} />
               </TouchableOpacity>
            </View>
            <View style={StylesHomeScreen.header}>
               <View style={StylesHomeScreen.ViewUser}>
                  <View style={StylesHomeScreen.avatarUser}>
                     <Image style={StylesHomeScreen.avatarImage} source={{ uri: "https://pbs.twimg.com/media/EcJgt56U4AEzvel.jpg" }} />
                  </View>
                  <View style={StylesHomeScreen.inforUser}>
                     <Text style={StylesHomeScreen.textName}>Nguyen Thanh Hao</Text>
                     <Text style={StylesHomeScreen.textAddress}>6/7dasdsa</Text>
                  </View>
                  <View style={StylesHomeScreen.viewBtn}>
                     <TouchableOpacity style={StylesHomeScreen.btnProfile} onPress={moveProfileScreen}>
                        <IconAntd name="right" style={StylesHomeScreen.iconRight} />
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={StylesHomeScreen.bodyContent}>
               <View style={StylesHomeScreen.Control}>
                  <View style={StylesHomeScreen.card1}>
                     <View style={StylesHomeScreen.ViewCard}>
                        <TouchableOpacity style={StylesHomeScreen.card}>
                           <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/pharmacy.png')} />
                           <Text style={StylesHomeScreen.textControl}>Hồ sơ sức khỏe</Text>
                        </TouchableOpacity>
                     </View>
                     <View style={StylesHomeScreen.ViewCard}>
                        <TouchableOpacity style={StylesHomeScreen.card} onPress={moveHistoryScreen}>
                           <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/information.png')} />
                           <Text style={StylesHomeScreen.textControl}>Lịch sử tư vấn</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={StylesHomeScreen.card1}>
                     <View style={StylesHomeScreen.ViewCard}>
                        <TouchableOpacity style={StylesHomeScreen.card}>
                           <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/hert.png')} />
                           <Text style={StylesHomeScreen.textControl}>Theo dõi sức khỏe</Text>
                        </TouchableOpacity>
                     </View>
                     <View style={StylesHomeScreen.ViewCard}>
                        <TouchableOpacity style={StylesHomeScreen.card}>
                           <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/clock.png')} />
                           <Text style={StylesHomeScreen.textControl}>Lịch nhắc sức khỏe</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
               <View style={StylesHomeScreen.bannerView}>
                  <Swiper>
                     <View style={[styles.slideContainer, styles.slide1]}>
                        <Text>Slide 1</Text>
                     </View>
                  </Swiper>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   slideContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
   },
   slide1: {
      backgroundColor: "rgba(20,20,200,0.3)"
   },
   slide2: {
      backgroundColor: "rgba(20,200,20,0.3)"
   },
   slide3: {
      backgroundColor: "rgba(200,20,20,0.3)"
   },
});