import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../../Screens/Home_Screen'
import ProfileScreen from '../../Screens/Profile_Screen'
const Tab = createBottomTabNavigator();

export default function TabApp() {
   <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
   </Tab.Navigator>
}