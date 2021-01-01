import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../Screens/Home_Screen'
import ProfileScreen from '../../Screens/Profile_Screen'
import TestCancer from '../../Screens/TestCancer_Screen'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFont from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator();

export default function TabApp() {
   return (
      <Tab.Navigator
         tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#E33B3B',
            activeBackgroundColor: "#E33B3B",
            inactiveBackgroundColor: "#ffff",
            style: {
               borderTopLeftRadius: 10,
               borderTopRightRadius: 10,
               height: 45
            },
            showLabel: true,
            labelStyle: {
               fontSize: 11
            }
         }}

      >
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ color, size }) => (
                  <IconAntd name="home" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="TestCancer"
            component={TestCancer}
            options={{
               tabBarLabel: 'TestCancer',
               tabBarIcon: ({ color, size }) => (
                  <IconFont name="clipboard-list" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="Settings"
            component={ProfileScreen}
            options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({ color, size }) => (
                  <IconAntd name="user" color={color} size={20} />
               ),
            }}

         />
      </Tab.Navigator>
   )
}