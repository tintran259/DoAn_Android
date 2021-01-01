import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StylesLoginScreen } from '../../Assets/Style/LoginStyle'
import { useNavigation } from '@react-navigation/native';

export default function FormLogin() {
   const navigation = useNavigation()

   const handleLogin = () => {
   }
   const handleRegister = () => {
      navigation.navigate('Register')
   }
   return (
      <View style={StylesLoginScreen.formLogin}>
         <View style={StylesLoginScreen.formUsername}>
            <Text style={StylesLoginScreen.labelForm}>Username</Text>
            <TextInput
               placeholder="Username ..."
               style={StylesLoginScreen.inputForm}
            ></TextInput>
         </View>
         <View style={StylesLoginScreen.formPassword}>
            <Text style={StylesLoginScreen.labelForm}>Password </Text>
            <TextInput
               placeholder="Password ..."
               secureTextEntry={true}
               style={StylesLoginScreen.inputForm}>
            </TextInput>
         </View>
         <View style={StylesLoginScreen.controlForm}>
            <View style={StylesLoginScreen.formBtnLogin}>
               <View style={StylesLoginScreen.btnLoginView}>
                  <TouchableOpacity style={StylesLoginScreen.btnLogin} onPress={handleLogin}>
                     <Text style={StylesLoginScreen.labelLogin}>Login</Text>
                  </TouchableOpacity>
               </View>
               <View style={StylesLoginScreen.btnScanView}>
                  <TouchableOpacity style={StylesLoginScreen.btnScan}>
                     <Image style={StylesLoginScreen.imageScan} source={require("../../Assets/Image/qr-code-scan.png")} />
                  </TouchableOpacity>
               </View>
            </View>
            <Text style={StylesLoginScreen.textLine}>--------------------Or--------------------</Text>
            <View style={StylesLoginScreen.btnRegisterView}>
               <TouchableOpacity style={StylesLoginScreen.btnRegister} onPress={handleRegister}>
                  <Text style={StylesLoginScreen.labelRegiter}>Register</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}