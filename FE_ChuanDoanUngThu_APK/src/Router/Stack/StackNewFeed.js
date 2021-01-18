import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NewFeedScreen from '../../Screens/NewFeedScreen';
import NewFeedDetailScreen from '../../Screens/NewFeedDetailScreen';
const Stack = createStackNavigator();

export default function StackLoginRegister() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="NewFeed" component={NewFeedScreen} />
         <Stack.Screen name="NewFeedDetail" component={NewFeedDetailScreen} />
      </Stack.Navigator>
   )
}