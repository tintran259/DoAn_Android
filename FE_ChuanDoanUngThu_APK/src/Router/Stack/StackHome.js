import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/Home_Screen';
import HistoryScreen from '../../Screens/History_Screen';
import ProfileScreen from '../../Screens/Profile_Screen'
const Stack = createStackNavigator();

export default function StackLoginRegister() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="History" component={HistoryScreen} />
         <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
   )
}