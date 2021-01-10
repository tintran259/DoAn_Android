import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { actHideSplashScreen } from '../../Store/App/action'
import AnimatedLoader from "react-native-animated-loader";

export default function SplashScreen() {
   const dispatch = useDispatch();
   setTimeout(() => {
      dispatch(actHideSplashScreen())
   }, 4000)
   return (
      <>
         <View style={stylesSplash.container}>
            <Image style={stylesSplash.logo} source={require("../../Assets/Image/logo3.png")} />
         </View>

      </>
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
      width: 200,
      height: 120,
   },
   textTile: {
      fontSize: 17,
      fontWeight: "bold",
      color: "#ecf0f1",
      letterSpacing: 1
   }
})