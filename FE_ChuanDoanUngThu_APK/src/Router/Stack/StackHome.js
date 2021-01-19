import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../Screens/Home_Screen'
import HistoryScreen from '../../Screens/History_Screen'
import CVHealthyUser from '../../Screens/CVHealthyUser'
import HisToryTestCancer from '../../Screens/HistoryTestCancer'
import CalanderHealthy from '../../Screens/CalanderHealthyScreen'
import ChangeHealthy from '../../Screens/ChangeHealthyScreen'
import HospitalDetailMap from '../../Screens/HospitalDetailMap'
const Stack = createStackNavigator();

export default function StackLoginRegister() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="History" component={HistoryScreen} />
         <Stack.Screen name="CVhealthy" component={CVHealthyUser} />
         <Stack.Screen name="HistoryDetail" component={HisToryTestCancer} />
         <Stack.Screen name="CalanderHealthy" component={CalanderHealthy} />
         <Stack.Screen name="ChangeHealthy" component={ChangeHealthy} />
         <Stack.Screen name="MapDetailHospital" component={HospitalDetailMap} />
      </Stack.Navigator>
   )
}