import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { StylesTestCancer } from '../Assets/Style/TestCancerStyle'
import { FormTestCancer } from '../Components/TestCancerScreen.js'

export default function TestCancerScreen() {
   return (
      <ScrollView style={StylesTestCancer.container}>
         <View style={StylesTestCancer.header}>
            <Text style={StylesTestCancer.titleHeader}>Tư Vấn</Text>
         </View>
         <View style={StylesTestCancer.btnSaveView}>
            <TouchableOpacity style={StylesTestCancer.btnSave}>
               <Text style={StylesTestCancer.textBtnSave}>Lưu</Text>
            </TouchableOpacity>
         </View>
         <View style={StylesTestCancer.body}>
            <FormTestCancer />
         </View>
      </ScrollView>
   )
}