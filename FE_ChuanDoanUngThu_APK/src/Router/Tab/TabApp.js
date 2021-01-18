import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackHome from '../Stack/StackHome'
import StackNewFeed from '../Stack/StackNewFeed'
import StackProfile from '../Stack/StackProfile'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFont from 'react-native-vector-icons/FontAwesome5'
import StackTestCancer from '../Stack/StackTestCancer'
import IconIon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

export default function TabApp() {
   return (
      <Tab.Navigator
         tabBarOptions={{
            activeTintColor: '#00bab6',
            inactiveTintColor: '#636e72',
            // activeBackgroundColor: "#00cec9",
            // inactiveBackgroundColor: "#ffff",
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
            name="StackHome"
            component={StackHome}
            options={{
               tabBarLabel: 'Trang chủ',
               tabBarIcon: ({ color, size }) => (
                  <IconIon name="home" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="StackNewFeed"
            component={StackNewFeed}
            options={{
               tabBarLabel: 'Tin tức',
               tabBarIcon: ({ color, size }) => (
                  <IconIon name="ios-newspaper" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="StackTestCancer"
            component={StackTestCancer}
            options={{
               tabBarLabel: 'Tư vấn',
               tabBarIcon: ({ color, size }) => (
                  <IconFont name="clipboard-list" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="StackProfile"
            component={StackProfile}
            options={{
               tabBarLabel: 'Cá nhân',
               tabBarIcon: ({ color, size }) => (
                  <IconFont name="user" color={color} size={20} />
               ),
            }}

         />
      </Tab.Navigator>
   )
}