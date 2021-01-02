import React from 'react'
import { View, Text, StatusBar, ScrollView, Image, FlatList } from 'react-native'
import { StylesHomeScreen } from '../Assets/Style/HomeStyle'
import { ListHistory, UserInfor } from '../Components/HomeScreen'
import IconAntd from 'react-native-vector-icons/AntDesign'
const data = [{ name: "dasdsad" }, { name: "dasdadasdsd" }]
export default function HomeScreen() {


   const HistToryNone = () => {
      return (
         <View style={StylesHomeScreen.EmptyView}>
            <Image style={StylesHomeScreen.imageEmpty} source={require("../Assets/Image/empty.png")} />
            <Text style={StylesHomeScreen.textEmpty}>You don't have history</Text>
         </View>
      )
   }
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
               <FlatList
                  contentContainerStyle={{ paddingBottom: 60 }}
                  data={[]}
                  keyExtractor={item => item.name.toString()}
                  renderItem={({ item }) => {
                     return (
                        <ListHistory dataHistory={item} />
                     )
                  }}
                  ListEmptyComponent={HistToryNone}
               />
            </View>
         </ScrollView>
      </View>
   )
}