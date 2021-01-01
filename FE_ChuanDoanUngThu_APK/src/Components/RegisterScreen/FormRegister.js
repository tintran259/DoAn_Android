import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { StylesRegisterScreen } from '../../Assets/Style/RegisterStyle'
import DropDownPicker from 'react-native-dropdown-picker';
export default function FormRegiser() {
   return (
      <View style={StylesRegisterScreen.formRegister}>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Fullname</Text>
            <TextInput
               style={StylesRegisterScreen.input}
               placeholder="Fullname ..."
            />
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Address</Text>
            <TextInput
               style={StylesRegisterScreen.input}
               placeholder="Address ..."
            />
         </View>
         <View style={StylesRegisterScreen.formItemRow}>
            <View style={StylesRegisterScreen.formRowLeft}>
               <Text style={StylesRegisterScreen.labelFormItem}>Phone number</Text>
               <TextInput
                  style={StylesRegisterScreen.inputRow}
                  placeholder="Phone number ..."
               />
            </View>
            <View style={StylesRegisterScreen.formRowRight}>
               <Text style={StylesRegisterScreen.labelFormItem}>Gender</Text>
               <DropDownPicker
                  items={[
                     { label: 'Male', value: 'Male' },
                     { label: 'Female', value: 'Female' },
                  ]}
                  containerStyle={{ height: 50 }}
                  style={{ backgroundColor: '#C4C4C4', marginTop: 10, width: "100%" }}
                  defaultValue="Male"
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
                  style={StylesRegisterScreen.inputRow}
                  placeholder="Indentify ..."

               />
            </View>
            <View style={StylesRegisterScreen.formRowRight}>
               <Text style={StylesRegisterScreen.labelFormItem}>Age</Text>
               <TextInput
                  style={StylesRegisterScreen.inputRow}
                  placeholder="Age .."

               />
            </View>
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>The guardian</Text>
            <TextInput
               style={StylesRegisterScreen.input}
               placeholder="Fullname guardian ..."
            />
         </View>
         <View style={StylesRegisterScreen.formItemRow}>
            <View style={StylesRegisterScreen.formRowLeft}>
               <Text style={StylesRegisterScreen.labelFormItem}>Phone number guardian</Text>
               <TextInput style={StylesRegisterScreen.inputRow}
                  placeholder="Phone number guardian ..."
               />
            </View>
            <View style={StylesRegisterScreen.formRowRight}>
               <Text style={StylesRegisterScreen.labelFormItem}>Gender</Text>
               <DropDownPicker
                  items={[
                     { label: 'Male', value: 'Male' },
                     { label: 'Female', value: 'Female' },
                  ]}
                  containerStyle={{ height: 50 }}
                  style={{ backgroundColor: '#C4C4C4', marginTop: 10, width: "100%" }}
                  defaultValue="Male"
                  itemStyle={{
                     justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{ backgroundColor: '#ffff', marginTop: 10, zIndex: 200 }}
               />
            </View>
         </View>
      </View>
   )
}