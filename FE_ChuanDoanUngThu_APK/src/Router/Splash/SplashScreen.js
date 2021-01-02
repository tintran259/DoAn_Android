import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function SplashScreen() {

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