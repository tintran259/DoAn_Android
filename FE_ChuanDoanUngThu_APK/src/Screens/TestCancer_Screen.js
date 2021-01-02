import React from 'react'
import { Text, View } from 'react-native'
import { StylesTestCancer } from '../Assets/Style/TestCancerStyle'

export default function TestCancerScreen() {
   return (
      <View style={StylesTestCancer.container}>
         <View style={StylesTestCancer.header}>
            <Text style={StylesTestCancer.titleHeader}>Test cancer</Text>
         </View>
      </View>
   )
}