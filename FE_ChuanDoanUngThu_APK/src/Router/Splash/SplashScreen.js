import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { actHideSplashScreen } from '../../Store/App/action'
export default function SplashScreen() {
   const dispatch = useDispatch();
   setTimeout(() => {
      dispatch(actHideSplashScreen())
   }, 3000)
   return (
      <View style={stylesSplash.container}>
         <Image style={stylesSplash.logo} source={require("../../Assets/Image/logo.png")} />
         <Text style={stylesSplash.textTile}>Wellcome</Text>
      </View>
   )
}

const stylesSplash = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E33B3B"
   },
   logo: {
      width: 100,
      height: 100,
   },
   textTile: {
      fontSize: 17,
      fontWeight: "bold",
      color: "#ecf0f1",
      letterSpacing: 1
   }
})