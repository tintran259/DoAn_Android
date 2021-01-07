import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { StylesRegisterScreen } from '../../Assets/Style/RegisterStyle'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';


export default function FormRegiser({
   formRegister,
   setFormRegister,
   isHandleRegister,
   setIsHandleRegister
}) {

   const [checkRePassword, setCheckRePassword] = useState(false)

   const StylesValidate = {
      backgroundColor: "#FFF",
      borderColor: "#e74c3c"
   }

   const onBlurRe_passord = (e) => {
      const repassword = e.nativeEvent.text
      if (repassword !== formRegister.password) {
         setCheckRePassword(true)
      } else {
         setCheckRePassword(false)
      }
   }



   return (
      <View style={StylesRegisterScreen.formRegister}>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Fullname</Text>
            <TextInput
               value={formRegister.fullname}
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.fullname === "" ? StylesValidate : ""]}
               placeholder="Fullname ..."
               onChangeText={text => setFormRegister({ ...formRegister, fullname: text })}
            />
            {
               isHandleRegister && formRegister.fullname === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Enter fullname please !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Username</Text>
            <TextInput
               value={formRegister.username}
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.username === "" ? StylesValidate : ""]}
               placeholder="Username ..."
               onChangeText={text => setFormRegister({ ...formRegister, username: text })}
            />
            {
               isHandleRegister && formRegister.username === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Enter username please !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Password</Text>
            <TextInput
               value={formRegister.password}
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.password === "" ? StylesValidate : ""]}
               secureTextEntry={true}
               placeholder="Password ..."
               onChangeText={text => setFormRegister({ ...formRegister, password: text })}
            />
            {
               isHandleRegister && formRegister.password === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Enter password please !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }

         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Re-Password</Text>
            <TextInput
               value={formRegister.rePassword}
               style={[
                  StylesRegisterScreen.input,
                  isHandleRegister && formRegister.rePassword === "" ? StylesValidate : "",
                  checkRePassword && formRegister.password !== formRegister.rePassword ? StylesValidate : ""
               ]}
               secureTextEntry={true}
               placeholder="Re-Password ..."
               onEndEditing={e => onBlurRe_passord(e)}
               onChangeText={text => setFormRegister({ ...formRegister, rePassword: text })}
            />
            {
               isHandleRegister && formRegister.rePassword === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Enter Re-password please !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
            {
               checkRePassword && formRegister.password !== formRegister.rePassword ?
                  <Text style={StylesRegisterScreen.textValidate}>Re-Password different Password !</Text>
                  :
                  <Text style={{ display: "none" }}></Text>

            }
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Address</Text>
            <TextInput
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.address === "" ? StylesValidate : ""]}
               placeholder="Address ..."
               value={formRegister.address}
               onChangeText={text => setFormRegister({ ...formRegister, address: text })}
            />
            {
               isHandleRegister && formRegister.address === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Enter Address please !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesRegisterScreen.formItemRow}>
            <View style={StylesRegisterScreen.formRowLeft}>
               <Text style={StylesRegisterScreen.labelFormItem}>Phone number</Text>
               <TextInput
                  keyboardType={'numeric'}
                  style={[StylesRegisterScreen.inputRow, isHandleRegister && formRegister.phone === "" ? StylesValidate : ""]}
                  placeholder="Phone number ..."
                  value={formRegister.phone}
                  onChangeText={text => setFormRegister({ ...formRegister, phone: text })}
               />
               {
                  isHandleRegister && formRegister.phone === "" ?
                     <Text style={StylesRegisterScreen.textValidate}>Enter phoneNumber please !</Text> :
                     <Text style={{ display: "none" }}></Text>
               }

            </View>
            <View style={StylesRegisterScreen.formRowRight}>
               <Text style={StylesRegisterScreen.labelFormItem}>Gender</Text>
               <DropDownPicker
                  items={[
                     { label: 'Male', value: '0' },
                     { label: 'Female', value: '1' },
                  ]}
                  containerStyle={{ height: 50 }}
                  style={{ backgroundColor: '#C4C4C4', marginTop: 10, width: "100%" }}
                  defaultValue={formRegister.gender}
                  onChangeItem={text => { setFormRegister({ ...formRegister, gender: text.value }) }}
                  itemStyle={{
                     justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{ backgroundColor: '#ffff', marginTop: 10 }}
               />
            </View>
         </View>
         <View style={StylesRegisterScreen.formItemRow}>
            <View style={StylesRegisterScreen.formRowLeft}>
               <Text style={StylesRegisterScreen.labelFormItem}>Indentify</Text>
               <TextInput
                  keyboardType={'numeric'}
                  style={[StylesRegisterScreen.inputRow, isHandleRegister && formRegister.indentify === "" ? StylesValidate : ""]}
                  placeholder="Indentify ..."
                  value={formRegister.indentify}
                  onChangeText={text => setFormRegister({ ...formRegister, indentify: text })}
               />
               {
                  isHandleRegister && formRegister.indentify === "" ?
                     <Text style={StylesRegisterScreen.textValidate}>Enter indentify please !</Text> :
                     <Text style={{ display: "none" }}></Text>
               }
            </View>
            <View style={StylesRegisterScreen.formRowRight}>
               <Text style={StylesRegisterScreen.labelFormItem}>Age</Text>
               <TextInput
                  keyboardType={'numeric'}
                  style={[StylesRegisterScreen.inputRow, isHandleRegister && formRegister.age === "" ? StylesValidate : ""]}
                  placeholder="Age .."
                  value={formRegister.age}
                  onChangeText={text => setFormRegister({ ...formRegister, age: text })}
               />
            </View>
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>The guardian</Text>
            <TextInput
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.fullnameGuardian === "" ? StylesValidate : ""]}
               placeholder="Fullname guardian ..."
               value={formRegister.fullnameGuardian}
               onChangeText={text => setFormRegister({ ...formRegister, fullnameGuardian: text })}
            />
            {
               isHandleRegister && formRegister.fullnameGuardian === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Enter name guardian please !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Phone number guardian</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.phoneGuardian === "" ? StylesValidate : ""]}
               placeholder="Phone number guardian ..."
               value={formRegister.phoneGuardian}
               onChangeText={text => setFormRegister({ ...formRegister, phoneGuardian: text })}
            />
            {
               isHandleRegister && formRegister.phoneGuardian === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Enter phone guardian please !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>

      </View>
   )
}