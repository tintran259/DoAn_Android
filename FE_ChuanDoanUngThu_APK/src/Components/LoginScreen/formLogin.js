import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StylesLoginScreen } from '../../Assets/Style/LoginStyle'
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import IconAntd from 'react-native-vector-icons/AntDesign'

export default function FormLogin({
   formLogin,
   setFormLogin,
   isOnPressLogin,
   setIsOnPressLogin,
   handleLoginSuccess,
}) {
   const [isShowScanQR, setIsShowScanQR] = useState(false)
   const navigation = useNavigation()
   const onSuccess = e => {
      console.log('====================================');
      console.log("E:", e);
      console.log('====================================');
      setIsShowScanQR(false)
   };

   const handleLogin = () => {
      handleLoginSuccess()
   }
   const handleRegister = () => {
      navigation.navigate('Register')
   }
   const handleShowScanQR = () => {
      setIsShowScanQR(true)
   }
   const handleHideScanQR = () => {
      setIsShowScanQR(false)
   }
   const handleValidateUsername = (e) => {
      const value = e.nativeEvent.text
      console.log("value:", value);
   }
   return (
      <>
         <View style={StylesLoginScreen.formLogin}>
            <View style={StylesLoginScreen.formUsername}>
               <Text style={StylesLoginScreen.labelForm}>Tài khoản</Text>
               <TextInput
                  placeholder="Username ..."
                  style={[StylesLoginScreen.inputForm, formLogin.username === "" && isOnPressLogin ? { backgroundColor: "#fff", borderColor: "#e74c3c" } : ""]}
                  value={formLogin.username}
                  onChangeText={text => setFormLogin({ ...formLogin, username: text })}
                  onEndEditing={e => handleValidateUsername(e)}
               ></TextInput>
               {
                  formLogin.username === "" && isOnPressLogin ?
                     <Text style={StylesLoginScreen.validate}>Vui lòng nhập tài khoản !</Text>
                     :
                     <Text style={{ display: "none" }}></Text>
               }
            </View>
            <View style={StylesLoginScreen.formPassword}>
               <Text style={StylesLoginScreen.labelForm}>Mật khẩu </Text>
               <TextInput
                  placeholder="Password ..."
                  secureTextEntry={true}
                  style={[StylesLoginScreen.inputForm, formLogin.password === "" && isOnPressLogin ? { backgroundColor: "#fff", borderColor: "#e74c3c" } : ""]}
                  value={formLogin.password}
                  onChangeText={text => setFormLogin({ ...formLogin, password: text })}
               >
               </TextInput>
               {
                  formLogin.password === "" && isOnPressLogin ?
                     <Text style={StylesLoginScreen.validate}>Vui lòng nhập mật khẩu !</Text>
                     :
                     <Text style={{ display: "none" }}></Text>
               }
            </View>
            <View style={StylesLoginScreen.controlForm}>
               <View style={StylesLoginScreen.formBtnLogin}>
                  <View style={StylesLoginScreen.btnLoginView}>
                     <TouchableOpacity style={StylesLoginScreen.btnLogin} onPress={handleLogin}>
                        <Text style={StylesLoginScreen.labelLogin}>Đăng nhập</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={StylesLoginScreen.btnScanView}>
                     <TouchableOpacity style={StylesLoginScreen.btnScan} onPress={handleShowScanQR}>
                        <Image style={StylesLoginScreen.imageScan} source={require("../../Assets/Image/qr-code-scan.png")} />
                     </TouchableOpacity>
                  </View>
               </View>
               <Text style={StylesLoginScreen.textLine}>--------------------Or--------------------</Text>
               <View style={StylesLoginScreen.btnRegisterView}>
                  <TouchableOpacity style={StylesLoginScreen.btnRegister} onPress={handleRegister}>
                     <Text style={StylesLoginScreen.labelRegiter}>Đăng kí</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
         {
            isShowScanQR ?
               <View style={StylesLoginScreen.QRcode}>
                  <QRCodeScanner
                     reactivate={true}
                     showMarker={true}
                     reactivateTimeout={2000}
                     onRead={onSuccess}
                     topContent={
                        <View style={StylesLoginScreen.topContentQR}>
                           <TouchableOpacity style={StylesLoginScreen.btnCloseQR} onPress={handleHideScanQR}>
                              <IconAntd name="close" size={25} color="#fff" />
                           </TouchableOpacity>
                        </View>
                     }
                     markerStyle={StylesLoginScreen.markerQR}
                  />
               </View>
               :
               <Text style={{ display: "none" }}></Text>
         }
      </>
   )
}
