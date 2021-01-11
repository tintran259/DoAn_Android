import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../Screens/Home_Screen'
import ProfileScreen from '../../Screens/Profile_Screen'
import TestCancer from '../../Screens/TestCancer_Screen'
import StackHome from '../Stack/StackHome'
import StackProfile from '../Stack/StackProfile'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFont from 'react-native-vector-icons/FontAwesome5'
import StackTestCancer from '../Stack/StackTestCancer'
const Tab = createBottomTabNavigator();

export default function TabApp() {
   return (
      <Tab.Navigator
         tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#00cec9',
            activeBackgroundColor: "#00cec9",
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
            name="StackHome"
            component={StackHome}
            options={{
               tabBarLabel: 'Trang chủ',
               tabBarIcon: ({ color, size }) => (
                  <IconAntd name="home" color={color} size={20} />
               ),
            }}
         />
         <Tab.Screen
            name="StackTestCancer"
            component={StackTestCancer}
            options={{
               tabBarLabel: 'Xét Nghiệm',
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
                  <IconAntd name="user" color={color} size={20} />
               ),
            }}

         />
      </Tab.Navigator>
   )
}