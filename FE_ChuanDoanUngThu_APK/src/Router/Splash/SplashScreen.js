import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { actHideSplashScreen } from '../../Store/App/action'
import { asyncGetListDoctor } from '../../Store/Doctor/action'
import { asyncGetListHospital } from '../../Store/Hospital/action'

export default function SplashScreen() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(asyncGetListDoctor())
      dispatch(asyncGetListHospital())
   }, [])
   setTimeout(() => {
      dispatch(actHideSplashScreen())
   }, 4000)
   return (
      <>
         <View style={stylesSplash.container}>
            <Image style={stylesSplash.logo} source={require("../../Assets/Image/logo1.png")} />
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
      backgroundColor: "#00cec9"
   },
   logo: {
      width: 210,
      height: 120,
   },
   textTile: {
      fontSize: 17,
      fontWeight: "bold",
      color: "#ecf0f1",
      letterSpacing: 1
   }
})