import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { StylesLoginScreen } from '../Assets/Style/LoginStyle'
import { FormLogin } from '../Components/LoginScreen'
export default function LoginScreen() {
   return (
      <View style={StylesLoginScreen.container}>
         <ScrollView >
            <View style={StylesLoginScreen.header}>
               <Image style={StylesLoginScreen.logo} source={require("../Assets/Image/logo.png")} />
               <Text style={StylesLoginScreen.textLogo}>Hospital</Text>
            </View>
            <FormLogin />
         </ScrollView>
      </View>
   )
}