import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../Screens/Profile_Screen';
import EditProfile from '../../Screens/EditProfileScreen';
import ChangePassword from '../../Screens/ChangePassword'
const Stack = createStackNavigator();

export default function StackLoginRegister() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="EditProfile" component={EditProfile} />
         <Stack.Screen name="ChangePass" component={ChangePassword} />
      </Stack.Navigator>
   )
}