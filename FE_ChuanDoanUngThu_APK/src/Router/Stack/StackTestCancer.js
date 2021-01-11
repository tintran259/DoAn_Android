import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TestCancer from '../../Screens/TestCancer_Screen';
import TestCancerDetail from '../../Screens/TestCancerDetail';

const Stack = createStackNavigator();

export default function StackLoginRegister() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Test" component={TestCancer} />
         <Stack.Screen name="TestDetail" component={TestCancerDetail} />
      </Stack.Navigator>
   )
}