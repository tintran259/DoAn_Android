import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Screens/Login_Screen';
import RegisterScreen from '../../Screens/Register_Screen';
const Stack = createStackNavigator();

export default function StackLoginRegister() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
   )
}